export const id = 259;
export const ids = [259, 260];
export const modules = {
  38657: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      CharacterCustomisationUI: () => hW
    });
    var wW = MW(75),
      CW = MW(2221),
      zR = MW(969),
      AW = MW(1544),
      bR = MW(897),
      yR = MW.n(bR),
      NW = MW(1066),
      eW = MW(540),
      BW = MW(1027),
      tR = MW(1828),
      TW = MW(2249),
      gR = MW(7714),
      iR = MW(1835),
      YW = MW(2264),
      JW = MW(1571),
      PW = MW(1255),
      IW = MW(1862),
      oW = MW(27),
      lW = MW(1314),
      FW = MW(284),
      fW = MW(38662),
      QW = MW(1392),
      rR = MW(2218),
      cR = MW(1749),
      XW = MW(2011),
      jR = MW(904);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var kR = MW(1495),
      aR = MW(1180),
      sW = MW(940);

    function dW(WW) {
      var RW;
      let {
        pack: MW,
        ownedPacks: wW,
        children: CW
      } = WW;
      const {
        t: zR
      } = (0, BW.C)(), AW = QW.b[MW], bR = AW.purchasable, NW = wW.includes(MW), eW = bR && !NW, tR = rR.k[MW];
      return (0, sW.jsxs)("div", {
        className: yR()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: eW
        }),
        children: [tR && (0, sW.jsx)(tR, {}), (0, sW.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, sW.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (RW = AW.displayName) && void 0 !== RW ? RW : MW
          }), eW && (0, sW.jsxs)(PW.y, {
            onClick: () => {
              (0, rR.j)(MW)
            },
            children: [(0, sW.jsx)(jR.e, {
              name: "store"
            }), " ", zR("general:viewInShop")]
          })]
        }), eW && "bee" === MW && (0, sW.jsx)(rR.c, {}), CW]
      })
    }

    function pW(WW) {
      let {
        equippedEmoteIds: RW,
        ownedPacks: MW,
        xsollaSupported: wW,
        onUpdateLoadout: CW,
        onEmoteSelected: zR,
        onEquipPreviewSkin: AW
      } = WW;
      const {
        t: bR
      } = (0, BW.C)(), eW = new Set(RW), TW = new Map, gR = Object.keys(tR.f.emote).sort(((WW, RW) => {
        var MW, wW, CW, zR;
        return (null !== (MW = null === (wW = (0, tR.j)("emote", WW)) || void 0 === wW ? void 0 : wW.clientIdx) && void 0 !== MW ? MW : 0) - (null !== (CW = null === (zR = (0, tR.j)("emote", RW)) || void 0 === zR ? void 0 : zR.clientIdx) && void 0 !== CW ? CW : 0)
      })).filter((WW => {
        const RW = (0, tR.p)("emote", WW),
          CW = (0, tR.j)("emote", WW).cosmeticPack,
          zR = MW.includes(CW);
        return !(RW.purchasable && !zR && !wW) && (RW.clientSelectable || zR)
      }));
      for (const yR of gR) {
        const WW = (0, tR.j)("emote", yR).cosmeticPack;
        TW.has(WW) || TW.set(WW, []), TW.get(WW).push(yR)
      }
      const YW = Array.from(TW.keys());
      return (0, sW.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, sW.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, sW.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: bR("emotes:equippedCount", {
              count: RW.length,
              max: NW.q
            })
          }), (0, sW.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: bR("emotes:loadoutHint")
          })]
        }), YW.map((WW => {
          const wW = TW.get(WW);
          return (0, sW.jsx)(dW, {
            pack: WW,
            ownedPacks: MW,
            children: (0, sW.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: wW.map((wW => {
                var AW;
                const BW = RW.indexOf(wW),
                  TW = -1 !== BW,
                  gR = RW.length >= NW.q,
                  YW = (0, tR.p)("emote", wW).purchasable && !MW.includes(WW),
                  JW = YW || !TW && gR,
                  PW = (0, iR.i)(wW);
                return (0, sW.jsxs)("div", {
                  className: yR()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: TW
                  }),
                  onClick: () => {
                    zR(wW)
                  },
                  children: [(0, sW.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, sW.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${wW}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, sW.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (AW = null === PW || void 0 === PW ? void 0 : PW.displayName) && void 0 !== AW ? AW : wW
                    })]
                  }), (0, sW.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [TW && (0, sW.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: BW + 1
                    }), YW && (0, sW.jsx)(jR.e, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, sW.jsx)(aR.e, {
                      tooltipInner: (0, sW.jsx)(sW.Fragment, {
                        children: bR(TW ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, sW.jsx)("div", {
                        className: yR()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: JW,
                          EmoteCustomPartToggleEquipped: TW
                        }),
                        onClick: WW => {
                          WW.stopPropagation(), JW || function(WW) {
                            eW.has(WW) ? CW(RW.filter((RW => RW !== WW))) : RW.length >= NW.q || CW([...RW, WW])
                          }(wW)
                        },
                        children: (0, sW.jsx)(jR.e, {
                          name: TW ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, wW)
              }))
            })
          }, WW)
        }))]
      })
    }
    const hW = (0, wW.memo)((function(WW) {
      let {
        selectedTab: RW
      } = WW;
      const MW = "characters" === RW ? "skin" : RW,
        {
          t: bR
        } = (0, BW.C)(),
        {
          userContext: iR,
          isUserContextUpdating: rR
        } = (0, zR.c)(),
        aR = (0, CW.b)(),
        {
          gameState: hW,
          initSdkSelectorFinished: UW
        } = (0, oW.i)(["gameState", "initSdkSelectorFinished"]),
        [EW, VW] = (0, wW.useState)({}),
        [mR, xR] = (0, wW.useState)({}),
        {
          previewEmote: vR,
          triggerEmote: KW
        } = (0, YW.c)(),
        uW = (0, wW.useRef)(NW.y.reduce(((WW, RW) => (WW[RW] = (0, gR.c)(RW), WW)), {})),
        OW = (0, wW.useRef)(!1),
        nW = (0, wW.useRef)(null),
        GW = (0, wW.useRef)(null),
        LW = (0, wW.useRef)(null);

      function HW() {
        null !== GW.current && (clearTimeout(GW.current), GW.current = null);
        const WW = LW.current;
        if (null === WW) return;
        LW.current = null;
        const RW = {
          Ur: "emote",
          Kr: WW
        };
        null !== AW.gameBridge.latest("connectedGame").websocketUrl ? AW.gameBridge.send("updateMyCosmetic", RW) : lW.c.updateCosmetics(iR, [RW]).catch((WW => {
          console.error("Failed to update emote loadout", WW)
        }))
      }

      function DW(WW, RW, MW) {
        var wW, CW, zR;
        if (uW.current = {
            ...uW.current,
            [WW]: RW
          }, aR(), MW) {
          const MW = {
            Ur: WW,
            Kr: RW
          };
          null !== AW.gameBridge.latest("connectedGame").websocketUrl ? AW.gameBridge.send("updateMyCosmetic", MW) : lW.c.updateCosmetics(iR, [MW]).catch((WW => {
            console.error("Failed to update cosmetic", WW)
          })), iR.setPlayerCosmetics(WW, RW)
        }
        const bR = (0, tR.j)(WW, RW);
        if (null !== bR && void 0 !== bR && bR.colourGroup && null !== (wW = QW.b[bR.cosmeticPack].colourGroups) && void 0 !== wW && null !== (CW = wW[bR.colourGroup]) && void 0 !== CW && CW.showSwatchSelector) {
          const MW = (0, tR.h)(RW);
          MW && xR((RW => ({
            ...RW,
            [`${bR.cosmeticPack}_${WW}_${bR.colourGroup}`]: parseInt(MW[1])
          })))
        }
        null !== (zR = nW.current) && void 0 !== zR && zR.isReady() && nW.current.updateCosmetic(WW, RW)
      }

      function qR(WW) {
        return Object.entries(WW).every((WW => {
          let [RW, MW] = WW;
          return EW[RW] === MW
        }))
      }(0, JW.d)("cosmeticsUpdated", (WW => {
        let RW = !1;
        for (const {
            local: MW,
            Ur: wW,
            Kr: CW
          }
          of WW) {
          if (!MW) return;
          RW = !0, OW.current || DW(wW, CW, !1), aR()
        }
        RW && (OW.current = !0)
      })), (0, wW.useEffect)((() => {
        if (!rR) {
          for (const [WW, RW] of Object.entries(iR.getPlayerCosmetics())) DW(WW, RW, !1);
          aR()
        }
      }), [rR]), (0, wW.useEffect)((() => () => {
        HW()
      }), []);
      const ZW = iR.getOwnedCosmeticPacks(),
        SW = (0, kR.siteSupportsPurchases)(),
        WR = Object.keys(tR.f[MW]).filter((WW => {
          const RW = (0, tR.p)(MW, WW),
            wW = (0, tR.j)(MW, WW).cosmeticPack,
            CW = ZW.includes(wW);
          return !(RW.purchasable && !CW && !SW) && (RW.clientSelectable || CW)
        })).sort(((WW, RW) => {
          var wW, CW, zR, AW;
          return (null !== (wW = null === (CW = (0, tR.j)(MW, WW)) || void 0 === CW ? void 0 : CW.clientIdx) && void 0 !== wW ? wW : 0) - (null !== (zR = null === (AW = (0, tR.j)(MW, RW)) || void 0 === AW ? void 0 : AW.clientIdx) && void 0 !== zR ? zR : 0)
        })),
        RR = new Map;
      for (const wW of WR) {
        var MR;
        const WW = null === (MR = (0, tR.j)(MW, wW)) || void 0 === MR ? void 0 : MR.cosmeticPack;
        RR.has(WW) || RR.set(WW, []), RR.get(WW).push(wW)
      }
      const wR = new Map;
      for (const [wW, CW] of RR) {
        const WW = [],
          RW = new Map;
        for (const wW of CW) {
          var CR, zM;
          const CW = null !== (CR = null === (zM = (0, tR.j)(MW, wW)) || void 0 === zM ? void 0 : zM.colourGroup) && void 0 !== CR ? CR : null;
          RW.has(CW) || (RW.set(CW, []), WW.push(CW)), RW.get(CW).push(wW)
        }
        const zR = WW.map((WW => {
          var CW;
          const zR = RW.get(WW),
            AW = WW ? null === (CW = QW.b[wW].colourGroups) || void 0 === CW ? void 0 : CW[WW] : void 0;
          if ((null === AW || void 0 === AW ? void 0 : AW.showSwatchSelector) && AW) {
            var bR;
            const RW = null !== (bR = mR[`${wW}_${MW}_${WW}`]) && void 0 !== bR ? bR : (0, QW.e)(AW.colours);
            return {
              groupName: WW,
              cosmetics: zR.filter((WW => {
                const MW = (0, tR.h)(WW);
                return !MW || RW.toString() === MW[1].toString()
              }))
            }
          }
          return {
            groupName: WW,
            cosmetics: zR
          }
        }));
        wR.set(wW, zR)
      }
      const AR = Array.from(RR.keys()),
        bM = new Map;
      for (const [wW, CW] of Object.entries(TW.d)) {
        const WW = QW.b[CW.cosmeticPack],
          RW = ZW.includes(CW.cosmeticPack);
        (WW.clientSelectable || RW) && ((!WW.purchasable || RW || SW) && (bM.has(CW.cosmeticPack) || bM.set(CW.cosmeticPack, []), bM.get(CW.cosmeticPack).push([wW, CW])))
      }
      const yM = Array.from(bM.keys());
      return (0, sW.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === MW || "nameColour" === MW) && !iR.playerHasRank("super") && (0, sW.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, sW.jsx)(jR.e, {
            name: "bolt"
          }), bR("homePage:unlockWithSuperRank"), SW && (0, sW.jsx)(PW.m, {
            onClick: () => {
              (0, IW.k)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: bR("general:getItNow")
          })]
        }), (0, sW.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === RW && (0, sW.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, yM.map((WW => {
              const RW = bM.get(WW),
                MW = QW.b[WW].purchasable && !ZW.includes(WW);
              return (0, sW.jsx)(dW, {
                pack: WW,
                ownedPacks: ZW,
                children: (0, sW.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: RW.map((WW => {
                    let [RW, {
                      cosmetics: wW
                    }] = WW;
                    const CW = qR(wW),
                      zR = !CW && Object.entries(wW).every((WW => {
                        let [RW, MW] = WW;
                        return uW.current[RW] === MW
                      }));
                    return (0, sW.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: yR()("CharacterPresetCard", {
                        CharacterPresetCardActive: zR,
                        CharacterPresetCardTryingOn: CW
                      }),
                      onClick: () => {
                        if (MW) ! function(WW) {
                          qR(WW) ? VW({}) : VW({
                            ...WW
                          })
                        }(wW);
                        else {
                          Object.keys(EW).length > 0 && VW({});
                          const WW = Object.entries(wW);
                          for (const [RW, MW] of WW) DW(RW, MW, !1), iR.setPlayerCosmetics(RW, MW);
                          if (null !== AW.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [RW, MW] of WW) AW.gameBridge.send("updateMyCosmetic", {
                              Ur: RW,
                              Kr: MW
                            });
                          else lW.c.updateCosmetics(iR, WW.map((WW => {
                            let [RW, MW] = WW;
                            return {
                              Ur: RW,
                              Kr: MW
                            }
                          }))).catch((WW => {
                            console.error("Failed to update cosmetics", WW)
                          }))
                        }
                      },
                      children: [(0, sW.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${RW}_preview.png)`
                        }
                      }), MW && (0, sW.jsx)(jR.e, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, RW)
                  }))
                })
              }, WW)
            }))]
          }), "emote" === RW && (0, sW.jsx)(pW, {
            equippedEmoteIds: (0, gR.e)(uW.current.emote),
            ownedPacks: ZW,
            xsollaSupported: SW,
            onUpdateLoadout: WW => {
              const RW = (0, gR.h)(WW);
              var MW;
              uW.current = {
                ...uW.current,
                emote: RW
              }, iR.setPlayerCosmetics("emote", RW), aR(), MW = RW, LW.current = MW, null !== GW.current && clearTimeout(GW.current), GW.current = setTimeout(HW, 350)
            },
            onEmoteSelected: KW,
            onEquipPreviewSkin: () => {
              ! function(WW, RW) {
                for (const MW of NW.y) "cape" !== MW && "nameColour" !== MW && "emote" !== MW && WW(MW, "skin" === MW ? "skin_preview" : `${MW}_none`, !1);
                RW()
              }(DW, aR)
            }
          }), "characters" !== RW && "emote" !== RW && (0, sW.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, AR.map((WW => {
              const RW = wR.get(WW),
                wW = QW.b[WW].purchasable && !ZW.includes(WW);
              return (0, sW.jsx)(dW, {
                pack: WW,
                ownedPacks: ZW,
                children: RW.map((RW => {
                  var CW;
                  let {
                    groupName: zR,
                    cosmetics: AW
                  } = RW;
                  const bR = zR ? null === (CW = QW.b[WW].colourGroups) || void 0 === CW ? void 0 : CW[zR] : void 0,
                    NW = `${WW}_${MW}_${zR}`,
                    BW = null === bR || void 0 === bR ? void 0 : bR.showSwatchSelector;
                  return (0, sW.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [BW && bR && (0, sW.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...bR.colours.map(((WW, RW) => ({
                        color: WW,
                        index: RW
                      })))].sort(((WW, RW) => WW.color.order - RW.color.order)).map((RW => {
                        var wW;
                        let {
                          color: CW,
                          index: AW
                        } = RW;
                        return (0, sW.jsx)("div", {
                          className: yR()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (wW = mR[NW]) && void 0 !== wW ? wW : (0, QW.e)(bR.colours)) === AW
                          }),
                          style: {
                            backgroundColor: `rgb(${CW.rbg.join(",")})`
                          },
                          onClick: () => {
                            var RW;
                            xR((WW => ({
                              ...WW,
                              [NW]: AW
                            })));
                            const wW = EW[MW],
                              CW = wW ? (0, tR.j)(MW, wW) : null,
                              bR = (null === CW || void 0 === CW ? void 0 : CW.cosmeticPack) === WW,
                              yR = bR ? wW : uW.current[MW],
                              eW = bR ? CW : (0, tR.j)(MW, yR);
                            if ((null === eW || void 0 === eW ? void 0 : eW.cosmeticPack) !== WW) return;
                            if ((null !== (RW = null === eW || void 0 === eW ? void 0 : eW.colourGroup) && void 0 !== RW ? RW : null) !== zR) return;
                            const BW = (0, tR.h)(yR);
                            if (BW) {
                              const WW = `${MW}_${BW[0]}_${AW}`;
                              bR ? VW((RW => ({
                                ...RW,
                                [MW]: WW
                              }))) : DW(MW, WW, !0)
                            }
                          }
                        }, CW.rbg.join())
                      }))
                    }), AW.map((WW => {
                      const RW = WW === uW.current[MW],
                        CW = EW[MW] === WW;
                      let zR = !0;
                      return wW || RW || ("cape" !== MW || (0, FW.Ld)(iR.getPlayerRanks(), WW)) && ("nameColour" !== MW || iR.playerHasRank("super")) || (zR = !1), (0, sW.jsxs)("div", {
                        className: yR()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: RW && !CW,
                          TryingOnCharCustomPartWrapper: CW,
                          DisabledCharCustomPartWrapper: !zR,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === MW
                        }),
                        onClick: () => {
                          if (zR)
                            if (wW) VW((RW => {
                              if (RW[MW] === WW) {
                                const WW = {
                                  ...RW
                                };
                                return delete WW[MW], WW
                              }
                              return {
                                ...RW,
                                [MW]: WW
                              }
                            }));
                            else {
                              var RW;
                              if (EW[MW] && VW((WW => {
                                  const RW = {
                                    ...WW
                                  };
                                  return delete RW[MW], RW
                                })), WW === uW.current[MW]) return;
                              null !== (RW = nW.current) && void 0 !== RW && RW.isReady() && DW(MW, WW, !0)
                            }
                        },
                        children: ["profileEffect" === MW ? (0, sW.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, sW.jsx)(XW.e, {
                            playerSocialPreview: (0, cR.d)(WW, {
                              name: iR.getPlayerName(),
                              cosmetics: iR.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, sW.jsx)("div", {
                          className: yR()("CharCustomPart", {
                            PixelatedImage: "cape" === MW
                          }),
                          style: (0, tR.j)(MW, WW).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,tR.j)(MW,WW).previewTex}.png)`
                          } : {
                            backgroundColor: eW.r[WW],
                            borderRadius: "50%"
                          }
                        }), wW && (0, sW.jsx)(jR.e, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, WW)
                    }))]
                  }, null !== zR && void 0 !== zR ? zR : "ungrouped")
                }))
              }, WW)
            }))]
          }), (0, sW.jsx)(fW.CharacterPreview, {
            ref: nW,
            forcedCosmetics: EW,
            Nk: vR.id,
            emotePlaySeq: vR.seq,
            onReady: () => {
              for (const WW of NW.y) DW(WW, uW.current[WW], !1)
            }
          })]
        })]
      })
    }))
  },
  38662: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      CharacterPreview: () => eW
    });
    var wW = MW(75),
      CW = MW(2135),
      zR = MW(1066),
      AW = MW(7714),
      bR = MW(35025),
      yR = MW(2713),
      NW = MW(940);
    const eW = (0, wW.memo)((0, wW.forwardRef)((function(WW, RW) {
      let {
        onReady: MW,
        owner: eW = "other",
        forcedCosmetics: BW,
        Nk: tR,
        emotePlaySeq: TW
      } = WW;
      const gR = (0, wW.useRef)(null),
        {
          width: iR,
          height: YW
        } = (0, CW.c)(gR),
        JW = (0, wW.useRef)(null),
        PW = (0, wW.useRef)({}),
        IW = (0, wW.useRef)({}),
        [oW, lW] = (0, wW.useState)(!1),
        FW = (0, wW.useRef)(MW);
      return FW.current = MW, (0, wW.useImperativeHandle)(RW, (() => {
        const WW = (WW, RW) => {
          var MW;
          (PW.current[WW] = RW, null !== BW && void 0 !== BW && BW[WW]) || (null === (MW = JW.current) || void 0 === MW || MW.setCosmetic(WW, RW))
        };
        return {
          updateCosmetic: WW,
          setAllCosmetics(RW) {
            for (const wW of zR.y) {
              var MW;
              WW(wW, null !== (MW = RW[wW]) && void 0 !== MW ? MW : (0, AW.c)(wW))
            }
          },
          isReady() {
            var WW, RW;
            return null !== (WW = null === (RW = JW.current) || void 0 === RW ? void 0 : RW.isReady()) && void 0 !== WW && WW
          },
          async ensureReadyForCapture(WW) {
            var RW;
            await (null === (RW = JW.current) || void 0 === RW ? void 0 : RW.untilDrawn(WW))
          },
          getDevTools() {
            var WW;
            return null !== (WW = JW.current) && void 0 !== WW && WW.isReady() ? JW.current.dev : null
          }
        }
      }), [BW]), (0, wW.useEffect)((() => {
        const WW = yR.d.register(eW),
          RW = bR.e.openCharacter(gR.current);
        JW.current = RW;
        let MW = !0;
        return RW.ready.then((() => {
          MW && (lW(!0), FW.current())
        })).catch((WW => {
          console.error("Failed to set up the character preview", WW)
        })), () => {
          MW = !1, WW(), RW.close(), JW.current = null
        }
      }), []), (0, wW.useEffect)((() => {
        iR <= 0 || YW <= 0 || JW.current.resize(iR, YW)
      }), [iR, YW]), (0, wW.useEffect)((() => {
        if (!oW) return;
        const WW = IW.current;
        for (const RW of zR.y) {
          const MW = null === BW || void 0 === BW ? void 0 : BW[RW],
            wW = WW[RW];
          MW && MW !== wW ? JW.current.setCosmetic(RW, MW) : !MW && wW && PW.current[RW] && JW.current.setCosmetic(RW, PW.current[RW])
        }
        IW.current = {
          ...BW
        }
      }), [BW, oW]), (0, wW.useEffect)((() => {
        oW && JW.current.playEmote(null !== tR && void 0 !== tR ? tR : null)
      }), [tR, TW, oW]), (0, NW.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: gR
      })
    })))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);