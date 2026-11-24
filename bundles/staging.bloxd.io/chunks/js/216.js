export const id = 216;
export const ids = [216, 291];
export const modules = {
  41331: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      CharacterCustomisationUI: () => hT
    });
    var hm = fm(59),
      Am = fm(3001),
      am = fm(1160),
      xm = fm(1080),
      wm = fm.n(xm),
      Dm = fm(1247),
      im = fm(641),
      Rm = fm(1208),
      pm = fm(2208),
      Em = fm(1572),
      om = fm(2543);
    const Om = Dm.r.filter((mm => !Em.h.includes(mm)));

    function Ym(mm, Tm) {
      return Om.includes(mm) && "string" === typeof Tm && (0, om.d)(mm, Tm)
    }

    function qm(mm) {
      const Tm = {};
      for (const fm of Om) {
        const hm = mm[fm];
        void 0 !== hm && Ym(fm, hm) && (Tm[fm] = hm)
      }
      return Tm
    }

    function jm(mm, Tm) {
      return Object.entries(mm).every((mm => {
        let [fm, hm] = mm;
        return Tm[fm] === hm
      }))
    }
    var Vm = fm(2216),
      Im = fm(3103),
      Km = fm(1946),
      Qm = fm(1454),
      nm = fm(2242),
      Jm = fm(23),
      cm = fm(2686),
      zm = fm(1494),
      Zm = fm(1162),
      km = fm(1842);
    class bm {
      constructor() {
        this.slots = new Map, this.accountId = null
      }
      moveTo(mm) {
        null !== mm && mm !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), this.accountId = mm)
      }
      isFor(mm) {
        return null === this.accountId || this.accountId === mm
      }
      overlay(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return mm.map(((mm, fm) => {
          var hm, Am;
          return null !== (hm = null !== (Am = this.slots.get(fm)) && void 0 !== Am ? Am : Tm.get(fm)) && void 0 !== hm ? hm : mm
        }))
      }
    }
    class Sm extends cm.d {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new bm;
        super("saved outfits", (async Tm => {
          const fm = mm.isFor(Tm.whamm),
            hm = new Map(mm.slots),
            Am = await zm.d.getSavedOutfits(Tm);
          return fm ? mm.overlay(Am, hm) : Am
        })), this.unsaved = mm, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(mm, Tm) {
        this.unsaved.moveTo(this.getState().accountId), this.unsaved.slots.set(mm, Tm), this.update((fm => fm.map(((fm, hm) => hm === mm ? Tm : fm)))), this.sending || this.sendUnsaved()
      }
      async sendUnsaved() {
        for (this.sending = !0; this.unsaved.slots.size > 0;) {
          const Tm = new Map(this.unsaved.slots);
          try {
            const mm = await Zm.userContextManager.getCurrentUserContext();
            if (this.unsaved.moveTo(mm.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: Tm,
              data: fm
            } = this.getState();
            let hm = fm;
            Tm === mm.whamm && null !== hm || (hm = this.unsaved.overlay(await zm.d.getSavedOutfits(mm)), this.refresh()), await zm.d.setSavedOutfits(mm, hm)
          } catch (mm) {
            console.error("Failed to save outfits", mm), [...this.unsaved.slots].every((mm => {
              let [fm, hm] = mm;
              return Tm.get(fm) === hm
            })) && km.d.showMessage({
              translationKey: "homePage:saveOutfitFailed"
            })
          }
          for (const [mm, fm] of Tm) this.unsaved.slots.get(mm) === fm && this.unsaved.slots.delete(mm)
        }
        this.sending = !1
      }
    }
    const em = new Sm;
    var Nm = fm(354),
      Gm = fm(41339),
      Xm = fm(1563),
      Pm = fm(2295),
      Hm = fm(2995),
      ym = fm(2137),
      Cm = fm(2588),
      rm = fm(1089);
    fm(34319), fm(3105);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var sm = fm(2250),
      lm = fm(1362),
      Mm = fm(2332),
      um = fm(1135);

    function Bm(mm) {
      let {
        wornOutfit: Tm,
        onApply: fm,
        onOverwrite: Am
      } = mm;
      const {
        t: xm
      } = (0, Rm.A)(), {
        accountId: Dm,
        data: im
      } = (0, cm.i)(em, !1), {
        userContext: pm
      } = (0, am.e)();
      return (0, hm.useEffect)((() => {
        em.ensureLoaded()
      }), []), null === im || Dm !== pm.whamm ? null : (0, um.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, um.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, um.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: xm("homePage:myOutfits")
          })
        }), (0, um.jsx)("div", {
          className: "CharacterPresetsGrid",
          children: im.map(((mm, hm) => {
            const am = function(mm) {
              return 0 === Object.keys(mm).length
            }(mm);
            return (0, um.jsxs)("div", {
              ...(0, Qm.Z)(),
              role: am ? "button" : "link",
              "data-pad-focusable": !0,
              className: wm()("CharacterPresetCard SavedOutfitCard", {
                SavedOutfitCardEmpty: am,
                CharacterPresetCardActive: !am && jm(mm, Tm)
              }),
              onClick: () => {
                am ? em.save(hm, Tm) : fm(mm)
              },
              children: [am && (0, um.jsxs)(um.Fragment, {
                children: [(0, um.jsx)(rm.c, {
                  name: "plus"
                }), xm("homePage:saveOutfit")]
              }), !am && (0, um.jsxs)(um.Fragment, {
                children: [(0, um.jsx)("div", {
                  className: "SavedOutfitCardPicture",
                  children: (0, um.jsx)(Mm.d, {
                    cosmetics: mm
                  })
                }), (0, um.jsx)(Qm.V, {
                  padSecondaryLabelKey: "homePage:saveOutfit",
                  stopPropagation: !0,
                  onClick: () => {
                    jm(Tm, mm) || (em.save(hm, Tm), Am(hm, mm))
                  },
                  children: xm("general:save")
                })]
              })]
            }, hm)
          }))
        })]
      })
    }
    var Lm = fm(36470),
      tm = fm(2531),
      Um = fm(2534);

    function dm(mm, Tm, fm) {
      return null !== mm && !(0, tm.j)(Um.d, Tm, fm, mm.collected, mm.ownedPacks)
    }

    function gm(mm) {
      let {
        locked: Tm,
        children: fm
      } = mm;
      return Tm ? (0, um.jsx)(Wm, {
        children: fm
      }) : fm
    }

    function Wm(mm) {
      var Tm;
      let {
        children: fm
      } = mm;
      const {
        t: hm
      } = (0, Rm.A)(), {
        userContext: Am
      } = (0, am.e)(), xm = null !== (Tm = Am.dailyDrop) && void 0 !== Tm && Tm.hidden ? hm("dailyDrop:lockedFromHidden") : hm("dailyDrop:lockedFrom");
      return (0, um.jsx)(lm.h, {
        tooltipInner: (0, um.jsx)(um.Fragment, {
          children: xm
        }),
        children: fm
      })
    }

    function Fm(mm, Tm, fm) {
      return (0, pm.h)(mm, Tm).purchasable && !(0, Pm.u)(mm, Tm, fm)
    }

    function mT(mm, Tm) {
      return Object.entries(mm).some((mm => {
        let [fm, hm] = mm;
        return Fm(fm, hm, Tm)
      }))
    }

    function TT(mm) {
      var Tm;
      let {
        pack: fm,
        ownedPacks: hm,
        showStoreLink: Am = !1,
        children: am
      } = mm;
      const {
        t: xm
      } = (0, Rm.A)(), Dm = Xm.b[fm], im = Dm.purchasable && !hm.includes(fm) && Xm.t.includes(fm), pm = Hm.k[fm];
      return (0, um.jsxs)("div", {
        className: wm()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: im
        }),
        children: [pm && (0, um.jsx)(pm, {}), (0, um.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, um.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (Tm = Dm.displayName) && void 0 !== Tm ? Tm : fm
          }), (im || Am) && (0, um.jsxs)(Qm.C, {
            onClick: () => {
              im ? (0, Hm.i)(fm) : (0, nm.m)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, um.jsx)(rm.c, {
              name: "store"
            }), " ", xm("general:viewInShop")]
          })]
        }), im && "bee" === fm && (0, um.jsx)(Hm.b, {}), am]
      })
    }

    function fT(mm) {
      let {
        equippedEmoteIds: Tm,
        ownedPacks: fm,
        canBuy: hm,
        onUpdateLoadout: Am,
        onEmoteSelected: am,
        onEquipPreviewSkin: xm
      } = mm;
      const {
        t: im
      } = (0, Rm.A)(), Em = new Set(Tm), om = new Map, Om = Object.keys(pm.d.emote).sort(((mm, Tm) => {
        var fm, hm, Am, am;
        return (null !== (fm = null === (hm = (0, pm.g)("emote", mm)) || void 0 === hm ? void 0 : hm.clientIdx) && void 0 !== fm ? fm : 0) - (null !== (Am = null === (am = (0, pm.g)("emote", Tm)) || void 0 === am ? void 0 : am.clientIdx) && void 0 !== Am ? Am : 0)
      })).filter((mm => {
        const Tm = (0, pm.h)("emote", mm),
          Am = (0, Pm.u)("emote", mm, fm);
        return !(Tm.purchasable && !Am && !hm) && (Tm.clientSelectable || Am)
      }));
      for (const wm of Om) {
        const mm = (0, pm.g)("emote", wm).cosmeticPack;
        om.has(mm) || om.set(mm, []), om.get(mm).push(wm)
      }
      const Ym = Array.from(om.keys());
      return (0, um.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, um.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, um.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: im("emotes:equippedCount", {
              count: Tm.length,
              max: Dm.k
            })
          }), (0, um.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: im("emotes:loadoutHint")
          })]
        }), Ym.map((mm => {
          const hm = om.get(mm);
          return (0, um.jsx)(TT, {
            pack: mm,
            ownedPacks: fm,
            children: (0, um.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: hm.map((mm => {
                var hm;
                const xm = Tm.indexOf(mm),
                  Rm = -1 !== xm,
                  pm = Tm.length >= Dm.k,
                  om = Fm("emote", mm, fm),
                  Om = om || !Rm && pm,
                  Ym = (0, Vm.i)(mm);
                return (0, um.jsxs)("div", {
                  className: wm()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Rm
                  }),
                  onClick: () => {
                    am(mm)
                  },
                  children: [(0, um.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, um.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${mm}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, um.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (hm = null === Ym || void 0 === Ym ? void 0 : Ym.displayName) && void 0 !== hm ? hm : mm
                    })]
                  }), (0, um.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Rm && (0, um.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: xm + 1
                    }), om && (0, um.jsx)(rm.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, um.jsx)(lm.h, {
                      tooltipInner: (0, um.jsx)(um.Fragment, {
                        children: im(Rm ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, um.jsx)("div", {
                        className: wm()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: Om,
                          EmoteCustomPartToggleEquipped: Rm
                        }),
                        onClick: fm => {
                          fm.stopPropagation(), Om || function(mm) {
                            Em.has(mm) ? Am(Tm.filter((Tm => Tm !== mm))) : Tm.length >= Dm.k || Am([...Tm, mm])
                          }(mm)
                        },
                        children: (0, um.jsx)(rm.c, {
                          name: Rm ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, mm)
              }))
            })
          }, mm)
        }))]
      })
    }
    const hT = (0, hm.memo)((function(mm) {
      let {
        selectedTab: Tm
      } = mm;
      const fm = "characters" === Tm ? "skin" : Tm,
        {
          t: xm
        } = (0, Rm.A)(),
        {
          userContext: Om,
          isUserContextUpdating: Ym
        } = (0, am.e)(),
        Vm = (0, Am.c)(),
        {
          gameState: cm,
          initSdkSelectorFinished: zm
        } = (0, Jm.m)(["gameState", "initSdkSelectorFinished"]),
        [Zm, km] = (0, hm.useState)({}),
        [bm, Sm] = (0, hm.useState)({}),
        [Hm, lm] = (0, hm.useState)(null),
        {
          previewEmote: Mm,
          triggerEmote: tm
        } = (0, Im.e)(),
        Um = (0, hm.useRef)(Dm.r.reduce(((mm, Tm) => (mm[Tm] = (0, om.c)(Tm), mm)), {})),
        Wm = (0, hm.useRef)(!1),
        hT = (0, hm.useRef)(null),
        AT = (0, hm.useRef)(null),
        aT = (0, hm.useRef)(null);

      function xT() {
        null !== AT.current && (clearTimeout(AT.current), AT.current = null);
        const mm = aT.current;
        null !== mm && (aT.current = null, (0, Lm.c)(Om, [
          ["emote", mm]
        ]))
      }

      function wT(mm, Tm, fm) {
        var hm, Am, am;
        Um.current = {
          ...Um.current,
          [mm]: Tm
        }, Vm(), fm && ((0, Lm.c)(Om, [
          [mm, Tm]
        ]), lm(null));
        const xm = (0, pm.g)(mm, Tm);
        if (null !== xm && void 0 !== xm && xm.colourGroup && null !== (hm = Xm.b[xm.cosmeticPack].colourGroups) && void 0 !== hm && null !== (Am = hm[xm.colourGroup]) && void 0 !== Am && Am.showSwatchSelector) {
          const fm = (0, pm.e)(Tm);
          fm && Sm((Tm => ({
            ...Tm,
            [`${xm.cosmeticPack}_${mm}_${xm.colourGroup}`]: parseInt(fm[1])
          })))
        }
        null !== (am = hT.current) && void 0 !== am && am.isReady() && hT.current.updateCosmetic(mm, Tm)
      }

      function DT(mm) {
        km((Tm => {
          const fm = {
            ...Tm
          };
          return delete fm[mm], fm
        }))
      }

      function iT(mm, Tm) {
        let {
          undoable: fm
        } = Tm;
        Object.keys(Zm).length > 0 && km({});
        const hm = Object.entries(mm).filter((mm => {
          let [Tm, fm] = mm;
          return Um.current[Tm] !== fm && !Fm(Tm, fm, RT) && !dm(pT, Tm, fm)
        }));
        fm ? hm.length > 0 && lm({
          kind: "worn",
          outfit: qm(Um.current)
        }) : lm(null);
        for (const [Am, am] of hm) wT(Am, am, !1);
        hm.length > 0 && (0, Lm.c)(Om, hm)
      }(0, Km.e)("cosmeticsUpdated", (mm => {
        let Tm = !1;
        for (const {
            local: fm,
            Sh: hm,
            eh: Am
          }
          of mm) {
          if (!fm) return;
          Tm = !0, Wm.current || wT(hm, Am, !1), Vm()
        }
        Tm && (Wm.current = !0)
      })), (0, hm.useEffect)((() => {
        if (!Ym) {
          for (const [mm, Tm] of Object.entries(Om.getPlayerCosmetics())) wT(mm, Tm, !1);
          Vm()
        }
      }), [Ym]), (0, hm.useEffect)((() => () => {
        xT()
      }), []);
      const RT = Om.getOwnedCosmeticPacks(),
        pT = function(mm, Tm) {
          return null === mm ? null : {
            collected: new Set(mm.collected),
            ownedPacks: Tm
          }
        }(Om.dailyDrop, RT),
        ET = (0, sm.purchasesAllowed)(),
        oT = Object.keys(pm.d[fm]).filter((mm => {
          const Tm = (0, pm.h)(fm, mm),
            hm = (0, Pm.u)(fm, mm, RT);
          return !(Tm.purchasable && !hm && !ET) && (Tm.clientSelectable || hm)
        })).sort(((mm, Tm) => {
          var hm, Am, am, xm;
          return (null !== (hm = null === (Am = (0, pm.g)(fm, mm)) || void 0 === Am ? void 0 : Am.clientIdx) && void 0 !== hm ? hm : 0) - (null !== (am = null === (xm = (0, pm.g)(fm, Tm)) || void 0 === xm ? void 0 : xm.clientIdx) && void 0 !== am ? am : 0)
        })),
        OT = new Map;
      for (const hm of oT) {
        var YT;
        const mm = null === (YT = (0, pm.g)(fm, hm)) || void 0 === YT ? void 0 : YT.cosmeticPack;
        OT.has(mm) || OT.set(mm, []), OT.get(mm).push(hm)
      }
      const qT = function(mm, Tm) {
          const fm = new Set,
            hm = new Set;
          for (const [Am, am] of Object.entries(pm.d[mm])) {
            if (void 0 === am.colourGroup) continue;
            const xm = `${am.cosmeticPack}_${am.colourGroup}`;
            (Fm(mm, Am, Tm) ? hm : fm).add(xm)
          }
          return new Set([...fm].filter((mm => hm.has(mm))))
        }(fm, RT),
        jT = new Map;
      for (const [hm, Am] of OT) {
        const mm = [],
          Tm = new Map;
        for (const hm of Am) {
          var VT, IT;
          const Am = null !== (VT = null === (IT = (0, pm.g)(fm, hm)) || void 0 === IT ? void 0 : IT.colourGroup) && void 0 !== VT ? VT : null;
          Tm.has(Am) || (Tm.set(Am, []), mm.push(Am)), Tm.get(Am).push(hm)
        }
        const am = mm.map((mm => {
          var Am;
          const am = Tm.get(mm),
            xm = mm ? null === (Am = Xm.b[hm].colourGroups) || void 0 === Am ? void 0 : Am[mm] : void 0,
            wm = !0 === (null === xm || void 0 === xm ? void 0 : xm.showSwatchSelector) && !qT.has(`${hm}_${mm}`);
          if (wm && xm) {
            var Dm;
            const Tm = null !== (Dm = bm[`${hm}_${fm}_${mm}`]) && void 0 !== Dm ? Dm : (0, Xm.h)(xm.colours);
            return {
              groupName: mm,
              showSwatch: wm,
              cosmetics: am.filter((mm => {
                const fm = (0, pm.e)(mm);
                return !fm || Tm.toString() === fm[1].toString()
              }))
            }
          }
          return {
            groupName: mm,
            cosmetics: am,
            showSwatch: wm
          }
        }));
        jT.set(hm, am)
      }
      const KT = Array.from(OT.keys()),
        QT = new Map;
      for (const [hm, Am] of Object.entries(Em.e)) {
        const mm = Xm.b[Am.cosmeticPack],
          Tm = !mT(Am.cosmetics, RT),
          fm = Xm.o.some((mm => (0, Xm.d)(mm) === hm));
        (mm.clientSelectable || fm || Tm) && ((!mm.purchasable || Tm || ET) && (QT.has(Am.cosmeticPack) || QT.set(Am.cosmeticPack, []), QT.get(Am.cosmeticPack).push([hm, Am])))
      }
      const nT = Array.from(QT.keys());
      return (0, um.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === fm || "nameColour" === fm) && !Om.playerHasRank("super") && (0, um.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, um.jsx)(rm.c, {
            name: "bolt"
          }), xm("homePage:unlockWithSuperRank"), ET && (0, um.jsx)(Qm.m, {
            onClick: () => {
              (0, nm.m)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: xm("general:getItNow")
          })]
        }), (0, um.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === Tm && (0, um.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, um.jsx)(Bm, {
              wornOutfit: qm(Um.current),
              onApply: mm => {
                iT(mm, {
                  undoable: !0
                })
              },
              onOverwrite: (mm, Tm) => {
                lm({
                  kind: "slot",
                  slot: mm,
                  outfit: Tm
                })
              }
            }), nT.map((mm => {
              const Tm = QT.get(mm);
              return (0, um.jsx)(TT, {
                pack: mm,
                ownedPacks: RT,
                showStoreLink: !Xm.p.includes(mm) && Tm.some((mm => {
                  let [, {
                    cosmetics: Tm
                  }] = mm;
                  return mT(Tm, RT)
                })),
                children: (0, um.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: Tm.map((mm => {
                    let [Tm, {
                      cosmetics: fm
                    }] = mm;
                    const hm = mT(fm, RT),
                      Am = !hm && function(mm, Tm) {
                        return Object.entries(Tm).some((Tm => {
                          let [fm, hm] = Tm;
                          return dm(mm, fm, hm)
                        }))
                      }(pT, fm),
                      am = hm || Am,
                      xm = jm(fm, Zm),
                      Dm = !xm && jm(fm, Um.current);
                    return (0, um.jsx)(gm, {
                      locked: Am,
                      children: (0, um.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: wm()("CharacterPresetCard", {
                          CharacterPresetCardActive: Dm,
                          CharacterPresetCardTryingOn: xm
                        }),
                        onClick: () => {
                          am ? function(mm) {
                            jm(mm, Zm) ? km({}) : km({
                              ...mm
                            })
                          }(fm) : iT(fm, {
                            undoable: !0
                          })
                        },
                        children: [(0, um.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(/textures/charSkins/previews/character_${Tm}_preview.png)`
                          }
                        }), am && (0, um.jsx)(rm.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, Tm)
                  }))
                })
              }, mm)
            }))]
          }), "emote" === Tm && (0, um.jsx)(fT, {
            equippedEmoteIds: (0, om.h)(Um.current.emote),
            ownedPacks: RT,
            canBuy: ET,
            onUpdateLoadout: mm => {
              const Tm = (0, om.j)(mm);
              var fm;
              Um.current = {
                ...Um.current,
                emote: Tm
              }, Om.setPlayerCosmetics("emote", Tm), Vm(), fm = Tm, aT.current = fm, null !== AT.current && clearTimeout(AT.current), AT.current = setTimeout(xT, 350)
            },
            onEmoteSelected: tm,
            onEquipPreviewSkin: () => {
              ! function(mm, Tm) {
                for (const fm of Dm.r) "cape" !== fm && "nameColour" !== fm && "emote" !== fm && mm(fm, "skin" === fm ? "skin_preview" : `${fm}_none`, !1);
                Tm()
              }(wT, Vm)
            }
          }), "characters" !== Tm && "emote" !== Tm && (0, um.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, KT.map((mm => {
              const Tm = jT.get(mm);
              return (0, um.jsx)(TT, {
                pack: mm,
                ownedPacks: RT,
                children: Tm.map((Tm => {
                  var hm;
                  let {
                    groupName: Am,
                    cosmetics: am,
                    showSwatch: xm
                  } = Tm;
                  const Dm = Am ? null === (hm = Xm.b[mm].colourGroups) || void 0 === hm ? void 0 : hm[Am] : void 0,
                    Rm = `${mm}_${fm}_${Am}`;
                  return (0, um.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [xm && Dm && (0, um.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...Dm.colours.map(((mm, Tm) => ({
                        color: mm,
                        index: Tm
                      })))].sort(((mm, Tm) => mm.color.order - Tm.color.order)).map((Tm => {
                        var hm;
                        let {
                          color: am,
                          index: xm
                        } = Tm;
                        return (0, um.jsx)("div", {
                          className: wm()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (hm = bm[Rm]) && void 0 !== hm ? hm : (0, Xm.h)(Dm.colours)) === xm
                          }),
                          style: {
                            backgroundColor: `rgb(${am.rbg.join(",")})`
                          },
                          onClick: () => {
                            var Tm;
                            Sm((mm => ({
                              ...mm,
                              [Rm]: xm
                            })));
                            const hm = Zm[fm],
                              am = hm ? (0, pm.g)(fm, hm) : null,
                              wm = (null === am || void 0 === am ? void 0 : am.cosmeticPack) === mm,
                              Dm = wm ? hm : Um.current[fm],
                              im = wm ? am : (0, pm.g)(fm, Dm);
                            if ((null === im || void 0 === im ? void 0 : im.cosmeticPack) !== mm) return;
                            if ((null !== (Tm = null === im || void 0 === im ? void 0 : im.colourGroup) && void 0 !== Tm ? Tm : null) !== Am) return;
                            const Em = (0, pm.e)(Dm);
                            if (Em) {
                              const mm = `${fm}_${Em[0]}_${xm}`;
                              Fm(fm, mm, RT) || dm(pT, fm, mm) ? km((Tm => ({
                                ...Tm,
                                [fm]: mm
                              }))) : (wm && DT(fm), wT(fm, mm, !0))
                            }
                          }
                        }, am.rbg.join())
                      }))
                    }), am.map((mm => {
                      const Tm = mm === Um.current[fm],
                        hm = Zm[fm] === mm,
                        Am = Fm(fm, mm, RT),
                        am = !Am && dm(pT, fm, mm),
                        xm = Am || am;
                      let Dm = !0;
                      return xm || Tm || ("cape" !== fm || (0, Nm.Hd)(Om.getPlayerRanks(), mm)) && ("nameColour" !== fm || Om.playerHasRank("super")) || (Dm = !1), (0, um.jsx)(gm, {
                        locked: am,
                        children: (0, um.jsxs)("div", {
                          className: wm()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: Tm && !hm,
                            TryingOnCharCustomPartWrapper: hm,
                            DisabledCharCustomPartWrapper: !Dm,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === fm
                          }),
                          onClick: () => {
                            if (Dm)
                              if (xm) km((Tm => {
                                if (Tm[fm] === mm) {
                                  const mm = {
                                    ...Tm
                                  };
                                  return delete mm[fm], mm
                                }
                                return {
                                  ...Tm,
                                  [fm]: mm
                                }
                              }));
                              else {
                                var Tm;
                                if (Zm[fm] && DT(fm), mm === Um.current[fm]) return;
                                null !== (Tm = hT.current) && void 0 !== Tm && Tm.isReady() && wT(fm, mm, !0)
                              }
                          },
                          children: ["profileEffect" === fm ? (0, um.jsx)("div", {
                            className: "CharCustomPart CharCustomProfileEffect",
                            children: (0, um.jsx)(Cm.f, {
                              playerSocialPreview: (0, ym.b)(mm, {
                                name: Om.getPlayerName(),
                                cosmetics: Om.getPlayerCosmetics()
                              }),
                              showLocation: !1,
                              opensProfileCard: !1
                            })
                          }) : (0, um.jsx)("div", {
                            className: wm()("CharCustomPart", {
                              PixelatedImage: "cape" === fm
                            }),
                            style: (0, pm.g)(fm, mm).previewTex ? {
                              backgroundImage: `url(/textures/charSkins/previews/${(0,pm.g)(fm,mm).previewTex}.png)`
                            } : {
                              backgroundColor: im.o[mm]
                            }
                          }), xm && (0, um.jsx)(rm.c, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, mm)
                    }))]
                  }, null !== Am && void 0 !== Am ? Am : "ungrouped")
                }))
              }, mm)
            }))]
          }), Hm && (0, um.jsxs)(Qm.e, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === Hm.kind ? iT(Hm.outfit, {
                undoable: !1
              }) : (em.save(Hm.slot, Hm.outfit), lm(null))
            },
            children: [(0, um.jsx)(rm.c, {
              name: "rotate-left"
            }), xm("general:undo")]
          }), (0, um.jsx)(Gm.CharacterPreview, {
            ref: hT,
            forcedCosmetics: Zm,
            xw: Mm.id,
            emotePlaySeq: Mm.seq,
            onReady: () => {
              for (const mm of Dm.r) wT(mm, Um.current[mm], !1)
            }
          })]
        })]
      })
    }))
  },
  41339: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      CharacterPreview: () => pm
    });
    var hm = fm(59),
      Am = fm(2743),
      am = fm(1247),
      xm = fm(2543),
      wm = fm(34319),
      Dm = fm(3615),
      im = fm(1135);
    const Rm = .6 * Math.PI,
      pm = (0, hm.memo)((0, hm.forwardRef)((function(mm, Tm) {
        let {
          onReady: fm,
          onDrawn: pm,
          owner: Em = "other",
          framing: om = "player",
          forcedCosmetics: Om,
          xw: Ym,
          emotePlaySeq: qm,
          turntableFromYaw: jm = null
        } = mm;
        const Vm = (0, hm.useRef)(null),
          {
            width: Im,
            height: Km
          } = (0, Am.d)(Vm),
          Qm = (0, hm.useRef)(null),
          nm = (0, hm.useRef)({}),
          Jm = (0, hm.useRef)({}),
          [cm, zm] = (0, hm.useState)(!1),
          Zm = (0, hm.useRef)(fm);
        Zm.current = fm;
        const km = (0, hm.useRef)(pm);
        km.current = pm;
        const bm = (0, hm.useRef)(null),
          Sm = (0, hm.useRef)(!1),
          em = (0, hm.useRef)(!1),
          Nm = (0, hm.useCallback)((() => {
            const mm = Qm.current;
            if (!mm || !km.current || Sm.current || !em.current) return;
            const Tm = {};
            bm.current = Tm, queueMicrotask((() => {
              if (bm.current !== Tm) return;
              const fm = Promise.all(am.r.map((Tm => mm.untilDrawn(Tm)))).catch((mm => {
                  console.error("Failed to draw the character preview", mm)
                })),
                hm = new Promise((mm => {
                  setTimeout(mm, 1e4)
                }));
              Promise.race([fm, hm]).then((() => {
                var fm;
                Qm.current !== mm || bm.current !== Tm || Sm.current || (Sm.current = !0, null === (fm = km.current) || void 0 === fm || fm.call(km))
              }))
            }))
          }), []);
        return (0, hm.useImperativeHandle)(Tm, (() => {
          const mm = (mm, Tm) => {
            var fm;
            (nm.current[mm] = Tm, null !== Om && void 0 !== Om && Om[mm]) || (null === (fm = Qm.current) || void 0 === fm || fm.setCosmetic(mm, Tm), Nm())
          };
          return {
            updateCosmetic: mm,
            setAllCosmetics(Tm) {
              for (const hm of am.r) {
                var fm;
                mm(hm, null !== (fm = Tm[hm]) && void 0 !== fm ? fm : (0, xm.c)(hm))
              }
            },
            isReady() {
              var mm, Tm;
              return null !== (mm = null === (Tm = Qm.current) || void 0 === Tm ? void 0 : Tm.isReady()) && void 0 !== mm && mm
            },
            resetCamera() {
              var mm;
              null === (mm = Qm.current) || void 0 === mm || mm.resetCamera()
            },
            setOrbit(mm) {
              var Tm;
              null === (Tm = Qm.current) || void 0 === Tm || Tm.setOrbit(mm)
            },
            async ensureReadyForCapture(mm) {
              var Tm;
              await (null === (Tm = Qm.current) || void 0 === Tm ? void 0 : Tm.untilDrawn(mm))
            },
            getDevTools() {
              var mm;
              return null !== (mm = Qm.current) && void 0 !== mm && mm.isReady() ? Qm.current.dev : null
            }
          }
        }), [Om, Nm]), (0, hm.useEffect)((() => {
          const mm = Dm.c.register(Em),
            Tm = wm.j.openCharacter(Vm.current, om);
          Qm.current = Tm;
          let fm = !0;
          return Tm.ready.then((() => {
            fm && (zm(!0), Zm.current())
          })).catch((mm => {
            console.error("Failed to set up the character preview", mm)
          })), () => {
            fm = !1, mm(), Tm.resetCamera(), Tm.close(), Qm.current = null
          }
        }), []), (0, hm.useEffect)((() => {
          Im <= 0 || Km <= 0 || Qm.current.resize(Im, Km)
        }), [Im, Km]), (0, hm.useEffect)((() => {
          if (!cm) return;
          const mm = Jm.current;
          for (const Tm of am.r) {
            const fm = null === Om || void 0 === Om ? void 0 : Om[Tm],
              hm = mm[Tm];
            fm && fm !== hm ? Qm.current.setCosmetic(Tm, fm) : !fm && hm && nm.current[Tm] && Qm.current.setCosmetic(Tm, nm.current[Tm])
          }
          Jm.current = {
            ...Om
          }, em.current = !0, Nm()
        }), [Om, cm, Nm]), (0, hm.useEffect)((() => {
          cm && Qm.current.playEmote(null !== Ym && void 0 !== Ym ? Ym : null)
        }), [Ym, qm, cm]), (0, hm.useEffect)((() => {
          if (!cm || null === jm) return;
          const mm = Qm.current,
            {
              pitch: Tm,
              radius: fm
            } = wm.e[om];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return mm.setOrbit({
            yaw: jm + Rm,
            pitch: Tm,
            radius: fm
          }), () => {
            mm.resetCamera()
          };
          const hm = performance.now();
          let Am = 0;
          const am = xm => {
            mm.setOrbit({
              yaw: jm + (xm - hm) / 6e3 * 2 * Math.PI,
              pitch: Tm,
              radius: fm
            }), Am = requestAnimationFrame(am)
          };
          return Am = requestAnimationFrame(am), () => {
            cancelAnimationFrame(Am), mm.resetCamera()
          }
        }), [cm, jm]), (0, im.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Vm
        })
      })))
  },
  36470: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(1905),
      Am = fm(1494);
    const am = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(mm, Tm) {
        mm !== this.userContext && this.sendHeld(), this.userContext = mm;
        for (const [hm, Am] of Tm) this.pending.set(hm, Am);
        if (null !== this.timer) return;
        const fm = this.lastSentAt + 1100 - Date.now();
        fm <= 0 ? this.send(mm) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), fm), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(mm) {
        const Tm = Array.from(this.pending, (mm => {
          let [Tm, fm] = mm;
          return {
            Sh: Tm,
            eh: fm
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), Am.d.updateCosmetics(mm, Tm).catch((mm => {
          console.error("Failed to update cosmetics", mm)
        }))
      }
    };

    function xm(mm, Tm) {
      for (const [fm, hm] of Tm) mm.setPlayerCosmetics(fm, hm);
      if (null === hm.gameBridge.latest("connectedGame").websocketUrl) am.save(mm, Tm);
      else
        for (const [fm, Am] of Tm) hm.gameBridge.send("updateMyCosmetic", {
          Sh: fm,
          eh: Am
        })
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);