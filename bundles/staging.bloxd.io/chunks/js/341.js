export const id = 341;
export const ids = [341];
export const modules = {
  41637: (bb, ab, Ub) => {
    function Ab(bb) {
      return Math.floor(bb / 8)
    }

    function Mb(bb) {
      return 1 << bb % 8
    }
    Ub.d(ab, {
      OptimizeIndices: () => Eb
    });
    class Tb {
      constructor(bb) {
        this.size = bb, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(bb) {
        if (bb >= this.size) throw new RangeError("Bit index out of range");
        const ab = Ab(bb),
          Ub = Mb(bb);
        return 0 !== (this._byteArray[ab] & Ub)
      }
      set(bb, ab) {
        if (bb >= this.size) throw new RangeError("Bit index out of range");
        const Ub = Ab(bb),
          Tb = Mb(bb);
        ab ? this._byteArray[Ub] |= Tb : this._byteArray[Ub] &= ~Tb
      }
    }

    function Eb(bb) {
      const ab = [],
        Ub = bb.length / 3;
      for (let Tb = 0; Tb < Ub; Tb++) ab.push([bb[3 * Tb], bb[3 * Tb + 1], bb[3 * Tb + 2]]);
      const Ab = new Map;
      for (let Tb = 0; Tb < ab.length; Tb++) {
        const bb = ab[Tb];
        for (const ab of bb) {
          let bb = Ab.get(ab);
          bb || Ab.set(ab, bb = []), bb.push(Tb)
        }
      }
      const Mb = new Tb(Ub),
        Eb = [],
        Yb = bb => {
          const Ub = [bb];
          for (; Ub.length > 0;) {
            const bb = Ub.pop();
            if (!Mb.get(bb)) {
              Mb.set(bb, !0), Eb.push(ab[bb]);
              for (const Tb of ab[bb]) {
                const bb = Ab.get(Tb);
                if (!bb) return;
                for (const ab of bb) Mb.get(ab) || Ub.push(ab)
              }
            }
          }
        };
      for (let Tb = 0; Tb < Ub; Tb++) Mb.get(Tb) || Yb(Tb);
      let Bb = 0;
      for (const Tb of Eb) bb[Bb++] = Tb[0], bb[Bb++] = Tb[1], bb[Bb++] = Tb[2]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);