export const id = 74;
export const ids = [74];
export const modules = {
  4352: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => yR,
      h: () => Gg,
      j: () => NR,
      m: () => Rg,
      q: () => MR,
      s: () => lR,
      v: () => dR,
      y: () => iR,
      B: () => ZR,
      E: () => cg,
      G: () => Kg,
      K: () => AR,
      M: () => vR
    });
    var tU = gU(3372);
    const pU = Function.prototype.toString,
      EU = RegExp.prototype.exec,
      PU = Reflect.apply,
      TU = Function.prototype.call,
      qU = Function.prototype.apply,
      KU = Function.prototype.bind,
      cU = Object.defineProperty,
      GU = Uint8Array;
    let jU, uU;
    try {
      jU = globalThis.crypto, uU = void 0 === jU || null === jU ? void 0 : jU.getRandomValues
    } catch {}
    const CU = "bloxdBindApply";
    let hU;
    try {
      const UU = TU;
      cU(UU, CU, {
        __proto__: null,
        value: KU,
        configurable: !0
      });
      try {
        hU = UU[CU](qU)
      } finally {
        delete UU[CU]
      }
    } catch {}
    const QU = 16,
      eU = 256,
      WU = 0,
      fU = 1,
      xU = 2,
      mU = 3;
    let IU, JU = WU,
      wU = PU,
      nU = 0;

    function bU(UU, RU) {
      return UU === `function ${RU}() { [native code] }` || UU === `function ${RU}() {\n    [native code]\n}`
    }
    const oU = 0,
      ZU = 1,
      aU = 2;
    let YU = oU;

    function BU(UU, RU, gU) {
      if (YU === aU && JU === fU && ! function() {
          const UU = IU;
          return nU >= eU && (wU(uU, jU, [UU]), nU = 0), UU[nU++] < 256 / QU
        }()) return function(UU, RU, gU) {
        return wU(UU, RU, gU ?? 0)
      }(...arguments);
      if (YU === oU || JU === xU) return PU(UU, RU, gU);
      let tU;
      YU = oU;
      try {
        JU === WU && (JU = mU, JU = function() {
          const UU = PU(pU, PU, []);
          if (bU(UU, "apply")) return xU;
          if (null === PU(EU, /\(\.\.\.arguments\)/, [UU]) && null === PU(EU, /^function\s*\(\.\.\.[\w$]+\)/, [UU])) return xU;
          if ("function" !== typeof hU || "function" !== typeof TU || "function" !== typeof qU || "function" !== typeof KU || "function" !== typeof cU || "function" !== typeof uU || "function" !== typeof GU || !bU(PU(pU, TU, []), "call") || !bU(PU(pU, qU, []), "apply") || !bU(PU(pU, KU, []), "bind") || !bU(PU(pU, cU, []), "defineProperty") || !bU(PU(pU, uU, []), "getRandomValues") || !bU(PU(pU, GU, []), "Uint8Array")) return xU;
          const RU = hU,
            gU = {},
            tU = function(UU) {
              return this === gU && UU === gU
            };
          try {
            if (!0 !== RU(tU, gU, [gU])) return xU;
            const UU = new GU(eU);
            RU(uU, jU, [UU]), IU = UU
          } catch {
            return xU
          }
          return wU = RU, fU
        }()), tU = PU(UU, RU, gU)
      } catch (CU) {
        throw JU = xU, CU
      }
      return YU = aU, tU
    }
    let VU = PU;

    function rU() {
      return (VU === PU ? 0 : 3) + YU
    }

    function XU() {
      const UU = rU();
      return VU = PU, UU
    }

    function vU(UU) {
      VU = UU >= 3 ? BU : PU, YU = UU % 3
    }
    const dU = Function.prototype.toString,
      HU = Object.getOwnPropertyDescriptor,
      SU = Object.prototype.hasOwnProperty,
      sU = RegExp.prototype.exec,
      yU = TextEncoder.prototype.encodeInto,
      kU = String.prototype.startsWith,
      FU = Number.prototype.toString,
      iU = WeakMap.prototype.get,
      AU = WeakMap.prototype.set,
      zU = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      MU = new TextEncoder,
      DU = new Uint8Array(1024),
      LU = 9999999,
      NU = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      lU = new WeakMap;

    function OU(UU) {
      if ("function" !== typeof UU) return "#a0.0";
      const RU = VU(iU, lU, [UU]);
      if (void 0 !== RU) return RU;
      const gU = VU(dU, UU, []),
        tU = gU.length > LU ? LU : gU.length,
        pU = `#${function(UU,RU){const gU=VU(sU,zU,[RU]);if(null===gU)return"s";const tU=gU[1];if("ProxyObject"===tU)return"p";if(""!==tU)return VU(kU,tU,["bound "])?"b":"n";try{const RU=HU(UU,"name"),gU=void 0!==RU&&VU(SU,RU,["value"])?RU.value:void 0;return"string"===typeof gU&&VU(kU,gU,["bound "])?"b":"p"}catch{return"p"}}(UU,gU)}${tU}.${function(UU){const{written:RU}=VU(yU,MU,[UU,DU]);let gU=2166136261;for(let tU=0;tU<RU;tU++)gU=(gU^DU[tU])>>>0,gU=gU+(gU<<1)+(gU<<4)+(gU<<7)+(gU<<8)+(gU<<24)>>>0;return VU(FU,gU,[36])}(gU)}`;
      return VU(AU, lU, [UU, pU]), pU
    }

    function UR(UU) {
      const RU = VU(sU, NU, [UU]);
      return null === RU ? UU : RU[1]
    }
    var RR = gU(3385);
    const gR = Function.prototype.toString,
      tR = Object.getOwnPropertyDescriptor,
      pR = RegExp.prototype.exec,
      ER = Object.prototype.hasOwnProperty,
      PR = Set.prototype.has,
      TR = WeakMap.prototype.get,
      qR = WeakMap.prototype.set,
      KR = Reflect.get,
      cR = Object.getPrototypeOf,
      GR = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function jR(UU, RU, gU) {
      return {
        code: UU,
        holder: RU,
        key: gU,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${gU}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function uR() {
      return GR
    }
    const CR = GR?.Instance.prototype,
      hR = GR?.Memory.prototype;

    function QR() {
      return hR
    }
    let eR, WR;
    try {
      const UU = globalThis.crypto,
        RU = UU?.subtle;
      eR = UU ? cR(UU) : void 0, WR = RU ? cR(RU) : void 0
    } catch {}

    function fR(UU, RU) {
      for (let gU = UU; void 0 !== gU && null !== gU; gU = cR(gU)) {
        const UU = tR(gU, RU);
        if (UU) return UU
      }
    }
    const xR = [jR("in", uR, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), jR("is", uR, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), jR("co", uR, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), jR("cs", uR, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), jR("mo", uR, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), jR("it", uR, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), jR("me", uR, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), jR("ex", (function() {
      return CR
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), jR("bu", QR, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), jR("gr", QR, "grow", {
      tier: "punished"
    }), jR("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), jR("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), jR("su", (function() {
      return eR
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), jR("dg", (function() {
      return WR
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function mR(UU) {
      let RU;
      try {
        const gU = KR(globalThis, UU);
        RU = "function" === typeof gU ? gU.prototype : void 0
      } catch {}
      return () => RU
    }

    function IR(UU, RU, gU) {
      return gU.map((gU => jR(UU, RU, gU)))
    }
    const JR = jR("rx", mR("HTMLCanvasElement"), "getContext"),
      wR = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      nR = {
        webgpu: [...IR("gd", mR("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...IR("gq", mR("GPUQueue"), ["submit", "writeBuffer"]), ...IR("ge", mR("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...IR("gp", mR("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), JR],
        webgl: [...IR("g2", mR("WebGL2RenderingContext"), [...wR, "drawArraysInstanced", "drawElementsInstanced"]), JR],
        webgl1: [...IR("g1", mR("WebGLRenderingContext"), wR), JR]
      };
    let bR = [];
    const oR = new WeakMap;

    function ZR(UU, RU) {
      const gU = XU();
      try {
        VU(qR, oR, [UU, RU])
      } finally {
        vU(gU)
      }
    }

    function aR(UU) {
      try {
        const RU = Tg(UU),
          gU = VU(TR, oR, [RU]);
        return Ug(gU, UU) ? YR(UU, !0) : `${YR(UU,!1)}${OU(gU??RU)}`
      } catch {
        return `${YR(UU,!1)}${OU(void 0)}`
      }
    }

    function YR(UU, RU) {
      let {
        code: gU,
        key: tU
      } = UU;
      return `wh:${gU}${RU?"-dbg":""}:${tU}`
    }

    function BR(UU) {
      return Object.values(nR).flatMap((RU => RU.map((RU => YR(RU, UU)))))
    }
    const VR = new Set(BR(!0)),
      rR = new Set([...BR(!1), ...VR]),
      XR = YR(JR, !1);

    function vR(UU) {
      bR = nR[UU]
    }

    function dR(UU) {
      const RU = XU();
      try {
        return HR(UU) || HR(UR(UU))
      } finally {
        vU(RU)
      }
    }

    function HR(UU) {
      return VU(PR, rR, [UU])
    }

    function SR(UU) {
      return new Set(xR.filter((RU => RU.tier === UU)).map((UU => `wh:${UU.code}`)))
    }
    const sR = SR("punished"),
      yR = !1,
      kR = new Set(RR.c),
      FR = SR("weighted");

    function iR(UU) {
      const RU = XU();
      try {
        return zR(UR(UU))
      } finally {
        vU(RU)
      }
    }

    function AR(UU) {
      const RU = XU();
      try {
        return UR(UU)
      } finally {
        vU(RU)
      }
    }

    function zR(UU) {
      return VU(PR, FR, [UU])
    }

    function MR(UU) {
      const RU = XU();
      try {
        return DR(UU)
      } finally {
        vU(RU)
      }
    }

    function DR(UU) {
      return VU(PR, kR, [UU])
    }

    function LR(UU) {
      return "wb" === UU || VU(PR, sR, [UU])
    }

    function NR(UU) {
      const RU = XU();
      try {
        return LR(UU) || DR(UU)
      } finally {
        vU(RU)
      }
    }

    function lR(UU) {
      const RU = XU();
      try {
        return "wb" === UU || yR && LR(UU)
      } finally {
        vU(RU)
      }
    }

    function OR(UU, RU) {
      let {
        isGetter: gU
      } = RU;
      const tU = tR(UU, gU ? "get" : "value");
      return void 0 === tU ? void 0 : tU.value
    }

    function Ug(UU, RU) {
      let {
        isConstructor: gU,
        native: tU
      } = RU;
      return "function" === typeof UU && (!(!gU && VU(ER, UU, ["prototype"])) && null !== VU(pR, tU, [VU(gR, UU, [])]))
    }

    function Rg(UU, RU) {
      return Ug(UU, jR("", (() => {}), RU, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let gg = null,
      tg = !1;

    function pg() {
      try {
        return globalThis.WebAssembly === GR
      } catch {
        return !1
      }
    }

    function Eg(UU) {
      try {
        return function(UU) {
          const {
            holder: RU,
            key: gU,
            onNamespace: tU,
            inSecureContext: pU
          } = UU, EU = RU(), PU = fR(EU, gU);
          if (!PU) return !(pU && !0 === globalThis.isSecureContext);
          const TU = OR(PU, UU);
          if (!Ug(TU, UU)) return !1;
          if (tU) {
            const RU = globalThis.WebAssembly;
            if (RU !== EU && null !== RU && ("object" === typeof RU || "function" === typeof RU)) {
              const tU = KR(RU, gU);
              return tU === TU || void 0 === tU || Ug(tU, UU)
            }
          }
          return !0
        }(UU)
      } catch {
        return !1
      }
    }

    function Pg(UU) {
      const RU = `wh:${UU.code}`;
      if ("punished" === UU.tier) return RU;
      try {
        return `${RU}${OU(Tg(UU))}`
      } catch {
        return `${RU}${OU(void 0)}`
      }
    }

    function Tg(UU) {
      const RU = fR(UU.holder(), UU.key),
        gU = void 0 === RU ? void 0 : OR(RU, UU);
      return UU.onNamespace && !pg() && Ug(gU, UU) ? KR(globalThis.WebAssembly, UU.key) : gU
    }

    function qg(UU) {
      if (LR(UU)) return 5;
      const RU = UR(UU);
      return zR(RU) ? 4 : DR(UU) ? 3 : HR(RU) ? function(UU) {
        return VU(PR, VR, [UU])
      }(RU) ? -1 : RU === XR ? 0 : 1 : 2
    }

    function Kg() {
      const UU = function() {
        const UU = rU();
        return JU === WU || JU === fU ? (VU = BU, YU = ZU) : VU = PU, UU
      }();
      try {
        if (null === gg || !LR(gg)) {
          const UU = function() {
            if (void 0 === GR) return null;
            let UU = pg() ? null : "wh:wa";
            const RU = RU => {
              null !== RU && (null === UU || qg(RU) > qg(UU)) && (UU = RU)
            };
            for (let gU = 0; gU < xR.length; gU++) {
              const UU = xR[gU];
              void 0 === UU || Eg(UU) || RU(Pg(UU))
            }
            RU((0, RR.l)());
            for (let gU = 0; gU < bR.length; gU++) {
              const UU = bR[gU];
              void 0 === UU || Eg(UU) || RU(aR(UU))
            }
            return UU
          }();
          (null === gg || null !== UU && qg(UU) > qg(gg)) && (gg = UU)
        }
      } finally {
        vU(UU)
      }
    }

    function cg() {
      tg = !0
    }

    function Gg() {
      if (tg) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Kg(), null !== gg) return gg;
      if (void 0 === GR) return "wn:unsupported";
      const UU = (0, tU.q)();
      return null === UU ? null : `wn:${UU}`
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);