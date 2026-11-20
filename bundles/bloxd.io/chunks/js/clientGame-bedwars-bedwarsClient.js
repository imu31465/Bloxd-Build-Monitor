export const id = 9;
export const ids = [9];
export const modules = {
  38826: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => Wb
    });
    var kb = sb(37630);
    const Wb = function(bb, cb, sb) {
      let Wb;
      return {
        plugins: {
          placeAgainstBeds: (0, kb.e)()
        },
        onCreate: bb => {
          Wb = bb
        },
        onPlayerAltAction: (bb, cb, sb, kb, ab, Tb) => {
          ((bb, cb) => {
            if (!cb || "Mesh" !== Wb.getEntityType(cb)) return;
            const sb = Wb.getEntityName(cb);
            "Upgrades" === sb ? Wb.openShop(bb, !1, "Upgrades") : "Items" === sb && Wb.openShop(bb, !1, "Recommended")
          })(bb, Tb)
        }
      }
    }
  },
  37630: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ub
    });
    var kb = sb(344),
      Wb = sb(36505),
      ab = sb(4218);
    const Tb = ["Leaf Bed", "_Leaf Bed Head", ...kb.Hc.flatMap((bb => [`${bb} Bed`, `_${bb} Bed Head`, `${bb} Strongbed`, `_${bb} Strongbed Head`]))];

    function Ub() {
      let bb;
      return {
        onCreate(cb) {
          bb = cb
        },
        altVetoBlocks: Tb,
        onPlayerAttemptAltAction(cb, sb, kb, Tb, Ub, Ib) {
          var Hb;
          if ((0, Wb.e)(bb.getMetaInfo(Ub).rootName) && !bb.isEntityInteractable(Ib) && (0, ab.h)(null === (Hb = bb.Xcb(cb)) || void 0 === Hb ? void 0 : Hb.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36505: (bb, cb, sb) => {
    function kb(bb) {
      return bb.includes("Leaf Bed")
    }

    function Wb(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !kb(bb)
    }

    function ab(bb) {
      return bb.includes(" Strongbed")
    }

    function Tb(bb) {
      return kb(bb) || Wb(bb) || ab(bb)
    }
    sb.d(cb, {
      e: () => Tb,
      f: () => kb,
      h: () => ab,
      j: () => Wb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);