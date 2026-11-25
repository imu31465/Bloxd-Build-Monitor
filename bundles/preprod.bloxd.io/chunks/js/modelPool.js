export const id = 49;
export const ids = [49];
export const modules = {
  44160: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    var OM = iM(119),
      SM = iM(1211);

    function jM(MM) {
      return (0, OM.isDiscordClient)() ? `https://${SM.e.discordDomain}/${MM.href}` : MM.href
    }
    const aM = {
      scriptUrl: jM(new iM.U(iM(44167))),
      wasmBinaryUrl: jM(new iM.U(iM(44169)))
    }
  },
  35126: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      g: () => jM,
      j: () => aM
    });
    const OM = 1179937895,
      SM = 1313821514;

    function jM(MM) {
      const rM = new DataView(MM.buffer, MM.byteOffset, MM.byteLength);
      if (MM.byteLength < 20 || rM.getUint32(0, !0) !== OM || 2 !== rM.getUint32(4, !0)) return null;
      const iM = Math.min(rM.getUint32(8, !0), MM.byteLength),
        jM = rM.getUint32(12, !0);
      if (rM.getUint32(16, !0) !== SM || 20 + jM > iM) return null;
      let aM;
      try {
        aM = JSON.parse((new TextDecoder).decode(MM.subarray(20, 20 + jM)))
      } catch {
        return null
      }
      return "object" === typeof aM && null !== aM ? {
        json: aM,
        jsonEnd: 20 + jM,
        length: iM
      } : null
    }

    function aM(MM) {
      var rM;
      const iM = null === (rM = jM(MM)) || void 0 === rM ? void 0 : rM.json;
      if (void 0 === iM || !Array.isArray(iM.extensionsUsed) || !iM.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const OM = iM.meshes;
      return Array.isArray(OM) && OM.some((MM => {
        const rM = null === MM || void 0 === MM ? void 0 : MM.primitives;
        return Array.isArray(rM) && rM.some((MM => {
          const rM = null === MM || void 0 === MM ? void 0 : MM.extensions;
          return null != (null === rM || void 0 === rM ? void 0 : rM.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  53807: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => lM,
      pageModelPool: () => GM
    });
    var OM = iM(3188),
      SM = iM(37257),
      jM = iM(41961),
      aM = iM(44160),
      PM = iM(4765),
      nM = iM(37229);
    Error;
    class QM extends Error {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${MM}: ${rM}`), this.stage = MM, this.url = iM, this.status = OM, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function zM(MM, rM) {
      let iM = null,
        SM = !1;
      return {
        get: () => {
          if (null === iM) {
            const jM = async function(MM, rM) {
              try {
                return (await (0, OM.F)(MM)).buffer
              } catch (iM) {
                throw new QM(rM, (0, nM.k)(iM), MM, iM instanceof OM.e ? iM.status : null)
              }
            }(MM, rM);
            iM = jM, jM.then((() => {
              SM = iM === jM
            }), (() => {
              iM = null
            }))
          }
          return iM
        },
        forget: () => {
          SM && (iM = null, SM = !1)
        }
      }
    }

    function LM(MM, rM) {
      const iM = zM(rM, "wasm"),
        OM = zM(MM, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (iM.forget(), OM.forget());
        const [MM, rM] = await Promise.all([iM.get(), OM.get()]);
        return {
          script: rM,
          wasmBinary: MM
        }
      }
    }
    var mM = iM(35126),
      HM = iM(3511),
      hM = iM(41888),
      JM = iM(42035);
    class dM extends Error {
      constructor(MM) {
        super(`no model worker could install it: ${MM}`), this.name = "DracoInstallError"
      }
    }
    class yM {
      constructor(MM) {
        this.opts = MM, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.PL = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let rM = 0; rM < Math.max(1, MM.count); rM++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          PL: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((MM => null !== MM.job)).length
      }
      build(MM, rM) {
        if (null !== this.stopped) return Promise.resolve((0, hM.q)(MM, this.stopped));
        const iM = (0, mM.j)(rM);
        return iM && this.downloadDecoder(), new Promise((OM => {
          this.queue.push({
            word: MM,
            glb: rM,
            draco: iM,
            attempts: 0,
            resolve: OM
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
        return "object" === typeof this.PL ? this.PL : null
      }
      pump() {
        const MM = this.resting && 0 === this.queue.length,
          rM = this.files();
        for (const iM of this.slots) {
          if (null !== this.stopped) return;
          if (iM.gaveUp || iM.starting) continue;
          if (null === iM.worker) {
            MM || this.start(iM);
            continue
          }
          if (MM) {
            null === iM.job && "installing" !== iM.PL && this.end(iM);
            continue
          }
          if (null !== rM && "none" === iM.PL && iM.failedDownload !== this.downloads && this.install(iM, iM.worker, rM), null !== iM.job) continue;
          const OM = this.queue.findIndex((MM => "installed" === iM.PL || !MM.draco));
          OM >= 0 && this.run(iM, iM.worker, this.queue.splice(OM, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((MM => !MM.gaveUp && ("none" !== MM.PL || MM.failedDownload !== this.downloads))) || (this.PL = "uninstallable", this.decoderFailed(new dM(this.installFailure)))
      }
      start(MM) {
        if (MM.losses >= 6) return MM.gaveUp = !0, void(this.slots.every((MM => MM.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        MM.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((rM => {
          let [iM, OM] = rM;
          null === this.stopped && this.launch(MM, iM, OM)
        }), (MM => {
          this.fail(MM)
        }))
      }
      launch(MM, rM, iM) {
        let OM;
        try {
          OM = rM()
        } catch (SM) {
          return void this.lose(MM, `a model worker could not be created (${String(SM)})`)
        }
        MM.worker = OM, this.startTimer(MM, 3e4, (rM => {
          this.lose(MM, `a model worker did not start: ${(0,JM.j)(rM)}`)
        })), OM.onmessage = rM => {
          let {
            data: iM
          } = rM;
          this.answered(MM, OM, iM)
        }, OM.onerror = rM => {
          this.lose(MM, MM.starting ? `a model worker failed to start: ${rM.message}` : `a model worker failed: ${rM.message}`)
        }, OM.postMessage({
          type: "start",
          module: iM
        })
      }
      end(MM) {
        const rM = MM.worker;
        null !== rM && (rM.onmessage = null, rM.onerror = null, rM.terminate()), MM.worker = null, MM.PL = "none", MM.startedAt = void 0
      }
      startTimer(MM, rM, iM) {
        MM.timer = new JM.i(rM, (rM => {
          MM.timer = null, iM(rM)
        }), void 0, this.opts.visibility)
      }
      clearTimer(MM) {
        var rM;
        null === (rM = MM.timer) || void 0 === rM || rM.cancel(), MM.timer = null
      }
      answered(MM, rM, iM) {
        if ("lost" === iM.type) return void this.lose(MM, iM.reason);
        if (MM.starting) return "started" !== iM.type ? void this.lose(MM, `a model worker answered ${iM.type} before it started`) : (this.clearTimer(MM), MM.starting = !1, MM.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === iM.type || "dracoFailed" === iM.type) {
          if (iM.seq !== MM.installSeq) return;
          return void("installing" === MM.PL ? (this.clearTimer(MM), "dracoInstalled" === iM.type ? (MM.PL = "installed", this.pump()) : this.installFailed(MM, iM.reason)) : "dracoInstalled" === iM.type && "none" === MM.PL && MM.failedDownload === this.downloads && (MM.PL = "installed", MM.failedDownload = 0, this.pump()))
        }
        const OM = MM.job;
        null !== OM && "started" !== iM.type && iM.seq === MM.seq && ("trapped" !== iM.type ? (MM.job = null, MM.losses = 0, this.jobLosses = 0, OM.resolve(new Uint8Array(iM.record)), this.pump()) : this.lose(MM, iM.trap, !0))
      }
      install(MM, rM, iM) {
        const OM = this.nextSeq++;
        MM.PL = "installing", MM.installSeq = OM, this.startTimer(MM, 3e4, (rM => {
          this.installFailed(MM, `no install within ${Math.round(rM)} ms`)
        }));
        const SM = iM.script.slice(0),
          jM = iM.wasmBinary.slice(0);
        rM.postMessage({
          type: "installDraco",
          seq: OM,
          script: SM,
          wasmBinary: jM
        }, [SM, jM])
      }
      installFailed(MM, rM) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${rM}`), this.noInstall(MM, rM), this.pump()
      }
      noInstall(MM, rM) {
        MM.PL = "none", MM.failedDownload = this.downloads, this.installFailure = rM
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.PL || null !== this.files()) return;
        const MM = "uninstallable" === this.PL;
        this.PL = "downloading", this.opts.downloadFiles(MM).then((MM => {
          null === this.stopped && (this.PL = MM, this.downloads++, this.pump())
        }), (MM => {
          this.PL = null, this.decoderFailed(MM)
        }))
      }
      decoderFailed(MM) {
        if (null !== this.stopped) return;
        const rM = (0, nM.k)(MM);
        let iM = 0;
        for (const OM of this.queue.splice(0)) OM.draco ? (OM.resolve((0, hM.f)(OM.word, rM)), iM++) : this.queue.push(OM);
        iM > 0 && this.opts.onDecoderFailed(MM), this.pump()
      }
      run(MM, rM, iM) {
        const OM = this.nextSeq++;
        MM.seq = OM, MM.job = iM, iM.attempts++;
        const SM = iM.glb.slice();
        rM.postMessage({
          type: "job",
          seq: OM,
          word: iM.word,
          glb: SM.buffer
        }, [SM.buffer])
      }
      lose(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(MM);
        const OM = !iM && "installing" === MM.PL;
        void 0 !== MM.startedAt && performance.now() - MM.startedAt >= 6e4 && (MM.losses = 0), this.end(MM), MM.starting = !1, OM && this.noInstall(MM, rM);
        const SM = MM.job;
        if (MM.job = null, null !== SM || OM || MM.losses++, this.opts.onWorkerLost(rM), null !== SM && OM) SM.attempts--, this.queue.unshift(SM);
        else if (null !== SM && (SM.attempts < 2 ? this.queue.unshift(SM) : SM.resolve((0, hM.p)(SM.word, rM)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(MM) {
        if (null !== this.stopped) return;
        this.stopped = null === MM ? "the model workers stopped" : `the model workers could not start: ${(0,nM.k)(MM)}`;
        const rM = this.stopped,
          iM = MM => {
            MM.resolve((0, hM.q)(MM.word, rM))
          };
        for (const SM of this.slots) {
          var OM;
          this.clearTimer(SM), null === (OM = SM.worker) || void 0 === OM || OM.terminate(), SM.worker = null, null !== SM.job && iM(SM.job), SM.job = null
        }
        this.queue.splice(0).forEach(iM), null !== MM && this.opts.onUnavailable(MM)
      }
    }
    const lM = [...OM.p, 5e3, 15e3, 3e4];
    let EM = null;
    const UM = new Set;

    function GM(MM) {
      return UM.add(MM), EM ??= function() {
        let MM = "fix" === (0, PM.c)() ? 1 : (rM = navigator.hardwareConcurrency, nM = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, rM > 2 && !(0, HM.p)(nM) ? 2 : 1);
        var rM, nM;
        const zM = new yM({
          module: (0, SM.h)(jM.b, {
            delays: lM,
            onRetry: (MM, rM) => {
              EM === zM && CM((iM => {
                iM.onModuleRetry(MM, rM)
              }))
            }
          }),
          downloadFiles: LM(aM.b.scriptUrl, aM.b.wasmBinaryUrl),
          loadWorker: async () => (await iM.e(50).then((() => iM(64139)))).createModelWorker,
          count: MM,
          onUnavailable: MM => {
            if (EM === zM) {
              EM = null;
              const rM = function(MM) {
                return MM instanceof OM.c ? [jM.b.url().href] : void 0
              }(MM);
              CM((iM => {
                iM.onUnavailable(MM, rM)
              }))
            }
          },
          onDecoderFailed: MM => {
            if (EM === zM) {
              const rM = MM instanceof QM ? MM.goneUrl : null,
                iM = null === rM ? void 0 : [rM];
              CM((rM => {
                rM.onDecoderFailed(MM, iM)
              }))
            }
          },
          onWorkerLost: MM => {
            EM === zM && CM((rM => {
              rM.onWorkerLost(MM)
            }))
          }
        });
        return zM
      }(), {
        pool: EM,
        unlisten: () => {
          UM.delete(MM)
        }
      }
    }

    function CM(MM) {
      for (const iM of [...UM]) try {
        MM(iM)
      } catch (rM) {
        console.error("[pageModelPool] a listener threw", rM)
      }
    }
  },
  44169: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  44167: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);