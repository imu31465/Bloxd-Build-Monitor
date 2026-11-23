export const id = 227;
export const ids = [227];
export const modules = {
  36968: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC,
      g: () => QC,
      i: () => wC
    });
    const QC = 1 / 2.2,
      wC = 2.2;
    Math.sqrt(5);
    let bC = .001
  },
  36991: (CC, zC, ZC) => {
    function QC(CC) {
      return parseInt(CC.toString().replace(/\W/g, ""))
    }

    function wC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(CC - zC) <= ZC
    }

    function bC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return CC < zC - QC || CC > ZC + QC
    }

    function nC(CC, zC) {
      return CC === zC ? CC : Math.random() * (zC - CC) + CC
    }

    function fC(CC, zC, ZC) {
      return CC + (zC - CC) * ZC
    }

    function oC(CC, zC, ZC) {
      let QC = pC(zC - CC, 360);
      return QC > 180 && (QC -= 360), CC + QC * NC(ZC)
    }

    function qC(CC, zC, ZC) {
      let QC;
      return QC = CC != zC ? NC((ZC - CC) / (zC - CC)) : 0, QC
    }

    function FC(CC, zC, ZC, QC, wC) {
      const bC = wC * wC,
        nC = wC * bC;
      return CC * (2 * nC - 3 * bC + 1) + ZC * (-2 * nC + 3 * bC) + zC * (nC - 2 * bC + wC) + QC * (nC - bC)
    }

    function WC(CC, zC, ZC, QC, wC) {
      const bC = wC * wC;
      return 6 * (bC - wC) * CC + (3 * bC - 4 * wC + 1) * zC + 6 * (-bC + wC) * ZC + (3 * bC - 2 * wC) * QC
    }

    function NC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(ZC, Math.max(zC, CC))
    }

    function MC(CC) {
      return CC -= 2 * Math.PI * Math.floor((CC + Math.PI) / (2 * Math.PI))
    }

    function gC(CC) {
      const zC = CC.toString(16);
      return CC <= 15 ? ("0" + zC).toUpperCase() : zC.toUpperCase()
    }

    function SC(CC) {
      if (Math.log2) return Math.floor(Math.log2(CC));
      if (CC < 0) return NaN;
      if (0 === CC) return -1 / 0;
      let zC = 0;
      if (CC < 1) {
        for (; CC < 1;) zC++, CC *= 2;
        zC = -zC
      } else if (CC > 1)
        for (; CC > 1;) zC++, CC = Math.floor(CC / 2);
      return zC
    }

    function pC(CC, zC) {
      return CC - Math.floor(CC / zC) * zC
    }

    function PC(CC, zC, ZC) {
      return (CC - zC) / (ZC - zC)
    }

    function GC(CC, zC, ZC) {
      return CC * (ZC - zC) + zC
    }

    function RC(CC, zC) {
      let ZC = pC(zC - CC, 360);
      return ZC > 180 && (ZC -= 360), ZC
    }

    function AC(CC, zC) {
      const ZC = pC(CC, 2 * zC);
      return zC - Math.abs(ZC - zC)
    }

    function xC(CC, zC, ZC) {
      let QC = NC(ZC);
      return QC = -2 * QC * QC * QC + 3 * QC * QC, zC * QC + CC * (1 - QC)
    }

    function JC(CC, zC, ZC) {
      let QC;
      return QC = Math.abs(zC - CC) <= ZC ? zC : CC + Math.sign(zC - CC) * ZC, QC
    }

    function IC(CC, zC, ZC) {
      const QC = RC(CC, zC);
      let wC;
      return wC = -ZC < QC && QC < ZC ? zC : JC(CC, zC = CC + QC, ZC), wC
    }

    function iC(CC, zC, ZC) {
      return (CC - zC) / (ZC - zC)
    }

    function vC(CC, zC, ZC) {
      return (ZC - zC) * CC + zC
    }

    function eC(CC, zC) {
      const ZC = CC % zC;
      return 0 === ZC ? zC : eC(zC, ZC)
    }
    ZC.r(zC), ZC.d(zC, {
      Clamp: () => NC,
      DeltaAngle: () => RC,
      Denormalize: () => GC,
      ExtractAsInt: () => QC,
      Hermite: () => FC,
      Hermite1stDerivative: () => WC,
      HighestCommonFactor: () => eC,
      ILog2: () => SC,
      InverseLerp: () => qC,
      Lerp: () => fC,
      LerpAngle: () => oC,
      MoveTowards: () => JC,
      MoveTowardsAngle: () => IC,
      Normalize: () => PC,
      NormalizeRadians: () => MC,
      OutsideRange: () => bC,
      PercentToRange: () => vC,
      PingPong: () => AC,
      RandomRange: () => nC,
      RangeToPercent: () => iC,
      Repeat: () => pC,
      SmoothStep: () => xC,
      ToHex: () => gC,
      WithinEpsilon: () => wC
    })
  },
  36961: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      Matrix: () => QC.b,
      Quaternion: () => QC.f,
      RegisterMathVector: () => QC.g,
      TmpVectors: () => QC.j,
      Vector2: () => QC.n,
      Eg: () => QC.r,
      Vector4: () => QC.u
    });
    var QC = ZC(36963);
    (0, QC.g)()
  },
  36971: (CC, zC, ZC) => {
    function QC(CC, zC) {
      const ZC = [];
      for (let QC = 0; QC < CC; ++QC) ZC.push(zC());
      return ZC
    }

    function wC(CC, zC) {
      return QC(CC, zC)
    }
    ZC.d(zC, {
      d: () => QC,
      g: () => wC,
      i: () => nC
    });
    const bC = ["push", "splice", "pop", "shift", "unshift"];

    function nC(CC, zC) {
      const ZC = bC.map((ZC => function(CC, zC, ZC) {
        const QC = CC[zC];
        if ("function" !== typeof QC) return null;
        const wC = function() {
          const QC = CC.length,
            bC = wC.previous.apply(CC, arguments);
          return ZC(zC, QC), bC
        };
        return QC.next = wC, wC.previous = QC, CC[zC] = wC, () => {
          const ZC = wC.previous;
          if (!ZC) return;
          const QC = wC.next;
          QC ? (ZC.next = QC, QC.previous = ZC) : (ZC.next = void 0, CC[zC] = ZC), wC.next = void 0, wC.previous = void 0
        }
      }(CC, ZC, zC)));
      return () => {
        for (const CC of ZC) CC?.()
      }
    }
  },
  37002: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      d: () => wC
    });
    const QC = {};

    function wC(CC, zC) {
      QC[CC] = zC
    }

    function bC(CC) {
      return QC[CC]
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);