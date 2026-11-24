export const id = 43;
export const ids = [43];
export const modules = {
  41530: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB
    });
    var TB = ZB(140),
      JB = ZB(1131);

    function oB(BB) {
      return (0, TB.isDiscordClient)() ? `https://${JB.e.discordDomain}/${BB.href}` : BB.href
    }
    const GB = {
      scriptUrl: oB(new ZB.U(ZB(41539))),
      wasmBinaryUrl: oB(new ZB.U(ZB(41544)))
    }
  },
  34273: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      d: () => oB,
      g: () => GB
    });
    const TB = 1179937895,
      JB = 1313821514;

    function oB(BB) {
      const IB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      if (BB.byteLength < 20 || IB.getUint32(0, !0) !== TB || 2 !== IB.getUint32(4, !0)) return null;
      const ZB = Math.min(IB.getUint32(8, !0), BB.byteLength),
        oB = IB.getUint32(12, !0);
      if (IB.getUint32(16, !0) !== JB || 20 + oB > ZB) return null;
      let GB;
      try {
        GB = JSON.parse((new TextDecoder).decode(BB.subarray(20, 20 + oB)))
      } catch {
        return null
      }
      return "object" === typeof GB && null !== GB ? {
        json: GB,
        jsonEnd: 20 + oB,
        length: ZB
      } : null
    }

    function GB(BB) {
      var IB;
      const ZB = null === (IB = oB(BB)) || void 0 === IB ? void 0 : IB.json;
      if (void 0 === ZB || !Array.isArray(ZB.extensionsUsed) || !ZB.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const TB = ZB.meshes;
      return Array.isArray(TB) && TB.some((BB => {
        const IB = null === BB || void 0 === BB ? void 0 : BB.primitives;
        return Array.isArray(IB) && IB.some((BB => {
          const IB = null === BB || void 0 === BB ? void 0 : BB.extensions;
          return null != (null === IB || void 0 === IB ? void 0 : IB.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  51116: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => yB,
      pageModelPool: () => dB
    });
    var TB = ZB(3043),
      JB = ZB(36330),
      oB = ZB(40884),
      GB = ZB(41530),
      vB = ZB(36297);
    Error;
    class kB extends Error {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${BB}: ${IB}`), this.stage = BB, this.url = ZB, this.status = TB, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function cB(BB, IB) {
      let ZB = null,
        JB = !1;
      return {
        get: () => {
          if (null === ZB) {
            const oB = async function(BB, IB) {
              try {
                return (await (0, TB.K)(BB)).buffer
              } catch (ZB) {
                throw new kB(IB, (0, vB.k)(ZB), BB, ZB instanceof TB.e ? ZB.status : null)
              }
            }(BB, IB);
            ZB = oB, oB.then((() => {
              JB = ZB === oB
            }), (() => {
              ZB = null
            }))
          }
          return ZB
        },
        forget: () => {
          JB && (ZB = null, JB = !1)
        }
      }
    }

    function nB(BB, IB) {
      const ZB = cB(IB, "wasm"),
        TB = cB(BB, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ZB.forget(), TB.forget());
        const [BB, IB] = await Promise.all([ZB.get(), TB.get()]);
        return {
          script: IB,
          wasmBinary: BB
        }
      }
    }
    var hB = ZB(34273),
      zB = ZB(3281),
      FB = ZB(40834),
      NB = ZB(40962);
    class gB extends Error {
      constructor(BB) {
        super(`no model worker could install it: ${BB}`), this.name = "DracoInstallError"
      }
    }
    class qB {
      constructor(BB) {
        this.opts = BB, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.kN = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let IB = 0; IB < Math.max(1, BB.count); IB++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          kN: "none",
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
      build(BB, IB) {
        if (null !== this.stopped) return Promise.resolve((0, FB.v)(BB, this.stopped));
        const ZB = (0, hB.g)(IB);
        return ZB && this.downloadDecoder(), new Promise((TB => {
          this.queue.push({
            word: BB,
            glb: IB,
            draco: ZB,
            attempts: 0,
            resolve: TB
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
        return "object" === typeof this.kN ? this.kN : null
      }
      pump() {
        const BB = this.resting && 0 === this.queue.length,
          IB = this.files();
        for (const ZB of this.slots) {
          if (null !== this.stopped) return;
          if (ZB.gaveUp || ZB.starting) continue;
          if (null === ZB.worker) {
            BB || this.start(ZB);
            continue
          }
          if (BB) {
            null === ZB.job && "installing" !== ZB.kN && this.end(ZB);
            continue
          }
          if (null !== IB && "none" === ZB.kN && ZB.failedDownload !== this.downloads && this.install(ZB, ZB.worker, IB), null !== ZB.job) continue;
          const TB = this.queue.findIndex((BB => "installed" === ZB.kN || !BB.draco));
          TB >= 0 && this.run(ZB, ZB.worker, this.queue.splice(TB, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((BB => !BB.gaveUp && ("none" !== BB.kN || BB.failedDownload !== this.downloads))) || (this.kN = "uninstallable", this.decoderFailed(new gB(this.installFailure)))
      }
      start(BB) {
        if (BB.losses >= 6) return BB.gaveUp = !0, void(this.slots.every((BB => BB.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        BB.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((IB => {
          let [ZB, TB] = IB;
          null === this.stopped && this.launch(BB, ZB, TB)
        }), (BB => {
          this.fail(BB)
        }))
      }
      launch(BB, IB, ZB) {
        let TB;
        try {
          TB = IB()
        } catch (JB) {
          return void this.lose(BB, `a model worker could not be created (${String(JB)})`)
        }
        BB.worker = TB, this.startTimer(BB, 3e4, (IB => {
          this.lose(BB, `a model worker did not start: ${(0,NB.l)(IB)}`)
        })), TB.onmessage = IB => {
          let {
            data: ZB
          } = IB;
          this.answered(BB, TB, ZB)
        }, TB.onerror = IB => {
          this.lose(BB, BB.starting ? `a model worker failed to start: ${IB.message}` : `a model worker failed: ${IB.message}`)
        }, TB.postMessage({
          type: "start",
          module: ZB
        })
      }
      end(BB) {
        const IB = BB.worker;
        null !== IB && (IB.onmessage = null, IB.onerror = null, IB.terminate()), BB.worker = null, BB.kN = "none", BB.startedAt = void 0
      }
      startTimer(BB, IB, ZB) {
        BB.timer = new NB.i(IB, (IB => {
          BB.timer = null, ZB(IB)
        }), void 0, this.opts.visibility)
      }
      clearTimer(BB) {
        var IB;
        null === (IB = BB.timer) || void 0 === IB || IB.cancel(), BB.timer = null
      }
      answered(BB, IB, ZB) {
        if ("lost" === ZB.type) return void this.lose(BB, ZB.reason);
        if (BB.starting) return "started" !== ZB.type ? void this.lose(BB, `a model worker answered ${ZB.type} before it started`) : (this.clearTimer(BB), BB.starting = !1, BB.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === ZB.type || "dracoFailed" === ZB.type) {
          if (ZB.seq !== BB.installSeq) return;
          return void("installing" === BB.kN ? (this.clearTimer(BB), "dracoInstalled" === ZB.type ? (BB.kN = "installed", this.pump()) : this.installFailed(BB, ZB.reason)) : "dracoInstalled" === ZB.type && "none" === BB.kN && BB.failedDownload === this.downloads && (BB.kN = "installed", BB.failedDownload = 0, this.pump()))
        }
        const TB = BB.job;
        null !== TB && "started" !== ZB.type && ZB.seq === BB.seq && ("trapped" !== ZB.type ? (BB.job = null, BB.losses = 0, this.jobLosses = 0, TB.resolve(new Uint8Array(ZB.record)), this.pump()) : this.lose(BB, ZB.trap, !0))
      }
      install(BB, IB, ZB) {
        const TB = this.nextSeq++;
        BB.kN = "installing", BB.installSeq = TB, this.startTimer(BB, 3e4, (IB => {
          this.installFailed(BB, `no install within ${Math.round(IB)} ms`)
        }));
        const JB = ZB.script.slice(0),
          oB = ZB.wasmBinary.slice(0);
        IB.postMessage({
          type: "installDraco",
          seq: TB,
          script: JB,
          wasmBinary: oB
        }, [JB, oB])
      }
      installFailed(BB, IB) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${IB}`), this.noInstall(BB, IB), this.pump()
      }
      noInstall(BB, IB) {
        BB.kN = "none", BB.failedDownload = this.downloads, this.installFailure = IB
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.kN || null !== this.files()) return;
        const BB = "uninstallable" === this.kN;
        this.kN = "downloading", this.opts.downloadFiles(BB).then((BB => {
          null === this.stopped && (this.kN = BB, this.downloads++, this.pump())
        }), (BB => {
          this.kN = null, this.decoderFailed(BB)
        }))
      }
      decoderFailed(BB) {
        if (null !== this.stopped) return;
        const IB = (0, vB.k)(BB);
        let ZB = 0;
        for (const TB of this.queue.splice(0)) TB.draco ? (TB.resolve((0, FB.i)(TB.word, IB)), ZB++) : this.queue.push(TB);
        ZB > 0 && this.opts.onDecoderFailed(BB), this.pump()
      }
      run(BB, IB, ZB) {
        const TB = this.nextSeq++;
        BB.seq = TB, BB.job = ZB, ZB.attempts++;
        const JB = ZB.glb.slice();
        IB.postMessage({
          type: "job",
          seq: TB,
          word: ZB.word,
          glb: JB.buffer
        }, [JB.buffer])
      }
      lose(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(BB);
        const TB = !ZB && "installing" === BB.kN;
        void 0 !== BB.startedAt && performance.now() - BB.startedAt >= 6e4 && (BB.losses = 0), this.end(BB), BB.starting = !1, TB && this.noInstall(BB, IB);
        const JB = BB.job;
        if (BB.job = null, null !== JB || TB || BB.losses++, this.opts.onWorkerLost(IB), null !== JB && TB) JB.attempts--, this.queue.unshift(JB);
        else if (null !== JB && (JB.attempts < 2 ? this.queue.unshift(JB) : JB.resolve((0, FB.r)(JB.word, IB)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(BB) {
        if (null !== this.stopped) return;
        this.stopped = null === BB ? "the model workers stopped" : `the model workers could not start: ${(0,vB.k)(BB)}`;
        const IB = this.stopped,
          ZB = BB => {
            BB.resolve((0, FB.v)(BB.word, IB))
          };
        for (const JB of this.slots) {
          var TB;
          this.clearTimer(JB), null === (TB = JB.worker) || void 0 === TB || TB.terminate(), JB.worker = null, null !== JB.job && ZB(JB.job), JB.job = null
        }
        this.queue.splice(0).forEach(ZB), null !== BB && this.opts.onUnavailable(BB)
      }
    }
    const yB = [...TB.s, 5e3, 15e3, 3e4];
    let UB = null;
    const WB = new Set;

    function dB(BB) {
      return WB.add(BB), UB ??= function() {
        let BB = (IB = navigator.hardwareConcurrency, vB = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, IB > 2 && !(0, zB.r)(vB) ? 2 : 1);
        var IB, vB;
        const cB = new qB({
          module: (0, JB.c)(oB.e, {
            delays: yB,
            onRetry: (BB, IB) => {
              UB === cB && CB((ZB => {
                ZB.onModuleRetry(BB, IB)
              }))
            }
          }),
          downloadFiles: nB(GB.c.scriptUrl, GB.c.wasmBinaryUrl),
          loadWorker: async () => (await ZB.e(44).then((() => ZB(61522)))).createModelWorker,
          count: BB,
          onUnavailable: BB => {
            if (UB === cB) {
              UB = null;
              const IB = function(BB) {
                return BB instanceof TB.d ? [oB.e.url().href] : void 0
              }(BB);
              CB((ZB => {
                ZB.onUnavailable(BB, IB)
              }))
            }
          },
          onDecoderFailed: BB => {
            if (UB === cB) {
              const IB = BB instanceof kB ? BB.goneUrl : null,
                ZB = null === IB ? void 0 : [IB];
              CB((IB => {
                IB.onDecoderFailed(BB, ZB)
              }))
            }
          },
          onWorkerLost: BB => {
            UB === cB && CB((IB => {
              IB.onWorkerLost(BB)
            }))
          }
        });
        return cB
      }(), {
        pool: UB,
        unlisten: () => {
          WB.delete(BB)
        }
      }
    }

    function CB(BB) {
      for (const ZB of [...WB]) try {
        BB(ZB)
      } catch (IB) {
        console.error("[pageModelPool] a listener threw", IB)
      }
    }
  },
  41539: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41544: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);