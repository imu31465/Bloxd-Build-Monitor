export const id = 23;
export const ids = [23];
export const modules = {
  37305: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => bR
    });
    var wW = MW(8157);
    const CW = 1e3 / 3;

    function zR(WW, RW, MW) {
      if ("parenthetical-seconds" === RW) return ` (${WW}s)`;
      const wW = `${Math.floor(WW/60)}:${(WW%60).toString().padStart(2,"0")}`;
      return MW ? `${MW}${wW}` : wW
    }

    function AW(WW, RW, MW, CW, zR) {
      var AW;
      const bR = {
        ...CW.baseNametag
      };
      bR.content = [...null !== (AW = CW.baseNametag.content) && void 0 !== AW ? AW : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,wW.e)(zR)}`
      }], WW.setOtherEntitySetting(RW, MW, "nameTagInfo", bR)
    }
    const bR = function(WW, RW, MW, wW) {
      let bR, {
        localPlayerId: yR
      } = wW;
      const NW = new Map,
        eW = new Map;
      let BW = 0,
        tR = 0;
      return {
        onCreate: WW => {
          bR = WW
        },
        WR: WW => {
          const RW = Date.now();
          for (const [wW, CW] of NW) {
            const WW = Math.floor((RW - CW.startTime) / 1e3),
              AW = Math.max(0, CW.remainingSeconds - WW);
            if (AW === CW.lastRenderedSecond) continue;
            CW.lastRenderedSecond = AW;
            const eW = {
                str: zR(AW, CW.format, CW.prefix),
                style: CW.style
              },
              BW = {
                ...CW.baseNametag
              };
            var MW;
            if ("content" === CW.location) BW.content = [...null !== (MW = CW.baseNametag.content) && void 0 !== MW ? MW : [], eW];
            else BW.subtitle = [eW];
            bR.setOtherEntitySetting(yR, wW, "nameTagInfo", BW), AW <= 0 && NW.delete(wW)
          }
          if (eW.size > 0 && RW - BW >= CW) {
            BW = RW, tR = (tR + 1) % 3;
            let WW = 0;
            for (const [MW, wW] of eW) {
              if (WW++ % 3 !== tR) continue;
              const CW = Math.floor((RW - wW.startTime) / 1e3);
              if (CW === wW.lastRenderedSecond) continue;
              wW.lastRenderedSecond = CW;
              const zR = wW.accumulatedIncome + wW.incomePerSecond * BigInt(CW);
              AW(bR, yR, MW, wW, zR)
            }
          }
        },
        onReceivedMessageFromServer: (WW, RW) => {
          if ("startCountdown" === WW) NW.set(RW.eId, {
            baseNametag: RW.baseNametag,
            remainingSeconds: RW.remainingSeconds,
            startTime: Date.now(),
            format: RW.format,
            location: RW.location,
            prefix: RW.prefix,
            style: RW.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === WW) NW.delete(RW.eId);
          else if ("startIncomeTicking" === WW) {
            const WW = {
              baseNametag: RW.baseNametag,
              accumulatedIncome: BigInt(RW.accumulatedIncome),
              incomePerSecond: BigInt(RW.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            eW.set(RW.eId, WW), AW(bR, yR, RW.eId, WW, WW.accumulatedIncome)
          } else "stopIncomeTicking" === WW && eW.delete(RW.eId) && bR.setOtherEntitySetting(yR, RW.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (WW, RW, MW, wW, CW, zR) => {
          if (zR && "Mesh" === bR.getEntityType(zR)) {
            const RW = bR.getEntityName(zR);
            "Upgrades" === RW ? bR.openShop(WW, !1, "Upgrades") : "Items" === RW ? bR.openShop(WW, !1, "Items") : "Prestige" === RW ? bR.openShop(WW, !1, "Prestige") : "Collections" === RW ? bR.openShop(WW, !1, "Collections") : "Base Skins" === RW ? bR.openShop(WW, !1, "Base Skins") : "Gauntlet" === RW ? bR.openShop(WW, !1, "Gauntlet") : "Diamond Shop" === RW && bR.openShop(WW, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  8157: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      g: () => AW
    });
    const wW = [{
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

    function CW(WW) {
      let RW, MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof WW) {
        if (!Number.isFinite(WW)) return "0";
        if (Math.abs(WW) < 100) {
          const RW = WW < 0 ? "-" : "",
            MW = Math.abs(WW);
          return MW >= 10 ? `${RW}${MW.toFixed(1).replace(/\.0$/,"")}` : `${RW}${MW.toFixed(2).replace(/\.?0+$/,"")}`
        }
        RW = BigInt(Math.floor(WW))
      } else RW = WW;
      const CW = RW < 0n ? -RW : RW,
        zR = RW < 0n ? "-" : "",
        AW = CW.toString();
      if (AW.length <= MW) return `${zR}${AW}`;
      const bR = 3 * Math.floor((AW.length - 1) / 3);
      if (bR < 3) return `${zR}${AW}`;
      if (bR > 3 * wW.length) {
        const WW = AW[0],
          RW = AW.slice(1, 3).replace(/0+$/, "");
        return `${zR}${RW?`${WW}.${RW}`:WW}e${AW.length-1}`
      }
      const {
        threshold: yR,
        suffix: NW
      } = wW[wW.length - bR / 3], eW = CW / yR, BW = Number(1000n * (CW % yR) / yR), tR = Number(eW) + BW / 1e3;
      let TW;
      return TW = tR >= 100 ? Math.floor(tR).toString() : tR >= 10 ? tR.toFixed(1).replace(/\.0$/, "") : tR.toFixed(2).replace(/\.?0+$/, ""), `${zR}${TW}${NW}`
    }
    const zR = wW.map((WW => {
      let {
        threshold: RW,
        suffix: MW
      } = WW;
      return {
        threshold: Number(RW),
        suffix: MW
      }
    })).filter((WW => {
      let {
        threshold: RW
      } = WW;
      return Number.isFinite(RW)
    }));

    function AW(WW) {
      const RW = Math.abs(WW),
        MW = WW < 0 ? "-" : "";
      for (const {
          threshold: wW,
          suffix: CW
        }
        of zR)
        if (RW >= wW) {
          const WW = RW / wW;
          if (WW >= 1e3) return `${MW}${RW.toExponential(2).replace("e+","e")}`;
          let zR;
          return zR = WW >= 100 ? Math.floor(WW).toString() : WW >= 10 ? WW.toFixed(1).replace(/\.0$/, "") : WW.toFixed(2).replace(/\.?0+$/, ""), `${MW}${zR}${CW}`
        } return `${MW}${RW}`
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);