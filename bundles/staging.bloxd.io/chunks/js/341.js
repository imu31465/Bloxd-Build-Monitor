export const id = 341;
export const ids = [341];
export const modules = {
  42109: (uu, Ru, yu) => {
    function Eu(uu) {
      return Math.floor(uu / 8)
    }

    function Ku(uu) {
      return 1 << uu % 8
    }
    yu.d(Ru, {
      OptimizeIndices: () => mu
    });
    class Qu {
      constructor(uu) {
        this.size = uu, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(uu) {
        if (uu >= this.size) throw new RangeError("Bit index out of range");
        const Ru = Eu(uu),
          yu = Ku(uu);
        return 0 !== (this._byteArray[Ru] & yu)
      }
      set(uu, Ru) {
        if (uu >= this.size) throw new RangeError("Bit index out of range");
        const yu = Eu(uu),
          Qu = Ku(uu);
        Ru ? this._byteArray[yu] |= Qu : this._byteArray[yu] &= ~Qu
      }
    }

    function mu(uu) {
      const Ru = [],
        yu = uu.length / 3;
      for (let Qu = 0; Qu < yu; Qu++) Ru.push([uu[3 * Qu], uu[3 * Qu + 1], uu[3 * Qu + 2]]);
      const Eu = new Map;
      for (let Qu = 0; Qu < Ru.length; Qu++) {
        const uu = Ru[Qu];
        for (const Ru of uu) {
          let uu = Eu.get(Ru);
          uu || Eu.set(Ru, uu = []), uu.push(Qu)
        }
      }
      const Ku = new Qu(yu),
        mu = [],
        Ju = uu => {
          const yu = [uu];
          for (; yu.length > 0;) {
            const uu = yu.pop();
            if (!Ku.get(uu)) {
              Ku.set(uu, !0), mu.push(Ru[uu]);
              for (const Qu of Ru[uu]) {
                const uu = Eu.get(Qu);
                if (!uu) return;
                for (const Ru of uu) Ku.get(Ru) || yu.push(Ru)
              }
            }
          }
        };
      for (let Qu = 0; Qu < yu; Qu++) Ku.get(Qu) || Ju(Qu);
      let Nu = 0;
      for (const Qu of mu) uu[Nu++] = Qu[0], uu[Nu++] = Qu[1], uu[Nu++] = Qu[2]
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);