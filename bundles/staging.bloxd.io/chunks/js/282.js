export const id = 282;
export const ids = [282, 283];
export const modules = {
  40917: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      CharacterCustomisationUI: () => uT
    });
    var lT = cT(71),
      MT = cT(2938),
      KT = cT(1130),
      OT = cT(1953),
      yT = cT(1046),
      fT = cT.n(yT),
      xT = cT(1244),
      IT = cT(602),
      AT = cT(1195),
      CT = cT(2260),
      jT = cT(1578),
      vT = cT(8855),
      tT = cT(2268),
      hT = cT(3022),
      NT = cT(1996),
      QT = cT(1470),
      ST = cT(2305),
      DT = cT(31),
      aT = cT(1518),
      FT = cT(339),
      rT = cT(40922),
      PT = cT(1575),
      wT = cT(2355),
      mT = cT(2931),
      bT = cT(2181),
      zT = cT(2600),
      JT = cT(1061);
    cT(9395), cT(3028);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var oT = cT(2315),
      HT = cT(1379),
      eT = cT(1099);

    function GT(TT, kT, cT) {
      return (0, CT.m)(TT, kT).purchasable && !(0, wT.n)(TT, kT, cT)
    }

    function VT(TT, kT) {
      return Object.entries(TT).some((TT => {
        let [cT, lT] = TT;
        return GT(cT, lT, kT)
      }))
    }

    function ET(TT) {
      var kT;
      let {
        pack: cT,
        ownedPacks: lT,
        showStoreLink: MT = !1,
        children: KT
      } = TT;
      const {
        t: OT
      } = (0, AT.B)(), yT = PT.c[cT], xT = yT.purchasable && !lT.includes(cT) && PT.s.includes(cT), IT = mT.p[cT];
      return (0, eT.jsxs)("div", {
        className: fT()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: xT
        }),
        children: [IT && (0, eT.jsx)(IT, {}), (0, eT.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, eT.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (kT = yT.displayName) && void 0 !== kT ? kT : cT
          }), (xT || MT) && (0, eT.jsxs)(QT.C, {
            onClick: () => {
              xT ? (0, mT.m)(cT) : (0, ST.p)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, eT.jsx)(JT.e, {
              name: "store"
            }), " ", OT("general:viewInShop")]
          })]
        }), xT && "bee" === cT && (0, eT.jsx)(mT.e, {}), KT]
      })
    }

    function ZT(TT) {
      let {
        equippedEmoteIds: kT,
        ownedPacks: cT,
        canBuy: lT,
        onUpdateLoadout: MT,
        onEmoteSelected: KT,
        onEquipPreviewSkin: OT
      } = TT;
      const {
        t: yT
      } = (0, AT.B)(), IT = new Set(kT), jT = new Map, vT = Object.keys(CT.e.emote).sort(((TT, kT) => {
        var cT, lT, MT, KT;
        return (null !== (cT = null === (lT = (0, CT.j)("emote", TT)) || void 0 === lT ? void 0 : lT.clientIdx) && void 0 !== cT ? cT : 0) - (null !== (MT = null === (KT = (0, CT.j)("emote", kT)) || void 0 === KT ? void 0 : KT.clientIdx) && void 0 !== MT ? MT : 0)
      })).filter((TT => {
        const kT = (0, CT.m)("emote", TT),
          MT = (0, wT.n)("emote", TT, cT);
        return !(kT.purchasable && !MT && !lT) && (kT.clientSelectable || MT)
      }));
      for (const fT of vT) {
        const TT = (0, CT.j)("emote", fT).cosmeticPack;
        jT.has(TT) || jT.set(TT, []), jT.get(TT).push(fT)
      }
      const hT = Array.from(jT.keys());
      return (0, eT.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, eT.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, eT.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: yT("emotes:equippedCount", {
              count: kT.length,
              max: xT.n
            })
          }), (0, eT.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: yT("emotes:loadoutHint")
          })]
        }), hT.map((TT => {
          const lT = jT.get(TT);
          return (0, eT.jsx)(ET, {
            pack: TT,
            ownedPacks: cT,
            children: (0, eT.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: lT.map((TT => {
                var lT;
                const OT = kT.indexOf(TT),
                  AT = -1 !== OT,
                  CT = kT.length >= xT.n,
                  jT = GT("emote", TT, cT),
                  vT = jT || !AT && CT,
                  hT = (0, tT.f)(TT);
                return (0, eT.jsxs)("div", {
                  className: fT()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: AT
                  }),
                  onClick: () => {
                    KT(TT)
                  },
                  children: [(0, eT.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, eT.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${TT}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, eT.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (lT = null === hT || void 0 === hT ? void 0 : hT.displayName) && void 0 !== lT ? lT : TT
                    })]
                  }), (0, eT.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [AT && (0, eT.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: OT + 1
                    }), jT && (0, eT.jsx)(JT.e, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, eT.jsx)(HT.c, {
                      tooltipInner: (0, eT.jsx)(eT.Fragment, {
                        children: yT(AT ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, eT.jsx)("div", {
                        className: fT()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: vT,
                          EmoteCustomPartToggleEquipped: AT
                        }),
                        onClick: cT => {
                          cT.stopPropagation(), vT || function(TT) {
                            IT.has(TT) ? MT(kT.filter((kT => kT !== TT))) : kT.length >= xT.n || MT([...kT, TT])
                          }(TT)
                        },
                        children: (0, eT.jsx)(JT.e, {
                          name: AT ? "minus" : "plus",
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
    const uT = (0, lT.memo)((function(TT) {
      let {
        selectedTab: kT
      } = TT;
      const cT = "characters" === kT ? "skin" : kT,
        {
          t: yT
        } = (0, AT.B)(),
        {
          userContext: tT,
          isUserContextUpdating: mT
        } = (0, KT.b)(),
        HT = (0, MT.b)(),
        {
          gameState: uT,
          initSdkSelectorFinished: XT
        } = (0, DT.n)(["gameState", "initSdkSelectorFinished"]),
        [dT, LT] = (0, lT.useState)({}),
        [RT, gT] = (0, lT.useState)({}),
        {
          previewEmote: UT,
          triggerEmote: YT
        } = (0, hT.c)(),
        BT = (0, lT.useRef)(xT.u.reduce(((TT, kT) => (TT[kT] = (0, vT.e)(kT), TT)), {})),
        WT = (0, lT.useRef)(!1),
        nT = (0, lT.useRef)(null),
        pT = (0, lT.useRef)(null),
        iT = (0, lT.useRef)(null);

      function qT() {
        null !== pT.current && (clearTimeout(pT.current), pT.current = null);
        const TT = iT.current;
        if (null === TT) return;
        iT.current = null;
        const kT = {
          Qc: "emote",
          Sc: TT
        };
        null !== OT.gameBridge.latest("connectedGame").websocketUrl ? OT.gameBridge.send("updateMyCosmetic", kT) : aT.d.updateCosmetics(tT, [kT]).catch((TT => {
          console.error("Failed to update emote loadout", TT)
        }))
      }

      function sT(TT, kT, cT) {
        var lT, MT, KT;
        if (BT.current = {
            ...BT.current,
            [TT]: kT
          }, HT(), cT) {
          const cT = {
            Qc: TT,
            Sc: kT
          };
          null !== OT.gameBridge.latest("connectedGame").websocketUrl ? OT.gameBridge.send("updateMyCosmetic", cT) : aT.d.updateCosmetics(tT, [cT]).catch((TT => {
            console.error("Failed to update cosmetic", TT)
          })), tT.setPlayerCosmetics(TT, kT)
        }
        const yT = (0, CT.j)(TT, kT);
        if (null !== yT && void 0 !== yT && yT.colourGroup && null !== (lT = PT.c[yT.cosmeticPack].colourGroups) && void 0 !== lT && null !== (MT = lT[yT.colourGroup]) && void 0 !== MT && MT.showSwatchSelector) {
          const cT = (0, CT.g)(kT);
          cT && gT((kT => ({
            ...kT,
            [`${yT.cosmeticPack}_${TT}_${yT.colourGroup}`]: parseInt(cT[1])
          })))
        }
        null !== (KT = nT.current) && void 0 !== KT && KT.isReady() && nT.current.updateCosmetic(TT, kT)
      }

      function Tk(TT) {
        return Object.entries(TT).every((TT => {
          let [kT, cT] = TT;
          return dT[kT] === cT
        }))
      }(0, NT.b)("cosmeticsUpdated", (TT => {
        let kT = !1;
        for (const {
            local: cT,
            Qc: lT,
            Sc: MT
          }
          of TT) {
          if (!cT) return;
          kT = !0, WT.current || sT(lT, MT, !1), HT()
        }
        kT && (WT.current = !0)
      })), (0, lT.useEffect)((() => {
        if (!mT) {
          for (const [TT, kT] of Object.entries(tT.getPlayerCosmetics())) sT(TT, kT, !1);
          HT()
        }
      }), [mT]), (0, lT.useEffect)((() => () => {
        qT()
      }), []);
      const kk = tT.getOwnedCosmeticPacks(),
        ck = (0, oT.purchasesAllowed)(),
        lk = Object.keys(CT.e[cT]).filter((TT => {
          const kT = (0, CT.m)(cT, TT),
            lT = (0, wT.n)(cT, TT, kk);
          return !(kT.purchasable && !lT && !ck) && (kT.clientSelectable || lT)
        })).sort(((TT, kT) => {
          var lT, MT, KT, OT;
          return (null !== (lT = null === (MT = (0, CT.j)(cT, TT)) || void 0 === MT ? void 0 : MT.clientIdx) && void 0 !== lT ? lT : 0) - (null !== (KT = null === (OT = (0, CT.j)(cT, kT)) || void 0 === OT ? void 0 : OT.clientIdx) && void 0 !== KT ? KT : 0)
        })),
        Mk = new Map;
      for (const lT of lk) {
        var Kk;
        const TT = null === (Kk = (0, CT.j)(cT, lT)) || void 0 === Kk ? void 0 : Kk.cosmeticPack;
        Mk.has(TT) || Mk.set(TT, []), Mk.get(TT).push(lT)
      }
      const Ok = function(TT, kT) {
          const cT = new Set,
            lT = new Set;
          for (const [MT, KT] of Object.entries(CT.e[TT])) {
            if (void 0 === KT.colourGroup) continue;
            const OT = `${KT.cosmeticPack}_${KT.colourGroup}`;
            (GT(TT, MT, kT) ? lT : cT).add(OT)
          }
          return new Set([...cT].filter((TT => lT.has(TT))))
        }(cT, kk),
        yk = new Map;
      for (const [lT, MT] of Mk) {
        const TT = [],
          kT = new Map;
        for (const lT of MT) {
          var fk, xk;
          const MT = null !== (fk = null === (xk = (0, CT.j)(cT, lT)) || void 0 === xk ? void 0 : xk.colourGroup) && void 0 !== fk ? fk : null;
          kT.has(MT) || (kT.set(MT, []), TT.push(MT)), kT.get(MT).push(lT)
        }
        const KT = TT.map((TT => {
          var MT;
          const KT = kT.get(TT),
            OT = TT ? null === (MT = PT.c[lT].colourGroups) || void 0 === MT ? void 0 : MT[TT] : void 0,
            yT = !0 === (null === OT || void 0 === OT ? void 0 : OT.showSwatchSelector) && !Ok.has(`${lT}_${TT}`);
          if (yT && OT) {
            var fT;
            const kT = null !== (fT = RT[`${lT}_${cT}_${TT}`]) && void 0 !== fT ? fT : (0, PT.h)(OT.colours);
            return {
              groupName: TT,
              showSwatch: yT,
              cosmetics: KT.filter((TT => {
                const cT = (0, CT.g)(TT);
                return !cT || kT.toString() === cT[1].toString()
              }))
            }
          }
          return {
            groupName: TT,
            cosmetics: KT,
            showSwatch: yT
          }
        }));
        yk.set(lT, KT)
      }
      const Ik = Array.from(Mk.keys()),
        Ak = new Map;
      for (const [lT, MT] of Object.entries(jT.c)) {
        const TT = PT.c[MT.cosmeticPack],
          kT = !VT(MT.cosmetics, kk),
          cT = PT.k.some((TT => (0, PT.e)(TT) === lT));
        (TT.clientSelectable || cT || kT) && ((!TT.purchasable || kT || ck) && (Ak.has(MT.cosmeticPack) || Ak.set(MT.cosmeticPack, []), Ak.get(MT.cosmeticPack).push([lT, MT])))
      }
      const Ck = Array.from(Ak.keys());
      return (0, eT.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === cT || "nameColour" === cT) && !tT.playerHasRank("super") && (0, eT.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, eT.jsx)(JT.e, {
            name: "bolt"
          }), yT("homePage:unlockWithSuperRank"), ck && (0, eT.jsx)(QT.m, {
            onClick: () => {
              (0, ST.p)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: yT("general:getItNow")
          })]
        }), (0, eT.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === kT && (0, eT.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Ck.map((TT => {
              const kT = Ak.get(TT);
              return (0, eT.jsx)(ET, {
                pack: TT,
                ownedPacks: kk,
                showStoreLink: !PT.o.includes(TT) && kT.some((TT => {
                  let [, {
                    cosmetics: kT
                  }] = TT;
                  return VT(kT, kk)
                })),
                children: (0, eT.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: kT.map((TT => {
                    let [kT, {
                      cosmetics: cT
                    }] = TT;
                    const lT = VT(cT, kk),
                      MT = Tk(cT),
                      KT = !MT && Object.entries(cT).every((TT => {
                        let [kT, cT] = TT;
                        return BT.current[kT] === cT
                      }));
                    return (0, eT.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: fT()("CharacterPresetCard", {
                        CharacterPresetCardActive: KT,
                        CharacterPresetCardTryingOn: MT
                      }),
                      onClick: () => {
                        if (lT) ! function(TT) {
                          Tk(TT) ? LT({}) : LT({
                            ...TT
                          })
                        }(cT);
                        else {
                          Object.keys(dT).length > 0 && LT({});
                          const TT = Object.entries(cT);
                          for (const [kT, cT] of TT) sT(kT, cT, !1), tT.setPlayerCosmetics(kT, cT);
                          if (null !== OT.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [kT, cT] of TT) OT.gameBridge.send("updateMyCosmetic", {
                              Qc: kT,
                              Sc: cT
                            });
                          else aT.d.updateCosmetics(tT, TT.map((TT => {
                            let [kT, cT] = TT;
                            return {
                              Qc: kT,
                              Sc: cT
                            }
                          }))).catch((TT => {
                            console.error("Failed to update cosmetics", TT)
                          }))
                        }
                      },
                      children: [(0, eT.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${kT}_preview.png)`
                        }
                      }), lT && (0, eT.jsx)(JT.e, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, kT)
                  }))
                })
              }, TT)
            }))]
          }), "emote" === kT && (0, eT.jsx)(ZT, {
            equippedEmoteIds: (0, vT.f)(BT.current.emote),
            ownedPacks: kk,
            canBuy: ck,
            onUpdateLoadout: TT => {
              const kT = (0, vT.i)(TT);
              var cT;
              BT.current = {
                ...BT.current,
                emote: kT
              }, tT.setPlayerCosmetics("emote", kT), HT(), cT = kT, iT.current = cT, null !== pT.current && clearTimeout(pT.current), pT.current = setTimeout(qT, 350)
            },
            onEmoteSelected: YT,
            onEquipPreviewSkin: () => {
              ! function(TT, kT) {
                for (const cT of xT.u) "cape" !== cT && "nameColour" !== cT && "emote" !== cT && TT(cT, "skin" === cT ? "skin_preview" : `${cT}_none`, !1);
                kT()
              }(sT, HT)
            }
          }), "characters" !== kT && "emote" !== kT && (0, eT.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Ik.map((TT => {
              const kT = yk.get(TT);
              return (0, eT.jsx)(ET, {
                pack: TT,
                ownedPacks: kk,
                children: kT.map((kT => {
                  var lT;
                  let {
                    groupName: MT,
                    cosmetics: KT,
                    showSwatch: OT
                  } = kT;
                  const yT = MT ? null === (lT = PT.c[TT].colourGroups) || void 0 === lT ? void 0 : lT[MT] : void 0,
                    xT = `${TT}_${cT}_${MT}`;
                  return (0, eT.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [OT && yT && (0, eT.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...yT.colours.map(((TT, kT) => ({
                        color: TT,
                        index: kT
                      })))].sort(((TT, kT) => TT.color.order - kT.color.order)).map((kT => {
                        var lT;
                        let {
                          color: KT,
                          index: OT
                        } = kT;
                        return (0, eT.jsx)("div", {
                          className: fT()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (lT = RT[xT]) && void 0 !== lT ? lT : (0, PT.h)(yT.colours)) === OT
                          }),
                          style: {
                            backgroundColor: `rgb(${KT.rbg.join(",")})`
                          },
                          onClick: () => {
                            var kT;
                            gT((TT => ({
                              ...TT,
                              [xT]: OT
                            })));
                            const lT = dT[cT],
                              KT = lT ? (0, CT.j)(cT, lT) : null,
                              yT = (null === KT || void 0 === KT ? void 0 : KT.cosmeticPack) === TT,
                              fT = yT ? lT : BT.current[cT],
                              IT = yT ? KT : (0, CT.j)(cT, fT);
                            if ((null === IT || void 0 === IT ? void 0 : IT.cosmeticPack) !== TT) return;
                            if ((null !== (kT = null === IT || void 0 === IT ? void 0 : IT.colourGroup) && void 0 !== kT ? kT : null) !== MT) return;
                            const AT = (0, CT.g)(fT);
                            if (AT) {
                              const TT = `${cT}_${AT[0]}_${OT}`;
                              yT ? LT((kT => ({
                                ...kT,
                                [cT]: TT
                              }))) : sT(cT, TT, !0)
                            }
                          }
                        }, KT.rbg.join())
                      }))
                    }), KT.map((TT => {
                      const kT = TT === BT.current[cT],
                        lT = dT[cT] === TT,
                        MT = GT(cT, TT, kk);
                      let KT = !0;
                      return MT || kT || ("cape" !== cT || (0, FT.Nd)(tT.getPlayerRanks(), TT)) && ("nameColour" !== cT || tT.playerHasRank("super")) || (KT = !1), (0, eT.jsxs)("div", {
                        className: fT()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: kT && !lT,
                          TryingOnCharCustomPartWrapper: lT,
                          DisabledCharCustomPartWrapper: !KT,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === cT
                        }),
                        onClick: () => {
                          if (KT)
                            if (MT) LT((kT => {
                              if (kT[cT] === TT) {
                                const TT = {
                                  ...kT
                                };
                                return delete TT[cT], TT
                              }
                              return {
                                ...kT,
                                [cT]: TT
                              }
                            }));
                            else {
                              var kT;
                              if (dT[cT] && LT((TT => {
                                  const kT = {
                                    ...TT
                                  };
                                  return delete kT[cT], kT
                                })), TT === BT.current[cT]) return;
                              null !== (kT = nT.current) && void 0 !== kT && kT.isReady() && sT(cT, TT, !0)
                            }
                        },
                        children: ["profileEffect" === cT ? (0, eT.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, eT.jsx)(zT.h, {
                            playerSocialPreview: (0, bT.c)(TT, {
                              name: tT.getPlayerName(),
                              cosmetics: tT.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, eT.jsx)("div", {
                          className: fT()("CharCustomPart", {
                            PixelatedImage: "cape" === cT
                          }),
                          style: (0, CT.j)(cT, TT).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,CT.j)(cT,TT).previewTex}.png)`
                          } : {
                            backgroundColor: IT.s[TT]
                          }
                        }), MT && (0, eT.jsx)(JT.e, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, TT)
                    }))]
                  }, null !== MT && void 0 !== MT ? MT : "ungrouped")
                }))
              }, TT)
            }))]
          }), (0, eT.jsx)(rT.CharacterPreview, {
            ref: nT,
            forcedCosmetics: dT,
            xy: UT.id,
            emotePlaySeq: UT.seq,
            onReady: () => {
              for (const TT of xT.u) sT(TT, BT.current[TT], !1)
            }
          })]
        })]
      })
    }))
  },
  40922: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      CharacterPreview: () => AT
    });
    var lT = cT(71),
      MT = cT(2770),
      KT = cT(1244),
      OT = cT(8855),
      yT = cT(9395),
      fT = cT(3595),
      xT = cT(1099);
    const IT = .6 * Math.PI,
      AT = (0, lT.memo)((0, lT.forwardRef)((function(TT, kT) {
        let {
          onReady: cT,
          onDrawn: AT,
          owner: CT = "other",
          framing: jT = "player",
          forcedCosmetics: vT,
          xy: tT,
          emotePlaySeq: hT,
          turntableFromYaw: NT = null
        } = TT;
        const QT = (0, lT.useRef)(null),
          {
            width: ST,
            height: DT
          } = (0, MT.e)(QT),
          aT = (0, lT.useRef)(null),
          FT = (0, lT.useRef)({}),
          rT = (0, lT.useRef)({}),
          [PT, wT] = (0, lT.useState)(!1),
          mT = (0, lT.useRef)(cT);
        mT.current = cT;
        const bT = (0, lT.useRef)(AT);
        bT.current = AT;
        const zT = (0, lT.useRef)(null),
          JT = (0, lT.useRef)(!1),
          oT = (0, lT.useRef)(!1),
          HT = (0, lT.useCallback)((() => {
            const TT = aT.current;
            if (!TT || !bT.current || JT.current || !oT.current) return;
            const kT = {};
            zT.current = kT, queueMicrotask((() => {
              if (zT.current !== kT) return;
              const cT = Promise.all(KT.u.map((kT => TT.untilDrawn(kT)))).catch((TT => {
                  console.error("Failed to draw the character preview", TT)
                })),
                lT = new Promise((TT => {
                  setTimeout(TT, 1e4)
                }));
              Promise.race([cT, lT]).then((() => {
                var cT;
                aT.current !== TT || zT.current !== kT || JT.current || (JT.current = !0, null === (cT = bT.current) || void 0 === cT || cT.call(bT))
              }))
            }))
          }), []);
        return (0, lT.useImperativeHandle)(kT, (() => {
          const TT = (TT, kT) => {
            var cT;
            (FT.current[TT] = kT, null !== vT && void 0 !== vT && vT[TT]) || (null === (cT = aT.current) || void 0 === cT || cT.setCosmetic(TT, kT), HT())
          };
          return {
            updateCosmetic: TT,
            setAllCosmetics(kT) {
              for (const lT of KT.u) {
                var cT;
                TT(lT, null !== (cT = kT[lT]) && void 0 !== cT ? cT : (0, OT.e)(lT))
              }
            },
            isReady() {
              var TT, kT;
              return null !== (TT = null === (kT = aT.current) || void 0 === kT ? void 0 : kT.isReady()) && void 0 !== TT && TT
            },
            resetCamera() {
              var TT;
              null === (TT = aT.current) || void 0 === TT || TT.resetCamera()
            },
            setOrbit(TT) {
              var kT;
              null === (kT = aT.current) || void 0 === kT || kT.setOrbit(TT)
            },
            async ensureReadyForCapture(TT) {
              var kT;
              await (null === (kT = aT.current) || void 0 === kT ? void 0 : kT.untilDrawn(TT))
            },
            getDevTools() {
              var TT;
              return null !== (TT = aT.current) && void 0 !== TT && TT.isReady() ? aT.current.dev : null
            }
          }
        }), [vT, HT]), (0, lT.useEffect)((() => {
          const TT = fT.d.register(CT),
            kT = yT.f.openCharacter(QT.current, jT);
          aT.current = kT;
          let cT = !0;
          return kT.ready.then((() => {
            cT && (wT(!0), mT.current())
          })).catch((TT => {
            console.error("Failed to set up the character preview", TT)
          })), () => {
            cT = !1, TT(), kT.resetCamera(), kT.close(), aT.current = null
          }
        }), []), (0, lT.useEffect)((() => {
          ST <= 0 || DT <= 0 || aT.current.resize(ST, DT)
        }), [ST, DT]), (0, lT.useEffect)((() => {
          if (!PT) return;
          const TT = rT.current;
          for (const kT of KT.u) {
            const cT = null === vT || void 0 === vT ? void 0 : vT[kT],
              lT = TT[kT];
            cT && cT !== lT ? aT.current.setCosmetic(kT, cT) : !cT && lT && FT.current[kT] && aT.current.setCosmetic(kT, FT.current[kT])
          }
          rT.current = {
            ...vT
          }, oT.current = !0, HT()
        }), [vT, PT, HT]), (0, lT.useEffect)((() => {
          PT && aT.current.playEmote(null !== tT && void 0 !== tT ? tT : null)
        }), [tT, hT, PT]), (0, lT.useEffect)((() => {
          if (!PT || null === NT) return;
          const TT = aT.current,
            {
              pitch: kT,
              radius: cT
            } = yT.c[jT];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return TT.setOrbit({
            yaw: NT + IT,
            pitch: kT,
            radius: cT
          }), () => {
            TT.resetCamera()
          };
          const lT = performance.now();
          let MT = 0;
          const KT = OT => {
            TT.setOrbit({
              yaw: NT + (OT - lT) / 6e3 * 2 * Math.PI,
              pitch: kT,
              radius: cT
            }), MT = requestAnimationFrame(KT)
          };
          return MT = requestAnimationFrame(KT), () => {
            cancelAnimationFrame(MT), TT.resetCamera()
          }
        }), [PT, NT]), (0, xT.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: QT
        })
      })))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);