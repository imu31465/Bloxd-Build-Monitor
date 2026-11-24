export const id = 43;
export const ids = [43];
export const modules = {
  41635: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    var WT = mT(133),
      zT = mT(1160);

    function MT(TT) {
      return (0, WT.isDiscordClient)() ? `https://${zT.b.discordDomain}/${TT.href}` : TT.href
    }
    const gT = {
      scriptUrl: MT(new mT.U(mT(41640))),
      wasmBinaryUrl: MT(new mT.U(mT(41643)))
    }
  },
  34363: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT,
      g: () => MT,
      i: () => gT
    });
    const WT = 1179937895,
      zT = 1313821514;

    function MT(TT) {
      const UT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      if (TT.byteLength < 20 || UT.getUint32(0, !0) !== WT || 2 !== UT.getUint32(4, !0)) return null;
      const mT = Math.min(UT.getUint32(8, !0), TT.byteLength),
        MT = UT.getUint32(12, !0);
      if (UT.getUint32(16, !0) !== zT || 20 + MT > mT) return null;
      let gT;
      try {
        gT = JSON.parse((new TextDecoder).decode(TT.subarray(20, 20 + MT)))
      } catch {
        return null
      }
      return "object" === typeof gT && null !== gT ? {
        json: gT,
        jsonEnd: 20 + MT,
        length: mT
      } : null
    }

    function gT(TT) {
      var UT;
      const mT = null === (UT = MT(TT)) || void 0 === UT ? void 0 : UT.json;
      if (void 0 === mT || !Array.isArray(mT.extensionsUsed) || !mT.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const WT = mT.meshes;
      return Array.isArray(WT) && WT.some((TT => {
        const UT = null === TT || void 0 === TT ? void 0 : TT.primitives;
        return Array.isArray(UT) && UT.some((TT => {
          const UT = null === TT || void 0 === TT ? void 0 : TT.extensions;
          return null != (null === UT || void 0 === UT ? void 0 : UT.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  51172: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => vT,
      pageModelPool: () => iT
    });
    var WT = mT(3001),
      zT = mT(36394),
      MT = mT(41009),
      gT = mT(41635),
      nT = mT(36358);
    Error;
    class HT extends Error {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${TT}: ${UT}`), this.stage = TT, this.url = mT, this.status = WT, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function kT(TT, UT) {
      let mT = null,
        zT = !1;
      return {
        get: () => {
          if (null === mT) {
            const MT = async function(TT, UT) {
              try {
                return (await (0, WT.M)(TT)).buffer
              } catch (mT) {
                throw new HT(UT, (0, nT.k)(mT), TT, mT instanceof WT.f ? mT.status : null)
              }
            }(TT, UT);
            mT = MT, MT.then((() => {
              zT = mT === MT
            }), (() => {
              mT = null
            }))
          }
          return mT
        },
        forget: () => {
          zT && (mT = null, zT = !1)
        }
      }
    }

    function jT(TT, UT) {
      const mT = kT(UT, "wasm"),
        WT = kT(TT, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (mT.forget(), WT.forget());
        const [TT, UT] = await Promise.all([mT.get(), WT.get()]);
        return {
          script: UT,
          wasmBinary: TT
        }
      }
    }
    var lT = mT(34363),
      LT = mT(3247),
      pT = mT(40935),
      BT = mT(41063);
    class ZT extends Error {
      constructor(TT) {
        super(`no model worker could install it: ${TT}`), this.name = "DracoInstallError"
      }
    }
    class cT {
      constructor(TT) {
        this.opts = TT, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.Dp = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let UT = 0; UT < Math.max(1, TT.count); UT++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          Dp: "none",
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
      build(TT, UT) {
        if (null !== this.stopped) return Promise.resolve((0, pT.q)(TT, this.stopped));
        const mT = (0, lT.i)(UT);
        return mT && this.downloadDecoder(), new Promise((WT => {
          this.queue.push({
            word: TT,
            glb: UT,
            draco: mT,
            attempts: 0,
            resolve: WT
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
        return "object" === typeof this.Dp ? this.Dp : null
      }
      pump() {
        const TT = this.resting && 0 === this.queue.length,
          UT = this.files();
        for (const mT of this.slots) {
          if (null !== this.stopped) return;
          if (mT.gaveUp || mT.starting) continue;
          if (null === mT.worker) {
            TT || this.start(mT);
            continue
          }
          if (TT) {
            null === mT.job && "installing" !== mT.Dp && this.end(mT);
            continue
          }
          if (null !== UT && "none" === mT.Dp && mT.failedDownload !== this.downloads && this.install(mT, mT.worker, UT), null !== mT.job) continue;
          const WT = this.queue.findIndex((TT => "installed" === mT.Dp || !TT.draco));
          WT >= 0 && this.run(mT, mT.worker, this.queue.splice(WT, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((TT => !TT.gaveUp && ("none" !== TT.Dp || TT.failedDownload !== this.downloads))) || (this.Dp = "uninstallable", this.decoderFailed(new ZT(this.installFailure)))
      }
      start(TT) {
        if (TT.losses >= 6) return TT.gaveUp = !0, void(this.slots.every((TT => TT.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        TT.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((UT => {
          let [mT, WT] = UT;
          null === this.stopped && this.launch(TT, mT, WT)
        }), (TT => {
          this.fail(TT)
        }))
      }
      launch(TT, UT, mT) {
        let WT;
        try {
          WT = UT()
        } catch (zT) {
          return void this.lose(TT, `a model worker could not be created (${String(zT)})`)
        }
        TT.worker = WT, this.startTimer(TT, 3e4, (UT => {
          this.lose(TT, `a model worker did not start: ${(0,BT.l)(UT)}`)
        })), WT.onmessage = UT => {
          let {
            data: mT
          } = UT;
          this.answered(TT, WT, mT)
        }, WT.onerror = UT => {
          this.lose(TT, TT.starting ? `a model worker failed to start: ${UT.message}` : `a model worker failed: ${UT.message}`)
        }, WT.postMessage({
          type: "start",
          module: mT
        })
      }
      end(TT) {
        const UT = TT.worker;
        null !== UT && (UT.onmessage = null, UT.onerror = null, UT.terminate()), TT.worker = null, TT.Dp = "none", TT.startedAt = void 0
      }
      startTimer(TT, UT, mT) {
        TT.timer = new BT.j(UT, (UT => {
          TT.timer = null, mT(UT)
        }), void 0, this.opts.visibility)
      }
      clearTimer(TT) {
        var UT;
        null === (UT = TT.timer) || void 0 === UT || UT.cancel(), TT.timer = null
      }
      answered(TT, UT, mT) {
        if ("lost" === mT.type) return void this.lose(TT, mT.reason);
        if (TT.starting) return "started" !== mT.type ? void this.lose(TT, `a model worker answered ${mT.type} before it started`) : (this.clearTimer(TT), TT.starting = !1, TT.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === mT.type || "dracoFailed" === mT.type) {
          if (mT.seq !== TT.installSeq) return;
          return void("installing" === TT.Dp ? (this.clearTimer(TT), "dracoInstalled" === mT.type ? (TT.Dp = "installed", this.pump()) : this.installFailed(TT, mT.reason)) : "dracoInstalled" === mT.type && "none" === TT.Dp && TT.failedDownload === this.downloads && (TT.Dp = "installed", TT.failedDownload = 0, this.pump()))
        }
        const WT = TT.job;
        null !== WT && "started" !== mT.type && mT.seq === TT.seq && ("trapped" !== mT.type ? (TT.job = null, TT.losses = 0, this.jobLosses = 0, WT.resolve(new Uint8Array(mT.record)), this.pump()) : this.lose(TT, mT.trap, !0))
      }
      install(TT, UT, mT) {
        const WT = this.nextSeq++;
        TT.Dp = "installing", TT.installSeq = WT, this.startTimer(TT, 3e4, (UT => {
          this.installFailed(TT, `no install within ${Math.round(UT)} ms`)
        }));
        const zT = mT.script.slice(0),
          MT = mT.wasmBinary.slice(0);
        UT.postMessage({
          type: "installDraco",
          seq: WT,
          script: zT,
          wasmBinary: MT
        }, [zT, MT])
      }
      installFailed(TT, UT) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${UT}`), this.noInstall(TT, UT), this.pump()
      }
      noInstall(TT, UT) {
        TT.Dp = "none", TT.failedDownload = this.downloads, this.installFailure = UT
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.Dp || null !== this.files()) return;
        const TT = "uninstallable" === this.Dp;
        this.Dp = "downloading", this.opts.downloadFiles(TT).then((TT => {
          null === this.stopped && (this.Dp = TT, this.downloads++, this.pump())
        }), (TT => {
          this.Dp = null, this.decoderFailed(TT)
        }))
      }
      decoderFailed(TT) {
        if (null !== this.stopped) return;
        const UT = (0, nT.k)(TT);
        let mT = 0;
        for (const WT of this.queue.splice(0)) WT.draco ? (WT.resolve((0, pT.g)(WT.word, UT)), mT++) : this.queue.push(WT);
        mT > 0 && this.opts.onDecoderFailed(TT), this.pump()
      }
      run(TT, UT, mT) {
        const WT = this.nextSeq++;
        TT.seq = WT, TT.job = mT, mT.attempts++;
        const zT = mT.glb.slice();
        UT.postMessage({
          type: "job",
          seq: WT,
          word: mT.word,
          glb: zT.buffer
        }, [zT.buffer])
      }
      lose(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(TT);
        const WT = !mT && "installing" === TT.Dp;
        void 0 !== TT.startedAt && performance.now() - TT.startedAt >= 6e4 && (TT.losses = 0), this.end(TT), TT.starting = !1, WT && this.noInstall(TT, UT);
        const zT = TT.job;
        if (TT.job = null, null !== zT || WT || TT.losses++, this.opts.onWorkerLost(UT), null !== zT && WT) zT.attempts--, this.queue.unshift(zT);
        else if (null !== zT && (zT.attempts < 2 ? this.queue.unshift(zT) : zT.resolve((0, pT.n)(zT.word, UT)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(TT) {
        if (null !== this.stopped) return;
        this.stopped = null === TT ? "the model workers stopped" : `the model workers could not start: ${(0,nT.k)(TT)}`;
        const UT = this.stopped,
          mT = TT => {
            TT.resolve((0, pT.q)(TT.word, UT))
          };
        for (const zT of this.slots) {
          var WT;
          this.clearTimer(zT), null === (WT = zT.worker) || void 0 === WT || WT.terminate(), zT.worker = null, null !== zT.job && mT(zT.job), zT.job = null
        }
        this.queue.splice(0).forEach(mT), null !== TT && this.opts.onUnavailable(TT)
      }
    }
    const vT = [...WT.s, 5e3, 15e3, 3e4];
    let fT = null;
    const qT = new Set;

    function iT(TT) {
      return qT.add(TT), fT ??= function() {
        let TT = (UT = navigator.hardwareConcurrency, nT = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, UT > 2 && !(0, LT.n)(nT) ? 2 : 1);
        var UT, nT;
        const kT = new cT({
          module: (0, zT.f)(MT.c, {
            delays: vT,
            onRetry: (TT, UT) => {
              fT === kT && bT((mT => {
                mT.onModuleRetry(TT, UT)
              }))
            }
          }),
          downloadFiles: jT(gT.d.scriptUrl, gT.d.wasmBinaryUrl),
          loadWorker: async () => (await mT.e(44).then((() => mT(61359)))).createModelWorker,
          count: TT,
          onUnavailable: TT => {
            if (fT === kT) {
              fT = null;
              const UT = function(TT) {
                return TT instanceof WT.e ? [MT.c.url().href] : void 0
              }(TT);
              bT((mT => {
                mT.onUnavailable(TT, UT)
              }))
            }
          },
          onDecoderFailed: TT => {
            if (fT === kT) {
              const UT = TT instanceof HT ? TT.goneUrl : null,
                mT = null === UT ? void 0 : [UT];
              bT((UT => {
                UT.onDecoderFailed(TT, mT)
              }))
            }
          },
          onWorkerLost: TT => {
            fT === kT && bT((UT => {
              UT.onWorkerLost(TT)
            }))
          }
        });
        return kT
      }(), {
        pool: fT,
        unlisten: () => {
          qT.delete(TT)
        }
      }
    }

    function bT(TT) {
      for (const mT of [...qT]) try {
        TT(mT)
      } catch (UT) {
        console.error("[pageModelPool] a listener threw", UT)
      }
    }
  },
  41640: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41643: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);