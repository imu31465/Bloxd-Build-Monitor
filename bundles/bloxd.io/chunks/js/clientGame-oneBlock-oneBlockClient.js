export const id = 21;
export const ids = [21];
export const modules = {
  39537: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => dB
    });
    const QB = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const nB = 6400;
    const dB = function(BB, jB, zB, dB) {
      let IB, {
          localPlayerId: NB
        } = dB,
        uB = [];
      return {
        onCreate: BB => {
          IB = BB
        },
        onReceivedMessageFromServer: (BB, jB) => {
          "oneBlockNextBlocks" === BB && (uB = jB.blocks.map((BB => IB.blockNameToBlockId(BB))))
        },
        vp: () => {
          if (0 === uB.length) return;
          const BB = IB.getPositionView(NB),
            jB = function(BB, jB) {
              const zB = Math.ceil((BB - 3200) / nB);
              if (zB !== Math.ceil((jB - 3200) / nB) || zB <= 0) return null;
              const QB = zB * nB + 6;
              return [QB, 10, QB]
            }(BB[0], BB[2]);
          if (!jB) return;
          const [zB, QB, dB] = jB;
          if (IB.isBlockInLoadedChunk(zB, QB, dB) && 0 === IB.getBlockId(zB, QB, dB)) {
            const BB = uB.shift();
            IB.setBlockId(zB, QB, dB, BB)
          }
        },
        onPlayerAltAction: (BB, jB, zB, nB, dB, NB) => {
          ! function(BB, jB, zB, nB) {
            if (!zB || "Mesh" !== BB.getEntityType(zB)) return !1;
            const dB = QB[BB.getEntityName(zB)];
            !!dB && BB.openShop(jB, nB, dB)
          }(IB, BB, NB, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);