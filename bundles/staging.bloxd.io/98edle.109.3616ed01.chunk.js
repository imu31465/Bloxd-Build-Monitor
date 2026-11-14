export const id = 109;
export const ids = [109, 112, 113, 116];
export const modules = {
  5615: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW.f,
      g: () => CW,
      j: () => wW.l
    });
    var wW = MW(5596);
    const CW = [!1, !0].flatMap((WW => ["terrain", "liquid", "model"].map((RW => ({
      strict: WW,
      program: RW
    })))))
  },
  38086: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => BW,
      installListedShaderPack: () => eW
    });
    var wW = MW(5557),
      CW = MW(5596),
      zR = MW(1033),
      AW = MW(5621),
      bR = MW(5615),
      yR = MW(5656),
      NW = MW(5653);
    async function eW(WW) {
      const RW = await (0, AW.loadPageShaderPackCompiler)();
      if (null === RW) return {
        kind: "failed",
        reason: "compiler"
      };
      const MW = await BW(WW, RW);
      return "failed" === MW.kind ? MW : await (0, yR.saveShaderPack)(MW.stored, RW) ? ((0, yR.markShaderPackChangePending)(), MW) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function BW(WW, RW) {
      const MW = await async function(WW) {
        let {
          packId: RW,
          sourceHash: MW
        } = WW;
        try {
          const WW = await fetch(`${zR.clientSideServerUrls.s3Url}/${(0,wW.J)(RW,MW)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!WW.ok) return console.error(`Failed to download shader pack ${RW} (${WW.status})`), null;
          const CW = await WW.json();
          return "object" !== typeof CW || null === CW ? (console.error(`Shader pack ${RW}'s source isn't an object`), null) : CW
        } catch (CW) {
          return console.error(`Failed to download shader pack ${RW}`, CW), null
        }
      }(WW);
      if (null === MW) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, bR.j)(MW.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const AW = (0, CW.n)(MW.files);
      if ("string" === typeof AW) return console.error(`A listed shader pack breaks the pack rules: ${AW}`), {
        kind: "failed",
        reason: "invalid"
      };
      const eW = await (0, NW.f)(RW, AW);
      if (!1 === (null === eW || void 0 === eW ? void 0 : eW.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const BW = {
        manifest: {
          apiVersion: MW.apiVersion,
          name: WW.name,
          author: WW.ownerName,
          description: WW.description || null,
          keepCircleShadows: !0 === MW.keepCircleShadows
        },
        files: AW
      };
      return {
        kind: "loaded",
        stored: (0, yR.toStoredShaderPack)(BW, eW, {
          packId: WW.packId,
          sourceHash: WW.sourceHash
        })
      }
    }
  },
  38669: (WW, RW, MW) => {
    MW.d(RW, {
      followListingUpdates: () => tR
    });
    var wW = MW(613),
      CW = MW(27),
      zR = MW(1314),
      AW = MW(975),
      bR = MW(5621),
      yR = MW(5615),
      NW = MW(38086),
      eW = MW(5656);
    const BW = ["apiVersion", "invalid", "errors"];
    async function tR(WW, RW) {
      const MW = await AW.userContextManager.getCurrentUserContext(),
        tR = await zR.c.getShaderPackVersions(MW, [RW.packId]),
        TW = function(WW, RW, MW) {
          var wW;
          if (void 0 === MW || "unlisted" === MW.status) return {
            kind: "none"
          };
          if ("banned" === MW.status) return {
            kind: "remove"
          };
          if (!(0, yR.j)(MW.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: CW,
            name: zR,
            ownerName: AW,
            description: bR
          } = MW;
          return CW !== RW.sourceHash && CW !== RW.rejectedSourceHash ? {
            kind: "update",
            sourceHash: CW,
            name: zR,
            ownerName: AW,
            description: bR
          } : zR !== WW.manifest.name || AW !== WW.manifest.author || (bR || null) !== (null !== (wW = WW.manifest.description) && void 0 !== wW ? wW : null) ? {
            kind: "rename",
            name: zR,
            ownerName: AW,
            description: bR
          } : {
            kind: "none"
          }
        }(WW, RW, (0, wW.d)(tR, RW.packId));
      if ("update" === TW.kind && "landingPage" !== CW.b.get("gameState")) return !1;
      const gR = "update" === TW.kind || "rename" === TW.kind,
        iR = gR ? await (0, bR.loadPageShaderPackCompiler)() : null;
      if (gR && null === iR) return console.warn(`Didn't follow shader pack ${RW.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const YW = await async function(WW, RW, MW, wW) {
        switch (MW.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...WW, manifest: {
                ...WW.manifest,
                name: MW.name,
                author: MW.ownerName,
                description: MW.description || null
              }
            };
          case "update": {
            if (null === wW) return;
            const {
              sourceHash: CW,
              name: zR,
              ownerName: AW,
              description: bR
            } = MW, yR = await (0, NW.c)({
              packId: RW.packId,
              sourceHash: CW,
              name: zR,
              ownerName: AW,
              description: bR
            }, wW);
            if ("loaded" === yR.kind && null !== yR.stored.validation) return yR.stored;
            const eW = "failed" === yR.kind ? yR.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${RW.packId}: ${eW}`), "failed" === yR.kind && BW.includes(yR.reason) ? {
              ...WW,
              listing: {
                ...RW,
                rejectedSourceHash: CW
              }
            } : void 0
          }
        }
      }(WW, RW, TW, iR);
      return void 0 === YW || (await (0, eW.replaceShaderPack)(WW, YW, iR) ? (null !== YW && YW.files === WW.files || (0, eW.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  5656: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      forgetShaderPackActiveHint: () => jR,
      isOtherApiVersion: () => QW,
      isShaderPackActive: () => oW,
      isShaderPackChangePending: () => fW,
      markShaderPackChangePending: () => FW,
      pageShaderPackValidationVersion: () => rR,
      reconcileStoredShaderPackHint: () => XW,
      removeShaderPack: () => IW,
      replaceShaderPack: () => YW,
      saveShaderPack: () => iR,
      shaderPackNeedsCheck: () => cR,
      storedPackOutcome: () => lW,
      storedShaderPackFiles: () => tR,
      toStoredShaderPack: () => BW
    });
    var wW = MW(5596),
      CW = MW(5615),
      zR = MW(50),
      AW = MW(2518),
      bR = MW(5661),
      yR = MW(5638);
    const NW = "shaderPackChangePending";
    let eW = null;

    function BW(WW, RW, MW) {
      return {
        manifest: WW.manifest,
        files: (0, wW.r)(WW.files),
        validation: RW,
        ...MW && {
          listing: MW
        }
      }
    }

    function tR(WW) {
      return Object.keys(WW.files).map((RW => ({
        path: RW,
        source: WW.files[RW]
      })))
    }
    let TW = Promise.resolve();

    function gR(WW) {
      const RW = TW.then(WW);
      return TW = RW.catch((() => {})), RW
    }

    function iR(WW, RW) {
      return gR((() => JW(WW, RW)))
    }

    function YW(WW, RW, MW) {
      return gR((async () => JSON.stringify(await (0, bR.h)()) === JSON.stringify(WW) && (null === RW ? (await PW(), !0) : JW(RW, MW))))
    }
    async function JW(WW, RW) {
      const MW = await zR.e.setItem(bR.e, WW);
      return MW && kR(WW, RW), MW
    }
    async function PW() {
      await zR.e.removeItem(bR.e), zR.g.removeItem(AW.c)
    }

    function IW() {
      return gR(PW)
    }

    function oW(WW, RW) {
      return "active" === lW(WW, RW).kind
    }

    function lW(WW, RW) {
      var MW;
      return null === WW ? {
        kind: "none",
        reason: "nothingStored"
      } : QW(WW) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (MW = WW.validation) || void 0 === MW ? void 0 : MW.ok) || WW.validation.fromRecheck ? null === RW ? {
        kind: "none",
        reason: "noCompiler"
      } : cR(WW, RW) ? {
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

    function FW() {
      zR.j.setItem(NW, performance.timeOrigin)
    }

    function fW() {
      return zR.j.getItem(NW) === performance.timeOrigin
    }

    function QW(WW) {
      return !(0, CW.j)(WW.manifest.apiVersion)
    }

    function rR(WW) {
      return eW ??= WW.oRW((0, yR.shaderPackTextures)()), eW
    }

    function cR(WW, RW) {
      var MW;
      return (null === (MW = WW.validation) || void 0 === MW ? void 0 : MW.headerVersion) !== rR(RW)
    }

    function XW(WW) {
      return gR((async () => {
        kR(await (0, bR.h)(!0), WW)
      }))
    }

    function jR() {
      return gR((async () => {
        zR.g.removeItem(AW.c)
      }))
    }

    function kR(WW, RW) {
      oW(WW, RW) ? zR.g.setItem(AW.c, !0) : zR.g.removeItem(AW.c)
    }
  },
  5638: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      loadShaderPackTextures: () => AW,
      shaderPackTextures: () => bR
    });
    var wW = MW(5596);
    let CW = null,
      zR = null;

    function AW() {
      return zR ??= Promise.all([MW.e(59), MW.e(177)]).then((() => MW(38083))).then((WW => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: RW,
          textureNameToIndex: MW,
          textureAnimationData: zR
        } = WW;
        return CW ??= (0, wW.g)(MW, zR, RW), CW
      })), zR
    }

    function bR() {
      if (null === CW) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return CW
    }
  },
  5653: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => yR,
      f: () => bR
    });
    var wW = MW(5656),
      CW = MW(5638),
      zR = MW(137);
    const AW = 100;
    async function bR(WW, RW) {
      var MW;
      let wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (MW = navigator.gpu) && void 0 !== MW ? MW : null;
      const AW = WW.wAW(RW, (0, CW.shaderPackTextures)());
      if (AW.errors.length > 0) return NW(WW, AW.errors, AW.offInStrict);
      const bR = await async function(WW) {
        if (!WW) return null;
        try {
          const RW = await (0, zR.p)(WW);
          return RW ? await RW.requestDevice() : null
        } catch (RW) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", RW), null
        }
      }(wW);
      if (!bR) return null;
      let yR = !1;
      bR.lost.then((() => {
        yR = !0
      }));
      try {
        const RW = await Promise.all(AW.validationModules.map((RW => async function(WW, RW, MW) {
          RW.pushErrorScope("validation");
          const wW = RW.createShaderModule({
              code: MW.code
            }),
            CW = RW.popErrorScope(),
            {
              messages: zR
            } = await wW.getCompilationInfo(),
            AW = zR.filter((WW => "error" === WW.type)).map((RW => WW.mapValidationMessage(MW, RW))),
            bR = await CW;
          bR && 0 === AW.length && AW.push({
            file: null,
            line: 0,
            message: bR.message,
            variants: [MW.key]
          });
          return AW
        }(WW, bR, RW))));
        return yR ? null : NW(WW, WW.ZyW(RW.flat()), AW.offInStrict)
      } catch (eW) {
        return console.error("Couldn't validate the shader pack on WebGPU.", eW), null
      } finally {
        bR.destroy()
      }
    }
    async function yR(WW, RW) {
      var MW;
      if (!(0, wW.shaderPackNeedsCheck)(WW, RW) || (0, wW.isOtherApiVersion)(WW)) return WW;
      const CW = await bR(RW, (0, wW.storedShaderPackFiles)(WW));
      if (!CW) return WW;
      const zR = !1 === (null === (MW = WW.validation) || void 0 === MW ? void 0 : MW.ok) && !WW.validation.fromRecheck,
        AW = {
          ...WW,
          validation: zR ? CW : {
            ...CW,
            fromRecheck: !0
          }
        };
      return await (0, wW.replaceShaderPack)(WW, AW, RW) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), AW
    }

    function NW(WW, RW, MW) {
      return {
        headerVersion: (0, wW.pageShaderPackValidationVersion)(WW),
        ok: 0 === RW.length,
        errors: RW.slice(0, AW),
        moreErrors: Math.max(0, RW.length - AW),
        offInStrict: MW
      }
    }
  },
  5557: (WW, RW, MW) => {
    MW.d(RW, {
      C: () => tR,
      G: () => eW,
      J: () => IW,
      K: () => BW,
      M: () => NW,
      c: () => TW,
      e: () => iR,
      f: () => gR,
      i: () => PW,
      j: () => lW,
      k: () => yR,
      m: () => CW,
      o: () => oW,
      q: () => zR,
      t: () => bR,
      u: () => AW,
      y: () => wW
    });
    const wW = ["forest", "desert", "water", "night", "cave"];
    const CW = {
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
      zR = ["popular", "updated", "newest"],
      AW = 3,
      bR = 32,
      yR = 300;

    function NW(WW, RW) {
      return WW.slice(0, RW).replace(/[\uD800-\uDBFF]$/, "")
    }
    const eW = 64,
      BW = 512,
      tR = 18e5;
    const TW = "Bloxdhub",
      gR = "https://bloxdhub.com/shaders";

    function iR(WW) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(WW)}`
    }
    const YW = "Screenshot generation failed.",
      JW = "Its screenshots couldn't be generated:";

    function PW(WW) {
      var RW;
      return WW === YW || null !== (RW = null === WW || void 0 === WW ? void 0 : WW.startsWith(JW)) && void 0 !== RW && RW
    }

    function IW(WW, RW) {
      return `shaderPacks/${WW}/${RW}.json`
    }

    function oW(WW, RW, MW, wW) {
      return null === RW.renderId ? lW(WW, RW.baselineVersion, MW, wW) : `${WW}/${function(WW,RW,MW,wW){return`shaderPacks/${WW}/${RW}/${MW}-${wW}.webp`}(RW.packId,RW.renderId,MW,wW)}`
    }

    function lW(WW, RW, MW, wW) {
      return `${WW}/${function(WW,RW,MW){return`shaderPacks/baseline/${WW}/${RW}-${MW}.webp`}(RW,MW,wW)}`
    }
  },
  5596: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW,
      e: () => zR,
      f: () => wW,
      g: () => gR,
      h: () => eW,
      l: () => CW,
      n: () => yR,
      r: () => NW,
      v: () => BW
    });
    const wW = 5;

    function CW(WW) {
      return WW === wW
    }
    const zR = 262144,
      AW = 256,
      bR = 256;

    function yR(WW) {
      if ("object" !== typeof WW || null === WW || Array.isArray(WW)) return "The pack has no files.";
      const RW = [];
      for (const [MW, wW] of Object.entries(WW)) {
        if ("string" !== typeof wW) return `${MW} isn't text.`;
        RW.push({
          path: MW,
          source: wW
        })
      }
      return RW.sort(((WW, RW) => eW(WW.path, RW.path))),
        function(WW) {
          if (0 === WW.length) return "The pack has no .wgsl files.";
          if (WW.length > AW) return `The pack has more than ${AW} .wgsl files.`;
          const RW = new Set;
          for (const {
              path: MW
            }
            of WW) {
            const WW = tR(MW);
            if (null !== WW) return WW;
            if (RW.has(MW)) return `The pack has two files at ${MW}.`;
            RW.add(MW)
          }
          return BW(WW) > zR ? `The pack's .wgsl files are over ${zR/1024} KB in total.` : null
        }(RW) ?? RW
    }

    function NW(WW) {
      const RW = {};
      for (const MW of WW) RW[MW.path] = MW.source;
      return RW
    }

    function eW(WW, RW) {
      return WW < RW ? -1 : WW > RW ? 1 : 0
    }

    function BW(WW) {
      const RW = new TextEncoder;
      let MW = 0;
      for (const {
          source: wW
        }
        of WW) MW += RW.encode(wW).byteLength;
      return MW
    }

    function tR(WW) {
      if (!WW.toLowerCase().endsWith(".wgsl")) return `${WW} isn't a .wgsl file.`;
      if (WW.length > bR) return `A file path is over ${bR} characters.`;
      if (WW.includes("\\") || /[\u0000-\u001f]/.test(WW)) return `${WW} isn't a valid file path.`;
      return WW.split("/").some((WW => "" === WW || "." === WW || ".." === WW)) ? `${WW} isn't a valid file path.` : null
    }
    const TW = /^(.*)\[rot\[([1-4])$/;

    function gR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const wW = new Map;
      RW.forEach(((WW, RW) => {
        let {
          numAnimStates: MW,
          animStartIdx: CW
        } = WW;
        for (let zR = 1; zR < MW; zR++) wW.set(CW + zR - 1, RW)
      }));
      const CW = Object.entries(WW),
        zR = new Map;
      for (const [iR, YW] of CW) {
        const WW = TW.exec(iR);
        "1" === WW?.[2] && zR.set(WW[1], YW + 1)
      }
      const AW = WW => {
          const RW = TW.exec(WW);
          return RW && zR.has(RW[1]) ? {
            root: RW[1],
            rotation: Number(RW[2]) - 1
          } : null
        },
        bR = new Set(CW.map((WW => {
          let [RW] = WW;
          return AW(RW)?.root ?? RW
        }))),
        yR = (WW, MW) => {
          const wW = WW.replace(/_?0$/, "");
          return (RW[MW]?.numAnimStates ?? 0) > 1 && !bR.has(wW) ? wW : WW
        },
        NW = new Map;
      for (const [TW, iR] of CW) NW.set(iR, yR(AW(TW)?.root ?? TW, iR));
      const eW = CW.reduce(((WW, RW) => {
          let [, MW] = RW;
          return Math.max(WW, MW + 1)
        }), 0),
        BW = Array.from({
          length: eW
        }, ((WW, RW) => ({
          id: RW + 1,
          rotation: 0
        }))),
        tR = new Map,
        gR = new Map;
      for (const [TW, iR] of CW) {
        const WW = AW(TW),
          RW = wW.get(iR);
        if (void 0 !== RW) {
          const MW = NW.get(RW);
          gR.set(TW, {
            name: TW,
            texture: MW,
            kind: "frame"
          }), WW && !gR.has(WW.root) && gR.set(WW.root, {
            name: WW.root,
            texture: MW,
            kind: "frame"
          });
          continue
        }
        const MW = NW.get(iR),
          CW = WW?.root ?? TW;
        if (MW !== CW && gR.set(CW, {
            name: CW,
            texture: MW,
            kind: "frame"
          }), WW) {
          const RW = zR.get(WW.root);
          BW[iR] = {
            id: RW,
            rotation: WW.rotation
          }, tR.set(MW, RW), gR.set(TW, {
            name: TW,
            texture: MW,
            kind: "rotation"
          })
        } else tR.set(MW, iR + 1)
      }
      for (const TW of tR.keys()) gR.delete(TW);
      for (const [TW, iR] of MW) {
        const WW = tR.get(iR);
        void 0 === WW || tR.has(TW) || (tR.set(TW, WW), gR.delete(TW))
      }
      return {
        named: [...tR].sort(((WW, RW) => {
          let [MW] = WW, [wW] = RW;
          return MW < wW ? -1 : MW > wW ? 1 : 0
        })).map((WW => {
          let [RW, MW] = WW;
          return {
            name: RW,
            id: MW
          }
        })),
        aliases: [...gR.values()],
        layers: BW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);