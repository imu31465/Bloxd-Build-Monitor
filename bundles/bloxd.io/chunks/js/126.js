export const id = 126;
export const ids = [126];
export const modules = {
  5971: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => nc,
      d: () => Pc,
      f: () => Ec,
      g: () => yc,
      j: () => vc,
      l: () => Vc,
      n: () => hc,
      r: () => xc,
      t: () => Hc,
      u: () => gc,
      w: () => Yc
    });
    var FJ = ZJ(3178),
      UJ = ZJ(3190);
    const eJ = Function.prototype.toString,
      XJ = RegExp.prototype.exec,
      AJ = Reflect.apply,
      qJ = Function.prototype.call,
      jJ = Function.prototype.apply,
      YJ = Function.prototype.bind,
      hJ = Object.defineProperty,
      DJ = Uint8Array;
    let sJ, nJ;
    try {
      sJ = globalThis.crypto, nJ = void 0 === sJ || null === sJ ? void 0 : sJ.getRandomValues
    } catch {}
    const GJ = "bloxdBindApply";
    let fJ;
    try {
      const JJ = qJ;
      hJ(JJ, GJ, {
        __proto__: null,
        value: YJ,
        configurable: !0
      });
      try {
        fJ = JJ[GJ](jJ)
      } finally {
        delete JJ[GJ]
      }
    } catch {}
    const xJ = 16,
      rJ = 256,
      vJ = 0,
      mJ = 1,
      QJ = 2,
      EJ = 3;
    let VJ, KJ = vJ,
      yJ = AJ,
      SJ = 0;

    function IJ(JJ, cJ) {
      return JJ === `function ${cJ}() { [native code] }` || JJ === `function ${cJ}() {\n    [native code]\n}`
    }
    const MJ = 0,
      bJ = 1,
      wJ = 2;
    let WJ = MJ;

    function gJ(JJ, cJ, ZJ) {
      if (WJ === wJ && KJ === mJ && ! function() {
          const JJ = VJ;
          return SJ >= rJ && (yJ(nJ, sJ, [JJ]), SJ = 0), JJ[SJ++] < 256 / xJ
        }()) return function(JJ, cJ, ZJ) {
        return yJ(JJ, cJ, ZJ ?? 0)
      }(...arguments);
      if (WJ === MJ || KJ === QJ) return AJ(JJ, cJ, ZJ);
      let FJ;
      WJ = MJ;
      try {
        KJ === vJ && (KJ = EJ, KJ = function() {
          const JJ = AJ(eJ, AJ, []);
          if (IJ(JJ, "apply")) return QJ;
          if (null === AJ(XJ, /\(\.\.\.arguments\)/, [JJ]) && null === AJ(XJ, /^function\s*\(\.\.\.[\w$]+\)/, [JJ])) return QJ;
          if ("function" !== typeof fJ || "function" !== typeof qJ || "function" !== typeof jJ || "function" !== typeof YJ || "function" !== typeof hJ || "function" !== typeof nJ || "function" !== typeof DJ || !IJ(AJ(eJ, qJ, []), "call") || !IJ(AJ(eJ, jJ, []), "apply") || !IJ(AJ(eJ, YJ, []), "bind") || !IJ(AJ(eJ, hJ, []), "defineProperty") || !IJ(AJ(eJ, nJ, []), "getRandomValues") || !IJ(AJ(eJ, DJ, []), "Uint8Array")) return QJ;
          const cJ = fJ,
            ZJ = {},
            FJ = function(JJ) {
              return this === ZJ && JJ === ZJ
            };
          try {
            if (!0 !== cJ(FJ, ZJ, [ZJ])) return QJ;
            const JJ = new DJ(rJ);
            cJ(nJ, sJ, [JJ]), VJ = JJ
          } catch {
            return QJ
          }
          return yJ = cJ, mJ
        }()), FJ = AJ(JJ, cJ, ZJ)
      } catch (UJ) {
        throw KJ = QJ, UJ
      }
      return WJ = wJ, FJ
    }
    let HJ = AJ;

    function PJ() {
      return (HJ === AJ ? 0 : 3) + WJ
    }

    function kJ() {
      const JJ = PJ();
      return HJ = AJ, JJ
    }

    function pJ(JJ) {
      HJ = JJ >= 3 ? gJ : AJ, WJ = JJ % 3
    }
    const dJ = Function.prototype.toString,
      zJ = Object.getOwnPropertyDescriptor,
      NJ = RegExp.prototype.exec,
      OJ = Object.prototype.hasOwnProperty,
      TJ = Set.prototype.has,
      CJ = Reflect.get,
      uJ = Object.getPrototypeOf,
      iJ = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function RJ(JJ, cJ, ZJ) {
      return {
        code: JJ,
        holder: cJ,
        key: ZJ,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${ZJ}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function LJ() {
      return iJ
    }
    const aJ = iJ?.Instance.prototype,
      BJ = iJ?.Memory.prototype;

    function tJ() {
      return BJ
    }
    let oJ, lJ;
    try {
      const JJ = globalThis.crypto,
        cJ = JJ?.subtle;
      oJ = JJ ? uJ(JJ) : void 0, lJ = cJ ? uJ(cJ) : void 0
    } catch {}
    const Jc = [RJ("in", LJ, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), RJ("is", LJ, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), RJ("co", LJ, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), RJ("cs", LJ, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), RJ("mo", LJ, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), RJ("it", LJ, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), RJ("me", LJ, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), RJ("ex", (function() {
      return aJ
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), RJ("bu", tJ, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), RJ("gr", tJ, "grow", {
      tier: "punished"
    }), RJ("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), RJ("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), RJ("su", (function() {
      return oJ
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), RJ("dg", (function() {
      return lJ
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function cc(JJ) {
      let cJ;
      try {
        const ZJ = CJ(globalThis, JJ);
        cJ = "function" === typeof ZJ ? ZJ.prototype : void 0
      } catch {}
      return () => cJ
    }

    function Zc(JJ, cJ, ZJ) {
      return ZJ.map((ZJ => RJ(JJ, cJ, ZJ)))
    }
    const Fc = RJ("rx", cc("HTMLCanvasElement"), "getContext"),
      Uc = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      ec = {
        webgpu: [...Zc("gd", cc("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...Zc("gq", cc("GPUQueue"), ["submit", "writeBuffer"]), ...Zc("ge", cc("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...Zc("gp", cc("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), Fc],
        webgl: [...Zc("g2", cc("WebGL2RenderingContext"), [...Uc, "drawArraysInstanced", "drawElementsInstanced"]), Fc],
        webgl1: [...Zc("g1", cc("WebGLRenderingContext"), Uc), Fc]
      };
    let Xc = [];

    function Ac(JJ) {
      let {
        code: cJ,
        key: ZJ
      } = JJ;
      return `wh:${cJ}:${ZJ}`
    }
    const qc = new Set(Object.values(ec).flatMap((JJ => JJ.map(Ac)))),
      jc = Ac(Fc);

    function Yc(JJ) {
      Xc = ec[JJ]
    }

    function hc(JJ) {
      const cJ = kJ();
      try {
        return HJ(TJ, qc, [JJ])
      } finally {
        pJ(cJ)
      }
    }

    function Dc(JJ) {
      return new Set(Jc.filter((cJ => cJ.tier === JJ)).map((JJ => `wh:${JJ.code}`)))
    }
    const sc = Dc("punished"),
      nc = !1,
      Gc = new Set(UJ.e),
      fc = Dc("weighted");

    function xc(JJ) {
      const cJ = kJ();
      try {
        return rc(JJ)
      } finally {
        pJ(cJ)
      }
    }

    function rc(JJ) {
      return HJ(TJ, fc, [JJ])
    }

    function vc(JJ) {
      const cJ = kJ();
      try {
        return mc(JJ)
      } finally {
        pJ(cJ)
      }
    }

    function mc(JJ) {
      return HJ(TJ, Gc, [JJ])
    }

    function Qc(JJ) {
      return "wb" === JJ || HJ(TJ, sc, [JJ])
    }

    function Ec(JJ) {
      const cJ = kJ();
      try {
        return Qc(JJ) || mc(JJ)
      } finally {
        pJ(cJ)
      }
    }

    function Vc(JJ) {
      const cJ = kJ();
      try {
        return "wb" === JJ || nc && Qc(JJ)
      } finally {
        pJ(cJ)
      }
    }

    function Kc(JJ, cJ) {
      let {
        isConstructor: ZJ,
        native: FJ
      } = cJ;
      return "function" === typeof JJ && (!(!ZJ && HJ(OJ, JJ, ["prototype"])) && null !== HJ(NJ, FJ, [HJ(dJ, JJ, [])]))
    }

    function yc(JJ, cJ) {
      return Kc(JJ, RJ("", (() => {}), cJ, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }

    function Sc(JJ) {
      const {
        holder: cJ,
        key: ZJ,
        isGetter: FJ,
        onNamespace: UJ,
        inSecureContext: eJ
      } = JJ, XJ = cJ(), AJ = function(JJ, cJ) {
        for (let ZJ = JJ; void 0 !== ZJ && null !== ZJ; ZJ = uJ(ZJ)) {
          const JJ = zJ(ZJ, cJ);
          if (JJ) return JJ
        }
      }(XJ, ZJ);
      if (!AJ) return !(eJ && !0 === globalThis.isSecureContext);
      const qJ = FJ ? AJ.get : AJ.value;
      if (!Kc(qJ, JJ)) return !1;
      if (UJ) {
        const cJ = globalThis.WebAssembly;
        if (cJ !== XJ && null !== cJ && ("object" === typeof cJ || "function" === typeof cJ)) {
          const FJ = CJ(cJ, ZJ);
          return FJ === qJ || void 0 === FJ || Kc(FJ, JJ)
        }
      }
      return !0
    }
    let Ic = null,
      Mc = !1;

    function bc(JJ) {
      try {
        return Sc(JJ)
      } catch {
        return !1
      }
    }

    function wc() {
      if (void 0 === iJ) return null;
      let JJ = function() {
        try {
          return globalThis.WebAssembly === iJ
        } catch {
          return !1
        }
      }() ? null : "wh:wa";
      const cJ = cJ => {
        null !== cJ && (null === JJ || Wc(cJ) > Wc(JJ)) && (JJ = cJ)
      };
      for (let ZJ = 0; ZJ < Jc.length; ZJ++) {
        const JJ = Jc[ZJ];
        void 0 === JJ || bc(JJ) || cJ(`wh:${JJ.code}`)
      }
      cJ((0, UJ.n)());
      for (let ZJ = 0; ZJ < Xc.length; ZJ++) {
        const JJ = Xc[ZJ];
        void 0 === JJ || bc(JJ) || cJ(Ac(JJ))
      }
      return JJ
    }

    function Wc(JJ) {
      return Qc(JJ) ? 5 : rc(JJ) ? 4 : mc(JJ) ? 3 : function(JJ) {
        return HJ(TJ, qc, [JJ])
      }(JJ) ? JJ === jc ? 0 : 1 : 2
    }

    function gc() {
      const JJ = function() {
        const JJ = PJ();
        return KJ === vJ || KJ === mJ ? (HJ = gJ, WJ = bJ) : HJ = AJ, JJ
      }();
      try {
        if (null === Ic || !Qc(Ic)) {
          const JJ = wc();
          (null === Ic || null !== JJ && Wc(JJ) > Wc(Ic)) && (Ic = JJ)
        }
      } finally {
        pJ(JJ)
      }
    }

    function Hc() {
      Mc = !0
    }

    function Pc() {
      if (Mc) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && gc(), null !== Ic) return Ic;
      if (void 0 === iJ) return "wn:unsupported";
      const JJ = (0, FJ.r)();
      return null === JJ ? null : `wn:${JJ}`
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);