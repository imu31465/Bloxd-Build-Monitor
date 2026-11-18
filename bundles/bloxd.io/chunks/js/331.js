export const id = 331;
export const ids = [331];
export const modules = {
  41204: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return Math.floor(JJ / 8)
    }

    function UJ(JJ) {
      return 1 << JJ % 8
    }
    ZJ.d(cJ, {
      OptimizeIndices: () => XJ
    });
    class eJ {
      constructor(JJ) {
        this.size = JJ, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(JJ) {
        if (JJ >= this.size) throw new RangeError("Bit index out of range");
        const cJ = FJ(JJ),
          ZJ = UJ(JJ);
        return 0 !== (this._byteArray[cJ] & ZJ)
      }
      set(JJ, cJ) {
        if (JJ >= this.size) throw new RangeError("Bit index out of range");
        const ZJ = FJ(JJ),
          eJ = UJ(JJ);
        cJ ? this._byteArray[ZJ] |= eJ : this._byteArray[ZJ] &= ~eJ
      }
    }

    function XJ(JJ) {
      const cJ = [],
        ZJ = JJ.length / 3;
      for (let eJ = 0; eJ < ZJ; eJ++) cJ.push([JJ[3 * eJ], JJ[3 * eJ + 1], JJ[3 * eJ + 2]]);
      const FJ = new Map;
      for (let eJ = 0; eJ < cJ.length; eJ++) {
        const JJ = cJ[eJ];
        for (const cJ of JJ) {
          let JJ = FJ.get(cJ);
          JJ || FJ.set(cJ, JJ = []), JJ.push(eJ)
        }
      }
      const UJ = new eJ(ZJ),
        XJ = [],
        AJ = JJ => {
          const ZJ = [JJ];
          for (; ZJ.length > 0;) {
            const JJ = ZJ.pop();
            if (!UJ.get(JJ)) {
              UJ.set(JJ, !0), XJ.push(cJ[JJ]);
              for (const eJ of cJ[JJ]) {
                const JJ = FJ.get(eJ);
                if (!JJ) return;
                for (const cJ of JJ) UJ.get(cJ) || ZJ.push(cJ)
              }
            }
          }
        };
      for (let eJ = 0; eJ < ZJ; eJ++) UJ.get(eJ) || AJ(eJ);
      let qJ = 0;
      for (const eJ of XJ) JJ[qJ++] = eJ[0], JJ[qJ++] = eJ[1], JJ[qJ++] = eJ[2]
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);