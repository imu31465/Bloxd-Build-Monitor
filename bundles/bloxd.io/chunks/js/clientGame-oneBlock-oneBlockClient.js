export const id = 21;
export const ids = [21];
export const modules = {
  39458: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => ik
    });
    const Xk = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const Tk = 6400;
    const ik = function(kk, Fk, Ik, ik) {
      let yk, {
          localPlayerId: lk
        } = ik,
        ak = [];
      return {
        onCreate: kk => {
          yk = kk
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          "oneBlockNextBlocks" === kk && (ak = Fk.blocks.map((kk => yk.blockNameToBlockId(kk))))
        },
        Dt: () => {
          if (0 === ak.length) return;
          const kk = yk.getPositionView(lk),
            Fk = function(kk, Fk) {
              const Ik = Math.ceil((kk - 3200) / Tk);
              if (Ik !== Math.ceil((Fk - 3200) / Tk) || Ik <= 0) return null;
              const Xk = Ik * Tk + 6;
              return [Xk, 10, Xk]
            }(kk[0], kk[2]);
          if (!Fk) return;
          const [Ik, Xk, ik] = Fk;
          if (yk.isBlockInLoadedChunk(Ik, Xk, ik) && 0 === yk.getBlockId(Ik, Xk, ik)) {
            const kk = ak.shift();
            yk.setBlockId(Ik, Xk, ik, kk)
          }
        },
        onPlayerAltAction: (kk, Fk, Ik, Tk, ik, lk) => {
          ! function(kk, Fk, Ik, Tk) {
            if (!Ik || "Mesh" !== kk.getEntityType(Ik)) return !1;
            const ik = Xk[kk.getEntityName(Ik)];
            !!ik && kk.openShop(Fk, Tk, ik)
          }(yk, kk, lk, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);