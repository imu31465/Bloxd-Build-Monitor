export const id = 77;
export const ids = [77];
export const modules = {
  4692: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => fF,
      f: () => ZI,
      j: () => DF,
      m: () => II,
      p: () => mF,
      q: () => MF,
      u: () => CF,
      x: () => YF,
      z: () => OF,
      C: () => tI,
      F: () => LI,
      I: () => AF,
      L: () => UF
    });
    var Xk = Ik(2801);
    const Tk = Function.prototype.toString,
      ik = RegExp.prototype.exec,
      yk = Reflect.apply,
      lk = Function.prototype.call,
      ak = Function.prototype.apply,
      qk = Function.prototype.bind,
      Lk = Object.defineProperty,
      tk = Uint8Array;
    let Zk, jk;
    try {
      Zk = globalThis.crypto, jk = void 0 === Zk || null === Zk ? void 0 : Zk.getRandomValues
    } catch {}
    const ek = "bloxdBindApply";
    let wk;
    try {
      const kk = lk;
      Lk(kk, ek, {
        __proto__: null,
        value: qk,
        configurable: !0
      });
      try {
        wk = kk[ek](ak)
      } finally {
        delete kk[ek]
      }
    } catch {}
    const Hk = 16,
      Jk = 256,
      xk = 0,
      Pk = 1,
      Kk = 2,
      Qk = 3;
    let sk, Vk = xk,
      zk = yk,
      Sk = 0;

    function vk(kk, Fk) {
      return kk === `function ${Fk}() { [native code] }` || kk === `function ${Fk}() {\n    [native code]\n}`
    }
    const Ek = 0,
      Ok = 1,
      nk = 2;
    let Gk = Ek;

    function pk(kk, Fk, Ik) {
      if (Gk === nk && Vk === Pk && ! function() {
          const kk = sk;
          return Sk >= Jk && (zk(jk, Zk, [kk]), Sk = 0), kk[Sk++] < 256 / Hk
        }()) return function(kk, Fk, Ik) {
        return zk(kk, Fk, Ik ?? 0)
      }(...arguments);
      if (Gk === Ek || Vk === Kk) return yk(kk, Fk, Ik);
      let Xk;
      Gk = Ek;
      try {
        Vk === xk && (Vk = Qk, Vk = function() {
          const kk = yk(Tk, yk, []);
          if (vk(kk, "apply")) return Kk;
          if (null === yk(ik, /\(\.\.\.arguments\)/, [kk]) && null === yk(ik, /^function\s*\(\.\.\.[\w$]+\)/, [kk])) return Kk;
          if ("function" !== typeof wk || "function" !== typeof lk || "function" !== typeof ak || "function" !== typeof qk || "function" !== typeof Lk || "function" !== typeof jk || "function" !== typeof tk || !vk(yk(Tk, lk, []), "call") || !vk(yk(Tk, ak, []), "apply") || !vk(yk(Tk, qk, []), "bind") || !vk(yk(Tk, Lk, []), "defineProperty") || !vk(yk(Tk, jk, []), "getRandomValues") || !vk(yk(Tk, tk, []), "Uint8Array")) return Kk;
          const Fk = wk,
            Ik = {},
            Xk = function(kk) {
              return this === Ik && kk === Ik
            };
          try {
            if (!0 !== Fk(Xk, Ik, [Ik])) return Kk;
            const kk = new tk(Jk);
            Fk(jk, Zk, [kk]), sk = kk
          } catch {
            return Kk
          }
          return zk = Fk, Pk
        }()), Xk = yk(kk, Fk, Ik)
      } catch (ek) {
        throw Vk = Kk, ek
      }
      return Gk = nk, Xk
    }
    let uk = yk;

    function bk() {
      return (uk === yk ? 0 : 3) + Gk
    }

    function Rk() {
      const kk = bk();
      return uk = yk, kk
    }

    function Uk(kk) {
      uk = kk >= 3 ? pk : yk, Gk = kk % 3
    }
    const Ck = Function.prototype.toString,
      Nk = Object.getOwnPropertyDescriptor,
      ck = Object.prototype.hasOwnProperty,
      Wk = RegExp.prototype.exec,
      fk = TextEncoder.prototype.encodeInto,
      Bk = String.prototype.startsWith,
      dk = Number.prototype.toString,
      Yk = WeakMap.prototype.get,
      Ak = WeakMap.prototype.set,
      gk = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      mk = new TextEncoder,
      hk = new Uint8Array(1024),
      rk = 9999999,
      Dk = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      Mk = new WeakMap;

    function kF(kk) {
      if ("function" !== typeof kk) return "#a0.0";
      const Fk = uk(Yk, Mk, [kk]);
      if (void 0 !== Fk) return Fk;
      const Ik = uk(Ck, kk, []),
        Xk = Ik.length > rk ? rk : Ik.length,
        Tk = `#${function(kk,Fk){const Ik=uk(Wk,gk,[Fk]);if(null===Ik)return"s";const Xk=Ik[1];if("ProxyObject"===Xk)return"p";if(""!==Xk)return uk(Bk,Xk,["bound "])?"b":"n";try{const Fk=Nk(kk,"name"),Ik=void 0!==Fk&&uk(ck,Fk,["value"])?Fk.value:void 0;return"string"===typeof Ik&&uk(Bk,Ik,["bound "])?"b":"p"}catch{return"p"}}(kk,Ik)}${Xk}.${function(kk){const{written:Fk}=uk(fk,mk,[kk,hk]);let Ik=2166136261;for(let Xk=0;Xk<Fk;Xk++)Ik=(Ik^hk[Xk])>>>0,Ik=Ik+(Ik<<1)+(Ik<<4)+(Ik<<7)+(Ik<<8)+(Ik<<24)>>>0;return uk(dk,Ik,[36])}(Ik)}`;
      return uk(Ak, Mk, [kk, Tk]), Tk
    }

    function FF(kk) {
      const Fk = uk(Wk, Dk, [kk]);
      return null === Fk ? kk : Fk[1]
    }
    var IF = Ik(2809);
    const XF = Function.prototype.toString,
      TF = Object.getOwnPropertyDescriptor,
      iF = RegExp.prototype.exec,
      yF = Object.prototype.hasOwnProperty,
      lF = Set.prototype.has,
      aF = WeakMap.prototype.get,
      qF = WeakMap.prototype.set,
      LF = Reflect.get,
      tF = Object.getPrototypeOf,
      ZF = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function jF(kk, Fk, Ik) {
      return {
        code: kk,
        holder: Fk,
        key: Ik,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${Ik}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function eF() {
      return ZF
    }
    const wF = ZF?.Instance.prototype,
      HF = ZF?.Memory.prototype;

    function JF() {
      return HF
    }
    let xF, PF;
    try {
      const kk = globalThis.crypto,
        Fk = kk?.subtle;
      xF = kk ? tF(kk) : void 0, PF = Fk ? tF(Fk) : void 0
    } catch {}

    function KF(kk, Fk) {
      for (let Ik = kk; void 0 !== Ik && null !== Ik; Ik = tF(Ik)) {
        const kk = TF(Ik, Fk);
        if (kk) return kk
      }
    }
    const QF = [jF("in", eF, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), jF("is", eF, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), jF("co", eF, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), jF("cs", eF, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), jF("mo", eF, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), jF("it", eF, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), jF("me", eF, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), jF("ex", (function() {
      return wF
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), jF("bu", JF, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), jF("gr", JF, "grow", {
      tier: "punished"
    }), jF("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), jF("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), jF("su", (function() {
      return xF
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), jF("dg", (function() {
      return PF
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function sF(kk) {
      let Fk;
      try {
        const Ik = LF(globalThis, kk);
        Fk = "function" === typeof Ik ? Ik.prototype : void 0
      } catch {}
      return () => Fk
    }

    function VF(kk, Fk, Ik) {
      return Ik.map((Ik => jF(kk, Fk, Ik)))
    }
    const zF = jF("rx", sF("HTMLCanvasElement"), "getContext"),
      SF = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      oF = {
        webgpu: [...VF("gd", sF("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...VF("gq", sF("GPUQueue"), ["submit", "writeBuffer"]), ...VF("ge", sF("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...VF("gp", sF("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), zF],
        webgl: [...VF("g2", sF("WebGL2RenderingContext"), [...SF, "drawArraysInstanced", "drawElementsInstanced"]), zF],
        webgl1: [...VF("g1", sF("WebGLRenderingContext"), SF), zF]
      };
    let vF = [];
    const EF = new WeakMap;

    function OF(kk, Fk) {
      const Ik = Rk();
      try {
        uk(qF, EF, [kk, Fk])
      } finally {
        Uk(Ik)
      }
    }

    function nF(kk) {
      try {
        const Fk = aI(kk),
          Ik = uk(aF, EF, [Fk]);
        return FI(Ik, kk) ? GF(kk, !0) : `${GF(kk,!1)}${kF(Ik??Fk)}`
      } catch {
        return `${GF(kk,!1)}${kF(void 0)}`
      }
    }

    function GF(kk, Fk) {
      let {
        code: Ik,
        key: Xk
      } = kk;
      return `wh:${Ik}${Fk?"-dbg":""}:${Xk}`
    }

    function pF(kk) {
      return Object.values(oF).flatMap((Fk => Fk.map((Fk => GF(Fk, kk)))))
    }
    const uF = new Set(pF(!0)),
      bF = new Set([...pF(!1), ...uF]),
      RF = GF(zF, !1);

    function UF(kk) {
      vF = oF[kk]
    }

    function CF(kk) {
      const Fk = Rk();
      try {
        return NF(kk) || NF(FF(kk))
      } finally {
        Uk(Fk)
      }
    }

    function NF(kk) {
      return uk(lF, bF, [kk])
    }

    function cF(kk) {
      return new Set(QF.filter((Fk => Fk.tier === kk)).map((kk => `wh:${kk.code}`)))
    }
    const WF = cF("punished"),
      fF = !1,
      BF = new Set(IF.d),
      dF = cF("weighted");

    function YF(kk) {
      const Fk = Rk();
      try {
        return gF(FF(kk))
      } finally {
        Uk(Fk)
      }
    }

    function AF(kk) {
      const Fk = Rk();
      try {
        return FF(kk)
      } finally {
        Uk(Fk)
      }
    }

    function gF(kk) {
      return uk(lF, dF, [kk])
    }

    function mF(kk) {
      const Fk = Rk();
      try {
        return hF(kk)
      } finally {
        Uk(Fk)
      }
    }

    function hF(kk) {
      return uk(lF, BF, [kk])
    }

    function rF(kk) {
      return "wb" === kk || uk(lF, WF, [kk])
    }

    function DF(kk) {
      const Fk = Rk();
      try {
        return rF(kk) || hF(kk)
      } finally {
        Uk(Fk)
      }
    }

    function MF(kk) {
      const Fk = Rk();
      try {
        return "wb" === kk || fF && rF(kk)
      } finally {
        Uk(Fk)
      }
    }

    function kI(kk, Fk) {
      let {
        isGetter: Ik
      } = Fk;
      const Xk = TF(kk, Ik ? "get" : "value");
      return void 0 === Xk ? void 0 : Xk.value
    }

    function FI(kk, Fk) {
      let {
        isConstructor: Ik,
        native: Xk
      } = Fk;
      return "function" === typeof kk && (!(!Ik && uk(yF, kk, ["prototype"])) && null !== uk(iF, Xk, [uk(XF, kk, [])]))
    }

    function II(kk, Fk) {
      return FI(kk, jF("", (() => {}), Fk, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let XI = null,
      TI = !1;

    function iI() {
      try {
        return globalThis.WebAssembly === ZF
      } catch {
        return !1
      }
    }

    function yI(kk) {
      try {
        return function(kk) {
          const {
            holder: Fk,
            key: Ik,
            onNamespace: Xk,
            inSecureContext: Tk
          } = kk, ik = Fk(), yk = KF(ik, Ik);
          if (!yk) return !(Tk && !0 === globalThis.isSecureContext);
          const lk = kI(yk, kk);
          if (!FI(lk, kk)) return !1;
          if (Xk) {
            const Fk = globalThis.WebAssembly;
            if (Fk !== ik && null !== Fk && ("object" === typeof Fk || "function" === typeof Fk)) {
              const Xk = LF(Fk, Ik);
              return Xk === lk || void 0 === Xk || FI(Xk, kk)
            }
          }
          return !0
        }(kk)
      } catch {
        return !1
      }
    }

    function lI(kk) {
      const Fk = `wh:${kk.code}`;
      if ("punished" === kk.tier) return Fk;
      try {
        return `${Fk}${kF(aI(kk))}`
      } catch {
        return `${Fk}${kF(void 0)}`
      }
    }

    function aI(kk) {
      const Fk = KF(kk.holder(), kk.key),
        Ik = void 0 === Fk ? void 0 : kI(Fk, kk);
      return kk.onNamespace && !iI() && FI(Ik, kk) ? LF(globalThis.WebAssembly, kk.key) : Ik
    }

    function qI(kk) {
      if (rF(kk)) return 5;
      const Fk = FF(kk);
      return gF(Fk) ? 4 : hF(kk) ? 3 : NF(Fk) ? function(kk) {
        return uk(lF, uF, [kk])
      }(Fk) ? -1 : Fk === RF ? 0 : 1 : 2
    }

    function LI() {
      const kk = function() {
        const kk = bk();
        return Vk === xk || Vk === Pk ? (uk = pk, Gk = Ok) : uk = yk, kk
      }();
      try {
        if (null === XI || !rF(XI)) {
          const kk = function() {
            if (void 0 === ZF) return null;
            let kk = iI() ? null : "wh:wa";
            const Fk = Fk => {
              null !== Fk && (null === kk || qI(Fk) > qI(kk)) && (kk = Fk)
            };
            for (let Ik = 0; Ik < QF.length; Ik++) {
              const kk = QF[Ik];
              void 0 === kk || yI(kk) || Fk(lI(kk))
            }
            Fk((0, IF.p)());
            for (let Ik = 0; Ik < vF.length; Ik++) {
              const kk = vF[Ik];
              void 0 === kk || yI(kk) || Fk(nF(kk))
            }
            return kk
          }();
          (null === XI || null !== kk && qI(kk) > qI(XI)) && (XI = kk)
        }
      } finally {
        Uk(kk)
      }
    }

    function tI() {
      TI = !0
    }

    function ZI() {
      if (TI) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && LI(), null !== XI) return XI;
      if (void 0 === ZF) return "wn:unsupported";
      const kk = (0, Xk.n)();
      return null === kk ? null : `wn:${kk}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);