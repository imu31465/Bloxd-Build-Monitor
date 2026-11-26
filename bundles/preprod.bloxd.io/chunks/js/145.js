export const id = 145;
export const ids = [145, 152, 153];
export const modules = {
  41498: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB,
      installListedShaderPack: () => MB
    });
    var YB = GB(7107),
      DB = GB(5546),
      QB = GB(1186),
      oB = GB(7159),
      jB = GB(5538),
      yB = GB(7193),
      JB = GB(7186);
    async function MB(BB) {
      const OB = await (0, oB.loadPageShaderPackCompiler)();
      if (null === OB) return {
        kind: "failed",
        reason: "compiler"
      };
      const GB = await PB(BB, OB);
      return "failed" === GB.kind ? GB : await (0, yB.saveShaderPack)(GB.stored, OB) ? ((0, yB.markShaderPackChangePending)(), GB) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function PB(BB, OB) {
      const GB = await async function(BB) {
        let {
          packId: OB,
          sourceHash: GB
        } = BB;
        try {
          const BB = await fetch(`${QB.clientSideServerUrls.s3Url}/${(0,YB.Q)(OB,GB)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!BB.ok) return console.error(`Failed to download shader pack ${OB} (${BB.status})`), null;
          const DB = await BB.json();
          return "object" !== typeof DB || null === DB ? (console.error(`Shader pack ${OB}'s source isn't an object`), null) : DB
        } catch (DB) {
          return console.error(`Failed to download shader pack ${OB}`, DB), null
        }
      }(BB);
      if (null === GB) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, jB.g)(GB.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const oB = (0, DB.v)(GB.files);
      if ("string" === typeof oB) return console.error(`A listed shader pack breaks the pack rules: ${oB}`), {
        kind: "failed",
        reason: "invalid"
      };
      const MB = await (0, JB.f)(OB, oB);
      if (!1 === (null === MB || void 0 === MB ? void 0 : MB.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const PB = {
        manifest: {
          apiVersion: GB.apiVersion,
          name: BB.name,
          author: BB.ownerName,
          description: BB.description || null,
          keepCircleShadows: !0 === GB.keepCircleShadows
        },
        files: oB
      };
      return {
        kind: "loaded",
        stored: (0, yB.toStoredShaderPack)(PB, MB, {
          packId: BB.packId,
          sourceHash: BB.sourceHash
        })
      }
    }
  },
  44453: (BB, OB, GB) => {
    GB.d(OB, {
      followListingUpdates: () => zB
    });
    var YB = GB(204),
      DB = GB(16),
      QB = GB(1540),
      oB = GB(1121),
      jB = GB(7159),
      yB = GB(5538),
      JB = GB(41498),
      MB = GB(7193);
    const PB = ["apiVersion", "invalid", "errors"];
    async function zB(BB, OB) {
      const GB = await oB.userContextManager.getCurrentUserContext(),
        zB = await QB.b.getShaderPackVersions(GB, [OB.packId]),
        lB = function(BB, OB, GB) {
          var YB;
          if (void 0 === GB || "unlisted" === GB.status) return {
            kind: "none"
          };
          if ("banned" === GB.status) return {
            kind: "remove"
          };
          if (!(0, yB.g)(GB.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: DB,
            name: QB,
            ownerName: oB,
            description: jB
          } = GB;
          return DB !== OB.sourceHash && DB !== OB.rejectedSourceHash ? {
            kind: "update",
            sourceHash: DB,
            name: QB,
            ownerName: oB,
            description: jB
          } : QB !== BB.manifest.name || oB !== BB.manifest.author || (jB || null) !== (null !== (YB = BB.manifest.description) && void 0 !== YB ? YB : null) ? {
            kind: "rename",
            name: QB,
            ownerName: oB,
            description: jB
          } : {
            kind: "none"
          }
        }(BB, OB, (0, YB.c)(zB, OB.packId));
      if ("update" === lB.kind && "landingPage" !== DB.c.get("gameState")) return !1;
      const pB = "update" === lB.kind || "rename" === lB.kind,
        qB = pB ? await (0, jB.loadPageShaderPackCompiler)() : null;
      if (pB && null === qB) return console.warn(`Didn't follow shader pack ${OB.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const ZB = await async function(BB, OB, GB, YB) {
        switch (GB.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...BB, manifest: {
                ...BB.manifest,
                name: GB.name,
                author: GB.ownerName,
                description: GB.description || null
              }
            };
          case "update": {
            if (null === YB) return;
            const {
              sourceHash: DB,
              name: QB,
              ownerName: oB,
              description: jB
            } = GB, yB = await (0, JB.b)({
              packId: OB.packId,
              sourceHash: DB,
              name: QB,
              ownerName: oB,
              description: jB
            }, YB);
            if ("loaded" === yB.kind && null !== yB.stored.validation) return yB.stored;
            const MB = "failed" === yB.kind ? yB.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${OB.packId}: ${MB}`), "failed" === yB.kind && PB.includes(yB.reason) ? {
              ...BB,
              listing: {
                ...OB,
                rejectedSourceHash: DB
              }
            } : void 0
          }
        }
      }(BB, OB, lB, qB);
      return void 0 === ZB || (await (0, MB.replaceShaderPack)(BB, ZB, qB) ? (null !== ZB && ZB.files === BB.files || (0, MB.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  7193: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      forgetShaderPackActiveHint: () => KB,
      isOtherApiVersion: () => UB,
      isShaderPackActive: () => AB,
      isShaderPackChangePending: () => nB,
      markShaderPackChangePending: () => SB,
      pageShaderPackValidationVersion: () => fB,
      reconcileStoredShaderPackHint: () => dB,
      removeShaderPack: () => WB,
      replaceShaderPack: () => ZB,
      saveShaderPack: () => qB,
      shaderPackNeedsCheck: () => kB,
      storedPackOutcome: () => VB,
      storedShaderPackFiles: () => zB,
      toStoredShaderPack: () => PB
    });
    var YB = GB(5546),
      DB = GB(5538),
      QB = GB(31),
      oB = GB(3885),
      jB = GB(7198),
      yB = GB(7174);
    const JB = "shaderPackChangePending";
    let MB = null;

    function PB(BB, OB, GB) {
      return {
        manifest: BB.manifest,
        files: (0, YB.y)(BB.files),
        validation: OB,
        ...GB && {
          listing: GB
        }
      }
    }

    function zB(BB) {
      return Object.keys(BB.files).map((OB => ({
        path: OB,
        source: BB.files[OB]
      })))
    }
    let lB = Promise.resolve();

    function pB(BB) {
      const OB = lB.then(BB);
      return lB = OB.catch((() => {})), OB
    }

    function qB(BB, OB) {
      return pB((() => NB(BB, OB)))
    }

    function ZB(BB, OB, GB) {
      return pB((async () => JSON.stringify(await (0, jB.e)()) === JSON.stringify(BB) && (null === OB ? (await RB(), !0) : NB(OB, GB))))
    }
    async function NB(BB, OB) {
      const GB = await QB.d.setItem(jB.c, BB);
      return GB && uB(BB, OB), GB
    }
    async function RB() {
      await QB.d.removeItem(jB.c), QB.g.removeItem(oB.d)
    }

    function WB() {
      return pB(RB)
    }

    function AB(BB, OB) {
      return "active" === VB(BB, OB).kind
    }

    function VB(BB, OB) {
      var GB;
      return null === BB ? {
        kind: "none",
        reason: "nothingStored"
      } : UB(BB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (GB = BB.validation) || void 0 === GB ? void 0 : GB.ok) || BB.validation.fromRecheck ? null === OB ? {
        kind: "none",
        reason: "noCompiler"
      } : kB(BB, OB) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : BB.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function SB() {
      QB.i.setItem(JB, performance.timeOrigin)
    }

    function nB() {
      return QB.i.getItem(JB) === performance.timeOrigin
    }

    function UB(BB) {
      return !(0, DB.g)(BB.manifest.apiVersion)
    }

    function fB(BB) {
      return MB ??= BB.yI((0, yB.shaderPackTextures)()), MB
    }

    function kB(BB, OB) {
      var GB;
      return (null === (GB = BB.validation) || void 0 === GB ? void 0 : GB.headerVersion) !== fB(OB)
    }

    function dB(BB) {
      return pB((async () => {
        uB(await (0, jB.e)(!0), BB)
      }))
    }

    function KB() {
      return pB((async () => {
        QB.g.removeItem(oB.d)
      }))
    }

    function uB(BB, OB) {
      AB(BB, OB) ? QB.g.setItem(oB.d, !0) : QB.g.removeItem(oB.d)
    }
  },
  7174: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      loadShaderPackTextures: () => oB,
      shaderPackTextures: () => jB
    });
    var YB = GB(5546);
    let DB = null,
      QB = null;

    function oB() {
      return QB ??= Promise.all([GB.e(84), GB.e(206)]).then((() => GB(41493))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: OB,
          textureNameToIndex: GB,
          textureAnimationData: QB
        } = BB;
        return DB ??= (0, YB.o)(GB, QB, OB), DB
      })), QB
    }

    function jB() {
      if (null === DB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return DB
    }
  },
  7186: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => yB,
      f: () => jB
    });
    var YB = GB(7193),
      DB = GB(7174),
      QB = GB(113);
    const oB = 100;
    async function jB(BB, OB) {
      var GB;
      let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (GB = navigator.gpu) && void 0 !== GB ? GB : null;
      const oB = BB.VOB(OB, (0, DB.shaderPackTextures)());
      if (oB.errors.length > 0) return JB(BB, oB.errors, oB.offInStrict);
      const jB = await async function(BB) {
        if (!BB) return null;
        try {
          const OB = await (0, QB.w)(BB);
          return OB ? await OB.requestDevice() : null
        } catch (OB) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", OB), null
        }
      }(YB);
      if (!jB) return null;
      let yB = !1;
      jB.lost.then((() => {
        yB = !0
      }));
      try {
        const OB = await Promise.all(oB.validationModules.map((OB => async function(BB, OB, GB) {
          OB.pushErrorScope("validation");
          const YB = OB.createShaderModule({
              code: GB.code
            }),
            DB = OB.popErrorScope(),
            {
              messages: QB
            } = await YB.getCompilationInfo(),
            oB = QB.filter((BB => "error" === BB.type)).map((OB => BB.mapValidationMessage(GB, OB))),
            jB = await DB;
          jB && 0 === oB.length && oB.push({
            file: null,
            line: 0,
            message: jB.message,
            variants: [GB.key]
          });
          return oB
        }(BB, jB, OB))));
        return yB ? null : JB(BB, BB.lDB(OB.flat()), oB.offInStrict)
      } catch (MB) {
        return console.error("Couldn't validate the shader pack on WebGPU.", MB), null
      } finally {
        jB.destroy()
      }
    }
    async function yB(BB, OB) {
      var GB;
      if (!(0, YB.shaderPackNeedsCheck)(BB, OB) || (0, YB.isOtherApiVersion)(BB)) return BB;
      const DB = await jB(OB, (0, YB.storedShaderPackFiles)(BB));
      if (!DB) return BB;
      const QB = !1 === (null === (GB = BB.validation) || void 0 === GB ? void 0 : GB.ok) && !BB.validation.fromRecheck,
        oB = {
          ...BB,
          validation: QB ? DB : {
            ...DB,
            fromRecheck: !0
          }
        };
      return await (0, YB.replaceShaderPack)(BB, oB, OB) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), oB
    }

    function JB(BB, OB, GB) {
      return {
        headerVersion: (0, YB.pageShaderPackValidationVersion)(BB),
        ok: 0 === OB.length,
        errors: OB.slice(0, oB),
        moreErrors: Math.max(0, OB.length - oB),
        offInStrict: GB
      }
    }
  },
  7107: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => jB,
      E: () => oB,
      F: () => YB,
      I: () => zB,
      M: () => MB,
      Q: () => AB,
      U: () => PB,
      X: () => JB,
      e: () => pB,
      h: () => ZB,
      i: () => qB,
      l: () => lB,
      n: () => WB,
      q: () => SB,
      r: () => yB,
      t: () => DB,
      x: () => VB,
      z: () => QB
    });
    const YB = ["forest", "desert", "water", "night", "cave"];
    const DB = {
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
      QB = ["popular", "updated", "newest"],
      oB = 3,
      jB = 32,
      yB = 300;

    function JB(BB, OB) {
      return BB.slice(0, OB).replace(/[\uD800-\uDBFF]$/, "")
    }
    const MB = 64,
      PB = 512,
      zB = 18e5;

    function lB(BB) {
      const OB = BB,
        GB = null === OB || void 0 === OB ? void 0 : OB.files;
      return "number" === typeof(null === OB || void 0 === OB ? void 0 : OB.apiVersion) && "string" === typeof OB.name && (null === OB.author || "string" === typeof OB.author) && (void 0 === OB.keepCircleShadows || "boolean" === typeof OB.keepCircleShadows) && "object" === typeof GB && null !== GB && Object.values(GB).every((BB => "string" === typeof BB))
    }
    const pB = "Bloxdhub",
      qB = "https://bloxdhub.com/shaders";

    function ZB(BB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
    }
    const NB = "Screenshot generation failed.",
      RB = "Its screenshots couldn't be generated:";

    function WB(BB) {
      var OB;
      return BB === NB || null !== (OB = null === BB || void 0 === BB ? void 0 : BB.startsWith(RB)) && void 0 !== OB && OB
    }

    function AB(BB, OB) {
      return `shaderPacks/${BB}/${OB}.json`
    }

    function VB(BB, OB, GB, YB) {
      return null === OB.renderId ? SB(BB, OB.baselineVersion, GB, YB) : `${BB}/${function(BB,OB,GB,YB){return`shaderPacks/${BB}/${OB}/${GB}-${YB}.webp`}(OB.packId,OB.renderId,GB,YB)}`
    }

    function SB(BB, OB, GB, YB) {
      return `${BB}/${function(BB,OB,GB){return`shaderPacks/baseline/${BB}/${OB}-${GB}.webp`}(OB,GB,YB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);