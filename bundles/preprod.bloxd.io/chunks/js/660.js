export const id = 660;
export const ids = [660];
export const modules = {
  45992: (HH, BH, LH) => {
    function AH(HH) {
      return Math.floor(HH / 8)
    }

    function rH(HH) {
      return 1 << HH % 8
    }
    LH.d(BH, {
      OptimizeIndices: () => hH
    });
    class SH {
      constructor(HH) {
        this.size = HH, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(HH) {
        if (HH >= this.size) throw new RangeError("Bit index out of range");
        const BH = AH(HH),
          LH = rH(HH);
        return 0 !== (this._byteArray[BH] & LH)
      }
      set(HH, BH) {
        if (HH >= this.size) throw new RangeError("Bit index out of range");
        const LH = AH(HH),
          SH = rH(HH);
        BH ? this._byteArray[LH] |= SH : this._byteArray[LH] &= ~SH
      }
    }

    function hH(HH) {
      const BH = [],
        LH = HH.length / 3;
      for (let SH = 0; SH < LH; SH++) BH.push([HH[3 * SH], HH[3 * SH + 1], HH[3 * SH + 2]]);
      const AH = new Map;
      for (let SH = 0; SH < BH.length; SH++) {
        const HH = BH[SH];
        for (const BH of HH) {
          let HH = AH.get(BH);
          HH || AH.set(BH, HH = []), HH.push(SH)
        }
      }
      const rH = new SH(LH),
        hH = [],
        tH = HH => {
          const LH = [HH];
          for (; LH.length > 0;) {
            const HH = LH.pop();
            if (!rH.get(HH)) {
              rH.set(HH, !0), hH.push(BH[HH]);
              for (const SH of BH[HH]) {
                const HH = AH.get(SH);
                if (!HH) return;
                for (const BH of HH) rH.get(BH) || LH.push(BH)
              }
            }
          }
        };
      for (let SH = 0; SH < LH; SH++) rH.get(SH) || tH(SH);
      let zH = 0;
      for (const SH of hH) HH[zH++] = SH[0], HH[zH++] = SH[1], HH[zH++] = SH[2]
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);