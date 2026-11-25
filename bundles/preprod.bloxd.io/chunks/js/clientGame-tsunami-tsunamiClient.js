export const id = 27;
export const ids = [27];
export const modules = {
  39827: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => sQ
    });
    var wQ = XQ(34536);
    const qQ = 1e3 / 3;

    function TQ(QQ, WQ, XQ) {
      if ("parenthetical-seconds" === WQ) return ` (${QQ}s)`;
      const wQ = `${Math.floor(QQ/60)}:${(QQ%60).toString().padStart(2,"0")}`;
      return XQ ? `${XQ}${wQ}` : wQ
    }

    function zQ(QQ, WQ, XQ, qQ, TQ) {
      var zQ;
      const sQ = {
        ...qQ.baseNametag
      };
      sQ.content = [...null !== (zQ = qQ.baseNametag.content) && void 0 !== zQ ? zQ : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,wQ.d)(TQ)}`
      }], QQ.setOtherEntitySetting(WQ, XQ, "nameTagInfo", sQ)
    }
    const sQ = function(QQ, WQ, XQ, wQ) {
      let sQ, {
        localPlayerId: FQ
      } = wQ;
      const PQ = new Map,
        gQ = new Map;
      let JQ = 0,
        rQ = 0;
      return {
        onCreate: QQ => {
          sQ = QQ
        },
        fJ: QQ => {
          const WQ = Date.now();
          for (const [wQ, qQ] of PQ) {
            const QQ = Math.floor((WQ - qQ.startTime) / 1e3),
              zQ = Math.max(0, qQ.remainingSeconds - QQ);
            if (zQ === qQ.lastRenderedSecond) continue;
            qQ.lastRenderedSecond = zQ;
            const gQ = {
                str: TQ(zQ, qQ.format, qQ.prefix),
                style: qQ.style
              },
              JQ = {
                ...qQ.baseNametag
              };
            var XQ;
            if ("content" === qQ.location) JQ.content = [...null !== (XQ = qQ.baseNametag.content) && void 0 !== XQ ? XQ : [], gQ];
            else JQ.subtitle = [gQ];
            sQ.setOtherEntitySetting(FQ, wQ, "nameTagInfo", JQ), zQ <= 0 && PQ.delete(wQ)
          }
          if (gQ.size > 0 && WQ - JQ >= qQ) {
            JQ = WQ, rQ = (rQ + 1) % 3;
            let QQ = 0;
            for (const [XQ, wQ] of gQ) {
              if (QQ++ % 3 !== rQ) continue;
              const qQ = Math.floor((WQ - wQ.startTime) / 1e3);
              if (qQ === wQ.lastRenderedSecond) continue;
              wQ.lastRenderedSecond = qQ;
              const TQ = wQ.accumulatedIncome + wQ.incomePerSecond * BigInt(qQ);
              zQ(sQ, FQ, XQ, wQ, TQ)
            }
          }
        },
        onReceivedMessageFromServer: (QQ, WQ) => {
          if ("startCountdown" === QQ) PQ.set(WQ.eId, {
            baseNametag: WQ.baseNametag,
            remainingSeconds: WQ.remainingSeconds,
            startTime: Date.now(),
            format: WQ.format,
            location: WQ.location,
            prefix: WQ.prefix,
            style: WQ.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === QQ) PQ.delete(WQ.eId);
          else if ("startIncomeTicking" === QQ) {
            const QQ = {
              baseNametag: WQ.baseNametag,
              accumulatedIncome: BigInt(WQ.accumulatedIncome),
              incomePerSecond: BigInt(WQ.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            gQ.set(WQ.eId, QQ), zQ(sQ, FQ, WQ.eId, QQ, QQ.accumulatedIncome)
          } else "stopIncomeTicking" === QQ && gQ.delete(WQ.eId) && sQ.setOtherEntitySetting(FQ, WQ.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (QQ, WQ, XQ, wQ, qQ, TQ) => {
          if (TQ && "Mesh" === sQ.getEntityType(TQ)) {
            const WQ = sQ.getEntityName(TQ);
            "Upgrades" === WQ ? sQ.openShop(QQ, !1, "Upgrades") : "Items" === WQ ? sQ.openShop(QQ, !1, "Items") : "Prestige" === WQ ? sQ.openShop(QQ, !1, "Prestige") : "Collections" === WQ ? sQ.openShop(QQ, !1, "Collections") : "Base Skins" === WQ ? sQ.openShop(QQ, !1, "Base Skins") : "Gauntlet" === WQ ? sQ.openShop(QQ, !1, "Gauntlet") : "Diamond Shop" === WQ && sQ.openShop(QQ, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34536: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      f: () => zQ
    });
    const wQ = [{
      threshold: 10n ** 180n,
      suffix: "NoQig"
    }, {
      threshold: 10n ** 177n,
      suffix: "OcQig"
    }, {
      threshold: 10n ** 174n,
      suffix: "SpQig"
    }, {
      threshold: 10n ** 171n,
      suffix: "SQig"
    }, {
      threshold: 10n ** 168n,
      suffix: "QiQig"
    }, {
      threshold: 10n ** 165n,
      suffix: "QaQig"
    }, {
      threshold: 10n ** 162n,
      suffix: "TQig"
    }, {
      threshold: 10n ** 159n,
      suffix: "DQig"
    }, {
      threshold: 10n ** 156n,
      suffix: "UQig"
    }, {
      threshold: 10n ** 153n,
      suffix: "Qig"
    }, {
      threshold: 10n ** 150n,
      suffix: "NoQag"
    }, {
      threshold: 10n ** 147n,
      suffix: "OcQag"
    }, {
      threshold: 10n ** 144n,
      suffix: "SpQag"
    }, {
      threshold: 10n ** 141n,
      suffix: "SQag"
    }, {
      threshold: 10n ** 138n,
      suffix: "QiQag"
    }, {
      threshold: 10n ** 135n,
      suffix: "QaQag"
    }, {
      threshold: 10n ** 132n,
      suffix: "TQag"
    }, {
      threshold: 10n ** 129n,
      suffix: "DQag"
    }, {
      threshold: 10n ** 126n,
      suffix: "UQag"
    }, {
      threshold: 10n ** 123n,
      suffix: "Qag"
    }, {
      threshold: 10n ** 120n,
      suffix: "NoTg"
    }, {
      threshold: 10n ** 117n,
      suffix: "OcTg"
    }, {
      threshold: 10n ** 114n,
      suffix: "SpTg"
    }, {
      threshold: 10n ** 111n,
      suffix: "STg"
    }, {
      threshold: 10n ** 108n,
      suffix: "QiTg"
    }, {
      threshold: 10n ** 105n,
      suffix: "QaTg"
    }, {
      threshold: 10n ** 102n,
      suffix: "TTg"
    }, {
      threshold: 10n ** 99n,
      suffix: "DTg"
    }, {
      threshold: 10n ** 96n,
      suffix: "UTg"
    }, {
      threshold: 10n ** 93n,
      suffix: "Tg"
    }, {
      threshold: 10n ** 90n,
      suffix: "NoVg"
    }, {
      threshold: 10n ** 87n,
      suffix: "OcVg"
    }, {
      threshold: 10n ** 84n,
      suffix: "SpVg"
    }, {
      threshold: 10n ** 81n,
      suffix: "SVg"
    }, {
      threshold: 10n ** 78n,
      suffix: "QiVg"
    }, {
      threshold: 10n ** 75n,
      suffix: "QaVg"
    }, {
      threshold: 10n ** 72n,
      suffix: "TVg"
    }, {
      threshold: 10n ** 69n,
      suffix: "DVg"
    }, {
      threshold: 10n ** 66n,
      suffix: "UVg"
    }, {
      threshold: 10n ** 63n,
      suffix: "Vg"
    }, {
      threshold: 10n ** 60n,
      suffix: "NoD"
    }, {
      threshold: 10n ** 57n,
      suffix: "OcD"
    }, {
      threshold: 10n ** 54n,
      suffix: "SpD"
    }, {
      threshold: 10n ** 51n,
      suffix: "SD"
    }, {
      threshold: 10n ** 48n,
      suffix: "QiD"
    }, {
      threshold: 10n ** 45n,
      suffix: "QaD"
    }, {
      threshold: 10n ** 42n,
      suffix: "TD"
    }, {
      threshold: 10n ** 39n,
      suffix: "DD"
    }, {
      threshold: 10n ** 36n,
      suffix: "UD"
    }, {
      threshold: 10n ** 33n,
      suffix: "D"
    }, {
      threshold: 10n ** 30n,
      suffix: "No"
    }, {
      threshold: 10n ** 27n,
      suffix: "Oc"
    }, {
      threshold: 10n ** 24n,
      suffix: "Sep"
    }, {
      threshold: 10n ** 21n,
      suffix: "S"
    }, {
      threshold: 10n ** 18n,
      suffix: "Qi"
    }, {
      threshold: 10n ** 15n,
      suffix: "Qa"
    }, {
      threshold: 10n ** 12n,
      suffix: "T"
    }, {
      threshold: 10n ** 9n,
      suffix: "B"
    }, {
      threshold: 10n ** 6n,
      suffix: "M"
    }, {
      threshold: 1000n,
      suffix: "K"
    }];

    function qQ(QQ) {
      let WQ, XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof QQ) {
        if (!Number.isFinite(QQ)) return "0";
        if (Math.abs(QQ) < 100) {
          const WQ = QQ < 0 ? "-" : "",
            XQ = Math.abs(QQ);
          return XQ >= 10 ? `${WQ}${XQ.toFixed(1).replace(/\.0$/,"")}` : `${WQ}${XQ.toFixed(2).replace(/\.?0+$/,"")}`
        }
        WQ = BigInt(Math.floor(QQ))
      } else WQ = QQ;
      const qQ = WQ < 0n ? -WQ : WQ,
        TQ = WQ < 0n ? "-" : "",
        zQ = qQ.toString();
      if (zQ.length <= XQ) return `${TQ}${zQ}`;
      const sQ = 3 * Math.floor((zQ.length - 1) / 3);
      if (sQ < 3) return `${TQ}${zQ}`;
      if (sQ > 3 * wQ.length) {
        const QQ = zQ[0],
          WQ = zQ.slice(1, 3).replace(/0+$/, "");
        return `${TQ}${WQ?`${QQ}.${WQ}`:QQ}e${zQ.length-1}`
      }
      const {
        threshold: FQ,
        suffix: PQ
      } = wQ[wQ.length - sQ / 3], gQ = qQ / FQ, JQ = Number(1000n * (qQ % FQ) / FQ), rQ = Number(gQ) + JQ / 1e3;
      let IQ;
      return IQ = rQ >= 100 ? Math.floor(rQ).toString() : rQ >= 10 ? rQ.toFixed(1).replace(/\.0$/, "") : rQ.toFixed(2).replace(/\.?0+$/, ""), `${TQ}${IQ}${PQ}`
    }
    const TQ = wQ.map((QQ => {
      let {
        threshold: WQ,
        suffix: XQ
      } = QQ;
      return {
        threshold: Number(WQ),
        suffix: XQ
      }
    })).filter((QQ => {
      let {
        threshold: WQ
      } = QQ;
      return Number.isFinite(WQ)
    }));

    function zQ(QQ) {
      const WQ = Math.abs(QQ),
        XQ = QQ < 0 ? "-" : "";
      for (const {
          threshold: wQ,
          suffix: qQ
        }
        of TQ)
        if (WQ >= wQ) {
          const QQ = WQ / wQ;
          if (QQ >= 1e3) return `${XQ}${WQ.toExponential(2).replace("e+","e")}`;
          let TQ;
          return TQ = QQ >= 100 ? Math.floor(QQ).toString() : QQ >= 10 ? QQ.toFixed(1).replace(/\.0$/, "") : QQ.toFixed(2).replace(/\.?0+$/, ""), `${XQ}${TQ}${qQ}`
        } return `${XQ}${WQ}`
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);