export const id = 18;
export const ids = [18];
export const modules = {
  39568: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => Am
    });
    const hm = .4,
      Am = function(mm, Tm, fm, Am) {
        let am, {
            localPlayerId: xm
          } = Am,
          wm = !1,
          Dm = null,
          im = null,
          Rm = null,
          pm = 1,
          Em = null,
          om = 0,
          Om = 0;

        function Ym() {
          if (Em) {
            const mm = Em;
            mm.fade(mm.getVolume(), 0, 500), setTimeout((() => {
              mm.stop()
            }), 500), Em = null
          }
          Om = 0
        }

        function qm(mm) {
          var Tm;
          if (!Dm || wm || null === im) return void(Em && Ym());
          const fm = Date.now();
          if (!Em || fm - om > 54e3) {
            if (Em) {
              const mm = Em;
              mm.fade(mm.getVolume(), 0, 2e3), setTimeout((() => {
                mm.stop()
              }), 2e3)
            }
            Em = am.playSound(xm, "crowdAmbience", hm, 1), om = fm, Om = hm
          }
          const Am = function() {
              if (null === im || null === Rm || !Dm) return 0;
              const mm = am.getPositionView(Dm);
              if (!mm) return 0;
              const Tm = Math.abs(mm[2] - im),
                fm = Math.abs(mm[2] - Rm),
                hm = Math.min(Tm, fm);
              return Math.max(0, 1 - hm / pm)
            }(),
            qm = mm / 1e3;
          Om += (hm + .6 * Am - Om) * Math.min(1, 2 * qm), null === (Tm = Em) || void 0 === Tm || Tm.setRelativeVolume(Om)
        }
        return {
          onCreate: mm => {
            am = mm
          },
          onReceivedMessageFromServer: (mm, Tm) => {
            var fm;
            "ballState" === mm ? (Dm = null !== (fm = Tm.eId) && void 0 !== fm ? fm : null, Dm || Ym()) : "frozen" === mm ? wm = Tm.frozen : "pitchInfo" === mm && (im = Tm.goalZRed, Rm = Tm.goalZBlue, pm = Math.abs(Rm - im) / 2)
          },
          DE: mm => {
            qm(mm)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);