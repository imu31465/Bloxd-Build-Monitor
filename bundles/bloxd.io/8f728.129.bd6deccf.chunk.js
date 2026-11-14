export const id = 129;
export const ids = [129];
export const modules = {
  6966: (cB, Bc, nc) => {
    nc.d(Bc, {
      encodeBinaryMessageWithMetricsCookies: () => Ic
    });
    var Vc = nc(2903);

    function Ic(cB) {
      return Vc.k.toBuffer(cB)
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);