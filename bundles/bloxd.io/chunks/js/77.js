export const id = 77;
export const ids = [77];
export const modules = {
  4812: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => pH,
      h: () => fg,
      j: () => mH,
      m: () => Hg,
      q: () => TH,
      r: () => eH,
      t: () => iH,
      v: () => MH,
      z: () => cH,
      D: () => Ig,
      H: () => ug,
      K: () => FH,
      O: () => VH
    });
    var tS = gS(3021);
    const bS = Function.prototype.toString,
      XS = RegExp.prototype.exec,
      xS = Reflect.apply,
      NS = Function.prototype.call,
      qS = Function.prototype.apply,
      uS = Function.prototype.bind,
      IS = Object.defineProperty,
      fS = Uint8Array;
    let kS, aS;
    try {
      kS = globalThis.crypto, aS = void 0 === kS || null === kS ? void 0 : kS.getRandomValues
    } catch {}
    const KS = "bloxdBindApply";
    let jS;
    try {
      const SS = NS;
      IS(SS, KS, {
        __proto__: null,
        value: uS,
        configurable: !0
      });
      try {
        jS = SS[KS](qS)
      } finally {
        delete SS[KS]
      }
    } catch {}
    const GS = 16,
      CS = 256,
      nS = 0,
      PS = 1,
      QS = 2,
      DS = 3;
    let wS, hS = nS,
      ZS = xS,
      JS = 0;

    function OS(SS, HS) {
      return SS === `function ${HS}() { [native code] }` || SS === `function ${HS}() {\n    [native code]\n}`
    }
    const dS = 0,
      cS = 1,
      vS = 2;
    let ES = dS;

    function LS(SS, HS, gS) {
      if (ES === vS && hS === PS && ! function() {
          const SS = wS;
          return JS >= CS && (ZS(aS, kS, [SS]), JS = 0), SS[JS++] < 256 / GS
        }()) return function(SS, HS, gS) {
        return ZS(SS, HS, gS ?? 0)
      }(...arguments);
      if (ES === dS || hS === QS) return xS(SS, HS, gS);
      let tS;
      ES = dS;
      try {
        hS === nS && (hS = DS, hS = function() {
          const SS = xS(bS, xS, []);
          if (OS(SS, "apply")) return QS;
          if (null === xS(XS, /\(\.\.\.arguments\)/, [SS]) && null === xS(XS, /^function\s*\(\.\.\.[\w$]+\)/, [SS])) return QS;
          if ("function" !== typeof jS || "function" !== typeof NS || "function" !== typeof qS || "function" !== typeof uS || "function" !== typeof IS || "function" !== typeof aS || "function" !== typeof fS || !OS(xS(bS, NS, []), "call") || !OS(xS(bS, qS, []), "apply") || !OS(xS(bS, uS, []), "bind") || !OS(xS(bS, IS, []), "defineProperty") || !OS(xS(bS, aS, []), "getRandomValues") || !OS(xS(bS, fS, []), "Uint8Array")) return QS;
          const HS = jS,
            gS = {},
            tS = function(SS) {
              return this === gS && SS === gS
            };
          try {
            if (!0 !== HS(tS, gS, [gS])) return QS;
            const SS = new fS(CS);
            HS(aS, kS, [SS]), wS = SS
          } catch {
            return QS
          }
          return ZS = HS, PS
        }()), tS = xS(SS, HS, gS)
      } catch (KS) {
        throw hS = QS, KS
      }
      return ES = vS, tS
    }
    let YS = xS;

    function AS() {
      return (YS === xS ? 0 : 3) + ES
    }

    function yS() {
      const SS = AS();
      return YS = xS, SS
    }

    function VS(SS) {
      YS = SS >= 3 ? LS : xS, ES = SS % 3
    }
    const iS = Function.prototype.toString,
      WS = Object.getOwnPropertyDescriptor,
      zS = Object.prototype.hasOwnProperty,
      US = RegExp.prototype.exec,
      pS = TextEncoder.prototype.encodeInto,
      sS = String.prototype.startsWith,
      BS = Number.prototype.toString,
      MS = WeakMap.prototype.get,
      FS = WeakMap.prototype.set,
      RS = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      TS = new TextEncoder,
      oS = new Uint8Array(1024),
      lS = 9999999,
      mS = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      eS = new WeakMap;

    function rS(SS) {
      if ("function" !== typeof SS) return "#a0.0";
      const HS = YS(MS, eS, [SS]);
      if (void 0 !== HS) return HS;
      const gS = YS(iS, SS, []),
        tS = gS.length > lS ? lS : gS.length,
        bS = `#${function(SS,HS){const gS=YS(US,RS,[HS]);if(null===gS)return"s";const tS=gS[1];if("ProxyObject"===tS)return"p";if(""!==tS)return YS(sS,tS,["bound "])?"b":"n";try{const HS=WS(SS,"name"),gS=void 0!==HS&&YS(zS,HS,["value"])?HS.value:void 0;return"string"===typeof gS&&YS(sS,gS,["bound "])?"b":"p"}catch{return"p"}}(SS,gS)}${tS}.${function(SS){const{written:HS}=YS(pS,TS,[SS,oS]);let gS=2166136261;for(let tS=0;tS<HS;tS++)gS=(gS^oS[tS])>>>0,gS=gS+(gS<<1)+(gS<<4)+(gS<<7)+(gS<<8)+(gS<<24)>>>0;return YS(BS,gS,[36])}(gS)}`;
      return YS(FS, eS, [SS, bS]), bS
    }

    function SH(SS) {
      const HS = YS(US, mS, [SS]);
      return null === HS ? SS : HS[1]
    }
    var HH = gS(3035);
    const gH = Function.prototype.toString,
      tH = Object.getOwnPropertyDescriptor,
      bH = RegExp.prototype.exec,
      XH = Object.prototype.hasOwnProperty,
      xH = Set.prototype.has,
      NH = WeakMap.prototype.get,
      qH = WeakMap.prototype.set,
      uH = Reflect.get,
      IH = Object.getPrototypeOf,
      fH = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function kH(SS, HS, gS) {
      return {
        code: SS,
        holder: HS,
        key: gS,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${gS}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function aH() {
      return fH
    }
    const KH = fH?.Instance.prototype,
      jH = fH?.Memory.prototype;

    function GH() {
      return jH
    }
    let CH, nH;
    try {
      const SS = globalThis.crypto,
        HS = SS?.subtle;
      CH = SS ? IH(SS) : void 0, nH = HS ? IH(HS) : void 0
    } catch {}

    function PH(SS, HS) {
      for (let gS = SS; void 0 !== gS && null !== gS; gS = IH(gS)) {
        const SS = tH(gS, HS);
        if (SS) return SS
      }
    }
    const QH = [kH("in", aH, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), kH("is", aH, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), kH("co", aH, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), kH("cs", aH, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), kH("mo", aH, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), kH("it", aH, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), kH("me", aH, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), kH("ex", (function() {
      return KH
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), kH("bu", GH, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), kH("gr", GH, "grow", {
      tier: "punished"
    }), kH("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), kH("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), kH("su", (function() {
      return CH
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), kH("dg", (function() {
      return nH
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function DH(SS) {
      let HS;
      try {
        const gS = uH(globalThis, SS);
        HS = "function" === typeof gS ? gS.prototype : void 0
      } catch {}
      return () => HS
    }

    function wH(SS, HS, gS) {
      return gS.map((gS => kH(SS, HS, gS)))
    }
    const hH = kH("rx", DH("HTMLCanvasElement"), "getContext"),
      ZH = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      JH = {
        webgpu: [...wH("gd", DH("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...wH("gq", DH("GPUQueue"), ["submit", "writeBuffer"]), ...wH("ge", DH("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...wH("gp", DH("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), hH],
        webgl: [...wH("g2", DH("WebGL2RenderingContext"), [...ZH, "drawArraysInstanced", "drawElementsInstanced"]), hH],
        webgl1: [...wH("g1", DH("WebGLRenderingContext"), ZH), hH]
      };
    let OH = [];
    const dH = new WeakMap;

    function cH(SS, HS) {
      const gS = yS();
      try {
        YS(qH, dH, [SS, HS])
      } finally {
        VS(gS)
      }
    }

    function vH(SS) {
      try {
        const HS = Ng(SS),
          gS = YS(NH, dH, [HS]);
        return Sg(gS, SS) ? EH(SS, !0) : `${EH(SS,!1)}${rS(gS??HS)}`
      } catch {
        return `${EH(SS,!1)}${rS(void 0)}`
      }
    }

    function EH(SS, HS) {
      let {
        code: gS,
        key: tS
      } = SS;
      return `wh:${gS}${HS?"-dbg":""}:${tS}`
    }

    function LH(SS) {
      return Object.values(JH).flatMap((HS => HS.map((HS => EH(HS, SS)))))
    }
    const YH = new Set(LH(!0)),
      AH = new Set([...LH(!1), ...YH]),
      yH = EH(hH, !1);

    function VH(SS) {
      OH = JH[SS]
    }

    function iH(SS) {
      const HS = yS();
      try {
        return WH(SS) || WH(SH(SS))
      } finally {
        VS(HS)
      }
    }

    function WH(SS) {
      return YS(xH, AH, [SS])
    }

    function zH(SS) {
      return new Set(QH.filter((HS => HS.tier === SS)).map((SS => `wh:${SS.code}`)))
    }
    const UH = zH("punished"),
      pH = !1,
      sH = new Set(HH.d),
      BH = zH("weighted");

    function MH(SS) {
      const HS = yS();
      try {
        return RH(SH(SS))
      } finally {
        VS(HS)
      }
    }

    function FH(SS) {
      const HS = yS();
      try {
        return SH(SS)
      } finally {
        VS(HS)
      }
    }

    function RH(SS) {
      return YS(xH, BH, [SS])
    }

    function TH(SS) {
      const HS = yS();
      try {
        return oH(SS)
      } finally {
        VS(HS)
      }
    }

    function oH(SS) {
      return YS(xH, sH, [SS])
    }

    function lH(SS) {
      return "wb" === SS || YS(xH, UH, [SS])
    }

    function mH(SS) {
      const HS = yS();
      try {
        return lH(SS) || oH(SS)
      } finally {
        VS(HS)
      }
    }

    function eH(SS) {
      const HS = yS();
      try {
        return "wb" === SS || pH && lH(SS)
      } finally {
        VS(HS)
      }
    }

    function rH(SS, HS) {
      let {
        isGetter: gS
      } = HS;
      const tS = tH(SS, gS ? "get" : "value");
      return void 0 === tS ? void 0 : tS.value
    }

    function Sg(SS, HS) {
      let {
        isConstructor: gS,
        native: tS
      } = HS;
      return "function" === typeof SS && (!(!gS && YS(XH, SS, ["prototype"])) && null !== YS(bH, tS, [YS(gH, SS, [])]))
    }

    function Hg(SS, HS) {
      return Sg(SS, kH("", (() => {}), HS, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let gg = null,
      tg = !1;

    function bg() {
      try {
        return globalThis.WebAssembly === fH
      } catch {
        return !1
      }
    }

    function Xg(SS) {
      try {
        return function(SS) {
          const {
            holder: HS,
            key: gS,
            onNamespace: tS,
            inSecureContext: bS
          } = SS, XS = HS(), xS = PH(XS, gS);
          if (!xS) return !(bS && !0 === globalThis.isSecureContext);
          const NS = rH(xS, SS);
          if (!Sg(NS, SS)) return !1;
          if (tS) {
            const HS = globalThis.WebAssembly;
            if (HS !== XS && null !== HS && ("object" === typeof HS || "function" === typeof HS)) {
              const tS = uH(HS, gS);
              return tS === NS || void 0 === tS || Sg(tS, SS)
            }
          }
          return !0
        }(SS)
      } catch {
        return !1
      }
    }

    function xg(SS) {
      const HS = `wh:${SS.code}`;
      if ("punished" === SS.tier) return HS;
      try {
        return `${HS}${rS(Ng(SS))}`
      } catch {
        return `${HS}${rS(void 0)}`
      }
    }

    function Ng(SS) {
      const HS = PH(SS.holder(), SS.key),
        gS = void 0 === HS ? void 0 : rH(HS, SS);
      return SS.onNamespace && !bg() && Sg(gS, SS) ? uH(globalThis.WebAssembly, SS.key) : gS
    }

    function qg(SS) {
      if (lH(SS)) return 5;
      const HS = SH(SS);
      return RH(HS) ? 4 : oH(SS) ? 3 : WH(HS) ? function(SS) {
        return YS(xH, YH, [SS])
      }(HS) ? -1 : HS === yH ? 0 : 1 : 2
    }

    function ug() {
      const SS = function() {
        const SS = AS();
        return hS === nS || hS === PS ? (YS = LS, ES = cS) : YS = xS, SS
      }();
      try {
        if (null === gg || !lH(gg)) {
          const SS = function() {
            if (void 0 === fH) return null;
            let SS = bg() ? null : "wh:wa";
            const HS = HS => {
              null !== HS && (null === SS || qg(HS) > qg(SS)) && (SS = HS)
            };
            for (let gS = 0; gS < QH.length; gS++) {
              const SS = QH[gS];
              void 0 === SS || Xg(SS) || HS(xg(SS))
            }
            HS((0, HH.n)());
            for (let gS = 0; gS < OH.length; gS++) {
              const SS = OH[gS];
              void 0 === SS || Xg(SS) || HS(vH(SS))
            }
            return SS
          }();
          (null === gg || null !== SS && qg(SS) > qg(gg)) && (gg = SS)
        }
      } finally {
        VS(SS)
      }
    }

    function Ig() {
      tg = !0
    }

    function fg() {
      if (tg) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && ug(), null !== gg) return gg;
      if (void 0 === fH) return "wn:unsupported";
      const SS = (0, tS.t)();
      return null === SS ? null : `wn:${SS}`
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);