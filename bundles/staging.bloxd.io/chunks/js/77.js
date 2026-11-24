export const id = 77;
export const ids = [77];
export const modules = {
  4632: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => MT,
      g: () => of,
      i: () => WT,
      l: () => ff,
      m: () => UT,
      p: () => FT,
      q: () => CT,
      s: () => LT,
      u: () => ST,
      x: () => Ef,
      z: () => pf,
      D: () => vT,
      H: () => yT
    });
    var hm = fm(2873);
    const Am = Function.prototype.toString,
      am = RegExp.prototype.exec,
      xm = Reflect.apply,
      wm = Function.prototype.call,
      Dm = Function.prototype.apply,
      im = Function.prototype.bind,
      Rm = Object.defineProperty,
      pm = Uint8Array;
    let Em, om;
    try {
      Em = globalThis.crypto, om = void 0 === Em || null === Em ? void 0 : Em.getRandomValues
    } catch {}
    const Om = "bloxdBindApply";
    let Ym;
    try {
      const mm = wm;
      Rm(mm, Om, {
        __proto__: null,
        value: im,
        configurable: !0
      });
      try {
        Ym = mm[Om](Dm)
      } finally {
        delete mm[Om]
      }
    } catch {}
    const qm = 16,
      jm = 256,
      Vm = 0,
      Im = 1,
      Km = 2,
      Qm = 3;
    let nm, Jm = Vm,
      cm = xm,
      zm = 0;

    function Zm(mm, Tm) {
      return mm === `function ${Tm}() { [native code] }` || mm === `function ${Tm}() {\n    [native code]\n}`
    }
    const km = 0,
      bm = 1,
      Sm = 2;
    let em = km;

    function Nm(mm, Tm, fm) {
      if (em === Sm && Jm === Im && ! function() {
          const mm = nm;
          return zm >= jm && (cm(om, Em, [mm]), zm = 0), mm[zm++] < 256 / qm
        }()) return function(mm, Tm, fm) {
        return cm(mm, Tm, fm ?? 0)
      }(...arguments);
      if (em === km || Jm === Km) return xm(mm, Tm, fm);
      let hm;
      em = km;
      try {
        Jm === Vm && (Jm = Qm, Jm = function() {
          const mm = xm(Am, xm, []);
          if (Zm(mm, "apply")) return Km;
          if (null === xm(am, /\(\.\.\.arguments\)/, [mm]) && null === xm(am, /^function\s*\(\.\.\.[\w$]+\)/, [mm])) return Km;
          if ("function" !== typeof Ym || "function" !== typeof wm || "function" !== typeof Dm || "function" !== typeof im || "function" !== typeof Rm || "function" !== typeof om || "function" !== typeof pm || !Zm(xm(Am, wm, []), "call") || !Zm(xm(Am, Dm, []), "apply") || !Zm(xm(Am, im, []), "bind") || !Zm(xm(Am, Rm, []), "defineProperty") || !Zm(xm(Am, om, []), "getRandomValues") || !Zm(xm(Am, pm, []), "Uint8Array")) return Km;
          const Tm = Ym,
            fm = {},
            hm = function(mm) {
              return this === fm && mm === fm
            };
          try {
            if (!0 !== Tm(hm, fm, [fm])) return Km;
            const mm = new pm(jm);
            Tm(om, Em, [mm]), nm = mm
          } catch {
            return Km
          }
          return cm = Tm, Im
        }()), hm = xm(mm, Tm, fm)
      } catch (Om) {
        throw Jm = Km, Om
      }
      return em = Sm, hm
    }
    let Gm = xm;

    function Xm() {
      return (Gm === xm ? 0 : 3) + em
    }

    function Pm() {
      const mm = Xm();
      return Gm = xm, mm
    }

    function Hm(mm) {
      Gm = mm >= 3 ? Nm : xm, em = mm % 3
    }
    const ym = Function.prototype.toString,
      Cm = Object.getOwnPropertyDescriptor,
      rm = Object.prototype.hasOwnProperty,
      sm = RegExp.prototype.exec,
      lm = TextEncoder.prototype.encodeInto,
      Mm = String.prototype.startsWith,
      um = Number.prototype.toString,
      Bm = WeakMap.prototype.get,
      Lm = WeakMap.prototype.set,
      tm = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      Um = new TextEncoder,
      dm = new Uint8Array(1024),
      gm = 9999999,
      Wm = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      Fm = new WeakMap;

    function mT(mm) {
      if ("function" !== typeof mm) return "#a0.0";
      const Tm = Gm(Bm, Fm, [mm]);
      if (void 0 !== Tm) return Tm;
      const fm = Gm(ym, mm, []),
        hm = fm.length > gm ? gm : fm.length,
        Am = `#${function(mm,Tm){const fm=Gm(sm,tm,[Tm]);if(null===fm)return"s";const hm=fm[1];if("ProxyObject"===hm)return"p";if(""!==hm)return Gm(Mm,hm,["bound "])?"b":"n";try{const Tm=Cm(mm,"name"),fm=void 0!==Tm&&Gm(rm,Tm,["value"])?Tm.value:void 0;return"string"===typeof fm&&Gm(Mm,fm,["bound "])?"b":"p"}catch{return"p"}}(mm,fm)}${hm}.${function(mm){const{written:Tm}=Gm(lm,Um,[mm,dm]);let fm=2166136261;for(let hm=0;hm<Tm;hm++)fm=(fm^dm[hm])>>>0,fm=fm+(fm<<1)+(fm<<4)+(fm<<7)+(fm<<8)+(fm<<24)>>>0;return Gm(um,fm,[36])}(fm)}`;
      return Gm(Lm, Fm, [mm, Am]), Am
    }

    function TT(mm) {
      const Tm = Gm(sm, Wm, [mm]);
      return null === Tm ? mm : Tm[1]
    }
    var fT = fm(2888);
    const hT = Function.prototype.toString,
      AT = Object.getOwnPropertyDescriptor,
      aT = RegExp.prototype.exec,
      xT = Object.prototype.hasOwnProperty,
      wT = Set.prototype.has,
      DT = WeakMap.prototype.get,
      iT = WeakMap.prototype.set,
      RT = Reflect.get,
      pT = Object.getPrototypeOf,
      ET = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function oT(mm, Tm, fm) {
      return {
        code: mm,
        holder: Tm,
        key: fm,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${fm}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function OT() {
      return ET
    }
    const YT = ET?.Instance.prototype,
      qT = ET?.Memory.prototype;

    function jT() {
      return qT
    }
    let VT, IT;
    try {
      const mm = globalThis.crypto,
        Tm = mm?.subtle;
      VT = mm ? pT(mm) : void 0, IT = Tm ? pT(Tm) : void 0
    } catch {}

    function KT(mm, Tm) {
      for (let fm = mm; void 0 !== fm && null !== fm; fm = pT(fm)) {
        const mm = AT(fm, Tm);
        if (mm) return mm
      }
    }
    const QT = [oT("in", OT, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), oT("is", OT, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), oT("co", OT, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), oT("cs", OT, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), oT("mo", OT, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), oT("it", OT, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), oT("me", OT, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), oT("ex", (function() {
      return YT
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), oT("bu", jT, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), oT("gr", jT, "grow", {
      tier: "punished"
    }), oT("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), oT("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), oT("su", (function() {
      return VT
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), oT("dg", (function() {
      return IT
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function nT(mm) {
      let Tm;
      try {
        const fm = RT(globalThis, mm);
        Tm = "function" === typeof fm ? fm.prototype : void 0
      } catch {}
      return () => Tm
    }

    function JT(mm, Tm, fm) {
      return fm.map((fm => oT(mm, Tm, fm)))
    }
    const cT = oT("rx", nT("HTMLCanvasElement"), "getContext"),
      zT = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      ZT = {
        webgpu: [...JT("gd", nT("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...JT("gq", nT("GPUQueue"), ["submit", "writeBuffer"]), ...JT("ge", nT("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...JT("gp", nT("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), cT],
        webgl: [...JT("g2", nT("WebGL2RenderingContext"), [...zT, "drawArraysInstanced", "drawElementsInstanced"]), cT],
        webgl1: [...JT("g1", nT("WebGLRenderingContext"), zT), cT]
      };
    let kT = [];
    const bT = new WeakMap;

    function ST(mm, Tm) {
      const fm = Pm();
      try {
        Gm(iT, bT, [mm, Tm])
      } finally {
        Hm(fm)
      }
    }

    function eT(mm) {
      try {
        const Tm = Df(mm),
          fm = Gm(DT, bT, [Tm]);
        return Tf(fm, mm) ? NT(mm, !0) : `${NT(mm,!1)}${mT(fm??Tm)}`
      } catch {
        return `${NT(mm,!1)}${mT(void 0)}`
      }
    }

    function NT(mm, Tm) {
      let {
        code: fm,
        key: hm
      } = mm;
      return `wh:${fm}${Tm?"-dbg":""}:${hm}`
    }

    function GT(mm) {
      return Object.values(ZT).flatMap((Tm => Tm.map((Tm => NT(Tm, mm)))))
    }
    const XT = new Set(GT(!0)),
      PT = new Set([...GT(!1), ...XT]),
      HT = NT(cT, !1);

    function yT(mm) {
      kT = ZT[mm]
    }

    function CT(mm) {
      const Tm = Pm();
      try {
        return rT(mm) || rT(TT(mm))
      } finally {
        Hm(Tm)
      }
    }

    function rT(mm) {
      return Gm(wT, PT, [mm])
    }

    function sT(mm) {
      return new Set(QT.filter((Tm => Tm.tier === mm)).map((mm => `wh:${mm.code}`)))
    }
    const lT = sT("punished"),
      MT = !1,
      uT = new Set(fT.b),
      BT = sT("weighted");

    function LT(mm) {
      const Tm = Pm();
      try {
        return tT(TT(mm))
      } finally {
        Hm(Tm)
      }
    }

    function vT(mm) {
      const Tm = Pm();
      try {
        return TT(mm)
      } finally {
        Hm(Tm)
      }
    }

    function tT(mm) {
      return Gm(wT, BT, [mm])
    }

    function UT(mm) {
      const Tm = Pm();
      try {
        return dT(mm)
      } finally {
        Hm(Tm)
      }
    }

    function dT(mm) {
      return Gm(wT, uT, [mm])
    }

    function gT(mm) {
      return "wb" === mm || Gm(wT, lT, [mm])
    }

    function WT(mm) {
      const Tm = Pm();
      try {
        return gT(mm) || dT(mm)
      } finally {
        Hm(Tm)
      }
    }

    function FT(mm) {
      const Tm = Pm();
      try {
        return "wb" === mm || MT && gT(mm)
      } finally {
        Hm(Tm)
      }
    }

    function mf(mm, Tm) {
      let {
        isGetter: fm
      } = Tm;
      const hm = AT(mm, fm ? "get" : "value");
      return void 0 === hm ? void 0 : hm.value
    }

    function Tf(mm, Tm) {
      let {
        isConstructor: fm,
        native: hm
      } = Tm;
      return "function" === typeof mm && (!(!fm && Gm(xT, mm, ["prototype"])) && null !== Gm(aT, hm, [Gm(hT, mm, [])]))
    }

    function ff(mm, Tm) {
      return Tf(mm, oT("", (() => {}), Tm, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let hf = null,
      Af = !1;

    function af() {
      try {
        return globalThis.WebAssembly === ET
      } catch {
        return !1
      }
    }

    function xf(mm) {
      try {
        return function(mm) {
          const {
            holder: Tm,
            key: fm,
            onNamespace: hm,
            inSecureContext: Am
          } = mm, am = Tm(), xm = KT(am, fm);
          if (!xm) return !(Am && !0 === globalThis.isSecureContext);
          const wm = mf(xm, mm);
          if (!Tf(wm, mm)) return !1;
          if (hm) {
            const Tm = globalThis.WebAssembly;
            if (Tm !== am && null !== Tm && ("object" === typeof Tm || "function" === typeof Tm)) {
              const hm = RT(Tm, fm);
              return hm === wm || void 0 === hm || Tf(hm, mm)
            }
          }
          return !0
        }(mm)
      } catch {
        return !1
      }
    }

    function wf(mm) {
      const Tm = `wh:${mm.code}`;
      if ("punished" === mm.tier) return Tm;
      try {
        return `${Tm}${mT(Df(mm))}`
      } catch {
        return `${Tm}${mT(void 0)}`
      }
    }

    function Df(mm) {
      const Tm = KT(mm.holder(), mm.key),
        fm = void 0 === Tm ? void 0 : mf(Tm, mm);
      return mm.onNamespace && !af() && Tf(fm, mm) ? RT(globalThis.WebAssembly, mm.key) : fm
    }

    function Rf(mm) {
      if (gT(mm)) return 5;
      const Tm = TT(mm);
      return tT(Tm) ? 4 : dT(mm) ? 3 : rT(Tm) ? function(mm) {
        return Gm(wT, XT, [mm])
      }(Tm) ? -1 : Tm === HT ? 0 : 1 : 2
    }

    function pf() {
      const mm = function() {
        const mm = Xm();
        return Jm === Vm || Jm === Im ? (Gm = Nm, em = bm) : Gm = xm, mm
      }();
      try {
        if (null === hf || !gT(hf)) {
          const mm = function() {
            if (void 0 === ET) return null;
            let mm = af() ? null : "wh:wa";
            const Tm = Tm => {
              null !== Tm && (null === mm || Rf(Tm) > Rf(mm)) && (mm = Tm)
            };
            for (let fm = 0; fm < QT.length; fm++) {
              const mm = QT[fm];
              void 0 === mm || xf(mm) || Tm(wf(mm))
            }
            Tm((0, fT.o)());
            for (let fm = 0; fm < kT.length; fm++) {
              const mm = kT[fm];
              void 0 === mm || xf(mm) || Tm(eT(mm))
            }
            return mm
          }();
          (null === hf || null !== mm && Rf(mm) > Rf(hf)) && (hf = mm)
        }
      } finally {
        Hm(mm)
      }
    }

    function Ef() {
      Af = !0
    }

    function of() {
      if (Af) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && pf(), null !== hf) return hf;
      if (void 0 === ET) return "wn:unsupported";
      const mm = (0, hm.p)();
      return null === mm ? null : `wn:${mm}`
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);