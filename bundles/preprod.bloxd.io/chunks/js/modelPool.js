export const id = 43;
export const ids = [43];
export const modules = {
  41745: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(131),
      op = cp(1087);

    function Ip(pp) {
      return (0, Op.isDiscordClient)() ? `https://${op.c.discordDomain}/${pp.href}` : pp.href
    }
    const Sp = {
      scriptUrl: Ip(new cp.U(cp(41749))),
      wasmBinaryUrl: Ip(new cp.U(cp(41755)))
    }
  },
  34503: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op,
      f: () => Ip,
      h: () => Sp
    });
    const Op = 1179937895,
      op = 1313821514;

    function Ip(pp) {
      const ip = new DataView(pp.buffer, pp.byteOffset, pp.byteLength);
      if (pp.byteLength < 20 || ip.getUint32(0, !0) !== Op || 2 !== ip.getUint32(4, !0)) return null;
      const cp = Math.min(ip.getUint32(8, !0), pp.byteLength),
        Ip = ip.getUint32(12, !0);
      if (ip.getUint32(16, !0) !== op || 20 + Ip > cp) return null;
      let Sp;
      try {
        Sp = JSON.parse((new TextDecoder).decode(pp.subarray(20, 20 + Ip)))
      } catch {
        return null
      }
      return "object" === typeof Sp && null !== Sp ? {
        json: Sp,
        jsonEnd: 20 + Ip,
        length: cp
      } : null
    }

    function Sp(pp) {
      var ip;
      const cp = null === (ip = Ip(pp)) || void 0 === ip ? void 0 : ip.json;
      if (void 0 === cp || !Array.isArray(cp.extensionsUsed) || !cp.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Op = cp.meshes;
      return Array.isArray(Op) && Op.some((pp => {
        const ip = null === pp || void 0 === pp ? void 0 : pp.primitives;
        return Array.isArray(ip) && ip.some((pp => {
          const ip = null === pp || void 0 === pp ? void 0 : pp.extensions;
          return null != (null === ip || void 0 === ip ? void 0 : ip.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  51251: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => vp,
      pageModelPool: () => dp
    });
    var Op = cp(2970),
      op = cp(36519),
      Ip = cp(41058),
      Sp = cp(41745),
      xp = cp(36484);
    Error;
    class Lp extends Error {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${pp}: ${ip}`), this.stage = pp, this.url = cp, this.status = Op, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function Yp(pp, ip) {
      let cp = null,
        op = !1;
      return {
        get: () => {
          if (null === cp) {
            const Ip = async function(pp, ip) {
              try {
                return (await (0, Op.F)(pp)).buffer
              } catch (cp) {
                throw new Lp(ip, (0, xp.h)(cp), pp, cp instanceof Op.d ? cp.status : null)
              }
            }(pp, ip);
            cp = Ip, Ip.then((() => {
              op = cp === Ip
            }), (() => {
              cp = null
            }))
          }
          return cp
        },
        forget: () => {
          op && (cp = null, op = !1)
        }
      }
    }

    function Dp(pp, ip) {
      const cp = Yp(ip, "wasm"),
        Op = Yp(pp, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (cp.forget(), Op.forget());
        const [pp, ip] = await Promise.all([cp.get(), Op.get()]);
        return {
          script: ip,
          wasmBinary: pp
        }
      }
    }
    var Ap = cp(34503),
      Pp = cp(3211),
      Wp = cp(41001),
      yp = cp(41125);
    class Up extends Error {
      constructor(pp) {
        super(`no model worker could install it: ${pp}`), this.name = "DracoInstallError"
      }
    }
    class wp {
      constructor(pp) {
        this.opts = pp, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.Wy = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let ip = 0; ip < Math.max(1, pp.count); ip++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          Wy: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((pp => null !== pp.job)).length
      }
      build(pp, ip) {
        if (null !== this.stopped) return Promise.resolve((0, Wp.q)(pp, this.stopped));
        const cp = (0, Ap.h)(ip);
        return cp && this.downloadDecoder(), new Promise((Op => {
          this.queue.push({
            word: pp,
            glb: ip,
            draco: cp,
            attempts: 0,
            resolve: Op
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
        return "object" === typeof this.Wy ? this.Wy : null
      }
      pump() {
        const pp = this.resting && 0 === this.queue.length,
          ip = this.files();
        for (const cp of this.slots) {
          if (null !== this.stopped) return;
          if (cp.gaveUp || cp.starting) continue;
          if (null === cp.worker) {
            pp || this.start(cp);
            continue
          }
          if (pp) {
            null === cp.job && "installing" !== cp.Wy && this.end(cp);
            continue
          }
          if (null !== ip && "none" === cp.Wy && cp.failedDownload !== this.downloads && this.install(cp, cp.worker, ip), null !== cp.job) continue;
          const Op = this.queue.findIndex((pp => "installed" === cp.Wy || !pp.draco));
          Op >= 0 && this.run(cp, cp.worker, this.queue.splice(Op, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((pp => !pp.gaveUp && ("none" !== pp.Wy || pp.failedDownload !== this.downloads))) || (this.Wy = "uninstallable", this.decoderFailed(new Up(this.installFailure)))
      }
      start(pp) {
        if (pp.losses >= 6) return pp.gaveUp = !0, void(this.slots.every((pp => pp.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        pp.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((ip => {
          let [cp, Op] = ip;
          null === this.stopped && this.launch(pp, cp, Op)
        }), (pp => {
          this.fail(pp)
        }))
      }
      launch(pp, ip, cp) {
        let Op;
        try {
          Op = ip()
        } catch (op) {
          return void this.lose(pp, `a model worker could not be created (${String(op)})`)
        }
        pp.worker = Op, this.startTimer(pp, 3e4, (ip => {
          this.lose(pp, `a model worker did not start: ${(0,yp.j)(ip)}`)
        })), Op.onmessage = ip => {
          let {
            data: cp
          } = ip;
          this.answered(pp, Op, cp)
        }, Op.onerror = ip => {
          this.lose(pp, pp.starting ? `a model worker failed to start: ${ip.message}` : `a model worker failed: ${ip.message}`)
        }, Op.postMessage({
          type: "start",
          module: cp
        })
      }
      end(pp) {
        const ip = pp.worker;
        null !== ip && (ip.onmessage = null, ip.onerror = null, ip.terminate()), pp.worker = null, pp.Wy = "none", pp.startedAt = void 0
      }
      startTimer(pp, ip, cp) {
        pp.timer = new yp.g(ip, (ip => {
          pp.timer = null, cp(ip)
        }), void 0, this.opts.visibility)
      }
      clearTimer(pp) {
        var ip;
        null === (ip = pp.timer) || void 0 === ip || ip.cancel(), pp.timer = null
      }
      answered(pp, ip, cp) {
        if ("lost" === cp.type) return void this.lose(pp, cp.reason);
        if (pp.starting) return "started" !== cp.type ? void this.lose(pp, `a model worker answered ${cp.type} before it started`) : (this.clearTimer(pp), pp.starting = !1, pp.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === cp.type || "dracoFailed" === cp.type) {
          if (cp.seq !== pp.installSeq) return;
          return void("installing" === pp.Wy ? (this.clearTimer(pp), "dracoInstalled" === cp.type ? (pp.Wy = "installed", this.pump()) : this.installFailed(pp, cp.reason)) : "dracoInstalled" === cp.type && "none" === pp.Wy && pp.failedDownload === this.downloads && (pp.Wy = "installed", pp.failedDownload = 0, this.pump()))
        }
        const Op = pp.job;
        null !== Op && "started" !== cp.type && cp.seq === pp.seq && ("trapped" !== cp.type ? (pp.job = null, pp.losses = 0, this.jobLosses = 0, Op.resolve(new Uint8Array(cp.record)), this.pump()) : this.lose(pp, cp.trap, !0))
      }
      install(pp, ip, cp) {
        const Op = this.nextSeq++;
        pp.Wy = "installing", pp.installSeq = Op, this.startTimer(pp, 3e4, (ip => {
          this.installFailed(pp, `no install within ${Math.round(ip)} ms`)
        }));
        const op = cp.script.slice(0),
          Ip = cp.wasmBinary.slice(0);
        ip.postMessage({
          type: "installDraco",
          seq: Op,
          script: op,
          wasmBinary: Ip
        }, [op, Ip])
      }
      installFailed(pp, ip) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${ip}`), this.noInstall(pp, ip), this.pump()
      }
      noInstall(pp, ip) {
        pp.Wy = "none", pp.failedDownload = this.downloads, this.installFailure = ip
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.Wy || null !== this.files()) return;
        const pp = "uninstallable" === this.Wy;
        this.Wy = "downloading", this.opts.downloadFiles(pp).then((pp => {
          null === this.stopped && (this.Wy = pp, this.downloads++, this.pump())
        }), (pp => {
          this.Wy = null, this.decoderFailed(pp)
        }))
      }
      decoderFailed(pp) {
        if (null !== this.stopped) return;
        const ip = (0, xp.h)(pp);
        let cp = 0;
        for (const Op of this.queue.splice(0)) Op.draco ? (Op.resolve((0, Wp.i)(Op.word, ip)), cp++) : this.queue.push(Op);
        cp > 0 && this.opts.onDecoderFailed(pp), this.pump()
      }
      run(pp, ip, cp) {
        const Op = this.nextSeq++;
        pp.seq = Op, pp.job = cp, cp.attempts++;
        const op = cp.glb.slice();
        ip.postMessage({
          type: "job",
          seq: Op,
          word: cp.word,
          glb: op.buffer
        }, [op.buffer])
      }
      lose(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(pp);
        const Op = !cp && "installing" === pp.Wy;
        void 0 !== pp.startedAt && performance.now() - pp.startedAt >= 6e4 && (pp.losses = 0), this.end(pp), pp.starting = !1, Op && this.noInstall(pp, ip);
        const op = pp.job;
        if (pp.job = null, null !== op || Op || pp.losses++, this.opts.onWorkerLost(ip), null !== op && Op) op.attempts--, this.queue.unshift(op);
        else if (null !== op && (op.attempts < 2 ? this.queue.unshift(op) : op.resolve((0, Wp.o)(op.word, ip)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(pp) {
        if (null !== this.stopped) return;
        this.stopped = null === pp ? "the model workers stopped" : `the model workers could not start: ${(0,xp.h)(pp)}`;
        const ip = this.stopped,
          cp = pp => {
            pp.resolve((0, Wp.q)(pp.word, ip))
          };
        for (const op of this.slots) {
          var Op;
          this.clearTimer(op), null === (Op = op.worker) || void 0 === Op || Op.terminate(), op.worker = null, null !== op.job && cp(op.job), op.job = null
        }
        this.queue.splice(0).forEach(cp), null !== pp && this.opts.onUnavailable(pp)
      }
    }
    const vp = [...Op.m, 5e3, 15e3, 3e4];
    let tp = null;
    const Hp = new Set;

    function dp(pp) {
      return Hp.add(pp), tp ??= function() {
        let pp = (ip = navigator.hardwareConcurrency, xp = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, ip > 2 && !(0, Pp.l)(xp) ? 2 : 1);
        var ip, xp;
        const Yp = new wp({
          module: (0, op.f)(Ip.e, {
            delays: vp,
            onRetry: (pp, ip) => {
              tp === Yp && ep((cp => {
                cp.onModuleRetry(pp, ip)
              }))
            }
          }),
          downloadFiles: Dp(Sp.b.scriptUrl, Sp.b.wasmBinaryUrl),
          loadWorker: async () => (await cp.e(44).then((() => cp(61597)))).createModelWorker,
          count: pp,
          onUnavailable: pp => {
            if (tp === Yp) {
              tp = null;
              const ip = function(pp) {
                return pp instanceof Op.c ? [Ip.e.url().href] : void 0
              }(pp);
              ep((cp => {
                cp.onUnavailable(pp, ip)
              }))
            }
          },
          onDecoderFailed: pp => {
            if (tp === Yp) {
              const ip = pp instanceof Lp ? pp.goneUrl : null,
                cp = null === ip ? void 0 : [ip];
              ep((ip => {
                ip.onDecoderFailed(pp, cp)
              }))
            }
          },
          onWorkerLost: pp => {
            tp === Yp && ep((ip => {
              ip.onWorkerLost(pp)
            }))
          }
        });
        return Yp
      }(), {
        pool: tp,
        unlisten: () => {
          Hp.delete(pp)
        }
      }
    }

    function ep(pp) {
      for (const cp of [...Hp]) try {
        pp(cp)
      } catch (ip) {
        console.error("[pageModelPool] a listener threw", ip)
      }
    }
  },
  41755: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  41749: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);