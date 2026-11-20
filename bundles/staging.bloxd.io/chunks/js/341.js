export const id = 341;
export const ids = [341];
export const modules = {
  41616: (zz, tz, sz) => {
    function Fz(zz) {
      return Math.floor(zz / 8)
    }

    function Wz(zz) {
      return 1 << zz % 8
    }
    sz.d(tz, {
      OptimizeIndices: () => Oz
    });
    class Xz {
      constructor(zz) {
        this.size = zz, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(zz) {
        if (zz >= this.size) throw new RangeError("Bit index out of range");
        const tz = Fz(zz),
          sz = Wz(zz);
        return 0 !== (this._byteArray[tz] & sz)
      }
      set(zz, tz) {
        if (zz >= this.size) throw new RangeError("Bit index out of range");
        const sz = Fz(zz),
          Xz = Wz(zz);
        tz ? this._byteArray[sz] |= Xz : this._byteArray[sz] &= ~Xz
      }
    }

    function Oz(zz) {
      const tz = [],
        sz = zz.length / 3;
      for (let Xz = 0; Xz < sz; Xz++) tz.push([zz[3 * Xz], zz[3 * Xz + 1], zz[3 * Xz + 2]]);
      const Fz = new Map;
      for (let Xz = 0; Xz < tz.length; Xz++) {
        const zz = tz[Xz];
        for (const tz of zz) {
          let zz = Fz.get(tz);
          zz || Fz.set(tz, zz = []), zz.push(Xz)
        }
      }
      const Wz = new Xz(sz),
        Oz = [],
        oz = zz => {
          const sz = [zz];
          for (; sz.length > 0;) {
            const zz = sz.pop();
            if (!Wz.get(zz)) {
              Wz.set(zz, !0), Oz.push(tz[zz]);
              for (const Xz of tz[zz]) {
                const zz = Fz.get(Xz);
                if (!zz) return;
                for (const tz of zz) Wz.get(tz) || sz.push(tz)
              }
            }
          }
        };
      for (let Xz = 0; Xz < sz; Xz++) Wz.get(Xz) || oz(Xz);
      let vz = 0;
      for (const Xz of Oz) zz[vz++] = Xz[0], zz[vz++] = Xz[1], zz[vz++] = Xz[2]
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);