export const id = 42;
export const ids = [42];
export const modules = {
  40919: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb
    });
    var kb = sb(167),
      Wb = sb(1217);

    function ab(bb) {
      return (0, kb.b)() ? `https://${Wb.d.discordDomain}/${bb.href}` : bb.href
    }
    const Tb = {
      scriptUrl: ab(new sb.U(sb(40924))),
      wasmBinaryUrl: ab(new sb.U(sb(40928)))
    }
  },
  9002: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      h: () => ab,
      i: () => Tb
    });
    const kb = 1179937895,
      Wb = 1313821514;

    function ab(bb) {
      const cb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      if (bb.byteLength < 20 || cb.getUint32(0, !0) !== kb || 2 !== cb.getUint32(4, !0)) return null;
      const sb = Math.min(cb.getUint32(8, !0), bb.byteLength),
        ab = cb.getUint32(12, !0);
      if (cb.getUint32(16, !0) !== Wb || 20 + ab > sb) return null;
      let Tb;
      try {
        Tb = JSON.parse((new TextDecoder).decode(bb.subarray(20, 20 + ab)))
      } catch {
        return null
      }
      return "object" === typeof Tb && null !== Tb ? {
        json: Tb,
        jsonEnd: 20 + ab,
        length: sb
      } : null
    }

    function Tb(bb) {
      var cb;
      const sb = null === (cb = ab(bb)) || void 0 === cb ? void 0 : cb.json;
      if (void 0 === sb || !Array.isArray(sb.extensionsUsed) || !sb.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const kb = sb.meshes;
      return Array.isArray(kb) && kb.some((bb => {
        const cb = null === bb || void 0 === bb ? void 0 : bb.primitives;
        return Array.isArray(cb) && cb.some((bb => {
          const cb = null === bb || void 0 === bb ? void 0 : bb.extensions;
          return null != (null === cb || void 0 === cb ? void 0 : cb.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42721: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => eb,
      pageModelPool: () => Vb
    });
    var kb = sb(3505),
      Wb = sb(35976),
      ab = sb(40189),
      Tb = sb(40919),
      Ub = sb(35945);
    Error;
    class Ib extends Error {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${bb}: ${cb}`), this.stage = bb, this.url = sb, this.status = kb, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function Hb(bb, cb) {
      let sb = null,
        Wb = !1;
      return {
        get: () => {
          if (null === sb) {
            const ab = async function(bb, cb) {
              try {
                return (await (0, kb.C)(bb)).buffer
              } catch (sb) {
                throw new Ib(cb, (0, Ub.h)(sb), bb, sb instanceof kb.i ? sb.status : null)
              }
            }(bb, cb);
            sb = ab, ab.then((() => {
              Wb = sb === ab
            }), (() => {
              sb = null
            }))
          }
          return sb
        },
        forget: () => {
          Wb && (sb = null, Wb = !1)
        }
      }
    }

    function fb(bb, cb) {
      const sb = Hb(cb, "wasm"),
        kb = Hb(bb, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (sb.forget(), kb.forget());
        const [bb, cb] = await Promise.all([sb.get(), kb.get()]);
        return {
          script: cb,
          wasmBinary: bb
        }
      }
    }
    var Mb = sb(9002),
      Xb = sb(2867),
      nb = sb(40396),
      mb = sb(40428);
    class lb extends Error {
      constructor(bb) {
        super(`no model worker could install it: ${bb}`), this.name = "DracoInstallError"
      }
    }
    class Qb {
      constructor(bb) {
        this.opts = bb, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.Vm = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let cb = 0; cb < Math.max(1, bb.count); cb++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          Vm: "none",
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
      build(bb, cb) {
        if (null !== this.stopped) return Promise.resolve((0, nb.t)(bb, this.stopped));
        const sb = (0, Mb.i)(cb);
        return sb && this.downloadDecoder(), new Promise((kb => {
          this.queue.push({
            word: bb,
            glb: cb,
            draco: sb,
            attempts: 0,
            resolve: kb
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.Vm ? this.Vm : null
      }
      pump() {
        const bb = this.files();
        for (const cb of this.slots) {
          if (null !== this.stopped) return;
          if (cb.gaveUp || cb.starting) continue;
          if (null === cb.worker) {
            this.start(cb);
            continue
          }
          if (null !== bb && "none" === cb.Vm && cb.failedDownload !== this.downloads && this.install(cb, cb.worker, bb), null !== cb.job) continue;
          const sb = this.queue.findIndex((bb => "installed" === cb.Vm || !bb.draco));
          sb >= 0 && this.run(cb, cb.worker, this.queue.splice(sb, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((bb => !bb.gaveUp && ("none" !== bb.Vm || bb.failedDownload !== this.downloads))) || (this.Vm = "uninstallable", this.decoderFailed(new lb(this.installFailure)))
      }
      start(bb) {
        if (bb.losses >= 6) return bb.gaveUp = !0, void(this.slots.every((bb => bb.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        bb.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((cb => {
          let [sb, kb] = cb;
          null === this.stopped && this.launch(bb, sb, kb)
        }), (bb => {
          this.fail(bb)
        }))
      }
      launch(bb, cb, sb) {
        let kb;
        try {
          kb = cb()
        } catch (Wb) {
          return void this.lose(bb, `a model worker could not be created (${String(Wb)})`)
        }
        bb.worker = kb, this.startTimer(bb, 3e4, (cb => {
          this.lose(bb, `a model worker did not start: ${(0,mb.i)(cb)}`)
        })), kb.onmessage = cb => {
          let {
            data: sb
          } = cb;
          this.answered(bb, kb, sb)
        }, kb.onerror = cb => {
          this.lose(bb, bb.starting ? `a model worker failed to start: ${cb.message}` : `a model worker failed: ${cb.message}`)
        }, kb.postMessage({
          type: "start",
          module: sb
        })
      }
      startTimer(bb, cb, sb) {
        bb.timer = new mb.g(cb, (cb => {
          bb.timer = null, sb(cb)
        }), void 0, this.opts.visibility)
      }
      clearTimer(bb) {
        var cb;
        null === (cb = bb.timer) || void 0 === cb || cb.cancel(), bb.timer = null
      }
      answered(bb, cb, sb) {
        if ("lost" === sb.type) return void this.lose(bb, sb.reason);
        if (bb.starting) return "started" !== sb.type ? void this.lose(bb, `a model worker answered ${sb.type} before it started`) : (this.clearTimer(bb), bb.starting = !1, bb.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === sb.type || "dracoFailed" === sb.type) {
          if (sb.seq !== bb.installSeq) return;
          return void("installing" === bb.Vm ? (this.clearTimer(bb), "dracoInstalled" === sb.type ? (bb.Vm = "installed", this.pump()) : this.installFailed(bb, sb.reason)) : "dracoInstalled" === sb.type && "none" === bb.Vm && bb.failedDownload === this.downloads && (bb.Vm = "installed", this.pump()))
        }
        const kb = bb.job;
        null !== kb && "started" !== sb.type && sb.seq === bb.seq && ("trapped" !== sb.type ? (bb.job = null, bb.losses = 0, this.jobLosses = 0, kb.resolve(new Uint8Array(sb.record)), this.pump()) : this.lose(bb, sb.trap, !0))
      }
      install(bb, cb, sb) {
        const kb = this.nextSeq++;
        bb.Vm = "installing", bb.installSeq = kb, this.startTimer(bb, 3e4, (cb => {
          this.installFailed(bb, `no install within ${Math.round(cb)} ms`)
        }));
        const Wb = sb.script.slice(0),
          ab = sb.wasmBinary.slice(0);
        cb.postMessage({
          type: "installDraco",
          seq: kb,
          script: Wb,
          wasmBinary: ab
        }, [Wb, ab])
      }
      installFailed(bb, cb) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${cb}`), this.noInstall(bb, cb), this.pump()
      }
      noInstall(bb, cb) {
        bb.Vm = "none", bb.failedDownload = this.downloads, this.installFailure = cb
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.Vm || null !== this.files()) return;
        const bb = "uninstallable" === this.Vm;
        this.Vm = "downloading", this.opts.downloadFiles(bb).then((bb => {
          null === this.stopped && (this.Vm = bb, this.downloads++, this.pump())
        }), (bb => {
          this.Vm = null, this.decoderFailed(bb)
        }))
      }
      decoderFailed(bb) {
        if (null !== this.stopped) return;
        const cb = (0, Ub.h)(bb);
        let sb = 0;
        for (const kb of this.queue.splice(0)) kb.draco ? (kb.resolve((0, nb.h)(kb.word, cb)), sb++) : this.queue.push(kb);
        sb > 0 && this.opts.onDecoderFailed(bb)
      }
      run(bb, cb, sb) {
        const kb = this.nextSeq++;
        bb.seq = kb, bb.job = sb, sb.attempts++;
        const Wb = sb.glb.slice();
        cb.postMessage({
          type: "job",
          seq: kb,
          word: sb.word,
          glb: Wb.buffer
        }, [Wb.buffer])
      }
      lose(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(bb);
        const kb = bb.worker;
        null !== kb && (kb.onmessage = null, kb.onerror = null, kb.terminate());
        const Wb = !sb && "installing" === bb.Vm;
        bb.worker = null, bb.starting = !1, bb.Vm = "none", Wb && this.noInstall(bb, cb), void 0 !== bb.startedAt && performance.now() - bb.startedAt >= 6e4 && (bb.losses = 0), bb.startedAt = void 0;
        const ab = bb.job;
        if (bb.job = null, null !== ab || Wb || bb.losses++, this.opts.onWorkerLost(cb), null !== ab && Wb) ab.attempts--, this.queue.unshift(ab);
        else if (null !== ab && (ab.attempts < 2 ? this.queue.unshift(ab) : ab.resolve((0, nb.q)(ab.word, cb)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(bb) {
        if (null !== this.stopped) return;
        this.stopped = null === bb ? "the model workers stopped" : `the model workers could not start: ${(0,Ub.h)(bb)}`;
        const cb = this.stopped,
          sb = bb => {
            bb.resolve((0, nb.t)(bb.word, cb))
          };
        for (const Wb of this.slots) {
          var kb;
          this.clearTimer(Wb), null === (kb = Wb.worker) || void 0 === kb || kb.terminate(), Wb.worker = null, null !== Wb.job && sb(Wb.job), Wb.job = null
        }
        this.queue.splice(0).forEach(sb), null !== bb && this.opts.onUnavailable(bb)
      }
    }
    const eb = [...kb.r, 5e3, 15e3, 3e4];
    let Cb = null;
    const Nb = new Set;

    function Vb(bb) {
      return Nb.add(bb), Cb ??= function() {
        let bb = (cb = navigator.hardwareConcurrency, Ub = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, cb > 2 && !(0, Xb.s)(Ub) ? 2 : 1);
        var cb, Ub;
        const Hb = new Qb({
          module: (0, Wb.f)(ab.d, {
            delays: eb,
            onRetry: (bb, cb) => {
              Cb === Hb && Lb((sb => {
                sb.onModuleRetry(bb, cb)
              }))
            }
          }),
          downloadFiles: fb(Tb.c.scriptUrl, Tb.c.wasmBinaryUrl),
          loadWorker: async () => (await sb.e(43).then((() => sb(60918)))).createModelWorker,
          count: bb,
          onUnavailable: bb => {
            if (Cb === Hb) {
              Cb = null;
              const cb = function(bb) {
                return bb instanceof kb.e ? [ab.d.url().href] : void 0
              }(bb);
              Lb((sb => {
                sb.onUnavailable(bb, cb)
              }))
            }
          },
          onDecoderFailed: bb => {
            if (Cb === Hb) {
              const cb = bb instanceof Ib ? bb.goneUrl : null,
                sb = null === cb ? void 0 : [cb];
              Lb((cb => {
                cb.onDecoderFailed(bb, sb)
              }))
            }
          },
          onWorkerLost: bb => {
            Cb === Hb && Lb((cb => {
              cb.onWorkerLost(bb)
            }))
          }
        });
        return Hb
      }(), {
        pool: Cb,
        unlisten: () => {
          Nb.delete(bb)
        }
      }
    }

    function Lb(bb) {
      for (const sb of [...Nb]) try {
        bb(sb)
      } catch (cb) {
        console.error("[pageModelPool] a listener threw", cb)
      }
    }
  },
  40924: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40928: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);