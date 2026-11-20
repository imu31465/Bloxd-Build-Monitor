export const id = 26;
export const ids = [26];
export const modules = {
  39311: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => yT
    });
    var lT = cT(9388);
    const MT = 1e3 / 3;

    function KT(TT, kT, cT) {
      if ("parenthetical-seconds" === kT) return ` (${TT}s)`;
      const lT = `${Math.floor(TT/60)}:${(TT%60).toString().padStart(2,"0")}`;
      return cT ? `${cT}${lT}` : lT
    }

    function OT(TT, kT, cT, MT, KT) {
      var OT;
      const yT = {
        ...MT.baseNametag
      };
      yT.content = [...null !== (OT = MT.baseNametag.content) && void 0 !== OT ? OT : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,lT.c)(KT)}`
      }], TT.setOtherEntitySetting(kT, cT, "nameTagInfo", yT)
    }
    const yT = function(TT, kT, cT, lT) {
      let yT, {
        localPlayerId: fT
      } = lT;
      const xT = new Map,
        IT = new Map;
      let AT = 0,
        CT = 0;
      return {
        onCreate: TT => {
          yT = TT
        },
        UA: TT => {
          const kT = Date.now();
          for (const [lT, MT] of xT) {
            const TT = Math.floor((kT - MT.startTime) / 1e3),
              OT = Math.max(0, MT.remainingSeconds - TT);
            if (OT === MT.lastRenderedSecond) continue;
            MT.lastRenderedSecond = OT;
            const IT = {
                str: KT(OT, MT.format, MT.prefix),
                style: MT.style
              },
              AT = {
                ...MT.baseNametag
              };
            var cT;
            if ("content" === MT.location) AT.content = [...null !== (cT = MT.baseNametag.content) && void 0 !== cT ? cT : [], IT];
            else AT.subtitle = [IT];
            yT.setOtherEntitySetting(fT, lT, "nameTagInfo", AT), OT <= 0 && xT.delete(lT)
          }
          if (IT.size > 0 && kT - AT >= MT) {
            AT = kT, CT = (CT + 1) % 3;
            let TT = 0;
            for (const [cT, lT] of IT) {
              if (TT++ % 3 !== CT) continue;
              const MT = Math.floor((kT - lT.startTime) / 1e3);
              if (MT === lT.lastRenderedSecond) continue;
              lT.lastRenderedSecond = MT;
              const KT = lT.accumulatedIncome + lT.incomePerSecond * BigInt(MT);
              OT(yT, fT, cT, lT, KT)
            }
          }
        },
        onReceivedMessageFromServer: (TT, kT) => {
          if ("startCountdown" === TT) xT.set(kT.eId, {
            baseNametag: kT.baseNametag,
            remainingSeconds: kT.remainingSeconds,
            startTime: Date.now(),
            format: kT.format,
            location: kT.location,
            prefix: kT.prefix,
            style: kT.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === TT) xT.delete(kT.eId);
          else if ("startIncomeTicking" === TT) {
            const TT = {
              baseNametag: kT.baseNametag,
              accumulatedIncome: BigInt(kT.accumulatedIncome),
              incomePerSecond: BigInt(kT.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            IT.set(kT.eId, TT), OT(yT, fT, kT.eId, TT, TT.accumulatedIncome)
          } else "stopIncomeTicking" === TT && IT.delete(kT.eId) && yT.setOtherEntitySetting(fT, kT.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (TT, kT, cT, lT, MT, KT) => {
          if (KT && "Mesh" === yT.getEntityType(KT)) {
            const kT = yT.getEntityName(KT);
            "Upgrades" === kT ? yT.openShop(TT, !1, "Upgrades") : "Items" === kT ? yT.openShop(TT, !1, "Items") : "Prestige" === kT ? yT.openShop(TT, !1, "Prestige") : "Collections" === kT ? yT.openShop(TT, !1, "Collections") : "Base Skins" === kT ? yT.openShop(TT, !1, "Base Skins") : "Gauntlet" === kT ? yT.openShop(TT, !1, "Gauntlet") : "Diamond Shop" === kT && yT.openShop(TT, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  9388: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT,
      g: () => OT
    });
    const lT = [{
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

    function MT(TT) {
      let kT, cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof TT) {
        if (!Number.isFinite(TT)) return "0";
        if (Math.abs(TT) < 100) {
          const kT = TT < 0 ? "-" : "",
            cT = Math.abs(TT);
          return cT >= 10 ? `${kT}${cT.toFixed(1).replace(/\.0$/,"")}` : `${kT}${cT.toFixed(2).replace(/\.?0+$/,"")}`
        }
        kT = BigInt(Math.floor(TT))
      } else kT = TT;
      const MT = kT < 0n ? -kT : kT,
        KT = kT < 0n ? "-" : "",
        OT = MT.toString();
      if (OT.length <= cT) return `${KT}${OT}`;
      const yT = 3 * Math.floor((OT.length - 1) / 3);
      if (yT < 3) return `${KT}${OT}`;
      if (yT > 3 * lT.length) {
        const TT = OT[0],
          kT = OT.slice(1, 3).replace(/0+$/, "");
        return `${KT}${kT?`${TT}.${kT}`:TT}e${OT.length-1}`
      }
      const {
        threshold: fT,
        suffix: xT
      } = lT[lT.length - yT / 3], IT = MT / fT, AT = Number(1000n * (MT % fT) / fT), CT = Number(IT) + AT / 1e3;
      let jT;
      return jT = CT >= 100 ? Math.floor(CT).toString() : CT >= 10 ? CT.toFixed(1).replace(/\.0$/, "") : CT.toFixed(2).replace(/\.?0+$/, ""), `${KT}${jT}${xT}`
    }
    const KT = lT.map((TT => {
      let {
        threshold: kT,
        suffix: cT
      } = TT;
      return {
        threshold: Number(kT),
        suffix: cT
      }
    })).filter((TT => {
      let {
        threshold: kT
      } = TT;
      return Number.isFinite(kT)
    }));

    function OT(TT) {
      const kT = Math.abs(TT),
        cT = TT < 0 ? "-" : "";
      for (const {
          threshold: lT,
          suffix: MT
        }
        of KT)
        if (kT >= lT) {
          const TT = kT / lT;
          if (TT >= 1e3) return `${cT}${kT.toExponential(2).replace("e+","e")}`;
          let KT;
          return KT = TT >= 100 ? Math.floor(TT).toString() : TT >= 10 ? TT.toFixed(1).replace(/\.0$/, "") : TT.toFixed(2).replace(/\.?0+$/, ""), `${cT}${KT}${MT}`
        } return `${cT}${kT}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);