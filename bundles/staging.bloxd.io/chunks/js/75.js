export const id = 75;
export const ids = [75];
export const modules = {
  4524: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => kE,
      h: () => Bg,
      k: () => IE,
      n: () => Eg,
      o: () => wE,
      q: () => eE,
      u: () => pE,
      y: () => FE,
      B: () => bE,
      C: () => ug,
      E: () => cg,
      G: () => sE,
      H: () => SE
    });
    var Yq = gq(2797);
    const lq = Function.prototype.toString,
      Oq = RegExp.prototype.exec,
      mq = Reflect.apply,
      xq = Function.prototype.call,
      Aq = Function.prototype.apply,
      cq = Function.prototype.bind,
      uq = Object.defineProperty,
      Bq = Uint8Array;
    let Wq, Nq;
    try {
      Wq = globalThis.crypto, Nq = void 0 === Wq || null === Wq ? void 0 : Wq.getRandomValues
    } catch {}
    const aq = "bloxdBindApply";
    let Vq;
    try {
      const qq = xq;
      uq(qq, aq, {
        __proto__: null,
        value: cq,
        configurable: !0
      });
      try {
        Vq = qq[aq](Aq)
      } finally {
        delete qq[aq]
      }
    } catch {}
    const dq = 16,
      jq = 256,
      Hq = 0,
      oq = 1,
      Pq = 2,
      Qq = 3;
    let yq, tq = Hq,
      rq = mq,
      vq = 0;

    function hq(qq, Eq) {
      return qq === `function ${Eq}() { [native code] }` || qq === `function ${Eq}() {\n    [native code]\n}`
    }
    const nq = 0,
      bq = 1,
      iq = 2;
    let Zq = nq;

    function fq(qq, Eq, gq) {
      if (Zq === iq && tq === oq && ! function() {
          const qq = yq;
          return vq >= jq && (rq(Nq, Wq, [qq]), vq = 0), qq[vq++] < 256 / dq
        }()) return function(qq, Eq, gq) {
        return rq(qq, Eq, gq ?? 0)
      }(...arguments);
      if (Zq === nq || tq === Pq) return mq(qq, Eq, gq);
      let Yq;
      Zq = nq;
      try {
        tq === Hq && (tq = Qq, tq = function() {
          const qq = mq(lq, mq, []);
          if (hq(qq, "apply")) return Pq;
          if (null === mq(Oq, /\(\.\.\.arguments\)/, [qq]) && null === mq(Oq, /^function\s*\(\.\.\.[\w$]+\)/, [qq])) return Pq;
          if ("function" !== typeof Vq || "function" !== typeof xq || "function" !== typeof Aq || "function" !== typeof cq || "function" !== typeof uq || "function" !== typeof Nq || "function" !== typeof Bq || !hq(mq(lq, xq, []), "call") || !hq(mq(lq, Aq, []), "apply") || !hq(mq(lq, cq, []), "bind") || !hq(mq(lq, uq, []), "defineProperty") || !hq(mq(lq, Nq, []), "getRandomValues") || !hq(mq(lq, Bq, []), "Uint8Array")) return Pq;
          const Eq = Vq,
            gq = {},
            Yq = function(qq) {
              return this === gq && qq === gq
            };
          try {
            if (!0 !== Eq(Yq, gq, [gq])) return Pq;
            const qq = new Bq(jq);
            Eq(Nq, Wq, [qq]), yq = qq
          } catch {
            return Pq
          }
          return rq = Eq, oq
        }()), Yq = mq(qq, Eq, gq)
      } catch (aq) {
        throw tq = Pq, aq
      }
      return Zq = iq, Yq
    }
    let Mq = mq;

    function Tq() {
      return (Mq === mq ? 0 : 3) + Zq
    }

    function zq() {
      const qq = Tq();
      return Mq = mq, qq
    }

    function Sq(qq) {
      Mq = qq >= 3 ? fq : mq, Zq = qq % 3
    }
    const pq = Function.prototype.toString,
      Gq = Object.getOwnPropertyDescriptor,
      Lq = Object.prototype.hasOwnProperty,
      Jq = RegExp.prototype.exec,
      kq = TextEncoder.prototype.encodeInto,
      Rq = String.prototype.startsWith,
      Uq = Number.prototype.toString,
      Fq = WeakMap.prototype.get,
      sq = WeakMap.prototype.set,
      Xq = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      wq = new TextEncoder,
      Kq = new Uint8Array(1024),
      Cq = 9999999,
      Iq = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      eq = new WeakMap;

    function Dq(qq) {
      if ("function" !== typeof qq) return "#a0.0";
      const Eq = Mq(Fq, eq, [qq]);
      if (void 0 !== Eq) return Eq;
      const gq = Mq(pq, qq, []),
        Yq = gq.length > Cq ? Cq : gq.length,
        lq = `#${function(qq,Eq){const gq=Mq(Jq,Xq,[Eq]);if(null===gq)return"s";const Yq=gq[1];if("ProxyObject"===Yq)return"p";if(""!==Yq)return Mq(Rq,Yq,["bound "])?"b":"n";try{const Eq=Gq(qq,"name"),gq=void 0!==Eq&&Mq(Lq,Eq,["value"])?Eq.value:void 0;return"string"===typeof gq&&Mq(Rq,gq,["bound "])?"b":"p"}catch{return"p"}}(qq,gq)}${Yq}.${function(qq){const{written:Eq}=Mq(kq,wq,[qq,Kq]);let gq=2166136261;for(let Yq=0;Yq<Eq;Yq++)gq=(gq^Kq[Yq])>>>0,gq=gq+(gq<<1)+(gq<<4)+(gq<<7)+(gq<<8)+(gq<<24)>>>0;return Mq(Uq,gq,[36])}(gq)}`;
      return Mq(sq, eq, [qq, lq]), lq
    }

    function qE(qq) {
      const Eq = Mq(Jq, Iq, [qq]);
      return null === Eq ? qq : Eq[1]
    }
    var EE = gq(2815);
    const gE = Function.prototype.toString,
      YE = Object.getOwnPropertyDescriptor,
      lE = RegExp.prototype.exec,
      OE = Object.prototype.hasOwnProperty,
      mE = Set.prototype.has,
      xE = WeakMap.prototype.get,
      AE = WeakMap.prototype.set,
      cE = Reflect.get,
      uE = Object.getPrototypeOf,
      BE = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function WE(qq, Eq, gq) {
      return {
        code: qq,
        holder: Eq,
        key: gq,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${gq}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function NE() {
      return BE
    }
    const aE = BE?.Instance.prototype,
      VE = BE?.Memory.prototype;

    function dE() {
      return VE
    }
    let jE, HE;
    try {
      const qq = globalThis.crypto,
        Eq = qq?.subtle;
      jE = qq ? uE(qq) : void 0, HE = Eq ? uE(Eq) : void 0
    } catch {}

    function oE(qq, Eq) {
      for (let gq = qq; void 0 !== gq && null !== gq; gq = uE(gq)) {
        const qq = YE(gq, Eq);
        if (qq) return qq
      }
    }
    const PE = [WE("in", NE, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), WE("is", NE, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), WE("co", NE, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), WE("cs", NE, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), WE("mo", NE, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), WE("it", NE, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), WE("me", NE, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), WE("ex", (function() {
      return aE
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), WE("bu", dE, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), WE("gr", dE, "grow", {
      tier: "punished"
    }), WE("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), WE("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), WE("su", (function() {
      return jE
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), WE("dg", (function() {
      return HE
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function QE(qq) {
      let Eq;
      try {
        const gq = cE(globalThis, qq);
        Eq = "function" === typeof gq ? gq.prototype : void 0
      } catch {}
      return () => Eq
    }

    function yE(qq, Eq, gq) {
      return gq.map((gq => WE(qq, Eq, gq)))
    }
    const tE = WE("rx", QE("HTMLCanvasElement"), "getContext"),
      rE = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      vE = {
        webgpu: [...yE("gd", QE("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...yE("gq", QE("GPUQueue"), ["submit", "writeBuffer"]), ...yE("ge", QE("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...yE("gp", QE("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), tE],
        webgl: [...yE("g2", QE("WebGL2RenderingContext"), [...rE, "drawArraysInstanced", "drawElementsInstanced"]), tE],
        webgl1: [...yE("g1", QE("WebGLRenderingContext"), rE), tE]
      };
    let hE = [];
    const nE = new WeakMap;

    function bE(qq, Eq) {
      const gq = zq();
      try {
        Mq(AE, nE, [qq, Eq])
      } finally {
        Sq(gq)
      }
    }

    function iE(qq) {
      try {
        const Eq = xg(qq),
          gq = Mq(xE, nE, [Eq]);
        return qg(gq, qq) ? ZE(qq, !0) : `${ZE(qq,!1)}${Dq(gq??Eq)}`
      } catch {
        return `${ZE(qq,!1)}${Dq(void 0)}`
      }
    }

    function ZE(qq, Eq) {
      let {
        code: gq,
        key: Yq
      } = qq;
      return `wh:${gq}${Eq?"-dbg":""}:${Yq}`
    }

    function fE(qq) {
      return Object.values(vE).flatMap((Eq => Eq.map((Eq => ZE(Eq, qq)))))
    }
    const ME = new Set(fE(!0)),
      TE = new Set([...fE(!1), ...ME]),
      zE = ZE(tE, !1);

    function SE(qq) {
      hE = vE[qq]
    }

    function pE(qq) {
      const Eq = zq();
      try {
        return GE(qq) || GE(qE(qq))
      } finally {
        Sq(Eq)
      }
    }

    function GE(qq) {
      return Mq(mE, TE, [qq])
    }

    function LE(qq) {
      return new Set(PE.filter((Eq => Eq.tier === qq)).map((qq => `wh:${qq.code}`)))
    }
    const JE = LE("punished"),
      kE = !1,
      RE = new Set(EE.b),
      UE = LE("weighted");

    function FE(qq) {
      const Eq = zq();
      try {
        return XE(qE(qq))
      } finally {
        Sq(Eq)
      }
    }

    function sE(qq) {
      const Eq = zq();
      try {
        return qE(qq)
      } finally {
        Sq(Eq)
      }
    }

    function XE(qq) {
      return Mq(mE, UE, [qq])
    }

    function wE(qq) {
      const Eq = zq();
      try {
        return KE(qq)
      } finally {
        Sq(Eq)
      }
    }

    function KE(qq) {
      return Mq(mE, RE, [qq])
    }

    function CE(qq) {
      return "wb" === qq || Mq(mE, JE, [qq])
    }

    function IE(qq) {
      const Eq = zq();
      try {
        return CE(qq) || KE(qq)
      } finally {
        Sq(Eq)
      }
    }

    function eE(qq) {
      const Eq = zq();
      try {
        return "wb" === qq || kE && CE(qq)
      } finally {
        Sq(Eq)
      }
    }

    function DE(qq, Eq) {
      let {
        isGetter: gq
      } = Eq;
      const Yq = YE(qq, gq ? "get" : "value");
      return void 0 === Yq ? void 0 : Yq.value
    }

    function qg(qq, Eq) {
      let {
        isConstructor: gq,
        native: Yq
      } = Eq;
      return "function" === typeof qq && (!(!gq && Mq(OE, qq, ["prototype"])) && null !== Mq(lE, Yq, [Mq(gE, qq, [])]))
    }

    function Eg(qq, Eq) {
      return qg(qq, WE("", (() => {}), Eq, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let gg = null,
      Yg = !1;

    function lg() {
      try {
        return globalThis.WebAssembly === BE
      } catch {
        return !1
      }
    }

    function Og(qq) {
      try {
        return function(qq) {
          const {
            holder: Eq,
            key: gq,
            onNamespace: Yq,
            inSecureContext: lq
          } = qq, Oq = Eq(), mq = oE(Oq, gq);
          if (!mq) return !(lq && !0 === globalThis.isSecureContext);
          const xq = DE(mq, qq);
          if (!qg(xq, qq)) return !1;
          if (Yq) {
            const Eq = globalThis.WebAssembly;
            if (Eq !== Oq && null !== Eq && ("object" === typeof Eq || "function" === typeof Eq)) {
              const Yq = cE(Eq, gq);
              return Yq === xq || void 0 === Yq || qg(Yq, qq)
            }
          }
          return !0
        }(qq)
      } catch {
        return !1
      }
    }

    function mg(qq) {
      const Eq = `wh:${qq.code}`;
      if ("punished" === qq.tier) return Eq;
      try {
        return `${Eq}${Dq(xg(qq))}`
      } catch {
        return `${Eq}${Dq(void 0)}`
      }
    }

    function xg(qq) {
      const Eq = oE(qq.holder(), qq.key),
        gq = void 0 === Eq ? void 0 : DE(Eq, qq);
      return qq.onNamespace && !lg() && qg(gq, qq) ? cE(globalThis.WebAssembly, qq.key) : gq
    }

    function Ag(qq) {
      if (CE(qq)) return 5;
      const Eq = qE(qq);
      return XE(Eq) ? 4 : KE(qq) ? 3 : GE(Eq) ? function(qq) {
        return Mq(mE, ME, [qq])
      }(Eq) ? -1 : Eq === zE ? 0 : 1 : 2
    }

    function cg() {
      const qq = function() {
        const qq = Tq();
        return tq === Hq || tq === oq ? (Mq = fq, Zq = bq) : Mq = mq, qq
      }();
      try {
        if (null === gg || !CE(gg)) {
          const qq = function() {
            if (void 0 === BE) return null;
            let qq = lg() ? null : "wh:wa";
            const Eq = Eq => {
              null !== Eq && (null === qq || Ag(Eq) > Ag(qq)) && (qq = Eq)
            };
            for (let gq = 0; gq < PE.length; gq++) {
              const qq = PE[gq];
              void 0 === qq || Og(qq) || Eq(mg(qq))
            }
            Eq((0, EE.m)());
            for (let gq = 0; gq < hE.length; gq++) {
              const qq = hE[gq];
              void 0 === qq || Og(qq) || Eq(iE(qq))
            }
            return qq
          }();
          (null === gg || null !== qq && Ag(qq) > Ag(gg)) && (gg = qq)
        }
      } finally {
        Sq(qq)
      }
    }

    function ug() {
      Yg = !0
    }

    function Bg() {
      if (Yg) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && cg(), null !== gg) return gg;
      if (void 0 === BE) return "wn:unsupported";
      const qq = (0, Yq.s)();
      return null === qq ? null : `wn:${qq}`
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);