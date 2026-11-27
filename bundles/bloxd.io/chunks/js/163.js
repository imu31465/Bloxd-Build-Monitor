export const id = 163;
export const ids = [163];
export const modules = {
  53760: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      compilePagePack: () => fR,
      prefetchCompiler: () => qR,
      reconcileHint: () => iR
    });
    var yR = GR(7756),
      tR = GR(7800),
      uR = GR(7773),
      ZR = GR(7792);

    function qR() {
      (0, yR.loadPageShaderPackCompiler)()
    }
    async function iR() {
      const RR = await (0, yR.loadPageShaderPackCompiler)();
      await (RR ? (0, tR.reconcileStoredShaderPackHint)(RR) : (0, tR.forgetShaderPackActiveHint)())
    }
    async function fR(RR) {
      const JR = await (0, yR.loadPageShaderPackCompiler)();
      if (!JR) return {
        status: "none"
      };
      const GR = await (0, ZR.d)(RR, JR),
        qR = (0, tR.storedPackOutcome)(GR, JR);
      if ("none" === qR.kind) return {
        status: "none"
      };
      const iR = JR.UJR((0, tR.storedShaderPackFiles)(GR), (0, uR.shaderPackTextures)());
      if ("blocked" === qR.kind) return {
        status: "blocked",
        messageKey: qR.messageKey,
        variants: 0 === iR.errors.length ? iR.variants : null
      };
      if (iR.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", iR.errors), {
        status: "none"
      };
      const {
        name: fR,
        keepCircleShadows: VR
      } = GR.manifest;
      return {
        status: "active",
        pack: {
          name: fR,
          variants: iR.variants,
          keepCircleShadows: !0 === VR
        }
      }
    }
  },
  7800: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      forgetShaderPackActiveHint: () => bR,
      isOtherApiVersion: () => BR,
      isShaderPackActive: () => AR,
      isShaderPackChangePending: () => MR,
      markShaderPackChangePending: () => XR,
      pageShaderPackValidationVersion: () => lR,
      reconcileStoredShaderPackHint: () => gR,
      removeShaderPack: () => WR,
      replaceShaderPack: () => LR,
      saveShaderPack: () => aR,
      shaderPackNeedsCheck: () => pR,
      storedPackOutcome: () => CR,
      storedShaderPackFiles: () => wR,
      toStoredShaderPack: () => KR
    });
    var yR = GR(6084),
      tR = GR(6080),
      uR = GR(46),
      ZR = GR(4776),
      qR = GR(7802),
      iR = GR(7773);
    const fR = "shaderPackChangePending";
    let VR = null;

    function KR(RR, JR, GR) {
      return {
        manifest: RR.manifest,
        files: (0, yR.x)(RR.files),
        validation: JR,
        ...GR && {
          listing: GR
        }
      }
    }

    function wR(RR) {
      return Object.keys(RR.files).map((JR => ({
        path: JR,
        source: RR.files[JR]
      })))
    }
    let rR = Promise.resolve();

    function eR(RR) {
      const JR = rR.then(RR);
      return rR = JR.catch((() => {})), JR
    }

    function aR(RR, JR) {
      return eR((() => nR(RR, JR)))
    }

    function LR(RR, JR, GR) {
      return eR((async () => JSON.stringify(await (0, qR.d)()) === JSON.stringify(RR) && (null === JR ? (await UR(), !0) : nR(JR, GR))))
    }
    async function nR(RR, JR) {
      const GR = await uR.g.setItem(qR.c, RR);
      return GR && vR(RR, JR), GR
    }
    async function UR() {
      await uR.g.removeItem(qR.c), uR.i.removeItem(ZR.e)
    }

    function WR() {
      return eR(UR)
    }

    function AR(RR, JR) {
      return "active" === CR(RR, JR).kind
    }

    function CR(RR, JR) {
      var GR;
      return null === RR ? {
        kind: "none",
        reason: "nothingStored"
      } : BR(RR) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (GR = RR.validation) || void 0 === GR ? void 0 : GR.ok) || RR.validation.fromRecheck ? null === JR ? {
        kind: "none",
        reason: "noCompiler"
      } : pR(RR, JR) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : RR.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function XR() {
      uR.k.setItem(fR, performance.timeOrigin)
    }

    function MR() {
      return uR.k.getItem(fR) === performance.timeOrigin
    }

    function BR(RR) {
      return !(0, tR.i)(RR.manifest.apiVersion)
    }

    function lR(RR) {
      return VR ??= RR.iH((0, iR.shaderPackTextures)()), VR
    }

    function pR(RR, JR) {
      var GR;
      return (null === (GR = RR.validation) || void 0 === GR ? void 0 : GR.headerVersion) !== lR(JR)
    }

    function gR(RR) {
      return eR((async () => {
        vR(await (0, qR.d)(!0), RR)
      }))
    }

    function bR() {
      return eR((async () => {
        uR.i.removeItem(ZR.e)
      }))
    }

    function vR(RR, JR) {
      AR(RR, JR) ? uR.i.setItem(ZR.e, !0) : uR.i.removeItem(ZR.e)
    }
  },
  7792: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => iR,
      h: () => qR
    });
    var yR = GR(7800),
      tR = GR(7773),
      uR = GR(123);
    const ZR = 100;
    async function qR(RR, JR) {
      var GR;
      let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (GR = navigator.gpu) && void 0 !== GR ? GR : null;
      const ZR = RR.UJR(JR, (0, tR.shaderPackTextures)());
      if (ZR.errors.length > 0) return fR(RR, ZR.errors, ZR.offInStrict);
      const qR = await async function(RR) {
        if (!RR) return null;
        try {
          const JR = await (0, uR.y)(RR);
          return JR ? await JR.requestDevice() : null
        } catch (JR) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", JR), null
        }
      }(yR);
      if (!qR) return null;
      let iR = !1;
      qR.lost.then((() => {
        iR = !0
      }));
      try {
        const JR = await Promise.all(ZR.validationModules.map((JR => async function(RR, JR, GR) {
          JR.pushErrorScope("validation");
          const yR = JR.createShaderModule({
              code: GR.code
            }),
            tR = JR.popErrorScope(),
            {
              messages: uR
            } = await yR.getCompilationInfo(),
            ZR = uR.filter((RR => "error" === RR.type)).map((JR => RR.mapValidationMessage(GR, JR))),
            qR = await tR;
          qR && 0 === ZR.length && ZR.push({
            file: null,
            line: 0,
            message: qR.message,
            variants: [GR.key]
          });
          return ZR
        }(RR, qR, JR))));
        return iR ? null : fR(RR, RR.ZtR(JR.flat()), ZR.offInStrict)
      } catch (VR) {
        return console.error("Couldn't validate the shader pack on WebGPU.", VR), null
      } finally {
        qR.destroy()
      }
    }
    async function iR(RR, JR) {
      var GR;
      if (!(0, yR.shaderPackNeedsCheck)(RR, JR) || (0, yR.isOtherApiVersion)(RR)) return RR;
      const tR = await qR(JR, (0, yR.storedShaderPackFiles)(RR));
      if (!tR) return RR;
      const uR = !1 === (null === (GR = RR.validation) || void 0 === GR ? void 0 : GR.ok) && !RR.validation.fromRecheck,
        ZR = {
          ...RR,
          validation: uR ? tR : {
            ...tR,
            fromRecheck: !0
          }
        };
      return await (0, yR.replaceShaderPack)(RR, ZR, JR) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), ZR
    }

    function fR(RR, JR, GR) {
      return {
        headerVersion: (0, yR.pageShaderPackValidationVersion)(RR),
        ok: 0 === JR.length,
        errors: JR.slice(0, ZR),
        moreErrors: Math.max(0, JR.length - ZR),
        offInStrict: GR
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);