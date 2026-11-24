export const id = 227;
export const ids = [227];
export const modules = {
  37088: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      f: () => pD,
      g: () => sD
    });
    const pD = 1 / 2.2,
      sD = 2.2;
    Math.sqrt(5);
    let KD = .001
  },
  37125: (DD, zD, wD) => {
    function pD(DD) {
      return parseInt(DD.toString().replace(/\W/g, ""))
    }

    function sD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(DD - zD) <= wD
    }

    function KD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return DD < zD - pD || DD > wD + pD
    }

    function rD(DD, zD) {
      return DD === zD ? DD : Math.random() * (zD - DD) + DD
    }

    function LD(DD, zD, wD) {
      return DD + (zD - DD) * wD
    }

    function cD(DD, zD, wD) {
      let pD = GD(zD - DD, 360);
      return pD > 180 && (pD -= 360), DD + pD * UD(wD)
    }

    function gD(DD, zD, wD) {
      let pD;
      return pD = DD != zD ? UD((wD - DD) / (zD - DD)) : 0, pD
    }

    function RD(DD, zD, wD, pD, sD) {
      const KD = sD * sD,
        rD = sD * KD;
      return DD * (2 * rD - 3 * KD + 1) + wD * (-2 * rD + 3 * KD) + zD * (rD - 2 * KD + sD) + pD * (rD - KD)
    }

    function AD(DD, zD, wD, pD, sD) {
      const KD = sD * sD;
      return 6 * (KD - sD) * DD + (3 * KD - 4 * sD + 1) * zD + 6 * (-KD + sD) * wD + (3 * KD - 2 * sD) * pD
    }

    function UD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(wD, Math.max(zD, DD))
    }

    function fD(DD) {
      return DD -= 2 * Math.PI * Math.floor((DD + Math.PI) / (2 * Math.PI))
    }

    function ID(DD) {
      const zD = DD.toString(16);
      return DD <= 15 ? ("0" + zD).toUpperCase() : zD.toUpperCase()
    }

    function BD(DD) {
      if (Math.log2) return Math.floor(Math.log2(DD));
      if (DD < 0) return NaN;
      if (0 === DD) return -1 / 0;
      let zD = 0;
      if (DD < 1) {
        for (; DD < 1;) zD++, DD *= 2;
        zD = -zD
      } else if (DD > 1)
        for (; DD > 1;) zD++, DD = Math.floor(DD / 2);
      return zD
    }

    function GD(DD, zD) {
      return DD - Math.floor(DD / zD) * zD
    }

    function hD(DD, zD, wD) {
      return (DD - zD) / (wD - zD)
    }

    function nD(DD, zD, wD) {
      return DD * (wD - zD) + zD
    }

    function MD(DD, zD) {
      let wD = GD(zD - DD, 360);
      return wD > 180 && (wD -= 360), wD
    }

    function OD(DD, zD) {
      const wD = GD(DD, 2 * zD);
      return zD - Math.abs(wD - zD)
    }

    function JD(DD, zD, wD) {
      let pD = UD(wD);
      return pD = -2 * pD * pD * pD + 3 * pD * pD, zD * pD + DD * (1 - pD)
    }

    function ED(DD, zD, wD) {
      let pD;
      return pD = Math.abs(zD - DD) <= wD ? zD : DD + Math.sign(zD - DD) * wD, pD
    }

    function QD(DD, zD, wD) {
      const pD = MD(DD, zD);
      let sD;
      return sD = -wD < pD && pD < wD ? zD : ED(DD, zD = DD + pD, wD), sD
    }

    function XD(DD, zD, wD) {
      return (DD - zD) / (wD - zD)
    }

    function VD(DD, zD, wD) {
      return (wD - zD) * DD + zD
    }

    function PD(DD, zD) {
      const wD = DD % zD;
      return 0 === wD ? zD : PD(zD, wD)
    }
    wD.r(zD), wD.d(zD, {
      Clamp: () => UD,
      DeltaAngle: () => MD,
      Denormalize: () => nD,
      ExtractAsInt: () => pD,
      Hermite: () => RD,
      Hermite1stDerivative: () => AD,
      HighestCommonFactor: () => PD,
      ILog2: () => BD,
      InverseLerp: () => gD,
      Lerp: () => LD,
      LerpAngle: () => cD,
      MoveTowards: () => ED,
      MoveTowardsAngle: () => QD,
      Normalize: () => hD,
      NormalizeRadians: () => fD,
      OutsideRange: () => KD,
      PercentToRange: () => VD,
      PingPong: () => OD,
      RandomRange: () => rD,
      RangeToPercent: () => XD,
      Repeat: () => GD,
      SmoothStep: () => JD,
      ToHex: () => ID,
      WithinEpsilon: () => sD
    })
  },
  37070: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      Matrix: () => pD.e,
      Quaternion: () => pD.i,
      RegisterMathVector: () => pD.k,
      TmpVectors: () => pD.n,
      Vector2: () => pD.r,
      WI: () => pD.s,
      Vector4: () => pD.t
    });
    var pD = wD(37079);
    (0, pD.k)()
  },
  37094: (DD, zD, wD) => {
    function pD(DD, zD) {
      const wD = [];
      for (let pD = 0; pD < DD; ++pD) wD.push(zD());
      return wD
    }

    function sD(DD, zD) {
      return pD(DD, zD)
    }
    wD.d(zD, {
      b: () => pD,
      e: () => sD,
      i: () => rD
    });
    const KD = ["push", "splice", "pop", "shift", "unshift"];

    function rD(DD, zD) {
      const wD = KD.map((wD => function(DD, zD, wD) {
        const pD = DD[zD];
        if ("function" !== typeof pD) return null;
        const sD = function() {
          const pD = DD.length,
            KD = sD.previous.apply(DD, arguments);
          return wD(zD, pD), KD
        };
        return pD.next = sD, sD.previous = pD, DD[zD] = sD, () => {
          const wD = sD.previous;
          if (!wD) return;
          const pD = sD.next;
          pD ? (wD.next = pD, pD.previous = wD) : (wD.next = void 0, DD[zD] = wD), sD.next = void 0, sD.previous = void 0
        }
      }(DD, wD, zD)));
      return () => {
        for (const DD of wD) DD?.()
      }
    }
  },
  37134: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      i: () => sD
    });
    const pD = {};

    function sD(DD, zD) {
      pD[DD] = zD
    }

    function KD(DD) {
      return pD[DD]
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);