export const id = 18;
export const ids = [18];
export const modules = {
  39353: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => lq
    });
    const Yq = .4,
      lq = function(qq, Eq, gq, lq) {
        let Oq, {
            localPlayerId: mq
          } = lq,
          xq = !1,
          Aq = null,
          cq = null,
          uq = null,
          Bq = 1,
          Wq = null,
          Nq = 0,
          aq = 0;

        function Vq() {
          if (Wq) {
            const qq = Wq;
            qq.fade(qq.getVolume(), 0, 500), setTimeout((() => {
              qq.stop()
            }), 500), Wq = null
          }
          aq = 0
        }

        function dq(qq) {
          var Eq;
          if (!Aq || xq || null === cq) return void(Wq && Vq());
          const gq = Date.now();
          if (!Wq || gq - Nq > 54e3) {
            if (Wq) {
              const qq = Wq;
              qq.fade(qq.getVolume(), 0, 2e3), setTimeout((() => {
                qq.stop()
              }), 2e3)
            }
            Wq = Oq.playSound(mq, "crowdAmbience", Yq, 1), Nq = gq, aq = Yq
          }
          const lq = function() {
              if (null === cq || null === uq || !Aq) return 0;
              const qq = Oq.getPositionView(Aq);
              if (!qq) return 0;
              const Eq = Math.abs(qq[2] - cq),
                gq = Math.abs(qq[2] - uq),
                Yq = Math.min(Eq, gq);
              return Math.max(0, 1 - Yq / Bq)
            }(),
            dq = qq / 1e3;
          aq += (Yq + .6 * lq - aq) * Math.min(1, 2 * dq), null === (Eq = Wq) || void 0 === Eq || Eq.setRelativeVolume(aq)
        }
        return {
          onCreate: qq => {
            Oq = qq
          },
          onReceivedMessageFromServer: (qq, Eq) => {
            var gq;
            "ballState" === qq ? (Aq = null !== (gq = Eq.eId) && void 0 !== gq ? gq : null, Aq || Vq()) : "frozen" === qq ? xq = Eq.frozen : "pitchInfo" === qq && (cq = Eq.goalZRed, uq = Eq.goalZBlue, Bq = Math.abs(uq - cq) / 2)
          },
          SB: qq => {
            dq(qq)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);