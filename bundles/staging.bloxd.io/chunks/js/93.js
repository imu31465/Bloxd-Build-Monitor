export const id = 93;
export const ids = [93];
export const modules = {
  5523: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      reportCarriedGlLossWait: () => Wr
    });
    var Zr = Qr(5129);

    function Wr(rr) {
      try {
        (0, Zr.c)(rr.message, rr.code, void 0, {}, {})
      } catch (Sr) {
        console.warn("Couldn't report the last page's WebGL context wait", Sr)
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);