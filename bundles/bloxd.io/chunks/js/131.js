export const id = 131;
export const ids = [131];
export const modules = {
  6340: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      loadPageShaderPackCompiler: () => du
    });
    var Ez = {};
    bz.r(Ez), bz.d(Ez, {
      oEz: () => nz,
      B_: () => iz,
      default: () => Qz,
      NEz: () => lz,
      vEz: () => Mz,
      initSync: () => Dz,
      Pp: () => tz,
      tbz: () => Hz,
      xEz: () => Oz,
      JEz: () => pz,
      lT: () => dz,
      AEz: () => Fz,
      hA: () => Zz,
      TEz: () => Rz
    });
    class nz {
      static __wrap(zz) {
        const uz = Object.create(nz.prototype);
        return uz.__wbg_ptr = zz, wz.register(uz, uz.__wbg_ptr, uz), uz
      }
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, wz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        gz.aBWP(zz, 0)
      }
      get errorsJson() {
        let zz, uz;
        try {
          const bz = gz.YTs5(this.__wbg_ptr);
          return zz = bz[0], uz = bz[1], Nz(bz[0], bz[1])
        } finally {
          gz.j8BP(zz, uz, 1)
        }
      }
      get features() {
        const zz = gz.w0oh(this.__wbg_ptr);
        var uz = fz(zz[0], zz[1]);
        return gz.j8BP(zz[0], 4 * zz[1], 4), uz
      }
      get hooks() {
        const zz = gz.Ut58(this.__wbg_ptr);
        var uz = sz(zz[0], zz[1]).slice();
        return gz.j8BP(zz[0], 1 * zz[1], 1), uz
      }
      mapValidationMessage(zz, uz, bz, Ez, nz) {
        let iz, lz;
        try {
          const Hz = gz.TH9E(this.__wbg_ptr, zz, uz, bz, Xz(Ez), Xz(nz));
          var Mz = Hz[0],
            tz = Hz[1];
          if (Hz[3]) throw Mz = 0, tz = 0, az(Hz[2]);
          return iz = Mz, lz = tz, Nz(Mz, tz)
        } finally {
          gz.j8BP(iz, lz, 1)
        }
      }
      get moduleCodes() {
        const zz = gz.kQM6(this.__wbg_ptr);
        var uz = fz(zz[0], zz[1]);
        return gz.j8BP(zz[0], 4 * zz[1], 4), uz
      }
      get offInStrictJson() {
        let zz, uz;
        try {
          const bz = gz.n2a2(this.__wbg_ptr);
          return zz = bz[0], uz = bz[1], Nz(bz[0], bz[1])
        } finally {
          gz.j8BP(zz, uz, 1)
        }
      }
      get reads() {
        const zz = gz.MZNf(this.__wbg_ptr);
        var uz = fz(zz[0], zz[1]);
        return gz.j8BP(zz[0], 4 * zz[1], 4), uz
      }
      get validationModuleCodes() {
        const zz = gz.aKBZ(this.__wbg_ptr);
        var uz = fz(zz[0], zz[1]);
        return gz.j8BP(zz[0], 4 * zz[1], 4), uz
      }
      get validationModuleKeys() {
        const zz = gz.qhog(this.__wbg_ptr);
        var uz = sz(zz[0], zz[1]).slice();
        return gz.j8BP(zz[0], 1 * zz[1], 1), uz
      }
      get variantFlags() {
        const zz = gz.AxFL(this.__wbg_ptr);
        var uz = sz(zz[0], zz[1]).slice();
        return gz.j8BP(zz[0], 1 * zz[1], 1), uz
      }
    }

    function iz(zz, uz, bz, Ez, iz, lz, Mz) {
      const tz = Gz(zz, gz.khsu),
        Hz = Sz,
        Oz = Gz(uz, gz.khsu),
        pz = Sz,
        dz = Gz(bz, gz.khsu),
        Fz = Sz,
        Zz = Pz(Ez, gz.khsu),
        Rz = Sz,
        Kz = Gz(iz, gz.khsu),
        wz = Sz,
        Xz = Gz(lz, gz.khsu),
        fz = Sz,
        sz = Gz(Mz, gz.khsu),
        rz = Sz,
        oz = gz.O4mq(tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz, fz, sz, rz);
      if (oz[2]) throw az(oz[1]);
      return nz.__wrap(oz[0])
    }

    function lz() {
      const zz = gz.ZNTq();
      var uz = fz(zz[0], zz[1]);
      return gz.j8BP(zz[0], 4 * zz[1], 4), uz
    }

    function Mz() {
      const zz = gz.cikJ();
      var uz = fz(zz[0], zz[1]);
      return gz.j8BP(zz[0], 4 * zz[1], 4), uz
    }

    function tz() {
      gz.kQyK()
    }

    function Hz(zz, uz, bz, Ez, nz) {
      let iz, lz;
      try {
        const Hz = Gz(zz, gz.khsu),
          Oz = Sz,
          pz = Pz(uz, gz.khsu),
          dz = Sz,
          Fz = Gz(bz, gz.khsu),
          Zz = Sz,
          Rz = Pz(Ez, gz.khsu),
          Kz = Sz,
          wz = function(zz, uz) {
            const bz = uz(1 * zz.length, 1) >>> 0;
            return Jz().set(zz, bz / 1), Sz = zz.length, bz
          }(nz, gz.khsu),
          Xz = Sz,
          fz = gz.cXNG(Hz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz);
        var Mz = fz[0],
          tz = fz[1];
        if (fz[3]) throw Mz = 0, tz = 0, az(fz[2]);
        return iz = Mz, lz = tz, Nz(Mz, tz)
      } finally {
        gz.j8BP(iz, lz, 1)
      }
    }

    function Oz() {
      let zz, uz;
      try {
        const bz = gz.luZz();
        return zz = bz[0], uz = bz[1], Nz(bz[0], bz[1])
      } finally {
        gz.j8BP(zz, uz, 1)
      }
    }

    function pz(zz) {
      let uz, bz;
      try {
        const iz = gz.jMuU(zz);
        var Ez = iz[0],
          nz = iz[1];
        if (iz[3]) throw Ez = 0, nz = 0, az(iz[2]);
        return uz = Ez, bz = nz, Nz(Ez, nz)
      } finally {
        gz.j8BP(uz, bz, 1)
      }
    }

    function dz() {
      return gz.fi4N() >>> 0
    }

    function Fz() {
      let zz, uz;
      try {
        const bz = gz.bYtI();
        return zz = bz[0], uz = bz[1], Nz(bz[0], bz[1])
      } finally {
        gz.j8BP(zz, uz, 1)
      }
    }

    function Zz(zz, uz) {
      let bz, Ez;
      try {
        const lz = Gz(zz, gz.khsu),
          Mz = Sz,
          tz = Pz(uz, gz.khsu),
          Hz = Sz,
          Oz = gz.y4xV(lz, Mz, tz, Hz);
        var nz = Oz[0],
          iz = Oz[1];
        if (Oz[3]) throw nz = 0, iz = 0, az(Oz[2]);
        return bz = nz, Ez = iz, Nz(nz, iz)
      } finally {
        gz.j8BP(bz, Ez, 1)
      }
    }

    function Rz(zz) {
      let uz, bz;
      try {
        const iz = gz.wz4f(Xz(zz));
        var Ez = iz[0],
          nz = iz[1];
        if (iz[3]) throw Ez = 0, nz = 0, az(iz[2]);
        return uz = Ez, bz = nz, Nz(Ez, nz)
      } finally {
        gz.j8BP(uz, bz, 1)
      }
    }

    function Kz() {
      return {
        __proto__: null,
        aDj4: {
          __proto__: null,
          AKdk: function(zz, uz) {
            return Xz(Error(Nz(zz, uz)))
          },
          nGka: function(zz) {
            return null === Az(zz)
          },
          GrY7: function(zz) {
            return "string" === typeof Az(zz)
          },
          J1nC: function(zz, uz) {
            const bz = Az(uz),
              Ez = "string" === typeof bz ? bz : void 0;
            var nz, iz = void 0 === (nz = Ez) || null === nz ? 0 : function(zz, uz, bz) {
                if (void 0 === bz) {
                  const bz = hz.encode(zz),
                    Ez = uz(bz.length, 1) >>> 0;
                  return Jz().subarray(Ez, Ez + bz.length).set(bz), Sz = bz.length, Ez
                }
                let Ez = zz.length,
                  nz = uz(Ez, 1) >>> 0;
                const iz = Jz();
                let lz = 0;
                for (; lz < Ez; lz++) {
                  const uz = zz.charCodeAt(lz);
                  if (uz > 127) break;
                  iz[nz + lz] = uz
                }
                if (lz !== Ez) {
                  0 !== lz && (zz = zz.slice(lz)), nz = bz(nz, Ez, Ez = lz + 3 * zz.length, 1) >>> 0;
                  const uz = Jz().subarray(nz + lz, nz + Ez);
                  lz += hz.encodeInto(zz, uz).written, nz = bz(nz, Ez, lz, 1) >>> 0
                }
                return Sz = lz, nz
              }(Ez, gz.khsu, gz.tiwD),
              lz = Sz;
            oz().setInt32(zz + 4, lz, !0), oz().setInt32(zz + 0, iz, !0)
          },
          CIsE: function(zz, uz) {
            throw new Error(Nz(zz, uz))
          },
          RvNS: function(zz, uz) {
            return Az(zz).charCodeAt(uz >>> 0)
          },
          MyiD: function(zz, uz) {
            console.error(Nz(zz, uz))
          },
          Yi6v: function(zz) {
            return Az(zz).length
          },
          UYZt: function(zz, uz) {
            return Xz(Nz(zz, uz))
          },
          AP4l: function(zz) {
            az(zz)
          }
        }
      }
    }
    Symbol.dispose && (nz.prototype[Symbol.dispose] = nz.prototype.free);
    const wz = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((zz => gz.aBWP(zz, 1)));

    function Xz(zz) {
      Lz === Tz.length && Tz.push(Tz.length + 1);
      const uz = Lz;
      return Lz = Tz[uz], Tz[uz] = zz, uz
    }

    function fz(zz, uz) {
      zz >>>= 0;
      const bz = oz(),
        Ez = [];
      for (let nz = zz; nz < zz + 4 * uz; nz += 4) Ez.push(az(bz.getUint32(nz, !0)));
      return Ez
    }

    function sz(zz, uz) {
      return zz >>>= 0, Jz().subarray(zz / 1, zz / 1 + uz)
    }
    let rz = null;

    function oz() {
      return (null === rz || !0 === rz.buffer.detached || void 0 === rz.buffer.detached && rz.buffer !== gz.memory.buffer) && (rz = new DataView(gz.memory.buffer)), rz
    }

    function Nz(zz, uz) {
      return function(zz, uz) {
        qz += uz, qz >= mz && (Vz = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Vz.decode(), qz = uz);
        return Vz.decode(Jz().subarray(zz, zz + uz))
      }(zz >>> 0, uz)
    }
    let vz = null;
    let xz = null;

    function Jz() {
      return null !== xz && 0 !== xz.byteLength || (xz = new Uint8Array(gz.memory.buffer)), xz
    }

    function Az(zz) {
      return Tz[zz]
    }
    let Tz = new Array(1024).fill(void 0);
    Tz.push(void 0, null, !0, !1);
    let Lz = Tz.length;

    function Pz(zz, uz) {
      const bz = uz(4 * zz.length, 4) >>> 0;
      return (null !== vz && 0 !== vz.byteLength || (vz = new Uint32Array(gz.memory.buffer)), vz).set(zz, bz / 4), Sz = zz.length, bz
    }

    function Gz(zz, uz) {
      const bz = uz(4 * zz.length, 4) >>> 0,
        Ez = oz();
      for (let nz = 0; nz < zz.length; nz++) Ez.setUint32(bz + 4 * nz, Xz(zz[nz]), !0);
      return Sz = zz.length, bz
    }

    function az(zz) {
      const uz = Az(zz);
      return function(zz) {
        zz < 1028 || (Tz[zz] = Lz, Lz = zz)
      }(zz), uz
    }
    let Vz = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Vz.decode();
    const mz = 2146435072;
    let qz = 0;
    const hz = new TextEncoder;
    "encodeInto" in hz || (hz.encodeInto = function(zz, uz) {
      const bz = hz.encode(zz);
      return uz.set(bz), {
        read: zz.length,
        written: bz.length
      }
    });
    let Uz, cz, gz, Sz = 0;

    function yz(zz, uz) {
      return cz = zz, gz = zz.exports, Uz = uz, rz = null, vz = null, xz = null, gz.CAgb(), gz
    }

    function Dz(zz) {
      if (void 0 !== gz) return gz;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module: zz
      } = zz) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const uz = Kz();
      zz instanceof WebAssembly.Module || (zz = new WebAssembly.Module(zz));
      return yz(new WebAssembly.Instance(zz, uz), zz)
    }
    async function Qz(zz) {
      if (void 0 !== gz) return gz;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module_or_path: zz
      } = zz) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const uz = Kz();
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
      return yz(bz, Ez)
    }
    var Wz = bz(3475),
      ez = bz(6346);
    class jz extends Error {
      stage;
      constructor(zz, uz) {
        super((0, Wz.w)(zz, uz), {
          cause: uz
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = zz
      }
    }
    let Iz = null,
      Bz = null;

    function Cz() {
      return Iz ? Promise.resolve(Iz) : (Bz || (Bz = async function() {
        let zz;
        try {
          zz = await (0, Wz.x)(new bz.U(bz(6349)), (0, ez.d)("bloxd_wasm_shader_pack"))
        } catch (uz) {
          throw new jz((0, Wz.C)(uz), uz)
        }
        try {
          await Qz({
            module_or_path: zz
          })
        } catch (uz) {
          throw new jz("instantiate", uz)
        }
        return Iz = Ez, Iz
      }(), Bz.then(void 0, (() => {
        Bz = null
      }))), Bz)
    }
    var Yz = bz(6359);

    function kz(zz) {
      let [uz, bz, Ez, nz] = zz;
      const iz = {
        file: uz,
        line: bz,
        message: Ez
      };
      return nz && (iz.variants = nz.map(Yz.m)), iz
    }

    function zu(zz) {
      return JSON.parse(zz).map(kz)
    }

    function uu(zz, uz) {
      if (!Number.isInteger(zz) || zz < 0 || zz > 4294967295) throw new Error(`${uz} ${zz} is not a whole number from 0 to 4294967295`);
      return zz
    }

    function bu(zz) {
      return [zz.named.map((zz => zz.name)), Uint32Array.from(zz.named, (zz => uu(zz.id, "Texture ID")))]
    }
    const Eu = new WeakMap;
    const nu = new WeakMap,
      iu = new WeakSet;

    function lu(zz, uz) {
      if (iu.has(zz)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return uz()
      } catch (bz) {
        throw bz instanceof WebAssembly.RuntimeError && iu.add(zz), bz
      }
    }

    function Mu(zz) {
      let uz = nu.get(zz);
      if (!uz) {
        let bz, Ez;
        uz = {
          B_: (uz, bz) => lu(zz, (() => function(zz, uz, bz) {
            const Ez = zz.B_(uz.map((zz => zz.path)), uz.map((zz => zz.source)), ...bu(bz), bz.aliases.map((zz => zz.name)), bz.aliases.map((zz => zz.texture)), bz.aliases.map((zz => zz.kind)));
            let nz = !1;
            try {
              const zz = Ez.validationModuleCodes,
                uz = Array.from(Ez.validationModuleKeys, ((uz, bz) => ({
                  key: (0, Yz.m)(uz),
                  code: zz[bz]
                }))),
                bz = {
                  errors: zu(Ez.errorsJson),
                  offInStrict: zu(Ez.offInStrictJson),
                  variants: (0, Yz.e)(Ez),
                  validationModules: uz,
                  features: Ez.features
                };
              return uz.forEach(((zz, uz) => {
                Eu.set(zz, {
                  pack: Ez,
                  index: uz
                })
              })), nz = uz.length > 0, bz
            } finally {
              nz || Ez.free()
            }
          }(zz, uz, bz))),
          mapValidationMessage: (uz, bz) => {
            const Ez = Eu.get(uz);
            if (!Ez) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return kz(JSON.parse(lu(zz, (() => Ez.pack.mapValidationMessage(Ez.index, bz.lineNum, bz.linePos, bz.message, bz.type)))))
          },
          tbz: uz => lu(zz, (() => function(zz, uz) {
            const bz = new Int32Array(uz.length),
              Ez = [];
            return uz.forEach(((zz, uz) => {
              bz[uz] = zz.variants ? zz.variants.length : -1;
              for (const bz of zz.variants ?? []) Ez.push((0, Yz.i)(bz))
            })), zu(zz.tbz(uz.map((zz => zz.file)), Uint32Array.from(uz, (zz => uu(zz.line, "Diagnostic line"))), uz.map((zz => zz.message)), bz, Uint8Array.from(Ez)))
          }(zz, uz))),
          hA: uz => lu(zz, (() => zz.hA(...bu(uz)))),
          get SHADER_PACK_HEADER_VERSION() {
            return bz ??= lu(zz, (() => zz.AEz())), bz
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return Ez ??= lu(zz, (() => {
              const uz = zz.vEz();
              return zz.NEz().map(((zz, bz) => ({
                path: zz,
                source: uz[bz]
              })))
            })), Ez
          },
          TEz: uz => lu(zz, (() => zz.TEz(uz))),
          resolveHeader: uz => lu(zz, (() => zz.JEz((0, Yz.i)(uz)))),
          xEz: () => lu(zz, (() => zz.xEz()))
        }, nu.set(zz, uz)
      }
      return uz
    }
    var tu = bz(2979),
      Hu = bz(6352);
    const Ou = "bloxdShaderPackWasmFailureReported";
    let pu = null;

    function du() {
      return pu ??= async function() {
        if ("undefined" === typeof WebAssembly) return Fu("unsupported", "This browser has no WebAssembly"), null;
        const zz = (0, Hu.loadShaderPackTextures)().then((() => !0), (zz => (console.error("Could not load the shader pack textures, so shader packs can't run", zz), !1)));
        try {
          const uz = await async function() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cz;
            return Mu(await zz())
          }();
          return await zz ? uz : null
        } catch (uz) {
          const zz = uz instanceof Error ? uz.message : String(uz);
          return Fu(tu.c[uz instanceof jz ? uz.stage : "instantiate"], zz), null
        }
      }(), pu
    }

    function Fu(zz, uz) {
      (0, tu.f)(Ou, `Shader pack wasm ${zz}, so shader packs can't run: ${uz}`, uz, `shader_pack_${zz}`)
    }
  },
  6349: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/bloxd_wasm_shader_pack_bg.ad176f24acdf1c223d73.wasm"
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
  6359: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => sz,
      e: () => rz,
      i: () => Xz,
      m: () => wz
    });
    var Ez = bz(6362);
    const nz = 6,
      iz = 3,
      lz = 1,
      Mz = 2,
      tz = 4,
      Hz = 8,
      Oz = 16,
      pz = 32,
      dz = 64,
      Fz = 128,
      Zz = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Rz(zz) {
      if (!zz) return 0;
      const uz = Zz.indexOf(zz);
      if (uz <= 0) throw new Error(`"${zz}" is not a shader pack hook function`);
      return uz
    }

    function Kz(zz) {
      if (0 === zz) return null;
      const uz = Zz[zz];
      if (void 0 === uz) throw new Error(`${zz} is not a shader pack hook function id`);
      return uz
    }

    function wz(zz) {
      const uz = Ez.e.length;
      return {
        strict: zz >= uz,
        program: Ez.e[zz % uz]
      }
    }

    function Xz(zz) {
      return Number(zz.strict) * Ez.e.length + Ez.e.indexOf(zz.program)
    }

    function fz(zz) {
      return "" === zz ? [] : zz.split(" ")
    }

    function sz(zz) {
      const uz = {
        variantFlags: new Uint8Array(nz),
        hooks: new Uint8Array(nz * iz),
        moduleCodes: Array(nz).fill(""),
        reads: Array(2 * nz).fill("")
      };
      for (const bz of zz) {
        const zz = Xz(bz.key),
          Ez = (zz, uz) => null === bz.hooks.surface || bz.reads.fragment.includes(zz) ? 0 : uz;
        uz.variantFlags[zz] = (bz.sceneDepth ? lz : 0) | (bz.movesVertices ? Mz : 0) | (bz.sunShadow ? tz : 0) | (bz.airShadow ? Hz : 0) | (bz.discards ? Oz : 0) | Ez("localPosition", pz) | Ez("enchantSpeed", dz) | Ez("enchantTier", Fz), uz.hooks[zz * iz] = Rz(bz.hooks.vertex), uz.hooks[zz * iz + 1] = Rz(bz.hooks.surface), uz.hooks[zz * iz + 2] = Rz(bz.hooks.light), uz.moduleCodes[zz] = bz.moduleCode, uz.reads[2 * zz] = bz.reads.vertex.join(" "), uz.reads[2 * zz + 1] = bz.reads.fragment.join(" ")
      }
      return uz
    }

    function rz(zz) {
      const {
        hooks: uz,
        moduleCodes: bz,
        reads: Ez
      } = zz;
      return Array.from(zz.variantFlags, ((zz, nz) => {
        const pz = nz * iz;
        return {
          key: wz(nz),
          hooks: {
            vertex: Kz(uz[pz]),
            surface: Kz(uz[pz + 1]),
            light: Kz(uz[pz + 2])
          },
          moduleCode: bz[nz],
          sceneDepth: 0 !== (zz & lz),
          sunShadow: 0 !== (zz & tz),
          airShadow: 0 !== (zz & Hz),
          movesVertices: 0 !== (zz & Mz),
          discards: 0 !== (zz & Oz),
          reads: {
            vertex: fz(Ez[2 * nz]),
            fragment: fz(Ez[2 * nz + 1])
          }
        }
      }))
    }
  },
  6362: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez,
      i: () => lz,
      j: () => Mz,
      m: () => nz,
      p: () => iz
    });
    const Ez = ["terrain", "liquid", "model"];

    function nz() {
      const zz = [];
      for (const uz of [!1, !0])
        for (const bz of Ez) zz.push({
          strict: uz,
          program: bz
        });
      return zz
    }

    function iz(zz) {
      return `${zz.strict?"strict":"allow"}.${zz.program}`
    }

    function lz(zz) {
      return !zz.hooks.vertex && !zz.hooks.surface && !zz.hooks.light
    }

    function Mz(zz, uz) {
      return "off" !== uz && (null === zz || zz.some((zz => zz.key.strict === ("strict" === uz) && !lz(zz))))
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);