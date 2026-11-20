export const id = 74;
export const ids = [74];
export const modules = {
  4344: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => it,
      e: () => Ns,
      i: () => ft,
      j: () => ss,
      k: () => Vt,
      o: () => Et,
      r: () => dt,
      u: () => nt,
      x: () => Zt,
      z: () => us,
      B: () => Ks,
      E: () => qt,
      F: () => Mt
    });
    var Fz = sz(3376);
    const Wz = Function.prototype.toString,
      Xz = RegExp.prototype.exec,
      Oz = Reflect.apply,
      oz = Function.prototype.call,
      vz = Function.prototype.apply,
      Uz = Function.prototype.bind,
      Kz = Object.defineProperty,
      uz = Uint8Array;
    let Nz, bz;
    try {
      Nz = globalThis.crypto, bz = void 0 === Nz || null === Nz ? void 0 : Nz.getRandomValues
    } catch {}
    const wz = "bloxdBindApply";
    let Dz;
    try {
      const zz = oz;
      Kz(zz, wz, {
        __proto__: null,
        value: Uz,
        configurable: !0
      });
      try {
        Dz = zz[wz](vz)
      } finally {
        delete zz[wz]
      }
    } catch {}
    const gz = 16,
      Hz = 256,
      Bz = 0,
      Pz = 1,
      rz = 2,
      Yz = 3;
    let xz, mz = Bz,
      Jz = Oz,
      Iz = 0;

    function Cz(zz, tz) {
      return zz === `function ${tz}() { [native code] }` || zz === `function ${tz}() {\n    [native code]\n}`
    }
    const ez = 0,
      Zz = 1,
      Gz = 2;
    let Tz = ez;

    function cz(zz, tz, sz) {
      if (Tz === Gz && mz === Pz && ! function() {
          const zz = xz;
          return Iz >= Hz && (Jz(bz, Nz, [zz]), Iz = 0), zz[Iz++] < 256 / gz
        }()) return function(zz, tz, sz) {
        return Jz(zz, tz, sz ?? 0)
      }(...arguments);
      if (Tz === ez || mz === rz) return Oz(zz, tz, sz);
      let Fz;
      Tz = ez;
      try {
        mz === Bz && (mz = Yz, mz = function() {
          const zz = Oz(Wz, Oz, []);
          if (Cz(zz, "apply")) return rz;
          if (null === Oz(Xz, /\(\.\.\.arguments\)/, [zz]) && null === Oz(Xz, /^function\s*\(\.\.\.[\w$]+\)/, [zz])) return rz;
          if ("function" !== typeof Dz || "function" !== typeof oz || "function" !== typeof vz || "function" !== typeof Uz || "function" !== typeof Kz || "function" !== typeof bz || "function" !== typeof uz || !Cz(Oz(Wz, oz, []), "call") || !Cz(Oz(Wz, vz, []), "apply") || !Cz(Oz(Wz, Uz, []), "bind") || !Cz(Oz(Wz, Kz, []), "defineProperty") || !Cz(Oz(Wz, bz, []), "getRandomValues") || !Cz(Oz(Wz, uz, []), "Uint8Array")) return rz;
          const tz = Dz,
            sz = {},
            Fz = function(zz) {
              return this === sz && zz === sz
            };
          try {
            if (!0 !== tz(Fz, sz, [sz])) return rz;
            const zz = new uz(Hz);
            tz(bz, Nz, [zz]), xz = zz
          } catch {
            return rz
          }
          return Jz = tz, Pz
        }()), Fz = Oz(zz, tz, sz)
      } catch (wz) {
        throw mz = rz, wz
      }
      return Tz = Gz, Fz
    }
    let jz = Oz;

    function Az() {
      return (jz === Oz ? 0 : 3) + Tz
    }

    function yz() {
      const zz = Az();
      return jz = Oz, zz
    }

    function Mz(zz) {
      jz = zz >= 3 ? cz : Oz, Tz = zz % 3
    }
    const dz = Function.prototype.toString,
      hz = Object.getOwnPropertyDescriptor,
      Qz = Object.prototype.hasOwnProperty,
      kz = RegExp.prototype.exec,
      iz = TextEncoder.prototype.encodeInto,
      Lz = String.prototype.startsWith,
      lz = Number.prototype.toString,
      nz = WeakMap.prototype.get,
      az = WeakMap.prototype.set,
      qz = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      Sz = new TextEncoder,
      Vz = new Uint8Array(1024),
      Rz = 9999999,
      pz = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      fz = new WeakMap;

    function Ez(zz) {
      if ("function" !== typeof zz) return "#a0.0";
      const tz = jz(nz, fz, [zz]);
      if (void 0 !== tz) return tz;
      const sz = jz(dz, zz, []),
        Fz = sz.length > Rz ? Rz : sz.length,
        Wz = `#${function(zz,tz){const sz=jz(kz,qz,[tz]);if(null===sz)return"s";const Fz=sz[1];if("ProxyObject"===Fz)return"p";if(""!==Fz)return jz(Lz,Fz,["bound "])?"b":"n";try{const tz=hz(zz,"name"),sz=void 0!==tz&&jz(Qz,tz,["value"])?tz.value:void 0;return"string"===typeof sz&&jz(Lz,sz,["bound "])?"b":"p"}catch{return"p"}}(zz,sz)}${Fz}.${function(zz){const{written:tz}=jz(iz,Sz,[zz,Vz]);let sz=2166136261;for(let Fz=0;Fz<tz;Fz++)sz=(sz^Vz[Fz])>>>0,sz=sz+(sz<<1)+(sz<<4)+(sz<<7)+(sz<<8)+(sz<<24)>>>0;return jz(lz,sz,[36])}(sz)}`;
      return jz(az, fz, [zz, Wz]), Wz
    }

    function zt(zz) {
      const tz = jz(kz, pz, [zz]);
      return null === tz ? zz : tz[1]
    }
    var tt = sz(3386);
    const st = Function.prototype.toString,
      Ft = Object.getOwnPropertyDescriptor,
      Wt = RegExp.prototype.exec,
      Xt = Object.prototype.hasOwnProperty,
      Ot = Set.prototype.has,
      ot = WeakMap.prototype.get,
      vt = WeakMap.prototype.set,
      Ut = Reflect.get,
      Kt = Object.getPrototypeOf,
      ut = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function Nt(zz, tz, sz) {
      return {
        code: zz,
        holder: tz,
        key: sz,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${sz}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function bt() {
      return ut
    }
    const wt = ut?.Instance.prototype,
      Dt = ut?.Memory.prototype;

    function gt() {
      return Dt
    }
    let Ht, Bt;
    try {
      const zz = globalThis.crypto,
        tz = zz?.subtle;
      Ht = zz ? Kt(zz) : void 0, Bt = tz ? Kt(tz) : void 0
    } catch {}

    function Pt(zz, tz) {
      for (let sz = zz; void 0 !== sz && null !== sz; sz = Kt(sz)) {
        const zz = Ft(sz, tz);
        if (zz) return zz
      }
    }
    const rt = [Nt("in", bt, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), Nt("is", bt, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Nt("co", bt, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), Nt("cs", bt, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Nt("mo", bt, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Nt("it", bt, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Nt("me", bt, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Nt("ex", (function() {
      return wt
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), Nt("bu", gt, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), Nt("gr", gt, "grow", {
      tier: "punished"
    }), Nt("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), Nt("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Nt("su", (function() {
      return Ht
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Nt("dg", (function() {
      return Bt
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function Yt(zz) {
      let tz;
      try {
        const sz = Ut(globalThis, zz);
        tz = "function" === typeof sz ? sz.prototype : void 0
      } catch {}
      return () => tz
    }

    function xt(zz, tz, sz) {
      return sz.map((sz => Nt(zz, tz, sz)))
    }
    const mt = Nt("rx", Yt("HTMLCanvasElement"), "getContext"),
      Jt = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      It = {
        webgpu: [...xt("gd", Yt("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...xt("gq", Yt("GPUQueue"), ["submit", "writeBuffer"]), ...xt("ge", Yt("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...xt("gp", Yt("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), mt],
        webgl: [...xt("g2", Yt("WebGL2RenderingContext"), [...Jt, "drawArraysInstanced", "drawElementsInstanced"]), mt],
        webgl1: [...xt("g1", Yt("WebGLRenderingContext"), Jt), mt]
      };
    let Ct = [];
    const et = new WeakMap;

    function Zt(zz, tz) {
      const sz = yz();
      try {
        jz(vt, et, [zz, tz])
      } finally {
        Mz(sz)
      }
    }

    function Gt(zz) {
      try {
        const tz = vs(zz),
          sz = jz(ot, et, [tz]);
        return ts(sz, zz) ? Tt(zz, !0) : `${Tt(zz,!1)}${Ez(sz??tz)}`
      } catch {
        return `${Tt(zz,!1)}${Ez(void 0)}`
      }
    }

    function Tt(zz, tz) {
      let {
        code: sz,
        key: Fz
      } = zz;
      return `wh:${sz}${tz?"-dbg":""}:${Fz}`
    }

    function ct(zz) {
      return Object.values(It).flatMap((tz => tz.map((tz => Tt(tz, zz)))))
    }
    const jt = new Set(ct(!0)),
      At = new Set([...ct(!1), ...jt]),
      yt = Tt(mt, !1);

    function Mt(zz) {
      Ct = It[zz]
    }

    function dt(zz) {
      const tz = yz();
      try {
        return ht(zz) || ht(zt(zz))
      } finally {
        Mz(tz)
      }
    }

    function ht(zz) {
      return jz(Ot, At, [zz])
    }

    function Qt(zz) {
      return new Set(rt.filter((tz => tz.tier === zz)).map((zz => `wh:${zz.code}`)))
    }
    const kt = Qt("punished"),
      it = !1,
      Lt = new Set(tt.b),
      lt = Qt("weighted");

    function nt(zz) {
      const tz = yz();
      try {
        return St(zt(zz))
      } finally {
        Mz(tz)
      }
    }

    function qt(zz) {
      const tz = yz();
      try {
        return zt(zz)
      } finally {
        Mz(tz)
      }
    }

    function St(zz) {
      return jz(Ot, lt, [zz])
    }

    function Vt(zz) {
      const tz = yz();
      try {
        return Rt(zz)
      } finally {
        Mz(tz)
      }
    }

    function Rt(zz) {
      return jz(Ot, Lt, [zz])
    }

    function pt(zz) {
      return "wb" === zz || jz(Ot, kt, [zz])
    }

    function ft(zz) {
      const tz = yz();
      try {
        return pt(zz) || Rt(zz)
      } finally {
        Mz(tz)
      }
    }

    function Et(zz) {
      const tz = yz();
      try {
        return "wb" === zz || it && pt(zz)
      } finally {
        Mz(tz)
      }
    }

    function zs(zz, tz) {
      let {
        isGetter: sz
      } = tz;
      const Fz = Ft(zz, sz ? "get" : "value");
      return void 0 === Fz ? void 0 : Fz.value
    }

    function ts(zz, tz) {
      let {
        isConstructor: sz,
        native: Fz
      } = tz;
      return "function" === typeof zz && (!(!sz && jz(Xt, zz, ["prototype"])) && null !== jz(Wt, Fz, [jz(st, zz, [])]))
    }

    function ss(zz, tz) {
      return ts(zz, Nt("", (() => {}), tz, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let Fs = null,
      Ws = !1;

    function Xs() {
      try {
        return globalThis.WebAssembly === ut
      } catch {
        return !1
      }
    }

    function Os(zz) {
      try {
        return function(zz) {
          const {
            holder: tz,
            key: sz,
            onNamespace: Fz,
            inSecureContext: Wz
          } = zz, Xz = tz(), Oz = Pt(Xz, sz);
          if (!Oz) return !(Wz && !0 === globalThis.isSecureContext);
          const oz = zs(Oz, zz);
          if (!ts(oz, zz)) return !1;
          if (Fz) {
            const tz = globalThis.WebAssembly;
            if (tz !== Xz && null !== tz && ("object" === typeof tz || "function" === typeof tz)) {
              const Fz = Ut(tz, sz);
              return Fz === oz || void 0 === Fz || ts(Fz, zz)
            }
          }
          return !0
        }(zz)
      } catch {
        return !1
      }
    }

    function os(zz) {
      const tz = `wh:${zz.code}`;
      if ("punished" === zz.tier) return tz;
      try {
        return `${tz}${Ez(vs(zz))}`
      } catch {
        return `${tz}${Ez(void 0)}`
      }
    }

    function vs(zz) {
      const tz = Pt(zz.holder(), zz.key),
        sz = void 0 === tz ? void 0 : zs(tz, zz);
      return zz.onNamespace && !Xs() && ts(sz, zz) ? Ut(globalThis.WebAssembly, zz.key) : sz
    }

    function Us(zz) {
      if (pt(zz)) return 5;
      const tz = zt(zz);
      return St(tz) ? 4 : Rt(zz) ? 3 : ht(tz) ? function(zz) {
        return jz(Ot, jt, [zz])
      }(tz) ? -1 : tz === yt ? 0 : 1 : 2
    }

    function Ks() {
      const zz = function() {
        const zz = Az();
        return mz === Bz || mz === Pz ? (jz = cz, Tz = Zz) : jz = Oz, zz
      }();
      try {
        if (null === Fs || !pt(Fs)) {
          const zz = function() {
            if (void 0 === ut) return null;
            let zz = Xs() ? null : "wh:wa";
            const tz = tz => {
              null !== tz && (null === zz || Us(tz) > Us(zz)) && (zz = tz)
            };
            for (let sz = 0; sz < rt.length; sz++) {
              const zz = rt[sz];
              void 0 === zz || Os(zz) || tz(os(zz))
            }
            tz((0, tt.l)());
            for (let sz = 0; sz < Ct.length; sz++) {
              const zz = Ct[sz];
              void 0 === zz || Os(zz) || tz(Gt(zz))
            }
            return zz
          }();
          (null === Fs || null !== zz && Us(zz) > Us(Fs)) && (Fs = zz)
        }
      } finally {
        Mz(zz)
      }
    }

    function us() {
      Ws = !0
    }

    function Ns() {
      if (Ws) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Ks(), null !== Fs) return Fs;
      if (void 0 === ut) return "wn:unsupported";
      const zz = (0, Fz.u)();
      return null === zz ? null : `wn:${zz}`
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);