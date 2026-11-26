export const id = 254;
export const ids = [254];
export const modules = {
  37972: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      e: () => AH,
      f: () => rH
    });
    const AH = 1 / 2.2,
      rH = 2.2;
    Math.sqrt(5);
    let SH = .001
  },
  38002: (HH, BH, LH) => {
    function AH(HH) {
      return parseInt(HH.toString().replace(/\W/g, ""))
    }

    function rH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(HH - BH) <= LH
    }

    function SH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return HH < BH - AH || HH > LH + AH
    }

    function hH(HH, BH) {
      return HH === BH ? HH : Math.random() * (BH - HH) + HH
    }

    function tH(HH, BH, LH) {
      return HH + (BH - HH) * LH
    }

    function zH(HH, BH, LH) {
      let AH = WH(BH - HH, 360);
      return AH > 180 && (AH -= 360), HH + AH * GH(LH)
    }

    function CH(HH, BH, LH) {
      let AH;
      return AH = HH != BH ? GH((LH - HH) / (BH - HH)) : 0, AH
    }

    function EH(HH, BH, LH, AH, rH) {
      const SH = rH * rH,
        hH = rH * SH;
      return HH * (2 * hH - 3 * SH + 1) + LH * (-2 * hH + 3 * SH) + BH * (hH - 2 * SH + rH) + AH * (hH - SH)
    }

    function XH(HH, BH, LH, AH, rH) {
      const SH = rH * rH;
      return 6 * (SH - rH) * HH + (3 * SH - 4 * rH + 1) * BH + 6 * (-SH + rH) * LH + (3 * SH - 2 * rH) * AH
    }

    function GH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(LH, Math.max(BH, HH))
    }

    function YH(HH) {
      return HH -= 2 * Math.PI * Math.floor((HH + Math.PI) / (2 * Math.PI))
    }

    function uH(HH) {
      const BH = HH.toString(16);
      return HH <= 15 ? ("0" + BH).toUpperCase() : BH.toUpperCase()
    }

    function QH(HH) {
      if (Math.log2) return Math.floor(Math.log2(HH));
      if (HH < 0) return NaN;
      if (0 === HH) return -1 / 0;
      let BH = 0;
      if (HH < 1) {
        for (; HH < 1;) BH++, HH *= 2;
        BH = -BH
      } else if (HH > 1)
        for (; HH > 1;) BH++, HH = Math.floor(HH / 2);
      return BH
    }

    function WH(HH, BH) {
      return HH - Math.floor(HH / BH) * BH
    }

    function MH(HH, BH, LH) {
      return (HH - BH) / (LH - BH)
    }

    function xH(HH, BH, LH) {
      return HH * (LH - BH) + BH
    }

    function vH(HH, BH) {
      let LH = WH(BH - HH, 360);
      return LH > 180 && (LH -= 360), LH
    }

    function PH(HH, BH) {
      const LH = WH(HH, 2 * BH);
      return BH - Math.abs(LH - BH)
    }

    function TH(HH, BH, LH) {
      let AH = GH(LH);
      return AH = -2 * AH * AH * AH + 3 * AH * AH, BH * AH + HH * (1 - AH)
    }

    function UH(HH, BH, LH) {
      let AH;
      return AH = Math.abs(BH - HH) <= LH ? BH : HH + Math.sign(BH - HH) * LH, AH
    }

    function VH(HH, BH, LH) {
      const AH = vH(HH, BH);
      let rH;
      return rH = -LH < AH && AH < LH ? BH : UH(HH, BH = HH + AH, LH), rH
    }

    function OH(HH, BH, LH) {
      return (HH - BH) / (LH - BH)
    }

    function bH(HH, BH, LH) {
      return (LH - BH) * HH + BH
    }

    function kH(HH, BH) {
      const LH = HH % BH;
      return 0 === LH ? BH : kH(BH, LH)
    }
    LH.r(BH), LH.d(BH, {
      Clamp: () => GH,
      DeltaAngle: () => vH,
      Denormalize: () => xH,
      ExtractAsInt: () => AH,
      Hermite: () => EH,
      Hermite1stDerivative: () => XH,
      HighestCommonFactor: () => kH,
      ILog2: () => QH,
      InverseLerp: () => CH,
      Lerp: () => tH,
      LerpAngle: () => zH,
      MoveTowards: () => UH,
      MoveTowardsAngle: () => VH,
      Normalize: () => MH,
      NormalizeRadians: () => YH,
      OutsideRange: () => SH,
      PercentToRange: () => bH,
      PingPong: () => PH,
      RandomRange: () => hH,
      RangeToPercent: () => OH,
      Repeat: () => WH,
      SmoothStep: () => TH,
      ToHex: () => uH,
      WithinEpsilon: () => rH
    })
  },
  37961: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      Matrix: () => AH.e,
      Quaternion: () => AH.f,
      RegisterMathVector: () => AH.h,
      TmpVectors: () => AH.l,
      Vector2: () => AH.n,
      lu: () => AH.o,
      Vector4: () => AH.q
    });
    var AH = LH(37963);
    (0, AH.h)()
  },
  37974: (HH, BH, LH) => {
    function AH(HH, BH) {
      const LH = [];
      for (let AH = 0; AH < HH; ++AH) LH.push(BH());
      return LH
    }

    function rH(HH, BH) {
      return AH(HH, BH)
    }
    LH.d(BH, {
      d: () => AH,
      g: () => rH,
      i: () => hH
    });
    const SH = ["push", "splice", "pop", "shift", "unshift"];

    function hH(HH, BH) {
      const LH = SH.map((LH => function(HH, BH, LH) {
        const AH = HH[BH];
        if ("function" !== typeof AH) return null;
        const rH = function() {
          const AH = HH.length,
            SH = rH.previous.apply(HH, arguments);
          return LH(BH, AH), SH
        };
        return AH.next = rH, rH.previous = AH, HH[BH] = rH, () => {
          const LH = rH.previous;
          if (!LH) return;
          const AH = rH.next;
          AH ? (LH.next = AH, AH.previous = LH) : (LH.next = void 0, HH[BH] = LH), rH.next = void 0, rH.previous = void 0
        }
      }(HH, LH, BH)));
      return () => {
        for (const HH of LH) HH?.()
      }
    }
  },
  38012: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH,
      f: () => rH
    });
    const AH = {};

    function rH(HH, BH) {
      AH[HH] = BH
    }

    function SH(HH) {
      return AH[HH]
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);