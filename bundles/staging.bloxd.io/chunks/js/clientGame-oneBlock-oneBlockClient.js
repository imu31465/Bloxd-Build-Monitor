export const id = 21;
export const ids = [21];
export const modules = {
  39480: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => XS
    });
    const tS = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const bS = 6400;
    const XS = function(SS, HS, gS, XS) {
      let xS, {
          localPlayerId: NS
        } = XS,
        qS = [];
      return {
        onCreate: SS => {
          xS = SS
        },
        onReceivedMessageFromServer: (SS, HS) => {
          "oneBlockNextBlocks" === SS && (qS = HS.blocks.map((SS => xS.blockNameToBlockId(SS))))
        },
        mf: () => {
          if (0 === qS.length) return;
          const SS = xS.getPositionView(NS),
            HS = function(SS, HS) {
              const gS = Math.ceil((SS - 3200) / bS);
              if (gS !== Math.ceil((HS - 3200) / bS) || gS <= 0) return null;
              const tS = gS * bS + 6;
              return [tS, 10, tS]
            }(SS[0], SS[2]);
          if (!HS) return;
          const [gS, tS, XS] = HS;
          if (xS.isBlockInLoadedChunk(gS, tS, XS) && 0 === xS.getBlockId(gS, tS, XS)) {
            const SS = qS.shift();
            xS.setBlockId(gS, tS, XS, SS)
          }
        },
        onPlayerAltAction: (SS, HS, gS, bS, XS, NS) => {
          ! function(SS, HS, gS, bS) {
            if (!gS || "Mesh" !== SS.getEntityType(gS)) return !1;
            const XS = tS[SS.getEntityName(gS)];
            !!XS && SS.openShop(HS, bS, XS)
          }(xS, SS, NS, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);