export const id = 132;
export const ids = [132, 138, 139];
export const modules = {
  40541: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => hB,
      installListedShaderPack: () => nB
    });
    var TB = ZB(6731),
      JB = ZB(5210),
      oB = ZB(1258),
      GB = ZB(6763),
      vB = ZB(5204),
      kB = ZB(6800),
      cB = ZB(6792);
    async function nB(BB) {
      const IB = await (0, GB.loadPageShaderPackCompiler)();
      if (null === IB) return {
        kind: "failed",
        reason: "compiler"
      };
      const ZB = await hB(BB, IB);
      return "failed" === ZB.kind ? ZB : await (0, kB.saveShaderPack)(ZB.stored, IB) ? ((0, kB.markShaderPackChangePending)(), ZB) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function hB(BB, IB) {
      const ZB = await async function(BB) {
        let {
          packId: IB,
          sourceHash: ZB
        } = BB;
        try {
          const BB = await fetch(`${oB.clientSideServerUrls.s3Url}/${(0,TB.O)(IB,ZB)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!BB.ok) return console.error(`Failed to download shader pack ${IB} (${BB.status})`), null;
          const JB = await BB.json();
          return "object" !== typeof JB || null === JB ? (console.error(`Shader pack ${IB}'s source isn't an object`), null) : JB
        } catch (JB) {
          return console.error(`Failed to download shader pack ${IB}`, JB), null
        }
      }(BB);
      if (null === ZB) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, vB.g)(ZB.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const GB = (0, JB.u)(ZB.files);
      if ("string" === typeof GB) return console.error(`A listed shader pack breaks the pack rules: ${GB}`), {
        kind: "failed",
        reason: "invalid"
      };
      const nB = await (0, cB.h)(IB, GB);
      if (!1 === (null === nB || void 0 === nB ? void 0 : nB.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const hB = {
        manifest: {
          apiVersion: ZB.apiVersion,
          name: BB.name,
          author: BB.ownerName,
          description: BB.description || null,
          keepCircleShadows: !0 === ZB.keepCircleShadows
        },
        files: GB
      };
      return {
        kind: "loaded",
        stored: (0, kB.toStoredShaderPack)(hB, nB, {
          packId: BB.packId,
          sourceHash: BB.sourceHash
        })
      }
    }
  },
  41326: (BB, IB, ZB) => {
    ZB.d(IB, {
      followListingUpdates: () => zB
    });
    var TB = ZB(212),
      JB = ZB(20),
      oB = ZB(1561),
      GB = ZB(1186),
      vB = ZB(6763),
      kB = ZB(5204),
      cB = ZB(40541),
      nB = ZB(6800);
    const hB = ["apiVersion", "invalid", "errors"];
    async function zB(BB, IB) {
      const ZB = await GB.userContextManager.getCurrentUserContext(),
        zB = await oB.c.getShaderPackVersions(ZB, [IB.packId]),
        FB = function(BB, IB, ZB) {
          var TB;
          if (void 0 === ZB || "unlisted" === ZB.status) return {
            kind: "none"
          };
          if ("banned" === ZB.status) return {
            kind: "remove"
          };
          if (!(0, kB.g)(ZB.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: JB,
            name: oB,
            ownerName: GB,
            description: vB
          } = ZB;
          return JB !== IB.sourceHash && JB !== IB.rejectedSourceHash ? {
            kind: "update",
            sourceHash: JB,
            name: oB,
            ownerName: GB,
            description: vB
          } : oB !== BB.manifest.name || GB !== BB.manifest.author || (vB || null) !== (null !== (TB = BB.manifest.description) && void 0 !== TB ? TB : null) ? {
            kind: "rename",
            name: oB,
            ownerName: GB,
            description: vB
          } : {
            kind: "none"
          }
        }(BB, IB, (0, TB.e)(zB, IB.packId));
      if ("update" === FB.kind && "landingPage" !== JB.d.get("gameState")) return !1;
      const NB = "update" === FB.kind || "rename" === FB.kind,
        gB = NB ? await (0, vB.loadPageShaderPackCompiler)() : null;
      if (NB && null === gB) return console.warn(`Didn't follow shader pack ${IB.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const qB = await async function(BB, IB, ZB, TB) {
        switch (ZB.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...BB, manifest: {
                ...BB.manifest,
                name: ZB.name,
                author: ZB.ownerName,
                description: ZB.description || null
              }
            };
          case "update": {
            if (null === TB) return;
            const {
              sourceHash: JB,
              name: oB,
              ownerName: GB,
              description: vB
            } = ZB, kB = await (0, cB.d)({
              packId: IB.packId,
              sourceHash: JB,
              name: oB,
              ownerName: GB,
              description: vB
            }, TB);
            if ("loaded" === kB.kind && null !== kB.stored.validation) return kB.stored;
            const nB = "failed" === kB.kind ? kB.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${IB.packId}: ${nB}`), "failed" === kB.kind && hB.includes(kB.reason) ? {
              ...BB,
              listing: {
                ...IB,
                rejectedSourceHash: JB
              }
            } : void 0
          }
        }
      }(BB, IB, FB, gB);
      return void 0 === qB || (await (0, nB.replaceShaderPack)(BB, qB, gB) ? (null !== qB && qB.files === BB.files || (0, nB.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6800: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      forgetShaderPackActiveHint: () => pB,
      isOtherApiVersion: () => wB,
      isShaderPackActive: () => dB,
      isShaderPackChangePending: () => sB,
      markShaderPackChangePending: () => QB,
      pageShaderPackValidationVersion: () => OB,
      reconcileStoredShaderPackHint: () => iB,
      removeShaderPack: () => WB,
      replaceShaderPack: () => qB,
      saveShaderPack: () => gB,
      shaderPackNeedsCheck: () => YB,
      storedPackOutcome: () => CB,
      storedShaderPackFiles: () => zB,
      toStoredShaderPack: () => hB
    });
    var TB = ZB(5210),
      JB = ZB(5204),
      oB = ZB(36),
      GB = ZB(3640),
      vB = ZB(6808),
      kB = ZB(6778);
    const cB = "shaderPackChangePending";
    let nB = null;

    function hB(BB, IB, ZB) {
      return {
        manifest: BB.manifest,
        files: (0, TB.y)(BB.files),
        validation: IB,
        ...ZB && {
          listing: ZB
        }
      }
    }

    function zB(BB) {
      return Object.keys(BB.files).map((IB => ({
        path: IB,
        source: BB.files[IB]
      })))
    }
    let FB = Promise.resolve();

    function NB(BB) {
      const IB = FB.then(BB);
      return FB = IB.catch((() => {})), IB
    }

    function gB(BB, IB) {
      return NB((() => yB(BB, IB)))
    }

    function qB(BB, IB, ZB) {
      return NB((async () => JSON.stringify(await (0, vB.i)()) === JSON.stringify(BB) && (null === IB ? (await UB(), !0) : yB(IB, ZB))))
    }
    async function yB(BB, IB) {
      const ZB = await oB.i.setItem(vB.e, BB);
      return ZB && aB(BB, IB), ZB
    }
    async function UB() {
      await oB.i.removeItem(vB.e), oB.m.removeItem(GB.e)
    }

    function WB() {
      return NB(UB)
    }

    function dB(BB, IB) {
      return "active" === CB(BB, IB).kind
    }

    function CB(BB, IB) {
      var ZB;
      return null === BB ? {
        kind: "none",
        reason: "nothingStored"
      } : wB(BB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ZB = BB.validation) || void 0 === ZB ? void 0 : ZB.ok) || BB.validation.fromRecheck ? null === IB ? {
        kind: "none",
        reason: "noCompiler"
      } : YB(BB, IB) ? {
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

    function QB() {
      oB.n.setItem(cB, performance.timeOrigin)
    }

    function sB() {
      return oB.n.getItem(cB) === performance.timeOrigin
    }

    function wB(BB) {
      return !(0, JB.g)(BB.manifest.apiVersion)
    }

    function OB(BB) {
      return nB ??= BB.rM((0, kB.shaderPackTextures)()), nB
    }

    function YB(BB, IB) {
      var ZB;
      return (null === (ZB = BB.validation) || void 0 === ZB ? void 0 : ZB.headerVersion) !== OB(IB)
    }

    function iB(BB) {
      return NB((async () => {
        aB(await (0, vB.i)(!0), BB)
      }))
    }

    function pB() {
      return NB((async () => {
        oB.m.removeItem(GB.e)
      }))
    }

    function aB(BB, IB) {
      dB(BB, IB) ? oB.m.setItem(GB.e, !0) : oB.m.removeItem(GB.e)
    }
  },
  6778: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      loadShaderPackTextures: () => GB,
      shaderPackTextures: () => vB
    });
    var TB = ZB(5210);
    let JB = null,
      oB = null;

    function GB() {
      return oB ??= Promise.all([ZB.e(73), ZB.e(190)]).then((() => ZB(40534))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: IB,
          textureNameToIndex: ZB,
          textureAnimationData: oB
        } = BB;
        return JB ??= (0, TB.l)(ZB, oB, IB), JB
      })), oB
    }

    function vB() {
      if (null === JB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return JB
    }
  },
  6792: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => kB,
      h: () => vB
    });
    var TB = ZB(6800),
      JB = ZB(6778),
      oB = ZB(129);
    const GB = 100;
    async function vB(BB, IB) {
      var ZB;
      let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZB = navigator.gpu) && void 0 !== ZB ? ZB : null;
      const GB = BB.yBB(IB, (0, JB.shaderPackTextures)());
      if (GB.errors.length > 0) return cB(BB, GB.errors, GB.offInStrict);
      const vB = await async function(BB) {
        if (!BB) return null;
        try {
          const IB = await (0, oB.w)(BB);
          return IB ? await IB.requestDevice() : null
        } catch (IB) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", IB), null
        }
      }(TB);
      if (!vB) return null;
      let kB = !1;
      vB.lost.then((() => {
        kB = !0
      }));
      try {
        const IB = await Promise.all(GB.validationModules.map((IB => async function(BB, IB, ZB) {
          IB.pushErrorScope("validation");
          const TB = IB.createShaderModule({
              code: ZB.code
            }),
            JB = IB.popErrorScope(),
            {
              messages: oB
            } = await TB.getCompilationInfo(),
            GB = oB.filter((BB => "error" === BB.type)).map((IB => BB.mapValidationMessage(ZB, IB))),
            vB = await JB;
          vB && 0 === GB.length && GB.push({
            file: null,
            line: 0,
            message: vB.message,
            variants: [ZB.key]
          });
          return GB
        }(BB, vB, IB))));
        return kB ? null : cB(BB, BB.qTB(IB.flat()), GB.offInStrict)
      } catch (nB) {
        return console.error("Couldn't validate the shader pack on WebGPU.", nB), null
      } finally {
        vB.destroy()
      }
    }
    async function kB(BB, IB) {
      var ZB;
      if (!(0, TB.shaderPackNeedsCheck)(BB, IB) || (0, TB.isOtherApiVersion)(BB)) return BB;
      const JB = await vB(IB, (0, TB.storedShaderPackFiles)(BB));
      if (!JB) return BB;
      const oB = !1 === (null === (ZB = BB.validation) || void 0 === ZB ? void 0 : ZB.ok) && !BB.validation.fromRecheck,
        GB = {
          ...BB,
          validation: oB ? JB : {
            ...JB,
            fromRecheck: !0
          }
        };
      return await (0, TB.replaceShaderPack)(BB, GB, IB) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), GB
    }

    function cB(BB, IB, ZB) {
      return {
        headerVersion: (0, TB.pageShaderPackValidationVersion)(BB),
        ok: 0 === IB.length,
        errors: IB.slice(0, GB),
        moreErrors: Math.max(0, IB.length - GB),
        offInStrict: ZB
      }
    }
  },
  6731: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => vB,
      B: () => GB,
      F: () => TB,
      G: () => zB,
      K: () => nB,
      O: () => dB,
      P: () => hB,
      R: () => cB,
      d: () => NB,
      f: () => qB,
      h: () => gB,
      i: () => FB,
      j: () => WB,
      n: () => QB,
      o: () => kB,
      r: () => JB,
      u: () => CB,
      y: () => oB
    });
    const TB = ["forest", "desert", "water", "night", "cave"];
    const JB = {
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
      oB = ["popular", "updated", "newest"],
      GB = 3,
      vB = 32,
      kB = 300;

    function cB(BB, IB) {
      return BB.slice(0, IB).replace(/[\uD800-\uDBFF]$/, "")
    }
    const nB = 64,
      hB = 512,
      zB = 18e5;

    function FB(BB) {
      const IB = BB,
        ZB = null === IB || void 0 === IB ? void 0 : IB.files;
      return "number" === typeof(null === IB || void 0 === IB ? void 0 : IB.apiVersion) && "string" === typeof IB.name && (null === IB.author || "string" === typeof IB.author) && (void 0 === IB.keepCircleShadows || "boolean" === typeof IB.keepCircleShadows) && "object" === typeof ZB && null !== ZB && Object.values(ZB).every((BB => "string" === typeof BB))
    }
    const NB = "Bloxdhub",
      gB = "https://bloxdhub.com/shaders";

    function qB(BB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
    }
    const yB = "Screenshot generation failed.",
      UB = "Its screenshots couldn't be generated:";

    function WB(BB) {
      var IB;
      return BB === yB || null !== (IB = null === BB || void 0 === BB ? void 0 : BB.startsWith(UB)) && void 0 !== IB && IB
    }

    function dB(BB, IB) {
      return `shaderPacks/${BB}/${IB}.json`
    }

    function CB(BB, IB, ZB, TB) {
      return null === IB.renderId ? QB(BB, IB.baselineVersion, ZB, TB) : `${BB}/${function(BB,IB,ZB,TB){return`shaderPacks/${BB}/${IB}/${ZB}-${TB}.webp`}(IB.packId,IB.renderId,ZB,TB)}`
    }

    function QB(BB, IB, ZB, TB) {
      return `${BB}/${function(BB,IB,ZB){return`shaderPacks/baseline/${BB}/${IB}-${ZB}.webp`}(IB,ZB,TB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);