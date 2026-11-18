export const id = 21;
export const ids = [21];
export const modules = {
  38070: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => fy
    });
    const Uy = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const hy = 6400;
    const fy = function(yb, bb, Wy, fy) {
      let Zy, {
          localPlayerId: cb
        } = fy,
        Py = [];
      return {
        onCreate: yb => {
          Zy = yb
        },
        onReceivedMessageFromServer: (yb, bb) => {
          "oneBlockNextBlocks" === yb && (Py = bb.blocks.map((yb => Zy.blockNameToBlockId(yb))))
        },
        Zb: () => {
          if (0 === Py.length) return;
          const yb = Zy.getPositionView(cb),
            bb = function(yb, bb) {
              const Wy = Math.ceil((yb - 3200) / hy);
              if (Wy !== Math.ceil((bb - 3200) / hy) || Wy <= 0) return null;
              const Uy = Wy * hy + 6;
              return [Uy, 10, Uy]
            }(yb[0], yb[2]);
          if (!bb) return;
          const [Wy, Uy, fy] = bb;
          if (Zy.isBlockInLoadedChunk(Wy, Uy, fy) && 0 === Zy.getBlockId(Wy, Uy, fy)) {
            const yb = Py.shift();
            Zy.setBlockId(Wy, Uy, fy, yb)
          }
        },
        onPlayerAltAction: (yb, bb, Wy, hy, fy, cb) => {
          ! function(yb, bb, Wy, hy) {
            if (!Wy || "Mesh" !== yb.getEntityType(Wy)) return !1;
            const fy = Uy[yb.getEntityName(Wy)];
            !!fy && yb.openShop(bb, hy, fy)
          }(Zy, yb, cb, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);