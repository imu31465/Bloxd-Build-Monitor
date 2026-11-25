export const id = 19;
export const ids = [19];
export const modules = {
  39715: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => qQ
    });
    const wQ = .4,
      qQ = function(QQ, WQ, XQ, qQ) {
        let TQ, {
            localPlayerId: zQ
          } = qQ,
          sQ = !1,
          FQ = null,
          PQ = null,
          gQ = null,
          JQ = 1,
          rQ = null,
          IQ = 0,
          jQ = 0;

        function BQ() {
          if (rQ) {
            const QQ = rQ;
            QQ.fade(QQ.getVolume(), 0, 500), setTimeout((() => {
              QQ.stop()
            }), 500), rQ = null
          }
          jQ = 0
        }

        function yQ(QQ) {
          var WQ;
          if (!FQ || sQ || null === PQ) return void(rQ && BQ());
          const XQ = Date.now();
          if (!rQ || XQ - IQ > 54e3) {
            if (rQ) {
              const QQ = rQ;
              QQ.fade(QQ.getVolume(), 0, 2e3), setTimeout((() => {
                QQ.stop()
              }), 2e3)
            }
            rQ = TQ.playSound(zQ, "crowdAmbience", wQ, 1), IQ = XQ, jQ = wQ
          }
          const qQ = function() {
              if (null === PQ || null === gQ || !FQ) return 0;
              const QQ = TQ.getPositionView(FQ);
              if (!QQ) return 0;
              const WQ = Math.abs(QQ[2] - PQ),
                XQ = Math.abs(QQ[2] - gQ),
                wQ = Math.min(WQ, XQ);
              return Math.max(0, 1 - wQ / JQ)
            }(),
            yQ = QQ / 1e3;
          jQ += (wQ + .6 * qQ - jQ) * Math.min(1, 2 * yQ), null === (WQ = rQ) || void 0 === WQ || WQ.setRelativeVolume(jQ)
        }
        return {
          onCreate: QQ => {
            TQ = QQ
          },
          onReceivedMessageFromServer: (QQ, WQ) => {
            var XQ;
            "ballState" === QQ ? (FQ = null !== (XQ = WQ.eId) && void 0 !== XQ ? XQ : null, FQ || BQ()) : "frozen" === QQ ? sQ = WQ.frozen : "pitchInfo" === QQ && (PQ = WQ.goalZRed, gQ = WQ.goalZBlue, JQ = Math.abs(gQ - PQ) / 2)
          },
          fJ: QQ => {
            yQ(QQ)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);