export const id = 75;
export const ids = [75];
export const modules = {
  4466: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Pu,
      f: () => Hh,
      j: () => cu,
      k: () => uh,
      m: () => fu,
      n: () => Qu,
      r: () => su,
      t: () => yu,
      u: () => zu,
      v: () => ah,
      w: () => Sh,
      z: () => Vu,
      C: () => Nu
    });
    var Bb = hb(2683);
    const Ob = Function.prototype.toString,
      Gb = RegExp.prototype.exec,
      Ub = Reflect.apply,
      Lb = Function.prototype.call,
      Yb = Function.prototype.apply,
      Sb = Function.prototype.bind,
      ab = Object.defineProperty,
      Hb = Uint8Array;
    let wb, Zb;
    try {
      wb = globalThis.crypto, Zb = void 0 === wb || null === wb ? void 0 : wb.getRandomValues
    } catch {}
    const Xb = "bloxdBindApply";
    let pb;
    try {
      const bb = Lb;
      ab(bb, Xb, {
        __proto__: null,
        value: Sb,
        configurable: !0
      });
      try {
        pb = bb[Xb](Yb)
      } finally {
        delete bb[Xb]
      }
    } catch {}
    const ob = 16,
      Ab = 256,
      lb = 0,
      Kb = 1,
      Wb = 2,
      Cb = 3;
    let db, rb = lb,
      jb = Ub,
      nb = 0;

    function Db(bb, ub) {
      return bb === `function ${ub}() { [native code] }` || bb === `function ${ub}() {\n    [native code]\n}`
    }
    const xb = 0,
      zb = 1,
      gb = 2;
    let ib = xb;

    function vb(bb, ub, hb) {
      if (ib === gb && rb === Kb && ! function() {
          const bb = db;
          return nb >= Ab && (jb(Zb, wb, [bb]), nb = 0), bb[nb++] < 256 / ob
        }()) return function(bb, ub, hb) {
        return jb(bb, ub, hb ?? 0)
      }(...arguments);
      if (ib === xb || rb === Wb) return Ub(bb, ub, hb);
      let Bb;
      ib = xb;
      try {
        rb === lb && (rb = Cb, rb = function() {
          const bb = Ub(Ob, Ub, []);
          if (Db(bb, "apply")) return Wb;
          if (null === Ub(Gb, /\(\.\.\.arguments\)/, [bb]) && null === Ub(Gb, /^function\s*\(\.\.\.[\w$]+\)/, [bb])) return Wb;
          if ("function" !== typeof pb || "function" !== typeof Lb || "function" !== typeof Yb || "function" !== typeof Sb || "function" !== typeof ab || "function" !== typeof Zb || "function" !== typeof Hb || !Db(Ub(Ob, Lb, []), "call") || !Db(Ub(Ob, Yb, []), "apply") || !Db(Ub(Ob, Sb, []), "bind") || !Db(Ub(Ob, ab, []), "defineProperty") || !Db(Ub(Ob, Zb, []), "getRandomValues") || !Db(Ub(Ob, Hb, []), "Uint8Array")) return Wb;
          const ub = pb,
            hb = {},
            Bb = function(bb) {
              return this === hb && bb === hb
            };
          try {
            if (!0 !== ub(Bb, hb, [hb])) return Wb;
            const bb = new Hb(Ab);
            ub(Zb, wb, [bb]), db = bb
          } catch {
            return Wb
          }
          return jb = ub, Kb
        }()), Bb = Ub(bb, ub, hb)
      } catch (Xb) {
        throw rb = Wb, Xb
      }
      return ib = gb, Bb
    }
    let tb = Ub;

    function Jb() {
      return (tb === Ub ? 0 : 3) + ib
    }

    function eb() {
      const bb = Jb();
      return tb = Ub, bb
    }

    function Nb(bb) {
      tb = bb >= 3 ? vb : Ub, ib = bb % 3
    }
    const sb = Function.prototype.toString,
      Mb = Object.getOwnPropertyDescriptor,
      mb = Object.prototype.hasOwnProperty,
      Ib = RegExp.prototype.exec,
      Pb = TextEncoder.prototype.encodeInto,
      qb = String.prototype.startsWith,
      Eb = Number.prototype.toString,
      yb = WeakMap.prototype.get,
      Vb = WeakMap.prototype.set,
      Fb = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      fb = new TextEncoder,
      kb = new Uint8Array(1024),
      Tb = 9999999,
      cb = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      Qb = new WeakMap;

    function Rb(bb) {
      if ("function" !== typeof bb) return "#a0.0";
      const ub = tb(yb, Qb, [bb]);
      if (void 0 !== ub) return ub;
      const hb = tb(sb, bb, []),
        Bb = hb.length > Tb ? Tb : hb.length,
        Ob = `#${function(bb,ub){const hb=tb(Ib,Fb,[ub]);if(null===hb)return"s";const Bb=hb[1];if("ProxyObject"===Bb)return"p";if(""!==Bb)return tb(qb,Bb,["bound "])?"b":"n";try{const ub=Mb(bb,"name"),hb=void 0!==ub&&tb(mb,ub,["value"])?ub.value:void 0;return"string"===typeof hb&&tb(qb,hb,["bound "])?"b":"p"}catch{return"p"}}(bb,hb)}${Bb}.${function(bb){const{written:ub}=tb(Pb,fb,[bb,kb]);let hb=2166136261;for(let Bb=0;Bb<ub;Bb++)hb=(hb^kb[Bb])>>>0,hb=hb+(hb<<1)+(hb<<4)+(hb<<7)+(hb<<8)+(hb<<24)>>>0;return tb(Eb,hb,[36])}(hb)}`;
      return tb(Vb, Qb, [bb, Ob]), Ob
    }

    function bu(bb) {
      const ub = tb(Ib, cb, [bb]);
      return null === ub ? bb : ub[1]
    }
    var uu = hb(2693);
    const hu = Function.prototype.toString,
      Bu = Object.getOwnPropertyDescriptor,
      Ou = RegExp.prototype.exec,
      Gu = Object.prototype.hasOwnProperty,
      Uu = Set.prototype.has,
      Lu = WeakMap.prototype.get,
      Yu = WeakMap.prototype.set,
      Su = Reflect.get,
      au = Object.getPrototypeOf,
      Hu = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function wu(bb, ub, hb) {
      return {
        code: bb,
        holder: ub,
        key: hb,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${hb}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function Zu() {
      return Hu
    }
    const Xu = Hu?.Instance.prototype,
      pu = Hu?.Memory.prototype;

    function ou() {
      return pu
    }
    let Au, lu;
    try {
      const bb = globalThis.crypto,
        ub = bb?.subtle;
      Au = bb ? au(bb) : void 0, lu = ub ? au(ub) : void 0
    } catch {}

    function Ku(bb, ub) {
      for (let hb = bb; void 0 !== hb && null !== hb; hb = au(hb)) {
        const bb = Bu(hb, ub);
        if (bb) return bb
      }
    }
    const Wu = [wu("in", Zu, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), wu("is", Zu, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), wu("co", Zu, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), wu("cs", Zu, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), wu("mo", Zu, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), wu("it", Zu, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), wu("me", Zu, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), wu("ex", (function() {
      return Xu
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), wu("bu", ou, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), wu("gr", ou, "grow", {
      tier: "punished"
    }), wu("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), wu("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), wu("su", (function() {
      return Au
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), wu("dg", (function() {
      return lu
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function Cu(bb) {
      let ub;
      try {
        const hb = Su(globalThis, bb);
        ub = "function" === typeof hb ? hb.prototype : void 0
      } catch {}
      return () => ub
    }

    function du(bb, ub, hb) {
      return hb.map((hb => wu(bb, ub, hb)))
    }
    const ru = wu("rx", Cu("HTMLCanvasElement"), "getContext"),
      ju = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      nu = {
        webgpu: [...du("gd", Cu("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...du("gq", Cu("GPUQueue"), ["submit", "writeBuffer"]), ...du("ge", Cu("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...du("gp", Cu("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), ru],
        webgl: [...du("g2", Cu("WebGL2RenderingContext"), [...ju, "drawArraysInstanced", "drawElementsInstanced"]), ru],
        webgl1: [...du("g1", Cu("WebGLRenderingContext"), ju), ru]
      };
    let Du = [];
    const xu = new WeakMap;

    function zu(bb, ub) {
      const hb = eb();
      try {
        tb(Yu, xu, [bb, ub])
      } finally {
        Nb(hb)
      }
    }

    function gu(bb) {
      try {
        const ub = Lh(bb),
          hb = tb(Lu, xu, [ub]);
        return bh(hb, bb) ? iu(bb, !0) : `${iu(bb,!1)}${Rb(hb??ub)}`
      } catch {
        return `${iu(bb,!1)}${Rb(void 0)}`
      }
    }

    function iu(bb, ub) {
      let {
        code: hb,
        key: Bb
      } = bb;
      return `wh:${hb}${ub?"-dbg":""}:${Bb}`
    }

    function vu(bb) {
      return Object.values(nu).flatMap((ub => ub.map((ub => iu(ub, bb)))))
    }
    const tu = new Set(vu(!0)),
      Ju = new Set([...vu(!1), ...tu]),
      eu = iu(ru, !1);

    function Nu(bb) {
      Du = nu[bb]
    }

    function su(bb) {
      const ub = eb();
      try {
        return Mu(bb) || Mu(bu(bb))
      } finally {
        Nb(ub)
      }
    }

    function Mu(bb) {
      return tb(Uu, Ju, [bb])
    }

    function mu(bb) {
      return new Set(Wu.filter((ub => ub.tier === bb)).map((bb => `wh:${bb.code}`)))
    }
    const Iu = mu("punished"),
      Pu = !1,
      qu = new Set(uu.d),
      Eu = mu("weighted");

    function yu(bb) {
      const ub = eb();
      try {
        return Fu(bu(bb))
      } finally {
        Nb(ub)
      }
    }

    function Vu(bb) {
      const ub = eb();
      try {
        return bu(bb)
      } finally {
        Nb(ub)
      }
    }

    function Fu(bb) {
      return tb(Uu, Eu, [bb])
    }

    function fu(bb) {
      const ub = eb();
      try {
        return ku(bb)
      } finally {
        Nb(ub)
      }
    }

    function ku(bb) {
      return tb(Uu, qu, [bb])
    }

    function Tu(bb) {
      return "wb" === bb || tb(Uu, Iu, [bb])
    }

    function cu(bb) {
      const ub = eb();
      try {
        return Tu(bb) || ku(bb)
      } finally {
        Nb(ub)
      }
    }

    function Qu(bb) {
      const ub = eb();
      try {
        return "wb" === bb || Pu && Tu(bb)
      } finally {
        Nb(ub)
      }
    }

    function Ru(bb, ub) {
      let {
        isGetter: hb
      } = ub;
      const Bb = Bu(bb, hb ? "get" : "value");
      return void 0 === Bb ? void 0 : Bb.value
    }

    function bh(bb, ub) {
      let {
        isConstructor: hb,
        native: Bb
      } = ub;
      return "function" === typeof bb && (!(!hb && tb(Gu, bb, ["prototype"])) && null !== tb(Ou, Bb, [tb(hu, bb, [])]))
    }

    function uh(bb, ub) {
      return bh(bb, wu("", (() => {}), ub, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let hh = null,
      Bh = !1;

    function Oh() {
      try {
        return globalThis.WebAssembly === Hu
      } catch {
        return !1
      }
    }

    function Gh(bb) {
      try {
        return function(bb) {
          const {
            holder: ub,
            key: hb,
            onNamespace: Bb,
            inSecureContext: Ob
          } = bb, Gb = ub(), Ub = Ku(Gb, hb);
          if (!Ub) return !(Ob && !0 === globalThis.isSecureContext);
          const Lb = Ru(Ub, bb);
          if (!bh(Lb, bb)) return !1;
          if (Bb) {
            const ub = globalThis.WebAssembly;
            if (ub !== Gb && null !== ub && ("object" === typeof ub || "function" === typeof ub)) {
              const Bb = Su(ub, hb);
              return Bb === Lb || void 0 === Bb || bh(Bb, bb)
            }
          }
          return !0
        }(bb)
      } catch {
        return !1
      }
    }

    function Uh(bb) {
      const ub = `wh:${bb.code}`;
      if ("punished" === bb.tier) return ub;
      try {
        return `${ub}${Rb(Lh(bb))}`
      } catch {
        return `${ub}${Rb(void 0)}`
      }
    }

    function Lh(bb) {
      const ub = Ku(bb.holder(), bb.key),
        hb = void 0 === ub ? void 0 : Ru(ub, bb);
      return bb.onNamespace && !Oh() && bh(hb, bb) ? Su(globalThis.WebAssembly, bb.key) : hb
    }

    function Yh(bb) {
      if (Tu(bb)) return 5;
      const ub = bu(bb);
      return Fu(ub) ? 4 : ku(bb) ? 3 : Mu(ub) ? function(bb) {
        return tb(Uu, tu, [bb])
      }(ub) ? -1 : ub === eu ? 0 : 1 : 2
    }

    function Sh() {
      const bb = function() {
        const bb = Jb();
        return rb === lb || rb === Kb ? (tb = vb, ib = zb) : tb = Ub, bb
      }();
      try {
        if (null === hh || !Tu(hh)) {
          const bb = function() {
            if (void 0 === Hu) return null;
            let bb = Oh() ? null : "wh:wa";
            const ub = ub => {
              null !== ub && (null === bb || Yh(ub) > Yh(bb)) && (bb = ub)
            };
            for (let hb = 0; hb < Wu.length; hb++) {
              const bb = Wu[hb];
              void 0 === bb || Gh(bb) || ub(Uh(bb))
            }
            ub((0, uu.p)());
            for (let hb = 0; hb < Du.length; hb++) {
              const bb = Du[hb];
              void 0 === bb || Gh(bb) || ub(gu(bb))
            }
            return bb
          }();
          (null === hh || null !== bb && Yh(bb) > Yh(hh)) && (hh = bb)
        }
      } finally {
        Nb(bb)
      }
    }

    function ah() {
      Bh = !0
    }

    function Hh() {
      if (Bh) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Sh(), null !== hh) return hh;
      if (void 0 === Hu) return "wn:unsupported";
      const bb = (0, Bb.n)();
      return null === bb ? null : `wn:${bb}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);