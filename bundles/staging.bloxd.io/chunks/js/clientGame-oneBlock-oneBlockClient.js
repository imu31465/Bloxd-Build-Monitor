export const id = 21;
export const ids = [21];
export const modules = {
  38981: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => EU
    });
    const tU = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const pU = 6400;
    const EU = function(UU, RU, gU, EU) {
      let PU, {
          localPlayerId: TU
        } = EU,
        qU = [];
      return {
        onCreate: UU => {
          PU = UU
        },
        onReceivedMessageFromServer: (UU, RU) => {
          "oneBlockNextBlocks" === UU && (qU = RU.blocks.map((UU => PU.blockNameToBlockId(UU))))
        },
        HG: () => {
          if (0 === qU.length) return;
          const UU = PU.getPositionView(TU),
            RU = function(UU, RU) {
              const gU = Math.ceil((UU - 3200) / pU);
              if (gU !== Math.ceil((RU - 3200) / pU) || gU <= 0) return null;
              const tU = gU * pU + 6;
              return [tU, 10, tU]
            }(UU[0], UU[2]);
          if (!RU) return;
          const [gU, tU, EU] = RU;
          if (PU.isBlockInLoadedChunk(gU, tU, EU) && 0 === PU.getBlockId(gU, tU, EU)) {
            const UU = qU.shift();
            PU.setBlockId(gU, tU, EU, UU)
          }
        },
        onPlayerAltAction: (UU, RU, gU, pU, EU, TU) => {
          ! function(UU, RU, gU, pU) {
            if (!gU || "Mesh" !== UU.getEntityType(gU)) return !1;
            const EU = tU[UU.getEntityName(gU)];
            !!EU && UU.openShop(RU, pU, EU)
          }(PU, UU, TU, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);