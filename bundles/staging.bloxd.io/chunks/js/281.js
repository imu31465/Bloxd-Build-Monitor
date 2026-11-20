export const id = 281;
export const ids = [281, 282];
export const modules = {
  40385: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      CharacterCustomisationUI: () => rb
    });
    var Ab = Ub(52),
      Mb = Ub(2708),
      Tb = Ub(1060),
      Eb = Ub(1824),
      Yb = Ub(984),
      Bb = Ub.n(Yb),
      eb = Ub(1189),
      vb = Ub(574),
      Lb = Ub(1134),
      Pb = Ub(2091),
      Xb = Ub(1485),
      jb = Ub(8383),
      Rb = Ub(2100),
      kb = Ub(2805),
      yb = Ub(1858),
      Zb = Ub(1352),
      Db = Ub(2132),
      zb = Ub(19),
      xb = Ub(1413),
      ib = Ub(325),
      fb = Ub(40391),
      mb = Ub(1476),
      pb = Ub(2190),
      Nb = Ub(2706),
      Wb = Ub(2039),
      Hb = Ub(2397),
      Ib = Ub(990);
    Ub(8945), Ub(2814);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var db = Ub(2147),
      Fb = Ub(1268),
      hb = Ub(1023);

    function Gb(bb, ab, Ub) {
      return (0, Pb.k)(bb, ab).purchasable && !(0, pb.p)(bb, ab, Ub)
    }

    function Qb(bb, ab) {
      return Object.entries(bb).some((bb => {
        let [Ub, Ab] = bb;
        return Gb(Ub, Ab, ab)
      }))
    }

    function qb(bb) {
      var ab;
      let {
        pack: Ub,
        ownedPacks: Ab,
        showStoreLink: Mb = !1,
        children: Tb
      } = bb;
      const {
        t: Eb
      } = (0, Lb.A)(), Yb = mb.d[Ub], eb = Yb.purchasable && !Ab.includes(Ub) && mb.s.includes(Ub), vb = Nb.f[Ub];
      return (0, hb.jsxs)("div", {
        className: Bb()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: eb
        }),
        children: [vb && (0, hb.jsx)(vb, {}), (0, hb.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, hb.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (ab = Yb.displayName) && void 0 !== ab ? ab : Ub
          }), (eb || Mb) && (0, hb.jsxs)(Zb.A, {
            onClick: () => {
              eb ? (0, Nb.d)(Ub) : (0, Db.m)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, hb.jsx)(Ib.e, {
              name: "store"
            }), " ", Eb("general:viewInShop")]
          })]
        }), eb && "bee" === Ub && (0, hb.jsx)(Nb.b, {}), Tb]
      })
    }

    function ub(bb) {
      let {
        equippedEmoteIds: ab,
        ownedPacks: Ub,
        canBuy: Ab,
        onUpdateLoadout: Mb,
        onEmoteSelected: Tb,
        onEquipPreviewSkin: Eb
      } = bb;
      const {
        t: Yb
      } = (0, Lb.A)(), vb = new Set(ab), Xb = new Map, jb = Object.keys(Pb.f.emote).sort(((bb, ab) => {
        var Ub, Ab, Mb, Tb;
        return (null !== (Ub = null === (Ab = (0, Pb.j)("emote", bb)) || void 0 === Ab ? void 0 : Ab.clientIdx) && void 0 !== Ub ? Ub : 0) - (null !== (Mb = null === (Tb = (0, Pb.j)("emote", ab)) || void 0 === Tb ? void 0 : Tb.clientIdx) && void 0 !== Mb ? Mb : 0)
      })).filter((bb => {
        const ab = (0, Pb.k)("emote", bb),
          Mb = (0, pb.p)("emote", bb, Ub);
        return !(ab.purchasable && !Mb && !Ab) && (ab.clientSelectable || Mb)
      }));
      for (const Bb of jb) {
        const bb = (0, Pb.j)("emote", Bb).cosmeticPack;
        Xb.has(bb) || Xb.set(bb, []), Xb.get(bb).push(Bb)
      }
      const kb = Array.from(Xb.keys());
      return (0, hb.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, hb.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, hb.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: Yb("emotes:equippedCount", {
              count: ab.length,
              max: eb.m
            })
          }), (0, hb.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: Yb("emotes:loadoutHint")
          })]
        }), kb.map((bb => {
          const Ab = Xb.get(bb);
          return (0, hb.jsx)(qb, {
            pack: bb,
            ownedPacks: Ub,
            children: (0, hb.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: Ab.map((bb => {
                var Ab;
                const Eb = ab.indexOf(bb),
                  Lb = -1 !== Eb,
                  Pb = ab.length >= eb.m,
                  Xb = Gb("emote", bb, Ub),
                  jb = Xb || !Lb && Pb,
                  kb = (0, Rb.j)(bb);
                return (0, hb.jsxs)("div", {
                  className: Bb()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Lb
                  }),
                  onClick: () => {
                    Tb(bb)
                  },
                  children: [(0, hb.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, hb.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${bb}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, hb.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (Ab = null === kb || void 0 === kb ? void 0 : kb.displayName) && void 0 !== Ab ? Ab : bb
                    })]
                  }), (0, hb.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Lb && (0, hb.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: Eb + 1
                    }), Xb && (0, hb.jsx)(Ib.e, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, hb.jsx)(Fb.g, {
                      tooltipInner: (0, hb.jsx)(hb.Fragment, {
                        children: Yb(Lb ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, hb.jsx)("div", {
                        className: Bb()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: jb,
                          EmoteCustomPartToggleEquipped: Lb
                        }),
                        onClick: Ub => {
                          Ub.stopPropagation(), jb || function(bb) {
                            vb.has(bb) ? Mb(ab.filter((ab => ab !== bb))) : ab.length >= eb.m || Mb([...ab, bb])
                          }(bb)
                        },
                        children: (0, hb.jsx)(Ib.e, {
                          name: Lb ? "minus" : "plus",
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
    const rb = (0, Ab.memo)((function(bb) {
      let {
        selectedTab: ab
      } = bb;
      const Ub = "characters" === ab ? "skin" : ab,
        {
          t: Yb
        } = (0, Lb.A)(),
        {
          userContext: Rb,
          isUserContextUpdating: Nb
        } = (0, Tb.c)(),
        Fb = (0, Mb.d)(),
        {
          gameState: rb,
          initSdkSelectorFinished: Kb
        } = (0, zb.n)(["gameState", "initSdkSelectorFinished"]),
        [ob, lb] = (0, Ab.useState)({}),
        [tb, wb] = (0, Ab.useState)({}),
        {
          previewEmote: sb,
          triggerEmote: gb
        } = (0, kb.c)(),
        Cb = (0, Ab.useRef)(eb.s.reduce(((bb, ab) => (bb[ab] = (0, jb.e)(ab), bb)), {})),
        Vb = (0, Ab.useRef)(!1),
        Ob = (0, Ab.useRef)(null),
        cb = (0, Ab.useRef)(null),
        Jb = (0, Ab.useRef)(null);

      function nb() {
        null !== cb.current && (clearTimeout(cb.current), cb.current = null);
        const bb = Jb.current;
        if (null === bb) return;
        Jb.current = null;
        const ab = {
          CU: "emote",
          VU: bb
        };
        null !== Eb.gameBridge.latest("connectedGame").websocketUrl ? Eb.gameBridge.send("updateMyCosmetic", ab) : xb.b.updateCosmetics(Rb, [ab]).catch((bb => {
          console.error("Failed to update emote loadout", bb)
        }))
      }

      function Sb(bb, ab, Ub) {
        var Ab, Mb, Tb;
        if (Cb.current = {
            ...Cb.current,
            [bb]: ab
          }, Fb(), Ub) {
          const Ub = {
            CU: bb,
            VU: ab
          };
          null !== Eb.gameBridge.latest("connectedGame").websocketUrl ? Eb.gameBridge.send("updateMyCosmetic", Ub) : xb.b.updateCosmetics(Rb, [Ub]).catch((bb => {
            console.error("Failed to update cosmetic", bb)
          })), Rb.setPlayerCosmetics(bb, ab)
        }
        const Yb = (0, Pb.j)(bb, ab);
        if (null !== Yb && void 0 !== Yb && Yb.colourGroup && null !== (Ab = mb.d[Yb.cosmeticPack].colourGroups) && void 0 !== Ab && null !== (Mb = Ab[Yb.colourGroup]) && void 0 !== Mb && Mb.showSwatchSelector) {
          const Ub = (0, Pb.i)(ab);
          Ub && wb((ab => ({
            ...ab,
            [`${Yb.cosmeticPack}_${bb}_${Yb.colourGroup}`]: parseInt(Ub[1])
          })))
        }
        null !== (Tb = Ob.current) && void 0 !== Tb && Tb.isReady() && Ob.current.updateCosmetic(bb, ab)
      }

      function ba(bb) {
        return Object.entries(bb).every((bb => {
          let [ab, Ub] = bb;
          return ob[ab] === Ub
        }))
      }(0, yb.c)("cosmeticsUpdated", (bb => {
        let ab = !1;
        for (const {
            local: Ub,
            CU: Ab,
            VU: Mb
          }
          of bb) {
          if (!Ub) return;
          ab = !0, Vb.current || Sb(Ab, Mb, !1), Fb()
        }
        ab && (Vb.current = !0)
      })), (0, Ab.useEffect)((() => {
        if (!Nb) {
          for (const [bb, ab] of Object.entries(Rb.getPlayerCosmetics())) Sb(bb, ab, !1);
          Fb()
        }
      }), [Nb]), (0, Ab.useEffect)((() => () => {
        nb()
      }), []);
      const aa = Rb.getOwnedCosmeticPacks(),
        Ua = (0, db.purchasesAllowed)(),
        Aa = Object.keys(Pb.f[Ub]).filter((bb => {
          const ab = (0, Pb.k)(Ub, bb),
            Ab = (0, pb.p)(Ub, bb, aa);
          return !(ab.purchasable && !Ab && !Ua) && (ab.clientSelectable || Ab)
        })).sort(((bb, ab) => {
          var Ab, Mb, Tb, Eb;
          return (null !== (Ab = null === (Mb = (0, Pb.j)(Ub, bb)) || void 0 === Mb ? void 0 : Mb.clientIdx) && void 0 !== Ab ? Ab : 0) - (null !== (Tb = null === (Eb = (0, Pb.j)(Ub, ab)) || void 0 === Eb ? void 0 : Eb.clientIdx) && void 0 !== Tb ? Tb : 0)
        })),
        Ma = new Map;
      for (const Ab of Aa) {
        var Ta;
        const bb = null === (Ta = (0, Pb.j)(Ub, Ab)) || void 0 === Ta ? void 0 : Ta.cosmeticPack;
        Ma.has(bb) || Ma.set(bb, []), Ma.get(bb).push(Ab)
      }
      const Ea = function(bb, ab) {
          const Ub = new Set,
            Ab = new Set;
          for (const [Mb, Tb] of Object.entries(Pb.f[bb])) {
            if (void 0 === Tb.colourGroup) continue;
            const Eb = `${Tb.cosmeticPack}_${Tb.colourGroup}`;
            (Gb(bb, Mb, ab) ? Ab : Ub).add(Eb)
          }
          return new Set([...Ub].filter((bb => Ab.has(bb))))
        }(Ub, aa),
        Ya = new Map;
      for (const [Ab, Mb] of Ma) {
        const bb = [],
          ab = new Map;
        for (const Ab of Mb) {
          var Ba, ea;
          const Mb = null !== (Ba = null === (ea = (0, Pb.j)(Ub, Ab)) || void 0 === ea ? void 0 : ea.colourGroup) && void 0 !== Ba ? Ba : null;
          ab.has(Mb) || (ab.set(Mb, []), bb.push(Mb)), ab.get(Mb).push(Ab)
        }
        const Tb = bb.map((bb => {
          var Mb;
          const Tb = ab.get(bb),
            Eb = bb ? null === (Mb = mb.d[Ab].colourGroups) || void 0 === Mb ? void 0 : Mb[bb] : void 0,
            Yb = !0 === (null === Eb || void 0 === Eb ? void 0 : Eb.showSwatchSelector) && !Ea.has(`${Ab}_${bb}`);
          if (Yb && Eb) {
            var Bb;
            const ab = null !== (Bb = tb[`${Ab}_${Ub}_${bb}`]) && void 0 !== Bb ? Bb : (0, mb.j)(Eb.colours);
            return {
              groupName: bb,
              showSwatch: Yb,
              cosmetics: Tb.filter((bb => {
                const Ub = (0, Pb.i)(bb);
                return !Ub || ab.toString() === Ub[1].toString()
              }))
            }
          }
          return {
            groupName: bb,
            cosmetics: Tb,
            showSwatch: Yb
          }
        }));
        Ya.set(Ab, Tb)
      }
      const va = Array.from(Ma.keys()),
        La = new Map;
      for (const [Ab, Mb] of Object.entries(Xb.d)) {
        const bb = mb.d[Mb.cosmeticPack],
          ab = !Qb(Mb.cosmetics, aa),
          Ub = mb.l.some((bb => (0, mb.f)(bb) === Ab));
        (bb.clientSelectable || Ub || ab) && ((!bb.purchasable || ab || Ua) && (La.has(Mb.cosmeticPack) || La.set(Mb.cosmeticPack, []), La.get(Mb.cosmeticPack).push([Ab, Mb])))
      }
      const Pa = Array.from(La.keys());
      return (0, hb.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === Ub || "nameColour" === Ub) && !Rb.playerHasRank("super") && (0, hb.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, hb.jsx)(Ib.e, {
            name: "bolt"
          }), Yb("homePage:unlockWithSuperRank"), Ua && (0, hb.jsx)(Zb.m, {
            onClick: () => {
              (0, Db.m)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: Yb("general:getItNow")
          })]
        }), (0, hb.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === ab && (0, hb.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Pa.map((bb => {
              const ab = La.get(bb);
              return (0, hb.jsx)(qb, {
                pack: bb,
                ownedPacks: aa,
                showStoreLink: !mb.o.includes(bb) && ab.some((bb => {
                  let [, {
                    cosmetics: ab
                  }] = bb;
                  return Qb(ab, aa)
                })),
                children: (0, hb.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: ab.map((bb => {
                    let [ab, {
                      cosmetics: Ub
                    }] = bb;
                    const Ab = Qb(Ub, aa),
                      Mb = ba(Ub),
                      Tb = !Mb && Object.entries(Ub).every((bb => {
                        let [ab, Ub] = bb;
                        return Cb.current[ab] === Ub
                      }));
                    return (0, hb.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: Bb()("CharacterPresetCard", {
                        CharacterPresetCardActive: Tb,
                        CharacterPresetCardTryingOn: Mb
                      }),
                      onClick: () => {
                        if (Ab) ! function(bb) {
                          ba(bb) ? lb({}) : lb({
                            ...bb
                          })
                        }(Ub);
                        else {
                          Object.keys(ob).length > 0 && lb({});
                          const bb = Object.entries(Ub);
                          for (const [ab, Ub] of bb) Sb(ab, Ub, !1), Rb.setPlayerCosmetics(ab, Ub);
                          if (null !== Eb.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [ab, Ub] of bb) Eb.gameBridge.send("updateMyCosmetic", {
                              CU: ab,
                              VU: Ub
                            });
                          else xb.b.updateCosmetics(Rb, bb.map((bb => {
                            let [ab, Ub] = bb;
                            return {
                              CU: ab,
                              VU: Ub
                            }
                          }))).catch((bb => {
                            console.error("Failed to update cosmetics", bb)
                          }))
                        }
                      },
                      children: [(0, hb.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${ab}_preview.png)`
                        }
                      }), Ab && (0, hb.jsx)(Ib.e, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, ab)
                  }))
                })
              }, bb)
            }))]
          }), "emote" === ab && (0, hb.jsx)(ub, {
            equippedEmoteIds: (0, jb.f)(Cb.current.emote),
            ownedPacks: aa,
            canBuy: Ua,
            onUpdateLoadout: bb => {
              const ab = (0, jb.j)(bb);
              var Ub;
              Cb.current = {
                ...Cb.current,
                emote: ab
              }, Rb.setPlayerCosmetics("emote", ab), Fb(), Ub = ab, Jb.current = Ub, null !== cb.current && clearTimeout(cb.current), cb.current = setTimeout(nb, 350)
            },
            onEmoteSelected: gb,
            onEquipPreviewSkin: () => {
              ! function(bb, ab) {
                for (const Ub of eb.s) "cape" !== Ub && "nameColour" !== Ub && "emote" !== Ub && bb(Ub, "skin" === Ub ? "skin_preview" : `${Ub}_none`, !1);
                ab()
              }(Sb, Fb)
            }
          }), "characters" !== ab && "emote" !== ab && (0, hb.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, va.map((bb => {
              const ab = Ya.get(bb);
              return (0, hb.jsx)(qb, {
                pack: bb,
                ownedPacks: aa,
                children: ab.map((ab => {
                  var Ab;
                  let {
                    groupName: Mb,
                    cosmetics: Tb,
                    showSwatch: Eb
                  } = ab;
                  const Yb = Mb ? null === (Ab = mb.d[bb].colourGroups) || void 0 === Ab ? void 0 : Ab[Mb] : void 0,
                    eb = `${bb}_${Ub}_${Mb}`;
                  return (0, hb.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [Eb && Yb && (0, hb.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...Yb.colours.map(((bb, ab) => ({
                        color: bb,
                        index: ab
                      })))].sort(((bb, ab) => bb.color.order - ab.color.order)).map((ab => {
                        var Ab;
                        let {
                          color: Tb,
                          index: Eb
                        } = ab;
                        return (0, hb.jsx)("div", {
                          className: Bb()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (Ab = tb[eb]) && void 0 !== Ab ? Ab : (0, mb.j)(Yb.colours)) === Eb
                          }),
                          style: {
                            backgroundColor: `rgb(${Tb.rbg.join(",")})`
                          },
                          onClick: () => {
                            var ab;
                            wb((bb => ({
                              ...bb,
                              [eb]: Eb
                            })));
                            const Ab = ob[Ub],
                              Tb = Ab ? (0, Pb.j)(Ub, Ab) : null,
                              Yb = (null === Tb || void 0 === Tb ? void 0 : Tb.cosmeticPack) === bb,
                              Bb = Yb ? Ab : Cb.current[Ub],
                              vb = Yb ? Tb : (0, Pb.j)(Ub, Bb);
                            if ((null === vb || void 0 === vb ? void 0 : vb.cosmeticPack) !== bb) return;
                            if ((null !== (ab = null === vb || void 0 === vb ? void 0 : vb.colourGroup) && void 0 !== ab ? ab : null) !== Mb) return;
                            const Lb = (0, Pb.i)(Bb);
                            if (Lb) {
                              const bb = `${Ub}_${Lb[0]}_${Eb}`;
                              Yb ? lb((ab => ({
                                ...ab,
                                [Ub]: bb
                              }))) : Sb(Ub, bb, !0)
                            }
                          }
                        }, Tb.rbg.join())
                      }))
                    }), Tb.map((bb => {
                      const ab = bb === Cb.current[Ub],
                        Ab = ob[Ub] === bb,
                        Mb = Gb(Ub, bb, aa);
                      let Tb = !0;
                      return Mb || ab || ("cape" !== Ub || (0, ib.Bd)(Rb.getPlayerRanks(), bb)) && ("nameColour" !== Ub || Rb.playerHasRank("super")) || (Tb = !1), (0, hb.jsxs)("div", {
                        className: Bb()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: ab && !Ab,
                          TryingOnCharCustomPartWrapper: Ab,
                          DisabledCharCustomPartWrapper: !Tb,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === Ub
                        }),
                        onClick: () => {
                          if (Tb)
                            if (Mb) lb((ab => {
                              if (ab[Ub] === bb) {
                                const bb = {
                                  ...ab
                                };
                                return delete bb[Ub], bb
                              }
                              return {
                                ...ab,
                                [Ub]: bb
                              }
                            }));
                            else {
                              var ab;
                              if (ob[Ub] && lb((bb => {
                                  const ab = {
                                    ...bb
                                  };
                                  return delete ab[Ub], ab
                                })), bb === Cb.current[Ub]) return;
                              null !== (ab = Ob.current) && void 0 !== ab && ab.isReady() && Sb(Ub, bb, !0)
                            }
                        },
                        children: ["profileEffect" === Ub ? (0, hb.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, hb.jsx)(Hb.h, {
                            playerSocialPreview: (0, Wb.e)(bb, {
                              name: Rb.getPlayerName(),
                              cosmetics: Rb.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, hb.jsx)("div", {
                          className: Bb()("CharCustomPart", {
                            PixelatedImage: "cape" === Ub
                          }),
                          style: (0, Pb.j)(Ub, bb).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,Pb.j)(Ub,bb).previewTex}.png)`
                          } : {
                            backgroundColor: vb.t[bb]
                          }
                        }), Mb && (0, hb.jsx)(Ib.e, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, bb)
                    }))]
                  }, null !== Mb && void 0 !== Mb ? Mb : "ungrouped")
                }))
              }, bb)
            }))]
          }), (0, hb.jsx)(fb.CharacterPreview, {
            ref: Ob,
            forcedCosmetics: ob,
            UY: sb.id,
            emotePlaySeq: sb.seq,
            onReady: () => {
              for (const bb of eb.s) Sb(bb, Cb.current[bb], !1)
            }
          })]
        })]
      })
    }))
  },
  40391: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      CharacterPreview: () => Lb
    });
    var Ab = Ub(52),
      Mb = Ub(2531),
      Tb = Ub(1189),
      Eb = Ub(8383),
      Yb = Ub(8945),
      Bb = Ub(3306),
      eb = Ub(1023);
    const vb = .6 * Math.PI,
      Lb = (0, Ab.memo)((0, Ab.forwardRef)((function(bb, ab) {
        let {
          onReady: Ub,
          onDrawn: Lb,
          owner: Pb = "other",
          framing: Xb = "player",
          forcedCosmetics: jb,
          UY: Rb,
          emotePlaySeq: kb,
          turntableFromYaw: yb = null
        } = bb;
        const Zb = (0, Ab.useRef)(null),
          {
            width: Db,
            height: zb
          } = (0, Mb.e)(Zb),
          xb = (0, Ab.useRef)(null),
          ib = (0, Ab.useRef)({}),
          fb = (0, Ab.useRef)({}),
          [mb, pb] = (0, Ab.useState)(!1),
          Nb = (0, Ab.useRef)(Ub);
        Nb.current = Ub;
        const Wb = (0, Ab.useRef)(Lb);
        Wb.current = Lb;
        const Hb = (0, Ab.useRef)(null),
          Ib = (0, Ab.useRef)(!1),
          db = (0, Ab.useRef)(!1),
          Fb = (0, Ab.useCallback)((() => {
            const bb = xb.current;
            if (!bb || !Wb.current || Ib.current || !db.current) return;
            const ab = {};
            Hb.current = ab, queueMicrotask((() => {
              if (Hb.current !== ab) return;
              const Ub = Promise.all(Tb.s.map((ab => bb.untilDrawn(ab)))).catch((bb => {
                  console.error("Failed to draw the character preview", bb)
                })),
                Ab = new Promise((bb => {
                  setTimeout(bb, 1e4)
                }));
              Promise.race([Ub, Ab]).then((() => {
                var Ub;
                xb.current !== bb || Hb.current !== ab || Ib.current || (Ib.current = !0, null === (Ub = Wb.current) || void 0 === Ub || Ub.call(Wb))
              }))
            }))
          }), []);
        return (0, Ab.useImperativeHandle)(ab, (() => {
          const bb = (bb, ab) => {
            var Ub;
            (ib.current[bb] = ab, null !== jb && void 0 !== jb && jb[bb]) || (null === (Ub = xb.current) || void 0 === Ub || Ub.setCosmetic(bb, ab), Fb())
          };
          return {
            updateCosmetic: bb,
            setAllCosmetics(ab) {
              for (const Ab of Tb.s) {
                var Ub;
                bb(Ab, null !== (Ub = ab[Ab]) && void 0 !== Ub ? Ub : (0, Eb.e)(Ab))
              }
            },
            isReady() {
              var bb, ab;
              return null !== (bb = null === (ab = xb.current) || void 0 === ab ? void 0 : ab.isReady()) && void 0 !== bb && bb
            },
            resetCamera() {
              var bb;
              null === (bb = xb.current) || void 0 === bb || bb.resetCamera()
            },
            setOrbit(bb) {
              var ab;
              null === (ab = xb.current) || void 0 === ab || ab.setOrbit(bb)
            },
            async ensureReadyForCapture(bb) {
              var ab;
              await (null === (ab = xb.current) || void 0 === ab ? void 0 : ab.untilDrawn(bb))
            },
            getDevTools() {
              var bb;
              return null !== (bb = xb.current) && void 0 !== bb && bb.isReady() ? xb.current.dev : null
            }
          }
        }), [jb, Fb]), (0, Ab.useEffect)((() => {
          const bb = Bb.b.register(Pb),
            ab = Yb.l.openCharacter(Zb.current, Xb);
          xb.current = ab;
          let Ub = !0;
          return ab.ready.then((() => {
            Ub && (pb(!0), Nb.current())
          })).catch((bb => {
            console.error("Failed to set up the character preview", bb)
          })), () => {
            Ub = !1, bb(), ab.resetCamera(), ab.close(), xb.current = null
          }
        }), []), (0, Ab.useEffect)((() => {
          Db <= 0 || zb <= 0 || xb.current.resize(Db, zb)
        }), [Db, zb]), (0, Ab.useEffect)((() => {
          if (!mb) return;
          const bb = fb.current;
          for (const ab of Tb.s) {
            const Ub = null === jb || void 0 === jb ? void 0 : jb[ab],
              Ab = bb[ab];
            Ub && Ub !== Ab ? xb.current.setCosmetic(ab, Ub) : !Ub && Ab && ib.current[ab] && xb.current.setCosmetic(ab, ib.current[ab])
          }
          fb.current = {
            ...jb
          }, db.current = !0, Fb()
        }), [jb, mb, Fb]), (0, Ab.useEffect)((() => {
          mb && xb.current.playEmote(null !== Rb && void 0 !== Rb ? Rb : null)
        }), [Rb, kb, mb]), (0, Ab.useEffect)((() => {
          if (!mb || null === yb) return;
          const bb = xb.current,
            {
              pitch: ab,
              radius: Ub
            } = Yb.e[Xb];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return bb.setOrbit({
            yaw: yb + vb,
            pitch: ab,
            radius: Ub
          }), () => {
            bb.resetCamera()
          };
          const Ab = performance.now();
          let Mb = 0;
          const Tb = Eb => {
            bb.setOrbit({
              yaw: yb + (Eb - Ab) / 6e3 * 2 * Math.PI,
              pitch: ab,
              radius: Ub
            }), Mb = requestAnimationFrame(Tb)
          };
          return Mb = requestAnimationFrame(Tb), () => {
            cancelAnimationFrame(Mb), bb.resetCamera()
          }
        }), [mb, yb]), (0, eb.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Zb
        })
      })))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);