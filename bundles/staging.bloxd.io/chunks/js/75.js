export const id = 75;
export const ids = [75];
export const modules = {
  4681: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => Rk,
      e: () => Cc,
      g: () => qk,
      j: () => cc,
      l: () => nk,
      n: () => sk,
      p: () => uk,
      s: () => Yk,
      u: () => zk,
      x: () => Ac,
      y: () => Ic,
      z: () => Bk,
      B: () => Zk
    });
    var lT = cT(3679);
    const MT = Function.prototype.toString,
      KT = RegExp.prototype.exec,
      OT = Reflect.apply,
      yT = Function.prototype.call,
      fT = Function.prototype.apply,
      xT = Function.prototype.bind,
      IT = Object.defineProperty,
      AT = Uint8Array;
    let CT, jT;
    try {
      CT = globalThis.crypto, jT = void 0 === CT || null === CT ? void 0 : CT.getRandomValues
    } catch {}
    const vT = "bloxdBindApply";
    let tT;
    try {
      const TT = yT;
      IT(TT, vT, {
        __proto__: null,
        value: xT,
        configurable: !0
      });
      try {
        tT = TT[vT](fT)
      } finally {
        delete TT[vT]
      }
    } catch {}
    const hT = 16,
      NT = 256,
      QT = 0,
      ST = 1,
      DT = 2,
      aT = 3;
    let FT, rT = QT,
      PT = OT,
      wT = 0;

    function mT(TT, kT) {
      return TT === `function ${kT}() { [native code] }` || TT === `function ${kT}() {\n    [native code]\n}`
    }
    const bT = 0,
      zT = 1,
      JT = 2;
    let oT = bT;

    function HT(TT, kT, cT) {
      if (oT === JT && rT === ST && ! function() {
          const TT = FT;
          return wT >= NT && (PT(jT, CT, [TT]), wT = 0), TT[wT++] < 256 / hT
        }()) return function(TT, kT, cT) {
        return PT(TT, kT, cT ?? 0)
      }(...arguments);
      if (oT === bT || rT === DT) return OT(TT, kT, cT);
      let lT;
      oT = bT;
      try {
        rT === QT && (rT = aT, rT = function() {
          const TT = OT(MT, OT, []);
          if (mT(TT, "apply")) return DT;
          if (null === OT(KT, /\(\.\.\.arguments\)/, [TT]) && null === OT(KT, /^function\s*\(\.\.\.[\w$]+\)/, [TT])) return DT;
          if ("function" !== typeof tT || "function" !== typeof yT || "function" !== typeof fT || "function" !== typeof xT || "function" !== typeof IT || "function" !== typeof jT || "function" !== typeof AT || !mT(OT(MT, yT, []), "call") || !mT(OT(MT, fT, []), "apply") || !mT(OT(MT, xT, []), "bind") || !mT(OT(MT, IT, []), "defineProperty") || !mT(OT(MT, jT, []), "getRandomValues") || !mT(OT(MT, AT, []), "Uint8Array")) return DT;
          const kT = tT,
            cT = {},
            lT = function(TT) {
              return this === cT && TT === cT
            };
          try {
            if (!0 !== kT(lT, cT, [cT])) return DT;
            const TT = new AT(NT);
            kT(jT, CT, [TT]), FT = TT
          } catch {
            return DT
          }
          return PT = kT, ST
        }()), lT = OT(TT, kT, cT)
      } catch (vT) {
        throw rT = DT, vT
      }
      return oT = JT, lT
    }
    let eT = OT;

    function GT() {
      return (eT === OT ? 0 : 3) + oT
    }

    function VT() {
      const TT = GT();
      return eT = OT, TT
    }

    function ET(TT) {
      eT = TT >= 3 ? HT : OT, oT = TT % 3
    }
    const ZT = Function.prototype.toString,
      uT = Object.getOwnPropertyDescriptor,
      XT = Object.prototype.hasOwnProperty,
      dT = RegExp.prototype.exec,
      LT = TextEncoder.prototype.encodeInto,
      RT = String.prototype.startsWith,
      gT = Number.prototype.toString,
      UT = WeakMap.prototype.get,
      YT = WeakMap.prototype.set,
      BT = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      WT = new TextEncoder,
      nT = new Uint8Array(1024),
      pT = 9999999,
      iT = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      qT = new WeakMap;

    function sT(TT) {
      if ("function" !== typeof TT) return "#a0.0";
      const kT = eT(UT, qT, [TT]);
      if (void 0 !== kT) return kT;
      const cT = eT(ZT, TT, []),
        lT = cT.length > pT ? pT : cT.length,
        MT = `#${function(TT,kT){const cT=eT(dT,BT,[kT]);if(null===cT)return"s";const lT=cT[1];if("ProxyObject"===lT)return"p";if(""!==lT)return eT(RT,lT,["bound "])?"b":"n";try{const kT=uT(TT,"name"),cT=void 0!==kT&&eT(XT,kT,["value"])?kT.value:void 0;return"string"===typeof cT&&eT(RT,cT,["bound "])?"b":"p"}catch{return"p"}}(TT,cT)}${lT}.${function(TT){const{written:kT}=eT(LT,WT,[TT,nT]);let cT=2166136261;for(let lT=0;lT<kT;lT++)cT=(cT^nT[lT])>>>0,cT=cT+(cT<<1)+(cT<<4)+(cT<<7)+(cT<<8)+(cT<<24)>>>0;return eT(gT,cT,[36])}(cT)}`;
      return eT(YT, qT, [TT, MT]), MT
    }

    function Tk(TT) {
      const kT = eT(dT, iT, [TT]);
      return null === kT ? TT : kT[1]
    }
    var kk = cT(3692);
    const ck = Function.prototype.toString,
      lk = Object.getOwnPropertyDescriptor,
      Mk = RegExp.prototype.exec,
      Kk = Object.prototype.hasOwnProperty,
      Ok = Set.prototype.has,
      yk = WeakMap.prototype.get,
      fk = WeakMap.prototype.set,
      xk = Reflect.get,
      Ik = Object.getPrototypeOf,
      Ak = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function Ck(TT, kT, cT) {
      return {
        code: TT,
        holder: kT,
        key: cT,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${cT}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function jk() {
      return Ak
    }
    const vk = Ak?.Instance.prototype,
      tk = Ak?.Memory.prototype;

    function hk() {
      return tk
    }
    let Nk, Qk;
    try {
      const TT = globalThis.crypto,
        kT = TT?.subtle;
      Nk = TT ? Ik(TT) : void 0, Qk = kT ? Ik(kT) : void 0
    } catch {}

    function Sk(TT, kT) {
      for (let cT = TT; void 0 !== cT && null !== cT; cT = Ik(cT)) {
        const TT = lk(cT, kT);
        if (TT) return TT
      }
    }
    const Dk = [Ck("in", jk, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), Ck("is", jk, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Ck("co", jk, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), Ck("cs", jk, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Ck("mo", jk, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Ck("it", jk, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Ck("me", jk, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Ck("ex", (function() {
      return vk
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), Ck("bu", hk, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), Ck("gr", hk, "grow", {
      tier: "punished"
    }), Ck("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), Ck("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Ck("su", (function() {
      return Nk
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Ck("dg", (function() {
      return Qk
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function ak(TT) {
      let kT;
      try {
        const cT = xk(globalThis, TT);
        kT = "function" === typeof cT ? cT.prototype : void 0
      } catch {}
      return () => kT
    }

    function Fk(TT, kT, cT) {
      return cT.map((cT => Ck(TT, kT, cT)))
    }
    const rk = Ck("rx", ak("HTMLCanvasElement"), "getContext"),
      Pk = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      wk = {
        webgpu: [...Fk("gd", ak("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...Fk("gq", ak("GPUQueue"), ["submit", "writeBuffer"]), ...Fk("ge", ak("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...Fk("gp", ak("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), rk],
        webgl: [...Fk("g2", ak("WebGL2RenderingContext"), [...Pk, "drawArraysInstanced", "drawElementsInstanced"]), rk],
        webgl1: [...Fk("g1", ak("WebGLRenderingContext"), Pk), rk]
      };
    let mk = [];
    const bk = new WeakMap;

    function zk(TT, kT) {
      const cT = VT();
      try {
        eT(fk, bk, [TT, kT])
      } finally {
        ET(cT)
      }
    }

    function Jk(TT) {
      try {
        const kT = fc(TT),
          cT = eT(yk, bk, [kT]);
        return kc(cT, TT) ? Hk(TT, !0) : `${Hk(TT,!1)}${sT(cT??kT)}`
      } catch {
        return `${Hk(TT,!1)}${sT(void 0)}`
      }
    }

    function Hk(TT, kT) {
      let {
        code: cT,
        key: lT
      } = TT;
      return `wh:${cT}${kT?"-dbg":""}:${lT}`
    }

    function ek(TT) {
      return Object.values(wk).flatMap((kT => kT.map((kT => Hk(kT, TT)))))
    }
    const Gk = new Set(ek(!0)),
      Vk = new Set([...ek(!1), ...Gk]),
      Ek = Hk(rk, !1);

    function Zk(TT) {
      mk = wk[TT]
    }

    function uk(TT) {
      const kT = VT();
      try {
        return Xk(TT) || Xk(Tk(TT))
      } finally {
        ET(kT)
      }
    }

    function Xk(TT) {
      return eT(Ok, Vk, [TT])
    }

    function dk(TT) {
      return new Set(Dk.filter((kT => kT.tier === TT)).map((TT => `wh:${TT.code}`)))
    }
    const Lk = dk("punished"),
      Rk = !1,
      gk = new Set(kk.c),
      Uk = dk("weighted");

    function Yk(TT) {
      const kT = VT();
      try {
        return Wk(Tk(TT))
      } finally {
        ET(kT)
      }
    }

    function Bk(TT) {
      const kT = VT();
      try {
        return Tk(TT)
      } finally {
        ET(kT)
      }
    }

    function Wk(TT) {
      return eT(Ok, Uk, [TT])
    }

    function nk(TT) {
      const kT = VT();
      try {
        return pk(TT)
      } finally {
        ET(kT)
      }
    }

    function pk(TT) {
      return eT(Ok, gk, [TT])
    }

    function ik(TT) {
      return "wb" === TT || eT(Ok, Lk, [TT])
    }

    function qk(TT) {
      const kT = VT();
      try {
        return ik(TT) || pk(TT)
      } finally {
        ET(kT)
      }
    }

    function sk(TT) {
      const kT = VT();
      try {
        return "wb" === TT || Rk && ik(TT)
      } finally {
        ET(kT)
      }
    }

    function Tc(TT, kT) {
      let {
        isGetter: cT
      } = kT;
      const lT = lk(TT, cT ? "get" : "value");
      return void 0 === lT ? void 0 : lT.value
    }

    function kc(TT, kT) {
      let {
        isConstructor: cT,
        native: lT
      } = kT;
      return "function" === typeof TT && (!(!cT && eT(Kk, TT, ["prototype"])) && null !== eT(Mk, lT, [eT(ck, TT, [])]))
    }

    function cc(TT, kT) {
      return kc(TT, Ck("", (() => {}), kT, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let lc = null,
      Mc = !1;

    function Kc() {
      try {
        return globalThis.WebAssembly === Ak
      } catch {
        return !1
      }
    }

    function Oc(TT) {
      try {
        return function(TT) {
          const {
            holder: kT,
            key: cT,
            onNamespace: lT,
            inSecureContext: MT
          } = TT, KT = kT(), OT = Sk(KT, cT);
          if (!OT) return !(MT && !0 === globalThis.isSecureContext);
          const yT = Tc(OT, TT);
          if (!kc(yT, TT)) return !1;
          if (lT) {
            const kT = globalThis.WebAssembly;
            if (kT !== KT && null !== kT && ("object" === typeof kT || "function" === typeof kT)) {
              const lT = xk(kT, cT);
              return lT === yT || void 0 === lT || kc(lT, TT)
            }
          }
          return !0
        }(TT)
      } catch {
        return !1
      }
    }

    function yc(TT) {
      const kT = `wh:${TT.code}`;
      if ("punished" === TT.tier) return kT;
      try {
        return `${kT}${sT(fc(TT))}`
      } catch {
        return `${kT}${sT(void 0)}`
      }
    }

    function fc(TT) {
      const kT = Sk(TT.holder(), TT.key),
        cT = void 0 === kT ? void 0 : Tc(kT, TT);
      return TT.onNamespace && !Kc() && kc(cT, TT) ? xk(globalThis.WebAssembly, TT.key) : cT
    }

    function xc(TT) {
      if (ik(TT)) return 5;
      const kT = Tk(TT);
      return Wk(kT) ? 4 : pk(TT) ? 3 : Xk(kT) ? function(TT) {
        return eT(Ok, Gk, [TT])
      }(kT) ? -1 : kT === Ek ? 0 : 1 : 2
    }

    function Ic() {
      const TT = function() {
        const TT = GT();
        return rT === QT || rT === ST ? (eT = HT, oT = zT) : eT = OT, TT
      }();
      try {
        if (null === lc || !ik(lc)) {
          const TT = function() {
            if (void 0 === Ak) return null;
            let TT = Kc() ? null : "wh:wa";
            const kT = kT => {
              null !== kT && (null === TT || xc(kT) > xc(TT)) && (TT = kT)
            };
            for (let cT = 0; cT < Dk.length; cT++) {
              const TT = Dk[cT];
              void 0 === TT || Oc(TT) || kT(yc(TT))
            }
            kT((0, kk.r)());
            for (let cT = 0; cT < mk.length; cT++) {
              const TT = mk[cT];
              void 0 === TT || Oc(TT) || kT(Jk(TT))
            }
            return TT
          }();
          (null === lc || null !== TT && xc(TT) > xc(lc)) && (lc = TT)
        }
      } finally {
        ET(TT)
      }
    }

    function Ac() {
      Mc = !0
    }

    function Cc() {
      if (Mc) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Ic(), null !== lc) return lc;
      if (void 0 === Ak) return "wn:unsupported";
      const TT = (0, lT.n)();
      return null === TT ? null : `wn:${TT}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);