export const id = 210;
export const ids = [210];
export const modules = {
  36177: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      h: () => FJ,
      j: () => UJ
    });
    const FJ = 1 / 2.2,
      UJ = 2.2;
    Math.sqrt(5);
    let eJ = .001
  },
  36207: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return parseInt(JJ.toString().replace(/\W/g, ""))
    }

    function UJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(JJ - cJ) <= ZJ
    }

    function eJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return JJ < cJ - FJ || JJ > ZJ + FJ
    }

    function XJ(JJ, cJ) {
      return JJ === cJ ? JJ : Math.random() * (cJ - JJ) + JJ
    }

    function AJ(JJ, cJ, ZJ) {
      return JJ + (cJ - JJ) * ZJ
    }

    function qJ(JJ, cJ, ZJ) {
      let FJ = fJ(cJ - JJ, 360);
      return FJ > 180 && (FJ -= 360), JJ + FJ * DJ(ZJ)
    }

    function jJ(JJ, cJ, ZJ) {
      let FJ;
      return FJ = JJ != cJ ? DJ((ZJ - JJ) / (cJ - JJ)) : 0, FJ
    }

    function YJ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = UJ * UJ,
        XJ = UJ * eJ;
      return JJ * (2 * XJ - 3 * eJ + 1) + ZJ * (-2 * XJ + 3 * eJ) + cJ * (XJ - 2 * eJ + UJ) + FJ * (XJ - eJ)
    }

    function hJ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = UJ * UJ;
      return 6 * (eJ - UJ) * JJ + (3 * eJ - 4 * UJ + 1) * cJ + 6 * (-eJ + UJ) * ZJ + (3 * eJ - 2 * UJ) * FJ
    }

    function DJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(ZJ, Math.max(cJ, JJ))
    }

    function sJ(JJ) {
      return JJ -= 2 * Math.PI * Math.floor((JJ + Math.PI) / (2 * Math.PI))
    }

    function nJ(JJ) {
      const cJ = JJ.toString(16);
      return JJ <= 15 ? ("0" + cJ).toUpperCase() : cJ.toUpperCase()
    }

    function GJ(JJ) {
      if (Math.log2) return Math.floor(Math.log2(JJ));
      if (JJ < 0) return NaN;
      if (0 === JJ) return -1 / 0;
      let cJ = 0;
      if (JJ < 1) {
        for (; JJ < 1;) cJ++, JJ *= 2;
        cJ = -cJ
      } else if (JJ > 1)
        for (; JJ > 1;) cJ++, JJ = Math.floor(JJ / 2);
      return cJ
    }

    function fJ(JJ, cJ) {
      return JJ - Math.floor(JJ / cJ) * cJ
    }

    function xJ(JJ, cJ, ZJ) {
      return (JJ - cJ) / (ZJ - cJ)
    }

    function rJ(JJ, cJ, ZJ) {
      return JJ * (ZJ - cJ) + cJ
    }

    function vJ(JJ, cJ) {
      let ZJ = fJ(cJ - JJ, 360);
      return ZJ > 180 && (ZJ -= 360), ZJ
    }

    function mJ(JJ, cJ) {
      const ZJ = fJ(JJ, 2 * cJ);
      return cJ - Math.abs(ZJ - cJ)
    }

    function QJ(JJ, cJ, ZJ) {
      let FJ = DJ(ZJ);
      return FJ = -2 * FJ * FJ * FJ + 3 * FJ * FJ, cJ * FJ + JJ * (1 - FJ)
    }

    function EJ(JJ, cJ, ZJ) {
      let FJ;
      return FJ = Math.abs(cJ - JJ) <= ZJ ? cJ : JJ + Math.sign(cJ - JJ) * ZJ, FJ
    }

    function VJ(JJ, cJ, ZJ) {
      const FJ = vJ(JJ, cJ);
      let UJ;
      return UJ = -ZJ < FJ && FJ < ZJ ? cJ : EJ(JJ, cJ = JJ + FJ, ZJ), UJ
    }

    function KJ(JJ, cJ, ZJ) {
      return (JJ - cJ) / (ZJ - cJ)
    }

    function yJ(JJ, cJ, ZJ) {
      return (ZJ - cJ) * JJ + cJ
    }

    function SJ(JJ, cJ) {
      const ZJ = JJ % cJ;
      return 0 === ZJ ? cJ : SJ(cJ, ZJ)
    }
    ZJ.r(cJ), ZJ.d(cJ, {
      Clamp: () => DJ,
      DeltaAngle: () => vJ,
      Denormalize: () => rJ,
      ExtractAsInt: () => FJ,
      Hermite: () => YJ,
      Hermite1stDerivative: () => hJ,
      HighestCommonFactor: () => SJ,
      ILog2: () => GJ,
      InverseLerp: () => jJ,
      Lerp: () => AJ,
      LerpAngle: () => qJ,
      MoveTowards: () => EJ,
      MoveTowardsAngle: () => VJ,
      Normalize: () => xJ,
      NormalizeRadians: () => sJ,
      OutsideRange: () => eJ,
      PercentToRange: () => yJ,
      PingPong: () => mJ,
      RandomRange: () => XJ,
      RangeToPercent: () => KJ,
      Repeat: () => fJ,
      SmoothStep: () => QJ,
      ToHex: () => nJ,
      WithinEpsilon: () => UJ
    })
  },
  36165: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      Matrix: () => FJ.b,
      Quaternion: () => FJ.e,
      RegisterMathVector: () => FJ.f,
      TmpVectors: () => FJ.h,
      Vector2: () => FJ.i,
      Pn: () => FJ.j,
      Vector4: () => FJ.k
    });
    var FJ = ZJ(36174);
    (0, FJ.f)()
  },
  36183: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      const ZJ = [];
      for (let FJ = 0; FJ < JJ; ++FJ) ZJ.push(cJ());
      return ZJ
    }

    function UJ(JJ, cJ) {
      return FJ(JJ, cJ)
    }
    ZJ.d(cJ, {
      e: () => FJ,
      h: () => UJ,
      k: () => XJ
    });
    const eJ = ["push", "splice", "pop", "shift", "unshift"];

    function XJ(JJ, cJ) {
      const ZJ = eJ.map((ZJ => function(JJ, cJ, ZJ) {
        const FJ = JJ[cJ];
        if ("function" !== typeof FJ) return null;
        const UJ = function() {
          const FJ = JJ.length,
            eJ = UJ.previous.apply(JJ, arguments);
          return ZJ(cJ, FJ), eJ
        };
        return FJ.next = UJ, UJ.previous = FJ, JJ[cJ] = UJ, () => {
          const ZJ = UJ.previous;
          if (!ZJ) return;
          const FJ = UJ.next;
          FJ ? (ZJ.next = FJ, FJ.previous = ZJ) : (ZJ.next = void 0, JJ[cJ] = ZJ), UJ.next = void 0, UJ.previous = void 0
        }
      }(JJ, ZJ, cJ)));
      return () => {
        for (const JJ of ZJ) JJ?.()
      }
    }
  },
  36216: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      f: () => UJ
    });
    const FJ = {};

    function UJ(JJ, cJ) {
      FJ[JJ] = cJ
    }

    function eJ(JJ) {
      return FJ[JJ]
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);