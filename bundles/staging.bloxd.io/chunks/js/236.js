export const id = 236;
export const ids = [236, 237];
export const modules = {
  44444: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      CharacterCustomisationUI: () => JO
    });
    var YB = GB(56),
      DB = GB(2839),
      QB = GB(3915),
      oB = GB(3903),
      jB = GB(1112),
      yB = GB(1090),
      JB = GB.n(yB),
      MB = GB(1238),
      PB = GB(615),
      zB = GB(1175),
      lB = GB(2392),
      pB = GB(1611),
      qB = GB(2787);
    const ZB = MB.t.filter((BB => !pB.l.includes(BB)));

    function NB(BB, OB) {
      return ZB.includes(BB) && "string" === typeof OB && (0, qB.e)(BB, OB)
    }

    function RB(BB) {
      const OB = {};
      for (const GB of ZB) {
        const YB = BB[GB];
        void 0 !== YB && NB(GB, YB) && (OB[GB] = YB)
      }
      return OB
    }

    function WB(BB) {
      return 0 === Object.keys(BB).length
    }

    function AB(BB, OB) {
      return Object.entries(BB).every((BB => {
        let [GB, YB] = BB;
        return OB[GB] === YB
      }))
    }
    var VB = GB(2397),
      SB = GB(3497),
      nB = GB(2063),
      UB = GB(1485),
      fB = GB(2437),
      kB = GB(2516),
      dB = GB(16),
      KB = GB(2974),
      uB = GB(1540),
      mB = GB(1121),
      IB = GB(1964);
    class FB {
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
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return BB.map(((BB, GB) => {
          var YB, DB;
          return null !== (YB = null !== (DB = this.slots.get(GB)) && void 0 !== DB ? DB : OB.get(GB)) && void 0 !== YB ? YB : BB
        }))
      }
    }
    class iB extends KB.c {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new FB;
        super("saved outfits", (async OB => {
          const GB = BB.isFor(OB.whamm),
            YB = new Map(BB.slots),
            DB = await uB.b.getSavedOutfits(OB);
          return GB ? BB.overlay(DB, YB) : DB
        })), this.unsaved = BB, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(BB, OB) {
        var GB, YB;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(BB)) || this.unsaved.before.set(BB, null !== (GB = null === (YB = this.getState().data) || void 0 === YB ? void 0 : YB[BB]) && void 0 !== GB ? GB : {});
        this.unsaved.slots.set(BB, OB), this.update((GB => GB.map(((GB, YB) => YB === BB ? OB : GB)))), this.sending || this.sendUnsaved()
      }
      clear(BB) {
        this.save(BB, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let BB = !1;
        for (; this.unsaved.slots.size > 0;) {
          const GB = new Map(this.unsaved.slots);
          let YB = this.getState().accountId;
          try {
            const BB = await mB.userContextManager.getCurrentUserContext();
            if (YB = BB.whamm, this.unsaved.moveTo(BB.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: OB,
              data: DB
            } = this.getState();
            let QB = DB;
            OB === BB.whamm && null !== QB || (QB = this.unsaved.overlay(await uB.b.getSavedOutfits(BB)), this.refresh()), await uB.b.setSavedOutfits(BB, QB), this.unsaved.isFor(BB.whamm) && QB.forEach(((BB, OB) => {
              const YB = this.unsaved.slots.get(OB);
              void 0 === YB || YB === GB.get(OB) ? this.unsaved.before.delete(OB) : this.unsaved.before.set(OB, BB)
            }))
          } catch (OB) {
            if (console.error("Failed to save outfits", OB), this.getState().accountId === YB && [...this.unsaved.slots].every((BB => {
                let [OB, YB] = BB;
                return GB.get(OB) === YB
              }))) {
              const OB = [...GB.values()].every(WB);
              IB.d.showMessage({
                translationKey: OB ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const YB = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((BB => BB.map(((BB, OB) => {
                var GB;
                return null !== (GB = YB.get(OB)) && void 0 !== GB ? GB : BB
              })))), BB = !0
            }
          }
          for (const [BB, OB] of GB) this.unsaved.slots.get(BB) === OB && this.unsaved.slots.delete(BB)
        }
        this.sending = !1, BB && this.refresh()
      }
    }
    const LB = new iB;
    var gB = GB(353),
      rB = GB(44451),
      XB = GB(1606),
      wB = GB(2496),
      EB = GB(3370),
      cB = GB(3494),
      hB = GB(2454),
      aB = GB(1383);
    GB(34828), GB(3506);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var eB = GB(2444),
      TB = GB(3516),
      bB = GB(3521),
      CB = GB(1405),
      HB = GB(2554),
      vB = GB(1400),
      sB = GB(1282);

    function xB(BB) {
      let {
        wornOutfit: OB,
        onApply: GB,
        onOverwrite: DB,
        onDelete: QB
      } = BB;
      const {
        t: oB
      } = (0, zB.H)(), {
        accountId: yB,
        data: MB
      } = (0, KB.h)(LB, !1), {
        userContext: PB
      } = (0, jB.d)();
      async function lB(BB, OB) {
        const GB = await vB.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: YB,
            data: DB
          } = LB.getState();
        var oB, jB;
        !0 === GB && YB === yB && null !== DB && (AB(oB = DB[BB], jB = OB) && AB(jB, oB)) && (LB.clear(BB), QB(BB))
      }
      return (0, YB.useEffect)((() => {
        LB.ensureLoaded()
      }), []), null === MB || yB !== PB.whamm ? null : (0, sB.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, sB.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, sB.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: oB("homePage:myOutfits")
          })
        }), (0, sB.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: MB.map(((BB, YB) => {
            const QB = WB(BB);
            return (0, sB.jsxs)("div", {
              className: JB()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !QB
              }),
              children: [(0, sB.jsxs)("div", {
                ...(0, UB.db)(),
                role: QB ? "button" : "link",
                "data-pad-focusable": !0,
                className: JB()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: QB,
                  CharacterPresetCardActive: !QB && AB(BB, OB)
                }),
                onClick: () => {
                  QB ? LB.save(YB, OB) : GB(BB)
                },
                children: [QB && (0, sB.jsxs)(sB.Fragment, {
                  children: [(0, sB.jsx)(aB.b, {
                    name: "plus"
                  }), oB("homePage:saveOutfit")]
                }), !QB && (0, sB.jsxs)(sB.Fragment, {
                  children: [(0, sB.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, sB.jsx)(HB.b, {
                      cosmetics: BB
                    })
                  }), (0, sB.jsx)(UB.Z, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      AB(OB, BB) || (LB.save(YB, OB), DB(YB, BB))
                    },
                    children: oB("general:save")
                  })]
                })]
              }), !QB && (0, sB.jsx)("button", {
                type: "button",
                className: "SavedOutfitDeleteButton",
                "data-pad-destructive": !0,
                "aria-label": oB("general:delete"),
                title: oB("general:delete"),
                onClick: () => {
                  lB(YB, BB)
                },
                children: (0, sB.jsx)(aB.b, {
                  name: "trash-can"
                })
              })]
            }, YB)
          }))
        })]
      })
    }
    var tB = GB(37063),
      BO = GB(2775),
      OO = GB(2782);

    function GO(BB, OB, GB) {
      return null !== BB && !(0, BO.e)(OO.e, OB, GB, BB.collected, BB.ownedPacks)
    }

    function YO(BB) {
      let {
        locked: OB,
        children: GB
      } = BB;
      return OB ? (0, sB.jsx)(DO, {
        children: GB
      }) : GB
    }

    function DO(BB) {
      var OB;
      let {
        children: GB
      } = BB;
      const {
        t: YB
      } = (0, zB.H)(), {
        userContext: DB
      } = (0, jB.d)(), QB = null !== (OB = DB.dailyDrop) && void 0 !== OB && OB.hidden ? YB("dailyDrop:lockedFromHidden") : YB("dailyDrop:lockedFrom");
      return (0, sB.jsx)(CB.g, {
        tooltipInner: (0, sB.jsx)(sB.Fragment, {
          children: QB
        }),
        children: GB
      })
    }

    function QO(BB, OB, GB) {
      return (0, lB.p)(BB, OB).purchasable && !(0, wB.x)(BB, OB, GB)
    }

    function oO(BB, OB) {
      return Object.entries(BB).some((BB => {
        let [GB, YB] = BB;
        return QO(GB, YB, OB)
      }))
    }

    function jO(BB) {
      var OB;
      let {
        pack: GB,
        ownedPacks: YB,
        showStoreLink: DB = !1,
        children: QB
      } = BB;
      const {
        t: oB
      } = (0, zB.H)(), jB = XB.d[GB], yB = jB.purchasable && !YB.includes(GB) && XB.u.includes(GB), MB = EB.k[GB];
      return (0, sB.jsxs)("div", {
        className: JB()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: yB
        }),
        children: [MB && (0, sB.jsx)(MB, {}), (0, sB.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, sB.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (OB = jB.displayName) && void 0 !== OB ? OB : GB
          }), (yB || DB) && (0, sB.jsxs)(UB.H, {
            onClick: () => {
              yB ? (0, EB.i)(GB) : (0, fB.p)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, sB.jsx)(aB.b, {
              name: "store"
            }), " ", oB("general:viewInShop")]
          })]
        }), yB && "bee" === GB && (0, sB.jsx)(EB.e, {}), QB]
      })
    }

    function yO(BB) {
      let {
        equippedEmoteIds: OB,
        ownedPacks: GB,
        canBuy: YB,
        onUpdateLoadout: DB,
        onEmoteSelected: QB,
        onEquipPreviewSkin: oB
      } = BB;
      const {
        t: jB
      } = (0, zB.H)(), yB = new Set(OB), PB = new Map, pB = Object.keys(lB.h.emote).sort(((BB, OB) => {
        var GB, YB, DB, QB;
        return (null !== (GB = null === (YB = (0, lB.n)("emote", BB)) || void 0 === YB ? void 0 : YB.clientIdx) && void 0 !== GB ? GB : 0) - (null !== (DB = null === (QB = (0, lB.n)("emote", OB)) || void 0 === QB ? void 0 : QB.clientIdx) && void 0 !== DB ? DB : 0)
      })).filter((BB => {
        const OB = (0, lB.p)("emote", BB),
          DB = (0, wB.x)("emote", BB, GB);
        return !(OB.purchasable && !DB && !YB) && (OB.clientSelectable || DB)
      }));
      for (const JB of pB) {
        const BB = (0, lB.n)("emote", JB).cosmeticPack;
        PB.has(BB) || PB.set(BB, []), PB.get(BB).push(JB)
      }
      const qB = Array.from(PB.keys());
      return (0, sB.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, sB.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, sB.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: jB("emotes:equippedCount", {
              count: OB.length,
              max: MB.j
            })
          }), (0, sB.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: jB("emotes:loadoutHint")
          })]
        }), qB.map((BB => {
          const YB = PB.get(BB);
          return (0, sB.jsx)(jO, {
            pack: BB,
            ownedPacks: GB,
            children: (0, sB.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: YB.map((BB => {
                var YB;
                const oB = OB.indexOf(BB),
                  PB = -1 !== oB,
                  zB = OB.length >= MB.j,
                  lB = QO("emote", BB, GB),
                  pB = lB || !PB && zB,
                  qB = (0, VB.k)(BB);
                return (0, sB.jsxs)("div", {
                  className: JB()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: PB
                  }),
                  onClick: () => {
                    QB(BB)
                  },
                  children: [(0, sB.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, sB.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(${(0,TB.f)("emote",BB)})`
                      },
                      "aria-hidden": !0
                    }), (0, sB.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (YB = null === qB || void 0 === qB ? void 0 : qB.displayName) && void 0 !== YB ? YB : BB
                    })]
                  }), (0, sB.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [PB && (0, sB.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: oB + 1
                    }), lB && (0, sB.jsx)(aB.b, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, sB.jsx)(CB.g, {
                      tooltipInner: (0, sB.jsx)(sB.Fragment, {
                        children: jB(PB ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, sB.jsx)("div", {
                        className: JB()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: pB,
                          EmoteCustomPartToggleEquipped: PB
                        }),
                        onClick: GB => {
                          GB.stopPropagation(), pB || function(BB) {
                            yB.has(BB) ? DB(OB.filter((OB => OB !== BB))) : OB.length >= MB.j || DB([...OB, BB])
                          }(BB)
                        },
                        children: (0, sB.jsx)(aB.b, {
                          name: PB ? "minus" : "plus",
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
    const JO = (0, YB.memo)((function(BB) {
      let {
        selectedTab: OB
      } = BB;
      const GB = "characters" === OB ? "skin" : OB,
        {
          t: yB
        } = (0, zB.H)(),
        {
          userContext: ZB,
          isUserContextUpdating: NB
        } = (0, jB.d)(),
        WB = (0, DB.c)(),
        {
          gameState: VB
        } = (0, dB.o)(["gameState"]),
        [KB, uB] = (0, YB.useState)({}),
        mB = (0, YB.useRef)(KB);
      mB.current = KB;
      const [IB, FB] = (0, YB.useState)({}), [iB, EB] = (0, YB.useState)(null), {
        previewEmote: TB,
        triggerEmote: CB
      } = (0, SB.c)(), HB = (0, YB.useRef)(MB.t.reduce(((BB, OB) => (BB[OB] = (0, qB.d)(OB), BB)), {})), vB = (0, YB.useRef)(!1), BO = (0, YB.useRef)(null), OO = (0, YB.useRef)(TB);
      OO.current = TB;
      const DO = (0, YB.useRef)(null),
        JO = (0, YB.useRef)(null);

      function MO() {
        null !== DO.current && (clearTimeout(DO.current), DO.current = null);
        const BB = JO.current;
        null !== BB && (JO.current = null, (0, tB.d)(ZB, [
          ["emote", BB]
        ]))
      }

      function PO(BB, OB, GB) {
        var YB, DB, QB;
        HB.current = {
          ...HB.current,
          [BB]: OB
        }, WB(), GB && ((0, tB.d)(ZB, [
          [BB, OB]
        ]), EB(null));
        const oB = (0, lB.n)(BB, OB);
        if (null !== oB && void 0 !== oB && oB.colourGroup && null !== (YB = XB.d[oB.cosmeticPack].colourGroups) && void 0 !== YB && null !== (DB = YB[oB.colourGroup]) && void 0 !== DB && DB.showSwatchSelector) {
          const GB = (0, lB.l)(OB);
          GB && FB((OB => ({
            ...OB,
            [`${oB.cosmeticPack}_${BB}_${oB.colourGroup}`]: parseInt(GB[1])
          })))
        }
        null !== (QB = BO.current) && void 0 !== QB && QB.isReady() && BO.current.updateCosmetic(BB, OB)
      }

      function zO(BB) {
        uB((OB => {
          const GB = {
            ...OB
          };
          return delete GB[BB], GB
        }))
      }

      function lO(BB, OB) {
        let {
          undoable: GB
        } = OB;
        Object.keys(KB).length > 0 && uB({});
        const YB = Object.entries(BB).filter((BB => {
          let [OB, GB] = BB;
          return HB.current[OB] !== GB && !QO(OB, GB, pO) && !GO(qO, OB, GB)
        }));
        GB ? YB.length > 0 && EB({
          kind: "worn",
          outfit: RB(HB.current)
        }) : EB(null);
        for (const [DB, QB] of YB) PO(DB, QB, !1);
        YB.length > 0 && (0, tB.d)(ZB, YB)
      }(0, nB.b)("cosmeticsUpdated", (BB => {
        let OB = !1;
        for (const {
            local: GB,
            UB: YB,
            fB: DB
          }
          of BB) {
          if (!GB) return;
          OB = !0, vB.current || PO(YB, DB, !1), WB()
        }
        OB && (vB.current = !0)
      })), (0, YB.useEffect)((() => {
        if (!NB) {
          for (const [BB, OB] of Object.entries(ZB.getPlayerCosmetics())) PO(BB, OB, !1);
          WB()
        }
      }), [NB]), (0, YB.useEffect)((() => () => {
        MO()
      }), []);
      const pO = ZB.getOwnedCosmeticPacks(),
        qO = function(BB, OB) {
          return null === BB ? null : {
            collected: new Set(BB.collected),
            ownedPacks: OB
          }
        }(ZB.dailyDrop, pO),
        ZO = (0, eB.usePurchasesAllowed)(),
        NO = Object.keys(lB.h[GB]).filter((BB => {
          const OB = (0, lB.p)(GB, BB),
            YB = (0, wB.x)(GB, BB, pO);
          return !(OB.purchasable && !YB && !ZO) && (OB.clientSelectable || YB)
        })).sort(((BB, OB) => {
          var YB, DB, QB, oB;
          return (null !== (YB = null === (DB = (0, lB.n)(GB, BB)) || void 0 === DB ? void 0 : DB.clientIdx) && void 0 !== YB ? YB : 0) - (null !== (QB = null === (oB = (0, lB.n)(GB, OB)) || void 0 === oB ? void 0 : oB.clientIdx) && void 0 !== QB ? QB : 0)
        })),
        RO = new Map;
      for (const YB of NO) {
        var WO;
        const BB = null === (WO = (0, lB.n)(GB, YB)) || void 0 === WO ? void 0 : WO.cosmeticPack;
        RO.has(BB) || RO.set(BB, []), RO.get(BB).push(YB)
      }
      const AO = function(BB, OB) {
          const GB = new Set,
            YB = new Set;
          for (const [DB, QB] of Object.entries(lB.h[BB])) {
            if (void 0 === QB.colourGroup) continue;
            const oB = `${QB.cosmeticPack}_${QB.colourGroup}`;
            (QO(BB, DB, OB) ? YB : GB).add(oB)
          }
          return new Set([...GB].filter((BB => YB.has(BB))))
        }(GB, pO),
        VO = new Map;
      for (const [YB, DB] of RO) {
        const BB = [],
          OB = new Map;
        for (const YB of DB) {
          var SO, nO;
          const DB = null !== (SO = null === (nO = (0, lB.n)(GB, YB)) || void 0 === nO ? void 0 : nO.colourGroup) && void 0 !== SO ? SO : null;
          OB.has(DB) || (OB.set(DB, []), BB.push(DB)), OB.get(DB).push(YB)
        }
        const QB = BB.map((BB => {
          var DB;
          const QB = OB.get(BB),
            oB = BB ? null === (DB = XB.d[YB].colourGroups) || void 0 === DB ? void 0 : DB[BB] : void 0,
            jB = !0 === (null === oB || void 0 === oB ? void 0 : oB.showSwatchSelector) && !AO.has(`${YB}_${BB}`);
          if (jB && oB) {
            var yB;
            const OB = null !== (yB = IB[`${YB}_${GB}_${BB}`]) && void 0 !== yB ? yB : (0, XB.i)(oB.colours);
            return {
              groupName: BB,
              showSwatch: jB,
              cosmetics: QB.filter((BB => {
                const GB = (0, lB.l)(BB);
                return !GB || OB.toString() === GB[1].toString()
              }))
            }
          }
          return {
            groupName: BB,
            cosmetics: QB,
            showSwatch: jB
          }
        }));
        VO.set(YB, QB)
      }
      const UO = Array.from(RO.keys()),
        fO = new Map;
      for (const [YB, DB] of Object.entries(pB.d)) {
        const BB = XB.d[DB.cosmeticPack],
          OB = (0, wB.v)(DB.cosmetics, pO),
          GB = XB.q.some((BB => (0, XB.h)(BB) === YB));
        (BB.clientSelectable || GB || OB) && ((!BB.purchasable || OB || ZO) && (fO.has(DB.cosmeticPack) || fO.set(DB.cosmeticPack, []), fO.get(DB.cosmeticPack).push([YB, DB])))
      }
      const kO = Array.from(fO.keys());
      return (0, sB.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === GB || "nameColour" === GB) && !(0, PB.e)(ZB.getPlayerRanks()) && (0, sB.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, sB.jsx)(aB.b, {
            name: "bolt"
          }), yB((0, kB.u)(Date.now()).unlockWithKey), ZO && (0, sB.jsx)(UB.q, {
            onClick: () => {
              (0, fB.p)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: yB("general:getItNow")
          })]
        }), (0, sB.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === OB && (0, sB.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, sB.jsx)(xB, {
              wornOutfit: RB(HB.current),
              onApply: BB => {
                lO(BB, {
                  undoable: !0
                })
              },
              onOverwrite: (BB, OB) => {
                EB({
                  kind: "slot",
                  slot: BB,
                  outfit: OB
                })
              },
              onDelete: BB => {
                EB((OB => "slot" === (null === OB || void 0 === OB ? void 0 : OB.kind) && OB.slot === BB ? null : OB))
              }
            }), kO.map((BB => {
              const OB = fO.get(BB);
              return (0, sB.jsx)(jO, {
                pack: BB,
                ownedPacks: pO,
                showStoreLink: !XB.s.includes(BB) && OB.some((BB => {
                  let [, {
                    cosmetics: OB
                  }] = BB;
                  return oO(OB, pO)
                })),
                children: (0, sB.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: OB.map((BB => {
                    let [OB, {
                      cosmetics: GB
                    }] = BB;
                    const YB = oO(GB, pO),
                      DB = !YB && function(BB, OB) {
                        return Object.entries(OB).some((OB => {
                          let [GB, YB] = OB;
                          return GO(BB, GB, YB)
                        }))
                      }(qO, GB),
                      QB = YB || DB,
                      oB = AB(GB, KB),
                      jB = !oB && AB(GB, HB.current);
                    return (0, sB.jsx)(YO, {
                      locked: DB,
                      children: (0, sB.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: JB()("CharacterPresetCard", {
                          CharacterPresetCardActive: jB,
                          CharacterPresetCardTryingOn: oB
                        }),
                        onClick: () => {
                          QB ? function(BB) {
                            AB(BB, KB) ? uB({}) : uB({
                              ...BB
                            })
                          }(GB) : lO(GB, {
                            undoable: !0
                          })
                        },
                        children: [(0, sB.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(${(0,hB.j)(OB)})`
                          }
                        }), QB && (0, sB.jsx)(aB.b, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, OB)
                  }))
                })
              }, BB)
            }))]
          }), "emote" === OB && (0, sB.jsx)(yO, {
            equippedEmoteIds: (0, qB.g)(HB.current.emote),
            ownedPacks: pO,
            canBuy: ZO,
            onUpdateLoadout: BB => {
              const OB = (0, qB.i)(BB);
              var GB;
              HB.current = {
                ...HB.current,
                emote: OB
              }, ZB.setPlayerCosmetics("emote", OB), WB(), GB = OB, JO.current = GB, null !== DO.current && clearTimeout(DO.current), DO.current = setTimeout(MO, 350)
            },
            onEmoteSelected: CB,
            onEquipPreviewSkin: () => {
              ! function(BB, OB) {
                for (const GB of MB.t)(0, pB.h)(GB) && BB(GB, "skin" === GB ? "skin_preview" : `${GB}_none`, !1);
                OB()
              }(PO, WB)
            }
          }), "characters" !== OB && "emote" !== OB && (0, sB.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, UO.map((BB => {
              const OB = VO.get(BB);
              return (0, sB.jsx)(jO, {
                pack: BB,
                ownedPacks: pO,
                children: OB.map((OB => {
                  var YB;
                  let {
                    groupName: DB,
                    cosmetics: QB,
                    showSwatch: oB
                  } = OB;
                  const jB = DB ? null === (YB = XB.d[BB].colourGroups) || void 0 === YB ? void 0 : YB[DB] : void 0,
                    yB = `${BB}_${GB}_${DB}`;
                  return (0, sB.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [oB && jB && (0, sB.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...jB.colours.map(((BB, OB) => ({
                        color: BB,
                        index: OB
                      })))].sort(((BB, OB) => BB.color.order - OB.color.order)).map((OB => {
                        var YB;
                        let {
                          color: QB,
                          index: oB
                        } = OB;
                        return (0, sB.jsx)("div", {
                          className: JB()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (YB = IB[yB]) && void 0 !== YB ? YB : (0, XB.i)(jB.colours)) === oB
                          }),
                          style: {
                            backgroundColor: `rgb(${QB.rbg.join(",")})`
                          },
                          onClick: () => {
                            var OB;
                            FB((BB => ({
                              ...BB,
                              [yB]: oB
                            })));
                            const YB = KB[GB],
                              QB = YB ? (0, lB.n)(GB, YB) : null,
                              jB = (null === QB || void 0 === QB ? void 0 : QB.cosmeticPack) === BB,
                              JB = jB ? YB : HB.current[GB],
                              MB = jB ? QB : (0, lB.n)(GB, JB);
                            if ((null === MB || void 0 === MB ? void 0 : MB.cosmeticPack) !== BB) return;
                            if ((null !== (OB = null === MB || void 0 === MB ? void 0 : MB.colourGroup) && void 0 !== OB ? OB : null) !== DB) return;
                            const PB = (0, lB.l)(JB);
                            if (PB) {
                              const BB = `${GB}_${PB[0]}_${oB}`;
                              QO(GB, BB, pO) || GO(qO, GB, BB) ? uB((OB => ({
                                ...OB,
                                [GB]: BB
                              }))) : (jB && zO(GB), PO(GB, BB, !0))
                            }
                          }
                        }, QB.rbg.join())
                      }))
                    }), QB.map((BB => {
                      const OB = BB === HB.current[GB],
                        YB = KB[GB] === BB,
                        DB = QO(GB, BB, pO),
                        QB = !DB && GO(qO, GB, BB),
                        oB = DB || QB;
                      let jB = !0;
                      return oB || OB || ("cape" !== GB || (0, gB.ne)(ZB.getPlayerRanks(), BB)) && ("nameColour" !== GB || (0, PB.e)(ZB.getPlayerRanks())) || (jB = !1), (0, sB.jsx)(YO, {
                        locked: QB,
                        children: (0, sB.jsxs)("div", {
                          className: JB()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: OB && !YB,
                            TryingOnCharCustomPartWrapper: YB,
                            DisabledCharCustomPartWrapper: !jB,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === GB
                          }),
                          onClick: () => {
                            if (jB)
                              if (oB) uB((OB => {
                                if (OB[GB] === BB) {
                                  const BB = {
                                    ...OB
                                  };
                                  return delete BB[GB], BB
                                }
                                return {
                                  ...OB,
                                  [GB]: BB
                                }
                              }));
                              else {
                                var OB;
                                if (KB[GB] && zO(GB), BB === HB.current[GB]) return;
                                null !== (OB = BO.current) && void 0 !== OB && OB.isReady() && PO(GB, BB, !0)
                              }
                          },
                          children: ["profileEffect" === GB ? (0, sB.jsx)(cB.c, {
                            profileEffect: BB,
                            name: ZB.getPlayerName(),
                            cosmetics: ZB.getPlayerCosmetics()
                          }) : (0, sB.jsx)(bB.e, {
                            UB: GB,
                            fB: BB
                          }), oB && (0, sB.jsx)(aB.b, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, BB)
                    }))]
                  }, null !== DB && void 0 !== DB ? DB : "ungrouped")
                }))
              }, BB)
            }))]
          }), iB && (0, sB.jsxs)(UB.f, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === iB.kind ? lO(iB.outfit, {
                undoable: !1
              }) : (LB.save(iB.slot, iB.outfit), EB(null))
            },
            children: [(0, sB.jsx)(aB.b, {
              name: "rotate-left"
            }), yB("general:undo")]
          }), (0, sB.jsx)(rB.CharacterPreview, {
            ref: BO,
            forcedCosmetics: KB,
            NM: TB.id,
            emotePlaySeq: TB.seq,
            onReady: () => {
              for (const BB of MB.t) PO(BB, HB.current[BB], !1)
            },
            onDrawn: BB => {
              var OB, GB;
              const YB = null === (OB = BO.current) || void 0 === OB || null === (GB = OB.getDevTools()) || void 0 === GB ? void 0 : GB.canvas(),
                DB = (BB, OB) => 0 === Object.keys(mB.current).length && JSON.stringify(ZB.getPlayerCosmetics()) === BB && OO.current.seq === OB.seq && null === OO.current.id,
                jB = JSON.stringify(ZB.getPlayerCosmetics()),
                yB = OO.current;
              if (!QB.p || !BB || void 0 === YB || !DB(jB, yB)) return;
              const JB = (0, oB.e)(ZB);
              (0, oB.d)(YB, JB, (() => DB(jB, yB))).catch((BB => {
                console.warn("[loading-character] couldn't keep your picture from Customise", BB)
              }))
            }
          })]
        })]
      })
    }))
  },
  44451: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      CharacterPreview: () => ZB
    });
    var YB = GB(56),
      DB = GB(3072),
      QB = GB(1238),
      oB = GB(2787),
      jB = GB(34828),
      yB = GB(4056),
      JB = GB(36948),
      MB = GB(36963),
      PB = GB(36991),
      zB = GB(1282);

    function lB(BB) {
      let {
        nametag: OB
      } = BB;
      const GB = (0, YB.useRef)(null),
        {
          height: QB
        } = (0, DB.e)(GB),
        [oB, jB] = (0, YB.useState)(!1),
        {
          name: yB,
          ranks: lB,
          nameColour: pB
        } = OB;
      return (0, YB.useEffect)((() => {
        let BB = !0;
        return PB.k.untilLoadedFor(yB).then((() => {
          BB && jB(!0)
        })), () => {
          BB = !1
        }
      }), [yB]), (0, YB.useEffect)((() => {
        if (!oB || QB <= 0) return;
        const BB = GB.current,
          OB = (0, JB.e)(BB),
          YB = () => {
            const GB = (0, MB.d)({
              name: yB,
              ranks: lB,
              colour: pB,
              player: !1
            }, OB, PB.s, {
              nameAsGiven: !0
            });
            if (null === GB) return BB.width = 0, void(BB.height = 0);
            const YB = QB * devicePixelRatio / GB.height;
            BB.width = Math.ceil(GB.width * YB), BB.height = Math.ceil(GB.height * YB), OB.scale(YB, YB), GB.draw(OB)
          };
        return YB(), (0, PB.h)(YB)
      }), [oB, QB, yB, lB, pB]), (0, zB.jsx)("canvas", {
        ref: GB,
        className: "CharacterPreviewNametag",
        role: "img",
        "aria-label": yB,
        style: {
          visibility: oB ? void 0 : "hidden"
        }
      })
    }
    let pB = null;
    const qB = .6 * Math.PI,
      ZB = (0, YB.memo)((0, YB.forwardRef)((function(BB, OB) {
        let {
          onReady: GB,
          onDrawn: JB,
          owner: MB = "other",
          framing: PB = "player",
          forcedCosmetics: ZB,
          NM: NB,
          emotePlaySeq: RB,
          turntableFromYaw: WB = null,
          nametag: AB
        } = BB;
        const VB = (0, YB.useRef)(null),
          {
            width: SB,
            height: nB
          } = (0, DB.e)(VB),
          UB = (0, YB.useRef)(null),
          fB = (0, YB.useRef)({}),
          kB = (0, YB.useRef)({}),
          [dB, KB] = (0, YB.useState)(!1),
          uB = (0, YB.useRef)(GB);
        uB.current = GB;
        const mB = (0, YB.useRef)(JB);
        mB.current = JB;
        const IB = (0, YB.useRef)(null),
          FB = (0, YB.useRef)(!1),
          iB = (0, YB.useRef)(!1),
          LB = (0, YB.useCallback)((() => {
            const BB = UB.current;
            if (!BB || !mB.current || FB.current || !iB.current) return;
            const OB = {};
            IB.current = OB, queueMicrotask((() => {
              if (IB.current !== OB) return;
              const GB = Promise.all(QB.t.map((OB => BB.untilDrawn(OB)))).then((() => !0), (BB => (console.error("Failed to draw the character preview", BB), !1))),
                YB = new Promise((BB => {
                  setTimeout((() => {
                    BB(!1)
                  }), 1e4)
                }));
              Promise.race([GB, YB]).then((GB => {
                var YB;
                UB.current !== BB || IB.current !== OB || FB.current || (FB.current = !0, null === (YB = mB.current) || void 0 === YB || YB.call(mB, GB))
              }))
            }))
          }), []);
        return (0, YB.useImperativeHandle)(OB, (() => {
          const BB = (BB, OB) => {
            var GB;
            (fB.current[BB] = OB, null !== ZB && void 0 !== ZB && ZB[BB]) || (null === (GB = UB.current) || void 0 === GB || GB.setCosmetic(BB, OB), LB())
          };
          return {
            updateCosmetic: BB,
            setAllCosmetics(OB) {
              for (const YB of QB.t) {
                var GB;
                BB(YB, null !== (GB = OB[YB]) && void 0 !== GB ? GB : (0, oB.d)(YB))
              }
            },
            isReady() {
              var BB, OB;
              return null !== (BB = null === (OB = UB.current) || void 0 === OB ? void 0 : OB.isReady()) && void 0 !== BB && BB
            },
            resetCamera() {
              var BB;
              null === (BB = UB.current) || void 0 === BB || BB.resetCamera()
            },
            setOrbit(BB) {
              var OB;
              null === (OB = UB.current) || void 0 === OB || OB.setOrbit(BB)
            },
            turnCamera(BB) {
              var OB;
              const GB = jB.b[PB];
              null === (OB = UB.current) || void 0 === OB || OB.setOrbit({
                ...GB,
                yaw: GB.yaw + BB
              })
            },
            async ensureReadyForCapture(BB) {
              var OB;
              await (null === (OB = UB.current) || void 0 === OB ? void 0 : OB.untilDrawn(BB))
            },
            getDevTools() {
              var BB;
              return null !== (BB = UB.current) && void 0 !== BB && BB.isReady() ? UB.current.dev : null
            }
          }
        }), [ZB, PB, LB]), (0, YB.useEffect)((() => {
          const BB = yB.c.register(MB),
            OB = jB.g.openCharacter(VB.current, PB);
          UB.current = OB, pB = OB;
          let GB = !0;
          return OB.ready.then((() => {
            GB && (KB(!0), uB.current())
          })).catch((BB => {
            console.error("Failed to set up the character preview", BB)
          })), () => {
            GB = !1, BB(), pB === OB && (OB.resetCamera(), pB = null), OB.close(), UB.current = null
          }
        }), []), (0, YB.useEffect)((() => {
          SB <= 0 || nB <= 0 || UB.current.resize(SB, nB)
        }), [SB, nB]), (0, YB.useEffect)((() => {
          if (!dB) return;
          const BB = kB.current;
          for (const OB of QB.t) {
            const GB = null === ZB || void 0 === ZB ? void 0 : ZB[OB],
              YB = BB[OB];
            GB && GB !== YB ? UB.current.setCosmetic(OB, GB) : !GB && YB && fB.current[OB] && UB.current.setCosmetic(OB, fB.current[OB])
          }
          kB.current = {
            ...ZB
          }, iB.current = !0, LB()
        }), [ZB, dB, LB]), (0, YB.useEffect)((() => {
          dB && UB.current.playEmote(null !== NB && void 0 !== NB ? NB : null)
        }), [NB, RB, dB]), (0, YB.useEffect)((() => {
          if (!dB || null === WB) return;
          const BB = UB.current,
            {
              pitch: OB,
              radius: GB
            } = jB.b[PB];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return BB.setOrbit({
            yaw: WB + qB,
            pitch: OB,
            radius: GB
          }), () => {
            pB === BB && BB.resetCamera()
          };
          const YB = performance.now();
          let DB = 0;
          const QB = oB => {
            BB.setOrbit({
              yaw: WB + (oB - YB) / 6e3 * 2 * Math.PI,
              pitch: OB,
              radius: GB
            }), DB = requestAnimationFrame(QB)
          };
          return DB = requestAnimationFrame(QB), () => {
            cancelAnimationFrame(DB), pB === BB && BB.resetCamera()
          }
        }), [dB, WB]), (0, zB.jsxs)(zB.Fragment, {
          children: [(0, zB.jsx)("div", {
            className: "CharCustomisationPreview",
            ref: VB
          }), AB && (0, zB.jsx)(lB, {
            nametag: AB
          })]
        })
      })))
  },
  37063: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    var YB = GB(2023),
      DB = GB(1540);
    const QB = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(BB, OB) {
        BB !== this.userContext && this.sendHeld(), this.userContext = BB;
        for (const [YB, DB] of OB) this.pending.set(YB, DB);
        if (null !== this.timer) return;
        const GB = this.lastSentAt + 1100 - Date.now();
        GB <= 0 ? this.send(BB) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), GB), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(BB) {
        const OB = Array.from(this.pending, (BB => {
          let [OB, GB] = BB;
          return {
            UB: OB,
            fB: GB
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), DB.b.updateCosmetics(BB, OB).catch((BB => {
          console.error("Failed to update cosmetics", BB)
        }))
      }
    };

    function oB(BB, OB) {
      for (const [GB, YB] of OB) BB.setPlayerCosmetics(GB, YB);
      if (null === YB.gameBridge.latest("connectedGame").websocketUrl) QB.save(BB, OB);
      else
        for (const [GB, DB] of OB) YB.gameBridge.send("updateMyCosmetic", {
          UB: GB,
          fB: DB
        })
    }
  },
  36948: (BB, OB, GB) => {
    function YB(BB, OB, GB) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(BB, OB).getContext("2d", GB);
      const YB = document.createElement("canvas");
      return YB.width = BB, YB.height = OB, YB.getContext("2d", GB)
    }

    function DB(BB, OB) {
      return BB.getContext("2d", OB)
    }
    GB.d(OB, {
      e: () => DB,
      f: () => YB
    })
  },
  36997: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => MB,
      g: () => yB,
      k: () => jB,
      o: () => JB
    });
    var YB = GB(2034);
    let DB = null,
      QB = 0;
    const oB = new Set;

    function jB() {
      return DB
    }

    function yB() {
      return QB
    }

    function JB(BB) {
      DB = BB, QB++, (0, YB.b)();
      for (const OB of oB) OB()
    }

    function MB(BB) {
      oB.add(BB)
    }
  },
  37009: (BB, OB, GB) => {
    function YB() {
      return GB(37013)
    }

    function DB() {
      return GB(37018)
    }

    function QB(BB) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(BB)
    }
    GB.d(OB, {
      b: () => QB,
      c: () => YB,
      e: () => DB
    })
  },
  37013: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37018: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);