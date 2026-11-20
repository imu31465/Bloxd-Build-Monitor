export const id = 131;
export const ids = [131];
export const modules = {
  6193: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      loadPageShaderPackCompiler: () => Nt
    });
    var Fz = {};
    sz.r(Fz), sz.d(Fz, {
      QFz: () => Wz,
      k_: () => Xz,
      default: () => nz,
      kFz: () => Oz,
      iFz: () => oz,
      initSync: () => lz,
      Cu: () => vz,
      msz: () => Uz,
      LFz: () => Kz,
      lFz: () => uz,
      QJ: () => Nz,
      nFz: () => bz,
      dJ: () => wz,
      aFz: () => Dz
    });
    class Wz {
      static __wrap(zz) {
        const tz = Object.create(Wz.prototype);
        return tz.__wbg_ptr = zz, Hz.register(tz, tz.__wbg_ptr, tz), tz
      }
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Hz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        kz.yWf3(zz, 0)
      }
      get errorsJson() {
        let zz, tz;
        try {
          const sz = kz.vtIx(this.__wbg_ptr);
          return zz = sz[0], tz = sz[1], mz(sz[0], sz[1])
        } finally {
          kz.WK2r(zz, tz, 1)
        }
      }
      get features() {
        const zz = kz.W7K4(this.__wbg_ptr);
        var tz = Pz(zz[0], zz[1]);
        return kz.WK2r(zz[0], 4 * zz[1], 4), tz
      }
      get hooks() {
        const zz = kz.E0YZ(this.__wbg_ptr);
        var tz = rz(zz[0], zz[1]).slice();
        return kz.WK2r(zz[0], 1 * zz[1], 1), tz
      }
      mapValidationMessage(zz, tz, sz, Fz, Wz) {
        let Xz, Oz;
        try {
          const Uz = kz.ppgN(this.__wbg_ptr, zz, tz, sz, Bz(Fz), Bz(Wz));
          var oz = Uz[0],
            vz = Uz[1];
          if (Uz[3]) throw oz = 0, vz = 0, jz(Uz[2]);
          return Xz = oz, Oz = vz, mz(oz, vz)
        } finally {
          kz.WK2r(Xz, Oz, 1)
        }
      }
      get moduleCodes() {
        const zz = kz.TcK1(this.__wbg_ptr);
        var tz = Pz(zz[0], zz[1]);
        return kz.WK2r(zz[0], 4 * zz[1], 4), tz
      }
      get offInStrictJson() {
        let zz, tz;
        try {
          const sz = kz.PIMz(this.__wbg_ptr);
          return zz = sz[0], tz = sz[1], mz(sz[0], sz[1])
        } finally {
          kz.WK2r(zz, tz, 1)
        }
      }
      get reads() {
        const zz = kz.bgUL(this.__wbg_ptr);
        var tz = Pz(zz[0], zz[1]);
        return kz.WK2r(zz[0], 4 * zz[1], 4), tz
      }
      get validationModuleCodes() {
        const zz = kz.DUG0(this.__wbg_ptr);
        var tz = Pz(zz[0], zz[1]);
        return kz.WK2r(zz[0], 4 * zz[1], 4), tz
      }
      get validationModuleKeys() {
        const zz = kz.c9e3(this.__wbg_ptr);
        var tz = rz(zz[0], zz[1]).slice();
        return kz.WK2r(zz[0], 1 * zz[1], 1), tz
      }
      get variantFlags() {
        const zz = kz.SjGp(this.__wbg_ptr);
        var tz = rz(zz[0], zz[1]).slice();
        return kz.WK2r(zz[0], 1 * zz[1], 1), tz
      }
    }

    function Xz(zz, tz, sz, Fz, Xz, Oz, oz) {
      const vz = cz(zz, kz.KDpz),
        Uz = iz,
        Kz = cz(tz, kz.KDpz),
        uz = iz,
        Nz = cz(sz, kz.KDpz),
        bz = iz,
        wz = Tz(Fz, kz.KDpz),
        Dz = iz,
        gz = cz(Xz, kz.KDpz),
        Hz = iz,
        Bz = cz(Oz, kz.KDpz),
        Pz = iz,
        rz = cz(oz, kz.KDpz),
        Yz = iz,
        xz = kz.HTMp(vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz, Hz, Bz, Pz, rz, Yz);
      if (xz[2]) throw jz(xz[1]);
      return Wz.__wrap(xz[0])
    }

    function Oz() {
      const zz = kz.oImy();
      var tz = Pz(zz[0], zz[1]);
      return kz.WK2r(zz[0], 4 * zz[1], 4), tz
    }

    function oz() {
      const zz = kz.q5LQ();
      var tz = Pz(zz[0], zz[1]);
      return kz.WK2r(zz[0], 4 * zz[1], 4), tz
    }

    function vz() {
      kz.cCdI()
    }

    function Uz(zz, tz, sz, Fz, Wz) {
      let Xz, Oz;
      try {
        const Uz = cz(zz, kz.KDpz),
          Kz = iz,
          uz = Tz(tz, kz.KDpz),
          Nz = iz,
          bz = cz(sz, kz.KDpz),
          wz = iz,
          Dz = Tz(Fz, kz.KDpz),
          gz = iz,
          Hz = function(zz, tz) {
            const sz = tz(1 * zz.length, 1) >>> 0;
            return Cz().set(zz, sz / 1), iz = zz.length, sz
          }(Wz, kz.KDpz),
          Bz = iz,
          Pz = kz.b6f8(Uz, Kz, uz, Nz, bz, wz, Dz, gz, Hz, Bz);
        var oz = Pz[0],
          vz = Pz[1];
        if (Pz[3]) throw oz = 0, vz = 0, jz(Pz[2]);
        return Xz = oz, Oz = vz, mz(oz, vz)
      } finally {
        kz.WK2r(Xz, Oz, 1)
      }
    }

    function Kz() {
      let zz, tz;
      try {
        const sz = kz.mSCP();
        return zz = sz[0], tz = sz[1], mz(sz[0], sz[1])
      } finally {
        kz.WK2r(zz, tz, 1)
      }
    }

    function uz(zz) {
      let tz, sz;
      try {
        const Xz = kz.hzuC(zz);
        var Fz = Xz[0],
          Wz = Xz[1];
        if (Xz[3]) throw Fz = 0, Wz = 0, jz(Xz[2]);
        return tz = Fz, sz = Wz, mz(Fz, Wz)
      } finally {
        kz.WK2r(tz, sz, 1)
      }
    }

    function Nz() {
      return kz.O9Yx() >>> 0
    }

    function bz() {
      let zz, tz;
      try {
        const sz = kz.hvT8();
        return zz = sz[0], tz = sz[1], mz(sz[0], sz[1])
      } finally {
        kz.WK2r(zz, tz, 1)
      }
    }

    function wz(zz, tz) {
      let sz, Fz;
      try {
        const Oz = cz(zz, kz.KDpz),
          oz = iz,
          vz = Tz(tz, kz.KDpz),
          Uz = iz,
          Kz = kz.tH3x(Oz, oz, vz, Uz);
        var Wz = Kz[0],
          Xz = Kz[1];
        if (Kz[3]) throw Wz = 0, Xz = 0, jz(Kz[2]);
        return sz = Wz, Fz = Xz, mz(Wz, Xz)
      } finally {
        kz.WK2r(sz, Fz, 1)
      }
    }

    function Dz(zz) {
      let tz, sz;
      try {
        const Xz = kz.NGZa(Bz(zz));
        var Fz = Xz[0],
          Wz = Xz[1];
        if (Xz[3]) throw Fz = 0, Wz = 0, jz(Xz[2]);
        return tz = Fz, sz = Wz, mz(Fz, Wz)
      } finally {
        kz.WK2r(tz, sz, 1)
      }
    }

    function gz() {
      return {
        __proto__: null,
        QZtA: {
          __proto__: null,
          f7QJ: function(zz, tz) {
            return Bz(Error(mz(zz, tz)))
          },
          S5RE: function(zz) {
            return null === ez(zz)
          },
          N1uQ: function(zz) {
            return "string" === typeof ez(zz)
          },
          AWgT: function(zz, tz) {
            const sz = ez(tz),
              Fz = "string" === typeof sz ? sz : void 0;
            var Wz, Xz = void 0 === (Wz = Fz) || null === Wz ? 0 : function(zz, tz, sz) {
                if (void 0 === sz) {
                  const sz = dz.encode(zz),
                    Fz = tz(sz.length, 1) >>> 0;
                  return Cz().subarray(Fz, Fz + sz.length).set(sz), iz = sz.length, Fz
                }
                let Fz = zz.length,
                  Wz = tz(Fz, 1) >>> 0;
                const Xz = Cz();
                let Oz = 0;
                for (; Oz < Fz; Oz++) {
                  const tz = zz.charCodeAt(Oz);
                  if (tz > 127) break;
                  Xz[Wz + Oz] = tz
                }
                if (Oz !== Fz) {
                  0 !== Oz && (zz = zz.slice(Oz)), Wz = sz(Wz, Fz, Fz = Oz + 3 * zz.length, 1) >>> 0;
                  const tz = Cz().subarray(Wz + Oz, Wz + Fz);
                  Oz += dz.encodeInto(zz, tz).written, Wz = sz(Wz, Fz, Oz, 1) >>> 0
                }
                return iz = Oz, Wz
              }(Fz, kz.KDpz, kz.JXlH),
              Oz = iz;
            xz().setInt32(zz + 4, Oz, !0), xz().setInt32(zz + 0, Xz, !0)
          },
          jCsu: function(zz, tz) {
            throw new Error(mz(zz, tz))
          },
          AQTW: function(zz, tz) {
            return ez(zz).charCodeAt(tz >>> 0)
          },
          TlsP: function(zz, tz) {
            console.error(mz(zz, tz))
          },
          oLxh: function(zz) {
            return ez(zz).length
          },
          kNsx: function(zz, tz) {
            return Bz(mz(zz, tz))
          },
          itXW: function(zz) {
            jz(zz)
          }
        }
      }
    }
    Symbol.dispose && (Wz.prototype[Symbol.dispose] = Wz.prototype.free);
    const Hz = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((zz => kz.yWf3(zz, 1)));

    function Bz(zz) {
      Gz === Zz.length && Zz.push(Zz.length + 1);
      const tz = Gz;
      return Gz = Zz[tz], Zz[tz] = zz, tz
    }

    function Pz(zz, tz) {
      zz >>>= 0;
      const sz = xz(),
        Fz = [];
      for (let Wz = zz; Wz < zz + 4 * tz; Wz += 4) Fz.push(jz(sz.getUint32(Wz, !0)));
      return Fz
    }

    function rz(zz, tz) {
      return zz >>>= 0, Cz().subarray(zz / 1, zz / 1 + tz)
    }
    let Yz = null;

    function xz() {
      return (null === Yz || !0 === Yz.buffer.detached || void 0 === Yz.buffer.detached && Yz.buffer !== kz.memory.buffer) && (Yz = new DataView(kz.memory.buffer)), Yz
    }

    function mz(zz, tz) {
      return function(zz, tz) {
        Mz += tz, Mz >= yz && (Az = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Az.decode(), Mz = tz);
        return Az.decode(Cz().subarray(zz, zz + tz))
      }(zz >>> 0, tz)
    }
    let Jz = null;
    let Iz = null;

    function Cz() {
      return null !== Iz && 0 !== Iz.byteLength || (Iz = new Uint8Array(kz.memory.buffer)), Iz
    }

    function ez(zz) {
      return Zz[zz]
    }
    let Zz = new Array(1024).fill(void 0);
    Zz.push(void 0, null, !0, !1);
    let Gz = Zz.length;

    function Tz(zz, tz) {
      const sz = tz(4 * zz.length, 4) >>> 0;
      return (null !== Jz && 0 !== Jz.byteLength || (Jz = new Uint32Array(kz.memory.buffer)), Jz).set(zz, sz / 4), iz = zz.length, sz
    }

    function cz(zz, tz) {
      const sz = tz(4 * zz.length, 4) >>> 0,
        Fz = xz();
      for (let Wz = 0; Wz < zz.length; Wz++) Fz.setUint32(sz + 4 * Wz, Bz(zz[Wz]), !0);
      return iz = zz.length, sz
    }

    function jz(zz) {
      const tz = ez(zz);
      return function(zz) {
        zz < 1028 || (Zz[zz] = Gz, Gz = zz)
      }(zz), tz
    }
    let Az = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Az.decode();
    const yz = 2146435072;
    let Mz = 0;
    const dz = new TextEncoder;
    "encodeInto" in dz || (dz.encodeInto = function(zz, tz) {
      const sz = dz.encode(zz);
      return tz.set(sz), {
        read: zz.length,
        written: sz.length
      }
    });
    let hz, Qz, kz, iz = 0;

    function Lz(zz, tz) {
      return Qz = zz, kz = zz.exports, hz = tz, Yz = null, Jz = null, Iz = null, kz.Tmk5(), kz
    }

    function lz(zz) {
      if (void 0 !== kz) return kz;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module: zz
      } = zz) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const tz = gz();
      zz instanceof WebAssembly.Module || (zz = new WebAssembly.Module(zz));
      return Lz(new WebAssembly.Instance(zz, tz), zz)
    }
    async function nz(zz) {
      if (void 0 !== kz) return kz;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module_or_path: zz
      } = zz) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const tz = gz();
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
      return Lz(sz, Fz)
    }
    var az = sz(3378),
      qz = sz(6196);
    class Sz extends Error {
      stage;
      constructor(zz, tz) {
        super((0, az.D)(zz, tz), {
          cause: tz
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = zz
      }
    }
    let Vz = null,
      Rz = null;

    function pz() {
      return Vz ? Promise.resolve(Vz) : (Rz || (Rz = async function() {
        let zz;
        try {
          zz = await (0, az.E)(new sz.U(sz(6202)), (0, qz.d)("bloxd_wasm_shader_pack"))
        } catch (tz) {
          throw new Sz((0, az.K)(tz), tz)
        }
        try {
          await nz({
            module_or_path: zz
          })
        } catch (tz) {
          throw new Sz("instantiate", tz)
        }
        return Vz = Fz, Vz
      }(), Rz.then(void 0, (() => {
        Rz = null
      }))), Rz)
    }
    var fz = sz(6215);

    function Ez(zz) {
      let [tz, sz, Fz, Wz] = zz;
      const Xz = {
        file: tz,
        line: sz,
        message: Fz
      };
      return Wz && (Xz.variants = Wz.map(fz.o)), Xz
    }

    function zt(zz) {
      return JSON.parse(zz).map(Ez)
    }

    function tt(zz, tz) {
      if (!Number.isInteger(zz) || zz < 0 || zz > 4294967295) throw new Error(`${tz} ${zz} is not a whole number from 0 to 4294967295`);
      return zz
    }

    function st(zz) {
      return [zz.named.map((zz => zz.name)), Uint32Array.from(zz.named, (zz => tt(zz.id, "Texture ID")))]
    }
    const Ft = new WeakMap;
    const Wt = new WeakMap,
      Xt = new WeakSet;

    function Ot(zz, tz) {
      if (Xt.has(zz)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return tz()
      } catch (sz) {
        throw sz instanceof WebAssembly.RuntimeError && Xt.add(zz), sz
      }
    }

    function ot(zz) {
      let tz = Wt.get(zz);
      if (!tz) {
        let sz, Fz;
        tz = {
          k_: (tz, sz) => Ot(zz, (() => function(zz, tz, sz) {
            const Fz = zz.k_(tz.map((zz => zz.path)), tz.map((zz => zz.source)), ...st(sz), sz.aliases.map((zz => zz.name)), sz.aliases.map((zz => zz.texture)), sz.aliases.map((zz => zz.kind)));
            let Wz = !1;
            try {
              const zz = Fz.validationModuleCodes,
                tz = Array.from(Fz.validationModuleKeys, ((tz, sz) => ({
                  key: (0, fz.o)(tz),
                  code: zz[sz]
                }))),
                sz = {
                  errors: zt(Fz.errorsJson),
                  offInStrict: zt(Fz.offInStrictJson),
                  variants: (0, fz.g)(Fz),
                  validationModules: tz,
                  features: Fz.features
                };
              return tz.forEach(((zz, tz) => {
                Ft.set(zz, {
                  pack: Fz,
                  index: tz
                })
              })), Wz = tz.length > 0, sz
            } finally {
              Wz || Fz.free()
            }
          }(zz, tz, sz))),
          mapValidationMessage: (tz, sz) => {
            const Fz = Ft.get(tz);
            if (!Fz) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return Ez(JSON.parse(Ot(zz, (() => Fz.pack.mapValidationMessage(Fz.index, sz.lineNum, sz.linePos, sz.message, sz.type)))))
          },
          msz: tz => Ot(zz, (() => function(zz, tz) {
            const sz = new Int32Array(tz.length),
              Fz = [];
            return tz.forEach(((zz, tz) => {
              sz[tz] = zz.variants ? zz.variants.length : -1;
              for (const sz of zz.variants ?? []) Fz.push((0, fz.k)(sz))
            })), zt(zz.msz(tz.map((zz => zz.file)), Uint32Array.from(tz, (zz => tt(zz.line, "Diagnostic line"))), tz.map((zz => zz.message)), sz, Uint8Array.from(Fz)))
          }(zz, tz))),
          dJ: tz => Ot(zz, (() => zz.dJ(...st(tz)))),
          get SHADER_PACK_HEADER_VERSION() {
            return sz ??= Ot(zz, (() => zz.nFz())), sz
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return Fz ??= Ot(zz, (() => {
              const tz = zz.iFz();
              return zz.kFz().map(((zz, sz) => ({
                path: zz,
                source: tz[sz]
              })))
            })), Fz
          },
          aFz: tz => Ot(zz, (() => zz.aFz(tz))),
          resolveHeader: tz => Ot(zz, (() => zz.lFz((0, fz.k)(tz)))),
          LFz: () => Ot(zz, (() => zz.LFz()))
        }, Wt.set(zz, tz)
      }
      return tz
    }
    var vt = sz(2935),
      Ut = sz(6211);
    const Kt = "bloxdShaderPackWasmFailureReported";
    let ut = null;

    function Nt() {
      return ut ??= async function() {
        if ("undefined" === typeof WebAssembly) return bt("unsupported", "This browser has no WebAssembly"), null;
        const zz = (0, Ut.loadShaderPackTextures)().then((() => !0), (zz => (console.error("Could not load the shader pack textures, so shader packs can't run", zz), !1)));
        try {
          const tz = await async function() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pz;
            return ot(await zz())
          }();
          return await zz ? tz : null
        } catch (tz) {
          const zz = tz instanceof Error ? tz.message : String(tz);
          return bt(vt.e[tz instanceof Sz ? tz.stage : "instantiate"], zz), null
        }
      }(), ut
    }

    function bt(zz, tz) {
      (0, vt.i)(Kt, `Shader pack wasm ${zz}, so shader packs can't run: ${tz}`, tz, `shader_pack_${zz}`)
    }
  },
  6202: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/bloxd_wasm_shader_pack_bg.fca63d2192d5ade7f488.wasm"
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
  6215: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => rz,
      g: () => Yz,
      k: () => Bz,
      o: () => Hz
    });
    var Fz = sz(6221);
    const Wz = 6,
      Xz = 3,
      Oz = 1,
      oz = 2,
      vz = 4,
      Uz = 8,
      Kz = 16,
      uz = 32,
      Nz = 64,
      bz = 128,
      wz = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Dz(zz) {
      if (!zz) return 0;
      const tz = wz.indexOf(zz);
      if (tz <= 0) throw new Error(`"${zz}" is not a shader pack hook function`);
      return tz
    }

    function gz(zz) {
      if (0 === zz) return null;
      const tz = wz[zz];
      if (void 0 === tz) throw new Error(`${zz} is not a shader pack hook function id`);
      return tz
    }

    function Hz(zz) {
      const tz = Fz.c.length;
      return {
        strict: zz >= tz,
        program: Fz.c[zz % tz]
      }
    }

    function Bz(zz) {
      return Number(zz.strict) * Fz.c.length + Fz.c.indexOf(zz.program)
    }

    function Pz(zz) {
      return "" === zz ? [] : zz.split(" ")
    }

    function rz(zz) {
      const tz = {
        variantFlags: new Uint8Array(Wz),
        hooks: new Uint8Array(Wz * Xz),
        moduleCodes: Array(Wz).fill(""),
        reads: Array(2 * Wz).fill("")
      };
      for (const sz of zz) {
        const zz = Bz(sz.key),
          Fz = (zz, tz) => null === sz.hooks.surface || sz.reads.fragment.includes(zz) ? 0 : tz;
        tz.variantFlags[zz] = (sz.sceneDepth ? Oz : 0) | (sz.movesVertices ? oz : 0) | (sz.sunShadow ? vz : 0) | (sz.airShadow ? Uz : 0) | (sz.discards ? Kz : 0) | Fz("localPosition", uz) | Fz("enchantSpeed", Nz) | Fz("enchantTier", bz), tz.hooks[zz * Xz] = Dz(sz.hooks.vertex), tz.hooks[zz * Xz + 1] = Dz(sz.hooks.surface), tz.hooks[zz * Xz + 2] = Dz(sz.hooks.light), tz.moduleCodes[zz] = sz.moduleCode, tz.reads[2 * zz] = sz.reads.vertex.join(" "), tz.reads[2 * zz + 1] = sz.reads.fragment.join(" ")
      }
      return tz
    }

    function Yz(zz) {
      const {
        hooks: tz,
        moduleCodes: sz,
        reads: Fz
      } = zz;
      return Array.from(zz.variantFlags, ((zz, Wz) => {
        const uz = Wz * Xz;
        return {
          key: Hz(Wz),
          hooks: {
            vertex: gz(tz[uz]),
            surface: gz(tz[uz + 1]),
            light: gz(tz[uz + 2])
          },
          moduleCode: sz[Wz],
          sceneDepth: 0 !== (zz & Oz),
          sunShadow: 0 !== (zz & vz),
          airShadow: 0 !== (zz & Uz),
          movesVertices: 0 !== (zz & oz),
          discards: 0 !== (zz & Kz),
          reads: {
            vertex: Pz(Fz[2 * Wz]),
            fragment: Pz(Fz[2 * Wz + 1])
          }
        }
      }))
    }
  },
  6221: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      g: () => Oz,
      k: () => oz,
      l: () => Wz,
      o: () => Xz
    });
    const Fz = ["terrain", "liquid", "model"];

    function Wz() {
      const zz = [];
      for (const tz of [!1, !0])
        for (const sz of Fz) zz.push({
          strict: tz,
          program: sz
        });
      return zz
    }

    function Xz(zz) {
      return `${zz.strict?"strict":"allow"}.${zz.program}`
    }

    function Oz(zz) {
      return !zz.hooks.vertex && !zz.hooks.surface && !zz.hooks.light
    }

    function oz(zz, tz) {
      return "off" !== tz && (null === zz || zz.some((zz => zz.key.strict === ("strict" === tz) && !Oz(zz))))
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);