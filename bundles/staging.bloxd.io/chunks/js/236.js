export const id = 236;
export const ids = [236, 237];
export const modules = {
  44474: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      CharacterCustomisationUI: () => Ji
    });
    var ye = He(59),
      be = He(2722),
      Me = He(3848),
      Ke = He(3829),
      Ue = He(1075),
      Fe = He(1053),
      Je = He.n(Fe),
      oe = He(1189),
      Re = He(592),
      ke = He(1127),
      qe = He(2278),
      fe = He(1557),
      Te = He(2683);
    const pe = oe.v.filter((ee => !fe.d.includes(ee)));

    function Xe(ee, ie) {
      return pe.includes(ee) && "string" === typeof ie && (0, Te.h)(ee, ie)
    }

    function ze(ee) {
      const ie = {};
      for (const He of pe) {
        const ye = ee[He];
        void 0 !== ye && Xe(He, ye) && (ie[He] = ye)
      }
      return ie
    }

    function Be(ee) {
      return 0 === Object.keys(ee).length
    }

    function Ee(ee, ie) {
      return Object.entries(ee).every((ee => {
        let [He, ye] = ee;
        return ie[He] === ye
      }))
    }
    var ge = He(2284),
      Oe = He(3394),
      de = He(2029),
      We = He(1438),
      te = He(2326),
      Ze = He(2397),
      we = He(18),
      De = He(2862),
      Pe = He(1490),
      Ae = He(1083),
      Ye = He(1913);
    class Ve {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(ee) {
        null !== ee && ee !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = ee)
      }
      isFor(ee) {
        return null === this.accountId || this.accountId === ee
      }
      overlay(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return ee.map(((ee, He) => {
          var ye, be;
          return null !== (ye = null !== (be = this.slots.get(He)) && void 0 !== be ? be : ie.get(He)) && void 0 !== ye ? ye : ee
        }))
      }
    }
    class ae extends De.c {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Ve;
        super("saved outfits", (async ie => {
          const He = ee.isFor(ie.whamm),
            ye = new Map(ee.slots),
            be = await Pe.b.getSavedOutfits(ie);
          return He ? ee.overlay(be, ye) : be
        })), this.unsaved = ee, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(ee, ie) {
        var He, ye;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(ee)) || this.unsaved.before.set(ee, null !== (He = null === (ye = this.getState().data) || void 0 === ye ? void 0 : ye[ee]) && void 0 !== He ? He : {});
        this.unsaved.slots.set(ee, ie), this.update((He => He.map(((He, ye) => ye === ee ? ie : He)))), this.sending || this.sendUnsaved()
      }
      clear(ee) {
        this.save(ee, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let ee = !1;
        for (; this.unsaved.slots.size > 0;) {
          const He = new Map(this.unsaved.slots);
          let ye = this.getState().accountId;
          try {
            const ee = await Ae.userContextManager.getCurrentUserContext();
            if (ye = ee.whamm, this.unsaved.moveTo(ee.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: ie,
              data: be
            } = this.getState();
            let Me = be;
            ie === ee.whamm && null !== Me || (Me = this.unsaved.overlay(await Pe.b.getSavedOutfits(ee)), this.refresh()), await Pe.b.setSavedOutfits(ee, Me), this.unsaved.isFor(ee.whamm) && Me.forEach(((ee, ie) => {
              const ye = this.unsaved.slots.get(ie);
              void 0 === ye || ye === He.get(ie) ? this.unsaved.before.delete(ie) : this.unsaved.before.set(ie, ee)
            }))
          } catch (ie) {
            if (console.error("Failed to save outfits", ie), this.getState().accountId === ye && [...this.unsaved.slots].every((ee => {
                let [ie, ye] = ee;
                return He.get(ie) === ye
              }))) {
              const ie = [...He.values()].every(Be);
              Ye.f.showMessage({
                translationKey: ie ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const ye = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((ee => ee.map(((ee, ie) => {
                var He;
                return null !== (He = ye.get(ie)) && void 0 !== He ? He : ee
              })))), ee = !0
            }
          }
          for (const [ee, ie] of He) this.unsaved.slots.get(ee) === ie && this.unsaved.slots.delete(ee)
        }
        this.sending = !1, ee && this.refresh()
      }
    }
    const ce = new ae;
    var xe = He(347),
      Le = He(44481),
      Ce = He(1553),
      ve = He(2374),
      ue = He(3259),
      me = He(3385),
      le = He(2337),
      Se = He(1323);
    He(34919), He(3397);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var ne = He(2330),
      je = He(3406),
      se = He(3411),
      Ie = He(1351),
      he = He(2425),
      Ne = He(1340),
      Ge = He(1228);

    function re(ee) {
      let {
        wornOutfit: ie,
        onApply: He,
        onOverwrite: be,
        onDelete: Me
      } = ee;
      const {
        t: Ke
      } = (0, ke.v)(), {
        accountId: Fe,
        data: oe
      } = (0, De.h)(ce, !1), {
        userContext: Re
      } = (0, Ue.b)();
      async function qe(ee, ie) {
        const He = await Ne.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: ye,
            data: be
          } = ce.getState();
        var Ke, Ue;
        !0 === He && ye === Fe && null !== be && (Ee(Ke = be[ee], Ue = ie) && Ee(Ue, Ke)) && (ce.clear(ee), Me(ee))
      }
      return (0, ye.useEffect)((() => {
        ce.ensureLoaded()
      }), []), null === oe || Fe !== Re.whamm ? null : (0, Ge.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, Ge.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, Ge.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: Ke("homePage:myOutfits")
          })
        }), (0, Ge.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: oe.map(((ee, ye) => {
            const Me = Be(ee);
            return (0, Ge.jsxs)("div", {
              className: Je()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !Me
              }),
              children: [(0, Ge.jsxs)("div", {
                ...(0, We.R)(),
                role: Me ? "button" : "link",
                "data-pad-focusable": !0,
                className: Je()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: Me,
                  CharacterPresetCardActive: !Me && Ee(ee, ie)
                }),
                onClick: () => {
                  Me ? ce.save(ye, ie) : He(ee)
                },
                children: [Me && (0, Ge.jsxs)(Ge.Fragment, {
                  children: [(0, Ge.jsx)(Se.e, {
                    name: "plus"
                  }), Ke("homePage:saveOutfit")]
                }), !Me && (0, Ge.jsxs)(Ge.Fragment, {
                  children: [(0, Ge.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, Ge.jsx)(he.c, {
                      cosmetics: ee
                    })
                  }), (0, Ge.jsx)(We.M, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      Ee(ie, ee) || (ce.save(ye, ie), be(ye, ee))
                    },
                    children: Ke("general:save")
                  })]
                })]
              }), !Me && (0, Ge.jsx)("button", {
                type: "button",
                className: "SavedOutfitDeleteButton",
                "data-pad-destructive": !0,
                "aria-label": Ke("general:delete"),
                title: Ke("general:delete"),
                onClick: () => {
                  qe(ye, ee)
                },
                children: (0, Ge.jsx)(Se.e, {
                  name: "trash-can"
                })
              })]
            }, ye)
          }))
        })]
      })
    }
    var Qe = He(37175),
      ei = He(2666),
      ii = He(2675);

    function Hi(ee, ie, He) {
      return null !== ee && !(0, ei.d)(ii.c, ie, He, ee.collected, ee.ownedPacks)
    }

    function yi(ee) {
      let {
        locked: ie,
        children: He
      } = ee;
      return ie ? (0, Ge.jsx)(bi, {
        children: He
      }) : He
    }

    function bi(ee) {
      var ie;
      let {
        children: He
      } = ee;
      const {
        t: ye
      } = (0, ke.v)(), {
        userContext: be
      } = (0, Ue.b)(), Me = null !== (ie = be.dailyDrop) && void 0 !== ie && ie.hidden ? ye("dailyDrop:lockedFromHidden") : ye("dailyDrop:lockedFrom");
      return (0, Ge.jsx)(Ie.g, {
        tooltipInner: (0, Ge.jsx)(Ge.Fragment, {
          children: Me
        }),
        children: He
      })
    }

    function Mi(ee, ie, He) {
      return (0, qe.j)(ee, ie).purchasable && !(0, ve.A)(ee, ie, He)
    }

    function Ki(ee, ie) {
      return Object.entries(ee).some((ee => {
        let [He, ye] = ee;
        return Mi(He, ye, ie)
      }))
    }

    function Ui(ee) {
      var ie;
      let {
        pack: He,
        ownedPacks: ye,
        showStoreLink: be = !1,
        children: Me
      } = ee;
      const {
        t: Ke
      } = (0, ke.v)(), Ue = Ce.b[He], Fe = Ue.purchasable && !ye.includes(He) && Ce.p.includes(He), oe = ue.l[He];
      return (0, Ge.jsxs)("div", {
        className: Je()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: Fe
        }),
        children: [oe && (0, Ge.jsx)(oe, {}), (0, Ge.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, Ge.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (ie = Ue.displayName) && void 0 !== ie ? ie : He
          }), (Fe || be) && (0, Ge.jsxs)(We.A, {
            onClick: () => {
              Fe ? (0, ue.j)(He) : (0, te.r)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, Ge.jsx)(Se.e, {
              name: "store"
            }), " ", Ke("general:viewInShop")]
          })]
        }), Fe && "bee" === He && (0, Ge.jsx)(ue.c, {}), Me]
      })
    }

    function Fi(ee) {
      let {
        equippedEmoteIds: ie,
        ownedPacks: He,
        canBuy: ye,
        onUpdateLoadout: be,
        onEmoteSelected: Me,
        onEquipPreviewSkin: Ke
      } = ee;
      const {
        t: Ue
      } = (0, ke.v)(), Fe = new Set(ie), Re = new Map, fe = Object.keys(qe.f.emote).sort(((ee, ie) => {
        var He, ye, be, Me;
        return (null !== (He = null === (ye = (0, qe.h)("emote", ee)) || void 0 === ye ? void 0 : ye.clientIdx) && void 0 !== He ? He : 0) - (null !== (be = null === (Me = (0, qe.h)("emote", ie)) || void 0 === Me ? void 0 : Me.clientIdx) && void 0 !== be ? be : 0)
      })).filter((ee => {
        const ie = (0, qe.j)("emote", ee),
          be = (0, ve.A)("emote", ee, He);
        return !(ie.purchasable && !be && !ye) && (ie.clientSelectable || be)
      }));
      for (const Je of fe) {
        const ee = (0, qe.h)("emote", Je).cosmeticPack;
        Re.has(ee) || Re.set(ee, []), Re.get(ee).push(Je)
      }
      const Te = Array.from(Re.keys());
      return (0, Ge.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, Ge.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, Ge.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: Ue("emotes:equippedCount", {
              count: ie.length,
              max: oe.n
            })
          }), (0, Ge.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: Ue("emotes:loadoutHint")
          })]
        }), Te.map((ee => {
          const ye = Re.get(ee);
          return (0, Ge.jsx)(Ui, {
            pack: ee,
            ownedPacks: He,
            children: (0, Ge.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: ye.map((ee => {
                var ye;
                const Ke = ie.indexOf(ee),
                  Re = -1 !== Ke,
                  ke = ie.length >= oe.n,
                  qe = Mi("emote", ee, He),
                  fe = qe || !Re && ke,
                  Te = (0, ge.l)(ee);
                return (0, Ge.jsxs)("div", {
                  className: Je()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Re
                  }),
                  onClick: () => {
                    Me(ee)
                  },
                  children: [(0, Ge.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, Ge.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(${(0,je.g)("emote",ee)})`
                      },
                      "aria-hidden": !0
                    }), (0, Ge.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (ye = null === Te || void 0 === Te ? void 0 : Te.displayName) && void 0 !== ye ? ye : ee
                    })]
                  }), (0, Ge.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Re && (0, Ge.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: Ke + 1
                    }), qe && (0, Ge.jsx)(Se.e, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, Ge.jsx)(Ie.g, {
                      tooltipInner: (0, Ge.jsx)(Ge.Fragment, {
                        children: Ue(Re ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, Ge.jsx)("div", {
                        className: Je()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: fe,
                          EmoteCustomPartToggleEquipped: Re
                        }),
                        onClick: He => {
                          He.stopPropagation(), fe || function(ee) {
                            Fe.has(ee) ? be(ie.filter((ie => ie !== ee))) : ie.length >= oe.n || be([...ie, ee])
                          }(ee)
                        },
                        children: (0, Ge.jsx)(Se.e, {
                          name: Re ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, ee)
              }))
            })
          }, ee)
        }))]
      })
    }
    const Ji = (0, ye.memo)((function(ee) {
      let {
        selectedTab: ie
      } = ee;
      const He = "characters" === ie ? "skin" : ie,
        {
          t: Fe
        } = (0, ke.v)(),
        {
          userContext: pe,
          isUserContextUpdating: Xe
        } = (0, Ue.b)(),
        Be = (0, be.c)(),
        {
          gameState: ge
        } = (0, we.m)(["gameState"]),
        [De, Pe] = (0, ye.useState)({}),
        Ae = (0, ye.useRef)(De);
      Ae.current = De;
      const [Ye, Ve] = (0, ye.useState)({}), [ae, ue] = (0, ye.useState)(null), {
        previewEmote: je,
        triggerEmote: Ie
      } = (0, Oe.d)(), he = (0, ye.useRef)(oe.v.reduce(((ee, ie) => (ee[ie] = (0, Te.e)(ie), ee)), {})), Ne = (0, ye.useRef)(!1), ei = (0, ye.useRef)(null), ii = (0, ye.useRef)(je);
      ii.current = je;
      const bi = (0, ye.useRef)(null),
        Ji = (0, ye.useRef)(null);

      function oi() {
        null !== bi.current && (clearTimeout(bi.current), bi.current = null);
        const ee = Ji.current;
        null !== ee && (Ji.current = null, (0, Qe.d)(pe, [
          ["emote", ee]
        ]))
      }

      function Ri(ee, ie, He) {
        var ye, be, Me;
        he.current = {
          ...he.current,
          [ee]: ie
        }, Be(), He && ((0, Qe.d)(pe, [
          [ee, ie]
        ]), ue(null));
        const Ke = (0, qe.h)(ee, ie);
        if (null !== Ke && void 0 !== Ke && Ke.colourGroup && null !== (ye = Ce.b[Ke.cosmeticPack].colourGroups) && void 0 !== ye && null !== (be = ye[Ke.colourGroup]) && void 0 !== be && be.showSwatchSelector) {
          const He = (0, qe.g)(ie);
          He && Ve((ie => ({
            ...ie,
            [`${Ke.cosmeticPack}_${ee}_${Ke.colourGroup}`]: parseInt(He[1])
          })))
        }
        null !== (Me = ei.current) && void 0 !== Me && Me.isReady() && ei.current.updateCosmetic(ee, ie)
      }

      function ki(ee) {
        Pe((ie => {
          const He = {
            ...ie
          };
          return delete He[ee], He
        }))
      }

      function qi(ee, ie) {
        let {
          undoable: He
        } = ie;
        Object.keys(De).length > 0 && Pe({});
        const ye = Object.entries(ee).filter((ee => {
          let [ie, He] = ee;
          return he.current[ie] !== He && !Mi(ie, He, fi) && !Hi(Ti, ie, He)
        }));
        He ? ye.length > 0 && ue({
          kind: "worn",
          outfit: ze(he.current)
        }) : ue(null);
        for (const [be, Me] of ye) Ri(be, Me, !1);
        ye.length > 0 && (0, Qe.d)(pe, ye)
      }(0, de.e)("cosmeticsUpdated", (ee => {
        let ie = !1;
        for (const {
            local: He,
            te: ye,
            Ze: be
          }
          of ee) {
          if (!He) return;
          ie = !0, Ne.current || Ri(ye, be, !1), Be()
        }
        ie && (Ne.current = !0)
      })), (0, ye.useEffect)((() => {
        if (!Xe) {
          for (const [ee, ie] of Object.entries(pe.getPlayerCosmetics())) Ri(ee, ie, !1);
          Be()
        }
      }), [Xe]), (0, ye.useEffect)((() => () => {
        oi()
      }), []);
      const fi = pe.getOwnedCosmeticPacks(),
        Ti = function(ee, ie) {
          return null === ee ? null : {
            collected: new Set(ee.collected),
            ownedPacks: ie
          }
        }(pe.dailyDrop, fi),
        Xi = (0, ne.usePurchasesAllowed)(),
        zi = Object.keys(qe.f[He]).filter((ee => {
          const ie = (0, qe.j)(He, ee),
            ye = (0, ve.A)(He, ee, fi);
          return !(ie.purchasable && !ye && !Xi) && (ie.clientSelectable || ye)
        })).sort(((ee, ie) => {
          var ye, be, Me, Ke;
          return (null !== (ye = null === (be = (0, qe.h)(He, ee)) || void 0 === be ? void 0 : be.clientIdx) && void 0 !== ye ? ye : 0) - (null !== (Me = null === (Ke = (0, qe.h)(He, ie)) || void 0 === Ke ? void 0 : Ke.clientIdx) && void 0 !== Me ? Me : 0)
        })),
        Bi = new Map;
      for (const ye of zi) {
        var Ei;
        const ee = null === (Ei = (0, qe.h)(He, ye)) || void 0 === Ei ? void 0 : Ei.cosmeticPack;
        Bi.has(ee) || Bi.set(ee, []), Bi.get(ee).push(ye)
      }
      const gi = function(ee, ie) {
          const He = new Set,
            ye = new Set;
          for (const [be, Me] of Object.entries(qe.f[ee])) {
            if (void 0 === Me.colourGroup) continue;
            const Ke = `${Me.cosmeticPack}_${Me.colourGroup}`;
            (Mi(ee, be, ie) ? ye : He).add(Ke)
          }
          return new Set([...He].filter((ee => ye.has(ee))))
        }(He, fi),
        Oi = new Map;
      for (const [ye, be] of Bi) {
        const ee = [],
          ie = new Map;
        for (const ye of be) {
          var di, Wi;
          const be = null !== (di = null === (Wi = (0, qe.h)(He, ye)) || void 0 === Wi ? void 0 : Wi.colourGroup) && void 0 !== di ? di : null;
          ie.has(be) || (ie.set(be, []), ee.push(be)), ie.get(be).push(ye)
        }
        const Me = ee.map((ee => {
          var be;
          const Me = ie.get(ee),
            Ke = ee ? null === (be = Ce.b[ye].colourGroups) || void 0 === be ? void 0 : be[ee] : void 0,
            Ue = !0 === (null === Ke || void 0 === Ke ? void 0 : Ke.showSwatchSelector) && !gi.has(`${ye}_${ee}`);
          if (Ue && Ke) {
            var Fe;
            const ie = null !== (Fe = Ye[`${ye}_${He}_${ee}`]) && void 0 !== Fe ? Fe : (0, Ce.f)(Ke.colours);
            return {
              groupName: ee,
              showSwatch: Ue,
              cosmetics: Me.filter((ee => {
                const He = (0, qe.g)(ee);
                return !He || ie.toString() === He[1].toString()
              }))
            }
          }
          return {
            groupName: ee,
            cosmetics: Me,
            showSwatch: Ue
          }
        }));
        Oi.set(ye, Me)
      }
      const ti = Array.from(Bi.keys()),
        Zi = new Map;
      for (const [ye, be] of Object.entries(fe.b)) {
        const ee = Ce.b[be.cosmeticPack],
          ie = (0, ve.y)(be.cosmetics, fi),
          He = Ce.h.some((ee => (0, Ce.d)(ee) === ye));
        (ee.clientSelectable || He || ie) && ((!ee.purchasable || ie || Xi) && (Zi.has(be.cosmeticPack) || Zi.set(be.cosmeticPack, []), Zi.get(be.cosmeticPack).push([ye, be])))
      }
      const wi = Array.from(Zi.keys());
      return (0, Ge.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === He || "nameColour" === He) && !(0, Re.b)(pe.getPlayerRanks()) && (0, Ge.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, Ge.jsx)(Se.e, {
            name: "bolt"
          }), Fe((0, Ze.n)(Date.now()).unlockWithKey), Xi && (0, Ge.jsx)(We.m, {
            onClick: () => {
              (0, te.r)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: Fe("general:getItNow")
          })]
        }), (0, Ge.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === ie && (0, Ge.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, Ge.jsx)(re, {
              wornOutfit: ze(he.current),
              onApply: ee => {
                qi(ee, {
                  undoable: !0
                })
              },
              onOverwrite: (ee, ie) => {
                ue({
                  kind: "slot",
                  slot: ee,
                  outfit: ie
                })
              },
              onDelete: ee => {
                ue((ie => "slot" === (null === ie || void 0 === ie ? void 0 : ie.kind) && ie.slot === ee ? null : ie))
              }
            }), wi.map((ee => {
              const ie = Zi.get(ee);
              return (0, Ge.jsx)(Ui, {
                pack: ee,
                ownedPacks: fi,
                showStoreLink: !Ce.l.includes(ee) && ie.some((ee => {
                  let [, {
                    cosmetics: ie
                  }] = ee;
                  return Ki(ie, fi)
                })),
                children: (0, Ge.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: ie.map((ee => {
                    let [ie, {
                      cosmetics: He
                    }] = ee;
                    const ye = Ki(He, fi),
                      be = !ye && function(ee, ie) {
                        return Object.entries(ie).some((ie => {
                          let [He, ye] = ie;
                          return Hi(ee, He, ye)
                        }))
                      }(Ti, He),
                      Me = ye || be,
                      Ke = Ee(He, De),
                      Ue = !Ke && Ee(He, he.current);
                    return (0, Ge.jsx)(yi, {
                      locked: be,
                      children: (0, Ge.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: Je()("CharacterPresetCard", {
                          CharacterPresetCardActive: Ue,
                          CharacterPresetCardTryingOn: Ke
                        }),
                        onClick: () => {
                          Me ? function(ee) {
                            Ee(ee, De) ? Pe({}) : Pe({
                              ...ee
                            })
                          }(He) : qi(He, {
                            undoable: !0
                          })
                        },
                        children: [(0, Ge.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(${(0,le.g)(ie)})`
                          }
                        }), Me && (0, Ge.jsx)(Se.e, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, ie)
                  }))
                })
              }, ee)
            }))]
          }), "emote" === ie && (0, Ge.jsx)(Fi, {
            equippedEmoteIds: (0, Te.i)(he.current.emote),
            ownedPacks: fi,
            canBuy: Xi,
            onUpdateLoadout: ee => {
              const ie = (0, Te.l)(ee);
              var He;
              he.current = {
                ...he.current,
                emote: ie
              }, pe.setPlayerCosmetics("emote", ie), Be(), He = ie, Ji.current = He, null !== bi.current && clearTimeout(bi.current), bi.current = setTimeout(oi, 350)
            },
            onEmoteSelected: Ie,
            onEquipPreviewSkin: () => {
              ! function(ee, ie) {
                for (const He of oe.v)(0, fe.c)(He) && ee(He, "skin" === He ? "skin_preview" : `${He}_none`, !1);
                ie()
              }(Ri, Be)
            }
          }), "characters" !== ie && "emote" !== ie && (0, Ge.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, ti.map((ee => {
              const ie = Oi.get(ee);
              return (0, Ge.jsx)(Ui, {
                pack: ee,
                ownedPacks: fi,
                children: ie.map((ie => {
                  var ye;
                  let {
                    groupName: be,
                    cosmetics: Me,
                    showSwatch: Ke
                  } = ie;
                  const Ue = be ? null === (ye = Ce.b[ee].colourGroups) || void 0 === ye ? void 0 : ye[be] : void 0,
                    Fe = `${ee}_${He}_${be}`;
                  return (0, Ge.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [Ke && Ue && (0, Ge.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...Ue.colours.map(((ee, ie) => ({
                        color: ee,
                        index: ie
                      })))].sort(((ee, ie) => ee.color.order - ie.color.order)).map((ie => {
                        var ye;
                        let {
                          color: Me,
                          index: Ke
                        } = ie;
                        return (0, Ge.jsx)("div", {
                          className: Je()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (ye = Ye[Fe]) && void 0 !== ye ? ye : (0, Ce.f)(Ue.colours)) === Ke
                          }),
                          style: {
                            backgroundColor: `rgb(${Me.rbg.join(",")})`
                          },
                          onClick: () => {
                            var ie;
                            Ve((ee => ({
                              ...ee,
                              [Fe]: Ke
                            })));
                            const ye = De[He],
                              Me = ye ? (0, qe.h)(He, ye) : null,
                              Ue = (null === Me || void 0 === Me ? void 0 : Me.cosmeticPack) === ee,
                              Je = Ue ? ye : he.current[He],
                              oe = Ue ? Me : (0, qe.h)(He, Je);
                            if ((null === oe || void 0 === oe ? void 0 : oe.cosmeticPack) !== ee) return;
                            if ((null !== (ie = null === oe || void 0 === oe ? void 0 : oe.colourGroup) && void 0 !== ie ? ie : null) !== be) return;
                            const Re = (0, qe.g)(Je);
                            if (Re) {
                              const ee = `${He}_${Re[0]}_${Ke}`;
                              Mi(He, ee, fi) || Hi(Ti, He, ee) ? Pe((ie => ({
                                ...ie,
                                [He]: ee
                              }))) : (Ue && ki(He), Ri(He, ee, !0))
                            }
                          }
                        }, Me.rbg.join())
                      }))
                    }), Me.map((ee => {
                      const ie = ee === he.current[He],
                        ye = De[He] === ee,
                        be = Mi(He, ee, fi),
                        Me = !be && Hi(Ti, He, ee),
                        Ke = be || Me;
                      let Ue = !0;
                      return Ke || ie || ("cape" !== He || (0, xe.Qd)(pe.getPlayerRanks(), ee)) && ("nameColour" !== He || (0, Re.b)(pe.getPlayerRanks())) || (Ue = !1), (0, Ge.jsx)(yi, {
                        locked: Me,
                        children: (0, Ge.jsxs)("div", {
                          className: Je()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: ie && !ye,
                            TryingOnCharCustomPartWrapper: ye,
                            DisabledCharCustomPartWrapper: !Ue,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === He
                          }),
                          onClick: () => {
                            if (Ue)
                              if (Ke) Pe((ie => {
                                if (ie[He] === ee) {
                                  const ee = {
                                    ...ie
                                  };
                                  return delete ee[He], ee
                                }
                                return {
                                  ...ie,
                                  [He]: ee
                                }
                              }));
                              else {
                                var ie;
                                if (De[He] && ki(He), ee === he.current[He]) return;
                                null !== (ie = ei.current) && void 0 !== ie && ie.isReady() && Ri(He, ee, !0)
                              }
                          },
                          children: ["profileEffect" === He ? (0, Ge.jsx)(me.d, {
                            profileEffect: ee,
                            name: pe.getPlayerName(),
                            cosmetics: pe.getPlayerCosmetics()
                          }) : (0, Ge.jsx)(se.e, {
                            te: He,
                            Ze: ee
                          }), Ke && (0, Ge.jsx)(Se.e, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, ee)
                    }))]
                  }, null !== be && void 0 !== be ? be : "ungrouped")
                }))
              }, ee)
            }))]
          }), ae && (0, Ge.jsxs)(We.c, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === ae.kind ? qi(ae.outfit, {
                undoable: !1
              }) : (ce.save(ae.slot, ae.outfit), ue(null))
            },
            children: [(0, Ge.jsx)(Se.e, {
              name: "rotate-left"
            }), Fe("general:undo")]
          }), (0, Ge.jsx)(Le.CharacterPreview, {
            ref: ei,
            forcedCosmetics: De,
            oo: je.id,
            emotePlaySeq: je.seq,
            onReady: () => {
              for (const ee of oe.v) Ri(ee, he.current[ee], !1)
            },
            onDrawn: ee => {
              var ie, He;
              const ye = null === (ie = ei.current) || void 0 === ie || null === (He = ie.getDevTools()) || void 0 === He ? void 0 : He.canvas(),
                be = (ee, ie) => 0 === Object.keys(Ae.current).length && JSON.stringify(pe.getPlayerCosmetics()) === ee && ii.current.seq === ie.seq && null === ii.current.id,
                Ue = JSON.stringify(pe.getPlayerCosmetics()),
                Fe = ii.current;
              if (!Me.j || !ee || void 0 === ye || !be(Ue, Fe)) return;
              const Je = (0, Ke.d)(pe);
              (0, Ke.c)(ye, Je, (() => be(Ue, Fe))).catch((ee => {
                console.warn("[loading-character] couldn't keep your picture from Customise", ee)
              }))
            }
          })]
        })]
      })
    }))
  },
  44481: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      CharacterPreview: () => pe
    });
    var ye = He(59),
      be = He(2957),
      Me = He(1189),
      Ke = He(2683),
      Ue = He(34919),
      Fe = He(4010),
      Je = He(37049),
      oe = He(37064),
      Re = He(37081),
      ke = He(1228);

    function qe(ee) {
      let {
        nametag: ie
      } = ee;
      const He = (0, ye.useRef)(null),
        {
          height: Me
        } = (0, be.e)(He),
        [Ke, Ue] = (0, ye.useState)(!1),
        {
          name: Fe,
          ranks: qe,
          nameColour: fe
        } = ie;
      return (0, ye.useEffect)((() => {
        let ee = !0;
        return Re.j.untilLoadedFor(Fe).then((() => {
          ee && Ue(!0)
        })), () => {
          ee = !1
        }
      }), [Fe]), (0, ye.useEffect)((() => {
        if (!Ke || Me <= 0) return;
        const ee = He.current,
          ie = (0, Je.c)(ee),
          ye = () => {
            const He = (0, oe.e)({
              name: Fe,
              ranks: qe,
              colour: fe,
              player: !1
            }, ie, Re.q, {
              nameAsGiven: !0
            });
            if (null === He) return ee.width = 0, void(ee.height = 0);
            const ye = Me * devicePixelRatio / He.height;
            ee.width = Math.ceil(He.width * ye), ee.height = Math.ceil(He.height * ye), ie.scale(ye, ye), He.draw(ie)
          };
        return ye(), (0, Re.h)(ye)
      }), [Ke, Me, Fe, qe, fe]), (0, ke.jsx)("canvas", {
        ref: He,
        className: "CharacterPreviewNametag",
        role: "img",
        "aria-label": Fe,
        style: {
          visibility: Ke ? void 0 : "hidden"
        }
      })
    }
    let fe = null;
    const Te = .6 * Math.PI,
      pe = (0, ye.memo)((0, ye.forwardRef)((function(ee, ie) {
        let {
          onReady: He,
          onDrawn: Je,
          owner: oe = "other",
          framing: Re = "player",
          forcedCosmetics: pe,
          oo: Xe,
          emotePlaySeq: ze,
          turntableFromYaw: Be = null,
          nametag: Ee
        } = ee;
        const ge = (0, ye.useRef)(null),
          {
            width: Oe,
            height: de
          } = (0, be.e)(ge),
          We = (0, ye.useRef)(null),
          te = (0, ye.useRef)({}),
          Ze = (0, ye.useRef)({}),
          [we, De] = (0, ye.useState)(!1),
          Pe = (0, ye.useRef)(He);
        Pe.current = He;
        const Ae = (0, ye.useRef)(Je);
        Ae.current = Je;
        const Ye = (0, ye.useRef)(null),
          Ve = (0, ye.useRef)(!1),
          ae = (0, ye.useRef)(!1),
          ce = (0, ye.useCallback)((() => {
            const ee = We.current;
            if (!ee || !Ae.current || Ve.current || !ae.current) return;
            const ie = {};
            Ye.current = ie, queueMicrotask((() => {
              if (Ye.current !== ie) return;
              const He = Promise.all(Me.v.map((ie => ee.untilDrawn(ie)))).then((() => !0), (ee => (console.error("Failed to draw the character preview", ee), !1))),
                ye = new Promise((ee => {
                  setTimeout((() => {
                    ee(!1)
                  }), 1e4)
                }));
              Promise.race([He, ye]).then((He => {
                var ye;
                We.current !== ee || Ye.current !== ie || Ve.current || (Ve.current = !0, null === (ye = Ae.current) || void 0 === ye || ye.call(Ae, He))
              }))
            }))
          }), []);
        return (0, ye.useImperativeHandle)(ie, (() => {
          const ee = (ee, ie) => {
            var He;
            (te.current[ee] = ie, null !== pe && void 0 !== pe && pe[ee]) || (null === (He = We.current) || void 0 === He || He.setCosmetic(ee, ie), ce())
          };
          return {
            updateCosmetic: ee,
            setAllCosmetics(ie) {
              for (const ye of Me.v) {
                var He;
                ee(ye, null !== (He = ie[ye]) && void 0 !== He ? He : (0, Ke.e)(ye))
              }
            },
            isReady() {
              var ee, ie;
              return null !== (ee = null === (ie = We.current) || void 0 === ie ? void 0 : ie.isReady()) && void 0 !== ee && ee
            },
            resetCamera() {
              var ee;
              null === (ee = We.current) || void 0 === ee || ee.resetCamera()
            },
            setOrbit(ee) {
              var ie;
              null === (ie = We.current) || void 0 === ie || ie.setOrbit(ee)
            },
            turnCamera(ee) {
              var ie;
              const He = Ue.e[Re];
              null === (ie = We.current) || void 0 === ie || ie.setOrbit({
                ...He,
                yaw: He.yaw + ee
              })
            },
            async ensureReadyForCapture(ee) {
              var ie;
              await (null === (ie = We.current) || void 0 === ie ? void 0 : ie.untilDrawn(ee))
            },
            getDevTools() {
              var ee;
              return null !== (ee = We.current) && void 0 !== ee && ee.isReady() ? We.current.dev : null
            }
          }
        }), [pe, Re, ce]), (0, ye.useEffect)((() => {
          const ee = Fe.b.register(oe),
            ie = Ue.i.openCharacter(ge.current, Re);
          We.current = ie, fe = ie;
          let He = !0;
          return ie.ready.then((() => {
            He && (De(!0), Pe.current())
          })).catch((ee => {
            console.error("Failed to set up the character preview", ee)
          })), () => {
            He = !1, ee(), fe === ie && (ie.resetCamera(), fe = null), ie.close(), We.current = null
          }
        }), []), (0, ye.useEffect)((() => {
          Oe <= 0 || de <= 0 || We.current.resize(Oe, de)
        }), [Oe, de]), (0, ye.useEffect)((() => {
          if (!we) return;
          const ee = Ze.current;
          for (const ie of Me.v) {
            const He = null === pe || void 0 === pe ? void 0 : pe[ie],
              ye = ee[ie];
            He && He !== ye ? We.current.setCosmetic(ie, He) : !He && ye && te.current[ie] && We.current.setCosmetic(ie, te.current[ie])
          }
          Ze.current = {
            ...pe
          }, ae.current = !0, ce()
        }), [pe, we, ce]), (0, ye.useEffect)((() => {
          we && We.current.playEmote(null !== Xe && void 0 !== Xe ? Xe : null)
        }), [Xe, ze, we]), (0, ye.useEffect)((() => {
          if (!we || null === Be) return;
          const ee = We.current,
            {
              pitch: ie,
              radius: He
            } = Ue.e[Re];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return ee.setOrbit({
            yaw: Be + Te,
            pitch: ie,
            radius: He
          }), () => {
            fe === ee && ee.resetCamera()
          };
          const ye = performance.now();
          let be = 0;
          const Me = Ke => {
            ee.setOrbit({
              yaw: Be + (Ke - ye) / 6e3 * 2 * Math.PI,
              pitch: ie,
              radius: He
            }), be = requestAnimationFrame(Me)
          };
          return be = requestAnimationFrame(Me), () => {
            cancelAnimationFrame(be), fe === ee && ee.resetCamera()
          }
        }), [we, Be]), (0, ke.jsxs)(ke.Fragment, {
          children: [(0, ke.jsx)("div", {
            className: "CharCustomisationPreview",
            ref: ge
          }), Ee && (0, ke.jsx)(qe, {
            nametag: Ee
          })]
        })
      })))
  },
  37175: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(1983),
      be = He(1490);
    const Me = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(ee, ie) {
        ee !== this.userContext && this.sendHeld(), this.userContext = ee;
        for (const [ye, be] of ie) this.pending.set(ye, be);
        if (null !== this.timer) return;
        const He = this.lastSentAt + 1100 - Date.now();
        He <= 0 ? this.send(ee) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), He), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(ee) {
        const ie = Array.from(this.pending, (ee => {
          let [ie, He] = ee;
          return {
            te: ie,
            Ze: He
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), be.b.updateCosmetics(ee, ie).catch((ee => {
          console.error("Failed to update cosmetics", ee)
        }))
      }
    };

    function Ke(ee, ie) {
      for (const [He, ye] of ie) ee.setPlayerCosmetics(He, ye);
      if (null === ye.gameBridge.latest("connectedGame").websocketUrl) Me.save(ee, ie);
      else
        for (const [He, be] of ie) ye.gameBridge.send("updateMyCosmetic", {
          te: He,
          Ze: be
        })
    }
  },
  37049: (ee, ie, He) => {
    function ye(ee, ie, He) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(ee, ie).getContext("2d", He);
      const ye = document.createElement("canvas");
      return ye.width = ee, ye.height = ie, ye.getContext("2d", He)
    }

    function be(ee, ie) {
      return ee.getContext("2d", ie)
    }
    He.d(ie, {
      c: () => be,
      f: () => ye
    })
  },
  37090: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      f: () => Fe,
      j: () => Ue,
      n: () => Je
    });
    var ye = He(1992);
    let be = null,
      Me = 0;
    const Ke = new Set;

    function Ue() {
      return be
    }

    function Fe() {
      return Me
    }

    function Je(ee) {
      be = ee, Me++, (0, ye.d)();
      for (const ie of Ke) ie()
    }

    function oe(ee) {
      Ke.add(ee)
    }
  },
  37102: (ee, ie, He) => {
    function ye() {
      return He(37108)
    }

    function be() {
      return He(37116)
    }

    function Me(ee) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(ee)
    }
    He.d(ie, {
      b: () => Me,
      e: () => ye,
      h: () => be
    })
  },
  37108: (ee, ie, He) => {
    ee.exports = He.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37116: (ee, ie, He) => {
    ee.exports = He.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);