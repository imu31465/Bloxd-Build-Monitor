export const id = 128;
export const ids = [127, 128, 130];
export const modules = {
  6284: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU.h,
      e: () => pU,
      i: () => tU.n
    });
    var tU = gU(6265);
    const pU = [!1, !0].flatMap((UU => ["terrain", "liquid", "model"].map((RU => ({
      strict: UU,
      program: RU
    })))))
  },
  6330: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      forgetShaderPackActiveHint: () => ZU,
      isOtherApiVersion: () => wU,
      isShaderPackActive: () => xU,
      isShaderPackChangePending: () => JU,
      markShaderPackChangePending: () => IU,
      pageShaderPackValidationVersion: () => nU,
      reconcileStoredShaderPackHint: () => oU,
      removeShaderPack: () => fU,
      replaceShaderPack: () => QU,
      saveShaderPack: () => hU,
      shaderPackNeedsCheck: () => bU,
      storedPackOutcome: () => mU,
      storedShaderPackFiles: () => jU,
      toStoredShaderPack: () => GU
    });
    var tU = gU(6265),
      pU = gU(6284),
      EU = gU(34),
      PU = gU(3151),
      TU = gU(6339),
      qU = gU(6306);
    const KU = "shaderPackChangePending";
    let cU = null;

    function GU(UU, RU, gU) {
      return {
        manifest: UU.manifest,
        files: (0, tU.t)(UU.files),
        validation: RU,
        ...gU && {
          listing: gU
        }
      }
    }

    function jU(UU) {
      return Object.keys(UU.files).map((RU => ({
        path: RU,
        source: UU.files[RU]
      })))
    }
    let uU = Promise.resolve();

    function CU(UU) {
      const RU = uU.then(UU);
      return uU = RU.catch((() => {})), RU
    }

    function hU(UU, RU) {
      return CU((() => eU(UU, RU)))
    }

    function QU(UU, RU, gU) {
      return CU((async () => JSON.stringify(await (0, TU.e)()) === JSON.stringify(UU) && (null === RU ? (await WU(), !0) : eU(RU, gU))))
    }
    async function eU(UU, RU) {
      const gU = await EU.g.setItem(TU.b, UU);
      return gU && aU(UU, RU), gU
    }
    async function WU() {
      await EU.g.removeItem(TU.b), EU.k.removeItem(PU.b)
    }

    function fU() {
      return CU(WU)
    }

    function xU(UU, RU) {
      return "active" === mU(UU, RU).kind
    }

    function mU(UU, RU) {
      var gU;
      return null === UU ? {
        kind: "none",
        reason: "nothingStored"
      } : wU(UU) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (gU = UU.validation) || void 0 === gU ? void 0 : gU.ok) || UU.validation.fromRecheck ? null === RU ? {
        kind: "none",
        reason: "noCompiler"
      } : bU(UU, RU) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : UU.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function IU() {
      EU.l.setItem(KU, performance.timeOrigin)
    }

    function JU() {
      return EU.l.getItem(KU) === performance.timeOrigin
    }

    function wU(UU) {
      return !(0, pU.i)(UU.manifest.apiVersion)
    }

    function nU(UU) {
      return cU ??= UU.xZ((0, qU.shaderPackTextures)()), cU
    }

    function bU(UU, RU) {
      var gU;
      return (null === (gU = UU.validation) || void 0 === gU ? void 0 : gU.headerVersion) !== nU(RU)
    }

    function oU(UU) {
      return CU((async () => {
        aU(await (0, TU.e)(!0), UU)
      }))
    }

    function ZU() {
      return CU((async () => {
        EU.k.removeItem(PU.b)
      }))
    }

    function aU(UU, RU) {
      xU(UU, RU) ? EU.k.setItem(PU.b, !0) : EU.k.removeItem(PU.b)
    }
  },
  6339: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      e: () => EU
    });
    var tU = gU(34);
    const pU = "shaderPack";
    async function EU() {
      var UU;
      let RU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (UU = await tU.g.getItem(pU, RU)) && void 0 !== UU ? UU : null
    }
  },
  6306: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      loadShaderPackTextures: () => PU,
      shaderPackTextures: () => TU
    });
    var tU = gU(6265);
    let pU = null,
      EU = null;

    function PU() {
      return EU ??= Promise.all([gU.e(69), gU.e(198)]).then((() => gU(39871))).then((UU => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: RU,
          textureNameToIndex: gU,
          textureAnimationData: EU
        } = UU;
        return pU ??= (0, tU.i)(gU, EU, RU), pU
      })), EU
    }

    function TU() {
      if (null === pU) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return pU
    }
  },
  6265: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU,
      e: () => EU,
      h: () => tU,
      i: () => CU,
      k: () => cU,
      n: () => pU,
      r: () => qU,
      t: () => KU,
      x: () => GU
    });
    const tU = 5;

    function pU(UU) {
      return UU === tU
    }
    const EU = 262144,
      PU = 256,
      TU = 256;

    function qU(UU) {
      if ("object" !== typeof UU || null === UU || Array.isArray(UU)) return "The pack has no files.";
      const RU = [];
      for (const [gU, tU] of Object.entries(UU)) {
        if ("string" !== typeof tU) return `${gU} isn't text.`;
        RU.push({
          path: gU,
          source: tU
        })
      }
      return RU.sort(((UU, RU) => cU(UU.path, RU.path))),
        function(UU) {
          if (0 === UU.length) return "The pack has no .wgsl files.";
          if (UU.length > PU) return `The pack has more than ${PU} .wgsl files.`;
          const RU = new Set;
          for (const {
              path: gU
            }
            of UU) {
            const UU = jU(gU);
            if (null !== UU) return UU;
            if (RU.has(gU)) return `The pack has two files at ${gU}.`;
            RU.add(gU)
          }
          return GU(UU) > EU ? `The pack's .wgsl files are over ${EU/1024} KB in total.` : null
        }(RU) ?? RU
    }

    function KU(UU) {
      const RU = {};
      for (const gU of UU) RU[gU.path] = gU.source;
      return RU
    }

    function cU(UU, RU) {
      return UU < RU ? -1 : UU > RU ? 1 : 0
    }

    function GU(UU) {
      const RU = new TextEncoder;
      let gU = 0;
      for (const {
          source: tU
        }
        of UU) gU += RU.encode(tU).byteLength;
      return gU
    }

    function jU(UU) {
      if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
      if (UU.length > TU) return `A file path is over ${TU} characters.`;
      if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
      return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
    }
    const uU = /^(.*)\[rot\[([1-4])$/;

    function CU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const tU = new Map;
      RU.forEach(((UU, RU) => {
        let {
          numAnimStates: gU,
          animStartIdx: pU
        } = UU;
        for (let EU = 1; EU < gU; EU++) tU.set(pU + EU - 1, RU)
      }));
      const pU = Object.entries(UU),
        EU = new Map;
      for (const [hU, QU] of pU) {
        const UU = uU.exec(hU);
        "1" === UU?.[2] && EU.set(UU[1], QU + 1)
      }
      const PU = UU => {
          const RU = uU.exec(UU);
          return RU && EU.has(RU[1]) ? {
            root: RU[1],
            rotation: Number(RU[2]) - 1
          } : null
        },
        TU = new Set(pU.map((UU => {
          let [RU] = UU;
          return PU(RU)?.root ?? RU
        }))),
        qU = (UU, gU) => {
          const tU = UU.replace(/_?0$/, "");
          return (RU[gU]?.numAnimStates ?? 0) > 1 && !TU.has(tU) ? tU : UU
        },
        KU = new Map;
      for (const [uU, hU] of pU) KU.set(hU, qU(PU(uU)?.root ?? uU, hU));
      const cU = pU.reduce(((UU, RU) => {
          let [, gU] = RU;
          return Math.max(UU, gU + 1)
        }), 0),
        GU = Array.from({
          length: cU
        }, ((UU, RU) => ({
          id: RU + 1,
          rotation: 0
        }))),
        jU = new Map,
        CU = new Map;
      for (const [uU, hU] of pU) {
        const UU = PU(uU),
          RU = tU.get(hU);
        if (void 0 !== RU) {
          const gU = KU.get(RU);
          CU.set(uU, {
            name: uU,
            texture: gU,
            kind: "frame"
          }), UU && !CU.has(UU.root) && CU.set(UU.root, {
            name: UU.root,
            texture: gU,
            kind: "frame"
          });
          continue
        }
        const gU = KU.get(hU),
          pU = UU?.root ?? uU;
        if (gU !== pU && CU.set(pU, {
            name: pU,
            texture: gU,
            kind: "frame"
          }), UU) {
          const RU = EU.get(UU.root);
          GU[hU] = {
            id: RU,
            rotation: UU.rotation
          }, jU.set(gU, RU), CU.set(uU, {
            name: uU,
            texture: gU,
            kind: "rotation"
          })
        } else jU.set(gU, hU + 1)
      }
      for (const uU of jU.keys()) CU.delete(uU);
      for (const [uU, hU] of gU) {
        const UU = jU.get(hU);
        void 0 === UU || jU.has(uU) || (jU.set(uU, UU), CU.delete(uU))
      }
      return {
        named: [...jU].sort(((UU, RU) => {
          let [gU] = UU, [tU] = RU;
          return gU < tU ? -1 : gU > tU ? 1 : 0
        })).map((UU => {
          let [RU, gU] = UU;
          return {
            name: RU,
            id: gU
          }
        })),
        aliases: [...CU.values()],
        layers: GU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);