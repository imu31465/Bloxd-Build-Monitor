export const id = 91;
export const ids = [91];
export const modules = {
  5109: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      reportCarriedGlLossWait: () => SM
    });
    var OM = iM(4773);

    function SM(MM) {
      try {
        (0, OM.b)(MM.message, MM.code, void 0, {}, {})
      } catch (rM) {
        console.warn("Couldn't report the last page's WebGL context wait", rM)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);