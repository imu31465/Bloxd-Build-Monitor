export const id = 42;
export const ids = [42];
export const modules = {
  41298: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    var QC = ZC(113),
      wC = ZC(1032);

    function bC(CC) {
      return (0, QC.e)() ? `https://${wC.c.discordDomain}/${CC.href}` : CC.href
    }
    const nC = {
      scriptUrl: bC(new ZC.U(ZC(41302))),
      wasmBinaryUrl: bC(new ZC.U(ZC(41310)))
    }
  },
  34237: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      f: () => bC,
      g: () => nC
    });
    const QC = 1179937895,
      wC = 1313821514;

    function bC(CC) {
      const zC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
      if (CC.byteLength < 20 || zC.getUint32(0, !0) !== QC || 2 !== zC.getUint32(4, !0)) return null;
      const ZC = Math.min(zC.getUint32(8, !0), CC.byteLength),
        bC = zC.getUint32(12, !0);
      if (zC.getUint32(16, !0) !== wC || 20 + bC > ZC) return null;
      let nC;
      try {
        nC = JSON.parse((new TextDecoder).decode(CC.subarray(20, 20 + bC)))
      } catch {
        return null
      }
      return "object" === typeof nC && null !== nC ? {
        json: nC,
        jsonEnd: 20 + bC,
        length: ZC
      } : null
    }

    function nC(CC) {
      var zC;
      const ZC = null === (zC = bC(CC)) || void 0 === zC ? void 0 : zC.json;
      if (void 0 === ZC || !Array.isArray(ZC.extensionsUsed) || !ZC.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const QC = ZC.meshes;
      return Array.isArray(QC) && QC.some((CC => {
        const zC = null === CC || void 0 === CC ? void 0 : CC.primitives;
        return Array.isArray(zC) && zC.some((CC => {
          const zC = null === CC || void 0 === CC ? void 0 : CC.extensions;
          return null != (null === zC || void 0 === zC ? void 0 : zC.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  50772: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => PC,
      pageModelPool: () => AC
    });
    var QC = ZC(2856),
      wC = ZC(36201),
      bC = ZC(40697),
      nC = ZC(41298),
      fC = ZC(36180);
    Error;
    class oC extends Error {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${CC}: ${zC}`), this.stage = CC, this.url = ZC, this.status = QC, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function qC(CC, zC) {
      let ZC = null,
        wC = !1;
      return {
        get: () => {
          if (null === ZC) {
            const bC = async function(CC, zC) {
              try {
                return (await (0, QC.M)(CC)).buffer
              } catch (ZC) {
                throw new oC(zC, (0, fC.m)(ZC), CC, ZC instanceof QC.d ? ZC.status : null)
              }
            }(CC, zC);
            ZC = bC, bC.then((() => {
              wC = ZC === bC
            }), (() => {
              ZC = null
            }))
          }
          return ZC
        },
        forget: () => {
          wC && (ZC = null, wC = !1)
        }
      }
    }

    function FC(CC, zC) {
      const ZC = qC(zC, "wasm"),
        QC = qC(CC, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ZC.forget(), QC.forget());
        const [CC, zC] = await Promise.all([ZC.get(), QC.get()]);
        return {
          script: zC,
          wasmBinary: CC
        }
      }
    }
    var WC = ZC(34237),
      NC = ZC(3101),
      MC = ZC(40633),
      gC = ZC(40758);
    class SC extends Error {
      constructor(CC) {
        super(`no model worker could install it: ${CC}`), this.name = "DracoInstallError"
      }
    }
    class pC {
      constructor(CC) {
        this.opts = CC, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.wg = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let zC = 0; zC < Math.max(1, CC.count); zC++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          wg: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((CC => null !== CC.job)).length
      }
      build(CC, zC) {
        if (null !== this.stopped) return Promise.resolve((0, MC.u)(CC, this.stopped));
        const ZC = (0, WC.g)(zC);
        return ZC && this.downloadDecoder(), new Promise((QC => {
          this.queue.push({
            word: CC,
            glb: zC,
            draco: ZC,
            attempts: 0,
            resolve: QC
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
        return "object" === typeof this.wg ? this.wg : null
      }
      pump() {
        const CC = this.resting && 0 === this.queue.length,
          zC = this.files();
        for (const ZC of this.slots) {
          if (null !== this.stopped) return;
          if (ZC.gaveUp || ZC.starting) continue;
          if (null === ZC.worker) {
            CC || this.start(ZC);
            continue
          }
          if (CC) {
            null === ZC.job && "installing" !== ZC.wg && this.end(ZC);
            continue
          }
          if (null !== zC && "none" === ZC.wg && ZC.failedDownload !== this.downloads && this.install(ZC, ZC.worker, zC), null !== ZC.job) continue;
          const QC = this.queue.findIndex((CC => "installed" === ZC.wg || !CC.draco));
          QC >= 0 && this.run(ZC, ZC.worker, this.queue.splice(QC, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((CC => !CC.gaveUp && ("none" !== CC.wg || CC.failedDownload !== this.downloads))) || (this.wg = "uninstallable", this.decoderFailed(new SC(this.installFailure)))
      }
      start(CC) {
        if (CC.losses >= 6) return CC.gaveUp = !0, void(this.slots.every((CC => CC.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        CC.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((zC => {
          let [ZC, QC] = zC;
          null === this.stopped && this.launch(CC, ZC, QC)
        }), (CC => {
          this.fail(CC)
        }))
      }
      launch(CC, zC, ZC) {
        let QC;
        try {
          QC = zC()
        } catch (wC) {
          return void this.lose(CC, `a model worker could not be created (${String(wC)})`)
        }
        CC.worker = QC, this.startTimer(CC, 3e4, (zC => {
          this.lose(CC, `a model worker did not start: ${(0,gC.j)(zC)}`)
        })), QC.onmessage = zC => {
          let {
            data: ZC
          } = zC;
          this.answered(CC, QC, ZC)
        }, QC.onerror = zC => {
          this.lose(CC, CC.starting ? `a model worker failed to start: ${zC.message}` : `a model worker failed: ${zC.message}`)
        }, QC.postMessage({
          type: "start",
          module: ZC
        })
      }
      end(CC) {
        const zC = CC.worker;
        null !== zC && (zC.onmessage = null, zC.onerror = null, zC.terminate()), CC.worker = null, CC.wg = "none", CC.startedAt = void 0
      }
      startTimer(CC, zC, ZC) {
        CC.timer = new gC.g(zC, (zC => {
          CC.timer = null, ZC(zC)
        }), void 0, this.opts.visibility)
      }
      clearTimer(CC) {
        var zC;
        null === (zC = CC.timer) || void 0 === zC || zC.cancel(), CC.timer = null
      }
      answered(CC, zC, ZC) {
        if ("lost" === ZC.type) return void this.lose(CC, ZC.reason);
        if (CC.starting) return "started" !== ZC.type ? void this.lose(CC, `a model worker answered ${ZC.type} before it started`) : (this.clearTimer(CC), CC.starting = !1, CC.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === ZC.type || "dracoFailed" === ZC.type) {
          if (ZC.seq !== CC.installSeq) return;
          return void("installing" === CC.wg ? (this.clearTimer(CC), "dracoInstalled" === ZC.type ? (CC.wg = "installed", this.pump()) : this.installFailed(CC, ZC.reason)) : "dracoInstalled" === ZC.type && "none" === CC.wg && CC.failedDownload === this.downloads && (CC.wg = "installed", CC.failedDownload = 0, this.pump()))
        }
        const QC = CC.job;
        null !== QC && "started" !== ZC.type && ZC.seq === CC.seq && ("trapped" !== ZC.type ? (CC.job = null, CC.losses = 0, this.jobLosses = 0, QC.resolve(new Uint8Array(ZC.record)), this.pump()) : this.lose(CC, ZC.trap, !0))
      }
      install(CC, zC, ZC) {
        const QC = this.nextSeq++;
        CC.wg = "installing", CC.installSeq = QC, this.startTimer(CC, 3e4, (zC => {
          this.installFailed(CC, `no install within ${Math.round(zC)} ms`)
        }));
        const wC = ZC.script.slice(0),
          bC = ZC.wasmBinary.slice(0);
        zC.postMessage({
          type: "installDraco",
          seq: QC,
          script: wC,
          wasmBinary: bC
        }, [wC, bC])
      }
      installFailed(CC, zC) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${zC}`), this.noInstall(CC, zC), this.pump()
      }
      noInstall(CC, zC) {
        CC.wg = "none", CC.failedDownload = this.downloads, this.installFailure = zC
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.wg || null !== this.files()) return;
        const CC = "uninstallable" === this.wg;
        this.wg = "downloading", this.opts.downloadFiles(CC).then((CC => {
          null === this.stopped && (this.wg = CC, this.downloads++, this.pump())
        }), (CC => {
          this.wg = null, this.decoderFailed(CC)
        }))
      }
      decoderFailed(CC) {
        if (null !== this.stopped) return;
        const zC = (0, fC.m)(CC);
        let ZC = 0;
        for (const QC of this.queue.splice(0)) QC.draco ? (QC.resolve((0, MC.j)(QC.word, zC)), ZC++) : this.queue.push(QC);
        ZC > 0 && this.opts.onDecoderFailed(CC), this.pump()
      }
      run(CC, zC, ZC) {
        const QC = this.nextSeq++;
        CC.seq = QC, CC.job = ZC, ZC.attempts++;
        const wC = ZC.glb.slice();
        zC.postMessage({
          type: "job",
          seq: QC,
          word: ZC.word,
          glb: wC.buffer
        }, [wC.buffer])
      }
      lose(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(CC);
        const QC = !ZC && "installing" === CC.wg;
        void 0 !== CC.startedAt && performance.now() - CC.startedAt >= 6e4 && (CC.losses = 0), this.end(CC), CC.starting = !1, QC && this.noInstall(CC, zC);
        const wC = CC.job;
        if (CC.job = null, null !== wC || QC || CC.losses++, this.opts.onWorkerLost(zC), null !== wC && QC) wC.attempts--, this.queue.unshift(wC);
        else if (null !== wC && (wC.attempts < 2 ? this.queue.unshift(wC) : wC.resolve((0, MC.t)(wC.word, zC)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(CC) {
        if (null !== this.stopped) return;
        this.stopped = null === CC ? "the model workers stopped" : `the model workers could not start: ${(0,fC.m)(CC)}`;
        const zC = this.stopped,
          ZC = CC => {
            CC.resolve((0, MC.u)(CC.word, zC))
          };
        for (const wC of this.slots) {
          var QC;
          this.clearTimer(wC), null === (QC = wC.worker) || void 0 === QC || QC.terminate(), wC.worker = null, null !== wC.job && ZC(wC.job), wC.job = null
        }
        this.queue.splice(0).forEach(ZC), null !== CC && this.opts.onUnavailable(CC)
      }
    }
    const PC = [...QC.t, 5e3, 15e3, 3e4];
    let GC = null;
    const RC = new Set;

    function AC(CC) {
      return RC.add(CC), GC ??= function() {
        let CC = (zC = navigator.hardwareConcurrency, fC = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, zC > 2 && !(0, NC.t)(fC) ? 2 : 1);
        var zC, fC;
        const qC = new pC({
          module: (0, wC.d)(bC.d, {
            delays: PC,
            onRetry: (CC, zC) => {
              GC === qC && xC((ZC => {
                ZC.onModuleRetry(CC, zC)
              }))
            }
          }),
          downloadFiles: FC(nC.d.scriptUrl, nC.d.wasmBinaryUrl),
          loadWorker: async () => (await ZC.e(43).then((() => ZC(61143)))).createModelWorker,
          count: CC,
          onUnavailable: CC => {
            if (GC === qC) {
              GC = null;
              const zC = function(CC) {
                return CC instanceof QC.b ? [bC.d.url().href] : void 0
              }(CC);
              xC((ZC => {
                ZC.onUnavailable(CC, zC)
              }))
            }
          },
          onDecoderFailed: CC => {
            if (GC === qC) {
              const zC = CC instanceof oC ? CC.goneUrl : null,
                ZC = null === zC ? void 0 : [zC];
              xC((zC => {
                zC.onDecoderFailed(CC, ZC)
              }))
            }
          },
          onWorkerLost: CC => {
            GC === qC && xC((zC => {
              zC.onWorkerLost(CC)
            }))
          }
        });
        return qC
      }(), {
        pool: GC,
        unlisten: () => {
          RC.delete(CC)
        }
      }
    }

    function xC(CC) {
      for (const ZC of [...RC]) try {
        CC(ZC)
      } catch (zC) {
        console.error("[pageModelPool] a listener threw", zC)
      }
    }
  },
  41310: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  41302: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);