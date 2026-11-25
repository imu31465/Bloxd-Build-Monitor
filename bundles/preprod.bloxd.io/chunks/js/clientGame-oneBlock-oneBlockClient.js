export const id = 22;
export const ids = [22];
export const modules = {
  39735: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => TQ
    });
    const wQ = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const qQ = 6400;
    const TQ = function(QQ, WQ, XQ, TQ) {
      let zQ, {
          localPlayerId: sQ
        } = TQ,
        FQ = [];
      return {
        onCreate: QQ => {
          zQ = QQ
        },
        onReceivedMessageFromServer: (QQ, WQ) => {
          "oneBlockNextBlocks" === QQ && (FQ = WQ.blocks.map((QQ => zQ.blockNameToBlockId(QQ))))
        },
        fJ: () => {
          if (0 === FQ.length) return;
          const QQ = zQ.getPositionView(sQ),
            WQ = function(QQ, WQ) {
              const XQ = Math.ceil((QQ - 3200) / qQ);
              if (XQ !== Math.ceil((WQ - 3200) / qQ) || XQ <= 0) return null;
              const wQ = XQ * qQ + 6;
              return [wQ, 10, wQ]
            }(QQ[0], QQ[2]);
          if (!WQ) return;
          const [XQ, wQ, TQ] = WQ;
          if (zQ.isBlockInLoadedChunk(XQ, wQ, TQ) && 0 === zQ.getBlockId(XQ, wQ, TQ)) {
            const QQ = FQ.shift();
            zQ.setBlockId(XQ, wQ, TQ, QQ)
          }
        },
        onPlayerAltAction: (QQ, WQ, XQ, qQ, TQ, sQ) => {
          ! function(QQ, WQ, XQ, qQ) {
            if (!XQ || "Mesh" !== QQ.getEntityType(XQ)) return !1;
            const TQ = wQ[QQ.getEntityName(XQ)];
            !!TQ && QQ.openShop(WQ, qQ, TQ)
          }(zQ, QQ, sQ, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);