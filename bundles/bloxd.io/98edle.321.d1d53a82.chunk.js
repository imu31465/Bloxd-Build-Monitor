export const id = 321;
export const ids = [321];
export const modules = {
  39984: (WW, RW, MW) => {
    function wW(WW) {
      return Math.floor(WW / 8)
    }

    function CW(WW) {
      return 1 << WW % 8
    }
    MW.d(RW, {
      OptimizeIndices: () => AW
    });
    class zR {
      constructor(WW) {
        this.size = WW, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(WW) {
        if (WW >= this.size) throw new RangeError("Bit index out of range");
        const RW = wW(WW),
          MW = CW(WW);
        return 0 !== (this._byteArray[RW] & MW)
      }
      set(WW, RW) {
        if (WW >= this.size) throw new RangeError("Bit index out of range");
        const MW = wW(WW),
          zR = CW(WW);
        RW ? this._byteArray[MW] |= zR : this._byteArray[MW] &= ~zR
      }
    }

    function AW(WW) {
      const RW = [],
        MW = WW.length / 3;
      for (let zR = 0; zR < MW; zR++) RW.push([WW[3 * zR], WW[3 * zR + 1], WW[3 * zR + 2]]);
      const wW = new Map;
      for (let zR = 0; zR < RW.length; zR++) {
        const WW = RW[zR];
        for (const RW of WW) {
          let WW = wW.get(RW);
          WW || wW.set(RW, WW = []), WW.push(zR)
        }
      }
      const CW = new zR(MW),
        AW = [],
        bR = WW => {
          const MW = [WW];
          for (; MW.length > 0;) {
            const WW = MW.pop();
            if (!CW.get(WW)) {
              CW.set(WW, !0), AW.push(RW[WW]);
              for (const zR of RW[WW]) {
                const WW = wW.get(zR);
                if (!WW) return;
                for (const RW of WW) CW.get(RW) || MW.push(RW)
              }
            }
          }
        };
      for (let zR = 0; zR < MW; zR++) CW.get(zR) || bR(zR);
      let yR = 0;
      for (const zR of AW) WW[yR++] = zR[0], WW[yR++] = zR[1], WW[yR++] = zR[2]
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);