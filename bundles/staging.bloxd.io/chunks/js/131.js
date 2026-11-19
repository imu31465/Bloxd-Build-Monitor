export const id = 131;
export const ids = [131];
export const modules = {
  6194: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      loadShaderPackTextures: () => RY,
      shaderPackTextures: () => OY
    });
    var FY = DY(6150);
    let AY = null,
      IY = null;

    function RY() {
      return IY ??= Promise.all([DY.e(69), DY.e(193)]).then((() => DY(39609))).then((YY => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: rY,
          textureNameToIndex: DY,
          textureAnimationData: IY
        } = YY;
        return AY ??= (0, FY.n)(DY, IY, rY), AY
      })), IY
    }

    function OY() {
      if (null === AY) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return AY
    }
  },
  6150: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => uY,
      b: () => RY,
      f: () => IY,
      j: () => FY,
      n: () => yY,
      r: () => vY,
      t: () => AY,
      w: () => gY,
      z: () => aY
    });
    const FY = 5;

    function AY(YY) {
      return YY === FY
    }
    const IY = 262144,
      RY = 256,
      OY = 256;

    function gY(YY) {
      if ("object" !== typeof YY || null === YY || Array.isArray(YY)) return "The pack has no files.";
      const rY = [];
      for (const [DY, FY] of Object.entries(YY)) {
        if ("string" !== typeof FY) return `${DY} isn't text.`;
        rY.push({
          path: DY,
          source: FY
        })
      }
      return rY.sort(((YY, rY) => vY(YY.path, rY.path))),
        function(YY) {
          if (0 === YY.length) return "The pack has no .wgsl files.";
          if (YY.length > RY) return `The pack has more than ${RY} .wgsl files.`;
          const rY = new Set;
          for (const {
              path: DY
            }
            of YY) {
            const YY = sY(DY);
            if (null !== YY) return YY;
            if (rY.has(DY)) return `The pack has two files at ${DY}.`;
            rY.add(DY)
          }
          return uY(YY) > IY ? `The pack's .wgsl files are over ${IY/1024} KB in total.` : null
        }(rY) ?? rY
    }

    function aY(YY) {
      const rY = {};
      for (const DY of YY) rY[DY.path] = DY.source;
      return rY
    }

    function vY(YY, rY) {
      return YY < rY ? -1 : YY > rY ? 1 : 0
    }

    function uY(YY) {
      const rY = new TextEncoder;
      let DY = 0;
      for (const {
          source: FY
        }
        of YY) DY += rY.encode(FY).byteLength;
      return DY
    }

    function sY(YY) {
      if (!YY.toLowerCase().endsWith(".wgsl")) return `${YY} isn't a .wgsl file.`;
      if (YY.length > OY) return `A file path is over ${OY} characters.`;
      if (YY.includes("\\") || /[\u0000-\u001f]/.test(YY)) return `${YY} isn't a valid file path.`;
      return YY.split("/").some((YY => "" === YY || "." === YY || ".." === YY)) ? `${YY} isn't a valid file path.` : null
    }
    const iY = /^(.*)\[rot\[([1-4])$/;

    function yY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const FY = new Map;
      rY.forEach(((YY, rY) => {
        let {
          numAnimStates: DY,
          animStartIdx: AY
        } = YY;
        for (let IY = 1; IY < DY; IY++) FY.set(AY + IY - 1, rY)
      }));
      const AY = Object.entries(YY),
        IY = new Map;
      for (const [QY, oY] of AY) {
        const YY = iY.exec(QY);
        "1" === YY?.[2] && IY.set(YY[1], oY + 1)
      }
      const RY = YY => {
          const rY = iY.exec(YY);
          return rY && IY.has(rY[1]) ? {
            root: rY[1],
            rotation: Number(rY[2]) - 1
          } : null
        },
        OY = new Set(AY.map((YY => {
          let [rY] = YY;
          return RY(rY)?.root ?? rY
        }))),
        gY = (YY, DY) => {
          const FY = YY.replace(/_?0$/, "");
          return (rY[DY]?.numAnimStates ?? 0) > 1 && !OY.has(FY) ? FY : YY
        },
        aY = new Map;
      for (const [iY, QY] of AY) aY.set(QY, gY(RY(iY)?.root ?? iY, QY));
      const vY = AY.reduce(((YY, rY) => {
          let [, DY] = rY;
          return Math.max(YY, DY + 1)
        }), 0),
        uY = Array.from({
          length: vY
        }, ((YY, rY) => ({
          id: rY + 1,
          rotation: 0
        }))),
        sY = new Map,
        yY = new Map;
      for (const [iY, QY] of AY) {
        const YY = RY(iY),
          rY = FY.get(QY);
        if (void 0 !== rY) {
          const DY = aY.get(rY);
          yY.set(iY, {
            name: iY,
            texture: DY,
            kind: "frame"
          }), YY && !yY.has(YY.root) && yY.set(YY.root, {
            name: YY.root,
            texture: DY,
            kind: "frame"
          });
          continue
        }
        const DY = aY.get(QY),
          AY = YY?.root ?? iY;
        if (DY !== AY && yY.set(AY, {
            name: AY,
            texture: DY,
            kind: "frame"
          }), YY) {
          const rY = IY.get(YY.root);
          uY[QY] = {
            id: rY,
            rotation: YY.rotation
          }, sY.set(DY, rY), yY.set(iY, {
            name: iY,
            texture: DY,
            kind: "rotation"
          })
        } else sY.set(DY, QY + 1)
      }
      for (const iY of sY.keys()) yY.delete(iY);
      for (const [iY, QY] of DY) {
        const YY = sY.get(QY);
        void 0 === YY || sY.has(iY) || (sY.set(iY, YY), yY.delete(iY))
      }
      return {
        named: [...sY].sort(((YY, rY) => {
          let [DY] = YY, [FY] = rY;
          return DY < FY ? -1 : DY > FY ? 1 : 0
        })).map((YY => {
          let [rY, DY] = YY;
          return {
            name: rY,
            id: DY
          }
        })),
        aliases: [...yY.values()],
        layers: uY
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);