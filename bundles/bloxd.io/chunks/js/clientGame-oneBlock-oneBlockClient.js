export const id = 21;
export const ids = [21];
export const modules = {
  39018: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => Sk
    });
    const Dk = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const fk = 6400;
    const Sk = function(kk, ek, ik, Sk) {
      let bk, {
          localPlayerId: rk
        } = Sk,
        Pk = [];
      return {
        onCreate: kk => {
          bk = kk
        },
        onReceivedMessageFromServer: (kk, ek) => {
          "oneBlockNextBlocks" === kk && (Pk = ek.blocks.map((kk => bk.blockNameToBlockId(kk))))
        },
        Px: () => {
          if (0 === Pk.length) return;
          const kk = bk.getPositionView(rk),
            ek = function(kk, ek) {
              const ik = Math.ceil((kk - 3200) / fk);
              if (ik !== Math.ceil((ek - 3200) / fk) || ik <= 0) return null;
              const Dk = ik * fk + 6;
              return [Dk, 10, Dk]
            }(kk[0], kk[2]);
          if (!ek) return;
          const [ik, Dk, Sk] = ek;
          if (bk.isBlockInLoadedChunk(ik, Dk, Sk) && 0 === bk.getBlockId(ik, Dk, Sk)) {
            const kk = Pk.shift();
            bk.setBlockId(ik, Dk, Sk, kk)
          }
        },
        onPlayerAltAction: (kk, ek, ik, fk, Sk, rk) => {
          ! function(kk, ek, ik, fk) {
            if (!ik || "Mesh" !== kk.getEntityType(ik)) return !1;
            const Sk = Dk[kk.getEntityName(ik)];
            !!Sk && kk.openShop(ek, fk, Sk)
          }(bk, kk, rk, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);