export const id = 145;
export const ids = [145];
export const modules = {
  8212: (pp, ip, cp) => {
    cp.d(ip, {
      encodeBinaryMessageWithMetricsCookies: () => op
    });
    var Op = cp(3837);

    function op(pp) {
      return Op.h.toBuffer(pp)
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);