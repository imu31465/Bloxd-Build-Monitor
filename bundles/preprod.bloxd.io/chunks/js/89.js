export const id = 89;
export const ids = [89];
export const modules = {
  5143: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => nB,
      e: () => XL,
      g: () => iB,
      h: () => BL,
      j: () => aB,
      m: () => pB,
      n: () => gB,
      o: () => wB,
      r: () => oB,
      v: () => EL,
      x: () => CL,
      z: () => ZB,
      C: () => qB
    });
    var AH = LH(3168);
    const rH = Function.prototype.toString,
      SH = RegExp.prototype.exec,
      hH = Reflect.apply,
      tH = Function.prototype.call,
      zH = Function.prototype.apply,
      CH = Function.prototype.bind,
      EH = Object.defineProperty,
      XH = Uint8Array;
    let GH, YH;
    try {
      GH = globalThis.crypto, YH = void 0 === GH || null === GH ? void 0 : GH.getRandomValues
    } catch {}
    const uH = "bloxdBindApply";
    let QH;
    try {
      const HH = tH;
      EH(HH, uH, {
        __proto__: null,
        value: CH,
        configurable: !0
      });
      try {
        QH = HH[uH](zH)
      } finally {
        delete HH[uH]
      }
    } catch {}
    const WH = 16,
      MH = 256,
      xH = 0,
      vH = 1,
      PH = 2,
      TH = 3;
    let UH, VH = xH,
      OH = hH,
      bH = 0;

    function kH(HH, BH) {
      return HH === `function ${BH}() { [native code] }` || HH === `function ${BH}() {\n    [native code]\n}`
    }
    const mH = 0,
      oH = 1,
      IH = 2;
    let fH = mH;

    function lH(HH, BH, LH) {
      if (fH === IH && VH === vH && ! function() {
          const HH = UH;
          return bH >= MH && (OH(YH, GH, [HH]), bH = 0), HH[bH++] < 256 / WH
        }()) return function(HH, BH, LH) {
        return OH(HH, BH, LH ?? 0)
      }(...arguments);
      if (fH === mH || VH === PH) return hH(HH, BH, LH);
      let AH;
      fH = mH;
      try {
        VH === xH && (VH = TH, VH = function() {
          const HH = hH(rH, hH, []);
          if (kH(HH, "apply")) return PH;
          if (null === hH(SH, /\(\.\.\.arguments\)/, [HH]) && null === hH(SH, /^function\s*\(\.\.\.[\w$]+\)/, [HH])) return PH;
          if ("function" !== typeof QH || "function" !== typeof tH || "function" !== typeof zH || "function" !== typeof CH || "function" !== typeof EH || "function" !== typeof YH || "function" !== typeof XH || !kH(hH(rH, tH, []), "call") || !kH(hH(rH, zH, []), "apply") || !kH(hH(rH, CH, []), "bind") || !kH(hH(rH, EH, []), "defineProperty") || !kH(hH(rH, YH, []), "getRandomValues") || !kH(hH(rH, XH, []), "Uint8Array")) return PH;
          const BH = QH,
            LH = {},
            AH = function(HH) {
              return this === LH && HH === LH
            };
          try {
            if (!0 !== BH(AH, LH, [LH])) return PH;
            const HH = new XH(MH);
            BH(YH, GH, [HH]), UH = HH
          } catch {
            return PH
          }
          return OH = BH, vH
        }()), AH = hH(HH, BH, LH)
      } catch (uH) {
        throw VH = PH, uH
      }
      return fH = IH, AH
    }
    let KH = hH;

    function cH() {
      return (KH === hH ? 0 : 3) + fH
    }

    function eH() {
      const HH = cH();
      return KH = hH, HH
    }

    function qH(HH) {
      KH = HH >= 3 ? lH : hH, fH = HH % 3
    }
    const gH = Function.prototype.toString,
      NH = Object.getOwnPropertyDescriptor,
      RH = Object.prototype.hasOwnProperty,
      jH = RegExp.prototype.exec,
      nH = TextEncoder.prototype.encodeInto,
      FH = String.prototype.startsWith,
      DH = Number.prototype.toString,
      wH = WeakMap.prototype.get,
      ZH = WeakMap.prototype.set,
      dH = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      aH = new TextEncoder,
      sH = new Uint8Array(1024),
      JH = 9999999,
      iH = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      pH = new WeakMap;

    function yH(HH) {
      if ("function" !== typeof HH) return "#a0.0";
      const BH = KH(wH, pH, [HH]);
      if (void 0 !== BH) return BH;
      const LH = KH(gH, HH, []),
        AH = LH.length > JH ? JH : LH.length,
        rH = `#${function(HH,BH){const LH=KH(jH,dH,[BH]);if(null===LH)return"s";const AH=LH[1];if("ProxyObject"===AH)return"p";if(""!==AH)return KH(FH,AH,["bound "])?"b":"n";try{const BH=NH(HH,"name"),LH=void 0!==BH&&KH(RH,BH,["value"])?BH.value:void 0;return"string"===typeof LH&&KH(FH,LH,["bound "])?"b":"p"}catch{return"p"}}(HH,LH)}${AH}.${function(HH){const{written:BH}=KH(nH,aH,[HH,sH]);let LH=2166136261;for(let AH=0;AH<BH;AH++)LH=(LH^sH[AH])>>>0,LH=LH+(LH<<1)+(LH<<4)+(LH<<7)+(LH<<8)+(LH<<24)>>>0;return KH(DH,LH,[36])}(LH)}`;
      return KH(ZH, pH, [HH, rH]), rH
    }

    function HB(HH) {
      const BH = KH(jH, iH, [HH]);
      return null === BH ? HH : BH[1]
    }
    var BB = LH(3178);
    const LB = Function.prototype.toString,
      AB = Object.getOwnPropertyDescriptor,
      rB = RegExp.prototype.exec,
      SB = Object.prototype.hasOwnProperty,
      hB = Set.prototype.has,
      tB = WeakMap.prototype.get,
      zB = WeakMap.prototype.set,
      CB = Reflect.get,
      EB = Object.getPrototypeOf,
      XB = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function GB(HH, BH, LH) {
      return {
        code: HH,
        holder: BH,
        key: LH,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${LH}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function YB() {
      return XB
    }
    const uB = XB?.Instance.prototype,
      QB = XB?.Memory.prototype;

    function WB() {
      return QB
    }
    let MB, xB;
    try {
      const HH = globalThis.crypto,
        BH = HH?.subtle;
      MB = HH ? EB(HH) : void 0, xB = BH ? EB(BH) : void 0
    } catch {}

    function vB(HH, BH) {
      for (let LH = HH; void 0 !== LH && null !== LH; LH = EB(LH)) {
        const HH = AB(LH, BH);
        if (HH) return HH
      }
    }
    const PB = [GB("in", YB, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), GB("is", YB, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), GB("co", YB, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), GB("cs", YB, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), GB("mo", YB, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), GB("it", YB, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), GB("me", YB, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), GB("ex", (function() {
      return uB
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), GB("bu", WB, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), GB("gr", WB, "grow", {
      tier: "punished"
    }), GB("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), GB("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), GB("su", (function() {
      return MB
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), GB("dg", (function() {
      return xB
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function TB(HH) {
      let BH;
      try {
        const LH = CB(globalThis, HH);
        BH = "function" === typeof LH ? LH.prototype : void 0
      } catch {}
      return () => BH
    }

    function UB(HH, BH, LH) {
      return LH.map((LH => GB(HH, BH, LH)))
    }
    const VB = GB("rx", TB("HTMLCanvasElement"), "getContext"),
      OB = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      bB = {
        webgpu: [...UB("gd", TB("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...UB("gq", TB("GPUQueue"), ["submit", "writeBuffer"]), ...UB("ge", TB("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...UB("gp", TB("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), VB],
        webgl: [...UB("g2", TB("WebGL2RenderingContext"), [...OB, "drawArraysInstanced", "drawElementsInstanced"]), VB],
        webgl1: [...UB("g1", TB("WebGLRenderingContext"), OB), VB]
      };
    let kB = [];
    const mB = new WeakMap;

    function oB(HH, BH) {
      const LH = eH();
      try {
        KH(zB, mB, [HH, BH])
      } finally {
        qH(LH)
      }
    }

    function IB(HH) {
      try {
        const BH = tL(HH),
          LH = KH(tB, mB, [BH]);
        return HL(LH, HH) ? fB(HH, !0) : `${fB(HH,!1)}${yH(LH??BH)}`
      } catch {
        return `${fB(HH,!1)}${yH(void 0)}`
      }
    }

    function fB(HH, BH) {
      let {
        code: LH,
        key: AH
      } = HH;
      return `wh:${LH}${BH?"-dbg":""}:${AH}`
    }

    function lB(HH) {
      return Object.values(bB).flatMap((BH => BH.map((BH => fB(BH, HH)))))
    }
    const KB = new Set(lB(!0)),
      cB = new Set([...lB(!1), ...KB]),
      eB = fB(VB, !1);

    function qB(HH) {
      kB = bB[HH]
    }

    function gB(HH) {
      const BH = eH();
      try {
        return NB(HH) || NB(HB(HH))
      } finally {
        qH(BH)
      }
    }

    function NB(HH) {
      return KH(hB, cB, [HH])
    }

    function RB(HH) {
      return new Set(PB.filter((BH => BH.tier === HH)).map((HH => `wh:${HH.code}`)))
    }
    const jB = RB("punished"),
      nB = !1,
      FB = new Set(BB.c),
      DB = RB("weighted");

    function wB(HH) {
      const BH = eH();
      try {
        return dB(HB(HH))
      } finally {
        qH(BH)
      }
    }

    function ZB(HH) {
      const BH = eH();
      try {
        return HB(HH)
      } finally {
        qH(BH)
      }
    }

    function dB(HH) {
      return KH(hB, DB, [HH])
    }

    function aB(HH) {
      const BH = eH();
      try {
        return sB(HH)
      } finally {
        qH(BH)
      }
    }

    function sB(HH) {
      return KH(hB, FB, [HH])
    }

    function JB(HH) {
      return "wb" === HH || KH(hB, jB, [HH])
    }

    function iB(HH) {
      const BH = eH();
      try {
        return JB(HH) || sB(HH)
      } finally {
        qH(BH)
      }
    }

    function pB(HH) {
      const BH = eH();
      try {
        return "wb" === HH || nB && JB(HH)
      } finally {
        qH(BH)
      }
    }

    function yB(HH, BH) {
      let {
        isGetter: LH
      } = BH;
      const AH = AB(HH, LH ? "get" : "value");
      return void 0 === AH ? void 0 : AH.value
    }

    function HL(HH, BH) {
      let {
        isConstructor: LH,
        native: AH
      } = BH;
      return "function" === typeof HH && (!(!LH && KH(SB, HH, ["prototype"])) && null !== KH(rB, AH, [KH(LB, HH, [])]))
    }

    function BL(HH, BH) {
      return HL(HH, GB("", (() => {}), BH, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let LL = null,
      AL = !1;

    function rL() {
      try {
        return globalThis.WebAssembly === XB
      } catch {
        return !1
      }
    }

    function SL(HH) {
      try {
        return function(HH) {
          const {
            holder: BH,
            key: LH,
            onNamespace: AH,
            inSecureContext: rH
          } = HH, SH = BH(), hH = vB(SH, LH);
          if (!hH) return !(rH && !0 === globalThis.isSecureContext);
          const tH = yB(hH, HH);
          if (!HL(tH, HH)) return !1;
          if (AH) {
            const BH = globalThis.WebAssembly;
            if (BH !== SH && null !== BH && ("object" === typeof BH || "function" === typeof BH)) {
              const AH = CB(BH, LH);
              return AH === tH || void 0 === AH || HL(AH, HH)
            }
          }
          return !0
        }(HH)
      } catch {
        return !1
      }
    }

    function hL(HH) {
      const BH = `wh:${HH.code}`;
      if ("punished" === HH.tier) return BH;
      try {
        return `${BH}${yH(tL(HH))}`
      } catch {
        return `${BH}${yH(void 0)}`
      }
    }

    function tL(HH) {
      const BH = vB(HH.holder(), HH.key),
        LH = void 0 === BH ? void 0 : yB(BH, HH);
      return HH.onNamespace && !rL() && HL(LH, HH) ? CB(globalThis.WebAssembly, HH.key) : LH
    }

    function zL(HH) {
      if (JB(HH)) return 5;
      const BH = HB(HH);
      return dB(BH) ? 4 : sB(HH) ? 3 : NB(BH) ? function(HH) {
        return KH(hB, KB, [HH])
      }(BH) ? -1 : BH === eB ? 0 : 1 : 2
    }

    function CL() {
      const HH = function() {
        const HH = cH();
        return VH === xH || VH === vH ? (KH = lH, fH = oH) : KH = hH, HH
      }();
      try {
        if (null === LL || !JB(LL)) {
          const HH = function() {
            if (void 0 === XB) return null;
            let HH = rL() ? null : "wh:wa";
            const BH = BH => {
              null !== BH && (null === HH || zL(BH) > zL(HH)) && (HH = BH)
            };
            for (let LH = 0; LH < PB.length; LH++) {
              const HH = PB[LH];
              void 0 === HH || SL(HH) || BH(hL(HH))
            }
            BH((0, BB.o)());
            for (let LH = 0; LH < kB.length; LH++) {
              const HH = kB[LH];
              void 0 === HH || SL(HH) || BH(IB(HH))
            }
            return HH
          }();
          (null === LL || null !== HH && zL(HH) > zL(LL)) && (LL = HH)
        }
      } finally {
        qH(HH)
      }
    }

    function EL() {
      AL = !0
    }

    function XL() {
      if (AL) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && CL(), null !== LL) return LL;
      if (void 0 === XB) return "wn:unsupported";
      const HH = (0, AH.q)();
      return null === HH ? null : `wn:${HH}`
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);