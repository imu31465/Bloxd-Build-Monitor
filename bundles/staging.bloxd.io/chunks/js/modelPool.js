export const id = 42;
export const ids = [42];
export const modules = {
  40931: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk
    });
    var Rk = Bk(132),
      tk = Bk(1157);

    function ak(kk) {
      return (0, Rk.c)() ? `https://${tk.b.discordDomain}/${kk.href}` : kk.href
    }
    const Xk = {
      scriptUrl: ak(new Bk.U(Bk(40936))),
      wasmBinaryUrl: ak(new Bk.U(Bk(40939)))
    }
  },
  9082: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => tk,
      h: () => ak,
      l: () => Xk
    });
    const Rk = 1179937895,
      tk = 1313821514;

    function ak(kk) {
      const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      if (kk.byteLength < 20 || Fk.getUint32(0, !0) !== Rk || 2 !== Fk.getUint32(4, !0)) return null;
      const Bk = Math.min(Fk.getUint32(8, !0), kk.byteLength),
        ak = Fk.getUint32(12, !0);
      if (Fk.getUint32(16, !0) !== tk || 20 + ak > Bk) return null;
      let Xk;
      try {
        Xk = JSON.parse((new TextDecoder).decode(kk.subarray(20, 20 + ak)))
      } catch {
        return null
      }
      return "object" === typeof Xk && null !== Xk ? {
        json: Xk,
        jsonEnd: 20 + ak,
        length: Bk
      } : null
    }

    function Xk(kk) {
      var Fk;
      const Bk = null === (Fk = ak(kk)) || void 0 === Fk ? void 0 : Fk.json;
      if (void 0 === Bk || !Array.isArray(Bk.extensionsUsed) || !Bk.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Rk = Bk.meshes;
      return Array.isArray(Rk) && Rk.some((kk => {
        const Fk = null === kk || void 0 === kk ? void 0 : kk.primitives;
        return Array.isArray(Fk) && Fk.some((kk => {
          const Fk = null === kk || void 0 === kk ? void 0 : kk.extensions;
          return null != (null === Fk || void 0 === Fk ? void 0 : Fk.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42819: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => mk,
      pageModelPool: () => ik
    });
    var Rk = Bk(3506),
      tk = Bk(36046),
      ak = Bk(40171),
      Xk = Bk(40931),
      bk = Bk(36019);
    Error;
    class wk extends Error {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${kk}: ${Fk}`), this.stage = kk, this.url = Bk, this.status = Rk, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function dk(kk, Fk) {
      let Bk = null,
        tk = !1;
      return {
        get: () => {
          if (null === Bk) {
            const ak = async function(kk, Fk) {
              try {
                return (await (0, Rk.N)(kk)).buffer
              } catch (Bk) {
                throw new wk(Fk, (0, bk.j)(Bk), kk, Bk instanceof Rk.g ? Bk.status : null)
              }
            }(kk, Fk);
            Bk = ak, ak.then((() => {
              tk = Bk === ak
            }), (() => {
              Bk = null
            }))
          }
          return Bk
        },
        forget: () => {
          tk && (Bk = null, tk = !1)
        }
      }
    }

    function sk(kk, Fk) {
      const Bk = dk(Fk, "wasm"),
        Rk = dk(kk, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Bk.forget(), Rk.forget());
        const [kk, Fk] = await Promise.all([Bk.get(), Rk.get()]);
        return {
          script: Fk,
          wasmBinary: kk
        }
      }
    }
    var Vk = Bk(9082),
      Jk = Bk(2906),
      Ak = Bk(40393),
      ek = Bk(40431);
    class yk extends Error {
      constructor(kk) {
        super(`no model worker could install it: ${kk}`), this.name = "DracoInstallError"
      }
    }
    class fk {
      constructor(kk) {
        this.opts = kk, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.Le = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let Fk = 0; Fk < Math.max(1, kk.count); Fk++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          Le: "none",
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
      build(kk, Fk) {
        if (null !== this.stopped) return Promise.resolve((0, Ak.p)(kk, this.stopped));
        const Bk = (0, Vk.l)(Fk);
        return Bk && this.downloadDecoder(), new Promise((Rk => {
          this.queue.push({
            word: kk,
            glb: Fk,
            draco: Bk,
            attempts: 0,
            resolve: Rk
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.Le ? this.Le : null
      }
      pump() {
        const kk = this.files();
        for (const Fk of this.slots) {
          if (null !== this.stopped) return;
          if (Fk.gaveUp || Fk.starting) continue;
          if (null === Fk.worker) {
            this.start(Fk);
            continue
          }
          if (null !== kk && "none" === Fk.Le && Fk.failedDownload !== this.downloads && this.install(Fk, Fk.worker, kk), null !== Fk.job) continue;
          const Bk = this.queue.findIndex((kk => "installed" === Fk.Le || !kk.draco));
          Bk >= 0 && this.run(Fk, Fk.worker, this.queue.splice(Bk, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((kk => !kk.gaveUp && ("none" !== kk.Le || kk.failedDownload !== this.downloads))) || (this.Le = "uninstallable", this.decoderFailed(new yk(this.installFailure)))
      }
      start(kk) {
        if (kk.losses >= 6) return kk.gaveUp = !0, void(this.slots.every((kk => kk.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        kk.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((Fk => {
          let [Bk, Rk] = Fk;
          null === this.stopped && this.launch(kk, Bk, Rk)
        }), (kk => {
          this.fail(kk)
        }))
      }
      launch(kk, Fk, Bk) {
        let Rk;
        try {
          Rk = Fk()
        } catch (tk) {
          return void this.lose(kk, `a model worker could not be created (${String(tk)})`)
        }
        kk.worker = Rk, this.startTimer(kk, 3e4, (Fk => {
          this.lose(kk, `a model worker did not start: ${(0,ek.i)(Fk)}`)
        })), Rk.onmessage = Fk => {
          let {
            data: Bk
          } = Fk;
          this.answered(kk, Rk, Bk)
        }, Rk.onerror = Fk => {
          this.lose(kk, kk.starting ? `a model worker failed to start: ${Fk.message}` : `a model worker failed: ${Fk.message}`)
        }, Rk.postMessage({
          type: "start",
          module: Bk
        })
      }
      startTimer(kk, Fk, Bk) {
        kk.timer = new ek.f(Fk, (Fk => {
          kk.timer = null, Bk(Fk)
        }), void 0, this.opts.visibility)
      }
      clearTimer(kk) {
        var Fk;
        null === (Fk = kk.timer) || void 0 === Fk || Fk.cancel(), kk.timer = null
      }
      answered(kk, Fk, Bk) {
        if ("lost" === Bk.type) return void this.lose(kk, Bk.reason);
        if (kk.starting) return "started" !== Bk.type ? void this.lose(kk, `a model worker answered ${Bk.type} before it started`) : (this.clearTimer(kk), kk.starting = !1, kk.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === Bk.type || "dracoFailed" === Bk.type) {
          if (Bk.seq !== kk.installSeq) return;
          return void("installing" === kk.Le ? (this.clearTimer(kk), "dracoInstalled" === Bk.type ? (kk.Le = "installed", this.pump()) : this.installFailed(kk, Bk.reason)) : "dracoInstalled" === Bk.type && "none" === kk.Le && kk.failedDownload === this.downloads && (kk.Le = "installed", this.pump()))
        }
        const Rk = kk.job;
        null !== Rk && "started" !== Bk.type && Bk.seq === kk.seq && ("trapped" !== Bk.type ? (kk.job = null, kk.losses = 0, this.jobLosses = 0, Rk.resolve(new Uint8Array(Bk.record)), this.pump()) : this.lose(kk, Bk.trap, !0))
      }
      install(kk, Fk, Bk) {
        const Rk = this.nextSeq++;
        kk.Le = "installing", kk.installSeq = Rk, this.startTimer(kk, 3e4, (Fk => {
          this.installFailed(kk, `no install within ${Math.round(Fk)} ms`)
        }));
        const tk = Bk.script.slice(0),
          ak = Bk.wasmBinary.slice(0);
        Fk.postMessage({
          type: "installDraco",
          seq: Rk,
          script: tk,
          wasmBinary: ak
        }, [tk, ak])
      }
      installFailed(kk, Fk) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${Fk}`), this.noInstall(kk, Fk), this.pump()
      }
      noInstall(kk, Fk) {
        kk.Le = "none", kk.failedDownload = this.downloads, this.installFailure = Fk
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.Le || null !== this.files()) return;
        const kk = "uninstallable" === this.Le;
        this.Le = "downloading", this.opts.downloadFiles(kk).then((kk => {
          null === this.stopped && (this.Le = kk, this.downloads++, this.pump())
        }), (kk => {
          this.Le = null, this.decoderFailed(kk)
        }))
      }
      decoderFailed(kk) {
        if (null !== this.stopped) return;
        const Fk = (0, bk.j)(kk);
        let Bk = 0;
        for (const Rk of this.queue.splice(0)) Rk.draco ? (Rk.resolve((0, Ak.i)(Rk.word, Fk)), Bk++) : this.queue.push(Rk);
        Bk > 0 && this.opts.onDecoderFailed(kk)
      }
      run(kk, Fk, Bk) {
        const Rk = this.nextSeq++;
        kk.seq = Rk, kk.job = Bk, Bk.attempts++;
        const tk = Bk.glb.slice();
        Fk.postMessage({
          type: "job",
          seq: Rk,
          word: Bk.word,
          glb: tk.buffer
        }, [tk.buffer])
      }
      lose(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(kk);
        const Rk = kk.worker;
        null !== Rk && (Rk.onmessage = null, Rk.onerror = null, Rk.terminate());
        const tk = !Bk && "installing" === kk.Le;
        kk.worker = null, kk.starting = !1, kk.Le = "none", tk && this.noInstall(kk, Fk), void 0 !== kk.startedAt && performance.now() - kk.startedAt >= 6e4 && (kk.losses = 0), kk.startedAt = void 0;
        const ak = kk.job;
        if (kk.job = null, null !== ak || tk || kk.losses++, this.opts.onWorkerLost(Fk), null !== ak && tk) ak.attempts--, this.queue.unshift(ak);
        else if (null !== ak && (ak.attempts < 2 ? this.queue.unshift(ak) : ak.resolve((0, Ak.o)(ak.word, Fk)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(kk) {
        if (null !== this.stopped) return;
        this.stopped = null === kk ? "the model workers stopped" : `the model workers could not start: ${(0,bk.j)(kk)}`;
        const Fk = this.stopped,
          Bk = kk => {
            kk.resolve((0, Ak.p)(kk.word, Fk))
          };
        for (const tk of this.slots) {
          var Rk;
          this.clearTimer(tk), null === (Rk = tk.worker) || void 0 === Rk || Rk.terminate(), tk.worker = null, null !== tk.job && Bk(tk.job), tk.job = null
        }
        this.queue.splice(0).forEach(Bk), null !== kk && this.opts.onUnavailable(kk)
      }
    }
    const mk = [...Rk.v, 5e3, 15e3, 3e4];
    let Wk = null;
    const vk = new Set;

    function ik(kk) {
      return vk.add(kk), Wk ??= function() {
        let kk = (Fk = navigator.hardwareConcurrency, bk = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, Fk > 2 && !(0, Jk.o)(bk) ? 2 : 1);
        var Fk, bk;
        const dk = new fk({
          module: (0, tk.d)(ak.d, {
            delays: mk,
            onRetry: (kk, Fk) => {
              Wk === dk && Yk((Bk => {
                Bk.onModuleRetry(kk, Fk)
              }))
            }
          }),
          downloadFiles: sk(Xk.e.scriptUrl, Xk.e.wasmBinaryUrl),
          loadWorker: async () => (await Bk.e(43).then((() => Bk(61254)))).createModelWorker,
          count: kk,
          onUnavailable: kk => {
            if (Wk === dk) {
              Wk = null;
              const Fk = function(kk) {
                return kk instanceof Rk.e ? [ak.d.url().href] : void 0
              }(kk);
              Yk((Bk => {
                Bk.onUnavailable(kk, Fk)
              }))
            }
          },
          onDecoderFailed: kk => {
            if (Wk === dk) {
              const Fk = kk instanceof wk ? kk.goneUrl : null,
                Bk = null === Fk ? void 0 : [Fk];
              Yk((Fk => {
                Fk.onDecoderFailed(kk, Bk)
              }))
            }
          },
          onWorkerLost: kk => {
            Wk === dk && Yk((Fk => {
              Fk.onWorkerLost(kk)
            }))
          }
        });
        return dk
      }(), {
        pool: Wk,
        unlisten: () => {
          vk.delete(kk)
        }
      }
    }

    function Yk(kk) {
      for (const Bk of [...vk]) try {
        kk(Bk)
      } catch (Fk) {
        console.error("[pageModelPool] a listener threw", Fk)
      }
    }
  },
  40936: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40939: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);