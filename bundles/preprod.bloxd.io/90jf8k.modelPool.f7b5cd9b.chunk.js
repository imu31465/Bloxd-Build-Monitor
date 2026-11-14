export const id = 36;
export const ids = [36];
export const modules = {
  39354: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF
    });
    var CF = SF(132),
      AF = SF(1065);

    function uF(FF) {
      return (0, CF.d)() ? `https://${AF.b.discordDomain}/${FF.href}` : FF.href
    }
    const hF = {
      scriptUrl: uF(new SF.U(SF(39361))),
      wasmBinaryUrl: uF(new SF.U(SF(39368)))
    }
  },
  32976: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      i: () => uF,
      j: () => hF
    });
    const CF = 1179937895,
      AF = 1313821514;

    function uF(FF) {
      const WF = new DataView(FF.buffer, FF.byteOffset, FF.byteLength);
      if (FF.byteLength < 20 || WF.getUint32(0, !0) !== CF || 2 !== WF.getUint32(4, !0)) return null;
      const SF = Math.min(WF.getUint32(8, !0), FF.byteLength),
        uF = WF.getUint32(12, !0);
      if (WF.getUint32(16, !0) !== AF || 20 + uF > SF) return null;
      let hF;
      try {
        hF = JSON.parse((new TextDecoder).decode(FF.subarray(20, 20 + uF)))
      } catch {
        return null
      }
      return "object" === typeof hF && null !== hF ? {
        json: hF,
        jsonEnd: 20 + uF,
        length: SF
      } : null
    }

    function hF(FF) {
      var WF;
      const SF = null === (WF = uF(FF)) || void 0 === WF ? void 0 : WF.json;
      if (void 0 === SF || !Array.isArray(SF.extensionsUsed) || !SF.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const CF = SF.meshes;
      return Array.isArray(CF) && CF.some((FF => {
        const WF = null === FF || void 0 === FF ? void 0 : FF.primitives;
        return Array.isArray(WF) && WF.some((FF => {
          const WF = null === FF || void 0 === FF ? void 0 : FF.extensions;
          return null != (null === WF || void 0 === WF ? void 0 : WF.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  41217: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      pageModelPool: () => aW
    });
    var CF = SF(2906),
      AF = SF(34921),
      uF = SF(38665),
      hF = SF(39354),
      bW = SF(38700);
    Error;
    class dF extends Error {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${FF}: ${WF}`), this.stage = FF, this.url = SF, this.status = CF, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function PF(FF, WF) {
      let SF = null,
        AF = !1;
      return {
        get: () => {
          if (null === SF) {
            const uF = async function(FF, WF) {
              try {
                return (await (0, CF.A)(FF)).buffer
              } catch (SF) {
                throw new dF(WF, (0, bW.e)(SF), FF, SF instanceof CF.f ? SF.status : null)
              }
            }(FF, WF);
            SF = uF, uF.then((() => {
              AF = SF === uF
            }), (() => {
              SF = null
            }))
          }
          return SF
        },
        forget: () => {
          AF && (SF = null, AF = !1)
        }
      }
    }

    function RF(FF, WF) {
      const SF = PF(WF, "wasm"),
        CF = PF(FF, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (SF.forget(), CF.forget());
        const [FF, WF] = await Promise.all([SF.get(), CF.get()]);
        return {
          script: WF,
          wasmBinary: FF
        }
      }
    }
    var iW = SF(32976),
      eF = SF(8196),
      EF = SF(38825),
      QF = SF(38878);
    class rW extends Error {
      constructor(FF) {
        super(`no model worker could install it: ${FF}`), this.name = "DracoInstallError"
      }
    }
    class gW {
      constructor(FF) {
        this.opts = FF, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.cb = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let WF = 0; WF < Math.max(1, FF.count); WF++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          cb: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((FF => null !== FF.job)).length
      }
      build(FF, WF) {
        if (null !== this.stopped) return Promise.resolve((0, EF.p)(FF, this.stopped));
        const SF = (0, iW.j)(WF);
        return SF && this.downloadDecoder(), new Promise((CF => {
          this.queue.push({
            word: FF,
            glb: WF,
            draco: SF,
            attempts: 0,
            resolve: CF
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.cb ? this.cb : null
      }
      pump() {
        const FF = this.files();
        for (const WF of this.slots) {
          if (null !== this.stopped) return;
          if (WF.gaveUp || WF.starting) continue;
          if (null === WF.worker) {
            this.start(WF);
            continue
          }
          if (null !== FF && "none" === WF.cb && WF.failedDownload !== this.downloads && this.install(WF, WF.worker, FF), null !== WF.job) continue;
          const SF = this.queue.findIndex((FF => "installed" === WF.cb || !FF.draco));
          SF >= 0 && this.run(WF, WF.worker, this.queue.splice(SF, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((FF => !FF.gaveUp && ("none" !== FF.cb || FF.failedDownload !== this.downloads))) || (this.cb = "uninstallable", this.decoderFailed(new rW(this.installFailure)))
      }
      start(FF) {
        if (FF.losses >= 6) return FF.gaveUp = !0, void(this.slots.every((FF => FF.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        FF.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((WF => {
          let [SF, CF] = WF;
          null === this.stopped && this.launch(FF, SF, CF)
        }), (FF => {
          this.fail(FF)
        }))
      }
      launch(FF, WF, SF) {
        let CF;
        try {
          CF = WF()
        } catch (AF) {
          return void this.lose(FF, `a model worker could not be created (${String(AF)})`)
        }
        FF.worker = CF, this.startTimer(FF, 3e4, (WF => {
          this.lose(FF, `a model worker did not start: ${(0,QF.k)(WF)}`)
        })), CF.onmessage = WF => {
          let {
            data: SF
          } = WF;
          this.answered(FF, CF, SF)
        }, CF.onerror = WF => {
          this.lose(FF, FF.starting ? `a model worker failed to start: ${WF.message}` : `a model worker failed: ${WF.message}`)
        }, CF.postMessage({
          type: "start",
          module: SF
        })
      }
      startTimer(FF, WF, SF) {
        FF.timer = new QF.i(WF, (WF => {
          FF.timer = null, SF(WF)
        }), void 0, this.opts.visibility)
      }
      clearTimer(FF) {
        var WF;
        null === (WF = FF.timer) || void 0 === WF || WF.cancel(), FF.timer = null
      }
      answered(FF, WF, SF) {
        if ("lost" === SF.type) return void this.lose(FF, SF.reason);
        if (FF.starting) return "started" !== SF.type ? void this.lose(FF, `a model worker answered ${SF.type} before it started`) : (this.clearTimer(FF), FF.starting = !1, FF.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === SF.type || "dracoFailed" === SF.type) {
          if (SF.seq !== FF.installSeq) return;
          return void("installing" === FF.cb ? (this.clearTimer(FF), "dracoInstalled" === SF.type ? (FF.cb = "installed", this.pump()) : this.installFailed(FF, SF.reason)) : "dracoInstalled" === SF.type && "none" === FF.cb && FF.failedDownload === this.downloads && (FF.cb = "installed", this.pump()))
        }
        const CF = FF.job;
        null !== CF && "started" !== SF.type && SF.seq === FF.seq && ("trapped" !== SF.type ? (FF.job = null, FF.losses = 0, this.jobLosses = 0, CF.resolve(new Uint8Array(SF.record)), this.pump()) : this.lose(FF, SF.trap, !0))
      }
      install(FF, WF, SF) {
        const CF = this.nextSeq++;
        FF.cb = "installing", FF.installSeq = CF, this.startTimer(FF, 3e4, (WF => {
          this.installFailed(FF, `no install within ${Math.round(WF)} ms`)
        }));
        const AF = SF.script.slice(0),
          uF = SF.wasmBinary.slice(0);
        WF.postMessage({
          type: "installDraco",
          seq: CF,
          script: AF,
          wasmBinary: uF
        }, [AF, uF])
      }
      installFailed(FF, WF) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${WF}`), this.noInstall(FF, WF), this.pump()
      }
      noInstall(FF, WF) {
        FF.cb = "none", FF.failedDownload = this.downloads, this.installFailure = WF
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.cb || null !== this.files()) return;
        const FF = "uninstallable" === this.cb;
        this.cb = "downloading", this.opts.downloadFiles(FF).then((FF => {
          null === this.stopped && (this.cb = FF, this.downloads++, this.pump())
        }), (FF => {
          this.cb = null, this.decoderFailed(FF)
        }))
      }
      decoderFailed(FF) {
        if (null !== this.stopped) return;
        const WF = (0, bW.e)(FF);
        let SF = 0;
        for (const CF of this.queue.splice(0)) CF.draco ? (CF.resolve((0, EF.j)(CF.word, WF)), SF++) : this.queue.push(CF);
        SF > 0 && this.opts.onDecoderFailed(FF)
      }
      run(FF, WF, SF) {
        const CF = this.nextSeq++;
        FF.seq = CF, FF.job = SF, SF.attempts++;
        const AF = SF.glb.slice();
        WF.postMessage({
          type: "job",
          seq: CF,
          word: SF.word,
          glb: AF.buffer
        }, [AF.buffer])
      }
      lose(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(FF);
        const CF = FF.worker;
        null !== CF && (CF.onmessage = null, CF.onerror = null, CF.terminate());
        const AF = !SF && "installing" === FF.cb;
        FF.worker = null, FF.starting = !1, FF.cb = "none", AF && this.noInstall(FF, WF), void 0 !== FF.startedAt && performance.now() - FF.startedAt >= 6e4 && (FF.losses = 0), FF.startedAt = void 0;
        const uF = FF.job;
        if (FF.job = null, null !== uF || AF || FF.losses++, this.opts.onWorkerLost(WF), null !== uF && AF) uF.attempts--, this.queue.unshift(uF);
        else if (null !== uF && (uF.attempts < 2 ? this.queue.unshift(uF) : uF.resolve((0, EF.n)(uF.word, WF)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(FF) {
        if (null !== this.stopped) return;
        this.stopped = null === FF ? "the model workers stopped" : `the model workers could not start: ${(0,bW.e)(FF)}`;
        const WF = this.stopped,
          SF = FF => {
            FF.resolve((0, EF.p)(FF.word, WF))
          };
        for (const AF of this.slots) {
          var CF;
          this.clearTimer(AF), null === (CF = AF.worker) || void 0 === CF || CF.terminate(), AF.worker = null, null !== AF.job && SF(AF.job), AF.job = null
        }
        this.queue.splice(0).forEach(SF), null !== FF && this.opts.onUnavailable(FF)
      }
    }
    let tW = null;
    const TF = new Set;

    function aW(FF) {
      return TF.add(FF), tW ??= function() {
        let FF = (WF = navigator.hardwareConcurrency, bW = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, WF > 2 && !(0, eF.r)(bW) ? 2 : 1);
        var WF, bW;
        const PF = new gW({
          module: (0, AF.e)(uF.d),
          downloadFiles: RF(hF.d.scriptUrl, hF.d.wasmBinaryUrl),
          loadWorker: async () => (await SF.e(37).then((() => SF(59233)))).createModelWorker,
          count: FF,
          onUnavailable: FF => {
            if (tW === PF) {
              tW = null;
              const WF = function(FF) {
                return FF instanceof CF.d ? [uF.d.url().href] : void 0
              }(FF);
              kW((SF => {
                SF.onUnavailable(FF, WF)
              }))
            }
          },
          onDecoderFailed: FF => {
            if (tW === PF) {
              const WF = FF instanceof dF ? FF.goneUrl : null,
                SF = null === WF ? void 0 : [WF];
              kW((WF => {
                WF.onDecoderFailed(FF, SF)
              }))
            }
          },
          onWorkerLost: FF => {
            tW === PF && kW((WF => {
              WF.onWorkerLost(FF)
            }))
          }
        });
        return PF
      }(), {
        pool: tW,
        unlisten: () => {
          TF.delete(FF)
        }
      }
    }

    function kW(FF) {
      for (const SF of [...TF]) try {
        FF(SF)
      } catch (WF) {
        console.error("[pageModelPool] a listener threw", WF)
      }
    }
  },
  39368: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  39361: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);