export const id = 74;
export const ids = [74];
export const modules = {
  4376: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => la,
      h: () => LU,
      i: () => Ja,
      m: () => aU,
      q: () => Va,
      t: () => na,
      x: () => ua,
      B: () => sa,
      D: () => Ha,
      G: () => vU,
      I: () => eU,
      K: () => ga,
      N: () => qa
    });
    var Ab = Ub(3376);
    const Mb = Function.prototype.toString,
      Tb = RegExp.prototype.exec,
      Eb = Reflect.apply,
      Yb = Function.prototype.call,
      Bb = Function.prototype.apply,
      eb = Function.prototype.bind,
      vb = Object.defineProperty,
      Lb = Uint8Array;
    let Pb, Xb;
    try {
      Pb = globalThis.crypto, Xb = void 0 === Pb || null === Pb ? void 0 : Pb.getRandomValues
    } catch {}
    const jb = "bloxdBindApply";
    let Rb;
    try {
      const bb = Yb;
      vb(bb, jb, {
        __proto__: null,
        value: eb,
        configurable: !0
      });
      try {
        Rb = bb[jb](Bb)
      } finally {
        delete bb[jb]
      }
    } catch {}
    const kb = 16,
      yb = 256,
      Zb = 0,
      Db = 1,
      zb = 2,
      xb = 3;
    let ib, fb = Zb,
      mb = Eb,
      pb = 0;

    function Nb(bb, ab) {
      return bb === `function ${ab}() { [native code] }` || bb === `function ${ab}() {\n    [native code]\n}`
    }
    const Wb = 0,
      Hb = 1,
      Ib = 2;
    let db = Wb;

    function Fb(bb, ab, Ub) {
      if (db === Ib && fb === Db && ! function() {
          const bb = ib;
          return pb >= yb && (mb(Xb, Pb, [bb]), pb = 0), bb[pb++] < 256 / kb
        }()) return function(bb, ab, Ub) {
        return mb(bb, ab, Ub ?? 0)
      }(...arguments);
      if (db === Wb || fb === zb) return Eb(bb, ab, Ub);
      let Ab;
      db = Wb;
      try {
        fb === Zb && (fb = xb, fb = function() {
          const bb = Eb(Mb, Eb, []);
          if (Nb(bb, "apply")) return zb;
          if (null === Eb(Tb, /\(\.\.\.arguments\)/, [bb]) && null === Eb(Tb, /^function\s*\(\.\.\.[\w$]+\)/, [bb])) return zb;
          if ("function" !== typeof Rb || "function" !== typeof Yb || "function" !== typeof Bb || "function" !== typeof eb || "function" !== typeof vb || "function" !== typeof Xb || "function" !== typeof Lb || !Nb(Eb(Mb, Yb, []), "call") || !Nb(Eb(Mb, Bb, []), "apply") || !Nb(Eb(Mb, eb, []), "bind") || !Nb(Eb(Mb, vb, []), "defineProperty") || !Nb(Eb(Mb, Xb, []), "getRandomValues") || !Nb(Eb(Mb, Lb, []), "Uint8Array")) return zb;
          const ab = Rb,
            Ub = {},
            Ab = function(bb) {
              return this === Ub && bb === Ub
            };
          try {
            if (!0 !== ab(Ab, Ub, [Ub])) return zb;
            const bb = new Lb(yb);
            ab(Xb, Pb, [bb]), ib = bb
          } catch {
            return zb
          }
          return mb = ab, Db
        }()), Ab = Eb(bb, ab, Ub)
      } catch (jb) {
        throw fb = zb, jb
      }
      return db = Ib, Ab
    }
    let hb = Eb;

    function Gb() {
      return (hb === Eb ? 0 : 3) + db
    }

    function Qb() {
      const bb = Gb();
      return hb = Eb, bb
    }

    function qb(bb) {
      hb = bb >= 3 ? Fb : Eb, db = bb % 3
    }
    const ub = Function.prototype.toString,
      rb = Object.getOwnPropertyDescriptor,
      Kb = Object.prototype.hasOwnProperty,
      ob = RegExp.prototype.exec,
      lb = TextEncoder.prototype.encodeInto,
      tb = String.prototype.startsWith,
      wb = Number.prototype.toString,
      sb = WeakMap.prototype.get,
      gb = WeakMap.prototype.set,
      Cb = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      Vb = new TextEncoder,
      Ob = new Uint8Array(1024),
      cb = 9999999,
      Jb = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      nb = new WeakMap;

    function Sb(bb) {
      if ("function" !== typeof bb) return "#a0.0";
      const ab = hb(sb, nb, [bb]);
      if (void 0 !== ab) return ab;
      const Ub = hb(ub, bb, []),
        Ab = Ub.length > cb ? cb : Ub.length,
        Mb = `#${function(bb,ab){const Ub=hb(ob,Cb,[ab]);if(null===Ub)return"s";const Ab=Ub[1];if("ProxyObject"===Ab)return"p";if(""!==Ab)return hb(tb,Ab,["bound "])?"b":"n";try{const ab=rb(bb,"name"),Ub=void 0!==ab&&hb(Kb,ab,["value"])?ab.value:void 0;return"string"===typeof Ub&&hb(tb,Ub,["bound "])?"b":"p"}catch{return"p"}}(bb,Ub)}${Ab}.${function(bb){const{written:ab}=hb(lb,Vb,[bb,Ob]);let Ub=2166136261;for(let Ab=0;Ab<ab;Ab++)Ub=(Ub^Ob[Ab])>>>0,Ub=Ub+(Ub<<1)+(Ub<<4)+(Ub<<7)+(Ub<<8)+(Ub<<24)>>>0;return hb(wb,Ub,[36])}(Ub)}`;
      return hb(gb, nb, [bb, Mb]), Mb
    }

    function ba(bb) {
      const ab = hb(ob, Jb, [bb]);
      return null === ab ? bb : ab[1]
    }
    var aa = Ub(3384);
    const Ua = Function.prototype.toString,
      Aa = Object.getOwnPropertyDescriptor,
      Ma = RegExp.prototype.exec,
      Ta = Object.prototype.hasOwnProperty,
      Ea = Set.prototype.has,
      Ya = WeakMap.prototype.get,
      Ba = WeakMap.prototype.set,
      ea = Reflect.get,
      va = Object.getPrototypeOf,
      La = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function Pa(bb, ab, Ub) {
      return {
        code: bb,
        holder: ab,
        key: Ub,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${Ub}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function Xa() {
      return La
    }
    const ja = La?.Instance.prototype,
      Ra = La?.Memory.prototype;

    function ka() {
      return Ra
    }
    let ya, Za;
    try {
      const bb = globalThis.crypto,
        ab = bb?.subtle;
      ya = bb ? va(bb) : void 0, Za = ab ? va(ab) : void 0
    } catch {}

    function Da(bb, ab) {
      for (let Ub = bb; void 0 !== Ub && null !== Ub; Ub = va(Ub)) {
        const bb = Aa(Ub, ab);
        if (bb) return bb
      }
    }
    const za = [Pa("in", Xa, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), Pa("is", Xa, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Pa("co", Xa, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), Pa("cs", Xa, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Pa("mo", Xa, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Pa("it", Xa, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Pa("me", Xa, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Pa("ex", (function() {
      return ja
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), Pa("bu", ka, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), Pa("gr", ka, "grow", {
      tier: "punished"
    }), Pa("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), Pa("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Pa("su", (function() {
      return ya
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Pa("dg", (function() {
      return Za
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function xa(bb) {
      let ab;
      try {
        const Ub = ea(globalThis, bb);
        ab = "function" === typeof Ub ? Ub.prototype : void 0
      } catch {}
      return () => ab
    }

    function ia(bb, ab, Ub) {
      return Ub.map((Ub => Pa(bb, ab, Ub)))
    }
    const fa = Pa("rx", xa("HTMLCanvasElement"), "getContext"),
      ma = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      pa = {
        webgpu: [...ia("gd", xa("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...ia("gq", xa("GPUQueue"), ["submit", "writeBuffer"]), ...ia("ge", xa("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...ia("gp", xa("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), fa],
        webgl: [...ia("g2", xa("WebGL2RenderingContext"), [...ma, "drawArraysInstanced", "drawElementsInstanced"]), fa],
        webgl1: [...ia("g1", xa("WebGLRenderingContext"), ma), fa]
      };
    let Na = [];
    const Wa = new WeakMap;

    function Ha(bb, ab) {
      const Ub = Qb();
      try {
        hb(Ba, Wa, [bb, ab])
      } finally {
        qb(Ub)
      }
    }

    function Ia(bb) {
      try {
        const ab = YU(bb),
          Ub = hb(Ya, Wa, [ab]);
        return bU(Ub, bb) ? da(bb, !0) : `${da(bb,!1)}${Sb(Ub??ab)}`
      } catch {
        return `${da(bb,!1)}${Sb(void 0)}`
      }
    }

    function da(bb, ab) {
      let {
        code: Ub,
        key: Ab
      } = bb;
      return `wh:${Ub}${ab?"-dbg":""}:${Ab}`
    }

    function Fa(bb) {
      return Object.values(pa).flatMap((ab => ab.map((ab => da(ab, bb)))))
    }
    const ha = new Set(Fa(!0)),
      Ga = new Set([...Fa(!1), ...ha]),
      Qa = da(fa, !1);

    function qa(bb) {
      Na = pa[bb]
    }

    function ua(bb) {
      const ab = Qb();
      try {
        return ra(bb) || ra(ba(bb))
      } finally {
        qb(ab)
      }
    }

    function ra(bb) {
      return hb(Ea, Ga, [bb])
    }

    function Ka(bb) {
      return new Set(za.filter((ab => ab.tier === bb)).map((bb => `wh:${bb.code}`)))
    }
    const oa = Ka("punished"),
      la = !1,
      ta = new Set(aa.d),
      wa = Ka("weighted");

    function sa(bb) {
      const ab = Qb();
      try {
        return Ca(ba(bb))
      } finally {
        qb(ab)
      }
    }

    function ga(bb) {
      const ab = Qb();
      try {
        return ba(bb)
      } finally {
        qb(ab)
      }
    }

    function Ca(bb) {
      return hb(Ea, wa, [bb])
    }

    function Va(bb) {
      const ab = Qb();
      try {
        return Oa(bb)
      } finally {
        qb(ab)
      }
    }

    function Oa(bb) {
      return hb(Ea, ta, [bb])
    }

    function ca(bb) {
      return "wb" === bb || hb(Ea, oa, [bb])
    }

    function Ja(bb) {
      const ab = Qb();
      try {
        return ca(bb) || Oa(bb)
      } finally {
        qb(ab)
      }
    }

    function na(bb) {
      const ab = Qb();
      try {
        return "wb" === bb || la && ca(bb)
      } finally {
        qb(ab)
      }
    }

    function Sa(bb, ab) {
      let {
        isGetter: Ub
      } = ab;
      const Ab = Aa(bb, Ub ? "get" : "value");
      return void 0 === Ab ? void 0 : Ab.value
    }

    function bU(bb, ab) {
      let {
        isConstructor: Ub,
        native: Ab
      } = ab;
      return "function" === typeof bb && (!(!Ub && hb(Ta, bb, ["prototype"])) && null !== hb(Ma, Ab, [hb(Ua, bb, [])]))
    }

    function aU(bb, ab) {
      return bU(bb, Pa("", (() => {}), ab, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let UU = null,
      AU = !1;

    function MU() {
      try {
        return globalThis.WebAssembly === La
      } catch {
        return !1
      }
    }

    function TU(bb) {
      try {
        return function(bb) {
          const {
            holder: ab,
            key: Ub,
            onNamespace: Ab,
            inSecureContext: Mb
          } = bb, Tb = ab(), Eb = Da(Tb, Ub);
          if (!Eb) return !(Mb && !0 === globalThis.isSecureContext);
          const Yb = Sa(Eb, bb);
          if (!bU(Yb, bb)) return !1;
          if (Ab) {
            const ab = globalThis.WebAssembly;
            if (ab !== Tb && null !== ab && ("object" === typeof ab || "function" === typeof ab)) {
              const Ab = ea(ab, Ub);
              return Ab === Yb || void 0 === Ab || bU(Ab, bb)
            }
          }
          return !0
        }(bb)
      } catch {
        return !1
      }
    }

    function EU(bb) {
      const ab = `wh:${bb.code}`;
      if ("punished" === bb.tier) return ab;
      try {
        return `${ab}${Sb(YU(bb))}`
      } catch {
        return `${ab}${Sb(void 0)}`
      }
    }

    function YU(bb) {
      const ab = Da(bb.holder(), bb.key),
        Ub = void 0 === ab ? void 0 : Sa(ab, bb);
      return bb.onNamespace && !MU() && bU(Ub, bb) ? ea(globalThis.WebAssembly, bb.key) : Ub
    }

    function BU(bb) {
      if (ca(bb)) return 5;
      const ab = ba(bb);
      return Ca(ab) ? 4 : Oa(bb) ? 3 : ra(ab) ? function(bb) {
        return hb(Ea, ha, [bb])
      }(ab) ? -1 : ab === Qa ? 0 : 1 : 2
    }

    function eU() {
      const bb = function() {
        const bb = Gb();
        return fb === Zb || fb === Db ? (hb = Fb, db = Hb) : hb = Eb, bb
      }();
      try {
        if (null === UU || !ca(UU)) {
          const bb = function() {
            if (void 0 === La) return null;
            let bb = MU() ? null : "wh:wa";
            const ab = ab => {
              null !== ab && (null === bb || BU(ab) > BU(bb)) && (bb = ab)
            };
            for (let Ub = 0; Ub < za.length; Ub++) {
              const bb = za[Ub];
              void 0 === bb || TU(bb) || ab(EU(bb))
            }
            ab((0, aa.m)());
            for (let Ub = 0; Ub < Na.length; Ub++) {
              const bb = Na[Ub];
              void 0 === bb || TU(bb) || ab(Ia(bb))
            }
            return bb
          }();
          (null === UU || null !== bb && BU(bb) > BU(UU)) && (UU = bb)
        }
      } finally {
        qb(bb)
      }
    }

    function vU() {
      AU = !0
    }

    function LU() {
      if (AU) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && eU(), null !== UU) return UU;
      if (void 0 === La) return "wn:unsupported";
      const bb = (0, Ab.l)();
      return null === bb ? null : `wn:${bb}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);