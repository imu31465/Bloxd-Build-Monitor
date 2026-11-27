export const id = 91;
export const ids = [91];
export const modules = {
  5427: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => Bi,
      e: () => lO,
      i: () => Qi,
      j: () => mO,
      l: () => ri,
      o: () => WO,
      r: () => Vi,
      s: () => Gi,
      v: () => ni,
      y: () => xO,
      C: () => ZO,
      F: () => Ii,
      G: () => Di
    });
    var mW = OW(2381);
    const EW = Function.prototype.toString,
      NW = RegExp.prototype.exec,
      PW = Reflect.apply,
      LW = Function.prototype.call,
      cW = Function.prototype.apply,
      wW = Function.prototype.bind,
      tW = Object.defineProperty,
      ZW = Uint8Array;
    let xW, lW;
    try {
      xW = globalThis.crypto, lW = void 0 === xW || null === xW ? void 0 : xW.getRandomValues
    } catch {}
    const AW = "bloxdBindApply";
    let bW;
    try {
      const WW = LW;
      tW(WW, AW, {
        __proto__: null,
        value: wW,
        configurable: !0
      });
      try {
        bW = WW[AW](cW)
      } finally {
        delete WW[AW]
      }
    } catch {}
    const jW = 16,
      UW = 256,
      kW = 0,
      sW = 1,
      MW = 2,
      KW = 3;
    let SW, YW = kW,
      yW = PW,
      TW = 0;

    function JW(WW, iW) {
      return WW === `function ${iW}() { [native code] }` || WW === `function ${iW}() {\n    [native code]\n}`
    }
    const hW = 0,
      HW = 1,
      nW = 2;
    let uW = hW;

    function oW(WW, iW, OW) {
      if (uW === nW && YW === sW && ! function() {
          const WW = SW;
          return TW >= UW && (yW(lW, xW, [WW]), TW = 0), WW[TW++] < 256 / jW
        }()) return function(WW, iW, OW) {
        return yW(WW, iW, OW ?? 0)
      }(...arguments);
      if (uW === hW || YW === MW) return PW(WW, iW, OW);
      let mW;
      uW = hW;
      try {
        YW === kW && (YW = KW, YW = function() {
          const WW = PW(EW, PW, []);
          if (JW(WW, "apply")) return MW;
          if (null === PW(NW, /\(\.\.\.arguments\)/, [WW]) && null === PW(NW, /^function\s*\(\.\.\.[\w$]+\)/, [WW])) return MW;
          if ("function" !== typeof bW || "function" !== typeof LW || "function" !== typeof cW || "function" !== typeof wW || "function" !== typeof tW || "function" !== typeof lW || "function" !== typeof ZW || !JW(PW(EW, LW, []), "call") || !JW(PW(EW, cW, []), "apply") || !JW(PW(EW, wW, []), "bind") || !JW(PW(EW, tW, []), "defineProperty") || !JW(PW(EW, lW, []), "getRandomValues") || !JW(PW(EW, ZW, []), "Uint8Array")) return MW;
          const iW = bW,
            OW = {},
            mW = function(WW) {
              return this === OW && WW === OW
            };
          try {
            if (!0 !== iW(mW, OW, [OW])) return MW;
            const WW = new ZW(UW);
            iW(lW, xW, [WW]), SW = WW
          } catch {
            return MW
          }
          return yW = iW, sW
        }()), mW = PW(WW, iW, OW)
      } catch (AW) {
        throw YW = MW, AW
      }
      return uW = nW, mW
    }
    let dW = PW;

    function eW() {
      return (dW === PW ? 0 : 3) + uW
    }

    function vW() {
      const WW = eW();
      return dW = PW, WW
    }

    function gW(WW) {
      dW = WW >= 3 ? oW : PW, uW = WW % 3
    }
    const DW = Function.prototype.toString,
      VW = Object.getOwnPropertyDescriptor,
      pW = Object.prototype.hasOwnProperty,
      fW = RegExp.prototype.exec,
      CW = TextEncoder.prototype.encodeInto,
      XW = String.prototype.startsWith,
      BW = Number.prototype.toString,
      qW = WeakMap.prototype.get,
      RW = WeakMap.prototype.set,
      GW = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      IW = new TextEncoder,
      aW = new Uint8Array(1024),
      rW = 9999999,
      zW = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      FW = new WeakMap;

    function QW(WW) {
      if ("function" !== typeof WW) return "#a0.0";
      const iW = dW(qW, FW, [WW]);
      if (void 0 !== iW) return iW;
      const OW = dW(DW, WW, []),
        mW = OW.length > rW ? rW : OW.length,
        EW = `#${function(WW,iW){const OW=dW(fW,GW,[iW]);if(null===OW)return"s";const mW=OW[1];if("ProxyObject"===mW)return"p";if(""!==mW)return dW(XW,mW,["bound "])?"b":"n";try{const iW=VW(WW,"name"),OW=void 0!==iW&&dW(pW,iW,["value"])?iW.value:void 0;return"string"===typeof OW&&dW(XW,OW,["bound "])?"b":"p"}catch{return"p"}}(WW,OW)}${mW}.${function(WW){const{written:iW}=dW(CW,IW,[WW,aW]);let OW=2166136261;for(let mW=0;mW<iW;mW++)OW=(OW^aW[mW])>>>0,OW=OW+(OW<<1)+(OW<<4)+(OW<<7)+(OW<<8)+(OW<<24)>>>0;return dW(BW,OW,[36])}(OW)}`;
      return dW(RW, FW, [WW, EW]), EW
    }

    function Wi(WW) {
      const iW = dW(fW, zW, [WW]);
      return null === iW ? WW : iW[1]
    }
    var ii = OW(2401);
    const Oi = Function.prototype.toString,
      mi = Object.getOwnPropertyDescriptor,
      Ei = RegExp.prototype.exec,
      Ni = Object.prototype.hasOwnProperty,
      Pi = Set.prototype.has,
      Li = WeakMap.prototype.get,
      ci = WeakMap.prototype.set,
      wi = Reflect.get,
      ti = Object.getPrototypeOf,
      Zi = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function xi(WW, iW, OW) {
      return {
        code: WW,
        holder: iW,
        key: OW,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${OW}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function li() {
      return Zi
    }
    const Ai = Zi?.Instance.prototype,
      bi = Zi?.Memory.prototype;

    function ji() {
      return bi
    }
    let Ui, ki;
    try {
      const WW = globalThis.crypto,
        iW = WW?.subtle;
      Ui = WW ? ti(WW) : void 0, ki = iW ? ti(iW) : void 0
    } catch {}

    function si(WW, iW) {
      for (let OW = WW; void 0 !== OW && null !== OW; OW = ti(OW)) {
        const WW = mi(OW, iW);
        if (WW) return WW
      }
    }
    const Mi = [xi("in", li, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), xi("is", li, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), xi("co", li, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), xi("cs", li, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), xi("mo", li, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), xi("it", li, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), xi("me", li, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), xi("ex", (function() {
      return Ai
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), xi("bu", ji, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), xi("gr", ji, "grow", {
      tier: "punished"
    }), xi("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), xi("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), xi("su", (function() {
      return Ui
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), xi("dg", (function() {
      return ki
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function Ki(WW) {
      let iW;
      try {
        const OW = wi(globalThis, WW);
        iW = "function" === typeof OW ? OW.prototype : void 0
      } catch {}
      return () => iW
    }

    function Si(WW, iW, OW) {
      return OW.map((OW => xi(WW, iW, OW)))
    }
    const Yi = xi("rx", Ki("HTMLCanvasElement"), "getContext"),
      yi = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      Ti = {
        webgpu: [...Si("gd", Ki("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...Si("gq", Ki("GPUQueue"), ["submit", "writeBuffer"]), ...Si("ge", Ki("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...Si("gp", Ki("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), Yi],
        webgl: [...Si("g2", Ki("WebGL2RenderingContext"), [...yi, "drawArraysInstanced", "drawElementsInstanced"]), Yi],
        webgl1: [...Si("g1", Ki("WebGLRenderingContext"), yi), Yi]
      };
    let Ji = [];
    const Hi = new WeakMap;

    function ni(WW, iW) {
      const OW = vW();
      try {
        dW(ci, Hi, [WW, iW])
      } finally {
        gW(OW)
      }
    }

    function ui(WW) {
      try {
        const iW = wO(WW),
          OW = dW(Li, Hi, [iW]);
        return OO(OW, WW) ? oi(WW, !0) : `${oi(WW,!1)}${QW(OW??iW)}`
      } catch {
        return `${oi(WW,!1)}${QW(void 0)}`
      }
    }

    function oi(WW, iW) {
      let {
        code: OW,
        key: mW
      } = WW;
      return `wh:${OW}${iW?"-dbg":""}:${mW}`
    }

    function di(WW) {
      return Object.values(Ti).flatMap((iW => iW.map((iW => oi(iW, WW)))))
    }
    const ei = new Set(di(!0)),
      vi = new Set([...di(!1), ...ei]),
      gi = oi(Yi, !1);

    function Di(WW) {
      Ji = Ti[WW]
    }

    function Vi(WW) {
      const iW = vW();
      try {
        return fi(WW) || fi(Wi(WW))
      } finally {
        gW(iW)
      }
    }

    function fi(WW) {
      return dW(Pi, vi, [WW])
    }

    function Ci(WW) {
      return new Set(Mi.filter((iW => iW.tier === WW)).map((WW => `wh:${WW.code}`)))
    }
    const Xi = Ci("punished"),
      Bi = !1,
      qi = new Set(ii.d),
      Ri = Ci("weighted");

    function Gi(WW) {
      const iW = vW();
      try {
        return ai(Wi(WW))
      } finally {
        gW(iW)
      }
    }

    function Ii(WW) {
      const iW = vW();
      try {
        return Wi(WW)
      } finally {
        gW(iW)
      }
    }

    function ai(WW) {
      return dW(Pi, Ri, [WW])
    }

    function ri(WW) {
      const iW = vW();
      try {
        return zi(WW)
      } finally {
        gW(iW)
      }
    }

    function zi(WW) {
      return dW(Pi, qi, [WW])
    }

    function Fi(WW) {
      return "wb" === WW || dW(Pi, Xi, [WW])
    }

    function Qi(WW) {
      const iW = vW();
      try {
        return Fi(WW) || zi(WW)
      } finally {
        gW(iW)
      }
    }

    function WO(WW) {
      const iW = vW();
      try {
        return "wb" === WW || Bi && Fi(WW)
      } finally {
        gW(iW)
      }
    }

    function iO(WW, iW) {
      let {
        isGetter: OW
      } = iW;
      const mW = mi(WW, OW ? "get" : "value");
      return void 0 === mW ? void 0 : mW.value
    }

    function OO(WW, iW) {
      let {
        isConstructor: OW,
        native: mW
      } = iW;
      return "function" === typeof WW && (!(!OW && dW(Ni, WW, ["prototype"])) && null !== dW(Ei, mW, [dW(Oi, WW, [])]))
    }

    function mO(WW, iW) {
      return OO(WW, xi("", (() => {}), iW, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let EO = null,
      NO = !1;

    function PO() {
      try {
        return globalThis.WebAssembly === Zi
      } catch {
        return !1
      }
    }

    function LO(WW) {
      try {
        return function(WW) {
          const {
            holder: iW,
            key: OW,
            onNamespace: mW,
            inSecureContext: EW
          } = WW, NW = iW(), PW = si(NW, OW);
          if (!PW) return !(EW && !0 === globalThis.isSecureContext);
          const LW = iO(PW, WW);
          if (!OO(LW, WW)) return !1;
          if (mW) {
            const iW = globalThis.WebAssembly;
            if (iW !== NW && null !== iW && ("object" === typeof iW || "function" === typeof iW)) {
              const mW = wi(iW, OW);
              return mW === LW || void 0 === mW || OO(mW, WW)
            }
          }
          return !0
        }(WW)
      } catch {
        return !1
      }
    }

    function cO(WW) {
      const iW = `wh:${WW.code}`;
      if ("punished" === WW.tier) return iW;
      try {
        return `${iW}${QW(wO(WW))}`
      } catch {
        return `${iW}${QW(void 0)}`
      }
    }

    function wO(WW) {
      const iW = si(WW.holder(), WW.key),
        OW = void 0 === iW ? void 0 : iO(iW, WW);
      return WW.onNamespace && !PO() && OO(OW, WW) ? wi(globalThis.WebAssembly, WW.key) : OW
    }

    function tO(WW) {
      if (Fi(WW)) return 5;
      const iW = Wi(WW);
      return ai(iW) ? 4 : zi(WW) ? 3 : fi(iW) ? function(WW) {
        return dW(Pi, ei, [WW])
      }(iW) ? -1 : iW === gi ? 0 : 1 : 2
    }

    function ZO() {
      const WW = function() {
        const WW = eW();
        return YW === kW || YW === sW ? (dW = oW, uW = HW) : dW = PW, WW
      }();
      try {
        if (null === EO || !Fi(EO)) {
          const WW = function() {
            if (void 0 === Zi) return null;
            let WW = PO() ? null : "wh:wa";
            const iW = iW => {
              null !== iW && (null === WW || tO(iW) > tO(WW)) && (WW = iW)
            };
            for (let OW = 0; OW < Mi.length; OW++) {
              const WW = Mi[OW];
              void 0 === WW || LO(WW) || iW(cO(WW))
            }
            iW((0, ii.p)());
            for (let OW = 0; OW < Ji.length; OW++) {
              const WW = Ji[OW];
              void 0 === WW || LO(WW) || iW(ui(WW))
            }
            return WW
          }();
          (null === EO || null !== WW && tO(WW) > tO(EO)) && (EO = WW)
        }
      } finally {
        gW(WW)
      }
    }

    function xO() {
      NO = !0
    }

    function lO() {
      if (NO) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && ZO(), null !== EO) return EO;
      if (void 0 === Zi) return "wn:unsupported";
      const WW = (0, mW.p)();
      return null === WW ? null : `wn:${WW}`
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);