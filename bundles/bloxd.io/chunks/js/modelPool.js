export const id = 42;
export const ids = [42];
export const modules = {
  41499: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(129),
      Tk = Ik(1078);

    function ik(kk) {
      return (0, Xk.e)() ? `https://${Tk.e.discordDomain}/${kk.href}` : kk.href
    }
    const yk = {
      scriptUrl: ik(new Ik.U(Ik(41502))),
      wasmBinaryUrl: ik(new Ik.U(Ik(41511)))
    }
  },
  34266: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      g: () => ik,
      h: () => yk
    });
    const Xk = 1179937895,
      Tk = 1313821514;

    function ik(kk) {
      const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      if (kk.byteLength < 20 || Fk.getUint32(0, !0) !== Xk || 2 !== Fk.getUint32(4, !0)) return null;
      const Ik = Math.min(Fk.getUint32(8, !0), kk.byteLength),
        ik = Fk.getUint32(12, !0);
      if (Fk.getUint32(16, !0) !== Tk || 20 + ik > Ik) return null;
      let yk;
      try {
        yk = JSON.parse((new TextDecoder).decode(kk.subarray(20, 20 + ik)))
      } catch {
        return null
      }
      return "object" === typeof yk && null !== yk ? {
        json: yk,
        jsonEnd: 20 + ik,
        length: Ik
      } : null
    }

    function yk(kk) {
      var Fk;
      const Ik = null === (Fk = ik(kk)) || void 0 === Fk ? void 0 : Fk.json;
      if (void 0 === Ik || !Array.isArray(Ik.extensionsUsed) || !Ik.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Xk = Ik.meshes;
      return Array.isArray(Xk) && Xk.some((kk => {
        const Fk = null === kk || void 0 === kk ? void 0 : kk.primitives;
        return Array.isArray(Fk) && Fk.some((kk => {
          const Fk = null === kk || void 0 === kk ? void 0 : kk.extensions;
          return null != (null === Fk || void 0 === Fk ? void 0 : Fk.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  51022: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => Jk,
      pageModelPool: () => Kk
    });
    var Xk = Ik(2803),
      Tk = Ik(36297),
      ik = Ik(40870),
      yk = Ik(41499),
      lk = Ik(36249);
    Error;
    class ak extends Error {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${kk}: ${Fk}`), this.stage = kk, this.url = Ik, this.status = Xk, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function qk(kk, Fk) {
      let Ik = null,
        Tk = !1;
      return {
        get: () => {
          if (null === Ik) {
            const ik = async function(kk, Fk) {
              try {
                return (await (0, Xk.K)(kk)).buffer
              } catch (Ik) {
                throw new ak(Fk, (0, lk.j)(Ik), kk, Ik instanceof Xk.f ? Ik.status : null)
              }
            }(kk, Fk);
            Ik = ik, ik.then((() => {
              Tk = Ik === ik
            }), (() => {
              Ik = null
            }))
          }
          return Ik
        },
        forget: () => {
          Tk && (Ik = null, Tk = !1)
        }
      }
    }

    function Lk(kk, Fk) {
      const Ik = qk(Fk, "wasm"),
        Xk = qk(kk, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Ik.forget(), Xk.forget());
        const [kk, Fk] = await Promise.all([Ik.get(), Xk.get()]);
        return {
          script: Fk,
          wasmBinary: kk
        }
      }
    }
    var tk = Ik(34266),
      Zk = Ik(3047),
      jk = Ik(40808),
      ek = Ik(40937);
    class wk extends Error {
      constructor(kk) {
        super(`no model worker could install it: ${kk}`), this.name = "DracoInstallError"
      }
    }
    class Hk {
      constructor(kk) {
        this.opts = kk, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.Xe = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let Fk = 0; Fk < Math.max(1, kk.count); Fk++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          Xe: "none",
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
        if (null !== this.stopped) return Promise.resolve((0, jk.q)(kk, this.stopped));
        const Ik = (0, tk.h)(Fk);
        return Ik && this.downloadDecoder(), new Promise((Xk => {
          this.queue.push({
            word: kk,
            glb: Fk,
            draco: Ik,
            attempts: 0,
            resolve: Xk
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
        return "object" === typeof this.Xe ? this.Xe : null
      }
      pump() {
        const kk = this.resting && 0 === this.queue.length,
          Fk = this.files();
        for (const Ik of this.slots) {
          if (null !== this.stopped) return;
          if (Ik.gaveUp || Ik.starting) continue;
          if (null === Ik.worker) {
            kk || this.start(Ik);
            continue
          }
          if (kk) {
            null === Ik.job && "installing" !== Ik.Xe && this.end(Ik);
            continue
          }
          if (null !== Fk && "none" === Ik.Xe && Ik.failedDownload !== this.downloads && this.install(Ik, Ik.worker, Fk), null !== Ik.job) continue;
          const Xk = this.queue.findIndex((kk => "installed" === Ik.Xe || !kk.draco));
          Xk >= 0 && this.run(Ik, Ik.worker, this.queue.splice(Xk, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((kk => !kk.gaveUp && ("none" !== kk.Xe || kk.failedDownload !== this.downloads))) || (this.Xe = "uninstallable", this.decoderFailed(new wk(this.installFailure)))
      }
      start(kk) {
        if (kk.losses >= 6) return kk.gaveUp = !0, void(this.slots.every((kk => kk.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        kk.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((Fk => {
          let [Ik, Xk] = Fk;
          null === this.stopped && this.launch(kk, Ik, Xk)
        }), (kk => {
          this.fail(kk)
        }))
      }
      launch(kk, Fk, Ik) {
        let Xk;
        try {
          Xk = Fk()
        } catch (Tk) {
          return void this.lose(kk, `a model worker could not be created (${String(Tk)})`)
        }
        kk.worker = Xk, this.startTimer(kk, 3e4, (Fk => {
          this.lose(kk, `a model worker did not start: ${(0,ek.i)(Fk)}`)
        })), Xk.onmessage = Fk => {
          let {
            data: Ik
          } = Fk;
          this.answered(kk, Xk, Ik)
        }, Xk.onerror = Fk => {
          this.lose(kk, kk.starting ? `a model worker failed to start: ${Fk.message}` : `a model worker failed: ${Fk.message}`)
        }, Xk.postMessage({
          type: "start",
          module: Ik
        })
      }
      end(kk) {
        const Fk = kk.worker;
        null !== Fk && (Fk.onmessage = null, Fk.onerror = null, Fk.terminate()), kk.worker = null, kk.Xe = "none", kk.startedAt = void 0
      }
      startTimer(kk, Fk, Ik) {
        kk.timer = new ek.g(Fk, (Fk => {
          kk.timer = null, Ik(Fk)
        }), void 0, this.opts.visibility)
      }
      clearTimer(kk) {
        var Fk;
        null === (Fk = kk.timer) || void 0 === Fk || Fk.cancel(), kk.timer = null
      }
      answered(kk, Fk, Ik) {
        if ("lost" === Ik.type) return void this.lose(kk, Ik.reason);
        if (kk.starting) return "started" !== Ik.type ? void this.lose(kk, `a model worker answered ${Ik.type} before it started`) : (this.clearTimer(kk), kk.starting = !1, kk.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === Ik.type || "dracoFailed" === Ik.type) {
          if (Ik.seq !== kk.installSeq) return;
          return void("installing" === kk.Xe ? (this.clearTimer(kk), "dracoInstalled" === Ik.type ? (kk.Xe = "installed", this.pump()) : this.installFailed(kk, Ik.reason)) : "dracoInstalled" === Ik.type && "none" === kk.Xe && kk.failedDownload === this.downloads && (kk.Xe = "installed", kk.failedDownload = 0, this.pump()))
        }
        const Xk = kk.job;
        null !== Xk && "started" !== Ik.type && Ik.seq === kk.seq && ("trapped" !== Ik.type ? (kk.job = null, kk.losses = 0, this.jobLosses = 0, Xk.resolve(new Uint8Array(Ik.record)), this.pump()) : this.lose(kk, Ik.trap, !0))
      }
      install(kk, Fk, Ik) {
        const Xk = this.nextSeq++;
        kk.Xe = "installing", kk.installSeq = Xk, this.startTimer(kk, 3e4, (Fk => {
          this.installFailed(kk, `no install within ${Math.round(Fk)} ms`)
        }));
        const Tk = Ik.script.slice(0),
          ik = Ik.wasmBinary.slice(0);
        Fk.postMessage({
          type: "installDraco",
          seq: Xk,
          script: Tk,
          wasmBinary: ik
        }, [Tk, ik])
      }
      installFailed(kk, Fk) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${Fk}`), this.noInstall(kk, Fk), this.pump()
      }
      noInstall(kk, Fk) {
        kk.Xe = "none", kk.failedDownload = this.downloads, this.installFailure = Fk
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.Xe || null !== this.files()) return;
        const kk = "uninstallable" === this.Xe;
        this.Xe = "downloading", this.opts.downloadFiles(kk).then((kk => {
          null === this.stopped && (this.Xe = kk, this.downloads++, this.pump())
        }), (kk => {
          this.Xe = null, this.decoderFailed(kk)
        }))
      }
      decoderFailed(kk) {
        if (null !== this.stopped) return;
        const Fk = (0, lk.j)(kk);
        let Ik = 0;
        for (const Xk of this.queue.splice(0)) Xk.draco ? (Xk.resolve((0, jk.i)(Xk.word, Fk)), Ik++) : this.queue.push(Xk);
        Ik > 0 && this.opts.onDecoderFailed(kk), this.pump()
      }
      run(kk, Fk, Ik) {
        const Xk = this.nextSeq++;
        kk.seq = Xk, kk.job = Ik, Ik.attempts++;
        const Tk = Ik.glb.slice();
        Fk.postMessage({
          type: "job",
          seq: Xk,
          word: Ik.word,
          glb: Tk.buffer
        }, [Tk.buffer])
      }
      lose(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(kk);
        const Xk = !Ik && "installing" === kk.Xe;
        void 0 !== kk.startedAt && performance.now() - kk.startedAt >= 6e4 && (kk.losses = 0), this.end(kk), kk.starting = !1, Xk && this.noInstall(kk, Fk);
        const Tk = kk.job;
        if (kk.job = null, null !== Tk || Xk || kk.losses++, this.opts.onWorkerLost(Fk), null !== Tk && Xk) Tk.attempts--, this.queue.unshift(Tk);
        else if (null !== Tk && (Tk.attempts < 2 ? this.queue.unshift(Tk) : Tk.resolve((0, jk.p)(Tk.word, Fk)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(kk) {
        if (null !== this.stopped) return;
        this.stopped = null === kk ? "the model workers stopped" : `the model workers could not start: ${(0,lk.j)(kk)}`;
        const Fk = this.stopped,
          Ik = kk => {
            kk.resolve((0, jk.q)(kk.word, Fk))
          };
        for (const Tk of this.slots) {
          var Xk;
          this.clearTimer(Tk), null === (Xk = Tk.worker) || void 0 === Xk || Xk.terminate(), Tk.worker = null, null !== Tk.job && Ik(Tk.job), Tk.job = null
        }
        this.queue.splice(0).forEach(Ik), null !== kk && this.opts.onUnavailable(kk)
      }
    }
    const Jk = [...Xk.s, 5e3, 15e3, 3e4];
    let xk = null;
    const Pk = new Set;

    function Kk(kk) {
      return Pk.add(kk), xk ??= function() {
        let kk = (Fk = navigator.hardwareConcurrency, lk = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, Fk > 2 && !(0, Zk.r)(lk) ? 2 : 1);
        var Fk, lk;
        const qk = new Hk({
          module: (0, Tk.c)(ik.c, {
            delays: Jk,
            onRetry: (kk, Fk) => {
              xk === qk && Qk((Ik => {
                Ik.onModuleRetry(kk, Fk)
              }))
            }
          }),
          downloadFiles: Lk(yk.d.scriptUrl, yk.d.wasmBinaryUrl),
          loadWorker: async () => (await Ik.e(43).then((() => Ik(61483)))).createModelWorker,
          count: kk,
          onUnavailable: kk => {
            if (xk === qk) {
              xk = null;
              const Fk = function(kk) {
                return kk instanceof Xk.d ? [ik.c.url().href] : void 0
              }(kk);
              Qk((Ik => {
                Ik.onUnavailable(kk, Fk)
              }))
            }
          },
          onDecoderFailed: kk => {
            if (xk === qk) {
              const Fk = kk instanceof ak ? kk.goneUrl : null,
                Ik = null === Fk ? void 0 : [Fk];
              Qk((Fk => {
                Fk.onDecoderFailed(kk, Ik)
              }))
            }
          },
          onWorkerLost: kk => {
            xk === qk && Qk((Fk => {
              Fk.onWorkerLost(kk)
            }))
          }
        });
        return qk
      }(), {
        pool: xk,
        unlisten: () => {
          Pk.delete(kk)
        }
      }
    }

    function Qk(kk) {
      for (const Ik of [...Pk]) try {
        kk(Ik)
      } catch (Fk) {
        console.error("[pageModelPool] a listener threw", Fk)
      }
    }
  },
  41502: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41511: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);