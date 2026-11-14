export const id = 114;
export const ids = [113, 114, 116, 122];
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
  5661: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      h: () => zR
    });
    var wW = MW(50);
    const CW = "shaderPack";
    async function zR() {
      var WW;
      let RW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (WW = await wW.e.getItem(CW, RW)) && void 0 !== WW ? WW : null
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