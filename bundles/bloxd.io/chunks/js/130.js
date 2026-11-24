export const id = 130;
export const ids = [130, 136, 137];
export const modules = {
  40420: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => AD,
      installListedShaderPack: () => RD
    });
    var pD = wD(6594),
      sD = wD(5084),
      KD = wD(1211),
      rD = wD(6645),
      LD = wD(5076),
      cD = wD(6691),
      gD = wD(6682);
    async function RD(DD) {
      const zD = await (0, rD.loadPageShaderPackCompiler)();
      if (null === zD) return {
        kind: "failed",
        reason: "compiler"
      };
      const wD = await AD(DD, zD);
      return "failed" === wD.kind ? wD : await (0, cD.saveShaderPack)(wD.stored, zD) ? ((0, cD.markShaderPackChangePending)(), wD) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function AD(DD, zD) {
      const wD = await async function(DD) {
        let {
          packId: zD,
          sourceHash: wD
        } = DD;
        try {
          const DD = await fetch(`${KD.clientSideServerUrls.s3Url}/${(0,pD.M)(zD,wD)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!DD.ok) return console.error(`Failed to download shader pack ${zD} (${DD.status})`), null;
          const sD = await DD.json();
          return "object" !== typeof sD || null === sD ? (console.error(`Shader pack ${zD}'s source isn't an object`), null) : sD
        } catch (sD) {
          return console.error(`Failed to download shader pack ${zD}`, sD), null
        }
      }(DD);
      if (null === wD) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, LD.h)(wD.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const rD = (0, sD.v)(wD.files);
      if ("string" === typeof rD) return console.error(`A listed shader pack breaks the pack rules: ${rD}`), {
        kind: "failed",
        reason: "invalid"
      };
      const RD = await (0, gD.h)(zD, rD);
      if (!1 === (null === RD || void 0 === RD ? void 0 : RD.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const AD = {
        manifest: {
          apiVersion: wD.apiVersion,
          name: DD.name,
          author: DD.ownerName,
          description: DD.description || null,
          keepCircleShadows: !0 === wD.keepCircleShadows
        },
        files: rD
      };
      return {
        kind: "loaded",
        stored: (0, cD.toStoredShaderPack)(AD, RD, {
          packId: DD.packId,
          sourceHash: DD.sourceHash
        })
      }
    }
  },
  41198: (DD, zD, wD) => {
    wD.d(zD, {
      followListingUpdates: () => UD
    });
    var pD = wD(212),
      sD = wD(20),
      KD = wD(1495),
      rD = wD(1130),
      LD = wD(6645),
      cD = wD(5076),
      gD = wD(40420),
      RD = wD(6691);
    const AD = ["apiVersion", "invalid", "errors"];
    async function UD(DD, zD) {
      const wD = await rD.userContextManager.getCurrentUserContext(),
        UD = await KD.d.getShaderPackVersions(wD, [zD.packId]),
        fD = function(DD, zD, wD) {
          var pD;
          if (void 0 === wD || "unlisted" === wD.status) return {
            kind: "none"
          };
          if ("banned" === wD.status) return {
            kind: "remove"
          };
          if (!(0, cD.h)(wD.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: sD,
            name: KD,
            ownerName: rD,
            description: LD
          } = wD;
          return sD !== zD.sourceHash && sD !== zD.rejectedSourceHash ? {
            kind: "update",
            sourceHash: sD,
            name: KD,
            ownerName: rD,
            description: LD
          } : KD !== DD.manifest.name || rD !== DD.manifest.author || (LD || null) !== (null !== (pD = DD.manifest.description) && void 0 !== pD ? pD : null) ? {
            kind: "rename",
            name: KD,
            ownerName: rD,
            description: LD
          } : {
            kind: "none"
          }
        }(DD, zD, (0, pD.d)(UD, zD.packId));
      if ("update" === fD.kind && "landingPage" !== sD.e.get("gameState")) return !1;
      const ID = "update" === fD.kind || "rename" === fD.kind,
        BD = ID ? await (0, LD.loadPageShaderPackCompiler)() : null;
      if (ID && null === BD) return console.warn(`Didn't follow shader pack ${zD.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const GD = await async function(DD, zD, wD, pD) {
        switch (wD.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...DD, manifest: {
                ...DD.manifest,
                name: wD.name,
                author: wD.ownerName,
                description: wD.description || null
              }
            };
          case "update": {
            if (null === pD) return;
            const {
              sourceHash: sD,
              name: KD,
              ownerName: rD,
              description: LD
            } = wD, cD = await (0, gD.e)({
              packId: zD.packId,
              sourceHash: sD,
              name: KD,
              ownerName: rD,
              description: LD
            }, pD);
            if ("loaded" === cD.kind && null !== cD.stored.validation) return cD.stored;
            const RD = "failed" === cD.kind ? cD.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${zD.packId}: ${RD}`), "failed" === cD.kind && AD.includes(cD.reason) ? {
              ...DD,
              listing: {
                ...zD,
                rejectedSourceHash: sD
              }
            } : void 0
          }
        }
      }(DD, zD, fD, BD);
      return void 0 === GD || (await (0, RD.replaceShaderPack)(DD, GD, BD) ? (null !== GD && GD.files === DD.files || (0, RD.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6691: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      forgetShaderPackActiveHint: () => xD,
      isOtherApiVersion: () => XD,
      isShaderPackActive: () => OD,
      isShaderPackChangePending: () => QD,
      markShaderPackChangePending: () => ED,
      pageShaderPackValidationVersion: () => VD,
      reconcileStoredShaderPackHint: () => CD,
      removeShaderPack: () => MD,
      replaceShaderPack: () => GD,
      saveShaderPack: () => BD,
      shaderPackNeedsCheck: () => PD,
      storedPackOutcome: () => JD,
      storedShaderPackFiles: () => UD,
      toStoredShaderPack: () => AD
    });
    var pD = wD(5084),
      sD = wD(5076),
      KD = wD(35),
      rD = wD(3462),
      LD = wD(6693),
      cD = wD(6664);
    const gD = "shaderPackChangePending";
    let RD = null;

    function AD(DD, zD, wD) {
      return {
        manifest: DD.manifest,
        files: (0, pD.z)(DD.files),
        validation: zD,
        ...wD && {
          listing: wD
        }
      }
    }

    function UD(DD) {
      return Object.keys(DD.files).map((zD => ({
        path: zD,
        source: DD.files[zD]
      })))
    }
    let fD = Promise.resolve();

    function ID(DD) {
      const zD = fD.then(DD);
      return fD = zD.catch((() => {})), zD
    }

    function BD(DD, zD) {
      return ID((() => hD(DD, zD)))
    }

    function GD(DD, zD, wD) {
      return ID((async () => JSON.stringify(await (0, LD.c)()) === JSON.stringify(DD) && (null === zD ? (await nD(), !0) : hD(zD, wD))))
    }
    async function hD(DD, zD) {
      const wD = await KD.g.setItem(LD.b, DD);
      return wD && TD(DD, zD), wD
    }
    async function nD() {
      await KD.g.removeItem(LD.b), KD.h.removeItem(rD.e)
    }

    function MD() {
      return ID(nD)
    }

    function OD(DD, zD) {
      return "active" === JD(DD, zD).kind
    }

    function JD(DD, zD) {
      var wD;
      return null === DD ? {
        kind: "none",
        reason: "nothingStored"
      } : XD(DD) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.ok) || DD.validation.fromRecheck ? null === zD ? {
        kind: "none",
        reason: "noCompiler"
      } : PD(DD, zD) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : DD.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function ED() {
      KD.k.setItem(gD, performance.timeOrigin)
    }

    function QD() {
      return KD.k.getItem(gD) === performance.timeOrigin
    }

    function XD(DD) {
      return !(0, sD.h)(DD.manifest.apiVersion)
    }

    function VD(DD) {
      return RD ??= DD.qS((0, cD.shaderPackTextures)()), RD
    }

    function PD(DD, zD) {
      var wD;
      return (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.headerVersion) !== VD(zD)
    }

    function CD(DD) {
      return ID((async () => {
        TD(await (0, LD.c)(!0), DD)
      }))
    }

    function xD() {
      return ID((async () => {
        KD.h.removeItem(rD.e)
      }))
    }

    function TD(DD, zD) {
      OD(DD, zD) ? KD.h.setItem(rD.e, !0) : KD.h.removeItem(rD.e)
    }
  },
  6664: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      loadShaderPackTextures: () => rD,
      shaderPackTextures: () => LD
    });
    var pD = wD(5084);
    let sD = null,
      KD = null;

    function rD() {
      return KD ??= Promise.all([wD.e(72), wD.e(188)]).then((() => wD(40415))).then((DD => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: zD,
          textureNameToIndex: wD,
          textureAnimationData: KD
        } = DD;
        return sD ??= (0, pD.m)(wD, KD, zD), sD
      })), KD
    }

    function LD() {
      if (null === sD) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return sD
    }
  },
  6682: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => cD,
      h: () => LD
    });
    var pD = wD(6691),
      sD = wD(6664),
      KD = wD(119);
    const rD = 100;
    async function LD(DD, zD) {
      var wD;
      let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (wD = navigator.gpu) && void 0 !== wD ? wD : null;
      const rD = DD.LDD(zD, (0, sD.shaderPackTextures)());
      if (rD.errors.length > 0) return gD(DD, rD.errors, rD.offInStrict);
      const LD = await async function(DD) {
        if (!DD) return null;
        try {
          const zD = await (0, KD.x)(DD);
          return zD ? await zD.requestDevice() : null
        } catch (zD) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", zD), null
        }
      }(pD);
      if (!LD) return null;
      let cD = !1;
      LD.lost.then((() => {
        cD = !0
      }));
      try {
        const zD = await Promise.all(rD.validationModules.map((zD => async function(DD, zD, wD) {
          zD.pushErrorScope("validation");
          const pD = zD.createShaderModule({
              code: wD.code
            }),
            sD = zD.popErrorScope(),
            {
              messages: KD
            } = await pD.getCompilationInfo(),
            rD = KD.filter((DD => "error" === DD.type)).map((zD => DD.mapValidationMessage(wD, zD))),
            LD = await sD;
          LD && 0 === rD.length && rD.push({
            file: null,
            line: 0,
            message: LD.message,
            variants: [wD.key]
          });
          return rD
        }(DD, LD, zD))));
        return cD ? null : gD(DD, DD.RpD(zD.flat()), rD.offInStrict)
      } catch (RD) {
        return console.error("Couldn't validate the shader pack on WebGPU.", RD), null
      } finally {
        LD.destroy()
      }
    }
    async function cD(DD, zD) {
      var wD;
      if (!(0, pD.shaderPackNeedsCheck)(DD, zD) || (0, pD.isOtherApiVersion)(DD)) return DD;
      const sD = await LD(zD, (0, pD.storedShaderPackFiles)(DD));
      if (!sD) return DD;
      const KD = !1 === (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.ok) && !DD.validation.fromRecheck,
        rD = {
          ...DD,
          validation: KD ? sD : {
            ...sD,
            fromRecheck: !0
          }
        };
      return await (0, pD.replaceShaderPack)(DD, rD, zD) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), rD
    }

    function gD(DD, zD, wD) {
      return {
        headerVersion: (0, pD.pageShaderPackValidationVersion)(DD),
        ok: 0 === zD.length,
        errors: zD.slice(0, rD),
        moreErrors: Math.max(0, zD.length - rD),
        offInStrict: wD
      }
    }
  },
  6594: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => KD,
      C: () => LD,
      G: () => rD,
      H: () => pD,
      I: () => UD,
      K: () => RD,
      M: () => OD,
      N: () => AD,
      R: () => gD,
      d: () => ID,
      f: () => GD,
      g: () => BD,
      i: () => fD,
      k: () => MD,
      l: () => ED,
      p: () => cD,
      s: () => sD,
      w: () => JD
    });
    const pD = ["forest", "desert", "water", "night", "cave"];
    const sD = {
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
      KD = ["popular", "updated", "newest"],
      rD = 3,
      LD = 32,
      cD = 300;

    function gD(DD, zD) {
      return DD.slice(0, zD).replace(/[\uD800-\uDBFF]$/, "")
    }
    const RD = 64,
      AD = 512,
      UD = 18e5;

    function fD(DD) {
      const zD = DD,
        wD = null === zD || void 0 === zD ? void 0 : zD.files;
      return "number" === typeof(null === zD || void 0 === zD ? void 0 : zD.apiVersion) && "string" === typeof zD.name && (null === zD.author || "string" === typeof zD.author) && (void 0 === zD.keepCircleShadows || "boolean" === typeof zD.keepCircleShadows) && "object" === typeof wD && null !== wD && Object.values(wD).every((DD => "string" === typeof DD))
    }
    const ID = "Bloxdhub",
      BD = "https://bloxdhub.com/shaders";

    function GD(DD) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(DD)}`
    }
    const hD = "Screenshot generation failed.",
      nD = "Its screenshots couldn't be generated:";

    function MD(DD) {
      var zD;
      return DD === hD || null !== (zD = null === DD || void 0 === DD ? void 0 : DD.startsWith(nD)) && void 0 !== zD && zD
    }

    function OD(DD, zD) {
      return `shaderPacks/${DD}/${zD}.json`
    }

    function JD(DD, zD, wD, pD) {
      return null === zD.renderId ? ED(DD, zD.baselineVersion, wD, pD) : `${DD}/${function(DD,zD,wD,pD){return`shaderPacks/${DD}/${zD}/${wD}-${pD}.webp`}(zD.packId,zD.renderId,wD,pD)}`
    }

    function ED(DD, zD, wD, pD) {
      return `${DD}/${function(DD,zD,wD){return`shaderPacks/baseline/${DD}/${zD}-${wD}.webp`}(zD,wD,pD)}`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);