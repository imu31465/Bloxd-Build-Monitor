export const id = 127;
export const ids = [127, 130];
export const modules = {
  6597: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT.e,
      d: () => MT,
      f: () => lT.l
    });
    var lT = cT(6581);
    const MT = [!1, !0].flatMap((TT => ["terrain", "liquid", "model"].map((kT => ({
      strict: TT,
      program: kT
    })))))
  },
  6641: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      forgetShaderPackActiveHint: () => zT,
      isOtherApiVersion: () => PT,
      isShaderPackActive: () => DT,
      isShaderPackChangePending: () => rT,
      markShaderPackChangePending: () => FT,
      pageShaderPackValidationVersion: () => wT,
      reconcileStoredShaderPackHint: () => bT,
      removeShaderPack: () => ST,
      replaceShaderPack: () => hT,
      saveShaderPack: () => tT,
      shaderPackNeedsCheck: () => mT,
      storedPackOutcome: () => aT,
      storedShaderPackFiles: () => CT,
      toStoredShaderPack: () => AT
    });
    var lT = cT(6581),
      MT = cT(6597),
      KT = cT(47),
      OT = cT(3383),
      yT = cT(6647),
      fT = cT(6623);
    const xT = "shaderPackChangePending";
    let IT = null;

    function AT(TT, kT, cT) {
      return {
        manifest: TT.manifest,
        files: (0, lT.s)(TT.files),
        validation: kT,
        ...cT && {
          listing: cT
        }
      }
    }

    function CT(TT) {
      return Object.keys(TT.files).map((kT => ({
        path: kT,
        source: TT.files[kT]
      })))
    }
    let jT = Promise.resolve();

    function vT(TT) {
      const kT = jT.then(TT);
      return jT = kT.catch((() => {})), kT
    }

    function tT(TT, kT) {
      return vT((() => NT(TT, kT)))
    }

    function hT(TT, kT, cT) {
      return vT((async () => JSON.stringify(await (0, yT.e)()) === JSON.stringify(TT) && (null === kT ? (await QT(), !0) : NT(kT, cT))))
    }
    async function NT(TT, kT) {
      const cT = await KT.d.setItem(yT.b, TT);
      return cT && JT(TT, kT), cT
    }
    async function QT() {
      await KT.d.removeItem(yT.b), KT.e.removeItem(OT.d)
    }

    function ST() {
      return vT(QT)
    }

    function DT(TT, kT) {
      return "active" === aT(TT, kT).kind
    }

    function aT(TT, kT) {
      var cT;
      return null === TT ? {
        kind: "none",
        reason: "nothingStored"
      } : PT(TT) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (cT = TT.validation) || void 0 === cT ? void 0 : cT.ok) || TT.validation.fromRecheck ? null === kT ? {
        kind: "none",
        reason: "noCompiler"
      } : mT(TT, kT) ? {
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

    function FT() {
      KT.g.setItem(xT, performance.timeOrigin)
    }

    function rT() {
      return KT.g.getItem(xT) === performance.timeOrigin
    }

    function PT(TT) {
      return !(0, MT.f)(TT.manifest.apiVersion)
    }

    function wT(TT) {
      return IT ??= TT.OJ((0, fT.shaderPackTextures)()), IT
    }

    function mT(TT, kT) {
      var cT;
      return (null === (cT = TT.validation) || void 0 === cT ? void 0 : cT.headerVersion) !== wT(kT)
    }

    function bT(TT) {
      return vT((async () => {
        JT(await (0, yT.e)(!0), TT)
      }))
    }

    function zT() {
      return vT((async () => {
        KT.e.removeItem(OT.d)
      }))
    }

    function JT(TT, kT) {
      DT(TT, kT) ? KT.e.setItem(OT.d, !0) : KT.e.removeItem(OT.d)
    }
  },
  6623: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      loadShaderPackTextures: () => OT,
      shaderPackTextures: () => yT
    });
    var lT = cT(6581);
    let MT = null,
      KT = null;

    function OT() {
      return KT ??= Promise.all([cT.e(70), cT.e(198)]).then((() => cT(40123))).then((TT => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: kT,
          textureNameToIndex: cT,
          textureAnimationData: KT
        } = TT;
        return MT ??= (0, lT.i)(cT, KT, kT), MT
      })), KT
    }

    function yT() {
      if (null === MT) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return MT
    }
  },
  6581: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT,
      c: () => KT,
      e: () => lT,
      i: () => vT,
      j: () => IT,
      l: () => MT,
      p: () => fT,
      s: () => xT,
      u: () => AT
    });
    const lT = 5;

    function MT(TT) {
      return TT === lT
    }
    const KT = 262144,
      OT = 256,
      yT = 256;

    function fT(TT) {
      if ("object" !== typeof TT || null === TT || Array.isArray(TT)) return "The pack has no files.";
      const kT = [];
      for (const [cT, lT] of Object.entries(TT)) {
        if ("string" !== typeof lT) return `${cT} isn't text.`;
        kT.push({
          path: cT,
          source: lT
        })
      }
      return kT.sort(((TT, kT) => IT(TT.path, kT.path))),
        function(TT) {
          if (0 === TT.length) return "The pack has no .wgsl files.";
          if (TT.length > OT) return `The pack has more than ${OT} .wgsl files.`;
          const kT = new Set;
          for (const {
              path: cT
            }
            of TT) {
            const TT = CT(cT);
            if (null !== TT) return TT;
            if (kT.has(cT)) return `The pack has two files at ${cT}.`;
            kT.add(cT)
          }
          return AT(TT) > KT ? `The pack's .wgsl files are over ${KT/1024} KB in total.` : null
        }(kT) ?? kT
    }

    function xT(TT) {
      const kT = {};
      for (const cT of TT) kT[cT.path] = cT.source;
      return kT
    }

    function IT(TT, kT) {
      return TT < kT ? -1 : TT > kT ? 1 : 0
    }

    function AT(TT) {
      const kT = new TextEncoder;
      let cT = 0;
      for (const {
          source: lT
        }
        of TT) cT += kT.encode(lT).byteLength;
      return cT
    }

    function CT(TT) {
      if (!TT.toLowerCase().endsWith(".wgsl")) return `${TT} isn't a .wgsl file.`;
      if (TT.length > yT) return `A file path is over ${yT} characters.`;
      if (TT.includes("\\") || /[\u0000-\u001f]/.test(TT)) return `${TT} isn't a valid file path.`;
      return TT.split("/").some((TT => "" === TT || "." === TT || ".." === TT)) ? `${TT} isn't a valid file path.` : null
    }
    const jT = /^(.*)\[rot\[([1-4])$/;

    function vT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const lT = new Map;
      kT.forEach(((TT, kT) => {
        let {
          numAnimStates: cT,
          animStartIdx: MT
        } = TT;
        for (let KT = 1; KT < cT; KT++) lT.set(MT + KT - 1, kT)
      }));
      const MT = Object.entries(TT),
        KT = new Map;
      for (const [tT, hT] of MT) {
        const TT = jT.exec(tT);
        "1" === TT?.[2] && KT.set(TT[1], hT + 1)
      }
      const OT = TT => {
          const kT = jT.exec(TT);
          return kT && KT.has(kT[1]) ? {
            root: kT[1],
            rotation: Number(kT[2]) - 1
          } : null
        },
        yT = new Set(MT.map((TT => {
          let [kT] = TT;
          return OT(kT)?.root ?? kT
        }))),
        fT = (TT, cT) => {
          const lT = TT.replace(/_?0$/, "");
          return (kT[cT]?.numAnimStates ?? 0) > 1 && !yT.has(lT) ? lT : TT
        },
        xT = new Map;
      for (const [jT, tT] of MT) xT.set(tT, fT(OT(jT)?.root ?? jT, tT));
      const IT = MT.reduce(((TT, kT) => {
          let [, cT] = kT;
          return Math.max(TT, cT + 1)
        }), 0),
        AT = Array.from({
          length: IT
        }, ((TT, kT) => ({
          id: kT + 1,
          rotation: 0
        }))),
        CT = new Map,
        vT = new Map;
      for (const [jT, tT] of MT) {
        const TT = OT(jT),
          kT = lT.get(tT);
        if (void 0 !== kT) {
          const cT = xT.get(kT);
          vT.set(jT, {
            name: jT,
            texture: cT,
            kind: "frame"
          }), TT && !vT.has(TT.root) && vT.set(TT.root, {
            name: TT.root,
            texture: cT,
            kind: "frame"
          });
          continue
        }
        const cT = xT.get(tT),
          MT = TT?.root ?? jT;
        if (cT !== MT && vT.set(MT, {
            name: MT,
            texture: cT,
            kind: "frame"
          }), TT) {
          const kT = KT.get(TT.root);
          AT[tT] = {
            id: kT,
            rotation: TT.rotation
          }, CT.set(cT, kT), vT.set(jT, {
            name: jT,
            texture: cT,
            kind: "rotation"
          })
        } else CT.set(cT, tT + 1)
      }
      for (const jT of CT.keys()) vT.delete(jT);
      for (const [jT, tT] of cT) {
        const TT = CT.get(tT);
        void 0 === TT || CT.has(jT) || (CT.set(jT, TT), vT.delete(jT))
      }
      return {
        named: [...CT].sort(((TT, kT) => {
          let [cT] = TT, [lT] = kT;
          return cT < lT ? -1 : cT > lT ? 1 : 0
        })).map((TT => {
          let [kT, cT] = TT;
          return {
            name: kT,
            id: cT
          }
        })),
        aliases: [...vT.values()],
        layers: AT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);