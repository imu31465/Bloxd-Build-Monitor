export const id = 91;
export const ids = [91];
export const modules = {
  5188: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      reportCarriedGlLossWait: () => be
    });
    var ye = He(4795);

    function be(ee) {
      try {
        (0, ye.b)(ee.message, ee.code, void 0, {}, {})
      } catch (ie) {
        console.warn("Couldn't report the last page's WebGL context wait", ie)
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);