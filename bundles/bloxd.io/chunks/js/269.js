export const id = 269;
export const ids = [269, 270];
export const modules = {
  39902: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      CharacterCustomisationUI: () => RB
    });
    var VB = dB(62),
      yB = dB(2488),
      pB = dB(1011),
      lB = dB(1679),
      JB = dB(933),
      YB = dB.n(JB),
      gB = dB(1117),
      oB = dB(554),
      kB = dB(1078),
      LB = dB(1978),
      OB = dB(2045),
      DB = dB(8155),
      uB = dB(1985),
      HB = dB(2560),
      EB = dB(1727),
      vB = dB(1324),
      mB = dB(2015),
      iB = dB(21),
      NB = dB(1393),
      tB = dB(279),
      fB = dB(39911),
      sB = dB(1457),
      MB = dB(2053),
      zB = dB(2485),
      wB = dB(1901),
      UB = dB(2208),
      FB = dB(946);
    dB(35817), dB(2567);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var KB = dB(2028),
      rB = dB(1249),
      IB = dB(980);

    function cB(BB, TB, dB) {
      return (0, LB.j)(BB, TB).purchasable && !(0, MB.o)(BB, TB, dB)
    }

    function SB(BB, TB) {
      return Object.entries(BB).some((BB => {
        let [dB, VB] = BB;
        return cB(dB, VB, TB)
      }))
    }

    function PB(BB) {
      var TB;
      let {
        pack: dB,
        ownedPacks: VB,
        showStoreLink: yB = !1,
        children: pB
      } = BB;
      const {
        t: lB
      } = (0, kB.z)(), JB = sB.c[dB], gB = JB.purchasable && !VB.includes(dB) && sB.n.includes(dB), oB = zB.n[dB];
      return (0, IB.jsxs)("div", {
        className: YB()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: gB
        }),
        children: [oB && (0, IB.jsx)(oB, {}), (0, IB.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, IB.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (TB = JB.displayName) && void 0 !== TB ? TB : dB
          }), (gB || yB) && (0, IB.jsxs)(vB.D, {
            onClick: () => {
              gB ? (0, zB.k)(dB) : (0, mB.h)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, IB.jsx)(FB.e, {
              name: "store"
            }), " ", lB("general:viewInShop")]
          })]
        }), gB && "bee" === dB && (0, IB.jsx)(zB.e, {}), pB]
      })
    }

    function QB(BB) {
      let {
        equippedEmoteIds: TB,
        ownedPacks: dB,
        xsollaSupported: VB,
        onUpdateLoadout: yB,
        onEmoteSelected: pB,
        onEquipPreviewSkin: lB
      } = BB;
      const {
        t: JB
      } = (0, kB.z)(), oB = new Set(TB), OB = new Map, DB = Object.keys(LB.d.emote).sort(((BB, TB) => {
        var dB, VB, yB, pB;
        return (null !== (dB = null === (VB = (0, LB.h)("emote", BB)) || void 0 === VB ? void 0 : VB.clientIdx) && void 0 !== dB ? dB : 0) - (null !== (yB = null === (pB = (0, LB.h)("emote", TB)) || void 0 === pB ? void 0 : pB.clientIdx) && void 0 !== yB ? yB : 0)
      })).filter((BB => {
        const TB = (0, LB.j)("emote", BB),
          yB = (0, MB.o)("emote", BB, dB);
        return !(TB.purchasable && !yB && !VB) && (TB.clientSelectable || yB)
      }));
      for (const YB of DB) {
        const BB = (0, LB.h)("emote", YB).cosmeticPack;
        OB.has(BB) || OB.set(BB, []), OB.get(BB).push(YB)
      }
      const HB = Array.from(OB.keys());
      return (0, IB.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, IB.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, IB.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: JB("emotes:equippedCount", {
              count: TB.length,
              max: gB.k
            })
          }), (0, IB.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: JB("emotes:loadoutHint")
          })]
        }), HB.map((BB => {
          const VB = OB.get(BB);
          return (0, IB.jsx)(PB, {
            pack: BB,
            ownedPacks: dB,
            children: (0, IB.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: VB.map((BB => {
                var VB;
                const lB = TB.indexOf(BB),
                  kB = -1 !== lB,
                  LB = TB.length >= gB.k,
                  OB = cB("emote", BB, dB),
                  DB = OB || !kB && LB,
                  HB = (0, uB.g)(BB);
                return (0, IB.jsxs)("div", {
                  className: YB()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: kB
                  }),
                  onClick: () => {
                    pB(BB)
                  },
                  children: [(0, IB.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, IB.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${BB}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, IB.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (VB = null === HB || void 0 === HB ? void 0 : HB.displayName) && void 0 !== VB ? VB : BB
                    })]
                  }), (0, IB.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [kB && (0, IB.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: lB + 1
                    }), OB && (0, IB.jsx)(FB.e, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, IB.jsx)(rB.h, {
                      tooltipInner: (0, IB.jsx)(IB.Fragment, {
                        children: JB(kB ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, IB.jsx)("div", {
                        className: YB()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: DB,
                          EmoteCustomPartToggleEquipped: kB
                        }),
                        onClick: dB => {
                          dB.stopPropagation(), DB || function(BB) {
                            oB.has(BB) ? yB(TB.filter((TB => TB !== BB))) : TB.length >= gB.k || yB([...TB, BB])
                          }(BB)
                        },
                        children: (0, IB.jsx)(FB.e, {
                          name: kB ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, BB)
              }))
            })
          }, BB)
        }))]
      })
    }
    const RB = (0, VB.memo)((function(BB) {
      let {
        selectedTab: TB
      } = BB;
      const dB = "characters" === TB ? "skin" : TB,
        {
          t: JB
        } = (0, kB.z)(),
        {
          userContext: uB,
          isUserContextUpdating: zB
        } = (0, pB.b)(),
        rB = (0, yB.b)(),
        {
          gameState: RB,
          initSdkSelectorFinished: aB
        } = (0, iB.m)(["gameState", "initSdkSelectorFinished"]),
        [ZB, XB] = (0, VB.useState)({}),
        [WB, hB] = (0, VB.useState)({}),
        {
          previewEmote: CB,
          triggerEmote: GB
        } = (0, HB.e)(),
        qB = (0, VB.useRef)(gB.q.reduce(((BB, TB) => (BB[TB] = (0, DB.d)(TB), BB)), {})),
        xB = (0, VB.useRef)(!1),
        jB = (0, VB.useRef)(null),
        AB = (0, VB.useRef)(null),
        bB = (0, VB.useRef)(null);

      function nB() {
        null !== AB.current && (clearTimeout(AB.current), AB.current = null);
        const BB = bB.current;
        if (null === BB) return;
        bB.current = null;
        const TB = {
          tp: "emote",
          sp: BB
        };
        null !== lB.gameBridge.latest("connectedGame").websocketUrl ? lB.gameBridge.send("updateMyCosmetic", TB) : NB.c.updateCosmetics(uB, [TB]).catch((BB => {
          console.error("Failed to update emote loadout", BB)
        }))
      }

      function eB(BB, TB, dB) {
        var VB, yB, pB;
        if (qB.current = {
            ...qB.current,
            [BB]: TB
          }, rB(), dB) {
          const dB = {
            tp: BB,
            sp: TB
          };
          null !== lB.gameBridge.latest("connectedGame").websocketUrl ? lB.gameBridge.send("updateMyCosmetic", dB) : NB.c.updateCosmetics(uB, [dB]).catch((BB => {
            console.error("Failed to update cosmetic", BB)
          })), uB.setPlayerCosmetics(BB, TB)
        }
        const JB = (0, LB.h)(BB, TB);
        if (null !== JB && void 0 !== JB && JB.colourGroup && null !== (VB = sB.c[JB.cosmeticPack].colourGroups) && void 0 !== VB && null !== (yB = VB[JB.colourGroup]) && void 0 !== yB && yB.showSwatchSelector) {
          const dB = (0, LB.f)(TB);
          dB && hB((TB => ({
            ...TB,
            [`${JB.cosmeticPack}_${BB}_${JB.colourGroup}`]: parseInt(dB[1])
          })))
        }
        null !== (pB = jB.current) && void 0 !== pB && pB.isReady() && jB.current.updateCosmetic(BB, TB)
      }

      function BT(BB) {
        return Object.entries(BB).every((BB => {
          let [TB, dB] = BB;
          return ZB[TB] === dB
        }))
      }(0, EB.c)("cosmeticsUpdated", (BB => {
        let TB = !1;
        for (const {
            local: dB,
            tp: VB,
            sp: yB
          }
          of BB) {
          if (!dB) return;
          TB = !0, xB.current || eB(VB, yB, !1), rB()
        }
        TB && (xB.current = !0)
      })), (0, VB.useEffect)((() => {
        if (!zB) {
          for (const [BB, TB] of Object.entries(uB.getPlayerCosmetics())) eB(BB, TB, !1);
          rB()
        }
      }), [zB]), (0, VB.useEffect)((() => () => {
        nB()
      }), []);
      const TT = uB.getOwnedCosmeticPacks(),
        dT = (0, KB.siteSupportsPurchases)(),
        VT = Object.keys(LB.d[dB]).filter((BB => {
          const TB = (0, LB.j)(dB, BB),
            VB = (0, MB.o)(dB, BB, TT);
          return !(TB.purchasable && !VB && !dT) && (TB.clientSelectable || VB)
        })).sort(((BB, TB) => {
          var VB, yB, pB, lB;
          return (null !== (VB = null === (yB = (0, LB.h)(dB, BB)) || void 0 === yB ? void 0 : yB.clientIdx) && void 0 !== VB ? VB : 0) - (null !== (pB = null === (lB = (0, LB.h)(dB, TB)) || void 0 === lB ? void 0 : lB.clientIdx) && void 0 !== pB ? pB : 0)
        })),
        yT = new Map;
      for (const VB of VT) {
        var pT;
        const BB = null === (pT = (0, LB.h)(dB, VB)) || void 0 === pT ? void 0 : pT.cosmeticPack;
        yT.has(BB) || yT.set(BB, []), yT.get(BB).push(VB)
      }
      const lT = function(BB, TB) {
          const dB = new Set,
            VB = new Set;
          for (const [yB, pB] of Object.entries(LB.d[BB])) {
            if (void 0 === pB.colourGroup) continue;
            const lB = `${pB.cosmeticPack}_${pB.colourGroup}`;
            (cB(BB, yB, TB) ? VB : dB).add(lB)
          }
          return new Set([...dB].filter((BB => VB.has(BB))))
        }(dB, TT),
        JT = new Map;
      for (const [VB, yB] of yT) {
        const BB = [],
          TB = new Map;
        for (const VB of yB) {
          var YT, gT;
          const yB = null !== (YT = null === (gT = (0, LB.h)(dB, VB)) || void 0 === gT ? void 0 : gT.colourGroup) && void 0 !== YT ? YT : null;
          TB.has(yB) || (TB.set(yB, []), BB.push(yB)), TB.get(yB).push(VB)
        }
        const pB = BB.map((BB => {
          var yB;
          const pB = TB.get(BB),
            lB = BB ? null === (yB = sB.c[VB].colourGroups) || void 0 === yB ? void 0 : yB[BB] : void 0,
            JB = !0 === (null === lB || void 0 === lB ? void 0 : lB.showSwatchSelector) && !lT.has(`${VB}_${BB}`);
          if (JB && lB) {
            var YB;
            const TB = null !== (YB = WB[`${VB}_${dB}_${BB}`]) && void 0 !== YB ? YB : (0, sB.h)(lB.colours);
            return {
              groupName: BB,
              showSwatch: JB,
              cosmetics: pB.filter((BB => {
                const dB = (0, LB.f)(BB);
                return !dB || TB.toString() === dB[1].toString()
              }))
            }
          }
          return {
            groupName: BB,
            cosmetics: pB,
            showSwatch: JB
          }
        }));
        JT.set(VB, pB)
      }
      const oT = Array.from(yT.keys()),
        kT = new Map;
      for (const [VB, yB] of Object.entries(OB.d)) {
        const BB = sB.c[yB.cosmeticPack],
          TB = !SB(yB.cosmetics, TT),
          dB = sB.l.some((BB => (0, sB.d)(BB) === VB));
        (BB.clientSelectable || dB || TB) && ((!BB.purchasable || TB || dT) && (kT.has(yB.cosmeticPack) || kT.set(yB.cosmeticPack, []), kT.get(yB.cosmeticPack).push([VB, yB])))
      }
      const LT = Array.from(kT.keys());
      return (0, IB.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === dB || "nameColour" === dB) && !uB.playerHasRank("super") && (0, IB.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, IB.jsx)(FB.e, {
            name: "bolt"
          }), JB("homePage:unlockWithSuperRank"), dT && (0, IB.jsx)(vB.k, {
            onClick: () => {
              (0, mB.h)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: JB("general:getItNow")
          })]
        }), (0, IB.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === TB && (0, IB.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, LT.map((BB => {
              const TB = kT.get(BB);
              return (0, IB.jsx)(PB, {
                pack: BB,
                ownedPacks: TT,
                showStoreLink: !sB.n.includes(BB) && TB.some((BB => {
                  let [, {
                    cosmetics: TB
                  }] = BB;
                  return SB(TB, TT)
                })),
                children: (0, IB.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: TB.map((BB => {
                    let [TB, {
                      cosmetics: dB
                    }] = BB;
                    const VB = SB(dB, TT),
                      yB = BT(dB),
                      pB = !yB && Object.entries(dB).every((BB => {
                        let [TB, dB] = BB;
                        return qB.current[TB] === dB
                      }));
                    return (0, IB.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: YB()("CharacterPresetCard", {
                        CharacterPresetCardActive: pB,
                        CharacterPresetCardTryingOn: yB
                      }),
                      onClick: () => {
                        if (VB) ! function(BB) {
                          BT(BB) ? XB({}) : XB({
                            ...BB
                          })
                        }(dB);
                        else {
                          Object.keys(ZB).length > 0 && XB({});
                          const BB = Object.entries(dB);
                          for (const [TB, dB] of BB) eB(TB, dB, !1), uB.setPlayerCosmetics(TB, dB);
                          if (null !== lB.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [TB, dB] of BB) lB.gameBridge.send("updateMyCosmetic", {
                              tp: TB,
                              sp: dB
                            });
                          else NB.c.updateCosmetics(uB, BB.map((BB => {
                            let [TB, dB] = BB;
                            return {
                              tp: TB,
                              sp: dB
                            }
                          }))).catch((BB => {
                            console.error("Failed to update cosmetics", BB)
                          }))
                        }
                      },
                      children: [(0, IB.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${TB}_preview.png)`
                        }
                      }), VB && (0, IB.jsx)(FB.e, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, TB)
                  }))
                })
              }, BB)
            }))]
          }), "emote" === TB && (0, IB.jsx)(QB, {
            equippedEmoteIds: (0, DB.h)(qB.current.emote),
            ownedPacks: TT,
            xsollaSupported: dT,
            onUpdateLoadout: BB => {
              const TB = (0, DB.i)(BB);
              var dB;
              qB.current = {
                ...qB.current,
                emote: TB
              }, uB.setPlayerCosmetics("emote", TB), rB(), dB = TB, bB.current = dB, null !== AB.current && clearTimeout(AB.current), AB.current = setTimeout(nB, 350)
            },
            onEmoteSelected: GB,
            onEquipPreviewSkin: () => {
              ! function(BB, TB) {
                for (const dB of gB.q) "cape" !== dB && "nameColour" !== dB && "emote" !== dB && BB(dB, "skin" === dB ? "skin_preview" : `${dB}_none`, !1);
                TB()
              }(eB, rB)
            }
          }), "characters" !== TB && "emote" !== TB && (0, IB.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, oT.map((BB => {
              const TB = JT.get(BB);
              return (0, IB.jsx)(PB, {
                pack: BB,
                ownedPacks: TT,
                children: TB.map((TB => {
                  var VB;
                  let {
                    groupName: yB,
                    cosmetics: pB,
                    showSwatch: lB
                  } = TB;
                  const JB = yB ? null === (VB = sB.c[BB].colourGroups) || void 0 === VB ? void 0 : VB[yB] : void 0,
                    gB = `${BB}_${dB}_${yB}`;
                  return (0, IB.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [lB && JB && (0, IB.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...JB.colours.map(((BB, TB) => ({
                        color: BB,
                        index: TB
                      })))].sort(((BB, TB) => BB.color.order - TB.color.order)).map((TB => {
                        var VB;
                        let {
                          color: pB,
                          index: lB
                        } = TB;
                        return (0, IB.jsx)("div", {
                          className: YB()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (VB = WB[gB]) && void 0 !== VB ? VB : (0, sB.h)(JB.colours)) === lB
                          }),
                          style: {
                            backgroundColor: `rgb(${pB.rbg.join(",")})`
                          },
                          onClick: () => {
                            var TB;
                            hB((BB => ({
                              ...BB,
                              [gB]: lB
                            })));
                            const VB = ZB[dB],
                              pB = VB ? (0, LB.h)(dB, VB) : null,
                              JB = (null === pB || void 0 === pB ? void 0 : pB.cosmeticPack) === BB,
                              YB = JB ? VB : qB.current[dB],
                              oB = JB ? pB : (0, LB.h)(dB, YB);
                            if ((null === oB || void 0 === oB ? void 0 : oB.cosmeticPack) !== BB) return;
                            if ((null !== (TB = null === oB || void 0 === oB ? void 0 : oB.colourGroup) && void 0 !== TB ? TB : null) !== yB) return;
                            const kB = (0, LB.f)(YB);
                            if (kB) {
                              const BB = `${dB}_${kB[0]}_${lB}`;
                              JB ? XB((TB => ({
                                ...TB,
                                [dB]: BB
                              }))) : eB(dB, BB, !0)
                            }
                          }
                        }, pB.rbg.join())
                      }))
                    }), pB.map((BB => {
                      const TB = BB === qB.current[dB],
                        VB = ZB[dB] === BB,
                        yB = cB(dB, BB, TT);
                      let pB = !0;
                      return yB || TB || ("cape" !== dB || (0, tB.Md)(uB.getPlayerRanks(), BB)) && ("nameColour" !== dB || uB.playerHasRank("super")) || (pB = !1), (0, IB.jsxs)("div", {
                        className: YB()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: TB && !VB,
                          TryingOnCharCustomPartWrapper: VB,
                          DisabledCharCustomPartWrapper: !pB,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === dB
                        }),
                        onClick: () => {
                          if (pB)
                            if (yB) XB((TB => {
                              if (TB[dB] === BB) {
                                const BB = {
                                  ...TB
                                };
                                return delete BB[dB], BB
                              }
                              return {
                                ...TB,
                                [dB]: BB
                              }
                            }));
                            else {
                              var TB;
                              if (ZB[dB] && XB((BB => {
                                  const TB = {
                                    ...BB
                                  };
                                  return delete TB[dB], TB
                                })), BB === qB.current[dB]) return;
                              null !== (TB = jB.current) && void 0 !== TB && TB.isReady() && eB(dB, BB, !0)
                            }
                        },
                        children: ["profileEffect" === dB ? (0, IB.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, IB.jsx)(UB.i, {
                            playerSocialPreview: (0, wB.e)(BB, {
                              name: uB.getPlayerName(),
                              cosmetics: uB.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, IB.jsx)("div", {
                          className: YB()("CharCustomPart", {
                            PixelatedImage: "cape" === dB
                          }),
                          style: (0, LB.h)(dB, BB).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,LB.h)(dB,BB).previewTex}.png)`
                          } : {
                            backgroundColor: oB.t[BB],
                            borderRadius: "50%"
                          }
                        }), yB && (0, IB.jsx)(FB.e, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, BB)
                    }))]
                  }, null !== yB && void 0 !== yB ? yB : "ungrouped")
                }))
              }, BB)
            }))]
          }), (0, IB.jsx)(fB.CharacterPreview, {
            ref: jB,
            forcedCosmetics: ZB,
            Eo: CB.id,
            emotePlaySeq: CB.seq,
            onReady: () => {
              for (const BB of gB.q) eB(BB, qB.current[BB], !1)
            }
          })]
        })]
      })
    }))
  },
  39911: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      CharacterPreview: () => oB
    });
    var VB = dB(62),
      yB = dB(2368),
      pB = dB(1117),
      lB = dB(8155),
      JB = dB(35817),
      YB = dB(3121),
      gB = dB(980);
    const oB = (0, VB.memo)((0, VB.forwardRef)((function(BB, TB) {
      let {
        onReady: dB,
        onDrawn: oB,
        owner: kB = "other",
        framing: LB = "player",
        forcedCosmetics: OB,
        Eo: DB,
        emotePlaySeq: uB
      } = BB;
      const HB = (0, VB.useRef)(null),
        {
          width: EB,
          height: vB
        } = (0, yB.b)(HB),
        mB = (0, VB.useRef)(null),
        iB = (0, VB.useRef)({}),
        NB = (0, VB.useRef)({}),
        [tB, fB] = (0, VB.useState)(!1),
        sB = (0, VB.useRef)(dB);
      sB.current = dB;
      const MB = (0, VB.useRef)(oB);
      MB.current = oB;
      const zB = (0, VB.useRef)(null),
        wB = (0, VB.useRef)(!1),
        UB = (0, VB.useRef)(!1),
        FB = (0, VB.useCallback)((() => {
          const BB = mB.current;
          if (!BB || !MB.current || wB.current || !UB.current) return;
          const TB = {};
          zB.current = TB, queueMicrotask((() => {
            if (zB.current !== TB) return;
            const dB = Promise.all(pB.q.map((TB => BB.untilDrawn(TB)))).catch((BB => {
                console.error("Failed to draw the character preview", BB)
              })),
              VB = new Promise((BB => {
                setTimeout(BB, 1e4)
              }));
            Promise.race([dB, VB]).then((() => {
              var dB;
              mB.current !== BB || zB.current !== TB || wB.current || (wB.current = !0, null === (dB = MB.current) || void 0 === dB || dB.call(MB))
            }))
          }))
        }), []);
      return (0, VB.useImperativeHandle)(TB, (() => {
        const BB = (BB, TB) => {
          var dB;
          (iB.current[BB] = TB, null !== OB && void 0 !== OB && OB[BB]) || (null === (dB = mB.current) || void 0 === dB || dB.setCosmetic(BB, TB), FB())
        };
        return {
          updateCosmetic: BB,
          setAllCosmetics(TB) {
            for (const VB of pB.q) {
              var dB;
              BB(VB, null !== (dB = TB[VB]) && void 0 !== dB ? dB : (0, lB.d)(VB))
            }
          },
          isReady() {
            var BB, TB;
            return null !== (BB = null === (TB = mB.current) || void 0 === TB ? void 0 : TB.isReady()) && void 0 !== BB && BB
          },
          resetCamera() {
            var BB;
            null === (BB = mB.current) || void 0 === BB || BB.resetCamera()
          },
          async ensureReadyForCapture(BB) {
            var TB;
            await (null === (TB = mB.current) || void 0 === TB ? void 0 : TB.untilDrawn(BB))
          },
          getDevTools() {
            var BB;
            return null !== (BB = mB.current) && void 0 !== BB && BB.isReady() ? mB.current.dev : null
          }
        }
      }), [OB, FB]), (0, VB.useEffect)((() => {
        const BB = YB.b.register(kB),
          TB = JB.e.openCharacter(HB.current, LB);
        mB.current = TB;
        let dB = !0;
        return TB.ready.then((() => {
          dB && (fB(!0), sB.current())
        })).catch((BB => {
          console.error("Failed to set up the character preview", BB)
        })), () => {
          dB = !1, BB(), TB.close(), mB.current = null
        }
      }), []), (0, VB.useEffect)((() => {
        EB <= 0 || vB <= 0 || mB.current.resize(EB, vB)
      }), [EB, vB]), (0, VB.useEffect)((() => {
        if (!tB) return;
        const BB = NB.current;
        for (const TB of pB.q) {
          const dB = null === OB || void 0 === OB ? void 0 : OB[TB],
            VB = BB[TB];
          dB && dB !== VB ? mB.current.setCosmetic(TB, dB) : !dB && VB && iB.current[TB] && mB.current.setCosmetic(TB, iB.current[TB])
        }
        NB.current = {
          ...OB
        }, UB.current = !0, FB()
      }), [OB, tB, FB]), (0, VB.useEffect)((() => {
        tB && mB.current.playEmote(null !== DB && void 0 !== DB ? DB : null)
      }), [DB, uB, tB]), (0, gB.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: HB
      })
    })))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);