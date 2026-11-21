export const id = 282;
export const ids = [282, 283];
export const modules = {
  41247: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      CharacterCustomisationUI: () => yd
    });
    var pd = kd(56),
      Nd = kd(2851),
      Wd = kd(1140),
      Pd = kd(1932),
      Zd = kd(1044),
      gd = kd.n(Zd),
      Cd = kd(1260),
      Kd = kd(593),
      od = kd(1211),
      ld = kd(2196),
      Qd = kd(1598),
      Ld = kd(8734),
      Od = kd(2203),
      ed = kd(2953),
      Rd = kd(1968),
      Id = kd(1461),
      Gd = kd(2231),
      vd = kd(22),
      xd = kd(1520),
      qd = kd(313),
      Bd = kd(41253),
      sd = kd(1594),
      ad = kd(2280),
      Md = kd(2845),
      Fd = kd(2126),
      Yd = kd(2479),
      md = kd(1059);
    kd(9272), kd(2962);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var bd = kd(2243),
      Sd = kd(1384),
      jd = kd(1103);

    function Xd(dd, Jd, kd) {
      return (0, ld.l)(dd, Jd).purchasable && !(0, ad.r)(dd, Jd, kd)
    }

    function fd(dd, Jd) {
      return Object.entries(dd).some((dd => {
        let [kd, pd] = dd;
        return Xd(kd, pd, Jd)
      }))
    }

    function nd(dd) {
      var Jd;
      let {
        pack: kd,
        ownedPacks: pd,
        showStoreLink: Nd = !1,
        children: Wd
      } = dd;
      const {
        t: Pd
      } = (0, od.B)(), Zd = sd.d[kd], Cd = Zd.purchasable && !pd.includes(kd) && sd.r.includes(kd), Kd = Md.k[kd];
      return (0, jd.jsxs)("div", {
        className: gd()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: Cd
        }),
        children: [Kd && (0, jd.jsx)(Kd, {}), (0, jd.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, jd.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (Jd = Zd.displayName) && void 0 !== Jd ? Jd : kd
          }), (Cd || Nd) && (0, jd.jsxs)(Id.y, {
            onClick: () => {
              Cd ? (0, Md.i)(kd) : (0, Gd.q)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, jd.jsx)(md.e, {
              name: "store"
            }), " ", Pd("general:viewInShop")]
          })]
        }), Cd && "bee" === kd && (0, jd.jsx)(Md.d, {}), Wd]
      })
    }

    function Ud(dd) {
      let {
        equippedEmoteIds: Jd,
        ownedPacks: kd,
        canBuy: pd,
        onUpdateLoadout: Nd,
        onEmoteSelected: Wd,
        onEquipPreviewSkin: Pd
      } = dd;
      const {
        t: Zd
      } = (0, od.B)(), Kd = new Set(Jd), Qd = new Map, Ld = Object.keys(ld.e.emote).sort(((dd, Jd) => {
        var kd, pd, Nd, Wd;
        return (null !== (kd = null === (pd = (0, ld.h)("emote", dd)) || void 0 === pd ? void 0 : pd.clientIdx) && void 0 !== kd ? kd : 0) - (null !== (Nd = null === (Wd = (0, ld.h)("emote", Jd)) || void 0 === Wd ? void 0 : Wd.clientIdx) && void 0 !== Nd ? Nd : 0)
      })).filter((dd => {
        const Jd = (0, ld.l)("emote", dd),
          Nd = (0, ad.r)("emote", dd, kd);
        return !(Jd.purchasable && !Nd && !pd) && (Jd.clientSelectable || Nd)
      }));
      for (const gd of Ld) {
        const dd = (0, ld.h)("emote", gd).cosmeticPack;
        Qd.has(dd) || Qd.set(dd, []), Qd.get(dd).push(gd)
      }
      const ed = Array.from(Qd.keys());
      return (0, jd.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, jd.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, jd.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: Zd("emotes:equippedCount", {
              count: Jd.length,
              max: Cd.n
            })
          }), (0, jd.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: Zd("emotes:loadoutHint")
          })]
        }), ed.map((dd => {
          const pd = Qd.get(dd);
          return (0, jd.jsx)(nd, {
            pack: dd,
            ownedPacks: kd,
            children: (0, jd.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: pd.map((dd => {
                var pd;
                const Pd = Jd.indexOf(dd),
                  od = -1 !== Pd,
                  ld = Jd.length >= Cd.n,
                  Qd = Xd("emote", dd, kd),
                  Ld = Qd || !od && ld,
                  ed = (0, Od.h)(dd);
                return (0, jd.jsxs)("div", {
                  className: gd()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: od
                  }),
                  onClick: () => {
                    Wd(dd)
                  },
                  children: [(0, jd.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, jd.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${dd}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, jd.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (pd = null === ed || void 0 === ed ? void 0 : ed.displayName) && void 0 !== pd ? pd : dd
                    })]
                  }), (0, jd.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [od && (0, jd.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: Pd + 1
                    }), Qd && (0, jd.jsx)(md.e, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, jd.jsx)(Sd.f, {
                      tooltipInner: (0, jd.jsx)(jd.Fragment, {
                        children: Zd(od ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, jd.jsx)("div", {
                        className: gd()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: Ld,
                          EmoteCustomPartToggleEquipped: od
                        }),
                        onClick: kd => {
                          kd.stopPropagation(), Ld || function(dd) {
                            Kd.has(dd) ? Nd(Jd.filter((Jd => Jd !== dd))) : Jd.length >= Cd.n || Nd([...Jd, dd])
                          }(dd)
                        },
                        children: (0, jd.jsx)(md.e, {
                          name: od ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, dd)
              }))
            })
          }, dd)
        }))]
      })
    }
    const yd = (0, pd.memo)((function(dd) {
      let {
        selectedTab: Jd
      } = dd;
      const kd = "characters" === Jd ? "skin" : Jd,
        {
          t: Zd
        } = (0, od.B)(),
        {
          userContext: Od,
          isUserContextUpdating: Md
        } = (0, Wd.c)(),
        Sd = (0, Nd.b)(),
        {
          gameState: yd,
          initSdkSelectorFinished: Dd
        } = (0, vd.j)(["gameState", "initSdkSelectorFinished"]),
        [Td, Ed] = (0, pd.useState)({}),
        [cd, hd] = (0, pd.useState)({}),
        {
          previewEmote: rd,
          triggerEmote: ud
        } = (0, ed.b)(),
        td = (0, pd.useRef)(Cd.x.reduce(((dd, Jd) => (dd[Jd] = (0, Ld.b)(Jd), dd)), {})),
        Vd = (0, pd.useRef)(!1),
        zd = (0, pd.useRef)(null),
        Hd = (0, pd.useRef)(null),
        wd = (0, pd.useRef)(null);

      function Ad() {
        null !== Hd.current && (clearTimeout(Hd.current), Hd.current = null);
        const dd = wd.current;
        if (null === dd) return;
        wd.current = null;
        const Jd = {
          np: "emote",
          Up: dd
        };
        null !== Pd.gameBridge.latest("connectedGame").websocketUrl ? Pd.gameBridge.send("updateMyCosmetic", Jd) : xd.d.updateCosmetics(Od, [Jd]).catch((dd => {
          console.error("Failed to update emote loadout", dd)
        }))
      }

      function dJ(dd, Jd, kd) {
        var pd, Nd, Wd;
        if (td.current = {
            ...td.current,
            [dd]: Jd
          }, Sd(), kd) {
          const kd = {
            np: dd,
            Up: Jd
          };
          null !== Pd.gameBridge.latest("connectedGame").websocketUrl ? Pd.gameBridge.send("updateMyCosmetic", kd) : xd.d.updateCosmetics(Od, [kd]).catch((dd => {
            console.error("Failed to update cosmetic", dd)
          })), Od.setPlayerCosmetics(dd, Jd)
        }
        const Zd = (0, ld.h)(dd, Jd);
        if (null !== Zd && void 0 !== Zd && Zd.colourGroup && null !== (pd = sd.d[Zd.cosmeticPack].colourGroups) && void 0 !== pd && null !== (Nd = pd[Zd.colourGroup]) && void 0 !== Nd && Nd.showSwatchSelector) {
          const kd = (0, ld.g)(Jd);
          kd && hd((Jd => ({
            ...Jd,
            [`${Zd.cosmeticPack}_${dd}_${Zd.colourGroup}`]: parseInt(kd[1])
          })))
        }
        null !== (Wd = zd.current) && void 0 !== Wd && Wd.isReady() && zd.current.updateCosmetic(dd, Jd)
      }

      function JJ(dd) {
        return Object.entries(dd).every((dd => {
          let [Jd, kd] = dd;
          return Td[Jd] === kd
        }))
      }(0, Rd.d)("cosmeticsUpdated", (dd => {
        let Jd = !1;
        for (const {
            local: kd,
            np: pd,
            Up: Nd
          }
          of dd) {
          if (!kd) return;
          Jd = !0, Vd.current || dJ(pd, Nd, !1), Sd()
        }
        Jd && (Vd.current = !0)
      })), (0, pd.useEffect)((() => {
        if (!Md) {
          for (const [dd, Jd] of Object.entries(Od.getPlayerCosmetics())) dJ(dd, Jd, !1);
          Sd()
        }
      }), [Md]), (0, pd.useEffect)((() => () => {
        Ad()
      }), []);
      const kJ = Od.getOwnedCosmeticPacks(),
        pJ = (0, bd.purchasesAllowed)(),
        NJ = Object.keys(ld.e[kd]).filter((dd => {
          const Jd = (0, ld.l)(kd, dd),
            pd = (0, ad.r)(kd, dd, kJ);
          return !(Jd.purchasable && !pd && !pJ) && (Jd.clientSelectable || pd)
        })).sort(((dd, Jd) => {
          var pd, Nd, Wd, Pd;
          return (null !== (pd = null === (Nd = (0, ld.h)(kd, dd)) || void 0 === Nd ? void 0 : Nd.clientIdx) && void 0 !== pd ? pd : 0) - (null !== (Wd = null === (Pd = (0, ld.h)(kd, Jd)) || void 0 === Pd ? void 0 : Pd.clientIdx) && void 0 !== Wd ? Wd : 0)
        })),
        WJ = new Map;
      for (const pd of NJ) {
        var PJ;
        const dd = null === (PJ = (0, ld.h)(kd, pd)) || void 0 === PJ ? void 0 : PJ.cosmeticPack;
        WJ.has(dd) || WJ.set(dd, []), WJ.get(dd).push(pd)
      }
      const ZJ = function(dd, Jd) {
          const kd = new Set,
            pd = new Set;
          for (const [Nd, Wd] of Object.entries(ld.e[dd])) {
            if (void 0 === Wd.colourGroup) continue;
            const Pd = `${Wd.cosmeticPack}_${Wd.colourGroup}`;
            (Xd(dd, Nd, Jd) ? pd : kd).add(Pd)
          }
          return new Set([...kd].filter((dd => pd.has(dd))))
        }(kd, kJ),
        gJ = new Map;
      for (const [pd, Nd] of WJ) {
        const dd = [],
          Jd = new Map;
        for (const pd of Nd) {
          var CJ, KJ;
          const Nd = null !== (CJ = null === (KJ = (0, ld.h)(kd, pd)) || void 0 === KJ ? void 0 : KJ.colourGroup) && void 0 !== CJ ? CJ : null;
          Jd.has(Nd) || (Jd.set(Nd, []), dd.push(Nd)), Jd.get(Nd).push(pd)
        }
        const Wd = dd.map((dd => {
          var Nd;
          const Wd = Jd.get(dd),
            Pd = dd ? null === (Nd = sd.d[pd].colourGroups) || void 0 === Nd ? void 0 : Nd[dd] : void 0,
            Zd = !0 === (null === Pd || void 0 === Pd ? void 0 : Pd.showSwatchSelector) && !ZJ.has(`${pd}_${dd}`);
          if (Zd && Pd) {
            var gd;
            const Jd = null !== (gd = cd[`${pd}_${kd}_${dd}`]) && void 0 !== gd ? gd : (0, sd.i)(Pd.colours);
            return {
              groupName: dd,
              showSwatch: Zd,
              cosmetics: Wd.filter((dd => {
                const kd = (0, ld.g)(dd);
                return !kd || Jd.toString() === kd[1].toString()
              }))
            }
          }
          return {
            groupName: dd,
            cosmetics: Wd,
            showSwatch: Zd
          }
        }));
        gJ.set(pd, Wd)
      }
      const oJ = Array.from(WJ.keys()),
        lJ = new Map;
      for (const [pd, Nd] of Object.entries(Qd.c)) {
        const dd = sd.d[Nd.cosmeticPack],
          Jd = !fd(Nd.cosmetics, kJ),
          kd = sd.n.some((dd => (0, sd.f)(dd) === pd));
        (dd.clientSelectable || kd || Jd) && ((!dd.purchasable || Jd || pJ) && (lJ.has(Nd.cosmeticPack) || lJ.set(Nd.cosmeticPack, []), lJ.get(Nd.cosmeticPack).push([pd, Nd])))
      }
      const QJ = Array.from(lJ.keys());
      return (0, jd.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === kd || "nameColour" === kd) && !Od.playerHasRank("super") && (0, jd.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, jd.jsx)(md.e, {
            name: "bolt"
          }), Zd("homePage:unlockWithSuperRank"), pJ && (0, jd.jsx)(Id.j, {
            onClick: () => {
              (0, Gd.q)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: Zd("general:getItNow")
          })]
        }), (0, jd.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === Jd && (0, jd.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, QJ.map((dd => {
              const Jd = lJ.get(dd);
              return (0, jd.jsx)(nd, {
                pack: dd,
                ownedPacks: kJ,
                showStoreLink: !sd.q.includes(dd) && Jd.some((dd => {
                  let [, {
                    cosmetics: Jd
                  }] = dd;
                  return fd(Jd, kJ)
                })),
                children: (0, jd.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: Jd.map((dd => {
                    let [Jd, {
                      cosmetics: kd
                    }] = dd;
                    const pd = fd(kd, kJ),
                      Nd = JJ(kd),
                      Wd = !Nd && Object.entries(kd).every((dd => {
                        let [Jd, kd] = dd;
                        return td.current[Jd] === kd
                      }));
                    return (0, jd.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: gd()("CharacterPresetCard", {
                        CharacterPresetCardActive: Wd,
                        CharacterPresetCardTryingOn: Nd
                      }),
                      onClick: () => {
                        if (pd) ! function(dd) {
                          JJ(dd) ? Ed({}) : Ed({
                            ...dd
                          })
                        }(kd);
                        else {
                          Object.keys(Td).length > 0 && Ed({});
                          const dd = Object.entries(kd);
                          for (const [Jd, kd] of dd) dJ(Jd, kd, !1), Od.setPlayerCosmetics(Jd, kd);
                          if (null !== Pd.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [Jd, kd] of dd) Pd.gameBridge.send("updateMyCosmetic", {
                              np: Jd,
                              Up: kd
                            });
                          else xd.d.updateCosmetics(Od, dd.map((dd => {
                            let [Jd, kd] = dd;
                            return {
                              np: Jd,
                              Up: kd
                            }
                          }))).catch((dd => {
                            console.error("Failed to update cosmetics", dd)
                          }))
                        }
                      },
                      children: [(0, jd.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${Jd}_preview.png)`
                        }
                      }), pd && (0, jd.jsx)(md.e, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, Jd)
                  }))
                })
              }, dd)
            }))]
          }), "emote" === Jd && (0, jd.jsx)(Ud, {
            equippedEmoteIds: (0, Ld.d)(td.current.emote),
            ownedPacks: kJ,
            canBuy: pJ,
            onUpdateLoadout: dd => {
              const Jd = (0, Ld.e)(dd);
              var kd;
              td.current = {
                ...td.current,
                emote: Jd
              }, Od.setPlayerCosmetics("emote", Jd), Sd(), kd = Jd, wd.current = kd, null !== Hd.current && clearTimeout(Hd.current), Hd.current = setTimeout(Ad, 350)
            },
            onEmoteSelected: ud,
            onEquipPreviewSkin: () => {
              ! function(dd, Jd) {
                for (const kd of Cd.x) "cape" !== kd && "nameColour" !== kd && "emote" !== kd && dd(kd, "skin" === kd ? "skin_preview" : `${kd}_none`, !1);
                Jd()
              }(dJ, Sd)
            }
          }), "characters" !== Jd && "emote" !== Jd && (0, jd.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, oJ.map((dd => {
              const Jd = gJ.get(dd);
              return (0, jd.jsx)(nd, {
                pack: dd,
                ownedPacks: kJ,
                children: Jd.map((Jd => {
                  var pd;
                  let {
                    groupName: Nd,
                    cosmetics: Wd,
                    showSwatch: Pd
                  } = Jd;
                  const Zd = Nd ? null === (pd = sd.d[dd].colourGroups) || void 0 === pd ? void 0 : pd[Nd] : void 0,
                    Cd = `${dd}_${kd}_${Nd}`;
                  return (0, jd.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [Pd && Zd && (0, jd.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...Zd.colours.map(((dd, Jd) => ({
                        color: dd,
                        index: Jd
                      })))].sort(((dd, Jd) => dd.color.order - Jd.color.order)).map((Jd => {
                        var pd;
                        let {
                          color: Wd,
                          index: Pd
                        } = Jd;
                        return (0, jd.jsx)("div", {
                          className: gd()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (pd = cd[Cd]) && void 0 !== pd ? pd : (0, sd.i)(Zd.colours)) === Pd
                          }),
                          style: {
                            backgroundColor: `rgb(${Wd.rbg.join(",")})`
                          },
                          onClick: () => {
                            var Jd;
                            hd((dd => ({
                              ...dd,
                              [Cd]: Pd
                            })));
                            const pd = Td[kd],
                              Wd = pd ? (0, ld.h)(kd, pd) : null,
                              Zd = (null === Wd || void 0 === Wd ? void 0 : Wd.cosmeticPack) === dd,
                              gd = Zd ? pd : td.current[kd],
                              Kd = Zd ? Wd : (0, ld.h)(kd, gd);
                            if ((null === Kd || void 0 === Kd ? void 0 : Kd.cosmeticPack) !== dd) return;
                            if ((null !== (Jd = null === Kd || void 0 === Kd ? void 0 : Kd.colourGroup) && void 0 !== Jd ? Jd : null) !== Nd) return;
                            const od = (0, ld.g)(gd);
                            if (od) {
                              const dd = `${kd}_${od[0]}_${Pd}`;
                              Zd ? Ed((Jd => ({
                                ...Jd,
                                [kd]: dd
                              }))) : dJ(kd, dd, !0)
                            }
                          }
                        }, Wd.rbg.join())
                      }))
                    }), Wd.map((dd => {
                      const Jd = dd === td.current[kd],
                        pd = Td[kd] === dd,
                        Nd = Xd(kd, dd, kJ);
                      let Wd = !0;
                      return Nd || Jd || ("cape" !== kd || (0, qd.Sd)(Od.getPlayerRanks(), dd)) && ("nameColour" !== kd || Od.playerHasRank("super")) || (Wd = !1), (0, jd.jsxs)("div", {
                        className: gd()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: Jd && !pd,
                          TryingOnCharCustomPartWrapper: pd,
                          DisabledCharCustomPartWrapper: !Wd,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === kd
                        }),
                        onClick: () => {
                          if (Wd)
                            if (Nd) Ed((Jd => {
                              if (Jd[kd] === dd) {
                                const dd = {
                                  ...Jd
                                };
                                return delete dd[kd], dd
                              }
                              return {
                                ...Jd,
                                [kd]: dd
                              }
                            }));
                            else {
                              var Jd;
                              if (Td[kd] && Ed((dd => {
                                  const Jd = {
                                    ...dd
                                  };
                                  return delete Jd[kd], Jd
                                })), dd === td.current[kd]) return;
                              null !== (Jd = zd.current) && void 0 !== Jd && Jd.isReady() && dJ(kd, dd, !0)
                            }
                        },
                        children: ["profileEffect" === kd ? (0, jd.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, jd.jsx)(Yd.f, {
                            playerSocialPreview: (0, Fd.b)(dd, {
                              name: Od.getPlayerName(),
                              cosmetics: Od.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, jd.jsx)("div", {
                          className: gd()("CharCustomPart", {
                            PixelatedImage: "cape" === kd
                          }),
                          style: (0, ld.h)(kd, dd).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,ld.h)(kd,dd).previewTex}.png)`
                          } : {
                            backgroundColor: Kd.m[dd]
                          }
                        }), Nd && (0, jd.jsx)(md.e, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, dd)
                    }))]
                  }, null !== Nd && void 0 !== Nd ? Nd : "ungrouped")
                }))
              }, dd)
            }))]
          }), (0, jd.jsx)(Bd.CharacterPreview, {
            ref: zd,
            forcedCosmetics: Td,
            HC: rd.id,
            emotePlaySeq: rd.seq,
            onReady: () => {
              for (const dd of Cd.x) dJ(dd, td.current[dd], !1)
            }
          })]
        })]
      })
    }))
  },
  41253: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      CharacterPreview: () => od
    });
    var pd = kd(56),
      Nd = kd(2615),
      Wd = kd(1260),
      Pd = kd(8734),
      Zd = kd(9272),
      gd = kd(3519),
      Cd = kd(1103);
    const Kd = .6 * Math.PI,
      od = (0, pd.memo)((0, pd.forwardRef)((function(dd, Jd) {
        let {
          onReady: kd,
          onDrawn: od,
          owner: ld = "other",
          framing: Qd = "player",
          forcedCosmetics: Ld,
          HC: Od,
          emotePlaySeq: ed,
          turntableFromYaw: Rd = null
        } = dd;
        const Id = (0, pd.useRef)(null),
          {
            width: Gd,
            height: vd
          } = (0, Nd.c)(Id),
          xd = (0, pd.useRef)(null),
          qd = (0, pd.useRef)({}),
          Bd = (0, pd.useRef)({}),
          [sd, ad] = (0, pd.useState)(!1),
          Md = (0, pd.useRef)(kd);
        Md.current = kd;
        const Fd = (0, pd.useRef)(od);
        Fd.current = od;
        const Yd = (0, pd.useRef)(null),
          md = (0, pd.useRef)(!1),
          bd = (0, pd.useRef)(!1),
          Sd = (0, pd.useCallback)((() => {
            const dd = xd.current;
            if (!dd || !Fd.current || md.current || !bd.current) return;
            const Jd = {};
            Yd.current = Jd, queueMicrotask((() => {
              if (Yd.current !== Jd) return;
              const kd = Promise.all(Wd.x.map((Jd => dd.untilDrawn(Jd)))).catch((dd => {
                  console.error("Failed to draw the character preview", dd)
                })),
                pd = new Promise((dd => {
                  setTimeout(dd, 1e4)
                }));
              Promise.race([kd, pd]).then((() => {
                var kd;
                xd.current !== dd || Yd.current !== Jd || md.current || (md.current = !0, null === (kd = Fd.current) || void 0 === kd || kd.call(Fd))
              }))
            }))
          }), []);
        return (0, pd.useImperativeHandle)(Jd, (() => {
          const dd = (dd, Jd) => {
            var kd;
            (qd.current[dd] = Jd, null !== Ld && void 0 !== Ld && Ld[dd]) || (null === (kd = xd.current) || void 0 === kd || kd.setCosmetic(dd, Jd), Sd())
          };
          return {
            updateCosmetic: dd,
            setAllCosmetics(Jd) {
              for (const pd of Wd.x) {
                var kd;
                dd(pd, null !== (kd = Jd[pd]) && void 0 !== kd ? kd : (0, Pd.b)(pd))
              }
            },
            isReady() {
              var dd, Jd;
              return null !== (dd = null === (Jd = xd.current) || void 0 === Jd ? void 0 : Jd.isReady()) && void 0 !== dd && dd
            },
            resetCamera() {
              var dd;
              null === (dd = xd.current) || void 0 === dd || dd.resetCamera()
            },
            setOrbit(dd) {
              var Jd;
              null === (Jd = xd.current) || void 0 === Jd || Jd.setOrbit(dd)
            },
            async ensureReadyForCapture(dd) {
              var Jd;
              await (null === (Jd = xd.current) || void 0 === Jd ? void 0 : Jd.untilDrawn(dd))
            },
            getDevTools() {
              var dd;
              return null !== (dd = xd.current) && void 0 !== dd && dd.isReady() ? xd.current.dev : null
            }
          }
        }), [Ld, Sd]), (0, pd.useEffect)((() => {
          const dd = gd.e.register(ld),
            Jd = Zd.j.openCharacter(Id.current, Qd);
          xd.current = Jd;
          let kd = !0;
          return Jd.ready.then((() => {
            kd && (ad(!0), Md.current())
          })).catch((dd => {
            console.error("Failed to set up the character preview", dd)
          })), () => {
            kd = !1, dd(), Jd.resetCamera(), Jd.close(), xd.current = null
          }
        }), []), (0, pd.useEffect)((() => {
          Gd <= 0 || vd <= 0 || xd.current.resize(Gd, vd)
        }), [Gd, vd]), (0, pd.useEffect)((() => {
          if (!sd) return;
          const dd = Bd.current;
          for (const Jd of Wd.x) {
            const kd = null === Ld || void 0 === Ld ? void 0 : Ld[Jd],
              pd = dd[Jd];
            kd && kd !== pd ? xd.current.setCosmetic(Jd, kd) : !kd && pd && qd.current[Jd] && xd.current.setCosmetic(Jd, qd.current[Jd])
          }
          Bd.current = {
            ...Ld
          }, bd.current = !0, Sd()
        }), [Ld, sd, Sd]), (0, pd.useEffect)((() => {
          sd && xd.current.playEmote(null !== Od && void 0 !== Od ? Od : null)
        }), [Od, ed, sd]), (0, pd.useEffect)((() => {
          if (!sd || null === Rd) return;
          const dd = xd.current,
            {
              pitch: Jd,
              radius: kd
            } = Zd.b[Qd];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return dd.setOrbit({
            yaw: Rd + Kd,
            pitch: Jd,
            radius: kd
          }), () => {
            dd.resetCamera()
          };
          const pd = performance.now();
          let Nd = 0;
          const Wd = Pd => {
            dd.setOrbit({
              yaw: Rd + (Pd - pd) / 6e3 * 2 * Math.PI,
              pitch: Jd,
              radius: kd
            }), Nd = requestAnimationFrame(Wd)
          };
          return Nd = requestAnimationFrame(Wd), () => {
            cancelAnimationFrame(Nd), dd.resetCamera()
          }
        }), [sd, Rd]), (0, Cd.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Id
        })
      })))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);