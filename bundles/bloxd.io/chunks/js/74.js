export const id = 74;
export const ids = [74];
export const modules = {
  4470: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => wR,
      d: () => ry,
      f: () => vR,
      h: () => Ry,
      j: () => oR,
      n: () => aR,
      q: () => cR,
      t: () => PR,
      w: () => IR,
      A: () => Vy,
      C: () => Xy,
      E: () => iR,
      G: () => gR
    });
    var Eu = yu(3510);
    const Ku = Function.prototype.toString,
      Qu = RegExp.prototype.exec,
      mu = Reflect.apply,
      Ju = Function.prototype.call,
      Nu = Function.prototype.apply,
      Xu = Function.prototype.bind,
      Vu = Object.defineProperty,
      ru = Uint8Array;
    let Bu, xu;
    try {
      Bu = globalThis.crypto, xu = void 0 === Bu || null === Bu ? void 0 : Bu.getRandomValues
    } catch {}
    const Su = "bloxdBindApply";
    let pu;
    try {
      const uu = Ju;
      Vu(uu, Su, {
        __proto__: null,
        value: Xu,
        configurable: !0
      });
      try {
        pu = uu[Su](Nu)
      } finally {
        delete uu[Su]
      }
    } catch {}
    const Tu = 16,
      Wu = 256,
      ju = 0,
      Hu = 1,
      du = 2,
      bu = 3;
    let Cu, ku = ju,
      eu = mu,
      Au = 0;

    function Du(uu, Ru) {
      return uu === `function ${Ru}() { [native code] }` || uu === `function ${Ru}() {\n    [native code]\n}`
    }
    const Mu = 0,
      Iu = 1,
      Gu = 2;
    let Uu = Mu;

    function nu(uu, Ru, yu) {
      if (Uu === Gu && ku === Hu && ! function() {
          const uu = Cu;
          return Au >= Wu && (eu(xu, Bu, [uu]), Au = 0), uu[Au++] < 256 / Tu
        }()) return function(uu, Ru, yu) {
        return eu(uu, Ru, yu ?? 0)
      }(...arguments);
      if (Uu === Mu || ku === du) return mu(uu, Ru, yu);
      let Eu;
      Uu = Mu;
      try {
        ku === ju && (ku = bu, ku = function() {
          const uu = mu(Ku, mu, []);
          if (Du(uu, "apply")) return du;
          if (null === mu(Qu, /\(\.\.\.arguments\)/, [uu]) && null === mu(Qu, /^function\s*\(\.\.\.[\w$]+\)/, [uu])) return du;
          if ("function" !== typeof pu || "function" !== typeof Ju || "function" !== typeof Nu || "function" !== typeof Xu || "function" !== typeof Vu || "function" !== typeof xu || "function" !== typeof ru || !Du(mu(Ku, Ju, []), "call") || !Du(mu(Ku, Nu, []), "apply") || !Du(mu(Ku, Xu, []), "bind") || !Du(mu(Ku, Vu, []), "defineProperty") || !Du(mu(Ku, xu, []), "getRandomValues") || !Du(mu(Ku, ru, []), "Uint8Array")) return du;
          const Ru = pu,
            yu = {},
            Eu = function(uu) {
              return this === yu && uu === yu
            };
          try {
            if (!0 !== Ru(Eu, yu, [yu])) return du;
            const uu = new ru(Wu);
            Ru(xu, Bu, [uu]), Cu = uu
          } catch {
            return du
          }
          return eu = Ru, Hu
        }()), Eu = mu(uu, Ru, yu)
      } catch (Su) {
        throw ku = du, Su
      }
      return Uu = Gu, Eu
    }
    let su = mu;

    function tu() {
      return (su === mu ? 0 : 3) + Uu
    }

    function lu() {
      const uu = tu();
      return su = mu, uu
    }

    function gu(uu) {
      su = uu >= 3 ? nu : mu, Uu = uu % 3
    }
    const cu = Function.prototype.toString,
      Lu = Object.getOwnPropertyDescriptor,
      zu = Object.prototype.hasOwnProperty,
      Fu = RegExp.prototype.exec,
      wu = TextEncoder.prototype.encodeInto,
      Zu = String.prototype.startsWith,
      hu = Number.prototype.toString,
      Pu = WeakMap.prototype.get,
      iu = WeakMap.prototype.set,
      Yu = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      ou = new TextEncoder,
      qu = new Uint8Array(1024),
      Ou = 9999999,
      vu = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      au = new WeakMap;

    function fu(uu) {
      if ("function" !== typeof uu) return "#a0.0";
      const Ru = su(Pu, au, [uu]);
      if (void 0 !== Ru) return Ru;
      const yu = su(cu, uu, []),
        Eu = yu.length > Ou ? Ou : yu.length,
        Ku = `#${function(uu,Ru){const yu=su(Fu,Yu,[Ru]);if(null===yu)return"s";const Eu=yu[1];if("ProxyObject"===Eu)return"p";if(""!==Eu)return su(Zu,Eu,["bound "])?"b":"n";try{const Ru=Lu(uu,"name"),yu=void 0!==Ru&&su(zu,Ru,["value"])?Ru.value:void 0;return"string"===typeof yu&&su(Zu,yu,["bound "])?"b":"p"}catch{return"p"}}(uu,yu)}${Eu}.${function(uu){const{written:Ru}=su(wu,ou,[uu,qu]);let yu=2166136261;for(let Eu=0;Eu<Ru;Eu++)yu=(yu^qu[Eu])>>>0,yu=yu+(yu<<1)+(yu<<4)+(yu<<7)+(yu<<8)+(yu<<24)>>>0;return su(hu,yu,[36])}(yu)}`;
      return su(iu, au, [uu, Ku]), Ku
    }

    function uR(uu) {
      const Ru = su(Fu, vu, [uu]);
      return null === Ru ? uu : Ru[1]
    }
    var RR = yu(3517);
    const yR = Function.prototype.toString,
      ER = Object.getOwnPropertyDescriptor,
      KR = RegExp.prototype.exec,
      QR = Object.prototype.hasOwnProperty,
      mR = Set.prototype.has,
      JR = WeakMap.prototype.get,
      NR = WeakMap.prototype.set,
      XR = Reflect.get,
      VR = Object.getPrototypeOf,
      rR = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function BR(uu, Ru, yu) {
      return {
        code: uu,
        holder: Ru,
        key: yu,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${yu}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function xR() {
      return rR
    }
    const SR = rR?.Instance.prototype,
      pR = rR?.Memory.prototype;

    function TR() {
      return pR
    }
    let WR, jR;
    try {
      const uu = globalThis.crypto,
        Ru = uu?.subtle;
      WR = uu ? VR(uu) : void 0, jR = Ru ? VR(Ru) : void 0
    } catch {}

    function HR(uu, Ru) {
      for (let yu = uu; void 0 !== yu && null !== yu; yu = VR(yu)) {
        const uu = ER(yu, Ru);
        if (uu) return uu
      }
    }
    const dR = [BR("in", xR, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), BR("is", xR, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), BR("co", xR, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), BR("cs", xR, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), BR("mo", xR, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), BR("it", xR, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), BR("me", xR, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), BR("ex", (function() {
      return SR
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), BR("bu", TR, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), BR("gr", TR, "grow", {
      tier: "punished"
    }), BR("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), BR("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), BR("su", (function() {
      return WR
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), BR("dg", (function() {
      return jR
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function bR(uu) {
      let Ru;
      try {
        const yu = XR(globalThis, uu);
        Ru = "function" === typeof yu ? yu.prototype : void 0
      } catch {}
      return () => Ru
    }

    function CR(uu, Ru, yu) {
      return yu.map((yu => BR(uu, Ru, yu)))
    }
    const kR = BR("rx", bR("HTMLCanvasElement"), "getContext"),
      eR = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      AR = {
        webgpu: [...CR("gd", bR("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...CR("gq", bR("GPUQueue"), ["submit", "writeBuffer"]), ...CR("ge", bR("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...CR("gp", bR("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), kR],
        webgl: [...CR("g2", bR("WebGL2RenderingContext"), [...eR, "drawArraysInstanced", "drawElementsInstanced"]), kR],
        webgl1: [...CR("g1", bR("WebGLRenderingContext"), eR), kR]
      };
    let DR = [];
    const MR = new WeakMap;

    function IR(uu, Ru) {
      const yu = lu();
      try {
        su(NR, MR, [uu, Ru])
      } finally {
        gu(yu)
      }
    }

    function GR(uu) {
      try {
        const Ru = Jy(uu),
          yu = su(JR, MR, [Ru]);
        return uy(yu, uu) ? UR(uu, !0) : `${UR(uu,!1)}${fu(yu??Ru)}`
      } catch {
        return `${UR(uu,!1)}${fu(void 0)}`
      }
    }

    function UR(uu, Ru) {
      let {
        code: yu,
        key: Eu
      } = uu;
      return `wh:${yu}${Ru?"-dbg":""}:${Eu}`
    }

    function nR(uu) {
      return Object.values(AR).flatMap((Ru => Ru.map((Ru => UR(Ru, uu)))))
    }
    const sR = new Set(nR(!0)),
      tR = new Set([...nR(!1), ...sR]),
      lR = UR(kR, !1);

    function gR(uu) {
      DR = AR[uu]
    }

    function cR(uu) {
      const Ru = lu();
      try {
        return LR(uu) || LR(uR(uu))
      } finally {
        gu(Ru)
      }
    }

    function LR(uu) {
      return su(mR, tR, [uu])
    }

    function zR(uu) {
      return new Set(dR.filter((Ru => Ru.tier === uu)).map((uu => `wh:${uu.code}`)))
    }
    const FR = zR("punished"),
      wR = !1,
      ZR = new Set(RR.e),
      hR = zR("weighted");

    function PR(uu) {
      const Ru = lu();
      try {
        return YR(uR(uu))
      } finally {
        gu(Ru)
      }
    }

    function iR(uu) {
      const Ru = lu();
      try {
        return uR(uu)
      } finally {
        gu(Ru)
      }
    }

    function YR(uu) {
      return su(mR, hR, [uu])
    }

    function oR(uu) {
      const Ru = lu();
      try {
        return qR(uu)
      } finally {
        gu(Ru)
      }
    }

    function qR(uu) {
      return su(mR, ZR, [uu])
    }

    function OR(uu) {
      return "wb" === uu || su(mR, FR, [uu])
    }

    function vR(uu) {
      const Ru = lu();
      try {
        return OR(uu) || qR(uu)
      } finally {
        gu(Ru)
      }
    }

    function aR(uu) {
      const Ru = lu();
      try {
        return "wb" === uu || wR && OR(uu)
      } finally {
        gu(Ru)
      }
    }

    function fR(uu, Ru) {
      let {
        isGetter: yu
      } = Ru;
      const Eu = ER(uu, yu ? "get" : "value");
      return void 0 === Eu ? void 0 : Eu.value
    }

    function uy(uu, Ru) {
      let {
        isConstructor: yu,
        native: Eu
      } = Ru;
      return "function" === typeof uu && (!(!yu && su(QR, uu, ["prototype"])) && null !== su(KR, Eu, [su(yR, uu, [])]))
    }

    function Ry(uu, Ru) {
      return uy(uu, BR("", (() => {}), Ru, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let yy = null,
      Ey = !1;

    function Ky() {
      try {
        return globalThis.WebAssembly === rR
      } catch {
        return !1
      }
    }

    function Qy(uu) {
      try {
        return function(uu) {
          const {
            holder: Ru,
            key: yu,
            onNamespace: Eu,
            inSecureContext: Ku
          } = uu, Qu = Ru(), mu = HR(Qu, yu);
          if (!mu) return !(Ku && !0 === globalThis.isSecureContext);
          const Ju = fR(mu, uu);
          if (!uy(Ju, uu)) return !1;
          if (Eu) {
            const Ru = globalThis.WebAssembly;
            if (Ru !== Qu && null !== Ru && ("object" === typeof Ru || "function" === typeof Ru)) {
              const Eu = XR(Ru, yu);
              return Eu === Ju || void 0 === Eu || uy(Eu, uu)
            }
          }
          return !0
        }(uu)
      } catch {
        return !1
      }
    }

    function my(uu) {
      const Ru = `wh:${uu.code}`;
      if ("punished" === uu.tier) return Ru;
      try {
        return `${Ru}${fu(Jy(uu))}`
      } catch {
        return `${Ru}${fu(void 0)}`
      }
    }

    function Jy(uu) {
      const Ru = HR(uu.holder(), uu.key),
        yu = void 0 === Ru ? void 0 : fR(Ru, uu);
      return uu.onNamespace && !Ky() && uy(yu, uu) ? XR(globalThis.WebAssembly, uu.key) : yu
    }

    function Ny(uu) {
      if (OR(uu)) return 5;
      const Ru = uR(uu);
      return YR(Ru) ? 4 : qR(uu) ? 3 : LR(Ru) ? function(uu) {
        return su(mR, sR, [uu])
      }(Ru) ? -1 : Ru === lR ? 0 : 1 : 2
    }

    function Xy() {
      const uu = function() {
        const uu = tu();
        return ku === ju || ku === Hu ? (su = nu, Uu = Iu) : su = mu, uu
      }();
      try {
        if (null === yy || !OR(yy)) {
          const uu = function() {
            if (void 0 === rR) return null;
            let uu = Ky() ? null : "wh:wa";
            const Ru = Ru => {
              null !== Ru && (null === uu || Ny(Ru) > Ny(uu)) && (uu = Ru)
            };
            for (let yu = 0; yu < dR.length; yu++) {
              const uu = dR[yu];
              void 0 === uu || Qy(uu) || Ru(my(uu))
            }
            Ru((0, RR.p)());
            for (let yu = 0; yu < DR.length; yu++) {
              const uu = DR[yu];
              void 0 === uu || Qy(uu) || Ru(GR(uu))
            }
            return uu
          }();
          (null === yy || null !== uu && Ny(uu) > Ny(yy)) && (yy = uu)
        }
      } finally {
        gu(uu)
      }
    }

    function Vy() {
      Ey = !0
    }

    function ry() {
      if (Ey) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Xy(), null !== yy) return yy;
      if (void 0 === rR) return "wn:unsupported";
      const uu = (0, Eu.l)();
      return null === uu ? null : `wn:${uu}`
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);