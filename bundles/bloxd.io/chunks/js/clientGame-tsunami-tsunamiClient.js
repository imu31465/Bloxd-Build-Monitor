export const id = 26;
export const ids = [26];
export const modules = {
  39666: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => nT
    });
    var WT = mT(34298);
    const zT = 1e3 / 3;

    function MT(TT, UT, mT) {
      if ("parenthetical-seconds" === UT) return ` (${TT}s)`;
      const WT = `${Math.floor(TT/60)}:${(TT%60).toString().padStart(2,"0")}`;
      return mT ? `${mT}${WT}` : WT
    }

    function gT(TT, UT, mT, zT, MT) {
      var gT;
      const nT = {
        ...zT.baseNametag
      };
      nT.content = [...null !== (gT = zT.baseNametag.content) && void 0 !== gT ? gT : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,WT.d)(MT)}`
      }], TT.setOtherEntitySetting(UT, mT, "nameTagInfo", nT)
    }
    const nT = function(TT, UT, mT, WT) {
      let nT, {
        localPlayerId: HT
      } = WT;
      const kT = new Map,
        jT = new Map;
      let lT = 0,
        LT = 0;
      return {
        onCreate: TT => {
          nT = TT
        },
        Cl: TT => {
          const UT = Date.now();
          for (const [WT, zT] of kT) {
            const TT = Math.floor((UT - zT.startTime) / 1e3),
              gT = Math.max(0, zT.remainingSeconds - TT);
            if (gT === zT.lastRenderedSecond) continue;
            zT.lastRenderedSecond = gT;
            const jT = {
                str: MT(gT, zT.format, zT.prefix),
                style: zT.style
              },
              lT = {
                ...zT.baseNametag
              };
            var mT;
            if ("content" === zT.location) lT.content = [...null !== (mT = zT.baseNametag.content) && void 0 !== mT ? mT : [], jT];
            else lT.subtitle = [jT];
            nT.setOtherEntitySetting(HT, WT, "nameTagInfo", lT), gT <= 0 && kT.delete(WT)
          }
          if (jT.size > 0 && UT - lT >= zT) {
            lT = UT, LT = (LT + 1) % 3;
            let TT = 0;
            for (const [mT, WT] of jT) {
              if (TT++ % 3 !== LT) continue;
              const zT = Math.floor((UT - WT.startTime) / 1e3);
              if (zT === WT.lastRenderedSecond) continue;
              WT.lastRenderedSecond = zT;
              const MT = WT.accumulatedIncome + WT.incomePerSecond * BigInt(zT);
              gT(nT, HT, mT, WT, MT)
            }
          }
        },
        onReceivedMessageFromServer: (TT, UT) => {
          if ("startCountdown" === TT) kT.set(UT.eId, {
            baseNametag: UT.baseNametag,
            remainingSeconds: UT.remainingSeconds,
            startTime: Date.now(),
            format: UT.format,
            location: UT.location,
            prefix: UT.prefix,
            style: UT.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === TT) kT.delete(UT.eId);
          else if ("startIncomeTicking" === TT) {
            const TT = {
              baseNametag: UT.baseNametag,
              accumulatedIncome: BigInt(UT.accumulatedIncome),
              incomePerSecond: BigInt(UT.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            jT.set(UT.eId, TT), gT(nT, HT, UT.eId, TT, TT.accumulatedIncome)
          } else "stopIncomeTicking" === TT && jT.delete(UT.eId) && nT.setOtherEntitySetting(HT, UT.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (TT, UT, mT, WT, zT, MT) => {
          if (MT && "Mesh" === nT.getEntityType(MT)) {
            const UT = nT.getEntityName(MT);
            "Upgrades" === UT ? nT.openShop(TT, !1, "Upgrades") : "Items" === UT ? nT.openShop(TT, !1, "Items") : "Prestige" === UT ? nT.openShop(TT, !1, "Prestige") : "Collections" === UT ? nT.openShop(TT, !1, "Collections") : "Base Skins" === UT ? nT.openShop(TT, !1, "Base Skins") : "Gauntlet" === UT ? nT.openShop(TT, !1, "Gauntlet") : "Diamond Shop" === UT && nT.openShop(TT, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34298: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      h: () => gT
    });
    const WT = [{
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
      let UT, mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof TT) {
        if (!Number.isFinite(TT)) return "0";
        if (Math.abs(TT) < 100) {
          const UT = TT < 0 ? "-" : "",
            mT = Math.abs(TT);
          return mT >= 10 ? `${UT}${mT.toFixed(1).replace(/\.0$/,"")}` : `${UT}${mT.toFixed(2).replace(/\.?0+$/,"")}`
        }
        UT = BigInt(Math.floor(TT))
      } else UT = TT;
      const zT = UT < 0n ? -UT : UT,
        MT = UT < 0n ? "-" : "",
        gT = zT.toString();
      if (gT.length <= mT) return `${MT}${gT}`;
      const nT = 3 * Math.floor((gT.length - 1) / 3);
      if (nT < 3) return `${MT}${gT}`;
      if (nT > 3 * WT.length) {
        const TT = gT[0],
          UT = gT.slice(1, 3).replace(/0+$/, "");
        return `${MT}${UT?`${TT}.${UT}`:TT}e${gT.length-1}`
      }
      const {
        threshold: HT,
        suffix: kT
      } = WT[WT.length - nT / 3], jT = zT / HT, lT = Number(1000n * (zT % HT) / HT), LT = Number(jT) + lT / 1e3;
      let pT;
      return pT = LT >= 100 ? Math.floor(LT).toString() : LT >= 10 ? LT.toFixed(1).replace(/\.0$/, "") : LT.toFixed(2).replace(/\.?0+$/, ""), `${MT}${pT}${kT}`
    }
    const MT = WT.map((TT => {
      let {
        threshold: UT,
        suffix: mT
      } = TT;
      return {
        threshold: Number(UT),
        suffix: mT
      }
    })).filter((TT => {
      let {
        threshold: UT
      } = TT;
      return Number.isFinite(UT)
    }));

    function gT(TT) {
      const UT = Math.abs(TT),
        mT = TT < 0 ? "-" : "";
      for (const {
          threshold: WT,
          suffix: zT
        }
        of MT)
        if (UT >= WT) {
          const TT = UT / WT;
          if (TT >= 1e3) return `${mT}${UT.toExponential(2).replace("e+","e")}`;
          let MT;
          return MT = TT >= 100 ? Math.floor(TT).toString() : TT >= 10 ? TT.toFixed(1).replace(/\.0$/, "") : TT.toFixed(2).replace(/\.?0+$/, ""), `${mT}${MT}${zT}`
        } return `${mT}${UT}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);