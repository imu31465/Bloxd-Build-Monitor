export const id = 128;
export const ids = [128, 130, 151, 152];
export const modules = {
  5556: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV.f,
      g: () => YV,
      j: () => JV.o
    });
    var JV = xV(5561);
    const YV = [!1, !0].flatMap((VV => ["terrain", "liquid", "model"].map((eV => ({
      strict: VV,
      program: eV
    })))))
  },
  7212: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      forgetShaderPackActiveHint: () => zV,
      isOtherApiVersion: () => AV,
      isShaderPackActive: () => tV,
      isShaderPackChangePending: () => PV,
      markShaderPackChangePending: () => TV,
      pageShaderPackValidationVersion: () => NV,
      reconcileStoredShaderPackHint: () => MV,
      removeShaderPack: () => qV,
      replaceShaderPack: () => EV,
      saveShaderPack: () => bV,
      shaderPackNeedsCheck: () => XV,
      storedPackOutcome: () => FV,
      storedShaderPackFiles: () => vV,
      toStoredShaderPack: () => ZV
    });
    var JV = xV(5561),
      YV = xV(5556),
      UV = xV(40),
      yV = xV(3907),
      pV = xV(7216),
      QV = xV(7191);
    const nV = "shaderPackChangePending";
    let wV = null;

    function ZV(VV, eV, xV) {
      return {
        manifest: VV.manifest,
        files: (0, JV.t)(VV.files),
        validation: eV,
        ...xV && {
          listing: xV
        }
      }
    }

    function vV(VV) {
      return Object.keys(VV.files).map((eV => ({
        path: eV,
        source: VV.files[eV]
      })))
    }
    let rV = Promise.resolve();

    function kV(VV) {
      const eV = rV.then(VV);
      return rV = eV.catch((() => {})), eV
    }

    function bV(VV, eV) {
      return kV((() => BV(VV, eV)))
    }

    function EV(VV, eV, xV) {
      return kV((async () => JSON.stringify(await (0, pV.f)()) === JSON.stringify(VV) && (null === eV ? (await jV(), !0) : BV(eV, xV))))
    }
    async function BV(VV, eV) {
      const xV = await UV.i.setItem(pV.d, VV);
      return xV && GV(VV, eV), xV
    }
    async function jV() {
      await UV.i.removeItem(pV.d), UV.m.removeItem(yV.d)
    }

    function qV() {
      return kV(jV)
    }

    function tV(VV, eV) {
      return "active" === FV(VV, eV).kind
    }

    function FV(VV, eV) {
      var xV;
      return null === VV ? {
        kind: "none",
        reason: "nothingStored"
      } : AV(VV) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (xV = VV.validation) || void 0 === xV ? void 0 : xV.ok) || VV.validation.fromRecheck ? null === eV ? {
        kind: "none",
        reason: "noCompiler"
      } : XV(VV, eV) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : VV.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function TV() {
      UV.q.setItem(nV, performance.timeOrigin)
    }

    function PV() {
      return UV.q.getItem(nV) === performance.timeOrigin
    }

    function AV(VV) {
      return !(0, YV.j)(VV.manifest.apiVersion)
    }

    function NV(VV) {
      return wV ??= VV.lD((0, QV.shaderPackTextures)()), wV
    }

    function XV(VV, eV) {
      var xV;
      return (null === (xV = VV.validation) || void 0 === xV ? void 0 : xV.headerVersion) !== NV(eV)
    }

    function MV(VV) {
      return kV((async () => {
        GV(await (0, pV.f)(!0), VV)
      }))
    }

    function zV() {
      return kV((async () => {
        UV.m.removeItem(yV.d)
      }))
    }

    function GV(VV, eV) {
      tV(VV, eV) ? UV.m.setItem(yV.d, !0) : UV.m.removeItem(yV.d)
    }
  },
  7216: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      f: () => UV
    });
    var JV = xV(40);
    const YV = "shaderPack";
    async function UV() {
      var VV;
      let eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (VV = await JV.i.getItem(YV, eV)) && void 0 !== VV ? VV : null
    }
  },
  7191: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      loadShaderPackTextures: () => yV,
      shaderPackTextures: () => pV
    });
    var JV = xV(5561);
    let YV = null,
      UV = null;

    function yV() {
      return UV ??= Promise.all([xV.e(84), xV.e(204)]).then((() => xV(41764))).then((VV => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: eV,
          textureNameToIndex: xV,
          textureAnimationData: UV
        } = VV;
        return YV ??= (0, JV.j)(xV, UV, eV), YV
      })), UV
    }

    function pV() {
      if (null === YV) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return YV
    }
  },
  5561: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      d: () => yV,
      f: () => JV,
      j: () => bV,
      n: () => ZV,
      o: () => YV,
      p: () => UV,
      s: () => nV,
      t: () => wV,
      x: () => vV
    });
    const JV = 5;

    function YV(VV) {
      return VV === JV
    }

    function UV(VV) {
      return [...VV.features]
    }
    const yV = 262144,
      pV = 256,
      QV = 256;

    function nV(VV) {
      if ("object" !== typeof VV || null === VV || Array.isArray(VV)) return "The pack has no files.";
      const eV = [];
      for (const [xV, JV] of Object.entries(VV)) {
        if ("string" !== typeof JV) return `${xV} isn't text.`;
        eV.push({
          path: xV,
          source: JV
        })
      }
      return eV.sort(((VV, eV) => ZV(VV.path, eV.path))),
        function(VV) {
          if (0 === VV.length) return "The pack has no .wgsl files.";
          if (VV.length > pV) return `The pack has more than ${pV} .wgsl files.`;
          const eV = new Set;
          for (const {
              path: xV
            }
            of VV) {
            const VV = rV(xV);
            if (null !== VV) return VV;
            if (eV.has(xV)) return `The pack has two files at ${xV}.`;
            eV.add(xV)
          }
          return vV(VV) > yV ? `The pack's .wgsl files are over ${yV/1024} KB in total.` : null
        }(eV) ?? eV
    }

    function wV(VV) {
      const eV = {};
      for (const xV of VV) eV[xV.path] = xV.source;
      return eV
    }

    function ZV(VV, eV) {
      return VV < eV ? -1 : VV > eV ? 1 : 0
    }

    function vV(VV) {
      const eV = new TextEncoder;
      let xV = 0;
      for (const {
          source: JV
        }
        of VV) xV += eV.encode(JV).byteLength;
      return xV
    }

    function rV(VV) {
      if (!VV.toLowerCase().endsWith(".wgsl")) return `${VV} isn't a .wgsl file.`;
      if (VV.length > QV) return `A file path is over ${QV} characters.`;
      if (VV.includes("\\") || /[\u0000-\u001f]/.test(VV)) return `${VV} isn't a valid file path.`;
      return VV.split("/").some((VV => "" === VV || "." === VV || ".." === VV)) ? `${VV} isn't a valid file path.` : null
    }
    const kV = /^(.*)\[rot\[([1-4])$/;

    function bV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const JV = new Map;
      eV.forEach(((VV, eV) => {
        let {
          numAnimStates: xV,
          animStartIdx: YV
        } = VV;
        for (let UV = 1; UV < xV; UV++) JV.set(YV + UV - 1, eV)
      }));
      const YV = Object.entries(VV),
        UV = new Map;
      for (const [bV, EV] of YV) {
        const VV = kV.exec(bV);
        "1" === VV?.[2] && UV.set(VV[1], EV + 1)
      }
      const yV = VV => {
          const eV = kV.exec(VV);
          return eV && UV.has(eV[1]) ? {
            root: eV[1],
            rotation: Number(eV[2]) - 1
          } : null
        },
        pV = new Set(YV.map((VV => {
          let [eV] = VV;
          return yV(eV)?.root ?? eV
        }))),
        QV = (VV, xV) => {
          const JV = VV.replace(/_?0$/, "");
          return (eV[xV]?.numAnimStates ?? 0) > 1 && !pV.has(JV) ? JV : VV
        },
        nV = new Map;
      for (const [kV, bV] of YV) nV.set(bV, QV(yV(kV)?.root ?? kV, bV));
      const wV = YV.reduce(((VV, eV) => {
          let [, xV] = eV;
          return Math.max(VV, xV + 1)
        }), 0),
        ZV = Array.from({
          length: wV
        }, ((VV, eV) => ({
          id: eV + 1,
          rotation: 0
        }))),
        vV = new Map,
        rV = new Map;
      for (const [kV, bV] of YV) {
        const VV = yV(kV),
          eV = JV.get(bV);
        if (void 0 !== eV) {
          const xV = nV.get(eV);
          rV.set(kV, {
            name: kV,
            texture: xV,
            kind: "frame"
          }), VV && !rV.has(VV.root) && rV.set(VV.root, {
            name: VV.root,
            texture: xV,
            kind: "frame"
          });
          continue
        }
        const xV = nV.get(bV),
          YV = VV?.root ?? kV;
        if (xV !== YV && rV.set(YV, {
            name: YV,
            texture: xV,
            kind: "frame"
          }), VV) {
          const eV = UV.get(VV.root);
          ZV[bV] = {
            id: eV,
            rotation: VV.rotation
          }, vV.set(xV, eV), rV.set(kV, {
            name: kV,
            texture: xV,
            kind: "rotation"
          })
        } else vV.set(xV, bV + 1)
      }
      for (const kV of vV.keys()) rV.delete(kV);
      for (const [kV, bV] of xV) {
        const VV = vV.get(bV);
        void 0 === VV || vV.has(kV) || (vV.set(kV, VV), rV.delete(kV))
      }
      return {
        named: [...vV].sort(((VV, eV) => {
          let [xV] = VV, [JV] = eV;
          return xV < JV ? -1 : xV > JV ? 1 : 0
        })).map((VV => {
          let [eV, xV] = VV;
          return {
            name: eV,
            id: xV
          }
        })),
        aliases: [...rV.values()],
        layers: ZV
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);