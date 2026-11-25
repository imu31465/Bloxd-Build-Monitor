export const id = 26;
export const ids = [26];
export const modules = {
  39939: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => kG
    });
    var wG = ZG(34499);
    const SG = 1e3 / 3;

    function LG(GG, bG, ZG) {
      if ("parenthetical-seconds" === bG) return ` (${GG}s)`;
      const wG = `${Math.floor(GG/60)}:${(GG%60).toString().padStart(2,"0")}`;
      return ZG ? `${ZG}${wG}` : wG
    }

    function yG(GG, bG, ZG, SG, LG) {
      var yG;
      const kG = {
        ...SG.baseNametag
      };
      kG.content = [...null !== (yG = SG.baseNametag.content) && void 0 !== yG ? yG : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,wG.c)(LG)}`
      }], GG.setOtherEntitySetting(bG, ZG, "nameTagInfo", kG)
    }
    const kG = function(GG, bG, ZG, wG) {
      let kG, {
        localPlayerId: UG
      } = wG;
      const YG = new Map,
        VG = new Map;
      let pG = 0,
        fG = 0;
      return {
        onCreate: GG => {
          kG = GG
        },
        Tp: GG => {
          const bG = Date.now();
          for (const [wG, SG] of YG) {
            const GG = Math.floor((bG - SG.startTime) / 1e3),
              yG = Math.max(0, SG.remainingSeconds - GG);
            if (yG === SG.lastRenderedSecond) continue;
            SG.lastRenderedSecond = yG;
            const VG = {
                str: LG(yG, SG.format, SG.prefix),
                style: SG.style
              },
              pG = {
                ...SG.baseNametag
              };
            var ZG;
            if ("content" === SG.location) pG.content = [...null !== (ZG = SG.baseNametag.content) && void 0 !== ZG ? ZG : [], VG];
            else pG.subtitle = [VG];
            kG.setOtherEntitySetting(UG, wG, "nameTagInfo", pG), yG <= 0 && YG.delete(wG)
          }
          if (VG.size > 0 && bG - pG >= SG) {
            pG = bG, fG = (fG + 1) % 3;
            let GG = 0;
            for (const [ZG, wG] of VG) {
              if (GG++ % 3 !== fG) continue;
              const SG = Math.floor((bG - wG.startTime) / 1e3);
              if (SG === wG.lastRenderedSecond) continue;
              wG.lastRenderedSecond = SG;
              const LG = wG.accumulatedIncome + wG.incomePerSecond * BigInt(SG);
              yG(kG, UG, ZG, wG, LG)
            }
          }
        },
        onReceivedMessageFromServer: (GG, bG) => {
          if ("startCountdown" === GG) YG.set(bG.eId, {
            baseNametag: bG.baseNametag,
            remainingSeconds: bG.remainingSeconds,
            startTime: Date.now(),
            format: bG.format,
            location: bG.location,
            prefix: bG.prefix,
            style: bG.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === GG) YG.delete(bG.eId);
          else if ("startIncomeTicking" === GG) {
            const GG = {
              baseNametag: bG.baseNametag,
              accumulatedIncome: BigInt(bG.accumulatedIncome),
              incomePerSecond: BigInt(bG.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            VG.set(bG.eId, GG), yG(kG, UG, bG.eId, GG, GG.accumulatedIncome)
          } else "stopIncomeTicking" === GG && VG.delete(bG.eId) && kG.setOtherEntitySetting(UG, bG.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (GG, bG, ZG, wG, SG, LG) => {
          if (LG && "Mesh" === kG.getEntityType(LG)) {
            const bG = kG.getEntityName(LG);
            "Upgrades" === bG ? kG.openShop(GG, !1, "Upgrades") : "Items" === bG ? kG.openShop(GG, !1, "Items") : "Prestige" === bG ? kG.openShop(GG, !1, "Prestige") : "Collections" === bG ? kG.openShop(GG, !1, "Collections") : "Base Skins" === bG ? kG.openShop(GG, !1, "Base Skins") : "Gauntlet" === bG ? kG.openShop(GG, !1, "Gauntlet") : "Diamond Shop" === bG && kG.openShop(GG, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34499: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG,
      e: () => yG
    });
    const wG = [{
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

    function SG(GG) {
      let bG, ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof GG) {
        if (!Number.isFinite(GG)) return "0";
        if (Math.abs(GG) < 100) {
          const bG = GG < 0 ? "-" : "",
            ZG = Math.abs(GG);
          return ZG >= 10 ? `${bG}${ZG.toFixed(1).replace(/\.0$/,"")}` : `${bG}${ZG.toFixed(2).replace(/\.?0+$/,"")}`
        }
        bG = BigInt(Math.floor(GG))
      } else bG = GG;
      const SG = bG < 0n ? -bG : bG,
        LG = bG < 0n ? "-" : "",
        yG = SG.toString();
      if (yG.length <= ZG) return `${LG}${yG}`;
      const kG = 3 * Math.floor((yG.length - 1) / 3);
      if (kG < 3) return `${LG}${yG}`;
      if (kG > 3 * wG.length) {
        const GG = yG[0],
          bG = yG.slice(1, 3).replace(/0+$/, "");
        return `${LG}${bG?`${GG}.${bG}`:GG}e${yG.length-1}`
      }
      const {
        threshold: UG,
        suffix: YG
      } = wG[wG.length - kG / 3], VG = SG / UG, pG = Number(1000n * (SG % UG) / UG), fG = Number(VG) + pG / 1e3;
      let QG;
      return QG = fG >= 100 ? Math.floor(fG).toString() : fG >= 10 ? fG.toFixed(1).replace(/\.0$/, "") : fG.toFixed(2).replace(/\.?0+$/, ""), `${LG}${QG}${YG}`
    }
    const LG = wG.map((GG => {
      let {
        threshold: bG,
        suffix: ZG
      } = GG;
      return {
        threshold: Number(bG),
        suffix: ZG
      }
    })).filter((GG => {
      let {
        threshold: bG
      } = GG;
      return Number.isFinite(bG)
    }));

    function yG(GG) {
      const bG = Math.abs(GG),
        ZG = GG < 0 ? "-" : "";
      for (const {
          threshold: wG,
          suffix: SG
        }
        of LG)
        if (bG >= wG) {
          const GG = bG / wG;
          if (GG >= 1e3) return `${ZG}${bG.toExponential(2).replace("e+","e")}`;
          let LG;
          return LG = GG >= 100 ? Math.floor(GG).toString() : GG >= 10 ? GG.toFixed(1).replace(/\.0$/, "") : GG.toFixed(2).replace(/\.?0+$/, ""), `${ZG}${LG}${SG}`
        } return `${ZG}${bG}`
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);