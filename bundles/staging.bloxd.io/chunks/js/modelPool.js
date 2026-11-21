export const id = 42;
export const ids = [42];
export const modules = {
  41462: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    var pd = kd(126),
      Nd = kd(1227);

    function Wd(dd) {
      return (0, pd.e)() ? `https://${Nd.b.discordDomain}/${dd.href}` : dd.href
    }
    const Pd = {
      scriptUrl: Wd(new kd.U(kd(41467))),
      wasmBinaryUrl: Wd(new kd.U(kd(41475)))
    }
  },
  9323: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      g: () => Wd,
      k: () => Pd
    });
    const pd = 1179937895,
      Nd = 1313821514;

    function Wd(dd) {
      const Jd = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
      if (dd.byteLength < 20 || Jd.getUint32(0, !0) !== pd || 2 !== Jd.getUint32(4, !0)) return null;
      const kd = Math.min(Jd.getUint32(8, !0), dd.byteLength),
        Wd = Jd.getUint32(12, !0);
      if (Jd.getUint32(16, !0) !== Nd || 20 + Wd > kd) return null;
      let Pd;
      try {
        Pd = JSON.parse((new TextDecoder).decode(dd.subarray(20, 20 + Wd)))
      } catch {
        return null
      }
      return "object" === typeof Pd && null !== Pd ? {
        json: Pd,
        jsonEnd: 20 + Wd,
        length: kd
      } : null
    }

    function Pd(dd) {
      var Jd;
      const kd = null === (Jd = Wd(dd)) || void 0 === Jd ? void 0 : Jd.json;
      if (void 0 === kd || !Array.isArray(kd.extensionsUsed) || !kd.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const pd = kd.meshes;
      return Array.isArray(pd) && pd.some((dd => {
        const Jd = null === dd || void 0 === dd ? void 0 : dd.primitives;
        return Array.isArray(Jd) && Jd.some((dd => {
          const Jd = null === dd || void 0 === dd ? void 0 : dd.extensions;
          return null != (null === Jd || void 0 === Jd ? void 0 : Jd.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  43280: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => Rd,
      pageModelPool: () => vd
    });
    var pd = kd(2770),
      Nd = kd(36480),
      Wd = kd(40745),
      Pd = kd(41462),
      Zd = kd(36458);
    Error;
    class gd extends Error {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${dd}: ${Jd}`), this.stage = dd, this.url = kd, this.status = pd, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function Cd(dd, Jd) {
      let kd = null,
        Nd = !1;
      return {
        get: () => {
          if (null === kd) {
            const Wd = async function(dd, Jd) {
              try {
                return (await (0, pd.D)(dd)).buffer
              } catch (kd) {
                throw new gd(Jd, (0, Zd.j)(kd), dd, kd instanceof pd.e ? kd.status : null)
              }
            }(dd, Jd);
            kd = Wd, Wd.then((() => {
              Nd = kd === Wd
            }), (() => {
              kd = null
            }))
          }
          return kd
        },
        forget: () => {
          Nd && (kd = null, Nd = !1)
        }
      }
    }

    function Kd(dd, Jd) {
      const kd = Cd(Jd, "wasm"),
        pd = Cd(dd, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (kd.forget(), pd.forget());
        const [dd, Jd] = await Promise.all([kd.get(), pd.get()]);
        return {
          script: Jd,
          wasmBinary: dd
        }
      }
    }
    var od = kd(9323),
      ld = kd(2980),
      Qd = kd(40972),
      Ld = kd(40999);
    class Od extends Error {
      constructor(dd) {
        super(`no model worker could install it: ${dd}`), this.name = "DracoInstallError"
      }
    }
    class ed {
      constructor(dd) {
        this.opts = dd, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.rQ = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let Jd = 0; Jd < Math.max(1, dd.count); Jd++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          rQ: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((dd => null !== dd.job)).length
      }
      build(dd, Jd) {
        if (null !== this.stopped) return Promise.resolve((0, Qd.r)(dd, this.stopped));
        const kd = (0, od.k)(Jd);
        return kd && this.downloadDecoder(), new Promise((pd => {
          this.queue.push({
            word: dd,
            glb: Jd,
            draco: kd,
            attempts: 0,
            resolve: pd
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.rQ ? this.rQ : null
      }
      pump() {
        const dd = this.files();
        for (const Jd of this.slots) {
          if (null !== this.stopped) return;
          if (Jd.gaveUp || Jd.starting) continue;
          if (null === Jd.worker) {
            this.start(Jd);
            continue
          }
          if (null !== dd && "none" === Jd.rQ && Jd.failedDownload !== this.downloads && this.install(Jd, Jd.worker, dd), null !== Jd.job) continue;
          const kd = this.queue.findIndex((dd => "installed" === Jd.rQ || !dd.draco));
          kd >= 0 && this.run(Jd, Jd.worker, this.queue.splice(kd, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((dd => !dd.gaveUp && ("none" !== dd.rQ || dd.failedDownload !== this.downloads))) || (this.rQ = "uninstallable", this.decoderFailed(new Od(this.installFailure)))
      }
      start(dd) {
        if (dd.losses >= 6) return dd.gaveUp = !0, void(this.slots.every((dd => dd.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        dd.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((Jd => {
          let [kd, pd] = Jd;
          null === this.stopped && this.launch(dd, kd, pd)
        }), (dd => {
          this.fail(dd)
        }))
      }
      launch(dd, Jd, kd) {
        let pd;
        try {
          pd = Jd()
        } catch (Nd) {
          return void this.lose(dd, `a model worker could not be created (${String(Nd)})`)
        }
        dd.worker = pd, this.startTimer(dd, 3e4, (Jd => {
          this.lose(dd, `a model worker did not start: ${(0,Ld.k)(Jd)}`)
        })), pd.onmessage = Jd => {
          let {
            data: kd
          } = Jd;
          this.answered(dd, pd, kd)
        }, pd.onerror = Jd => {
          this.lose(dd, dd.starting ? `a model worker failed to start: ${Jd.message}` : `a model worker failed: ${Jd.message}`)
        }, pd.postMessage({
          type: "start",
          module: kd
        })
      }
      startTimer(dd, Jd, kd) {
        dd.timer = new Ld.g(Jd, (Jd => {
          dd.timer = null, kd(Jd)
        }), void 0, this.opts.visibility)
      }
      clearTimer(dd) {
        var Jd;
        null === (Jd = dd.timer) || void 0 === Jd || Jd.cancel(), dd.timer = null
      }
      answered(dd, Jd, kd) {
        if ("lost" === kd.type) return void this.lose(dd, kd.reason);
        if (dd.starting) return "started" !== kd.type ? void this.lose(dd, `a model worker answered ${kd.type} before it started`) : (this.clearTimer(dd), dd.starting = !1, dd.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === kd.type || "dracoFailed" === kd.type) {
          if (kd.seq !== dd.installSeq) return;
          return void("installing" === dd.rQ ? (this.clearTimer(dd), "dracoInstalled" === kd.type ? (dd.rQ = "installed", this.pump()) : this.installFailed(dd, kd.reason)) : "dracoInstalled" === kd.type && "none" === dd.rQ && dd.failedDownload === this.downloads && (dd.rQ = "installed", this.pump()))
        }
        const pd = dd.job;
        null !== pd && "started" !== kd.type && kd.seq === dd.seq && ("trapped" !== kd.type ? (dd.job = null, dd.losses = 0, this.jobLosses = 0, pd.resolve(new Uint8Array(kd.record)), this.pump()) : this.lose(dd, kd.trap, !0))
      }
      install(dd, Jd, kd) {
        const pd = this.nextSeq++;
        dd.rQ = "installing", dd.installSeq = pd, this.startTimer(dd, 3e4, (Jd => {
          this.installFailed(dd, `no install within ${Math.round(Jd)} ms`)
        }));
        const Nd = kd.script.slice(0),
          Wd = kd.wasmBinary.slice(0);
        Jd.postMessage({
          type: "installDraco",
          seq: pd,
          script: Nd,
          wasmBinary: Wd
        }, [Nd, Wd])
      }
      installFailed(dd, Jd) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${Jd}`), this.noInstall(dd, Jd), this.pump()
      }
      noInstall(dd, Jd) {
        dd.rQ = "none", dd.failedDownload = this.downloads, this.installFailure = Jd
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.rQ || null !== this.files()) return;
        const dd = "uninstallable" === this.rQ;
        this.rQ = "downloading", this.opts.downloadFiles(dd).then((dd => {
          null === this.stopped && (this.rQ = dd, this.downloads++, this.pump())
        }), (dd => {
          this.rQ = null, this.decoderFailed(dd)
        }))
      }
      decoderFailed(dd) {
        if (null !== this.stopped) return;
        const Jd = (0, Zd.j)(dd);
        let kd = 0;
        for (const pd of this.queue.splice(0)) pd.draco ? (pd.resolve((0, Qd.f)(pd.word, Jd)), kd++) : this.queue.push(pd);
        kd > 0 && this.opts.onDecoderFailed(dd)
      }
      run(dd, Jd, kd) {
        const pd = this.nextSeq++;
        dd.seq = pd, dd.job = kd, kd.attempts++;
        const Nd = kd.glb.slice();
        Jd.postMessage({
          type: "job",
          seq: pd,
          word: kd.word,
          glb: Nd.buffer
        }, [Nd.buffer])
      }
      lose(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(dd);
        const pd = dd.worker;
        null !== pd && (pd.onmessage = null, pd.onerror = null, pd.terminate());
        const Nd = !kd && "installing" === dd.rQ;
        dd.worker = null, dd.starting = !1, dd.rQ = "none", Nd && this.noInstall(dd, Jd), void 0 !== dd.startedAt && performance.now() - dd.startedAt >= 6e4 && (dd.losses = 0), dd.startedAt = void 0;
        const Wd = dd.job;
        if (dd.job = null, null !== Wd || Nd || dd.losses++, this.opts.onWorkerLost(Jd), null !== Wd && Nd) Wd.attempts--, this.queue.unshift(Wd);
        else if (null !== Wd && (Wd.attempts < 2 ? this.queue.unshift(Wd) : Wd.resolve((0, Qd.p)(Wd.word, Jd)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(dd) {
        if (null !== this.stopped) return;
        this.stopped = null === dd ? "the model workers stopped" : `the model workers could not start: ${(0,Zd.j)(dd)}`;
        const Jd = this.stopped,
          kd = dd => {
            dd.resolve((0, Qd.r)(dd.word, Jd))
          };
        for (const Nd of this.slots) {
          var pd;
          this.clearTimer(Nd), null === (pd = Nd.worker) || void 0 === pd || pd.terminate(), Nd.worker = null, null !== Nd.job && kd(Nd.job), Nd.job = null
        }
        this.queue.splice(0).forEach(kd), null !== dd && this.opts.onUnavailable(dd)
      }
    }
    const Rd = [...pd.n, 5e3, 15e3, 3e4];
    let Id = null;
    const Gd = new Set;

    function vd(dd) {
      return Gd.add(dd), Id ??= function() {
        let dd = (Jd = navigator.hardwareConcurrency, Zd = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, Jd > 2 && !(0, ld.q)(Zd) ? 2 : 1);
        var Jd, Zd;
        const Cd = new ed({
          module: (0, Nd.d)(Wd.e, {
            delays: Rd,
            onRetry: (dd, Jd) => {
              Id === Cd && xd((kd => {
                kd.onModuleRetry(dd, Jd)
              }))
            }
          }),
          downloadFiles: Kd(Pd.b.scriptUrl, Pd.b.wasmBinaryUrl),
          loadWorker: async () => (await kd.e(43).then((() => kd(61223)))).createModelWorker,
          count: dd,
          onUnavailable: dd => {
            if (Id === Cd) {
              Id = null;
              const Jd = function(dd) {
                return dd instanceof pd.d ? [Wd.e.url().href] : void 0
              }(dd);
              xd((kd => {
                kd.onUnavailable(dd, Jd)
              }))
            }
          },
          onDecoderFailed: dd => {
            if (Id === Cd) {
              const Jd = dd instanceof gd ? dd.goneUrl : null,
                kd = null === Jd ? void 0 : [Jd];
              xd((Jd => {
                Jd.onDecoderFailed(dd, kd)
              }))
            }
          },
          onWorkerLost: dd => {
            Id === Cd && xd((Jd => {
              Jd.onWorkerLost(dd)
            }))
          }
        });
        return Cd
      }(), {
        pool: Id,
        unlisten: () => {
          Gd.delete(dd)
        }
      }
    }

    function xd(dd) {
      for (const kd of [...Gd]) try {
        dd(kd)
      } catch (Jd) {
        console.error("[pageModelPool] a listener threw", Jd)
      }
    }
  },
  41467: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41475: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);