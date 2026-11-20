export const id = 18;
export const ids = [18];
export const modules = {
  39039: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Ob
    });
    const Bb = .4,
      Ob = function(bb, ub, hb, Ob) {
        let Gb, {
            localPlayerId: Ub
          } = Ob,
          Lb = !1,
          Yb = null,
          Sb = null,
          ab = null,
          Hb = 1,
          wb = null,
          Zb = 0,
          Xb = 0;

        function pb() {
          if (wb) {
            const bb = wb;
            bb.fade(bb.getVolume(), 0, 500), setTimeout((() => {
              bb.stop()
            }), 500), wb = null
          }
          Xb = 0
        }

        function ob(bb) {
          var ub;
          if (!Yb || Lb || null === Sb) return void(wb && pb());
          const hb = Date.now();
          if (!wb || hb - Zb > 54e3) {
            if (wb) {
              const bb = wb;
              bb.fade(bb.getVolume(), 0, 2e3), setTimeout((() => {
                bb.stop()
              }), 2e3)
            }
            wb = Gb.playSound(Ub, "crowdAmbience", Bb, 1), Zb = hb, Xb = Bb
          }
          const Ob = function() {
              if (null === Sb || null === ab || !Yb) return 0;
              const bb = Gb.getPositionView(Yb);
              if (!bb) return 0;
              const ub = Math.abs(bb[2] - Sb),
                hb = Math.abs(bb[2] - ab),
                Bb = Math.min(ub, hb);
              return Math.max(0, 1 - Bb / Hb)
            }(),
            ob = bb / 1e3;
          Xb += (Bb + .6 * Ob - Xb) * Math.min(1, 2 * ob), null === (ub = wb) || void 0 === ub || ub.setRelativeVolume(Xb)
        }
        return {
          onCreate: bb => {
            Gb = bb
          },
          onReceivedMessageFromServer: (bb, ub) => {
            var hb;
            "ballState" === bb ? (Yb = null !== (hb = ub.eId) && void 0 !== hb ? hb : null, Yb || pb()) : "frozen" === bb ? Lb = ub.frozen : "pitchInfo" === bb && (Sb = ub.goalZRed, ab = ub.goalZBlue, Hb = Math.abs(ab - Sb) / 2)
          },
          gH: bb => {
            ob(bb)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);