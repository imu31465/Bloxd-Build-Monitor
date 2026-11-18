export const id = 9;
export const ids = [9];
export const modules = {
  37904: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => hy
    });
    var Uy = Wy(36694);
    const hy = function(yb, bb, Wy) {
      let hy;
      return {
        plugins: {
          placeAgainstBeds: (0, Uy.d)()
        },
        onCreate: yb => {
          hy = yb
        },
        onPlayerAltAction: (yb, bb, Wy, Uy, fy, Zy) => {
          ((yb, bb) => {
            if (!bb || "Mesh" !== hy.getEntityType(bb)) return;
            const Wy = hy.getEntityName(bb);
            "Upgrades" === Wy ? hy.openShop(yb, !1, "Upgrades") : "Items" === Wy && hy.openShop(yb, !1, "Recommended")
          })(yb, Zy)
        }
      }
    }
  },
  36694: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb
    });
    var Uy = Wy(258),
      hy = Wy(35662),
      fy = Wy(3696);
    const Zy = ["Leaf Bed", "_Leaf Bed Head", ...Uy.Bc.flatMap((yb => [`${yb} Bed`, `_${yb} Bed Head`, `${yb} Strongbed`, `_${yb} Strongbed Head`]))];

    function cb() {
      let yb;
      return {
        onCreate(bb) {
          yb = bb
        },
        altVetoBlocks: Zy,
        onPlayerAttemptAltAction(bb, Wy, Uy, Zy, cb, Py) {
          var oy;
          if ((0, hy.e)(yb.getMetaInfo(cb).rootName) && !yb.isEntityInteractable(Py) && (0, fy.c)(null === (oy = yb.MPy(bb)) || void 0 === oy ? void 0 : oy.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  35662: (yb, bb, Wy) => {
    function Uy(yb) {
      return yb.includes("Leaf Bed")
    }

    function hy(yb) {
      return / Bed(?: Head)?(?:\||$)/.test(yb) && !Uy(yb)
    }

    function fy(yb) {
      return yb.includes(" Strongbed")
    }

    function Zy(yb) {
      return Uy(yb) || hy(yb) || fy(yb)
    }
    Wy.d(bb, {
      e: () => Zy,
      f: () => Uy,
      g: () => fy,
      k: () => hy
    })
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);