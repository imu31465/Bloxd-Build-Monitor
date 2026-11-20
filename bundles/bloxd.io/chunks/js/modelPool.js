export const id = 42;
export const ids = [42];
export const modules = {
  40789: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv
    });
    var hv = Pv(108),
      Sv = Pv(1192);

    function ev(vv) {
      return (0, hv.b)() ? `https://${Sv.b.discordDomain}/${vv.href}` : vv.href
    }
    const gv = {
      scriptUrl: ev(new Pv.U(Pv(40794))),
      wasmBinaryUrl: ev(new Pv.U(Pv(40803)))
    }
  },
  9093: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      g: () => ev,
      k: () => gv
    });
    const hv = 1179937895,
      Sv = 1313821514;

    function ev(vv) {
      const zv = new DataView(vv.buffer, vv.byteOffset, vv.byteLength);
      if (vv.byteLength < 20 || zv.getUint32(0, !0) !== hv || 2 !== zv.getUint32(4, !0)) return null;
      const Pv = Math.min(zv.getUint32(8, !0), vv.byteLength),
        ev = zv.getUint32(12, !0);
      if (zv.getUint32(16, !0) !== Sv || 20 + ev > Pv) return null;
      let gv;
      try {
        gv = JSON.parse((new TextDecoder).decode(vv.subarray(20, 20 + ev)))
      } catch {
        return null
      }
      return "object" === typeof gv && null !== gv ? {
        json: gv,
        jsonEnd: 20 + ev,
        length: Pv
      } : null
    }

    function gv(vv) {
      var zv;
      const Pv = null === (zv = ev(vv)) || void 0 === zv ? void 0 : zv.json;
      if (void 0 === Pv || !Array.isArray(Pv.extensionsUsed) || !Pv.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const hv = Pv.meshes;
      return Array.isArray(hv) && hv.some((vv => {
        const zv = null === vv || void 0 === vv ? void 0 : vv.primitives;
        return Array.isArray(zv) && zv.some((vv => {
          const zv = null === vv || void 0 === vv ? void 0 : vv.extensions;
          return null != (null === zv || void 0 === zv ? void 0 : zv.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42755: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => iv,
      pageModelPool: () => mv
    });
    var hv = Pv(3473),
      Sv = Pv(35885),
      ev = Pv(40065),
      gv = Pv(40789),
      pv = Pv(35852);
    Error;
    class dv extends Error {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${vv}: ${zv}`), this.stage = vv, this.url = Pv, this.status = hv, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function Nv(vv, zv) {
      let Pv = null,
        Sv = !1;
      return {
        get: () => {
          if (null === Pv) {
            const ev = async function(vv, zv) {
              try {
                return (await (0, hv.I)(vv)).buffer
              } catch (Pv) {
                throw new dv(zv, (0, pv.j)(Pv), vv, Pv instanceof hv.g ? Pv.status : null)
              }
            }(vv, zv);
            Pv = ev, ev.then((() => {
              Sv = Pv === ev
            }), (() => {
              Pv = null
            }))
          }
          return Pv
        },
        forget: () => {
          Sv && (Pv = null, Sv = !1)
        }
      }
    }

    function lv(vv, zv) {
      const Pv = Nv(zv, "wasm"),
        hv = Nv(vv, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Pv.forget(), hv.forget());
        const [vv, zv] = await Promise.all([Pv.get(), hv.get()]);
        return {
          script: zv,
          wasmBinary: vv
        }
      }
    }
    var Tv = Pv(9093),
      Wv = Pv(2904),
      wv = Pv(40265),
      av = Pv(40304);
    class sv extends Error {
      constructor(vv) {
        super(`no model worker could install it: ${vv}`), this.name = "DracoInstallError"
      }
    }
    class Cv {
      constructor(vv) {
        this.opts = vv, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.ow = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let zv = 0; zv < Math.max(1, vv.count); zv++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          ow: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((vv => null !== vv.job)).length
      }
      build(vv, zv) {
        if (null !== this.stopped) return Promise.resolve((0, wv.r)(vv, this.stopped));
        const Pv = (0, Tv.k)(zv);
        return Pv && this.downloadDecoder(), new Promise((hv => {
          this.queue.push({
            word: vv,
            glb: zv,
            draco: Pv,
            attempts: 0,
            resolve: hv
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.ow ? this.ow : null
      }
      pump() {
        const vv = this.files();
        for (const zv of this.slots) {
          if (null !== this.stopped) return;
          if (zv.gaveUp || zv.starting) continue;
          if (null === zv.worker) {
            this.start(zv);
            continue
          }
          if (null !== vv && "none" === zv.ow && zv.failedDownload !== this.downloads && this.install(zv, zv.worker, vv), null !== zv.job) continue;
          const Pv = this.queue.findIndex((vv => "installed" === zv.ow || !vv.draco));
          Pv >= 0 && this.run(zv, zv.worker, this.queue.splice(Pv, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((vv => !vv.gaveUp && ("none" !== vv.ow || vv.failedDownload !== this.downloads))) || (this.ow = "uninstallable", this.decoderFailed(new sv(this.installFailure)))
      }
      start(vv) {
        if (vv.losses >= 6) return vv.gaveUp = !0, void(this.slots.every((vv => vv.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        vv.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((zv => {
          let [Pv, hv] = zv;
          null === this.stopped && this.launch(vv, Pv, hv)
        }), (vv => {
          this.fail(vv)
        }))
      }
      launch(vv, zv, Pv) {
        let hv;
        try {
          hv = zv()
        } catch (Sv) {
          return void this.lose(vv, `a model worker could not be created (${String(Sv)})`)
        }
        vv.worker = hv, this.startTimer(vv, 3e4, (zv => {
          this.lose(vv, `a model worker did not start: ${(0,av.n)(zv)}`)
        })), hv.onmessage = zv => {
          let {
            data: Pv
          } = zv;
          this.answered(vv, hv, Pv)
        }, hv.onerror = zv => {
          this.lose(vv, vv.starting ? `a model worker failed to start: ${zv.message}` : `a model worker failed: ${zv.message}`)
        }, hv.postMessage({
          type: "start",
          module: Pv
        })
      }
      startTimer(vv, zv, Pv) {
        vv.timer = new av.k(zv, (zv => {
          vv.timer = null, Pv(zv)
        }), void 0, this.opts.visibility)
      }
      clearTimer(vv) {
        var zv;
        null === (zv = vv.timer) || void 0 === zv || zv.cancel(), vv.timer = null
      }
      answered(vv, zv, Pv) {
        if ("lost" === Pv.type) return void this.lose(vv, Pv.reason);
        if (vv.starting) return "started" !== Pv.type ? void this.lose(vv, `a model worker answered ${Pv.type} before it started`) : (this.clearTimer(vv), vv.starting = !1, vv.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === Pv.type || "dracoFailed" === Pv.type) {
          if (Pv.seq !== vv.installSeq) return;
          return void("installing" === vv.ow ? (this.clearTimer(vv), "dracoInstalled" === Pv.type ? (vv.ow = "installed", this.pump()) : this.installFailed(vv, Pv.reason)) : "dracoInstalled" === Pv.type && "none" === vv.ow && vv.failedDownload === this.downloads && (vv.ow = "installed", this.pump()))
        }
        const hv = vv.job;
        null !== hv && "started" !== Pv.type && Pv.seq === vv.seq && ("trapped" !== Pv.type ? (vv.job = null, vv.losses = 0, this.jobLosses = 0, hv.resolve(new Uint8Array(Pv.record)), this.pump()) : this.lose(vv, Pv.trap, !0))
      }
      install(vv, zv, Pv) {
        const hv = this.nextSeq++;
        vv.ow = "installing", vv.installSeq = hv, this.startTimer(vv, 3e4, (zv => {
          this.installFailed(vv, `no install within ${Math.round(zv)} ms`)
        }));
        const Sv = Pv.script.slice(0),
          ev = Pv.wasmBinary.slice(0);
        zv.postMessage({
          type: "installDraco",
          seq: hv,
          script: Sv,
          wasmBinary: ev
        }, [Sv, ev])
      }
      installFailed(vv, zv) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${zv}`), this.noInstall(vv, zv), this.pump()
      }
      noInstall(vv, zv) {
        vv.ow = "none", vv.failedDownload = this.downloads, this.installFailure = zv
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.ow || null !== this.files()) return;
        const vv = "uninstallable" === this.ow;
        this.ow = "downloading", this.opts.downloadFiles(vv).then((vv => {
          null === this.stopped && (this.ow = vv, this.downloads++, this.pump())
        }), (vv => {
          this.ow = null, this.decoderFailed(vv)
        }))
      }
      decoderFailed(vv) {
        if (null !== this.stopped) return;
        const zv = (0, pv.j)(vv);
        let Pv = 0;
        for (const hv of this.queue.splice(0)) hv.draco ? (hv.resolve((0, wv.j)(hv.word, zv)), Pv++) : this.queue.push(hv);
        Pv > 0 && this.opts.onDecoderFailed(vv)
      }
      run(vv, zv, Pv) {
        const hv = this.nextSeq++;
        vv.seq = hv, vv.job = Pv, Pv.attempts++;
        const Sv = Pv.glb.slice();
        zv.postMessage({
          type: "job",
          seq: hv,
          word: Pv.word,
          glb: Sv.buffer
        }, [Sv.buffer])
      }
      lose(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(vv);
        const hv = vv.worker;
        null !== hv && (hv.onmessage = null, hv.onerror = null, hv.terminate());
        const Sv = !Pv && "installing" === vv.ow;
        vv.worker = null, vv.starting = !1, vv.ow = "none", Sv && this.noInstall(vv, zv), void 0 !== vv.startedAt && performance.now() - vv.startedAt >= 6e4 && (vv.losses = 0), vv.startedAt = void 0;
        const ev = vv.job;
        if (vv.job = null, null !== ev || Sv || vv.losses++, this.opts.onWorkerLost(zv), null !== ev && Sv) ev.attempts--, this.queue.unshift(ev);
        else if (null !== ev && (ev.attempts < 2 ? this.queue.unshift(ev) : ev.resolve((0, wv.p)(ev.word, zv)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(vv) {
        if (null !== this.stopped) return;
        this.stopped = null === vv ? "the model workers stopped" : `the model workers could not start: ${(0,pv.j)(vv)}`;
        const zv = this.stopped,
          Pv = vv => {
            vv.resolve((0, wv.r)(vv.word, zv))
          };
        for (const Sv of this.slots) {
          var hv;
          this.clearTimer(Sv), null === (hv = Sv.worker) || void 0 === hv || hv.terminate(), Sv.worker = null, null !== Sv.job && Pv(Sv.job), Sv.job = null
        }
        this.queue.splice(0).forEach(Pv), null !== vv && this.opts.onUnavailable(vv)
      }
    }
    const iv = [...hv.q, 5e3, 15e3, 3e4];
    let cv = null;
    const Gv = new Set;

    function mv(vv) {
      return Gv.add(vv), cv ??= function() {
        let vv = (zv = navigator.hardwareConcurrency, pv = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, zv > 2 && !(0, Wv.s)(pv) ? 2 : 1);
        var zv, pv;
        const Nv = new Cv({
          module: (0, Sv.f)(ev.c, {
            delays: iv,
            onRetry: (vv, zv) => {
              cv === Nv && jv((Pv => {
                Pv.onModuleRetry(vv, zv)
              }))
            }
          }),
          downloadFiles: lv(gv.e.scriptUrl, gv.e.wasmBinaryUrl),
          loadWorker: async () => (await Pv.e(43).then((() => Pv(60925)))).createModelWorker,
          count: vv,
          onUnavailable: vv => {
            if (cv === Nv) {
              cv = null;
              const zv = function(vv) {
                return vv instanceof hv.d ? [ev.c.url().href] : void 0
              }(vv);
              jv((Pv => {
                Pv.onUnavailable(vv, zv)
              }))
            }
          },
          onDecoderFailed: vv => {
            if (cv === Nv) {
              const zv = vv instanceof dv ? vv.goneUrl : null,
                Pv = null === zv ? void 0 : [zv];
              jv((zv => {
                zv.onDecoderFailed(vv, Pv)
              }))
            }
          },
          onWorkerLost: vv => {
            cv === Nv && jv((zv => {
              zv.onWorkerLost(vv)
            }))
          }
        });
        return Nv
      }(), {
        pool: cv,
        unlisten: () => {
          Gv.delete(vv)
        }
      }
    }

    function jv(vv) {
      for (const Pv of [...Gv]) try {
        vv(Pv)
      } catch (zv) {
        console.error("[pageModelPool] a listener threw", zv)
      }
    }
  },
  40803: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  40794: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);