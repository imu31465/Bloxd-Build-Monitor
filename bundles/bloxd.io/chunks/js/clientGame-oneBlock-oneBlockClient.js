export const id = 21;
export const ids = [21];
export const modules = {
  39753: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Zu
    });
    const su = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const Uu = 6400;
    const Zu = function(uu, Eu, ju, Zu) {
      let Xu, {
          localPlayerId: lu
        } = Zu,
        qu = [];
      return {
        onCreate: uu => {
          Xu = uu
        },
        onReceivedMessageFromServer: (uu, Eu) => {
          "oneBlockNextBlocks" === uu && (qu = Eu.blocks.map((uu => Xu.blockNameToBlockId(uu))))
        },
        Tb: () => {
          if (0 === qu.length) return;
          const uu = Xu.getPositionView(lu),
            Eu = function(uu, Eu) {
              const ju = Math.ceil((uu - 3200) / Uu);
              if (ju !== Math.ceil((Eu - 3200) / Uu) || ju <= 0) return null;
              const su = ju * Uu + 6;
              return [su, 10, su]
            }(uu[0], uu[2]);
          if (!Eu) return;
          const [ju, su, Zu] = Eu;
          if (Xu.isBlockInLoadedChunk(ju, su, Zu) && 0 === Xu.getBlockId(ju, su, Zu)) {
            const uu = qu.shift();
            Xu.setBlockId(ju, su, Zu, uu)
          }
        },
        onPlayerAltAction: (uu, Eu, ju, Uu, Zu, lu) => {
          ! function(uu, Eu, ju, Uu) {
            if (!ju || "Mesh" !== uu.getEntityType(ju)) return !1;
            const Zu = su[uu.getEntityName(ju)];
            !!Zu && uu.openShop(Eu, Uu, Zu)
          }(Xu, uu, lu, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);