export const id = 61;
export const ids = [61];
export const modules = {
  60620: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/bloxd_wasm_recorder_bg.9ac5f6c32468fe721412.wasm"
  },
  60611: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      BloxdRecorderWasmError: () => Vz,
      RECORDER_MODULE_ID: () => az,
      loadRecorderModule: () => hz,
      markRecorderTrapped: () => cz,
      prefetchRecorderModule: () => Uz,
      recorderMemoryBytes: () => Sz,
      unloadRecorderModule: () => gz
    });
    var Ez = {};
    bz.r(Ez), bz.d(Ez, {
      Mnz: () => nz,
      ulz: () => Lz,
      Lp: () => iz,
      default: () => Tz,
      initSync: () => Az,
      Pp: () => lz,
      inz: () => Mz,
      YEz: () => tz
    });
    class nz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Oz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        vz.dmZQ(zz, 0)
      }
      busy() {
        return 0 !== vz.jXd5(this.__wbg_ptr)
      }
      command(zz, uz) {
        return 0 !== vz.Tn5F(this.__wbg_ptr, zz, uz)
      }
      kEz(zz) {
        return vz.cUtL(this.__wbg_ptr, zz) >>> 0
      }
      CEz() {
        vz.DVDm(this.__wbg_ptr)
      }
      BEz() {
        return vz.WYTT(this.__wbg_ptr) >>> 0
      }
      IEz() {
        return vz.u5a3(this.__wbg_ptr)
      }
      bnz() {
        return vz.q2Tm(this.__wbg_ptr) >>> 0
      }
      Enz() {
        return vz.y9hZ(this.__wbg_ptr) >>> 0
      }
      feed(zz) {
        return vz.adnX(this.__wbg_ptr, zz) >>> 0
      }
      constructor() {
        const zz = vz.UyUO();
        return this.__wbg_ptr = zz, Oz.register(this, this.__wbg_ptr, this), this
      }
      unz() {
        return vz.Zt5G(this.__wbg_ptr) >>> 0
      }
      blz() {
        return vz.WruN(this.__wbg_ptr) >>> 0
      }
      jEz(zz, uz, bz) {
        return 0 !== vz.UeuL(this.__wbg_ptr, zz, uz, bz)
      }
      stage(zz) {
        return vz.dxSb(this.__wbg_ptr, zz) >>> 0
      }
      step() {
        return vz.Upe9(this.__wbg_ptr) >>> 0
      }
    }

    function iz(zz, uz) {
      const bz = function(zz, uz, bz) {
          if (void 0 === bz) {
            const bz = rz.encode(zz),
              Ez = uz(bz.length, 1) >>> 0;
            return Zz().subarray(Ez, Ez + bz.length).set(bz), xz = bz.length, Ez
          }
          let Ez = zz.length,
            nz = uz(Ez, 1) >>> 0;
          const iz = Zz();
          let lz = 0;
          for (; lz < Ez; lz++) {
            const uz = zz.charCodeAt(lz);
            if (uz > 127) break;
            iz[nz + lz] = uz
          }
          if (lz !== Ez) {
            0 !== lz && (zz = zz.slice(lz)), nz = bz(nz, Ez, Ez = lz + 3 * zz.length, 1) >>> 0;
            const uz = Zz().subarray(nz + lz, nz + Ez);
            lz += rz.encodeInto(zz, uz).written, nz = bz(nz, Ez, lz, 1) >>> 0
          }
          return xz = lz, nz
        }(zz, vz.wq0Z, vz.aCFt),
        Ez = xz,
        nz = vz.oTze(bz, Ez, uz);
      if (nz[1]) throw wz(nz[0])
    }

    function lz() {
      vz.hsRF()
    }

    function Mz() {
      return vz.DQSE() >>> 0
    }

    function tz() {
      return wz(vz.sY7O())
    }

    function Hz() {
      return {
        __proto__: null,
        HV73: {
          __proto__: null,
          hOH4: function(zz, uz) {
            return pz(Error(dz(zz, uz)))
          },
          hjfa: function() {
            return pz(vz.memory)
          },
          A8sw: function(zz, uz) {
            throw new Error(dz(zz, uz))
          },
          Iitd: function(zz, uz) {
            console.error(dz(zz, uz))
          },
          xDsi: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (nz.prototype[Symbol.dispose] = nz.prototype.free);
    const Oz = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((zz => vz?.__wbg_recordermodule_free(zz, 1)));

    function pz(zz) {
      Kz === Rz.length && Rz.push(Rz.length + 1);
      const uz = Kz;
      return Kz = Rz[uz], Rz[uz] = zz, uz
    }

    function dz(zz, uz) {
      return function(zz, uz) {
        sz += uz, sz >= fz && (Xz = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Xz.decode(), sz = uz);
        return Xz.decode(Zz().subarray(zz, zz + uz))
      }(zz >>> 0, uz)
    }
    let Fz = null;

    function Zz() {
      return null !== Fz && 0 !== Fz.byteLength || (Fz = new Uint8Array(vz.memory.buffer)), Fz
    }
    let Rz = new Array(1024).fill(void 0);
    Rz.push(void 0, null, !0, !1);
    let Kz = Rz.length;

    function wz(zz) {
      const uz = function(zz) {
        return Rz[zz]
      }(zz);
      return function(zz) {
        zz < 1028 || (Rz[zz] = Kz, Kz = zz)
      }(zz), uz
    }
    let Xz = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Xz.decode();
    const fz = 2146435072;
    let sz = 0;
    const rz = new TextEncoder;
    "encodeInto" in rz || (rz.encodeInto = function(zz, uz) {
      const bz = rz.encode(zz);
      return uz.set(bz), {
        read: zz.length,
        written: bz.length
      }
    });
    let oz, Nz, vz, xz = 0;

    function Jz(zz, uz) {
      return Nz = zz, vz = zz.exports, oz = uz, Fz = null, vz.A2Cd(), vz
    }

    function Az(zz) {
      if (void 0 !== vz) return vz;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module: zz
      } = zz) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const uz = Hz();
      zz instanceof WebAssembly.Module || (zz = new WebAssembly.Module(zz));
      return Jz(new WebAssembly.Instance(zz, uz), zz)
    }
    async function Tz(zz) {
      if (void 0 !== vz) return vz;
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
      return Jz(bz, Ez)
    }

    function Lz() {
      vz = void 0, Nz = void 0, Fz = null, Rz = new Array(1024).fill(void 0), Rz.push(void 0, null, !0, !1), Kz = Rz.length
    }
    var Pz = bz(3475),
      Gz = bz(6346);
    const az = 2;
    class Vz extends Error {
      stage;
      constructor(zz, uz) {
        super((0, Pz.w)(zz, uz), {
          cause: uz
        }), this.name = "BloxdRecorderWasmError", this.stage = zz
      }
    }
    let mz = null;
    const qz = function(zz) {
      let uz = null,
        bz = null,
        Ez = null,
        nz = null;
      const iz = async () => {
        let bz = null;
        try {
          return bz = uz ??= (0, Pz.x)(zz.url(), (0, Gz.d)(zz.name)), await bz
        } catch (Ez) {
          throw uz === bz && (uz = null), zz.error((0, Pz.C)(Ez), Ez)
        }
      };
      return {
        load: () => {
          if (nz) return Promise.reject(nz);
          if (bz) return bz;
          const uz = (async () => {
            const uz = await iz();
            try {
              await zz.init(uz)
            } catch (bz) {
              throw zz.error("instantiate", bz)
            }
            return zz.bindings
          })();
          bz = uz, Ez = uz;
          const lz = () => {
            Ez === uz && (Ez = null)
          };
          return uz.then(lz, (() => {
            lz(), bz === uz && (bz = null)
          })), uz
        },
        prefetch: async () => {
          nz || bz || await iz()
        },
        markTrapped: uz => (nz ??= zz.error("call", uz), nz),
        unload: () => {
          nz || !zz.reset || Ez || (zz.reset(), bz = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new bz.U(bz(60620)),
      init: async zz => {
        await Tz({
          module_or_path: zz
        }), mz = tz()
      },
      bindings: Ez,
      error: (zz, uz) => new Vz(zz, uz),
      reset: () => {
        Lz(), mz = null
      }
    });

    function hz() {
      return qz.load()
    }

    function Uz() {
      return qz.prefetch()
    }

    function cz(zz) {
      return qz.markTrapped(zz)
    }

    function gz() {
      qz.unload()
    }

    function Sz() {
      return mz?.buffer.byteLength ?? 0
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