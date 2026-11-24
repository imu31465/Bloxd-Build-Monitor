export const id = 18;
export const ids = [18];
export const modules = {
  39631: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => op
    });
    const Op = .4,
      op = function(pp, ip, cp, op) {
        let Ip, {
            localPlayerId: Sp
          } = op,
          xp = !1,
          Lp = null,
          Yp = null,
          Dp = null,
          Ap = 1,
          Pp = null,
          Wp = 0,
          yp = 0;

        function Up() {
          if (Pp) {
            const pp = Pp;
            pp.fade(pp.getVolume(), 0, 500), setTimeout((() => {
              pp.stop()
            }), 500), Pp = null
          }
          yp = 0
        }

        function wp(pp) {
          var ip;
          if (!Lp || xp || null === Yp) return void(Pp && Up());
          const cp = Date.now();
          if (!Pp || cp - Wp > 54e3) {
            if (Pp) {
              const pp = Pp;
              pp.fade(pp.getVolume(), 0, 2e3), setTimeout((() => {
                pp.stop()
              }), 2e3)
            }
            Pp = Ip.playSound(Sp, "crowdAmbience", Op, 1), Wp = cp, yp = Op
          }
          const op = function() {
              if (null === Yp || null === Dp || !Lp) return 0;
              const pp = Ip.getPositionView(Lp);
              if (!pp) return 0;
              const ip = Math.abs(pp[2] - Yp),
                cp = Math.abs(pp[2] - Dp),
                Op = Math.min(ip, cp);
              return Math.max(0, 1 - Op / Ap)
            }(),
            wp = pp / 1e3;
          yp += (Op + .6 * op - yp) * Math.min(1, 2 * wp), null === (ip = Pp) || void 0 === ip || ip.setRelativeVolume(yp)
        }
        return {
          onCreate: pp => {
            Ip = pp
          },
          onReceivedMessageFromServer: (pp, ip) => {
            var cp;
            "ballState" === pp ? (Lp = null !== (cp = ip.eId) && void 0 !== cp ? cp : null, Lp || Up()) : "frozen" === pp ? xp = ip.frozen : "pitchInfo" === pp && (Yp = ip.goalZRed, Dp = ip.goalZBlue, Ap = Math.abs(Dp - Yp) / 2)
          },
          LP: pp => {
            wp(pp)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);