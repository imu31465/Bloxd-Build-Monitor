export const id = 78;
export const ids = [78];
export const modules = {
  4874: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => FE,
      f: () => bj,
      i: () => yE,
      m: () => Ej,
      q: () => HE,
      s: () => zE,
      u: () => iE,
      w: () => tE,
      z: () => oE,
      B: () => Cj,
      C: () => fj,
      E: () => xE,
      G: () => QE
    });
    var su = ju(3017);
    const Uu = Function.prototype.toString,
      Zu = RegExp.prototype.exec,
      Xu = Reflect.apply,
      lu = Function.prototype.call,
      qu = Function.prototype.apply,
      fu = Function.prototype.bind,
      Cu = Object.defineProperty,
      bu = Uint8Array;
    let cu, Nu;
    try {
      cu = globalThis.crypto, Nu = void 0 === cu || null === cu ? void 0 : cu.getRandomValues
    } catch {}
    const Ou = "bloxdBindApply";
    let Yu;
    try {
      const uu = lu;
      Cu(uu, Ou, {
        __proto__: null,
        value: fu,
        configurable: !0
      });
      try {
        Yu = uu[Ou](qu)
      } finally {
        delete uu[Ou]
      }
    } catch {}
    const hu = 16,
      Du = 256,
      gu = 0,
      Mu = 1,
      eu = 2,
      Gu = 3;
    let pu, wu = gu,
      Ju = Xu,
      du = 0;

    function au(uu, Eu) {
      return uu === `function ${Eu}() { [native code] }` || uu === `function ${Eu}() {\n    [native code]\n}`
    }
    const Pu = 0,
      ou = 1,
      ku = 2;
    let mu = Pu;

    function vu(uu, Eu, ju) {
      if (mu === ku && wu === Mu && ! function() {
          const uu = pu;
          return du >= Du && (Ju(Nu, cu, [uu]), du = 0), uu[du++] < 256 / hu
        }()) return function(uu, Eu, ju) {
        return Ju(uu, Eu, ju ?? 0)
      }(...arguments);
      if (mu === Pu || wu === eu) return Xu(uu, Eu, ju);
      let su;
      mu = Pu;
      try {
        wu === gu && (wu = Gu, wu = function() {
          const uu = Xu(Uu, Xu, []);
          if (au(uu, "apply")) return eu;
          if (null === Xu(Zu, /\(\.\.\.arguments\)/, [uu]) && null === Xu(Zu, /^function\s*\(\.\.\.[\w$]+\)/, [uu])) return eu;
          if ("function" !== typeof Yu || "function" !== typeof lu || "function" !== typeof qu || "function" !== typeof fu || "function" !== typeof Cu || "function" !== typeof Nu || "function" !== typeof bu || !au(Xu(Uu, lu, []), "call") || !au(Xu(Uu, qu, []), "apply") || !au(Xu(Uu, fu, []), "bind") || !au(Xu(Uu, Cu, []), "defineProperty") || !au(Xu(Uu, Nu, []), "getRandomValues") || !au(Xu(Uu, bu, []), "Uint8Array")) return eu;
          const Eu = Yu,
            ju = {},
            su = function(uu) {
              return this === ju && uu === ju
            };
          try {
            if (!0 !== Eu(su, ju, [ju])) return eu;
            const uu = new bu(Du);
            Eu(Nu, cu, [uu]), pu = uu
          } catch {
            return eu
          }
          return Ju = Eu, Mu
        }()), su = Xu(uu, Eu, ju)
      } catch (Ou) {
        throw wu = eu, Ou
      }
      return mu = ku, su
    }
    let Ku = Xu;

    function Vu() {
      return (Ku === Xu ? 0 : 3) + mu
    }

    function ru() {
      const uu = Vu();
      return Ku = Xu, uu
    }

    function Qu(uu) {
      Ku = uu >= 3 ? vu : Xu, mu = uu % 3
    }
    const iu = Function.prototype.toString,
      Wu = Object.getOwnPropertyDescriptor,
      Su = Object.prototype.hasOwnProperty,
      Iu = RegExp.prototype.exec,
      Fu = TextEncoder.prototype.encodeInto,
      Bu = String.prototype.startsWith,
      Lu = Number.prototype.toString,
      tu = WeakMap.prototype.get,
      xu = WeakMap.prototype.set,
      Tu = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      Hu = new TextEncoder,
      Au = new Uint8Array(1024),
      nu = 9999999,
      yu = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      zu = new WeakMap;

    function Ru(uu) {
      if ("function" !== typeof uu) return "#a0.0";
      const Eu = Ku(tu, zu, [uu]);
      if (void 0 !== Eu) return Eu;
      const ju = Ku(iu, uu, []),
        su = ju.length > nu ? nu : ju.length,
        Uu = `#${function(uu,Eu){const ju=Ku(Iu,Tu,[Eu]);if(null===ju)return"s";const su=ju[1];if("ProxyObject"===su)return"p";if(""!==su)return Ku(Bu,su,["bound "])?"b":"n";try{const Eu=Wu(uu,"name"),ju=void 0!==Eu&&Ku(Su,Eu,["value"])?Eu.value:void 0;return"string"===typeof ju&&Ku(Bu,ju,["bound "])?"b":"p"}catch{return"p"}}(uu,ju)}${su}.${function(uu){const{written:Eu}=Ku(Fu,Hu,[uu,Au]);let ju=2166136261;for(let su=0;su<Eu;su++)ju=(ju^Au[su])>>>0,ju=ju+(ju<<1)+(ju<<4)+(ju<<7)+(ju<<8)+(ju<<24)>>>0;return Ku(Lu,ju,[36])}(ju)}`;
      return Ku(xu, zu, [uu, Uu]), Uu
    }

    function uE(uu) {
      const Eu = Ku(Iu, yu, [uu]);
      return null === Eu ? uu : Eu[1]
    }
    var EE = ju(3038);
    const jE = Function.prototype.toString,
      sE = Object.getOwnPropertyDescriptor,
      UE = RegExp.prototype.exec,
      ZE = Object.prototype.hasOwnProperty,
      XE = Set.prototype.has,
      lE = WeakMap.prototype.get,
      qE = WeakMap.prototype.set,
      fE = Reflect.get,
      CE = Object.getPrototypeOf,
      bE = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function cE(uu, Eu, ju) {
      return {
        code: uu,
        holder: Eu,
        key: ju,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${ju}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function NE() {
      return bE
    }
    const OE = bE?.Instance.prototype,
      YE = bE?.Memory.prototype;

    function hE() {
      return YE
    }
    let DE, gE;
    try {
      const uu = globalThis.crypto,
        Eu = uu?.subtle;
      DE = uu ? CE(uu) : void 0, gE = Eu ? CE(Eu) : void 0
    } catch {}

    function ME(uu, Eu) {
      for (let ju = uu; void 0 !== ju && null !== ju; ju = CE(ju)) {
        const uu = sE(ju, Eu);
        if (uu) return uu
      }
    }
    const eE = [cE("in", NE, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), cE("is", NE, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), cE("co", NE, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), cE("cs", NE, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), cE("mo", NE, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), cE("it", NE, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), cE("me", NE, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), cE("ex", (function() {
      return OE
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), cE("bu", hE, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), cE("gr", hE, "grow", {
      tier: "punished"
    }), cE("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), cE("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), cE("su", (function() {
      return DE
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), cE("dg", (function() {
      return gE
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function GE(uu) {
      let Eu;
      try {
        const ju = fE(globalThis, uu);
        Eu = "function" === typeof ju ? ju.prototype : void 0
      } catch {}
      return () => Eu
    }

    function pE(uu, Eu, ju) {
      return ju.map((ju => cE(uu, Eu, ju)))
    }
    const wE = cE("rx", GE("HTMLCanvasElement"), "getContext"),
      JE = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      dE = {
        webgpu: [...pE("gd", GE("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...pE("gq", GE("GPUQueue"), ["submit", "writeBuffer"]), ...pE("ge", GE("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...pE("gp", GE("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), wE],
        webgl: [...pE("g2", GE("WebGL2RenderingContext"), [...JE, "drawArraysInstanced", "drawElementsInstanced"]), wE],
        webgl1: [...pE("g1", GE("WebGLRenderingContext"), JE), wE]
      };
    let aE = [];
    const PE = new WeakMap;

    function oE(uu, Eu) {
      const ju = ru();
      try {
        Ku(qE, PE, [uu, Eu])
      } finally {
        Qu(ju)
      }
    }

    function kE(uu) {
      try {
        const Eu = lj(uu),
          ju = Ku(lE, PE, [Eu]);
        return uj(ju, uu) ? mE(uu, !0) : `${mE(uu,!1)}${Ru(ju??Eu)}`
      } catch {
        return `${mE(uu,!1)}${Ru(void 0)}`
      }
    }

    function mE(uu, Eu) {
      let {
        code: ju,
        key: su
      } = uu;
      return `wh:${ju}${Eu?"-dbg":""}:${su}`
    }

    function vE(uu) {
      return Object.values(dE).flatMap((Eu => Eu.map((Eu => mE(Eu, uu)))))
    }
    const KE = new Set(vE(!0)),
      VE = new Set([...vE(!1), ...KE]),
      rE = mE(wE, !1);

    function QE(uu) {
      aE = dE[uu]
    }

    function iE(uu) {
      const Eu = ru();
      try {
        return WE(uu) || WE(uE(uu))
      } finally {
        Qu(Eu)
      }
    }

    function WE(uu) {
      return Ku(XE, VE, [uu])
    }

    function SE(uu) {
      return new Set(eE.filter((Eu => Eu.tier === uu)).map((uu => `wh:${uu.code}`)))
    }
    const IE = SE("punished"),
      FE = !1,
      BE = new Set(EE.d),
      LE = SE("weighted");

    function tE(uu) {
      const Eu = ru();
      try {
        return TE(uE(uu))
      } finally {
        Qu(Eu)
      }
    }

    function xE(uu) {
      const Eu = ru();
      try {
        return uE(uu)
      } finally {
        Qu(Eu)
      }
    }

    function TE(uu) {
      return Ku(XE, LE, [uu])
    }

    function HE(uu) {
      const Eu = ru();
      try {
        return AE(uu)
      } finally {
        Qu(Eu)
      }
    }

    function AE(uu) {
      return Ku(XE, BE, [uu])
    }

    function nE(uu) {
      return "wb" === uu || Ku(XE, IE, [uu])
    }

    function yE(uu) {
      const Eu = ru();
      try {
        return nE(uu) || AE(uu)
      } finally {
        Qu(Eu)
      }
    }

    function zE(uu) {
      const Eu = ru();
      try {
        return "wb" === uu || FE && nE(uu)
      } finally {
        Qu(Eu)
      }
    }

    function RE(uu, Eu) {
      let {
        isGetter: ju
      } = Eu;
      const su = sE(uu, ju ? "get" : "value");
      return void 0 === su ? void 0 : su.value
    }

    function uj(uu, Eu) {
      let {
        isConstructor: ju,
        native: su
      } = Eu;
      return "function" === typeof uu && (!(!ju && Ku(ZE, uu, ["prototype"])) && null !== Ku(UE, su, [Ku(jE, uu, [])]))
    }

    function Ej(uu, Eu) {
      return uj(uu, cE("", (() => {}), Eu, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let jj = null,
      sj = !1;

    function Uj() {
      try {
        return globalThis.WebAssembly === bE
      } catch {
        return !1
      }
    }

    function Zj(uu) {
      try {
        return function(uu) {
          const {
            holder: Eu,
            key: ju,
            onNamespace: su,
            inSecureContext: Uu
          } = uu, Zu = Eu(), Xu = ME(Zu, ju);
          if (!Xu) return !(Uu && !0 === globalThis.isSecureContext);
          const lu = RE(Xu, uu);
          if (!uj(lu, uu)) return !1;
          if (su) {
            const Eu = globalThis.WebAssembly;
            if (Eu !== Zu && null !== Eu && ("object" === typeof Eu || "function" === typeof Eu)) {
              const su = fE(Eu, ju);
              return su === lu || void 0 === su || uj(su, uu)
            }
          }
          return !0
        }(uu)
      } catch {
        return !1
      }
    }

    function Xj(uu) {
      const Eu = `wh:${uu.code}`;
      if ("punished" === uu.tier) return Eu;
      try {
        return `${Eu}${Ru(lj(uu))}`
      } catch {
        return `${Eu}${Ru(void 0)}`
      }
    }

    function lj(uu) {
      const Eu = ME(uu.holder(), uu.key),
        ju = void 0 === Eu ? void 0 : RE(Eu, uu);
      return uu.onNamespace && !Uj() && uj(ju, uu) ? fE(globalThis.WebAssembly, uu.key) : ju
    }

    function qj(uu) {
      if (nE(uu)) return 5;
      const Eu = uE(uu);
      return TE(Eu) ? 4 : AE(uu) ? 3 : WE(Eu) ? function(uu) {
        return Ku(XE, KE, [uu])
      }(Eu) ? -1 : Eu === rE ? 0 : 1 : 2
    }

    function fj() {
      const uu = function() {
        const uu = Vu();
        return wu === gu || wu === Mu ? (Ku = vu, mu = ou) : Ku = Xu, uu
      }();
      try {
        if (null === jj || !nE(jj)) {
          const uu = function() {
            if (void 0 === bE) return null;
            let uu = Uj() ? null : "wh:wa";
            const Eu = Eu => {
              null !== Eu && (null === uu || qj(Eu) > qj(uu)) && (uu = Eu)
            };
            for (let ju = 0; ju < eE.length; ju++) {
              const uu = eE[ju];
              void 0 === uu || Zj(uu) || Eu(Xj(uu))
            }
            Eu((0, EE.n)());
            for (let ju = 0; ju < aE.length; ju++) {
              const uu = aE[ju];
              void 0 === uu || Zj(uu) || Eu(kE(uu))
            }
            return uu
          }();
          (null === jj || null !== uu && qj(uu) > qj(jj)) && (jj = uu)
        }
      } finally {
        Qu(uu)
      }
    }

    function Cj() {
      sj = !0
    }

    function bj() {
      if (sj) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && fj(), null !== jj) return jj;
      if (void 0 === bE) return "wn:unsupported";
      const uu = (0, su.r)();
      return null === uu ? null : `wn:${uu}`
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);