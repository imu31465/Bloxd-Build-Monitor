export const id = 9;
export const ids = [9];
export const modules = {
  39560: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => qQ
    });
    var wQ = XQ(38311);
    const qQ = function(QQ, WQ, XQ) {
      let qQ;
      return {
        plugins: {
          placeAgainstBeds: (0, wQ.e)()
        },
        onCreate: QQ => {
          qQ = QQ
        },
        onPlayerAltAction: (QQ, WQ, XQ, wQ, TQ, zQ) => {
          ((QQ, WQ) => {
            if (!WQ || "Mesh" !== qQ.getEntityType(WQ)) return;
            const XQ = qQ.getEntityName(WQ);
            "Upgrades" === XQ ? qQ.openShop(QQ, !1, "Upgrades") : "Items" === XQ && qQ.openShop(QQ, !1, "Recommended")
          })(QQ, zQ)
        }
      }
    }
  },
  38311: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ
    });
    var wQ = XQ(402),
      qQ = XQ(37217),
      TQ = XQ(4789);
    const zQ = ["Leaf Bed", "_Leaf Bed Head", ...wQ.Fc.flatMap((QQ => [`${QQ} Bed`, `_${QQ} Bed Head`, `${QQ} Strongbed`, `_${QQ} Strongbed Head`]))];

    function sQ() {
      let QQ;
      return {
        onCreate(WQ) {
          QQ = WQ
        },
        altVetoBlocks: zQ,
        onPlayerAttemptAltAction(WQ, XQ, wQ, zQ, sQ, FQ) {
          var PQ;
          if ((0, qQ.e)(QQ.getMetaInfo(sQ).rootName) && !QQ.isEntityInteractable(FQ) && (0, TQ.g)(null === (PQ = QQ.wXQ(WQ)) || void 0 === PQ ? void 0 : PQ.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37217: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return QQ.includes("Leaf Bed")
    }

    function qQ(QQ) {
      return / Bed(?: Head)?(?:\||$)/.test(QQ) && !wQ(QQ)
    }

    function TQ(QQ) {
      return QQ.includes(" Strongbed")
    }

    function zQ(QQ) {
      return wQ(QQ) || qQ(QQ) || TQ(QQ)
    }
    XQ.d(WQ, {
      e: () => zQ,
      f: () => wQ,
      h: () => TQ,
      l: () => qQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);