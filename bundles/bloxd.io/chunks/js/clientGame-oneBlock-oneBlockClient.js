export const id = 21;
export const ids = [21];
export const modules = {
  38755: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => iD
    });
    const ID = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const pD = 6400;
    const iD = function(DD, CD, cD, iD) {
      let fD, {
          localPlayerId: bD
        } = iD,
        QD = [];
      return {
        onCreate: DD => {
          fD = DD
        },
        onReceivedMessageFromServer: (DD, CD) => {
          "oneBlockNextBlocks" === DD && (QD = CD.blocks.map((DD => fD.blockNameToBlockId(DD))))
        },
        wy: () => {
          if (0 === QD.length) return;
          const DD = fD.getPositionView(bD),
            CD = function(DD, CD) {
              const cD = Math.ceil((DD - 3200) / pD);
              if (cD !== Math.ceil((CD - 3200) / pD) || cD <= 0) return null;
              const ID = cD * pD + 6;
              return [ID, 10, ID]
            }(DD[0], DD[2]);
          if (!CD) return;
          const [cD, ID, iD] = CD;
          if (fD.isBlockInLoadedChunk(cD, ID, iD) && 0 === fD.getBlockId(cD, ID, iD)) {
            const DD = QD.shift();
            fD.setBlockId(cD, ID, iD, DD)
          }
        },
        onPlayerAltAction: (DD, CD, cD, pD, iD, bD) => {
          ! function(DD, CD, cD, pD) {
            if (!cD || "Mesh" !== DD.getEntityType(cD)) return !1;
            const iD = ID[DD.getEntityName(cD)];
            !!iD && DD.openShop(CD, pD, iD)
          }(fD, DD, bD, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);