export const id = 21;
export const ids = [21];
export const modules = {
  38673: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => Tb
    });
    const Ab = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const Mb = 6400;
    const Tb = function(bb, ab, Ub, Tb) {
      let Eb, {
          localPlayerId: Yb
        } = Tb,
        Bb = [];
      return {
        onCreate: bb => {
          Eb = bb
        },
        onReceivedMessageFromServer: (bb, ab) => {
          "oneBlockNextBlocks" === bb && (Bb = ab.blocks.map((bb => Eb.blockNameToBlockId(bb))))
        },
        qL: () => {
          if (0 === Bb.length) return;
          const bb = Eb.getPositionView(Yb),
            ab = function(bb, ab) {
              const Ub = Math.ceil((bb - 3200) / Mb);
              if (Ub !== Math.ceil((ab - 3200) / Mb) || Ub <= 0) return null;
              const Ab = Ub * Mb + 6;
              return [Ab, 10, Ab]
            }(bb[0], bb[2]);
          if (!ab) return;
          const [Ub, Ab, Tb] = ab;
          if (Eb.isBlockInLoadedChunk(Ub, Ab, Tb) && 0 === Eb.getBlockId(Ub, Ab, Tb)) {
            const bb = Bb.shift();
            Eb.setBlockId(Ub, Ab, Tb, bb)
          }
        },
        onPlayerAltAction: (bb, ab, Ub, Mb, Tb, Yb) => {
          ! function(bb, ab, Ub, Mb) {
            if (!Ub || "Mesh" !== bb.getEntityType(Ub)) return !1;
            const Tb = Ab[bb.getEntityName(Ub)];
            !!Tb && bb.openShop(ab, Mb, Tb)
          }(Eb, bb, Yb, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);