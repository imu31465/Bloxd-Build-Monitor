export const id = 16;
export const ids = [16];
export const modules = {
  40811: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Hb
    });
    const eb = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      Hb = function(bb, wb, Mb) {
        let Hb;
        return {
          onCreate: bb => {
            Hb = bb
          },
          onPlayerAltAction: (bb, wb, Mb, pb, Vb, gb) => {
            eb.some((bb => bb[0] === wb && bb[2] === pb)) && Hb.openShop(bb, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);