export const id = 21;
export const ids = [21];
export const modules = {
  39368: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => Oq
    });
    const Yq = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const lq = 6400;
    const Oq = function(qq, Eq, gq, Oq) {
      let mq, {
          localPlayerId: xq
        } = Oq,
        Aq = [];
      return {
        onCreate: qq => {
          mq = qq
        },
        onReceivedMessageFromServer: (qq, Eq) => {
          "oneBlockNextBlocks" === qq && (Aq = Eq.blocks.map((qq => mq.blockNameToBlockId(qq))))
        },
        SB: () => {
          if (0 === Aq.length) return;
          const qq = mq.getPositionView(xq),
            Eq = function(qq, Eq) {
              const gq = Math.ceil((qq - 3200) / lq);
              if (gq !== Math.ceil((Eq - 3200) / lq) || gq <= 0) return null;
              const Yq = gq * lq + 6;
              return [Yq, 10, Yq]
            }(qq[0], qq[2]);
          if (!Eq) return;
          const [gq, Yq, Oq] = Eq;
          if (mq.isBlockInLoadedChunk(gq, Yq, Oq) && 0 === mq.getBlockId(gq, Yq, Oq)) {
            const qq = Aq.shift();
            mq.setBlockId(gq, Yq, Oq, qq)
          }
        },
        onPlayerAltAction: (qq, Eq, gq, lq, Oq, xq) => {
          ! function(qq, Eq, gq, lq) {
            if (!gq || "Mesh" !== qq.getEntityType(gq)) return !1;
            const Oq = Yq[qq.getEntityName(gq)];
            !!Oq && qq.openShop(Eq, lq, Oq)
          }(mq, qq, xq, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);