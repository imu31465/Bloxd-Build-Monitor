export const id = 45;
export const ids = [45];
export const modules = {
  41740: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    var wQ = XQ(158),
      qQ = XQ(1118);

    function TQ(QQ) {
      return (0, wQ.isDiscordClient)() ? `https://${qQ.d.discordDomain}/${QQ.href}` : QQ.href
    }
    const zQ = {
      scriptUrl: TQ(new XQ.U(XQ(41742))),
      wasmBinaryUrl: TQ(new XQ.U(XQ(41750)))
    }
  },
  34604: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      f: () => TQ,
      g: () => zQ
    });
    const wQ = 1179937895,
      qQ = 1313821514;

    function TQ(QQ) {
      const WQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
      if (QQ.byteLength < 20 || WQ.getUint32(0, !0) !== wQ || 2 !== WQ.getUint32(4, !0)) return null;
      const XQ = Math.min(WQ.getUint32(8, !0), QQ.byteLength),
        TQ = WQ.getUint32(12, !0);
      if (WQ.getUint32(16, !0) !== qQ || 20 + TQ > XQ) return null;
      let zQ;
      try {
        zQ = JSON.parse((new TextDecoder).decode(QQ.subarray(20, 20 + TQ)))
      } catch {
        return null
      }
      return "object" === typeof zQ && null !== zQ ? {
        json: zQ,
        jsonEnd: 20 + TQ,
        length: XQ
      } : null
    }

    function zQ(QQ) {
      var WQ;
      const XQ = null === (WQ = TQ(QQ)) || void 0 === WQ ? void 0 : WQ.json;
      if (void 0 === XQ || !Array.isArray(XQ.extensionsUsed) || !XQ.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const wQ = XQ.meshes;
      return Array.isArray(wQ) && wQ.some((QQ => {
        const WQ = null === QQ || void 0 === QQ ? void 0 : QQ.primitives;
        return Array.isArray(WQ) && WQ.some((QQ => {
          const WQ = null === QQ || void 0 === QQ ? void 0 : QQ.extensions;
          return null != (null === WQ || void 0 === WQ ? void 0 : WQ.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  51279: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => DQ,
      pageModelPool: () => UQ
    });
    var wQ = XQ(3110),
      qQ = XQ(36608),
      TQ = XQ(41076),
      zQ = XQ(41740),
      sQ = XQ(4710),
      FQ = XQ(36568);
    Error;
    class PQ extends Error {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${QQ}: ${WQ}`), this.stage = QQ, this.url = XQ, this.status = wQ, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function gQ(QQ, WQ) {
      let XQ = null,
        qQ = !1;
      return {
        get: () => {
          if (null === XQ) {
            const TQ = async function(QQ, WQ) {
              try {
                return (await (0, wQ.K)(QQ)).buffer
              } catch (XQ) {
                throw new PQ(WQ, (0, FQ.j)(XQ), QQ, XQ instanceof wQ.f ? XQ.status : null)
              }
            }(QQ, WQ);
            XQ = TQ, TQ.then((() => {
              qQ = XQ === TQ
            }), (() => {
              XQ = null
            }))
          }
          return XQ
        },
        forget: () => {
          qQ && (XQ = null, qQ = !1)
        }
      }
    }

    function JQ(QQ, WQ) {
      const XQ = gQ(WQ, "wasm"),
        wQ = gQ(QQ, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (XQ.forget(), wQ.forget());
        const [QQ, WQ] = await Promise.all([XQ.get(), wQ.get()]);
        return {
          script: WQ,
          wasmBinary: QQ
        }
      }
    }
    var rQ = XQ(34604),
      IQ = XQ(3381),
      jQ = XQ(41012),
      BQ = XQ(41143);
    class yQ extends Error {
      constructor(QQ) {
        super(`no model worker could install it: ${QQ}`), this.name = "DracoInstallError"
      }
    }
    class VQ {
      constructor(QQ) {
        this.opts = QQ, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.ZI = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let WQ = 0; WQ < Math.max(1, QQ.count); WQ++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          ZI: "none",
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
      build(QQ, WQ) {
        if (null !== this.stopped) return Promise.resolve((0, jQ.r)(QQ, this.stopped));
        const XQ = (0, rQ.g)(WQ);
        return XQ && this.downloadDecoder(), new Promise((wQ => {
          this.queue.push({
            word: QQ,
            glb: WQ,
            draco: XQ,
            attempts: 0,
            resolve: wQ
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
        return "object" === typeof this.ZI ? this.ZI : null
      }
      pump() {
        const QQ = this.resting && 0 === this.queue.length,
          WQ = this.files();
        for (const XQ of this.slots) {
          if (null !== this.stopped) return;
          if (XQ.gaveUp || XQ.starting) continue;
          if (null === XQ.worker) {
            QQ || this.start(XQ);
            continue
          }
          if (QQ) {
            null === XQ.job && "installing" !== XQ.ZI && this.end(XQ);
            continue
          }
          if (null !== WQ && "none" === XQ.ZI && XQ.failedDownload !== this.downloads && this.install(XQ, XQ.worker, WQ), null !== XQ.job) continue;
          const wQ = this.queue.findIndex((QQ => "installed" === XQ.ZI || !QQ.draco));
          wQ >= 0 && this.run(XQ, XQ.worker, this.queue.splice(wQ, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((QQ => !QQ.gaveUp && ("none" !== QQ.ZI || QQ.failedDownload !== this.downloads))) || (this.ZI = "uninstallable", this.decoderFailed(new yQ(this.installFailure)))
      }
      start(QQ) {
        if (QQ.losses >= 6) return QQ.gaveUp = !0, void(this.slots.every((QQ => QQ.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        QQ.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((WQ => {
          let [XQ, wQ] = WQ;
          null === this.stopped && this.launch(QQ, XQ, wQ)
        }), (QQ => {
          this.fail(QQ)
        }))
      }
      launch(QQ, WQ, XQ) {
        let wQ;
        try {
          wQ = WQ()
        } catch (qQ) {
          return void this.lose(QQ, `a model worker could not be created (${String(qQ)})`)
        }
        QQ.worker = wQ, this.startTimer(QQ, 3e4, (WQ => {
          this.lose(QQ, `a model worker did not start: ${(0,BQ.o)(WQ)}`)
        })), wQ.onmessage = WQ => {
          let {
            data: XQ
          } = WQ;
          this.answered(QQ, wQ, XQ)
        }, wQ.onerror = WQ => {
          this.lose(QQ, QQ.starting ? `a model worker failed to start: ${WQ.message}` : `a model worker failed: ${WQ.message}`)
        }, wQ.postMessage({
          type: "start",
          module: XQ
        })
      }
      end(QQ) {
        const WQ = QQ.worker;
        null !== WQ && (WQ.onmessage = null, WQ.onerror = null, WQ.terminate()), QQ.worker = null, QQ.ZI = "none", QQ.startedAt = void 0
      }
      startTimer(QQ, WQ, XQ) {
        QQ.timer = new BQ.l(WQ, (WQ => {
          QQ.timer = null, XQ(WQ)
        }), void 0, this.opts.visibility)
      }
      clearTimer(QQ) {
        var WQ;
        null === (WQ = QQ.timer) || void 0 === WQ || WQ.cancel(), QQ.timer = null
      }
      answered(QQ, WQ, XQ) {
        if ("lost" === XQ.type) return void this.lose(QQ, XQ.reason);
        if (QQ.starting) return "started" !== XQ.type ? void this.lose(QQ, `a model worker answered ${XQ.type} before it started`) : (this.clearTimer(QQ), QQ.starting = !1, QQ.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === XQ.type || "dracoFailed" === XQ.type) {
          if (XQ.seq !== QQ.installSeq) return;
          return void("installing" === QQ.ZI ? (this.clearTimer(QQ), "dracoInstalled" === XQ.type ? (QQ.ZI = "installed", this.pump()) : this.installFailed(QQ, XQ.reason)) : "dracoInstalled" === XQ.type && "none" === QQ.ZI && QQ.failedDownload === this.downloads && (QQ.ZI = "installed", QQ.failedDownload = 0, this.pump()))
        }
        const wQ = QQ.job;
        null !== wQ && "started" !== XQ.type && XQ.seq === QQ.seq && ("trapped" !== XQ.type ? (QQ.job = null, QQ.losses = 0, this.jobLosses = 0, wQ.resolve(new Uint8Array(XQ.record)), this.pump()) : this.lose(QQ, XQ.trap, !0))
      }
      install(QQ, WQ, XQ) {
        const wQ = this.nextSeq++;
        QQ.ZI = "installing", QQ.installSeq = wQ, this.startTimer(QQ, 3e4, (WQ => {
          this.installFailed(QQ, `no install within ${Math.round(WQ)} ms`)
        }));
        const qQ = XQ.script.slice(0),
          TQ = XQ.wasmBinary.slice(0);
        WQ.postMessage({
          type: "installDraco",
          seq: wQ,
          script: qQ,
          wasmBinary: TQ
        }, [qQ, TQ])
      }
      installFailed(QQ, WQ) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${WQ}`), this.noInstall(QQ, WQ), this.pump()
      }
      noInstall(QQ, WQ) {
        QQ.ZI = "none", QQ.failedDownload = this.downloads, this.installFailure = WQ
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.ZI || null !== this.files()) return;
        const QQ = "uninstallable" === this.ZI;
        this.ZI = "downloading", this.opts.downloadFiles(QQ).then((QQ => {
          null === this.stopped && (this.ZI = QQ, this.downloads++, this.pump())
        }), (QQ => {
          this.ZI = null, this.decoderFailed(QQ)
        }))
      }
      decoderFailed(QQ) {
        if (null !== this.stopped) return;
        const WQ = (0, FQ.j)(QQ);
        let XQ = 0;
        for (const wQ of this.queue.splice(0)) wQ.draco ? (wQ.resolve((0, jQ.i)(wQ.word, WQ)), XQ++) : this.queue.push(wQ);
        XQ > 0 && this.opts.onDecoderFailed(QQ), this.pump()
      }
      run(QQ, WQ, XQ) {
        const wQ = this.nextSeq++;
        QQ.seq = wQ, QQ.job = XQ, XQ.attempts++;
        const qQ = XQ.glb.slice();
        WQ.postMessage({
          type: "job",
          seq: wQ,
          word: XQ.word,
          glb: qQ.buffer
        }, [qQ.buffer])
      }
      lose(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(QQ);
        const wQ = !XQ && "installing" === QQ.ZI;
        void 0 !== QQ.startedAt && performance.now() - QQ.startedAt >= 6e4 && (QQ.losses = 0), this.end(QQ), QQ.starting = !1, wQ && this.noInstall(QQ, WQ);
        const qQ = QQ.job;
        if (QQ.job = null, null !== qQ || wQ || QQ.losses++, this.opts.onWorkerLost(WQ), null !== qQ && wQ) qQ.attempts--, this.queue.unshift(qQ);
        else if (null !== qQ && (qQ.attempts < 2 ? this.queue.unshift(qQ) : qQ.resolve((0, jQ.o)(qQ.word, WQ)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(QQ) {
        if (null !== this.stopped) return;
        this.stopped = null === QQ ? "the model workers stopped" : `the model workers could not start: ${(0,FQ.j)(QQ)}`;
        const WQ = this.stopped,
          XQ = QQ => {
            QQ.resolve((0, jQ.r)(QQ.word, WQ))
          };
        for (const qQ of this.slots) {
          var wQ;
          this.clearTimer(qQ), null === (wQ = qQ.worker) || void 0 === wQ || wQ.terminate(), qQ.worker = null, null !== qQ.job && XQ(qQ.job), qQ.job = null
        }
        this.queue.splice(0).forEach(XQ), null !== QQ && this.opts.onUnavailable(QQ)
      }
    }
    const DQ = [...wQ.s, 5e3, 15e3, 3e4];
    let pQ = null;
    const GQ = new Set;

    function UQ(QQ) {
      return GQ.add(QQ), pQ ??= function() {
        let QQ = "fix" === (0, sQ.g)() ? 1 : (WQ = navigator.hardwareConcurrency, FQ = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, WQ > 2 && !(0, IQ.p)(FQ) ? 2 : 1);
        var WQ, FQ;
        const gQ = new VQ({
          module: (0, qQ.g)(TQ.b, {
            delays: DQ,
            onRetry: (QQ, WQ) => {
              pQ === gQ && bQ((XQ => {
                XQ.onModuleRetry(QQ, WQ)
              }))
            }
          }),
          downloadFiles: JQ(zQ.b.scriptUrl, zQ.b.wasmBinaryUrl),
          loadWorker: async () => (await XQ.e(46).then((() => XQ(61769)))).createModelWorker,
          count: QQ,
          onUnavailable: QQ => {
            if (pQ === gQ) {
              pQ = null;
              const WQ = function(QQ) {
                return QQ instanceof wQ.d ? [TQ.b.url().href] : void 0
              }(QQ);
              bQ((XQ => {
                XQ.onUnavailable(QQ, WQ)
              }))
            }
          },
          onDecoderFailed: QQ => {
            if (pQ === gQ) {
              const WQ = QQ instanceof PQ ? QQ.goneUrl : null,
                XQ = null === WQ ? void 0 : [WQ];
              bQ((WQ => {
                WQ.onDecoderFailed(QQ, XQ)
              }))
            }
          },
          onWorkerLost: QQ => {
            pQ === gQ && bQ((WQ => {
              WQ.onWorkerLost(QQ)
            }))
          }
        });
        return gQ
      }(), {
        pool: pQ,
        unlisten: () => {
          GQ.delete(QQ)
        }
      }
    }

    function bQ(QQ) {
      for (const XQ of [...GQ]) try {
        QQ(XQ)
      } catch (WQ) {
        console.error("[pageModelPool] a listener threw", WQ)
      }
    }
  },
  41750: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  41742: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);