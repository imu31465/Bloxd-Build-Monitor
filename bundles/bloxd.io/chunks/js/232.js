export const id = 232;
export const ids = [232];
export const modules = {
  37196: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      d: () => WT,
      f: () => zT
    });
    const WT = 1 / 2.2,
      zT = 2.2;
    Math.sqrt(5);
    let MT = .001
  },
  37226: (TT, UT, mT) => {
    function WT(TT) {
      return parseInt(TT.toString().replace(/\W/g, ""))
    }

    function zT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(TT - UT) <= mT
    }

    function MT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return TT < UT - WT || TT > mT + WT
    }

    function gT(TT, UT) {
      return TT === UT ? TT : Math.random() * (UT - TT) + TT
    }

    function nT(TT, UT, mT) {
      return TT + (UT - TT) * mT
    }

    function HT(TT, UT, mT) {
      let WT = cT(UT - TT, 360);
      return WT > 180 && (WT -= 360), TT + WT * LT(mT)
    }

    function kT(TT, UT, mT) {
      let WT;
      return WT = TT != UT ? LT((mT - TT) / (UT - TT)) : 0, WT
    }

    function jT(TT, UT, mT, WT, zT) {
      const MT = zT * zT,
        gT = zT * MT;
      return TT * (2 * gT - 3 * MT + 1) + mT * (-2 * gT + 3 * MT) + UT * (gT - 2 * MT + zT) + WT * (gT - MT)
    }

    function lT(TT, UT, mT, WT, zT) {
      const MT = zT * zT;
      return 6 * (MT - zT) * TT + (3 * MT - 4 * zT + 1) * UT + 6 * (-MT + zT) * mT + (3 * MT - 2 * zT) * WT
    }

    function LT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(mT, Math.max(UT, TT))
    }

    function pT(TT) {
      return TT -= 2 * Math.PI * Math.floor((TT + Math.PI) / (2 * Math.PI))
    }

    function BT(TT) {
      const UT = TT.toString(16);
      return TT <= 15 ? ("0" + UT).toUpperCase() : UT.toUpperCase()
    }

    function ZT(TT) {
      if (Math.log2) return Math.floor(Math.log2(TT));
      if (TT < 0) return NaN;
      if (0 === TT) return -1 / 0;
      let UT = 0;
      if (TT < 1) {
        for (; TT < 1;) UT++, TT *= 2;
        UT = -UT
      } else if (TT > 1)
        for (; TT > 1;) UT++, TT = Math.floor(TT / 2);
      return UT
    }

    function cT(TT, UT) {
      return TT - Math.floor(TT / UT) * UT
    }

    function vT(TT, UT, mT) {
      return (TT - UT) / (mT - UT)
    }

    function fT(TT, UT, mT) {
      return TT * (mT - UT) + UT
    }

    function qT(TT, UT) {
      let mT = cT(UT - TT, 360);
      return mT > 180 && (mT -= 360), mT
    }

    function iT(TT, UT) {
      const mT = cT(TT, 2 * UT);
      return UT - Math.abs(mT - UT)
    }

    function bT(TT, UT, mT) {
      let WT = LT(mT);
      return WT = -2 * WT * WT * WT + 3 * WT * WT, UT * WT + TT * (1 - WT)
    }

    function OT(TT, UT, mT) {
      let WT;
      return WT = Math.abs(UT - TT) <= mT ? UT : TT + Math.sign(UT - TT) * mT, WT
    }

    function eT(TT, UT, mT) {
      const WT = qT(TT, UT);
      let zT;
      return zT = -mT < WT && WT < mT ? UT : OT(TT, UT = TT + WT, mT), zT
    }

    function YT(TT, UT, mT) {
      return (TT - UT) / (mT - UT)
    }

    function JT(TT, UT, mT) {
      return (mT - UT) * TT + UT
    }

    function xT(TT, UT) {
      const mT = TT % UT;
      return 0 === mT ? UT : xT(UT, mT)
    }
    mT.r(UT), mT.d(UT, {
      Clamp: () => LT,
      DeltaAngle: () => qT,
      Denormalize: () => fT,
      ExtractAsInt: () => WT,
      Hermite: () => jT,
      Hermite1stDerivative: () => lT,
      HighestCommonFactor: () => xT,
      ILog2: () => ZT,
      InverseLerp: () => kT,
      Lerp: () => nT,
      LerpAngle: () => HT,
      MoveTowards: () => OT,
      MoveTowardsAngle: () => eT,
      Normalize: () => vT,
      NormalizeRadians: () => pT,
      OutsideRange: () => MT,
      PercentToRange: () => JT,
      PingPong: () => iT,
      RandomRange: () => gT,
      RangeToPercent: () => YT,
      Repeat: () => cT,
      SmoothStep: () => bT,
      ToHex: () => BT,
      WithinEpsilon: () => zT
    })
  },
  37185: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      Matrix: () => WT.e,
      Quaternion: () => WT.f,
      RegisterMathVector: () => WT.j,
      TmpVectors: () => WT.l,
      Vector2: () => WT.o,
      JB: () => WT.p,
      Vector4: () => WT.t
    });
    var WT = mT(37188);
    (0, WT.j)()
  },
  37205: (TT, UT, mT) => {
    function WT(TT, UT) {
      const mT = [];
      for (let WT = 0; WT < TT; ++WT) mT.push(UT());
      return mT
    }

    function zT(TT, UT) {
      return WT(TT, UT)
    }
    mT.d(UT, {
      c: () => WT,
      d: () => zT,
      e: () => gT
    });
    const MT = ["push", "splice", "pop", "shift", "unshift"];

    function gT(TT, UT) {
      const mT = MT.map((mT => function(TT, UT, mT) {
        const WT = TT[UT];
        if ("function" !== typeof WT) return null;
        const zT = function() {
          const WT = TT.length,
            MT = zT.previous.apply(TT, arguments);
          return mT(UT, WT), MT
        };
        return WT.next = zT, zT.previous = WT, TT[UT] = zT, () => {
          const mT = zT.previous;
          if (!mT) return;
          const WT = zT.next;
          WT ? (mT.next = WT, WT.previous = mT) : (mT.next = void 0, TT[UT] = mT), zT.next = void 0, zT.previous = void 0
        }
      }(TT, mT, UT)));
      return () => {
        for (const TT of mT) TT?.()
      }
    }
  },
  37239: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT,
      h: () => zT
    });
    const WT = {};

    function zT(TT, UT) {
      WT[TT] = UT
    }

    function MT(TT) {
      return WT[TT]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);