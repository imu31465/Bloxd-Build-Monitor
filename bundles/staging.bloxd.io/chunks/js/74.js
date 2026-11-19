export const id = 74;
export const ids = [74];
export const modules = {
  4448: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Su,
      f: () => pb,
      h: () => Cu,
      l: () => ub,
      p: () => ju,
      s: () => Yu,
      t: () => hu,
      u: () => Qu,
      y: () => Tu,
      C: () => Ob,
      D: () => Hb,
      E: () => Wu,
      G: () => qu
    });
    var Ez = bz(3468);
    const nz = Function.prototype.toString,
      iz = RegExp.prototype.exec,
      lz = Reflect.apply,
      Mz = Function.prototype.call,
      tz = Function.prototype.apply,
      Hz = Function.prototype.bind,
      Oz = Object.defineProperty,
      pz = Uint8Array;
    let dz, Fz;
    try {
      dz = globalThis.crypto, Fz = void 0 === dz || null === dz ? void 0 : dz.getRandomValues
    } catch {}
    const Zz = "bloxdBindApply";
    let Rz;
    try {
      const zz = Mz;
      Oz(zz, Zz, {
        __proto__: null,
        value: Hz,
        configurable: !0
      });
      try {
        Rz = zz[Zz](tz)
      } finally {
        delete zz[Zz]
      }
    } catch {}
    const Kz = 16,
      wz = 256,
      Xz = 0,
      fz = 1,
      sz = 2,
      rz = 3;
    let oz, Nz = Xz,
      vz = lz,
      xz = 0;

    function Jz(zz, uz) {
      return zz === `function ${uz}() { [native code] }` || zz === `function ${uz}() {\n    [native code]\n}`
    }
    const Az = 0,
      Tz = 1,
      Lz = 2;
    let Pz = Az;

    function Gz(zz, uz, bz) {
      if (Pz === Lz && Nz === fz && ! function() {
          const zz = oz;
          return xz >= wz && (vz(Fz, dz, [zz]), xz = 0), zz[xz++] < 256 / Kz
        }()) return function(zz, uz, bz) {
        return vz(zz, uz, bz ?? 0)
      }(...arguments);
      if (Pz === Az || Nz === sz) return lz(zz, uz, bz);
      let Ez;
      Pz = Az;
      try {
        Nz === Xz && (Nz = rz, Nz = function() {
          const zz = lz(nz, lz, []);
          if (Jz(zz, "apply")) return sz;
          if (null === lz(iz, /\(\.\.\.arguments\)/, [zz]) && null === lz(iz, /^function\s*\(\.\.\.[\w$]+\)/, [zz])) return sz;
          if ("function" !== typeof Rz || "function" !== typeof Mz || "function" !== typeof tz || "function" !== typeof Hz || "function" !== typeof Oz || "function" !== typeof Fz || "function" !== typeof pz || !Jz(lz(nz, Mz, []), "call") || !Jz(lz(nz, tz, []), "apply") || !Jz(lz(nz, Hz, []), "bind") || !Jz(lz(nz, Oz, []), "defineProperty") || !Jz(lz(nz, Fz, []), "getRandomValues") || !Jz(lz(nz, pz, []), "Uint8Array")) return sz;
          const uz = Rz,
            bz = {},
            Ez = function(zz) {
              return this === bz && zz === bz
            };
          try {
            if (!0 !== uz(Ez, bz, [bz])) return sz;
            const zz = new pz(wz);
            uz(Fz, dz, [zz]), oz = zz
          } catch {
            return sz
          }
          return vz = uz, fz
        }()), Ez = lz(zz, uz, bz)
      } catch (Zz) {
        throw Nz = sz, Zz
      }
      return Pz = Lz, Ez
    }
    let az = lz;

    function Vz() {
      return (az === lz ? 0 : 3) + Pz
    }

    function mz() {
      const zz = Vz();
      return az = lz, zz
    }

    function qz(zz) {
      az = zz >= 3 ? Gz : lz, Pz = zz % 3
    }
    const hz = Function.prototype.toString,
      Uz = Object.getOwnPropertyDescriptor,
      cz = Object.prototype.hasOwnProperty,
      gz = RegExp.prototype.exec,
      Sz = TextEncoder.prototype.encodeInto,
      yz = String.prototype.startsWith,
      Dz = Number.prototype.toString,
      Qz = WeakMap.prototype.get,
      Wz = WeakMap.prototype.set,
      ez = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      jz = new TextEncoder,
      Iz = new Uint8Array(1024),
      Bz = 9999999,
      Cz = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      Yz = new WeakMap;

    function kz(zz) {
      if ("function" !== typeof zz) return "#a0.0";
      const uz = az(Qz, Yz, [zz]);
      if (void 0 !== uz) return uz;
      const bz = az(hz, zz, []),
        Ez = bz.length > Bz ? Bz : bz.length,
        nz = `#${function(zz,uz){const bz=az(gz,ez,[uz]);if(null===bz)return"s";const Ez=bz[1];if("ProxyObject"===Ez)return"p";if(""!==Ez)return az(yz,Ez,["bound "])?"b":"n";try{const uz=Uz(zz,"name"),bz=void 0!==uz&&az(cz,uz,["value"])?uz.value:void 0;return"string"===typeof bz&&az(yz,bz,["bound "])?"b":"p"}catch{return"p"}}(zz,bz)}${Ez}.${function(zz){const{written:uz}=az(Sz,jz,[zz,Iz]);let bz=2166136261;for(let Ez=0;Ez<uz;Ez++)bz=(bz^Iz[Ez])>>>0,bz=bz+(bz<<1)+(bz<<4)+(bz<<7)+(bz<<8)+(bz<<24)>>>0;return az(Dz,bz,[36])}(bz)}`;
      return az(Wz, Yz, [zz, nz]), nz
    }

    function zu(zz) {
      const uz = az(gz, Cz, [zz]);
      return null === uz ? zz : uz[1]
    }
    var uu = bz(3477);
    const bu = Function.prototype.toString,
      Eu = Object.getOwnPropertyDescriptor,
      nu = RegExp.prototype.exec,
      iu = Object.prototype.hasOwnProperty,
      lu = Set.prototype.has,
      Mu = WeakMap.prototype.get,
      tu = WeakMap.prototype.set,
      Hu = Reflect.get,
      Ou = Object.getPrototypeOf,
      pu = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function du(zz, uz, bz) {
      return {
        code: zz,
        holder: uz,
        key: bz,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${bz}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function Fu() {
      return pu
    }
    const Zu = pu?.Instance.prototype,
      Ru = pu?.Memory.prototype;

    function Ku() {
      return Ru
    }
    let wu, Xu;
    try {
      const zz = globalThis.crypto,
        uz = zz?.subtle;
      wu = zz ? Ou(zz) : void 0, Xu = uz ? Ou(uz) : void 0
    } catch {}

    function fu(zz, uz) {
      for (let bz = zz; void 0 !== bz && null !== bz; bz = Ou(bz)) {
        const zz = Eu(bz, uz);
        if (zz) return zz
      }
    }
    const su = [du("in", Fu, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), du("is", Fu, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), du("co", Fu, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), du("cs", Fu, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), du("mo", Fu, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), du("it", Fu, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), du("me", Fu, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), du("ex", (function() {
      return Zu
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), du("bu", Ku, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), du("gr", Ku, "grow", {
      tier: "punished"
    }), du("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), du("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), du("su", (function() {
      return wu
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), du("dg", (function() {
      return Xu
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function ru(zz) {
      let uz;
      try {
        const bz = Hu(globalThis, zz);
        uz = "function" === typeof bz ? bz.prototype : void 0
      } catch {}
      return () => uz
    }

    function ou(zz, uz, bz) {
      return bz.map((bz => du(zz, uz, bz)))
    }
    const Nu = du("rx", ru("HTMLCanvasElement"), "getContext"),
      vu = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      xu = {
        webgpu: [...ou("gd", ru("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...ou("gq", ru("GPUQueue"), ["submit", "writeBuffer"]), ...ou("ge", ru("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...ou("gp", ru("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), Nu],
        webgl: [...ou("g2", ru("WebGL2RenderingContext"), [...vu, "drawArraysInstanced", "drawElementsInstanced"]), Nu],
        webgl1: [...ou("g1", ru("WebGLRenderingContext"), vu), Nu]
      };
    let Ju = [];
    const Au = new WeakMap;

    function Tu(zz, uz) {
      const bz = mz();
      try {
        az(tu, Au, [zz, uz])
      } finally {
        qz(bz)
      }
    }

    function Lu(zz) {
      try {
        const uz = Mb(zz),
          bz = az(Mu, Au, [uz]);
        return zb(bz, zz) ? Pu(zz, !0) : `${Pu(zz,!1)}${kz(bz??uz)}`
      } catch {
        return `${Pu(zz,!1)}${kz(void 0)}`
      }
    }

    function Pu(zz, uz) {
      let {
        code: bz,
        key: Ez
      } = zz;
      return `wh:${bz}${uz?"-dbg":""}:${Ez}`
    }

    function Gu(zz) {
      return Object.values(xu).flatMap((uz => uz.map((uz => Pu(uz, zz)))))
    }
    const au = new Set(Gu(!0)),
      Vu = new Set([...Gu(!1), ...au]),
      mu = Pu(Nu, !1);

    function qu(zz) {
      Ju = xu[zz]
    }

    function hu(zz) {
      const uz = mz();
      try {
        return Uu(zz) || Uu(zu(zz))
      } finally {
        qz(uz)
      }
    }

    function Uu(zz) {
      return az(lu, Vu, [zz])
    }

    function cu(zz) {
      return new Set(su.filter((uz => uz.tier === zz)).map((zz => `wh:${zz.code}`)))
    }
    const gu = cu("punished"),
      Su = !1,
      yu = new Set(uu.b),
      Du = cu("weighted");

    function Qu(zz) {
      const uz = mz();
      try {
        return eu(zu(zz))
      } finally {
        qz(uz)
      }
    }

    function Wu(zz) {
      const uz = mz();
      try {
        return zu(zz)
      } finally {
        qz(uz)
      }
    }

    function eu(zz) {
      return az(lu, Du, [zz])
    }

    function ju(zz) {
      const uz = mz();
      try {
        return Iu(zz)
      } finally {
        qz(uz)
      }
    }

    function Iu(zz) {
      return az(lu, yu, [zz])
    }

    function Bu(zz) {
      return "wb" === zz || az(lu, gu, [zz])
    }

    function Cu(zz) {
      const uz = mz();
      try {
        return Bu(zz) || Iu(zz)
      } finally {
        qz(uz)
      }
    }

    function Yu(zz) {
      const uz = mz();
      try {
        return "wb" === zz || Su && Bu(zz)
      } finally {
        qz(uz)
      }
    }

    function ku(zz, uz) {
      let {
        isGetter: bz
      } = uz;
      const Ez = Eu(zz, bz ? "get" : "value");
      return void 0 === Ez ? void 0 : Ez.value
    }

    function zb(zz, uz) {
      let {
        isConstructor: bz,
        native: Ez
      } = uz;
      return "function" === typeof zz && (!(!bz && az(iu, zz, ["prototype"])) && null !== az(nu, Ez, [az(bu, zz, [])]))
    }

    function ub(zz, uz) {
      return zb(zz, du("", (() => {}), uz, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let bb = null,
      Eb = !1;

    function nb() {
      try {
        return globalThis.WebAssembly === pu
      } catch {
        return !1
      }
    }

    function ib(zz) {
      try {
        return function(zz) {
          const {
            holder: uz,
            key: bz,
            onNamespace: Ez,
            inSecureContext: nz
          } = zz, iz = uz(), lz = fu(iz, bz);
          if (!lz) return !(nz && !0 === globalThis.isSecureContext);
          const Mz = ku(lz, zz);
          if (!zb(Mz, zz)) return !1;
          if (Ez) {
            const uz = globalThis.WebAssembly;
            if (uz !== iz && null !== uz && ("object" === typeof uz || "function" === typeof uz)) {
              const Ez = Hu(uz, bz);
              return Ez === Mz || void 0 === Ez || zb(Ez, zz)
            }
          }
          return !0
        }(zz)
      } catch {
        return !1
      }
    }

    function lb(zz) {
      const uz = `wh:${zz.code}`;
      if ("punished" === zz.tier) return uz;
      try {
        return `${uz}${kz(Mb(zz))}`
      } catch {
        return `${uz}${kz(void 0)}`
      }
    }

    function Mb(zz) {
      const uz = fu(zz.holder(), zz.key),
        bz = void 0 === uz ? void 0 : ku(uz, zz);
      return zz.onNamespace && !nb() && zb(bz, zz) ? Hu(globalThis.WebAssembly, zz.key) : bz
    }

    function tb(zz) {
      if (Bu(zz)) return 5;
      const uz = zu(zz);
      return eu(uz) ? 4 : Iu(zz) ? 3 : Uu(uz) ? function(zz) {
        return az(lu, au, [zz])
      }(uz) ? -1 : uz === mu ? 0 : 1 : 2
    }

    function Hb() {
      const zz = function() {
        const zz = Vz();
        return Nz === Xz || Nz === fz ? (az = Gz, Pz = Tz) : az = lz, zz
      }();
      try {
        if (null === bb || !Bu(bb)) {
          const zz = function() {
            if (void 0 === pu) return null;
            let zz = nb() ? null : "wh:wa";
            const uz = uz => {
              null !== uz && (null === zz || tb(uz) > tb(zz)) && (zz = uz)
            };
            for (let bz = 0; bz < su.length; bz++) {
              const zz = su[bz];
              void 0 === zz || ib(zz) || uz(lb(zz))
            }
            uz((0, uu.l)());
            for (let bz = 0; bz < Ju.length; bz++) {
              const zz = Ju[bz];
              void 0 === zz || ib(zz) || uz(Lu(zz))
            }
            return zz
          }();
          (null === bb || null !== zz && tb(zz) > tb(bb)) && (bb = zz)
        }
      } finally {
        qz(zz)
      }
    }

    function Ob() {
      Eb = !0
    }

    function pb() {
      if (Eb) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Hb(), null !== bb) return bb;
      if (void 0 === pu) return "wn:unsupported";
      const zz = (0, Ez.s)();
      return null === zz ? null : `wn:${zz}`
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);