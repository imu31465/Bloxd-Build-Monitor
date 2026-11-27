export const id = 19;
export const ids = [19];
export const modules = {
  40295: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => be
    });
    const ye = .4,
      be = function(ee, ie, He, be) {
        let Me, {
            localPlayerId: Ke
          } = be,
          Ue = !1,
          Fe = null,
          Je = null,
          oe = null,
          Re = 1,
          ke = null,
          qe = 0,
          fe = 0;

        function Te() {
          if (ke) {
            const ee = ke;
            ee.fade(ee.getVolume(), 0, 500), setTimeout((() => {
              ee.stop()
            }), 500), ke = null
          }
          fe = 0
        }

        function pe(ee) {
          var ie;
          if (!Fe || Ue || null === Je) return void(ke && Te());
          const He = Date.now();
          if (!ke || He - qe > 54e3) {
            if (ke) {
              const ee = ke;
              ee.fade(ee.getVolume(), 0, 2e3), setTimeout((() => {
                ee.stop()
              }), 2e3)
            }
            ke = Me.playSound(Ke, "crowdAmbience", ye, 1), qe = He, fe = ye
          }
          const be = function() {
              if (null === Je || null === oe || !Fe) return 0;
              const ee = Me.getPositionView(Fe);
              if (!ee) return 0;
              const ie = Math.abs(ee[2] - Je),
                He = Math.abs(ee[2] - oe),
                ye = Math.min(ie, He);
              return Math.max(0, 1 - ye / Re)
            }(),
            pe = ee / 1e3;
          fe += (ye + .6 * be - fe) * Math.min(1, 2 * pe), null === (ie = ke) || void 0 === ie || ie.setRelativeVolume(fe)
        }
        return {
          onCreate: ee => {
            Me = ee
          },
          onReceivedMessageFromServer: (ee, ie) => {
            var He;
            "ballState" === ee ? (Fe = null !== (He = ie.eId) && void 0 !== He ? He : null, Fe || Te()) : "frozen" === ee ? Ue = ie.frozen : "pitchInfo" === ee && (Je = ie.goalZRed, oe = ie.goalZBlue, Re = Math.abs(oe - Je) / 2)
          },
          YR: ee => {
            pe(ee)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);