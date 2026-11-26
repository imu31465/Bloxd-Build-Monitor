export const id = 143;
export const ids = [143, 150, 151];
export const modules = {
  41575: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => YU,
      installListedShaderPack: () => EU
    });
    var cU = zU(7158),
      yU = zU(5608),
      QU = zU(1203),
      AU = zU(7209),
      FU = zU(5603),
      oU = zU(7251),
      DU = zU(7242);
    async function EU(UU) {
      const XU = await (0, AU.loadPageShaderPackCompiler)();
      if (null === XU) return {
        kind: "failed",
        reason: "compiler"
      };
      const zU = await YU(UU, XU);
      return "failed" === zU.kind ? zU : await (0, oU.saveShaderPack)(zU.stored, XU) ? ((0, oU.markShaderPackChangePending)(), zU) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function YU(UU, XU) {
      const zU = await async function(UU) {
        let {
          packId: XU,
          sourceHash: zU
        } = UU;
        try {
          const UU = await fetch(`${QU.clientSideServerUrls.s3Url}/${(0,cU.M)(XU,zU)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!UU.ok) return console.error(`Failed to download shader pack ${XU} (${UU.status})`), null;
          const yU = await UU.json();
          return "object" !== typeof yU || null === yU ? (console.error(`Shader pack ${XU}'s source isn't an object`), null) : yU
        } catch (yU) {
          return console.error(`Failed to download shader pack ${XU}`, yU), null
        }
      }(UU);
      if (null === zU) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, FU.i)(zU.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const AU = (0, yU.r)(zU.files);
      if ("string" === typeof AU) return console.error(`A listed shader pack breaks the pack rules: ${AU}`), {
        kind: "failed",
        reason: "invalid"
      };
      const EU = await (0, DU.h)(XU, AU);
      if (!1 === (null === EU || void 0 === EU ? void 0 : EU.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const YU = {
        manifest: {
          apiVersion: zU.apiVersion,
          name: UU.name,
          author: UU.ownerName,
          description: UU.description || null,
          keepCircleShadows: !0 === zU.keepCircleShadows
        },
        files: AU
      };
      return {
        kind: "loaded",
        stored: (0, oU.toStoredShaderPack)(YU, EU, {
          packId: UU.packId,
          sourceHash: UU.sourceHash
        })
      }
    }
  },
  43994: (UU, XU, zU) => {
    zU.d(XU, {
      followListingUpdates: () => NU
    });
    var cU = zU(220),
      yU = zU(27),
      QU = zU(1545),
      AU = zU(1131),
      FU = zU(7209),
      oU = zU(5603),
      DU = zU(41575),
      EU = zU(7251);
    const YU = ["apiVersion", "invalid", "errors"];
    async function NU(UU, XU) {
      const zU = await AU.userContextManager.getCurrentUserContext(),
        NU = await QU.c.getShaderPackVersions(zU, [XU.packId]),
        IU = function(UU, XU, zU) {
          var cU;
          if (void 0 === zU || "unlisted" === zU.status) return {
            kind: "none"
          };
          if ("banned" === zU.status) return {
            kind: "remove"
          };
          if (!(0, oU.i)(zU.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: yU,
            name: QU,
            ownerName: AU,
            description: FU
          } = zU;
          return yU !== XU.sourceHash && yU !== XU.rejectedSourceHash ? {
            kind: "update",
            sourceHash: yU,
            name: QU,
            ownerName: AU,
            description: FU
          } : QU !== UU.manifest.name || AU !== UU.manifest.author || (FU || null) !== (null !== (cU = UU.manifest.description) && void 0 !== cU ? cU : null) ? {
            kind: "rename",
            name: QU,
            ownerName: AU,
            description: FU
          } : {
            kind: "none"
          }
        }(UU, XU, (0, cU.b)(NU, XU.packId));
      if ("update" === IU.kind && "landingPage" !== yU.e.get("gameState")) return !1;
      const pU = "update" === IU.kind || "rename" === IU.kind,
        aU = pU ? await (0, FU.loadPageShaderPackCompiler)() : null;
      if (pU && null === aU) return console.warn(`Didn't follow shader pack ${XU.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const tU = await async function(UU, XU, zU, cU) {
        switch (zU.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...UU, manifest: {
                ...UU.manifest,
                name: zU.name,
                author: zU.ownerName,
                description: zU.description || null
              }
            };
          case "update": {
            if (null === cU) return;
            const {
              sourceHash: yU,
              name: QU,
              ownerName: AU,
              description: FU
            } = zU, oU = await (0, DU.b)({
              packId: XU.packId,
              sourceHash: yU,
              name: QU,
              ownerName: AU,
              description: FU
            }, cU);
            if ("loaded" === oU.kind && null !== oU.stored.validation) return oU.stored;
            const EU = "failed" === oU.kind ? oU.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${XU.packId}: ${EU}`), "failed" === oU.kind && YU.includes(oU.reason) ? {
              ...UU,
              listing: {
                ...XU,
                rejectedSourceHash: yU
              }
            } : void 0
          }
        }
      }(UU, XU, IU, aU);
      return void 0 === tU || (await (0, EU.replaceShaderPack)(UU, tU, aU) ? (null !== tU && tU.files === UU.files || (0, EU.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  7251: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      forgetShaderPackActiveHint: () => CU,
      isOtherApiVersion: () => WU,
      isShaderPackActive: () => BU,
      isShaderPackChangePending: () => PU,
      markShaderPackChangePending: () => RU,
      pageShaderPackValidationVersion: () => dU,
      reconcileStoredShaderPackHint: () => eU,
      removeShaderPack: () => GU,
      replaceShaderPack: () => tU,
      saveShaderPack: () => aU,
      shaderPackNeedsCheck: () => LU,
      storedPackOutcome: () => ZU,
      storedShaderPackFiles: () => NU,
      toStoredShaderPack: () => YU
    });
    var cU = zU(5608),
      yU = zU(5603),
      QU = zU(42),
      AU = zU(3849),
      FU = zU(7253),
      oU = zU(7219);
    const DU = "shaderPackChangePending";
    let EU = null;

    function YU(UU, XU, zU) {
      return {
        manifest: UU.manifest,
        files: (0, cU.u)(UU.files),
        validation: XU,
        ...zU && {
          listing: zU
        }
      }
    }

    function NU(UU) {
      return Object.keys(UU.files).map((XU => ({
        path: XU,
        source: UU.files[XU]
      })))
    }
    let IU = Promise.resolve();

    function pU(UU) {
      const XU = IU.then(UU);
      return IU = XU.catch((() => {})), XU
    }

    function aU(UU, XU) {
      return pU((() => gU(UU, XU)))
    }

    function tU(UU, XU, zU) {
      return pU((async () => JSON.stringify(await (0, FU.f)()) === JSON.stringify(UU) && (null === XU ? (await kU(), !0) : gU(XU, zU))))
    }
    async function gU(UU, XU) {
      const zU = await QU.g.setItem(FU.e, UU);
      return zU && wU(UU, XU), zU
    }
    async function kU() {
      await QU.g.removeItem(FU.e), QU.k.removeItem(AU.b)
    }

    function GU() {
      return pU(kU)
    }

    function BU(UU, XU) {
      return "active" === ZU(UU, XU).kind
    }

    function ZU(UU, XU) {
      var zU;
      return null === UU ? {
        kind: "none",
        reason: "nothingStored"
      } : WU(UU) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.ok) || UU.validation.fromRecheck ? null === XU ? {
        kind: "none",
        reason: "noCompiler"
      } : LU(UU, XU) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : UU.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function RU() {
      QU.n.setItem(DU, performance.timeOrigin)
    }

    function PU() {
      return QU.n.getItem(DU) === performance.timeOrigin
    }

    function WU(UU) {
      return !(0, yU.i)(UU.manifest.apiVersion)
    }

    function dU(UU) {
      return EU ??= UU.mq((0, oU.shaderPackTextures)()), EU
    }

    function LU(UU, XU) {
      var zU;
      return (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.headerVersion) !== dU(XU)
    }

    function eU(UU) {
      return pU((async () => {
        wU(await (0, FU.f)(!0), UU)
      }))
    }

    function CU() {
      return pU((async () => {
        QU.k.removeItem(AU.b)
      }))
    }

    function wU(UU, XU) {
      BU(UU, XU) ? QU.k.setItem(AU.b, !0) : QU.k.removeItem(AU.b)
    }
  },
  7219: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      loadShaderPackTextures: () => AU,
      shaderPackTextures: () => FU
    });
    var cU = zU(5608);
    let yU = null,
      QU = null;

    function AU() {
      return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: XU,
          textureNameToIndex: zU,
          textureAnimationData: QU
        } = UU;
        return yU ??= (0, cU.k)(zU, QU, XU), yU
      })), QU
    }

    function FU() {
      if (null === yU) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return yU
    }
  },
  7242: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => oU,
      h: () => FU
    });
    var cU = zU(7251),
      yU = zU(7219),
      QU = zU(123);
    const AU = 100;
    async function FU(UU, XU) {
      var zU;
      let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (zU = navigator.gpu) && void 0 !== zU ? zU : null;
      const AU = UU.bUU(XU, (0, yU.shaderPackTextures)());
      if (AU.errors.length > 0) return DU(UU, AU.errors, AU.offInStrict);
      const FU = await async function(UU) {
        if (!UU) return null;
        try {
          const XU = await (0, QU.q)(UU);
          return XU ? await XU.requestDevice() : null
        } catch (XU) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", XU), null
        }
      }(cU);
      if (!FU) return null;
      let oU = !1;
      FU.lost.then((() => {
        oU = !0
      }));
      try {
        const XU = await Promise.all(AU.validationModules.map((XU => async function(UU, XU, zU) {
          XU.pushErrorScope("validation");
          const cU = XU.createShaderModule({
              code: zU.code
            }),
            yU = XU.popErrorScope(),
            {
              messages: QU
            } = await cU.getCompilationInfo(),
            AU = QU.filter((UU => "error" === UU.type)).map((XU => UU.mapValidationMessage(zU, XU))),
            FU = await yU;
          FU && 0 === AU.length && AU.push({
            file: null,
            line: 0,
            message: FU.message,
            variants: [zU.key]
          });
          return AU
        }(UU, FU, XU))));
        return oU ? null : DU(UU, UU.scU(XU.flat()), AU.offInStrict)
      } catch (EU) {
        return console.error("Couldn't validate the shader pack on WebGPU.", EU), null
      } finally {
        FU.destroy()
      }
    }
    async function oU(UU, XU) {
      var zU;
      if (!(0, cU.shaderPackNeedsCheck)(UU, XU) || (0, cU.isOtherApiVersion)(UU)) return UU;
      const yU = await FU(XU, (0, cU.storedShaderPackFiles)(UU));
      if (!yU) return UU;
      const QU = !1 === (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.ok) && !UU.validation.fromRecheck,
        AU = {
          ...UU,
          validation: QU ? yU : {
            ...yU,
            fromRecheck: !0
          }
        };
      return await (0, cU.replaceShaderPack)(UU, AU, XU) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), AU
    }

    function DU(UU, XU, zU) {
      return {
        headerVersion: (0, cU.pageShaderPackValidationVersion)(UU),
        ok: 0 === XU.length,
        errors: XU.slice(0, AU),
        moreErrors: Math.max(0, XU.length - AU),
        offInStrict: zU
      }
    }
  },
  7158: (UU, XU, zU) => {
    zU.d(XU, {
      B: () => FU,
      C: () => AU,
      E: () => cU,
      H: () => NU,
      I: () => EU,
      M: () => BU,
      N: () => YU,
      O: () => DU,
      c: () => pU,
      f: () => tU,
      h: () => aU,
      i: () => IU,
      l: () => GU,
      o: () => RU,
      r: () => oU,
      s: () => yU,
      v: () => ZU,
      z: () => QU
    });
    const cU = ["forest", "desert", "water", "night", "cave"];
    const yU = {
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
      QU = ["popular", "updated", "newest"],
      AU = 3,
      FU = 32,
      oU = 300;

    function DU(UU, XU) {
      return UU.slice(0, XU).replace(/[\uD800-\uDBFF]$/, "")
    }
    const EU = 64,
      YU = 512,
      NU = 18e5;

    function IU(UU) {
      const XU = UU,
        zU = null === XU || void 0 === XU ? void 0 : XU.files;
      return "number" === typeof(null === XU || void 0 === XU ? void 0 : XU.apiVersion) && "string" === typeof XU.name && (null === XU.author || "string" === typeof XU.author) && (void 0 === XU.keepCircleShadows || "boolean" === typeof XU.keepCircleShadows) && "object" === typeof zU && null !== zU && Object.values(zU).every((UU => "string" === typeof UU))
    }
    const pU = "Bloxdhub",
      aU = "https://bloxdhub.com/shaders";

    function tU(UU) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(UU)}`
    }
    const gU = "Screenshot generation failed.",
      kU = "Its screenshots couldn't be generated:";

    function GU(UU) {
      var XU;
      return UU === gU || null !== (XU = null === UU || void 0 === UU ? void 0 : UU.startsWith(kU)) && void 0 !== XU && XU
    }

    function BU(UU, XU) {
      return `shaderPacks/${UU}/${XU}.json`
    }

    function ZU(UU, XU, zU, cU) {
      return null === XU.renderId ? RU(UU, XU.baselineVersion, zU, cU) : `${UU}/${function(UU,XU,zU,cU){return`shaderPacks/${UU}/${XU}/${zU}-${cU}.webp`}(XU.packId,XU.renderId,zU,cU)}`
    }

    function RU(UU, XU, zU, cU) {
      return `${UU}/${function(UU,XU,zU){return`shaderPacks/baseline/${UU}/${XU}-${zU}.webp`}(XU,zU,cU)}`
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);