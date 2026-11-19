export const id = 42;
export const ids = [42];
export const modules = {
  40554: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD
    });
    var ID = cD(120),
      pD = cD(1202);

    function iD(DD) {
      return (0, ID.c)() ? `https://${pD.d.discordDomain}/${DD.href}` : DD.href
    }
    const fD = {
      scriptUrl: iD(new cD.U(cD(40557))),
      wasmBinaryUrl: iD(new cD.U(cD(40564)))
    }
  },
  9132: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      d: () => iD,
      g: () => fD
    });
    const ID = 1179937895,
      pD = 1313821514;

    function iD(DD) {
      const CD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
      if (DD.byteLength < 20 || CD.getUint32(0, !0) !== ID || 2 !== CD.getUint32(4, !0)) return null;
      const cD = Math.min(CD.getUint32(8, !0), DD.byteLength),
        iD = CD.getUint32(12, !0);
      if (CD.getUint32(16, !0) !== pD || 20 + iD > cD) return null;
      let fD;
      try {
        fD = JSON.parse((new TextDecoder).decode(DD.subarray(20, 20 + iD)))
      } catch {
        return null
      }
      return "object" === typeof fD && null !== fD ? {
        json: fD,
        jsonEnd: 20 + iD,
        length: cD
      } : null
    }

    function fD(DD) {
      var CD;
      const cD = null === (CD = iD(DD)) || void 0 === CD ? void 0 : CD.json;
      if (void 0 === cD || !Array.isArray(cD.extensionsUsed) || !cD.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const ID = cD.meshes;
      return Array.isArray(ID) && ID.some((DD => {
        const CD = null === DD || void 0 === DD ? void 0 : DD.primitives;
        return Array.isArray(CD) && CD.some((DD => {
          const CD = null === DD || void 0 === DD ? void 0 : DD.extensions;
          return null != (null === CD || void 0 === CD ? void 0 : CD.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42518: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => vD,
      pageModelPool: () => XD
    });
    var ID = cD(3529),
      pD = cD(35734),
      iD = cD(39834),
      fD = cD(40554),
      bD = cD(39872);
    Error;
    class QD extends Error {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${DD}: ${CD}`), this.stage = DD, this.url = cD, this.status = ID, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function wD(DD, CD) {
      let cD = null,
        pD = !1;
      return {
        get: () => {
          if (null === cD) {
            const iD = async function(DD, CD) {
              try {
                return (await (0, ID.I)(DD)).buffer
              } catch (cD) {
                throw new QD(CD, (0, bD.h)(cD), DD, cD instanceof ID.g ? cD.status : null)
              }
            }(DD, CD);
            cD = iD, iD.then((() => {
              pD = cD === iD
            }), (() => {
              cD = null
            }))
          }
          return cD
        },
        forget: () => {
          pD && (cD = null, pD = !1)
        }
      }
    }

    function SD(DD, CD) {
      const cD = wD(CD, "wasm"),
        ID = wD(DD, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (cD.forget(), ID.forget());
        const [DD, CD] = await Promise.all([cD.get(), ID.get()]);
        return {
          script: CD,
          wasmBinary: DD
        }
      }
    }
    var BD = cD(9132),
      yD = cD(2908),
      MD = cD(40071),
      tD = cD(40101);
    class ZD extends Error {
      constructor(DD) {
        super(`no model worker could install it: ${DD}`), this.name = "DracoInstallError"
      }
    }
    class oD {
      constructor(DD) {
        this.opts = DD, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.Pt = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let CD = 0; CD < Math.max(1, DD.count); CD++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          Pt: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((DD => null !== DD.job)).length
      }
      build(DD, CD) {
        if (null !== this.stopped) return Promise.resolve((0, MD.x)(DD, this.stopped));
        const cD = (0, BD.g)(CD);
        return cD && this.downloadDecoder(), new Promise((ID => {
          this.queue.push({
            word: DD,
            glb: CD,
            draco: cD,
            attempts: 0,
            resolve: ID
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.Pt ? this.Pt : null
      }
      pump() {
        const DD = this.files();
        for (const CD of this.slots) {
          if (null !== this.stopped) return;
          if (CD.gaveUp || CD.starting) continue;
          if (null === CD.worker) {
            this.start(CD);
            continue
          }
          if (null !== DD && "none" === CD.Pt && CD.failedDownload !== this.downloads && this.install(CD, CD.worker, DD), null !== CD.job) continue;
          const cD = this.queue.findIndex((DD => "installed" === CD.Pt || !DD.draco));
          cD >= 0 && this.run(CD, CD.worker, this.queue.splice(cD, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((DD => !DD.gaveUp && ("none" !== DD.Pt || DD.failedDownload !== this.downloads))) || (this.Pt = "uninstallable", this.decoderFailed(new ZD(this.installFailure)))
      }
      start(DD) {
        if (DD.losses >= 6) return DD.gaveUp = !0, void(this.slots.every((DD => DD.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        DD.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((CD => {
          let [cD, ID] = CD;
          null === this.stopped && this.launch(DD, cD, ID)
        }), (DD => {
          this.fail(DD)
        }))
      }
      launch(DD, CD, cD) {
        let ID;
        try {
          ID = CD()
        } catch (pD) {
          return void this.lose(DD, `a model worker could not be created (${String(pD)})`)
        }
        DD.worker = ID, this.startTimer(DD, 3e4, (CD => {
          this.lose(DD, `a model worker did not start: ${(0,tD.j)(CD)}`)
        })), ID.onmessage = CD => {
          let {
            data: cD
          } = CD;
          this.answered(DD, ID, cD)
        }, ID.onerror = CD => {
          this.lose(DD, DD.starting ? `a model worker failed to start: ${CD.message}` : `a model worker failed: ${CD.message}`)
        }, ID.postMessage({
          type: "start",
          module: cD
        })
      }
      startTimer(DD, CD, cD) {
        DD.timer = new tD.f(CD, (CD => {
          DD.timer = null, cD(CD)
        }), void 0, this.opts.visibility)
      }
      clearTimer(DD) {
        var CD;
        null === (CD = DD.timer) || void 0 === CD || CD.cancel(), DD.timer = null
      }
      answered(DD, CD, cD) {
        if ("lost" === cD.type) return void this.lose(DD, cD.reason);
        if (DD.starting) return "started" !== cD.type ? void this.lose(DD, `a model worker answered ${cD.type} before it started`) : (this.clearTimer(DD), DD.starting = !1, DD.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === cD.type || "dracoFailed" === cD.type) {
          if (cD.seq !== DD.installSeq) return;
          return void("installing" === DD.Pt ? (this.clearTimer(DD), "dracoInstalled" === cD.type ? (DD.Pt = "installed", this.pump()) : this.installFailed(DD, cD.reason)) : "dracoInstalled" === cD.type && "none" === DD.Pt && DD.failedDownload === this.downloads && (DD.Pt = "installed", this.pump()))
        }
        const ID = DD.job;
        null !== ID && "started" !== cD.type && cD.seq === DD.seq && ("trapped" !== cD.type ? (DD.job = null, DD.losses = 0, this.jobLosses = 0, ID.resolve(new Uint8Array(cD.record)), this.pump()) : this.lose(DD, cD.trap, !0))
      }
      install(DD, CD, cD) {
        const ID = this.nextSeq++;
        DD.Pt = "installing", DD.installSeq = ID, this.startTimer(DD, 3e4, (CD => {
          this.installFailed(DD, `no install within ${Math.round(CD)} ms`)
        }));
        const pD = cD.script.slice(0),
          iD = cD.wasmBinary.slice(0);
        CD.postMessage({
          type: "installDraco",
          seq: ID,
          script: pD,
          wasmBinary: iD
        }, [pD, iD])
      }
      installFailed(DD, CD) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${CD}`), this.noInstall(DD, CD), this.pump()
      }
      noInstall(DD, CD) {
        DD.Pt = "none", DD.failedDownload = this.downloads, this.installFailure = CD
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.Pt || null !== this.files()) return;
        const DD = "uninstallable" === this.Pt;
        this.Pt = "downloading", this.opts.downloadFiles(DD).then((DD => {
          null === this.stopped && (this.Pt = DD, this.downloads++, this.pump())
        }), (DD => {
          this.Pt = null, this.decoderFailed(DD)
        }))
      }
      decoderFailed(DD) {
        if (null !== this.stopped) return;
        const CD = (0, bD.h)(DD);
        let cD = 0;
        for (const ID of this.queue.splice(0)) ID.draco ? (ID.resolve((0, MD.l)(ID.word, CD)), cD++) : this.queue.push(ID);
        cD > 0 && this.opts.onDecoderFailed(DD)
      }
      run(DD, CD, cD) {
        const ID = this.nextSeq++;
        DD.seq = ID, DD.job = cD, cD.attempts++;
        const pD = cD.glb.slice();
        CD.postMessage({
          type: "job",
          seq: ID,
          word: cD.word,
          glb: pD.buffer
        }, [pD.buffer])
      }
      lose(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(DD);
        const ID = DD.worker;
        null !== ID && (ID.onmessage = null, ID.onerror = null, ID.terminate());
        const pD = !cD && "installing" === DD.Pt;
        DD.worker = null, DD.starting = !1, DD.Pt = "none", pD && this.noInstall(DD, CD), void 0 !== DD.startedAt && performance.now() - DD.startedAt >= 6e4 && (DD.losses = 0), DD.startedAt = void 0;
        const iD = DD.job;
        if (DD.job = null, null !== iD || pD || DD.losses++, this.opts.onWorkerLost(CD), null !== iD && pD) iD.attempts--, this.queue.unshift(iD);
        else if (null !== iD && (iD.attempts < 2 ? this.queue.unshift(iD) : iD.resolve((0, MD.t)(iD.word, CD)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(DD) {
        if (null !== this.stopped) return;
        this.stopped = null === DD ? "the model workers stopped" : `the model workers could not start: ${(0,bD.h)(DD)}`;
        const CD = this.stopped,
          cD = DD => {
            DD.resolve((0, MD.x)(DD.word, CD))
          };
        for (const pD of this.slots) {
          var ID;
          this.clearTimer(pD), null === (ID = pD.worker) || void 0 === ID || ID.terminate(), pD.worker = null, null !== pD.job && cD(pD.job), pD.job = null
        }
        this.queue.splice(0).forEach(cD), null !== DD && this.opts.onUnavailable(DD)
      }
    }
    const vD = [...ID.t, 5e3, 15e3, 3e4];
    let ND = null;
    const gD = new Set;

    function XD(DD) {
      return gD.add(DD), ND ??= function() {
        let DD = (CD = navigator.hardwareConcurrency, bD = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, CD > 2 && !(0, yD.u)(bD) ? 2 : 1);
        var CD, bD;
        const wD = new oD({
          module: (0, pD.f)(iD.b, {
            delays: vD,
            onRetry: (DD, CD) => {
              ND === wD && mD((cD => {
                cD.onModuleRetry(DD, CD)
              }))
            }
          }),
          downloadFiles: SD(fD.d.scriptUrl, fD.d.wasmBinaryUrl),
          loadWorker: async () => (await cD.e(43).then((() => cD(60719)))).createModelWorker,
          count: DD,
          onUnavailable: DD => {
            if (ND === wD) {
              ND = null;
              const CD = function(DD) {
                return DD instanceof ID.d ? [iD.b.url().href] : void 0
              }(DD);
              mD((cD => {
                cD.onUnavailable(DD, CD)
              }))
            }
          },
          onDecoderFailed: DD => {
            if (ND === wD) {
              const CD = DD instanceof QD ? DD.goneUrl : null,
                cD = null === CD ? void 0 : [CD];
              mD((CD => {
                CD.onDecoderFailed(DD, cD)
              }))
            }
          },
          onWorkerLost: DD => {
            ND === wD && mD((CD => {
              CD.onWorkerLost(DD)
            }))
          }
        });
        return wD
      }(), {
        pool: ND,
        unlisten: () => {
          gD.delete(DD)
        }
      }
    }

    function mD(DD) {
      for (const cD of [...gD]) try {
        DD(cD)
      } catch (CD) {
        console.error("[pageModelPool] a listener threw", CD)
      }
    }
  },
  40557: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40564: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);