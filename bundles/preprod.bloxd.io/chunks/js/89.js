export const id = 89;
export const ids = [89];
export const modules = {
  5069: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => Ar,
      i: () => Li,
      l: () => Tr,
      p: () => ri,
      r: () => Ir,
      v: () => Vr,
      x: () => or,
      z: () => Fr,
      A: () => ur,
      B: () => zi,
      F: () => Qi,
      J: () => Br,
      L: () => Zr
    });
    var OM = iM(3185);
    const SM = Function.prototype.toString,
      jM = RegExp.prototype.exec,
      aM = Reflect.apply,
      PM = Function.prototype.call,
      nM = Function.prototype.apply,
      QM = Function.prototype.bind,
      zM = Object.defineProperty,
      LM = Uint8Array;
    let mM, HM;
    try {
      mM = globalThis.crypto, HM = void 0 === mM || null === mM ? void 0 : mM.getRandomValues
    } catch {}
    const hM = "bloxdBindApply";
    let JM;
    try {
      const MM = PM;
      zM(MM, hM, {
        __proto__: null,
        value: QM,
        configurable: !0
      });
      try {
        JM = MM[hM](nM)
      } finally {
        delete MM[hM]
      }
    } catch {}
    const dM = 16,
      yM = 256,
      lM = 0,
      EM = 1,
      UM = 2,
      GM = 3;
    let CM, eM = lM,
      bM = aM,
      wM = 0;

    function tM(MM, rM) {
      return MM === `function ${rM}() { [native code] }` || MM === `function ${rM}() {\n    [native code]\n}`
    }
    const gM = 0,
      uM = 1,
      RM = 2;
    let pM = gM;

    function WM(MM, rM, iM) {
      if (pM === RM && eM === EM && ! function() {
          const MM = CM;
          return wM >= yM && (bM(HM, mM, [MM]), wM = 0), MM[wM++] < 256 / dM
        }()) return function(MM, rM, iM) {
        return bM(MM, rM, iM ?? 0)
      }(...arguments);
      if (pM === gM || eM === UM) return aM(MM, rM, iM);
      let OM;
      pM = gM;
      try {
        eM === lM && (eM = GM, eM = function() {
          const MM = aM(SM, aM, []);
          if (tM(MM, "apply")) return UM;
          if (null === aM(jM, /\(\.\.\.arguments\)/, [MM]) && null === aM(jM, /^function\s*\(\.\.\.[\w$]+\)/, [MM])) return UM;
          if ("function" !== typeof JM || "function" !== typeof PM || "function" !== typeof nM || "function" !== typeof QM || "function" !== typeof zM || "function" !== typeof HM || "function" !== typeof LM || !tM(aM(SM, PM, []), "call") || !tM(aM(SM, nM, []), "apply") || !tM(aM(SM, QM, []), "bind") || !tM(aM(SM, zM, []), "defineProperty") || !tM(aM(SM, HM, []), "getRandomValues") || !tM(aM(SM, LM, []), "Uint8Array")) return UM;
          const rM = JM,
            iM = {},
            OM = function(MM) {
              return this === iM && MM === iM
            };
          try {
            if (!0 !== rM(OM, iM, [iM])) return UM;
            const MM = new LM(yM);
            rM(HM, mM, [MM]), CM = MM
          } catch {
            return UM
          }
          return bM = rM, EM
        }()), OM = aM(MM, rM, iM)
      } catch (hM) {
        throw eM = UM, hM
      }
      return pM = RM, OM
    }
    let sM = aM;

    function DM() {
      return (sM === aM ? 0 : 3) + pM
    }

    function kM() {
      const MM = DM();
      return sM = aM, MM
    }

    function ZM(MM) {
      sM = MM >= 3 ? WM : aM, pM = MM % 3
    }
    const oM = Function.prototype.toString,
      fM = Object.getOwnPropertyDescriptor,
      YM = Object.prototype.hasOwnProperty,
      NM = RegExp.prototype.exec,
      AM = TextEncoder.prototype.encodeInto,
      xM = String.prototype.startsWith,
      vM = Number.prototype.toString,
      FM = WeakMap.prototype.get,
      BM = WeakMap.prototype.set,
      XM = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      IM = new TextEncoder,
      KM = new Uint8Array(1024),
      qM = 9999999,
      TM = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      VM = new WeakMap;

    function cM(MM) {
      if ("function" !== typeof MM) return "#a0.0";
      const rM = sM(FM, VM, [MM]);
      if (void 0 !== rM) return rM;
      const iM = sM(oM, MM, []),
        OM = iM.length > qM ? qM : iM.length,
        SM = `#${function(MM,rM){const iM=sM(NM,XM,[rM]);if(null===iM)return"s";const OM=iM[1];if("ProxyObject"===OM)return"p";if(""!==OM)return sM(xM,OM,["bound "])?"b":"n";try{const rM=fM(MM,"name"),iM=void 0!==rM&&sM(YM,rM,["value"])?rM.value:void 0;return"string"===typeof iM&&sM(xM,iM,["bound "])?"b":"p"}catch{return"p"}}(MM,iM)}${OM}.${function(MM){const{written:rM}=sM(AM,IM,[MM,KM]);let iM=2166136261;for(let OM=0;OM<rM;OM++)iM=(iM^KM[OM])>>>0,iM=iM+(iM<<1)+(iM<<4)+(iM<<7)+(iM<<8)+(iM<<24)>>>0;return sM(vM,iM,[36])}(iM)}`;
      return sM(BM, VM, [MM, SM]), SM
    }

    function Mr(MM) {
      const rM = sM(NM, TM, [MM]);
      return null === rM ? MM : rM[1]
    }
    var rr = iM(3205);
    const ir = Function.prototype.toString,
      Or = Object.getOwnPropertyDescriptor,
      Sr = RegExp.prototype.exec,
      jr = Object.prototype.hasOwnProperty,
      ar = Set.prototype.has,
      Pr = WeakMap.prototype.get,
      nr = WeakMap.prototype.set,
      Qr = Reflect.get,
      zr = Object.getPrototypeOf,
      Lr = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function mr(MM, rM, iM) {
      return {
        code: MM,
        holder: rM,
        key: iM,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${iM}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function Hr() {
      return Lr
    }
    const hr = Lr?.Instance.prototype,
      Jr = Lr?.Memory.prototype;

    function dr() {
      return Jr
    }
    let yr, lr;
    try {
      const MM = globalThis.crypto,
        rM = MM?.subtle;
      yr = MM ? zr(MM) : void 0, lr = rM ? zr(rM) : void 0
    } catch {}

    function Er(MM, rM) {
      for (let iM = MM; void 0 !== iM && null !== iM; iM = zr(iM)) {
        const MM = Or(iM, rM);
        if (MM) return MM
      }
    }
    const Ur = [mr("in", Hr, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), mr("is", Hr, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), mr("co", Hr, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), mr("cs", Hr, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), mr("mo", Hr, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), mr("it", Hr, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), mr("me", Hr, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), mr("ex", (function() {
      return hr
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), mr("bu", dr, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), mr("gr", dr, "grow", {
      tier: "punished"
    }), mr("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), mr("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), mr("su", (function() {
      return yr
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), mr("dg", (function() {
      return lr
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function Gr(MM) {
      let rM;
      try {
        const iM = Qr(globalThis, MM);
        rM = "function" === typeof iM ? iM.prototype : void 0
      } catch {}
      return () => rM
    }

    function Cr(MM, rM, iM) {
      return iM.map((iM => mr(MM, rM, iM)))
    }
    const er = mr("rx", Gr("HTMLCanvasElement"), "getContext"),
      br = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      wr = {
        webgpu: [...Cr("gd", Gr("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...Cr("gq", Gr("GPUQueue"), ["submit", "writeBuffer"]), ...Cr("ge", Gr("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...Cr("gp", Gr("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), er],
        webgl: [...Cr("g2", Gr("WebGL2RenderingContext"), [...br, "drawArraysInstanced", "drawElementsInstanced"]), er],
        webgl1: [...Cr("g1", Gr("WebGLRenderingContext"), br), er]
      };
    let tr = [];
    const gr = new WeakMap;

    function ur(MM, rM) {
      const iM = kM();
      try {
        sM(nr, gr, [MM, rM])
      } finally {
        ZM(iM)
      }
    }

    function Rr(MM) {
      try {
        const rM = Pi(MM),
          iM = sM(Pr, gr, [rM]);
        return Mi(iM, MM) ? pr(MM, !0) : `${pr(MM,!1)}${cM(iM??rM)}`
      } catch {
        return `${pr(MM,!1)}${cM(void 0)}`
      }
    }

    function pr(MM, rM) {
      let {
        code: iM,
        key: OM
      } = MM;
      return `wh:${iM}${rM?"-dbg":""}:${OM}`
    }

    function Wr(MM) {
      return Object.values(wr).flatMap((rM => rM.map((rM => pr(rM, MM)))))
    }
    const sr = new Set(Wr(!0)),
      Dr = new Set([...Wr(!1), ...sr]),
      kr = pr(er, !1);

    function Zr(MM) {
      tr = wr[MM]
    }

    function or(MM) {
      const rM = kM();
      try {
        return fr(MM) || fr(Mr(MM))
      } finally {
        ZM(rM)
      }
    }

    function fr(MM) {
      return sM(ar, Dr, [MM])
    }

    function Yr(MM) {
      return new Set(Ur.filter((rM => rM.tier === MM)).map((MM => `wh:${MM.code}`)))
    }
    const Nr = Yr("punished"),
      Ar = !1,
      xr = new Set(rr.e),
      vr = Yr("weighted");

    function Fr(MM) {
      const rM = kM();
      try {
        return Xr(Mr(MM))
      } finally {
        ZM(rM)
      }
    }

    function Br(MM) {
      const rM = kM();
      try {
        return Mr(MM)
      } finally {
        ZM(rM)
      }
    }

    function Xr(MM) {
      return sM(ar, vr, [MM])
    }

    function Ir(MM) {
      const rM = kM();
      try {
        return Kr(MM)
      } finally {
        ZM(rM)
      }
    }

    function Kr(MM) {
      return sM(ar, xr, [MM])
    }

    function qr(MM) {
      return "wb" === MM || sM(ar, Nr, [MM])
    }

    function Tr(MM) {
      const rM = kM();
      try {
        return qr(MM) || Kr(MM)
      } finally {
        ZM(rM)
      }
    }

    function Vr(MM) {
      const rM = kM();
      try {
        return "wb" === MM || Ar && qr(MM)
      } finally {
        ZM(rM)
      }
    }

    function cr(MM, rM) {
      let {
        isGetter: iM
      } = rM;
      const OM = Or(MM, iM ? "get" : "value");
      return void 0 === OM ? void 0 : OM.value
    }

    function Mi(MM, rM) {
      let {
        isConstructor: iM,
        native: OM
      } = rM;
      return "function" === typeof MM && (!(!iM && sM(jr, MM, ["prototype"])) && null !== sM(Sr, OM, [sM(ir, MM, [])]))
    }

    function ri(MM, rM) {
      return Mi(MM, mr("", (() => {}), rM, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let ii = null,
      Oi = !1;

    function Si() {
      try {
        return globalThis.WebAssembly === Lr
      } catch {
        return !1
      }
    }

    function ji(MM) {
      try {
        return function(MM) {
          const {
            holder: rM,
            key: iM,
            onNamespace: OM,
            inSecureContext: SM
          } = MM, jM = rM(), aM = Er(jM, iM);
          if (!aM) return !(SM && !0 === globalThis.isSecureContext);
          const PM = cr(aM, MM);
          if (!Mi(PM, MM)) return !1;
          if (OM) {
            const rM = globalThis.WebAssembly;
            if (rM !== jM && null !== rM && ("object" === typeof rM || "function" === typeof rM)) {
              const OM = Qr(rM, iM);
              return OM === PM || void 0 === OM || Mi(OM, MM)
            }
          }
          return !0
        }(MM)
      } catch {
        return !1
      }
    }

    function ai(MM) {
      const rM = `wh:${MM.code}`;
      if ("punished" === MM.tier) return rM;
      try {
        return `${rM}${cM(Pi(MM))}`
      } catch {
        return `${rM}${cM(void 0)}`
      }
    }

    function Pi(MM) {
      const rM = Er(MM.holder(), MM.key),
        iM = void 0 === rM ? void 0 : cr(rM, MM);
      return MM.onNamespace && !Si() && Mi(iM, MM) ? Qr(globalThis.WebAssembly, MM.key) : iM
    }

    function ni(MM) {
      if (qr(MM)) return 5;
      const rM = Mr(MM);
      return Xr(rM) ? 4 : Kr(MM) ? 3 : fr(rM) ? function(MM) {
        return sM(ar, sr, [MM])
      }(rM) ? -1 : rM === kr ? 0 : 1 : 2
    }

    function Qi() {
      const MM = function() {
        const MM = DM();
        return eM === lM || eM === EM ? (sM = WM, pM = uM) : sM = aM, MM
      }();
      try {
        if (null === ii || !qr(ii)) {
          const MM = function() {
            if (void 0 === Lr) return null;
            let MM = Si() ? null : "wh:wa";
            const rM = rM => {
              null !== rM && (null === MM || ni(rM) > ni(MM)) && (MM = rM)
            };
            for (let iM = 0; iM < Ur.length; iM++) {
              const MM = Ur[iM];
              void 0 === MM || ji(MM) || rM(ai(MM))
            }
            rM((0, rr.l)());
            for (let iM = 0; iM < tr.length; iM++) {
              const MM = tr[iM];
              void 0 === MM || ji(MM) || rM(Rr(MM))
            }
            return MM
          }();
          (null === ii || null !== MM && ni(MM) > ni(ii)) && (ii = MM)
        }
      } finally {
        ZM(MM)
      }
    }

    function zi() {
      Oi = !0
    }

    function Li() {
      if (Oi) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Qi(), null !== ii) return ii;
      if (void 0 === Lr) return "wn:unsupported";
      const MM = (0, OM.t)();
      return null === MM ? null : `wn:${MM}`
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);