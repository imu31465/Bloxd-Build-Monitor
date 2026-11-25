export const id = 220;
export const ids = [220, 296];
export const modules = {
  41704: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      CharacterCustomisationUI: () => Sb
    });
    var wG = ZG(51),
      SG = ZG(3004),
      LG = ZG(1092),
      yG = ZG(1006),
      kG = ZG.n(yG),
      UG = ZG(1198),
      YG = ZG(580),
      VG = ZG(1151),
      pG = ZG(2222),
      fG = ZG(1509),
      QG = ZG(2537);
    const KG = UG.x.filter((GG => !fG.h.includes(GG)));

    function hG(GG, bG) {
      return KG.includes(GG) && "string" === typeof bG && (0, QG.h)(GG, bG)
    }

    function dG(GG) {
      const bG = {};
      for (const ZG of KG) {
        const wG = GG[ZG];
        void 0 !== wG && hG(ZG, wG) && (bG[ZG] = wG)
      }
      return bG
    }

    function JG(GG) {
      return 0 === Object.keys(GG).length
    }

    function rG(GG, bG) {
      return Object.entries(GG).every((GG => {
        let [ZG, wG] = GG;
        return bG[ZG] === wG
      }))
    }
    var zG = ZG(2228),
      EG = ZG(3083),
      oG = ZG(1945),
      XG = ZG(1393),
      uG = ZG(2264),
      iG = ZG(17),
      CG = ZG(2671),
      WG = ZG(1431),
      mG = ZG(1096),
      IG = ZG(1827);
    class FG {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(GG) {
        null !== GG && GG !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = GG)
      }
      isFor(GG) {
        return null === this.accountId || this.accountId === GG
      }
      overlay(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return GG.map(((GG, ZG) => {
          var wG, SG;
          return null !== (wG = null !== (SG = this.slots.get(ZG)) && void 0 !== SG ? SG : bG.get(ZG)) && void 0 !== wG ? wG : GG
        }))
      }
    }
    class vG extends CG.e {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new FG;
        super("saved outfits", (async bG => {
          const ZG = GG.isFor(bG.whamm),
            wG = new Map(GG.slots),
            SG = await WG.d.getSavedOutfits(bG);
          return ZG ? GG.overlay(SG, wG) : SG
        })), this.unsaved = GG, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(GG, bG) {
        var ZG, wG;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(GG)) || this.unsaved.before.set(GG, null !== (ZG = null === (wG = this.getState().data) || void 0 === wG ? void 0 : wG[GG]) && void 0 !== ZG ? ZG : {});
        this.unsaved.slots.set(GG, bG), this.update((ZG => ZG.map(((ZG, wG) => wG === GG ? bG : ZG)))), this.sending || this.sendUnsaved()
      }
      clear(GG) {
        this.save(GG, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let GG = !1;
        for (; this.unsaved.slots.size > 0;) {
          const ZG = new Map(this.unsaved.slots);
          let wG = this.getState().accountId;
          try {
            const GG = await mG.userContextManager.getCurrentUserContext();
            if (wG = GG.whamm, this.unsaved.moveTo(GG.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: bG,
              data: SG
            } = this.getState();
            let LG = SG;
            bG === GG.whamm && null !== LG || (LG = this.unsaved.overlay(await WG.d.getSavedOutfits(GG)), this.refresh()), await WG.d.setSavedOutfits(GG, LG), this.unsaved.isFor(GG.whamm) && LG.forEach(((GG, bG) => {
              const wG = this.unsaved.slots.get(bG);
              void 0 === wG || wG === ZG.get(bG) ? this.unsaved.before.delete(bG) : this.unsaved.before.set(bG, GG)
            }))
          } catch (bG) {
            if (console.error("Failed to save outfits", bG), this.getState().accountId === wG && [...this.unsaved.slots].every((GG => {
                let [bG, wG] = GG;
                return ZG.get(bG) === wG
              }))) {
              const bG = [...ZG.values()].every(JG);
              IG.g.showMessage({
                translationKey: bG ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const wG = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((GG => GG.map(((GG, bG) => {
                var ZG;
                return null !== (ZG = wG.get(bG)) && void 0 !== ZG ? ZG : GG
              })))), GG = !0
            }
          }
          for (const [GG, bG] of ZG) this.unsaved.slots.get(GG) === bG && this.unsaved.slots.delete(GG)
        }
        this.sending = !1, GG && this.refresh()
      }
    }
    const aG = new vG;
    var cG = ZG(352),
      lG = ZG(41710),
      jG = ZG(1501),
      PG = ZG(2320),
      MG = ZG(2999),
      AG = ZG(2157),
      sG = ZG(2575),
      qG = ZG(1016);
    ZG(34515), ZG(3087);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var nG = ZG(2266),
      gG = ZG(1320),
      eG = ZG(2359),
      RG = ZG(1311),
      TG = ZG(1067);

    function HG(GG) {
      let {
        wornOutfit: bG,
        onApply: ZG,
        onOverwrite: SG,
        onDelete: yG
      } = GG;
      const {
        t: UG
      } = (0, VG.w)(), {
        accountId: YG,
        data: pG
      } = (0, CG.i)(aG, !1), {
        userContext: fG
      } = (0, LG.e)();
      async function QG(GG, bG) {
        const ZG = await RG.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: wG,
            data: SG
          } = aG.getState();
        var LG, kG;
        !0 === ZG && wG === YG && null !== SG && (rG(LG = SG[GG], kG = bG) && rG(kG, LG)) && (aG.clear(GG), yG(GG))
      }
      return (0, wG.useEffect)((() => {
        aG.ensureLoaded()
      }), []), null === pG || YG !== fG.whamm ? null : (0, TG.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, TG.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, TG.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: UG("homePage:myOutfits")
          })
        }), (0, TG.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: pG.map(((GG, wG) => {
            const LG = JG(GG);
            return (0, TG.jsxs)("div", {
              className: kG()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !LG
              }),
              children: [(0, TG.jsxs)("div", {
                ...(0, XG.P)(),
                role: LG ? "button" : "link",
                "data-pad-focusable": !0,
                className: kG()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: LG,
                  CharacterPresetCardActive: !LG && rG(GG, bG)
                }),
                onClick: () => {
                  LG ? aG.save(wG, bG) : ZG(GG)
                },
                children: [LG && (0, TG.jsxs)(TG.Fragment, {
                  children: [(0, TG.jsx)(qG.c, {
                    name: "plus"
                  }), UG("homePage:saveOutfit")]
                }), !LG && (0, TG.jsxs)(TG.Fragment, {
                  children: [(0, TG.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, TG.jsx)(eG.c, {
                      cosmetics: GG
                    })
                  }), (0, TG.jsx)(XG.K, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      rG(bG, GG) || (aG.save(wG, bG), SG(wG, GG))
                    },
                    children: UG("general:save")
                  })]
                })]
              }), !LG && (0, TG.jsx)(XG.C, {
                className: "SavedOutfitDeleteButton",
                ariaLabel: UG("general:delete"),
                onClick: () => {
                  QG(wG, GG)
                },
                children: (0, TG.jsx)(qG.c, {
                  name: "trash-can"
                })
              })]
            }, wG)
          }))
        })]
      })
    }
    var tG = ZG(36724),
      DG = ZG(2524),
      NG = ZG(2533);

    function OG(GG, bG, ZG) {
      return null !== GG && !(0, DG.g)(NG.d, bG, ZG, GG.collected, GG.ownedPacks)
    }

    function xG(GG) {
      let {
        locked: bG,
        children: ZG
      } = GG;
      return bG ? (0, TG.jsx)(BG, {
        children: ZG
      }) : ZG
    }

    function BG(GG) {
      var bG;
      let {
        children: ZG
      } = GG;
      const {
        t: wG
      } = (0, VG.w)(), {
        userContext: SG
      } = (0, LG.e)(), yG = null !== (bG = SG.dailyDrop) && void 0 !== bG && bG.hidden ? wG("dailyDrop:lockedFromHidden") : wG("dailyDrop:lockedFrom");
      return (0, TG.jsx)(gG.h, {
        tooltipInner: (0, TG.jsx)(TG.Fragment, {
          children: yG
        }),
        children: ZG
      })
    }

    function Gb(GG, bG, ZG) {
      return (0, pG.o)(GG, bG).purchasable && !(0, PG.u)(GG, bG, ZG)
    }

    function bb(GG, bG) {
      return Object.entries(GG).some((GG => {
        let [ZG, wG] = GG;
        return Gb(ZG, wG, bG)
      }))
    }

    function Zb(GG) {
      var bG;
      let {
        pack: ZG,
        ownedPacks: wG,
        showStoreLink: SG = !1,
        children: LG
      } = GG;
      const {
        t: yG
      } = (0, VG.w)(), UG = jG.c[ZG], YG = UG.purchasable && !wG.includes(ZG) && jG.q.includes(ZG), pG = MG.h[ZG];
      return (0, TG.jsxs)("div", {
        className: kG()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: YG
        }),
        children: [pG && (0, TG.jsx)(pG, {}), (0, TG.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, TG.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (bG = UG.displayName) && void 0 !== bG ? bG : ZG
          }), (YG || SG) && (0, TG.jsxs)(XG.u, {
            onClick: () => {
              YG ? (0, MG.g)(ZG) : (0, uG.n)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, TG.jsx)(qG.c, {
              name: "store"
            }), " ", yG("general:viewInShop")]
          })]
        }), YG && "bee" === ZG && (0, TG.jsx)(MG.b, {}), LG]
      })
    }

    function wb(GG) {
      let {
        equippedEmoteIds: bG,
        ownedPacks: ZG,
        canBuy: wG,
        onUpdateLoadout: SG,
        onEmoteSelected: LG,
        onEquipPreviewSkin: yG
      } = GG;
      const {
        t: YG
      } = (0, VG.w)(), fG = new Set(bG), QG = new Map, KG = Object.keys(pG.f.emote).sort(((GG, bG) => {
        var ZG, wG, SG, LG;
        return (null !== (ZG = null === (wG = (0, pG.k)("emote", GG)) || void 0 === wG ? void 0 : wG.clientIdx) && void 0 !== ZG ? ZG : 0) - (null !== (SG = null === (LG = (0, pG.k)("emote", bG)) || void 0 === LG ? void 0 : LG.clientIdx) && void 0 !== SG ? SG : 0)
      })).filter((GG => {
        const bG = (0, pG.o)("emote", GG),
          SG = (0, PG.u)("emote", GG, ZG);
        return !(bG.purchasable && !SG && !wG) && (bG.clientSelectable || SG)
      }));
      for (const kG of KG) {
        const GG = (0, pG.k)("emote", kG).cosmeticPack;
        QG.has(GG) || QG.set(GG, []), QG.get(GG).push(kG)
      }
      const hG = Array.from(QG.keys());
      return (0, TG.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, TG.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, TG.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: YG("emotes:equippedCount", {
              count: bG.length,
              max: UG.r
            })
          }), (0, TG.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: YG("emotes:loadoutHint")
          })]
        }), hG.map((GG => {
          const wG = QG.get(GG);
          return (0, TG.jsx)(Zb, {
            pack: GG,
            ownedPacks: ZG,
            children: (0, TG.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: wG.map((GG => {
                var wG;
                const yG = bG.indexOf(GG),
                  VG = -1 !== yG,
                  pG = bG.length >= UG.r,
                  QG = Gb("emote", GG, ZG),
                  KG = QG || !VG && pG,
                  hG = (0, zG.j)(GG);
                return (0, TG.jsxs)("div", {
                  className: kG()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: VG
                  }),
                  onClick: () => {
                    LG(GG)
                  },
                  children: [(0, TG.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, TG.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${GG}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, TG.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (wG = null === hG || void 0 === hG ? void 0 : hG.displayName) && void 0 !== wG ? wG : GG
                    })]
                  }), (0, TG.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [VG && (0, TG.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: yG + 1
                    }), QG && (0, TG.jsx)(qG.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, TG.jsx)(gG.h, {
                      tooltipInner: (0, TG.jsx)(TG.Fragment, {
                        children: YG(VG ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, TG.jsx)("div", {
                        className: kG()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: KG,
                          EmoteCustomPartToggleEquipped: VG
                        }),
                        onClick: ZG => {
                          ZG.stopPropagation(), KG || function(GG) {
                            fG.has(GG) ? SG(bG.filter((bG => bG !== GG))) : bG.length >= UG.r || SG([...bG, GG])
                          }(GG)
                        },
                        children: (0, TG.jsx)(qG.c, {
                          name: VG ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, GG)
              }))
            })
          }, GG)
        }))]
      })
    }
    const Sb = (0, wG.memo)((function(GG) {
      let {
        selectedTab: bG
      } = GG;
      const ZG = "characters" === bG ? "skin" : bG,
        {
          t: yG
        } = (0, VG.w)(),
        {
          userContext: KG,
          isUserContextUpdating: hG
        } = (0, LG.e)(),
        JG = (0, SG.d)(),
        {
          gameState: zG
        } = (0, iG.o)(["gameState"]),
        [CG, WG] = (0, wG.useState)({}),
        [mG, IG] = (0, wG.useState)({}),
        [FG, vG] = (0, wG.useState)(null),
        {
          previewEmote: MG,
          triggerEmote: gG
        } = (0, EG.e)(),
        eG = (0, wG.useRef)(UG.x.reduce(((GG, bG) => (GG[bG] = (0, QG.d)(bG), GG)), {})),
        RG = (0, wG.useRef)(!1),
        DG = (0, wG.useRef)(null),
        NG = (0, wG.useRef)(null),
        BG = (0, wG.useRef)(null);

      function Sb() {
        null !== NG.current && (clearTimeout(NG.current), NG.current = null);
        const GG = BG.current;
        null !== GG && (BG.current = null, (0, tG.d)(KG, [
          ["emote", GG]
        ]))
      }

      function Lb(GG, bG, ZG) {
        var wG, SG, LG;
        eG.current = {
          ...eG.current,
          [GG]: bG
        }, JG(), ZG && ((0, tG.d)(KG, [
          [GG, bG]
        ]), vG(null));
        const yG = (0, pG.k)(GG, bG);
        if (null !== yG && void 0 !== yG && yG.colourGroup && null !== (wG = jG.c[yG.cosmeticPack].colourGroups) && void 0 !== wG && null !== (SG = wG[yG.colourGroup]) && void 0 !== SG && SG.showSwatchSelector) {
          const ZG = (0, pG.g)(bG);
          ZG && IG((bG => ({
            ...bG,
            [`${yG.cosmeticPack}_${GG}_${yG.colourGroup}`]: parseInt(ZG[1])
          })))
        }
        null !== (LG = DG.current) && void 0 !== LG && LG.isReady() && DG.current.updateCosmetic(GG, bG)
      }

      function yb(GG) {
        WG((bG => {
          const ZG = {
            ...bG
          };
          return delete ZG[GG], ZG
        }))
      }

      function kb(GG, bG) {
        let {
          undoable: ZG
        } = bG;
        Object.keys(CG).length > 0 && WG({});
        const wG = Object.entries(GG).filter((GG => {
          let [bG, ZG] = GG;
          return eG.current[bG] !== ZG && !Gb(bG, ZG, Ub) && !OG(Yb, bG, ZG)
        }));
        ZG ? wG.length > 0 && vG({
          kind: "worn",
          outfit: dG(eG.current)
        }) : vG(null);
        for (const [SG, LG] of wG) Lb(SG, LG, !1);
        wG.length > 0 && (0, tG.d)(KG, wG)
      }(0, oG.b)("cosmeticsUpdated", (GG => {
        let bG = !1;
        for (const {
            local: ZG,
            FL: wG,
            vL: SG
          }
          of GG) {
          if (!ZG) return;
          bG = !0, RG.current || Lb(wG, SG, !1), JG()
        }
        bG && (RG.current = !0)
      })), (0, wG.useEffect)((() => {
        if (!hG) {
          for (const [GG, bG] of Object.entries(KG.getPlayerCosmetics())) Lb(GG, bG, !1);
          JG()
        }
      }), [hG]), (0, wG.useEffect)((() => () => {
        Sb()
      }), []);
      const Ub = KG.getOwnedCosmeticPacks(),
        Yb = function(GG, bG) {
          return null === GG ? null : {
            collected: new Set(GG.collected),
            ownedPacks: bG
          }
        }(KG.dailyDrop, Ub),
        Vb = (0, nG.usePurchasesAllowed)(),
        pb = Object.keys(pG.f[ZG]).filter((GG => {
          const bG = (0, pG.o)(ZG, GG),
            wG = (0, PG.u)(ZG, GG, Ub);
          return !(bG.purchasable && !wG && !Vb) && (bG.clientSelectable || wG)
        })).sort(((GG, bG) => {
          var wG, SG, LG, yG;
          return (null !== (wG = null === (SG = (0, pG.k)(ZG, GG)) || void 0 === SG ? void 0 : SG.clientIdx) && void 0 !== wG ? wG : 0) - (null !== (LG = null === (yG = (0, pG.k)(ZG, bG)) || void 0 === yG ? void 0 : yG.clientIdx) && void 0 !== LG ? LG : 0)
        })),
        fb = new Map;
      for (const wG of pb) {
        var Qb;
        const GG = null === (Qb = (0, pG.k)(ZG, wG)) || void 0 === Qb ? void 0 : Qb.cosmeticPack;
        fb.has(GG) || fb.set(GG, []), fb.get(GG).push(wG)
      }
      const Kb = function(GG, bG) {
          const ZG = new Set,
            wG = new Set;
          for (const [SG, LG] of Object.entries(pG.f[GG])) {
            if (void 0 === LG.colourGroup) continue;
            const yG = `${LG.cosmeticPack}_${LG.colourGroup}`;
            (Gb(GG, SG, bG) ? wG : ZG).add(yG)
          }
          return new Set([...ZG].filter((GG => wG.has(GG))))
        }(ZG, Ub),
        hb = new Map;
      for (const [wG, SG] of fb) {
        const GG = [],
          bG = new Map;
        for (const wG of SG) {
          var db, Jb;
          const SG = null !== (db = null === (Jb = (0, pG.k)(ZG, wG)) || void 0 === Jb ? void 0 : Jb.colourGroup) && void 0 !== db ? db : null;
          bG.has(SG) || (bG.set(SG, []), GG.push(SG)), bG.get(SG).push(wG)
        }
        const LG = GG.map((GG => {
          var SG;
          const LG = bG.get(GG),
            yG = GG ? null === (SG = jG.c[wG].colourGroups) || void 0 === SG ? void 0 : SG[GG] : void 0,
            kG = !0 === (null === yG || void 0 === yG ? void 0 : yG.showSwatchSelector) && !Kb.has(`${wG}_${GG}`);
          if (kG && yG) {
            var UG;
            const bG = null !== (UG = mG[`${wG}_${ZG}_${GG}`]) && void 0 !== UG ? UG : (0, jG.e)(yG.colours);
            return {
              groupName: GG,
              showSwatch: kG,
              cosmetics: LG.filter((GG => {
                const ZG = (0, pG.g)(GG);
                return !ZG || bG.toString() === ZG[1].toString()
              }))
            }
          }
          return {
            groupName: GG,
            cosmetics: LG,
            showSwatch: kG
          }
        }));
        hb.set(wG, LG)
      }
      const rb = Array.from(fb.keys()),
        zb = new Map;
      for (const [wG, SG] of Object.entries(fG.d)) {
        const GG = jG.c[SG.cosmeticPack],
          bG = !bb(SG.cosmetics, Ub),
          ZG = jG.j.some((GG => (0, jG.d)(GG) === wG));
        (GG.clientSelectable || ZG || bG) && ((!GG.purchasable || bG || Vb) && (zb.has(SG.cosmeticPack) || zb.set(SG.cosmeticPack, []), zb.get(SG.cosmeticPack).push([wG, SG])))
      }
      const Eb = Array.from(zb.keys());
      return (0, TG.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === ZG || "nameColour" === ZG) && !KG.playerHasRank("super") && (0, TG.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, TG.jsx)(qG.c, {
            name: "bolt"
          }), yG("homePage:unlockWithSuperRank"), Vb && (0, TG.jsx)(XG.k, {
            onClick: () => {
              (0, uG.n)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: yG("general:getItNow")
          })]
        }), (0, TG.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === bG && (0, TG.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, TG.jsx)(HG, {
              wornOutfit: dG(eG.current),
              onApply: GG => {
                kb(GG, {
                  undoable: !0
                })
              },
              onOverwrite: (GG, bG) => {
                vG({
                  kind: "slot",
                  slot: GG,
                  outfit: bG
                })
              },
              onDelete: GG => {
                vG((bG => "slot" === (null === bG || void 0 === bG ? void 0 : bG.kind) && bG.slot === GG ? null : bG))
              }
            }), Eb.map((GG => {
              const bG = zb.get(GG);
              return (0, TG.jsx)(Zb, {
                pack: GG,
                ownedPacks: Ub,
                showStoreLink: !jG.n.includes(GG) && bG.some((GG => {
                  let [, {
                    cosmetics: bG
                  }] = GG;
                  return bb(bG, Ub)
                })),
                children: (0, TG.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: bG.map((GG => {
                    let [bG, {
                      cosmetics: ZG
                    }] = GG;
                    const wG = bb(ZG, Ub),
                      SG = !wG && function(GG, bG) {
                        return Object.entries(bG).some((bG => {
                          let [ZG, wG] = bG;
                          return OG(GG, ZG, wG)
                        }))
                      }(Yb, ZG),
                      LG = wG || SG,
                      yG = rG(ZG, CG),
                      UG = !yG && rG(ZG, eG.current);
                    return (0, TG.jsx)(xG, {
                      locked: SG,
                      children: (0, TG.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: kG()("CharacterPresetCard", {
                          CharacterPresetCardActive: UG,
                          CharacterPresetCardTryingOn: yG
                        }),
                        onClick: () => {
                          LG ? function(GG) {
                            rG(GG, CG) ? WG({}) : WG({
                              ...GG
                            })
                          }(ZG) : kb(ZG, {
                            undoable: !0
                          })
                        },
                        children: [(0, TG.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(/textures/charSkins/previews/character_${bG}_preview.png)`
                          }
                        }), LG && (0, TG.jsx)(qG.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, bG)
                  }))
                })
              }, GG)
            }))]
          }), "emote" === bG && (0, TG.jsx)(wb, {
            equippedEmoteIds: (0, QG.k)(eG.current.emote),
            ownedPacks: Ub,
            canBuy: Vb,
            onUpdateLoadout: GG => {
              const bG = (0, QG.l)(GG);
              var ZG;
              eG.current = {
                ...eG.current,
                emote: bG
              }, KG.setPlayerCosmetics("emote", bG), JG(), ZG = bG, BG.current = ZG, null !== NG.current && clearTimeout(NG.current), NG.current = setTimeout(Sb, 350)
            },
            onEmoteSelected: gG,
            onEquipPreviewSkin: () => {
              ! function(GG, bG) {
                for (const ZG of UG.x) "cape" !== ZG && "nameColour" !== ZG && "emote" !== ZG && GG(ZG, "skin" === ZG ? "skin_preview" : `${ZG}_none`, !1);
                bG()
              }(Lb, JG)
            }
          }), "characters" !== bG && "emote" !== bG && (0, TG.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, rb.map((GG => {
              const bG = hb.get(GG);
              return (0, TG.jsx)(Zb, {
                pack: GG,
                ownedPacks: Ub,
                children: bG.map((bG => {
                  var wG;
                  let {
                    groupName: SG,
                    cosmetics: LG,
                    showSwatch: yG
                  } = bG;
                  const UG = SG ? null === (wG = jG.c[GG].colourGroups) || void 0 === wG ? void 0 : wG[SG] : void 0,
                    VG = `${GG}_${ZG}_${SG}`;
                  return (0, TG.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [yG && UG && (0, TG.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...UG.colours.map(((GG, bG) => ({
                        color: GG,
                        index: bG
                      })))].sort(((GG, bG) => GG.color.order - bG.color.order)).map((bG => {
                        var wG;
                        let {
                          color: LG,
                          index: yG
                        } = bG;
                        return (0, TG.jsx)("div", {
                          className: kG()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (wG = mG[VG]) && void 0 !== wG ? wG : (0, jG.e)(UG.colours)) === yG
                          }),
                          style: {
                            backgroundColor: `rgb(${LG.rbg.join(",")})`
                          },
                          onClick: () => {
                            var bG;
                            IG((GG => ({
                              ...GG,
                              [VG]: yG
                            })));
                            const wG = CG[ZG],
                              LG = wG ? (0, pG.k)(ZG, wG) : null,
                              kG = (null === LG || void 0 === LG ? void 0 : LG.cosmeticPack) === GG,
                              UG = kG ? wG : eG.current[ZG],
                              YG = kG ? LG : (0, pG.k)(ZG, UG);
                            if ((null === YG || void 0 === YG ? void 0 : YG.cosmeticPack) !== GG) return;
                            if ((null !== (bG = null === YG || void 0 === YG ? void 0 : YG.colourGroup) && void 0 !== bG ? bG : null) !== SG) return;
                            const fG = (0, pG.g)(UG);
                            if (fG) {
                              const GG = `${ZG}_${fG[0]}_${yG}`;
                              Gb(ZG, GG, Ub) || OG(Yb, ZG, GG) ? WG((bG => ({
                                ...bG,
                                [ZG]: GG
                              }))) : (kG && yb(ZG), Lb(ZG, GG, !0))
                            }
                          }
                        }, LG.rbg.join())
                      }))
                    }), LG.map((GG => {
                      const bG = GG === eG.current[ZG],
                        wG = CG[ZG] === GG,
                        SG = Gb(ZG, GG, Ub),
                        LG = !SG && OG(Yb, ZG, GG),
                        yG = SG || LG;
                      let UG = !0;
                      return yG || bG || ("cape" !== ZG || (0, cG.he)(KG.getPlayerRanks(), GG)) && ("nameColour" !== ZG || KG.playerHasRank("super")) || (UG = !1), (0, TG.jsx)(xG, {
                        locked: LG,
                        children: (0, TG.jsxs)("div", {
                          className: kG()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: bG && !wG,
                            TryingOnCharCustomPartWrapper: wG,
                            DisabledCharCustomPartWrapper: !UG,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === ZG
                          }),
                          onClick: () => {
                            if (UG)
                              if (yG) WG((bG => {
                                if (bG[ZG] === GG) {
                                  const GG = {
                                    ...bG
                                  };
                                  return delete GG[ZG], GG
                                }
                                return {
                                  ...bG,
                                  [ZG]: GG
                                }
                              }));
                              else {
                                var bG;
                                if (CG[ZG] && yb(ZG), GG === eG.current[ZG]) return;
                                null !== (bG = DG.current) && void 0 !== bG && bG.isReady() && Lb(ZG, GG, !0)
                              }
                          },
                          children: ["profileEffect" === ZG ? (0, TG.jsx)("div", {
                            className: "CharCustomPart CharCustomProfileEffect",
                            children: (0, TG.jsx)(sG.h, {
                              playerSocialPreview: (0, AG.b)(GG, {
                                name: KG.getPlayerName(),
                                cosmetics: KG.getPlayerCosmetics()
                              }),
                              showLocation: !1,
                              opensProfileCard: !1
                            })
                          }) : (0, TG.jsx)("div", {
                            className: kG()("CharCustomPart", {
                              PixelatedImage: "cape" === ZG
                            }),
                            style: (0, pG.k)(ZG, GG).previewTex ? {
                              backgroundImage: `url(/textures/charSkins/previews/${(0,pG.k)(ZG,GG).previewTex}.png)`
                            } : {
                              backgroundColor: YG.o[GG]
                            }
                          }), yG && (0, TG.jsx)(qG.c, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, GG)
                    }))]
                  }, null !== SG && void 0 !== SG ? SG : "ungrouped")
                }))
              }, GG)
            }))]
          }), FG && (0, TG.jsxs)(XG.d, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === FG.kind ? kb(FG.outfit, {
                undoable: !1
              }) : (aG.save(FG.slot, FG.outfit), vG(null))
            },
            children: [(0, TG.jsx)(qG.c, {
              name: "rotate-left"
            }), yG("general:undo")]
          }), (0, TG.jsx)(lG.CharacterPreview, {
            ref: DG,
            forcedCosmetics: CG,
            Ak: MG.id,
            emotePlaySeq: MG.seq,
            onReady: () => {
              for (const GG of UG.x) Lb(GG, eG.current[GG], !1)
            }
          })]
        })]
      })
    }))
  },
  41710: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      CharacterPreview: () => pG
    });
    var wG = ZG(51),
      SG = ZG(2732),
      LG = ZG(1198),
      yG = ZG(2537),
      kG = ZG(34515),
      UG = ZG(3625),
      YG = ZG(1067);
    const VG = .6 * Math.PI,
      pG = (0, wG.memo)((0, wG.forwardRef)((function(GG, bG) {
        let {
          onReady: ZG,
          onDrawn: pG,
          owner: fG = "other",
          framing: QG = "player",
          forcedCosmetics: KG,
          Ak: hG,
          emotePlaySeq: dG,
          turntableFromYaw: JG = null
        } = GG;
        const rG = (0, wG.useRef)(null),
          {
            width: zG,
            height: EG
          } = (0, SG.d)(rG),
          oG = (0, wG.useRef)(null),
          XG = (0, wG.useRef)({}),
          uG = (0, wG.useRef)({}),
          [iG, CG] = (0, wG.useState)(!1),
          WG = (0, wG.useRef)(ZG);
        WG.current = ZG;
        const mG = (0, wG.useRef)(pG);
        mG.current = pG;
        const IG = (0, wG.useRef)(null),
          FG = (0, wG.useRef)(!1),
          vG = (0, wG.useRef)(!1),
          aG = (0, wG.useCallback)((() => {
            const GG = oG.current;
            if (!GG || !mG.current || FG.current || !vG.current) return;
            const bG = {};
            IG.current = bG, queueMicrotask((() => {
              if (IG.current !== bG) return;
              const ZG = Promise.all(LG.x.map((bG => GG.untilDrawn(bG)))).catch((GG => {
                  console.error("Failed to draw the character preview", GG)
                })),
                wG = new Promise((GG => {
                  setTimeout(GG, 1e4)
                }));
              Promise.race([ZG, wG]).then((() => {
                var ZG;
                oG.current !== GG || IG.current !== bG || FG.current || (FG.current = !0, null === (ZG = mG.current) || void 0 === ZG || ZG.call(mG))
              }))
            }))
          }), []);
        return (0, wG.useImperativeHandle)(bG, (() => {
          const GG = (GG, bG) => {
            var ZG;
            (XG.current[GG] = bG, null !== KG && void 0 !== KG && KG[GG]) || (null === (ZG = oG.current) || void 0 === ZG || ZG.setCosmetic(GG, bG), aG())
          };
          return {
            updateCosmetic: GG,
            setAllCosmetics(bG) {
              for (const wG of LG.x) {
                var ZG;
                GG(wG, null !== (ZG = bG[wG]) && void 0 !== ZG ? ZG : (0, yG.d)(wG))
              }
            },
            isReady() {
              var GG, bG;
              return null !== (GG = null === (bG = oG.current) || void 0 === bG ? void 0 : bG.isReady()) && void 0 !== GG && GG
            },
            resetCamera() {
              var GG;
              null === (GG = oG.current) || void 0 === GG || GG.resetCamera()
            },
            setOrbit(GG) {
              var bG;
              null === (bG = oG.current) || void 0 === bG || bG.setOrbit(GG)
            },
            async ensureReadyForCapture(GG) {
              var bG;
              await (null === (bG = oG.current) || void 0 === bG ? void 0 : bG.untilDrawn(GG))
            },
            getDevTools() {
              var GG;
              return null !== (GG = oG.current) && void 0 !== GG && GG.isReady() ? oG.current.dev : null
            }
          }
        }), [KG, aG]), (0, wG.useEffect)((() => {
          const GG = UG.b.register(fG),
            bG = kG.d.openCharacter(rG.current, QG);
          oG.current = bG;
          let ZG = !0;
          return bG.ready.then((() => {
            ZG && (CG(!0), WG.current())
          })).catch((GG => {
            console.error("Failed to set up the character preview", GG)
          })), () => {
            ZG = !1, GG(), bG.resetCamera(), bG.close(), oG.current = null
          }
        }), []), (0, wG.useEffect)((() => {
          zG <= 0 || EG <= 0 || oG.current.resize(zG, EG)
        }), [zG, EG]), (0, wG.useEffect)((() => {
          if (!iG) return;
          const GG = uG.current;
          for (const bG of LG.x) {
            const ZG = null === KG || void 0 === KG ? void 0 : KG[bG],
              wG = GG[bG];
            ZG && ZG !== wG ? oG.current.setCosmetic(bG, ZG) : !ZG && wG && XG.current[bG] && oG.current.setCosmetic(bG, XG.current[bG])
          }
          uG.current = {
            ...KG
          }, vG.current = !0, aG()
        }), [KG, iG, aG]), (0, wG.useEffect)((() => {
          iG && oG.current.playEmote(null !== hG && void 0 !== hG ? hG : null)
        }), [hG, dG, iG]), (0, wG.useEffect)((() => {
          if (!iG || null === JG) return;
          const GG = oG.current,
            {
              pitch: bG,
              radius: ZG
            } = kG.b[QG];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return GG.setOrbit({
            yaw: JG + VG,
            pitch: bG,
            radius: ZG
          }), () => {
            GG.resetCamera()
          };
          const wG = performance.now();
          let SG = 0;
          const LG = yG => {
            GG.setOrbit({
              yaw: JG + (yG - wG) / 6e3 * 2 * Math.PI,
              pitch: bG,
              radius: ZG
            }), SG = requestAnimationFrame(LG)
          };
          return SG = requestAnimationFrame(LG), () => {
            cancelAnimationFrame(SG), GG.resetCamera()
          }
        }), [iG, JG]), (0, YG.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: rG
        })
      })))
  },
  36724: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG
    });
    var wG = ZG(1895),
      SG = ZG(1431);
    const LG = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(GG, bG) {
        GG !== this.userContext && this.sendHeld(), this.userContext = GG;
        for (const [wG, SG] of bG) this.pending.set(wG, SG);
        if (null !== this.timer) return;
        const ZG = this.lastSentAt + 1100 - Date.now();
        ZG <= 0 ? this.send(GG) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), ZG), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(GG) {
        const bG = Array.from(this.pending, (GG => {
          let [bG, ZG] = GG;
          return {
            FL: bG,
            vL: ZG
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), SG.d.updateCosmetics(GG, bG).catch((GG => {
          console.error("Failed to update cosmetics", GG)
        }))
      }
    };

    function yG(GG, bG) {
      for (const [ZG, wG] of bG) GG.setPlayerCosmetics(ZG, wG);
      if (null === wG.gameBridge.latest("connectedGame").websocketUrl) LG.save(GG, bG);
      else
        for (const [ZG, SG] of bG) wG.gameBridge.send("updateMyCosmetic", {
          FL: ZG,
          vL: SG
        })
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);