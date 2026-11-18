export const id = 269;
export const ids = [269, 270];
export const modules = {
  39936: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      CharacterCustomisationUI: () => dJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(2514),
      eJ = ZJ(1022),
      XJ = ZJ(1703),
      AJ = ZJ(926),
      qJ = ZJ.n(AJ),
      jJ = ZJ(1137),
      YJ = ZJ(521),
      hJ = ZJ(1086),
      DJ = ZJ(1995),
      sJ = ZJ(2059),
      nJ = ZJ(8114),
      GJ = ZJ(2001),
      fJ = ZJ(2586),
      xJ = ZJ(1743),
      rJ = ZJ(1329),
      vJ = ZJ(2027),
      mJ = ZJ(13),
      QJ = ZJ(1389),
      EJ = ZJ(235),
      VJ = ZJ(39938),
      KJ = ZJ(1454),
      yJ = ZJ(2085),
      SJ = ZJ(2508),
      IJ = ZJ(1931),
      MJ = ZJ(2246),
      bJ = ZJ(942);
    ZJ(35860), ZJ(2589);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var wJ = ZJ(2039),
      WJ = ZJ(1259),
      gJ = ZJ(990);

    function HJ(JJ, cJ, ZJ) {
      return (0, DJ.l)(JJ, cJ).purchasable && !(0, yJ.n)(JJ, cJ, ZJ)
    }

    function PJ(JJ, cJ) {
      return Object.entries(JJ).some((JJ => {
        let [ZJ, FJ] = JJ;
        return HJ(ZJ, FJ, cJ)
      }))
    }

    function kJ(JJ) {
      var cJ;
      let {
        pack: ZJ,
        ownedPacks: FJ,
        showStoreLink: UJ = !1,
        children: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, hJ.F)(), AJ = KJ.e[ZJ], jJ = AJ.purchasable && !FJ.includes(ZJ) && KJ.p.includes(ZJ), YJ = SJ.h[ZJ];
      return (0, gJ.jsxs)("div", {
        className: qJ()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: jJ
        }),
        children: [YJ && (0, gJ.jsx)(YJ, {}), (0, gJ.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, gJ.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (cJ = AJ.displayName) && void 0 !== cJ ? cJ : ZJ
          }), (jJ || UJ) && (0, gJ.jsxs)(rJ.E, {
            onClick: () => {
              jJ ? (0, SJ.f)(ZJ) : (0, vJ.i)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, gJ.jsx)(bJ.c, {
              name: "store"
            }), " ", XJ("general:viewInShop")]
          })]
        }), jJ && "bee" === ZJ && (0, gJ.jsx)(SJ.b, {}), eJ]
      })
    }

    function pJ(JJ) {
      let {
        equippedEmoteIds: cJ,
        ownedPacks: ZJ,
        xsollaSupported: FJ,
        onUpdateLoadout: UJ,
        onEmoteSelected: eJ,
        onEquipPreviewSkin: XJ
      } = JJ;
      const {
        t: AJ
      } = (0, hJ.F)(), YJ = new Set(cJ), sJ = new Map, nJ = Object.keys(DJ.g.emote).sort(((JJ, cJ) => {
        var ZJ, FJ, UJ, eJ;
        return (null !== (ZJ = null === (FJ = (0, DJ.i)("emote", JJ)) || void 0 === FJ ? void 0 : FJ.clientIdx) && void 0 !== ZJ ? ZJ : 0) - (null !== (UJ = null === (eJ = (0, DJ.i)("emote", cJ)) || void 0 === eJ ? void 0 : eJ.clientIdx) && void 0 !== UJ ? UJ : 0)
      })).filter((JJ => {
        const cJ = (0, DJ.l)("emote", JJ),
          UJ = (0, yJ.n)("emote", JJ, ZJ);
        return !(cJ.purchasable && !UJ && !FJ) && (cJ.clientSelectable || UJ)
      }));
      for (const qJ of nJ) {
        const JJ = (0, DJ.i)("emote", qJ).cosmeticPack;
        sJ.has(JJ) || sJ.set(JJ, []), sJ.get(JJ).push(qJ)
      }
      const fJ = Array.from(sJ.keys());
      return (0, gJ.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, gJ.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, gJ.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: AJ("emotes:equippedCount", {
              count: cJ.length,
              max: jJ.n
            })
          }), (0, gJ.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: AJ("emotes:loadoutHint")
          })]
        }), fJ.map((JJ => {
          const FJ = sJ.get(JJ);
          return (0, gJ.jsx)(kJ, {
            pack: JJ,
            ownedPacks: ZJ,
            children: (0, gJ.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: FJ.map((JJ => {
                var FJ;
                const XJ = cJ.indexOf(JJ),
                  hJ = -1 !== XJ,
                  DJ = cJ.length >= jJ.n,
                  sJ = HJ("emote", JJ, ZJ),
                  nJ = sJ || !hJ && DJ,
                  fJ = (0, GJ.m)(JJ);
                return (0, gJ.jsxs)("div", {
                  className: qJ()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: hJ
                  }),
                  onClick: () => {
                    eJ(JJ)
                  },
                  children: [(0, gJ.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, gJ.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${JJ}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, gJ.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (FJ = null === fJ || void 0 === fJ ? void 0 : fJ.displayName) && void 0 !== FJ ? FJ : JJ
                    })]
                  }), (0, gJ.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [hJ && (0, gJ.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: XJ + 1
                    }), sJ && (0, gJ.jsx)(bJ.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, gJ.jsx)(WJ.g, {
                      tooltipInner: (0, gJ.jsx)(gJ.Fragment, {
                        children: AJ(hJ ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, gJ.jsx)("div", {
                        className: qJ()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: nJ,
                          EmoteCustomPartToggleEquipped: hJ
                        }),
                        onClick: ZJ => {
                          ZJ.stopPropagation(), nJ || function(JJ) {
                            YJ.has(JJ) ? UJ(cJ.filter((cJ => cJ !== JJ))) : cJ.length >= jJ.n || UJ([...cJ, JJ])
                          }(JJ)
                        },
                        children: (0, gJ.jsx)(bJ.c, {
                          name: hJ ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, JJ)
              }))
            })
          }, JJ)
        }))]
      })
    }
    const dJ = (0, FJ.memo)((function(JJ) {
      let {
        selectedTab: cJ
      } = JJ;
      const ZJ = "characters" === cJ ? "skin" : cJ,
        {
          t: AJ
        } = (0, hJ.F)(),
        {
          userContext: GJ,
          isUserContextUpdating: SJ
        } = (0, eJ.d)(),
        WJ = (0, UJ.c)(),
        {
          gameState: dJ,
          initSdkSelectorFinished: zJ
        } = (0, mJ.j)(["gameState", "initSdkSelectorFinished"]),
        [NJ, OJ] = (0, FJ.useState)({}),
        [TJ, CJ] = (0, FJ.useState)({}),
        {
          previewEmote: uJ,
          triggerEmote: iJ
        } = (0, fJ.d)(),
        RJ = (0, FJ.useRef)(jJ.s.reduce(((JJ, cJ) => (JJ[cJ] = (0, nJ.e)(cJ), JJ)), {})),
        LJ = (0, FJ.useRef)(!1),
        aJ = (0, FJ.useRef)(null),
        BJ = (0, FJ.useRef)(null),
        tJ = (0, FJ.useRef)(null);

      function oJ() {
        null !== BJ.current && (clearTimeout(BJ.current), BJ.current = null);
        const JJ = tJ.current;
        if (null === JJ) return;
        tJ.current = null;
        const cJ = {
          VF: "emote",
          KF: JJ
        };
        null !== XJ.gameBridge.latest("connectedGame").websocketUrl ? XJ.gameBridge.send("updateMyCosmetic", cJ) : QJ.c.updateCosmetics(GJ, [cJ]).catch((JJ => {
          console.error("Failed to update emote loadout", JJ)
        }))
      }

      function lJ(JJ, cJ, ZJ) {
        var FJ, UJ, eJ;
        if (RJ.current = {
            ...RJ.current,
            [JJ]: cJ
          }, WJ(), ZJ) {
          const ZJ = {
            VF: JJ,
            KF: cJ
          };
          null !== XJ.gameBridge.latest("connectedGame").websocketUrl ? XJ.gameBridge.send("updateMyCosmetic", ZJ) : QJ.c.updateCosmetics(GJ, [ZJ]).catch((JJ => {
            console.error("Failed to update cosmetic", JJ)
          })), GJ.setPlayerCosmetics(JJ, cJ)
        }
        const AJ = (0, DJ.i)(JJ, cJ);
        if (null !== AJ && void 0 !== AJ && AJ.colourGroup && null !== (FJ = KJ.e[AJ.cosmeticPack].colourGroups) && void 0 !== FJ && null !== (UJ = FJ[AJ.colourGroup]) && void 0 !== UJ && UJ.showSwatchSelector) {
          const ZJ = (0, DJ.h)(cJ);
          ZJ && CJ((cJ => ({
            ...cJ,
            [`${AJ.cosmeticPack}_${JJ}_${AJ.colourGroup}`]: parseInt(ZJ[1])
          })))
        }
        null !== (eJ = aJ.current) && void 0 !== eJ && eJ.isReady() && aJ.current.updateCosmetic(JJ, cJ)
      }

      function Jc(JJ) {
        return Object.entries(JJ).every((JJ => {
          let [cJ, ZJ] = JJ;
          return NJ[cJ] === ZJ
        }))
      }(0, xJ.b)("cosmeticsUpdated", (JJ => {
        let cJ = !1;
        for (const {
            local: ZJ,
            VF: FJ,
            KF: UJ
          }
          of JJ) {
          if (!ZJ) return;
          cJ = !0, LJ.current || lJ(FJ, UJ, !1), WJ()
        }
        cJ && (LJ.current = !0)
      })), (0, FJ.useEffect)((() => {
        if (!SJ) {
          for (const [JJ, cJ] of Object.entries(GJ.getPlayerCosmetics())) lJ(JJ, cJ, !1);
          WJ()
        }
      }), [SJ]), (0, FJ.useEffect)((() => () => {
        oJ()
      }), []);
      const cc = GJ.getOwnedCosmeticPacks(),
        Zc = (0, wJ.siteSupportsPurchases)(),
        Fc = Object.keys(DJ.g[ZJ]).filter((JJ => {
          const cJ = (0, DJ.l)(ZJ, JJ),
            FJ = (0, yJ.n)(ZJ, JJ, cc);
          return !(cJ.purchasable && !FJ && !Zc) && (cJ.clientSelectable || FJ)
        })).sort(((JJ, cJ) => {
          var FJ, UJ, eJ, XJ;
          return (null !== (FJ = null === (UJ = (0, DJ.i)(ZJ, JJ)) || void 0 === UJ ? void 0 : UJ.clientIdx) && void 0 !== FJ ? FJ : 0) - (null !== (eJ = null === (XJ = (0, DJ.i)(ZJ, cJ)) || void 0 === XJ ? void 0 : XJ.clientIdx) && void 0 !== eJ ? eJ : 0)
        })),
        Uc = new Map;
      for (const FJ of Fc) {
        var ec;
        const JJ = null === (ec = (0, DJ.i)(ZJ, FJ)) || void 0 === ec ? void 0 : ec.cosmeticPack;
        Uc.has(JJ) || Uc.set(JJ, []), Uc.get(JJ).push(FJ)
      }
      const Xc = function(JJ, cJ) {
          const ZJ = new Set,
            FJ = new Set;
          for (const [UJ, eJ] of Object.entries(DJ.g[JJ])) {
            if (void 0 === eJ.colourGroup) continue;
            const XJ = `${eJ.cosmeticPack}_${eJ.colourGroup}`;
            (HJ(JJ, UJ, cJ) ? FJ : ZJ).add(XJ)
          }
          return new Set([...ZJ].filter((JJ => FJ.has(JJ))))
        }(ZJ, cc),
        Ac = new Map;
      for (const [FJ, UJ] of Uc) {
        const JJ = [],
          cJ = new Map;
        for (const FJ of UJ) {
          var qc, jc;
          const UJ = null !== (qc = null === (jc = (0, DJ.i)(ZJ, FJ)) || void 0 === jc ? void 0 : jc.colourGroup) && void 0 !== qc ? qc : null;
          cJ.has(UJ) || (cJ.set(UJ, []), JJ.push(UJ)), cJ.get(UJ).push(FJ)
        }
        const eJ = JJ.map((JJ => {
          var UJ;
          const eJ = cJ.get(JJ),
            XJ = JJ ? null === (UJ = KJ.e[FJ].colourGroups) || void 0 === UJ ? void 0 : UJ[JJ] : void 0,
            AJ = !0 === (null === XJ || void 0 === XJ ? void 0 : XJ.showSwatchSelector) && !Xc.has(`${FJ}_${JJ}`);
          if (AJ && XJ) {
            var qJ;
            const cJ = null !== (qJ = TJ[`${FJ}_${ZJ}_${JJ}`]) && void 0 !== qJ ? qJ : (0, KJ.k)(XJ.colours);
            return {
              groupName: JJ,
              showSwatch: AJ,
              cosmetics: eJ.filter((JJ => {
                const ZJ = (0, DJ.h)(JJ);
                return !ZJ || cJ.toString() === ZJ[1].toString()
              }))
            }
          }
          return {
            groupName: JJ,
            cosmetics: eJ,
            showSwatch: AJ
          }
        }));
        Ac.set(FJ, eJ)
      }
      const Yc = Array.from(Uc.keys()),
        hc = new Map;
      for (const [FJ, UJ] of Object.entries(sJ.c)) {
        const JJ = KJ.e[UJ.cosmeticPack],
          cJ = !PJ(UJ.cosmetics, cc),
          ZJ = KJ.m.some((JJ => (0, KJ.i)(JJ) === FJ));
        (JJ.clientSelectable || ZJ || cJ) && ((!JJ.purchasable || cJ || Zc) && (hc.has(UJ.cosmeticPack) || hc.set(UJ.cosmeticPack, []), hc.get(UJ.cosmeticPack).push([FJ, UJ])))
      }
      const Dc = Array.from(hc.keys());
      return (0, gJ.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === ZJ || "nameColour" === ZJ) && !GJ.playerHasRank("super") && (0, gJ.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, gJ.jsx)(bJ.c, {
            name: "bolt"
          }), AJ("homePage:unlockWithSuperRank"), Zc && (0, gJ.jsx)(rJ.m, {
            onClick: () => {
              (0, vJ.i)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: AJ("general:getItNow")
          })]
        }), (0, gJ.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === cJ && (0, gJ.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Dc.map((JJ => {
              const cJ = hc.get(JJ);
              return (0, gJ.jsx)(kJ, {
                pack: JJ,
                ownedPacks: cc,
                showStoreLink: !KJ.p.includes(JJ) && cJ.some((JJ => {
                  let [, {
                    cosmetics: cJ
                  }] = JJ;
                  return PJ(cJ, cc)
                })),
                children: (0, gJ.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: cJ.map((JJ => {
                    let [cJ, {
                      cosmetics: ZJ
                    }] = JJ;
                    const FJ = PJ(ZJ, cc),
                      UJ = Jc(ZJ),
                      eJ = !UJ && Object.entries(ZJ).every((JJ => {
                        let [cJ, ZJ] = JJ;
                        return RJ.current[cJ] === ZJ
                      }));
                    return (0, gJ.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: qJ()("CharacterPresetCard", {
                        CharacterPresetCardActive: eJ,
                        CharacterPresetCardTryingOn: UJ
                      }),
                      onClick: () => {
                        if (FJ) ! function(JJ) {
                          Jc(JJ) ? OJ({}) : OJ({
                            ...JJ
                          })
                        }(ZJ);
                        else {
                          Object.keys(NJ).length > 0 && OJ({});
                          const JJ = Object.entries(ZJ);
                          for (const [cJ, ZJ] of JJ) lJ(cJ, ZJ, !1), GJ.setPlayerCosmetics(cJ, ZJ);
                          if (null !== XJ.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [cJ, ZJ] of JJ) XJ.gameBridge.send("updateMyCosmetic", {
                              VF: cJ,
                              KF: ZJ
                            });
                          else QJ.c.updateCosmetics(GJ, JJ.map((JJ => {
                            let [cJ, ZJ] = JJ;
                            return {
                              VF: cJ,
                              KF: ZJ
                            }
                          }))).catch((JJ => {
                            console.error("Failed to update cosmetics", JJ)
                          }))
                        }
                      },
                      children: [(0, gJ.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${cJ}_preview.png)`
                        }
                      }), FJ && (0, gJ.jsx)(bJ.c, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, cJ)
                  }))
                })
              }, JJ)
            }))]
          }), "emote" === cJ && (0, gJ.jsx)(pJ, {
            equippedEmoteIds: (0, nJ.i)(RJ.current.emote),
            ownedPacks: cc,
            xsollaSupported: Zc,
            onUpdateLoadout: JJ => {
              const cJ = (0, nJ.j)(JJ);
              var ZJ;
              RJ.current = {
                ...RJ.current,
                emote: cJ
              }, GJ.setPlayerCosmetics("emote", cJ), WJ(), ZJ = cJ, tJ.current = ZJ, null !== BJ.current && clearTimeout(BJ.current), BJ.current = setTimeout(oJ, 350)
            },
            onEmoteSelected: iJ,
            onEquipPreviewSkin: () => {
              ! function(JJ, cJ) {
                for (const ZJ of jJ.s) "cape" !== ZJ && "nameColour" !== ZJ && "emote" !== ZJ && JJ(ZJ, "skin" === ZJ ? "skin_preview" : `${ZJ}_none`, !1);
                cJ()
              }(lJ, WJ)
            }
          }), "characters" !== cJ && "emote" !== cJ && (0, gJ.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Yc.map((JJ => {
              const cJ = Ac.get(JJ);
              return (0, gJ.jsx)(kJ, {
                pack: JJ,
                ownedPacks: cc,
                children: cJ.map((cJ => {
                  var FJ;
                  let {
                    groupName: UJ,
                    cosmetics: eJ,
                    showSwatch: XJ
                  } = cJ;
                  const AJ = UJ ? null === (FJ = KJ.e[JJ].colourGroups) || void 0 === FJ ? void 0 : FJ[UJ] : void 0,
                    jJ = `${JJ}_${ZJ}_${UJ}`;
                  return (0, gJ.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [XJ && AJ && (0, gJ.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...AJ.colours.map(((JJ, cJ) => ({
                        color: JJ,
                        index: cJ
                      })))].sort(((JJ, cJ) => JJ.color.order - cJ.color.order)).map((cJ => {
                        var FJ;
                        let {
                          color: eJ,
                          index: XJ
                        } = cJ;
                        return (0, gJ.jsx)("div", {
                          className: qJ()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (FJ = TJ[jJ]) && void 0 !== FJ ? FJ : (0, KJ.k)(AJ.colours)) === XJ
                          }),
                          style: {
                            backgroundColor: `rgb(${eJ.rbg.join(",")})`
                          },
                          onClick: () => {
                            var cJ;
                            CJ((JJ => ({
                              ...JJ,
                              [jJ]: XJ
                            })));
                            const FJ = NJ[ZJ],
                              eJ = FJ ? (0, DJ.i)(ZJ, FJ) : null,
                              AJ = (null === eJ || void 0 === eJ ? void 0 : eJ.cosmeticPack) === JJ,
                              qJ = AJ ? FJ : RJ.current[ZJ],
                              YJ = AJ ? eJ : (0, DJ.i)(ZJ, qJ);
                            if ((null === YJ || void 0 === YJ ? void 0 : YJ.cosmeticPack) !== JJ) return;
                            if ((null !== (cJ = null === YJ || void 0 === YJ ? void 0 : YJ.colourGroup) && void 0 !== cJ ? cJ : null) !== UJ) return;
                            const hJ = (0, DJ.h)(qJ);
                            if (hJ) {
                              const JJ = `${ZJ}_${hJ[0]}_${XJ}`;
                              AJ ? OJ((cJ => ({
                                ...cJ,
                                [ZJ]: JJ
                              }))) : lJ(ZJ, JJ, !0)
                            }
                          }
                        }, eJ.rbg.join())
                      }))
                    }), eJ.map((JJ => {
                      const cJ = JJ === RJ.current[ZJ],
                        FJ = NJ[ZJ] === JJ,
                        UJ = HJ(ZJ, JJ, cc);
                      let eJ = !0;
                      return UJ || cJ || ("cape" !== ZJ || (0, EJ.Ad)(GJ.getPlayerRanks(), JJ)) && ("nameColour" !== ZJ || GJ.playerHasRank("super")) || (eJ = !1), (0, gJ.jsxs)("div", {
                        className: qJ()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: cJ && !FJ,
                          TryingOnCharCustomPartWrapper: FJ,
                          DisabledCharCustomPartWrapper: !eJ,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === ZJ
                        }),
                        onClick: () => {
                          if (eJ)
                            if (UJ) OJ((cJ => {
                              if (cJ[ZJ] === JJ) {
                                const JJ = {
                                  ...cJ
                                };
                                return delete JJ[ZJ], JJ
                              }
                              return {
                                ...cJ,
                                [ZJ]: JJ
                              }
                            }));
                            else {
                              var cJ;
                              if (NJ[ZJ] && OJ((JJ => {
                                  const cJ = {
                                    ...JJ
                                  };
                                  return delete cJ[ZJ], cJ
                                })), JJ === RJ.current[ZJ]) return;
                              null !== (cJ = aJ.current) && void 0 !== cJ && cJ.isReady() && lJ(ZJ, JJ, !0)
                            }
                        },
                        children: ["profileEffect" === ZJ ? (0, gJ.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, gJ.jsx)(MJ.g, {
                            playerSocialPreview: (0, IJ.e)(JJ, {
                              name: GJ.getPlayerName(),
                              cosmetics: GJ.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, gJ.jsx)("div", {
                          className: qJ()("CharCustomPart", {
                            PixelatedImage: "cape" === ZJ
                          }),
                          style: (0, DJ.i)(ZJ, JJ).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,DJ.i)(ZJ,JJ).previewTex}.png)`
                          } : {
                            backgroundColor: YJ.w[JJ],
                            borderRadius: "50%"
                          }
                        }), UJ && (0, gJ.jsx)(bJ.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, JJ)
                    }))]
                  }, null !== UJ && void 0 !== UJ ? UJ : "ungrouped")
                }))
              }, JJ)
            }))]
          }), (0, gJ.jsx)(VJ.CharacterPreview, {
            ref: aJ,
            forcedCosmetics: NJ,
            sj: uJ.id,
            emotePlaySeq: uJ.seq,
            onReady: () => {
              for (const JJ of jJ.s) lJ(JJ, RJ.current[JJ], !1)
            }
          })]
        })]
      })
    }))
  },
  39938: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      CharacterPreview: () => YJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(2383),
      eJ = ZJ(1137),
      XJ = ZJ(8114),
      AJ = ZJ(35860),
      qJ = ZJ(3111),
      jJ = ZJ(990);
    const YJ = (0, FJ.memo)((0, FJ.forwardRef)((function(JJ, cJ) {
      let {
        onReady: ZJ,
        onDrawn: YJ,
        owner: hJ = "other",
        framing: DJ = "player",
        forcedCosmetics: sJ,
        sj: nJ,
        emotePlaySeq: GJ
      } = JJ;
      const fJ = (0, FJ.useRef)(null),
        {
          width: xJ,
          height: rJ
        } = (0, UJ.d)(fJ),
        vJ = (0, FJ.useRef)(null),
        mJ = (0, FJ.useRef)({}),
        QJ = (0, FJ.useRef)({}),
        [EJ, VJ] = (0, FJ.useState)(!1),
        KJ = (0, FJ.useRef)(ZJ);
      KJ.current = ZJ;
      const yJ = (0, FJ.useRef)(YJ);
      yJ.current = YJ;
      const SJ = (0, FJ.useRef)(null),
        IJ = (0, FJ.useRef)(!1),
        MJ = (0, FJ.useRef)(!1),
        bJ = (0, FJ.useCallback)((() => {
          const JJ = vJ.current;
          if (!JJ || !yJ.current || IJ.current || !MJ.current) return;
          const cJ = {};
          SJ.current = cJ, queueMicrotask((() => {
            if (SJ.current !== cJ) return;
            const ZJ = Promise.all(eJ.s.map((cJ => JJ.untilDrawn(cJ)))).catch((JJ => {
                console.error("Failed to draw the character preview", JJ)
              })),
              FJ = new Promise((JJ => {
                setTimeout(JJ, 1e4)
              }));
            Promise.race([ZJ, FJ]).then((() => {
              var ZJ;
              vJ.current !== JJ || SJ.current !== cJ || IJ.current || (IJ.current = !0, null === (ZJ = yJ.current) || void 0 === ZJ || ZJ.call(yJ))
            }))
          }))
        }), []);
      return (0, FJ.useImperativeHandle)(cJ, (() => {
        const JJ = (JJ, cJ) => {
          var ZJ;
          (mJ.current[JJ] = cJ, null !== sJ && void 0 !== sJ && sJ[JJ]) || (null === (ZJ = vJ.current) || void 0 === ZJ || ZJ.setCosmetic(JJ, cJ), bJ())
        };
        return {
          updateCosmetic: JJ,
          setAllCosmetics(cJ) {
            for (const FJ of eJ.s) {
              var ZJ;
              JJ(FJ, null !== (ZJ = cJ[FJ]) && void 0 !== ZJ ? ZJ : (0, XJ.e)(FJ))
            }
          },
          isReady() {
            var JJ, cJ;
            return null !== (JJ = null === (cJ = vJ.current) || void 0 === cJ ? void 0 : cJ.isReady()) && void 0 !== JJ && JJ
          },
          resetCamera() {
            var JJ;
            null === (JJ = vJ.current) || void 0 === JJ || JJ.resetCamera()
          },
          async ensureReadyForCapture(JJ) {
            var cJ;
            await (null === (cJ = vJ.current) || void 0 === cJ ? void 0 : cJ.untilDrawn(JJ))
          },
          getDevTools() {
            var JJ;
            return null !== (JJ = vJ.current) && void 0 !== JJ && JJ.isReady() ? vJ.current.dev : null
          }
        }
      }), [sJ, bJ]), (0, FJ.useEffect)((() => {
        const JJ = qJ.e.register(hJ),
          cJ = AJ.d.openCharacter(fJ.current, DJ);
        vJ.current = cJ;
        let ZJ = !0;
        return cJ.ready.then((() => {
          ZJ && (VJ(!0), KJ.current())
        })).catch((JJ => {
          console.error("Failed to set up the character preview", JJ)
        })), () => {
          ZJ = !1, JJ(), cJ.close(), vJ.current = null
        }
      }), []), (0, FJ.useEffect)((() => {
        xJ <= 0 || rJ <= 0 || vJ.current.resize(xJ, rJ)
      }), [xJ, rJ]), (0, FJ.useEffect)((() => {
        if (!EJ) return;
        const JJ = QJ.current;
        for (const cJ of eJ.s) {
          const ZJ = null === sJ || void 0 === sJ ? void 0 : sJ[cJ],
            FJ = JJ[cJ];
          ZJ && ZJ !== FJ ? vJ.current.setCosmetic(cJ, ZJ) : !ZJ && FJ && mJ.current[cJ] && vJ.current.setCosmetic(cJ, mJ.current[cJ])
        }
        QJ.current = {
          ...sJ
        }, MJ.current = !0, bJ()
      }), [sJ, EJ, bJ]), (0, FJ.useEffect)((() => {
        EJ && vJ.current.playEmote(null !== nJ && void 0 !== nJ ? nJ : null)
      }), [nJ, GJ, EJ]), (0, jJ.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: fJ
      })
    })))
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);