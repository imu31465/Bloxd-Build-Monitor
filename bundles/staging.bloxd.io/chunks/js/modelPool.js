export const id = 42;
export const ids = [42];
export const modules = {
  41514: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    var tS = gS(138),
      bS = gS(1158);

    function XS(SS) {
      return (0, tS.b)() ? `https://${bS.b.discordDomain}/${SS.href}` : SS.href
    }
    const xS = {
      scriptUrl: XS(new gS.U(gS(41522))),
      wasmBinaryUrl: XS(new gS.U(gS(41525)))
    }
  },
  34316: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      g: () => XS,
      k: () => xS
    });
    const tS = 1179937895,
      bS = 1313821514;

    function XS(SS) {
      const HS = new DataView(SS.buffer, SS.byteOffset, SS.byteLength);
      if (SS.byteLength < 20 || HS.getUint32(0, !0) !== tS || 2 !== HS.getUint32(4, !0)) return null;
      const gS = Math.min(HS.getUint32(8, !0), SS.byteLength),
        XS = HS.getUint32(12, !0);
      if (HS.getUint32(16, !0) !== bS || 20 + XS > gS) return null;
      let xS;
      try {
        xS = JSON.parse((new TextDecoder).decode(SS.subarray(20, 20 + XS)))
      } catch {
        return null
      }
      return "object" === typeof xS && null !== xS ? {
        json: xS,
        jsonEnd: 20 + XS,
        length: gS
      } : null
    }

    function xS(SS) {
      var HS;
      const gS = null === (HS = XS(SS)) || void 0 === HS ? void 0 : HS.json;
      if (void 0 === gS || !Array.isArray(gS.extensionsUsed) || !gS.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const tS = gS.meshes;
      return Array.isArray(tS) && tS.some((SS => {
        const HS = null === SS || void 0 === SS ? void 0 : SS.primitives;
        return Array.isArray(HS) && HS.some((SS => {
          const HS = null === SS || void 0 === SS ? void 0 : SS.extensions;
          return null != (null === HS || void 0 === HS ? void 0 : HS.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  51070: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => CS,
      pageModelPool: () => QS
    });
    var tS = gS(3030),
      bS = gS(36322),
      XS = gS(40889),
      xS = gS(41514),
      NS = gS(36287);
    Error;
    class qS extends Error {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${SS}: ${HS}`), this.stage = SS, this.url = gS, this.status = tS, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function uS(SS, HS) {
      let gS = null,
        bS = !1;
      return {
        get: () => {
          if (null === gS) {
            const XS = async function(SS, HS) {
              try {
                return (await (0, tS.J)(SS)).buffer
              } catch (gS) {
                throw new qS(HS, (0, NS.g)(gS), SS, gS instanceof tS.f ? gS.status : null)
              }
            }(SS, HS);
            gS = XS, XS.then((() => {
              bS = gS === XS
            }), (() => {
              gS = null
            }))
          }
          return gS
        },
        forget: () => {
          bS && (gS = null, bS = !1)
        }
      }
    }

    function IS(SS, HS) {
      const gS = uS(HS, "wasm"),
        tS = uS(SS, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (gS.forget(), tS.forget());
        const [SS, HS] = await Promise.all([gS.get(), tS.get()]);
        return {
          script: HS,
          wasmBinary: SS
        }
      }
    }
    var fS = gS(34316),
      kS = gS(3285),
      aS = gS(40832),
      KS = gS(40947);
    class jS extends Error {
      constructor(SS) {
        super(`no model worker could install it: ${SS}`), this.name = "DracoInstallError"
      }
    }
    class GS {
      constructor(SS) {
        this.opts = SS, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.NK = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let HS = 0; HS < Math.max(1, SS.count); HS++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          NK: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((SS => null !== SS.job)).length
      }
      build(SS, HS) {
        if (null !== this.stopped) return Promise.resolve((0, aS.m)(SS, this.stopped));
        const gS = (0, fS.k)(HS);
        return gS && this.downloadDecoder(), new Promise((tS => {
          this.queue.push({
            word: SS,
            glb: HS,
            draco: gS,
            attempts: 0,
            resolve: tS
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
        return "object" === typeof this.NK ? this.NK : null
      }
      pump() {
        const SS = this.resting && 0 === this.queue.length,
          HS = this.files();
        for (const gS of this.slots) {
          if (null !== this.stopped) return;
          if (gS.gaveUp || gS.starting) continue;
          if (null === gS.worker) {
            SS || this.start(gS);
            continue
          }
          if (SS) {
            null === gS.job && "installing" !== gS.NK && this.end(gS);
            continue
          }
          if (null !== HS && "none" === gS.NK && gS.failedDownload !== this.downloads && this.install(gS, gS.worker, HS), null !== gS.job) continue;
          const tS = this.queue.findIndex((SS => "installed" === gS.NK || !SS.draco));
          tS >= 0 && this.run(gS, gS.worker, this.queue.splice(tS, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((SS => !SS.gaveUp && ("none" !== SS.NK || SS.failedDownload !== this.downloads))) || (this.NK = "uninstallable", this.decoderFailed(new jS(this.installFailure)))
      }
      start(SS) {
        if (SS.losses >= 6) return SS.gaveUp = !0, void(this.slots.every((SS => SS.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        SS.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((HS => {
          let [gS, tS] = HS;
          null === this.stopped && this.launch(SS, gS, tS)
        }), (SS => {
          this.fail(SS)
        }))
      }
      launch(SS, HS, gS) {
        let tS;
        try {
          tS = HS()
        } catch (bS) {
          return void this.lose(SS, `a model worker could not be created (${String(bS)})`)
        }
        SS.worker = tS, this.startTimer(SS, 3e4, (HS => {
          this.lose(SS, `a model worker did not start: ${(0,KS.k)(HS)}`)
        })), tS.onmessage = HS => {
          let {
            data: gS
          } = HS;
          this.answered(SS, tS, gS)
        }, tS.onerror = HS => {
          this.lose(SS, SS.starting ? `a model worker failed to start: ${HS.message}` : `a model worker failed: ${HS.message}`)
        }, tS.postMessage({
          type: "start",
          module: gS
        })
      }
      end(SS) {
        const HS = SS.worker;
        null !== HS && (HS.onmessage = null, HS.onerror = null, HS.terminate()), SS.worker = null, SS.NK = "none", SS.startedAt = void 0
      }
      startTimer(SS, HS, gS) {
        SS.timer = new KS.h(HS, (HS => {
          SS.timer = null, gS(HS)
        }), void 0, this.opts.visibility)
      }
      clearTimer(SS) {
        var HS;
        null === (HS = SS.timer) || void 0 === HS || HS.cancel(), SS.timer = null
      }
      answered(SS, HS, gS) {
        if ("lost" === gS.type) return void this.lose(SS, gS.reason);
        if (SS.starting) return "started" !== gS.type ? void this.lose(SS, `a model worker answered ${gS.type} before it started`) : (this.clearTimer(SS), SS.starting = !1, SS.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === gS.type || "dracoFailed" === gS.type) {
          if (gS.seq !== SS.installSeq) return;
          return void("installing" === SS.NK ? (this.clearTimer(SS), "dracoInstalled" === gS.type ? (SS.NK = "installed", this.pump()) : this.installFailed(SS, gS.reason)) : "dracoInstalled" === gS.type && "none" === SS.NK && SS.failedDownload === this.downloads && (SS.NK = "installed", SS.failedDownload = 0, this.pump()))
        }
        const tS = SS.job;
        null !== tS && "started" !== gS.type && gS.seq === SS.seq && ("trapped" !== gS.type ? (SS.job = null, SS.losses = 0, this.jobLosses = 0, tS.resolve(new Uint8Array(gS.record)), this.pump()) : this.lose(SS, gS.trap, !0))
      }
      install(SS, HS, gS) {
        const tS = this.nextSeq++;
        SS.NK = "installing", SS.installSeq = tS, this.startTimer(SS, 3e4, (HS => {
          this.installFailed(SS, `no install within ${Math.round(HS)} ms`)
        }));
        const bS = gS.script.slice(0),
          XS = gS.wasmBinary.slice(0);
        HS.postMessage({
          type: "installDraco",
          seq: tS,
          script: bS,
          wasmBinary: XS
        }, [bS, XS])
      }
      installFailed(SS, HS) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${HS}`), this.noInstall(SS, HS), this.pump()
      }
      noInstall(SS, HS) {
        SS.NK = "none", SS.failedDownload = this.downloads, this.installFailure = HS
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.NK || null !== this.files()) return;
        const SS = "uninstallable" === this.NK;
        this.NK = "downloading", this.opts.downloadFiles(SS).then((SS => {
          null === this.stopped && (this.NK = SS, this.downloads++, this.pump())
        }), (SS => {
          this.NK = null, this.decoderFailed(SS)
        }))
      }
      decoderFailed(SS) {
        if (null !== this.stopped) return;
        const HS = (0, NS.g)(SS);
        let gS = 0;
        for (const tS of this.queue.splice(0)) tS.draco ? (tS.resolve((0, aS.f)(tS.word, HS)), gS++) : this.queue.push(tS);
        gS > 0 && this.opts.onDecoderFailed(SS), this.pump()
      }
      run(SS, HS, gS) {
        const tS = this.nextSeq++;
        SS.seq = tS, SS.job = gS, gS.attempts++;
        const bS = gS.glb.slice();
        HS.postMessage({
          type: "job",
          seq: tS,
          word: gS.word,
          glb: bS.buffer
        }, [bS.buffer])
      }
      lose(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(SS);
        const tS = !gS && "installing" === SS.NK;
        void 0 !== SS.startedAt && performance.now() - SS.startedAt >= 6e4 && (SS.losses = 0), this.end(SS), SS.starting = !1, tS && this.noInstall(SS, HS);
        const bS = SS.job;
        if (SS.job = null, null !== bS || tS || SS.losses++, this.opts.onWorkerLost(HS), null !== bS && tS) bS.attempts--, this.queue.unshift(bS);
        else if (null !== bS && (bS.attempts < 2 ? this.queue.unshift(bS) : bS.resolve((0, aS.i)(bS.word, HS)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(SS) {
        if (null !== this.stopped) return;
        this.stopped = null === SS ? "the model workers stopped" : `the model workers could not start: ${(0,NS.g)(SS)}`;
        const HS = this.stopped,
          gS = SS => {
            SS.resolve((0, aS.m)(SS.word, HS))
          };
        for (const bS of this.slots) {
          var tS;
          this.clearTimer(bS), null === (tS = bS.worker) || void 0 === tS || tS.terminate(), bS.worker = null, null !== bS.job && gS(bS.job), bS.job = null
        }
        this.queue.splice(0).forEach(gS), null !== SS && this.opts.onUnavailable(SS)
      }
    }
    const CS = [...tS.u, 5e3, 15e3, 3e4];
    let nS = null;
    const PS = new Set;

    function QS(SS) {
      return PS.add(SS), nS ??= function() {
        let SS = (HS = navigator.hardwareConcurrency, NS = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, HS > 2 && !(0, kS.r)(NS) ? 2 : 1);
        var HS, NS;
        const uS = new GS({
          module: (0, bS.e)(XS.e, {
            delays: CS,
            onRetry: (SS, HS) => {
              nS === uS && DS((gS => {
                gS.onModuleRetry(SS, HS)
              }))
            }
          }),
          downloadFiles: IS(xS.c.scriptUrl, xS.c.wasmBinaryUrl),
          loadWorker: async () => (await gS.e(43).then((() => gS(61568)))).createModelWorker,
          count: SS,
          onUnavailable: SS => {
            if (nS === uS) {
              nS = null;
              const HS = function(SS) {
                return SS instanceof tS.d ? [XS.e.url().href] : void 0
              }(SS);
              DS((gS => {
                gS.onUnavailable(SS, HS)
              }))
            }
          },
          onDecoderFailed: SS => {
            if (nS === uS) {
              const HS = SS instanceof qS ? SS.goneUrl : null,
                gS = null === HS ? void 0 : [HS];
              DS((HS => {
                HS.onDecoderFailed(SS, gS)
              }))
            }
          },
          onWorkerLost: SS => {
            nS === uS && DS((HS => {
              HS.onWorkerLost(SS)
            }))
          }
        });
        return uS
      }(), {
        pool: nS,
        unlisten: () => {
          PS.delete(SS)
        }
      }
    }

    function DS(SS) {
      for (const gS of [...PS]) try {
        SS(gS)
      } catch (HS) {
        console.error("[pageModelPool] a listener threw", HS)
      }
    }
  },
  41522: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41525: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);