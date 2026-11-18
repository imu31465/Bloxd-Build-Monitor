export const id = 21;
export const ids = [21];
export const modules = {
  38412: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => eJ
    });
    const FJ = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const UJ = 6400;
    const eJ = function(JJ, cJ, ZJ, eJ) {
      let XJ, {
          localPlayerId: AJ
        } = eJ,
        qJ = [];
      return {
        onCreate: JJ => {
          XJ = JJ
        },
        onReceivedMessageFromServer: (JJ, cJ) => {
          "oneBlockNextBlocks" === JJ && (qJ = cJ.blocks.map((JJ => XJ.blockNameToBlockId(JJ))))
        },
        Hh: () => {
          if (0 === qJ.length) return;
          const JJ = XJ.getPositionView(AJ),
            cJ = function(JJ, cJ) {
              const ZJ = Math.ceil((JJ - 3200) / UJ);
              if (ZJ !== Math.ceil((cJ - 3200) / UJ) || ZJ <= 0) return null;
              const FJ = ZJ * UJ + 6;
              return [FJ, 10, FJ]
            }(JJ[0], JJ[2]);
          if (!cJ) return;
          const [ZJ, FJ, eJ] = cJ;
          if (XJ.isBlockInLoadedChunk(ZJ, FJ, eJ) && 0 === XJ.getBlockId(ZJ, FJ, eJ)) {
            const JJ = qJ.shift();
            XJ.setBlockId(ZJ, FJ, eJ, JJ)
          }
        },
        onPlayerAltAction: (JJ, cJ, ZJ, UJ, eJ, AJ) => {
          ! function(JJ, cJ, ZJ, UJ) {
            if (!ZJ || "Mesh" !== JJ.getEntityType(ZJ)) return !1;
            const eJ = FJ[JJ.getEntityName(ZJ)];
            !!eJ && JJ.openShop(cJ, UJ, eJ)
          }(XJ, JJ, AJ, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);