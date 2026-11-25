export const id = 220;
export const ids = [220, 296];
export const modules = {
  41513: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      CharacterCustomisationUI: () => UE
    });
    var su = ju(58),
      Uu = ju(3179),
      Zu = ju(1178),
      Xu = ju(1105),
      lu = ju.n(Xu),
      qu = ju(1298),
      fu = ju(628),
      Cu = ju(1244),
      bu = ju(2329),
      cu = ju(1614),
      Nu = ju(2690);
    const Ou = qu.u.filter((uu => !cu.g.includes(uu)));

    function Yu(uu, Eu) {
      return Ou.includes(uu) && "string" === typeof Eu && (0, Nu.e)(uu, Eu)
    }

    function hu(uu) {
      const Eu = {};
      for (const ju of Ou) {
        const su = uu[ju];
        void 0 !== su && Yu(ju, su) && (Eu[ju] = su)
      }
      return Eu
    }

    function Du(uu) {
      return 0 === Object.keys(uu).length
    }

    function gu(uu, Eu) {
      return Object.entries(uu).every((uu => {
        let [ju, su] = uu;
        return Eu[ju] === su
      }))
    }
    var Mu = ju(2338),
      eu = ju(3261),
      Gu = ju(2027),
      pu = ju(1506),
      wu = ju(2374),
      Ju = ju(22),
      du = ju(2820),
      au = ju(1559),
      Pu = ju(1183),
      ou = ju(1906);
    class ku {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(uu) {
        null !== uu && uu !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = uu)
      }
      isFor(uu) {
        return null === this.accountId || this.accountId === uu
      }
      overlay(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return uu.map(((uu, ju) => {
          var su, Uu;
          return null !== (su = null !== (Uu = this.slots.get(ju)) && void 0 !== Uu ? Uu : Eu.get(ju)) && void 0 !== su ? su : uu
        }))
      }
    }
    class mu extends du.b {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ku;
        super("saved outfits", (async Eu => {
          const ju = uu.isFor(Eu.whamm),
            su = new Map(uu.slots),
            Uu = await au.b.getSavedOutfits(Eu);
          return ju ? uu.overlay(Uu, su) : Uu
        })), this.unsaved = uu, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(uu, Eu) {
        var ju, su;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(uu)) || this.unsaved.before.set(uu, null !== (ju = null === (su = this.getState().data) || void 0 === su ? void 0 : su[uu]) && void 0 !== ju ? ju : {});
        this.unsaved.slots.set(uu, Eu), this.update((ju => ju.map(((ju, su) => su === uu ? Eu : ju)))), this.sending || this.sendUnsaved()
      }
      clear(uu) {
        this.save(uu, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let uu = !1;
        for (; this.unsaved.slots.size > 0;) {
          const ju = new Map(this.unsaved.slots);
          let su = this.getState().accountId;
          try {
            const uu = await Pu.userContextManager.getCurrentUserContext();
            if (su = uu.whamm, this.unsaved.moveTo(uu.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: Eu,
              data: Uu
            } = this.getState();
            let Zu = Uu;
            Eu === uu.whamm && null !== Zu || (Zu = this.unsaved.overlay(await au.b.getSavedOutfits(uu)), this.refresh()), await au.b.setSavedOutfits(uu, Zu), this.unsaved.isFor(uu.whamm) && Zu.forEach(((uu, Eu) => {
              const su = this.unsaved.slots.get(Eu);
              void 0 === su || su === ju.get(Eu) ? this.unsaved.before.delete(Eu) : this.unsaved.before.set(Eu, uu)
            }))
          } catch (Eu) {
            if (console.error("Failed to save outfits", Eu), this.getState().accountId === su && [...this.unsaved.slots].every((uu => {
                let [Eu, su] = uu;
                return ju.get(Eu) === su
              }))) {
              const Eu = [...ju.values()].every(Du);
              ou.f.showMessage({
                translationKey: Eu ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const su = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((uu => uu.map(((uu, Eu) => {
                var ju;
                return null !== (ju = su.get(Eu)) && void 0 !== ju ? ju : uu
              })))), uu = !0
            }
          }
          for (const [uu, Eu] of ju) this.unsaved.slots.get(uu) === Eu && this.unsaved.slots.delete(uu)
        }
        this.sending = !1, uu && this.refresh()
      }
    }
    const vu = new mu;
    var Ku = ju(349),
      Vu = ju(41520),
      ru = ju(1611),
      Qu = ju(2440),
      iu = ju(3175),
      Wu = ju(2260),
      Su = ju(2716),
      Iu = ju(1116);
    ju(34583), ju(3269);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var Fu = ju(2380),
      Bu = ju(1419),
      Lu = ju(2479),
      tu = ju(1405),
      xu = ju(1154);

    function Tu(uu) {
      let {
        wornOutfit: Eu,
        onApply: ju,
        onOverwrite: Uu,
        onDelete: Xu
      } = uu;
      const {
        t: qu
      } = (0, Cu.A)(), {
        accountId: fu,
        data: bu
      } = (0, du.e)(vu, !1), {
        userContext: cu
      } = (0, Zu.c)();
      async function Nu(uu, Eu) {
        const ju = await tu.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: su,
            data: Uu
          } = vu.getState();
        var Zu, lu;
        !0 === ju && su === fu && null !== Uu && (gu(Zu = Uu[uu], lu = Eu) && gu(lu, Zu)) && (vu.clear(uu), Xu(uu))
      }
      return (0, su.useEffect)((() => {
        vu.ensureLoaded()
      }), []), null === bu || fu !== cu.whamm ? null : (0, xu.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, xu.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, xu.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: qu("homePage:myOutfits")
          })
        }), (0, xu.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: bu.map(((uu, su) => {
            const Zu = Du(uu);
            return (0, xu.jsxs)("div", {
              className: lu()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !Zu
              }),
              children: [(0, xu.jsxs)("div", {
                ...(0, pu.ib)(),
                role: Zu ? "button" : "link",
                "data-pad-focusable": !0,
                className: lu()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: Zu,
                  CharacterPresetCardActive: !Zu && gu(uu, Eu)
                }),
                onClick: () => {
                  Zu ? vu.save(su, Eu) : ju(uu)
                },
                children: [Zu && (0, xu.jsxs)(xu.Fragment, {
                  children: [(0, xu.jsx)(Iu.e, {
                    name: "plus"
                  }), qu("homePage:saveOutfit")]
                }), !Zu && (0, xu.jsxs)(xu.Fragment, {
                  children: [(0, xu.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, xu.jsx)(Lu.d, {
                      cosmetics: uu
                    })
                  }), (0, xu.jsx)(pu.$, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      gu(Eu, uu) || (vu.save(su, Eu), Uu(su, uu))
                    },
                    children: qu("general:save")
                  })]
                })]
              }), !Zu && (0, xu.jsx)(pu.R, {
                className: "SavedOutfitDeleteButton",
                ariaLabel: qu("general:delete"),
                onClick: () => {
                  Nu(su, uu)
                },
                children: (0, xu.jsx)(Iu.e, {
                  name: "trash-can"
                })
              })]
            }, su)
          }))
        })]
      })
    }
    var Hu = ju(36774),
      Au = ju(2684),
      nu = ju(2686);

    function yu(uu, Eu, ju) {
      return null !== uu && !(0, Au.i)(nu.c, Eu, ju, uu.collected, uu.ownedPacks)
    }

    function zu(uu) {
      let {
        locked: Eu,
        children: ju
      } = uu;
      return Eu ? (0, xu.jsx)(Ru, {
        children: ju
      }) : ju
    }

    function Ru(uu) {
      var Eu;
      let {
        children: ju
      } = uu;
      const {
        t: su
      } = (0, Cu.A)(), {
        userContext: Uu
      } = (0, Zu.c)(), Xu = null !== (Eu = Uu.dailyDrop) && void 0 !== Eu && Eu.hidden ? su("dailyDrop:lockedFromHidden") : su("dailyDrop:lockedFrom");
      return (0, xu.jsx)(Bu.e, {
        tooltipInner: (0, xu.jsx)(xu.Fragment, {
          children: Xu
        }),
        children: ju
      })
    }

    function uE(uu, Eu, ju) {
      return (0, bu.n)(uu, Eu).purchasable && !(0, Qu.p)(uu, Eu, ju)
    }

    function EE(uu, Eu) {
      return Object.entries(uu).some((uu => {
        let [ju, su] = uu;
        return uE(ju, su, Eu)
      }))
    }

    function jE(uu) {
      var Eu;
      let {
        pack: ju,
        ownedPacks: su,
        showStoreLink: Uu = !1,
        children: Zu
      } = uu;
      const {
        t: Xu
      } = (0, Cu.A)(), qu = ru.e[ju], fu = qu.purchasable && !su.includes(ju) && ru.x.includes(ju), bu = iu.k[ju];
      return (0, xu.jsxs)("div", {
        className: lu()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: fu
        }),
        children: [bu && (0, xu.jsx)(bu, {}), (0, xu.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, xu.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (Eu = qu.displayName) && void 0 !== Eu ? Eu : ju
          }), (fu || Uu) && (0, xu.jsxs)(pu.J, {
            onClick: () => {
              fu ? (0, iu.h)(ju) : (0, wu.m)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, xu.jsx)(Iu.e, {
              name: "store"
            }), " ", Xu("general:viewInShop")]
          })]
        }), fu && "bee" === ju && (0, xu.jsx)(iu.d, {}), Zu]
      })
    }

    function sE(uu) {
      let {
        equippedEmoteIds: Eu,
        ownedPacks: ju,
        canBuy: su,
        onUpdateLoadout: Uu,
        onEmoteSelected: Zu,
        onEquipPreviewSkin: Xu
      } = uu;
      const {
        t: fu
      } = (0, Cu.A)(), cu = new Set(Eu), Nu = new Map, Ou = Object.keys(bu.g.emote).sort(((uu, Eu) => {
        var ju, su, Uu, Zu;
        return (null !== (ju = null === (su = (0, bu.m)("emote", uu)) || void 0 === su ? void 0 : su.clientIdx) && void 0 !== ju ? ju : 0) - (null !== (Uu = null === (Zu = (0, bu.m)("emote", Eu)) || void 0 === Zu ? void 0 : Zu.clientIdx) && void 0 !== Uu ? Uu : 0)
      })).filter((uu => {
        const Eu = (0, bu.n)("emote", uu),
          Uu = (0, Qu.p)("emote", uu, ju);
        return !(Eu.purchasable && !Uu && !su) && (Eu.clientSelectable || Uu)
      }));
      for (const lu of Ou) {
        const uu = (0, bu.m)("emote", lu).cosmeticPack;
        Nu.has(uu) || Nu.set(uu, []), Nu.get(uu).push(lu)
      }
      const Yu = Array.from(Nu.keys());
      return (0, xu.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, xu.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, xu.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: fu("emotes:equippedCount", {
              count: Eu.length,
              max: qu.n
            })
          }), (0, xu.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: fu("emotes:loadoutHint")
          })]
        }), Yu.map((uu => {
          const su = Nu.get(uu);
          return (0, xu.jsx)(jE, {
            pack: uu,
            ownedPacks: ju,
            children: (0, xu.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: su.map((uu => {
                var su;
                const Xu = Eu.indexOf(uu),
                  Cu = -1 !== Xu,
                  bu = Eu.length >= qu.n,
                  Nu = uE("emote", uu, ju),
                  Ou = Nu || !Cu && bu,
                  Yu = (0, Mu.k)(uu);
                return (0, xu.jsxs)("div", {
                  className: lu()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Cu
                  }),
                  onClick: () => {
                    Zu(uu)
                  },
                  children: [(0, xu.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, xu.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${uu}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, xu.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (su = null === Yu || void 0 === Yu ? void 0 : Yu.displayName) && void 0 !== su ? su : uu
                    })]
                  }), (0, xu.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Cu && (0, xu.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: Xu + 1
                    }), Nu && (0, xu.jsx)(Iu.e, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, xu.jsx)(Bu.e, {
                      tooltipInner: (0, xu.jsx)(xu.Fragment, {
                        children: fu(Cu ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, xu.jsx)("div", {
                        className: lu()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: Ou,
                          EmoteCustomPartToggleEquipped: Cu
                        }),
                        onClick: ju => {
                          ju.stopPropagation(), Ou || function(uu) {
                            cu.has(uu) ? Uu(Eu.filter((Eu => Eu !== uu))) : Eu.length >= qu.n || Uu([...Eu, uu])
                          }(uu)
                        },
                        children: (0, xu.jsx)(Iu.e, {
                          name: Cu ? "minus" : "plus",
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
    const UE = (0, su.memo)((function(uu) {
      let {
        selectedTab: Eu
      } = uu;
      const ju = "characters" === Eu ? "skin" : Eu,
        {
          t: Xu
        } = (0, Cu.A)(),
        {
          userContext: Ou,
          isUserContextUpdating: Yu
        } = (0, Zu.c)(),
        Du = (0, Uu.b)(),
        {
          gameState: Mu
        } = (0, Ju.l)(["gameState"]),
        [du, au] = (0, su.useState)({}),
        [Pu, ou] = (0, su.useState)({}),
        [ku, mu] = (0, su.useState)(null),
        {
          previewEmote: iu,
          triggerEmote: Bu
        } = (0, eu.d)(),
        Lu = (0, su.useRef)(qu.u.reduce(((uu, Eu) => (uu[Eu] = (0, Nu.b)(Eu), uu)), {})),
        tu = (0, su.useRef)(!1),
        Au = (0, su.useRef)(null),
        nu = (0, su.useRef)(null),
        Ru = (0, su.useRef)(null);

      function UE() {
        null !== nu.current && (clearTimeout(nu.current), nu.current = null);
        const uu = Ru.current;
        null !== uu && (Ru.current = null, (0, Hu.c)(Ou, [
          ["emote", uu]
        ]))
      }

      function ZE(uu, Eu, ju) {
        var su, Uu, Zu;
        Lu.current = {
          ...Lu.current,
          [uu]: Eu
        }, Du(), ju && ((0, Hu.c)(Ou, [
          [uu, Eu]
        ]), mu(null));
        const Xu = (0, bu.m)(uu, Eu);
        if (null !== Xu && void 0 !== Xu && Xu.colourGroup && null !== (su = ru.e[Xu.cosmeticPack].colourGroups) && void 0 !== su && null !== (Uu = su[Xu.colourGroup]) && void 0 !== Uu && Uu.showSwatchSelector) {
          const ju = (0, bu.j)(Eu);
          ju && ou((Eu => ({
            ...Eu,
            [`${Xu.cosmeticPack}_${uu}_${Xu.colourGroup}`]: parseInt(ju[1])
          })))
        }
        null !== (Zu = Au.current) && void 0 !== Zu && Zu.isReady() && Au.current.updateCosmetic(uu, Eu)
      }

      function XE(uu) {
        au((Eu => {
          const ju = {
            ...Eu
          };
          return delete ju[uu], ju
        }))
      }

      function lE(uu, Eu) {
        let {
          undoable: ju
        } = Eu;
        Object.keys(du).length > 0 && au({});
        const su = Object.entries(uu).filter((uu => {
          let [Eu, ju] = uu;
          return Lu.current[Eu] !== ju && !uE(Eu, ju, qE) && !yu(fE, Eu, ju)
        }));
        ju ? su.length > 0 && mu({
          kind: "worn",
          outfit: hu(Lu.current)
        }) : mu(null);
        for (const [Uu, Zu] of su) ZE(Uu, Zu, !1);
        su.length > 0 && (0, Hu.c)(Ou, su)
      }(0, Gu.b)("cosmeticsUpdated", (uu => {
        let Eu = !1;
        for (const {
            local: ju,
            iZ: su,
            WZ: Uu
          }
          of uu) {
          if (!ju) return;
          Eu = !0, tu.current || ZE(su, Uu, !1), Du()
        }
        Eu && (tu.current = !0)
      })), (0, su.useEffect)((() => {
        if (!Yu) {
          for (const [uu, Eu] of Object.entries(Ou.getPlayerCosmetics())) ZE(uu, Eu, !1);
          Du()
        }
      }), [Yu]), (0, su.useEffect)((() => () => {
        UE()
      }), []);
      const qE = Ou.getOwnedCosmeticPacks(),
        fE = function(uu, Eu) {
          return null === uu ? null : {
            collected: new Set(uu.collected),
            ownedPacks: Eu
          }
        }(Ou.dailyDrop, qE),
        CE = (0, Fu.usePurchasesAllowed)(),
        bE = Object.keys(bu.g[ju]).filter((uu => {
          const Eu = (0, bu.n)(ju, uu),
            su = (0, Qu.p)(ju, uu, qE);
          return !(Eu.purchasable && !su && !CE) && (Eu.clientSelectable || su)
        })).sort(((uu, Eu) => {
          var su, Uu, Zu, Xu;
          return (null !== (su = null === (Uu = (0, bu.m)(ju, uu)) || void 0 === Uu ? void 0 : Uu.clientIdx) && void 0 !== su ? su : 0) - (null !== (Zu = null === (Xu = (0, bu.m)(ju, Eu)) || void 0 === Xu ? void 0 : Xu.clientIdx) && void 0 !== Zu ? Zu : 0)
        })),
        cE = new Map;
      for (const su of bE) {
        var NE;
        const uu = null === (NE = (0, bu.m)(ju, su)) || void 0 === NE ? void 0 : NE.cosmeticPack;
        cE.has(uu) || cE.set(uu, []), cE.get(uu).push(su)
      }
      const OE = function(uu, Eu) {
          const ju = new Set,
            su = new Set;
          for (const [Uu, Zu] of Object.entries(bu.g[uu])) {
            if (void 0 === Zu.colourGroup) continue;
            const Xu = `${Zu.cosmeticPack}_${Zu.colourGroup}`;
            (uE(uu, Uu, Eu) ? su : ju).add(Xu)
          }
          return new Set([...ju].filter((uu => su.has(uu))))
        }(ju, qE),
        YE = new Map;
      for (const [su, Uu] of cE) {
        const uu = [],
          Eu = new Map;
        for (const su of Uu) {
          var hE, DE;
          const Uu = null !== (hE = null === (DE = (0, bu.m)(ju, su)) || void 0 === DE ? void 0 : DE.colourGroup) && void 0 !== hE ? hE : null;
          Eu.has(Uu) || (Eu.set(Uu, []), uu.push(Uu)), Eu.get(Uu).push(su)
        }
        const Zu = uu.map((uu => {
          var Uu;
          const Zu = Eu.get(uu),
            Xu = uu ? null === (Uu = ru.e[su].colourGroups) || void 0 === Uu ? void 0 : Uu[uu] : void 0,
            lu = !0 === (null === Xu || void 0 === Xu ? void 0 : Xu.showSwatchSelector) && !OE.has(`${su}_${uu}`);
          if (lu && Xu) {
            var qu;
            const Eu = null !== (qu = Pu[`${su}_${ju}_${uu}`]) && void 0 !== qu ? qu : (0, ru.l)(Xu.colours);
            return {
              groupName: uu,
              showSwatch: lu,
              cosmetics: Zu.filter((uu => {
                const ju = (0, bu.j)(uu);
                return !ju || Eu.toString() === ju[1].toString()
              }))
            }
          }
          return {
            groupName: uu,
            cosmetics: Zu,
            showSwatch: lu
          }
        }));
        YE.set(su, Zu)
      }
      const gE = Array.from(cE.keys()),
        ME = new Map;
      for (const [su, Uu] of Object.entries(cu.d)) {
        const uu = ru.e[Uu.cosmeticPack],
          Eu = !EE(Uu.cosmetics, qE),
          ju = ru.r.some((uu => (0, ru.i)(uu) === su));
        (uu.clientSelectable || ju || Eu) && ((!uu.purchasable || Eu || CE) && (ME.has(Uu.cosmeticPack) || ME.set(Uu.cosmeticPack, []), ME.get(Uu.cosmeticPack).push([su, Uu])))
      }
      const eE = Array.from(ME.keys());
      return (0, xu.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === ju || "nameColour" === ju) && !Ou.playerHasRank("super") && (0, xu.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, xu.jsx)(Iu.e, {
            name: "bolt"
          }), Xu("homePage:unlockWithSuperRank"), CE && (0, xu.jsx)(pu.p, {
            onClick: () => {
              (0, wu.m)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: Xu("general:getItNow")
          })]
        }), (0, xu.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === Eu && (0, xu.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, xu.jsx)(Tu, {
              wornOutfit: hu(Lu.current),
              onApply: uu => {
                lE(uu, {
                  undoable: !0
                })
              },
              onOverwrite: (uu, Eu) => {
                mu({
                  kind: "slot",
                  slot: uu,
                  outfit: Eu
                })
              },
              onDelete: uu => {
                mu((Eu => "slot" === (null === Eu || void 0 === Eu ? void 0 : Eu.kind) && Eu.slot === uu ? null : Eu))
              }
            }), eE.map((uu => {
              const Eu = ME.get(uu);
              return (0, xu.jsx)(jE, {
                pack: uu,
                ownedPacks: qE,
                showStoreLink: !ru.t.includes(uu) && Eu.some((uu => {
                  let [, {
                    cosmetics: Eu
                  }] = uu;
                  return EE(Eu, qE)
                })),
                children: (0, xu.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: Eu.map((uu => {
                    let [Eu, {
                      cosmetics: ju
                    }] = uu;
                    const su = EE(ju, qE),
                      Uu = !su && function(uu, Eu) {
                        return Object.entries(Eu).some((Eu => {
                          let [ju, su] = Eu;
                          return yu(uu, ju, su)
                        }))
                      }(fE, ju),
                      Zu = su || Uu,
                      Xu = gu(ju, du),
                      qu = !Xu && gu(ju, Lu.current);
                    return (0, xu.jsx)(zu, {
                      locked: Uu,
                      children: (0, xu.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: lu()("CharacterPresetCard", {
                          CharacterPresetCardActive: qu,
                          CharacterPresetCardTryingOn: Xu
                        }),
                        onClick: () => {
                          Zu ? function(uu) {
                            gu(uu, du) ? au({}) : au({
                              ...uu
                            })
                          }(ju) : lE(ju, {
                            undoable: !0
                          })
                        },
                        children: [(0, xu.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(/textures/charSkins/previews/character_${Eu}_preview.png)`
                          }
                        }), Zu && (0, xu.jsx)(Iu.e, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, Eu)
                  }))
                })
              }, uu)
            }))]
          }), "emote" === Eu && (0, xu.jsx)(sE, {
            equippedEmoteIds: (0, Nu.f)(Lu.current.emote),
            ownedPacks: qE,
            canBuy: CE,
            onUpdateLoadout: uu => {
              const Eu = (0, Nu.j)(uu);
              var ju;
              Lu.current = {
                ...Lu.current,
                emote: Eu
              }, Ou.setPlayerCosmetics("emote", Eu), Du(), ju = Eu, Ru.current = ju, null !== nu.current && clearTimeout(nu.current), nu.current = setTimeout(UE, 350)
            },
            onEmoteSelected: Bu,
            onEquipPreviewSkin: () => {
              ! function(uu, Eu) {
                for (const ju of qu.u) "cape" !== ju && "nameColour" !== ju && "emote" !== ju && uu(ju, "skin" === ju ? "skin_preview" : `${ju}_none`, !1);
                Eu()
              }(ZE, Du)
            }
          }), "characters" !== Eu && "emote" !== Eu && (0, xu.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, gE.map((uu => {
              const Eu = YE.get(uu);
              return (0, xu.jsx)(jE, {
                pack: uu,
                ownedPacks: qE,
                children: Eu.map((Eu => {
                  var su;
                  let {
                    groupName: Uu,
                    cosmetics: Zu,
                    showSwatch: Xu
                  } = Eu;
                  const qu = Uu ? null === (su = ru.e[uu].colourGroups) || void 0 === su ? void 0 : su[Uu] : void 0,
                    Cu = `${uu}_${ju}_${Uu}`;
                  return (0, xu.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [Xu && qu && (0, xu.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...qu.colours.map(((uu, Eu) => ({
                        color: uu,
                        index: Eu
                      })))].sort(((uu, Eu) => uu.color.order - Eu.color.order)).map((Eu => {
                        var su;
                        let {
                          color: Zu,
                          index: Xu
                        } = Eu;
                        return (0, xu.jsx)("div", {
                          className: lu()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (su = Pu[Cu]) && void 0 !== su ? su : (0, ru.l)(qu.colours)) === Xu
                          }),
                          style: {
                            backgroundColor: `rgb(${Zu.rbg.join(",")})`
                          },
                          onClick: () => {
                            var Eu;
                            ou((uu => ({
                              ...uu,
                              [Cu]: Xu
                            })));
                            const su = du[ju],
                              Zu = su ? (0, bu.m)(ju, su) : null,
                              lu = (null === Zu || void 0 === Zu ? void 0 : Zu.cosmeticPack) === uu,
                              qu = lu ? su : Lu.current[ju],
                              fu = lu ? Zu : (0, bu.m)(ju, qu);
                            if ((null === fu || void 0 === fu ? void 0 : fu.cosmeticPack) !== uu) return;
                            if ((null !== (Eu = null === fu || void 0 === fu ? void 0 : fu.colourGroup) && void 0 !== Eu ? Eu : null) !== Uu) return;
                            const cu = (0, bu.j)(qu);
                            if (cu) {
                              const uu = `${ju}_${cu[0]}_${Xu}`;
                              uE(ju, uu, qE) || yu(fE, ju, uu) ? au((Eu => ({
                                ...Eu,
                                [ju]: uu
                              }))) : (lu && XE(ju), ZE(ju, uu, !0))
                            }
                          }
                        }, Zu.rbg.join())
                      }))
                    }), Zu.map((uu => {
                      const Eu = uu === Lu.current[ju],
                        su = du[ju] === uu,
                        Uu = uE(ju, uu, qE),
                        Zu = !Uu && yu(fE, ju, uu),
                        Xu = Uu || Zu;
                      let qu = !0;
                      return Xu || Eu || ("cape" !== ju || (0, Ku.Ud)(Ou.getPlayerRanks(), uu)) && ("nameColour" !== ju || Ou.playerHasRank("super")) || (qu = !1), (0, xu.jsx)(zu, {
                        locked: Zu,
                        children: (0, xu.jsxs)("div", {
                          className: lu()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: Eu && !su,
                            TryingOnCharCustomPartWrapper: su,
                            DisabledCharCustomPartWrapper: !qu,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === ju
                          }),
                          onClick: () => {
                            if (qu)
                              if (Xu) au((Eu => {
                                if (Eu[ju] === uu) {
                                  const uu = {
                                    ...Eu
                                  };
                                  return delete uu[ju], uu
                                }
                                return {
                                  ...Eu,
                                  [ju]: uu
                                }
                              }));
                              else {
                                var Eu;
                                if (du[ju] && XE(ju), uu === Lu.current[ju]) return;
                                null !== (Eu = Au.current) && void 0 !== Eu && Eu.isReady() && ZE(ju, uu, !0)
                              }
                          },
                          children: ["profileEffect" === ju ? (0, xu.jsx)("div", {
                            className: "CharCustomPart CharCustomProfileEffect",
                            children: (0, xu.jsx)(Su.f, {
                              playerSocialPreview: (0, Wu.b)(uu, {
                                name: Ou.getPlayerName(),
                                cosmetics: Ou.getPlayerCosmetics()
                              }),
                              showLocation: !1,
                              opensProfileCard: !1
                            })
                          }) : (0, xu.jsx)("div", {
                            className: lu()("CharCustomPart", {
                              PixelatedImage: "cape" === ju
                            }),
                            style: (0, bu.m)(ju, uu).previewTex ? {
                              backgroundImage: `url(/textures/charSkins/previews/${(0,bu.m)(ju,uu).previewTex}.png)`
                            } : {
                              backgroundColor: fu.s[uu]
                            }
                          }), Xu && (0, xu.jsx)(Iu.e, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, uu)
                    }))]
                  }, null !== Uu && void 0 !== Uu ? Uu : "ungrouped")
                }))
              }, uu)
            }))]
          }), ku && (0, xu.jsxs)(pu.f, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === ku.kind ? lE(ku.outfit, {
                undoable: !1
              }) : (vu.save(ku.slot, ku.outfit), mu(null))
            },
            children: [(0, xu.jsx)(Iu.e, {
              name: "rotate-left"
            }), Xu("general:undo")]
          }), (0, xu.jsx)(Vu.CharacterPreview, {
            ref: Au,
            forcedCosmetics: du,
            Vl: iu.id,
            emotePlaySeq: iu.seq,
            onReady: () => {
              for (const uu of qu.u) ZE(uu, Lu.current[uu], !1)
            }
          })]
        })]
      })
    }))
  },
  41520: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      CharacterPreview: () => bu
    });
    var su = ju(58),
      Uu = ju(2876),
      Zu = ju(1298),
      Xu = ju(2690),
      lu = ju(34583),
      qu = ju(3834),
      fu = ju(1154);
    const Cu = .6 * Math.PI,
      bu = (0, su.memo)((0, su.forwardRef)((function(uu, Eu) {
        let {
          onReady: ju,
          onDrawn: bu,
          owner: cu = "other",
          framing: Nu = "player",
          forcedCosmetics: Ou,
          Vl: Yu,
          emotePlaySeq: hu,
          turntableFromYaw: Du = null
        } = uu;
        const gu = (0, su.useRef)(null),
          {
            width: Mu,
            height: eu
          } = (0, Uu.d)(gu),
          Gu = (0, su.useRef)(null),
          pu = (0, su.useRef)({}),
          wu = (0, su.useRef)({}),
          [Ju, du] = (0, su.useState)(!1),
          au = (0, su.useRef)(ju);
        au.current = ju;
        const Pu = (0, su.useRef)(bu);
        Pu.current = bu;
        const ou = (0, su.useRef)(null),
          ku = (0, su.useRef)(!1),
          mu = (0, su.useRef)(!1),
          vu = (0, su.useCallback)((() => {
            const uu = Gu.current;
            if (!uu || !Pu.current || ku.current || !mu.current) return;
            const Eu = {};
            ou.current = Eu, queueMicrotask((() => {
              if (ou.current !== Eu) return;
              const ju = Promise.all(Zu.u.map((Eu => uu.untilDrawn(Eu)))).catch((uu => {
                  console.error("Failed to draw the character preview", uu)
                })),
                su = new Promise((uu => {
                  setTimeout(uu, 1e4)
                }));
              Promise.race([ju, su]).then((() => {
                var ju;
                Gu.current !== uu || ou.current !== Eu || ku.current || (ku.current = !0, null === (ju = Pu.current) || void 0 === ju || ju.call(Pu))
              }))
            }))
          }), []);
        return (0, su.useImperativeHandle)(Eu, (() => {
          const uu = (uu, Eu) => {
            var ju;
            (pu.current[uu] = Eu, null !== Ou && void 0 !== Ou && Ou[uu]) || (null === (ju = Gu.current) || void 0 === ju || ju.setCosmetic(uu, Eu), vu())
          };
          return {
            updateCosmetic: uu,
            setAllCosmetics(Eu) {
              for (const su of Zu.u) {
                var ju;
                uu(su, null !== (ju = Eu[su]) && void 0 !== ju ? ju : (0, Xu.b)(su))
              }
            },
            isReady() {
              var uu, Eu;
              return null !== (uu = null === (Eu = Gu.current) || void 0 === Eu ? void 0 : Eu.isReady()) && void 0 !== uu && uu
            },
            resetCamera() {
              var uu;
              null === (uu = Gu.current) || void 0 === uu || uu.resetCamera()
            },
            setOrbit(uu) {
              var Eu;
              null === (Eu = Gu.current) || void 0 === Eu || Eu.setOrbit(uu)
            },
            async ensureReadyForCapture(uu) {
              var Eu;
              await (null === (Eu = Gu.current) || void 0 === Eu ? void 0 : Eu.untilDrawn(uu))
            },
            getDevTools() {
              var uu;
              return null !== (uu = Gu.current) && void 0 !== uu && uu.isReady() ? Gu.current.dev : null
            }
          }
        }), [Ou, vu]), (0, su.useEffect)((() => {
          const uu = qu.b.register(cu),
            Eu = lu.k.openCharacter(gu.current, Nu);
          Gu.current = Eu;
          let ju = !0;
          return Eu.ready.then((() => {
            ju && (du(!0), au.current())
          })).catch((uu => {
            console.error("Failed to set up the character preview", uu)
          })), () => {
            ju = !1, uu(), Eu.resetCamera(), Eu.close(), Gu.current = null
          }
        }), []), (0, su.useEffect)((() => {
          Mu <= 0 || eu <= 0 || Gu.current.resize(Mu, eu)
        }), [Mu, eu]), (0, su.useEffect)((() => {
          if (!Ju) return;
          const uu = wu.current;
          for (const Eu of Zu.u) {
            const ju = null === Ou || void 0 === Ou ? void 0 : Ou[Eu],
              su = uu[Eu];
            ju && ju !== su ? Gu.current.setCosmetic(Eu, ju) : !ju && su && pu.current[Eu] && Gu.current.setCosmetic(Eu, pu.current[Eu])
          }
          wu.current = {
            ...Ou
          }, mu.current = !0, vu()
        }), [Ou, Ju, vu]), (0, su.useEffect)((() => {
          Ju && Gu.current.playEmote(null !== Yu && void 0 !== Yu ? Yu : null)
        }), [Yu, hu, Ju]), (0, su.useEffect)((() => {
          if (!Ju || null === Du) return;
          const uu = Gu.current,
            {
              pitch: Eu,
              radius: ju
            } = lu.e[Nu];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return uu.setOrbit({
            yaw: Du + Cu,
            pitch: Eu,
            radius: ju
          }), () => {
            uu.resetCamera()
          };
          const su = performance.now();
          let Uu = 0;
          const Zu = Xu => {
            uu.setOrbit({
              yaw: Du + (Xu - su) / 6e3 * 2 * Math.PI,
              pitch: Eu,
              radius: ju
            }), Uu = requestAnimationFrame(Zu)
          };
          return Uu = requestAnimationFrame(Zu), () => {
            cancelAnimationFrame(Uu), uu.resetCamera()
          }
        }), [Ju, Du]), (0, fu.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: gu
        })
      })))
  },
  36774: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su = ju(1986),
      Uu = ju(1559);
    const Zu = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(uu, Eu) {
        uu !== this.userContext && this.sendHeld(), this.userContext = uu;
        for (const [su, Uu] of Eu) this.pending.set(su, Uu);
        if (null !== this.timer) return;
        const ju = this.lastSentAt + 1100 - Date.now();
        ju <= 0 ? this.send(uu) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), ju), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(uu) {
        const Eu = Array.from(this.pending, (uu => {
          let [Eu, ju] = uu;
          return {
            iZ: Eu,
            WZ: ju
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), Uu.b.updateCosmetics(uu, Eu).catch((uu => {
          console.error("Failed to update cosmetics", uu)
        }))
      }
    };

    function Xu(uu, Eu) {
      for (const [ju, su] of Eu) uu.setPlayerCosmetics(ju, su);
      if (null === su.gameBridge.latest("connectedGame").websocketUrl) Zu.save(uu, Eu);
      else
        for (const [ju, Uu] of Eu) su.gameBridge.send("updateMyCosmetic", {
          iZ: ju,
          WZ: Uu
        })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);