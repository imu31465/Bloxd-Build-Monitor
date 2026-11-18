export const id = 39;
export const ids = [39];
export const modules = {
  40234: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ
    });
    var FJ = ZJ(112),
      UJ = ZJ(1106);

    function eJ(JJ) {
      return (0, FJ.b)() ? `https://${UJ.c.discordDomain}/${JJ.href}` : JJ.href
    }
    const XJ = {
      scriptUrl: eJ(new ZJ.U(ZJ(40239))),
      wasmBinaryUrl: eJ(new ZJ.U(ZJ(40245)))
    }
  },
  8625: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      f: () => eJ,
      g: () => XJ
    });
    const FJ = 1179937895,
      UJ = 1313821514;

    function eJ(JJ) {
      const cJ = new DataView(JJ.buffer, JJ.byteOffset, JJ.byteLength);
      if (JJ.byteLength < 20 || cJ.getUint32(0, !0) !== FJ || 2 !== cJ.getUint32(4, !0)) return null;
      const ZJ = Math.min(cJ.getUint32(8, !0), JJ.byteLength),
        eJ = cJ.getUint32(12, !0);
      if (cJ.getUint32(16, !0) !== UJ || 20 + eJ > ZJ) return null;
      let XJ;
      try {
        XJ = JSON.parse((new TextDecoder).decode(JJ.subarray(20, 20 + eJ)))
      } catch {
        return null
      }
      return "object" === typeof XJ && null !== XJ ? {
        json: XJ,
        jsonEnd: 20 + eJ,
        length: ZJ
      } : null
    }

    function XJ(JJ) {
      var cJ;
      const ZJ = null === (cJ = eJ(JJ)) || void 0 === cJ ? void 0 : cJ.json;
      if (void 0 === ZJ || !Array.isArray(ZJ.extensionsUsed) || !ZJ.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const FJ = ZJ.meshes;
      return Array.isArray(FJ) && FJ.some((JJ => {
        const cJ = null === JJ || void 0 === JJ ? void 0 : JJ.primitives;
        return Array.isArray(cJ) && cJ.some((JJ => {
          const cJ = null === JJ || void 0 === JJ ? void 0 : JJ.extensions;
          return null != (null === cJ || void 0 === cJ ? void 0 : cJ.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42027: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      pageModelPool: () => vJ
    });
    var FJ = ZJ(3183),
      UJ = ZJ(35441),
      eJ = ZJ(39516),
      XJ = ZJ(40234),
      AJ = ZJ(39543);
    Error;
    class qJ extends Error {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${JJ}: ${cJ}`), this.stage = JJ, this.url = ZJ, this.status = FJ, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function jJ(JJ, cJ) {
      let ZJ = null,
        UJ = !1;
      return {
        get: () => {
          if (null === ZJ) {
            const eJ = async function(JJ, cJ) {
              try {
                return (await (0, FJ.L)(JJ)).buffer
              } catch (ZJ) {
                throw new qJ(cJ, (0, AJ.d)(ZJ), JJ, ZJ instanceof FJ.g ? ZJ.status : null)
              }
            }(JJ, cJ);
            ZJ = eJ, eJ.then((() => {
              UJ = ZJ === eJ
            }), (() => {
              ZJ = null
            }))
          }
          return ZJ
        },
        forget: () => {
          UJ && (ZJ = null, UJ = !1)
        }
      }
    }

    function YJ(JJ, cJ) {
      const ZJ = jJ(cJ, "wasm"),
        FJ = jJ(JJ, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ZJ.forget(), FJ.forget());
        const [JJ, cJ] = await Promise.all([ZJ.get(), FJ.get()]);
        return {
          script: cJ,
          wasmBinary: JJ
        }
      }
    }
    var hJ = ZJ(8625),
      DJ = ZJ(2601),
      sJ = ZJ(39741),
      nJ = ZJ(39781);
    class GJ extends Error {
      constructor(JJ) {
        super(`no model worker could install it: ${JJ}`), this.name = "DracoInstallError"
      }
    }
    class fJ {
      constructor(JJ) {
        this.opts = JJ, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.en = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let cJ = 0; cJ < Math.max(1, JJ.count); cJ++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          en: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((JJ => null !== JJ.job)).length
      }
      build(JJ, cJ) {
        if (null !== this.stopped) return Promise.resolve((0, sJ.k)(JJ, this.stopped));
        const ZJ = (0, hJ.g)(cJ);
        return ZJ && this.downloadDecoder(), new Promise((FJ => {
          this.queue.push({
            word: JJ,
            glb: cJ,
            draco: ZJ,
            attempts: 0,
            resolve: FJ
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.en ? this.en : null
      }
      pump() {
        const JJ = this.files();
        for (const cJ of this.slots) {
          if (null !== this.stopped) return;
          if (cJ.gaveUp || cJ.starting) continue;
          if (null === cJ.worker) {
            this.start(cJ);
            continue
          }
          if (null !== JJ && "none" === cJ.en && cJ.failedDownload !== this.downloads && this.install(cJ, cJ.worker, JJ), null !== cJ.job) continue;
          const ZJ = this.queue.findIndex((JJ => "installed" === cJ.en || !JJ.draco));
          ZJ >= 0 && this.run(cJ, cJ.worker, this.queue.splice(ZJ, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((JJ => !JJ.gaveUp && ("none" !== JJ.en || JJ.failedDownload !== this.downloads))) || (this.en = "uninstallable", this.decoderFailed(new GJ(this.installFailure)))
      }
      start(JJ) {
        if (JJ.losses >= 6) return JJ.gaveUp = !0, void(this.slots.every((JJ => JJ.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        JJ.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((cJ => {
          let [ZJ, FJ] = cJ;
          null === this.stopped && this.launch(JJ, ZJ, FJ)
        }), (JJ => {
          this.fail(JJ)
        }))
      }
      launch(JJ, cJ, ZJ) {
        let FJ;
        try {
          FJ = cJ()
        } catch (UJ) {
          return void this.lose(JJ, `a model worker could not be created (${String(UJ)})`)
        }
        JJ.worker = FJ, this.startTimer(JJ, 3e4, (cJ => {
          this.lose(JJ, `a model worker did not start: ${(0,nJ.i)(cJ)}`)
        })), FJ.onmessage = cJ => {
          let {
            data: ZJ
          } = cJ;
          this.answered(JJ, FJ, ZJ)
        }, FJ.onerror = cJ => {
          this.lose(JJ, JJ.starting ? `a model worker failed to start: ${cJ.message}` : `a model worker failed: ${cJ.message}`)
        }, FJ.postMessage({
          type: "start",
          module: ZJ
        })
      }
      startTimer(JJ, cJ, ZJ) {
        JJ.timer = new nJ.e(cJ, (cJ => {
          JJ.timer = null, ZJ(cJ)
        }), void 0, this.opts.visibility)
      }
      clearTimer(JJ) {
        var cJ;
        null === (cJ = JJ.timer) || void 0 === cJ || cJ.cancel(), JJ.timer = null
      }
      answered(JJ, cJ, ZJ) {
        if ("lost" === ZJ.type) return void this.lose(JJ, ZJ.reason);
        if (JJ.starting) return "started" !== ZJ.type ? void this.lose(JJ, `a model worker answered ${ZJ.type} before it started`) : (this.clearTimer(JJ), JJ.starting = !1, JJ.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === ZJ.type || "dracoFailed" === ZJ.type) {
          if (ZJ.seq !== JJ.installSeq) return;
          return void("installing" === JJ.en ? (this.clearTimer(JJ), "dracoInstalled" === ZJ.type ? (JJ.en = "installed", this.pump()) : this.installFailed(JJ, ZJ.reason)) : "dracoInstalled" === ZJ.type && "none" === JJ.en && JJ.failedDownload === this.downloads && (JJ.en = "installed", this.pump()))
        }
        const FJ = JJ.job;
        null !== FJ && "started" !== ZJ.type && ZJ.seq === JJ.seq && ("trapped" !== ZJ.type ? (JJ.job = null, JJ.losses = 0, this.jobLosses = 0, FJ.resolve(new Uint8Array(ZJ.record)), this.pump()) : this.lose(JJ, ZJ.trap, !0))
      }
      install(JJ, cJ, ZJ) {
        const FJ = this.nextSeq++;
        JJ.en = "installing", JJ.installSeq = FJ, this.startTimer(JJ, 3e4, (cJ => {
          this.installFailed(JJ, `no install within ${Math.round(cJ)} ms`)
        }));
        const UJ = ZJ.script.slice(0),
          eJ = ZJ.wasmBinary.slice(0);
        cJ.postMessage({
          type: "installDraco",
          seq: FJ,
          script: UJ,
          wasmBinary: eJ
        }, [UJ, eJ])
      }
      installFailed(JJ, cJ) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${cJ}`), this.noInstall(JJ, cJ), this.pump()
      }
      noInstall(JJ, cJ) {
        JJ.en = "none", JJ.failedDownload = this.downloads, this.installFailure = cJ
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.en || null !== this.files()) return;
        const JJ = "uninstallable" === this.en;
        this.en = "downloading", this.opts.downloadFiles(JJ).then((JJ => {
          null === this.stopped && (this.en = JJ, this.downloads++, this.pump())
        }), (JJ => {
          this.en = null, this.decoderFailed(JJ)
        }))
      }
      decoderFailed(JJ) {
        if (null !== this.stopped) return;
        const cJ = (0, AJ.d)(JJ);
        let ZJ = 0;
        for (const FJ of this.queue.splice(0)) FJ.draco ? (FJ.resolve((0, sJ.f)(FJ.word, cJ)), ZJ++) : this.queue.push(FJ);
        ZJ > 0 && this.opts.onDecoderFailed(JJ)
      }
      run(JJ, cJ, ZJ) {
        const FJ = this.nextSeq++;
        JJ.seq = FJ, JJ.job = ZJ, ZJ.attempts++;
        const UJ = ZJ.glb.slice();
        cJ.postMessage({
          type: "job",
          seq: FJ,
          word: ZJ.word,
          glb: UJ.buffer
        }, [UJ.buffer])
      }
      lose(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(JJ);
        const FJ = JJ.worker;
        null !== FJ && (FJ.onmessage = null, FJ.onerror = null, FJ.terminate());
        const UJ = !ZJ && "installing" === JJ.en;
        JJ.worker = null, JJ.starting = !1, JJ.en = "none", UJ && this.noInstall(JJ, cJ), void 0 !== JJ.startedAt && performance.now() - JJ.startedAt >= 6e4 && (JJ.losses = 0), JJ.startedAt = void 0;
        const eJ = JJ.job;
        if (JJ.job = null, null !== eJ || UJ || JJ.losses++, this.opts.onWorkerLost(cJ), null !== eJ && UJ) eJ.attempts--, this.queue.unshift(eJ);
        else if (null !== eJ && (eJ.attempts < 2 ? this.queue.unshift(eJ) : eJ.resolve((0, sJ.j)(eJ.word, cJ)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(JJ) {
        if (null !== this.stopped) return;
        this.stopped = null === JJ ? "the model workers stopped" : `the model workers could not start: ${(0,AJ.d)(JJ)}`;
        const cJ = this.stopped,
          ZJ = JJ => {
            JJ.resolve((0, sJ.k)(JJ.word, cJ))
          };
        for (const UJ of this.slots) {
          var FJ;
          this.clearTimer(UJ), null === (FJ = UJ.worker) || void 0 === FJ || FJ.terminate(), UJ.worker = null, null !== UJ.job && ZJ(UJ.job), UJ.job = null
        }
        this.queue.splice(0).forEach(ZJ), null !== JJ && this.opts.onUnavailable(JJ)
      }
    }
    let xJ = null;
    const rJ = new Set;

    function vJ(JJ) {
      return rJ.add(JJ), xJ ??= function() {
        let JJ = (cJ = navigator.hardwareConcurrency, AJ = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, cJ > 2 && !(0, DJ.v)(AJ) ? 2 : 1);
        var cJ, AJ;
        const jJ = new fJ({
          module: (0, UJ.e)(eJ.d),
          downloadFiles: YJ(XJ.b.scriptUrl, XJ.b.wasmBinaryUrl),
          loadWorker: async () => (await ZJ.e(40).then((() => ZJ(59750)))).createModelWorker,
          count: JJ,
          onUnavailable: JJ => {
            if (xJ === jJ) {
              xJ = null;
              const cJ = function(JJ) {
                return JJ instanceof FJ.d ? [eJ.d.url().href] : void 0
              }(JJ);
              mJ((ZJ => {
                ZJ.onUnavailable(JJ, cJ)
              }))
            }
          },
          onDecoderFailed: JJ => {
            if (xJ === jJ) {
              const cJ = JJ instanceof qJ ? JJ.goneUrl : null,
                ZJ = null === cJ ? void 0 : [cJ];
              mJ((cJ => {
                cJ.onDecoderFailed(JJ, ZJ)
              }))
            }
          },
          onWorkerLost: JJ => {
            xJ === jJ && mJ((cJ => {
              cJ.onWorkerLost(JJ)
            }))
          }
        });
        return jJ
      }(), {
        pool: xJ,
        unlisten: () => {
          rJ.delete(JJ)
        }
      }
    }

    function mJ(JJ) {
      for (const ZJ of [...rJ]) try {
        JJ(ZJ)
      } catch (cJ) {
        console.error("[pageModelPool] a listener threw", cJ)
      }
    }
  },
  40245: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  40239: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);