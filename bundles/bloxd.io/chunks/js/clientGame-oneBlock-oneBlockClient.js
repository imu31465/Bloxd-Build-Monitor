export const id = 21;
export const ids = [21];
export const modules = {
  38807: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Xz
    });
    const Fz = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const Wz = 6400;
    const Xz = function(zz, tz, sz, Xz) {
      let Oz, {
          localPlayerId: oz
        } = Xz,
        vz = [];
      return {
        onCreate: zz => {
          Oz = zz
        },
        onReceivedMessageFromServer: (zz, tz) => {
          "oneBlockNextBlocks" === zz && (vz = tz.blocks.map((zz => Oz.blockNameToBlockId(zz))))
        },
        wN: () => {
          if (0 === vz.length) return;
          const zz = Oz.getPositionView(oz),
            tz = function(zz, tz) {
              const sz = Math.ceil((zz - 3200) / Wz);
              if (sz !== Math.ceil((tz - 3200) / Wz) || sz <= 0) return null;
              const Fz = sz * Wz + 6;
              return [Fz, 10, Fz]
            }(zz[0], zz[2]);
          if (!tz) return;
          const [sz, Fz, Xz] = tz;
          if (Oz.isBlockInLoadedChunk(sz, Fz, Xz) && 0 === Oz.getBlockId(sz, Fz, Xz)) {
            const zz = vz.shift();
            Oz.setBlockId(sz, Fz, Xz, zz)
          }
        },
        onPlayerAltAction: (zz, tz, sz, Wz, Xz, oz) => {
          ! function(zz, tz, sz, Wz) {
            if (!sz || "Mesh" !== zz.getEntityType(sz)) return !1;
            const Xz = Fz[zz.getEntityName(sz)];
            !!Xz && zz.openShop(tz, Wz, Xz)
          }(Oz, zz, oz, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);