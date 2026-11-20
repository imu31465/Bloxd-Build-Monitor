export const id = 282;
export const ids = [282, 283];
export const modules = {
  41007: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      CharacterCustomisationUI: () => Gq
    });
    var Yq = gq(57),
      lq = gq(2907),
      Oq = gq(1101),
      mq = gq(1904),
      xq = gq(1018),
      Aq = gq.n(xq),
      cq = gq(1226),
      uq = gq(576),
      Bq = gq(1183),
      Wq = gq(2182),
      Nq = gq(1547),
      aq = gq(8794),
      Vq = gq(2189),
      dq = gq(2994),
      jq = gq(1942),
      Hq = gq(1422),
      oq = gq(2235),
      Pq = gq(24),
      Qq = gq(1477),
      yq = gq(307),
      tq = gq(41011),
      rq = gq(1540),
      vq = gq(2297),
      hq = gq(2904),
      nq = gq(2121),
      bq = gq(2517),
      iq = gq(1025);
    gq(9313), gq(3003);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var Zq = gq(2250),
      fq = gq(1341),
      Mq = gq(1070);

    function Tq(qq, Eq, gq) {
      return (0, Wq.p)(qq, Eq).purchasable && !(0, vq.l)(qq, Eq, gq)
    }

    function zq(qq, Eq) {
      return Object.entries(qq).some((qq => {
        let [gq, Yq] = qq;
        return Tq(gq, Yq, Eq)
      }))
    }

    function Sq(qq) {
      var Eq;
      let {
        pack: gq,
        ownedPacks: Yq,
        showStoreLink: lq = !1,
        children: Oq
      } = qq;
      const {
        t: mq
      } = (0, Bq.v)(), xq = rq.d[gq], cq = xq.purchasable && !Yq.includes(gq) && rq.w.includes(gq), uq = hq.l[gq];
      return (0, Mq.jsxs)("div", {
        className: Aq()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: cq
        }),
        children: [uq && (0, Mq.jsx)(uq, {}), (0, Mq.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, Mq.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (Eq = xq.displayName) && void 0 !== Eq ? Eq : gq
          }), (cq || lq) && (0, Mq.jsxs)(Hq.G, {
            onClick: () => {
              cq ? (0, hq.h)(gq) : (0, oq.n)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, Mq.jsx)(iq.d, {
              name: "store"
            }), " ", mq("general:viewInShop")]
          })]
        }), cq && "bee" === gq && (0, Mq.jsx)(hq.e, {}), Oq]
      })
    }

    function pq(qq) {
      let {
        equippedEmoteIds: Eq,
        ownedPacks: gq,
        canBuy: Yq,
        onUpdateLoadout: lq,
        onEmoteSelected: Oq,
        onEquipPreviewSkin: mq
      } = qq;
      const {
        t: xq
      } = (0, Bq.v)(), uq = new Set(Eq), Nq = new Map, aq = Object.keys(Wq.f.emote).sort(((qq, Eq) => {
        var gq, Yq, lq, Oq;
        return (null !== (gq = null === (Yq = (0, Wq.l)("emote", qq)) || void 0 === Yq ? void 0 : Yq.clientIdx) && void 0 !== gq ? gq : 0) - (null !== (lq = null === (Oq = (0, Wq.l)("emote", Eq)) || void 0 === Oq ? void 0 : Oq.clientIdx) && void 0 !== lq ? lq : 0)
      })).filter((qq => {
        const Eq = (0, Wq.p)("emote", qq),
          lq = (0, vq.l)("emote", qq, gq);
        return !(Eq.purchasable && !lq && !Yq) && (Eq.clientSelectable || lq)
      }));
      for (const Aq of aq) {
        const qq = (0, Wq.l)("emote", Aq).cosmeticPack;
        Nq.has(qq) || Nq.set(qq, []), Nq.get(qq).push(Aq)
      }
      const dq = Array.from(Nq.keys());
      return (0, Mq.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, Mq.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, Mq.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: xq("emotes:equippedCount", {
              count: Eq.length,
              max: cq.o
            })
          }), (0, Mq.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: xq("emotes:loadoutHint")
          })]
        }), dq.map((qq => {
          const Yq = Nq.get(qq);
          return (0, Mq.jsx)(Sq, {
            pack: qq,
            ownedPacks: gq,
            children: (0, Mq.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: Yq.map((qq => {
                var Yq;
                const mq = Eq.indexOf(qq),
                  Bq = -1 !== mq,
                  Wq = Eq.length >= cq.o,
                  Nq = Tq("emote", qq, gq),
                  aq = Nq || !Bq && Wq,
                  dq = (0, Vq.i)(qq);
                return (0, Mq.jsxs)("div", {
                  className: Aq()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Bq
                  }),
                  onClick: () => {
                    Oq(qq)
                  },
                  children: [(0, Mq.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, Mq.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${qq}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, Mq.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (Yq = null === dq || void 0 === dq ? void 0 : dq.displayName) && void 0 !== Yq ? Yq : qq
                    })]
                  }), (0, Mq.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Bq && (0, Mq.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: mq + 1
                    }), Nq && (0, Mq.jsx)(iq.d, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, Mq.jsx)(fq.e, {
                      tooltipInner: (0, Mq.jsx)(Mq.Fragment, {
                        children: xq(Bq ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, Mq.jsx)("div", {
                        className: Aq()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: aq,
                          EmoteCustomPartToggleEquipped: Bq
                        }),
                        onClick: gq => {
                          gq.stopPropagation(), aq || function(qq) {
                            uq.has(qq) ? lq(Eq.filter((Eq => Eq !== qq))) : Eq.length >= cq.o || lq([...Eq, qq])
                          }(qq)
                        },
                        children: (0, Mq.jsx)(iq.d, {
                          name: Bq ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, qq)
              }))
            })
          }, qq)
        }))]
      })
    }
    const Gq = (0, Yq.memo)((function(qq) {
      let {
        selectedTab: Eq
      } = qq;
      const gq = "characters" === Eq ? "skin" : Eq,
        {
          t: xq
        } = (0, Bq.v)(),
        {
          userContext: Vq,
          isUserContextUpdating: hq
        } = (0, Oq.c)(),
        fq = (0, lq.c)(),
        {
          gameState: Gq,
          initSdkSelectorFinished: Lq
        } = (0, Pq.j)(["gameState", "initSdkSelectorFinished"]),
        [Jq, kq] = (0, Yq.useState)({}),
        [Rq, Uq] = (0, Yq.useState)({}),
        {
          previewEmote: Fq,
          triggerEmote: sq
        } = (0, dq.d)(),
        Xq = (0, Yq.useRef)(cq.w.reduce(((qq, Eq) => (qq[Eq] = (0, aq.e)(Eq), qq)), {})),
        wq = (0, Yq.useRef)(!1),
        Kq = (0, Yq.useRef)(null),
        Cq = (0, Yq.useRef)(null),
        Iq = (0, Yq.useRef)(null);

      function eq() {
        null !== Cq.current && (clearTimeout(Cq.current), Cq.current = null);
        const qq = Iq.current;
        if (null === qq) return;
        Iq.current = null;
        const Eq = {
          tY: "emote",
          rY: qq
        };
        null !== mq.gameBridge.latest("connectedGame").websocketUrl ? mq.gameBridge.send("updateMyCosmetic", Eq) : Qq.e.updateCosmetics(Vq, [Eq]).catch((qq => {
          console.error("Failed to update emote loadout", qq)
        }))
      }

      function Dq(qq, Eq, gq) {
        var Yq, lq, Oq;
        if (Xq.current = {
            ...Xq.current,
            [qq]: Eq
          }, fq(), gq) {
          const gq = {
            tY: qq,
            rY: Eq
          };
          null !== mq.gameBridge.latest("connectedGame").websocketUrl ? mq.gameBridge.send("updateMyCosmetic", gq) : Qq.e.updateCosmetics(Vq, [gq]).catch((qq => {
            console.error("Failed to update cosmetic", qq)
          })), Vq.setPlayerCosmetics(qq, Eq)
        }
        const xq = (0, Wq.l)(qq, Eq);
        if (null !== xq && void 0 !== xq && xq.colourGroup && null !== (Yq = rq.d[xq.cosmeticPack].colourGroups) && void 0 !== Yq && null !== (lq = Yq[xq.colourGroup]) && void 0 !== lq && lq.showSwatchSelector) {
          const gq = (0, Wq.j)(Eq);
          gq && Uq((Eq => ({
            ...Eq,
            [`${xq.cosmeticPack}_${qq}_${xq.colourGroup}`]: parseInt(gq[1])
          })))
        }
        null !== (Oq = Kq.current) && void 0 !== Oq && Oq.isReady() && Kq.current.updateCosmetic(qq, Eq)
      }

      function qE(qq) {
        return Object.entries(qq).every((qq => {
          let [Eq, gq] = qq;
          return Jq[Eq] === gq
        }))
      }(0, jq.d)("cosmeticsUpdated", (qq => {
        let Eq = !1;
        for (const {
            local: gq,
            tY: Yq,
            rY: lq
          }
          of qq) {
          if (!gq) return;
          Eq = !0, wq.current || Dq(Yq, lq, !1), fq()
        }
        Eq && (wq.current = !0)
      })), (0, Yq.useEffect)((() => {
        if (!hq) {
          for (const [qq, Eq] of Object.entries(Vq.getPlayerCosmetics())) Dq(qq, Eq, !1);
          fq()
        }
      }), [hq]), (0, Yq.useEffect)((() => () => {
        eq()
      }), []);
      const EE = Vq.getOwnedCosmeticPacks(),
        gE = (0, Zq.purchasesAllowed)(),
        YE = Object.keys(Wq.f[gq]).filter((qq => {
          const Eq = (0, Wq.p)(gq, qq),
            Yq = (0, vq.l)(gq, qq, EE);
          return !(Eq.purchasable && !Yq && !gE) && (Eq.clientSelectable || Yq)
        })).sort(((qq, Eq) => {
          var Yq, lq, Oq, mq;
          return (null !== (Yq = null === (lq = (0, Wq.l)(gq, qq)) || void 0 === lq ? void 0 : lq.clientIdx) && void 0 !== Yq ? Yq : 0) - (null !== (Oq = null === (mq = (0, Wq.l)(gq, Eq)) || void 0 === mq ? void 0 : mq.clientIdx) && void 0 !== Oq ? Oq : 0)
        })),
        lE = new Map;
      for (const Yq of YE) {
        var OE;
        const qq = null === (OE = (0, Wq.l)(gq, Yq)) || void 0 === OE ? void 0 : OE.cosmeticPack;
        lE.has(qq) || lE.set(qq, []), lE.get(qq).push(Yq)
      }
      const mE = function(qq, Eq) {
          const gq = new Set,
            Yq = new Set;
          for (const [lq, Oq] of Object.entries(Wq.f[qq])) {
            if (void 0 === Oq.colourGroup) continue;
            const mq = `${Oq.cosmeticPack}_${Oq.colourGroup}`;
            (Tq(qq, lq, Eq) ? Yq : gq).add(mq)
          }
          return new Set([...gq].filter((qq => Yq.has(qq))))
        }(gq, EE),
        xE = new Map;
      for (const [Yq, lq] of lE) {
        const qq = [],
          Eq = new Map;
        for (const Yq of lq) {
          var AE, cE;
          const lq = null !== (AE = null === (cE = (0, Wq.l)(gq, Yq)) || void 0 === cE ? void 0 : cE.colourGroup) && void 0 !== AE ? AE : null;
          Eq.has(lq) || (Eq.set(lq, []), qq.push(lq)), Eq.get(lq).push(Yq)
        }
        const Oq = qq.map((qq => {
          var lq;
          const Oq = Eq.get(qq),
            mq = qq ? null === (lq = rq.d[Yq].colourGroups) || void 0 === lq ? void 0 : lq[qq] : void 0,
            xq = !0 === (null === mq || void 0 === mq ? void 0 : mq.showSwatchSelector) && !mE.has(`${Yq}_${qq}`);
          if (xq && mq) {
            var Aq;
            const Eq = null !== (Aq = Rq[`${Yq}_${gq}_${qq}`]) && void 0 !== Aq ? Aq : (0, rq.k)(mq.colours);
            return {
              groupName: qq,
              showSwatch: xq,
              cosmetics: Oq.filter((qq => {
                const gq = (0, Wq.j)(qq);
                return !gq || Eq.toString() === gq[1].toString()
              }))
            }
          }
          return {
            groupName: qq,
            cosmetics: Oq,
            showSwatch: xq
          }
        }));
        xE.set(Yq, Oq)
      }
      const uE = Array.from(lE.keys()),
        BE = new Map;
      for (const [Yq, lq] of Object.entries(Nq.b)) {
        const qq = rq.d[lq.cosmeticPack],
          Eq = !zq(lq.cosmetics, EE),
          gq = rq.q.some((qq => (0, rq.h)(qq) === Yq));
        (qq.clientSelectable || gq || Eq) && ((!qq.purchasable || Eq || gE) && (BE.has(lq.cosmeticPack) || BE.set(lq.cosmeticPack, []), BE.get(lq.cosmeticPack).push([Yq, lq])))
      }
      const WE = Array.from(BE.keys());
      return (0, Mq.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === gq || "nameColour" === gq) && !Vq.playerHasRank("super") && (0, Mq.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, Mq.jsx)(iq.d, {
            name: "bolt"
          }), xq("homePage:unlockWithSuperRank"), gE && (0, Mq.jsx)(Hq.p, {
            onClick: () => {
              (0, oq.n)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: xq("general:getItNow")
          })]
        }), (0, Mq.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === Eq && (0, Mq.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, WE.map((qq => {
              const Eq = BE.get(qq);
              return (0, Mq.jsx)(Sq, {
                pack: qq,
                ownedPacks: EE,
                showStoreLink: !rq.s.includes(qq) && Eq.some((qq => {
                  let [, {
                    cosmetics: Eq
                  }] = qq;
                  return zq(Eq, EE)
                })),
                children: (0, Mq.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: Eq.map((qq => {
                    let [Eq, {
                      cosmetics: gq
                    }] = qq;
                    const Yq = zq(gq, EE),
                      lq = qE(gq),
                      Oq = !lq && Object.entries(gq).every((qq => {
                        let [Eq, gq] = qq;
                        return Xq.current[Eq] === gq
                      }));
                    return (0, Mq.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: Aq()("CharacterPresetCard", {
                        CharacterPresetCardActive: Oq,
                        CharacterPresetCardTryingOn: lq
                      }),
                      onClick: () => {
                        if (Yq) ! function(qq) {
                          qE(qq) ? kq({}) : kq({
                            ...qq
                          })
                        }(gq);
                        else {
                          Object.keys(Jq).length > 0 && kq({});
                          const qq = Object.entries(gq);
                          for (const [Eq, gq] of qq) Dq(Eq, gq, !1), Vq.setPlayerCosmetics(Eq, gq);
                          if (null !== mq.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [Eq, gq] of qq) mq.gameBridge.send("updateMyCosmetic", {
                              tY: Eq,
                              rY: gq
                            });
                          else Qq.e.updateCosmetics(Vq, qq.map((qq => {
                            let [Eq, gq] = qq;
                            return {
                              tY: Eq,
                              rY: gq
                            }
                          }))).catch((qq => {
                            console.error("Failed to update cosmetics", qq)
                          }))
                        }
                      },
                      children: [(0, Mq.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${Eq}_preview.png)`
                        }
                      }), Yq && (0, Mq.jsx)(iq.d, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, Eq)
                  }))
                })
              }, qq)
            }))]
          }), "emote" === Eq && (0, Mq.jsx)(pq, {
            equippedEmoteIds: (0, aq.g)(Xq.current.emote),
            ownedPacks: EE,
            canBuy: gE,
            onUpdateLoadout: qq => {
              const Eq = (0, aq.j)(qq);
              var gq;
              Xq.current = {
                ...Xq.current,
                emote: Eq
              }, Vq.setPlayerCosmetics("emote", Eq), fq(), gq = Eq, Iq.current = gq, null !== Cq.current && clearTimeout(Cq.current), Cq.current = setTimeout(eq, 350)
            },
            onEmoteSelected: sq,
            onEquipPreviewSkin: () => {
              ! function(qq, Eq) {
                for (const gq of cq.w) "cape" !== gq && "nameColour" !== gq && "emote" !== gq && qq(gq, "skin" === gq ? "skin_preview" : `${gq}_none`, !1);
                Eq()
              }(Dq, fq)
            }
          }), "characters" !== Eq && "emote" !== Eq && (0, Mq.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, uE.map((qq => {
              const Eq = xE.get(qq);
              return (0, Mq.jsx)(Sq, {
                pack: qq,
                ownedPacks: EE,
                children: Eq.map((Eq => {
                  var Yq;
                  let {
                    groupName: lq,
                    cosmetics: Oq,
                    showSwatch: mq
                  } = Eq;
                  const xq = lq ? null === (Yq = rq.d[qq].colourGroups) || void 0 === Yq ? void 0 : Yq[lq] : void 0,
                    cq = `${qq}_${gq}_${lq}`;
                  return (0, Mq.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [mq && xq && (0, Mq.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...xq.colours.map(((qq, Eq) => ({
                        color: qq,
                        index: Eq
                      })))].sort(((qq, Eq) => qq.color.order - Eq.color.order)).map((Eq => {
                        var Yq;
                        let {
                          color: Oq,
                          index: mq
                        } = Eq;
                        return (0, Mq.jsx)("div", {
                          className: Aq()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (Yq = Rq[cq]) && void 0 !== Yq ? Yq : (0, rq.k)(xq.colours)) === mq
                          }),
                          style: {
                            backgroundColor: `rgb(${Oq.rbg.join(",")})`
                          },
                          onClick: () => {
                            var Eq;
                            Uq((qq => ({
                              ...qq,
                              [cq]: mq
                            })));
                            const Yq = Jq[gq],
                              Oq = Yq ? (0, Wq.l)(gq, Yq) : null,
                              xq = (null === Oq || void 0 === Oq ? void 0 : Oq.cosmeticPack) === qq,
                              Aq = xq ? Yq : Xq.current[gq],
                              uq = xq ? Oq : (0, Wq.l)(gq, Aq);
                            if ((null === uq || void 0 === uq ? void 0 : uq.cosmeticPack) !== qq) return;
                            if ((null !== (Eq = null === uq || void 0 === uq ? void 0 : uq.colourGroup) && void 0 !== Eq ? Eq : null) !== lq) return;
                            const Bq = (0, Wq.j)(Aq);
                            if (Bq) {
                              const qq = `${gq}_${Bq[0]}_${mq}`;
                              xq ? kq((Eq => ({
                                ...Eq,
                                [gq]: qq
                              }))) : Dq(gq, qq, !0)
                            }
                          }
                        }, Oq.rbg.join())
                      }))
                    }), Oq.map((qq => {
                      const Eq = qq === Xq.current[gq],
                        Yq = Jq[gq] === qq,
                        lq = Tq(gq, qq, EE);
                      let Oq = !0;
                      return lq || Eq || ("cape" !== gq || (0, yq.Md)(Vq.getPlayerRanks(), qq)) && ("nameColour" !== gq || Vq.playerHasRank("super")) || (Oq = !1), (0, Mq.jsxs)("div", {
                        className: Aq()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: Eq && !Yq,
                          TryingOnCharCustomPartWrapper: Yq,
                          DisabledCharCustomPartWrapper: !Oq,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === gq
                        }),
                        onClick: () => {
                          if (Oq)
                            if (lq) kq((Eq => {
                              if (Eq[gq] === qq) {
                                const qq = {
                                  ...Eq
                                };
                                return delete qq[gq], qq
                              }
                              return {
                                ...Eq,
                                [gq]: qq
                              }
                            }));
                            else {
                              var Eq;
                              if (Jq[gq] && kq((qq => {
                                  const Eq = {
                                    ...qq
                                  };
                                  return delete Eq[gq], Eq
                                })), qq === Xq.current[gq]) return;
                              null !== (Eq = Kq.current) && void 0 !== Eq && Eq.isReady() && Dq(gq, qq, !0)
                            }
                        },
                        children: ["profileEffect" === gq ? (0, Mq.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, Mq.jsx)(bq.h, {
                            playerSocialPreview: (0, nq.b)(qq, {
                              name: Vq.getPlayerName(),
                              cosmetics: Vq.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, Mq.jsx)("div", {
                          className: Aq()("CharCustomPart", {
                            PixelatedImage: "cape" === gq
                          }),
                          style: (0, Wq.l)(gq, qq).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,Wq.l)(gq,qq).previewTex}.png)`
                          } : {
                            backgroundColor: uq.s[qq]
                          }
                        }), lq && (0, Mq.jsx)(iq.d, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, qq)
                    }))]
                  }, null !== lq && void 0 !== lq ? lq : "ungrouped")
                }))
              }, qq)
            }))]
          }), (0, Mq.jsx)(tq.CharacterPreview, {
            ref: Kq,
            forcedCosmetics: Jq,
            Dc: Fq.id,
            emotePlaySeq: Fq.seq,
            onReady: () => {
              for (const qq of cq.w) Dq(qq, Xq.current[qq], !1)
            }
          })]
        })]
      })
    }))
  },
  41011: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      CharacterPreview: () => Bq
    });
    var Yq = gq(57),
      lq = gq(2660),
      Oq = gq(1226),
      mq = gq(8794),
      xq = gq(9313),
      Aq = gq(3501),
      cq = gq(1070);
    const uq = .6 * Math.PI,
      Bq = (0, Yq.memo)((0, Yq.forwardRef)((function(qq, Eq) {
        let {
          onReady: gq,
          onDrawn: Bq,
          owner: Wq = "other",
          framing: Nq = "player",
          forcedCosmetics: aq,
          Dc: Vq,
          emotePlaySeq: dq,
          turntableFromYaw: jq = null
        } = qq;
        const Hq = (0, Yq.useRef)(null),
          {
            width: oq,
            height: Pq
          } = (0, lq.e)(Hq),
          Qq = (0, Yq.useRef)(null),
          yq = (0, Yq.useRef)({}),
          tq = (0, Yq.useRef)({}),
          [rq, vq] = (0, Yq.useState)(!1),
          hq = (0, Yq.useRef)(gq);
        hq.current = gq;
        const nq = (0, Yq.useRef)(Bq);
        nq.current = Bq;
        const bq = (0, Yq.useRef)(null),
          iq = (0, Yq.useRef)(!1),
          Zq = (0, Yq.useRef)(!1),
          fq = (0, Yq.useCallback)((() => {
            const qq = Qq.current;
            if (!qq || !nq.current || iq.current || !Zq.current) return;
            const Eq = {};
            bq.current = Eq, queueMicrotask((() => {
              if (bq.current !== Eq) return;
              const gq = Promise.all(Oq.w.map((Eq => qq.untilDrawn(Eq)))).catch((qq => {
                  console.error("Failed to draw the character preview", qq)
                })),
                Yq = new Promise((qq => {
                  setTimeout(qq, 1e4)
                }));
              Promise.race([gq, Yq]).then((() => {
                var gq;
                Qq.current !== qq || bq.current !== Eq || iq.current || (iq.current = !0, null === (gq = nq.current) || void 0 === gq || gq.call(nq))
              }))
            }))
          }), []);
        return (0, Yq.useImperativeHandle)(Eq, (() => {
          const qq = (qq, Eq) => {
            var gq;
            (yq.current[qq] = Eq, null !== aq && void 0 !== aq && aq[qq]) || (null === (gq = Qq.current) || void 0 === gq || gq.setCosmetic(qq, Eq), fq())
          };
          return {
            updateCosmetic: qq,
            setAllCosmetics(Eq) {
              for (const Yq of Oq.w) {
                var gq;
                qq(Yq, null !== (gq = Eq[Yq]) && void 0 !== gq ? gq : (0, mq.e)(Yq))
              }
            },
            isReady() {
              var qq, Eq;
              return null !== (qq = null === (Eq = Qq.current) || void 0 === Eq ? void 0 : Eq.isReady()) && void 0 !== qq && qq
            },
            resetCamera() {
              var qq;
              null === (qq = Qq.current) || void 0 === qq || qq.resetCamera()
            },
            setOrbit(qq) {
              var Eq;
              null === (Eq = Qq.current) || void 0 === Eq || Eq.setOrbit(qq)
            },
            async ensureReadyForCapture(qq) {
              var Eq;
              await (null === (Eq = Qq.current) || void 0 === Eq ? void 0 : Eq.untilDrawn(qq))
            },
            getDevTools() {
              var qq;
              return null !== (qq = Qq.current) && void 0 !== qq && qq.isReady() ? Qq.current.dev : null
            }
          }
        }), [aq, fq]), (0, Yq.useEffect)((() => {
          const qq = Aq.d.register(Wq),
            Eq = xq.i.openCharacter(Hq.current, Nq);
          Qq.current = Eq;
          let gq = !0;
          return Eq.ready.then((() => {
            gq && (vq(!0), hq.current())
          })).catch((qq => {
            console.error("Failed to set up the character preview", qq)
          })), () => {
            gq = !1, qq(), Eq.resetCamera(), Eq.close(), Qq.current = null
          }
        }), []), (0, Yq.useEffect)((() => {
          oq <= 0 || Pq <= 0 || Qq.current.resize(oq, Pq)
        }), [oq, Pq]), (0, Yq.useEffect)((() => {
          if (!rq) return;
          const qq = tq.current;
          for (const Eq of Oq.w) {
            const gq = null === aq || void 0 === aq ? void 0 : aq[Eq],
              Yq = qq[Eq];
            gq && gq !== Yq ? Qq.current.setCosmetic(Eq, gq) : !gq && Yq && yq.current[Eq] && Qq.current.setCosmetic(Eq, yq.current[Eq])
          }
          tq.current = {
            ...aq
          }, Zq.current = !0, fq()
        }), [aq, rq, fq]), (0, Yq.useEffect)((() => {
          rq && Qq.current.playEmote(null !== Vq && void 0 !== Vq ? Vq : null)
        }), [Vq, dq, rq]), (0, Yq.useEffect)((() => {
          if (!rq || null === jq) return;
          const qq = Qq.current,
            {
              pitch: Eq,
              radius: gq
            } = xq.c[Nq];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return qq.setOrbit({
            yaw: jq + uq,
            pitch: Eq,
            radius: gq
          }), () => {
            qq.resetCamera()
          };
          const Yq = performance.now();
          let lq = 0;
          const Oq = mq => {
            qq.setOrbit({
              yaw: jq + (mq - Yq) / 6e3 * 2 * Math.PI,
              pitch: Eq,
              radius: gq
            }), lq = requestAnimationFrame(Oq)
          };
          return lq = requestAnimationFrame(Oq), () => {
            cancelAnimationFrame(lq), qq.resetCamera()
          }
        }), [rq, jq]), (0, cq.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Hq
        })
      })))
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);