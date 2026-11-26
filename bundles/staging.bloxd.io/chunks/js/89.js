export const id = 89;
export const ids = [89];
export const modules = {
  5180: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => le,
      c: () => Zx,
      d: () => Ie,
      e: () => ex,
      i: () => ue,
      l: () => de,
      n: () => ae,
      q: () => me,
      r: () => ze,
      t: () => wx,
      u: () => nx,
      v: () => Ke,
      x: () => Ce
    });
    var JV = xV(3194);
    const YV = Function.prototype.toString,
      UV = RegExp.prototype.exec,
      yV = Reflect.apply,
      pV = Function.prototype.call,
      QV = Function.prototype.apply,
      nV = Function.prototype.bind,
      wV = Object.defineProperty,
      ZV = Uint8Array;
    let vV, rV;
    try {
      vV = globalThis.crypto, rV = void 0 === vV || null === vV ? void 0 : vV.getRandomValues
    } catch {}
    const kV = "bloxdBindApply";
    let bV;
    try {
      const VV = pV;
      wV(VV, kV, {
        __proto__: null,
        value: nV,
        configurable: !0
      });
      try {
        bV = VV[kV](QV)
      } finally {
        delete VV[kV]
      }
    } catch {}
    const EV = 16,
      BV = 256,
      jV = 0,
      qV = 1,
      tV = 2,
      FV = 3;
    let TV, PV = jV,
      AV = yV,
      NV = 0;

    function XV(VV, eV) {
      return VV === `function ${eV}() { [native code] }` || VV === `function ${eV}() {\n    [native code]\n}`
    }
    const MV = 0,
      zV = 1,
      GV = 2;
    let WV = MV;

    function RV(VV, eV, xV) {
      if (WV === GV && PV === qV && ! function() {
          const VV = TV;
          return NV >= BV && (AV(rV, vV, [VV]), NV = 0), VV[NV++] < 256 / EV
        }()) return function(VV, eV, xV) {
        return AV(VV, eV, xV ?? 0)
      }(...arguments);
      if (WV === MV || PV === tV) return yV(VV, eV, xV);
      let JV;
      WV = MV;
      try {
        PV === jV && (PV = FV, PV = function() {
          const VV = yV(YV, yV, []);
          if (XV(VV, "apply")) return tV;
          if (null === yV(UV, /\(\.\.\.arguments\)/, [VV]) && null === yV(UV, /^function\s*\(\.\.\.[\w$]+\)/, [VV])) return tV;
          if ("function" !== typeof bV || "function" !== typeof pV || "function" !== typeof QV || "function" !== typeof nV || "function" !== typeof wV || "function" !== typeof rV || "function" !== typeof ZV || !XV(yV(YV, pV, []), "call") || !XV(yV(YV, QV, []), "apply") || !XV(yV(YV, nV, []), "bind") || !XV(yV(YV, wV, []), "defineProperty") || !XV(yV(YV, rV, []), "getRandomValues") || !XV(yV(YV, ZV, []), "Uint8Array")) return tV;
          const eV = bV,
            xV = {},
            JV = function(VV) {
              return this === xV && VV === xV
            };
          try {
            if (!0 !== eV(JV, xV, [xV])) return tV;
            const VV = new ZV(BV);
            eV(rV, vV, [VV]), TV = VV
          } catch {
            return tV
          }
          return AV = eV, qV
        }()), JV = yV(VV, eV, xV)
      } catch (kV) {
        throw PV = tV, kV
      }
      return WV = GV, JV
    }
    let gV = yV;

    function DV() {
      return (gV === yV ? 0 : 3) + WV
    }

    function iV() {
      const VV = DV();
      return gV = yV, VV
    }

    function CV(VV) {
      gV = VV >= 3 ? RV : yV, WV = VV % 3
    }
    const aV = Function.prototype.toString,
      oV = Object.getOwnPropertyDescriptor,
      cV = Object.prototype.hasOwnProperty,
      hV = RegExp.prototype.exec,
      lV = TextEncoder.prototype.encodeInto,
      LV = String.prototype.startsWith,
      fV = Number.prototype.toString,
      mV = WeakMap.prototype.get,
      KV = WeakMap.prototype.set,
      HV = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      uV = new TextEncoder,
      sV = new Uint8Array(1024),
      SV = 9999999,
      IV = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      dV = new WeakMap;

    function OV(VV) {
      if ("function" !== typeof VV) return "#a0.0";
      const eV = gV(mV, dV, [VV]);
      if (void 0 !== eV) return eV;
      const xV = gV(aV, VV, []),
        JV = xV.length > SV ? SV : xV.length,
        YV = `#${function(VV,eV){const xV=gV(hV,HV,[eV]);if(null===xV)return"s";const JV=xV[1];if("ProxyObject"===JV)return"p";if(""!==JV)return gV(LV,JV,["bound "])?"b":"n";try{const eV=oV(VV,"name"),xV=void 0!==eV&&gV(cV,eV,["value"])?eV.value:void 0;return"string"===typeof xV&&gV(LV,xV,["bound "])?"b":"p"}catch{return"p"}}(VV,xV)}${JV}.${function(VV){const{written:eV}=gV(lV,uV,[VV,sV]);let xV=2166136261;for(let JV=0;JV<eV;JV++)xV=(xV^sV[JV])>>>0,xV=xV+(xV<<1)+(xV<<4)+(xV<<7)+(xV<<8)+(xV<<24)>>>0;return gV(fV,xV,[36])}(xV)}`;
      return gV(KV, dV, [VV, YV]), YV
    }

    function Ve(VV) {
      const eV = gV(hV, IV, [VV]);
      return null === eV ? VV : eV[1]
    }
    var ee = xV(3208);
    const xe = Function.prototype.toString,
      Je = Object.getOwnPropertyDescriptor,
      Ye = RegExp.prototype.exec,
      Ue = Object.prototype.hasOwnProperty,
      ye = Set.prototype.has,
      pe = WeakMap.prototype.get,
      Qe = WeakMap.prototype.set,
      ne = Reflect.get,
      we = Object.getPrototypeOf,
      Ze = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function ve(VV, eV, xV) {
      return {
        code: VV,
        holder: eV,
        key: xV,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${xV}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function re() {
      return Ze
    }
    const ke = Ze?.Instance.prototype,
      be = Ze?.Memory.prototype;

    function Ee() {
      return be
    }
    let Be, je;
    try {
      const VV = globalThis.crypto,
        eV = VV?.subtle;
      Be = VV ? we(VV) : void 0, je = eV ? we(eV) : void 0
    } catch {}

    function qe(VV, eV) {
      for (let xV = VV; void 0 !== xV && null !== xV; xV = we(xV)) {
        const VV = Je(xV, eV);
        if (VV) return VV
      }
    }
    const te = [ve("in", re, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), ve("is", re, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), ve("co", re, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), ve("cs", re, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), ve("mo", re, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), ve("it", re, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), ve("me", re, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), ve("ex", (function() {
      return ke
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), ve("bu", Ee, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), ve("gr", Ee, "grow", {
      tier: "punished"
    }), ve("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), ve("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), ve("su", (function() {
      return Be
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), ve("dg", (function() {
      return je
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function Fe(VV) {
      let eV;
      try {
        const xV = ne(globalThis, VV);
        eV = "function" === typeof xV ? xV.prototype : void 0
      } catch {}
      return () => eV
    }

    function Te(VV, eV, xV) {
      return xV.map((xV => ve(VV, eV, xV)))
    }
    const Pe = ve("rx", Fe("HTMLCanvasElement"), "getContext"),
      Ae = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      Ne = {
        webgpu: [...Te("gd", Fe("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...Te("gq", Fe("GPUQueue"), ["submit", "writeBuffer"]), ...Te("ge", Fe("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...Te("gp", Fe("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), Pe],
        webgl: [...Te("g2", Fe("WebGL2RenderingContext"), [...Ae, "drawArraysInstanced", "drawElementsInstanced"]), Pe],
        webgl1: [...Te("g1", Fe("WebGLRenderingContext"), Ae), Pe]
      };
    let Xe = [];
    const Me = new WeakMap;

    function ze(VV, eV) {
      const xV = iV();
      try {
        gV(Qe, Me, [VV, eV])
      } finally {
        CV(xV)
      }
    }

    function Ge(VV) {
      try {
        const eV = px(VV),
          xV = gV(pe, Me, [eV]);
        return Vx(xV, VV) ? We(VV, !0) : `${We(VV,!1)}${OV(xV??eV)}`
      } catch {
        return `${We(VV,!1)}${OV(void 0)}`
      }
    }

    function We(VV, eV) {
      let {
        code: xV,
        key: JV
      } = VV;
      return `wh:${xV}${eV?"-dbg":""}:${JV}`
    }

    function Re(VV) {
      return Object.values(Ne).flatMap((eV => eV.map((eV => We(eV, VV)))))
    }
    const ge = new Set(Re(!0)),
      De = new Set([...Re(!1), ...ge]),
      ie = We(Pe, !1);

    function Ce(VV) {
      Xe = Ne[VV]
    }

    function ae(VV) {
      const eV = iV();
      try {
        return oe(VV) || oe(Ve(VV))
      } finally {
        CV(eV)
      }
    }

    function oe(VV) {
      return gV(ye, De, [VV])
    }

    function ce(VV) {
      return new Set(te.filter((eV => eV.tier === VV)).map((VV => `wh:${VV.code}`)))
    }
    const he = ce("punished"),
      le = !1,
      Le = new Set(ee.c),
      fe = ce("weighted");

    function me(VV) {
      const eV = iV();
      try {
        return He(Ve(VV))
      } finally {
        CV(eV)
      }
    }

    function Ke(VV) {
      const eV = iV();
      try {
        return Ve(VV)
      } finally {
        CV(eV)
      }
    }

    function He(VV) {
      return gV(ye, fe, [VV])
    }

    function ue(VV) {
      const eV = iV();
      try {
        return se(VV)
      } finally {
        CV(eV)
      }
    }

    function se(VV) {
      return gV(ye, Le, [VV])
    }

    function Se(VV) {
      return "wb" === VV || gV(ye, he, [VV])
    }

    function Ie(VV) {
      const eV = iV();
      try {
        return Se(VV) || se(VV)
      } finally {
        CV(eV)
      }
    }

    function de(VV) {
      const eV = iV();
      try {
        return "wb" === VV || le && Se(VV)
      } finally {
        CV(eV)
      }
    }

    function Oe(VV, eV) {
      let {
        isGetter: xV
      } = eV;
      const JV = Je(VV, xV ? "get" : "value");
      return void 0 === JV ? void 0 : JV.value
    }

    function Vx(VV, eV) {
      let {
        isConstructor: xV,
        native: JV
      } = eV;
      return "function" === typeof VV && (!(!xV && gV(Ue, VV, ["prototype"])) && null !== gV(Ye, JV, [gV(xe, VV, [])]))
    }

    function ex(VV, eV) {
      return Vx(VV, ve("", (() => {}), eV, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let xx = null,
      Jx = !1;

    function Yx() {
      try {
        return globalThis.WebAssembly === Ze
      } catch {
        return !1
      }
    }

    function Ux(VV) {
      try {
        return function(VV) {
          const {
            holder: eV,
            key: xV,
            onNamespace: JV,
            inSecureContext: YV
          } = VV, UV = eV(), yV = qe(UV, xV);
          if (!yV) return !(YV && !0 === globalThis.isSecureContext);
          const pV = Oe(yV, VV);
          if (!Vx(pV, VV)) return !1;
          if (JV) {
            const eV = globalThis.WebAssembly;
            if (eV !== UV && null !== eV && ("object" === typeof eV || "function" === typeof eV)) {
              const JV = ne(eV, xV);
              return JV === pV || void 0 === JV || Vx(JV, VV)
            }
          }
          return !0
        }(VV)
      } catch {
        return !1
      }
    }

    function yx(VV) {
      const eV = `wh:${VV.code}`;
      if ("punished" === VV.tier) return eV;
      try {
        return `${eV}${OV(px(VV))}`
      } catch {
        return `${eV}${OV(void 0)}`
      }
    }

    function px(VV) {
      const eV = qe(VV.holder(), VV.key),
        xV = void 0 === eV ? void 0 : Oe(eV, VV);
      return VV.onNamespace && !Yx() && Vx(xV, VV) ? ne(globalThis.WebAssembly, VV.key) : xV
    }

    function Qx(VV) {
      if (Se(VV)) return 5;
      const eV = Ve(VV);
      return He(eV) ? 4 : se(VV) ? 3 : oe(eV) ? function(VV) {
        return gV(ye, ge, [VV])
      }(eV) ? -1 : eV === ie ? 0 : 1 : 2
    }

    function nx() {
      const VV = function() {
        const VV = DV();
        return PV === jV || PV === qV ? (gV = RV, WV = zV) : gV = yV, VV
      }();
      try {
        if (null === xx || !Se(xx)) {
          const VV = function() {
            if (void 0 === Ze) return null;
            let VV = Yx() ? null : "wh:wa";
            const eV = eV => {
              null !== eV && (null === VV || Qx(eV) > Qx(VV)) && (VV = eV)
            };
            for (let xV = 0; xV < te.length; xV++) {
              const VV = te[xV];
              void 0 === VV || Ux(VV) || eV(yx(VV))
            }
            eV((0, ee.r)());
            for (let xV = 0; xV < Xe.length; xV++) {
              const VV = Xe[xV];
              void 0 === VV || Ux(VV) || eV(Ge(VV))
            }
            return VV
          }();
          (null === xx || null !== VV && Qx(VV) > Qx(xx)) && (xx = VV)
        }
      } finally {
        CV(VV)
      }
    }

    function wx() {
      Jx = !0
    }

    function Zx() {
      if (Jx) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && nx(), null !== xx) return xx;
      if (void 0 === Ze) return "wn:unsupported";
      const VV = (0, JV.r)();
      return null === VV ? null : `wn:${VV}`
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);