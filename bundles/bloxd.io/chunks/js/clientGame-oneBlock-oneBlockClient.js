export const id = 21;
export const ids = [21];
export const modules = {
  39582: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => MT
    });
    const WT = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const zT = 6400;
    const MT = function(TT, UT, mT, MT) {
      let gT, {
          localPlayerId: nT
        } = MT,
        HT = [];
      return {
        onCreate: TT => {
          gT = TT
        },
        onReceivedMessageFromServer: (TT, UT) => {
          "oneBlockNextBlocks" === TT && (HT = UT.blocks.map((TT => gT.blockNameToBlockId(TT))))
        },
        Cl: () => {
          if (0 === HT.length) return;
          const TT = gT.getPositionView(nT),
            UT = function(TT, UT) {
              const mT = Math.ceil((TT - 3200) / zT);
              if (mT !== Math.ceil((UT - 3200) / zT) || mT <= 0) return null;
              const WT = mT * zT + 6;
              return [WT, 10, WT]
            }(TT[0], TT[2]);
          if (!UT) return;
          const [mT, WT, MT] = UT;
          if (gT.isBlockInLoadedChunk(mT, WT, MT) && 0 === gT.getBlockId(mT, WT, MT)) {
            const TT = HT.shift();
            gT.setBlockId(mT, WT, MT, TT)
          }
        },
        onPlayerAltAction: (TT, UT, mT, zT, MT, nT) => {
          ! function(TT, UT, mT, zT) {
            if (!mT || "Mesh" !== TT.getEntityType(mT)) return !1;
            const MT = WT[TT.getEntityName(mT)];
            !!MT && TT.openShop(UT, zT, MT)
          }(gT, TT, nT, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);