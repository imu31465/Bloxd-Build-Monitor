export const id = 282;
export const ids = [282, 283];
export const modules = {
  40667: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      CharacterCustomisationUI: () => jQ
    });
    var LQ = wQ(53),
      qQ = wQ(2910),
      oQ = wQ(1140),
      DQ = wQ(1897),
      kQ = wQ(1070),
      vQ = wQ.n(kQ),
      mQ = wQ(1254),
      uQ = wQ(600),
      HQ = wQ(1207),
      bQ = wQ(2148),
      YQ = wQ(1560),
      xQ = wQ(8582),
      AQ = wQ(2153),
      tQ = wQ(2987),
      eQ = wQ(1927),
      MQ = wQ(1451),
      GQ = wQ(2188),
      pQ = wQ(17),
      cQ = wQ(1489),
      CQ = wQ(317),
      SQ = wQ(40672),
      iQ = wQ(1551),
      WQ = wQ(2240),
      RQ = wQ(2903),
      OQ = wQ(2088),
      sQ = wQ(2489),
      rQ = wQ(1079);
    wQ(9137), wQ(2990);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var IQ = wQ(2197),
      UQ = wQ(1367),
      NQ = wQ(1107);

    function TQ(QQ, FQ, wQ) {
      return (0, bQ.m)(QQ, FQ).purchasable && !(0, WQ.p)(QQ, FQ, wQ)
    }

    function KQ(QQ, FQ) {
      return Object.entries(QQ).some((QQ => {
        let [wQ, LQ] = QQ;
        return TQ(wQ, LQ, FQ)
      }))
    }

    function zQ(QQ) {
      var FQ;
      let {
        pack: wQ,
        ownedPacks: LQ,
        showStoreLink: qQ = !1,
        children: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, HQ.y)(), kQ = iQ.e[wQ], mQ = kQ.purchasable && !LQ.includes(wQ) && iQ.u.includes(wQ), uQ = RQ.l[wQ];
      return (0, NQ.jsxs)("div", {
        className: vQ()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: mQ
        }),
        children: [uQ && (0, NQ.jsx)(uQ, {}), (0, NQ.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, NQ.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (FQ = kQ.displayName) && void 0 !== FQ ? FQ : wQ
          }), (mQ || qQ) && (0, NQ.jsxs)(MQ.A, {
            onClick: () => {
              mQ ? (0, RQ.i)(wQ) : (0, GQ.o)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, NQ.jsx)(rQ.c, {
              name: "store"
            }), " ", DQ("general:viewInShop")]
          })]
        }), mQ && "bee" === wQ && (0, NQ.jsx)(RQ.b, {}), oQ]
      })
    }

    function lQ(QQ) {
      let {
        equippedEmoteIds: FQ,
        ownedPacks: wQ,
        canBuy: LQ,
        onUpdateLoadout: qQ,
        onEmoteSelected: oQ,
        onEquipPreviewSkin: DQ
      } = QQ;
      const {
        t: kQ
      } = (0, HQ.y)(), uQ = new Set(FQ), YQ = new Map, xQ = Object.keys(bQ.d.emote).sort(((QQ, FQ) => {
        var wQ, LQ, qQ, oQ;
        return (null !== (wQ = null === (LQ = (0, bQ.i)("emote", QQ)) || void 0 === LQ ? void 0 : LQ.clientIdx) && void 0 !== wQ ? wQ : 0) - (null !== (qQ = null === (oQ = (0, bQ.i)("emote", FQ)) || void 0 === oQ ? void 0 : oQ.clientIdx) && void 0 !== qQ ? qQ : 0)
      })).filter((QQ => {
        const FQ = (0, bQ.m)("emote", QQ),
          qQ = (0, WQ.p)("emote", QQ, wQ);
        return !(FQ.purchasable && !qQ && !LQ) && (FQ.clientSelectable || qQ)
      }));
      for (const vQ of xQ) {
        const QQ = (0, bQ.i)("emote", vQ).cosmeticPack;
        YQ.has(QQ) || YQ.set(QQ, []), YQ.get(QQ).push(vQ)
      }
      const tQ = Array.from(YQ.keys());
      return (0, NQ.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, NQ.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, NQ.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: kQ("emotes:equippedCount", {
              count: FQ.length,
              max: mQ.q
            })
          }), (0, NQ.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: kQ("emotes:loadoutHint")
          })]
        }), tQ.map((QQ => {
          const LQ = YQ.get(QQ);
          return (0, NQ.jsx)(zQ, {
            pack: QQ,
            ownedPacks: wQ,
            children: (0, NQ.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: LQ.map((QQ => {
                var LQ;
                const DQ = FQ.indexOf(QQ),
                  HQ = -1 !== DQ,
                  bQ = FQ.length >= mQ.q,
                  YQ = TQ("emote", QQ, wQ),
                  xQ = YQ || !HQ && bQ,
                  tQ = (0, AQ.f)(QQ);
                return (0, NQ.jsxs)("div", {
                  className: vQ()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: HQ
                  }),
                  onClick: () => {
                    oQ(QQ)
                  },
                  children: [(0, NQ.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, NQ.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${QQ}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, NQ.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (LQ = null === tQ || void 0 === tQ ? void 0 : tQ.displayName) && void 0 !== LQ ? LQ : QQ
                    })]
                  }), (0, NQ.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [HQ && (0, NQ.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: DQ + 1
                    }), YQ && (0, NQ.jsx)(rQ.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, NQ.jsx)(UQ.f, {
                      tooltipInner: (0, NQ.jsx)(NQ.Fragment, {
                        children: kQ(HQ ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, NQ.jsx)("div", {
                        className: vQ()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: xQ,
                          EmoteCustomPartToggleEquipped: HQ
                        }),
                        onClick: wQ => {
                          wQ.stopPropagation(), xQ || function(QQ) {
                            uQ.has(QQ) ? qQ(FQ.filter((FQ => FQ !== QQ))) : FQ.length >= mQ.q || qQ([...FQ, QQ])
                          }(QQ)
                        },
                        children: (0, NQ.jsx)(rQ.c, {
                          name: HQ ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, QQ)
              }))
            })
          }, QQ)
        }))]
      })
    }
    const jQ = (0, LQ.memo)((function(QQ) {
      let {
        selectedTab: FQ
      } = QQ;
      const wQ = "characters" === FQ ? "skin" : FQ,
        {
          t: kQ
        } = (0, HQ.y)(),
        {
          userContext: AQ,
          isUserContextUpdating: RQ
        } = (0, oQ.e)(),
        UQ = (0, qQ.b)(),
        {
          gameState: jQ,
          initSdkSelectorFinished: aQ
        } = (0, pQ.l)(["gameState", "initSdkSelectorFinished"]),
        [XQ, fQ] = (0, LQ.useState)({}),
        [VQ, hQ] = (0, LQ.useState)({}),
        {
          previewEmote: JQ,
          triggerEmote: EQ
        } = (0, tQ.c)(),
        nQ = (0, LQ.useRef)(mQ.w.reduce(((QQ, FQ) => (QQ[FQ] = (0, xQ.e)(FQ), QQ)), {})),
        gQ = (0, LQ.useRef)(!1),
        PQ = (0, LQ.useRef)(null),
        ZQ = (0, LQ.useRef)(null),
        yQ = (0, LQ.useRef)(null);

      function BQ() {
        null !== ZQ.current && (clearTimeout(ZQ.current), ZQ.current = null);
        const QQ = yQ.current;
        if (null === QQ) return;
        yQ.current = null;
        const FQ = {
          SL: "emote",
          iL: QQ
        };
        null !== DQ.gameBridge.latest("connectedGame").websocketUrl ? DQ.gameBridge.send("updateMyCosmetic", FQ) : cQ.b.updateCosmetics(AQ, [FQ]).catch((QQ => {
          console.error("Failed to update emote loadout", QQ)
        }))
      }

      function dQ(QQ, FQ, wQ) {
        var LQ, qQ, oQ;
        if (nQ.current = {
            ...nQ.current,
            [QQ]: FQ
          }, UQ(), wQ) {
          const wQ = {
            SL: QQ,
            iL: FQ
          };
          null !== DQ.gameBridge.latest("connectedGame").websocketUrl ? DQ.gameBridge.send("updateMyCosmetic", wQ) : cQ.b.updateCosmetics(AQ, [wQ]).catch((QQ => {
            console.error("Failed to update cosmetic", QQ)
          })), AQ.setPlayerCosmetics(QQ, FQ)
        }
        const kQ = (0, bQ.i)(QQ, FQ);
        if (null !== kQ && void 0 !== kQ && kQ.colourGroup && null !== (LQ = iQ.e[kQ.cosmeticPack].colourGroups) && void 0 !== LQ && null !== (qQ = LQ[kQ.colourGroup]) && void 0 !== qQ && qQ.showSwatchSelector) {
          const wQ = (0, bQ.f)(FQ);
          wQ && hQ((FQ => ({
            ...FQ,
            [`${kQ.cosmeticPack}_${QQ}_${kQ.colourGroup}`]: parseInt(wQ[1])
          })))
        }
        null !== (oQ = PQ.current) && void 0 !== oQ && oQ.isReady() && PQ.current.updateCosmetic(QQ, FQ)
      }

      function QF(QQ) {
        return Object.entries(QQ).every((QQ => {
          let [FQ, wQ] = QQ;
          return XQ[FQ] === wQ
        }))
      }(0, eQ.d)("cosmeticsUpdated", (QQ => {
        let FQ = !1;
        for (const {
            local: wQ,
            SL: LQ,
            iL: qQ
          }
          of QQ) {
          if (!wQ) return;
          FQ = !0, gQ.current || dQ(LQ, qQ, !1), UQ()
        }
        FQ && (gQ.current = !0)
      })), (0, LQ.useEffect)((() => {
        if (!RQ) {
          for (const [QQ, FQ] of Object.entries(AQ.getPlayerCosmetics())) dQ(QQ, FQ, !1);
          UQ()
        }
      }), [RQ]), (0, LQ.useEffect)((() => () => {
        BQ()
      }), []);
      const FF = AQ.getOwnedCosmeticPacks(),
        wF = (0, IQ.purchasesAllowed)(),
        LF = Object.keys(bQ.d[wQ]).filter((QQ => {
          const FQ = (0, bQ.m)(wQ, QQ),
            LQ = (0, WQ.p)(wQ, QQ, FF);
          return !(FQ.purchasable && !LQ && !wF) && (FQ.clientSelectable || LQ)
        })).sort(((QQ, FQ) => {
          var LQ, qQ, oQ, DQ;
          return (null !== (LQ = null === (qQ = (0, bQ.i)(wQ, QQ)) || void 0 === qQ ? void 0 : qQ.clientIdx) && void 0 !== LQ ? LQ : 0) - (null !== (oQ = null === (DQ = (0, bQ.i)(wQ, FQ)) || void 0 === DQ ? void 0 : DQ.clientIdx) && void 0 !== oQ ? oQ : 0)
        })),
        qF = new Map;
      for (const LQ of LF) {
        var oF;
        const QQ = null === (oF = (0, bQ.i)(wQ, LQ)) || void 0 === oF ? void 0 : oF.cosmeticPack;
        qF.has(QQ) || qF.set(QQ, []), qF.get(QQ).push(LQ)
      }
      const DF = function(QQ, FQ) {
          const wQ = new Set,
            LQ = new Set;
          for (const [qQ, oQ] of Object.entries(bQ.d[QQ])) {
            if (void 0 === oQ.colourGroup) continue;
            const DQ = `${oQ.cosmeticPack}_${oQ.colourGroup}`;
            (TQ(QQ, qQ, FQ) ? LQ : wQ).add(DQ)
          }
          return new Set([...wQ].filter((QQ => LQ.has(QQ))))
        }(wQ, FF),
        kF = new Map;
      for (const [LQ, qQ] of qF) {
        const QQ = [],
          FQ = new Map;
        for (const LQ of qQ) {
          var vF, mF;
          const qQ = null !== (vF = null === (mF = (0, bQ.i)(wQ, LQ)) || void 0 === mF ? void 0 : mF.colourGroup) && void 0 !== vF ? vF : null;
          FQ.has(qQ) || (FQ.set(qQ, []), QQ.push(qQ)), FQ.get(qQ).push(LQ)
        }
        const oQ = QQ.map((QQ => {
          var qQ;
          const oQ = FQ.get(QQ),
            DQ = QQ ? null === (qQ = iQ.e[LQ].colourGroups) || void 0 === qQ ? void 0 : qQ[QQ] : void 0,
            kQ = !0 === (null === DQ || void 0 === DQ ? void 0 : DQ.showSwatchSelector) && !DF.has(`${LQ}_${QQ}`);
          if (kQ && DQ) {
            var vQ;
            const FQ = null !== (vQ = VQ[`${LQ}_${wQ}_${QQ}`]) && void 0 !== vQ ? vQ : (0, iQ.k)(DQ.colours);
            return {
              groupName: QQ,
              showSwatch: kQ,
              cosmetics: oQ.filter((QQ => {
                const wQ = (0, bQ.f)(QQ);
                return !wQ || FQ.toString() === wQ[1].toString()
              }))
            }
          }
          return {
            groupName: QQ,
            cosmetics: oQ,
            showSwatch: kQ
          }
        }));
        kF.set(LQ, oQ)
      }
      const uF = Array.from(qF.keys()),
        HF = new Map;
      for (const [LQ, qQ] of Object.entries(YQ.e)) {
        const QQ = iQ.e[qQ.cosmeticPack],
          FQ = !KQ(qQ.cosmetics, FF),
          wQ = iQ.p.some((QQ => (0, iQ.i)(QQ) === LQ));
        (QQ.clientSelectable || wQ || FQ) && ((!QQ.purchasable || FQ || wF) && (HF.has(qQ.cosmeticPack) || HF.set(qQ.cosmeticPack, []), HF.get(qQ.cosmeticPack).push([LQ, qQ])))
      }
      const bF = Array.from(HF.keys());
      return (0, NQ.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === wQ || "nameColour" === wQ) && !AQ.playerHasRank("super") && (0, NQ.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, NQ.jsx)(rQ.c, {
            name: "bolt"
          }), kQ("homePage:unlockWithSuperRank"), wF && (0, NQ.jsx)(MQ.m, {
            onClick: () => {
              (0, GQ.o)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: kQ("general:getItNow")
          })]
        }), (0, NQ.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === FQ && (0, NQ.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, bF.map((QQ => {
              const FQ = HF.get(QQ);
              return (0, NQ.jsx)(zQ, {
                pack: QQ,
                ownedPacks: FF,
                showStoreLink: !iQ.t.includes(QQ) && FQ.some((QQ => {
                  let [, {
                    cosmetics: FQ
                  }] = QQ;
                  return KQ(FQ, FF)
                })),
                children: (0, NQ.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: FQ.map((QQ => {
                    let [FQ, {
                      cosmetics: wQ
                    }] = QQ;
                    const LQ = KQ(wQ, FF),
                      qQ = QF(wQ),
                      oQ = !qQ && Object.entries(wQ).every((QQ => {
                        let [FQ, wQ] = QQ;
                        return nQ.current[FQ] === wQ
                      }));
                    return (0, NQ.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: vQ()("CharacterPresetCard", {
                        CharacterPresetCardActive: oQ,
                        CharacterPresetCardTryingOn: qQ
                      }),
                      onClick: () => {
                        if (LQ) ! function(QQ) {
                          QF(QQ) ? fQ({}) : fQ({
                            ...QQ
                          })
                        }(wQ);
                        else {
                          Object.keys(XQ).length > 0 && fQ({});
                          const QQ = Object.entries(wQ);
                          for (const [FQ, wQ] of QQ) dQ(FQ, wQ, !1), AQ.setPlayerCosmetics(FQ, wQ);
                          if (null !== DQ.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [FQ, wQ] of QQ) DQ.gameBridge.send("updateMyCosmetic", {
                              SL: FQ,
                              iL: wQ
                            });
                          else cQ.b.updateCosmetics(AQ, QQ.map((QQ => {
                            let [FQ, wQ] = QQ;
                            return {
                              SL: FQ,
                              iL: wQ
                            }
                          }))).catch((QQ => {
                            console.error("Failed to update cosmetics", QQ)
                          }))
                        }
                      },
                      children: [(0, NQ.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${FQ}_preview.png)`
                        }
                      }), LQ && (0, NQ.jsx)(rQ.c, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, FQ)
                  }))
                })
              }, QQ)
            }))]
          }), "emote" === FQ && (0, NQ.jsx)(lQ, {
            equippedEmoteIds: (0, xQ.g)(nQ.current.emote),
            ownedPacks: FF,
            canBuy: wF,
            onUpdateLoadout: QQ => {
              const FQ = (0, xQ.h)(QQ);
              var wQ;
              nQ.current = {
                ...nQ.current,
                emote: FQ
              }, AQ.setPlayerCosmetics("emote", FQ), UQ(), wQ = FQ, yQ.current = wQ, null !== ZQ.current && clearTimeout(ZQ.current), ZQ.current = setTimeout(BQ, 350)
            },
            onEmoteSelected: EQ,
            onEquipPreviewSkin: () => {
              ! function(QQ, FQ) {
                for (const wQ of mQ.w) "cape" !== wQ && "nameColour" !== wQ && "emote" !== wQ && QQ(wQ, "skin" === wQ ? "skin_preview" : `${wQ}_none`, !1);
                FQ()
              }(dQ, UQ)
            }
          }), "characters" !== FQ && "emote" !== FQ && (0, NQ.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, uF.map((QQ => {
              const FQ = kF.get(QQ);
              return (0, NQ.jsx)(zQ, {
                pack: QQ,
                ownedPacks: FF,
                children: FQ.map((FQ => {
                  var LQ;
                  let {
                    groupName: qQ,
                    cosmetics: oQ,
                    showSwatch: DQ
                  } = FQ;
                  const kQ = qQ ? null === (LQ = iQ.e[QQ].colourGroups) || void 0 === LQ ? void 0 : LQ[qQ] : void 0,
                    mQ = `${QQ}_${wQ}_${qQ}`;
                  return (0, NQ.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [DQ && kQ && (0, NQ.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...kQ.colours.map(((QQ, FQ) => ({
                        color: QQ,
                        index: FQ
                      })))].sort(((QQ, FQ) => QQ.color.order - FQ.color.order)).map((FQ => {
                        var LQ;
                        let {
                          color: oQ,
                          index: DQ
                        } = FQ;
                        return (0, NQ.jsx)("div", {
                          className: vQ()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (LQ = VQ[mQ]) && void 0 !== LQ ? LQ : (0, iQ.k)(kQ.colours)) === DQ
                          }),
                          style: {
                            backgroundColor: `rgb(${oQ.rbg.join(",")})`
                          },
                          onClick: () => {
                            var FQ;
                            hQ((QQ => ({
                              ...QQ,
                              [mQ]: DQ
                            })));
                            const LQ = XQ[wQ],
                              oQ = LQ ? (0, bQ.i)(wQ, LQ) : null,
                              kQ = (null === oQ || void 0 === oQ ? void 0 : oQ.cosmeticPack) === QQ,
                              vQ = kQ ? LQ : nQ.current[wQ],
                              uQ = kQ ? oQ : (0, bQ.i)(wQ, vQ);
                            if ((null === uQ || void 0 === uQ ? void 0 : uQ.cosmeticPack) !== QQ) return;
                            if ((null !== (FQ = null === uQ || void 0 === uQ ? void 0 : uQ.colourGroup) && void 0 !== FQ ? FQ : null) !== qQ) return;
                            const HQ = (0, bQ.f)(vQ);
                            if (HQ) {
                              const QQ = `${wQ}_${HQ[0]}_${DQ}`;
                              kQ ? fQ((FQ => ({
                                ...FQ,
                                [wQ]: QQ
                              }))) : dQ(wQ, QQ, !0)
                            }
                          }
                        }, oQ.rbg.join())
                      }))
                    }), oQ.map((QQ => {
                      const FQ = QQ === nQ.current[wQ],
                        LQ = XQ[wQ] === QQ,
                        qQ = TQ(wQ, QQ, FF);
                      let oQ = !0;
                      return qQ || FQ || ("cape" !== wQ || (0, CQ.Wd)(AQ.getPlayerRanks(), QQ)) && ("nameColour" !== wQ || AQ.playerHasRank("super")) || (oQ = !1), (0, NQ.jsxs)("div", {
                        className: vQ()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: FQ && !LQ,
                          TryingOnCharCustomPartWrapper: LQ,
                          DisabledCharCustomPartWrapper: !oQ,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === wQ
                        }),
                        onClick: () => {
                          if (oQ)
                            if (qQ) fQ((FQ => {
                              if (FQ[wQ] === QQ) {
                                const QQ = {
                                  ...FQ
                                };
                                return delete QQ[wQ], QQ
                              }
                              return {
                                ...FQ,
                                [wQ]: QQ
                              }
                            }));
                            else {
                              var FQ;
                              if (XQ[wQ] && fQ((QQ => {
                                  const FQ = {
                                    ...QQ
                                  };
                                  return delete FQ[wQ], FQ
                                })), QQ === nQ.current[wQ]) return;
                              null !== (FQ = PQ.current) && void 0 !== FQ && FQ.isReady() && dQ(wQ, QQ, !0)
                            }
                        },
                        children: ["profileEffect" === wQ ? (0, NQ.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, NQ.jsx)(sQ.e, {
                            playerSocialPreview: (0, OQ.c)(QQ, {
                              name: AQ.getPlayerName(),
                              cosmetics: AQ.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, NQ.jsx)("div", {
                          className: vQ()("CharCustomPart", {
                            PixelatedImage: "cape" === wQ
                          }),
                          style: (0, bQ.i)(wQ, QQ).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,bQ.i)(wQ,QQ).previewTex}.png)`
                          } : {
                            backgroundColor: uQ.s[QQ]
                          }
                        }), qQ && (0, NQ.jsx)(rQ.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, QQ)
                    }))]
                  }, null !== qQ && void 0 !== qQ ? qQ : "ungrouped")
                }))
              }, QQ)
            }))]
          }), (0, NQ.jsx)(SQ.CharacterPreview, {
            ref: PQ,
            forcedCosmetics: XQ,
            ou: JQ.id,
            emotePlaySeq: JQ.seq,
            onReady: () => {
              for (const QQ of mQ.w) dQ(QQ, nQ.current[QQ], !1)
            }
          })]
        })]
      })
    }))
  },
  40672: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      CharacterPreview: () => HQ
    });
    var LQ = wQ(53),
      qQ = wQ(2657),
      oQ = wQ(1254),
      DQ = wQ(8582),
      kQ = wQ(9137),
      vQ = wQ(3511),
      mQ = wQ(1107);
    const uQ = .6 * Math.PI,
      HQ = (0, LQ.memo)((0, LQ.forwardRef)((function(QQ, FQ) {
        let {
          onReady: wQ,
          onDrawn: HQ,
          owner: bQ = "other",
          framing: YQ = "player",
          forcedCosmetics: xQ,
          ou: AQ,
          emotePlaySeq: tQ,
          turntableFromYaw: eQ = null
        } = QQ;
        const MQ = (0, LQ.useRef)(null),
          {
            width: GQ,
            height: pQ
          } = (0, qQ.c)(MQ),
          cQ = (0, LQ.useRef)(null),
          CQ = (0, LQ.useRef)({}),
          SQ = (0, LQ.useRef)({}),
          [iQ, WQ] = (0, LQ.useState)(!1),
          RQ = (0, LQ.useRef)(wQ);
        RQ.current = wQ;
        const OQ = (0, LQ.useRef)(HQ);
        OQ.current = HQ;
        const sQ = (0, LQ.useRef)(null),
          rQ = (0, LQ.useRef)(!1),
          IQ = (0, LQ.useRef)(!1),
          UQ = (0, LQ.useCallback)((() => {
            const QQ = cQ.current;
            if (!QQ || !OQ.current || rQ.current || !IQ.current) return;
            const FQ = {};
            sQ.current = FQ, queueMicrotask((() => {
              if (sQ.current !== FQ) return;
              const wQ = Promise.all(oQ.w.map((FQ => QQ.untilDrawn(FQ)))).catch((QQ => {
                  console.error("Failed to draw the character preview", QQ)
                })),
                LQ = new Promise((QQ => {
                  setTimeout(QQ, 1e4)
                }));
              Promise.race([wQ, LQ]).then((() => {
                var wQ;
                cQ.current !== QQ || sQ.current !== FQ || rQ.current || (rQ.current = !0, null === (wQ = OQ.current) || void 0 === wQ || wQ.call(OQ))
              }))
            }))
          }), []);
        return (0, LQ.useImperativeHandle)(FQ, (() => {
          const QQ = (QQ, FQ) => {
            var wQ;
            (CQ.current[QQ] = FQ, null !== xQ && void 0 !== xQ && xQ[QQ]) || (null === (wQ = cQ.current) || void 0 === wQ || wQ.setCosmetic(QQ, FQ), UQ())
          };
          return {
            updateCosmetic: QQ,
            setAllCosmetics(FQ) {
              for (const LQ of oQ.w) {
                var wQ;
                QQ(LQ, null !== (wQ = FQ[LQ]) && void 0 !== wQ ? wQ : (0, DQ.e)(LQ))
              }
            },
            isReady() {
              var QQ, FQ;
              return null !== (QQ = null === (FQ = cQ.current) || void 0 === FQ ? void 0 : FQ.isReady()) && void 0 !== QQ && QQ
            },
            resetCamera() {
              var QQ;
              null === (QQ = cQ.current) || void 0 === QQ || QQ.resetCamera()
            },
            setOrbit(QQ) {
              var FQ;
              null === (FQ = cQ.current) || void 0 === FQ || FQ.setOrbit(QQ)
            },
            async ensureReadyForCapture(QQ) {
              var FQ;
              await (null === (FQ = cQ.current) || void 0 === FQ ? void 0 : FQ.untilDrawn(QQ))
            },
            getDevTools() {
              var QQ;
              return null !== (QQ = cQ.current) && void 0 !== QQ && QQ.isReady() ? cQ.current.dev : null
            }
          }
        }), [xQ, UQ]), (0, LQ.useEffect)((() => {
          const QQ = vQ.d.register(bQ),
            FQ = kQ.d.openCharacter(MQ.current, YQ);
          cQ.current = FQ;
          let wQ = !0;
          return FQ.ready.then((() => {
            wQ && (WQ(!0), RQ.current())
          })).catch((QQ => {
            console.error("Failed to set up the character preview", QQ)
          })), () => {
            wQ = !1, QQ(), FQ.resetCamera(), FQ.close(), cQ.current = null
          }
        }), []), (0, LQ.useEffect)((() => {
          GQ <= 0 || pQ <= 0 || cQ.current.resize(GQ, pQ)
        }), [GQ, pQ]), (0, LQ.useEffect)((() => {
          if (!iQ) return;
          const QQ = SQ.current;
          for (const FQ of oQ.w) {
            const wQ = null === xQ || void 0 === xQ ? void 0 : xQ[FQ],
              LQ = QQ[FQ];
            wQ && wQ !== LQ ? cQ.current.setCosmetic(FQ, wQ) : !wQ && LQ && CQ.current[FQ] && cQ.current.setCosmetic(FQ, CQ.current[FQ])
          }
          SQ.current = {
            ...xQ
          }, IQ.current = !0, UQ()
        }), [xQ, iQ, UQ]), (0, LQ.useEffect)((() => {
          iQ && cQ.current.playEmote(null !== AQ && void 0 !== AQ ? AQ : null)
        }), [AQ, tQ, iQ]), (0, LQ.useEffect)((() => {
          if (!iQ || null === eQ) return;
          const QQ = cQ.current,
            {
              pitch: FQ,
              radius: wQ
            } = kQ.b[YQ];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return QQ.setOrbit({
            yaw: eQ + uQ,
            pitch: FQ,
            radius: wQ
          }), () => {
            QQ.resetCamera()
          };
          const LQ = performance.now();
          let qQ = 0;
          const oQ = DQ => {
            QQ.setOrbit({
              yaw: eQ + (DQ - LQ) / 6e3 * 2 * Math.PI,
              pitch: FQ,
              radius: wQ
            }), qQ = requestAnimationFrame(oQ)
          };
          return qQ = requestAnimationFrame(oQ), () => {
            cancelAnimationFrame(qQ), QQ.resetCamera()
          }
        }), [iQ, eQ]), (0, mQ.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: MQ
        })
      })))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);