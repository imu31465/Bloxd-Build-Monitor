export const id = 21;
export const ids = [21];
export const modules = {
  39035: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => ak
    });
    const Rk = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const tk = 6400;
    const ak = function(kk, Fk, Bk, ak) {
      let Xk, {
          localPlayerId: bk
        } = ak,
        wk = [];
      return {
        onCreate: kk => {
          Xk = kk
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          "oneBlockNextBlocks" === kk && (wk = Fk.blocks.map((kk => Xk.blockNameToBlockId(kk))))
        },
        yJ: () => {
          if (0 === wk.length) return;
          const kk = Xk.getPositionView(bk),
            Fk = function(kk, Fk) {
              const Bk = Math.ceil((kk - 3200) / tk);
              if (Bk !== Math.ceil((Fk - 3200) / tk) || Bk <= 0) return null;
              const Rk = Bk * tk + 6;
              return [Rk, 10, Rk]
            }(kk[0], kk[2]);
          if (!Fk) return;
          const [Bk, Rk, ak] = Fk;
          if (Xk.isBlockInLoadedChunk(Bk, Rk, ak) && 0 === Xk.getBlockId(Bk, Rk, ak)) {
            const kk = wk.shift();
            Xk.setBlockId(Bk, Rk, ak, kk)
          }
        },
        onPlayerAltAction: (kk, Fk, Bk, tk, ak, bk) => {
          ! function(kk, Fk, Bk, tk) {
            if (!Bk || "Mesh" !== kk.getEntityType(Bk)) return !1;
            const ak = Rk[kk.getEntityName(Bk)];
            !!ak && kk.openShop(Fk, tk, ak)
          }(Xk, kk, bk, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);