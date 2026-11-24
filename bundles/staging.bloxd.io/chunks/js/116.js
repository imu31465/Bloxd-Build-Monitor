export const id = 116;
export const ids = [116, 118, 138, 139];
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
  6723: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      h: () => MT
    });
    var WT = mT(44);
    const zT = "shaderPack";
    async function MT() {
      var TT;
      let UT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (TT = await WT.h.getItem(zT, UT)) && void 0 !== TT ? TT : null
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