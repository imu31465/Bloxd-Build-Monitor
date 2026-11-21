export const id = 9;
export const ids = [9];
export const modules = {
  39391: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => Nd
    });
    var pd = kd(38226);
    const Nd = function(dd, Jd, kd) {
      let Nd;
      return {
        plugins: {
          placeAgainstBeds: (0, pd.c)()
        },
        onCreate: dd => {
          Nd = dd
        },
        onPlayerAltAction: (dd, Jd, kd, pd, Wd, Pd) => {
          ((dd, Jd) => {
            if (!Jd || "Mesh" !== Nd.getEntityType(Jd)) return;
            const kd = Nd.getEntityName(Jd);
            "Upgrades" === kd ? Nd.openShop(dd, !1, "Upgrades") : "Items" === kd && Nd.openShop(dd, !1, "Recommended")
          })(dd, Pd)
        }
      }
    }
  },
  38226: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Zd
    });
    var pd = kd(313),
      Nd = kd(37106),
      Wd = kd(4329);
    const Pd = ["Leaf Bed", "_Leaf Bed Head", ...pd.Oc.flatMap((dd => [`${dd} Bed`, `_${dd} Bed Head`, `${dd} Strongbed`, `_${dd} Strongbed Head`]))];

    function Zd() {
      let dd;
      return {
        onCreate(Jd) {
          dd = Jd
        },
        altVetoBlocks: Pd,
        onPlayerAttemptAltAction(Jd, kd, pd, Pd, Zd, gd) {
          var Cd;
          if ((0, Nd.c)(dd.getMetaInfo(Zd).rootName) && !dd.isEntityInteractable(gd) && (0, Wd.d)(null === (Cd = dd.Pkd(Jd)) || void 0 === Cd ? void 0 : Cd.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37106: (dd, Jd, kd) => {
    function pd(dd) {
      return dd.includes("Leaf Bed")
    }

    function Nd(dd) {
      return / Bed(?: Head)?(?:\||$)/.test(dd) && !pd(dd)
    }

    function Wd(dd) {
      return dd.includes(" Strongbed")
    }

    function Pd(dd) {
      return pd(dd) || Nd(dd) || Wd(dd)
    }
    kd.d(Jd, {
      c: () => Pd,
      f: () => pd,
      j: () => Wd,
      n: () => Nd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);