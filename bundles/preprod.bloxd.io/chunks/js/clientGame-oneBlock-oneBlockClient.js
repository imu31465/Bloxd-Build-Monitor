export const id = 25;
export const ids = [25];
export const modules = {
  40342: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => QU
    });
    const cU = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const yU = 6400;
    const QU = function(UU, XU, zU, QU) {
      let AU, {
          localPlayerId: FU
        } = QU,
        oU = [];
      return {
        onCreate: UU => {
          AU = UU
        },
        onReceivedMessageFromServer: (UU, XU) => {
          "oneBlockNextBlocks" === UU && (oU = XU.blocks.map((UU => AU.blockNameToBlockId(UU))))
        },
        LY: () => {
          if (0 === oU.length) return;
          const UU = AU.getPositionView(FU),
            XU = function(UU, XU) {
              const zU = Math.ceil((UU - 3200) / yU);
              if (zU !== Math.ceil((XU - 3200) / yU) || zU <= 0) return null;
              const cU = zU * yU + 6;
              return [cU, 10, cU]
            }(UU[0], UU[2]);
          if (!XU) return;
          const [zU, cU, QU] = XU;
          if (AU.isBlockInLoadedChunk(zU, cU, QU) && 0 === AU.getBlockId(zU, cU, QU)) {
            const UU = oU.shift();
            AU.setBlockId(zU, cU, QU, UU)
          }
        },
        onPlayerAltAction: (UU, XU, zU, yU, QU, FU) => {
          ! function(UU, XU, zU, yU) {
            if (!zU || "Mesh" !== UU.getEntityType(zU)) return !1;
            const QU = cU[UU.getEntityName(zU)];
            !!QU && UU.openShop(XU, yU, QU)
          }(AU, UU, FU, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);