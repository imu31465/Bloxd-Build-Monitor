export const id = 78;
export const ids = [78];
export const modules = {
  4780: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => CU,
      f: () => lm,
      g: () => oU,
      j: () => Um,
      k: () => EU,
      n: () => AU,
      r: () => FU,
      s: () => SU,
      w: () => wU,
      z: () => jm,
      C: () => km,
      G: () => GU,
      I: () => sU
    });
    var WT = mT(2992);
    const zT = Function.prototype.toString,
      MT = RegExp.prototype.exec,
      gT = Reflect.apply,
      nT = Function.prototype.call,
      HT = Function.prototype.apply,
      kT = Function.prototype.bind,
      jT = Object.defineProperty,
      lT = Uint8Array;
    let LT, pT;
    try {
      LT = globalThis.crypto, pT = void 0 === LT || null === LT ? void 0 : LT.getRandomValues
    } catch {}
    const BT = "bloxdBindApply";
    let ZT;
    try {
      const TT = nT;
      jT(TT, BT, {
        __proto__: null,
        value: kT,
        configurable: !0
      });
      try {
        ZT = TT[BT](HT)
      } finally {
        delete TT[BT]
      }
    } catch {}
    const cT = 16,
      vT = 256,
      fT = 0,
      qT = 1,
      iT = 2,
      bT = 3;
    let OT, eT = fT,
      YT = gT,
      JT = 0;

    function xT(TT, UT) {
      return TT === `function ${UT}() { [native code] }` || TT === `function ${UT}() {\n    [native code]\n}`
    }
    const dT = 0,
      wT = 1,
      tT = 2;
    let aT = dT;

    function yT(TT, UT, mT) {
      if (aT === tT && eT === qT && ! function() {
          const TT = OT;
          return JT >= vT && (YT(pT, LT, [TT]), JT = 0), TT[JT++] < 256 / cT
        }()) return function(TT, UT, mT) {
        return YT(TT, UT, mT ?? 0)
      }(...arguments);
      if (aT === dT || eT === iT) return gT(TT, UT, mT);
      let WT;
      aT = dT;
      try {
        eT === fT && (eT = bT, eT = function() {
          const TT = gT(zT, gT, []);
          if (xT(TT, "apply")) return iT;
          if (null === gT(MT, /\(\.\.\.arguments\)/, [TT]) && null === gT(MT, /^function\s*\(\.\.\.[\w$]+\)/, [TT])) return iT;
          if ("function" !== typeof ZT || "function" !== typeof nT || "function" !== typeof HT || "function" !== typeof kT || "function" !== typeof jT || "function" !== typeof pT || "function" !== typeof lT || !xT(gT(zT, nT, []), "call") || !xT(gT(zT, HT, []), "apply") || !xT(gT(zT, kT, []), "bind") || !xT(gT(zT, jT, []), "defineProperty") || !xT(gT(zT, pT, []), "getRandomValues") || !xT(gT(zT, lT, []), "Uint8Array")) return iT;
          const UT = ZT,
            mT = {},
            WT = function(TT) {
              return this === mT && TT === mT
            };
          try {
            if (!0 !== UT(WT, mT, [mT])) return iT;
            const TT = new lT(vT);
            UT(pT, LT, [TT]), OT = TT
          } catch {
            return iT
          }
          return YT = UT, qT
        }()), WT = gT(TT, UT, mT)
      } catch (BT) {
        throw eT = iT, BT
      }
      return aT = tT, WT
    }
    let XT = gT;

    function IT() {
      return (XT === gT ? 0 : 3) + aT
    }

    function QT() {
      const TT = IT();
      return XT = gT, TT
    }

    function sT(TT) {
      XT = TT >= 3 ? yT : gT, aT = TT % 3
    }
    const FT = Function.prototype.toString,
      PT = Object.getOwnPropertyDescriptor,
      VT = Object.prototype.hasOwnProperty,
      uT = RegExp.prototype.exec,
      CT = TextEncoder.prototype.encodeInto,
      rT = String.prototype.startsWith,
      KT = Number.prototype.toString,
      ST = WeakMap.prototype.get,
      GT = WeakMap.prototype.set,
      NT = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      ET = new TextEncoder,
      hT = new Uint8Array(1024),
      DT = 9999999,
      oT = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      AT = new WeakMap;

    function RT(TT) {
      if ("function" !== typeof TT) return "#a0.0";
      const UT = XT(ST, AT, [TT]);
      if (void 0 !== UT) return UT;
      const mT = XT(FT, TT, []),
        WT = mT.length > DT ? DT : mT.length,
        zT = `#${function(TT,UT){const mT=XT(uT,NT,[UT]);if(null===mT)return"s";const WT=mT[1];if("ProxyObject"===WT)return"p";if(""!==WT)return XT(rT,WT,["bound "])?"b":"n";try{const UT=PT(TT,"name"),mT=void 0!==UT&&XT(VT,UT,["value"])?UT.value:void 0;return"string"===typeof mT&&XT(rT,mT,["bound "])?"b":"p"}catch{return"p"}}(TT,mT)}${WT}.${function(TT){const{written:UT}=XT(CT,ET,[TT,hT]);let mT=2166136261;for(let WT=0;WT<UT;WT++)mT=(mT^hT[WT])>>>0,mT=mT+(mT<<1)+(mT<<4)+(mT<<7)+(mT<<8)+(mT<<24)>>>0;return XT(KT,mT,[36])}(mT)}`;
      return XT(GT, AT, [TT, zT]), zT
    }

    function TU(TT) {
      const UT = XT(uT, oT, [TT]);
      return null === UT ? TT : UT[1]
    }
    var UU = mT(3015);
    const mU = Function.prototype.toString,
      WU = Object.getOwnPropertyDescriptor,
      zU = RegExp.prototype.exec,
      MU = Object.prototype.hasOwnProperty,
      gU = Set.prototype.has,
      nU = WeakMap.prototype.get,
      HU = WeakMap.prototype.set,
      kU = Reflect.get,
      jU = Object.getPrototypeOf,
      lU = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function LU(TT, UT, mT) {
      return {
        code: TT,
        holder: UT,
        key: mT,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${mT}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function pU() {
      return lU
    }
    const BU = lU?.Instance.prototype,
      ZU = lU?.Memory.prototype;

    function cU() {
      return ZU
    }
    let vU, fU;
    try {
      const TT = globalThis.crypto,
        UT = TT?.subtle;
      vU = TT ? jU(TT) : void 0, fU = UT ? jU(UT) : void 0
    } catch {}

    function qU(TT, UT) {
      for (let mT = TT; void 0 !== mT && null !== mT; mT = jU(mT)) {
        const TT = WU(mT, UT);
        if (TT) return TT
      }
    }
    const iU = [LU("in", pU, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), LU("is", pU, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), LU("co", pU, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), LU("cs", pU, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), LU("mo", pU, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), LU("it", pU, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), LU("me", pU, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), LU("ex", (function() {
      return BU
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), LU("bu", cU, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), LU("gr", cU, "grow", {
      tier: "punished"
    }), LU("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), LU("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), LU("su", (function() {
      return vU
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), LU("dg", (function() {
      return fU
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function bU(TT) {
      let UT;
      try {
        const mT = kU(globalThis, TT);
        UT = "function" === typeof mT ? mT.prototype : void 0
      } catch {}
      return () => UT
    }

    function OU(TT, UT, mT) {
      return mT.map((mT => LU(TT, UT, mT)))
    }
    const eU = LU("rx", bU("HTMLCanvasElement"), "getContext"),
      YU = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      JU = {
        webgpu: [...OU("gd", bU("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...OU("gq", bU("GPUQueue"), ["submit", "writeBuffer"]), ...OU("ge", bU("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...OU("gp", bU("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), eU],
        webgl: [...OU("g2", bU("WebGL2RenderingContext"), [...YU, "drawArraysInstanced", "drawElementsInstanced"]), eU],
        webgl1: [...OU("g1", bU("WebGLRenderingContext"), YU), eU]
      };
    let xU = [];
    const dU = new WeakMap;

    function wU(TT, UT) {
      const mT = QT();
      try {
        XT(HU, dU, [TT, UT])
      } finally {
        sT(mT)
      }
    }

    function tU(TT) {
      try {
        const UT = nm(TT),
          mT = XT(nU, dU, [UT]);
        return Tm(mT, TT) ? aU(TT, !0) : `${aU(TT,!1)}${RT(mT??UT)}`
      } catch {
        return `${aU(TT,!1)}${RT(void 0)}`
      }
    }

    function aU(TT, UT) {
      let {
        code: mT,
        key: WT
      } = TT;
      return `wh:${mT}${UT?"-dbg":""}:${WT}`
    }

    function yU(TT) {
      return Object.values(JU).flatMap((UT => UT.map((UT => aU(UT, TT)))))
    }
    const XU = new Set(yU(!0)),
      IU = new Set([...yU(!1), ...XU]),
      QU = aU(eU, !1);

    function sU(TT) {
      xU = JU[TT]
    }

    function FU(TT) {
      const UT = QT();
      try {
        return PU(TT) || PU(TU(TT))
      } finally {
        sT(UT)
      }
    }

    function PU(TT) {
      return XT(gU, IU, [TT])
    }

    function VU(TT) {
      return new Set(iU.filter((UT => UT.tier === TT)).map((TT => `wh:${TT.code}`)))
    }
    const uU = VU("punished"),
      CU = !1,
      rU = new Set(UU.e),
      KU = VU("weighted");

    function SU(TT) {
      const UT = QT();
      try {
        return NU(TU(TT))
      } finally {
        sT(UT)
      }
    }

    function GU(TT) {
      const UT = QT();
      try {
        return TU(TT)
      } finally {
        sT(UT)
      }
    }

    function NU(TT) {
      return XT(gU, KU, [TT])
    }

    function EU(TT) {
      const UT = QT();
      try {
        return hU(TT)
      } finally {
        sT(UT)
      }
    }

    function hU(TT) {
      return XT(gU, rU, [TT])
    }

    function DU(TT) {
      return "wb" === TT || XT(gU, uU, [TT])
    }

    function oU(TT) {
      const UT = QT();
      try {
        return DU(TT) || hU(TT)
      } finally {
        sT(UT)
      }
    }

    function AU(TT) {
      const UT = QT();
      try {
        return "wb" === TT || CU && DU(TT)
      } finally {
        sT(UT)
      }
    }

    function RU(TT, UT) {
      let {
        isGetter: mT
      } = UT;
      const WT = WU(TT, mT ? "get" : "value");
      return void 0 === WT ? void 0 : WT.value
    }

    function Tm(TT, UT) {
      let {
        isConstructor: mT,
        native: WT
      } = UT;
      return "function" === typeof TT && (!(!mT && XT(MU, TT, ["prototype"])) && null !== XT(zU, WT, [XT(mU, TT, [])]))
    }

    function Um(TT, UT) {
      return Tm(TT, LU("", (() => {}), UT, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let mm = null,
      Wm = !1;

    function zm() {
      try {
        return globalThis.WebAssembly === lU
      } catch {
        return !1
      }
    }

    function Mm(TT) {
      try {
        return function(TT) {
          const {
            holder: UT,
            key: mT,
            onNamespace: WT,
            inSecureContext: zT
          } = TT, MT = UT(), gT = qU(MT, mT);
          if (!gT) return !(zT && !0 === globalThis.isSecureContext);
          const nT = RU(gT, TT);
          if (!Tm(nT, TT)) return !1;
          if (WT) {
            const UT = globalThis.WebAssembly;
            if (UT !== MT && null !== UT && ("object" === typeof UT || "function" === typeof UT)) {
              const WT = kU(UT, mT);
              return WT === nT || void 0 === WT || Tm(WT, TT)
            }
          }
          return !0
        }(TT)
      } catch {
        return !1
      }
    }

    function gm(TT) {
      const UT = `wh:${TT.code}`;
      if ("punished" === TT.tier) return UT;
      try {
        return `${UT}${RT(nm(TT))}`
      } catch {
        return `${UT}${RT(void 0)}`
      }
    }

    function nm(TT) {
      const UT = qU(TT.holder(), TT.key),
        mT = void 0 === UT ? void 0 : RU(UT, TT);
      return TT.onNamespace && !zm() && Tm(mT, TT) ? kU(globalThis.WebAssembly, TT.key) : mT
    }

    function Hm(TT) {
      if (DU(TT)) return 5;
      const UT = TU(TT);
      return NU(UT) ? 4 : hU(TT) ? 3 : PU(UT) ? function(TT) {
        return XT(gU, XU, [TT])
      }(UT) ? -1 : UT === QU ? 0 : 1 : 2
    }

    function km() {
      const TT = function() {
        const TT = IT();
        return eT === fT || eT === qT ? (XT = yT, aT = wT) : XT = gT, TT
      }();
      try {
        if (null === mm || !DU(mm)) {
          const TT = function() {
            if (void 0 === lU) return null;
            let TT = zm() ? null : "wh:wa";
            const UT = UT => {
              null !== UT && (null === TT || Hm(UT) > Hm(TT)) && (TT = UT)
            };
            for (let mT = 0; mT < iU.length; mT++) {
              const TT = iU[mT];
              void 0 === TT || Mm(TT) || UT(gm(TT))
            }
            UT((0, UU.l)());
            for (let mT = 0; mT < xU.length; mT++) {
              const TT = xU[mT];
              void 0 === TT || Mm(TT) || UT(tU(TT))
            }
            return TT
          }();
          (null === mm || null !== TT && Hm(TT) > Hm(mm)) && (mm = TT)
        }
      } finally {
        sT(TT)
      }
    }

    function jm() {
      Wm = !0
    }

    function lm() {
      if (Wm) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && km(), null !== mm) return mm;
      if (void 0 === lU) return "wn:unsupported";
      const TT = (0, WT.s)();
      return null === TT ? null : `wn:${TT}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);