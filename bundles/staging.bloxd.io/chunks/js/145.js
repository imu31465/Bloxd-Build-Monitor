export const id = 145;
export const ids = [145];
export const modules = {
  8303: (tt, et, Vt) => {
    Vt.d(et, {
      encodeBinaryMessageWithMetricsCookies: () => qt
    });
    var Ot = Vt(3820);

    function qt(tt) {
      return Ot.l.toBuffer(tt)
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);