export const id = 25;
export const ids = [25];
export const modules = {
  40582: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => jM
    });
    const OM = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const SM = 6400;
    const jM = function(MM, rM, iM, jM) {
      let aM, {
          localPlayerId: PM
        } = jM,
        nM = [];
      return {
        onCreate: MM => {
          aM = MM
        },
        onReceivedMessageFromServer: (MM, rM) => {
          "oneBlockNextBlocks" === MM && (nM = rM.blocks.map((MM => aM.blockNameToBlockId(MM))))
        },
        bL: () => {
          if (0 === nM.length) return;
          const MM = aM.getPositionView(PM),
            rM = function(MM, rM) {
              const iM = Math.ceil((MM - 3200) / SM);
              if (iM !== Math.ceil((rM - 3200) / SM) || iM <= 0) return null;
              const OM = iM * SM + 6;
              return [OM, 10, OM]
            }(MM[0], MM[2]);
          if (!rM) return;
          const [iM, OM, jM] = rM;
          if (aM.isBlockInLoadedChunk(iM, OM, jM) && 0 === aM.getBlockId(iM, OM, jM)) {
            const MM = nM.shift();
            aM.setBlockId(iM, OM, jM, MM)
          }
        },
        onPlayerAltAction: (MM, rM, iM, SM, jM, PM) => {
          ! function(MM, rM, iM, SM) {
            if (!iM || "Mesh" !== MM.getEntityType(iM)) return !1;
            const jM = OM[MM.getEntityName(iM)];
            !!jM && MM.openShop(rM, SM, jM)
          }(aM, MM, PM, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);