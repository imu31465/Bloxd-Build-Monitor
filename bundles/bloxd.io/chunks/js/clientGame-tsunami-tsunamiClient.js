export const id = 26;
export const ids = [26];
export const modules = {
  38898: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => Mz
    });
    var Ez = bz(9013);
    const nz = 1e3 / 3;

    function iz(zz, uz, bz) {
      if ("parenthetical-seconds" === uz) return ` (${zz}s)`;
      const Ez = `${Math.floor(zz/60)}:${(zz%60).toString().padStart(2,"0")}`;
      return bz ? `${bz}${Ez}` : Ez
    }

    function lz(zz, uz, bz, nz, iz) {
      var lz;
      const Mz = {
        ...nz.baseNametag
      };
      Mz.content = [...null !== (lz = nz.baseNametag.content) && void 0 !== lz ? lz : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,Ez.b)(iz)}`
      }], zz.setOtherEntitySetting(uz, bz, "nameTagInfo", Mz)
    }
    const Mz = function(zz, uz, bz, Ez) {
      let Mz, {
        localPlayerId: tz
      } = Ez;
      const Hz = new Map,
        Oz = new Map;
      let pz = 0,
        dz = 0;
      return {
        onCreate: zz => {
          Mz = zz
        },
        sd: zz => {
          const uz = Date.now();
          for (const [Ez, nz] of Hz) {
            const zz = Math.floor((uz - nz.startTime) / 1e3),
              lz = Math.max(0, nz.remainingSeconds - zz);
            if (lz === nz.lastRenderedSecond) continue;
            nz.lastRenderedSecond = lz;
            const Oz = {
                str: iz(lz, nz.format, nz.prefix),
                style: nz.style
              },
              pz = {
                ...nz.baseNametag
              };
            var bz;
            if ("content" === nz.location) pz.content = [...null !== (bz = nz.baseNametag.content) && void 0 !== bz ? bz : [], Oz];
            else pz.subtitle = [Oz];
            Mz.setOtherEntitySetting(tz, Ez, "nameTagInfo", pz), lz <= 0 && Hz.delete(Ez)
          }
          if (Oz.size > 0 && uz - pz >= nz) {
            pz = uz, dz = (dz + 1) % 3;
            let zz = 0;
            for (const [bz, Ez] of Oz) {
              if (zz++ % 3 !== dz) continue;
              const nz = Math.floor((uz - Ez.startTime) / 1e3);
              if (nz === Ez.lastRenderedSecond) continue;
              Ez.lastRenderedSecond = nz;
              const iz = Ez.accumulatedIncome + Ez.incomePerSecond * BigInt(nz);
              lz(Mz, tz, bz, Ez, iz)
            }
          }
        },
        onReceivedMessageFromServer: (zz, uz) => {
          if ("startCountdown" === zz) Hz.set(uz.eId, {
            baseNametag: uz.baseNametag,
            remainingSeconds: uz.remainingSeconds,
            startTime: Date.now(),
            format: uz.format,
            location: uz.location,
            prefix: uz.prefix,
            style: uz.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === zz) Hz.delete(uz.eId);
          else if ("startIncomeTicking" === zz) {
            const zz = {
              baseNametag: uz.baseNametag,
              accumulatedIncome: BigInt(uz.accumulatedIncome),
              incomePerSecond: BigInt(uz.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            Oz.set(uz.eId, zz), lz(Mz, tz, uz.eId, zz, zz.accumulatedIncome)
          } else "stopIncomeTicking" === zz && Oz.delete(uz.eId) && Mz.setOtherEntitySetting(tz, uz.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (zz, uz, bz, Ez, nz, iz) => {
          if (iz && "Mesh" === Mz.getEntityType(iz)) {
            const uz = Mz.getEntityName(iz);
            "Upgrades" === uz ? Mz.openShop(zz, !1, "Upgrades") : "Items" === uz ? Mz.openShop(zz, !1, "Items") : "Prestige" === uz ? Mz.openShop(zz, !1, "Prestige") : "Collections" === uz ? Mz.openShop(zz, !1, "Collections") : "Base Skins" === uz ? Mz.openShop(zz, !1, "Base Skins") : "Gauntlet" === uz ? Mz.openShop(zz, !1, "Gauntlet") : "Diamond Shop" === uz && Mz.openShop(zz, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  9013: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      d: () => lz
    });
    const Ez = [{
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

    function nz(zz) {
      let uz, bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof zz) {
        if (!Number.isFinite(zz)) return "0";
        if (Math.abs(zz) < 100) {
          const uz = zz < 0 ? "-" : "",
            bz = Math.abs(zz);
          return bz >= 10 ? `${uz}${bz.toFixed(1).replace(/\.0$/,"")}` : `${uz}${bz.toFixed(2).replace(/\.?0+$/,"")}`
        }
        uz = BigInt(Math.floor(zz))
      } else uz = zz;
      const nz = uz < 0n ? -uz : uz,
        iz = uz < 0n ? "-" : "",
        lz = nz.toString();
      if (lz.length <= bz) return `${iz}${lz}`;
      const Mz = 3 * Math.floor((lz.length - 1) / 3);
      if (Mz < 3) return `${iz}${lz}`;
      if (Mz > 3 * Ez.length) {
        const zz = lz[0],
          uz = lz.slice(1, 3).replace(/0+$/, "");
        return `${iz}${uz?`${zz}.${uz}`:zz}e${lz.length-1}`
      }
      const {
        threshold: tz,
        suffix: Hz
      } = Ez[Ez.length - Mz / 3], Oz = nz / tz, pz = Number(1000n * (nz % tz) / tz), dz = Number(Oz) + pz / 1e3;
      let Fz;
      return Fz = dz >= 100 ? Math.floor(dz).toString() : dz >= 10 ? dz.toFixed(1).replace(/\.0$/, "") : dz.toFixed(2).replace(/\.?0+$/, ""), `${iz}${Fz}${Hz}`
    }
    const iz = Ez.map((zz => {
      let {
        threshold: uz,
        suffix: bz
      } = zz;
      return {
        threshold: Number(uz),
        suffix: bz
      }
    })).filter((zz => {
      let {
        threshold: uz
      } = zz;
      return Number.isFinite(uz)
    }));

    function lz(zz) {
      const uz = Math.abs(zz),
        bz = zz < 0 ? "-" : "";
      for (const {
          threshold: Ez,
          suffix: nz
        }
        of iz)
        if (uz >= Ez) {
          const zz = uz / Ez;
          if (zz >= 1e3) return `${bz}${uz.toExponential(2).replace("e+","e")}`;
          let iz;
          return iz = zz >= 100 ? Math.floor(zz).toString() : zz >= 10 ? zz.toFixed(1).replace(/\.0$/, "") : zz.toFixed(2).replace(/\.?0+$/, ""), `${bz}${iz}${nz}`
        } return `${bz}${uz}`
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);