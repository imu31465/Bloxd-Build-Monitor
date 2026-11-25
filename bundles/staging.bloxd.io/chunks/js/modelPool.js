export const id = 43;
export const ids = [43];
export const modules = {
  41743: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot = Vt(153),
      qt = Vt(1169);

    function Dt(tt) {
      return (0, Ot.isDiscordClient)() ? `https://${qt.e.discordDomain}/${tt.href}` : tt.href
    }
    const mt = {
      scriptUrl: Dt(new Vt.U(Vt(41748))),
      wasmBinaryUrl: Dt(new Vt.U(Vt(41755)))
    }
  },
  34473: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      g: () => Dt,
      i: () => mt
    });
    const Ot = 1179937895,
      qt = 1313821514;

    function Dt(tt) {
      const et = new DataView(tt.buffer, tt.byteOffset, tt.byteLength);
      if (tt.byteLength < 20 || et.getUint32(0, !0) !== Ot || 2 !== et.getUint32(4, !0)) return null;
      const Vt = Math.min(et.getUint32(8, !0), tt.byteLength),
        Dt = et.getUint32(12, !0);
      if (et.getUint32(16, !0) !== qt || 20 + Dt > Vt) return null;
      let mt;
      try {
        mt = JSON.parse((new TextDecoder).decode(tt.subarray(20, 20 + Dt)))
      } catch {
        return null
      }
      return "object" === typeof mt && null !== mt ? {
        json: mt,
        jsonEnd: 20 + Dt,
        length: Vt
      } : null
    }

    function mt(tt) {
      var et;
      const Vt = null === (et = Dt(tt)) || void 0 === et ? void 0 : et.json;
      if (void 0 === Vt || !Array.isArray(Vt.extensionsUsed) || !Vt.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Ot = Vt.meshes;
      return Array.isArray(Ot) && Ot.some((tt => {
        const et = null === tt || void 0 === tt ? void 0 : tt.primitives;
        return Array.isArray(et) && et.some((tt => {
          const et = null === tt || void 0 === tt ? void 0 : tt.extensions;
          return null != (null === et || void 0 === et ? void 0 : et.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  51332: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => Nt,
      pageModelPool: () => Jt
    });
    var Ot = Vt(2965),
      qt = Vt(36535),
      Dt = Vt(41057),
      mt = Vt(41743),
      dt = Vt(36507);
    Error;
    class jt extends Error {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${tt}: ${et}`), this.stage = tt, this.url = Vt, this.status = Ot, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function Ht(tt, et) {
      let Vt = null,
        qt = !1;
      return {
        get: () => {
          if (null === Vt) {
            const Dt = async function(tt, et) {
              try {
                return (await (0, Ot.I)(tt)).buffer
              } catch (Vt) {
                throw new jt(et, (0, dt.j)(Vt), tt, Vt instanceof Ot.f ? Vt.status : null)
              }
            }(tt, et);
            Vt = Dt, Dt.then((() => {
              qt = Vt === Dt
            }), (() => {
              Vt = null
            }))
          }
          return Vt
        },
        forget: () => {
          qt && (Vt = null, qt = !1)
        }
      }
    }

    function Xt(tt, et) {
      const Vt = Ht(et, "wasm"),
        Ot = Ht(tt, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Vt.forget(), Ot.forget());
        const [tt, et] = await Promise.all([Vt.get(), Ot.get()]);
        return {
          script: et,
          wasmBinary: tt
        }
      }
    }
    var Qt = Vt(34473),
      lt = Vt(3179),
      Et = Vt(40987),
      ft = Vt(41122);
    class wt extends Error {
      constructor(tt) {
        super(`no model worker could install it: ${tt}`), this.name = "DracoInstallError"
      }
    }
    class yt {
      constructor(tt) {
        this.opts = tt, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.xE = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let et = 0; et < Math.max(1, tt.count); et++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          xE: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((tt => null !== tt.job)).length
      }
      build(tt, et) {
        if (null !== this.stopped) return Promise.resolve((0, Et.s)(tt, this.stopped));
        const Vt = (0, Qt.i)(et);
        return Vt && this.downloadDecoder(), new Promise((Ot => {
          this.queue.push({
            word: tt,
            glb: et,
            draco: Vt,
            attempts: 0,
            resolve: Ot
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
        return "object" === typeof this.xE ? this.xE : null
      }
      pump() {
        const tt = this.resting && 0 === this.queue.length,
          et = this.files();
        for (const Vt of this.slots) {
          if (null !== this.stopped) return;
          if (Vt.gaveUp || Vt.starting) continue;
          if (null === Vt.worker) {
            tt || this.start(Vt);
            continue
          }
          if (tt) {
            null === Vt.job && "installing" !== Vt.xE && this.end(Vt);
            continue
          }
          if (null !== et && "none" === Vt.xE && Vt.failedDownload !== this.downloads && this.install(Vt, Vt.worker, et), null !== Vt.job) continue;
          const Ot = this.queue.findIndex((tt => "installed" === Vt.xE || !tt.draco));
          Ot >= 0 && this.run(Vt, Vt.worker, this.queue.splice(Ot, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((tt => !tt.gaveUp && ("none" !== tt.xE || tt.failedDownload !== this.downloads))) || (this.xE = "uninstallable", this.decoderFailed(new wt(this.installFailure)))
      }
      start(tt) {
        if (tt.losses >= 6) return tt.gaveUp = !0, void(this.slots.every((tt => tt.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        tt.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((et => {
          let [Vt, Ot] = et;
          null === this.stopped && this.launch(tt, Vt, Ot)
        }), (tt => {
          this.fail(tt)
        }))
      }
      launch(tt, et, Vt) {
        let Ot;
        try {
          Ot = et()
        } catch (qt) {
          return void this.lose(tt, `a model worker could not be created (${String(qt)})`)
        }
        tt.worker = Ot, this.startTimer(tt, 3e4, (et => {
          this.lose(tt, `a model worker did not start: ${(0,ft.h)(et)}`)
        })), Ot.onmessage = et => {
          let {
            data: Vt
          } = et;
          this.answered(tt, Ot, Vt)
        }, Ot.onerror = et => {
          this.lose(tt, tt.starting ? `a model worker failed to start: ${et.message}` : `a model worker failed: ${et.message}`)
        }, Ot.postMessage({
          type: "start",
          module: Vt
        })
      }
      end(tt) {
        const et = tt.worker;
        null !== et && (et.onmessage = null, et.onerror = null, et.terminate()), tt.worker = null, tt.xE = "none", tt.startedAt = void 0
      }
      startTimer(tt, et, Vt) {
        tt.timer = new ft.g(et, (et => {
          tt.timer = null, Vt(et)
        }), void 0, this.opts.visibility)
      }
      clearTimer(tt) {
        var et;
        null === (et = tt.timer) || void 0 === et || et.cancel(), tt.timer = null
      }
      answered(tt, et, Vt) {
        if ("lost" === Vt.type) return void this.lose(tt, Vt.reason);
        if (tt.starting) return "started" !== Vt.type ? void this.lose(tt, `a model worker answered ${Vt.type} before it started`) : (this.clearTimer(tt), tt.starting = !1, tt.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === Vt.type || "dracoFailed" === Vt.type) {
          if (Vt.seq !== tt.installSeq) return;
          return void("installing" === tt.xE ? (this.clearTimer(tt), "dracoInstalled" === Vt.type ? (tt.xE = "installed", this.pump()) : this.installFailed(tt, Vt.reason)) : "dracoInstalled" === Vt.type && "none" === tt.xE && tt.failedDownload === this.downloads && (tt.xE = "installed", tt.failedDownload = 0, this.pump()))
        }
        const Ot = tt.job;
        null !== Ot && "started" !== Vt.type && Vt.seq === tt.seq && ("trapped" !== Vt.type ? (tt.job = null, tt.losses = 0, this.jobLosses = 0, Ot.resolve(new Uint8Array(Vt.record)), this.pump()) : this.lose(tt, Vt.trap, !0))
      }
      install(tt, et, Vt) {
        const Ot = this.nextSeq++;
        tt.xE = "installing", tt.installSeq = Ot, this.startTimer(tt, 3e4, (et => {
          this.installFailed(tt, `no install within ${Math.round(et)} ms`)
        }));
        const qt = Vt.script.slice(0),
          Dt = Vt.wasmBinary.slice(0);
        et.postMessage({
          type: "installDraco",
          seq: Ot,
          script: qt,
          wasmBinary: Dt
        }, [qt, Dt])
      }
      installFailed(tt, et) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${et}`), this.noInstall(tt, et), this.pump()
      }
      noInstall(tt, et) {
        tt.xE = "none", tt.failedDownload = this.downloads, this.installFailure = et
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.xE || null !== this.files()) return;
        const tt = "uninstallable" === this.xE;
        this.xE = "downloading", this.opts.downloadFiles(tt).then((tt => {
          null === this.stopped && (this.xE = tt, this.downloads++, this.pump())
        }), (tt => {
          this.xE = null, this.decoderFailed(tt)
        }))
      }
      decoderFailed(tt) {
        if (null !== this.stopped) return;
        const et = (0, dt.j)(tt);
        let Vt = 0;
        for (const Ot of this.queue.splice(0)) Ot.draco ? (Ot.resolve((0, Et.h)(Ot.word, et)), Vt++) : this.queue.push(Ot);
        Vt > 0 && this.opts.onDecoderFailed(tt), this.pump()
      }
      run(tt, et, Vt) {
        const Ot = this.nextSeq++;
        tt.seq = Ot, tt.job = Vt, Vt.attempts++;
        const qt = Vt.glb.slice();
        et.postMessage({
          type: "job",
          seq: Ot,
          word: Vt.word,
          glb: qt.buffer
        }, [qt.buffer])
      }
      lose(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(tt);
        const Ot = !Vt && "installing" === tt.xE;
        void 0 !== tt.startedAt && performance.now() - tt.startedAt >= 6e4 && (tt.losses = 0), this.end(tt), tt.starting = !1, Ot && this.noInstall(tt, et);
        const qt = tt.job;
        if (tt.job = null, null !== qt || Ot || tt.losses++, this.opts.onWorkerLost(et), null !== qt && Ot) qt.attempts--, this.queue.unshift(qt);
        else if (null !== qt && (qt.attempts < 2 ? this.queue.unshift(qt) : qt.resolve((0, Et.q)(qt.word, et)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(tt) {
        if (null !== this.stopped) return;
        this.stopped = null === tt ? "the model workers stopped" : `the model workers could not start: ${(0,dt.j)(tt)}`;
        const et = this.stopped,
          Vt = tt => {
            tt.resolve((0, Et.s)(tt.word, et))
          };
        for (const qt of this.slots) {
          var Ot;
          this.clearTimer(qt), null === (Ot = qt.worker) || void 0 === Ot || Ot.terminate(), qt.worker = null, null !== qt.job && Vt(qt.job), qt.job = null
        }
        this.queue.splice(0).forEach(Vt), null !== tt && this.opts.onUnavailable(tt)
      }
    }
    const Nt = [...Ot.r, 5e3, 15e3, 3e4];
    let Mt = null;
    const bt = new Set;

    function Jt(tt) {
      return bt.add(tt), Mt ??= function() {
        let tt = (et = navigator.hardwareConcurrency, dt = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, et > 2 && !(0, lt.m)(dt) ? 2 : 1);
        var et, dt;
        const Ht = new yt({
          module: (0, qt.h)(Dt.c, {
            delays: Nt,
            onRetry: (tt, et) => {
              Mt === Ht && Ct((Vt => {
                Vt.onModuleRetry(tt, et)
              }))
            }
          }),
          downloadFiles: Xt(mt.b.scriptUrl, mt.b.wasmBinaryUrl),
          loadWorker: async () => (await Vt.e(44).then((() => Vt(61737)))).createModelWorker,
          count: tt,
          onUnavailable: tt => {
            if (Mt === Ht) {
              Mt = null;
              const et = function(tt) {
                return tt instanceof Ot.c ? [Dt.c.url().href] : void 0
              }(tt);
              Ct((Vt => {
                Vt.onUnavailable(tt, et)
              }))
            }
          },
          onDecoderFailed: tt => {
            if (Mt === Ht) {
              const et = tt instanceof jt ? tt.goneUrl : null,
                Vt = null === et ? void 0 : [et];
              Ct((et => {
                et.onDecoderFailed(tt, Vt)
              }))
            }
          },
          onWorkerLost: tt => {
            Mt === Ht && Ct((et => {
              et.onWorkerLost(tt)
            }))
          }
        });
        return Ht
      }(), {
        pool: Mt,
        unlisten: () => {
          bt.delete(tt)
        }
      }
    }

    function Ct(tt) {
      for (const Vt of [...bt]) try {
        tt(Vt)
      } catch (et) {
        console.error("[pageModelPool] a listener threw", et)
      }
    }
  },
  41748: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41755: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);