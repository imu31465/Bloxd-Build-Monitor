export const id = 93;
export const ids = [93];
export const modules = {
  5471: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      reportCarriedGlLossWait: () => Fd
    });
    var Wd = md(5072);

    function Fd(dd) {
      try {
        (0, Wd.b)(dd.message, dd.code, void 0, {}, {})
      } catch (Od) {
        console.warn("Couldn't report the last page's WebGL context wait", Od)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);