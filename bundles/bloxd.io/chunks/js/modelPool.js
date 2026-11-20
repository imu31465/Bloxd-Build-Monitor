export const id = 42;
export const ids = [42];
export const modules = {
  40607: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz
    });
    var Fz = sz(133),
      Wz = sz(1198);

    function Xz(zz) {
      return (0, Fz.e)() ? `https://${Wz.c.discordDomain}/${zz.href}` : zz.href
    }
    const Oz = {
      scriptUrl: Xz(new sz.U(sz(40613))),
      wasmBinaryUrl: Xz(new sz.U(sz(40620)))
    }
  },
  8934: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz,
      f: () => Xz,
      i: () => Oz
    });
    const Fz = 1179937895,
      Wz = 1313821514;

    function Xz(zz) {
      const tz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
      if (zz.byteLength < 20 || tz.getUint32(0, !0) !== Fz || 2 !== tz.getUint32(4, !0)) return null;
      const sz = Math.min(tz.getUint32(8, !0), zz.byteLength),
        Xz = tz.getUint32(12, !0);
      if (tz.getUint32(16, !0) !== Wz || 20 + Xz > sz) return null;
      let Oz;
      try {
        Oz = JSON.parse((new TextDecoder).decode(zz.subarray(20, 20 + Xz)))
      } catch {
        return null
      }
      return "object" === typeof Oz && null !== Oz ? {
        json: Oz,
        jsonEnd: 20 + Xz,
        length: sz
      } : null
    }

    function Oz(zz) {
      var tz;
      const sz = null === (tz = Xz(zz)) || void 0 === tz ? void 0 : tz.json;
      if (void 0 === sz || !Array.isArray(sz.extensionsUsed) || !sz.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Fz = sz.meshes;
      return Array.isArray(Fz) && Fz.some((zz => {
        const tz = null === zz || void 0 === zz ? void 0 : zz.primitives;
        return Array.isArray(tz) && tz.some((zz => {
          const tz = null === zz || void 0 === zz ? void 0 : zz.extensions;
          return null != (null === tz || void 0 === tz ? void 0 : tz.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42415: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => Hz,
      pageModelPool: () => rz
    });
    var Fz = sz(3378),
      Wz = sz(35828),
      Xz = sz(39875),
      Oz = sz(40607),
      oz = sz(35805);
    Error;
    class vz extends Error {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${zz}: ${tz}`), this.stage = zz, this.url = sz, this.status = Fz, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function Uz(zz, tz) {
      let sz = null,
        Wz = !1;
      return {
        get: () => {
          if (null === sz) {
            const Xz = async function(zz, tz) {
              try {
                return (await (0, Fz.G)(zz)).buffer
              } catch (sz) {
                throw new vz(tz, (0, oz.i)(sz), zz, sz instanceof Fz.h ? sz.status : null)
              }
            }(zz, tz);
            sz = Xz, Xz.then((() => {
              Wz = sz === Xz
            }), (() => {
              sz = null
            }))
          }
          return sz
        },
        forget: () => {
          Wz && (sz = null, Wz = !1)
        }
      }
    }

    function Kz(zz, tz) {
      const sz = Uz(tz, "wasm"),
        Fz = Uz(zz, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (sz.forget(), Fz.forget());
        const [zz, tz] = await Promise.all([sz.get(), Fz.get()]);
        return {
          script: tz,
          wasmBinary: zz
        }
      }
    }
    var uz = sz(8934),
      Nz = sz(2844),
      bz = sz(40055),
      wz = sz(40088);
    class Dz extends Error {
      constructor(zz) {
        super(`no model worker could install it: ${zz}`), this.name = "DracoInstallError"
      }
    }
    class gz {
      constructor(zz) {
        this.opts = zz, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.Gw = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let tz = 0; tz < Math.max(1, zz.count); tz++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          Gw: "none",
          installSeq: 0,
          failedDownload: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.downloadDecoder(), this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((zz => null !== zz.job)).length
      }
      build(zz, tz) {
        if (null !== this.stopped) return Promise.resolve((0, bz.p)(zz, this.stopped));
        const sz = (0, uz.i)(tz);
        return sz && this.downloadDecoder(), new Promise((Fz => {
          this.queue.push({
            word: zz,
            glb: tz,
            draco: sz,
            attempts: 0,
            resolve: Fz
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.Gw ? this.Gw : null
      }
      pump() {
        const zz = this.files();
        for (const tz of this.slots) {
          if (null !== this.stopped) return;
          if (tz.gaveUp || tz.starting) continue;
          if (null === tz.worker) {
            this.start(tz);
            continue
          }
          if (null !== zz && "none" === tz.Gw && tz.failedDownload !== this.downloads && this.install(tz, tz.worker, zz), null !== tz.job) continue;
          const sz = this.queue.findIndex((zz => "installed" === tz.Gw || !zz.draco));
          sz >= 0 && this.run(tz, tz.worker, this.queue.splice(sz, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((zz => !zz.gaveUp && ("none" !== zz.Gw || zz.failedDownload !== this.downloads))) || (this.Gw = "uninstallable", this.decoderFailed(new Dz(this.installFailure)))
      }
      start(zz) {
        if (zz.losses >= 6) return zz.gaveUp = !0, void(this.slots.every((zz => zz.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        zz.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((tz => {
          let [sz, Fz] = tz;
          null === this.stopped && this.launch(zz, sz, Fz)
        }), (zz => {
          this.fail(zz)
        }))
      }
      launch(zz, tz, sz) {
        let Fz;
        try {
          Fz = tz()
        } catch (Wz) {
          return void this.lose(zz, `a model worker could not be created (${String(Wz)})`)
        }
        zz.worker = Fz, this.startTimer(zz, 3e4, (tz => {
          this.lose(zz, `a model worker did not start: ${(0,wz.j)(tz)}`)
        })), Fz.onmessage = tz => {
          let {
            data: sz
          } = tz;
          this.answered(zz, Fz, sz)
        }, Fz.onerror = tz => {
          this.lose(zz, zz.starting ? `a model worker failed to start: ${tz.message}` : `a model worker failed: ${tz.message}`)
        }, Fz.postMessage({
          type: "start",
          module: sz
        })
      }
      startTimer(zz, tz, sz) {
        zz.timer = new wz.h(tz, (tz => {
          zz.timer = null, sz(tz)
        }), void 0, this.opts.visibility)
      }
      clearTimer(zz) {
        var tz;
        null === (tz = zz.timer) || void 0 === tz || tz.cancel(), zz.timer = null
      }
      answered(zz, tz, sz) {
        if ("lost" === sz.type) return void this.lose(zz, sz.reason);
        if (zz.starting) return "started" !== sz.type ? void this.lose(zz, `a model worker answered ${sz.type} before it started`) : (this.clearTimer(zz), zz.starting = !1, zz.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === sz.type || "dracoFailed" === sz.type) {
          if (sz.seq !== zz.installSeq) return;
          return void("installing" === zz.Gw ? (this.clearTimer(zz), "dracoInstalled" === sz.type ? (zz.Gw = "installed", this.pump()) : this.installFailed(zz, sz.reason)) : "dracoInstalled" === sz.type && "none" === zz.Gw && zz.failedDownload === this.downloads && (zz.Gw = "installed", this.pump()))
        }
        const Fz = zz.job;
        null !== Fz && "started" !== sz.type && sz.seq === zz.seq && ("trapped" !== sz.type ? (zz.job = null, zz.losses = 0, this.jobLosses = 0, Fz.resolve(new Uint8Array(sz.record)), this.pump()) : this.lose(zz, sz.trap, !0))
      }
      install(zz, tz, sz) {
        const Fz = this.nextSeq++;
        zz.Gw = "installing", zz.installSeq = Fz, this.startTimer(zz, 3e4, (tz => {
          this.installFailed(zz, `no install within ${Math.round(tz)} ms`)
        }));
        const Wz = sz.script.slice(0),
          Xz = sz.wasmBinary.slice(0);
        tz.postMessage({
          type: "installDraco",
          seq: Fz,
          script: Wz,
          wasmBinary: Xz
        }, [Wz, Xz])
      }
      installFailed(zz, tz) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${tz}`), this.noInstall(zz, tz), this.pump()
      }
      noInstall(zz, tz) {
        zz.Gw = "none", zz.failedDownload = this.downloads, this.installFailure = tz
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.Gw || null !== this.files()) return;
        const zz = "uninstallable" === this.Gw;
        this.Gw = "downloading", this.opts.downloadFiles(zz).then((zz => {
          null === this.stopped && (this.Gw = zz, this.downloads++, this.pump())
        }), (zz => {
          this.Gw = null, this.decoderFailed(zz)
        }))
      }
      decoderFailed(zz) {
        if (null !== this.stopped) return;
        const tz = (0, oz.i)(zz);
        let sz = 0;
        for (const Fz of this.queue.splice(0)) Fz.draco ? (Fz.resolve((0, bz.g)(Fz.word, tz)), sz++) : this.queue.push(Fz);
        sz > 0 && this.opts.onDecoderFailed(zz)
      }
      run(zz, tz, sz) {
        const Fz = this.nextSeq++;
        zz.seq = Fz, zz.job = sz, sz.attempts++;
        const Wz = sz.glb.slice();
        tz.postMessage({
          type: "job",
          seq: Fz,
          word: sz.word,
          glb: Wz.buffer
        }, [Wz.buffer])
      }
      lose(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(zz);
        const Fz = zz.worker;
        null !== Fz && (Fz.onmessage = null, Fz.onerror = null, Fz.terminate());
        const Wz = !sz && "installing" === zz.Gw;
        zz.worker = null, zz.starting = !1, zz.Gw = "none", Wz && this.noInstall(zz, tz), void 0 !== zz.startedAt && performance.now() - zz.startedAt >= 6e4 && (zz.losses = 0), zz.startedAt = void 0;
        const Xz = zz.job;
        if (zz.job = null, null !== Xz || Wz || zz.losses++, this.opts.onWorkerLost(tz), null !== Xz && Wz) Xz.attempts--, this.queue.unshift(Xz);
        else if (null !== Xz && (Xz.attempts < 2 ? this.queue.unshift(Xz) : Xz.resolve((0, bz.o)(Xz.word, tz)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(zz) {
        if (null !== this.stopped) return;
        this.stopped = null === zz ? "the model workers stopped" : `the model workers could not start: ${(0,oz.i)(zz)}`;
        const tz = this.stopped,
          sz = zz => {
            zz.resolve((0, bz.p)(zz.word, tz))
          };
        for (const Wz of this.slots) {
          var Fz;
          this.clearTimer(Wz), null === (Fz = Wz.worker) || void 0 === Fz || Fz.terminate(), Wz.worker = null, null !== Wz.job && sz(Wz.job), Wz.job = null
        }
        this.queue.splice(0).forEach(sz), null !== zz && this.opts.onUnavailable(zz)
      }
    }
    const Hz = [...Fz.v, 5e3, 15e3, 3e4];
    let Bz = null;
    const Pz = new Set;

    function rz(zz) {
      return Pz.add(zz), Bz ??= function() {
        let zz = (tz = navigator.hardwareConcurrency, oz = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, tz > 2 && !(0, Nz.n)(oz) ? 2 : 1);
        var tz, oz;
        const Uz = new gz({
          module: (0, Wz.e)(Xz.d, {
            delays: Hz,
            onRetry: (zz, tz) => {
              Bz === Uz && Yz((sz => {
                sz.onModuleRetry(zz, tz)
              }))
            }
          }),
          downloadFiles: Kz(Oz.e.scriptUrl, Oz.e.wasmBinaryUrl),
          loadWorker: async () => (await sz.e(43).then((() => sz(60647)))).createModelWorker,
          count: zz,
          onUnavailable: zz => {
            if (Bz === Uz) {
              Bz = null;
              const tz = function(zz) {
                return zz instanceof Fz.e ? [Xz.d.url().href] : void 0
              }(zz);
              Yz((sz => {
                sz.onUnavailable(zz, tz)
              }))
            }
          },
          onDecoderFailed: zz => {
            if (Bz === Uz) {
              const tz = zz instanceof vz ? zz.goneUrl : null,
                sz = null === tz ? void 0 : [tz];
              Yz((tz => {
                tz.onDecoderFailed(zz, sz)
              }))
            }
          },
          onWorkerLost: zz => {
            Bz === Uz && Yz((tz => {
              tz.onWorkerLost(zz)
            }))
          }
        });
        return Uz
      }(), {
        pool: Bz,
        unlisten: () => {
          Pz.delete(zz)
        }
      }
    }

    function Yz(zz) {
      for (const sz of [...Pz]) try {
        zz(sz)
      } catch (tz) {
        console.error("[pageModelPool] a listener threw", tz)
      }
    }
  },
  40613: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40620: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);