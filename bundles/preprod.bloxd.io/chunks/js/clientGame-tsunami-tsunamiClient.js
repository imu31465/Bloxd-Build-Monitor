export const id = 31;
export const ids = [31];
export const modules = {
  40322: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => jB
    });
    var YB = GB(34815);
    const DB = 1e3 / 3;

    function QB(BB, OB, GB) {
      if ("parenthetical-seconds" === OB) return ` (${BB}s)`;
      const YB = `${Math.floor(BB/60)}:${(BB%60).toString().padStart(2,"0")}`;
      return GB ? `${GB}${YB}` : YB
    }

    function oB(BB, OB, GB, DB, QB) {
      var oB;
      const jB = {
        ...DB.baseNametag
      };
      jB.content = [...null !== (oB = DB.baseNametag.content) && void 0 !== oB ? oB : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,YB.d)(QB)}`
      }], BB.setOtherEntitySetting(OB, GB, "nameTagInfo", jB)
    }
    const jB = function(BB, OB, GB, YB) {
      let jB, {
        localPlayerId: yB
      } = YB;
      const JB = new Map,
        MB = new Map;
      let PB = 0,
        zB = 0;
      return {
        onCreate: BB => {
          jB = BB
        },
        kP: BB => {
          const OB = Date.now();
          for (const [YB, DB] of JB) {
            const BB = Math.floor((OB - DB.startTime) / 1e3),
              oB = Math.max(0, DB.remainingSeconds - BB);
            if (oB === DB.lastRenderedSecond) continue;
            DB.lastRenderedSecond = oB;
            const MB = {
                str: QB(oB, DB.format, DB.prefix),
                style: DB.style
              },
              PB = {
                ...DB.baseNametag
              };
            var GB;
            if ("content" === DB.location) PB.content = [...null !== (GB = DB.baseNametag.content) && void 0 !== GB ? GB : [], MB];
            else PB.subtitle = [MB];
            jB.setOtherEntitySetting(yB, YB, "nameTagInfo", PB), oB <= 0 && JB.delete(YB)
          }
          if (MB.size > 0 && OB - PB >= DB) {
            PB = OB, zB = (zB + 1) % 3;
            let BB = 0;
            for (const [GB, YB] of MB) {
              if (BB++ % 3 !== zB) continue;
              const DB = Math.floor((OB - YB.startTime) / 1e3);
              if (DB === YB.lastRenderedSecond) continue;
              YB.lastRenderedSecond = DB;
              const QB = YB.accumulatedIncome + YB.incomePerSecond * BigInt(DB);
              oB(jB, yB, GB, YB, QB)
            }
          }
        },
        onReceivedMessageFromServer: (BB, OB) => {
          if ("startCountdown" === BB) JB.set(OB.eId, {
            baseNametag: OB.baseNametag,
            remainingSeconds: OB.remainingSeconds,
            startTime: Date.now(),
            format: OB.format,
            location: OB.location,
            prefix: OB.prefix,
            style: OB.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === BB) JB.delete(OB.eId);
          else if ("startIncomeTicking" === BB) {
            const BB = {
              baseNametag: OB.baseNametag,
              accumulatedIncome: BigInt(OB.accumulatedIncome),
              incomePerSecond: BigInt(OB.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            MB.set(OB.eId, BB), oB(jB, yB, OB.eId, BB, BB.accumulatedIncome)
          } else "stopIncomeTicking" === BB && MB.delete(OB.eId) && jB.setOtherEntitySetting(yB, OB.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (BB, OB, GB, YB, DB, QB) => {
          if (QB && "Mesh" === jB.getEntityType(QB)) {
            const OB = jB.getEntityName(QB);
            "Upgrades" === OB ? jB.openShop(BB, !1, "Upgrades") : "Items" === OB ? jB.openShop(BB, !1, "Items") : "Prestige" === OB ? jB.openShop(BB, !1, "Prestige") : "Collections" === OB ? jB.openShop(BB, !1, "Collections") : "Base Skins" === OB ? jB.openShop(BB, !1, "Base Skins") : "Gauntlet" === OB ? jB.openShop(BB, !1, "Gauntlet") : "Diamond Shop" === OB && jB.openShop(BB, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34815: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      g: () => oB
    });
    const YB = [{
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

    function DB(BB) {
      let OB, GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof BB) {
        if (!Number.isFinite(BB)) return "0";
        if (Math.abs(BB) < 100) {
          const OB = BB < 0 ? "-" : "",
            GB = Math.abs(BB);
          return GB >= 10 ? `${OB}${GB.toFixed(1).replace(/\.0$/,"")}` : `${OB}${GB.toFixed(2).replace(/\.?0+$/,"")}`
        }
        OB = BigInt(Math.floor(BB))
      } else OB = BB;
      const DB = OB < 0n ? -OB : OB,
        QB = OB < 0n ? "-" : "",
        oB = DB.toString();
      if (oB.length <= GB) return `${QB}${oB}`;
      const jB = 3 * Math.floor((oB.length - 1) / 3);
      if (jB < 3) return `${QB}${oB}`;
      if (jB > 3 * YB.length) {
        const BB = oB[0],
          OB = oB.slice(1, 3).replace(/0+$/, "");
        return `${QB}${OB?`${BB}.${OB}`:BB}e${oB.length-1}`
      }
      const {
        threshold: yB,
        suffix: JB
      } = YB[YB.length - jB / 3], MB = DB / yB, PB = Number(1000n * (DB % yB) / yB), zB = Number(MB) + PB / 1e3;
      let lB;
      return lB = zB >= 100 ? Math.floor(zB).toString() : zB >= 10 ? zB.toFixed(1).replace(/\.0$/, "") : zB.toFixed(2).replace(/\.?0+$/, ""), `${QB}${lB}${JB}`
    }
    const QB = YB.map((BB => {
      let {
        threshold: OB,
        suffix: GB
      } = BB;
      return {
        threshold: Number(OB),
        suffix: GB
      }
    })).filter((BB => {
      let {
        threshold: OB
      } = BB;
      return Number.isFinite(OB)
    }));

    function oB(BB) {
      const OB = Math.abs(BB),
        GB = BB < 0 ? "-" : "";
      for (const {
          threshold: YB,
          suffix: DB
        }
        of QB)
        if (OB >= YB) {
          const BB = OB / YB;
          if (BB >= 1e3) return `${GB}${OB.toExponential(2).replace("e+","e")}`;
          let QB;
          return QB = BB >= 100 ? Math.floor(BB).toString() : BB >= 10 ? BB.toFixed(1).replace(/\.0$/, "") : BB.toFixed(2).replace(/\.?0+$/, ""), `${GB}${QB}${DB}`
        } return `${GB}${OB}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);