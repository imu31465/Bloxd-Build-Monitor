export const id = 39;
export const ids = [39];
export const modules = {
  39937: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy
    });
    var Uy = Wy(139),
      hy = Wy(1057);

    function fy(yb) {
      return (0, Uy.d)() ? `https://${hy.b.discordDomain}/${yb.href}` : yb.href
    }
    const Zy = {
      scriptUrl: fy(new Wy.U(Wy(39946))),
      wasmBinaryUrl: fy(new Wy.U(Wy(39952)))
    }
  },
  33207: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy,
      f: () => fy,
      j: () => Zy
    });
    const Uy = 1179937895,
      hy = 1313821514;

    function fy(yb) {
      const bb = new DataView(yb.buffer, yb.byteOffset, yb.byteLength);
      if (yb.byteLength < 20 || bb.getUint32(0, !0) !== Uy || 2 !== bb.getUint32(4, !0)) return null;
      const Wy = Math.min(bb.getUint32(8, !0), yb.byteLength),
        fy = bb.getUint32(12, !0);
      if (bb.getUint32(16, !0) !== hy || 20 + fy > Wy) return null;
      let Zy;
      try {
        Zy = JSON.parse((new TextDecoder).decode(yb.subarray(20, 20 + fy)))
      } catch {
        return null
      }
      return "object" === typeof Zy && null !== Zy ? {
        json: Zy,
        jsonEnd: 20 + fy,
        length: Wy
      } : null
    }

    function Zy(yb) {
      var bb;
      const Wy = null === (bb = fy(yb)) || void 0 === bb ? void 0 : bb.json;
      if (void 0 === Wy || !Array.isArray(Wy.extensionsUsed) || !Wy.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Uy = Wy.meshes;
      return Array.isArray(Uy) && Uy.some((yb => {
        const bb = null === yb || void 0 === yb ? void 0 : yb.primitives;
        return Array.isArray(bb) && bb.some((yb => {
          const bb = null === yb || void 0 === yb ? void 0 : yb.extensions;
          return null != (null === bb || void 0 === bb ? void 0 : bb.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  41880: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      pageModelPool: () => Cy
    });
    var Uy = Wy(3004),
      hy = Wy(35132),
      fy = Wy(39273),
      Zy = Wy(39937),
      cb = Wy(39307);
    Error;
    class Py extends Error {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${yb}: ${bb}`), this.stage = yb, this.url = Wy, this.status = Uy, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function oy(yb, bb) {
      let Wy = null,
        hy = !1;
      return {
        get: () => {
          if (null === Wy) {
            const fy = async function(yb, bb) {
              try {
                return (await (0, Uy.B)(yb)).buffer
              } catch (Wy) {
                throw new Py(bb, (0, cb.f)(Wy), yb, Wy instanceof Uy.d ? Wy.status : null)
              }
            }(yb, bb);
            Wy = fy, fy.then((() => {
              hy = Wy === fy
            }), (() => {
              Wy = null
            }))
          }
          return Wy
        },
        forget: () => {
          hy && (Wy = null, hy = !1)
        }
      }
    }

    function By(yb, bb) {
      const Wy = oy(bb, "wasm"),
        Uy = oy(yb, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Wy.forget(), Uy.forget());
        const [yb, bb] = await Promise.all([Wy.get(), Uy.get()]);
        return {
          script: bb,
          wasmBinary: yb
        }
      }
    }
    var Ky = Wy(33207),
      ey = Wy(2435),
      qb = Wy(39473),
      sy = Wy(39514);
    class Sy extends Error {
      constructor(yb) {
        super(`no model worker could install it: ${yb}`), this.name = "DracoInstallError"
      }
    }
    class Ey {
      constructor(yb) {
        this.opts = yb, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.bP = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let bb = 0; bb < Math.max(1, yb.count); bb++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          bP: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((yb => null !== yb.job)).length
      }
      build(yb, bb) {
        if (null !== this.stopped) return Promise.resolve((0, qb.o)(yb, this.stopped));
        const Wy = (0, Ky.j)(bb);
        return Wy && this.downloadDecoder(), new Promise((Uy => {
          this.queue.push({
            word: yb,
            glb: bb,
            draco: Wy,
            attempts: 0,
            resolve: Uy
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.bP ? this.bP : null
      }
      pump() {
        const yb = this.files();
        for (const bb of this.slots) {
          if (null !== this.stopped) return;
          if (bb.gaveUp || bb.starting) continue;
          if (null === bb.worker) {
            this.start(bb);
            continue
          }
          if (null !== yb && "none" === bb.bP && bb.failedDownload !== this.downloads && this.install(bb, bb.worker, yb), null !== bb.job) continue;
          const Wy = this.queue.findIndex((yb => "installed" === bb.bP || !yb.draco));
          Wy >= 0 && this.run(bb, bb.worker, this.queue.splice(Wy, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((yb => !yb.gaveUp && ("none" !== yb.bP || yb.failedDownload !== this.downloads))) || (this.bP = "uninstallable", this.decoderFailed(new Sy(this.installFailure)))
      }
      start(yb) {
        if (yb.losses >= 6) return yb.gaveUp = !0, void(this.slots.every((yb => yb.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        yb.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((bb => {
          let [Wy, Uy] = bb;
          null === this.stopped && this.launch(yb, Wy, Uy)
        }), (yb => {
          this.fail(yb)
        }))
      }
      launch(yb, bb, Wy) {
        let Uy;
        try {
          Uy = bb()
        } catch (hy) {
          return void this.lose(yb, `a model worker could not be created (${String(hy)})`)
        }
        yb.worker = Uy, this.startTimer(yb, 3e4, (bb => {
          this.lose(yb, `a model worker did not start: ${(0,sy.j)(bb)}`)
        })), Uy.onmessage = bb => {
          let {
            data: Wy
          } = bb;
          this.answered(yb, Uy, Wy)
        }, Uy.onerror = bb => {
          this.lose(yb, yb.starting ? `a model worker failed to start: ${bb.message}` : `a model worker failed: ${bb.message}`)
        }, Uy.postMessage({
          type: "start",
          module: Wy
        })
      }
      startTimer(yb, bb, Wy) {
        yb.timer = new sy.h(bb, (bb => {
          yb.timer = null, Wy(bb)
        }), void 0, this.opts.visibility)
      }
      clearTimer(yb) {
        var bb;
        null === (bb = yb.timer) || void 0 === bb || bb.cancel(), yb.timer = null
      }
      answered(yb, bb, Wy) {
        if ("lost" === Wy.type) return void this.lose(yb, Wy.reason);
        if (yb.starting) return "started" !== Wy.type ? void this.lose(yb, `a model worker answered ${Wy.type} before it started`) : (this.clearTimer(yb), yb.starting = !1, yb.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === Wy.type || "dracoFailed" === Wy.type) {
          if (Wy.seq !== yb.installSeq) return;
          return void("installing" === yb.bP ? (this.clearTimer(yb), "dracoInstalled" === Wy.type ? (yb.bP = "installed", this.pump()) : this.installFailed(yb, Wy.reason)) : "dracoInstalled" === Wy.type && "none" === yb.bP && yb.failedDownload === this.downloads && (yb.bP = "installed", this.pump()))
        }
        const Uy = yb.job;
        null !== Uy && "started" !== Wy.type && Wy.seq === yb.seq && ("trapped" !== Wy.type ? (yb.job = null, yb.losses = 0, this.jobLosses = 0, Uy.resolve(new Uint8Array(Wy.record)), this.pump()) : this.lose(yb, Wy.trap, !0))
      }
      install(yb, bb, Wy) {
        const Uy = this.nextSeq++;
        yb.bP = "installing", yb.installSeq = Uy, this.startTimer(yb, 3e4, (bb => {
          this.installFailed(yb, `no install within ${Math.round(bb)} ms`)
        }));
        const hy = Wy.script.slice(0),
          fy = Wy.wasmBinary.slice(0);
        bb.postMessage({
          type: "installDraco",
          seq: Uy,
          script: hy,
          wasmBinary: fy
        }, [hy, fy])
      }
      installFailed(yb, bb) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${bb}`), this.noInstall(yb, bb), this.pump()
      }
      noInstall(yb, bb) {
        yb.bP = "none", yb.failedDownload = this.downloads, this.installFailure = bb
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.bP || null !== this.files()) return;
        const yb = "uninstallable" === this.bP;
        this.bP = "downloading", this.opts.downloadFiles(yb).then((yb => {
          null === this.stopped && (this.bP = yb, this.downloads++, this.pump())
        }), (yb => {
          this.bP = null, this.decoderFailed(yb)
        }))
      }
      decoderFailed(yb) {
        if (null !== this.stopped) return;
        const bb = (0, cb.f)(yb);
        let Wy = 0;
        for (const Uy of this.queue.splice(0)) Uy.draco ? (Uy.resolve((0, qb.h)(Uy.word, bb)), Wy++) : this.queue.push(Uy);
        Wy > 0 && this.opts.onDecoderFailed(yb)
      }
      run(yb, bb, Wy) {
        const Uy = this.nextSeq++;
        yb.seq = Uy, yb.job = Wy, Wy.attempts++;
        const hy = Wy.glb.slice();
        bb.postMessage({
          type: "job",
          seq: Uy,
          word: Wy.word,
          glb: hy.buffer
        }, [hy.buffer])
      }
      lose(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(yb);
        const Uy = yb.worker;
        null !== Uy && (Uy.onmessage = null, Uy.onerror = null, Uy.terminate());
        const hy = !Wy && "installing" === yb.bP;
        yb.worker = null, yb.starting = !1, yb.bP = "none", hy && this.noInstall(yb, bb), void 0 !== yb.startedAt && performance.now() - yb.startedAt >= 6e4 && (yb.losses = 0), yb.startedAt = void 0;
        const fy = yb.job;
        if (yb.job = null, null !== fy || hy || yb.losses++, this.opts.onWorkerLost(bb), null !== fy && hy) fy.attempts--, this.queue.unshift(fy);
        else if (null !== fy && (fy.attempts < 2 ? this.queue.unshift(fy) : fy.resolve((0, qb.l)(fy.word, bb)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(yb) {
        if (null !== this.stopped) return;
        this.stopped = null === yb ? "the model workers stopped" : `the model workers could not start: ${(0,cb.f)(yb)}`;
        const bb = this.stopped,
          Wy = yb => {
            yb.resolve((0, qb.o)(yb.word, bb))
          };
        for (const hy of this.slots) {
          var Uy;
          this.clearTimer(hy), null === (Uy = hy.worker) || void 0 === Uy || Uy.terminate(), hy.worker = null, null !== hy.job && Wy(hy.job), hy.job = null
        }
        this.queue.splice(0).forEach(Wy), null !== yb && this.opts.onUnavailable(yb)
      }
    }
    let ly = null;
    const mb = new Set;

    function Cy(yb) {
      return mb.add(yb), ly ??= function() {
        let yb = (bb = navigator.hardwareConcurrency, cb = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, bb > 2 && !(0, ey.r)(cb) ? 2 : 1);
        var bb, cb;
        const oy = new Ey({
          module: (0, hy.e)(fy.d),
          downloadFiles: By(Zy.e.scriptUrl, Zy.e.wasmBinaryUrl),
          loadWorker: async () => (await Wy.e(40).then((() => Wy(60049)))).createModelWorker,
          count: yb,
          onUnavailable: yb => {
            if (ly === oy) {
              ly = null;
              const bb = function(yb) {
                return yb instanceof Uy.b ? [fy.d.url().href] : void 0
              }(yb);
              Ty((Wy => {
                Wy.onUnavailable(yb, bb)
              }))
            }
          },
          onDecoderFailed: yb => {
            if (ly === oy) {
              const bb = yb instanceof Py ? yb.goneUrl : null,
                Wy = null === bb ? void 0 : [bb];
              Ty((bb => {
                bb.onDecoderFailed(yb, Wy)
              }))
            }
          },
          onWorkerLost: yb => {
            ly === oy && Ty((bb => {
              bb.onWorkerLost(yb)
            }))
          }
        });
        return oy
      }(), {
        pool: ly,
        unlisten: () => {
          mb.delete(yb)
        }
      }
    }

    function Ty(yb) {
      for (const Wy of [...mb]) try {
        yb(Wy)
      } catch (bb) {
        console.error("[pageModelPool] a listener threw", bb)
      }
    }
  },
  39952: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  39946: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);