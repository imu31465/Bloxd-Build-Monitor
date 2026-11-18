export const id = 124;
export const ids = [124];
export const modules = {
  5960: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      loadPageShaderPackCompiler: () => Dc
    });
    var FJ = {};
    ZJ.r(FJ), ZJ.d(FJ, {
      tFJ: () => UJ,
      W4: () => eJ,
      default: () => uJ,
      oFJ: () => XJ,
      lFJ: () => AJ,
      initSync: () => CJ,
      uY: () => qJ,
      kZJ: () => jJ,
      JUJ: () => YJ,
      cUJ: () => hJ,
      Ay: () => DJ,
      ZUJ: () => sJ,
      Uy: () => nJ,
      FUJ: () => GJ
    });
    class UJ {
      static __wrap(JJ) {
        const cJ = Object.create(UJ.prototype);
        return cJ.__wbg_ptr = JJ, xJ.register(cJ, cJ.__wbg_ptr, cJ), cJ
      }
      __destroy_into_raw() {
        const JJ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, xJ.unregister(this), JJ
      }
      free() {
        const JJ = this.__destroy_into_raw();
        NJ.HVVl(JJ, 0)
      }
      get errorsJson() {
        let JJ, cJ;
        try {
          const ZJ = NJ.dbPa(this.__wbg_ptr);
          return JJ = ZJ[0], cJ = ZJ[1], VJ(ZJ[0], ZJ[1])
        } finally {
          NJ.LKBe(JJ, cJ, 1)
        }
      }
      get features() {
        const JJ = NJ.pf5t(this.__wbg_ptr);
        var cJ = vJ(JJ[0], JJ[1]);
        return NJ.LKBe(JJ[0], 4 * JJ[1], 4), cJ
      }
      get hooks() {
        const JJ = NJ.AfUR(this.__wbg_ptr);
        var cJ = mJ(JJ[0], JJ[1]).slice();
        return NJ.LKBe(JJ[0], 1 * JJ[1], 1), cJ
      }
      mapValidationMessage(JJ, cJ, ZJ, FJ, UJ) {
        let eJ, XJ;
        try {
          const jJ = NJ.M4AV(this.__wbg_ptr, JJ, cJ, ZJ, rJ(FJ), rJ(UJ));
          var AJ = jJ[0],
            qJ = jJ[1];
          if (jJ[3]) throw AJ = 0, qJ = 0, gJ(jJ[2]);
          return eJ = AJ, XJ = qJ, VJ(AJ, qJ)
        } finally {
          NJ.LKBe(eJ, XJ, 1)
        }
      }
      get moduleCodes() {
        const JJ = NJ.udGH(this.__wbg_ptr);
        var cJ = vJ(JJ[0], JJ[1]);
        return NJ.LKBe(JJ[0], 4 * JJ[1], 4), cJ
      }
      get offInStrictJson() {
        let JJ, cJ;
        try {
          const ZJ = NJ.cMXb(this.__wbg_ptr);
          return JJ = ZJ[0], cJ = ZJ[1], VJ(ZJ[0], ZJ[1])
        } finally {
          NJ.LKBe(JJ, cJ, 1)
        }
      }
      get reads() {
        const JJ = NJ.chYP(this.__wbg_ptr);
        var cJ = vJ(JJ[0], JJ[1]);
        return NJ.LKBe(JJ[0], 4 * JJ[1], 4), cJ
      }
      get validationModuleCodes() {
        const JJ = NJ.QdN2(this.__wbg_ptr);
        var cJ = vJ(JJ[0], JJ[1]);
        return NJ.LKBe(JJ[0], 4 * JJ[1], 4), cJ
      }
      get validationModuleKeys() {
        const JJ = NJ.WNRC(this.__wbg_ptr);
        var cJ = mJ(JJ[0], JJ[1]).slice();
        return NJ.LKBe(JJ[0], 1 * JJ[1], 1), cJ
      }
      get variantFlags() {
        const JJ = NJ.VYGA(this.__wbg_ptr);
        var cJ = mJ(JJ[0], JJ[1]).slice();
        return NJ.LKBe(JJ[0], 1 * JJ[1], 1), cJ
      }
    }

    function eJ(JJ, cJ, ZJ, FJ, eJ, XJ, AJ) {
      const qJ = WJ(JJ, NJ.I9E6),
        jJ = OJ,
        YJ = WJ(cJ, NJ.I9E6),
        hJ = OJ,
        DJ = WJ(ZJ, NJ.I9E6),
        sJ = OJ,
        nJ = wJ(FJ, NJ.I9E6),
        GJ = OJ,
        fJ = WJ(eJ, NJ.I9E6),
        xJ = OJ,
        rJ = WJ(XJ, NJ.I9E6),
        vJ = OJ,
        mJ = WJ(AJ, NJ.I9E6),
        QJ = OJ,
        EJ = NJ.PnnI(qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ, mJ, QJ);
      if (EJ[2]) throw gJ(EJ[1]);
      return UJ.__wrap(EJ[0])
    }

    function XJ() {
      const JJ = NJ.y6rd();
      var cJ = vJ(JJ[0], JJ[1]);
      return NJ.LKBe(JJ[0], 4 * JJ[1], 4), cJ
    }

    function AJ() {
      const JJ = NJ.nLT6();
      var cJ = vJ(JJ[0], JJ[1]);
      return NJ.LKBe(JJ[0], 4 * JJ[1], 4), cJ
    }

    function qJ() {
      NJ.RSLc()
    }

    function jJ(JJ, cJ, ZJ, FJ, UJ) {
      let eJ, XJ;
      try {
        const jJ = WJ(JJ, NJ.I9E6),
          YJ = OJ,
          hJ = wJ(cJ, NJ.I9E6),
          DJ = OJ,
          sJ = WJ(ZJ, NJ.I9E6),
          nJ = OJ,
          GJ = wJ(FJ, NJ.I9E6),
          fJ = OJ,
          xJ = function(JJ, cJ) {
            const ZJ = cJ(1 * JJ.length, 1) >>> 0;
            return SJ().set(JJ, ZJ / 1), OJ = JJ.length, ZJ
          }(UJ, NJ.I9E6),
          rJ = OJ,
          vJ = NJ.jxyu(jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ);
        var AJ = vJ[0],
          qJ = vJ[1];
        if (vJ[3]) throw AJ = 0, qJ = 0, gJ(vJ[2]);
        return eJ = AJ, XJ = qJ, VJ(AJ, qJ)
      } finally {
        NJ.LKBe(eJ, XJ, 1)
      }
    }

    function YJ() {
      let JJ, cJ;
      try {
        const ZJ = NJ.OK5o();
        return JJ = ZJ[0], cJ = ZJ[1], VJ(ZJ[0], ZJ[1])
      } finally {
        NJ.LKBe(JJ, cJ, 1)
      }
    }

    function hJ(JJ) {
      let cJ, ZJ;
      try {
        const eJ = NJ.X5Yb(JJ);
        var FJ = eJ[0],
          UJ = eJ[1];
        if (eJ[3]) throw FJ = 0, UJ = 0, gJ(eJ[2]);
        return cJ = FJ, ZJ = UJ, VJ(FJ, UJ)
      } finally {
        NJ.LKBe(cJ, ZJ, 1)
      }
    }

    function DJ() {
      return NJ.RJfW() >>> 0
    }

    function sJ() {
      let JJ, cJ;
      try {
        const ZJ = NJ.Qy0C();
        return JJ = ZJ[0], cJ = ZJ[1], VJ(ZJ[0], ZJ[1])
      } finally {
        NJ.LKBe(JJ, cJ, 1)
      }
    }

    function nJ(JJ, cJ) {
      let ZJ, FJ;
      try {
        const XJ = WJ(JJ, NJ.I9E6),
          AJ = OJ,
          qJ = wJ(cJ, NJ.I9E6),
          jJ = OJ,
          YJ = NJ.jjUA(XJ, AJ, qJ, jJ);
        var UJ = YJ[0],
          eJ = YJ[1];
        if (YJ[3]) throw UJ = 0, eJ = 0, gJ(YJ[2]);
        return ZJ = UJ, FJ = eJ, VJ(UJ, eJ)
      } finally {
        NJ.LKBe(ZJ, FJ, 1)
      }
    }

    function GJ(JJ) {
      let cJ, ZJ;
      try {
        const eJ = NJ.Jdgq(rJ(JJ));
        var FJ = eJ[0],
          UJ = eJ[1];
        if (eJ[3]) throw FJ = 0, UJ = 0, gJ(eJ[2]);
        return cJ = FJ, ZJ = UJ, VJ(FJ, UJ)
      } finally {
        NJ.LKBe(cJ, ZJ, 1)
      }
    }

    function fJ() {
      return {
        __proto__: null,
        YTDD: {
          __proto__: null,
          C8xa: function(JJ, cJ) {
            return rJ(Error(VJ(JJ, cJ)))
          },
          uTfT: function(JJ) {
            return null === IJ(JJ)
          },
          lzmD: function(JJ) {
            return "string" === typeof IJ(JJ)
          },
          gHXx: function(JJ, cJ) {
            const ZJ = IJ(cJ),
              FJ = "string" === typeof ZJ ? ZJ : void 0;
            var UJ, eJ = void 0 === (UJ = FJ) || null === UJ ? 0 : function(JJ, cJ, ZJ) {
                if (void 0 === ZJ) {
                  const ZJ = pJ.encode(JJ),
                    FJ = cJ(ZJ.length, 1) >>> 0;
                  return SJ().subarray(FJ, FJ + ZJ.length).set(ZJ), OJ = ZJ.length, FJ
                }
                let FJ = JJ.length,
                  UJ = cJ(FJ, 1) >>> 0;
                const eJ = SJ();
                let XJ = 0;
                for (; XJ < FJ; XJ++) {
                  const cJ = JJ.charCodeAt(XJ);
                  if (cJ > 127) break;
                  eJ[UJ + XJ] = cJ
                }
                if (XJ !== FJ) {
                  0 !== XJ && (JJ = JJ.slice(XJ)), UJ = ZJ(UJ, FJ, FJ = XJ + 3 * JJ.length, 1) >>> 0;
                  const cJ = SJ().subarray(UJ + XJ, UJ + FJ);
                  XJ += pJ.encodeInto(JJ, cJ).written, UJ = ZJ(UJ, FJ, XJ, 1) >>> 0
                }
                return OJ = XJ, UJ
              }(FJ, NJ.I9E6, NJ.PNxu),
              XJ = OJ;
            EJ().setInt32(JJ + 4, XJ, !0), EJ().setInt32(JJ + 0, eJ, !0)
          },
          H4g6: function(JJ, cJ) {
            throw new Error(VJ(JJ, cJ))
          },
          zQ66: function(JJ, cJ) {
            return IJ(JJ).charCodeAt(cJ >>> 0)
          },
          CrEU: function(JJ, cJ) {
            console.error(VJ(JJ, cJ))
          },
          RwEK: function(JJ) {
            return IJ(JJ).length
          },
          hHij: function(JJ, cJ) {
            return rJ(VJ(JJ, cJ))
          },
          bjPK: function(JJ) {
            gJ(JJ)
          }
        }
      }
    }
    Symbol.dispose && (UJ.prototype[Symbol.dispose] = UJ.prototype.free);
    const xJ = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((JJ => NJ.HVVl(JJ, 1)));

    function rJ(JJ) {
      bJ === MJ.length && MJ.push(MJ.length + 1);
      const cJ = bJ;
      return bJ = MJ[cJ], MJ[cJ] = JJ, cJ
    }

    function vJ(JJ, cJ) {
      JJ >>>= 0;
      const ZJ = EJ(),
        FJ = [];
      for (let UJ = JJ; UJ < JJ + 4 * cJ; UJ += 4) FJ.push(gJ(ZJ.getUint32(UJ, !0)));
      return FJ
    }

    function mJ(JJ, cJ) {
      return JJ >>>= 0, SJ().subarray(JJ / 1, JJ / 1 + cJ)
    }
    let QJ = null;

    function EJ() {
      return (null === QJ || !0 === QJ.buffer.detached || void 0 === QJ.buffer.detached && QJ.buffer !== NJ.memory.buffer) && (QJ = new DataView(NJ.memory.buffer)), QJ
    }

    function VJ(JJ, cJ) {
      return function(JJ, cJ) {
        kJ += cJ, kJ >= PJ && (HJ = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), HJ.decode(), kJ = cJ);
        return HJ.decode(SJ().subarray(JJ, JJ + cJ))
      }(JJ >>> 0, cJ)
    }
    let KJ = null;
    let yJ = null;

    function SJ() {
      return null !== yJ && 0 !== yJ.byteLength || (yJ = new Uint8Array(NJ.memory.buffer)), yJ
    }

    function IJ(JJ) {
      return MJ[JJ]
    }
    let MJ = new Array(1024).fill(void 0);
    MJ.push(void 0, null, !0, !1);
    let bJ = MJ.length;

    function wJ(JJ, cJ) {
      const ZJ = cJ(4 * JJ.length, 4) >>> 0;
      return (null !== KJ && 0 !== KJ.byteLength || (KJ = new Uint32Array(NJ.memory.buffer)), KJ).set(JJ, ZJ / 4), OJ = JJ.length, ZJ
    }

    function WJ(JJ, cJ) {
      const ZJ = cJ(4 * JJ.length, 4) >>> 0,
        FJ = EJ();
      for (let UJ = 0; UJ < JJ.length; UJ++) FJ.setUint32(ZJ + 4 * UJ, rJ(JJ[UJ]), !0);
      return OJ = JJ.length, ZJ
    }

    function gJ(JJ) {
      const cJ = IJ(JJ);
      return function(JJ) {
        JJ < 1028 || (MJ[JJ] = bJ, bJ = JJ)
      }(JJ), cJ
    }
    let HJ = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    HJ.decode();
    const PJ = 2146435072;
    let kJ = 0;
    const pJ = new TextEncoder;
    "encodeInto" in pJ || (pJ.encodeInto = function(JJ, cJ) {
      const ZJ = pJ.encode(JJ);
      return cJ.set(ZJ), {
        read: JJ.length,
        written: ZJ.length
      }
    });
    let dJ, zJ, NJ, OJ = 0;

    function TJ(JJ, cJ) {
      return zJ = JJ, NJ = JJ.exports, dJ = cJ, QJ = null, KJ = null, yJ = null, NJ.sIwq(), NJ
    }

    function CJ(JJ) {
      if (void 0 !== NJ) return NJ;
      void 0 !== JJ && (Object.getPrototypeOf(JJ) === Object.prototype ? ({
        module: JJ
      } = JJ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const cJ = fJ();
      JJ instanceof WebAssembly.Module || (JJ = new WebAssembly.Module(JJ));
      return TJ(new WebAssembly.Instance(JJ, cJ), JJ)
    }
    async function uJ(JJ) {
      if (void 0 !== NJ) return NJ;
      void 0 !== JJ && (Object.getPrototypeOf(JJ) === Object.prototype ? ({
        module_or_path: JJ
      } = JJ) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const cJ = fJ();
      ("string" === typeof JJ || "function" === typeof Request && JJ instanceof Request || "function" === typeof URL && JJ instanceof URL) && (JJ = fetch(JJ));
      const {
        instance: ZJ,
        module: FJ
      } = await async function(JJ, cJ) {
        if ("function" === typeof Response && JJ instanceof Response) {
          if (!JJ.ok) throw new Error(`failed to fetch Wasm: ${JJ.status} ${JJ.statusText} fetching '${JJ.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(JJ, cJ)
          } catch (ZJ) {
            if (! function(JJ) {
                switch (JJ) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(JJ.type) || "application/wasm" === JJ.headers.get("Content-Type")) throw ZJ;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZJ)
          }
          const FJ = await JJ.arrayBuffer();
          return await WebAssembly.instantiate(FJ, cJ)
        } {
          const ZJ = await WebAssembly.instantiate(JJ, cJ);
          return ZJ instanceof WebAssembly.Instance ? {
            instance: ZJ,
            module: JJ
          } : ZJ
        }
      }(await JJ, cJ);
      return TJ(ZJ, FJ)
    }
    var iJ = ZJ(3183),
      RJ = ZJ(5963);
    class LJ extends Error {
      stage;
      constructor(JJ, cJ) {
        super((0, iJ.F)(JJ, cJ), {
          cause: cJ
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = JJ
      }
    }
    let aJ = null,
      BJ = null;

    function tJ() {
      return aJ ? Promise.resolve(aJ) : (BJ || (BJ = async function() {
        let JJ;
        try {
          JJ = await (0, iJ.H)(new ZJ.U(ZJ(5974)), (0, RJ.e)("bloxd_wasm_shader_pack"))
        } catch (cJ) {
          throw new LJ((0, iJ.O)(cJ), cJ)
        }
        try {
          await uJ({
            module_or_path: JJ
          })
        } catch (cJ) {
          throw new LJ("instantiate", cJ)
        }
        return aJ = FJ, aJ
      }(), BJ.then(void 0, (() => {
        BJ = null
      }))), BJ)
    }
    var oJ = ZJ(5982);

    function lJ(JJ) {
      let [cJ, ZJ, FJ, UJ] = JJ;
      const eJ = {
        file: cJ,
        line: ZJ,
        message: FJ
      };
      return UJ && (eJ.variants = UJ.map(oJ.k)), eJ
    }

    function Jc(JJ) {
      return JSON.parse(JJ).map(lJ)
    }

    function cc(JJ, cJ) {
      if (!Number.isInteger(JJ) || JJ < 0 || JJ > 4294967295) throw new Error(`${cJ} ${JJ} is not a whole number from 0 to 4294967295`);
      return JJ
    }

    function Zc(JJ) {
      return [JJ.named.map((JJ => JJ.name)), Uint32Array.from(JJ.named, (JJ => cc(JJ.id, "Texture ID")))]
    }
    const Fc = new WeakMap;
    const Uc = new WeakMap,
      ec = new WeakSet;

    function Xc(JJ, cJ) {
      if (ec.has(JJ)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return cJ()
      } catch (ZJ) {
        throw ZJ instanceof WebAssembly.RuntimeError && ec.add(JJ), ZJ
      }
    }

    function Ac(JJ) {
      let cJ = Uc.get(JJ);
      if (!cJ) {
        let ZJ, FJ;
        cJ = {
          W4: (cJ, ZJ) => Xc(JJ, (() => function(JJ, cJ, ZJ) {
            const FJ = JJ.W4(cJ.map((JJ => JJ.path)), cJ.map((JJ => JJ.source)), ...Zc(ZJ), ZJ.aliases.map((JJ => JJ.name)), ZJ.aliases.map((JJ => JJ.texture)), ZJ.aliases.map((JJ => JJ.kind)));
            let UJ = !1;
            try {
              const JJ = FJ.validationModuleCodes,
                cJ = Array.from(FJ.validationModuleKeys, ((cJ, ZJ) => ({
                  key: (0, oJ.k)(cJ),
                  code: JJ[ZJ]
                }))),
                ZJ = {
                  errors: Jc(FJ.errorsJson),
                  offInStrict: Jc(FJ.offInStrictJson),
                  variants: (0, oJ.d)(FJ),
                  validationModules: cJ,
                  features: FJ.features
                };
              return cJ.forEach(((JJ, cJ) => {
                Fc.set(JJ, {
                  pack: FJ,
                  index: cJ
                })
              })), UJ = cJ.length > 0, ZJ
            } finally {
              UJ || FJ.free()
            }
          }(JJ, cJ, ZJ))),
          mapValidationMessage: (cJ, ZJ) => {
            const FJ = Fc.get(cJ);
            if (!FJ) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return lJ(JSON.parse(Xc(JJ, (() => FJ.pack.mapValidationMessage(FJ.index, ZJ.lineNum, ZJ.linePos, ZJ.message, ZJ.type)))))
          },
          kZJ: cJ => Xc(JJ, (() => function(JJ, cJ) {
            const ZJ = new Int32Array(cJ.length),
              FJ = [];
            return cJ.forEach(((JJ, cJ) => {
              ZJ[cJ] = JJ.variants ? JJ.variants.length : -1;
              for (const ZJ of JJ.variants ?? []) FJ.push((0, oJ.h)(ZJ))
            })), Jc(JJ.kZJ(cJ.map((JJ => JJ.file)), Uint32Array.from(cJ, (JJ => cc(JJ.line, "Diagnostic line"))), cJ.map((JJ => JJ.message)), ZJ, Uint8Array.from(FJ)))
          }(JJ, cJ))),
          Uy: cJ => Xc(JJ, (() => JJ.Uy(...Zc(cJ)))),
          get SHADER_PACK_HEADER_VERSION() {
            return ZJ ??= Xc(JJ, (() => JJ.ZUJ())), ZJ
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return FJ ??= Xc(JJ, (() => {
              const cJ = JJ.lFJ();
              return JJ.oFJ().map(((JJ, ZJ) => ({
                path: JJ,
                source: cJ[ZJ]
              })))
            })), FJ
          },
          FUJ: cJ => Xc(JJ, (() => JJ.FUJ(cJ))),
          resolveHeader: cJ => Xc(JJ, (() => JJ.cUJ((0, oJ.h)(cJ)))),
          JUJ: () => Xc(JJ, (() => JJ.JUJ()))
        }, Uc.set(JJ, cJ)
      }
      return cJ
    }
    var qc = ZJ(2702),
      jc = ZJ(5977);
    const Yc = "bloxdShaderPackWasmFailureReported";
    let hc = null;

    function Dc() {
      return hc ??= async function() {
        if ("undefined" === typeof WebAssembly) return sc("unsupported", "This browser has no WebAssembly"), null;
        const JJ = (0, jc.loadShaderPackTextures)().then((() => !0), (JJ => (console.error("Could not load the shader pack textures, so shader packs can't run", JJ), !1)));
        try {
          const cJ = await async function() {
            let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tJ;
            return Ac(await JJ())
          }();
          return await JJ ? cJ : null
        } catch (cJ) {
          const JJ = cJ instanceof Error ? cJ.message : String(cJ);
          return sc(qc.d[cJ instanceof LJ ? cJ.stage : "instantiate"], JJ), null
        }
      }(), hc
    }

    function sc(JJ, cJ) {
      (0, qc.h)(Yc, `Shader pack wasm ${JJ}, so shader packs can't run: ${cJ}`, cJ, `shader_pack_${JJ}`)
    }
  },
  5974: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/bloxd_wasm_shader_pack_bg.9d0df9a4b52e12bb7a45.wasm"
  },
  5963: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    var FJ = ZJ(3183);
    const UJ = {
      bloxd_wasm: () => "523d3e5949bf2a4753ef5ca2a73400ebb345835b7971369ead2f990b98be43ec",
      bloxd_wasm_client: () => "d4cb36df94a07de19e42eeffa0530f0524c7d89d6cd225e6e3040a8fe33cb61f",
      bloxd_wasm_workers: () => "b13b723c21ff4be0aa4bb62ce03a9989f6e3a955e9dbcbcab4ce4af24b202aca",
      bloxd_wasm_models: () => "f6812c5c938dcbac86f88041ffced930fe9d08400f719159d23aa9e3370f1e40",
      bloxd_wasm_webgpu: () => "e406b84c9505f7a02226339b21c94d9a9039f99b240ba6ea17b3503c03394d97",
      bloxd_wasm_webgl: () => "31e54300aadfdf39d9adf46e78a03ba62332faca6c028e444167fa4ad879a305",
      bloxd_wasm_webgl1: () => "eabb7ee7c8fbfb9be543faab1ff74311865cfd0aa56a6ee1f3f14d03e5ae7d24",
      bloxd_wasm_replay: () => "4f3a9b06c75077dd5f30c00cad61978d804090ee39979df7a1cfbfc9252724da",
      bloxd_wasm_recorder: () => "27d0a05e493ac60b3abbc822d35e07432c9fd8fda5fab082d13b04b57a84627e",
      bloxd_wasm_anim: () => "df3ee160579d661f445b2f411e354890d481e89dda8265b662e7e3f787cf6236",
      bloxd_wasm_textures: () => "1fc5f5b691e5b407d47f375467e6fd9d0f10cb030443922e1b8b25cd186e7173",
      bloxd_wasm_shader_pack: () => "749cb76383a9de0896958e82b823c3a4f9479f89c71e25be0da5c1167b8eeea1"
    };
    var eJ = ZJ(5971);

    function XJ(JJ) {
      const cJ = Object.prototype.hasOwnProperty.call(UJ, JJ) ? UJ[JJ]() : void 0;
      if (void 0 !== cJ) return {
        sha256: cJ,
        onMismatch: eJ.t
      };
      throw new FJ.j(`${JJ} has no release digest, so this build refuses it`)
    }
  },
  5982: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => mJ,
      d: () => QJ,
      h: () => rJ,
      k: () => xJ
    });
    var FJ = ZJ(5986);
    const UJ = 6,
      eJ = 3,
      XJ = 1,
      AJ = 2,
      qJ = 4,
      jJ = 8,
      YJ = 16,
      hJ = 32,
      DJ = 64,
      sJ = 128,
      nJ = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function GJ(JJ) {
      if (!JJ) return 0;
      const cJ = nJ.indexOf(JJ);
      if (cJ <= 0) throw new Error(`"${JJ}" is not a shader pack hook function`);
      return cJ
    }

    function fJ(JJ) {
      if (0 === JJ) return null;
      const cJ = nJ[JJ];
      if (void 0 === cJ) throw new Error(`${JJ} is not a shader pack hook function id`);
      return cJ
    }

    function xJ(JJ) {
      const cJ = FJ.c.length;
      return {
        strict: JJ >= cJ,
        program: FJ.c[JJ % cJ]
      }
    }

    function rJ(JJ) {
      return Number(JJ.strict) * FJ.c.length + FJ.c.indexOf(JJ.program)
    }

    function vJ(JJ) {
      return "" === JJ ? [] : JJ.split(" ")
    }

    function mJ(JJ) {
      const cJ = {
        variantFlags: new Uint8Array(UJ),
        hooks: new Uint8Array(UJ * eJ),
        moduleCodes: Array(UJ).fill(""),
        reads: Array(2 * UJ).fill("")
      };
      for (const ZJ of JJ) {
        const JJ = rJ(ZJ.key),
          FJ = (JJ, cJ) => null === ZJ.hooks.surface || ZJ.reads.fragment.includes(JJ) ? 0 : cJ;
        cJ.variantFlags[JJ] = (ZJ.sceneDepth ? XJ : 0) | (ZJ.movesVertices ? AJ : 0) | (ZJ.sunShadow ? qJ : 0) | (ZJ.airShadow ? jJ : 0) | (ZJ.discards ? YJ : 0) | FJ("localPosition", hJ) | FJ("enchantSpeed", DJ) | FJ("enchantTier", sJ), cJ.hooks[JJ * eJ] = GJ(ZJ.hooks.vertex), cJ.hooks[JJ * eJ + 1] = GJ(ZJ.hooks.surface), cJ.hooks[JJ * eJ + 2] = GJ(ZJ.hooks.light), cJ.moduleCodes[JJ] = ZJ.moduleCode, cJ.reads[2 * JJ] = ZJ.reads.vertex.join(" "), cJ.reads[2 * JJ + 1] = ZJ.reads.fragment.join(" ")
      }
      return cJ
    }

    function QJ(JJ) {
      const {
        hooks: cJ,
        moduleCodes: ZJ,
        reads: FJ
      } = JJ;
      return Array.from(JJ.variantFlags, ((JJ, UJ) => {
        const hJ = UJ * eJ;
        return {
          key: xJ(UJ),
          hooks: {
            vertex: fJ(cJ[hJ]),
            surface: fJ(cJ[hJ + 1]),
            light: fJ(cJ[hJ + 2])
          },
          moduleCode: ZJ[UJ],
          sceneDepth: 0 !== (JJ & XJ),
          sunShadow: 0 !== (JJ & qJ),
          airShadow: 0 !== (JJ & jJ),
          movesVertices: 0 !== (JJ & AJ),
          discards: 0 !== (JJ & YJ),
          reads: {
            vertex: vJ(FJ[2 * UJ]),
            fragment: vJ(FJ[2 * UJ + 1])
          }
        }
      }))
    }
  },
  5986: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ,
      f: () => UJ,
      j: () => eJ
    });
    const FJ = ["terrain", "liquid", "model"];

    function UJ(JJ) {
      return !JJ.hooks.vertex && !JJ.hooks.surface && !JJ.hooks.light
    }

    function eJ(JJ, cJ) {
      return "off" !== cJ && (null === JJ || JJ.some((JJ => JJ.key.strict === ("strict" === cJ) && !UJ(JJ))))
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);