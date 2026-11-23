export const id = 130;
export const ids = [130, 136, 137];
export const modules = {
  40318: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => WC,
      installListedShaderPack: () => FC
    });
    var QC = ZC(6560),
      wC = ZC(5002),
      bC = ZC(1149),
      nC = ZC(6609),
      fC = ZC(4998),
      oC = ZC(6658),
      qC = ZC(6651);
    async function FC(CC) {
      const zC = await (0, nC.loadPageShaderPackCompiler)();
      if (null === zC) return {
        kind: "failed",
        reason: "compiler"
      };
      const ZC = await WC(CC, zC);
      return "failed" === ZC.kind ? ZC : await (0, oC.saveShaderPack)(ZC.stored, zC) ? ((0, oC.markShaderPackChangePending)(), ZC) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function WC(CC, zC) {
      const ZC = await async function(CC) {
        let {
          packId: zC,
          sourceHash: ZC
        } = CC;
        try {
          const CC = await fetch(`${bC.clientSideServerUrls.s3Url}/${(0,QC.J)(zC,ZC)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!CC.ok) return console.error(`Failed to download shader pack ${zC} (${CC.status})`), null;
          const wC = await CC.json();
          return "object" !== typeof wC || null === wC ? (console.error(`Shader pack ${zC}'s source isn't an object`), null) : wC
        } catch (wC) {
          return console.error(`Failed to download shader pack ${zC}`, wC), null
        }
      }(CC);
      if (null === ZC) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, fC.i)(ZC.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const nC = (0, wC.s)(ZC.files);
      if ("string" === typeof nC) return console.error(`A listed shader pack breaks the pack rules: ${nC}`), {
        kind: "failed",
        reason: "invalid"
      };
      const FC = await (0, qC.c)(zC, nC);
      if (!1 === (null === FC || void 0 === FC ? void 0 : FC.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const WC = {
        manifest: {
          apiVersion: ZC.apiVersion,
          name: CC.name,
          author: CC.ownerName,
          description: CC.description || null,
          keepCircleShadows: !0 === ZC.keepCircleShadows
        },
        files: nC
      };
      return {
        kind: "loaded",
        stored: (0, oC.toStoredShaderPack)(WC, FC, {
          packId: CC.packId,
          sourceHash: CC.sourceHash
        })
      }
    }
  },
  41111: (CC, zC, ZC) => {
    ZC.d(zC, {
      followListingUpdates: () => NC
    });
    var QC = ZC(191),
      wC = ZC(20),
      bC = ZC(1439),
      nC = ZC(1078),
      fC = ZC(6609),
      oC = ZC(4998),
      qC = ZC(40318),
      FC = ZC(6658);
    const WC = ["apiVersion", "invalid", "errors"];
    async function NC(CC, zC) {
      const ZC = await nC.userContextManager.getCurrentUserContext(),
        NC = await bC.d.getShaderPackVersions(ZC, [zC.packId]),
        MC = function(CC, zC, ZC) {
          var QC;
          if (void 0 === ZC || "unlisted" === ZC.status) return {
            kind: "none"
          };
          if ("banned" === ZC.status) return {
            kind: "remove"
          };
          if (!(0, oC.i)(ZC.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: wC,
            name: bC,
            ownerName: nC,
            description: fC
          } = ZC;
          return wC !== zC.sourceHash && wC !== zC.rejectedSourceHash ? {
            kind: "update",
            sourceHash: wC,
            name: bC,
            ownerName: nC,
            description: fC
          } : bC !== CC.manifest.name || nC !== CC.manifest.author || (fC || null) !== (null !== (QC = CC.manifest.description) && void 0 !== QC ? QC : null) ? {
            kind: "rename",
            name: bC,
            ownerName: nC,
            description: fC
          } : {
            kind: "none"
          }
        }(CC, zC, (0, QC.d)(NC, zC.packId));
      if ("update" === MC.kind && "landingPage" !== wC.b.get("gameState")) return !1;
      const gC = "update" === MC.kind || "rename" === MC.kind,
        SC = gC ? await (0, fC.loadPageShaderPackCompiler)() : null;
      if (gC && null === SC) return console.warn(`Didn't follow shader pack ${zC.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const pC = await async function(CC, zC, ZC, QC) {
        switch (ZC.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...CC, manifest: {
                ...CC.manifest,
                name: ZC.name,
                author: ZC.ownerName,
                description: ZC.description || null
              }
            };
          case "update": {
            if (null === QC) return;
            const {
              sourceHash: wC,
              name: bC,
              ownerName: nC,
              description: fC
            } = ZC, oC = await (0, qC.c)({
              packId: zC.packId,
              sourceHash: wC,
              name: bC,
              ownerName: nC,
              description: fC
            }, QC);
            if ("loaded" === oC.kind && null !== oC.stored.validation) return oC.stored;
            const FC = "failed" === oC.kind ? oC.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${zC.packId}: ${FC}`), "failed" === oC.kind && WC.includes(oC.reason) ? {
              ...CC,
              listing: {
                ...zC,
                rejectedSourceHash: wC
              }
            } : void 0
          }
        }
      }(CC, zC, MC, SC);
      return void 0 === pC || (await (0, FC.replaceShaderPack)(CC, pC, SC) ? (null !== pC && pC.files === CC.files || (0, FC.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6658: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      forgetShaderPackActiveHint: () => KC,
      isOtherApiVersion: () => iC,
      isShaderPackActive: () => AC,
      isShaderPackChangePending: () => IC,
      markShaderPackChangePending: () => JC,
      pageShaderPackValidationVersion: () => vC,
      reconcileStoredShaderPackHint: () => hC,
      removeShaderPack: () => RC,
      replaceShaderPack: () => pC,
      saveShaderPack: () => SC,
      shaderPackNeedsCheck: () => eC,
      storedPackOutcome: () => xC,
      storedShaderPackFiles: () => NC,
      toStoredShaderPack: () => WC
    });
    var QC = ZC(5002),
      wC = ZC(4998),
      bC = ZC(38),
      nC = ZC(3432),
      fC = ZC(6660),
      oC = ZC(6630);
    const qC = "shaderPackChangePending";
    let FC = null;

    function WC(CC, zC, ZC) {
      return {
        manifest: CC.manifest,
        files: (0, QC.w)(CC.files),
        validation: zC,
        ...ZC && {
          listing: ZC
        }
      }
    }

    function NC(CC) {
      return Object.keys(CC.files).map((zC => ({
        path: zC,
        source: CC.files[zC]
      })))
    }
    let MC = Promise.resolve();

    function gC(CC) {
      const zC = MC.then(CC);
      return MC = zC.catch((() => {})), zC
    }

    function SC(CC, zC) {
      return gC((() => PC(CC, zC)))
    }

    function pC(CC, zC, ZC) {
      return gC((async () => JSON.stringify(await (0, fC.e)()) === JSON.stringify(CC) && (null === zC ? (await GC(), !0) : PC(zC, ZC))))
    }
    async function PC(CC, zC) {
      const ZC = await bC.g.setItem(fC.c, CC);
      return ZC && YC(CC, zC), ZC
    }
    async function GC() {
      await bC.g.removeItem(fC.c), bC.i.removeItem(nC.b)
    }

    function RC() {
      return gC(GC)
    }

    function AC(CC, zC) {
      return "active" === xC(CC, zC).kind
    }

    function xC(CC, zC) {
      var ZC;
      return null === CC ? {
        kind: "none",
        reason: "nothingStored"
      } : iC(CC) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.ok) || CC.validation.fromRecheck ? null === zC ? {
        kind: "none",
        reason: "noCompiler"
      } : eC(CC, zC) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : CC.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function JC() {
      bC.k.setItem(qC, performance.timeOrigin)
    }

    function IC() {
      return bC.k.getItem(qC) === performance.timeOrigin
    }

    function iC(CC) {
      return !(0, wC.i)(CC.manifest.apiVersion)
    }

    function vC(CC) {
      return FC ??= CC.Rm((0, oC.shaderPackTextures)()), FC
    }

    function eC(CC, zC) {
      var ZC;
      return (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.headerVersion) !== vC(zC)
    }

    function hC(CC) {
      return gC((async () => {
        YC(await (0, fC.e)(!0), CC)
      }))
    }

    function KC() {
      return gC((async () => {
        bC.i.removeItem(nC.b)
      }))
    }

    function YC(CC, zC) {
      AC(CC, zC) ? bC.i.setItem(nC.b, !0) : bC.i.removeItem(nC.b)
    }
  },
  6630: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      loadShaderPackTextures: () => nC,
      shaderPackTextures: () => fC
    });
    var QC = ZC(5002);
    let wC = null,
      bC = null;

    function nC() {
      return bC ??= Promise.all([ZC.e(72), ZC.e(188)]).then((() => ZC(40313))).then((CC => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: zC,
          textureNameToIndex: ZC,
          textureAnimationData: bC
        } = CC;
        return wC ??= (0, QC.k)(ZC, bC, zC), wC
      })), bC
    }

    function fC() {
      if (null === wC) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return wC
    }
  },
  6651: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => oC,
      c: () => fC
    });
    var QC = ZC(6658),
      wC = ZC(6630),
      bC = ZC(94);
    const nC = 100;
    async function fC(CC, zC) {
      var ZC;
      let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZC = navigator.gpu) && void 0 !== ZC ? ZC : null;
      const nC = CC.K3(zC, (0, wC.shaderPackTextures)());
      if (nC.errors.length > 0) return qC(CC, nC.errors, nC.offInStrict);
      const fC = await async function(CC) {
        if (!CC) return null;
        try {
          const zC = await (0, bC.z)(CC);
          return zC ? await zC.requestDevice() : null
        } catch (zC) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", zC), null
        }
      }(QC);
      if (!fC) return null;
      let oC = !1;
      fC.lost.then((() => {
        oC = !0
      }));
      try {
        const zC = await Promise.all(nC.validationModules.map((zC => async function(CC, zC, ZC) {
          zC.pushErrorScope("validation");
          const QC = zC.createShaderModule({
              code: ZC.code
            }),
            wC = zC.popErrorScope(),
            {
              messages: bC
            } = await QC.getCompilationInfo(),
            nC = bC.filter((CC => "error" === CC.type)).map((zC => CC.mapValidationMessage(ZC, zC))),
            fC = await wC;
          fC && 0 === nC.length && nC.push({
            file: null,
            line: 0,
            message: fC.message,
            variants: [ZC.key]
          });
          return nC
        }(CC, fC, zC))));
        return oC ? null : qC(CC, CC.rZC(zC.flat()), nC.offInStrict)
      } catch (FC) {
        return console.error("Couldn't validate the shader pack on WebGPU.", FC), null
      } finally {
        fC.destroy()
      }
    }
    async function oC(CC, zC) {
      var ZC;
      if (!(0, QC.shaderPackNeedsCheck)(CC, zC) || (0, QC.isOtherApiVersion)(CC)) return CC;
      const wC = await fC(zC, (0, QC.storedShaderPackFiles)(CC));
      if (!wC) return CC;
      const bC = !1 === (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.ok) && !CC.validation.fromRecheck,
        nC = {
          ...CC,
          validation: bC ? wC : {
            ...wC,
            fromRecheck: !0
          }
        };
      return await (0, QC.replaceShaderPack)(CC, nC, zC) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), nC
    }

    function qC(CC, zC, ZC) {
      return {
        headerVersion: (0, QC.pageShaderPackValidationVersion)(CC),
        ok: 0 === zC.length,
        errors: zC.slice(0, nC),
        moreErrors: Math.max(0, zC.length - nC),
        offInStrict: ZC
      }
    }
  },
  6560: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => nC,
      B: () => QC,
      E: () => NC,
      G: () => FC,
      J: () => AC,
      L: () => WC,
      P: () => qC,
      b: () => gC,
      e: () => pC,
      f: () => SC,
      g: () => MC,
      i: () => RC,
      m: () => JC,
      o: () => oC,
      s: () => wC,
      w: () => xC,
      x: () => bC,
      y: () => fC
    });
    const QC = ["forest", "desert", "water", "night", "cave"];
    const wC = {
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
      bC = ["popular", "updated", "newest"],
      nC = 3,
      fC = 32,
      oC = 300;

    function qC(CC, zC) {
      return CC.slice(0, zC).replace(/[\uD800-\uDBFF]$/, "")
    }
    const FC = 64,
      WC = 512,
      NC = 18e5;

    function MC(CC) {
      const zC = CC,
        ZC = null === zC || void 0 === zC ? void 0 : zC.files;
      return "number" === typeof(null === zC || void 0 === zC ? void 0 : zC.apiVersion) && "string" === typeof zC.name && (null === zC.author || "string" === typeof zC.author) && (void 0 === zC.keepCircleShadows || "boolean" === typeof zC.keepCircleShadows) && "object" === typeof ZC && null !== ZC && Object.values(ZC).every((CC => "string" === typeof CC))
    }
    const gC = "Bloxdhub",
      SC = "https://bloxdhub.com/shaders";

    function pC(CC) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(CC)}`
    }
    const PC = "Screenshot generation failed.",
      GC = "Its screenshots couldn't be generated:";

    function RC(CC) {
      var zC;
      return CC === PC || null !== (zC = null === CC || void 0 === CC ? void 0 : CC.startsWith(GC)) && void 0 !== zC && zC
    }

    function AC(CC, zC) {
      return `shaderPacks/${CC}/${zC}.json`
    }

    function xC(CC, zC, ZC, QC) {
      return null === zC.renderId ? JC(CC, zC.baselineVersion, ZC, QC) : `${CC}/${function(CC,zC,ZC,QC){return`shaderPacks/${CC}/${zC}/${ZC}-${QC}.webp`}(zC.packId,zC.renderId,ZC,QC)}`
    }

    function JC(CC, zC, ZC, QC) {
      return `${CC}/${function(CC,zC,ZC){return`shaderPacks/baseline/${CC}/${zC}-${ZC}.webp`}(zC,ZC,QC)}`
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);