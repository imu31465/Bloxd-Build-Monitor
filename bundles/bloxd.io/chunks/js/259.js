export const id = 259;
export const ids = [259];
export const modules = {
  38249: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      h: () => mW,
      i: () => EW
    });
    const mW = 1 / 2.2,
      EW = 2.2;
    Math.sqrt(5);
    let NW = .001
  },
  38285: (WW, iW, OW) => {
    function mW(WW) {
      return parseInt(WW.toString().replace(/\W/g, ""))
    }

    function EW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(WW - iW) <= OW
    }

    function NW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return WW < iW - mW || WW > OW + mW
    }

    function PW(WW, iW) {
      return WW === iW ? WW : Math.random() * (iW - WW) + WW
    }

    function LW(WW, iW, OW) {
      return WW + (iW - WW) * OW
    }

    function cW(WW, iW, OW) {
      let mW = jW(iW - WW, 360);
      return mW > 180 && (mW -= 360), WW + mW * xW(OW)
    }

    function wW(WW, iW, OW) {
      let mW;
      return mW = WW != iW ? xW((OW - WW) / (iW - WW)) : 0, mW
    }

    function tW(WW, iW, OW, mW, EW) {
      const NW = EW * EW,
        PW = EW * NW;
      return WW * (2 * PW - 3 * NW + 1) + OW * (-2 * PW + 3 * NW) + iW * (PW - 2 * NW + EW) + mW * (PW - NW)
    }

    function ZW(WW, iW, OW, mW, EW) {
      const NW = EW * EW;
      return 6 * (NW - EW) * WW + (3 * NW - 4 * EW + 1) * iW + 6 * (-NW + EW) * OW + (3 * NW - 2 * EW) * mW
    }

    function xW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(OW, Math.max(iW, WW))
    }

    function lW(WW) {
      return WW -= 2 * Math.PI * Math.floor((WW + Math.PI) / (2 * Math.PI))
    }

    function AW(WW) {
      const iW = WW.toString(16);
      return WW <= 15 ? ("0" + iW).toUpperCase() : iW.toUpperCase()
    }

    function bW(WW) {
      if (Math.log2) return Math.floor(Math.log2(WW));
      if (WW < 0) return NaN;
      if (0 === WW) return -1 / 0;
      let iW = 0;
      if (WW < 1) {
        for (; WW < 1;) iW++, WW *= 2;
        iW = -iW
      } else if (WW > 1)
        for (; WW > 1;) iW++, WW = Math.floor(WW / 2);
      return iW
    }

    function jW(WW, iW) {
      return WW - Math.floor(WW / iW) * iW
    }

    function UW(WW, iW, OW) {
      return (WW - iW) / (OW - iW)
    }

    function kW(WW, iW, OW) {
      return WW * (OW - iW) + iW
    }

    function sW(WW, iW) {
      let OW = jW(iW - WW, 360);
      return OW > 180 && (OW -= 360), OW
    }

    function MW(WW, iW) {
      const OW = jW(WW, 2 * iW);
      return iW - Math.abs(OW - iW)
    }

    function KW(WW, iW, OW) {
      let mW = xW(OW);
      return mW = -2 * mW * mW * mW + 3 * mW * mW, iW * mW + WW * (1 - mW)
    }

    function SW(WW, iW, OW) {
      let mW;
      return mW = Math.abs(iW - WW) <= OW ? iW : WW + Math.sign(iW - WW) * OW, mW
    }

    function YW(WW, iW, OW) {
      const mW = sW(WW, iW);
      let EW;
      return EW = -OW < mW && mW < OW ? iW : SW(WW, iW = WW + mW, OW), EW
    }

    function yW(WW, iW, OW) {
      return (WW - iW) / (OW - iW)
    }

    function TW(WW, iW, OW) {
      return (OW - iW) * WW + iW
    }

    function JW(WW, iW) {
      const OW = WW % iW;
      return 0 === OW ? iW : JW(iW, OW)
    }
    OW.r(iW), OW.d(iW, {
      Clamp: () => xW,
      DeltaAngle: () => sW,
      Denormalize: () => kW,
      ExtractAsInt: () => mW,
      Hermite: () => tW,
      Hermite1stDerivative: () => ZW,
      HighestCommonFactor: () => JW,
      ILog2: () => bW,
      InverseLerp: () => wW,
      Lerp: () => LW,
      LerpAngle: () => cW,
      MoveTowards: () => SW,
      MoveTowardsAngle: () => YW,
      Normalize: () => UW,
      NormalizeRadians: () => lW,
      OutsideRange: () => NW,
      PercentToRange: () => TW,
      PingPong: () => MW,
      RandomRange: () => PW,
      RangeToPercent: () => yW,
      Repeat: () => jW,
      SmoothStep: () => KW,
      ToHex: () => AW,
      WithinEpsilon: () => EW
    })
  },
  38235: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      Matrix: () => mW.d,
      Quaternion: () => mW.g,
      RegisterMathVector: () => mW.j,
      TmpVectors: () => mW.l,
      Vector2: () => mW.m,
      fA: () => mW.q,
      Vector4: () => mW.r
    });
    var mW = OW(38241);
    (0, mW.j)()
  },
  38253: (WW, iW, OW) => {
    function mW(WW, iW) {
      const OW = [];
      for (let mW = 0; mW < WW; ++mW) OW.push(iW());
      return OW
    }

    function EW(WW, iW) {
      return mW(WW, iW)
    }
    OW.d(iW, {
      c: () => mW,
      f: () => EW,
      j: () => PW
    });
    const NW = ["push", "splice", "pop", "shift", "unshift"];

    function PW(WW, iW) {
      const OW = NW.map((OW => function(WW, iW, OW) {
        const mW = WW[iW];
        if ("function" !== typeof mW) return null;
        const EW = function() {
          const mW = WW.length,
            NW = EW.previous.apply(WW, arguments);
          return OW(iW, mW), NW
        };
        return mW.next = EW, EW.previous = mW, WW[iW] = EW, () => {
          const OW = EW.previous;
          if (!OW) return;
          const mW = EW.next;
          mW ? (OW.next = mW, mW.previous = OW) : (OW.next = void 0, WW[iW] = OW), EW.next = void 0, EW.previous = void 0
        }
      }(WW, OW, iW)));
      return () => {
        for (const WW of OW) WW?.()
      }
    }
  },
  38299: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      h: () => EW
    });
    const mW = {};

    function EW(WW, iW) {
      mW[WW] = iW
    }

    function NW(WW) {
      return mW[WW]
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);