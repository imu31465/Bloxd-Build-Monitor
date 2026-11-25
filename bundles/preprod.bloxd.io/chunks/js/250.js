export const id = 250;
export const ids = [250];
export const modules = {
  38044: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      f: () => OM,
      h: () => SM
    });
    const OM = 1 / 2.2,
      SM = 2.2;
    Math.sqrt(5);
    let jM = .001
  },
  38074: (MM, rM, iM) => {
    function OM(MM) {
      return parseInt(MM.toString().replace(/\W/g, ""))
    }

    function SM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(MM - rM) <= iM
    }

    function jM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return MM < rM - OM || MM > iM + OM
    }

    function aM(MM, rM) {
      return MM === rM ? MM : Math.random() * (rM - MM) + MM
    }

    function PM(MM, rM, iM) {
      return MM + (rM - MM) * iM
    }

    function nM(MM, rM, iM) {
      let OM = dM(rM - MM, 360);
      return OM > 180 && (OM -= 360), MM + OM * mM(iM)
    }

    function QM(MM, rM, iM) {
      let OM;
      return OM = MM != rM ? mM((iM - MM) / (rM - MM)) : 0, OM
    }

    function zM(MM, rM, iM, OM, SM) {
      const jM = SM * SM,
        aM = SM * jM;
      return MM * (2 * aM - 3 * jM + 1) + iM * (-2 * aM + 3 * jM) + rM * (aM - 2 * jM + SM) + OM * (aM - jM)
    }

    function LM(MM, rM, iM, OM, SM) {
      const jM = SM * SM;
      return 6 * (jM - SM) * MM + (3 * jM - 4 * SM + 1) * rM + 6 * (-jM + SM) * iM + (3 * jM - 2 * SM) * OM
    }

    function mM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(iM, Math.max(rM, MM))
    }

    function HM(MM) {
      return MM -= 2 * Math.PI * Math.floor((MM + Math.PI) / (2 * Math.PI))
    }

    function hM(MM) {
      const rM = MM.toString(16);
      return MM <= 15 ? ("0" + rM).toUpperCase() : rM.toUpperCase()
    }

    function JM(MM) {
      if (Math.log2) return Math.floor(Math.log2(MM));
      if (MM < 0) return NaN;
      if (0 === MM) return -1 / 0;
      let rM = 0;
      if (MM < 1) {
        for (; MM < 1;) rM++, MM *= 2;
        rM = -rM
      } else if (MM > 1)
        for (; MM > 1;) rM++, MM = Math.floor(MM / 2);
      return rM
    }

    function dM(MM, rM) {
      return MM - Math.floor(MM / rM) * rM
    }

    function yM(MM, rM, iM) {
      return (MM - rM) / (iM - rM)
    }

    function lM(MM, rM, iM) {
      return MM * (iM - rM) + rM
    }

    function EM(MM, rM) {
      let iM = dM(rM - MM, 360);
      return iM > 180 && (iM -= 360), iM
    }

    function UM(MM, rM) {
      const iM = dM(MM, 2 * rM);
      return rM - Math.abs(iM - rM)
    }

    function GM(MM, rM, iM) {
      let OM = mM(iM);
      return OM = -2 * OM * OM * OM + 3 * OM * OM, rM * OM + MM * (1 - OM)
    }

    function CM(MM, rM, iM) {
      let OM;
      return OM = Math.abs(rM - MM) <= iM ? rM : MM + Math.sign(rM - MM) * iM, OM
    }

    function eM(MM, rM, iM) {
      const OM = EM(MM, rM);
      let SM;
      return SM = -iM < OM && OM < iM ? rM : CM(MM, rM = MM + OM, iM), SM
    }

    function bM(MM, rM, iM) {
      return (MM - rM) / (iM - rM)
    }

    function wM(MM, rM, iM) {
      return (iM - rM) * MM + rM
    }

    function tM(MM, rM) {
      const iM = MM % rM;
      return 0 === iM ? rM : tM(rM, iM)
    }
    iM.r(rM), iM.d(rM, {
      Clamp: () => mM,
      DeltaAngle: () => EM,
      Denormalize: () => lM,
      ExtractAsInt: () => OM,
      Hermite: () => zM,
      Hermite1stDerivative: () => LM,
      HighestCommonFactor: () => tM,
      ILog2: () => JM,
      InverseLerp: () => QM,
      Lerp: () => PM,
      LerpAngle: () => nM,
      MoveTowards: () => CM,
      MoveTowardsAngle: () => eM,
      Normalize: () => yM,
      NormalizeRadians: () => HM,
      OutsideRange: () => jM,
      PercentToRange: () => wM,
      PingPong: () => UM,
      RandomRange: () => aM,
      RangeToPercent: () => bM,
      Repeat: () => dM,
      SmoothStep: () => GM,
      ToHex: () => hM,
      WithinEpsilon: () => SM
    })
  },
  38034: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      Matrix: () => OM.d,
      Quaternion: () => OM.h,
      RegisterMathVector: () => OM.i,
      TmpVectors: () => OM.l,
      Vector2: () => OM.o,
      sh: () => OM.q,
      Vector4: () => OM.u
    });
    var OM = iM(38040);
    (0, OM.i)()
  },
  38048: (MM, rM, iM) => {
    function OM(MM, rM) {
      const iM = [];
      for (let OM = 0; OM < MM; ++OM) iM.push(rM());
      return iM
    }

    function SM(MM, rM) {
      return OM(MM, rM)
    }
    iM.d(rM, {
      c: () => OM,
      g: () => SM,
      j: () => aM
    });
    const jM = ["push", "splice", "pop", "shift", "unshift"];

    function aM(MM, rM) {
      const iM = jM.map((iM => function(MM, rM, iM) {
        const OM = MM[rM];
        if ("function" !== typeof OM) return null;
        const SM = function() {
          const OM = MM.length,
            jM = SM.previous.apply(MM, arguments);
          return iM(rM, OM), jM
        };
        return OM.next = SM, SM.previous = OM, MM[rM] = SM, () => {
          const iM = SM.previous;
          if (!iM) return;
          const OM = SM.next;
          OM ? (iM.next = OM, OM.previous = iM) : (iM.next = void 0, MM[rM] = iM), SM.next = void 0, SM.previous = void 0
        }
      }(MM, iM, rM)));
      return () => {
        for (const MM of iM) MM?.()
      }
    }
  },
  38085: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      e: () => SM
    });
    const OM = {};

    function SM(MM, rM) {
      OM[MM] = rM
    }

    function jM(MM) {
      return OM[MM]
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);