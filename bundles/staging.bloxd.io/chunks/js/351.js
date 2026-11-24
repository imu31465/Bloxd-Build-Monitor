export const id = 351;
export const ids = [351];
export const modules = {
  42584: (mm, Tm, fm) => {
    function hm(mm) {
      return Math.floor(mm / 8)
    }

    function Am(mm) {
      return 1 << mm % 8
    }
    fm.d(Tm, {
      OptimizeIndices: () => xm
    });
    class am {
      constructor(mm) {
        this.size = mm, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(mm) {
        if (mm >= this.size) throw new RangeError("Bit index out of range");
        const Tm = hm(mm),
          fm = Am(mm);
        return 0 !== (this._byteArray[Tm] & fm)
      }
      set(mm, Tm) {
        if (mm >= this.size) throw new RangeError("Bit index out of range");
        const fm = hm(mm),
          am = Am(mm);
        Tm ? this._byteArray[fm] |= am : this._byteArray[fm] &= ~am
      }
    }

    function xm(mm) {
      const Tm = [],
        fm = mm.length / 3;
      for (let am = 0; am < fm; am++) Tm.push([mm[3 * am], mm[3 * am + 1], mm[3 * am + 2]]);
      const hm = new Map;
      for (let am = 0; am < Tm.length; am++) {
        const mm = Tm[am];
        for (const Tm of mm) {
          let mm = hm.get(Tm);
          mm || hm.set(Tm, mm = []), mm.push(am)
        }
      }
      const Am = new am(fm),
        xm = [],
        wm = mm => {
          const fm = [mm];
          for (; fm.length > 0;) {
            const mm = fm.pop();
            if (!Am.get(mm)) {
              Am.set(mm, !0), xm.push(Tm[mm]);
              for (const am of Tm[mm]) {
                const mm = hm.get(am);
                if (!mm) return;
                for (const Tm of mm) Am.get(Tm) || fm.push(Tm)
              }
            }
          }
        };
      for (let am = 0; am < fm; am++) Am.get(am) || wm(am);
      let Dm = 0;
      for (const am of xm) mm[Dm++] = am[0], mm[Dm++] = am[1], mm[Dm++] = am[2]
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);