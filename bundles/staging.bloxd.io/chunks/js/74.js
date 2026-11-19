export const id = 74;
export const ids = [74];
export const modules = {
  4191: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => Zo,
      f: () => xI,
      g: () => Vo,
      k: () => iI,
      l: () => yo,
      p: () => TI,
      s: () => Oo,
      v: () => Go,
      w: () => fo,
      y: () => LI,
      B: () => DI,
      D: () => po,
      G: () => Qo
    });
    var iT = IT(3276);
    const zT = Function.prototype.toString,
      kT = RegExp.prototype.exec,
      WT = Reflect.apply,
      XT = Function.prototype.call,
      BT = Function.prototype.apply,
      FT = Function.prototype.bind,
      ST = Object.defineProperty,
      DT = Uint8Array;
    let LT, xT;
    try {
      LT = globalThis.crypto, xT = void 0 === LT || null === LT ? void 0 : LT.getRandomValues
    } catch {}
    const cT = "bloxdBindApply";
    let KT;
    try {
      const TT = XT;
      ST(TT, cT, {
        __proto__: null,
        value: FT,
        configurable: !0
      });
      try {
        KT = TT[cT](BT)
      } finally {
        delete TT[cT]
      }
    } catch {}
    const MT = 16,
      rT = 256,
      AT = 0,
      gT = 1,
      hT = 2,
      wT = 3;
    let mT, eT = AT,
      RT = WT,
      uT = 0;

    function vT(TT, oT) {
      return TT === `function ${oT}() { [native code] }` || TT === `function ${oT}() {\n    [native code]\n}`
    }
    const ET = 0,
      fT = 1,
      CT = 2;
    let jT = ET;

    function JT(TT, oT, IT) {
      if (jT === CT && eT === gT && ! function() {
          const TT = mT;
          return uT >= rT && (RT(xT, LT, [TT]), uT = 0), TT[uT++] < 256 / MT
        }()) return function(TT, oT, IT) {
        return RT(TT, oT, IT ?? 0)
      }(...arguments);
      if (jT === ET || eT === hT) return WT(TT, oT, IT);
      let iT;
      jT = ET;
      try {
        eT === AT && (eT = wT, eT = function() {
          const TT = WT(zT, WT, []);
          if (vT(TT, "apply")) return hT;
          if (null === WT(kT, /\(\.\.\.arguments\)/, [TT]) && null === WT(kT, /^function\s*\(\.\.\.[\w$]+\)/, [TT])) return hT;
          if ("function" !== typeof KT || "function" !== typeof XT || "function" !== typeof BT || "function" !== typeof FT || "function" !== typeof ST || "function" !== typeof xT || "function" !== typeof DT || !vT(WT(zT, XT, []), "call") || !vT(WT(zT, BT, []), "apply") || !vT(WT(zT, FT, []), "bind") || !vT(WT(zT, ST, []), "defineProperty") || !vT(WT(zT, xT, []), "getRandomValues") || !vT(WT(zT, DT, []), "Uint8Array")) return hT;
          const oT = KT,
            IT = {},
            iT = function(TT) {
              return this === IT && TT === IT
            };
          try {
            if (!0 !== oT(iT, IT, [IT])) return hT;
            const TT = new DT(rT);
            oT(xT, LT, [TT]), mT = TT
          } catch {
            return hT
          }
          return RT = oT, gT
        }()), iT = WT(TT, oT, IT)
      } catch (cT) {
        throw eT = hT, cT
      }
      return jT = CT, iT
    }
    let UT = WT;

    function aT() {
      return (UT === WT ? 0 : 3) + jT
    }

    function YT() {
      const TT = aT();
      return UT = WT, TT
    }

    function QT(TT) {
      UT = TT >= 3 ? JT : WT, jT = TT % 3
    }
    const OT = Function.prototype.toString,
      HT = Object.getOwnPropertyDescriptor,
      nT = Object.prototype.hasOwnProperty,
      qT = RegExp.prototype.exec,
      ZT = TextEncoder.prototype.encodeInto,
      lT = String.prototype.startsWith,
      sT = Number.prototype.toString,
      tT = WeakMap.prototype.get,
      GT = WeakMap.prototype.set,
      pT = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      bT = new TextEncoder,
      yT = new Uint8Array(1024),
      NT = 9999999,
      PT = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      dT = new WeakMap;

    function VT(TT) {
      if ("function" !== typeof TT) return "#a0.0";
      const oT = UT(tT, dT, [TT]);
      if (void 0 !== oT) return oT;
      const IT = UT(OT, TT, []),
        iT = IT.length > NT ? NT : IT.length,
        zT = `#${function(TT,oT){const IT=UT(qT,pT,[oT]);if(null===IT)return"s";const iT=IT[1];if("ProxyObject"===iT)return"p";if(""!==iT)return UT(lT,iT,["bound "])?"b":"n";try{const oT=HT(TT,"name"),IT=void 0!==oT&&UT(nT,oT,["value"])?oT.value:void 0;return"string"===typeof IT&&UT(lT,IT,["bound "])?"b":"p"}catch{return"p"}}(TT,IT)}${iT}.${function(TT){const{written:oT}=UT(ZT,bT,[TT,yT]);let IT=2166136261;for(let iT=0;iT<oT;iT++)IT=(IT^yT[iT])>>>0,IT=IT+(IT<<1)+(IT<<4)+(IT<<7)+(IT<<8)+(IT<<24)>>>0;return UT(sT,IT,[36])}(IT)}`;
      return UT(GT, dT, [TT, zT]), zT
    }

    function To(TT) {
      const oT = UT(qT, PT, [TT]);
      return null === oT ? TT : oT[1]
    }
    var oo = IT(3286);
    const Io = Function.prototype.toString,
      io = Object.getOwnPropertyDescriptor,
      zo = RegExp.prototype.exec,
      ko = Object.prototype.hasOwnProperty,
      Wo = Set.prototype.has,
      Xo = WeakMap.prototype.get,
      Bo = WeakMap.prototype.set,
      Fo = Reflect.get,
      So = Object.getPrototypeOf,
      Do = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function Lo(TT, oT, IT) {
      return {
        code: TT,
        holder: oT,
        key: IT,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${IT}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function xo() {
      return Do
    }
    const co = Do?.Instance.prototype,
      Ko = Do?.Memory.prototype;

    function Mo() {
      return Ko
    }
    let ro, Ao;
    try {
      const TT = globalThis.crypto,
        oT = TT?.subtle;
      ro = TT ? So(TT) : void 0, Ao = oT ? So(oT) : void 0
    } catch {}

    function go(TT, oT) {
      for (let IT = TT; void 0 !== IT && null !== IT; IT = So(IT)) {
        const TT = io(IT, oT);
        if (TT) return TT
      }
    }
    const ho = [Lo("in", xo, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), Lo("is", xo, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Lo("co", xo, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), Lo("cs", xo, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Lo("mo", xo, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Lo("it", xo, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Lo("me", xo, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Lo("ex", (function() {
      return co
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), Lo("bu", Mo, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), Lo("gr", Mo, "grow", {
      tier: "punished"
    }), Lo("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), Lo("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Lo("su", (function() {
      return ro
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Lo("dg", (function() {
      return Ao
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function wo(TT) {
      let oT;
      try {
        const IT = Fo(globalThis, TT);
        oT = "function" === typeof IT ? IT.prototype : void 0
      } catch {}
      return () => oT
    }

    function mo(TT, oT, IT) {
      return IT.map((IT => Lo(TT, oT, IT)))
    }
    const eo = Lo("rx", wo("HTMLCanvasElement"), "getContext"),
      Ro = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      uo = {
        webgpu: [...mo("gd", wo("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...mo("gq", wo("GPUQueue"), ["submit", "writeBuffer"]), ...mo("ge", wo("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...mo("gp", wo("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), eo],
        webgl: [...mo("g2", wo("WebGL2RenderingContext"), [...Ro, "drawArraysInstanced", "drawElementsInstanced"]), eo],
        webgl1: [...mo("g1", wo("WebGLRenderingContext"), Ro), eo]
      };
    let vo = [];
    const Eo = new WeakMap;

    function fo(TT, oT) {
      const IT = YT();
      try {
        UT(Bo, Eo, [TT, oT])
      } finally {
        QT(IT)
      }
    }

    function Co(TT) {
      try {
        const oT = FI(TT),
          IT = UT(Xo, Eo, [oT]);
        return II(IT, TT) ? jo(TT, !0) : `${jo(TT,!1)}${VT(IT??oT)}`
      } catch {
        return `${jo(TT,!1)}${VT(void 0)}`
      }
    }

    function jo(TT, oT) {
      let {
        code: IT,
        key: iT
      } = TT;
      return `wh:${IT}${oT?"-dbg":""}:${iT}`
    }

    function Jo(TT) {
      return Object.values(uo).flatMap((oT => oT.map((oT => jo(oT, TT)))))
    }
    const Uo = new Set(Jo(!0)),
      ao = new Set([...Jo(!1), ...Uo]),
      Yo = jo(eo, !1);

    function Qo(TT) {
      vo = uo[TT]
    }

    function Oo(TT) {
      const oT = YT();
      try {
        return Ho(TT) || Ho(To(TT))
      } finally {
        QT(oT)
      }
    }

    function Ho(TT) {
      return UT(Wo, ao, [TT])
    }

    function no(TT) {
      return new Set(ho.filter((oT => oT.tier === TT)).map((TT => `wh:${TT.code}`)))
    }
    const qo = no("punished"),
      Zo = !1,
      so = new Set(oo.c),
      to = no("weighted");

    function Go(TT) {
      const oT = YT();
      try {
        return bo(To(TT))
      } finally {
        QT(oT)
      }
    }

    function po(TT) {
      const oT = YT();
      try {
        return To(TT)
      } finally {
        QT(oT)
      }
    }

    function bo(TT) {
      return UT(Wo, to, [TT])
    }

    function yo(TT) {
      const oT = YT();
      try {
        return No(TT)
      } finally {
        QT(oT)
      }
    }

    function No(TT) {
      return UT(Wo, so, [TT])
    }

    function Po(TT) {
      return "wb" === TT || UT(Wo, qo, [TT])
    }

    function Vo(TT) {
      const oT = YT();
      try {
        return Po(TT) || No(TT)
      } finally {
        QT(oT)
      }
    }

    function TI(TT) {
      const oT = YT();
      try {
        return "wb" === TT || Zo && Po(TT)
      } finally {
        QT(oT)
      }
    }

    function oI(TT, oT) {
      let {
        isGetter: IT
      } = oT;
      const iT = io(TT, IT ? "get" : "value");
      return void 0 === iT ? void 0 : iT.value
    }

    function II(TT, oT) {
      let {
        isConstructor: IT,
        native: iT
      } = oT;
      return "function" === typeof TT && (!(!IT && UT(ko, TT, ["prototype"])) && null !== UT(zo, iT, [UT(Io, TT, [])]))
    }

    function iI(TT, oT) {
      return II(TT, Lo("", (() => {}), oT, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let zI = null,
      kI = !1;

    function WI() {
      try {
        return globalThis.WebAssembly === Do
      } catch {
        return !1
      }
    }

    function XI(TT) {
      try {
        return function(TT) {
          const {
            holder: oT,
            key: IT,
            onNamespace: iT,
            inSecureContext: zT
          } = TT, kT = oT(), WT = go(kT, IT);
          if (!WT) return !(zT && !0 === globalThis.isSecureContext);
          const XT = oI(WT, TT);
          if (!II(XT, TT)) return !1;
          if (iT) {
            const oT = globalThis.WebAssembly;
            if (oT !== kT && null !== oT && ("object" === typeof oT || "function" === typeof oT)) {
              const iT = Fo(oT, IT);
              return iT === XT || void 0 === iT || II(iT, TT)
            }
          }
          return !0
        }(TT)
      } catch {
        return !1
      }
    }

    function BI(TT) {
      const oT = `wh:${TT.code}`;
      if ("punished" === TT.tier) return oT;
      try {
        return `${oT}${VT(FI(TT))}`
      } catch {
        return `${oT}${VT(void 0)}`
      }
    }

    function FI(TT) {
      const oT = go(TT.holder(), TT.key),
        IT = void 0 === oT ? void 0 : oI(oT, TT);
      return TT.onNamespace && !WI() && II(IT, TT) ? Fo(globalThis.WebAssembly, TT.key) : IT
    }

    function SI(TT) {
      if (Po(TT)) return 5;
      const oT = To(TT);
      return bo(oT) ? 4 : No(TT) ? 3 : Ho(oT) ? function(TT) {
        return UT(Wo, Uo, [TT])
      }(oT) ? -1 : oT === Yo ? 0 : 1 : 2
    }

    function DI() {
      const TT = function() {
        const TT = aT();
        return eT === AT || eT === gT ? (UT = JT, jT = fT) : UT = WT, TT
      }();
      try {
        if (null === zI || !Po(zI)) {
          const TT = function() {
            if (void 0 === Do) return null;
            let TT = WI() ? null : "wh:wa";
            const oT = oT => {
              null !== oT && (null === TT || SI(oT) > SI(TT)) && (TT = oT)
            };
            for (let IT = 0; IT < ho.length; IT++) {
              const TT = ho[IT];
              void 0 === TT || XI(TT) || oT(BI(TT))
            }
            oT((0, oo.l)());
            for (let IT = 0; IT < vo.length; IT++) {
              const TT = vo[IT];
              void 0 === TT || XI(TT) || oT(Co(TT))
            }
            return TT
          }();
          (null === zI || null !== TT && SI(TT) > SI(zI)) && (zI = TT)
        }
      } finally {
        QT(TT)
      }
    }

    function LI() {
      kI = !0
    }

    function xI() {
      if (kI) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && DI(), null !== zI) return zI;
      if (void 0 === Do) return "wn:unsupported";
      const TT = (0, iT.n)();
      return null === TT ? null : `wn:${TT}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);