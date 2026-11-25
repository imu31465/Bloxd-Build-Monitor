export const id = 115;
export const ids = [115, 118, 138, 139];
export const modules = {
  5055: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG.i,
      f: () => SG,
      g: () => wG.o
    });
    var wG = ZG(5062);
    const SG = [!1, !0].flatMap((GG => ["terrain", "liquid", "model"].map((bG => ({
      strict: GG,
      program: bG
    })))))
  },
  40874: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => pG,
      installListedShaderPack: () => VG
    });
    var wG = ZG(6561),
      SG = ZG(5062),
      LG = ZG(1163),
      yG = ZG(6608),
      kG = ZG(5055),
      UG = ZG(6653),
      YG = ZG(6645);
    async function VG(GG) {
      const bG = await (0, yG.loadPageShaderPackCompiler)();
      if (null === bG) return {
        kind: "failed",
        reason: "compiler"
      };
      const ZG = await pG(GG, bG);
      return "failed" === ZG.kind ? ZG : await (0, UG.saveShaderPack)(ZG.stored, bG) ? ((0, UG.markShaderPackChangePending)(), ZG) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function pG(GG, bG) {
      const ZG = await async function(GG) {
        let {
          packId: bG,
          sourceHash: ZG
        } = GG;
        try {
          const GG = await fetch(`${LG.clientSideServerUrls.s3Url}/${(0,wG.O)(bG,ZG)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!GG.ok) return console.error(`Failed to download shader pack ${bG} (${GG.status})`), null;
          const SG = await GG.json();
          return "object" !== typeof SG || null === SG ? (console.error(`Shader pack ${bG}'s source isn't an object`), null) : SG
        } catch (SG) {
          return console.error(`Failed to download shader pack ${bG}`, SG), null
        }
      }(GG);
      if (null === ZG) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, kG.g)(ZG.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const yG = (0, SG.u)(ZG.files);
      if ("string" === typeof yG) return console.error(`A listed shader pack breaks the pack rules: ${yG}`), {
        kind: "failed",
        reason: "invalid"
      };
      const VG = await (0, YG.g)(bG, yG);
      if (!1 === (null === VG || void 0 === VG ? void 0 : VG.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const pG = {
        manifest: {
          apiVersion: ZG.apiVersion,
          name: GG.name,
          author: GG.ownerName,
          description: GG.description || null,
          keepCircleShadows: !0 === ZG.keepCircleShadows
        },
        files: yG
      };
      return {
        kind: "loaded",
        stored: (0, UG.toStoredShaderPack)(pG, VG, {
          packId: GG.packId,
          sourceHash: GG.sourceHash
        })
      }
    }
  },
  6653: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      forgetShaderPackActiveHint: () => IG,
      isOtherApiVersion: () => iG,
      isShaderPackActive: () => EG,
      isShaderPackChangePending: () => uG,
      markShaderPackChangePending: () => XG,
      pageShaderPackValidationVersion: () => CG,
      reconcileStoredShaderPackHint: () => mG,
      removeShaderPack: () => zG,
      replaceShaderPack: () => dG,
      saveShaderPack: () => hG,
      shaderPackNeedsCheck: () => WG,
      storedPackOutcome: () => oG,
      storedShaderPackFiles: () => fG,
      toStoredShaderPack: () => pG
    });
    var wG = ZG(5062),
      SG = ZG(5055),
      LG = ZG(29),
      yG = ZG(3441),
      kG = ZG(6661),
      UG = ZG(6627);
    const YG = "shaderPackChangePending";
    let VG = null;

    function pG(GG, bG, ZG) {
      return {
        manifest: GG.manifest,
        files: (0, wG.y)(GG.files),
        validation: bG,
        ...ZG && {
          listing: ZG
        }
      }
    }

    function fG(GG) {
      return Object.keys(GG.files).map((bG => ({
        path: bG,
        source: GG.files[bG]
      })))
    }
    let QG = Promise.resolve();

    function KG(GG) {
      const bG = QG.then(GG);
      return QG = bG.catch((() => {})), bG
    }

    function hG(GG, bG) {
      return KG((() => JG(GG, bG)))
    }

    function dG(GG, bG, ZG) {
      return KG((async () => JSON.stringify(await (0, kG.e)()) === JSON.stringify(GG) && (null === bG ? (await rG(), !0) : JG(bG, ZG))))
    }
    async function JG(GG, bG) {
      const ZG = await LG.e.setItem(kG.b, GG);
      return ZG && FG(GG, bG), ZG
    }
    async function rG() {
      await LG.e.removeItem(kG.b), LG.h.removeItem(yG.d)
    }

    function zG() {
      return KG(rG)
    }

    function EG(GG, bG) {
      return "active" === oG(GG, bG).kind
    }

    function oG(GG, bG) {
      var ZG;
      return null === GG ? {
        kind: "none",
        reason: "nothingStored"
      } : iG(GG) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.ok) || GG.validation.fromRecheck ? null === bG ? {
        kind: "none",
        reason: "noCompiler"
      } : WG(GG, bG) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : GG.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function XG() {
      LG.l.setItem(YG, performance.timeOrigin)
    }

    function uG() {
      return LG.l.getItem(YG) === performance.timeOrigin
    }

    function iG(GG) {
      return !(0, SG.g)(GG.manifest.apiVersion)
    }

    function CG(GG) {
      return VG ??= GG.sF((0, UG.shaderPackTextures)()), VG
    }

    function WG(GG, bG) {
      var ZG;
      return (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.headerVersion) !== CG(bG)
    }

    function mG(GG) {
      return KG((async () => {
        FG(await (0, kG.e)(!0), GG)
      }))
    }

    function IG() {
      return KG((async () => {
        LG.h.removeItem(yG.d)
      }))
    }

    function FG(GG, bG) {
      EG(GG, bG) ? LG.h.setItem(yG.d, !0) : LG.h.removeItem(yG.d)
    }
  },
  6627: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      loadShaderPackTextures: () => yG,
      shaderPackTextures: () => kG
    });
    var wG = ZG(5062);
    let SG = null,
      LG = null;

    function yG() {
      return LG ??= Promise.all([ZG.e(73), ZG.e(190)]).then((() => ZG(40868))).then((GG => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: bG,
          textureNameToIndex: ZG,
          textureAnimationData: LG
        } = GG;
        return SG ??= (0, wG.j)(ZG, LG, bG), SG
      })), LG
    }

    function kG() {
      if (null === SG) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return SG
    }
  },
  6645: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => UG,
      g: () => kG
    });
    var wG = ZG(6653),
      SG = ZG(6627),
      LG = ZG(101);
    const yG = 100;
    async function kG(GG, bG) {
      var ZG;
      let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZG = navigator.gpu) && void 0 !== ZG ? ZG : null;
      const yG = GG.EGG(bG, (0, SG.shaderPackTextures)());
      if (yG.errors.length > 0) return YG(GG, yG.errors, yG.offInStrict);
      const kG = await async function(GG) {
        if (!GG) return null;
        try {
          const bG = await (0, LG.r)(GG);
          return bG ? await bG.requestDevice() : null
        } catch (bG) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", bG), null
        }
      }(wG);
      if (!kG) return null;
      let UG = !1;
      kG.lost.then((() => {
        UG = !0
      }));
      try {
        const bG = await Promise.all(yG.validationModules.map((bG => async function(GG, bG, ZG) {
          bG.pushErrorScope("validation");
          const wG = bG.createShaderModule({
              code: ZG.code
            }),
            SG = bG.popErrorScope(),
            {
              messages: LG
            } = await wG.getCompilationInfo(),
            yG = LG.filter((GG => "error" === GG.type)).map((bG => GG.mapValidationMessage(ZG, bG))),
            kG = await SG;
          kG && 0 === yG.length && yG.push({
            file: null,
            line: 0,
            message: kG.message,
            variants: [ZG.key]
          });
          return yG
        }(GG, kG, bG))));
        return UG ? null : YG(GG, GG.QwG(bG.flat()), yG.offInStrict)
      } catch (VG) {
        return console.error("Couldn't validate the shader pack on WebGPU.", VG), null
      } finally {
        kG.destroy()
      }
    }
    async function UG(GG, bG) {
      var ZG;
      if (!(0, wG.shaderPackNeedsCheck)(GG, bG) || (0, wG.isOtherApiVersion)(GG)) return GG;
      const SG = await kG(bG, (0, wG.storedShaderPackFiles)(GG));
      if (!SG) return GG;
      const LG = !1 === (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.ok) && !GG.validation.fromRecheck,
        yG = {
          ...GG,
          validation: LG ? SG : {
            ...SG,
            fromRecheck: !0
          }
        };
      return await (0, wG.replaceShaderPack)(GG, yG, bG) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), yG
    }

    function YG(GG, bG, ZG) {
      return {
        headerVersion: (0, wG.pageShaderPackValidationVersion)(GG),
        ok: 0 === bG.length,
        errors: bG.slice(0, yG),
        moreErrors: Math.max(0, bG.length - yG),
        offInStrict: ZG
      }
    }
  },
  5062: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => fG,
      d: () => kG,
      h: () => yG,
      i: () => wG,
      j: () => hG,
      k: () => pG,
      o: () => SG,
      s: () => LG,
      u: () => YG,
      y: () => VG
    });
    const wG = 5;

    function SG(GG) {
      return GG === wG
    }

    function LG(GG) {
      return [...GG.features]
    }
    const yG = 262144,
      kG = 256,
      UG = 256;

    function YG(GG) {
      if ("object" !== typeof GG || null === GG || Array.isArray(GG)) return "The pack has no files.";
      const bG = [];
      for (const [ZG, wG] of Object.entries(GG)) {
        if ("string" !== typeof wG) return `${ZG} isn't text.`;
        bG.push({
          path: ZG,
          source: wG
        })
      }
      return bG.sort(((GG, bG) => pG(GG.path, bG.path))),
        function(GG) {
          if (0 === GG.length) return "The pack has no .wgsl files.";
          if (GG.length > kG) return `The pack has more than ${kG} .wgsl files.`;
          const bG = new Set;
          for (const {
              path: ZG
            }
            of GG) {
            const GG = QG(ZG);
            if (null !== GG) return GG;
            if (bG.has(ZG)) return `The pack has two files at ${ZG}.`;
            bG.add(ZG)
          }
          return fG(GG) > yG ? `The pack's .wgsl files are over ${yG/1024} KB in total.` : null
        }(bG) ?? bG
    }

    function VG(GG) {
      const bG = {};
      for (const ZG of GG) bG[ZG.path] = ZG.source;
      return bG
    }

    function pG(GG, bG) {
      return GG < bG ? -1 : GG > bG ? 1 : 0
    }

    function fG(GG) {
      const bG = new TextEncoder;
      let ZG = 0;
      for (const {
          source: wG
        }
        of GG) ZG += bG.encode(wG).byteLength;
      return ZG
    }

    function QG(GG) {
      if (!GG.toLowerCase().endsWith(".wgsl")) return `${GG} isn't a .wgsl file.`;
      if (GG.length > UG) return `A file path is over ${UG} characters.`;
      if (GG.includes("\\") || /[\u0000-\u001f]/.test(GG)) return `${GG} isn't a valid file path.`;
      return GG.split("/").some((GG => "" === GG || "." === GG || ".." === GG)) ? `${GG} isn't a valid file path.` : null
    }
    const KG = /^(.*)\[rot\[([1-4])$/;

    function hG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const wG = new Map;
      bG.forEach(((GG, bG) => {
        let {
          numAnimStates: ZG,
          animStartIdx: SG
        } = GG;
        for (let LG = 1; LG < ZG; LG++) wG.set(SG + LG - 1, bG)
      }));
      const SG = Object.entries(GG),
        LG = new Map;
      for (const [hG, dG] of SG) {
        const GG = KG.exec(hG);
        "1" === GG?.[2] && LG.set(GG[1], dG + 1)
      }
      const yG = GG => {
          const bG = KG.exec(GG);
          return bG && LG.has(bG[1]) ? {
            root: bG[1],
            rotation: Number(bG[2]) - 1
          } : null
        },
        kG = new Set(SG.map((GG => {
          let [bG] = GG;
          return yG(bG)?.root ?? bG
        }))),
        UG = (GG, ZG) => {
          const wG = GG.replace(/_?0$/, "");
          return (bG[ZG]?.numAnimStates ?? 0) > 1 && !kG.has(wG) ? wG : GG
        },
        YG = new Map;
      for (const [KG, hG] of SG) YG.set(hG, UG(yG(KG)?.root ?? KG, hG));
      const VG = SG.reduce(((GG, bG) => {
          let [, ZG] = bG;
          return Math.max(GG, ZG + 1)
        }), 0),
        pG = Array.from({
          length: VG
        }, ((GG, bG) => ({
          id: bG + 1,
          rotation: 0
        }))),
        fG = new Map,
        QG = new Map;
      for (const [KG, hG] of SG) {
        const GG = yG(KG),
          bG = wG.get(hG);
        if (void 0 !== bG) {
          const ZG = YG.get(bG);
          QG.set(KG, {
            name: KG,
            texture: ZG,
            kind: "frame"
          }), GG && !QG.has(GG.root) && QG.set(GG.root, {
            name: GG.root,
            texture: ZG,
            kind: "frame"
          });
          continue
        }
        const ZG = YG.get(hG),
          SG = GG?.root ?? KG;
        if (ZG !== SG && QG.set(SG, {
            name: SG,
            texture: ZG,
            kind: "frame"
          }), GG) {
          const bG = LG.get(GG.root);
          pG[hG] = {
            id: bG,
            rotation: GG.rotation
          }, fG.set(ZG, bG), QG.set(KG, {
            name: KG,
            texture: ZG,
            kind: "rotation"
          })
        } else fG.set(ZG, hG + 1)
      }
      for (const KG of fG.keys()) QG.delete(KG);
      for (const [KG, hG] of ZG) {
        const GG = fG.get(hG);
        void 0 === GG || fG.has(KG) || (fG.set(KG, GG), QG.delete(KG))
      }
      return {
        named: [...fG].sort(((GG, bG) => {
          let [ZG] = GG, [wG] = bG;
          return ZG < wG ? -1 : ZG > wG ? 1 : 0
        })).map((GG => {
          let [bG, ZG] = GG;
          return {
            name: bG,
            id: ZG
          }
        })),
        aliases: [...QG.values()],
        layers: pG
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);