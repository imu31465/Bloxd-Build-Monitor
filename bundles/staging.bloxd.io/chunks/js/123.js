export const id = 123;
export const ids = [123];
export const modules = {
  5977: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      loadShaderPackTextures: () => XJ,
      shaderPackTextures: () => AJ
    });
    var FJ = ZJ(5934);
    let UJ = null,
      eJ = null;

    function XJ() {
      return eJ ??= Promise.all([ZJ.e(64), ZJ.e(184)]).then((() => ZJ(39255))).then((JJ => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: cJ,
          textureNameToIndex: ZJ,
          textureAnimationData: eJ
        } = JJ;
        return UJ ??= (0, FJ.g)(ZJ, eJ, cJ), UJ
      })), eJ
    }

    function AJ() {
      if (null === UJ) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return UJ
    }
  },
  5934: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ,
      d: () => eJ,
      f: () => FJ,
      g: () => nJ,
      j: () => YJ,
      k: () => UJ,
      l: () => qJ,
      o: () => jJ,
      q: () => hJ
    });
    const FJ = 5;

    function UJ(JJ) {
      return JJ === FJ
    }
    const eJ = 262144,
      XJ = 256,
      AJ = 256;

    function qJ(JJ) {
      if ("object" !== typeof JJ || null === JJ || Array.isArray(JJ)) return "The pack has no files.";
      const cJ = [];
      for (const [ZJ, FJ] of Object.entries(JJ)) {
        if ("string" !== typeof FJ) return `${ZJ} isn't text.`;
        cJ.push({
          path: ZJ,
          source: FJ
        })
      }
      return cJ.sort(((JJ, cJ) => YJ(JJ.path, cJ.path))),
        function(JJ) {
          if (0 === JJ.length) return "The pack has no .wgsl files.";
          if (JJ.length > XJ) return `The pack has more than ${XJ} .wgsl files.`;
          const cJ = new Set;
          for (const {
              path: ZJ
            }
            of JJ) {
            const JJ = DJ(ZJ);
            if (null !== JJ) return JJ;
            if (cJ.has(ZJ)) return `The pack has two files at ${ZJ}.`;
            cJ.add(ZJ)
          }
          return hJ(JJ) > eJ ? `The pack's .wgsl files are over ${eJ/1024} KB in total.` : null
        }(cJ) ?? cJ
    }

    function jJ(JJ) {
      const cJ = {};
      for (const ZJ of JJ) cJ[ZJ.path] = ZJ.source;
      return cJ
    }

    function YJ(JJ, cJ) {
      return JJ < cJ ? -1 : JJ > cJ ? 1 : 0
    }

    function hJ(JJ) {
      const cJ = new TextEncoder;
      let ZJ = 0;
      for (const {
          source: FJ
        }
        of JJ) ZJ += cJ.encode(FJ).byteLength;
      return ZJ
    }

    function DJ(JJ) {
      if (!JJ.toLowerCase().endsWith(".wgsl")) return `${JJ} isn't a .wgsl file.`;
      if (JJ.length > AJ) return `A file path is over ${AJ} characters.`;
      if (JJ.includes("\\") || /[\u0000-\u001f]/.test(JJ)) return `${JJ} isn't a valid file path.`;
      return JJ.split("/").some((JJ => "" === JJ || "." === JJ || ".." === JJ)) ? `${JJ} isn't a valid file path.` : null
    }
    const sJ = /^(.*)\[rot\[([1-4])$/;

    function nJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const FJ = new Map;
      cJ.forEach(((JJ, cJ) => {
        let {
          numAnimStates: ZJ,
          animStartIdx: UJ
        } = JJ;
        for (let eJ = 1; eJ < ZJ; eJ++) FJ.set(UJ + eJ - 1, cJ)
      }));
      const UJ = Object.entries(JJ),
        eJ = new Map;
      for (const [GJ, fJ] of UJ) {
        const JJ = sJ.exec(GJ);
        "1" === JJ?.[2] && eJ.set(JJ[1], fJ + 1)
      }
      const XJ = JJ => {
          const cJ = sJ.exec(JJ);
          return cJ && eJ.has(cJ[1]) ? {
            root: cJ[1],
            rotation: Number(cJ[2]) - 1
          } : null
        },
        AJ = new Set(UJ.map((JJ => {
          let [cJ] = JJ;
          return XJ(cJ)?.root ?? cJ
        }))),
        qJ = (JJ, ZJ) => {
          const FJ = JJ.replace(/_?0$/, "");
          return (cJ[ZJ]?.numAnimStates ?? 0) > 1 && !AJ.has(FJ) ? FJ : JJ
        },
        jJ = new Map;
      for (const [sJ, GJ] of UJ) jJ.set(GJ, qJ(XJ(sJ)?.root ?? sJ, GJ));
      const YJ = UJ.reduce(((JJ, cJ) => {
          let [, ZJ] = cJ;
          return Math.max(JJ, ZJ + 1)
        }), 0),
        hJ = Array.from({
          length: YJ
        }, ((JJ, cJ) => ({
          id: cJ + 1,
          rotation: 0
        }))),
        DJ = new Map,
        nJ = new Map;
      for (const [sJ, GJ] of UJ) {
        const JJ = XJ(sJ),
          cJ = FJ.get(GJ);
        if (void 0 !== cJ) {
          const ZJ = jJ.get(cJ);
          nJ.set(sJ, {
            name: sJ,
            texture: ZJ,
            kind: "frame"
          }), JJ && !nJ.has(JJ.root) && nJ.set(JJ.root, {
            name: JJ.root,
            texture: ZJ,
            kind: "frame"
          });
          continue
        }
        const ZJ = jJ.get(GJ),
          UJ = JJ?.root ?? sJ;
        if (ZJ !== UJ && nJ.set(UJ, {
            name: UJ,
            texture: ZJ,
            kind: "frame"
          }), JJ) {
          const cJ = eJ.get(JJ.root);
          hJ[GJ] = {
            id: cJ,
            rotation: JJ.rotation
          }, DJ.set(ZJ, cJ), nJ.set(sJ, {
            name: sJ,
            texture: ZJ,
            kind: "rotation"
          })
        } else DJ.set(ZJ, GJ + 1)
      }
      for (const sJ of DJ.keys()) nJ.delete(sJ);
      for (const [sJ, GJ] of ZJ) {
        const JJ = DJ.get(GJ);
        void 0 === JJ || DJ.has(sJ) || (DJ.set(sJ, JJ), nJ.delete(sJ))
      }
      return {
        named: [...DJ].sort(((JJ, cJ) => {
          let [ZJ] = JJ, [FJ] = cJ;
          return ZJ < FJ ? -1 : ZJ > FJ ? 1 : 0
        })).map((JJ => {
          let [cJ, ZJ] = JJ;
          return {
            name: cJ,
            id: ZJ
          }
        })),
        aliases: [...nJ.values()],
        layers: hJ
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);