export const id = 21;
export const ids = [21];
export const modules = {
  39864: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => LG
    });
    const wG = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const SG = 6400;
    const LG = function(GG, bG, ZG, LG) {
      let yG, {
          localPlayerId: kG
        } = LG,
        UG = [];
      return {
        onCreate: GG => {
          yG = GG
        },
        onReceivedMessageFromServer: (GG, bG) => {
          "oneBlockNextBlocks" === GG && (UG = bG.blocks.map((GG => yG.blockNameToBlockId(GG))))
        },
        Tp: () => {
          if (0 === UG.length) return;
          const GG = yG.getPositionView(kG),
            bG = function(GG, bG) {
              const ZG = Math.ceil((GG - 3200) / SG);
              if (ZG !== Math.ceil((bG - 3200) / SG) || ZG <= 0) return null;
              const wG = ZG * SG + 6;
              return [wG, 10, wG]
            }(GG[0], GG[2]);
          if (!bG) return;
          const [ZG, wG, LG] = bG;
          if (yG.isBlockInLoadedChunk(ZG, wG, LG) && 0 === yG.getBlockId(ZG, wG, LG)) {
            const GG = UG.shift();
            yG.setBlockId(ZG, wG, LG, GG)
          }
        },
        onPlayerAltAction: (GG, bG, ZG, SG, LG, kG) => {
          ! function(GG, bG, ZG, SG) {
            if (!ZG || "Mesh" !== GG.getEntityType(ZG)) return !1;
            const LG = wG[GG.getEntityName(ZG)];
            !!LG && GG.openShop(bG, SG, LG)
          }(yG, GG, kG, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);