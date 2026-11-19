export const id = 21;
export const ids = [21];
export const modules = {
  38380: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => kT
    });
    const iT = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const zT = 6400;
    const kT = function(TT, oT, IT, kT) {
      let WT, {
          localPlayerId: XT
        } = kT,
        BT = [];
      return {
        onCreate: TT => {
          WT = TT
        },
        onReceivedMessageFromServer: (TT, oT) => {
          "oneBlockNextBlocks" === TT && (BT = oT.blocks.map((TT => WT.blockNameToBlockId(TT))))
        },
        dD: () => {
          if (0 === BT.length) return;
          const TT = WT.getPositionView(XT),
            oT = function(TT, oT) {
              const IT = Math.ceil((TT - 3200) / zT);
              if (IT !== Math.ceil((oT - 3200) / zT) || IT <= 0) return null;
              const iT = IT * zT + 6;
              return [iT, 10, iT]
            }(TT[0], TT[2]);
          if (!oT) return;
          const [IT, iT, kT] = oT;
          if (WT.isBlockInLoadedChunk(IT, iT, kT) && 0 === WT.getBlockId(IT, iT, kT)) {
            const TT = BT.shift();
            WT.setBlockId(IT, iT, kT, TT)
          }
        },
        onPlayerAltAction: (TT, oT, IT, zT, kT, XT) => {
          ! function(TT, oT, IT, zT) {
            if (!IT || "Mesh" !== TT.getEntityType(IT)) return !1;
            const kT = iT[TT.getEntityName(IT)];
            !!kT && TT.openShop(oT, zT, kT)
          }(WT, TT, XT, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);