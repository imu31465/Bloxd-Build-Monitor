export const id = 21;
export const ids = [21];
export const modules = {
  39515: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => oB
    });
    const TB = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const JB = 6400;
    const oB = function(BB, IB, ZB, oB) {
      let GB, {
          localPlayerId: vB
        } = oB,
        kB = [];
      return {
        onCreate: BB => {
          GB = BB
        },
        onReceivedMessageFromServer: (BB, IB) => {
          "oneBlockNextBlocks" === BB && (kB = IB.blocks.map((BB => GB.blockNameToBlockId(BB))))
        },
        Iz: () => {
          if (0 === kB.length) return;
          const BB = GB.getPositionView(vB),
            IB = function(BB, IB) {
              const ZB = Math.ceil((BB - 3200) / JB);
              if (ZB !== Math.ceil((IB - 3200) / JB) || ZB <= 0) return null;
              const TB = ZB * JB + 6;
              return [TB, 10, TB]
            }(BB[0], BB[2]);
          if (!IB) return;
          const [ZB, TB, oB] = IB;
          if (GB.isBlockInLoadedChunk(ZB, TB, oB) && 0 === GB.getBlockId(ZB, TB, oB)) {
            const BB = kB.shift();
            GB.setBlockId(ZB, TB, oB, BB)
          }
        },
        onPlayerAltAction: (BB, IB, ZB, JB, oB, vB) => {
          ! function(BB, IB, ZB, JB) {
            if (!ZB || "Mesh" !== BB.getEntityType(ZB)) return !1;
            const oB = TB[BB.getEntityName(ZB)];
            !!oB && BB.openShop(IB, JB, oB)
          }(GB, BB, vB, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);