export const id = 26;
export const ids = [26];
export const modules = {
  39615: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => vB
    });
    var TB = ZB(34220);
    const JB = 1e3 / 3;

    function oB(BB, IB, ZB) {
      if ("parenthetical-seconds" === IB) return ` (${BB}s)`;
      const TB = `${Math.floor(BB/60)}:${(BB%60).toString().padStart(2,"0")}`;
      return ZB ? `${ZB}${TB}` : TB
    }

    function GB(BB, IB, ZB, JB, oB) {
      var GB;
      const vB = {
        ...JB.baseNametag
      };
      vB.content = [...null !== (GB = JB.baseNametag.content) && void 0 !== GB ? GB : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,TB.b)(oB)}`
      }], BB.setOtherEntitySetting(IB, ZB, "nameTagInfo", vB)
    }
    const vB = function(BB, IB, ZB, TB) {
      let vB, {
        localPlayerId: kB
      } = TB;
      const cB = new Map,
        nB = new Map;
      let hB = 0,
        zB = 0;
      return {
        onCreate: BB => {
          vB = BB
        },
        Iz: BB => {
          const IB = Date.now();
          for (const [TB, JB] of cB) {
            const BB = Math.floor((IB - JB.startTime) / 1e3),
              GB = Math.max(0, JB.remainingSeconds - BB);
            if (GB === JB.lastRenderedSecond) continue;
            JB.lastRenderedSecond = GB;
            const nB = {
                str: oB(GB, JB.format, JB.prefix),
                style: JB.style
              },
              hB = {
                ...JB.baseNametag
              };
            var ZB;
            if ("content" === JB.location) hB.content = [...null !== (ZB = JB.baseNametag.content) && void 0 !== ZB ? ZB : [], nB];
            else hB.subtitle = [nB];
            vB.setOtherEntitySetting(kB, TB, "nameTagInfo", hB), GB <= 0 && cB.delete(TB)
          }
          if (nB.size > 0 && IB - hB >= JB) {
            hB = IB, zB = (zB + 1) % 3;
            let BB = 0;
            for (const [ZB, TB] of nB) {
              if (BB++ % 3 !== zB) continue;
              const JB = Math.floor((IB - TB.startTime) / 1e3);
              if (JB === TB.lastRenderedSecond) continue;
              TB.lastRenderedSecond = JB;
              const oB = TB.accumulatedIncome + TB.incomePerSecond * BigInt(JB);
              GB(vB, kB, ZB, TB, oB)
            }
          }
        },
        onReceivedMessageFromServer: (BB, IB) => {
          if ("startCountdown" === BB) cB.set(IB.eId, {
            baseNametag: IB.baseNametag,
            remainingSeconds: IB.remainingSeconds,
            startTime: Date.now(),
            format: IB.format,
            location: IB.location,
            prefix: IB.prefix,
            style: IB.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === BB) cB.delete(IB.eId);
          else if ("startIncomeTicking" === BB) {
            const BB = {
              baseNametag: IB.baseNametag,
              accumulatedIncome: BigInt(IB.accumulatedIncome),
              incomePerSecond: BigInt(IB.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            nB.set(IB.eId, BB), GB(vB, kB, IB.eId, BB, BB.accumulatedIncome)
          } else "stopIncomeTicking" === BB && nB.delete(IB.eId) && vB.setOtherEntitySetting(kB, IB.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (BB, IB, ZB, TB, JB, oB) => {
          if (oB && "Mesh" === vB.getEntityType(oB)) {
            const IB = vB.getEntityName(oB);
            "Upgrades" === IB ? vB.openShop(BB, !1, "Upgrades") : "Items" === IB ? vB.openShop(BB, !1, "Items") : "Prestige" === IB ? vB.openShop(BB, !1, "Prestige") : "Collections" === IB ? vB.openShop(BB, !1, "Collections") : "Base Skins" === IB ? vB.openShop(BB, !1, "Base Skins") : "Gauntlet" === IB ? vB.openShop(BB, !1, "Gauntlet") : "Diamond Shop" === IB && vB.openShop(BB, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34220: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB,
      e: () => GB
    });
    const TB = [{
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

    function JB(BB) {
      let IB, ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof BB) {
        if (!Number.isFinite(BB)) return "0";
        if (Math.abs(BB) < 100) {
          const IB = BB < 0 ? "-" : "",
            ZB = Math.abs(BB);
          return ZB >= 10 ? `${IB}${ZB.toFixed(1).replace(/\.0$/,"")}` : `${IB}${ZB.toFixed(2).replace(/\.?0+$/,"")}`
        }
        IB = BigInt(Math.floor(BB))
      } else IB = BB;
      const JB = IB < 0n ? -IB : IB,
        oB = IB < 0n ? "-" : "",
        GB = JB.toString();
      if (GB.length <= ZB) return `${oB}${GB}`;
      const vB = 3 * Math.floor((GB.length - 1) / 3);
      if (vB < 3) return `${oB}${GB}`;
      if (vB > 3 * TB.length) {
        const BB = GB[0],
          IB = GB.slice(1, 3).replace(/0+$/, "");
        return `${oB}${IB?`${BB}.${IB}`:BB}e${GB.length-1}`
      }
      const {
        threshold: kB,
        suffix: cB
      } = TB[TB.length - vB / 3], nB = JB / kB, hB = Number(1000n * (JB % kB) / kB), zB = Number(nB) + hB / 1e3;
      let FB;
      return FB = zB >= 100 ? Math.floor(zB).toString() : zB >= 10 ? zB.toFixed(1).replace(/\.0$/, "") : zB.toFixed(2).replace(/\.?0+$/, ""), `${oB}${FB}${cB}`
    }
    const oB = TB.map((BB => {
      let {
        threshold: IB,
        suffix: ZB
      } = BB;
      return {
        threshold: Number(IB),
        suffix: ZB
      }
    })).filter((BB => {
      let {
        threshold: IB
      } = BB;
      return Number.isFinite(IB)
    }));

    function GB(BB) {
      const IB = Math.abs(BB),
        ZB = BB < 0 ? "-" : "";
      for (const {
          threshold: TB,
          suffix: JB
        }
        of oB)
        if (IB >= TB) {
          const BB = IB / TB;
          if (BB >= 1e3) return `${ZB}${IB.toExponential(2).replace("e+","e")}`;
          let oB;
          return oB = BB >= 100 ? Math.floor(BB).toString() : BB >= 10 ? BB.toFixed(1).replace(/\.0$/, "") : BB.toFixed(2).replace(/\.?0+$/, ""), `${ZB}${oB}${JB}`
        } return `${ZB}${IB}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);