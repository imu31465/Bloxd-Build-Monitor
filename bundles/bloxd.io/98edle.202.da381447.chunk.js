export const id = 202;
export const ids = [202];
export const modules = {
  35328: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR,
      g: () => wW,
      k: () => CW
    });
    const wW = 1 / 2.2,
      CW = 2.2;
    Math.sqrt(5);
    let zR = .001
  },
  35353: (WW, RW, MW) => {
    function wW(WW) {
      return parseInt(WW.toString().replace(/\W/g, ""))
    }

    function CW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(WW - RW) <= MW
    }

    function zR(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return WW < RW - wW || WW > MW + wW
    }

    function AW(WW, RW) {
      return WW === RW ? WW : Math.random() * (RW - WW) + WW
    }

    function bR(WW, RW, MW) {
      return WW + (RW - WW) * MW
    }

    function yR(WW, RW, MW) {
      let wW = YW(RW - WW, 360);
      return wW > 180 && (wW -= 360), WW + wW * tR(MW)
    }

    function NW(WW, RW, MW) {
      let wW;
      return wW = WW != RW ? tR((MW - WW) / (RW - WW)) : 0, wW
    }

    function eW(WW, RW, MW, wW, CW) {
      const zR = CW * CW,
        AW = CW * zR;
      return WW * (2 * AW - 3 * zR + 1) + MW * (-2 * AW + 3 * zR) + RW * (AW - 2 * zR + CW) + wW * (AW - zR)
    }

    function BW(WW, RW, MW, wW, CW) {
      const zR = CW * CW;
      return 6 * (zR - CW) * WW + (3 * zR - 4 * CW + 1) * RW + 6 * (-zR + CW) * MW + (3 * zR - 2 * CW) * wW
    }

    function tR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(MW, Math.max(RW, WW))
    }

    function TW(WW) {
      return WW -= 2 * Math.PI * Math.floor((WW + Math.PI) / (2 * Math.PI))
    }

    function gR(WW) {
      const RW = WW.toString(16);
      return WW <= 15 ? ("0" + RW).toUpperCase() : RW.toUpperCase()
    }

    function iR(WW) {
      if (Math.log2) return Math.floor(Math.log2(WW));
      if (WW < 0) return NaN;
      if (0 === WW) return -1 / 0;
      let RW = 0;
      if (WW < 1) {
        for (; WW < 1;) RW++, WW *= 2;
        RW = -RW
      } else if (WW > 1)
        for (; WW > 1;) RW++, WW = Math.floor(WW / 2);
      return RW
    }

    function YW(WW, RW) {
      return WW - Math.floor(WW / RW) * RW
    }

    function JW(WW, RW, MW) {
      return (WW - RW) / (MW - RW)
    }

    function PW(WW, RW, MW) {
      return WW * (MW - RW) + RW
    }

    function IW(WW, RW) {
      let MW = YW(RW - WW, 360);
      return MW > 180 && (MW -= 360), MW
    }

    function oW(WW, RW) {
      const MW = YW(WW, 2 * RW);
      return RW - Math.abs(MW - RW)
    }

    function lW(WW, RW, MW) {
      let wW = tR(MW);
      return wW = -2 * wW * wW * wW + 3 * wW * wW, RW * wW + WW * (1 - wW)
    }

    function FW(WW, RW, MW) {
      let wW;
      return wW = Math.abs(RW - WW) <= MW ? RW : WW + Math.sign(RW - WW) * MW, wW
    }

    function fW(WW, RW, MW) {
      const wW = IW(WW, RW);
      let CW;
      return CW = -MW < wW && wW < MW ? RW : FW(WW, RW = WW + wW, MW), CW
    }

    function QW(WW, RW, MW) {
      return (WW - RW) / (MW - RW)
    }

    function rR(WW, RW, MW) {
      return (MW - RW) * WW + RW
    }

    function cR(WW, RW) {
      const MW = WW % RW;
      return 0 === MW ? RW : cR(RW, MW)
    }
    MW.r(RW), MW.d(RW, {
      Clamp: () => tR,
      DeltaAngle: () => IW,
      Denormalize: () => PW,
      ExtractAsInt: () => wW,
      Hermite: () => eW,
      Hermite1stDerivative: () => BW,
      HighestCommonFactor: () => cR,
      ILog2: () => iR,
      InverseLerp: () => NW,
      Lerp: () => bR,
      LerpAngle: () => yR,
      MoveTowards: () => FW,
      MoveTowardsAngle: () => fW,
      Normalize: () => JW,
      NormalizeRadians: () => TW,
      OutsideRange: () => zR,
      PercentToRange: () => rR,
      PingPong: () => oW,
      RandomRange: () => AW,
      RangeToPercent: () => QW,
      Repeat: () => YW,
      SmoothStep: () => lW,
      ToHex: () => gR,
      WithinEpsilon: () => CW
    })
  },
  35317: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      Matrix: () => wW.d,
      Quaternion: () => wW.e,
      RegisterMathVector: () => wW.h,
      TmpVectors: () => wW.k,
      Vector2: () => wW.n,
      vC: () => wW.q,
      Vector4: () => wW.s
    });
    var wW = MW(35324);
    (0, wW.h)()
  },
  35330: (WW, RW, MW) => {
    function wW(WW, RW) {
      const MW = [];
      for (let wW = 0; wW < WW; ++wW) MW.push(RW());
      return MW
    }

    function CW(WW, RW) {
      return wW(WW, RW)
    }
    MW.d(RW, {
      b: () => wW,
      d: () => CW,
      g: () => AW
    });
    const zR = ["push", "splice", "pop", "shift", "unshift"];

    function AW(WW, RW) {
      const MW = zR.map((MW => function(WW, RW, MW) {
        const wW = WW[RW];
        if ("function" !== typeof wW) return null;
        const CW = function() {
          const wW = WW.length,
            zR = CW.previous.apply(WW, arguments);
          return MW(RW, wW), zR
        };
        return wW.next = CW, CW.previous = wW, WW[RW] = CW, () => {
          const MW = CW.previous;
          if (!MW) return;
          const wW = CW.next;
          wW ? (MW.next = wW, wW.previous = MW) : (MW.next = void 0, WW[RW] = MW), CW.next = void 0, CW.previous = void 0
        }
      }(WW, MW, RW)));
      return () => {
        for (const WW of MW) WW?.()
      }
    }
  },
  35361: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR,
      e: () => CW
    });
    const wW = {};

    function CW(WW, RW) {
      wW[WW] = RW
    }

    function zR(WW) {
      return wW[WW]
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);