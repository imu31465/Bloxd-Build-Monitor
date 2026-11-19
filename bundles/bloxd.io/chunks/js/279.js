export const id = 279;
export const ids = [279, 280];
export const modules = {
  39967: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      CharacterCustomisationUI: () => HT
    });
    var iT = IT(46),
      zT = IT(2610),
      kT = IT(1110),
      WT = IT(1751),
      XT = IT(1042),
      BT = IT.n(XT),
      FT = IT(1214),
      ST = IT(596),
      DT = IT(1171),
      LT = IT(2026),
      xT = IT(2134),
      cT = IT(8248),
      KT = IT(2029),
      MT = IT(2667),
      rT = IT(1784),
      AT = IT(1408),
      gT = IT(2071),
      hT = IT(12),
      wT = IT(1451),
      mT = IT(314),
      eT = IT(39976),
      RT = IT(1509),
      uT = IT(2150),
      vT = IT(2603),
      ET = IT(1957),
      fT = IT(2303),
      CT = IT(1055);
    IT(35795), IT(2675);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var jT = IT(2084),
      JT = IT(1337),
      UT = IT(1083);

    function aT(TT, oT, IT) {
      return (0, LT.i)(TT, oT).purchasable && !(0, uT.i)(TT, oT, IT)
    }

    function YT(TT, oT) {
      return Object.entries(TT).some((TT => {
        let [IT, iT] = TT;
        return aT(IT, iT, oT)
      }))
    }

    function QT(TT) {
      var oT;
      let {
        pack: IT,
        ownedPacks: iT,
        showStoreLink: zT = !1,
        children: kT
      } = TT;
      const {
        t: WT
      } = (0, DT.t)(), XT = RT.b[IT], FT = XT.purchasable && !iT.includes(IT) && RT.j.includes(IT), ST = vT.i[IT];
      return (0, UT.jsxs)("div", {
        className: BT()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: FT
        }),
        children: [ST && (0, UT.jsx)(ST, {}), (0, UT.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, UT.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (oT = XT.displayName) && void 0 !== oT ? oT : IT
          }), (FT || zT) && (0, UT.jsxs)(AT.y, {
            onClick: () => {
              FT ? (0, vT.g)(IT) : (0, gT.k)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, UT.jsx)(CT.e, {
              name: "store"
            }), " ", WT("general:viewInShop")]
          })]
        }), FT && "bee" === IT && (0, UT.jsx)(vT.b, {}), kT]
      })
    }

    function OT(TT) {
      let {
        equippedEmoteIds: oT,
        ownedPacks: IT,
        canBuy: iT,
        onUpdateLoadout: zT,
        onEmoteSelected: kT,
        onEquipPreviewSkin: WT
      } = TT;
      const {
        t: XT
      } = (0, DT.t)(), ST = new Set(oT), xT = new Map, cT = Object.keys(LT.c.emote).sort(((TT, oT) => {
        var IT, iT, zT, kT;
        return (null !== (IT = null === (iT = (0, LT.g)("emote", TT)) || void 0 === iT ? void 0 : iT.clientIdx) && void 0 !== IT ? IT : 0) - (null !== (zT = null === (kT = (0, LT.g)("emote", oT)) || void 0 === kT ? void 0 : kT.clientIdx) && void 0 !== zT ? zT : 0)
      })).filter((TT => {
        const oT = (0, LT.i)("emote", TT),
          zT = (0, uT.i)("emote", TT, IT);
        return !(oT.purchasable && !zT && !iT) && (oT.clientSelectable || zT)
      }));
      for (const BT of cT) {
        const TT = (0, LT.g)("emote", BT).cosmeticPack;
        xT.has(TT) || xT.set(TT, []), xT.get(TT).push(BT)
      }
      const MT = Array.from(xT.keys());
      return (0, UT.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, UT.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, UT.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: XT("emotes:equippedCount", {
              count: oT.length,
              max: FT.k
            })
          }), (0, UT.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: XT("emotes:loadoutHint")
          })]
        }), MT.map((TT => {
          const iT = xT.get(TT);
          return (0, UT.jsx)(QT, {
            pack: TT,
            ownedPacks: IT,
            children: (0, UT.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: iT.map((TT => {
                var iT;
                const WT = oT.indexOf(TT),
                  DT = -1 !== WT,
                  LT = oT.length >= FT.k,
                  xT = aT("emote", TT, IT),
                  cT = xT || !DT && LT,
                  MT = (0, KT.g)(TT);
                return (0, UT.jsxs)("div", {
                  className: BT()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: DT
                  }),
                  onClick: () => {
                    kT(TT)
                  },
                  children: [(0, UT.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, UT.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${TT}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, UT.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (iT = null === MT || void 0 === MT ? void 0 : MT.displayName) && void 0 !== iT ? iT : TT
                    })]
                  }), (0, UT.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [DT && (0, UT.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: WT + 1
                    }), xT && (0, UT.jsx)(CT.e, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, UT.jsx)(JT.e, {
                      tooltipInner: (0, UT.jsx)(UT.Fragment, {
                        children: XT(DT ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, UT.jsx)("div", {
                        className: BT()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: cT,
                          EmoteCustomPartToggleEquipped: DT
                        }),
                        onClick: IT => {
                          IT.stopPropagation(), cT || function(TT) {
                            ST.has(TT) ? zT(oT.filter((oT => oT !== TT))) : oT.length >= FT.k || zT([...oT, TT])
                          }(TT)
                        },
                        children: (0, UT.jsx)(CT.e, {
                          name: DT ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, TT)
              }))
            })
          }, TT)
        }))]
      })
    }
    const HT = (0, iT.memo)((function(TT) {
      let {
        selectedTab: oT
      } = TT;
      const IT = "characters" === oT ? "skin" : oT,
        {
          t: XT
        } = (0, DT.t)(),
        {
          userContext: KT,
          isUserContextUpdating: vT
        } = (0, kT.b)(),
        JT = (0, zT.c)(),
        {
          gameState: HT,
          initSdkSelectorFinished: nT
        } = (0, hT.k)(["gameState", "initSdkSelectorFinished"]),
        [qT, ZT] = (0, iT.useState)({}),
        [lT, sT] = (0, iT.useState)({}),
        {
          previewEmote: tT,
          triggerEmote: GT
        } = (0, MT.d)(),
        pT = (0, iT.useRef)(FT.v.reduce(((TT, oT) => (TT[oT] = (0, cT.d)(oT), TT)), {})),
        bT = (0, iT.useRef)(!1),
        yT = (0, iT.useRef)(null),
        NT = (0, iT.useRef)(null),
        PT = (0, iT.useRef)(null);

      function dT() {
        null !== NT.current && (clearTimeout(NT.current), NT.current = null);
        const TT = PT.current;
        if (null === TT) return;
        PT.current = null;
        const oT = {
          oT: "emote",
          IT: TT
        };
        null !== WT.gameBridge.latest("connectedGame").websocketUrl ? WT.gameBridge.send("updateMyCosmetic", oT) : wT.e.updateCosmetics(KT, [oT]).catch((TT => {
          console.error("Failed to update emote loadout", TT)
        }))
      }

      function VT(TT, oT, IT) {
        var iT, zT, kT;
        if (pT.current = {
            ...pT.current,
            [TT]: oT
          }, JT(), IT) {
          const IT = {
            oT: TT,
            IT: oT
          };
          null !== WT.gameBridge.latest("connectedGame").websocketUrl ? WT.gameBridge.send("updateMyCosmetic", IT) : wT.e.updateCosmetics(KT, [IT]).catch((TT => {
            console.error("Failed to update cosmetic", TT)
          })), KT.setPlayerCosmetics(TT, oT)
        }
        const XT = (0, LT.g)(TT, oT);
        if (null !== XT && void 0 !== XT && XT.colourGroup && null !== (iT = RT.b[XT.cosmeticPack].colourGroups) && void 0 !== iT && null !== (zT = iT[XT.colourGroup]) && void 0 !== zT && zT.showSwatchSelector) {
          const IT = (0, LT.f)(oT);
          IT && sT((oT => ({
            ...oT,
            [`${XT.cosmeticPack}_${TT}_${XT.colourGroup}`]: parseInt(IT[1])
          })))
        }
        null !== (kT = yT.current) && void 0 !== kT && kT.isReady() && yT.current.updateCosmetic(TT, oT)
      }

      function To(TT) {
        return Object.entries(TT).every((TT => {
          let [oT, IT] = TT;
          return qT[oT] === IT
        }))
      }(0, rT.c)("cosmeticsUpdated", (TT => {
        let oT = !1;
        for (const {
            local: IT,
            oT: iT,
            IT: zT
          }
          of TT) {
          if (!IT) return;
          oT = !0, bT.current || VT(iT, zT, !1), JT()
        }
        oT && (bT.current = !0)
      })), (0, iT.useEffect)((() => {
        if (!vT) {
          for (const [TT, oT] of Object.entries(KT.getPlayerCosmetics())) VT(TT, oT, !1);
          JT()
        }
      }), [vT]), (0, iT.useEffect)((() => () => {
        dT()
      }), []);
      const oo = KT.getOwnedCosmeticPacks(),
        Io = (0, jT.purchasesAllowed)(),
        io = Object.keys(LT.c[IT]).filter((TT => {
          const oT = (0, LT.i)(IT, TT),
            iT = (0, uT.i)(IT, TT, oo);
          return !(oT.purchasable && !iT && !Io) && (oT.clientSelectable || iT)
        })).sort(((TT, oT) => {
          var iT, zT, kT, WT;
          return (null !== (iT = null === (zT = (0, LT.g)(IT, TT)) || void 0 === zT ? void 0 : zT.clientIdx) && void 0 !== iT ? iT : 0) - (null !== (kT = null === (WT = (0, LT.g)(IT, oT)) || void 0 === WT ? void 0 : WT.clientIdx) && void 0 !== kT ? kT : 0)
        })),
        zo = new Map;
      for (const iT of io) {
        var ko;
        const TT = null === (ko = (0, LT.g)(IT, iT)) || void 0 === ko ? void 0 : ko.cosmeticPack;
        zo.has(TT) || zo.set(TT, []), zo.get(TT).push(iT)
      }
      const Wo = function(TT, oT) {
          const IT = new Set,
            iT = new Set;
          for (const [zT, kT] of Object.entries(LT.c[TT])) {
            if (void 0 === kT.colourGroup) continue;
            const WT = `${kT.cosmeticPack}_${kT.colourGroup}`;
            (aT(TT, zT, oT) ? iT : IT).add(WT)
          }
          return new Set([...IT].filter((TT => iT.has(TT))))
        }(IT, oo),
        Xo = new Map;
      for (const [iT, zT] of zo) {
        const TT = [],
          oT = new Map;
        for (const iT of zT) {
          var Bo, Fo;
          const zT = null !== (Bo = null === (Fo = (0, LT.g)(IT, iT)) || void 0 === Fo ? void 0 : Fo.colourGroup) && void 0 !== Bo ? Bo : null;
          oT.has(zT) || (oT.set(zT, []), TT.push(zT)), oT.get(zT).push(iT)
        }
        const kT = TT.map((TT => {
          var zT;
          const kT = oT.get(TT),
            WT = TT ? null === (zT = RT.b[iT].colourGroups) || void 0 === zT ? void 0 : zT[TT] : void 0,
            XT = !0 === (null === WT || void 0 === WT ? void 0 : WT.showSwatchSelector) && !Wo.has(`${iT}_${TT}`);
          if (XT && WT) {
            var BT;
            const oT = null !== (BT = lT[`${iT}_${IT}_${TT}`]) && void 0 !== BT ? BT : (0, RT.f)(WT.colours);
            return {
              groupName: TT,
              showSwatch: XT,
              cosmetics: kT.filter((TT => {
                const IT = (0, LT.f)(TT);
                return !IT || oT.toString() === IT[1].toString()
              }))
            }
          }
          return {
            groupName: TT,
            cosmetics: kT,
            showSwatch: XT
          }
        }));
        Xo.set(iT, kT)
      }
      const So = Array.from(zo.keys()),
        Do = new Map;
      for (const [iT, zT] of Object.entries(xT.b)) {
        const TT = RT.b[zT.cosmeticPack],
          oT = !YT(zT.cosmetics, oo),
          IT = RT.i.some((TT => (0, RT.d)(TT) === iT));
        (TT.clientSelectable || IT || oT) && ((!TT.purchasable || oT || Io) && (Do.has(zT.cosmeticPack) || Do.set(zT.cosmeticPack, []), Do.get(zT.cosmeticPack).push([iT, zT])))
      }
      const Lo = Array.from(Do.keys());
      return (0, UT.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === IT || "nameColour" === IT) && !KT.playerHasRank("super") && (0, UT.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, UT.jsx)(CT.e, {
            name: "bolt"
          }), XT("homePage:unlockWithSuperRank"), Io && (0, UT.jsx)(AT.m, {
            onClick: () => {
              (0, gT.k)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: XT("general:getItNow")
          })]
        }), (0, UT.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === oT && (0, UT.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Lo.map((TT => {
              const oT = Do.get(TT);
              return (0, UT.jsx)(QT, {
                pack: TT,
                ownedPacks: oo,
                showStoreLink: !RT.j.includes(TT) && oT.some((TT => {
                  let [, {
                    cosmetics: oT
                  }] = TT;
                  return YT(oT, oo)
                })),
                children: (0, UT.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: oT.map((TT => {
                    let [oT, {
                      cosmetics: IT
                    }] = TT;
                    const iT = YT(IT, oo),
                      zT = To(IT),
                      kT = !zT && Object.entries(IT).every((TT => {
                        let [oT, IT] = TT;
                        return pT.current[oT] === IT
                      }));
                    return (0, UT.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: BT()("CharacterPresetCard", {
                        CharacterPresetCardActive: kT,
                        CharacterPresetCardTryingOn: zT
                      }),
                      onClick: () => {
                        if (iT) ! function(TT) {
                          To(TT) ? ZT({}) : ZT({
                            ...TT
                          })
                        }(IT);
                        else {
                          Object.keys(qT).length > 0 && ZT({});
                          const TT = Object.entries(IT);
                          for (const [oT, IT] of TT) VT(oT, IT, !1), KT.setPlayerCosmetics(oT, IT);
                          if (null !== WT.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [oT, IT] of TT) WT.gameBridge.send("updateMyCosmetic", {
                              oT: oT,
                              IT: IT
                            });
                          else wT.e.updateCosmetics(KT, TT.map((TT => {
                            let [oT, IT] = TT;
                            return {
                              oT: oT,
                              IT: IT
                            }
                          }))).catch((TT => {
                            console.error("Failed to update cosmetics", TT)
                          }))
                        }
                      },
                      children: [(0, UT.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${oT}_preview.png)`
                        }
                      }), iT && (0, UT.jsx)(CT.e, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, oT)
                  }))
                })
              }, TT)
            }))]
          }), "emote" === oT && (0, UT.jsx)(OT, {
            equippedEmoteIds: (0, cT.h)(pT.current.emote),
            ownedPacks: oo,
            canBuy: Io,
            onUpdateLoadout: TT => {
              const oT = (0, cT.j)(TT);
              var IT;
              pT.current = {
                ...pT.current,
                emote: oT
              }, KT.setPlayerCosmetics("emote", oT), JT(), IT = oT, PT.current = IT, null !== NT.current && clearTimeout(NT.current), NT.current = setTimeout(dT, 350)
            },
            onEmoteSelected: GT,
            onEquipPreviewSkin: () => {
              ! function(TT, oT) {
                for (const IT of FT.v) "cape" !== IT && "nameColour" !== IT && "emote" !== IT && TT(IT, "skin" === IT ? "skin_preview" : `${IT}_none`, !1);
                oT()
              }(VT, JT)
            }
          }), "characters" !== oT && "emote" !== oT && (0, UT.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, So.map((TT => {
              const oT = Xo.get(TT);
              return (0, UT.jsx)(QT, {
                pack: TT,
                ownedPacks: oo,
                children: oT.map((oT => {
                  var iT;
                  let {
                    groupName: zT,
                    cosmetics: kT,
                    showSwatch: WT
                  } = oT;
                  const XT = zT ? null === (iT = RT.b[TT].colourGroups) || void 0 === iT ? void 0 : iT[zT] : void 0,
                    FT = `${TT}_${IT}_${zT}`;
                  return (0, UT.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [WT && XT && (0, UT.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...XT.colours.map(((TT, oT) => ({
                        color: TT,
                        index: oT
                      })))].sort(((TT, oT) => TT.color.order - oT.color.order)).map((oT => {
                        var iT;
                        let {
                          color: kT,
                          index: WT
                        } = oT;
                        return (0, UT.jsx)("div", {
                          className: BT()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (iT = lT[FT]) && void 0 !== iT ? iT : (0, RT.f)(XT.colours)) === WT
                          }),
                          style: {
                            backgroundColor: `rgb(${kT.rbg.join(",")})`
                          },
                          onClick: () => {
                            var oT;
                            sT((TT => ({
                              ...TT,
                              [FT]: WT
                            })));
                            const iT = qT[IT],
                              kT = iT ? (0, LT.g)(IT, iT) : null,
                              XT = (null === kT || void 0 === kT ? void 0 : kT.cosmeticPack) === TT,
                              BT = XT ? iT : pT.current[IT],
                              ST = XT ? kT : (0, LT.g)(IT, BT);
                            if ((null === ST || void 0 === ST ? void 0 : ST.cosmeticPack) !== TT) return;
                            if ((null !== (oT = null === ST || void 0 === ST ? void 0 : ST.colourGroup) && void 0 !== oT ? oT : null) !== zT) return;
                            const DT = (0, LT.f)(BT);
                            if (DT) {
                              const TT = `${IT}_${DT[0]}_${WT}`;
                              XT ? ZT((oT => ({
                                ...oT,
                                [IT]: TT
                              }))) : VT(IT, TT, !0)
                            }
                          }
                        }, kT.rbg.join())
                      }))
                    }), kT.map((TT => {
                      const oT = TT === pT.current[IT],
                        iT = qT[IT] === TT,
                        zT = aT(IT, TT, oo);
                      let kT = !0;
                      return zT || oT || ("cape" !== IT || (0, mT.Bd)(KT.getPlayerRanks(), TT)) && ("nameColour" !== IT || KT.playerHasRank("super")) || (kT = !1), (0, UT.jsxs)("div", {
                        className: BT()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: oT && !iT,
                          TryingOnCharCustomPartWrapper: iT,
                          DisabledCharCustomPartWrapper: !kT,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === IT
                        }),
                        onClick: () => {
                          if (kT)
                            if (zT) ZT((oT => {
                              if (oT[IT] === TT) {
                                const TT = {
                                  ...oT
                                };
                                return delete TT[IT], TT
                              }
                              return {
                                ...oT,
                                [IT]: TT
                              }
                            }));
                            else {
                              var oT;
                              if (qT[IT] && ZT((TT => {
                                  const oT = {
                                    ...TT
                                  };
                                  return delete oT[IT], oT
                                })), TT === pT.current[IT]) return;
                              null !== (oT = yT.current) && void 0 !== oT && oT.isReady() && VT(IT, TT, !0)
                            }
                        },
                        children: ["profileEffect" === IT ? (0, UT.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, UT.jsx)(fT.g, {
                            playerSocialPreview: (0, ET.d)(TT, {
                              name: KT.getPlayerName(),
                              cosmetics: KT.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, UT.jsx)("div", {
                          className: BT()("CharCustomPart", {
                            PixelatedImage: "cape" === IT
                          }),
                          style: (0, LT.g)(IT, TT).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,LT.g)(IT,TT).previewTex}.png)`
                          } : {
                            backgroundColor: ST.t[TT]
                          }
                        }), zT && (0, UT.jsx)(CT.e, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, TT)
                    }))]
                  }, null !== zT && void 0 !== zT ? zT : "ungrouped")
                }))
              }, TT)
            }))]
          }), (0, UT.jsx)(eT.CharacterPreview, {
            ref: yT,
            forcedCosmetics: qT,
            wX: tT.id,
            emotePlaySeq: tT.seq,
            onReady: () => {
              for (const TT of FT.v) VT(TT, pT.current[TT], !1)
            }
          })]
        })]
      })
    }))
  },
  39976: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      CharacterPreview: () => ST
    });
    var iT = IT(46),
      zT = IT(2451),
      kT = IT(1214),
      WT = IT(8248),
      XT = IT(35795),
      BT = IT(3186),
      FT = IT(1083);
    const ST = (0, iT.memo)((0, iT.forwardRef)((function(TT, oT) {
      let {
        onReady: IT,
        onDrawn: ST,
        owner: DT = "other",
        framing: LT = "player",
        forcedCosmetics: xT,
        wX: cT,
        emotePlaySeq: KT
      } = TT;
      const MT = (0, iT.useRef)(null),
        {
          width: rT,
          height: AT
        } = (0, zT.d)(MT),
        gT = (0, iT.useRef)(null),
        hT = (0, iT.useRef)({}),
        wT = (0, iT.useRef)({}),
        [mT, eT] = (0, iT.useState)(!1),
        RT = (0, iT.useRef)(IT);
      RT.current = IT;
      const uT = (0, iT.useRef)(ST);
      uT.current = ST;
      const vT = (0, iT.useRef)(null),
        ET = (0, iT.useRef)(!1),
        fT = (0, iT.useRef)(!1),
        CT = (0, iT.useCallback)((() => {
          const TT = gT.current;
          if (!TT || !uT.current || ET.current || !fT.current) return;
          const oT = {};
          vT.current = oT, queueMicrotask((() => {
            if (vT.current !== oT) return;
            const IT = Promise.all(kT.v.map((oT => TT.untilDrawn(oT)))).catch((TT => {
                console.error("Failed to draw the character preview", TT)
              })),
              iT = new Promise((TT => {
                setTimeout(TT, 1e4)
              }));
            Promise.race([IT, iT]).then((() => {
              var IT;
              gT.current !== TT || vT.current !== oT || ET.current || (ET.current = !0, null === (IT = uT.current) || void 0 === IT || IT.call(uT))
            }))
          }))
        }), []);
      return (0, iT.useImperativeHandle)(oT, (() => {
        const TT = (TT, oT) => {
          var IT;
          (hT.current[TT] = oT, null !== xT && void 0 !== xT && xT[TT]) || (null === (IT = gT.current) || void 0 === IT || IT.setCosmetic(TT, oT), CT())
        };
        return {
          updateCosmetic: TT,
          setAllCosmetics(oT) {
            for (const iT of kT.v) {
              var IT;
              TT(iT, null !== (IT = oT[iT]) && void 0 !== IT ? IT : (0, WT.d)(iT))
            }
          },
          isReady() {
            var TT, oT;
            return null !== (TT = null === (oT = gT.current) || void 0 === oT ? void 0 : oT.isReady()) && void 0 !== TT && TT
          },
          resetCamera() {
            var TT;
            null === (TT = gT.current) || void 0 === TT || TT.resetCamera()
          },
          async ensureReadyForCapture(TT) {
            var oT;
            await (null === (oT = gT.current) || void 0 === oT ? void 0 : oT.untilDrawn(TT))
          },
          getDevTools() {
            var TT;
            return null !== (TT = gT.current) && void 0 !== TT && TT.isReady() ? gT.current.dev : null
          }
        }
      }), [xT, CT]), (0, iT.useEffect)((() => {
        const TT = BT.b.register(DT),
          oT = XT.b.openCharacter(MT.current, LT);
        gT.current = oT;
        let IT = !0;
        return oT.ready.then((() => {
          IT && (eT(!0), RT.current())
        })).catch((TT => {
          console.error("Failed to set up the character preview", TT)
        })), () => {
          IT = !1, TT(), oT.close(), gT.current = null
        }
      }), []), (0, iT.useEffect)((() => {
        rT <= 0 || AT <= 0 || gT.current.resize(rT, AT)
      }), [rT, AT]), (0, iT.useEffect)((() => {
        if (!mT) return;
        const TT = wT.current;
        for (const oT of kT.v) {
          const IT = null === xT || void 0 === xT ? void 0 : xT[oT],
            iT = TT[oT];
          IT && IT !== iT ? gT.current.setCosmetic(oT, IT) : !IT && iT && hT.current[oT] && gT.current.setCosmetic(oT, hT.current[oT])
        }
        wT.current = {
          ...xT
        }, fT.current = !0, CT()
      }), [xT, mT, CT]), (0, iT.useEffect)((() => {
        mT && gT.current.playEmote(null !== cT && void 0 !== cT ? cT : null)
      }), [cT, KT, mT]), (0, FT.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: MT
      })
    })))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);