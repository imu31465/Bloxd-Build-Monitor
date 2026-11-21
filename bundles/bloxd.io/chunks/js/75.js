export const id = 75;
export const ids = [75];
export const modules = {
  4563: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => EJ,
      f: () => Qk,
      i: () => wJ,
      m: () => kk,
      q: () => VJ,
      r: () => AJ,
      v: () => UJ,
      z: () => rJ,
      C: () => YJ,
      G: () => lk,
      H: () => Kk,
      K: () => uJ,
      N: () => nJ
    });
    var pd = kd(2761);
    const Nd = Function.prototype.toString,
      Wd = RegExp.prototype.exec,
      Pd = Reflect.apply,
      Zd = Function.prototype.call,
      gd = Function.prototype.apply,
      Cd = Function.prototype.bind,
      Kd = Object.defineProperty,
      od = Uint8Array;
    let ld, Qd;
    try {
      ld = globalThis.crypto, Qd = void 0 === ld || null === ld ? void 0 : ld.getRandomValues
    } catch {}
    const Ld = "bloxdBindApply";
    let Od;
    try {
      const dd = Zd;
      Kd(dd, Ld, {
        __proto__: null,
        value: Cd,
        configurable: !0
      });
      try {
        Od = dd[Ld](gd)
      } finally {
        delete dd[Ld]
      }
    } catch {}
    const ed = 16,
      Rd = 256,
      Id = 0,
      Gd = 1,
      vd = 2,
      xd = 3;
    let qd, Bd = Id,
      sd = Pd,
      ad = 0;

    function Md(dd, Jd) {
      return dd === `function ${Jd}() { [native code] }` || dd === `function ${Jd}() {\n    [native code]\n}`
    }
    const Fd = 0,
      Yd = 1,
      md = 2;
    let bd = Fd;

    function Sd(dd, Jd, kd) {
      if (bd === md && Bd === Gd && ! function() {
          const dd = qd;
          return ad >= Rd && (sd(Qd, ld, [dd]), ad = 0), dd[ad++] < 256 / ed
        }()) return function(dd, Jd, kd) {
        return sd(dd, Jd, kd ?? 0)
      }(...arguments);
      if (bd === Fd || Bd === vd) return Pd(dd, Jd, kd);
      let pd;
      bd = Fd;
      try {
        Bd === Id && (Bd = xd, Bd = function() {
          const dd = Pd(Nd, Pd, []);
          if (Md(dd, "apply")) return vd;
          if (null === Pd(Wd, /\(\.\.\.arguments\)/, [dd]) && null === Pd(Wd, /^function\s*\(\.\.\.[\w$]+\)/, [dd])) return vd;
          if ("function" !== typeof Od || "function" !== typeof Zd || "function" !== typeof gd || "function" !== typeof Cd || "function" !== typeof Kd || "function" !== typeof Qd || "function" !== typeof od || !Md(Pd(Nd, Zd, []), "call") || !Md(Pd(Nd, gd, []), "apply") || !Md(Pd(Nd, Cd, []), "bind") || !Md(Pd(Nd, Kd, []), "defineProperty") || !Md(Pd(Nd, Qd, []), "getRandomValues") || !Md(Pd(Nd, od, []), "Uint8Array")) return vd;
          const Jd = Od,
            kd = {},
            pd = function(dd) {
              return this === kd && dd === kd
            };
          try {
            if (!0 !== Jd(pd, kd, [kd])) return vd;
            const dd = new od(Rd);
            Jd(Qd, ld, [dd]), qd = dd
          } catch {
            return vd
          }
          return sd = Jd, Gd
        }()), pd = Pd(dd, Jd, kd)
      } catch (Ld) {
        throw Bd = vd, Ld
      }
      return bd = md, pd
    }
    let jd = Pd;

    function Xd() {
      return (jd === Pd ? 0 : 3) + bd
    }

    function fd() {
      const dd = Xd();
      return jd = Pd, dd
    }

    function nd(dd) {
      jd = dd >= 3 ? Sd : Pd, bd = dd % 3
    }
    const Ud = Function.prototype.toString,
      yd = Object.getOwnPropertyDescriptor,
      Dd = Object.prototype.hasOwnProperty,
      Td = RegExp.prototype.exec,
      Ed = TextEncoder.prototype.encodeInto,
      cd = String.prototype.startsWith,
      hd = Number.prototype.toString,
      rd = WeakMap.prototype.get,
      ud = WeakMap.prototype.set,
      td = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      Vd = new TextEncoder,
      zd = new Uint8Array(1024),
      Hd = 9999999,
      wd = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      Ad = new WeakMap;

    function dJ(dd) {
      if ("function" !== typeof dd) return "#a0.0";
      const Jd = jd(rd, Ad, [dd]);
      if (void 0 !== Jd) return Jd;
      const kd = jd(Ud, dd, []),
        pd = kd.length > Hd ? Hd : kd.length,
        Nd = `#${function(dd,Jd){const kd=jd(Td,td,[Jd]);if(null===kd)return"s";const pd=kd[1];if("ProxyObject"===pd)return"p";if(""!==pd)return jd(cd,pd,["bound "])?"b":"n";try{const Jd=yd(dd,"name"),kd=void 0!==Jd&&jd(Dd,Jd,["value"])?Jd.value:void 0;return"string"===typeof kd&&jd(cd,kd,["bound "])?"b":"p"}catch{return"p"}}(dd,kd)}${pd}.${function(dd){const{written:Jd}=jd(Ed,Vd,[dd,zd]);let kd=2166136261;for(let pd=0;pd<Jd;pd++)kd=(kd^zd[pd])>>>0,kd=kd+(kd<<1)+(kd<<4)+(kd<<7)+(kd<<8)+(kd<<24)>>>0;return jd(hd,kd,[36])}(kd)}`;
      return jd(ud, Ad, [dd, Nd]), Nd
    }

    function JJ(dd) {
      const Jd = jd(Td, wd, [dd]);
      return null === Jd ? dd : Jd[1]
    }
    var kJ = kd(2781);
    const pJ = Function.prototype.toString,
      NJ = Object.getOwnPropertyDescriptor,
      WJ = RegExp.prototype.exec,
      PJ = Object.prototype.hasOwnProperty,
      ZJ = Set.prototype.has,
      gJ = WeakMap.prototype.get,
      CJ = WeakMap.prototype.set,
      KJ = Reflect.get,
      oJ = Object.getPrototypeOf,
      lJ = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function QJ(dd, Jd, kd) {
      return {
        code: dd,
        holder: Jd,
        key: kd,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${kd}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function LJ() {
      return lJ
    }
    const OJ = lJ?.Instance.prototype,
      eJ = lJ?.Memory.prototype;

    function RJ() {
      return eJ
    }
    let IJ, GJ;
    try {
      const dd = globalThis.crypto,
        Jd = dd?.subtle;
      IJ = dd ? oJ(dd) : void 0, GJ = Jd ? oJ(Jd) : void 0
    } catch {}

    function vJ(dd, Jd) {
      for (let kd = dd; void 0 !== kd && null !== kd; kd = oJ(kd)) {
        const dd = NJ(kd, Jd);
        if (dd) return dd
      }
    }
    const xJ = [QJ("in", LJ, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), QJ("is", LJ, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), QJ("co", LJ, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), QJ("cs", LJ, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), QJ("mo", LJ, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), QJ("it", LJ, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), QJ("me", LJ, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), QJ("ex", (function() {
      return OJ
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), QJ("bu", RJ, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), QJ("gr", RJ, "grow", {
      tier: "punished"
    }), QJ("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), QJ("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), QJ("su", (function() {
      return IJ
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), QJ("dg", (function() {
      return GJ
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function qJ(dd) {
      let Jd;
      try {
        const kd = KJ(globalThis, dd);
        Jd = "function" === typeof kd ? kd.prototype : void 0
      } catch {}
      return () => Jd
    }

    function BJ(dd, Jd, kd) {
      return kd.map((kd => QJ(dd, Jd, kd)))
    }
    const sJ = QJ("rx", qJ("HTMLCanvasElement"), "getContext"),
      iJ = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      aJ = {
        webgpu: [...BJ("gd", qJ("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...BJ("gq", qJ("GPUQueue"), ["submit", "writeBuffer"]), ...BJ("ge", qJ("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...BJ("gp", qJ("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), sJ],
        webgl: [...BJ("g2", qJ("WebGL2RenderingContext"), [...iJ, "drawArraysInstanced", "drawElementsInstanced"]), sJ],
        webgl1: [...BJ("g1", qJ("WebGLRenderingContext"), iJ), sJ]
      };
    let MJ = [];
    const FJ = new WeakMap;

    function YJ(dd, Jd) {
      const kd = fd();
      try {
        jd(CJ, FJ, [dd, Jd])
      } finally {
        nd(kd)
      }
    }

    function mJ(dd) {
      try {
        const Jd = gk(dd),
          kd = jd(gJ, FJ, [Jd]);
        return Jk(kd, dd) ? bJ(dd, !0) : `${bJ(dd,!1)}${dJ(kd??Jd)}`
      } catch {
        return `${bJ(dd,!1)}${dJ(void 0)}`
      }
    }

    function bJ(dd, Jd) {
      let {
        code: kd,
        key: pd
      } = dd;
      return `wh:${kd}${Jd?"-dbg":""}:${pd}`
    }

    function SJ(dd) {
      return Object.values(aJ).flatMap((Jd => Jd.map((Jd => bJ(Jd, dd)))))
    }
    const jJ = new Set(SJ(!0)),
      XJ = new Set([...SJ(!1), ...jJ]),
      fJ = bJ(sJ, !1);

    function nJ(dd) {
      MJ = aJ[dd]
    }

    function UJ(dd) {
      const Jd = fd();
      try {
        return yJ(dd) || yJ(JJ(dd))
      } finally {
        nd(Jd)
      }
    }

    function yJ(dd) {
      return jd(ZJ, XJ, [dd])
    }

    function DJ(dd) {
      return new Set(xJ.filter((Jd => Jd.tier === dd)).map((dd => `wh:${dd.code}`)))
    }
    const TJ = DJ("punished"),
      EJ = !1,
      cJ = new Set(kJ.b),
      hJ = DJ("weighted");

    function rJ(dd) {
      const Jd = fd();
      try {
        return tJ(JJ(dd))
      } finally {
        nd(Jd)
      }
    }

    function uJ(dd) {
      const Jd = fd();
      try {
        return JJ(dd)
      } finally {
        nd(Jd)
      }
    }

    function tJ(dd) {
      return jd(ZJ, hJ, [dd])
    }

    function VJ(dd) {
      const Jd = fd();
      try {
        return zJ(dd)
      } finally {
        nd(Jd)
      }
    }

    function zJ(dd) {
      return jd(ZJ, cJ, [dd])
    }

    function HJ(dd) {
      return "wb" === dd || jd(ZJ, TJ, [dd])
    }

    function wJ(dd) {
      const Jd = fd();
      try {
        return HJ(dd) || zJ(dd)
      } finally {
        nd(Jd)
      }
    }

    function AJ(dd) {
      const Jd = fd();
      try {
        return "wb" === dd || EJ && HJ(dd)
      } finally {
        nd(Jd)
      }
    }

    function dk(dd, Jd) {
      let {
        isGetter: kd
      } = Jd;
      const pd = NJ(dd, kd ? "get" : "value");
      return void 0 === pd ? void 0 : pd.value
    }

    function Jk(dd, Jd) {
      let {
        isConstructor: kd,
        native: pd
      } = Jd;
      return "function" === typeof dd && (!(!kd && jd(PJ, dd, ["prototype"])) && null !== jd(WJ, pd, [jd(pJ, dd, [])]))
    }

    function kk(dd, Jd) {
      return Jk(dd, QJ("", (() => {}), Jd, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let pk = null,
      Nk = !1;

    function Wk() {
      try {
        return globalThis.WebAssembly === lJ
      } catch {
        return !1
      }
    }

    function Pk(dd) {
      try {
        return function(dd) {
          const {
            holder: Jd,
            key: kd,
            onNamespace: pd,
            inSecureContext: Nd
          } = dd, Wd = Jd(), Pd = vJ(Wd, kd);
          if (!Pd) return !(Nd && !0 === globalThis.isSecureContext);
          const Zd = dk(Pd, dd);
          if (!Jk(Zd, dd)) return !1;
          if (pd) {
            const Jd = globalThis.WebAssembly;
            if (Jd !== Wd && null !== Jd && ("object" === typeof Jd || "function" === typeof Jd)) {
              const pd = KJ(Jd, kd);
              return pd === Zd || void 0 === pd || Jk(pd, dd)
            }
          }
          return !0
        }(dd)
      } catch {
        return !1
      }
    }

    function Zk(dd) {
      const Jd = `wh:${dd.code}`;
      if ("punished" === dd.tier) return Jd;
      try {
        return `${Jd}${dJ(gk(dd))}`
      } catch {
        return `${Jd}${dJ(void 0)}`
      }
    }

    function gk(dd) {
      const Jd = vJ(dd.holder(), dd.key),
        kd = void 0 === Jd ? void 0 : dk(Jd, dd);
      return dd.onNamespace && !Wk() && Jk(kd, dd) ? KJ(globalThis.WebAssembly, dd.key) : kd
    }

    function Ck(dd) {
      if (HJ(dd)) return 5;
      const Jd = JJ(dd);
      return tJ(Jd) ? 4 : zJ(dd) ? 3 : yJ(Jd) ? function(dd) {
        return jd(ZJ, jJ, [dd])
      }(Jd) ? -1 : Jd === fJ ? 0 : 1 : 2
    }

    function Kk() {
      const dd = function() {
        const dd = Xd();
        return Bd === Id || Bd === Gd ? (jd = Sd, bd = Yd) : jd = Pd, dd
      }();
      try {
        if (null === pk || !HJ(pk)) {
          const dd = function() {
            if (void 0 === lJ) return null;
            let dd = Wk() ? null : "wh:wa";
            const Jd = Jd => {
              null !== Jd && (null === dd || Ck(Jd) > Ck(dd)) && (dd = Jd)
            };
            for (let kd = 0; kd < xJ.length; kd++) {
              const dd = xJ[kd];
              void 0 === dd || Pk(dd) || Jd(Zk(dd))
            }
            Jd((0, kJ.o)());
            for (let kd = 0; kd < MJ.length; kd++) {
              const dd = MJ[kd];
              void 0 === dd || Pk(dd) || Jd(mJ(dd))
            }
            return dd
          }();
          (null === pk || null !== dd && Ck(dd) > Ck(pk)) && (pk = dd)
        }
      } finally {
        nd(dd)
      }
    }

    function lk() {
      Nk = !0
    }

    function Qk() {
      if (Nk) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Kk(), null !== pk) return pk;
      if (void 0 === lJ) return "wn:unsupported";
      const dd = (0, pd.l)();
      return null === dd ? null : `wn:${dd}`
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);