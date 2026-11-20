export const id = 74;
export const ids = [74];
export const modules = {
  4425: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => dc,
      f: () => Ms,
      i: () => xc,
      j: () => cs,
      l: () => Rc,
      m: () => jc,
      o: () => Kc,
      p: () => rc,
      t: () => tc,
      u: () => fs,
      v: () => Hs,
      x: () => oc,
      B: () => Gc
    });
    var kb = sb(3500);
    const Wb = Function.prototype.toString,
      ab = RegExp.prototype.exec,
      Tb = Reflect.apply,
      Ub = Function.prototype.call,
      Ib = Function.prototype.apply,
      Hb = Function.prototype.bind,
      fb = Object.defineProperty,
      Mb = Uint8Array;
    let Xb, nb;
    try {
      Xb = globalThis.crypto, nb = void 0 === Xb || null === Xb ? void 0 : Xb.getRandomValues
    } catch {}
    const mb = "bloxdBindApply";
    let lb;
    try {
      const bb = Ub;
      fb(bb, mb, {
        __proto__: null,
        value: Hb,
        configurable: !0
      });
      try {
        lb = bb[mb](Ib)
      } finally {
        delete bb[mb]
      }
    } catch {}
    const Qb = 16,
      eb = 256,
      Cb = 0,
      Nb = 1,
      Vb = 2,
      Lb = 3;
    let ub, Yb = Cb,
      hb = Tb,
      Jb = 0;

    function gb(bb, cb) {
      return bb === `function ${cb}() { [native code] }` || bb === `function ${cb}() {\n    [native code]\n}`
    }
    const Bb = 0,
      tb = 1,
      yb = 2;
    let Pb = Bb;

    function Db(bb, cb, sb) {
      if (Pb === yb && Yb === Nb && ! function() {
          const bb = ub;
          return Jb >= eb && (hb(nb, Xb, [bb]), Jb = 0), bb[Jb++] < 256 / Qb
        }()) return function(bb, cb, sb) {
        return hb(bb, cb, sb ?? 0)
      }(...arguments);
      if (Pb === Bb || Yb === Vb) return Tb(bb, cb, sb);
      let kb;
      Pb = Bb;
      try {
        Yb === Cb && (Yb = Lb, Yb = function() {
          const bb = Tb(Wb, Tb, []);
          if (gb(bb, "apply")) return Vb;
          if (null === Tb(ab, /\(\.\.\.arguments\)/, [bb]) && null === Tb(ab, /^function\s*\(\.\.\.[\w$]+\)/, [bb])) return Vb;
          if ("function" !== typeof lb || "function" !== typeof Ub || "function" !== typeof Ib || "function" !== typeof Hb || "function" !== typeof fb || "function" !== typeof nb || "function" !== typeof Mb || !gb(Tb(Wb, Ub, []), "call") || !gb(Tb(Wb, Ib, []), "apply") || !gb(Tb(Wb, Hb, []), "bind") || !gb(Tb(Wb, fb, []), "defineProperty") || !gb(Tb(Wb, nb, []), "getRandomValues") || !gb(Tb(Wb, Mb, []), "Uint8Array")) return Vb;
          const cb = lb,
            sb = {},
            kb = function(bb) {
              return this === sb && bb === sb
            };
          try {
            if (!0 !== cb(kb, sb, [sb])) return Vb;
            const bb = new Mb(eb);
            cb(nb, Xb, [bb]), ub = bb
          } catch {
            return Vb
          }
          return hb = cb, Nb
        }()), kb = Tb(bb, cb, sb)
      } catch (mb) {
        throw Yb = Vb, mb
      }
      return Pb = yb, kb
    }
    let Eb = Tb;

    function ib() {
      return (Eb === Tb ? 0 : 3) + Pb
    }

    function Ob() {
      const bb = ib();
      return Eb = Tb, bb
    }

    function Gb(bb) {
      Eb = bb >= 3 ? Db : Tb, Pb = bb % 3
    }
    const Kb = Function.prototype.toString,
      Zb = Object.getOwnPropertyDescriptor,
      zb = Object.prototype.hasOwnProperty,
      qb = RegExp.prototype.exec,
      db = TextEncoder.prototype.encodeInto,
      Ab = String.prototype.startsWith,
      wb = Number.prototype.toString,
      rb = WeakMap.prototype.get,
      ob = WeakMap.prototype.set,
      Sb = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      Rb = new TextEncoder,
      vb = new Uint8Array(1024),
      Fb = 9999999,
      xb = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      jb = new WeakMap;

    function pb(bb) {
      if ("function" !== typeof bb) return "#a0.0";
      const cb = Eb(rb, jb, [bb]);
      if (void 0 !== cb) return cb;
      const sb = Eb(Kb, bb, []),
        kb = sb.length > Fb ? Fb : sb.length,
        Wb = `#${function(bb,cb){const sb=Eb(qb,Sb,[cb]);if(null===sb)return"s";const kb=sb[1];if("ProxyObject"===kb)return"p";if(""!==kb)return Eb(Ab,kb,["bound "])?"b":"n";try{const cb=Zb(bb,"name"),sb=void 0!==cb&&Eb(zb,cb,["value"])?cb.value:void 0;return"string"===typeof sb&&Eb(Ab,sb,["bound "])?"b":"p"}catch{return"p"}}(bb,sb)}${kb}.${function(bb){const{written:cb}=Eb(db,Rb,[bb,vb]);let sb=2166136261;for(let kb=0;kb<cb;kb++)sb=(sb^vb[kb])>>>0,sb=sb+(sb<<1)+(sb<<4)+(sb<<7)+(sb<<8)+(sb<<24)>>>0;return Eb(wb,sb,[36])}(sb)}`;
      return Eb(ob, jb, [bb, Wb]), Wb
    }

    function bc(bb) {
      const cb = Eb(qb, xb, [bb]);
      return null === cb ? bb : cb[1]
    }
    var cc = sb(3511);
    const sc = Function.prototype.toString,
      kc = Object.getOwnPropertyDescriptor,
      Wc = RegExp.prototype.exec,
      ac = Object.prototype.hasOwnProperty,
      Tc = Set.prototype.has,
      Uc = WeakMap.prototype.get,
      Ic = WeakMap.prototype.set,
      Hc = Reflect.get,
      fc = Object.getPrototypeOf,
      Mc = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function Xc(bb, cb, sb) {
      return {
        code: bb,
        holder: cb,
        key: sb,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${sb}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function nc() {
      return Mc
    }
    const mc = Mc?.Instance.prototype,
      lc = Mc?.Memory.prototype;

    function Qc() {
      return lc
    }
    let ec, Cc;
    try {
      const bb = globalThis.crypto,
        cb = bb?.subtle;
      ec = bb ? fc(bb) : void 0, Cc = cb ? fc(cb) : void 0
    } catch {}

    function Nc(bb, cb) {
      for (let sb = bb; void 0 !== sb && null !== sb; sb = fc(sb)) {
        const bb = kc(sb, cb);
        if (bb) return bb
      }
    }
    const Vc = [Xc("in", nc, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), Xc("is", nc, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Xc("co", nc, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), Xc("cs", nc, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Xc("mo", nc, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Xc("it", nc, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Xc("me", nc, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Xc("ex", (function() {
      return mc
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), Xc("bu", Qc, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), Xc("gr", Qc, "grow", {
      tier: "punished"
    }), Xc("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), Xc("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Xc("su", (function() {
      return ec
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Xc("dg", (function() {
      return Cc
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function Lc(bb) {
      let cb;
      try {
        const sb = Hc(globalThis, bb);
        cb = "function" === typeof sb ? sb.prototype : void 0
      } catch {}
      return () => cb
    }

    function uc(bb, cb, sb) {
      return sb.map((sb => Xc(bb, cb, sb)))
    }
    const Yc = Xc("rx", Lc("HTMLCanvasElement"), "getContext"),
      hc = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      Jc = {
        webgpu: [...uc("gd", Lc("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...uc("gq", Lc("GPUQueue"), ["submit", "writeBuffer"]), ...uc("ge", Lc("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...uc("gp", Lc("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), Yc],
        webgl: [...uc("g2", Lc("WebGL2RenderingContext"), [...hc, "drawArraysInstanced", "drawElementsInstanced"]), Yc],
        webgl1: [...uc("g1", Lc("WebGLRenderingContext"), hc), Yc]
      };
    let gc = [];
    const Bc = new WeakMap;

    function tc(bb, cb) {
      const sb = Ob();
      try {
        Eb(Ic, Bc, [bb, cb])
      } finally {
        Gb(sb)
      }
    }

    function yc(bb) {
      try {
        const cb = Us(bb),
          sb = Eb(Uc, Bc, [cb]);
        return bs(sb, bb) ? Pc(bb, !0) : `${Pc(bb,!1)}${pb(sb??cb)}`
      } catch {
        return `${Pc(bb,!1)}${pb(void 0)}`
      }
    }

    function Pc(bb, cb) {
      let {
        code: sb,
        key: kb
      } = bb;
      return `wh:${sb}${cb?"-dbg":""}:${kb}`
    }

    function Dc(bb) {
      return Object.values(Jc).flatMap((cb => cb.map((cb => Pc(cb, bb)))))
    }
    const Ec = new Set(Dc(!0)),
      ic = new Set([...Dc(!1), ...Ec]),
      Oc = Pc(Yc, !1);

    function Gc(bb) {
      gc = Jc[bb]
    }

    function Kc(bb) {
      const cb = Ob();
      try {
        return Zc(bb) || Zc(bc(bb))
      } finally {
        Gb(cb)
      }
    }

    function Zc(bb) {
      return Eb(Tc, ic, [bb])
    }

    function zc(bb) {
      return new Set(Vc.filter((cb => cb.tier === bb)).map((bb => `wh:${bb.code}`)))
    }
    const qc = zc("punished"),
      dc = !1,
      Ac = new Set(cc.c),
      wc = zc("weighted");

    function rc(bb) {
      const cb = Ob();
      try {
        return Sc(bc(bb))
      } finally {
        Gb(cb)
      }
    }

    function oc(bb) {
      const cb = Ob();
      try {
        return bc(bb)
      } finally {
        Gb(cb)
      }
    }

    function Sc(bb) {
      return Eb(Tc, wc, [bb])
    }

    function Rc(bb) {
      const cb = Ob();
      try {
        return vc(bb)
      } finally {
        Gb(cb)
      }
    }

    function vc(bb) {
      return Eb(Tc, Ac, [bb])
    }

    function Fc(bb) {
      return "wb" === bb || Eb(Tc, qc, [bb])
    }

    function xc(bb) {
      const cb = Ob();
      try {
        return Fc(bb) || vc(bb)
      } finally {
        Gb(cb)
      }
    }

    function jc(bb) {
      const cb = Ob();
      try {
        return "wb" === bb || dc && Fc(bb)
      } finally {
        Gb(cb)
      }
    }

    function pc(bb, cb) {
      let {
        isGetter: sb
      } = cb;
      const kb = kc(bb, sb ? "get" : "value");
      return void 0 === kb ? void 0 : kb.value
    }

    function bs(bb, cb) {
      let {
        isConstructor: sb,
        native: kb
      } = cb;
      return "function" === typeof bb && (!(!sb && Eb(ac, bb, ["prototype"])) && null !== Eb(Wc, kb, [Eb(sc, bb, [])]))
    }

    function cs(bb, cb) {
      return bs(bb, Xc("", (() => {}), cb, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let ss = null,
      ks = !1;

    function Ws() {
      try {
        return globalThis.WebAssembly === Mc
      } catch {
        return !1
      }
    }

    function as(bb) {
      try {
        return function(bb) {
          const {
            holder: cb,
            key: sb,
            onNamespace: kb,
            inSecureContext: Wb
          } = bb, ab = cb(), Tb = Nc(ab, sb);
          if (!Tb) return !(Wb && !0 === globalThis.isSecureContext);
          const Ub = pc(Tb, bb);
          if (!bs(Ub, bb)) return !1;
          if (kb) {
            const cb = globalThis.WebAssembly;
            if (cb !== ab && null !== cb && ("object" === typeof cb || "function" === typeof cb)) {
              const kb = Hc(cb, sb);
              return kb === Ub || void 0 === kb || bs(kb, bb)
            }
          }
          return !0
        }(bb)
      } catch {
        return !1
      }
    }

    function Ts(bb) {
      const cb = `wh:${bb.code}`;
      if ("punished" === bb.tier) return cb;
      try {
        return `${cb}${pb(Us(bb))}`
      } catch {
        return `${cb}${pb(void 0)}`
      }
    }

    function Us(bb) {
      const cb = Nc(bb.holder(), bb.key),
        sb = void 0 === cb ? void 0 : pc(cb, bb);
      return bb.onNamespace && !Ws() && bs(sb, bb) ? Hc(globalThis.WebAssembly, bb.key) : sb
    }

    function Is(bb) {
      if (Fc(bb)) return 5;
      const cb = bc(bb);
      return Sc(cb) ? 4 : vc(bb) ? 3 : Zc(cb) ? function(bb) {
        return Eb(Tc, Ec, [bb])
      }(cb) ? -1 : cb === Oc ? 0 : 1 : 2
    }

    function Hs() {
      const bb = function() {
        const bb = ib();
        return Yb === Cb || Yb === Nb ? (Eb = Db, Pb = tb) : Eb = Tb, bb
      }();
      try {
        if (null === ss || !Fc(ss)) {
          const bb = function() {
            if (void 0 === Mc) return null;
            let bb = Ws() ? null : "wh:wa";
            const cb = cb => {
              null !== cb && (null === bb || Is(cb) > Is(bb)) && (bb = cb)
            };
            for (let sb = 0; sb < Vc.length; sb++) {
              const bb = Vc[sb];
              void 0 === bb || as(bb) || cb(Ts(bb))
            }
            cb((0, cc.i)());
            for (let sb = 0; sb < gc.length; sb++) {
              const bb = gc[sb];
              void 0 === bb || as(bb) || cb(yc(bb))
            }
            return bb
          }();
          (null === ss || null !== bb && Is(bb) > Is(ss)) && (ss = bb)
        }
      } finally {
        Gb(bb)
      }
    }

    function fs() {
      ks = !0
    }

    function Ms() {
      if (ks) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Hs(), null !== ss) return ss;
      if (void 0 === Mc) return "wn:unsupported";
      const bb = (0, kb.o)();
      return null === bb ? null : `wn:${bb}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);