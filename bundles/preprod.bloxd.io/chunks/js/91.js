export const id = 91;
export const ids = [91];
export const modules = {
  5180: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      reportCarriedGlLossWait: () => rH
    });
    var AH = LH(4806);

    function rH(HH) {
      try {
        (0, AH.e)(HH.message, HH.code, void 0, {}, {})
      } catch (BH) {
        console.warn("Couldn't report the last page's WebGL context wait", BH)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);