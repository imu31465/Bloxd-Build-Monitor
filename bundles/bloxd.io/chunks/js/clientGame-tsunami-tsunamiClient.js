export const id = 31;
export const ids = [31];
export const modules = {
  40837: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => pV
    });
    var JV = xV(35325);
    const YV = 1e3 / 3;

    function UV(VV, eV, xV) {
      if ("parenthetical-seconds" === eV) return ` (${VV}s)`;
      const JV = `${Math.floor(VV/60)}:${(VV%60).toString().padStart(2,"0")}`;
      return xV ? `${xV}${JV}` : JV
    }

    function yV(VV, eV, xV, YV, UV) {
      var yV;
      const pV = {
        ...YV.baseNametag
      };
      pV.content = [...null !== (yV = YV.baseNametag.content) && void 0 !== yV ? yV : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,JV.c)(UV)}`
      }], VV.setOtherEntitySetting(eV, xV, "nameTagInfo", pV)
    }
    const pV = function(VV, eV, xV, JV) {
      let pV, {
        localPlayerId: QV
      } = JV;
      const nV = new Map,
        wV = new Map;
      let ZV = 0,
        vV = 0;
      return {
        onCreate: VV => {
          pV = VV
        },
        iZ: VV => {
          const eV = Date.now();
          for (const [JV, YV] of nV) {
            const VV = Math.floor((eV - YV.startTime) / 1e3),
              yV = Math.max(0, YV.remainingSeconds - VV);
            if (yV === YV.lastRenderedSecond) continue;
            YV.lastRenderedSecond = yV;
            const wV = {
                str: UV(yV, YV.format, YV.prefix),
                style: YV.style
              },
              ZV = {
                ...YV.baseNametag
              };
            var xV;
            if ("content" === YV.location) ZV.content = [...null !== (xV = YV.baseNametag.content) && void 0 !== xV ? xV : [], wV];
            else ZV.subtitle = [wV];
            pV.setOtherEntitySetting(QV, JV, "nameTagInfo", ZV), yV <= 0 && nV.delete(JV)
          }
          if (wV.size > 0 && eV - ZV >= YV) {
            ZV = eV, vV = (vV + 1) % 3;
            let VV = 0;
            for (const [xV, JV] of wV) {
              if (VV++ % 3 !== vV) continue;
              const YV = Math.floor((eV - JV.startTime) / 1e3);
              if (YV === JV.lastRenderedSecond) continue;
              JV.lastRenderedSecond = YV;
              const UV = JV.accumulatedIncome + JV.incomePerSecond * BigInt(YV);
              yV(pV, QV, xV, JV, UV)
            }
          }
        },
        onReceivedMessageFromServer: (VV, eV) => {
          if ("startCountdown" === VV) nV.set(eV.eId, {
            baseNametag: eV.baseNametag,
            remainingSeconds: eV.remainingSeconds,
            startTime: Date.now(),
            format: eV.format,
            location: eV.location,
            prefix: eV.prefix,
            style: eV.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === VV) nV.delete(eV.eId);
          else if ("startIncomeTicking" === VV) {
            const VV = {
              baseNametag: eV.baseNametag,
              accumulatedIncome: BigInt(eV.accumulatedIncome),
              incomePerSecond: BigInt(eV.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            wV.set(eV.eId, VV), yV(pV, QV, eV.eId, VV, VV.accumulatedIncome)
          } else "stopIncomeTicking" === VV && wV.delete(eV.eId) && pV.setOtherEntitySetting(QV, eV.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (VV, eV, xV, JV, YV, UV) => {
          if (UV && "Mesh" === pV.getEntityType(UV)) {
            const eV = pV.getEntityName(UV);
            "Upgrades" === eV ? pV.openShop(VV, !1, "Upgrades") : "Items" === eV ? pV.openShop(VV, !1, "Items") : "Prestige" === eV ? pV.openShop(VV, !1, "Prestige") : "Collections" === eV ? pV.openShop(VV, !1, "Collections") : "Base Skins" === eV ? pV.openShop(VV, !1, "Base Skins") : "Gauntlet" === eV ? pV.openShop(VV, !1, "Gauntlet") : "Diamond Shop" === eV && pV.openShop(VV, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  35325: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV,
      d: () => yV
    });
    const JV = [{
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

    function YV(VV) {
      let eV, xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof VV) {
        if (!Number.isFinite(VV)) return "0";
        if (Math.abs(VV) < 100) {
          const eV = VV < 0 ? "-" : "",
            xV = Math.abs(VV);
          return xV >= 10 ? `${eV}${xV.toFixed(1).replace(/\.0$/,"")}` : `${eV}${xV.toFixed(2).replace(/\.?0+$/,"")}`
        }
        eV = BigInt(Math.floor(VV))
      } else eV = VV;
      const YV = eV < 0n ? -eV : eV,
        UV = eV < 0n ? "-" : "",
        yV = YV.toString();
      if (yV.length <= xV) return `${UV}${yV}`;
      const pV = 3 * Math.floor((yV.length - 1) / 3);
      if (pV < 3) return `${UV}${yV}`;
      if (pV > 3 * JV.length) {
        const VV = yV[0],
          eV = yV.slice(1, 3).replace(/0+$/, "");
        return `${UV}${eV?`${VV}.${eV}`:VV}e${yV.length-1}`
      }
      const {
        threshold: QV,
        suffix: nV
      } = JV[JV.length - pV / 3], wV = YV / QV, ZV = Number(1000n * (YV % QV) / QV), vV = Number(wV) + ZV / 1e3;
      let rV;
      return rV = vV >= 100 ? Math.floor(vV).toString() : vV >= 10 ? vV.toFixed(1).replace(/\.0$/, "") : vV.toFixed(2).replace(/\.?0+$/, ""), `${UV}${rV}${nV}`
    }
    const UV = JV.map((VV => {
      let {
        threshold: eV,
        suffix: xV
      } = VV;
      return {
        threshold: Number(eV),
        suffix: xV
      }
    })).filter((VV => {
      let {
        threshold: eV
      } = VV;
      return Number.isFinite(eV)
    }));

    function yV(VV) {
      const eV = Math.abs(VV),
        xV = VV < 0 ? "-" : "";
      for (const {
          threshold: JV,
          suffix: YV
        }
        of UV)
        if (eV >= JV) {
          const VV = eV / JV;
          if (VV >= 1e3) return `${xV}${eV.toExponential(2).replace("e+","e")}`;
          let UV;
          return UV = VV >= 100 ? Math.floor(VV).toString() : VV >= 10 ? VV.toFixed(1).replace(/\.0$/, "") : VV.toFixed(2).replace(/\.?0+$/, ""), `${xV}${UV}${YV}`
        } return `${xV}${eV}`
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);