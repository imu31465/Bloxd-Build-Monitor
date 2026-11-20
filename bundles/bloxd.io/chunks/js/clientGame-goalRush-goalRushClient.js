export const id = 18;
export const ids = [18];
export const modules = {
  39010: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => Wb
    });
    const kb = .4,
      Wb = function(bb, cb, sb, Wb) {
        let ab, {
            localPlayerId: Tb
          } = Wb,
          Ub = !1,
          Ib = null,
          Hb = null,
          fb = null,
          Mb = 1,
          Xb = null,
          nb = 0,
          mb = 0;

        function lb() {
          if (Xb) {
            const bb = Xb;
            bb.fade(bb.getVolume(), 0, 500), setTimeout((() => {
              bb.stop()
            }), 500), Xb = null
          }
          mb = 0
        }

        function Qb(bb) {
          var cb;
          if (!Ib || Ub || null === Hb) return void(Xb && lb());
          const sb = Date.now();
          if (!Xb || sb - nb > 54e3) {
            if (Xb) {
              const bb = Xb;
              bb.fade(bb.getVolume(), 0, 2e3), setTimeout((() => {
                bb.stop()
              }), 2e3)
            }
            Xb = ab.playSound(Tb, "crowdAmbience", kb, 1), nb = sb, mb = kb
          }
          const Wb = function() {
              if (null === Hb || null === fb || !Ib) return 0;
              const bb = ab.getPositionView(Ib);
              if (!bb) return 0;
              const cb = Math.abs(bb[2] - Hb),
                sb = Math.abs(bb[2] - fb),
                kb = Math.min(cb, sb);
              return Math.max(0, 1 - kb / Mb)
            }(),
            Qb = bb / 1e3;
          mb += (kb + .6 * Wb - mb) * Math.min(1, 2 * Qb), null === (cb = Xb) || void 0 === cb || cb.setRelativeVolume(mb)
        }
        return {
          onCreate: bb => {
            ab = bb
          },
          onReceivedMessageFromServer: (bb, cb) => {
            var sb;
            "ballState" === bb ? (Ib = null !== (sb = cb.eId) && void 0 !== sb ? sb : null, Ib || lb()) : "frozen" === bb ? Ub = cb.frozen : "pitchInfo" === bb && (Hb = cb.goalZRed, fb = cb.goalZBlue, Mb = Math.abs(fb - Hb) / 2)
          },
          aX: bb => {
            Qb(bb)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);