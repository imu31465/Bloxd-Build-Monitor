export const id = 25;
export const ids = [25];
export const modules = {
  40235: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => QB
    });
    const YB = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const DB = 6400;
    const QB = function(BB, OB, GB, QB) {
      let oB, {
          localPlayerId: jB
        } = QB,
        yB = [];
      return {
        onCreate: BB => {
          oB = BB
        },
        onReceivedMessageFromServer: (BB, OB) => {
          "oneBlockNextBlocks" === BB && (yB = OB.blocks.map((BB => oB.blockNameToBlockId(BB))))
        },
        kP: () => {
          if (0 === yB.length) return;
          const BB = oB.getPositionView(jB),
            OB = function(BB, OB) {
              const GB = Math.ceil((BB - 3200) / DB);
              if (GB !== Math.ceil((OB - 3200) / DB) || GB <= 0) return null;
              const YB = GB * DB + 6;
              return [YB, 10, YB]
            }(BB[0], BB[2]);
          if (!OB) return;
          const [GB, YB, QB] = OB;
          if (oB.isBlockInLoadedChunk(GB, YB, QB) && 0 === oB.getBlockId(GB, YB, QB)) {
            const BB = yB.shift();
            oB.setBlockId(GB, YB, QB, BB)
          }
        },
        onPlayerAltAction: (BB, OB, GB, DB, QB, jB) => {
          ! function(BB, OB, GB, DB) {
            if (!GB || "Mesh" !== BB.getEntityType(GB)) return !1;
            const QB = YB[BB.getEntityName(GB)];
            !!QB && BB.openShop(OB, DB, QB)
          }(oB, BB, jB, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);