export const id = 21;
export const ids = [21];
export const modules = {
  38964: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => oQ
    });
    const LQ = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const qQ = 6400;
    const oQ = function(QQ, FQ, wQ, oQ) {
      let DQ, {
          localPlayerId: kQ
        } = oQ,
        vQ = [];
      return {
        onCreate: QQ => {
          DQ = QQ
        },
        onReceivedMessageFromServer: (QQ, FQ) => {
          "oneBlockNextBlocks" === QQ && (vQ = FQ.blocks.map((QQ => DQ.blockNameToBlockId(QQ))))
        },
        fH: () => {
          if (0 === vQ.length) return;
          const QQ = DQ.getPositionView(kQ),
            FQ = function(QQ, FQ) {
              const wQ = Math.ceil((QQ - 3200) / qQ);
              if (wQ !== Math.ceil((FQ - 3200) / qQ) || wQ <= 0) return null;
              const LQ = wQ * qQ + 6;
              return [LQ, 10, LQ]
            }(QQ[0], QQ[2]);
          if (!FQ) return;
          const [wQ, LQ, oQ] = FQ;
          if (DQ.isBlockInLoadedChunk(wQ, LQ, oQ) && 0 === DQ.getBlockId(wQ, LQ, oQ)) {
            const QQ = vQ.shift();
            DQ.setBlockId(wQ, LQ, oQ, QQ)
          }
        },
        onPlayerAltAction: (QQ, FQ, wQ, qQ, oQ, kQ) => {
          ! function(QQ, FQ, wQ, qQ) {
            if (!wQ || "Mesh" !== QQ.getEntityType(wQ)) return !1;
            const oQ = LQ[QQ.getEntityName(wQ)];
            !!oQ && QQ.openShop(FQ, qQ, oQ)
          }(DQ, QQ, kQ, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);