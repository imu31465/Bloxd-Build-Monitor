export const id = 157;
export const ids = [157];
export const modules = {
  7218: (BB, OB, GB) => {
    GB.d(OB, {
      encodeBinaryMessageWithMetricsCookies: () => DB
    });
    var YB = GB(4166);

    function DB(BB) {
      return YB.k.toBuffer(BB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);