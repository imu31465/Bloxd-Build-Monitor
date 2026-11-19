export const id = 279;
export const ids = [279, 280];
export const modules = {
  40271: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      CharacterCustomisationUI: () => JY
    });
    var FY = DY(61),
      AY = DY(2620),
      IY = DY(1152),
      RY = DY(1808),
      OY = DY(1092),
      gY = DY.n(OY),
      aY = DY(1244),
      vY = DY(605),
      uY = DY(1211),
      sY = DY(2091),
      iY = DY(2172),
      yY = DY(8236),
      QY = DY(2099),
      oY = DY(2699),
      WY = DY(1834),
      EY = DY(1437),
      mY = DY(2118),
      VY = DY(19),
      SY = DY(1471),
      lY = DY(341),
      TY = DY(40276),
      eY = DY(1543),
      NY = DY(2192),
      BY = DY(2614),
      cY = DY(2016),
      KY = DY(2353),
      HY = DY(1098);
    DY(36228), DY(2704);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var zY = DY(2129),
      ZY = DY(1354),
      CY = DY(1125);

    function fY(YY, rY, DY) {
      return (0, sY.p)(YY, rY).purchasable && !(0, NY.l)(YY, rY, DY)
    }

    function jY(YY, rY) {
      return Object.entries(YY).some((YY => {
        let [DY, FY] = YY;
        return fY(DY, FY, rY)
      }))
    }

    function hY(YY) {
      var rY;
      let {
        pack: DY,
        ownedPacks: FY,
        showStoreLink: AY = !1,
        children: IY
      } = YY;
      const {
        t: RY
      } = (0, uY.C)(), OY = eY.b[DY], aY = OY.purchasable && !FY.includes(DY) && eY.j.includes(DY), vY = BY.k[DY];
      return (0, CY.jsxs)("div", {
        className: gY()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: aY
        }),
        children: [vY && (0, CY.jsx)(vY, {}), (0, CY.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, CY.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (rY = OY.displayName) && void 0 !== rY ? rY : DY
          }), (aY || AY) && (0, CY.jsxs)(EY.A, {
            onClick: () => {
              aY ? (0, BY.h)(DY) : (0, mY.f)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, CY.jsx)(HY.e, {
              name: "store"
            }), " ", RY("general:viewInShop")]
          })]
        }), aY && "bee" === DY && (0, CY.jsx)(BY.b, {}), IY]
      })
    }

    function dY(YY) {
      let {
        equippedEmoteIds: rY,
        ownedPacks: DY,
        canBuy: FY,
        onUpdateLoadout: AY,
        onEmoteSelected: IY,
        onEquipPreviewSkin: RY
      } = YY;
      const {
        t: OY
      } = (0, uY.C)(), vY = new Set(rY), iY = new Map, yY = Object.keys(sY.g.emote).sort(((YY, rY) => {
        var DY, FY, AY, IY;
        return (null !== (DY = null === (FY = (0, sY.n)("emote", YY)) || void 0 === FY ? void 0 : FY.clientIdx) && void 0 !== DY ? DY : 0) - (null !== (AY = null === (IY = (0, sY.n)("emote", rY)) || void 0 === IY ? void 0 : IY.clientIdx) && void 0 !== AY ? AY : 0)
      })).filter((YY => {
        const rY = (0, sY.p)("emote", YY),
          AY = (0, NY.l)("emote", YY, DY);
        return !(rY.purchasable && !AY && !FY) && (rY.clientSelectable || AY)
      }));
      for (const gY of yY) {
        const YY = (0, sY.n)("emote", gY).cosmeticPack;
        iY.has(YY) || iY.set(YY, []), iY.get(YY).push(gY)
      }
      const oY = Array.from(iY.keys());
      return (0, CY.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, CY.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, CY.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: OY("emotes:equippedCount", {
              count: rY.length,
              max: aY.m
            })
          }), (0, CY.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: OY("emotes:loadoutHint")
          })]
        }), oY.map((YY => {
          const FY = iY.get(YY);
          return (0, CY.jsx)(hY, {
            pack: YY,
            ownedPacks: DY,
            children: (0, CY.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: FY.map((YY => {
                var FY;
                const RY = rY.indexOf(YY),
                  uY = -1 !== RY,
                  sY = rY.length >= aY.m,
                  iY = fY("emote", YY, DY),
                  yY = iY || !uY && sY,
                  oY = (0, QY.h)(YY);
                return (0, CY.jsxs)("div", {
                  className: gY()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: uY
                  }),
                  onClick: () => {
                    IY(YY)
                  },
                  children: [(0, CY.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, CY.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${YY}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, CY.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (FY = null === oY || void 0 === oY ? void 0 : oY.displayName) && void 0 !== FY ? FY : YY
                    })]
                  }), (0, CY.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [uY && (0, CY.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: RY + 1
                    }), iY && (0, CY.jsx)(HY.e, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, CY.jsx)(ZY.g, {
                      tooltipInner: (0, CY.jsx)(CY.Fragment, {
                        children: OY(uY ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, CY.jsx)("div", {
                        className: gY()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: yY,
                          EmoteCustomPartToggleEquipped: uY
                        }),
                        onClick: DY => {
                          DY.stopPropagation(), yY || function(YY) {
                            vY.has(YY) ? AY(rY.filter((rY => rY !== YY))) : rY.length >= aY.m || AY([...rY, YY])
                          }(YY)
                        },
                        children: (0, CY.jsx)(HY.e, {
                          name: uY ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, YY)
              }))
            })
          }, YY)
        }))]
      })
    }
    const JY = (0, FY.memo)((function(YY) {
      let {
        selectedTab: rY
      } = YY;
      const DY = "characters" === rY ? "skin" : rY,
        {
          t: OY
        } = (0, uY.C)(),
        {
          userContext: QY,
          isUserContextUpdating: BY
        } = (0, IY.d)(),
        ZY = (0, AY.c)(),
        {
          gameState: JY,
          initSdkSelectorFinished: MY
        } = (0, VY.j)(["gameState", "initSdkSelectorFinished"]),
        [wY, bY] = (0, FY.useState)({}),
        [XY, qY] = (0, FY.useState)({}),
        {
          previewEmote: pY,
          triggerEmote: kY
        } = (0, oY.c)(),
        GY = (0, FY.useRef)(aY.u.reduce(((YY, rY) => (YY[rY] = (0, yY.b)(rY), YY)), {})),
        xY = (0, FY.useRef)(!1),
        nY = (0, FY.useRef)(null),
        PY = (0, FY.useRef)(null),
        UY = (0, FY.useRef)(null);

      function LY() {
        null !== PY.current && (clearTimeout(PY.current), PY.current = null);
        const YY = UY.current;
        if (null === YY) return;
        UY.current = null;
        const rY = {
          rY: "emote",
          DY: YY
        };
        null !== RY.gameBridge.latest("connectedGame").websocketUrl ? RY.gameBridge.send("updateMyCosmetic", rY) : SY.e.updateCosmetics(QY, [rY]).catch((YY => {
          console.error("Failed to update emote loadout", YY)
        }))
      }

      function tY(YY, rY, DY) {
        var FY, AY, IY;
        if (GY.current = {
            ...GY.current,
            [YY]: rY
          }, ZY(), DY) {
          const DY = {
            rY: YY,
            DY: rY
          };
          null !== RY.gameBridge.latest("connectedGame").websocketUrl ? RY.gameBridge.send("updateMyCosmetic", DY) : SY.e.updateCosmetics(QY, [DY]).catch((YY => {
            console.error("Failed to update cosmetic", YY)
          })), QY.setPlayerCosmetics(YY, rY)
        }
        const OY = (0, sY.n)(YY, rY);
        if (null !== OY && void 0 !== OY && OY.colourGroup && null !== (FY = eY.b[OY.cosmeticPack].colourGroups) && void 0 !== FY && null !== (AY = FY[OY.colourGroup]) && void 0 !== AY && AY.showSwatchSelector) {
          const DY = (0, sY.k)(rY);
          DY && qY((rY => ({
            ...rY,
            [`${OY.cosmeticPack}_${YY}_${OY.colourGroup}`]: parseInt(DY[1])
          })))
        }
        null !== (IY = nY.current) && void 0 !== IY && IY.isReady() && nY.current.updateCosmetic(YY, rY)
      }

      function Yr(YY) {
        return Object.entries(YY).every((YY => {
          let [rY, DY] = YY;
          return wY[rY] === DY
        }))
      }(0, WY.c)("cosmeticsUpdated", (YY => {
        let rY = !1;
        for (const {
            local: DY,
            rY: FY,
            DY: AY
          }
          of YY) {
          if (!DY) return;
          rY = !0, xY.current || tY(FY, AY, !1), ZY()
        }
        rY && (xY.current = !0)
      })), (0, FY.useEffect)((() => {
        if (!BY) {
          for (const [YY, rY] of Object.entries(QY.getPlayerCosmetics())) tY(YY, rY, !1);
          ZY()
        }
      }), [BY]), (0, FY.useEffect)((() => () => {
        LY()
      }), []);
      const rr = QY.getOwnedCosmeticPacks(),
        Dr = (0, zY.purchasesAllowed)(),
        Fr = Object.keys(sY.g[DY]).filter((YY => {
          const rY = (0, sY.p)(DY, YY),
            FY = (0, NY.l)(DY, YY, rr);
          return !(rY.purchasable && !FY && !Dr) && (rY.clientSelectable || FY)
        })).sort(((YY, rY) => {
          var FY, AY, IY, RY;
          return (null !== (FY = null === (AY = (0, sY.n)(DY, YY)) || void 0 === AY ? void 0 : AY.clientIdx) && void 0 !== FY ? FY : 0) - (null !== (IY = null === (RY = (0, sY.n)(DY, rY)) || void 0 === RY ? void 0 : RY.clientIdx) && void 0 !== IY ? IY : 0)
        })),
        Ar = new Map;
      for (const FY of Fr) {
        var Ir;
        const YY = null === (Ir = (0, sY.n)(DY, FY)) || void 0 === Ir ? void 0 : Ir.cosmeticPack;
        Ar.has(YY) || Ar.set(YY, []), Ar.get(YY).push(FY)
      }
      const Rr = function(YY, rY) {
          const DY = new Set,
            FY = new Set;
          for (const [AY, IY] of Object.entries(sY.g[YY])) {
            if (void 0 === IY.colourGroup) continue;
            const RY = `${IY.cosmeticPack}_${IY.colourGroup}`;
            (fY(YY, AY, rY) ? FY : DY).add(RY)
          }
          return new Set([...DY].filter((YY => FY.has(YY))))
        }(DY, rr),
        Or = new Map;
      for (const [FY, AY] of Ar) {
        const YY = [],
          rY = new Map;
        for (const FY of AY) {
          var gr, ar;
          const AY = null !== (gr = null === (ar = (0, sY.n)(DY, FY)) || void 0 === ar ? void 0 : ar.colourGroup) && void 0 !== gr ? gr : null;
          rY.has(AY) || (rY.set(AY, []), YY.push(AY)), rY.get(AY).push(FY)
        }
        const IY = YY.map((YY => {
          var AY;
          const IY = rY.get(YY),
            RY = YY ? null === (AY = eY.b[FY].colourGroups) || void 0 === AY ? void 0 : AY[YY] : void 0,
            OY = !0 === (null === RY || void 0 === RY ? void 0 : RY.showSwatchSelector) && !Rr.has(`${FY}_${YY}`);
          if (OY && RY) {
            var gY;
            const rY = null !== (gY = XY[`${FY}_${DY}_${YY}`]) && void 0 !== gY ? gY : (0, eY.g)(RY.colours);
            return {
              groupName: YY,
              showSwatch: OY,
              cosmetics: IY.filter((YY => {
                const DY = (0, sY.k)(YY);
                return !DY || rY.toString() === DY[1].toString()
              }))
            }
          }
          return {
            groupName: YY,
            cosmetics: IY,
            showSwatch: OY
          }
        }));
        Or.set(FY, IY)
      }
      const vr = Array.from(Ar.keys()),
        ur = new Map;
      for (const [FY, AY] of Object.entries(iY.c)) {
        const YY = eY.b[AY.cosmeticPack],
          rY = !jY(AY.cosmetics, rr),
          DY = eY.h.some((YY => (0, eY.c)(YY) === FY));
        (YY.clientSelectable || DY || rY) && ((!YY.purchasable || rY || Dr) && (ur.has(AY.cosmeticPack) || ur.set(AY.cosmeticPack, []), ur.get(AY.cosmeticPack).push([FY, AY])))
      }
      const sr = Array.from(ur.keys());
      return (0, CY.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === DY || "nameColour" === DY) && !QY.playerHasRank("super") && (0, CY.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, CY.jsx)(HY.e, {
            name: "bolt"
          }), OY("homePage:unlockWithSuperRank"), Dr && (0, CY.jsx)(EY.n, {
            onClick: () => {
              (0, mY.f)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: OY("general:getItNow")
          })]
        }), (0, CY.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === rY && (0, CY.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, sr.map((YY => {
              const rY = ur.get(YY);
              return (0, CY.jsx)(hY, {
                pack: YY,
                ownedPacks: rr,
                showStoreLink: !eY.j.includes(YY) && rY.some((YY => {
                  let [, {
                    cosmetics: rY
                  }] = YY;
                  return jY(rY, rr)
                })),
                children: (0, CY.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: rY.map((YY => {
                    let [rY, {
                      cosmetics: DY
                    }] = YY;
                    const FY = jY(DY, rr),
                      AY = Yr(DY),
                      IY = !AY && Object.entries(DY).every((YY => {
                        let [rY, DY] = YY;
                        return GY.current[rY] === DY
                      }));
                    return (0, CY.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: gY()("CharacterPresetCard", {
                        CharacterPresetCardActive: IY,
                        CharacterPresetCardTryingOn: AY
                      }),
                      onClick: () => {
                        if (FY) ! function(YY) {
                          Yr(YY) ? bY({}) : bY({
                            ...YY
                          })
                        }(DY);
                        else {
                          Object.keys(wY).length > 0 && bY({});
                          const YY = Object.entries(DY);
                          for (const [rY, DY] of YY) tY(rY, DY, !1), QY.setPlayerCosmetics(rY, DY);
                          if (null !== RY.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [rY, DY] of YY) RY.gameBridge.send("updateMyCosmetic", {
                              rY: rY,
                              DY: DY
                            });
                          else SY.e.updateCosmetics(QY, YY.map((YY => {
                            let [rY, DY] = YY;
                            return {
                              rY: rY,
                              DY: DY
                            }
                          }))).catch((YY => {
                            console.error("Failed to update cosmetics", YY)
                          }))
                        }
                      },
                      children: [(0, CY.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${rY}_preview.png)`
                        }
                      }), FY && (0, CY.jsx)(HY.e, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, rY)
                  }))
                })
              }, YY)
            }))]
          }), "emote" === rY && (0, CY.jsx)(dY, {
            equippedEmoteIds: (0, yY.f)(GY.current.emote),
            ownedPacks: rr,
            canBuy: Dr,
            onUpdateLoadout: YY => {
              const rY = (0, yY.i)(YY);
              var DY;
              GY.current = {
                ...GY.current,
                emote: rY
              }, QY.setPlayerCosmetics("emote", rY), ZY(), DY = rY, UY.current = DY, null !== PY.current && clearTimeout(PY.current), PY.current = setTimeout(LY, 350)
            },
            onEmoteSelected: kY,
            onEquipPreviewSkin: () => {
              ! function(YY, rY) {
                for (const DY of aY.u) "cape" !== DY && "nameColour" !== DY && "emote" !== DY && YY(DY, "skin" === DY ? "skin_preview" : `${DY}_none`, !1);
                rY()
              }(tY, ZY)
            }
          }), "characters" !== rY && "emote" !== rY && (0, CY.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, vr.map((YY => {
              const rY = Or.get(YY);
              return (0, CY.jsx)(hY, {
                pack: YY,
                ownedPacks: rr,
                children: rY.map((rY => {
                  var FY;
                  let {
                    groupName: AY,
                    cosmetics: IY,
                    showSwatch: RY
                  } = rY;
                  const OY = AY ? null === (FY = eY.b[YY].colourGroups) || void 0 === FY ? void 0 : FY[AY] : void 0,
                    aY = `${YY}_${DY}_${AY}`;
                  return (0, CY.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [RY && OY && (0, CY.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...OY.colours.map(((YY, rY) => ({
                        color: YY,
                        index: rY
                      })))].sort(((YY, rY) => YY.color.order - rY.color.order)).map((rY => {
                        var FY;
                        let {
                          color: IY,
                          index: RY
                        } = rY;
                        return (0, CY.jsx)("div", {
                          className: gY()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (FY = XY[aY]) && void 0 !== FY ? FY : (0, eY.g)(OY.colours)) === RY
                          }),
                          style: {
                            backgroundColor: `rgb(${IY.rbg.join(",")})`
                          },
                          onClick: () => {
                            var rY;
                            qY((YY => ({
                              ...YY,
                              [aY]: RY
                            })));
                            const FY = wY[DY],
                              IY = FY ? (0, sY.n)(DY, FY) : null,
                              OY = (null === IY || void 0 === IY ? void 0 : IY.cosmeticPack) === YY,
                              gY = OY ? FY : GY.current[DY],
                              vY = OY ? IY : (0, sY.n)(DY, gY);
                            if ((null === vY || void 0 === vY ? void 0 : vY.cosmeticPack) !== YY) return;
                            if ((null !== (rY = null === vY || void 0 === vY ? void 0 : vY.colourGroup) && void 0 !== rY ? rY : null) !== AY) return;
                            const uY = (0, sY.k)(gY);
                            if (uY) {
                              const YY = `${DY}_${uY[0]}_${RY}`;
                              OY ? bY((rY => ({
                                ...rY,
                                [DY]: YY
                              }))) : tY(DY, YY, !0)
                            }
                          }
                        }, IY.rbg.join())
                      }))
                    }), IY.map((YY => {
                      const rY = YY === GY.current[DY],
                        FY = wY[DY] === YY,
                        AY = fY(DY, YY, rr);
                      let IY = !0;
                      return AY || rY || ("cape" !== DY || (0, lY.Fd)(QY.getPlayerRanks(), YY)) && ("nameColour" !== DY || QY.playerHasRank("super")) || (IY = !1), (0, CY.jsxs)("div", {
                        className: gY()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: rY && !FY,
                          TryingOnCharCustomPartWrapper: FY,
                          DisabledCharCustomPartWrapper: !IY,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === DY
                        }),
                        onClick: () => {
                          if (IY)
                            if (AY) bY((rY => {
                              if (rY[DY] === YY) {
                                const YY = {
                                  ...rY
                                };
                                return delete YY[DY], YY
                              }
                              return {
                                ...rY,
                                [DY]: YY
                              }
                            }));
                            else {
                              var rY;
                              if (wY[DY] && bY((YY => {
                                  const rY = {
                                    ...YY
                                  };
                                  return delete rY[DY], rY
                                })), YY === GY.current[DY]) return;
                              null !== (rY = nY.current) && void 0 !== rY && rY.isReady() && tY(DY, YY, !0)
                            }
                        },
                        children: ["profileEffect" === DY ? (0, CY.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, CY.jsx)(KY.g, {
                            playerSocialPreview: (0, cY.b)(YY, {
                              name: QY.getPlayerName(),
                              cosmetics: QY.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, CY.jsx)("div", {
                          className: gY()("CharCustomPart", {
                            PixelatedImage: "cape" === DY
                          }),
                          style: (0, sY.n)(DY, YY).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,sY.n)(DY,YY).previewTex}.png)`
                          } : {
                            backgroundColor: vY.v[YY]
                          }
                        }), AY && (0, CY.jsx)(HY.e, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, YY)
                    }))]
                  }, null !== AY && void 0 !== AY ? AY : "ungrouped")
                }))
              }, YY)
            }))]
          }), (0, CY.jsx)(TY.CharacterPreview, {
            ref: nY,
            forcedCosmetics: wY,
            YO: pY.id,
            emotePlaySeq: pY.seq,
            onReady: () => {
              for (const YY of aY.u) tY(YY, GY.current[YY], !1)
            }
          })]
        })]
      })
    }))
  },
  40276: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      CharacterPreview: () => vY
    });
    var FY = DY(61),
      AY = DY(2486),
      IY = DY(1244),
      RY = DY(8236),
      OY = DY(36228),
      gY = DY(3235),
      aY = DY(1125);
    const vY = (0, FY.memo)((0, FY.forwardRef)((function(YY, rY) {
      let {
        onReady: DY,
        onDrawn: vY,
        owner: uY = "other",
        framing: sY = "player",
        forcedCosmetics: iY,
        YO: yY,
        emotePlaySeq: QY
      } = YY;
      const oY = (0, FY.useRef)(null),
        {
          width: WY,
          height: EY
        } = (0, AY.d)(oY),
        mY = (0, FY.useRef)(null),
        VY = (0, FY.useRef)({}),
        SY = (0, FY.useRef)({}),
        [lY, TY] = (0, FY.useState)(!1),
        eY = (0, FY.useRef)(DY);
      eY.current = DY;
      const NY = (0, FY.useRef)(vY);
      NY.current = vY;
      const BY = (0, FY.useRef)(null),
        cY = (0, FY.useRef)(!1),
        KY = (0, FY.useRef)(!1),
        HY = (0, FY.useCallback)((() => {
          const YY = mY.current;
          if (!YY || !NY.current || cY.current || !KY.current) return;
          const rY = {};
          BY.current = rY, queueMicrotask((() => {
            if (BY.current !== rY) return;
            const DY = Promise.all(IY.u.map((rY => YY.untilDrawn(rY)))).catch((YY => {
                console.error("Failed to draw the character preview", YY)
              })),
              FY = new Promise((YY => {
                setTimeout(YY, 1e4)
              }));
            Promise.race([DY, FY]).then((() => {
              var DY;
              mY.current !== YY || BY.current !== rY || cY.current || (cY.current = !0, null === (DY = NY.current) || void 0 === DY || DY.call(NY))
            }))
          }))
        }), []);
      return (0, FY.useImperativeHandle)(rY, (() => {
        const YY = (YY, rY) => {
          var DY;
          (VY.current[YY] = rY, null !== iY && void 0 !== iY && iY[YY]) || (null === (DY = mY.current) || void 0 === DY || DY.setCosmetic(YY, rY), HY())
        };
        return {
          updateCosmetic: YY,
          setAllCosmetics(rY) {
            for (const FY of IY.u) {
              var DY;
              YY(FY, null !== (DY = rY[FY]) && void 0 !== DY ? DY : (0, RY.b)(FY))
            }
          },
          isReady() {
            var YY, rY;
            return null !== (YY = null === (rY = mY.current) || void 0 === rY ? void 0 : rY.isReady()) && void 0 !== YY && YY
          },
          resetCamera() {
            var YY;
            null === (YY = mY.current) || void 0 === YY || YY.resetCamera()
          },
          async ensureReadyForCapture(YY) {
            var rY;
            await (null === (rY = mY.current) || void 0 === rY ? void 0 : rY.untilDrawn(YY))
          },
          getDevTools() {
            var YY;
            return null !== (YY = mY.current) && void 0 !== YY && YY.isReady() ? mY.current.dev : null
          }
        }
      }), [iY, HY]), (0, FY.useEffect)((() => {
        const YY = gY.c.register(uY),
          rY = OY.b.openCharacter(oY.current, sY);
        mY.current = rY;
        let DY = !0;
        return rY.ready.then((() => {
          DY && (TY(!0), eY.current())
        })).catch((YY => {
          console.error("Failed to set up the character preview", YY)
        })), () => {
          DY = !1, YY(), rY.close(), mY.current = null
        }
      }), []), (0, FY.useEffect)((() => {
        WY <= 0 || EY <= 0 || mY.current.resize(WY, EY)
      }), [WY, EY]), (0, FY.useEffect)((() => {
        if (!lY) return;
        const YY = SY.current;
        for (const rY of IY.u) {
          const DY = null === iY || void 0 === iY ? void 0 : iY[rY],
            FY = YY[rY];
          DY && DY !== FY ? mY.current.setCosmetic(rY, DY) : !DY && FY && VY.current[rY] && mY.current.setCosmetic(rY, VY.current[rY])
        }
        SY.current = {
          ...iY
        }, KY.current = !0, HY()
      }), [iY, lY, HY]), (0, FY.useEffect)((() => {
        lY && mY.current.playEmote(null !== yY && void 0 !== yY ? yY : null)
      }), [yY, QY, lY]), (0, aY.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: oY
      })
    })))
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);