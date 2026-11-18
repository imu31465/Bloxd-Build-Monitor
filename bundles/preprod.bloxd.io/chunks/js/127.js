export const id = 127;
export const ids = [127];
export const modules = {
  40225: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      compilePagePack: () => oy,
      prefetchCompiler: () => cb,
      reconcileHint: () => Py
    });
    var Uy = Wy(5867),
      hy = Wy(5915),
      fy = Wy(5893),
      Zy = Wy(5911);

    function cb() {
      (0, Uy.loadPageShaderPackCompiler)()
    }
    async function Py() {
      const yb = await (0, Uy.loadPageShaderPackCompiler)();
      await (yb ? (0, hy.reconcileStoredShaderPackHint)(yb) : (0, hy.forgetShaderPackActiveHint)())
    }
    async function oy(yb) {
      const bb = await (0, Uy.loadPageShaderPackCompiler)();
      if (!bb) return {
        status: "none"
      };
      const Wy = await (0, Zy.c)(yb, bb),
        cb = (0, hy.storedPackOutcome)(Wy, bb);
      if ("none" === cb.kind) return {
        status: "none"
      };
      const Py = bb.pZy((0, hy.storedShaderPackFiles)(Wy), (0, fy.shaderPackTextures)());
      if ("blocked" === cb.kind) return {
        status: "blocked",
        messageKey: cb.messageKey,
        variants: 0 === Py.errors.length ? Py.variants : null
      };
      if (Py.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", Py.errors), {
        status: "none"
      };
      const {
        name: oy,
        keepCircleShadows: By
      } = Wy.manifest;
      return {
        status: "active",
        pack: {
          name: oy,
          variants: Py.variants,
          keepCircleShadows: !0 === By
        }
      }
    }
  },
  5915: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      forgetShaderPackActiveHint: () => ib,
      isOtherApiVersion: () => Gy,
      isShaderPackActive: () => Ty,
      isShaderPackChangePending: () => gb,
      markShaderPackChangePending: () => Jy,
      pageShaderPackValidationVersion: () => Oy,
      reconcileStoredShaderPackHint: () => vb,
      removeShaderPack: () => Cy,
      replaceShaderPack: () => Ey,
      saveShaderPack: () => Sy,
      shaderPackNeedsCheck: () => Ry,
      storedPackOutcome: () => Vy,
      storedShaderPackFiles: () => ey,
      toStoredShaderPack: () => Ky
    });
    var Uy = Wy(5835),
      hy = Wy(5852),
      fy = Wy(33),
      Zy = Wy(2754),
      cb = Wy(5923),
      Py = Wy(5893);
    const oy = "shaderPackChangePending";
    let By = null;

    function Ky(yb, bb, Wy) {
      return {
        manifest: yb.manifest,
        files: (0, Uy.u)(yb.files),
        validation: bb,
        ...Wy && {
          listing: Wy
        }
      }
    }

    function ey(yb) {
      return Object.keys(yb.files).map((bb => ({
        path: bb,
        source: yb.files[bb]
      })))
    }
    let qb = Promise.resolve();

    function sy(yb) {
      const bb = qb.then(yb);
      return qb = bb.catch((() => {})), bb
    }

    function Sy(yb, bb) {
      return sy((() => ly(yb, bb)))
    }

    function Ey(yb, bb, Wy) {
      return sy((async () => JSON.stringify(await (0, cb.g)()) === JSON.stringify(yb) && (null === bb ? (await mb(), !0) : ly(bb, Wy))))
    }
    async function ly(yb, bb) {
      const Wy = await fy.d.setItem(cb.d, yb);
      return Wy && My(yb, bb), Wy
    }
    async function mb() {
      await fy.d.removeItem(cb.d), fy.e.removeItem(Zy.c)
    }

    function Cy() {
      return sy(mb)
    }

    function Ty(yb, bb) {
      return "active" === Vy(yb, bb).kind
    }

    function Vy(yb, bb) {
      var Wy;
      return null === yb ? {
        kind: "none",
        reason: "nothingStored"
      } : Gy(yb) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Wy = yb.validation) || void 0 === Wy ? void 0 : Wy.ok) || yb.validation.fromRecheck ? null === bb ? {
        kind: "none",
        reason: "noCompiler"
      } : Ry(yb, bb) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : yb.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function Jy() {
      fy.g.setItem(oy, performance.timeOrigin)
    }

    function gb() {
      return fy.g.getItem(oy) === performance.timeOrigin
    }

    function Gy(yb) {
      return !(0, hy.e)(yb.manifest.apiVersion)
    }

    function Oy(yb) {
      return By ??= yb.jWy((0, Py.shaderPackTextures)()), By
    }

    function Ry(yb, bb) {
      var Wy;
      return (null === (Wy = yb.validation) || void 0 === Wy ? void 0 : Wy.headerVersion) !== Oy(bb)
    }

    function vb(yb) {
      return sy((async () => {
        My(await (0, cb.g)(!0), yb)
      }))
    }

    function ib() {
      return sy((async () => {
        fy.e.removeItem(Zy.c)
      }))
    }

    function My(yb, bb) {
      Ty(yb, bb) ? fy.e.setItem(Zy.c, !0) : fy.e.removeItem(Zy.c)
    }
  },
  5911: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Py,
      e: () => cb
    });
    var Uy = Wy(5915),
      hy = Wy(5893),
      fy = Wy(107);
    const Zy = 100;
    async function cb(yb, bb) {
      var Wy;
      let Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Wy = navigator.gpu) && void 0 !== Wy ? Wy : null;
      const Zy = yb.pZy(bb, (0, hy.shaderPackTextures)());
      if (Zy.errors.length > 0) return oy(yb, Zy.errors, Zy.offInStrict);
      const cb = await async function(yb) {
        if (!yb) return null;
        try {
          const bb = await (0, fy.r)(yb);
          return bb ? await bb.requestDevice() : null
        } catch (bb) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", bb), null
        }
      }(Uy);
      if (!cb) return null;
      let Py = !1;
      cb.lost.then((() => {
        Py = !0
      }));
      try {
        const bb = await Promise.all(Zy.validationModules.map((bb => async function(yb, bb, Wy) {
          bb.pushErrorScope("validation");
          const Uy = bb.createShaderModule({
              code: Wy.code
            }),
            hy = bb.popErrorScope(),
            {
              messages: fy
            } = await Uy.getCompilationInfo(),
            Zy = fy.filter((yb => "error" === yb.type)).map((bb => yb.mapValidationMessage(Wy, bb))),
            cb = await hy;
          cb && 0 === Zy.length && Zy.push({
            file: null,
            line: 0,
            message: cb.message,
            variants: [Wy.key]
          });
          return Zy
        }(yb, cb, bb))));
        return Py ? null : oy(yb, yb.aBy(bb.flat()), Zy.offInStrict)
      } catch (By) {
        return console.error("Couldn't validate the shader pack on WebGPU.", By), null
      } finally {
        cb.destroy()
      }
    }
    async function Py(yb, bb) {
      var Wy;
      if (!(0, Uy.shaderPackNeedsCheck)(yb, bb) || (0, Uy.isOtherApiVersion)(yb)) return yb;
      const hy = await cb(bb, (0, Uy.storedShaderPackFiles)(yb));
      if (!hy) return yb;
      const fy = !1 === (null === (Wy = yb.validation) || void 0 === Wy ? void 0 : Wy.ok) && !yb.validation.fromRecheck,
        Zy = {
          ...yb,
          validation: fy ? hy : {
            ...hy,
            fromRecheck: !0
          }
        };
      return await (0, Uy.replaceShaderPack)(yb, Zy, bb) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Zy
    }

    function oy(yb, bb, Wy) {
      return {
        headerVersion: (0, Uy.pageShaderPackValidationVersion)(yb),
        ok: 0 === bb.length,
        errors: bb.slice(0, Zy),
        moreErrors: Math.max(0, bb.length - Zy),
        offInStrict: Wy
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);