export const id = 78;
export const ids = [78];
export const modules = {
  4851: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ue,
      h: () => lV,
      k: () => se,
      l: () => VV,
      o: () => xe,
      p: () => ne,
      r: () => Ge,
      u: () => Ye,
      v: () => ce,
      y: () => QV,
      z: () => XV,
      B: () => Be,
      D: () => ke
    });
    var Ot = Vt(2961);
    const qt = Function.prototype.toString,
      Dt = RegExp.prototype.exec,
      mt = Reflect.apply,
      dt = Function.prototype.call,
      jt = Function.prototype.apply,
      Ht = Function.prototype.bind,
      Xt = Object.defineProperty,
      Qt = Uint8Array;
    let lt, Et;
    try {
      lt = globalThis.crypto, Et = void 0 === lt || null === lt ? void 0 : lt.getRandomValues
    } catch {}
    const ft = "bloxdBindApply";
    let wt;
    try {
      const tt = dt;
      Xt(tt, ft, {
        __proto__: null,
        value: Ht,
        configurable: !0
      });
      try {
        wt = tt[ft](jt)
      } finally {
        delete tt[ft]
      }
    } catch {}
    const yt = 16,
      Nt = 256,
      Mt = 0,
      bt = 1,
      Jt = 2,
      Ct = 3;
    let ut, Kt = Mt,
      ht = mt,
      vt = 0;

    function Wt(tt, et) {
      return tt === `function ${et}() { [native code] }` || tt === `function ${et}() {\n    [native code]\n}`
    }
    const St = 0,
      ct = 1,
      Rt = 2;
    let It = St;

    function Pt(tt, et, Vt) {
      if (It === Rt && Kt === bt && ! function() {
          const tt = ut;
          return vt >= Nt && (ht(Et, lt, [tt]), vt = 0), tt[vt++] < 256 / yt
        }()) return function(tt, et, Vt) {
        return ht(tt, et, Vt ?? 0)
      }(...arguments);
      if (It === St || Kt === Jt) return mt(tt, et, Vt);
      let Ot;
      It = St;
      try {
        Kt === Mt && (Kt = Ct, Kt = function() {
          const tt = mt(qt, mt, []);
          if (Wt(tt, "apply")) return Jt;
          if (null === mt(Dt, /\(\.\.\.arguments\)/, [tt]) && null === mt(Dt, /^function\s*\(\.\.\.[\w$]+\)/, [tt])) return Jt;
          if ("function" !== typeof wt || "function" !== typeof dt || "function" !== typeof jt || "function" !== typeof Ht || "function" !== typeof Xt || "function" !== typeof Et || "function" !== typeof Qt || !Wt(mt(qt, dt, []), "call") || !Wt(mt(qt, jt, []), "apply") || !Wt(mt(qt, Ht, []), "bind") || !Wt(mt(qt, Xt, []), "defineProperty") || !Wt(mt(qt, Et, []), "getRandomValues") || !Wt(mt(qt, Qt, []), "Uint8Array")) return Jt;
          const et = wt,
            Vt = {},
            Ot = function(tt) {
              return this === Vt && tt === Vt
            };
          try {
            if (!0 !== et(Ot, Vt, [Vt])) return Jt;
            const tt = new Qt(Nt);
            et(Et, lt, [tt]), ut = tt
          } catch {
            return Jt
          }
          return ht = et, bt
        }()), Ot = mt(tt, et, Vt)
      } catch (ft) {
        throw Kt = Jt, ft
      }
      return It = Rt, Ot
    }
    let Zt = mt;

    function Lt() {
      return (Zt === mt ? 0 : 3) + It
    }

    function Ft() {
      const tt = Lt();
      return Zt = mt, tt
    }

    function kt(tt) {
      Zt = tt >= 3 ? Pt : mt, It = tt % 3
    }
    const Gt = Function.prototype.toString,
      zt = Object.getOwnPropertyDescriptor,
      ot = Object.prototype.hasOwnProperty,
      rt = RegExp.prototype.exec,
      Ut = TextEncoder.prototype.encodeInto,
      At = String.prototype.startsWith,
      it = Number.prototype.toString,
      Yt = WeakMap.prototype.get,
      Bt = WeakMap.prototype.set,
      pt = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      xt = new TextEncoder,
      Tt = new Uint8Array(1024),
      gt = 9999999,
      st = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      nt = new WeakMap;

    function te(tt) {
      if ("function" !== typeof tt) return "#a0.0";
      const et = Zt(Yt, nt, [tt]);
      if (void 0 !== et) return et;
      const Vt = Zt(Gt, tt, []),
        Ot = Vt.length > gt ? gt : Vt.length,
        qt = `#${function(tt,et){const Vt=Zt(rt,pt,[et]);if(null===Vt)return"s";const Ot=Vt[1];if("ProxyObject"===Ot)return"p";if(""!==Ot)return Zt(At,Ot,["bound "])?"b":"n";try{const et=zt(tt,"name"),Vt=void 0!==et&&Zt(ot,et,["value"])?et.value:void 0;return"string"===typeof Vt&&Zt(At,Vt,["bound "])?"b":"p"}catch{return"p"}}(tt,Vt)}${Ot}.${function(tt){const{written:et}=Zt(Ut,xt,[tt,Tt]);let Vt=2166136261;for(let Ot=0;Ot<et;Ot++)Vt=(Vt^Tt[Ot])>>>0,Vt=Vt+(Vt<<1)+(Vt<<4)+(Vt<<7)+(Vt<<8)+(Vt<<24)>>>0;return Zt(it,Vt,[36])}(Vt)}`;
      return Zt(Bt, nt, [tt, qt]), qt
    }

    function ee(tt) {
      const et = Zt(rt, st, [tt]);
      return null === et ? tt : et[1]
    }
    var Ve = Vt(2972);
    const Oe = Function.prototype.toString,
      qe = Object.getOwnPropertyDescriptor,
      De = RegExp.prototype.exec,
      me = Object.prototype.hasOwnProperty,
      de = Set.prototype.has,
      je = WeakMap.prototype.get,
      He = WeakMap.prototype.set,
      Xe = Reflect.get,
      Qe = Object.getPrototypeOf,
      le = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function Ee(tt, et, Vt) {
      return {
        code: tt,
        holder: et,
        key: Vt,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${Vt}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function fe() {
      return le
    }
    const we = le?.Instance.prototype,
      ye = le?.Memory.prototype;

    function Ne() {
      return ye
    }
    let ae, Me;
    try {
      const tt = globalThis.crypto,
        et = tt?.subtle;
      ae = tt ? Qe(tt) : void 0, Me = et ? Qe(et) : void 0
    } catch {}

    function be(tt, et) {
      for (let Vt = tt; void 0 !== Vt && null !== Vt; Vt = Qe(Vt)) {
        const tt = qe(Vt, et);
        if (tt) return tt
      }
    }
    const Je = [Ee("in", fe, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), Ee("is", fe, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Ee("co", fe, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), Ee("cs", fe, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Ee("mo", fe, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Ee("it", fe, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Ee("me", fe, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Ee("ex", (function() {
      return we
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), Ee("bu", Ne, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), Ee("gr", Ne, "grow", {
      tier: "punished"
    }), Ee("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), Ee("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Ee("su", (function() {
      return ae
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Ee("dg", (function() {
      return Me
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function Ce(tt) {
      let et;
      try {
        const Vt = Xe(globalThis, tt);
        et = "function" === typeof Vt ? Vt.prototype : void 0
      } catch {}
      return () => et
    }

    function ue(tt, et, Vt) {
      return Vt.map((Vt => Ee(tt, et, Vt)))
    }
    const Ke = Ee("rx", Ce("HTMLCanvasElement"), "getContext"),
      he = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      ve = {
        webgpu: [...ue("gd", Ce("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...ue("gq", Ce("GPUQueue"), ["submit", "writeBuffer"]), ...ue("ge", Ce("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...ue("gp", Ce("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), Ke],
        webgl: [...ue("g2", Ce("WebGL2RenderingContext"), [...he, "drawArraysInstanced", "drawElementsInstanced"]), Ke],
        webgl1: [...ue("g1", Ce("WebGLRenderingContext"), he), Ke]
      };
    let We = [];
    const Se = new WeakMap;

    function ce(tt, et) {
      const Vt = Ft();
      try {
        Zt(He, Se, [tt, et])
      } finally {
        kt(Vt)
      }
    }

    function Re(tt) {
      try {
        const et = jV(tt),
          Vt = Zt(je, Se, [et]);
        return eV(Vt, tt) ? Ie(tt, !0) : `${Ie(tt,!1)}${te(Vt??et)}`
      } catch {
        return `${Ie(tt,!1)}${te(void 0)}`
      }
    }

    function Ie(tt, et) {
      let {
        code: Vt,
        key: Ot
      } = tt;
      return `wh:${Vt}${et?"-dbg":""}:${Ot}`
    }

    function Pe(tt) {
      return Object.values(ve).flatMap((et => et.map((et => Ie(et, tt)))))
    }
    const Ze = new Set(Pe(!0)),
      Le = new Set([...Pe(!1), ...Ze]),
      Fe = Ie(Ke, !1);

    function ke(tt) {
      We = ve[tt]
    }

    function Ge(tt) {
      const et = Ft();
      try {
        return ze(tt) || ze(ee(tt))
      } finally {
        kt(et)
      }
    }

    function ze(tt) {
      return Zt(de, Le, [tt])
    }

    function oe(tt) {
      return new Set(Je.filter((et => et.tier === tt)).map((tt => `wh:${tt.code}`)))
    }
    const re = oe("punished"),
      Ue = !1,
      Ae = new Set(Ve.c),
      ie = oe("weighted");

    function Ye(tt) {
      const et = Ft();
      try {
        return pe(ee(tt))
      } finally {
        kt(et)
      }
    }

    function Be(tt) {
      const et = Ft();
      try {
        return ee(tt)
      } finally {
        kt(et)
      }
    }

    function pe(tt) {
      return Zt(de, ie, [tt])
    }

    function xe(tt) {
      const et = Ft();
      try {
        return Te(tt)
      } finally {
        kt(et)
      }
    }

    function Te(tt) {
      return Zt(de, Ae, [tt])
    }

    function ge(tt) {
      return "wb" === tt || Zt(de, re, [tt])
    }

    function se(tt) {
      const et = Ft();
      try {
        return ge(tt) || Te(tt)
      } finally {
        kt(et)
      }
    }

    function ne(tt) {
      const et = Ft();
      try {
        return "wb" === tt || Ue && ge(tt)
      } finally {
        kt(et)
      }
    }

    function tV(tt, et) {
      let {
        isGetter: Vt
      } = et;
      const Ot = qe(tt, Vt ? "get" : "value");
      return void 0 === Ot ? void 0 : Ot.value
    }

    function eV(tt, et) {
      let {
        isConstructor: Vt,
        native: Ot
      } = et;
      return "function" === typeof tt && (!(!Vt && Zt(me, tt, ["prototype"])) && null !== Zt(De, Ot, [Zt(Oe, tt, [])]))
    }

    function VV(tt, et) {
      return eV(tt, Ee("", (() => {}), et, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let OV = null,
      qV = !1;

    function DV() {
      try {
        return globalThis.WebAssembly === le
      } catch {
        return !1
      }
    }

    function mV(tt) {
      try {
        return function(tt) {
          const {
            holder: et,
            key: Vt,
            onNamespace: Ot,
            inSecureContext: qt
          } = tt, Dt = et(), mt = be(Dt, Vt);
          if (!mt) return !(qt && !0 === globalThis.isSecureContext);
          const dt = tV(mt, tt);
          if (!eV(dt, tt)) return !1;
          if (Ot) {
            const et = globalThis.WebAssembly;
            if (et !== Dt && null !== et && ("object" === typeof et || "function" === typeof et)) {
              const Ot = Xe(et, Vt);
              return Ot === dt || void 0 === Ot || eV(Ot, tt)
            }
          }
          return !0
        }(tt)
      } catch {
        return !1
      }
    }

    function dV(tt) {
      const et = `wh:${tt.code}`;
      if ("punished" === tt.tier) return et;
      try {
        return `${et}${te(jV(tt))}`
      } catch {
        return `${et}${te(void 0)}`
      }
    }

    function jV(tt) {
      const et = be(tt.holder(), tt.key),
        Vt = void 0 === et ? void 0 : tV(et, tt);
      return tt.onNamespace && !DV() && eV(Vt, tt) ? Xe(globalThis.WebAssembly, tt.key) : Vt
    }

    function HV(tt) {
      if (ge(tt)) return 5;
      const et = ee(tt);
      return pe(et) ? 4 : Te(tt) ? 3 : ze(et) ? function(tt) {
        return Zt(de, Ze, [tt])
      }(et) ? -1 : et === Fe ? 0 : 1 : 2
    }

    function XV() {
      const tt = function() {
        const tt = Lt();
        return Kt === Mt || Kt === bt ? (Zt = Pt, It = ct) : Zt = mt, tt
      }();
      try {
        if (null === OV || !ge(OV)) {
          const tt = function() {
            if (void 0 === le) return null;
            let tt = DV() ? null : "wh:wa";
            const et = et => {
              null !== et && (null === tt || HV(et) > HV(tt)) && (tt = et)
            };
            for (let Vt = 0; Vt < Je.length; Vt++) {
              const tt = Je[Vt];
              void 0 === tt || mV(tt) || et(dV(tt))
            }
            et((0, Ve.n)());
            for (let Vt = 0; Vt < We.length; Vt++) {
              const tt = We[Vt];
              void 0 === tt || mV(tt) || et(Re(tt))
            }
            return tt
          }();
          (null === OV || null !== tt && HV(tt) > HV(OV)) && (OV = tt)
        }
      } finally {
        kt(tt)
      }
    }

    function QV() {
      qV = !0
    }

    function lV() {
      if (qV) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && XV(), null !== OV) return OV;
      if (void 0 === le) return "wn:unsupported";
      const tt = (0, Ot.s)();
      return null === tt ? null : `wn:${tt}`
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);