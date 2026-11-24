export const id = 26;
export const ids = [26];
export const modules = {
  39630: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => NB
    });
    var QB = zB(34270);
    const nB = 1e3 / 3;

    function dB(BB, jB, zB) {
      if ("parenthetical-seconds" === jB) return ` (${BB}s)`;
      const QB = `${Math.floor(BB/60)}:${(BB%60).toString().padStart(2,"0")}`;
      return zB ? `${zB}${QB}` : QB
    }

    function IB(BB, jB, zB, nB, dB) {
      var IB;
      const NB = {
        ...nB.baseNametag
      };
      NB.content = [...null !== (IB = nB.baseNametag.content) && void 0 !== IB ? IB : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,QB.d)(dB)}`
      }], BB.setOtherEntitySetting(jB, zB, "nameTagInfo", NB)
    }
    const NB = function(BB, jB, zB, QB) {
      let NB, {
        localPlayerId: uB
      } = QB;
      const UB = new Map,
        aB = new Map;
      let pB = 0,
        rB = 0;
      return {
        onCreate: BB => {
          NB = BB
        },
        vp: BB => {
          const jB = Date.now();
          for (const [QB, nB] of UB) {
            const BB = Math.floor((jB - nB.startTime) / 1e3),
              IB = Math.max(0, nB.remainingSeconds - BB);
            if (IB === nB.lastRenderedSecond) continue;
            nB.lastRenderedSecond = IB;
            const aB = {
                str: dB(IB, nB.format, nB.prefix),
                style: nB.style
              },
              pB = {
                ...nB.baseNametag
              };
            var zB;
            if ("content" === nB.location) pB.content = [...null !== (zB = nB.baseNametag.content) && void 0 !== zB ? zB : [], aB];
            else pB.subtitle = [aB];
            NB.setOtherEntitySetting(uB, QB, "nameTagInfo", pB), IB <= 0 && UB.delete(QB)
          }
          if (aB.size > 0 && jB - pB >= nB) {
            pB = jB, rB = (rB + 1) % 3;
            let BB = 0;
            for (const [zB, QB] of aB) {
              if (BB++ % 3 !== rB) continue;
              const nB = Math.floor((jB - QB.startTime) / 1e3);
              if (nB === QB.lastRenderedSecond) continue;
              QB.lastRenderedSecond = nB;
              const dB = QB.accumulatedIncome + QB.incomePerSecond * BigInt(nB);
              IB(NB, uB, zB, QB, dB)
            }
          }
        },
        onReceivedMessageFromServer: (BB, jB) => {
          if ("startCountdown" === BB) UB.set(jB.eId, {
            baseNametag: jB.baseNametag,
            remainingSeconds: jB.remainingSeconds,
            startTime: Date.now(),
            format: jB.format,
            location: jB.location,
            prefix: jB.prefix,
            style: jB.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === BB) UB.delete(jB.eId);
          else if ("startIncomeTicking" === BB) {
            const BB = {
              baseNametag: jB.baseNametag,
              accumulatedIncome: BigInt(jB.accumulatedIncome),
              incomePerSecond: BigInt(jB.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            aB.set(jB.eId, BB), IB(NB, uB, jB.eId, BB, BB.accumulatedIncome)
          } else "stopIncomeTicking" === BB && aB.delete(jB.eId) && NB.setOtherEntitySetting(uB, jB.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (BB, jB, zB, QB, nB, dB) => {
          if (dB && "Mesh" === NB.getEntityType(dB)) {
            const jB = NB.getEntityName(dB);
            "Upgrades" === jB ? NB.openShop(BB, !1, "Upgrades") : "Items" === jB ? NB.openShop(BB, !1, "Items") : "Prestige" === jB ? NB.openShop(BB, !1, "Prestige") : "Collections" === jB ? NB.openShop(BB, !1, "Collections") : "Base Skins" === jB ? NB.openShop(BB, !1, "Base Skins") : "Gauntlet" === jB ? NB.openShop(BB, !1, "Gauntlet") : "Diamond Shop" === jB && NB.openShop(BB, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34270: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      g: () => IB
    });
    const QB = [{
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

    function nB(BB) {
      let jB, zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof BB) {
        if (!Number.isFinite(BB)) return "0";
        if (Math.abs(BB) < 100) {
          const jB = BB < 0 ? "-" : "",
            zB = Math.abs(BB);
          return zB >= 10 ? `${jB}${zB.toFixed(1).replace(/\.0$/,"")}` : `${jB}${zB.toFixed(2).replace(/\.?0+$/,"")}`
        }
        jB = BigInt(Math.floor(BB))
      } else jB = BB;
      const nB = jB < 0n ? -jB : jB,
        dB = jB < 0n ? "-" : "",
        IB = nB.toString();
      if (IB.length <= zB) return `${dB}${IB}`;
      const NB = 3 * Math.floor((IB.length - 1) / 3);
      if (NB < 3) return `${dB}${IB}`;
      if (NB > 3 * QB.length) {
        const BB = IB[0],
          jB = IB.slice(1, 3).replace(/0+$/, "");
        return `${dB}${jB?`${BB}.${jB}`:BB}e${IB.length-1}`
      }
      const {
        threshold: uB,
        suffix: UB
      } = QB[QB.length - NB / 3], aB = nB / uB, pB = Number(1000n * (nB % uB) / uB), rB = Number(aB) + pB / 1e3;
      let sB;
      return sB = rB >= 100 ? Math.floor(rB).toString() : rB >= 10 ? rB.toFixed(1).replace(/\.0$/, "") : rB.toFixed(2).replace(/\.?0+$/, ""), `${dB}${sB}${UB}`
    }
    const dB = QB.map((BB => {
      let {
        threshold: jB,
        suffix: zB
      } = BB;
      return {
        threshold: Number(jB),
        suffix: zB
      }
    })).filter((BB => {
      let {
        threshold: jB
      } = BB;
      return Number.isFinite(jB)
    }));

    function IB(BB) {
      const jB = Math.abs(BB),
        zB = BB < 0 ? "-" : "";
      for (const {
          threshold: QB,
          suffix: nB
        }
        of dB)
        if (jB >= QB) {
          const BB = jB / QB;
          if (BB >= 1e3) return `${zB}${jB.toExponential(2).replace("e+","e")}`;
          let dB;
          return dB = BB >= 100 ? Math.floor(BB).toString() : BB >= 10 ? BB.toFixed(1).replace(/\.0$/, "") : BB.toFixed(2).replace(/\.?0+$/, ""), `${zB}${dB}${nB}`
        } return `${zB}${jB}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);