export const id = 42;
export const ids = [42];
export const modules = {
  41080: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu
    });
    var Eu = yu(145),
      Ku = yu(1183);

    function Qu(uu) {
      return (0, Eu.c)() ? `https://${Ku.c.discordDomain}/${uu.href}` : uu.href
    }
    const mu = {
      scriptUrl: Qu(new yu.U(yu(41085))),
      wasmBinaryUrl: Qu(new yu.U(yu(41093)))
    }
  },
  9148: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku,
      g: () => Qu,
      j: () => mu
    });
    const Eu = 1179937895,
      Ku = 1313821514;

    function Qu(uu) {
      const Ru = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
      if (uu.byteLength < 20 || Ru.getUint32(0, !0) !== Eu || 2 !== Ru.getUint32(4, !0)) return null;
      const yu = Math.min(Ru.getUint32(8, !0), uu.byteLength),
        Qu = Ru.getUint32(12, !0);
      if (Ru.getUint32(16, !0) !== Ku || 20 + Qu > yu) return null;
      let mu;
      try {
        mu = JSON.parse((new TextDecoder).decode(uu.subarray(20, 20 + Qu)))
      } catch {
        return null
      }
      return "object" === typeof mu && null !== mu ? {
        json: mu,
        jsonEnd: 20 + Qu,
        length: yu
      } : null
    }

    function mu(uu) {
      var Ru;
      const yu = null === (Ru = Qu(uu)) || void 0 === Ru ? void 0 : Ru.json;
      if (void 0 === yu || !Array.isArray(yu.extensionsUsed) || !yu.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Eu = yu.meshes;
      return Array.isArray(Eu) && Eu.some((uu => {
        const Ru = null === uu || void 0 === uu ? void 0 : uu.primitives;
        return Array.isArray(Ru) && Ru.some((uu => {
          const Ru = null === uu || void 0 === uu ? void 0 : uu.extensions;
          return null != (null === Ru || void 0 === Ru ? void 0 : Ru.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42935: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => Wu,
      pageModelPool: () => du
    });
    var Eu = yu(3514),
      Ku = yu(36199),
      Qu = yu(40341),
      mu = yu(41080),
      Ju = yu(36176);
    Error;
    class Nu extends Error {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${uu}: ${Ru}`), this.stage = uu, this.url = yu, this.status = Eu, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function Xu(uu, Ru) {
      let yu = null,
        Ku = !1;
      return {
        get: () => {
          if (null === yu) {
            const Qu = async function(uu, Ru) {
              try {
                return (await (0, Eu.E)(uu)).buffer
              } catch (yu) {
                throw new Nu(Ru, (0, Ju.k)(yu), uu, yu instanceof Eu.e ? yu.status : null)
              }
            }(uu, Ru);
            yu = Qu, Qu.then((() => {
              Ku = yu === Qu
            }), (() => {
              yu = null
            }))
          }
          return yu
        },
        forget: () => {
          Ku && (yu = null, Ku = !1)
        }
      }
    }

    function Vu(uu, Ru) {
      const yu = Xu(Ru, "wasm"),
        Eu = Xu(uu, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (yu.forget(), Eu.forget());
        const [uu, Ru] = await Promise.all([yu.get(), Eu.get()]);
        return {
          script: Ru,
          wasmBinary: uu
        }
      }
    }
    var ru = yu(9148),
      Bu = yu(2896),
      xu = yu(40544),
      Su = yu(40582);
    class pu extends Error {
      constructor(uu) {
        super(`no model worker could install it: ${uu}`), this.name = "DracoInstallError"
      }
    }
    class Tu {
      constructor(uu) {
        this.opts = uu, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.Ox = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let Ru = 0; Ru < Math.max(1, uu.count); Ru++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          Ox: "none",
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
      build(uu, Ru) {
        if (null !== this.stopped) return Promise.resolve((0, xu.o)(uu, this.stopped));
        const yu = (0, ru.j)(Ru);
        return yu && this.downloadDecoder(), new Promise((Eu => {
          this.queue.push({
            word: uu,
            glb: Ru,
            draco: yu,
            attempts: 0,
            resolve: Eu
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.Ox ? this.Ox : null
      }
      pump() {
        const uu = this.files();
        for (const Ru of this.slots) {
          if (null !== this.stopped) return;
          if (Ru.gaveUp || Ru.starting) continue;
          if (null === Ru.worker) {
            this.start(Ru);
            continue
          }
          if (null !== uu && "none" === Ru.Ox && Ru.failedDownload !== this.downloads && this.install(Ru, Ru.worker, uu), null !== Ru.job) continue;
          const yu = this.queue.findIndex((uu => "installed" === Ru.Ox || !uu.draco));
          yu >= 0 && this.run(Ru, Ru.worker, this.queue.splice(yu, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((uu => !uu.gaveUp && ("none" !== uu.Ox || uu.failedDownload !== this.downloads))) || (this.Ox = "uninstallable", this.decoderFailed(new pu(this.installFailure)))
      }
      start(uu) {
        if (uu.losses >= 6) return uu.gaveUp = !0, void(this.slots.every((uu => uu.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        uu.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((Ru => {
          let [yu, Eu] = Ru;
          null === this.stopped && this.launch(uu, yu, Eu)
        }), (uu => {
          this.fail(uu)
        }))
      }
      launch(uu, Ru, yu) {
        let Eu;
        try {
          Eu = Ru()
        } catch (Ku) {
          return void this.lose(uu, `a model worker could not be created (${String(Ku)})`)
        }
        uu.worker = Eu, this.startTimer(uu, 3e4, (Ru => {
          this.lose(uu, `a model worker did not start: ${(0,Su.m)(Ru)}`)
        })), Eu.onmessage = Ru => {
          let {
            data: yu
          } = Ru;
          this.answered(uu, Eu, yu)
        }, Eu.onerror = Ru => {
          this.lose(uu, uu.starting ? `a model worker failed to start: ${Ru.message}` : `a model worker failed: ${Ru.message}`)
        }, Eu.postMessage({
          type: "start",
          module: yu
        })
      }
      startTimer(uu, Ru, yu) {
        uu.timer = new Su.i(Ru, (Ru => {
          uu.timer = null, yu(Ru)
        }), void 0, this.opts.visibility)
      }
      clearTimer(uu) {
        var Ru;
        null === (Ru = uu.timer) || void 0 === Ru || Ru.cancel(), uu.timer = null
      }
      answered(uu, Ru, yu) {
        if ("lost" === yu.type) return void this.lose(uu, yu.reason);
        if (uu.starting) return "started" !== yu.type ? void this.lose(uu, `a model worker answered ${yu.type} before it started`) : (this.clearTimer(uu), uu.starting = !1, uu.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === yu.type || "dracoFailed" === yu.type) {
          if (yu.seq !== uu.installSeq) return;
          return void("installing" === uu.Ox ? (this.clearTimer(uu), "dracoInstalled" === yu.type ? (uu.Ox = "installed", this.pump()) : this.installFailed(uu, yu.reason)) : "dracoInstalled" === yu.type && "none" === uu.Ox && uu.failedDownload === this.downloads && (uu.Ox = "installed", this.pump()))
        }
        const Eu = uu.job;
        null !== Eu && "started" !== yu.type && yu.seq === uu.seq && ("trapped" !== yu.type ? (uu.job = null, uu.losses = 0, this.jobLosses = 0, Eu.resolve(new Uint8Array(yu.record)), this.pump()) : this.lose(uu, yu.trap, !0))
      }
      install(uu, Ru, yu) {
        const Eu = this.nextSeq++;
        uu.Ox = "installing", uu.installSeq = Eu, this.startTimer(uu, 3e4, (Ru => {
          this.installFailed(uu, `no install within ${Math.round(Ru)} ms`)
        }));
        const Ku = yu.script.slice(0),
          Qu = yu.wasmBinary.slice(0);
        Ru.postMessage({
          type: "installDraco",
          seq: Eu,
          script: Ku,
          wasmBinary: Qu
        }, [Ku, Qu])
      }
      installFailed(uu, Ru) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${Ru}`), this.noInstall(uu, Ru), this.pump()
      }
      noInstall(uu, Ru) {
        uu.Ox = "none", uu.failedDownload = this.downloads, this.installFailure = Ru
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.Ox || null !== this.files()) return;
        const uu = "uninstallable" === this.Ox;
        this.Ox = "downloading", this.opts.downloadFiles(uu).then((uu => {
          null === this.stopped && (this.Ox = uu, this.downloads++, this.pump())
        }), (uu => {
          this.Ox = null, this.decoderFailed(uu)
        }))
      }
      decoderFailed(uu) {
        if (null !== this.stopped) return;
        const Ru = (0, Ju.k)(uu);
        let yu = 0;
        for (const Eu of this.queue.splice(0)) Eu.draco ? (Eu.resolve((0, xu.e)(Eu.word, Ru)), yu++) : this.queue.push(Eu);
        yu > 0 && this.opts.onDecoderFailed(uu)
      }
      run(uu, Ru, yu) {
        const Eu = this.nextSeq++;
        uu.seq = Eu, uu.job = yu, yu.attempts++;
        const Ku = yu.glb.slice();
        Ru.postMessage({
          type: "job",
          seq: Eu,
          word: yu.word,
          glb: Ku.buffer
        }, [Ku.buffer])
      }
      lose(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(uu);
        const Eu = uu.worker;
        null !== Eu && (Eu.onmessage = null, Eu.onerror = null, Eu.terminate());
        const Ku = !yu && "installing" === uu.Ox;
        uu.worker = null, uu.starting = !1, uu.Ox = "none", Ku && this.noInstall(uu, Ru), void 0 !== uu.startedAt && performance.now() - uu.startedAt >= 6e4 && (uu.losses = 0), uu.startedAt = void 0;
        const Qu = uu.job;
        if (uu.job = null, null !== Qu || Ku || uu.losses++, this.opts.onWorkerLost(Ru), null !== Qu && Ku) Qu.attempts--, this.queue.unshift(Qu);
        else if (null !== Qu && (Qu.attempts < 2 ? this.queue.unshift(Qu) : Qu.resolve((0, xu.k)(Qu.word, Ru)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(uu) {
        if (null !== this.stopped) return;
        this.stopped = null === uu ? "the model workers stopped" : `the model workers could not start: ${(0,Ju.k)(uu)}`;
        const Ru = this.stopped,
          yu = uu => {
            uu.resolve((0, xu.o)(uu.word, Ru))
          };
        for (const Ku of this.slots) {
          var Eu;
          this.clearTimer(Ku), null === (Eu = Ku.worker) || void 0 === Eu || Eu.terminate(), Ku.worker = null, null !== Ku.job && yu(Ku.job), Ku.job = null
        }
        this.queue.splice(0).forEach(yu), null !== uu && this.opts.onUnavailable(uu)
      }
    }
    const Wu = [...Eu.s, 5e3, 15e3, 3e4];
    let ju = null;
    const Hu = new Set;

    function du(uu) {
      return Hu.add(uu), ju ??= function() {
        let uu = (Ru = navigator.hardwareConcurrency, Ju = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, Ru > 2 && !(0, Bu.n)(Ju) ? 2 : 1);
        var Ru, Ju;
        const Xu = new Tu({
          module: (0, Ku.g)(Qu.b, {
            delays: Wu,
            onRetry: (uu, Ru) => {
              ju === Xu && bu((yu => {
                yu.onModuleRetry(uu, Ru)
              }))
            }
          }),
          downloadFiles: Vu(mu.c.scriptUrl, mu.c.wasmBinaryUrl),
          loadWorker: async () => (await yu.e(43).then((() => yu(61373)))).createModelWorker,
          count: uu,
          onUnavailable: uu => {
            if (ju === Xu) {
              ju = null;
              const Ru = function(uu) {
                return uu instanceof Eu.c ? [Qu.b.url().href] : void 0
              }(uu);
              bu((yu => {
                yu.onUnavailable(uu, Ru)
              }))
            }
          },
          onDecoderFailed: uu => {
            if (ju === Xu) {
              const Ru = uu instanceof Nu ? uu.goneUrl : null,
                yu = null === Ru ? void 0 : [Ru];
              bu((Ru => {
                Ru.onDecoderFailed(uu, yu)
              }))
            }
          },
          onWorkerLost: uu => {
            ju === Xu && bu((Ru => {
              Ru.onWorkerLost(uu)
            }))
          }
        });
        return Xu
      }(), {
        pool: ju,
        unlisten: () => {
          Hu.delete(uu)
        }
      }
    }

    function bu(uu) {
      for (const yu of [...Hu]) try {
        uu(yu)
      } catch (Ru) {
        console.error("[pageModelPool] a listener threw", Ru)
      }
    }
  },
  41085: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41093: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);