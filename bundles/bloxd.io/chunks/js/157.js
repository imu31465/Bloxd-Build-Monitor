export const id = 157;
export const ids = [157];
export const modules = {
  7230: (HH, BH, LH) => {
    LH.d(BH, {
      encodeBinaryMessageWithMetricsCookies: () => rH
    });
    var AH = LH(4113);

    function rH(HH) {
      return AH.m.toBuffer(HH)
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);