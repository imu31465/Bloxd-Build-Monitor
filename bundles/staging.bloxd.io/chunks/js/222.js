export const id = 222;
export const ids = [222];
export const modules = {
  36901: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT,
      c: () => lT,
      g: () => MT
    });
    const lT = 1 / 2.2,
      MT = 2.2;
    Math.sqrt(5);
    let KT = .001
  },
  36937: (TT, kT, cT) => {
    function lT(TT) {
      return parseInt(TT.toString().replace(/\W/g, ""))
    }

    function MT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(TT - kT) <= cT
    }

    function KT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return TT < kT - lT || TT > cT + lT
    }

    function OT(TT, kT) {
      return TT === kT ? TT : Math.random() * (kT - TT) + TT
    }

    function yT(TT, kT, cT) {
      return TT + (kT - TT) * cT
    }

    function fT(TT, kT, cT) {
      let lT = hT(kT - TT, 360);
      return lT > 180 && (lT -= 360), TT + lT * CT(cT)
    }

    function xT(TT, kT, cT) {
      let lT;
      return lT = TT != kT ? CT((cT - TT) / (kT - TT)) : 0, lT
    }

    function IT(TT, kT, cT, lT, MT) {
      const KT = MT * MT,
        OT = MT * KT;
      return TT * (2 * OT - 3 * KT + 1) + cT * (-2 * OT + 3 * KT) + kT * (OT - 2 * KT + MT) + lT * (OT - KT)
    }

    function AT(TT, kT, cT, lT, MT) {
      const KT = MT * MT;
      return 6 * (KT - MT) * TT + (3 * KT - 4 * MT + 1) * kT + 6 * (-KT + MT) * cT + (3 * KT - 2 * MT) * lT
    }

    function CT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(cT, Math.max(kT, TT))
    }

    function jT(TT) {
      return TT -= 2 * Math.PI * Math.floor((TT + Math.PI) / (2 * Math.PI))
    }

    function vT(TT) {
      const kT = TT.toString(16);
      return TT <= 15 ? ("0" + kT).toUpperCase() : kT.toUpperCase()
    }

    function tT(TT) {
      if (Math.log2) return Math.floor(Math.log2(TT));
      if (TT < 0) return NaN;
      if (0 === TT) return -1 / 0;
      let kT = 0;
      if (TT < 1) {
        for (; TT < 1;) kT++, TT *= 2;
        kT = -kT
      } else if (TT > 1)
        for (; TT > 1;) kT++, TT = Math.floor(TT / 2);
      return kT
    }

    function hT(TT, kT) {
      return TT - Math.floor(TT / kT) * kT
    }

    function NT(TT, kT, cT) {
      return (TT - kT) / (cT - kT)
    }

    function QT(TT, kT, cT) {
      return TT * (cT - kT) + kT
    }

    function ST(TT, kT) {
      let cT = hT(kT - TT, 360);
      return cT > 180 && (cT -= 360), cT
    }

    function DT(TT, kT) {
      const cT = hT(TT, 2 * kT);
      return kT - Math.abs(cT - kT)
    }

    function aT(TT, kT, cT) {
      let lT = CT(cT);
      return lT = -2 * lT * lT * lT + 3 * lT * lT, kT * lT + TT * (1 - lT)
    }

    function FT(TT, kT, cT) {
      let lT;
      return lT = Math.abs(kT - TT) <= cT ? kT : TT + Math.sign(kT - TT) * cT, lT
    }

    function rT(TT, kT, cT) {
      const lT = ST(TT, kT);
      let MT;
      return MT = -cT < lT && lT < cT ? kT : FT(TT, kT = TT + lT, cT), MT
    }

    function PT(TT, kT, cT) {
      return (TT - kT) / (cT - kT)
    }

    function wT(TT, kT, cT) {
      return (cT - kT) * TT + kT
    }

    function mT(TT, kT) {
      const cT = TT % kT;
      return 0 === cT ? kT : mT(kT, cT)
    }
    cT.r(kT), cT.d(kT, {
      Clamp: () => CT,
      DeltaAngle: () => ST,
      Denormalize: () => QT,
      ExtractAsInt: () => lT,
      Hermite: () => IT,
      Hermite1stDerivative: () => AT,
      HighestCommonFactor: () => mT,
      ILog2: () => tT,
      InverseLerp: () => xT,
      Lerp: () => yT,
      LerpAngle: () => fT,
      MoveTowards: () => FT,
      MoveTowardsAngle: () => rT,
      Normalize: () => NT,
      NormalizeRadians: () => jT,
      OutsideRange: () => KT,
      PercentToRange: () => wT,
      PingPong: () => DT,
      RandomRange: () => OT,
      RangeToPercent: () => PT,
      Repeat: () => hT,
      SmoothStep: () => aT,
      ToHex: () => vT,
      WithinEpsilon: () => MT
    })
  },
  36885: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      Matrix: () => lT.d,
      Quaternion: () => lT.f,
      RegisterMathVector: () => lT.g,
      TmpVectors: () => lT.h,
      Vector2: () => lT.i,
      Fv: () => lT.m,
      Vector4: () => lT.o
    });
    var lT = cT(36892);
    (0, lT.g)()
  },
  36910: (TT, kT, cT) => {
    function lT(TT, kT) {
      const cT = [];
      for (let lT = 0; lT < TT; ++lT) cT.push(kT());
      return cT
    }

    function MT(TT, kT) {
      return lT(TT, kT)
    }
    cT.d(kT, {
      e: () => lT,
      f: () => MT,
      g: () => OT
    });
    const KT = ["push", "splice", "pop", "shift", "unshift"];

    function OT(TT, kT) {
      const cT = KT.map((cT => function(TT, kT, cT) {
        const lT = TT[kT];
        if ("function" !== typeof lT) return null;
        const MT = function() {
          const lT = TT.length,
            KT = MT.previous.apply(TT, arguments);
          return cT(kT, lT), KT
        };
        return lT.next = MT, MT.previous = lT, TT[kT] = MT, () => {
          const cT = MT.previous;
          if (!cT) return;
          const lT = MT.next;
          lT ? (cT.next = lT, lT.previous = cT) : (cT.next = void 0, TT[kT] = cT), MT.next = void 0, MT.previous = void 0
        }
      }(TT, cT, kT)));
      return () => {
        for (const TT of cT) TT?.()
      }
    }
  },
  36949: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      g: () => MT
    });
    const lT = {};

    function MT(TT, kT) {
      lT[TT] = kT
    }

    function KT(TT) {
      return lT[TT]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);