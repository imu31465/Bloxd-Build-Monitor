export const id = 281;
export const ids = [281, 282];
export const modules = {
  40397: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      CharacterCustomisationUI: () => hz
    });
    var Fz = sz(65),
      Wz = sz(2735),
      Xz = sz(1116),
      Oz = sz(1857),
      oz = sz(1020),
      vz = sz.n(oz),
      Uz = sz(1223),
      Kz = sz(571),
      uz = sz(1173),
      Nz = sz(2140),
      bz = sz(1521),
      wz = sz(8318),
      Dz = sz(2145),
      gz = sz(2832),
      Hz = sz(1901),
      Bz = sz(1419),
      Pz = sz(2175),
      rz = sz(30),
      Yz = sz(1466),
      xz = sz(321),
      mz = sz(40406),
      Jz = sz(1518),
      Iz = sz(2214),
      Cz = sz(2728),
      ez = sz(2075),
      Zz = sz(2391),
      Gz = sz(1036);
    sz(8891), sz(2835);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var Tz = sz(2187),
      cz = sz(1333),
      jz = sz(1087);

    function Az(zz, tz, sz) {
      return (0, Nz.o)(zz, tz).purchasable && !(0, Iz.j)(zz, tz, sz)
    }

    function yz(zz, tz) {
      return Object.entries(zz).some((zz => {
        let [sz, Fz] = zz;
        return Az(sz, Fz, tz)
      }))
    }

    function Mz(zz) {
      var tz;
      let {
        pack: sz,
        ownedPacks: Fz,
        showStoreLink: Wz = !1,
        children: Xz
      } = zz;
      const {
        t: Oz
      } = (0, uz.B)(), oz = Jz.e[sz], Uz = oz.purchasable && !Fz.includes(sz) && Jz.x.includes(sz), Kz = Cz.k[sz];
      return (0, jz.jsxs)("div", {
        className: vz()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: Uz
        }),
        children: [Kz && (0, jz.jsx)(Kz, {}), (0, jz.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, jz.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (tz = oz.displayName) && void 0 !== tz ? tz : sz
          }), (Uz || Wz) && (0, jz.jsxs)(Bz.F, {
            onClick: () => {
              Uz ? (0, Cz.j)(sz) : (0, Pz.p)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, jz.jsx)(Gz.c, {
              name: "store"
            }), " ", Oz("general:viewInShop")]
          })]
        }), Uz && "bee" === sz && (0, jz.jsx)(Cz.d, {}), Xz]
      })
    }

    function dz(zz) {
      let {
        equippedEmoteIds: tz,
        ownedPacks: sz,
        canBuy: Fz,
        onUpdateLoadout: Wz,
        onEmoteSelected: Xz,
        onEquipPreviewSkin: Oz
      } = zz;
      const {
        t: oz
      } = (0, uz.B)(), Kz = new Set(tz), bz = new Map, wz = Object.keys(Nz.h.emote).sort(((zz, tz) => {
        var sz, Fz, Wz, Xz;
        return (null !== (sz = null === (Fz = (0, Nz.n)("emote", zz)) || void 0 === Fz ? void 0 : Fz.clientIdx) && void 0 !== sz ? sz : 0) - (null !== (Wz = null === (Xz = (0, Nz.n)("emote", tz)) || void 0 === Xz ? void 0 : Xz.clientIdx) && void 0 !== Wz ? Wz : 0)
      })).filter((zz => {
        const tz = (0, Nz.o)("emote", zz),
          Wz = (0, Iz.j)("emote", zz, sz);
        return !(tz.purchasable && !Wz && !Fz) && (tz.clientSelectable || Wz)
      }));
      for (const vz of wz) {
        const zz = (0, Nz.n)("emote", vz).cosmeticPack;
        bz.has(zz) || bz.set(zz, []), bz.get(zz).push(vz)
      }
      const gz = Array.from(bz.keys());
      return (0, jz.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, jz.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, jz.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: oz("emotes:equippedCount", {
              count: tz.length,
              max: Uz.n
            })
          }), (0, jz.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: oz("emotes:loadoutHint")
          })]
        }), gz.map((zz => {
          const Fz = bz.get(zz);
          return (0, jz.jsx)(Mz, {
            pack: zz,
            ownedPacks: sz,
            children: (0, jz.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: Fz.map((zz => {
                var Fz;
                const Oz = tz.indexOf(zz),
                  uz = -1 !== Oz,
                  Nz = tz.length >= Uz.n,
                  bz = Az("emote", zz, sz),
                  wz = bz || !uz && Nz,
                  gz = (0, Dz.d)(zz);
                return (0, jz.jsxs)("div", {
                  className: vz()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: uz
                  }),
                  onClick: () => {
                    Xz(zz)
                  },
                  children: [(0, jz.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, jz.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${zz}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, jz.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (Fz = null === gz || void 0 === gz ? void 0 : gz.displayName) && void 0 !== Fz ? Fz : zz
                    })]
                  }), (0, jz.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [uz && (0, jz.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: Oz + 1
                    }), bz && (0, jz.jsx)(Gz.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, jz.jsx)(cz.h, {
                      tooltipInner: (0, jz.jsx)(jz.Fragment, {
                        children: oz(uz ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, jz.jsx)("div", {
                        className: vz()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: wz,
                          EmoteCustomPartToggleEquipped: uz
                        }),
                        onClick: sz => {
                          sz.stopPropagation(), wz || function(zz) {
                            Kz.has(zz) ? Wz(tz.filter((tz => tz !== zz))) : tz.length >= Uz.n || Wz([...tz, zz])
                          }(zz)
                        },
                        children: (0, jz.jsx)(Gz.c, {
                          name: uz ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, zz)
              }))
            })
          }, zz)
        }))]
      })
    }
    const hz = (0, Fz.memo)((function(zz) {
      let {
        selectedTab: tz
      } = zz;
      const sz = "characters" === tz ? "skin" : tz,
        {
          t: oz
        } = (0, uz.B)(),
        {
          userContext: Dz,
          isUserContextUpdating: Cz
        } = (0, Xz.b)(),
        cz = (0, Wz.b)(),
        {
          gameState: hz,
          initSdkSelectorFinished: Qz
        } = (0, rz.h)(["gameState", "initSdkSelectorFinished"]),
        [kz, iz] = (0, Fz.useState)({}),
        [Lz, lz] = (0, Fz.useState)({}),
        {
          previewEmote: nz,
          triggerEmote: az
        } = (0, gz.c)(),
        qz = (0, Fz.useRef)(Uz.u.reduce(((zz, tz) => (zz[tz] = (0, wz.c)(tz), zz)), {})),
        Sz = (0, Fz.useRef)(!1),
        Vz = (0, Fz.useRef)(null),
        Rz = (0, Fz.useRef)(null),
        pz = (0, Fz.useRef)(null);

      function fz() {
        null !== Rz.current && (clearTimeout(Rz.current), Rz.current = null);
        const zz = pz.current;
        if (null === zz) return;
        pz.current = null;
        const tz = {
          wF: "emote",
          DF: zz
        };
        null !== Oz.gameBridge.latest("connectedGame").websocketUrl ? Oz.gameBridge.send("updateMyCosmetic", tz) : Yz.d.updateCosmetics(Dz, [tz]).catch((zz => {
          console.error("Failed to update emote loadout", zz)
        }))
      }

      function Ez(zz, tz, sz) {
        var Fz, Wz, Xz;
        if (qz.current = {
            ...qz.current,
            [zz]: tz
          }, cz(), sz) {
          const sz = {
            wF: zz,
            DF: tz
          };
          null !== Oz.gameBridge.latest("connectedGame").websocketUrl ? Oz.gameBridge.send("updateMyCosmetic", sz) : Yz.d.updateCosmetics(Dz, [sz]).catch((zz => {
            console.error("Failed to update cosmetic", zz)
          })), Dz.setPlayerCosmetics(zz, tz)
        }
        const oz = (0, Nz.n)(zz, tz);
        if (null !== oz && void 0 !== oz && oz.colourGroup && null !== (Fz = Jz.e[oz.cosmeticPack].colourGroups) && void 0 !== Fz && null !== (Wz = Fz[oz.colourGroup]) && void 0 !== Wz && Wz.showSwatchSelector) {
          const sz = (0, Nz.l)(tz);
          sz && lz((tz => ({
            ...tz,
            [`${oz.cosmeticPack}_${zz}_${oz.colourGroup}`]: parseInt(sz[1])
          })))
        }
        null !== (Xz = Vz.current) && void 0 !== Xz && Xz.isReady() && Vz.current.updateCosmetic(zz, tz)
      }

      function zt(zz) {
        return Object.entries(zz).every((zz => {
          let [tz, sz] = zz;
          return kz[tz] === sz
        }))
      }(0, Hz.d)("cosmeticsUpdated", (zz => {
        let tz = !1;
        for (const {
            local: sz,
            wF: Fz,
            DF: Wz
          }
          of zz) {
          if (!sz) return;
          tz = !0, Sz.current || Ez(Fz, Wz, !1), cz()
        }
        tz && (Sz.current = !0)
      })), (0, Fz.useEffect)((() => {
        if (!Cz) {
          for (const [zz, tz] of Object.entries(Dz.getPlayerCosmetics())) Ez(zz, tz, !1);
          cz()
        }
      }), [Cz]), (0, Fz.useEffect)((() => () => {
        fz()
      }), []);
      const tt = Dz.getOwnedCosmeticPacks(),
        st = (0, Tz.purchasesAllowed)(),
        Ft = Object.keys(Nz.h[sz]).filter((zz => {
          const tz = (0, Nz.o)(sz, zz),
            Fz = (0, Iz.j)(sz, zz, tt);
          return !(tz.purchasable && !Fz && !st) && (tz.clientSelectable || Fz)
        })).sort(((zz, tz) => {
          var Fz, Wz, Xz, Oz;
          return (null !== (Fz = null === (Wz = (0, Nz.n)(sz, zz)) || void 0 === Wz ? void 0 : Wz.clientIdx) && void 0 !== Fz ? Fz : 0) - (null !== (Xz = null === (Oz = (0, Nz.n)(sz, tz)) || void 0 === Oz ? void 0 : Oz.clientIdx) && void 0 !== Xz ? Xz : 0)
        })),
        Wt = new Map;
      for (const Fz of Ft) {
        var Xt;
        const zz = null === (Xt = (0, Nz.n)(sz, Fz)) || void 0 === Xt ? void 0 : Xt.cosmeticPack;
        Wt.has(zz) || Wt.set(zz, []), Wt.get(zz).push(Fz)
      }
      const Ot = function(zz, tz) {
          const sz = new Set,
            Fz = new Set;
          for (const [Wz, Xz] of Object.entries(Nz.h[zz])) {
            if (void 0 === Xz.colourGroup) continue;
            const Oz = `${Xz.cosmeticPack}_${Xz.colourGroup}`;
            (Az(zz, Wz, tz) ? Fz : sz).add(Oz)
          }
          return new Set([...sz].filter((zz => Fz.has(zz))))
        }(sz, tt),
        ot = new Map;
      for (const [Fz, Wz] of Wt) {
        const zz = [],
          tz = new Map;
        for (const Fz of Wz) {
          var vt, Ut;
          const Wz = null !== (vt = null === (Ut = (0, Nz.n)(sz, Fz)) || void 0 === Ut ? void 0 : Ut.colourGroup) && void 0 !== vt ? vt : null;
          tz.has(Wz) || (tz.set(Wz, []), zz.push(Wz)), tz.get(Wz).push(Fz)
        }
        const Xz = zz.map((zz => {
          var Wz;
          const Xz = tz.get(zz),
            Oz = zz ? null === (Wz = Jz.e[Fz].colourGroups) || void 0 === Wz ? void 0 : Wz[zz] : void 0,
            oz = !0 === (null === Oz || void 0 === Oz ? void 0 : Oz.showSwatchSelector) && !Ot.has(`${Fz}_${zz}`);
          if (oz && Oz) {
            var vz;
            const tz = null !== (vz = Lz[`${Fz}_${sz}_${zz}`]) && void 0 !== vz ? vz : (0, Jz.k)(Oz.colours);
            return {
              groupName: zz,
              showSwatch: oz,
              cosmetics: Xz.filter((zz => {
                const sz = (0, Nz.l)(zz);
                return !sz || tz.toString() === sz[1].toString()
              }))
            }
          }
          return {
            groupName: zz,
            cosmetics: Xz,
            showSwatch: oz
          }
        }));
        ot.set(Fz, Xz)
      }
      const Kt = Array.from(Wt.keys()),
        ut = new Map;
      for (const [Fz, Wz] of Object.entries(bz.d)) {
        const zz = Jz.e[Wz.cosmeticPack],
          tz = !yz(Wz.cosmetics, tt),
          sz = Jz.p.some((zz => (0, Jz.i)(zz) === Fz));
        (zz.clientSelectable || sz || tz) && ((!zz.purchasable || tz || st) && (ut.has(Wz.cosmeticPack) || ut.set(Wz.cosmeticPack, []), ut.get(Wz.cosmeticPack).push([Fz, Wz])))
      }
      const Nt = Array.from(ut.keys());
      return (0, jz.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === sz || "nameColour" === sz) && !Dz.playerHasRank("super") && (0, jz.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, jz.jsx)(Gz.c, {
            name: "bolt"
          }), oz("homePage:unlockWithSuperRank"), st && (0, jz.jsx)(Bz.p, {
            onClick: () => {
              (0, Pz.p)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: oz("general:getItNow")
          })]
        }), (0, jz.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === tz && (0, jz.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Nt.map((zz => {
              const tz = ut.get(zz);
              return (0, jz.jsx)(Mz, {
                pack: zz,
                ownedPacks: tt,
                showStoreLink: !Jz.t.includes(zz) && tz.some((zz => {
                  let [, {
                    cosmetics: tz
                  }] = zz;
                  return yz(tz, tt)
                })),
                children: (0, jz.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: tz.map((zz => {
                    let [tz, {
                      cosmetics: sz
                    }] = zz;
                    const Fz = yz(sz, tt),
                      Wz = zt(sz),
                      Xz = !Wz && Object.entries(sz).every((zz => {
                        let [tz, sz] = zz;
                        return qz.current[tz] === sz
                      }));
                    return (0, jz.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: vz()("CharacterPresetCard", {
                        CharacterPresetCardActive: Xz,
                        CharacterPresetCardTryingOn: Wz
                      }),
                      onClick: () => {
                        if (Fz) ! function(zz) {
                          zt(zz) ? iz({}) : iz({
                            ...zz
                          })
                        }(sz);
                        else {
                          Object.keys(kz).length > 0 && iz({});
                          const zz = Object.entries(sz);
                          for (const [tz, sz] of zz) Ez(tz, sz, !1), Dz.setPlayerCosmetics(tz, sz);
                          if (null !== Oz.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [tz, sz] of zz) Oz.gameBridge.send("updateMyCosmetic", {
                              wF: tz,
                              DF: sz
                            });
                          else Yz.d.updateCosmetics(Dz, zz.map((zz => {
                            let [tz, sz] = zz;
                            return {
                              wF: tz,
                              DF: sz
                            }
                          }))).catch((zz => {
                            console.error("Failed to update cosmetics", zz)
                          }))
                        }
                      },
                      children: [(0, jz.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${tz}_preview.png)`
                        }
                      }), Fz && (0, jz.jsx)(Gz.c, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, tz)
                  }))
                })
              }, zz)
            }))]
          }), "emote" === tz && (0, jz.jsx)(dz, {
            equippedEmoteIds: (0, wz.f)(qz.current.emote),
            ownedPacks: tt,
            canBuy: st,
            onUpdateLoadout: zz => {
              const tz = (0, wz.j)(zz);
              var sz;
              qz.current = {
                ...qz.current,
                emote: tz
              }, Dz.setPlayerCosmetics("emote", tz), cz(), sz = tz, pz.current = sz, null !== Rz.current && clearTimeout(Rz.current), Rz.current = setTimeout(fz, 350)
            },
            onEmoteSelected: az,
            onEquipPreviewSkin: () => {
              ! function(zz, tz) {
                for (const sz of Uz.u) "cape" !== sz && "nameColour" !== sz && "emote" !== sz && zz(sz, "skin" === sz ? "skin_preview" : `${sz}_none`, !1);
                tz()
              }(Ez, cz)
            }
          }), "characters" !== tz && "emote" !== tz && (0, jz.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Kt.map((zz => {
              const tz = ot.get(zz);
              return (0, jz.jsx)(Mz, {
                pack: zz,
                ownedPacks: tt,
                children: tz.map((tz => {
                  var Fz;
                  let {
                    groupName: Wz,
                    cosmetics: Xz,
                    showSwatch: Oz
                  } = tz;
                  const oz = Wz ? null === (Fz = Jz.e[zz].colourGroups) || void 0 === Fz ? void 0 : Fz[Wz] : void 0,
                    Uz = `${zz}_${sz}_${Wz}`;
                  return (0, jz.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [Oz && oz && (0, jz.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...oz.colours.map(((zz, tz) => ({
                        color: zz,
                        index: tz
                      })))].sort(((zz, tz) => zz.color.order - tz.color.order)).map((tz => {
                        var Fz;
                        let {
                          color: Xz,
                          index: Oz
                        } = tz;
                        return (0, jz.jsx)("div", {
                          className: vz()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (Fz = Lz[Uz]) && void 0 !== Fz ? Fz : (0, Jz.k)(oz.colours)) === Oz
                          }),
                          style: {
                            backgroundColor: `rgb(${Xz.rbg.join(",")})`
                          },
                          onClick: () => {
                            var tz;
                            lz((zz => ({
                              ...zz,
                              [Uz]: Oz
                            })));
                            const Fz = kz[sz],
                              Xz = Fz ? (0, Nz.n)(sz, Fz) : null,
                              oz = (null === Xz || void 0 === Xz ? void 0 : Xz.cosmeticPack) === zz,
                              vz = oz ? Fz : qz.current[sz],
                              Kz = oz ? Xz : (0, Nz.n)(sz, vz);
                            if ((null === Kz || void 0 === Kz ? void 0 : Kz.cosmeticPack) !== zz) return;
                            if ((null !== (tz = null === Kz || void 0 === Kz ? void 0 : Kz.colourGroup) && void 0 !== tz ? tz : null) !== Wz) return;
                            const uz = (0, Nz.l)(vz);
                            if (uz) {
                              const zz = `${sz}_${uz[0]}_${Oz}`;
                              oz ? iz((tz => ({
                                ...tz,
                                [sz]: zz
                              }))) : Ez(sz, zz, !0)
                            }
                          }
                        }, Xz.rbg.join())
                      }))
                    }), Xz.map((zz => {
                      const tz = zz === qz.current[sz],
                        Fz = kz[sz] === zz,
                        Wz = Az(sz, zz, tt);
                      let Xz = !0;
                      return Wz || tz || ("cape" !== sz || (0, xz.Hd)(Dz.getPlayerRanks(), zz)) && ("nameColour" !== sz || Dz.playerHasRank("super")) || (Xz = !1), (0, jz.jsxs)("div", {
                        className: vz()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: tz && !Fz,
                          TryingOnCharCustomPartWrapper: Fz,
                          DisabledCharCustomPartWrapper: !Xz,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === sz
                        }),
                        onClick: () => {
                          if (Xz)
                            if (Wz) iz((tz => {
                              if (tz[sz] === zz) {
                                const zz = {
                                  ...tz
                                };
                                return delete zz[sz], zz
                              }
                              return {
                                ...tz,
                                [sz]: zz
                              }
                            }));
                            else {
                              var tz;
                              if (kz[sz] && iz((zz => {
                                  const tz = {
                                    ...zz
                                  };
                                  return delete tz[sz], tz
                                })), zz === qz.current[sz]) return;
                              null !== (tz = Vz.current) && void 0 !== tz && tz.isReady() && Ez(sz, zz, !0)
                            }
                        },
                        children: ["profileEffect" === sz ? (0, jz.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, jz.jsx)(Zz.g, {
                            playerSocialPreview: (0, ez.d)(zz, {
                              name: Dz.getPlayerName(),
                              cosmetics: Dz.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, jz.jsx)("div", {
                          className: vz()("CharCustomPart", {
                            PixelatedImage: "cape" === sz
                          }),
                          style: (0, Nz.n)(sz, zz).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,Nz.n)(sz,zz).previewTex}.png)`
                          } : {
                            backgroundColor: Kz.v[zz]
                          }
                        }), Wz && (0, jz.jsx)(Gz.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, zz)
                    }))]
                  }, null !== Wz && void 0 !== Wz ? Wz : "ungrouped")
                }))
              }, zz)
            }))]
          }), (0, jz.jsx)(mz.CharacterPreview, {
            ref: Vz,
            forcedCosmetics: kz,
            yo: nz.id,
            emotePlaySeq: nz.seq,
            onReady: () => {
              for (const zz of Uz.u) Ez(zz, qz.current[zz], !1)
            }
          })]
        })]
      })
    }))
  },
  40406: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      CharacterPreview: () => uz
    });
    var Fz = sz(65),
      Wz = sz(2537),
      Xz = sz(1223),
      Oz = sz(8318),
      oz = sz(8891),
      vz = sz(3307),
      Uz = sz(1087);
    const Kz = .6 * Math.PI,
      uz = (0, Fz.memo)((0, Fz.forwardRef)((function(zz, tz) {
        let {
          onReady: sz,
          onDrawn: uz,
          owner: Nz = "other",
          framing: bz = "player",
          forcedCosmetics: wz,
          yo: Dz,
          emotePlaySeq: gz,
          turntableFromYaw: Hz = null
        } = zz;
        const Bz = (0, Fz.useRef)(null),
          {
            width: Pz,
            height: rz
          } = (0, Wz.d)(Bz),
          Yz = (0, Fz.useRef)(null),
          xz = (0, Fz.useRef)({}),
          mz = (0, Fz.useRef)({}),
          [Jz, Iz] = (0, Fz.useState)(!1),
          Cz = (0, Fz.useRef)(sz);
        Cz.current = sz;
        const ez = (0, Fz.useRef)(uz);
        ez.current = uz;
        const Zz = (0, Fz.useRef)(null),
          Gz = (0, Fz.useRef)(!1),
          Tz = (0, Fz.useRef)(!1),
          cz = (0, Fz.useCallback)((() => {
            const zz = Yz.current;
            if (!zz || !ez.current || Gz.current || !Tz.current) return;
            const tz = {};
            Zz.current = tz, queueMicrotask((() => {
              if (Zz.current !== tz) return;
              const sz = Promise.all(Xz.u.map((tz => zz.untilDrawn(tz)))).catch((zz => {
                  console.error("Failed to draw the character preview", zz)
                })),
                Fz = new Promise((zz => {
                  setTimeout(zz, 1e4)
                }));
              Promise.race([sz, Fz]).then((() => {
                var sz;
                Yz.current !== zz || Zz.current !== tz || Gz.current || (Gz.current = !0, null === (sz = ez.current) || void 0 === sz || sz.call(ez))
              }))
            }))
          }), []);
        return (0, Fz.useImperativeHandle)(tz, (() => {
          const zz = (zz, tz) => {
            var sz;
            (xz.current[zz] = tz, null !== wz && void 0 !== wz && wz[zz]) || (null === (sz = Yz.current) || void 0 === sz || sz.setCosmetic(zz, tz), cz())
          };
          return {
            updateCosmetic: zz,
            setAllCosmetics(tz) {
              for (const Fz of Xz.u) {
                var sz;
                zz(Fz, null !== (sz = tz[Fz]) && void 0 !== sz ? sz : (0, Oz.c)(Fz))
              }
            },
            isReady() {
              var zz, tz;
              return null !== (zz = null === (tz = Yz.current) || void 0 === tz ? void 0 : tz.isReady()) && void 0 !== zz && zz
            },
            resetCamera() {
              var zz;
              null === (zz = Yz.current) || void 0 === zz || zz.resetCamera()
            },
            setOrbit(zz) {
              var tz;
              null === (tz = Yz.current) || void 0 === tz || tz.setOrbit(zz)
            },
            async ensureReadyForCapture(zz) {
              var tz;
              await (null === (tz = Yz.current) || void 0 === tz ? void 0 : tz.untilDrawn(zz))
            },
            getDevTools() {
              var zz;
              return null !== (zz = Yz.current) && void 0 !== zz && zz.isReady() ? Yz.current.dev : null
            }
          }
        }), [wz, cz]), (0, Fz.useEffect)((() => {
          const zz = vz.d.register(Nz),
            tz = oz.f.openCharacter(Bz.current, bz);
          Yz.current = tz;
          let sz = !0;
          return tz.ready.then((() => {
            sz && (Iz(!0), Cz.current())
          })).catch((zz => {
            console.error("Failed to set up the character preview", zz)
          })), () => {
            sz = !1, zz(), tz.resetCamera(), tz.close(), Yz.current = null
          }
        }), []), (0, Fz.useEffect)((() => {
          Pz <= 0 || rz <= 0 || Yz.current.resize(Pz, rz)
        }), [Pz, rz]), (0, Fz.useEffect)((() => {
          if (!Jz) return;
          const zz = mz.current;
          for (const tz of Xz.u) {
            const sz = null === wz || void 0 === wz ? void 0 : wz[tz],
              Fz = zz[tz];
            sz && sz !== Fz ? Yz.current.setCosmetic(tz, sz) : !sz && Fz && xz.current[tz] && Yz.current.setCosmetic(tz, xz.current[tz])
          }
          mz.current = {
            ...wz
          }, Tz.current = !0, cz()
        }), [wz, Jz, cz]), (0, Fz.useEffect)((() => {
          Jz && Yz.current.playEmote(null !== Dz && void 0 !== Dz ? Dz : null)
        }), [Dz, gz, Jz]), (0, Fz.useEffect)((() => {
          if (!Jz || null === Hz) return;
          const zz = Yz.current,
            {
              pitch: tz,
              radius: sz
            } = oz.b[bz];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return zz.setOrbit({
            yaw: Hz + Kz,
            pitch: tz,
            radius: sz
          }), () => {
            zz.resetCamera()
          };
          const Fz = performance.now();
          let Wz = 0;
          const Xz = Oz => {
            zz.setOrbit({
              yaw: Hz + (Oz - Fz) / 6e3 * 2 * Math.PI,
              pitch: tz,
              radius: sz
            }), Wz = requestAnimationFrame(Xz)
          };
          return Wz = requestAnimationFrame(Xz), () => {
            cancelAnimationFrame(Wz), zz.resetCamera()
          }
        }), [Jz, Hz]), (0, Uz.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Bz
        })
      })))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);