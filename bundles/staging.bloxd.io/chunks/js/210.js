export const id = 210;
export const ids = [210];
export const modules = {
  36132: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      f: () => VB,
      j: () => yB
    });
    const VB = 1 / 2.2,
      yB = 2.2;
    Math.sqrt(5);
    let pB = .001
  },
  36157: (BB, TB, dB) => {
    function VB(BB) {
      return parseInt(BB.toString().replace(/\W/g, ""))
    }

    function yB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(BB - TB) <= dB
    }

    function pB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return BB < TB - VB || BB > dB + VB
    }

    function lB(BB, TB) {
      return BB === TB ? BB : Math.random() * (TB - BB) + BB
    }

    function JB(BB, TB, dB) {
      return BB + (TB - BB) * dB
    }

    function YB(BB, TB, dB) {
      let VB = HB(TB - BB, 360);
      return VB > 180 && (VB -= 360), BB + VB * LB(dB)
    }

    function gB(BB, TB, dB) {
      let VB;
      return VB = BB != TB ? LB((dB - BB) / (TB - BB)) : 0, VB
    }

    function oB(BB, TB, dB, VB, yB) {
      const pB = yB * yB,
        lB = yB * pB;
      return BB * (2 * lB - 3 * pB + 1) + dB * (-2 * lB + 3 * pB) + TB * (lB - 2 * pB + yB) + VB * (lB - pB)
    }

    function kB(BB, TB, dB, VB, yB) {
      const pB = yB * yB;
      return 6 * (pB - yB) * BB + (3 * pB - 4 * yB + 1) * TB + 6 * (-pB + yB) * dB + (3 * pB - 2 * yB) * VB
    }

    function LB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(dB, Math.max(TB, BB))
    }

    function OB(BB) {
      return BB -= 2 * Math.PI * Math.floor((BB + Math.PI) / (2 * Math.PI))
    }

    function DB(BB) {
      const TB = BB.toString(16);
      return BB <= 15 ? ("0" + TB).toUpperCase() : TB.toUpperCase()
    }

    function uB(BB) {
      if (Math.log2) return Math.floor(Math.log2(BB));
      if (BB < 0) return NaN;
      if (0 === BB) return -1 / 0;
      let TB = 0;
      if (BB < 1) {
        for (; BB < 1;) TB++, BB *= 2;
        TB = -TB
      } else if (BB > 1)
        for (; BB > 1;) TB++, BB = Math.floor(BB / 2);
      return TB
    }

    function HB(BB, TB) {
      return BB - Math.floor(BB / TB) * TB
    }

    function EB(BB, TB, dB) {
      return (BB - TB) / (dB - TB)
    }

    function vB(BB, TB, dB) {
      return BB * (dB - TB) + TB
    }

    function mB(BB, TB) {
      let dB = HB(TB - BB, 360);
      return dB > 180 && (dB -= 360), dB
    }

    function iB(BB, TB) {
      const dB = HB(BB, 2 * TB);
      return TB - Math.abs(dB - TB)
    }

    function NB(BB, TB, dB) {
      let VB = LB(dB);
      return VB = -2 * VB * VB * VB + 3 * VB * VB, TB * VB + BB * (1 - VB)
    }

    function tB(BB, TB, dB) {
      let VB;
      return VB = Math.abs(TB - BB) <= dB ? TB : BB + Math.sign(TB - BB) * dB, VB
    }

    function fB(BB, TB, dB) {
      const VB = mB(BB, TB);
      let yB;
      return yB = -dB < VB && VB < dB ? TB : tB(BB, TB = BB + VB, dB), yB
    }

    function sB(BB, TB, dB) {
      return (BB - TB) / (dB - TB)
    }

    function MB(BB, TB, dB) {
      return (dB - TB) * BB + TB
    }

    function zB(BB, TB) {
      const dB = BB % TB;
      return 0 === dB ? TB : zB(TB, dB)
    }
    dB.r(TB), dB.d(TB, {
      Clamp: () => LB,
      DeltaAngle: () => mB,
      Denormalize: () => vB,
      ExtractAsInt: () => VB,
      Hermite: () => oB,
      Hermite1stDerivative: () => kB,
      HighestCommonFactor: () => zB,
      ILog2: () => uB,
      InverseLerp: () => gB,
      Lerp: () => JB,
      LerpAngle: () => YB,
      MoveTowards: () => tB,
      MoveTowardsAngle: () => fB,
      Normalize: () => EB,
      NormalizeRadians: () => OB,
      OutsideRange: () => pB,
      PercentToRange: () => MB,
      PingPong: () => iB,
      RandomRange: () => lB,
      RangeToPercent: () => sB,
      Repeat: () => HB,
      SmoothStep: () => NB,
      ToHex: () => DB,
      WithinEpsilon: () => yB
    })
  },
  36119: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      Matrix: () => VB.b,
      Quaternion: () => VB.f,
      RegisterMathVector: () => VB.i,
      TmpVectors: () => VB.j,
      Vector2: () => VB.l,
      RD: () => VB.p,
      Vector4: () => VB.r
    });
    var VB = dB(36126);
    (0, VB.i)()
  },
  36137: (BB, TB, dB) => {
    function VB(BB, TB) {
      const dB = [];
      for (let VB = 0; VB < BB; ++VB) dB.push(TB());
      return dB
    }

    function yB(BB, TB) {
      return VB(BB, TB)
    }
    dB.d(TB, {
      b: () => VB,
      d: () => yB,
      e: () => lB
    });
    const pB = ["push", "splice", "pop", "shift", "unshift"];

    function lB(BB, TB) {
      const dB = pB.map((dB => function(BB, TB, dB) {
        const VB = BB[TB];
        if ("function" !== typeof VB) return null;
        const yB = function() {
          const VB = BB.length,
            pB = yB.previous.apply(BB, arguments);
          return dB(TB, VB), pB
        };
        return VB.next = yB, yB.previous = VB, BB[TB] = yB, () => {
          const dB = yB.previous;
          if (!dB) return;
          const VB = yB.next;
          VB ? (dB.next = VB, VB.previous = dB) : (dB.next = void 0, BB[TB] = dB), yB.next = void 0, yB.previous = void 0
        }
      }(BB, dB, TB)));
      return () => {
        for (const BB of dB) BB?.()
      }
    }
  },
  36166: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB,
      g: () => yB
    });
    const VB = {};

    function yB(BB, TB) {
      VB[BB] = TB
    }

    function pB(BB) {
      return VB[BB]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);