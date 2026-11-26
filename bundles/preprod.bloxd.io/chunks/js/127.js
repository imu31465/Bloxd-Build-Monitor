export const id = 127;
export const ids = [127, 129, 150, 151];
export const modules = {
  5603: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU.j,
      e: () => yU,
      i: () => cU.o
    });
    var cU = zU(5608);
    const yU = [!1, !0].flatMap((UU => ["terrain", "liquid", "model"].map((XU => ({
      strict: UU,
      program: XU
    })))))
  },
  7251: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      forgetShaderPackActiveHint: () => CU,
      isOtherApiVersion: () => WU,
      isShaderPackActive: () => BU,
      isShaderPackChangePending: () => PU,
      markShaderPackChangePending: () => RU,
      pageShaderPackValidationVersion: () => dU,
      reconcileStoredShaderPackHint: () => eU,
      removeShaderPack: () => GU,
      replaceShaderPack: () => tU,
      saveShaderPack: () => aU,
      shaderPackNeedsCheck: () => LU,
      storedPackOutcome: () => ZU,
      storedShaderPackFiles: () => NU,
      toStoredShaderPack: () => YU
    });
    var cU = zU(5608),
      yU = zU(5603),
      QU = zU(42),
      AU = zU(3849),
      FU = zU(7253),
      oU = zU(7219);
    const DU = "shaderPackChangePending";
    let EU = null;

    function YU(UU, XU, zU) {
      return {
        manifest: UU.manifest,
        files: (0, cU.u)(UU.files),
        validation: XU,
        ...zU && {
          listing: zU
        }
      }
    }

    function NU(UU) {
      return Object.keys(UU.files).map((XU => ({
        path: XU,
        source: UU.files[XU]
      })))
    }
    let IU = Promise.resolve();

    function pU(UU) {
      const XU = IU.then(UU);
      return IU = XU.catch((() => {})), XU
    }

    function aU(UU, XU) {
      return pU((() => gU(UU, XU)))
    }

    function tU(UU, XU, zU) {
      return pU((async () => JSON.stringify(await (0, FU.f)()) === JSON.stringify(UU) && (null === XU ? (await kU(), !0) : gU(XU, zU))))
    }
    async function gU(UU, XU) {
      const zU = await QU.g.setItem(FU.e, UU);
      return zU && wU(UU, XU), zU
    }
    async function kU() {
      await QU.g.removeItem(FU.e), QU.k.removeItem(AU.b)
    }

    function GU() {
      return pU(kU)
    }

    function BU(UU, XU) {
      return "active" === ZU(UU, XU).kind
    }

    function ZU(UU, XU) {
      var zU;
      return null === UU ? {
        kind: "none",
        reason: "nothingStored"
      } : WU(UU) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.ok) || UU.validation.fromRecheck ? null === XU ? {
        kind: "none",
        reason: "noCompiler"
      } : LU(UU, XU) ? {
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

    function RU() {
      QU.n.setItem(DU, performance.timeOrigin)
    }

    function PU() {
      return QU.n.getItem(DU) === performance.timeOrigin
    }

    function WU(UU) {
      return !(0, yU.i)(UU.manifest.apiVersion)
    }

    function dU(UU) {
      return EU ??= UU.mq((0, oU.shaderPackTextures)()), EU
    }

    function LU(UU, XU) {
      var zU;
      return (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.headerVersion) !== dU(XU)
    }

    function eU(UU) {
      return pU((async () => {
        wU(await (0, FU.f)(!0), UU)
      }))
    }

    function CU() {
      return pU((async () => {
        QU.k.removeItem(AU.b)
      }))
    }

    function wU(UU, XU) {
      BU(UU, XU) ? QU.k.setItem(AU.b, !0) : QU.k.removeItem(AU.b)
    }
  },
  7253: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      f: () => QU
    });
    var cU = zU(42);
    const yU = "shaderPack";
    async function QU() {
      var UU;
      let XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (UU = await cU.g.getItem(yU, XU)) && void 0 !== UU ? UU : null
    }
  },
  7219: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      loadShaderPackTextures: () => AU,
      shaderPackTextures: () => FU
    });
    var cU = zU(5608);
    let yU = null,
      QU = null;

    function AU() {
      return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: XU,
          textureNameToIndex: zU,
          textureAnimationData: QU
        } = UU;
        return yU ??= (0, cU.k)(zU, QU, XU), yU
      })), QU
    }

    function FU() {
      if (null === yU) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return yU
    }
  },
  5608: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      h: () => AU,
      j: () => cU,
      k: () => aU,
      m: () => YU,
      o: () => yU,
      q: () => QU,
      r: () => DU,
      u: () => EU,
      y: () => NU
    });
    const cU = 5;

    function yU(UU) {
      return UU === cU
    }

    function QU(UU) {
      return [...UU.features]
    }
    const AU = 262144,
      FU = 256,
      oU = 256;

    function DU(UU) {
      if ("object" !== typeof UU || null === UU || Array.isArray(UU)) return "The pack has no files.";
      const XU = [];
      for (const [zU, cU] of Object.entries(UU)) {
        if ("string" !== typeof cU) return `${zU} isn't text.`;
        XU.push({
          path: zU,
          source: cU
        })
      }
      return XU.sort(((UU, XU) => YU(UU.path, XU.path))),
        function(UU) {
          if (0 === UU.length) return "The pack has no .wgsl files.";
          if (UU.length > FU) return `The pack has more than ${FU} .wgsl files.`;
          const XU = new Set;
          for (const {
              path: zU
            }
            of UU) {
            const UU = IU(zU);
            if (null !== UU) return UU;
            if (XU.has(zU)) return `The pack has two files at ${zU}.`;
            XU.add(zU)
          }
          return NU(UU) > AU ? `The pack's .wgsl files are over ${AU/1024} KB in total.` : null
        }(XU) ?? XU
    }

    function EU(UU) {
      const XU = {};
      for (const zU of UU) XU[zU.path] = zU.source;
      return XU
    }

    function YU(UU, XU) {
      return UU < XU ? -1 : UU > XU ? 1 : 0
    }

    function NU(UU) {
      const XU = new TextEncoder;
      let zU = 0;
      for (const {
          source: cU
        }
        of UU) zU += XU.encode(cU).byteLength;
      return zU
    }

    function IU(UU) {
      if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
      if (UU.length > oU) return `A file path is over ${oU} characters.`;
      if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
      return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
    }
    const pU = /^(.*)\[rot\[([1-4])$/;

    function aU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const cU = new Map;
      XU.forEach(((UU, XU) => {
        let {
          numAnimStates: zU,
          animStartIdx: yU
        } = UU;
        for (let QU = 1; QU < zU; QU++) cU.set(yU + QU - 1, XU)
      }));
      const yU = Object.entries(UU),
        QU = new Map;
      for (const [aU, tU] of yU) {
        const UU = pU.exec(aU);
        "1" === UU?.[2] && QU.set(UU[1], tU + 1)
      }
      const AU = UU => {
          const XU = pU.exec(UU);
          return XU && QU.has(XU[1]) ? {
            root: XU[1],
            rotation: Number(XU[2]) - 1
          } : null
        },
        FU = new Set(yU.map((UU => {
          let [XU] = UU;
          return AU(XU)?.root ?? XU
        }))),
        oU = (UU, zU) => {
          const cU = UU.replace(/_?0$/, "");
          return (XU[zU]?.numAnimStates ?? 0) > 1 && !FU.has(cU) ? cU : UU
        },
        DU = new Map;
      for (const [pU, aU] of yU) DU.set(aU, oU(AU(pU)?.root ?? pU, aU));
      const EU = yU.reduce(((UU, XU) => {
          let [, zU] = XU;
          return Math.max(UU, zU + 1)
        }), 0),
        YU = Array.from({
          length: EU
        }, ((UU, XU) => ({
          id: XU + 1,
          rotation: 0
        }))),
        NU = new Map,
        IU = new Map;
      for (const [pU, aU] of yU) {
        const UU = AU(pU),
          XU = cU.get(aU);
        if (void 0 !== XU) {
          const zU = DU.get(XU);
          IU.set(pU, {
            name: pU,
            texture: zU,
            kind: "frame"
          }), UU && !IU.has(UU.root) && IU.set(UU.root, {
            name: UU.root,
            texture: zU,
            kind: "frame"
          });
          continue
        }
        const zU = DU.get(aU),
          yU = UU?.root ?? pU;
        if (zU !== yU && IU.set(yU, {
            name: yU,
            texture: zU,
            kind: "frame"
          }), UU) {
          const XU = QU.get(UU.root);
          YU[aU] = {
            id: XU,
            rotation: UU.rotation
          }, NU.set(zU, XU), IU.set(pU, {
            name: pU,
            texture: zU,
            kind: "rotation"
          })
        } else NU.set(zU, aU + 1)
      }
      for (const pU of NU.keys()) IU.delete(pU);
      for (const [pU, aU] of zU) {
        const UU = NU.get(aU);
        void 0 === UU || NU.has(pU) || (NU.set(pU, UU), IU.delete(pU))
      }
      return {
        named: [...NU].sort(((UU, XU) => {
          let [zU] = UU, [cU] = XU;
          return zU < cU ? -1 : zU > cU ? 1 : 0
        })).map((UU => {
          let [XU, zU] = UU;
          return {
            name: XU,
            id: zU
          }
        })),
        aliases: [...IU.values()],
        layers: YU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);