export const id = 36;
export const ids = [36];
export const modules = {
  38975: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW
    });
    var wW = MW(151),
      CW = MW(1041);

    function zR(WW) {
      return (0, wW.e)() ? `https://${CW.c.discordDomain}/${WW.href}` : WW.href
    }
    const AW = {
      scriptUrl: zR(new MW.U(MW(38983))),
      wasmBinaryUrl: zR(new MW.U(MW(38986)))
    }
  },
  32665: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      f: () => zR,
      h: () => AW
    });
    const wW = 1179937895,
      CW = 1313821514;

    function zR(WW) {
      const RW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
      if (WW.byteLength < 20 || RW.getUint32(0, !0) !== wW || 2 !== RW.getUint32(4, !0)) return null;
      const MW = Math.min(RW.getUint32(8, !0), WW.byteLength),
        zR = RW.getUint32(12, !0);
      if (RW.getUint32(16, !0) !== CW || 20 + zR > MW) return null;
      let AW;
      try {
        AW = JSON.parse((new TextDecoder).decode(WW.subarray(20, 20 + zR)))
      } catch {
        return null
      }
      return "object" === typeof AW && null !== AW ? {
        json: AW,
        jsonEnd: 20 + zR,
        length: MW
      } : null
    }

    function AW(WW) {
      var RW;
      const MW = null === (RW = zR(WW)) || void 0 === RW ? void 0 : RW.json;
      if (void 0 === MW || !Array.isArray(MW.extensionsUsed) || !MW.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const wW = MW.meshes;
      return Array.isArray(wW) && wW.some((WW => {
        const RW = null === WW || void 0 === WW ? void 0 : WW.primitives;
        return Array.isArray(RW) && RW.some((WW => {
          const RW = null === WW || void 0 === WW ? void 0 : WW.extensions;
          return null != (null === RW || void 0 === RW ? void 0 : RW.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  40799: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      pageModelPool: () => IW
    });
    var wW = MW(2801),
      CW = MW(34631),
      zR = MW(38277),
      AW = MW(38975),
      bR = MW(38324);
    Error;
    class yR extends Error {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${WW}: ${RW}`), this.stage = WW, this.url = MW, this.status = wW, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function NW(WW, RW) {
      let MW = null,
        CW = !1;
      return {
        get: () => {
          if (null === MW) {
            const zR = async function(WW, RW) {
              try {
                return (await (0, wW.q)(WW)).buffer
              } catch (MW) {
                throw new yR(RW, (0, bR.g)(MW), WW, MW instanceof wW.c ? MW.status : null)
              }
            }(WW, RW);
            MW = zR, zR.then((() => {
              CW = MW === zR
            }), (() => {
              MW = null
            }))
          }
          return MW
        },
        forget: () => {
          CW && (MW = null, CW = !1)
        }
      }
    }

    function eW(WW, RW) {
      const MW = NW(RW, "wasm"),
        wW = NW(WW, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (MW.forget(), wW.forget());
        const [WW, RW] = await Promise.all([MW.get(), wW.get()]);
        return {
          script: RW,
          wasmBinary: WW
        }
      }
    }
    var BW = MW(32665),
      tR = MW(8121),
      TW = MW(38440),
      gR = MW(38491);
    class iR extends Error {
      constructor(WW) {
        super(`no model worker could install it: ${WW}`), this.name = "DracoInstallError"
      }
    }
    class YW {
      constructor(WW) {
        this.opts = WW, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.pA = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let RW = 0; RW < Math.max(1, WW.count); RW++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          pA: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((WW => null !== WW.job)).length
      }
      build(WW, RW) {
        if (null !== this.stopped) return Promise.resolve((0, TW.t)(WW, this.stopped));
        const MW = (0, BW.h)(RW);
        return MW && this.downloadDecoder(), new Promise((wW => {
          this.queue.push({
            word: WW,
            glb: RW,
            draco: MW,
            attempts: 0,
            resolve: wW
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.pA ? this.pA : null
      }
      pump() {
        const WW = this.files();
        for (const RW of this.slots) {
          if (null !== this.stopped) return;
          if (RW.gaveUp || RW.starting) continue;
          if (null === RW.worker) {
            this.start(RW);
            continue
          }
          if (null !== WW && "none" === RW.pA && RW.failedDownload !== this.downloads && this.install(RW, RW.worker, WW), null !== RW.job) continue;
          const MW = this.queue.findIndex((WW => "installed" === RW.pA || !WW.draco));
          MW >= 0 && this.run(RW, RW.worker, this.queue.splice(MW, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((WW => !WW.gaveUp && ("none" !== WW.pA || WW.failedDownload !== this.downloads))) || (this.pA = "uninstallable", this.decoderFailed(new iR(this.installFailure)))
      }
      start(WW) {
        if (WW.losses >= 6) return WW.gaveUp = !0, void(this.slots.every((WW => WW.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        WW.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((RW => {
          let [MW, wW] = RW;
          null === this.stopped && this.launch(WW, MW, wW)
        }), (WW => {
          this.fail(WW)
        }))
      }
      launch(WW, RW, MW) {
        let wW;
        try {
          wW = RW()
        } catch (CW) {
          return void this.lose(WW, `a model worker could not be created (${String(CW)})`)
        }
        WW.worker = wW, this.startTimer(WW, 3e4, (RW => {
          this.lose(WW, `a model worker did not start: ${(0,gR.l)(RW)}`)
        })), wW.onmessage = RW => {
          let {
            data: MW
          } = RW;
          this.answered(WW, wW, MW)
        }, wW.onerror = RW => {
          this.lose(WW, WW.starting ? `a model worker failed to start: ${RW.message}` : `a model worker failed: ${RW.message}`)
        }, wW.postMessage({
          type: "start",
          module: MW
        })
      }
      startTimer(WW, RW, MW) {
        WW.timer = new gR.h(RW, (RW => {
          WW.timer = null, MW(RW)
        }), void 0, this.opts.visibility)
      }
      clearTimer(WW) {
        var RW;
        null === (RW = WW.timer) || void 0 === RW || RW.cancel(), WW.timer = null
      }
      answered(WW, RW, MW) {
        if ("lost" === MW.type) return void this.lose(WW, MW.reason);
        if (WW.starting) return "started" !== MW.type ? void this.lose(WW, `a model worker answered ${MW.type} before it started`) : (this.clearTimer(WW), WW.starting = !1, WW.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === MW.type || "dracoFailed" === MW.type) {
          if (MW.seq !== WW.installSeq) return;
          return void("installing" === WW.pA ? (this.clearTimer(WW), "dracoInstalled" === MW.type ? (WW.pA = "installed", this.pump()) : this.installFailed(WW, MW.reason)) : "dracoInstalled" === MW.type && "none" === WW.pA && WW.failedDownload === this.downloads && (WW.pA = "installed", this.pump()))
        }
        const wW = WW.job;
        null !== wW && "started" !== MW.type && MW.seq === WW.seq && ("trapped" !== MW.type ? (WW.job = null, WW.losses = 0, this.jobLosses = 0, wW.resolve(new Uint8Array(MW.record)), this.pump()) : this.lose(WW, MW.trap, !0))
      }
      install(WW, RW, MW) {
        const wW = this.nextSeq++;
        WW.pA = "installing", WW.installSeq = wW, this.startTimer(WW, 3e4, (RW => {
          this.installFailed(WW, `no install within ${Math.round(RW)} ms`)
        }));
        const CW = MW.script.slice(0),
          zR = MW.wasmBinary.slice(0);
        RW.postMessage({
          type: "installDraco",
          seq: wW,
          script: CW,
          wasmBinary: zR
        }, [CW, zR])
      }
      installFailed(WW, RW) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${RW}`), this.noInstall(WW, RW), this.pump()
      }
      noInstall(WW, RW) {
        WW.pA = "none", WW.failedDownload = this.downloads, this.installFailure = RW
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.pA || null !== this.files()) return;
        const WW = "uninstallable" === this.pA;
        this.pA = "downloading", this.opts.downloadFiles(WW).then((WW => {
          null === this.stopped && (this.pA = WW, this.downloads++, this.pump())
        }), (WW => {
          this.pA = null, this.decoderFailed(WW)
        }))
      }
      decoderFailed(WW) {
        if (null !== this.stopped) return;
        const RW = (0, bR.g)(WW);
        let MW = 0;
        for (const wW of this.queue.splice(0)) wW.draco ? (wW.resolve((0, TW.i)(wW.word, RW)), MW++) : this.queue.push(wW);
        MW > 0 && this.opts.onDecoderFailed(WW)
      }
      run(WW, RW, MW) {
        const wW = this.nextSeq++;
        WW.seq = wW, WW.job = MW, MW.attempts++;
        const CW = MW.glb.slice();
        RW.postMessage({
          type: "job",
          seq: wW,
          word: MW.word,
          glb: CW.buffer
        }, [CW.buffer])
      }
      lose(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(WW);
        const wW = WW.worker;
        null !== wW && (wW.onmessage = null, wW.onerror = null, wW.terminate());
        const CW = !MW && "installing" === WW.pA;
        WW.worker = null, WW.starting = !1, WW.pA = "none", CW && this.noInstall(WW, RW), void 0 !== WW.startedAt && performance.now() - WW.startedAt >= 6e4 && (WW.losses = 0), WW.startedAt = void 0;
        const zR = WW.job;
        if (WW.job = null, null !== zR || CW || WW.losses++, this.opts.onWorkerLost(RW), null !== zR && CW) zR.attempts--, this.queue.unshift(zR);
        else if (null !== zR && (zR.attempts < 2 ? this.queue.unshift(zR) : zR.resolve((0, TW.q)(zR.word, RW)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(WW) {
        if (null !== this.stopped) return;
        this.stopped = null === WW ? "the model workers stopped" : `the model workers could not start: ${(0,bR.g)(WW)}`;
        const RW = this.stopped,
          MW = WW => {
            WW.resolve((0, TW.t)(WW.word, RW))
          };
        for (const CW of this.slots) {
          var wW;
          this.clearTimer(CW), null === (wW = CW.worker) || void 0 === wW || wW.terminate(), CW.worker = null, null !== CW.job && MW(CW.job), CW.job = null
        }
        this.queue.splice(0).forEach(MW), null !== WW && this.opts.onUnavailable(WW)
      }
    }
    let JW = null;
    const PW = new Set;

    function IW(WW) {
      return PW.add(WW), JW ??= function() {
        let WW = (RW = navigator.hardwareConcurrency, bR = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, RW > 2 && !(0, tR.s)(bR) ? 2 : 1);
        var RW, bR;
        const NW = new YW({
          module: (0, CW.b)(zR.e),
          downloadFiles: eW(AW.b.scriptUrl, AW.b.wasmBinaryUrl),
          loadWorker: async () => (await MW.e(37).then((() => MW(58902)))).createModelWorker,
          count: WW,
          onUnavailable: WW => {
            if (JW === NW) {
              JW = null;
              const RW = function(WW) {
                return WW instanceof wW.b ? [zR.e.url().href] : void 0
              }(WW);
              oW((MW => {
                MW.onUnavailable(WW, RW)
              }))
            }
          },
          onDecoderFailed: WW => {
            if (JW === NW) {
              const RW = WW instanceof yR ? WW.goneUrl : null,
                MW = null === RW ? void 0 : [RW];
              oW((RW => {
                RW.onDecoderFailed(WW, MW)
              }))
            }
          },
          onWorkerLost: WW => {
            JW === NW && oW((RW => {
              RW.onWorkerLost(WW)
            }))
          }
        });
        return NW
      }(), {
        pool: JW,
        unlisten: () => {
          PW.delete(WW)
        }
      }
    }

    function oW(WW) {
      for (const MW of [...PW]) try {
        WW(MW)
      } catch (RW) {
        console.error("[pageModelPool] a listener threw", RW)
      }
    }
  },
  38986: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  38983: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);