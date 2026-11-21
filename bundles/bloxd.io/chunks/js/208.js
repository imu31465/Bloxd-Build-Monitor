export const id = 208;
export const ids = [208];
export const modules = {
  36446: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      reportCappedWasmFailure: () => Zd,
      reportUncappedWasmFailure: () => Pd,
      reportWasmFailure: () => Wd
    });
    var pd = kd(2812);
    const Nd = pd.b - 4;

    function Wd(dd, Jd, kd) {
      (0, pd.f)(dd, Jd, kd, !1)
    }

    function Pd(dd, Jd, kd) {
      (0, pd.f)(dd, Jd, kd, !1, 1 / 0)
    }

    function Zd(dd, Jd, kd) {
      (0, pd.f)(dd, Jd, kd, !1, Nd)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);