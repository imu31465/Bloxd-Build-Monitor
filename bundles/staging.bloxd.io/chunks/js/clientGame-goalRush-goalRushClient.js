export const id = 18;
export const ids = [18];
export const modules = {
  39201: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => MT
    });
    const lT = .4,
      MT = function(TT, kT, cT, MT) {
        let KT, {
            localPlayerId: OT
          } = MT,
          yT = !1,
          fT = null,
          xT = null,
          IT = null,
          AT = 1,
          CT = null,
          jT = 0,
          vT = 0;

        function tT() {
          if (CT) {
            const TT = CT;
            TT.fade(TT.getVolume(), 0, 500), setTimeout((() => {
              TT.stop()
            }), 500), CT = null
          }
          vT = 0
        }

        function hT(TT) {
          var kT;
          if (!fT || yT || null === xT) return void(CT && tT());
          const cT = Date.now();
          if (!CT || cT - jT > 54e3) {
            if (CT) {
              const TT = CT;
              TT.fade(TT.getVolume(), 0, 2e3), setTimeout((() => {
                TT.stop()
              }), 2e3)
            }
            CT = KT.playSound(OT, "crowdAmbience", lT, 1), jT = cT, vT = lT
          }
          const MT = function() {
              if (null === xT || null === IT || !fT) return 0;
              const TT = KT.getPositionView(fT);
              if (!TT) return 0;
              const kT = Math.abs(TT[2] - xT),
                cT = Math.abs(TT[2] - IT),
                lT = Math.min(kT, cT);
              return Math.max(0, 1 - lT / AT)
            }(),
            hT = TT / 1e3;
          vT += (lT + .6 * MT - vT) * Math.min(1, 2 * hT), null === (kT = CT) || void 0 === kT || kT.setRelativeVolume(vT)
        }
        return {
          onCreate: TT => {
            KT = TT
          },
          onReceivedMessageFromServer: (TT, kT) => {
            var cT;
            "ballState" === TT ? (fT = null !== (cT = kT.eId) && void 0 !== cT ? cT : null, fT || tT()) : "frozen" === TT ? yT = kT.frozen : "pitchInfo" === TT && (xT = kT.goalZRed, IT = kT.goalZBlue, AT = Math.abs(IT - xT) / 2)
          },
          UA: TT => {
            hT(TT)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);