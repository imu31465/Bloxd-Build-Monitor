export const id = 80;
export const ids = [80];
export const modules = {
  5002: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => tW,
      f: () => JX,
      g: () => KW,
      k: () => WX,
      n: () => NW,
      o: () => mW,
      p: () => LW,
      q: () => nW,
      s: () => hW,
      v: () => gX,
      z: () => PX,
      A: () => xW,
      C: () => uW
    });
    var wQ = XQ(3107);
    const qQ = Function.prototype.toString,
      TQ = RegExp.prototype.exec,
      zQ = Reflect.apply,
      sQ = Function.prototype.call,
      FQ = Function.prototype.apply,
      PQ = Function.prototype.bind,
      gQ = Object.defineProperty,
      JQ = Uint8Array;
    let rQ, IQ;
    try {
      rQ = globalThis.crypto, IQ = void 0 === rQ || null === rQ ? void 0 : rQ.getRandomValues
    } catch {}
    const jQ = "bloxdBindApply";
    let BQ;
    try {
      const QQ = sQ;
      gQ(QQ, jQ, {
        __proto__: null,
        value: PQ,
        configurable: !0
      });
      try {
        BQ = QQ[jQ](FQ)
      } finally {
        delete QQ[jQ]
      }
    } catch {}
    const yQ = 16,
      VQ = 256,
      DQ = 0,
      pQ = 1,
      GQ = 2,
      UQ = 3;
    let bQ, vQ = DQ,
      dQ = zQ,
      HQ = 0;

    function aQ(QQ, WQ) {
      return QQ === `function ${WQ}() { [native code] }` || QQ === `function ${WQ}() {\n    [native code]\n}`
    }
    const lQ = 0,
      hQ = 1,
      iQ = 2;
    let cQ = lQ;

    function AQ(QQ, WQ, XQ) {
      if (cQ === iQ && vQ === pQ && ! function() {
          const QQ = bQ;
          return HQ >= VQ && (dQ(IQ, rQ, [QQ]), HQ = 0), QQ[HQ++] < 256 / yQ
        }()) return function(QQ, WQ, XQ) {
        return dQ(QQ, WQ, XQ ?? 0)
      }(...arguments);
      if (cQ === lQ || vQ === GQ) return zQ(QQ, WQ, XQ);
      let wQ;
      cQ = lQ;
      try {
        vQ === DQ && (vQ = UQ, vQ = function() {
          const QQ = zQ(qQ, zQ, []);
          if (aQ(QQ, "apply")) return GQ;
          if (null === zQ(TQ, /\(\.\.\.arguments\)/, [QQ]) && null === zQ(TQ, /^function\s*\(\.\.\.[\w$]+\)/, [QQ])) return GQ;
          if ("function" !== typeof BQ || "function" !== typeof sQ || "function" !== typeof FQ || "function" !== typeof PQ || "function" !== typeof gQ || "function" !== typeof IQ || "function" !== typeof JQ || !aQ(zQ(qQ, sQ, []), "call") || !aQ(zQ(qQ, FQ, []), "apply") || !aQ(zQ(qQ, PQ, []), "bind") || !aQ(zQ(qQ, gQ, []), "defineProperty") || !aQ(zQ(qQ, IQ, []), "getRandomValues") || !aQ(zQ(qQ, JQ, []), "Uint8Array")) return GQ;
          const WQ = BQ,
            XQ = {},
            wQ = function(QQ) {
              return this === XQ && QQ === XQ
            };
          try {
            if (!0 !== WQ(wQ, XQ, [XQ])) return GQ;
            const QQ = new JQ(VQ);
            WQ(IQ, rQ, [QQ]), bQ = QQ
          } catch {
            return GQ
          }
          return dQ = WQ, pQ
        }()), wQ = zQ(QQ, WQ, XQ)
      } catch (jQ) {
        throw vQ = GQ, jQ
      }
      return cQ = iQ, wQ
    }
    let RQ = zQ;

    function EQ() {
      return (RQ === zQ ? 0 : 3) + cQ
    }

    function CQ() {
      const QQ = EQ();
      return RQ = zQ, QQ
    }

    function uQ(QQ) {
      RQ = QQ >= 3 ? AQ : zQ, cQ = QQ % 3
    }
    const LQ = Function.prototype.toString,
      kQ = Object.getOwnPropertyDescriptor,
      fQ = Object.prototype.hasOwnProperty,
      SQ = RegExp.prototype.exec,
      tQ = TextEncoder.prototype.encodeInto,
      oQ = String.prototype.startsWith,
      eQ = Number.prototype.toString,
      nQ = WeakMap.prototype.get,
      xQ = WeakMap.prototype.set,
      YQ = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      NQ = new TextEncoder,
      ZQ = new Uint8Array(1024),
      OQ = 9999999,
      KQ = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      mQ = new WeakMap;

    function MQ(QQ) {
      if ("function" !== typeof QQ) return "#a0.0";
      const WQ = RQ(nQ, mQ, [QQ]);
      if (void 0 !== WQ) return WQ;
      const XQ = RQ(LQ, QQ, []),
        wQ = XQ.length > OQ ? OQ : XQ.length,
        qQ = `#${function(QQ,WQ){const XQ=RQ(SQ,YQ,[WQ]);if(null===XQ)return"s";const wQ=XQ[1];if("ProxyObject"===wQ)return"p";if(""!==wQ)return RQ(oQ,wQ,["bound "])?"b":"n";try{const WQ=kQ(QQ,"name"),XQ=void 0!==WQ&&RQ(fQ,WQ,["value"])?WQ.value:void 0;return"string"===typeof XQ&&RQ(oQ,XQ,["bound "])?"b":"p"}catch{return"p"}}(QQ,XQ)}${wQ}.${function(QQ){const{written:WQ}=RQ(tQ,NQ,[QQ,ZQ]);let XQ=2166136261;for(let wQ=0;wQ<WQ;wQ++)XQ=(XQ^ZQ[wQ])>>>0,XQ=XQ+(XQ<<1)+(XQ<<4)+(XQ<<7)+(XQ<<8)+(XQ<<24)>>>0;return RQ(eQ,XQ,[36])}(XQ)}`;
      return RQ(xQ, mQ, [QQ, qQ]), qQ
    }

    function QW(QQ) {
      const WQ = RQ(SQ, KQ, [QQ]);
      return null === WQ ? QQ : WQ[1]
    }
    var WW = XQ(3122);
    const XW = Function.prototype.toString,
      wW = Object.getOwnPropertyDescriptor,
      qW = RegExp.prototype.exec,
      TW = Object.prototype.hasOwnProperty,
      zW = Set.prototype.has,
      sW = WeakMap.prototype.get,
      FW = WeakMap.prototype.set,
      PW = Reflect.get,
      gW = Object.getPrototypeOf,
      JW = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function rW(QQ, WQ, XQ) {
      return {
        code: QQ,
        holder: WQ,
        key: XQ,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${XQ}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function IW() {
      return JW
    }
    const jW = JW?.Instance.prototype,
      BW = JW?.Memory.prototype;

    function yW() {
      return BW
    }
    let VW, DW;
    try {
      const QQ = globalThis.crypto,
        WQ = QQ?.subtle;
      VW = QQ ? gW(QQ) : void 0, DW = WQ ? gW(WQ) : void 0
    } catch {}

    function pW(QQ, WQ) {
      for (let XQ = QQ; void 0 !== XQ && null !== XQ; XQ = gW(XQ)) {
        const QQ = wW(XQ, WQ);
        if (QQ) return QQ
      }
    }
    const GW = [rW("in", IW, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), rW("is", IW, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), rW("co", IW, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), rW("cs", IW, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), rW("mo", IW, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), rW("it", IW, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), rW("me", IW, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), rW("ex", (function() {
      return jW
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), rW("bu", yW, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), rW("gr", yW, "grow", {
      tier: "punished"
    }), rW("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), rW("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), rW("su", (function() {
      return VW
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), rW("dg", (function() {
      return DW
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function UW(QQ) {
      let WQ;
      try {
        const XQ = PW(globalThis, QQ);
        WQ = "function" === typeof XQ ? XQ.prototype : void 0
      } catch {}
      return () => WQ
    }

    function bW(QQ, WQ, XQ) {
      return XQ.map((XQ => rW(QQ, WQ, XQ)))
    }
    const vW = rW("rx", UW("HTMLCanvasElement"), "getContext"),
      dW = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      HW = {
        webgpu: [...bW("gd", UW("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...bW("gq", UW("GPUQueue"), ["submit", "writeBuffer"]), ...bW("ge", UW("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...bW("gp", UW("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), vW],
        webgl: [...bW("g2", UW("WebGL2RenderingContext"), [...dW, "drawArraysInstanced", "drawElementsInstanced"]), vW],
        webgl1: [...bW("g1", UW("WebGLRenderingContext"), dW), vW]
      };
    let aW = [];
    const lW = new WeakMap;

    function hW(QQ, WQ) {
      const XQ = CQ();
      try {
        RQ(FW, lW, [QQ, WQ])
      } finally {
        uQ(XQ)
      }
    }

    function iW(QQ) {
      try {
        const WQ = sX(QQ),
          XQ = RQ(sW, lW, [WQ]);
        return QX(XQ, QQ) ? cW(QQ, !0) : `${cW(QQ,!1)}${MQ(XQ??WQ)}`
      } catch {
        return `${cW(QQ,!1)}${MQ(void 0)}`
      }
    }

    function cW(QQ, WQ) {
      let {
        code: XQ,
        key: wQ
      } = QQ;
      return `wh:${XQ}${WQ?"-dbg":""}:${wQ}`
    }

    function AW(QQ) {
      return Object.values(HW).flatMap((WQ => WQ.map((WQ => cW(WQ, QQ)))))
    }
    const RW = new Set(AW(!0)),
      EW = new Set([...AW(!1), ...RW]),
      CW = cW(vW, !1);

    function uW(QQ) {
      aW = HW[QQ]
    }

    function LW(QQ) {
      const WQ = CQ();
      try {
        return kW(QQ) || kW(QW(QQ))
      } finally {
        uQ(WQ)
      }
    }

    function kW(QQ) {
      return RQ(zW, EW, [QQ])
    }

    function fW(QQ) {
      return new Set(GW.filter((WQ => WQ.tier === QQ)).map((QQ => `wh:${QQ.code}`)))
    }
    const SW = fW("punished"),
      tW = !1,
      oW = new Set(WW.d),
      eW = fW("weighted");

    function nW(QQ) {
      const WQ = CQ();
      try {
        return YW(QW(QQ))
      } finally {
        uQ(WQ)
      }
    }

    function xW(QQ) {
      const WQ = CQ();
      try {
        return QW(QQ)
      } finally {
        uQ(WQ)
      }
    }

    function YW(QQ) {
      return RQ(zW, eW, [QQ])
    }

    function NW(QQ) {
      const WQ = CQ();
      try {
        return ZW(QQ)
      } finally {
        uQ(WQ)
      }
    }

    function ZW(QQ) {
      return RQ(zW, oW, [QQ])
    }

    function OW(QQ) {
      return "wb" === QQ || RQ(zW, SW, [QQ])
    }

    function KW(QQ) {
      const WQ = CQ();
      try {
        return OW(QQ) || ZW(QQ)
      } finally {
        uQ(WQ)
      }
    }

    function mW(QQ) {
      const WQ = CQ();
      try {
        return "wb" === QQ || tW && OW(QQ)
      } finally {
        uQ(WQ)
      }
    }

    function MW(QQ, WQ) {
      let {
        isGetter: XQ
      } = WQ;
      const wQ = wW(QQ, XQ ? "get" : "value");
      return void 0 === wQ ? void 0 : wQ.value
    }

    function QX(QQ, WQ) {
      let {
        isConstructor: XQ,
        native: wQ
      } = WQ;
      return "function" === typeof QQ && (!(!XQ && RQ(TW, QQ, ["prototype"])) && null !== RQ(qW, wQ, [RQ(XW, QQ, [])]))
    }

    function WX(QQ, WQ) {
      return QX(QQ, rW("", (() => {}), WQ, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let XX = null,
      wX = !1;

    function qX() {
      try {
        return globalThis.WebAssembly === JW
      } catch {
        return !1
      }
    }

    function TX(QQ) {
      try {
        return function(QQ) {
          const {
            holder: WQ,
            key: XQ,
            onNamespace: wQ,
            inSecureContext: qQ
          } = QQ, TQ = WQ(), zQ = pW(TQ, XQ);
          if (!zQ) return !(qQ && !0 === globalThis.isSecureContext);
          const sQ = MW(zQ, QQ);
          if (!QX(sQ, QQ)) return !1;
          if (wQ) {
            const WQ = globalThis.WebAssembly;
            if (WQ !== TQ && null !== WQ && ("object" === typeof WQ || "function" === typeof WQ)) {
              const wQ = PW(WQ, XQ);
              return wQ === sQ || void 0 === wQ || QX(wQ, QQ)
            }
          }
          return !0
        }(QQ)
      } catch {
        return !1
      }
    }

    function zX(QQ) {
      const WQ = `wh:${QQ.code}`;
      if ("punished" === QQ.tier) return WQ;
      try {
        return `${WQ}${MQ(sX(QQ))}`
      } catch {
        return `${WQ}${MQ(void 0)}`
      }
    }

    function sX(QQ) {
      const WQ = pW(QQ.holder(), QQ.key),
        XQ = void 0 === WQ ? void 0 : MW(WQ, QQ);
      return QQ.onNamespace && !qX() && QX(XQ, QQ) ? PW(globalThis.WebAssembly, QQ.key) : XQ
    }

    function FX(QQ) {
      if (OW(QQ)) return 5;
      const WQ = QW(QQ);
      return YW(WQ) ? 4 : ZW(QQ) ? 3 : kW(WQ) ? function(QQ) {
        return RQ(zW, RW, [QQ])
      }(WQ) ? -1 : WQ === CW ? 0 : 1 : 2
    }

    function PX() {
      const QQ = function() {
        const QQ = EQ();
        return vQ === DQ || vQ === pQ ? (RQ = AQ, cQ = hQ) : RQ = zQ, QQ
      }();
      try {
        if (null === XX || !OW(XX)) {
          const QQ = function() {
            if (void 0 === JW) return null;
            let QQ = qX() ? null : "wh:wa";
            const WQ = WQ => {
              null !== WQ && (null === QQ || FX(WQ) > FX(QQ)) && (QQ = WQ)
            };
            for (let XQ = 0; XQ < GW.length; XQ++) {
              const QQ = GW[XQ];
              void 0 === QQ || TX(QQ) || WQ(zX(QQ))
            }
            WQ((0, WW.p)());
            for (let XQ = 0; XQ < aW.length; XQ++) {
              const QQ = aW[XQ];
              void 0 === QQ || TX(QQ) || WQ(iW(QQ))
            }
            return QQ
          }();
          (null === XX || null !== QQ && FX(QQ) > FX(XX)) && (XX = QQ)
        }
      } finally {
        uQ(QQ)
      }
    }

    function gX() {
      wX = !0
    }

    function JX() {
      if (wX) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && PX(), null !== XX) return XX;
      if (void 0 === JW) return "wn:unsupported";
      const QQ = (0, wQ.r)();
      return null === QQ ? null : `wn:${QQ}`
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);