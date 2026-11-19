export const id = 26;
export const ids = [26];
export const modules = {
  38466: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => XT
    });
    var iT = IT(8766);
    const zT = 1e3 / 3;

    function kT(TT, oT, IT) {
      if ("parenthetical-seconds" === oT) return ` (${TT}s)`;
      const iT = `${Math.floor(TT/60)}:${(TT%60).toString().padStart(2,"0")}`;
      return IT ? `${IT}${iT}` : iT
    }

    function WT(TT, oT, IT, zT, kT) {
      var WT;
      const XT = {
        ...zT.baseNametag
      };
      XT.content = [...null !== (WT = zT.baseNametag.content) && void 0 !== WT ? WT : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,iT.c)(kT)}`
      }], TT.setOtherEntitySetting(oT, IT, "nameTagInfo", XT)
    }
    const XT = function(TT, oT, IT, iT) {
      let XT, {
        localPlayerId: BT
      } = iT;
      const FT = new Map,
        ST = new Map;
      let DT = 0,
        LT = 0;
      return {
        onCreate: TT => {
          XT = TT
        },
        dD: TT => {
          const oT = Date.now();
          for (const [iT, zT] of FT) {
            const TT = Math.floor((oT - zT.startTime) / 1e3),
              WT = Math.max(0, zT.remainingSeconds - TT);
            if (WT === zT.lastRenderedSecond) continue;
            zT.lastRenderedSecond = WT;
            const ST = {
                str: kT(WT, zT.format, zT.prefix),
                style: zT.style
              },
              DT = {
                ...zT.baseNametag
              };
            var IT;
            if ("content" === zT.location) DT.content = [...null !== (IT = zT.baseNametag.content) && void 0 !== IT ? IT : [], ST];
            else DT.subtitle = [ST];
            XT.setOtherEntitySetting(BT, iT, "nameTagInfo", DT), WT <= 0 && FT.delete(iT)
          }
          if (ST.size > 0 && oT - DT >= zT) {
            DT = oT, LT = (LT + 1) % 3;
            let TT = 0;
            for (const [IT, iT] of ST) {
              if (TT++ % 3 !== LT) continue;
              const zT = Math.floor((oT - iT.startTime) / 1e3);
              if (zT === iT.lastRenderedSecond) continue;
              iT.lastRenderedSecond = zT;
              const kT = iT.accumulatedIncome + iT.incomePerSecond * BigInt(zT);
              WT(XT, BT, IT, iT, kT)
            }
          }
        },
        onReceivedMessageFromServer: (TT, oT) => {
          if ("startCountdown" === TT) FT.set(oT.eId, {
            baseNametag: oT.baseNametag,
            remainingSeconds: oT.remainingSeconds,
            startTime: Date.now(),
            format: oT.format,
            location: oT.location,
            prefix: oT.prefix,
            style: oT.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === TT) FT.delete(oT.eId);
          else if ("startIncomeTicking" === TT) {
            const TT = {
              baseNametag: oT.baseNametag,
              accumulatedIncome: BigInt(oT.accumulatedIncome),
              incomePerSecond: BigInt(oT.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            ST.set(oT.eId, TT), WT(XT, BT, oT.eId, TT, TT.accumulatedIncome)
          } else "stopIncomeTicking" === TT && ST.delete(oT.eId) && XT.setOtherEntitySetting(BT, oT.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (TT, oT, IT, iT, zT, kT) => {
          if (kT && "Mesh" === XT.getEntityType(kT)) {
            const oT = XT.getEntityName(kT);
            "Upgrades" === oT ? XT.openShop(TT, !1, "Upgrades") : "Items" === oT ? XT.openShop(TT, !1, "Items") : "Prestige" === oT ? XT.openShop(TT, !1, "Prestige") : "Collections" === oT ? XT.openShop(TT, !1, "Collections") : "Base Skins" === oT ? XT.openShop(TT, !1, "Base Skins") : "Gauntlet" === oT ? XT.openShop(TT, !1, "Gauntlet") : "Diamond Shop" === oT && XT.openShop(TT, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  8766: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      d: () => WT
    });
    const iT = [{
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

    function zT(TT) {
      let oT, IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof TT) {
        if (!Number.isFinite(TT)) return "0";
        if (Math.abs(TT) < 100) {
          const oT = TT < 0 ? "-" : "",
            IT = Math.abs(TT);
          return IT >= 10 ? `${oT}${IT.toFixed(1).replace(/\.0$/,"")}` : `${oT}${IT.toFixed(2).replace(/\.?0+$/,"")}`
        }
        oT = BigInt(Math.floor(TT))
      } else oT = TT;
      const zT = oT < 0n ? -oT : oT,
        kT = oT < 0n ? "-" : "",
        WT = zT.toString();
      if (WT.length <= IT) return `${kT}${WT}`;
      const XT = 3 * Math.floor((WT.length - 1) / 3);
      if (XT < 3) return `${kT}${WT}`;
      if (XT > 3 * iT.length) {
        const TT = WT[0],
          oT = WT.slice(1, 3).replace(/0+$/, "");
        return `${kT}${oT?`${TT}.${oT}`:TT}e${WT.length-1}`
      }
      const {
        threshold: BT,
        suffix: FT
      } = iT[iT.length - XT / 3], ST = zT / BT, DT = Number(1000n * (zT % BT) / BT), LT = Number(ST) + DT / 1e3;
      let xT;
      return xT = LT >= 100 ? Math.floor(LT).toString() : LT >= 10 ? LT.toFixed(1).replace(/\.0$/, "") : LT.toFixed(2).replace(/\.?0+$/, ""), `${kT}${xT}${FT}`
    }
    const kT = iT.map((TT => {
      let {
        threshold: oT,
        suffix: IT
      } = TT;
      return {
        threshold: Number(oT),
        suffix: IT
      }
    })).filter((TT => {
      let {
        threshold: oT
      } = TT;
      return Number.isFinite(oT)
    }));

    function WT(TT) {
      const oT = Math.abs(TT),
        IT = TT < 0 ? "-" : "";
      for (const {
          threshold: iT,
          suffix: zT
        }
        of kT)
        if (oT >= iT) {
          const TT = oT / iT;
          if (TT >= 1e3) return `${IT}${oT.toExponential(2).replace("e+","e")}`;
          let kT;
          return kT = TT >= 100 ? Math.floor(TT).toString() : TT >= 10 ? TT.toFixed(1).replace(/\.0$/, "") : TT.toFixed(2).replace(/\.?0+$/, ""), `${IT}${kT}${zT}`
        } return `${IT}${oT}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);