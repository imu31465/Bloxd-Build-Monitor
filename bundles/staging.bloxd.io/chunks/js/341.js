export const id = 341;
export const ids = [341];
export const modules = {
  41352: (TT, oT, IT) => {
    function iT(TT) {
      return Math.floor(TT / 8)
    }

    function zT(TT) {
      return 1 << TT % 8
    }
    IT.d(oT, {
      OptimizeIndices: () => WT
    });
    class kT {
      constructor(TT) {
        this.size = TT, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(TT) {
        if (TT >= this.size) throw new RangeError("Bit index out of range");
        const oT = iT(TT),
          IT = zT(TT);
        return 0 !== (this._byteArray[oT] & IT)
      }
      set(TT, oT) {
        if (TT >= this.size) throw new RangeError("Bit index out of range");
        const IT = iT(TT),
          kT = zT(TT);
        oT ? this._byteArray[IT] |= kT : this._byteArray[IT] &= ~kT
      }
    }

    function WT(TT) {
      const oT = [],
        IT = TT.length / 3;
      for (let kT = 0; kT < IT; kT++) oT.push([TT[3 * kT], TT[3 * kT + 1], TT[3 * kT + 2]]);
      const iT = new Map;
      for (let kT = 0; kT < oT.length; kT++) {
        const TT = oT[kT];
        for (const oT of TT) {
          let TT = iT.get(oT);
          TT || iT.set(oT, TT = []), TT.push(kT)
        }
      }
      const zT = new kT(IT),
        WT = [],
        XT = TT => {
          const IT = [TT];
          for (; IT.length > 0;) {
            const TT = IT.pop();
            if (!zT.get(TT)) {
              zT.set(TT, !0), WT.push(oT[TT]);
              for (const kT of oT[TT]) {
                const TT = iT.get(kT);
                if (!TT) return;
                for (const oT of TT) zT.get(oT) || IT.push(oT)
              }
            }
          }
        };
      for (let kT = 0; kT < IT; kT++) zT.get(kT) || XT(kT);
      let BT = 0;
      for (const kT of WT) TT[BT++] = kT[0], TT[BT++] = kT[1], TT[BT++] = kT[2]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);