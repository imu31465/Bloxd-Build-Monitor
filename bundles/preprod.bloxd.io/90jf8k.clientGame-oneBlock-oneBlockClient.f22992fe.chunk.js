export const id = 19;
export const ids = [19];
export const modules = {
  37645: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => uF
    });
    const CF = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const AF = 6400;
    const uF = function(FF, WF, SF, uF) {
      let hF, {
          localPlayerId: bW
        } = uF,
        dF = [];
      return {
        onCreate: FF => {
          hF = FF
        },
        onReceivedMessageFromServer: (FF, WF) => {
          "oneBlockNextBlocks" === FF && (dF = WF.blocks.map((FF => hF.blockNameToBlockId(FF))))
        },
        lF: () => {
          if (0 === dF.length) return;
          const FF = hF.getPositionView(bW),
            WF = function(FF, WF) {
              const SF = Math.ceil((FF - 3200) / AF);
              if (SF !== Math.ceil((WF - 3200) / AF) || SF <= 0) return null;
              const CF = SF * AF + 6;
              return [CF, 10, CF]
            }(FF[0], FF[2]);
          if (!WF) return;
          const [SF, CF, uF] = WF;
          if (hF.isBlockInLoadedChunk(SF, CF, uF) && 0 === hF.getBlockId(SF, CF, uF)) {
            const FF = dF.shift();
            hF.setBlockId(SF, CF, uF, FF)
          }
        },
        onPlayerAltAction: (FF, WF, SF, AF, uF, bW) => {
          ! function(FF, WF, SF, AF) {
            if (!SF || "Mesh" !== FF.getEntityType(SF)) return !1;
            const uF = CF[FF.getEntityName(SF)];
            !!uF && FF.openShop(WF, AF, uF)
          }(hF, FF, bW, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);