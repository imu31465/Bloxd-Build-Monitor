export const id = 134;
export const ids = [134];
export const modules = {
  40859: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      compilePagePack: () => Uz,
      prefetchCompiler: () => oz,
      reconcileHint: () => vz
    });
    var Fz = sz(6193),
      Wz = sz(6234),
      Xz = sz(6211),
      Oz = sz(6225);

    function oz() {
      (0, Fz.loadPageShaderPackCompiler)()
    }
    async function vz() {
      const zz = await (0, Fz.loadPageShaderPackCompiler)();
      await (zz ? (0, Wz.reconcileStoredShaderPackHint)(zz) : (0, Wz.forgetShaderPackActiveHint)())
    }
    async function Uz(zz) {
      const tz = await (0, Fz.loadPageShaderPackCompiler)();
      if (!tz) return {
        status: "none"
      };
      const sz = await (0, Oz.d)(zz, tz),
        oz = (0, Wz.storedPackOutcome)(sz, tz);
      if ("none" === oz.kind) return {
        status: "none"
      };
      const vz = tz.k_((0, Wz.storedShaderPackFiles)(sz), (0, Xz.shaderPackTextures)());
      if ("blocked" === oz.kind) return {
        status: "blocked",
        messageKey: oz.messageKey,
        variants: 0 === vz.errors.length ? vz.variants : null
      };
      if (vz.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", vz.errors), {
        status: "none"
      };
      const {
        name: Uz,
        keepCircleShadows: Kz
      } = sz.manifest;
      return {
        status: "active",
        pack: {
          name: Uz,
          variants: vz.variants,
          keepCircleShadows: !0 === Kz
        }
      }
    }
  },
  6234: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      forgetShaderPackActiveHint: () => Zz,
      isOtherApiVersion: () => Jz,
      isShaderPackActive: () => rz,
      isShaderPackChangePending: () => mz,
      markShaderPackChangePending: () => xz,
      pageShaderPackValidationVersion: () => Iz,
      reconcileStoredShaderPackHint: () => ez,
      removeShaderPack: () => Pz,
      replaceShaderPack: () => gz,
      saveShaderPack: () => Dz,
      shaderPackNeedsCheck: () => Cz,
      storedPackOutcome: () => Yz,
      storedShaderPackFiles: () => Nz,
      toStoredShaderPack: () => uz
    });
    var Fz = sz(6161),
      Wz = sz(6180),
      Xz = sz(44),
      Oz = sz(3133),
      oz = sz(6237),
      vz = sz(6211);
    const Uz = "shaderPackChangePending";
    let Kz = null;

    function uz(zz, tz, sz) {
      return {
        manifest: zz.manifest,
        files: (0, Fz.u)(zz.files),
        validation: tz,
        ...sz && {
          listing: sz
        }
      }
    }

    function Nz(zz) {
      return Object.keys(zz.files).map((tz => ({
        path: tz,
        source: zz.files[tz]
      })))
    }
    let bz = Promise.resolve();

    function wz(zz) {
      const tz = bz.then(zz);
      return bz = tz.catch((() => {})), tz
    }

    function Dz(zz, tz) {
      return wz((() => Hz(zz, tz)))
    }

    function gz(zz, tz, sz) {
      return wz((async () => JSON.stringify(await (0, oz.g)()) === JSON.stringify(zz) && (null === tz ? (await Bz(), !0) : Hz(tz, sz))))
    }
    async function Hz(zz, tz) {
      const sz = await Xz.e.setItem(oz.e, zz);
      return sz && Gz(zz, tz), sz
    }
    async function Bz() {
      await Xz.e.removeItem(oz.e), Xz.f.removeItem(Oz.e)
    }

    function Pz() {
      return wz(Bz)
    }

    function rz(zz, tz) {
      return "active" === Yz(zz, tz).kind
    }

    function Yz(zz, tz) {
      var sz;
      return null === zz ? {
        kind: "none",
        reason: "nothingStored"
      } : Jz(zz) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (sz = zz.validation) || void 0 === sz ? void 0 : sz.ok) || zz.validation.fromRecheck ? null === tz ? {
        kind: "none",
        reason: "noCompiler"
      } : Cz(zz, tz) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : zz.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function xz() {
      Xz.j.setItem(Uz, performance.timeOrigin)
    }

    function mz() {
      return Xz.j.getItem(Uz) === performance.timeOrigin
    }

    function Jz(zz) {
      return !(0, Wz.k)(zz.manifest.apiVersion)
    }

    function Iz(zz) {
      return Kz ??= zz.dJ((0, vz.shaderPackTextures)()), Kz
    }

    function Cz(zz, tz) {
      var sz;
      return (null === (sz = zz.validation) || void 0 === sz ? void 0 : sz.headerVersion) !== Iz(tz)
    }

    function ez(zz) {
      return wz((async () => {
        Gz(await (0, oz.g)(!0), zz)
      }))
    }

    function Zz() {
      return wz((async () => {
        Xz.f.removeItem(Oz.e)
      }))
    }

    function Gz(zz, tz) {
      rz(zz, tz) ? Xz.f.setItem(Oz.e, !0) : Xz.f.removeItem(Oz.e)
    }
  },
  6225: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => vz,
      f: () => oz
    });
    var Fz = sz(6234),
      Wz = sz(6211),
      Xz = sz(123);
    const Oz = 100;
    async function oz(zz, tz) {
      var sz;
      let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (sz = navigator.gpu) && void 0 !== sz ? sz : null;
      const Oz = zz.k_(tz, (0, Wz.shaderPackTextures)());
      if (Oz.errors.length > 0) return Uz(zz, Oz.errors, Oz.offInStrict);
      const oz = await async function(zz) {
        if (!zz) return null;
        try {
          const tz = await (0, Xz.p)(zz);
          return tz ? await tz.requestDevice() : null
        } catch (tz) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", tz), null
        }
      }(Fz);
      if (!oz) return null;
      let vz = !1;
      oz.lost.then((() => {
        vz = !0
      }));
      try {
        const tz = await Promise.all(Oz.validationModules.map((tz => async function(zz, tz, sz) {
          tz.pushErrorScope("validation");
          const Fz = tz.createShaderModule({
              code: sz.code
            }),
            Wz = tz.popErrorScope(),
            {
              messages: Xz
            } = await Fz.getCompilationInfo(),
            Oz = Xz.filter((zz => "error" === zz.type)).map((tz => zz.mapValidationMessage(sz, tz))),
            oz = await Wz;
          oz && 0 === Oz.length && Oz.push({
            file: null,
            line: 0,
            message: oz.message,
            variants: [sz.key]
          });
          return Oz
        }(zz, oz, tz))));
        return vz ? null : Uz(zz, zz.msz(tz.flat()), Oz.offInStrict)
      } catch (Kz) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Kz), null
      } finally {
        oz.destroy()
      }
    }
    async function vz(zz, tz) {
      var sz;
      if (!(0, Fz.shaderPackNeedsCheck)(zz, tz) || (0, Fz.isOtherApiVersion)(zz)) return zz;
      const Wz = await oz(tz, (0, Fz.storedShaderPackFiles)(zz));
      if (!Wz) return zz;
      const Xz = !1 === (null === (sz = zz.validation) || void 0 === sz ? void 0 : sz.ok) && !zz.validation.fromRecheck,
        Oz = {
          ...zz,
          validation: Xz ? Wz : {
            ...Wz,
            fromRecheck: !0
          }
        };
      return await (0, Fz.replaceShaderPack)(zz, Oz, tz) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Oz
    }

    function Uz(zz, tz, sz) {
      return {
        headerVersion: (0, Fz.pageShaderPackValidationVersion)(zz),
        ok: 0 === tz.length,
        errors: tz.slice(0, Oz),
        moreErrors: Math.max(0, tz.length - Oz),
        offInStrict: sz
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);