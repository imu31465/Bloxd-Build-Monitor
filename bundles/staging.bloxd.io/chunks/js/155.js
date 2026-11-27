export const id = 155;
export const ids = [155];
export const modules = {
  53774: (RR, JR, GR) => {
    GR.d(JR, {
      startHarnessShaderPack: () => KR
    });
    var yR = GR(7702),
      tR = GR(6084),
      uR = GR(7786),
      ZR = GR(7756),
      qR = GR(6080),
      iR = GR(40495),
      fR = GR(7773),
      VR = GR(7792);
    async function KR(RR, JR) {
      const {
        stored: GR,
        info: KR
      } = await async function(RR, JR) {
        const GR = await async function(RR) {
          const JR = await fetch(RR);
          if (!JR.ok) throw new Error(`Couldn't fetch the shader pack at ${RR}: HTTP ${JR.status}`);
          const GR = await JR.json();
          if (!(0, yR.j)(GR)) throw new Error(`The shader pack at ${RR} isn't a shader pack listing source`);
          return GR
        }(RR);
        if (!(0, qR.i)(GR.apiVersion)) throw new Error(`The pack is for shader pack API version ${GR.apiVersion}; this build runs version ${qR.c}`);
        const iR = {
            manifest: {
              apiVersion: GR.apiVersion,
              name: GR.name,
              author: GR.author,
              description: null,
              keepCircleShadows: !0 === GR.keepCircleShadows
            },
            files: GR.files,
            validation: null
          },
          KR = {
            url: RR,
            name: GR.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          wR = (0, tR.t)(GR.files);
        if ("string" === typeof wR) return KR.errors = [{
          file: null,
          line: 0,
          message: wR
        }], {
          stored: iR,
          info: KR
        };
        const rR = await (0, ZR.loadPageShaderPackCompiler)();
        if (!rR) throw new Error("The shader pack compiler couldn't load");
        const eR = await (0, VR.h)(rR, wR);
        if (!eR) throw new Error("No WebGPU device could validate the shader pack");
        if (KR.errors = [...eR.errors], eR.ok) {
          const RR = rR.UJR(wR, (0, fR.shaderPackTextures)());
          KR.features = (0, tR.r)(RR), KR.runsInMode = (0, uR.i)(RR.variants, JR)
        }
        return {
          stored: {
            ...iR,
            validation: eR
          },
          info: KR
        }
      }(RR, JR), [wR] = KR.errors;
      if (wR) {
        const RR = null === wR.file ? "" : `${wR.file}:${wR.line}: `,
          JR = KR.errors.length > 1 ? ` (${KR.errors.length-1} more)` : "";
        return {
          info: KR,
          problem: `The shader pack doesn't compile: ${RR}${wR.message}${JR}`
        }
      }
      return KR.runsInMode ? ((0, iR.setHarnessUrlShaderPack)(GR, JR), {
        info: KR,
        problem: null
      }) : {
        info: KR,
        problem: `The shader pack runs nothing in ${JR} mode`
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
  },
  7702: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => yR,
      C: () => wR,
      E: () => VR,
      I: () => AR,
      M: () => KR,
      N: () => fR,
      d: () => eR,
      e: () => LR,
      i: () => aR,
      j: () => rR,
      n: () => WR,
      p: () => XR,
      q: () => iR,
      s: () => tR,
      u: () => CR,
      v: () => uR,
      w: () => qR,
      z: () => ZR
    });
    const yR = ["forest", "desert", "water", "night", "cave"];
    const tR = {
        full: {
          width: 3840,
          height: 2160
        },
        large: {
          width: 1920,
          height: 1080
        },
        thumb: {
          width: 640,
          height: 360
        }
      },
      uR = ["popular", "updated", "newest"],
      ZR = 3,
      qR = 32,
      iR = 300;

    function fR(RR, JR) {
      return RR.slice(0, JR).replace(/[\uD800-\uDBFF]$/, "")
    }
    const VR = 64,
      KR = 512,
      wR = 18e5;

    function rR(RR) {
      const JR = RR,
        GR = null === JR || void 0 === JR ? void 0 : JR.files;
      return "number" === typeof(null === JR || void 0 === JR ? void 0 : JR.apiVersion) && "string" === typeof JR.name && (null === JR.author || "string" === typeof JR.author) && (void 0 === JR.keepCircleShadows || "boolean" === typeof JR.keepCircleShadows) && "object" === typeof GR && null !== GR && Object.values(GR).every((RR => "string" === typeof RR))
    }
    const eR = "Bloxdhub",
      aR = "https://bloxdhub.com/shaders";

    function LR(RR) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(RR)}`
    }
    const nR = "Screenshot generation failed.",
      UR = "Its screenshots couldn't be generated:";

    function WR(RR) {
      var JR;
      return RR === nR || null !== (JR = null === RR || void 0 === RR ? void 0 : RR.startsWith(UR)) && void 0 !== JR && JR
    }

    function AR(RR, JR) {
      return `shaderPacks/${RR}/${JR}.json`
    }

    function CR(RR, JR, GR, yR) {
      return null === JR.renderId ? XR(RR, JR.baselineVersion, GR, yR) : `${RR}/${function(RR,JR,GR,yR){return`shaderPacks/${RR}/${JR}/${GR}-${yR}.webp`}(JR.packId,JR.renderId,GR,yR)}`
    }

    function XR(RR, JR, GR, yR) {
      return `${RR}/${function(RR,JR,GR){return`shaderPacks/baseline/${RR}/${JR}-${GR}.webp`}(JR,GR,yR)}`
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);