export const id = 356;
export const ids = [356];
export const modules = {
  43002: (GG, bG, ZG) => {
    function wG(GG) {
      return Math.floor(GG / 8)
    }

    function SG(GG) {
      return 1 << GG % 8
    }
    ZG.d(bG, {
      OptimizeIndices: () => yG
    });
    class LG {
      constructor(GG) {
        this.size = GG, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(GG) {
        if (GG >= this.size) throw new RangeError("Bit index out of range");
        const bG = wG(GG),
          ZG = SG(GG);
        return 0 !== (this._byteArray[bG] & ZG)
      }
      set(GG, bG) {
        if (GG >= this.size) throw new RangeError("Bit index out of range");
        const ZG = wG(GG),
          LG = SG(GG);
        bG ? this._byteArray[ZG] |= LG : this._byteArray[ZG] &= ~LG
      }
    }

    function yG(GG) {
      const bG = [],
        ZG = GG.length / 3;
      for (let LG = 0; LG < ZG; LG++) bG.push([GG[3 * LG], GG[3 * LG + 1], GG[3 * LG + 2]]);
      const wG = new Map;
      for (let LG = 0; LG < bG.length; LG++) {
        const GG = bG[LG];
        for (const bG of GG) {
          let GG = wG.get(bG);
          GG || wG.set(bG, GG = []), GG.push(LG)
        }
      }
      const SG = new LG(ZG),
        yG = [],
        kG = GG => {
          const ZG = [GG];
          for (; ZG.length > 0;) {
            const GG = ZG.pop();
            if (!SG.get(GG)) {
              SG.set(GG, !0), yG.push(bG[GG]);
              for (const LG of bG[GG]) {
                const GG = wG.get(LG);
                if (!GG) return;
                for (const bG of GG) SG.get(bG) || ZG.push(bG)
              }
            }
          }
        };
      for (let LG = 0; LG < ZG; LG++) SG.get(LG) || kG(LG);
      let UG = 0;
      for (const LG of yG) GG[UG++] = LG[0], GG[UG++] = LG[1], GG[UG++] = LG[2]
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);