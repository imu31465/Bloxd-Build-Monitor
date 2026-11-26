export const id = 129;
export const ids = [129, 131, 152, 153];
export const modules = {
  5523: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH.e,
      e: () => rH,
      g: () => AH.l
    });
    var AH = LH(5531);
    const rH = [!1, !0].flatMap((HH => ["terrain", "liquid", "model"].map((BH => ({
      strict: HH,
      program: BH
    })))))
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
  7209: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      e: () => SH
    });
    var AH = LH(30);
    const rH = "shaderPack";
    async function SH() {
      var HH;
      let BH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (HH = await AH.c.getItem(rH, BH)) && void 0 !== HH ? HH : null
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
  5531: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      d: () => hH,
      e: () => AH,
      f: () => QH,
      j: () => XH,
      l: () => rH,
      n: () => SH,
      q: () => CH,
      t: () => EH,
      u: () => GH
    });
    const AH = 5;

    function rH(HH) {
      return HH === AH
    }

    function SH(HH) {
      return [...HH.features]
    }
    const hH = 262144,
      tH = 256,
      zH = 256;

    function CH(HH) {
      if ("object" !== typeof HH || null === HH || Array.isArray(HH)) return "The pack has no files.";
      const BH = [];
      for (const [LH, AH] of Object.entries(HH)) {
        if ("string" !== typeof AH) return `${LH} isn't text.`;
        BH.push({
          path: LH,
          source: AH
        })
      }
      return BH.sort(((HH, BH) => XH(HH.path, BH.path))),
        function(HH) {
          if (0 === HH.length) return "The pack has no .wgsl files.";
          if (HH.length > tH) return `The pack has more than ${tH} .wgsl files.`;
          const BH = new Set;
          for (const {
              path: LH
            }
            of HH) {
            const HH = YH(LH);
            if (null !== HH) return HH;
            if (BH.has(LH)) return `The pack has two files at ${LH}.`;
            BH.add(LH)
          }
          return GH(HH) > hH ? `The pack's .wgsl files are over ${hH/1024} KB in total.` : null
        }(BH) ?? BH
    }

    function EH(HH) {
      const BH = {};
      for (const LH of HH) BH[LH.path] = LH.source;
      return BH
    }

    function XH(HH, BH) {
      return HH < BH ? -1 : HH > BH ? 1 : 0
    }

    function GH(HH) {
      const BH = new TextEncoder;
      let LH = 0;
      for (const {
          source: AH
        }
        of HH) LH += BH.encode(AH).byteLength;
      return LH
    }

    function YH(HH) {
      if (!HH.toLowerCase().endsWith(".wgsl")) return `${HH} isn't a .wgsl file.`;
      if (HH.length > zH) return `A file path is over ${zH} characters.`;
      if (HH.includes("\\") || /[\u0000-\u001f]/.test(HH)) return `${HH} isn't a valid file path.`;
      return HH.split("/").some((HH => "" === HH || "." === HH || ".." === HH)) ? `${HH} isn't a valid file path.` : null
    }
    const uH = /^(.*)\[rot\[([1-4])$/;

    function QH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const AH = new Map;
      BH.forEach(((HH, BH) => {
        let {
          numAnimStates: LH,
          animStartIdx: rH
        } = HH;
        for (let SH = 1; SH < LH; SH++) AH.set(rH + SH - 1, BH)
      }));
      const rH = Object.entries(HH),
        SH = new Map;
      for (const [QH, WH] of rH) {
        const HH = uH.exec(QH);
        "1" === HH?.[2] && SH.set(HH[1], WH + 1)
      }
      const hH = HH => {
          const BH = uH.exec(HH);
          return BH && SH.has(BH[1]) ? {
            root: BH[1],
            rotation: Number(BH[2]) - 1
          } : null
        },
        tH = new Set(rH.map((HH => {
          let [BH] = HH;
          return hH(BH)?.root ?? BH
        }))),
        zH = (HH, LH) => {
          const AH = HH.replace(/_?0$/, "");
          return (BH[LH]?.numAnimStates ?? 0) > 1 && !tH.has(AH) ? AH : HH
        },
        CH = new Map;
      for (const [uH, QH] of rH) CH.set(QH, zH(hH(uH)?.root ?? uH, QH));
      const EH = rH.reduce(((HH, BH) => {
          let [, LH] = BH;
          return Math.max(HH, LH + 1)
        }), 0),
        XH = Array.from({
          length: EH
        }, ((HH, BH) => ({
          id: BH + 1,
          rotation: 0
        }))),
        GH = new Map,
        YH = new Map;
      for (const [uH, QH] of rH) {
        const HH = hH(uH),
          BH = AH.get(QH);
        if (void 0 !== BH) {
          const LH = CH.get(BH);
          YH.set(uH, {
            name: uH,
            texture: LH,
            kind: "frame"
          }), HH && !YH.has(HH.root) && YH.set(HH.root, {
            name: HH.root,
            texture: LH,
            kind: "frame"
          });
          continue
        }
        const LH = CH.get(QH),
          rH = HH?.root ?? uH;
        if (LH !== rH && YH.set(rH, {
            name: rH,
            texture: LH,
            kind: "frame"
          }), HH) {
          const BH = SH.get(HH.root);
          XH[QH] = {
            id: BH,
            rotation: HH.rotation
          }, GH.set(LH, BH), YH.set(uH, {
            name: uH,
            texture: LH,
            kind: "rotation"
          })
        } else GH.set(LH, QH + 1)
      }
      for (const uH of GH.keys()) YH.delete(uH);
      for (const [uH, QH] of LH) {
        const HH = GH.get(QH);
        void 0 === HH || GH.has(uH) || (GH.set(uH, HH), YH.delete(uH))
      }
      return {
        named: [...GH].sort(((HH, BH) => {
          let [LH] = HH, [AH] = BH;
          return LH < AH ? -1 : LH > AH ? 1 : 0
        })).map((HH => {
          let [BH, LH] = HH;
          return {
            name: BH,
            id: LH
          }
        })),
        aliases: [...YH.values()],
        layers: XH
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);