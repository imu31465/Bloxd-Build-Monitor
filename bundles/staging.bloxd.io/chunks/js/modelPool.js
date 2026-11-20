export const id = 42;
export const ids = [42];
export const modules = {
  41246: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq
    });
    var Yq = gq(136),
      lq = gq(1201);

    function Oq(qq) {
      return (0, Yq.c)() ? `https://${lq.d.discordDomain}/${qq.href}` : qq.href
    }
    const mq = {
      scriptUrl: Oq(new gq.U(gq(41253))),
      wasmBinaryUrl: Oq(new gq.U(gq(41259)))
    }
  },
  9366: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq,
      h: () => Oq,
      j: () => mq
    });
    const Yq = 1179937895,
      lq = 1313821514;

    function Oq(qq) {
      const Eq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength);
      if (qq.byteLength < 20 || Eq.getUint32(0, !0) !== Yq || 2 !== Eq.getUint32(4, !0)) return null;
      const gq = Math.min(Eq.getUint32(8, !0), qq.byteLength),
        Oq = Eq.getUint32(12, !0);
      if (Eq.getUint32(16, !0) !== lq || 20 + Oq > gq) return null;
      let mq;
      try {
        mq = JSON.parse((new TextDecoder).decode(qq.subarray(20, 20 + Oq)))
      } catch {
        return null
      }
      return "object" === typeof mq && null !== mq ? {
        json: mq,
        jsonEnd: 20 + Oq,
        length: gq
      } : null
    }

    function mq(qq) {
      var Eq;
      const gq = null === (Eq = Oq(qq)) || void 0 === Eq ? void 0 : Eq.json;
      if (void 0 === gq || !Array.isArray(gq.extensionsUsed) || !gq.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Yq = gq.meshes;
      return Array.isArray(Yq) && Yq.some((qq => {
        const Eq = null === qq || void 0 === qq ? void 0 : qq.primitives;
        return Array.isArray(Eq) && Eq.some((qq => {
          const Eq = null === qq || void 0 === qq ? void 0 : qq.extensions;
          return null != (null === Eq || void 0 === Eq ? void 0 : Eq.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  43119: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => jq,
      pageModelPool: () => Pq
    });
    var Yq = gq(2805),
      lq = gq(36380),
      Oq = gq(40490),
      mq = gq(41246),
      xq = gq(36356);
    Error;
    class Aq extends Error {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${qq}: ${Eq}`), this.stage = qq, this.url = gq, this.status = Yq, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function cq(qq, Eq) {
      let gq = null,
        lq = !1;
      return {
        get: () => {
          if (null === gq) {
            const Oq = async function(qq, Eq) {
              try {
                return (await (0, Yq.P)(qq)).buffer
              } catch (gq) {
                throw new Aq(Eq, (0, xq.j)(gq), qq, gq instanceof Yq.g ? gq.status : null)
              }
            }(qq, Eq);
            gq = Oq, Oq.then((() => {
              lq = gq === Oq
            }), (() => {
              gq = null
            }))
          }
          return gq
        },
        forget: () => {
          lq && (gq = null, lq = !1)
        }
      }
    }

    function uq(qq, Eq) {
      const gq = cq(Eq, "wasm"),
        Yq = cq(qq, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (gq.forget(), Yq.forget());
        const [qq, Eq] = await Promise.all([gq.get(), Yq.get()]);
        return {
          script: Eq,
          wasmBinary: qq
        }
      }
    }
    var Bq = gq(9366),
      Wq = gq(3027),
      Nq = gq(40714),
      aq = gq(40741);
    class Vq extends Error {
      constructor(qq) {
        super(`no model worker could install it: ${qq}`), this.name = "DracoInstallError"
      }
    }
    class dq {
      constructor(qq) {
        this.opts = qq, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.JN = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let Eq = 0; Eq < Math.max(1, qq.count); Eq++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          JN: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((qq => null !== qq.job)).length
      }
      build(qq, Eq) {
        if (null !== this.stopped) return Promise.resolve((0, Nq.s)(qq, this.stopped));
        const gq = (0, Bq.j)(Eq);
        return gq && this.downloadDecoder(), new Promise((Yq => {
          this.queue.push({
            word: qq,
            glb: Eq,
            draco: gq,
            attempts: 0,
            resolve: Yq
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.JN ? this.JN : null
      }
      pump() {
        const qq = this.files();
        for (const Eq of this.slots) {
          if (null !== this.stopped) return;
          if (Eq.gaveUp || Eq.starting) continue;
          if (null === Eq.worker) {
            this.start(Eq);
            continue
          }
          if (null !== qq && "none" === Eq.JN && Eq.failedDownload !== this.downloads && this.install(Eq, Eq.worker, qq), null !== Eq.job) continue;
          const gq = this.queue.findIndex((qq => "installed" === Eq.JN || !qq.draco));
          gq >= 0 && this.run(Eq, Eq.worker, this.queue.splice(gq, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((qq => !qq.gaveUp && ("none" !== qq.JN || qq.failedDownload !== this.downloads))) || (this.JN = "uninstallable", this.decoderFailed(new Vq(this.installFailure)))
      }
      start(qq) {
        if (qq.losses >= 6) return qq.gaveUp = !0, void(this.slots.every((qq => qq.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        qq.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((Eq => {
          let [gq, Yq] = Eq;
          null === this.stopped && this.launch(qq, gq, Yq)
        }), (qq => {
          this.fail(qq)
        }))
      }
      launch(qq, Eq, gq) {
        let Yq;
        try {
          Yq = Eq()
        } catch (lq) {
          return void this.lose(qq, `a model worker could not be created (${String(lq)})`)
        }
        qq.worker = Yq, this.startTimer(qq, 3e4, (Eq => {
          this.lose(qq, `a model worker did not start: ${(0,aq.k)(Eq)}`)
        })), Yq.onmessage = Eq => {
          let {
            data: gq
          } = Eq;
          this.answered(qq, Yq, gq)
        }, Yq.onerror = Eq => {
          this.lose(qq, qq.starting ? `a model worker failed to start: ${Eq.message}` : `a model worker failed: ${Eq.message}`)
        }, Yq.postMessage({
          type: "start",
          module: gq
        })
      }
      startTimer(qq, Eq, gq) {
        qq.timer = new aq.j(Eq, (Eq => {
          qq.timer = null, gq(Eq)
        }), void 0, this.opts.visibility)
      }
      clearTimer(qq) {
        var Eq;
        null === (Eq = qq.timer) || void 0 === Eq || Eq.cancel(), qq.timer = null
      }
      answered(qq, Eq, gq) {
        if ("lost" === gq.type) return void this.lose(qq, gq.reason);
        if (qq.starting) return "started" !== gq.type ? void this.lose(qq, `a model worker answered ${gq.type} before it started`) : (this.clearTimer(qq), qq.starting = !1, qq.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === gq.type || "dracoFailed" === gq.type) {
          if (gq.seq !== qq.installSeq) return;
          return void("installing" === qq.JN ? (this.clearTimer(qq), "dracoInstalled" === gq.type ? (qq.JN = "installed", this.pump()) : this.installFailed(qq, gq.reason)) : "dracoInstalled" === gq.type && "none" === qq.JN && qq.failedDownload === this.downloads && (qq.JN = "installed", this.pump()))
        }
        const Yq = qq.job;
        null !== Yq && "started" !== gq.type && gq.seq === qq.seq && ("trapped" !== gq.type ? (qq.job = null, qq.losses = 0, this.jobLosses = 0, Yq.resolve(new Uint8Array(gq.record)), this.pump()) : this.lose(qq, gq.trap, !0))
      }
      install(qq, Eq, gq) {
        const Yq = this.nextSeq++;
        qq.JN = "installing", qq.installSeq = Yq, this.startTimer(qq, 3e4, (Eq => {
          this.installFailed(qq, `no install within ${Math.round(Eq)} ms`)
        }));
        const lq = gq.script.slice(0),
          Oq = gq.wasmBinary.slice(0);
        Eq.postMessage({
          type: "installDraco",
          seq: Yq,
          script: lq,
          wasmBinary: Oq
        }, [lq, Oq])
      }
      installFailed(qq, Eq) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${Eq}`), this.noInstall(qq, Eq), this.pump()
      }
      noInstall(qq, Eq) {
        qq.JN = "none", qq.failedDownload = this.downloads, this.installFailure = Eq
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.JN || null !== this.files()) return;
        const qq = "uninstallable" === this.JN;
        this.JN = "downloading", this.opts.downloadFiles(qq).then((qq => {
          null === this.stopped && (this.JN = qq, this.downloads++, this.pump())
        }), (qq => {
          this.JN = null, this.decoderFailed(qq)
        }))
      }
      decoderFailed(qq) {
        if (null !== this.stopped) return;
        const Eq = (0, xq.j)(qq);
        let gq = 0;
        for (const Yq of this.queue.splice(0)) Yq.draco ? (Yq.resolve((0, Nq.g)(Yq.word, Eq)), gq++) : this.queue.push(Yq);
        gq > 0 && this.opts.onDecoderFailed(qq)
      }
      run(qq, Eq, gq) {
        const Yq = this.nextSeq++;
        qq.seq = Yq, qq.job = gq, gq.attempts++;
        const lq = gq.glb.slice();
        Eq.postMessage({
          type: "job",
          seq: Yq,
          word: gq.word,
          glb: lq.buffer
        }, [lq.buffer])
      }
      lose(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(qq);
        const Yq = qq.worker;
        null !== Yq && (Yq.onmessage = null, Yq.onerror = null, Yq.terminate());
        const lq = !gq && "installing" === qq.JN;
        qq.worker = null, qq.starting = !1, qq.JN = "none", lq && this.noInstall(qq, Eq), void 0 !== qq.startedAt && performance.now() - qq.startedAt >= 6e4 && (qq.losses = 0), qq.startedAt = void 0;
        const Oq = qq.job;
        if (qq.job = null, null !== Oq || lq || qq.losses++, this.opts.onWorkerLost(Eq), null !== Oq && lq) Oq.attempts--, this.queue.unshift(Oq);
        else if (null !== Oq && (Oq.attempts < 2 ? this.queue.unshift(Oq) : Oq.resolve((0, Nq.o)(Oq.word, Eq)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(qq) {
        if (null !== this.stopped) return;
        this.stopped = null === qq ? "the model workers stopped" : `the model workers could not start: ${(0,xq.j)(qq)}`;
        const Eq = this.stopped,
          gq = qq => {
            qq.resolve((0, Nq.s)(qq.word, Eq))
          };
        for (const lq of this.slots) {
          var Yq;
          this.clearTimer(lq), null === (Yq = lq.worker) || void 0 === Yq || Yq.terminate(), lq.worker = null, null !== lq.job && gq(lq.job), lq.job = null
        }
        this.queue.splice(0).forEach(gq), null !== qq && this.opts.onUnavailable(qq)
      }
    }
    const jq = [...Yq.y, 5e3, 15e3, 3e4];
    let Hq = null;
    const oq = new Set;

    function Pq(qq) {
      return oq.add(qq), Hq ??= function() {
        let qq = (Eq = navigator.hardwareConcurrency, xq = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, Eq > 2 && !(0, Wq.r)(xq) ? 2 : 1);
        var Eq, xq;
        const cq = new dq({
          module: (0, lq.f)(Oq.b, {
            delays: jq,
            onRetry: (qq, Eq) => {
              Hq === cq && Qq((gq => {
                gq.onModuleRetry(qq, Eq)
              }))
            }
          }),
          downloadFiles: uq(mq.e.scriptUrl, mq.e.wasmBinaryUrl),
          loadWorker: async () => (await gq.e(43).then((() => gq(61470)))).createModelWorker,
          count: qq,
          onUnavailable: qq => {
            if (Hq === cq) {
              Hq = null;
              const Eq = function(qq) {
                return qq instanceof Yq.c ? [Oq.b.url().href] : void 0
              }(qq);
              Qq((gq => {
                gq.onUnavailable(qq, Eq)
              }))
            }
          },
          onDecoderFailed: qq => {
            if (Hq === cq) {
              const Eq = qq instanceof Aq ? qq.goneUrl : null,
                gq = null === Eq ? void 0 : [Eq];
              Qq((Eq => {
                Eq.onDecoderFailed(qq, gq)
              }))
            }
          },
          onWorkerLost: qq => {
            Hq === cq && Qq((Eq => {
              Eq.onWorkerLost(qq)
            }))
          }
        });
        return cq
      }(), {
        pool: Hq,
        unlisten: () => {
          oq.delete(qq)
        }
      }
    }

    function Qq(qq) {
      for (const gq of [...oq]) try {
        qq(gq)
      } catch (Eq) {
        console.error("[pageModelPool] a listener threw", Eq)
      }
    }
  },
  41259: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  41253: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);