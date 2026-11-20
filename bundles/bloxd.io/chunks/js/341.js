export const id = 341;
export const ids = [341];
export const modules = {
  41880: (UU, RU, gU) => {
    function tU(UU) {
      return Math.floor(UU / 8)
    }

    function pU(UU) {
      return 1 << UU % 8
    }
    gU.d(RU, {
      OptimizeIndices: () => PU
    });
    class EU {
      constructor(UU) {
        this.size = UU, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(UU) {
        if (UU >= this.size) throw new RangeError("Bit index out of range");
        const RU = tU(UU),
          gU = pU(UU);
        return 0 !== (this._byteArray[RU] & gU)
      }
      set(UU, RU) {
        if (UU >= this.size) throw new RangeError("Bit index out of range");
        const gU = tU(UU),
          EU = pU(UU);
        RU ? this._byteArray[gU] |= EU : this._byteArray[gU] &= ~EU
      }
    }

    function PU(UU) {
      const RU = [],
        gU = UU.length / 3;
      for (let EU = 0; EU < gU; EU++) RU.push([UU[3 * EU], UU[3 * EU + 1], UU[3 * EU + 2]]);
      const tU = new Map;
      for (let EU = 0; EU < RU.length; EU++) {
        const UU = RU[EU];
        for (const RU of UU) {
          let UU = tU.get(RU);
          UU || tU.set(RU, UU = []), UU.push(EU)
        }
      }
      const pU = new EU(gU),
        PU = [],
        TU = UU => {
          const gU = [UU];
          for (; gU.length > 0;) {
            const UU = gU.pop();
            if (!pU.get(UU)) {
              pU.set(UU, !0), PU.push(RU[UU]);
              for (const EU of RU[UU]) {
                const UU = tU.get(EU);
                if (!UU) return;
                for (const RU of UU) pU.get(RU) || gU.push(RU)
              }
            }
          }
        };
      for (let EU = 0; EU < gU; EU++) pU.get(EU) || TU(EU);
      let qU = 0;
      for (const EU of PU) UU[qU++] = EU[0], UU[qU++] = EU[1], UU[qU++] = EU[2]
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);