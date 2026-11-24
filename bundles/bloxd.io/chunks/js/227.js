export const id = 227;
export const ids = [227];
export const modules = {
  37123: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS,
      h: () => tS,
      l: () => bS
    });
    const tS = 1 / 2.2,
      bS = 2.2;
    Math.sqrt(5);
    let XS = .001
  },
  37149: (SS, HS, gS) => {
    function tS(SS) {
      return parseInt(SS.toString().replace(/\W/g, ""))
    }

    function bS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(SS - HS) <= gS
    }

    function XS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return SS < HS - tS || SS > gS + tS
    }

    function xS(SS, HS) {
      return SS === HS ? SS : Math.random() * (HS - SS) + SS
    }

    function NS(SS, HS, gS) {
      return SS + (HS - SS) * gS
    }

    function qS(SS, HS, gS) {
      let tS = GS(HS - SS, 360);
      return tS > 180 && (tS -= 360), SS + tS * kS(gS)
    }

    function uS(SS, HS, gS) {
      let tS;
      return tS = SS != HS ? kS((gS - SS) / (HS - SS)) : 0, tS
    }

    function IS(SS, HS, gS, tS, bS) {
      const XS = bS * bS,
        xS = bS * XS;
      return SS * (2 * xS - 3 * XS + 1) + gS * (-2 * xS + 3 * XS) + HS * (xS - 2 * XS + bS) + tS * (xS - XS)
    }

    function fS(SS, HS, gS, tS, bS) {
      const XS = bS * bS;
      return 6 * (XS - bS) * SS + (3 * XS - 4 * bS + 1) * HS + 6 * (-XS + bS) * gS + (3 * XS - 2 * bS) * tS
    }

    function kS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(gS, Math.max(HS, SS))
    }

    function aS(SS) {
      return SS -= 2 * Math.PI * Math.floor((SS + Math.PI) / (2 * Math.PI))
    }

    function KS(SS) {
      const HS = SS.toString(16);
      return SS <= 15 ? ("0" + HS).toUpperCase() : HS.toUpperCase()
    }

    function jS(SS) {
      if (Math.log2) return Math.floor(Math.log2(SS));
      if (SS < 0) return NaN;
      if (0 === SS) return -1 / 0;
      let HS = 0;
      if (SS < 1) {
        for (; SS < 1;) HS++, SS *= 2;
        HS = -HS
      } else if (SS > 1)
        for (; SS > 1;) HS++, SS = Math.floor(SS / 2);
      return HS
    }

    function GS(SS, HS) {
      return SS - Math.floor(SS / HS) * HS
    }

    function CS(SS, HS, gS) {
      return (SS - HS) / (gS - HS)
    }

    function nS(SS, HS, gS) {
      return SS * (gS - HS) + HS
    }

    function PS(SS, HS) {
      let gS = GS(HS - SS, 360);
      return gS > 180 && (gS -= 360), gS
    }

    function QS(SS, HS) {
      const gS = GS(SS, 2 * HS);
      return HS - Math.abs(gS - HS)
    }

    function DS(SS, HS, gS) {
      let tS = kS(gS);
      return tS = -2 * tS * tS * tS + 3 * tS * tS, HS * tS + SS * (1 - tS)
    }

    function wS(SS, HS, gS) {
      let tS;
      return tS = Math.abs(HS - SS) <= gS ? HS : SS + Math.sign(HS - SS) * gS, tS
    }

    function hS(SS, HS, gS) {
      const tS = PS(SS, HS);
      let bS;
      return bS = -gS < tS && tS < gS ? HS : wS(SS, HS = SS + tS, gS), bS
    }

    function ZS(SS, HS, gS) {
      return (SS - HS) / (gS - HS)
    }

    function JS(SS, HS, gS) {
      return (gS - HS) * SS + HS
    }

    function OS(SS, HS) {
      const gS = SS % HS;
      return 0 === gS ? HS : OS(HS, gS)
    }
    gS.r(HS), gS.d(HS, {
      Clamp: () => kS,
      DeltaAngle: () => PS,
      Denormalize: () => nS,
      ExtractAsInt: () => tS,
      Hermite: () => IS,
      Hermite1stDerivative: () => fS,
      HighestCommonFactor: () => OS,
      ILog2: () => jS,
      InverseLerp: () => uS,
      Lerp: () => NS,
      LerpAngle: () => qS,
      MoveTowards: () => wS,
      MoveTowardsAngle: () => hS,
      Normalize: () => CS,
      NormalizeRadians: () => aS,
      OutsideRange: () => XS,
      PercentToRange: () => JS,
      PingPong: () => QS,
      RandomRange: () => xS,
      RangeToPercent: () => ZS,
      Repeat: () => GS,
      SmoothStep: () => DS,
      ToHex: () => KS,
      WithinEpsilon: () => bS
    })
  },
  37113: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      Matrix: () => tS.e,
      Quaternion: () => tS.i,
      RegisterMathVector: () => tS.k,
      TmpVectors: () => tS.l,
      Vector2: () => tS.m,
      VK: () => tS.n,
      Vector4: () => tS.r
    });
    var tS = gS(37117);
    (0, tS.k)()
  },
  37129: (SS, HS, gS) => {
    function tS(SS, HS) {
      const gS = [];
      for (let tS = 0; tS < SS; ++tS) gS.push(HS());
      return gS
    }

    function bS(SS, HS) {
      return tS(SS, HS)
    }
    gS.d(HS, {
      d: () => tS,
      g: () => bS,
      k: () => xS
    });
    const XS = ["push", "splice", "pop", "shift", "unshift"];

    function xS(SS, HS) {
      const gS = XS.map((gS => function(SS, HS, gS) {
        const tS = SS[HS];
        if ("function" !== typeof tS) return null;
        const bS = function() {
          const tS = SS.length,
            XS = bS.previous.apply(SS, arguments);
          return gS(HS, tS), XS
        };
        return tS.next = bS, bS.previous = tS, SS[HS] = bS, () => {
          const gS = bS.previous;
          if (!gS) return;
          const tS = bS.next;
          tS ? (gS.next = tS, tS.previous = gS) : (gS.next = void 0, SS[HS] = gS), bS.next = void 0, bS.previous = void 0
        }
      }(SS, gS, HS)));
      return () => {
        for (const SS of gS) SS?.()
      }
    }
  },
  37164: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS,
      f: () => bS
    });
    const tS = {};

    function bS(SS, HS) {
      tS[SS] = HS
    }

    function XS(SS) {
      return tS[SS]
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);