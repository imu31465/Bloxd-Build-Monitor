export const id = 26;
export const ids = [26];
export const modules = {
  38882: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => oz
    });
    var Fz = sz(8874);
    const Wz = 1e3 / 3;

    function Xz(zz, tz, sz) {
      if ("parenthetical-seconds" === tz) return ` (${zz}s)`;
      const Fz = `${Math.floor(zz/60)}:${(zz%60).toString().padStart(2,"0")}`;
      return sz ? `${sz}${Fz}` : Fz
    }

    function Oz(zz, tz, sz, Wz, Xz) {
      var Oz;
      const oz = {
        ...Wz.baseNametag
      };
      oz.content = [...null !== (Oz = Wz.baseNametag.content) && void 0 !== Oz ? Oz : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,Fz.e)(Xz)}`
      }], zz.setOtherEntitySetting(tz, sz, "nameTagInfo", oz)
    }
    const oz = function(zz, tz, sz, Fz) {
      let oz, {
        localPlayerId: vz
      } = Fz;
      const Uz = new Map,
        Kz = new Map;
      let uz = 0,
        Nz = 0;
      return {
        onCreate: zz => {
          oz = zz
        },
        wN: zz => {
          const tz = Date.now();
          for (const [Fz, Wz] of Uz) {
            const zz = Math.floor((tz - Wz.startTime) / 1e3),
              Oz = Math.max(0, Wz.remainingSeconds - zz);
            if (Oz === Wz.lastRenderedSecond) continue;
            Wz.lastRenderedSecond = Oz;
            const Kz = {
                str: Xz(Oz, Wz.format, Wz.prefix),
                style: Wz.style
              },
              uz = {
                ...Wz.baseNametag
              };
            var sz;
            if ("content" === Wz.location) uz.content = [...null !== (sz = Wz.baseNametag.content) && void 0 !== sz ? sz : [], Kz];
            else uz.subtitle = [Kz];
            oz.setOtherEntitySetting(vz, Fz, "nameTagInfo", uz), Oz <= 0 && Uz.delete(Fz)
          }
          if (Kz.size > 0 && tz - uz >= Wz) {
            uz = tz, Nz = (Nz + 1) % 3;
            let zz = 0;
            for (const [sz, Fz] of Kz) {
              if (zz++ % 3 !== Nz) continue;
              const Wz = Math.floor((tz - Fz.startTime) / 1e3);
              if (Wz === Fz.lastRenderedSecond) continue;
              Fz.lastRenderedSecond = Wz;
              const Xz = Fz.accumulatedIncome + Fz.incomePerSecond * BigInt(Wz);
              Oz(oz, vz, sz, Fz, Xz)
            }
          }
        },
        onReceivedMessageFromServer: (zz, tz) => {
          if ("startCountdown" === zz) Uz.set(tz.eId, {
            baseNametag: tz.baseNametag,
            remainingSeconds: tz.remainingSeconds,
            startTime: Date.now(),
            format: tz.format,
            location: tz.location,
            prefix: tz.prefix,
            style: tz.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === zz) Uz.delete(tz.eId);
          else if ("startIncomeTicking" === zz) {
            const zz = {
              baseNametag: tz.baseNametag,
              accumulatedIncome: BigInt(tz.accumulatedIncome),
              incomePerSecond: BigInt(tz.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            Kz.set(tz.eId, zz), Oz(oz, vz, tz.eId, zz, zz.accumulatedIncome)
          } else "stopIncomeTicking" === zz && Kz.delete(tz.eId) && oz.setOtherEntitySetting(vz, tz.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (zz, tz, sz, Fz, Wz, Xz) => {
          if (Xz && "Mesh" === oz.getEntityType(Xz)) {
            const tz = oz.getEntityName(Xz);
            "Upgrades" === tz ? oz.openShop(zz, !1, "Upgrades") : "Items" === tz ? oz.openShop(zz, !1, "Items") : "Prestige" === tz ? oz.openShop(zz, !1, "Prestige") : "Collections" === tz ? oz.openShop(zz, !1, "Collections") : "Base Skins" === tz ? oz.openShop(zz, !1, "Base Skins") : "Gauntlet" === tz ? oz.openShop(zz, !1, "Gauntlet") : "Diamond Shop" === tz && oz.openShop(zz, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  8874: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      f: () => Oz
    });
    const Fz = [{
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

    function Wz(zz) {
      let tz, sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof zz) {
        if (!Number.isFinite(zz)) return "0";
        if (Math.abs(zz) < 100) {
          const tz = zz < 0 ? "-" : "",
            sz = Math.abs(zz);
          return sz >= 10 ? `${tz}${sz.toFixed(1).replace(/\.0$/,"")}` : `${tz}${sz.toFixed(2).replace(/\.?0+$/,"")}`
        }
        tz = BigInt(Math.floor(zz))
      } else tz = zz;
      const Wz = tz < 0n ? -tz : tz,
        Xz = tz < 0n ? "-" : "",
        Oz = Wz.toString();
      if (Oz.length <= sz) return `${Xz}${Oz}`;
      const oz = 3 * Math.floor((Oz.length - 1) / 3);
      if (oz < 3) return `${Xz}${Oz}`;
      if (oz > 3 * Fz.length) {
        const zz = Oz[0],
          tz = Oz.slice(1, 3).replace(/0+$/, "");
        return `${Xz}${tz?`${zz}.${tz}`:zz}e${Oz.length-1}`
      }
      const {
        threshold: vz,
        suffix: Uz
      } = Fz[Fz.length - oz / 3], Kz = Wz / vz, uz = Number(1000n * (Wz % vz) / vz), Nz = Number(Kz) + uz / 1e3;
      let bz;
      return bz = Nz >= 100 ? Math.floor(Nz).toString() : Nz >= 10 ? Nz.toFixed(1).replace(/\.0$/, "") : Nz.toFixed(2).replace(/\.?0+$/, ""), `${Xz}${bz}${Uz}`
    }
    const Xz = Fz.map((zz => {
      let {
        threshold: tz,
        suffix: sz
      } = zz;
      return {
        threshold: Number(tz),
        suffix: sz
      }
    })).filter((zz => {
      let {
        threshold: tz
      } = zz;
      return Number.isFinite(tz)
    }));

    function Oz(zz) {
      const tz = Math.abs(zz),
        sz = zz < 0 ? "-" : "";
      for (const {
          threshold: Fz,
          suffix: Wz
        }
        of Xz)
        if (tz >= Fz) {
          const zz = tz / Fz;
          if (zz >= 1e3) return `${sz}${tz.toExponential(2).replace("e+","e")}`;
          let Xz;
          return Xz = zz >= 100 ? Math.floor(zz).toString() : zz >= 10 ? zz.toFixed(1).replace(/\.0$/, "") : zz.toFixed(2).replace(/\.?0+$/, ""), `${sz}${Xz}${Wz}`
        } return `${sz}${tz}`
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);