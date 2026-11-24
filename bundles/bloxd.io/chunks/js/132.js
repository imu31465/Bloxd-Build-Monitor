export const id = 132;
export const ids = [132, 138, 139];
export const modules = {
  40618: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => lT,
      installListedShaderPack: () => jT
    });
    var WT = mT(6630),
      zT = mT(5142),
      MT = mT(1302),
      gT = mT(6682),
      nT = mT(5139),
      HT = mT(6719),
      kT = mT(6716);
    async function jT(TT) {
      const UT = await (0, gT.loadPageShaderPackCompiler)();
      if (null === UT) return {
        kind: "failed",
        reason: "compiler"
      };
      const mT = await lT(TT, UT);
      return "failed" === mT.kind ? mT : await (0, HT.saveShaderPack)(mT.stored, UT) ? ((0, HT.markShaderPackChangePending)(), mT) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function lT(TT, UT) {
      const mT = await async function(TT) {
        let {
          packId: UT,
          sourceHash: mT
        } = TT;
        try {
          const TT = await fetch(`${MT.clientSideServerUrls.s3Url}/${(0,WT.O)(UT,mT)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!TT.ok) return console.error(`Failed to download shader pack ${UT} (${TT.status})`), null;
          const zT = await TT.json();
          return "object" !== typeof zT || null === zT ? (console.error(`Shader pack ${UT}'s source isn't an object`), null) : zT
        } catch (zT) {
          return console.error(`Failed to download shader pack ${UT}`, zT), null
        }
      }(TT);
      if (null === mT) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, nT.f)(mT.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const gT = (0, zT.v)(mT.files);
      if ("string" === typeof gT) return console.error(`A listed shader pack breaks the pack rules: ${gT}`), {
        kind: "failed",
        reason: "invalid"
      };
      const jT = await (0, kT.f)(UT, gT);
      if (!1 === (null === jT || void 0 === jT ? void 0 : jT.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const lT = {
        manifest: {
          apiVersion: mT.apiVersion,
          name: TT.name,
          author: TT.ownerName,
          description: TT.description || null,
          keepCircleShadows: !0 === mT.keepCircleShadows
        },
        files: gT
      };
      return {
        kind: "loaded",
        stored: (0, HT.toStoredShaderPack)(lT, jT, {
          packId: TT.packId,
          sourceHash: TT.sourceHash
        })
      }
    }
  },
  41444: (TT, UT, mT) => {
    mT.d(UT, {
      followListingUpdates: () => LT
    });
    var WT = mT(218),
      zT = mT(25),
      MT = mT(1613),
      gT = mT(1231),
      nT = mT(6682),
      HT = mT(5139),
      kT = mT(40618),
      jT = mT(6719);
    const lT = ["apiVersion", "invalid", "errors"];
    async function LT(TT, UT) {
      const mT = await gT.userContextManager.getCurrentUserContext(),
        LT = await MT.b.getShaderPackVersions(mT, [UT.packId]),
        pT = function(TT, UT, mT) {
          var WT;
          if (void 0 === mT || "unlisted" === mT.status) return {
            kind: "none"
          };
          if ("banned" === mT.status) return {
            kind: "remove"
          };
          if (!(0, HT.f)(mT.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: zT,
            name: MT,
            ownerName: gT,
            description: nT
          } = mT;
          return zT !== UT.sourceHash && zT !== UT.rejectedSourceHash ? {
            kind: "update",
            sourceHash: zT,
            name: MT,
            ownerName: gT,
            description: nT
          } : MT !== TT.manifest.name || gT !== TT.manifest.author || (nT || null) !== (null !== (WT = TT.manifest.description) && void 0 !== WT ? WT : null) ? {
            kind: "rename",
            name: MT,
            ownerName: gT,
            description: nT
          } : {
            kind: "none"
          }
        }(TT, UT, (0, WT.b)(LT, UT.packId));
      if ("update" === pT.kind && "landingPage" !== zT.b.get("gameState")) return !1;
      const BT = "update" === pT.kind || "rename" === pT.kind,
        ZT = BT ? await (0, nT.loadPageShaderPackCompiler)() : null;
      if (BT && null === ZT) return console.warn(`Didn't follow shader pack ${UT.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const cT = await async function(TT, UT, mT, WT) {
        switch (mT.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...TT, manifest: {
                ...TT.manifest,
                name: mT.name,
                author: mT.ownerName,
                description: mT.description || null
              }
            };
          case "update": {
            if (null === WT) return;
            const {
              sourceHash: zT,
              name: MT,
              ownerName: gT,
              description: nT
            } = mT, HT = await (0, kT.b)({
              packId: UT.packId,
              sourceHash: zT,
              name: MT,
              ownerName: gT,
              description: nT
            }, WT);
            if ("loaded" === HT.kind && null !== HT.stored.validation) return HT.stored;
            const jT = "failed" === HT.kind ? HT.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${UT.packId}: ${jT}`), "failed" === HT.kind && lT.includes(HT.reason) ? {
              ...TT,
              listing: {
                ...UT,
                rejectedSourceHash: zT
              }
            } : void 0
          }
        }
      }(TT, UT, pT, ZT);
      return void 0 === cT || (await (0, jT.replaceShaderPack)(TT, cT, ZT) ? (null !== cT && cT.files === TT.files || (0, jT.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6719: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      forgetShaderPackActiveHint: () => wT,
      isOtherApiVersion: () => YT,
      isShaderPackActive: () => iT,
      isShaderPackChangePending: () => eT,
      markShaderPackChangePending: () => OT,
      pageShaderPackValidationVersion: () => JT,
      reconcileStoredShaderPackHint: () => dT,
      removeShaderPack: () => qT,
      replaceShaderPack: () => cT,
      saveShaderPack: () => ZT,
      shaderPackNeedsCheck: () => xT,
      storedPackOutcome: () => bT,
      storedShaderPackFiles: () => LT,
      toStoredShaderPack: () => lT
    });
    var WT = mT(5142),
      zT = mT(5139),
      MT = mT(44),
      gT = mT(3551),
      nT = mT(6723),
      HT = mT(6698);
    const kT = "shaderPackChangePending";
    let jT = null;

    function lT(TT, UT, mT) {
      return {
        manifest: TT.manifest,
        files: (0, WT.w)(TT.files),
        validation: UT,
        ...mT && {
          listing: mT
        }
      }
    }

    function LT(TT) {
      return Object.keys(TT.files).map((UT => ({
        path: UT,
        source: TT.files[UT]
      })))
    }
    let pT = Promise.resolve();

    function BT(TT) {
      const UT = pT.then(TT);
      return pT = UT.catch((() => {})), UT
    }

    function ZT(TT, UT) {
      return BT((() => vT(TT, UT)))
    }

    function cT(TT, UT, mT) {
      return BT((async () => JSON.stringify(await (0, nT.h)()) === JSON.stringify(TT) && (null === UT ? (await fT(), !0) : vT(UT, mT))))
    }
    async function vT(TT, UT) {
      const mT = await MT.h.setItem(nT.d, TT);
      return mT && tT(TT, UT), mT
    }
    async function fT() {
      await MT.h.removeItem(nT.d), MT.l.removeItem(gT.e)
    }

    function qT() {
      return BT(fT)
    }

    function iT(TT, UT) {
      return "active" === bT(TT, UT).kind
    }

    function bT(TT, UT) {
      var mT;
      return null === TT ? {
        kind: "none",
        reason: "nothingStored"
      } : YT(TT) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (mT = TT.validation) || void 0 === mT ? void 0 : mT.ok) || TT.validation.fromRecheck ? null === UT ? {
        kind: "none",
        reason: "noCompiler"
      } : xT(TT, UT) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : TT.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function OT() {
      MT.m.setItem(kT, performance.timeOrigin)
    }

    function eT() {
      return MT.m.getItem(kT) === performance.timeOrigin
    }

    function YT(TT) {
      return !(0, zT.f)(TT.manifest.apiVersion)
    }

    function JT(TT) {
      return jT ??= TT.JF((0, HT.shaderPackTextures)()), jT
    }

    function xT(TT, UT) {
      var mT;
      return (null === (mT = TT.validation) || void 0 === mT ? void 0 : mT.headerVersion) !== JT(UT)
    }

    function dT(TT) {
      return BT((async () => {
        tT(await (0, nT.h)(!0), TT)
      }))
    }

    function wT() {
      return BT((async () => {
        MT.l.removeItem(gT.e)
      }))
    }

    function tT(TT, UT) {
      iT(TT, UT) ? MT.l.setItem(gT.e, !0) : MT.l.removeItem(gT.e)
    }
  },
  6698: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      loadShaderPackTextures: () => gT,
      shaderPackTextures: () => nT
    });
    var WT = mT(5142);
    let zT = null,
      MT = null;

    function gT() {
      return MT ??= Promise.all([mT.e(73), mT.e(190)]).then((() => mT(40614))).then((TT => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: UT,
          textureNameToIndex: mT,
          textureAnimationData: MT
        } = TT;
        return zT ??= (0, WT.l)(mT, MT, UT), zT
      })), MT
    }

    function nT() {
      if (null === zT) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return zT
    }
  },
  6716: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => HT,
      f: () => nT
    });
    var WT = mT(6719),
      zT = mT(6698),
      MT = mT(117);
    const gT = 100;
    async function nT(TT, UT) {
      var mT;
      let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (mT = navigator.gpu) && void 0 !== mT ? mT : null;
      const gT = TT.mTT(UT, (0, zT.shaderPackTextures)());
      if (gT.errors.length > 0) return kT(TT, gT.errors, gT.offInStrict);
      const nT = await async function(TT) {
        if (!TT) return null;
        try {
          const UT = await (0, MT.s)(TT);
          return UT ? await UT.requestDevice() : null
        } catch (UT) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", UT), null
        }
      }(WT);
      if (!nT) return null;
      let HT = !1;
      nT.lost.then((() => {
        HT = !0
      }));
      try {
        const UT = await Promise.all(gT.validationModules.map((UT => async function(TT, UT, mT) {
          UT.pushErrorScope("validation");
          const WT = UT.createShaderModule({
              code: mT.code
            }),
            zT = UT.popErrorScope(),
            {
              messages: MT
            } = await WT.getCompilationInfo(),
            gT = MT.filter((TT => "error" === TT.type)).map((UT => TT.mapValidationMessage(mT, UT))),
            nT = await zT;
          nT && 0 === gT.length && gT.push({
            file: null,
            line: 0,
            message: nT.message,
            variants: [mT.key]
          });
          return gT
        }(TT, nT, UT))));
        return HT ? null : kT(TT, TT.mWT(UT.flat()), gT.offInStrict)
      } catch (jT) {
        return console.error("Couldn't validate the shader pack on WebGPU.", jT), null
      } finally {
        nT.destroy()
      }
    }
    async function HT(TT, UT) {
      var mT;
      if (!(0, WT.shaderPackNeedsCheck)(TT, UT) || (0, WT.isOtherApiVersion)(TT)) return TT;
      const zT = await nT(UT, (0, WT.storedShaderPackFiles)(TT));
      if (!zT) return TT;
      const MT = !1 === (null === (mT = TT.validation) || void 0 === mT ? void 0 : mT.ok) && !TT.validation.fromRecheck,
        gT = {
          ...TT,
          validation: MT ? zT : {
            ...zT,
            fromRecheck: !0
          }
        };
      return await (0, WT.replaceShaderPack)(TT, gT, UT) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), gT
    }

    function kT(TT, UT, mT) {
      return {
        headerVersion: (0, WT.pageShaderPackValidationVersion)(TT),
        ok: 0 === UT.length,
        errors: UT.slice(0, gT),
        moreErrors: Math.max(0, UT.length - gT),
        offInStrict: mT
      }
    }
  },
  6630: (TT, UT, mT) => {
    mT.d(UT, {
      C: () => nT,
      F: () => gT,
      G: () => WT,
      K: () => LT,
      L: () => jT,
      O: () => iT,
      S: () => lT,
      T: () => kT,
      e: () => BT,
      h: () => cT,
      i: () => ZT,
      j: () => pT,
      n: () => qT,
      q: () => OT,
      s: () => HT,
      t: () => zT,
      x: () => bT,
      z: () => MT
    });
    const WT = ["forest", "desert", "water", "night", "cave"];
    const zT = {
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
      MT = ["popular", "updated", "newest"],
      gT = 3,
      nT = 32,
      HT = 300;

    function kT(TT, UT) {
      return TT.slice(0, UT).replace(/[\uD800-\uDBFF]$/, "")
    }
    const jT = 64,
      lT = 512,
      LT = 18e5;

    function pT(TT) {
      const UT = TT,
        mT = null === UT || void 0 === UT ? void 0 : UT.files;
      return "number" === typeof(null === UT || void 0 === UT ? void 0 : UT.apiVersion) && "string" === typeof UT.name && (null === UT.author || "string" === typeof UT.author) && (void 0 === UT.keepCircleShadows || "boolean" === typeof UT.keepCircleShadows) && "object" === typeof mT && null !== mT && Object.values(mT).every((TT => "string" === typeof TT))
    }
    const BT = "Bloxdhub",
      ZT = "https://bloxdhub.com/shaders";

    function cT(TT) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(TT)}`
    }
    const vT = "Screenshot generation failed.",
      fT = "Its screenshots couldn't be generated:";

    function qT(TT) {
      var UT;
      return TT === vT || null !== (UT = null === TT || void 0 === TT ? void 0 : TT.startsWith(fT)) && void 0 !== UT && UT
    }

    function iT(TT, UT) {
      return `shaderPacks/${TT}/${UT}.json`
    }

    function bT(TT, UT, mT, WT) {
      return null === UT.renderId ? OT(TT, UT.baselineVersion, mT, WT) : `${TT}/${function(TT,UT,mT,WT){return`shaderPacks/${TT}/${UT}/${mT}-${WT}.webp`}(UT.packId,UT.renderId,mT,WT)}`
    }

    function OT(TT, UT, mT, WT) {
      return `${TT}/${function(TT,UT,mT){return`shaderPacks/baseline/${TT}/${UT}-${mT}.webp`}(UT,mT,WT)}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);