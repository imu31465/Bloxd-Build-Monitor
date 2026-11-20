export const id = 342;
export const ids = [342];
export const modules = {
  42086: (TT, kT, cT) => {
    function lT(TT) {
      return Math.floor(TT / 8)
    }

    function MT(TT) {
      return 1 << TT % 8
    }
    cT.d(kT, {
      OptimizeIndices: () => OT
    });
    class KT {
      constructor(TT) {
        this.size = TT, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(TT) {
        if (TT >= this.size) throw new RangeError("Bit index out of range");
        const kT = lT(TT),
          cT = MT(TT);
        return 0 !== (this._byteArray[kT] & cT)
      }
      set(TT, kT) {
        if (TT >= this.size) throw new RangeError("Bit index out of range");
        const cT = lT(TT),
          KT = MT(TT);
        kT ? this._byteArray[cT] |= KT : this._byteArray[cT] &= ~KT
      }
    }

    function OT(TT) {
      const kT = [],
        cT = TT.length / 3;
      for (let KT = 0; KT < cT; KT++) kT.push([TT[3 * KT], TT[3 * KT + 1], TT[3 * KT + 2]]);
      const lT = new Map;
      for (let KT = 0; KT < kT.length; KT++) {
        const TT = kT[KT];
        for (const kT of TT) {
          let TT = lT.get(kT);
          TT || lT.set(kT, TT = []), TT.push(KT)
        }
      }
      const MT = new KT(cT),
        OT = [],
        yT = TT => {
          const cT = [TT];
          for (; cT.length > 0;) {
            const TT = cT.pop();
            if (!MT.get(TT)) {
              MT.set(TT, !0), OT.push(kT[TT]);
              for (const KT of kT[TT]) {
                const TT = lT.get(KT);
                if (!TT) return;
                for (const kT of TT) MT.get(kT) || cT.push(kT)
              }
            }
          }
        };
      for (let KT = 0; KT < cT; KT++) MT.get(KT) || yT(KT);
      let fT = 0;
      for (const KT of OT) TT[fT++] = KT[0], TT[fT++] = KT[1], TT[fT++] = KT[2]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);