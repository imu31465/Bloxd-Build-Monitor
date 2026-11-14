export const id = 259;
export const ids = [259, 260];
export const modules = {
  39026: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      CharacterCustomisationUI: () => GF
    });
    var CF = SF(46),
      AF = SF(2279),
      uF = SF(996),
      hF = SF(1576),
      bW = SF(918),
      dF = SF.n(bW),
      PF = SF(1101),
      RF = SF(553),
      iW = SF(1046),
      eF = SF(1834),
      EF = SF(2305),
      QF = SF(7744),
      rW = SF(1841),
      gW = SF(2316),
      tW = SF(1607),
      TF = SF(1266),
      aW = SF(1875),
      kW = SF(11),
      qW = SF(1336),
      VF = SF(271),
      NF = SF(39032),
      DF = SF(1404),
      LF = SF(2273),
      mW = SF(1775),
      OF = SF(2012),
      xW = SF(929);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var ZF = SF(1510),
      oF = SF(1198),
      YF = SF(971);

    function MF(FF) {
      var WF;
      let {
        pack: SF,
        ownedPacks: CF,
        children: AF
      } = FF;
      const {
        t: uF
      } = (0, iW.B)(), hF = DF.d[SF], bW = hF.purchasable, PF = CF.includes(SF), RF = bW && !PF, eF = LF.m[SF];
      return (0, YF.jsxs)("div", {
        className: dF()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: RF
        }),
        children: [eF && (0, YF.jsx)(eF, {}), (0, YF.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, YF.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (WF = hF.displayName) && void 0 !== WF ? WF : SF
          }), RF && (0, YF.jsxs)(TF.z, {
            onClick: () => {
              (0, LF.i)(SF)
            },
            children: [(0, YF.jsx)(xW.e, {
              name: "store"
            }), " ", uF("general:viewInShop")]
          })]
        }), RF && "bee" === SF && (0, YF.jsx)(LF.d, {}), AF]
      })
    }

    function cW(FF) {
      let {
        equippedEmoteIds: WF,
        ownedPacks: SF,
        xsollaSupported: CF,
        onUpdateLoadout: AF,
        onEmoteSelected: uF,
        onEquipPreviewSkin: hF
      } = FF;
      const {
        t: bW
      } = (0, iW.B)(), RF = new Set(WF), EF = new Map, QF = Object.keys(eF.i.emote).sort(((FF, WF) => {
        var SF, CF, AF, uF;
        return (null !== (SF = null === (CF = (0, eF.n)("emote", FF)) || void 0 === CF ? void 0 : CF.clientIdx) && void 0 !== SF ? SF : 0) - (null !== (AF = null === (uF = (0, eF.n)("emote", WF)) || void 0 === uF ? void 0 : uF.clientIdx) && void 0 !== AF ? AF : 0)
      })).filter((FF => {
        const WF = (0, eF.q)("emote", FF),
          AF = (0, eF.n)("emote", FF).cosmeticPack,
          uF = SF.includes(AF);
        return !(WF.purchasable && !uF && !CF) && (WF.clientSelectable || uF)
      }));
      for (const dF of QF) {
        const FF = (0, eF.n)("emote", dF).cosmeticPack;
        EF.has(FF) || EF.set(FF, []), EF.get(FF).push(dF)
      }
      const gW = Array.from(EF.keys());
      return (0, YF.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, YF.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, YF.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: bW("emotes:equippedCount", {
              count: WF.length,
              max: PF.m
            })
          }), (0, YF.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: bW("emotes:loadoutHint")
          })]
        }), gW.map((FF => {
          const CF = EF.get(FF);
          return (0, YF.jsx)(MF, {
            pack: FF,
            ownedPacks: SF,
            children: (0, YF.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: CF.map((CF => {
                var hF;
                const iW = WF.indexOf(CF),
                  EF = -1 !== iW,
                  QF = WF.length >= PF.m,
                  gW = (0, eF.q)("emote", CF).purchasable && !SF.includes(FF),
                  tW = gW || !EF && QF,
                  TF = (0, rW.g)(CF);
                return (0, YF.jsxs)("div", {
                  className: dF()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: EF
                  }),
                  onClick: () => {
                    uF(CF)
                  },
                  children: [(0, YF.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, YF.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${CF}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, YF.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (hF = null === TF || void 0 === TF ? void 0 : TF.displayName) && void 0 !== hF ? hF : CF
                    })]
                  }), (0, YF.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [EF && (0, YF.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: iW + 1
                    }), gW && (0, YF.jsx)(xW.e, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, YF.jsx)(oF.g, {
                      tooltipInner: (0, YF.jsx)(YF.Fragment, {
                        children: bW(EF ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, YF.jsx)("div", {
                        className: dF()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: tW,
                          EmoteCustomPartToggleEquipped: EF
                        }),
                        onClick: FF => {
                          FF.stopPropagation(), tW || function(FF) {
                            RF.has(FF) ? AF(WF.filter((WF => WF !== FF))) : WF.length >= PF.m || AF([...WF, FF])
                          }(CF)
                        },
                        children: (0, YF.jsx)(xW.e, {
                          name: EF ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, CF)
              }))
            })
          }, FF)
        }))]
      })
    }
    const GF = (0, CF.memo)((function(FF) {
      let {
        selectedTab: WF
      } = FF;
      const SF = "characters" === WF ? "skin" : WF,
        {
          t: bW
        } = (0, iW.B)(),
        {
          userContext: rW,
          isUserContextUpdating: LF
        } = (0, uF.b)(),
        oF = (0, AF.d)(),
        {
          gameState: GF,
          initSdkSelectorFinished: zW
        } = (0, kW.d)(["gameState", "initSdkSelectorFinished"]),
        [IF, fF] = (0, CF.useState)({}),
        [yW, sF] = (0, CF.useState)({}),
        {
          previewEmote: nF,
          triggerEmote: HF
        } = (0, gW.c)(),
        KF = (0, CF.useRef)(PF.v.reduce(((FF, WF) => (FF[WF] = (0, QF.e)(WF), FF)), {})),
        wF = (0, CF.useRef)(!1),
        XF = (0, CF.useRef)(null),
        UF = (0, CF.useRef)(null),
        BF = (0, CF.useRef)(null);

      function jW() {
        null !== UF.current && (clearTimeout(UF.current), UF.current = null);
        const FF = BF.current;
        if (null === FF) return;
        BF.current = null;
        const WF = {
          ZD: "emote",
          cL: FF
        };
        null !== hF.gameBridge.latest("connectedGame").websocketUrl ? hF.gameBridge.send("updateMyCosmetic", WF) : qW.b.updateCosmetics(rW, [WF]).catch((FF => {
          console.error("Failed to update emote loadout", FF)
        }))
      }

      function vW(FF, WF, SF) {
        var CF, AF, uF;
        if (KF.current = {
            ...KF.current,
            [FF]: WF
          }, oF(), SF) {
          const SF = {
            ZD: FF,
            cL: WF
          };
          null !== hF.gameBridge.latest("connectedGame").websocketUrl ? hF.gameBridge.send("updateMyCosmetic", SF) : qW.b.updateCosmetics(rW, [SF]).catch((FF => {
            console.error("Failed to update cosmetic", FF)
          })), rW.setPlayerCosmetics(FF, WF)
        }
        const bW = (0, eF.n)(FF, WF);
        if (null !== bW && void 0 !== bW && bW.colourGroup && null !== (CF = DF.d[bW.cosmeticPack].colourGroups) && void 0 !== CF && null !== (AF = CF[bW.colourGroup]) && void 0 !== AF && AF.showSwatchSelector) {
          const SF = (0, eF.l)(WF);
          SF && sF((WF => ({
            ...WF,
            [`${bW.cosmeticPack}_${FF}_${bW.colourGroup}`]: parseInt(SF[1])
          })))
        }
        null !== (uF = XF.current) && void 0 !== uF && uF.isReady() && XF.current.updateCosmetic(FF, WF)
      }

      function JF(FF) {
        return Object.entries(FF).every((FF => {
          let [WF, SF] = FF;
          return IF[WF] === SF
        }))
      }(0, tW.b)("cosmeticsUpdated", (FF => {
        let WF = !1;
        for (const {
            local: SF,
            ZD: CF,
            cL: AF
          }
          of FF) {
          if (!SF) return;
          WF = !0, wF.current || vW(CF, AF, !1), oF()
        }
        WF && (wF.current = !0)
      })), (0, CF.useEffect)((() => {
        if (!LF) {
          for (const [FF, WF] of Object.entries(rW.getPlayerCosmetics())) vW(FF, WF, !1);
          oF()
        }
      }), [LF]), (0, CF.useEffect)((() => () => {
        jW()
      }), []);
      const pF = rW.getOwnedCosmeticPacks(),
        lF = (0, ZF.siteSupportsPurchases)(),
        FW = Object.keys(eF.i[SF]).filter((FF => {
          const WF = (0, eF.q)(SF, FF),
            CF = (0, eF.n)(SF, FF).cosmeticPack,
            AF = pF.includes(CF);
          return !(WF.purchasable && !AF && !lF) && (WF.clientSelectable || AF)
        })).sort(((FF, WF) => {
          var CF, AF, uF, hF;
          return (null !== (CF = null === (AF = (0, eF.n)(SF, FF)) || void 0 === AF ? void 0 : AF.clientIdx) && void 0 !== CF ? CF : 0) - (null !== (uF = null === (hF = (0, eF.n)(SF, WF)) || void 0 === hF ? void 0 : hF.clientIdx) && void 0 !== uF ? uF : 0)
        })),
        WW = new Map;
      for (const CF of FW) {
        var SW;
        const FF = null === (SW = (0, eF.n)(SF, CF)) || void 0 === SW ? void 0 : SW.cosmeticPack;
        WW.has(FF) || WW.set(FF, []), WW.get(FF).push(CF)
      }
      const CW = new Map;
      for (const [CF, AF] of WW) {
        const FF = [],
          WF = new Map;
        for (const CF of AF) {
          var AW, uW;
          const AF = null !== (AW = null === (uW = (0, eF.n)(SF, CF)) || void 0 === uW ? void 0 : uW.colourGroup) && void 0 !== AW ? AW : null;
          WF.has(AF) || (WF.set(AF, []), FF.push(AF)), WF.get(AF).push(CF)
        }
        const uF = FF.map((FF => {
          var AF;
          const uF = WF.get(FF),
            hF = FF ? null === (AF = DF.d[CF].colourGroups) || void 0 === AF ? void 0 : AF[FF] : void 0;
          if ((null === hF || void 0 === hF ? void 0 : hF.showSwatchSelector) && hF) {
            var bW;
            const WF = null !== (bW = yW[`${CF}_${SF}_${FF}`]) && void 0 !== bW ? bW : (0, DF.e)(hF.colours);
            return {
              groupName: FF,
              cosmetics: uF.filter((FF => {
                const SF = (0, eF.l)(FF);
                return !SF || WF.toString() === SF[1].toString()
              }))
            }
          }
          return {
            groupName: FF,
            cosmetics: uF
          }
        }));
        CW.set(CF, uF)
      }
      const hW = Array.from(WW.keys()),
        bS = new Map;
      for (const [CF, AF] of Object.entries(EF.b)) {
        const FF = DF.d[AF.cosmeticPack],
          WF = pF.includes(AF.cosmeticPack);
        (FF.clientSelectable || WF) && ((!FF.purchasable || WF || lF) && (bS.has(AF.cosmeticPack) || bS.set(AF.cosmeticPack, []), bS.get(AF.cosmeticPack).push([CF, AF])))
      }
      const dW = Array.from(bS.keys());
      return (0, YF.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === SF || "nameColour" === SF) && !rW.playerHasRank("super") && (0, YF.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, YF.jsx)(xW.e, {
            name: "bolt"
          }), bW("homePage:unlockWithSuperRank"), lF && (0, YF.jsx)(TF.k, {
            onClick: () => {
              (0, aW.i)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: bW("general:getItNow")
          })]
        }), (0, YF.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === WF && (0, YF.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, dW.map((FF => {
              const WF = bS.get(FF),
                SF = DF.d[FF].purchasable && !pF.includes(FF);
              return (0, YF.jsx)(MF, {
                pack: FF,
                ownedPacks: pF,
                children: (0, YF.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: WF.map((FF => {
                    let [WF, {
                      cosmetics: CF
                    }] = FF;
                    const AF = JF(CF),
                      uF = !AF && Object.entries(CF).every((FF => {
                        let [WF, SF] = FF;
                        return KF.current[WF] === SF
                      }));
                    return (0, YF.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: dF()("CharacterPresetCard", {
                        CharacterPresetCardActive: uF,
                        CharacterPresetCardTryingOn: AF
                      }),
                      onClick: () => {
                        if (SF) ! function(FF) {
                          JF(FF) ? fF({}) : fF({
                            ...FF
                          })
                        }(CF);
                        else {
                          Object.keys(IF).length > 0 && fF({});
                          const FF = Object.entries(CF);
                          for (const [WF, SF] of FF) vW(WF, SF, !1), rW.setPlayerCosmetics(WF, SF);
                          if (null !== hF.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [WF, SF] of FF) hF.gameBridge.send("updateMyCosmetic", {
                              ZD: WF,
                              cL: SF
                            });
                          else qW.b.updateCosmetics(rW, FF.map((FF => {
                            let [WF, SF] = FF;
                            return {
                              ZD: WF,
                              cL: SF
                            }
                          }))).catch((FF => {
                            console.error("Failed to update cosmetics", FF)
                          }))
                        }
                      },
                      children: [(0, YF.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${WF}_preview.png)`
                        }
                      }), SF && (0, YF.jsx)(xW.e, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, WF)
                  }))
                })
              }, FF)
            }))]
          }), "emote" === WF && (0, YF.jsx)(cW, {
            equippedEmoteIds: (0, QF.g)(KF.current.emote),
            ownedPacks: pF,
            xsollaSupported: lF,
            onUpdateLoadout: FF => {
              const WF = (0, QF.h)(FF);
              var SF;
              KF.current = {
                ...KF.current,
                emote: WF
              }, rW.setPlayerCosmetics("emote", WF), oF(), SF = WF, BF.current = SF, null !== UF.current && clearTimeout(UF.current), UF.current = setTimeout(jW, 350)
            },
            onEmoteSelected: HF,
            onEquipPreviewSkin: () => {
              ! function(FF, WF) {
                for (const SF of PF.v) "cape" !== SF && "nameColour" !== SF && "emote" !== SF && FF(SF, "skin" === SF ? "skin_preview" : `${SF}_none`, !1);
                WF()
              }(vW, oF)
            }
          }), "characters" !== WF && "emote" !== WF && (0, YF.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, hW.map((FF => {
              const WF = CW.get(FF),
                CF = DF.d[FF].purchasable && !pF.includes(FF);
              return (0, YF.jsx)(MF, {
                pack: FF,
                ownedPacks: pF,
                children: WF.map((WF => {
                  var AF;
                  let {
                    groupName: uF,
                    cosmetics: hF
                  } = WF;
                  const bW = uF ? null === (AF = DF.d[FF].colourGroups) || void 0 === AF ? void 0 : AF[uF] : void 0,
                    PF = `${FF}_${SF}_${uF}`,
                    iW = null === bW || void 0 === bW ? void 0 : bW.showSwatchSelector;
                  return (0, YF.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [iW && bW && (0, YF.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...bW.colours.map(((FF, WF) => ({
                        color: FF,
                        index: WF
                      })))].sort(((FF, WF) => FF.color.order - WF.color.order)).map((WF => {
                        var CF;
                        let {
                          color: AF,
                          index: hF
                        } = WF;
                        return (0, YF.jsx)("div", {
                          className: dF()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (CF = yW[PF]) && void 0 !== CF ? CF : (0, DF.e)(bW.colours)) === hF
                          }),
                          style: {
                            backgroundColor: `rgb(${AF.rbg.join(",")})`
                          },
                          onClick: () => {
                            var WF;
                            sF((FF => ({
                              ...FF,
                              [PF]: hF
                            })));
                            const CF = IF[SF],
                              AF = CF ? (0, eF.n)(SF, CF) : null,
                              bW = (null === AF || void 0 === AF ? void 0 : AF.cosmeticPack) === FF,
                              dF = bW ? CF : KF.current[SF],
                              RF = bW ? AF : (0, eF.n)(SF, dF);
                            if ((null === RF || void 0 === RF ? void 0 : RF.cosmeticPack) !== FF) return;
                            if ((null !== (WF = null === RF || void 0 === RF ? void 0 : RF.colourGroup) && void 0 !== WF ? WF : null) !== uF) return;
                            const iW = (0, eF.l)(dF);
                            if (iW) {
                              const FF = `${SF}_${iW[0]}_${hF}`;
                              bW ? fF((WF => ({
                                ...WF,
                                [SF]: FF
                              }))) : vW(SF, FF, !0)
                            }
                          }
                        }, AF.rbg.join())
                      }))
                    }), hF.map((FF => {
                      const WF = FF === KF.current[SF],
                        AF = IF[SF] === FF;
                      let uF = !0;
                      return CF || WF || ("cape" !== SF || (0, VF.Nd)(rW.getPlayerRanks(), FF)) && ("nameColour" !== SF || rW.playerHasRank("super")) || (uF = !1), (0, YF.jsxs)("div", {
                        className: dF()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: WF && !AF,
                          TryingOnCharCustomPartWrapper: AF,
                          DisabledCharCustomPartWrapper: !uF,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === SF
                        }),
                        onClick: () => {
                          if (uF)
                            if (CF) fF((WF => {
                              if (WF[SF] === FF) {
                                const FF = {
                                  ...WF
                                };
                                return delete FF[SF], FF
                              }
                              return {
                                ...WF,
                                [SF]: FF
                              }
                            }));
                            else {
                              var WF;
                              if (IF[SF] && fF((FF => {
                                  const WF = {
                                    ...FF
                                  };
                                  return delete WF[SF], WF
                                })), FF === KF.current[SF]) return;
                              null !== (WF = XF.current) && void 0 !== WF && WF.isReady() && vW(SF, FF, !0)
                            }
                        },
                        children: ["profileEffect" === SF ? (0, YF.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, YF.jsx)(OF.d, {
                            playerSocialPreview: (0, mW.e)(FF, {
                              name: rW.getPlayerName(),
                              cosmetics: rW.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, YF.jsx)("div", {
                          className: dF()("CharCustomPart", {
                            PixelatedImage: "cape" === SF
                          }),
                          style: (0, eF.n)(SF, FF).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,eF.n)(SF,FF).previewTex}.png)`
                          } : {
                            backgroundColor: RF.u[FF],
                            borderRadius: "50%"
                          }
                        }), CF && (0, YF.jsx)(xW.e, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, FF)
                    }))]
                  }, null !== uF && void 0 !== uF ? uF : "ungrouped")
                }))
              }, FF)
            }))]
          }), (0, YF.jsx)(NF.CharacterPreview, {
            ref: XF,
            forcedCosmetics: IF,
            RL: nF.id,
            emotePlaySeq: nF.seq,
            onReady: () => {
              for (const FF of PF.v) vW(FF, KF.current[FF], !1)
            }
          })]
        })]
      })
    }))
  },
  39032: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      CharacterPreview: () => RF
    });
    var CF = SF(46),
      AF = SF(2161),
      uF = SF(1101),
      hF = SF(7744),
      bW = SF(35327),
      dF = SF(2823),
      PF = SF(971);
    const RF = (0, CF.memo)((0, CF.forwardRef)((function(FF, WF) {
      let {
        onReady: SF,
        owner: RF = "other",
        forcedCosmetics: iW,
        RL: eF,
        emotePlaySeq: EF
      } = FF;
      const QF = (0, CF.useRef)(null),
        {
          width: rW,
          height: gW
        } = (0, AF.c)(QF),
        tW = (0, CF.useRef)(null),
        TF = (0, CF.useRef)({}),
        aW = (0, CF.useRef)({}),
        [kW, qW] = (0, CF.useState)(!1),
        VF = (0, CF.useRef)(SF);
      return VF.current = SF, (0, CF.useImperativeHandle)(WF, (() => {
        const FF = (FF, WF) => {
          var SF;
          (TF.current[FF] = WF, null !== iW && void 0 !== iW && iW[FF]) || (null === (SF = tW.current) || void 0 === SF || SF.setCosmetic(FF, WF))
        };
        return {
          updateCosmetic: FF,
          setAllCosmetics(WF) {
            for (const CF of uF.v) {
              var SF;
              FF(CF, null !== (SF = WF[CF]) && void 0 !== SF ? SF : (0, hF.e)(CF))
            }
          },
          isReady() {
            var FF, WF;
            return null !== (FF = null === (WF = tW.current) || void 0 === WF ? void 0 : WF.isReady()) && void 0 !== FF && FF
          },
          async ensureReadyForCapture(FF) {
            var WF;
            await (null === (WF = tW.current) || void 0 === WF ? void 0 : WF.untilDrawn(FF))
          },
          getDevTools() {
            var FF;
            return null !== (FF = tW.current) && void 0 !== FF && FF.isReady() ? tW.current.dev : null
          }
        }
      }), [iW]), (0, CF.useEffect)((() => {
        const FF = dF.e.register(RF),
          WF = bW.c.openCharacter(QF.current);
        tW.current = WF;
        let SF = !0;
        return WF.ready.then((() => {
          SF && (qW(!0), VF.current())
        })).catch((FF => {
          console.error("Failed to set up the character preview", FF)
        })), () => {
          SF = !1, FF(), WF.close(), tW.current = null
        }
      }), []), (0, CF.useEffect)((() => {
        rW <= 0 || gW <= 0 || tW.current.resize(rW, gW)
      }), [rW, gW]), (0, CF.useEffect)((() => {
        if (!kW) return;
        const FF = aW.current;
        for (const WF of uF.v) {
          const SF = null === iW || void 0 === iW ? void 0 : iW[WF],
            CF = FF[WF];
          SF && SF !== CF ? tW.current.setCosmetic(WF, SF) : !SF && CF && TF.current[WF] && tW.current.setCosmetic(WF, TF.current[WF])
        }
        aW.current = {
          ...iW
        }
      }), [iW, kW]), (0, CF.useEffect)((() => {
        kW && tW.current.playEmote(null !== eF && void 0 !== eF ? eF : null)
      }), [eF, EF, kW]), (0, PF.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: QF
      })
    })))
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);