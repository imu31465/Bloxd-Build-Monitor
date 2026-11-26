export const id = 49;
export const ids = [49];
export const modules = {
  44388: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(138),
      YV = xV(1238);

    function UV(VV) {
      return (0, JV.isDiscordClient)() ? `https://${YV.e.discordDomain}/${VV.href}` : VV.href
    }
    const yV = {
      scriptUrl: UV(new xV.U(xV(44395))),
      wasmBinaryUrl: UV(new xV.U(xV(44404)))
    }
  },
  35419: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV,
      d: () => UV,
      g: () => yV
    });
    const JV = 1179937895,
      YV = 1313821514;

    function UV(VV) {
      const eV = new DataView(VV.buffer, VV.byteOffset, VV.byteLength);
      if (VV.byteLength < 20 || eV.getUint32(0, !0) !== JV || 2 !== eV.getUint32(4, !0)) return null;
      const xV = Math.min(eV.getUint32(8, !0), VV.byteLength),
        UV = eV.getUint32(12, !0);
      if (eV.getUint32(16, !0) !== YV || 20 + UV > xV) return null;
      let yV;
      try {
        yV = JSON.parse((new TextDecoder).decode(VV.subarray(20, 20 + UV)))
      } catch {
        return null
      }
      return "object" === typeof yV && null !== yV ? {
        json: yV,
        jsonEnd: 20 + UV,
        length: xV
      } : null
    }

    function yV(VV) {
      var eV;
      const xV = null === (eV = UV(VV)) || void 0 === eV ? void 0 : eV.json;
      if (void 0 === xV || !Array.isArray(xV.extensionsUsed) || !xV.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const JV = xV.meshes;
      return Array.isArray(JV) && JV.some((VV => {
        const eV = null === VV || void 0 === VV ? void 0 : VV.primitives;
        return Array.isArray(eV) && eV.some((VV => {
          const eV = null === VV || void 0 === VV ? void 0 : VV.extensions;
          return null != (null === eV || void 0 === eV ? void 0 : eV.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  54011: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => jV,
      pageModelPool: () => FV
    });
    var JV = xV(3196),
      YV = xV(37469),
      UV = xV(42158),
      yV = xV(44388),
      pV = xV(4846),
      QV = xV(37437);
    Error;
    class nV extends Error {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${VV}: ${eV}`), this.stage = VV, this.url = xV, this.status = JV, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function wV(VV, eV) {
      let xV = null,
        YV = !1;
      return {
        get: () => {
          if (null === xV) {
            const UV = async function(VV, eV) {
              try {
                return (await (0, JV.H)(VV)).buffer
              } catch (xV) {
                throw new nV(eV, (0, QV.m)(xV), VV, xV instanceof JV.f ? xV.status : null)
              }
            }(VV, eV);
            xV = UV, UV.then((() => {
              YV = xV === UV
            }), (() => {
              xV = null
            }))
          }
          return xV
        },
        forget: () => {
          YV && (xV = null, YV = !1)
        }
      }
    }

    function ZV(VV, eV) {
      const xV = wV(eV, "wasm"),
        JV = wV(VV, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (xV.forget(), JV.forget());
        const [VV, eV] = await Promise.all([xV.get(), JV.get()]);
        return {
          script: eV,
          wasmBinary: VV
        }
      }
    }
    var vV = xV(35419),
      rV = xV(3535),
      kV = xV(42096),
      bV = xV(42225);
    class EV extends Error {
      constructor(VV) {
        super(`no model worker could install it: ${VV}`), this.name = "DracoInstallError"
      }
    }
    class BV {
      constructor(VV) {
        this.opts = VV, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.BZ = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let eV = 0; eV < Math.max(1, VV.count); eV++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          BZ: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((VV => null !== VV.job)).length
      }
      build(VV, eV) {
        if (null !== this.stopped) return Promise.resolve((0, kV.t)(VV, this.stopped));
        const xV = (0, vV.g)(eV);
        return xV && this.downloadDecoder(), new Promise((JV => {
          this.queue.push({
            word: VV,
            glb: eV,
            draco: xV,
            attempts: 0,
            resolve: JV
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
        return "object" === typeof this.BZ ? this.BZ : null
      }
      pump() {
        const VV = this.resting && 0 === this.queue.length,
          eV = this.files();
        for (const xV of this.slots) {
          if (null !== this.stopped) return;
          if (xV.gaveUp || xV.starting) continue;
          if (null === xV.worker) {
            VV || this.start(xV);
            continue
          }
          if (VV) {
            null === xV.job && "installing" !== xV.BZ && this.end(xV);
            continue
          }
          if (null !== eV && "none" === xV.BZ && xV.failedDownload !== this.downloads && this.install(xV, xV.worker, eV), null !== xV.job) continue;
          const JV = this.queue.findIndex((VV => "installed" === xV.BZ || !VV.draco));
          JV >= 0 && this.run(xV, xV.worker, this.queue.splice(JV, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((VV => !VV.gaveUp && ("none" !== VV.BZ || VV.failedDownload !== this.downloads))) || (this.BZ = "uninstallable", this.decoderFailed(new EV(this.installFailure)))
      }
      start(VV) {
        if (VV.losses >= 6) return VV.gaveUp = !0, void(this.slots.every((VV => VV.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        VV.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((eV => {
          let [xV, JV] = eV;
          null === this.stopped && this.launch(VV, xV, JV)
        }), (VV => {
          this.fail(VV)
        }))
      }
      launch(VV, eV, xV) {
        let JV;
        try {
          JV = eV()
        } catch (YV) {
          return void this.lose(VV, `a model worker could not be created (${String(YV)})`)
        }
        VV.worker = JV, this.startTimer(VV, 3e4, (eV => {
          this.lose(VV, `a model worker did not start: ${(0,bV.h)(eV)}`)
        })), JV.onmessage = eV => {
          let {
            data: xV
          } = eV;
          this.answered(VV, JV, xV)
        }, JV.onerror = eV => {
          this.lose(VV, VV.starting ? `a model worker failed to start: ${eV.message}` : `a model worker failed: ${eV.message}`)
        }, JV.postMessage({
          type: "start",
          module: xV
        })
      }
      end(VV) {
        const eV = VV.worker;
        null !== eV && (eV.onmessage = null, eV.onerror = null, eV.terminate()), VV.worker = null, VV.BZ = "none", VV.startedAt = void 0
      }
      startTimer(VV, eV, xV) {
        VV.timer = new bV.f(eV, (eV => {
          VV.timer = null, xV(eV)
        }), void 0, this.opts.visibility)
      }
      clearTimer(VV) {
        var eV;
        null === (eV = VV.timer) || void 0 === eV || eV.cancel(), VV.timer = null
      }
      answered(VV, eV, xV) {
        if ("lost" === xV.type) return void this.lose(VV, xV.reason);
        if (VV.starting) return "started" !== xV.type ? void this.lose(VV, `a model worker answered ${xV.type} before it started`) : (this.clearTimer(VV), VV.starting = !1, VV.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === xV.type || "dracoFailed" === xV.type) {
          if (xV.seq !== VV.installSeq) return;
          return void("installing" === VV.BZ ? (this.clearTimer(VV), "dracoInstalled" === xV.type ? (VV.BZ = "installed", this.pump()) : this.installFailed(VV, xV.reason)) : "dracoInstalled" === xV.type && "none" === VV.BZ && VV.failedDownload === this.downloads && (VV.BZ = "installed", VV.failedDownload = 0, this.pump()))
        }
        const JV = VV.job;
        null !== JV && "started" !== xV.type && xV.seq === VV.seq && ("trapped" !== xV.type ? (VV.job = null, VV.losses = 0, this.jobLosses = 0, JV.resolve(new Uint8Array(xV.record)), this.pump()) : this.lose(VV, xV.trap, !0))
      }
      install(VV, eV, xV) {
        const JV = this.nextSeq++;
        VV.BZ = "installing", VV.installSeq = JV, this.startTimer(VV, 3e4, (eV => {
          this.installFailed(VV, `no install within ${Math.round(eV)} ms`)
        }));
        const YV = xV.script.slice(0),
          UV = xV.wasmBinary.slice(0);
        eV.postMessage({
          type: "installDraco",
          seq: JV,
          script: YV,
          wasmBinary: UV
        }, [YV, UV])
      }
      installFailed(VV, eV) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${eV}`), this.noInstall(VV, eV), this.pump()
      }
      noInstall(VV, eV) {
        VV.BZ = "none", VV.failedDownload = this.downloads, this.installFailure = eV
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.BZ || null !== this.files()) return;
        const VV = "uninstallable" === this.BZ;
        this.BZ = "downloading", this.opts.downloadFiles(VV).then((VV => {
          null === this.stopped && (this.BZ = VV, this.downloads++, this.pump())
        }), (VV => {
          this.BZ = null, this.decoderFailed(VV)
        }))
      }
      decoderFailed(VV) {
        if (null !== this.stopped) return;
        const eV = (0, QV.m)(VV);
        let xV = 0;
        for (const JV of this.queue.splice(0)) JV.draco ? (JV.resolve((0, kV.g)(JV.word, eV)), xV++) : this.queue.push(JV);
        xV > 0 && this.opts.onDecoderFailed(VV), this.pump()
      }
      run(VV, eV, xV) {
        const JV = this.nextSeq++;
        VV.seq = JV, VV.job = xV, xV.attempts++;
        const YV = xV.glb.slice();
        eV.postMessage({
          type: "job",
          seq: JV,
          word: xV.word,
          glb: YV.buffer
        }, [YV.buffer])
      }
      lose(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(VV);
        const JV = !xV && "installing" === VV.BZ;
        void 0 !== VV.startedAt && performance.now() - VV.startedAt >= 6e4 && (VV.losses = 0), this.end(VV), VV.starting = !1, JV && this.noInstall(VV, eV);
        const YV = VV.job;
        if (VV.job = null, null !== YV || JV || VV.losses++, this.opts.onWorkerLost(eV), null !== YV && JV) YV.attempts--, this.queue.unshift(YV);
        else if (null !== YV && (YV.attempts < 2 ? this.queue.unshift(YV) : YV.resolve((0, kV.p)(YV.word, eV)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(VV) {
        if (null !== this.stopped) return;
        this.stopped = null === VV ? "the model workers stopped" : `the model workers could not start: ${(0,QV.m)(VV)}`;
        const eV = this.stopped,
          xV = VV => {
            VV.resolve((0, kV.t)(VV.word, eV))
          };
        for (const YV of this.slots) {
          var JV;
          this.clearTimer(YV), null === (JV = YV.worker) || void 0 === JV || JV.terminate(), YV.worker = null, null !== YV.job && xV(YV.job), YV.job = null
        }
        this.queue.splice(0).forEach(xV), null !== VV && this.opts.onUnavailable(VV)
      }
    }
    const jV = [...JV.p, 5e3, 15e3, 3e4];
    let qV = null;
    const tV = new Set;

    function FV(VV) {
      return tV.add(VV), qV ??= function() {
        let VV = "fix" === (0, pV.d)() ? 1 : (eV = navigator.hardwareConcurrency, QV = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, eV > 2 && !(0, rV.s)(QV) ? 2 : 1);
        var eV, QV;
        const wV = new BV({
          module: (0, YV.c)(UV.d, {
            delays: jV,
            onRetry: (VV, eV) => {
              qV === wV && TV((xV => {
                xV.onModuleRetry(VV, eV)
              }))
            }
          }),
          downloadFiles: ZV(yV.c.scriptUrl, yV.c.wasmBinaryUrl),
          loadWorker: async () => (await xV.e(50).then((() => xV(64527)))).createModelWorker,
          count: VV,
          onUnavailable: VV => {
            if (qV === wV) {
              qV = null;
              const eV = function(VV) {
                return VV instanceof JV.b ? [UV.d.url().href] : void 0
              }(VV);
              TV((xV => {
                xV.onUnavailable(VV, eV)
              }))
            }
          },
          onDecoderFailed: VV => {
            if (qV === wV) {
              const eV = VV instanceof nV ? VV.goneUrl : null,
                xV = null === eV ? void 0 : [eV];
              TV((eV => {
                eV.onDecoderFailed(VV, xV)
              }))
            }
          },
          onWorkerLost: VV => {
            qV === wV && TV((eV => {
              eV.onWorkerLost(VV)
            }))
          }
        });
        return wV
      }(), {
        pool: qV,
        unlisten: () => {
          tV.delete(VV)
        }
      }
    }

    function TV(VV) {
      for (const xV of [...tV]) try {
        VV(xV)
      } catch (eV) {
        console.error("[pageModelPool] a listener threw", eV)
      }
    }
  },
  44395: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  44404: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);