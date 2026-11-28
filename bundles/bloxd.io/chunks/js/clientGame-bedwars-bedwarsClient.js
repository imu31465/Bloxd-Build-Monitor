export const id = 9;
export const ids = [9];
export const modules = {
  40870: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Fd
    });
    var Wd = md(39588);
    const Fd = function(dd, Od, md) {
      let Fd;
      return {
        plugins: {
          placeAgainstBeds: (0, Wd.d)()
        },
        onCreate: dd => {
          Fd = dd
        },
        onPlayerAltAction: (dd, Od, md, Wd, Rd, Xd) => {
          ((dd, Od) => {
            if (!Od || "Mesh" !== Fd.getEntityType(Od)) return;
            const md = Fd.getEntityName(Od);
            "Upgrades" === md ? Fd.openShop(dd, !1, "Upgrades") : "Items" === md && Fd.openShop(dd, !1, "Recommended")
          })(dd, Xd)
        }
      }
    }
  },
  39588: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd
    });
    var Wd = md(405),
      Fd = md(38474),
      Rd = md(5141);
    const Xd = ["Leaf Bed", "_Leaf Bed Head", ...Wd.zc.flatMap((dd => [`${dd} Bed`, `_${dd} Bed Head`, `${dd} Strongbed`, `_${dd} Strongbed Head`]))];

    function Kd() {
      let dd;
      return {
        onCreate(Od) {
          dd = Od
        },
        altVetoBlocks: Xd,
        onPlayerAttemptAltAction(Od, md, Wd, Xd, Kd, hd) {
          var vd;
          if ((0, Fd.e)(dd.getMetaInfo(Kd).rootName) && !dd.isEntityInteractable(hd) && (0, Rd.h)(null === (vd = dd.NWd(Od)) || void 0 === vd ? void 0 : vd.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  38474: (dd, Od, md) => {
    function Wd(dd) {
      return dd.includes("Leaf Bed")
    }

    function Fd(dd) {
      return / Bed(?: Head)?(?:\||$)/.test(dd) && !Wd(dd)
    }

    function Rd(dd) {
      return dd.includes(" Strongbed")
    }

    function Xd(dd) {
      return Wd(dd) || Fd(dd) || Rd(dd)
    }
    md.d(Od, {
      e: () => Xd,
      f: () => Wd,
      j: () => Rd,
      l: () => Fd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);