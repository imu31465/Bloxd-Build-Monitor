export const id = 18;
export const ids = [18];
export const modules = {
  38951: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => qQ
    });
    const LQ = .4,
      qQ = function(QQ, FQ, wQ, qQ) {
        let oQ, {
            localPlayerId: DQ
          } = qQ,
          kQ = !1,
          vQ = null,
          mQ = null,
          uQ = null,
          HQ = 1,
          bQ = null,
          YQ = 0,
          xQ = 0;

        function AQ() {
          if (bQ) {
            const QQ = bQ;
            QQ.fade(QQ.getVolume(), 0, 500), setTimeout((() => {
              QQ.stop()
            }), 500), bQ = null
          }
          xQ = 0
        }

        function tQ(QQ) {
          var FQ;
          if (!vQ || kQ || null === mQ) return void(bQ && AQ());
          const wQ = Date.now();
          if (!bQ || wQ - YQ > 54e3) {
            if (bQ) {
              const QQ = bQ;
              QQ.fade(QQ.getVolume(), 0, 2e3), setTimeout((() => {
                QQ.stop()
              }), 2e3)
            }
            bQ = oQ.playSound(DQ, "crowdAmbience", LQ, 1), YQ = wQ, xQ = LQ
          }
          const qQ = function() {
              if (null === mQ || null === uQ || !vQ) return 0;
              const QQ = oQ.getPositionView(vQ);
              if (!QQ) return 0;
              const FQ = Math.abs(QQ[2] - mQ),
                wQ = Math.abs(QQ[2] - uQ),
                LQ = Math.min(FQ, wQ);
              return Math.max(0, 1 - LQ / HQ)
            }(),
            tQ = QQ / 1e3;
          xQ += (LQ + .6 * qQ - xQ) * Math.min(1, 2 * tQ), null === (FQ = bQ) || void 0 === FQ || FQ.setRelativeVolume(xQ)
        }
        return {
          onCreate: QQ => {
            oQ = QQ
          },
          onReceivedMessageFromServer: (QQ, FQ) => {
            var wQ;
            "ballState" === QQ ? (vQ = null !== (wQ = FQ.eId) && void 0 !== wQ ? wQ : null, vQ || AQ()) : "frozen" === QQ ? kQ = FQ.frozen : "pitchInfo" === QQ && (mQ = FQ.goalZRed, uQ = FQ.goalZBlue, HQ = Math.abs(uQ - mQ) / 2)
          },
          fH: QQ => {
            tQ(QQ)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);