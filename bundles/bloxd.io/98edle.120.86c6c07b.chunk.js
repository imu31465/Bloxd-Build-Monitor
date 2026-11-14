export const id = 120;
export const ids = [120];
export const modules = {
  5631: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => tM,
      f: () => sR,
      g: () => oR,
      h: () => JR,
      k: () => lR,
      l: () => NR,
      m: () => iM,
      p: () => aM,
      t: () => kM,
      x: () => yM
    });
    var wW = MW(2793),
      CW = MW(2803);
    const zR = Function.prototype.toString,
      AW = RegExp.prototype.exec,
      bR = Reflect.apply,
      yR = Function.prototype.call,
      NW = Function.prototype.apply,
      eW = Function.prototype.bind,
      BW = Object.defineProperty,
      tR = Uint8Array;
    let TW, gR;
    try {
      TW = globalThis.crypto, gR = void 0 === TW || null === TW ? void 0 : TW.getRandomValues
    } catch {}
    const iR = "bloxdBindApply";
    let YW;
    try {
      const WW = yR;
      BW(WW, iR, {
        __proto__: null,
        value: eW,
        configurable: !0
      });
      try {
        YW = WW[iR](NW)
      } finally {
        delete WW[iR]
      }
    } catch {}
    const JW = 16,
      PW = 256,
      IW = 0,
      oW = 1,
      lW = 2,
      FW = 3;
    let fW, QW = IW,
      rR = bR,
      cR = 0;

    function XW(WW, RW) {
      return WW === `function ${RW}() { [native code] }` || WW === `function ${RW}() {\n    [native code]\n}`
    }
    const jR = 0,
      kR = 1,
      aR = 2;
    let sW = jR;

    function dW(WW, RW, MW) {
      if (sW === aR && QW === oW && ! function() {
          const WW = fW;
          return cR >= PW && (rR(gR, TW, [WW]), cR = 0), WW[cR++] < 256 / JW
        }()) return function(WW, RW, MW) {
        return rR(WW, RW, MW ?? 0)
      }(...arguments);
      if (sW === jR || QW === lW) return bR(WW, RW, MW);
      let wW;
      sW = jR;
      try {
        QW === IW && (QW = FW, QW = function() {
          const WW = bR(zR, bR, []);
          if (XW(WW, "apply")) return lW;
          if (null === bR(AW, /\(\.\.\.arguments\)/, [WW]) && null === bR(AW, /^function\s*\(\.\.\.[\w$]+\)/, [WW])) return lW;
          if ("function" !== typeof YW || "function" !== typeof yR || "function" !== typeof NW || "function" !== typeof eW || "function" !== typeof BW || "function" !== typeof gR || "function" !== typeof tR || !XW(bR(zR, yR, []), "call") || !XW(bR(zR, NW, []), "apply") || !XW(bR(zR, eW, []), "bind") || !XW(bR(zR, BW, []), "defineProperty") || !XW(bR(zR, gR, []), "getRandomValues") || !XW(bR(zR, tR, []), "Uint8Array")) return lW;
          const RW = YW,
            MW = {},
            wW = function(WW) {
              return this === MW && WW === MW
            };
          try {
            if (!0 !== RW(wW, MW, [MW])) return lW;
            const WW = new tR(PW);
            RW(gR, TW, [WW]), fW = WW
          } catch {
            return lW
          }
          return rR = RW, oW
        }()), wW = bR(WW, RW, MW)
      } catch (CW) {
        throw QW = lW, CW
      }
      return sW = aR, wW
    }
    let pW = bR;

    function hW() {
      return (pW === bR ? 0 : 3) + sW
    }

    function UW() {
      const WW = hW();
      return pW = bR, WW
    }

    function EW(WW) {
      pW = WW >= 3 ? dW : bR, sW = WW % 3
    }
    const VW = Function.prototype.toString,
      mR = Object.getOwnPropertyDescriptor,
      xR = RegExp.prototype.exec,
      vR = Object.prototype.hasOwnProperty,
      KW = Set.prototype.has,
      uW = Reflect.get,
      OW = Object.getPrototypeOf,
      nW = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function GW(WW, RW, MW) {
      return {
        code: WW,
        holder: RW,
        key: MW,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${MW}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function LW() {
      return nW
    }
    const HW = nW?.Instance.prototype,
      DW = nW?.Memory.prototype;

    function qR() {
      return DW
    }
    let ZW, SW;
    try {
      const WW = globalThis.crypto,
        RW = WW?.subtle;
      ZW = WW ? OW(WW) : void 0, SW = RW ? OW(RW) : void 0
    } catch {}
    const WR = [GW("in", LW, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), GW("is", LW, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), GW("co", LW, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), GW("cs", LW, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), GW("mo", LW, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), GW("it", LW, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), GW("me", LW, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), GW("ex", (function() {
      return HW
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), GW("bu", qR, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), GW("gr", qR, "grow", {
      tier: "punished"
    }), GW("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), GW("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), GW("su", (function() {
      return ZW
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), GW("dg", (function() {
      return SW
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function RR(WW) {
      let RW;
      try {
        const MW = uW(globalThis, WW);
        RW = "function" === typeof MW ? MW.prototype : void 0
      } catch {}
      return () => RW
    }

    function MR(WW, RW, MW) {
      return MW.map((MW => GW(WW, RW, MW)))
    }
    const wR = GW("rx", RR("HTMLCanvasElement"), "getContext"),
      CR = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      zM = {
        webgpu: [...MR("gd", RR("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...MR("gq", RR("GPUQueue"), ["submit", "writeBuffer"]), ...MR("ge", RR("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...MR("gp", RR("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), wR],
        webgl: [...MR("g2", RR("WebGL2RenderingContext"), [...CR, "drawArraysInstanced", "drawElementsInstanced"]), wR],
        webgl1: [...MR("g1", RR("WebGLRenderingContext"), CR), wR]
      };
    let AR = [];
    const bM = new Set(Object.values(zM).flatMap((WW => WW.map((WW => `wh:${WW.code}`)))));

    function yM(WW) {
      AR = zM[WW]
    }

    function NR(WW) {
      const RW = UW();
      try {
        return pW(KW, bM, [WW])
      } finally {
        EW(RW)
      }
    }

    function eR(WW) {
      return new Set(WR.filter((RW => RW.tier === WW)).map((WW => `wh:${WW.code}`)))
    }
    const BR = eR("punished"),
      tM = !1,
      TR = new Set(CW.e),
      gM = eR("weighted");

    function iM(WW) {
      const RW = UW();
      try {
        return YR(WW)
      } finally {
        EW(RW)
      }
    }

    function YR(WW) {
      return pW(KW, gM, [WW])
    }

    function JR(WW) {
      const RW = UW();
      try {
        return PR(WW)
      } finally {
        EW(RW)
      }
    }

    function PR(WW) {
      return pW(KW, TR, [WW])
    }

    function IR(WW) {
      return "wb" === WW || pW(KW, BR, [WW])
    }

    function oR(WW) {
      const RW = UW();
      try {
        return IR(WW) || PR(WW)
      } finally {
        EW(RW)
      }
    }

    function lR(WW) {
      const RW = UW();
      try {
        return "wb" === WW || tM && IR(WW)
      } finally {
        EW(RW)
      }
    }

    function FR(WW, RW) {
      let {
        isConstructor: MW,
        native: wW
      } = RW;
      return "function" === typeof WW && (!(!MW && pW(vR, WW, ["prototype"])) && null !== pW(xR, wW, [pW(VW, WW, [])]))
    }

    function fR(WW) {
      const {
        holder: RW,
        key: MW,
        isGetter: wW,
        onNamespace: CW,
        inSecureContext: zR
      } = WW, AW = RW(), bR = function(WW, RW) {
        for (let MW = WW; void 0 !== MW && null !== MW; MW = OW(MW)) {
          const WW = mR(MW, RW);
          if (WW) return WW
        }
      }(AW, MW);
      if (!bR) return !(zR && !0 === globalThis.isSecureContext);
      const yR = wW ? bR.get : bR.value;
      if (!FR(yR, WW)) return !1;
      if (CW) {
        const RW = globalThis.WebAssembly;
        if (RW !== AW && null !== RW && ("object" === typeof RW || "function" === typeof RW)) {
          const wW = uW(RW, MW);
          return wW === yR || void 0 === wW || FR(wW, WW)
        }
      }
      return !0
    }
    let QR = null,
      rM = !1;

    function cM(WW) {
      try {
        return fR(WW)
      } catch {
        return !1
      }
    }

    function XR() {
      if (void 0 === nW) return null;
      let WW = function() {
        try {
          return globalThis.WebAssembly === nW
        } catch {
          return !1
        }
      }() ? null : "wh:wa";
      const RW = RW => {
        null !== RW && (null === WW || jM(RW) > jM(WW)) && (WW = RW)
      };
      for (let MW = 0; MW < WR.length; MW++) {
        const WW = WR[MW];
        void 0 === WW || cM(WW) || RW(`wh:${WW.code}`)
      }
      RW((0, CW.r)());
      for (let MW = 0; MW < AR.length; MW++) {
        const WW = AR[MW];
        void 0 === WW || cM(WW) || RW(`wh:${WW.code}`)
      }
      return WW
    }

    function jM(WW) {
      return IR(WW) ? 5 : YR(WW) ? 4 : PR(WW) ? 3 : function(WW) {
        return pW(KW, bM, [WW])
      }(WW) ? "wh:rx" === WW ? 0 : 1 : 2
    }

    function kM() {
      const WW = function() {
        const WW = hW();
        return QW === IW || QW === oW ? (pW = dW, sW = kR) : pW = bR, WW
      }();
      try {
        if (null === QR || !IR(QR)) {
          const WW = XR();
          (null === QR || null !== WW && jM(WW) > jM(QR)) && (QR = WW)
        }
      } finally {
        EW(WW)
      }
    }

    function aM() {
      rM = !0
    }

    function sR() {
      if (rM) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && kM(), null !== QR) return QR;
      if (void 0 === nW) return "wn:unsupported";
      const WW = (0, wW.v)();
      return null === WW ? null : `wn:${WW}`
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);