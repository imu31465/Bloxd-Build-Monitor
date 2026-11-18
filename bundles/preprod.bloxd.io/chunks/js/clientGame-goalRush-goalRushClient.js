export const id = 18;
export const ids = [18];
export const modules = {
  38060: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => hy
    });
    const Uy = .4,
      hy = function(yb, bb, Wy, hy) {
        let fy, {
            localPlayerId: Zy
          } = hy,
          cb = !1,
          Py = null,
          oy = null,
          By = null,
          Ky = 1,
          ey = null,
          qb = 0,
          sy = 0;

        function Sy() {
          if (ey) {
            const yb = ey;
            yb.fade(yb.getVolume(), 0, 500), setTimeout((() => {
              yb.stop()
            }), 500), ey = null
          }
          sy = 0
        }

        function Ey(yb) {
          var bb;
          if (!Py || cb || null === oy) return void(ey && Sy());
          const Wy = Date.now();
          if (!ey || Wy - qb > 54e3) {
            if (ey) {
              const yb = ey;
              yb.fade(yb.getVolume(), 0, 2e3), setTimeout((() => {
                yb.stop()
              }), 2e3)
            }
            ey = fy.playSound(Zy, "crowdAmbience", Uy, 1), qb = Wy, sy = Uy
          }
          const hy = function() {
              if (null === oy || null === By || !Py) return 0;
              const yb = fy.getPositionView(Py);
              if (!yb) return 0;
              const bb = Math.abs(yb[2] - oy),
                Wy = Math.abs(yb[2] - By),
                Uy = Math.min(bb, Wy);
              return Math.max(0, 1 - Uy / Ky)
            }(),
            Ey = yb / 1e3;
          sy += (Uy + .6 * hy - sy) * Math.min(1, 2 * Ey), null === (bb = ey) || void 0 === bb || bb.setRelativeVolume(sy)
        }
        return {
          onCreate: yb => {
            fy = yb
          },
          onReceivedMessageFromServer: (yb, bb) => {
            var Wy;
            "ballState" === yb ? (Py = null !== (Wy = bb.eId) && void 0 !== Wy ? Wy : null, Py || Sy()) : "frozen" === yb ? cb = bb.frozen : "pitchInfo" === yb && (oy = bb.goalZRed, By = bb.goalZBlue, Ky = Math.abs(By - oy) / 2)
          },
          Zb: yb => {
            Ey(yb)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);