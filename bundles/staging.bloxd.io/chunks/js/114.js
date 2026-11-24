export const id = 114;
export const ids = [114, 116, 136, 137];
export const modules = {
  5212: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS.h,
      i: () => bS,
      j: () => tS.n
    });
    var tS = gS(5221);
    const bS = [!1, !0].flatMap((SS => ["terrain", "liquid", "model"].map((HS => ({
      strict: SS,
      program: HS
    })))))
  },
  6844: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      forgetShaderPackActiveHint: () => cS,
      isOtherApiVersion: () => ZS,
      isShaderPackActive: () => QS,
      isShaderPackChangePending: () => hS,
      markShaderPackChangePending: () => wS,
      pageShaderPackValidationVersion: () => JS,
      reconcileStoredShaderPackHint: () => dS,
      removeShaderPack: () => PS,
      replaceShaderPack: () => GS,
      saveShaderPack: () => jS,
      shaderPackNeedsCheck: () => OS,
      storedPackOutcome: () => DS,
      storedShaderPackFiles: () => kS,
      toStoredShaderPack: () => fS
    });
    var tS = gS(5221),
      bS = gS(5212),
      XS = gS(45),
      xS = gS(3591),
      NS = gS(6848),
      qS = gS(6824);
    const uS = "shaderPackChangePending";
    let IS = null;

    function fS(SS, HS, gS) {
      return {
        manifest: SS.manifest,
        files: (0, tS.v)(SS.files),
        validation: HS,
        ...gS && {
          listing: gS
        }
      }
    }

    function kS(SS) {
      return Object.keys(SS.files).map((HS => ({
        path: HS,
        source: SS.files[HS]
      })))
    }
    let aS = Promise.resolve();

    function KS(SS) {
      const HS = aS.then(SS);
      return aS = HS.catch((() => {})), HS
    }

    function jS(SS, HS) {
      return KS((() => CS(SS, HS)))
    }

    function GS(SS, HS, gS) {
      return KS((async () => JSON.stringify(await (0, NS.f)()) === JSON.stringify(SS) && (null === HS ? (await nS(), !0) : CS(HS, gS))))
    }
    async function CS(SS, HS) {
      const gS = await XS.e.setItem(NS.d, SS);
      return gS && vS(SS, HS), gS
    }
    async function nS() {
      await XS.e.removeItem(NS.d), XS.g.removeItem(xS.d)
    }

    function PS() {
      return KS(nS)
    }

    function QS(SS, HS) {
      return "active" === DS(SS, HS).kind
    }

    function DS(SS, HS) {
      var gS;
      return null === SS ? {
        kind: "none",
        reason: "nothingStored"
      } : ZS(SS) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.ok) || SS.validation.fromRecheck ? null === HS ? {
        kind: "none",
        reason: "noCompiler"
      } : OS(SS, HS) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : SS.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function wS() {
      XS.h.setItem(uS, performance.timeOrigin)
    }

    function hS() {
      return XS.h.getItem(uS) === performance.timeOrigin
    }

    function ZS(SS) {
      return !(0, bS.j)(SS.manifest.apiVersion)
    }

    function JS(SS) {
      return IS ??= SS.dL((0, qS.shaderPackTextures)()), IS
    }

    function OS(SS, HS) {
      var gS;
      return (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.headerVersion) !== JS(HS)
    }

    function dS(SS) {
      return KS((async () => {
        vS(await (0, NS.f)(!0), SS)
      }))
    }

    function cS() {
      return KS((async () => {
        XS.g.removeItem(xS.d)
      }))
    }

    function vS(SS, HS) {
      QS(SS, HS) ? XS.g.setItem(xS.d, !0) : XS.g.removeItem(xS.d)
    }
  },
  6848: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      f: () => XS
    });
    var tS = gS(45);
    const bS = "shaderPack";
    async function XS() {
      var SS;
      let HS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (SS = await tS.e.getItem(bS, HS)) && void 0 !== SS ? SS : null
    }
  },
  6824: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      loadShaderPackTextures: () => xS,
      shaderPackTextures: () => NS
    });
    var tS = gS(5221);
    let bS = null,
      XS = null;

    function xS() {
      return XS ??= Promise.all([gS.e(72), gS.e(188)]).then((() => gS(40526))).then((SS => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: HS,
          textureNameToIndex: gS,
          textureAnimationData: XS
        } = SS;
        return bS ??= (0, tS.j)(gS, XS, HS), bS
      })), XS
    }

    function NS() {
      if (null === bS) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return bS
    }
  },
  5221: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS,
      e: () => xS,
      h: () => tS,
      j: () => jS,
      m: () => fS,
      n: () => bS,
      r: () => XS,
      u: () => uS,
      v: () => IS,
      y: () => kS
    });
    const tS = 5;

    function bS(SS) {
      return SS === tS
    }

    function XS(SS) {
      return [...SS.features]
    }
    const xS = 262144,
      NS = 256,
      qS = 256;

    function uS(SS) {
      if ("object" !== typeof SS || null === SS || Array.isArray(SS)) return "The pack has no files.";
      const HS = [];
      for (const [gS, tS] of Object.entries(SS)) {
        if ("string" !== typeof tS) return `${gS} isn't text.`;
        HS.push({
          path: gS,
          source: tS
        })
      }
      return HS.sort(((SS, HS) => fS(SS.path, HS.path))),
        function(SS) {
          if (0 === SS.length) return "The pack has no .wgsl files.";
          if (SS.length > NS) return `The pack has more than ${NS} .wgsl files.`;
          const HS = new Set;
          for (const {
              path: gS
            }
            of SS) {
            const SS = aS(gS);
            if (null !== SS) return SS;
            if (HS.has(gS)) return `The pack has two files at ${gS}.`;
            HS.add(gS)
          }
          return kS(SS) > xS ? `The pack's .wgsl files are over ${xS/1024} KB in total.` : null
        }(HS) ?? HS
    }

    function IS(SS) {
      const HS = {};
      for (const gS of SS) HS[gS.path] = gS.source;
      return HS
    }

    function fS(SS, HS) {
      return SS < HS ? -1 : SS > HS ? 1 : 0
    }

    function kS(SS) {
      const HS = new TextEncoder;
      let gS = 0;
      for (const {
          source: tS
        }
        of SS) gS += HS.encode(tS).byteLength;
      return gS
    }

    function aS(SS) {
      if (!SS.toLowerCase().endsWith(".wgsl")) return `${SS} isn't a .wgsl file.`;
      if (SS.length > qS) return `A file path is over ${qS} characters.`;
      if (SS.includes("\\") || /[\u0000-\u001f]/.test(SS)) return `${SS} isn't a valid file path.`;
      return SS.split("/").some((SS => "" === SS || "." === SS || ".." === SS)) ? `${SS} isn't a valid file path.` : null
    }
    const KS = /^(.*)\[rot\[([1-4])$/;

    function jS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const tS = new Map;
      HS.forEach(((SS, HS) => {
        let {
          numAnimStates: gS,
          animStartIdx: bS
        } = SS;
        for (let XS = 1; XS < gS; XS++) tS.set(bS + XS - 1, HS)
      }));
      const bS = Object.entries(SS),
        XS = new Map;
      for (const [jS, GS] of bS) {
        const SS = KS.exec(jS);
        "1" === SS?.[2] && XS.set(SS[1], GS + 1)
      }
      const xS = SS => {
          const HS = KS.exec(SS);
          return HS && XS.has(HS[1]) ? {
            root: HS[1],
            rotation: Number(HS[2]) - 1
          } : null
        },
        NS = new Set(bS.map((SS => {
          let [HS] = SS;
          return xS(HS)?.root ?? HS
        }))),
        qS = (SS, gS) => {
          const tS = SS.replace(/_?0$/, "");
          return (HS[gS]?.numAnimStates ?? 0) > 1 && !NS.has(tS) ? tS : SS
        },
        uS = new Map;
      for (const [KS, jS] of bS) uS.set(jS, qS(xS(KS)?.root ?? KS, jS));
      const IS = bS.reduce(((SS, HS) => {
          let [, gS] = HS;
          return Math.max(SS, gS + 1)
        }), 0),
        fS = Array.from({
          length: IS
        }, ((SS, HS) => ({
          id: HS + 1,
          rotation: 0
        }))),
        kS = new Map,
        aS = new Map;
      for (const [KS, jS] of bS) {
        const SS = xS(KS),
          HS = tS.get(jS);
        if (void 0 !== HS) {
          const gS = uS.get(HS);
          aS.set(KS, {
            name: KS,
            texture: gS,
            kind: "frame"
          }), SS && !aS.has(SS.root) && aS.set(SS.root, {
            name: SS.root,
            texture: gS,
            kind: "frame"
          });
          continue
        }
        const gS = uS.get(jS),
          bS = SS?.root ?? KS;
        if (gS !== bS && aS.set(bS, {
            name: bS,
            texture: gS,
            kind: "frame"
          }), SS) {
          const HS = XS.get(SS.root);
          fS[jS] = {
            id: HS,
            rotation: SS.rotation
          }, kS.set(gS, HS), aS.set(KS, {
            name: KS,
            texture: gS,
            kind: "rotation"
          })
        } else kS.set(gS, jS + 1)
      }
      for (const KS of kS.keys()) aS.delete(KS);
      for (const [KS, jS] of gS) {
        const SS = kS.get(jS);
        void 0 === SS || kS.has(KS) || (kS.set(KS, SS), aS.delete(KS))
      }
      return {
        named: [...kS].sort(((SS, HS) => {
          let [gS] = SS, [tS] = HS;
          return gS < tS ? -1 : gS > tS ? 1 : 0
        })).map((SS => {
          let [HS, gS] = SS;
          return {
            name: HS,
            id: gS
          }
        })),
        aliases: [...aS.values()],
        layers: fS
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);