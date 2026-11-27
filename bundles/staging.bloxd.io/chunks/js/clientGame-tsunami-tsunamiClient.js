export const id = 32;
export const ids = [32];
export const modules = {
  40900: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => LW
    });
    var mW = OW(35243);
    const EW = 1e3 / 3;

    function NW(WW, iW, OW) {
      if ("parenthetical-seconds" === iW) return ` (${WW}s)`;
      const mW = `${Math.floor(WW/60)}:${(WW%60).toString().padStart(2,"0")}`;
      return OW ? `${OW}${mW}` : mW
    }

    function PW(WW, iW, OW, EW, NW) {
      var PW;
      const LW = {
        ...EW.baseNametag
      };
      LW.content = [...null !== (PW = EW.baseNametag.content) && void 0 !== PW ? PW : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,mW.e)(NW)}`
      }], WW.setOtherEntitySetting(iW, OW, "nameTagInfo", LW)
    }
    const LW = function(WW, iW, OW, mW) {
      let LW, {
        localPlayerId: cW
      } = mW;
      const wW = new Map,
        tW = new Map;
      let ZW = 0,
        xW = 0;
      return {
        onCreate: WW => {
          LW = WW
        },
        hZ: WW => {
          const iW = Date.now();
          for (const [mW, EW] of wW) {
            const WW = Math.floor((iW - EW.startTime) / 1e3),
              PW = Math.max(0, EW.remainingSeconds - WW);
            if (PW === EW.lastRenderedSecond) continue;
            EW.lastRenderedSecond = PW;
            const tW = {
                str: NW(PW, EW.format, EW.prefix),
                style: EW.style
              },
              ZW = {
                ...EW.baseNametag
              };
            var OW;
            if ("content" === EW.location) ZW.content = [...null !== (OW = EW.baseNametag.content) && void 0 !== OW ? OW : [], tW];
            else ZW.subtitle = [tW];
            LW.setOtherEntitySetting(cW, mW, "nameTagInfo", ZW), PW <= 0 && wW.delete(mW)
          }
          if (tW.size > 0 && iW - ZW >= EW) {
            ZW = iW, xW = (xW + 1) % 3;
            let WW = 0;
            for (const [OW, mW] of tW) {
              if (WW++ % 3 !== xW) continue;
              const EW = Math.floor((iW - mW.startTime) / 1e3);
              if (EW === mW.lastRenderedSecond) continue;
              mW.lastRenderedSecond = EW;
              const NW = mW.accumulatedIncome + mW.incomePerSecond * BigInt(EW);
              PW(LW, cW, OW, mW, NW)
            }
          }
        },
        onReceivedMessageFromServer: (WW, iW) => {
          if ("startCountdown" === WW) wW.set(iW.eId, {
            baseNametag: iW.baseNametag,
            remainingSeconds: iW.remainingSeconds,
            startTime: Date.now(),
            format: iW.format,
            location: iW.location,
            prefix: iW.prefix,
            style: iW.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === WW) wW.delete(iW.eId);
          else if ("startIncomeTicking" === WW) {
            const WW = {
              baseNametag: iW.baseNametag,
              accumulatedIncome: BigInt(iW.accumulatedIncome),
              incomePerSecond: BigInt(iW.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            tW.set(iW.eId, WW), PW(LW, cW, iW.eId, WW, WW.accumulatedIncome)
          } else "stopIncomeTicking" === WW && tW.delete(iW.eId) && LW.setOtherEntitySetting(cW, iW.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (WW, iW, OW, mW, EW, NW) => {
          if (NW && "Mesh" === LW.getEntityType(NW)) {
            const iW = LW.getEntityName(NW);
            "Upgrades" === iW ? LW.openShop(WW, !1, "Upgrades") : "Items" === iW ? LW.openShop(WW, !1, "Items") : "Prestige" === iW ? LW.openShop(WW, !1, "Prestige") : "Collections" === iW ? LW.openShop(WW, !1, "Collections") : "Base Skins" === iW ? LW.openShop(WW, !1, "Base Skins") : "Gauntlet" === iW ? LW.openShop(WW, !1, "Gauntlet") : "Diamond Shop" === iW && LW.openShop(WW, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  35243: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      g: () => PW
    });
    const mW = [{
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

    function EW(WW) {
      let iW, OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof WW) {
        if (!Number.isFinite(WW)) return "0";
        if (Math.abs(WW) < 100) {
          const iW = WW < 0 ? "-" : "",
            OW = Math.abs(WW);
          return OW >= 10 ? `${iW}${OW.toFixed(1).replace(/\.0$/,"")}` : `${iW}${OW.toFixed(2).replace(/\.?0+$/,"")}`
        }
        iW = BigInt(Math.floor(WW))
      } else iW = WW;
      const EW = iW < 0n ? -iW : iW,
        NW = iW < 0n ? "-" : "",
        PW = EW.toString();
      if (PW.length <= OW) return `${NW}${PW}`;
      const LW = 3 * Math.floor((PW.length - 1) / 3);
      if (LW < 3) return `${NW}${PW}`;
      if (LW > 3 * mW.length) {
        const WW = PW[0],
          iW = PW.slice(1, 3).replace(/0+$/, "");
        return `${NW}${iW?`${WW}.${iW}`:WW}e${PW.length-1}`
      }
      const {
        threshold: cW,
        suffix: wW
      } = mW[mW.length - LW / 3], tW = EW / cW, ZW = Number(1000n * (EW % cW) / cW), xW = Number(tW) + ZW / 1e3;
      let lW;
      return lW = xW >= 100 ? Math.floor(xW).toString() : xW >= 10 ? xW.toFixed(1).replace(/\.0$/, "") : xW.toFixed(2).replace(/\.?0+$/, ""), `${NW}${lW}${wW}`
    }
    const NW = mW.map((WW => {
      let {
        threshold: iW,
        suffix: OW
      } = WW;
      return {
        threshold: Number(iW),
        suffix: OW
      }
    })).filter((WW => {
      let {
        threshold: iW
      } = WW;
      return Number.isFinite(iW)
    }));

    function PW(WW) {
      const iW = Math.abs(WW),
        OW = WW < 0 ? "-" : "";
      for (const {
          threshold: mW,
          suffix: EW
        }
        of NW)
        if (iW >= mW) {
          const WW = iW / mW;
          if (WW >= 1e3) return `${OW}${iW.toExponential(2).replace("e+","e")}`;
          let NW;
          return NW = WW >= 100 ? Math.floor(WW).toString() : WW >= 10 ? WW.toFixed(1).replace(/\.0$/, "") : WW.toFixed(2).replace(/\.?0+$/, ""), `${OW}${NW}${EW}`
        } return `${OW}${iW}`
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);