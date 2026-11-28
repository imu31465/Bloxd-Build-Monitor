export const id = 157;
export const ids = [157];
export const modules = {
  7566: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      loadPageShaderPackCompiler: () => HO
    });
    var Wd = {};
    md.r(Wd), md.d(Wd, {
      MRd: () => Fd,
      HOd: () => Rd,
      default: () => Id,
      dXd: () => Xd,
      OXd: () => Kd,
      initSync: () => ed,
      Vt: () => hd,
      HFd: () => vd,
      mXd: () => Qd,
      WXd: () => td,
      yV: () => od,
      FXd: () => Nd,
      HV: () => qd,
      RXd: () => Hd
    });
    class Fd {
      static __wrap(dd) {
        const Od = Object.create(Fd.prototype);
        return Od.__wbg_ptr = dd, bd.register(Od, Od.__wbg_ptr, Od), Od
      }
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, bd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        cd.sA7c(dd, 0)
      }
      get XXd() {
        let dd, Od;
        try {
          const md = cd.d9bT(this.__wbg_ptr);
          return dd = md[0], Od = md[1], Ed(md[0], md[1])
        } finally {
          cd.ceuD(dd, Od, 1)
        }
      }
      get features() {
        const dd = cd.Gmu1(this.__wbg_ptr);
        var Od = pd(dd[0], dd[1]);
        return cd.ceuD(dd[0], 4 * dd[1], 4), Od
      }
      get hooks() {
        const dd = cd.g4LI(this.__wbg_ptr);
        var Od = Yd(dd[0], dd[1]).slice();
        return cd.ceuD(dd[0], 1 * dd[1], 1), Od
      }
      mapValidationMessage(dd, Od, md, Wd, Fd) {
        let Rd, Xd;
        try {
          const vd = cd.fMUP(this.__wbg_ptr, dd, Od, md, Td(Wd), Td(Fd));
          var Kd = vd[0],
            hd = vd[1];
          if (vd[3]) throw Kd = 0, hd = 0, Ad(vd[2]);
          return Rd = Kd, Xd = hd, Ed(Kd, hd)
        } finally {
          cd.ceuD(Rd, Xd, 1)
        }
      }
      get moduleCodes() {
        const dd = cd.iztn(this.__wbg_ptr);
        var Od = pd(dd[0], dd[1]);
        return cd.ceuD(dd[0], 4 * dd[1], 4), Od
      }
      get KXd() {
        let dd, Od;
        try {
          const md = cd.H1YW(this.__wbg_ptr);
          return dd = md[0], Od = md[1], Ed(md[0], md[1])
        } finally {
          cd.ceuD(dd, Od, 1)
        }
      }
      get reads() {
        const dd = cd.VM1V(this.__wbg_ptr);
        var Od = pd(dd[0], dd[1]);
        return cd.ceuD(dd[0], 4 * dd[1], 4), Od
      }
      get validationModuleCodes() {
        const dd = cd.ssOQ(this.__wbg_ptr);
        var Od = pd(dd[0], dd[1]);
        return cd.ceuD(dd[0], 4 * dd[1], 4), Od
      }
      get validationModuleKeys() {
        const dd = cd.xB85(this.__wbg_ptr);
        var Od = Yd(dd[0], dd[1]).slice();
        return cd.ceuD(dd[0], 1 * dd[1], 1), Od
      }
      get variantFlags() {
        const dd = cd.ZIIw(this.__wbg_ptr);
        var Od = Yd(dd[0], dd[1]).slice();
        return cd.ceuD(dd[0], 1 * dd[1], 1), Od
      }
    }

    function Rd(dd, Od, md, Wd, Rd, Xd, Kd) {
      const hd = Vd(dd, cd.HSG3),
        vd = jd,
        Qd = Vd(Od, cd.HSG3),
        td = jd,
        od = Vd(md, cd.HSG3),
        Nd = jd,
        qd = ud(Wd, cd.HSG3),
        Hd = jd,
        yd = Vd(Rd, cd.HSG3),
        bd = jd,
        Td = Vd(Xd, cd.HSG3),
        pd = jd,
        Yd = Vd(Kd, cd.HSG3),
        gd = jd,
        wd = cd.RkN0(hd, vd, Qd, td, od, Nd, qd, Hd, yd, bd, Td, pd, Yd, gd);
      if (wd[2]) throw Ad(wd[1]);
      return Fd.__wrap(wd[0])
    }

    function Xd() {
      const dd = cd.kcec();
      var Od = pd(dd[0], dd[1]);
      return cd.ceuD(dd[0], 4 * dd[1], 4), Od
    }

    function Kd() {
      const dd = cd.cOAY();
      var Od = pd(dd[0], dd[1]);
      return cd.ceuD(dd[0], 4 * dd[1], 4), Od
    }

    function hd() {
      cd.B8rk()
    }

    function vd(dd, Od, md, Wd, Fd) {
      let Rd, Xd;
      try {
        const vd = Vd(dd, cd.HSG3),
          Qd = jd,
          td = ud(Od, cd.HSG3),
          od = jd,
          Nd = Vd(md, cd.HSG3),
          qd = jd,
          Hd = ud(Wd, cd.HSG3),
          yd = jd,
          bd = function(dd, Od) {
            const md = Od(1 * dd.length, 1) >>> 0;
            return xd().set(dd, md / 1), jd = dd.length, md
          }(Fd, cd.HSG3),
          Td = jd,
          pd = cd.Gh2H(vd, Qd, td, od, Nd, qd, Hd, yd, bd, Td);
        var Kd = pd[0],
          hd = pd[1];
        if (pd[3]) throw Kd = 0, hd = 0, Ad(pd[2]);
        return Rd = Kd, Xd = hd, Ed(Kd, hd)
      } finally {
        cd.ceuD(Rd, Xd, 1)
      }
    }

    function Qd() {
      let dd, Od;
      try {
        const md = cd.lvQg();
        return dd = md[0], Od = md[1], Ed(md[0], md[1])
      } finally {
        cd.ceuD(dd, Od, 1)
      }
    }

    function td(dd) {
      let Od, md;
      try {
        const Rd = cd.P9LX(dd);
        var Wd = Rd[0],
          Fd = Rd[1];
        if (Rd[3]) throw Wd = 0, Fd = 0, Ad(Rd[2]);
        return Od = Wd, md = Fd, Ed(Wd, Fd)
      } finally {
        cd.ceuD(Od, md, 1)
      }
    }

    function od() {
      return cd.UdBK() >>> 0
    }

    function Nd() {
      let dd, Od;
      try {
        const md = cd.yyt8();
        return dd = md[0], Od = md[1], Ed(md[0], md[1])
      } finally {
        cd.ceuD(dd, Od, 1)
      }
    }

    function qd(dd, Od) {
      let md, Wd;
      try {
        const Xd = Vd(dd, cd.HSG3),
          Kd = jd,
          hd = ud(Od, cd.HSG3),
          vd = jd,
          Qd = cd.N19D(Xd, Kd, hd, vd);
        var Fd = Qd[0],
          Rd = Qd[1];
        if (Qd[3]) throw Fd = 0, Rd = 0, Ad(Qd[2]);
        return md = Fd, Wd = Rd, Ed(Fd, Rd)
      } finally {
        cd.ceuD(md, Wd, 1)
      }
    }

    function Hd(dd) {
      let Od, md;
      try {
        const Rd = cd.Zdm3(Td(dd));
        var Wd = Rd[0],
          Fd = Rd[1];
        if (Rd[3]) throw Wd = 0, Fd = 0, Ad(Rd[2]);
        return Od = Wd, md = Fd, Ed(Wd, Fd)
      } finally {
        cd.ceuD(Od, md, 1)
      }
    }

    function yd() {
      return {
        __proto__: null,
        Rqac: {
          __proto__: null,
          DfkE: function(dd, Od) {
            return Td(Error(Ed(dd, Od)))
          },
          AtvY: function(dd) {
            return null === Bd(dd)
          },
          Qfze: function(dd) {
            return "string" === typeof Bd(dd)
          },
          Ww2K: function(dd, Od) {
            const md = Bd(Od),
              Wd = "string" === typeof md ? md : void 0;
            var Fd, Rd = void 0 === (Fd = Wd) || null === Fd ? 0 : function(dd, Od, md) {
                if (void 0 === md) {
                  const md = Ld.encode(dd),
                    Wd = Od(md.length, 1) >>> 0;
                  return xd().subarray(Wd, Wd + md.length).set(md), jd = md.length, Wd
                }
                let Wd = dd.length,
                  Fd = Od(Wd, 1) >>> 0;
                const Rd = xd();
                let Xd = 0;
                for (; Xd < Wd; Xd++) {
                  const Od = dd.charCodeAt(Xd);
                  if (Od > 127) break;
                  Rd[Fd + Xd] = Od
                }
                if (Xd !== Wd) {
                  0 !== Xd && (dd = dd.slice(Xd)), Fd = md(Fd, Wd, Wd = Xd + 3 * dd.length, 1) >>> 0;
                  const Od = xd().subarray(Fd + Xd, Fd + Wd);
                  Xd += Ld.encodeInto(dd, Od).written, Fd = md(Fd, Wd, Xd, 1) >>> 0
                }
                return jd = Xd, Fd
              }(Wd, cd.HSG3, cd.INIw),
              Xd = jd;
            wd().setInt32(dd + 4, Xd, !0), wd().setInt32(dd + 0, Rd, !0)
          },
          Ngez: function(dd, Od) {
            throw new Error(Ed(dd, Od))
          },
          atO5: function(dd, Od) {
            return Bd(dd).charCodeAt(Od >>> 0)
          },
          fxj2: function(dd, Od) {
            console.error(Ed(dd, Od))
          },
          F3OH: function(dd) {
            return Bd(dd).length
          },
          VFMg: function(dd, Od) {
            return Td(Ed(dd, Od))
          },
          aDdL: function(dd) {
            Ad(dd)
          }
        }
      }
    }
    Symbol.dispose && (Fd.prototype[Symbol.dispose] = Fd.prototype.free);
    const bd = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((dd => cd.sA7c(dd, 1)));

    function Td(dd) {
      sd === Sd.length && Sd.push(Sd.length + 1);
      const Od = sd;
      return sd = Sd[Od], Sd[Od] = dd, Od
    }

    function pd(dd, Od) {
      dd >>>= 0;
      const md = wd(),
        Wd = [];
      for (let Fd = dd; Fd < dd + 4 * Od; Fd += 4) Wd.push(Ad(md.getUint32(Fd, !0)));
      return Wd
    }

    function Yd(dd, Od) {
      return dd >>>= 0, xd().subarray(dd / 1, dd / 1 + Od)
    }
    let gd = null;

    function wd() {
      return null !== gd && gd.buffer === cd.memory.buffer || (gd = new DataView(cd.memory.buffer)), gd
    }

    function Ed(dd, Od) {
      return function(dd, Od) {
        nd += Od, nd >= Gd && (rd = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), rd.decode(), nd = Od);
        return rd.decode(xd().subarray(dd, dd + Od))
      }(dd >>> 0, Od)
    }
    let Jd = null;
    let Ud = null;

    function xd() {
      return null !== Ud && 0 !== Ud.byteLength || (Ud = new Uint8Array(cd.memory.buffer)), Ud
    }

    function Bd(dd) {
      return Sd[dd]
    }
    let Sd = new Array(1024).fill(void 0);
    Sd.push(void 0, null, !0, !1);
    let sd = Sd.length;

    function ud(dd, Od) {
      const md = Od(4 * dd.length, 4) >>> 0;
      return (null !== Jd && 0 !== Jd.byteLength || (Jd = new Uint32Array(cd.memory.buffer)), Jd).set(dd, md / 4), jd = dd.length, md
    }

    function Vd(dd, Od) {
      const md = Od(4 * dd.length, 4) >>> 0,
        Wd = wd();
      for (let Fd = 0; Fd < dd.length; Fd++) Wd.setUint32(md + 4 * Fd, Td(dd[Fd]), !0);
      return jd = dd.length, md
    }

    function Ad(dd) {
      const Od = Bd(dd);
      return function(dd) {
        dd < 1028 || (Sd[dd] = sd, sd = dd)
      }(dd), Od
    }
    let rd = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    rd.decode();
    const Gd = 2146435072;
    let nd = 0;
    const Ld = new TextEncoder;
    "encodeInto" in Ld || (Ld.encodeInto = function(dd, Od) {
      const md = Ld.encode(dd);
      return Od.set(md), {
        read: dd.length,
        written: md.length
      }
    });
    let Pd, zd, cd, jd = 0;

    function Dd(dd, Od) {
      return zd = dd, cd = dd.exports, Pd = Od, gd = null, Jd = null, Ud = null, cd.fnh7(), cd
    }

    function ed(dd) {
      if (void 0 !== cd) return cd;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module: dd
      } = dd) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Od = yd();
      dd instanceof WebAssembly.Module || (dd = new WebAssembly.Module(dd));
      return Dd(new WebAssembly.Instance(dd, Od), dd)
    }
    async function Id(dd) {
      if (void 0 !== cd) return cd;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module_or_path: dd
      } = dd) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Od = yd();
      ("string" === typeof dd || "function" === typeof Request && dd instanceof Request || "function" === typeof URL && dd instanceof URL) && (dd = fetch(dd));
      const {
        instance: md,
        module: Wd
      } = await async function(dd, Od) {
        if ("function" === typeof Response && dd instanceof Response) {
          if (!dd.ok) throw new Error(`failed to fetch Wasm: ${dd.status} ${dd.statusText} fetching '${dd.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(dd, Od)
          } catch (md) {
            if (! function(dd) {
                switch (dd) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(dd.type) || "application/wasm" === dd.headers.get("Content-Type")) throw md;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", md)
          }
          const Wd = await dd.arrayBuffer();
          return await WebAssembly.instantiate(Wd, Od)
        } {
          const md = await WebAssembly.instantiate(dd, Od);
          return md instanceof WebAssembly.Instance ? {
            instance: md,
            module: dd
          } : md
        }
      }(await dd, Od);
      return Dd(md, Wd)
    }
    var ld = md(2425),
      Cd = md(7573);
    class Zd extends Error {
      stage;
      constructor(dd, Od) {
        super((0, ld.C)(dd, Od), {
          cause: Od
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = dd
      }
    }
    let kd = null,
      fd = null;

    function Md() {
      return kd ? Promise.resolve(kd) : (fd || (fd = async function() {
        let dd;
        try {
          dd = await (0, ld.F)(new md.U(md(7579)), (0, Cd.b)("bloxd_wasm_shader_pack"))
        } catch (Od) {
          throw new Zd((0, ld.L)(Od), Od)
        }
        try {
          await Id({
            module_or_path: dd
          })
        } catch (Od) {
          throw new Zd("instantiate", Od)
        }
        return kd = Wd, kd
      }(), fd.then(void 0, (() => {
        fd = null
      }))), fd)
    }
    var dO = md(7586);

    function OO(dd) {
      let [Od, md, Wd, Fd] = dd;
      const Rd = {
        file: Od,
        line: md,
        message: Wd
      };
      return Fd && (Rd.variants = Fd.map(dO.j)), Rd
    }

    function mO(dd) {
      return JSON.parse(dd).map(OO)
    }

    function WO(dd, Od) {
      if (!Number.isInteger(dd) || dd < 0 || dd > 4294967295) throw new Error(`${Od} ${dd} is not a whole number from 0 to 4294967295`);
      return dd
    }

    function FO(dd) {
      return [dd.named.map((dd => dd.name)), Uint32Array.from(dd.named, (dd => WO(dd.id, "Texture ID")))]
    }
    const RO = new WeakMap;
    const XO = new WeakMap,
      KO = new WeakSet;

    function hO(dd, Od) {
      if (KO.has(dd)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return Od()
      } catch (md) {
        throw md instanceof WebAssembly.RuntimeError && KO.add(dd), md
      }
    }

    function vO(dd) {
      let Od = XO.get(dd);
      if (!Od) {
        let md, Wd;
        Od = {
          HOd: (Od, md) => hO(dd, (() => function(dd, Od, md) {
            const Wd = dd.HOd(Od.map((dd => dd.path)), Od.map((dd => dd.source)), ...FO(md), md.aliases.map((dd => dd.name)), md.aliases.map((dd => dd.texture)), md.aliases.map((dd => dd.kind)));
            let Fd = !1;
            try {
              const dd = Wd.validationModuleCodes,
                Od = Array.from(Wd.validationModuleKeys, ((Od, md) => ({
                  key: (0, dO.j)(Od),
                  code: dd[md]
                }))),
                md = {
                  errors: mO(Wd.XXd),
                  offInStrict: mO(Wd.KXd),
                  variants: (0, dO.f)(Wd),
                  validationModules: Od,
                  features: Wd.features
                };
              return Od.forEach(((dd, Od) => {
                RO.set(dd, {
                  pack: Wd,
                  index: Od
                })
              })), Fd = Od.length > 0, md
            } finally {
              Fd || Wd.free()
            }
          }(dd, Od, md))),
          mapValidationMessage: (Od, md) => {
            const Wd = RO.get(Od);
            if (!Wd) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return OO(JSON.parse(hO(dd, (() => Wd.pack.mapValidationMessage(Wd.index, md.lineNum, md.linePos, md.message, md.type)))))
          },
          HFd: Od => hO(dd, (() => function(dd, Od) {
            const md = new Int32Array(Od.length),
              Wd = [];
            return Od.forEach(((dd, Od) => {
              md[Od] = dd.variants ? dd.variants.length : -1;
              for (const md of dd.variants ?? []) Wd.push((0, dO.g)(md))
            })), mO(dd.HFd(Od.map((dd => dd.file)), Uint32Array.from(Od, (dd => WO(dd.line, "Diagnostic line"))), Od.map((dd => dd.message)), md, Uint8Array.from(Wd)))
          }(dd, Od))),
          HV: Od => hO(dd, (() => dd.HV(...FO(Od)))),
          get SHADER_PACK_HEADER_VERSION() {
            return md ??= hO(dd, (() => dd.FXd())), md
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return Wd ??= hO(dd, (() => {
              const Od = dd.OXd();
              return dd.dXd().map(((dd, md) => ({
                path: dd,
                source: Od[md]
              })))
            })), Wd
          },
          RXd: Od => hO(dd, (() => dd.RXd(Od))),
          resolveHeader: Od => hO(dd, (() => dd.WXd((0, dO.g)(Od)))),
          mXd: () => hO(dd, (() => dd.mXd()))
        }, XO.set(dd, Od)
      }
      return Od
    }
    var QO = md(4440),
      tO = md(364),
      oO = md(7583);
    const NO = "bloxdShaderPackWasmFailureReported";
    let qO = null;

    function HO() {
      return qO ??= async function() {
        if ("undefined" === typeof WebAssembly) return yO("unsupported", "This browser has no WebAssembly"), null;
        const dd = (0, oO.loadShaderPackTextures)().then((() => !0), (dd => (console.error("Could not load the shader pack textures, so shader packs can't run", dd), !1)));
        try {
          await (0, tO.p)();
          const Od = await async function() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Md;
            return vO(await dd())
          }();
          return await dd ? Od : null
        } catch (Od) {
          const dd = Od instanceof Error ? Od.message : String(Od);
          return yO(QO.e[Od instanceof Zd ? Od.stage : "instantiate"], dd), null
        }
      }(), qO
    }

    function yO(dd, Od) {
      (0, QO.j)(NO, `Shader pack wasm ${dd}, so shader packs can't run: ${Od}`, Od, `shader_pack_${dd}`)
    }
  },
  7579: (dd, Od, md) => {
    dd.exports = md.p + "static/media/bloxd_wasm_shader_pack_bg.531414ffe21363b90130.wasm"
  },
  7573: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    var Wd = md(2425);
    const Fd = {
      bloxd_wasm: () => "39543e4ba6a42e25a6e9bcb2e34f530578c4ebc01c5184958515a8ca76d6b0a5",
      bloxd_wasm_client: () => "b20a5dcdeba23853bd4aefb57c26d920dc0384ea18796517bc3a29925c6ad1c2",
      bloxd_wasm_workers: () => "fffff5148e36b0bbe9b1ac57b88354ed0a2be82b12546b685c54f8d890ba1c25",
      bloxd_wasm_models: () => "fea8372a66374bbfe5d995df968eb0d6e1d729788522378129be977ab279b0f5",
      bloxd_wasm_webgpu: () => "d81a74bd0196aa7197896faff29d91d6cd561d3ccf553f86e40533cf05f94d54",
      bloxd_wasm_webgl: () => "c6b230e8190fad497320f1c2b3194c840fc84e84d2930037ce26bc2f7ffa73df",
      bloxd_wasm_webgl1: () => "53a0d02bf121cebe98d2e57ee9aff001fef877975331d07c3144e6a509444da7",
      bloxd_wasm_replay: () => "6fdc64e1f63d992be19559282023d659e1e193da38e2253f4b228bb2cf163a79",
      bloxd_wasm_recorder: () => "6c20921e31a8867aca13baae406b57fd8365b0ce30ef2ea114524fe3b407a11b",
      bloxd_wasm_anim: () => "40ced071a7948ecc9a2ebcc6399db3dd2db0b6c806b64d60ae581d410556b61e",
      bloxd_wasm_textures: () => "7d3511b9add4c1e220dc305c472d29d9de6a5e5dc0d699b160381f10cb169ea5",
      bloxd_wasm_shader_pack: () => "c6afc4ff72171aa4edf7f5ee6a093af43505cb0aad9dabc79f64bdf94eadada3"
    };
    var Rd = md(5426);

    function Xd(dd) {
      const Od = Object.prototype.hasOwnProperty.call(Fd, dd) ? Fd[dd]() : void 0;
      if (void 0 !== Od) return {
        sha256: Od,
        onMismatch: Rd.v
      };
      throw new Wd.h(`${dd} has no release digest, so this build refuses it`)
    }
  },
  7586: (dd, Od, md) => {
    md.d(Od, {
      e: () => Yd,
      f: () => gd,
      g: () => Td,
      j: () => bd
    });
    var Wd = md(7592);
    const Fd = 6,
      Rd = 3,
      Xd = 1,
      Kd = 2,
      hd = 4,
      vd = 8,
      Qd = 16,
      td = 32,
      od = 64,
      Nd = 128,
      qd = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Hd(dd) {
      if (!dd) return 0;
      const Od = qd.indexOf(dd);
      if (Od <= 0) throw new Error(`"${dd}" is not a shader pack hook function`);
      return Od
    }

    function yd(dd) {
      if (0 === dd) return null;
      const Od = qd[dd];
      if (void 0 === Od) throw new Error(`${dd} is not a shader pack hook function id`);
      return Od
    }

    function bd(dd) {
      const Od = Wd.c.length;
      return {
        strict: dd >= Od,
        program: Wd.c[dd % Od]
      }
    }

    function Td(dd) {
      return Number(dd.strict) * Wd.c.length + Wd.c.indexOf(dd.program)
    }

    function pd(dd) {
      return "" === dd ? [] : dd.split(" ")
    }

    function Yd(dd) {
      const Od = {
        variantFlags: new Uint8Array(Fd),
        hooks: new Uint8Array(Fd * Rd),
        moduleCodes: Array(Fd).fill(""),
        reads: Array(2 * Fd).fill("")
      };
      for (const md of dd) {
        const dd = Td(md.key),
          Wd = (dd, Od) => null === md.hooks.surface || md.reads.fragment.includes(dd) ? 0 : Od;
        Od.variantFlags[dd] = (md.sceneDepth ? Xd : 0) | (md.movesVertices ? Kd : 0) | (md.sunShadow ? hd : 0) | (md.airShadow ? vd : 0) | (md.discards ? Qd : 0) | Wd("localPosition", td) | Wd("enchantSpeed", od) | Wd("enchantTier", Nd), Od.hooks[dd * Rd] = Hd(md.hooks.vertex), Od.hooks[dd * Rd + 1] = Hd(md.hooks.surface), Od.hooks[dd * Rd + 2] = Hd(md.hooks.light), Od.moduleCodes[dd] = md.moduleCode, Od.reads[2 * dd] = md.reads.vertex.join(" "), Od.reads[2 * dd + 1] = md.reads.fragment.join(" ")
      }
      return Od
    }

    function gd(dd) {
      const {
        hooks: Od,
        moduleCodes: md,
        reads: Wd
      } = dd;
      return Array.from(dd.variantFlags, ((dd, Fd) => {
        const td = Fd * Rd;
        return {
          key: bd(Fd),
          hooks: {
            vertex: yd(Od[td]),
            surface: yd(Od[td + 1]),
            light: yd(Od[td + 2])
          },
          moduleCode: md[Fd],
          sceneDepth: 0 !== (dd & Xd),
          sunShadow: 0 !== (dd & hd),
          airShadow: 0 !== (dd & vd),
          movesVertices: 0 !== (dd & Kd),
          discards: 0 !== (dd & Qd),
          reads: {
            vertex: pd(Wd[2 * Fd]),
            fragment: pd(Wd[2 * Fd + 1])
          }
        }
      }))
    }
  },
  7592: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      g: () => Xd,
      k: () => Kd,
      m: () => Fd,
      q: () => Rd
    });
    const Wd = ["terrain", "liquid", "model"];

    function Fd() {
      const dd = [];
      for (const Od of [!1, !0])
        for (const md of Wd) dd.push({
          strict: Od,
          program: md
        });
      return dd
    }

    function Rd(dd) {
      return `${dd.strict?"strict":"allow"}.${dd.program}`
    }

    function Xd(dd) {
      return !dd.hooks.vertex && !dd.hooks.surface && !dd.hooks.light
    }

    function Kd(dd, Od) {
      return "off" !== Od && (null === dd || dd.some((dd => dd.key.strict === ("strict" === Od) && !Xd(dd))))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);