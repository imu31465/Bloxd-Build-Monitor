export const id = 26;
export const ids = [26];
export const modules = {
  38839: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => bD
    });
    var ID = cD(9065);
    const pD = 1e3 / 3;

    function iD(DD, CD, cD) {
      if ("parenthetical-seconds" === CD) return ` (${DD}s)`;
      const ID = `${Math.floor(DD/60)}:${(DD%60).toString().padStart(2,"0")}`;
      return cD ? `${cD}${ID}` : ID
    }

    function fD(DD, CD, cD, pD, iD) {
      var fD;
      const bD = {
        ...pD.baseNametag
      };
      bD.content = [...null !== (fD = pD.baseNametag.content) && void 0 !== fD ? fD : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,ID.e)(iD)}`
      }], DD.setOtherEntitySetting(CD, cD, "nameTagInfo", bD)
    }
    const bD = function(DD, CD, cD, ID) {
      let bD, {
        localPlayerId: QD
      } = ID;
      const wD = new Map,
        SD = new Map;
      let BD = 0,
        yD = 0;
      return {
        onCreate: DD => {
          bD = DD
        },
        wy: DD => {
          const CD = Date.now();
          for (const [ID, pD] of wD) {
            const DD = Math.floor((CD - pD.startTime) / 1e3),
              fD = Math.max(0, pD.remainingSeconds - DD);
            if (fD === pD.lastRenderedSecond) continue;
            pD.lastRenderedSecond = fD;
            const SD = {
                str: iD(fD, pD.format, pD.prefix),
                style: pD.style
              },
              BD = {
                ...pD.baseNametag
              };
            var cD;
            if ("content" === pD.location) BD.content = [...null !== (cD = pD.baseNametag.content) && void 0 !== cD ? cD : [], SD];
            else BD.subtitle = [SD];
            bD.setOtherEntitySetting(QD, ID, "nameTagInfo", BD), fD <= 0 && wD.delete(ID)
          }
          if (SD.size > 0 && CD - BD >= pD) {
            BD = CD, yD = (yD + 1) % 3;
            let DD = 0;
            for (const [cD, ID] of SD) {
              if (DD++ % 3 !== yD) continue;
              const pD = Math.floor((CD - ID.startTime) / 1e3);
              if (pD === ID.lastRenderedSecond) continue;
              ID.lastRenderedSecond = pD;
              const iD = ID.accumulatedIncome + ID.incomePerSecond * BigInt(pD);
              fD(bD, QD, cD, ID, iD)
            }
          }
        },
        onReceivedMessageFromServer: (DD, CD) => {
          if ("startCountdown" === DD) wD.set(CD.eId, {
            baseNametag: CD.baseNametag,
            remainingSeconds: CD.remainingSeconds,
            startTime: Date.now(),
            format: CD.format,
            location: CD.location,
            prefix: CD.prefix,
            style: CD.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === DD) wD.delete(CD.eId);
          else if ("startIncomeTicking" === DD) {
            const DD = {
              baseNametag: CD.baseNametag,
              accumulatedIncome: BigInt(CD.accumulatedIncome),
              incomePerSecond: BigInt(CD.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            SD.set(CD.eId, DD), fD(bD, QD, CD.eId, DD, DD.accumulatedIncome)
          } else "stopIncomeTicking" === DD && SD.delete(CD.eId) && bD.setOtherEntitySetting(QD, CD.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (DD, CD, cD, ID, pD, iD) => {
          if (iD && "Mesh" === bD.getEntityType(iD)) {
            const CD = bD.getEntityName(iD);
            "Upgrades" === CD ? bD.openShop(DD, !1, "Upgrades") : "Items" === CD ? bD.openShop(DD, !1, "Items") : "Prestige" === CD ? bD.openShop(DD, !1, "Prestige") : "Collections" === CD ? bD.openShop(DD, !1, "Collections") : "Base Skins" === CD ? bD.openShop(DD, !1, "Base Skins") : "Gauntlet" === CD ? bD.openShop(DD, !1, "Gauntlet") : "Diamond Shop" === CD && bD.openShop(DD, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  9065: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      g: () => fD
    });
    const ID = [{
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

    function pD(DD) {
      let CD, cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof DD) {
        if (!Number.isFinite(DD)) return "0";
        if (Math.abs(DD) < 100) {
          const CD = DD < 0 ? "-" : "",
            cD = Math.abs(DD);
          return cD >= 10 ? `${CD}${cD.toFixed(1).replace(/\.0$/,"")}` : `${CD}${cD.toFixed(2).replace(/\.?0+$/,"")}`
        }
        CD = BigInt(Math.floor(DD))
      } else CD = DD;
      const pD = CD < 0n ? -CD : CD,
        iD = CD < 0n ? "-" : "",
        fD = pD.toString();
      if (fD.length <= cD) return `${iD}${fD}`;
      const bD = 3 * Math.floor((fD.length - 1) / 3);
      if (bD < 3) return `${iD}${fD}`;
      if (bD > 3 * ID.length) {
        const DD = fD[0],
          CD = fD.slice(1, 3).replace(/0+$/, "");
        return `${iD}${CD?`${DD}.${CD}`:DD}e${fD.length-1}`
      }
      const {
        threshold: QD,
        suffix: wD
      } = ID[ID.length - bD / 3], SD = pD / QD, BD = Number(1000n * (pD % QD) / QD), yD = Number(SD) + BD / 1e3;
      let MD;
      return MD = yD >= 100 ? Math.floor(yD).toString() : yD >= 10 ? yD.toFixed(1).replace(/\.0$/, "") : yD.toFixed(2).replace(/\.?0+$/, ""), `${iD}${MD}${wD}`
    }
    const iD = ID.map((DD => {
      let {
        threshold: CD,
        suffix: cD
      } = DD;
      return {
        threshold: Number(CD),
        suffix: cD
      }
    })).filter((DD => {
      let {
        threshold: CD
      } = DD;
      return Number.isFinite(CD)
    }));

    function fD(DD) {
      const CD = Math.abs(DD),
        cD = DD < 0 ? "-" : "";
      for (const {
          threshold: ID,
          suffix: pD
        }
        of iD)
        if (CD >= ID) {
          const DD = CD / ID;
          if (DD >= 1e3) return `${cD}${CD.toExponential(2).replace("e+","e")}`;
          let iD;
          return iD = DD >= 100 ? Math.floor(DD).toString() : DD >= 10 ? DD.toFixed(1).replace(/\.0$/, "") : DD.toFixed(2).replace(/\.?0+$/, ""), `${cD}${iD}${pD}`
        } return `${cD}${CD}`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);