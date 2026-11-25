export const id = 43;
export const ids = [43];
export const modules = {
  41761: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(131),
      Uu = ju(1135);

    function Zu(uu) {
      return (0, su.isDiscordClient)() ? `https://${Uu.e.discordDomain}/${uu.href}` : uu.href
    }
    const Xu = {
      scriptUrl: Zu(new ju.U(ju(41768))),
      wasmBinaryUrl: Zu(new ju.U(ju(41772)))
    }
  },
  34628: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      d: () => Zu,
      e: () => Xu
    });
    const su = 1179937895,
      Uu = 1313821514;

    function Zu(uu) {
      const Eu = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
      if (uu.byteLength < 20 || Eu.getUint32(0, !0) !== su || 2 !== Eu.getUint32(4, !0)) return null;
      const ju = Math.min(Eu.getUint32(8, !0), uu.byteLength),
        Zu = Eu.getUint32(12, !0);
      if (Eu.getUint32(16, !0) !== Uu || 20 + Zu > ju) return null;
      let Xu;
      try {
        Xu = JSON.parse((new TextDecoder).decode(uu.subarray(20, 20 + Zu)))
      } catch {
        return null
      }
      return "object" === typeof Xu && null !== Xu ? {
        json: Xu,
        jsonEnd: 20 + Zu,
        length: ju
      } : null
    }

    function Xu(uu) {
      var Eu;
      const ju = null === (Eu = Zu(uu)) || void 0 === Eu ? void 0 : Eu.json;
      if (void 0 === ju || !Array.isArray(ju.extensionsUsed) || !ju.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const su = ju.meshes;
      return Array.isArray(su) && su.some((uu => {
        const Eu = null === uu || void 0 === uu ? void 0 : uu.primitives;
        return Array.isArray(Eu) && Eu.some((uu => {
          const Eu = null === uu || void 0 === uu ? void 0 : uu.extensions;
          return null != (null === Eu || void 0 === Eu ? void 0 : Eu.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  51314: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => Du,
      pageModelPool: () => eu
    });
    var su = ju(3020),
      Uu = ju(36713),
      Zu = ju(41093),
      Xu = ju(41761),
      lu = ju(36684);
    Error;
    class qu extends Error {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${uu}: ${Eu}`), this.stage = uu, this.url = ju, this.status = su, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function fu(uu, Eu) {
      let ju = null,
        Uu = !1;
      return {
        get: () => {
          if (null === ju) {
            const Zu = async function(uu, Eu) {
              try {
                return (await (0, su.K)(uu)).buffer
              } catch (ju) {
                throw new qu(Eu, (0, lu.j)(ju), uu, ju instanceof su.g ? ju.status : null)
              }
            }(uu, Eu);
            ju = Zu, Zu.then((() => {
              Uu = ju === Zu
            }), (() => {
              ju = null
            }))
          }
          return ju
        },
        forget: () => {
          Uu && (ju = null, Uu = !1)
        }
      }
    }

    function Cu(uu, Eu) {
      const ju = fu(Eu, "wasm"),
        su = fu(uu, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ju.forget(), su.forget());
        const [uu, Eu] = await Promise.all([ju.get(), su.get()]);
        return {
          script: Eu,
          wasmBinary: uu
        }
      }
    }
    var bu = ju(34628),
      cu = ju(3290),
      Nu = ju(41046),
      Ou = ju(41153);
    class Yu extends Error {
      constructor(uu) {
        super(`no model worker could install it: ${uu}`), this.name = "DracoInstallError"
      }
    }
    class hu {
      constructor(uu) {
        this.opts = uu, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.zN = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let Eu = 0; Eu < Math.max(1, uu.count); Eu++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          zN: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((uu => null !== uu.job)).length
      }
      build(uu, Eu) {
        if (null !== this.stopped) return Promise.resolve((0, Nu.s)(uu, this.stopped));
        const ju = (0, bu.e)(Eu);
        return ju && this.downloadDecoder(), new Promise((su => {
          this.queue.push({
            word: uu,
            glb: Eu,
            draco: ju,
            attempts: 0,
            resolve: su
          }), this.pump()
        }))
      }
      stopWorkers() {
        this.resting = !0, this.pump()
      }
      startWorkers() {
        this.resting = !1, this.pump()
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.zN ? this.zN : null
      }
      pump() {
        const uu = this.resting && 0 === this.queue.length,
          Eu = this.files();
        for (const ju of this.slots) {
          if (null !== this.stopped) return;
          if (ju.gaveUp || ju.starting) continue;
          if (null === ju.worker) {
            uu || this.start(ju);
            continue
          }
          if (uu) {
            null === ju.job && "installing" !== ju.zN && this.end(ju);
            continue
          }
          if (null !== Eu && "none" === ju.zN && ju.failedDownload !== this.downloads && this.install(ju, ju.worker, Eu), null !== ju.job) continue;
          const su = this.queue.findIndex((uu => "installed" === ju.zN || !uu.draco));
          su >= 0 && this.run(ju, ju.worker, this.queue.splice(su, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((uu => !uu.gaveUp && ("none" !== uu.zN || uu.failedDownload !== this.downloads))) || (this.zN = "uninstallable", this.decoderFailed(new Yu(this.installFailure)))
      }
      start(uu) {
        if (uu.losses >= 6) return uu.gaveUp = !0, void(this.slots.every((uu => uu.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        uu.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((Eu => {
          let [ju, su] = Eu;
          null === this.stopped && this.launch(uu, ju, su)
        }), (uu => {
          this.fail(uu)
        }))
      }
      launch(uu, Eu, ju) {
        let su;
        try {
          su = Eu()
        } catch (Uu) {
          return void this.lose(uu, `a model worker could not be created (${String(Uu)})`)
        }
        uu.worker = su, this.startTimer(uu, 3e4, (Eu => {
          this.lose(uu, `a model worker did not start: ${(0,Ou.p)(Eu)}`)
        })), su.onmessage = Eu => {
          let {
            data: ju
          } = Eu;
          this.answered(uu, su, ju)
        }, su.onerror = Eu => {
          this.lose(uu, uu.starting ? `a model worker failed to start: ${Eu.message}` : `a model worker failed: ${Eu.message}`)
        }, su.postMessage({
          type: "start",
          module: ju
        })
      }
      end(uu) {
        const Eu = uu.worker;
        null !== Eu && (Eu.onmessage = null, Eu.onerror = null, Eu.terminate()), uu.worker = null, uu.zN = "none", uu.startedAt = void 0
      }
      startTimer(uu, Eu, ju) {
        uu.timer = new Ou.l(Eu, (Eu => {
          uu.timer = null, ju(Eu)
        }), void 0, this.opts.visibility)
      }
      clearTimer(uu) {
        var Eu;
        null === (Eu = uu.timer) || void 0 === Eu || Eu.cancel(), uu.timer = null
      }
      answered(uu, Eu, ju) {
        if ("lost" === ju.type) return void this.lose(uu, ju.reason);
        if (uu.starting) return "started" !== ju.type ? void this.lose(uu, `a model worker answered ${ju.type} before it started`) : (this.clearTimer(uu), uu.starting = !1, uu.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === ju.type || "dracoFailed" === ju.type) {
          if (ju.seq !== uu.installSeq) return;
          return void("installing" === uu.zN ? (this.clearTimer(uu), "dracoInstalled" === ju.type ? (uu.zN = "installed", this.pump()) : this.installFailed(uu, ju.reason)) : "dracoInstalled" === ju.type && "none" === uu.zN && uu.failedDownload === this.downloads && (uu.zN = "installed", uu.failedDownload = 0, this.pump()))
        }
        const su = uu.job;
        null !== su && "started" !== ju.type && ju.seq === uu.seq && ("trapped" !== ju.type ? (uu.job = null, uu.losses = 0, this.jobLosses = 0, su.resolve(new Uint8Array(ju.record)), this.pump()) : this.lose(uu, ju.trap, !0))
      }
      install(uu, Eu, ju) {
        const su = this.nextSeq++;
        uu.zN = "installing", uu.installSeq = su, this.startTimer(uu, 3e4, (Eu => {
          this.installFailed(uu, `no install within ${Math.round(Eu)} ms`)
        }));
        const Uu = ju.script.slice(0),
          Zu = ju.wasmBinary.slice(0);
        Eu.postMessage({
          type: "installDraco",
          seq: su,
          script: Uu,
          wasmBinary: Zu
        }, [Uu, Zu])
      }
      installFailed(uu, Eu) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${Eu}`), this.noInstall(uu, Eu), this.pump()
      }
      noInstall(uu, Eu) {
        uu.zN = "none", uu.failedDownload = this.downloads, this.installFailure = Eu
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.zN || null !== this.files()) return;
        const uu = "uninstallable" === this.zN;
        this.zN = "downloading", this.opts.downloadFiles(uu).then((uu => {
          null === this.stopped && (this.zN = uu, this.downloads++, this.pump())
        }), (uu => {
          this.zN = null, this.decoderFailed(uu)
        }))
      }
      decoderFailed(uu) {
        if (null !== this.stopped) return;
        const Eu = (0, lu.j)(uu);
        let ju = 0;
        for (const su of this.queue.splice(0)) su.draco ? (su.resolve((0, Nu.h)(su.word, Eu)), ju++) : this.queue.push(su);
        ju > 0 && this.opts.onDecoderFailed(uu), this.pump()
      }
      run(uu, Eu, ju) {
        const su = this.nextSeq++;
        uu.seq = su, uu.job = ju, ju.attempts++;
        const Uu = ju.glb.slice();
        Eu.postMessage({
          type: "job",
          seq: su,
          word: ju.word,
          glb: Uu.buffer
        }, [Uu.buffer])
      }
      lose(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(uu);
        const su = !ju && "installing" === uu.zN;
        void 0 !== uu.startedAt && performance.now() - uu.startedAt >= 6e4 && (uu.losses = 0), this.end(uu), uu.starting = !1, su && this.noInstall(uu, Eu);
        const Uu = uu.job;
        if (uu.job = null, null !== Uu || su || uu.losses++, this.opts.onWorkerLost(Eu), null !== Uu && su) Uu.attempts--, this.queue.unshift(Uu);
        else if (null !== Uu && (Uu.attempts < 2 ? this.queue.unshift(Uu) : Uu.resolve((0, Nu.o)(Uu.word, Eu)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(uu) {
        if (null !== this.stopped) return;
        this.stopped = null === uu ? "the model workers stopped" : `the model workers could not start: ${(0,lu.j)(uu)}`;
        const Eu = this.stopped,
          ju = uu => {
            uu.resolve((0, Nu.s)(uu.word, Eu))
          };
        for (const Uu of this.slots) {
          var su;
          this.clearTimer(Uu), null === (su = Uu.worker) || void 0 === su || su.terminate(), Uu.worker = null, null !== Uu.job && ju(Uu.job), Uu.job = null
        }
        this.queue.splice(0).forEach(ju), null !== uu && this.opts.onUnavailable(uu)
      }
    }
    const Du = [...su.v, 5e3, 15e3, 3e4];
    let gu = null;
    const Mu = new Set;

    function eu(uu) {
      return Mu.add(uu), gu ??= function() {
        let uu = (Eu = navigator.hardwareConcurrency, lu = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, Eu > 2 && !(0, cu.p)(lu) ? 2 : 1);
        var Eu, lu;
        const fu = new hu({
          module: (0, Uu.i)(Zu.c, {
            delays: Du,
            onRetry: (uu, Eu) => {
              gu === fu && Gu((ju => {
                ju.onModuleRetry(uu, Eu)
              }))
            }
          }),
          downloadFiles: Cu(Xu.b.scriptUrl, Xu.b.wasmBinaryUrl),
          loadWorker: async () => (await ju.e(44).then((() => ju(61716)))).createModelWorker,
          count: uu,
          onUnavailable: uu => {
            if (gu === fu) {
              gu = null;
              const Eu = function(uu) {
                return uu instanceof su.d ? [Zu.c.url().href] : void 0
              }(uu);
              Gu((ju => {
                ju.onUnavailable(uu, Eu)
              }))
            }
          },
          onDecoderFailed: uu => {
            if (gu === fu) {
              const Eu = uu instanceof qu ? uu.goneUrl : null,
                ju = null === Eu ? void 0 : [Eu];
              Gu((Eu => {
                Eu.onDecoderFailed(uu, ju)
              }))
            }
          },
          onWorkerLost: uu => {
            gu === fu && Gu((Eu => {
              Eu.onWorkerLost(uu)
            }))
          }
        });
        return fu
      }(), {
        pool: gu,
        unlisten: () => {
          Mu.delete(uu)
        }
      }
    }

    function Gu(uu) {
      for (const ju of [...Mu]) try {
        uu(ju)
      } catch (Eu) {
        console.error("[pageModelPool] a listener threw", Eu)
      }
    }
  },
  41768: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41772: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);