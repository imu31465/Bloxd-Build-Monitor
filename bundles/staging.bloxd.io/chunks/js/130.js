export const id = 130;
export const ids = [130, 136, 137];
export const modules = {
  40531: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => fS,
      installListedShaderPack: () => IS
    });
    var tS = gS(6760),
      bS = gS(5221),
      XS = gS(1286),
      xS = gS(6810),
      NS = gS(5212),
      qS = gS(6844),
      uS = gS(6839);
    async function IS(SS) {
      const HS = await (0, xS.loadPageShaderPackCompiler)();
      if (null === HS) return {
        kind: "failed",
        reason: "compiler"
      };
      const gS = await fS(SS, HS);
      return "failed" === gS.kind ? gS : await (0, qS.saveShaderPack)(gS.stored, HS) ? ((0, qS.markShaderPackChangePending)(), gS) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function fS(SS, HS) {
      const gS = await async function(SS) {
        let {
          packId: HS,
          sourceHash: gS
        } = SS;
        try {
          const SS = await fetch(`${XS.clientSideServerUrls.s3Url}/${(0,tS.R)(HS,gS)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!SS.ok) return console.error(`Failed to download shader pack ${HS} (${SS.status})`), null;
          const bS = await SS.json();
          return "object" !== typeof bS || null === bS ? (console.error(`Shader pack ${HS}'s source isn't an object`), null) : bS
        } catch (bS) {
          return console.error(`Failed to download shader pack ${HS}`, bS), null
        }
      }(SS);
      if (null === gS) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, NS.j)(gS.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const xS = (0, bS.u)(gS.files);
      if ("string" === typeof xS) return console.error(`A listed shader pack breaks the pack rules: ${xS}`), {
        kind: "failed",
        reason: "invalid"
      };
      const IS = await (0, uS.g)(HS, xS);
      if (!1 === (null === IS || void 0 === IS ? void 0 : IS.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const fS = {
        manifest: {
          apiVersion: gS.apiVersion,
          name: SS.name,
          author: SS.ownerName,
          description: SS.description || null,
          keepCircleShadows: !0 === gS.keepCircleShadows
        },
        files: xS
      };
      return {
        kind: "loaded",
        stored: (0, qS.toStoredShaderPack)(fS, IS, {
          packId: SS.packId,
          sourceHash: SS.sourceHash
        })
      }
    }
  },
  41295: (SS, HS, gS) => {
    gS.d(HS, {
      followListingUpdates: () => kS
    });
    var tS = gS(215),
      bS = gS(24),
      XS = gS(1588),
      xS = gS(1216),
      NS = gS(6810),
      qS = gS(5212),
      uS = gS(40531),
      IS = gS(6844);
    const fS = ["apiVersion", "invalid", "errors"];
    async function kS(SS, HS) {
      const gS = await xS.userContextManager.getCurrentUserContext(),
        kS = await XS.b.getShaderPackVersions(gS, [HS.packId]),
        aS = function(SS, HS, gS) {
          var tS;
          if (void 0 === gS || "unlisted" === gS.status) return {
            kind: "none"
          };
          if ("banned" === gS.status) return {
            kind: "remove"
          };
          if (!(0, qS.j)(gS.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: bS,
            name: XS,
            ownerName: xS,
            description: NS
          } = gS;
          return bS !== HS.sourceHash && bS !== HS.rejectedSourceHash ? {
            kind: "update",
            sourceHash: bS,
            name: XS,
            ownerName: xS,
            description: NS
          } : XS !== SS.manifest.name || xS !== SS.manifest.author || (NS || null) !== (null !== (tS = SS.manifest.description) && void 0 !== tS ? tS : null) ? {
            kind: "rename",
            name: XS,
            ownerName: xS,
            description: NS
          } : {
            kind: "none"
          }
        }(SS, HS, (0, tS.c)(kS, HS.packId));
      if ("update" === aS.kind && "landingPage" !== bS.b.get("gameState")) return !1;
      const KS = "update" === aS.kind || "rename" === aS.kind,
        jS = KS ? await (0, NS.loadPageShaderPackCompiler)() : null;
      if (KS && null === jS) return console.warn(`Didn't follow shader pack ${HS.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const GS = await async function(SS, HS, gS, tS) {
        switch (gS.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...SS, manifest: {
                ...SS.manifest,
                name: gS.name,
                author: gS.ownerName,
                description: gS.description || null
              }
            };
          case "update": {
            if (null === tS) return;
            const {
              sourceHash: bS,
              name: XS,
              ownerName: xS,
              description: NS
            } = gS, qS = await (0, uS.c)({
              packId: HS.packId,
              sourceHash: bS,
              name: XS,
              ownerName: xS,
              description: NS
            }, tS);
            if ("loaded" === qS.kind && null !== qS.stored.validation) return qS.stored;
            const IS = "failed" === qS.kind ? qS.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${HS.packId}: ${IS}`), "failed" === qS.kind && fS.includes(qS.reason) ? {
              ...SS,
              listing: {
                ...HS,
                rejectedSourceHash: bS
              }
            } : void 0
          }
        }
      }(SS, HS, aS, jS);
      return void 0 === GS || (await (0, IS.replaceShaderPack)(SS, GS, jS) ? (null !== GS && GS.files === SS.files || (0, IS.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6844: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      forgetShaderPackActiveHint: () => cS,
      isOtherApiVersion: () => ZS,
      isShaderPackActive: () => QS,
      isShaderPackChangePending: () => hS,
      markShaderPackChangePending: () => wS,
      pageShaderPackValidationVersion: () => JS,
      reconcileStoredShaderPackHint: () => dS,
      removeShaderPack: () => PS,
      replaceShaderPack: () => GS,
      saveShaderPack: () => jS,
      shaderPackNeedsCheck: () => OS,
      storedPackOutcome: () => DS,
      storedShaderPackFiles: () => kS,
      toStoredShaderPack: () => fS
    });
    var tS = gS(5221),
      bS = gS(5212),
      XS = gS(45),
      xS = gS(3591),
      NS = gS(6848),
      qS = gS(6824);
    const uS = "shaderPackChangePending";
    let IS = null;

    function fS(SS, HS, gS) {
      return {
        manifest: SS.manifest,
        files: (0, tS.v)(SS.files),
        validation: HS,
        ...gS && {
          listing: gS
        }
      }
    }

    function kS(SS) {
      return Object.keys(SS.files).map((HS => ({
        path: HS,
        source: SS.files[HS]
      })))
    }
    let aS = Promise.resolve();

    function KS(SS) {
      const HS = aS.then(SS);
      return aS = HS.catch((() => {})), HS
    }

    function jS(SS, HS) {
      return KS((() => CS(SS, HS)))
    }

    function GS(SS, HS, gS) {
      return KS((async () => JSON.stringify(await (0, NS.f)()) === JSON.stringify(SS) && (null === HS ? (await nS(), !0) : CS(HS, gS))))
    }
    async function CS(SS, HS) {
      const gS = await XS.e.setItem(NS.d, SS);
      return gS && vS(SS, HS), gS
    }
    async function nS() {
      await XS.e.removeItem(NS.d), XS.g.removeItem(xS.d)
    }

    function PS() {
      return KS(nS)
    }

    function QS(SS, HS) {
      return "active" === DS(SS, HS).kind
    }

    function DS(SS, HS) {
      var gS;
      return null === SS ? {
        kind: "none",
        reason: "nothingStored"
      } : ZS(SS) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.ok) || SS.validation.fromRecheck ? null === HS ? {
        kind: "none",
        reason: "noCompiler"
      } : OS(SS, HS) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : SS.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function wS() {
      XS.h.setItem(uS, performance.timeOrigin)
    }

    function hS() {
      return XS.h.getItem(uS) === performance.timeOrigin
    }

    function ZS(SS) {
      return !(0, bS.j)(SS.manifest.apiVersion)
    }

    function JS(SS) {
      return IS ??= SS.dL((0, qS.shaderPackTextures)()), IS
    }

    function OS(SS, HS) {
      var gS;
      return (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.headerVersion) !== JS(HS)
    }

    function dS(SS) {
      return KS((async () => {
        vS(await (0, NS.f)(!0), SS)
      }))
    }

    function cS() {
      return KS((async () => {
        XS.g.removeItem(xS.d)
      }))
    }

    function vS(SS, HS) {
      QS(SS, HS) ? XS.g.setItem(xS.d, !0) : XS.g.removeItem(xS.d)
    }
  },
  6824: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      loadShaderPackTextures: () => xS,
      shaderPackTextures: () => NS
    });
    var tS = gS(5221);
    let bS = null,
      XS = null;

    function xS() {
      return XS ??= Promise.all([gS.e(72), gS.e(188)]).then((() => gS(40526))).then((SS => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: HS,
          textureNameToIndex: gS,
          textureAnimationData: XS
        } = SS;
        return bS ??= (0, tS.j)(gS, XS, HS), bS
      })), XS
    }

    function NS() {
      if (null === bS) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return bS
    }
  },
  6839: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => qS,
      g: () => NS
    });
    var tS = gS(6844),
      bS = gS(6824),
      XS = gS(122);
    const xS = 100;
    async function NS(SS, HS) {
      var gS;
      let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (gS = navigator.gpu) && void 0 !== gS ? gS : null;
      const xS = SS.f6(HS, (0, bS.shaderPackTextures)());
      if (xS.errors.length > 0) return uS(SS, xS.errors, xS.offInStrict);
      const NS = await async function(SS) {
        if (!SS) return null;
        try {
          const HS = await (0, XS.x)(SS);
          return HS ? await HS.requestDevice() : null
        } catch (HS) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", HS), null
        }
      }(tS);
      if (!NS) return null;
      let qS = !1;
      NS.lost.then((() => {
        qS = !0
      }));
      try {
        const HS = await Promise.all(xS.validationModules.map((HS => async function(SS, HS, gS) {
          HS.pushErrorScope("validation");
          const tS = HS.createShaderModule({
              code: gS.code
            }),
            bS = HS.popErrorScope(),
            {
              messages: XS
            } = await tS.getCompilationInfo(),
            xS = XS.filter((SS => "error" === SS.type)).map((HS => SS.mapValidationMessage(gS, HS))),
            NS = await bS;
          NS && 0 === xS.length && xS.push({
            file: null,
            line: 0,
            message: NS.message,
            variants: [gS.key]
          });
          return xS
        }(SS, NS, HS))));
        return qS ? null : uS(SS, SS.VgS(HS.flat()), xS.offInStrict)
      } catch (IS) {
        return console.error("Couldn't validate the shader pack on WebGPU.", IS), null
      } finally {
        NS.destroy()
      }
    }
    async function qS(SS, HS) {
      var gS;
      if (!(0, tS.shaderPackNeedsCheck)(SS, HS) || (0, tS.isOtherApiVersion)(SS)) return SS;
      const bS = await NS(HS, (0, tS.storedShaderPackFiles)(SS));
      if (!bS) return SS;
      const XS = !1 === (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.ok) && !SS.validation.fromRecheck,
        xS = {
          ...SS,
          validation: XS ? bS : {
            ...bS,
            fromRecheck: !0
          }
        };
      return await (0, tS.replaceShaderPack)(SS, xS, HS) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), xS
    }

    function uS(SS, HS, gS) {
      return {
        headerVersion: (0, tS.pageShaderPackValidationVersion)(SS),
        ok: 0 === HS.length,
        errors: HS.slice(0, xS),
        moreErrors: Math.max(0, HS.length - xS),
        offInStrict: gS
      }
    }
  },
  6760: (SS, HS, gS) => {
    gS.d(HS, {
      C: () => XS,
      E: () => NS,
      I: () => xS,
      K: () => tS,
      M: () => kS,
      Q: () => IS,
      R: () => QS,
      T: () => fS,
      V: () => uS,
      e: () => KS,
      h: () => GS,
      i: () => jS,
      m: () => aS,
      q: () => PS,
      u: () => wS,
      v: () => qS,
      w: () => bS,
      z: () => DS
    });
    const tS = ["forest", "desert", "water", "night", "cave"];
    const bS = {
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
      XS = ["popular", "updated", "newest"],
      xS = 3,
      NS = 32,
      qS = 300;

    function uS(SS, HS) {
      return SS.slice(0, HS).replace(/[\uD800-\uDBFF]$/, "")
    }
    const IS = 64,
      fS = 512,
      kS = 18e5;

    function aS(SS) {
      const HS = SS,
        gS = null === HS || void 0 === HS ? void 0 : HS.files;
      return "number" === typeof(null === HS || void 0 === HS ? void 0 : HS.apiVersion) && "string" === typeof HS.name && (null === HS.author || "string" === typeof HS.author) && (void 0 === HS.keepCircleShadows || "boolean" === typeof HS.keepCircleShadows) && "object" === typeof gS && null !== gS && Object.values(gS).every((SS => "string" === typeof SS))
    }
    const KS = "Bloxdhub",
      jS = "https://bloxdhub.com/shaders";

    function GS(SS) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(SS)}`
    }
    const CS = "Screenshot generation failed.",
      nS = "Its screenshots couldn't be generated:";

    function PS(SS) {
      var HS;
      return SS === CS || null !== (HS = null === SS || void 0 === SS ? void 0 : SS.startsWith(nS)) && void 0 !== HS && HS
    }

    function QS(SS, HS) {
      return `shaderPacks/${SS}/${HS}.json`
    }

    function DS(SS, HS, gS, tS) {
      return null === HS.renderId ? wS(SS, HS.baselineVersion, gS, tS) : `${SS}/${function(SS,HS,gS,tS){return`shaderPacks/${SS}/${HS}/${gS}-${tS}.webp`}(HS.packId,HS.renderId,gS,tS)}`
    }

    function wS(SS, HS, gS, tS) {
      return `${SS}/${function(SS,HS,gS){return`shaderPacks/baseline/${SS}/${HS}-${gS}.webp`}(HS,gS,tS)}`
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);