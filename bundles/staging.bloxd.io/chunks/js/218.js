export const id = 218;
export const ids = [218];
export const modules = {
  36533: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      e: () => FY,
      g: () => AY
    });
    const FY = 1 / 2.2,
      AY = 2.2;
    Math.sqrt(5);
    let IY = .001
  },
  36559: (YY, rY, DY) => {
    function FY(YY) {
      return parseInt(YY.toString().replace(/\W/g, ""))
    }

    function AY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(YY - rY) <= DY
    }

    function IY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return YY < rY - FY || YY > DY + FY
    }

    function RY(YY, rY) {
      return YY === rY ? YY : Math.random() * (rY - YY) + YY
    }

    function OY(YY, rY, DY) {
      return YY + (rY - YY) * DY
    }

    function gY(YY, rY, DY) {
      let FY = oY(rY - YY, 360);
      return FY > 180 && (FY -= 360), YY + FY * sY(DY)
    }

    function aY(YY, rY, DY) {
      let FY;
      return FY = YY != rY ? sY((DY - YY) / (rY - YY)) : 0, FY
    }

    function vY(YY, rY, DY, FY, AY) {
      const IY = AY * AY,
        RY = AY * IY;
      return YY * (2 * RY - 3 * IY + 1) + DY * (-2 * RY + 3 * IY) + rY * (RY - 2 * IY + AY) + FY * (RY - IY)
    }

    function uY(YY, rY, DY, FY, AY) {
      const IY = AY * AY;
      return 6 * (IY - AY) * YY + (3 * IY - 4 * AY + 1) * rY + 6 * (-IY + AY) * DY + (3 * IY - 2 * AY) * FY
    }

    function sY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(DY, Math.max(rY, YY))
    }

    function iY(YY) {
      return YY -= 2 * Math.PI * Math.floor((YY + Math.PI) / (2 * Math.PI))
    }

    function yY(YY) {
      const rY = YY.toString(16);
      return YY <= 15 ? ("0" + rY).toUpperCase() : rY.toUpperCase()
    }

    function QY(YY) {
      if (Math.log2) return Math.floor(Math.log2(YY));
      if (YY < 0) return NaN;
      if (0 === YY) return -1 / 0;
      let rY = 0;
      if (YY < 1) {
        for (; YY < 1;) rY++, YY *= 2;
        rY = -rY
      } else if (YY > 1)
        for (; YY > 1;) rY++, YY = Math.floor(YY / 2);
      return rY
    }

    function oY(YY, rY) {
      return YY - Math.floor(YY / rY) * rY
    }

    function WY(YY, rY, DY) {
      return (YY - rY) / (DY - rY)
    }

    function EY(YY, rY, DY) {
      return YY * (DY - rY) + rY
    }

    function mY(YY, rY) {
      let DY = oY(rY - YY, 360);
      return DY > 180 && (DY -= 360), DY
    }

    function VY(YY, rY) {
      const DY = oY(YY, 2 * rY);
      return rY - Math.abs(DY - rY)
    }

    function SY(YY, rY, DY) {
      let FY = sY(DY);
      return FY = -2 * FY * FY * FY + 3 * FY * FY, rY * FY + YY * (1 - FY)
    }

    function lY(YY, rY, DY) {
      let FY;
      return FY = Math.abs(rY - YY) <= DY ? rY : YY + Math.sign(rY - YY) * DY, FY
    }

    function TY(YY, rY, DY) {
      const FY = mY(YY, rY);
      let AY;
      return AY = -DY < FY && FY < DY ? rY : lY(YY, rY = YY + FY, DY), AY
    }

    function eY(YY, rY, DY) {
      return (YY - rY) / (DY - rY)
    }

    function NY(YY, rY, DY) {
      return (DY - rY) * YY + rY
    }

    function BY(YY, rY) {
      const DY = YY % rY;
      return 0 === DY ? rY : BY(rY, DY)
    }
    DY.r(rY), DY.d(rY, {
      Clamp: () => sY,
      DeltaAngle: () => mY,
      Denormalize: () => EY,
      ExtractAsInt: () => FY,
      Hermite: () => vY,
      Hermite1stDerivative: () => uY,
      HighestCommonFactor: () => BY,
      ILog2: () => QY,
      InverseLerp: () => aY,
      Lerp: () => OY,
      LerpAngle: () => gY,
      MoveTowards: () => lY,
      MoveTowardsAngle: () => TY,
      Normalize: () => WY,
      NormalizeRadians: () => iY,
      OutsideRange: () => IY,
      PercentToRange: () => NY,
      PingPong: () => VY,
      RandomRange: () => RY,
      RangeToPercent: () => eY,
      Repeat: () => oY,
      SmoothStep: () => SY,
      ToHex: () => yY,
      WithinEpsilon: () => AY
    })
  },
  36518: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      Matrix: () => FY.e,
      Quaternion: () => FY.g,
      RegisterMathVector: () => FY.j,
      TmpVectors: () => FY.n,
      Vector2: () => FY.q,
      xy: () => FY.r,
      Vector4: () => FY.v
    });
    var FY = DY(36524);
    (0, FY.j)()
  },
  36539: (YY, rY, DY) => {
    function FY(YY, rY) {
      const DY = [];
      for (let FY = 0; FY < YY; ++FY) DY.push(rY());
      return DY
    }

    function AY(YY, rY) {
      return FY(YY, rY)
    }
    DY.d(rY, {
      c: () => FY,
      g: () => AY,
      j: () => RY
    });
    const IY = ["push", "splice", "pop", "shift", "unshift"];

    function RY(YY, rY) {
      const DY = IY.map((DY => function(YY, rY, DY) {
        const FY = YY[rY];
        if ("function" !== typeof FY) return null;
        const AY = function() {
          const FY = YY.length,
            IY = AY.previous.apply(YY, arguments);
          return DY(rY, FY), IY
        };
        return FY.next = AY, AY.previous = FY, YY[rY] = AY, () => {
          const DY = AY.previous;
          if (!DY) return;
          const FY = AY.next;
          FY ? (DY.next = FY, FY.previous = DY) : (DY.next = void 0, YY[rY] = DY), AY.next = void 0, AY.previous = void 0
        }
      }(YY, DY, rY)));
      return () => {
        for (const YY of DY) YY?.()
      }
    }
  },
  36569: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY,
      i: () => AY
    });
    const FY = {};

    function AY(YY, rY) {
      FY[YY] = rY
    }

    function IY(YY) {
      return FY[YY]
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);