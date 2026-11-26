export const id = 149;
export const ids = [149];
export const modules = {
  7165: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      loadPageShaderPackCompiler: () => YB
    });
    var AH = {};
    LH.r(AH), LH.d(AH, {
      uSH: () => rH,
      YBH: () => SH,
      default: () => wH,
      QSH: () => hH,
      WSH: () => tH,
      initSync: () => DH,
      LC: () => zH,
      rrH: () => CH,
      MSH: () => EH,
      xSH: () => XH,
      mN: () => GH,
      vSH: () => YH,
      kN: () => uH,
      PSH: () => QH
    });
    class rH {
      static __wrap(HH) {
        const BH = Object.create(rH.prototype);
        return BH.__wbg_ptr = HH, MH.register(BH, BH.__wbg_ptr, BH), BH
      }
      __destroy_into_raw() {
        const HH = this.__wbg_ptr;
        return this.__wbg_ptr = 0, MH.unregister(this), HH
      }
      free() {
        const HH = this.__destroy_into_raw();
        jH.yXy6(HH, 0)
      }
      get TSH() {
        let HH, BH;
        try {
          const LH = jH.lYVL(this.__wbg_ptr);
          return HH = LH[0], BH = LH[1], VH(LH[0], LH[1])
        } finally {
          jH.yknf(HH, BH, 1)
        }
      }
      get features() {
        const HH = jH.yofT(this.__wbg_ptr);
        var BH = vH(HH[0], HH[1]);
        return jH.yknf(HH[0], 4 * HH[1], 4), BH
      }
      get hooks() {
        const HH = jH.Zxpm(this.__wbg_ptr);
        var BH = PH(HH[0], HH[1]).slice();
        return jH.yknf(HH[0], 1 * HH[1], 1), BH
      }
      mapValidationMessage(HH, BH, LH, AH, rH) {
        let SH, hH;
        try {
          const CH = jH.oCZ7(this.__wbg_ptr, HH, BH, LH, xH(AH), xH(rH));
          var tH = CH[0],
            zH = CH[1];
          if (CH[3]) throw tH = 0, zH = 0, KH(CH[2]);
          return SH = tH, hH = zH, VH(tH, zH)
        } finally {
          jH.yknf(SH, hH, 1)
        }
      }
      get moduleCodes() {
        const HH = jH.BqTN(this.__wbg_ptr);
        var BH = vH(HH[0], HH[1]);
        return jH.yknf(HH[0], 4 * HH[1], 4), BH
      }
      get USH() {
        let HH, BH;
        try {
          const LH = jH.Kktb(this.__wbg_ptr);
          return HH = LH[0], BH = LH[1], VH(LH[0], LH[1])
        } finally {
          jH.yknf(HH, BH, 1)
        }
      }
      get reads() {
        const HH = jH.H5f3(this.__wbg_ptr);
        var BH = vH(HH[0], HH[1]);
        return jH.yknf(HH[0], 4 * HH[1], 4), BH
      }
      get validationModuleCodes() {
        const HH = jH.i0in(this.__wbg_ptr);
        var BH = vH(HH[0], HH[1]);
        return jH.yknf(HH[0], 4 * HH[1], 4), BH
      }
      get validationModuleKeys() {
        const HH = jH.BUaE(this.__wbg_ptr);
        var BH = PH(HH[0], HH[1]).slice();
        return jH.yknf(HH[0], 1 * HH[1], 1), BH
      }
      get variantFlags() {
        const HH = jH.GfFX(this.__wbg_ptr);
        var BH = PH(HH[0], HH[1]).slice();
        return jH.yknf(HH[0], 1 * HH[1], 1), BH
      }
    }

    function SH(HH, BH, LH, AH, SH, hH, tH) {
      const zH = lH(HH, jH.VXKa),
        CH = nH,
        EH = lH(BH, jH.VXKa),
        XH = nH,
        GH = lH(LH, jH.VXKa),
        YH = nH,
        uH = fH(AH, jH.VXKa),
        QH = nH,
        WH = lH(SH, jH.VXKa),
        MH = nH,
        xH = lH(hH, jH.VXKa),
        vH = nH,
        PH = lH(tH, jH.VXKa),
        TH = nH,
        UH = jH.GYVe(zH, CH, EH, XH, GH, YH, uH, QH, WH, MH, xH, vH, PH, TH);
      if (UH[2]) throw KH(UH[1]);
      return rH.__wrap(UH[0])
    }

    function hH() {
      const HH = jH.wa2i();
      var BH = vH(HH[0], HH[1]);
      return jH.yknf(HH[0], 4 * HH[1], 4), BH
    }

    function tH() {
      const HH = jH.UsjA();
      var BH = vH(HH[0], HH[1]);
      return jH.yknf(HH[0], 4 * HH[1], 4), BH
    }

    function zH() {
      jH.Qqsh()
    }

    function CH(HH, BH, LH, AH, rH) {
      let SH, hH;
      try {
        const CH = lH(HH, jH.VXKa),
          EH = nH,
          XH = fH(BH, jH.VXKa),
          GH = nH,
          YH = lH(LH, jH.VXKa),
          uH = nH,
          QH = fH(AH, jH.VXKa),
          WH = nH,
          MH = function(HH, BH) {
            const LH = BH(1 * HH.length, 1) >>> 0;
            return kH().set(HH, LH / 1), nH = HH.length, LH
          }(rH, jH.VXKa),
          xH = nH,
          vH = jH.rHAR(CH, EH, XH, GH, YH, uH, QH, WH, MH, xH);
        var tH = vH[0],
          zH = vH[1];
        if (vH[3]) throw tH = 0, zH = 0, KH(vH[2]);
        return SH = tH, hH = zH, VH(tH, zH)
      } finally {
        jH.yknf(SH, hH, 1)
      }
    }

    function EH() {
      let HH, BH;
      try {
        const LH = jH.dkzi();
        return HH = LH[0], BH = LH[1], VH(LH[0], LH[1])
      } finally {
        jH.yknf(HH, BH, 1)
      }
    }

    function XH(HH) {
      let BH, LH;
      try {
        const SH = jH.SwqP(HH);
        var AH = SH[0],
          rH = SH[1];
        if (SH[3]) throw AH = 0, rH = 0, KH(SH[2]);
        return BH = AH, LH = rH, VH(AH, rH)
      } finally {
        jH.yknf(BH, LH, 1)
      }
    }

    function GH() {
      return jH.Xtdm() >>> 0
    }

    function YH() {
      let HH, BH;
      try {
        const LH = jH.kZzI();
        return HH = LH[0], BH = LH[1], VH(LH[0], LH[1])
      } finally {
        jH.yknf(HH, BH, 1)
      }
    }

    function uH(HH, BH) {
      let LH, AH;
      try {
        const hH = lH(HH, jH.VXKa),
          tH = nH,
          zH = fH(BH, jH.VXKa),
          CH = nH,
          EH = jH.QXYa(hH, tH, zH, CH);
        var rH = EH[0],
          SH = EH[1];
        if (EH[3]) throw rH = 0, SH = 0, KH(EH[2]);
        return LH = rH, AH = SH, VH(rH, SH)
      } finally {
        jH.yknf(LH, AH, 1)
      }
    }

    function QH(HH) {
      let BH, LH;
      try {
        const SH = jH.eLzA(xH(HH));
        var AH = SH[0],
          rH = SH[1];
        if (SH[3]) throw AH = 0, rH = 0, KH(SH[2]);
        return BH = AH, LH = rH, VH(AH, rH)
      } finally {
        jH.yknf(BH, LH, 1)
      }
    }

    function WH() {
      return {
        __proto__: null,
        BaWg: {
          __proto__: null,
          njkq: function(HH, BH) {
            return xH(Error(VH(HH, BH)))
          },
          HkDD: function(HH) {
            return null === mH(HH)
          },
          cHO0: function(HH) {
            return "string" === typeof mH(HH)
          },
          S96P: function(HH, BH) {
            const LH = mH(BH),
              AH = "string" === typeof LH ? LH : void 0;
            var rH, SH = void 0 === (rH = AH) || null === rH ? 0 : function(HH, BH, LH) {
                if (void 0 === LH) {
                  const LH = gH.encode(HH),
                    AH = BH(LH.length, 1) >>> 0;
                  return kH().subarray(AH, AH + LH.length).set(LH), nH = LH.length, AH
                }
                let AH = HH.length,
                  rH = BH(AH, 1) >>> 0;
                const SH = kH();
                let hH = 0;
                for (; hH < AH; hH++) {
                  const BH = HH.charCodeAt(hH);
                  if (BH > 127) break;
                  SH[rH + hH] = BH
                }
                if (hH !== AH) {
                  0 !== hH && (HH = HH.slice(hH)), rH = LH(rH, AH, AH = hH + 3 * HH.length, 1) >>> 0;
                  const BH = kH().subarray(rH + hH, rH + AH);
                  hH += gH.encodeInto(HH, BH).written, rH = LH(rH, AH, hH, 1) >>> 0
                }
                return nH = hH, rH
              }(AH, jH.VXKa, jH.JKnJ),
              hH = nH;
            UH().setInt32(HH + 4, hH, !0), UH().setInt32(HH + 0, SH, !0)
          },
          NA8v: function(HH, BH) {
            throw new Error(VH(HH, BH))
          },
          N5jM: function(HH, BH) {
            return mH(HH).charCodeAt(BH >>> 0)
          },
          gx4C: function(HH, BH) {
            console.error(VH(HH, BH))
          },
          DvWL: function(HH) {
            return mH(HH).length
          },
          tIFu: function(HH, BH) {
            return xH(VH(HH, BH))
          },
          m9XL: function(HH) {
            KH(HH)
          }
        }
      }
    }
    Symbol.dispose && (rH.prototype[Symbol.dispose] = rH.prototype.free);
    const MH = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((HH => jH.yXy6(HH, 1)));

    function xH(HH) {
      IH === oH.length && oH.push(oH.length + 1);
      const BH = IH;
      return IH = oH[BH], oH[BH] = HH, BH
    }

    function vH(HH, BH) {
      HH >>>= 0;
      const LH = UH(),
        AH = [];
      for (let rH = HH; rH < HH + 4 * BH; rH += 4) AH.push(KH(LH.getUint32(rH, !0)));
      return AH
    }

    function PH(HH, BH) {
      return HH >>>= 0, kH().subarray(HH / 1, HH / 1 + BH)
    }
    let TH = null;

    function UH() {
      return null !== TH && TH.buffer === jH.memory.buffer || (TH = new DataView(jH.memory.buffer)), TH
    }

    function VH(HH, BH) {
      return function(HH, BH) {
        qH += BH, qH >= eH && (cH = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), cH.decode(), qH = BH);
        return cH.decode(kH().subarray(HH, HH + BH))
      }(HH >>> 0, BH)
    }
    let OH = null;
    let bH = null;

    function kH() {
      return null !== bH && 0 !== bH.byteLength || (bH = new Uint8Array(jH.memory.buffer)), bH
    }

    function mH(HH) {
      return oH[HH]
    }
    let oH = new Array(1024).fill(void 0);
    oH.push(void 0, null, !0, !1);
    let IH = oH.length;

    function fH(HH, BH) {
      const LH = BH(4 * HH.length, 4) >>> 0;
      return (null !== OH && 0 !== OH.byteLength || (OH = new Uint32Array(jH.memory.buffer)), OH).set(HH, LH / 4), nH = HH.length, LH
    }

    function lH(HH, BH) {
      const LH = BH(4 * HH.length, 4) >>> 0,
        AH = UH();
      for (let rH = 0; rH < HH.length; rH++) AH.setUint32(LH + 4 * rH, xH(HH[rH]), !0);
      return nH = HH.length, LH
    }

    function KH(HH) {
      const BH = mH(HH);
      return function(HH) {
        HH < 1028 || (oH[HH] = IH, IH = HH)
      }(HH), BH
    }
    let cH = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    cH.decode();
    const eH = 2146435072;
    let qH = 0;
    const gH = new TextEncoder;
    "encodeInto" in gH || (gH.encodeInto = function(HH, BH) {
      const LH = gH.encode(HH);
      return BH.set(LH), {
        read: HH.length,
        written: LH.length
      }
    });
    let NH, RH, jH, nH = 0;

    function FH(HH, BH) {
      return RH = HH, jH = HH.exports, NH = BH, TH = null, OH = null, bH = null, jH.oyET(), jH
    }

    function DH(HH) {
      if (void 0 !== jH) return jH;
      void 0 !== HH && (Object.getPrototypeOf(HH) === Object.prototype ? ({
        module: HH
      } = HH) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const BH = WH();
      HH instanceof WebAssembly.Module || (HH = new WebAssembly.Module(HH));
      return FH(new WebAssembly.Instance(HH, BH), HH)
    }
    async function wH(HH) {
      if (void 0 !== jH) return jH;
      void 0 !== HH && (Object.getPrototypeOf(HH) === Object.prototype ? ({
        module_or_path: HH
      } = HH) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const BH = WH();
      ("string" === typeof HH || "function" === typeof Request && HH instanceof Request || "function" === typeof URL && HH instanceof URL) && (HH = fetch(HH));
      const {
        instance: LH,
        module: AH
      } = await async function(HH, BH) {
        if ("function" === typeof Response && HH instanceof Response) {
          if (!HH.ok) throw new Error(`failed to fetch Wasm: ${HH.status} ${HH.statusText} fetching '${HH.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(HH, BH)
          } catch (LH) {
            if (! function(HH) {
                switch (HH) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(HH.type) || "application/wasm" === HH.headers.get("Content-Type")) throw LH;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", LH)
          }
          const AH = await HH.arrayBuffer();
          return await WebAssembly.instantiate(AH, BH)
        } {
          const LH = await WebAssembly.instantiate(HH, BH);
          return LH instanceof WebAssembly.Instance ? {
            instance: LH,
            module: HH
          } : LH
        }
      }(await HH, BH);
      return FH(LH, AH)
    }
    var ZH = LH(3171),
      dH = LH(7172);
    class aH extends Error {
      stage;
      constructor(HH, BH) {
        super((0, ZH.F)(HH, BH), {
          cause: BH
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = HH
      }
    }
    let sH = null,
      JH = null;

    function iH() {
      return sH ? Promise.resolve(sH) : (JH || (JH = async function() {
        let HH;
        try {
          HH = await (0, ZH.J)(new LH.U(LH(7175)), (0, dH.c)("bloxd_wasm_shader_pack"))
        } catch (BH) {
          throw new aH((0, ZH.O)(BH), BH)
        }
        try {
          await wH({
            module_or_path: HH
          })
        } catch (BH) {
          throw new aH("instantiate", BH)
        }
        return sH = AH, sH
      }(), JH.then(void 0, (() => {
        JH = null
      }))), JH)
    }
    var pH = LH(7187);

    function yH(HH) {
      let [BH, LH, AH, rH] = HH;
      const SH = {
        file: BH,
        line: LH,
        message: AH
      };
      return rH && (SH.variants = rH.map(pH.p)), SH
    }

    function HB(HH) {
      return JSON.parse(HH).map(yH)
    }

    function BB(HH, BH) {
      if (!Number.isInteger(HH) || HH < 0 || HH > 4294967295) throw new Error(`${BH} ${HH} is not a whole number from 0 to 4294967295`);
      return HH
    }

    function LB(HH) {
      return [HH.named.map((HH => HH.name)), Uint32Array.from(HH.named, (HH => BB(HH.id, "Texture ID")))]
    }
    const AB = new WeakMap;
    const rB = new WeakMap,
      SB = new WeakSet;

    function hB(HH, BH) {
      if (SB.has(HH)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return BH()
      } catch (LH) {
        throw LH instanceof WebAssembly.RuntimeError && SB.add(HH), LH
      }
    }

    function tB(HH) {
      let BH = rB.get(HH);
      if (!BH) {
        let LH, AH;
        BH = {
          YBH: (BH, LH) => hB(HH, (() => function(HH, BH, LH) {
            const AH = HH.YBH(BH.map((HH => HH.path)), BH.map((HH => HH.source)), ...LB(LH), LH.aliases.map((HH => HH.name)), LH.aliases.map((HH => HH.texture)), LH.aliases.map((HH => HH.kind)));
            let rH = !1;
            try {
              const HH = AH.validationModuleCodes,
                BH = Array.from(AH.validationModuleKeys, ((BH, LH) => ({
                  key: (0, pH.p)(BH),
                  code: HH[LH]
                }))),
                LH = {
                  errors: HB(AH.TSH),
                  offInStrict: HB(AH.USH),
                  variants: (0, pH.h)(AH),
                  validationModules: BH,
                  features: AH.features
                };
              return BH.forEach(((HH, BH) => {
                AB.set(HH, {
                  pack: AH,
                  index: BH
                })
              })), rH = BH.length > 0, LH
            } finally {
              rH || AH.free()
            }
          }(HH, BH, LH))),
          mapValidationMessage: (BH, LH) => {
            const AH = AB.get(BH);
            if (!AH) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return yH(JSON.parse(hB(HH, (() => AH.pack.mapValidationMessage(AH.index, LH.lineNum, LH.linePos, LH.message, LH.type)))))
          },
          rrH: BH => hB(HH, (() => function(HH, BH) {
            const LH = new Int32Array(BH.length),
              AH = [];
            return BH.forEach(((HH, BH) => {
              LH[BH] = HH.variants ? HH.variants.length : -1;
              for (const LH of HH.variants ?? []) AH.push((0, pH.l)(LH))
            })), HB(HH.rrH(BH.map((HH => HH.file)), Uint32Array.from(BH, (HH => BB(HH.line, "Diagnostic line"))), BH.map((HH => HH.message)), LH, Uint8Array.from(AH)))
          }(HH, BH))),
          kN: BH => hB(HH, (() => HH.kN(...LB(BH)))),
          get SHADER_PACK_HEADER_VERSION() {
            return LH ??= hB(HH, (() => HH.vSH())), LH
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return AH ??= hB(HH, (() => {
              const BH = HH.WSH();
              return HH.QSH().map(((HH, LH) => ({
                path: HH,
                source: BH[LH]
              })))
            })), AH
          },
          PSH: BH => hB(HH, (() => HH.PSH(BH))),
          resolveHeader: BH => hB(HH, (() => HH.xSH((0, pH.l)(BH)))),
          MSH: () => hB(HH, (() => HH.MSH()))
        }, rB.set(HH, BH)
      }
      return BH
    }
    var zB = LH(3583),
      CB = LH(3595),
      EB = LH(7179);
    const XB = "bloxdShaderPackWasmFailureReported";
    let GB = null;

    function YB() {
      return GB ??= async function() {
        if ("undefined" === typeof WebAssembly) return uB("unsupported", "This browser has no WebAssembly"), null;
        const HH = (0, EB.loadShaderPackTextures)().then((() => !0), (HH => (console.error("Could not load the shader pack textures, so shader packs can't run", HH), !1)));
        try {
          await (0, CB.l)();
          const BH = await async function() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iH;
            return tB(await HH())
          }();
          return await HH ? BH : null
        } catch (BH) {
          const HH = BH instanceof Error ? BH.message : String(BH);
          return uB(zB.e[BH instanceof aH ? BH.stage : "instantiate"], HH), null
        }
      }(), GB
    }

    function uB(HH, BH) {
      (0, zB.l)(XB, `Shader pack wasm ${HH}, so shader packs can't run: ${BH}`, BH, `shader_pack_${HH}`)
    }
  },
  7175: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/bloxd_wasm_shader_pack_bg.b0afdf53b871ec12a20e.wasm"
  },
  7172: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH
    });
    var AH = LH(3171);
    const rH = {
      bloxd_wasm: () => "1a9ca3a508835437adb51fd7003f50a214824ce5852e2706a91af532afe51adc",
      bloxd_wasm_client: () => "9f302fa35bb62365f9d32f95a5401b1d28709799cd2ce60e443d8f43994a3e3d",
      bloxd_wasm_workers: () => "fea049daed4444b474b0db1a8bf4826a6e48ef50100b13d23f4bea2aa2ef7dbb",
      bloxd_wasm_models: () => "dafa53585131db414c9c059dee3ad89ee833dbd1a487c182d99120934368408f",
      bloxd_wasm_webgpu: () => "f7305e0c5434bf6438e555b6ebd02438a4b33e9ec1a95ef795555746fdd24844",
      bloxd_wasm_webgl: () => "ee0b380f26fef18564acf325d228b72d1e1361881cb2e2f9686c33d7b9b28c2e",
      bloxd_wasm_webgl1: () => "0cfbcf815fae6493c502153cc3696123db8dd68ba708a3ebe5ed4c9bdf52dd9d",
      bloxd_wasm_replay: () => "00749a68df89480806d66c2caa0106222009fc9d980e99c298088093c5266723",
      bloxd_wasm_recorder: () => "fff4e7dd116ddac14614d11c6efe68b0beab86dd32f03cf09d2d291dd715dbc1",
      bloxd_wasm_anim: () => "e06ab9bfc1a83b6498470d65996c60a55117dc9e341e17cb44260cad0fe8d434",
      bloxd_wasm_textures: () => "bea12b411e2841e721547a8f34b2e2c8d67c134acf1aabfafa9f47d2dce32aca",
      bloxd_wasm_shader_pack: () => "153845fdc736fc7d3f35302c98089348c2e3d0550da1ed6cc5e35905a2a723c3"
    };
    var SH = LH(5143);

    function hH(HH) {
      const BH = Object.prototype.hasOwnProperty.call(rH, HH) ? rH[HH]() : void 0;
      if (void 0 !== BH) return {
        sha256: BH,
        onMismatch: SH.v
      };
      throw new AH.j(`${HH} has no release digest, so this build refuses it`)
    }
  },
  7187: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => PH,
      h: () => TH,
      l: () => xH,
      p: () => MH
    });
    var AH = LH(7189);
    const rH = 6,
      SH = 3,
      hH = 1,
      tH = 2,
      zH = 4,
      CH = 8,
      EH = 16,
      XH = 32,
      GH = 64,
      YH = 128,
      uH = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function QH(HH) {
      if (!HH) return 0;
      const BH = uH.indexOf(HH);
      if (BH <= 0) throw new Error(`"${HH}" is not a shader pack hook function`);
      return BH
    }

    function WH(HH) {
      if (0 === HH) return null;
      const BH = uH[HH];
      if (void 0 === BH) throw new Error(`${HH} is not a shader pack hook function id`);
      return BH
    }

    function MH(HH) {
      const BH = AH.d.length;
      return {
        strict: HH >= BH,
        program: AH.d[HH % BH]
      }
    }

    function xH(HH) {
      return Number(HH.strict) * AH.d.length + AH.d.indexOf(HH.program)
    }

    function vH(HH) {
      return "" === HH ? [] : HH.split(" ")
    }

    function PH(HH) {
      const BH = {
        variantFlags: new Uint8Array(rH),
        hooks: new Uint8Array(rH * SH),
        moduleCodes: Array(rH).fill(""),
        reads: Array(2 * rH).fill("")
      };
      for (const LH of HH) {
        const HH = xH(LH.key),
          AH = (HH, BH) => null === LH.hooks.surface || LH.reads.fragment.includes(HH) ? 0 : BH;
        BH.variantFlags[HH] = (LH.sceneDepth ? hH : 0) | (LH.movesVertices ? tH : 0) | (LH.sunShadow ? zH : 0) | (LH.airShadow ? CH : 0) | (LH.discards ? EH : 0) | AH("localPosition", XH) | AH("enchantSpeed", GH) | AH("enchantTier", YH), BH.hooks[HH * SH] = QH(LH.hooks.vertex), BH.hooks[HH * SH + 1] = QH(LH.hooks.surface), BH.hooks[HH * SH + 2] = QH(LH.hooks.light), BH.moduleCodes[HH] = LH.moduleCode, BH.reads[2 * HH] = LH.reads.vertex.join(" "), BH.reads[2 * HH + 1] = LH.reads.fragment.join(" ")
      }
      return BH
    }

    function TH(HH) {
      const {
        hooks: BH,
        moduleCodes: LH,
        reads: AH
      } = HH;
      return Array.from(HH.variantFlags, ((HH, rH) => {
        const XH = rH * SH;
        return {
          key: MH(rH),
          hooks: {
            vertex: WH(BH[XH]),
            surface: WH(BH[XH + 1]),
            light: WH(BH[XH + 2])
          },
          moduleCode: LH[rH],
          sceneDepth: 0 !== (HH & hH),
          sunShadow: 0 !== (HH & zH),
          airShadow: 0 !== (HH & CH),
          movesVertices: 0 !== (HH & tH),
          discards: 0 !== (HH & EH),
          reads: {
            vertex: vH(AH[2 * rH]),
            fragment: vH(AH[2 * rH + 1])
          }
        }
      }))
    }
  },
  7189: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH,
      g: () => hH,
      i: () => tH,
      j: () => rH,
      k: () => SH
    });
    const AH = ["terrain", "liquid", "model"];

    function rH() {
      const HH = [];
      for (const BH of [!1, !0])
        for (const LH of AH) HH.push({
          strict: BH,
          program: LH
        });
      return HH
    }

    function SH(HH) {
      return `${HH.strict?"strict":"allow"}.${HH.program}`
    }

    function hH(HH) {
      return !HH.hooks.vertex && !HH.hooks.surface && !HH.hooks.light
    }

    function tH(HH, BH) {
      return "off" !== BH && (null === HH || HH.some((HH => HH.key.strict === ("strict" === BH) && !hH(HH))))
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);