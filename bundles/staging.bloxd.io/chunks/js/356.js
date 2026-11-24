export const id = 356;
export const ids = [356];
export const modules = {
  42791: (tt, et, Vt) => {
    function Ot(tt) {
      return Math.floor(tt / 8)
    }

    function qt(tt) {
      return 1 << tt % 8
    }
    Vt.d(et, {
      OptimizeIndices: () => mt
    });
    class Dt {
      constructor(tt) {
        this.size = tt, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(tt) {
        if (tt >= this.size) throw new RangeError("Bit index out of range");
        const et = Ot(tt),
          Vt = qt(tt);
        return 0 !== (this._byteArray[et] & Vt)
      }
      set(tt, et) {
        if (tt >= this.size) throw new RangeError("Bit index out of range");
        const Vt = Ot(tt),
          Dt = qt(tt);
        et ? this._byteArray[Vt] |= Dt : this._byteArray[Vt] &= ~Dt
      }
    }

    function mt(tt) {
      const et = [],
        Vt = tt.length / 3;
      for (let Dt = 0; Dt < Vt; Dt++) et.push([tt[3 * Dt], tt[3 * Dt + 1], tt[3 * Dt + 2]]);
      const Ot = new Map;
      for (let Dt = 0; Dt < et.length; Dt++) {
        const tt = et[Dt];
        for (const et of tt) {
          let tt = Ot.get(et);
          tt || Ot.set(et, tt = []), tt.push(Dt)
        }
      }
      const qt = new Dt(Vt),
        mt = [],
        dt = tt => {
          const Vt = [tt];
          for (; Vt.length > 0;) {
            const tt = Vt.pop();
            if (!qt.get(tt)) {
              qt.set(tt, !0), mt.push(et[tt]);
              for (const Dt of et[tt]) {
                const tt = Ot.get(Dt);
                if (!tt) return;
                for (const et of tt) qt.get(et) || Vt.push(et)
              }
            }
          }
        };
      for (let Dt = 0; Dt < Vt; Dt++) qt.get(Dt) || dt(Dt);
      let jt = 0;
      for (const Dt of mt) tt[jt++] = Dt[0], tt[jt++] = Dt[1], tt[jt++] = Dt[2]
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);