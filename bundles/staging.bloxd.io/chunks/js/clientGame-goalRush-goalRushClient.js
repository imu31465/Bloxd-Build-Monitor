export const id = 19;
export const ids = [19];
export const modules = {
  40844: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Hb
    });
    const eb = .4,
      Hb = function(bb, wb, Mb, Hb) {
        let pb, {
            localPlayerId: Vb
          } = Hb,
          gb = !1,
          lb = null,
          Lb = null,
          Ib = null,
          Ob = 1,
          Ub = null,
          tb = 0,
          Cb = 0;

        function Eb() {
          if (Ub) {
            const bb = Ub;
            bb.fade(bb.getVolume(), 0, 500), setTimeout((() => {
              bb.stop()
            }), 500), Ub = null
          }
          Cb = 0
        }

        function Fb(bb) {
          var wb;
          if (!lb || gb || null === Lb) return void(Ub && Eb());
          const Mb = Date.now();
          if (!Ub || Mb - tb > 54e3) {
            if (Ub) {
              const bb = Ub;
              bb.fade(bb.getVolume(), 0, 2e3), setTimeout((() => {
                bb.stop()
              }), 2e3)
            }
            Ub = pb.playSound(Vb, "crowdAmbience", eb, 1), tb = Mb, Cb = eb
          }
          const Hb = function() {
              if (null === Lb || null === Ib || !lb) return 0;
              const bb = pb.getPositionView(lb);
              if (!bb) return 0;
              const wb = Math.abs(bb[2] - Lb),
                Mb = Math.abs(bb[2] - Ib),
                eb = Math.min(wb, Mb);
              return Math.max(0, 1 - eb / Ob)
            }(),
            Fb = bb / 1e3;
          Cb += (eb + .6 * Hb - Cb) * Math.min(1, 2 * Fb), null === (wb = Ub) || void 0 === wb || wb.setRelativeVolume(Cb)
        }
        return {
          onCreate: bb => {
            pb = bb
          },
          onReceivedMessageFromServer: (bb, wb) => {
            var Mb;
            "ballState" === bb ? (lb = null !== (Mb = wb.eId) && void 0 !== Mb ? Mb : null, lb || Eb()) : "frozen" === bb ? gb = wb.frozen : "pitchInfo" === bb && (Lb = wb.goalZRed, Ib = wb.goalZBlue, Ob = Math.abs(Ib - Lb) / 2)
          },
          sO: bb => {
            Fb(bb)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);