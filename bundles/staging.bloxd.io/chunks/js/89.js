export const id = 89;
export const ids = [89];
export const modules = {
  5165: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => cO,
      d: () => PG,
      e: () => sO,
      i: () => OG,
      k: () => CO,
      l: () => xO,
      m: () => rO,
      n: () => eO,
      r: () => KO,
      s: () => MG,
      w: () => JG,
      z: () => TO,
      C: () => gO
    });
    var YB = GB(3206);
    const DB = Function.prototype.toString,
      QB = RegExp.prototype.exec,
      oB = Reflect.apply,
      jB = Function.prototype.call,
      yB = Function.prototype.apply,
      JB = Function.prototype.bind,
      MB = Object.defineProperty,
      PB = Uint8Array;
    let zB, lB;
    try {
      zB = globalThis.crypto, lB = void 0 === zB || null === zB ? void 0 : zB.getRandomValues
    } catch {}
    const pB = "bloxdBindApply";
    let qB;
    try {
      const BB = jB;
      MB(BB, pB, {
        __proto__: null,
        value: JB,
        configurable: !0
      });
      try {
        qB = BB[pB](yB)
      } finally {
        delete BB[pB]
      }
    } catch {}
    const ZB = 16,
      NB = 256,
      RB = 0,
      WB = 1,
      AB = 2,
      VB = 3;
    let SB, nB = RB,
      UB = oB,
      fB = 0;

    function kB(BB, OB) {
      return BB === `function ${OB}() { [native code] }` || BB === `function ${OB}() {\n    [native code]\n}`
    }
    const dB = 0,
      KB = 1,
      uB = 2;
    let mB = dB;

    function IB(BB, OB, GB) {
      if (mB === uB && nB === WB && ! function() {
          const BB = SB;
          return fB >= NB && (UB(lB, zB, [BB]), fB = 0), BB[fB++] < 256 / ZB
        }()) return function(BB, OB, GB) {
        return UB(BB, OB, GB ?? 0)
      }(...arguments);
      if (mB === dB || nB === AB) return oB(BB, OB, GB);
      let YB;
      mB = dB;
      try {
        nB === RB && (nB = VB, nB = function() {
          const BB = oB(DB, oB, []);
          if (kB(BB, "apply")) return AB;
          if (null === oB(QB, /\(\.\.\.arguments\)/, [BB]) && null === oB(QB, /^function\s*\(\.\.\.[\w$]+\)/, [BB])) return AB;
          if ("function" !== typeof qB || "function" !== typeof jB || "function" !== typeof yB || "function" !== typeof JB || "function" !== typeof MB || "function" !== typeof lB || "function" !== typeof PB || !kB(oB(DB, jB, []), "call") || !kB(oB(DB, yB, []), "apply") || !kB(oB(DB, JB, []), "bind") || !kB(oB(DB, MB, []), "defineProperty") || !kB(oB(DB, lB, []), "getRandomValues") || !kB(oB(DB, PB, []), "Uint8Array")) return AB;
          const OB = qB,
            GB = {},
            YB = function(BB) {
              return this === GB && BB === GB
            };
          try {
            if (!0 !== OB(YB, GB, [GB])) return AB;
            const BB = new PB(NB);
            OB(lB, zB, [BB]), SB = BB
          } catch {
            return AB
          }
          return UB = OB, WB
        }()), YB = oB(BB, OB, GB)
      } catch (pB) {
        throw nB = AB, pB
      }
      return mB = uB, YB
    }
    let FB = oB;

    function iB() {
      return (FB === oB ? 0 : 3) + mB
    }

    function LB() {
      const BB = iB();
      return FB = oB, BB
    }

    function gB(BB) {
      FB = BB >= 3 ? IB : oB, mB = BB % 3
    }
    const rB = Function.prototype.toString,
      XB = Object.getOwnPropertyDescriptor,
      wB = Object.prototype.hasOwnProperty,
      EB = RegExp.prototype.exec,
      cB = TextEncoder.prototype.encodeInto,
      hB = String.prototype.startsWith,
      aB = Number.prototype.toString,
      eB = WeakMap.prototype.get,
      TB = WeakMap.prototype.set,
      bB = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      CB = new TextEncoder,
      HB = new Uint8Array(1024),
      vB = 9999999,
      sB = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      xB = new WeakMap;

    function tB(BB) {
      if ("function" !== typeof BB) return "#a0.0";
      const OB = FB(eB, xB, [BB]);
      if (void 0 !== OB) return OB;
      const GB = FB(rB, BB, []),
        YB = GB.length > vB ? vB : GB.length,
        DB = `#${function(BB,OB){const GB=FB(EB,bB,[OB]);if(null===GB)return"s";const YB=GB[1];if("ProxyObject"===YB)return"p";if(""!==YB)return FB(hB,YB,["bound "])?"b":"n";try{const OB=XB(BB,"name"),GB=void 0!==OB&&FB(wB,OB,["value"])?OB.value:void 0;return"string"===typeof GB&&FB(hB,GB,["bound "])?"b":"p"}catch{return"p"}}(BB,GB)}${YB}.${function(BB){const{written:OB}=FB(cB,CB,[BB,HB]);let GB=2166136261;for(let YB=0;YB<OB;YB++)GB=(GB^HB[YB])>>>0,GB=GB+(GB<<1)+(GB<<4)+(GB<<7)+(GB<<8)+(GB<<24)>>>0;return FB(aB,GB,[36])}(GB)}`;
      return FB(TB, xB, [BB, DB]), DB
    }

    function BO(BB) {
      const OB = FB(EB, sB, [BB]);
      return null === OB ? BB : OB[1]
    }
    var OO = GB(3224);
    const GO = Function.prototype.toString,
      YO = Object.getOwnPropertyDescriptor,
      DO = RegExp.prototype.exec,
      QO = Object.prototype.hasOwnProperty,
      oO = Set.prototype.has,
      jO = WeakMap.prototype.get,
      yO = WeakMap.prototype.set,
      JO = Reflect.get,
      MO = Object.getPrototypeOf,
      PO = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function zO(BB, OB, GB) {
      return {
        code: BB,
        holder: OB,
        key: GB,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${GB}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function lO() {
      return PO
    }
    const pO = PO?.Instance.prototype,
      qO = PO?.Memory.prototype;

    function ZO() {
      return qO
    }
    let NO, RO;
    try {
      const BB = globalThis.crypto,
        OB = BB?.subtle;
      NO = BB ? MO(BB) : void 0, RO = OB ? MO(OB) : void 0
    } catch {}

    function WO(BB, OB) {
      for (let GB = BB; void 0 !== GB && null !== GB; GB = MO(GB)) {
        const BB = YO(GB, OB);
        if (BB) return BB
      }
    }
    const AO = [zO("in", lO, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), zO("is", lO, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), zO("co", lO, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), zO("cs", lO, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), zO("mo", lO, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), zO("it", lO, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), zO("me", lO, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), zO("ex", (function() {
      return pO
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), zO("bu", ZO, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), zO("gr", ZO, "grow", {
      tier: "punished"
    }), zO("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), zO("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), zO("su", (function() {
      return NO
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), zO("dg", (function() {
      return RO
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function VO(BB) {
      let OB;
      try {
        const GB = JO(globalThis, BB);
        OB = "function" === typeof GB ? GB.prototype : void 0
      } catch {}
      return () => OB
    }

    function SO(BB, OB, GB) {
      return GB.map((GB => zO(BB, OB, GB)))
    }
    const nO = zO("rx", VO("HTMLCanvasElement"), "getContext"),
      UO = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      fO = {
        webgpu: [...SO("gd", VO("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...SO("gq", VO("GPUQueue"), ["submit", "writeBuffer"]), ...SO("ge", VO("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...SO("gp", VO("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), nO],
        webgl: [...SO("g2", VO("WebGL2RenderingContext"), [...UO, "drawArraysInstanced", "drawElementsInstanced"]), nO],
        webgl1: [...SO("g1", VO("WebGLRenderingContext"), UO), nO]
      };
    let kO = [];
    const dO = new WeakMap;

    function KO(BB, OB) {
      const GB = LB();
      try {
        FB(yO, dO, [BB, OB])
      } finally {
        gB(GB)
      }
    }

    function uO(BB) {
      try {
        const OB = jG(BB),
          GB = FB(jO, dO, [OB]);
        return BG(GB, BB) ? mO(BB, !0) : `${mO(BB,!1)}${tB(GB??OB)}`
      } catch {
        return `${mO(BB,!1)}${tB(void 0)}`
      }
    }

    function mO(BB, OB) {
      let {
        code: GB,
        key: YB
      } = BB;
      return `wh:${GB}${OB?"-dbg":""}:${YB}`
    }

    function IO(BB) {
      return Object.values(fO).flatMap((OB => OB.map((OB => mO(OB, BB)))))
    }
    const FO = new Set(IO(!0)),
      iO = new Set([...IO(!1), ...FO]),
      LO = mO(nO, !1);

    function gO(BB) {
      kO = fO[BB]
    }

    function rO(BB) {
      const OB = LB();
      try {
        return XO(BB) || XO(BO(BB))
      } finally {
        gB(OB)
      }
    }

    function XO(BB) {
      return FB(oO, iO, [BB])
    }

    function wO(BB) {
      return new Set(AO.filter((OB => OB.tier === BB)).map((BB => `wh:${BB.code}`)))
    }
    const EO = wO("punished"),
      cO = !1,
      hO = new Set(OO.b),
      aO = wO("weighted");

    function eO(BB) {
      const OB = LB();
      try {
        return bO(BO(BB))
      } finally {
        gB(OB)
      }
    }

    function TO(BB) {
      const OB = LB();
      try {
        return BO(BB)
      } finally {
        gB(OB)
      }
    }

    function bO(BB) {
      return FB(oO, aO, [BB])
    }

    function CO(BB) {
      const OB = LB();
      try {
        return HO(BB)
      } finally {
        gB(OB)
      }
    }

    function HO(BB) {
      return FB(oO, hO, [BB])
    }

    function vO(BB) {
      return "wb" === BB || FB(oO, EO, [BB])
    }

    function sO(BB) {
      const OB = LB();
      try {
        return vO(BB) || HO(BB)
      } finally {
        gB(OB)
      }
    }

    function xO(BB) {
      const OB = LB();
      try {
        return "wb" === BB || cO && vO(BB)
      } finally {
        gB(OB)
      }
    }

    function tO(BB, OB) {
      let {
        isGetter: GB
      } = OB;
      const YB = YO(BB, GB ? "get" : "value");
      return void 0 === YB ? void 0 : YB.value
    }

    function BG(BB, OB) {
      let {
        isConstructor: GB,
        native: YB
      } = OB;
      return "function" === typeof BB && (!(!GB && FB(QO, BB, ["prototype"])) && null !== FB(DO, YB, [FB(GO, BB, [])]))
    }

    function OG(BB, OB) {
      return BG(BB, zO("", (() => {}), OB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let GG = null,
      YG = !1;

    function DG() {
      try {
        return globalThis.WebAssembly === PO
      } catch {
        return !1
      }
    }

    function QG(BB) {
      try {
        return function(BB) {
          const {
            holder: OB,
            key: GB,
            onNamespace: YB,
            inSecureContext: DB
          } = BB, QB = OB(), oB = WO(QB, GB);
          if (!oB) return !(DB && !0 === globalThis.isSecureContext);
          const jB = tO(oB, BB);
          if (!BG(jB, BB)) return !1;
          if (YB) {
            const OB = globalThis.WebAssembly;
            if (OB !== QB && null !== OB && ("object" === typeof OB || "function" === typeof OB)) {
              const YB = JO(OB, GB);
              return YB === jB || void 0 === YB || BG(YB, BB)
            }
          }
          return !0
        }(BB)
      } catch {
        return !1
      }
    }

    function oG(BB) {
      const OB = `wh:${BB.code}`;
      if ("punished" === BB.tier) return OB;
      try {
        return `${OB}${tB(jG(BB))}`
      } catch {
        return `${OB}${tB(void 0)}`
      }
    }

    function jG(BB) {
      const OB = WO(BB.holder(), BB.key),
        GB = void 0 === OB ? void 0 : tO(OB, BB);
      return BB.onNamespace && !DG() && BG(GB, BB) ? JO(globalThis.WebAssembly, BB.key) : GB
    }

    function yG(BB) {
      if (vO(BB)) return 5;
      const OB = BO(BB);
      return bO(OB) ? 4 : HO(BB) ? 3 : XO(OB) ? function(BB) {
        return FB(oO, FO, [BB])
      }(OB) ? -1 : OB === LO ? 0 : 1 : 2
    }

    function JG() {
      const BB = function() {
        const BB = iB();
        return nB === RB || nB === WB ? (FB = IB, mB = KB) : FB = oB, BB
      }();
      try {
        if (null === GG || !vO(GG)) {
          const BB = function() {
            if (void 0 === PO) return null;
            let BB = DG() ? null : "wh:wa";
            const OB = OB => {
              null !== OB && (null === BB || yG(OB) > yG(BB)) && (BB = OB)
            };
            for (let GB = 0; GB < AO.length; GB++) {
              const BB = AO[GB];
              void 0 === BB || QG(BB) || OB(oG(BB))
            }
            OB((0, OO.m)());
            for (let GB = 0; GB < kO.length; GB++) {
              const BB = kO[GB];
              void 0 === BB || QG(BB) || OB(uO(BB))
            }
            return BB
          }();
          (null === GG || null !== BB && yG(BB) > yG(GG)) && (GG = BB)
        }
      } finally {
        gB(BB)
      }
    }

    function MG() {
      YG = !0
    }

    function PG() {
      if (YG) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && JG(), null !== GG) return GG;
      if (void 0 === PO) return "wn:unsupported";
      const BB = (0, YB.n)();
      return null === BB ? null : `wn:${BB}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);