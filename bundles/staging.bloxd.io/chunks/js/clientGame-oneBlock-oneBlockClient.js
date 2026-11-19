export const id = 21;
export const ids = [21];
export const modules = {
  38760: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => IY
    });
    const FY = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const AY = 6400;
    const IY = function(YY, rY, DY, IY) {
      let RY, {
          localPlayerId: OY
        } = IY,
        gY = [];
      return {
        onCreate: YY => {
          RY = YY
        },
        onReceivedMessageFromServer: (YY, rY) => {
          "oneBlockNextBlocks" === YY && (gY = rY.blocks.map((YY => RY.blockNameToBlockId(YY))))
        },
        Zu: () => {
          if (0 === gY.length) return;
          const YY = RY.getPositionView(OY),
            rY = function(YY, rY) {
              const DY = Math.ceil((YY - 3200) / AY);
              if (DY !== Math.ceil((rY - 3200) / AY) || DY <= 0) return null;
              const FY = DY * AY + 6;
              return [FY, 10, FY]
            }(YY[0], YY[2]);
          if (!rY) return;
          const [DY, FY, IY] = rY;
          if (RY.isBlockInLoadedChunk(DY, FY, IY) && 0 === RY.getBlockId(DY, FY, IY)) {
            const YY = gY.shift();
            RY.setBlockId(DY, FY, IY, YY)
          }
        },
        onPlayerAltAction: (YY, rY, DY, AY, IY, OY) => {
          ! function(YY, rY, DY, AY) {
            if (!DY || "Mesh" !== YY.getEntityType(DY)) return !1;
            const IY = FY[YY.getEntityName(DY)];
            !!IY && YY.openShop(rY, AY, IY)
          }(RY, YY, OY, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);