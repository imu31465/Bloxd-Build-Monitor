export const id = 8;
export const ids = [8];
export const modules = {
  37584: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => AF
    });
    var CF = SF(36437);
    const AF = function(FF, WF, SF) {
      let AF;
      return {
        plugins: {
          placeAgainstBeds: (0, CF.b)()
        },
        onCreate: FF => {
          AF = FF
        },
        onPlayerAltAction: (FF, WF, SF, CF, uF, hF) => {
          ((FF, WF) => {
            if (!WF || "Mesh" !== AF.getEntityType(WF)) return;
            const SF = AF.getEntityName(WF);
            "Upgrades" === SF ? AF.openShop(FF, !1, "Upgrades") : "Items" === SF && AF.openShop(FF, !1, "Recommended")
          })(FF, hF)
        }
      }
    }
  },
  36437: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW
    });
    var CF = SF(271),
      AF = SF(35405),
      uF = SF(3566);
    const hF = ["Leaf Bed", "_Leaf Bed Head", ...CF.Dc.flatMap((FF => [`${FF} Bed`, `_${FF} Bed Head`, `${FF} Strongbed`, `_${FF} Strongbed Head`]))];

    function bW() {
      let FF;
      return {
        onCreate(WF) {
          FF = WF
        },
        altVetoBlocks: hF,
        onPlayerAttemptAltAction(WF, SF, CF, hF, bW, dF) {
          var PF;
          if ((0, AF.b)(FF.getMetaInfo(bW).rootName) && !FF.isEntityInteractable(dF) && (0, uF.g)(null === (PF = FF.pbF(WF)) || void 0 === PF ? void 0 : PF.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  35405: (FF, WF, SF) => {
    function CF(FF) {
      return FF.includes("Leaf Bed")
    }

    function AF(FF) {
      return / Bed(?: Head)?(?:\||$)/.test(FF) && !CF(FF)
    }

    function uF(FF) {
      return FF.includes(" Strongbed")
    }

    function hF(FF) {
      return CF(FF) || AF(FF) || uF(FF)
    }
    SF.d(WF, {
      b: () => hF,
      f: () => CF,
      i: () => uF,
      m: () => AF
    })
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);