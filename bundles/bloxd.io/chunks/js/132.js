export const id = 132;
export const ids = [132, 138, 139];
export const modules = {
  40874: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => pG,
      installListedShaderPack: () => VG
    });
    var wG = ZG(6561),
      SG = ZG(5062),
      LG = ZG(1163),
      yG = ZG(6608),
      kG = ZG(5055),
      UG = ZG(6653),
      YG = ZG(6645);
    async function VG(GG) {
      const bG = await (0, yG.loadPageShaderPackCompiler)();
      if (null === bG) return {
        kind: "failed",
        reason: "compiler"
      };
      const ZG = await pG(GG, bG);
      return "failed" === ZG.kind ? ZG : await (0, UG.saveShaderPack)(ZG.stored, bG) ? ((0, UG.markShaderPackChangePending)(), ZG) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function pG(GG, bG) {
      const ZG = await async function(GG) {
        let {
          packId: bG,
          sourceHash: ZG
        } = GG;
        try {
          const GG = await fetch(`${LG.clientSideServerUrls.s3Url}/${(0,wG.O)(bG,ZG)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!GG.ok) return console.error(`Failed to download shader pack ${bG} (${GG.status})`), null;
          const SG = await GG.json();
          return "object" !== typeof SG || null === SG ? (console.error(`Shader pack ${bG}'s source isn't an object`), null) : SG
        } catch (SG) {
          return console.error(`Failed to download shader pack ${bG}`, SG), null
        }
      }(GG);
      if (null === ZG) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, kG.g)(ZG.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const yG = (0, SG.u)(ZG.files);
      if ("string" === typeof yG) return console.error(`A listed shader pack breaks the pack rules: ${yG}`), {
        kind: "failed",
        reason: "invalid"
      };
      const VG = await (0, YG.g)(bG, yG);
      if (!1 === (null === VG || void 0 === VG ? void 0 : VG.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const pG = {
        manifest: {
          apiVersion: ZG.apiVersion,
          name: GG.name,
          author: GG.ownerName,
          description: GG.description || null,
          keepCircleShadows: !0 === ZG.keepCircleShadows
        },
        files: yG
      };
      return {
        kind: "loaded",
        stored: (0, UG.toStoredShaderPack)(pG, VG, {
          packId: GG.packId,
          sourceHash: GG.sourceHash
        })
      }
    }
  },
  41713: (GG, bG, ZG) => {
    ZG.d(bG, {
      followListingUpdates: () => fG
    });
    var wG = ZG(200),
      SG = ZG(17),
      LG = ZG(1431),
      yG = ZG(1096),
      kG = ZG(6608),
      UG = ZG(5055),
      YG = ZG(40874),
      VG = ZG(6653);
    const pG = ["apiVersion", "invalid", "errors"];
    async function fG(GG, bG) {
      const ZG = await yG.userContextManager.getCurrentUserContext(),
        fG = await LG.d.getShaderPackVersions(ZG, [bG.packId]),
        QG = function(GG, bG, ZG) {
          var wG;
          if (void 0 === ZG || "unlisted" === ZG.status) return {
            kind: "none"
          };
          if ("banned" === ZG.status) return {
            kind: "remove"
          };
          if (!(0, UG.g)(ZG.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: SG,
            name: LG,
            ownerName: yG,
            description: kG
          } = ZG;
          return SG !== bG.sourceHash && SG !== bG.rejectedSourceHash ? {
            kind: "update",
            sourceHash: SG,
            name: LG,
            ownerName: yG,
            description: kG
          } : LG !== GG.manifest.name || yG !== GG.manifest.author || (kG || null) !== (null !== (wG = GG.manifest.description) && void 0 !== wG ? wG : null) ? {
            kind: "rename",
            name: LG,
            ownerName: yG,
            description: kG
          } : {
            kind: "none"
          }
        }(GG, bG, (0, wG.c)(fG, bG.packId));
      if ("update" === QG.kind && "landingPage" !== SG.e.get("gameState")) return !1;
      const KG = "update" === QG.kind || "rename" === QG.kind,
        hG = KG ? await (0, kG.loadPageShaderPackCompiler)() : null;
      if (KG && null === hG) return console.warn(`Didn't follow shader pack ${bG.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const dG = await async function(GG, bG, ZG, wG) {
        switch (ZG.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...GG, manifest: {
                ...GG.manifest,
                name: ZG.name,
                author: ZG.ownerName,
                description: ZG.description || null
              }
            };
          case "update": {
            if (null === wG) return;
            const {
              sourceHash: SG,
              name: LG,
              ownerName: yG,
              description: kG
            } = ZG, UG = await (0, YG.c)({
              packId: bG.packId,
              sourceHash: SG,
              name: LG,
              ownerName: yG,
              description: kG
            }, wG);
            if ("loaded" === UG.kind && null !== UG.stored.validation) return UG.stored;
            const VG = "failed" === UG.kind ? UG.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${bG.packId}: ${VG}`), "failed" === UG.kind && pG.includes(UG.reason) ? {
              ...GG,
              listing: {
                ...bG,
                rejectedSourceHash: SG
              }
            } : void 0
          }
        }
      }(GG, bG, QG, hG);
      return void 0 === dG || (await (0, VG.replaceShaderPack)(GG, dG, hG) ? (null !== dG && dG.files === GG.files || (0, VG.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6653: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      forgetShaderPackActiveHint: () => IG,
      isOtherApiVersion: () => iG,
      isShaderPackActive: () => EG,
      isShaderPackChangePending: () => uG,
      markShaderPackChangePending: () => XG,
      pageShaderPackValidationVersion: () => CG,
      reconcileStoredShaderPackHint: () => mG,
      removeShaderPack: () => zG,
      replaceShaderPack: () => dG,
      saveShaderPack: () => hG,
      shaderPackNeedsCheck: () => WG,
      storedPackOutcome: () => oG,
      storedShaderPackFiles: () => fG,
      toStoredShaderPack: () => pG
    });
    var wG = ZG(5062),
      SG = ZG(5055),
      LG = ZG(29),
      yG = ZG(3441),
      kG = ZG(6661),
      UG = ZG(6627);
    const YG = "shaderPackChangePending";
    let VG = null;

    function pG(GG, bG, ZG) {
      return {
        manifest: GG.manifest,
        files: (0, wG.y)(GG.files),
        validation: bG,
        ...ZG && {
          listing: ZG
        }
      }
    }

    function fG(GG) {
      return Object.keys(GG.files).map((bG => ({
        path: bG,
        source: GG.files[bG]
      })))
    }
    let QG = Promise.resolve();

    function KG(GG) {
      const bG = QG.then(GG);
      return QG = bG.catch((() => {})), bG
    }

    function hG(GG, bG) {
      return KG((() => JG(GG, bG)))
    }

    function dG(GG, bG, ZG) {
      return KG((async () => JSON.stringify(await (0, kG.e)()) === JSON.stringify(GG) && (null === bG ? (await rG(), !0) : JG(bG, ZG))))
    }
    async function JG(GG, bG) {
      const ZG = await LG.e.setItem(kG.b, GG);
      return ZG && FG(GG, bG), ZG
    }
    async function rG() {
      await LG.e.removeItem(kG.b), LG.h.removeItem(yG.d)
    }

    function zG() {
      return KG(rG)
    }

    function EG(GG, bG) {
      return "active" === oG(GG, bG).kind
    }

    function oG(GG, bG) {
      var ZG;
      return null === GG ? {
        kind: "none",
        reason: "nothingStored"
      } : iG(GG) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.ok) || GG.validation.fromRecheck ? null === bG ? {
        kind: "none",
        reason: "noCompiler"
      } : WG(GG, bG) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : GG.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function XG() {
      LG.l.setItem(YG, performance.timeOrigin)
    }

    function uG() {
      return LG.l.getItem(YG) === performance.timeOrigin
    }

    function iG(GG) {
      return !(0, SG.g)(GG.manifest.apiVersion)
    }

    function CG(GG) {
      return VG ??= GG.sF((0, UG.shaderPackTextures)()), VG
    }

    function WG(GG, bG) {
      var ZG;
      return (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.headerVersion) !== CG(bG)
    }

    function mG(GG) {
      return KG((async () => {
        FG(await (0, kG.e)(!0), GG)
      }))
    }

    function IG() {
      return KG((async () => {
        LG.h.removeItem(yG.d)
      }))
    }

    function FG(GG, bG) {
      EG(GG, bG) ? LG.h.setItem(yG.d, !0) : LG.h.removeItem(yG.d)
    }
  },
  6627: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      loadShaderPackTextures: () => yG,
      shaderPackTextures: () => kG
    });
    var wG = ZG(5062);
    let SG = null,
      LG = null;

    function yG() {
      return LG ??= Promise.all([ZG.e(73), ZG.e(190)]).then((() => ZG(40868))).then((GG => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: bG,
          textureNameToIndex: ZG,
          textureAnimationData: LG
        } = GG;
        return SG ??= (0, wG.j)(ZG, LG, bG), SG
      })), LG
    }

    function kG() {
      if (null === SG) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return SG
    }
  },
  6645: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => UG,
      g: () => kG
    });
    var wG = ZG(6653),
      SG = ZG(6627),
      LG = ZG(101);
    const yG = 100;
    async function kG(GG, bG) {
      var ZG;
      let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZG = navigator.gpu) && void 0 !== ZG ? ZG : null;
      const yG = GG.EGG(bG, (0, SG.shaderPackTextures)());
      if (yG.errors.length > 0) return YG(GG, yG.errors, yG.offInStrict);
      const kG = await async function(GG) {
        if (!GG) return null;
        try {
          const bG = await (0, LG.r)(GG);
          return bG ? await bG.requestDevice() : null
        } catch (bG) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", bG), null
        }
      }(wG);
      if (!kG) return null;
      let UG = !1;
      kG.lost.then((() => {
        UG = !0
      }));
      try {
        const bG = await Promise.all(yG.validationModules.map((bG => async function(GG, bG, ZG) {
          bG.pushErrorScope("validation");
          const wG = bG.createShaderModule({
              code: ZG.code
            }),
            SG = bG.popErrorScope(),
            {
              messages: LG
            } = await wG.getCompilationInfo(),
            yG = LG.filter((GG => "error" === GG.type)).map((bG => GG.mapValidationMessage(ZG, bG))),
            kG = await SG;
          kG && 0 === yG.length && yG.push({
            file: null,
            line: 0,
            message: kG.message,
            variants: [ZG.key]
          });
          return yG
        }(GG, kG, bG))));
        return UG ? null : YG(GG, GG.QwG(bG.flat()), yG.offInStrict)
      } catch (VG) {
        return console.error("Couldn't validate the shader pack on WebGPU.", VG), null
      } finally {
        kG.destroy()
      }
    }
    async function UG(GG, bG) {
      var ZG;
      if (!(0, wG.shaderPackNeedsCheck)(GG, bG) || (0, wG.isOtherApiVersion)(GG)) return GG;
      const SG = await kG(bG, (0, wG.storedShaderPackFiles)(GG));
      if (!SG) return GG;
      const LG = !1 === (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.ok) && !GG.validation.fromRecheck,
        yG = {
          ...GG,
          validation: LG ? SG : {
            ...SG,
            fromRecheck: !0
          }
        };
      return await (0, wG.replaceShaderPack)(GG, yG, bG) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), yG
    }

    function YG(GG, bG, ZG) {
      return {
        headerVersion: (0, wG.pageShaderPackValidationVersion)(GG),
        ok: 0 === bG.length,
        errors: bG.slice(0, yG),
        moreErrors: Math.max(0, bG.length - yG),
        offInStrict: ZG
      }
    }
  },
  6561: (GG, bG, ZG) => {
    ZG.d(bG, {
      B: () => kG,
      C: () => yG,
      F: () => wG,
      G: () => fG,
      K: () => VG,
      O: () => EG,
      S: () => pG,
      T: () => YG,
      b: () => KG,
      c: () => dG,
      e: () => hG,
      h: () => QG,
      l: () => zG,
      n: () => XG,
      q: () => UG,
      u: () => SG,
      v: () => oG,
      z: () => LG
    });
    const wG = ["forest", "desert", "water", "night", "cave"];
    const SG = {
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
      LG = ["popular", "updated", "newest"],
      yG = 3,
      kG = 32,
      UG = 300;

    function YG(GG, bG) {
      return GG.slice(0, bG).replace(/[\uD800-\uDBFF]$/, "")
    }
    const VG = 64,
      pG = 512,
      fG = 18e5;

    function QG(GG) {
      const bG = GG,
        ZG = null === bG || void 0 === bG ? void 0 : bG.files;
      return "number" === typeof(null === bG || void 0 === bG ? void 0 : bG.apiVersion) && "string" === typeof bG.name && (null === bG.author || "string" === typeof bG.author) && (void 0 === bG.keepCircleShadows || "boolean" === typeof bG.keepCircleShadows) && "object" === typeof ZG && null !== ZG && Object.values(ZG).every((GG => "string" === typeof GG))
    }
    const KG = "Bloxdhub",
      hG = "https://bloxdhub.com/shaders";

    function dG(GG) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(GG)}`
    }
    const JG = "Screenshot generation failed.",
      rG = "Its screenshots couldn't be generated:";

    function zG(GG) {
      var bG;
      return GG === JG || null !== (bG = null === GG || void 0 === GG ? void 0 : GG.startsWith(rG)) && void 0 !== bG && bG
    }

    function EG(GG, bG) {
      return `shaderPacks/${GG}/${bG}.json`
    }

    function oG(GG, bG, ZG, wG) {
      return null === bG.renderId ? XG(GG, bG.baselineVersion, ZG, wG) : `${GG}/${function(GG,bG,ZG,wG){return`shaderPacks/${GG}/${bG}/${ZG}-${wG}.webp`}(bG.packId,bG.renderId,ZG,wG)}`
    }

    function XG(GG, bG, ZG, wG) {
      return `${GG}/${function(GG,bG,ZG){return`shaderPacks/baseline/${GG}/${bG}-${ZG}.webp`}(bG,ZG,wG)}`
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);