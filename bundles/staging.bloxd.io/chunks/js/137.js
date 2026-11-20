export const id = 137;
export const ids = [137];
export const modules = {
  7724: (UU, RU, gU) => {
    gU.d(RU, {
      encodeBinaryMessageWithMetricsCookies: () => pU
    });
    var tU = gU(3420);

    function pU(UU) {
      return tU.l.toBuffer(UU)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);