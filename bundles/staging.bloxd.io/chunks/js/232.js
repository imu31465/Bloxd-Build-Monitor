export const id = 232;
export const ids = [232];
export const modules = {
  37129: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      e: () => TB,
      g: () => JB
    });
    const TB = 1 / 2.2,
      JB = 2.2;
    Math.sqrt(5);
    let oB = .001
  },
  37158: (BB, IB, ZB) => {
    function TB(BB) {
      return parseInt(BB.toString().replace(/\W/g, ""))
    }

    function JB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(BB - IB) <= ZB
    }

    function oB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return BB < IB - TB || BB > ZB + TB
    }

    function GB(BB, IB) {
      return BB === IB ? BB : Math.random() * (IB - BB) + BB
    }

    function vB(BB, IB, ZB) {
      return BB + (IB - BB) * ZB
    }

    function kB(BB, IB, ZB) {
      let TB = qB(IB - BB, 360);
      return TB > 180 && (TB -= 360), BB + TB * zB(ZB)
    }

    function cB(BB, IB, ZB) {
      let TB;
      return TB = BB != IB ? zB((ZB - BB) / (IB - BB)) : 0, TB
    }

    function nB(BB, IB, ZB, TB, JB) {
      const oB = JB * JB,
        GB = JB * oB;
      return BB * (2 * GB - 3 * oB + 1) + ZB * (-2 * GB + 3 * oB) + IB * (GB - 2 * oB + JB) + TB * (GB - oB)
    }

    function hB(BB, IB, ZB, TB, JB) {
      const oB = JB * JB;
      return 6 * (oB - JB) * BB + (3 * oB - 4 * JB + 1) * IB + 6 * (-oB + JB) * ZB + (3 * oB - 2 * JB) * TB
    }

    function zB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(ZB, Math.max(IB, BB))
    }

    function FB(BB) {
      return BB -= 2 * Math.PI * Math.floor((BB + Math.PI) / (2 * Math.PI))
    }

    function NB(BB) {
      const IB = BB.toString(16);
      return BB <= 15 ? ("0" + IB).toUpperCase() : IB.toUpperCase()
    }

    function gB(BB) {
      if (Math.log2) return Math.floor(Math.log2(BB));
      if (BB < 0) return NaN;
      if (0 === BB) return -1 / 0;
      let IB = 0;
      if (BB < 1) {
        for (; BB < 1;) IB++, BB *= 2;
        IB = -IB
      } else if (BB > 1)
        for (; BB > 1;) IB++, BB = Math.floor(BB / 2);
      return IB
    }

    function qB(BB, IB) {
      return BB - Math.floor(BB / IB) * IB
    }

    function yB(BB, IB, ZB) {
      return (BB - IB) / (ZB - IB)
    }

    function UB(BB, IB, ZB) {
      return BB * (ZB - IB) + IB
    }

    function WB(BB, IB) {
      let ZB = qB(IB - BB, 360);
      return ZB > 180 && (ZB -= 360), ZB
    }

    function dB(BB, IB) {
      const ZB = qB(BB, 2 * IB);
      return IB - Math.abs(ZB - IB)
    }

    function CB(BB, IB, ZB) {
      let TB = zB(ZB);
      return TB = -2 * TB * TB * TB + 3 * TB * TB, IB * TB + BB * (1 - TB)
    }

    function QB(BB, IB, ZB) {
      let TB;
      return TB = Math.abs(IB - BB) <= ZB ? IB : BB + Math.sign(IB - BB) * ZB, TB
    }

    function sB(BB, IB, ZB) {
      const TB = WB(BB, IB);
      let JB;
      return JB = -ZB < TB && TB < ZB ? IB : QB(BB, IB = BB + TB, ZB), JB
    }

    function wB(BB, IB, ZB) {
      return (BB - IB) / (ZB - IB)
    }

    function OB(BB, IB, ZB) {
      return (ZB - IB) * BB + IB
    }

    function YB(BB, IB) {
      const ZB = BB % IB;
      return 0 === ZB ? IB : YB(IB, ZB)
    }
    ZB.r(IB), ZB.d(IB, {
      Clamp: () => zB,
      DeltaAngle: () => WB,
      Denormalize: () => UB,
      ExtractAsInt: () => TB,
      Hermite: () => nB,
      Hermite1stDerivative: () => hB,
      HighestCommonFactor: () => YB,
      ILog2: () => gB,
      InverseLerp: () => cB,
      Lerp: () => vB,
      LerpAngle: () => kB,
      MoveTowards: () => QB,
      MoveTowardsAngle: () => sB,
      Normalize: () => yB,
      NormalizeRadians: () => FB,
      OutsideRange: () => oB,
      PercentToRange: () => OB,
      PingPong: () => dB,
      RandomRange: () => GB,
      RangeToPercent: () => wB,
      Repeat: () => qB,
      SmoothStep: () => CB,
      ToHex: () => NB,
      WithinEpsilon: () => JB
    })
  },
  37113: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      Matrix: () => TB.b,
      Quaternion: () => TB.f,
      RegisterMathVector: () => TB.j,
      TmpVectors: () => TB.m,
      Vector2: () => TB.p,
      rN: () => TB.s,
      Vector4: () => TB.t
    });
    var TB = ZB(37120);
    (0, TB.j)()
  },
  37131: (BB, IB, ZB) => {
    function TB(BB, IB) {
      const ZB = [];
      for (let TB = 0; TB < BB; ++TB) ZB.push(IB());
      return ZB
    }

    function JB(BB, IB) {
      return TB(BB, IB)
    }
    ZB.d(IB, {
      b: () => TB,
      f: () => JB,
      g: () => GB
    });
    const oB = ["push", "splice", "pop", "shift", "unshift"];

    function GB(BB, IB) {
      const ZB = oB.map((ZB => function(BB, IB, ZB) {
        const TB = BB[IB];
        if ("function" !== typeof TB) return null;
        const JB = function() {
          const TB = BB.length,
            oB = JB.previous.apply(BB, arguments);
          return ZB(IB, TB), oB
        };
        return TB.next = JB, JB.previous = TB, BB[IB] = JB, () => {
          const ZB = JB.previous;
          if (!ZB) return;
          const TB = JB.next;
          TB ? (ZB.next = TB, TB.previous = ZB) : (ZB.next = void 0, BB[IB] = ZB), JB.next = void 0, JB.previous = void 0
        }
      }(BB, ZB, IB)));
      return () => {
        for (const BB of ZB) BB?.()
      }
    }
  },
  37170: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      i: () => JB
    });
    const TB = {};

    function JB(BB, IB) {
      TB[BB] = IB
    }

    function oB(BB) {
      return TB[BB]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);