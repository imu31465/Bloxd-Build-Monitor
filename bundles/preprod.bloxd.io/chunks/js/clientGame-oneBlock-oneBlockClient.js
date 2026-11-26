export const id = 25;
export const ids = [25];
export const modules = {
  40484: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => SH
    });
    const AH = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const rH = 6400;
    const SH = function(HH, BH, LH, SH) {
      let hH, {
          localPlayerId: tH
        } = SH,
        zH = [];
      return {
        onCreate: HH => {
          hH = HH
        },
        onReceivedMessageFromServer: (HH, BH) => {
          "oneBlockNextBlocks" === HH && (zH = BH.blocks.map((HH => hH.blockNameToBlockId(HH))))
        },
        IX: () => {
          if (0 === zH.length) return;
          const HH = hH.getPositionView(tH),
            BH = function(HH, BH) {
              const LH = Math.ceil((HH - 3200) / rH);
              if (LH !== Math.ceil((BH - 3200) / rH) || LH <= 0) return null;
              const AH = LH * rH + 6;
              return [AH, 10, AH]
            }(HH[0], HH[2]);
          if (!BH) return;
          const [LH, AH, SH] = BH;
          if (hH.isBlockInLoadedChunk(LH, AH, SH) && 0 === hH.getBlockId(LH, AH, SH)) {
            const HH = zH.shift();
            hH.setBlockId(LH, AH, SH, HH)
          }
        },
        onPlayerAltAction: (HH, BH, LH, rH, SH, tH) => {
          ! function(HH, BH, LH, rH) {
            if (!LH || "Mesh" !== HH.getEntityType(LH)) return !1;
            const SH = AH[HH.getEntityName(LH)];
            !!SH && HH.openShop(BH, rH, SH)
          }(hH, HH, tH, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);