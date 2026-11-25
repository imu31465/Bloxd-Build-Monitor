export const id = 239;
export const ids = [239, 601];
export const modules = {
  43954: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      CharacterCustomisationUI: () => jr
    });
    var OM = iM(44),
      SM = iM(2798),
      jM = iM(1142),
      aM = iM(1116),
      PM = iM.n(aM),
      nM = iM(1242),
      QM = iM(1188),
      zM = iM(2362),
      LM = iM(1645),
      mM = iM(2762);
    const HM = nM.u.filter((MM => !LM.i.includes(MM)));

    function hM(MM, rM) {
      return HM.includes(MM) && "string" === typeof rM && (0, mM.f)(MM, rM)
    }

    function JM(MM) {
      const rM = {};
      for (const iM of HM) {
        const OM = MM[iM];
        void 0 !== OM && hM(iM, OM) && (rM[iM] = OM)
      }
      return rM
    }

    function dM(MM) {
      return 0 === Object.keys(MM).length
    }

    function yM(MM, rM) {
      return Object.entries(MM).every((MM => {
        let [iM, OM] = MM;
        return rM[iM] === OM
      }))
    }
    var lM = iM(2367),
      EM = iM(3479),
      UM = iM(2084),
      GM = iM(1520),
      CM = iM(2397),
      eM = iM(19),
      bM = iM(2919),
      wM = iM(1573),
      tM = iM(1144),
      gM = iM(1963);
    class uM {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(MM) {
        null !== MM && MM !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = MM)
      }
      isFor(MM) {
        return null === this.accountId || this.accountId === MM
      }
      overlay(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return MM.map(((MM, iM) => {
          var OM, SM;
          return null !== (OM = null !== (SM = this.slots.get(iM)) && void 0 !== SM ? SM : rM.get(iM)) && void 0 !== OM ? OM : MM
        }))
      }
    }
    class RM extends bM.b {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new uM;
        super("saved outfits", (async rM => {
          const iM = MM.isFor(rM.whamm),
            OM = new Map(MM.slots),
            SM = await wM.c.getSavedOutfits(rM);
          return iM ? MM.overlay(SM, OM) : SM
        })), this.unsaved = MM, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(MM, rM) {
        var iM, OM;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(MM)) || this.unsaved.before.set(MM, null !== (iM = null === (OM = this.getState().data) || void 0 === OM ? void 0 : OM[MM]) && void 0 !== iM ? iM : {});
        this.unsaved.slots.set(MM, rM), this.update((iM => iM.map(((iM, OM) => OM === MM ? rM : iM)))), this.sending || this.sendUnsaved()
      }
      clear(MM) {
        this.save(MM, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let MM = !1;
        for (; this.unsaved.slots.size > 0;) {
          const iM = new Map(this.unsaved.slots);
          let OM = this.getState().accountId;
          try {
            const MM = await tM.userContextManager.getCurrentUserContext();
            if (OM = MM.whamm, this.unsaved.moveTo(MM.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: rM,
              data: SM
            } = this.getState();
            let jM = SM;
            rM === MM.whamm && null !== jM || (jM = this.unsaved.overlay(await wM.c.getSavedOutfits(MM)), this.refresh()), await wM.c.setSavedOutfits(MM, jM), this.unsaved.isFor(MM.whamm) && jM.forEach(((MM, rM) => {
              const OM = this.unsaved.slots.get(rM);
              void 0 === OM || OM === iM.get(rM) ? this.unsaved.before.delete(rM) : this.unsaved.before.set(rM, MM)
            }))
          } catch (rM) {
            if (console.error("Failed to save outfits", rM), this.getState().accountId === OM && [...this.unsaved.slots].every((MM => {
                let [rM, OM] = MM;
                return iM.get(rM) === OM
              }))) {
              const rM = [...iM.values()].every(dM);
              gM.k.showMessage({
                translationKey: rM ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const OM = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((MM => MM.map(((MM, rM) => {
                var iM;
                return null !== (iM = OM.get(rM)) && void 0 !== iM ? iM : MM
              })))), MM = !0
            }
          }
          for (const [MM, rM] of iM) this.unsaved.slots.get(MM) === rM && this.unsaved.slots.delete(MM)
        }
        this.sending = !1, MM && this.refresh()
      }
    }
    const pM = new RM;
    var WM = iM(332),
      sM = iM(43956),
      DM = iM(1641),
      kM = iM(2446),
      ZM = iM(3358),
      oM = iM(3471),
      fM = iM(2412),
      YM = iM(1398);
    iM(35051), iM(3488);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var NM = iM(2401),
      AM = iM(3495),
      xM = iM(3504),
      vM = iM(1440),
      FM = iM(2488),
      BM = iM(1429),
      XM = iM(1303);

    function IM(MM) {
      let {
        wornOutfit: rM,
        onApply: iM,
        onOverwrite: SM,
        onDelete: aM
      } = MM;
      const {
        t: nM
      } = (0, QM.A)(), {
        accountId: zM,
        data: LM
      } = (0, bM.g)(pM, !1), {
        userContext: mM
      } = (0, jM.b)();
      async function HM(MM, rM) {
        const iM = await BM.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: OM,
            data: SM
          } = pM.getState();
        var jM, PM;
        !0 === iM && OM === zM && null !== SM && (yM(jM = SM[MM], PM = rM) && yM(PM, jM)) && (pM.clear(MM), aM(MM))
      }
      return (0, OM.useEffect)((() => {
        pM.ensureLoaded()
      }), []), null === LM || zM !== mM.whamm ? null : (0, XM.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, XM.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, XM.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: nM("homePage:myOutfits")
          })
        }), (0, XM.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: LM.map(((MM, OM) => {
            const jM = dM(MM);
            return (0, XM.jsxs)("div", {
              className: PM()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !jM
              }),
              children: [(0, XM.jsxs)("div", {
                ...(0, GM.fb)(),
                role: jM ? "button" : "link",
                "data-pad-focusable": !0,
                className: PM()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: jM,
                  CharacterPresetCardActive: !jM && yM(MM, rM)
                }),
                onClick: () => {
                  jM ? pM.save(OM, rM) : iM(MM)
                },
                children: [jM && (0, XM.jsxs)(XM.Fragment, {
                  children: [(0, XM.jsx)(YM.b, {
                    name: "plus"
                  }), nM("homePage:saveOutfit")]
                }), !jM && (0, XM.jsxs)(XM.Fragment, {
                  children: [(0, XM.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, XM.jsx)(FM.c, {
                      cosmetics: MM
                    })
                  }), (0, XM.jsx)(GM.V, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      yM(rM, MM) || (pM.save(OM, rM), SM(OM, MM))
                    },
                    children: nM("general:save")
                  })]
                })]
              }), !jM && (0, XM.jsx)("button", {
                type: "button",
                className: "SavedOutfitDeleteButton",
                "data-pad-destructive": !0,
                "aria-label": nM("general:delete"),
                title: nM("general:delete"),
                onClick: () => {
                  HM(OM, MM)
                },
                children: (0, XM.jsx)(YM.b, {
                  name: "trash-can"
                })
              })]
            }, OM)
          }))
        })]
      })
    }
    var KM = iM(37322),
      qM = iM(2754),
      TM = iM(2760);

    function VM(MM, rM, iM) {
      return null !== MM && !(0, qM.i)(TM.c, rM, iM, MM.collected, MM.ownedPacks)
    }

    function cM(MM) {
      let {
        locked: rM,
        children: iM
      } = MM;
      return rM ? (0, XM.jsx)(Mr, {
        children: iM
      }) : iM
    }

    function Mr(MM) {
      var rM;
      let {
        children: iM
      } = MM;
      const {
        t: OM
      } = (0, QM.A)(), {
        userContext: SM
      } = (0, jM.b)(), aM = null !== (rM = SM.dailyDrop) && void 0 !== rM && rM.hidden ? OM("dailyDrop:lockedFromHidden") : OM("dailyDrop:lockedFrom");
      return (0, XM.jsx)(vM.i, {
        tooltipInner: (0, XM.jsx)(XM.Fragment, {
          children: aM
        }),
        children: iM
      })
    }

    function rr(MM, rM, iM) {
      return (0, zM.n)(MM, rM).purchasable && !(0, kM.z)(MM, rM, iM)
    }

    function ir(MM, rM) {
      return Object.entries(MM).some((MM => {
        let [iM, OM] = MM;
        return rr(iM, OM, rM)
      }))
    }

    function Or(MM) {
      var rM;
      let {
        pack: iM,
        ownedPacks: OM,
        showStoreLink: SM = !1,
        children: jM
      } = MM;
      const {
        t: aM
      } = (0, QM.A)(), nM = DM.d[iM], zM = nM.purchasable && !OM.includes(iM) && DM.w.includes(iM), LM = ZM.k[iM];
      return (0, XM.jsxs)("div", {
        className: PM()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: zM
        }),
        children: [LM && (0, XM.jsx)(LM, {}), (0, XM.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, XM.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (rM = nM.displayName) && void 0 !== rM ? rM : iM
          }), (zM || SM) && (0, XM.jsxs)(GM.C, {
            onClick: () => {
              zM ? (0, ZM.g)(iM) : (0, CM.n)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, XM.jsx)(YM.b, {
              name: "store"
            }), " ", aM("general:viewInShop")]
          })]
        }), zM && "bee" === iM && (0, XM.jsx)(ZM.b, {}), jM]
      })
    }

    function Sr(MM) {
      let {
        equippedEmoteIds: rM,
        ownedPacks: iM,
        canBuy: OM,
        onUpdateLoadout: SM,
        onEmoteSelected: jM,
        onEquipPreviewSkin: aM
      } = MM;
      const {
        t: LM
      } = (0, QM.A)(), mM = new Set(rM), HM = new Map, hM = Object.keys(zM.e.emote).sort(((MM, rM) => {
        var iM, OM, SM, jM;
        return (null !== (iM = null === (OM = (0, zM.m)("emote", MM)) || void 0 === OM ? void 0 : OM.clientIdx) && void 0 !== iM ? iM : 0) - (null !== (SM = null === (jM = (0, zM.m)("emote", rM)) || void 0 === jM ? void 0 : jM.clientIdx) && void 0 !== SM ? SM : 0)
      })).filter((MM => {
        const rM = (0, zM.n)("emote", MM),
          SM = (0, kM.z)("emote", MM, iM);
        return !(rM.purchasable && !SM && !OM) && (rM.clientSelectable || SM)
      }));
      for (const PM of hM) {
        const MM = (0, zM.m)("emote", PM).cosmeticPack;
        HM.has(MM) || HM.set(MM, []), HM.get(MM).push(PM)
      }
      const JM = Array.from(HM.keys());
      return (0, XM.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, XM.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, XM.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: LM("emotes:equippedCount", {
              count: rM.length,
              max: nM.o
            })
          }), (0, XM.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: LM("emotes:loadoutHint")
          })]
        }), JM.map((MM => {
          const OM = HM.get(MM);
          return (0, XM.jsx)(Or, {
            pack: MM,
            ownedPacks: iM,
            children: (0, XM.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: OM.map((MM => {
                var OM;
                const aM = rM.indexOf(MM),
                  QM = -1 !== aM,
                  zM = rM.length >= nM.o,
                  HM = rr("emote", MM, iM),
                  hM = HM || !QM && zM,
                  JM = (0, lM.e)(MM);
                return (0, XM.jsxs)("div", {
                  className: PM()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: QM
                  }),
                  onClick: () => {
                    jM(MM)
                  },
                  children: [(0, XM.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, XM.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(${(0,AM.c)("emote",MM)})`
                      },
                      "aria-hidden": !0
                    }), (0, XM.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (OM = null === JM || void 0 === JM ? void 0 : JM.displayName) && void 0 !== OM ? OM : MM
                    })]
                  }), (0, XM.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [QM && (0, XM.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: aM + 1
                    }), HM && (0, XM.jsx)(YM.b, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, XM.jsx)(vM.i, {
                      tooltipInner: (0, XM.jsx)(XM.Fragment, {
                        children: LM(QM ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, XM.jsx)("div", {
                        className: PM()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: hM,
                          EmoteCustomPartToggleEquipped: QM
                        }),
                        onClick: iM => {
                          iM.stopPropagation(), hM || function(MM) {
                            mM.has(MM) ? SM(rM.filter((rM => rM !== MM))) : rM.length >= nM.o || SM([...rM, MM])
                          }(MM)
                        },
                        children: (0, XM.jsx)(YM.b, {
                          name: QM ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, MM)
              }))
            })
          }, MM)
        }))]
      })
    }
    const jr = (0, OM.memo)((function(MM) {
      let {
        selectedTab: rM
      } = MM;
      const iM = "characters" === rM ? "skin" : rM,
        {
          t: aM
        } = (0, QM.A)(),
        {
          userContext: HM,
          isUserContextUpdating: hM
        } = (0, jM.b)(),
        dM = (0, SM.b)(),
        {
          gameState: lM
        } = (0, eM.m)(["gameState"]),
        [bM, wM] = (0, OM.useState)({}),
        [tM, gM] = (0, OM.useState)({}),
        [uM, RM] = (0, OM.useState)(null),
        {
          previewEmote: ZM,
          triggerEmote: AM
        } = (0, EM.e)(),
        vM = (0, OM.useRef)(nM.u.reduce(((MM, rM) => (MM[rM] = (0, mM.c)(rM), MM)), {})),
        FM = (0, OM.useRef)(!1),
        BM = (0, OM.useRef)(null),
        qM = (0, OM.useRef)(null),
        TM = (0, OM.useRef)(null);

      function Mr() {
        null !== qM.current && (clearTimeout(qM.current), qM.current = null);
        const MM = TM.current;
        null !== MM && (TM.current = null, (0, KM.d)(HM, [
          ["emote", MM]
        ]))
      }

      function jr(MM, rM, iM) {
        var OM, SM, jM;
        vM.current = {
          ...vM.current,
          [MM]: rM
        }, dM(), iM && ((0, KM.d)(HM, [
          [MM, rM]
        ]), RM(null));
        const aM = (0, zM.m)(MM, rM);
        if (null !== aM && void 0 !== aM && aM.colourGroup && null !== (OM = DM.d[aM.cosmeticPack].colourGroups) && void 0 !== OM && null !== (SM = OM[aM.colourGroup]) && void 0 !== SM && SM.showSwatchSelector) {
          const iM = (0, zM.i)(rM);
          iM && gM((rM => ({
            ...rM,
            [`${aM.cosmeticPack}_${MM}_${aM.colourGroup}`]: parseInt(iM[1])
          })))
        }
        null !== (jM = BM.current) && void 0 !== jM && jM.isReady() && BM.current.updateCosmetic(MM, rM)
      }

      function ar(MM) {
        wM((rM => {
          const iM = {
            ...rM
          };
          return delete iM[MM], iM
        }))
      }

      function Pr(MM, rM) {
        let {
          undoable: iM
        } = rM;
        Object.keys(bM).length > 0 && wM({});
        const OM = Object.entries(MM).filter((MM => {
          let [rM, iM] = MM;
          return vM.current[rM] !== iM && !rr(rM, iM, nr) && !VM(Qr, rM, iM)
        }));
        iM ? OM.length > 0 && RM({
          kind: "worn",
          outfit: JM(vM.current)
        }) : RM(null);
        for (const [SM, jM] of OM) jr(SM, jM, !1);
        OM.length > 0 && (0, KM.d)(HM, OM)
      }(0, UM.c)("cosmeticsUpdated", (MM => {
        let rM = !1;
        for (const {
            local: iM,
            Ii: OM,
            Ki: SM
          }
          of MM) {
          if (!iM) return;
          rM = !0, FM.current || jr(OM, SM, !1), dM()
        }
        rM && (FM.current = !0)
      })), (0, OM.useEffect)((() => {
        if (!hM) {
          for (const [MM, rM] of Object.entries(HM.getPlayerCosmetics())) jr(MM, rM, !1);
          dM()
        }
      }), [hM]), (0, OM.useEffect)((() => () => {
        Mr()
      }), []);
      const nr = HM.getOwnedCosmeticPacks(),
        Qr = function(MM, rM) {
          return null === MM ? null : {
            collected: new Set(MM.collected),
            ownedPacks: rM
          }
        }(HM.dailyDrop, nr),
        zr = (0, NM.usePurchasesAllowed)(),
        Lr = Object.keys(zM.e[iM]).filter((MM => {
          const rM = (0, zM.n)(iM, MM),
            OM = (0, kM.z)(iM, MM, nr);
          return !(rM.purchasable && !OM && !zr) && (rM.clientSelectable || OM)
        })).sort(((MM, rM) => {
          var OM, SM, jM, aM;
          return (null !== (OM = null === (SM = (0, zM.m)(iM, MM)) || void 0 === SM ? void 0 : SM.clientIdx) && void 0 !== OM ? OM : 0) - (null !== (jM = null === (aM = (0, zM.m)(iM, rM)) || void 0 === aM ? void 0 : aM.clientIdx) && void 0 !== jM ? jM : 0)
        })),
        mr = new Map;
      for (const OM of Lr) {
        var Hr;
        const MM = null === (Hr = (0, zM.m)(iM, OM)) || void 0 === Hr ? void 0 : Hr.cosmeticPack;
        mr.has(MM) || mr.set(MM, []), mr.get(MM).push(OM)
      }
      const hr = function(MM, rM) {
          const iM = new Set,
            OM = new Set;
          for (const [SM, jM] of Object.entries(zM.e[MM])) {
            if (void 0 === jM.colourGroup) continue;
            const aM = `${jM.cosmeticPack}_${jM.colourGroup}`;
            (rr(MM, SM, rM) ? OM : iM).add(aM)
          }
          return new Set([...iM].filter((MM => OM.has(MM))))
        }(iM, nr),
        Jr = new Map;
      for (const [OM, SM] of mr) {
        const MM = [],
          rM = new Map;
        for (const OM of SM) {
          var dr, yr;
          const SM = null !== (dr = null === (yr = (0, zM.m)(iM, OM)) || void 0 === yr ? void 0 : yr.colourGroup) && void 0 !== dr ? dr : null;
          rM.has(SM) || (rM.set(SM, []), MM.push(SM)), rM.get(SM).push(OM)
        }
        const jM = MM.map((MM => {
          var SM;
          const jM = rM.get(MM),
            aM = MM ? null === (SM = DM.d[OM].colourGroups) || void 0 === SM ? void 0 : SM[MM] : void 0,
            PM = !0 === (null === aM || void 0 === aM ? void 0 : aM.showSwatchSelector) && !hr.has(`${OM}_${MM}`);
          if (PM && aM) {
            var nM;
            const rM = null !== (nM = tM[`${OM}_${iM}_${MM}`]) && void 0 !== nM ? nM : (0, DM.l)(aM.colours);
            return {
              groupName: MM,
              showSwatch: PM,
              cosmetics: jM.filter((MM => {
                const iM = (0, zM.i)(MM);
                return !iM || rM.toString() === iM[1].toString()
              }))
            }
          }
          return {
            groupName: MM,
            cosmetics: jM,
            showSwatch: PM
          }
        }));
        Jr.set(OM, jM)
      }
      const lr = Array.from(mr.keys()),
        Er = new Map;
      for (const [OM, SM] of Object.entries(LM.d)) {
        const MM = DM.d[SM.cosmeticPack],
          rM = !ir(SM.cosmetics, nr),
          iM = DM.s.some((MM => (0, DM.h)(MM) === OM));
        (MM.clientSelectable || iM || rM) && ((!MM.purchasable || rM || zr) && (Er.has(SM.cosmeticPack) || Er.set(SM.cosmeticPack, []), Er.get(SM.cosmeticPack).push([OM, SM])))
      }
      const Ur = Array.from(Er.keys());
      return (0, XM.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === iM || "nameColour" === iM) && !HM.playerHasRank("super") && (0, XM.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, XM.jsx)(YM.b, {
            name: "bolt"
          }), aM("homePage:unlockWithSuperRank"), zr && (0, XM.jsx)(GM.p, {
            onClick: () => {
              (0, CM.n)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: aM("general:getItNow")
          })]
        }), (0, XM.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === rM && (0, XM.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, XM.jsx)(IM, {
              wornOutfit: JM(vM.current),
              onApply: MM => {
                Pr(MM, {
                  undoable: !0
                })
              },
              onOverwrite: (MM, rM) => {
                RM({
                  kind: "slot",
                  slot: MM,
                  outfit: rM
                })
              },
              onDelete: MM => {
                RM((rM => "slot" === (null === rM || void 0 === rM ? void 0 : rM.kind) && rM.slot === MM ? null : rM))
              }
            }), Ur.map((MM => {
              const rM = Er.get(MM);
              return (0, XM.jsx)(Or, {
                pack: MM,
                ownedPacks: nr,
                showStoreLink: !DM.u.includes(MM) && rM.some((MM => {
                  let [, {
                    cosmetics: rM
                  }] = MM;
                  return ir(rM, nr)
                })),
                children: (0, XM.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: rM.map((MM => {
                    let [rM, {
                      cosmetics: iM
                    }] = MM;
                    const OM = ir(iM, nr),
                      SM = !OM && function(MM, rM) {
                        return Object.entries(rM).some((rM => {
                          let [iM, OM] = rM;
                          return VM(MM, iM, OM)
                        }))
                      }(Qr, iM),
                      jM = OM || SM,
                      aM = yM(iM, bM),
                      nM = !aM && yM(iM, vM.current);
                    return (0, XM.jsx)(cM, {
                      locked: SM,
                      children: (0, XM.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: PM()("CharacterPresetCard", {
                          CharacterPresetCardActive: nM,
                          CharacterPresetCardTryingOn: aM
                        }),
                        onClick: () => {
                          jM ? function(MM) {
                            yM(MM, bM) ? wM({}) : wM({
                              ...MM
                            })
                          }(iM) : Pr(iM, {
                            undoable: !0
                          })
                        },
                        children: [(0, XM.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(${(0,fM.g)(rM)})`
                          }
                        }), jM && (0, XM.jsx)(YM.b, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, rM)
                  }))
                })
              }, MM)
            }))]
          }), "emote" === rM && (0, XM.jsx)(Sr, {
            equippedEmoteIds: (0, mM.g)(vM.current.emote),
            ownedPacks: nr,
            canBuy: zr,
            onUpdateLoadout: MM => {
              const rM = (0, mM.j)(MM);
              var iM;
              vM.current = {
                ...vM.current,
                emote: rM
              }, HM.setPlayerCosmetics("emote", rM), dM(), iM = rM, TM.current = iM, null !== qM.current && clearTimeout(qM.current), qM.current = setTimeout(Mr, 350)
            },
            onEmoteSelected: AM,
            onEquipPreviewSkin: () => {
              ! function(MM, rM) {
                for (const iM of nM.u)(0, LM.e)(iM) && MM(iM, "skin" === iM ? "skin_preview" : `${iM}_none`, !1);
                rM()
              }(jr, dM)
            }
          }), "characters" !== rM && "emote" !== rM && (0, XM.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, lr.map((MM => {
              const rM = Jr.get(MM);
              return (0, XM.jsx)(Or, {
                pack: MM,
                ownedPacks: nr,
                children: rM.map((rM => {
                  var OM;
                  let {
                    groupName: SM,
                    cosmetics: jM,
                    showSwatch: aM
                  } = rM;
                  const nM = SM ? null === (OM = DM.d[MM].colourGroups) || void 0 === OM ? void 0 : OM[SM] : void 0,
                    QM = `${MM}_${iM}_${SM}`;
                  return (0, XM.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [aM && nM && (0, XM.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...nM.colours.map(((MM, rM) => ({
                        color: MM,
                        index: rM
                      })))].sort(((MM, rM) => MM.color.order - rM.color.order)).map((rM => {
                        var OM;
                        let {
                          color: jM,
                          index: aM
                        } = rM;
                        return (0, XM.jsx)("div", {
                          className: PM()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (OM = tM[QM]) && void 0 !== OM ? OM : (0, DM.l)(nM.colours)) === aM
                          }),
                          style: {
                            backgroundColor: `rgb(${jM.rbg.join(",")})`
                          },
                          onClick: () => {
                            var rM;
                            gM((MM => ({
                              ...MM,
                              [QM]: aM
                            })));
                            const OM = bM[iM],
                              jM = OM ? (0, zM.m)(iM, OM) : null,
                              PM = (null === jM || void 0 === jM ? void 0 : jM.cosmeticPack) === MM,
                              nM = PM ? OM : vM.current[iM],
                              LM = PM ? jM : (0, zM.m)(iM, nM);
                            if ((null === LM || void 0 === LM ? void 0 : LM.cosmeticPack) !== MM) return;
                            if ((null !== (rM = null === LM || void 0 === LM ? void 0 : LM.colourGroup) && void 0 !== rM ? rM : null) !== SM) return;
                            const mM = (0, zM.i)(nM);
                            if (mM) {
                              const MM = `${iM}_${mM[0]}_${aM}`;
                              rr(iM, MM, nr) || VM(Qr, iM, MM) ? wM((rM => ({
                                ...rM,
                                [iM]: MM
                              }))) : (PM && ar(iM), jr(iM, MM, !0))
                            }
                          }
                        }, jM.rbg.join())
                      }))
                    }), jM.map((MM => {
                      const rM = MM === vM.current[iM],
                        OM = bM[iM] === MM,
                        SM = rr(iM, MM, nr),
                        jM = !SM && VM(Qr, iM, MM),
                        aM = SM || jM;
                      let nM = !0;
                      return aM || rM || ("cape" !== iM || (0, WM.Fd)(HM.getPlayerRanks(), MM)) && ("nameColour" !== iM || HM.playerHasRank("super")) || (nM = !1), (0, XM.jsx)(cM, {
                        locked: jM,
                        children: (0, XM.jsxs)("div", {
                          className: PM()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: rM && !OM,
                            TryingOnCharCustomPartWrapper: OM,
                            DisabledCharCustomPartWrapper: !nM,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === iM
                          }),
                          onClick: () => {
                            if (nM)
                              if (aM) wM((rM => {
                                if (rM[iM] === MM) {
                                  const MM = {
                                    ...rM
                                  };
                                  return delete MM[iM], MM
                                }
                                return {
                                  ...rM,
                                  [iM]: MM
                                }
                              }));
                              else {
                                var rM;
                                if (bM[iM] && ar(iM), MM === vM.current[iM]) return;
                                null !== (rM = BM.current) && void 0 !== rM && rM.isReady() && jr(iM, MM, !0)
                              }
                          },
                          children: ["profileEffect" === iM ? (0, XM.jsx)(oM.e, {
                            profileEffect: MM,
                            name: HM.getPlayerName(),
                            cosmetics: HM.getPlayerCosmetics()
                          }) : (0, XM.jsx)(xM.b, {
                            Ii: iM,
                            Ki: MM
                          }), aM && (0, XM.jsx)(YM.b, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, MM)
                    }))]
                  }, null !== SM && void 0 !== SM ? SM : "ungrouped")
                }))
              }, MM)
            }))]
          }), uM && (0, XM.jsxs)(GM.e, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === uM.kind ? Pr(uM.outfit, {
                undoable: !1
              }) : (pM.save(uM.slot, uM.outfit), RM(null))
            },
            children: [(0, XM.jsx)(YM.b, {
              name: "rotate-left"
            }), aM("general:undo")]
          }), (0, XM.jsx)(sM.CharacterPreview, {
            ref: BM,
            forcedCosmetics: bM,
            Ua: ZM.id,
            emotePlaySeq: ZM.seq,
            onReady: () => {
              for (const MM of nM.u) jr(MM, vM.current[MM], !1)
            }
          })]
        })]
      })
    }))
  },
  43956: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      CharacterPreview: () => LM
    });
    var OM = iM(44),
      SM = iM(3047),
      jM = iM(1242),
      aM = iM(2762),
      PM = iM(35051),
      nM = iM(3997),
      QM = iM(1303);
    const zM = .6 * Math.PI,
      LM = (0, OM.memo)((0, OM.forwardRef)((function(MM, rM) {
        let {
          onReady: iM,
          onDrawn: LM,
          owner: mM = "other",
          framing: HM = "player",
          forcedCosmetics: hM,
          Ua: JM,
          emotePlaySeq: dM,
          turntableFromYaw: yM = null
        } = MM;
        const lM = (0, OM.useRef)(null),
          {
            width: EM,
            height: UM
          } = (0, SM.d)(lM),
          GM = (0, OM.useRef)(null),
          CM = (0, OM.useRef)({}),
          eM = (0, OM.useRef)({}),
          [bM, wM] = (0, OM.useState)(!1),
          tM = (0, OM.useRef)(iM);
        tM.current = iM;
        const gM = (0, OM.useRef)(LM);
        gM.current = LM;
        const uM = (0, OM.useRef)(null),
          RM = (0, OM.useRef)(!1),
          pM = (0, OM.useRef)(!1),
          WM = (0, OM.useCallback)((() => {
            const MM = GM.current;
            if (!MM || !gM.current || RM.current || !pM.current) return;
            const rM = {};
            uM.current = rM, queueMicrotask((() => {
              if (uM.current !== rM) return;
              const iM = Promise.all(jM.u.map((rM => MM.untilDrawn(rM)))).catch((MM => {
                  console.error("Failed to draw the character preview", MM)
                })),
                OM = new Promise((MM => {
                  setTimeout(MM, 1e4)
                }));
              Promise.race([iM, OM]).then((() => {
                var iM;
                GM.current !== MM || uM.current !== rM || RM.current || (RM.current = !0, null === (iM = gM.current) || void 0 === iM || iM.call(gM))
              }))
            }))
          }), []);
        return (0, OM.useImperativeHandle)(rM, (() => {
          const MM = (MM, rM) => {
            var iM;
            (CM.current[MM] = rM, null !== hM && void 0 !== hM && hM[MM]) || (null === (iM = GM.current) || void 0 === iM || iM.setCosmetic(MM, rM), WM())
          };
          return {
            updateCosmetic: MM,
            setAllCosmetics(rM) {
              for (const OM of jM.u) {
                var iM;
                MM(OM, null !== (iM = rM[OM]) && void 0 !== iM ? iM : (0, aM.c)(OM))
              }
            },
            isReady() {
              var MM, rM;
              return null !== (MM = null === (rM = GM.current) || void 0 === rM ? void 0 : rM.isReady()) && void 0 !== MM && MM
            },
            resetCamera() {
              var MM;
              null === (MM = GM.current) || void 0 === MM || MM.resetCamera()
            },
            setOrbit(MM) {
              var rM;
              null === (rM = GM.current) || void 0 === rM || rM.setOrbit(MM)
            },
            turnCamera(MM) {
              var rM;
              const iM = PM.d[HM];
              null === (rM = GM.current) || void 0 === rM || rM.setOrbit({
                ...iM,
                yaw: iM.yaw + MM
              })
            },
            async ensureReadyForCapture(MM) {
              var rM;
              await (null === (rM = GM.current) || void 0 === rM ? void 0 : rM.untilDrawn(MM))
            },
            getDevTools() {
              var MM;
              return null !== (MM = GM.current) && void 0 !== MM && MM.isReady() ? GM.current.dev : null
            }
          }
        }), [hM, HM, WM]), (0, OM.useEffect)((() => {
          const MM = nM.d.register(mM),
            rM = PM.l.openCharacter(lM.current, HM);
          GM.current = rM;
          let iM = !0;
          return rM.ready.then((() => {
            iM && (wM(!0), tM.current())
          })).catch((MM => {
            console.error("Failed to set up the character preview", MM)
          })), () => {
            iM = !1, MM(), rM.resetCamera(), rM.close(), GM.current = null
          }
        }), []), (0, OM.useEffect)((() => {
          EM <= 0 || UM <= 0 || GM.current.resize(EM, UM)
        }), [EM, UM]), (0, OM.useEffect)((() => {
          if (!bM) return;
          const MM = eM.current;
          for (const rM of jM.u) {
            const iM = null === hM || void 0 === hM ? void 0 : hM[rM],
              OM = MM[rM];
            iM && iM !== OM ? GM.current.setCosmetic(rM, iM) : !iM && OM && CM.current[rM] && GM.current.setCosmetic(rM, CM.current[rM])
          }
          eM.current = {
            ...hM
          }, pM.current = !0, WM()
        }), [hM, bM, WM]), (0, OM.useEffect)((() => {
          bM && GM.current.playEmote(null !== JM && void 0 !== JM ? JM : null)
        }), [JM, dM, bM]), (0, OM.useEffect)((() => {
          if (!bM || null === yM) return;
          const MM = GM.current,
            {
              pitch: rM,
              radius: iM
            } = PM.d[HM];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return MM.setOrbit({
            yaw: yM + zM,
            pitch: rM,
            radius: iM
          }), () => {
            MM.resetCamera()
          };
          const OM = performance.now();
          let SM = 0;
          const jM = aM => {
            MM.setOrbit({
              yaw: yM + (aM - OM) / 6e3 * 2 * Math.PI,
              pitch: rM,
              radius: iM
            }), SM = requestAnimationFrame(jM)
          };
          return SM = requestAnimationFrame(jM), () => {
            cancelAnimationFrame(SM), MM.resetCamera()
          }
        }), [bM, yM]), (0, QM.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: lM
        })
      })))
  },
  37322: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM = iM(2039),
      SM = iM(1573);
    const jM = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(MM, rM) {
        MM !== this.userContext && this.sendHeld(), this.userContext = MM;
        for (const [OM, SM] of rM) this.pending.set(OM, SM);
        if (null !== this.timer) return;
        const iM = this.lastSentAt + 1100 - Date.now();
        iM <= 0 ? this.send(MM) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), iM), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(MM) {
        const rM = Array.from(this.pending, (MM => {
          let [rM, iM] = MM;
          return {
            Ii: rM,
            Ki: iM
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), SM.c.updateCosmetics(MM, rM).catch((MM => {
          console.error("Failed to update cosmetics", MM)
        }))
      }
    };

    function aM(MM, rM) {
      for (const [iM, OM] of rM) MM.setPlayerCosmetics(iM, OM);
      if (null === OM.gameBridge.latest("connectedGame").websocketUrl) jM.save(MM, rM);
      else
        for (const [iM, SM] of rM) OM.gameBridge.send("updateMyCosmetic", {
          Ii: iM,
          Ki: SM
        })
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);