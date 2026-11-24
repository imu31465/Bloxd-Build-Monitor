export const id = 115;
export const ids = [115, 118, 138, 139];
export const modules = {
  5139: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT.j,
      e: () => zT,
      f: () => WT.q
    });
    var WT = mT(5142);
    const zT = [!1, !0].flatMap((TT => ["terrain", "liquid", "model"].map((UT => ({
      strict: TT,
      program: UT
    })))))
  },
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
  5142: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      f: () => gT,
      j: () => WT,
      l: () => ZT,
      o: () => lT,
      q: () => zT,
      s: () => MT,
      v: () => kT,
      w: () => jT,
      x: () => LT
    });
    const WT = 5;

    function zT(TT) {
      return TT === WT
    }

    function MT(TT) {
      return [...TT.features]
    }
    const gT = 262144,
      nT = 256,
      HT = 256;

    function kT(TT) {
      if ("object" !== typeof TT || null === TT || Array.isArray(TT)) return "The pack has no files.";
      const UT = [];
      for (const [mT, WT] of Object.entries(TT)) {
        if ("string" !== typeof WT) return `${mT} isn't text.`;
        UT.push({
          path: mT,
          source: WT
        })
      }
      return UT.sort(((TT, UT) => lT(TT.path, UT.path))),
        function(TT) {
          if (0 === TT.length) return "The pack has no .wgsl files.";
          if (TT.length > nT) return `The pack has more than ${nT} .wgsl files.`;
          const UT = new Set;
          for (const {
              path: mT
            }
            of TT) {
            const TT = pT(mT);
            if (null !== TT) return TT;
            if (UT.has(mT)) return `The pack has two files at ${mT}.`;
            UT.add(mT)
          }
          return LT(TT) > gT ? `The pack's .wgsl files are over ${gT/1024} KB in total.` : null
        }(UT) ?? UT
    }

    function jT(TT) {
      const UT = {};
      for (const mT of TT) UT[mT.path] = mT.source;
      return UT
    }

    function lT(TT, UT) {
      return TT < UT ? -1 : TT > UT ? 1 : 0
    }

    function LT(TT) {
      const UT = new TextEncoder;
      let mT = 0;
      for (const {
          source: WT
        }
        of TT) mT += UT.encode(WT).byteLength;
      return mT
    }

    function pT(TT) {
      if (!TT.toLowerCase().endsWith(".wgsl")) return `${TT} isn't a .wgsl file.`;
      if (TT.length > HT) return `A file path is over ${HT} characters.`;
      if (TT.includes("\\") || /[\u0000-\u001f]/.test(TT)) return `${TT} isn't a valid file path.`;
      return TT.split("/").some((TT => "" === TT || "." === TT || ".." === TT)) ? `${TT} isn't a valid file path.` : null
    }
    const BT = /^(.*)\[rot\[([1-4])$/;

    function ZT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const WT = new Map;
      UT.forEach(((TT, UT) => {
        let {
          numAnimStates: mT,
          animStartIdx: zT
        } = TT;
        for (let MT = 1; MT < mT; MT++) WT.set(zT + MT - 1, UT)
      }));
      const zT = Object.entries(TT),
        MT = new Map;
      for (const [ZT, cT] of zT) {
        const TT = BT.exec(ZT);
        "1" === TT?.[2] && MT.set(TT[1], cT + 1)
      }
      const gT = TT => {
          const UT = BT.exec(TT);
          return UT && MT.has(UT[1]) ? {
            root: UT[1],
            rotation: Number(UT[2]) - 1
          } : null
        },
        nT = new Set(zT.map((TT => {
          let [UT] = TT;
          return gT(UT)?.root ?? UT
        }))),
        HT = (TT, mT) => {
          const WT = TT.replace(/_?0$/, "");
          return (UT[mT]?.numAnimStates ?? 0) > 1 && !nT.has(WT) ? WT : TT
        },
        kT = new Map;
      for (const [BT, ZT] of zT) kT.set(ZT, HT(gT(BT)?.root ?? BT, ZT));
      const jT = zT.reduce(((TT, UT) => {
          let [, mT] = UT;
          return Math.max(TT, mT + 1)
        }), 0),
        lT = Array.from({
          length: jT
        }, ((TT, UT) => ({
          id: UT + 1,
          rotation: 0
        }))),
        LT = new Map,
        pT = new Map;
      for (const [BT, ZT] of zT) {
        const TT = gT(BT),
          UT = WT.get(ZT);
        if (void 0 !== UT) {
          const mT = kT.get(UT);
          pT.set(BT, {
            name: BT,
            texture: mT,
            kind: "frame"
          }), TT && !pT.has(TT.root) && pT.set(TT.root, {
            name: TT.root,
            texture: mT,
            kind: "frame"
          });
          continue
        }
        const mT = kT.get(ZT),
          zT = TT?.root ?? BT;
        if (mT !== zT && pT.set(zT, {
            name: zT,
            texture: mT,
            kind: "frame"
          }), TT) {
          const UT = MT.get(TT.root);
          lT[ZT] = {
            id: UT,
            rotation: TT.rotation
          }, LT.set(mT, UT), pT.set(BT, {
            name: BT,
            texture: mT,
            kind: "rotation"
          })
        } else LT.set(mT, ZT + 1)
      }
      for (const BT of LT.keys()) pT.delete(BT);
      for (const [BT, ZT] of mT) {
        const TT = LT.get(ZT);
        void 0 === TT || LT.has(BT) || (LT.set(BT, TT), pT.delete(BT))
      }
      return {
        named: [...LT].sort(((TT, UT) => {
          let [mT] = TT, [WT] = UT;
          return mT < WT ? -1 : mT > WT ? 1 : 0
        })).map((TT => {
          let [UT, mT] = TT;
          return {
            name: UT,
            id: mT
          }
        })),
        aliases: [...pT.values()],
        layers: lT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);