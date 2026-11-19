export const id = 341;
export const ids = [341];
export const modules = {
  41600: (YY, rY, DY) => {
    function FY(YY) {
      return Math.floor(YY / 8)
    }

    function AY(YY) {
      return 1 << YY % 8
    }
    DY.d(rY, {
      OptimizeIndices: () => RY
    });
    class IY {
      constructor(YY) {
        this.size = YY, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(YY) {
        if (YY >= this.size) throw new RangeError("Bit index out of range");
        const rY = FY(YY),
          DY = AY(YY);
        return 0 !== (this._byteArray[rY] & DY)
      }
      set(YY, rY) {
        if (YY >= this.size) throw new RangeError("Bit index out of range");
        const DY = FY(YY),
          IY = AY(YY);
        rY ? this._byteArray[DY] |= IY : this._byteArray[DY] &= ~IY
      }
    }

    function RY(YY) {
      const rY = [],
        DY = YY.length / 3;
      for (let IY = 0; IY < DY; IY++) rY.push([YY[3 * IY], YY[3 * IY + 1], YY[3 * IY + 2]]);
      const FY = new Map;
      for (let IY = 0; IY < rY.length; IY++) {
        const YY = rY[IY];
        for (const rY of YY) {
          let YY = FY.get(rY);
          YY || FY.set(rY, YY = []), YY.push(IY)
        }
      }
      const AY = new IY(DY),
        RY = [],
        OY = YY => {
          const DY = [YY];
          for (; DY.length > 0;) {
            const YY = DY.pop();
            if (!AY.get(YY)) {
              AY.set(YY, !0), RY.push(rY[YY]);
              for (const IY of rY[YY]) {
                const YY = FY.get(IY);
                if (!YY) return;
                for (const rY of YY) AY.get(rY) || DY.push(rY)
              }
            }
          }
        };
      for (let IY = 0; IY < DY; IY++) AY.get(IY) || OY(IY);
      let gY = 0;
      for (const IY of RY) YY[gY++] = IY[0], YY[gY++] = IY[1], YY[gY++] = IY[2]
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);