export const id = 78;
export const ids = [78];
export const modules = {
  4791: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Fi,
      f: () => yc,
      g: () => pc,
      i: () => oc,
      j: () => si,
      m: () => ic,
      p: () => fi,
      q: () => ri,
      u: () => Ei,
      v: () => Wc,
      x: () => Pc,
      A: () => Zi,
      C: () => Ti
    });
    var Op = cp(2963);
    const op = Function.prototype.toString,
      Ip = RegExp.prototype.exec,
      Sp = Reflect.apply,
      xp = Function.prototype.call,
      Lp = Function.prototype.apply,
      Yp = Function.prototype.bind,
      Dp = Object.defineProperty,
      Ap = Uint8Array;
    let Pp, Wp;
    try {
      Pp = globalThis.crypto, Wp = void 0 === Pp || null === Pp ? void 0 : Pp.getRandomValues
    } catch {}
    const yp = "bloxdBindApply";
    let Up;
    try {
      const pp = xp;
      Dp(pp, yp, {
        __proto__: null,
        value: Yp,
        configurable: !0
      });
      try {
        Up = pp[yp](Lp)
      } finally {
        delete pp[yp]
      }
    } catch {}
    const wp = 16,
      vp = 256,
      tp = 0,
      Hp = 1,
      dp = 2,
      ep = 3;
    let jp, kp = tp,
      mp = Sp,
      Rp = 0;

    function qp(pp, ip) {
      return pp === `function ${ip}() { [native code] }` || pp === `function ${ip}() {\n    [native code]\n}`
    }
    const Mp = 0,
      Cp = 1,
      Ep = 2;
    let Xp = Mp;

    function lp(pp, ip, cp) {
      if (Xp === Ep && kp === Hp && ! function() {
          const pp = jp;
          return Rp >= vp && (mp(Wp, Pp, [pp]), Rp = 0), pp[Rp++] < 256 / wp
        }()) return function(pp, ip, cp) {
        return mp(pp, ip, cp ?? 0)
      }(...arguments);
      if (Xp === Mp || kp === dp) return Sp(pp, ip, cp);
      let Op;
      Xp = Mp;
      try {
        kp === tp && (kp = ep, kp = function() {
          const pp = Sp(op, Sp, []);
          if (qp(pp, "apply")) return dp;
          if (null === Sp(Ip, /\(\.\.\.arguments\)/, [pp]) && null === Sp(Ip, /^function\s*\(\.\.\.[\w$]+\)/, [pp])) return dp;
          if ("function" !== typeof Up || "function" !== typeof xp || "function" !== typeof Lp || "function" !== typeof Yp || "function" !== typeof Dp || "function" !== typeof Wp || "function" !== typeof Ap || !qp(Sp(op, xp, []), "call") || !qp(Sp(op, Lp, []), "apply") || !qp(Sp(op, Yp, []), "bind") || !qp(Sp(op, Dp, []), "defineProperty") || !qp(Sp(op, Wp, []), "getRandomValues") || !qp(Sp(op, Ap, []), "Uint8Array")) return dp;
          const ip = Up,
            cp = {},
            Op = function(pp) {
              return this === cp && pp === cp
            };
          try {
            if (!0 !== ip(Op, cp, [cp])) return dp;
            const pp = new Ap(vp);
            ip(Wp, Pp, [pp]), jp = pp
          } catch {
            return dp
          }
          return mp = ip, Hp
        }()), Op = Sp(pp, ip, cp)
      } catch (yp) {
        throw kp = dp, yp
      }
      return Xp = Ep, Op
    }
    let Qp = Sp;

    function Jp() {
      return (Qp === Sp ? 0 : 3) + Xp
    }

    function Bp() {
      const pp = Jp();
      return Qp = Sp, pp
    }

    function Np(pp) {
      Qp = pp >= 3 ? lp : Sp, Xp = pp % 3
    }
    const Tp = Function.prototype.toString,
      fp = Object.getOwnPropertyDescriptor,
      bp = Object.prototype.hasOwnProperty,
      hp = RegExp.prototype.exec,
      ap = TextEncoder.prototype.encodeInto,
      np = String.prototype.startsWith,
      Fp = Number.prototype.toString,
      gp = WeakMap.prototype.get,
      Gp = WeakMap.prototype.set,
      rp = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      Zp = new TextEncoder,
      zp = new Uint8Array(1024),
      sp = 9999999,
      Kp = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      Vp = new WeakMap;

    function ii(pp) {
      if ("function" !== typeof pp) return "#a0.0";
      const ip = Qp(gp, Vp, [pp]);
      if (void 0 !== ip) return ip;
      const cp = Qp(Tp, pp, []),
        Op = cp.length > sp ? sp : cp.length,
        op = `#${function(pp,ip){const cp=Qp(hp,rp,[ip]);if(null===cp)return"s";const Op=cp[1];if("ProxyObject"===Op)return"p";if(""!==Op)return Qp(np,Op,["bound "])?"b":"n";try{const ip=fp(pp,"name"),cp=void 0!==ip&&Qp(bp,ip,["value"])?ip.value:void 0;return"string"===typeof cp&&Qp(np,cp,["bound "])?"b":"p"}catch{return"p"}}(pp,cp)}${Op}.${function(pp){const{written:ip}=Qp(ap,Zp,[pp,zp]);let cp=2166136261;for(let Op=0;Op<ip;Op++)cp=(cp^zp[Op])>>>0,cp=cp+(cp<<1)+(cp<<4)+(cp<<7)+(cp<<8)+(cp<<24)>>>0;return Qp(Fp,cp,[36])}(cp)}`;
      return Qp(Gp, Vp, [pp, op]), op
    }

    function ci(pp) {
      const ip = Qp(hp, Kp, [pp]);
      return null === ip ? pp : ip[1]
    }
    var Oi = cp(2980);
    const oi = Function.prototype.toString,
      Ii = Object.getOwnPropertyDescriptor,
      Si = RegExp.prototype.exec,
      xi = Object.prototype.hasOwnProperty,
      Li = Set.prototype.has,
      Yi = WeakMap.prototype.get,
      Di = WeakMap.prototype.set,
      Ai = Reflect.get,
      Pi = Object.getPrototypeOf,
      Wi = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function yi(pp, ip, cp) {
      return {
        code: pp,
        holder: ip,
        key: cp,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${cp}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function Ui() {
      return Wi
    }
    const wi = Wi?.Instance.prototype,
      vi = Wi?.Memory.prototype;

    function ti() {
      return vi
    }
    let Hi, di;
    try {
      const pp = globalThis.crypto,
        ip = pp?.subtle;
      Hi = pp ? Pi(pp) : void 0, di = ip ? Pi(ip) : void 0
    } catch {}

    function ei(pp, ip) {
      for (let cp = pp; void 0 !== cp && null !== cp; cp = Pi(cp)) {
        const pp = Ii(cp, ip);
        if (pp) return pp
      }
    }
    const ui = [yi("in", Ui, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), yi("is", Ui, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), yi("co", Ui, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), yi("cs", Ui, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), yi("mo", Ui, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), yi("it", Ui, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), yi("me", Ui, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), yi("ex", (function() {
      return wi
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), yi("bu", ti, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), yi("gr", ti, "grow", {
      tier: "punished"
    }), yi("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), yi("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), yi("su", (function() {
      return Hi
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), yi("dg", (function() {
      return di
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function ji(pp) {
      let ip;
      try {
        const cp = Ai(globalThis, pp);
        ip = "function" === typeof cp ? cp.prototype : void 0
      } catch {}
      return () => ip
    }

    function ki(pp, ip, cp) {
      return cp.map((cp => yi(pp, ip, cp)))
    }
    const mi = yi("rx", ji("HTMLCanvasElement"), "getContext"),
      Ri = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      qi = {
        webgpu: [...ki("gd", ji("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...ki("gq", ji("GPUQueue"), ["submit", "writeBuffer"]), ...ki("ge", ji("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...ki("gp", ji("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), mi],
        webgl: [...ki("g2", ji("WebGL2RenderingContext"), [...Ri, "drawArraysInstanced", "drawElementsInstanced"]), mi],
        webgl1: [...ki("g1", ji("WebGLRenderingContext"), Ri), mi]
      };
    let Mi = [];
    const Ci = new WeakMap;

    function Ei(pp, ip) {
      const cp = Bp();
      try {
        Qp(Di, Ci, [pp, ip])
      } finally {
        Np(cp)
      }
    }

    function Xi(pp) {
      try {
        const ip = Dc(pp),
          cp = Qp(Yi, Ci, [ip]);
        return Oc(cp, pp) ? li(pp, !0) : `${li(pp,!1)}${ii(cp??ip)}`
      } catch {
        return `${li(pp,!1)}${ii(void 0)}`
      }
    }

    function li(pp, ip) {
      let {
        code: cp,
        key: Op
      } = pp;
      return `wh:${cp}${ip?"-dbg":""}:${Op}`
    }

    function Qi(pp) {
      return Object.values(qi).flatMap((ip => ip.map((ip => li(ip, pp)))))
    }
    const Ji = new Set(Qi(!0)),
      Bi = new Set([...Qi(!1), ...Ji]),
      Ni = li(mi, !1);

    function Ti(pp) {
      Mi = qi[pp]
    }

    function fi(pp) {
      const ip = Bp();
      try {
        return bi(pp) || bi(ci(pp))
      } finally {
        Np(ip)
      }
    }

    function bi(pp) {
      return Qp(Li, Bi, [pp])
    }

    function ai(pp) {
      return new Set(ui.filter((ip => ip.tier === pp)).map((pp => `wh:${pp.code}`)))
    }
    const ni = ai("punished"),
      Fi = !1,
      gi = new Set(Oi.e),
      Gi = ai("weighted");

    function ri(pp) {
      const ip = Bp();
      try {
        return zi(ci(pp))
      } finally {
        Np(ip)
      }
    }

    function Zi(pp) {
      const ip = Bp();
      try {
        return ci(pp)
      } finally {
        Np(ip)
      }
    }

    function zi(pp) {
      return Qp(Li, Gi, [pp])
    }

    function si(pp) {
      const ip = Bp();
      try {
        return Ki(pp)
      } finally {
        Np(ip)
      }
    }

    function Ki(pp) {
      return Qp(Li, gi, [pp])
    }

    function Vi(pp) {
      return "wb" === pp || Qp(Li, ni, [pp])
    }

    function pc(pp) {
      const ip = Bp();
      try {
        return Vi(pp) || Ki(pp)
      } finally {
        Np(ip)
      }
    }

    function ic(pp) {
      const ip = Bp();
      try {
        return "wb" === pp || Fi && Vi(pp)
      } finally {
        Np(ip)
      }
    }

    function cc(pp, ip) {
      let {
        isGetter: cp
      } = ip;
      const Op = Ii(pp, cp ? "get" : "value");
      return void 0 === Op ? void 0 : Op.value
    }

    function Oc(pp, ip) {
      let {
        isConstructor: cp,
        native: Op
      } = ip;
      return "function" === typeof pp && (!(!cp && Qp(xi, pp, ["prototype"])) && null !== Qp(Si, Op, [Qp(oi, pp, [])]))
    }

    function oc(pp, ip) {
      return Oc(pp, yi("", (() => {}), ip, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let Ic = null,
      Sc = !1;

    function xc() {
      try {
        return globalThis.WebAssembly === Wi
      } catch {
        return !1
      }
    }

    function Lc(pp) {
      try {
        return function(pp) {
          const {
            holder: ip,
            key: cp,
            onNamespace: Op,
            inSecureContext: op
          } = pp, Ip = ip(), Sp = ei(Ip, cp);
          if (!Sp) return !(op && !0 === globalThis.isSecureContext);
          const xp = cc(Sp, pp);
          if (!Oc(xp, pp)) return !1;
          if (Op) {
            const ip = globalThis.WebAssembly;
            if (ip !== Ip && null !== ip && ("object" === typeof ip || "function" === typeof ip)) {
              const Op = Ai(ip, cp);
              return Op === xp || void 0 === Op || Oc(Op, pp)
            }
          }
          return !0
        }(pp)
      } catch {
        return !1
      }
    }

    function Yc(pp) {
      const ip = `wh:${pp.code}`;
      if ("punished" === pp.tier) return ip;
      try {
        return `${ip}${ii(Dc(pp))}`
      } catch {
        return `${ip}${ii(void 0)}`
      }
    }

    function Dc(pp) {
      const ip = ei(pp.holder(), pp.key),
        cp = void 0 === ip ? void 0 : cc(ip, pp);
      return pp.onNamespace && !xc() && Oc(cp, pp) ? Ai(globalThis.WebAssembly, pp.key) : cp
    }

    function Ac(pp) {
      if (Vi(pp)) return 5;
      const ip = ci(pp);
      return zi(ip) ? 4 : Ki(pp) ? 3 : bi(ip) ? function(pp) {
        return Qp(Li, Ji, [pp])
      }(ip) ? -1 : ip === Ni ? 0 : 1 : 2
    }

    function Pc() {
      const pp = function() {
        const pp = Jp();
        return kp === tp || kp === Hp ? (Qp = lp, Xp = Cp) : Qp = Sp, pp
      }();
      try {
        if (null === Ic || !Vi(Ic)) {
          const pp = function() {
            if (void 0 === Wi) return null;
            let pp = xc() ? null : "wh:wa";
            const ip = ip => {
              null !== ip && (null === pp || Ac(ip) > Ac(pp)) && (pp = ip)
            };
            for (let cp = 0; cp < ui.length; cp++) {
              const pp = ui[cp];
              void 0 === pp || Lc(pp) || ip(Yc(pp))
            }
            ip((0, Oi.p)());
            for (let cp = 0; cp < Mi.length; cp++) {
              const pp = Mi[cp];
              void 0 === pp || Lc(pp) || ip(Xi(pp))
            }
            return pp
          }();
          (null === Ic || null !== pp && Ac(pp) > Ac(Ic)) && (Ic = pp)
        }
      } finally {
        Np(pp)
      }
    }

    function Wc() {
      Sc = !0
    }

    function yc() {
      if (Sc) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Pc(), null !== Ic) return Ic;
      if (void 0 === Wi) return "wn:unsupported";
      const pp = (0, Op.r)();
      return null === pp ? null : `wn:${pp}`
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);