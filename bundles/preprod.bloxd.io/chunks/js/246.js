export const id = 246;
export const ids = [246];
export const modules = {
  37825: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      d: () => cU,
      h: () => yU
    });
    const cU = 1 / 2.2,
      yU = 2.2;
    Math.sqrt(5);
    let QU = .001
  },
  37855: (UU, XU, zU) => {
    function cU(UU) {
      return parseInt(UU.toString().replace(/\W/g, ""))
    }

    function yU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(UU - XU) <= zU
    }

    function QU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return UU < XU - cU || UU > zU + cU
    }

    function AU(UU, XU) {
      return UU === XU ? UU : Math.random() * (XU - UU) + UU
    }

    function FU(UU, XU, zU) {
      return UU + (XU - UU) * zU
    }

    function oU(UU, XU, zU) {
      let cU = tU(XU - UU, 360);
      return cU > 180 && (cU -= 360), UU + cU * NU(zU)
    }

    function DU(UU, XU, zU) {
      let cU;
      return cU = UU != XU ? NU((zU - UU) / (XU - UU)) : 0, cU
    }

    function EU(UU, XU, zU, cU, yU) {
      const QU = yU * yU,
        AU = yU * QU;
      return UU * (2 * AU - 3 * QU + 1) + zU * (-2 * AU + 3 * QU) + XU * (AU - 2 * QU + yU) + cU * (AU - QU)
    }

    function YU(UU, XU, zU, cU, yU) {
      const QU = yU * yU;
      return 6 * (QU - yU) * UU + (3 * QU - 4 * yU + 1) * XU + 6 * (-QU + yU) * zU + (3 * QU - 2 * yU) * cU
    }

    function NU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(zU, Math.max(XU, UU))
    }

    function IU(UU) {
      return UU -= 2 * Math.PI * Math.floor((UU + Math.PI) / (2 * Math.PI))
    }

    function pU(UU) {
      const XU = UU.toString(16);
      return UU <= 15 ? ("0" + XU).toUpperCase() : XU.toUpperCase()
    }

    function aU(UU) {
      if (Math.log2) return Math.floor(Math.log2(UU));
      if (UU < 0) return NaN;
      if (0 === UU) return -1 / 0;
      let XU = 0;
      if (UU < 1) {
        for (; UU < 1;) XU++, UU *= 2;
        XU = -XU
      } else if (UU > 1)
        for (; UU > 1;) XU++, UU = Math.floor(UU / 2);
      return XU
    }

    function tU(UU, XU) {
      return UU - Math.floor(UU / XU) * XU
    }

    function gU(UU, XU, zU) {
      return (UU - XU) / (zU - XU)
    }

    function kU(UU, XU, zU) {
      return UU * (zU - XU) + XU
    }

    function GU(UU, XU) {
      let zU = tU(XU - UU, 360);
      return zU > 180 && (zU -= 360), zU
    }

    function BU(UU, XU) {
      const zU = tU(UU, 2 * XU);
      return XU - Math.abs(zU - XU)
    }

    function ZU(UU, XU, zU) {
      let cU = NU(zU);
      return cU = -2 * cU * cU * cU + 3 * cU * cU, XU * cU + UU * (1 - cU)
    }

    function RU(UU, XU, zU) {
      let cU;
      return cU = Math.abs(XU - UU) <= zU ? XU : UU + Math.sign(XU - UU) * zU, cU
    }

    function PU(UU, XU, zU) {
      const cU = GU(UU, XU);
      let yU;
      return yU = -zU < cU && cU < zU ? XU : RU(UU, XU = UU + cU, zU), yU
    }

    function WU(UU, XU, zU) {
      return (UU - XU) / (zU - XU)
    }

    function dU(UU, XU, zU) {
      return (zU - XU) * UU + XU
    }

    function LU(UU, XU) {
      const zU = UU % XU;
      return 0 === zU ? XU : LU(XU, zU)
    }
    zU.r(XU), zU.d(XU, {
      Clamp: () => NU,
      DeltaAngle: () => GU,
      Denormalize: () => kU,
      ExtractAsInt: () => cU,
      Hermite: () => EU,
      Hermite1stDerivative: () => YU,
      HighestCommonFactor: () => LU,
      ILog2: () => aU,
      InverseLerp: () => DU,
      Lerp: () => FU,
      LerpAngle: () => oU,
      MoveTowards: () => RU,
      MoveTowardsAngle: () => PU,
      Normalize: () => gU,
      NormalizeRadians: () => IU,
      OutsideRange: () => QU,
      PercentToRange: () => dU,
      PingPong: () => BU,
      RandomRange: () => AU,
      RangeToPercent: () => WU,
      Repeat: () => tU,
      SmoothStep: () => ZU,
      ToHex: () => pU,
      WithinEpsilon: () => yU
    })
  },
  37814: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      Matrix: () => cU.e,
      Quaternion: () => cU.f,
      RegisterMathVector: () => cU.h,
      TmpVectors: () => cU.l,
      Vector2: () => cU.m,
      Sp: () => cU.q,
      Vector4: () => cU.t
    });
    var cU = zU(37819);
    (0, cU.h)()
  },
  37827: (UU, XU, zU) => {
    function cU(UU, XU) {
      const zU = [];
      for (let cU = 0; cU < UU; ++cU) zU.push(XU());
      return zU
    }

    function yU(UU, XU) {
      return cU(UU, XU)
    }
    zU.d(XU, {
      d: () => cU,
      f: () => yU,
      i: () => AU
    });
    const QU = ["push", "splice", "pop", "shift", "unshift"];

    function AU(UU, XU) {
      const zU = QU.map((zU => function(UU, XU, zU) {
        const cU = UU[XU];
        if ("function" !== typeof cU) return null;
        const yU = function() {
          const cU = UU.length,
            QU = yU.previous.apply(UU, arguments);
          return zU(XU, cU), QU
        };
        return cU.next = yU, yU.previous = cU, UU[XU] = yU, () => {
          const zU = yU.previous;
          if (!zU) return;
          const cU = yU.next;
          cU ? (zU.next = cU, cU.previous = zU) : (zU.next = void 0, UU[XU] = zU), yU.next = void 0, yU.previous = void 0
        }
      }(UU, zU, XU)));
      return () => {
        for (const UU of zU) UU?.()
      }
    }
  },
  37863: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      h: () => yU
    });
    const cU = {};

    function yU(UU, XU) {
      cU[UU] = XU
    }

    function QU(UU) {
      return cU[UU]
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);