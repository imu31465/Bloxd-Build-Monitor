export const id = 18;
export const ids = [18];
export const modules = {
  38657: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => Mb
    });
    const Ab = .4,
      Mb = function(bb, ab, Ub, Mb) {
        let Tb, {
            localPlayerId: Eb
          } = Mb,
          Yb = !1,
          Bb = null,
          eb = null,
          vb = null,
          Lb = 1,
          Pb = null,
          Xb = 0,
          jb = 0;

        function Rb() {
          if (Pb) {
            const bb = Pb;
            bb.fade(bb.getVolume(), 0, 500), setTimeout((() => {
              bb.stop()
            }), 500), Pb = null
          }
          jb = 0
        }

        function kb(bb) {
          var ab;
          if (!Bb || Yb || null === eb) return void(Pb && Rb());
          const Ub = Date.now();
          if (!Pb || Ub - Xb > 54e3) {
            if (Pb) {
              const bb = Pb;
              bb.fade(bb.getVolume(), 0, 2e3), setTimeout((() => {
                bb.stop()
              }), 2e3)
            }
            Pb = Tb.playSound(Eb, "crowdAmbience", Ab, 1), Xb = Ub, jb = Ab
          }
          const Mb = function() {
              if (null === eb || null === vb || !Bb) return 0;
              const bb = Tb.getPositionView(Bb);
              if (!bb) return 0;
              const ab = Math.abs(bb[2] - eb),
                Ub = Math.abs(bb[2] - vb),
                Ab = Math.min(ab, Ub);
              return Math.max(0, 1 - Ab / Lb)
            }(),
            kb = bb / 1e3;
          jb += (Ab + .6 * Mb - jb) * Math.min(1, 2 * kb), null === (ab = Pb) || void 0 === ab || ab.setRelativeVolume(jb)
        }
        return {
          onCreate: bb => {
            Tb = bb
          },
          onReceivedMessageFromServer: (bb, ab) => {
            var Ub;
            "ballState" === bb ? (Bb = null !== (Ub = ab.eId) && void 0 !== Ub ? Ub : null, Bb || Rb()) : "frozen" === bb ? Yb = ab.frozen : "pitchInfo" === bb && (eb = ab.goalZRed, vb = ab.goalZBlue, Lb = Math.abs(vb - eb) / 2)
          },
          qL: bb => {
            kb(bb)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);