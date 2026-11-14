export const id = 20;
export const ids = [20];
export const modules = {
  37748: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => rB
    });
    const Vc = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const Ic = 6400;
    const rB = function(cB, Bc, nc, rB) {
      let uc, {
          localPlayerId: sc
        } = rB,
        Mc = [];
      return {
        onCreate: cB => {
          uc = cB
        },
        onReceivedMessageFromServer: (cB, Bc) => {
          "oneBlockNextBlocks" === cB && (Mc = Bc.blocks.map((cB => uc.blockNameToBlockId(cB))))
        },
        cn: () => {
          if (0 === Mc.length) return;
          const cB = uc.getPositionView(sc),
            Bc = function(cB, Bc) {
              const nc = Math.ceil((cB - 3200) / Ic);
              if (nc !== Math.ceil((Bc - 3200) / Ic) || nc <= 0) return null;
              const Vc = nc * Ic + 6;
              return [Vc, 10, Vc]
            }(cB[0], cB[2]);
          if (!Bc) return;
          const [nc, Vc, rB] = Bc;
          if (uc.isBlockInLoadedChunk(nc, Vc, rB) && 0 === uc.getBlockId(nc, Vc, rB)) {
            const cB = Mc.shift();
            uc.setBlockId(nc, Vc, rB, cB)
          }
        },
        onPlayerAltAction: (cB, Bc, nc, Ic, rB, sc) => {
          ! function(cB, Bc, nc, Ic) {
            if (!nc || "Mesh" !== cB.getEntityType(nc)) return !1;
            const rB = Vc[cB.getEntityName(nc)];
            !!rB && cB.openShop(Bc, Ic, rB)
          }(uc, cB, sc, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);