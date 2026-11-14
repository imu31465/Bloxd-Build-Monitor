export const id = 123;
export const ids = [123];
export const modules = {
  5599: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => TB,
      g: () => CB,
      i: () => pB,
      m: () => SB,
      p: () => hB,
      r: () => PB,
      u: () => eB,
      y: () => QB,
      z: () => ZB,
      B: () => MB
    });
    var Vc = nc(2870),
      Ic = nc(2878);
    const rB = Function.prototype.toString,
      uc = RegExp.prototype.exec,
      sc = Reflect.apply,
      Mc = Function.prototype.call,
      Pc = Function.prototype.apply,
      qB = Function.prototype.bind,
      Oc = Object.defineProperty,
      Tc = Uint8Array;
    let fc, mB;
    try {
      fc = globalThis.crypto, mB = void 0 === fc || null === fc ? void 0 : fc.getRandomValues
    } catch {}
    const ec = "bloxdBindApply";
    let tB;
    try {
      const cB = Mc;
      Oc(cB, ec, {
        __proto__: null,
        value: qB,
        configurable: !0
      });
      try {
        tB = cB[ec](Pc)
      } finally {
        delete cB[ec]
      }
    } catch {}
    const Sc = 16,
      yB = 256,
      zB = 0,
      pc = 1,
      hc = 2,
      aB = 3;
    let lc, Yc = zB,
      Lc = sc,
      gB = 0;

    function Uc(cB, Bc) {
      return cB === `function ${Bc}() { [native code] }` || cB === `function ${Bc}() {\n    [native code]\n}`
    }
    const bB = 0,
      Zc = 1,
      Qc = 2;
    let Cc = bB;

    function vB(cB, Bc, nc) {
      if (Cc === Qc && Yc === pc && ! function() {
          const cB = lc;
          return gB >= yB && (Lc(mB, fc, [cB]), gB = 0), cB[gB++] < 256 / Sc
        }()) return function(cB, Bc, nc) {
        return Lc(cB, Bc, nc ?? 0)
      }(...arguments);
      if (Cc === bB || Yc === hc) return sc(cB, Bc, nc);
      let Vc;
      Cc = bB;
      try {
        Yc === zB && (Yc = aB, Yc = function() {
          const cB = sc(rB, sc, []);
          if (Uc(cB, "apply")) return hc;
          if (null === sc(uc, /\(\.\.\.arguments\)/, [cB]) && null === sc(uc, /^function\s*\(\.\.\.[\w$]+\)/, [cB])) return hc;
          if ("function" !== typeof tB || "function" !== typeof Mc || "function" !== typeof Pc || "function" !== typeof qB || "function" !== typeof Oc || "function" !== typeof mB || "function" !== typeof Tc || !Uc(sc(rB, Mc, []), "call") || !Uc(sc(rB, Pc, []), "apply") || !Uc(sc(rB, qB, []), "bind") || !Uc(sc(rB, Oc, []), "defineProperty") || !Uc(sc(rB, mB, []), "getRandomValues") || !Uc(sc(rB, Tc, []), "Uint8Array")) return hc;
          const Bc = tB,
            nc = {},
            Vc = function(cB) {
              return this === nc && cB === nc
            };
          try {
            if (!0 !== Bc(Vc, nc, [nc])) return hc;
            const cB = new Tc(yB);
            Bc(mB, fc, [cB]), lc = cB
          } catch {
            return hc
          }
          return Lc = Bc, pc
        }()), Vc = sc(cB, Bc, nc)
      } catch (Ic) {
        throw Yc = hc, Ic
      }
      return Cc = Qc, Vc
    }
    let Dc = sc;

    function Nc() {
      return (Dc === sc ? 0 : 3) + Cc
    }

    function Ec() {
      const cB = Nc();
      return Dc = sc, cB
    }

    function oc(cB) {
      Dc = cB >= 3 ? vB : sc, Cc = cB % 3
    }
    const Wc = Function.prototype.toString,
      wc = Object.getOwnPropertyDescriptor,
      kB = RegExp.prototype.exec,
      Xc = Object.prototype.hasOwnProperty,
      Hc = Set.prototype.has,
      Fc = Reflect.get,
      Jc = Object.getPrototypeOf,
      jB = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function Rc(cB, Bc, nc) {
      return {
        code: cB,
        holder: Bc,
        key: nc,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${nc}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function iB() {
      return jB
    }
    const Kc = jB?.Instance.prototype,
      xB = jB?.Memory.prototype;

    function dc() {
      return xB
    }
    let Ac, Gc;
    try {
      const cB = globalThis.crypto,
        Bc = cB?.subtle;
      Ac = cB ? Jc(cB) : void 0, Gc = Bc ? Jc(Bc) : void 0
    } catch {}
    const cn = [Rc("in", iB, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), Rc("is", iB, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Rc("co", iB, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), Rc("cs", iB, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Rc("mo", iB, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Rc("it", iB, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Rc("me", iB, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Rc("ex", (function() {
      return Kc
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), Rc("bu", dc, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), Rc("gr", dc, "grow", {
      tier: "punished"
    }), Rc("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), Rc("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Rc("su", (function() {
      return Ac
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Rc("dg", (function() {
      return Gc
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function BB(cB) {
      let Bc;
      try {
        const nc = Fc(globalThis, cB);
        Bc = "function" === typeof nc ? nc.prototype : void 0
      } catch {}
      return () => Bc
    }

    function nB(cB, Bc, nc) {
      return nc.map((nc => Rc(cB, Bc, nc)))
    }
    const VB = Rc("rx", BB("HTMLCanvasElement"), "getContext"),
      IB = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      rn = {
        webgpu: [...nB("gd", BB("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...nB("gq", BB("GPUQueue"), ["submit", "writeBuffer"]), ...nB("ge", BB("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...nB("gp", BB("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), VB],
        webgl: [...nB("g2", BB("WebGL2RenderingContext"), [...IB, "drawArraysInstanced", "drawElementsInstanced"]), VB],
        webgl1: [...nB("g1", BB("WebGLRenderingContext"), IB), VB]
      };
    let uB = [];
    const sB = new Set(Object.values(rn).flatMap((cB => cB.map((cB => `wh:${cB.code}`)))));

    function MB(cB) {
      uB = rn[cB]
    }

    function PB(cB) {
      const Bc = Ec();
      try {
        return Dc(Hc, sB, [cB])
      } finally {
        oc(Bc)
      }
    }

    function qn(cB) {
      return new Set(cn.filter((Bc => Bc.tier === cB)).map((cB => `wh:${cB.code}`)))
    }
    const OB = qn("punished"),
      TB = !1,
      fB = new Set(Ic.b),
      mn = qn("weighted");

    function eB(cB) {
      const Bc = Ec();
      try {
        return tn(cB)
      } finally {
        oc(Bc)
      }
    }

    function tn(cB) {
      return Dc(Hc, mn, [cB])
    }

    function SB(cB) {
      const Bc = Ec();
      try {
        return yn(cB)
      } finally {
        oc(Bc)
      }
    }

    function yn(cB) {
      return Dc(Hc, fB, [cB])
    }

    function zn(cB) {
      return "wb" === cB || Dc(Hc, OB, [cB])
    }

    function pB(cB) {
      const Bc = Ec();
      try {
        return zn(cB) || yn(cB)
      } finally {
        oc(Bc)
      }
    }

    function hB(cB) {
      const Bc = Ec();
      try {
        return "wb" === cB || TB && zn(cB)
      } finally {
        oc(Bc)
      }
    }

    function an(cB, Bc) {
      let {
        isConstructor: nc,
        native: Vc
      } = Bc;
      return "function" === typeof cB && (!(!nc && Dc(Xc, cB, ["prototype"])) && null !== Dc(kB, Vc, [Dc(Wc, cB, [])]))
    }

    function lB(cB) {
      const {
        holder: Bc,
        key: nc,
        isGetter: Vc,
        onNamespace: Ic,
        inSecureContext: rB
      } = cB, uc = Bc(), sc = function(cB, Bc) {
        for (let nc = cB; void 0 !== nc && null !== nc; nc = Jc(nc)) {
          const cB = wc(nc, Bc);
          if (cB) return cB
        }
      }(uc, nc);
      if (!sc) return !(rB && !0 === globalThis.isSecureContext);
      const Mc = Vc ? sc.get : sc.value;
      if (!an(Mc, cB)) return !1;
      if (Ic) {
        const Bc = globalThis.WebAssembly;
        if (Bc !== uc && null !== Bc && ("object" === typeof Bc || "function" === typeof Bc)) {
          const Vc = Fc(Bc, nc);
          return Vc === Mc || void 0 === Vc || an(Vc, cB)
        }
      }
      return !0
    }
    let YB = null,
      LB = !1;

    function gn(cB) {
      try {
        return lB(cB)
      } catch {
        return !1
      }
    }

    function UB() {
      if (void 0 === jB) return null;
      let cB = function() {
        try {
          return globalThis.WebAssembly === jB
        } catch {
          return !1
        }
      }() ? null : "wh:wa";
      const Bc = Bc => {
        null !== Bc && (null === cB || bn(Bc) > bn(cB)) && (cB = Bc)
      };
      for (let nc = 0; nc < cn.length; nc++) {
        const cB = cn[nc];
        void 0 === cB || gn(cB) || Bc(`wh:${cB.code}`)
      }
      Bc((0, Ic.m)());
      for (let nc = 0; nc < uB.length; nc++) {
        const cB = uB[nc];
        void 0 === cB || gn(cB) || Bc(`wh:${cB.code}`)
      }
      return cB
    }

    function bn(cB) {
      return zn(cB) ? 5 : tn(cB) ? 4 : yn(cB) ? 3 : function(cB) {
        return Dc(Hc, sB, [cB])
      }(cB) ? "wh:rx" === cB ? 0 : 1 : 2
    }

    function ZB() {
      const cB = function() {
        const cB = Nc();
        return Yc === zB || Yc === pc ? (Dc = vB, Cc = Zc) : Dc = sc, cB
      }();
      try {
        if (null === YB || !zn(YB)) {
          const cB = UB();
          (null === YB || null !== cB && bn(cB) > bn(YB)) && (YB = cB)
        }
      } finally {
        oc(cB)
      }
    }

    function QB() {
      LB = !0
    }

    function CB() {
      if (LB) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && ZB(), null !== YB) return YB;
      if (void 0 === jB) return "wn:unsupported";
      const cB = (0, Vc.t)();
      return null === cB ? null : `wn:${cB}`
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);