export const id = 356;
export const ids = [356];
export const modules = {
  42687: (BB, jB, zB) => {
    function QB(BB) {
      return Math.floor(BB / 8)
    }

    function nB(BB) {
      return 1 << BB % 8
    }
    zB.d(jB, {
      OptimizeIndices: () => IB
    });
    class dB {
      constructor(BB) {
        this.size = BB, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(BB) {
        if (BB >= this.size) throw new RangeError("Bit index out of range");
        const jB = QB(BB),
          zB = nB(BB);
        return 0 !== (this._byteArray[jB] & zB)
      }
      set(BB, jB) {
        if (BB >= this.size) throw new RangeError("Bit index out of range");
        const zB = QB(BB),
          dB = nB(BB);
        jB ? this._byteArray[zB] |= dB : this._byteArray[zB] &= ~dB
      }
    }

    function IB(BB) {
      const jB = [],
        zB = BB.length / 3;
      for (let dB = 0; dB < zB; dB++) jB.push([BB[3 * dB], BB[3 * dB + 1], BB[3 * dB + 2]]);
      const QB = new Map;
      for (let dB = 0; dB < jB.length; dB++) {
        const BB = jB[dB];
        for (const jB of BB) {
          let BB = QB.get(jB);
          BB || QB.set(jB, BB = []), BB.push(dB)
        }
      }
      const nB = new dB(zB),
        IB = [],
        NB = BB => {
          const zB = [BB];
          for (; zB.length > 0;) {
            const BB = zB.pop();
            if (!nB.get(BB)) {
              nB.set(BB, !0), IB.push(jB[BB]);
              for (const dB of jB[BB]) {
                const BB = QB.get(dB);
                if (!BB) return;
                for (const jB of BB) nB.get(jB) || zB.push(jB)
              }
            }
          }
        };
      for (let dB = 0; dB < zB; dB++) nB.get(dB) || NB(dB);
      let uB = 0;
      for (const dB of IB) BB[uB++] = dB[0], BB[uB++] = dB[1], BB[uB++] = dB[2]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);