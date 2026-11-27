export const id = 93;
export const ids = [93];
export const modules = {
  5599: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      reportCarriedGlLossWait: () => tR
    });
    var yR = GR(5203);

    function tR(RR) {
      try {
        (0, yR.c)(RR.message, RR.code, void 0, {}, {})
      } catch (JR) {
        console.warn("Couldn't report the last page's WebGL context wait", JR)
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);