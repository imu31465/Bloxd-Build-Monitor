export const id = 660;
export const ids = [660];
export const modules = {
  45700: (BB, OB, GB) => {
    function YB(BB) {
      return Math.floor(BB / 8)
    }

    function DB(BB) {
      return 1 << BB % 8
    }
    GB.d(OB, {
      OptimizeIndices: () => oB
    });
    class QB {
      constructor(BB) {
        this.size = BB, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(BB) {
        if (BB >= this.size) throw new RangeError("Bit index out of range");
        const OB = YB(BB),
          GB = DB(BB);
        return 0 !== (this._byteArray[OB] & GB)
      }
      set(BB, OB) {
        if (BB >= this.size) throw new RangeError("Bit index out of range");
        const GB = YB(BB),
          QB = DB(BB);
        OB ? this._byteArray[GB] |= QB : this._byteArray[GB] &= ~QB
      }
    }

    function oB(BB) {
      const OB = [],
        GB = BB.length / 3;
      for (let QB = 0; QB < GB; QB++) OB.push([BB[3 * QB], BB[3 * QB + 1], BB[3 * QB + 2]]);
      const YB = new Map;
      for (let QB = 0; QB < OB.length; QB++) {
        const BB = OB[QB];
        for (const OB of BB) {
          let BB = YB.get(OB);
          BB || YB.set(OB, BB = []), BB.push(QB)
        }
      }
      const DB = new QB(GB),
        oB = [],
        jB = BB => {
          const GB = [BB];
          for (; GB.length > 0;) {
            const BB = GB.pop();
            if (!DB.get(BB)) {
              DB.set(BB, !0), oB.push(OB[BB]);
              for (const QB of OB[BB]) {
                const BB = YB.get(QB);
                if (!BB) return;
                for (const OB of BB) DB.get(OB) || GB.push(OB)
              }
            }
          }
        };
      for (let QB = 0; QB < GB; QB++) DB.get(QB) || jB(QB);
      let yB = 0;
      for (const QB of oB) BB[yB++] = QB[0], BB[yB++] = QB[1], BB[yB++] = QB[2]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);