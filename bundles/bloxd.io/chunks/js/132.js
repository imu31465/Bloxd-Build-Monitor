export const id = 132;
export const ids = [132];
export const modules = {
  35805: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      f: () => Xz,
      i: () => vz
    });
    var Fz = sz(35796);
    const Wz = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Xz(zz) {
      if (zz instanceof WebAssembly.RuntimeError) return !0;
      const tz = zz instanceof Error ? zz.stack : void 0;
      return "string" === typeof tz && Wz.test(tz)
    }

    function Oz(zz, tz, sz) {
      var Xz;
      const Oz = zz instanceof Error ? zz.name : "thrown",
        oz = (zz instanceof Error && null !== (Xz = zz.stack) && void 0 !== Xz ? Xz : "").split("\n").filter((zz => Wz.test(zz))).slice(0, 8).map((zz => zz.trim())),
        vz = null === tz ? "wasm memory unknown" : `wasm memory ${Math.round(tz/2**20)} MB`,
        Uz = null === sz.panic ? "" : `, panic: ${(0,Fz.j)(sz.panic)}`,
        Kz = `${Oz}: ${zz instanceof Error?zz.message:String(zz)}`;
      return `${(0,Fz.m)(sz.kind,sz.refusedBytes)} ${Kz} (${vz})${Uz}${oz.length>0?` | ${oz.join(" < ")}`:""}`
    }
    const oz = 500;

    function vz(zz) {
      let tz = "[object Object]";
      try {
        tz = String(zz)
      } catch {}
      if ("[object Object]" !== tz) return tz;
      try {
        var sz, Fz;
        return null !== (sz = null === (Fz = JSON.stringify(zz)) || void 0 === Fz ? void 0 : Fz.slice(0, oz)) && void 0 !== sz ? sz : tz
      } catch {
        return tz
      }
    }
  },
  35828: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Cz,
      e: () => Gz,
      h: () => Iz
    });
    var Fz = sz(3376),
      Wz = sz(3386),
      Xz = sz(6196),
      Oz = sz(4344),
      oz = sz(3378);
    const vz = ".zst.bin",
      Uz = Reflect.apply,
      Kz = ArrayBuffer,
      uz = "undefined" === typeof Response ? void 0 : Response,
      Nz = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      bz = function() {
        let zz;
        void 0 !== Nz && new Nz({
          __proto__: null,
          start(tz) {
            const {
              enqueue: sz,
              close: Fz,
              error: Wz
            } = Object.getPrototypeOf(tz);
            zz = {
              enqueue: sz,
              close: Fz,
              error: Wz
            }
          }
        }, {
          __proto__: null
        });
        return zz
      }(),
      wz = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== bz && (0, Oz.j)(uz, "Response", !0) && (0, Oz.j)(Nz, "ReadableStream", !0) && (0, Oz.j)(bz.enqueue, "enqueue") && (0, Oz.j)(bz.close, "close") && (0, Oz.j)(bz.error, "error") && (0, Oz.j)(oz._, "body") && (0, Oz.j)(oz.L, "getReader") && (0, Oz.j)(oz.X, "read")
        } catch {
          return !1
        }
      }();
    let Dz = !1;

    function gz(zz) {
      for (const tz of "bloxd_wasm_webgpu:4997811,bloxd_wasm_webgl:5288982,bloxd_wasm_webgl1:4758542,bloxd_wasm_workers:196044,bloxd_wasm_models:311680,bloxd_wasm_client:3667474"?.split(",") ?? []) {
        const [sz, Fz] = tz.split(":");
        if (sz === zz) {
          const zz = Number(Fz);
          return Number.isInteger(zz) && zz > 0 ? zz : void 0
        }
      }
    }

    function Hz(zz, tz) {
      let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Xz = function(zz) {
        const tz = gz(zz.name);
        if (void 0 !== tz && wz && !Dz) return {
          href: `${zz.url().href}${vz}`,
          length: tz
        }
      }(zz);
      return void 0 !== Xz ? async function(zz, tz, Fz, Xz) {
        let {
          href: Oz,
          length: vz
        } = tz;
        try {
          return await (0, oz.fb)(Oz, ((zz, tz, Xz) => async function(zz, tz, Fz, Xz, Oz, vz) {
            const wz = new Kz(tz);
            let gz;
            Pz ??= (0, oz.T)(sz.e(64).then((() => sz(40260))));
            try {
              gz = await fetch(zz, {
                signal: Fz
              })
            } catch (Az) {
              throw new Error(`Fetching ${zz} failed: ${Yz(Az)}`)
            }
            const {
              ok: Hz,
              status: Bz,
              body: xz
            } = function(zz, tz) {
              try {
                const {
                  ok: zz,
                  status: sz
                } = tz;
                return {
                  ok: zz,
                  status: sz,
                  body: Uz(oz._, tz, [])
                }
              } catch {
                throw new Error(`${zz} came in a response a page script made`)
              }
            }(zz, gz);
            if (!Hz) throw new Error(`Fetching ${zz} failed: HTTP ${Bz}`);
            Xz();
            const {
              reader: mz,
              controller: Jz,
              compiled: Iz
            } = function(zz, tz) {
              let sz;
              try {
                let zz;
                sz = Uz(oz.L, tz, []);
                const Fz = new Nz({
                    __proto__: null,
                    start(tz) {
                      zz = tz
                    }
                  }, {
                    __proto__: null
                  }),
                  Wz = new uz(Fz, {
                    __proto__: null,
                    headers: {
                      __proto__: null,
                      "Content-Type": "application/wasm"
                    }
                  });
                return {
                  reader: sz,
                  controller: zz,
                  compiled: (0, oz.T)((0, oz.B)((0, oz.jb)(Wz)))
                }
              } catch (Az) {
                throw void 0 !== sz && rz(sz), new Error(`${zz} could not be streamed into a compile: ${Yz(Az)}`)
              }
            }(zz, xz), {
              enqueue: Cz,
              close: ez,
              error: Zz
            } = bz, Gz = zz => {
              try {
                Uz(Zz, Jz, [zz])
              } catch {} finally {
                rz(mz)
              }
            };
            Fz.addEventListener("abort", (() => {
              Gz(new Error(`${zz} stalled`))
            }), {
              once: !0
            });
            let Tz = !1;
            (0, Wz.s)(Iz, (() => {}), (() => {
              Tz = !0, rz(mz)
            }));
            let cz = 0;
            try {
              let sz;
              try {
                sz = await Pz
              } catch (Az) {
                throw Dz = !0, new Error(`The zstd decoder did not load: ${Yz(Az)}`)
              }
              const {
                ZstdFrameDecoder: Fz
              } = sz, Wz = new Fz(tz);
              for (; !Wz.done && !Tz;) {
                let tz;
                try {
                  tz = await Uz(oz.X, mz, [])
                } catch (Az) {
                  throw new Error(`Downloading ${zz} failed: ${Yz(Az)}`)
                }
                if (tz.done || Tz) break;
                Xz();
                try {
                  Wz.push(tz.value)
                } catch (Az) {
                  throw new Error(`${zz} did not decode: ${Yz(Az)}`)
                }
                const {
                  output: sz,
                  decoded: Fz
                } = Wz;
                if (null !== sz && Fz !== cz) {
                  Uz(oz.bb, new oz.o(wz), [sz.subarray(cz, Fz), cz]);
                  try {
                    Uz(Cz, Jz, [new oz.o(wz, cz, Fz - cz)])
                  } catch {
                    Tz = !0
                  }
                  cz = Fz
                }
              }
              if (Oz(), Tz) throw await Iz, new Error(`${zz}'s compile stopped reading before its end`);
              if (!Wz.done) throw new Error(`${zz} ended before its module did`);
              rz(mz);
              try {
                Uz(ez, Jz, [])
              } catch {}
            } catch (Az) {
              throw Gz(Az), Az
            }
            const jz = await Iz;
            void 0 !== vz && await (0, oz.z)(zz, new oz.o(wz), {
              sha256: vz.sha256,
              onMismatch: () => {}
            });
            return jz
          }(Oz, vz, zz, tz, Xz, Fz)))
        } catch (gz) {
          console.warn(`${Yz(gz)}: loading ${zz.href} instead`)
        }
        const wz = await (0, oz.E)(zz, Fz, {
          ...Xz,
          hideThen: !0
        });
        return wz
      }(zz.url(), Xz, tz, Fz): Bz(zz, tz, Fz)
    }

    function Bz(zz, tz, sz) {
      return (0, oz.E)(zz.url(), tz, {
        ...sz,
        hideThen: void 0 !== gz(zz.name)
      })
    }
    let Pz = null;

    function rz(zz) {
      try {
        (0, oz.T)(zz.cancel())
      } catch {}
    }

    function Yz(zz) {
      return zz instanceof Error ? zz.message : String(zz)
    }
    let xz = null,
      mz = !1;
    const Jz = new Map;

    function Iz(zz, tz, sz) {
      return null === xz ? xz = ez(zz, tz) : zz !== xz.build ? console.warn(`Bloxd wasm: ${zz.name} was asked for after ${xz.build.name} started loading, which this thread keeps`) : tz.name !== xz.workers.name && console.warn(`Bloxd wasm: ${tz.name} was asked for workers after ${xz.workers.name}, which this thread keeps`), sz?.reloadFailedDownload && !mz && (0, Fz.ib)() && (mz = !0, xz = ez(xz.build, xz.workers)), xz.loaded
    }

    function Cz(zz, tz) {
      if (null !== xz) return (0, Wz.f)([]);
      const sz = zz.filter((zz => !Jz.has(zz.name))).map((zz => {
        const sz = new AbortController,
          Fz = {
            compiled: Bz(zz, (0, Xz.d)(zz.name), {
              priority: tz,
              ds: sz.signal,
              onDownloaded: () => {
                Fz.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  Fz.downloaded = !1, null !== xz && sz.abort()
                }
              }
            }),
            cancel: sz,
            downloaded: !1
          };
        return Jz.set(zz.name, Fz), (0, Wz.j)((tz => {
          (0, Wz.s)(Fz.compiled, (() => {
            Fz.downloaded = !0, tz()
          }), (Fz => {
            sz.signal.aborted || console.warn(`Bloxd wasm: ${zz.name}'s compile ahead of the load failed: the load compiles it afresh`, Fz), tz()
          }))
        }))
      }));
      return (0, Wz.f)(sz)
    }

    function ez(zz, tz) {
      const sz = (0, Fz.P)((async () => {
        (0, Oz.B)();
        const sz = Zz(zz),
          Fz = tz.name === zz.name ? sz : Zz(tz);
        for (const {
            cancel: zz
          }
          of Jz.values()) zz.abort();
        Jz.clear(), await (0, Wz.f)([sz, Fz]);
        const Xz = await sz,
          oz = await Fz;
        return (0, Oz.B)(), {
          module: Xz,
          workerModule: oz
        }
      }), zz);
      return {
        build: zz,
        workers: tz,
        loaded: sz
      }
    }

    function Zz(zz) {
      const tz = Jz.get(zz.name);
      return tz?.downloaded ? (Jz.delete(zz.name), (0, Wz.j)(((sz, Fz) => {
        (0, Wz.s)(tz.compiled, sz, (() => {
          (0, Wz.s)(Tz(zz), sz, Fz)
        }))
      }))) : Tz(zz)
    }
    async function Gz(zz, tz) {
      return Tz(zz, {
        retries: tz
      })
    }

    function Tz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return Hz(zz, (0, Xz.d)(zz.name), tz)
    }
  },
  6196: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz
    });
    var Fz = sz(3378);
    const Wz = {
      bloxd_wasm: () => "e62ddfb4cd16c5e98d743fe1b1d78ddc524c3b7f73ea079648059406c6a079f8",
      bloxd_wasm_client: () => "9f4914a436cca82a1eae002e54d8bb6c08b1156da1c5b264541fa536cd0c880a",
      bloxd_wasm_workers: () => "ffa9980d4d50f712fd8b8bbae384abef1fcaa66cf3c2d33f8bc46095ed65db6f",
      bloxd_wasm_models: () => "4a2c9c776ad7f28643796aedbd3f53434dc042fd0bc593cded926a716b7974a2",
      bloxd_wasm_webgpu: () => "359ea7274ebcd16e380b66838dece8057006c05fd3122c955a61edd0108cd0d1",
      bloxd_wasm_webgl: () => "45bb3a29449cc62a20f1562e66c202c2979bd7b034ac67c7307ef944e740bd93",
      bloxd_wasm_webgl1: () => "4815c64b2c94bcdaa525813cc69ca1bf47eb503f8fe99915a28c31c4b00a5a97",
      bloxd_wasm_replay: () => "307729272c0e0fab73f4f0d3f6f290b703ad9b5f3ff232245b507750f7bb578e",
      bloxd_wasm_recorder: () => "4525cd7c7e006e75135df97182a3f2b1e9e60d7cc77abd136ca6622de5ccb2f8",
      bloxd_wasm_anim: () => "ff30567e3c57a8d7e44f1da9c42b1f3abb15c5c207804d77d9b3cb90f8da7854",
      bloxd_wasm_textures: () => "4755e3a2c62b61989e5ea68fbe42e17fc495c8dd76ad016087a5eb194cb919c6",
      bloxd_wasm_shader_pack: () => "49ced5e21424d1953fffd95fdcd1731671e6e07c358282d2abea6210c642a1fd"
    };
    var Xz = sz(4344);

    function Oz(zz) {
      const tz = Object.prototype.hasOwnProperty.call(Wz, zz) ? Wz[zz]() : void 0;
      if (void 0 !== tz) return {
        sha256: tz,
        onMismatch: Xz.z
      };
      throw new Fz.j(`${zz} has no release digest, so this build refuses it`)
    }
  },
  35796: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      f: () => Xz,
      j: () => vz,
      k: () => Oz,
      m: () => Wz
    });
    const Fz = /^alloc_failed (\d+) bytes$/;

    function Wz(zz, tz) {
      return Xz(zz, tz) ? `trap=alloc_failed ${tz} bytes` : `trap=${zz}`
    }

    function Xz(zz, tz) {
      return "unreachable" === zz && tz > 0
    }

    function Oz(zz, tz, sz) {
      const Fz = function(zz) {
        return zz instanceof WebAssembly.RuntimeError ? /unreachable/i.test(zz.message) ? "unreachable" : /out of bounds/i.test(zz.message) ? "out_of_bounds" : "runtime_error" : (zz instanceof RangeError || zz instanceof Error && "InternalError" === zz.name) && /call stack|recursion/i.test(zz.message) ? "stack_overflow" : "js_error"
      }(zz);
      if ("unreachable" !== Fz) return {
        kind: Fz,
        panic: null,
        refusedBytes: 0
      };
      const Wz = tz(),
        Xz = sz();
      return {
        kind: Fz,
        panic: Xz > 0 ? null : Wz,
        refusedBytes: Xz
      }
    }
    const oz = 300;

    function vz(zz) {
      return zz.replace(/\s*\n\s*/g, " / ").slice(0, oz)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);