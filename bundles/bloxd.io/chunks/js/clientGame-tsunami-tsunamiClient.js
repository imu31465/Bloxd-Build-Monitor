export const id = 26;
export const ids = [26];
export const modules = {
  38457: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => JB
    });
    var VB = dB(8594);
    const yB = 1e3 / 3;

    function pB(BB, TB, dB) {
      if ("parenthetical-seconds" === TB) return ` (${BB}s)`;
      const VB = `${Math.floor(BB/60)}:${(BB%60).toString().padStart(2,"0")}`;
      return dB ? `${dB}${VB}` : VB
    }

    function lB(BB, TB, dB, yB, pB) {
      var lB;
      const JB = {
        ...yB.baseNametag
      };
      JB.content = [...null !== (lB = yB.baseNametag.content) && void 0 !== lB ? lB : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,VB.b)(pB)}`
      }], BB.setOtherEntitySetting(TB, dB, "nameTagInfo", JB)
    }
    const JB = function(BB, TB, dB, VB) {
      let JB, {
        localPlayerId: YB
      } = VB;
      const gB = new Map,
        oB = new Map;
      let kB = 0,
        LB = 0;
      return {
        onCreate: BB => {
          JB = BB
        },
        dL: BB => {
          const TB = Date.now();
          for (const [VB, yB] of gB) {
            const BB = Math.floor((TB - yB.startTime) / 1e3),
              lB = Math.max(0, yB.remainingSeconds - BB);
            if (lB === yB.lastRenderedSecond) continue;
            yB.lastRenderedSecond = lB;
            const oB = {
                str: pB(lB, yB.format, yB.prefix),
                style: yB.style
              },
              kB = {
                ...yB.baseNametag
              };
            var dB;
            if ("content" === yB.location) kB.content = [...null !== (dB = yB.baseNametag.content) && void 0 !== dB ? dB : [], oB];
            else kB.subtitle = [oB];
            JB.setOtherEntitySetting(YB, VB, "nameTagInfo", kB), lB <= 0 && gB.delete(VB)
          }
          if (oB.size > 0 && TB - kB >= yB) {
            kB = TB, LB = (LB + 1) % 3;
            let BB = 0;
            for (const [dB, VB] of oB) {
              if (BB++ % 3 !== LB) continue;
              const yB = Math.floor((TB - VB.startTime) / 1e3);
              if (yB === VB.lastRenderedSecond) continue;
              VB.lastRenderedSecond = yB;
              const pB = VB.accumulatedIncome + VB.incomePerSecond * BigInt(yB);
              lB(JB, YB, dB, VB, pB)
            }
          }
        },
        onReceivedMessageFromServer: (BB, TB) => {
          if ("startCountdown" === BB) gB.set(TB.eId, {
            baseNametag: TB.baseNametag,
            remainingSeconds: TB.remainingSeconds,
            startTime: Date.now(),
            format: TB.format,
            location: TB.location,
            prefix: TB.prefix,
            style: TB.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === BB) gB.delete(TB.eId);
          else if ("startIncomeTicking" === BB) {
            const BB = {
              baseNametag: TB.baseNametag,
              accumulatedIncome: BigInt(TB.accumulatedIncome),
              incomePerSecond: BigInt(TB.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            oB.set(TB.eId, BB), lB(JB, YB, TB.eId, BB, BB.accumulatedIncome)
          } else "stopIncomeTicking" === BB && oB.delete(TB.eId) && JB.setOtherEntitySetting(YB, TB.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (BB, TB, dB, VB, yB, pB) => {
          if (pB && "Mesh" === JB.getEntityType(pB)) {
            const TB = JB.getEntityName(pB);
            "Upgrades" === TB ? JB.openShop(BB, !1, "Upgrades") : "Items" === TB ? JB.openShop(BB, !1, "Items") : "Prestige" === TB ? JB.openShop(BB, !1, "Prestige") : "Collections" === TB ? JB.openShop(BB, !1, "Collections") : "Base Skins" === TB ? JB.openShop(BB, !1, "Base Skins") : "Gauntlet" === TB ? JB.openShop(BB, !1, "Gauntlet") : "Diamond Shop" === TB && JB.openShop(BB, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  8594: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      c: () => lB
    });
    const VB = [{
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

    function yB(BB) {
      let TB, dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof BB) {
        if (!Number.isFinite(BB)) return "0";
        if (Math.abs(BB) < 100) {
          const TB = BB < 0 ? "-" : "",
            dB = Math.abs(BB);
          return dB >= 10 ? `${TB}${dB.toFixed(1).replace(/\.0$/,"")}` : `${TB}${dB.toFixed(2).replace(/\.?0+$/,"")}`
        }
        TB = BigInt(Math.floor(BB))
      } else TB = BB;
      const yB = TB < 0n ? -TB : TB,
        pB = TB < 0n ? "-" : "",
        lB = yB.toString();
      if (lB.length <= dB) return `${pB}${lB}`;
      const JB = 3 * Math.floor((lB.length - 1) / 3);
      if (JB < 3) return `${pB}${lB}`;
      if (JB > 3 * VB.length) {
        const BB = lB[0],
          TB = lB.slice(1, 3).replace(/0+$/, "");
        return `${pB}${TB?`${BB}.${TB}`:BB}e${lB.length-1}`
      }
      const {
        threshold: YB,
        suffix: gB
      } = VB[VB.length - JB / 3], oB = yB / YB, kB = Number(1000n * (yB % YB) / YB), LB = Number(oB) + kB / 1e3;
      let OB;
      return OB = LB >= 100 ? Math.floor(LB).toString() : LB >= 10 ? LB.toFixed(1).replace(/\.0$/, "") : LB.toFixed(2).replace(/\.?0+$/, ""), `${pB}${OB}${gB}`
    }
    const pB = VB.map((BB => {
      let {
        threshold: TB,
        suffix: dB
      } = BB;
      return {
        threshold: Number(TB),
        suffix: dB
      }
    })).filter((BB => {
      let {
        threshold: TB
      } = BB;
      return Number.isFinite(TB)
    }));

    function lB(BB) {
      const TB = Math.abs(BB),
        dB = BB < 0 ? "-" : "";
      for (const {
          threshold: VB,
          suffix: yB
        }
        of pB)
        if (TB >= VB) {
          const BB = TB / VB;
          if (BB >= 1e3) return `${dB}${TB.toExponential(2).replace("e+","e")}`;
          let pB;
          return pB = BB >= 100 ? Math.floor(BB).toString() : BB >= 10 ? BB.toFixed(1).replace(/\.0$/, "") : BB.toFixed(2).replace(/\.?0+$/, ""), `${dB}${pB}${yB}`
        } return `${dB}${TB}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);