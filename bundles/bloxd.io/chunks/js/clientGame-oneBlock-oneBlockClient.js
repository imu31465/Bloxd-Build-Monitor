export const id = 25;
export const ids = [25];
export const modules = {
  40342: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => Me
    });
    const ye = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const be = 6400;
    const Me = function(ee, ie, He, Me) {
      let Ke, {
          localPlayerId: Ue
        } = Me,
        Fe = [];
      return {
        onCreate: ee => {
          Ke = ee
        },
        onReceivedMessageFromServer: (ee, ie) => {
          "oneBlockNextBlocks" === ee && (Fe = ie.blocks.map((ee => Ke.blockNameToBlockId(ee))))
        },
        YR: () => {
          if (0 === Fe.length) return;
          const ee = Ke.getPositionView(Ue),
            ie = function(ee, ie) {
              const He = Math.ceil((ee - 3200) / be);
              if (He !== Math.ceil((ie - 3200) / be) || He <= 0) return null;
              const ye = He * be + 6;
              return [ye, 10, ye]
            }(ee[0], ee[2]);
          if (!ie) return;
          const [He, ye, Me] = ie;
          if (Ke.isBlockInLoadedChunk(He, ye, Me) && 0 === Ke.getBlockId(He, ye, Me)) {
            const ee = Fe.shift();
            Ke.setBlockId(He, ye, Me, ee)
          }
        },
        onPlayerAltAction: (ee, ie, He, be, Me, Ue) => {
          ! function(ee, ie, He, be) {
            if (!He || "Mesh" !== ee.getEntityType(He)) return !1;
            const Me = ye[ee.getEntityName(He)];
            !!Me && ee.openShop(ie, be, Me)
          }(Ke, ee, Ue, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);