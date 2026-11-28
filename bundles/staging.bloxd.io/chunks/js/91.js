export const id = 91;
export const ids = [91];
export const modules = {
  5426: (dd, Od, md) => {
    md.d(Od, {
      c: () => jO,
      e: () => qm,
      g: () => MO,
      i: () => Wm,
      m: () => ZO,
      n: () => dm,
      o: () => LO,
      s: () => IO,
      t: () => sO,
      v: () => Nm,
      z: () => om,
      D: () => lO,
      F: () => nO
    });
    var Wd = md(2421);
    const Fd = Function.prototype.toString,
      Rd = RegExp.prototype.exec,
      Xd = Reflect.apply,
      Kd = Function.prototype.call,
      hd = Function.prototype.apply,
      vd = Function.prototype.bind,
      Qd = Object.defineProperty,
      td = Uint8Array;
    let od, Nd;
    try {
      od = globalThis.crypto, Nd = void 0 === od || null === od ? void 0 : od.getRandomValues
    } catch {}
    const qd = "bloxdBindApply";
    let Hd;
    try {
      const dd = Kd;
      Qd(dd, qd, {
        __proto__: null,
        value: vd,
        configurable: !0
      });
      try {
        Hd = dd[qd](hd)
      } finally {
        delete dd[qd]
      }
    } catch {}
    const yd = 16,
      bd = 256,
      Td = 0,
      pd = 1,
      Yd = 2,
      gd = 3;
    let wd, Ed = Td,
      Jd = Xd,
      Ud = 0;

    function xd(dd, Od) {
      return dd === `function ${Od}() { [native code] }` || dd === `function ${Od}() {\n    [native code]\n}`
    }
    const Bd = 0,
      Sd = 1,
      sd = 2;
    let ud = Bd;

    function Vd(dd, Od, md) {
      if (ud === sd && Ed === pd && ! function() {
          const dd = wd;
          return Ud >= bd && (Jd(Nd, od, [dd]), Ud = 0), dd[Ud++] < 256 / yd
        }()) return function(dd, Od, md) {
        return Jd(dd, Od, md ?? 0)
      }(...arguments);
      if (ud === Bd || Ed === Yd) return Xd(dd, Od, md);
      let Wd;
      ud = Bd;
      try {
        Ed === Td && (Ed = gd, Ed = function() {
          const dd = Xd(Fd, Xd, []);
          if (xd(dd, "apply")) return Yd;
          if (null === Xd(Rd, /\(\.\.\.arguments\)/, [dd]) && null === Xd(Rd, /^function\s*\(\.\.\.[\w$]+\)/, [dd])) return Yd;
          if ("function" !== typeof Hd || "function" !== typeof Kd || "function" !== typeof hd || "function" !== typeof vd || "function" !== typeof Qd || "function" !== typeof Nd || "function" !== typeof td || !xd(Xd(Fd, Kd, []), "call") || !xd(Xd(Fd, hd, []), "apply") || !xd(Xd(Fd, vd, []), "bind") || !xd(Xd(Fd, Qd, []), "defineProperty") || !xd(Xd(Fd, Nd, []), "getRandomValues") || !xd(Xd(Fd, td, []), "Uint8Array")) return Yd;
          const Od = Hd,
            md = {},
            Wd = function(dd) {
              return this === md && dd === md
            };
          try {
            if (!0 !== Od(Wd, md, [md])) return Yd;
            const dd = new td(bd);
            Od(Nd, od, [dd]), wd = dd
          } catch {
            return Yd
          }
          return Jd = Od, pd
        }()), Wd = Xd(dd, Od, md)
      } catch (qd) {
        throw Ed = Yd, qd
      }
      return ud = sd, Wd
    }
    let Ad = Xd;

    function rd() {
      return (Ad === Xd ? 0 : 3) + ud
    }

    function Gd() {
      const dd = rd();
      return Ad = Xd, dd
    }

    function nd(dd) {
      Ad = dd >= 3 ? Vd : Xd, ud = dd % 3
    }
    const Ld = Function.prototype.toString,
      Pd = Object.getOwnPropertyDescriptor,
      zd = Object.prototype.hasOwnProperty,
      cd = RegExp.prototype.exec,
      jd = TextEncoder.prototype.encodeInto,
      Dd = String.prototype.startsWith,
      ed = Number.prototype.toString,
      Id = WeakMap.prototype.get,
      ld = WeakMap.prototype.set,
      Cd = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      Zd = new TextEncoder,
      kd = new Uint8Array(1024),
      fd = 9999999,
      Md = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      dO = new WeakMap;

    function OO(dd) {
      if ("function" !== typeof dd) return "#a0.0";
      const Od = Ad(Id, dO, [dd]);
      if (void 0 !== Od) return Od;
      const md = Ad(Ld, dd, []),
        Wd = md.length > fd ? fd : md.length,
        Fd = `#${function(dd,Od){const md=Ad(cd,Cd,[Od]);if(null===md)return"s";const Wd=md[1];if("ProxyObject"===Wd)return"p";if(""!==Wd)return Ad(Dd,Wd,["bound "])?"b":"n";try{const Od=Pd(dd,"name"),md=void 0!==Od&&Ad(zd,Od,["value"])?Od.value:void 0;return"string"===typeof md&&Ad(Dd,md,["bound "])?"b":"p"}catch{return"p"}}(dd,md)}${Wd}.${function(dd){const{written:Od}=Ad(jd,Zd,[dd,kd]);let md=2166136261;for(let Wd=0;Wd<Od;Wd++)md=(md^kd[Wd])>>>0,md=md+(md<<1)+(md<<4)+(md<<7)+(md<<8)+(md<<24)>>>0;return Ad(ed,md,[36])}(md)}`;
      return Ad(ld, dO, [dd, Fd]), Fd
    }

    function mO(dd) {
      const Od = Ad(cd, Md, [dd]);
      return null === Od ? dd : Od[1]
    }
    var WO = md(2433);
    const FO = Function.prototype.toString,
      RO = Object.getOwnPropertyDescriptor,
      XO = RegExp.prototype.exec,
      KO = Object.prototype.hasOwnProperty,
      hO = Set.prototype.has,
      vO = WeakMap.prototype.get,
      QO = WeakMap.prototype.set,
      tO = Reflect.get,
      oO = Object.getPrototypeOf,
      NO = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function qO(dd, Od, md) {
      return {
        code: dd,
        holder: Od,
        key: md,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${md}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function HO() {
      return NO
    }
    const yO = NO?.Instance.prototype,
      bO = NO?.Memory.prototype;

    function TO() {
      return bO
    }
    let pO, YO;
    try {
      const dd = globalThis.crypto,
        Od = dd?.subtle;
      pO = dd ? oO(dd) : void 0, YO = Od ? oO(Od) : void 0
    } catch {}

    function gO(dd, Od) {
      for (let md = dd; void 0 !== md && null !== md; md = oO(md)) {
        const dd = RO(md, Od);
        if (dd) return dd
      }
    }
    const wO = [qO("in", HO, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), qO("is", HO, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), qO("co", HO, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), qO("cs", HO, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), qO("mo", HO, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), qO("it", HO, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), qO("me", HO, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), qO("ex", (function() {
      return yO
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), qO("bu", TO, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), qO("gr", TO, "grow", {
      tier: "punished"
    }), qO("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), qO("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), qO("su", (function() {
      return pO
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), qO("dg", (function() {
      return YO
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function aO(dd) {
      let Od;
      try {
        const md = tO(globalThis, dd);
        Od = "function" === typeof md ? md.prototype : void 0
      } catch {}
      return () => Od
    }

    function EO(dd, Od, md) {
      return md.map((md => qO(dd, Od, md)))
    }
    const JO = qO("rx", aO("HTMLCanvasElement"), "getContext"),
      UO = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      xO = {
        webgpu: [...EO("gd", aO("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...EO("gq", aO("GPUQueue"), ["submit", "writeBuffer"]), ...EO("ge", aO("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...EO("gp", aO("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), JO],
        webgl: [...EO("g2", aO("WebGL2RenderingContext"), [...UO, "drawArraysInstanced", "drawElementsInstanced"]), JO],
        webgl1: [...EO("g1", aO("WebGLRenderingContext"), UO), JO]
      };
    let BO = [];
    const SO = new WeakMap;

    function sO(dd, Od) {
      const md = Gd();
      try {
        Ad(QO, SO, [dd, Od])
      } finally {
        nd(md)
      }
    }

    function uO(dd) {
      try {
        const Od = Qm(dd),
          md = Ad(vO, SO, [Od]);
        return mm(md, dd) ? VO(dd, !0) : `${VO(dd,!1)}${OO(md??Od)}`
      } catch {
        return `${VO(dd,!1)}${OO(void 0)}`
      }
    }

    function VO(dd, Od) {
      let {
        code: md,
        key: Wd
      } = dd;
      return `wh:${md}${Od?"-dbg":""}:${Wd}`
    }

    function iO(dd) {
      return Object.values(xO).flatMap((Od => Od.map((Od => VO(Od, dd)))))
    }
    const AO = new Set(iO(!0)),
      rO = new Set([...iO(!1), ...AO]),
      GO = VO(JO, !1);

    function nO(dd) {
      BO = xO[dd]
    }

    function LO(dd) {
      const Od = Gd();
      try {
        return PO(dd) || PO(mO(dd))
      } finally {
        nd(Od)
      }
    }

    function PO(dd) {
      return Ad(hO, rO, [dd])
    }

    function zO(dd) {
      return new Set(wO.filter((Od => Od.tier === dd)).map((dd => `wh:${dd.code}`)))
    }
    const cO = zO("punished"),
      jO = !1,
      DO = new Set(WO.e),
      eO = zO("weighted");

    function IO(dd) {
      const Od = Gd();
      try {
        return CO(mO(dd))
      } finally {
        nd(Od)
      }
    }

    function lO(dd) {
      const Od = Gd();
      try {
        return mO(dd)
      } finally {
        nd(Od)
      }
    }

    function CO(dd) {
      return Ad(hO, eO, [dd])
    }

    function ZO(dd) {
      const Od = Gd();
      try {
        return kO(dd)
      } finally {
        nd(Od)
      }
    }

    function kO(dd) {
      return Ad(hO, DO, [dd])
    }

    function fO(dd) {
      return "wb" === dd || Ad(hO, cO, [dd])
    }

    function MO(dd) {
      const Od = Gd();
      try {
        return fO(dd) || kO(dd)
      } finally {
        nd(Od)
      }
    }

    function dm(dd) {
      const Od = Gd();
      try {
        return "wb" === dd || jO && fO(dd)
      } finally {
        nd(Od)
      }
    }

    function Om(dd, Od) {
      let {
        isGetter: md
      } = Od;
      const Wd = RO(dd, md ? "get" : "value");
      return void 0 === Wd ? void 0 : Wd.value
    }

    function mm(dd, Od) {
      let {
        isConstructor: md,
        native: Wd
      } = Od;
      return "function" === typeof dd && (!(!md && Ad(KO, dd, ["prototype"])) && null !== Ad(XO, Wd, [Ad(FO, dd, [])]))
    }

    function Wm(dd, Od) {
      return mm(dd, qO("", (() => {}), Od, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let Fm = null,
      Rm = !1;

    function Xm() {
      try {
        return globalThis.WebAssembly === NO
      } catch {
        return !1
      }
    }

    function Km(dd) {
      try {
        return function(dd) {
          const {
            holder: Od,
            key: md,
            onNamespace: Wd,
            inSecureContext: Fd
          } = dd, Rd = Od(), Xd = gO(Rd, md);
          if (!Xd) return !(Fd && !0 === globalThis.isSecureContext);
          const Kd = Om(Xd, dd);
          if (!mm(Kd, dd)) return !1;
          if (Wd) {
            const Od = globalThis.WebAssembly;
            if (Od !== Rd && null !== Od && ("object" === typeof Od || "function" === typeof Od)) {
              const Wd = tO(Od, md);
              return Wd === Kd || void 0 === Wd || mm(Wd, dd)
            }
          }
          return !0
        }(dd)
      } catch {
        return !1
      }
    }

    function hm(dd) {
      const Od = `wh:${dd.code}`;
      if ("punished" === dd.tier) return Od;
      try {
        return `${Od}${OO(Qm(dd))}`
      } catch {
        return `${Od}${OO(void 0)}`
      }
    }

    function Qm(dd) {
      const Od = gO(dd.holder(), dd.key),
        md = void 0 === Od ? void 0 : Om(Od, dd);
      return dd.onNamespace && !Xm() && mm(md, dd) ? tO(globalThis.WebAssembly, dd.key) : md
    }

    function tm(dd) {
      if (fO(dd)) return 5;
      const Od = mO(dd);
      return CO(Od) ? 4 : kO(dd) ? 3 : PO(Od) ? function(dd) {
        return Ad(hO, AO, [dd])
      }(Od) ? -1 : Od === GO ? 0 : 1 : 2
    }

    function om() {
      const dd = function() {
        const dd = rd();
        return Ed === Td || Ed === pd ? (Ad = Vd, ud = Sd) : Ad = Xd, dd
      }();
      try {
        if (null === Fm || !fO(Fm)) {
          const dd = function() {
            if (void 0 === NO) return null;
            let dd = Xm() ? null : "wh:wa";
            const Od = Od => {
              null !== Od && (null === dd || tm(Od) > tm(dd)) && (dd = Od)
            };
            for (let md = 0; md < wO.length; md++) {
              const dd = wO[md];
              void 0 === dd || Km(dd) || Od(hm(dd))
            }
            Od((0, WO.r)());
            for (let md = 0; md < BO.length; md++) {
              const dd = BO[md];
              void 0 === dd || Km(dd) || Od(uO(dd))
            }
            return dd
          }();
          (null === Fm || null !== dd && tm(dd) > tm(Fm)) && (Fm = dd)
        }
      } finally {
        nd(dd)
      }
    }

    function Nm() {
      Rm = !0
    }

    function qm() {
      if (Rm) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && om(), null !== Fm) return Fm;
      if (void 0 === NO) return "wn:unsupported";
      const dd = (0, Wd.m)();
      return null === dd ? null : `wn:${dd}`
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);