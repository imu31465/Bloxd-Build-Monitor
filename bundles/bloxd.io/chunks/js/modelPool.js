export const id = 39;
export const ids = [39];
export const modules = {
  40235: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(138),
      yB = dB(1092);

    function pB(BB) {
      return (0, VB.d)() ? `https://${yB.e.discordDomain}/${BB.href}` : BB.href
    }
    const lB = {
      scriptUrl: pB(new dB.U(dB(40238))),
      wasmBinaryUrl: pB(new dB.U(dB(40244)))
    }
  },
  8640: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      e: () => pB,
      f: () => lB
    });
    const VB = 1179937895,
      yB = 1313821514;

    function pB(BB) {
      const TB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      if (BB.byteLength < 20 || TB.getUint32(0, !0) !== VB || 2 !== TB.getUint32(4, !0)) return null;
      const dB = Math.min(TB.getUint32(8, !0), BB.byteLength),
        pB = TB.getUint32(12, !0);
      if (TB.getUint32(16, !0) !== yB || 20 + pB > dB) return null;
      let lB;
      try {
        lB = JSON.parse((new TextDecoder).decode(BB.subarray(20, 20 + pB)))
      } catch {
        return null
      }
      return "object" === typeof lB && null !== lB ? {
        json: lB,
        jsonEnd: 20 + pB,
        length: dB
      } : null
    }

    function lB(BB) {
      var TB;
      const dB = null === (TB = pB(BB)) || void 0 === TB ? void 0 : TB.json;
      if (void 0 === dB || !Array.isArray(dB.extensionsUsed) || !dB.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const VB = dB.meshes;
      return Array.isArray(VB) && VB.some((BB => {
        const TB = null === BB || void 0 === BB ? void 0 : BB.primitives;
        return Array.isArray(TB) && TB.some((BB => {
          const TB = null === BB || void 0 === BB ? void 0 : BB.extensions;
          return null != (null === TB || void 0 === TB ? void 0 : TB.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42074: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      pageModelPool: () => mB
    });
    var VB = dB(3216),
      yB = dB(35348),
      pB = dB(39481),
      lB = dB(40235),
      JB = dB(39517);
    Error;
    class YB extends Error {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${BB}: ${TB}`), this.stage = BB, this.url = dB, this.status = VB, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function gB(BB, TB) {
      let dB = null,
        yB = !1;
      return {
        get: () => {
          if (null === dB) {
            const pB = async function(BB, TB) {
              try {
                return (await (0, VB.K)(BB)).buffer
              } catch (dB) {
                throw new YB(TB, (0, JB.f)(dB), BB, dB instanceof VB.h ? dB.status : null)
              }
            }(BB, TB);
            dB = pB, pB.then((() => {
              yB = dB === pB
            }), (() => {
              dB = null
            }))
          }
          return dB
        },
        forget: () => {
          yB && (dB = null, yB = !1)
        }
      }
    }

    function oB(BB, TB) {
      const dB = gB(TB, "wasm"),
        VB = gB(BB, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (dB.forget(), VB.forget());
        const [BB, TB] = await Promise.all([dB.get(), VB.get()]);
        return {
          script: TB,
          wasmBinary: BB
        }
      }
    }
    var kB = dB(8640),
      LB = dB(2575),
      OB = dB(39707),
      DB = dB(39746);
    class uB extends Error {
      constructor(BB) {
        super(`no model worker could install it: ${BB}`), this.name = "DracoInstallError"
      }
    }
    class HB {
      constructor(BB) {
        this.opts = BB, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.oD = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let TB = 0; TB < Math.max(1, BB.count); TB++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          oD: "none",
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
      build(BB, TB) {
        if (null !== this.stopped) return Promise.resolve((0, OB.l)(BB, this.stopped));
        const dB = (0, kB.f)(TB);
        return dB && this.downloadDecoder(), new Promise((VB => {
          this.queue.push({
            word: BB,
            glb: TB,
            draco: dB,
            attempts: 0,
            resolve: VB
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.oD ? this.oD : null
      }
      pump() {
        const BB = this.files();
        for (const TB of this.slots) {
          if (null !== this.stopped) return;
          if (TB.gaveUp || TB.starting) continue;
          if (null === TB.worker) {
            this.start(TB);
            continue
          }
          if (null !== BB && "none" === TB.oD && TB.failedDownload !== this.downloads && this.install(TB, TB.worker, BB), null !== TB.job) continue;
          const dB = this.queue.findIndex((BB => "installed" === TB.oD || !BB.draco));
          dB >= 0 && this.run(TB, TB.worker, this.queue.splice(dB, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((BB => !BB.gaveUp && ("none" !== BB.oD || BB.failedDownload !== this.downloads))) || (this.oD = "uninstallable", this.decoderFailed(new uB(this.installFailure)))
      }
      start(BB) {
        if (BB.losses >= 6) return BB.gaveUp = !0, void(this.slots.every((BB => BB.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        BB.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((TB => {
          let [dB, VB] = TB;
          null === this.stopped && this.launch(BB, dB, VB)
        }), (BB => {
          this.fail(BB)
        }))
      }
      launch(BB, TB, dB) {
        let VB;
        try {
          VB = TB()
        } catch (yB) {
          return void this.lose(BB, `a model worker could not be created (${String(yB)})`)
        }
        BB.worker = VB, this.startTimer(BB, 3e4, (TB => {
          this.lose(BB, `a model worker did not start: ${(0,DB.j)(TB)}`)
        })), VB.onmessage = TB => {
          let {
            data: dB
          } = TB;
          this.answered(BB, VB, dB)
        }, VB.onerror = TB => {
          this.lose(BB, BB.starting ? `a model worker failed to start: ${TB.message}` : `a model worker failed: ${TB.message}`)
        }, VB.postMessage({
          type: "start",
          module: dB
        })
      }
      startTimer(BB, TB, dB) {
        BB.timer = new DB.g(TB, (TB => {
          BB.timer = null, dB(TB)
        }), void 0, this.opts.visibility)
      }
      clearTimer(BB) {
        var TB;
        null === (TB = BB.timer) || void 0 === TB || TB.cancel(), BB.timer = null
      }
      answered(BB, TB, dB) {
        if ("lost" === dB.type) return void this.lose(BB, dB.reason);
        if (BB.starting) return "started" !== dB.type ? void this.lose(BB, `a model worker answered ${dB.type} before it started`) : (this.clearTimer(BB), BB.starting = !1, BB.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === dB.type || "dracoFailed" === dB.type) {
          if (dB.seq !== BB.installSeq) return;
          return void("installing" === BB.oD ? (this.clearTimer(BB), "dracoInstalled" === dB.type ? (BB.oD = "installed", this.pump()) : this.installFailed(BB, dB.reason)) : "dracoInstalled" === dB.type && "none" === BB.oD && BB.failedDownload === this.downloads && (BB.oD = "installed", this.pump()))
        }
        const VB = BB.job;
        null !== VB && "started" !== dB.type && dB.seq === BB.seq && ("trapped" !== dB.type ? (BB.job = null, BB.losses = 0, this.jobLosses = 0, VB.resolve(new Uint8Array(dB.record)), this.pump()) : this.lose(BB, dB.trap, !0))
      }
      install(BB, TB, dB) {
        const VB = this.nextSeq++;
        BB.oD = "installing", BB.installSeq = VB, this.startTimer(BB, 3e4, (TB => {
          this.installFailed(BB, `no install within ${Math.round(TB)} ms`)
        }));
        const yB = dB.script.slice(0),
          pB = dB.wasmBinary.slice(0);
        TB.postMessage({
          type: "installDraco",
          seq: VB,
          script: yB,
          wasmBinary: pB
        }, [yB, pB])
      }
      installFailed(BB, TB) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${TB}`), this.noInstall(BB, TB), this.pump()
      }
      noInstall(BB, TB) {
        BB.oD = "none", BB.failedDownload = this.downloads, this.installFailure = TB
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.oD || null !== this.files()) return;
        const BB = "uninstallable" === this.oD;
        this.oD = "downloading", this.opts.downloadFiles(BB).then((BB => {
          null === this.stopped && (this.oD = BB, this.downloads++, this.pump())
        }), (BB => {
          this.oD = null, this.decoderFailed(BB)
        }))
      }
      decoderFailed(BB) {
        if (null !== this.stopped) return;
        const TB = (0, JB.f)(BB);
        let dB = 0;
        for (const VB of this.queue.splice(0)) VB.draco ? (VB.resolve((0, OB.d)(VB.word, TB)), dB++) : this.queue.push(VB);
        dB > 0 && this.opts.onDecoderFailed(BB)
      }
      run(BB, TB, dB) {
        const VB = this.nextSeq++;
        BB.seq = VB, BB.job = dB, dB.attempts++;
        const yB = dB.glb.slice();
        TB.postMessage({
          type: "job",
          seq: VB,
          word: dB.word,
          glb: yB.buffer
        }, [yB.buffer])
      }
      lose(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(BB);
        const VB = BB.worker;
        null !== VB && (VB.onmessage = null, VB.onerror = null, VB.terminate());
        const yB = !dB && "installing" === BB.oD;
        BB.worker = null, BB.starting = !1, BB.oD = "none", yB && this.noInstall(BB, TB), void 0 !== BB.startedAt && performance.now() - BB.startedAt >= 6e4 && (BB.losses = 0), BB.startedAt = void 0;
        const pB = BB.job;
        if (BB.job = null, null !== pB || yB || BB.losses++, this.opts.onWorkerLost(TB), null !== pB && yB) pB.attempts--, this.queue.unshift(pB);
        else if (null !== pB && (pB.attempts < 2 ? this.queue.unshift(pB) : pB.resolve((0, OB.h)(pB.word, TB)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(BB) {
        if (null !== this.stopped) return;
        this.stopped = null === BB ? "the model workers stopped" : `the model workers could not start: ${(0,JB.f)(BB)}`;
        const TB = this.stopped,
          dB = BB => {
            BB.resolve((0, OB.l)(BB.word, TB))
          };
        for (const yB of this.slots) {
          var VB;
          this.clearTimer(yB), null === (VB = yB.worker) || void 0 === VB || VB.terminate(), yB.worker = null, null !== yB.job && dB(yB.job), yB.job = null
        }
        this.queue.splice(0).forEach(dB), null !== BB && this.opts.onUnavailable(BB)
      }
    }
    let EB = null;
    const vB = new Set;

    function mB(BB) {
      return vB.add(BB), EB ??= function() {
        let BB = (TB = navigator.hardwareConcurrency, JB = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, TB > 2 && !(0, LB.q)(JB) ? 2 : 1);
        var TB, JB;
        const gB = new HB({
          module: (0, yB.e)(pB.e),
          downloadFiles: oB(lB.c.scriptUrl, lB.c.wasmBinaryUrl),
          loadWorker: async () => (await dB.e(40).then((() => dB(60056)))).createModelWorker,
          count: BB,
          onUnavailable: BB => {
            if (EB === gB) {
              EB = null;
              const TB = function(BB) {
                return BB instanceof VB.e ? [pB.e.url().href] : void 0
              }(BB);
              iB((dB => {
                dB.onUnavailable(BB, TB)
              }))
            }
          },
          onDecoderFailed: BB => {
            if (EB === gB) {
              const TB = BB instanceof YB ? BB.goneUrl : null,
                dB = null === TB ? void 0 : [TB];
              iB((TB => {
                TB.onDecoderFailed(BB, dB)
              }))
            }
          },
          onWorkerLost: BB => {
            EB === gB && iB((TB => {
              TB.onWorkerLost(BB)
            }))
          }
        });
        return gB
      }(), {
        pool: EB,
        unlisten: () => {
          vB.delete(BB)
        }
      }
    }

    function iB(BB) {
      for (const dB of [...vB]) try {
        BB(dB)
      } catch (TB) {
        console.error("[pageModelPool] a listener threw", TB)
      }
    }
  },
  40244: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  40238: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);