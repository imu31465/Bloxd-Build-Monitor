export const id = 660;
export const ids = [660];
export const modules = {
  45226: (MM, rM, iM) => {
    function OM(MM) {
      return Math.floor(MM / 8)
    }

    function SM(MM) {
      return 1 << MM % 8
    }
    iM.d(rM, {
      OptimizeIndices: () => aM
    });
    class jM {
      constructor(MM) {
        this.size = MM, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(MM) {
        if (MM >= this.size) throw new RangeError("Bit index out of range");
        const rM = OM(MM),
          iM = SM(MM);
        return 0 !== (this._byteArray[rM] & iM)
      }
      set(MM, rM) {
        if (MM >= this.size) throw new RangeError("Bit index out of range");
        const iM = OM(MM),
          jM = SM(MM);
        rM ? this._byteArray[iM] |= jM : this._byteArray[iM] &= ~jM
      }
    }

    function aM(MM) {
      const rM = [],
        iM = MM.length / 3;
      for (let jM = 0; jM < iM; jM++) rM.push([MM[3 * jM], MM[3 * jM + 1], MM[3 * jM + 2]]);
      const OM = new Map;
      for (let jM = 0; jM < rM.length; jM++) {
        const MM = rM[jM];
        for (const rM of MM) {
          let MM = OM.get(rM);
          MM || OM.set(rM, MM = []), MM.push(jM)
        }
      }
      const SM = new jM(iM),
        aM = [],
        PM = MM => {
          const iM = [MM];
          for (; iM.length > 0;) {
            const MM = iM.pop();
            if (!SM.get(MM)) {
              SM.set(MM, !0), aM.push(rM[MM]);
              for (const jM of rM[MM]) {
                const MM = OM.get(jM);
                if (!MM) return;
                for (const rM of MM) SM.get(rM) || iM.push(rM)
              }
            }
          }
        };
      for (let jM = 0; jM < iM; jM++) SM.get(jM) || PM(jM);
      let nM = 0;
      for (const jM of aM) MM[nM++] = jM[0], MM[nM++] = jM[1], MM[nM++] = jM[2]
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);