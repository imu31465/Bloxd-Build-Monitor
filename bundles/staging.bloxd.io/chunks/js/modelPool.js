export const id = 42;
export const ids = [42];
export const modules = {
  40555: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(144),
      AY = DY(1224);

    function IY(YY) {
      return (0, FY.b)() ? `https://${AY.e.discordDomain}/${YY.href}` : YY.href
    }
    const RY = {
      scriptUrl: IY(new DY.U(DY(40561))),
      wasmBinaryUrl: IY(new DY.U(DY(40567)))
    }
  },
  8816: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      h: () => IY,
      i: () => RY
    });
    const FY = 1179937895,
      AY = 1313821514;

    function IY(YY) {
      const rY = new DataView(YY.buffer, YY.byteOffset, YY.byteLength);
      if (YY.byteLength < 20 || rY.getUint32(0, !0) !== FY || 2 !== rY.getUint32(4, !0)) return null;
      const DY = Math.min(rY.getUint32(8, !0), YY.byteLength),
        IY = rY.getUint32(12, !0);
      if (rY.getUint32(16, !0) !== AY || 20 + IY > DY) return null;
      let RY;
      try {
        RY = JSON.parse((new TextDecoder).decode(YY.subarray(20, 20 + IY)))
      } catch {
        return null
      }
      return "object" === typeof RY && null !== RY ? {
        json: RY,
        jsonEnd: 20 + IY,
        length: DY
      } : null
    }

    function RY(YY) {
      var rY;
      const DY = null === (rY = IY(YY)) || void 0 === rY ? void 0 : rY.json;
      if (void 0 === DY || !Array.isArray(DY.extensionsUsed) || !DY.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const FY = DY.meshes;
      return Array.isArray(FY) && FY.some((YY => {
        const rY = null === YY || void 0 === YY ? void 0 : YY.primitives;
        return Array.isArray(rY) && rY.some((YY => {
          const rY = null === YY || void 0 === YY ? void 0 : YY.extensions;
          return null != (null === rY || void 0 === rY ? void 0 : rY.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42414: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => WY,
      pageModelPool: () => VY
    });
    var FY = DY(3316),
      AY = DY(35750),
      IY = DY(39871),
      RY = DY(40555),
      OY = DY(39904);
    Error;
    class gY extends Error {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${YY}: ${rY}`), this.stage = YY, this.url = DY, this.status = FY, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function aY(YY, rY) {
      let DY = null,
        AY = !1;
      return {
        get: () => {
          if (null === DY) {
            const IY = async function(YY, rY) {
              try {
                return (await (0, FY.D)(YY)).buffer
              } catch (DY) {
                throw new gY(rY, (0, OY.f)(DY), YY, DY instanceof FY.e ? DY.status : null)
              }
            }(YY, rY);
            DY = IY, IY.then((() => {
              AY = DY === IY
            }), (() => {
              DY = null
            }))
          }
          return DY
        },
        forget: () => {
          AY && (DY = null, AY = !1)
        }
      }
    }

    function vY(YY, rY) {
      const DY = aY(rY, "wasm"),
        FY = aY(YY, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (DY.forget(), FY.forget());
        const [YY, rY] = await Promise.all([DY.get(), FY.get()]);
        return {
          script: rY,
          wasmBinary: YY
        }
      }
    }
    var uY = DY(8816),
      sY = DY(2707),
      iY = DY(40090),
      yY = DY(40124);
    class QY extends Error {
      constructor(YY) {
        super(`no model worker could install it: ${YY}`), this.name = "DracoInstallError"
      }
    }
    class oY {
      constructor(YY) {
        this.opts = YY, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.yy = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let rY = 0; rY < Math.max(1, YY.count); rY++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          yy: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((YY => null !== YY.job)).length
      }
      build(YY, rY) {
        if (null !== this.stopped) return Promise.resolve((0, iY.t)(YY, this.stopped));
        const DY = (0, uY.i)(rY);
        return DY && this.downloadDecoder(), new Promise((FY => {
          this.queue.push({
            word: YY,
            glb: rY,
            draco: DY,
            attempts: 0,
            resolve: FY
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.yy ? this.yy : null
      }
      pump() {
        const YY = this.files();
        for (const rY of this.slots) {
          if (null !== this.stopped) return;
          if (rY.gaveUp || rY.starting) continue;
          if (null === rY.worker) {
            this.start(rY);
            continue
          }
          if (null !== YY && "none" === rY.yy && rY.failedDownload !== this.downloads && this.install(rY, rY.worker, YY), null !== rY.job) continue;
          const DY = this.queue.findIndex((YY => "installed" === rY.yy || !YY.draco));
          DY >= 0 && this.run(rY, rY.worker, this.queue.splice(DY, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((YY => !YY.gaveUp && ("none" !== YY.yy || YY.failedDownload !== this.downloads))) || (this.yy = "uninstallable", this.decoderFailed(new QY(this.installFailure)))
      }
      start(YY) {
        if (YY.losses >= 6) return YY.gaveUp = !0, void(this.slots.every((YY => YY.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        YY.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((rY => {
          let [DY, FY] = rY;
          null === this.stopped && this.launch(YY, DY, FY)
        }), (YY => {
          this.fail(YY)
        }))
      }
      launch(YY, rY, DY) {
        let FY;
        try {
          FY = rY()
        } catch (AY) {
          return void this.lose(YY, `a model worker could not be created (${String(AY)})`)
        }
        YY.worker = FY, this.startTimer(YY, 3e4, (rY => {
          this.lose(YY, `a model worker did not start: ${(0,yY.g)(rY)}`)
        })), FY.onmessage = rY => {
          let {
            data: DY
          } = rY;
          this.answered(YY, FY, DY)
        }, FY.onerror = rY => {
          this.lose(YY, YY.starting ? `a model worker failed to start: ${rY.message}` : `a model worker failed: ${rY.message}`)
        }, FY.postMessage({
          type: "start",
          module: DY
        })
      }
      startTimer(YY, rY, DY) {
        YY.timer = new yY.e(rY, (rY => {
          YY.timer = null, DY(rY)
        }), void 0, this.opts.visibility)
      }
      clearTimer(YY) {
        var rY;
        null === (rY = YY.timer) || void 0 === rY || rY.cancel(), YY.timer = null
      }
      answered(YY, rY, DY) {
        if ("lost" === DY.type) return void this.lose(YY, DY.reason);
        if (YY.starting) return "started" !== DY.type ? void this.lose(YY, `a model worker answered ${DY.type} before it started`) : (this.clearTimer(YY), YY.starting = !1, YY.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === DY.type || "dracoFailed" === DY.type) {
          if (DY.seq !== YY.installSeq) return;
          return void("installing" === YY.yy ? (this.clearTimer(YY), "dracoInstalled" === DY.type ? (YY.yy = "installed", this.pump()) : this.installFailed(YY, DY.reason)) : "dracoInstalled" === DY.type && "none" === YY.yy && YY.failedDownload === this.downloads && (YY.yy = "installed", this.pump()))
        }
        const FY = YY.job;
        null !== FY && "started" !== DY.type && DY.seq === YY.seq && ("trapped" !== DY.type ? (YY.job = null, YY.losses = 0, this.jobLosses = 0, FY.resolve(new Uint8Array(DY.record)), this.pump()) : this.lose(YY, DY.trap, !0))
      }
      install(YY, rY, DY) {
        const FY = this.nextSeq++;
        YY.yy = "installing", YY.installSeq = FY, this.startTimer(YY, 3e4, (rY => {
          this.installFailed(YY, `no install within ${Math.round(rY)} ms`)
        }));
        const AY = DY.script.slice(0),
          IY = DY.wasmBinary.slice(0);
        rY.postMessage({
          type: "installDraco",
          seq: FY,
          script: AY,
          wasmBinary: IY
        }, [AY, IY])
      }
      installFailed(YY, rY) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${rY}`), this.noInstall(YY, rY), this.pump()
      }
      noInstall(YY, rY) {
        YY.yy = "none", YY.failedDownload = this.downloads, this.installFailure = rY
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.yy || null !== this.files()) return;
        const YY = "uninstallable" === this.yy;
        this.yy = "downloading", this.opts.downloadFiles(YY).then((YY => {
          null === this.stopped && (this.yy = YY, this.downloads++, this.pump())
        }), (YY => {
          this.yy = null, this.decoderFailed(YY)
        }))
      }
      decoderFailed(YY) {
        if (null !== this.stopped) return;
        const rY = (0, OY.f)(YY);
        let DY = 0;
        for (const FY of this.queue.splice(0)) FY.draco ? (FY.resolve((0, iY.k)(FY.word, rY)), DY++) : this.queue.push(FY);
        DY > 0 && this.opts.onDecoderFailed(YY)
      }
      run(YY, rY, DY) {
        const FY = this.nextSeq++;
        YY.seq = FY, YY.job = DY, DY.attempts++;
        const AY = DY.glb.slice();
        rY.postMessage({
          type: "job",
          seq: FY,
          word: DY.word,
          glb: AY.buffer
        }, [AY.buffer])
      }
      lose(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(YY);
        const FY = YY.worker;
        null !== FY && (FY.onmessage = null, FY.onerror = null, FY.terminate());
        const AY = !DY && "installing" === YY.yy;
        YY.worker = null, YY.starting = !1, YY.yy = "none", AY && this.noInstall(YY, rY), void 0 !== YY.startedAt && performance.now() - YY.startedAt >= 6e4 && (YY.losses = 0), YY.startedAt = void 0;
        const IY = YY.job;
        if (YY.job = null, null !== IY || AY || YY.losses++, this.opts.onWorkerLost(rY), null !== IY && AY) IY.attempts--, this.queue.unshift(IY);
        else if (null !== IY && (IY.attempts < 2 ? this.queue.unshift(IY) : IY.resolve((0, iY.q)(IY.word, rY)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(YY) {
        if (null !== this.stopped) return;
        this.stopped = null === YY ? "the model workers stopped" : `the model workers could not start: ${(0,OY.f)(YY)}`;
        const rY = this.stopped,
          DY = YY => {
            YY.resolve((0, iY.t)(YY.word, rY))
          };
        for (const AY of this.slots) {
          var FY;
          this.clearTimer(AY), null === (FY = AY.worker) || void 0 === FY || FY.terminate(), AY.worker = null, null !== AY.job && DY(AY.job), AY.job = null
        }
        this.queue.splice(0).forEach(DY), null !== YY && this.opts.onUnavailable(YY)
      }
    }
    const WY = [...FY.q, 5e3, 15e3, 3e4];
    let EY = null;
    const mY = new Set;

    function VY(YY) {
      return mY.add(YY), EY ??= function() {
        let YY = (rY = navigator.hardwareConcurrency, OY = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, rY > 2 && !(0, sY.o)(OY) ? 2 : 1);
        var rY, OY;
        const aY = new oY({
          module: (0, AY.d)(IY.d, {
            delays: WY,
            onRetry: (YY, rY) => {
              EY === aY && SY((DY => {
                DY.onModuleRetry(YY, rY)
              }))
            }
          }),
          downloadFiles: vY(RY.d.scriptUrl, RY.d.wasmBinaryUrl),
          loadWorker: async () => (await DY.e(43).then((() => DY(60542)))).createModelWorker,
          count: YY,
          onUnavailable: YY => {
            if (EY === aY) {
              EY = null;
              const rY = function(YY) {
                return YY instanceof FY.b ? [IY.d.url().href] : void 0
              }(YY);
              SY((DY => {
                DY.onUnavailable(YY, rY)
              }))
            }
          },
          onDecoderFailed: YY => {
            if (EY === aY) {
              const rY = YY instanceof gY ? YY.goneUrl : null,
                DY = null === rY ? void 0 : [rY];
              SY((rY => {
                rY.onDecoderFailed(YY, DY)
              }))
            }
          },
          onWorkerLost: YY => {
            EY === aY && SY((rY => {
              rY.onWorkerLost(YY)
            }))
          }
        });
        return aY
      }(), {
        pool: EY,
        unlisten: () => {
          mY.delete(YY)
        }
      }
    }

    function SY(YY) {
      for (const DY of [...mY]) try {
        YY(DY)
      } catch (rY) {
        console.error("[pageModelPool] a listener threw", rY)
      }
    }
  },
  40567: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  40561: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);