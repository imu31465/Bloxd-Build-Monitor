export const id = 356;
export const ids = [356];
export const modules = {
  42843: (pp, ip, cp) => {
    function Op(pp) {
      return Math.floor(pp / 8)
    }

    function op(pp) {
      return 1 << pp % 8
    }
    cp.d(ip, {
      OptimizeIndices: () => Sp
    });
    class Ip {
      constructor(pp) {
        this.size = pp, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(pp) {
        if (pp >= this.size) throw new RangeError("Bit index out of range");
        const ip = Op(pp),
          cp = op(pp);
        return 0 !== (this._byteArray[ip] & cp)
      }
      set(pp, ip) {
        if (pp >= this.size) throw new RangeError("Bit index out of range");
        const cp = Op(pp),
          Ip = op(pp);
        ip ? this._byteArray[cp] |= Ip : this._byteArray[cp] &= ~Ip
      }
    }

    function Sp(pp) {
      const ip = [],
        cp = pp.length / 3;
      for (let Ip = 0; Ip < cp; Ip++) ip.push([pp[3 * Ip], pp[3 * Ip + 1], pp[3 * Ip + 2]]);
      const Op = new Map;
      for (let Ip = 0; Ip < ip.length; Ip++) {
        const pp = ip[Ip];
        for (const ip of pp) {
          let pp = Op.get(ip);
          pp || Op.set(ip, pp = []), pp.push(Ip)
        }
      }
      const op = new Ip(cp),
        Sp = [],
        xp = pp => {
          const cp = [pp];
          for (; cp.length > 0;) {
            const pp = cp.pop();
            if (!op.get(pp)) {
              op.set(pp, !0), Sp.push(ip[pp]);
              for (const Ip of ip[pp]) {
                const pp = Op.get(Ip);
                if (!pp) return;
                for (const ip of pp) op.get(ip) || cp.push(ip)
              }
            }
          }
        };
      for (let Ip = 0; Ip < cp; Ip++) op.get(Ip) || xp(Ip);
      let Lp = 0;
      for (const Ip of Sp) pp[Lp++] = Ip[0], pp[Lp++] = Ip[1], pp[Lp++] = Ip[2]
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);