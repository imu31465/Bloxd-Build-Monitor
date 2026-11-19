export const id = 5;
export const ids = [5];
export const modules = {
  42546: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/bloxd_wasm_anim_bg.6e7574f5e49c4350d3ce.wasm"
  },
  42538: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      BloxdAnimWasmError: () => mz,
      compileAnimationPackInWasm: () => cz
    });
    var Ez = {};

    function nz(zz, uz, bz, Ez, nz, iz) {
      const lz = Xz(zz, Az.ct03),
        Mz = Tz,
        tz = Xz(uz, Az.ct03),
        Hz = Tz,
        Oz = Xz(bz, Az.ct03),
        pz = Tz,
        dz = Xz(Ez, Az.ct03),
        Zz = Tz,
        Rz = Xz(nz, Az.ct03),
        Kz = Tz;
      var fz = wz(iz) ? 0 : function(zz, uz) {
          const bz = uz(1 * zz.length, 1) >>> 0;
          return Fz().set(zz, bz / 1), Tz = zz.length, bz
        }(iz, Az.ct03),
        rz = Tz;
      const oz = Az.puZn(lz, Mz, tz, Hz, Oz, pz, dz, Zz, Rz, Kz, fz, rz);
      if (oz[3]) throw sz(oz[2]);
      var Nz, vz, xz = (Nz = oz[0], vz = oz[1], Nz >>>= 0, Fz().subarray(Nz / 1, Nz / 1 + vz)).slice();
      return Az.GdaH(oz[0], 1 * oz[1], 1), xz
    }

    function iz(zz, uz) {
      const bz = fz(zz, Az.ct03, Az.XPsb),
        Ez = Tz,
        nz = Az.TilN(bz, Ez, uz);
      if (nz[1]) throw sz(nz[0])
    }

    function lz() {
      Az.A4wo()
    }

    function Mz() {
      return {
        __proto__: null,
        CM74: {
          __proto__: null,
          HVtX: function(zz, uz) {
            return tz(Error(pz(zz, uz)))
          },
          dVbJ: function(zz, uz) {
            const bz = Zz(uz),
              Ez = "string" === typeof bz ? bz : void 0;
            var nz = wz(Ez) ? 0 : fz(Ez, Az.ct03, Az.XPsb),
              iz = Tz;
            Oz().setInt32(zz + 4, iz, !0), Oz().setInt32(zz + 0, nz, !0)
          },
          Nngb: function(zz, uz) {
            throw new Error(pz(zz, uz))
          },
          hHAg: function(zz, uz) {
            console.error(pz(zz, uz))
          },
          l5p2: function(zz) {
            sz(zz)
          }
        }
      }
    }

    function tz(zz) {
      Kz === Rz.length && Rz.push(Rz.length + 1);
      const uz = Kz;
      return Kz = Rz[uz], Rz[uz] = zz, uz
    }
    bz.r(Ez), bz.d(Ez, {
      Ciz: () => nz,
      Lp: () => iz,
      default: () => Gz,
      initSync: () => Pz,
      Pp: () => lz
    });
    let Hz = null;

    function Oz() {
      return (null === Hz || !0 === Hz.buffer.detached || void 0 === Hz.buffer.detached && Hz.buffer !== Az.memory.buffer) && (Hz = new DataView(Az.memory.buffer)), Hz
    }

    function pz(zz, uz) {
      return function(zz, uz) {
        Nz += uz, Nz >= oz && (rz = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), rz.decode(), Nz = uz);
        return rz.decode(Fz().subarray(zz, zz + uz))
      }(zz >>> 0, uz)
    }
    let dz = null;

    function Fz() {
      return null !== dz && 0 !== dz.byteLength || (dz = new Uint8Array(Az.memory.buffer)), dz
    }

    function Zz(zz) {
      return Rz[zz]
    }
    let Rz = new Array(1024).fill(void 0);
    Rz.push(void 0, null, !0, !1);
    let Kz = Rz.length;

    function wz(zz) {
      return void 0 === zz || null === zz
    }

    function Xz(zz, uz) {
      const bz = uz(4 * zz.length, 4) >>> 0,
        Ez = Oz();
      for (let nz = 0; nz < zz.length; nz++) Ez.setUint32(bz + 4 * nz, tz(zz[nz]), !0);
      return Tz = zz.length, bz
    }

    function fz(zz, uz, bz) {
      if (void 0 === bz) {
        const bz = vz.encode(zz),
          Ez = uz(bz.length, 1) >>> 0;
        return Fz().subarray(Ez, Ez + bz.length).set(bz), Tz = bz.length, Ez
      }
      let Ez = zz.length,
        nz = uz(Ez, 1) >>> 0;
      const iz = Fz();
      let lz = 0;
      for (; lz < Ez; lz++) {
        const uz = zz.charCodeAt(lz);
        if (uz > 127) break;
        iz[nz + lz] = uz
      }
      if (lz !== Ez) {
        0 !== lz && (zz = zz.slice(lz)), nz = bz(nz, Ez, Ez = lz + 3 * zz.length, 1) >>> 0;
        const uz = Fz().subarray(nz + lz, nz + Ez);
        lz += vz.encodeInto(zz, uz).written, nz = bz(nz, Ez, lz, 1) >>> 0
      }
      return Tz = lz, nz
    }

    function sz(zz) {
      const uz = Zz(zz);
      return function(zz) {
        zz < 1028 || (Rz[zz] = Kz, Kz = zz)
      }(zz), uz
    }
    let rz = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    rz.decode();
    const oz = 2146435072;
    let Nz = 0;
    const vz = new TextEncoder;
    "encodeInto" in vz || (vz.encodeInto = function(zz, uz) {
      const bz = vz.encode(zz);
      return uz.set(bz), {
        read: zz.length,
        written: bz.length
      }
    });
    let xz, Jz, Az, Tz = 0;

    function Lz(zz, uz) {
      return Jz = zz, Az = zz.exports, xz = uz, Hz = null, dz = null, Az.GMWq(), Az
    }

    function Pz(zz) {
      if (void 0 !== Az) return Az;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module: zz
      } = zz) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const uz = Mz();
      zz instanceof WebAssembly.Module || (zz = new WebAssembly.Module(zz));
      return Lz(new WebAssembly.Instance(zz, uz), zz)
    }
    async function Gz(zz) {
      if (void 0 !== Az) return Az;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module_or_path: zz
      } = zz) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const uz = Mz();
      ("string" === typeof zz || "function" === typeof Request && zz instanceof Request || "function" === typeof URL && zz instanceof URL) && (zz = fetch(zz));
      const {
        instance: bz,
        module: Ez
      } = await async function(zz, uz) {
        if ("function" === typeof Response && zz instanceof Response) {
          if (!zz.ok) throw new Error(`failed to fetch Wasm: ${zz.status} ${zz.statusText} fetching '${zz.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(zz, uz)
          } catch (bz) {
            if (! function(zz) {
                switch (zz) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(zz.type) || "application/wasm" === zz.headers.get("Content-Type")) throw bz;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", bz)
          }
          const Ez = await zz.arrayBuffer();
          return await WebAssembly.instantiate(Ez, uz)
        } {
          const bz = await WebAssembly.instantiate(zz, uz);
          return bz instanceof WebAssembly.Instance ? {
            instance: bz,
            module: zz
          } : bz
        }
      }(await zz, uz);
      return Lz(bz, Ez)
    }
    var az = bz(3475),
      Vz = bz(6346);
    class mz extends Error {
      stage;
      constructor(zz, uz) {
        super((0, az.w)(zz, uz), {
          cause: uz
        }), this.name = "BloxdAnimWasmError", this.stage = zz
      }
    }
    let qz = null,
      hz = null;

    function Uz() {
      if (hz) throw hz
    }
    async function cz(zz, uz, nz) {
      Uz();
      const iz = await (qz ??= (async () => {
        let zz;
        try {
          zz = await (0, az.x)(new bz.U(bz(42546)), (0, Vz.d)("bloxd_wasm_anim"))
        } catch (uz) {
          throw new mz((0, az.C)(uz), uz)
        }
        try {
          await Gz({
            module_or_path: zz
          })
        } catch (uz) {
          throw new mz("instantiate", uz)
        }
        return Ez
      })(), qz.catch((() => {
        qz = null
      })), qz);
      Uz();
      try {
        return iz.Ciz(Object.entries(zz).flat(), [...uz.mobTypes], [...uz.vehicleTypes], [...uz.mobAiStates], [...uz.playerPoses], "builtIns" in nz ? nz.builtIns : void 0)
      } catch (lz) {
        const zz = new mz("call", lz);
        throw lz instanceof WebAssembly.RuntimeError && (hz = zz), zz
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);