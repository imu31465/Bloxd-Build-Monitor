export const id = 5;
export const ids = [5];
export const modules = {
  42330: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/bloxd_wasm_anim_bg.2a18a5ec88020e8c526e.wasm"
  },
  42328: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      BloxdAnimWasmError: () => yz,
      compileAnimationPackInWasm: () => Qz
    });
    var Fz = {};

    function Wz(zz, tz, sz, Fz, Wz, Xz) {
      const Oz = Bz(zz, ez.R096),
        oz = Zz,
        vz = Bz(tz, ez.R096),
        Uz = Zz,
        Kz = Bz(sz, ez.R096),
        uz = Zz,
        Nz = Bz(Fz, ez.R096),
        wz = Zz,
        Dz = Bz(Wz, ez.R096),
        gz = Zz;
      var Pz = Hz(Xz) ? 0 : function(zz, tz) {
          const sz = tz(1 * zz.length, 1) >>> 0;
          return bz().set(zz, sz / 1), Zz = zz.length, sz
        }(Xz, ez.R096),
        Yz = Zz;
      const xz = ez.QnuP(Oz, oz, vz, Uz, Kz, uz, Nz, wz, Dz, gz, Pz, Yz);
      if (xz[3]) throw rz(xz[2]);
      var mz, Jz, Iz = (mz = xz[0], Jz = xz[1], mz >>>= 0, bz().subarray(mz / 1, mz / 1 + Jz)).slice();
      return ez.p3MI(xz[0], 1 * xz[1], 1), Iz
    }

    function Xz(zz, tz) {
      const sz = Pz(zz, ez.R096, ez.Z4fI),
        Fz = Zz,
        Wz = ez.bMlC(sz, Fz, tz);
      if (Wz[1]) throw rz(Wz[0])
    }

    function Oz() {
      ez.zgF2()
    }

    function oz() {
      return {
        __proto__: null,
        tK4H: {
          __proto__: null,
          QwS2: function(zz, tz) {
            return vz(Error(uz(zz, tz)))
          },
          S4w4: function(zz, tz) {
            const sz = wz(tz),
              Fz = "string" === typeof sz ? sz : void 0;
            var Wz = Hz(Fz) ? 0 : Pz(Fz, ez.R096, ez.Z4fI),
              Xz = Zz;
            Kz().setInt32(zz + 4, Xz, !0), Kz().setInt32(zz + 0, Wz, !0)
          },
          HBke: function(zz, tz) {
            throw new Error(uz(zz, tz))
          },
          Y8BP: function(zz, tz) {
            console.error(uz(zz, tz))
          },
          IVvn: function(zz) {
            rz(zz)
          }
        }
      }
    }

    function vz(zz) {
      gz === Dz.length && Dz.push(Dz.length + 1);
      const tz = gz;
      return gz = Dz[tz], Dz[tz] = zz, tz
    }
    sz.r(Fz), sz.d(Fz, {
      uOz: () => Wz,
      Iu: () => Xz,
      default: () => cz,
      initSync: () => Tz,
      Cu: () => Oz
    });
    let Uz = null;

    function Kz() {
      return (null === Uz || !0 === Uz.buffer.detached || void 0 === Uz.buffer.detached && Uz.buffer !== ez.memory.buffer) && (Uz = new DataView(ez.memory.buffer)), Uz
    }

    function uz(zz, tz) {
      return function(zz, tz) {
        mz += tz, mz >= xz && (Yz = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Yz.decode(), mz = tz);
        return Yz.decode(bz().subarray(zz, zz + tz))
      }(zz >>> 0, tz)
    }
    let Nz = null;

    function bz() {
      return null !== Nz && 0 !== Nz.byteLength || (Nz = new Uint8Array(ez.memory.buffer)), Nz
    }

    function wz(zz) {
      return Dz[zz]
    }
    let Dz = new Array(1024).fill(void 0);
    Dz.push(void 0, null, !0, !1);
    let gz = Dz.length;

    function Hz(zz) {
      return void 0 === zz || null === zz
    }

    function Bz(zz, tz) {
      const sz = tz(4 * zz.length, 4) >>> 0,
        Fz = Kz();
      for (let Wz = 0; Wz < zz.length; Wz++) Fz.setUint32(sz + 4 * Wz, vz(zz[Wz]), !0);
      return Zz = zz.length, sz
    }

    function Pz(zz, tz, sz) {
      if (void 0 === sz) {
        const sz = Jz.encode(zz),
          Fz = tz(sz.length, 1) >>> 0;
        return bz().subarray(Fz, Fz + sz.length).set(sz), Zz = sz.length, Fz
      }
      let Fz = zz.length,
        Wz = tz(Fz, 1) >>> 0;
      const Xz = bz();
      let Oz = 0;
      for (; Oz < Fz; Oz++) {
        const tz = zz.charCodeAt(Oz);
        if (tz > 127) break;
        Xz[Wz + Oz] = tz
      }
      if (Oz !== Fz) {
        0 !== Oz && (zz = zz.slice(Oz)), Wz = sz(Wz, Fz, Fz = Oz + 3 * zz.length, 1) >>> 0;
        const tz = bz().subarray(Wz + Oz, Wz + Fz);
        Oz += Jz.encodeInto(zz, tz).written, Wz = sz(Wz, Fz, Oz, 1) >>> 0
      }
      return Zz = Oz, Wz
    }

    function rz(zz) {
      const tz = wz(zz);
      return function(zz) {
        zz < 1028 || (Dz[zz] = gz, gz = zz)
      }(zz), tz
    }
    let Yz = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Yz.decode();
    const xz = 2146435072;
    let mz = 0;
    const Jz = new TextEncoder;
    "encodeInto" in Jz || (Jz.encodeInto = function(zz, tz) {
      const sz = Jz.encode(zz);
      return tz.set(sz), {
        read: zz.length,
        written: sz.length
      }
    });
    let Iz, Cz, ez, Zz = 0;

    function Gz(zz, tz) {
      return Cz = zz, ez = zz.exports, Iz = tz, Uz = null, Nz = null, ez.VP7G(), ez
    }

    function Tz(zz) {
      if (void 0 !== ez) return ez;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module: zz
      } = zz) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const tz = oz();
      zz instanceof WebAssembly.Module || (zz = new WebAssembly.Module(zz));
      return Gz(new WebAssembly.Instance(zz, tz), zz)
    }
    async function cz(zz) {
      if (void 0 !== ez) return ez;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module_or_path: zz
      } = zz) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const tz = oz();
      ("string" === typeof zz || "function" === typeof Request && zz instanceof Request || "function" === typeof URL && zz instanceof URL) && (zz = fetch(zz));
      const {
        instance: sz,
        module: Fz
      } = await async function(zz, tz) {
        if ("function" === typeof Response && zz instanceof Response) {
          if (!zz.ok) throw new Error(`failed to fetch Wasm: ${zz.status} ${zz.statusText} fetching '${zz.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(zz, tz)
          } catch (sz) {
            if (! function(zz) {
                switch (zz) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(zz.type) || "application/wasm" === zz.headers.get("Content-Type")) throw sz;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", sz)
          }
          const Fz = await zz.arrayBuffer();
          return await WebAssembly.instantiate(Fz, tz)
        } {
          const sz = await WebAssembly.instantiate(zz, tz);
          return sz instanceof WebAssembly.Instance ? {
            instance: sz,
            module: zz
          } : sz
        }
      }(await zz, tz);
      return Gz(sz, Fz)
    }
    var jz = sz(3378),
      Az = sz(6196);
    class yz extends Error {
      stage;
      constructor(zz, tz) {
        super((0, jz.D)(zz, tz), {
          cause: tz
        }), this.name = "BloxdAnimWasmError", this.stage = zz
      }
    }
    let Mz = null,
      dz = null;

    function hz() {
      if (dz) throw dz
    }
    async function Qz(zz, tz, Wz) {
      hz();
      const Xz = await (Mz ??= (async () => {
        let zz;
        try {
          zz = await (0, jz.E)(new sz.U(sz(42330)), (0, Az.d)("bloxd_wasm_anim"))
        } catch (tz) {
          throw new yz((0, jz.K)(tz), tz)
        }
        try {
          await cz({
            module_or_path: zz
          })
        } catch (tz) {
          throw new yz("instantiate", tz)
        }
        return Fz
      })(), Mz.catch((() => {
        Mz = null
      })), Mz);
      hz();
      try {
        return Xz.uOz(Object.entries(zz).flat(), [...tz.mobTypes], [...tz.vehicleTypes], [...tz.mobAiStates], [...tz.playerPoses], "builtIns" in Wz ? Wz.builtIns : void 0)
      } catch (Oz) {
        const zz = new yz("call", Oz);
        throw Oz instanceof WebAssembly.RuntimeError && (dz = zz), zz
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);