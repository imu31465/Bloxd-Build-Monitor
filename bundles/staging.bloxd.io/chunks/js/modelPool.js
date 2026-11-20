export const id = 42;
export const ids = [42];
export const modules = {
  40945: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub
    });
    var Bb = hb(115),
      Ob = hb(1108);

    function Gb(bb) {
      return (0, Bb.d)() ? `https://${Ob.b.discordDomain}/${bb.href}` : bb.href
    }
    const Ub = {
      scriptUrl: Gb(new hb.U(hb(40950))),
      wasmBinaryUrl: Gb(new hb.U(hb(40956)))
    }
  },
  9173: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      h: () => Gb,
      l: () => Ub
    });
    const Bb = 1179937895,
      Ob = 1313821514;

    function Gb(bb) {
      const ub = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      if (bb.byteLength < 20 || ub.getUint32(0, !0) !== Bb || 2 !== ub.getUint32(4, !0)) return null;
      const hb = Math.min(ub.getUint32(8, !0), bb.byteLength),
        Gb = ub.getUint32(12, !0);
      if (ub.getUint32(16, !0) !== Ob || 20 + Gb > hb) return null;
      let Ub;
      try {
        Ub = JSON.parse((new TextDecoder).decode(bb.subarray(20, 20 + Gb)))
      } catch {
        return null
      }
      return "object" === typeof Ub && null !== Ub ? {
        json: Ub,
        jsonEnd: 20 + Gb,
        length: hb
      } : null
    }

    function Ub(bb) {
      var ub;
      const hb = null === (ub = Gb(bb)) || void 0 === ub ? void 0 : ub.json;
      if (void 0 === hb || !Array.isArray(hb.extensionsUsed) || !hb.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Bb = hb.meshes;
      return Array.isArray(Bb) && Bb.some((bb => {
        const ub = null === bb || void 0 === bb ? void 0 : bb.primitives;
        return Array.isArray(ub) && ub.some((bb => {
          const ub = null === bb || void 0 === bb ? void 0 : bb.extensions;
          return null != (null === ub || void 0 === ub ? void 0 : ub.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42760: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => Ab,
      pageModelPool: () => Wb
    });
    var Bb = hb(2688),
      Ob = hb(35948),
      Gb = hb(40198),
      Ub = hb(40945),
      Lb = hb(35925);
    Error;
    class Yb extends Error {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${bb}: ${ub}`), this.stage = bb, this.url = hb, this.status = Bb, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function Sb(bb, ub) {
      let hb = null,
        Ob = !1;
      return {
        get: () => {
          if (null === hb) {
            const Gb = async function(bb, ub) {
              try {
                return (await (0, Bb.G)(bb)).buffer
              } catch (hb) {
                throw new Yb(ub, (0, Lb.l)(hb), bb, hb instanceof Bb.g ? hb.status : null)
              }
            }(bb, ub);
            hb = Gb, Gb.then((() => {
              Ob = hb === Gb
            }), (() => {
              hb = null
            }))
          }
          return hb
        },
        forget: () => {
          Ob && (hb = null, Ob = !1)
        }
      }
    }

    function ab(bb, ub) {
      const hb = Sb(ub, "wasm"),
        Bb = Sb(bb, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (hb.forget(), Bb.forget());
        const [bb, ub] = await Promise.all([hb.get(), Bb.get()]);
        return {
          script: ub,
          wasmBinary: bb
        }
      }
    }
    var Hb = hb(9173),
      wb = hb(2911),
      Zb = hb(40398),
      Xb = hb(40429);
    class pb extends Error {
      constructor(bb) {
        super(`no model worker could install it: ${bb}`), this.name = "DracoInstallError"
      }
    }
    class ob {
      constructor(bb) {
        this.opts = bb, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.eZ = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let ub = 0; ub < Math.max(1, bb.count); ub++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          eZ: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((bb => null !== bb.job)).length
      }
      build(bb, ub) {
        if (null !== this.stopped) return Promise.resolve((0, Zb.r)(bb, this.stopped));
        const hb = (0, Hb.l)(ub);
        return hb && this.downloadDecoder(), new Promise((Bb => {
          this.queue.push({
            word: bb,
            glb: ub,
            draco: hb,
            attempts: 0,
            resolve: Bb
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.eZ ? this.eZ : null
      }
      pump() {
        const bb = this.files();
        for (const ub of this.slots) {
          if (null !== this.stopped) return;
          if (ub.gaveUp || ub.starting) continue;
          if (null === ub.worker) {
            this.start(ub);
            continue
          }
          if (null !== bb && "none" === ub.eZ && ub.failedDownload !== this.downloads && this.install(ub, ub.worker, bb), null !== ub.job) continue;
          const hb = this.queue.findIndex((bb => "installed" === ub.eZ || !bb.draco));
          hb >= 0 && this.run(ub, ub.worker, this.queue.splice(hb, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((bb => !bb.gaveUp && ("none" !== bb.eZ || bb.failedDownload !== this.downloads))) || (this.eZ = "uninstallable", this.decoderFailed(new pb(this.installFailure)))
      }
      start(bb) {
        if (bb.losses >= 6) return bb.gaveUp = !0, void(this.slots.every((bb => bb.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        bb.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((ub => {
          let [hb, Bb] = ub;
          null === this.stopped && this.launch(bb, hb, Bb)
        }), (bb => {
          this.fail(bb)
        }))
      }
      launch(bb, ub, hb) {
        let Bb;
        try {
          Bb = ub()
        } catch (Ob) {
          return void this.lose(bb, `a model worker could not be created (${String(Ob)})`)
        }
        bb.worker = Bb, this.startTimer(bb, 3e4, (ub => {
          this.lose(bb, `a model worker did not start: ${(0,Xb.h)(ub)}`)
        })), Bb.onmessage = ub => {
          let {
            data: hb
          } = ub;
          this.answered(bb, Bb, hb)
        }, Bb.onerror = ub => {
          this.lose(bb, bb.starting ? `a model worker failed to start: ${ub.message}` : `a model worker failed: ${ub.message}`)
        }, Bb.postMessage({
          type: "start",
          module: hb
        })
      }
      startTimer(bb, ub, hb) {
        bb.timer = new Xb.f(ub, (ub => {
          bb.timer = null, hb(ub)
        }), void 0, this.opts.visibility)
      }
      clearTimer(bb) {
        var ub;
        null === (ub = bb.timer) || void 0 === ub || ub.cancel(), bb.timer = null
      }
      answered(bb, ub, hb) {
        if ("lost" === hb.type) return void this.lose(bb, hb.reason);
        if (bb.starting) return "started" !== hb.type ? void this.lose(bb, `a model worker answered ${hb.type} before it started`) : (this.clearTimer(bb), bb.starting = !1, bb.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === hb.type || "dracoFailed" === hb.type) {
          if (hb.seq !== bb.installSeq) return;
          return void("installing" === bb.eZ ? (this.clearTimer(bb), "dracoInstalled" === hb.type ? (bb.eZ = "installed", this.pump()) : this.installFailed(bb, hb.reason)) : "dracoInstalled" === hb.type && "none" === bb.eZ && bb.failedDownload === this.downloads && (bb.eZ = "installed", this.pump()))
        }
        const Bb = bb.job;
        null !== Bb && "started" !== hb.type && hb.seq === bb.seq && ("trapped" !== hb.type ? (bb.job = null, bb.losses = 0, this.jobLosses = 0, Bb.resolve(new Uint8Array(hb.record)), this.pump()) : this.lose(bb, hb.trap, !0))
      }
      install(bb, ub, hb) {
        const Bb = this.nextSeq++;
        bb.eZ = "installing", bb.installSeq = Bb, this.startTimer(bb, 3e4, (ub => {
          this.installFailed(bb, `no install within ${Math.round(ub)} ms`)
        }));
        const Ob = hb.script.slice(0),
          Gb = hb.wasmBinary.slice(0);
        ub.postMessage({
          type: "installDraco",
          seq: Bb,
          script: Ob,
          wasmBinary: Gb
        }, [Ob, Gb])
      }
      installFailed(bb, ub) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${ub}`), this.noInstall(bb, ub), this.pump()
      }
      noInstall(bb, ub) {
        bb.eZ = "none", bb.failedDownload = this.downloads, this.installFailure = ub
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.eZ || null !== this.files()) return;
        const bb = "uninstallable" === this.eZ;
        this.eZ = "downloading", this.opts.downloadFiles(bb).then((bb => {
          null === this.stopped && (this.eZ = bb, this.downloads++, this.pump())
        }), (bb => {
          this.eZ = null, this.decoderFailed(bb)
        }))
      }
      decoderFailed(bb) {
        if (null !== this.stopped) return;
        const ub = (0, Lb.l)(bb);
        let hb = 0;
        for (const Bb of this.queue.splice(0)) Bb.draco ? (Bb.resolve((0, Zb.h)(Bb.word, ub)), hb++) : this.queue.push(Bb);
        hb > 0 && this.opts.onDecoderFailed(bb)
      }
      run(bb, ub, hb) {
        const Bb = this.nextSeq++;
        bb.seq = Bb, bb.job = hb, hb.attempts++;
        const Ob = hb.glb.slice();
        ub.postMessage({
          type: "job",
          seq: Bb,
          word: hb.word,
          glb: Ob.buffer
        }, [Ob.buffer])
      }
      lose(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(bb);
        const Bb = bb.worker;
        null !== Bb && (Bb.onmessage = null, Bb.onerror = null, Bb.terminate());
        const Ob = !hb && "installing" === bb.eZ;
        bb.worker = null, bb.starting = !1, bb.eZ = "none", Ob && this.noInstall(bb, ub), void 0 !== bb.startedAt && performance.now() - bb.startedAt >= 6e4 && (bb.losses = 0), bb.startedAt = void 0;
        const Gb = bb.job;
        if (bb.job = null, null !== Gb || Ob || bb.losses++, this.opts.onWorkerLost(ub), null !== Gb && Ob) Gb.attempts--, this.queue.unshift(Gb);
        else if (null !== Gb && (Gb.attempts < 2 ? this.queue.unshift(Gb) : Gb.resolve((0, Zb.q)(Gb.word, ub)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(bb) {
        if (null !== this.stopped) return;
        this.stopped = null === bb ? "the model workers stopped" : `the model workers could not start: ${(0,Lb.l)(bb)}`;
        const ub = this.stopped,
          hb = bb => {
            bb.resolve((0, Zb.r)(bb.word, ub))
          };
        for (const Ob of this.slots) {
          var Bb;
          this.clearTimer(Ob), null === (Bb = Ob.worker) || void 0 === Bb || Bb.terminate(), Ob.worker = null, null !== Ob.job && hb(Ob.job), Ob.job = null
        }
        this.queue.splice(0).forEach(hb), null !== bb && this.opts.onUnavailable(bb)
      }
    }
    const Ab = [...Bb.s, 5e3, 15e3, 3e4];
    let lb = null;
    const Kb = new Set;

    function Wb(bb) {
      return Kb.add(bb), lb ??= function() {
        let bb = (ub = navigator.hardwareConcurrency, Lb = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, ub > 2 && !(0, wb.m)(Lb) ? 2 : 1);
        var ub, Lb;
        const Sb = new ob({
          module: (0, Ob.g)(Gb.c, {
            delays: Ab,
            onRetry: (bb, ub) => {
              lb === Sb && Cb((hb => {
                hb.onModuleRetry(bb, ub)
              }))
            }
          }),
          downloadFiles: ab(Ub.b.scriptUrl, Ub.b.wasmBinaryUrl),
          loadWorker: async () => (await hb.e(43).then((() => hb(60936)))).createModelWorker,
          count: bb,
          onUnavailable: bb => {
            if (lb === Sb) {
              lb = null;
              const ub = function(bb) {
                return bb instanceof Bb.c ? [Gb.c.url().href] : void 0
              }(bb);
              Cb((hb => {
                hb.onUnavailable(bb, ub)
              }))
            }
          },
          onDecoderFailed: bb => {
            if (lb === Sb) {
              const ub = bb instanceof Yb ? bb.goneUrl : null,
                hb = null === ub ? void 0 : [ub];
              Cb((ub => {
                ub.onDecoderFailed(bb, hb)
              }))
            }
          },
          onWorkerLost: bb => {
            lb === Sb && Cb((ub => {
              ub.onWorkerLost(bb)
            }))
          }
        });
        return Sb
      }(), {
        pool: lb,
        unlisten: () => {
          Kb.delete(bb)
        }
      }
    }

    function Cb(bb) {
      for (const hb of [...Kb]) try {
        bb(hb)
      } catch (ub) {
        console.error("[pageModelPool] a listener threw", ub)
      }
    }
  },
  40950: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40956: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);