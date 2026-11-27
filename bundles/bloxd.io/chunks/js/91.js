export const id = 91;
export const ids = [91];
export const modules = {
  5554: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => zJ,
      h: () => KG,
      l: () => TJ,
      p: () => JG,
      r: () => kJ,
      u: () => sJ,
      y: () => cJ,
      B: () => dJ,
      D: () => bJ,
      E: () => VG,
      F: () => fG,
      J: () => EJ,
      K: () => oJ
    });
    var yR = GR(2448);
    const tR = Function.prototype.toString,
      uR = RegExp.prototype.exec,
      ZR = Reflect.apply,
      qR = Function.prototype.call,
      iR = Function.prototype.apply,
      fR = Function.prototype.bind,
      VR = Object.defineProperty,
      KR = Uint8Array;
    let wR, rR;
    try {
      wR = globalThis.crypto, rR = void 0 === wR || null === wR ? void 0 : wR.getRandomValues
    } catch {}
    const eR = "bloxdBindApply";
    let aR;
    try {
      const RR = qR;
      VR(RR, eR, {
        __proto__: null,
        value: fR,
        configurable: !0
      });
      try {
        aR = RR[eR](iR)
      } finally {
        delete RR[eR]
      }
    } catch {}
    const LR = 16,
      nR = 256,
      UR = 0,
      WR = 1,
      AR = 2,
      CR = 3;
    let XR, MR = UR,
      BR = ZR,
      lR = 0;

    function pR(RR, JR) {
      return RR === `function ${JR}() { [native code] }` || RR === `function ${JR}() {\n    [native code]\n}`
    }
    const gR = 0,
      bR = 1,
      vR = 2;
    let OR = gR;

    function xR(RR, JR, GR) {
      if (OR === vR && MR === WR && ! function() {
          const RR = XR;
          return lR >= nR && (BR(rR, wR, [RR]), lR = 0), RR[lR++] < 256 / LR
        }()) return function(RR, JR, GR) {
        return BR(RR, JR, GR ?? 0)
      }(...arguments);
      if (OR === gR || MR === AR) return ZR(RR, JR, GR);
      let yR;
      OR = gR;
      try {
        MR === UR && (MR = CR, MR = function() {
          const RR = ZR(tR, ZR, []);
          if (pR(RR, "apply")) return AR;
          if (null === ZR(uR, /\(\.\.\.arguments\)/, [RR]) && null === ZR(uR, /^function\s*\(\.\.\.[\w$]+\)/, [RR])) return AR;
          if ("function" !== typeof aR || "function" !== typeof qR || "function" !== typeof iR || "function" !== typeof fR || "function" !== typeof VR || "function" !== typeof rR || "function" !== typeof KR || !pR(ZR(tR, qR, []), "call") || !pR(ZR(tR, iR, []), "apply") || !pR(ZR(tR, fR, []), "bind") || !pR(ZR(tR, VR, []), "defineProperty") || !pR(ZR(tR, rR, []), "getRandomValues") || !pR(ZR(tR, KR, []), "Uint8Array")) return AR;
          const JR = aR,
            GR = {},
            yR = function(RR) {
              return this === GR && RR === GR
            };
          try {
            if (!0 !== JR(yR, GR, [GR])) return AR;
            const RR = new KR(nR);
            JR(rR, wR, [RR]), XR = RR
          } catch {
            return AR
          }
          return BR = JR, WR
        }()), yR = ZR(RR, JR, GR)
      } catch (eR) {
        throw MR = AR, eR
      }
      return OR = vR, yR
    }
    let NR = ZR;

    function DR() {
      return (NR === ZR ? 0 : 3) + OR
    }

    function HR() {
      const RR = DR();
      return NR = ZR, RR
    }

    function oR(RR) {
      NR = RR >= 3 ? xR : ZR, OR = RR % 3
    }
    const cR = Function.prototype.toString,
      PR = Object.getOwnPropertyDescriptor,
      IR = Object.prototype.hasOwnProperty,
      mR = RegExp.prototype.exec,
      zR = TextEncoder.prototype.encodeInto,
      SR = String.prototype.startsWith,
      jR = Number.prototype.toString,
      dR = WeakMap.prototype.get,
      ER = WeakMap.prototype.set,
      YR = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      kR = new TextEncoder,
      QR = new Uint8Array(1024),
      FR = 9999999,
      TR = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      sR = new WeakMap;

    function hR(RR) {
      if ("function" !== typeof RR) return "#a0.0";
      const JR = NR(dR, sR, [RR]);
      if (void 0 !== JR) return JR;
      const GR = NR(cR, RR, []),
        yR = GR.length > FR ? FR : GR.length,
        tR = `#${function(RR,JR){const GR=NR(mR,YR,[JR]);if(null===GR)return"s";const yR=GR[1];if("ProxyObject"===yR)return"p";if(""!==yR)return NR(SR,yR,["bound "])?"b":"n";try{const JR=PR(RR,"name"),GR=void 0!==JR&&NR(IR,JR,["value"])?JR.value:void 0;return"string"===typeof GR&&NR(SR,GR,["bound "])?"b":"p"}catch{return"p"}}(RR,GR)}${yR}.${function(RR){const{written:JR}=NR(zR,kR,[RR,QR]);let GR=2166136261;for(let yR=0;yR<JR;yR++)GR=(GR^QR[yR])>>>0,GR=GR+(GR<<1)+(GR<<4)+(GR<<7)+(GR<<8)+(GR<<24)>>>0;return NR(jR,GR,[36])}(GR)}`;
      return NR(ER, sR, [RR, tR]), tR
    }

    function RJ(RR) {
      const JR = NR(mR, TR, [RR]);
      return null === JR ? RR : JR[1]
    }
    var JJ = GR(2470);
    const GJ = Function.prototype.toString,
      yJ = Object.getOwnPropertyDescriptor,
      tJ = RegExp.prototype.exec,
      uJ = Object.prototype.hasOwnProperty,
      ZJ = Set.prototype.has,
      qJ = WeakMap.prototype.get,
      iJ = WeakMap.prototype.set,
      fJ = Reflect.get,
      VJ = Object.getPrototypeOf,
      KJ = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function wJ(RR, JR, GR) {
      return {
        code: RR,
        holder: JR,
        key: GR,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${GR}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function rJ() {
      return KJ
    }
    const eJ = KJ?.Instance.prototype,
      aJ = KJ?.Memory.prototype;

    function LJ() {
      return aJ
    }
    let nJ, UJ;
    try {
      const RR = globalThis.crypto,
        JR = RR?.subtle;
      nJ = RR ? VJ(RR) : void 0, UJ = JR ? VJ(JR) : void 0
    } catch {}

    function WJ(RR, JR) {
      for (let GR = RR; void 0 !== GR && null !== GR; GR = VJ(GR)) {
        const RR = yJ(GR, JR);
        if (RR) return RR
      }
    }
    const AJ = [wJ("in", rJ, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), wJ("is", rJ, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), wJ("co", rJ, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), wJ("cs", rJ, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), wJ("mo", rJ, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), wJ("it", rJ, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), wJ("me", rJ, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), wJ("ex", (function() {
      return eJ
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), wJ("bu", LJ, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), wJ("gr", LJ, "grow", {
      tier: "punished"
    }), wJ("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), wJ("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), wJ("su", (function() {
      return nJ
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), wJ("dg", (function() {
      return UJ
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function CJ(RR) {
      let JR;
      try {
        const GR = fJ(globalThis, RR);
        JR = "function" === typeof GR ? GR.prototype : void 0
      } catch {}
      return () => JR
    }

    function XJ(RR, JR, GR) {
      return GR.map((GR => wJ(RR, JR, GR)))
    }
    const MJ = wJ("rx", CJ("HTMLCanvasElement"), "getContext"),
      BJ = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      lJ = {
        webgpu: [...XJ("gd", CJ("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...XJ("gq", CJ("GPUQueue"), ["submit", "writeBuffer"]), ...XJ("ge", CJ("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...XJ("gp", CJ("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), MJ],
        webgl: [...XJ("g2", CJ("WebGL2RenderingContext"), [...BJ, "drawArraysInstanced", "drawElementsInstanced"]), MJ],
        webgl1: [...XJ("g1", CJ("WebGLRenderingContext"), BJ), MJ]
      };
    let pJ = [];
    const gJ = new WeakMap;

    function bJ(RR, JR) {
      const GR = HR();
      try {
        NR(iJ, gJ, [RR, JR])
      } finally {
        oR(GR)
      }
    }

    function vJ(RR) {
      try {
        const JR = qG(RR),
          GR = NR(qJ, gJ, [JR]);
        return RG(GR, RR) ? OJ(RR, !0) : `${OJ(RR,!1)}${hR(GR??JR)}`
      } catch {
        return `${OJ(RR,!1)}${hR(void 0)}`
      }
    }

    function OJ(RR, JR) {
      let {
        code: GR,
        key: yR
      } = RR;
      return `wh:${GR}${JR?"-dbg":""}:${yR}`
    }

    function xJ(RR) {
      return Object.values(lJ).flatMap((JR => JR.map((JR => OJ(JR, RR)))))
    }
    const NJ = new Set(xJ(!0)),
      DJ = new Set([...xJ(!1), ...NJ]),
      HJ = OJ(MJ, !1);

    function oJ(RR) {
      pJ = lJ[RR]
    }

    function cJ(RR) {
      const JR = HR();
      try {
        return PJ(RR) || PJ(RJ(RR))
      } finally {
        oR(JR)
      }
    }

    function PJ(RR) {
      return NR(ZJ, DJ, [RR])
    }

    function IJ(RR) {
      return new Set(AJ.filter((JR => JR.tier === RR)).map((RR => `wh:${RR.code}`)))
    }
    const mJ = IJ("punished"),
      zJ = !1,
      SJ = new Set(JJ.d),
      jJ = IJ("weighted");

    function dJ(RR) {
      const JR = HR();
      try {
        return YJ(RJ(RR))
      } finally {
        oR(JR)
      }
    }

    function EJ(RR) {
      const JR = HR();
      try {
        return RJ(RR)
      } finally {
        oR(JR)
      }
    }

    function YJ(RR) {
      return NR(ZJ, jJ, [RR])
    }

    function kJ(RR) {
      const JR = HR();
      try {
        return QJ(RR)
      } finally {
        oR(JR)
      }
    }

    function QJ(RR) {
      return NR(ZJ, SJ, [RR])
    }

    function FJ(RR) {
      return "wb" === RR || NR(ZJ, mJ, [RR])
    }

    function TJ(RR) {
      const JR = HR();
      try {
        return FJ(RR) || QJ(RR)
      } finally {
        oR(JR)
      }
    }

    function sJ(RR) {
      const JR = HR();
      try {
        return "wb" === RR || zJ && FJ(RR)
      } finally {
        oR(JR)
      }
    }

    function hJ(RR, JR) {
      let {
        isGetter: GR
      } = JR;
      const yR = yJ(RR, GR ? "get" : "value");
      return void 0 === yR ? void 0 : yR.value
    }

    function RG(RR, JR) {
      let {
        isConstructor: GR,
        native: yR
      } = JR;
      return "function" === typeof RR && (!(!GR && NR(uJ, RR, ["prototype"])) && null !== NR(tJ, yR, [NR(GJ, RR, [])]))
    }

    function JG(RR, JR) {
      return RG(RR, wJ("", (() => {}), JR, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let GG = null,
      yG = !1;

    function tG() {
      try {
        return globalThis.WebAssembly === KJ
      } catch {
        return !1
      }
    }

    function uG(RR) {
      try {
        return function(RR) {
          const {
            holder: JR,
            key: GR,
            onNamespace: yR,
            inSecureContext: tR
          } = RR, uR = JR(), ZR = WJ(uR, GR);
          if (!ZR) return !(tR && !0 === globalThis.isSecureContext);
          const qR = hJ(ZR, RR);
          if (!RG(qR, RR)) return !1;
          if (yR) {
            const JR = globalThis.WebAssembly;
            if (JR !== uR && null !== JR && ("object" === typeof JR || "function" === typeof JR)) {
              const yR = fJ(JR, GR);
              return yR === qR || void 0 === yR || RG(yR, RR)
            }
          }
          return !0
        }(RR)
      } catch {
        return !1
      }
    }

    function ZG(RR) {
      const JR = `wh:${RR.code}`;
      if ("punished" === RR.tier) return JR;
      try {
        return `${JR}${hR(qG(RR))}`
      } catch {
        return `${JR}${hR(void 0)}`
      }
    }

    function qG(RR) {
      const JR = WJ(RR.holder(), RR.key),
        GR = void 0 === JR ? void 0 : hJ(JR, RR);
      return RR.onNamespace && !tG() && RG(GR, RR) ? fJ(globalThis.WebAssembly, RR.key) : GR
    }

    function iG(RR) {
      if (FJ(RR)) return 5;
      const JR = RJ(RR);
      return YJ(JR) ? 4 : QJ(RR) ? 3 : PJ(JR) ? function(RR) {
        return NR(ZJ, NJ, [RR])
      }(JR) ? -1 : JR === HJ ? 0 : 1 : 2
    }

    function fG() {
      const RR = function() {
        const RR = DR();
        return MR === UR || MR === WR ? (NR = xR, OR = bR) : NR = ZR, RR
      }();
      try {
        if (null === GG || !FJ(GG)) {
          const RR = function() {
            if (void 0 === KJ) return null;
            let RR = tG() ? null : "wh:wa";
            const JR = JR => {
              null !== JR && (null === RR || iG(JR) > iG(RR)) && (RR = JR)
            };
            for (let GR = 0; GR < AJ.length; GR++) {
              const RR = AJ[GR];
              void 0 === RR || uG(RR) || JR(ZG(RR))
            }
            JR((0, JJ.o)());
            for (let GR = 0; GR < pJ.length; GR++) {
              const RR = pJ[GR];
              void 0 === RR || uG(RR) || JR(vJ(RR))
            }
            return RR
          }();
          (null === GG || null !== RR && iG(RR) > iG(GG)) && (GG = RR)
        }
      } finally {
        oR(RR)
      }
    }

    function VG() {
      yG = !0
    }

    function KG() {
      if (yG) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && fG(), null !== GG) return GG;
      if (void 0 === KJ) return "wn:unsupported";
      const RR = (0, yR.i)();
      return null === RR ? null : `wn:${RR}`
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);