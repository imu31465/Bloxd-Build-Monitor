export const id = 21;
export const ids = [21];
export const modules = {
  39400: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => KD
    });
    const pD = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const sD = 6400;
    const KD = function(DD, zD, wD, KD) {
      let rD, {
          localPlayerId: LD
        } = KD,
        cD = [];
      return {
        onCreate: DD => {
          rD = DD
        },
        onReceivedMessageFromServer: (DD, zD) => {
          "oneBlockNextBlocks" === DD && (cD = zD.blocks.map((DD => rD.blockNameToBlockId(DD))))
        },
        DU: () => {
          if (0 === cD.length) return;
          const DD = rD.getPositionView(LD),
            zD = function(DD, zD) {
              const wD = Math.ceil((DD - 3200) / sD);
              if (wD !== Math.ceil((zD - 3200) / sD) || wD <= 0) return null;
              const pD = wD * sD + 6;
              return [pD, 10, pD]
            }(DD[0], DD[2]);
          if (!zD) return;
          const [wD, pD, KD] = zD;
          if (rD.isBlockInLoadedChunk(wD, pD, KD) && 0 === rD.getBlockId(wD, pD, KD)) {
            const DD = cD.shift();
            rD.setBlockId(wD, pD, KD, DD)
          }
        },
        onPlayerAltAction: (DD, zD, wD, sD, KD, LD) => {
          ! function(DD, zD, wD, sD) {
            if (!wD || "Mesh" !== DD.getEntityType(wD)) return !1;
            const KD = pD[DD.getEntityName(wD)];
            !!KD && DD.openShop(zD, sD, KD)
          }(rD, DD, LD, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);