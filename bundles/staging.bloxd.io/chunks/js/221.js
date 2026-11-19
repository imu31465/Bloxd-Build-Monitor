export const id = 221;
export const ids = [221];
export const modules = {
  36449: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      g: () => ID,
      h: () => pD
    });
    const ID = 1 / 2.2,
      pD = 2.2;
    Math.sqrt(5);
    let iD = .001
  },
  36479: (DD, CD, cD) => {
    function ID(DD) {
      return parseInt(DD.toString().replace(/\W/g, ""))
    }

    function pD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(DD - CD) <= cD
    }

    function iD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return DD < CD - ID || DD > cD + ID
    }

    function fD(DD, CD) {
      return DD === CD ? DD : Math.random() * (CD - DD) + DD
    }

    function bD(DD, CD, cD) {
      return DD + (CD - DD) * cD
    }

    function QD(DD, CD, cD) {
      let ID = oD(CD - DD, 360);
      return ID > 180 && (ID -= 360), DD + ID * yD(cD)
    }

    function wD(DD, CD, cD) {
      let ID;
      return ID = DD != CD ? yD((cD - DD) / (CD - DD)) : 0, ID
    }

    function SD(DD, CD, cD, ID, pD) {
      const iD = pD * pD,
        fD = pD * iD;
      return DD * (2 * fD - 3 * iD + 1) + cD * (-2 * fD + 3 * iD) + CD * (fD - 2 * iD + pD) + ID * (fD - iD)
    }

    function BD(DD, CD, cD, ID, pD) {
      const iD = pD * pD;
      return 6 * (iD - pD) * DD + (3 * iD - 4 * pD + 1) * CD + 6 * (-iD + pD) * cD + (3 * iD - 2 * pD) * ID
    }

    function yD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(cD, Math.max(CD, DD))
    }

    function MD(DD) {
      return DD -= 2 * Math.PI * Math.floor((DD + Math.PI) / (2 * Math.PI))
    }

    function tD(DD) {
      const CD = DD.toString(16);
      return DD <= 15 ? ("0" + CD).toUpperCase() : CD.toUpperCase()
    }

    function ZD(DD) {
      if (Math.log2) return Math.floor(Math.log2(DD));
      if (DD < 0) return NaN;
      if (0 === DD) return -1 / 0;
      let CD = 0;
      if (DD < 1) {
        for (; DD < 1;) CD++, DD *= 2;
        CD = -CD
      } else if (DD > 1)
        for (; DD > 1;) CD++, DD = Math.floor(DD / 2);
      return CD
    }

    function oD(DD, CD) {
      return DD - Math.floor(DD / CD) * CD
    }

    function vD(DD, CD, cD) {
      return (DD - CD) / (cD - CD)
    }

    function ND(DD, CD, cD) {
      return DD * (cD - CD) + CD
    }

    function gD(DD, CD) {
      let cD = oD(CD - DD, 360);
      return cD > 180 && (cD -= 360), cD
    }

    function XD(DD, CD) {
      const cD = oD(DD, 2 * CD);
      return CD - Math.abs(cD - CD)
    }

    function mD(DD, CD, cD) {
      let ID = yD(cD);
      return ID = -2 * ID * ID * ID + 3 * ID * ID, CD * ID + DD * (1 - ID)
    }

    function nD(DD, CD, cD) {
      let ID;
      return ID = Math.abs(CD - DD) <= cD ? CD : DD + Math.sign(CD - DD) * cD, ID
    }

    function OD(DD, CD, cD) {
      const ID = gD(DD, CD);
      let pD;
      return pD = -cD < ID && ID < cD ? CD : nD(DD, CD = DD + ID, cD), pD
    }

    function PD(DD, CD, cD) {
      return (DD - CD) / (cD - CD)
    }

    function HD(DD, CD, cD) {
      return (cD - CD) * DD + CD
    }

    function UD(DD, CD) {
      const cD = DD % CD;
      return 0 === cD ? CD : UD(CD, cD)
    }
    cD.r(CD), cD.d(CD, {
      Clamp: () => yD,
      DeltaAngle: () => gD,
      Denormalize: () => ND,
      ExtractAsInt: () => ID,
      Hermite: () => SD,
      Hermite1stDerivative: () => BD,
      HighestCommonFactor: () => UD,
      ILog2: () => ZD,
      InverseLerp: () => wD,
      Lerp: () => bD,
      LerpAngle: () => QD,
      MoveTowards: () => nD,
      MoveTowardsAngle: () => OD,
      Normalize: () => vD,
      NormalizeRadians: () => MD,
      OutsideRange: () => iD,
      PercentToRange: () => HD,
      PingPong: () => XD,
      RandomRange: () => fD,
      RangeToPercent: () => PD,
      Repeat: () => oD,
      SmoothStep: () => mD,
      ToHex: () => tD,
      WithinEpsilon: () => pD
    })
  },
  36440: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      Matrix: () => ID.d,
      Quaternion: () => ID.h,
      RegisterMathVector: () => ID.k,
      TmpVectors: () => ID.l,
      Vector2: () => ID.n,
      cZ: () => ID.p,
      Vector4: () => ID.s
    });
    var ID = cD(36446);
    (0, ID.k)()
  },
  36452: (DD, CD, cD) => {
    function ID(DD, CD) {
      const cD = [];
      for (let ID = 0; ID < DD; ++ID) cD.push(CD());
      return cD
    }

    function pD(DD, CD) {
      return ID(DD, CD)
    }
    cD.d(CD, {
      b: () => ID,
      d: () => pD,
      f: () => fD
    });
    const iD = ["push", "splice", "pop", "shift", "unshift"];

    function fD(DD, CD) {
      const cD = iD.map((cD => function(DD, CD, cD) {
        const ID = DD[CD];
        if ("function" !== typeof ID) return null;
        const pD = function() {
          const ID = DD.length,
            iD = pD.previous.apply(DD, arguments);
          return cD(CD, ID), iD
        };
        return ID.next = pD, pD.previous = ID, DD[CD] = pD, () => {
          const cD = pD.previous;
          if (!cD) return;
          const ID = pD.next;
          ID ? (cD.next = ID, ID.previous = cD) : (cD.next = void 0, DD[CD] = cD), pD.next = void 0, pD.previous = void 0
        }
      }(DD, cD, CD)));
      return () => {
        for (const DD of cD) DD?.()
      }
    }
  },
  36488: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD,
      d: () => pD
    });
    const ID = {};

    function pD(DD, CD) {
      ID[DD] = CD
    }

    function iD(DD) {
      return ID[DD]
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);