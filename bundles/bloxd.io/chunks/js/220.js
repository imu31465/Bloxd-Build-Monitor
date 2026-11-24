export const id = 220;
export const ids = [220, 296];
export const modules = {
  41508: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      CharacterCustomisationUI: () => De
    });
    var Ot = Vt(63),
      qt = Vt(3081),
      Dt = Vt(1218),
      mt = Vt(1140),
      dt = Vt.n(mt),
      jt = Vt(1325),
      Ht = Vt(697),
      Xt = Vt(1286),
      Qt = Vt(2290),
      lt = Vt(1657),
      Et = Vt(2652);
    const ft = jt.A.filter((tt => !lt.h.includes(tt)));

    function wt(tt, et) {
      return ft.includes(tt) && "string" === typeof et && (0, Et.g)(tt, et)
    }

    function yt(tt) {
      const et = {};
      for (const Vt of ft) {
        const Ot = tt[Vt];
        void 0 !== Ot && wt(Vt, Ot) && (et[Vt] = Ot)
      }
      return et
    }

    function Nt(tt) {
      return 0 === Object.keys(tt).length
    }

    function Mt(tt, et) {
      return Object.entries(tt).every((tt => {
        let [Vt, Ot] = tt;
        return et[Vt] === Ot
      }))
    }
    var bt = Vt(2295),
      Jt = Vt(3161),
      Ct = Vt(2063),
      ut = Vt(1556),
      Kt = Vt(2313),
      ht = Vt(26),
      vt = Vt(2772),
      Wt = Vt(1600),
      St = Vt(1223),
      ct = Vt(1950);
    class Rt {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(tt) {
        null !== tt && tt !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = tt)
      }
      isFor(tt) {
        return null === this.accountId || this.accountId === tt
      }
      overlay(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return tt.map(((tt, Vt) => {
          var Ot, qt;
          return null !== (Ot = null !== (qt = this.slots.get(Vt)) && void 0 !== qt ? qt : et.get(Vt)) && void 0 !== Ot ? Ot : tt
        }))
      }
    }
    class It extends vt.c {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Rt;
        super("saved outfits", (async et => {
          const Vt = tt.isFor(et.whamm),
            Ot = new Map(tt.slots),
            qt = await Wt.e.getSavedOutfits(et);
          return Vt ? tt.overlay(qt, Ot) : qt
        })), this.unsaved = tt, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(tt, et) {
        var Vt, Ot;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(tt)) || this.unsaved.before.set(tt, null !== (Vt = null === (Ot = this.getState().data) || void 0 === Ot ? void 0 : Ot[tt]) && void 0 !== Vt ? Vt : {});
        this.unsaved.slots.set(tt, et), this.update((Vt => Vt.map(((Vt, Ot) => Ot === tt ? et : Vt)))), this.sending || this.sendUnsaved()
      }
      clear(tt) {
        this.save(tt, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let tt = !1;
        for (; this.unsaved.slots.size > 0;) {
          const Vt = new Map(this.unsaved.slots);
          let Ot = this.getState().accountId;
          try {
            const tt = await St.userContextManager.getCurrentUserContext();
            if (Ot = tt.whamm, this.unsaved.moveTo(tt.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: et,
              data: qt
            } = this.getState();
            let Dt = qt;
            et === tt.whamm && null !== Dt || (Dt = this.unsaved.overlay(await Wt.e.getSavedOutfits(tt)), this.refresh()), await Wt.e.setSavedOutfits(tt, Dt), this.unsaved.isFor(tt.whamm) && Dt.forEach(((tt, et) => {
              const Ot = this.unsaved.slots.get(et);
              void 0 === Ot || Ot === Vt.get(et) ? this.unsaved.before.delete(et) : this.unsaved.before.set(et, tt)
            }))
          } catch (et) {
            if (console.error("Failed to save outfits", et), this.getState().accountId === Ot && [...this.unsaved.slots].every((tt => {
                let [et, Ot] = tt;
                return Vt.get(et) === Ot
              }))) {
              const et = [...Vt.values()].every(Nt);
              ct.f.showMessage({
                translationKey: et ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const Ot = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((tt => tt.map(((tt, et) => {
                var Vt;
                return null !== (Vt = Ot.get(et)) && void 0 !== Vt ? Vt : tt
              })))), tt = !0
            }
          }
          for (const [tt, et] of Vt) this.unsaved.slots.get(tt) === et && this.unsaved.slots.delete(tt)
        }
        this.sending = !1, tt && this.refresh()
      }
    }
    const Pt = new It;
    var Zt = Vt(391),
      Lt = Vt(41510),
      Ft = Vt(1652),
      kt = Vt(2379),
      Gt = Vt(3072),
      zt = Vt(2232),
      ot = Vt(2693),
      rt = Vt(1152);
    Vt(34412), Vt(3166);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var Ut = Vt(2317),
      At = Vt(1464),
      it = Vt(2435),
      Yt = Vt(1450),
      Bt = Vt(1188);

    function pt(tt) {
      let {
        wornOutfit: et,
        onApply: Vt,
        onOverwrite: qt,
        onDelete: mt
      } = tt;
      const {
        t: jt
      } = (0, Xt.H)(), {
        accountId: Ht,
        data: Qt
      } = (0, vt.h)(Pt, !1), {
        userContext: lt
      } = (0, Dt.d)();
      async function Et(tt, et) {
        const Vt = await Yt.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: Ot,
            data: qt
          } = Pt.getState();
        var Dt, dt;
        !0 === Vt && Ot === Ht && null !== qt && (Mt(Dt = qt[tt], dt = et) && Mt(dt, Dt)) && (Pt.clear(tt), mt(tt))
      }
      return (0, Ot.useEffect)((() => {
        Pt.ensureLoaded()
      }), []), null === Qt || Ht !== lt.whamm ? null : (0, Bt.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, Bt.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, Bt.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: jt("homePage:myOutfits")
          })
        }), (0, Bt.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: Qt.map(((tt, Ot) => {
            const Dt = Nt(tt);
            return (0, Bt.jsxs)("div", {
              className: dt()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !Dt
              }),
              children: [(0, Bt.jsxs)("div", {
                ...(0, ut.X)(),
                role: Dt ? "button" : "link",
                "data-pad-focusable": !0,
                className: dt()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: Dt,
                  CharacterPresetCardActive: !Dt && Mt(tt, et)
                }),
                onClick: () => {
                  Dt ? Pt.save(Ot, et) : Vt(tt)
                },
                children: [Dt && (0, Bt.jsxs)(Bt.Fragment, {
                  children: [(0, Bt.jsx)(rt.b, {
                    name: "plus"
                  }), jt("homePage:saveOutfit")]
                }), !Dt && (0, Bt.jsxs)(Bt.Fragment, {
                  children: [(0, Bt.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, Bt.jsx)(it.c, {
                      cosmetics: tt
                    })
                  }), (0, Bt.jsx)(ut.Q, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      Mt(et, tt) || (Pt.save(Ot, et), qt(Ot, tt))
                    },
                    children: jt("general:save")
                  })]
                })]
              }), !Dt && (0, Bt.jsx)(ut.G, {
                className: "SavedOutfitDeleteButton",
                ariaLabel: jt("general:delete"),
                onClick: () => {
                  Et(Ot, tt)
                },
                children: (0, Bt.jsx)(rt.b, {
                  name: "trash-can"
                })
              })]
            }, Ot)
          }))
        })]
      })
    }
    var xt = Vt(36623),
      Tt = Vt(2637),
      gt = Vt(2645);

    function st(tt, et, Vt) {
      return null !== tt && !(0, Tt.j)(gt.c, et, Vt, tt.collected, tt.ownedPacks)
    }

    function nt(tt) {
      let {
        locked: et,
        children: Vt
      } = tt;
      return et ? (0, Bt.jsx)(te, {
        children: Vt
      }) : Vt
    }

    function te(tt) {
      var et;
      let {
        children: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Xt.H)(), {
        userContext: qt
      } = (0, Dt.d)(), mt = null !== (et = qt.dailyDrop) && void 0 !== et && et.hidden ? Ot("dailyDrop:lockedFromHidden") : Ot("dailyDrop:lockedFrom");
      return (0, Bt.jsx)(At.g, {
        tooltipInner: (0, Bt.jsx)(Bt.Fragment, {
          children: mt
        }),
        children: Vt
      })
    }

    function ee(tt, et, Vt) {
      return (0, Qt.r)(tt, et).purchasable && !(0, kt.w)(tt, et, Vt)
    }

    function Ve(tt, et) {
      return Object.entries(tt).some((tt => {
        let [Vt, Ot] = tt;
        return ee(Vt, Ot, et)
      }))
    }

    function Oe(tt) {
      var et;
      let {
        pack: Vt,
        ownedPacks: Ot,
        showStoreLink: qt = !1,
        children: Dt
      } = tt;
      const {
        t: mt
      } = (0, Xt.H)(), jt = Ft.d[Vt], Ht = jt.purchasable && !Ot.includes(Vt) && Ft.p.includes(Vt), Qt = Gt.k[Vt];
      return (0, Bt.jsxs)("div", {
        className: dt()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: Ht
        }),
        children: [Qt && (0, Bt.jsx)(Qt, {}), (0, Bt.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, Bt.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (et = jt.displayName) && void 0 !== et ? et : Vt
          }), (Ht || qt) && (0, Bt.jsxs)(ut.A, {
            onClick: () => {
              Ht ? (0, Gt.h)(Vt) : (0, Kt.l)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, Bt.jsx)(rt.b, {
              name: "store"
            }), " ", mt("general:viewInShop")]
          })]
        }), Ht && "bee" === Vt && (0, Bt.jsx)(Gt.e, {}), Dt]
      })
    }

    function qe(tt) {
      let {
        equippedEmoteIds: et,
        ownedPacks: Vt,
        canBuy: Ot,
        onUpdateLoadout: qt,
        onEmoteSelected: Dt,
        onEquipPreviewSkin: mt
      } = tt;
      const {
        t: Ht
      } = (0, Xt.H)(), lt = new Set(et), Et = new Map, ft = Object.keys(Qt.f.emote).sort(((tt, et) => {
        var Vt, Ot, qt, Dt;
        return (null !== (Vt = null === (Ot = (0, Qt.n)("emote", tt)) || void 0 === Ot ? void 0 : Ot.clientIdx) && void 0 !== Vt ? Vt : 0) - (null !== (qt = null === (Dt = (0, Qt.n)("emote", et)) || void 0 === Dt ? void 0 : Dt.clientIdx) && void 0 !== qt ? qt : 0)
      })).filter((tt => {
        const et = (0, Qt.r)("emote", tt),
          qt = (0, kt.w)("emote", tt, Vt);
        return !(et.purchasable && !qt && !Ot) && (et.clientSelectable || qt)
      }));
      for (const dt of ft) {
        const tt = (0, Qt.n)("emote", dt).cosmeticPack;
        Et.has(tt) || Et.set(tt, []), Et.get(tt).push(dt)
      }
      const wt = Array.from(Et.keys());
      return (0, Bt.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, Bt.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, Bt.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: Ht("emotes:equippedCount", {
              count: et.length,
              max: jt.r
            })
          }), (0, Bt.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: Ht("emotes:loadoutHint")
          })]
        }), wt.map((tt => {
          const Ot = Et.get(tt);
          return (0, Bt.jsx)(Oe, {
            pack: tt,
            ownedPacks: Vt,
            children: (0, Bt.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: Ot.map((tt => {
                var Ot;
                const mt = et.indexOf(tt),
                  Xt = -1 !== mt,
                  Qt = et.length >= jt.r,
                  Et = ee("emote", tt, Vt),
                  ft = Et || !Xt && Qt,
                  wt = (0, bt.j)(tt);
                return (0, Bt.jsxs)("div", {
                  className: dt()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Xt
                  }),
                  onClick: () => {
                    Dt(tt)
                  },
                  children: [(0, Bt.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, Bt.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${tt}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, Bt.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (Ot = null === wt || void 0 === wt ? void 0 : wt.displayName) && void 0 !== Ot ? Ot : tt
                    })]
                  }), (0, Bt.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Xt && (0, Bt.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: mt + 1
                    }), Et && (0, Bt.jsx)(rt.b, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, Bt.jsx)(At.g, {
                      tooltipInner: (0, Bt.jsx)(Bt.Fragment, {
                        children: Ht(Xt ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, Bt.jsx)("div", {
                        className: dt()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: ft,
                          EmoteCustomPartToggleEquipped: Xt
                        }),
                        onClick: Vt => {
                          Vt.stopPropagation(), ft || function(tt) {
                            lt.has(tt) ? qt(et.filter((et => et !== tt))) : et.length >= jt.r || qt([...et, tt])
                          }(tt)
                        },
                        children: (0, Bt.jsx)(rt.b, {
                          name: Xt ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, tt)
              }))
            })
          }, tt)
        }))]
      })
    }
    const De = (0, Ot.memo)((function(tt) {
      let {
        selectedTab: et
      } = tt;
      const Vt = "characters" === et ? "skin" : et,
        {
          t: mt
        } = (0, Xt.H)(),
        {
          userContext: ft,
          isUserContextUpdating: wt
        } = (0, Dt.d)(),
        Nt = (0, qt.c)(),
        {
          gameState: bt
        } = (0, ht.k)(["gameState"]),
        [vt, Wt] = (0, Ot.useState)({}),
        [St, ct] = (0, Ot.useState)({}),
        [Rt, It] = (0, Ot.useState)(null),
        {
          previewEmote: Gt,
          triggerEmote: At
        } = (0, Jt.e)(),
        it = (0, Ot.useRef)(jt.A.reduce(((tt, et) => (tt[et] = (0, Et.d)(et), tt)), {})),
        Yt = (0, Ot.useRef)(!1),
        Tt = (0, Ot.useRef)(null),
        gt = (0, Ot.useRef)(null),
        te = (0, Ot.useRef)(null);

      function De() {
        null !== gt.current && (clearTimeout(gt.current), gt.current = null);
        const tt = te.current;
        null !== tt && (te.current = null, (0, xt.b)(ft, [
          ["emote", tt]
        ]))
      }

      function me(tt, et, Vt) {
        var Ot, qt, Dt;
        it.current = {
          ...it.current,
          [tt]: et
        }, Nt(), Vt && ((0, xt.b)(ft, [
          [tt, et]
        ]), It(null));
        const mt = (0, Qt.n)(tt, et);
        if (null !== mt && void 0 !== mt && mt.colourGroup && null !== (Ot = Ft.d[mt.cosmeticPack].colourGroups) && void 0 !== Ot && null !== (qt = Ot[mt.colourGroup]) && void 0 !== qt && qt.showSwatchSelector) {
          const Vt = (0, Qt.j)(et);
          Vt && ct((et => ({
            ...et,
            [`${mt.cosmeticPack}_${tt}_${mt.colourGroup}`]: parseInt(Vt[1])
          })))
        }
        null !== (Dt = Tt.current) && void 0 !== Dt && Dt.isReady() && Tt.current.updateCosmetic(tt, et)
      }

      function de(tt) {
        Wt((et => {
          const Vt = {
            ...et
          };
          return delete Vt[tt], Vt
        }))
      }

      function je(tt, et) {
        let {
          undoable: Vt
        } = et;
        Object.keys(vt).length > 0 && Wt({});
        const Ot = Object.entries(tt).filter((tt => {
          let [et, Vt] = tt;
          return it.current[et] !== Vt && !ee(et, Vt, He) && !st(Xe, et, Vt)
        }));
        Vt ? Ot.length > 0 && It({
          kind: "worn",
          outfit: yt(it.current)
        }) : It(null);
        for (const [qt, Dt] of Ot) me(qt, Dt, !1);
        Ot.length > 0 && (0, xt.b)(ft, Ot)
      }(0, Ct.e)("cosmeticsUpdated", (tt => {
        let et = !1;
        for (const {
            local: Vt,
            kD: Ot,
            GD: qt
          }
          of tt) {
          if (!Vt) return;
          et = !0, Yt.current || me(Ot, qt, !1), Nt()
        }
        et && (Yt.current = !0)
      })), (0, Ot.useEffect)((() => {
        if (!wt) {
          for (const [tt, et] of Object.entries(ft.getPlayerCosmetics())) me(tt, et, !1);
          Nt()
        }
      }), [wt]), (0, Ot.useEffect)((() => () => {
        De()
      }), []);
      const He = ft.getOwnedCosmeticPacks(),
        Xe = function(tt, et) {
          return null === tt ? null : {
            collected: new Set(tt.collected),
            ownedPacks: et
          }
        }(ft.dailyDrop, He),
        Qe = (0, Ut.usePurchasesAllowed)(),
        le = Object.keys(Qt.f[Vt]).filter((tt => {
          const et = (0, Qt.r)(Vt, tt),
            Ot = (0, kt.w)(Vt, tt, He);
          return !(et.purchasable && !Ot && !Qe) && (et.clientSelectable || Ot)
        })).sort(((tt, et) => {
          var Ot, qt, Dt, mt;
          return (null !== (Ot = null === (qt = (0, Qt.n)(Vt, tt)) || void 0 === qt ? void 0 : qt.clientIdx) && void 0 !== Ot ? Ot : 0) - (null !== (Dt = null === (mt = (0, Qt.n)(Vt, et)) || void 0 === mt ? void 0 : mt.clientIdx) && void 0 !== Dt ? Dt : 0)
        })),
        Ee = new Map;
      for (const Ot of le) {
        var fe;
        const tt = null === (fe = (0, Qt.n)(Vt, Ot)) || void 0 === fe ? void 0 : fe.cosmeticPack;
        Ee.has(tt) || Ee.set(tt, []), Ee.get(tt).push(Ot)
      }
      const we = function(tt, et) {
          const Vt = new Set,
            Ot = new Set;
          for (const [qt, Dt] of Object.entries(Qt.f[tt])) {
            if (void 0 === Dt.colourGroup) continue;
            const mt = `${Dt.cosmeticPack}_${Dt.colourGroup}`;
            (ee(tt, qt, et) ? Ot : Vt).add(mt)
          }
          return new Set([...Vt].filter((tt => Ot.has(tt))))
        }(Vt, He),
        ye = new Map;
      for (const [Ot, qt] of Ee) {
        const tt = [],
          et = new Map;
        for (const Ot of qt) {
          var Ne, ae;
          const qt = null !== (Ne = null === (ae = (0, Qt.n)(Vt, Ot)) || void 0 === ae ? void 0 : ae.colourGroup) && void 0 !== Ne ? Ne : null;
          et.has(qt) || (et.set(qt, []), tt.push(qt)), et.get(qt).push(Ot)
        }
        const Dt = tt.map((tt => {
          var qt;
          const Dt = et.get(tt),
            mt = tt ? null === (qt = Ft.d[Ot].colourGroups) || void 0 === qt ? void 0 : qt[tt] : void 0,
            dt = !0 === (null === mt || void 0 === mt ? void 0 : mt.showSwatchSelector) && !we.has(`${Ot}_${tt}`);
          if (dt && mt) {
            var jt;
            const et = null !== (jt = St[`${Ot}_${Vt}_${tt}`]) && void 0 !== jt ? jt : (0, Ft.h)(mt.colours);
            return {
              groupName: tt,
              showSwatch: dt,
              cosmetics: Dt.filter((tt => {
                const Vt = (0, Qt.j)(tt);
                return !Vt || et.toString() === Vt[1].toString()
              }))
            }
          }
          return {
            groupName: tt,
            cosmetics: Dt,
            showSwatch: dt
          }
        }));
        ye.set(Ot, Dt)
      }
      const Me = Array.from(Ee.keys()),
        be = new Map;
      for (const [Ot, qt] of Object.entries(lt.d)) {
        const tt = Ft.d[qt.cosmeticPack],
          et = !Ve(qt.cosmetics, He),
          Vt = Ft.l.some((tt => (0, Ft.f)(tt) === Ot));
        (tt.clientSelectable || Vt || et) && ((!tt.purchasable || et || Qe) && (be.has(qt.cosmeticPack) || be.set(qt.cosmeticPack, []), be.get(qt.cosmeticPack).push([Ot, qt])))
      }
      const Je = Array.from(be.keys());
      return (0, Bt.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === Vt || "nameColour" === Vt) && !ft.playerHasRank("super") && (0, Bt.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, Bt.jsx)(rt.b, {
            name: "bolt"
          }), mt("homePage:unlockWithSuperRank"), Qe && (0, Bt.jsx)(ut.m, {
            onClick: () => {
              (0, Kt.l)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: mt("general:getItNow")
          })]
        }), (0, Bt.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === et && (0, Bt.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, Bt.jsx)(pt, {
              wornOutfit: yt(it.current),
              onApply: tt => {
                je(tt, {
                  undoable: !0
                })
              },
              onOverwrite: (tt, et) => {
                It({
                  kind: "slot",
                  slot: tt,
                  outfit: et
                })
              },
              onDelete: tt => {
                It((et => "slot" === (null === et || void 0 === et ? void 0 : et.kind) && et.slot === tt ? null : et))
              }
            }), Je.map((tt => {
              const et = be.get(tt);
              return (0, Bt.jsx)(Oe, {
                pack: tt,
                ownedPacks: He,
                showStoreLink: !Ft.m.includes(tt) && et.some((tt => {
                  let [, {
                    cosmetics: et
                  }] = tt;
                  return Ve(et, He)
                })),
                children: (0, Bt.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: et.map((tt => {
                    let [et, {
                      cosmetics: Vt
                    }] = tt;
                    const Ot = Ve(Vt, He),
                      qt = !Ot && function(tt, et) {
                        return Object.entries(et).some((et => {
                          let [Vt, Ot] = et;
                          return st(tt, Vt, Ot)
                        }))
                      }(Xe, Vt),
                      Dt = Ot || qt,
                      mt = Mt(Vt, vt),
                      jt = !mt && Mt(Vt, it.current);
                    return (0, Bt.jsx)(nt, {
                      locked: qt,
                      children: (0, Bt.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: dt()("CharacterPresetCard", {
                          CharacterPresetCardActive: jt,
                          CharacterPresetCardTryingOn: mt
                        }),
                        onClick: () => {
                          Dt ? function(tt) {
                            Mt(tt, vt) ? Wt({}) : Wt({
                              ...tt
                            })
                          }(Vt) : je(Vt, {
                            undoable: !0
                          })
                        },
                        children: [(0, Bt.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(/textures/charSkins/previews/character_${et}_preview.png)`
                          }
                        }), Dt && (0, Bt.jsx)(rt.b, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, et)
                  }))
                })
              }, tt)
            }))]
          }), "emote" === et && (0, Bt.jsx)(qe, {
            equippedEmoteIds: (0, Et.h)(it.current.emote),
            ownedPacks: He,
            canBuy: Qe,
            onUpdateLoadout: tt => {
              const et = (0, Et.l)(tt);
              var Vt;
              it.current = {
                ...it.current,
                emote: et
              }, ft.setPlayerCosmetics("emote", et), Nt(), Vt = et, te.current = Vt, null !== gt.current && clearTimeout(gt.current), gt.current = setTimeout(De, 350)
            },
            onEmoteSelected: At,
            onEquipPreviewSkin: () => {
              ! function(tt, et) {
                for (const Vt of jt.A) "cape" !== Vt && "nameColour" !== Vt && "emote" !== Vt && tt(Vt, "skin" === Vt ? "skin_preview" : `${Vt}_none`, !1);
                et()
              }(me, Nt)
            }
          }), "characters" !== et && "emote" !== et && (0, Bt.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Me.map((tt => {
              const et = ye.get(tt);
              return (0, Bt.jsx)(Oe, {
                pack: tt,
                ownedPacks: He,
                children: et.map((et => {
                  var Ot;
                  let {
                    groupName: qt,
                    cosmetics: Dt,
                    showSwatch: mt
                  } = et;
                  const jt = qt ? null === (Ot = Ft.d[tt].colourGroups) || void 0 === Ot ? void 0 : Ot[qt] : void 0,
                    Xt = `${tt}_${Vt}_${qt}`;
                  return (0, Bt.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [mt && jt && (0, Bt.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...jt.colours.map(((tt, et) => ({
                        color: tt,
                        index: et
                      })))].sort(((tt, et) => tt.color.order - et.color.order)).map((et => {
                        var Ot;
                        let {
                          color: Dt,
                          index: mt
                        } = et;
                        return (0, Bt.jsx)("div", {
                          className: dt()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (Ot = St[Xt]) && void 0 !== Ot ? Ot : (0, Ft.h)(jt.colours)) === mt
                          }),
                          style: {
                            backgroundColor: `rgb(${Dt.rbg.join(",")})`
                          },
                          onClick: () => {
                            var et;
                            ct((tt => ({
                              ...tt,
                              [Xt]: mt
                            })));
                            const Ot = vt[Vt],
                              Dt = Ot ? (0, Qt.n)(Vt, Ot) : null,
                              dt = (null === Dt || void 0 === Dt ? void 0 : Dt.cosmeticPack) === tt,
                              jt = dt ? Ot : it.current[Vt],
                              Ht = dt ? Dt : (0, Qt.n)(Vt, jt);
                            if ((null === Ht || void 0 === Ht ? void 0 : Ht.cosmeticPack) !== tt) return;
                            if ((null !== (et = null === Ht || void 0 === Ht ? void 0 : Ht.colourGroup) && void 0 !== et ? et : null) !== qt) return;
                            const lt = (0, Qt.j)(jt);
                            if (lt) {
                              const tt = `${Vt}_${lt[0]}_${mt}`;
                              ee(Vt, tt, He) || st(Xe, Vt, tt) ? Wt((et => ({
                                ...et,
                                [Vt]: tt
                              }))) : (dt && de(Vt), me(Vt, tt, !0))
                            }
                          }
                        }, Dt.rbg.join())
                      }))
                    }), Dt.map((tt => {
                      const et = tt === it.current[Vt],
                        Ot = vt[Vt] === tt,
                        qt = ee(Vt, tt, He),
                        Dt = !qt && st(Xe, Vt, tt),
                        mt = qt || Dt;
                      let jt = !0;
                      return mt || et || ("cape" !== Vt || (0, Zt.ae)(ft.getPlayerRanks(), tt)) && ("nameColour" !== Vt || ft.playerHasRank("super")) || (jt = !1), (0, Bt.jsx)(nt, {
                        locked: Dt,
                        children: (0, Bt.jsxs)("div", {
                          className: dt()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: et && !Ot,
                            TryingOnCharCustomPartWrapper: Ot,
                            DisabledCharCustomPartWrapper: !jt,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === Vt
                          }),
                          onClick: () => {
                            if (jt)
                              if (mt) Wt((et => {
                                if (et[Vt] === tt) {
                                  const tt = {
                                    ...et
                                  };
                                  return delete tt[Vt], tt
                                }
                                return {
                                  ...et,
                                  [Vt]: tt
                                }
                              }));
                              else {
                                var et;
                                if (vt[Vt] && de(Vt), tt === it.current[Vt]) return;
                                null !== (et = Tt.current) && void 0 !== et && et.isReady() && me(Vt, tt, !0)
                              }
                          },
                          children: ["profileEffect" === Vt ? (0, Bt.jsx)("div", {
                            className: "CharCustomPart CharCustomProfileEffect",
                            children: (0, Bt.jsx)(ot.f, {
                              playerSocialPreview: (0, zt.b)(tt, {
                                name: ft.getPlayerName(),
                                cosmetics: ft.getPlayerCosmetics()
                              }),
                              showLocation: !1,
                              opensProfileCard: !1
                            })
                          }) : (0, Bt.jsx)("div", {
                            className: dt()("CharCustomPart", {
                              PixelatedImage: "cape" === Vt
                            }),
                            style: (0, Qt.n)(Vt, tt).previewTex ? {
                              backgroundImage: `url(/textures/charSkins/previews/${(0,Qt.n)(Vt,tt).previewTex}.png)`
                            } : {
                              backgroundColor: Ht.o[tt]
                            }
                          }), mt && (0, Bt.jsx)(rt.b, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, tt)
                    }))]
                  }, null !== qt && void 0 !== qt ? qt : "ungrouped")
                }))
              }, tt)
            }))]
          }), Rt && (0, Bt.jsxs)(ut.f, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === Rt.kind ? je(Rt.outfit, {
                undoable: !1
              }) : (Pt.save(Rt.slot, Rt.outfit), It(null))
            },
            children: [(0, Bt.jsx)(rt.b, {
              name: "rotate-left"
            }), mt("general:undo")]
          }), (0, Bt.jsx)(Lt.CharacterPreview, {
            ref: Tt,
            forcedCosmetics: vt,
            rd: Gt.id,
            emotePlaySeq: Gt.seq,
            onReady: () => {
              for (const tt of jt.A) me(tt, it.current[tt], !1)
            }
          })]
        })]
      })
    }))
  },
  41510: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      CharacterPreview: () => Qt
    });
    var Ot = Vt(63),
      qt = Vt(2821),
      Dt = Vt(1325),
      mt = Vt(2652),
      dt = Vt(34412),
      jt = Vt(3702),
      Ht = Vt(1188);
    const Xt = .6 * Math.PI,
      Qt = (0, Ot.memo)((0, Ot.forwardRef)((function(tt, et) {
        let {
          onReady: Vt,
          onDrawn: Qt,
          owner: lt = "other",
          framing: Et = "player",
          forcedCosmetics: ft,
          rd: wt,
          emotePlaySeq: yt,
          turntableFromYaw: Nt = null
        } = tt;
        const Mt = (0, Ot.useRef)(null),
          {
            width: bt,
            height: Jt
          } = (0, qt.d)(Mt),
          Ct = (0, Ot.useRef)(null),
          ut = (0, Ot.useRef)({}),
          Kt = (0, Ot.useRef)({}),
          [ht, vt] = (0, Ot.useState)(!1),
          Wt = (0, Ot.useRef)(Vt);
        Wt.current = Vt;
        const St = (0, Ot.useRef)(Qt);
        St.current = Qt;
        const ct = (0, Ot.useRef)(null),
          Rt = (0, Ot.useRef)(!1),
          It = (0, Ot.useRef)(!1),
          Pt = (0, Ot.useCallback)((() => {
            const tt = Ct.current;
            if (!tt || !St.current || Rt.current || !It.current) return;
            const et = {};
            ct.current = et, queueMicrotask((() => {
              if (ct.current !== et) return;
              const Vt = Promise.all(Dt.A.map((et => tt.untilDrawn(et)))).catch((tt => {
                  console.error("Failed to draw the character preview", tt)
                })),
                Ot = new Promise((tt => {
                  setTimeout(tt, 1e4)
                }));
              Promise.race([Vt, Ot]).then((() => {
                var Vt;
                Ct.current !== tt || ct.current !== et || Rt.current || (Rt.current = !0, null === (Vt = St.current) || void 0 === Vt || Vt.call(St))
              }))
            }))
          }), []);
        return (0, Ot.useImperativeHandle)(et, (() => {
          const tt = (tt, et) => {
            var Vt;
            (ut.current[tt] = et, null !== ft && void 0 !== ft && ft[tt]) || (null === (Vt = Ct.current) || void 0 === Vt || Vt.setCosmetic(tt, et), Pt())
          };
          return {
            updateCosmetic: tt,
            setAllCosmetics(et) {
              for (const Ot of Dt.A) {
                var Vt;
                tt(Ot, null !== (Vt = et[Ot]) && void 0 !== Vt ? Vt : (0, mt.d)(Ot))
              }
            },
            isReady() {
              var tt, et;
              return null !== (tt = null === (et = Ct.current) || void 0 === et ? void 0 : et.isReady()) && void 0 !== tt && tt
            },
            resetCamera() {
              var tt;
              null === (tt = Ct.current) || void 0 === tt || tt.resetCamera()
            },
            setOrbit(tt) {
              var et;
              null === (et = Ct.current) || void 0 === et || et.setOrbit(tt)
            },
            async ensureReadyForCapture(tt) {
              var et;
              await (null === (et = Ct.current) || void 0 === et ? void 0 : et.untilDrawn(tt))
            },
            getDevTools() {
              var tt;
              return null !== (tt = Ct.current) && void 0 !== tt && tt.isReady() ? Ct.current.dev : null
            }
          }
        }), [ft, Pt]), (0, Ot.useEffect)((() => {
          const tt = jt.c.register(lt),
            et = dt.l.openCharacter(Mt.current, Et);
          Ct.current = et;
          let Vt = !0;
          return et.ready.then((() => {
            Vt && (vt(!0), Wt.current())
          })).catch((tt => {
            console.error("Failed to set up the character preview", tt)
          })), () => {
            Vt = !1, tt(), et.resetCamera(), et.close(), Ct.current = null
          }
        }), []), (0, Ot.useEffect)((() => {
          bt <= 0 || Jt <= 0 || Ct.current.resize(bt, Jt)
        }), [bt, Jt]), (0, Ot.useEffect)((() => {
          if (!ht) return;
          const tt = Kt.current;
          for (const et of Dt.A) {
            const Vt = null === ft || void 0 === ft ? void 0 : ft[et],
              Ot = tt[et];
            Vt && Vt !== Ot ? Ct.current.setCosmetic(et, Vt) : !Vt && Ot && ut.current[et] && Ct.current.setCosmetic(et, ut.current[et])
          }
          Kt.current = {
            ...ft
          }, It.current = !0, Pt()
        }), [ft, ht, Pt]), (0, Ot.useEffect)((() => {
          ht && Ct.current.playEmote(null !== wt && void 0 !== wt ? wt : null)
        }), [wt, yt, ht]), (0, Ot.useEffect)((() => {
          if (!ht || null === Nt) return;
          const tt = Ct.current,
            {
              pitch: et,
              radius: Vt
            } = dt.e[Et];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return tt.setOrbit({
            yaw: Nt + Xt,
            pitch: et,
            radius: Vt
          }), () => {
            tt.resetCamera()
          };
          const Ot = performance.now();
          let qt = 0;
          const Dt = mt => {
            tt.setOrbit({
              yaw: Nt + (mt - Ot) / 6e3 * 2 * Math.PI,
              pitch: et,
              radius: Vt
            }), qt = requestAnimationFrame(Dt)
          };
          return qt = requestAnimationFrame(Dt), () => {
            cancelAnimationFrame(qt), tt.resetCamera()
          }
        }), [ht, Nt]), (0, Ht.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Mt
        })
      })))
  },
  36623: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot = Vt(2024),
      qt = Vt(1600);
    const Dt = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(tt, et) {
        tt !== this.userContext && this.sendHeld(), this.userContext = tt;
        for (const [Ot, qt] of et) this.pending.set(Ot, qt);
        if (null !== this.timer) return;
        const Vt = this.lastSentAt + 1100 - Date.now();
        Vt <= 0 ? this.send(tt) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), Vt), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(tt) {
        const et = Array.from(this.pending, (tt => {
          let [et, Vt] = tt;
          return {
            kD: et,
            GD: Vt
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), qt.e.updateCosmetics(tt, et).catch((tt => {
          console.error("Failed to update cosmetics", tt)
        }))
      }
    };

    function mt(tt, et) {
      for (const [Vt, Ot] of et) tt.setPlayerCosmetics(Vt, Ot);
      if (null === Ot.gameBridge.latest("connectedGame").websocketUrl) Dt.save(tt, et);
      else
        for (const [Vt, qt] of et) Ot.gameBridge.send("updateMyCosmetic", {
          kD: Vt,
          GD: qt
        })
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);