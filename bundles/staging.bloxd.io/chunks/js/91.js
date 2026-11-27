export const id = 91;
export const ids = [91];
export const modules = {
  5498: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => VS,
      h: () => xQ,
      k: () => dS,
      o: () => SQ,
      s: () => bS,
      w: () => sS,
      z: () => MS,
      B: () => cS,
      E: () => lS,
      F: () => pQ,
      H: () => EQ,
      L: () => FS,
      N: () => CS
    });
    var Zr = Qr(2396);
    const Wr = Function.prototype.toString,
      ar = RegExp.prototype.exec,
      jr = Reflect.apply,
      Ir = Function.prototype.call,
      fr = Function.prototype.apply,
      Er = Function.prototype.bind,
      pr = Object.defineProperty,
      xr = Uint8Array;
    let mr, Nr;
    try {
      mr = globalThis.crypto, Nr = void 0 === mr || null === mr ? void 0 : mr.getRandomValues
    } catch {}
    const Ur = "bloxdBindApply";
    let tr;
    try {
      const rr = Ir;
      pr(rr, Ur, {
        __proto__: null,
        value: Er,
        configurable: !0
      });
      try {
        tr = rr[Ur](fr)
      } finally {
        delete rr[Ur]
      }
    } catch {}
    const hr = 16,
      zr = 256,
      Yr = 0,
      nr = 1,
      er = 2,
      Kr = 3;
    let yr, Br = Yr,
      Tr = jr,
      vr = 0;

    function Or(rr, Sr) {
      return rr === `function ${Sr}() { [native code] }` || rr === `function ${Sr}() {\n    [native code]\n}`
    }
    const Lr = 0,
      lr = 1,
      Xr = 2;
    let Pr = Lr;

    function Hr(rr, Sr, Qr) {
      if (Pr === Xr && Br === nr && ! function() {
          const rr = yr;
          return vr >= zr && (Tr(Nr, mr, [rr]), vr = 0), rr[vr++] < 256 / hr
        }()) return function(rr, Sr, Qr) {
        return Tr(rr, Sr, Qr ?? 0)
      }(...arguments);
      if (Pr === Lr || Br === er) return jr(rr, Sr, Qr);
      let Zr;
      Pr = Lr;
      try {
        Br === Yr && (Br = Kr, Br = function() {
          const rr = jr(Wr, jr, []);
          if (Or(rr, "apply")) return er;
          if (null === jr(ar, /\(\.\.\.arguments\)/, [rr]) && null === jr(ar, /^function\s*\(\.\.\.[\w$]+\)/, [rr])) return er;
          if ("function" !== typeof tr || "function" !== typeof Ir || "function" !== typeof fr || "function" !== typeof Er || "function" !== typeof pr || "function" !== typeof Nr || "function" !== typeof xr || !Or(jr(Wr, Ir, []), "call") || !Or(jr(Wr, fr, []), "apply") || !Or(jr(Wr, Er, []), "bind") || !Or(jr(Wr, pr, []), "defineProperty") || !Or(jr(Wr, Nr, []), "getRandomValues") || !Or(jr(Wr, xr, []), "Uint8Array")) return er;
          const Sr = tr,
            Qr = {},
            Zr = function(rr) {
              return this === Qr && rr === Qr
            };
          try {
            if (!0 !== Sr(Zr, Qr, [Qr])) return er;
            const rr = new xr(zr);
            Sr(Nr, mr, [rr]), yr = rr
          } catch {
            return er
          }
          return Tr = Sr, nr
        }()), Zr = jr(rr, Sr, Qr)
      } catch (Ur) {
        throw Br = er, Ur
      }
      return Pr = Xr, Zr
    }
    let qr = jr;

    function Rr() {
      return (qr === jr ? 0 : 3) + Pr
    }

    function gr() {
      const rr = Rr();
      return qr = jr, rr
    }

    function Cr(rr) {
      qr = rr >= 3 ? Hr : jr, Pr = rr % 3
    }
    const Mr = Function.prototype.toString,
      Gr = Object.getOwnPropertyDescriptor,
      kr = Object.prototype.hasOwnProperty,
      Ar = RegExp.prototype.exec,
      Vr = TextEncoder.prototype.encodeInto,
      ir = String.prototype.startsWith,
      wr = Number.prototype.toString,
      cr = WeakMap.prototype.get,
      Fr = WeakMap.prototype.set,
      or = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      br = new TextEncoder,
      Jr = new Uint8Array(1024),
      Dr = 9999999,
      dr = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      sr = new WeakMap;

    function ur(rr) {
      if ("function" !== typeof rr) return "#a0.0";
      const Sr = qr(cr, sr, [rr]);
      if (void 0 !== Sr) return Sr;
      const Qr = qr(Mr, rr, []),
        Zr = Qr.length > Dr ? Dr : Qr.length,
        Wr = `#${function(rr,Sr){const Qr=qr(Ar,or,[Sr]);if(null===Qr)return"s";const Zr=Qr[1];if("ProxyObject"===Zr)return"p";if(""!==Zr)return qr(ir,Zr,["bound "])?"b":"n";try{const Sr=Gr(rr,"name"),Qr=void 0!==Sr&&qr(kr,Sr,["value"])?Sr.value:void 0;return"string"===typeof Qr&&qr(ir,Qr,["bound "])?"b":"p"}catch{return"p"}}(rr,Qr)}${Zr}.${function(rr){const{written:Sr}=qr(Vr,br,[rr,Jr]);let Qr=2166136261;for(let Zr=0;Zr<Sr;Zr++)Qr=(Qr^Jr[Zr])>>>0,Qr=Qr+(Qr<<1)+(Qr<<4)+(Qr<<7)+(Qr<<8)+(Qr<<24)>>>0;return qr(wr,Qr,[36])}(Qr)}`;
      return qr(Fr, sr, [rr, Wr]), Wr
    }

    function rS(rr) {
      const Sr = qr(Ar, dr, [rr]);
      return null === Sr ? rr : Sr[1]
    }
    var SS = Qr(2410);
    const QS = Function.prototype.toString,
      ZS = Object.getOwnPropertyDescriptor,
      WS = RegExp.prototype.exec,
      aS = Object.prototype.hasOwnProperty,
      jS = Set.prototype.has,
      IS = WeakMap.prototype.get,
      fS = WeakMap.prototype.set,
      ES = Reflect.get,
      pS = Object.getPrototypeOf,
      xS = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function mS(rr, Sr, Qr) {
      return {
        code: rr,
        holder: Sr,
        key: Qr,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${Qr}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function NS() {
      return xS
    }
    const US = xS?.Instance.prototype,
      tS = xS?.Memory.prototype;

    function hS() {
      return tS
    }
    let zS, YS;
    try {
      const rr = globalThis.crypto,
        Sr = rr?.subtle;
      zS = rr ? pS(rr) : void 0, YS = Sr ? pS(Sr) : void 0
    } catch {}

    function nS(rr, Sr) {
      for (let Qr = rr; void 0 !== Qr && null !== Qr; Qr = pS(Qr)) {
        const rr = ZS(Qr, Sr);
        if (rr) return rr
      }
    }
    const eS = [mS("in", NS, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), mS("is", NS, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), mS("co", NS, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), mS("cs", NS, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), mS("mo", NS, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), mS("it", NS, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), mS("me", NS, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), mS("ex", (function() {
      return US
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), mS("bu", hS, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), mS("gr", hS, "grow", {
      tier: "punished"
    }), mS("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), mS("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), mS("su", (function() {
      return zS
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), mS("dg", (function() {
      return YS
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function KS(rr) {
      let Sr;
      try {
        const Qr = ES(globalThis, rr);
        Sr = "function" === typeof Qr ? Qr.prototype : void 0
      } catch {}
      return () => Sr
    }

    function yS(rr, Sr, Qr) {
      return Qr.map((Qr => mS(rr, Sr, Qr)))
    }
    const BS = mS("rx", KS("HTMLCanvasElement"), "getContext"),
      TS = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      vS = {
        webgpu: [...yS("gd", KS("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...yS("gq", KS("GPUQueue"), ["submit", "writeBuffer"]), ...yS("ge", KS("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...yS("gp", KS("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), BS],
        webgl: [...yS("g2", KS("WebGL2RenderingContext"), [...TS, "drawArraysInstanced", "drawElementsInstanced"]), BS],
        webgl1: [...yS("g1", KS("WebGLRenderingContext"), TS), BS]
      };
    let OS = [];
    const LS = new WeakMap;

    function lS(rr, Sr) {
      const Qr = gr();
      try {
        qr(fS, LS, [rr, Sr])
      } finally {
        Cr(Qr)
      }
    }

    function XS(rr) {
      try {
        const Sr = IQ(rr),
          Qr = qr(IS, LS, [Sr]);
        return rQ(Qr, rr) ? PS(rr, !0) : `${PS(rr,!1)}${ur(Qr??Sr)}`
      } catch {
        return `${PS(rr,!1)}${ur(void 0)}`
      }
    }

    function PS(rr, Sr) {
      let {
        code: Qr,
        key: Zr
      } = rr;
      return `wh:${Qr}${Sr?"-dbg":""}:${Zr}`
    }

    function HS(rr) {
      return Object.values(vS).flatMap((Sr => Sr.map((Sr => PS(Sr, rr)))))
    }
    const qS = new Set(HS(!0)),
      RS = new Set([...HS(!1), ...qS]),
      gS = PS(BS, !1);

    function CS(rr) {
      OS = vS[rr]
    }

    function MS(rr) {
      const Sr = gr();
      try {
        return GS(rr) || GS(rS(rr))
      } finally {
        Cr(Sr)
      }
    }

    function GS(rr) {
      return qr(jS, RS, [rr])
    }

    function kS(rr) {
      return new Set(eS.filter((Sr => Sr.tier === rr)).map((rr => `wh:${rr.code}`)))
    }
    const AS = kS("punished"),
      VS = !1,
      iS = new Set(SS.b),
      wS = kS("weighted");

    function cS(rr) {
      const Sr = gr();
      try {
        return oS(rS(rr))
      } finally {
        Cr(Sr)
      }
    }

    function FS(rr) {
      const Sr = gr();
      try {
        return rS(rr)
      } finally {
        Cr(Sr)
      }
    }

    function oS(rr) {
      return qr(jS, wS, [rr])
    }

    function bS(rr) {
      const Sr = gr();
      try {
        return JS(rr)
      } finally {
        Cr(Sr)
      }
    }

    function JS(rr) {
      return qr(jS, iS, [rr])
    }

    function DS(rr) {
      return "wb" === rr || qr(jS, AS, [rr])
    }

    function dS(rr) {
      const Sr = gr();
      try {
        return DS(rr) || JS(rr)
      } finally {
        Cr(Sr)
      }
    }

    function sS(rr) {
      const Sr = gr();
      try {
        return "wb" === rr || VS && DS(rr)
      } finally {
        Cr(Sr)
      }
    }

    function uS(rr, Sr) {
      let {
        isGetter: Qr
      } = Sr;
      const Zr = ZS(rr, Qr ? "get" : "value");
      return void 0 === Zr ? void 0 : Zr.value
    }

    function rQ(rr, Sr) {
      let {
        isConstructor: Qr,
        native: Zr
      } = Sr;
      return "function" === typeof rr && (!(!Qr && qr(aS, rr, ["prototype"])) && null !== qr(WS, Zr, [qr(QS, rr, [])]))
    }

    function SQ(rr, Sr) {
      return rQ(rr, mS("", (() => {}), Sr, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let QQ = null,
      ZQ = !1;

    function WQ() {
      try {
        return globalThis.WebAssembly === xS
      } catch {
        return !1
      }
    }

    function aQ(rr) {
      try {
        return function(rr) {
          const {
            holder: Sr,
            key: Qr,
            onNamespace: Zr,
            inSecureContext: Wr
          } = rr, ar = Sr(), jr = nS(ar, Qr);
          if (!jr) return !(Wr && !0 === globalThis.isSecureContext);
          const Ir = uS(jr, rr);
          if (!rQ(Ir, rr)) return !1;
          if (Zr) {
            const Sr = globalThis.WebAssembly;
            if (Sr !== ar && null !== Sr && ("object" === typeof Sr || "function" === typeof Sr)) {
              const Zr = ES(Sr, Qr);
              return Zr === Ir || void 0 === Zr || rQ(Zr, rr)
            }
          }
          return !0
        }(rr)
      } catch {
        return !1
      }
    }

    function jQ(rr) {
      const Sr = `wh:${rr.code}`;
      if ("punished" === rr.tier) return Sr;
      try {
        return `${Sr}${ur(IQ(rr))}`
      } catch {
        return `${Sr}${ur(void 0)}`
      }
    }

    function IQ(rr) {
      const Sr = nS(rr.holder(), rr.key),
        Qr = void 0 === Sr ? void 0 : uS(Sr, rr);
      return rr.onNamespace && !WQ() && rQ(Qr, rr) ? ES(globalThis.WebAssembly, rr.key) : Qr
    }

    function fQ(rr) {
      if (DS(rr)) return 5;
      const Sr = rS(rr);
      return oS(Sr) ? 4 : JS(rr) ? 3 : GS(Sr) ? function(rr) {
        return qr(jS, qS, [rr])
      }(Sr) ? -1 : Sr === gS ? 0 : 1 : 2
    }

    function EQ() {
      const rr = function() {
        const rr = Rr();
        return Br === Yr || Br === nr ? (qr = Hr, Pr = lr) : qr = jr, rr
      }();
      try {
        if (null === QQ || !DS(QQ)) {
          const rr = function() {
            if (void 0 === xS) return null;
            let rr = WQ() ? null : "wh:wa";
            const Sr = Sr => {
              null !== Sr && (null === rr || fQ(Sr) > fQ(rr)) && (rr = Sr)
            };
            for (let Qr = 0; Qr < eS.length; Qr++) {
              const rr = eS[Qr];
              void 0 === rr || aQ(rr) || Sr(jQ(rr))
            }
            Sr((0, SS.j)());
            for (let Qr = 0; Qr < OS.length; Qr++) {
              const rr = OS[Qr];
              void 0 === rr || aQ(rr) || Sr(XS(rr))
            }
            return rr
          }();
          (null === QQ || null !== rr && fQ(rr) > fQ(QQ)) && (QQ = rr)
        }
      } finally {
        Cr(rr)
      }
    }

    function pQ() {
      ZQ = !0
    }

    function xQ() {
      if (ZQ) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && EQ(), null !== QQ) return QQ;
      if (void 0 === xS) return "wn:unsupported";
      const rr = (0, Zr.l)();
      return null === rr ? null : `wn:${rr}`
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);