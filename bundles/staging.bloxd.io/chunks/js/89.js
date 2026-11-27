export const id = 89;
export const ids = [89];
export const modules = {
  5153: (ee, ie, He) => {
    He.d(ie, {
      c: () => li,
      e: () => qH,
      h: () => Qi,
      l: () => yH,
      n: () => Ni,
      p: () => eH,
      s: () => Ci,
      v: () => ji,
      z: () => Pi,
      B: () => kH,
      E: () => RH,
      H: () => si,
      I: () => Li
    });
    var ye = He(3094);
    const be = Function.prototype.toString,
      Me = RegExp.prototype.exec,
      Ke = Reflect.apply,
      Ue = Function.prototype.call,
      Fe = Function.prototype.apply,
      Je = Function.prototype.bind,
      oe = Object.defineProperty,
      Re = Uint8Array;
    let ke, qe;
    try {
      ke = globalThis.crypto, qe = void 0 === ke || null === ke ? void 0 : ke.getRandomValues
    } catch {}
    const fe = "bloxdBindApply";
    let Te;
    try {
      const ee = Ue;
      oe(ee, fe, {
        __proto__: null,
        value: Je,
        configurable: !0
      });
      try {
        Te = ee[fe](Fe)
      } finally {
        delete ee[fe]
      }
    } catch {}
    const pe = 16,
      Xe = 256,
      ze = 0,
      Be = 1,
      Ee = 2,
      ge = 3;
    let Oe, de = ze,
      We = Ke,
      te = 0;

    function Ze(ee, ie) {
      return ee === `function ${ie}() { [native code] }` || ee === `function ${ie}() {\n    [native code]\n}`
    }
    const we = 0,
      De = 1,
      Pe = 2;
    let Ae = we;

    function Ye(ee, ie, He) {
      if (Ae === Pe && de === Be && ! function() {
          const ee = Oe;
          return te >= Xe && (We(qe, ke, [ee]), te = 0), ee[te++] < 256 / pe
        }()) return function(ee, ie, He) {
        return We(ee, ie, He ?? 0)
      }(...arguments);
      if (Ae === we || de === Ee) return Ke(ee, ie, He);
      let ye;
      Ae = we;
      try {
        de === ze && (de = ge, de = function() {
          const ee = Ke(be, Ke, []);
          if (Ze(ee, "apply")) return Ee;
          if (null === Ke(Me, /\(\.\.\.arguments\)/, [ee]) && null === Ke(Me, /^function\s*\(\.\.\.[\w$]+\)/, [ee])) return Ee;
          if ("function" !== typeof Te || "function" !== typeof Ue || "function" !== typeof Fe || "function" !== typeof Je || "function" !== typeof oe || "function" !== typeof qe || "function" !== typeof Re || !Ze(Ke(be, Ue, []), "call") || !Ze(Ke(be, Fe, []), "apply") || !Ze(Ke(be, Je, []), "bind") || !Ze(Ke(be, oe, []), "defineProperty") || !Ze(Ke(be, qe, []), "getRandomValues") || !Ze(Ke(be, Re, []), "Uint8Array")) return Ee;
          const ie = Te,
            He = {},
            ye = function(ee) {
              return this === He && ee === He
            };
          try {
            if (!0 !== ie(ye, He, [He])) return Ee;
            const ee = new Re(Xe);
            ie(qe, ke, [ee]), Oe = ee
          } catch {
            return Ee
          }
          return We = ie, Be
        }()), ye = Ke(ee, ie, He)
      } catch (fe) {
        throw de = Ee, fe
      }
      return Ae = Pe, ye
    }
    let Ve = Ke;

    function ae() {
      return (Ve === Ke ? 0 : 3) + Ae
    }

    function ce() {
      const ee = ae();
      return Ve = Ke, ee
    }

    function xe(ee) {
      Ve = ee >= 3 ? Ye : Ke, Ae = ee % 3
    }
    const Le = Function.prototype.toString,
      Ce = Object.getOwnPropertyDescriptor,
      ve = Object.prototype.hasOwnProperty,
      ue = RegExp.prototype.exec,
      me = TextEncoder.prototype.encodeInto,
      le = String.prototype.startsWith,
      Se = Number.prototype.toString,
      ne = WeakMap.prototype.get,
      je = WeakMap.prototype.set,
      se = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      Ie = new TextEncoder,
      he = new Uint8Array(1024),
      Ne = 9999999,
      Ge = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      re = new WeakMap;

    function Qe(ee) {
      if ("function" !== typeof ee) return "#a0.0";
      const ie = Ve(ne, re, [ee]);
      if (void 0 !== ie) return ie;
      const He = Ve(Le, ee, []),
        ye = He.length > Ne ? Ne : He.length,
        be = `#${function(ee,ie){const He=Ve(ue,se,[ie]);if(null===He)return"s";const ye=He[1];if("ProxyObject"===ye)return"p";if(""!==ye)return Ve(le,ye,["bound "])?"b":"n";try{const ie=Ce(ee,"name"),He=void 0!==ie&&Ve(ve,ie,["value"])?ie.value:void 0;return"string"===typeof He&&Ve(le,He,["bound "])?"b":"p"}catch{return"p"}}(ee,He)}${ye}.${function(ee){const{written:ie}=Ve(me,Ie,[ee,he]);let He=2166136261;for(let ye=0;ye<ie;ye++)He=(He^he[ye])>>>0,He=He+(He<<1)+(He<<4)+(He<<7)+(He<<8)+(He<<24)>>>0;return Ve(Se,He,[36])}(He)}`;
      return Ve(je, re, [ee, be]), be
    }

    function ei(ee) {
      const ie = Ve(ue, Ge, [ee]);
      return null === ie ? ee : ie[1]
    }
    var ii = He(3105);
    const Hi = Function.prototype.toString,
      yi = Object.getOwnPropertyDescriptor,
      bi = RegExp.prototype.exec,
      Mi = Object.prototype.hasOwnProperty,
      Ki = Set.prototype.has,
      Ui = WeakMap.prototype.get,
      Fi = WeakMap.prototype.set,
      Ji = Reflect.get,
      oi = Object.getPrototypeOf,
      Ri = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function ki(ee, ie, He) {
      return {
        code: ee,
        holder: ie,
        key: He,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${He}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function qi() {
      return Ri
    }
    const fi = Ri?.Instance.prototype,
      Ti = Ri?.Memory.prototype;

    function Xi() {
      return Ti
    }
    let zi, Bi;
    try {
      const ee = globalThis.crypto,
        ie = ee?.subtle;
      zi = ee ? oi(ee) : void 0, Bi = ie ? oi(ie) : void 0
    } catch {}

    function Ei(ee, ie) {
      for (let He = ee; void 0 !== He && null !== He; He = oi(He)) {
        const ee = yi(He, ie);
        if (ee) return ee
      }
    }
    const gi = [ki("in", qi, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), ki("is", qi, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), ki("co", qi, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), ki("cs", qi, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), ki("mo", qi, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), ki("it", qi, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), ki("me", qi, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), ki("ex", (function() {
      return fi
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), ki("bu", Xi, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), ki("gr", Xi, "grow", {
      tier: "punished"
    }), ki("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), ki("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), ki("su", (function() {
      return zi
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), ki("dg", (function() {
      return Bi
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function Oi(ee) {
      let ie;
      try {
        const He = Ji(globalThis, ee);
        ie = "function" === typeof He ? He.prototype : void 0
      } catch {}
      return () => ie
    }

    function di(ee, ie, He) {
      return He.map((He => ki(ee, ie, He)))
    }
    const Wi = ki("rx", Oi("HTMLCanvasElement"), "getContext"),
      ti = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      Zi = {
        webgpu: [...di("gd", Oi("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...di("gq", Oi("GPUQueue"), ["submit", "writeBuffer"]), ...di("ge", Oi("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...di("gp", Oi("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), Wi],
        webgl: [...di("g2", Oi("WebGL2RenderingContext"), [...ti, "drawArraysInstanced", "drawElementsInstanced"]), Wi],
        webgl1: [...di("g1", Oi("WebGLRenderingContext"), ti), Wi]
      };
    let wi = [];
    const Di = new WeakMap;

    function Pi(ee, ie) {
      const He = ce();
      try {
        Ve(Fi, Di, [ee, ie])
      } finally {
        xe(He)
      }
    }

    function Ai(ee) {
      try {
        const ie = JH(ee),
          He = Ve(Ui, Di, [ie]);
        return HH(He, ee) ? Yi(ee, !0) : `${Yi(ee,!1)}${Qe(He??ie)}`
      } catch {
        return `${Yi(ee,!1)}${Qe(void 0)}`
      }
    }

    function Yi(ee, ie) {
      let {
        code: He,
        key: ye
      } = ee;
      return `wh:${He}${ie?"-dbg":""}:${ye}`
    }

    function Vi(ee) {
      return Object.values(Zi).flatMap((ie => ie.map((ie => Yi(ie, ee)))))
    }
    const ai = new Set(Vi(!0)),
      ci = new Set([...Vi(!1), ...ai]),
      xi = Yi(Wi, !1);

    function Li(ee) {
      wi = Zi[ee]
    }

    function Ci(ee) {
      const ie = ce();
      try {
        return vi(ee) || vi(ei(ee))
      } finally {
        xe(ie)
      }
    }

    function vi(ee) {
      return Ve(Ki, ci, [ee])
    }

    function ui(ee) {
      return new Set(gi.filter((ie => ie.tier === ee)).map((ee => `wh:${ee.code}`)))
    }
    const mi = ui("punished"),
      li = !1,
      Si = new Set(ii.c),
      ni = ui("weighted");

    function ji(ee) {
      const ie = ce();
      try {
        return Ii(ei(ee))
      } finally {
        xe(ie)
      }
    }

    function si(ee) {
      const ie = ce();
      try {
        return ei(ee)
      } finally {
        xe(ie)
      }
    }

    function Ii(ee) {
      return Ve(Ki, ni, [ee])
    }

    function Ni(ee) {
      const ie = ce();
      try {
        return Gi(ee)
      } finally {
        xe(ie)
      }
    }

    function Gi(ee) {
      return Ve(Ki, Si, [ee])
    }

    function ri(ee) {
      return "wb" === ee || Ve(Ki, mi, [ee])
    }

    function Qi(ee) {
      const ie = ce();
      try {
        return ri(ee) || Gi(ee)
      } finally {
        xe(ie)
      }
    }

    function eH(ee) {
      const ie = ce();
      try {
        return "wb" === ee || li && ri(ee)
      } finally {
        xe(ie)
      }
    }

    function iH(ee, ie) {
      let {
        isGetter: He
      } = ie;
      const ye = yi(ee, He ? "get" : "value");
      return void 0 === ye ? void 0 : ye.value
    }

    function HH(ee, ie) {
      let {
        isConstructor: He,
        native: ye
      } = ie;
      return "function" === typeof ee && (!(!He && Ve(Mi, ee, ["prototype"])) && null !== Ve(bi, ye, [Ve(Hi, ee, [])]))
    }

    function yH(ee, ie) {
      return HH(ee, ki("", (() => {}), ie, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let bH = null,
      MH = !1;

    function KH() {
      try {
        return globalThis.WebAssembly === Ri
      } catch {
        return !1
      }
    }

    function UH(ee) {
      try {
        return function(ee) {
          const {
            holder: ie,
            key: He,
            onNamespace: ye,
            inSecureContext: be
          } = ee, Me = ie(), Ke = Ei(Me, He);
          if (!Ke) return !(be && !0 === globalThis.isSecureContext);
          const Ue = iH(Ke, ee);
          if (!HH(Ue, ee)) return !1;
          if (ye) {
            const ie = globalThis.WebAssembly;
            if (ie !== Me && null !== ie && ("object" === typeof ie || "function" === typeof ie)) {
              const ye = Ji(ie, He);
              return ye === Ue || void 0 === ye || HH(ye, ee)
            }
          }
          return !0
        }(ee)
      } catch {
        return !1
      }
    }

    function FH(ee) {
      const ie = `wh:${ee.code}`;
      if ("punished" === ee.tier) return ie;
      try {
        return `${ie}${Qe(JH(ee))}`
      } catch {
        return `${ie}${Qe(void 0)}`
      }
    }

    function JH(ee) {
      const ie = Ei(ee.holder(), ee.key),
        He = void 0 === ie ? void 0 : iH(ie, ee);
      return ee.onNamespace && !KH() && HH(He, ee) ? Ji(globalThis.WebAssembly, ee.key) : He
    }

    function oH(ee) {
      if (ri(ee)) return 5;
      const ie = ei(ee);
      return Ii(ie) ? 4 : Gi(ee) ? 3 : vi(ie) ? function(ee) {
        return Ve(Ki, ai, [ee])
      }(ie) ? -1 : ie === xi ? 0 : 1 : 2
    }

    function RH() {
      const ee = function() {
        const ee = ae();
        return de === ze || de === Be ? (Ve = Ye, Ae = De) : Ve = Ke, ee
      }();
      try {
        if (null === bH || !ri(bH)) {
          const ee = function() {
            if (void 0 === Ri) return null;
            let ee = KH() ? null : "wh:wa";
            const ie = ie => {
              null !== ie && (null === ee || oH(ie) > oH(ee)) && (ee = ie)
            };
            for (let He = 0; He < gi.length; He++) {
              const ee = gi[He];
              void 0 === ee || UH(ee) || ie(FH(ee))
            }
            ie((0, ii.m)());
            for (let He = 0; He < wi.length; He++) {
              const ee = wi[He];
              void 0 === ee || UH(ee) || ie(Ai(ee))
            }
            return ee
          }();
          (null === bH || null !== ee && oH(ee) > oH(bH)) && (bH = ee)
        }
      } finally {
        xe(ee)
      }
    }

    function kH() {
      MH = !0
    }

    function qH() {
      if (MH) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && RH(), null !== bH) return bH;
      if (void 0 === Ri) return "wn:unsupported";
      const ee = (0, ye.o)();
      return null === ee ? null : `wn:${ee}`
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);