export const id = 259;
export const ids = [259];
export const modules = {
  38213: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => yR,
      i: () => tR
    });
    const yR = 1 / 2.2,
      tR = 2.2;
    Math.sqrt(5);
    let uR = .001
  },
  38239: (RR, JR, GR) => {
    function yR(RR) {
      return parseInt(RR.toString().replace(/\W/g, ""))
    }

    function tR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(RR - JR) <= GR
    }

    function uR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return RR < JR - yR || RR > GR + yR
    }

    function ZR(RR, JR) {
      return RR === JR ? RR : Math.random() * (JR - RR) + RR
    }

    function qR(RR, JR, GR) {
      return RR + (JR - RR) * GR
    }

    function iR(RR, JR, GR) {
      let yR = LR(JR - RR, 360);
      return yR > 180 && (yR -= 360), RR + yR * wR(GR)
    }

    function fR(RR, JR, GR) {
      let yR;
      return yR = RR != JR ? wR((GR - RR) / (JR - RR)) : 0, yR
    }

    function VR(RR, JR, GR, yR, tR) {
      const uR = tR * tR,
        ZR = tR * uR;
      return RR * (2 * ZR - 3 * uR + 1) + GR * (-2 * ZR + 3 * uR) + JR * (ZR - 2 * uR + tR) + yR * (ZR - uR)
    }

    function KR(RR, JR, GR, yR, tR) {
      const uR = tR * tR;
      return 6 * (uR - tR) * RR + (3 * uR - 4 * tR + 1) * JR + 6 * (-uR + tR) * GR + (3 * uR - 2 * tR) * yR
    }

    function wR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(GR, Math.max(JR, RR))
    }

    function rR(RR) {
      return RR -= 2 * Math.PI * Math.floor((RR + Math.PI) / (2 * Math.PI))
    }

    function eR(RR) {
      const JR = RR.toString(16);
      return RR <= 15 ? ("0" + JR).toUpperCase() : JR.toUpperCase()
    }

    function aR(RR) {
      if (Math.log2) return Math.floor(Math.log2(RR));
      if (RR < 0) return NaN;
      if (0 === RR) return -1 / 0;
      let JR = 0;
      if (RR < 1) {
        for (; RR < 1;) JR++, RR *= 2;
        JR = -JR
      } else if (RR > 1)
        for (; RR > 1;) JR++, RR = Math.floor(RR / 2);
      return JR
    }

    function LR(RR, JR) {
      return RR - Math.floor(RR / JR) * JR
    }

    function nR(RR, JR, GR) {
      return (RR - JR) / (GR - JR)
    }

    function UR(RR, JR, GR) {
      return RR * (GR - JR) + JR
    }

    function WR(RR, JR) {
      let GR = LR(JR - RR, 360);
      return GR > 180 && (GR -= 360), GR
    }

    function AR(RR, JR) {
      const GR = LR(RR, 2 * JR);
      return JR - Math.abs(GR - JR)
    }

    function CR(RR, JR, GR) {
      let yR = wR(GR);
      return yR = -2 * yR * yR * yR + 3 * yR * yR, JR * yR + RR * (1 - yR)
    }

    function XR(RR, JR, GR) {
      let yR;
      return yR = Math.abs(JR - RR) <= GR ? JR : RR + Math.sign(JR - RR) * GR, yR
    }

    function MR(RR, JR, GR) {
      const yR = WR(RR, JR);
      let tR;
      return tR = -GR < yR && yR < GR ? JR : XR(RR, JR = RR + yR, GR), tR
    }

    function BR(RR, JR, GR) {
      return (RR - JR) / (GR - JR)
    }

    function lR(RR, JR, GR) {
      return (GR - JR) * RR + JR
    }

    function pR(RR, JR) {
      const GR = RR % JR;
      return 0 === GR ? JR : pR(JR, GR)
    }
    GR.r(JR), GR.d(JR, {
      Clamp: () => wR,
      DeltaAngle: () => WR,
      Denormalize: () => UR,
      ExtractAsInt: () => yR,
      Hermite: () => VR,
      Hermite1stDerivative: () => KR,
      HighestCommonFactor: () => pR,
      ILog2: () => aR,
      InverseLerp: () => fR,
      Lerp: () => qR,
      LerpAngle: () => iR,
      MoveTowards: () => XR,
      MoveTowardsAngle: () => MR,
      Normalize: () => nR,
      NormalizeRadians: () => rR,
      OutsideRange: () => uR,
      PercentToRange: () => lR,
      PingPong: () => AR,
      RandomRange: () => ZR,
      RangeToPercent: () => BR,
      Repeat: () => LR,
      SmoothStep: () => CR,
      ToHex: () => eR,
      WithinEpsilon: () => tR
    })
  },
  38195: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      Matrix: () => yR.e,
      Quaternion: () => yR.i,
      RegisterMathVector: () => yR.j,
      TmpVectors: () => yR.l,
      Vector2: () => yR.n,
      Fe: () => yR.r,
      Vector4: () => yR.s
    });
    var yR = GR(38204);
    (0, yR.j)()
  },
  38217: (RR, JR, GR) => {
    function yR(RR, JR) {
      const GR = [];
      for (let yR = 0; yR < RR; ++yR) GR.push(JR());
      return GR
    }

    function tR(RR, JR) {
      return yR(RR, JR)
    }
    GR.d(JR, {
      c: () => yR,
      g: () => tR,
      i: () => ZR
    });
    const uR = ["push", "splice", "pop", "shift", "unshift"];

    function ZR(RR, JR) {
      const GR = uR.map((GR => function(RR, JR, GR) {
        const yR = RR[JR];
        if ("function" !== typeof yR) return null;
        const tR = function() {
          const yR = RR.length,
            uR = tR.previous.apply(RR, arguments);
          return GR(JR, yR), uR
        };
        return yR.next = tR, tR.previous = yR, RR[JR] = tR, () => {
          const GR = tR.previous;
          if (!GR) return;
          const yR = tR.next;
          yR ? (GR.next = yR, yR.previous = GR) : (GR.next = void 0, RR[JR] = GR), tR.next = void 0, tR.previous = void 0
        }
      }(RR, GR, JR)));
      return () => {
        for (const RR of GR) RR?.()
      }
    }
  },
  38253: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      f: () => tR
    });
    const yR = {};

    function tR(RR, JR) {
      yR[RR] = JR
    }

    function uR(RR) {
      return yR[RR]
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);