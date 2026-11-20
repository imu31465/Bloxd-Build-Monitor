export const id = 18;
export const ids = [18];
export const modules = {
  38900: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => Sv
    });
    const hv = .4,
      Sv = function(vv, zv, Pv, Sv) {
        let ev, {
            localPlayerId: gv
          } = Sv,
          pv = !1,
          dv = null,
          Nv = null,
          lv = null,
          Tv = 1,
          Wv = null,
          wv = 0,
          av = 0;

        function sv() {
          if (Wv) {
            const vv = Wv;
            vv.fade(vv.getVolume(), 0, 500), setTimeout((() => {
              vv.stop()
            }), 500), Wv = null
          }
          av = 0
        }

        function Cv(vv) {
          var zv;
          if (!dv || pv || null === Nv) return void(Wv && sv());
          const Pv = Date.now();
          if (!Wv || Pv - wv > 54e3) {
            if (Wv) {
              const vv = Wv;
              vv.fade(vv.getVolume(), 0, 2e3), setTimeout((() => {
                vv.stop()
              }), 2e3)
            }
            Wv = ev.playSound(gv, "crowdAmbience", hv, 1), wv = Pv, av = hv
          }
          const Sv = function() {
              if (null === Nv || null === lv || !dv) return 0;
              const vv = ev.getPositionView(dv);
              if (!vv) return 0;
              const zv = Math.abs(vv[2] - Nv),
                Pv = Math.abs(vv[2] - lv),
                hv = Math.min(zv, Pv);
              return Math.max(0, 1 - hv / Tv)
            }(),
            Cv = vv / 1e3;
          av += (hv + .6 * Sv - av) * Math.min(1, 2 * Cv), null === (zv = Wv) || void 0 === zv || zv.setRelativeVolume(av)
        }
        return {
          onCreate: vv => {
            ev = vv
          },
          onReceivedMessageFromServer: (vv, zv) => {
            var Pv;
            "ballState" === vv ? (dv = null !== (Pv = zv.eId) && void 0 !== Pv ? Pv : null, dv || sv()) : "frozen" === vv ? pv = zv.frozen : "pitchInfo" === vv && (Nv = zv.goalZRed, lv = zv.goalZBlue, Tv = Math.abs(lv - Nv) / 2)
          },
          MT: vv => {
            Cv(vv)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);