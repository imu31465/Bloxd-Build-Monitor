export const id = 9;
export const ids = [9];
export const modules = {
  38878: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Ob
    });
    var Bb = hb(37626);
    const Ob = function(bb, ub, hb) {
      let Ob;
      return {
        plugins: {
          placeAgainstBeds: (0, Bb.c)()
        },
        onCreate: bb => {
          Ob = bb
        },
        onPlayerAltAction: (bb, ub, hb, Bb, Gb, Ub) => {
          ((bb, ub) => {
            if (!ub || "Mesh" !== Ob.getEntityType(ub)) return;
            const hb = Ob.getEntityName(ub);
            "Upgrades" === hb ? Ob.openShop(bb, !1, "Upgrades") : "Items" === hb && Ob.openShop(bb, !1, "Recommended")
          })(bb, Ub)
        }
      }
    }
  },
  37626: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb
    });
    var Bb = hb(314),
      Ob = hb(36591),
      Gb = hb(4246);
    const Ub = ["Leaf Bed", "_Leaf Bed Head", ...Bb.Kc.flatMap((bb => [`${bb} Bed`, `_${bb} Bed Head`, `${bb} Strongbed`, `_${bb} Strongbed Head`]))];

    function Lb() {
      let bb;
      return {
        onCreate(ub) {
          bb = ub
        },
        altVetoBlocks: Ub,
        onPlayerAttemptAltAction(ub, hb, Bb, Ub, Lb, Yb) {
          var Sb;
          if ((0, Ob.b)(bb.getMetaInfo(Lb).rootName) && !bb.isEntityInteractable(Yb) && (0, Gb.f)(null === (Sb = bb.cub(ub)) || void 0 === Sb ? void 0 : Sb.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36591: (bb, ub, hb) => {
    function Bb(bb) {
      return bb.includes("Leaf Bed")
    }

    function Ob(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !Bb(bb)
    }

    function Gb(bb) {
      return bb.includes(" Strongbed")
    }

    function Ub(bb) {
      return Bb(bb) || Ob(bb) || Gb(bb)
    }
    hb.d(ub, {
      b: () => Ub,
      f: () => Bb,
      g: () => Gb,
      i: () => Ob
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);