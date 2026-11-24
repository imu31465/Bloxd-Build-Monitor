export const id = 9;
export const ids = [9];
export const modules = {
  39238: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => sD
    });
    var pD = wD(38005);
    const sD = function(DD, zD, wD) {
      let sD;
      return {
        plugins: {
          placeAgainstBeds: (0, pD.c)()
        },
        onCreate: DD => {
          sD = DD
        },
        onPlayerAltAction: (DD, zD, wD, pD, KD, rD) => {
          ((DD, zD) => {
            if (!zD || "Mesh" !== sD.getEntityType(zD)) return;
            const wD = sD.getEntityName(zD);
            "Upgrades" === wD ? sD.openShop(DD, !1, "Upgrades") : "Items" === wD && sD.openShop(DD, !1, "Recommended")
          })(DD, rD)
        }
      }
    }
  },
  38005: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD
    });
    var pD = wD(351),
      sD = wD(36897),
      KD = wD(4502);
    const rD = ["Leaf Bed", "_Leaf Bed Head", ...pD.Ec.flatMap((DD => [`${DD} Bed`, `_${DD} Bed Head`, `${DD} Strongbed`, `_${DD} Strongbed Head`]))];

    function LD() {
      let DD;
      return {
        onCreate(zD) {
          DD = zD
        },
        altVetoBlocks: rD,
        onPlayerAttemptAltAction(zD, wD, pD, rD, LD, cD) {
          var gD;
          if ((0, sD.b)(DD.getMetaInfo(LD).rootName) && !DD.isEntityInteractable(cD) && (0, KD.h)(null === (gD = DD.zwD(zD)) || void 0 === gD ? void 0 : gD.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36897: (DD, zD, wD) => {
    function pD(DD) {
      return DD.includes("Leaf Bed")
    }

    function sD(DD) {
      return / Bed(?: Head)?(?:\||$)/.test(DD) && !pD(DD)
    }

    function KD(DD) {
      return DD.includes(" Strongbed")
    }

    function rD(DD) {
      return pD(DD) || sD(DD) || KD(DD)
    }
    wD.d(zD, {
      b: () => rD,
      d: () => pD,
      e: () => KD,
      f: () => sD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);