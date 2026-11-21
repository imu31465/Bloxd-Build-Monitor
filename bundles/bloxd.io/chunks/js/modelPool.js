export const id = 42;
export const ids = [42];
export const modules = {
  40897: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ
    });
    var LQ = wQ(134),
      qQ = wQ(1221);

    function oQ(QQ) {
      return (0, LQ.d)() ? `https://${qQ.d.discordDomain}/${QQ.href}` : QQ.href
    }
    const DQ = {
      scriptUrl: oQ(new wQ.U(wQ(40901))),
      wasmBinaryUrl: oQ(new wQ.U(wQ(40910)))
    }
  },
  9189: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      g: () => oQ,
      k: () => DQ
    });
    const LQ = 1179937895,
      qQ = 1313821514;

    function oQ(QQ) {
      const FQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
      if (QQ.byteLength < 20 || FQ.getUint32(0, !0) !== LQ || 2 !== FQ.getUint32(4, !0)) return null;
      const wQ = Math.min(FQ.getUint32(8, !0), QQ.byteLength),
        oQ = FQ.getUint32(12, !0);
      if (FQ.getUint32(16, !0) !== qQ || 20 + oQ > wQ) return null;
      let DQ;
      try {
        DQ = JSON.parse((new TextDecoder).decode(QQ.subarray(20, 20 + oQ)))
      } catch {
        return null
      }
      return "object" === typeof DQ && null !== DQ ? {
        json: DQ,
        jsonEnd: 20 + oQ,
        length: wQ
      } : null
    }

    function DQ(QQ) {
      var FQ;
      const wQ = null === (FQ = oQ(QQ)) || void 0 === FQ ? void 0 : FQ.json;
      if (void 0 === wQ || !Array.isArray(wQ.extensionsUsed) || !wQ.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const LQ = wQ.meshes;
      return Array.isArray(LQ) && LQ.some((QQ => {
        const FQ = null === QQ || void 0 === QQ ? void 0 : QQ.primitives;
        return Array.isArray(FQ) && FQ.some((QQ => {
          const FQ = null === QQ || void 0 === QQ ? void 0 : QQ.extensions;
          return null != (null === FQ || void 0 === FQ ? void 0 : FQ.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42779: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => eQ,
      pageModelPool: () => pQ
    });
    var LQ = wQ(2811),
      qQ = wQ(35962),
      oQ = wQ(40201),
      DQ = wQ(40897),
      kQ = wQ(35943);
    Error;
    class vQ extends Error {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${QQ}: ${FQ}`), this.stage = QQ, this.url = wQ, this.status = LQ, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function mQ(QQ, FQ) {
      let wQ = null,
        qQ = !1;
      return {
        get: () => {
          if (null === wQ) {
            const oQ = async function(QQ, FQ) {
              try {
                return (await (0, LQ.T)(QQ)).buffer
              } catch (wQ) {
                throw new vQ(FQ, (0, kQ.k)(wQ), QQ, wQ instanceof LQ.i ? wQ.status : null)
              }
            }(QQ, FQ);
            wQ = oQ, oQ.then((() => {
              qQ = wQ === oQ
            }), (() => {
              wQ = null
            }))
          }
          return wQ
        },
        forget: () => {
          qQ && (wQ = null, qQ = !1)
        }
      }
    }

    function uQ(QQ, FQ) {
      const wQ = mQ(FQ, "wasm"),
        LQ = mQ(QQ, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (wQ.forget(), LQ.forget());
        const [QQ, FQ] = await Promise.all([wQ.get(), LQ.get()]);
        return {
          script: FQ,
          wasmBinary: QQ
        }
      }
    }
    var HQ = wQ(9189),
      bQ = wQ(3009),
      YQ = wQ(40388),
      xQ = wQ(40424);
    class AQ extends Error {
      constructor(QQ) {
        super(`no model worker could install it: ${QQ}`), this.name = "DracoInstallError"
      }
    }
    class tQ {
      constructor(QQ) {
        this.opts = QQ, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.PY = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let FQ = 0; FQ < Math.max(1, QQ.count); FQ++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          PY: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((QQ => null !== QQ.job)).length
      }
      build(QQ, FQ) {
        if (null !== this.stopped) return Promise.resolve((0, YQ.v)(QQ, this.stopped));
        const wQ = (0, HQ.k)(FQ);
        return wQ && this.downloadDecoder(), new Promise((LQ => {
          this.queue.push({
            word: QQ,
            glb: FQ,
            draco: wQ,
            attempts: 0,
            resolve: LQ
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.PY ? this.PY : null
      }
      pump() {
        const QQ = this.files();
        for (const FQ of this.slots) {
          if (null !== this.stopped) return;
          if (FQ.gaveUp || FQ.starting) continue;
          if (null === FQ.worker) {
            this.start(FQ);
            continue
          }
          if (null !== QQ && "none" === FQ.PY && FQ.failedDownload !== this.downloads && this.install(FQ, FQ.worker, QQ), null !== FQ.job) continue;
          const wQ = this.queue.findIndex((QQ => "installed" === FQ.PY || !QQ.draco));
          wQ >= 0 && this.run(FQ, FQ.worker, this.queue.splice(wQ, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((QQ => !QQ.gaveUp && ("none" !== QQ.PY || QQ.failedDownload !== this.downloads))) || (this.PY = "uninstallable", this.decoderFailed(new AQ(this.installFailure)))
      }
      start(QQ) {
        if (QQ.losses >= 6) return QQ.gaveUp = !0, void(this.slots.every((QQ => QQ.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        QQ.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((FQ => {
          let [wQ, LQ] = FQ;
          null === this.stopped && this.launch(QQ, wQ, LQ)
        }), (QQ => {
          this.fail(QQ)
        }))
      }
      launch(QQ, FQ, wQ) {
        let LQ;
        try {
          LQ = FQ()
        } catch (qQ) {
          return void this.lose(QQ, `a model worker could not be created (${String(qQ)})`)
        }
        QQ.worker = LQ, this.startTimer(QQ, 3e4, (FQ => {
          this.lose(QQ, `a model worker did not start: ${(0,xQ.h)(FQ)}`)
        })), LQ.onmessage = FQ => {
          let {
            data: wQ
          } = FQ;
          this.answered(QQ, LQ, wQ)
        }, LQ.onerror = FQ => {
          this.lose(QQ, QQ.starting ? `a model worker failed to start: ${FQ.message}` : `a model worker failed: ${FQ.message}`)
        }, LQ.postMessage({
          type: "start",
          module: wQ
        })
      }
      startTimer(QQ, FQ, wQ) {
        QQ.timer = new xQ.f(FQ, (FQ => {
          QQ.timer = null, wQ(FQ)
        }), void 0, this.opts.visibility)
      }
      clearTimer(QQ) {
        var FQ;
        null === (FQ = QQ.timer) || void 0 === FQ || FQ.cancel(), QQ.timer = null
      }
      answered(QQ, FQ, wQ) {
        if ("lost" === wQ.type) return void this.lose(QQ, wQ.reason);
        if (QQ.starting) return "started" !== wQ.type ? void this.lose(QQ, `a model worker answered ${wQ.type} before it started`) : (this.clearTimer(QQ), QQ.starting = !1, QQ.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === wQ.type || "dracoFailed" === wQ.type) {
          if (wQ.seq !== QQ.installSeq) return;
          return void("installing" === QQ.PY ? (this.clearTimer(QQ), "dracoInstalled" === wQ.type ? (QQ.PY = "installed", this.pump()) : this.installFailed(QQ, wQ.reason)) : "dracoInstalled" === wQ.type && "none" === QQ.PY && QQ.failedDownload === this.downloads && (QQ.PY = "installed", this.pump()))
        }
        const LQ = QQ.job;
        null !== LQ && "started" !== wQ.type && wQ.seq === QQ.seq && ("trapped" !== wQ.type ? (QQ.job = null, QQ.losses = 0, this.jobLosses = 0, LQ.resolve(new Uint8Array(wQ.record)), this.pump()) : this.lose(QQ, wQ.trap, !0))
      }
      install(QQ, FQ, wQ) {
        const LQ = this.nextSeq++;
        QQ.PY = "installing", QQ.installSeq = LQ, this.startTimer(QQ, 3e4, (FQ => {
          this.installFailed(QQ, `no install within ${Math.round(FQ)} ms`)
        }));
        const qQ = wQ.script.slice(0),
          oQ = wQ.wasmBinary.slice(0);
        FQ.postMessage({
          type: "installDraco",
          seq: LQ,
          script: qQ,
          wasmBinary: oQ
        }, [qQ, oQ])
      }
      installFailed(QQ, FQ) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${FQ}`), this.noInstall(QQ, FQ), this.pump()
      }
      noInstall(QQ, FQ) {
        QQ.PY = "none", QQ.failedDownload = this.downloads, this.installFailure = FQ
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.PY || null !== this.files()) return;
        const QQ = "uninstallable" === this.PY;
        this.PY = "downloading", this.opts.downloadFiles(QQ).then((QQ => {
          null === this.stopped && (this.PY = QQ, this.downloads++, this.pump())
        }), (QQ => {
          this.PY = null, this.decoderFailed(QQ)
        }))
      }
      decoderFailed(QQ) {
        if (null !== this.stopped) return;
        const FQ = (0, kQ.k)(QQ);
        let wQ = 0;
        for (const LQ of this.queue.splice(0)) LQ.draco ? (LQ.resolve((0, YQ.j)(LQ.word, FQ)), wQ++) : this.queue.push(LQ);
        wQ > 0 && this.opts.onDecoderFailed(QQ)
      }
      run(QQ, FQ, wQ) {
        const LQ = this.nextSeq++;
        QQ.seq = LQ, QQ.job = wQ, wQ.attempts++;
        const qQ = wQ.glb.slice();
        FQ.postMessage({
          type: "job",
          seq: LQ,
          word: wQ.word,
          glb: qQ.buffer
        }, [qQ.buffer])
      }
      lose(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(QQ);
        const LQ = QQ.worker;
        null !== LQ && (LQ.onmessage = null, LQ.onerror = null, LQ.terminate());
        const qQ = !wQ && "installing" === QQ.PY;
        QQ.worker = null, QQ.starting = !1, QQ.PY = "none", qQ && this.noInstall(QQ, FQ), void 0 !== QQ.startedAt && performance.now() - QQ.startedAt >= 6e4 && (QQ.losses = 0), QQ.startedAt = void 0;
        const oQ = QQ.job;
        if (QQ.job = null, null !== oQ || qQ || QQ.losses++, this.opts.onWorkerLost(FQ), null !== oQ && qQ) oQ.attempts--, this.queue.unshift(oQ);
        else if (null !== oQ && (oQ.attempts < 2 ? this.queue.unshift(oQ) : oQ.resolve((0, YQ.s)(oQ.word, FQ)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(QQ) {
        if (null !== this.stopped) return;
        this.stopped = null === QQ ? "the model workers stopped" : `the model workers could not start: ${(0,kQ.k)(QQ)}`;
        const FQ = this.stopped,
          wQ = QQ => {
            QQ.resolve((0, YQ.v)(QQ.word, FQ))
          };
        for (const qQ of this.slots) {
          var LQ;
          this.clearTimer(qQ), null === (LQ = qQ.worker) || void 0 === LQ || LQ.terminate(), qQ.worker = null, null !== qQ.job && wQ(qQ.job), qQ.job = null
        }
        this.queue.splice(0).forEach(wQ), null !== QQ && this.opts.onUnavailable(QQ)
      }
    }
    const eQ = [...LQ.v, 5e3, 15e3, 3e4];
    let MQ = null;
    const GQ = new Set;

    function pQ(QQ) {
      return GQ.add(QQ), MQ ??= function() {
        let QQ = (FQ = navigator.hardwareConcurrency, kQ = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, FQ > 2 && !(0, bQ.r)(kQ) ? 2 : 1);
        var FQ, kQ;
        const mQ = new tQ({
          module: (0, qQ.d)(oQ.b, {
            delays: eQ,
            onRetry: (QQ, FQ) => {
              MQ === mQ && cQ((wQ => {
                wQ.onModuleRetry(QQ, FQ)
              }))
            }
          }),
          downloadFiles: uQ(DQ.d.scriptUrl, DQ.d.wasmBinaryUrl),
          loadWorker: async () => (await wQ.e(43).then((() => wQ(61e3)))).createModelWorker,
          count: QQ,
          onUnavailable: QQ => {
            if (MQ === mQ) {
              MQ = null;
              const FQ = function(QQ) {
                return QQ instanceof LQ.e ? [oQ.b.url().href] : void 0
              }(QQ);
              cQ((wQ => {
                wQ.onUnavailable(QQ, FQ)
              }))
            }
          },
          onDecoderFailed: QQ => {
            if (MQ === mQ) {
              const FQ = QQ instanceof vQ ? QQ.goneUrl : null,
                wQ = null === FQ ? void 0 : [FQ];
              cQ((FQ => {
                FQ.onDecoderFailed(QQ, wQ)
              }))
            }
          },
          onWorkerLost: QQ => {
            MQ === mQ && cQ((FQ => {
              FQ.onWorkerLost(QQ)
            }))
          }
        });
        return mQ
      }(), {
        pool: MQ,
        unlisten: () => {
          GQ.delete(QQ)
        }
      }
    }

    function cQ(QQ) {
      for (const wQ of [...GQ]) try {
        QQ(wQ)
      } catch (FQ) {
        console.error("[pageModelPool] a listener threw", FQ)
      }
    }
  },
  40901: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40910: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);