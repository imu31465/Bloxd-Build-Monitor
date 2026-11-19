export const id = 62;
export const ids = [62];
export const modules = {
  60626: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/bloxd_wasm_replay_bg.2f1ffb4925561da609d9.wasm"
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
  },
  60622: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      BloxdReplayWasmError: () => Vz,
      loadReplayModule: () => Sz,
      markReplayTrapped: () => Qz,
      replayMemoryBytes: () => Dz,
      unloadReplayModule: () => yz
    });
    var Ez = {};
    bz.r(Ez), bz.d(Ez, {
      Hnz: () => nz,
      ulz: () => Pz,
      Lp: () => iz,
      default: () => Lz,
      initSync: () => Tz,
      Pp: () => lz,
      inz: () => Mz,
      Onz: () => tz
    });
    class nz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Oz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        xz.pCQR(zz, 0)
      }
      Znz(zz, uz, bz, Ez, nz, iz) {
        xz.lzGy(this.__wbg_ptr, zz, uz, bz, Ez, nz, iz)
      }
      close() {
        xz.CkOL(this.__wbg_ptr)
      }
      crop(zz, uz) {
        xz.C1bn(this.__wbg_ptr, zz, uz)
      }
      wnz(zz, uz) {
        xz.r9AQ(this.__wbg_ptr, zz, uz)
      }
      fnz() {
        return xz.ODtY(this.__wbg_ptr) >>> 0
      }
      Xnz() {
        return xz.QP5m(this.__wbg_ptr) >>> 0
      }
      snz() {
        return xz.t4Qz(this.__wbg_ptr) >>> 0
      }
      rnz() {
        return xz.Cns9(this.__wbg_ptr) >>> 0
      }
      Knz(zz, uz) {
        xz.LgQW(this.__wbg_ptr, zz, uz)
      }
      constructor() {
        const zz = xz.ETar();
        return this.__wbg_ptr = zz, Oz.register(this, this.__wbg_ptr, this), this
      }
      open() {
        xz.Z8if(this.__wbg_ptr)
      }
      unz() {
        return xz.WilY(this.__wbg_ptr) >>> 0
      }
      pause() {
        xz.qHES(this.__wbg_ptr)
      }
      play() {
        xz.pJXR(this.__wbg_ptr)
      }
      save() {
        return xz.mgtX(this.__wbg_ptr) >>> 0
      }
      onz() {
        xz.oNMX(this.__wbg_ptr)
      }
      seek(zz, uz) {
        xz.fGpr(this.__wbg_ptr, zz, uz)
      }
      vnz(zz) {
        xz.bdFv(this.__wbg_ptr, zz)
      }
      Rnz(zz, uz) {
        const bz = function(zz, uz) {
            const bz = uz(8 * zz.length, 8) >>> 0;
            return function() {
              null !== dz && 0 !== dz.byteLength || (dz = new Float64Array(xz.memory.buffer));
              return dz
            }().set(zz, bz / 8), Jz = zz.length, bz
          }(uz, xz.S3zA),
          Ez = Jz;
        xz.K339(this.__wbg_ptr, zz, bz, Ez)
      }
      Fnz(zz, uz) {
        xz.WM2m(this.__wbg_ptr, zz, uz)
      }
      Nnz(zz) {
        xz.eY23(this.__wbg_ptr, zz)
      }
      stage(zz) {
        return xz.JqoI(this.__wbg_ptr, zz) >>> 0
      }
      step(zz, uz) {
        return xz.QTJi(this.__wbg_ptr, zz, uz) >>> 0
      }
    }

    function iz(zz, uz) {
      const bz = function(zz, uz, bz) {
          if (void 0 === bz) {
            const bz = oz.encode(zz),
              Ez = uz(bz.length, 1) >>> 0;
            return Rz().subarray(Ez, Ez + bz.length).set(bz), Jz = bz.length, Ez
          }
          let Ez = zz.length,
            nz = uz(Ez, 1) >>> 0;
          const iz = Rz();
          let lz = 0;
          for (; lz < Ez; lz++) {
            const uz = zz.charCodeAt(lz);
            if (uz > 127) break;
            iz[nz + lz] = uz
          }
          if (lz !== Ez) {
            0 !== lz && (zz = zz.slice(lz)), nz = bz(nz, Ez, Ez = lz + 3 * zz.length, 1) >>> 0;
            const uz = Rz().subarray(nz + lz, nz + Ez);
            lz += oz.encodeInto(zz, uz).written, nz = bz(nz, Ez, lz, 1) >>> 0
          }
          return Jz = lz, nz
        }(zz, xz.S3zA, xz.jxwn),
        Ez = Jz,
        nz = xz.DI68(bz, Ez, uz);
      if (nz[1]) throw Xz(nz[0])
    }

    function lz() {
      xz.ex2e()
    }

    function Mz() {
      return xz.ZG5M() >>> 0
    }

    function tz() {
      return Xz(xz.F2KY())
    }

    function Hz() {
      return {
        __proto__: null,
        seHL: {
          __proto__: null,
          xrnA: function(zz, uz) {
            return pz(Error(Fz(zz, uz)))
          },
          Y9il: function() {
            return pz(xz.memory)
          },
          RoGZ: function(zz, uz) {
            throw new Error(Fz(zz, uz))
          },
          MkRN: function(zz, uz) {
            console.error(Fz(zz, uz))
          },
          iplU: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (nz.prototype[Symbol.dispose] = nz.prototype.free);
    const Oz = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((zz => xz?.__wbg_replaymodule_free(zz, 1)));

    function pz(zz) {
      wz === Kz.length && Kz.push(Kz.length + 1);
      const uz = wz;
      return wz = Kz[uz], Kz[uz] = zz, uz
    }
    let dz = null;

    function Fz(zz, uz) {
      return function(zz, uz) {
        rz += uz, rz >= sz && (fz = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), fz.decode(), rz = uz);
        return fz.decode(Rz().subarray(zz, zz + uz))
      }(zz >>> 0, uz)
    }
    let Zz = null;

    function Rz() {
      return null !== Zz && 0 !== Zz.byteLength || (Zz = new Uint8Array(xz.memory.buffer)), Zz
    }
    let Kz = new Array(1024).fill(void 0);
    Kz.push(void 0, null, !0, !1);
    let wz = Kz.length;

    function Xz(zz) {
      const uz = function(zz) {
        return Kz[zz]
      }(zz);
      return function(zz) {
        zz < 1028 || (Kz[zz] = wz, wz = zz)
      }(zz), uz
    }
    let fz = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    fz.decode();
    const sz = 2146435072;
    let rz = 0;
    const oz = new TextEncoder;
    "encodeInto" in oz || (oz.encodeInto = function(zz, uz) {
      const bz = oz.encode(zz);
      return uz.set(bz), {
        read: zz.length,
        written: bz.length
      }
    });
    let Nz, vz, xz, Jz = 0;

    function Az(zz, uz) {
      return vz = zz, xz = zz.exports, Nz = uz, dz = null, Zz = null, xz.qeHs(), xz
    }

    function Tz(zz) {
      if (void 0 !== xz) return xz;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module: zz
      } = zz) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const uz = Hz();
      zz instanceof WebAssembly.Module || (zz = new WebAssembly.Module(zz));
      return Az(new WebAssembly.Instance(zz, uz), zz)
    }
    async function Lz(zz) {
      if (void 0 !== xz) return xz;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module_or_path: zz
      } = zz) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const uz = Hz();
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
      return Az(bz, Ez)
    }

    function Pz() {
      xz = void 0, vz = void 0, dz = null, Zz = null, Kz = new Array(1024).fill(void 0), Kz.push(void 0, null, !0, !1), wz = Kz.length
    }
    var Gz = bz(3475),
      az = bz(6346);
    class Vz extends Error {
      stage;
      constructor(zz, uz) {
        super((0, Gz.w)(zz, uz), {
          cause: uz
        }), this.name = "BloxdReplayWasmError", this.stage = zz
      }
    }
    let mz = null,
      qz = null,
      hz = Promise.resolve(),
      Uz = 0,
      cz = null,
      gz = null;

    function Sz() {
      if (gz) return Promise.reject(gz);
      if (qz) return qz;
      const zz = Uz,
        uz = hz,
        nz = (async () => {
          let nz;
          await uz, mz ??= (0, Gz.x)(new bz.U(bz(60626)), (0, az.d)("bloxd_wasm_replay"));
          try {
            nz = await mz
          } catch (iz) {
            throw mz = null, new Vz((0, Gz.C)(iz), iz)
          }
          if (zz !== Uz) throw new Vz("instantiate", new Error("unloaded while loading"));
          try {
            await Lz({
              module_or_path: nz
            })
          } catch (iz) {
            throw Pz(), new Vz("instantiate", iz)
          }
          if (zz !== Uz) throw Pz(), new Vz("instantiate", new Error("unloaded while loading"));
          return cz = tz(), Ez
        })();
      return qz = nz, hz = nz.catch((() => {})), nz.catch((() => {
        qz === nz && (qz = null)
      })), nz
    }

    function yz() {
      gz || Wz()
    }

    function Dz() {
      return cz?.buffer.byteLength ?? 0
    }

    function Qz(zz) {
      return gz || (gz = new Vz("call", zz), Wz()), gz
    }

    function Wz() {
      Uz++, Pz(), qz = null, cz = null
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);