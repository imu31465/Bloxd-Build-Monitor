export const id = 138;
export const ids = [138];
export const modules = {
  7937: (dd, Jd, kd) => {
    kd.d(Jd, {
      encodeBinaryMessageWithMetricsCookies: () => Nd
    });
    var pd = kd(3624);

    function Nd(dd) {
      return pd.k.toBuffer(dd)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);