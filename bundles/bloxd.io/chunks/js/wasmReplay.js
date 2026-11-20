export const id = 62;
export const ids = [62];
export const modules = {
  60640: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/bloxd_wasm_replay_bg.c8084dfa2cc122126164.wasm"
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
  60635: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      BloxdReplayWasmError: () => Az,
      loadReplayModule: () => iz,
      markReplayTrapped: () => nz,
      replayMemoryBytes: () => lz,
      unloadReplayModule: () => Lz
    });
    var Fz = {};
    sz.r(Fz), sz.d(Fz, {
      CWz: () => Wz,
      DOz: () => Tz,
      Iu: () => Xz,
      default: () => Gz,
      initSync: () => Zz,
      Cu: () => Oz,
      xWz: () => oz,
      eWz: () => vz
    });
    class Wz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Kz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        Iz.R3FQ(zz, 0)
      }
      cWz(zz, tz, sz, Fz, Wz, Xz) {
        Iz.LFcF(this.__wbg_ptr, zz, tz, sz, Fz, Wz, Xz)
      }
      close() {
        Iz.aXx2(this.__wbg_ptr)
      }
      crop(zz, tz) {
        Iz.wIBH(this.__wbg_ptr, zz, tz)
      }
      yWz(zz, tz) {
        Iz.bLsF(this.__wbg_ptr, zz, tz)
      }
      dWz() {
        return Iz.BOby(this.__wbg_ptr) >>> 0
      }
      MWz() {
        return Iz.EKlW(this.__wbg_ptr) >>> 0
      }
      hWz() {
        return Iz.t9iF(this.__wbg_ptr) >>> 0
      }
      QWz() {
        return Iz.sUTX(this.__wbg_ptr) >>> 0
      }
      AWz(zz, tz) {
        Iz.lLhk(this.__wbg_ptr, zz, tz)
      }
      constructor() {
        const zz = Iz.WQ65();
        return this.__wbg_ptr = zz, Kz.register(this, this.__wbg_ptr, this), this
      }
      open() {
        Iz.QPOL(this.__wbg_ptr)
      }
      BWz() {
        return Iz.f4Sk(this.__wbg_ptr) >>> 0
      }
      pause() {
        Iz.mcOB(this.__wbg_ptr)
      }
      play() {
        Iz.kX7w(this.__wbg_ptr)
      }
      save() {
        return Iz.Q9r4(this.__wbg_ptr) >>> 0
      }
      kWz() {
        Iz.k1LW(this.__wbg_ptr)
      }
      seek(zz, tz) {
        Iz.J8Wu(this.__wbg_ptr, zz, tz)
      }
      LWz(zz) {
        Iz.BaYw(this.__wbg_ptr, zz)
      }
      jWz(zz, tz) {
        const sz = function(zz, tz) {
            const sz = tz(8 * zz.length, 8) >>> 0;
            return function() {
              null !== Nz && 0 !== Nz.byteLength || (Nz = new Float64Array(Iz.memory.buffer));
              return Nz
            }().set(zz, sz / 8), Cz = zz.length, sz
          }(tz, Iz.hWBz),
          Fz = Cz;
        Iz.VvD3(this.__wbg_ptr, zz, sz, Fz)
      }
      TWz(zz, tz) {
        Iz.WdlT(this.__wbg_ptr, zz, tz)
      }
      iWz(zz) {
        Iz.sRL8(this.__wbg_ptr, zz)
      }
      stage(zz) {
        return Iz.ZnE4(this.__wbg_ptr, zz) >>> 0
      }
      step(zz, tz) {
        return Iz.IMmQ(this.__wbg_ptr, zz, tz) >>> 0
      }
    }

    function Xz(zz, tz) {
      const sz = function(zz, tz, sz) {
          if (void 0 === sz) {
            const sz = xz.encode(zz),
              Fz = tz(sz.length, 1) >>> 0;
            return Dz().subarray(Fz, Fz + sz.length).set(sz), Cz = sz.length, Fz
          }
          let Fz = zz.length,
            Wz = tz(Fz, 1) >>> 0;
          const Xz = Dz();
          let Oz = 0;
          for (; Oz < Fz; Oz++) {
            const tz = zz.charCodeAt(Oz);
            if (tz > 127) break;
            Xz[Wz + Oz] = tz
          }
          if (Oz !== Fz) {
            0 !== Oz && (zz = zz.slice(Oz)), Wz = sz(Wz, Fz, Fz = Oz + 3 * zz.length, 1) >>> 0;
            const tz = Dz().subarray(Wz + Oz, Wz + Fz);
            Oz += xz.encodeInto(zz, tz).written, Wz = sz(Wz, Fz, Oz, 1) >>> 0
          }
          return Cz = Oz, Wz
        }(zz, Iz.hWBz, Iz.zINp),
        Fz = Cz,
        Wz = Iz.c3v4(sz, Fz, tz);
      if (Wz[1]) throw Bz(Wz[0])
    }

    function Oz() {
      Iz.Blx7()
    }

    function oz() {
      return Iz.fN5H() >>> 0
    }

    function vz() {
      return Bz(Iz.Cotl())
    }

    function Uz() {
      return {
        __proto__: null,
        NOZI: {
          __proto__: null,
          hjiZ: function(zz, tz) {
            return uz(Error(bz(zz, tz)))
          },
          pbye: function() {
            return uz(Iz.memory)
          },
          Ksqo: function(zz, tz) {
            throw new Error(bz(zz, tz))
          },
          Q4zD: function(zz, tz) {
            console.error(bz(zz, tz))
          },
          MMxQ: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Wz.prototype[Symbol.dispose] = Wz.prototype.free);
    const Kz = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((zz => Iz?.__wbg_replaymodule_free(zz, 1)));

    function uz(zz) {
      Hz === gz.length && gz.push(gz.length + 1);
      const tz = Hz;
      return Hz = gz[tz], gz[tz] = zz, tz
    }
    let Nz = null;

    function bz(zz, tz) {
      return function(zz, tz) {
        Yz += tz, Yz >= rz && (Pz = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Pz.decode(), Yz = tz);
        return Pz.decode(Dz().subarray(zz, zz + tz))
      }(zz >>> 0, tz)
    }
    let wz = null;

    function Dz() {
      return null !== wz && 0 !== wz.byteLength || (wz = new Uint8Array(Iz.memory.buffer)), wz
    }
    let gz = new Array(1024).fill(void 0);
    gz.push(void 0, null, !0, !1);
    let Hz = gz.length;

    function Bz(zz) {
      const tz = function(zz) {
        return gz[zz]
      }(zz);
      return function(zz) {
        zz < 1028 || (gz[zz] = Hz, Hz = zz)
      }(zz), tz
    }
    let Pz = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Pz.decode();
    const rz = 2146435072;
    let Yz = 0;
    const xz = new TextEncoder;
    "encodeInto" in xz || (xz.encodeInto = function(zz, tz) {
      const sz = xz.encode(zz);
      return tz.set(sz), {
        read: zz.length,
        written: sz.length
      }
    });
    let mz, Jz, Iz, Cz = 0;

    function ez(zz, tz) {
      return Jz = zz, Iz = zz.exports, mz = tz, Nz = null, wz = null, Iz.FCay(), Iz
    }

    function Zz(zz) {
      if (void 0 !== Iz) return Iz;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module: zz
      } = zz) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const tz = Uz();
      zz instanceof WebAssembly.Module || (zz = new WebAssembly.Module(zz));
      return ez(new WebAssembly.Instance(zz, tz), zz)
    }
    async function Gz(zz) {
      if (void 0 !== Iz) return Iz;
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
      return ez(sz, Fz)
    }

    function Tz() {
      Iz = void 0, Jz = void 0, Nz = null, wz = null, gz = new Array(1024).fill(void 0), gz.push(void 0, null, !0, !1), Hz = gz.length
    }
    var cz = sz(3378),
      jz = sz(6196);
    class Az extends Error {
      stage;
      constructor(zz, tz) {
        super((0, cz.D)(zz, tz), {
          cause: tz
        }), this.name = "BloxdReplayWasmError", this.stage = zz
      }
    }
    let yz = null,
      Mz = null,
      dz = Promise.resolve(),
      hz = 0,
      Qz = null,
      kz = null;

    function iz() {
      if (kz) return Promise.reject(kz);
      if (Mz) return Mz;
      const zz = hz,
        tz = dz,
        Wz = (async () => {
          let Wz;
          await tz, yz ??= (0, cz.E)(new sz.U(sz(60640)), (0, jz.d)("bloxd_wasm_replay"));
          try {
            Wz = await yz
          } catch (Xz) {
            throw yz = null, new Az((0, cz.K)(Xz), Xz)
          }
          if (zz !== hz) throw new Az("instantiate", new Error("unloaded while loading"));
          try {
            await Gz({
              module_or_path: Wz
            })
          } catch (Xz) {
            throw Tz(), new Az("instantiate", Xz)
          }
          if (zz !== hz) throw Tz(), new Az("instantiate", new Error("unloaded while loading"));
          return Qz = vz(), Fz
        })();
      return Mz = Wz, dz = Wz.catch((() => {})), Wz.catch((() => {
        Mz === Wz && (Mz = null)
      })), Wz
    }

    function Lz() {
      kz || az()
    }

    function lz() {
      return Qz?.buffer.byteLength ?? 0
    }

    function nz(zz) {
      return kz || (kz = new Az("call", zz), az()), kz
    }

    function az() {
      hz++, Tz(), Mz = null, Qz = null
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);