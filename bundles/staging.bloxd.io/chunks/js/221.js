export const id = 221;
export const ids = [221];
export const modules = {
  36602: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      h: () => tU,
      k: () => pU
    });
    const tU = 1 / 2.2,
      pU = 2.2;
    Math.sqrt(5);
    let EU = .001
  },
  36626: (UU, RU, gU) => {
    function tU(UU) {
      return parseInt(UU.toString().replace(/\W/g, ""))
    }

    function pU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(UU - RU) <= gU
    }

    function EU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return UU < RU - tU || UU > gU + tU
    }

    function PU(UU, RU) {
      return UU === RU ? UU : Math.random() * (RU - UU) + UU
    }

    function TU(UU, RU, gU) {
      return UU + (RU - UU) * gU
    }

    function qU(UU, RU, gU) {
      let tU = QU(RU - UU, 360);
      return tU > 180 && (tU -= 360), UU + tU * jU(gU)
    }

    function KU(UU, RU, gU) {
      let tU;
      return tU = UU != RU ? jU((gU - UU) / (RU - UU)) : 0, tU
    }

    function cU(UU, RU, gU, tU, pU) {
      const EU = pU * pU,
        PU = pU * EU;
      return UU * (2 * PU - 3 * EU + 1) + gU * (-2 * PU + 3 * EU) + RU * (PU - 2 * EU + pU) + tU * (PU - EU)
    }

    function GU(UU, RU, gU, tU, pU) {
      const EU = pU * pU;
      return 6 * (EU - pU) * UU + (3 * EU - 4 * pU + 1) * RU + 6 * (-EU + pU) * gU + (3 * EU - 2 * pU) * tU
    }

    function jU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(gU, Math.max(RU, UU))
    }

    function uU(UU) {
      return UU -= 2 * Math.PI * Math.floor((UU + Math.PI) / (2 * Math.PI))
    }

    function CU(UU) {
      const RU = UU.toString(16);
      return UU <= 15 ? ("0" + RU).toUpperCase() : RU.toUpperCase()
    }

    function hU(UU) {
      if (Math.log2) return Math.floor(Math.log2(UU));
      if (UU < 0) return NaN;
      if (0 === UU) return -1 / 0;
      let RU = 0;
      if (UU < 1) {
        for (; UU < 1;) RU++, UU *= 2;
        RU = -RU
      } else if (UU > 1)
        for (; UU > 1;) RU++, UU = Math.floor(UU / 2);
      return RU
    }

    function QU(UU, RU) {
      return UU - Math.floor(UU / RU) * RU
    }

    function eU(UU, RU, gU) {
      return (UU - RU) / (gU - RU)
    }

    function WU(UU, RU, gU) {
      return UU * (gU - RU) + RU
    }

    function fU(UU, RU) {
      let gU = QU(RU - UU, 360);
      return gU > 180 && (gU -= 360), gU
    }

    function xU(UU, RU) {
      const gU = QU(UU, 2 * RU);
      return RU - Math.abs(gU - RU)
    }

    function mU(UU, RU, gU) {
      let tU = jU(gU);
      return tU = -2 * tU * tU * tU + 3 * tU * tU, RU * tU + UU * (1 - tU)
    }

    function IU(UU, RU, gU) {
      let tU;
      return tU = Math.abs(RU - UU) <= gU ? RU : UU + Math.sign(RU - UU) * gU, tU
    }

    function JU(UU, RU, gU) {
      const tU = fU(UU, RU);
      let pU;
      return pU = -gU < tU && tU < gU ? RU : IU(UU, RU = UU + tU, gU), pU
    }

    function wU(UU, RU, gU) {
      return (UU - RU) / (gU - RU)
    }

    function nU(UU, RU, gU) {
      return (gU - RU) * UU + RU
    }

    function bU(UU, RU) {
      const gU = UU % RU;
      return 0 === gU ? RU : bU(RU, gU)
    }
    gU.r(RU), gU.d(RU, {
      Clamp: () => jU,
      DeltaAngle: () => fU,
      Denormalize: () => WU,
      ExtractAsInt: () => tU,
      Hermite: () => cU,
      Hermite1stDerivative: () => GU,
      HighestCommonFactor: () => bU,
      ILog2: () => hU,
      InverseLerp: () => KU,
      Lerp: () => TU,
      LerpAngle: () => qU,
      MoveTowards: () => IU,
      MoveTowardsAngle: () => JU,
      Normalize: () => eU,
      NormalizeRadians: () => uU,
      OutsideRange: () => EU,
      PercentToRange: () => nU,
      PingPong: () => xU,
      RandomRange: () => PU,
      RangeToPercent: () => wU,
      Repeat: () => QU,
      SmoothStep: () => mU,
      ToHex: () => CU,
      WithinEpsilon: () => pU
    })
  },
  36593: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      Matrix: () => tU.c,
      Quaternion: () => tU.d,
      RegisterMathVector: () => tU.g,
      TmpVectors: () => tU.h,
      Vector2: () => tU.l,
      xC: () => tU.n,
      Vector4: () => tU.q
    });
    var tU = gU(36600);
    (0, tU.g)()
  },
  36610: (UU, RU, gU) => {
    function tU(UU, RU) {
      const gU = [];
      for (let tU = 0; tU < UU; ++tU) gU.push(RU());
      return gU
    }

    function pU(UU, RU) {
      return tU(UU, RU)
    }
    gU.d(RU, {
      e: () => tU,
      f: () => pU,
      h: () => PU
    });
    const EU = ["push", "splice", "pop", "shift", "unshift"];

    function PU(UU, RU) {
      const gU = EU.map((gU => function(UU, RU, gU) {
        const tU = UU[RU];
        if ("function" !== typeof tU) return null;
        const pU = function() {
          const tU = UU.length,
            EU = pU.previous.apply(UU, arguments);
          return gU(RU, tU), EU
        };
        return tU.next = pU, pU.previous = tU, UU[RU] = pU, () => {
          const gU = pU.previous;
          if (!gU) return;
          const tU = pU.next;
          tU ? (gU.next = tU, tU.previous = gU) : (gU.next = void 0, UU[RU] = gU), pU.next = void 0, pU.previous = void 0
        }
      }(UU, gU, RU)));
      return () => {
        for (const UU of gU) UU?.()
      }
    }
  },
  36639: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      g: () => pU
    });
    const tU = {};

    function pU(UU, RU) {
      tU[UU] = RU
    }

    function EU(UU) {
      return tU[UU]
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);