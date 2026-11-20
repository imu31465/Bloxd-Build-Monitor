export const id = 341;
export const ids = [341];
export const modules = {
  41970: (kk, Fk, Bk) => {
    function Rk(kk) {
      return Math.floor(kk / 8)
    }

    function tk(kk) {
      return 1 << kk % 8
    }
    Bk.d(Fk, {
      OptimizeIndices: () => Xk
    });
    class ak {
      constructor(kk) {
        this.size = kk, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(kk) {
        if (kk >= this.size) throw new RangeError("Bit index out of range");
        const Fk = Rk(kk),
          Bk = tk(kk);
        return 0 !== (this._byteArray[Fk] & Bk)
      }
      set(kk, Fk) {
        if (kk >= this.size) throw new RangeError("Bit index out of range");
        const Bk = Rk(kk),
          ak = tk(kk);
        Fk ? this._byteArray[Bk] |= ak : this._byteArray[Bk] &= ~ak
      }
    }

    function Xk(kk) {
      const Fk = [],
        Bk = kk.length / 3;
      for (let ak = 0; ak < Bk; ak++) Fk.push([kk[3 * ak], kk[3 * ak + 1], kk[3 * ak + 2]]);
      const Rk = new Map;
      for (let ak = 0; ak < Fk.length; ak++) {
        const kk = Fk[ak];
        for (const Fk of kk) {
          let kk = Rk.get(Fk);
          kk || Rk.set(Fk, kk = []), kk.push(ak)
        }
      }
      const tk = new ak(Bk),
        Xk = [],
        bk = kk => {
          const Bk = [kk];
          for (; Bk.length > 0;) {
            const kk = Bk.pop();
            if (!tk.get(kk)) {
              tk.set(kk, !0), Xk.push(Fk[kk]);
              for (const ak of Fk[kk]) {
                const kk = Rk.get(ak);
                if (!kk) return;
                for (const Fk of kk) tk.get(Fk) || Bk.push(Fk)
              }
            }
          }
        };
      for (let ak = 0; ak < Bk; ak++) tk.get(ak) || bk(ak);
      let wk = 0;
      for (const ak of Xk) kk[wk++] = ak[0], kk[wk++] = ak[1], kk[wk++] = ak[2]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);