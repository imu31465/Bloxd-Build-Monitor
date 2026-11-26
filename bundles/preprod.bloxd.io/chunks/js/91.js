export const id = 91;
export const ids = [91];
export const modules = {
  5217: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      reportCarriedGlLossWait: () => yU
    });
    var cU = zU(4818);

    function yU(UU) {
      try {
        (0, cU.c)(UU.message, UU.code, void 0, {}, {})
      } catch (XU) {
        console.warn("Couldn't report the last page's WebGL context wait", XU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);