export const id = 21;
export const ids = [21];
export const modules = {
  38813: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => iz
    });
    const Ez = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const nz = 6400;
    const iz = function(zz, uz, bz, iz) {
      let lz, {
          localPlayerId: Mz
        } = iz,
        tz = [];
      return {
        onCreate: zz => {
          lz = zz
        },
        onReceivedMessageFromServer: (zz, uz) => {
          "oneBlockNextBlocks" === zz && (tz = uz.blocks.map((zz => lz.blockNameToBlockId(zz))))
        },
        sd: () => {
          if (0 === tz.length) return;
          const zz = lz.getPositionView(Mz),
            uz = function(zz, uz) {
              const bz = Math.ceil((zz - 3200) / nz);
              if (bz !== Math.ceil((uz - 3200) / nz) || bz <= 0) return null;
              const Ez = bz * nz + 6;
              return [Ez, 10, Ez]
            }(zz[0], zz[2]);
          if (!uz) return;
          const [bz, Ez, iz] = uz;
          if (lz.isBlockInLoadedChunk(bz, Ez, iz) && 0 === lz.getBlockId(bz, Ez, iz)) {
            const zz = tz.shift();
            lz.setBlockId(bz, Ez, iz, zz)
          }
        },
        onPlayerAltAction: (zz, uz, bz, nz, iz, Mz) => {
          ! function(zz, uz, bz, nz) {
            if (!bz || "Mesh" !== zz.getEntityType(bz)) return !1;
            const iz = Ez[zz.getEntityName(bz)];
            !!iz && zz.openShop(uz, nz, iz)
          }(lz, zz, Mz, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);