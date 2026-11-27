export const id = 31;
export const ids = [31];
export const modules = {
  40439: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => Ue
    });
    var ye = He(34905);
    const be = 1e3 / 3;

    function Me(ee, ie, He) {
      if ("parenthetical-seconds" === ie) return ` (${ee}s)`;
      const ye = `${Math.floor(ee/60)}:${(ee%60).toString().padStart(2,"0")}`;
      return He ? `${He}${ye}` : ye
    }

    function Ke(ee, ie, He, be, Me) {
      var Ke;
      const Ue = {
        ...be.baseNametag
      };
      Ue.content = [...null !== (Ke = be.baseNametag.content) && void 0 !== Ke ? Ke : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,ye.d)(Me)}`
      }], ee.setOtherEntitySetting(ie, He, "nameTagInfo", Ue)
    }
    const Ue = function(ee, ie, He, ye) {
      let Ue, {
        localPlayerId: Fe
      } = ye;
      const Je = new Map,
        oe = new Map;
      let Re = 0,
        ke = 0;
      return {
        onCreate: ee => {
          Ue = ee
        },
        YR: ee => {
          const ie = Date.now();
          for (const [ye, be] of Je) {
            const ee = Math.floor((ie - be.startTime) / 1e3),
              Ke = Math.max(0, be.remainingSeconds - ee);
            if (Ke === be.lastRenderedSecond) continue;
            be.lastRenderedSecond = Ke;
            const oe = {
                str: Me(Ke, be.format, be.prefix),
                style: be.style
              },
              Re = {
                ...be.baseNametag
              };
            var He;
            if ("content" === be.location) Re.content = [...null !== (He = be.baseNametag.content) && void 0 !== He ? He : [], oe];
            else Re.subtitle = [oe];
            Ue.setOtherEntitySetting(Fe, ye, "nameTagInfo", Re), Ke <= 0 && Je.delete(ye)
          }
          if (oe.size > 0 && ie - Re >= be) {
            Re = ie, ke = (ke + 1) % 3;
            let ee = 0;
            for (const [He, ye] of oe) {
              if (ee++ % 3 !== ke) continue;
              const be = Math.floor((ie - ye.startTime) / 1e3);
              if (be === ye.lastRenderedSecond) continue;
              ye.lastRenderedSecond = be;
              const Me = ye.accumulatedIncome + ye.incomePerSecond * BigInt(be);
              Ke(Ue, Fe, He, ye, Me)
            }
          }
        },
        onReceivedMessageFromServer: (ee, ie) => {
          if ("startCountdown" === ee) Je.set(ie.eId, {
            baseNametag: ie.baseNametag,
            remainingSeconds: ie.remainingSeconds,
            startTime: Date.now(),
            format: ie.format,
            location: ie.location,
            prefix: ie.prefix,
            style: ie.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === ee) Je.delete(ie.eId);
          else if ("startIncomeTicking" === ee) {
            const ee = {
              baseNametag: ie.baseNametag,
              accumulatedIncome: BigInt(ie.accumulatedIncome),
              incomePerSecond: BigInt(ie.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            oe.set(ie.eId, ee), Ke(Ue, Fe, ie.eId, ee, ee.accumulatedIncome)
          } else "stopIncomeTicking" === ee && oe.delete(ie.eId) && Ue.setOtherEntitySetting(Fe, ie.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (ee, ie, He, ye, be, Me) => {
          if (Me && "Mesh" === Ue.getEntityType(Me)) {
            const ie = Ue.getEntityName(Me);
            "Upgrades" === ie ? Ue.openShop(ee, !1, "Upgrades") : "Items" === ie ? Ue.openShop(ee, !1, "Items") : "Prestige" === ie ? Ue.openShop(ee, !1, "Prestige") : "Collections" === ie ? Ue.openShop(ee, !1, "Collections") : "Base Skins" === ie ? Ue.openShop(ee, !1, "Base Skins") : "Gauntlet" === ie ? Ue.openShop(ee, !1, "Gauntlet") : "Diamond Shop" === ie && Ue.openShop(ee, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34905: (ee, ie, He) => {
    He.d(ie, {
      d: () => be,
      h: () => Ke
    });
    const ye = [{
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

    function be(ee) {
      let ie, He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof ee) {
        if (!Number.isFinite(ee)) return "0";
        if (Math.abs(ee) < 100) {
          const ie = ee < 0 ? "-" : "",
            He = Math.abs(ee);
          return He >= 10 ? `${ie}${He.toFixed(1).replace(/\.0$/,"")}` : `${ie}${He.toFixed(2).replace(/\.?0+$/,"")}`
        }
        ie = BigInt(Math.floor(ee))
      } else ie = ee;
      const be = ie < 0n ? -ie : ie,
        Me = ie < 0n ? "-" : "",
        Ke = be.toString();
      if (Ke.length <= He) return `${Me}${Ke}`;
      const Ue = 3 * Math.floor((Ke.length - 1) / 3);
      if (Ue < 3) return `${Me}${Ke}`;
      if (Ue > 3 * ye.length) {
        const ee = Ke[0],
          ie = Ke.slice(1, 3).replace(/0+$/, "");
        return `${Me}${ie?`${ee}.${ie}`:ee}e${Ke.length-1}`
      }
      const {
        threshold: Fe,
        suffix: Je
      } = ye[ye.length - Ue / 3], oe = be / Fe, Re = Number(1000n * (be % Fe) / Fe), ke = Number(oe) + Re / 1e3;
      let qe;
      return qe = ke >= 100 ? Math.floor(ke).toString() : ke >= 10 ? ke.toFixed(1).replace(/\.0$/, "") : ke.toFixed(2).replace(/\.?0+$/, ""), `${Me}${qe}${Je}`
    }
    const Me = ye.map((ee => {
      let {
        threshold: ie,
        suffix: He
      } = ee;
      return {
        threshold: Number(ie),
        suffix: He
      }
    })).filter((ee => {
      let {
        threshold: ie
      } = ee;
      return Number.isFinite(ie)
    }));

    function Ke(ee) {
      const ie = Math.abs(ee),
        He = ee < 0 ? "-" : "";
      for (const {
          threshold: ye,
          suffix: be
        }
        of Me)
        if (ie >= ye) {
          const ee = ie / ye;
          if (ee >= 1e3) return `${He}${ie.toExponential(2).replace("e+","e")}`;
          let Me;
          return Me = ee >= 100 ? Math.floor(ee).toString() : ee >= 10 ? ee.toFixed(1).replace(/\.0$/, "") : ee.toFixed(2).replace(/\.?0+$/, ""), `${He}${Me}${be}`
        } return `${He}${ie}`
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);