export const id = 42;
export const ids = [42];
export const modules = {
  40719: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    var Ez = bz(128),
      nz = bz(1197);

    function iz(zz) {
      return (0, Ez.d)() ? `https://${nz.c.discordDomain}/${zz.href}` : zz.href
    }
    const lz = {
      scriptUrl: iz(new bz.U(bz(40723))),
      wasmBinaryUrl: iz(new bz.U(bz(40729)))
    }
  },
  9067: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz,
      d: () => iz,
      f: () => lz
    });
    const Ez = 1179937895,
      nz = 1313821514;

    function iz(zz) {
      const uz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
      if (zz.byteLength < 20 || uz.getUint32(0, !0) !== Ez || 2 !== uz.getUint32(4, !0)) return null;
      const bz = Math.min(uz.getUint32(8, !0), zz.byteLength),
        iz = uz.getUint32(12, !0);
      if (uz.getUint32(16, !0) !== nz || 20 + iz > bz) return null;
      let lz;
      try {
        lz = JSON.parse((new TextDecoder).decode(zz.subarray(20, 20 + iz)))
      } catch {
        return null
      }
      return "object" === typeof lz && null !== lz ? {
        json: lz,
        jsonEnd: 20 + iz,
        length: bz
      } : null
    }

    function lz(zz) {
      var uz;
      const bz = null === (uz = iz(zz)) || void 0 === uz ? void 0 : uz.json;
      if (void 0 === bz || !Array.isArray(bz.extensionsUsed) || !bz.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Ez = bz.meshes;
      return Array.isArray(Ez) && Ez.some((zz => {
        const uz = null === zz || void 0 === zz ? void 0 : zz.primitives;
        return Array.isArray(uz) && uz.some((zz => {
          const uz = null === zz || void 0 === zz ? void 0 : zz.extensions;
          return null != (null === uz || void 0 === uz ? void 0 : uz.KHR_draco_mesh_compression)
        }))
      }))
    }
  },
  42647: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => wz,
      pageModelPool: () => sz
    });
    var Ez = bz(3475),
      nz = bz(35811),
      iz = bz(39940),
      lz = bz(40719),
      Mz = bz(39979);
    Error;
    class tz extends Error {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(`Draco ${zz}: ${uz}`), this.stage = zz, this.url = bz, this.status = Ez, this.name = "DracoLoadError"
      }
      get goneUrl() {
        return 404 === this.status || 410 === this.status ? this.url : null
      }
    }

    function Hz(zz, uz) {
      let bz = null,
        nz = !1;
      return {
        get: () => {
          if (null === bz) {
            const iz = async function(zz, uz) {
              try {
                return (await (0, Ez.z)(zz)).buffer
              } catch (bz) {
                throw new tz(uz, (0, Mz.e)(bz), zz, bz instanceof Ez.e ? bz.status : null)
              }
            }(zz, uz);
            bz = iz, iz.then((() => {
              nz = bz === iz
            }), (() => {
              bz = null
            }))
          }
          return bz
        },
        forget: () => {
          nz && (bz = null, nz = !1)
        }
      }
    }

    function Oz(zz, uz) {
      const bz = Hz(uz, "wasm"),
        Ez = Hz(zz, "script");
      return async function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (bz.forget(), Ez.forget());
        const [zz, uz] = await Promise.all([bz.get(), Ez.get()]);
        return {
          script: uz,
          wasmBinary: zz
        }
      }
    }
    var pz = bz(9067),
      dz = bz(2866),
      Fz = bz(40169),
      Zz = bz(40205);
    class Rz extends Error {
      constructor(zz) {
        super(`no model worker could install it: ${zz}`), this.name = "DracoInstallError"
      }
    }
    class Kz {
      constructor(zz) {
        this.opts = zz, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.LZ = null, this.downloads = 0, this.installFailure = "", this.nextSeq = 0, this.jobLosses = 0;
        for (let uz = 0; uz < Math.max(1, zz.count); uz++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          LZ: "none",
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
      build(zz, uz) {
        if (null !== this.stopped) return Promise.resolve((0, Fz.p)(zz, this.stopped));
        const bz = (0, pz.f)(uz);
        return bz && this.downloadDecoder(), new Promise((Ez => {
          this.queue.push({
            word: zz,
            glb: uz,
            draco: bz,
            attempts: 0,
            resolve: Ez
          }), this.pump()
        }))
      }
      dispose() {
        this.fail(null)
      }
      files() {
        return "object" === typeof this.LZ ? this.LZ : null
      }
      pump() {
        const zz = this.files();
        for (const uz of this.slots) {
          if (null !== this.stopped) return;
          if (uz.gaveUp || uz.starting) continue;
          if (null === uz.worker) {
            this.start(uz);
            continue
          }
          if (null !== zz && "none" === uz.LZ && uz.failedDownload !== this.downloads && this.install(uz, uz.worker, zz), null !== uz.job) continue;
          const bz = this.queue.findIndex((zz => "installed" === uz.LZ || !zz.draco));
          bz >= 0 && this.run(uz, uz.worker, this.queue.splice(bz, 1)[0])
        }
        null === this.stopped && this.checkDecoder()
      }
      checkDecoder() {
        if (null === this.files()) return;
        this.slots.some((zz => !zz.gaveUp && ("none" !== zz.LZ || zz.failedDownload !== this.downloads))) || (this.LZ = "uninstallable", this.decoderFailed(new Rz(this.installFailure)))
      }
      start(zz) {
        if (zz.losses >= 6) return zz.gaveUp = !0, void(this.slots.every((zz => zz.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        zz.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((uz => {
          let [bz, Ez] = uz;
          null === this.stopped && this.launch(zz, bz, Ez)
        }), (zz => {
          this.fail(zz)
        }))
      }
      launch(zz, uz, bz) {
        let Ez;
        try {
          Ez = uz()
        } catch (nz) {
          return void this.lose(zz, `a model worker could not be created (${String(nz)})`)
        }
        zz.worker = Ez, this.startTimer(zz, 3e4, (uz => {
          this.lose(zz, `a model worker did not start: ${(0,Zz.n)(uz)}`)
        })), Ez.onmessage = uz => {
          let {
            data: bz
          } = uz;
          this.answered(zz, Ez, bz)
        }, Ez.onerror = uz => {
          this.lose(zz, zz.starting ? `a model worker failed to start: ${uz.message}` : `a model worker failed: ${uz.message}`)
        }, Ez.postMessage({
          type: "start",
          module: bz
        })
      }
      startTimer(zz, uz, bz) {
        zz.timer = new Zz.j(uz, (uz => {
          zz.timer = null, bz(uz)
        }), void 0, this.opts.visibility)
      }
      clearTimer(zz) {
        var uz;
        null === (uz = zz.timer) || void 0 === uz || uz.cancel(), zz.timer = null
      }
      answered(zz, uz, bz) {
        if ("lost" === bz.type) return void this.lose(zz, bz.reason);
        if (zz.starting) return "started" !== bz.type ? void this.lose(zz, `a model worker answered ${bz.type} before it started`) : (this.clearTimer(zz), zz.starting = !1, zz.startedAt = performance.now(), void this.pump());
        if ("dracoInstalled" === bz.type || "dracoFailed" === bz.type) {
          if (bz.seq !== zz.installSeq) return;
          return void("installing" === zz.LZ ? (this.clearTimer(zz), "dracoInstalled" === bz.type ? (zz.LZ = "installed", this.pump()) : this.installFailed(zz, bz.reason)) : "dracoInstalled" === bz.type && "none" === zz.LZ && zz.failedDownload === this.downloads && (zz.LZ = "installed", this.pump()))
        }
        const Ez = zz.job;
        null !== Ez && "started" !== bz.type && bz.seq === zz.seq && ("trapped" !== bz.type ? (zz.job = null, zz.losses = 0, this.jobLosses = 0, Ez.resolve(new Uint8Array(bz.record)), this.pump()) : this.lose(zz, bz.trap, !0))
      }
      install(zz, uz, bz) {
        const Ez = this.nextSeq++;
        zz.LZ = "installing", zz.installSeq = Ez, this.startTimer(zz, 3e4, (uz => {
          this.installFailed(zz, `no install within ${Math.round(uz)} ms`)
        }));
        const nz = bz.script.slice(0),
          iz = bz.wasmBinary.slice(0);
        uz.postMessage({
          type: "installDraco",
          seq: Ez,
          script: nz,
          wasmBinary: iz
        }, [nz, iz])
      }
      installFailed(zz, uz) {
        console.warn(`[modelPool] a model worker could not install the Draco decoder: ${uz}`), this.noInstall(zz, uz), this.pump()
      }
      noInstall(zz, uz) {
        zz.LZ = "none", zz.failedDownload = this.downloads, this.installFailure = uz
      }
      downloadDecoder() {
        if (null !== this.stopped || "downloading" === this.LZ || null !== this.files()) return;
        const zz = "uninstallable" === this.LZ;
        this.LZ = "downloading", this.opts.downloadFiles(zz).then((zz => {
          null === this.stopped && (this.LZ = zz, this.downloads++, this.pump())
        }), (zz => {
          this.LZ = null, this.decoderFailed(zz)
        }))
      }
      decoderFailed(zz) {
        if (null !== this.stopped) return;
        const uz = (0, Mz.e)(zz);
        let bz = 0;
        for (const Ez of this.queue.splice(0)) Ez.draco ? (Ez.resolve((0, Fz.g)(Ez.word, uz)), bz++) : this.queue.push(Ez);
        bz > 0 && this.opts.onDecoderFailed(zz)
      }
      run(zz, uz, bz) {
        const Ez = this.nextSeq++;
        zz.seq = Ez, zz.job = bz, bz.attempts++;
        const nz = bz.glb.slice();
        uz.postMessage({
          type: "job",
          seq: Ez,
          word: bz.word,
          glb: nz.buffer
        }, [nz.buffer])
      }
      lose(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.clearTimer(zz);
        const Ez = zz.worker;
        null !== Ez && (Ez.onmessage = null, Ez.onerror = null, Ez.terminate());
        const nz = !bz && "installing" === zz.LZ;
        zz.worker = null, zz.starting = !1, zz.LZ = "none", nz && this.noInstall(zz, uz), void 0 !== zz.startedAt && performance.now() - zz.startedAt >= 6e4 && (zz.losses = 0), zz.startedAt = void 0;
        const iz = zz.job;
        if (zz.job = null, null !== iz || nz || zz.losses++, this.opts.onWorkerLost(uz), null !== iz && nz) iz.attempts--, this.queue.unshift(iz);
        else if (null !== iz && (iz.attempts < 2 ? this.queue.unshift(iz) : iz.resolve((0, Fz.l)(iz.word, uz)), this.jobLosses++, this.jobLosses >= 32)) return void this.fail(new Error("model workers were lost on 32 jobs with no file built"));
        this.pump()
      }
      fail(zz) {
        if (null !== this.stopped) return;
        this.stopped = null === zz ? "the model workers stopped" : `the model workers could not start: ${(0,Mz.e)(zz)}`;
        const uz = this.stopped,
          bz = zz => {
            zz.resolve((0, Fz.p)(zz.word, uz))
          };
        for (const nz of this.slots) {
          var Ez;
          this.clearTimer(nz), null === (Ez = nz.worker) || void 0 === Ez || Ez.terminate(), nz.worker = null, null !== nz.job && bz(nz.job), nz.job = null
        }
        this.queue.splice(0).forEach(bz), null !== zz && this.opts.onUnavailable(zz)
      }
    }
    const wz = [...Ez.m, 5e3, 15e3, 3e4];
    let Xz = null;
    const fz = new Set;

    function sz(zz) {
      return fz.add(zz), Xz ??= function() {
        let zz = (uz = navigator.hardwareConcurrency, Mz = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, uz > 2 && !(0, dz.j)(Mz) ? 2 : 1);
        var uz, Mz;
        const Hz = new Kz({
          module: (0, nz.f)(iz.e, {
            delays: wz,
            onRetry: (zz, uz) => {
              Xz === Hz && rz((bz => {
                bz.onModuleRetry(zz, uz)
              }))
            }
          }),
          downloadFiles: Oz(lz.e.scriptUrl, lz.e.wasmBinaryUrl),
          loadWorker: async () => (await bz.e(43).then((() => bz(60637)))).createModelWorker,
          count: zz,
          onUnavailable: zz => {
            if (Xz === Hz) {
              Xz = null;
              const uz = function(zz) {
                return zz instanceof Ez.d ? [iz.e.url().href] : void 0
              }(zz);
              rz((bz => {
                bz.onUnavailable(zz, uz)
              }))
            }
          },
          onDecoderFailed: zz => {
            if (Xz === Hz) {
              const uz = zz instanceof tz ? zz.goneUrl : null,
                bz = null === uz ? void 0 : [uz];
              rz((uz => {
                uz.onDecoderFailed(zz, bz)
              }))
            }
          },
          onWorkerLost: zz => {
            Xz === Hz && rz((uz => {
              uz.onWorkerLost(zz)
            }))
          }
        });
        return Hz
      }(), {
        pool: Xz,
        unlisten: () => {
          fz.delete(zz)
        }
      }
    }

    function rz(zz) {
      for (const bz of [...fz]) try {
        zz(bz)
      } catch (uz) {
        console.error("[pageModelPool] a listener threw", uz)
      }
    }
  },
  40729: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  40723: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);