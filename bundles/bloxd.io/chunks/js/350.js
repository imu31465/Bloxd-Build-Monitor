export const id = 350;
export const ids = [350];
export const modules = {
  42146: (kk, ek, ik) => {
    function Dk(kk) {
      return Math.floor(kk / 8)
    }

    function fk(kk) {
      return 1 << kk % 8
    }
    ik.d(ek, {
      OptimizeIndices: () => bk
    });
    class Sk {
      constructor(kk) {
        this.size = kk, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(kk) {
        if (kk >= this.size) throw new RangeError("Bit index out of range");
        const ek = Dk(kk),
          ik = fk(kk);
        return 0 !== (this._byteArray[ek] & ik)
      }
      set(kk, ek) {
        if (kk >= this.size) throw new RangeError("Bit index out of range");
        const ik = Dk(kk),
          Sk = fk(kk);
        ek ? this._byteArray[ik] |= Sk : this._byteArray[ik] &= ~Sk
      }
    }

    function bk(kk) {
      const ek = [],
        ik = kk.length / 3;
      for (let Sk = 0; Sk < ik; Sk++) ek.push([kk[3 * Sk], kk[3 * Sk + 1], kk[3 * Sk + 2]]);
      const Dk = new Map;
      for (let Sk = 0; Sk < ek.length; Sk++) {
        const kk = ek[Sk];
        for (const ek of kk) {
          let kk = Dk.get(ek);
          kk || Dk.set(ek, kk = []), kk.push(Sk)
        }
      }
      const fk = new Sk(ik),
        bk = [],
        rk = kk => {
          const ik = [kk];
          for (; ik.length > 0;) {
            const kk = ik.pop();
            if (!fk.get(kk)) {
              fk.set(kk, !0), bk.push(ek[kk]);
              for (const Sk of ek[kk]) {
                const kk = Dk.get(Sk);
                if (!kk) return;
                for (const ek of kk) fk.get(ek) || ik.push(ek)
              }
            }
          }
        };
      for (let Sk = 0; Sk < ik; Sk++) fk.get(Sk) || rk(Sk);
      let Pk = 0;
      for (const Sk of bk) kk[Pk++] = Sk[0], kk[Pk++] = Sk[1], kk[Pk++] = Sk[2]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);