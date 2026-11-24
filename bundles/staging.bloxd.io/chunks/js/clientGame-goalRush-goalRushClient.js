export const id = 18;
export const ids = [18];
export const modules = {
  39559: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => zT
    });
    const WT = .4,
      zT = function(TT, UT, mT, zT) {
        let MT, {
            localPlayerId: gT
          } = zT,
          nT = !1,
          HT = null,
          kT = null,
          jT = null,
          lT = 1,
          LT = null,
          pT = 0,
          BT = 0;

        function ZT() {
          if (LT) {
            const TT = LT;
            TT.fade(TT.getVolume(), 0, 500), setTimeout((() => {
              TT.stop()
            }), 500), LT = null
          }
          BT = 0
        }

        function cT(TT) {
          var UT;
          if (!HT || nT || null === kT) return void(LT && ZT());
          const mT = Date.now();
          if (!LT || mT - pT > 54e3) {
            if (LT) {
              const TT = LT;
              TT.fade(TT.getVolume(), 0, 2e3), setTimeout((() => {
                TT.stop()
              }), 2e3)
            }
            LT = MT.playSound(gT, "crowdAmbience", WT, 1), pT = mT, BT = WT
          }
          const zT = function() {
              if (null === kT || null === jT || !HT) return 0;
              const TT = MT.getPositionView(HT);
              if (!TT) return 0;
              const UT = Math.abs(TT[2] - kT),
                mT = Math.abs(TT[2] - jT),
                WT = Math.min(UT, mT);
              return Math.max(0, 1 - WT / lT)
            }(),
            cT = TT / 1e3;
          BT += (WT + .6 * zT - BT) * Math.min(1, 2 * cT), null === (UT = LT) || void 0 === UT || UT.setRelativeVolume(BT)
        }
        return {
          onCreate: TT => {
            MT = TT
          },
          onReceivedMessageFromServer: (TT, UT) => {
            var mT;
            "ballState" === TT ? (HT = null !== (mT = UT.eId) && void 0 !== mT ? mT : null, HT || ZT()) : "frozen" === TT ? nT = UT.frozen : "pitchInfo" === TT && (kT = UT.goalZRed, jT = UT.goalZBlue, lT = Math.abs(jT - kT) / 2)
          },
          Cl: TT => {
            cT(TT)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);