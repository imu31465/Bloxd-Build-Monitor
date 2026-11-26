export const id = 91;
export const ids = [91];
export const modules = {
  5195: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      reportCarriedGlLossWait: () => DB
    });
    var YB = GB(4830);

    function DB(BB) {
      try {
        (0, YB.e)(BB.message, BB.code, void 0, {}, {})
      } catch (OB) {
        console.warn("Couldn't report the last page's WebGL context wait", OB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);