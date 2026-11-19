export const id = 132;
export const ids = [132];
export const modules = {
  35811: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Jz,
      f: () => Lz,
      g: () => xz
    });
    var Ez = bz(3468),
      nz = bz(3477),
      iz = bz(6346),
      lz = bz(4448),
      Mz = bz(3475);
    const tz = ".zst.bin",
      Hz = Reflect.apply,
      Oz = ArrayBuffer,
      pz = "undefined" === typeof Response ? void 0 : Response,
      dz = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      Fz = function() {
        let zz;
        void 0 !== dz && new dz({
          __proto__: null,
          start(uz) {
            const {
              enqueue: bz,
              close: Ez,
              error: nz
            } = Object.getPrototypeOf(uz);
            zz = {
              enqueue: bz,
              close: Ez,
              error: nz
            }
          }
        }, {
          __proto__: null
        });
        return zz
      }(),
      Zz = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== Fz && (0, lz.l)(pz, "Response", !0) && (0, lz.l)(dz, "ReadableStream", !0) && (0, lz.l)(Fz.enqueue, "enqueue") && (0, lz.l)(Fz.close, "close") && (0, lz.l)(Fz.error, "error") && (0, lz.l)(Mz.R, "body") && (0, lz.l)(Mz.E, "getReader") && (0, lz.l)(Mz.N, "read")
        } catch {
          return !1
        }
      }();
    let Rz = !1;

    function Kz(zz) {
      for (const uz of "bloxd_wasm_webgpu:4997044,bloxd_wasm_webgl:5288190,bloxd_wasm_webgl1:4757905,bloxd_wasm_workers:196044,bloxd_wasm_models:311375,bloxd_wasm_client:3666763"?.split(",") ?? []) {
        const [bz, Ez] = uz.split(":");
        if (bz === zz) {
          const zz = Number(Ez);
          return Number.isInteger(zz) && zz > 0 ? zz : void 0
        }
      }
    }

    function wz(zz, uz) {
      let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const iz = function(zz) {
        const uz = Kz(zz.name);
        if (void 0 !== uz && Zz && !Rz) return {
          href: `${zz.url().href}${tz}`,
          length: uz
        }
      }(zz);
      return void 0 !== iz ? async function(zz, uz, Ez, iz) {
        let {
          href: lz,
          length: tz
        } = uz;
        try {
          return await (0, Mz.W)(lz, ((zz, uz, iz) => async function(zz, uz, Ez, iz, lz, tz) {
            const Zz = new Oz(uz);
            let Kz;
            fz ??= (0, Mz.L)(bz.e(64).then((() => bz(40386))));
            try {
              Kz = await fetch(zz, {
                signal: Ez
              })
            } catch (Vz) {
              throw new Error(`Fetching ${zz} failed: ${rz(Vz)}`)
            }
            const {
              ok: wz,
              status: Xz,
              body: oz
            } = function(zz, uz) {
              try {
                const {
                  ok: zz,
                  status: bz
                } = uz;
                return {
                  ok: zz,
                  status: bz,
                  body: Hz(Mz.R, uz, [])
                }
              } catch {
                throw new Error(`${zz} came in a response a page script made`)
              }
            }(zz, Kz);
            if (!wz) throw new Error(`Fetching ${zz} failed: HTTP ${Xz}`);
            iz();
            const {
              reader: Nz,
              controller: vz,
              compiled: xz
            } = function(zz, uz) {
              let bz;
              try {
                let zz;
                bz = Hz(Mz.E, uz, []);
                const Ez = new dz({
                    __proto__: null,
                    start(uz) {
                      zz = uz
                    }
                  }, {
                    __proto__: null
                  }),
                  nz = new pz(Ez, {
                    __proto__: null,
                    headers: {
                      __proto__: null,
                      "Content-Type": "application/wasm"
                    }
                  });
                return {
                  reader: bz,
                  controller: zz,
                  compiled: (0, Mz.L)((0, Mz.u)((0, Mz._)(nz)))
                }
              } catch (Vz) {
                throw void 0 !== bz && sz(bz), new Error(`${zz} could not be streamed into a compile: ${rz(Vz)}`)
              }
            }(zz, oz), {
              enqueue: Jz,
              close: Az,
              error: Tz
            } = Fz, Lz = zz => {
              try {
                Hz(Tz, vz, [zz])
              } catch {} finally {
                sz(Nz)
              }
            };
            Ez.addEventListener("abort", (() => {
              Lz(new Error(`${zz} stalled`))
            }), {
              once: !0
            });
            let Pz = !1;
            (0, nz.q)(xz, (() => {}), (() => {
              Pz = !0, sz(Nz)
            }));
            let Gz = 0;
            try {
              let bz;
              try {
                bz = await fz
              } catch (Vz) {
                throw Rz = !0, new Error(`The zstd decoder did not load: ${rz(Vz)}`)
              }
              const {
                ZstdFrameDecoder: Ez
              } = bz, nz = new Ez(uz);
              for (; !nz.done && !Pz;) {
                let uz;
                try {
                  uz = await Hz(Mz.N, Nz, [])
                } catch (Vz) {
                  throw new Error(`Downloading ${zz} failed: ${rz(Vz)}`)
                }
                if (uz.done || Pz) break;
                iz();
                try {
                  nz.push(uz.value)
                } catch (Vz) {
                  throw new Error(`${zz} did not decode: ${rz(Vz)}`)
                }
                const {
                  output: bz,
                  decoded: Ez
                } = nz;
                if (null !== bz && Ez !== Gz) {
                  Hz(Mz.U, new Mz.j(Zz), [bz.subarray(Gz, Ez), Gz]);
                  try {
                    Hz(Jz, vz, [new Mz.j(Zz, Gz, Ez - Gz)])
                  } catch {
                    Pz = !0
                  }
                  Gz = Ez
                }
              }
              if (lz(), Pz) throw await xz, new Error(`${zz}'s compile stopped reading before its end`);
              if (!nz.done) throw new Error(`${zz} ended before its module did`);
              sz(Nz);
              try {
                Hz(Az, vz, [])
              } catch {}
            } catch (Vz) {
              throw Lz(Vz), Vz
            }
            const az = await xz;
            void 0 !== tz && await (0, Mz.s)(zz, new Mz.j(Zz), {
              sha256: tz.sha256,
              onMismatch: () => {}
            });
            return az
          }(lz, tz, zz, uz, iz, Ez)))
        } catch (Kz) {
          console.warn(`${rz(Kz)}: loading ${zz.href} instead`)
        }
        const Zz = await (0, Mz.x)(zz, Ez, {
          ...iz,
          hideThen: !0
        });
        return Zz
      }(zz.url(), iz, uz, Ez): Xz(zz, uz, Ez)
    }

    function Xz(zz, uz, bz) {
      return (0, Mz.x)(zz.url(), uz, {
        ...bz,
        hideThen: void 0 !== Kz(zz.name)
      })
    }
    let fz = null;

    function sz(zz) {
      try {
        (0, Mz.L)(zz.cancel())
      } catch {}
    }

    function rz(zz) {
      return zz instanceof Error ? zz.message : String(zz)
    }
    let oz = null,
      Nz = !1;
    const vz = new Map;

    function xz(zz, uz, bz) {
      return null === oz ? oz = Az(zz, uz) : zz !== oz.build ? console.warn(`Bloxd wasm: ${zz.name} was asked for after ${oz.build.name} started loading, which this thread keeps`) : uz.name !== oz.workers.name && console.warn(`Bloxd wasm: ${uz.name} was asked for workers after ${oz.workers.name}, which this thread keeps`), bz?.reloadFailedDownload && !Nz && (0, Ez.Z)() && (Nz = !0, oz = Az(oz.build, oz.workers)), oz.loaded
    }

    function Jz(zz, uz) {
      if (null !== oz) return (0, nz.d)([]);
      const bz = zz.filter((zz => !vz.has(zz.name))).map((zz => {
        const bz = new AbortController,
          Ez = {
            compiled: Xz(zz, (0, iz.d)(zz.name), {
              priority: uz,
              ob: bz.signal,
              onDownloaded: () => {
                Ez.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  Ez.downloaded = !1, null !== oz && bz.abort()
                }
              }
            }),
            cancel: bz,
            downloaded: !1
          };
        return vz.set(zz.name, Ez), (0, nz.g)((uz => {
          (0, nz.q)(Ez.compiled, (() => {
            Ez.downloaded = !0, uz()
          }), (Ez => {
            bz.signal.aborted || console.warn(`Bloxd wasm: ${zz.name}'s compile ahead of the load failed: the load compiles it afresh`, Ez), uz()
          }))
        }))
      }));
      return (0, nz.d)(bz)
    }

    function Az(zz, uz) {
      const bz = (0, Ez.J)((async () => {
        (0, lz.D)();
        const bz = Tz(zz),
          Ez = uz.name === zz.name ? bz : Tz(uz);
        for (const {
            cancel: zz
          }
          of vz.values()) zz.abort();
        vz.clear(), await (0, nz.d)([bz, Ez]);
        const iz = await bz,
          Mz = await Ez;
        return (0, lz.D)(), {
          module: iz,
          workerModule: Mz
        }
      }), zz);
      return {
        build: zz,
        workers: uz,
        loaded: bz
      }
    }

    function Tz(zz) {
      const uz = vz.get(zz.name);
      return uz?.downloaded ? (vz.delete(zz.name), (0, nz.g)(((bz, Ez) => {
        (0, nz.q)(uz.compiled, bz, (() => {
          (0, nz.q)(Pz(zz), bz, Ez)
        }))
      }))) : Pz(zz)
    }
    async function Lz(zz, uz) {
      return Pz(zz, {
        retries: uz
      })
    }

    function Pz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return wz(zz, (0, iz.d)(zz.name), uz)
    }
  },
  6346: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz
    });
    var Ez = bz(3475);
    const nz = {
      bloxd_wasm: () => "1d82d26b5e962a8115a8b9f5a71d4482bea630e4794af96826031054b5328287",
      bloxd_wasm_client: () => "e76c5a2961724276556b1be66b22dec7bd5f65e384a93101c607286d297ee067",
      bloxd_wasm_workers: () => "7e47409366bf7f39099f927cfa4a57348b448c74b02605efbd73e4a6b8f04dde",
      bloxd_wasm_models: () => "a904d117ddddef41137d77eab973a77d1f2482bc6fba648f058b098f24fc0f06",
      bloxd_wasm_webgpu: () => "8953137a8b71bf3e6e8a8f69ee233c91a42378bf3fc16cb1c4c8b9135861b1dc",
      bloxd_wasm_webgl: () => "5dd590fce3f1cee12961fd4975adbeea583efcc5ec749ca76a788f4fc4940dd8",
      bloxd_wasm_webgl1: () => "c9bbf8ccca86e0863424fb3eea3d6cf6b07feda842276f421c960b2ead4ebd7c",
      bloxd_wasm_replay: () => "8494f1ab5acd2fa27c8efc81dbe5383c1e46f4eb345de017463045c5e3e0bee4",
      bloxd_wasm_recorder: () => "e6f11baa69c0487a3c1dfa56f14484100398a051d758250d1642107a1cd5ca79",
      bloxd_wasm_anim: () => "5e25d5318082a811e82e509be32ba6fcbfb252bb467f0c4d2fbbb91da19adb66",
      bloxd_wasm_textures: () => "f4310b0ea0f5ae4902503cafb0076931617e380b6606a87042ca91b8b1e1cba5",
      bloxd_wasm_shader_pack: () => "ba3761e2c3ceefb8d7f3f3f092016905f6affc6c5166b29a485d6c289fd71fdf"
    };
    var iz = bz(4448);

    function lz(zz) {
      const uz = Object.prototype.hasOwnProperty.call(nz, zz) ? nz[zz]() : void 0;
      if (void 0 !== uz) return {
        sha256: uz,
        onMismatch: iz.C
      };
      throw new Ez.f(`${zz} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);