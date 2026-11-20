export const id = 137;
export const ids = [137];
export const modules = {
  7769: (vv, zv, Pv) => {
    Pv.d(zv, {
      encodeBinaryMessageWithMetricsCookies: () => Sv
    });
    var hv = Pv(3539);

    function Sv(vv) {
      return hv.h.toBuffer(vv)
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);