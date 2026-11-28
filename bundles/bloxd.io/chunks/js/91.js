export const id = 91;
export const ids = [91];
export const modules = {
  5587: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => qw,
      g: () => UM,
      j: () => Tw,
      m: () => MM,
      n: () => nw,
      r: () => kw,
      u: () => Nw,
      w: () => uw,
      A: () => Dw,
      B: () => OM,
      E: () => IM,
      H: () => dw,
      J: () => Sw
    });
    var eb = Mb(2463);
    const Hb = Function.prototype.toString,
      pb = RegExp.prototype.exec,
      Vb = Reflect.apply,
      gb = Function.prototype.call,
      lb = Function.prototype.apply,
      Lb = Function.prototype.bind,
      Ib = Object.defineProperty,
      Ob = Uint8Array;
    let Ub, tb;
    try {
      Ub = globalThis.crypto, tb = void 0 === Ub || null === Ub ? void 0 : Ub.getRandomValues
    } catch {}
    const Cb = "bloxdBindApply";
    let Eb;
    try {
      const bb = gb;
      Ib(bb, Cb, {
        __proto__: null,
        value: Lb,
        configurable: !0
      });
      try {
        Eb = bb[Cb](lb)
      } finally {
        delete bb[Cb]
      }
    } catch {}
    const Fb = 16,
      Bb = 256,
      sb = 0,
      mb = 1,
      hb = 2,
      zb = 3;
    let Xb, xb = sb,
      jb = Vb,
      Kb = 0;

    function rb(bb, wb) {
      return bb === `function ${wb}() { [native code] }` || bb === `function ${wb}() {\n    [native code]\n}`
    }
    const Rb = 0,
      Db = 1,
      cb = 2;
    let Yb = Rb;

    function Zb(bb, wb, Mb) {
      if (Yb === cb && xb === mb && ! function() {
          const bb = Xb;
          return Kb >= Bb && (jb(tb, Ub, [bb]), Kb = 0), bb[Kb++] < 256 / Fb
        }()) return function(bb, wb, Mb) {
        return jb(bb, wb, Mb ?? 0)
      }(...arguments);
      if (Yb === Rb || xb === hb) return Vb(bb, wb, Mb);
      let eb;
      Yb = Rb;
      try {
        xb === sb && (xb = zb, xb = function() {
          const bb = Vb(Hb, Vb, []);
          if (rb(bb, "apply")) return hb;
          if (null === Vb(pb, /\(\.\.\.arguments\)/, [bb]) && null === Vb(pb, /^function\s*\(\.\.\.[\w$]+\)/, [bb])) return hb;
          if ("function" !== typeof Eb || "function" !== typeof gb || "function" !== typeof lb || "function" !== typeof Lb || "function" !== typeof Ib || "function" !== typeof tb || "function" !== typeof Ob || !rb(Vb(Hb, gb, []), "call") || !rb(Vb(Hb, lb, []), "apply") || !rb(Vb(Hb, Lb, []), "bind") || !rb(Vb(Hb, Ib, []), "defineProperty") || !rb(Vb(Hb, tb, []), "getRandomValues") || !rb(Vb(Hb, Ob, []), "Uint8Array")) return hb;
          const wb = Eb,
            Mb = {},
            eb = function(bb) {
              return this === Mb && bb === Mb
            };
          try {
            if (!0 !== wb(eb, Mb, [Mb])) return hb;
            const bb = new Ob(Bb);
            wb(tb, Ub, [bb]), Xb = bb
          } catch {
            return hb
          }
          return jb = wb, mb
        }()), eb = Vb(bb, wb, Mb)
      } catch (Cb) {
        throw xb = hb, Cb
      }
      return Yb = cb, eb
    }
    let fb = Vb;

    function Ab() {
      return (fb === Vb ? 0 : 3) + Yb
    }

    function Wb() {
      const bb = Ab();
      return fb = Vb, bb
    }

    function Jb(bb) {
      fb = bb >= 3 ? Zb : Vb, Yb = bb % 3
    }
    const Sb = Function.prototype.toString,
      Nb = Object.getOwnPropertyDescriptor,
      vb = Object.prototype.hasOwnProperty,
      Qb = RegExp.prototype.exec,
      Gb = TextEncoder.prototype.encodeInto,
      qb = String.prototype.startsWith,
      ab = Number.prototype.toString,
      ib = WeakMap.prototype.get,
      ub = WeakMap.prototype.set,
      db = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      Pb = new TextEncoder,
      nb = new Uint8Array(1024),
      yb = 9999999,
      ob = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      Tb = new WeakMap;

    function kb(bb) {
      if ("function" !== typeof bb) return "#a0.0";
      const wb = fb(ib, Tb, [bb]);
      if (void 0 !== wb) return wb;
      const Mb = fb(Sb, bb, []),
        eb = Mb.length > yb ? yb : Mb.length,
        Hb = `#${function(bb,wb){const Mb=fb(Qb,db,[wb]);if(null===Mb)return"s";const eb=Mb[1];if("ProxyObject"===eb)return"p";if(""!==eb)return fb(qb,eb,["bound "])?"b":"n";try{const wb=Nb(bb,"name"),Mb=void 0!==wb&&fb(vb,wb,["value"])?wb.value:void 0;return"string"===typeof Mb&&fb(qb,Mb,["bound "])?"b":"p"}catch{return"p"}}(bb,Mb)}${eb}.${function(bb){const{written:wb}=fb(Gb,Pb,[bb,nb]);let Mb=2166136261;for(let eb=0;eb<wb;eb++)Mb=(Mb^nb[eb])>>>0,Mb=Mb+(Mb<<1)+(Mb<<4)+(Mb<<7)+(Mb<<8)+(Mb<<24)>>>0;return fb(ab,Mb,[36])}(Mb)}`;
      return fb(ub, Tb, [bb, Hb]), Hb
    }

    function bw(bb) {
      const wb = fb(Qb, ob, [bb]);
      return null === wb ? bb : wb[1]
    }
    var ww = Mb(2478);
    const Mw = Function.prototype.toString,
      ew = Object.getOwnPropertyDescriptor,
      Hw = RegExp.prototype.exec,
      pw = Object.prototype.hasOwnProperty,
      Vw = Set.prototype.has,
      gw = WeakMap.prototype.get,
      lw = WeakMap.prototype.set,
      Lw = Reflect.get,
      Iw = Object.getPrototypeOf,
      Ow = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function Uw(bb, wb, Mb) {
      return {
        code: bb,
        holder: wb,
        key: Mb,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${Mb}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function tw() {
      return Ow
    }
    const Cw = Ow?.Instance.prototype,
      Ew = Ow?.Memory.prototype;

    function Fw() {
      return Ew
    }
    let Bw, sw;
    try {
      const bb = globalThis.crypto,
        wb = bb?.subtle;
      Bw = bb ? Iw(bb) : void 0, sw = wb ? Iw(wb) : void 0
    } catch {}

    function mw(bb, wb) {
      for (let Mb = bb; void 0 !== Mb && null !== Mb; Mb = Iw(Mb)) {
        const bb = ew(Mb, wb);
        if (bb) return bb
      }
    }
    const hw = [Uw("in", tw, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), Uw("is", tw, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Uw("co", tw, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), Uw("cs", tw, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Uw("mo", tw, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Uw("it", tw, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Uw("me", tw, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Uw("ex", (function() {
      return Cw
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), Uw("bu", Fw, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), Uw("gr", Fw, "grow", {
      tier: "punished"
    }), Uw("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), Uw("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Uw("su", (function() {
      return Bw
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Uw("dg", (function() {
      return sw
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function zw(bb) {
      let wb;
      try {
        const Mb = Lw(globalThis, bb);
        wb = "function" === typeof Mb ? Mb.prototype : void 0
      } catch {}
      return () => wb
    }

    function Xw(bb, wb, Mb) {
      return Mb.map((Mb => Uw(bb, wb, Mb)))
    }
    const xw = Uw("rx", zw("HTMLCanvasElement"), "getContext"),
      jw = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      Kw = {
        webgpu: [...Xw("gd", zw("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...Xw("gq", zw("GPUQueue"), ["submit", "writeBuffer"]), ...Xw("ge", zw("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...Xw("gp", zw("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), xw],
        webgl: [...Xw("g2", zw("WebGL2RenderingContext"), [...jw, "drawArraysInstanced", "drawElementsInstanced"]), xw],
        webgl1: [...Xw("g1", zw("WebGLRenderingContext"), jw), xw]
      };
    let rw = [];
    const Rw = new WeakMap;

    function Dw(bb, wb) {
      const Mb = Wb();
      try {
        fb(lw, Rw, [bb, wb])
      } finally {
        Jb(Mb)
      }
    }

    function Yw(bb) {
      try {
        const wb = lM(bb),
          Mb = fb(gw, Rw, [wb]);
        return wM(Mb, bb) ? Zw(bb, !0) : `${Zw(bb,!1)}${kb(Mb??wb)}`
      } catch {
        return `${Zw(bb,!1)}${kb(void 0)}`
      }
    }

    function Zw(bb, wb) {
      let {
        code: Mb,
        key: eb
      } = bb;
      return `wh:${Mb}${wb?"-dbg":""}:${eb}`
    }

    function fw(bb) {
      return Object.values(Kw).flatMap((wb => wb.map((wb => Zw(wb, bb)))))
    }
    const Aw = new Set(fw(!0)),
      Ww = new Set([...fw(!1), ...Aw]),
      Jw = Zw(xw, !1);

    function Sw(bb) {
      rw = Kw[bb]
    }

    function Nw(bb) {
      const wb = Wb();
      try {
        return vw(bb) || vw(bw(bb))
      } finally {
        Jb(wb)
      }
    }

    function vw(bb) {
      return fb(Vw, Ww, [bb])
    }

    function Qw(bb) {
      return new Set(hw.filter((wb => wb.tier === bb)).map((bb => `wh:${bb.code}`)))
    }
    const Gw = Qw("punished"),
      qw = !1,
      aw = new Set(ww.c),
      iw = Qw("weighted");

    function uw(bb) {
      const wb = Wb();
      try {
        return Pw(bw(bb))
      } finally {
        Jb(wb)
      }
    }

    function dw(bb) {
      const wb = Wb();
      try {
        return bw(bb)
      } finally {
        Jb(wb)
      }
    }

    function Pw(bb) {
      return fb(Vw, iw, [bb])
    }

    function nw(bb) {
      const wb = Wb();
      try {
        return yw(bb)
      } finally {
        Jb(wb)
      }
    }

    function yw(bb) {
      return fb(Vw, aw, [bb])
    }

    function ow(bb) {
      return "wb" === bb || fb(Vw, Gw, [bb])
    }

    function Tw(bb) {
      const wb = Wb();
      try {
        return ow(bb) || yw(bb)
      } finally {
        Jb(wb)
      }
    }

    function kw(bb) {
      const wb = Wb();
      try {
        return "wb" === bb || qw && ow(bb)
      } finally {
        Jb(wb)
      }
    }

    function bM(bb, wb) {
      let {
        isGetter: Mb
      } = wb;
      const eb = ew(bb, Mb ? "get" : "value");
      return void 0 === eb ? void 0 : eb.value
    }

    function wM(bb, wb) {
      let {
        isConstructor: Mb,
        native: eb
      } = wb;
      return "function" === typeof bb && (!(!Mb && fb(pw, bb, ["prototype"])) && null !== fb(Hw, eb, [fb(Mw, bb, [])]))
    }

    function MM(bb, wb) {
      return wM(bb, Uw("", (() => {}), wb, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let eM = null,
      HM = !1;

    function pM() {
      try {
        return globalThis.WebAssembly === Ow
      } catch {
        return !1
      }
    }

    function VM(bb) {
      try {
        return function(bb) {
          const {
            holder: wb,
            key: Mb,
            onNamespace: eb,
            inSecureContext: Hb
          } = bb, pb = wb(), Vb = mw(pb, Mb);
          if (!Vb) return !(Hb && !0 === globalThis.isSecureContext);
          const gb = bM(Vb, bb);
          if (!wM(gb, bb)) return !1;
          if (eb) {
            const wb = globalThis.WebAssembly;
            if (wb !== pb && null !== wb && ("object" === typeof wb || "function" === typeof wb)) {
              const eb = Lw(wb, Mb);
              return eb === gb || void 0 === eb || wM(eb, bb)
            }
          }
          return !0
        }(bb)
      } catch {
        return !1
      }
    }

    function gM(bb) {
      const wb = `wh:${bb.code}`;
      if ("punished" === bb.tier) return wb;
      try {
        return `${wb}${kb(lM(bb))}`
      } catch {
        return `${wb}${kb(void 0)}`
      }
    }

    function lM(bb) {
      const wb = mw(bb.holder(), bb.key),
        Mb = void 0 === wb ? void 0 : bM(wb, bb);
      return bb.onNamespace && !pM() && wM(Mb, bb) ? Lw(globalThis.WebAssembly, bb.key) : Mb
    }

    function LM(bb) {
      if (ow(bb)) return 5;
      const wb = bw(bb);
      return Pw(wb) ? 4 : yw(bb) ? 3 : vw(wb) ? function(bb) {
        return fb(Vw, Aw, [bb])
      }(wb) ? -1 : wb === Jw ? 0 : 1 : 2
    }

    function IM() {
      const bb = function() {
        const bb = Ab();
        return xb === sb || xb === mb ? (fb = Zb, Yb = Db) : fb = Vb, bb
      }();
      try {
        if (null === eM || !ow(eM)) {
          const bb = function() {
            if (void 0 === Ow) return null;
            let bb = pM() ? null : "wh:wa";
            const wb = wb => {
              null !== wb && (null === bb || LM(wb) > LM(bb)) && (bb = wb)
            };
            for (let Mb = 0; Mb < hw.length; Mb++) {
              const bb = hw[Mb];
              void 0 === bb || VM(bb) || wb(gM(bb))
            }
            wb((0, ww.j)());
            for (let Mb = 0; Mb < rw.length; Mb++) {
              const bb = rw[Mb];
              void 0 === bb || VM(bb) || wb(Yw(bb))
            }
            return bb
          }();
          (null === eM || null !== bb && LM(bb) > LM(eM)) && (eM = bb)
        }
      } finally {
        Jb(bb)
      }
    }

    function OM() {
      HM = !0
    }

    function UM() {
      if (HM) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && IM(), null !== eM) return eM;
      if (void 0 === Ow) return "wn:unsupported";
      const bb = (0, eb.q)();
      return null === bb ? null : `wn:${bb}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);