export const id = 42;
export const ids = [42];
export const modules = {
  40886: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU
    });
    var tU = gU(135),
      pU = gU(1203);

    function EU(UU) {
      return (0, tU.e)() ? `https://${pU.e.discordDomain}/${UU.href}` : UU.href
    }
    const PU = {
      scriptUrl: EU(new gU.U(gU(40889))),
      wasmBinaryUrl: EU(new gU.U(gU(40894)))
    }
  },
  9069: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      e: () => EU,
      h: () => PU
    });
    const tU = 1179937895,
      pU = 1313821514;

    function EU(UU) {
      const RU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
      if (UU.byteLength < 20 || RU.getUint32(0, !0) !== tU || 2 !== RU.getUint32(4, !0)) return null;
      const gU = Math.min(RU.getUint32(8, !0), UU.byteLength),
        EU = RU.getUint32(12, !0);
      if (RU.getUint32(16, !0) !== pU || 20 + EU > gU) return null;
      let PU;
      try {
        PU = JSON.parse((new TextDecoder).decode(UU.subarray(20, 20 + EU)))
      } catch {
        return null
      }
      return "object" === typeof PU && null !== PU ? {
        json: PU,
        jsonEnd: 20 + EU,
        length: gU
      } : null
    }

    function PU(UU) {
      var RU;
      const gU = null === (RU = EU(UU)) || void 0 === RU ? void 0 : RU.json;
      if (void 0 === gU || !Array.isArray(gU.extensionsUsed) || !gU.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const tU = gU.meshes;
      return Array.isArray(tU) && tU.some((UU => {
        const RU = null === UU || void 0 === UU ? void 0 : UU.primitives;
        return Array.isArray(RU) && RU.some((UU => {
          const RU = null === UU || void 0 === UU ? void 0 : UU.extensions;
          return null != (null === RU || void 0 === RU ? void 0 : RU.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42680: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => eU,
      pageModelPool: () => xU
    });
    var tU = gU(3377),
      pU = gU(35912),
      EU = gU(40150),
      PU = gU(40886),
      TU = gU(35889);
    Error;
    class qU extends Error {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${UU}: ${RU}`), this.stage = UU, this.url = gU, this.status = tU, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function KU(UU, RU) {
      let gU = null,
        pU = !1;
      return {
        get: () => {
          if (null === gU) {
            const EU = async function(UU, RU) {
              try {
                return (await (0, tU.H)(UU)).buffer
              } catch (gU) {
                throw new qU(RU, (0, TU.j)(gU), UU, gU instanceof tU.i ? gU.status : null)
              }
            }(UU, RU);
            gU = EU, EU.then((() => {
              pU = gU === EU
            }), (() => {
              gU = null
            }))
          }
          return gU
        },
        forget: () => {
          pU && (gU = null, pU = !1)
        }
      }
    }

    function cU(UU, RU) {
      const gU = KU(RU, "wasm"),
        tU = KU(UU, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (gU.forget(), tU.forget());
        const [UU, RU] = await Promise.all([gU.get(), tU.get()]);
        return {
          script: RU,
          wasmBinary: UU
        }
      }
    }
    var GU = gU(9069),
      jU = gU(2811),
      uU = gU(40358),
      CU = gU(40398);
    class hU extends Error {
      constructor(UU) {
        super(`no model worker could install it: ${UU}`), this.name = "DracoInstallError"
      }
    }
    class QU {
      constructor(UU) {
        this.opts = UU, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.zu = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let RU = 0; RU < Math.max(1, UU.count); RU++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          zu: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((UU => null !== UU.job)).length
      }
      build(UU, RU) {
        if (null !== this.stopped) return Promise.resolve((0, uU.t)(UU, this.stopped));
        const gU = (0, GU.h)(RU);
        return gU && this.downloadDecoder(), new Promise((tU => {
          this.queue.push({
            word: UU,
            glb: RU,
            draco: gU,
            attempts: 0,
            resolve: tU
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.zu ? this.zu : null
      }
      pump() {
        const UU = this.files();
        for (const RU of this.slots) {
          if (null !== this.stopped) return;
          if (RU.gaveUp || RU.starting) continue;
          if (null === RU.worker) {
            this.start(RU);
            continue
          }
          if (null !== UU && "none" === RU.zu && RU.failedDownload !== this.downloads && this.install(RU, RU.worker, UU), null !== RU.job) continue;
          const gU = this.queue.findIndex((UU => "installed" === RU.zu || !UU.draco));
          gU >= 0 && this.run(RU, RU.worker, this.queue.splice(gU, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((UU => !UU.gaveUp && ("none" !== UU.zu || UU.failedDownload !== this.downloads))) || (this.zu = "uninstallable", this.decoderFailed(new hU(this.installFailure)))
      }
      start(UU) {
        if (UU.losses >= 6) return UU.gaveUp = !0, void(this.slots.every((UU => UU.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        UU.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((RU => {
          let [gU, tU] = RU;
          null === this.stopped && this.launch(UU, gU, tU)
        }), (UU => {
          this.fail(UU)
        }))
      }
      launch(UU, RU, gU) {
        let tU;
        try {
          tU = RU()
        } catch (pU) {
          return void this.lose(UU, `a model worker could not be created (${String(pU)})`)
        }
        UU.worker = tU, this.startTimer(UU, 3e4, (RU => {
          this.lose(UU, `a model worker did not start: ${(0,CU.k)(RU)}`)
        })), tU.onmessage = RU => {
          let {
            data: gU
          } = RU;
          this.answered(UU, tU, gU)
        }, tU.onerror = RU => {
          this.lose(UU, UU.starting ? `a model worker failed to start: ${RU.message}` : `a model worker failed: ${RU.message}`)
        }, tU.postMessage({
          type: "start",
          module: gU
        })
      }
      startTimer(UU, RU, gU) {
        UU.timer = new CU.g(RU, (RU => {
          UU.timer = null, gU(RU)
        }), void 0, this.opts.visibility)
      }
      clearTimer(UU) {
        var RU;
        null === (RU = UU.timer) || void 0 === RU || RU.cancel(), UU.timer = null
      }
      answered(UU, RU, gU) {
        if ("lost" === gU.type) return void this.lose(UU, gU.reason);
        if (UU.starting) return "started" !== gU.type ? void this.lose(UU, `a model worker answered ${gU.type} before it started`) : (this.clearTimer(UU), UU.starting = !1, UU.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === gU.type || "dracoFailed" === gU.type) {
          if (gU.seq !== UU.installSeq) return;
          return void("installing" === UU.zu ? (this.clearTimer(UU), "dracoInstalled" === gU.type ? (UU.zu = "installed", this.pump()) : this.installFailed(UU, gU.reason)) : "dracoInstalled" === gU.type && "none" === UU.zu && UU.failedDownload === this.downloads && (UU.zu = "installed", this.pump()))
        }
        const tU = UU.job;
        null !== tU && "started" !== gU.type && gU.seq === UU.seq && ("trapped" !== gU.type ? (UU.job = null, UU.losses = 0, this.jobLosses = 0, tU.resolve(new Uint8Array(gU.record)), this.pump()) : this.lose(UU, gU.trap, !0))
      }
      install(UU, RU, gU) {
        const tU = this.nextSeq++;
        UU.zu = "installing", UU.installSeq = tU, this.startTimer(UU, 3e4, (RU => {
          this.installFailed(UU, `no install within ${Math.round(RU)} ms`)
        }));
        const pU = gU.script.slice(0),
          EU = gU.wasmBinary.slice(0);
        RU.postMessage({
          type: "installDraco",
          seq: tU,
          script: pU,
          wasmBinary: EU
        }, [pU, EU])
      }
      installFailed(UU, RU) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${RU}`), this.noInstall(UU, RU), this.pump()
      }
      noInstall(UU, RU) {
        UU.zu = "none", UU.failedDownload = this.downloads, this.installFailure = RU
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.zu || null !== this.files()) return;
        const UU = "uninstallable" === this.zu;
        this.zu = "downloading", this.opts.downloadFiles(UU).then((UU => {
          null === this.stopped && (this.zu = UU, this.downloads++, this.pump())
        }), (UU => {
          this.zu = null, this.decoderFailed(UU)
        }))
      }
      decoderFailed(UU) {
        if (null !== this.stopped) return;
        const RU = (0, TU.j)(UU);
        let gU = 0;
        for (const tU of this.queue.splice(0)) tU.draco ? (tU.resolve((0, uU.j)(tU.word, RU)), gU++) : this.queue.push(tU);
        gU > 0 && this.opts.onDecoderFailed(UU)
      }
      run(UU, RU, gU) {
        const tU = this.nextSeq++;
        UU.seq = tU, UU.job = gU, gU.attempts++;
        const pU = gU.glb.slice();
        RU.postMessage({
          type: "job",
          seq: tU,
          word: gU.word,
          glb: pU.buffer
        }, [pU.buffer])
      }
      lose(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(UU);
        const tU = UU.worker;
        null !== tU && (tU.onmessage = null, tU.onerror = null, tU.terminate());
        const pU = !gU && "installing" === UU.zu;
        UU.worker = null, UU.starting = !1, UU.zu = "none", pU && this.noInstall(UU, RU), void 0 !== UU.startedAt && performance.now() - UU.startedAt >= 6e4 && (UU.losses = 0), UU.startedAt = void 0;
        const EU = UU.job;
        if (UU.job = null, null !== EU || pU || UU.losses++, this.opts.onWorkerLost(RU), null !== EU && pU) EU.attempts--, this.queue.unshift(EU);
        else if (null !== EU && (EU.attempts < 2 ? this.queue.unshift(EU) : EU.resolve((0, uU.p)(EU.word, RU)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(UU) {
        if (null !== this.stopped) return;
        this.stopped = null === UU ? "the model workers stopped" : `the model workers could not start: ${(0,TU.j)(UU)}`;
        const RU = this.stopped,
          gU = UU => {
            UU.resolve((0, uU.t)(UU.word, RU))
          };
        for (const pU of this.slots) {
          var tU;
          this.clearTimer(pU), null === (tU = pU.worker) || void 0 === tU || tU.terminate(), pU.worker = null, null !== pU.job && gU(pU.job), pU.job = null
        }
        this.queue.splice(0).forEach(gU), null !== UU && this.opts.onUnavailable(UU)
      }
    }
    const eU = [...tU.s, 5e3, 15e3, 3e4];
    let WU = null;
    const fU = new Set;

    function xU(UU) {
      return fU.add(UU), WU ??= function() {
        let UU = (RU = navigator.hardwareConcurrency, TU = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, RU > 2 && !(0, jU.o)(TU) ? 2 : 1);
        var RU, TU;
        const KU = new QU({
          module: (0, pU.c)(EU.c, {
            delays: eU,
            onRetry: (UU, RU) => {
              WU === KU && mU((gU => {
                gU.onModuleRetry(UU, RU)
              }))
            }
          }),
          downloadFiles: cU(PU.e.scriptUrl, PU.e.wasmBinaryUrl),
          loadWorker: async () => (await gU.e(43).then((() => gU(60865)))).createModelWorker,
          count: UU,
          onUnavailable: UU => {
            if (WU === KU) {
              WU = null;
              const RU = function(UU) {
                return UU instanceof tU.e ? [EU.c.url().href] : void 0
              }(UU);
              mU((gU => {
                gU.onUnavailable(UU, RU)
              }))
            }
          },
          onDecoderFailed: UU => {
            if (WU === KU) {
              const RU = UU instanceof qU ? UU.goneUrl : null,
                gU = null === RU ? void 0 : [RU];
              mU((RU => {
                RU.onDecoderFailed(UU, gU)
              }))
            }
          },
          onWorkerLost: UU => {
            WU === KU && mU((RU => {
              RU.onWorkerLost(UU)
            }))
          }
        });
        return KU
      }(), {
        pool: WU,
        unlisten: () => {
          fU.delete(UU)
        }
      }
    }

    function mU(UU) {
      for (const gU of [...fU]) try {
        UU(gU)
      } catch (RU) {
        console.error("[pageModelPool] a listener threw", RU)
      }
    }
  },
  40889: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40894: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);