export const id = 9;
export const ids = [9];
export const modules = {
  38530: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => Mb
    });
    var Ab = Ub(37374);
    const Mb = function(bb, ab, Ub) {
      let Mb;
      return {
        plugins: {
          placeAgainstBeds: (0, Ab.c)()
        },
        onCreate: bb => {
          Mb = bb
        },
        onPlayerAltAction: (bb, ab, Ub, Ab, Tb, Eb) => {
          ((bb, ab) => {
            if (!ab || "Mesh" !== Mb.getEntityType(ab)) return;
            const Ub = Mb.getEntityName(ab);
            "Upgrades" === Ub ? Mb.openShop(bb, !1, "Upgrades") : "Items" === Ub && Mb.openShop(bb, !1, "Recommended")
          })(bb, Eb)
        }
      }
    }
  },
  37374: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb
    });
    var Ab = Ub(325),
      Mb = Ub(36263),
      Tb = Ub(4156);
    const Eb = ["Leaf Bed", "_Leaf Bed Head", ...Ab.qc.flatMap((bb => [`${bb} Bed`, `_${bb} Bed Head`, `${bb} Strongbed`, `_${bb} Strongbed Head`]))];

    function Yb() {
      let bb;
      return {
        onCreate(ab) {
          bb = ab
        },
        altVetoBlocks: Eb,
        onPlayerAttemptAltAction(ab, Ub, Ab, Eb, Yb, Bb) {
          var eb;
          if ((0, Mb.d)(bb.getMetaInfo(Yb).rootName) && !bb.isEntityInteractable(Bb) && (0, Tb.e)(null === (eb = bb.vab(ab)) || void 0 === eb ? void 0 : eb.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36263: (bb, ab, Ub) => {
    function Ab(bb) {
      return bb.includes("Leaf Bed")
    }

    function Mb(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !Ab(bb)
    }

    function Tb(bb) {
      return bb.includes(" Strongbed")
    }

    function Eb(bb) {
      return Ab(bb) || Mb(bb) || Tb(bb)
    }
    Ub.d(ab, {
      d: () => Eb,
      g: () => Ab,
      h: () => Tb,
      i: () => Mb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);