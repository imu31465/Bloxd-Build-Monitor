export const id = 132;
export const ids = [132];
export const modules = {
  6478: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      loadPageShaderPackCompiler: () => QJ
    });
    var pd = {};
    kd.r(pd), kd.d(pd, {
      qNd: () => Nd,
      Kdd: () => Wd,
      default: () => rd,
      BNd: () => Pd,
      sNd: () => Zd,
      initSync: () => hd,
      rK: () => gd,
      gpd: () => Cd,
      iNd: () => Kd,
      aNd: () => od,
      VY: () => ld,
      MNd: () => Qd,
      rY: () => Ld,
      FNd: () => Od
    });
    class Nd {
      static __wrap(dd) {
        const Jd = Object.create(Nd.prototype);
        return Jd.__wbg_ptr = dd, Rd.register(Jd, Jd.__wbg_ptr, Jd), Jd
      }
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Rd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        Td.snuI(dd, 0)
      }
      get errorsJson() {
        let dd, Jd;
        try {
          const kd = Td.oIXF(this.__wbg_ptr);
          return dd = kd[0], Jd = kd[1], Bd(kd[0], kd[1])
        } finally {
          Td.XYEi(dd, Jd, 1)
        }
      }
      get features() {
        const dd = Td.WzWn(this.__wbg_ptr);
        var Jd = Gd(dd[0], dd[1]);
        return Td.XYEi(dd[0], 4 * dd[1], 4), Jd
      }
      get hooks() {
        const dd = Td.bQbC(this.__wbg_ptr);
        var Jd = vd(dd[0], dd[1]).slice();
        return Td.XYEi(dd[0], 1 * dd[1], 1), Jd
      }
      mapValidationMessage(dd, Jd, kd, pd, Nd) {
        let Wd, Pd;
        try {
          const Cd = Td.CQWC(this.__wbg_ptr, dd, Jd, kd, Id(pd), Id(Nd));
          var Zd = Cd[0],
            gd = Cd[1];
          if (Cd[3]) throw Zd = 0, gd = 0, jd(Cd[2]);
          return Wd = Zd, Pd = gd, Bd(Zd, gd)
        } finally {
          Td.XYEi(Wd, Pd, 1)
        }
      }
      get moduleCodes() {
        const dd = Td.XL1C(this.__wbg_ptr);
        var Jd = Gd(dd[0], dd[1]);
        return Td.XYEi(dd[0], 4 * dd[1], 4), Jd
      }
      get offInStrictJson() {
        let dd, Jd;
        try {
          const kd = Td.csAQ(this.__wbg_ptr);
          return dd = kd[0], Jd = kd[1], Bd(kd[0], kd[1])
        } finally {
          Td.XYEi(dd, Jd, 1)
        }
      }
      get reads() {
        const dd = Td.ZiFS(this.__wbg_ptr);
        var Jd = Gd(dd[0], dd[1]);
        return Td.XYEi(dd[0], 4 * dd[1], 4), Jd
      }
      get validationModuleCodes() {
        const dd = Td.A7cz(this.__wbg_ptr);
        var Jd = Gd(dd[0], dd[1]);
        return Td.XYEi(dd[0], 4 * dd[1], 4), Jd
      }
      get validationModuleKeys() {
        const dd = Td.c5hW(this.__wbg_ptr);
        var Jd = vd(dd[0], dd[1]).slice();
        return Td.XYEi(dd[0], 1 * dd[1], 1), Jd
      }
      get variantFlags() {
        const dd = Td.WDPR(this.__wbg_ptr);
        var Jd = vd(dd[0], dd[1]).slice();
        return Td.XYEi(dd[0], 1 * dd[1], 1), Jd
      }
    }

    function Wd(dd, Jd, kd, pd, Wd, Pd, Zd) {
      const gd = Sd(dd, Td.RfVY),
        Cd = Ed,
        Kd = Sd(Jd, Td.RfVY),
        od = Ed,
        ld = Sd(kd, Td.RfVY),
        Qd = Ed,
        Ld = bd(pd, Td.RfVY),
        Od = Ed,
        ed = Sd(Wd, Td.RfVY),
        Rd = Ed,
        Id = Sd(Pd, Td.RfVY),
        Gd = Ed,
        vd = Sd(Zd, Td.RfVY),
        xd = Ed,
        qd = Td.CPVb(gd, Cd, Kd, od, ld, Qd, Ld, Od, ed, Rd, Id, Gd, vd, xd);
      if (qd[2]) throw jd(qd[1]);
      return Nd.__wrap(qd[0])
    }

    function Pd() {
      const dd = Td.vgdh();
      var Jd = Gd(dd[0], dd[1]);
      return Td.XYEi(dd[0], 4 * dd[1], 4), Jd
    }

    function Zd() {
      const dd = Td.i3Y1();
      var Jd = Gd(dd[0], dd[1]);
      return Td.XYEi(dd[0], 4 * dd[1], 4), Jd
    }

    function gd() {
      Td.Cizp()
    }

    function Cd(dd, Jd, kd, pd, Nd) {
      let Wd, Pd;
      try {
        const Cd = Sd(dd, Td.RfVY),
          Kd = Ed,
          od = bd(Jd, Td.RfVY),
          ld = Ed,
          Qd = Sd(kd, Td.RfVY),
          Ld = Ed,
          Od = bd(pd, Td.RfVY),
          ed = Ed,
          Rd = function(dd, Jd) {
            const kd = Jd(1 * dd.length, 1) >>> 0;
            return Md().set(dd, kd / 1), Ed = dd.length, kd
          }(Nd, Td.RfVY),
          Id = Ed,
          Gd = Td.MKpM(Cd, Kd, od, ld, Qd, Ld, Od, ed, Rd, Id);
        var Zd = Gd[0],
          gd = Gd[1];
        if (Gd[3]) throw Zd = 0, gd = 0, jd(Gd[2]);
        return Wd = Zd, Pd = gd, Bd(Zd, gd)
      } finally {
        Td.XYEi(Wd, Pd, 1)
      }
    }

    function Kd() {
      let dd, Jd;
      try {
        const kd = Td.MucQ();
        return dd = kd[0], Jd = kd[1], Bd(kd[0], kd[1])
      } finally {
        Td.XYEi(dd, Jd, 1)
      }
    }

    function od(dd) {
      let Jd, kd;
      try {
        const Wd = Td.CLti(dd);
        var pd = Wd[0],
          Nd = Wd[1];
        if (Wd[3]) throw pd = 0, Nd = 0, jd(Wd[2]);
        return Jd = pd, kd = Nd, Bd(pd, Nd)
      } finally {
        Td.XYEi(Jd, kd, 1)
      }
    }

    function ld() {
      return Td.HsvM() >>> 0
    }

    function Qd() {
      let dd, Jd;
      try {
        const kd = Td.fffH();
        return dd = kd[0], Jd = kd[1], Bd(kd[0], kd[1])
      } finally {
        Td.XYEi(dd, Jd, 1)
      }
    }

    function Ld(dd, Jd) {
      let kd, pd;
      try {
        const Pd = Sd(dd, Td.RfVY),
          Zd = Ed,
          gd = bd(Jd, Td.RfVY),
          Cd = Ed,
          Kd = Td.cw1q(Pd, Zd, gd, Cd);
        var Nd = Kd[0],
          Wd = Kd[1];
        if (Kd[3]) throw Nd = 0, Wd = 0, jd(Kd[2]);
        return kd = Nd, pd = Wd, Bd(Nd, Wd)
      } finally {
        Td.XYEi(kd, pd, 1)
      }
    }

    function Od(dd) {
      let Jd, kd;
      try {
        const Wd = Td.ltEp(Id(dd));
        var pd = Wd[0],
          Nd = Wd[1];
        if (Wd[3]) throw pd = 0, Nd = 0, jd(Wd[2]);
        return Jd = pd, kd = Nd, Bd(pd, Nd)
      } finally {
        Td.XYEi(Jd, kd, 1)
      }
    }

    function ed() {
      return {
        __proto__: null,
        jPTc: {
          __proto__: null,
          Yzfk: function(dd, Jd) {
            return Id(Error(Bd(dd, Jd)))
          },
          t26Z: function(dd) {
            return null === Fd(dd)
          },
          tbHC: function(dd) {
            return "string" === typeof Fd(dd)
          },
          Ddc0: function(dd, Jd) {
            const kd = Fd(Jd),
              pd = "string" === typeof kd ? kd : void 0;
            var Nd, Wd = void 0 === (Nd = pd) || null === Nd ? 0 : function(dd, Jd, kd) {
                if (void 0 === kd) {
                  const kd = Ud.encode(dd),
                    pd = Jd(kd.length, 1) >>> 0;
                  return Md().subarray(pd, pd + kd.length).set(kd), Ed = kd.length, pd
                }
                let pd = dd.length,
                  Nd = Jd(pd, 1) >>> 0;
                const Wd = Md();
                let Pd = 0;
                for (; Pd < pd; Pd++) {
                  const Jd = dd.charCodeAt(Pd);
                  if (Jd > 127) break;
                  Wd[Nd + Pd] = Jd
                }
                if (Pd !== pd) {
                  0 !== Pd && (dd = dd.slice(Pd)), Nd = kd(Nd, pd, pd = Pd + 3 * dd.length, 1) >>> 0;
                  const Jd = Md().subarray(Nd + Pd, Nd + pd);
                  Pd += Ud.encodeInto(dd, Jd).written, Nd = kd(Nd, pd, Pd, 1) >>> 0
                }
                return Ed = Pd, Nd
              }(pd, Td.RfVY, Td.uK0m),
              Pd = Ed;
            qd().setInt32(dd + 4, Pd, !0), qd().setInt32(dd + 0, Wd, !0)
          },
          Gzpc: function(dd, Jd) {
            throw new Error(Bd(dd, Jd))
          },
          rupQ: function(dd, Jd) {
            return Fd(dd).charCodeAt(Jd >>> 0)
          },
          dV8w: function(dd, Jd) {
            console.error(Bd(dd, Jd))
          },
          q8Wq: function(dd) {
            return Fd(dd).length
          },
          DEj9: function(dd, Jd) {
            return Id(Bd(dd, Jd))
          },
          wuXq: function(dd) {
            jd(dd)
          }
        }
      }
    }
    Symbol.dispose && (Nd.prototype[Symbol.dispose] = Nd.prototype.free);
    const Rd = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((dd => Td.snuI(dd, 1)));

    function Id(dd) {
      md === Yd.length && Yd.push(Yd.length + 1);
      const Jd = md;
      return md = Yd[Jd], Yd[Jd] = dd, Jd
    }

    function Gd(dd, Jd) {
      dd >>>= 0;
      const kd = qd(),
        pd = [];
      for (let Nd = dd; Nd < dd + 4 * Jd; Nd += 4) pd.push(jd(kd.getUint32(Nd, !0)));
      return pd
    }

    function vd(dd, Jd) {
      return dd >>>= 0, Md().subarray(dd / 1, dd / 1 + Jd)
    }
    let xd = null;

    function qd() {
      return (null === xd || !0 === xd.buffer.detached || void 0 === xd.buffer.detached && xd.buffer !== Td.memory.buffer) && (xd = new DataView(Td.memory.buffer)), xd
    }

    function Bd(dd, Jd) {
      return function(dd, Jd) {
        nd += Jd, nd >= fd && (Xd = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Xd.decode(), nd = Jd);
        return Xd.decode(Md().subarray(dd, dd + Jd))
      }(dd >>> 0, Jd)
    }
    let sd = null;
    let ad = null;

    function Md() {
      return null !== ad && 0 !== ad.byteLength || (ad = new Uint8Array(Td.memory.buffer)), ad
    }

    function Fd(dd) {
      return Yd[dd]
    }
    let Yd = new Array(1024).fill(void 0);
    Yd.push(void 0, null, !0, !1);
    let md = Yd.length;

    function bd(dd, Jd) {
      const kd = Jd(4 * dd.length, 4) >>> 0;
      return (null !== sd && 0 !== sd.byteLength || (sd = new Uint32Array(Td.memory.buffer)), sd).set(dd, kd / 4), Ed = dd.length, kd
    }

    function Sd(dd, Jd) {
      const kd = Jd(4 * dd.length, 4) >>> 0,
        pd = qd();
      for (let Nd = 0; Nd < dd.length; Nd++) pd.setUint32(kd + 4 * Nd, Id(dd[Nd]), !0);
      return Ed = dd.length, kd
    }

    function jd(dd) {
      const Jd = Fd(dd);
      return function(dd) {
        dd < 1028 || (Yd[dd] = md, md = dd)
      }(dd), Jd
    }
    let Xd = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Xd.decode();
    const fd = 2146435072;
    let nd = 0;
    const Ud = new TextEncoder;
    "encodeInto" in Ud || (Ud.encodeInto = function(dd, Jd) {
      const kd = Ud.encode(dd);
      return Jd.set(kd), {
        read: dd.length,
        written: kd.length
      }
    });
    let yd, Dd, Td, Ed = 0;

    function cd(dd, Jd) {
      return Dd = dd, Td = dd.exports, yd = Jd, xd = null, sd = null, ad = null, Td.aDdS(), Td
    }

    function hd(dd) {
      if (void 0 !== Td) return Td;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module: dd
      } = dd) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Jd = ed();
      dd instanceof WebAssembly.Module || (dd = new WebAssembly.Module(dd));
      return cd(new WebAssembly.Instance(dd, Jd), dd)
    }
    async function rd(dd) {
      if (void 0 !== Td) return Td;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module_or_path: dd
      } = dd) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Jd = ed();
      ("string" === typeof dd || "function" === typeof Request && dd instanceof Request || "function" === typeof URL && dd instanceof URL) && (dd = fetch(dd));
      const {
        instance: kd,
        module: pd
      } = await async function(dd, Jd) {
        if ("function" === typeof Response && dd instanceof Response) {
          if (!dd.ok) throw new Error(`failed to fetch Wasm: ${dd.status} ${dd.statusText} fetching '${dd.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(dd, Jd)
          } catch (kd) {
            if (! function(dd) {
                switch (dd) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(dd.type) || "application/wasm" === dd.headers.get("Content-Type")) throw kd;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", kd)
          }
          const pd = await dd.arrayBuffer();
          return await WebAssembly.instantiate(pd, Jd)
        } {
          const kd = await WebAssembly.instantiate(dd, Jd);
          return kd instanceof WebAssembly.Instance ? {
            instance: kd,
            module: dd
          } : kd
        }
      }(await dd, Jd);
      return cd(kd, pd)
    }
    var ud = kd(2770),
      td = kd(6483);
    class Vd extends Error {
      stage;
      constructor(dd, Jd) {
        super((0, ud.A)(dd, Jd), {
          cause: Jd
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = dd
      }
    }
    let zd = null,
      Hd = null;

    function wd() {
      return zd ? Promise.resolve(zd) : (Hd || (Hd = async function() {
        let dd;
        try {
          dd = await (0, ud.B)(new kd.U(kd(6487)), (0, td.e)("bloxd_wasm_shader_pack"))
        } catch (Jd) {
          throw new Vd((0, ud.G)(Jd), Jd)
        }
        try {
          await rd({
            module_or_path: dd
          })
        } catch (Jd) {
          throw new Vd("instantiate", Jd)
        }
        return zd = pd, zd
      }(), Hd.then(void 0, (() => {
        Hd = null
      }))), Hd)
    }
    var Ad = kd(6505);

    function dJ(dd) {
      let [Jd, kd, pd, Nd] = dd;
      const Wd = {
        file: Jd,
        line: kd,
        message: pd
      };
      return Nd && (Wd.variants = Nd.map(Ad.l)), Wd
    }

    function JJ(dd) {
      return JSON.parse(dd).map(dJ)
    }

    function kJ(dd, Jd) {
      if (!Number.isInteger(dd) || dd < 0 || dd > 4294967295) throw new Error(`${Jd} ${dd} is not a whole number from 0 to 4294967295`);
      return dd
    }

    function pJ(dd) {
      return [dd.named.map((dd => dd.name)), Uint32Array.from(dd.named, (dd => kJ(dd.id, "Texture ID")))]
    }
    const NJ = new WeakMap;
    const WJ = new WeakMap,
      PJ = new WeakSet;

    function ZJ(dd, Jd) {
      if (PJ.has(dd)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return Jd()
      } catch (kd) {
        throw kd instanceof WebAssembly.RuntimeError && PJ.add(dd), kd
      }
    }

    function gJ(dd) {
      let Jd = WJ.get(dd);
      if (!Jd) {
        let kd, pd;
        Jd = {
          Kdd: (Jd, kd) => ZJ(dd, (() => function(dd, Jd, kd) {
            const pd = dd.Kdd(Jd.map((dd => dd.path)), Jd.map((dd => dd.source)), ...pJ(kd), kd.aliases.map((dd => dd.name)), kd.aliases.map((dd => dd.texture)), kd.aliases.map((dd => dd.kind)));
            let Nd = !1;
            try {
              const dd = pd.validationModuleCodes,
                Jd = Array.from(pd.validationModuleKeys, ((Jd, kd) => ({
                  key: (0, Ad.l)(Jd),
                  code: dd[kd]
                }))),
                kd = {
                  errors: JJ(pd.errorsJson),
                  offInStrict: JJ(pd.offInStrictJson),
                  variants: (0, Ad.f)(pd),
                  validationModules: Jd,
                  features: pd.features
                };
              return Jd.forEach(((dd, Jd) => {
                NJ.set(dd, {
                  pack: pd,
                  index: Jd
                })
              })), Nd = Jd.length > 0, kd
            } finally {
              Nd || pd.free()
            }
          }(dd, Jd, kd))),
          mapValidationMessage: (Jd, kd) => {
            const pd = NJ.get(Jd);
            if (!pd) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return dJ(JSON.parse(ZJ(dd, (() => pd.pack.mapValidationMessage(pd.index, kd.lineNum, kd.linePos, kd.message, kd.type)))))
          },
          gpd: Jd => ZJ(dd, (() => function(dd, Jd) {
            const kd = new Int32Array(Jd.length),
              pd = [];
            return Jd.forEach(((dd, Jd) => {
              kd[Jd] = dd.variants ? dd.variants.length : -1;
              for (const kd of dd.variants ?? []) pd.push((0, Ad.h)(kd))
            })), JJ(dd.gpd(Jd.map((dd => dd.file)), Uint32Array.from(Jd, (dd => kJ(dd.line, "Diagnostic line"))), Jd.map((dd => dd.message)), kd, Uint8Array.from(pd)))
          }(dd, Jd))),
          rY: Jd => ZJ(dd, (() => dd.rY(...pJ(Jd)))),
          get SHADER_PACK_HEADER_VERSION() {
            return kd ??= ZJ(dd, (() => dd.MNd())), kd
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return pd ??= ZJ(dd, (() => {
              const Jd = dd.sNd();
              return dd.BNd().map(((dd, kd) => ({
                path: dd,
                source: Jd[kd]
              })))
            })), pd
          },
          FNd: Jd => ZJ(dd, (() => dd.FNd(Jd))),
          resolveHeader: Jd => ZJ(dd, (() => dd.aNd((0, Ad.h)(Jd)))),
          iNd: () => ZJ(dd, (() => dd.iNd()))
        }, WJ.set(dd, Jd)
      }
      return Jd
    }
    var CJ = kd(3079),
      KJ = kd(6496);
    const oJ = "bloxdShaderPackWasmFailureReported";
    let lJ = null;

    function QJ() {
      return lJ ??= async function() {
        if ("undefined" === typeof WebAssembly) return LJ("unsupported", "This browser has no WebAssembly"), null;
        const dd = (0, KJ.loadShaderPackTextures)().then((() => !0), (dd => (console.error("Could not load the shader pack textures, so shader packs can't run", dd), !1)));
        try {
          const Jd = await async function() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wd;
            return gJ(await dd())
          }();
          return await dd ? Jd : null
        } catch (Jd) {
          const dd = Jd instanceof Error ? Jd.message : String(Jd);
          return LJ(CJ.c[Jd instanceof Vd ? Jd.stage : "instantiate"], dd), null
        }
      }(), lJ
    }

    function LJ(dd, Jd) {
      (0, CJ.f)(oJ, `Shader pack wasm ${dd}, so shader packs can't run: ${Jd}`, Jd, `shader_pack_${dd}`)
    }
  },
  6487: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/bloxd_wasm_shader_pack_bg.47822a0b816f0c049306.wasm"
  },
  6483: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    var pd = kd(2770);
    const Nd = {
      bloxd_wasm: () => "67c6401d5811eb7b9cff2814a29f966a9dd1ab923e175fa19497af26b4502816",
      bloxd_wasm_client: () => "6258b24df63176123d93f549bb48f56da442317b3a5ee1b22458e2637caf578d",
      bloxd_wasm_workers: () => "be7c28fa29cbecc24e19062f2c6bc0a5894a203c3dda65452eccc860e930d821",
      bloxd_wasm_models: () => "6bdd581d4d0becff3e95b66a27a1a5da4e04f924bcd5bc0dd36e885168896016",
      bloxd_wasm_webgpu: () => "7696327997962eac9535a5b8094b153b4298d06883723f642562040590146af1",
      bloxd_wasm_webgl: () => "8873dc66cf374a905034792d179a1bc9e3d8a0d5138b511825a78d7a954240d0",
      bloxd_wasm_webgl1: () => "8397ed5ce5c8ac7579e7003101c4f8c9a1ce8368296cd2e41ac9a9b90beb7a65",
      bloxd_wasm_replay: () => "d71b023241834dbfc2db6804be33469db924450506350004c541b0b754121656",
      bloxd_wasm_recorder: () => "f2e9b9c8ae12c235b86b64a44b272450d96f214d5d6982878bbf330e3339f352",
      bloxd_wasm_anim: () => "3c8d34a5af00d244cdef6e97addab208455d3fad6df89d6004ea567630021fe8",
      bloxd_wasm_textures: () => "dfcd6892e79c79af74dba72d92f489620c1624d3bfcd825b670886933b48749c",
      bloxd_wasm_shader_pack: () => "ca7501d2ff0cccb80272a18641201d2ce4e4b1e9ec5a5ceca284d9a4fa45907f"
    };
    var Wd = kd(4563);

    function Pd(dd) {
      const Jd = Object.prototype.hasOwnProperty.call(Nd, dd) ? Nd[dd]() : void 0;
      if (void 0 !== Jd) return {
        sha256: Jd,
        onMismatch: Wd.G
      };
      throw new pd.f(`${dd} has no release digest, so this build refuses it`)
    }
  },
  6505: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => vd,
      f: () => xd,
      h: () => Id,
      l: () => Rd
    });
    var pd = kd(6514);
    const Nd = 6,
      Wd = 3,
      Pd = 1,
      Zd = 2,
      gd = 4,
      Cd = 8,
      Kd = 16,
      od = 32,
      ld = 64,
      Qd = 128,
      Ld = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Od(dd) {
      if (!dd) return 0;
      const Jd = Ld.indexOf(dd);
      if (Jd <= 0) throw new Error(`"${dd}" is not a shader pack hook function`);
      return Jd
    }

    function ed(dd) {
      if (0 === dd) return null;
      const Jd = Ld[dd];
      if (void 0 === Jd) throw new Error(`${dd} is not a shader pack hook function id`);
      return Jd
    }

    function Rd(dd) {
      const Jd = pd.c.length;
      return {
        strict: dd >= Jd,
        program: pd.c[dd % Jd]
      }
    }

    function Id(dd) {
      return Number(dd.strict) * pd.c.length + pd.c.indexOf(dd.program)
    }

    function Gd(dd) {
      return "" === dd ? [] : dd.split(" ")
    }

    function vd(dd) {
      const Jd = {
        variantFlags: new Uint8Array(Nd),
        hooks: new Uint8Array(Nd * Wd),
        moduleCodes: Array(Nd).fill(""),
        reads: Array(2 * Nd).fill("")
      };
      for (const kd of dd) {
        const dd = Id(kd.key),
          pd = (dd, Jd) => null === kd.hooks.surface || kd.reads.fragment.includes(dd) ? 0 : Jd;
        Jd.variantFlags[dd] = (kd.sceneDepth ? Pd : 0) | (kd.movesVertices ? Zd : 0) | (kd.sunShadow ? gd : 0) | (kd.airShadow ? Cd : 0) | (kd.discards ? Kd : 0) | pd("localPosition", od) | pd("enchantSpeed", ld) | pd("enchantTier", Qd), Jd.hooks[dd * Wd] = Od(kd.hooks.vertex), Jd.hooks[dd * Wd + 1] = Od(kd.hooks.surface), Jd.hooks[dd * Wd + 2] = Od(kd.hooks.light), Jd.moduleCodes[dd] = kd.moduleCode, Jd.reads[2 * dd] = kd.reads.vertex.join(" "), Jd.reads[2 * dd + 1] = kd.reads.fragment.join(" ")
      }
      return Jd
    }

    function xd(dd) {
      const {
        hooks: Jd,
        moduleCodes: kd,
        reads: pd
      } = dd;
      return Array.from(dd.variantFlags, ((dd, Nd) => {
        const od = Nd * Wd;
        return {
          key: Rd(Nd),
          hooks: {
            vertex: ed(Jd[od]),
            surface: ed(Jd[od + 1]),
            light: ed(Jd[od + 2])
          },
          moduleCode: kd[Nd],
          sceneDepth: 0 !== (dd & Pd),
          sunShadow: 0 !== (dd & gd),
          airShadow: 0 !== (dd & Cd),
          movesVertices: 0 !== (dd & Zd),
          discards: 0 !== (dd & Kd),
          reads: {
            vertex: Gd(pd[2 * Nd]),
            fragment: Gd(pd[2 * Nd + 1])
          }
        }
      }))
    }
  },
  6514: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd,
      f: () => Pd,
      i: () => Zd,
      j: () => Nd,
      n: () => Wd
    });
    const pd = ["terrain", "liquid", "model"];

    function Nd() {
      const dd = [];
      for (const Jd of [!1, !0])
        for (const kd of pd) dd.push({
          strict: Jd,
          program: kd
        });
      return dd
    }

    function Wd(dd) {
      return `${dd.strict?"strict":"allow"}.${dd.program}`
    }

    function Pd(dd) {
      return !dd.hooks.vertex && !dd.hooks.surface && !dd.hooks.light
    }

    function Zd(dd, Jd) {
      return "off" !== Jd && (null === dd || dd.some((dd => dd.key.strict === ("strict" === Jd) && !Pd(dd))))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);