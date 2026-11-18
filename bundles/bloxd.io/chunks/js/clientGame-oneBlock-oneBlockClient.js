export const id = 21;
export const ids = [21];
export const modules = {
  38371: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => pB
    });
    const VB = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const yB = 6400;
    const pB = function(BB, TB, dB, pB) {
      let lB, {
          localPlayerId: JB
        } = pB,
        YB = [];
      return {
        onCreate: BB => {
          lB = BB
        },
        onReceivedMessageFromServer: (BB, TB) => {
          "oneBlockNextBlocks" === BB && (YB = TB.blocks.map((BB => lB.blockNameToBlockId(BB))))
        },
        dL: () => {
          if (0 === YB.length) return;
          const BB = lB.getPositionView(JB),
            TB = function(BB, TB) {
              const dB = Math.ceil((BB - 3200) / yB);
              if (dB !== Math.ceil((TB - 3200) / yB) || dB <= 0) return null;
              const VB = dB * yB + 6;
              return [VB, 10, VB]
            }(BB[0], BB[2]);
          if (!TB) return;
          const [dB, VB, pB] = TB;
          if (lB.isBlockInLoadedChunk(dB, VB, pB) && 0 === lB.getBlockId(dB, VB, pB)) {
            const BB = YB.shift();
            lB.setBlockId(dB, VB, pB, BB)
          }
        },
        onPlayerAltAction: (BB, TB, dB, yB, pB, JB) => {
          ! function(BB, TB, dB, yB) {
            if (!dB || "Mesh" !== BB.getEntityType(dB)) return !1;
            const pB = VB[BB.getEntityName(dB)];
            !!pB && BB.openShop(TB, yB, pB)
          }(lB, BB, JB, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);