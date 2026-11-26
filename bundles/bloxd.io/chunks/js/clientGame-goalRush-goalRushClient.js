export const id = 19;
export const ids = [19];
export const modules = {
  40667: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => YV
    });
    const JV = .4,
      YV = function(VV, eV, xV, YV) {
        let UV, {
            localPlayerId: yV
          } = YV,
          pV = !1,
          QV = null,
          nV = null,
          wV = null,
          ZV = 1,
          vV = null,
          rV = 0,
          kV = 0;

        function bV() {
          if (vV) {
            const VV = vV;
            VV.fade(VV.getVolume(), 0, 500), setTimeout((() => {
              VV.stop()
            }), 500), vV = null
          }
          kV = 0
        }

        function EV(VV) {
          var eV;
          if (!QV || pV || null === nV) return void(vV && bV());
          const xV = Date.now();
          if (!vV || xV - rV > 54e3) {
            if (vV) {
              const VV = vV;
              VV.fade(VV.getVolume(), 0, 2e3), setTimeout((() => {
                VV.stop()
              }), 2e3)
            }
            vV = UV.playSound(yV, "crowdAmbience", JV, 1), rV = xV, kV = JV
          }
          const YV = function() {
              if (null === nV || null === wV || !QV) return 0;
              const VV = UV.getPositionView(QV);
              if (!VV) return 0;
              const eV = Math.abs(VV[2] - nV),
                xV = Math.abs(VV[2] - wV),
                JV = Math.min(eV, xV);
              return Math.max(0, 1 - JV / ZV)
            }(),
            EV = VV / 1e3;
          kV += (JV + .6 * YV - kV) * Math.min(1, 2 * EV), null === (eV = vV) || void 0 === eV || eV.setRelativeVolume(kV)
        }
        return {
          onCreate: VV => {
            UV = VV
          },
          onReceivedMessageFromServer: (VV, eV) => {
            var xV;
            "ballState" === VV ? (QV = null !== (xV = eV.eId) && void 0 !== xV ? xV : null, QV || bV()) : "frozen" === VV ? pV = eV.frozen : "pitchInfo" === VV && (nV = eV.goalZRed, wV = eV.goalZBlue, ZV = Math.abs(wV - nV) / 2)
          },
          iZ: VV => {
            EV(VV)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);