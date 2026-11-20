export const id = 281;
export const ids = [281, 282];
export const modules = {
  40669: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      CharacterCustomisationUI: () => HU
    });
    var tU = gU(56),
      pU = gU(2691),
      EU = gU(1112),
      PU = gU(1800),
      TU = gU(1037),
      qU = gU.n(TU),
      KU = gU(1238),
      cU = gU(562),
      GU = gU(1181),
      jU = gU(2053),
      uU = gU(1517),
      CU = gU(8447),
      hU = gU(2061),
      QU = gU(2794),
      eU = gU(1834),
      WU = gU(1412),
      fU = gU(2100),
      xU = gU(21),
      mU = gU(1461),
      IU = gU(311),
      JU = gU(40675),
      wU = gU(1514),
      nU = gU(2159),
      bU = gU(2685),
      oU = gU(1998),
      ZU = gU(2374),
      aU = gU(1049);
    gU(9027), gU(2800);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var YU = gU(2110),
      BU = gU(1344),
      VU = gU(1090);

    function rU(UU, RU, gU) {
      return (0, jU.l)(UU, RU).purchasable && !(0, nU.t)(UU, RU, gU)
    }

    function XU(UU, RU) {
      return Object.entries(UU).some((UU => {
        let [gU, tU] = UU;
        return rU(gU, tU, RU)
      }))
    }

    function vU(UU) {
      var RU;
      let {
        pack: gU,
        ownedPacks: tU,
        showStoreLink: pU = !1,
        children: EU
      } = UU;
      const {
        t: PU
      } = (0, GU.B)(), TU = wU.b[gU], KU = TU.purchasable && !tU.includes(gU) && wU.s.includes(gU), cU = bU.k[gU];
      return (0, VU.jsxs)("div", {
        className: qU()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: KU
        }),
        children: [cU && (0, VU.jsx)(cU, {}), (0, VU.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, VU.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (RU = TU.displayName) && void 0 !== RU ? RU : gU
          }), (KU || pU) && (0, VU.jsxs)(WU.y, {
            onClick: () => {
              KU ? (0, bU.i)(gU) : (0, fU.m)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, VU.jsx)(aU.c, {
              name: "store"
            }), " ", PU("general:viewInShop")]
          })]
        }), KU && "bee" === gU && (0, VU.jsx)(bU.d, {}), EU]
      })
    }

    function dU(UU) {
      let {
        equippedEmoteIds: RU,
        ownedPacks: gU,
        canBuy: tU,
        onUpdateLoadout: pU,
        onEmoteSelected: EU,
        onEquipPreviewSkin: PU
      } = UU;
      const {
        t: TU
      } = (0, GU.B)(), cU = new Set(RU), uU = new Map, CU = Object.keys(jU.f.emote).sort(((UU, RU) => {
        var gU, tU, pU, EU;
        return (null !== (gU = null === (tU = (0, jU.j)("emote", UU)) || void 0 === tU ? void 0 : tU.clientIdx) && void 0 !== gU ? gU : 0) - (null !== (pU = null === (EU = (0, jU.j)("emote", RU)) || void 0 === EU ? void 0 : EU.clientIdx) && void 0 !== pU ? pU : 0)
      })).filter((UU => {
        const RU = (0, jU.l)("emote", UU),
          pU = (0, nU.t)("emote", UU, gU);
        return !(RU.purchasable && !pU && !tU) && (RU.clientSelectable || pU)
      }));
      for (const qU of CU) {
        const UU = (0, jU.j)("emote", qU).cosmeticPack;
        uU.has(UU) || uU.set(UU, []), uU.get(UU).push(qU)
      }
      const QU = Array.from(uU.keys());
      return (0, VU.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, VU.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, VU.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: TU("emotes:equippedCount", {
              count: RU.length,
              max: KU.j
            })
          }), (0, VU.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: TU("emotes:loadoutHint")
          })]
        }), QU.map((UU => {
          const tU = uU.get(UU);
          return (0, VU.jsx)(vU, {
            pack: UU,
            ownedPacks: gU,
            children: (0, VU.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: tU.map((UU => {
                var tU;
                const PU = RU.indexOf(UU),
                  GU = -1 !== PU,
                  jU = RU.length >= KU.j,
                  uU = rU("emote", UU, gU),
                  CU = uU || !GU && jU,
                  QU = (0, hU.f)(UU);
                return (0, VU.jsxs)("div", {
                  className: qU()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: GU
                  }),
                  onClick: () => {
                    EU(UU)
                  },
                  children: [(0, VU.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, VU.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${UU}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, VU.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (tU = null === QU || void 0 === QU ? void 0 : QU.displayName) && void 0 !== tU ? tU : UU
                    })]
                  }), (0, VU.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [GU && (0, VU.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: PU + 1
                    }), uU && (0, VU.jsx)(aU.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, VU.jsx)(BU.g, {
                      tooltipInner: (0, VU.jsx)(VU.Fragment, {
                        children: TU(GU ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, VU.jsx)("div", {
                        className: qU()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: CU,
                          EmoteCustomPartToggleEquipped: GU
                        }),
                        onClick: gU => {
                          gU.stopPropagation(), CU || function(UU) {
                            cU.has(UU) ? pU(RU.filter((RU => RU !== UU))) : RU.length >= KU.j || pU([...RU, UU])
                          }(UU)
                        },
                        children: (0, VU.jsx)(aU.c, {
                          name: GU ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, UU)
              }))
            })
          }, UU)
        }))]
      })
    }
    const HU = (0, tU.memo)((function(UU) {
      let {
        selectedTab: RU
      } = UU;
      const gU = "characters" === RU ? "skin" : RU,
        {
          t: TU
        } = (0, GU.B)(),
        {
          userContext: hU,
          isUserContextUpdating: bU
        } = (0, EU.e)(),
        BU = (0, pU.b)(),
        {
          gameState: HU,
          initSdkSelectorFinished: SU
        } = (0, xU.l)(["gameState", "initSdkSelectorFinished"]),
        [sU, yU] = (0, tU.useState)({}),
        [kU, FU] = (0, tU.useState)({}),
        {
          previewEmote: iU,
          triggerEmote: AU
        } = (0, QU.c)(),
        zU = (0, tU.useRef)(KU.r.reduce(((UU, RU) => (UU[RU] = (0, CU.c)(RU), UU)), {})),
        MU = (0, tU.useRef)(!1),
        DU = (0, tU.useRef)(null),
        LU = (0, tU.useRef)(null),
        NU = (0, tU.useRef)(null);

      function lU() {
        null !== LU.current && (clearTimeout(LU.current), LU.current = null);
        const UU = NU.current;
        if (null === UU) return;
        NU.current = null;
        const RU = {
          Xg: "emote",
          vg: UU
        };
        null !== PU.gameBridge.latest("connectedGame").websocketUrl ? PU.gameBridge.send("updateMyCosmetic", RU) : mU.c.updateCosmetics(hU, [RU]).catch((UU => {
          console.error("Failed to update emote loadout", UU)
        }))
      }

      function OU(UU, RU, gU) {
        var tU, pU, EU;
        if (zU.current = {
            ...zU.current,
            [UU]: RU
          }, BU(), gU) {
          const gU = {
            Xg: UU,
            vg: RU
          };
          null !== PU.gameBridge.latest("connectedGame").websocketUrl ? PU.gameBridge.send("updateMyCosmetic", gU) : mU.c.updateCosmetics(hU, [gU]).catch((UU => {
            console.error("Failed to update cosmetic", UU)
          })), hU.setPlayerCosmetics(UU, RU)
        }
        const TU = (0, jU.j)(UU, RU);
        if (null !== TU && void 0 !== TU && TU.colourGroup && null !== (tU = wU.b[TU.cosmeticPack].colourGroups) && void 0 !== tU && null !== (pU = tU[TU.colourGroup]) && void 0 !== pU && pU.showSwatchSelector) {
          const gU = (0, jU.g)(RU);
          gU && FU((RU => ({
            ...RU,
            [`${TU.cosmeticPack}_${UU}_${TU.colourGroup}`]: parseInt(gU[1])
          })))
        }
        null !== (EU = DU.current) && void 0 !== EU && EU.isReady() && DU.current.updateCosmetic(UU, RU)
      }

      function UR(UU) {
        return Object.entries(UU).every((UU => {
          let [RU, gU] = UU;
          return sU[RU] === gU
        }))
      }(0, eU.d)("cosmeticsUpdated", (UU => {
        let RU = !1;
        for (const {
            local: gU,
            Xg: tU,
            vg: pU
          }
          of UU) {
          if (!gU) return;
          RU = !0, MU.current || OU(tU, pU, !1), BU()
        }
        RU && (MU.current = !0)
      })), (0, tU.useEffect)((() => {
        if (!bU) {
          for (const [UU, RU] of Object.entries(hU.getPlayerCosmetics())) OU(UU, RU, !1);
          BU()
        }
      }), [bU]), (0, tU.useEffect)((() => () => {
        lU()
      }), []);
      const RR = hU.getOwnedCosmeticPacks(),
        gR = (0, YU.purchasesAllowed)(),
        tR = Object.keys(jU.f[gU]).filter((UU => {
          const RU = (0, jU.l)(gU, UU),
            tU = (0, nU.t)(gU, UU, RR);
          return !(RU.purchasable && !tU && !gR) && (RU.clientSelectable || tU)
        })).sort(((UU, RU) => {
          var tU, pU, EU, PU;
          return (null !== (tU = null === (pU = (0, jU.j)(gU, UU)) || void 0 === pU ? void 0 : pU.clientIdx) && void 0 !== tU ? tU : 0) - (null !== (EU = null === (PU = (0, jU.j)(gU, RU)) || void 0 === PU ? void 0 : PU.clientIdx) && void 0 !== EU ? EU : 0)
        })),
        pR = new Map;
      for (const tU of tR) {
        var ER;
        const UU = null === (ER = (0, jU.j)(gU, tU)) || void 0 === ER ? void 0 : ER.cosmeticPack;
        pR.has(UU) || pR.set(UU, []), pR.get(UU).push(tU)
      }
      const PR = function(UU, RU) {
          const gU = new Set,
            tU = new Set;
          for (const [pU, EU] of Object.entries(jU.f[UU])) {
            if (void 0 === EU.colourGroup) continue;
            const PU = `${EU.cosmeticPack}_${EU.colourGroup}`;
            (rU(UU, pU, RU) ? tU : gU).add(PU)
          }
          return new Set([...gU].filter((UU => tU.has(UU))))
        }(gU, RR),
        TR = new Map;
      for (const [tU, pU] of pR) {
        const UU = [],
          RU = new Map;
        for (const tU of pU) {
          var qR, KR;
          const pU = null !== (qR = null === (KR = (0, jU.j)(gU, tU)) || void 0 === KR ? void 0 : KR.colourGroup) && void 0 !== qR ? qR : null;
          RU.has(pU) || (RU.set(pU, []), UU.push(pU)), RU.get(pU).push(tU)
        }
        const EU = UU.map((UU => {
          var pU;
          const EU = RU.get(UU),
            PU = UU ? null === (pU = wU.b[tU].colourGroups) || void 0 === pU ? void 0 : pU[UU] : void 0,
            TU = !0 === (null === PU || void 0 === PU ? void 0 : PU.showSwatchSelector) && !PR.has(`${tU}_${UU}`);
          if (TU && PU) {
            var qU;
            const RU = null !== (qU = kU[`${tU}_${gU}_${UU}`]) && void 0 !== qU ? qU : (0, wU.h)(PU.colours);
            return {
              groupName: UU,
              showSwatch: TU,
              cosmetics: EU.filter((UU => {
                const gU = (0, jU.g)(UU);
                return !gU || RU.toString() === gU[1].toString()
              }))
            }
          }
          return {
            groupName: UU,
            cosmetics: EU,
            showSwatch: TU
          }
        }));
        TR.set(tU, EU)
      }
      const cR = Array.from(pR.keys()),
        GR = new Map;
      for (const [tU, pU] of Object.entries(uU.d)) {
        const UU = wU.b[pU.cosmeticPack],
          RU = !XU(pU.cosmetics, RR),
          gU = wU.m.some((UU => (0, wU.e)(UU) === tU));
        (UU.clientSelectable || gU || RU) && ((!UU.purchasable || RU || gR) && (GR.has(pU.cosmeticPack) || GR.set(pU.cosmeticPack, []), GR.get(pU.cosmeticPack).push([tU, pU])))
      }
      const jR = Array.from(GR.keys());
      return (0, VU.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === gU || "nameColour" === gU) && !hU.playerHasRank("super") && (0, VU.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, VU.jsx)(aU.c, {
            name: "bolt"
          }), TU("homePage:unlockWithSuperRank"), gR && (0, VU.jsx)(WU.j, {
            onClick: () => {
              (0, fU.m)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: TU("general:getItNow")
          })]
        }), (0, VU.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === RU && (0, VU.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, jR.map((UU => {
              const RU = GR.get(UU);
              return (0, VU.jsx)(vU, {
                pack: UU,
                ownedPacks: RR,
                showStoreLink: !wU.p.includes(UU) && RU.some((UU => {
                  let [, {
                    cosmetics: RU
                  }] = UU;
                  return XU(RU, RR)
                })),
                children: (0, VU.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: RU.map((UU => {
                    let [RU, {
                      cosmetics: gU
                    }] = UU;
                    const tU = XU(gU, RR),
                      pU = UR(gU),
                      EU = !pU && Object.entries(gU).every((UU => {
                        let [RU, gU] = UU;
                        return zU.current[RU] === gU
                      }));
                    return (0, VU.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: qU()("CharacterPresetCard", {
                        CharacterPresetCardActive: EU,
                        CharacterPresetCardTryingOn: pU
                      }),
                      onClick: () => {
                        if (tU) ! function(UU) {
                          UR(UU) ? yU({}) : yU({
                            ...UU
                          })
                        }(gU);
                        else {
                          Object.keys(sU).length > 0 && yU({});
                          const UU = Object.entries(gU);
                          for (const [RU, gU] of UU) OU(RU, gU, !1), hU.setPlayerCosmetics(RU, gU);
                          if (null !== PU.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [RU, gU] of UU) PU.gameBridge.send("updateMyCosmetic", {
                              Xg: RU,
                              vg: gU
                            });
                          else mU.c.updateCosmetics(hU, UU.map((UU => {
                            let [RU, gU] = UU;
                            return {
                              Xg: RU,
                              vg: gU
                            }
                          }))).catch((UU => {
                            console.error("Failed to update cosmetics", UU)
                          }))
                        }
                      },
                      children: [(0, VU.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${RU}_preview.png)`
                        }
                      }), tU && (0, VU.jsx)(aU.c, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, RU)
                  }))
                })
              }, UU)
            }))]
          }), "emote" === RU && (0, VU.jsx)(dU, {
            equippedEmoteIds: (0, CU.f)(zU.current.emote),
            ownedPacks: RR,
            canBuy: gR,
            onUpdateLoadout: UU => {
              const RU = (0, CU.j)(UU);
              var gU;
              zU.current = {
                ...zU.current,
                emote: RU
              }, hU.setPlayerCosmetics("emote", RU), BU(), gU = RU, NU.current = gU, null !== LU.current && clearTimeout(LU.current), LU.current = setTimeout(lU, 350)
            },
            onEmoteSelected: AU,
            onEquipPreviewSkin: () => {
              ! function(UU, RU) {
                for (const gU of KU.r) "cape" !== gU && "nameColour" !== gU && "emote" !== gU && UU(gU, "skin" === gU ? "skin_preview" : `${gU}_none`, !1);
                RU()
              }(OU, BU)
            }
          }), "characters" !== RU && "emote" !== RU && (0, VU.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, cR.map((UU => {
              const RU = TR.get(UU);
              return (0, VU.jsx)(vU, {
                pack: UU,
                ownedPacks: RR,
                children: RU.map((RU => {
                  var tU;
                  let {
                    groupName: pU,
                    cosmetics: EU,
                    showSwatch: PU
                  } = RU;
                  const TU = pU ? null === (tU = wU.b[UU].colourGroups) || void 0 === tU ? void 0 : tU[pU] : void 0,
                    KU = `${UU}_${gU}_${pU}`;
                  return (0, VU.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [PU && TU && (0, VU.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...TU.colours.map(((UU, RU) => ({
                        color: UU,
                        index: RU
                      })))].sort(((UU, RU) => UU.color.order - RU.color.order)).map((RU => {
                        var tU;
                        let {
                          color: EU,
                          index: PU
                        } = RU;
                        return (0, VU.jsx)("div", {
                          className: qU()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (tU = kU[KU]) && void 0 !== tU ? tU : (0, wU.h)(TU.colours)) === PU
                          }),
                          style: {
                            backgroundColor: `rgb(${EU.rbg.join(",")})`
                          },
                          onClick: () => {
                            var RU;
                            FU((UU => ({
                              ...UU,
                              [KU]: PU
                            })));
                            const tU = sU[gU],
                              EU = tU ? (0, jU.j)(gU, tU) : null,
                              TU = (null === EU || void 0 === EU ? void 0 : EU.cosmeticPack) === UU,
                              qU = TU ? tU : zU.current[gU],
                              cU = TU ? EU : (0, jU.j)(gU, qU);
                            if ((null === cU || void 0 === cU ? void 0 : cU.cosmeticPack) !== UU) return;
                            if ((null !== (RU = null === cU || void 0 === cU ? void 0 : cU.colourGroup) && void 0 !== RU ? RU : null) !== pU) return;
                            const GU = (0, jU.g)(qU);
                            if (GU) {
                              const UU = `${gU}_${GU[0]}_${PU}`;
                              TU ? yU((RU => ({
                                ...RU,
                                [gU]: UU
                              }))) : OU(gU, UU, !0)
                            }
                          }
                        }, EU.rbg.join())
                      }))
                    }), EU.map((UU => {
                      const RU = UU === zU.current[gU],
                        tU = sU[gU] === UU,
                        pU = rU(gU, UU, RR);
                      let EU = !0;
                      return pU || RU || ("cape" !== gU || (0, IU.Vd)(hU.getPlayerRanks(), UU)) && ("nameColour" !== gU || hU.playerHasRank("super")) || (EU = !1), (0, VU.jsxs)("div", {
                        className: qU()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: RU && !tU,
                          TryingOnCharCustomPartWrapper: tU,
                          DisabledCharCustomPartWrapper: !EU,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === gU
                        }),
                        onClick: () => {
                          if (EU)
                            if (pU) yU((RU => {
                              if (RU[gU] === UU) {
                                const UU = {
                                  ...RU
                                };
                                return delete UU[gU], UU
                              }
                              return {
                                ...RU,
                                [gU]: UU
                              }
                            }));
                            else {
                              var RU;
                              if (sU[gU] && yU((UU => {
                                  const RU = {
                                    ...UU
                                  };
                                  return delete RU[gU], RU
                                })), UU === zU.current[gU]) return;
                              null !== (RU = DU.current) && void 0 !== RU && RU.isReady() && OU(gU, UU, !0)
                            }
                        },
                        children: ["profileEffect" === gU ? (0, VU.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, VU.jsx)(ZU.d, {
                            playerSocialPreview: (0, oU.c)(UU, {
                              name: hU.getPlayerName(),
                              cosmetics: hU.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, VU.jsx)("div", {
                          className: qU()("CharCustomPart", {
                            PixelatedImage: "cape" === gU
                          }),
                          style: (0, jU.j)(gU, UU).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,jU.j)(gU,UU).previewTex}.png)`
                          } : {
                            backgroundColor: cU.n[UU]
                          }
                        }), pU && (0, VU.jsx)(aU.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, UU)
                    }))]
                  }, null !== pU && void 0 !== pU ? pU : "ungrouped")
                }))
              }, UU)
            }))]
          }), (0, VU.jsx)(JU.CharacterPreview, {
            ref: DU,
            forcedCosmetics: sU,
            qT: iU.id,
            emotePlaySeq: iU.seq,
            onReady: () => {
              for (const UU of KU.r) OU(UU, zU.current[UU], !1)
            }
          })]
        })]
      })
    }))
  },
  40675: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      CharacterPreview: () => GU
    });
    var tU = gU(56),
      pU = gU(2533),
      EU = gU(1238),
      PU = gU(8447),
      TU = gU(9027),
      qU = gU(3308),
      KU = gU(1090);
    const cU = .6 * Math.PI,
      GU = (0, tU.memo)((0, tU.forwardRef)((function(UU, RU) {
        let {
          onReady: gU,
          onDrawn: GU,
          owner: jU = "other",
          framing: uU = "player",
          forcedCosmetics: CU,
          qT: hU,
          emotePlaySeq: QU,
          turntableFromYaw: eU = null
        } = UU;
        const WU = (0, tU.useRef)(null),
          {
            width: fU,
            height: xU
          } = (0, pU.d)(WU),
          mU = (0, tU.useRef)(null),
          IU = (0, tU.useRef)({}),
          JU = (0, tU.useRef)({}),
          [wU, nU] = (0, tU.useState)(!1),
          bU = (0, tU.useRef)(gU);
        bU.current = gU;
        const oU = (0, tU.useRef)(GU);
        oU.current = GU;
        const ZU = (0, tU.useRef)(null),
          aU = (0, tU.useRef)(!1),
          YU = (0, tU.useRef)(!1),
          BU = (0, tU.useCallback)((() => {
            const UU = mU.current;
            if (!UU || !oU.current || aU.current || !YU.current) return;
            const RU = {};
            ZU.current = RU, queueMicrotask((() => {
              if (ZU.current !== RU) return;
              const gU = Promise.all(EU.r.map((RU => UU.untilDrawn(RU)))).catch((UU => {
                  console.error("Failed to draw the character preview", UU)
                })),
                tU = new Promise((UU => {
                  setTimeout(UU, 1e4)
                }));
              Promise.race([gU, tU]).then((() => {
                var gU;
                mU.current !== UU || ZU.current !== RU || aU.current || (aU.current = !0, null === (gU = oU.current) || void 0 === gU || gU.call(oU))
              }))
            }))
          }), []);
        return (0, tU.useImperativeHandle)(RU, (() => {
          const UU = (UU, RU) => {
            var gU;
            (IU.current[UU] = RU, null !== CU && void 0 !== CU && CU[UU]) || (null === (gU = mU.current) || void 0 === gU || gU.setCosmetic(UU, RU), BU())
          };
          return {
            updateCosmetic: UU,
            setAllCosmetics(RU) {
              for (const tU of EU.r) {
                var gU;
                UU(tU, null !== (gU = RU[tU]) && void 0 !== gU ? gU : (0, PU.c)(tU))
              }
            },
            isReady() {
              var UU, RU;
              return null !== (UU = null === (RU = mU.current) || void 0 === RU ? void 0 : RU.isReady()) && void 0 !== UU && UU
            },
            resetCamera() {
              var UU;
              null === (UU = mU.current) || void 0 === UU || UU.resetCamera()
            },
            setOrbit(UU) {
              var RU;
              null === (RU = mU.current) || void 0 === RU || RU.setOrbit(UU)
            },
            async ensureReadyForCapture(UU) {
              var RU;
              await (null === (RU = mU.current) || void 0 === RU ? void 0 : RU.untilDrawn(UU))
            },
            getDevTools() {
              var UU;
              return null !== (UU = mU.current) && void 0 !== UU && UU.isReady() ? mU.current.dev : null
            }
          }
        }), [CU, BU]), (0, tU.useEffect)((() => {
          const UU = qU.c.register(jU),
            RU = TU.g.openCharacter(WU.current, uU);
          mU.current = RU;
          let gU = !0;
          return RU.ready.then((() => {
            gU && (nU(!0), bU.current())
          })).catch((UU => {
            console.error("Failed to set up the character preview", UU)
          })), () => {
            gU = !1, UU(), RU.resetCamera(), RU.close(), mU.current = null
          }
        }), []), (0, tU.useEffect)((() => {
          fU <= 0 || xU <= 0 || mU.current.resize(fU, xU)
        }), [fU, xU]), (0, tU.useEffect)((() => {
          if (!wU) return;
          const UU = JU.current;
          for (const RU of EU.r) {
            const gU = null === CU || void 0 === CU ? void 0 : CU[RU],
              tU = UU[RU];
            gU && gU !== tU ? mU.current.setCosmetic(RU, gU) : !gU && tU && IU.current[RU] && mU.current.setCosmetic(RU, IU.current[RU])
          }
          JU.current = {
            ...CU
          }, YU.current = !0, BU()
        }), [CU, wU, BU]), (0, tU.useEffect)((() => {
          wU && mU.current.playEmote(null !== hU && void 0 !== hU ? hU : null)
        }), [hU, QU, wU]), (0, tU.useEffect)((() => {
          if (!wU || null === eU) return;
          const UU = mU.current,
            {
              pitch: RU,
              radius: gU
            } = TU.e[uU];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return UU.setOrbit({
            yaw: eU + cU,
            pitch: RU,
            radius: gU
          }), () => {
            UU.resetCamera()
          };
          const tU = performance.now();
          let pU = 0;
          const EU = PU => {
            UU.setOrbit({
              yaw: eU + (PU - tU) / 6e3 * 2 * Math.PI,
              pitch: RU,
              radius: gU
            }), pU = requestAnimationFrame(EU)
          };
          return pU = requestAnimationFrame(EU), () => {
            cancelAnimationFrame(pU), UU.resetCamera()
          }
        }), [wU, eU]), (0, KU.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: WU
        })
      })))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);