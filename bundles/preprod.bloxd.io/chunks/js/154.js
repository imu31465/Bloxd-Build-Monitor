export const id = 154;
export const ids = [154, 159, 160];
export const modules = {
  42022: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => ZW,
      installListedShaderPack: () => tW
    });
    var mW = OW(7570),
      EW = OW(5970),
      NW = OW(1185),
      PW = OW(7621),
      LW = OW(5961),
      cW = OW(7656),
      wW = OW(7648);
    async function tW(WW) {
      const iW = await (0, PW.loadPageShaderPackCompiler)();
      if (null === iW) return {
        kind: "failed",
        reason: "compiler"
      };
      const OW = await ZW(WW, iW);
      return "failed" === OW.kind ? OW : await (0, cW.saveShaderPack)(OW.stored, iW) ? ((0, cW.markShaderPackChangePending)(), OW) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function ZW(WW, iW) {
      const OW = await async function(WW) {
        let {
          packId: iW,
          sourceHash: OW
        } = WW;
        try {
          const WW = await fetch(`${NW.clientSideServerUrls.s3Url}/${(0,mW.L)(iW,OW)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!WW.ok) return console.error(`Failed to download shader pack ${iW} (${WW.status})`), null;
          const EW = await WW.json();
          return "object" !== typeof EW || null === EW ? (console.error(`Shader pack ${iW}'s source isn't an object`), null) : EW
        } catch (EW) {
          return console.error(`Failed to download shader pack ${iW}`, EW), null
        }
      }(WW);
      if (null === OW) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, LW.g)(OW.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const PW = (0, EW.x)(OW.files);
      if ("string" === typeof PW) return console.error(`A listed shader pack breaks the pack rules: ${PW}`), {
        kind: "failed",
        reason: "invalid"
      };
      const tW = await (0, wW.g)(iW, PW);
      if (!1 === (null === tW || void 0 === tW ? void 0 : tW.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const ZW = {
        manifest: {
          apiVersion: OW.apiVersion,
          name: WW.name,
          author: WW.ownerName,
          description: WW.description || null,
          keepCircleShadows: !0 === OW.keepCircleShadows
        },
        files: PW
      };
      return {
        kind: "loaded",
        stored: (0, cW.toStoredShaderPack)(ZW, tW, {
          packId: WW.packId,
          sourceHash: WW.sourceHash
        })
      }
    }
  },
  44906: (WW, iW, OW) => {
    OW.d(iW, {
      followListingUpdates: () => xW
    });
    var mW = OW(192),
      EW = OW(25),
      NW = OW(1584),
      PW = OW(1111),
      LW = OW(7621),
      cW = OW(5961),
      wW = OW(42022),
      tW = OW(7656);
    const ZW = ["apiVersion", "invalid", "errors"];
    async function xW(WW, iW) {
      const OW = await PW.userContextManager.getCurrentUserContext(),
        xW = await NW.e.getShaderPackVersions(OW, [iW.packId]),
        lW = function(WW, iW, OW) {
          var mW;
          if (void 0 === OW || "unlisted" === OW.status) return {
            kind: "none"
          };
          if ("banned" === OW.status) return {
            kind: "remove"
          };
          if (!(0, cW.g)(OW.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: EW,
            name: NW,
            ownerName: PW,
            description: LW
          } = OW;
          return EW !== iW.sourceHash && EW !== iW.rejectedSourceHash ? {
            kind: "update",
            sourceHash: EW,
            name: NW,
            ownerName: PW,
            description: LW
          } : NW !== WW.manifest.name || PW !== WW.manifest.author || (LW || null) !== (null !== (mW = WW.manifest.description) && void 0 !== mW ? mW : null) ? {
            kind: "rename",
            name: NW,
            ownerName: PW,
            description: LW
          } : {
            kind: "none"
          }
        }(WW, iW, (0, mW.c)(xW, iW.packId));
      if ("update" === lW.kind && "landingPage" !== EW.d.get("gameState")) return !1;
      const AW = "update" === lW.kind || "rename" === lW.kind,
        bW = AW ? await (0, LW.loadPageShaderPackCompiler)() : null;
      if (AW && null === bW) return console.warn(`Didn't follow shader pack ${iW.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const jW = await async function(WW, iW, OW, mW) {
        switch (OW.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...WW, manifest: {
                ...WW.manifest,
                name: OW.name,
                author: OW.ownerName,
                description: OW.description || null
              }
            };
          case "update": {
            if (null === mW) return;
            const {
              sourceHash: EW,
              name: NW,
              ownerName: PW,
              description: LW
            } = OW, cW = await (0, wW.e)({
              packId: iW.packId,
              sourceHash: EW,
              name: NW,
              ownerName: PW,
              description: LW
            }, mW);
            if ("loaded" === cW.kind && null !== cW.stored.validation) return cW.stored;
            const tW = "failed" === cW.kind ? cW.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${iW.packId}: ${tW}`), "failed" === cW.kind && ZW.includes(cW.reason) ? {
              ...WW,
              listing: {
                ...iW,
                rejectedSourceHash: EW
              }
            } : void 0
          }
        }
      }(WW, iW, lW, bW);
      return void 0 === jW || (await (0, tW.replaceShaderPack)(WW, jW, bW) ? (null !== jW && jW.files === WW.files || (0, tW.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  7656: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      forgetShaderPackActiveHint: () => HW,
      isOtherApiVersion: () => yW,
      isShaderPackActive: () => MW,
      isShaderPackChangePending: () => YW,
      markShaderPackChangePending: () => SW,
      pageShaderPackValidationVersion: () => TW,
      reconcileStoredShaderPackHint: () => hW,
      removeShaderPack: () => sW,
      replaceShaderPack: () => jW,
      saveShaderPack: () => bW,
      shaderPackNeedsCheck: () => JW,
      storedPackOutcome: () => KW,
      storedShaderPackFiles: () => xW,
      toStoredShaderPack: () => ZW
    });
    var mW = OW(5970),
      EW = OW(5961),
      NW = OW(39),
      PW = OW(4666),
      LW = OW(7659),
      cW = OW(7637);
    const wW = "shaderPackChangePending";
    let tW = null;

    function ZW(WW, iW, OW) {
      return {
        manifest: WW.manifest,
        files: (0, mW.A)(WW.files),
        validation: iW,
        ...OW && {
          listing: OW
        }
      }
    }

    function xW(WW) {
      return Object.keys(WW.files).map((iW => ({
        path: iW,
        source: WW.files[iW]
      })))
    }
    let lW = Promise.resolve();

    function AW(WW) {
      const iW = lW.then(WW);
      return lW = iW.catch((() => {})), iW
    }

    function bW(WW, iW) {
      return AW((() => UW(WW, iW)))
    }

    function jW(WW, iW, OW) {
      return AW((async () => JSON.stringify(await (0, LW.g)()) === JSON.stringify(WW) && (null === iW ? (await kW(), !0) : UW(iW, OW))))
    }
    async function UW(WW, iW) {
      const OW = await NW.f.setItem(LW.c, WW);
      return OW && nW(WW, iW), OW
    }
    async function kW() {
      await NW.f.removeItem(LW.c), NW.i.removeItem(PW.b)
    }

    function sW() {
      return AW(kW)
    }

    function MW(WW, iW) {
      return "active" === KW(WW, iW).kind
    }

    function KW(WW, iW) {
      var OW;
      return null === WW ? {
        kind: "none",
        reason: "nothingStored"
      } : yW(WW) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.ok) || WW.validation.fromRecheck ? null === iW ? {
        kind: "none",
        reason: "noCompiler"
      } : JW(WW, iW) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : WW.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function SW() {
      NW.j.setItem(wW, performance.timeOrigin)
    }

    function YW() {
      return NW.j.getItem(wW) === performance.timeOrigin
    }

    function yW(WW) {
      return !(0, EW.g)(WW.manifest.apiVersion)
    }

    function TW(WW) {
      return tW ??= WW.IH((0, cW.shaderPackTextures)()), tW
    }

    function JW(WW, iW) {
      var OW;
      return (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.headerVersion) !== TW(iW)
    }

    function hW(WW) {
      return AW((async () => {
        nW(await (0, LW.g)(!0), WW)
      }))
    }

    function HW() {
      return AW((async () => {
        NW.i.removeItem(PW.b)
      }))
    }

    function nW(WW, iW) {
      MW(WW, iW) ? NW.i.setItem(PW.b, !0) : NW.i.removeItem(PW.b)
    }
  },
  7637: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      loadShaderPackTextures: () => PW,
      shaderPackTextures: () => LW
    });
    var mW = OW(5970);
    let EW = null,
      NW = null;

    function PW() {
      return NW ??= Promise.all([OW.e(85), OW.e(126)]).then((() => OW(42015))).then((WW => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: iW,
          textureNameToIndex: OW,
          textureAnimationData: NW
        } = WW;
        return EW ??= (0, mW.o)(OW, NW, iW), EW
      })), NW
    }

    function LW() {
      if (null === EW) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return EW
    }
  },
  7648: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => cW,
      g: () => LW
    });
    var mW = OW(7656),
      EW = OW(7637),
      NW = OW(119);
    const PW = 100;
    async function LW(WW, iW) {
      var OW;
      let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (OW = navigator.gpu) && void 0 !== OW ? OW : null;
      const PW = WW.dWW(iW, (0, EW.shaderPackTextures)());
      if (PW.errors.length > 0) return wW(WW, PW.errors, PW.offInStrict);
      const LW = await async function(WW) {
        if (!WW) return null;
        try {
          const iW = await (0, NW.r)(WW);
          return iW ? await iW.requestDevice() : null
        } catch (iW) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", iW), null
        }
      }(mW);
      if (!LW) return null;
      let cW = !1;
      LW.lost.then((() => {
        cW = !0
      }));
      try {
        const iW = await Promise.all(PW.validationModules.map((iW => async function(WW, iW, OW) {
          iW.pushErrorScope("validation");
          const mW = iW.createShaderModule({
              code: OW.code
            }),
            EW = iW.popErrorScope(),
            {
              messages: NW
            } = await mW.getCompilationInfo(),
            PW = NW.filter((WW => "error" === WW.type)).map((iW => WW.mapValidationMessage(OW, iW))),
            LW = await EW;
          LW && 0 === PW.length && PW.push({
            file: null,
            line: 0,
            message: LW.message,
            variants: [OW.key]
          });
          return PW
        }(WW, LW, iW))));
        return cW ? null : wW(WW, WW.smW(iW.flat()), PW.offInStrict)
      } catch (tW) {
        return console.error("Couldn't validate the shader pack on WebGPU.", tW), null
      } finally {
        LW.destroy()
      }
    }
    async function cW(WW, iW) {
      var OW;
      if (!(0, mW.shaderPackNeedsCheck)(WW, iW) || (0, mW.isOtherApiVersion)(WW)) return WW;
      const EW = await LW(iW, (0, mW.storedShaderPackFiles)(WW));
      if (!EW) return WW;
      const NW = !1 === (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.ok) && !WW.validation.fromRecheck,
        PW = {
          ...WW,
          validation: NW ? EW : {
            ...EW,
            fromRecheck: !0
          }
        };
      return await (0, mW.replaceShaderPack)(WW, PW, iW) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), PW
    }

    function wW(WW, iW, OW) {
      return {
        headerVersion: (0, mW.pageShaderPackValidationVersion)(WW),
        ok: 0 === iW.length,
        errors: iW.slice(0, PW),
        moreErrors: Math.max(0, iW.length - PW),
        offInStrict: OW
      }
    }
  },
  7570: (WW, iW, OW) => {
    OW.d(iW, {
      B: () => PW,
      F: () => mW,
      G: () => xW,
      K: () => tW,
      L: () => MW,
      M: () => ZW,
      N: () => wW,
      c: () => AW,
      d: () => jW,
      e: () => bW,
      f: () => lW,
      g: () => sW,
      i: () => SW,
      j: () => cW,
      n: () => EW,
      q: () => KW,
      u: () => NW,
      x: () => LW
    });
    const mW = ["forest", "desert", "water", "night", "cave"];
    const EW = {
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
      NW = ["popular", "updated", "newest"],
      PW = 3,
      LW = 32,
      cW = 300;

    function wW(WW, iW) {
      return WW.slice(0, iW).replace(/[\uD800-\uDBFF]$/, "")
    }
    const tW = 64,
      ZW = 512,
      xW = 18e5;

    function lW(WW) {
      const iW = WW,
        OW = null === iW || void 0 === iW ? void 0 : iW.files;
      return "number" === typeof(null === iW || void 0 === iW ? void 0 : iW.apiVersion) && "string" === typeof iW.name && (null === iW.author || "string" === typeof iW.author) && (void 0 === iW.keepCircleShadows || "boolean" === typeof iW.keepCircleShadows) && "object" === typeof OW && null !== OW && Object.values(OW).every((WW => "string" === typeof WW))
    }
    const AW = "Bloxdhub",
      bW = "https://bloxdhub.com/shaders";

    function jW(WW) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(WW)}`
    }
    const UW = "Screenshot generation failed.",
      kW = "Its screenshots couldn't be generated:";

    function sW(WW) {
      var iW;
      return WW === UW || null !== (iW = null === WW || void 0 === WW ? void 0 : WW.startsWith(kW)) && void 0 !== iW && iW
    }

    function MW(WW, iW) {
      return `shaderPacks/${WW}/${iW}.json`
    }

    function KW(WW, iW, OW, mW) {
      return null === iW.renderId ? SW(WW, iW.baselineVersion, OW, mW) : `${WW}/${function(WW,iW,OW,mW){return`shaderPacks/${WW}/${iW}/${OW}-${mW}.webp`}(iW.packId,iW.renderId,OW,mW)}`
    }

    function SW(WW, iW, OW, mW) {
      return `${WW}/${function(WW,iW,OW){return`shaderPacks/baseline/${WW}/${iW}-${OW}.webp`}(iW,OW,mW)}`
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);