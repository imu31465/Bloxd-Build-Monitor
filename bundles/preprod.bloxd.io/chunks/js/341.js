export const id = 341;
export const ids = [341];
export const modules = {
  41770: (zz, uz, bz) => {
    function Ez(zz) {
      return Math.floor(zz / 8)
    }

    function nz(zz) {
      return 1 << zz % 8
    }
    bz.d(uz, {
      OptimizeIndices: () => lz
    });
    class iz {
      constructor(zz) {
        this.size = zz, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(zz) {
        if (zz >= this.size) throw new RangeError("Bit index out of range");
        const uz = Ez(zz),
          bz = nz(zz);
        return 0 !== (this._byteArray[uz] & bz)
      }
      set(zz, uz) {
        if (zz >= this.size) throw new RangeError("Bit index out of range");
        const bz = Ez(zz),
          iz = nz(zz);
        uz ? this._byteArray[bz] |= iz : this._byteArray[bz] &= ~iz
      }
    }

    function lz(zz) {
      const uz = [],
        bz = zz.length / 3;
      for (let iz = 0; iz < bz; iz++) uz.push([zz[3 * iz], zz[3 * iz + 1], zz[3 * iz + 2]]);
      const Ez = new Map;
      for (let iz = 0; iz < uz.length; iz++) {
        const zz = uz[iz];
        for (const uz of zz) {
          let zz = Ez.get(uz);
          zz || Ez.set(uz, zz = []), zz.push(iz)
        }
      }
      const nz = new iz(bz),
        lz = [],
        Mz = zz => {
          const bz = [zz];
          for (; bz.length > 0;) {
            const zz = bz.pop();
            if (!nz.get(zz)) {
              nz.set(zz, !0), lz.push(uz[zz]);
              for (const iz of uz[zz]) {
                const zz = Ez.get(iz);
                if (!zz) return;
                for (const uz of zz) nz.get(uz) || bz.push(uz)
              }
            }
          }
        };
      for (let iz = 0; iz < bz; iz++) nz.get(iz) || Mz(iz);
      let tz = 0;
      for (const iz of lz) zz[tz++] = iz[0], zz[tz++] = iz[1], zz[tz++] = iz[2]
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);