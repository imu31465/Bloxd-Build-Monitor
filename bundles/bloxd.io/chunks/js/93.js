export const id = 93;
export const ids = [93];
export const modules = {
  5608: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      reportCarriedGlLossWait: () => Hb
    });
    var eb = Mb(5247);

    function Hb(bb) {
      try {
        (0, eb.c)(bb.message, bb.code, void 0, {}, {})
      } catch (wb) {
        console.warn("Couldn't report the last page's WebGL context wait", wb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);