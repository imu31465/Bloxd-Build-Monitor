export const id = 281;
export const ids = [281, 282];
export const modules = {
  40345: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      CharacterCustomisationUI: () => TD
    });
    var ID = cD(53),
      pD = cD(2790),
      iD = cD(1120),
      fD = cD(1905),
      bD = cD(1049),
      QD = cD.n(bD),
      wD = cD(1240),
      SD = cD(611),
      BD = cD(1192),
      yD = cD(2192),
      MD = cD(1562),
      tD = cD(8520),
      ZD = cD(2195),
      oD = cD(2899),
      vD = cD(1954),
      ND = cD(1442),
      gD = cD(2228),
      XD = cD(16),
      mD = cD(1497),
      nD = cD(326),
      OD = cD(40352),
      PD = cD(1556),
      HD = cD(2268),
      UD = cD(2788),
      xD = cD(2112),
      qD = cD(2466),
      JD = cD(1064);
    cD(9074), cD(2901);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var KD = cD(2238),
      aD = cD(1356),
      VD = cD(1093);

    function zD(DD, CD, cD) {
      return (0, yD.m)(DD, CD).purchasable && !(0, HD.s)(DD, CD, cD)
    }

    function jD(DD, CD) {
      return Object.entries(DD).some((DD => {
        let [cD, ID] = DD;
        return zD(cD, ID, CD)
      }))
    }

    function lD(DD) {
      var CD;
      let {
        pack: cD,
        ownedPacks: ID,
        showStoreLink: pD = !1,
        children: iD
      } = DD;
      const {
        t: fD
      } = (0, BD.F)(), bD = PD.c[cD], wD = bD.purchasable && !ID.includes(cD) && PD.r.includes(cD), SD = UD.i[cD];
      return (0, VD.jsxs)("div", {
        className: QD()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: wD
        }),
        children: [SD && (0, VD.jsx)(SD, {}), (0, VD.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, VD.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (CD = bD.displayName) && void 0 !== CD ? CD : cD
          }), (wD || pD) && (0, VD.jsxs)(ND.F, {
            onClick: () => {
              wD ? (0, UD.g)(cD) : (0, gD.p)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, VD.jsx)(JD.c, {
              name: "store"
            }), " ", fD("general:viewInShop")]
          })]
        }), wD && "bee" === cD && (0, VD.jsx)(UD.d, {}), iD]
      })
    }

    function LD(DD) {
      let {
        equippedEmoteIds: CD,
        ownedPacks: cD,
        canBuy: ID,
        onUpdateLoadout: pD,
        onEmoteSelected: iD,
        onEquipPreviewSkin: fD
      } = DD;
      const {
        t: bD
      } = (0, BD.F)(), SD = new Set(CD), MD = new Map, tD = Object.keys(yD.f.emote).sort(((DD, CD) => {
        var cD, ID, pD, iD;
        return (null !== (cD = null === (ID = (0, yD.k)("emote", DD)) || void 0 === ID ? void 0 : ID.clientIdx) && void 0 !== cD ? cD : 0) - (null !== (pD = null === (iD = (0, yD.k)("emote", CD)) || void 0 === iD ? void 0 : iD.clientIdx) && void 0 !== pD ? pD : 0)
      })).filter((DD => {
        const CD = (0, yD.m)("emote", DD),
          pD = (0, HD.s)("emote", DD, cD);
        return !(CD.purchasable && !pD && !ID) && (CD.clientSelectable || pD)
      }));
      for (const QD of tD) {
        const DD = (0, yD.k)("emote", QD).cosmeticPack;
        MD.has(DD) || MD.set(DD, []), MD.get(DD).push(QD)
      }
      const oD = Array.from(MD.keys());
      return (0, VD.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, VD.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, VD.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: bD("emotes:equippedCount", {
              count: CD.length,
              max: wD.l
            })
          }), (0, VD.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: bD("emotes:loadoutHint")
          })]
        }), oD.map((DD => {
          const ID = MD.get(DD);
          return (0, VD.jsx)(lD, {
            pack: DD,
            ownedPacks: cD,
            children: (0, VD.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: ID.map((DD => {
                var ID;
                const fD = CD.indexOf(DD),
                  BD = -1 !== fD,
                  yD = CD.length >= wD.l,
                  MD = zD("emote", DD, cD),
                  tD = MD || !BD && yD,
                  oD = (0, ZD.h)(DD);
                return (0, VD.jsxs)("div", {
                  className: QD()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: BD
                  }),
                  onClick: () => {
                    iD(DD)
                  },
                  children: [(0, VD.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, VD.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${DD}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, VD.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (ID = null === oD || void 0 === oD ? void 0 : oD.displayName) && void 0 !== ID ? ID : DD
                    })]
                  }), (0, VD.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [BD && (0, VD.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: fD + 1
                    }), MD && (0, VD.jsx)(JD.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, VD.jsx)(aD.f, {
                      tooltipInner: (0, VD.jsx)(VD.Fragment, {
                        children: bD(BD ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, VD.jsx)("div", {
                        className: QD()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: tD,
                          EmoteCustomPartToggleEquipped: BD
                        }),
                        onClick: cD => {
                          cD.stopPropagation(), tD || function(DD) {
                            SD.has(DD) ? pD(CD.filter((CD => CD !== DD))) : CD.length >= wD.l || pD([...CD, DD])
                          }(DD)
                        },
                        children: (0, VD.jsx)(JD.c, {
                          name: BD ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, DD)
              }))
            })
          }, DD)
        }))]
      })
    }
    const TD = (0, ID.memo)((function(DD) {
      let {
        selectedTab: CD
      } = DD;
      const cD = "characters" === CD ? "skin" : CD,
        {
          t: bD
        } = (0, BD.F)(),
        {
          userContext: ZD,
          isUserContextUpdating: UD
        } = (0, iD.c)(),
        aD = (0, pD.b)(),
        {
          gameState: TD,
          initSdkSelectorFinished: GD
        } = (0, XD.o)(["gameState", "initSdkSelectorFinished"]),
        [RD, kD] = (0, ID.useState)({}),
        [dD, YD] = (0, ID.useState)({}),
        {
          previewEmote: WD,
          triggerEmote: sD
        } = (0, oD.c)(),
        ED = (0, ID.useRef)(wD.u.reduce(((DD, CD) => (DD[CD] = (0, tD.b)(CD), DD)), {})),
        eD = (0, ID.useRef)(!1),
        uD = (0, ID.useRef)(null),
        hD = (0, ID.useRef)(null),
        rD = (0, ID.useRef)(null);

      function AD() {
        null !== hD.current && (clearTimeout(hD.current), hD.current = null);
        const DD = rD.current;
        if (null === DD) return;
        rD.current = null;
        const CD = {
          Gc: "emote",
          Rc: DD
        };
        null !== fD.gameBridge.latest("connectedGame").websocketUrl ? fD.gameBridge.send("updateMyCosmetic", CD) : mD.c.updateCosmetics(ZD, [CD]).catch((DD => {
          console.error("Failed to update emote loadout", DD)
        }))
      }

      function FD(DD, CD, cD) {
        var ID, pD, iD;
        if (ED.current = {
            ...ED.current,
            [DD]: CD
          }, aD(), cD) {
          const cD = {
            Gc: DD,
            Rc: CD
          };
          null !== fD.gameBridge.latest("connectedGame").websocketUrl ? fD.gameBridge.send("updateMyCosmetic", cD) : mD.c.updateCosmetics(ZD, [cD]).catch((DD => {
            console.error("Failed to update cosmetic", DD)
          })), ZD.setPlayerCosmetics(DD, CD)
        }
        const bD = (0, yD.k)(DD, CD);
        if (null !== bD && void 0 !== bD && bD.colourGroup && null !== (ID = PD.c[bD.cosmeticPack].colourGroups) && void 0 !== ID && null !== (pD = ID[bD.colourGroup]) && void 0 !== pD && pD.showSwatchSelector) {
          const cD = (0, yD.j)(CD);
          cD && YD((CD => ({
            ...CD,
            [`${bD.cosmeticPack}_${DD}_${bD.colourGroup}`]: parseInt(cD[1])
          })))
        }
        null !== (iD = uD.current) && void 0 !== iD && iD.isReady() && uD.current.updateCosmetic(DD, CD)
      }

      function DC(DD) {
        return Object.entries(DD).every((DD => {
          let [CD, cD] = DD;
          return RD[CD] === cD
        }))
      }(0, vD.c)("cosmeticsUpdated", (DD => {
        let CD = !1;
        for (const {
            local: cD,
            Gc: ID,
            Rc: pD
          }
          of DD) {
          if (!cD) return;
          CD = !0, eD.current || FD(ID, pD, !1), aD()
        }
        CD && (eD.current = !0)
      })), (0, ID.useEffect)((() => {
        if (!UD) {
          for (const [DD, CD] of Object.entries(ZD.getPlayerCosmetics())) FD(DD, CD, !1);
          aD()
        }
      }), [UD]), (0, ID.useEffect)((() => () => {
        AD()
      }), []);
      const CC = ZD.getOwnedCosmeticPacks(),
        cC = (0, KD.purchasesAllowed)(),
        IC = Object.keys(yD.f[cD]).filter((DD => {
          const CD = (0, yD.m)(cD, DD),
            ID = (0, HD.s)(cD, DD, CC);
          return !(CD.purchasable && !ID && !cC) && (CD.clientSelectable || ID)
        })).sort(((DD, CD) => {
          var ID, pD, iD, fD;
          return (null !== (ID = null === (pD = (0, yD.k)(cD, DD)) || void 0 === pD ? void 0 : pD.clientIdx) && void 0 !== ID ? ID : 0) - (null !== (iD = null === (fD = (0, yD.k)(cD, CD)) || void 0 === fD ? void 0 : fD.clientIdx) && void 0 !== iD ? iD : 0)
        })),
        pC = new Map;
      for (const ID of IC) {
        var iC;
        const DD = null === (iC = (0, yD.k)(cD, ID)) || void 0 === iC ? void 0 : iC.cosmeticPack;
        pC.has(DD) || pC.set(DD, []), pC.get(DD).push(ID)
      }
      const fC = function(DD, CD) {
          const cD = new Set,
            ID = new Set;
          for (const [pD, iD] of Object.entries(yD.f[DD])) {
            if (void 0 === iD.colourGroup) continue;
            const fD = `${iD.cosmeticPack}_${iD.colourGroup}`;
            (zD(DD, pD, CD) ? ID : cD).add(fD)
          }
          return new Set([...cD].filter((DD => ID.has(DD))))
        }(cD, CC),
        bC = new Map;
      for (const [ID, pD] of pC) {
        const DD = [],
          CD = new Map;
        for (const ID of pD) {
          var QC, wC;
          const pD = null !== (QC = null === (wC = (0, yD.k)(cD, ID)) || void 0 === wC ? void 0 : wC.colourGroup) && void 0 !== QC ? QC : null;
          CD.has(pD) || (CD.set(pD, []), DD.push(pD)), CD.get(pD).push(ID)
        }
        const iD = DD.map((DD => {
          var pD;
          const iD = CD.get(DD),
            fD = DD ? null === (pD = PD.c[ID].colourGroups) || void 0 === pD ? void 0 : pD[DD] : void 0,
            bD = !0 === (null === fD || void 0 === fD ? void 0 : fD.showSwatchSelector) && !fC.has(`${ID}_${DD}`);
          if (bD && fD) {
            var QD;
            const CD = null !== (QD = dD[`${ID}_${cD}_${DD}`]) && void 0 !== QD ? QD : (0, PD.f)(fD.colours);
            return {
              groupName: DD,
              showSwatch: bD,
              cosmetics: iD.filter((DD => {
                const cD = (0, yD.j)(DD);
                return !cD || CD.toString() === cD[1].toString()
              }))
            }
          }
          return {
            groupName: DD,
            cosmetics: iD,
            showSwatch: bD
          }
        }));
        bC.set(ID, iD)
      }
      const SC = Array.from(pC.keys()),
        BC = new Map;
      for (const [ID, pD] of Object.entries(MD.c)) {
        const DD = PD.c[pD.cosmeticPack],
          CD = !jD(pD.cosmetics, CC),
          cD = PD.l.some((DD => (0, PD.e)(DD) === ID));
        (DD.clientSelectable || cD || CD) && ((!DD.purchasable || CD || cC) && (BC.has(pD.cosmeticPack) || BC.set(pD.cosmeticPack, []), BC.get(pD.cosmeticPack).push([ID, pD])))
      }
      const yC = Array.from(BC.keys());
      return (0, VD.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === cD || "nameColour" === cD) && !ZD.playerHasRank("super") && (0, VD.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, VD.jsx)(JD.c, {
            name: "bolt"
          }), bD("homePage:unlockWithSuperRank"), cC && (0, VD.jsx)(ND.o, {
            onClick: () => {
              (0, gD.p)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: bD("general:getItNow")
          })]
        }), (0, VD.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === CD && (0, VD.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, yC.map((DD => {
              const CD = BC.get(DD);
              return (0, VD.jsx)(lD, {
                pack: DD,
                ownedPacks: CC,
                showStoreLink: !PD.o.includes(DD) && CD.some((DD => {
                  let [, {
                    cosmetics: CD
                  }] = DD;
                  return jD(CD, CC)
                })),
                children: (0, VD.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: CD.map((DD => {
                    let [CD, {
                      cosmetics: cD
                    }] = DD;
                    const ID = jD(cD, CC),
                      pD = DC(cD),
                      iD = !pD && Object.entries(cD).every((DD => {
                        let [CD, cD] = DD;
                        return ED.current[CD] === cD
                      }));
                    return (0, VD.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: QD()("CharacterPresetCard", {
                        CharacterPresetCardActive: iD,
                        CharacterPresetCardTryingOn: pD
                      }),
                      onClick: () => {
                        if (ID) ! function(DD) {
                          DC(DD) ? kD({}) : kD({
                            ...DD
                          })
                        }(cD);
                        else {
                          Object.keys(RD).length > 0 && kD({});
                          const DD = Object.entries(cD);
                          for (const [CD, cD] of DD) FD(CD, cD, !1), ZD.setPlayerCosmetics(CD, cD);
                          if (null !== fD.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [CD, cD] of DD) fD.gameBridge.send("updateMyCosmetic", {
                              Gc: CD,
                              Rc: cD
                            });
                          else mD.c.updateCosmetics(ZD, DD.map((DD => {
                            let [CD, cD] = DD;
                            return {
                              Gc: CD,
                              Rc: cD
                            }
                          }))).catch((DD => {
                            console.error("Failed to update cosmetics", DD)
                          }))
                        }
                      },
                      children: [(0, VD.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${CD}_preview.png)`
                        }
                      }), ID && (0, VD.jsx)(JD.c, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, CD)
                  }))
                })
              }, DD)
            }))]
          }), "emote" === CD && (0, VD.jsx)(LD, {
            equippedEmoteIds: (0, tD.f)(ED.current.emote),
            ownedPacks: CC,
            canBuy: cC,
            onUpdateLoadout: DD => {
              const CD = (0, tD.g)(DD);
              var cD;
              ED.current = {
                ...ED.current,
                emote: CD
              }, ZD.setPlayerCosmetics("emote", CD), aD(), cD = CD, rD.current = cD, null !== hD.current && clearTimeout(hD.current), hD.current = setTimeout(AD, 350)
            },
            onEmoteSelected: sD,
            onEquipPreviewSkin: () => {
              ! function(DD, CD) {
                for (const cD of wD.u) "cape" !== cD && "nameColour" !== cD && "emote" !== cD && DD(cD, "skin" === cD ? "skin_preview" : `${cD}_none`, !1);
                CD()
              }(FD, aD)
            }
          }), "characters" !== CD && "emote" !== CD && (0, VD.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, SC.map((DD => {
              const CD = bC.get(DD);
              return (0, VD.jsx)(lD, {
                pack: DD,
                ownedPacks: CC,
                children: CD.map((CD => {
                  var ID;
                  let {
                    groupName: pD,
                    cosmetics: iD,
                    showSwatch: fD
                  } = CD;
                  const bD = pD ? null === (ID = PD.c[DD].colourGroups) || void 0 === ID ? void 0 : ID[pD] : void 0,
                    wD = `${DD}_${cD}_${pD}`;
                  return (0, VD.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [fD && bD && (0, VD.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...bD.colours.map(((DD, CD) => ({
                        color: DD,
                        index: CD
                      })))].sort(((DD, CD) => DD.color.order - CD.color.order)).map((CD => {
                        var ID;
                        let {
                          color: iD,
                          index: fD
                        } = CD;
                        return (0, VD.jsx)("div", {
                          className: QD()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (ID = dD[wD]) && void 0 !== ID ? ID : (0, PD.f)(bD.colours)) === fD
                          }),
                          style: {
                            backgroundColor: `rgb(${iD.rbg.join(",")})`
                          },
                          onClick: () => {
                            var CD;
                            YD((DD => ({
                              ...DD,
                              [wD]: fD
                            })));
                            const ID = RD[cD],
                              iD = ID ? (0, yD.k)(cD, ID) : null,
                              bD = (null === iD || void 0 === iD ? void 0 : iD.cosmeticPack) === DD,
                              QD = bD ? ID : ED.current[cD],
                              SD = bD ? iD : (0, yD.k)(cD, QD);
                            if ((null === SD || void 0 === SD ? void 0 : SD.cosmeticPack) !== DD) return;
                            if ((null !== (CD = null === SD || void 0 === SD ? void 0 : SD.colourGroup) && void 0 !== CD ? CD : null) !== pD) return;
                            const BD = (0, yD.j)(QD);
                            if (BD) {
                              const DD = `${cD}_${BD[0]}_${fD}`;
                              bD ? kD((CD => ({
                                ...CD,
                                [cD]: DD
                              }))) : FD(cD, DD, !0)
                            }
                          }
                        }, iD.rbg.join())
                      }))
                    }), iD.map((DD => {
                      const CD = DD === ED.current[cD],
                        ID = RD[cD] === DD,
                        pD = zD(cD, DD, CC);
                      let iD = !0;
                      return pD || CD || ("cape" !== cD || (0, nD.Kd)(ZD.getPlayerRanks(), DD)) && ("nameColour" !== cD || ZD.playerHasRank("super")) || (iD = !1), (0, VD.jsxs)("div", {
                        className: QD()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: CD && !ID,
                          TryingOnCharCustomPartWrapper: ID,
                          DisabledCharCustomPartWrapper: !iD,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === cD
                        }),
                        onClick: () => {
                          if (iD)
                            if (pD) kD((CD => {
                              if (CD[cD] === DD) {
                                const DD = {
                                  ...CD
                                };
                                return delete DD[cD], DD
                              }
                              return {
                                ...CD,
                                [cD]: DD
                              }
                            }));
                            else {
                              var CD;
                              if (RD[cD] && kD((DD => {
                                  const CD = {
                                    ...DD
                                  };
                                  return delete CD[cD], CD
                                })), DD === ED.current[cD]) return;
                              null !== (CD = uD.current) && void 0 !== CD && CD.isReady() && FD(cD, DD, !0)
                            }
                        },
                        children: ["profileEffect" === cD ? (0, VD.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, VD.jsx)(qD.h, {
                            playerSocialPreview: (0, xD.e)(DD, {
                              name: ZD.getPlayerName(),
                              cosmetics: ZD.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, VD.jsx)("div", {
                          className: QD()("CharCustomPart", {
                            PixelatedImage: "cape" === cD
                          }),
                          style: (0, yD.k)(cD, DD).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,yD.k)(cD,DD).previewTex}.png)`
                          } : {
                            backgroundColor: SD.p[DD]
                          }
                        }), pD && (0, VD.jsx)(JD.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, DD)
                    }))]
                  }, null !== pD && void 0 !== pD ? pD : "ungrouped")
                }))
              }, DD)
            }))]
          }), (0, VD.jsx)(OD.CharacterPreview, {
            ref: uD,
            forcedCosmetics: RD,
            Pb: WD.id,
            emotePlaySeq: WD.seq,
            onReady: () => {
              for (const DD of wD.u) FD(DD, ED.current[DD], !1)
            }
          })]
        })]
      })
    }))
  },
  40352: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      CharacterPreview: () => BD
    });
    var ID = cD(53),
      pD = cD(2621),
      iD = cD(1240),
      fD = cD(8520),
      bD = cD(9074),
      QD = cD(3447),
      wD = cD(1093);
    const SD = .6 * Math.PI,
      BD = (0, ID.memo)((0, ID.forwardRef)((function(DD, CD) {
        let {
          onReady: cD,
          onDrawn: BD,
          owner: yD = "other",
          framing: MD = "player",
          forcedCosmetics: tD,
          Pb: ZD,
          emotePlaySeq: oD,
          turntableFromYaw: vD = null
        } = DD;
        const ND = (0, ID.useRef)(null),
          {
            width: gD,
            height: XD
          } = (0, pD.e)(ND),
          mD = (0, ID.useRef)(null),
          nD = (0, ID.useRef)({}),
          OD = (0, ID.useRef)({}),
          [PD, HD] = (0, ID.useState)(!1),
          UD = (0, ID.useRef)(cD);
        UD.current = cD;
        const xD = (0, ID.useRef)(BD);
        xD.current = BD;
        const qD = (0, ID.useRef)(null),
          JD = (0, ID.useRef)(!1),
          KD = (0, ID.useRef)(!1),
          aD = (0, ID.useCallback)((() => {
            const DD = mD.current;
            if (!DD || !xD.current || JD.current || !KD.current) return;
            const CD = {};
            qD.current = CD, queueMicrotask((() => {
              if (qD.current !== CD) return;
              const cD = Promise.all(iD.u.map((CD => DD.untilDrawn(CD)))).catch((DD => {
                  console.error("Failed to draw the character preview", DD)
                })),
                ID = new Promise((DD => {
                  setTimeout(DD, 1e4)
                }));
              Promise.race([cD, ID]).then((() => {
                var cD;
                mD.current !== DD || qD.current !== CD || JD.current || (JD.current = !0, null === (cD = xD.current) || void 0 === cD || cD.call(xD))
              }))
            }))
          }), []);
        return (0, ID.useImperativeHandle)(CD, (() => {
          const DD = (DD, CD) => {
            var cD;
            (nD.current[DD] = CD, null !== tD && void 0 !== tD && tD[DD]) || (null === (cD = mD.current) || void 0 === cD || cD.setCosmetic(DD, CD), aD())
          };
          return {
            updateCosmetic: DD,
            setAllCosmetics(CD) {
              for (const ID of iD.u) {
                var cD;
                DD(ID, null !== (cD = CD[ID]) && void 0 !== cD ? cD : (0, fD.b)(ID))
              }
            },
            isReady() {
              var DD, CD;
              return null !== (DD = null === (CD = mD.current) || void 0 === CD ? void 0 : CD.isReady()) && void 0 !== DD && DD
            },
            resetCamera() {
              var DD;
              null === (DD = mD.current) || void 0 === DD || DD.resetCamera()
            },
            setOrbit(DD) {
              var CD;
              null === (CD = mD.current) || void 0 === CD || CD.setOrbit(DD)
            },
            async ensureReadyForCapture(DD) {
              var CD;
              await (null === (CD = mD.current) || void 0 === CD ? void 0 : CD.untilDrawn(DD))
            },
            getDevTools() {
              var DD;
              return null !== (DD = mD.current) && void 0 !== DD && DD.isReady() ? mD.current.dev : null
            }
          }
        }), [tD, aD]), (0, ID.useEffect)((() => {
          const DD = QD.e.register(yD),
            CD = bD.f.openCharacter(ND.current, MD);
          mD.current = CD;
          let cD = !0;
          return CD.ready.then((() => {
            cD && (HD(!0), UD.current())
          })).catch((DD => {
            console.error("Failed to set up the character preview", DD)
          })), () => {
            cD = !1, DD(), CD.resetCamera(), CD.close(), mD.current = null
          }
        }), []), (0, ID.useEffect)((() => {
          gD <= 0 || XD <= 0 || mD.current.resize(gD, XD)
        }), [gD, XD]), (0, ID.useEffect)((() => {
          if (!PD) return;
          const DD = OD.current;
          for (const CD of iD.u) {
            const cD = null === tD || void 0 === tD ? void 0 : tD[CD],
              ID = DD[CD];
            cD && cD !== ID ? mD.current.setCosmetic(CD, cD) : !cD && ID && nD.current[CD] && mD.current.setCosmetic(CD, nD.current[CD])
          }
          OD.current = {
            ...tD
          }, KD.current = !0, aD()
        }), [tD, PD, aD]), (0, ID.useEffect)((() => {
          PD && mD.current.playEmote(null !== ZD && void 0 !== ZD ? ZD : null)
        }), [ZD, oD, PD]), (0, ID.useEffect)((() => {
          if (!PD || null === vD) return;
          const DD = mD.current,
            {
              pitch: CD,
              radius: cD
            } = bD.c[MD];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return DD.setOrbit({
            yaw: vD + SD,
            pitch: CD,
            radius: cD
          }), () => {
            DD.resetCamera()
          };
          const ID = performance.now();
          let pD = 0;
          const iD = fD => {
            DD.setOrbit({
              yaw: vD + (fD - ID) / 6e3 * 2 * Math.PI,
              pitch: CD,
              radius: cD
            }), pD = requestAnimationFrame(iD)
          };
          return pD = requestAnimationFrame(iD), () => {
            cancelAnimationFrame(pD), DD.resetCamera()
          }
        }), [PD, vD]), (0, wD.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: ND
        })
      })))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);