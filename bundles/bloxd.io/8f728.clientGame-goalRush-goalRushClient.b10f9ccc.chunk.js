export const id = 17;
export const ids = [17];
export const modules = {
  37737: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => Ic
    });
    const Vc = .4,
      Ic = function(cB, Bc, nc, Ic) {
        let rB, {
            localPlayerId: uc
          } = Ic,
          sc = !1,
          Mc = null,
          Pc = null,
          qB = null,
          Oc = 1,
          Tc = null,
          fc = 0,
          mB = 0;

        function ec() {
          if (Tc) {
            const cB = Tc;
            cB.fade(cB.getVolume(), 0, 500), setTimeout((() => {
              cB.stop()
            }), 500), Tc = null
          }
          mB = 0
        }

        function tB(cB) {
          var Bc;
          if (!Mc || sc || null === Pc) return void(Tc && ec());
          const nc = Date.now();
          if (!Tc || nc - fc > 54e3) {
            if (Tc) {
              const cB = Tc;
              cB.fade(cB.getVolume(), 0, 2e3), setTimeout((() => {
                cB.stop()
              }), 2e3)
            }
            Tc = rB.playSound(uc, "crowdAmbience", Vc, 1), fc = nc, mB = Vc
          }
          const Ic = function() {
              if (null === Pc || null === qB || !Mc) return 0;
              const cB = rB.getPositionView(Mc);
              if (!cB) return 0;
              const Bc = Math.abs(cB[2] - Pc),
                nc = Math.abs(cB[2] - qB),
                Vc = Math.min(Bc, nc);
              return Math.max(0, 1 - Vc / Oc)
            }(),
            tB = cB / 1e3;
          mB += (Vc + .6 * Ic - mB) * Math.min(1, 2 * tB), null === (Bc = Tc) || void 0 === Bc || Bc.setRelativeVolume(mB)
        }
        return {
          onCreate: cB => {
            rB = cB
          },
          onReceivedMessageFromServer: (cB, Bc) => {
            var nc;
            "ballState" === cB ? (Mc = null !== (nc = Bc.eId) && void 0 !== nc ? nc : null, Mc || ec()) : "frozen" === cB ? sc = Bc.frozen : "pitchInfo" === cB && (Pc = Bc.goalZRed, qB = Bc.goalZBlue, Oc = Math.abs(qB - Pc) / 2)
          },
          cn: cB => {
            tB(cB)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);