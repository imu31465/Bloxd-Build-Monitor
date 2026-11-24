export const id = 42;
export const ids = [42];
export const modules = {
  41401: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    var pD = wD(128),
      sD = wD(1084);

    function KD(DD) {
      return (0, pD.d)() ? `https://${sD.b.discordDomain}/${DD.href}` : DD.href
    }
    const rD = {
      scriptUrl: KD(new wD.U(wD(41405))),
      wasmBinaryUrl: KD(new wD.U(wD(41409)))
    }
  },
  34294: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      d: () => KD,
      g: () => rD
    });
    const pD = 1179937895,
      sD = 1313821514;

    function KD(DD) {
      const zD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
      if (DD.byteLength < 20 || zD.getUint32(0, !0) !== pD || 2 !== zD.getUint32(4, !0)) return null;
      const wD = Math.min(zD.getUint32(8, !0), DD.byteLength),
        KD = zD.getUint32(12, !0);
      if (zD.getUint32(16, !0) !== sD || 20 + KD > wD) return null;
      let rD;
      try {
        rD = JSON.parse((new TextDecoder).decode(DD.subarray(20, 20 + KD)))
      } catch {
        return null
      }
      return "object" === typeof rD && null !== rD ? {
        json: rD,
        jsonEnd: 20 + KD,
        length: wD
      } : null
    }

    function rD(DD) {
      var zD;
      const wD = null === (zD = KD(DD)) || void 0 === zD ? void 0 : zD.json;
      if (void 0 === wD || !Array.isArray(wD.extensionsUsed) || !wD.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const pD = wD.meshes;
      return Array.isArray(pD) && pD.some((DD => {
        const zD = null === DD || void 0 === DD ? void 0 : DD.primitives;
        return Array.isArray(zD) && zD.some((DD => {
          const zD = null === DD || void 0 === DD ? void 0 : DD.extensions;
          return null != (null === zD || void 0 === zD ? void 0 : zD.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  50834: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => hD,
      pageModelPool: () => OD
    });
    var pD = wD(2868),
      sD = wD(36290),
      KD = wD(40780),
      rD = wD(41401),
      LD = wD(36254);
    Error;
    class cD extends Error {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${DD}: ${zD}`), this.stage = DD, this.url = wD, this.status = pD, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function gD(DD, zD) {
      let wD = null,
        sD = !1;
      return {
        get: () => {
          if (null === wD) {
            const KD = async function(DD, zD) {
              try {
                return (await (0, pD.C)(DD)).buffer
              } catch (wD) {
                throw new cD(zD, (0, LD.m)(wD), DD, wD instanceof pD.i ? wD.status : null)
              }
            }(DD, zD);
            wD = KD, KD.then((() => {
              sD = wD === KD
            }), (() => {
              wD = null
            }))
          }
          return wD
        },
        forget: () => {
          sD && (wD = null, sD = !1)
        }
      }
    }

    function RD(DD, zD) {
      const wD = gD(zD, "wasm"),
        pD = gD(DD, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (wD.forget(), pD.forget());
        const [DD, zD] = await Promise.all([wD.get(), pD.get()]);
        return {
          script: zD,
          wasmBinary: DD
        }
      }
    }
    var AD = wD(34294),
      UD = wD(3098),
      fD = wD(40719),
      ID = wD(40850);
    class BD extends Error {
      constructor(DD) {
        super(`no model worker could install it: ${DD}`), this.name = "DracoInstallError"
      }
    }
    class GD {
      constructor(DD) {
        this.opts = DD, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.cI = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let zD = 0; zD < Math.max(1, DD.count); zD++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          cI: "none",
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
      build(DD, zD) {
        if (null !== this.stopped) return Promise.resolve((0, fD.q)(DD, this.stopped));
        const wD = (0, AD.g)(zD);
        return wD && this.downloadDecoder(), new Promise((pD => {
          this.queue.push({
            word: DD,
            glb: zD,
            draco: wD,
            attempts: 0,
            resolve: pD
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
        return "object" === typeof this.cI ? this.cI : null
      }
      pump() {
        const DD = this.resting && 0 === this.queue.length,
          zD = this.files();
        for (const wD of this.slots) {
          if (null !== this.stopped) return;
          if (wD.gaveUp || wD.starting) continue;
          if (null === wD.worker) {
            DD || this.start(wD);
            continue
          }
          if (DD) {
            null === wD.job && "installing" !== wD.cI && this.end(wD);
            continue
          }
          if (null !== zD && "none" === wD.cI && wD.failedDownload !== this.downloads && this.install(wD, wD.worker, zD), null !== wD.job) continue;
          const pD = this.queue.findIndex((DD => "installed" === wD.cI || !DD.draco));
          pD >= 0 && this.run(wD, wD.worker, this.queue.splice(pD, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((DD => !DD.gaveUp && ("none" !== DD.cI || DD.failedDownload !== this.downloads))) || (this.cI = "uninstallable", this.decoderFailed(new BD(this.installFailure)))
      }
      start(DD) {
        if (DD.losses >= 6) return DD.gaveUp = !0, void(this.slots.every((DD => DD.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        DD.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((zD => {
          let [wD, pD] = zD;
          null === this.stopped && this.launch(DD, wD, pD)
        }), (DD => {
          this.fail(DD)
        }))
      }
      launch(DD, zD, wD) {
        let pD;
        try {
          pD = zD()
        } catch (sD) {
          return void this.lose(DD, `a model worker could not be created (${String(sD)})`)
        }
        DD.worker = pD, this.startTimer(DD, 3e4, (zD => {
          this.lose(DD, `a model worker did not start: ${(0,ID.m)(zD)}`)
        })), pD.onmessage = zD => {
          let {
            data: wD
          } = zD;
          this.answered(DD, pD, wD)
        }, pD.onerror = zD => {
          this.lose(DD, DD.starting ? `a model worker failed to start: ${zD.message}` : `a model worker failed: ${zD.message}`)
        }, pD.postMessage({
          type: "start",
          module: wD
        })
      }
      end(DD) {
        const zD = DD.worker;
        null !== zD && (zD.onmessage = null, zD.onerror = null, zD.terminate()), DD.worker = null, DD.cI = "none", DD.startedAt = void 0
      }
      startTimer(DD, zD, wD) {
        DD.timer = new ID.i(zD, (zD => {
          DD.timer = null, wD(zD)
        }), void 0, this.opts.visibility)
      }
      clearTimer(DD) {
        var zD;
        null === (zD = DD.timer) || void 0 === zD || zD.cancel(), DD.timer = null
      }
      answered(DD, zD, wD) {
        if ("lost" === wD.type) return void this.lose(DD, wD.reason);
        if (DD.starting) return "started" !== wD.type ? void this.lose(DD, `a model worker answered ${wD.type} before it started`) : (this.clearTimer(DD), DD.starting = !1, DD.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === wD.type || "dracoFailed" === wD.type) {
          if (wD.seq !== DD.installSeq) return;
          return void("installing" === DD.cI ? (this.clearTimer(DD), "dracoInstalled" === wD.type ? (DD.cI = "installed", this.pump()) : this.installFailed(DD, wD.reason)) : "dracoInstalled" === wD.type && "none" === DD.cI && DD.failedDownload === this.downloads && (DD.cI = "installed", DD.failedDownload = 0, this.pump()))
        }
        const pD = DD.job;
        null !== pD && "started" !== wD.type && wD.seq === DD.seq && ("trapped" !== wD.type ? (DD.job = null, DD.losses = 0, this.jobLosses = 0, pD.resolve(new Uint8Array(wD.record)), this.pump()) : this.lose(DD, wD.trap, !0))
      }
      install(DD, zD, wD) {
        const pD = this.nextSeq++;
        DD.cI = "installing", DD.installSeq = pD, this.startTimer(DD, 3e4, (zD => {
          this.installFailed(DD, `no install within ${Math.round(zD)} ms`)
        }));
        const sD = wD.script.slice(0),
          KD = wD.wasmBinary.slice(0);
        zD.postMessage({
          type: "installDraco",
          seq: pD,
          script: sD,
          wasmBinary: KD
        }, [sD, KD])
      }
      installFailed(DD, zD) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${zD}`), this.noInstall(DD, zD), this.pump()
      }
      noInstall(DD, zD) {
        DD.cI = "none", DD.failedDownload = this.downloads, this.installFailure = zD
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.cI || null !== this.files()) return;
        const DD = "uninstallable" === this.cI;
        this.cI = "downloading", this.opts.downloadFiles(DD).then((DD => {
          null === this.stopped && (this.cI = DD, this.downloads++, this.pump())
        }), (DD => {
          this.cI = null, this.decoderFailed(DD)
        }))
      }
      decoderFailed(DD) {
        if (null !== this.stopped) return;
        const zD = (0, LD.m)(DD);
        let wD = 0;
        for (const pD of this.queue.splice(0)) pD.draco ? (pD.resolve((0, fD.i)(pD.word, zD)), wD++) : this.queue.push(pD);
        wD > 0 && this.opts.onDecoderFailed(DD), this.pump()
      }
      run(DD, zD, wD) {
        const pD = this.nextSeq++;
        DD.seq = pD, DD.job = wD, wD.attempts++;
        const sD = wD.glb.slice();
        zD.postMessage({
          type: "job",
          seq: pD,
          word: wD.word,
          glb: sD.buffer
        }, [sD.buffer])
      }
      lose(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(DD);
        const pD = !wD && "installing" === DD.cI;
        void 0 !== DD.startedAt && performance.now() - DD.startedAt >= 6e4 && (DD.losses = 0), this.end(DD), DD.starting = !1, pD && this.noInstall(DD, zD);
        const sD = DD.job;
        if (DD.job = null, null !== sD || pD || DD.losses++, this.opts.onWorkerLost(zD), null !== sD && pD) sD.attempts--, this.queue.unshift(sD);
        else if (null !== sD && (sD.attempts < 2 ? this.queue.unshift(sD) : sD.resolve((0, fD.m)(sD.word, zD)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(DD) {
        if (null !== this.stopped) return;
        this.stopped = null === DD ? "the model workers stopped" : `the model workers could not start: ${(0,LD.m)(DD)}`;
        const zD = this.stopped,
          wD = DD => {
            DD.resolve((0, fD.q)(DD.word, zD))
          };
        for (const sD of this.slots) {
          var pD;
          this.clearTimer(sD), null === (pD = sD.worker) || void 0 === pD || pD.terminate(), sD.worker = null, null !== sD.job && wD(sD.job), sD.job = null
        }
        this.queue.splice(0).forEach(wD), null !== DD && this.opts.onUnavailable(DD)
      }
    }
    const hD = [...pD.r, 5e3, 15e3, 3e4];
    let nD = null;
    const MD = new Set;

    function OD(DD) {
      return MD.add(DD), nD ??= function() {
        let DD = (zD = navigator.hardwareConcurrency, LD = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, zD > 2 && !(0, UD.q)(LD) ? 2 : 1);
        var zD, LD;
        const gD = new GD({
          module: (0, sD.f)(KD.b, {
            delays: hD,
            onRetry: (DD, zD) => {
              nD === gD && JD((wD => {
                wD.onModuleRetry(DD, zD)
              }))
            }
          }),
          downloadFiles: RD(rD.b.scriptUrl, rD.b.wasmBinaryUrl),
          loadWorker: async () => (await wD.e(43).then((() => wD(61264)))).createModelWorker,
          count: DD,
          onUnavailable: DD => {
            if (nD === gD) {
              nD = null;
              const zD = function(DD) {
                return DD instanceof pD.e ? [KD.b.url().href] : void 0
              }(DD);
              JD((wD => {
                wD.onUnavailable(DD, zD)
              }))
            }
          },
          onDecoderFailed: DD => {
            if (nD === gD) {
              const zD = DD instanceof cD ? DD.goneUrl : null,
                wD = null === zD ? void 0 : [zD];
              JD((zD => {
                zD.onDecoderFailed(DD, wD)
              }))
            }
          },
          onWorkerLost: DD => {
            nD === gD && JD((zD => {
              zD.onWorkerLost(DD)
            }))
          }
        });
        return gD
      }(), {
        pool: nD,
        unlisten: () => {
          MD.delete(DD)
        }
      }
    }

    function JD(DD) {
      for (const wD of [...MD]) try {
        DD(wD)
      } catch (zD) {
        console.error("[pageModelPool] a listener threw", zD)
      }
    }
  },
  41405: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41409: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);