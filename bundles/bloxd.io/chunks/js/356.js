export const id = 356;
export const ids = [356];
export const modules = {
  42719: (TT, UT, mT) => {
    function WT(TT) {
      return Math.floor(TT / 8)
    }

    function zT(TT) {
      return 1 << TT % 8
    }
    mT.d(UT, {
      OptimizeIndices: () => gT
    });
    class MT {
      constructor(TT) {
        this.size = TT, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(TT) {
        if (TT >= this.size) throw new RangeError("Bit index out of range");
        const UT = WT(TT),
          mT = zT(TT);
        return 0 !== (this._byteArray[UT] & mT)
      }
      set(TT, UT) {
        if (TT >= this.size) throw new RangeError("Bit index out of range");
        const mT = WT(TT),
          MT = zT(TT);
        UT ? this._byteArray[mT] |= MT : this._byteArray[mT] &= ~MT
      }
    }

    function gT(TT) {
      const UT = [],
        mT = TT.length / 3;
      for (let MT = 0; MT < mT; MT++) UT.push([TT[3 * MT], TT[3 * MT + 1], TT[3 * MT + 2]]);
      const WT = new Map;
      for (let MT = 0; MT < UT.length; MT++) {
        const TT = UT[MT];
        for (const UT of TT) {
          let TT = WT.get(UT);
          TT || WT.set(UT, TT = []), TT.push(MT)
        }
      }
      const zT = new MT(mT),
        gT = [],
        nT = TT => {
          const mT = [TT];
          for (; mT.length > 0;) {
            const TT = mT.pop();
            if (!zT.get(TT)) {
              zT.set(TT, !0), gT.push(UT[TT]);
              for (const MT of UT[TT]) {
                const TT = WT.get(MT);
                if (!TT) return;
                for (const UT of TT) zT.get(UT) || mT.push(UT)
              }
            }
          }
        };
      for (let MT = 0; MT < mT; MT++) zT.get(MT) || nT(MT);
      let HT = 0;
      for (const MT of gT) TT[HT++] = MT[0], TT[HT++] = MT[1], TT[HT++] = MT[2]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);