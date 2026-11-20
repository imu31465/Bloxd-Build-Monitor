export const id = 75;
export const ids = [75];
export const modules = {
  4451: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Hz,
      h: () => TP,
      k: () => kz,
      m: () => zP,
      p: () => oz,
      q: () => Xz,
      t: () => Qz,
      v: () => Bz,
      x: () => Kz,
      y: () => lP,
      A: () => NP,
      E: () => Jz,
      H: () => Iz
    });
    var hv = Pv(3466);
    const Sv = Function.prototype.toString,
      ev = RegExp.prototype.exec,
      gv = Reflect.apply,
      pv = Function.prototype.call,
      dv = Function.prototype.apply,
      Nv = Function.prototype.bind,
      lv = Object.defineProperty,
      Tv = Uint8Array;
    let Wv, wv;
    try {
      Wv = globalThis.crypto, wv = void 0 === Wv || null === Wv ? void 0 : Wv.getRandomValues
    } catch {}
    const av = "bloxdBindApply";
    let sv;
    try {
      const vv = pv;
      lv(vv, av, {
        __proto__: null,
        value: Nv,
        configurable: !0
      });
      try {
        sv = vv[av](dv)
      } finally {
        delete vv[av]
      }
    } catch {}
    const Cv = 16,
      iv = 256,
      cv = 0,
      Gv = 1,
      mv = 2,
      jv = 3;
    let fv, Fv = cv,
      Yv = gv,
      nv = 0;

    function Ov(vv, zv) {
      return vv === `function ${zv}() { [native code] }` || vv === `function ${zv}() {\n    [native code]\n}`
    }
    const Dv = 0,
      Kv = 1,
      Vv = 2;
    let Uv = Dv;

    function Rv(vv, zv, Pv) {
      if (Uv === Vv && Fv === Gv && ! function() {
          const vv = fv;
          return nv >= iv && (Yv(wv, Wv, [vv]), nv = 0), vv[nv++] < 256 / Cv
        }()) return function(vv, zv, Pv) {
        return Yv(vv, zv, Pv ?? 0)
      }(...arguments);
      if (Uv === Dv || Fv === mv) return gv(vv, zv, Pv);
      let hv;
      Uv = Dv;
      try {
        Fv === cv && (Fv = jv, Fv = function() {
          const vv = gv(Sv, gv, []);
          if (Ov(vv, "apply")) return mv;
          if (null === gv(ev, /\(\.\.\.arguments\)/, [vv]) && null === gv(ev, /^function\s*\(\.\.\.[\w$]+\)/, [vv])) return mv;
          if ("function" !== typeof sv || "function" !== typeof pv || "function" !== typeof dv || "function" !== typeof Nv || "function" !== typeof lv || "function" !== typeof wv || "function" !== typeof Tv || !Ov(gv(Sv, pv, []), "call") || !Ov(gv(Sv, dv, []), "apply") || !Ov(gv(Sv, Nv, []), "bind") || !Ov(gv(Sv, lv, []), "defineProperty") || !Ov(gv(Sv, wv, []), "getRandomValues") || !Ov(gv(Sv, Tv, []), "Uint8Array")) return mv;
          const zv = sv,
            Pv = {},
            hv = function(vv) {
              return this === Pv && vv === Pv
            };
          try {
            if (!0 !== zv(hv, Pv, [Pv])) return mv;
            const vv = new Tv(iv);
            zv(wv, Wv, [vv]), fv = vv
          } catch {
            return mv
          }
          return Yv = zv, Gv
        }()), hv = gv(vv, zv, Pv)
      } catch (av) {
        throw Fv = mv, av
      }
      return Uv = Vv, hv
    }
    let xv = gv;

    function tv() {
      return (xv === gv ? 0 : 3) + Uv
    }

    function qv() {
      const vv = tv();
      return xv = gv, vv
    }

    function Iv(vv) {
      xv = vv >= 3 ? Rv : gv, Uv = vv % 3
    }
    const Qv = Function.prototype.toString,
      Zv = Object.getOwnPropertyDescriptor,
      Av = Object.prototype.hasOwnProperty,
      Lv = RegExp.prototype.exec,
      Hv = TextEncoder.prototype.encodeInto,
      Mv = String.prototype.startsWith,
      yv = Number.prototype.toString,
      Bv = WeakMap.prototype.get,
      Jv = WeakMap.prototype.set,
      Ev = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      ov = new TextEncoder,
      bv = new Uint8Array(1024),
      rv = 9999999,
      kv = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      Xv = new WeakMap;

    function uv(vv) {
      if ("function" !== typeof vv) return "#a0.0";
      const zv = xv(Bv, Xv, [vv]);
      if (void 0 !== zv) return zv;
      const Pv = xv(Qv, vv, []),
        hv = Pv.length > rv ? rv : Pv.length,
        Sv = `#${function(vv,zv){const Pv=xv(Lv,Ev,[zv]);if(null===Pv)return"s";const hv=Pv[1];if("ProxyObject"===hv)return"p";if(""!==hv)return xv(Mv,hv,["bound "])?"b":"n";try{const zv=Zv(vv,"name"),Pv=void 0!==zv&&xv(Av,zv,["value"])?zv.value:void 0;return"string"===typeof Pv&&xv(Mv,Pv,["bound "])?"b":"p"}catch{return"p"}}(vv,Pv)}${hv}.${function(vv){const{written:zv}=xv(Hv,ov,[vv,bv]);let Pv=2166136261;for(let hv=0;hv<zv;hv++)Pv=(Pv^bv[hv])>>>0,Pv=Pv+(Pv<<1)+(Pv<<4)+(Pv<<7)+(Pv<<8)+(Pv<<24)>>>0;return xv(yv,Pv,[36])}(Pv)}`;
      return xv(Jv, Xv, [vv, Sv]), Sv
    }

    function vz(vv) {
      const zv = xv(Lv, kv, [vv]);
      return null === zv ? vv : zv[1]
    }
    var zz = Pv(3488);
    const Pz = Function.prototype.toString,
      hz = Object.getOwnPropertyDescriptor,
      Sz = RegExp.prototype.exec,
      ez = Object.prototype.hasOwnProperty,
      gz = Set.prototype.has,
      pz = WeakMap.prototype.get,
      dz = WeakMap.prototype.set,
      Nz = Reflect.get,
      lz = Object.getPrototypeOf,
      Tz = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function Wz(vv, zv, Pv) {
      return {
        code: vv,
        holder: zv,
        key: Pv,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${Pv}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function wz() {
      return Tz
    }
    const az = Tz?.Instance.prototype,
      sz = Tz?.Memory.prototype;

    function Cz() {
      return sz
    }
    let iz, cz;
    try {
      const vv = globalThis.crypto,
        zv = vv?.subtle;
      iz = vv ? lz(vv) : void 0, cz = zv ? lz(zv) : void 0
    } catch {}

    function Gz(vv, zv) {
      for (let Pv = vv; void 0 !== Pv && null !== Pv; Pv = lz(Pv)) {
        const vv = hz(Pv, zv);
        if (vv) return vv
      }
    }
    const mz = [Wz("in", wz, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), Wz("is", wz, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Wz("co", wz, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), Wz("cs", wz, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Wz("mo", wz, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Wz("it", wz, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Wz("me", wz, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Wz("ex", (function() {
      return az
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), Wz("bu", Cz, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), Wz("gr", Cz, "grow", {
      tier: "punished"
    }), Wz("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), Wz("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Wz("su", (function() {
      return iz
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Wz("dg", (function() {
      return cz
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function jz(vv) {
      let zv;
      try {
        const Pv = Nz(globalThis, vv);
        zv = "function" === typeof Pv ? Pv.prototype : void 0
      } catch {}
      return () => zv
    }

    function fz(vv, zv, Pv) {
      return Pv.map((Pv => Wz(vv, zv, Pv)))
    }
    const Fz = Wz("rx", jz("HTMLCanvasElement"), "getContext"),
      Yz = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      nz = {
        webgpu: [...fz("gd", jz("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...fz("gq", jz("GPUQueue"), ["submit", "writeBuffer"]), ...fz("ge", jz("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...fz("gp", jz("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), Fz],
        webgl: [...fz("g2", jz("WebGL2RenderingContext"), [...Yz, "drawArraysInstanced", "drawElementsInstanced"]), Fz],
        webgl1: [...fz("g1", jz("WebGLRenderingContext"), Yz), Fz]
      };
    let Oz = [];
    const Dz = new WeakMap;

    function Kz(vv, zv) {
      const Pv = qv();
      try {
        xv(dz, Dz, [vv, zv])
      } finally {
        Iv(Pv)
      }
    }

    function Vz(vv) {
      try {
        const zv = pP(vv),
          Pv = xv(pz, Dz, [zv]);
        return vP(Pv, vv) ? Uz(vv, !0) : `${Uz(vv,!1)}${uv(Pv??zv)}`
      } catch {
        return `${Uz(vv,!1)}${uv(void 0)}`
      }
    }

    function Uz(vv, zv) {
      let {
        code: Pv,
        key: hv
      } = vv;
      return `wh:${Pv}${zv?"-dbg":""}:${hv}`
    }

    function Rz(vv) {
      return Object.values(nz).flatMap((zv => zv.map((zv => Uz(zv, vv)))))
    }
    const xz = new Set(Rz(!0)),
      tz = new Set([...Rz(!1), ...xz]),
      qz = Uz(Fz, !1);

    function Iz(vv) {
      Oz = nz[vv]
    }

    function Qz(vv) {
      const zv = qv();
      try {
        return Zz(vv) || Zz(vz(vv))
      } finally {
        Iv(zv)
      }
    }

    function Zz(vv) {
      return xv(gz, tz, [vv])
    }

    function Az(vv) {
      return new Set(mz.filter((zv => zv.tier === vv)).map((vv => `wh:${vv.code}`)))
    }
    const Lz = Az("punished"),
      Hz = !1,
      Mz = new Set(zz.d),
      yz = Az("weighted");

    function Bz(vv) {
      const zv = qv();
      try {
        return Ez(vz(vv))
      } finally {
        Iv(zv)
      }
    }

    function Jz(vv) {
      const zv = qv();
      try {
        return vz(vv)
      } finally {
        Iv(zv)
      }
    }

    function Ez(vv) {
      return xv(gz, yz, [vv])
    }

    function oz(vv) {
      const zv = qv();
      try {
        return bz(vv)
      } finally {
        Iv(zv)
      }
    }

    function bz(vv) {
      return xv(gz, Mz, [vv])
    }

    function rz(vv) {
      return "wb" === vv || xv(gz, Lz, [vv])
    }

    function kz(vv) {
      const zv = qv();
      try {
        return rz(vv) || bz(vv)
      } finally {
        Iv(zv)
      }
    }

    function Xz(vv) {
      const zv = qv();
      try {
        return "wb" === vv || Hz && rz(vv)
      } finally {
        Iv(zv)
      }
    }

    function uz(vv, zv) {
      let {
        isGetter: Pv
      } = zv;
      const hv = hz(vv, Pv ? "get" : "value");
      return void 0 === hv ? void 0 : hv.value
    }

    function vP(vv, zv) {
      let {
        isConstructor: Pv,
        native: hv
      } = zv;
      return "function" === typeof vv && (!(!Pv && xv(ez, vv, ["prototype"])) && null !== xv(Sz, hv, [xv(Pz, vv, [])]))
    }

    function zP(vv, zv) {
      return vP(vv, Wz("", (() => {}), zv, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let PP = null,
      hP = !1;

    function SP() {
      try {
        return globalThis.WebAssembly === Tz
      } catch {
        return !1
      }
    }

    function eP(vv) {
      try {
        return function(vv) {
          const {
            holder: zv,
            key: Pv,
            onNamespace: hv,
            inSecureContext: Sv
          } = vv, ev = zv(), gv = Gz(ev, Pv);
          if (!gv) return !(Sv && !0 === globalThis.isSecureContext);
          const pv = uz(gv, vv);
          if (!vP(pv, vv)) return !1;
          if (hv) {
            const zv = globalThis.WebAssembly;
            if (zv !== ev && null !== zv && ("object" === typeof zv || "function" === typeof zv)) {
              const hv = Nz(zv, Pv);
              return hv === pv || void 0 === hv || vP(hv, vv)
            }
          }
          return !0
        }(vv)
      } catch {
        return !1
      }
    }

    function gP(vv) {
      const zv = `wh:${vv.code}`;
      if ("punished" === vv.tier) return zv;
      try {
        return `${zv}${uv(pP(vv))}`
      } catch {
        return `${zv}${uv(void 0)}`
      }
    }

    function pP(vv) {
      const zv = Gz(vv.holder(), vv.key),
        Pv = void 0 === zv ? void 0 : uz(zv, vv);
      return vv.onNamespace && !SP() && vP(Pv, vv) ? Nz(globalThis.WebAssembly, vv.key) : Pv
    }

    function dP(vv) {
      if (rz(vv)) return 5;
      const zv = vz(vv);
      return Ez(zv) ? 4 : bz(vv) ? 3 : Zz(zv) ? function(vv) {
        return xv(gz, xz, [vv])
      }(zv) ? -1 : zv === qz ? 0 : 1 : 2
    }

    function NP() {
      const vv = function() {
        const vv = tv();
        return Fv === cv || Fv === Gv ? (xv = Rv, Uv = Kv) : xv = gv, vv
      }();
      try {
        if (null === PP || !rz(PP)) {
          const vv = function() {
            if (void 0 === Tz) return null;
            let vv = SP() ? null : "wh:wa";
            const zv = zv => {
              null !== zv && (null === vv || dP(zv) > dP(vv)) && (vv = zv)
            };
            for (let Pv = 0; Pv < mz.length; Pv++) {
              const vv = mz[Pv];
              void 0 === vv || eP(vv) || zv(gP(vv))
            }
            zv((0, zz.l)());
            for (let Pv = 0; Pv < Oz.length; Pv++) {
              const vv = Oz[Pv];
              void 0 === vv || eP(vv) || zv(Vz(vv))
            }
            return vv
          }();
          (null === PP || null !== vv && dP(vv) > dP(PP)) && (PP = vv)
        }
      } finally {
        Iv(vv)
      }
    }

    function lP() {
      hP = !0
    }

    function TP() {
      if (hP) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && NP(), null !== PP) return PP;
      if (void 0 === Tz) return "wn:unsupported";
      const vv = (0, hv.p)();
      return null === vv ? null : `wn:${vv}`
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);