export const id = 126;
export const ids = [126];
export const modules = {
  5959: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => DT,
      f: () => ST,
      h: () => tT,
      j: () => MT,
      k: () => mT,
      l: () => fT,
      p: () => kT,
      t: () => ET,
      w: () => cT,
      A: () => IT,
      B: () => oT
    });
    var VB = dB(3211),
      yB = dB(3219);
    const pB = Function.prototype.toString,
      lB = RegExp.prototype.exec,
      JB = Reflect.apply,
      YB = Function.prototype.call,
      gB = Function.prototype.apply,
      oB = Function.prototype.bind,
      kB = Object.defineProperty,
      LB = Uint8Array;
    let OB, DB;
    try {
      OB = globalThis.crypto, DB = void 0 === OB || null === OB ? void 0 : OB.getRandomValues
    } catch {}
    const uB = "bloxdBindApply";
    let HB;
    try {
      const BB = YB;
      kB(BB, uB, {
        __proto__: null,
        value: oB,
        configurable: !0
      });
      try {
        HB = BB[uB](gB)
      } finally {
        delete BB[uB]
      }
    } catch {}
    const EB = 16,
      vB = 256,
      mB = 0,
      iB = 1,
      NB = 2,
      tB = 3;
    let fB, sB = mB,
      MB = JB,
      zB = 0;

    function wB(BB, TB) {
      return BB === `function ${TB}() { [native code] }` || BB === `function ${TB}() {\n    [native code]\n}`
    }
    const UB = 0,
      FB = 1,
      KB = 2;
    let rB = UB;

    function IB(BB, TB, dB) {
      if (rB === KB && sB === iB && ! function() {
          const BB = fB;
          return zB >= vB && (MB(DB, OB, [BB]), zB = 0), BB[zB++] < 256 / EB
        }()) return function(BB, TB, dB) {
        return MB(BB, TB, dB ?? 0)
      }(...arguments);
      if (rB === UB || sB === NB) return JB(BB, TB, dB);
      let VB;
      rB = UB;
      try {
        sB === mB && (sB = tB, sB = function() {
          const BB = JB(pB, JB, []);
          if (wB(BB, "apply")) return NB;
          if (null === JB(lB, /\(\.\.\.arguments\)/, [BB]) && null === JB(lB, /^function\s*\(\.\.\.[\w$]+\)/, [BB])) return NB;
          if ("function" !== typeof HB || "function" !== typeof YB || "function" !== typeof gB || "function" !== typeof oB || "function" !== typeof kB || "function" !== typeof DB || "function" !== typeof LB || !wB(JB(pB, YB, []), "call") || !wB(JB(pB, gB, []), "apply") || !wB(JB(pB, oB, []), "bind") || !wB(JB(pB, kB, []), "defineProperty") || !wB(JB(pB, DB, []), "getRandomValues") || !wB(JB(pB, LB, []), "Uint8Array")) return NB;
          const TB = HB,
            dB = {},
            VB = function(BB) {
              return this === dB && BB === dB
            };
          try {
            if (!0 !== TB(VB, dB, [dB])) return NB;
            const BB = new LB(vB);
            TB(DB, OB, [BB]), fB = BB
          } catch {
            return NB
          }
          return MB = TB, iB
        }()), VB = JB(BB, TB, dB)
      } catch (yB) {
        throw sB = NB, yB
      }
      return rB = KB, VB
    }
    let cB = JB;

    function SB() {
      return (cB === JB ? 0 : 3) + rB
    }

    function PB() {
      const BB = SB();
      return cB = JB, BB
    }

    function QB(BB) {
      cB = BB >= 3 ? IB : JB, rB = BB % 3
    }
    const RB = Function.prototype.toString,
      aB = Object.getOwnPropertyDescriptor,
      ZB = RegExp.prototype.exec,
      XB = Object.prototype.hasOwnProperty,
      WB = Set.prototype.has,
      hB = Reflect.get,
      CB = Object.getPrototypeOf,
      GB = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function qB(BB, TB, dB) {
      return {
        code: BB,
        holder: TB,
        key: dB,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${dB}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function xB() {
      return GB
    }
    const jB = GB?.Instance.prototype,
      AB = GB?.Memory.prototype;

    function bB() {
      return AB
    }
    let nB, eB;
    try {
      const BB = globalThis.crypto,
        TB = BB?.subtle;
      nB = BB ? CB(BB) : void 0, eB = TB ? CB(TB) : void 0
    } catch {}
    const BT = [qB("in", xB, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), qB("is", xB, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), qB("co", xB, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), qB("cs", xB, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), qB("mo", xB, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), qB("it", xB, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), qB("me", xB, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), qB("ex", (function() {
      return jB
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), qB("bu", bB, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), qB("gr", bB, "grow", {
      tier: "punished"
    }), qB("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), qB("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), qB("su", (function() {
      return nB
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), qB("dg", (function() {
      return eB
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function TT(BB) {
      let TB;
      try {
        const dB = hB(globalThis, BB);
        TB = "function" === typeof dB ? dB.prototype : void 0
      } catch {}
      return () => TB
    }

    function dT(BB, TB, dB) {
      return dB.map((dB => qB(BB, TB, dB)))
    }
    const VT = qB("rx", TT("HTMLCanvasElement"), "getContext"),
      yT = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      pT = {
        webgpu: [...dT("gd", TT("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...dT("gq", TT("GPUQueue"), ["submit", "writeBuffer"]), ...dT("ge", TT("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...dT("gp", TT("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), VT],
        webgl: [...dT("g2", TT("WebGL2RenderingContext"), [...yT, "drawArraysInstanced", "drawElementsInstanced"]), VT],
        webgl1: [...dT("g1", TT("WebGLRenderingContext"), yT), VT]
      };
    let lT = [];

    function JT(BB) {
      let {
        code: TB,
        key: dB
      } = BB;
      return `wh:${TB}:${dB}`
    }
    const YT = new Set(Object.values(pT).flatMap((BB => BB.map(JT)))),
      gT = JT(VT);

    function oT(BB) {
      lT = pT[BB]
    }

    function kT(BB) {
      const TB = PB();
      try {
        return cB(WB, YT, [BB])
      } finally {
        QB(TB)
      }
    }

    function LT(BB) {
      return new Set(BT.filter((TB => TB.tier === BB)).map((BB => `wh:${BB.code}`)))
    }
    const OT = LT("punished"),
      DT = !1,
      uT = new Set(yB.c),
      HT = LT("weighted");

    function ET(BB) {
      const TB = PB();
      try {
        return vT(BB)
      } finally {
        QB(TB)
      }
    }

    function vT(BB) {
      return cB(WB, HT, [BB])
    }

    function mT(BB) {
      const TB = PB();
      try {
        return iT(BB)
      } finally {
        QB(TB)
      }
    }

    function iT(BB) {
      return cB(WB, uT, [BB])
    }

    function NT(BB) {
      return "wb" === BB || cB(WB, OT, [BB])
    }

    function tT(BB) {
      const TB = PB();
      try {
        return NT(BB) || iT(BB)
      } finally {
        QB(TB)
      }
    }

    function fT(BB) {
      const TB = PB();
      try {
        return "wb" === BB || DT && NT(BB)
      } finally {
        QB(TB)
      }
    }

    function sT(BB, TB) {
      let {
        isConstructor: dB,
        native: VB
      } = TB;
      return "function" === typeof BB && (!(!dB && cB(XB, BB, ["prototype"])) && null !== cB(ZB, VB, [cB(RB, BB, [])]))
    }

    function MT(BB, TB) {
      return sT(BB, qB("", (() => {}), TB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }

    function zT(BB) {
      const {
        holder: TB,
        key: dB,
        isGetter: VB,
        onNamespace: yB,
        inSecureContext: pB
      } = BB, lB = TB(), JB = function(BB, TB) {
        for (let dB = BB; void 0 !== dB && null !== dB; dB = CB(dB)) {
          const BB = aB(dB, TB);
          if (BB) return BB
        }
      }(lB, dB);
      if (!JB) return !(pB && !0 === globalThis.isSecureContext);
      const YB = VB ? JB.get : JB.value;
      if (!sT(YB, BB)) return !1;
      if (yB) {
        const TB = globalThis.WebAssembly;
        if (TB !== lB && null !== TB && ("object" === typeof TB || "function" === typeof TB)) {
          const VB = hB(TB, dB);
          return VB === YB || void 0 === VB || sT(VB, BB)
        }
      }
      return !0
    }
    let wT = null,
      UT = !1;

    function FT(BB) {
      try {
        return zT(BB)
      } catch {
        return !1
      }
    }

    function KT() {
      if (void 0 === GB) return null;
      let BB = function() {
        try {
          return globalThis.WebAssembly === GB
        } catch {
          return !1
        }
      }() ? null : "wh:wa";
      const TB = TB => {
        null !== TB && (null === BB || rT(TB) > rT(BB)) && (BB = TB)
      };
      for (let dB = 0; dB < BT.length; dB++) {
        const BB = BT[dB];
        void 0 === BB || FT(BB) || TB(`wh:${BB.code}`)
      }
      TB((0, yB.k)());
      for (let dB = 0; dB < lT.length; dB++) {
        const BB = lT[dB];
        void 0 === BB || FT(BB) || TB(JT(BB))
      }
      return BB
    }

    function rT(BB) {
      return NT(BB) ? 5 : vT(BB) ? 4 : iT(BB) ? 3 : function(BB) {
        return cB(WB, YT, [BB])
      }(BB) ? BB === gT ? 0 : 1 : 2
    }

    function IT() {
      const BB = function() {
        const BB = SB();
        return sB === mB || sB === iB ? (cB = IB, rB = FB) : cB = JB, BB
      }();
      try {
        if (null === wT || !NT(wT)) {
          const BB = KT();
          (null === wT || null !== BB && rT(BB) > rT(wT)) && (wT = BB)
        }
      } finally {
        QB(BB)
      }
    }

    function cT() {
      UT = !0
    }

    function ST() {
      if (UT) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && IT(), null !== wT) return wT;
      if (void 0 === GB) return "wn:unsupported";
      const BB = (0, VB.t)();
      return null === BB ? null : `wn:${BB}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);