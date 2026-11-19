export const id = 218;
export const ids = [218];
export const modules = {
  36125: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      h: () => iT,
      l: () => zT
    });
    const iT = 1 / 2.2,
      zT = 2.2;
    Math.sqrt(5);
    let kT = .001
  },
  36156: (TT, oT, IT) => {
    function iT(TT) {
      return parseInt(TT.toString().replace(/\W/g, ""))
    }

    function zT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(TT - oT) <= IT
    }

    function kT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return TT < oT - iT || TT > IT + iT
    }

    function WT(TT, oT) {
      return TT === oT ? TT : Math.random() * (oT - TT) + TT
    }

    function XT(TT, oT, IT) {
      return TT + (oT - TT) * IT
    }

    function BT(TT, oT, IT) {
      let iT = MT(oT - TT, 360);
      return iT > 180 && (iT -= 360), TT + iT * LT(IT)
    }

    function FT(TT, oT, IT) {
      let iT;
      return iT = TT != oT ? LT((IT - TT) / (oT - TT)) : 0, iT
    }

    function ST(TT, oT, IT, iT, zT) {
      const kT = zT * zT,
        WT = zT * kT;
      return TT * (2 * WT - 3 * kT + 1) + IT * (-2 * WT + 3 * kT) + oT * (WT - 2 * kT + zT) + iT * (WT - kT)
    }

    function DT(TT, oT, IT, iT, zT) {
      const kT = zT * zT;
      return 6 * (kT - zT) * TT + (3 * kT - 4 * zT + 1) * oT + 6 * (-kT + zT) * IT + (3 * kT - 2 * zT) * iT
    }

    function LT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(IT, Math.max(oT, TT))
    }

    function xT(TT) {
      return TT -= 2 * Math.PI * Math.floor((TT + Math.PI) / (2 * Math.PI))
    }

    function cT(TT) {
      const oT = TT.toString(16);
      return TT <= 15 ? ("0" + oT).toUpperCase() : oT.toUpperCase()
    }

    function KT(TT) {
      if (Math.log2) return Math.floor(Math.log2(TT));
      if (TT < 0) return NaN;
      if (0 === TT) return -1 / 0;
      let oT = 0;
      if (TT < 1) {
        for (; TT < 1;) oT++, TT *= 2;
        oT = -oT
      } else if (TT > 1)
        for (; TT > 1;) oT++, TT = Math.floor(TT / 2);
      return oT
    }

    function MT(TT, oT) {
      return TT - Math.floor(TT / oT) * oT
    }

    function rT(TT, oT, IT) {
      return (TT - oT) / (IT - oT)
    }

    function AT(TT, oT, IT) {
      return TT * (IT - oT) + oT
    }

    function gT(TT, oT) {
      let IT = MT(oT - TT, 360);
      return IT > 180 && (IT -= 360), IT
    }

    function hT(TT, oT) {
      const IT = MT(TT, 2 * oT);
      return oT - Math.abs(IT - oT)
    }

    function wT(TT, oT, IT) {
      let iT = LT(IT);
      return iT = -2 * iT * iT * iT + 3 * iT * iT, oT * iT + TT * (1 - iT)
    }

    function mT(TT, oT, IT) {
      let iT;
      return iT = Math.abs(oT - TT) <= IT ? oT : TT + Math.sign(oT - TT) * IT, iT
    }

    function eT(TT, oT, IT) {
      const iT = gT(TT, oT);
      let zT;
      return zT = -IT < iT && iT < IT ? oT : mT(TT, oT = TT + iT, IT), zT
    }

    function RT(TT, oT, IT) {
      return (TT - oT) / (IT - oT)
    }

    function uT(TT, oT, IT) {
      return (IT - oT) * TT + oT
    }

    function vT(TT, oT) {
      const IT = TT % oT;
      return 0 === IT ? oT : vT(oT, IT)
    }
    IT.r(oT), IT.d(oT, {
      Clamp: () => LT,
      DeltaAngle: () => gT,
      Denormalize: () => AT,
      ExtractAsInt: () => iT,
      Hermite: () => ST,
      Hermite1stDerivative: () => DT,
      HighestCommonFactor: () => vT,
      ILog2: () => KT,
      InverseLerp: () => FT,
      Lerp: () => XT,
      LerpAngle: () => BT,
      MoveTowards: () => mT,
      MoveTowardsAngle: () => eT,
      Normalize: () => rT,
      NormalizeRadians: () => xT,
      OutsideRange: () => kT,
      PercentToRange: () => uT,
      PingPong: () => hT,
      RandomRange: () => WT,
      RangeToPercent: () => RT,
      Repeat: () => MT,
      SmoothStep: () => wT,
      ToHex: () => cT,
      WithinEpsilon: () => zT
    })
  },
  36114: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      Matrix: () => iT.b,
      Quaternion: () => iT.c,
      RegisterMathVector: () => iT.g,
      TmpVectors: () => iT.i,
      Vector2: () => iT.j,
      sc: () => iT.m,
      Vector4: () => iT.n
    });
    var iT = IT(36118);
    (0, iT.g)()
  },
  36134: (TT, oT, IT) => {
    function iT(TT, oT) {
      const IT = [];
      for (let iT = 0; iT < TT; ++iT) IT.push(oT());
      return IT
    }

    function zT(TT, oT) {
      return iT(TT, oT)
    }
    IT.d(oT, {
      d: () => iT,
      g: () => zT,
      j: () => WT
    });
    const kT = ["push", "splice", "pop", "shift", "unshift"];

    function WT(TT, oT) {
      const IT = kT.map((IT => function(TT, oT, IT) {
        const iT = TT[oT];
        if ("function" !== typeof iT) return null;
        const zT = function() {
          const iT = TT.length,
            kT = zT.previous.apply(TT, arguments);
          return IT(oT, iT), kT
        };
        return iT.next = zT, zT.previous = iT, TT[oT] = zT, () => {
          const IT = zT.previous;
          if (!IT) return;
          const iT = zT.next;
          iT ? (IT.next = iT, iT.previous = IT) : (IT.next = void 0, TT[oT] = IT), zT.next = void 0, zT.previous = void 0
        }
      }(TT, IT, oT)));
      return () => {
        for (const TT of IT) TT?.()
      }
    }
  },
  36166: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      h: () => zT
    });
    const iT = {};

    function zT(TT, oT) {
      iT[TT] = oT
    }

    function kT(TT) {
      return iT[TT]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);