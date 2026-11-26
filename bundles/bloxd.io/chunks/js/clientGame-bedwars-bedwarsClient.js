export const id = 9;
export const ids = [9];
export const modules = {
  40498: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => YV
    });
    var JV = xV(39192);
    const YV = function(VV, eV, xV) {
      let YV;
      return {
        plugins: {
          placeAgainstBeds: (0, JV.d)()
        },
        onCreate: VV => {
          YV = VV
        },
        onPlayerAltAction: (VV, eV, xV, JV, UV, yV) => {
          ((VV, eV) => {
            if (!eV || "Mesh" !== YV.getEntityType(eV)) return;
            const xV = YV.getEntityName(eV);
            "Upgrades" === xV ? YV.openShop(VV, !1, "Upgrades") : "Items" === xV && YV.openShop(VV, !1, "Recommended")
          })(VV, yV)
        }
      }
    }
  },
  39192: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV
    });
    var JV = xV(375),
      YV = xV(38114),
      UV = xV(4952);
    const yV = ["Leaf Bed", "_Leaf Bed Head", ...JV.Lc.flatMap((VV => [`${VV} Bed`, `_${VV} Bed Head`, `${VV} Strongbed`, `_${VV} Strongbed Head`]))];

    function pV() {
      let VV;
      return {
        onCreate(eV) {
          VV = eV
        },
        altVetoBlocks: yV,
        onPlayerAttemptAltAction(eV, xV, JV, yV, pV, QV) {
          var nV;
          if ((0, YV.d)(VV.getMetaInfo(pV).rootName) && !VV.isEntityInteractable(QV) && (0, UV.e)(null === (nV = VV.bJV(eV)) || void 0 === nV ? void 0 : nV.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  38114: (VV, eV, xV) => {
    function JV(VV) {
      return VV.includes("Leaf Bed")
    }

    function YV(VV) {
      return / Bed(?: Head)?(?:\||$)/.test(VV) && !JV(VV)
    }

    function UV(VV) {
      return VV.includes(" Strongbed")
    }

    function yV(VV) {
      return JV(VV) || YV(VV) || UV(VV)
    }
    xV.d(eV, {
      d: () => yV,
      e: () => JV,
      f: () => UV,
      j: () => YV
    })
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);