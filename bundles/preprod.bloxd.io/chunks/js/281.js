export const id = 281;
export const ids = [281, 282];
export const modules = {
  40493: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      CharacterCustomisationUI: () => Uz
    });
    var Ez = bz(56),
      nz = bz(2756),
      iz = bz(1114),
      lz = bz(1871),
      Mz = bz(1038),
      tz = bz.n(Mz),
      Hz = bz(1226),
      Oz = bz(577),
      pz = bz(1181),
      dz = bz(2132),
      Fz = bz(1531),
      Zz = bz(8494),
      Rz = bz(2136),
      Kz = bz(2858),
      wz = bz(1912),
      Xz = bz(1419),
      fz = bz(2171),
      sz = bz(20),
      rz = bz(1473),
      oz = bz(328),
      Nz = bz(40500),
      vz = bz(1527),
      xz = bz(2222),
      Jz = bz(2754),
      Az = bz(2067),
      Tz = bz(2455),
      Lz = bz(1047);
    bz(9020), bz(2860);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var Pz = bz(2178),
      Gz = bz(1332),
      az = bz(1089);

    function Vz(zz, uz, bz) {
      return (0, dz.n)(zz, uz).purchasable && !(0, xz.q)(zz, uz, bz)
    }

    function mz(zz, uz) {
      return Object.entries(zz).some((zz => {
        let [bz, Ez] = zz;
        return Vz(bz, Ez, uz)
      }))
    }

    function qz(zz) {
      var uz;
      let {
        pack: bz,
        ownedPacks: Ez,
        showStoreLink: nz = !1,
        children: iz
      } = zz;
      const {
        t: lz
      } = (0, pz.F)(), Mz = vz.e[bz], Hz = Mz.purchasable && !Ez.includes(bz) && vz.p.includes(bz), Oz = Jz.h[bz];
      return (0, az.jsxs)("div", {
        className: tz()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: Hz
        }),
        children: [Oz && (0, az.jsx)(Oz, {}), (0, az.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, az.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (uz = Mz.displayName) && void 0 !== uz ? uz : bz
          }), (Hz || nz) && (0, az.jsxs)(Xz.G, {
            onClick: () => {
              Hz ? (0, Jz.e)(bz) : (0, fz.o)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, az.jsx)(Lz.c, {
              name: "store"
            }), " ", lz("general:viewInShop")]
          })]
        }), Hz && "bee" === bz && (0, az.jsx)(Jz.b, {}), iz]
      })
    }

    function hz(zz) {
      let {
        equippedEmoteIds: uz,
        ownedPacks: bz,
        canBuy: Ez,
        onUpdateLoadout: nz,
        onEmoteSelected: iz,
        onEquipPreviewSkin: lz
      } = zz;
      const {
        t: Mz
      } = (0, pz.F)(), Oz = new Set(uz), Fz = new Map, Zz = Object.keys(dz.h.emote).sort(((zz, uz) => {
        var bz, Ez, nz, iz;
        return (null !== (bz = null === (Ez = (0, dz.m)("emote", zz)) || void 0 === Ez ? void 0 : Ez.clientIdx) && void 0 !== bz ? bz : 0) - (null !== (nz = null === (iz = (0, dz.m)("emote", uz)) || void 0 === iz ? void 0 : iz.clientIdx) && void 0 !== nz ? nz : 0)
      })).filter((zz => {
        const uz = (0, dz.n)("emote", zz),
          nz = (0, xz.q)("emote", zz, bz);
        return !(uz.purchasable && !nz && !Ez) && (uz.clientSelectable || nz)
      }));
      for (const tz of Zz) {
        const zz = (0, dz.m)("emote", tz).cosmeticPack;
        Fz.has(zz) || Fz.set(zz, []), Fz.get(zz).push(tz)
      }
      const Kz = Array.from(Fz.keys());
      return (0, az.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, az.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, az.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: Mz("emotes:equippedCount", {
              count: uz.length,
              max: Hz.o
            })
          }), (0, az.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: Mz("emotes:loadoutHint")
          })]
        }), Kz.map((zz => {
          const Ez = Fz.get(zz);
          return (0, az.jsx)(qz, {
            pack: zz,
            ownedPacks: bz,
            children: (0, az.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: Ez.map((zz => {
                var Ez;
                const lz = uz.indexOf(zz),
                  pz = -1 !== lz,
                  dz = uz.length >= Hz.o,
                  Fz = Vz("emote", zz, bz),
                  Zz = Fz || !pz && dz,
                  Kz = (0, Rz.j)(zz);
                return (0, az.jsxs)("div", {
                  className: tz()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: pz
                  }),
                  onClick: () => {
                    iz(zz)
                  },
                  children: [(0, az.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, az.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${zz}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, az.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (Ez = null === Kz || void 0 === Kz ? void 0 : Kz.displayName) && void 0 !== Ez ? Ez : zz
                    })]
                  }), (0, az.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [pz && (0, az.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: lz + 1
                    }), Fz && (0, az.jsx)(Lz.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, az.jsx)(Gz.f, {
                      tooltipInner: (0, az.jsx)(az.Fragment, {
                        children: Mz(pz ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, az.jsx)("div", {
                        className: tz()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: Zz,
                          EmoteCustomPartToggleEquipped: pz
                        }),
                        onClick: bz => {
                          bz.stopPropagation(), Zz || function(zz) {
                            Oz.has(zz) ? nz(uz.filter((uz => uz !== zz))) : uz.length >= Hz.o || nz([...uz, zz])
                          }(zz)
                        },
                        children: (0, az.jsx)(Lz.c, {
                          name: pz ? "minus" : "plus",
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
    const Uz = (0, Ez.memo)((function(zz) {
      let {
        selectedTab: uz
      } = zz;
      const bz = "characters" === uz ? "skin" : uz,
        {
          t: Mz
        } = (0, pz.F)(),
        {
          userContext: Rz,
          isUserContextUpdating: Jz
        } = (0, iz.c)(),
        Gz = (0, nz.c)(),
        {
          gameState: Uz,
          initSdkSelectorFinished: cz
        } = (0, sz.m)(["gameState", "initSdkSelectorFinished"]),
        [gz, Sz] = (0, Ez.useState)({}),
        [yz, Dz] = (0, Ez.useState)({}),
        {
          previewEmote: Qz,
          triggerEmote: Wz
        } = (0, Kz.e)(),
        ez = (0, Ez.useRef)(Hz.u.reduce(((zz, uz) => (zz[uz] = (0, Zz.b)(uz), zz)), {})),
        jz = (0, Ez.useRef)(!1),
        Iz = (0, Ez.useRef)(null),
        Bz = (0, Ez.useRef)(null),
        Cz = (0, Ez.useRef)(null);

      function Yz() {
        null !== Bz.current && (clearTimeout(Bz.current), Bz.current = null);
        const zz = Cz.current;
        if (null === zz) return;
        Cz.current = null;
        const uz = {
          kb: "emote",
          zE: zz
        };
        null !== lz.gameBridge.latest("connectedGame").websocketUrl ? lz.gameBridge.send("updateMyCosmetic", uz) : rz.c.updateCosmetics(Rz, [uz]).catch((zz => {
          console.error("Failed to update emote loadout", zz)
        }))
      }

      function kz(zz, uz, bz) {
        var Ez, nz, iz;
        if (ez.current = {
            ...ez.current,
            [zz]: uz
          }, Gz(), bz) {
          const bz = {
            kb: zz,
            zE: uz
          };
          null !== lz.gameBridge.latest("connectedGame").websocketUrl ? lz.gameBridge.send("updateMyCosmetic", bz) : rz.c.updateCosmetics(Rz, [bz]).catch((zz => {
            console.error("Failed to update cosmetic", zz)
          })), Rz.setPlayerCosmetics(zz, uz)
        }
        const Mz = (0, dz.m)(zz, uz);
        if (null !== Mz && void 0 !== Mz && Mz.colourGroup && null !== (Ez = vz.e[Mz.cosmeticPack].colourGroups) && void 0 !== Ez && null !== (nz = Ez[Mz.colourGroup]) && void 0 !== nz && nz.showSwatchSelector) {
          const bz = (0, dz.i)(uz);
          bz && Dz((uz => ({
            ...uz,
            [`${Mz.cosmeticPack}_${zz}_${Mz.colourGroup}`]: parseInt(bz[1])
          })))
        }
        null !== (iz = Iz.current) && void 0 !== iz && iz.isReady() && Iz.current.updateCosmetic(zz, uz)
      }

      function zu(zz) {
        return Object.entries(zz).every((zz => {
          let [uz, bz] = zz;
          return gz[uz] === bz
        }))
      }(0, wz.d)("cosmeticsUpdated", (zz => {
        let uz = !1;
        for (const {
            local: bz,
            kb: Ez,
            zE: nz
          }
          of zz) {
          if (!bz) return;
          uz = !0, jz.current || kz(Ez, nz, !1), Gz()
        }
        uz && (jz.current = !0)
      })), (0, Ez.useEffect)((() => {
        if (!Jz) {
          for (const [zz, uz] of Object.entries(Rz.getPlayerCosmetics())) kz(zz, uz, !1);
          Gz()
        }
      }), [Jz]), (0, Ez.useEffect)((() => () => {
        Yz()
      }), []);
      const uu = Rz.getOwnedCosmeticPacks(),
        bu = (0, Pz.purchasesAllowed)(),
        Eu = Object.keys(dz.h[bz]).filter((zz => {
          const uz = (0, dz.n)(bz, zz),
            Ez = (0, xz.q)(bz, zz, uu);
          return !(uz.purchasable && !Ez && !bu) && (uz.clientSelectable || Ez)
        })).sort(((zz, uz) => {
          var Ez, nz, iz, lz;
          return (null !== (Ez = null === (nz = (0, dz.m)(bz, zz)) || void 0 === nz ? void 0 : nz.clientIdx) && void 0 !== Ez ? Ez : 0) - (null !== (iz = null === (lz = (0, dz.m)(bz, uz)) || void 0 === lz ? void 0 : lz.clientIdx) && void 0 !== iz ? iz : 0)
        })),
        nu = new Map;
      for (const Ez of Eu) {
        var iu;
        const zz = null === (iu = (0, dz.m)(bz, Ez)) || void 0 === iu ? void 0 : iu.cosmeticPack;
        nu.has(zz) || nu.set(zz, []), nu.get(zz).push(Ez)
      }
      const lu = function(zz, uz) {
          const bz = new Set,
            Ez = new Set;
          for (const [nz, iz] of Object.entries(dz.h[zz])) {
            if (void 0 === iz.colourGroup) continue;
            const lz = `${iz.cosmeticPack}_${iz.colourGroup}`;
            (Vz(zz, nz, uz) ? Ez : bz).add(lz)
          }
          return new Set([...bz].filter((zz => Ez.has(zz))))
        }(bz, uu),
        Mu = new Map;
      for (const [Ez, nz] of nu) {
        const zz = [],
          uz = new Map;
        for (const Ez of nz) {
          var tu, Hu;
          const nz = null !== (tu = null === (Hu = (0, dz.m)(bz, Ez)) || void 0 === Hu ? void 0 : Hu.colourGroup) && void 0 !== tu ? tu : null;
          uz.has(nz) || (uz.set(nz, []), zz.push(nz)), uz.get(nz).push(Ez)
        }
        const iz = zz.map((zz => {
          var nz;
          const iz = uz.get(zz),
            lz = zz ? null === (nz = vz.e[Ez].colourGroups) || void 0 === nz ? void 0 : nz[zz] : void 0,
            Mz = !0 === (null === lz || void 0 === lz ? void 0 : lz.showSwatchSelector) && !lu.has(`${Ez}_${zz}`);
          if (Mz && lz) {
            var tz;
            const uz = null !== (tz = yz[`${Ez}_${bz}_${zz}`]) && void 0 !== tz ? tz : (0, vz.i)(lz.colours);
            return {
              groupName: zz,
              showSwatch: Mz,
              cosmetics: iz.filter((zz => {
                const bz = (0, dz.i)(zz);
                return !bz || uz.toString() === bz[1].toString()
              }))
            }
          }
          return {
            groupName: zz,
            cosmetics: iz,
            showSwatch: Mz
          }
        }));
        Mu.set(Ez, iz)
      }
      const Ou = Array.from(nu.keys()),
        pu = new Map;
      for (const [Ez, nz] of Object.entries(Fz.c)) {
        const zz = vz.e[nz.cosmeticPack],
          uz = !mz(nz.cosmetics, uu),
          bz = vz.l.some((zz => (0, vz.g)(zz) === Ez));
        (zz.clientSelectable || bz || uz) && ((!zz.purchasable || uz || bu) && (pu.has(nz.cosmeticPack) || pu.set(nz.cosmeticPack, []), pu.get(nz.cosmeticPack).push([Ez, nz])))
      }
      const du = Array.from(pu.keys());
      return (0, az.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === bz || "nameColour" === bz) && !Rz.playerHasRank("super") && (0, az.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, az.jsx)(Lz.c, {
            name: "bolt"
          }), Mz("homePage:unlockWithSuperRank"), bu && (0, az.jsx)(Xz.q, {
            onClick: () => {
              (0, fz.o)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: Mz("general:getItNow")
          })]
        }), (0, az.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === uz && (0, az.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, du.map((zz => {
              const uz = pu.get(zz);
              return (0, az.jsx)(qz, {
                pack: zz,
                ownedPacks: uu,
                showStoreLink: !vz.m.includes(zz) && uz.some((zz => {
                  let [, {
                    cosmetics: uz
                  }] = zz;
                  return mz(uz, uu)
                })),
                children: (0, az.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: uz.map((zz => {
                    let [uz, {
                      cosmetics: bz
                    }] = zz;
                    const Ez = mz(bz, uu),
                      nz = zu(bz),
                      iz = !nz && Object.entries(bz).every((zz => {
                        let [uz, bz] = zz;
                        return ez.current[uz] === bz
                      }));
                    return (0, az.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: tz()("CharacterPresetCard", {
                        CharacterPresetCardActive: iz,
                        CharacterPresetCardTryingOn: nz
                      }),
                      onClick: () => {
                        if (Ez) ! function(zz) {
                          zu(zz) ? Sz({}) : Sz({
                            ...zz
                          })
                        }(bz);
                        else {
                          Object.keys(gz).length > 0 && Sz({});
                          const zz = Object.entries(bz);
                          for (const [uz, bz] of zz) kz(uz, bz, !1), Rz.setPlayerCosmetics(uz, bz);
                          if (null !== lz.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [uz, bz] of zz) lz.gameBridge.send("updateMyCosmetic", {
                              kb: uz,
                              zE: bz
                            });
                          else rz.c.updateCosmetics(Rz, zz.map((zz => {
                            let [uz, bz] = zz;
                            return {
                              kb: uz,
                              zE: bz
                            }
                          }))).catch((zz => {
                            console.error("Failed to update cosmetics", zz)
                          }))
                        }
                      },
                      children: [(0, az.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${uz}_preview.png)`
                        }
                      }), Ez && (0, az.jsx)(Lz.c, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, uz)
                  }))
                })
              }, zz)
            }))]
          }), "emote" === uz && (0, az.jsx)(hz, {
            equippedEmoteIds: (0, Zz.e)(ez.current.emote),
            ownedPacks: uu,
            canBuy: bu,
            onUpdateLoadout: zz => {
              const uz = (0, Zz.g)(zz);
              var bz;
              ez.current = {
                ...ez.current,
                emote: uz
              }, Rz.setPlayerCosmetics("emote", uz), Gz(), bz = uz, Cz.current = bz, null !== Bz.current && clearTimeout(Bz.current), Bz.current = setTimeout(Yz, 350)
            },
            onEmoteSelected: Wz,
            onEquipPreviewSkin: () => {
              ! function(zz, uz) {
                for (const bz of Hz.u) "cape" !== bz && "nameColour" !== bz && "emote" !== bz && zz(bz, "skin" === bz ? "skin_preview" : `${bz}_none`, !1);
                uz()
              }(kz, Gz)
            }
          }), "characters" !== uz && "emote" !== uz && (0, az.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Ou.map((zz => {
              const uz = Mu.get(zz);
              return (0, az.jsx)(qz, {
                pack: zz,
                ownedPacks: uu,
                children: uz.map((uz => {
                  var Ez;
                  let {
                    groupName: nz,
                    cosmetics: iz,
                    showSwatch: lz
                  } = uz;
                  const Mz = nz ? null === (Ez = vz.e[zz].colourGroups) || void 0 === Ez ? void 0 : Ez[nz] : void 0,
                    Hz = `${zz}_${bz}_${nz}`;
                  return (0, az.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [lz && Mz && (0, az.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...Mz.colours.map(((zz, uz) => ({
                        color: zz,
                        index: uz
                      })))].sort(((zz, uz) => zz.color.order - uz.color.order)).map((uz => {
                        var Ez;
                        let {
                          color: iz,
                          index: lz
                        } = uz;
                        return (0, az.jsx)("div", {
                          className: tz()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (Ez = yz[Hz]) && void 0 !== Ez ? Ez : (0, vz.i)(Mz.colours)) === lz
                          }),
                          style: {
                            backgroundColor: `rgb(${iz.rbg.join(",")})`
                          },
                          onClick: () => {
                            var uz;
                            Dz((zz => ({
                              ...zz,
                              [Hz]: lz
                            })));
                            const Ez = gz[bz],
                              iz = Ez ? (0, dz.m)(bz, Ez) : null,
                              Mz = (null === iz || void 0 === iz ? void 0 : iz.cosmeticPack) === zz,
                              tz = Mz ? Ez : ez.current[bz],
                              Oz = Mz ? iz : (0, dz.m)(bz, tz);
                            if ((null === Oz || void 0 === Oz ? void 0 : Oz.cosmeticPack) !== zz) return;
                            if ((null !== (uz = null === Oz || void 0 === Oz ? void 0 : Oz.colourGroup) && void 0 !== uz ? uz : null) !== nz) return;
                            const pz = (0, dz.i)(tz);
                            if (pz) {
                              const zz = `${bz}_${pz[0]}_${lz}`;
                              Mz ? Sz((uz => ({
                                ...uz,
                                [bz]: zz
                              }))) : kz(bz, zz, !0)
                            }
                          }
                        }, iz.rbg.join())
                      }))
                    }), iz.map((zz => {
                      const uz = zz === ez.current[bz],
                        Ez = gz[bz] === zz,
                        nz = Vz(bz, zz, uu);
                      let iz = !0;
                      return nz || uz || ("cape" !== bz || (0, oz.Rd)(Rz.getPlayerRanks(), zz)) && ("nameColour" !== bz || Rz.playerHasRank("super")) || (iz = !1), (0, az.jsxs)("div", {
                        className: tz()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: uz && !Ez,
                          TryingOnCharCustomPartWrapper: Ez,
                          DisabledCharCustomPartWrapper: !iz,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === bz
                        }),
                        onClick: () => {
                          if (iz)
                            if (nz) Sz((uz => {
                              if (uz[bz] === zz) {
                                const zz = {
                                  ...uz
                                };
                                return delete zz[bz], zz
                              }
                              return {
                                ...uz,
                                [bz]: zz
                              }
                            }));
                            else {
                              var uz;
                              if (gz[bz] && Sz((zz => {
                                  const uz = {
                                    ...zz
                                  };
                                  return delete uz[bz], uz
                                })), zz === ez.current[bz]) return;
                              null !== (uz = Iz.current) && void 0 !== uz && uz.isReady() && kz(bz, zz, !0)
                            }
                        },
                        children: ["profileEffect" === bz ? (0, az.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, az.jsx)(Tz.i, {
                            playerSocialPreview: (0, Az.c)(zz, {
                              name: Rz.getPlayerName(),
                              cosmetics: Rz.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, az.jsx)("div", {
                          className: tz()("CharCustomPart", {
                            PixelatedImage: "cape" === bz
                          }),
                          style: (0, dz.m)(bz, zz).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,dz.m)(bz,zz).previewTex}.png)`
                          } : {
                            backgroundColor: Oz.n[zz]
                          }
                        }), nz && (0, az.jsx)(Lz.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, zz)
                    }))]
                  }, null !== nz && void 0 !== nz ? nz : "ungrouped")
                }))
              }, zz)
            }))]
          }), (0, az.jsx)(Nz.CharacterPreview, {
            ref: Iz,
            forcedCosmetics: gz,
            GM: Qz.id,
            emotePlaySeq: Qz.seq,
            onReady: () => {
              for (const zz of Hz.u) kz(zz, ez.current[zz], !1)
            }
          })]
        })]
      })
    }))
  },
  40500: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      CharacterPreview: () => pz
    });
    var Ez = bz(56),
      nz = bz(2602),
      iz = bz(1226),
      lz = bz(8494),
      Mz = bz(9020),
      tz = bz(3382),
      Hz = bz(1089);
    const Oz = .6 * Math.PI,
      pz = (0, Ez.memo)((0, Ez.forwardRef)((function(zz, uz) {
        let {
          onReady: bz,
          onDrawn: pz,
          owner: dz = "other",
          framing: Fz = "player",
          forcedCosmetics: Zz,
          GM: Rz,
          emotePlaySeq: Kz,
          turntableFromYaw: wz = null
        } = zz;
        const Xz = (0, Ez.useRef)(null),
          {
            width: fz,
            height: sz
          } = (0, nz.e)(Xz),
          rz = (0, Ez.useRef)(null),
          oz = (0, Ez.useRef)({}),
          Nz = (0, Ez.useRef)({}),
          [vz, xz] = (0, Ez.useState)(!1),
          Jz = (0, Ez.useRef)(bz);
        Jz.current = bz;
        const Az = (0, Ez.useRef)(pz);
        Az.current = pz;
        const Tz = (0, Ez.useRef)(null),
          Lz = (0, Ez.useRef)(!1),
          Pz = (0, Ez.useRef)(!1),
          Gz = (0, Ez.useCallback)((() => {
            const zz = rz.current;
            if (!zz || !Az.current || Lz.current || !Pz.current) return;
            const uz = {};
            Tz.current = uz, queueMicrotask((() => {
              if (Tz.current !== uz) return;
              const bz = Promise.all(iz.u.map((uz => zz.untilDrawn(uz)))).catch((zz => {
                  console.error("Failed to draw the character preview", zz)
                })),
                Ez = new Promise((zz => {
                  setTimeout(zz, 1e4)
                }));
              Promise.race([bz, Ez]).then((() => {
                var bz;
                rz.current !== zz || Tz.current !== uz || Lz.current || (Lz.current = !0, null === (bz = Az.current) || void 0 === bz || bz.call(Az))
              }))
            }))
          }), []);
        return (0, Ez.useImperativeHandle)(uz, (() => {
          const zz = (zz, uz) => {
            var bz;
            (oz.current[zz] = uz, null !== Zz && void 0 !== Zz && Zz[zz]) || (null === (bz = rz.current) || void 0 === bz || bz.setCosmetic(zz, uz), Gz())
          };
          return {
            updateCosmetic: zz,
            setAllCosmetics(uz) {
              for (const Ez of iz.u) {
                var bz;
                zz(Ez, null !== (bz = uz[Ez]) && void 0 !== bz ? bz : (0, lz.b)(Ez))
              }
            },
            isReady() {
              var zz, uz;
              return null !== (zz = null === (uz = rz.current) || void 0 === uz ? void 0 : uz.isReady()) && void 0 !== zz && zz
            },
            resetCamera() {
              var zz;
              null === (zz = rz.current) || void 0 === zz || zz.resetCamera()
            },
            setOrbit(zz) {
              var uz;
              null === (uz = rz.current) || void 0 === uz || uz.setOrbit(zz)
            },
            async ensureReadyForCapture(zz) {
              var uz;
              await (null === (uz = rz.current) || void 0 === uz ? void 0 : uz.untilDrawn(zz))
            },
            getDevTools() {
              var zz;
              return null !== (zz = rz.current) && void 0 !== zz && zz.isReady() ? rz.current.dev : null
            }
          }
        }), [Zz, Gz]), (0, Ez.useEffect)((() => {
          const zz = tz.c.register(dz),
            uz = Mz.j.openCharacter(Xz.current, Fz);
          rz.current = uz;
          let bz = !0;
          return uz.ready.then((() => {
            bz && (xz(!0), Jz.current())
          })).catch((zz => {
            console.error("Failed to set up the character preview", zz)
          })), () => {
            bz = !1, zz(), uz.resetCamera(), uz.close(), rz.current = null
          }
        }), []), (0, Ez.useEffect)((() => {
          fz <= 0 || sz <= 0 || rz.current.resize(fz, sz)
        }), [fz, sz]), (0, Ez.useEffect)((() => {
          if (!vz) return;
          const zz = Nz.current;
          for (const uz of iz.u) {
            const bz = null === Zz || void 0 === Zz ? void 0 : Zz[uz],
              Ez = zz[uz];
            bz && bz !== Ez ? rz.current.setCosmetic(uz, bz) : !bz && Ez && oz.current[uz] && rz.current.setCosmetic(uz, oz.current[uz])
          }
          Nz.current = {
            ...Zz
          }, Pz.current = !0, Gz()
        }), [Zz, vz, Gz]), (0, Ez.useEffect)((() => {
          vz && rz.current.playEmote(null !== Rz && void 0 !== Rz ? Rz : null)
        }), [Rz, Kz, vz]), (0, Ez.useEffect)((() => {
          if (!vz || null === wz) return;
          const zz = rz.current,
            {
              pitch: uz,
              radius: bz
            } = Mz.c[Fz];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return zz.setOrbit({
            yaw: wz + Oz,
            pitch: uz,
            radius: bz
          }), () => {
            zz.resetCamera()
          };
          const Ez = performance.now();
          let nz = 0;
          const iz = lz => {
            zz.setOrbit({
              yaw: wz + (lz - Ez) / 6e3 * 2 * Math.PI,
              pitch: uz,
              radius: bz
            }), nz = requestAnimationFrame(iz)
          };
          return nz = requestAnimationFrame(iz), () => {
            cancelAnimationFrame(nz), zz.resetCamera()
          }
        }), [vz, wz]), (0, Hz.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Xz
        })
      })))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);