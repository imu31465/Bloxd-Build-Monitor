export const id = 341;
export const ids = [341];
export const modules = {
  41705: (DD, CD, cD) => {
    function ID(DD) {
      return Math.floor(DD / 8)
    }

    function pD(DD) {
      return 1 << DD % 8
    }
    cD.d(CD, {
      OptimizeIndices: () => fD
    });
    class iD {
      constructor(DD) {
        this.size = DD, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(DD) {
        if (DD >= this.size) throw new RangeError("Bit index out of range");
        const CD = ID(DD),
          cD = pD(DD);
        return 0 !== (this._byteArray[CD] & cD)
      }
      set(DD, CD) {
        if (DD >= this.size) throw new RangeError("Bit index out of range");
        const cD = ID(DD),
          iD = pD(DD);
        CD ? this._byteArray[cD] |= iD : this._byteArray[cD] &= ~iD
      }
    }

    function fD(DD) {
      const CD = [],
        cD = DD.length / 3;
      for (let iD = 0; iD < cD; iD++) CD.push([DD[3 * iD], DD[3 * iD + 1], DD[3 * iD + 2]]);
      const ID = new Map;
      for (let iD = 0; iD < CD.length; iD++) {
        const DD = CD[iD];
        for (const CD of DD) {
          let DD = ID.get(CD);
          DD || ID.set(CD, DD = []), DD.push(iD)
        }
      }
      const pD = new iD(cD),
        fD = [],
        bD = DD => {
          const cD = [DD];
          for (; cD.length > 0;) {
            const DD = cD.pop();
            if (!pD.get(DD)) {
              pD.set(DD, !0), fD.push(CD[DD]);
              for (const iD of CD[DD]) {
                const DD = ID.get(iD);
                if (!DD) return;
                for (const CD of DD) pD.get(CD) || cD.push(CD)
              }
            }
          }
        };
      for (let iD = 0; iD < cD; iD++) pD.get(iD) || bD(iD);
      let QD = 0;
      for (const iD of fD) DD[QD++] = iD[0], DD[QD++] = iD[1], DD[QD++] = iD[2]
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);