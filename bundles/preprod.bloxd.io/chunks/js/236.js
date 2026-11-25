export const id = 236;
export const ids = [236];
export const modules = {
  37374: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      e: () => wQ,
      h: () => qQ
    });
    const wQ = 1 / 2.2,
      qQ = 2.2;
    Math.sqrt(5);
    let TQ = .001
  },
  37404: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return parseInt(QQ.toString().replace(/\W/g, ""))
    }

    function qQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(QQ - WQ) <= XQ
    }

    function TQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return QQ < WQ - wQ || QQ > XQ + wQ
    }

    function zQ(QQ, WQ) {
      return QQ === WQ ? QQ : Math.random() * (WQ - QQ) + QQ
    }

    function sQ(QQ, WQ, XQ) {
      return QQ + (WQ - QQ) * XQ
    }

    function FQ(QQ, WQ, XQ) {
      let wQ = yQ(WQ - QQ, 360);
      return wQ > 180 && (wQ -= 360), QQ + wQ * rQ(XQ)
    }

    function PQ(QQ, WQ, XQ) {
      let wQ;
      return wQ = QQ != WQ ? rQ((XQ - QQ) / (WQ - QQ)) : 0, wQ
    }

    function gQ(QQ, WQ, XQ, wQ, qQ) {
      const TQ = qQ * qQ,
        zQ = qQ * TQ;
      return QQ * (2 * zQ - 3 * TQ + 1) + XQ * (-2 * zQ + 3 * TQ) + WQ * (zQ - 2 * TQ + qQ) + wQ * (zQ - TQ)
    }

    function JQ(QQ, WQ, XQ, wQ, qQ) {
      const TQ = qQ * qQ;
      return 6 * (TQ - qQ) * QQ + (3 * TQ - 4 * qQ + 1) * WQ + 6 * (-TQ + qQ) * XQ + (3 * TQ - 2 * qQ) * wQ
    }

    function rQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(XQ, Math.max(WQ, QQ))
    }

    function IQ(QQ) {
      return QQ -= 2 * Math.PI * Math.floor((QQ + Math.PI) / (2 * Math.PI))
    }

    function jQ(QQ) {
      const WQ = QQ.toString(16);
      return QQ <= 15 ? ("0" + WQ).toUpperCase() : WQ.toUpperCase()
    }

    function BQ(QQ) {
      if (Math.log2) return Math.floor(Math.log2(QQ));
      if (QQ < 0) return NaN;
      if (0 === QQ) return -1 / 0;
      let WQ = 0;
      if (QQ < 1) {
        for (; QQ < 1;) WQ++, QQ *= 2;
        WQ = -WQ
      } else if (QQ > 1)
        for (; QQ > 1;) WQ++, QQ = Math.floor(QQ / 2);
      return WQ
    }

    function yQ(QQ, WQ) {
      return QQ - Math.floor(QQ / WQ) * WQ
    }

    function VQ(QQ, WQ, XQ) {
      return (QQ - WQ) / (XQ - WQ)
    }

    function DQ(QQ, WQ, XQ) {
      return QQ * (XQ - WQ) + WQ
    }

    function pQ(QQ, WQ) {
      let XQ = yQ(WQ - QQ, 360);
      return XQ > 180 && (XQ -= 360), XQ
    }

    function GQ(QQ, WQ) {
      const XQ = yQ(QQ, 2 * WQ);
      return WQ - Math.abs(XQ - WQ)
    }

    function UQ(QQ, WQ, XQ) {
      let wQ = rQ(XQ);
      return wQ = -2 * wQ * wQ * wQ + 3 * wQ * wQ, WQ * wQ + QQ * (1 - wQ)
    }

    function bQ(QQ, WQ, XQ) {
      let wQ;
      return wQ = Math.abs(WQ - QQ) <= XQ ? WQ : QQ + Math.sign(WQ - QQ) * XQ, wQ
    }

    function vQ(QQ, WQ, XQ) {
      const wQ = pQ(QQ, WQ);
      let qQ;
      return qQ = -XQ < wQ && wQ < XQ ? WQ : bQ(QQ, WQ = QQ + wQ, XQ), qQ
    }

    function dQ(QQ, WQ, XQ) {
      return (QQ - WQ) / (XQ - WQ)
    }

    function HQ(QQ, WQ, XQ) {
      return (XQ - WQ) * QQ + WQ
    }

    function aQ(QQ, WQ) {
      const XQ = QQ % WQ;
      return 0 === XQ ? WQ : aQ(WQ, XQ)
    }
    XQ.r(WQ), XQ.d(WQ, {
      Clamp: () => rQ,
      DeltaAngle: () => pQ,
      Denormalize: () => DQ,
      ExtractAsInt: () => wQ,
      Hermite: () => gQ,
      Hermite1stDerivative: () => JQ,
      HighestCommonFactor: () => aQ,
      ILog2: () => BQ,
      InverseLerp: () => PQ,
      Lerp: () => sQ,
      LerpAngle: () => FQ,
      MoveTowards: () => bQ,
      MoveTowardsAngle: () => vQ,
      Normalize: () => VQ,
      NormalizeRadians: () => IQ,
      OutsideRange: () => TQ,
      PercentToRange: () => HQ,
      PingPong: () => GQ,
      RandomRange: () => zQ,
      RangeToPercent: () => dQ,
      Repeat: () => yQ,
      SmoothStep: () => UQ,
      ToHex: () => jQ,
      WithinEpsilon: () => qQ
    })
  },
  37367: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      Matrix: () => wQ.e,
      Quaternion: () => wQ.h,
      RegisterMathVector: () => wQ.l,
      TmpVectors: () => wQ.m,
      Vector2: () => wQ.q,
      vj: () => wQ.s,
      Vector4: () => wQ.w
    });
    var wQ = XQ(37370);
    (0, wQ.l)()
  },
  37379: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      const XQ = [];
      for (let wQ = 0; wQ < QQ; ++wQ) XQ.push(WQ());
      return XQ
    }

    function qQ(QQ, WQ) {
      return wQ(QQ, WQ)
    }
    XQ.d(WQ, {
      c: () => wQ,
      e: () => qQ,
      i: () => zQ
    });
    const TQ = ["push", "splice", "pop", "shift", "unshift"];

    function zQ(QQ, WQ) {
      const XQ = TQ.map((XQ => function(QQ, WQ, XQ) {
        const wQ = QQ[WQ];
        if ("function" !== typeof wQ) return null;
        const qQ = function() {
          const wQ = QQ.length,
            TQ = qQ.previous.apply(QQ, arguments);
          return XQ(WQ, wQ), TQ
        };
        return wQ.next = qQ, qQ.previous = wQ, QQ[WQ] = qQ, () => {
          const XQ = qQ.previous;
          if (!XQ) return;
          const wQ = qQ.next;
          wQ ? (XQ.next = wQ, wQ.previous = XQ) : (XQ.next = void 0, QQ[WQ] = XQ), qQ.next = void 0, qQ.previous = void 0
        }
      }(QQ, XQ, WQ)));
      return () => {
        for (const QQ of XQ) QQ?.()
      }
    }
  },
  37418: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      d: () => qQ
    });
    const wQ = {};

    function qQ(QQ, WQ) {
      wQ[QQ] = WQ
    }

    function TQ(QQ) {
      return wQ[QQ]
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);