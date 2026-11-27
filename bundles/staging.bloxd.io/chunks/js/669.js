export const id = 669;
export const ids = [669];
export const modules = {
  54557: (RR, JR, GR) => {
    function yR(RR) {
      return Math.floor(RR / 8)
    }

    function tR(RR) {
      return 1 << RR % 8
    }
    GR.d(JR, {
      OptimizeIndices: () => ZR
    });
    class uR {
      constructor(RR) {
        this.size = RR, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(RR) {
        if (RR >= this.size) throw new RangeError("Bit index out of range");
        const JR = yR(RR),
          GR = tR(RR);
        return 0 !== (this._byteArray[JR] & GR)
      }
      set(RR, JR) {
        if (RR >= this.size) throw new RangeError("Bit index out of range");
        const GR = yR(RR),
          uR = tR(RR);
        JR ? this._byteArray[GR] |= uR : this._byteArray[GR] &= ~uR
      }
    }

    function ZR(RR) {
      const JR = [],
        GR = RR.length / 3;
      for (let uR = 0; uR < GR; uR++) JR.push([RR[3 * uR], RR[3 * uR + 1], RR[3 * uR + 2]]);
      const yR = new Map;
      for (let uR = 0; uR < JR.length; uR++) {
        const RR = JR[uR];
        for (const JR of RR) {
          let RR = yR.get(JR);
          RR || yR.set(JR, RR = []), RR.push(uR)
        }
      }
      const tR = new uR(GR),
        ZR = [],
        qR = RR => {
          const GR = [RR];
          for (; GR.length > 0;) {
            const RR = GR.pop();
            if (!tR.get(RR)) {
              tR.set(RR, !0), ZR.push(JR[RR]);
              for (const uR of JR[RR]) {
                const RR = yR.get(uR);
                if (!RR) return;
                for (const JR of RR) tR.get(JR) || GR.push(JR)
              }
            }
          }
        };
      for (let uR = 0; uR < GR; uR++) tR.get(uR) || qR(uR);
      let iR = 0;
      for (const uR of ZR) RR[iR++] = uR[0], RR[iR++] = uR[1], RR[iR++] = uR[2]
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);