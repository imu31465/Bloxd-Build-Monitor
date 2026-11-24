export const id = 78;
export const ids = [78];
export const modules = {
  4874: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => uI,
      h: () => hZ,
      l: () => KI,
      p: () => IZ,
      q: () => xI,
      s: () => VI,
      t: () => mI,
      w: () => AI,
      A: () => pI,
      D: () => nZ,
      F: () => cZ,
      H: () => tI,
      J: () => rI
    });
    var TB = ZB(3036);
    const JB = Function.prototype.toString,
      oB = RegExp.prototype.exec,
      GB = Reflect.apply,
      vB = Function.prototype.call,
      kB = Function.prototype.apply,
      cB = Function.prototype.bind,
      nB = Object.defineProperty,
      hB = Uint8Array;
    let zB, FB;
    try {
      zB = globalThis.crypto, FB = void 0 === zB || null === zB ? void 0 : zB.getRandomValues
    } catch {}
    const NB = "bloxdBindApply";
    let gB;
    try {
      const BB = vB;
      nB(BB, NB, {
        __proto__: null,
        value: cB,
        configurable: !0
      });
      try {
        gB = BB[NB](kB)
      } finally {
        delete BB[NB]
      }
    } catch {}
    const qB = 16,
      yB = 256,
      UB = 0,
      WB = 1,
      dB = 2,
      CB = 3;
    let QB, sB = UB,
      wB = GB,
      OB = 0;

    function YB(BB, IB) {
      return BB === `function ${IB}() { [native code] }` || BB === `function ${IB}() {\n    [native code]\n}`
    }
    const iB = 0,
      pB = 1,
      aB = 2;
    let HB = iB;

    function MB(BB, IB, ZB) {
      if (HB === aB && sB === WB && ! function() {
          const BB = QB;
          return OB >= yB && (wB(FB, zB, [BB]), OB = 0), BB[OB++] < 256 / qB
        }()) return function(BB, IB, ZB) {
        return wB(BB, IB, ZB ?? 0)
      }(...arguments);
      if (HB === iB || sB === dB) return GB(BB, IB, ZB);
      let TB;
      HB = iB;
      try {
        sB === UB && (sB = CB, sB = function() {
          const BB = GB(JB, GB, []);
          if (YB(BB, "apply")) return dB;
          if (null === GB(oB, /\(\.\.\.arguments\)/, [BB]) && null === GB(oB, /^function\s*\(\.\.\.[\w$]+\)/, [BB])) return dB;
          if ("function" !== typeof gB || "function" !== typeof vB || "function" !== typeof kB || "function" !== typeof cB || "function" !== typeof nB || "function" !== typeof FB || "function" !== typeof hB || !YB(GB(JB, vB, []), "call") || !YB(GB(JB, kB, []), "apply") || !YB(GB(JB, cB, []), "bind") || !YB(GB(JB, nB, []), "defineProperty") || !YB(GB(JB, FB, []), "getRandomValues") || !YB(GB(JB, hB, []), "Uint8Array")) return dB;
          const IB = gB,
            ZB = {},
            TB = function(BB) {
              return this === ZB && BB === ZB
            };
          try {
            if (!0 !== IB(TB, ZB, [ZB])) return dB;
            const BB = new hB(yB);
            IB(FB, zB, [BB]), QB = BB
          } catch {
            return dB
          }
          return wB = IB, WB
        }()), TB = GB(BB, IB, ZB)
      } catch (NB) {
        throw sB = dB, NB
      }
      return HB = aB, TB
    }
    let jB = GB;

    function PB() {
      return (jB === GB ? 0 : 3) + HB
    }

    function RB() {
      const BB = PB();
      return jB = GB, BB
    }

    function rB(BB) {
      jB = BB >= 3 ? MB : GB, HB = BB % 3
    }
    const mB = Function.prototype.toString,
      XB = Object.getOwnPropertyDescriptor,
      LB = Object.prototype.hasOwnProperty,
      eB = RegExp.prototype.exec,
      uB = TextEncoder.prototype.encodeInto,
      fB = String.prototype.startsWith,
      lB = Number.prototype.toString,
      AB = WeakMap.prototype.get,
      tB = WeakMap.prototype.set,
      bB = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      xB = new TextEncoder,
      EB = new Uint8Array(1024),
      DB = 9999999,
      KB = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      VB = new WeakMap;

    function SB(BB) {
      if ("function" !== typeof BB) return "#a0.0";
      const IB = jB(AB, VB, [BB]);
      if (void 0 !== IB) return IB;
      const ZB = jB(mB, BB, []),
        TB = ZB.length > DB ? DB : ZB.length,
        JB = `#${function(BB,IB){const ZB=jB(eB,bB,[IB]);if(null===ZB)return"s";const TB=ZB[1];if("ProxyObject"===TB)return"p";if(""!==TB)return jB(fB,TB,["bound "])?"b":"n";try{const IB=XB(BB,"name"),ZB=void 0!==IB&&jB(LB,IB,["value"])?IB.value:void 0;return"string"===typeof ZB&&jB(fB,ZB,["bound "])?"b":"p"}catch{return"p"}}(BB,ZB)}${TB}.${function(BB){const{written:IB}=jB(uB,xB,[BB,EB]);let ZB=2166136261;for(let TB=0;TB<IB;TB++)ZB=(ZB^EB[TB])>>>0,ZB=ZB+(ZB<<1)+(ZB<<4)+(ZB<<7)+(ZB<<8)+(ZB<<24)>>>0;return jB(lB,ZB,[36])}(ZB)}`;
      return jB(tB, VB, [BB, JB]), JB
    }

    function BI(BB) {
      const IB = jB(eB, KB, [BB]);
      return null === IB ? BB : IB[1]
    }
    var II = ZB(3059);
    const ZI = Function.prototype.toString,
      TI = Object.getOwnPropertyDescriptor,
      JI = RegExp.prototype.exec,
      oI = Object.prototype.hasOwnProperty,
      GI = Set.prototype.has,
      vI = WeakMap.prototype.get,
      kI = WeakMap.prototype.set,
      cI = Reflect.get,
      nI = Object.getPrototypeOf,
      hI = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function zI(BB, IB, ZB) {
      return {
        code: BB,
        holder: IB,
        key: ZB,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${ZB}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function FI() {
      return hI
    }
    const NI = hI?.Instance.prototype,
      gI = hI?.Memory.prototype;

    function qI() {
      return gI
    }
    let yI, UI;
    try {
      const BB = globalThis.crypto,
        IB = BB?.subtle;
      yI = BB ? nI(BB) : void 0, UI = IB ? nI(IB) : void 0
    } catch {}

    function WI(BB, IB) {
      for (let ZB = BB; void 0 !== ZB && null !== ZB; ZB = nI(ZB)) {
        const BB = TI(ZB, IB);
        if (BB) return BB
      }
    }
    const dI = [zI("in", FI, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), zI("is", FI, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), zI("co", FI, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), zI("cs", FI, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), zI("mo", FI, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), zI("it", FI, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), zI("me", FI, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), zI("ex", (function() {
      return NI
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), zI("bu", qI, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), zI("gr", qI, "grow", {
      tier: "punished"
    }), zI("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), zI("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), zI("su", (function() {
      return yI
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), zI("dg", (function() {
      return UI
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function CI(BB) {
      let IB;
      try {
        const ZB = cI(globalThis, BB);
        IB = "function" === typeof ZB ? ZB.prototype : void 0
      } catch {}
      return () => IB
    }

    function QI(BB, IB, ZB) {
      return ZB.map((ZB => zI(BB, IB, ZB)))
    }
    const sI = zI("rx", CI("HTMLCanvasElement"), "getContext"),
      wI = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      OI = {
        webgpu: [...QI("gd", CI("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...QI("gq", CI("GPUQueue"), ["submit", "writeBuffer"]), ...QI("ge", CI("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...QI("gp", CI("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), sI],
        webgl: [...QI("g2", CI("WebGL2RenderingContext"), [...wI, "drawArraysInstanced", "drawElementsInstanced"]), sI],
        webgl1: [...QI("g1", CI("WebGLRenderingContext"), wI), sI]
      };
    let YI = [];
    const iI = new WeakMap;

    function pI(BB, IB) {
      const ZB = RB();
      try {
        jB(kI, iI, [BB, IB])
      } finally {
        rB(ZB)
      }
    }

    function aI(BB) {
      try {
        const IB = vZ(BB),
          ZB = jB(vI, iI, [IB]);
        return BZ(ZB, BB) ? HI(BB, !0) : `${HI(BB,!1)}${SB(ZB??IB)}`
      } catch {
        return `${HI(BB,!1)}${SB(void 0)}`
      }
    }

    function HI(BB, IB) {
      let {
        code: ZB,
        key: TB
      } = BB;
      return `wh:${ZB}${IB?"-dbg":""}:${TB}`
    }

    function MI(BB) {
      return Object.values(OI).flatMap((IB => IB.map((IB => HI(IB, BB)))))
    }
    const jI = new Set(MI(!0)),
      PI = new Set([...MI(!1), ...jI]),
      RI = HI(sI, !1);

    function rI(BB) {
      YI = OI[BB]
    }

    function mI(BB) {
      const IB = RB();
      try {
        return XI(BB) || XI(BI(BB))
      } finally {
        rB(IB)
      }
    }

    function XI(BB) {
      return jB(GI, PI, [BB])
    }

    function LI(BB) {
      return new Set(dI.filter((IB => IB.tier === BB)).map((BB => `wh:${BB.code}`)))
    }
    const eI = LI("punished"),
      uI = !1,
      fI = new Set(II.b),
      lI = LI("weighted");

    function AI(BB) {
      const IB = RB();
      try {
        return bI(BI(BB))
      } finally {
        rB(IB)
      }
    }

    function tI(BB) {
      const IB = RB();
      try {
        return BI(BB)
      } finally {
        rB(IB)
      }
    }

    function bI(BB) {
      return jB(GI, lI, [BB])
    }

    function xI(BB) {
      const IB = RB();
      try {
        return EI(BB)
      } finally {
        rB(IB)
      }
    }

    function EI(BB) {
      return jB(GI, fI, [BB])
    }

    function DI(BB) {
      return "wb" === BB || jB(GI, eI, [BB])
    }

    function KI(BB) {
      const IB = RB();
      try {
        return DI(BB) || EI(BB)
      } finally {
        rB(IB)
      }
    }

    function VI(BB) {
      const IB = RB();
      try {
        return "wb" === BB || uI && DI(BB)
      } finally {
        rB(IB)
      }
    }

    function SI(BB, IB) {
      let {
        isGetter: ZB
      } = IB;
      const TB = TI(BB, ZB ? "get" : "value");
      return void 0 === TB ? void 0 : TB.value
    }

    function BZ(BB, IB) {
      let {
        isConstructor: ZB,
        native: TB
      } = IB;
      return "function" === typeof BB && (!(!ZB && jB(oI, BB, ["prototype"])) && null !== jB(JI, TB, [jB(ZI, BB, [])]))
    }

    function IZ(BB, IB) {
      return BZ(BB, zI("", (() => {}), IB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let ZZ = null,
      TZ = !1;

    function JZ() {
      try {
        return globalThis.WebAssembly === hI
      } catch {
        return !1
      }
    }

    function oZ(BB) {
      try {
        return function(BB) {
          const {
            holder: IB,
            key: ZB,
            onNamespace: TB,
            inSecureContext: JB
          } = BB, oB = IB(), GB = WI(oB, ZB);
          if (!GB) return !(JB && !0 === globalThis.isSecureContext);
          const vB = SI(GB, BB);
          if (!BZ(vB, BB)) return !1;
          if (TB) {
            const IB = globalThis.WebAssembly;
            if (IB !== oB && null !== IB && ("object" === typeof IB || "function" === typeof IB)) {
              const TB = cI(IB, ZB);
              return TB === vB || void 0 === TB || BZ(TB, BB)
            }
          }
          return !0
        }(BB)
      } catch {
        return !1
      }
    }

    function GZ(BB) {
      const IB = `wh:${BB.code}`;
      if ("punished" === BB.tier) return IB;
      try {
        return `${IB}${SB(vZ(BB))}`
      } catch {
        return `${IB}${SB(void 0)}`
      }
    }

    function vZ(BB) {
      const IB = WI(BB.holder(), BB.key),
        ZB = void 0 === IB ? void 0 : SI(IB, BB);
      return BB.onNamespace && !JZ() && BZ(ZB, BB) ? cI(globalThis.WebAssembly, BB.key) : ZB
    }

    function kZ(BB) {
      if (DI(BB)) return 5;
      const IB = BI(BB);
      return bI(IB) ? 4 : EI(BB) ? 3 : XI(IB) ? function(BB) {
        return jB(GI, jI, [BB])
      }(IB) ? -1 : IB === RI ? 0 : 1 : 2
    }

    function cZ() {
      const BB = function() {
        const BB = PB();
        return sB === UB || sB === WB ? (jB = MB, HB = pB) : jB = GB, BB
      }();
      try {
        if (null === ZZ || !DI(ZZ)) {
          const BB = function() {
            if (void 0 === hI) return null;
            let BB = JZ() ? null : "wh:wa";
            const IB = IB => {
              null !== IB && (null === BB || kZ(IB) > kZ(BB)) && (BB = IB)
            };
            for (let ZB = 0; ZB < dI.length; ZB++) {
              const BB = dI[ZB];
              void 0 === BB || oZ(BB) || IB(GZ(BB))
            }
            IB((0, II.j)());
            for (let ZB = 0; ZB < YI.length; ZB++) {
              const BB = YI[ZB];
              void 0 === BB || oZ(BB) || IB(aI(BB))
            }
            return BB
          }();
          (null === ZZ || null !== BB && kZ(BB) > kZ(ZZ)) && (ZZ = BB)
        }
      } finally {
        rB(BB)
      }
    }

    function nZ() {
      TZ = !0
    }

    function hZ() {
      if (TZ) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && cZ(), null !== ZZ) return ZZ;
      if (void 0 === hI) return "wn:unsupported";
      const BB = (0, TB.m)();
      return null === BB ? null : `wn:${BB}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);