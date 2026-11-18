export const id = 130;
export const ids = [130];
export const modules = {
  7406: (BB, TB, dB) => {
    dB.d(TB, {
      encodeBinaryMessageWithMetricsCookies: () => yB
    });
    var VB = dB(3249);

    function yB(BB) {
      return VB.j.toBuffer(BB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);