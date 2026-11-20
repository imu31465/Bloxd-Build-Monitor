export const id = 42;
export const ids = [42];
export const modules = {
  41101: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT
    });
    var lT = cT(159),
      MT = cT(1210);

    function KT(TT) {
      return (0, lT.c)() ? `https://${MT.c.discordDomain}/${TT.href}` : TT.href
    }
    const OT = {
      scriptUrl: KT(new cT.U(cT(41103))),
      wasmBinaryUrl: KT(new cT.U(cT(41106)))
    }
  },
  9440: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT,
      e: () => KT,
      g: () => OT
    });
    const lT = 1179937895,
      MT = 1313821514;

    function KT(TT) {
      const kT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      if (TT.byteLength < 20 || kT.getUint32(0, !0) !== lT || 2 !== kT.getUint32(4, !0)) return null;
      const cT = Math.min(kT.getUint32(8, !0), TT.byteLength),
        KT = kT.getUint32(12, !0);
      if (kT.getUint32(16, !0) !== MT || 20 + KT > cT) return null;
      let OT;
      try {
        OT = JSON.parse((new TextDecoder).decode(TT.subarray(20, 20 + KT)))
      } catch {
        return null
      }
      return "object" === typeof OT && null !== OT ? {
        json: OT,
        jsonEnd: 20 + KT,
        length: cT
      } : null
    }

    function OT(TT) {
      var kT;
      const cT = null === (kT = KT(TT)) || void 0 === kT ? void 0 : kT.json;
      if (void 0 === cT || !Array.isArray(cT.extensionsUsed) || !cT.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const lT = cT.meshes;
      return Array.isArray(lT) && lT.some((TT => {
        const kT = null === TT || void 0 === TT ? void 0 : TT.primitives;
        return Array.isArray(kT) && kT.some((TT => {
          const kT = null === TT || void 0 === TT ? void 0 : TT.extensions;
          return null != (null === kT || void 0 === kT ? void 0 : kT.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42867: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => NT,
      pageModelPool: () => DT
    });
    var lT = cT(3684),
      MT = cT(36113),
      KT = cT(40409),
      OT = cT(41101),
      yT = cT(36089);
    Error;
    class fT extends Error {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${TT}: ${kT}`), this.stage = TT, this.url = cT, this.status = lT, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function xT(TT, kT) {
      let cT = null,
        MT = !1;
      return {
        get: () => {
          if (null === cT) {
            const KT = async function(TT, kT) {
              try {
                return (await (0, lT.N)(TT)).buffer
              } catch (cT) {
                throw new fT(kT, (0, yT.k)(cT), TT, cT instanceof lT.c ? cT.status : null)
              }
            }(TT, kT);
            cT = KT, KT.then((() => {
              MT = cT === KT
            }), (() => {
              cT = null
            }))
          }
          return cT
        },
        forget: () => {
          MT && (cT = null, MT = !1)
        }
      }
    }

    function IT(TT, kT) {
      const cT = xT(kT, "wasm"),
        lT = xT(TT, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (cT.forget(), lT.forget());
        const [TT, kT] = await Promise.all([cT.get(), lT.get()]);
        return {
          script: kT,
          wasmBinary: TT
        }
      }
    }
    var AT = cT(9440),
      CT = cT(3045),
      jT = cT(40590),
      vT = cT(40627);
    class tT extends Error {
      constructor(TT) {
        super(`no model worker could install it: ${TT}`), this.name = "DracoInstallError"
      }
    }
    class hT {
      constructor(TT) {
        this.opts = TT, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.pj = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let kT = 0; kT < Math.max(1, TT.count); kT++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          pj: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((TT => null !== TT.job)).length
      }
      build(TT, kT) {
        if (null !== this.stopped) return Promise.resolve((0, jT.o)(TT, this.stopped));
        const cT = (0, AT.g)(kT);
        return cT && this.downloadDecoder(), new Promise((lT => {
          this.queue.push({
            word: TT,
            glb: kT,
            draco: cT,
            attempts: 0,
            resolve: lT
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.pj ? this.pj : null
      }
      pump() {
        const TT = this.files();
        for (const kT of this.slots) {
          if (null !== this.stopped) return;
          if (kT.gaveUp || kT.starting) continue;
          if (null === kT.worker) {
            this.start(kT);
            continue
          }
          if (null !== TT && "none" === kT.pj && kT.failedDownload !== this.downloads && this.install(kT, kT.worker, TT), null !== kT.job) continue;
          const cT = this.queue.findIndex((TT => "installed" === kT.pj || !TT.draco));
          cT >= 0 && this.run(kT, kT.worker, this.queue.splice(cT, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((TT => !TT.gaveUp && ("none" !== TT.pj || TT.failedDownload !== this.downloads))) || (this.pj = "uninstallable", this.decoderFailed(new tT(this.installFailure)))
      }
      start(TT) {
        if (TT.losses >= 6) return TT.gaveUp = !0, void(this.slots.every((TT => TT.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        TT.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((kT => {
          let [cT, lT] = kT;
          null === this.stopped && this.launch(TT, cT, lT)
        }), (TT => {
          this.fail(TT)
        }))
      }
      launch(TT, kT, cT) {
        let lT;
        try {
          lT = kT()
        } catch (MT) {
          return void this.lose(TT, `a model worker could not be created (${String(MT)})`)
        }
        TT.worker = lT, this.startTimer(TT, 3e4, (kT => {
          this.lose(TT, `a model worker did not start: ${(0,vT.h)(kT)}`)
        })), lT.onmessage = kT => {
          let {
            data: cT
          } = kT;
          this.answered(TT, lT, cT)
        }, lT.onerror = kT => {
          this.lose(TT, TT.starting ? `a model worker failed to start: ${kT.message}` : `a model worker failed: ${kT.message}`)
        }, lT.postMessage({
          type: "start",
          module: cT
        })
      }
      startTimer(TT, kT, cT) {
        TT.timer = new vT.g(kT, (kT => {
          TT.timer = null, cT(kT)
        }), void 0, this.opts.visibility)
      }
      clearTimer(TT) {
        var kT;
        null === (kT = TT.timer) || void 0 === kT || kT.cancel(), TT.timer = null
      }
      answered(TT, kT, cT) {
        if ("lost" === cT.type) return void this.lose(TT, cT.reason);
        if (TT.starting) return "started" !== cT.type ? void this.lose(TT, `a model worker answered ${cT.type} before it started`) : (this.clearTimer(TT), TT.starting = !1, TT.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === cT.type || "dracoFailed" === cT.type) {
          if (cT.seq !== TT.installSeq) return;
          return void("installing" === TT.pj ? (this.clearTimer(TT), "dracoInstalled" === cT.type ? (TT.pj = "installed", this.pump()) : this.installFailed(TT, cT.reason)) : "dracoInstalled" === cT.type && "none" === TT.pj && TT.failedDownload === this.downloads && (TT.pj = "installed", this.pump()))
        }
        const lT = TT.job;
        null !== lT && "started" !== cT.type && cT.seq === TT.seq && ("trapped" !== cT.type ? (TT.job = null, TT.losses = 0, this.jobLosses = 0, lT.resolve(new Uint8Array(cT.record)), this.pump()) : this.lose(TT, cT.trap, !0))
      }
      install(TT, kT, cT) {
        const lT = this.nextSeq++;
        TT.pj = "installing", TT.installSeq = lT, this.startTimer(TT, 3e4, (kT => {
          this.installFailed(TT, `no install within ${Math.round(kT)} ms`)
        }));
        const MT = cT.script.slice(0),
          KT = cT.wasmBinary.slice(0);
        kT.postMessage({
          type: "installDraco",
          seq: lT,
          script: MT,
          wasmBinary: KT
        }, [MT, KT])
      }
      installFailed(TT, kT) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${kT}`), this.noInstall(TT, kT), this.pump()
      }
      noInstall(TT, kT) {
        TT.pj = "none", TT.failedDownload = this.downloads, this.installFailure = kT
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.pj || null !== this.files()) return;
        const TT = "uninstallable" === this.pj;
        this.pj = "downloading", this.opts.downloadFiles(TT).then((TT => {
          null === this.stopped && (this.pj = TT, this.downloads++, this.pump())
        }), (TT => {
          this.pj = null, this.decoderFailed(TT)
        }))
      }
      decoderFailed(TT) {
        if (null !== this.stopped) return;
        const kT = (0, yT.k)(TT);
        let cT = 0;
        for (const lT of this.queue.splice(0)) lT.draco ? (lT.resolve((0, jT.j)(lT.word, kT)), cT++) : this.queue.push(lT);
        cT > 0 && this.opts.onDecoderFailed(TT)
      }
      run(TT, kT, cT) {
        const lT = this.nextSeq++;
        TT.seq = lT, TT.job = cT, cT.attempts++;
        const MT = cT.glb.slice();
        kT.postMessage({
          type: "job",
          seq: lT,
          word: cT.word,
          glb: MT.buffer
        }, [MT.buffer])
      }
      lose(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(TT);
        const lT = TT.worker;
        null !== lT && (lT.onmessage = null, lT.onerror = null, lT.terminate());
        const MT = !cT && "installing" === TT.pj;
        TT.worker = null, TT.starting = !1, TT.pj = "none", MT && this.noInstall(TT, kT), void 0 !== TT.startedAt && performance.now() - TT.startedAt >= 6e4 && (TT.losses = 0), TT.startedAt = void 0;
        const KT = TT.job;
        if (TT.job = null, null !== KT || MT || TT.losses++, this.opts.onWorkerLost(kT), null !== KT && MT) KT.attempts--, this.queue.unshift(KT);
        else if (null !== KT && (KT.attempts < 2 ? this.queue.unshift(KT) : KT.resolve((0, jT.m)(KT.word, kT)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(TT) {
        if (null !== this.stopped) return;
        this.stopped = null === TT ? "the model workers stopped" : `the model workers could not start: ${(0,yT.k)(TT)}`;
        const kT = this.stopped,
          cT = TT => {
            TT.resolve((0, jT.o)(TT.word, kT))
          };
        for (const MT of this.slots) {
          var lT;
          this.clearTimer(MT), null === (lT = MT.worker) || void 0 === lT || lT.terminate(), MT.worker = null, null !== MT.job && cT(MT.job), MT.job = null
        }
        this.queue.splice(0).forEach(cT), null !== TT && this.opts.onUnavailable(TT)
      }
    }
    const NT = [...lT.q, 5e3, 15e3, 3e4];
    let QT = null;
    const ST = new Set;

    function DT(TT) {
      return ST.add(TT), QT ??= function() {
        let TT = (kT = navigator.hardwareConcurrency, yT = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, kT > 2 && !(0, CT.i)(yT) ? 2 : 1);
        var kT, yT;
        const xT = new hT({
          module: (0, MT.d)(KT.e, {
            delays: NT,
            onRetry: (TT, kT) => {
              QT === xT && aT((cT => {
                cT.onModuleRetry(TT, kT)
              }))
            }
          }),
          downloadFiles: IT(OT.b.scriptUrl, OT.b.wasmBinaryUrl),
          loadWorker: async () => (await cT.e(43).then((() => cT(60889)))).createModelWorker,
          count: TT,
          onUnavailable: TT => {
            if (QT === xT) {
              QT = null;
              const kT = function(TT) {
                return TT instanceof lT.b ? [KT.e.url().href] : void 0
              }(TT);
              aT((cT => {
                cT.onUnavailable(TT, kT)
              }))
            }
          },
          onDecoderFailed: TT => {
            if (QT === xT) {
              const kT = TT instanceof fT ? TT.goneUrl : null,
                cT = null === kT ? void 0 : [kT];
              aT((kT => {
                kT.onDecoderFailed(TT, cT)
              }))
            }
          },
          onWorkerLost: TT => {
            QT === xT && aT((kT => {
              kT.onWorkerLost(TT)
            }))
          }
        });
        return xT
      }(), {
        pool: QT,
        unlisten: () => {
          ST.delete(TT)
        }
      }
    }

    function aT(TT) {
      for (const cT of [...ST]) try {
        TT(cT)
      } catch (kT) {
        console.error("[pageModelPool] a listener threw", kT)
      }
    }
  },
  41103: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41106: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);