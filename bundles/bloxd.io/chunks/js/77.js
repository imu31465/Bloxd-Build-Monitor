export const id = 77;
export const ids = [77];
export const modules = {
  4722: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => kz,
      e: () => Uw,
      f: () => Yz,
      j: () => zw,
      n: () => vz,
      q: () => Hz,
      r: () => Wz,
      v: () => oz,
      x: () => xz,
      B: () => Aw,
      E: () => Rw,
      G: () => az,
      H: () => lz
    });
    var pD = wD(2861);
    const sD = Function.prototype.toString,
      KD = RegExp.prototype.exec,
      rD = Reflect.apply,
      LD = Function.prototype.call,
      cD = Function.prototype.apply,
      gD = Function.prototype.bind,
      RD = Object.defineProperty,
      AD = Uint8Array;
    let UD, fD;
    try {
      UD = globalThis.crypto, fD = void 0 === UD || null === UD ? void 0 : UD.getRandomValues
    } catch {}
    const ID = "bloxdBindApply";
    let BD;
    try {
      const DD = LD;
      RD(DD, ID, {
        __proto__: null,
        value: gD,
        configurable: !0
      });
      try {
        BD = DD[ID](cD)
      } finally {
        delete DD[ID]
      }
    } catch {}
    const GD = 16,
      hD = 256,
      nD = 0,
      MD = 1,
      OD = 2,
      JD = 3;
    let ED, QD = nD,
      XD = rD,
      VD = 0;

    function PD(DD, zD) {
      return DD === `function ${zD}() { [native code] }` || DD === `function ${zD}() {\n    [native code]\n}`
    }
    const CD = 0,
      xD = 1,
      TD = 2;
    let bD = CD;

    function jD(DD, zD, wD) {
      if (bD === TD && QD === MD && ! function() {
          const DD = ED;
          return VD >= hD && (XD(fD, UD, [DD]), VD = 0), DD[VD++] < 256 / GD
        }()) return function(DD, zD, wD) {
        return XD(DD, zD, wD ?? 0)
      }(...arguments);
      if (bD === CD || QD === OD) return rD(DD, zD, wD);
      let pD;
      bD = CD;
      try {
        QD === nD && (QD = JD, QD = function() {
          const DD = rD(sD, rD, []);
          if (PD(DD, "apply")) return OD;
          if (null === rD(KD, /\(\.\.\.arguments\)/, [DD]) && null === rD(KD, /^function\s*\(\.\.\.[\w$]+\)/, [DD])) return OD;
          if ("function" !== typeof BD || "function" !== typeof LD || "function" !== typeof cD || "function" !== typeof gD || "function" !== typeof RD || "function" !== typeof fD || "function" !== typeof AD || !PD(rD(sD, LD, []), "call") || !PD(rD(sD, cD, []), "apply") || !PD(rD(sD, gD, []), "bind") || !PD(rD(sD, RD, []), "defineProperty") || !PD(rD(sD, fD, []), "getRandomValues") || !PD(rD(sD, AD, []), "Uint8Array")) return OD;
          const zD = BD,
            wD = {},
            pD = function(DD) {
              return this === wD && DD === wD
            };
          try {
            if (!0 !== zD(pD, wD, [wD])) return OD;
            const DD = new AD(hD);
            zD(fD, UD, [DD]), ED = DD
          } catch {
            return OD
          }
          return XD = zD, MD
        }()), pD = rD(DD, zD, wD)
      } catch (ID) {
        throw QD = OD, ID
      }
      return bD = TD, pD
    }
    let dD = rD;

    function SD() {
      return (dD === rD ? 0 : 3) + bD
    }

    function iD() {
      const DD = SD();
      return dD = rD, DD
    }

    function lD(DD) {
      dD = DD >= 3 ? jD : rD, bD = DD % 3
    }
    const WD = Function.prototype.toString,
      ND = Object.getOwnPropertyDescriptor,
      ZD = Object.prototype.hasOwnProperty,
      yD = RegExp.prototype.exec,
      kD = TextEncoder.prototype.encodeInto,
      mD = String.prototype.startsWith,
      eD = Number.prototype.toString,
      oD = WeakMap.prototype.get,
      aD = WeakMap.prototype.set,
      uD = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      vD = new TextEncoder,
      tD = new Uint8Array(1024),
      FD = 9999999,
      YD = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      HD = new WeakMap;

    function qD(DD) {
      if ("function" !== typeof DD) return "#a0.0";
      const zD = dD(oD, HD, [DD]);
      if (void 0 !== zD) return zD;
      const wD = dD(WD, DD, []),
        pD = wD.length > FD ? FD : wD.length,
        sD = `#${function(DD,zD){const wD=dD(yD,uD,[zD]);if(null===wD)return"s";const pD=wD[1];if("ProxyObject"===pD)return"p";if(""!==pD)return dD(mD,pD,["bound "])?"b":"n";try{const zD=ND(DD,"name"),wD=void 0!==zD&&dD(ZD,zD,["value"])?zD.value:void 0;return"string"===typeof wD&&dD(mD,wD,["bound "])?"b":"p"}catch{return"p"}}(DD,wD)}${pD}.${function(DD){const{written:zD}=dD(kD,vD,[DD,tD]);let wD=2166136261;for(let pD=0;pD<zD;pD++)wD=(wD^tD[pD])>>>0,wD=wD+(wD<<1)+(wD<<4)+(wD<<7)+(wD<<8)+(wD<<24)>>>0;return dD(eD,wD,[36])}(wD)}`;
      return dD(aD, HD, [DD, sD]), sD
    }

    function Dz(DD) {
      const zD = dD(yD, YD, [DD]);
      return null === zD ? DD : zD[1]
    }
    var zz = wD(2874);
    const wz = Function.prototype.toString,
      pz = Object.getOwnPropertyDescriptor,
      sz = RegExp.prototype.exec,
      Kz = Object.prototype.hasOwnProperty,
      rz = Set.prototype.has,
      Lz = WeakMap.prototype.get,
      cz = WeakMap.prototype.set,
      gz = Reflect.get,
      Rz = Object.getPrototypeOf,
      Az = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function Uz(DD, zD, wD) {
      return {
        code: DD,
        holder: zD,
        key: wD,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${wD}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function fz() {
      return Az
    }
    const Iz = Az?.Instance.prototype,
      Bz = Az?.Memory.prototype;

    function Gz() {
      return Bz
    }
    let hz, nz;
    try {
      const DD = globalThis.crypto,
        zD = DD?.subtle;
      hz = DD ? Rz(DD) : void 0, nz = zD ? Rz(zD) : void 0
    } catch {}

    function Mz(DD, zD) {
      for (let wD = DD; void 0 !== wD && null !== wD; wD = Rz(wD)) {
        const DD = pz(wD, zD);
        if (DD) return DD
      }
    }
    const Oz = [Uz("in", fz, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), Uz("is", fz, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Uz("co", fz, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), Uz("cs", fz, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Uz("mo", fz, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Uz("it", fz, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Uz("me", fz, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Uz("ex", (function() {
      return Iz
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), Uz("bu", Gz, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), Uz("gr", Gz, "grow", {
      tier: "punished"
    }), Uz("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), Uz("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Uz("su", (function() {
      return hz
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Uz("dg", (function() {
      return nz
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function Jz(DD) {
      let zD;
      try {
        const wD = gz(globalThis, DD);
        zD = "function" === typeof wD ? wD.prototype : void 0
      } catch {}
      return () => zD
    }

    function Ez(DD, zD, wD) {
      return wD.map((wD => Uz(DD, zD, wD)))
    }
    const Qz = Uz("rx", Jz("HTMLCanvasElement"), "getContext"),
      Xz = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      Vz = {
        webgpu: [...Ez("gd", Jz("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...Ez("gq", Jz("GPUQueue"), ["submit", "writeBuffer"]), ...Ez("ge", Jz("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...Ez("gp", Jz("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), Qz],
        webgl: [...Ez("g2", Jz("WebGL2RenderingContext"), [...Xz, "drawArraysInstanced", "drawElementsInstanced"]), Qz],
        webgl1: [...Ez("g1", Jz("WebGLRenderingContext"), Xz), Qz]
      };
    let Pz = [];
    const Cz = new WeakMap;

    function xz(DD, zD) {
      const wD = iD();
      try {
        dD(cz, Cz, [DD, zD])
      } finally {
        lD(wD)
      }
    }

    function Tz(DD) {
      try {
        const zD = Lw(DD),
          wD = dD(Lz, Cz, [zD]);
        return Dw(wD, DD) ? bz(DD, !0) : `${bz(DD,!1)}${qD(wD??zD)}`
      } catch {
        return `${bz(DD,!1)}${qD(void 0)}`
      }
    }

    function bz(DD, zD) {
      let {
        code: wD,
        key: pD
      } = DD;
      return `wh:${wD}${zD?"-dbg":""}:${pD}`
    }

    function jz(DD) {
      return Object.values(Vz).flatMap((zD => zD.map((zD => bz(zD, DD)))))
    }
    const dz = new Set(jz(!0)),
      Sz = new Set([...jz(!1), ...dz]),
      iz = bz(Qz, !1);

    function lz(DD) {
      Pz = Vz[DD]
    }

    function Wz(DD) {
      const zD = iD();
      try {
        return Nz(DD) || Nz(Dz(DD))
      } finally {
        lD(zD)
      }
    }

    function Nz(DD) {
      return dD(rz, Sz, [DD])
    }

    function Zz(DD) {
      return new Set(Oz.filter((zD => zD.tier === DD)).map((DD => `wh:${DD.code}`)))
    }
    const yz = Zz("punished"),
      kz = !1,
      mz = new Set(zz.e),
      ez = Zz("weighted");

    function oz(DD) {
      const zD = iD();
      try {
        return uz(Dz(DD))
      } finally {
        lD(zD)
      }
    }

    function az(DD) {
      const zD = iD();
      try {
        return Dz(DD)
      } finally {
        lD(zD)
      }
    }

    function uz(DD) {
      return dD(rz, ez, [DD])
    }

    function vz(DD) {
      const zD = iD();
      try {
        return tz(DD)
      } finally {
        lD(zD)
      }
    }

    function tz(DD) {
      return dD(rz, mz, [DD])
    }

    function Fz(DD) {
      return "wb" === DD || dD(rz, yz, [DD])
    }

    function Yz(DD) {
      const zD = iD();
      try {
        return Fz(DD) || tz(DD)
      } finally {
        lD(zD)
      }
    }

    function Hz(DD) {
      const zD = iD();
      try {
        return "wb" === DD || kz && Fz(DD)
      } finally {
        lD(zD)
      }
    }

    function qz(DD, zD) {
      let {
        isGetter: wD
      } = zD;
      const pD = pz(DD, wD ? "get" : "value");
      return void 0 === pD ? void 0 : pD.value
    }

    function Dw(DD, zD) {
      let {
        isConstructor: wD,
        native: pD
      } = zD;
      return "function" === typeof DD && (!(!wD && dD(Kz, DD, ["prototype"])) && null !== dD(sz, pD, [dD(wz, DD, [])]))
    }

    function zw(DD, zD) {
      return Dw(DD, Uz("", (() => {}), zD, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let ww = null,
      pw = !1;

    function sw() {
      try {
        return globalThis.WebAssembly === Az
      } catch {
        return !1
      }
    }

    function Kw(DD) {
      try {
        return function(DD) {
          const {
            holder: zD,
            key: wD,
            onNamespace: pD,
            inSecureContext: sD
          } = DD, KD = zD(), rD = Mz(KD, wD);
          if (!rD) return !(sD && !0 === globalThis.isSecureContext);
          const LD = qz(rD, DD);
          if (!Dw(LD, DD)) return !1;
          if (pD) {
            const zD = globalThis.WebAssembly;
            if (zD !== KD && null !== zD && ("object" === typeof zD || "function" === typeof zD)) {
              const pD = gz(zD, wD);
              return pD === LD || void 0 === pD || Dw(pD, DD)
            }
          }
          return !0
        }(DD)
      } catch {
        return !1
      }
    }

    function rw(DD) {
      const zD = `wh:${DD.code}`;
      if ("punished" === DD.tier) return zD;
      try {
        return `${zD}${qD(Lw(DD))}`
      } catch {
        return `${zD}${qD(void 0)}`
      }
    }

    function Lw(DD) {
      const zD = Mz(DD.holder(), DD.key),
        wD = void 0 === zD ? void 0 : qz(zD, DD);
      return DD.onNamespace && !sw() && Dw(wD, DD) ? gz(globalThis.WebAssembly, DD.key) : wD
    }

    function gw(DD) {
      if (Fz(DD)) return 5;
      const zD = Dz(DD);
      return uz(zD) ? 4 : tz(DD) ? 3 : Nz(zD) ? function(DD) {
        return dD(rz, dz, [DD])
      }(zD) ? -1 : zD === iz ? 0 : 1 : 2
    }

    function Rw() {
      const DD = function() {
        const DD = SD();
        return QD === nD || QD === MD ? (dD = jD, bD = xD) : dD = rD, DD
      }();
      try {
        if (null === ww || !Fz(ww)) {
          const DD = function() {
            if (void 0 === Az) return null;
            let DD = sw() ? null : "wh:wa";
            const zD = zD => {
              null !== zD && (null === DD || gw(zD) > gw(DD)) && (DD = zD)
            };
            for (let wD = 0; wD < Oz.length; wD++) {
              const DD = Oz[wD];
              void 0 === DD || Kw(DD) || zD(rw(DD))
            }
            zD((0, zz.p)());
            for (let wD = 0; wD < Pz.length; wD++) {
              const DD = Pz[wD];
              void 0 === DD || Kw(DD) || zD(Tz(DD))
            }
            return DD
          }();
          (null === ww || null !== DD && gw(DD) > gw(ww)) && (ww = DD)
        }
      } finally {
        lD(DD)
      }
    }

    function Aw() {
      pw = !0
    }

    function Uw() {
      if (pw) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Rw(), null !== ww) return ww;
      if (void 0 === Az) return "wn:unsupported";
      const DD = (0, pD.m)();
      return null === DD ? null : `wn:${DD}`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);