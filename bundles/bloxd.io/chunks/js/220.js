export const id = 220;
export const ids = [220, 296];
export const modules = {
  41316: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      CharacterCustomisationUI: () => JI
    });
    var TB = ZB(63),
      JB = ZB(3171),
      oB = ZB(1179),
      GB = ZB(1091),
      vB = ZB.n(GB),
      kB = ZB(1300),
      cB = ZB(650),
      nB = ZB(1248),
      hB = ZB(2326),
      zB = ZB(1630),
      FB = ZB(2696);
    const NB = kB.y.filter((BB => !zB.h.includes(BB)));

    function gB(BB, IB) {
      return NB.includes(BB) && "string" === typeof IB && (0, FB.d)(BB, IB)
    }

    function qB(BB) {
      const IB = {};
      for (const ZB of NB) {
        const TB = BB[ZB];
        void 0 !== TB && gB(ZB, TB) && (IB[ZB] = TB)
      }
      return IB
    }

    function yB(BB) {
      return 0 === Object.keys(BB).length
    }

    function UB(BB, IB) {
      return Object.entries(BB).every((BB => {
        let [ZB, TB] = BB;
        return IB[ZB] === TB
      }))
    }
    var WB = ZB(2333),
      dB = ZB(3260),
      CB = ZB(2054),
      QB = ZB(1516),
      sB = ZB(2369),
      wB = ZB(20),
      OB = ZB(2838),
      YB = ZB(1561),
      iB = ZB(1186),
      pB = ZB(1919);
    class aB {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(BB) {
        null !== BB && BB !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = BB)
      }
      isFor(BB) {
        return null === this.accountId || this.accountId === BB
      }
      overlay(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return BB.map(((BB, ZB) => {
          var TB, JB;
          return null !== (TB = null !== (JB = this.slots.get(ZB)) && void 0 !== JB ? JB : IB.get(ZB)) && void 0 !== TB ? TB : BB
        }))
      }
    }
    class HB extends OB.c {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new aB;
        super("saved outfits", (async IB => {
          const ZB = BB.isFor(IB.whamm),
            TB = new Map(BB.slots),
            JB = await YB.c.getSavedOutfits(IB);
          return ZB ? BB.overlay(JB, TB) : JB
        })), this.unsaved = BB, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(BB, IB) {
        var ZB, TB;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(BB)) || this.unsaved.before.set(BB, null !== (ZB = null === (TB = this.getState().data) || void 0 === TB ? void 0 : TB[BB]) && void 0 !== ZB ? ZB : {});
        this.unsaved.slots.set(BB, IB), this.update((ZB => ZB.map(((ZB, TB) => TB === BB ? IB : ZB)))), this.sending || this.sendUnsaved()
      }
      clear(BB) {
        this.save(BB, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let BB = !1;
        for (; this.unsaved.slots.size > 0;) {
          const ZB = new Map(this.unsaved.slots);
          let TB = this.getState().accountId;
          try {
            const BB = await iB.userContextManager.getCurrentUserContext();
            if (TB = BB.whamm, this.unsaved.moveTo(BB.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: IB,
              data: JB
            } = this.getState();
            let oB = JB;
            IB === BB.whamm && null !== oB || (oB = this.unsaved.overlay(await YB.c.getSavedOutfits(BB)), this.refresh()), await YB.c.setSavedOutfits(BB, oB), this.unsaved.isFor(BB.whamm) && oB.forEach(((BB, IB) => {
              const TB = this.unsaved.slots.get(IB);
              void 0 === TB || TB === ZB.get(IB) ? this.unsaved.before.delete(IB) : this.unsaved.before.set(IB, BB)
            }))
          } catch (IB) {
            if (console.error("Failed to save outfits", IB), this.getState().accountId === TB && [...this.unsaved.slots].every((BB => {
                let [IB, TB] = BB;
                return ZB.get(IB) === TB
              }))) {
              const IB = [...ZB.values()].every(yB);
              pB.f.showMessage({
                translationKey: IB ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const TB = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((BB => BB.map(((BB, IB) => {
                var ZB;
                return null !== (ZB = TB.get(IB)) && void 0 !== ZB ? ZB : BB
              })))), BB = !0
            }
          }
          for (const [BB, IB] of ZB) this.unsaved.slots.get(BB) === IB && this.unsaved.slots.delete(BB)
        }
        this.sending = !1, BB && this.refresh()
      }
    }
    const MB = new HB;
    var jB = ZB(360),
      PB = ZB(41319),
      RB = ZB(1627),
      rB = ZB(2430),
      mB = ZB(3166),
      XB = ZB(2259),
      LB = ZB(2739),
      eB = ZB(1102);
    ZB(34230), ZB(3267);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var uB = ZB(2374),
      fB = ZB(1421),
      lB = ZB(2460),
      AB = ZB(1403),
      tB = ZB(1153);

    function bB(BB) {
      let {
        wornOutfit: IB,
        onApply: ZB,
        onOverwrite: JB,
        onDelete: GB
      } = BB;
      const {
        t: kB
      } = (0, nB.G)(), {
        accountId: cB,
        data: hB
      } = (0, OB.e)(MB, !1), {
        userContext: zB
      } = (0, oB.d)();
      async function FB(BB, IB) {
        const ZB = await AB.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: TB,
            data: JB
          } = MB.getState();
        var oB, vB;
        !0 === ZB && TB === cB && null !== JB && (UB(oB = JB[BB], vB = IB) && UB(vB, oB)) && (MB.clear(BB), GB(BB))
      }
      return (0, TB.useEffect)((() => {
        MB.ensureLoaded()
      }), []), null === hB || cB !== zB.whamm ? null : (0, tB.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, tB.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, tB.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: kB("homePage:myOutfits")
          })
        }), (0, tB.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: hB.map(((BB, TB) => {
            const oB = yB(BB);
            return (0, tB.jsxs)("div", {
              className: vB()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !oB
              }),
              children: [(0, tB.jsxs)("div", {
                ...(0, QB.ab)(),
                role: oB ? "button" : "link",
                "data-pad-focusable": !0,
                className: vB()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: oB,
                  CharacterPresetCardActive: !oB && UB(BB, IB)
                }),
                onClick: () => {
                  oB ? MB.save(TB, IB) : ZB(BB)
                },
                children: [oB && (0, tB.jsxs)(tB.Fragment, {
                  children: [(0, tB.jsx)(eB.d, {
                    name: "plus"
                  }), kB("homePage:saveOutfit")]
                }), !oB && (0, tB.jsxs)(tB.Fragment, {
                  children: [(0, tB.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, tB.jsx)(lB.b, {
                      cosmetics: BB
                    })
                  }), (0, tB.jsx)(QB.V, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      UB(IB, BB) || (MB.save(TB, IB), JB(TB, BB))
                    },
                    children: kB("general:save")
                  })]
                })]
              }), !oB && (0, tB.jsx)(QB.M, {
                className: "SavedOutfitDeleteButton",
                ariaLabel: kB("general:delete"),
                onClick: () => {
                  FB(TB, BB)
                },
                children: (0, tB.jsx)(eB.d, {
                  name: "trash-can"
                })
              })]
            }, TB)
          }))
        })]
      })
    }
    var xB = ZB(36406),
      EB = ZB(2687),
      DB = ZB(2692);

    function KB(BB, IB, ZB) {
      return null !== BB && !(0, EB.j)(DB.e, IB, ZB, BB.collected, BB.ownedPacks)
    }

    function VB(BB) {
      let {
        locked: IB,
        children: ZB
      } = BB;
      return IB ? (0, tB.jsx)(SB, {
        children: ZB
      }) : ZB
    }

    function SB(BB) {
      var IB;
      let {
        children: ZB
      } = BB;
      const {
        t: TB
      } = (0, nB.G)(), {
        userContext: JB
      } = (0, oB.d)(), GB = null !== (IB = JB.dailyDrop) && void 0 !== IB && IB.hidden ? TB("dailyDrop:lockedFromHidden") : TB("dailyDrop:lockedFrom");
      return (0, tB.jsx)(fB.e, {
        tooltipInner: (0, tB.jsx)(tB.Fragment, {
          children: GB
        }),
        children: ZB
      })
    }

    function BI(BB, IB, ZB) {
      return (0, hB.j)(BB, IB).purchasable && !(0, rB.q)(BB, IB, ZB)
    }

    function II(BB, IB) {
      return Object.entries(BB).some((BB => {
        let [ZB, TB] = BB;
        return BI(ZB, TB, IB)
      }))
    }

    function ZI(BB) {
      var IB;
      let {
        pack: ZB,
        ownedPacks: TB,
        showStoreLink: JB = !1,
        children: oB
      } = BB;
      const {
        t: GB
      } = (0, nB.G)(), kB = RB.d[ZB], cB = kB.purchasable && !TB.includes(ZB) && RB.o.includes(ZB), hB = mB.n[ZB];
      return (0, tB.jsxs)("div", {
        className: vB()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: cB
        }),
        children: [hB && (0, tB.jsx)(hB, {}), (0, tB.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, tB.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (IB = kB.displayName) && void 0 !== IB ? IB : ZB
          }), (cB || JB) && (0, tB.jsxs)(QB.I, {
            onClick: () => {
              cB ? (0, mB.j)(ZB) : (0, sB.n)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, tB.jsx)(eB.d, {
              name: "store"
            }), " ", GB("general:viewInShop")]
          })]
        }), cB && "bee" === ZB && (0, tB.jsx)(mB.e, {}), oB]
      })
    }

    function TI(BB) {
      let {
        equippedEmoteIds: IB,
        ownedPacks: ZB,
        canBuy: TB,
        onUpdateLoadout: JB,
        onEmoteSelected: oB,
        onEquipPreviewSkin: GB
      } = BB;
      const {
        t: cB
      } = (0, nB.G)(), zB = new Set(IB), FB = new Map, NB = Object.keys(hB.f.emote).sort(((BB, IB) => {
        var ZB, TB, JB, oB;
        return (null !== (ZB = null === (TB = (0, hB.h)("emote", BB)) || void 0 === TB ? void 0 : TB.clientIdx) && void 0 !== ZB ? ZB : 0) - (null !== (JB = null === (oB = (0, hB.h)("emote", IB)) || void 0 === oB ? void 0 : oB.clientIdx) && void 0 !== JB ? JB : 0)
      })).filter((BB => {
        const IB = (0, hB.j)("emote", BB),
          JB = (0, rB.q)("emote", BB, ZB);
        return !(IB.purchasable && !JB && !TB) && (IB.clientSelectable || JB)
      }));
      for (const vB of NB) {
        const BB = (0, hB.h)("emote", vB).cosmeticPack;
        FB.has(BB) || FB.set(BB, []), FB.get(BB).push(vB)
      }
      const gB = Array.from(FB.keys());
      return (0, tB.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, tB.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, tB.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: cB("emotes:equippedCount", {
              count: IB.length,
              max: kB.o
            })
          }), (0, tB.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: cB("emotes:loadoutHint")
          })]
        }), gB.map((BB => {
          const TB = FB.get(BB);
          return (0, tB.jsx)(ZI, {
            pack: BB,
            ownedPacks: ZB,
            children: (0, tB.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: TB.map((BB => {
                var TB;
                const GB = IB.indexOf(BB),
                  nB = -1 !== GB,
                  hB = IB.length >= kB.o,
                  FB = BI("emote", BB, ZB),
                  NB = FB || !nB && hB,
                  gB = (0, WB.j)(BB);
                return (0, tB.jsxs)("div", {
                  className: vB()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: nB
                  }),
                  onClick: () => {
                    oB(BB)
                  },
                  children: [(0, tB.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, tB.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${BB}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, tB.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (TB = null === gB || void 0 === gB ? void 0 : gB.displayName) && void 0 !== TB ? TB : BB
                    })]
                  }), (0, tB.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [nB && (0, tB.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: GB + 1
                    }), FB && (0, tB.jsx)(eB.d, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, tB.jsx)(fB.e, {
                      tooltipInner: (0, tB.jsx)(tB.Fragment, {
                        children: cB(nB ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, tB.jsx)("div", {
                        className: vB()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: NB,
                          EmoteCustomPartToggleEquipped: nB
                        }),
                        onClick: ZB => {
                          ZB.stopPropagation(), NB || function(BB) {
                            zB.has(BB) ? JB(IB.filter((IB => IB !== BB))) : IB.length >= kB.o || JB([...IB, BB])
                          }(BB)
                        },
                        children: (0, tB.jsx)(eB.d, {
                          name: nB ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, BB)
              }))
            })
          }, BB)
        }))]
      })
    }
    const JI = (0, TB.memo)((function(BB) {
      let {
        selectedTab: IB
      } = BB;
      const ZB = "characters" === IB ? "skin" : IB,
        {
          t: GB
        } = (0, nB.G)(),
        {
          userContext: NB,
          isUserContextUpdating: gB
        } = (0, oB.d)(),
        yB = (0, JB.d)(),
        {
          gameState: WB
        } = (0, wB.o)(["gameState"]),
        [OB, YB] = (0, TB.useState)({}),
        [iB, pB] = (0, TB.useState)({}),
        [aB, HB] = (0, TB.useState)(null),
        {
          previewEmote: mB,
          triggerEmote: fB
        } = (0, dB.e)(),
        lB = (0, TB.useRef)(kB.y.reduce(((BB, IB) => (BB[IB] = (0, FB.b)(IB), BB)), {})),
        AB = (0, TB.useRef)(!1),
        EB = (0, TB.useRef)(null),
        DB = (0, TB.useRef)(null),
        SB = (0, TB.useRef)(null);

      function JI() {
        null !== DB.current && (clearTimeout(DB.current), DB.current = null);
        const BB = SB.current;
        null !== BB && (SB.current = null, (0, xB.d)(NB, [
          ["emote", BB]
        ]))
      }

      function oI(BB, IB, ZB) {
        var TB, JB, oB;
        lB.current = {
          ...lB.current,
          [BB]: IB
        }, yB(), ZB && ((0, xB.d)(NB, [
          [BB, IB]
        ]), HB(null));
        const GB = (0, hB.h)(BB, IB);
        if (null !== GB && void 0 !== GB && GB.colourGroup && null !== (TB = RB.d[GB.cosmeticPack].colourGroups) && void 0 !== TB && null !== (JB = TB[GB.colourGroup]) && void 0 !== JB && JB.showSwatchSelector) {
          const ZB = (0, hB.g)(IB);
          ZB && pB((IB => ({
            ...IB,
            [`${GB.cosmeticPack}_${BB}_${GB.colourGroup}`]: parseInt(ZB[1])
          })))
        }
        null !== (oB = EB.current) && void 0 !== oB && oB.isReady() && EB.current.updateCosmetic(BB, IB)
      }

      function GI(BB) {
        YB((IB => {
          const ZB = {
            ...IB
          };
          return delete ZB[BB], ZB
        }))
      }

      function vI(BB, IB) {
        let {
          undoable: ZB
        } = IB;
        Object.keys(OB).length > 0 && YB({});
        const TB = Object.entries(BB).filter((BB => {
          let [IB, ZB] = BB;
          return lB.current[IB] !== ZB && !BI(IB, ZB, kI) && !KB(cI, IB, ZB)
        }));
        ZB ? TB.length > 0 && HB({
          kind: "worn",
          outfit: qB(lB.current)
        }) : HB(null);
        for (const [JB, oB] of TB) oI(JB, oB, !1);
        TB.length > 0 && (0, xB.d)(NB, TB)
      }(0, CB.c)("cosmeticsUpdated", (BB => {
        let IB = !1;
        for (const {
            local: ZB,
            Ho: TB,
            Mo: JB
          }
          of BB) {
          if (!ZB) return;
          IB = !0, AB.current || oI(TB, JB, !1), yB()
        }
        IB && (AB.current = !0)
      })), (0, TB.useEffect)((() => {
        if (!gB) {
          for (const [BB, IB] of Object.entries(NB.getPlayerCosmetics())) oI(BB, IB, !1);
          yB()
        }
      }), [gB]), (0, TB.useEffect)((() => () => {
        JI()
      }), []);
      const kI = NB.getOwnedCosmeticPacks(),
        cI = function(BB, IB) {
          return null === BB ? null : {
            collected: new Set(BB.collected),
            ownedPacks: IB
          }
        }(NB.dailyDrop, kI),
        nI = (0, uB.usePurchasesAllowed)(),
        hI = Object.keys(hB.f[ZB]).filter((BB => {
          const IB = (0, hB.j)(ZB, BB),
            TB = (0, rB.q)(ZB, BB, kI);
          return !(IB.purchasable && !TB && !nI) && (IB.clientSelectable || TB)
        })).sort(((BB, IB) => {
          var TB, JB, oB, GB;
          return (null !== (TB = null === (JB = (0, hB.h)(ZB, BB)) || void 0 === JB ? void 0 : JB.clientIdx) && void 0 !== TB ? TB : 0) - (null !== (oB = null === (GB = (0, hB.h)(ZB, IB)) || void 0 === GB ? void 0 : GB.clientIdx) && void 0 !== oB ? oB : 0)
        })),
        zI = new Map;
      for (const TB of hI) {
        var FI;
        const BB = null === (FI = (0, hB.h)(ZB, TB)) || void 0 === FI ? void 0 : FI.cosmeticPack;
        zI.has(BB) || zI.set(BB, []), zI.get(BB).push(TB)
      }
      const NI = function(BB, IB) {
          const ZB = new Set,
            TB = new Set;
          for (const [JB, oB] of Object.entries(hB.f[BB])) {
            if (void 0 === oB.colourGroup) continue;
            const GB = `${oB.cosmeticPack}_${oB.colourGroup}`;
            (BI(BB, JB, IB) ? TB : ZB).add(GB)
          }
          return new Set([...ZB].filter((BB => TB.has(BB))))
        }(ZB, kI),
        gI = new Map;
      for (const [TB, JB] of zI) {
        const BB = [],
          IB = new Map;
        for (const TB of JB) {
          var qI, yI;
          const JB = null !== (qI = null === (yI = (0, hB.h)(ZB, TB)) || void 0 === yI ? void 0 : yI.colourGroup) && void 0 !== qI ? qI : null;
          IB.has(JB) || (IB.set(JB, []), BB.push(JB)), IB.get(JB).push(TB)
        }
        const oB = BB.map((BB => {
          var JB;
          const oB = IB.get(BB),
            GB = BB ? null === (JB = RB.d[TB].colourGroups) || void 0 === JB ? void 0 : JB[BB] : void 0,
            vB = !0 === (null === GB || void 0 === GB ? void 0 : GB.showSwatchSelector) && !NI.has(`${TB}_${BB}`);
          if (vB && GB) {
            var kB;
            const IB = null !== (kB = iB[`${TB}_${ZB}_${BB}`]) && void 0 !== kB ? kB : (0, RB.g)(GB.colours);
            return {
              groupName: BB,
              showSwatch: vB,
              cosmetics: oB.filter((BB => {
                const ZB = (0, hB.g)(BB);
                return !ZB || IB.toString() === ZB[1].toString()
              }))
            }
          }
          return {
            groupName: BB,
            cosmetics: oB,
            showSwatch: vB
          }
        }));
        gI.set(TB, oB)
      }
      const UI = Array.from(zI.keys()),
        WI = new Map;
      for (const [TB, JB] of Object.entries(zB.d)) {
        const BB = RB.d[JB.cosmeticPack],
          IB = !II(JB.cosmetics, kI),
          ZB = RB.l.some((BB => (0, RB.f)(BB) === TB));
        (BB.clientSelectable || ZB || IB) && ((!BB.purchasable || IB || nI) && (WI.has(JB.cosmeticPack) || WI.set(JB.cosmeticPack, []), WI.get(JB.cosmeticPack).push([TB, JB])))
      }
      const dI = Array.from(WI.keys());
      return (0, tB.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === ZB || "nameColour" === ZB) && !NB.playerHasRank("super") && (0, tB.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, tB.jsx)(eB.d, {
            name: "bolt"
          }), GB("homePage:unlockWithSuperRank"), nI && (0, tB.jsx)(QB.p, {
            onClick: () => {
              (0, sB.n)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: GB("general:getItNow")
          })]
        }), (0, tB.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === IB && (0, tB.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, tB.jsx)(bB, {
              wornOutfit: qB(lB.current),
              onApply: BB => {
                vI(BB, {
                  undoable: !0
                })
              },
              onOverwrite: (BB, IB) => {
                HB({
                  kind: "slot",
                  slot: BB,
                  outfit: IB
                })
              },
              onDelete: BB => {
                HB((IB => "slot" === (null === IB || void 0 === IB ? void 0 : IB.kind) && IB.slot === BB ? null : IB))
              }
            }), dI.map((BB => {
              const IB = WI.get(BB);
              return (0, tB.jsx)(ZI, {
                pack: BB,
                ownedPacks: kI,
                showStoreLink: !RB.n.includes(BB) && IB.some((BB => {
                  let [, {
                    cosmetics: IB
                  }] = BB;
                  return II(IB, kI)
                })),
                children: (0, tB.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: IB.map((BB => {
                    let [IB, {
                      cosmetics: ZB
                    }] = BB;
                    const TB = II(ZB, kI),
                      JB = !TB && function(BB, IB) {
                        return Object.entries(IB).some((IB => {
                          let [ZB, TB] = IB;
                          return KB(BB, ZB, TB)
                        }))
                      }(cI, ZB),
                      oB = TB || JB,
                      GB = UB(ZB, OB),
                      kB = !GB && UB(ZB, lB.current);
                    return (0, tB.jsx)(VB, {
                      locked: JB,
                      children: (0, tB.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: vB()("CharacterPresetCard", {
                          CharacterPresetCardActive: kB,
                          CharacterPresetCardTryingOn: GB
                        }),
                        onClick: () => {
                          oB ? function(BB) {
                            UB(BB, OB) ? YB({}) : YB({
                              ...BB
                            })
                          }(ZB) : vI(ZB, {
                            undoable: !0
                          })
                        },
                        children: [(0, tB.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(/textures/charSkins/previews/character_${IB}_preview.png)`
                          }
                        }), oB && (0, tB.jsx)(eB.d, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, IB)
                  }))
                })
              }, BB)
            }))]
          }), "emote" === IB && (0, tB.jsx)(TI, {
            equippedEmoteIds: (0, FB.h)(lB.current.emote),
            ownedPacks: kI,
            canBuy: nI,
            onUpdateLoadout: BB => {
              const IB = (0, FB.j)(BB);
              var ZB;
              lB.current = {
                ...lB.current,
                emote: IB
              }, NB.setPlayerCosmetics("emote", IB), yB(), ZB = IB, SB.current = ZB, null !== DB.current && clearTimeout(DB.current), DB.current = setTimeout(JI, 350)
            },
            onEmoteSelected: fB,
            onEquipPreviewSkin: () => {
              ! function(BB, IB) {
                for (const ZB of kB.y) "cape" !== ZB && "nameColour" !== ZB && "emote" !== ZB && BB(ZB, "skin" === ZB ? "skin_preview" : `${ZB}_none`, !1);
                IB()
              }(oI, yB)
            }
          }), "characters" !== IB && "emote" !== IB && (0, tB.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, UI.map((BB => {
              const IB = gI.get(BB);
              return (0, tB.jsx)(ZI, {
                pack: BB,
                ownedPacks: kI,
                children: IB.map((IB => {
                  var TB;
                  let {
                    groupName: JB,
                    cosmetics: oB,
                    showSwatch: GB
                  } = IB;
                  const kB = JB ? null === (TB = RB.d[BB].colourGroups) || void 0 === TB ? void 0 : TB[JB] : void 0,
                    nB = `${BB}_${ZB}_${JB}`;
                  return (0, tB.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [GB && kB && (0, tB.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...kB.colours.map(((BB, IB) => ({
                        color: BB,
                        index: IB
                      })))].sort(((BB, IB) => BB.color.order - IB.color.order)).map((IB => {
                        var TB;
                        let {
                          color: oB,
                          index: GB
                        } = IB;
                        return (0, tB.jsx)("div", {
                          className: vB()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (TB = iB[nB]) && void 0 !== TB ? TB : (0, RB.g)(kB.colours)) === GB
                          }),
                          style: {
                            backgroundColor: `rgb(${oB.rbg.join(",")})`
                          },
                          onClick: () => {
                            var IB;
                            pB((BB => ({
                              ...BB,
                              [nB]: GB
                            })));
                            const TB = OB[ZB],
                              oB = TB ? (0, hB.h)(ZB, TB) : null,
                              vB = (null === oB || void 0 === oB ? void 0 : oB.cosmeticPack) === BB,
                              kB = vB ? TB : lB.current[ZB],
                              cB = vB ? oB : (0, hB.h)(ZB, kB);
                            if ((null === cB || void 0 === cB ? void 0 : cB.cosmeticPack) !== BB) return;
                            if ((null !== (IB = null === cB || void 0 === cB ? void 0 : cB.colourGroup) && void 0 !== IB ? IB : null) !== JB) return;
                            const zB = (0, hB.g)(kB);
                            if (zB) {
                              const BB = `${ZB}_${zB[0]}_${GB}`;
                              BI(ZB, BB, kI) || KB(cI, ZB, BB) ? YB((IB => ({
                                ...IB,
                                [ZB]: BB
                              }))) : (vB && GI(ZB), oI(ZB, BB, !0))
                            }
                          }
                        }, oB.rbg.join())
                      }))
                    }), oB.map((BB => {
                      const IB = BB === lB.current[ZB],
                        TB = OB[ZB] === BB,
                        JB = BI(ZB, BB, kI),
                        oB = !JB && KB(cI, ZB, BB),
                        GB = JB || oB;
                      let kB = !0;
                      return GB || IB || ("cape" !== ZB || (0, jB.Qd)(NB.getPlayerRanks(), BB)) && ("nameColour" !== ZB || NB.playerHasRank("super")) || (kB = !1), (0, tB.jsx)(VB, {
                        locked: oB,
                        children: (0, tB.jsxs)("div", {
                          className: vB()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: IB && !TB,
                            TryingOnCharCustomPartWrapper: TB,
                            DisabledCharCustomPartWrapper: !kB,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === ZB
                          }),
                          onClick: () => {
                            if (kB)
                              if (GB) YB((IB => {
                                if (IB[ZB] === BB) {
                                  const BB = {
                                    ...IB
                                  };
                                  return delete BB[ZB], BB
                                }
                                return {
                                  ...IB,
                                  [ZB]: BB
                                }
                              }));
                              else {
                                var IB;
                                if (OB[ZB] && GI(ZB), BB === lB.current[ZB]) return;
                                null !== (IB = EB.current) && void 0 !== IB && IB.isReady() && oI(ZB, BB, !0)
                              }
                          },
                          children: ["profileEffect" === ZB ? (0, tB.jsx)("div", {
                            className: "CharCustomPart CharCustomProfileEffect",
                            children: (0, tB.jsx)(LB.f, {
                              playerSocialPreview: (0, XB.d)(BB, {
                                name: NB.getPlayerName(),
                                cosmetics: NB.getPlayerCosmetics()
                              }),
                              showLocation: !1,
                              opensProfileCard: !1
                            })
                          }) : (0, tB.jsx)("div", {
                            className: vB()("CharCustomPart", {
                              PixelatedImage: "cape" === ZB
                            }),
                            style: (0, hB.h)(ZB, BB).previewTex ? {
                              backgroundImage: `url(/textures/charSkins/previews/${(0,hB.h)(ZB,BB).previewTex}.png)`
                            } : {
                              backgroundColor: cB.t[BB]
                            }
                          }), GB && (0, tB.jsx)(eB.d, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, BB)
                    }))]
                  }, null !== JB && void 0 !== JB ? JB : "ungrouped")
                }))
              }, BB)
            }))]
          }), aB && (0, tB.jsxs)(QB.g, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === aB.kind ? vI(aB.outfit, {
                undoable: !1
              }) : (MB.save(aB.slot, aB.outfit), HB(null))
            },
            children: [(0, tB.jsx)(eB.d, {
              name: "rotate-left"
            }), GB("general:undo")]
          }), (0, tB.jsx)(PB.CharacterPreview, {
            ref: EB,
            forcedCosmetics: OB,
            Mv: mB.id,
            emotePlaySeq: mB.seq,
            onReady: () => {
              for (const BB of kB.y) oI(BB, lB.current[BB], !1)
            }
          })]
        })]
      })
    }))
  },
  41319: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      CharacterPreview: () => hB
    });
    var TB = ZB(63),
      JB = ZB(2896),
      oB = ZB(1300),
      GB = ZB(2696),
      vB = ZB(34230),
      kB = ZB(3811),
      cB = ZB(1153);
    const nB = .6 * Math.PI,
      hB = (0, TB.memo)((0, TB.forwardRef)((function(BB, IB) {
        let {
          onReady: ZB,
          onDrawn: hB,
          owner: zB = "other",
          framing: FB = "player",
          forcedCosmetics: NB,
          Mv: gB,
          emotePlaySeq: qB,
          turntableFromYaw: yB = null
        } = BB;
        const UB = (0, TB.useRef)(null),
          {
            width: WB,
            height: dB
          } = (0, JB.e)(UB),
          CB = (0, TB.useRef)(null),
          QB = (0, TB.useRef)({}),
          sB = (0, TB.useRef)({}),
          [wB, OB] = (0, TB.useState)(!1),
          YB = (0, TB.useRef)(ZB);
        YB.current = ZB;
        const iB = (0, TB.useRef)(hB);
        iB.current = hB;
        const pB = (0, TB.useRef)(null),
          aB = (0, TB.useRef)(!1),
          HB = (0, TB.useRef)(!1),
          MB = (0, TB.useCallback)((() => {
            const BB = CB.current;
            if (!BB || !iB.current || aB.current || !HB.current) return;
            const IB = {};
            pB.current = IB, queueMicrotask((() => {
              if (pB.current !== IB) return;
              const ZB = Promise.all(oB.y.map((IB => BB.untilDrawn(IB)))).catch((BB => {
                  console.error("Failed to draw the character preview", BB)
                })),
                TB = new Promise((BB => {
                  setTimeout(BB, 1e4)
                }));
              Promise.race([ZB, TB]).then((() => {
                var ZB;
                CB.current !== BB || pB.current !== IB || aB.current || (aB.current = !0, null === (ZB = iB.current) || void 0 === ZB || ZB.call(iB))
              }))
            }))
          }), []);
        return (0, TB.useImperativeHandle)(IB, (() => {
          const BB = (BB, IB) => {
            var ZB;
            (QB.current[BB] = IB, null !== NB && void 0 !== NB && NB[BB]) || (null === (ZB = CB.current) || void 0 === ZB || ZB.setCosmetic(BB, IB), MB())
          };
          return {
            updateCosmetic: BB,
            setAllCosmetics(IB) {
              for (const TB of oB.y) {
                var ZB;
                BB(TB, null !== (ZB = IB[TB]) && void 0 !== ZB ? ZB : (0, GB.b)(TB))
              }
            },
            isReady() {
              var BB, IB;
              return null !== (BB = null === (IB = CB.current) || void 0 === IB ? void 0 : IB.isReady()) && void 0 !== BB && BB
            },
            resetCamera() {
              var BB;
              null === (BB = CB.current) || void 0 === BB || BB.resetCamera()
            },
            setOrbit(BB) {
              var IB;
              null === (IB = CB.current) || void 0 === IB || IB.setOrbit(BB)
            },
            async ensureReadyForCapture(BB) {
              var IB;
              await (null === (IB = CB.current) || void 0 === IB ? void 0 : IB.untilDrawn(BB))
            },
            getDevTools() {
              var BB;
              return null !== (BB = CB.current) && void 0 !== BB && BB.isReady() ? CB.current.dev : null
            }
          }
        }), [NB, MB]), (0, TB.useEffect)((() => {
          const BB = kB.e.register(zB),
            IB = vB.i.openCharacter(UB.current, FB);
          CB.current = IB;
          let ZB = !0;
          return IB.ready.then((() => {
            ZB && (OB(!0), YB.current())
          })).catch((BB => {
            console.error("Failed to set up the character preview", BB)
          })), () => {
            ZB = !1, BB(), IB.resetCamera(), IB.close(), CB.current = null
          }
        }), []), (0, TB.useEffect)((() => {
          WB <= 0 || dB <= 0 || CB.current.resize(WB, dB)
        }), [WB, dB]), (0, TB.useEffect)((() => {
          if (!wB) return;
          const BB = sB.current;
          for (const IB of oB.y) {
            const ZB = null === NB || void 0 === NB ? void 0 : NB[IB],
              TB = BB[IB];
            ZB && ZB !== TB ? CB.current.setCosmetic(IB, ZB) : !ZB && TB && QB.current[IB] && CB.current.setCosmetic(IB, QB.current[IB])
          }
          sB.current = {
            ...NB
          }, HB.current = !0, MB()
        }), [NB, wB, MB]), (0, TB.useEffect)((() => {
          wB && CB.current.playEmote(null !== gB && void 0 !== gB ? gB : null)
        }), [gB, qB, wB]), (0, TB.useEffect)((() => {
          if (!wB || null === yB) return;
          const BB = CB.current,
            {
              pitch: IB,
              radius: ZB
            } = vB.b[FB];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return BB.setOrbit({
            yaw: yB + nB,
            pitch: IB,
            radius: ZB
          }), () => {
            BB.resetCamera()
          };
          const TB = performance.now();
          let JB = 0;
          const oB = GB => {
            BB.setOrbit({
              yaw: yB + (GB - TB) / 6e3 * 2 * Math.PI,
              pitch: IB,
              radius: ZB
            }), JB = requestAnimationFrame(oB)
          };
          return JB = requestAnimationFrame(oB), () => {
            cancelAnimationFrame(JB), BB.resetCamera()
          }
        }), [wB, yB]), (0, cB.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: UB
        })
      })))
  },
  36406: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB
    });
    var TB = ZB(1995),
      JB = ZB(1561);
    const oB = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(BB, IB) {
        BB !== this.userContext && this.sendHeld(), this.userContext = BB;
        for (const [TB, JB] of IB) this.pending.set(TB, JB);
        if (null !== this.timer) return;
        const ZB = this.lastSentAt + 1100 - Date.now();
        ZB <= 0 ? this.send(BB) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), ZB), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(BB) {
        const IB = Array.from(this.pending, (BB => {
          let [IB, ZB] = BB;
          return {
            Ho: IB,
            Mo: ZB
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), JB.c.updateCosmetics(BB, IB).catch((BB => {
          console.error("Failed to update cosmetics", BB)
        }))
      }
    };

    function GB(BB, IB) {
      for (const [ZB, TB] of IB) BB.setPlayerCosmetics(ZB, TB);
      if (null === TB.gameBridge.latest("connectedGame").websocketUrl) oB.save(BB, IB);
      else
        for (const [ZB, JB] of IB) TB.gameBridge.send("updateMyCosmetic", {
          Ho: ZB,
          Mo: JB
        })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);