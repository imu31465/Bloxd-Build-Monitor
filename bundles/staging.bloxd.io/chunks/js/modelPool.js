export const id = 43;
export const ids = [43];
export const modules = {
  41598: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    var QB = zB(145),
      nB = zB(1126);

    function dB(BB) {
      return (0, QB.isDiscordClient)() ? `https://${nB.e.discordDomain}/${BB.href}` : BB.href
    }
    const IB = {
      scriptUrl: dB(new zB.U(zB(41604))),
      wasmBinaryUrl: dB(new zB.U(zB(41608)))
    }
  },
  34333: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      h: () => dB,
      l: () => IB
    });
    const QB = 1179937895,
      nB = 1313821514;

    function dB(BB) {
      const jB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      if (BB.byteLength < 20 || jB.getUint32(0, !0) !== QB || 2 !== jB.getUint32(4, !0)) return null;
      const zB = Math.min(jB.getUint32(8, !0), BB.byteLength),
        dB = jB.getUint32(12, !0);
      if (jB.getUint32(16, !0) !== nB || 20 + dB > zB) return null;
      let IB;
      try {
        IB = JSON.parse((new TextDecoder).decode(BB.subarray(20, 20 + dB)))
      } catch {
        return null
      }
      return "object" === typeof IB && null !== IB ? {
        json: IB,
        jsonEnd: 20 + dB,
        length: zB
      } : null
    }

    function IB(BB) {
      var jB;
      const zB = null === (jB = dB(BB)) || void 0 === jB ? void 0 : jB.json;
      if (void 0 === zB || !Array.isArray(zB.extensionsUsed) || !zB.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const QB = zB.meshes;
      return Array.isArray(QB) && QB.some((BB => {
        const jB = null === BB || void 0 === BB ? void 0 : BB.primitives;
        return Array.isArray(jB) && jB.some((BB => {
          const jB = null === BB || void 0 === BB ? void 0 : BB.extensions;
          return null != (null === jB || void 0 === jB ? void 0 : jB.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  51202: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => kB,
      pageModelPool: () => gB
    });
    var QB = zB(2974),
      nB = zB(36387),
      dB = zB(40948),
      IB = zB(41598),
      NB = zB(36347);
    Error;
    class uB extends Error {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${BB}: ${jB}`), this.stage = BB, this.url = zB, this.status = QB, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function UB(BB, jB) {
      let zB = null,
        nB = !1;
      return {
        get: () => {
          if (null === zB) {
            const dB = async function(BB, jB) {
              try {
                return (await (0, QB.L)(BB)).buffer
              } catch (zB) {
                throw new uB(jB, (0, NB.m)(zB), BB, zB instanceof QB.g ? zB.status : null)
              }
            }(BB, jB);
            zB = dB, dB.then((() => {
              nB = zB === dB
            }), (() => {
              zB = null
            }))
          }
          return zB
        },
        forget: () => {
          nB && (zB = null, nB = !1)
        }
      }
    }

    function aB(BB, jB) {
      const zB = UB(jB, "wasm"),
        QB = UB(BB, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (zB.forget(), QB.forget());
        const [BB, jB] = await Promise.all([zB.get(), QB.get()]);
        return {
          script: jB,
          wasmBinary: BB
        }
      }
    }
    var pB = zB(34333),
      rB = zB(3228),
      sB = zB(40883),
      JB = zB(41010);
    class mB extends Error {
      constructor(BB) {
        super(`no model worker could install it: ${BB}`), this.name = "DracoInstallError"
      }
    }
    class yB {
      constructor(BB) {
        this.opts = BB, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.GJ = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let jB = 0; jB < Math.max(1, BB.count); jB++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          GJ: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((BB => null !== BB.job)).length
      }
      build(BB, jB) {
        if (null !== this.stopped) return Promise.resolve((0, sB.q)(BB, this.stopped));
        const zB = (0, pB.l)(jB);
        return zB && this.downloadDecoder(), new Promise((QB => {
          this.queue.push({
            word: BB,
            glb: jB,
            draco: zB,
            attempts: 0,
            resolve: QB
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
        return "object" === typeof this.GJ ? this.GJ : null
      }
      pump() {
        const BB = this.resting && 0 === this.queue.length,
          jB = this.files();
        for (const zB of this.slots) {
          if (null !== this.stopped) return;
          if (zB.gaveUp || zB.starting) continue;
          if (null === zB.worker) {
            BB || this.start(zB);
            continue
          }
          if (BB) {
            null === zB.job && "installing" !== zB.GJ && this.end(zB);
            continue
          }
          if (null !== jB && "none" === zB.GJ && zB.failedDownload !== this.downloads && this.install(zB, zB.worker, jB), null !== zB.job) continue;
          const QB = this.queue.findIndex((BB => "installed" === zB.GJ || !BB.draco));
          QB >= 0 && this.run(zB, zB.worker, this.queue.splice(QB, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((BB => !BB.gaveUp && ("none" !== BB.GJ || BB.failedDownload !== this.downloads))) || (this.GJ = "uninstallable", this.decoderFailed(new mB(this.installFailure)))
      }
      start(BB) {
        if (BB.losses >= 6) return BB.gaveUp = !0, void(this.slots.every((BB => BB.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        BB.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((jB => {
          let [zB, QB] = jB;
          null === this.stopped && this.launch(BB, zB, QB)
        }), (BB => {
          this.fail(BB)
        }))
      }
      launch(BB, jB, zB) {
        let QB;
        try {
          QB = jB()
        } catch (nB) {
          return void this.lose(BB, `a model worker could not be created (${String(nB)})`)
        }
        BB.worker = QB, this.startTimer(BB, 3e4, (jB => {
          this.lose(BB, `a model worker did not start: ${(0,JB.j)(jB)}`)
        })), QB.onmessage = jB => {
          let {
            data: zB
          } = jB;
          this.answered(BB, QB, zB)
        }, QB.onerror = jB => {
          this.lose(BB, BB.starting ? `a model worker failed to start: ${jB.message}` : `a model worker failed: ${jB.message}`)
        }, QB.postMessage({
          type: "start",
          module: zB
        })
      }
      end(BB) {
        const jB = BB.worker;
        null !== jB && (jB.onmessage = null, jB.onerror = null, jB.terminate()), BB.worker = null, BB.GJ = "none", BB.startedAt = void 0
      }
      startTimer(BB, jB, zB) {
        BB.timer = new JB.g(jB, (jB => {
          BB.timer = null, zB(jB)
        }), void 0, this.opts.visibility)
      }
      clearTimer(BB) {
        var jB;
        null === (jB = BB.timer) || void 0 === jB || jB.cancel(), BB.timer = null
      }
      answered(BB, jB, zB) {
        if ("lost" === zB.type) return void this.lose(BB, zB.reason);
        if (BB.starting) return "started" !== zB.type ? void this.lose(BB, `a model worker answered ${zB.type} before it started`) : (this.clearTimer(BB), BB.starting = !1, BB.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === zB.type || "dracoFailed" === zB.type) {
          if (zB.seq !== BB.installSeq) return;
          return void("installing" === BB.GJ ? (this.clearTimer(BB), "dracoInstalled" === zB.type ? (BB.GJ = "installed", this.pump()) : this.installFailed(BB, zB.reason)) : "dracoInstalled" === zB.type && "none" === BB.GJ && BB.failedDownload === this.downloads && (BB.GJ = "installed", BB.failedDownload = 0, this.pump()))
        }
        const QB = BB.job;
        null !== QB && "started" !== zB.type && zB.seq === BB.seq && ("trapped" !== zB.type ? (BB.job = null, BB.losses = 0, this.jobLosses = 0, QB.resolve(new Uint8Array(zB.record)), this.pump()) : this.lose(BB, zB.trap, !0))
      }
      install(BB, jB, zB) {
        const QB = this.nextSeq++;
        BB.GJ = "installing", BB.installSeq = QB, this.startTimer(BB, 3e4, (jB => {
          this.installFailed(BB, `no install within ${Math.round(jB)} ms`)
        }));
        const nB = zB.script.slice(0),
          dB = zB.wasmBinary.slice(0);
        jB.postMessage({
          type: "installDraco",
          seq: QB,
          script: nB,
          wasmBinary: dB
        }, [nB, dB])
      }
      installFailed(BB, jB) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${jB}`), this.noInstall(BB, jB), this.pump()
      }
      noInstall(BB, jB) {
        BB.GJ = "none", BB.failedDownload = this.downloads, this.installFailure = jB
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.GJ || null !== this.files()) return;
        const BB = "uninstallable" === this.GJ;
        this.GJ = "downloading", this.opts.downloadFiles(BB).then((BB => {
          null === this.stopped && (this.GJ = BB, this.downloads++, this.pump())
        }), (BB => {
          this.GJ = null, this.decoderFailed(BB)
        }))
      }
      decoderFailed(BB) {
        if (null !== this.stopped) return;
        const jB = (0, NB.m)(BB);
        let zB = 0;
        for (const QB of this.queue.splice(0)) QB.draco ? (QB.resolve((0, sB.h)(QB.word, jB)), zB++) : this.queue.push(QB);
        zB > 0 && this.opts.onDecoderFailed(BB), this.pump()
      }
      run(BB, jB, zB) {
        const QB = this.nextSeq++;
        BB.seq = QB, BB.job = zB, zB.attempts++;
        const nB = zB.glb.slice();
        jB.postMessage({
          type: "job",
          seq: QB,
          word: zB.word,
          glb: nB.buffer
        }, [nB.buffer])
      }
      lose(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(BB);
        const QB = !zB && "installing" === BB.GJ;
        void 0 !== BB.startedAt && performance.now() - BB.startedAt >= 6e4 && (BB.losses = 0), this.end(BB), BB.starting = !1, QB && this.noInstall(BB, jB);
        const nB = BB.job;
        if (BB.job = null, null !== nB || QB || BB.losses++, this.opts.onWorkerLost(jB), null !== nB && QB) nB.attempts--, this.queue.unshift(nB);
        else if (null !== nB && (nB.attempts < 2 ? this.queue.unshift(nB) : nB.resolve((0, sB.o)(nB.word, jB)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(BB) {
        if (null !== this.stopped) return;
        this.stopped = null === BB ? "the model workers stopped" : `the model workers could not start: ${(0,NB.m)(BB)}`;
        const jB = this.stopped,
          zB = BB => {
            BB.resolve((0, sB.q)(BB.word, jB))
          };
        for (const nB of this.slots) {
          var QB;
          this.clearTimer(nB), null === (QB = nB.worker) || void 0 === QB || QB.terminate(), nB.worker = null, null !== nB.job && zB(nB.job), nB.job = null
        }
        this.queue.splice(0).forEach(zB), null !== BB && this.opts.onUnavailable(BB)
      }
    }
    const kB = [...QB.t, 5e3, 15e3, 3e4];
    let GB = null;
    const LB = new Set;

    function gB(BB) {
      return LB.add(BB), GB ??= function() {
        let BB = (jB = navigator.hardwareConcurrency, NB = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, jB > 2 && !(0, rB.n)(NB) ? 2 : 1);
        var jB, NB;
        const UB = new yB({
          module: (0, nB.f)(dB.b, {
            delays: kB,
            onRetry: (BB, jB) => {
              GB === UB && tB((zB => {
                zB.onModuleRetry(BB, jB)
              }))
            }
          }),
          downloadFiles: aB(IB.e.scriptUrl, IB.e.wasmBinaryUrl),
          loadWorker: async () => (await zB.e(44).then((() => zB(61651)))).createModelWorker,
          count: BB,
          onUnavailable: BB => {
            if (GB === UB) {
              GB = null;
              const jB = function(BB) {
                return BB instanceof QB.c ? [dB.b.url().href] : void 0
              }(BB);
              tB((zB => {
                zB.onUnavailable(BB, jB)
              }))
            }
          },
          onDecoderFailed: BB => {
            if (GB === UB) {
              const jB = BB instanceof uB ? BB.goneUrl : null,
                zB = null === jB ? void 0 : [jB];
              tB((jB => {
                jB.onDecoderFailed(BB, zB)
              }))
            }
          },
          onWorkerLost: BB => {
            GB === UB && tB((jB => {
              jB.onWorkerLost(BB)
            }))
          }
        });
        return UB
      }(), {
        pool: GB,
        unlisten: () => {
          LB.delete(BB)
        }
      }
    }

    function tB(BB) {
      for (const zB of [...LB]) try {
        BB(zB)
      } catch (jB) {
        console.error("[pageModelPool] a listener threw", jB)
      }
    }
  },
  41608: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  41604: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);