export const id = 232;
export const ids = [232];
export const modules = {
  37443: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG,
      g: () => wG,
      k: () => SG
    });
    const wG = 1 / 2.2,
      SG = 2.2;
    Math.sqrt(5);
    let LG = .001
  },
  37471: (GG, bG, ZG) => {
    function wG(GG) {
      return parseInt(GG.toString().replace(/\W/g, ""))
    }

    function SG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(GG - bG) <= ZG
    }

    function LG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return GG < bG - wG || GG > ZG + wG
    }

    function yG(GG, bG) {
      return GG === bG ? GG : Math.random() * (bG - GG) + GG
    }

    function kG(GG, bG, ZG) {
      return GG + (bG - GG) * ZG
    }

    function UG(GG, bG, ZG) {
      let wG = dG(bG - GG, 360);
      return wG > 180 && (wG -= 360), GG + wG * fG(ZG)
    }

    function YG(GG, bG, ZG) {
      let wG;
      return wG = GG != bG ? fG((ZG - GG) / (bG - GG)) : 0, wG
    }

    function VG(GG, bG, ZG, wG, SG) {
      const LG = SG * SG,
        yG = SG * LG;
      return GG * (2 * yG - 3 * LG + 1) + ZG * (-2 * yG + 3 * LG) + bG * (yG - 2 * LG + SG) + wG * (yG - LG)
    }

    function pG(GG, bG, ZG, wG, SG) {
      const LG = SG * SG;
      return 6 * (LG - SG) * GG + (3 * LG - 4 * SG + 1) * bG + 6 * (-LG + SG) * ZG + (3 * LG - 2 * SG) * wG
    }

    function fG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(ZG, Math.max(bG, GG))
    }

    function QG(GG) {
      return GG -= 2 * Math.PI * Math.floor((GG + Math.PI) / (2 * Math.PI))
    }

    function KG(GG) {
      const bG = GG.toString(16);
      return GG <= 15 ? ("0" + bG).toUpperCase() : bG.toUpperCase()
    }

    function hG(GG) {
      if (Math.log2) return Math.floor(Math.log2(GG));
      if (GG < 0) return NaN;
      if (0 === GG) return -1 / 0;
      let bG = 0;
      if (GG < 1) {
        for (; GG < 1;) bG++, GG *= 2;
        bG = -bG
      } else if (GG > 1)
        for (; GG > 1;) bG++, GG = Math.floor(GG / 2);
      return bG
    }

    function dG(GG, bG) {
      return GG - Math.floor(GG / bG) * bG
    }

    function JG(GG, bG, ZG) {
      return (GG - bG) / (ZG - bG)
    }

    function rG(GG, bG, ZG) {
      return GG * (ZG - bG) + bG
    }

    function zG(GG, bG) {
      let ZG = dG(bG - GG, 360);
      return ZG > 180 && (ZG -= 360), ZG
    }

    function EG(GG, bG) {
      const ZG = dG(GG, 2 * bG);
      return bG - Math.abs(ZG - bG)
    }

    function oG(GG, bG, ZG) {
      let wG = fG(ZG);
      return wG = -2 * wG * wG * wG + 3 * wG * wG, bG * wG + GG * (1 - wG)
    }

    function XG(GG, bG, ZG) {
      let wG;
      return wG = Math.abs(bG - GG) <= ZG ? bG : GG + Math.sign(bG - GG) * ZG, wG
    }

    function uG(GG, bG, ZG) {
      const wG = zG(GG, bG);
      let SG;
      return SG = -ZG < wG && wG < ZG ? bG : XG(GG, bG = GG + wG, ZG), SG
    }

    function iG(GG, bG, ZG) {
      return (GG - bG) / (ZG - bG)
    }

    function CG(GG, bG, ZG) {
      return (ZG - bG) * GG + bG
    }

    function WG(GG, bG) {
      const ZG = GG % bG;
      return 0 === ZG ? bG : WG(bG, ZG)
    }
    ZG.r(bG), ZG.d(bG, {
      Clamp: () => fG,
      DeltaAngle: () => zG,
      Denormalize: () => rG,
      ExtractAsInt: () => wG,
      Hermite: () => VG,
      Hermite1stDerivative: () => pG,
      HighestCommonFactor: () => WG,
      ILog2: () => hG,
      InverseLerp: () => YG,
      Lerp: () => kG,
      LerpAngle: () => UG,
      MoveTowards: () => XG,
      MoveTowardsAngle: () => uG,
      Normalize: () => JG,
      NormalizeRadians: () => QG,
      OutsideRange: () => LG,
      PercentToRange: () => CG,
      PingPong: () => EG,
      RandomRange: () => yG,
      RangeToPercent: () => iG,
      Repeat: () => dG,
      SmoothStep: () => oG,
      ToHex: () => KG,
      WithinEpsilon: () => SG
    })
  },
  37432: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      Matrix: () => wG.e,
      Quaternion: () => wG.g,
      RegisterMathVector: () => wG.h,
      TmpVectors: () => wG.j,
      Vector2: () => wG.m,
      mK: () => wG.p,
      Vector4: () => wG.t
    });
    var wG = ZG(37439);
    (0, wG.h)()
  },
  37448: (GG, bG, ZG) => {
    function wG(GG, bG) {
      const ZG = [];
      for (let wG = 0; wG < GG; ++wG) ZG.push(bG());
      return ZG
    }

    function SG(GG, bG) {
      return wG(GG, bG)
    }
    ZG.d(bG, {
      d: () => wG,
      f: () => SG,
      h: () => yG
    });
    const LG = ["push", "splice", "pop", "shift", "unshift"];

    function yG(GG, bG) {
      const ZG = LG.map((ZG => function(GG, bG, ZG) {
        const wG = GG[bG];
        if ("function" !== typeof wG) return null;
        const SG = function() {
          const wG = GG.length,
            LG = SG.previous.apply(GG, arguments);
          return ZG(bG, wG), LG
        };
        return wG.next = SG, SG.previous = wG, GG[bG] = SG, () => {
          const ZG = SG.previous;
          if (!ZG) return;
          const wG = SG.next;
          wG ? (ZG.next = wG, wG.previous = ZG) : (ZG.next = void 0, GG[bG] = ZG), SG.next = void 0, SG.previous = void 0
        }
      }(GG, ZG, bG)));
      return () => {
        for (const GG of ZG) GG?.()
      }
    }
  },
  37484: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      i: () => SG
    });
    const wG = {};

    function SG(GG, bG) {
      wG[GG] = bG
    }

    function LG(GG) {
      return wG[GG]
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);