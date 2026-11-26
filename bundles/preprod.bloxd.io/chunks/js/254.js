export const id = 254;
export const ids = [254];
export const modules = {
  37782: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      c: () => YB,
      d: () => DB
    });
    const YB = 1 / 2.2,
      DB = 2.2;
    Math.sqrt(5);
    let QB = .001
  },
  37807: (BB, OB, GB) => {
    function YB(BB) {
      return parseInt(BB.toString().replace(/\W/g, ""))
    }

    function DB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(BB - OB) <= GB
    }

    function QB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return BB < OB - YB || BB > GB + YB
    }

    function oB(BB, OB) {
      return BB === OB ? BB : Math.random() * (OB - BB) + BB
    }

    function jB(BB, OB, GB) {
      return BB + (OB - BB) * GB
    }

    function yB(BB, OB, GB) {
      let YB = ZB(OB - BB, 360);
      return YB > 180 && (YB -= 360), BB + YB * zB(GB)
    }

    function JB(BB, OB, GB) {
      let YB;
      return YB = BB != OB ? zB((GB - BB) / (OB - BB)) : 0, YB
    }

    function MB(BB, OB, GB, YB, DB) {
      const QB = DB * DB,
        oB = DB * QB;
      return BB * (2 * oB - 3 * QB + 1) + GB * (-2 * oB + 3 * QB) + OB * (oB - 2 * QB + DB) + YB * (oB - QB)
    }

    function PB(BB, OB, GB, YB, DB) {
      const QB = DB * DB;
      return 6 * (QB - DB) * BB + (3 * QB - 4 * DB + 1) * OB + 6 * (-QB + DB) * GB + (3 * QB - 2 * DB) * YB
    }

    function zB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(GB, Math.max(OB, BB))
    }

    function lB(BB) {
      return BB -= 2 * Math.PI * Math.floor((BB + Math.PI) / (2 * Math.PI))
    }

    function pB(BB) {
      const OB = BB.toString(16);
      return BB <= 15 ? ("0" + OB).toUpperCase() : OB.toUpperCase()
    }

    function qB(BB) {
      if (Math.log2) return Math.floor(Math.log2(BB));
      if (BB < 0) return NaN;
      if (0 === BB) return -1 / 0;
      let OB = 0;
      if (BB < 1) {
        for (; BB < 1;) OB++, BB *= 2;
        OB = -OB
      } else if (BB > 1)
        for (; BB > 1;) OB++, BB = Math.floor(BB / 2);
      return OB
    }

    function ZB(BB, OB) {
      return BB - Math.floor(BB / OB) * OB
    }

    function NB(BB, OB, GB) {
      return (BB - OB) / (GB - OB)
    }

    function RB(BB, OB, GB) {
      return BB * (GB - OB) + OB
    }

    function WB(BB, OB) {
      let GB = ZB(OB - BB, 360);
      return GB > 180 && (GB -= 360), GB
    }

    function AB(BB, OB) {
      const GB = ZB(BB, 2 * OB);
      return OB - Math.abs(GB - OB)
    }

    function VB(BB, OB, GB) {
      let YB = zB(GB);
      return YB = -2 * YB * YB * YB + 3 * YB * YB, OB * YB + BB * (1 - YB)
    }

    function SB(BB, OB, GB) {
      let YB;
      return YB = Math.abs(OB - BB) <= GB ? OB : BB + Math.sign(OB - BB) * GB, YB
    }

    function nB(BB, OB, GB) {
      const YB = WB(BB, OB);
      let DB;
      return DB = -GB < YB && YB < GB ? OB : SB(BB, OB = BB + YB, GB), DB
    }

    function UB(BB, OB, GB) {
      return (BB - OB) / (GB - OB)
    }

    function fB(BB, OB, GB) {
      return (GB - OB) * BB + OB
    }

    function kB(BB, OB) {
      const GB = BB % OB;
      return 0 === GB ? OB : kB(OB, GB)
    }
    GB.r(OB), GB.d(OB, {
      Clamp: () => zB,
      DeltaAngle: () => WB,
      Denormalize: () => RB,
      ExtractAsInt: () => YB,
      Hermite: () => MB,
      Hermite1stDerivative: () => PB,
      HighestCommonFactor: () => kB,
      ILog2: () => qB,
      InverseLerp: () => JB,
      Lerp: () => jB,
      LerpAngle: () => yB,
      MoveTowards: () => SB,
      MoveTowardsAngle: () => nB,
      Normalize: () => NB,
      NormalizeRadians: () => lB,
      OutsideRange: () => QB,
      PercentToRange: () => fB,
      PingPong: () => AB,
      RandomRange: () => oB,
      RangeToPercent: () => UB,
      Repeat: () => ZB,
      SmoothStep: () => VB,
      ToHex: () => pB,
      WithinEpsilon: () => DB
    })
  },
  37771: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      Matrix: () => YB.d,
      Quaternion: () => YB.f,
      RegisterMathVector: () => YB.j,
      TmpVectors: () => YB.k,
      Vector2: () => YB.o,
      Xp: () => YB.r,
      Vector4: () => YB.t
    });
    var YB = GB(37778);
    (0, YB.j)()
  },
  37785: (BB, OB, GB) => {
    function YB(BB, OB) {
      const GB = [];
      for (let YB = 0; YB < BB; ++YB) GB.push(OB());
      return GB
    }

    function DB(BB, OB) {
      return YB(BB, OB)
    }
    GB.d(OB, {
      e: () => YB,
      i: () => DB,
      l: () => oB
    });
    const QB = ["push", "splice", "pop", "shift", "unshift"];

    function oB(BB, OB) {
      const GB = QB.map((GB => function(BB, OB, GB) {
        const YB = BB[OB];
        if ("function" !== typeof YB) return null;
        const DB = function() {
          const YB = BB.length,
            QB = DB.previous.apply(BB, arguments);
          return GB(OB, YB), QB
        };
        return YB.next = DB, DB.previous = YB, BB[OB] = DB, () => {
          const GB = DB.previous;
          if (!GB) return;
          const YB = DB.next;
          YB ? (GB.next = YB, YB.previous = GB) : (GB.next = void 0, BB[OB] = GB), DB.next = void 0, DB.previous = void 0
        }
      }(BB, GB, OB)));
      return () => {
        for (const BB of GB) BB?.()
      }
    }
  },
  37823: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      f: () => DB
    });
    const YB = {};

    function DB(BB, OB) {
      YB[BB] = OB
    }

    function QB(BB) {
      return YB[BB]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);