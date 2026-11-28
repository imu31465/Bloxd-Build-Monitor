export const id = 164;
export const ids = [164];
export const modules = {
  7620: (dd, Od, md) => {
    md.d(Od, {
      encodeBinaryMessageWithMetricsCookies: () => Fd
    });
    var Wd = md(2497);

    function Fd(dd) {
      return Wd.j.toBuffer(dd)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);