export const id = 351;
export const ids = [351];
export const modules = {
  42423: (DD, zD, wD) => {
    function pD(DD) {
      return Math.floor(DD / 8)
    }

    function sD(DD) {
      return 1 << DD % 8
    }
    wD.d(zD, {
      OptimizeIndices: () => rD
    });
    class KD {
      constructor(DD) {
        this.size = DD, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(DD) {
        if (DD >= this.size) throw new RangeError("Bit index out of range");
        const zD = pD(DD),
          wD = sD(DD);
        return 0 !== (this._byteArray[zD] & wD)
      }
      set(DD, zD) {
        if (DD >= this.size) throw new RangeError("Bit index out of range");
        const wD = pD(DD),
          KD = sD(DD);
        zD ? this._byteArray[wD] |= KD : this._byteArray[wD] &= ~KD
      }
    }

    function rD(DD) {
      const zD = [],
        wD = DD.length / 3;
      for (let KD = 0; KD < wD; KD++) zD.push([DD[3 * KD], DD[3 * KD + 1], DD[3 * KD + 2]]);
      const pD = new Map;
      for (let KD = 0; KD < zD.length; KD++) {
        const DD = zD[KD];
        for (const zD of DD) {
          let DD = pD.get(zD);
          DD || pD.set(zD, DD = []), DD.push(KD)
        }
      }
      const sD = new KD(wD),
        rD = [],
        LD = DD => {
          const wD = [DD];
          for (; wD.length > 0;) {
            const DD = wD.pop();
            if (!sD.get(DD)) {
              sD.set(DD, !0), rD.push(zD[DD]);
              for (const KD of zD[DD]) {
                const DD = pD.get(KD);
                if (!DD) return;
                for (const zD of DD) sD.get(zD) || wD.push(zD)
              }
            }
          }
        };
      for (let KD = 0; KD < wD; KD++) sD.get(KD) || LD(KD);
      let cD = 0;
      for (const KD of rD) DD[cD++] = KD[0], DD[cD++] = KD[1], DD[cD++] = KD[2]
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);