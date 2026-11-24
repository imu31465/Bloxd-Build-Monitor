export const id = 351;
export const ids = [351];
export const modules = {
  42554: (kk, Fk, Ik) => {
    function Xk(kk) {
      return Math.floor(kk / 8)
    }

    function Tk(kk) {
      return 1 << kk % 8
    }
    Ik.d(Fk, {
      OptimizeIndices: () => yk
    });
    class ik {
      constructor(kk) {
        this.size = kk, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(kk) {
        if (kk >= this.size) throw new RangeError("Bit index out of range");
        const Fk = Xk(kk),
          Ik = Tk(kk);
        return 0 !== (this._byteArray[Fk] & Ik)
      }
      set(kk, Fk) {
        if (kk >= this.size) throw new RangeError("Bit index out of range");
        const Ik = Xk(kk),
          ik = Tk(kk);
        Fk ? this._byteArray[Ik] |= ik : this._byteArray[Ik] &= ~ik
      }
    }

    function yk(kk) {
      const Fk = [],
        Ik = kk.length / 3;
      for (let ik = 0; ik < Ik; ik++) Fk.push([kk[3 * ik], kk[3 * ik + 1], kk[3 * ik + 2]]);
      const Xk = new Map;
      for (let ik = 0; ik < Fk.length; ik++) {
        const kk = Fk[ik];
        for (const Fk of kk) {
          let kk = Xk.get(Fk);
          kk || Xk.set(Fk, kk = []), kk.push(ik)
        }
      }
      const Tk = new ik(Ik),
        yk = [],
        lk = kk => {
          const Ik = [kk];
          for (; Ik.length > 0;) {
            const kk = Ik.pop();
            if (!Tk.get(kk)) {
              Tk.set(kk, !0), yk.push(Fk[kk]);
              for (const ik of Fk[kk]) {
                const kk = Xk.get(ik);
                if (!kk) return;
                for (const Fk of kk) Tk.get(Fk) || Ik.push(Fk)
              }
            }
          }
        };
      for (let ik = 0; ik < Ik; ik++) Tk.get(ik) || lk(ik);
      let ak = 0;
      for (const ik of yk) kk[ak++] = ik[0], kk[ak++] = ik[1], kk[ak++] = ik[2]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);