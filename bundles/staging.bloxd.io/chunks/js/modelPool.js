export const id = 42;
export const ids = [42];
export const modules = {
  40319: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT = IT(139),
      zT = IT(1185);

    function kT(TT) {
      return (0, iT.c)() ? `https://${zT.c.discordDomain}/${TT.href}` : TT.href
    }
    const WT = {
      scriptUrl: kT(new IT.U(IT(40324))),
      wasmBinaryUrl: kT(new IT.U(IT(40327)))
    }
  },
  8814: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      e: () => kT,
      f: () => WT
    });
    const iT = 1179937895,
      zT = 1313821514;

    function kT(TT) {
      const oT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      if (TT.byteLength < 20 || oT.getUint32(0, !0) !== iT || 2 !== oT.getUint32(4, !0)) return null;
      const IT = Math.min(oT.getUint32(8, !0), TT.byteLength),
        kT = oT.getUint32(12, !0);
      if (oT.getUint32(16, !0) !== zT || 20 + kT > IT) return null;
      let WT;
      try {
        WT = JSON.parse((new TextDecoder).decode(TT.subarray(20, 20 + kT)))
      } catch {
        return null
      }
      return "object" === typeof WT && null !== WT ? {
        json: WT,
        jsonEnd: 20 + kT,
        length: IT
      } : null
    }

    function WT(TT) {
      var oT;
      const IT = null === (oT = kT(TT)) || void 0 === oT ? void 0 : oT.json;
      if (void 0 === IT || !Array.isArray(IT.extensionsUsed) || !IT.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const iT = IT.meshes;
      return Array.isArray(iT) && iT.some((TT => {
        const oT = null === TT || void 0 === TT ? void 0 : TT.primitives;
        return Array.isArray(oT) && oT.some((TT => {
          const oT = null === TT || void 0 === TT ? void 0 : TT.extensions;
          return null != (null === oT || void 0 === oT ? void 0 : oT.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42162: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => rT,
      pageModelPool: () => hT
    });
    var iT = IT(3280),
      zT = IT(35343),
      kT = IT(39553),
      WT = IT(40319),
      XT = IT(39579);
    Error;
    class BT extends Error {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${TT}: ${oT}`), this.stage = TT, this.url = IT, this.status = iT, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function FT(TT, oT) {
      let IT = null,
        zT = !1;
      return {
        get: () => {
          if (null === IT) {
            const kT = async function(TT, oT) {
              try {
                return (await (0, iT.K)(TT)).buffer
              } catch (IT) {
                throw new BT(oT, (0, XT.h)(IT), TT, IT instanceof iT.g ? IT.status : null)
              }
            }(TT, oT);
            IT = kT, kT.then((() => {
              zT = IT === kT
            }), (() => {
              IT = null
            }))
          }
          return IT
        },
        forget: () => {
          zT && (IT = null, zT = !1)
        }
      }
    }

    function ST(TT, oT) {
      const IT = FT(oT, "wasm"),
        iT = FT(TT, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (IT.forget(), iT.forget());
        const [TT, oT] = await Promise.all([IT.get(), iT.get()]);
        return {
          script: oT,
          wasmBinary: TT
        }
      }
    }
    var DT = IT(8814),
      LT = IT(2679),
      xT = IT(39768),
      cT = IT(39798);
    class KT extends Error {
      constructor(TT) {
        super(`no model worker could install it: ${TT}`), this.name = "DracoInstallError"
      }
    }
    class MT {
      constructor(TT) {
        this.opts = TT, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.Lc = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let oT = 0; oT < Math.max(1, TT.count); oT++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          Lc: "none",
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
      build(TT, oT) {
        if (null !== this.stopped) return Promise.resolve((0, xT.w)(TT, this.stopped));
        const IT = (0, DT.f)(oT);
        return IT && this.downloadDecoder(), new Promise((iT => {
          this.queue.push({
            word: TT,
            glb: oT,
            draco: IT,
            attempts: 0,
            resolve: iT
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.Lc ? this.Lc : null
      }
      pump() {
        const TT = this.files();
        for (const oT of this.slots) {
          if (null !== this.stopped) return;
          if (oT.gaveUp || oT.starting) continue;
          if (null === oT.worker) {
            this.start(oT);
            continue
          }
          if (null !== TT && "none" === oT.Lc && oT.failedDownload !== this.downloads && this.install(oT, oT.worker, TT), null !== oT.job) continue;
          const IT = this.queue.findIndex((TT => "installed" === oT.Lc || !TT.draco));
          IT >= 0 && this.run(oT, oT.worker, this.queue.splice(IT, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((TT => !TT.gaveUp && ("none" !== TT.Lc || TT.failedDownload !== this.downloads))) || (this.Lc = "uninstallable", this.decoderFailed(new KT(this.installFailure)))
      }
      start(TT) {
        if (TT.losses >= 6) return TT.gaveUp = !0, void(this.slots.every((TT => TT.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        TT.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((oT => {
          let [IT, iT] = oT;
          null === this.stopped && this.launch(TT, IT, iT)
        }), (TT => {
          this.fail(TT)
        }))
      }
      launch(TT, oT, IT) {
        let iT;
        try {
          iT = oT()
        } catch (zT) {
          return void this.lose(TT, `a model worker could not be created (${String(zT)})`)
        }
        TT.worker = iT, this.startTimer(TT, 3e4, (oT => {
          this.lose(TT, `a model worker did not start: ${(0,cT.j)(oT)}`)
        })), iT.onmessage = oT => {
          let {
            data: IT
          } = oT;
          this.answered(TT, iT, IT)
        }, iT.onerror = oT => {
          this.lose(TT, TT.starting ? `a model worker failed to start: ${oT.message}` : `a model worker failed: ${oT.message}`)
        }, iT.postMessage({
          type: "start",
          module: IT
        })
      }
      startTimer(TT, oT, IT) {
        TT.timer = new cT.h(oT, (oT => {
          TT.timer = null, IT(oT)
        }), void 0, this.opts.visibility)
      }
      clearTimer(TT) {
        var oT;
        null === (oT = TT.timer) || void 0 === oT || oT.cancel(), TT.timer = null
      }
      answered(TT, oT, IT) {
        if ("lost" === IT.type) return void this.lose(TT, IT.reason);
        if (TT.starting) return "started" !== IT.type ? void this.lose(TT, `a model worker answered ${IT.type} before it started`) : (this.clearTimer(TT), TT.starting = !1, TT.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === IT.type || "dracoFailed" === IT.type) {
          if (IT.seq !== TT.installSeq) return;
          return void("installing" === TT.Lc ? (this.clearTimer(TT), "dracoInstalled" === IT.type ? (TT.Lc = "installed", this.pump()) : this.installFailed(TT, IT.reason)) : "dracoInstalled" === IT.type && "none" === TT.Lc && TT.failedDownload === this.downloads && (TT.Lc = "installed", this.pump()))
        }
        const iT = TT.job;
        null !== iT && "started" !== IT.type && IT.seq === TT.seq && ("trapped" !== IT.type ? (TT.job = null, TT.losses = 0, this.jobLosses = 0, iT.resolve(new Uint8Array(IT.record)), this.pump()) : this.lose(TT, IT.trap, !0))
      }
      install(TT, oT, IT) {
        const iT = this.nextSeq++;
        TT.Lc = "installing", TT.installSeq = iT, this.startTimer(TT, 3e4, (oT => {
          this.installFailed(TT, `no install within ${Math.round(oT)} ms`)
        }));
        const zT = IT.script.slice(0),
          kT = IT.wasmBinary.slice(0);
        oT.postMessage({
          type: "installDraco",
          seq: iT,
          script: zT,
          wasmBinary: kT
        }, [zT, kT])
      }
      installFailed(TT, oT) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${oT}`), this.noInstall(TT, oT), this.pump()
      }
      noInstall(TT, oT) {
        TT.Lc = "none", TT.failedDownload = this.downloads, this.installFailure = oT
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.Lc || null !== this.files()) return;
        const TT = "uninstallable" === this.Lc;
        this.Lc = "downloading", this.opts.downloadFiles(TT).then((TT => {
          null === this.stopped && (this.Lc = TT, this.downloads++, this.pump())
        }), (TT => {
          this.Lc = null, this.decoderFailed(TT)
        }))
      }
      decoderFailed(TT) {
        if (null !== this.stopped) return;
        const oT = (0, XT.h)(TT);
        let IT = 0;
        for (const iT of this.queue.splice(0)) iT.draco ? (iT.resolve((0, xT.i)(iT.word, oT)), IT++) : this.queue.push(iT);
        IT > 0 && this.opts.onDecoderFailed(TT)
      }
      run(TT, oT, IT) {
        const iT = this.nextSeq++;
        TT.seq = iT, TT.job = IT, IT.attempts++;
        const zT = IT.glb.slice();
        oT.postMessage({
          type: "job",
          seq: iT,
          word: IT.word,
          glb: zT.buffer
        }, [zT.buffer])
      }
      lose(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(TT);
        const iT = TT.worker;
        null !== iT && (iT.onmessage = null, iT.onerror = null, iT.terminate());
        const zT = !IT && "installing" === TT.Lc;
        TT.worker = null, TT.starting = !1, TT.Lc = "none", zT && this.noInstall(TT, oT), void 0 !== TT.startedAt && performance.now() - TT.startedAt >= 6e4 && (TT.losses = 0), TT.startedAt = void 0;
        const kT = TT.job;
        if (TT.job = null, null !== kT || zT || TT.losses++, this.opts.onWorkerLost(oT), null !== kT && zT) kT.attempts--, this.queue.unshift(kT);
        else if (null !== kT && (kT.attempts < 2 ? this.queue.unshift(kT) : kT.resolve((0, xT.t)(kT.word, oT)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(TT) {
        if (null !== this.stopped) return;
        this.stopped = null === TT ? "the model workers stopped" : `the model workers could not start: ${(0,XT.h)(TT)}`;
        const oT = this.stopped,
          IT = TT => {
            TT.resolve((0, xT.w)(TT.word, oT))
          };
        for (const zT of this.slots) {
          var iT;
          this.clearTimer(zT), null === (iT = zT.worker) || void 0 === iT || iT.terminate(), zT.worker = null, null !== zT.job && IT(zT.job), zT.job = null
        }
        this.queue.splice(0).forEach(IT), null !== TT && this.opts.onUnavailable(TT)
      }
    }
    const rT = [...iT.u, 5e3, 15e3, 3e4];
    let AT = null;
    const gT = new Set;

    function hT(TT) {
      return gT.add(TT), AT ??= function() {
        let TT = (oT = navigator.hardwareConcurrency, XT = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, oT > 2 && !(0, LT.m)(XT) ? 2 : 1);
        var oT, XT;
        const FT = new MT({
          module: (0, zT.e)(kT.b, {
            delays: rT,
            onRetry: (TT, oT) => {
              AT === FT && wT((IT => {
                IT.onModuleRetry(TT, oT)
              }))
            }
          }),
          downloadFiles: ST(WT.e.scriptUrl, WT.e.wasmBinaryUrl),
          loadWorker: async () => (await IT.e(43).then((() => IT(60364)))).createModelWorker,
          count: TT,
          onUnavailable: TT => {
            if (AT === FT) {
              AT = null;
              const oT = function(TT) {
                return TT instanceof iT.e ? [kT.b.url().href] : void 0
              }(TT);
              wT((IT => {
                IT.onUnavailable(TT, oT)
              }))
            }
          },
          onDecoderFailed: TT => {
            if (AT === FT) {
              const oT = TT instanceof BT ? TT.goneUrl : null,
                IT = null === oT ? void 0 : [oT];
              wT((oT => {
                oT.onDecoderFailed(TT, IT)
              }))
            }
          },
          onWorkerLost: TT => {
            AT === FT && wT((oT => {
              oT.onWorkerLost(TT)
            }))
          }
        });
        return FT
      }(), {
        pool: AT,
        unlisten: () => {
          gT.delete(TT)
        }
      }
    }

    function wT(TT) {
      for (const IT of [...gT]) try {
        TT(IT)
      } catch (oT) {
        console.error("[pageModelPool] a listener threw", oT)
      }
    }
  },
  40324: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40327: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);