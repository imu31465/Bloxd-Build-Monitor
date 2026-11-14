export const id = 19;
export const ids = [19];
export const modules = {
  37287: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => zR
    });
    const wW = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const CW = 6400;
    const zR = function(WW, RW, MW, zR) {
      let AW, {
          localPlayerId: bR
        } = zR,
        yR = [];
      return {
        onCreate: WW => {
          AW = WW
        },
        onReceivedMessageFromServer: (WW, RW) => {
          "oneBlockNextBlocks" === WW && (yR = RW.blocks.map((WW => AW.blockNameToBlockId(WW))))
        },
        WR: () => {
          if (0 === yR.length) return;
          const WW = AW.getPositionView(bR),
            RW = function(WW, RW) {
              const MW = Math.ceil((WW - 3200) / CW);
              if (MW !== Math.ceil((RW - 3200) / CW) || MW <= 0) return null;
              const wW = MW * CW + 6;
              return [wW, 10, wW]
            }(WW[0], WW[2]);
          if (!RW) return;
          const [MW, wW, zR] = RW;
          if (AW.isBlockInLoadedChunk(MW, wW, zR) && 0 === AW.getBlockId(MW, wW, zR)) {
            const WW = yR.shift();
            AW.setBlockId(MW, wW, zR, WW)
          }
        },
        onPlayerAltAction: (WW, RW, MW, CW, zR, bR) => {
          ! function(WW, RW, MW, CW) {
            if (!MW || "Mesh" !== WW.getEntityType(MW)) return !1;
            const zR = wW[WW.getEntityName(MW)];
            !!zR && WW.openShop(RW, CW, zR)
          }(AW, WW, bR, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);