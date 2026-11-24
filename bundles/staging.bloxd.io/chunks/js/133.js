export const id = 133;
export const ids = [133];
export const modules = {
  41892: (TT, UT, mT) => {
    mT.d(UT, {
      startHarnessShaderPack: () => lT
    });
    var WT = mT(6630),
      zT = mT(5142),
      MT = mT(6713),
      gT = mT(6682),
      nT = mT(5139),
      HT = mT(39343),
      kT = mT(6698),
      jT = mT(6716);
    async function lT(TT, UT) {
      const {
        stored: mT,
        info: lT
      } = await async function(TT, UT) {
        const mT = await async function(TT) {
          const UT = await fetch(TT);
          if (!UT.ok) throw new Error(`Couldn't fetch the shader pack at ${TT}: HTTP ${UT.status}`);
          const mT = await UT.json();
          if (!(0, WT.j)(mT)) throw new Error(`The shader pack at ${TT} isn't a shader pack listing source`);
          return mT
        }(TT);
        if (!(0, nT.f)(mT.apiVersion)) throw new Error(`The pack is for shader pack API version ${mT.apiVersion}; this build runs version ${nT.b}`);
        const HT = {
            manifest: {
              apiVersion: mT.apiVersion,
              name: mT.name,
              author: mT.author,
              description: null,
              keepCircleShadows: !0 === mT.keepCircleShadows
            },
            files: mT.files,
            validation: null
          },
          lT = {
            url: TT,
            name: mT.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          LT = (0, zT.v)(mT.files);
        if ("string" === typeof LT) return lT.errors = [{
          file: null,
          line: 0,
          message: LT
        }], {
          stored: HT,
          info: lT
        };
        const pT = await (0, gT.loadPageShaderPackCompiler)();
        if (!pT) throw new Error("The shader pack compiler couldn't load");
        const BT = await (0, jT.f)(pT, LT);
        if (!BT) throw new Error("No WebGPU device could validate the shader pack");
        if (lT.errors = [...BT.errors], BT.ok) {
          const TT = pT.mTT(LT, (0, kT.shaderPackTextures)());
          lT.features = (0, zT.s)(TT), lT.runsInMode = (0, MT.l)(TT.variants, UT)
        }
        return {
          stored: {
            ...HT,
            validation: BT
          },
          info: lT
        }
      }(TT, UT), [LT] = lT.errors;
      if (LT) {
        const TT = null === LT.file ? "" : `${LT.file}:${LT.line}: `,
          UT = lT.errors.length > 1 ? ` (${lT.errors.length-1} more)` : "";
        return {
          info: lT,
          problem: `The shader pack doesn't compile: ${TT}${LT.message}${UT}`
        }
      }
      return lT.runsInMode ? ((0, HT.setHarnessUrlShaderPack)(mT, UT), {
        info: lT,
        problem: null
      }) : {
        info: lT,
        problem: `The shader pack runs nothing in ${UT} mode`
      }
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