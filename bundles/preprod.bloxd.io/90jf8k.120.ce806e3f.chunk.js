export const id = 120;
export const ids = [120];
export const modules = {
  5597: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => eW,
      g: () => YW,
      k: () => kS,
      n: () => tS,
      o: () => qS,
      s: () => PW,
      v: () => rS,
      x: () => oW,
      y: () => ZW,
      z: () => dW
    });
    var CF = SF(2903),
      AF = SF(2911);
    const uF = Function.prototype.toString,
      hF = RegExp.prototype.exec,
      bW = Reflect.apply,
      dF = Function.prototype.call,
      PF = Function.prototype.apply,
      RF = Function.prototype.bind,
      iW = Object.defineProperty,
      eF = Uint8Array;
    let EF, QF;
    try {
      EF = globalThis.crypto, QF = void 0 === EF || null === EF ? void 0 : EF.getRandomValues
    } catch {}
    const rW = "bloxdBindApply";
    let gW;
    try {
      const FF = dF;
      iW(FF, rW, {
        __proto__: null,
        value: RF,
        configurable: !0
      });
      try {
        gW = FF[rW](PF)
      } finally {
        delete FF[rW]
      }
    } catch {}
    const tW = 16,
      TF = 256,
      aW = 0,
      kW = 1,
      qW = 2,
      VF = 3;
    let NF, DF = aW,
      LF = bW,
      mW = 0;

    function OF(FF, WF) {
      return FF === `function ${WF}() { [native code] }` || FF === `function ${WF}() {\n    [native code]\n}`
    }
    const xW = 0,
      ZF = 1,
      oF = 2;
    let YF = xW;

    function MF(FF, WF, SF) {
      if (YF === oF && DF === kW && ! function() {
          const FF = NF;
          return mW >= TF && (LF(QF, EF, [FF]), mW = 0), FF[mW++] < 256 / tW
        }()) return function(FF, WF, SF) {
        return LF(FF, WF, SF ?? 0)
      }(...arguments);
      if (YF === xW || DF === qW) return bW(FF, WF, SF);
      let CF;
      YF = xW;
      try {
        DF === aW && (DF = VF, DF = function() {
          const FF = bW(uF, bW, []);
          if (OF(FF, "apply")) return qW;
          if (null === bW(hF, /\(\.\.\.arguments\)/, [FF]) && null === bW(hF, /^function\s*\(\.\.\.[\w$]+\)/, [FF])) return qW;
          if ("function" !== typeof gW || "function" !== typeof dF || "function" !== typeof PF || "function" !== typeof RF || "function" !== typeof iW || "function" !== typeof QF || "function" !== typeof eF || !OF(bW(uF, dF, []), "call") || !OF(bW(uF, PF, []), "apply") || !OF(bW(uF, RF, []), "bind") || !OF(bW(uF, iW, []), "defineProperty") || !OF(bW(uF, QF, []), "getRandomValues") || !OF(bW(uF, eF, []), "Uint8Array")) return qW;
          const WF = gW,
            SF = {},
            CF = function(FF) {
              return this === SF && FF === SF
            };
          try {
            if (!0 !== WF(CF, SF, [SF])) return qW;
            const FF = new eF(TF);
            WF(QF, EF, [FF]), NF = FF
          } catch {
            return qW
          }
          return LF = WF, kW
        }()), CF = bW(FF, WF, SF)
      } catch (AF) {
        throw DF = qW, AF
      }
      return YF = oF, CF
    }
    let cW = bW;

    function GF() {
      return (cW === bW ? 0 : 3) + YF
    }

    function zW() {
      const FF = GF();
      return cW = bW, FF
    }

    function IF(FF) {
      cW = FF >= 3 ? MF : bW, YF = FF % 3
    }
    const fF = Function.prototype.toString,
      yW = Object.getOwnPropertyDescriptor,
      sF = RegExp.prototype.exec,
      nF = Object.prototype.hasOwnProperty,
      HF = Set.prototype.has,
      KF = Reflect.get,
      wF = Object.getPrototypeOf,
      XF = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function UF(FF, WF, SF) {
      return {
        code: FF,
        holder: WF,
        key: SF,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${SF}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function BF() {
      return XF
    }
    const jW = XF?.Instance.prototype,
      vW = XF?.Memory.prototype;

    function JF() {
      return vW
    }
    let pF, lF;
    try {
      const FF = globalThis.crypto,
        WF = FF?.subtle;
      pF = FF ? wF(FF) : void 0, lF = WF ? wF(WF) : void 0
    } catch {}
    const FW = [UF("in", BF, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), UF("is", BF, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), UF("co", BF, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), UF("cs", BF, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), UF("mo", BF, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), UF("it", BF, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), UF("me", BF, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), UF("ex", (function() {
      return jW
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), UF("bu", JF, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), UF("gr", JF, "grow", {
      tier: "punished"
    }), UF("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), UF("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), UF("su", (function() {
      return pF
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), UF("dg", (function() {
      return lF
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function WW(FF) {
      let WF;
      try {
        const SF = KF(globalThis, FF);
        WF = "function" === typeof SF ? SF.prototype : void 0
      } catch {}
      return () => WF
    }

    function SW(FF, WF, SF) {
      return SF.map((SF => UF(FF, WF, SF)))
    }
    const CW = UF("rx", WW("HTMLCanvasElement"), "getContext"),
      AW = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      uW = {
        webgpu: [...SW("gd", WW("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...SW("gq", WW("GPUQueue"), ["submit", "writeBuffer"]), ...SW("ge", WW("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...SW("gp", WW("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), CW],
        webgl: [...SW("g2", WW("WebGL2RenderingContext"), [...AW, "drawArraysInstanced", "drawElementsInstanced"]), CW],
        webgl1: [...SW("g1", WW("WebGLRenderingContext"), AW), CW]
      };
    let hW = [];
    const bS = new Set(Object.values(uW).flatMap((FF => FF.map((FF => `wh:${FF.code}`)))));

    function dW(FF) {
      hW = uW[FF]
    }

    function PW(FF) {
      const WF = zW();
      try {
        return cW(HF, bS, [FF])
      } finally {
        IF(WF)
      }
    }

    function RW(FF) {
      return new Set(FW.filter((WF => WF.tier === FF)).map((FF => `wh:${FF.code}`)))
    }
    const iS = RW("punished"),
      eW = !1,
      EW = new Set(AF.e),
      QW = RW("weighted");

    function rS(FF) {
      const WF = zW();
      try {
        return gS(FF)
      } finally {
        IF(WF)
      }
    }

    function gS(FF) {
      return cW(HF, QW, [FF])
    }

    function tS(FF) {
      const WF = zW();
      try {
        return TW(FF)
      } finally {
        IF(WF)
      }
    }

    function TW(FF) {
      return cW(HF, EW, [FF])
    }

    function aS(FF) {
      return "wb" === FF || cW(HF, iS, [FF])
    }

    function kS(FF) {
      const WF = zW();
      try {
        return aS(FF) || TW(FF)
      } finally {
        IF(WF)
      }
    }

    function qS(FF) {
      const WF = zW();
      try {
        return "wb" === FF || eW && aS(FF)
      } finally {
        IF(WF)
      }
    }

    function VW(FF, WF) {
      let {
        isConstructor: SF,
        native: CF
      } = WF;
      return "function" === typeof FF && (!(!SF && cW(nF, FF, ["prototype"])) && null !== cW(sF, CF, [cW(fF, FF, [])]))
    }

    function NW(FF) {
      const {
        holder: WF,
        key: SF,
        isGetter: CF,
        onNamespace: AF,
        inSecureContext: uF
      } = FF, hF = WF(), bW = function(FF, WF) {
        for (let SF = FF; void 0 !== SF && null !== SF; SF = wF(SF)) {
          const FF = yW(SF, WF);
          if (FF) return FF
        }
      }(hF, SF);
      if (!bW) return !(uF && !0 === globalThis.isSecureContext);
      const dF = CF ? bW.get : bW.value;
      if (!VW(dF, FF)) return !1;
      if (AF) {
        const WF = globalThis.WebAssembly;
        if (WF !== hF && null !== WF && ("object" === typeof WF || "function" === typeof WF)) {
          const CF = KF(WF, SF);
          return CF === dF || void 0 === CF || VW(CF, FF)
        }
      }
      return !0
    }
    let DW = null,
      LW = !1;

    function mS(FF) {
      try {
        return NW(FF)
      } catch {
        return !1
      }
    }

    function OW() {
      if (void 0 === XF) return null;
      let FF = function() {
        try {
          return globalThis.WebAssembly === XF
        } catch {
          return !1
        }
      }() ? null : "wh:wa";
      const WF = WF => {
        null !== WF && (null === FF || xS(WF) > xS(FF)) && (FF = WF)
      };
      for (let SF = 0; SF < FW.length; SF++) {
        const FF = FW[SF];
        void 0 === FF || mS(FF) || WF(`wh:${FF.code}`)
      }
      WF((0, AF.m)());
      for (let SF = 0; SF < hW.length; SF++) {
        const FF = hW[SF];
        void 0 === FF || mS(FF) || WF(`wh:${FF.code}`)
      }
      return FF
    }

    function xS(FF) {
      return aS(FF) ? 5 : gS(FF) ? 4 : TW(FF) ? 3 : function(FF) {
        return cW(HF, bS, [FF])
      }(FF) ? "wh:rx" === FF ? 0 : 1 : 2
    }

    function ZW() {
      const FF = function() {
        const FF = GF();
        return DF === aW || DF === kW ? (cW = MF, YF = ZF) : cW = bW, FF
      }();
      try {
        if (null === DW || !aS(DW)) {
          const FF = OW();
          (null === DW || null !== FF && xS(FF) > xS(DW)) && (DW = FF)
        }
      } finally {
        IF(FF)
      }
    }

    function oW() {
      LW = !0
    }

    function YW() {
      if (LW) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && ZW(), null !== DW) return DW;
      if (void 0 === XF) return "wn:unsupported";
      const FF = (0, CF.t)();
      return null === FF ? null : `wn:${FF}`
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);