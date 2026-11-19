export const id = 9;
export const ids = [9];
export const modules = {
  38569: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => pD
    });
    var ID = cD(37425);
    const pD = function(DD, CD, cD) {
      let pD;
      return {
        plugins: {
          placeAgainstBeds: (0, ID.d)()
        },
        onCreate: DD => {
          pD = DD
        },
        onPlayerAltAction: (DD, CD, cD, ID, iD, fD) => {
          ((DD, CD) => {
            if (!CD || "Mesh" !== pD.getEntityType(CD)) return;
            const cD = pD.getEntityName(CD);
            "Upgrades" === cD ? pD.openShop(DD, !1, "Upgrades") : "Items" === cD && pD.openShop(DD, !1, "Recommended")
          })(DD, fD)
        }
      }
    }
  },
  37425: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => bD
    });
    var ID = cD(326),
      pD = cD(36300),
      iD = cD(4279);
    const fD = ["Leaf Bed", "_Leaf Bed Head", ...ID.Gc.flatMap((DD => [`${DD} Bed`, `_${DD} Bed Head`, `${DD} Strongbed`, `_${DD} Strongbed Head`]))];

    function bD() {
      let DD;
      return {
        onCreate(CD) {
          DD = CD
        },
        altVetoBlocks: fD,
        onPlayerAttemptAltAction(CD, cD, ID, fD, bD, QD) {
          var wD;
          if ((0, pD.b)(DD.getMetaInfo(bD).rootName) && !DD.isEntityInteractable(QD) && (0, iD.e)(null === (wD = DD.FDD(CD)) || void 0 === wD ? void 0 : wD.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36300: (DD, CD, cD) => {
    function ID(DD) {
      return DD.includes("Leaf Bed")
    }

    function pD(DD) {
      return / Bed(?: Head)?(?:\||$)/.test(DD) && !ID(DD)
    }

    function iD(DD) {
      return DD.includes(" Strongbed")
    }

    function fD(DD) {
      return ID(DD) || pD(DD) || iD(DD)
    }
    cD.d(CD, {
      b: () => fD,
      e: () => ID,
      h: () => iD,
      i: () => pD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);