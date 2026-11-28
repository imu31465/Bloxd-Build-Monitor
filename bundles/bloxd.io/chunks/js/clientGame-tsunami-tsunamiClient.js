export const id = 32;
export const ids = [32];
export const modules = {
  41259: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Kd
    });
    var Wd = md(35563);
    const Fd = 1e3 / 3;

    function Rd(dd, Od, md) {
      if ("parenthetical-seconds" === Od) return ` (${dd}s)`;
      const Wd = `${Math.floor(dd/60)}:${(dd%60).toString().padStart(2,"0")}`;
      return md ? `${md}${Wd}` : Wd
    }

    function Xd(dd, Od, md, Fd, Rd) {
      var Xd;
      const Kd = {
        ...Fd.baseNametag
      };
      Kd.content = [...null !== (Xd = Fd.baseNametag.content) && void 0 !== Xd ? Xd : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,Wd.d)(Rd)}`
      }], dd.setOtherEntitySetting(Od, md, "nameTagInfo", Kd)
    }
    const Kd = function(dd, Od, md, Wd) {
      let Kd, {
        localPlayerId: hd
      } = Wd;
      const vd = new Map,
        Qd = new Map;
      let td = 0,
        od = 0;
      return {
        onCreate: dd => {
          Kd = dd
        },
        Et: dd => {
          const Od = Date.now();
          for (const [Wd, Fd] of vd) {
            const dd = Math.floor((Od - Fd.startTime) / 1e3),
              Xd = Math.max(0, Fd.remainingSeconds - dd);
            if (Xd === Fd.lastRenderedSecond) continue;
            Fd.lastRenderedSecond = Xd;
            const Qd = {
                str: Rd(Xd, Fd.format, Fd.prefix),
                style: Fd.style
              },
              td = {
                ...Fd.baseNametag
              };
            var md;
            if ("content" === Fd.location) td.content = [...null !== (md = Fd.baseNametag.content) && void 0 !== md ? md : [], Qd];
            else td.subtitle = [Qd];
            Kd.setOtherEntitySetting(hd, Wd, "nameTagInfo", td), Xd <= 0 && vd.delete(Wd)
          }
          if (Qd.size > 0 && Od - td >= Fd) {
            td = Od, od = (od + 1) % 3;
            let dd = 0;
            for (const [md, Wd] of Qd) {
              if (dd++ % 3 !== od) continue;
              const Fd = Math.floor((Od - Wd.startTime) / 1e3);
              if (Fd === Wd.lastRenderedSecond) continue;
              Wd.lastRenderedSecond = Fd;
              const Rd = Wd.accumulatedIncome + Wd.incomePerSecond * BigInt(Fd);
              Xd(Kd, hd, md, Wd, Rd)
            }
          }
        },
        onReceivedMessageFromServer: (dd, Od) => {
          if ("startCountdown" === dd) vd.set(Od.eId, {
            baseNametag: Od.baseNametag,
            remainingSeconds: Od.remainingSeconds,
            startTime: Date.now(),
            format: Od.format,
            location: Od.location,
            prefix: Od.prefix,
            style: Od.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === dd) vd.delete(Od.eId);
          else if ("startIncomeTicking" === dd) {
            const dd = {
              baseNametag: Od.baseNametag,
              accumulatedIncome: BigInt(Od.accumulatedIncome),
              incomePerSecond: BigInt(Od.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            Qd.set(Od.eId, dd), Xd(Kd, hd, Od.eId, dd, dd.accumulatedIncome)
          } else "stopIncomeTicking" === dd && Qd.delete(Od.eId) && Kd.setOtherEntitySetting(hd, Od.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (dd, Od, md, Wd, Fd, Rd) => {
          if (Rd && "Mesh" === Kd.getEntityType(Rd)) {
            const Od = Kd.getEntityName(Rd);
            "Upgrades" === Od ? Kd.openShop(dd, !1, "Upgrades") : "Items" === Od ? Kd.openShop(dd, !1, "Items") : "Prestige" === Od ? Kd.openShop(dd, !1, "Prestige") : "Collections" === Od ? Kd.openShop(dd, !1, "Collections") : "Base Skins" === Od ? Kd.openShop(dd, !1, "Base Skins") : "Gauntlet" === Od ? Kd.openShop(dd, !1, "Gauntlet") : "Diamond Shop" === Od && Kd.openShop(dd, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  35563: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd,
      g: () => Xd
    });
    const Wd = [{
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

    function Fd(dd) {
      let Od, md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof dd) {
        if (!Number.isFinite(dd)) return "0";
        if (Math.abs(dd) < 100) {
          const Od = dd < 0 ? "-" : "",
            md = Math.abs(dd);
          return md >= 10 ? `${Od}${md.toFixed(1).replace(/\.0$/,"")}` : `${Od}${md.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Od = BigInt(Math.floor(dd))
      } else Od = dd;
      const Fd = Od < 0n ? -Od : Od,
        Rd = Od < 0n ? "-" : "",
        Xd = Fd.toString();
      if (Xd.length <= md) return `${Rd}${Xd}`;
      const Kd = 3 * Math.floor((Xd.length - 1) / 3);
      if (Kd < 3) return `${Rd}${Xd}`;
      if (Kd > 3 * Wd.length) {
        const dd = Xd[0],
          Od = Xd.slice(1, 3).replace(/0+$/, "");
        return `${Rd}${Od?`${dd}.${Od}`:dd}e${Xd.length-1}`
      }
      const {
        threshold: hd,
        suffix: vd
      } = Wd[Wd.length - Kd / 3], Qd = Fd / hd, td = Number(1000n * (Fd % hd) / hd), od = Number(Qd) + td / 1e3;
      let Nd;
      return Nd = od >= 100 ? Math.floor(od).toString() : od >= 10 ? od.toFixed(1).replace(/\.0$/, "") : od.toFixed(2).replace(/\.?0+$/, ""), `${Rd}${Nd}${vd}`
    }
    const Rd = Wd.map((dd => {
      let {
        threshold: Od,
        suffix: md
      } = dd;
      return {
        threshold: Number(Od),
        suffix: md
      }
    })).filter((dd => {
      let {
        threshold: Od
      } = dd;
      return Number.isFinite(Od)
    }));

    function Xd(dd) {
      const Od = Math.abs(dd),
        md = dd < 0 ? "-" : "";
      for (const {
          threshold: Wd,
          suffix: Fd
        }
        of Rd)
        if (Od >= Wd) {
          const dd = Od / Wd;
          if (dd >= 1e3) return `${md}${Od.toExponential(2).replace("e+","e")}`;
          let Rd;
          return Rd = dd >= 100 ? Math.floor(dd).toString() : dd >= 10 ? dd.toFixed(1).replace(/\.0$/, "") : dd.toFixed(2).replace(/\.?0+$/, ""), `${md}${Rd}${Fd}`
        } return `${md}${Od}`
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);