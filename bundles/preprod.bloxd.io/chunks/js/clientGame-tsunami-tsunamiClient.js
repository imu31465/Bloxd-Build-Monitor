export const id = 31;
export const ids = [31];
export const modules = {
  40597: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => tH
    });
    var AH = LH(35008);
    const rH = 1e3 / 3;

    function SH(HH, BH, LH) {
      if ("parenthetical-seconds" === BH) return ` (${HH}s)`;
      const AH = `${Math.floor(HH/60)}:${(HH%60).toString().padStart(2,"0")}`;
      return LH ? `${LH}${AH}` : AH
    }

    function hH(HH, BH, LH, rH, SH) {
      var hH;
      const tH = {
        ...rH.baseNametag
      };
      tH.content = [...null !== (hH = rH.baseNametag.content) && void 0 !== hH ? hH : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,AH.c)(SH)}`
      }], HH.setOtherEntitySetting(BH, LH, "nameTagInfo", tH)
    }
    const tH = function(HH, BH, LH, AH) {
      let tH, {
        localPlayerId: zH
      } = AH;
      const CH = new Map,
        EH = new Map;
      let XH = 0,
        GH = 0;
      return {
        onCreate: HH => {
          tH = HH
        },
        IX: HH => {
          const BH = Date.now();
          for (const [AH, rH] of CH) {
            const HH = Math.floor((BH - rH.startTime) / 1e3),
              hH = Math.max(0, rH.remainingSeconds - HH);
            if (hH === rH.lastRenderedSecond) continue;
            rH.lastRenderedSecond = hH;
            const EH = {
                str: SH(hH, rH.format, rH.prefix),
                style: rH.style
              },
              XH = {
                ...rH.baseNametag
              };
            var LH;
            if ("content" === rH.location) XH.content = [...null !== (LH = rH.baseNametag.content) && void 0 !== LH ? LH : [], EH];
            else XH.subtitle = [EH];
            tH.setOtherEntitySetting(zH, AH, "nameTagInfo", XH), hH <= 0 && CH.delete(AH)
          }
          if (EH.size > 0 && BH - XH >= rH) {
            XH = BH, GH = (GH + 1) % 3;
            let HH = 0;
            for (const [LH, AH] of EH) {
              if (HH++ % 3 !== GH) continue;
              const rH = Math.floor((BH - AH.startTime) / 1e3);
              if (rH === AH.lastRenderedSecond) continue;
              AH.lastRenderedSecond = rH;
              const SH = AH.accumulatedIncome + AH.incomePerSecond * BigInt(rH);
              hH(tH, zH, LH, AH, SH)
            }
          }
        },
        onReceivedMessageFromServer: (HH, BH) => {
          if ("startCountdown" === HH) CH.set(BH.eId, {
            baseNametag: BH.baseNametag,
            remainingSeconds: BH.remainingSeconds,
            startTime: Date.now(),
            format: BH.format,
            location: BH.location,
            prefix: BH.prefix,
            style: BH.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === HH) CH.delete(BH.eId);
          else if ("startIncomeTicking" === HH) {
            const HH = {
              baseNametag: BH.baseNametag,
              accumulatedIncome: BigInt(BH.accumulatedIncome),
              incomePerSecond: BigInt(BH.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            EH.set(BH.eId, HH), hH(tH, zH, BH.eId, HH, HH.accumulatedIncome)
          } else "stopIncomeTicking" === HH && EH.delete(BH.eId) && tH.setOtherEntitySetting(zH, BH.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (HH, BH, LH, AH, rH, SH) => {
          if (SH && "Mesh" === tH.getEntityType(SH)) {
            const BH = tH.getEntityName(SH);
            "Upgrades" === BH ? tH.openShop(HH, !1, "Upgrades") : "Items" === BH ? tH.openShop(HH, !1, "Items") : "Prestige" === BH ? tH.openShop(HH, !1, "Prestige") : "Collections" === BH ? tH.openShop(HH, !1, "Collections") : "Base Skins" === BH ? tH.openShop(HH, !1, "Base Skins") : "Gauntlet" === BH ? tH.openShop(HH, !1, "Gauntlet") : "Diamond Shop" === BH && tH.openShop(HH, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  35008: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      f: () => hH
    });
    const AH = [{
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

    function rH(HH) {
      let BH, LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof HH) {
        if (!Number.isFinite(HH)) return "0";
        if (Math.abs(HH) < 100) {
          const BH = HH < 0 ? "-" : "",
            LH = Math.abs(HH);
          return LH >= 10 ? `${BH}${LH.toFixed(1).replace(/\.0$/,"")}` : `${BH}${LH.toFixed(2).replace(/\.?0+$/,"")}`
        }
        BH = BigInt(Math.floor(HH))
      } else BH = HH;
      const rH = BH < 0n ? -BH : BH,
        SH = BH < 0n ? "-" : "",
        hH = rH.toString();
      if (hH.length <= LH) return `${SH}${hH}`;
      const tH = 3 * Math.floor((hH.length - 1) / 3);
      if (tH < 3) return `${SH}${hH}`;
      if (tH > 3 * AH.length) {
        const HH = hH[0],
          BH = hH.slice(1, 3).replace(/0+$/, "");
        return `${SH}${BH?`${HH}.${BH}`:HH}e${hH.length-1}`
      }
      const {
        threshold: zH,
        suffix: CH
      } = AH[AH.length - tH / 3], EH = rH / zH, XH = Number(1000n * (rH % zH) / zH), GH = Number(EH) + XH / 1e3;
      let YH;
      return YH = GH >= 100 ? Math.floor(GH).toString() : GH >= 10 ? GH.toFixed(1).replace(/\.0$/, "") : GH.toFixed(2).replace(/\.?0+$/, ""), `${SH}${YH}${CH}`
    }
    const SH = AH.map((HH => {
      let {
        threshold: BH,
        suffix: LH
      } = HH;
      return {
        threshold: Number(BH),
        suffix: LH
      }
    })).filter((HH => {
      let {
        threshold: BH
      } = HH;
      return Number.isFinite(BH)
    }));

    function hH(HH) {
      const BH = Math.abs(HH),
        LH = HH < 0 ? "-" : "";
      for (const {
          threshold: AH,
          suffix: rH
        }
        of SH)
        if (BH >= AH) {
          const HH = BH / AH;
          if (HH >= 1e3) return `${LH}${BH.toExponential(2).replace("e+","e")}`;
          let SH;
          return SH = HH >= 100 ? Math.floor(HH).toString() : HH >= 10 ? HH.toFixed(1).replace(/\.0$/, "") : HH.toFixed(2).replace(/\.?0+$/, ""), `${LH}${SH}${rH}`
        } return `${LH}${BH}`
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);