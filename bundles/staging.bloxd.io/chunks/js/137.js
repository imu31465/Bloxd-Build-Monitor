export const id = 137;
export const ids = [137];
export const modules = {
  7653: (bb, ab, Ub) => {
    Ub.d(ab, {
      encodeBinaryMessageWithMetricsCookies: () => Mb
    });
    var Ab = Ub(3433);

    function Mb(bb) {
      return Ab.k.toBuffer(bb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);