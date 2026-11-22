export const id = 77;
export const ids = [77];
export const modules = {
  4629: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Be,
      c: () => xi,
      g: () => Re,
      h: () => ii,
      j: () => ge,
      k: () => Je,
      m: () => ae,
      n: () => oe,
      r: () => ue,
      s: () => Ki,
      v: () => Mi,
      w: () => Ze,
      y: () => he
    });
    var Dk = ik(2821);
    const fk = Function.prototype.toString,
      Sk = RegExp.prototype.exec,
      bk = Reflect.apply,
      rk = Function.prototype.call,
      Pk = Function.prototype.apply,
      mk = Function.prototype.bind,
      Mk = Object.defineProperty,
      Kk = Uint8Array;
    let xk, nk;
    try {
      xk = globalThis.crypto, nk = void 0 === xk || null === xk ? void 0 : xk.getRandomValues
    } catch {}
    const Uk = "bloxdBindApply";
    let Hk;
    try {
      const kk = rk;
      Mk(kk, Uk, {
        __proto__: null,
        value: mk,
        configurable: !0
      });
      try {
        Hk = kk[Uk](Pk)
      } finally {
        delete kk[Uk]
      }
    } catch {}
    const wk = 16,
      lk = 256,
      pk = 0,
      yk = 1,
      Yk = 2,
      Lk = 3;
    let Ck, Ak = pk,
      jk = bk,
      sk = 0;

    function dk(kk, ek) {
      return kk === `function ${ek}() { [native code] }` || kk === `function ${ek}() {\n    [native code]\n}`
    }
    const Vk = 0,
      Fk = 1,
      uk = 2;
    let qk = Vk;

    function Ik(kk, ek, ik) {
      if (qk === uk && Ak === yk && ! function() {
          const kk = Ck;
          return sk >= lk && (jk(nk, xk, [kk]), sk = 0), kk[sk++] < 256 / wk
        }()) return function(kk, ek, ik) {
        return jk(kk, ek, ik ?? 0)
      }(...arguments);
      if (qk === Vk || Ak === Yk) return bk(kk, ek, ik);
      let Dk;
      qk = Vk;
      try {
        Ak === pk && (Ak = Lk, Ak = function() {
          const kk = bk(fk, bk, []);
          if (dk(kk, "apply")) return Yk;
          if (null === bk(Sk, /\(\.\.\.arguments\)/, [kk]) && null === bk(Sk, /^function\s*\(\.\.\.[\w$]+\)/, [kk])) return Yk;
          if ("function" !== typeof Hk || "function" !== typeof rk || "function" !== typeof Pk || "function" !== typeof mk || "function" !== typeof Mk || "function" !== typeof nk || "function" !== typeof Kk || !dk(bk(fk, rk, []), "call") || !dk(bk(fk, Pk, []), "apply") || !dk(bk(fk, mk, []), "bind") || !dk(bk(fk, Mk, []), "defineProperty") || !dk(bk(fk, nk, []), "getRandomValues") || !dk(bk(fk, Kk, []), "Uint8Array")) return Yk;
          const ek = Hk,
            ik = {},
            Dk = function(kk) {
              return this === ik && kk === ik
            };
          try {
            if (!0 !== ek(Dk, ik, [ik])) return Yk;
            const kk = new Kk(lk);
            ek(nk, xk, [kk]), Ck = kk
          } catch {
            return Yk
          }
          return jk = ek, yk
        }()), Dk = bk(kk, ek, ik)
      } catch (Uk) {
        throw Ak = Yk, Uk
      }
      return qk = uk, Dk
    }
    let zk = bk;

    function Qk() {
      return (zk === bk ? 0 : 3) + qk
    }

    function vk() {
      const kk = Qk();
      return zk = bk, kk
    }

    function Ek(kk) {
      zk = kk >= 3 ? Ik : bk, qk = kk % 3
    }
    const hk = Function.prototype.toString,
      ak = Object.getOwnPropertyDescriptor,
      Wk = Object.prototype.hasOwnProperty,
      tk = RegExp.prototype.exec,
      Xk = TextEncoder.prototype.encodeInto,
      Bk = String.prototype.startsWith,
      ck = Number.prototype.toString,
      Tk = WeakMap.prototype.get,
      Zk = WeakMap.prototype.set,
      Ok = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      gk = new TextEncoder,
      Gk = new Uint8Array(1024),
      Nk = 9999999,
      Rk = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      Jk = new WeakMap;

    function ke(kk) {
      if ("function" !== typeof kk) return "#a0.0";
      const ek = zk(Tk, Jk, [kk]);
      if (void 0 !== ek) return ek;
      const ik = zk(hk, kk, []),
        Dk = ik.length > Nk ? Nk : ik.length,
        fk = `#${function(kk,ek){const ik=zk(tk,Ok,[ek]);if(null===ik)return"s";const Dk=ik[1];if("ProxyObject"===Dk)return"p";if(""!==Dk)return zk(Bk,Dk,["bound "])?"b":"n";try{const ek=ak(kk,"name"),ik=void 0!==ek&&zk(Wk,ek,["value"])?ek.value:void 0;return"string"===typeof ik&&zk(Bk,ik,["bound "])?"b":"p"}catch{return"p"}}(kk,ik)}${Dk}.${function(kk){const{written:ek}=zk(Xk,gk,[kk,Gk]);let ik=2166136261;for(let Dk=0;Dk<ek;Dk++)ik=(ik^Gk[Dk])>>>0,ik=ik+(ik<<1)+(ik<<4)+(ik<<7)+(ik<<8)+(ik<<24)>>>0;return zk(ck,ik,[36])}(ik)}`;
      return zk(Zk, Jk, [kk, fk]), fk
    }

    function ee(kk) {
      const ek = zk(tk, Rk, [kk]);
      return null === ek ? kk : ek[1]
    }
    var ie = ik(2835);
    const De = Function.prototype.toString,
      fe = Object.getOwnPropertyDescriptor,
      Se = RegExp.prototype.exec,
      be = Object.prototype.hasOwnProperty,
      re = Set.prototype.has,
      Pe = WeakMap.prototype.get,
      me = WeakMap.prototype.set,
      Me = Reflect.get,
      Ke = Object.getPrototypeOf,
      xe = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function ne(kk, ek, ik) {
      return {
        code: kk,
        holder: ek,
        key: ik,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${ik}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function Ue() {
      return xe
    }
    const He = xe?.Instance.prototype,
      we = xe?.Memory.prototype;

    function le() {
      return we
    }
    let pe, ye;
    try {
      const kk = globalThis.crypto,
        ek = kk?.subtle;
      pe = kk ? Ke(kk) : void 0, ye = ek ? Ke(ek) : void 0
    } catch {}

    function Ye(kk, ek) {
      for (let ik = kk; void 0 !== ik && null !== ik; ik = Ke(ik)) {
        const kk = fe(ik, ek);
        if (kk) return kk
      }
    }
    const Le = [ne("in", Ue, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), ne("is", Ue, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), ne("co", Ue, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), ne("cs", Ue, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), ne("mo", Ue, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), ne("it", Ue, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), ne("me", Ue, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), ne("ex", (function() {
      return He
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), ne("bu", le, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), ne("gr", le, "grow", {
      tier: "punished"
    }), ne("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), ne("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), ne("su", (function() {
      return pe
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), ne("dg", (function() {
      return ye
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function Ce(kk) {
      let ek;
      try {
        const ik = Me(globalThis, kk);
        ek = "function" === typeof ik ? ik.prototype : void 0
      } catch {}
      return () => ek
    }

    function Ae(kk, ek, ik) {
      return ik.map((ik => ne(kk, ek, ik)))
    }
    const je = ne("rx", Ce("HTMLCanvasElement"), "getContext"),
      se = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      de = {
        webgpu: [...Ae("gd", Ce("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...Ae("gq", Ce("GPUQueue"), ["submit", "writeBuffer"]), ...Ae("ge", Ce("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...Ae("gp", Ce("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), je],
        webgl: [...Ae("g2", Ce("WebGL2RenderingContext"), [...se, "drawArraysInstanced", "drawElementsInstanced"]), je],
        webgl1: [...Ae("g1", Ce("WebGLRenderingContext"), se), je]
      };
    let Ve = [];
    const Fe = new WeakMap;

    function ue(kk, ek) {
      const ik = vk();
      try {
        zk(me, Fe, [kk, ek])
      } finally {
        Ek(ik)
      }
    }

    function qe(kk) {
      try {
        const ek = Pi(kk),
          ik = zk(Pe, Fe, [ek]);
        return ei(ik, kk) ? Ie(kk, !0) : `${Ie(kk,!1)}${ke(ik??ek)}`
      } catch {
        return `${Ie(kk,!1)}${ke(void 0)}`
      }
    }

    function Ie(kk, ek) {
      let {
        code: ik,
        key: Dk
      } = kk;
      return `wh:${ik}${ek?"-dbg":""}:${Dk}`
    }

    function ze(kk) {
      return Object.values(de).flatMap((ek => ek.map((ek => Ie(ek, kk)))))
    }
    const Qe = new Set(ze(!0)),
      ve = new Set([...ze(!1), ...Qe]),
      Ee = Ie(je, !1);

    function he(kk) {
      Ve = de[kk]
    }

    function ae(kk) {
      const ek = vk();
      try {
        return We(kk) || We(ee(kk))
      } finally {
        Ek(ek)
      }
    }

    function We(kk) {
      return zk(re, ve, [kk])
    }

    function te(kk) {
      return new Set(Le.filter((ek => ek.tier === kk)).map((kk => `wh:${kk.code}`)))
    }
    const Xe = te("punished"),
      Be = !1,
      ce = new Set(ie.c),
      Te = te("weighted");

    function oe(kk) {
      const ek = vk();
      try {
        return Oe(ee(kk))
      } finally {
        Ek(ek)
      }
    }

    function Ze(kk) {
      const ek = vk();
      try {
        return ee(kk)
      } finally {
        Ek(ek)
      }
    }

    function Oe(kk) {
      return zk(re, Te, [kk])
    }

    function ge(kk) {
      const ek = vk();
      try {
        return Ge(kk)
      } finally {
        Ek(ek)
      }
    }

    function Ge(kk) {
      return zk(re, ce, [kk])
    }

    function Ne(kk) {
      return "wb" === kk || zk(re, Xe, [kk])
    }

    function Re(kk) {
      const ek = vk();
      try {
        return Ne(kk) || Ge(kk)
      } finally {
        Ek(ek)
      }
    }

    function Je(kk) {
      const ek = vk();
      try {
        return "wb" === kk || Be && Ne(kk)
      } finally {
        Ek(ek)
      }
    }

    function ki(kk, ek) {
      let {
        isGetter: ik
      } = ek;
      const Dk = fe(kk, ik ? "get" : "value");
      return void 0 === Dk ? void 0 : Dk.value
    }

    function ei(kk, ek) {
      let {
        isConstructor: ik,
        native: Dk
      } = ek;
      return "function" === typeof kk && (!(!ik && zk(be, kk, ["prototype"])) && null !== zk(Se, Dk, [zk(De, kk, [])]))
    }

    function ii(kk, ek) {
      return ei(kk, ne("", (() => {}), ek, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let Di = null,
      fi = !1;

    function Si() {
      try {
        return globalThis.WebAssembly === xe
      } catch {
        return !1
      }
    }

    function bi(kk) {
      try {
        return function(kk) {
          const {
            holder: ek,
            key: ik,
            onNamespace: Dk,
            inSecureContext: fk
          } = kk, Sk = ek(), bk = Ye(Sk, ik);
          if (!bk) return !(fk && !0 === globalThis.isSecureContext);
          const rk = ki(bk, kk);
          if (!ei(rk, kk)) return !1;
          if (Dk) {
            const ek = globalThis.WebAssembly;
            if (ek !== Sk && null !== ek && ("object" === typeof ek || "function" === typeof ek)) {
              const Dk = Me(ek, ik);
              return Dk === rk || void 0 === Dk || ei(Dk, kk)
            }
          }
          return !0
        }(kk)
      } catch {
        return !1
      }
    }

    function ri(kk) {
      const ek = `wh:${kk.code}`;
      if ("punished" === kk.tier) return ek;
      try {
        return `${ek}${ke(Pi(kk))}`
      } catch {
        return `${ek}${ke(void 0)}`
      }
    }

    function Pi(kk) {
      const ek = Ye(kk.holder(), kk.key),
        ik = void 0 === ek ? void 0 : ki(ek, kk);
      return kk.onNamespace && !Si() && ei(ik, kk) ? Me(globalThis.WebAssembly, kk.key) : ik
    }

    function mi(kk) {
      if (Ne(kk)) return 5;
      const ek = ee(kk);
      return Oe(ek) ? 4 : Ge(kk) ? 3 : We(ek) ? function(kk) {
        return zk(re, Qe, [kk])
      }(ek) ? -1 : ek === Ee ? 0 : 1 : 2
    }

    function Mi() {
      const kk = function() {
        const kk = Qk();
        return Ak === pk || Ak === yk ? (zk = Ik, qk = Fk) : zk = bk, kk
      }();
      try {
        if (null === Di || !Ne(Di)) {
          const kk = function() {
            if (void 0 === xe) return null;
            let kk = Si() ? null : "wh:wa";
            const ek = ek => {
              null !== ek && (null === kk || mi(ek) > mi(kk)) && (kk = ek)
            };
            for (let ik = 0; ik < Le.length; ik++) {
              const kk = Le[ik];
              void 0 === kk || bi(kk) || ek(ri(kk))
            }
            ek((0, ie.j)());
            for (let ik = 0; ik < Ve.length; ik++) {
              const kk = Ve[ik];
              void 0 === kk || bi(kk) || ek(qe(kk))
            }
            return kk
          }();
          (null === Di || null !== kk && mi(kk) > mi(Di)) && (Di = kk)
        }
      } finally {
        Ek(kk)
      }
    }

    function Ki() {
      fi = !0
    }

    function xi() {
      if (fi) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Mi(), null !== Di) return Di;
      if (void 0 === xe) return "wn:unsupported";
      const kk = (0, Dk.t)();
      return null === kk ? null : `wn:${kk}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);