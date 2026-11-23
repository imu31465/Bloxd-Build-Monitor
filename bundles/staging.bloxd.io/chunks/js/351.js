export const id = 351;
export const ids = [351];
export const modules = {
  42347: (CC, zC, ZC) => {
    function QC(CC) {
      return Math.floor(CC / 8)
    }

    function wC(CC) {
      return 1 << CC % 8
    }
    ZC.d(zC, {
      OptimizeIndices: () => nC
    });
    class bC {
      constructor(CC) {
        this.size = CC, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(CC) {
        if (CC >= this.size) throw new RangeError("Bit index out of range");
        const zC = QC(CC),
          ZC = wC(CC);
        return 0 !== (this._byteArray[zC] & ZC)
      }
      set(CC, zC) {
        if (CC >= this.size) throw new RangeError("Bit index out of range");
        const ZC = QC(CC),
          bC = wC(CC);
        zC ? this._byteArray[ZC] |= bC : this._byteArray[ZC] &= ~bC
      }
    }

    function nC(CC) {
      const zC = [],
        ZC = CC.length / 3;
      for (let bC = 0; bC < ZC; bC++) zC.push([CC[3 * bC], CC[3 * bC + 1], CC[3 * bC + 2]]);
      const QC = new Map;
      for (let bC = 0; bC < zC.length; bC++) {
        const CC = zC[bC];
        for (const zC of CC) {
          let CC = QC.get(zC);
          CC || QC.set(zC, CC = []), CC.push(bC)
        }
      }
      const wC = new bC(ZC),
        nC = [],
        fC = CC => {
          const ZC = [CC];
          for (; ZC.length > 0;) {
            const CC = ZC.pop();
            if (!wC.get(CC)) {
              wC.set(CC, !0), nC.push(zC[CC]);
              for (const bC of zC[CC]) {
                const CC = QC.get(bC);
                if (!CC) return;
                for (const zC of CC) wC.get(zC) || ZC.push(zC)
              }
            }
          }
        };
      for (let bC = 0; bC < ZC; bC++) wC.get(bC) || fC(bC);
      let oC = 0;
      for (const bC of nC) CC[oC++] = bC[0], CC[oC++] = bC[1], CC[oC++] = bC[2]
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);