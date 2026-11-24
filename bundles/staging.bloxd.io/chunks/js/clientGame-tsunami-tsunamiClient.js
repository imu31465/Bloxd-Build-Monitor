export const id = 26;
export const ids = [26];
export const modules = {
  39501: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => LD
    });
    var pD = wD(34226);
    const sD = 1e3 / 3;

    function KD(DD, zD, wD) {
      if ("parenthetical-seconds" === zD) return ` (${DD}s)`;
      const pD = `${Math.floor(DD/60)}:${(DD%60).toString().padStart(2,"0")}`;
      return wD ? `${wD}${pD}` : pD
    }

    function rD(DD, zD, wD, sD, KD) {
      var rD;
      const LD = {
        ...sD.baseNametag
      };
      LD.content = [...null !== (rD = sD.baseNametag.content) && void 0 !== rD ? rD : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,pD.d)(KD)}`
      }], DD.setOtherEntitySetting(zD, wD, "nameTagInfo", LD)
    }
    const LD = function(DD, zD, wD, pD) {
      let LD, {
        localPlayerId: cD
      } = pD;
      const gD = new Map,
        RD = new Map;
      let AD = 0,
        UD = 0;
      return {
        onCreate: DD => {
          LD = DD
        },
        DU: DD => {
          const zD = Date.now();
          for (const [pD, sD] of gD) {
            const DD = Math.floor((zD - sD.startTime) / 1e3),
              rD = Math.max(0, sD.remainingSeconds - DD);
            if (rD === sD.lastRenderedSecond) continue;
            sD.lastRenderedSecond = rD;
            const RD = {
                str: KD(rD, sD.format, sD.prefix),
                style: sD.style
              },
              AD = {
                ...sD.baseNametag
              };
            var wD;
            if ("content" === sD.location) AD.content = [...null !== (wD = sD.baseNametag.content) && void 0 !== wD ? wD : [], RD];
            else AD.subtitle = [RD];
            LD.setOtherEntitySetting(cD, pD, "nameTagInfo", AD), rD <= 0 && gD.delete(pD)
          }
          if (RD.size > 0 && zD - AD >= sD) {
            AD = zD, UD = (UD + 1) % 3;
            let DD = 0;
            for (const [wD, pD] of RD) {
              if (DD++ % 3 !== UD) continue;
              const sD = Math.floor((zD - pD.startTime) / 1e3);
              if (sD === pD.lastRenderedSecond) continue;
              pD.lastRenderedSecond = sD;
              const KD = pD.accumulatedIncome + pD.incomePerSecond * BigInt(sD);
              rD(LD, cD, wD, pD, KD)
            }
          }
        },
        onReceivedMessageFromServer: (DD, zD) => {
          if ("startCountdown" === DD) gD.set(zD.eId, {
            baseNametag: zD.baseNametag,
            remainingSeconds: zD.remainingSeconds,
            startTime: Date.now(),
            format: zD.format,
            location: zD.location,
            prefix: zD.prefix,
            style: zD.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === DD) gD.delete(zD.eId);
          else if ("startIncomeTicking" === DD) {
            const DD = {
              baseNametag: zD.baseNametag,
              accumulatedIncome: BigInt(zD.accumulatedIncome),
              incomePerSecond: BigInt(zD.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            RD.set(zD.eId, DD), rD(LD, cD, zD.eId, DD, DD.accumulatedIncome)
          } else "stopIncomeTicking" === DD && RD.delete(zD.eId) && LD.setOtherEntitySetting(cD, zD.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (DD, zD, wD, pD, sD, KD) => {
          if (KD && "Mesh" === LD.getEntityType(KD)) {
            const zD = LD.getEntityName(KD);
            "Upgrades" === zD ? LD.openShop(DD, !1, "Upgrades") : "Items" === zD ? LD.openShop(DD, !1, "Items") : "Prestige" === zD ? LD.openShop(DD, !1, "Prestige") : "Collections" === zD ? LD.openShop(DD, !1, "Collections") : "Base Skins" === zD ? LD.openShop(DD, !1, "Base Skins") : "Gauntlet" === zD ? LD.openShop(DD, !1, "Gauntlet") : "Diamond Shop" === zD && LD.openShop(DD, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34226: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      f: () => rD
    });
    const pD = [{
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

    function sD(DD) {
      let zD, wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof DD) {
        if (!Number.isFinite(DD)) return "0";
        if (Math.abs(DD) < 100) {
          const zD = DD < 0 ? "-" : "",
            wD = Math.abs(DD);
          return wD >= 10 ? `${zD}${wD.toFixed(1).replace(/\.0$/,"")}` : `${zD}${wD.toFixed(2).replace(/\.?0+$/,"")}`
        }
        zD = BigInt(Math.floor(DD))
      } else zD = DD;
      const sD = zD < 0n ? -zD : zD,
        KD = zD < 0n ? "-" : "",
        rD = sD.toString();
      if (rD.length <= wD) return `${KD}${rD}`;
      const LD = 3 * Math.floor((rD.length - 1) / 3);
      if (LD < 3) return `${KD}${rD}`;
      if (LD > 3 * pD.length) {
        const DD = rD[0],
          zD = rD.slice(1, 3).replace(/0+$/, "");
        return `${KD}${zD?`${DD}.${zD}`:DD}e${rD.length-1}`
      }
      const {
        threshold: cD,
        suffix: gD
      } = pD[pD.length - LD / 3], RD = sD / cD, AD = Number(1000n * (sD % cD) / cD), UD = Number(RD) + AD / 1e3;
      let fD;
      return fD = UD >= 100 ? Math.floor(UD).toString() : UD >= 10 ? UD.toFixed(1).replace(/\.0$/, "") : UD.toFixed(2).replace(/\.?0+$/, ""), `${KD}${fD}${gD}`
    }
    const KD = pD.map((DD => {
      let {
        threshold: zD,
        suffix: wD
      } = DD;
      return {
        threshold: Number(zD),
        suffix: wD
      }
    })).filter((DD => {
      let {
        threshold: zD
      } = DD;
      return Number.isFinite(zD)
    }));

    function rD(DD) {
      const zD = Math.abs(DD),
        wD = DD < 0 ? "-" : "";
      for (const {
          threshold: pD,
          suffix: sD
        }
        of KD)
        if (zD >= pD) {
          const DD = zD / pD;
          if (DD >= 1e3) return `${wD}${zD.toExponential(2).replace("e+","e")}`;
          let KD;
          return KD = DD >= 100 ? Math.floor(DD).toString() : DD >= 10 ? DD.toFixed(1).replace(/\.0$/, "") : DD.toFixed(2).replace(/\.?0+$/, ""), `${wD}${KD}${sD}`
        } return `${wD}${zD}`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);