export const id = 21;
export const ids = [21];
export const modules = {
  39221: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => KT
    });
    const lT = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const MT = 6400;
    const KT = function(TT, kT, cT, KT) {
      let OT, {
          localPlayerId: yT
        } = KT,
        fT = [];
      return {
        onCreate: TT => {
          OT = TT
        },
        onReceivedMessageFromServer: (TT, kT) => {
          "oneBlockNextBlocks" === TT && (fT = kT.blocks.map((TT => OT.blockNameToBlockId(TT))))
        },
        UA: () => {
          if (0 === fT.length) return;
          const TT = OT.getPositionView(yT),
            kT = function(TT, kT) {
              const cT = Math.ceil((TT - 3200) / MT);
              if (cT !== Math.ceil((kT - 3200) / MT) || cT <= 0) return null;
              const lT = cT * MT + 6;
              return [lT, 10, lT]
            }(TT[0], TT[2]);
          if (!kT) return;
          const [cT, lT, KT] = kT;
          if (OT.isBlockInLoadedChunk(cT, lT, KT) && 0 === OT.getBlockId(cT, lT, KT)) {
            const TT = fT.shift();
            OT.setBlockId(cT, lT, KT, TT)
          }
        },
        onPlayerAltAction: (TT, kT, cT, MT, KT, yT) => {
          ! function(TT, kT, cT, MT) {
            if (!cT || "Mesh" !== TT.getEntityType(cT)) return !1;
            const KT = lT[TT.getEntityName(cT)];
            !!KT && TT.openShop(kT, MT, KT)
          }(OT, TT, yT, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);