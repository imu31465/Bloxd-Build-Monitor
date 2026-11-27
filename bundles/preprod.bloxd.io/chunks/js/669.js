export const id = 669;
export const ids = [669];
export const modules = {
  54711: (WW, iW, OW) => {
    function mW(WW) {
      return Math.floor(WW / 8)
    }

    function EW(WW) {
      return 1 << WW % 8
    }
    OW.d(iW, {
      OptimizeIndices: () => PW
    });
    class NW {
      constructor(WW) {
        this.size = WW, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(WW) {
        if (WW >= this.size) throw new RangeError("Bit index out of range");
        const iW = mW(WW),
          OW = EW(WW);
        return 0 !== (this._byteArray[iW] & OW)
      }
      set(WW, iW) {
        if (WW >= this.size) throw new RangeError("Bit index out of range");
        const OW = mW(WW),
          NW = EW(WW);
        iW ? this._byteArray[OW] |= NW : this._byteArray[OW] &= ~NW
      }
    }

    function PW(WW) {
      const iW = [],
        OW = WW.length / 3;
      for (let NW = 0; NW < OW; NW++) iW.push([WW[3 * NW], WW[3 * NW + 1], WW[3 * NW + 2]]);
      const mW = new Map;
      for (let NW = 0; NW < iW.length; NW++) {
        const WW = iW[NW];
        for (const iW of WW) {
          let WW = mW.get(iW);
          WW || mW.set(iW, WW = []), WW.push(NW)
        }
      }
      const EW = new NW(OW),
        PW = [],
        LW = WW => {
          const OW = [WW];
          for (; OW.length > 0;) {
            const WW = OW.pop();
            if (!EW.get(WW)) {
              EW.set(WW, !0), PW.push(iW[WW]);
              for (const NW of iW[WW]) {
                const WW = mW.get(NW);
                if (!WW) return;
                for (const iW of WW) EW.get(iW) || OW.push(iW)
              }
            }
          }
        };
      for (let NW = 0; NW < OW; NW++) EW.get(NW) || LW(NW);
      let cW = 0;
      for (const NW of PW) WW[cW++] = NW[0], WW[cW++] = NW[1], WW[cW++] = NW[2]
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);