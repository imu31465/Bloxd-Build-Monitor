export const id = 89;
export const ids = [89];
export const modules = {
  5179: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => VX,
      f: () => Yz,
      g: () => bX,
      i: () => Xz,
      l: () => JX,
      p: () => TX,
      r: () => iX,
      s: () => mX,
      t: () => CX,
      v: () => Ez,
      z: () => Dz,
      B: () => lX,
      F: () => fX
    });
    var cU = zU(3169);
    const yU = Function.prototype.toString,
      QU = RegExp.prototype.exec,
      AU = Reflect.apply,
      FU = Function.prototype.call,
      oU = Function.prototype.apply,
      DU = Function.prototype.bind,
      EU = Object.defineProperty,
      YU = Uint8Array;
    let NU, IU;
    try {
      NU = globalThis.crypto, IU = void 0 === NU || null === NU ? void 0 : NU.getRandomValues
    } catch {}
    const pU = "bloxdBindApply";
    let aU;
    try {
      const UU = FU;
      EU(UU, pU, {
        __proto__: null,
        value: DU,
        configurable: !0
      });
      try {
        aU = UU[pU](oU)
      } finally {
        delete UU[pU]
      }
    } catch {}
    const tU = 16,
      gU = 256,
      kU = 0,
      GU = 1,
      BU = 2,
      ZU = 3;
    let RU, PU = kU,
      WU = AU,
      dU = 0;

    function LU(UU, XU) {
      return UU === `function ${XU}() { [native code] }` || UU === `function ${XU}() {\n    [native code]\n}`
    }
    const eU = 0,
      CU = 1,
      wU = 2;
    let qU = eU;

    function OU(UU, XU, zU) {
      if (qU === wU && PU === GU && ! function() {
          const UU = RU;
          return dU >= gU && (WU(IU, NU, [UU]), dU = 0), UU[dU++] < 256 / tU
        }()) return function(UU, XU, zU) {
        return WU(UU, XU, zU ?? 0)
      }(...arguments);
      if (qU === eU || PU === BU) return AU(UU, XU, zU);
      let cU;
      qU = eU;
      try {
        PU === kU && (PU = ZU, PU = function() {
          const UU = AU(yU, AU, []);
          if (LU(UU, "apply")) return BU;
          if (null === AU(QU, /\(\.\.\.arguments\)/, [UU]) && null === AU(QU, /^function\s*\(\.\.\.[\w$]+\)/, [UU])) return BU;
          if ("function" !== typeof aU || "function" !== typeof FU || "function" !== typeof oU || "function" !== typeof DU || "function" !== typeof EU || "function" !== typeof IU || "function" !== typeof YU || !LU(AU(yU, FU, []), "call") || !LU(AU(yU, oU, []), "apply") || !LU(AU(yU, DU, []), "bind") || !LU(AU(yU, EU, []), "defineProperty") || !LU(AU(yU, IU, []), "getRandomValues") || !LU(AU(yU, YU, []), "Uint8Array")) return BU;
          const XU = aU,
            zU = {},
            cU = function(UU) {
              return this === zU && UU === zU
            };
          try {
            if (!0 !== XU(cU, zU, [zU])) return BU;
            const UU = new YU(gU);
            XU(IU, NU, [UU]), RU = UU
          } catch {
            return BU
          }
          return WU = XU, GU
        }()), cU = AU(UU, XU, zU)
      } catch (pU) {
        throw PU = BU, pU
      }
      return qU = wU, cU
    }
    let SU = AU;

    function rU() {
      return (SU === AU ? 0 : 3) + qU
    }

    function uU() {
      const UU = rU();
      return SU = AU, UU
    }

    function fU(UU) {
      SU = UU >= 3 ? OU : AU, qU = UU % 3
    }
    const iU = Function.prototype.toString,
      HU = Object.getOwnPropertyDescriptor,
      MU = Object.prototype.hasOwnProperty,
      vU = RegExp.prototype.exec,
      VU = TextEncoder.prototype.encodeInto,
      sU = String.prototype.startsWith,
      nU = Number.prototype.toString,
      mU = WeakMap.prototype.get,
      lU = WeakMap.prototype.set,
      xU = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      JU = new TextEncoder,
      jU = new Uint8Array(1024),
      KU = 9999999,
      bU = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      TU = new WeakMap;

    function hU(UU) {
      if ("function" !== typeof UU) return "#a0.0";
      const XU = SU(mU, TU, [UU]);
      if (void 0 !== XU) return XU;
      const zU = SU(iU, UU, []),
        cU = zU.length > KU ? KU : zU.length,
        yU = `#${function(UU,XU){const zU=SU(vU,xU,[XU]);if(null===zU)return"s";const cU=zU[1];if("ProxyObject"===cU)return"p";if(""!==cU)return SU(sU,cU,["bound "])?"b":"n";try{const XU=HU(UU,"name"),zU=void 0!==XU&&SU(MU,XU,["value"])?XU.value:void 0;return"string"===typeof zU&&SU(sU,zU,["bound "])?"b":"p"}catch{return"p"}}(UU,zU)}${cU}.${function(UU){const{written:XU}=SU(VU,JU,[UU,jU]);let zU=2166136261;for(let cU=0;cU<XU;cU++)zU=(zU^jU[cU])>>>0,zU=zU+(zU<<1)+(zU<<4)+(zU<<7)+(zU<<8)+(zU<<24)>>>0;return SU(nU,zU,[36])}(zU)}`;
      return SU(lU, TU, [UU, yU]), yU
    }

    function UX(UU) {
      const XU = SU(vU, bU, [UU]);
      return null === XU ? UU : XU[1]
    }
    var XX = zU(3189);
    const zX = Function.prototype.toString,
      cX = Object.getOwnPropertyDescriptor,
      yX = RegExp.prototype.exec,
      QX = Object.prototype.hasOwnProperty,
      AX = Set.prototype.has,
      FX = WeakMap.prototype.get,
      oX = WeakMap.prototype.set,
      DX = Reflect.get,
      EX = Object.getPrototypeOf,
      YX = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function NX(UU, XU, zU) {
      return {
        code: UU,
        holder: XU,
        key: zU,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${zU}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function IX() {
      return YX
    }
    const pX = YX?.Instance.prototype,
      aX = YX?.Memory.prototype;

    function tX() {
      return aX
    }
    let gX, kX;
    try {
      const UU = globalThis.crypto,
        XU = UU?.subtle;
      gX = UU ? EX(UU) : void 0, kX = XU ? EX(XU) : void 0
    } catch {}

    function GX(UU, XU) {
      for (let zU = UU; void 0 !== zU && null !== zU; zU = EX(zU)) {
        const UU = cX(zU, XU);
        if (UU) return UU
      }
    }
    const BX = [NX("in", IX, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), NX("is", IX, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), NX("co", IX, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), NX("cs", IX, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), NX("mo", IX, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), NX("it", IX, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), NX("me", IX, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), NX("ex", (function() {
      return pX
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), NX("bu", tX, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), NX("gr", tX, "grow", {
      tier: "punished"
    }), NX("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), NX("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), NX("su", (function() {
      return gX
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), NX("dg", (function() {
      return kX
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function ZX(UU) {
      let XU;
      try {
        const zU = DX(globalThis, UU);
        XU = "function" === typeof zU ? zU.prototype : void 0
      } catch {}
      return () => XU
    }

    function RX(UU, XU, zU) {
      return zU.map((zU => NX(UU, XU, zU)))
    }
    const PX = NX("rx", ZX("HTMLCanvasElement"), "getContext"),
      WX = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      dX = {
        webgpu: [...RX("gd", ZX("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...RX("gq", ZX("GPUQueue"), ["submit", "writeBuffer"]), ...RX("ge", ZX("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...RX("gp", ZX("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), PX],
        webgl: [...RX("g2", ZX("WebGL2RenderingContext"), [...WX, "drawArraysInstanced", "drawElementsInstanced"]), PX],
        webgl1: [...RX("g1", ZX("WebGLRenderingContext"), WX), PX]
      };
    let LX = [];
    const eX = new WeakMap;

    function CX(UU, XU) {
      const zU = uU();
      try {
        SU(oX, eX, [UU, XU])
      } finally {
        fU(zU)
      }
    }

    function wX(UU) {
      try {
        const XU = Fz(UU),
          zU = SU(FX, eX, [XU]);
        return Uz(zU, UU) ? qX(UU, !0) : `${qX(UU,!1)}${hU(zU??XU)}`
      } catch {
        return `${qX(UU,!1)}${hU(void 0)}`
      }
    }

    function qX(UU, XU) {
      let {
        code: zU,
        key: cU
      } = UU;
      return `wh:${zU}${XU?"-dbg":""}:${cU}`
    }

    function OX(UU) {
      return Object.values(dX).flatMap((XU => XU.map((XU => qX(XU, UU)))))
    }
    const SX = new Set(OX(!0)),
      rX = new Set([...OX(!1), ...SX]),
      uX = qX(PX, !1);

    function fX(UU) {
      LX = dX[UU]
    }

    function iX(UU) {
      const XU = uU();
      try {
        return HX(UU) || HX(UX(UU))
      } finally {
        fU(XU)
      }
    }

    function HX(UU) {
      return SU(AX, rX, [UU])
    }

    function MX(UU) {
      return new Set(BX.filter((XU => XU.tier === UU)).map((UU => `wh:${UU.code}`)))
    }
    const vX = MX("punished"),
      VX = !1,
      sX = new Set(XX.e),
      nX = MX("weighted");

    function mX(UU) {
      const XU = uU();
      try {
        return xX(UX(UU))
      } finally {
        fU(XU)
      }
    }

    function lX(UU) {
      const XU = uU();
      try {
        return UX(UU)
      } finally {
        fU(XU)
      }
    }

    function xX(UU) {
      return SU(AX, nX, [UU])
    }

    function JX(UU) {
      const XU = uU();
      try {
        return jX(UU)
      } finally {
        fU(XU)
      }
    }

    function jX(UU) {
      return SU(AX, sX, [UU])
    }

    function KX(UU) {
      return "wb" === UU || SU(AX, vX, [UU])
    }

    function bX(UU) {
      const XU = uU();
      try {
        return KX(UU) || jX(UU)
      } finally {
        fU(XU)
      }
    }

    function TX(UU) {
      const XU = uU();
      try {
        return "wb" === UU || VX && KX(UU)
      } finally {
        fU(XU)
      }
    }

    function hX(UU, XU) {
      let {
        isGetter: zU
      } = XU;
      const cU = cX(UU, zU ? "get" : "value");
      return void 0 === cU ? void 0 : cU.value
    }

    function Uz(UU, XU) {
      let {
        isConstructor: zU,
        native: cU
      } = XU;
      return "function" === typeof UU && (!(!zU && SU(QX, UU, ["prototype"])) && null !== SU(yX, cU, [SU(zX, UU, [])]))
    }

    function Xz(UU, XU) {
      return Uz(UU, NX("", (() => {}), XU, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let zz = null,
      cz = !1;

    function yz() {
      try {
        return globalThis.WebAssembly === YX
      } catch {
        return !1
      }
    }

    function Qz(UU) {
      try {
        return function(UU) {
          const {
            holder: XU,
            key: zU,
            onNamespace: cU,
            inSecureContext: yU
          } = UU, QU = XU(), AU = GX(QU, zU);
          if (!AU) return !(yU && !0 === globalThis.isSecureContext);
          const FU = hX(AU, UU);
          if (!Uz(FU, UU)) return !1;
          if (cU) {
            const XU = globalThis.WebAssembly;
            if (XU !== QU && null !== XU && ("object" === typeof XU || "function" === typeof XU)) {
              const cU = DX(XU, zU);
              return cU === FU || void 0 === cU || Uz(cU, UU)
            }
          }
          return !0
        }(UU)
      } catch {
        return !1
      }
    }

    function Az(UU) {
      const XU = `wh:${UU.code}`;
      if ("punished" === UU.tier) return XU;
      try {
        return `${XU}${hU(Fz(UU))}`
      } catch {
        return `${XU}${hU(void 0)}`
      }
    }

    function Fz(UU) {
      const XU = GX(UU.holder(), UU.key),
        zU = void 0 === XU ? void 0 : hX(XU, UU);
      return UU.onNamespace && !yz() && Uz(zU, UU) ? DX(globalThis.WebAssembly, UU.key) : zU
    }

    function oz(UU) {
      if (KX(UU)) return 5;
      const XU = UX(UU);
      return xX(XU) ? 4 : jX(UU) ? 3 : HX(XU) ? function(UU) {
        return SU(AX, SX, [UU])
      }(XU) ? -1 : XU === uX ? 0 : 1 : 2
    }

    function Dz() {
      const UU = function() {
        const UU = rU();
        return PU === kU || PU === GU ? (SU = OU, qU = CU) : SU = AU, UU
      }();
      try {
        if (null === zz || !KX(zz)) {
          const UU = function() {
            if (void 0 === YX) return null;
            let UU = yz() ? null : "wh:wa";
            const XU = XU => {
              null !== XU && (null === UU || oz(XU) > oz(UU)) && (UU = XU)
            };
            for (let zU = 0; zU < BX.length; zU++) {
              const UU = BX[zU];
              void 0 === UU || Qz(UU) || XU(Az(UU))
            }
            XU((0, XX.q)());
            for (let zU = 0; zU < LX.length; zU++) {
              const UU = LX[zU];
              void 0 === UU || Qz(UU) || XU(wX(UU))
            }
            return UU
          }();
          (null === zz || null !== UU && oz(UU) > oz(zz)) && (zz = UU)
        }
      } finally {
        fU(UU)
      }
    }

    function Ez() {
      cz = !0
    }

    function Yz() {
      if (cz) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Dz(), null !== zz) return zz;
      if (void 0 === YX) return "wn:unsupported";
      const UU = (0, cU.r)();
      return null === UU ? null : `wn:${UU}`
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);