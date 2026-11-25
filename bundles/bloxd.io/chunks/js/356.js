export const id = 356;
export const ids = [356];
export const modules = {
  42830: (uu, Eu, ju) => {
    function su(uu) {
      return Math.floor(uu / 8)
    }

    function Uu(uu) {
      return 1 << uu % 8
    }
    ju.d(Eu, {
      OptimizeIndices: () => Xu
    });
    class Zu {
      constructor(uu) {
        this.size = uu, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(uu) {
        if (uu >= this.size) throw new RangeError("Bit index out of range");
        const Eu = su(uu),
          ju = Uu(uu);
        return 0 !== (this._byteArray[Eu] & ju)
      }
      set(uu, Eu) {
        if (uu >= this.size) throw new RangeError("Bit index out of range");
        const ju = su(uu),
          Zu = Uu(uu);
        Eu ? this._byteArray[ju] |= Zu : this._byteArray[ju] &= ~Zu
      }
    }

    function Xu(uu) {
      const Eu = [],
        ju = uu.length / 3;
      for (let Zu = 0; Zu < ju; Zu++) Eu.push([uu[3 * Zu], uu[3 * Zu + 1], uu[3 * Zu + 2]]);
      const su = new Map;
      for (let Zu = 0; Zu < Eu.length; Zu++) {
        const uu = Eu[Zu];
        for (const Eu of uu) {
          let uu = su.get(Eu);
          uu || su.set(Eu, uu = []), uu.push(Zu)
        }
      }
      const Uu = new Zu(ju),
        Xu = [],
        lu = uu => {
          const ju = [uu];
          for (; ju.length > 0;) {
            const uu = ju.pop();
            if (!Uu.get(uu)) {
              Uu.set(uu, !0), Xu.push(Eu[uu]);
              for (const Zu of Eu[uu]) {
                const uu = su.get(Zu);
                if (!uu) return;
                for (const Eu of uu) Uu.get(Eu) || ju.push(Eu)
              }
            }
          }
        };
      for (let Zu = 0; Zu < ju; Zu++) Uu.get(Zu) || lu(Zu);
      let qu = 0;
      for (const Zu of Xu) uu[qu++] = Zu[0], uu[qu++] = Zu[1], uu[qu++] = Zu[2]
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);