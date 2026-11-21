export const id = 75;
export const ids = [75];
export const modules = {
  4540: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => fF,
      c: () => Hw,
      f: () => yF,
      g: () => Fw,
      h: () => gF,
      i: () => BF,
      k: () => lF,
      l: () => JF,
      m: () => sF,
      o: () => uw,
      q: () => mw,
      r: () => EF,
      t: () => zF
    });
    var LQ = wQ(2809);
    const qQ = Function.prototype.toString,
      oQ = RegExp.prototype.exec,
      DQ = Reflect.apply,
      kQ = Function.prototype.call,
      vQ = Function.prototype.apply,
      mQ = Function.prototype.bind,
      uQ = Object.defineProperty,
      HQ = Uint8Array;
    let bQ, YQ;
    try {
      bQ = globalThis.crypto, YQ = void 0 === bQ || null === bQ ? void 0 : bQ.getRandomValues
    } catch {}
    const xQ = "bloxdBindApply";
    let AQ;
    try {
      const QQ = kQ;
      uQ(QQ, xQ, {
        __proto__: null,
        value: mQ,
        configurable: !0
      });
      try {
        AQ = QQ[xQ](vQ)
      } finally {
        delete QQ[xQ]
      }
    } catch {}
    const tQ = 16,
      eQ = 256,
      MQ = 0,
      GQ = 1,
      pQ = 2,
      cQ = 3;
    let CQ, SQ = MQ,
      iQ = DQ,
      WQ = 0;

    function RQ(QQ, FQ) {
      return QQ === `function ${FQ}() { [native code] }` || QQ === `function ${FQ}() {\n    [native code]\n}`
    }
    const OQ = 0,
      sQ = 1,
      rQ = 2;
    let IQ = OQ;

    function UQ(QQ, FQ, wQ) {
      if (IQ === rQ && SQ === GQ && ! function() {
          const QQ = CQ;
          return WQ >= eQ && (iQ(YQ, bQ, [QQ]), WQ = 0), QQ[WQ++] < 256 / tQ
        }()) return function(QQ, FQ, wQ) {
        return iQ(QQ, FQ, wQ ?? 0)
      }(...arguments);
      if (IQ === OQ || SQ === pQ) return DQ(QQ, FQ, wQ);
      let LQ;
      IQ = OQ;
      try {
        SQ === MQ && (SQ = cQ, SQ = function() {
          const QQ = DQ(qQ, DQ, []);
          if (RQ(QQ, "apply")) return pQ;
          if (null === DQ(oQ, /\(\.\.\.arguments\)/, [QQ]) && null === DQ(oQ, /^function\s*\(\.\.\.[\w$]+\)/, [QQ])) return pQ;
          if ("function" !== typeof AQ || "function" !== typeof kQ || "function" !== typeof vQ || "function" !== typeof mQ || "function" !== typeof uQ || "function" !== typeof YQ || "function" !== typeof HQ || !RQ(DQ(qQ, kQ, []), "call") || !RQ(DQ(qQ, vQ, []), "apply") || !RQ(DQ(qQ, mQ, []), "bind") || !RQ(DQ(qQ, uQ, []), "defineProperty") || !RQ(DQ(qQ, YQ, []), "getRandomValues") || !RQ(DQ(qQ, HQ, []), "Uint8Array")) return pQ;
          const FQ = AQ,
            wQ = {},
            LQ = function(QQ) {
              return this === wQ && QQ === wQ
            };
          try {
            if (!0 !== FQ(LQ, wQ, [wQ])) return pQ;
            const QQ = new HQ(eQ);
            FQ(YQ, bQ, [QQ]), CQ = QQ
          } catch {
            return pQ
          }
          return iQ = FQ, GQ
        }()), LQ = DQ(QQ, FQ, wQ)
      } catch (xQ) {
        throw SQ = pQ, xQ
      }
      return IQ = rQ, LQ
    }
    let NQ = DQ;

    function TQ() {
      return (NQ === DQ ? 0 : 3) + IQ
    }

    function KQ() {
      const QQ = TQ();
      return NQ = DQ, QQ
    }

    function zQ(QQ) {
      NQ = QQ >= 3 ? UQ : DQ, IQ = QQ % 3
    }
    const lQ = Function.prototype.toString,
      jQ = Object.getOwnPropertyDescriptor,
      aQ = Object.prototype.hasOwnProperty,
      XQ = RegExp.prototype.exec,
      fQ = TextEncoder.prototype.encodeInto,
      VQ = String.prototype.startsWith,
      hQ = Number.prototype.toString,
      JQ = WeakMap.prototype.get,
      EQ = WeakMap.prototype.set,
      nQ = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      gQ = new TextEncoder,
      PQ = new Uint8Array(1024),
      ZQ = 9999999,
      yQ = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      BQ = new WeakMap;

    function dQ(QQ) {
      if ("function" !== typeof QQ) return "#a0.0";
      const FQ = NQ(JQ, BQ, [QQ]);
      if (void 0 !== FQ) return FQ;
      const wQ = NQ(lQ, QQ, []),
        LQ = wQ.length > ZQ ? ZQ : wQ.length,
        qQ = `#${function(QQ,FQ){const wQ=NQ(XQ,nQ,[FQ]);if(null===wQ)return"s";const LQ=wQ[1];if("ProxyObject"===LQ)return"p";if(""!==LQ)return NQ(VQ,LQ,["bound "])?"b":"n";try{const FQ=jQ(QQ,"name"),wQ=void 0!==FQ&&NQ(aQ,FQ,["value"])?FQ.value:void 0;return"string"===typeof wQ&&NQ(VQ,wQ,["bound "])?"b":"p"}catch{return"p"}}(QQ,wQ)}${LQ}.${function(QQ){const{written:FQ}=NQ(fQ,gQ,[QQ,PQ]);let wQ=2166136261;for(let LQ=0;LQ<FQ;LQ++)wQ=(wQ^PQ[LQ])>>>0,wQ=wQ+(wQ<<1)+(wQ<<4)+(wQ<<7)+(wQ<<8)+(wQ<<24)>>>0;return NQ(hQ,wQ,[36])}(wQ)}`;
      return NQ(EQ, BQ, [QQ, qQ]), qQ
    }

    function QF(QQ) {
      const FQ = NQ(XQ, yQ, [QQ]);
      return null === FQ ? QQ : FQ[1]
    }
    var FF = wQ(2820);
    const wF = Function.prototype.toString,
      LF = Object.getOwnPropertyDescriptor,
      qF = RegExp.prototype.exec,
      oF = Object.prototype.hasOwnProperty,
      DF = Set.prototype.has,
      kF = WeakMap.prototype.get,
      vF = WeakMap.prototype.set,
      mF = Reflect.get,
      uF = Object.getPrototypeOf,
      HF = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function bF(QQ, FQ, wQ) {
      return {
        code: QQ,
        holder: FQ,
        key: wQ,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${wQ}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function YF() {
      return HF
    }
    const xF = HF?.Instance.prototype,
      AF = HF?.Memory.prototype;

    function tF() {
      return AF
    }
    let eF, MF;
    try {
      const QQ = globalThis.crypto,
        FQ = QQ?.subtle;
      eF = QQ ? uF(QQ) : void 0, MF = FQ ? uF(FQ) : void 0
    } catch {}

    function GF(QQ, FQ) {
      for (let wQ = QQ; void 0 !== wQ && null !== wQ; wQ = uF(wQ)) {
        const QQ = LF(wQ, FQ);
        if (QQ) return QQ
      }
    }
    const pF = [bF("in", YF, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), bF("is", YF, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), bF("co", YF, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), bF("cs", YF, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), bF("mo", YF, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), bF("it", YF, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), bF("me", YF, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), bF("ex", (function() {
      return xF
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), bF("bu", tF, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), bF("gr", tF, "grow", {
      tier: "punished"
    }), bF("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), bF("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), bF("su", (function() {
      return eF
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), bF("dg", (function() {
      return MF
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function cF(QQ) {
      let FQ;
      try {
        const wQ = mF(globalThis, QQ);
        FQ = "function" === typeof wQ ? wQ.prototype : void 0
      } catch {}
      return () => FQ
    }

    function CF(QQ, FQ, wQ) {
      return wQ.map((wQ => bF(QQ, FQ, wQ)))
    }
    const SF = bF("rx", cF("HTMLCanvasElement"), "getContext"),
      iF = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      WF = {
        webgpu: [...CF("gd", cF("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...CF("gq", cF("GPUQueue"), ["submit", "writeBuffer"]), ...CF("ge", cF("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...CF("gp", cF("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), SF],
        webgl: [...CF("g2", cF("WebGL2RenderingContext"), [...iF, "drawArraysInstanced", "drawElementsInstanced"]), SF],
        webgl1: [...CF("g1", cF("WebGLRenderingContext"), iF), SF]
      };
    let RF = [];
    const OF = new WeakMap;

    function sF(QQ, FQ) {
      const wQ = KQ();
      try {
        NQ(vF, OF, [QQ, FQ])
      } finally {
        zQ(wQ)
      }
    }

    function rF(QQ) {
      try {
        const FQ = kw(QQ),
          wQ = NQ(kF, OF, [FQ]);
        return Qw(wQ, QQ) ? IF(QQ, !0) : `${IF(QQ,!1)}${dQ(wQ??FQ)}`
      } catch {
        return `${IF(QQ,!1)}${dQ(void 0)}`
      }
    }

    function IF(QQ, FQ) {
      let {
        code: wQ,
        key: LQ
      } = QQ;
      return `wh:${wQ}${FQ?"-dbg":""}:${LQ}`
    }

    function UF(QQ) {
      return Object.values(WF).flatMap((FQ => FQ.map((FQ => IF(FQ, QQ)))))
    }
    const NF = new Set(UF(!0)),
      TF = new Set([...UF(!1), ...NF]),
      KF = IF(SF, !1);

    function zF(QQ) {
      RF = WF[QQ]
    }

    function lF(QQ) {
      const FQ = KQ();
      try {
        return jF(QQ) || jF(QF(QQ))
      } finally {
        zQ(FQ)
      }
    }

    function jF(QQ) {
      return NQ(DF, TF, [QQ])
    }

    function aF(QQ) {
      return new Set(pF.filter((FQ => FQ.tier === QQ)).map((QQ => `wh:${QQ.code}`)))
    }
    const XF = aF("punished"),
      fF = !1,
      VF = new Set(FF.b),
      hF = aF("weighted");

    function JF(QQ) {
      const FQ = KQ();
      try {
        return nF(QF(QQ))
      } finally {
        zQ(FQ)
      }
    }

    function EF(QQ) {
      const FQ = KQ();
      try {
        return QF(QQ)
      } finally {
        zQ(FQ)
      }
    }

    function nF(QQ) {
      return NQ(DF, hF, [QQ])
    }

    function gF(QQ) {
      const FQ = KQ();
      try {
        return PF(QQ)
      } finally {
        zQ(FQ)
      }
    }

    function PF(QQ) {
      return NQ(DF, VF, [QQ])
    }

    function ZF(QQ) {
      return "wb" === QQ || NQ(DF, XF, [QQ])
    }

    function yF(QQ) {
      const FQ = KQ();
      try {
        return ZF(QQ) || PF(QQ)
      } finally {
        zQ(FQ)
      }
    }

    function BF(QQ) {
      const FQ = KQ();
      try {
        return "wb" === QQ || fF && ZF(QQ)
      } finally {
        zQ(FQ)
      }
    }

    function dF(QQ, FQ) {
      let {
        isGetter: wQ
      } = FQ;
      const LQ = LF(QQ, wQ ? "get" : "value");
      return void 0 === LQ ? void 0 : LQ.value
    }

    function Qw(QQ, FQ) {
      let {
        isConstructor: wQ,
        native: LQ
      } = FQ;
      return "function" === typeof QQ && (!(!wQ && NQ(oF, QQ, ["prototype"])) && null !== NQ(qF, LQ, [NQ(wF, QQ, [])]))
    }

    function Fw(QQ, FQ) {
      return Qw(QQ, bF("", (() => {}), FQ, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let ww = null,
      Lw = !1;

    function qw() {
      try {
        return globalThis.WebAssembly === HF
      } catch {
        return !1
      }
    }

    function ow(QQ) {
      try {
        return function(QQ) {
          const {
            holder: FQ,
            key: wQ,
            onNamespace: LQ,
            inSecureContext: qQ
          } = QQ, oQ = FQ(), DQ = GF(oQ, wQ);
          if (!DQ) return !(qQ && !0 === globalThis.isSecureContext);
          const kQ = dF(DQ, QQ);
          if (!Qw(kQ, QQ)) return !1;
          if (LQ) {
            const FQ = globalThis.WebAssembly;
            if (FQ !== oQ && null !== FQ && ("object" === typeof FQ || "function" === typeof FQ)) {
              const LQ = mF(FQ, wQ);
              return LQ === kQ || void 0 === LQ || Qw(LQ, QQ)
            }
          }
          return !0
        }(QQ)
      } catch {
        return !1
      }
    }

    function Dw(QQ) {
      const FQ = `wh:${QQ.code}`;
      if ("punished" === QQ.tier) return FQ;
      try {
        return `${FQ}${dQ(kw(QQ))}`
      } catch {
        return `${FQ}${dQ(void 0)}`
      }
    }

    function kw(QQ) {
      const FQ = GF(QQ.holder(), QQ.key),
        wQ = void 0 === FQ ? void 0 : dF(FQ, QQ);
      return QQ.onNamespace && !qw() && Qw(wQ, QQ) ? mF(globalThis.WebAssembly, QQ.key) : wQ
    }

    function vw(QQ) {
      if (ZF(QQ)) return 5;
      const FQ = QF(QQ);
      return nF(FQ) ? 4 : PF(QQ) ? 3 : jF(FQ) ? function(QQ) {
        return NQ(DF, NF, [QQ])
      }(FQ) ? -1 : FQ === KF ? 0 : 1 : 2
    }

    function mw() {
      const QQ = function() {
        const QQ = TQ();
        return SQ === MQ || SQ === GQ ? (NQ = UQ, IQ = sQ) : NQ = DQ, QQ
      }();
      try {
        if (null === ww || !ZF(ww)) {
          const QQ = function() {
            if (void 0 === HF) return null;
            let QQ = qw() ? null : "wh:wa";
            const FQ = FQ => {
              null !== FQ && (null === QQ || vw(FQ) > vw(QQ)) && (QQ = FQ)
            };
            for (let wQ = 0; wQ < pF.length; wQ++) {
              const QQ = pF[wQ];
              void 0 === QQ || ow(QQ) || FQ(Dw(QQ))
            }
            FQ((0, FF.m)());
            for (let wQ = 0; wQ < RF.length; wQ++) {
              const QQ = RF[wQ];
              void 0 === QQ || ow(QQ) || FQ(rF(QQ))
            }
            return QQ
          }();
          (null === ww || null !== QQ && vw(QQ) > vw(ww)) && (ww = QQ)
        }
      } finally {
        zQ(QQ)
      }
    }

    function uw() {
      Lw = !0
    }

    function Hw() {
      if (Lw) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && mw(), null !== ww) return ww;
      if (void 0 === HF) return "wn:unsupported";
      const QQ = (0, LQ.p)();
      return null === QQ ? null : `wn:${QQ}`
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);