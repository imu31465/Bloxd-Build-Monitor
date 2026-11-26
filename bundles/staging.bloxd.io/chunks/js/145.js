export const id = 145;
export const ids = [145, 151, 152];
export const modules = {
  41773: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => ZV,
      installListedShaderPack: () => wV
    });
    var JV = xV(7132),
      YV = xV(5561),
      UV = xV(1230),
      yV = xV(7176),
      pV = xV(5556),
      QV = xV(7212),
      nV = xV(7208);
    async function wV(VV) {
      const eV = await (0, yV.loadPageShaderPackCompiler)();
      if (null === eV) return {
        kind: "failed",
        reason: "compiler"
      };
      const xV = await ZV(VV, eV);
      return "failed" === xV.kind ? xV : await (0, QV.saveShaderPack)(xV.stored, eV) ? ((0, QV.markShaderPackChangePending)(), xV) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function ZV(VV, eV) {
      const xV = await async function(VV) {
        let {
          packId: eV,
          sourceHash: xV
        } = VV;
        try {
          const VV = await fetch(`${UV.clientSideServerUrls.s3Url}/${(0,JV.S)(eV,xV)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!VV.ok) return console.error(`Failed to download shader pack ${eV} (${VV.status})`), null;
          const YV = await VV.json();
          return "object" !== typeof YV || null === YV ? (console.error(`Shader pack ${eV}'s source isn't an object`), null) : YV
        } catch (YV) {
          return console.error(`Failed to download shader pack ${eV}`, YV), null
        }
      }(VV);
      if (null === xV) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, pV.j)(xV.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const yV = (0, YV.s)(xV.files);
      if ("string" === typeof yV) return console.error(`A listed shader pack breaks the pack rules: ${yV}`), {
        kind: "failed",
        reason: "invalid"
      };
      const wV = await (0, nV.d)(eV, yV);
      if (!1 === (null === wV || void 0 === wV ? void 0 : wV.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const ZV = {
        manifest: {
          apiVersion: xV.apiVersion,
          name: VV.name,
          author: VV.ownerName,
          description: VV.description || null,
          keepCircleShadows: !0 === xV.keepCircleShadows
        },
        files: yV
      };
      return {
        kind: "loaded",
        stored: (0, QV.toStoredShaderPack)(ZV, wV, {
          packId: VV.packId,
          sourceHash: VV.sourceHash
        })
      }
    }
  },
  44212: (VV, eV, xV) => {
    xV.d(eV, {
      followListingUpdates: () => vV
    });
    var JV = xV(220),
      YV = xV(27),
      UV = xV(1603),
      yV = xV(1173),
      pV = xV(7176),
      QV = xV(5556),
      nV = xV(41773),
      wV = xV(7212);
    const ZV = ["apiVersion", "invalid", "errors"];
    async function vV(VV, eV) {
      const xV = await yV.userContextManager.getCurrentUserContext(),
        vV = await UV.b.getShaderPackVersions(xV, [eV.packId]),
        rV = function(VV, eV, xV) {
          var JV;
          if (void 0 === xV || "unlisted" === xV.status) return {
            kind: "none"
          };
          if ("banned" === xV.status) return {
            kind: "remove"
          };
          if (!(0, QV.j)(xV.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: YV,
            name: UV,
            ownerName: yV,
            description: pV
          } = xV;
          return YV !== eV.sourceHash && YV !== eV.rejectedSourceHash ? {
            kind: "update",
            sourceHash: YV,
            name: UV,
            ownerName: yV,
            description: pV
          } : UV !== VV.manifest.name || yV !== VV.manifest.author || (pV || null) !== (null !== (JV = VV.manifest.description) && void 0 !== JV ? JV : null) ? {
            kind: "rename",
            name: UV,
            ownerName: yV,
            description: pV
          } : {
            kind: "none"
          }
        }(VV, eV, (0, JV.b)(vV, eV.packId));
      if ("update" === rV.kind && "landingPage" !== YV.b.get("gameState")) return !1;
      const kV = "update" === rV.kind || "rename" === rV.kind,
        bV = kV ? await (0, pV.loadPageShaderPackCompiler)() : null;
      if (kV && null === bV) return console.warn(`Didn't follow shader pack ${eV.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const EV = await async function(VV, eV, xV, JV) {
        switch (xV.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...VV, manifest: {
                ...VV.manifest,
                name: xV.name,
                author: xV.ownerName,
                description: xV.description || null
              }
            };
          case "update": {
            if (null === JV) return;
            const {
              sourceHash: YV,
              name: UV,
              ownerName: yV,
              description: pV
            } = xV, QV = await (0, nV.c)({
              packId: eV.packId,
              sourceHash: YV,
              name: UV,
              ownerName: yV,
              description: pV
            }, JV);
            if ("loaded" === QV.kind && null !== QV.stored.validation) return QV.stored;
            const wV = "failed" === QV.kind ? QV.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${eV.packId}: ${wV}`), "failed" === QV.kind && ZV.includes(QV.reason) ? {
              ...VV,
              listing: {
                ...eV,
                rejectedSourceHash: YV
              }
            } : void 0
          }
        }
      }(VV, eV, rV, bV);
      return void 0 === EV || (await (0, wV.replaceShaderPack)(VV, EV, bV) ? (null !== EV && EV.files === VV.files || (0, wV.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  7212: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      forgetShaderPackActiveHint: () => zV,
      isOtherApiVersion: () => AV,
      isShaderPackActive: () => tV,
      isShaderPackChangePending: () => PV,
      markShaderPackChangePending: () => TV,
      pageShaderPackValidationVersion: () => NV,
      reconcileStoredShaderPackHint: () => MV,
      removeShaderPack: () => qV,
      replaceShaderPack: () => EV,
      saveShaderPack: () => bV,
      shaderPackNeedsCheck: () => XV,
      storedPackOutcome: () => FV,
      storedShaderPackFiles: () => vV,
      toStoredShaderPack: () => ZV
    });
    var JV = xV(5561),
      YV = xV(5556),
      UV = xV(40),
      yV = xV(3907),
      pV = xV(7216),
      QV = xV(7191);
    const nV = "shaderPackChangePending";
    let wV = null;

    function ZV(VV, eV, xV) {
      return {
        manifest: VV.manifest,
        files: (0, JV.t)(VV.files),
        validation: eV,
        ...xV && {
          listing: xV
        }
      }
    }

    function vV(VV) {
      return Object.keys(VV.files).map((eV => ({
        path: eV,
        source: VV.files[eV]
      })))
    }
    let rV = Promise.resolve();

    function kV(VV) {
      const eV = rV.then(VV);
      return rV = eV.catch((() => {})), eV
    }

    function bV(VV, eV) {
      return kV((() => BV(VV, eV)))
    }

    function EV(VV, eV, xV) {
      return kV((async () => JSON.stringify(await (0, pV.f)()) === JSON.stringify(VV) && (null === eV ? (await jV(), !0) : BV(eV, xV))))
    }
    async function BV(VV, eV) {
      const xV = await UV.i.setItem(pV.d, VV);
      return xV && GV(VV, eV), xV
    }
    async function jV() {
      await UV.i.removeItem(pV.d), UV.m.removeItem(yV.d)
    }

    function qV() {
      return kV(jV)
    }

    function tV(VV, eV) {
      return "active" === FV(VV, eV).kind
    }

    function FV(VV, eV) {
      var xV;
      return null === VV ? {
        kind: "none",
        reason: "nothingStored"
      } : AV(VV) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (xV = VV.validation) || void 0 === xV ? void 0 : xV.ok) || VV.validation.fromRecheck ? null === eV ? {
        kind: "none",
        reason: "noCompiler"
      } : XV(VV, eV) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : VV.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function TV() {
      UV.q.setItem(nV, performance.timeOrigin)
    }

    function PV() {
      return UV.q.getItem(nV) === performance.timeOrigin
    }

    function AV(VV) {
      return !(0, YV.j)(VV.manifest.apiVersion)
    }

    function NV(VV) {
      return wV ??= VV.lD((0, QV.shaderPackTextures)()), wV
    }

    function XV(VV, eV) {
      var xV;
      return (null === (xV = VV.validation) || void 0 === xV ? void 0 : xV.headerVersion) !== NV(eV)
    }

    function MV(VV) {
      return kV((async () => {
        GV(await (0, pV.f)(!0), VV)
      }))
    }

    function zV() {
      return kV((async () => {
        UV.m.removeItem(yV.d)
      }))
    }

    function GV(VV, eV) {
      tV(VV, eV) ? UV.m.setItem(yV.d, !0) : UV.m.removeItem(yV.d)
    }
  },
  7191: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      loadShaderPackTextures: () => yV,
      shaderPackTextures: () => pV
    });
    var JV = xV(5561);
    let YV = null,
      UV = null;

    function yV() {
      return UV ??= Promise.all([xV.e(84), xV.e(204)]).then((() => xV(41764))).then((VV => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: eV,
          textureNameToIndex: xV,
          textureAnimationData: UV
        } = VV;
        return YV ??= (0, JV.j)(xV, UV, eV), YV
      })), UV
    }

    function pV() {
      if (null === YV) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return YV
    }
  },
  7208: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => QV,
      d: () => pV
    });
    var JV = xV(7212),
      YV = xV(7191),
      UV = xV(124);
    const yV = 100;
    async function pV(VV, eV) {
      var xV;
      let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (xV = navigator.gpu) && void 0 !== xV ? xV : null;
      const yV = VV.GeV(eV, (0, YV.shaderPackTextures)());
      if (yV.errors.length > 0) return nV(VV, yV.errors, yV.offInStrict);
      const pV = await async function(VV) {
        if (!VV) return null;
        try {
          const eV = await (0, UV.w)(VV);
          return eV ? await eV.requestDevice() : null
        } catch (eV) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", eV), null
        }
      }(JV);
      if (!pV) return null;
      let QV = !1;
      pV.lost.then((() => {
        QV = !0
      }));
      try {
        const eV = await Promise.all(yV.validationModules.map((eV => async function(VV, eV, xV) {
          eV.pushErrorScope("validation");
          const JV = eV.createShaderModule({
              code: xV.code
            }),
            YV = eV.popErrorScope(),
            {
              messages: UV
            } = await JV.getCompilationInfo(),
            yV = UV.filter((VV => "error" === VV.type)).map((eV => VV.mapValidationMessage(xV, eV))),
            pV = await YV;
          pV && 0 === yV.length && yV.push({
            file: null,
            line: 0,
            message: pV.message,
            variants: [xV.key]
          });
          return yV
        }(VV, pV, eV))));
        return QV ? null : nV(VV, VV.BYV(eV.flat()), yV.offInStrict)
      } catch (wV) {
        return console.error("Couldn't validate the shader pack on WebGPU.", wV), null
      } finally {
        pV.destroy()
      }
    }
    async function QV(VV, eV) {
      var xV;
      if (!(0, JV.shaderPackNeedsCheck)(VV, eV) || (0, JV.isOtherApiVersion)(VV)) return VV;
      const YV = await pV(eV, (0, JV.storedShaderPackFiles)(VV));
      if (!YV) return VV;
      const UV = !1 === (null === (xV = VV.validation) || void 0 === xV ? void 0 : xV.ok) && !VV.validation.fromRecheck,
        yV = {
          ...VV,
          validation: UV ? YV : {
            ...YV,
            fromRecheck: !0
          }
        };
      return await (0, JV.replaceShaderPack)(VV, yV, eV) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), yV
    }

    function nV(VV, eV, xV) {
      return {
        headerVersion: (0, JV.pageShaderPackValidationVersion)(VV),
        ok: 0 === eV.length,
        errors: eV.slice(0, yV),
        moreErrors: Math.max(0, eV.length - yV),
        offInStrict: xV
      }
    }
  },
  7132: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => UV,
      D: () => pV,
      H: () => yV,
      L: () => JV,
      O: () => vV,
      P: () => wV,
      S: () => tV,
      V: () => ZV,
      X: () => nV,
      d: () => kV,
      g: () => EV,
      h: () => bV,
      k: () => rV,
      n: () => qV,
      q: () => TV,
      s: () => QV,
      w: () => YV,
      x: () => FV
    });
    const JV = ["forest", "desert", "water", "night", "cave"];
    const YV = {
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
      UV = ["popular", "updated", "newest"],
      yV = 3,
      pV = 32,
      QV = 300;

    function nV(VV, eV) {
      return VV.slice(0, eV).replace(/[\uD800-\uDBFF]$/, "")
    }
    const wV = 64,
      ZV = 512,
      vV = 18e5;

    function rV(VV) {
      const eV = VV,
        xV = null === eV || void 0 === eV ? void 0 : eV.files;
      return "number" === typeof(null === eV || void 0 === eV ? void 0 : eV.apiVersion) && "string" === typeof eV.name && (null === eV.author || "string" === typeof eV.author) && (void 0 === eV.keepCircleShadows || "boolean" === typeof eV.keepCircleShadows) && "object" === typeof xV && null !== xV && Object.values(xV).every((VV => "string" === typeof VV))
    }
    const kV = "Bloxdhub",
      bV = "https://bloxdhub.com/shaders";

    function EV(VV) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(VV)}`
    }
    const BV = "Screenshot generation failed.",
      jV = "Its screenshots couldn't be generated:";

    function qV(VV) {
      var eV;
      return VV === BV || null !== (eV = null === VV || void 0 === VV ? void 0 : VV.startsWith(jV)) && void 0 !== eV && eV
    }

    function tV(VV, eV) {
      return `shaderPacks/${VV}/${eV}.json`
    }

    function FV(VV, eV, xV, JV) {
      return null === eV.renderId ? TV(VV, eV.baselineVersion, xV, JV) : `${VV}/${function(VV,eV,xV,JV){return`shaderPacks/${VV}/${eV}/${xV}-${JV}.webp`}(eV.packId,eV.renderId,xV,JV)}`
    }

    function TV(VV, eV, xV, JV) {
      return `${VV}/${function(VV,eV,xV){return`shaderPacks/baseline/${VV}/${eV}-${xV}.webp`}(eV,xV,JV)}`
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);