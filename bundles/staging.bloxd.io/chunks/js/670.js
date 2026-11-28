export const id = 670;
export const ids = [670];
export const modules = {
  54987: (dd, Od, md) => {
    function Wd(dd) {
      return Math.floor(dd / 8)
    }

    function Fd(dd) {
      return 1 << dd % 8
    }
    md.d(Od, {
      OptimizeIndices: () => Xd
    });
    class Rd {
      constructor(dd) {
        this.size = dd, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(dd) {
        if (dd >= this.size) throw new RangeError("Bit index out of range");
        const Od = Wd(dd),
          md = Fd(dd);
        return 0 !== (this._byteArray[Od] & md)
      }
      set(dd, Od) {
        if (dd >= this.size) throw new RangeError("Bit index out of range");
        const md = Wd(dd),
          Rd = Fd(dd);
        Od ? this._byteArray[md] |= Rd : this._byteArray[md] &= ~Rd
      }
    }

    function Xd(dd) {
      const Od = [],
        md = dd.length / 3;
      for (let Rd = 0; Rd < md; Rd++) Od.push([dd[3 * Rd], dd[3 * Rd + 1], dd[3 * Rd + 2]]);
      const Wd = new Map;
      for (let Rd = 0; Rd < Od.length; Rd++) {
        const dd = Od[Rd];
        for (const Od of dd) {
          let dd = Wd.get(Od);
          dd || Wd.set(Od, dd = []), dd.push(Rd)
        }
      }
      const Fd = new Rd(md),
        Xd = [],
        Kd = dd => {
          const md = [dd];
          for (; md.length > 0;) {
            const dd = md.pop();
            if (!Fd.get(dd)) {
              Fd.set(dd, !0), Xd.push(Od[dd]);
              for (const Rd of Od[dd]) {
                const dd = Wd.get(Rd);
                if (!dd) return;
                for (const Od of dd) Fd.get(Od) || md.push(Od)
              }
            }
          }
        };
      for (let Rd = 0; Rd < md; Rd++) Fd.get(Rd) || Kd(Rd);
      let hd = 0;
      for (const Rd of Xd) dd[hd++] = Rd[0], dd[hd++] = Rd[1], dd[hd++] = Rd[2]
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);