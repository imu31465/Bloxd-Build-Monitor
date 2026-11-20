export const id = 61;
export const ids = [61];
export const modules = {
  60628: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/bloxd_wasm_recorder_bg.75a8e592d9993c4fdd19.wasm"
  },
  60625: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      BloxdRecorderWasmError: () => Az,
      RECORDER_MODULE_ID: () => jz,
      loadRecorderModule: () => dz,
      markRecorderTrapped: () => Qz,
      prefetchRecorderModule: () => hz,
      recorderMemoryBytes: () => iz,
      unloadRecorderModule: () => kz
    });
    var Fz = {};
    sz.r(Fz), sz.d(Fz, {
      JWz: () => Wz,
      DOz: () => Gz,
      Iu: () => Xz,
      default: () => Zz,
      initSync: () => ez,
      Cu: () => Oz,
      xWz: () => oz,
      DWz: () => vz
    });
    class Wz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Kz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        Jz.ZDpU(zz, 0)
      }
      busy() {
        return 0 !== Jz.wHHj(this.__wbg_ptr)
      }
      command(zz, tz) {
        return 0 !== Jz.dj00(this.__wbg_ptr, zz, tz)
      }
      gWz(zz) {
        return Jz.dkHW(this.__wbg_ptr, zz) >>> 0
      }
      wWz() {
        Jz.P4V5(this.__wbg_ptr)
      }
      bWz() {
        return Jz.Yl48(this.__wbg_ptr) >>> 0
      }
      NWz() {
        return Jz.IQam(this.__wbg_ptr)
      }
      PWz() {
        return Jz.u4B8(this.__wbg_ptr) >>> 0
      }
      rWz() {
        return Jz.ftP6(this.__wbg_ptr) >>> 0
      }
      feed(zz) {
        return Jz.otDn(this.__wbg_ptr, zz) >>> 0
      }
      constructor() {
        const zz = Jz.bpJC();
        return this.__wbg_ptr = zz, Kz.register(this, this.__wbg_ptr, this), this
      }
      BWz() {
        return Jz.vxTi(this.__wbg_ptr) >>> 0
      }
      gOz() {
        return Jz.NJfZ(this.__wbg_ptr) >>> 0
      }
      uWz(zz, tz, sz) {
        return 0 !== Jz.PgUO(this.__wbg_ptr, zz, tz, sz)
      }
      stage(zz) {
        return Jz.VebA(this.__wbg_ptr, zz) >>> 0
      }
      step() {
        return Jz.fFH6(this.__wbg_ptr) >>> 0
      }
    }

    function Xz(zz, tz) {
      const sz = function(zz, tz, sz) {
          if (void 0 === sz) {
            const sz = Yz.encode(zz),
              Fz = tz(sz.length, 1) >>> 0;
            return wz().subarray(Fz, Fz + sz.length).set(sz), Iz = sz.length, Fz
          }
          let Fz = zz.length,
            Wz = tz(Fz, 1) >>> 0;
          const Xz = wz();
          let Oz = 0;
          for (; Oz < Fz; Oz++) {
            const tz = zz.charCodeAt(Oz);
            if (tz > 127) break;
            Xz[Wz + Oz] = tz
          }
          if (Oz !== Fz) {
            0 !== Oz && (zz = zz.slice(Oz)), Wz = sz(Wz, Fz, Fz = Oz + 3 * zz.length, 1) >>> 0;
            const tz = wz().subarray(Wz + Oz, Wz + Fz);
            Oz += Yz.encodeInto(zz, tz).written, Wz = sz(Wz, Fz, Oz, 1) >>> 0
          }
          return Iz = Oz, Wz
        }(zz, Jz.PO9Y, Jz.Rw9J),
        Fz = Iz,
        Wz = Jz.XGtJ(sz, Fz, tz);
      if (Wz[1]) throw Hz(Wz[0])
    }

    function Oz() {
      Jz.vNiD()
    }

    function oz() {
      return Jz.PHHU() >>> 0
    }

    function vz() {
      return Hz(Jz.hM6O())
    }

    function Uz() {
      return {
        __proto__: null,
        Tlyi: {
          __proto__: null,
          lMNH: function(zz, tz) {
            return uz(Error(Nz(zz, tz)))
          },
          DmFH: function() {
            return uz(Jz.memory)
          },
          xUaV: function(zz, tz) {
            throw new Error(Nz(zz, tz))
          },
          Z1Iz: function(zz, tz) {
            console.error(Nz(zz, tz))
          },
          aR8m: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Wz.prototype[Symbol.dispose] = Wz.prototype.free);
    const Kz = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((zz => Jz?.__wbg_recordermodule_free(zz, 1)));

    function uz(zz) {
      gz === Dz.length && Dz.push(Dz.length + 1);
      const tz = gz;
      return gz = Dz[tz], Dz[tz] = zz, tz
    }

    function Nz(zz, tz) {
      return function(zz, tz) {
        rz += tz, rz >= Pz && (Bz = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Bz.decode(), rz = tz);
        return Bz.decode(wz().subarray(zz, zz + tz))
      }(zz >>> 0, tz)
    }
    let bz = null;

    function wz() {
      return null !== bz && 0 !== bz.byteLength || (bz = new Uint8Array(Jz.memory.buffer)), bz
    }
    let Dz = new Array(1024).fill(void 0);
    Dz.push(void 0, null, !0, !1);
    let gz = Dz.length;

    function Hz(zz) {
      const tz = function(zz) {
        return Dz[zz]
      }(zz);
      return function(zz) {
        zz < 1028 || (Dz[zz] = gz, gz = zz)
      }(zz), tz
    }
    let Bz = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Bz.decode();
    const Pz = 2146435072;
    let rz = 0;
    const Yz = new TextEncoder;
    "encodeInto" in Yz || (Yz.encodeInto = function(zz, tz) {
      const sz = Yz.encode(zz);
      return tz.set(sz), {
        read: zz.length,
        written: sz.length
      }
    });
    let xz, mz, Jz, Iz = 0;

    function Cz(zz, tz) {
      return mz = zz, Jz = zz.exports, xz = tz, bz = null, Jz.anT6(), Jz
    }

    function ez(zz) {
      if (void 0 !== Jz) return Jz;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module: zz
      } = zz) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const tz = Uz();
      zz instanceof WebAssembly.Module || (zz = new WebAssembly.Module(zz));
      return Cz(new WebAssembly.Instance(zz, tz), zz)
    }
    async function Zz(zz) {
      if (void 0 !== Jz) return Jz;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module_or_path: zz
      } = zz) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const tz = Uz();
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
      return Cz(sz, Fz)
    }

    function Gz() {
      Jz = void 0, mz = void 0, bz = null, Dz = new Array(1024).fill(void 0), Dz.push(void 0, null, !0, !1), gz = Dz.length
    }
    var Tz = sz(3378),
      cz = sz(6196);
    const jz = 2;
    class Az extends Error {
      stage;
      constructor(zz, tz) {
        super((0, Tz.D)(zz, tz), {
          cause: tz
        }), this.name = "BloxdRecorderWasmError", this.stage = zz
      }
    }
    let yz = null;
    const Mz = function(zz) {
      let tz = null,
        sz = null,
        Fz = null,
        Wz = null;
      const Xz = async () => {
        let sz = null;
        try {
          return sz = tz ??= (0, Tz.E)(zz.url(), (0, cz.d)(zz.name)), await sz
        } catch (Fz) {
          throw tz === sz && (tz = null), zz.error((0, Tz.K)(Fz), Fz)
        }
      };
      return {
        load: () => {
          if (Wz) return Promise.reject(Wz);
          if (sz) return sz;
          const tz = (async () => {
            const tz = await Xz();
            try {
              await zz.init(tz)
            } catch (sz) {
              throw zz.error("instantiate", sz)
            }
            return zz.bindings
          })();
          sz = tz, Fz = tz;
          const Oz = () => {
            Fz === tz && (Fz = null)
          };
          return tz.then(Oz, (() => {
            Oz(), sz === tz && (sz = null)
          })), tz
        },
        prefetch: async () => {
          Wz || sz || await Xz()
        },
        markTrapped: tz => (Wz ??= zz.error("call", tz), Wz),
        unload: () => {
          Wz || !zz.reset || Fz || (zz.reset(), sz = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new sz.U(sz(60628)),
      init: async zz => {
        await Zz({
          module_or_path: zz
        }), yz = vz()
      },
      bindings: Fz,
      error: (zz, tz) => new Az(zz, tz),
      reset: () => {
        Gz(), yz = null
      }
    });

    function dz() {
      return Mz.load()
    }

    function hz() {
      return Mz.prefetch()
    }

    function Qz(zz) {
      return Mz.markTrapped(zz)
    }

    function kz() {
      Mz.unload()
    }

    function iz() {
      return yz?.buffer.byteLength ?? 0
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
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);