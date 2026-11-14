export const id = 23;
export const ids = [23];
export const modules = {
  37665: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => bW
    });
    var CF = SF(8222);
    const AF = 1e3 / 3;

    function uF(FF, WF, SF) {
      if ("parenthetical-seconds" === WF) return ` (${FF}s)`;
      const CF = `${Math.floor(FF/60)}:${(FF%60).toString().padStart(2,"0")}`;
      return SF ? `${SF}${CF}` : CF
    }

    function hF(FF, WF, SF, AF, uF) {
      var hF;
      const bW = {
        ...AF.baseNametag
      };
      bW.content = [...null !== (hF = AF.baseNametag.content) && void 0 !== hF ? hF : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,CF.d)(uF)}`
      }], FF.setOtherEntitySetting(WF, SF, "nameTagInfo", bW)
    }
    const bW = function(FF, WF, SF, CF) {
      let bW, {
        localPlayerId: dF
      } = CF;
      const PF = new Map,
        RF = new Map;
      let iW = 0,
        eF = 0;
      return {
        onCreate: FF => {
          bW = FF
        },
        lF: FF => {
          const WF = Date.now();
          for (const [CF, AF] of PF) {
            const FF = Math.floor((WF - AF.startTime) / 1e3),
              hF = Math.max(0, AF.remainingSeconds - FF);
            if (hF === AF.lastRenderedSecond) continue;
            AF.lastRenderedSecond = hF;
            const RF = {
                str: uF(hF, AF.format, AF.prefix),
                style: AF.style
              },
              iW = {
                ...AF.baseNametag
              };
            var SF;
            if ("content" === AF.location) iW.content = [...null !== (SF = AF.baseNametag.content) && void 0 !== SF ? SF : [], RF];
            else iW.subtitle = [RF];
            bW.setOtherEntitySetting(dF, CF, "nameTagInfo", iW), hF <= 0 && PF.delete(CF)
          }
          if (RF.size > 0 && WF - iW >= AF) {
            iW = WF, eF = (eF + 1) % 3;
            let FF = 0;
            for (const [SF, CF] of RF) {
              if (FF++ % 3 !== eF) continue;
              const AF = Math.floor((WF - CF.startTime) / 1e3);
              if (AF === CF.lastRenderedSecond) continue;
              CF.lastRenderedSecond = AF;
              const uF = CF.accumulatedIncome + CF.incomePerSecond * BigInt(AF);
              hF(bW, dF, SF, CF, uF)
            }
          }
        },
        onReceivedMessageFromServer: (FF, WF) => {
          if ("startCountdown" === FF) PF.set(WF.eId, {
            baseNametag: WF.baseNametag,
            remainingSeconds: WF.remainingSeconds,
            startTime: Date.now(),
            format: WF.format,
            location: WF.location,
            prefix: WF.prefix,
            style: WF.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === FF) PF.delete(WF.eId);
          else if ("startIncomeTicking" === FF) {
            const FF = {
              baseNametag: WF.baseNametag,
              accumulatedIncome: BigInt(WF.accumulatedIncome),
              incomePerSecond: BigInt(WF.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            RF.set(WF.eId, FF), hF(bW, dF, WF.eId, FF, FF.accumulatedIncome)
          } else "stopIncomeTicking" === FF && RF.delete(WF.eId) && bW.setOtherEntitySetting(dF, WF.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (FF, WF, SF, CF, AF, uF) => {
          if (uF && "Mesh" === bW.getEntityType(uF)) {
            const WF = bW.getEntityName(uF);
            "Upgrades" === WF ? bW.openShop(FF, !1, "Upgrades") : "Items" === WF ? bW.openShop(FF, !1, "Items") : "Prestige" === WF ? bW.openShop(FF, !1, "Prestige") : "Collections" === WF ? bW.openShop(FF, !1, "Collections") : "Base Skins" === WF ? bW.openShop(FF, !1, "Base Skins") : "Gauntlet" === WF ? bW.openShop(FF, !1, "Gauntlet") : "Diamond Shop" === WF && bW.openShop(FF, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  8222: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF,
      f: () => hF
    });
    const CF = [{
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

    function AF(FF) {
      let WF, SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof FF) {
        if (!Number.isFinite(FF)) return "0";
        if (Math.abs(FF) < 100) {
          const WF = FF < 0 ? "-" : "",
            SF = Math.abs(FF);
          return SF >= 10 ? `${WF}${SF.toFixed(1).replace(/\.0$/,"")}` : `${WF}${SF.toFixed(2).replace(/\.?0+$/,"")}`
        }
        WF = BigInt(Math.floor(FF))
      } else WF = FF;
      const AF = WF < 0n ? -WF : WF,
        uF = WF < 0n ? "-" : "",
        hF = AF.toString();
      if (hF.length <= SF) return `${uF}${hF}`;
      const bW = 3 * Math.floor((hF.length - 1) / 3);
      if (bW < 3) return `${uF}${hF}`;
      if (bW > 3 * CF.length) {
        const FF = hF[0],
          WF = hF.slice(1, 3).replace(/0+$/, "");
        return `${uF}${WF?`${FF}.${WF}`:FF}e${hF.length-1}`
      }
      const {
        threshold: dF,
        suffix: PF
      } = CF[CF.length - bW / 3], RF = AF / dF, iW = Number(1000n * (AF % dF) / dF), eF = Number(RF) + iW / 1e3;
      let EF;
      return EF = eF >= 100 ? Math.floor(eF).toString() : eF >= 10 ? eF.toFixed(1).replace(/\.0$/, "") : eF.toFixed(2).replace(/\.?0+$/, ""), `${uF}${EF}${PF}`
    }
    const uF = CF.map((FF => {
      let {
        threshold: WF,
        suffix: SF
      } = FF;
      return {
        threshold: Number(WF),
        suffix: SF
      }
    })).filter((FF => {
      let {
        threshold: WF
      } = FF;
      return Number.isFinite(WF)
    }));

    function hF(FF) {
      const WF = Math.abs(FF),
        SF = FF < 0 ? "-" : "";
      for (const {
          threshold: CF,
          suffix: AF
        }
        of uF)
        if (WF >= CF) {
          const FF = WF / CF;
          if (FF >= 1e3) return `${SF}${WF.toExponential(2).replace("e+","e")}`;
          let uF;
          return uF = FF >= 100 ? Math.floor(FF).toString() : FF >= 10 ? FF.toFixed(1).replace(/\.0$/, "") : FF.toFixed(2).replace(/\.?0+$/, ""), `${SF}${uF}${AF}`
        } return `${SF}${WF}`
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);