export const id = 145;
export const ids = [145, 151, 152];
export const modules = {
  41591: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => LM,
      installListedShaderPack: () => zM
    });
    var OM = iM(7054),
      SM = iM(5442),
      jM = iM(1202),
      aM = iM(7111),
      PM = iM(5435),
      nM = iM(7142),
      QM = iM(7134);
    async function zM(MM) {
      const rM = await (0, aM.loadPageShaderPackCompiler)();
      if (null === rM) return {
        kind: "failed",
        reason: "compiler"
      };
      const iM = await LM(MM, rM);
      return "failed" === iM.kind ? iM : await (0, nM.saveShaderPack)(iM.stored, rM) ? ((0, nM.markShaderPackChangePending)(), iM) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function LM(MM, rM) {
      const iM = await async function(MM) {
        let {
          packId: rM,
          sourceHash: iM
        } = MM;
        try {
          const MM = await fetch(`${jM.clientSideServerUrls.s3Url}/${(0,OM.Q)(rM,iM)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!MM.ok) return console.error(`Failed to download shader pack ${rM} (${MM.status})`), null;
          const SM = await MM.json();
          return "object" !== typeof SM || null === SM ? (console.error(`Shader pack ${rM}'s source isn't an object`), null) : SM
        } catch (SM) {
          return console.error(`Failed to download shader pack ${rM}`, SM), null
        }
      }(MM);
      if (null === iM) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, PM.k)(iM.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const aM = (0, SM.t)(iM.files);
      if ("string" === typeof aM) return console.error(`A listed shader pack breaks the pack rules: ${aM}`), {
        kind: "failed",
        reason: "invalid"
      };
      const zM = await (0, QM.f)(rM, aM);
      if (!1 === (null === zM || void 0 === zM ? void 0 : zM.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const LM = {
        manifest: {
          apiVersion: iM.apiVersion,
          name: MM.name,
          author: MM.ownerName,
          description: MM.description || null,
          keepCircleShadows: !0 === iM.keepCircleShadows
        },
        files: aM
      };
      return {
        kind: "loaded",
        stored: (0, nM.toStoredShaderPack)(LM, zM, {
          packId: MM.packId,
          sourceHash: MM.sourceHash
        })
      }
    }
  },
  43960: (MM, rM, iM) => {
    iM.d(rM, {
      followListingUpdates: () => mM
    });
    var OM = iM(187),
      SM = iM(19),
      jM = iM(1573),
      aM = iM(1144),
      PM = iM(7111),
      nM = iM(5435),
      QM = iM(41591),
      zM = iM(7142);
    const LM = ["apiVersion", "invalid", "errors"];
    async function mM(MM, rM) {
      const iM = await aM.userContextManager.getCurrentUserContext(),
        mM = await jM.c.getShaderPackVersions(iM, [rM.packId]),
        HM = function(MM, rM, iM) {
          var OM;
          if (void 0 === iM || "unlisted" === iM.status) return {
            kind: "none"
          };
          if ("banned" === iM.status) return {
            kind: "remove"
          };
          if (!(0, nM.k)(iM.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: SM,
            name: jM,
            ownerName: aM,
            description: PM
          } = iM;
          return SM !== rM.sourceHash && SM !== rM.rejectedSourceHash ? {
            kind: "update",
            sourceHash: SM,
            name: jM,
            ownerName: aM,
            description: PM
          } : jM !== MM.manifest.name || aM !== MM.manifest.author || (PM || null) !== (null !== (OM = MM.manifest.description) && void 0 !== OM ? OM : null) ? {
            kind: "rename",
            name: jM,
            ownerName: aM,
            description: PM
          } : {
            kind: "none"
          }
        }(MM, rM, (0, OM.d)(mM, rM.packId));
      if ("update" === HM.kind && "landingPage" !== SM.d.get("gameState")) return !1;
      const hM = "update" === HM.kind || "rename" === HM.kind,
        JM = hM ? await (0, PM.loadPageShaderPackCompiler)() : null;
      if (hM && null === JM) return console.warn(`Didn't follow shader pack ${rM.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const dM = await async function(MM, rM, iM, OM) {
        switch (iM.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...MM, manifest: {
                ...MM.manifest,
                name: iM.name,
                author: iM.ownerName,
                description: iM.description || null
              }
            };
          case "update": {
            if (null === OM) return;
            const {
              sourceHash: SM,
              name: jM,
              ownerName: aM,
              description: PM
            } = iM, nM = await (0, QM.b)({
              packId: rM.packId,
              sourceHash: SM,
              name: jM,
              ownerName: aM,
              description: PM
            }, OM);
            if ("loaded" === nM.kind && null !== nM.stored.validation) return nM.stored;
            const zM = "failed" === nM.kind ? nM.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${rM.packId}: ${zM}`), "failed" === nM.kind && LM.includes(nM.reason) ? {
              ...MM,
              listing: {
                ...rM,
                rejectedSourceHash: SM
              }
            } : void 0
          }
        }
      }(MM, rM, HM, JM);
      return void 0 === dM || (await (0, zM.replaceShaderPack)(MM, dM, JM) ? (null !== dM && dM.files === MM.files || (0, zM.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  7142: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      forgetShaderPackActiveHint: () => uM,
      isOtherApiVersion: () => bM,
      isShaderPackActive: () => UM,
      isShaderPackChangePending: () => eM,
      markShaderPackChangePending: () => CM,
      pageShaderPackValidationVersion: () => wM,
      reconcileStoredShaderPackHint: () => gM,
      removeShaderPack: () => EM,
      replaceShaderPack: () => dM,
      saveShaderPack: () => JM,
      shaderPackNeedsCheck: () => tM,
      storedPackOutcome: () => GM,
      storedShaderPackFiles: () => mM,
      toStoredShaderPack: () => LM
    });
    var OM = iM(5442),
      SM = iM(5435),
      jM = iM(30),
      aM = iM(3855),
      PM = iM(7148),
      nM = iM(7120);
    const QM = "shaderPackChangePending";
    let zM = null;

    function LM(MM, rM, iM) {
      return {
        manifest: MM.manifest,
        files: (0, OM.w)(MM.files),
        validation: rM,
        ...iM && {
          listing: iM
        }
      }
    }

    function mM(MM) {
      return Object.keys(MM.files).map((rM => ({
        path: rM,
        source: MM.files[rM]
      })))
    }
    let HM = Promise.resolve();

    function hM(MM) {
      const rM = HM.then(MM);
      return HM = rM.catch((() => {})), rM
    }

    function JM(MM, rM) {
      return hM((() => yM(MM, rM)))
    }

    function dM(MM, rM, iM) {
      return hM((async () => JSON.stringify(await (0, PM.d)()) === JSON.stringify(MM) && (null === rM ? (await lM(), !0) : yM(rM, iM))))
    }
    async function yM(MM, rM) {
      const iM = await jM.f.setItem(PM.b, MM);
      return iM && RM(MM, rM), iM
    }
    async function lM() {
      await jM.f.removeItem(PM.b), jM.g.removeItem(aM.c)
    }

    function EM() {
      return hM(lM)
    }

    function UM(MM, rM) {
      return "active" === GM(MM, rM).kind
    }

    function GM(MM, rM) {
      var iM;
      return null === MM ? {
        kind: "none",
        reason: "nothingStored"
      } : bM(MM) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.ok) || MM.validation.fromRecheck ? null === rM ? {
        kind: "none",
        reason: "noCompiler"
      } : tM(MM, rM) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : MM.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function CM() {
      jM.k.setItem(QM, performance.timeOrigin)
    }

    function eM() {
      return jM.k.getItem(QM) === performance.timeOrigin
    }

    function bM(MM) {
      return !(0, SM.k)(MM.manifest.apiVersion)
    }

    function wM(MM) {
      return zM ??= MM.KD((0, nM.shaderPackTextures)()), zM
    }

    function tM(MM, rM) {
      var iM;
      return (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.headerVersion) !== wM(rM)
    }

    function gM(MM) {
      return hM((async () => {
        RM(await (0, PM.d)(!0), MM)
      }))
    }

    function uM() {
      return hM((async () => {
        jM.g.removeItem(aM.c)
      }))
    }

    function RM(MM, rM) {
      UM(MM, rM) ? jM.g.setItem(aM.c, !0) : jM.g.removeItem(aM.c)
    }
  },
  7120: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      loadShaderPackTextures: () => aM,
      shaderPackTextures: () => PM
    });
    var OM = iM(5442);
    let SM = null,
      jM = null;

    function aM() {
      return jM ??= Promise.all([iM.e(84), iM.e(204)]).then((() => iM(41585))).then((MM => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: rM,
          textureNameToIndex: iM,
          textureAnimationData: jM
        } = MM;
        return SM ??= (0, OM.j)(iM, jM, rM), SM
      })), jM
    }

    function PM() {
      if (null === SM) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return SM
    }
  },
  7134: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => nM,
      f: () => PM
    });
    var OM = iM(7142),
      SM = iM(7120),
      jM = iM(106);
    const aM = 100;
    async function PM(MM, rM) {
      var iM;
      let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (iM = navigator.gpu) && void 0 !== iM ? iM : null;
      const aM = MM.zMM(rM, (0, SM.shaderPackTextures)());
      if (aM.errors.length > 0) return QM(MM, aM.errors, aM.offInStrict);
      const PM = await async function(MM) {
        if (!MM) return null;
        try {
          const rM = await (0, jM.z)(MM);
          return rM ? await rM.requestDevice() : null
        } catch (rM) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", rM), null
        }
      }(OM);
      if (!PM) return null;
      let nM = !1;
      PM.lost.then((() => {
        nM = !0
      }));
      try {
        const rM = await Promise.all(aM.validationModules.map((rM => async function(MM, rM, iM) {
          rM.pushErrorScope("validation");
          const OM = rM.createShaderModule({
              code: iM.code
            }),
            SM = rM.popErrorScope(),
            {
              messages: jM
            } = await OM.getCompilationInfo(),
            aM = jM.filter((MM => "error" === MM.type)).map((rM => MM.mapValidationMessage(iM, rM))),
            PM = await SM;
          PM && 0 === aM.length && aM.push({
            file: null,
            line: 0,
            message: PM.message,
            variants: [iM.key]
          });
          return aM
        }(MM, PM, rM))));
        return nM ? null : QM(MM, MM.ciM(rM.flat()), aM.offInStrict)
      } catch (zM) {
        return console.error("Couldn't validate the shader pack on WebGPU.", zM), null
      } finally {
        PM.destroy()
      }
    }
    async function nM(MM, rM) {
      var iM;
      if (!(0, OM.shaderPackNeedsCheck)(MM, rM) || (0, OM.isOtherApiVersion)(MM)) return MM;
      const SM = await PM(rM, (0, OM.storedShaderPackFiles)(MM));
      if (!SM) return MM;
      const jM = !1 === (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.ok) && !MM.validation.fromRecheck,
        aM = {
          ...MM,
          validation: jM ? SM : {
            ...SM,
            fromRecheck: !0
          }
        };
      return await (0, OM.replaceShaderPack)(MM, aM, rM) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), aM
    }

    function QM(MM, rM, iM) {
      return {
        headerVersion: (0, OM.pageShaderPackValidationVersion)(MM),
        ok: 0 === rM.length,
        errors: rM.slice(0, aM),
        moreErrors: Math.max(0, rM.length - aM),
        offInStrict: iM
      }
    }
  },
  7054: (MM, rM, iM) => {
    iM.d(rM, {
      D: () => aM,
      E: () => OM,
      I: () => mM,
      M: () => zM,
      Q: () => UM,
      U: () => LM,
      V: () => QM,
      b: () => hM,
      e: () => dM,
      g: () => JM,
      k: () => HM,
      m: () => EM,
      q: () => CM,
      t: () => nM,
      v: () => SM,
      w: () => GM,
      y: () => jM,
      z: () => PM
    });
    const OM = ["forest", "desert", "water", "night", "cave"];
    const SM = {
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
      jM = ["popular", "updated", "newest"],
      aM = 3,
      PM = 32,
      nM = 300;

    function QM(MM, rM) {
      return MM.slice(0, rM).replace(/[\uD800-\uDBFF]$/, "")
    }
    const zM = 64,
      LM = 512,
      mM = 18e5;

    function HM(MM) {
      const rM = MM,
        iM = null === rM || void 0 === rM ? void 0 : rM.files;
      return "number" === typeof(null === rM || void 0 === rM ? void 0 : rM.apiVersion) && "string" === typeof rM.name && (null === rM.author || "string" === typeof rM.author) && (void 0 === rM.keepCircleShadows || "boolean" === typeof rM.keepCircleShadows) && "object" === typeof iM && null !== iM && Object.values(iM).every((MM => "string" === typeof MM))
    }
    const hM = "Bloxdhub",
      JM = "https://bloxdhub.com/shaders";

    function dM(MM) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(MM)}`
    }
    const yM = "Screenshot generation failed.",
      lM = "Its screenshots couldn't be generated:";

    function EM(MM) {
      var rM;
      return MM === yM || null !== (rM = null === MM || void 0 === MM ? void 0 : MM.startsWith(lM)) && void 0 !== rM && rM
    }

    function UM(MM, rM) {
      return `shaderPacks/${MM}/${rM}.json`
    }

    function GM(MM, rM, iM, OM) {
      return null === rM.renderId ? CM(MM, rM.baselineVersion, iM, OM) : `${MM}/${function(MM,rM,iM,OM){return`shaderPacks/${MM}/${rM}/${iM}-${OM}.webp`}(rM.packId,rM.renderId,iM,OM)}`
    }

    function CM(MM, rM, iM, OM) {
      return `${MM}/${function(MM,rM,iM){return`shaderPacks/baseline/${MM}/${rM}-${iM}.webp`}(rM,iM,OM)}`
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);