export const id = 130;
export const ids = [130];
export const modules = {
  7400: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      encodeBinaryMessageWithMetricsCookies: () => UJ
    });
    var FJ = ZJ(3242);

    function UJ(JJ) {
      return FJ.j.toBuffer(JJ)
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);