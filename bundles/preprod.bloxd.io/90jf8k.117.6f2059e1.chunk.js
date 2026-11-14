export const id = 117;
export const ids = [117];
export const modules = {
  5589: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      loadPageShaderPackCompiler: () => eW
    });
    var CF = {};
    SF.r(CF), SF.d(CF, {
      giF: () => AF,
      RhF: () => uF,
      default: () => wF,
      tiF: () => hF,
      TRF: () => bW,
      initSync: () => KF,
      EF: () => dF,
      WPF: () => PF,
      aiF: () => RF,
      kiF: () => iW,
      DWF: () => eF,
      qiF: () => EF,
      NWF: () => QF,
      VRF: () => rW
    });
    class AF {
      static __wrap(FF) {
        const WF = Object.create(AF.prototype);
        return WF.__wbg_ptr = FF, tW.register(WF, WF.__wbg_ptr, WF), WF
      }
      __destroy_into_raw() {
        const FF = this.__wbg_ptr;
        return this.__wbg_ptr = 0, tW.unregister(this), FF
      }
      free() {
        const FF = this.__destroy_into_raw();
        sF.isIX(FF, 0)
      }
      get errorsJson() {
        let FF, WF;
        try {
          const SF = sF.QXjh(this.__wbg_ptr);
          return FF = SF[0], WF = SF[1], NF(SF[0], SF[1])
        } finally {
          sF.zbN8(FF, WF, 1)
        }
      }
      get features() {
        const FF = sF.RrFQ(this.__wbg_ptr);
        var WF = aW(FF[0], FF[1]);
        return sF.zbN8(FF[0], 4 * FF[1], 4), WF
      }
      get hooks() {
        const FF = sF.kvj3(this.__wbg_ptr);
        var WF = kW(FF[0], FF[1]).slice();
        return sF.zbN8(FF[0], 1 * FF[1], 1), WF
      }
      mapValidationMessage(FF, WF, SF, CF, AF) {
        let uF, hF;
        try {
          const PF = sF.rBsL(this.__wbg_ptr, FF, WF, SF, TF(CF), TF(AF));
          var bW = PF[0],
            dF = PF[1];
          if (PF[3]) throw bW = 0, dF = 0, MF(PF[2]);
          return uF = bW, hF = dF, NF(bW, dF)
        } finally {
          sF.zbN8(uF, hF, 1)
        }
      }
      get moduleCodes() {
        const FF = sF.SNcg(this.__wbg_ptr);
        var WF = aW(FF[0], FF[1]);
        return sF.zbN8(FF[0], 4 * FF[1], 4), WF
      }
      get offInStrictJson() {
        let FF, WF;
        try {
          const SF = sF.UOck(this.__wbg_ptr);
          return FF = SF[0], WF = SF[1], NF(SF[0], SF[1])
        } finally {
          sF.zbN8(FF, WF, 1)
        }
      }
      get reads() {
        const FF = sF.gJBH(this.__wbg_ptr);
        var WF = aW(FF[0], FF[1]);
        return sF.zbN8(FF[0], 4 * FF[1], 4), WF
      }
      get validationModuleCodes() {
        const FF = sF.JKRk(this.__wbg_ptr);
        var WF = aW(FF[0], FF[1]);
        return sF.zbN8(FF[0], 4 * FF[1], 4), WF
      }
      get validationModuleKeys() {
        const FF = sF.FCWP(this.__wbg_ptr);
        var WF = kW(FF[0], FF[1]).slice();
        return sF.zbN8(FF[0], 1 * FF[1], 1), WF
      }
      get variantFlags() {
        const FF = sF.tiQ2(this.__wbg_ptr);
        var WF = kW(FF[0], FF[1]).slice();
        return sF.zbN8(FF[0], 1 * FF[1], 1), WF
      }
    }

    function uF(FF, WF, SF, CF, uF, hF, bW) {
      const dF = YF(FF, sF.EVNO),
        PF = nF,
        RF = YF(WF, sF.EVNO),
        iW = nF,
        eF = YF(SF, sF.EVNO),
        EF = nF,
        QF = oF(CF, sF.EVNO),
        rW = nF,
        gW = YF(uF, sF.EVNO),
        tW = nF,
        TF = YF(hF, sF.EVNO),
        aW = nF,
        kW = YF(bW, sF.EVNO),
        qW = nF,
        VF = sF.hZ76(dF, PF, RF, iW, eF, EF, QF, rW, gW, tW, TF, aW, kW, qW);
      if (VF[2]) throw MF(VF[1]);
      return AF.__wrap(VF[0])
    }

    function hF() {
      const FF = sF.m5ro();
      var WF = aW(FF[0], FF[1]);
      return sF.zbN8(FF[0], 4 * FF[1], 4), WF
    }

    function bW() {
      const FF = sF.rin9();
      var WF = aW(FF[0], FF[1]);
      return sF.zbN8(FF[0], 4 * FF[1], 4), WF
    }

    function dF() {
      sF.SaSR()
    }

    function PF(FF, WF, SF, CF, AF) {
      let uF, hF;
      try {
        const PF = YF(FF, sF.EVNO),
          RF = nF,
          iW = oF(WF, sF.EVNO),
          eF = nF,
          EF = YF(SF, sF.EVNO),
          QF = nF,
          rW = oF(CF, sF.EVNO),
          gW = nF,
          tW = function(FF, WF) {
            const SF = WF(1 * FF.length, 1) >>> 0;
            return mW().set(FF, SF / 1), nF = FF.length, SF
          }(AF, sF.EVNO),
          TF = nF,
          aW = sF.eQQ8(PF, RF, iW, eF, EF, QF, rW, gW, tW, TF);
        var bW = aW[0],
          dF = aW[1];
        if (aW[3]) throw bW = 0, dF = 0, MF(aW[2]);
        return uF = bW, hF = dF, NF(bW, dF)
      } finally {
        sF.zbN8(uF, hF, 1)
      }
    }

    function RF() {
      let FF, WF;
      try {
        const SF = sF.Kbm1();
        return FF = SF[0], WF = SF[1], NF(SF[0], SF[1])
      } finally {
        sF.zbN8(FF, WF, 1)
      }
    }

    function iW(FF) {
      let WF, SF;
      try {
        const uF = sF.Bd3c(FF);
        var CF = uF[0],
          AF = uF[1];
        if (uF[3]) throw CF = 0, AF = 0, MF(uF[2]);
        return WF = CF, SF = AF, NF(CF, AF)
      } finally {
        sF.zbN8(WF, SF, 1)
      }
    }

    function eF() {
      return sF.C6FK() >>> 0
    }

    function EF() {
      let FF, WF;
      try {
        const SF = sF.kptr();
        return FF = SF[0], WF = SF[1], NF(SF[0], SF[1])
      } finally {
        sF.zbN8(FF, WF, 1)
      }
    }

    function QF(FF, WF) {
      let SF, CF;
      try {
        const hF = YF(FF, sF.EVNO),
          bW = nF,
          dF = oF(WF, sF.EVNO),
          PF = nF,
          RF = sF.Nr5v(hF, bW, dF, PF);
        var AF = RF[0],
          uF = RF[1];
        if (RF[3]) throw AF = 0, uF = 0, MF(RF[2]);
        return SF = AF, CF = uF, NF(AF, uF)
      } finally {
        sF.zbN8(SF, CF, 1)
      }
    }

    function rW(FF) {
      let WF, SF;
      try {
        const uF = sF.bV9T(TF(FF));
        var CF = uF[0],
          AF = uF[1];
        if (uF[3]) throw CF = 0, AF = 0, MF(uF[2]);
        return WF = CF, SF = AF, NF(CF, AF)
      } finally {
        sF.zbN8(WF, SF, 1)
      }
    }

    function gW() {
      return {
        __proto__: null,
        tffa: {
          __proto__: null,
          cIw9: function(FF, WF) {
            return TF(Error(NF(FF, WF)))
          },
          EWqa: function(FF) {
            return null === OF(FF)
          },
          UKj3: function(FF) {
            return "string" === typeof OF(FF)
          },
          GIXs: function(FF, WF) {
            const SF = OF(WF),
              CF = "string" === typeof SF ? SF : void 0;
            var AF, uF = void 0 === (AF = CF) || null === AF ? 0 : function(FF, WF, SF) {
                if (void 0 === SF) {
                  const SF = IF.encode(FF),
                    CF = WF(SF.length, 1) >>> 0;
                  return mW().subarray(CF, CF + SF.length).set(SF), nF = SF.length, CF
                }
                let CF = FF.length,
                  AF = WF(CF, 1) >>> 0;
                const uF = mW();
                let hF = 0;
                for (; hF < CF; hF++) {
                  const WF = FF.charCodeAt(hF);
                  if (WF > 127) break;
                  uF[AF + hF] = WF
                }
                if (hF !== CF) {
                  0 !== hF && (FF = FF.slice(hF)), AF = SF(AF, CF, CF = hF + 3 * FF.length, 1) >>> 0;
                  const WF = mW().subarray(AF + hF, AF + CF);
                  hF += IF.encodeInto(FF, WF).written, AF = SF(AF, CF, hF, 1) >>> 0
                }
                return nF = hF, AF
              }(CF, sF.EVNO, sF.IP4y),
              hF = nF;
            VF().setInt32(FF + 4, hF, !0), VF().setInt32(FF + 0, uF, !0)
          },
          hUak: function(FF, WF) {
            throw new Error(NF(FF, WF))
          },
          WX73: function(FF, WF) {
            return OF(FF).charCodeAt(WF >>> 0)
          },
          YOhp: function(FF, WF) {
            console.error(NF(FF, WF))
          },
          QhaV: function(FF) {
            return OF(FF).length
          },
          XKJD: function(FF, WF) {
            return TF(NF(FF, WF))
          },
          y31I: function(FF) {
            MF(FF)
          }
        }
      }
    }
    Symbol.dispose && (AF.prototype[Symbol.dispose] = AF.prototype.free);
    const tW = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((FF => sF.isIX(FF, 1)));

    function TF(FF) {
      ZF === xW.length && xW.push(xW.length + 1);
      const WF = ZF;
      return ZF = xW[WF], xW[WF] = FF, WF
    }

    function aW(FF, WF) {
      FF >>>= 0;
      const SF = VF(),
        CF = [];
      for (let AF = FF; AF < FF + 4 * WF; AF += 4) CF.push(MF(SF.getUint32(AF, !0)));
      return CF
    }

    function kW(FF, WF) {
      return FF >>>= 0, mW().subarray(FF / 1, FF / 1 + WF)
    }
    let qW = null;

    function VF() {
      return (null === qW || !0 === qW.buffer.detached || void 0 === qW.buffer.detached && qW.buffer !== sF.memory.buffer) && (qW = new DataView(sF.memory.buffer)), qW
    }

    function NF(FF, WF) {
      return function(FF, WF) {
        zW += WF, zW >= GF && (cW = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), cW.decode(), zW = WF);
        return cW.decode(mW().subarray(FF, FF + WF))
      }(FF >>> 0, WF)
    }
    let DF = null;
    let LF = null;

    function mW() {
      return null !== LF && 0 !== LF.byteLength || (LF = new Uint8Array(sF.memory.buffer)), LF
    }

    function OF(FF) {
      return xW[FF]
    }
    let xW = new Array(1024).fill(void 0);
    xW.push(void 0, null, !0, !1);
    let ZF = xW.length;

    function oF(FF, WF) {
      const SF = WF(4 * FF.length, 4) >>> 0;
      return (null !== DF && 0 !== DF.byteLength || (DF = new Uint32Array(sF.memory.buffer)), DF).set(FF, SF / 4), nF = FF.length, SF
    }

    function YF(FF, WF) {
      const SF = WF(4 * FF.length, 4) >>> 0,
        CF = VF();
      for (let AF = 0; AF < FF.length; AF++) CF.setUint32(SF + 4 * AF, TF(FF[AF]), !0);
      return nF = FF.length, SF
    }

    function MF(FF) {
      const WF = OF(FF);
      return function(FF) {
        FF < 1028 || (xW[FF] = ZF, ZF = FF)
      }(FF), WF
    }
    let cW = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    cW.decode();
    const GF = 2146435072;
    let zW = 0;
    const IF = new TextEncoder;
    "encodeInto" in IF || (IF.encodeInto = function(FF, WF) {
      const SF = IF.encode(FF);
      return WF.set(SF), {
        read: FF.length,
        written: SF.length
      }
    });
    let fF, yW, sF, nF = 0;

    function HF(FF, WF) {
      return yW = FF, sF = FF.exports, fF = WF, qW = null, DF = null, LF = null, sF.XVzD(), sF
    }

    function KF(FF) {
      if (void 0 !== sF) return sF;
      void 0 !== FF && (Object.getPrototypeOf(FF) === Object.prototype ? ({
        module: FF
      } = FF) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const WF = gW();
      FF instanceof WebAssembly.Module || (FF = new WebAssembly.Module(FF));
      return HF(new WebAssembly.Instance(FF, WF), FF)
    }
    async function wF(FF) {
      if (void 0 !== sF) return sF;
      void 0 !== FF && (Object.getPrototypeOf(FF) === Object.prototype ? ({
        module_or_path: FF
      } = FF) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const WF = gW();
      ("string" === typeof FF || "function" === typeof Request && FF instanceof Request || "function" === typeof URL && FF instanceof URL) && (FF = fetch(FF));
      const {
        instance: SF,
        module: CF
      } = await async function(FF, WF) {
        if ("function" === typeof Response && FF instanceof Response) {
          if (!FF.ok) throw new Error(`failed to fetch Wasm: ${FF.status} ${FF.statusText} fetching '${FF.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(FF, WF)
          } catch (SF) {
            if (! function(FF) {
                switch (FF) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(FF.type) || "application/wasm" === FF.headers.get("Content-Type")) throw SF;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", SF)
          }
          const CF = await FF.arrayBuffer();
          return await WebAssembly.instantiate(CF, WF)
        } {
          const SF = await WebAssembly.instantiate(FF, WF);
          return SF instanceof WebAssembly.Instance ? {
            instance: SF,
            module: FF
          } : SF
        }
      }(await FF, WF);
      return HF(SF, CF)
    }
    var XF = SF(2906),
      UF = SF(5592);
    class BF extends Error {
      stage;
      constructor(FF, WF) {
        super((0, XF.t)(FF, WF), {
          cause: WF
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = FF
      }
    }
    let jW = null,
      vW = null;

    function JF() {
      return jW ? Promise.resolve(jW) : (vW || (vW = async function() {
        let FF;
        try {
          FF = await (0, XF.w)(new SF.U(SF(5599)), (0, UF.c)("bloxd_wasm_shader_pack"))
        } catch (WF) {
          throw new BF((0, XF.C)(WF), WF)
        }
        try {
          await wF({
            module_or_path: FF
          })
        } catch (WF) {
          throw new BF("instantiate", WF)
        }
        return jW = CF, jW
      }(), vW.then(void 0, (() => {
        vW = null
      }))), vW)
    }
    var pF = SF(5610);

    function lF(FF) {
      let [WF, SF, CF, AF] = FF;
      const uF = {
        file: WF,
        line: SF,
        message: CF
      };
      return AF && (uF.variants = AF.map(pF.j)), uF
    }

    function FW(FF) {
      return JSON.parse(FF).map(lF)
    }

    function WW(FF, WF) {
      if (!Number.isInteger(FF) || FF < 0 || FF > 4294967295) throw new Error(`${WF} ${FF} is not a whole number from 0 to 4294967295`);
      return FF
    }

    function SW(FF) {
      return [FF.named.map((FF => FF.name)), Uint32Array.from(FF.named, (FF => WW(FF.id, "Texture ID")))]
    }
    const CW = new WeakMap;
    const AW = new WeakMap,
      uW = new WeakSet;

    function hW(FF, WF) {
      if (uW.has(FF)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return WF()
      } catch (SF) {
        throw SF instanceof WebAssembly.RuntimeError && uW.add(FF), SF
      }
    }

    function bS(FF) {
      let WF = AW.get(FF);
      if (!WF) {
        let SF, CF;
        WF = {
          RhF: (WF, SF) => hW(FF, (() => function(FF, WF, SF) {
            const CF = FF.RhF(WF.map((FF => FF.path)), WF.map((FF => FF.source)), ...SW(SF), SF.aliases.map((FF => FF.name)), SF.aliases.map((FF => FF.texture)), SF.aliases.map((FF => FF.kind)));
            let AF = !1;
            try {
              const FF = CF.validationModuleCodes,
                WF = Array.from(CF.validationModuleKeys, ((WF, SF) => ({
                  key: (0, pF.j)(WF),
                  code: FF[SF]
                }))),
                SF = {
                  errors: FW(CF.errorsJson),
                  offInStrict: FW(CF.offInStrictJson),
                  variants: (0, pF.g)(CF),
                  validationModules: WF,
                  features: CF.features
                };
              return WF.forEach(((FF, WF) => {
                CW.set(FF, {
                  pack: CF,
                  index: WF
                })
              })), AF = WF.length > 0, SF
            } finally {
              AF || CF.free()
            }
          }(FF, WF, SF))),
          mapValidationMessage: (WF, SF) => {
            const CF = CW.get(WF);
            if (!CF) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return lF(JSON.parse(hW(FF, (() => CF.pack.mapValidationMessage(CF.index, SF.lineNum, SF.linePos, SF.message, SF.type)))))
          },
          WPF: WF => hW(FF, (() => function(FF, WF) {
            const SF = new Int32Array(WF.length),
              CF = [];
            return WF.forEach(((FF, WF) => {
              SF[WF] = FF.variants ? FF.variants.length : -1;
              for (const SF of FF.variants ?? []) CF.push((0, pF.i)(SF))
            })), FW(FF.WPF(WF.map((FF => FF.file)), Uint32Array.from(WF, (FF => WW(FF.line, "Diagnostic line"))), WF.map((FF => FF.message)), SF, Uint8Array.from(CF)))
          }(FF, WF))),
          NWF: WF => hW(FF, (() => FF.NWF(...SW(WF)))),
          get SHADER_PACK_HEADER_VERSION() {
            return SF ??= hW(FF, (() => FF.qiF())), SF
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return CF ??= hW(FF, (() => {
              const WF = FF.TRF();
              return FF.tiF().map(((FF, SF) => ({
                path: FF,
                source: WF[SF]
              })))
            })), CF
          },
          VRF: WF => hW(FF, (() => FF.VRF(WF))),
          resolveHeader: WF => hW(FF, (() => FF.kiF((0, pF.i)(WF)))),
          aiF: () => hW(FF, (() => FF.aiF()))
        }, AW.set(FF, WF)
      }
      return WF
    }
    var dW = SF(2413),
      PW = SF(5603);
    const RW = "bloxdShaderPackWasmFailureReported";
    let iS = null;

    function eW() {
      return iS ??= async function() {
        if ("undefined" === typeof WebAssembly) return EW("unsupported", "This browser has no WebAssembly"), null;
        const FF = (0, PW.loadShaderPackTextures)().then((() => !0), (FF => (console.error("Could not load the shader pack textures, so shader packs can't run", FF), !1)));
        try {
          const WF = await async function() {
            let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JF;
            return bS(await FF())
          }();
          return await FF ? WF : null
        } catch (WF) {
          const FF = WF instanceof Error ? WF.message : String(WF);
          return EW(dW.c[WF instanceof BF ? WF.stage : "instantiate"], FF), null
        }
      }(), iS
    }

    function EW(FF, WF) {
      (0, dW.i)(RW, `Shader pack wasm ${FF}, so shader packs can't run: ${WF}`, WF, `shader_pack_${FF}`)
    }
  },
  5599: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/bloxd_wasm_shader_pack_bg.25d7f16e2e76e98cc6eb.wasm"
  },
  5592: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF
    });
    var CF = SF(2906);
    const AF = {
      bloxd_wasm: () => "efcb444ad55054c75697ffc5686b17c1e3eb879bb002e111d264400e5de1a7ef",
      bloxd_wasm_client: () => "65255c90568b92887cb7530f65eed7c264bd4d50f08bc9bc108e00e98823fda1",
      bloxd_wasm_workers: () => "2cf8c5bb27543bd4c7dd6eabc3ff93edf11951f5cdb3a91906a467fc555106a3",
      bloxd_wasm_models: () => "a35d9de38e3cf77c5e0fd6302e8d6441c7b74c8d7bbbc2107b391ee98e2a8705",
      bloxd_wasm_webgpu: () => "4651122938542673b8d1bb5182e5a3e9ea54388c7db91adaeb4e878c90357e28",
      bloxd_wasm_webgl: () => "2da9697d5fa07af2fa6a6c154de5747af69b0b82f9d43c42e23748cb38e5d792",
      bloxd_wasm_webgl1: () => "3291109b80221408283e1499ae815394058938b8c353b9666d4b000ec38111b5",
      bloxd_wasm_replay: () => "fbae3a18b4e1534e284a9b41c64ea1f4ca46295ede9f96f6f2eb289bfbc00eb7",
      bloxd_wasm_recorder: () => "4da07565cbac43c165e972a237929edb5cb5009240c5c6feb67a3d80d0a13d20",
      bloxd_wasm_anim: () => "92ff8c8ca8cb8ec6f988da657ebcbaa7cc34b2565776af355950e873d8dba0ec",
      bloxd_wasm_textures: () => "87d7ce2c083790ea891ab410fab82340e4cae9ea4816c1f40ed5a2411f277fef",
      bloxd_wasm_shader_pack: () => "0618b025e02df188195cc584c0eaec51b0034deee6589ca394e966c72f4d3bfa"
    };
    var uF = SF(5597);

    function hF(FF) {
      const WF = Object.prototype.hasOwnProperty.call(AF, FF) ? AF[FF]() : void 0;
      if (void 0 !== WF) return {
        sha256: WF,
        onMismatch: uF.x
      };
      throw new CF.g(`${FF} has no release digest, so this build refuses it`)
    }
  },
  5610: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => tW,
      g: () => TF,
      i: () => rW,
      j: () => QF
    });
    var CF = SF(5619);
    const AF = 6,
      uF = 3,
      hF = 1,
      bW = 2,
      dF = 4,
      PF = 8,
      RF = 16,
      iW = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function eF(FF) {
      if (!FF) return 0;
      const WF = iW.indexOf(FF);
      if (WF <= 0) throw new Error(`"${FF}" is not a shader pack hook function`);
      return WF
    }

    function EF(FF) {
      if (0 === FF) return null;
      const WF = iW[FF];
      if (void 0 === WF) throw new Error(`${FF} is not a shader pack hook function id`);
      return WF
    }

    function QF(FF) {
      const WF = CF.e.length;
      return {
        strict: FF >= WF,
        program: CF.e[FF % WF]
      }
    }

    function rW(FF) {
      return Number(FF.strict) * CF.e.length + CF.e.indexOf(FF.program)
    }

    function gW(FF) {
      return "" === FF ? [] : FF.split(" ")
    }

    function tW(FF) {
      const WF = {
        variantFlags: new Uint8Array(AF),
        hooks: new Uint8Array(AF * uF),
        moduleCodes: Array(AF).fill(""),
        reads: Array(2 * AF).fill("")
      };
      for (const SF of FF) {
        const FF = rW(SF.key);
        WF.variantFlags[FF] = (SF.sceneDepth ? hF : 0) | (SF.movesVertices ? bW : 0) | (SF.sunShadow ? dF : 0) | (SF.airShadow ? PF : 0) | (SF.discards ? RF : 0), WF.hooks[FF * uF] = eF(SF.hooks.vertex), WF.hooks[FF * uF + 1] = eF(SF.hooks.surface), WF.hooks[FF * uF + 2] = eF(SF.hooks.light), WF.moduleCodes[FF] = SF.moduleCode, WF.reads[2 * FF] = SF.reads.vertex.join(" "), WF.reads[2 * FF + 1] = SF.reads.fragment.join(" ")
      }
      return WF
    }

    function TF(FF) {
      const {
        hooks: WF,
        moduleCodes: SF,
        reads: CF
      } = FF;
      return Array.from(FF.variantFlags, ((FF, AF) => {
        const iW = AF * uF;
        return {
          key: QF(AF),
          hooks: {
            vertex: EF(WF[iW]),
            surface: EF(WF[iW + 1]),
            light: EF(WF[iW + 2])
          },
          moduleCode: SF[AF],
          sceneDepth: 0 !== (FF & hF),
          sunShadow: 0 !== (FF & dF),
          airShadow: 0 !== (FF & PF),
          movesVertices: 0 !== (FF & bW),
          discards: 0 !== (FF & RF),
          reads: {
            vertex: gW(CF[2 * AF]),
            fragment: gW(CF[2 * AF + 1])
          }
        }
      }))
    }
  },
  5619: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF,
      h: () => AF,
      j: () => uF
    });
    const CF = ["terrain", "liquid", "model"];

    function AF(FF) {
      return !FF.hooks.vertex && !FF.hooks.surface && !FF.hooks.light
    }

    function uF(FF, WF) {
      return "off" !== WF && (null === FF || FF.some((FF => FF.key.strict === ("strict" === WF) && !AF(FF))))
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);