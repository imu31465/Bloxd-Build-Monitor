export const id = 21;
export const ids = [21];
export const modules = {
  39023: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => ab
    });
    const kb = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const Wb = 6400;
    const ab = function(bb, cb, sb, ab) {
      let Tb, {
          localPlayerId: Ub
        } = ab,
        Ib = [];
      return {
        onCreate: bb => {
          Tb = bb
        },
        onReceivedMessageFromServer: (bb, cb) => {
          "oneBlockNextBlocks" === bb && (Ib = cb.blocks.map((bb => Tb.blockNameToBlockId(bb))))
        },
        aX: () => {
          if (0 === Ib.length) return;
          const bb = Tb.getPositionView(Ub),
            cb = function(bb, cb) {
              const sb = Math.ceil((bb - 3200) / Wb);
              if (sb !== Math.ceil((cb - 3200) / Wb) || sb <= 0) return null;
              const kb = sb * Wb + 6;
              return [kb, 10, kb]
            }(bb[0], bb[2]);
          if (!cb) return;
          const [sb, kb, ab] = cb;
          if (Tb.isBlockInLoadedChunk(sb, kb, ab) && 0 === Tb.getBlockId(sb, kb, ab)) {
            const bb = Ib.shift();
            Tb.setBlockId(sb, kb, ab, bb)
          }
        },
        onPlayerAltAction: (bb, cb, sb, Wb, ab, Ub) => {
          ! function(bb, cb, sb, Wb) {
            if (!sb || "Mesh" !== bb.getEntityType(sb)) return !1;
            const ab = kb[bb.getEntityName(sb)];
            !!ab && bb.openShop(cb, Wb, ab)
          }(Tb, bb, Ub, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);