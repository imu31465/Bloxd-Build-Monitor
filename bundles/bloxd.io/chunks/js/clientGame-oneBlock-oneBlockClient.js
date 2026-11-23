export const id = 21;
export const ids = [21];
export const modules = {
  39284: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => bC
    });
    const QC = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const wC = 6400;
    const bC = function(CC, zC, ZC, bC) {
      let nC, {
          localPlayerId: fC
        } = bC,
        oC = [];
      return {
        onCreate: CC => {
          nC = CC
        },
        onReceivedMessageFromServer: (CC, zC) => {
          "oneBlockNextBlocks" === CC && (oC = zC.blocks.map((CC => nC.blockNameToBlockId(CC))))
        },
        ZN: () => {
          if (0 === oC.length) return;
          const CC = nC.getPositionView(fC),
            zC = function(CC, zC) {
              const ZC = Math.ceil((CC - 3200) / wC);
              if (ZC !== Math.ceil((zC - 3200) / wC) || ZC <= 0) return null;
              const QC = ZC * wC + 6;
              return [QC, 10, QC]
            }(CC[0], CC[2]);
          if (!zC) return;
          const [ZC, QC, bC] = zC;
          if (nC.isBlockInLoadedChunk(ZC, QC, bC) && 0 === nC.getBlockId(ZC, QC, bC)) {
            const CC = oC.shift();
            nC.setBlockId(ZC, QC, bC, CC)
          }
        },
        onPlayerAltAction: (CC, zC, ZC, wC, bC, fC) => {
          ! function(CC, zC, ZC, wC) {
            if (!ZC || "Mesh" !== CC.getEntityType(ZC)) return !1;
            const bC = QC[CC.getEntityName(ZC)];
            !!bC && CC.openShop(zC, wC, bC)
          }(nC, CC, fC, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);