export const id = 9;
export const ids = [9];
export const modules = {
  39394: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => Am
    });
    var hm = fm(38096);
    const Am = function(mm, Tm, fm) {
      let Am;
      return {
        plugins: {
          placeAgainstBeds: (0, hm.e)()
        },
        onCreate: mm => {
          Am = mm
        },
        onPlayerAltAction: (mm, Tm, fm, hm, am, xm) => {
          ((mm, Tm) => {
            if (!Tm || "Mesh" !== Am.getEntityType(Tm)) return;
            const fm = Am.getEntityName(Tm);
            "Upgrades" === fm ? Am.openShop(mm, !1, "Upgrades") : "Items" === fm && Am.openShop(mm, !1, "Recommended")
          })(mm, xm)
        }
      }
    }
  },
  38096: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm
    });
    var hm = fm(354),
      Am = fm(37039),
      am = fm(4413);
    const xm = ["Leaf Bed", "_Leaf Bed Head", ...hm.Bc.flatMap((mm => [`${mm} Bed`, `_${mm} Bed Head`, `${mm} Strongbed`, `_${mm} Strongbed Head`]))];

    function wm() {
      let mm;
      return {
        onCreate(Tm) {
          mm = Tm
        },
        altVetoBlocks: xm,
        onPlayerAttemptAltAction(Tm, fm, hm, xm, wm, Dm) {
          var im;
          if ((0, Am.b)(mm.getMetaInfo(wm).rootName) && !mm.isEntityInteractable(Dm) && (0, am.e)(null === (im = mm.MTm(Tm)) || void 0 === im ? void 0 : im.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37039: (mm, Tm, fm) => {
    function hm(mm) {
      return mm.includes("Leaf Bed")
    }

    function Am(mm) {
      return / Bed(?: Head)?(?:\||$)/.test(mm) && !hm(mm)
    }

    function am(mm) {
      return mm.includes(" Strongbed")
    }

    function xm(mm) {
      return hm(mm) || Am(mm) || am(mm)
    }
    fm.d(Tm, {
      b: () => xm,
      f: () => hm,
      j: () => am,
      l: () => Am
    })
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);