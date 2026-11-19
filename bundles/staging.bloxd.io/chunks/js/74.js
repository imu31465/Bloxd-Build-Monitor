export const id = 74;
export const ids = [74];
export const modules = {
  4269: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => br,
      d: () => uD,
      h: () => Ur,
      j: () => rD,
      m: () => xr,
      o: () => Lr,
      s: () => dr,
      w: () => pr,
      x: () => Kr,
      z: () => vD,
      D: () => aD,
      G: () => kr,
      K: () => hr
    });
    var FY = DY(3312);
    const AY = Function.prototype.toString,
      IY = RegExp.prototype.exec,
      RY = Reflect.apply,
      OY = Function.prototype.call,
      gY = Function.prototype.apply,
      aY = Function.prototype.bind,
      vY = Object.defineProperty,
      uY = Uint8Array;
    let sY, iY;
    try {
      sY = globalThis.crypto, iY = void 0 === sY || null === sY ? void 0 : sY.getRandomValues
    } catch {}
    const yY = "bloxdBindApply";
    let QY;
    try {
      const YY = OY;
      vY(YY, yY, {
        __proto__: null,
        value: aY,
        configurable: !0
      });
      try {
        QY = YY[yY](gY)
      } finally {
        delete YY[yY]
      }
    } catch {}
    const oY = 16,
      WY = 256,
      EY = 0,
      mY = 1,
      VY = 2,
      SY = 3;
    let lY, TY = EY,
      eY = RY,
      NY = 0;

    function BY(YY, rY) {
      return YY === `function ${rY}() { [native code] }` || YY === `function ${rY}() {\n    [native code]\n}`
    }
    const cY = 0,
      KY = 1,
      HY = 2;
    let zY = cY;

    function ZY(YY, rY, DY) {
      if (zY === HY && TY === mY && ! function() {
          const YY = lY;
          return NY >= WY && (eY(iY, sY, [YY]), NY = 0), YY[NY++] < 256 / oY
        }()) return function(YY, rY, DY) {
        return eY(YY, rY, DY ?? 0)
      }(...arguments);
      if (zY === cY || TY === VY) return RY(YY, rY, DY);
      let FY;
      zY = cY;
      try {
        TY === EY && (TY = SY, TY = function() {
          const YY = RY(AY, RY, []);
          if (BY(YY, "apply")) return VY;
          if (null === RY(IY, /\(\.\.\.arguments\)/, [YY]) && null === RY(IY, /^function\s*\(\.\.\.[\w$]+\)/, [YY])) return VY;
          if ("function" !== typeof QY || "function" !== typeof OY || "function" !== typeof gY || "function" !== typeof aY || "function" !== typeof vY || "function" !== typeof iY || "function" !== typeof uY || !BY(RY(AY, OY, []), "call") || !BY(RY(AY, gY, []), "apply") || !BY(RY(AY, aY, []), "bind") || !BY(RY(AY, vY, []), "defineProperty") || !BY(RY(AY, iY, []), "getRandomValues") || !BY(RY(AY, uY, []), "Uint8Array")) return VY;
          const rY = QY,
            DY = {},
            FY = function(YY) {
              return this === DY && YY === DY
            };
          try {
            if (!0 !== rY(FY, DY, [DY])) return VY;
            const YY = new uY(WY);
            rY(iY, sY, [YY]), lY = YY
          } catch {
            return VY
          }
          return eY = rY, mY
        }()), FY = RY(YY, rY, DY)
      } catch (yY) {
        throw TY = VY, yY
      }
      return zY = HY, FY
    }
    let CY = RY;

    function fY() {
      return (CY === RY ? 0 : 3) + zY
    }

    function jY() {
      const YY = fY();
      return CY = RY, YY
    }

    function hY(YY) {
      CY = YY >= 3 ? ZY : RY, zY = YY % 3
    }
    const dY = Function.prototype.toString,
      JY = Object.getOwnPropertyDescriptor,
      MY = Object.prototype.hasOwnProperty,
      wY = RegExp.prototype.exec,
      bY = TextEncoder.prototype.encodeInto,
      XY = String.prototype.startsWith,
      qY = Number.prototype.toString,
      pY = WeakMap.prototype.get,
      kY = WeakMap.prototype.set,
      GY = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      xY = new TextEncoder,
      nY = new Uint8Array(1024),
      PY = 9999999,
      UY = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      LY = new WeakMap;

    function tY(YY) {
      if ("function" !== typeof YY) return "#a0.0";
      const rY = CY(pY, LY, [YY]);
      if (void 0 !== rY) return rY;
      const DY = CY(dY, YY, []),
        FY = DY.length > PY ? PY : DY.length,
        AY = `#${function(YY,rY){const DY=CY(wY,GY,[rY]);if(null===DY)return"s";const FY=DY[1];if("ProxyObject"===FY)return"p";if(""!==FY)return CY(XY,FY,["bound "])?"b":"n";try{const rY=JY(YY,"name"),DY=void 0!==rY&&CY(MY,rY,["value"])?rY.value:void 0;return"string"===typeof DY&&CY(XY,DY,["bound "])?"b":"p"}catch{return"p"}}(YY,DY)}${FY}.${function(YY){const{written:rY}=CY(bY,xY,[YY,nY]);let DY=2166136261;for(let FY=0;FY<rY;FY++)DY=(DY^nY[FY])>>>0,DY=DY+(DY<<1)+(DY<<4)+(DY<<7)+(DY<<8)+(DY<<24)>>>0;return CY(qY,DY,[36])}(DY)}`;
      return CY(kY, LY, [YY, AY]), AY
    }

    function Yr(YY) {
      const rY = CY(wY, UY, [YY]);
      return null === rY ? YY : rY[1]
    }
    var rr = DY(3324);
    const Dr = Function.prototype.toString,
      Fr = Object.getOwnPropertyDescriptor,
      Ar = RegExp.prototype.exec,
      Ir = Object.prototype.hasOwnProperty,
      Rr = Set.prototype.has,
      Or = WeakMap.prototype.get,
      gr = WeakMap.prototype.set,
      ar = Reflect.get,
      vr = Object.getPrototypeOf,
      ur = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function sr(YY, rY, DY) {
      return {
        code: YY,
        holder: rY,
        key: DY,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${DY}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function ir() {
      return ur
    }
    const yr = ur?.Instance.prototype,
      Qr = ur?.Memory.prototype;

    function or() {
      return Qr
    }
    let Wr, Er;
    try {
      const YY = globalThis.crypto,
        rY = YY?.subtle;
      Wr = YY ? vr(YY) : void 0, Er = rY ? vr(rY) : void 0
    } catch {}

    function mr(YY, rY) {
      for (let DY = YY; void 0 !== DY && null !== DY; DY = vr(DY)) {
        const YY = Fr(DY, rY);
        if (YY) return YY
      }
    }
    const Vr = [sr("in", ir, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), sr("is", ir, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), sr("co", ir, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), sr("cs", ir, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), sr("mo", ir, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), sr("it", ir, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), sr("me", ir, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), sr("ex", (function() {
      return yr
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), sr("bu", or, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), sr("gr", or, "grow", {
      tier: "punished"
    }), sr("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), sr("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), sr("su", (function() {
      return Wr
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), sr("dg", (function() {
      return Er
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function Sr(YY) {
      let rY;
      try {
        const DY = ar(globalThis, YY);
        rY = "function" === typeof DY ? DY.prototype : void 0
      } catch {}
      return () => rY
    }

    function lr(YY, rY, DY) {
      return DY.map((DY => sr(YY, rY, DY)))
    }
    const Tr = sr("rx", Sr("HTMLCanvasElement"), "getContext"),
      er = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      Nr = {
        webgpu: [...lr("gd", Sr("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...lr("gq", Sr("GPUQueue"), ["submit", "writeBuffer"]), ...lr("ge", Sr("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...lr("gp", Sr("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), Tr],
        webgl: [...lr("g2", Sr("WebGL2RenderingContext"), [...er, "drawArraysInstanced", "drawElementsInstanced"]), Tr],
        webgl1: [...lr("g1", Sr("WebGLRenderingContext"), er), Tr]
      };
    let Br = [];
    const cr = new WeakMap;

    function Kr(YY, rY) {
      const DY = jY();
      try {
        CY(gr, cr, [YY, rY])
      } finally {
        hY(DY)
      }
    }

    function Hr(YY) {
      try {
        const rY = OD(YY),
          DY = CY(Or, cr, [rY]);
        return YD(DY, YY) ? zr(YY, !0) : `${zr(YY,!1)}${tY(DY??rY)}`
      } catch {
        return `${zr(YY,!1)}${tY(void 0)}`
      }
    }

    function zr(YY, rY) {
      let {
        code: DY,
        key: FY
      } = YY;
      return `wh:${DY}${rY?"-dbg":""}:${FY}`
    }

    function Zr(YY) {
      return Object.values(Nr).flatMap((rY => rY.map((rY => zr(rY, YY)))))
    }
    const Cr = new Set(Zr(!0)),
      fr = new Set([...Zr(!1), ...Cr]),
      jr = zr(Tr, !1);

    function hr(YY) {
      Br = Nr[YY]
    }

    function dr(YY) {
      const rY = jY();
      try {
        return Jr(YY) || Jr(Yr(YY))
      } finally {
        hY(rY)
      }
    }

    function Jr(YY) {
      return CY(Rr, fr, [YY])
    }

    function Mr(YY) {
      return new Set(Vr.filter((rY => rY.tier === YY)).map((YY => `wh:${YY.code}`)))
    }
    const wr = Mr("punished"),
      br = !1,
      Xr = new Set(rr.b),
      qr = Mr("weighted");

    function pr(YY) {
      const rY = jY();
      try {
        return Gr(Yr(YY))
      } finally {
        hY(rY)
      }
    }

    function kr(YY) {
      const rY = jY();
      try {
        return Yr(YY)
      } finally {
        hY(rY)
      }
    }

    function Gr(YY) {
      return CY(Rr, qr, [YY])
    }

    function xr(YY) {
      const rY = jY();
      try {
        return nr(YY)
      } finally {
        hY(rY)
      }
    }

    function nr(YY) {
      return CY(Rr, Xr, [YY])
    }

    function Pr(YY) {
      return "wb" === YY || CY(Rr, wr, [YY])
    }

    function Ur(YY) {
      const rY = jY();
      try {
        return Pr(YY) || nr(YY)
      } finally {
        hY(rY)
      }
    }

    function Lr(YY) {
      const rY = jY();
      try {
        return "wb" === YY || br && Pr(YY)
      } finally {
        hY(rY)
      }
    }

    function tr(YY, rY) {
      let {
        isGetter: DY
      } = rY;
      const FY = Fr(YY, DY ? "get" : "value");
      return void 0 === FY ? void 0 : FY.value
    }

    function YD(YY, rY) {
      let {
        isConstructor: DY,
        native: FY
      } = rY;
      return "function" === typeof YY && (!(!DY && CY(Ir, YY, ["prototype"])) && null !== CY(Ar, FY, [CY(Dr, YY, [])]))
    }

    function rD(YY, rY) {
      return YD(YY, sr("", (() => {}), rY, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let DD = null,
      FD = !1;

    function AD() {
      try {
        return globalThis.WebAssembly === ur
      } catch {
        return !1
      }
    }

    function ID(YY) {
      try {
        return function(YY) {
          const {
            holder: rY,
            key: DY,
            onNamespace: FY,
            inSecureContext: AY
          } = YY, IY = rY(), RY = mr(IY, DY);
          if (!RY) return !(AY && !0 === globalThis.isSecureContext);
          const OY = tr(RY, YY);
          if (!YD(OY, YY)) return !1;
          if (FY) {
            const rY = globalThis.WebAssembly;
            if (rY !== IY && null !== rY && ("object" === typeof rY || "function" === typeof rY)) {
              const FY = ar(rY, DY);
              return FY === OY || void 0 === FY || YD(FY, YY)
            }
          }
          return !0
        }(YY)
      } catch {
        return !1
      }
    }

    function RD(YY) {
      const rY = `wh:${YY.code}`;
      if ("punished" === YY.tier) return rY;
      try {
        return `${rY}${tY(OD(YY))}`
      } catch {
        return `${rY}${tY(void 0)}`
      }
    }

    function OD(YY) {
      const rY = mr(YY.holder(), YY.key),
        DY = void 0 === rY ? void 0 : tr(rY, YY);
      return YY.onNamespace && !AD() && YD(DY, YY) ? ar(globalThis.WebAssembly, YY.key) : DY
    }

    function gD(YY) {
      if (Pr(YY)) return 5;
      const rY = Yr(YY);
      return Gr(rY) ? 4 : nr(YY) ? 3 : Jr(rY) ? function(YY) {
        return CY(Rr, Cr, [YY])
      }(rY) ? -1 : rY === jr ? 0 : 1 : 2
    }

    function aD() {
      const YY = function() {
        const YY = fY();
        return TY === EY || TY === mY ? (CY = ZY, zY = KY) : CY = RY, YY
      }();
      try {
        if (null === DD || !Pr(DD)) {
          const YY = function() {
            if (void 0 === ur) return null;
            let YY = AD() ? null : "wh:wa";
            const rY = rY => {
              null !== rY && (null === YY || gD(rY) > gD(YY)) && (YY = rY)
            };
            for (let DY = 0; DY < Vr.length; DY++) {
              const YY = Vr[DY];
              void 0 === YY || ID(YY) || rY(RD(YY))
            }
            rY((0, rr.m)());
            for (let DY = 0; DY < Br.length; DY++) {
              const YY = Br[DY];
              void 0 === YY || ID(YY) || rY(Hr(YY))
            }
            return YY
          }();
          (null === DD || null !== YY && gD(YY) > gD(DD)) && (DD = YY)
        }
      } finally {
        hY(YY)
      }
    }

    function vD() {
      FD = !0
    }

    function uD() {
      if (FD) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && aD(), null !== DD) return DD;
      if (void 0 === ur) return "wn:unsupported";
      const YY = (0, FY.r)();
      return null === YY ? null : `wn:${YY}`
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);