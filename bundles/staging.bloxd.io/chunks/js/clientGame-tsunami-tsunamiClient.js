export const id = 32;
export const ids = [32];
export const modules = {
  40898: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => qR
    });
    var yR = GR(35174);
    const tR = 1e3 / 3;

    function uR(RR, JR, GR) {
      if ("parenthetical-seconds" === JR) return ` (${RR}s)`;
      const yR = `${Math.floor(RR/60)}:${(RR%60).toString().padStart(2,"0")}`;
      return GR ? `${GR}${yR}` : yR
    }

    function ZR(RR, JR, GR, tR, uR) {
      var ZR;
      const qR = {
        ...tR.baseNametag
      };
      qR.content = [...null !== (ZR = tR.baseNametag.content) && void 0 !== ZR ? ZR : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,yR.e)(uR)}`
      }], RR.setOtherEntitySetting(JR, GR, "nameTagInfo", qR)
    }
    const qR = function(RR, JR, GR, yR) {
      let qR, {
        localPlayerId: iR
      } = yR;
      const fR = new Map,
        VR = new Map;
      let KR = 0,
        wR = 0;
      return {
        onCreate: RR => {
          qR = RR
        },
        gK: RR => {
          const JR = Date.now();
          for (const [yR, tR] of fR) {
            const RR = Math.floor((JR - tR.startTime) / 1e3),
              ZR = Math.max(0, tR.remainingSeconds - RR);
            if (ZR === tR.lastRenderedSecond) continue;
            tR.lastRenderedSecond = ZR;
            const VR = {
                str: uR(ZR, tR.format, tR.prefix),
                style: tR.style
              },
              KR = {
                ...tR.baseNametag
              };
            var GR;
            if ("content" === tR.location) KR.content = [...null !== (GR = tR.baseNametag.content) && void 0 !== GR ? GR : [], VR];
            else KR.subtitle = [VR];
            qR.setOtherEntitySetting(iR, yR, "nameTagInfo", KR), ZR <= 0 && fR.delete(yR)
          }
          if (VR.size > 0 && JR - KR >= tR) {
            KR = JR, wR = (wR + 1) % 3;
            let RR = 0;
            for (const [GR, yR] of VR) {
              if (RR++ % 3 !== wR) continue;
              const tR = Math.floor((JR - yR.startTime) / 1e3);
              if (tR === yR.lastRenderedSecond) continue;
              yR.lastRenderedSecond = tR;
              const uR = yR.accumulatedIncome + yR.incomePerSecond * BigInt(tR);
              ZR(qR, iR, GR, yR, uR)
            }
          }
        },
        onReceivedMessageFromServer: (RR, JR) => {
          if ("startCountdown" === RR) fR.set(JR.eId, {
            baseNametag: JR.baseNametag,
            remainingSeconds: JR.remainingSeconds,
            startTime: Date.now(),
            format: JR.format,
            location: JR.location,
            prefix: JR.prefix,
            style: JR.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === RR) fR.delete(JR.eId);
          else if ("startIncomeTicking" === RR) {
            const RR = {
              baseNametag: JR.baseNametag,
              accumulatedIncome: BigInt(JR.accumulatedIncome),
              incomePerSecond: BigInt(JR.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            VR.set(JR.eId, RR), ZR(qR, iR, JR.eId, RR, RR.accumulatedIncome)
          } else "stopIncomeTicking" === RR && VR.delete(JR.eId) && qR.setOtherEntitySetting(iR, JR.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (RR, JR, GR, yR, tR, uR) => {
          if (uR && "Mesh" === qR.getEntityType(uR)) {
            const JR = qR.getEntityName(uR);
            "Upgrades" === JR ? qR.openShop(RR, !1, "Upgrades") : "Items" === JR ? qR.openShop(RR, !1, "Items") : "Prestige" === JR ? qR.openShop(RR, !1, "Prestige") : "Collections" === JR ? qR.openShop(RR, !1, "Collections") : "Base Skins" === JR ? qR.openShop(RR, !1, "Base Skins") : "Gauntlet" === JR ? qR.openShop(RR, !1, "Gauntlet") : "Diamond Shop" === JR && qR.openShop(RR, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  35174: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      i: () => ZR
    });
    const yR = [{
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

    function tR(RR) {
      let JR, GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof RR) {
        if (!Number.isFinite(RR)) return "0";
        if (Math.abs(RR) < 100) {
          const JR = RR < 0 ? "-" : "",
            GR = Math.abs(RR);
          return GR >= 10 ? `${JR}${GR.toFixed(1).replace(/\.0$/,"")}` : `${JR}${GR.toFixed(2).replace(/\.?0+$/,"")}`
        }
        JR = BigInt(Math.floor(RR))
      } else JR = RR;
      const tR = JR < 0n ? -JR : JR,
        uR = JR < 0n ? "-" : "",
        ZR = tR.toString();
      if (ZR.length <= GR) return `${uR}${ZR}`;
      const qR = 3 * Math.floor((ZR.length - 1) / 3);
      if (qR < 3) return `${uR}${ZR}`;
      if (qR > 3 * yR.length) {
        const RR = ZR[0],
          JR = ZR.slice(1, 3).replace(/0+$/, "");
        return `${uR}${JR?`${RR}.${JR}`:RR}e${ZR.length-1}`
      }
      const {
        threshold: iR,
        suffix: fR
      } = yR[yR.length - qR / 3], VR = tR / iR, KR = Number(1000n * (tR % iR) / iR), wR = Number(VR) + KR / 1e3;
      let rR;
      return rR = wR >= 100 ? Math.floor(wR).toString() : wR >= 10 ? wR.toFixed(1).replace(/\.0$/, "") : wR.toFixed(2).replace(/\.?0+$/, ""), `${uR}${rR}${fR}`
    }
    const uR = yR.map((RR => {
      let {
        threshold: JR,
        suffix: GR
      } = RR;
      return {
        threshold: Number(JR),
        suffix: GR
      }
    })).filter((RR => {
      let {
        threshold: JR
      } = RR;
      return Number.isFinite(JR)
    }));

    function ZR(RR) {
      const JR = Math.abs(RR),
        GR = RR < 0 ? "-" : "";
      for (const {
          threshold: yR,
          suffix: tR
        }
        of uR)
        if (JR >= yR) {
          const RR = JR / yR;
          if (RR >= 1e3) return `${GR}${JR.toExponential(2).replace("e+","e")}`;
          let uR;
          return uR = RR >= 100 ? Math.floor(RR).toString() : RR >= 10 ? RR.toFixed(1).replace(/\.0$/, "") : RR.toFixed(2).replace(/\.?0+$/, ""), `${GR}${uR}${tR}`
        } return `${GR}${JR}`
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);