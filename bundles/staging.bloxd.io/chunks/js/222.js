export const id = 222;
export const ids = [222];
export const modules = {
  36705: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      d: () => LQ,
      g: () => qQ
    });
    const LQ = 1 / 2.2,
      qQ = 2.2;
    Math.sqrt(5);
    let oQ = .001
  },
  36729: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return parseInt(QQ.toString().replace(/\W/g, ""))
    }

    function qQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(QQ - FQ) <= wQ
    }

    function oQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return QQ < FQ - LQ || QQ > wQ + LQ
    }

    function DQ(QQ, FQ) {
      return QQ === FQ ? QQ : Math.random() * (FQ - QQ) + QQ
    }

    function kQ(QQ, FQ, wQ) {
      return QQ + (FQ - QQ) * wQ
    }

    function vQ(QQ, FQ, wQ) {
      let LQ = tQ(FQ - QQ, 360);
      return LQ > 180 && (LQ -= 360), QQ + LQ * bQ(wQ)
    }

    function mQ(QQ, FQ, wQ) {
      let LQ;
      return LQ = QQ != FQ ? bQ((wQ - QQ) / (FQ - QQ)) : 0, LQ
    }

    function uQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = qQ * qQ,
        DQ = qQ * oQ;
      return QQ * (2 * DQ - 3 * oQ + 1) + wQ * (-2 * DQ + 3 * oQ) + FQ * (DQ - 2 * oQ + qQ) + LQ * (DQ - oQ)
    }

    function HQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = qQ * qQ;
      return 6 * (oQ - qQ) * QQ + (3 * oQ - 4 * qQ + 1) * FQ + 6 * (-oQ + qQ) * wQ + (3 * oQ - 2 * qQ) * LQ
    }

    function bQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(wQ, Math.max(FQ, QQ))
    }

    function YQ(QQ) {
      return QQ -= 2 * Math.PI * Math.floor((QQ + Math.PI) / (2 * Math.PI))
    }

    function xQ(QQ) {
      const FQ = QQ.toString(16);
      return QQ <= 15 ? ("0" + FQ).toUpperCase() : FQ.toUpperCase()
    }

    function AQ(QQ) {
      if (Math.log2) return Math.floor(Math.log2(QQ));
      if (QQ < 0) return NaN;
      if (0 === QQ) return -1 / 0;
      let FQ = 0;
      if (QQ < 1) {
        for (; QQ < 1;) FQ++, QQ *= 2;
        FQ = -FQ
      } else if (QQ > 1)
        for (; QQ > 1;) FQ++, QQ = Math.floor(QQ / 2);
      return FQ
    }

    function tQ(QQ, FQ) {
      return QQ - Math.floor(QQ / FQ) * FQ
    }

    function eQ(QQ, FQ, wQ) {
      return (QQ - FQ) / (wQ - FQ)
    }

    function MQ(QQ, FQ, wQ) {
      return QQ * (wQ - FQ) + FQ
    }

    function GQ(QQ, FQ) {
      let wQ = tQ(FQ - QQ, 360);
      return wQ > 180 && (wQ -= 360), wQ
    }

    function pQ(QQ, FQ) {
      const wQ = tQ(QQ, 2 * FQ);
      return FQ - Math.abs(wQ - FQ)
    }

    function cQ(QQ, FQ, wQ) {
      let LQ = bQ(wQ);
      return LQ = -2 * LQ * LQ * LQ + 3 * LQ * LQ, FQ * LQ + QQ * (1 - LQ)
    }

    function CQ(QQ, FQ, wQ) {
      let LQ;
      return LQ = Math.abs(FQ - QQ) <= wQ ? FQ : QQ + Math.sign(FQ - QQ) * wQ, LQ
    }

    function SQ(QQ, FQ, wQ) {
      const LQ = GQ(QQ, FQ);
      let qQ;
      return qQ = -wQ < LQ && LQ < wQ ? FQ : CQ(QQ, FQ = QQ + LQ, wQ), qQ
    }

    function iQ(QQ, FQ, wQ) {
      return (QQ - FQ) / (wQ - FQ)
    }

    function WQ(QQ, FQ, wQ) {
      return (wQ - FQ) * QQ + FQ
    }

    function RQ(QQ, FQ) {
      const wQ = QQ % FQ;
      return 0 === wQ ? FQ : RQ(FQ, wQ)
    }
    wQ.r(FQ), wQ.d(FQ, {
      Clamp: () => bQ,
      DeltaAngle: () => GQ,
      Denormalize: () => MQ,
      ExtractAsInt: () => LQ,
      Hermite: () => uQ,
      Hermite1stDerivative: () => HQ,
      HighestCommonFactor: () => RQ,
      ILog2: () => AQ,
      InverseLerp: () => mQ,
      Lerp: () => kQ,
      LerpAngle: () => vQ,
      MoveTowards: () => CQ,
      MoveTowardsAngle: () => SQ,
      Normalize: () => eQ,
      NormalizeRadians: () => YQ,
      OutsideRange: () => oQ,
      PercentToRange: () => WQ,
      PingPong: () => pQ,
      RandomRange: () => DQ,
      RangeToPercent: () => iQ,
      Repeat: () => tQ,
      SmoothStep: () => cQ,
      ToHex: () => xQ,
      WithinEpsilon: () => qQ
    })
  },
  36688: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      Matrix: () => LQ.c,
      Quaternion: () => LQ.e,
      RegisterMathVector: () => LQ.i,
      TmpVectors: () => LQ.k,
      Vector2: () => LQ.n,
      Ox: () => LQ.p,
      Vector4: () => LQ.t
    });
    var LQ = wQ(36696);
    (0, LQ.i)()
  },
  36709: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      const wQ = [];
      for (let LQ = 0; LQ < QQ; ++LQ) wQ.push(FQ());
      return wQ
    }

    function qQ(QQ, FQ) {
      return LQ(QQ, FQ)
    }
    wQ.d(FQ, {
      b: () => LQ,
      f: () => qQ,
      h: () => DQ
    });
    const oQ = ["push", "splice", "pop", "shift", "unshift"];

    function DQ(QQ, FQ) {
      const wQ = oQ.map((wQ => function(QQ, FQ, wQ) {
        const LQ = QQ[FQ];
        if ("function" !== typeof LQ) return null;
        const qQ = function() {
          const LQ = QQ.length,
            oQ = qQ.previous.apply(QQ, arguments);
          return wQ(FQ, LQ), oQ
        };
        return LQ.next = qQ, qQ.previous = LQ, QQ[FQ] = qQ, () => {
          const wQ = qQ.previous;
          if (!wQ) return;
          const LQ = qQ.next;
          LQ ? (wQ.next = LQ, LQ.previous = wQ) : (wQ.next = void 0, QQ[FQ] = wQ), qQ.next = void 0, qQ.previous = void 0
        }
      }(QQ, wQ, FQ)));
      return () => {
        for (const QQ of wQ) QQ?.()
      }
    }
  },
  36741: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      e: () => qQ
    });
    const LQ = {};

    function qQ(QQ, FQ) {
      LQ[QQ] = FQ
    }

    function oQ(QQ) {
      return LQ[QQ]
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);