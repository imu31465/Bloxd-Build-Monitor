export const id = 74;
export const ids = [74];
export const modules = {
  4425: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => qF,
      e: () => JB,
      i: () => IF,
      j: () => BB,
      m: () => jF,
      o: () => QF,
      q: () => DF,
      s: () => pF,
      t: () => uF,
      v: () => VB,
      x: () => sB,
      z: () => KF,
      A: () => rF
    });
    var Rk = Bk(3502);
    const tk = Function.prototype.toString,
      ak = RegExp.prototype.exec,
      Xk = Reflect.apply,
      bk = Function.prototype.call,
      wk = Function.prototype.apply,
      dk = Function.prototype.bind,
      sk = Object.defineProperty,
      Vk = Uint8Array;
    let Jk, Ak;
    try {
      Jk = globalThis.crypto, Ak = void 0 === Jk || null === Jk ? void 0 : Jk.getRandomValues
    } catch {}
    const ek = "bloxdBindApply";
    let yk;
    try {
      const kk = bk;
      sk(kk, ek, {
        __proto__: null,
        value: dk,
        configurable: !0
      });
      try {
        yk = kk[ek](wk)
      } finally {
        delete kk[ek]
      }
    } catch {}
    const fk = 16,
      mk = 256,
      Wk = 0,
      vk = 1,
      ik = 2,
      Yk = 3;
    let Lk, Ok = Wk,
      Ek = Xk,
      Sk = 0;

    function Nk(kk, Fk) {
      return kk === `function ${Fk}() { [native code] }` || kk === `function ${Fk}() {\n    [native code]\n}`
    }
    const Hk = 0,
      uk = 1,
      Mk = 2;
    let gk = Hk;

    function Uk(kk, Fk, Bk) {
      if (gk === Mk && Ok === vk && ! function() {
          const kk = Lk;
          return Sk >= mk && (Ek(Ak, Jk, [kk]), Sk = 0), kk[Sk++] < 256 / fk
        }()) return function(kk, Fk, Bk) {
        return Ek(kk, Fk, Bk ?? 0)
      }(...arguments);
      if (gk === Hk || Ok === ik) return Xk(kk, Fk, Bk);
      let Rk;
      gk = Hk;
      try {
        Ok === Wk && (Ok = Yk, Ok = function() {
          const kk = Xk(tk, Xk, []);
          if (Nk(kk, "apply")) return ik;
          if (null === Xk(ak, /\(\.\.\.arguments\)/, [kk]) && null === Xk(ak, /^function\s*\(\.\.\.[\w$]+\)/, [kk])) return ik;
          if ("function" !== typeof yk || "function" !== typeof bk || "function" !== typeof wk || "function" !== typeof dk || "function" !== typeof sk || "function" !== typeof Ak || "function" !== typeof Vk || !Nk(Xk(tk, bk, []), "call") || !Nk(Xk(tk, wk, []), "apply") || !Nk(Xk(tk, dk, []), "bind") || !Nk(Xk(tk, sk, []), "defineProperty") || !Nk(Xk(tk, Ak, []), "getRandomValues") || !Nk(Xk(tk, Vk, []), "Uint8Array")) return ik;
          const Fk = yk,
            Bk = {},
            Rk = function(kk) {
              return this === Bk && kk === Bk
            };
          try {
            if (!0 !== Fk(Rk, Bk, [Bk])) return ik;
            const kk = new Vk(mk);
            Fk(Ak, Jk, [kk]), Lk = kk
          } catch {
            return ik
          }
          return Ek = Fk, vk
        }()), Rk = Xk(kk, Fk, Bk)
      } catch (ek) {
        throw Ok = ik, ek
      }
      return gk = Mk, Rk
    }
    let ck = Xk;

    function Gk() {
      return (ck === Xk ? 0 : 3) + gk
    }

    function Tk() {
      const kk = Gk();
      return ck = Xk, kk
    }

    function rk(kk) {
      ck = kk >= 3 ? Uk : Xk, gk = kk % 3
    }
    const Dk = Function.prototype.toString,
      zk = Object.getOwnPropertyDescriptor,
      Pk = Object.prototype.hasOwnProperty,
      hk = RegExp.prototype.exec,
      qk = TextEncoder.prototype.encodeInto,
      Ck = String.prototype.startsWith,
      Zk = Number.prototype.toString,
      pk = WeakMap.prototype.get,
      Kk = WeakMap.prototype.set,
      xk = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      jk = new TextEncoder,
      lk = new Uint8Array(1024),
      nk = 9999999,
      Ik = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      Qk = new WeakMap;

    function kF(kk) {
      if ("function" !== typeof kk) return "#a0.0";
      const Fk = ck(pk, Qk, [kk]);
      if (void 0 !== Fk) return Fk;
      const Bk = ck(Dk, kk, []),
        Rk = Bk.length > nk ? nk : Bk.length,
        tk = `#${function(kk,Fk){const Bk=ck(hk,xk,[Fk]);if(null===Bk)return"s";const Rk=Bk[1];if("ProxyObject"===Rk)return"p";if(""!==Rk)return ck(Ck,Rk,["bound "])?"b":"n";try{const Fk=zk(kk,"name"),Bk=void 0!==Fk&&ck(Pk,Fk,["value"])?Fk.value:void 0;return"string"===typeof Bk&&ck(Ck,Bk,["bound "])?"b":"p"}catch{return"p"}}(kk,Bk)}${Rk}.${function(kk){const{written:Fk}=ck(qk,jk,[kk,lk]);let Bk=2166136261;for(let Rk=0;Rk<Fk;Rk++)Bk=(Bk^lk[Rk])>>>0,Bk=Bk+(Bk<<1)+(Bk<<4)+(Bk<<7)+(Bk<<8)+(Bk<<24)>>>0;return ck(Zk,Bk,[36])}(Bk)}`;
      return ck(Kk, Qk, [kk, tk]), tk
    }

    function FF(kk) {
      const Fk = ck(hk, Ik, [kk]);
      return null === Fk ? kk : Fk[1]
    }
    var BF = Bk(3508);
    const RF = Function.prototype.toString,
      tF = Object.getOwnPropertyDescriptor,
      aF = RegExp.prototype.exec,
      XF = Object.prototype.hasOwnProperty,
      bF = Set.prototype.has,
      wF = WeakMap.prototype.get,
      dF = WeakMap.prototype.set,
      sF = Reflect.get,
      VF = Object.getPrototypeOf,
      JF = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function AF(kk, Fk, Bk) {
      return {
        code: kk,
        holder: Fk,
        key: Bk,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${Bk}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function eF() {
      return JF
    }
    const yF = JF?.Instance.prototype,
      fF = JF?.Memory.prototype;

    function mF() {
      return fF
    }
    let WF, vF;
    try {
      const kk = globalThis.crypto,
        Fk = kk?.subtle;
      WF = kk ? VF(kk) : void 0, vF = Fk ? VF(Fk) : void 0
    } catch {}

    function iF(kk, Fk) {
      for (let Bk = kk; void 0 !== Bk && null !== Bk; Bk = VF(Bk)) {
        const kk = tF(Bk, Fk);
        if (kk) return kk
      }
    }
    const YF = [AF("in", eF, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), AF("is", eF, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), AF("co", eF, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), AF("cs", eF, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), AF("mo", eF, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), AF("it", eF, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), AF("me", eF, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), AF("ex", (function() {
      return yF
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), AF("bu", mF, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), AF("gr", mF, "grow", {
      tier: "punished"
    }), AF("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), AF("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), AF("su", (function() {
      return WF
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), AF("dg", (function() {
      return vF
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function oF(kk) {
      let Fk;
      try {
        const Bk = sF(globalThis, kk);
        Fk = "function" === typeof Bk ? Bk.prototype : void 0
      } catch {}
      return () => Fk
    }

    function LF(kk, Fk, Bk) {
      return Bk.map((Bk => AF(kk, Fk, Bk)))
    }
    const OF = AF("rx", oF("HTMLCanvasElement"), "getContext"),
      EF = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      SF = {
        webgpu: [...LF("gd", oF("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...LF("gq", oF("GPUQueue"), ["submit", "writeBuffer"]), ...LF("ge", oF("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...LF("gp", oF("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), OF],
        webgl: [...LF("g2", oF("WebGL2RenderingContext"), [...EF, "drawArraysInstanced", "drawElementsInstanced"]), OF],
        webgl1: [...LF("g1", oF("WebGLRenderingContext"), EF), OF]
      };
    let NF = [];
    const HF = new WeakMap;

    function uF(kk, Fk) {
      const Bk = Tk();
      try {
        ck(dF, HF, [kk, Fk])
      } finally {
        rk(Bk)
      }
    }

    function MF(kk) {
      try {
        const Fk = wB(kk),
          Bk = ck(wF, HF, [Fk]);
        return FB(Bk, kk) ? gF(kk, !0) : `${gF(kk,!1)}${kF(Bk??Fk)}`
      } catch {
        return `${gF(kk,!1)}${kF(void 0)}`
      }
    }

    function gF(kk, Fk) {
      let {
        code: Bk,
        key: Rk
      } = kk;
      return `wh:${Bk}${Fk?"-dbg":""}:${Rk}`
    }

    function UF(kk) {
      return Object.values(SF).flatMap((Fk => Fk.map((Fk => gF(Fk, kk)))))
    }
    const cF = new Set(UF(!0)),
      GF = new Set([...UF(!1), ...cF]),
      TF = gF(OF, !1);

    function rF(kk) {
      NF = SF[kk]
    }

    function DF(kk) {
      const Fk = Tk();
      try {
        return zF(kk) || zF(FF(kk))
      } finally {
        rk(Fk)
      }
    }

    function zF(kk) {
      return ck(bF, GF, [kk])
    }

    function PF(kk) {
      return new Set(YF.filter((Fk => Fk.tier === kk)).map((kk => `wh:${kk.code}`)))
    }
    const hF = PF("punished"),
      qF = !1,
      CF = new Set(BF.d),
      ZF = PF("weighted");

    function pF(kk) {
      const Fk = Tk();
      try {
        return xF(FF(kk))
      } finally {
        rk(Fk)
      }
    }

    function KF(kk) {
      const Fk = Tk();
      try {
        return FF(kk)
      } finally {
        rk(Fk)
      }
    }

    function xF(kk) {
      return ck(bF, ZF, [kk])
    }

    function jF(kk) {
      const Fk = Tk();
      try {
        return lF(kk)
      } finally {
        rk(Fk)
      }
    }

    function lF(kk) {
      return ck(bF, CF, [kk])
    }

    function nF(kk) {
      return "wb" === kk || ck(bF, hF, [kk])
    }

    function IF(kk) {
      const Fk = Tk();
      try {
        return nF(kk) || lF(kk)
      } finally {
        rk(Fk)
      }
    }

    function QF(kk) {
      const Fk = Tk();
      try {
        return "wb" === kk || qF && nF(kk)
      } finally {
        rk(Fk)
      }
    }

    function kB(kk, Fk) {
      let {
        isGetter: Bk
      } = Fk;
      const Rk = tF(kk, Bk ? "get" : "value");
      return void 0 === Rk ? void 0 : Rk.value
    }

    function FB(kk, Fk) {
      let {
        isConstructor: Bk,
        native: Rk
      } = Fk;
      return "function" === typeof kk && (!(!Bk && ck(XF, kk, ["prototype"])) && null !== ck(aF, Rk, [ck(RF, kk, [])]))
    }

    function BB(kk, Fk) {
      return FB(kk, AF("", (() => {}), Fk, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let RB = null,
      tB = !1;

    function aB() {
      try {
        return globalThis.WebAssembly === JF
      } catch {
        return !1
      }
    }

    function XB(kk) {
      try {
        return function(kk) {
          const {
            holder: Fk,
            key: Bk,
            onNamespace: Rk,
            inSecureContext: tk
          } = kk, ak = Fk(), Xk = iF(ak, Bk);
          if (!Xk) return !(tk && !0 === globalThis.isSecureContext);
          const bk = kB(Xk, kk);
          if (!FB(bk, kk)) return !1;
          if (Rk) {
            const Fk = globalThis.WebAssembly;
            if (Fk !== ak && null !== Fk && ("object" === typeof Fk || "function" === typeof Fk)) {
              const Rk = sF(Fk, Bk);
              return Rk === bk || void 0 === Rk || FB(Rk, kk)
            }
          }
          return !0
        }(kk)
      } catch {
        return !1
      }
    }

    function bB(kk) {
      const Fk = `wh:${kk.code}`;
      if ("punished" === kk.tier) return Fk;
      try {
        return `${Fk}${kF(wB(kk))}`
      } catch {
        return `${Fk}${kF(void 0)}`
      }
    }

    function wB(kk) {
      const Fk = iF(kk.holder(), kk.key),
        Bk = void 0 === Fk ? void 0 : kB(Fk, kk);
      return kk.onNamespace && !aB() && FB(Bk, kk) ? sF(globalThis.WebAssembly, kk.key) : Bk
    }

    function dB(kk) {
      if (nF(kk)) return 5;
      const Fk = FF(kk);
      return xF(Fk) ? 4 : lF(kk) ? 3 : zF(Fk) ? function(kk) {
        return ck(bF, cF, [kk])
      }(Fk) ? -1 : Fk === TF ? 0 : 1 : 2
    }

    function sB() {
      const kk = function() {
        const kk = Gk();
        return Ok === Wk || Ok === vk ? (ck = Uk, gk = uk) : ck = Xk, kk
      }();
      try {
        if (null === RB || !nF(RB)) {
          const kk = function() {
            if (void 0 === JF) return null;
            let kk = aB() ? null : "wh:wa";
            const Fk = Fk => {
              null !== Fk && (null === kk || dB(Fk) > dB(kk)) && (kk = Fk)
            };
            for (let Bk = 0; Bk < YF.length; Bk++) {
              const kk = YF[Bk];
              void 0 === kk || XB(kk) || Fk(bB(kk))
            }
            Fk((0, BF.l)());
            for (let Bk = 0; Bk < NF.length; Bk++) {
              const kk = NF[Bk];
              void 0 === kk || XB(kk) || Fk(MF(kk))
            }
            return kk
          }();
          (null === RB || null !== kk && dB(kk) > dB(RB)) && (RB = kk)
        }
      } finally {
        rk(kk)
      }
    }

    function VB() {
      tB = !0
    }

    function JB() {
      if (tB) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && sB(), null !== RB) return RB;
      if (void 0 === JF) return "wn:unsupported";
      const kk = (0, Rk.i)();
      return null === kk ? null : `wn:${kk}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);