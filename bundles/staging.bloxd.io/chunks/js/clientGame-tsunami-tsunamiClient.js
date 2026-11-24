export const id = 26;
export const ids = [26];
export const modules = {
  39588: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => NS
    });
    var tS = gS(34256);
    const bS = 1e3 / 3;

    function XS(SS, HS, gS) {
      if ("parenthetical-seconds" === HS) return ` (${SS}s)`;
      const tS = `${Math.floor(SS/60)}:${(SS%60).toString().padStart(2,"0")}`;
      return gS ? `${gS}${tS}` : tS
    }

    function xS(SS, HS, gS, bS, XS) {
      var xS;
      const NS = {
        ...bS.baseNametag
      };
      NS.content = [...null !== (xS = bS.baseNametag.content) && void 0 !== xS ? xS : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,tS.e)(XS)}`
      }], SS.setOtherEntitySetting(HS, gS, "nameTagInfo", NS)
    }
    const NS = function(SS, HS, gS, tS) {
      let NS, {
        localPlayerId: qS
      } = tS;
      const uS = new Map,
        IS = new Map;
      let fS = 0,
        kS = 0;
      return {
        onCreate: SS => {
          NS = SS
        },
        mf: SS => {
          const HS = Date.now();
          for (const [tS, bS] of uS) {
            const SS = Math.floor((HS - bS.startTime) / 1e3),
              xS = Math.max(0, bS.remainingSeconds - SS);
            if (xS === bS.lastRenderedSecond) continue;
            bS.lastRenderedSecond = xS;
            const IS = {
                str: XS(xS, bS.format, bS.prefix),
                style: bS.style
              },
              fS = {
                ...bS.baseNametag
              };
            var gS;
            if ("content" === bS.location) fS.content = [...null !== (gS = bS.baseNametag.content) && void 0 !== gS ? gS : [], IS];
            else fS.subtitle = [IS];
            NS.setOtherEntitySetting(qS, tS, "nameTagInfo", fS), xS <= 0 && uS.delete(tS)
          }
          if (IS.size > 0 && HS - fS >= bS) {
            fS = HS, kS = (kS + 1) % 3;
            let SS = 0;
            for (const [gS, tS] of IS) {
              if (SS++ % 3 !== kS) continue;
              const bS = Math.floor((HS - tS.startTime) / 1e3);
              if (bS === tS.lastRenderedSecond) continue;
              tS.lastRenderedSecond = bS;
              const XS = tS.accumulatedIncome + tS.incomePerSecond * BigInt(bS);
              xS(NS, qS, gS, tS, XS)
            }
          }
        },
        onReceivedMessageFromServer: (SS, HS) => {
          if ("startCountdown" === SS) uS.set(HS.eId, {
            baseNametag: HS.baseNametag,
            remainingSeconds: HS.remainingSeconds,
            startTime: Date.now(),
            format: HS.format,
            location: HS.location,
            prefix: HS.prefix,
            style: HS.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === SS) uS.delete(HS.eId);
          else if ("startIncomeTicking" === SS) {
            const SS = {
              baseNametag: HS.baseNametag,
              accumulatedIncome: BigInt(HS.accumulatedIncome),
              incomePerSecond: BigInt(HS.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            IS.set(HS.eId, SS), xS(NS, qS, HS.eId, SS, SS.accumulatedIncome)
          } else "stopIncomeTicking" === SS && IS.delete(HS.eId) && NS.setOtherEntitySetting(qS, HS.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (SS, HS, gS, tS, bS, XS) => {
          if (XS && "Mesh" === NS.getEntityType(XS)) {
            const HS = NS.getEntityName(XS);
            "Upgrades" === HS ? NS.openShop(SS, !1, "Upgrades") : "Items" === HS ? NS.openShop(SS, !1, "Items") : "Prestige" === HS ? NS.openShop(SS, !1, "Prestige") : "Collections" === HS ? NS.openShop(SS, !1, "Collections") : "Base Skins" === HS ? NS.openShop(SS, !1, "Base Skins") : "Gauntlet" === HS ? NS.openShop(SS, !1, "Gauntlet") : "Diamond Shop" === HS && NS.openShop(SS, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34256: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS,
      f: () => xS
    });
    const tS = [{
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

    function bS(SS) {
      let HS, gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof SS) {
        if (!Number.isFinite(SS)) return "0";
        if (Math.abs(SS) < 100) {
          const HS = SS < 0 ? "-" : "",
            gS = Math.abs(SS);
          return gS >= 10 ? `${HS}${gS.toFixed(1).replace(/\.0$/,"")}` : `${HS}${gS.toFixed(2).replace(/\.?0+$/,"")}`
        }
        HS = BigInt(Math.floor(SS))
      } else HS = SS;
      const bS = HS < 0n ? -HS : HS,
        XS = HS < 0n ? "-" : "",
        xS = bS.toString();
      if (xS.length <= gS) return `${XS}${xS}`;
      const NS = 3 * Math.floor((xS.length - 1) / 3);
      if (NS < 3) return `${XS}${xS}`;
      if (NS > 3 * tS.length) {
        const SS = xS[0],
          HS = xS.slice(1, 3).replace(/0+$/, "");
        return `${XS}${HS?`${SS}.${HS}`:SS}e${xS.length-1}`
      }
      const {
        threshold: qS,
        suffix: uS
      } = tS[tS.length - NS / 3], IS = bS / qS, fS = Number(1000n * (bS % qS) / qS), kS = Number(IS) + fS / 1e3;
      let aS;
      return aS = kS >= 100 ? Math.floor(kS).toString() : kS >= 10 ? kS.toFixed(1).replace(/\.0$/, "") : kS.toFixed(2).replace(/\.?0+$/, ""), `${XS}${aS}${uS}`
    }
    const XS = tS.map((SS => {
      let {
        threshold: HS,
        suffix: gS
      } = SS;
      return {
        threshold: Number(HS),
        suffix: gS
      }
    })).filter((SS => {
      let {
        threshold: HS
      } = SS;
      return Number.isFinite(HS)
    }));

    function xS(SS) {
      const HS = Math.abs(SS),
        gS = SS < 0 ? "-" : "";
      for (const {
          threshold: tS,
          suffix: bS
        }
        of XS)
        if (HS >= tS) {
          const SS = HS / tS;
          if (SS >= 1e3) return `${gS}${HS.toExponential(2).replace("e+","e")}`;
          let XS;
          return XS = SS >= 100 ? Math.floor(SS).toString() : SS >= 10 ? SS.toFixed(1).replace(/\.0$/, "") : SS.toFixed(2).replace(/\.?0+$/, ""), `${gS}${XS}${bS}`
        } return `${gS}${HS}`
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);