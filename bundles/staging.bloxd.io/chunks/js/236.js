export const id = 236;
export const ids = [236, 237];
export const modules = {
  44789: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      CharacterCustomisationUI: () => CB
    });
    var AH = LH(45),
      rH = LH(2800),
      SH = LH(3865),
      hH = LH(3847),
      tH = LH(1061),
      zH = LH(1038),
      CH = LH.n(zH),
      EH = LH(1182),
      XH = LH(597),
      GH = LH(1123),
      YH = LH(2339),
      uH = LH(1565),
      QH = LH(2760);
    const WH = EH.r.filter((HH => !uH.k.includes(HH)));

    function MH(HH, BH) {
      return WH.includes(HH) && "string" === typeof BH && (0, QH.e)(HH, BH)
    }

    function xH(HH) {
      const BH = {};
      for (const LH of WH) {
        const AH = HH[LH];
        void 0 !== AH && MH(LH, AH) && (BH[LH] = AH)
      }
      return BH
    }

    function vH(HH) {
      return 0 === Object.keys(HH).length
    }

    function PH(HH, BH) {
      return Object.entries(HH).every((HH => {
        let [LH, AH] = HH;
        return BH[LH] === AH
      }))
    }
    var TH = LH(2347),
      UH = LH(3436),
      VH = LH(2051),
      OH = LH(1455),
      bH = LH(2388),
      kH = LH(2486),
      mH = LH(15),
      oH = LH(2936),
      IH = LH(1502),
      fH = LH(1070),
      lH = LH(1922);
    class KH {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(HH) {
        null !== HH && HH !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = HH)
      }
      isFor(HH) {
        return null === this.accountId || this.accountId === HH
      }
      overlay(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return HH.map(((HH, LH) => {
          var AH, rH;
          return null !== (AH = null !== (rH = this.slots.get(LH)) && void 0 !== rH ? rH : BH.get(LH)) && void 0 !== AH ? AH : HH
        }))
      }
    }
    class cH extends oH.b {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new KH;
        super("saved outfits", (async BH => {
          const LH = HH.isFor(BH.whamm),
            AH = new Map(HH.slots),
            rH = await IH.d.getSavedOutfits(BH);
          return LH ? HH.overlay(rH, AH) : rH
        })), this.unsaved = HH, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(HH, BH) {
        var LH, AH;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(HH)) || this.unsaved.before.set(HH, null !== (LH = null === (AH = this.getState().data) || void 0 === AH ? void 0 : AH[HH]) && void 0 !== LH ? LH : {});
        this.unsaved.slots.set(HH, BH), this.update((LH => LH.map(((LH, AH) => AH === HH ? BH : LH)))), this.sending || this.sendUnsaved()
      }
      clear(HH) {
        this.save(HH, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let HH = !1;
        for (; this.unsaved.slots.size > 0;) {
          const LH = new Map(this.unsaved.slots);
          let AH = this.getState().accountId;
          try {
            const HH = await fH.userContextManager.getCurrentUserContext();
            if (AH = HH.whamm, this.unsaved.moveTo(HH.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: BH,
              data: rH
            } = this.getState();
            let SH = rH;
            BH === HH.whamm && null !== SH || (SH = this.unsaved.overlay(await IH.d.getSavedOutfits(HH)), this.refresh()), await IH.d.setSavedOutfits(HH, SH), this.unsaved.isFor(HH.whamm) && SH.forEach(((HH, BH) => {
              const AH = this.unsaved.slots.get(BH);
              void 0 === AH || AH === LH.get(BH) ? this.unsaved.before.delete(BH) : this.unsaved.before.set(BH, HH)
            }))
          } catch (BH) {
            if (console.error("Failed to save outfits", BH), this.getState().accountId === AH && [...this.unsaved.slots].every((HH => {
                let [BH, AH] = HH;
                return LH.get(BH) === AH
              }))) {
              const BH = [...LH.values()].every(vH);
              lH.h.showMessage({
                translationKey: BH ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const AH = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((HH => HH.map(((HH, BH) => {
                var LH;
                return null !== (LH = AH.get(BH)) && void 0 !== LH ? LH : HH
              })))), HH = !0
            }
          }
          for (const [HH, BH] of LH) this.unsaved.slots.get(HH) === BH && this.unsaved.slots.delete(HH)
        }
        this.sending = !1, HH && this.refresh()
      }
    }
    const eH = new cH;
    var qH = LH(317),
      gH = LH(44796),
      NH = LH(1556),
      RH = LH(2464),
      jH = LH(3319),
      nH = LH(3431),
      FH = LH(2406),
      DH = LH(1315);
    LH(35016), LH(3442);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var wH = LH(2397),
      ZH = LH(3454),
      dH = LH(3458),
      aH = LH(1365),
      sH = LH(2530),
      JH = LH(1352),
      iH = LH(1225);

    function pH(HH) {
      let {
        wornOutfit: BH,
        onApply: LH,
        onOverwrite: rH,
        onDelete: SH
      } = HH;
      const {
        t: hH
      } = (0, GH.B)(), {
        accountId: zH,
        data: EH
      } = (0, oH.h)(eH, !1), {
        userContext: XH
      } = (0, tH.e)();
      async function YH(HH, BH) {
        const LH = await JH.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: AH,
            data: rH
          } = eH.getState();
        var hH, tH;
        !0 === LH && AH === zH && null !== rH && (PH(hH = rH[HH], tH = BH) && PH(tH, hH)) && (eH.clear(HH), SH(HH))
      }
      return (0, AH.useEffect)((() => {
        eH.ensureLoaded()
      }), []), null === EH || zH !== XH.whamm ? null : (0, iH.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, iH.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, iH.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: hH("homePage:myOutfits")
          })
        }), (0, iH.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: EH.map(((HH, AH) => {
            const SH = vH(HH);
            return (0, iH.jsxs)("div", {
              className: CH()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !SH
              }),
              children: [(0, iH.jsxs)("div", {
                ...(0, OH.db)(),
                role: SH ? "button" : "link",
                "data-pad-focusable": !0,
                className: CH()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: SH,
                  CharacterPresetCardActive: !SH && PH(HH, BH)
                }),
                onClick: () => {
                  SH ? eH.save(AH, BH) : LH(HH)
                },
                children: [SH && (0, iH.jsxs)(iH.Fragment, {
                  children: [(0, iH.jsx)(DH.c, {
                    name: "plus"
                  }), hH("homePage:saveOutfit")]
                }), !SH && (0, iH.jsxs)(iH.Fragment, {
                  children: [(0, iH.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, iH.jsx)(sH.c, {
                      cosmetics: HH
                    })
                  }), (0, iH.jsx)(OH.W, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      PH(BH, HH) || (eH.save(AH, BH), rH(AH, HH))
                    },
                    children: hH("general:save")
                  })]
                })]
              }), !SH && (0, iH.jsx)("button", {
                type: "button",
                className: "SavedOutfitDeleteButton",
                "data-pad-destructive": !0,
                "aria-label": hH("general:delete"),
                title: hH("general:delete"),
                onClick: () => {
                  YH(AH, HH)
                },
                children: (0, iH.jsx)(DH.c, {
                  name: "trash-can"
                })
              })]
            }, AH)
          }))
        })]
      })
    }
    var yH = LH(37264),
      HB = LH(2746),
      BB = LH(2752);

    function LB(HH, BH, LH) {
      return null !== HH && !(0, HB.f)(BB.b, BH, LH, HH.collected, HH.ownedPacks)
    }

    function AB(HH) {
      let {
        locked: BH,
        children: LH
      } = HH;
      return BH ? (0, iH.jsx)(rB, {
        children: LH
      }) : LH
    }

    function rB(HH) {
      var BH;
      let {
        children: LH
      } = HH;
      const {
        t: AH
      } = (0, GH.B)(), {
        userContext: rH
      } = (0, tH.e)(), SH = null !== (BH = rH.dailyDrop) && void 0 !== BH && BH.hidden ? AH("dailyDrop:lockedFromHidden") : AH("dailyDrop:lockedFrom");
      return (0, iH.jsx)(aH.g, {
        tooltipInner: (0, iH.jsx)(iH.Fragment, {
          children: SH
        }),
        children: LH
      })
    }

    function SB(HH, BH, LH) {
      return (0, YH.k)(HH, BH).purchasable && !(0, RH.y)(HH, BH, LH)
    }

    function hB(HH, BH) {
      return Object.entries(HH).some((HH => {
        let [LH, AH] = HH;
        return SB(LH, AH, BH)
      }))
    }

    function tB(HH) {
      var BH;
      let {
        pack: LH,
        ownedPacks: AH,
        showStoreLink: rH = !1,
        children: SH
      } = HH;
      const {
        t: hH
      } = (0, GH.B)(), tH = NH.b[LH], zH = tH.purchasable && !AH.includes(LH) && NH.o.includes(LH), EH = jH.j[LH];
      return (0, iH.jsxs)("div", {
        className: CH()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: zH
        }),
        children: [EH && (0, iH.jsx)(EH, {}), (0, iH.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, iH.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (BH = tH.displayName) && void 0 !== BH ? BH : LH
          }), (zH || rH) && (0, iH.jsxs)(OH.G, {
            onClick: () => {
              zH ? (0, jH.i)(LH) : (0, bH.k)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, iH.jsx)(DH.c, {
              name: "store"
            }), " ", hH("general:viewInShop")]
          })]
        }), zH && "bee" === LH && (0, iH.jsx)(jH.c, {}), SH]
      })
    }

    function zB(HH) {
      let {
        equippedEmoteIds: BH,
        ownedPacks: LH,
        canBuy: AH,
        onUpdateLoadout: rH,
        onEmoteSelected: SH,
        onEquipPreviewSkin: hH
      } = HH;
      const {
        t: tH
      } = (0, GH.B)(), zH = new Set(BH), XH = new Map, uH = Object.keys(YH.d.emote).sort(((HH, BH) => {
        var LH, AH, rH, SH;
        return (null !== (LH = null === (AH = (0, YH.h)("emote", HH)) || void 0 === AH ? void 0 : AH.clientIdx) && void 0 !== LH ? LH : 0) - (null !== (rH = null === (SH = (0, YH.h)("emote", BH)) || void 0 === SH ? void 0 : SH.clientIdx) && void 0 !== rH ? rH : 0)
      })).filter((HH => {
        const BH = (0, YH.k)("emote", HH),
          rH = (0, RH.y)("emote", HH, LH);
        return !(BH.purchasable && !rH && !AH) && (BH.clientSelectable || rH)
      }));
      for (const CH of uH) {
        const HH = (0, YH.h)("emote", CH).cosmeticPack;
        XH.has(HH) || XH.set(HH, []), XH.get(HH).push(CH)
      }
      const QH = Array.from(XH.keys());
      return (0, iH.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, iH.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, iH.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: tH("emotes:equippedCount", {
              count: BH.length,
              max: EH.l
            })
          }), (0, iH.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: tH("emotes:loadoutHint")
          })]
        }), QH.map((HH => {
          const AH = XH.get(HH);
          return (0, iH.jsx)(tB, {
            pack: HH,
            ownedPacks: LH,
            children: (0, iH.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: AH.map((HH => {
                var AH;
                const hH = BH.indexOf(HH),
                  XH = -1 !== hH,
                  GH = BH.length >= EH.l,
                  YH = SB("emote", HH, LH),
                  uH = YH || !XH && GH,
                  QH = (0, TH.i)(HH);
                return (0, iH.jsxs)("div", {
                  className: CH()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: XH
                  }),
                  onClick: () => {
                    SH(HH)
                  },
                  children: [(0, iH.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, iH.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(${(0,ZH.d)("emote",HH)})`
                      },
                      "aria-hidden": !0
                    }), (0, iH.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (AH = null === QH || void 0 === QH ? void 0 : QH.displayName) && void 0 !== AH ? AH : HH
                    })]
                  }), (0, iH.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [XH && (0, iH.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: hH + 1
                    }), YH && (0, iH.jsx)(DH.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, iH.jsx)(aH.g, {
                      tooltipInner: (0, iH.jsx)(iH.Fragment, {
                        children: tH(XH ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, iH.jsx)("div", {
                        className: CH()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: uH,
                          EmoteCustomPartToggleEquipped: XH
                        }),
                        onClick: LH => {
                          LH.stopPropagation(), uH || function(HH) {
                            zH.has(HH) ? rH(BH.filter((BH => BH !== HH))) : BH.length >= EH.l || rH([...BH, HH])
                          }(HH)
                        },
                        children: (0, iH.jsx)(DH.c, {
                          name: XH ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, HH)
              }))
            })
          }, HH)
        }))]
      })
    }
    const CB = (0, AH.memo)((function(HH) {
      let {
        selectedTab: BH
      } = HH;
      const LH = "characters" === BH ? "skin" : BH,
        {
          t: zH
        } = (0, GH.B)(),
        {
          userContext: WH,
          isUserContextUpdating: MH
        } = (0, tH.e)(),
        vH = (0, rH.e)(),
        {
          gameState: TH
        } = (0, mH.m)(["gameState"]),
        [oH, IH] = (0, AH.useState)({}),
        fH = (0, AH.useRef)(oH);
      fH.current = oH;
      const [lH, KH] = (0, AH.useState)({}), [cH, jH] = (0, AH.useState)(null), {
        previewEmote: ZH,
        triggerEmote: aH
      } = (0, UH.e)(), sH = (0, AH.useRef)(EH.r.reduce(((HH, BH) => (HH[BH] = (0, QH.d)(BH), HH)), {})), JH = (0, AH.useRef)(!1), HB = (0, AH.useRef)(null), BB = (0, AH.useRef)(ZH);
      BB.current = ZH;
      const rB = (0, AH.useRef)(null),
        CB = (0, AH.useRef)(null);

      function EB() {
        null !== rB.current && (clearTimeout(rB.current), rB.current = null);
        const HH = CB.current;
        null !== HH && (CB.current = null, (0, yH.d)(WH, [
          ["emote", HH]
        ]))
      }

      function XB(HH, BH, LH) {
        var AH, rH, SH;
        sH.current = {
          ...sH.current,
          [HH]: BH
        }, vH(), LH && ((0, yH.d)(WH, [
          [HH, BH]
        ]), jH(null));
        const hH = (0, YH.h)(HH, BH);
        if (null !== hH && void 0 !== hH && hH.colourGroup && null !== (AH = NH.b[hH.cosmeticPack].colourGroups) && void 0 !== AH && null !== (rH = AH[hH.colourGroup]) && void 0 !== rH && rH.showSwatchSelector) {
          const LH = (0, YH.f)(BH);
          LH && KH((BH => ({
            ...BH,
            [`${hH.cosmeticPack}_${HH}_${hH.colourGroup}`]: parseInt(LH[1])
          })))
        }
        null !== (SH = HB.current) && void 0 !== SH && SH.isReady() && HB.current.updateCosmetic(HH, BH)
      }

      function GB(HH) {
        IH((BH => {
          const LH = {
            ...BH
          };
          return delete LH[HH], LH
        }))
      }

      function YB(HH, BH) {
        let {
          undoable: LH
        } = BH;
        Object.keys(oH).length > 0 && IH({});
        const AH = Object.entries(HH).filter((HH => {
          let [BH, LH] = HH;
          return sH.current[BH] !== LH && !SB(BH, LH, uB) && !LB(QB, BH, LH)
        }));
        LH ? AH.length > 0 && jH({
          kind: "worn",
          outfit: xH(sH.current)
        }) : jH(null);
        for (const [rH, SH] of AH) XB(rH, SH, !1);
        AH.length > 0 && (0, yH.d)(WH, AH)
      }(0, VH.b)("cosmeticsUpdated", (HH => {
        let BH = !1;
        for (const {
            local: LH,
            rh: AH,
            Sh: rH
          }
          of HH) {
          if (!LH) return;
          BH = !0, JH.current || XB(AH, rH, !1), vH()
        }
        BH && (JH.current = !0)
      })), (0, AH.useEffect)((() => {
        if (!MH) {
          for (const [HH, BH] of Object.entries(WH.getPlayerCosmetics())) XB(HH, BH, !1);
          vH()
        }
      }), [MH]), (0, AH.useEffect)((() => () => {
        EB()
      }), []);
      const uB = WH.getOwnedCosmeticPacks(),
        QB = function(HH, BH) {
          return null === HH ? null : {
            collected: new Set(HH.collected),
            ownedPacks: BH
          }
        }(WH.dailyDrop, uB),
        WB = (0, wH.usePurchasesAllowed)(),
        MB = Object.keys(YH.d[LH]).filter((HH => {
          const BH = (0, YH.k)(LH, HH),
            AH = (0, RH.y)(LH, HH, uB);
          return !(BH.purchasable && !AH && !WB) && (BH.clientSelectable || AH)
        })).sort(((HH, BH) => {
          var AH, rH, SH, hH;
          return (null !== (AH = null === (rH = (0, YH.h)(LH, HH)) || void 0 === rH ? void 0 : rH.clientIdx) && void 0 !== AH ? AH : 0) - (null !== (SH = null === (hH = (0, YH.h)(LH, BH)) || void 0 === hH ? void 0 : hH.clientIdx) && void 0 !== SH ? SH : 0)
        })),
        xB = new Map;
      for (const AH of MB) {
        var vB;
        const HH = null === (vB = (0, YH.h)(LH, AH)) || void 0 === vB ? void 0 : vB.cosmeticPack;
        xB.has(HH) || xB.set(HH, []), xB.get(HH).push(AH)
      }
      const PB = function(HH, BH) {
          const LH = new Set,
            AH = new Set;
          for (const [rH, SH] of Object.entries(YH.d[HH])) {
            if (void 0 === SH.colourGroup) continue;
            const hH = `${SH.cosmeticPack}_${SH.colourGroup}`;
            (SB(HH, rH, BH) ? AH : LH).add(hH)
          }
          return new Set([...LH].filter((HH => AH.has(HH))))
        }(LH, uB),
        TB = new Map;
      for (const [AH, rH] of xB) {
        const HH = [],
          BH = new Map;
        for (const AH of rH) {
          var UB, VB;
          const rH = null !== (UB = null === (VB = (0, YH.h)(LH, AH)) || void 0 === VB ? void 0 : VB.colourGroup) && void 0 !== UB ? UB : null;
          BH.has(rH) || (BH.set(rH, []), HH.push(rH)), BH.get(rH).push(AH)
        }
        const SH = HH.map((HH => {
          var rH;
          const SH = BH.get(HH),
            hH = HH ? null === (rH = NH.b[AH].colourGroups) || void 0 === rH ? void 0 : rH[HH] : void 0,
            tH = !0 === (null === hH || void 0 === hH ? void 0 : hH.showSwatchSelector) && !PB.has(`${AH}_${HH}`);
          if (tH && hH) {
            var zH;
            const BH = null !== (zH = lH[`${AH}_${LH}_${HH}`]) && void 0 !== zH ? zH : (0, NH.d)(hH.colours);
            return {
              groupName: HH,
              showSwatch: tH,
              cosmetics: SH.filter((HH => {
                const LH = (0, YH.f)(HH);
                return !LH || BH.toString() === LH[1].toString()
              }))
            }
          }
          return {
            groupName: HH,
            cosmetics: SH,
            showSwatch: tH
          }
        }));
        TB.set(AH, SH)
      }
      const OB = Array.from(xB.keys()),
        bB = new Map;
      for (const [AH, rH] of Object.entries(uH.c)) {
        const HH = NH.b[rH.cosmeticPack],
          BH = (0, RH.x)(rH.cosmetics, uB),
          LH = NH.i.some((HH => (0, NH.c)(HH) === AH));
        (HH.clientSelectable || LH || BH) && ((!HH.purchasable || BH || WB) && (bB.has(rH.cosmeticPack) || bB.set(rH.cosmeticPack, []), bB.get(rH.cosmeticPack).push([AH, rH])))
      }
      const kB = Array.from(bB.keys());
      return (0, iH.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === LH || "nameColour" === LH) && !(0, XH.b)(WH.getPlayerRanks()) && (0, iH.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, iH.jsx)(DH.c, {
            name: "bolt"
          }), zH((0, kH.u)(Date.now()).unlockWithKey), WB && (0, iH.jsx)(OH.u, {
            onClick: () => {
              (0, bH.k)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: zH("general:getItNow")
          })]
        }), (0, iH.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === BH && (0, iH.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, iH.jsx)(pH, {
              wornOutfit: xH(sH.current),
              onApply: HH => {
                YB(HH, {
                  undoable: !0
                })
              },
              onOverwrite: (HH, BH) => {
                jH({
                  kind: "slot",
                  slot: HH,
                  outfit: BH
                })
              },
              onDelete: HH => {
                jH((BH => "slot" === (null === BH || void 0 === BH ? void 0 : BH.kind) && BH.slot === HH ? null : BH))
              }
            }), kB.map((HH => {
              const BH = bB.get(HH);
              return (0, iH.jsx)(tB, {
                pack: HH,
                ownedPacks: uB,
                showStoreLink: !NH.m.includes(HH) && BH.some((HH => {
                  let [, {
                    cosmetics: BH
                  }] = HH;
                  return hB(BH, uB)
                })),
                children: (0, iH.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: BH.map((HH => {
                    let [BH, {
                      cosmetics: LH
                    }] = HH;
                    const AH = hB(LH, uB),
                      rH = !AH && function(HH, BH) {
                        return Object.entries(BH).some((BH => {
                          let [LH, AH] = BH;
                          return LB(HH, LH, AH)
                        }))
                      }(QB, LH),
                      SH = AH || rH,
                      hH = PH(LH, oH),
                      tH = !hH && PH(LH, sH.current);
                    return (0, iH.jsx)(AB, {
                      locked: rH,
                      children: (0, iH.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: CH()("CharacterPresetCard", {
                          CharacterPresetCardActive: tH,
                          CharacterPresetCardTryingOn: hH
                        }),
                        onClick: () => {
                          SH ? function(HH) {
                            PH(HH, oH) ? IH({}) : IH({
                              ...HH
                            })
                          }(LH) : YB(LH, {
                            undoable: !0
                          })
                        },
                        children: [(0, iH.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(${(0,FH.i)(BH)})`
                          }
                        }), SH && (0, iH.jsx)(DH.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, BH)
                  }))
                })
              }, HH)
            }))]
          }), "emote" === BH && (0, iH.jsx)(zB, {
            equippedEmoteIds: (0, QH.g)(sH.current.emote),
            ownedPacks: uB,
            canBuy: WB,
            onUpdateLoadout: HH => {
              const BH = (0, QH.k)(HH);
              var LH;
              sH.current = {
                ...sH.current,
                emote: BH
              }, WH.setPlayerCosmetics("emote", BH), vH(), LH = BH, CB.current = LH, null !== rB.current && clearTimeout(rB.current), rB.current = setTimeout(EB, 350)
            },
            onEmoteSelected: aH,
            onEquipPreviewSkin: () => {
              ! function(HH, BH) {
                for (const LH of EH.r)(0, uH.g)(LH) && HH(LH, "skin" === LH ? "skin_preview" : `${LH}_none`, !1);
                BH()
              }(XB, vH)
            }
          }), "characters" !== BH && "emote" !== BH && (0, iH.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, OB.map((HH => {
              const BH = TB.get(HH);
              return (0, iH.jsx)(tB, {
                pack: HH,
                ownedPacks: uB,
                children: BH.map((BH => {
                  var AH;
                  let {
                    groupName: rH,
                    cosmetics: SH,
                    showSwatch: hH
                  } = BH;
                  const tH = rH ? null === (AH = NH.b[HH].colourGroups) || void 0 === AH ? void 0 : AH[rH] : void 0,
                    zH = `${HH}_${LH}_${rH}`;
                  return (0, iH.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [hH && tH && (0, iH.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...tH.colours.map(((HH, BH) => ({
                        color: HH,
                        index: BH
                      })))].sort(((HH, BH) => HH.color.order - BH.color.order)).map((BH => {
                        var AH;
                        let {
                          color: SH,
                          index: hH
                        } = BH;
                        return (0, iH.jsx)("div", {
                          className: CH()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (AH = lH[zH]) && void 0 !== AH ? AH : (0, NH.d)(tH.colours)) === hH
                          }),
                          style: {
                            backgroundColor: `rgb(${SH.rbg.join(",")})`
                          },
                          onClick: () => {
                            var BH;
                            KH((HH => ({
                              ...HH,
                              [zH]: hH
                            })));
                            const AH = oH[LH],
                              SH = AH ? (0, YH.h)(LH, AH) : null,
                              tH = (null === SH || void 0 === SH ? void 0 : SH.cosmeticPack) === HH,
                              CH = tH ? AH : sH.current[LH],
                              EH = tH ? SH : (0, YH.h)(LH, CH);
                            if ((null === EH || void 0 === EH ? void 0 : EH.cosmeticPack) !== HH) return;
                            if ((null !== (BH = null === EH || void 0 === EH ? void 0 : EH.colourGroup) && void 0 !== BH ? BH : null) !== rH) return;
                            const XH = (0, YH.f)(CH);
                            if (XH) {
                              const HH = `${LH}_${XH[0]}_${hH}`;
                              SB(LH, HH, uB) || LB(QB, LH, HH) ? IH((BH => ({
                                ...BH,
                                [LH]: HH
                              }))) : (tH && GB(LH), XB(LH, HH, !0))
                            }
                          }
                        }, SH.rbg.join())
                      }))
                    }), SH.map((HH => {
                      const BH = HH === sH.current[LH],
                        AH = oH[LH] === HH,
                        rH = SB(LH, HH, uB),
                        SH = !rH && LB(QB, LH, HH),
                        hH = rH || SH;
                      let tH = !0;
                      return hH || BH || ("cape" !== LH || (0, qH.Td)(WH.getPlayerRanks(), HH)) && ("nameColour" !== LH || (0, XH.b)(WH.getPlayerRanks())) || (tH = !1), (0, iH.jsx)(AB, {
                        locked: SH,
                        children: (0, iH.jsxs)("div", {
                          className: CH()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: BH && !AH,
                            TryingOnCharCustomPartWrapper: AH,
                            DisabledCharCustomPartWrapper: !tH,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === LH
                          }),
                          onClick: () => {
                            if (tH)
                              if (hH) IH((BH => {
                                if (BH[LH] === HH) {
                                  const HH = {
                                    ...BH
                                  };
                                  return delete HH[LH], HH
                                }
                                return {
                                  ...BH,
                                  [LH]: HH
                                }
                              }));
                              else {
                                var BH;
                                if (oH[LH] && GB(LH), HH === sH.current[LH]) return;
                                null !== (BH = HB.current) && void 0 !== BH && BH.isReady() && XB(LH, HH, !0)
                              }
                          },
                          children: ["profileEffect" === LH ? (0, iH.jsx)(nH.e, {
                            profileEffect: HH,
                            name: WH.getPlayerName(),
                            cosmetics: WH.getPlayerCosmetics()
                          }) : (0, iH.jsx)(dH.e, {
                            rh: LH,
                            Sh: HH
                          }), hH && (0, iH.jsx)(DH.c, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, HH)
                    }))]
                  }, null !== rH && void 0 !== rH ? rH : "ungrouped")
                }))
              }, HH)
            }))]
          }), cH && (0, iH.jsxs)(OH.i, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === cH.kind ? YB(cH.outfit, {
                undoable: !1
              }) : (eH.save(cH.slot, cH.outfit), jH(null))
            },
            children: [(0, iH.jsx)(DH.c, {
              name: "rotate-left"
            }), zH("general:undo")]
          }), (0, iH.jsx)(gH.CharacterPreview, {
            ref: HB,
            forcedCosmetics: oH,
            zE: ZH.id,
            emotePlaySeq: ZH.seq,
            onReady: () => {
              for (const HH of EH.r) XB(HH, sH.current[HH], !1)
            },
            onDrawn: HH => {
              var BH, LH;
              const AH = null === (BH = HB.current) || void 0 === BH || null === (LH = BH.getDevTools()) || void 0 === LH ? void 0 : LH.canvas(),
                rH = (HH, BH) => 0 === Object.keys(fH.current).length && JSON.stringify(WH.getPlayerCosmetics()) === HH && BB.current.seq === BH.seq && null === BB.current.id,
                tH = JSON.stringify(WH.getPlayerCosmetics()),
                zH = BB.current;
              if (!SH.r || !HH || void 0 === AH || !rH(tH, zH)) return;
              const CH = (0, hH.f)(WH);
              (0, hH.c)(AH, CH, (() => rH(tH, zH))).catch((HH => {
                console.warn("[loading-character] couldn't keep your picture from Customise", HH)
              }))
            }
          })]
        })]
      })
    }))
  },
  44796: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      CharacterPreview: () => WH
    });
    var AH = LH(45),
      rH = LH(3018),
      SH = LH(1182),
      hH = LH(2760),
      tH = LH(35016),
      zH = LH(3991),
      CH = LH(37112),
      EH = LH(37135),
      XH = LH(37157),
      GH = LH(1225);

    function YH(HH) {
      let {
        nametag: BH
      } = HH;
      const LH = (0, AH.useRef)(null),
        {
          height: SH
        } = (0, rH.c)(LH),
        [hH, tH] = (0, AH.useState)(!1),
        {
          name: zH,
          ranks: YH,
          nameColour: uH
        } = BH;
      return (0, AH.useEffect)((() => {
        let HH = !0;
        return XH.h.untilLoadedFor(zH).then((() => {
          HH && tH(!0)
        })), () => {
          HH = !1
        }
      }), [zH]), (0, AH.useEffect)((() => {
        if (!hH || SH <= 0) return;
        const HH = LH.current,
          BH = (0, CH.d)(HH),
          AH = () => {
            const LH = (0, EH.e)({
              name: zH,
              ranks: YH,
              colour: uH,
              player: !1
            }, BH, XH.o, {
              nameAsGiven: !0
            });
            if (null === LH) return HH.width = 0, void(HH.height = 0);
            const AH = SH * devicePixelRatio / LH.height;
            HH.width = Math.ceil(LH.width * AH), HH.height = Math.ceil(LH.height * AH), BH.scale(AH, AH), LH.draw(BH)
          };
        return AH(), (0, XH.g)(AH)
      }), [hH, SH, zH, YH, uH]), (0, GH.jsx)("canvas", {
        ref: LH,
        className: "CharacterPreviewNametag",
        role: "img",
        "aria-label": zH,
        style: {
          visibility: hH ? void 0 : "hidden"
        }
      })
    }
    let uH = null;
    const QH = .6 * Math.PI,
      WH = (0, AH.memo)((0, AH.forwardRef)((function(HH, BH) {
        let {
          onReady: LH,
          onDrawn: CH,
          owner: EH = "other",
          framing: XH = "player",
          forcedCosmetics: WH,
          zE: MH,
          emotePlaySeq: xH,
          turntableFromYaw: vH = null,
          nametag: PH
        } = HH;
        const TH = (0, AH.useRef)(null),
          {
            width: UH,
            height: VH
          } = (0, rH.c)(TH),
          OH = (0, AH.useRef)(null),
          bH = (0, AH.useRef)({}),
          kH = (0, AH.useRef)({}),
          [mH, oH] = (0, AH.useState)(!1),
          IH = (0, AH.useRef)(LH);
        IH.current = LH;
        const fH = (0, AH.useRef)(CH);
        fH.current = CH;
        const lH = (0, AH.useRef)(null),
          KH = (0, AH.useRef)(!1),
          cH = (0, AH.useRef)(!1),
          eH = (0, AH.useCallback)((() => {
            const HH = OH.current;
            if (!HH || !fH.current || KH.current || !cH.current) return;
            const BH = {};
            lH.current = BH, queueMicrotask((() => {
              if (lH.current !== BH) return;
              const LH = Promise.all(SH.r.map((BH => HH.untilDrawn(BH)))).then((() => !0), (HH => (console.error("Failed to draw the character preview", HH), !1))),
                AH = new Promise((HH => {
                  setTimeout((() => {
                    HH(!1)
                  }), 1e4)
                }));
              Promise.race([LH, AH]).then((LH => {
                var AH;
                OH.current !== HH || lH.current !== BH || KH.current || (KH.current = !0, null === (AH = fH.current) || void 0 === AH || AH.call(fH, LH))
              }))
            }))
          }), []);
        return (0, AH.useImperativeHandle)(BH, (() => {
          const HH = (HH, BH) => {
            var LH;
            (bH.current[HH] = BH, null !== WH && void 0 !== WH && WH[HH]) || (null === (LH = OH.current) || void 0 === LH || LH.setCosmetic(HH, BH), eH())
          };
          return {
            updateCosmetic: HH,
            setAllCosmetics(BH) {
              for (const AH of SH.r) {
                var LH;
                HH(AH, null !== (LH = BH[AH]) && void 0 !== LH ? LH : (0, hH.d)(AH))
              }
            },
            isReady() {
              var HH, BH;
              return null !== (HH = null === (BH = OH.current) || void 0 === BH ? void 0 : BH.isReady()) && void 0 !== HH && HH
            },
            resetCamera() {
              var HH;
              null === (HH = OH.current) || void 0 === HH || HH.resetCamera()
            },
            setOrbit(HH) {
              var BH;
              null === (BH = OH.current) || void 0 === BH || BH.setOrbit(HH)
            },
            turnCamera(HH) {
              var BH;
              const LH = tH.e[XH];
              null === (BH = OH.current) || void 0 === BH || BH.setOrbit({
                ...LH,
                yaw: LH.yaw + HH
              })
            },
            async ensureReadyForCapture(HH) {
              var BH;
              await (null === (BH = OH.current) || void 0 === BH ? void 0 : BH.untilDrawn(HH))
            },
            getDevTools() {
              var HH;
              return null !== (HH = OH.current) && void 0 !== HH && HH.isReady() ? OH.current.dev : null
            }
          }
        }), [WH, XH, eH]), (0, AH.useEffect)((() => {
          const HH = zH.d.register(EH),
            BH = tH.h.openCharacter(TH.current, XH);
          OH.current = BH, uH = BH;
          let LH = !0;
          return BH.ready.then((() => {
            LH && (oH(!0), IH.current())
          })).catch((HH => {
            console.error("Failed to set up the character preview", HH)
          })), () => {
            LH = !1, HH(), uH === BH && (BH.resetCamera(), uH = null), BH.close(), OH.current = null
          }
        }), []), (0, AH.useEffect)((() => {
          UH <= 0 || VH <= 0 || OH.current.resize(UH, VH)
        }), [UH, VH]), (0, AH.useEffect)((() => {
          if (!mH) return;
          const HH = kH.current;
          for (const BH of SH.r) {
            const LH = null === WH || void 0 === WH ? void 0 : WH[BH],
              AH = HH[BH];
            LH && LH !== AH ? OH.current.setCosmetic(BH, LH) : !LH && AH && bH.current[BH] && OH.current.setCosmetic(BH, bH.current[BH])
          }
          kH.current = {
            ...WH
          }, cH.current = !0, eH()
        }), [WH, mH, eH]), (0, AH.useEffect)((() => {
          mH && OH.current.playEmote(null !== MH && void 0 !== MH ? MH : null)
        }), [MH, xH, mH]), (0, AH.useEffect)((() => {
          if (!mH || null === vH) return;
          const HH = OH.current,
            {
              pitch: BH,
              radius: LH
            } = tH.e[XH];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return HH.setOrbit({
            yaw: vH + QH,
            pitch: BH,
            radius: LH
          }), () => {
            uH === HH && HH.resetCamera()
          };
          const AH = performance.now();
          let rH = 0;
          const SH = hH => {
            HH.setOrbit({
              yaw: vH + (hH - AH) / 6e3 * 2 * Math.PI,
              pitch: BH,
              radius: LH
            }), rH = requestAnimationFrame(SH)
          };
          return rH = requestAnimationFrame(SH), () => {
            cancelAnimationFrame(rH), uH === HH && HH.resetCamera()
          }
        }), [mH, vH]), (0, GH.jsxs)(GH.Fragment, {
          children: [(0, GH.jsx)("div", {
            className: "CharCustomisationPreview",
            ref: TH
          }), PH && (0, GH.jsx)(YH, {
            nametag: PH
          })]
        })
      })))
  },
  37264: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(1998),
      rH = LH(1502);
    const SH = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(HH, BH) {
        HH !== this.userContext && this.sendHeld(), this.userContext = HH;
        for (const [AH, rH] of BH) this.pending.set(AH, rH);
        if (null !== this.timer) return;
        const LH = this.lastSentAt + 1100 - Date.now();
        LH <= 0 ? this.send(HH) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), LH), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(HH) {
        const BH = Array.from(this.pending, (HH => {
          let [BH, LH] = HH;
          return {
            rh: BH,
            Sh: LH
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), rH.d.updateCosmetics(HH, BH).catch((HH => {
          console.error("Failed to update cosmetics", HH)
        }))
      }
    };

    function hH(HH, BH) {
      for (const [LH, AH] of BH) HH.setPlayerCosmetics(LH, AH);
      if (null === AH.gameBridge.latest("connectedGame").websocketUrl) SH.save(HH, BH);
      else
        for (const [LH, rH] of BH) AH.gameBridge.send("updateMyCosmetic", {
          rh: LH,
          Sh: rH
        })
    }
  },
  37112: (HH, BH, LH) => {
    function AH(HH, BH, LH) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(HH, BH).getContext("2d", LH);
      const AH = document.createElement("canvas");
      return AH.width = HH, AH.height = BH, AH.getContext("2d", LH)
    }

    function rH(HH, BH) {
      return HH.getContext("2d", BH)
    }
    LH.d(BH, {
      d: () => rH,
      h: () => AH
    })
  },
  37162: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => EH,
      h: () => zH,
      k: () => tH,
      l: () => CH
    });
    var AH = LH(2010);
    let rH = null,
      SH = 0;
    const hH = new Set;

    function tH() {
      return rH
    }

    function zH() {
      return SH
    }

    function CH(HH) {
      rH = HH, SH++, (0, AH.e)();
      for (const BH of hH) BH()
    }

    function EH(HH) {
      hH.add(HH)
    }
  },
  37177: (HH, BH, LH) => {
    function AH() {
      return LH(37184)
    }

    function rH() {
      return LH(37187)
    }

    function SH(HH) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(HH)
    }
    LH.d(BH, {
      e: () => SH,
      h: () => AH,
      k: () => rH
    })
  },
  37184: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37187: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);