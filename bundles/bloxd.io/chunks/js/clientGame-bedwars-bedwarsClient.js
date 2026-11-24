export const id = 9;
export const ids = [9];
export const modules = {
  39474: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => qt
    });
    var Ot = Vt(38281);
    const qt = function(tt, et, Vt) {
      let qt;
      return {
        plugins: {
          placeAgainstBeds: (0, Ot.c)()
        },
        onCreate: tt => {
          qt = tt
        },
        onPlayerAltAction: (tt, et, Vt, Ot, Dt, mt) => {
          ((tt, et) => {
            if (!et || "Mesh" !== qt.getEntityType(et)) return;
            const Vt = qt.getEntityName(et);
            "Upgrades" === Vt ? qt.openShop(tt, !1, "Upgrades") : "Items" === Vt && qt.openShop(tt, !1, "Recommended")
          })(tt, mt)
        }
      }
    }
  },
  38281: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => dt
    });
    var Ot = Vt(391),
      qt = Vt(37172),
      Dt = Vt(4614);
    const mt = ["Leaf Bed", "_Leaf Bed Head", ...Ot.Nc.flatMap((tt => [`${tt} Bed`, `_${tt} Bed Head`, `${tt} Strongbed`, `_${tt} Strongbed Head`]))];

    function dt() {
      let tt;
      return {
        onCreate(et) {
          tt = et
        },
        altVetoBlocks: mt,
        onPlayerAttemptAltAction(et, Vt, Ot, mt, dt, jt) {
          var Ht;
          if ((0, qt.e)(tt.getMetaInfo(dt).rootName) && !tt.isEntityInteractable(jt) && (0, Dt.e)(null === (Ht = tt.bVt(et)) || void 0 === Ht ? void 0 : Ht.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37172: (tt, et, Vt) => {
    function Ot(tt) {
      return tt.includes("Leaf Bed")
    }

    function qt(tt) {
      return / Bed(?: Head)?(?:\||$)/.test(tt) && !Ot(tt)
    }

    function Dt(tt) {
      return tt.includes(" Strongbed")
    }

    function mt(tt) {
      return Ot(tt) || qt(tt) || Dt(tt)
    }
    Vt.d(et, {
      e: () => mt,
      i: () => Ot,
      l: () => Dt,
      o: () => qt
    })
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);