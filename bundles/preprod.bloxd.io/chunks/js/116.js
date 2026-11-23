export const id = 116;
export const ids = [116, 136];
export const modules = {
  6630: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      loadShaderPackTextures: () => nC,
      shaderPackTextures: () => fC
    });
    var QC = ZC(5002);
    let wC = null,
      bC = null;

    function nC() {
      return bC ??= Promise.all([ZC.e(72), ZC.e(188)]).then((() => ZC(40313))).then((CC => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: zC,
          textureNameToIndex: ZC,
          textureAnimationData: bC
        } = CC;
        return wC ??= (0, QC.k)(ZC, bC, zC), wC
      })), bC
    }

    function fC() {
      if (null === wC) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return wC
    }
  },
  5002: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      g: () => nC,
      j: () => QC,
      k: () => SC,
      m: () => WC,
      q: () => wC,
      r: () => bC,
      s: () => qC,
      w: () => FC,
      y: () => NC
    });
    const QC = 5;

    function wC(CC) {
      return CC === QC
    }

    function bC(CC) {
      return [...CC.features]
    }
    const nC = 262144,
      fC = 256,
      oC = 256;

    function qC(CC) {
      if ("object" !== typeof CC || null === CC || Array.isArray(CC)) return "The pack has no files.";
      const zC = [];
      for (const [ZC, QC] of Object.entries(CC)) {
        if ("string" !== typeof QC) return `${ZC} isn't text.`;
        zC.push({
          path: ZC,
          source: QC
        })
      }
      return zC.sort(((CC, zC) => WC(CC.path, zC.path))),
        function(CC) {
          if (0 === CC.length) return "The pack has no .wgsl files.";
          if (CC.length > fC) return `The pack has more than ${fC} .wgsl files.`;
          const zC = new Set;
          for (const {
              path: ZC
            }
            of CC) {
            const CC = MC(ZC);
            if (null !== CC) return CC;
            if (zC.has(ZC)) return `The pack has two files at ${ZC}.`;
            zC.add(ZC)
          }
          return NC(CC) > nC ? `The pack's .wgsl files are over ${nC/1024} KB in total.` : null
        }(zC) ?? zC
    }

    function FC(CC) {
      const zC = {};
      for (const ZC of CC) zC[ZC.path] = ZC.source;
      return zC
    }

    function WC(CC, zC) {
      return CC < zC ? -1 : CC > zC ? 1 : 0
    }

    function NC(CC) {
      const zC = new TextEncoder;
      let ZC = 0;
      for (const {
          source: QC
        }
        of CC) ZC += zC.encode(QC).byteLength;
      return ZC
    }

    function MC(CC) {
      if (!CC.toLowerCase().endsWith(".wgsl")) return `${CC} isn't a .wgsl file.`;
      if (CC.length > oC) return `A file path is over ${oC} characters.`;
      if (CC.includes("\\") || /[\u0000-\u001f]/.test(CC)) return `${CC} isn't a valid file path.`;
      return CC.split("/").some((CC => "" === CC || "." === CC || ".." === CC)) ? `${CC} isn't a valid file path.` : null
    }
    const gC = /^(.*)\[rot\[([1-4])$/;

    function SC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const QC = new Map;
      zC.forEach(((CC, zC) => {
        let {
          numAnimStates: ZC,
          animStartIdx: wC
        } = CC;
        for (let bC = 1; bC < ZC; bC++) QC.set(wC + bC - 1, zC)
      }));
      const wC = Object.entries(CC),
        bC = new Map;
      for (const [SC, pC] of wC) {
        const CC = gC.exec(SC);
        "1" === CC?.[2] && bC.set(CC[1], pC + 1)
      }
      const nC = CC => {
          const zC = gC.exec(CC);
          return zC && bC.has(zC[1]) ? {
            root: zC[1],
            rotation: Number(zC[2]) - 1
          } : null
        },
        fC = new Set(wC.map((CC => {
          let [zC] = CC;
          return nC(zC)?.root ?? zC
        }))),
        oC = (CC, ZC) => {
          const QC = CC.replace(/_?0$/, "");
          return (zC[ZC]?.numAnimStates ?? 0) > 1 && !fC.has(QC) ? QC : CC
        },
        qC = new Map;
      for (const [gC, SC] of wC) qC.set(SC, oC(nC(gC)?.root ?? gC, SC));
      const FC = wC.reduce(((CC, zC) => {
          let [, ZC] = zC;
          return Math.max(CC, ZC + 1)
        }), 0),
        WC = Array.from({
          length: FC
        }, ((CC, zC) => ({
          id: zC + 1,
          rotation: 0
        }))),
        NC = new Map,
        MC = new Map;
      for (const [gC, SC] of wC) {
        const CC = nC(gC),
          zC = QC.get(SC);
        if (void 0 !== zC) {
          const ZC = qC.get(zC);
          MC.set(gC, {
            name: gC,
            texture: ZC,
            kind: "frame"
          }), CC && !MC.has(CC.root) && MC.set(CC.root, {
            name: CC.root,
            texture: ZC,
            kind: "frame"
          });
          continue
        }
        const ZC = qC.get(SC),
          wC = CC?.root ?? gC;
        if (ZC !== wC && MC.set(wC, {
            name: wC,
            texture: ZC,
            kind: "frame"
          }), CC) {
          const zC = bC.get(CC.root);
          WC[SC] = {
            id: zC,
            rotation: CC.rotation
          }, NC.set(ZC, zC), MC.set(gC, {
            name: gC,
            texture: ZC,
            kind: "rotation"
          })
        } else NC.set(ZC, SC + 1)
      }
      for (const gC of NC.keys()) MC.delete(gC);
      for (const [gC, SC] of ZC) {
        const CC = NC.get(SC);
        void 0 === CC || NC.has(gC) || (NC.set(gC, CC), MC.delete(gC))
      }
      return {
        named: [...NC].sort(((CC, zC) => {
          let [ZC] = CC, [QC] = zC;
          return ZC < QC ? -1 : ZC > QC ? 1 : 0
        })).map((CC => {
          let [zC, ZC] = CC;
          return {
            name: zC,
            id: ZC
          }
        })),
        aliases: [...MC.values()],
        layers: WC
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);