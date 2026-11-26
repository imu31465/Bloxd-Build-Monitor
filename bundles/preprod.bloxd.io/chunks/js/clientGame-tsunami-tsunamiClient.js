export const id = 31;
export const ids = [31];
export const modules = {
  40435: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => FU
    });
    var cU = zU(34891);
    const yU = 1e3 / 3;

    function QU(UU, XU, zU) {
      if ("parenthetical-seconds" === XU) return ` (${UU}s)`;
      const cU = `${Math.floor(UU/60)}:${(UU%60).toString().padStart(2,"0")}`;
      return zU ? `${zU}${cU}` : cU
    }

    function AU(UU, XU, zU, yU, QU) {
      var AU;
      const FU = {
        ...yU.baseNametag
      };
      FU.content = [...null !== (AU = yU.baseNametag.content) && void 0 !== AU ? AU : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,cU.e)(QU)}`
      }], UU.setOtherEntitySetting(XU, zU, "nameTagInfo", FU)
    }
    const FU = function(UU, XU, zU, cU) {
      let FU, {
        localPlayerId: oU
      } = cU;
      const DU = new Map,
        EU = new Map;
      let YU = 0,
        NU = 0;
      return {
        onCreate: UU => {
          FU = UU
        },
        LY: UU => {
          const XU = Date.now();
          for (const [cU, yU] of DU) {
            const UU = Math.floor((XU - yU.startTime) / 1e3),
              AU = Math.max(0, yU.remainingSeconds - UU);
            if (AU === yU.lastRenderedSecond) continue;
            yU.lastRenderedSecond = AU;
            const EU = {
                str: QU(AU, yU.format, yU.prefix),
                style: yU.style
              },
              YU = {
                ...yU.baseNametag
              };
            var zU;
            if ("content" === yU.location) YU.content = [...null !== (zU = yU.baseNametag.content) && void 0 !== zU ? zU : [], EU];
            else YU.subtitle = [EU];
            FU.setOtherEntitySetting(oU, cU, "nameTagInfo", YU), AU <= 0 && DU.delete(cU)
          }
          if (EU.size > 0 && XU - YU >= yU) {
            YU = XU, NU = (NU + 1) % 3;
            let UU = 0;
            for (const [zU, cU] of EU) {
              if (UU++ % 3 !== NU) continue;
              const yU = Math.floor((XU - cU.startTime) / 1e3);
              if (yU === cU.lastRenderedSecond) continue;
              cU.lastRenderedSecond = yU;
              const QU = cU.accumulatedIncome + cU.incomePerSecond * BigInt(yU);
              AU(FU, oU, zU, cU, QU)
            }
          }
        },
        onReceivedMessageFromServer: (UU, XU) => {
          if ("startCountdown" === UU) DU.set(XU.eId, {
            baseNametag: XU.baseNametag,
            remainingSeconds: XU.remainingSeconds,
            startTime: Date.now(),
            format: XU.format,
            location: XU.location,
            prefix: XU.prefix,
            style: XU.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === UU) DU.delete(XU.eId);
          else if ("startIncomeTicking" === UU) {
            const UU = {
              baseNametag: XU.baseNametag,
              accumulatedIncome: BigInt(XU.accumulatedIncome),
              incomePerSecond: BigInt(XU.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            EU.set(XU.eId, UU), AU(FU, oU, XU.eId, UU, UU.accumulatedIncome)
          } else "stopIncomeTicking" === UU && EU.delete(XU.eId) && FU.setOtherEntitySetting(oU, XU.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (UU, XU, zU, cU, yU, QU) => {
          if (QU && "Mesh" === FU.getEntityType(QU)) {
            const XU = FU.getEntityName(QU);
            "Upgrades" === XU ? FU.openShop(UU, !1, "Upgrades") : "Items" === XU ? FU.openShop(UU, !1, "Items") : "Prestige" === XU ? FU.openShop(UU, !1, "Prestige") : "Collections" === XU ? FU.openShop(UU, !1, "Collections") : "Base Skins" === XU ? FU.openShop(UU, !1, "Base Skins") : "Gauntlet" === XU ? FU.openShop(UU, !1, "Gauntlet") : "Diamond Shop" === XU && FU.openShop(UU, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34891: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      f: () => AU
    });
    const cU = [{
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

    function yU(UU) {
      let XU, zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof UU) {
        if (!Number.isFinite(UU)) return "0";
        if (Math.abs(UU) < 100) {
          const XU = UU < 0 ? "-" : "",
            zU = Math.abs(UU);
          return zU >= 10 ? `${XU}${zU.toFixed(1).replace(/\.0$/,"")}` : `${XU}${zU.toFixed(2).replace(/\.?0+$/,"")}`
        }
        XU = BigInt(Math.floor(UU))
      } else XU = UU;
      const yU = XU < 0n ? -XU : XU,
        QU = XU < 0n ? "-" : "",
        AU = yU.toString();
      if (AU.length <= zU) return `${QU}${AU}`;
      const FU = 3 * Math.floor((AU.length - 1) / 3);
      if (FU < 3) return `${QU}${AU}`;
      if (FU > 3 * cU.length) {
        const UU = AU[0],
          XU = AU.slice(1, 3).replace(/0+$/, "");
        return `${QU}${XU?`${UU}.${XU}`:UU}e${AU.length-1}`
      }
      const {
        threshold: oU,
        suffix: DU
      } = cU[cU.length - FU / 3], EU = yU / oU, YU = Number(1000n * (yU % oU) / oU), NU = Number(EU) + YU / 1e3;
      let IU;
      return IU = NU >= 100 ? Math.floor(NU).toString() : NU >= 10 ? NU.toFixed(1).replace(/\.0$/, "") : NU.toFixed(2).replace(/\.?0+$/, ""), `${QU}${IU}${DU}`
    }
    const QU = cU.map((UU => {
      let {
        threshold: XU,
        suffix: zU
      } = UU;
      return {
        threshold: Number(XU),
        suffix: zU
      }
    })).filter((UU => {
      let {
        threshold: XU
      } = UU;
      return Number.isFinite(XU)
    }));

    function AU(UU) {
      const XU = Math.abs(UU),
        zU = UU < 0 ? "-" : "";
      for (const {
          threshold: cU,
          suffix: yU
        }
        of QU)
        if (XU >= cU) {
          const UU = XU / cU;
          if (UU >= 1e3) return `${zU}${XU.toExponential(2).replace("e+","e")}`;
          let QU;
          return QU = UU >= 100 ? Math.floor(UU).toString() : UU >= 10 ? UU.toFixed(1).replace(/\.0$/, "") : UU.toFixed(2).replace(/\.?0+$/, ""), `${zU}${QU}${yU}`
        } return `${zU}${XU}`
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);