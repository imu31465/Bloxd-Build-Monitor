export const id = 42;
export const ids = [42];
export const modules = {
  40625: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(137),
      Mb = Ub(1145);

    function Tb(bb) {
      return (0, Ab.d)() ? `https://${Mb.c.discordDomain}/${bb.href}` : bb.href
    }
    const Eb = {
      scriptUrl: Tb(new Ub.U(Ub(40632))),
      wasmBinaryUrl: Tb(new Ub.U(Ub(40638)))
    }
  },
  8989: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      e: () => Tb,
      f: () => Eb
    });
    const Ab = 1179937895,
      Mb = 1313821514;

    function Tb(bb) {
      const ab = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      if (bb.byteLength < 20 || ab.getUint32(0, !0) !== Ab || 2 !== ab.getUint32(4, !0)) return null;
      const Ub = Math.min(ab.getUint32(8, !0), bb.byteLength),
        Tb = ab.getUint32(12, !0);
      if (ab.getUint32(16, !0) !== Mb || 20 + Tb > Ub) return null;
      let Eb;
      try {
        Eb = JSON.parse((new TextDecoder).decode(bb.subarray(20, 20 + Tb)))
      } catch {
        return null
      }
      return "object" === typeof Eb && null !== Eb ? {
        json: Eb,
        jsonEnd: 20 + Tb,
        length: Ub
      } : null
    }

    function Eb(bb) {
      var ab;
      const Ub = null === (ab = Tb(bb)) || void 0 === ab ? void 0 : ab.json;
      if (void 0 === Ub || !Array.isArray(Ub.extensionsUsed) || !Ub.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Ab = Ub.meshes;
      return Array.isArray(Ab) && Ab.some((bb => {
        const ab = null === bb || void 0 === bb ? void 0 : bb.primitives;
        return Array.isArray(ab) && ab.some((bb => {
          const ab = null === bb || void 0 === bb ? void 0 : bb.extensions;
          return null != (null === ab || void 0 === ab ? void 0 : ab.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42469: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => yb,
      pageModelPool: () => zb
    });
    var Ab = Ub(3382),
      Mb = Ub(35776),
      Tb = Ub(39882),
      Eb = Ub(40625),
      Yb = Ub(35745);
    Error;
    class Bb extends Error {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${bb}: ${ab}`), this.stage = bb, this.url = Ub, this.status = Ab, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function eb(bb, ab) {
      let Ub = null,
        Mb = !1;
      return {
        get: () => {
          if (null === Ub) {
            const Tb = async function(bb, ab) {
              try {
                return (await (0, Ab.E)(bb)).buffer
              } catch (Ub) {
                throw new Bb(ab, (0, Yb.e)(Ub), bb, Ub instanceof Ab.d ? Ub.status : null)
              }
            }(bb, ab);
            Ub = Tb, Tb.then((() => {
              Mb = Ub === Tb
            }), (() => {
              Ub = null
            }))
          }
          return Ub
        },
        forget: () => {
          Mb && (Ub = null, Mb = !1)
        }
      }
    }

    function vb(bb, ab) {
      const Ub = eb(ab, "wasm"),
        Ab = eb(bb, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Ub.forget(), Ab.forget());
        const [bb, ab] = await Promise.all([Ub.get(), Ab.get()]);
        return {
          script: ab,
          wasmBinary: bb
        }
      }
    }
    var Lb = Ub(8989),
      Pb = Ub(2829),
      Xb = Ub(40076),
      jb = Ub(40117);
    class Rb extends Error {
      constructor(bb) {
        super(`no model worker could install it: ${bb}`), this.name = "DracoInstallError"
      }
    }
    class kb {
      constructor(bb) {
        this.opts = bb, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.rX = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let ab = 0; ab < Math.max(1, bb.count); ab++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          rX: "none",
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
      build(bb, ab) {
        if (null !== this.stopped) return Promise.resolve((0, Xb.w)(bb, this.stopped));
        const Ub = (0, Lb.f)(ab);
        return Ub && this.downloadDecoder(), new Promise((Ab => {
          this.queue.push({
            word: bb,
            glb: ab,
            draco: Ub,
            attempts: 0,
            resolve: Ab
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.rX ? this.rX : null
      }
      pump() {
        const bb = this.files();
        for (const ab of this.slots) {
          if (null !== this.stopped) return;
          if (ab.gaveUp || ab.starting) continue;
          if (null === ab.worker) {
            this.start(ab);
            continue
          }
          if (null !== bb && "none" === ab.rX && ab.failedDownload !== this.downloads && this.install(ab, ab.worker, bb), null !== ab.job) continue;
          const Ub = this.queue.findIndex((bb => "installed" === ab.rX || !bb.draco));
          Ub >= 0 && this.run(ab, ab.worker, this.queue.splice(Ub, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((bb => !bb.gaveUp && ("none" !== bb.rX || bb.failedDownload !== this.downloads))) || (this.rX = "uninstallable", this.decoderFailed(new Rb(this.installFailure)))
      }
      start(bb) {
        if (bb.losses >= 6) return bb.gaveUp = !0, void(this.slots.every((bb => bb.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        bb.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((ab => {
          let [Ub, Ab] = ab;
          null === this.stopped && this.launch(bb, Ub, Ab)
        }), (bb => {
          this.fail(bb)
        }))
      }
      launch(bb, ab, Ub) {
        let Ab;
        try {
          Ab = ab()
        } catch (Mb) {
          return void this.lose(bb, `a model worker could not be created (${String(Mb)})`)
        }
        bb.worker = Ab, this.startTimer(bb, 3e4, (ab => {
          this.lose(bb, `a model worker did not start: ${(0,jb.o)(ab)}`)
        })), Ab.onmessage = ab => {
          let {
            data: Ub
          } = ab;
          this.answered(bb, Ab, Ub)
        }, Ab.onerror = ab => {
          this.lose(bb, bb.starting ? `a model worker failed to start: ${ab.message}` : `a model worker failed: ${ab.message}`)
        }, Ab.postMessage({
          type: "start",
          module: Ub
        })
      }
      startTimer(bb, ab, Ub) {
        bb.timer = new jb.l(ab, (ab => {
          bb.timer = null, Ub(ab)
        }), void 0, this.opts.visibility)
      }
      clearTimer(bb) {
        var ab;
        null === (ab = bb.timer) || void 0 === ab || ab.cancel(), bb.timer = null
      }
      answered(bb, ab, Ub) {
        if ("lost" === Ub.type) return void this.lose(bb, Ub.reason);
        if (bb.starting) return "started" !== Ub.type ? void this.lose(bb, `a model worker answered ${Ub.type} before it started`) : (this.clearTimer(bb), bb.starting = !1, bb.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === Ub.type || "dracoFailed" === Ub.type) {
          if (Ub.seq !== bb.installSeq) return;
          return void("installing" === bb.rX ? (this.clearTimer(bb), "dracoInstalled" === Ub.type ? (bb.rX = "installed", this.pump()) : this.installFailed(bb, Ub.reason)) : "dracoInstalled" === Ub.type && "none" === bb.rX && bb.failedDownload === this.downloads && (bb.rX = "installed", this.pump()))
        }
        const Ab = bb.job;
        null !== Ab && "started" !== Ub.type && Ub.seq === bb.seq && ("trapped" !== Ub.type ? (bb.job = null, bb.losses = 0, this.jobLosses = 0, Ab.resolve(new Uint8Array(Ub.record)), this.pump()) : this.lose(bb, Ub.trap, !0))
      }
      install(bb, ab, Ub) {
        const Ab = this.nextSeq++;
        bb.rX = "installing", bb.installSeq = Ab, this.startTimer(bb, 3e4, (ab => {
          this.installFailed(bb, `no install within ${Math.round(ab)} ms`)
        }));
        const Mb = Ub.script.slice(0),
          Tb = Ub.wasmBinary.slice(0);
        ab.postMessage({
          type: "installDraco",
          seq: Ab,
          script: Mb,
          wasmBinary: Tb
        }, [Mb, Tb])
      }
      installFailed(bb, ab) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${ab}`), this.noInstall(bb, ab), this.pump()
      }
      noInstall(bb, ab) {
        bb.rX = "none", bb.failedDownload = this.downloads, this.installFailure = ab
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.rX || null !== this.files()) return;
        const bb = "uninstallable" === this.rX;
        this.rX = "downloading", this.opts.downloadFiles(bb).then((bb => {
          null === this.stopped && (this.rX = bb, this.downloads++, this.pump())
        }), (bb => {
          this.rX = null, this.decoderFailed(bb)
        }))
      }
      decoderFailed(bb) {
        if (null !== this.stopped) return;
        const ab = (0, Yb.e)(bb);
        let Ub = 0;
        for (const Ab of this.queue.splice(0)) Ab.draco ? (Ab.resolve((0, Xb.h)(Ab.word, ab)), Ub++) : this.queue.push(Ab);
        Ub > 0 && this.opts.onDecoderFailed(bb)
      }
      run(bb, ab, Ub) {
        const Ab = this.nextSeq++;
        bb.seq = Ab, bb.job = Ub, Ub.attempts++;
        const Mb = Ub.glb.slice();
        ab.postMessage({
          type: "job",
          seq: Ab,
          word: Ub.word,
          glb: Mb.buffer
        }, [Mb.buffer])
      }
      lose(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(bb);
        const Ab = bb.worker;
        null !== Ab && (Ab.onmessage = null, Ab.onerror = null, Ab.terminate());
        const Mb = !Ub && "installing" === bb.rX;
        bb.worker = null, bb.starting = !1, bb.rX = "none", Mb && this.noInstall(bb, ab), void 0 !== bb.startedAt && performance.now() - bb.startedAt >= 6e4 && (bb.losses = 0), bb.startedAt = void 0;
        const Tb = bb.job;
        if (bb.job = null, null !== Tb || Mb || bb.losses++, this.opts.onWorkerLost(ab), null !== Tb && Mb) Tb.attempts--, this.queue.unshift(Tb);
        else if (null !== Tb && (Tb.attempts < 2 ? this.queue.unshift(Tb) : Tb.resolve((0, Xb.s)(Tb.word, ab)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(bb) {
        if (null !== this.stopped) return;
        this.stopped = null === bb ? "the model workers stopped" : `the model workers could not start: ${(0,Yb.e)(bb)}`;
        const ab = this.stopped,
          Ub = bb => {
            bb.resolve((0, Xb.w)(bb.word, ab))
          };
        for (const Mb of this.slots) {
          var Ab;
          this.clearTimer(Mb), null === (Ab = Mb.worker) || void 0 === Ab || Ab.terminate(), Mb.worker = null, null !== Mb.job && Ub(Mb.job), Mb.job = null
        }
        this.queue.splice(0).forEach(Ub), null !== bb && this.opts.onUnavailable(bb)
      }
    }
    const yb = [...Ab.l, 5e3, 15e3, 3e4];
    let Zb = null;
    const Db = new Set;

    function zb(bb) {
      return Db.add(bb), Zb ??= function() {
        let bb = (ab = navigator.hardwareConcurrency, Yb = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, ab > 2 && !(0, Pb.p)(Yb) ? 2 : 1);
        var ab, Yb;
        const eb = new kb({
          module: (0, Mb.g)(Tb.d, {
            delays: yb,
            onRetry: (bb, ab) => {
              Zb === eb && xb((Ub => {
                Ub.onModuleRetry(bb, ab)
              }))
            }
          }),
          downloadFiles: vb(Eb.e.scriptUrl, Eb.e.wasmBinaryUrl),
          loadWorker: async () => (await Ub.e(43).then((() => Ub(60626)))).createModelWorker,
          count: bb,
          onUnavailable: bb => {
            if (Zb === eb) {
              Zb = null;
              const ab = function(bb) {
                return bb instanceof Ab.b ? [Tb.d.url().href] : void 0
              }(bb);
              xb((Ub => {
                Ub.onUnavailable(bb, ab)
              }))
            }
          },
          onDecoderFailed: bb => {
            if (Zb === eb) {
              const ab = bb instanceof Bb ? bb.goneUrl : null,
                Ub = null === ab ? void 0 : [ab];
              xb((ab => {
                ab.onDecoderFailed(bb, Ub)
              }))
            }
          },
          onWorkerLost: bb => {
            Zb === eb && xb((ab => {
              ab.onWorkerLost(bb)
            }))
          }
        });
        return eb
      }(), {
        pool: Zb,
        unlisten: () => {
          Db.delete(bb)
        }
      }
    }

    function xb(bb) {
      for (const Ub of [...Db]) try {
        bb(Ub)
      } catch (ab) {
        console.error("[pageModelPool] a listener threw", ab)
      }
    }
  },
  40632: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40638: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);