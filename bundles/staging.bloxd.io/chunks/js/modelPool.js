export const id = 43;
export const ids = [43];
export const modules = {
  41918: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(116),
      SG = ZG(1036);

    function LG(GG) {
      return (0, wG.isDiscordClient)() ? `https://${SG.c.discordDomain}/${GG.href}` : GG.href
    }
    const yG = {
      scriptUrl: LG(new ZG.U(ZG(41927))),
      wasmBinaryUrl: LG(new ZG.U(ZG(41932)))
    }
  },
  34569: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      f: () => LG,
      j: () => yG
    });
    const wG = 1179937895,
      SG = 1313821514;

    function LG(GG) {
      const bG = new DataView(GG.buffer, GG.byteOffset, GG.byteLength);
      if (GG.byteLength < 20 || bG.getUint32(0, !0) !== wG || 2 !== bG.getUint32(4, !0)) return null;
      const ZG = Math.min(bG.getUint32(8, !0), GG.byteLength),
        LG = bG.getUint32(12, !0);
      if (bG.getUint32(16, !0) !== SG || 20 + LG > ZG) return null;
      let yG;
      try {
        yG = JSON.parse((new TextDecoder).decode(GG.subarray(20, 20 + LG)))
      } catch {
        return null
      }
      return "object" === typeof yG && null !== yG ? {
        json: yG,
        jsonEnd: 20 + LG,
        length: ZG
      } : null
    }

    function yG(GG) {
      var bG;
      const ZG = null === (bG = LG(GG)) || void 0 === bG ? void 0 : bG.json;
      if (void 0 === ZG || !Array.isArray(ZG.extensionsUsed) || !ZG.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const wG = ZG.meshes;
      return Array.isArray(wG) && wG.some((GG => {
        const bG = null === GG || void 0 === GG ? void 0 : GG.primitives;
        return Array.isArray(bG) && bG.some((GG => {
          const bG = null === GG || void 0 === GG ? void 0 : GG.extensions;
          return null != (null === bG || void 0 === bG ? void 0 : bG.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  51469: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => JG,
      pageModelPool: () => EG
    });
    var wG = ZG(2872),
      SG = ZG(36643),
      LG = ZG(41248),
      yG = ZG(41918),
      kG = ZG(36606);
    Error;
    class UG extends Error {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${GG}: ${bG}`), this.stage = GG, this.url = ZG, this.status = wG, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function YG(GG, bG) {
      let ZG = null,
        SG = !1;
      return {
        get: () => {
          if (null === ZG) {
            const LG = async function(GG, bG) {
              try {
                return (await (0, wG.K)(GG)).buffer
              } catch (ZG) {
                throw new UG(bG, (0, kG.h)(ZG), GG, ZG instanceof wG.g ? ZG.status : null)
              }
            }(GG, bG);
            ZG = LG, LG.then((() => {
              SG = ZG === LG
            }), (() => {
              ZG = null
            }))
          }
          return ZG
        },
        forget: () => {
          SG && (ZG = null, SG = !1)
        }
      }
    }

    function VG(GG, bG) {
      const ZG = YG(bG, "wasm"),
        wG = YG(GG, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ZG.forget(), wG.forget());
        const [GG, bG] = await Promise.all([ZG.get(), wG.get()]);
        return {
          script: bG,
          wasmBinary: GG
        }
      }
    }
    var pG = ZG(34569),
      fG = ZG(3104),
      QG = ZG(41182),
      KG = ZG(41324);
    class hG extends Error {
      constructor(GG) {
        super(`no model worker could install it: ${GG}`), this.name = "DracoInstallError"
      }
    }
    class dG {
      constructor(GG) {
        this.opts = GG, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.GK = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let bG = 0; bG < Math.max(1, GG.count); bG++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          GK: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((GG => null !== GG.job)).length
      }
      build(GG, bG) {
        if (null !== this.stopped) return Promise.resolve((0, QG.r)(GG, this.stopped));
        const ZG = (0, pG.j)(bG);
        return ZG && this.downloadDecoder(), new Promise((wG => {
          this.queue.push({
            word: GG,
            glb: bG,
            draco: ZG,
            attempts: 0,
            resolve: wG
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
        return "object" === typeof this.GK ? this.GK : null
      }
      pump() {
        const GG = this.resting && 0 === this.queue.length,
          bG = this.files();
        for (const ZG of this.slots) {
          if (null !== this.stopped) return;
          if (ZG.gaveUp || ZG.starting) continue;
          if (null === ZG.worker) {
            GG || this.start(ZG);
            continue
          }
          if (GG) {
            null === ZG.job && "installing" !== ZG.GK && this.end(ZG);
            continue
          }
          if (null !== bG && "none" === ZG.GK && ZG.failedDownload !== this.downloads && this.install(ZG, ZG.worker, bG), null !== ZG.job) continue;
          const wG = this.queue.findIndex((GG => "installed" === ZG.GK || !GG.draco));
          wG >= 0 && this.run(ZG, ZG.worker, this.queue.splice(wG, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((GG => !GG.gaveUp && ("none" !== GG.GK || GG.failedDownload !== this.downloads))) || (this.GK = "uninstallable", this.decoderFailed(new hG(this.installFailure)))
      }
      start(GG) {
        if (GG.losses >= 6) return GG.gaveUp = !0, void(this.slots.every((GG => GG.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        GG.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((bG => {
          let [ZG, wG] = bG;
          null === this.stopped && this.launch(GG, ZG, wG)
        }), (GG => {
          this.fail(GG)
        }))
      }
      launch(GG, bG, ZG) {
        let wG;
        try {
          wG = bG()
        } catch (SG) {
          return void this.lose(GG, `a model worker could not be created (${String(SG)})`)
        }
        GG.worker = wG, this.startTimer(GG, 3e4, (bG => {
          this.lose(GG, `a model worker did not start: ${(0,KG.h)(bG)}`)
        })), wG.onmessage = bG => {
          let {
            data: ZG
          } = bG;
          this.answered(GG, wG, ZG)
        }, wG.onerror = bG => {
          this.lose(GG, GG.starting ? `a model worker failed to start: ${bG.message}` : `a model worker failed: ${bG.message}`)
        }, wG.postMessage({
          type: "start",
          module: ZG
        })
      }
      end(GG) {
        const bG = GG.worker;
        null !== bG && (bG.onmessage = null, bG.onerror = null, bG.terminate()), GG.worker = null, GG.GK = "none", GG.startedAt = void 0
      }
      startTimer(GG, bG, ZG) {
        GG.timer = new KG.f(bG, (bG => {
          GG.timer = null, ZG(bG)
        }), void 0, this.opts.visibility)
      }
      clearTimer(GG) {
        var bG;
        null === (bG = GG.timer) || void 0 === bG || bG.cancel(), GG.timer = null
      }
      answered(GG, bG, ZG) {
        if ("lost" === ZG.type) return void this.lose(GG, ZG.reason);
        if (GG.starting) return "started" !== ZG.type ? void this.lose(GG, `a model worker answered ${ZG.type} before it started`) : (this.clearTimer(GG), GG.starting = !1, GG.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === ZG.type || "dracoFailed" === ZG.type) {
          if (ZG.seq !== GG.installSeq) return;
          return void("installing" === GG.GK ? (this.clearTimer(GG), "dracoInstalled" === ZG.type ? (GG.GK = "installed", this.pump()) : this.installFailed(GG, ZG.reason)) : "dracoInstalled" === ZG.type && "none" === GG.GK && GG.failedDownload === this.downloads && (GG.GK = "installed", GG.failedDownload = 0, this.pump()))
        }
        const wG = GG.job;
        null !== wG && "started" !== ZG.type && ZG.seq === GG.seq && ("trapped" !== ZG.type ? (GG.job = null, GG.losses = 0, this.jobLosses = 0, wG.resolve(new Uint8Array(ZG.record)), this.pump()) : this.lose(GG, ZG.trap, !0))
      }
      install(GG, bG, ZG) {
        const wG = this.nextSeq++;
        GG.GK = "installing", GG.installSeq = wG, this.startTimer(GG, 3e4, (bG => {
          this.installFailed(GG, `no install within ${Math.round(bG)} ms`)
        }));
        const SG = ZG.script.slice(0),
          LG = ZG.wasmBinary.slice(0);
        bG.postMessage({
          type: "installDraco",
          seq: wG,
          script: SG,
          wasmBinary: LG
        }, [SG, LG])
      }
      installFailed(GG, bG) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${bG}`), this.noInstall(GG, bG), this.pump()
      }
      noInstall(GG, bG) {
        GG.GK = "none", GG.failedDownload = this.downloads, this.installFailure = bG
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.GK || null !== this.files()) return;
        const GG = "uninstallable" === this.GK;
        this.GK = "downloading", this.opts.downloadFiles(GG).then((GG => {
          null === this.stopped && (this.GK = GG, this.downloads++, this.pump())
        }), (GG => {
          this.GK = null, this.decoderFailed(GG)
        }))
      }
      decoderFailed(GG) {
        if (null !== this.stopped) return;
        const bG = (0, kG.h)(GG);
        let ZG = 0;
        for (const wG of this.queue.splice(0)) wG.draco ? (wG.resolve((0, QG.j)(wG.word, bG)), ZG++) : this.queue.push(wG);
        ZG > 0 && this.opts.onDecoderFailed(GG), this.pump()
      }
      run(GG, bG, ZG) {
        const wG = this.nextSeq++;
        GG.seq = wG, GG.job = ZG, ZG.attempts++;
        const SG = ZG.glb.slice();
        bG.postMessage({
          type: "job",
          seq: wG,
          word: ZG.word,
          glb: SG.buffer
        }, [SG.buffer])
      }
      lose(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(GG);
        const wG = !ZG && "installing" === GG.GK;
        void 0 !== GG.startedAt && performance.now() - GG.startedAt >= 6e4 && (GG.losses = 0), this.end(GG), GG.starting = !1, wG && this.noInstall(GG, bG);
        const SG = GG.job;
        if (GG.job = null, null !== SG || wG || GG.losses++, this.opts.onWorkerLost(bG), null !== SG && wG) SG.attempts--, this.queue.unshift(SG);
        else if (null !== SG && (SG.attempts < 2 ? this.queue.unshift(SG) : SG.resolve((0, QG.o)(SG.word, bG)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(GG) {
        if (null !== this.stopped) return;
        this.stopped = null === GG ? "the model workers stopped" : `the model workers could not start: ${(0,kG.h)(GG)}`;
        const bG = this.stopped,
          ZG = GG => {
            GG.resolve((0, QG.r)(GG.word, bG))
          };
        for (const SG of this.slots) {
          var wG;
          this.clearTimer(SG), null === (wG = SG.worker) || void 0 === wG || wG.terminate(), SG.worker = null, null !== SG.job && ZG(SG.job), SG.job = null
        }
        this.queue.splice(0).forEach(ZG), null !== GG && this.opts.onUnavailable(GG)
      }
    }
    const JG = [...wG.t, 5e3, 15e3, 3e4];
    let rG = null;
    const zG = new Set;

    function EG(GG) {
      return zG.add(GG), rG ??= function() {
        let GG = (bG = navigator.hardwareConcurrency, kG = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, bG > 2 && !(0, fG.s)(kG) ? 2 : 1);
        var bG, kG;
        const YG = new dG({
          module: (0, SG.h)(LG.b, {
            delays: JG,
            onRetry: (GG, bG) => {
              rG === YG && oG((ZG => {
                ZG.onModuleRetry(GG, bG)
              }))
            }
          }),
          downloadFiles: VG(yG.e.scriptUrl, yG.e.wasmBinaryUrl),
          loadWorker: async () => (await ZG.e(44).then((() => ZG(62063)))).createModelWorker,
          count: GG,
          onUnavailable: GG => {
            if (rG === YG) {
              rG = null;
              const bG = function(GG) {
                return GG instanceof wG.e ? [LG.b.url().href] : void 0
              }(GG);
              oG((ZG => {
                ZG.onUnavailable(GG, bG)
              }))
            }
          },
          onDecoderFailed: GG => {
            if (rG === YG) {
              const bG = GG instanceof UG ? GG.goneUrl : null,
                ZG = null === bG ? void 0 : [bG];
              oG((bG => {
                bG.onDecoderFailed(GG, ZG)
              }))
            }
          },
          onWorkerLost: GG => {
            rG === YG && oG((bG => {
              bG.onWorkerLost(GG)
            }))
          }
        });
        return YG
      }(), {
        pool: rG,
        unlisten: () => {
          zG.delete(GG)
        }
      }
    }

    function oG(GG) {
      for (const ZG of [...zG]) try {
        GG(ZG)
      } catch (bG) {
        console.error("[pageModelPool] a listener threw", bG)
      }
    }
  },
  41927: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41932: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);