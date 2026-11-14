export const id = 37;
export const ids = [37];
export const modules = {
  39457: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(145),
      Ic = nc(1070);

    function rB(cB) {
      return (0, Vc.c)() ? `https://${Ic.d.discordDomain}/${cB.href}` : cB.href
    }
    const uc = {
      scriptUrl: rB(new nc.U(nc(39462))),
      wasmBinaryUrl: rB(new nc.U(nc(39468)))
    }
  },
  33048: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic,
      h: () => rB,
      l: () => uc
    });
    const Vc = 1179937895,
      Ic = 1313821514;

    function rB(cB) {
      const Bc = new DataView(cB.buffer, cB.byteOffset, cB.byteLength);
      if (cB.byteLength < 20 || Bc.getUint32(0, !0) !== Vc || 2 !== Bc.getUint32(4, !0)) return null;
      const nc = Math.min(Bc.getUint32(8, !0), cB.byteLength),
        rB = Bc.getUint32(12, !0);
      if (Bc.getUint32(16, !0) !== Ic || 20 + rB > nc) return null;
      let uc;
      try {
        uc = JSON.parse((new TextDecoder).decode(cB.subarray(20, 20 + rB)))
      } catch {
        return null
      }
      return "object" === typeof uc && null !== uc ? {
        json: uc,
        jsonEnd: 20 + rB,
        length: nc
      } : null
    }

    function uc(cB) {
      var Bc;
      const nc = null === (Bc = rB(cB)) || void 0 === Bc ? void 0 : Bc.json;
      if (void 0 === nc || !Array.isArray(nc.extensionsUsed) || !nc.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Vc = nc.meshes;
      return Array.isArray(Vc) && Vc.some((cB => {
        const Bc = null === cB || void 0 === cB ? void 0 : cB.primitives;
        return Array.isArray(Bc) && Bc.some((cB => {
          const Bc = null === cB || void 0 === cB ? void 0 : cB.extensions;
          return null != (null === Bc || void 0 === Bc ? void 0 : Bc.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  41274: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      pageModelPool: () => zB
    });
    var Vc = nc(2876),
      Ic = nc(35045),
      rB = nc(38780),
      uc = nc(39457),
      sc = nc(38814);
    Error;
    class Mc extends Error {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${cB}: ${Bc}`), this.stage = cB, this.url = nc, this.status = Vc, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function Pc(cB, Bc) {
      let nc = null,
        Ic = !1;
      return {
        get: () => {
          if (null === nc) {
            const rB = async function(cB, Bc) {
              try {
                return (await (0, Vc.x)(cB)).buffer
              } catch (nc) {
                throw new Mc(Bc, (0, sc.e)(nc), cB, nc instanceof Vc.g ? nc.status : null)
              }
            }(cB, Bc);
            nc = rB, rB.then((() => {
              Ic = nc === rB
            }), (() => {
              nc = null
            }))
          }
          return nc
        },
        forget: () => {
          Ic && (nc = null, Ic = !1)
        }
      }
    }

    function qB(cB, Bc) {
      const nc = Pc(Bc, "wasm"),
        Vc = Pc(cB, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (nc.forget(), Vc.forget());
        const [cB, Bc] = await Promise.all([nc.get(), Vc.get()]);
        return {
          script: Bc,
          wasmBinary: cB
        }
      }
    }
    var Oc = nc(33048),
      Tc = nc(8172),
      fc = nc(38935),
      mB = nc(38989);
    class ec extends Error {
      constructor(cB) {
        super(`no model worker could install it: ${cB}`), this.name = "DracoInstallError"
      }
    }
    class tB {
      constructor(cB) {
        this.opts = cB, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.an = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let Bc = 0; Bc < Math.max(1, cB.count); Bc++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          an: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((cB => null !== cB.job)).length
      }
      build(cB, Bc) {
        if (null !== this.stopped) return Promise.resolve((0, fc.o)(cB, this.stopped));
        const nc = (0, Oc.l)(Bc);
        return nc && this.downloadDecoder(), new Promise((Vc => {
          this.queue.push({
            word: cB,
            glb: Bc,
            draco: nc,
            attempts: 0,
            resolve: Vc
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.an ? this.an : null
      }
      pump() {
        const cB = this.files();
        for (const Bc of this.slots) {
          if (null !== this.stopped) return;
          if (Bc.gaveUp || Bc.starting) continue;
          if (null === Bc.worker) {
            this.start(Bc);
            continue
          }
          if (null !== cB && "none" === Bc.an && Bc.failedDownload !== this.downloads && this.install(Bc, Bc.worker, cB), null !== Bc.job) continue;
          const nc = this.queue.findIndex((cB => "installed" === Bc.an || !cB.draco));
          nc >= 0 && this.run(Bc, Bc.worker, this.queue.splice(nc, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((cB => !cB.gaveUp && ("none" !== cB.an || cB.failedDownload !== this.downloads))) || (this.an = "uninstallable", this.decoderFailed(new ec(this.installFailure)))
      }
      start(cB) {
        if (cB.losses >= 6) return cB.gaveUp = !0, void(this.slots.every((cB => cB.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        cB.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((Bc => {
          let [nc, Vc] = Bc;
          null === this.stopped && this.launch(cB, nc, Vc)
        }), (cB => {
          this.fail(cB)
        }))
      }
      launch(cB, Bc, nc) {
        let Vc;
        try {
          Vc = Bc()
        } catch (Ic) {
          return void this.lose(cB, `a model worker could not be created (${String(Ic)})`)
        }
        cB.worker = Vc, this.startTimer(cB, 3e4, (Bc => {
          this.lose(cB, `a model worker did not start: ${(0,mB.l)(Bc)}`)
        })), Vc.onmessage = Bc => {
          let {
            data: nc
          } = Bc;
          this.answered(cB, Vc, nc)
        }, Vc.onerror = Bc => {
          this.lose(cB, cB.starting ? `a model worker failed to start: ${Bc.message}` : `a model worker failed: ${Bc.message}`)
        }, Vc.postMessage({
          type: "start",
          module: nc
        })
      }
      startTimer(cB, Bc, nc) {
        cB.timer = new mB.h(Bc, (Bc => {
          cB.timer = null, nc(Bc)
        }), void 0, this.opts.visibility)
      }
      clearTimer(cB) {
        var Bc;
        null === (Bc = cB.timer) || void 0 === Bc || Bc.cancel(), cB.timer = null
      }
      answered(cB, Bc, nc) {
        if ("lost" === nc.type) return void this.lose(cB, nc.reason);
        if (cB.starting) return "started" !== nc.type ? void this.lose(cB, `a model worker answered ${nc.type} before it started`) : (this.clearTimer(cB), cB.starting = !1, cB.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === nc.type || "dracoFailed" === nc.type) {
          if (nc.seq !== cB.installSeq) return;
          return void("installing" === cB.an ? (this.clearTimer(cB), "dracoInstalled" === nc.type ? (cB.an = "installed", this.pump()) : this.installFailed(cB, nc.reason)) : "dracoInstalled" === nc.type && "none" === cB.an && cB.failedDownload === this.downloads && (cB.an = "installed", this.pump()))
        }
        const Vc = cB.job;
        null !== Vc && "started" !== nc.type && nc.seq === cB.seq && ("trapped" !== nc.type ? (cB.job = null, cB.losses = 0, this.jobLosses = 0, Vc.resolve(new Uint8Array(nc.record)), this.pump()) : this.lose(cB, nc.trap, !0))
      }
      install(cB, Bc, nc) {
        const Vc = this.nextSeq++;
        cB.an = "installing", cB.installSeq = Vc, this.startTimer(cB, 3e4, (Bc => {
          this.installFailed(cB, `no install within ${Math.round(Bc)} ms`)
        }));
        const Ic = nc.script.slice(0),
          rB = nc.wasmBinary.slice(0);
        Bc.postMessage({
          type: "installDraco",
          seq: Vc,
          script: Ic,
          wasmBinary: rB
        }, [Ic, rB])
      }
      installFailed(cB, Bc) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${Bc}`), this.noInstall(cB, Bc), this.pump()
      }
      noInstall(cB, Bc) {
        cB.an = "none", cB.failedDownload = this.downloads, this.installFailure = Bc
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.an || null !== this.files()) return;
        const cB = "uninstallable" === this.an;
        this.an = "downloading", this.opts.downloadFiles(cB).then((cB => {
          null === this.stopped && (this.an = cB, this.downloads++, this.pump())
        }), (cB => {
          this.an = null, this.decoderFailed(cB)
        }))
      }
      decoderFailed(cB) {
        if (null !== this.stopped) return;
        const Bc = (0, sc.e)(cB);
        let nc = 0;
        for (const Vc of this.queue.splice(0)) Vc.draco ? (Vc.resolve((0, fc.i)(Vc.word, Bc)), nc++) : this.queue.push(Vc);
        nc > 0 && this.opts.onDecoderFailed(cB)
      }
      run(cB, Bc, nc) {
        const Vc = this.nextSeq++;
        cB.seq = Vc, cB.job = nc, nc.attempts++;
        const Ic = nc.glb.slice();
        Bc.postMessage({
          type: "job",
          seq: Vc,
          word: nc.word,
          glb: Ic.buffer
        }, [Ic.buffer])
      }
      lose(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(cB);
        const Vc = cB.worker;
        null !== Vc && (Vc.onmessage = null, Vc.onerror = null, Vc.terminate());
        const Ic = !nc && "installing" === cB.an;
        cB.worker = null, cB.starting = !1, cB.an = "none", Ic && this.noInstall(cB, Bc), void 0 !== cB.startedAt && performance.now() - cB.startedAt >= 6e4 && (cB.losses = 0), cB.startedAt = void 0;
        const rB = cB.job;
        if (cB.job = null, null !== rB || Ic || cB.losses++, this.opts.onWorkerLost(Bc), null !== rB && Ic) rB.attempts--, this.queue.unshift(rB);
        else if (null !== rB && (rB.attempts < 2 ? this.queue.unshift(rB) : rB.resolve((0, fc.n)(rB.word, Bc)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(cB) {
        if (null !== this.stopped) return;
        this.stopped = null === cB ? "the model workers stopped" : `the model workers could not start: ${(0,sc.e)(cB)}`;
        const Bc = this.stopped,
          nc = cB => {
            cB.resolve((0, fc.o)(cB.word, Bc))
          };
        for (const Ic of this.slots) {
          var Vc;
          this.clearTimer(Ic), null === (Vc = Ic.worker) || void 0 === Vc || Vc.terminate(), Ic.worker = null, null !== Ic.job && nc(Ic.job), Ic.job = null
        }
        this.queue.splice(0).forEach(nc), null !== cB && this.opts.onUnavailable(cB)
      }
    }
    let Sc = null;
    const yB = new Set;

    function zB(cB) {
      return yB.add(cB), Sc ??= function() {
        let cB = (Bc = navigator.hardwareConcurrency, sc = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, Bc > 2 && !(0, Tc.o)(sc) ? 2 : 1);
        var Bc, sc;
        const Pc = new tB({
          module: (0, Ic.e)(rB.e),
          downloadFiles: qB(uc.e.scriptUrl, uc.e.wasmBinaryUrl),
          loadWorker: async () => (await nc.e(38).then((() => nc(59409)))).createModelWorker,
          count: cB,
          onUnavailable: cB => {
            if (Sc === Pc) {
              Sc = null;
              const Bc = function(cB) {
                return cB instanceof Vc.c ? [rB.e.url().href] : void 0
              }(cB);
              pc((nc => {
                nc.onUnavailable(cB, Bc)
              }))
            }
          },
          onDecoderFailed: cB => {
            if (Sc === Pc) {
              const Bc = cB instanceof Mc ? cB.goneUrl : null,
                nc = null === Bc ? void 0 : [Bc];
              pc((Bc => {
                Bc.onDecoderFailed(cB, nc)
              }))
            }
          },
          onWorkerLost: cB => {
            Sc === Pc && pc((Bc => {
              Bc.onWorkerLost(cB)
            }))
          }
        });
        return Pc
      }(), {
        pool: Sc,
        unlisten: () => {
          yB.delete(cB)
        }
      }
    }

    function pc(cB) {
      for (const nc of [...yB]) try {
        cB(nc)
      } catch (Bc) {
        console.error("[pageModelPool] a listener threw", Bc)
      }
    }
  },
  39468: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  39462: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);