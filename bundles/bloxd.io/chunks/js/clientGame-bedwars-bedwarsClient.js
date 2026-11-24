export const id = 9;
export const ids = [9];
export const modules = {
  39279: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => bS
    });
    var tS = gS(38055);
    const bS = function(SS, HS, gS) {
      let bS;
      return {
        plugins: {
          placeAgainstBeds: (0, tS.c)()
        },
        onCreate: SS => {
          bS = SS
        },
        onPlayerAltAction: (SS, HS, gS, tS, XS, xS) => {
          ((SS, HS) => {
            if (!HS || "Mesh" !== bS.getEntityType(HS)) return;
            const gS = bS.getEntityName(HS);
            "Upgrades" === gS ? bS.openShop(SS, !1, "Upgrades") : "Items" === gS && bS.openShop(SS, !1, "Recommended")
          })(SS, xS)
        }
      }
    }
  },
  38055: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS
    });
    var tS = gS(387),
      bS = gS(36961),
      XS = gS(4602);
    const xS = ["Leaf Bed", "_Leaf Bed Head", ...tS.Cc.flatMap((SS => [`${SS} Bed`, `_${SS} Bed Head`, `${SS} Strongbed`, `_${SS} Strongbed Head`]))];

    function NS() {
      let SS;
      return {
        onCreate(HS) {
          SS = HS
        },
        altVetoBlocks: xS,
        onPlayerAttemptAltAction(HS, gS, tS, xS, NS, qS) {
          var uS;
          if ((0, bS.e)(SS.getMetaInfo(NS).rootName) && !SS.isEntityInteractable(qS) && (0, XS.e)(null === (uS = SS.AHS(HS)) || void 0 === uS ? void 0 : uS.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36961: (SS, HS, gS) => {
    function tS(SS) {
      return SS.includes("Leaf Bed")
    }

    function bS(SS) {
      return / Bed(?: Head)?(?:\||$)/.test(SS) && !tS(SS)
    }

    function XS(SS) {
      return SS.includes(" Strongbed")
    }

    function xS(SS) {
      return tS(SS) || bS(SS) || XS(SS)
    }
    gS.d(HS, {
      e: () => xS,
      g: () => tS,
      k: () => XS,
      l: () => bS
    })
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);