export const id = 145;
export const ids = [145, 152, 153];
export const modules = {
  41811: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => XH,
      installListedShaderPack: () => EH
    });
    var AH = LH(7114),
      rH = LH(5531),
      SH = LH(1131),
      hH = LH(7165),
      tH = LH(5523),
      zH = LH(7201),
      CH = LH(7196);
    async function EH(HH) {
      const BH = await (0, hH.loadPageShaderPackCompiler)();
      if (null === BH) return {
        kind: "failed",
        reason: "compiler"
      };
      const LH = await XH(HH, BH);
      return "failed" === LH.kind ? LH : await (0, zH.saveShaderPack)(LH.stored, BH) ? ((0, zH.markShaderPackChangePending)(), LH) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function XH(HH, BH) {
      const LH = await async function(HH) {
        let {
          packId: BH,
          sourceHash: LH
        } = HH;
        try {
          const HH = await fetch(`${SH.clientSideServerUrls.s3Url}/${(0,AH.Q)(BH,LH)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!HH.ok) return console.error(`Failed to download shader pack ${BH} (${HH.status})`), null;
          const rH = await HH.json();
          return "object" !== typeof rH || null === rH ? (console.error(`Shader pack ${BH}'s source isn't an object`), null) : rH
        } catch (rH) {
          return console.error(`Failed to download shader pack ${BH}`, rH), null
        }
      }(HH);
      if (null === LH) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, tH.g)(LH.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const hH = (0, rH.q)(LH.files);
      if ("string" === typeof hH) return console.error(`A listed shader pack breaks the pack rules: ${hH}`), {
        kind: "failed",
        reason: "invalid"
      };
      const EH = await (0, CH.d)(BH, hH);
      if (!1 === (null === EH || void 0 === EH ? void 0 : EH.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const XH = {
        manifest: {
          apiVersion: LH.apiVersion,
          name: HH.name,
          author: HH.ownerName,
          description: HH.description || null,
          keepCircleShadows: !0 === LH.keepCircleShadows
        },
        files: hH
      };
      return {
        kind: "loaded",
        stored: (0, zH.toStoredShaderPack)(XH, EH, {
          packId: HH.packId,
          sourceHash: HH.sourceHash
        })
      }
    }
  },
  44803: (HH, BH, LH) => {
    LH.d(BH, {
      followListingUpdates: () => GH
    });
    var AH = LH(186),
      rH = LH(15),
      SH = LH(1502),
      hH = LH(1070),
      tH = LH(7165),
      zH = LH(5523),
      CH = LH(41811),
      EH = LH(7201);
    const XH = ["apiVersion", "invalid", "errors"];
    async function GH(HH, BH) {
      const LH = await hH.userContextManager.getCurrentUserContext(),
        GH = await SH.d.getShaderPackVersions(LH, [BH.packId]),
        YH = function(HH, BH, LH) {
          var AH;
          if (void 0 === LH || "unlisted" === LH.status) return {
            kind: "none"
          };
          if ("banned" === LH.status) return {
            kind: "remove"
          };
          if (!(0, zH.g)(LH.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: rH,
            name: SH,
            ownerName: hH,
            description: tH
          } = LH;
          return rH !== BH.sourceHash && rH !== BH.rejectedSourceHash ? {
            kind: "update",
            sourceHash: rH,
            name: SH,
            ownerName: hH,
            description: tH
          } : SH !== HH.manifest.name || hH !== HH.manifest.author || (tH || null) !== (null !== (AH = HH.manifest.description) && void 0 !== AH ? AH : null) ? {
            kind: "rename",
            name: SH,
            ownerName: hH,
            description: tH
          } : {
            kind: "none"
          }
        }(HH, BH, (0, AH.d)(GH, BH.packId));
      if ("update" === YH.kind && "landingPage" !== rH.c.get("gameState")) return !1;
      const uH = "update" === YH.kind || "rename" === YH.kind,
        QH = uH ? await (0, tH.loadPageShaderPackCompiler)() : null;
      if (uH && null === QH) return console.warn(`Didn't follow shader pack ${BH.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const WH = await async function(HH, BH, LH, AH) {
        switch (LH.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...HH, manifest: {
                ...HH.manifest,
                name: LH.name,
                author: LH.ownerName,
                description: LH.description || null
              }
            };
          case "update": {
            if (null === AH) return;
            const {
              sourceHash: rH,
              name: SH,
              ownerName: hH,
              description: tH
            } = LH, zH = await (0, CH.c)({
              packId: BH.packId,
              sourceHash: rH,
              name: SH,
              ownerName: hH,
              description: tH
            }, AH);
            if ("loaded" === zH.kind && null !== zH.stored.validation) return zH.stored;
            const EH = "failed" === zH.kind ? zH.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${BH.packId}: ${EH}`), "failed" === zH.kind && XH.includes(zH.reason) ? {
              ...HH,
              listing: {
                ...BH,
                rejectedSourceHash: rH
              }
            } : void 0
          }
        }
      }(HH, BH, YH, QH);
      return void 0 === WH || (await (0, EH.replaceShaderPack)(HH, WH, QH) ? (null !== WH && WH.files === HH.files || (0, EH.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  7201: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      forgetShaderPackActiveHint: () => oH,
      isOtherApiVersion: () => OH,
      isShaderPackActive: () => PH,
      isShaderPackChangePending: () => VH,
      markShaderPackChangePending: () => UH,
      pageShaderPackValidationVersion: () => bH,
      reconcileStoredShaderPackHint: () => mH,
      removeShaderPack: () => vH,
      replaceShaderPack: () => WH,
      saveShaderPack: () => QH,
      shaderPackNeedsCheck: () => kH,
      storedPackOutcome: () => TH,
      storedShaderPackFiles: () => GH,
      toStoredShaderPack: () => XH
    });
    var AH = LH(5531),
      rH = LH(5523),
      SH = LH(30),
      hH = LH(3831),
      tH = LH(7209),
      zH = LH(7179);
    const CH = "shaderPackChangePending";
    let EH = null;

    function XH(HH, BH, LH) {
      return {
        manifest: HH.manifest,
        files: (0, AH.t)(HH.files),
        validation: BH,
        ...LH && {
          listing: LH
        }
      }
    }

    function GH(HH) {
      return Object.keys(HH.files).map((BH => ({
        path: BH,
        source: HH.files[BH]
      })))
    }
    let YH = Promise.resolve();

    function uH(HH) {
      const BH = YH.then(HH);
      return YH = BH.catch((() => {})), BH
    }

    function QH(HH, BH) {
      return uH((() => MH(HH, BH)))
    }

    function WH(HH, BH, LH) {
      return uH((async () => JSON.stringify(await (0, tH.e)()) === JSON.stringify(HH) && (null === BH ? (await xH(), !0) : MH(BH, LH))))
    }
    async function MH(HH, BH) {
      const LH = await SH.c.setItem(tH.c, HH);
      return LH && IH(HH, BH), LH
    }
    async function xH() {
      await SH.c.removeItem(tH.c), SH.e.removeItem(hH.d)
    }

    function vH() {
      return uH(xH)
    }

    function PH(HH, BH) {
      return "active" === TH(HH, BH).kind
    }

    function TH(HH, BH) {
      var LH;
      return null === HH ? {
        kind: "none",
        reason: "nothingStored"
      } : OH(HH) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.ok) || HH.validation.fromRecheck ? null === BH ? {
        kind: "none",
        reason: "noCompiler"
      } : kH(HH, BH) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : HH.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function UH() {
      SH.f.setItem(CH, performance.timeOrigin)
    }

    function VH() {
      return SH.f.getItem(CH) === performance.timeOrigin
    }

    function OH(HH) {
      return !(0, rH.g)(HH.manifest.apiVersion)
    }

    function bH(HH) {
      return EH ??= HH.kN((0, zH.shaderPackTextures)()), EH
    }

    function kH(HH, BH) {
      var LH;
      return (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.headerVersion) !== bH(BH)
    }

    function mH(HH) {
      return uH((async () => {
        IH(await (0, tH.e)(!0), HH)
      }))
    }

    function oH() {
      return uH((async () => {
        SH.e.removeItem(hH.d)
      }))
    }

    function IH(HH, BH) {
      PH(HH, BH) ? SH.e.setItem(hH.d, !0) : SH.e.removeItem(hH.d)
    }
  },
  7179: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      loadShaderPackTextures: () => hH,
      shaderPackTextures: () => tH
    });
    var AH = LH(5531);
    let rH = null,
      SH = null;

    function hH() {
      return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: BH,
          textureNameToIndex: LH,
          textureAnimationData: SH
        } = HH;
        return rH ??= (0, AH.f)(LH, SH, BH), rH
      })), SH
    }

    function tH() {
      if (null === rH) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return rH
    }
  },
  7196: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => zH,
      d: () => tH
    });
    var AH = LH(7201),
      rH = LH(7179),
      SH = LH(105);
    const hH = 100;
    async function tH(HH, BH) {
      var LH;
      let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (LH = navigator.gpu) && void 0 !== LH ? LH : null;
      const hH = HH.YBH(BH, (0, rH.shaderPackTextures)());
      if (hH.errors.length > 0) return CH(HH, hH.errors, hH.offInStrict);
      const tH = await async function(HH) {
        if (!HH) return null;
        try {
          const BH = await (0, SH.y)(HH);
          return BH ? await BH.requestDevice() : null
        } catch (BH) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", BH), null
        }
      }(AH);
      if (!tH) return null;
      let zH = !1;
      tH.lost.then((() => {
        zH = !0
      }));
      try {
        const BH = await Promise.all(hH.validationModules.map((BH => async function(HH, BH, LH) {
          BH.pushErrorScope("validation");
          const AH = BH.createShaderModule({
              code: LH.code
            }),
            rH = BH.popErrorScope(),
            {
              messages: SH
            } = await AH.getCompilationInfo(),
            hH = SH.filter((HH => "error" === HH.type)).map((BH => HH.mapValidationMessage(LH, BH))),
            tH = await rH;
          tH && 0 === hH.length && hH.push({
            file: null,
            line: 0,
            message: tH.message,
            variants: [LH.key]
          });
          return hH
        }(HH, tH, BH))));
        return zH ? null : CH(HH, HH.rrH(BH.flat()), hH.offInStrict)
      } catch (EH) {
        return console.error("Couldn't validate the shader pack on WebGPU.", EH), null
      } finally {
        tH.destroy()
      }
    }
    async function zH(HH, BH) {
      var LH;
      if (!(0, AH.shaderPackNeedsCheck)(HH, BH) || (0, AH.isOtherApiVersion)(HH)) return HH;
      const rH = await tH(BH, (0, AH.storedShaderPackFiles)(HH));
      if (!rH) return HH;
      const SH = !1 === (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.ok) && !HH.validation.fromRecheck,
        hH = {
          ...HH,
          validation: SH ? rH : {
            ...rH,
            fromRecheck: !0
          }
        };
      return await (0, AH.replaceShaderPack)(HH, hH, BH) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), hH
    }

    function CH(HH, BH, LH) {
      return {
        headerVersion: (0, AH.pageShaderPackValidationVersion)(HH),
        ok: 0 === BH.length,
        errors: BH.slice(0, hH),
        moreErrors: Math.max(0, BH.length - hH),
        offInStrict: LH
      }
    }
  },
  7114: (HH, BH, LH) => {
    LH.d(BH, {
      B: () => SH,
      F: () => tH,
      H: () => hH,
      L: () => AH,
      M: () => GH,
      P: () => EH,
      Q: () => PH,
      R: () => XH,
      V: () => CH,
      d: () => uH,
      g: () => WH,
      i: () => QH,
      m: () => YH,
      o: () => vH,
      s: () => UH,
      v: () => zH,
      w: () => rH,
      x: () => TH
    });
    const AH = ["forest", "desert", "water", "night", "cave"];
    const rH = {
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
      SH = ["popular", "updated", "newest"],
      hH = 3,
      tH = 32,
      zH = 300;

    function CH(HH, BH) {
      return HH.slice(0, BH).replace(/[\uD800-\uDBFF]$/, "")
    }
    const EH = 64,
      XH = 512,
      GH = 18e5;

    function YH(HH) {
      const BH = HH,
        LH = null === BH || void 0 === BH ? void 0 : BH.files;
      return "number" === typeof(null === BH || void 0 === BH ? void 0 : BH.apiVersion) && "string" === typeof BH.name && (null === BH.author || "string" === typeof BH.author) && (void 0 === BH.keepCircleShadows || "boolean" === typeof BH.keepCircleShadows) && "object" === typeof LH && null !== LH && Object.values(LH).every((HH => "string" === typeof HH))
    }
    const uH = "Bloxdhub",
      QH = "https://bloxdhub.com/shaders";

    function WH(HH) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(HH)}`
    }
    const MH = "Screenshot generation failed.",
      xH = "Its screenshots couldn't be generated:";

    function vH(HH) {
      var BH;
      return HH === MH || null !== (BH = null === HH || void 0 === HH ? void 0 : HH.startsWith(xH)) && void 0 !== BH && BH
    }

    function PH(HH, BH) {
      return `shaderPacks/${HH}/${BH}.json`
    }

    function TH(HH, BH, LH, AH) {
      return null === BH.renderId ? UH(HH, BH.baselineVersion, LH, AH) : `${HH}/${function(HH,BH,LH,AH){return`shaderPacks/${HH}/${BH}/${LH}-${AH}.webp`}(BH.packId,BH.renderId,LH,AH)}`
    }

    function UH(HH, BH, LH, AH) {
      return `${HH}/${function(HH,BH,LH){return`shaderPacks/baseline/${HH}/${BH}-${LH}.webp`}(BH,LH,AH)}`
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);