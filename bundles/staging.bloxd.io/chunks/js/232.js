export const id = 232;
export const ids = [232];
export const modules = {
  37178: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB,
      g: () => QB,
      h: () => nB
    });
    const QB = 1 / 2.2,
      nB = 2.2;
    Math.sqrt(5);
    let dB = .001
  },
  37208: (BB, jB, zB) => {
    function QB(BB) {
      return parseInt(BB.toString().replace(/\W/g, ""))
    }

    function nB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(BB - jB) <= zB
    }

    function dB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return BB < jB - QB || BB > zB + QB
    }

    function IB(BB, jB) {
      return BB === jB ? BB : Math.random() * (jB - BB) + BB
    }

    function NB(BB, jB, zB) {
      return BB + (jB - BB) * zB
    }

    function uB(BB, jB, zB) {
      let QB = yB(jB - BB, 360);
      return QB > 180 && (QB -= 360), BB + QB * rB(zB)
    }

    function UB(BB, jB, zB) {
      let QB;
      return QB = BB != jB ? rB((zB - BB) / (jB - BB)) : 0, QB
    }

    function aB(BB, jB, zB, QB, nB) {
      const dB = nB * nB,
        IB = nB * dB;
      return BB * (2 * IB - 3 * dB + 1) + zB * (-2 * IB + 3 * dB) + jB * (IB - 2 * dB + nB) + QB * (IB - dB)
    }

    function pB(BB, jB, zB, QB, nB) {
      const dB = nB * nB;
      return 6 * (dB - nB) * BB + (3 * dB - 4 * nB + 1) * jB + 6 * (-dB + nB) * zB + (3 * dB - 2 * nB) * QB
    }

    function rB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(zB, Math.max(jB, BB))
    }

    function sB(BB) {
      return BB -= 2 * Math.PI * Math.floor((BB + Math.PI) / (2 * Math.PI))
    }

    function JB(BB) {
      const jB = BB.toString(16);
      return BB <= 15 ? ("0" + jB).toUpperCase() : jB.toUpperCase()
    }

    function mB(BB) {
      if (Math.log2) return Math.floor(Math.log2(BB));
      if (BB < 0) return NaN;
      if (0 === BB) return -1 / 0;
      let jB = 0;
      if (BB < 1) {
        for (; BB < 1;) jB++, BB *= 2;
        jB = -jB
      } else if (BB > 1)
        for (; BB > 1;) jB++, BB = Math.floor(BB / 2);
      return jB
    }

    function yB(BB, jB) {
      return BB - Math.floor(BB / jB) * jB
    }

    function kB(BB, jB, zB) {
      return (BB - jB) / (zB - jB)
    }

    function GB(BB, jB, zB) {
      return BB * (zB - jB) + jB
    }

    function LB(BB, jB) {
      let zB = yB(jB - BB, 360);
      return zB > 180 && (zB -= 360), zB
    }

    function gB(BB, jB) {
      const zB = yB(BB, 2 * jB);
      return jB - Math.abs(zB - jB)
    }

    function tB(BB, jB, zB) {
      let QB = rB(zB);
      return QB = -2 * QB * QB * QB + 3 * QB * QB, jB * QB + BB * (1 - QB)
    }

    function SB(BB, jB, zB) {
      let QB;
      return QB = Math.abs(jB - BB) <= zB ? jB : BB + Math.sign(jB - BB) * zB, QB
    }

    function MB(BB, jB, zB) {
      const QB = LB(BB, jB);
      let nB;
      return nB = -zB < QB && QB < zB ? jB : SB(BB, jB = BB + QB, zB), nB
    }

    function EB(BB, jB, zB) {
      return (BB - jB) / (zB - jB)
    }

    function iB(BB, jB, zB) {
      return (zB - jB) * BB + jB
    }

    function qB(BB, jB) {
      const zB = BB % jB;
      return 0 === zB ? jB : qB(jB, zB)
    }
    zB.r(jB), zB.d(jB, {
      Clamp: () => rB,
      DeltaAngle: () => LB,
      Denormalize: () => GB,
      ExtractAsInt: () => QB,
      Hermite: () => aB,
      Hermite1stDerivative: () => pB,
      HighestCommonFactor: () => qB,
      ILog2: () => mB,
      InverseLerp: () => UB,
      Lerp: () => NB,
      LerpAngle: () => uB,
      MoveTowards: () => SB,
      MoveTowardsAngle: () => MB,
      Normalize: () => kB,
      NormalizeRadians: () => sB,
      OutsideRange: () => dB,
      PercentToRange: () => iB,
      PingPong: () => gB,
      RandomRange: () => IB,
      RangeToPercent: () => EB,
      Repeat: () => yB,
      SmoothStep: () => tB,
      ToHex: () => JB,
      WithinEpsilon: () => nB
    })
  },
  37166: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      Matrix: () => QB.c,
      Quaternion: () => QB.d,
      RegisterMathVector: () => QB.e,
      TmpVectors: () => QB.h,
      Vector2: () => QB.i,
      KJ: () => QB.m,
      Vector4: () => QB.n
    });
    var QB = zB(37171);
    (0, QB.e)()
  },
  37186: (BB, jB, zB) => {
    function QB(BB, jB) {
      const zB = [];
      for (let QB = 0; QB < BB; ++QB) zB.push(jB());
      return zB
    }

    function nB(BB, jB) {
      return QB(BB, jB)
    }
    zB.d(jB, {
      c: () => QB,
      g: () => nB,
      k: () => IB
    });
    const dB = ["push", "splice", "pop", "shift", "unshift"];

    function IB(BB, jB) {
      const zB = dB.map((zB => function(BB, jB, zB) {
        const QB = BB[jB];
        if ("function" !== typeof QB) return null;
        const nB = function() {
          const QB = BB.length,
            dB = nB.previous.apply(BB, arguments);
          return zB(jB, QB), dB
        };
        return QB.next = nB, nB.previous = QB, BB[jB] = nB, () => {
          const zB = nB.previous;
          if (!zB) return;
          const QB = nB.next;
          QB ? (zB.next = QB, QB.previous = zB) : (zB.next = void 0, BB[jB] = zB), nB.next = void 0, nB.previous = void 0
        }
      }(BB, zB, jB)));
      return () => {
        for (const BB of zB) BB?.()
      }
    }
  },
  37222: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      d: () => nB
    });
    const QB = {};

    function nB(BB, jB) {
      QB[BB] = jB
    }

    function dB(BB) {
      return QB[BB]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);