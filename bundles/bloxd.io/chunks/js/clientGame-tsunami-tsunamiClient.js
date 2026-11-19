export const id = 26;
export const ids = [26];
export const modules = {
  38856: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => OY
    });
    var FY = DY(8774);
    const AY = 1e3 / 3;

    function IY(YY, rY, DY) {
      if ("parenthetical-seconds" === rY) return ` (${YY}s)`;
      const FY = `${Math.floor(YY/60)}:${(YY%60).toString().padStart(2,"0")}`;
      return DY ? `${DY}${FY}` : FY
    }

    function RY(YY, rY, DY, AY, IY) {
      var RY;
      const OY = {
        ...AY.baseNametag
      };
      OY.content = [...null !== (RY = AY.baseNametag.content) && void 0 !== RY ? RY : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,FY.e)(IY)}`
      }], YY.setOtherEntitySetting(rY, DY, "nameTagInfo", OY)
    }
    const OY = function(YY, rY, DY, FY) {
      let OY, {
        localPlayerId: gY
      } = FY;
      const aY = new Map,
        vY = new Map;
      let uY = 0,
        sY = 0;
      return {
        onCreate: YY => {
          OY = YY
        },
        Zu: YY => {
          const rY = Date.now();
          for (const [FY, AY] of aY) {
            const YY = Math.floor((rY - AY.startTime) / 1e3),
              RY = Math.max(0, AY.remainingSeconds - YY);
            if (RY === AY.lastRenderedSecond) continue;
            AY.lastRenderedSecond = RY;
            const vY = {
                str: IY(RY, AY.format, AY.prefix),
                style: AY.style
              },
              uY = {
                ...AY.baseNametag
              };
            var DY;
            if ("content" === AY.location) uY.content = [...null !== (DY = AY.baseNametag.content) && void 0 !== DY ? DY : [], vY];
            else uY.subtitle = [vY];
            OY.setOtherEntitySetting(gY, FY, "nameTagInfo", uY), RY <= 0 && aY.delete(FY)
          }
          if (vY.size > 0 && rY - uY >= AY) {
            uY = rY, sY = (sY + 1) % 3;
            let YY = 0;
            for (const [DY, FY] of vY) {
              if (YY++ % 3 !== sY) continue;
              const AY = Math.floor((rY - FY.startTime) / 1e3);
              if (AY === FY.lastRenderedSecond) continue;
              FY.lastRenderedSecond = AY;
              const IY = FY.accumulatedIncome + FY.incomePerSecond * BigInt(AY);
              RY(OY, gY, DY, FY, IY)
            }
          }
        },
        onReceivedMessageFromServer: (YY, rY) => {
          if ("startCountdown" === YY) aY.set(rY.eId, {
            baseNametag: rY.baseNametag,
            remainingSeconds: rY.remainingSeconds,
            startTime: Date.now(),
            format: rY.format,
            location: rY.location,
            prefix: rY.prefix,
            style: rY.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === YY) aY.delete(rY.eId);
          else if ("startIncomeTicking" === YY) {
            const YY = {
              baseNametag: rY.baseNametag,
              accumulatedIncome: BigInt(rY.accumulatedIncome),
              incomePerSecond: BigInt(rY.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            vY.set(rY.eId, YY), RY(OY, gY, rY.eId, YY, YY.accumulatedIncome)
          } else "stopIncomeTicking" === YY && vY.delete(rY.eId) && OY.setOtherEntitySetting(gY, rY.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (YY, rY, DY, FY, AY, IY) => {
          if (IY && "Mesh" === OY.getEntityType(IY)) {
            const rY = OY.getEntityName(IY);
            "Upgrades" === rY ? OY.openShop(YY, !1, "Upgrades") : "Items" === rY ? OY.openShop(YY, !1, "Items") : "Prestige" === rY ? OY.openShop(YY, !1, "Prestige") : "Collections" === rY ? OY.openShop(YY, !1, "Collections") : "Base Skins" === rY ? OY.openShop(YY, !1, "Base Skins") : "Gauntlet" === rY ? OY.openShop(YY, !1, "Gauntlet") : "Diamond Shop" === rY && OY.openShop(YY, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  8774: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      g: () => RY
    });
    const FY = [{
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

    function AY(YY) {
      let rY, DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof YY) {
        if (!Number.isFinite(YY)) return "0";
        if (Math.abs(YY) < 100) {
          const rY = YY < 0 ? "-" : "",
            DY = Math.abs(YY);
          return DY >= 10 ? `${rY}${DY.toFixed(1).replace(/\.0$/,"")}` : `${rY}${DY.toFixed(2).replace(/\.?0+$/,"")}`
        }
        rY = BigInt(Math.floor(YY))
      } else rY = YY;
      const AY = rY < 0n ? -rY : rY,
        IY = rY < 0n ? "-" : "",
        RY = AY.toString();
      if (RY.length <= DY) return `${IY}${RY}`;
      const OY = 3 * Math.floor((RY.length - 1) / 3);
      if (OY < 3) return `${IY}${RY}`;
      if (OY > 3 * FY.length) {
        const YY = RY[0],
          rY = RY.slice(1, 3).replace(/0+$/, "");
        return `${IY}${rY?`${YY}.${rY}`:YY}e${RY.length-1}`
      }
      const {
        threshold: gY,
        suffix: aY
      } = FY[FY.length - OY / 3], vY = AY / gY, uY = Number(1000n * (AY % gY) / gY), sY = Number(vY) + uY / 1e3;
      let iY;
      return iY = sY >= 100 ? Math.floor(sY).toString() : sY >= 10 ? sY.toFixed(1).replace(/\.0$/, "") : sY.toFixed(2).replace(/\.?0+$/, ""), `${IY}${iY}${aY}`
    }
    const IY = FY.map((YY => {
      let {
        threshold: rY,
        suffix: DY
      } = YY;
      return {
        threshold: Number(rY),
        suffix: DY
      }
    })).filter((YY => {
      let {
        threshold: rY
      } = YY;
      return Number.isFinite(rY)
    }));

    function RY(YY) {
      const rY = Math.abs(YY),
        DY = YY < 0 ? "-" : "";
      for (const {
          threshold: FY,
          suffix: AY
        }
        of IY)
        if (rY >= FY) {
          const YY = rY / FY;
          if (YY >= 1e3) return `${DY}${rY.toExponential(2).replace("e+","e")}`;
          let IY;
          return IY = YY >= 100 ? Math.floor(YY).toString() : YY >= 10 ? YY.toFixed(1).replace(/\.0$/, "") : YY.toFixed(2).replace(/\.?0+$/, ""), `${DY}${IY}${AY}`
        } return `${DY}${rY}`
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);