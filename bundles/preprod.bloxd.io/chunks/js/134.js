export const id = 134;
export const ids = [134];
export const modules = {
  40955: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      compilePagePack: () => Hz,
      prefetchCompiler: () => Mz,
      reconcileHint: () => tz
    });
    var Ez = bz(6340),
      nz = bz(6379),
      iz = bz(6352),
      lz = bz(6371);

    function Mz() {
      (0, Ez.loadPageShaderPackCompiler)()
    }
    async function tz() {
      const zz = await (0, Ez.loadPageShaderPackCompiler)();
      await (zz ? (0, nz.reconcileStoredShaderPackHint)(zz) : (0, nz.forgetShaderPackActiveHint)())
    }
    async function Hz(zz) {
      const uz = await (0, Ez.loadPageShaderPackCompiler)();
      if (!uz) return {
        status: "none"
      };
      const bz = await (0, lz.c)(zz, uz),
        Mz = (0, nz.storedPackOutcome)(bz, uz);
      if ("none" === Mz.kind) return {
        status: "none"
      };
      const tz = uz.B_((0, nz.storedShaderPackFiles)(bz), (0, iz.shaderPackTextures)());
      if ("blocked" === Mz.kind) return {
        status: "blocked",
        messageKey: Mz.messageKey,
        variants: 0 === tz.errors.length ? tz.variants : null
      };
      if (tz.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", tz.errors), {
        status: "none"
      };
      const {
        name: Hz,
        keepCircleShadows: Oz
      } = bz.manifest;
      return {
        status: "active",
        pack: {
          name: Hz,
          variants: tz.variants,
          keepCircleShadows: !0 === Oz
        }
      }
    }
  },
  6379: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      forgetShaderPackActiveHint: () => Tz,
      isOtherApiVersion: () => vz,
      isShaderPackActive: () => sz,
      isShaderPackChangePending: () => Nz,
      markShaderPackChangePending: () => oz,
      pageShaderPackValidationVersion: () => xz,
      reconcileStoredShaderPackHint: () => Az,
      removeShaderPack: () => fz,
      replaceShaderPack: () => Kz,
      saveShaderPack: () => Rz,
      shaderPackNeedsCheck: () => Jz,
      storedPackOutcome: () => rz,
      storedShaderPackFiles: () => dz,
      toStoredShaderPack: () => pz
    });
    var Ez = bz(6307),
      nz = bz(6331),
      iz = bz(33),
      lz = bz(3198),
      Mz = bz(6382),
      tz = bz(6352);
    const Hz = "shaderPackChangePending";
    let Oz = null;

    function pz(zz, uz, bz) {
      return {
        manifest: zz.manifest,
        files: (0, Ez.s)(zz.files),
        validation: uz,
        ...bz && {
          listing: bz
        }
      }
    }

    function dz(zz) {
      return Object.keys(zz.files).map((uz => ({
        path: uz,
        source: zz.files[uz]
      })))
    }
    let Fz = Promise.resolve();

    function Zz(zz) {
      const uz = Fz.then(zz);
      return Fz = uz.catch((() => {})), uz
    }

    function Rz(zz, uz) {
      return Zz((() => wz(zz, uz)))
    }

    function Kz(zz, uz, bz) {
      return Zz((async () => JSON.stringify(await (0, Mz.e)()) === JSON.stringify(zz) && (null === uz ? (await Xz(), !0) : wz(uz, bz))))
    }
    async function wz(zz, uz) {
      const bz = await iz.d.setItem(Mz.d, zz);
      return bz && Lz(zz, uz), bz
    }
    async function Xz() {
      await iz.d.removeItem(Mz.d), iz.g.removeItem(lz.b)
    }

    function fz() {
      return Zz(Xz)
    }

    function sz(zz, uz) {
      return "active" === rz(zz, uz).kind
    }

    function rz(zz, uz) {
      var bz;
      return null === zz ? {
        kind: "none",
        reason: "nothingStored"
      } : vz(zz) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (bz = zz.validation) || void 0 === bz ? void 0 : bz.ok) || zz.validation.fromRecheck ? null === uz ? {
        kind: "none",
        reason: "noCompiler"
      } : Jz(zz, uz) ? {
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

    function oz() {
      iz.h.setItem(Hz, performance.timeOrigin)
    }

    function Nz() {
      return iz.h.getItem(Hz) === performance.timeOrigin
    }

    function vz(zz) {
      return !(0, nz.g)(zz.manifest.apiVersion)
    }

    function xz(zz) {
      return Oz ??= zz.hA((0, tz.shaderPackTextures)()), Oz
    }

    function Jz(zz, uz) {
      var bz;
      return (null === (bz = zz.validation) || void 0 === bz ? void 0 : bz.headerVersion) !== xz(uz)
    }

    function Az(zz) {
      return Zz((async () => {
        Lz(await (0, Mz.e)(!0), zz)
      }))
    }

    function Tz() {
      return Zz((async () => {
        iz.g.removeItem(lz.b)
      }))
    }

    function Lz(zz, uz) {
      sz(zz, uz) ? iz.g.setItem(lz.b, !0) : iz.g.removeItem(lz.b)
    }
  },
  6371: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => tz,
      g: () => Mz
    });
    var Ez = bz(6379),
      nz = bz(6352),
      iz = bz(115);
    const lz = 100;
    async function Mz(zz, uz) {
      var bz;
      let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (bz = navigator.gpu) && void 0 !== bz ? bz : null;
      const lz = zz.B_(uz, (0, nz.shaderPackTextures)());
      if (lz.errors.length > 0) return Hz(zz, lz.errors, lz.offInStrict);
      const Mz = await async function(zz) {
        if (!zz) return null;
        try {
          const uz = await (0, iz.w)(zz);
          return uz ? await uz.requestDevice() : null
        } catch (uz) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", uz), null
        }
      }(Ez);
      if (!Mz) return null;
      let tz = !1;
      Mz.lost.then((() => {
        tz = !0
      }));
      try {
        const uz = await Promise.all(lz.validationModules.map((uz => async function(zz, uz, bz) {
          uz.pushErrorScope("validation");
          const Ez = uz.createShaderModule({
              code: bz.code
            }),
            nz = uz.popErrorScope(),
            {
              messages: iz
            } = await Ez.getCompilationInfo(),
            lz = iz.filter((zz => "error" === zz.type)).map((uz => zz.mapValidationMessage(bz, uz))),
            Mz = await nz;
          Mz && 0 === lz.length && lz.push({
            file: null,
            line: 0,
            message: Mz.message,
            variants: [bz.key]
          });
          return lz
        }(zz, Mz, uz))));
        return tz ? null : Hz(zz, zz.tbz(uz.flat()), lz.offInStrict)
      } catch (Oz) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Oz), null
      } finally {
        Mz.destroy()
      }
    }
    async function tz(zz, uz) {
      var bz;
      if (!(0, Ez.shaderPackNeedsCheck)(zz, uz) || (0, Ez.isOtherApiVersion)(zz)) return zz;
      const nz = await Mz(uz, (0, Ez.storedShaderPackFiles)(zz));
      if (!nz) return zz;
      const iz = !1 === (null === (bz = zz.validation) || void 0 === bz ? void 0 : bz.ok) && !zz.validation.fromRecheck,
        lz = {
          ...zz,
          validation: iz ? nz : {
            ...nz,
            fromRecheck: !0
          }
        };
      return await (0, Ez.replaceShaderPack)(zz, lz, uz) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), lz
    }

    function Hz(zz, uz, bz) {
      return {
        headerVersion: (0, Ez.pageShaderPackValidationVersion)(zz),
        ok: 0 === uz.length,
        errors: uz.slice(0, lz),
        moreErrors: Math.max(0, uz.length - lz),
        offInStrict: bz
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);