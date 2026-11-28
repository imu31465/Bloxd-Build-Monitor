export const id = 164;
export const ids = [164];
export const modules = {
  7872: (bb, wb, Mb) => {
    Mb.d(wb, {
      encodeBinaryMessageWithMetricsCookies: () => Hb
    });
    var eb = Mb(2550);

    function Hb(bb) {
      return eb.h.toBuffer(bb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);