export const id = 331;
export const ids = [331];
export const modules = {
  41235: (BB, TB, dB) => {
    function VB(BB) {
      return Math.floor(BB / 8)
    }

    function yB(BB) {
      return 1 << BB % 8
    }
    dB.d(TB, {
      OptimizeIndices: () => lB
    });
    class pB {
      constructor(BB) {
        this.size = BB, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(BB) {
        if (BB >= this.size) throw new RangeError("Bit index out of range");
        const TB = VB(BB),
          dB = yB(BB);
        return 0 !== (this._byteArray[TB] & dB)
      }
      set(BB, TB) {
        if (BB >= this.size) throw new RangeError("Bit index out of range");
        const dB = VB(BB),
          pB = yB(BB);
        TB ? this._byteArray[dB] |= pB : this._byteArray[dB] &= ~pB
      }
    }

    function lB(BB) {
      const TB = [],
        dB = BB.length / 3;
      for (let pB = 0; pB < dB; pB++) TB.push([BB[3 * pB], BB[3 * pB + 1], BB[3 * pB + 2]]);
      const VB = new Map;
      for (let pB = 0; pB < TB.length; pB++) {
        const BB = TB[pB];
        for (const TB of BB) {
          let BB = VB.get(TB);
          BB || VB.set(TB, BB = []), BB.push(pB)
        }
      }
      const yB = new pB(dB),
        lB = [],
        JB = BB => {
          const dB = [BB];
          for (; dB.length > 0;) {
            const BB = dB.pop();
            if (!yB.get(BB)) {
              yB.set(BB, !0), lB.push(TB[BB]);
              for (const pB of TB[BB]) {
                const BB = VB.get(pB);
                if (!BB) return;
                for (const TB of BB) yB.get(TB) || dB.push(TB)
              }
            }
          }
        };
      for (let pB = 0; pB < dB; pB++) yB.get(pB) || JB(pB);
      let YB = 0;
      for (const pB of lB) BB[YB++] = pB[0], BB[YB++] = pB[1], BB[YB++] = pB[2]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);