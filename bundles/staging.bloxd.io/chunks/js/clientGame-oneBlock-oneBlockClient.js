export const id = 21;
export const ids = [21];
export const modules = {
  39055: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Gb
    });
    const Bb = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const Ob = 6400;
    const Gb = function(bb, ub, hb, Gb) {
      let Ub, {
          localPlayerId: Lb
        } = Gb,
        Yb = [];
      return {
        onCreate: bb => {
          Ub = bb
        },
        onReceivedMessageFromServer: (bb, ub) => {
          "oneBlockNextBlocks" === bb && (Yb = ub.blocks.map((bb => Ub.blockNameToBlockId(bb))))
        },
        gH: () => {
          if (0 === Yb.length) return;
          const bb = Ub.getPositionView(Lb),
            ub = function(bb, ub) {
              const hb = Math.ceil((bb - 3200) / Ob);
              if (hb !== Math.ceil((ub - 3200) / Ob) || hb <= 0) return null;
              const Bb = hb * Ob + 6;
              return [Bb, 10, Bb]
            }(bb[0], bb[2]);
          if (!ub) return;
          const [hb, Bb, Gb] = ub;
          if (Ub.isBlockInLoadedChunk(hb, Bb, Gb) && 0 === Ub.getBlockId(hb, Bb, Gb)) {
            const bb = Yb.shift();
            Ub.setBlockId(hb, Bb, Gb, bb)
          }
        },
        onPlayerAltAction: (bb, ub, hb, Ob, Gb, Lb) => {
          ! function(bb, ub, hb, Ob) {
            if (!hb || "Mesh" !== bb.getEntityType(hb)) return !1;
            const Gb = Bb[bb.getEntityName(hb)];
            !!Gb && bb.openShop(ub, Ob, Gb)
          }(Ub, bb, Lb, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);