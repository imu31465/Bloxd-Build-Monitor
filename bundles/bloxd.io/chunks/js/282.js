export const id = 282;
export const ids = [282, 283];
export const modules = {
  40734: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      CharacterCustomisationUI: () => Mb
    });
    var Bb = hb(49),
      Ob = hb(2789),
      Gb = hb(1029),
      Ub = hb(1811),
      Lb = hb(958),
      Yb = hb.n(Lb),
      Sb = hb(1133),
      ab = hb(568),
      Hb = hb(1095),
      wb = hb(2100),
      Zb = hb(1463),
      Xb = hb(8549),
      pb = hb(2104),
      ob = hb(2883),
      Ab = hb(1857),
      lb = hb(1357),
      Kb = hb(2142),
      Wb = hb(13),
      Cb = hb(1398),
      db = hb(314),
      rb = hb(40739),
      jb = hb(1455),
      nb = hb(2197),
      Db = hb(2780),
      xb = hb(2022),
      zb = hb(2418),
      gb = hb(966);
    hb(9122), hb(2890);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var ib = hb(2155),
      vb = hb(1260),
      tb = hb(1007);

    function Jb(bb, ub, hb) {
      return (0, wb.j)(bb, ub).purchasable && !(0, nb.p)(bb, ub, hb)
    }

    function eb(bb, ub) {
      return Object.entries(bb).some((bb => {
        let [hb, Bb] = bb;
        return Jb(hb, Bb, ub)
      }))
    }

    function Nb(bb) {
      var ub;
      let {
        pack: hb,
        ownedPacks: Bb,
        showStoreLink: Ob = !1,
        children: Gb
      } = bb;
      const {
        t: Ub
      } = (0, Hb.K)(), Lb = jb.d[hb], Sb = Lb.purchasable && !Bb.includes(hb) && jb.v.includes(hb), ab = Db.n[hb];
      return (0, tb.jsxs)("div", {
        className: Yb()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: Sb
        }),
        children: [ab && (0, tb.jsx)(ab, {}), (0, tb.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, tb.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (ub = Lb.displayName) && void 0 !== ub ? ub : hb
          }), (Sb || Ob) && (0, tb.jsxs)(lb.A, {
            onClick: () => {
              Sb ? (0, Db.l)(hb) : (0, Kb.o)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, tb.jsx)(gb.e, {
              name: "store"
            }), " ", Ub("general:viewInShop")]
          })]
        }), Sb && "bee" === hb && (0, tb.jsx)(Db.e, {}), Gb]
      })
    }

    function sb(bb) {
      let {
        equippedEmoteIds: ub,
        ownedPacks: hb,
        canBuy: Bb,
        onUpdateLoadout: Ob,
        onEmoteSelected: Gb,
        onEquipPreviewSkin: Ub
      } = bb;
      const {
        t: Lb
      } = (0, Hb.K)(), ab = new Set(ub), Zb = new Map, Xb = Object.keys(wb.c.emote).sort(((bb, ub) => {
        var hb, Bb, Ob, Gb;
        return (null !== (hb = null === (Bb = (0, wb.h)("emote", bb)) || void 0 === Bb ? void 0 : Bb.clientIdx) && void 0 !== hb ? hb : 0) - (null !== (Ob = null === (Gb = (0, wb.h)("emote", ub)) || void 0 === Gb ? void 0 : Gb.clientIdx) && void 0 !== Ob ? Ob : 0)
      })).filter((bb => {
        const ub = (0, wb.j)("emote", bb),
          Ob = (0, nb.p)("emote", bb, hb);
        return !(ub.purchasable && !Ob && !Bb) && (ub.clientSelectable || Ob)
      }));
      for (const Yb of Xb) {
        const bb = (0, wb.h)("emote", Yb).cosmeticPack;
        Zb.has(bb) || Zb.set(bb, []), Zb.get(bb).push(Yb)
      }
      const ob = Array.from(Zb.keys());
      return (0, tb.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, tb.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, tb.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: Lb("emotes:equippedCount", {
              count: ub.length,
              max: Sb.q
            })
          }), (0, tb.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: Lb("emotes:loadoutHint")
          })]
        }), ob.map((bb => {
          const Bb = Zb.get(bb);
          return (0, tb.jsx)(Nb, {
            pack: bb,
            ownedPacks: hb,
            children: (0, tb.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: Bb.map((bb => {
                var Bb;
                const Ub = ub.indexOf(bb),
                  Hb = -1 !== Ub,
                  wb = ub.length >= Sb.q,
                  Zb = Jb("emote", bb, hb),
                  Xb = Zb || !Hb && wb,
                  ob = (0, pb.e)(bb);
                return (0, tb.jsxs)("div", {
                  className: Yb()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Hb
                  }),
                  onClick: () => {
                    Gb(bb)
                  },
                  children: [(0, tb.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, tb.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${bb}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, tb.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (Bb = null === ob || void 0 === ob ? void 0 : ob.displayName) && void 0 !== Bb ? Bb : bb
                    })]
                  }), (0, tb.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Hb && (0, tb.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: Ub + 1
                    }), Zb && (0, tb.jsx)(gb.e, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, tb.jsx)(vb.d, {
                      tooltipInner: (0, tb.jsx)(tb.Fragment, {
                        children: Lb(Hb ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, tb.jsx)("div", {
                        className: Yb()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: Xb,
                          EmoteCustomPartToggleEquipped: Hb
                        }),
                        onClick: hb => {
                          hb.stopPropagation(), Xb || function(bb) {
                            ab.has(bb) ? Ob(ub.filter((ub => ub !== bb))) : ub.length >= Sb.q || Ob([...ub, bb])
                          }(bb)
                        },
                        children: (0, tb.jsx)(gb.e, {
                          name: Hb ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, bb)
              }))
            })
          }, bb)
        }))]
      })
    }
    const Mb = (0, Bb.memo)((function(bb) {
      let {
        selectedTab: ub
      } = bb;
      const hb = "characters" === ub ? "skin" : ub,
        {
          t: Lb
        } = (0, Hb.K)(),
        {
          userContext: pb,
          isUserContextUpdating: Db
        } = (0, Gb.d)(),
        vb = (0, Ob.d)(),
        {
          gameState: Mb,
          initSdkSelectorFinished: mb
        } = (0, Wb.j)(["gameState", "initSdkSelectorFinished"]),
        [Ib, Pb] = (0, Bb.useState)({}),
        [qb, Eb] = (0, Bb.useState)({}),
        {
          previewEmote: yb,
          triggerEmote: Vb
        } = (0, ob.c)(),
        Fb = (0, Bb.useRef)(Sb.y.reduce(((bb, ub) => (bb[ub] = (0, Xb.c)(ub), bb)), {})),
        fb = (0, Bb.useRef)(!1),
        kb = (0, Bb.useRef)(null),
        Tb = (0, Bb.useRef)(null),
        cb = (0, Bb.useRef)(null);

      function Qb() {
        null !== Tb.current && (clearTimeout(Tb.current), Tb.current = null);
        const bb = cb.current;
        if (null === bb) return;
        cb.current = null;
        const ub = {
          tB: "emote",
          JB: bb
        };
        null !== Ub.gameBridge.latest("connectedGame").websocketUrl ? Ub.gameBridge.send("updateMyCosmetic", ub) : Cb.e.updateCosmetics(pb, [ub]).catch((bb => {
          console.error("Failed to update emote loadout", bb)
        }))
      }

      function Rb(bb, ub, hb) {
        var Bb, Ob, Gb;
        if (Fb.current = {
            ...Fb.current,
            [bb]: ub
          }, vb(), hb) {
          const hb = {
            tB: bb,
            JB: ub
          };
          null !== Ub.gameBridge.latest("connectedGame").websocketUrl ? Ub.gameBridge.send("updateMyCosmetic", hb) : Cb.e.updateCosmetics(pb, [hb]).catch((bb => {
            console.error("Failed to update cosmetic", bb)
          })), pb.setPlayerCosmetics(bb, ub)
        }
        const Lb = (0, wb.h)(bb, ub);
        if (null !== Lb && void 0 !== Lb && Lb.colourGroup && null !== (Bb = jb.d[Lb.cosmeticPack].colourGroups) && void 0 !== Bb && null !== (Ob = Bb[Lb.colourGroup]) && void 0 !== Ob && Ob.showSwatchSelector) {
          const hb = (0, wb.e)(ub);
          hb && Eb((ub => ({
            ...ub,
            [`${Lb.cosmeticPack}_${bb}_${Lb.colourGroup}`]: parseInt(hb[1])
          })))
        }
        null !== (Gb = kb.current) && void 0 !== Gb && Gb.isReady() && kb.current.updateCosmetic(bb, ub)
      }

      function bu(bb) {
        return Object.entries(bb).every((bb => {
          let [ub, hb] = bb;
          return Ib[ub] === hb
        }))
      }(0, Ab.d)("cosmeticsUpdated", (bb => {
        let ub = !1;
        for (const {
            local: hb,
            tB: Bb,
            JB: Ob
          }
          of bb) {
          if (!hb) return;
          ub = !0, fb.current || Rb(Bb, Ob, !1), vb()
        }
        ub && (fb.current = !0)
      })), (0, Bb.useEffect)((() => {
        if (!Db) {
          for (const [bb, ub] of Object.entries(pb.getPlayerCosmetics())) Rb(bb, ub, !1);
          vb()
        }
      }), [Db]), (0, Bb.useEffect)((() => () => {
        Qb()
      }), []);
      const uu = pb.getOwnedCosmeticPacks(),
        hu = (0, ib.purchasesAllowed)(),
        Bu = Object.keys(wb.c[hb]).filter((bb => {
          const ub = (0, wb.j)(hb, bb),
            Bb = (0, nb.p)(hb, bb, uu);
          return !(ub.purchasable && !Bb && !hu) && (ub.clientSelectable || Bb)
        })).sort(((bb, ub) => {
          var Bb, Ob, Gb, Ub;
          return (null !== (Bb = null === (Ob = (0, wb.h)(hb, bb)) || void 0 === Ob ? void 0 : Ob.clientIdx) && void 0 !== Bb ? Bb : 0) - (null !== (Gb = null === (Ub = (0, wb.h)(hb, ub)) || void 0 === Ub ? void 0 : Ub.clientIdx) && void 0 !== Gb ? Gb : 0)
        })),
        Ou = new Map;
      for (const Bb of Bu) {
        var Gu;
        const bb = null === (Gu = (0, wb.h)(hb, Bb)) || void 0 === Gu ? void 0 : Gu.cosmeticPack;
        Ou.has(bb) || Ou.set(bb, []), Ou.get(bb).push(Bb)
      }
      const Uu = function(bb, ub) {
          const hb = new Set,
            Bb = new Set;
          for (const [Ob, Gb] of Object.entries(wb.c[bb])) {
            if (void 0 === Gb.colourGroup) continue;
            const Ub = `${Gb.cosmeticPack}_${Gb.colourGroup}`;
            (Jb(bb, Ob, ub) ? Bb : hb).add(Ub)
          }
          return new Set([...hb].filter((bb => Bb.has(bb))))
        }(hb, uu),
        Lu = new Map;
      for (const [Bb, Ob] of Ou) {
        const bb = [],
          ub = new Map;
        for (const Bb of Ob) {
          var Yu, Su;
          const Ob = null !== (Yu = null === (Su = (0, wb.h)(hb, Bb)) || void 0 === Su ? void 0 : Su.colourGroup) && void 0 !== Yu ? Yu : null;
          ub.has(Ob) || (ub.set(Ob, []), bb.push(Ob)), ub.get(Ob).push(Bb)
        }
        const Gb = bb.map((bb => {
          var Ob;
          const Gb = ub.get(bb),
            Ub = bb ? null === (Ob = jb.d[Bb].colourGroups) || void 0 === Ob ? void 0 : Ob[bb] : void 0,
            Lb = !0 === (null === Ub || void 0 === Ub ? void 0 : Ub.showSwatchSelector) && !Uu.has(`${Bb}_${bb}`);
          if (Lb && Ub) {
            var Yb;
            const ub = null !== (Yb = qb[`${Bb}_${hb}_${bb}`]) && void 0 !== Yb ? Yb : (0, jb.i)(Ub.colours);
            return {
              groupName: bb,
              showSwatch: Lb,
              cosmetics: Gb.filter((bb => {
                const hb = (0, wb.e)(bb);
                return !hb || ub.toString() === hb[1].toString()
              }))
            }
          }
          return {
            groupName: bb,
            cosmetics: Gb,
            showSwatch: Lb
          }
        }));
        Lu.set(Bb, Gb)
      }
      const au = Array.from(Ou.keys()),
        Hu = new Map;
      for (const [Bb, Ob] of Object.entries(Zb.e)) {
        const bb = jb.d[Ob.cosmeticPack],
          ub = !eb(Ob.cosmetics, uu),
          hb = jb.n.some((bb => (0, jb.g)(bb) === Bb));
        (bb.clientSelectable || hb || ub) && ((!bb.purchasable || ub || hu) && (Hu.has(Ob.cosmeticPack) || Hu.set(Ob.cosmeticPack, []), Hu.get(Ob.cosmeticPack).push([Bb, Ob])))
      }
      const wu = Array.from(Hu.keys());
      return (0, tb.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === hb || "nameColour" === hb) && !pb.playerHasRank("super") && (0, tb.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, tb.jsx)(gb.e, {
            name: "bolt"
          }), Lb("homePage:unlockWithSuperRank"), hu && (0, tb.jsx)(lb.m, {
            onClick: () => {
              (0, Kb.o)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: Lb("general:getItNow")
          })]
        }), (0, tb.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === ub && (0, tb.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, wu.map((bb => {
              const ub = Hu.get(bb);
              return (0, tb.jsx)(Nb, {
                pack: bb,
                ownedPacks: uu,
                showStoreLink: !jb.r.includes(bb) && ub.some((bb => {
                  let [, {
                    cosmetics: ub
                  }] = bb;
                  return eb(ub, uu)
                })),
                children: (0, tb.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: ub.map((bb => {
                    let [ub, {
                      cosmetics: hb
                    }] = bb;
                    const Bb = eb(hb, uu),
                      Ob = bu(hb),
                      Gb = !Ob && Object.entries(hb).every((bb => {
                        let [ub, hb] = bb;
                        return Fb.current[ub] === hb
                      }));
                    return (0, tb.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: Yb()("CharacterPresetCard", {
                        CharacterPresetCardActive: Gb,
                        CharacterPresetCardTryingOn: Ob
                      }),
                      onClick: () => {
                        if (Bb) ! function(bb) {
                          bu(bb) ? Pb({}) : Pb({
                            ...bb
                          })
                        }(hb);
                        else {
                          Object.keys(Ib).length > 0 && Pb({});
                          const bb = Object.entries(hb);
                          for (const [ub, hb] of bb) Rb(ub, hb, !1), pb.setPlayerCosmetics(ub, hb);
                          if (null !== Ub.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [ub, hb] of bb) Ub.gameBridge.send("updateMyCosmetic", {
                              tB: ub,
                              JB: hb
                            });
                          else Cb.e.updateCosmetics(pb, bb.map((bb => {
                            let [ub, hb] = bb;
                            return {
                              tB: ub,
                              JB: hb
                            }
                          }))).catch((bb => {
                            console.error("Failed to update cosmetics", bb)
                          }))
                        }
                      },
                      children: [(0, tb.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${ub}_preview.png)`
                        }
                      }), Bb && (0, tb.jsx)(gb.e, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, ub)
                  }))
                })
              }, bb)
            }))]
          }), "emote" === ub && (0, tb.jsx)(sb, {
            equippedEmoteIds: (0, Xb.d)(Fb.current.emote),
            ownedPacks: uu,
            canBuy: hu,
            onUpdateLoadout: bb => {
              const ub = (0, Xb.g)(bb);
              var hb;
              Fb.current = {
                ...Fb.current,
                emote: ub
              }, pb.setPlayerCosmetics("emote", ub), vb(), hb = ub, cb.current = hb, null !== Tb.current && clearTimeout(Tb.current), Tb.current = setTimeout(Qb, 350)
            },
            onEmoteSelected: Vb,
            onEquipPreviewSkin: () => {
              ! function(bb, ub) {
                for (const hb of Sb.y) "cape" !== hb && "nameColour" !== hb && "emote" !== hb && bb(hb, "skin" === hb ? "skin_preview" : `${hb}_none`, !1);
                ub()
              }(Rb, vb)
            }
          }), "characters" !== ub && "emote" !== ub && (0, tb.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, au.map((bb => {
              const ub = Lu.get(bb);
              return (0, tb.jsx)(Nb, {
                pack: bb,
                ownedPacks: uu,
                children: ub.map((ub => {
                  var Bb;
                  let {
                    groupName: Ob,
                    cosmetics: Gb,
                    showSwatch: Ub
                  } = ub;
                  const Lb = Ob ? null === (Bb = jb.d[bb].colourGroups) || void 0 === Bb ? void 0 : Bb[Ob] : void 0,
                    Sb = `${bb}_${hb}_${Ob}`;
                  return (0, tb.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [Ub && Lb && (0, tb.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...Lb.colours.map(((bb, ub) => ({
                        color: bb,
                        index: ub
                      })))].sort(((bb, ub) => bb.color.order - ub.color.order)).map((ub => {
                        var Bb;
                        let {
                          color: Gb,
                          index: Ub
                        } = ub;
                        return (0, tb.jsx)("div", {
                          className: Yb()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (Bb = qb[Sb]) && void 0 !== Bb ? Bb : (0, jb.i)(Lb.colours)) === Ub
                          }),
                          style: {
                            backgroundColor: `rgb(${Gb.rbg.join(",")})`
                          },
                          onClick: () => {
                            var ub;
                            Eb((bb => ({
                              ...bb,
                              [Sb]: Ub
                            })));
                            const Bb = Ib[hb],
                              Gb = Bb ? (0, wb.h)(hb, Bb) : null,
                              Lb = (null === Gb || void 0 === Gb ? void 0 : Gb.cosmeticPack) === bb,
                              Yb = Lb ? Bb : Fb.current[hb],
                              ab = Lb ? Gb : (0, wb.h)(hb, Yb);
                            if ((null === ab || void 0 === ab ? void 0 : ab.cosmeticPack) !== bb) return;
                            if ((null !== (ub = null === ab || void 0 === ab ? void 0 : ab.colourGroup) && void 0 !== ub ? ub : null) !== Ob) return;
                            const Hb = (0, wb.e)(Yb);
                            if (Hb) {
                              const bb = `${hb}_${Hb[0]}_${Ub}`;
                              Lb ? Pb((ub => ({
                                ...ub,
                                [hb]: bb
                              }))) : Rb(hb, bb, !0)
                            }
                          }
                        }, Gb.rbg.join())
                      }))
                    }), Gb.map((bb => {
                      const ub = bb === Fb.current[hb],
                        Bb = Ib[hb] === bb,
                        Ob = Jb(hb, bb, uu);
                      let Gb = !0;
                      return Ob || ub || ("cape" !== hb || (0, db.Fd)(pb.getPlayerRanks(), bb)) && ("nameColour" !== hb || pb.playerHasRank("super")) || (Gb = !1), (0, tb.jsxs)("div", {
                        className: Yb()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: ub && !Bb,
                          TryingOnCharCustomPartWrapper: Bb,
                          DisabledCharCustomPartWrapper: !Gb,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === hb
                        }),
                        onClick: () => {
                          if (Gb)
                            if (Ob) Pb((ub => {
                              if (ub[hb] === bb) {
                                const bb = {
                                  ...ub
                                };
                                return delete bb[hb], bb
                              }
                              return {
                                ...ub,
                                [hb]: bb
                              }
                            }));
                            else {
                              var ub;
                              if (Ib[hb] && Pb((bb => {
                                  const ub = {
                                    ...bb
                                  };
                                  return delete ub[hb], ub
                                })), bb === Fb.current[hb]) return;
                              null !== (ub = kb.current) && void 0 !== ub && ub.isReady() && Rb(hb, bb, !0)
                            }
                        },
                        children: ["profileEffect" === hb ? (0, tb.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, tb.jsx)(zb.h, {
                            playerSocialPreview: (0, xb.e)(bb, {
                              name: pb.getPlayerName(),
                              cosmetics: pb.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, tb.jsx)("div", {
                          className: Yb()("CharCustomPart", {
                            PixelatedImage: "cape" === hb
                          }),
                          style: (0, wb.h)(hb, bb).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,wb.h)(hb,bb).previewTex}.png)`
                          } : {
                            backgroundColor: ab.m[bb]
                          }
                        }), Ob && (0, tb.jsx)(gb.e, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, bb)
                    }))]
                  }, null !== Ob && void 0 !== Ob ? Ob : "ungrouped")
                }))
              }, bb)
            }))]
          }), (0, tb.jsx)(rb.CharacterPreview, {
            ref: kb,
            forcedCosmetics: Ib,
            FS: yb.id,
            emotePlaySeq: yb.seq,
            onReady: () => {
              for (const bb of Sb.y) Rb(bb, Fb.current[bb], !1)
            }
          })]
        })]
      })
    }))
  },
  40739: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      CharacterPreview: () => Hb
    });
    var Bb = hb(49),
      Ob = hb(2548),
      Gb = hb(1133),
      Ub = hb(8549),
      Lb = hb(9122),
      Yb = hb(3417),
      Sb = hb(1007);
    const ab = .6 * Math.PI,
      Hb = (0, Bb.memo)((0, Bb.forwardRef)((function(bb, ub) {
        let {
          onReady: hb,
          onDrawn: Hb,
          owner: wb = "other",
          framing: Zb = "player",
          forcedCosmetics: Xb,
          FS: pb,
          emotePlaySeq: ob,
          turntableFromYaw: Ab = null
        } = bb;
        const lb = (0, Bb.useRef)(null),
          {
            width: Kb,
            height: Wb
          } = (0, Ob.b)(lb),
          Cb = (0, Bb.useRef)(null),
          db = (0, Bb.useRef)({}),
          rb = (0, Bb.useRef)({}),
          [jb, nb] = (0, Bb.useState)(!1),
          Db = (0, Bb.useRef)(hb);
        Db.current = hb;
        const xb = (0, Bb.useRef)(Hb);
        xb.current = Hb;
        const zb = (0, Bb.useRef)(null),
          gb = (0, Bb.useRef)(!1),
          ib = (0, Bb.useRef)(!1),
          vb = (0, Bb.useCallback)((() => {
            const bb = Cb.current;
            if (!bb || !xb.current || gb.current || !ib.current) return;
            const ub = {};
            zb.current = ub, queueMicrotask((() => {
              if (zb.current !== ub) return;
              const hb = Promise.all(Gb.y.map((ub => bb.untilDrawn(ub)))).catch((bb => {
                  console.error("Failed to draw the character preview", bb)
                })),
                Bb = new Promise((bb => {
                  setTimeout(bb, 1e4)
                }));
              Promise.race([hb, Bb]).then((() => {
                var hb;
                Cb.current !== bb || zb.current !== ub || gb.current || (gb.current = !0, null === (hb = xb.current) || void 0 === hb || hb.call(xb))
              }))
            }))
          }), []);
        return (0, Bb.useImperativeHandle)(ub, (() => {
          const bb = (bb, ub) => {
            var hb;
            (db.current[bb] = ub, null !== Xb && void 0 !== Xb && Xb[bb]) || (null === (hb = Cb.current) || void 0 === hb || hb.setCosmetic(bb, ub), vb())
          };
          return {
            updateCosmetic: bb,
            setAllCosmetics(ub) {
              for (const Bb of Gb.y) {
                var hb;
                bb(Bb, null !== (hb = ub[Bb]) && void 0 !== hb ? hb : (0, Ub.c)(Bb))
              }
            },
            isReady() {
              var bb, ub;
              return null !== (bb = null === (ub = Cb.current) || void 0 === ub ? void 0 : ub.isReady()) && void 0 !== bb && bb
            },
            resetCamera() {
              var bb;
              null === (bb = Cb.current) || void 0 === bb || bb.resetCamera()
            },
            setOrbit(bb) {
              var ub;
              null === (ub = Cb.current) || void 0 === ub || ub.setOrbit(bb)
            },
            async ensureReadyForCapture(bb) {
              var ub;
              await (null === (ub = Cb.current) || void 0 === ub ? void 0 : ub.untilDrawn(bb))
            },
            getDevTools() {
              var bb;
              return null !== (bb = Cb.current) && void 0 !== bb && bb.isReady() ? Cb.current.dev : null
            }
          }
        }), [Xb, vb]), (0, Bb.useEffect)((() => {
          const bb = Yb.c.register(wb),
            ub = Lb.j.openCharacter(lb.current, Zb);
          Cb.current = ub;
          let hb = !0;
          return ub.ready.then((() => {
            hb && (nb(!0), Db.current())
          })).catch((bb => {
            console.error("Failed to set up the character preview", bb)
          })), () => {
            hb = !1, bb(), ub.resetCamera(), ub.close(), Cb.current = null
          }
        }), []), (0, Bb.useEffect)((() => {
          Kb <= 0 || Wb <= 0 || Cb.current.resize(Kb, Wb)
        }), [Kb, Wb]), (0, Bb.useEffect)((() => {
          if (!jb) return;
          const bb = rb.current;
          for (const ub of Gb.y) {
            const hb = null === Xb || void 0 === Xb ? void 0 : Xb[ub],
              Bb = bb[ub];
            hb && hb !== Bb ? Cb.current.setCosmetic(ub, hb) : !hb && Bb && db.current[ub] && Cb.current.setCosmetic(ub, db.current[ub])
          }
          rb.current = {
            ...Xb
          }, ib.current = !0, vb()
        }), [Xb, jb, vb]), (0, Bb.useEffect)((() => {
          jb && Cb.current.playEmote(null !== pb && void 0 !== pb ? pb : null)
        }), [pb, ob, jb]), (0, Bb.useEffect)((() => {
          if (!jb || null === Ab) return;
          const bb = Cb.current,
            {
              pitch: ub,
              radius: hb
            } = Lb.e[Zb];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return bb.setOrbit({
            yaw: Ab + ab,
            pitch: ub,
            radius: hb
          }), () => {
            bb.resetCamera()
          };
          const Bb = performance.now();
          let Ob = 0;
          const Gb = Ub => {
            bb.setOrbit({
              yaw: Ab + (Ub - Bb) / 6e3 * 2 * Math.PI,
              pitch: ub,
              radius: hb
            }), Ob = requestAnimationFrame(Gb)
          };
          return Ob = requestAnimationFrame(Gb), () => {
            cancelAnimationFrame(Ob), bb.resetCamera()
          }
        }), [jb, Ab]), (0, Sb.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: lb
        })
      })))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);