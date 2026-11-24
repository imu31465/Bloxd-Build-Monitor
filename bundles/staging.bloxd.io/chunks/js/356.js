export const id = 356;
export const ids = [356];
export const modules = {
  42552: (BB, IB, ZB) => {
    function TB(BB) {
      return Math.floor(BB / 8)
    }

    function JB(BB) {
      return 1 << BB % 8
    }
    ZB.d(IB, {
      OptimizeIndices: () => GB
    });
    class oB {
      constructor(BB) {
        this.size = BB, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(BB) {
        if (BB >= this.size) throw new RangeError("Bit index out of range");
        const IB = TB(BB),
          ZB = JB(BB);
        return 0 !== (this._byteArray[IB] & ZB)
      }
      set(BB, IB) {
        if (BB >= this.size) throw new RangeError("Bit index out of range");
        const ZB = TB(BB),
          oB = JB(BB);
        IB ? this._byteArray[ZB] |= oB : this._byteArray[ZB] &= ~oB
      }
    }

    function GB(BB) {
      const IB = [],
        ZB = BB.length / 3;
      for (let oB = 0; oB < ZB; oB++) IB.push([BB[3 * oB], BB[3 * oB + 1], BB[3 * oB + 2]]);
      const TB = new Map;
      for (let oB = 0; oB < IB.length; oB++) {
        const BB = IB[oB];
        for (const IB of BB) {
          let BB = TB.get(IB);
          BB || TB.set(IB, BB = []), BB.push(oB)
        }
      }
      const JB = new oB(ZB),
        GB = [],
        vB = BB => {
          const ZB = [BB];
          for (; ZB.length > 0;) {
            const BB = ZB.pop();
            if (!JB.get(BB)) {
              JB.set(BB, !0), GB.push(IB[BB]);
              for (const oB of IB[BB]) {
                const BB = TB.get(oB);
                if (!BB) return;
                for (const IB of BB) JB.get(IB) || ZB.push(IB)
              }
            }
          }
        };
      for (let oB = 0; oB < ZB; oB++) JB.get(oB) || vB(oB);
      let kB = 0;
      for (const oB of GB) BB[kB++] = oB[0], BB[kB++] = oB[1], BB[kB++] = oB[2]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);