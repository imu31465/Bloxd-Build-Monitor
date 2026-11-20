export const id = 281;
export const ids = [281, 282];
export const modules = {
  40877: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      CharacterCustomisationUI: () => Lu
    });
    var Eu = yu(64),
      Ku = yu(2780),
      Qu = yu(1107),
      mu = yu(1855),
      Ju = yu(1035),
      Nu = yu.n(Ju),
      Xu = yu(1215),
      Vu = yu(595),
      ru = yu(1170),
      Bu = yu(2128),
      xu = yu(1517),
      Su = yu(8555),
      pu = yu(2132),
      Tu = yu(2878),
      Wu = yu(1899),
      ju = yu(1408),
      Hu = yu(2162),
      du = yu(27),
      bu = yu(1447),
      Cu = yu(343),
      ku = yu(40884),
      eu = yu(1511),
      Au = yu(2229),
      Du = yu(2774),
      Mu = yu(2066),
      Iu = yu(2457),
      Gu = yu(1043);
    yu(9098), yu(2886);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var Uu = yu(2180),
      nu = yu(1325),
      su = yu(1079);

    function tu(uu, Ru, yu) {
      return (0, Bu.l)(uu, Ru).purchasable && !(0, Au.k)(uu, Ru, yu)
    }

    function lu(uu, Ru) {
      return Object.entries(uu).some((uu => {
        let [yu, Eu] = uu;
        return tu(yu, Eu, Ru)
      }))
    }

    function gu(uu) {
      var Ru;
      let {
        pack: yu,
        ownedPacks: Eu,
        showStoreLink: Ku = !1,
        children: Qu
      } = uu;
      const {
        t: mu
      } = (0, ru.E)(), Ju = eu.d[yu], Xu = Ju.purchasable && !Eu.includes(yu) && eu.r.includes(yu), Vu = Du.l[yu];
      return (0, su.jsxs)("div", {
        className: Nu()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: Xu
        }),
        children: [Vu && (0, su.jsx)(Vu, {}), (0, su.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, su.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (Ru = Ju.displayName) && void 0 !== Ru ? Ru : yu
          }), (Xu || Ku) && (0, su.jsxs)(ju.x, {
            onClick: () => {
              Xu ? (0, Du.k)(yu) : (0, Hu.n)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, su.jsx)(Gu.c, {
              name: "store"
            }), " ", mu("general:viewInShop")]
          })]
        }), Xu && "bee" === yu && (0, su.jsx)(Du.e, {}), Qu]
      })
    }

    function cu(uu) {
      let {
        equippedEmoteIds: Ru,
        ownedPacks: yu,
        canBuy: Eu,
        onUpdateLoadout: Ku,
        onEmoteSelected: Qu,
        onEquipPreviewSkin: mu
      } = uu;
      const {
        t: Ju
      } = (0, ru.E)(), Vu = new Set(Ru), xu = new Map, Su = Object.keys(Bu.f.emote).sort(((uu, Ru) => {
        var yu, Eu, Ku, Qu;
        return (null !== (yu = null === (Eu = (0, Bu.k)("emote", uu)) || void 0 === Eu ? void 0 : Eu.clientIdx) && void 0 !== yu ? yu : 0) - (null !== (Ku = null === (Qu = (0, Bu.k)("emote", Ru)) || void 0 === Qu ? void 0 : Qu.clientIdx) && void 0 !== Ku ? Ku : 0)
      })).filter((uu => {
        const Ru = (0, Bu.l)("emote", uu),
          Ku = (0, Au.k)("emote", uu, yu);
        return !(Ru.purchasable && !Ku && !Eu) && (Ru.clientSelectable || Ku)
      }));
      for (const Nu of Su) {
        const uu = (0, Bu.k)("emote", Nu).cosmeticPack;
        xu.has(uu) || xu.set(uu, []), xu.get(uu).push(Nu)
      }
      const Tu = Array.from(xu.keys());
      return (0, su.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, su.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, su.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: Ju("emotes:equippedCount", {
              count: Ru.length,
              max: Xu.p
            })
          }), (0, su.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: Ju("emotes:loadoutHint")
          })]
        }), Tu.map((uu => {
          const Eu = xu.get(uu);
          return (0, su.jsx)(gu, {
            pack: uu,
            ownedPacks: yu,
            children: (0, su.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: Eu.map((uu => {
                var Eu;
                const mu = Ru.indexOf(uu),
                  ru = -1 !== mu,
                  Bu = Ru.length >= Xu.p,
                  xu = tu("emote", uu, yu),
                  Su = xu || !ru && Bu,
                  Tu = (0, pu.i)(uu);
                return (0, su.jsxs)("div", {
                  className: Nu()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: ru
                  }),
                  onClick: () => {
                    Qu(uu)
                  },
                  children: [(0, su.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, su.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${uu}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, su.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (Eu = null === Tu || void 0 === Tu ? void 0 : Tu.displayName) && void 0 !== Eu ? Eu : uu
                    })]
                  }), (0, su.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [ru && (0, su.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: mu + 1
                    }), xu && (0, su.jsx)(Gu.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, su.jsx)(nu.i, {
                      tooltipInner: (0, su.jsx)(su.Fragment, {
                        children: Ju(ru ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, su.jsx)("div", {
                        className: Nu()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: Su,
                          EmoteCustomPartToggleEquipped: ru
                        }),
                        onClick: yu => {
                          yu.stopPropagation(), Su || function(uu) {
                            Vu.has(uu) ? Ku(Ru.filter((Ru => Ru !== uu))) : Ru.length >= Xu.p || Ku([...Ru, uu])
                          }(uu)
                        },
                        children: (0, su.jsx)(Gu.c, {
                          name: ru ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, uu)
              }))
            })
          }, uu)
        }))]
      })
    }
    const Lu = (0, Eu.memo)((function(uu) {
      let {
        selectedTab: Ru
      } = uu;
      const yu = "characters" === Ru ? "skin" : Ru,
        {
          t: Ju
        } = (0, ru.E)(),
        {
          userContext: pu,
          isUserContextUpdating: Du
        } = (0, Qu.d)(),
        nu = (0, Ku.c)(),
        {
          gameState: Lu,
          initSdkSelectorFinished: zu
        } = (0, du.j)(["gameState", "initSdkSelectorFinished"]),
        [Fu, wu] = (0, Eu.useState)({}),
        [Zu, hu] = (0, Eu.useState)({}),
        {
          previewEmote: Pu,
          triggerEmote: iu
        } = (0, Tu.d)(),
        Yu = (0, Eu.useRef)(Xu.w.reduce(((uu, Ru) => (uu[Ru] = (0, Su.b)(Ru), uu)), {})),
        ou = (0, Eu.useRef)(!1),
        qu = (0, Eu.useRef)(null),
        Ou = (0, Eu.useRef)(null),
        vu = (0, Eu.useRef)(null);

      function au() {
        null !== Ou.current && (clearTimeout(Ou.current), Ou.current = null);
        const uu = vu.current;
        if (null === uu) return;
        vu.current = null;
        const Ru = {
          Py: "emote",
          iy: uu
        };
        null !== mu.gameBridge.latest("connectedGame").websocketUrl ? mu.gameBridge.send("updateMyCosmetic", Ru) : bu.e.updateCosmetics(pu, [Ru]).catch((uu => {
          console.error("Failed to update emote loadout", uu)
        }))
      }

      function fu(uu, Ru, yu) {
        var Eu, Ku, Qu;
        if (Yu.current = {
            ...Yu.current,
            [uu]: Ru
          }, nu(), yu) {
          const yu = {
            Py: uu,
            iy: Ru
          };
          null !== mu.gameBridge.latest("connectedGame").websocketUrl ? mu.gameBridge.send("updateMyCosmetic", yu) : bu.e.updateCosmetics(pu, [yu]).catch((uu => {
            console.error("Failed to update cosmetic", uu)
          })), pu.setPlayerCosmetics(uu, Ru)
        }
        const Ju = (0, Bu.k)(uu, Ru);
        if (null !== Ju && void 0 !== Ju && Ju.colourGroup && null !== (Eu = eu.d[Ju.cosmeticPack].colourGroups) && void 0 !== Eu && null !== (Ku = Eu[Ju.colourGroup]) && void 0 !== Ku && Ku.showSwatchSelector) {
          const yu = (0, Bu.j)(Ru);
          yu && hu((Ru => ({
            ...Ru,
            [`${Ju.cosmeticPack}_${uu}_${Ju.colourGroup}`]: parseInt(yu[1])
          })))
        }
        null !== (Qu = qu.current) && void 0 !== Qu && Qu.isReady() && qu.current.updateCosmetic(uu, Ru)
      }

      function uR(uu) {
        return Object.entries(uu).every((uu => {
          let [Ru, yu] = uu;
          return Fu[Ru] === yu
        }))
      }(0, Wu.d)("cosmeticsUpdated", (uu => {
        let Ru = !1;
        for (const {
            local: yu,
            Py: Eu,
            iy: Ku
          }
          of uu) {
          if (!yu) return;
          Ru = !0, ou.current || fu(Eu, Ku, !1), nu()
        }
        Ru && (ou.current = !0)
      })), (0, Eu.useEffect)((() => {
        if (!Du) {
          for (const [uu, Ru] of Object.entries(pu.getPlayerCosmetics())) fu(uu, Ru, !1);
          nu()
        }
      }), [Du]), (0, Eu.useEffect)((() => () => {
        au()
      }), []);
      const RR = pu.getOwnedCosmeticPacks(),
        yR = (0, Uu.purchasesAllowed)(),
        ER = Object.keys(Bu.f[yu]).filter((uu => {
          const Ru = (0, Bu.l)(yu, uu),
            Eu = (0, Au.k)(yu, uu, RR);
          return !(Ru.purchasable && !Eu && !yR) && (Ru.clientSelectable || Eu)
        })).sort(((uu, Ru) => {
          var Eu, Ku, Qu, mu;
          return (null !== (Eu = null === (Ku = (0, Bu.k)(yu, uu)) || void 0 === Ku ? void 0 : Ku.clientIdx) && void 0 !== Eu ? Eu : 0) - (null !== (Qu = null === (mu = (0, Bu.k)(yu, Ru)) || void 0 === mu ? void 0 : mu.clientIdx) && void 0 !== Qu ? Qu : 0)
        })),
        KR = new Map;
      for (const Eu of ER) {
        var QR;
        const uu = null === (QR = (0, Bu.k)(yu, Eu)) || void 0 === QR ? void 0 : QR.cosmeticPack;
        KR.has(uu) || KR.set(uu, []), KR.get(uu).push(Eu)
      }
      const mR = function(uu, Ru) {
          const yu = new Set,
            Eu = new Set;
          for (const [Ku, Qu] of Object.entries(Bu.f[uu])) {
            if (void 0 === Qu.colourGroup) continue;
            const mu = `${Qu.cosmeticPack}_${Qu.colourGroup}`;
            (tu(uu, Ku, Ru) ? Eu : yu).add(mu)
          }
          return new Set([...yu].filter((uu => Eu.has(uu))))
        }(yu, RR),
        JR = new Map;
      for (const [Eu, Ku] of KR) {
        const uu = [],
          Ru = new Map;
        for (const Eu of Ku) {
          var NR, XR;
          const Ku = null !== (NR = null === (XR = (0, Bu.k)(yu, Eu)) || void 0 === XR ? void 0 : XR.colourGroup) && void 0 !== NR ? NR : null;
          Ru.has(Ku) || (Ru.set(Ku, []), uu.push(Ku)), Ru.get(Ku).push(Eu)
        }
        const Qu = uu.map((uu => {
          var Ku;
          const Qu = Ru.get(uu),
            mu = uu ? null === (Ku = eu.d[Eu].colourGroups) || void 0 === Ku ? void 0 : Ku[uu] : void 0,
            Ju = !0 === (null === mu || void 0 === mu ? void 0 : mu.showSwatchSelector) && !mR.has(`${Eu}_${uu}`);
          if (Ju && mu) {
            var Nu;
            const Ru = null !== (Nu = Zu[`${Eu}_${yu}_${uu}`]) && void 0 !== Nu ? Nu : (0, eu.g)(mu.colours);
            return {
              groupName: uu,
              showSwatch: Ju,
              cosmetics: Qu.filter((uu => {
                const yu = (0, Bu.j)(uu);
                return !yu || Ru.toString() === yu[1].toString()
              }))
            }
          }
          return {
            groupName: uu,
            cosmetics: Qu,
            showSwatch: Ju
          }
        }));
        JR.set(Eu, Qu)
      }
      const VR = Array.from(KR.keys()),
        rR = new Map;
      for (const [Eu, Ku] of Object.entries(xu.b)) {
        const uu = eu.d[Ku.cosmeticPack],
          Ru = !lu(Ku.cosmetics, RR),
          yu = eu.m.some((uu => (0, eu.e)(uu) === Eu));
        (uu.clientSelectable || yu || Ru) && ((!uu.purchasable || Ru || yR) && (rR.has(Ku.cosmeticPack) || rR.set(Ku.cosmeticPack, []), rR.get(Ku.cosmeticPack).push([Eu, Ku])))
      }
      const BR = Array.from(rR.keys());
      return (0, su.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === yu || "nameColour" === yu) && !pu.playerHasRank("super") && (0, su.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, su.jsx)(Gu.c, {
            name: "bolt"
          }), Ju("homePage:unlockWithSuperRank"), yR && (0, su.jsx)(ju.l, {
            onClick: () => {
              (0, Hu.n)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: Ju("general:getItNow")
          })]
        }), (0, su.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === Ru && (0, su.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, BR.map((uu => {
              const Ru = rR.get(uu);
              return (0, su.jsx)(gu, {
                pack: uu,
                ownedPacks: RR,
                showStoreLink: !eu.n.includes(uu) && Ru.some((uu => {
                  let [, {
                    cosmetics: Ru
                  }] = uu;
                  return lu(Ru, RR)
                })),
                children: (0, su.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: Ru.map((uu => {
                    let [Ru, {
                      cosmetics: yu
                    }] = uu;
                    const Eu = lu(yu, RR),
                      Ku = uR(yu),
                      Qu = !Ku && Object.entries(yu).every((uu => {
                        let [Ru, yu] = uu;
                        return Yu.current[Ru] === yu
                      }));
                    return (0, su.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: Nu()("CharacterPresetCard", {
                        CharacterPresetCardActive: Qu,
                        CharacterPresetCardTryingOn: Ku
                      }),
                      onClick: () => {
                        if (Eu) ! function(uu) {
                          uR(uu) ? wu({}) : wu({
                            ...uu
                          })
                        }(yu);
                        else {
                          Object.keys(Fu).length > 0 && wu({});
                          const uu = Object.entries(yu);
                          for (const [Ru, yu] of uu) fu(Ru, yu, !1), pu.setPlayerCosmetics(Ru, yu);
                          if (null !== mu.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [Ru, yu] of uu) mu.gameBridge.send("updateMyCosmetic", {
                              Py: Ru,
                              iy: yu
                            });
                          else bu.e.updateCosmetics(pu, uu.map((uu => {
                            let [Ru, yu] = uu;
                            return {
                              Py: Ru,
                              iy: yu
                            }
                          }))).catch((uu => {
                            console.error("Failed to update cosmetics", uu)
                          }))
                        }
                      },
                      children: [(0, su.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${Ru}_preview.png)`
                        }
                      }), Eu && (0, su.jsx)(Gu.c, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, Ru)
                  }))
                })
              }, uu)
            }))]
          }), "emote" === Ru && (0, su.jsx)(cu, {
            equippedEmoteIds: (0, Su.d)(Yu.current.emote),
            ownedPacks: RR,
            canBuy: yR,
            onUpdateLoadout: uu => {
              const Ru = (0, Su.e)(uu);
              var yu;
              Yu.current = {
                ...Yu.current,
                emote: Ru
              }, pu.setPlayerCosmetics("emote", Ru), nu(), yu = Ru, vu.current = yu, null !== Ou.current && clearTimeout(Ou.current), Ou.current = setTimeout(au, 350)
            },
            onEmoteSelected: iu,
            onEquipPreviewSkin: () => {
              ! function(uu, Ru) {
                for (const yu of Xu.w) "cape" !== yu && "nameColour" !== yu && "emote" !== yu && uu(yu, "skin" === yu ? "skin_preview" : `${yu}_none`, !1);
                Ru()
              }(fu, nu)
            }
          }), "characters" !== Ru && "emote" !== Ru && (0, su.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, VR.map((uu => {
              const Ru = JR.get(uu);
              return (0, su.jsx)(gu, {
                pack: uu,
                ownedPacks: RR,
                children: Ru.map((Ru => {
                  var Eu;
                  let {
                    groupName: Ku,
                    cosmetics: Qu,
                    showSwatch: mu
                  } = Ru;
                  const Ju = Ku ? null === (Eu = eu.d[uu].colourGroups) || void 0 === Eu ? void 0 : Eu[Ku] : void 0,
                    Xu = `${uu}_${yu}_${Ku}`;
                  return (0, su.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [mu && Ju && (0, su.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...Ju.colours.map(((uu, Ru) => ({
                        color: uu,
                        index: Ru
                      })))].sort(((uu, Ru) => uu.color.order - Ru.color.order)).map((Ru => {
                        var Eu;
                        let {
                          color: Qu,
                          index: mu
                        } = Ru;
                        return (0, su.jsx)("div", {
                          className: Nu()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (Eu = Zu[Xu]) && void 0 !== Eu ? Eu : (0, eu.g)(Ju.colours)) === mu
                          }),
                          style: {
                            backgroundColor: `rgb(${Qu.rbg.join(",")})`
                          },
                          onClick: () => {
                            var Ru;
                            hu((uu => ({
                              ...uu,
                              [Xu]: mu
                            })));
                            const Eu = Fu[yu],
                              Qu = Eu ? (0, Bu.k)(yu, Eu) : null,
                              Ju = (null === Qu || void 0 === Qu ? void 0 : Qu.cosmeticPack) === uu,
                              Nu = Ju ? Eu : Yu.current[yu],
                              Vu = Ju ? Qu : (0, Bu.k)(yu, Nu);
                            if ((null === Vu || void 0 === Vu ? void 0 : Vu.cosmeticPack) !== uu) return;
                            if ((null !== (Ru = null === Vu || void 0 === Vu ? void 0 : Vu.colourGroup) && void 0 !== Ru ? Ru : null) !== Ku) return;
                            const ru = (0, Bu.j)(Nu);
                            if (ru) {
                              const uu = `${yu}_${ru[0]}_${mu}`;
                              Ju ? wu((Ru => ({
                                ...Ru,
                                [yu]: uu
                              }))) : fu(yu, uu, !0)
                            }
                          }
                        }, Qu.rbg.join())
                      }))
                    }), Qu.map((uu => {
                      const Ru = uu === Yu.current[yu],
                        Eu = Fu[yu] === uu,
                        Ku = tu(yu, uu, RR);
                      let Qu = !0;
                      return Ku || Ru || ("cape" !== yu || (0, Cu.Qd)(pu.getPlayerRanks(), uu)) && ("nameColour" !== yu || pu.playerHasRank("super")) || (Qu = !1), (0, su.jsxs)("div", {
                        className: Nu()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: Ru && !Eu,
                          TryingOnCharCustomPartWrapper: Eu,
                          DisabledCharCustomPartWrapper: !Qu,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === yu
                        }),
                        onClick: () => {
                          if (Qu)
                            if (Ku) wu((Ru => {
                              if (Ru[yu] === uu) {
                                const uu = {
                                  ...Ru
                                };
                                return delete uu[yu], uu
                              }
                              return {
                                ...Ru,
                                [yu]: uu
                              }
                            }));
                            else {
                              var Ru;
                              if (Fu[yu] && wu((uu => {
                                  const Ru = {
                                    ...uu
                                  };
                                  return delete Ru[yu], Ru
                                })), uu === Yu.current[yu]) return;
                              null !== (Ru = qu.current) && void 0 !== Ru && Ru.isReady() && fu(yu, uu, !0)
                            }
                        },
                        children: ["profileEffect" === yu ? (0, su.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, su.jsx)(Iu.e, {
                            playerSocialPreview: (0, Mu.e)(uu, {
                              name: pu.getPlayerName(),
                              cosmetics: pu.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, su.jsx)("div", {
                          className: Nu()("CharCustomPart", {
                            PixelatedImage: "cape" === yu
                          }),
                          style: (0, Bu.k)(yu, uu).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,Bu.k)(yu,uu).previewTex}.png)`
                          } : {
                            backgroundColor: Vu.r[uu]
                          }
                        }), Ku && (0, su.jsx)(Gu.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, uu)
                    }))]
                  }, null !== Ku && void 0 !== Ku ? Ku : "ungrouped")
                }))
              }, uu)
            }))]
          }), (0, su.jsx)(ku.CharacterPreview, {
            ref: qu,
            forcedCosmetics: Fu,
            NJ: Pu.id,
            emotePlaySeq: Pu.seq,
            onReady: () => {
              for (const uu of Xu.w) fu(uu, Yu.current[uu], !1)
            }
          })]
        })]
      })
    }))
  },
  40884: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      CharacterPreview: () => ru
    });
    var Eu = yu(64),
      Ku = yu(2615),
      Qu = yu(1215),
      mu = yu(8555),
      Ju = yu(9098),
      Nu = yu(3454),
      Xu = yu(1079);
    const Vu = .6 * Math.PI,
      ru = (0, Eu.memo)((0, Eu.forwardRef)((function(uu, Ru) {
        let {
          onReady: yu,
          onDrawn: ru,
          owner: Bu = "other",
          framing: xu = "player",
          forcedCosmetics: Su,
          NJ: pu,
          emotePlaySeq: Tu,
          turntableFromYaw: Wu = null
        } = uu;
        const ju = (0, Eu.useRef)(null),
          {
            width: Hu,
            height: du
          } = (0, Ku.d)(ju),
          bu = (0, Eu.useRef)(null),
          Cu = (0, Eu.useRef)({}),
          ku = (0, Eu.useRef)({}),
          [eu, Au] = (0, Eu.useState)(!1),
          Du = (0, Eu.useRef)(yu);
        Du.current = yu;
        const Mu = (0, Eu.useRef)(ru);
        Mu.current = ru;
        const Iu = (0, Eu.useRef)(null),
          Gu = (0, Eu.useRef)(!1),
          Uu = (0, Eu.useRef)(!1),
          nu = (0, Eu.useCallback)((() => {
            const uu = bu.current;
            if (!uu || !Mu.current || Gu.current || !Uu.current) return;
            const Ru = {};
            Iu.current = Ru, queueMicrotask((() => {
              if (Iu.current !== Ru) return;
              const yu = Promise.all(Qu.w.map((Ru => uu.untilDrawn(Ru)))).catch((uu => {
                  console.error("Failed to draw the character preview", uu)
                })),
                Eu = new Promise((uu => {
                  setTimeout(uu, 1e4)
                }));
              Promise.race([yu, Eu]).then((() => {
                var yu;
                bu.current !== uu || Iu.current !== Ru || Gu.current || (Gu.current = !0, null === (yu = Mu.current) || void 0 === yu || yu.call(Mu))
              }))
            }))
          }), []);
        return (0, Eu.useImperativeHandle)(Ru, (() => {
          const uu = (uu, Ru) => {
            var yu;
            (Cu.current[uu] = Ru, null !== Su && void 0 !== Su && Su[uu]) || (null === (yu = bu.current) || void 0 === yu || yu.setCosmetic(uu, Ru), nu())
          };
          return {
            updateCosmetic: uu,
            setAllCosmetics(Ru) {
              for (const Eu of Qu.w) {
                var yu;
                uu(Eu, null !== (yu = Ru[Eu]) && void 0 !== yu ? yu : (0, mu.b)(Eu))
              }
            },
            isReady() {
              var uu, Ru;
              return null !== (uu = null === (Ru = bu.current) || void 0 === Ru ? void 0 : Ru.isReady()) && void 0 !== uu && uu
            },
            resetCamera() {
              var uu;
              null === (uu = bu.current) || void 0 === uu || uu.resetCamera()
            },
            setOrbit(uu) {
              var Ru;
              null === (Ru = bu.current) || void 0 === Ru || Ru.setOrbit(uu)
            },
            async ensureReadyForCapture(uu) {
              var Ru;
              await (null === (Ru = bu.current) || void 0 === Ru ? void 0 : Ru.untilDrawn(uu))
            },
            getDevTools() {
              var uu;
              return null !== (uu = bu.current) && void 0 !== uu && uu.isReady() ? bu.current.dev : null
            }
          }
        }), [Su, nu]), (0, Eu.useEffect)((() => {
          const uu = Nu.b.register(Bu),
            Ru = Ju.g.openCharacter(ju.current, xu);
          bu.current = Ru;
          let yu = !0;
          return Ru.ready.then((() => {
            yu && (Au(!0), Du.current())
          })).catch((uu => {
            console.error("Failed to set up the character preview", uu)
          })), () => {
            yu = !1, uu(), Ru.resetCamera(), Ru.close(), bu.current = null
          }
        }), []), (0, Eu.useEffect)((() => {
          Hu <= 0 || du <= 0 || bu.current.resize(Hu, du)
        }), [Hu, du]), (0, Eu.useEffect)((() => {
          if (!eu) return;
          const uu = ku.current;
          for (const Ru of Qu.w) {
            const yu = null === Su || void 0 === Su ? void 0 : Su[Ru],
              Eu = uu[Ru];
            yu && yu !== Eu ? bu.current.setCosmetic(Ru, yu) : !yu && Eu && Cu.current[Ru] && bu.current.setCosmetic(Ru, Cu.current[Ru])
          }
          ku.current = {
            ...Su
          }, Uu.current = !0, nu()
        }), [Su, eu, nu]), (0, Eu.useEffect)((() => {
          eu && bu.current.playEmote(null !== pu && void 0 !== pu ? pu : null)
        }), [pu, Tu, eu]), (0, Eu.useEffect)((() => {
          if (!eu || null === Wu) return;
          const uu = bu.current,
            {
              pitch: Ru,
              radius: yu
            } = Ju.b[xu];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return uu.setOrbit({
            yaw: Wu + Vu,
            pitch: Ru,
            radius: yu
          }), () => {
            uu.resetCamera()
          };
          const Eu = performance.now();
          let Ku = 0;
          const Qu = mu => {
            uu.setOrbit({
              yaw: Wu + (mu - Eu) / 6e3 * 2 * Math.PI,
              pitch: Ru,
              radius: yu
            }), Ku = requestAnimationFrame(Qu)
          };
          return Ku = requestAnimationFrame(Qu), () => {
            cancelAnimationFrame(Ku), uu.resetCamera()
          }
        }), [eu, Wu]), (0, Xu.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: ju
        })
      })))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);