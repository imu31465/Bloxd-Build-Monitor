export const id = 42;
export const ids = [42];
export const modules = {
  41550: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm
    });
    var hm = fm(135),
      Am = fm(1105);

    function am(mm) {
      return (0, hm.c)() ? `https://${Am.d.discordDomain}/${mm.href}` : mm.href
    }
    const xm = {
      scriptUrl: am(new fm.U(fm(41552))),
      wasmBinaryUrl: am(new fm.U(fm(41554)))
    }
  },
  34367: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am,
      d: () => am,
      g: () => xm
    });
    const hm = 1179937895,
      Am = 1313821514;

    function am(mm) {
      const Tm = new DataView(mm.buffer, mm.byteOffset, mm.byteLength);
      if (mm.byteLength < 20 || Tm.getUint32(0, !0) !== hm || 2 !== Tm.getUint32(4, !0)) return null;
      const fm = Math.min(Tm.getUint32(8, !0), mm.byteLength),
        am = Tm.getUint32(12, !0);
      if (Tm.getUint32(16, !0) !== Am || 20 + am > fm) return null;
      let xm;
      try {
        xm = JSON.parse((new TextDecoder).decode(mm.subarray(20, 20 + am)))
      } catch {
        return null
      }
      return "object" === typeof xm && null !== xm ? {
        json: xm,
        jsonEnd: 20 + am,
        length: fm
      } : null
    }

    function xm(mm) {
      var Tm;
      const fm = null === (Tm = am(mm)) || void 0 === Tm ? void 0 : Tm.json;
      if (void 0 === fm || !Array.isArray(fm.extensionsUsed) || !fm.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const hm = fm.meshes;
      return Array.isArray(hm) && hm.some((mm => {
        const Tm = null === mm || void 0 === mm ? void 0 : mm.primitives;
        return Array.isArray(Tm) && Tm.some((mm => {
          const Tm = null === mm || void 0 === mm ? void 0 : mm.extensions;
          return null != (null === Tm || void 0 === Tm ? void 0 : Tm.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  51029: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => jm,
      pageModelPool: () => Km
    });
    var hm = fm(2876),
      Am = fm(36395),
      am = fm(40950),
      xm = fm(41550),
      wm = fm(36363);
    Error;
    class Dm extends Error {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${mm}: ${Tm}`), this.stage = mm, this.url = fm, this.status = hm, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function im(mm, Tm) {
      let fm = null,
        Am = !1;
      return {
        get: () => {
          if (null === fm) {
            const am = async function(mm, Tm) {
              try {
                return (await (0, hm.I)(mm)).buffer
              } catch (fm) {
                throw new Dm(Tm, (0, wm.l)(fm), mm, fm instanceof hm.g ? fm.status : null)
              }
            }(mm, Tm);
            fm = am, am.then((() => {
              Am = fm === am
            }), (() => {
              fm = null
            }))
          }
          return fm
        },
        forget: () => {
          Am && (fm = null, Am = !1)
        }
      }
    }

    function Rm(mm, Tm) {
      const fm = im(Tm, "wasm"),
        hm = im(mm, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (fm.forget(), hm.forget());
        const [mm, Tm] = await Promise.all([fm.get(), hm.get()]);
        return {
          script: Tm,
          wasmBinary: mm
        }
      }
    }
    var pm = fm(34367),
      Em = fm(3117),
      om = fm(40870),
      Om = fm(41017);
    class Ym extends Error {
      constructor(mm) {
        super(`no model worker could install it: ${mm}`), this.name = "DracoInstallError"
      }
    }
    class qm {
      constructor(mm) {
        this.opts = mm, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.JO = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let Tm = 0; Tm < Math.max(1, mm.count); Tm++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          JO: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((mm => null !== mm.job)).length
      }
      build(mm, Tm) {
        if (null !== this.stopped) return Promise.resolve((0, om.r)(mm, this.stopped));
        const fm = (0, pm.g)(Tm);
        return fm && this.downloadDecoder(), new Promise((hm => {
          this.queue.push({
            word: mm,
            glb: Tm,
            draco: fm,
            attempts: 0,
            resolve: hm
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
        return "object" === typeof this.JO ? this.JO : null
      }
      pump() {
        const mm = this.resting && 0 === this.queue.length,
          Tm = this.files();
        for (const fm of this.slots) {
          if (null !== this.stopped) return;
          if (fm.gaveUp || fm.starting) continue;
          if (null === fm.worker) {
            mm || this.start(fm);
            continue
          }
          if (mm) {
            null === fm.job && "installing" !== fm.JO && this.end(fm);
            continue
          }
          if (null !== Tm && "none" === fm.JO && fm.failedDownload !== this.downloads && this.install(fm, fm.worker, Tm), null !== fm.job) continue;
          const hm = this.queue.findIndex((mm => "installed" === fm.JO || !mm.draco));
          hm >= 0 && this.run(fm, fm.worker, this.queue.splice(hm, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((mm => !mm.gaveUp && ("none" !== mm.JO || mm.failedDownload !== this.downloads))) || (this.JO = "uninstallable", this.decoderFailed(new Ym(this.installFailure)))
      }
      start(mm) {
        if (mm.losses >= 6) return mm.gaveUp = !0, void(this.slots.every((mm => mm.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        mm.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((Tm => {
          let [fm, hm] = Tm;
          null === this.stopped && this.launch(mm, fm, hm)
        }), (mm => {
          this.fail(mm)
        }))
      }
      launch(mm, Tm, fm) {
        let hm;
        try {
          hm = Tm()
        } catch (Am) {
          return void this.lose(mm, `a model worker could not be created (${String(Am)})`)
        }
        mm.worker = hm, this.startTimer(mm, 3e4, (Tm => {
          this.lose(mm, `a model worker did not start: ${(0,Om.k)(Tm)}`)
        })), hm.onmessage = Tm => {
          let {
            data: fm
          } = Tm;
          this.answered(mm, hm, fm)
        }, hm.onerror = Tm => {
          this.lose(mm, mm.starting ? `a model worker failed to start: ${Tm.message}` : `a model worker failed: ${Tm.message}`)
        }, hm.postMessage({
          type: "start",
          module: fm
        })
      }
      end(mm) {
        const Tm = mm.worker;
        null !== Tm && (Tm.onmessage = null, Tm.onerror = null, Tm.terminate()), mm.worker = null, mm.JO = "none", mm.startedAt = void 0
      }
      startTimer(mm, Tm, fm) {
        mm.timer = new Om.h(Tm, (Tm => {
          mm.timer = null, fm(Tm)
        }), void 0, this.opts.visibility)
      }
      clearTimer(mm) {
        var Tm;
        null === (Tm = mm.timer) || void 0 === Tm || Tm.cancel(), mm.timer = null
      }
      answered(mm, Tm, fm) {
        if ("lost" === fm.type) return void this.lose(mm, fm.reason);
        if (mm.starting) return "started" !== fm.type ? void this.lose(mm, `a model worker answered ${fm.type} before it started`) : (this.clearTimer(mm), mm.starting = !1, mm.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === fm.type || "dracoFailed" === fm.type) {
          if (fm.seq !== mm.installSeq) return;
          return void("installing" === mm.JO ? (this.clearTimer(mm), "dracoInstalled" === fm.type ? (mm.JO = "installed", this.pump()) : this.installFailed(mm, fm.reason)) : "dracoInstalled" === fm.type && "none" === mm.JO && mm.failedDownload === this.downloads && (mm.JO = "installed", mm.failedDownload = 0, this.pump()))
        }
        const hm = mm.job;
        null !== hm && "started" !== fm.type && fm.seq === mm.seq && ("trapped" !== fm.type ? (mm.job = null, mm.losses = 0, this.jobLosses = 0, hm.resolve(new Uint8Array(fm.record)), this.pump()) : this.lose(mm, fm.trap, !0))
      }
      install(mm, Tm, fm) {
        const hm = this.nextSeq++;
        mm.JO = "installing", mm.installSeq = hm, this.startTimer(mm, 3e4, (Tm => {
          this.installFailed(mm, `no install within ${Math.round(Tm)} ms`)
        }));
        const Am = fm.script.slice(0),
          am = fm.wasmBinary.slice(0);
        Tm.postMessage({
          type: "installDraco",
          seq: hm,
          script: Am,
          wasmBinary: am
        }, [Am, am])
      }
      installFailed(mm, Tm) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${Tm}`), this.noInstall(mm, Tm), this.pump()
      }
      noInstall(mm, Tm) {
        mm.JO = "none", mm.failedDownload = this.downloads, this.installFailure = Tm
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.JO || null !== this.files()) return;
        const mm = "uninstallable" === this.JO;
        this.JO = "downloading", this.opts.downloadFiles(mm).then((mm => {
          null === this.stopped && (this.JO = mm, this.downloads++, this.pump())
        }), (mm => {
          this.JO = null, this.decoderFailed(mm)
        }))
      }
      decoderFailed(mm) {
        if (null !== this.stopped) return;
        const Tm = (0, wm.l)(mm);
        let fm = 0;
        for (const hm of this.queue.splice(0)) hm.draco ? (hm.resolve((0, om.j)(hm.word, Tm)), fm++) : this.queue.push(hm);
        fm > 0 && this.opts.onDecoderFailed(mm), this.pump()
      }
      run(mm, Tm, fm) {
        const hm = this.nextSeq++;
        mm.seq = hm, mm.job = fm, fm.attempts++;
        const Am = fm.glb.slice();
        Tm.postMessage({
          type: "job",
          seq: hm,
          word: fm.word,
          glb: Am.buffer
        }, [Am.buffer])
      }
      lose(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(mm);
        const hm = !fm && "installing" === mm.JO;
        void 0 !== mm.startedAt && performance.now() - mm.startedAt >= 6e4 && (mm.losses = 0), this.end(mm), mm.starting = !1, hm && this.noInstall(mm, Tm);
        const Am = mm.job;
        if (mm.job = null, null !== Am || hm || mm.losses++, this.opts.onWorkerLost(Tm), null !== Am && hm) Am.attempts--, this.queue.unshift(Am);
        else if (null !== Am && (Am.attempts < 2 ? this.queue.unshift(Am) : Am.resolve((0, om.q)(Am.word, Tm)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(mm) {
        if (null !== this.stopped) return;
        this.stopped = null === mm ? "the model workers stopped" : `the model workers could not start: ${(0,wm.l)(mm)}`;
        const Tm = this.stopped,
          fm = mm => {
            mm.resolve((0, om.r)(mm.word, Tm))
          };
        for (const Am of this.slots) {
          var hm;
          this.clearTimer(Am), null === (hm = Am.worker) || void 0 === hm || hm.terminate(), Am.worker = null, null !== Am.job && fm(Am.job), Am.job = null
        }
        this.queue.splice(0).forEach(fm), null !== mm && this.opts.onUnavailable(mm)
      }
    }
    const jm = [...hm.t, 5e3, 15e3, 3e4];
    let Vm = null;
    const Im = new Set;

    function Km(mm) {
      return Im.add(mm), Vm ??= function() {
        let mm = (Tm = navigator.hardwareConcurrency, wm = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, Tm > 2 && !(0, Em.r)(wm) ? 2 : 1);
        var Tm, wm;
        const im = new qm({
          module: (0, Am.f)(am.c, {
            delays: jm,
            onRetry: (mm, Tm) => {
              Vm === im && Qm((fm => {
                fm.onModuleRetry(mm, Tm)
              }))
            }
          }),
          downloadFiles: Rm(xm.e.scriptUrl, xm.e.wasmBinaryUrl),
          loadWorker: async () => (await fm.e(43).then((() => fm(61576)))).createModelWorker,
          count: mm,
          onUnavailable: mm => {
            if (Vm === im) {
              Vm = null;
              const Tm = function(mm) {
                return mm instanceof hm.c ? [am.c.url().href] : void 0
              }(mm);
              Qm((fm => {
                fm.onUnavailable(mm, Tm)
              }))
            }
          },
          onDecoderFailed: mm => {
            if (Vm === im) {
              const Tm = mm instanceof Dm ? mm.goneUrl : null,
                fm = null === Tm ? void 0 : [Tm];
              Qm((Tm => {
                Tm.onDecoderFailed(mm, fm)
              }))
            }
          },
          onWorkerLost: mm => {
            Vm === im && Qm((Tm => {
              Tm.onWorkerLost(mm)
            }))
          }
        });
        return im
      }(), {
        pool: Vm,
        unlisten: () => {
          Im.delete(mm)
        }
      }
    }

    function Qm(mm) {
      for (const fm of [...Im]) try {
        mm(fm)
      } catch (Tm) {
        console.error("[pageModelPool] a listener threw", Tm)
      }
    }
  },
  41552: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41554: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);