export const id = 74;
export const ids = [74];
export const modules = {
  4495: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => kC,
      f: () => Bc,
      i: () => rC,
      l: () => Cc,
      n: () => eC,
      r: () => AC,
      t: () => LC,
      w: () => WC,
      x: () => qC,
      y: () => Sc,
      z: () => wc,
      B: () => sC,
      D: () => lC
    });
    var ID = cD(3525);
    const pD = Function.prototype.toString,
      iD = RegExp.prototype.exec,
      fD = Reflect.apply,
      bD = Function.prototype.call,
      QD = Function.prototype.apply,
      wD = Function.prototype.bind,
      SD = Object.defineProperty,
      BD = Uint8Array;
    let yD, MD;
    try {
      yD = globalThis.crypto, MD = void 0 === yD || null === yD ? void 0 : yD.getRandomValues
    } catch {}
    const tD = "bloxdBindApply";
    let ZD;
    try {
      const DD = bD;
      SD(DD, tD, {
        __proto__: null,
        value: wD,
        configurable: !0
      });
      try {
        ZD = DD[tD](QD)
      } finally {
        delete DD[tD]
      }
    } catch {}
    const oD = 16,
      vD = 256,
      ND = 0,
      gD = 1,
      XD = 2,
      mD = 3;
    let nD, OD = ND,
      PD = fD,
      HD = 0;

    function UD(DD, CD) {
      return DD === `function ${CD}() { [native code] }` || DD === `function ${CD}() {\n    [native code]\n}`
    }
    const xD = 0,
      qD = 1,
      JD = 2;
    let KD = xD;

    function aD(DD, CD, cD) {
      if (KD === JD && OD === gD && ! function() {
          const DD = nD;
          return HD >= vD && (PD(MD, yD, [DD]), HD = 0), DD[HD++] < 256 / oD
        }()) return function(DD, CD, cD) {
        return PD(DD, CD, cD ?? 0)
      }(...arguments);
      if (KD === xD || OD === XD) return fD(DD, CD, cD);
      let ID;
      KD = xD;
      try {
        OD === ND && (OD = mD, OD = function() {
          const DD = fD(pD, fD, []);
          if (UD(DD, "apply")) return XD;
          if (null === fD(iD, /\(\.\.\.arguments\)/, [DD]) && null === fD(iD, /^function\s*\(\.\.\.[\w$]+\)/, [DD])) return XD;
          if ("function" !== typeof ZD || "function" !== typeof bD || "function" !== typeof QD || "function" !== typeof wD || "function" !== typeof SD || "function" !== typeof MD || "function" !== typeof BD || !UD(fD(pD, bD, []), "call") || !UD(fD(pD, QD, []), "apply") || !UD(fD(pD, wD, []), "bind") || !UD(fD(pD, SD, []), "defineProperty") || !UD(fD(pD, MD, []), "getRandomValues") || !UD(fD(pD, BD, []), "Uint8Array")) return XD;
          const CD = ZD,
            cD = {},
            ID = function(DD) {
              return this === cD && DD === cD
            };
          try {
            if (!0 !== CD(ID, cD, [cD])) return XD;
            const DD = new BD(vD);
            CD(MD, yD, [DD]), nD = DD
          } catch {
            return XD
          }
          return PD = CD, gD
        }()), ID = fD(DD, CD, cD)
      } catch (tD) {
        throw OD = XD, tD
      }
      return KD = JD, ID
    }
    let VD = fD;

    function zD() {
      return (VD === fD ? 0 : 3) + KD
    }

    function jD() {
      const DD = zD();
      return VD = fD, DD
    }

    function lD(DD) {
      VD = DD >= 3 ? aD : fD, KD = DD % 3
    }
    const LD = Function.prototype.toString,
      TD = Object.getOwnPropertyDescriptor,
      GD = Object.prototype.hasOwnProperty,
      RD = RegExp.prototype.exec,
      kD = TextEncoder.prototype.encodeInto,
      dD = String.prototype.startsWith,
      YD = Number.prototype.toString,
      WD = WeakMap.prototype.get,
      sD = WeakMap.prototype.set,
      ED = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      eD = new TextEncoder,
      uD = new Uint8Array(1024),
      hD = 9999999,
      rD = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      AD = new WeakMap;

    function FD(DD) {
      if ("function" !== typeof DD) return "#a0.0";
      const CD = VD(WD, AD, [DD]);
      if (void 0 !== CD) return CD;
      const cD = VD(LD, DD, []),
        ID = cD.length > hD ? hD : cD.length,
        pD = `#${function(DD,CD){const cD=VD(RD,ED,[CD]);if(null===cD)return"s";const ID=cD[1];if("ProxyObject"===ID)return"p";if(""!==ID)return VD(dD,ID,["bound "])?"b":"n";try{const CD=TD(DD,"name"),cD=void 0!==CD&&VD(GD,CD,["value"])?CD.value:void 0;return"string"===typeof cD&&VD(dD,cD,["bound "])?"b":"p"}catch{return"p"}}(DD,cD)}${ID}.${function(DD){const{written:CD}=VD(kD,eD,[DD,uD]);let cD=2166136261;for(let ID=0;ID<CD;ID++)cD=(cD^uD[ID])>>>0,cD=cD+(cD<<1)+(cD<<4)+(cD<<7)+(cD<<8)+(cD<<24)>>>0;return VD(YD,cD,[36])}(cD)}`;
      return VD(sD, AD, [DD, pD]), pD
    }

    function DC(DD) {
      const CD = VD(RD, rD, [DD]);
      return null === CD ? DD : CD[1]
    }
    var CC = cD(3535);
    const cC = Function.prototype.toString,
      IC = Object.getOwnPropertyDescriptor,
      pC = RegExp.prototype.exec,
      iC = Object.prototype.hasOwnProperty,
      fC = Set.prototype.has,
      bC = WeakMap.prototype.get,
      QC = WeakMap.prototype.set,
      wC = Reflect.get,
      SC = Object.getPrototypeOf,
      BC = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function yC(DD, CD, cD) {
      return {
        code: DD,
        holder: CD,
        key: cD,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${cD}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function MC() {
      return BC
    }
    const tC = BC?.Instance.prototype,
      ZC = BC?.Memory.prototype;

    function oC() {
      return ZC
    }
    let vC, NC;
    try {
      const DD = globalThis.crypto,
        CD = DD?.subtle;
      vC = DD ? SC(DD) : void 0, NC = CD ? SC(CD) : void 0
    } catch {}

    function gC(DD, CD) {
      for (let cD = DD; void 0 !== cD && null !== cD; cD = SC(cD)) {
        const DD = IC(cD, CD);
        if (DD) return DD
      }
    }
    const XC = [yC("in", MC, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), yC("is", MC, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), yC("co", MC, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), yC("cs", MC, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), yC("mo", MC, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), yC("it", MC, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), yC("me", MC, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), yC("ex", (function() {
      return tC
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), yC("bu", oC, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), yC("gr", oC, "grow", {
      tier: "punished"
    }), yC("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), yC("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), yC("su", (function() {
      return vC
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), yC("dg", (function() {
      return NC
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function mC(DD) {
      let CD;
      try {
        const cD = wC(globalThis, DD);
        CD = "function" === typeof cD ? cD.prototype : void 0
      } catch {}
      return () => CD
    }

    function nC(DD, CD, cD) {
      return cD.map((cD => yC(DD, CD, cD)))
    }
    const OC = yC("rx", mC("HTMLCanvasElement"), "getContext"),
      PC = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      HC = {
        webgpu: [...nC("gd", mC("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...nC("gq", mC("GPUQueue"), ["submit", "writeBuffer"]), ...nC("ge", mC("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...nC("gp", mC("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), OC],
        webgl: [...nC("g2", mC("WebGL2RenderingContext"), [...PC, "drawArraysInstanced", "drawElementsInstanced"]), OC],
        webgl1: [...nC("g1", mC("WebGLRenderingContext"), PC), OC]
      };
    let UC = [];
    const xC = new WeakMap;

    function qC(DD, CD) {
      const cD = jD();
      try {
        VD(QC, xC, [DD, CD])
      } finally {
        lD(cD)
      }
    }

    function JC(DD) {
      try {
        const CD = bc(DD),
          cD = VD(bC, xC, [CD]);
        return Dc(cD, DD) ? KC(DD, !0) : `${KC(DD,!1)}${FD(cD??CD)}`
      } catch {
        return `${KC(DD,!1)}${FD(void 0)}`
      }
    }

    function KC(DD, CD) {
      let {
        code: cD,
        key: ID
      } = DD;
      return `wh:${cD}${CD?"-dbg":""}:${ID}`
    }

    function aC(DD) {
      return Object.values(HC).flatMap((CD => CD.map((CD => KC(CD, DD)))))
    }
    const VC = new Set(aC(!0)),
      zC = new Set([...aC(!1), ...VC]),
      jC = KC(OC, !1);

    function lC(DD) {
      UC = HC[DD]
    }

    function LC(DD) {
      const CD = jD();
      try {
        return TC(DD) || TC(DC(DD))
      } finally {
        lD(CD)
      }
    }

    function TC(DD) {
      return VD(fC, zC, [DD])
    }

    function GC(DD) {
      return new Set(XC.filter((CD => CD.tier === DD)).map((DD => `wh:${DD.code}`)))
    }
    const RC = GC("punished"),
      kC = !1,
      dC = new Set(CC.b),
      YC = GC("weighted");

    function WC(DD) {
      const CD = jD();
      try {
        return EC(DC(DD))
      } finally {
        lD(CD)
      }
    }

    function sC(DD) {
      const CD = jD();
      try {
        return DC(DD)
      } finally {
        lD(CD)
      }
    }

    function EC(DD) {
      return VD(fC, YC, [DD])
    }

    function eC(DD) {
      const CD = jD();
      try {
        return uC(DD)
      } finally {
        lD(CD)
      }
    }

    function uC(DD) {
      return VD(fC, dC, [DD])
    }

    function hC(DD) {
      return "wb" === DD || VD(fC, RC, [DD])
    }

    function rC(DD) {
      const CD = jD();
      try {
        return hC(DD) || uC(DD)
      } finally {
        lD(CD)
      }
    }

    function AC(DD) {
      const CD = jD();
      try {
        return "wb" === DD || kC && hC(DD)
      } finally {
        lD(CD)
      }
    }

    function FC(DD, CD) {
      let {
        isGetter: cD
      } = CD;
      const ID = IC(DD, cD ? "get" : "value");
      return void 0 === ID ? void 0 : ID.value
    }

    function Dc(DD, CD) {
      let {
        isConstructor: cD,
        native: ID
      } = CD;
      return "function" === typeof DD && (!(!cD && VD(iC, DD, ["prototype"])) && null !== VD(pC, ID, [VD(cC, DD, [])]))
    }

    function Cc(DD, CD) {
      return Dc(DD, yC("", (() => {}), CD, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let cc = null,
      Ic = !1;

    function pc() {
      try {
        return globalThis.WebAssembly === BC
      } catch {
        return !1
      }
    }

    function ic(DD) {
      try {
        return function(DD) {
          const {
            holder: CD,
            key: cD,
            onNamespace: ID,
            inSecureContext: pD
          } = DD, iD = CD(), fD = gC(iD, cD);
          if (!fD) return !(pD && !0 === globalThis.isSecureContext);
          const bD = FC(fD, DD);
          if (!Dc(bD, DD)) return !1;
          if (ID) {
            const CD = globalThis.WebAssembly;
            if (CD !== iD && null !== CD && ("object" === typeof CD || "function" === typeof CD)) {
              const ID = wC(CD, cD);
              return ID === bD || void 0 === ID || Dc(ID, DD)
            }
          }
          return !0
        }(DD)
      } catch {
        return !1
      }
    }

    function fc(DD) {
      const CD = `wh:${DD.code}`;
      if ("punished" === DD.tier) return CD;
      try {
        return `${CD}${FD(bc(DD))}`
      } catch {
        return `${CD}${FD(void 0)}`
      }
    }

    function bc(DD) {
      const CD = gC(DD.holder(), DD.key),
        cD = void 0 === CD ? void 0 : FC(CD, DD);
      return DD.onNamespace && !pc() && Dc(cD, DD) ? wC(globalThis.WebAssembly, DD.key) : cD
    }

    function Qc(DD) {
      if (hC(DD)) return 5;
      const CD = DC(DD);
      return EC(CD) ? 4 : uC(DD) ? 3 : TC(CD) ? function(DD) {
        return VD(fC, VC, [DD])
      }(CD) ? -1 : CD === jC ? 0 : 1 : 2
    }

    function wc() {
      const DD = function() {
        const DD = zD();
        return OD === ND || OD === gD ? (VD = aD, KD = qD) : VD = fD, DD
      }();
      try {
        if (null === cc || !hC(cc)) {
          const DD = function() {
            if (void 0 === BC) return null;
            let DD = pc() ? null : "wh:wa";
            const CD = CD => {
              null !== CD && (null === DD || Qc(CD) > Qc(DD)) && (DD = CD)
            };
            for (let cD = 0; cD < XC.length; cD++) {
              const DD = XC[cD];
              void 0 === DD || ic(DD) || CD(fc(DD))
            }
            CD((0, CC.j)());
            for (let cD = 0; cD < UC.length; cD++) {
              const DD = UC[cD];
              void 0 === DD || ic(DD) || CD(JC(DD))
            }
            return DD
          }();
          (null === cc || null !== DD && Qc(DD) > Qc(cc)) && (cc = DD)
        }
      } finally {
        lD(DD)
      }
    }

    function Sc() {
      Ic = !0
    }

    function Bc() {
      if (Ic) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && wc(), null !== cc) return cc;
      if (void 0 === BC) return "wn:unsupported";
      const DD = (0, ID.n)();
      return null === DD ? null : `wn:${DD}`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);