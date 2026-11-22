export const id = 42;
export const ids = [42];
export const modules = {
  41065: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk
    });
    var Dk = ik(131),
      fk = ik(1181);

    function Sk(kk) {
      return (0, Dk.e)() ? `https://${fk.e.discordDomain}/${kk.href}` : kk.href
    }
    const bk = {
      scriptUrl: Sk(new ik.U(ik(41068))),
      wasmBinaryUrl: Sk(new ik.U(ik(41070)))
    }
  },
  33848: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      e: () => Sk,
      i: () => bk
    });
    const Dk = 1179937895,
      fk = 1313821514;

    function Sk(kk) {
      const ek = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      if (kk.byteLength < 20 || ek.getUint32(0, !0) !== Dk || 2 !== ek.getUint32(4, !0)) return null;
      const ik = Math.min(ek.getUint32(8, !0), kk.byteLength),
        Sk = ek.getUint32(12, !0);
      if (ek.getUint32(16, !0) !== fk || 20 + Sk > ik) return null;
      let bk;
      try {
        bk = JSON.parse((new TextDecoder).decode(kk.subarray(20, 20 + Sk)))
      } catch {
        return null
      }
      return "object" === typeof bk && null !== bk ? {
        json: bk,
        jsonEnd: 20 + Sk,
        length: ik
      } : null
    }

    function bk(kk) {
      var ek;
      const ik = null === (ek = Sk(kk)) || void 0 === ek ? void 0 : ek.json;
      if (void 0 === ik || !Array.isArray(ik.extensionsUsed) || !ik.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Dk = ik.meshes;
      return Array.isArray(Dk) && Dk.some((kk => {
        const ek = null === kk || void 0 === kk ? void 0 : kk.primitives;
        return Array.isArray(ek) && ek.some((kk => {
          const ek = null === kk || void 0 === kk ? void 0 : kk.extensions;
          return null != (null === ek || void 0 === ek ? void 0 : ek.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  50602: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => lk,
      pageModelPool: () => Yk
    });
    var Dk = ik(2823),
      fk = ik(35878),
      Sk = ik(40452),
      bk = ik(41065),
      rk = ik(35843);
    Error;
    class Pk extends Error {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${kk}: ${ek}`), this.stage = kk, this.url = ik, this.status = Dk, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function mk(kk, ek) {
      let ik = null,
        fk = !1;
      return {
        get: () => {
          if (null === ik) {
            const Sk = async function(kk, ek) {
              try {
                return (await (0, Dk.M)(kk)).buffer
              } catch (ik) {
                throw new Pk(ek, (0, rk.j)(ik), kk, ik instanceof Dk.i ? ik.status : null)
              }
            }(kk, ek);
            ik = Sk, Sk.then((() => {
              fk = ik === Sk
            }), (() => {
              ik = null
            }))
          }
          return ik
        },
        forget: () => {
          fk && (ik = null, fk = !1)
        }
      }
    }

    function Mk(kk, ek) {
      const ik = mk(ek, "wasm"),
        Dk = mk(kk, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ik.forget(), Dk.forget());
        const [kk, ek] = await Promise.all([ik.get(), Dk.get()]);
        return {
          script: ek,
          wasmBinary: kk
        }
      }
    }
    var Kk = ik(33848),
      xk = ik(3082),
      nk = ik(40380),
      Uk = ik(40522);
    class Hk extends Error {
      constructor(kk) {
        super(`no model worker could install it: ${kk}`), this.name = "DracoInstallError"
      }
    }
    class wk {
      constructor(kk) {
        this.opts = kk, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.dU = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let ek = 0; ek < Math.max(1, kk.count); ek++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          dU: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((kk => null !== kk.job)).length
      }
      build(kk, ek) {
        if (null !== this.stopped) return Promise.resolve((0, nk.r)(kk, this.stopped));
        const ik = (0, Kk.i)(ek);
        return ik && this.downloadDecoder(), new Promise((Dk => {
          this.queue.push({
            word: kk,
            glb: ek,
            draco: ik,
            attempts: 0,
            resolve: Dk
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
        return "object" === typeof this.dU ? this.dU : null
      }
      pump() {
        const kk = this.resting && 0 === this.queue.length,
          ek = this.files();
        for (const ik of this.slots) {
          if (null !== this.stopped) return;
          if (ik.gaveUp || ik.starting) continue;
          if (null === ik.worker) {
            kk || this.start(ik);
            continue
          }
          if (kk) {
            null === ik.job && "installing" !== ik.dU && this.end(ik);
            continue
          }
          if (null !== ek && "none" === ik.dU && ik.failedDownload !== this.downloads && this.install(ik, ik.worker, ek), null !== ik.job) continue;
          const Dk = this.queue.findIndex((kk => "installed" === ik.dU || !kk.draco));
          Dk >= 0 && this.run(ik, ik.worker, this.queue.splice(Dk, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((kk => !kk.gaveUp && ("none" !== kk.dU || kk.failedDownload !== this.downloads))) || (this.dU = "uninstallable", this.decoderFailed(new Hk(this.installFailure)))
      }
      start(kk) {
        if (kk.losses >= 6) return kk.gaveUp = !0, void(this.slots.every((kk => kk.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        kk.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((ek => {
          let [ik, Dk] = ek;
          null === this.stopped && this.launch(kk, ik, Dk)
        }), (kk => {
          this.fail(kk)
        }))
      }
      launch(kk, ek, ik) {
        let Dk;
        try {
          Dk = ek()
        } catch (fk) {
          return void this.lose(kk, `a model worker could not be created (${String(fk)})`)
        }
        kk.worker = Dk, this.startTimer(kk, 3e4, (ek => {
          this.lose(kk, `a model worker did not start: ${(0,Uk.h)(ek)}`)
        })), Dk.onmessage = ek => {
          let {
            data: ik
          } = ek;
          this.answered(kk, Dk, ik)
        }, Dk.onerror = ek => {
          this.lose(kk, kk.starting ? `a model worker failed to start: ${ek.message}` : `a model worker failed: ${ek.message}`)
        }, Dk.postMessage({
          type: "start",
          module: ik
        })
      }
      end(kk) {
        const ek = kk.worker;
        null !== ek && (ek.onmessage = null, ek.onerror = null, ek.terminate()), kk.worker = null, kk.dU = "none", kk.startedAt = void 0
      }
      startTimer(kk, ek, ik) {
        kk.timer = new Uk.e(ek, (ek => {
          kk.timer = null, ik(ek)
        }), void 0, this.opts.visibility)
      }
      clearTimer(kk) {
        var ek;
        null === (ek = kk.timer) || void 0 === ek || ek.cancel(), kk.timer = null
      }
      answered(kk, ek, ik) {
        if ("lost" === ik.type) return void this.lose(kk, ik.reason);
        if (kk.starting) return "started" !== ik.type ? void this.lose(kk, `a model worker answered ${ik.type} before it started`) : (this.clearTimer(kk), kk.starting = !1, kk.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === ik.type || "dracoFailed" === ik.type) {
          if (ik.seq !== kk.installSeq) return;
          return void("installing" === kk.dU ? (this.clearTimer(kk), "dracoInstalled" === ik.type ? (kk.dU = "installed", this.pump()) : this.installFailed(kk, ik.reason)) : "dracoInstalled" === ik.type && "none" === kk.dU && kk.failedDownload === this.downloads && (kk.dU = "installed", kk.failedDownload = 0, this.pump()))
        }
        const Dk = kk.job;
        null !== Dk && "started" !== ik.type && ik.seq === kk.seq && ("trapped" !== ik.type ? (kk.job = null, kk.losses = 0, this.jobLosses = 0, Dk.resolve(new Uint8Array(ik.record)), this.pump()) : this.lose(kk, ik.trap, !0))
      }
      install(kk, ek, ik) {
        const Dk = this.nextSeq++;
        kk.dU = "installing", kk.installSeq = Dk, this.startTimer(kk, 3e4, (ek => {
          this.installFailed(kk, `no install within ${Math.round(ek)} ms`)
        }));
        const fk = ik.script.slice(0),
          Sk = ik.wasmBinary.slice(0);
        ek.postMessage({
          type: "installDraco",
          seq: Dk,
          script: fk,
          wasmBinary: Sk
        }, [fk, Sk])
      }
      installFailed(kk, ek) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${ek}`), this.noInstall(kk, ek), this.pump()
      }
      noInstall(kk, ek) {
        kk.dU = "none", kk.failedDownload = this.downloads, this.installFailure = ek
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.dU || null !== this.files()) return;
        const kk = "uninstallable" === this.dU;
        this.dU = "downloading", this.opts.downloadFiles(kk).then((kk => {
          null === this.stopped && (this.dU = kk, this.downloads++, this.pump())
        }), (kk => {
          this.dU = null, this.decoderFailed(kk)
        }))
      }
      decoderFailed(kk) {
        if (null !== this.stopped) return;
        const ek = (0, rk.j)(kk);
        let ik = 0;
        for (const Dk of this.queue.splice(0)) Dk.draco ? (Dk.resolve((0, nk.h)(Dk.word, ek)), ik++) : this.queue.push(Dk);
        ik > 0 && this.opts.onDecoderFailed(kk), this.pump()
      }
      run(kk, ek, ik) {
        const Dk = this.nextSeq++;
        kk.seq = Dk, kk.job = ik, ik.attempts++;
        const fk = ik.glb.slice();
        ek.postMessage({
          type: "job",
          seq: Dk,
          word: ik.word,
          glb: fk.buffer
        }, [fk.buffer])
      }
      lose(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(kk);
        const Dk = !ik && "installing" === kk.dU;
        void 0 !== kk.startedAt && performance.now() - kk.startedAt >= 6e4 && (kk.losses = 0), this.end(kk), kk.starting = !1, Dk && this.noInstall(kk, ek);
        const fk = kk.job;
        if (kk.job = null, null !== fk || Dk || kk.losses++, this.opts.onWorkerLost(ek), null !== fk && Dk) fk.attempts--, this.queue.unshift(fk);
        else if (null !== fk && (fk.attempts < 2 ? this.queue.unshift(fk) : fk.resolve((0, nk.o)(fk.word, ek)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(kk) {
        if (null !== this.stopped) return;
        this.stopped = null === kk ? "the model workers stopped" : `the model workers could not start: ${(0,rk.j)(kk)}`;
        const ek = this.stopped,
          ik = kk => {
            kk.resolve((0, nk.r)(kk.word, ek))
          };
        for (const fk of this.slots) {
          var Dk;
          this.clearTimer(fk), null === (Dk = fk.worker) || void 0 === Dk || Dk.terminate(), fk.worker = null, null !== fk.job && ik(fk.job), fk.job = null
        }
        this.queue.splice(0).forEach(ik), null !== kk && this.opts.onUnavailable(kk)
      }
    }
    const lk = [...Dk.s, 5e3, 15e3, 3e4];
    let pk = null;
    const yk = new Set;

    function Yk(kk) {
      return yk.add(kk), pk ??= function() {
        let kk = (ek = navigator.hardwareConcurrency, rk = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, ek > 2 && !(0, xk.t)(rk) ? 2 : 1);
        var ek, rk;
        const mk = new wk({
          module: (0, fk.e)(Sk.e, {
            delays: lk,
            onRetry: (kk, ek) => {
              pk === mk && Lk((ik => {
                ik.onModuleRetry(kk, ek)
              }))
            }
          }),
          downloadFiles: Mk(bk.b.scriptUrl, bk.b.wasmBinaryUrl),
          loadWorker: async () => (await ik.e(43).then((() => ik(60888)))).createModelWorker,
          count: kk,
          onUnavailable: kk => {
            if (pk === mk) {
              pk = null;
              const ek = function(kk) {
                return kk instanceof Dk.e ? [Sk.e.url().href] : void 0
              }(kk);
              Lk((ik => {
                ik.onUnavailable(kk, ek)
              }))
            }
          },
          onDecoderFailed: kk => {
            if (pk === mk) {
              const ek = kk instanceof Pk ? kk.goneUrl : null,
                ik = null === ek ? void 0 : [ek];
              Lk((ek => {
                ek.onDecoderFailed(kk, ik)
              }))
            }
          },
          onWorkerLost: kk => {
            pk === mk && Lk((ek => {
              ek.onWorkerLost(kk)
            }))
          }
        });
        return mk
      }(), {
        pool: pk,
        unlisten: () => {
          yk.delete(kk)
        }
      }
    }

    function Lk(kk) {
      for (const ik of [...yk]) try {
        kk(ik)
      } catch (ek) {
        console.error("[pageModelPool] a listener threw", ek)
      }
    }
  },
  41070: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  41068: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);