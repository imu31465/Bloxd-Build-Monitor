export const id = 21;
export const ids = [21];
export const modules = {
  39168: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => Qu
    });
    const Eu = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const Ku = 6400;
    const Qu = function(uu, Ru, yu, Qu) {
      let mu, {
          localPlayerId: Ju
        } = Qu,
        Nu = [];
      return {
        onCreate: uu => {
          mu = uu
        },
        onReceivedMessageFromServer: (uu, Ru) => {
          "oneBlockNextBlocks" === uu && (Nu = Ru.blocks.map((uu => mu.blockNameToBlockId(uu))))
        },
        sr: () => {
          if (0 === Nu.length) return;
          const uu = mu.getPositionView(Ju),
            Ru = function(uu, Ru) {
              const yu = Math.ceil((uu - 3200) / Ku);
              if (yu !== Math.ceil((Ru - 3200) / Ku) || yu <= 0) return null;
              const Eu = yu * Ku + 6;
              return [Eu, 10, Eu]
            }(uu[0], uu[2]);
          if (!Ru) return;
          const [yu, Eu, Qu] = Ru;
          if (mu.isBlockInLoadedChunk(yu, Eu, Qu) && 0 === mu.getBlockId(yu, Eu, Qu)) {
            const uu = Nu.shift();
            mu.setBlockId(yu, Eu, Qu, uu)
          }
        },
        onPlayerAltAction: (uu, Ru, yu, Ku, Qu, Ju) => {
          ! function(uu, Ru, yu, Ku) {
            if (!yu || "Mesh" !== uu.getEntityType(yu)) return !1;
            const Qu = Eu[uu.getEntityName(yu)];
            !!Qu && uu.openShop(Ru, Ku, Qu)
          }(mu, uu, Ju, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);