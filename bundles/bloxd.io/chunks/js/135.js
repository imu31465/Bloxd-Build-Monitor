export const id = 135;
export const ids = [135];
export const modules = {
  40808: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      compilePagePack: () => aY,
      prefetchCompiler: () => OY,
      reconcileHint: () => gY
    });
    var FY = DY(6182),
      AY = DY(6221),
      IY = DY(6194),
      RY = DY(6212);

    function OY() {
      (0, FY.loadPageShaderPackCompiler)()
    }
    async function gY() {
      const YY = await (0, FY.loadPageShaderPackCompiler)();
      await (YY ? (0, AY.reconcileStoredShaderPackHint)(YY) : (0, AY.forgetShaderPackActiveHint)())
    }
    async function aY(YY) {
      const rY = await (0, FY.loadPageShaderPackCompiler)();
      if (!rY) return {
        status: "none"
      };
      const DY = await (0, RY.c)(YY, rY),
        OY = (0, AY.storedPackOutcome)(DY, rY);
      if ("none" === OY.kind) return {
        status: "none"
      };
      const gY = rY.I6((0, AY.storedShaderPackFiles)(DY), (0, IY.shaderPackTextures)());
      if ("blocked" === OY.kind) return {
        status: "blocked",
        messageKey: OY.messageKey,
        variants: 0 === gY.errors.length ? gY.variants : null
      };
      if (gY.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", gY.errors), {
        status: "none"
      };
      const {
        name: aY,
        keepCircleShadows: vY
      } = DY.manifest;
      return {
        status: "active",
        pack: {
          name: aY,
          variants: gY.variants,
          keepCircleShadows: !0 === vY
        }
      }
    }
  },
  6221: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      forgetShaderPackActiveHint: () => KY,
      isOtherApiVersion: () => eY,
      isShaderPackActive: () => VY,
      isShaderPackChangePending: () => TY,
      markShaderPackChangePending: () => lY,
      pageShaderPackValidationVersion: () => NY,
      reconcileStoredShaderPackHint: () => cY,
      removeShaderPack: () => mY,
      replaceShaderPack: () => oY,
      saveShaderPack: () => QY,
      shaderPackNeedsCheck: () => BY,
      storedPackOutcome: () => SY,
      storedShaderPackFiles: () => sY,
      toStoredShaderPack: () => uY
    });
    var FY = DY(6150),
      AY = DY(6168),
      IY = DY(40),
      RY = DY(3015),
      OY = DY(6230),
      gY = DY(6194);
    const aY = "shaderPackChangePending";
    let vY = null;

    function uY(YY, rY, DY) {
      return {
        manifest: YY.manifest,
        files: (0, FY.z)(YY.files),
        validation: rY,
        ...DY && {
          listing: DY
        }
      }
    }

    function sY(YY) {
      return Object.keys(YY.files).map((rY => ({
        path: rY,
        source: YY.files[rY]
      })))
    }
    let iY = Promise.resolve();

    function yY(YY) {
      const rY = iY.then(YY);
      return iY = rY.catch((() => {})), rY
    }

    function QY(YY, rY) {
      return yY((() => WY(YY, rY)))
    }

    function oY(YY, rY, DY) {
      return yY((async () => JSON.stringify(await (0, OY.e)()) === JSON.stringify(YY) && (null === rY ? (await EY(), !0) : WY(rY, DY))))
    }
    async function WY(YY, rY) {
      const DY = await IY.i.setItem(OY.c, YY);
      return DY && HY(YY, rY), DY
    }
    async function EY() {
      await IY.i.removeItem(OY.c), IY.m.removeItem(RY.b)
    }

    function mY() {
      return yY(EY)
    }

    function VY(YY, rY) {
      return "active" === SY(YY, rY).kind
    }

    function SY(YY, rY) {
      var DY;
      return null === YY ? {
        kind: "none",
        reason: "nothingStored"
      } : eY(YY) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (DY = YY.validation) || void 0 === DY ? void 0 : DY.ok) || YY.validation.fromRecheck ? null === rY ? {
        kind: "none",
        reason: "noCompiler"
      } : BY(YY, rY) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : YY.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function lY() {
      IY.q.setItem(aY, performance.timeOrigin)
    }

    function TY() {
      return IY.q.getItem(aY) === performance.timeOrigin
    }

    function eY(YY) {
      return !(0, AY.j)(YY.manifest.apiVersion)
    }

    function NY(YY) {
      return vY ??= YY.aT((0, gY.shaderPackTextures)()), vY
    }

    function BY(YY, rY) {
      var DY;
      return (null === (DY = YY.validation) || void 0 === DY ? void 0 : DY.headerVersion) !== NY(rY)
    }

    function cY(YY) {
      return yY((async () => {
        HY(await (0, OY.e)(!0), YY)
      }))
    }

    function KY() {
      return yY((async () => {
        IY.m.removeItem(RY.b)
      }))
    }

    function HY(YY, rY) {
      VY(YY, rY) ? IY.m.setItem(RY.b, !0) : IY.m.removeItem(RY.b)
    }
  },
  6212: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => gY,
      g: () => OY
    });
    var FY = DY(6221),
      AY = DY(6194),
      IY = DY(121);
    const RY = 100;
    async function OY(YY, rY) {
      var DY;
      let FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (DY = navigator.gpu) && void 0 !== DY ? DY : null;
      const RY = YY.I6(rY, (0, AY.shaderPackTextures)());
      if (RY.errors.length > 0) return aY(YY, RY.errors, RY.offInStrict);
      const OY = await async function(YY) {
        if (!YY) return null;
        try {
          const rY = await (0, IY.B)(YY);
          return rY ? await rY.requestDevice() : null
        } catch (rY) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", rY), null
        }
      }(FY);
      if (!OY) return null;
      let gY = !1;
      OY.lost.then((() => {
        gY = !0
      }));
      try {
        const rY = await Promise.all(RY.validationModules.map((rY => async function(YY, rY, DY) {
          rY.pushErrorScope("validation");
          const FY = rY.createShaderModule({
              code: DY.code
            }),
            AY = rY.popErrorScope(),
            {
              messages: IY
            } = await FY.getCompilationInfo(),
            RY = IY.filter((YY => "error" === YY.type)).map((rY => YY.mapValidationMessage(DY, rY))),
            OY = await AY;
          OY && 0 === RY.length && RY.push({
            file: null,
            line: 0,
            message: OY.message,
            variants: [DY.key]
          });
          return RY
        }(YY, OY, rY))));
        return gY ? null : aY(YY, YY.FDY(rY.flat()), RY.offInStrict)
      } catch (vY) {
        return console.error("Couldn't validate the shader pack on WebGPU.", vY), null
      } finally {
        OY.destroy()
      }
    }
    async function gY(YY, rY) {
      var DY;
      if (!(0, FY.shaderPackNeedsCheck)(YY, rY) || (0, FY.isOtherApiVersion)(YY)) return YY;
      const AY = await OY(rY, (0, FY.storedShaderPackFiles)(YY));
      if (!AY) return YY;
      const IY = !1 === (null === (DY = YY.validation) || void 0 === DY ? void 0 : DY.ok) && !YY.validation.fromRecheck,
        RY = {
          ...YY,
          validation: IY ? AY : {
            ...AY,
            fromRecheck: !0
          }
        };
      return await (0, FY.replaceShaderPack)(YY, RY, rY) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), RY
    }

    function aY(YY, rY, DY) {
      return {
        headerVersion: (0, FY.pageShaderPackValidationVersion)(YY),
        ok: 0 === rY.length,
        errors: rY.slice(0, RY),
        moreErrors: Math.max(0, rY.length - RY),
        offInStrict: DY
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);