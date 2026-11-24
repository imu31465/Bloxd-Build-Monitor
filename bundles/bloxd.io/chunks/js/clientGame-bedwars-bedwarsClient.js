export const id = 9;
export const ids = [9];
export const modules = {
  39456: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => op
    });
    var Op = cp(38261);
    const op = function(pp, ip, cp) {
      let op;
      return {
        plugins: {
          placeAgainstBeds: (0, Op.c)()
        },
        onCreate: pp => {
          op = pp
        },
        onPlayerAltAction: (pp, ip, cp, Op, Ip, Sp) => {
          ((pp, ip) => {
            if (!ip || "Mesh" !== op.getEntityType(ip)) return;
            const cp = op.getEntityName(ip);
            "Upgrades" === cp ? op.openShop(pp, !1, "Upgrades") : "Items" === cp && op.openShop(pp, !1, "Recommended")
          })(pp, Sp)
        }
      }
    }
  },
  38261: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp
    });
    var Op = cp(337),
      op = cp(37146),
      Ip = cp(4561);
    const Sp = ["Leaf Bed", "_Leaf Bed Head", ...Op.wc.flatMap((pp => [`${pp} Bed`, `_${pp} Bed Head`, `${pp} Strongbed`, `_${pp} Strongbed Head`]))];

    function xp() {
      let pp;
      return {
        onCreate(ip) {
          pp = ip
        },
        altVetoBlocks: Sp,
        onPlayerAttemptAltAction(ip, cp, Op, Sp, xp, Lp) {
          var Yp;
          if ((0, op.b)(pp.getMetaInfo(xp).rootName) && !pp.isEntityInteractable(Lp) && (0, Ip.g)(null === (Yp = pp.Acp(ip)) || void 0 === Yp ? void 0 : Yp.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37146: (pp, ip, cp) => {
    function Op(pp) {
      return pp.includes("Leaf Bed")
    }

    function op(pp) {
      return / Bed(?: Head)?(?:\||$)/.test(pp) && !Op(pp)
    }

    function Ip(pp) {
      return pp.includes(" Strongbed")
    }

    function Sp(pp) {
      return Op(pp) || op(pp) || Ip(pp)
    }
    cp.d(ip, {
      b: () => Sp,
      f: () => Op,
      g: () => Ip,
      h: () => op
    })
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);