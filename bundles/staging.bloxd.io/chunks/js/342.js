export const id = 342;
export const ids = [342];
export const modules = {
  42462: (dd, Jd, kd) => {
    function pd(dd) {
      return Math.floor(dd / 8)
    }

    function Nd(dd) {
      return 1 << dd % 8
    }
    kd.d(Jd, {
      OptimizeIndices: () => Pd
    });
    class Wd {
      constructor(dd) {
        this.size = dd, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(dd) {
        if (dd >= this.size) throw new RangeError("Bit index out of range");
        const Jd = pd(dd),
          kd = Nd(dd);
        return 0 !== (this._byteArray[Jd] & kd)
      }
      set(dd, Jd) {
        if (dd >= this.size) throw new RangeError("Bit index out of range");
        const kd = pd(dd),
          Wd = Nd(dd);
        Jd ? this._byteArray[kd] |= Wd : this._byteArray[kd] &= ~Wd
      }
    }

    function Pd(dd) {
      const Jd = [],
        kd = dd.length / 3;
      for (let Wd = 0; Wd < kd; Wd++) Jd.push([dd[3 * Wd], dd[3 * Wd + 1], dd[3 * Wd + 2]]);
      const pd = new Map;
      for (let Wd = 0; Wd < Jd.length; Wd++) {
        const dd = Jd[Wd];
        for (const Jd of dd) {
          let dd = pd.get(Jd);
          dd || pd.set(Jd, dd = []), dd.push(Wd)
        }
      }
      const Nd = new Wd(kd),
        Pd = [],
        Zd = dd => {
          const kd = [dd];
          for (; kd.length > 0;) {
            const dd = kd.pop();
            if (!Nd.get(dd)) {
              Nd.set(dd, !0), Pd.push(Jd[dd]);
              for (const Wd of Jd[dd]) {
                const dd = pd.get(Wd);
                if (!dd) return;
                for (const Jd of dd) Nd.get(Jd) || kd.push(Jd)
              }
            }
          }
        };
      for (let Wd = 0; Wd < kd; Wd++) Nd.get(Wd) || Zd(Wd);
      let gd = 0;
      for (const Wd of Pd) dd[gd++] = Wd[0], dd[gd++] = Wd[1], dd[gd++] = Wd[2]
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);