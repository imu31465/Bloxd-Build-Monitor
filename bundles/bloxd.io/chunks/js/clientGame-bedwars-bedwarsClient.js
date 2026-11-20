export const id = 9;
export const ids = [9];
export const modules = {
  38755: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => Sv
    });
    var hv = Pv(37560);
    const Sv = function(vv, zv, Pv) {
      let Sv;
      return {
        plugins: {
          placeAgainstBeds: (0, hv.c)()
        },
        onCreate: vv => {
          Sv = vv
        },
        onPlayerAltAction: (vv, zv, Pv, hv, ev, gv) => {
          ((vv, zv) => {
            if (!zv || "Mesh" !== Sv.getEntityType(zv)) return;
            const Pv = Sv.getEntityName(zv);
            "Upgrades" === Pv ? Sv.openShop(vv, !1, "Upgrades") : "Items" === Pv && Sv.openShop(vv, !1, "Recommended")
          })(vv, gv)
        }
      }
    }
  },
  37560: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => pv
    });
    var hv = Pv(312),
      Sv = Pv(36443),
      ev = Pv(4226);
    const gv = ["Leaf Bed", "_Leaf Bed Head", ...hv.yc.flatMap((vv => [`${vv} Bed`, `_${vv} Bed Head`, `${vv} Strongbed`, `_${vv} Strongbed Head`]))];

    function pv() {
      let vv;
      return {
        onCreate(zv) {
          vv = zv
        },
        altVetoBlocks: gv,
        onPlayerAttemptAltAction(zv, Pv, hv, gv, pv, dv) {
          var Nv;
          if ((0, Sv.e)(vv.getMetaInfo(pv).rootName) && !vv.isEntityInteractable(dv) && (0, ev.g)(null === (Nv = vv.Avv(zv)) || void 0 === Nv ? void 0 : Nv.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36443: (vv, zv, Pv) => {
    function hv(vv) {
      return vv.includes("Leaf Bed")
    }

    function Sv(vv) {
      return / Bed(?: Head)?(?:\||$)/.test(vv) && !hv(vv)
    }

    function ev(vv) {
      return vv.includes(" Strongbed")
    }

    function gv(vv) {
      return hv(vv) || Sv(vv) || ev(vv)
    }
    Pv.d(zv, {
      e: () => gv,
      h: () => hv,
      k: () => ev,
      n: () => Sv
    })
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);