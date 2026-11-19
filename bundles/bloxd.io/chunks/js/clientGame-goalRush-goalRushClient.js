export const id = 18;
export const ids = [18];
export const modules = {
  38361: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => zT
    });
    const iT = .4,
      zT = function(TT, oT, IT, zT) {
        let kT, {
            localPlayerId: WT
          } = zT,
          XT = !1,
          BT = null,
          FT = null,
          ST = null,
          DT = 1,
          LT = null,
          xT = 0,
          cT = 0;

        function KT() {
          if (LT) {
            const TT = LT;
            TT.fade(TT.getVolume(), 0, 500), setTimeout((() => {
              TT.stop()
            }), 500), LT = null
          }
          cT = 0
        }

        function MT(TT) {
          var oT;
          if (!BT || XT || null === FT) return void(LT && KT());
          const IT = Date.now();
          if (!LT || IT - xT > 54e3) {
            if (LT) {
              const TT = LT;
              TT.fade(TT.getVolume(), 0, 2e3), setTimeout((() => {
                TT.stop()
              }), 2e3)
            }
            LT = kT.playSound(WT, "crowdAmbience", iT, 1), xT = IT, cT = iT
          }
          const zT = function() {
              if (null === FT || null === ST || !BT) return 0;
              const TT = kT.getPositionView(BT);
              if (!TT) return 0;
              const oT = Math.abs(TT[2] - FT),
                IT = Math.abs(TT[2] - ST),
                iT = Math.min(oT, IT);
              return Math.max(0, 1 - iT / DT)
            }(),
            MT = TT / 1e3;
          cT += (iT + .6 * zT - cT) * Math.min(1, 2 * MT), null === (oT = LT) || void 0 === oT || oT.setRelativeVolume(cT)
        }
        return {
          onCreate: TT => {
            kT = TT
          },
          onReceivedMessageFromServer: (TT, oT) => {
            var IT;
            "ballState" === TT ? (BT = null !== (IT = oT.eId) && void 0 !== IT ? IT : null, BT || KT()) : "frozen" === TT ? XT = oT.frozen : "pitchInfo" === TT && (FT = oT.goalZRed, ST = oT.goalZBlue, DT = Math.abs(ST - FT) / 2)
          },
          dD: TT => {
            MT(TT)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);