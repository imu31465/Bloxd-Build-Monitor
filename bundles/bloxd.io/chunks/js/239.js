export const id = 239;
export const ids = [239, 601];
export const modules = {
  44203: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      CharacterCustomisationUI: () => Ue
    });
    var JV = xV(62),
      YV = xV(2871),
      UV = xV(1168),
      yV = xV(1146),
      pV = xV.n(yV),
      QV = xV(1269),
      nV = xV(1220),
      wV = xV(2385),
      ZV = xV(1656),
      vV = xV(2822);
    const rV = QV.w.filter((VV => !ZV.g.includes(VV)));

    function kV(VV, eV) {
      return rV.includes(VV) && "string" === typeof eV && (0, vV.c)(VV, eV)
    }

    function bV(VV) {
      const eV = {};
      for (const xV of rV) {
        const JV = VV[xV];
        void 0 !== JV && kV(xV, JV) && (eV[xV] = JV)
      }
      return eV
    }

    function EV(VV) {
      return 0 === Object.keys(VV).length
    }

    function BV(VV, eV) {
      return Object.entries(VV).every((VV => {
        let [xV, JV] = VV;
        return eV[xV] === JV
      }))
    }
    var jV = xV(2388),
      qV = xV(3496),
      tV = xV(2100),
      FV = xV(1551),
      TV = xV(2428),
      PV = xV(27),
      AV = xV(2973),
      NV = xV(1603),
      XV = xV(1173),
      MV = xV(1976);
    class zV {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(VV) {
        null !== VV && VV !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = VV)
      }
      isFor(VV) {
        return null === this.accountId || this.accountId === VV
      }
      overlay(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return VV.map(((VV, xV) => {
          var JV, YV;
          return null !== (JV = null !== (YV = this.slots.get(xV)) && void 0 !== YV ? YV : eV.get(xV)) && void 0 !== JV ? JV : VV
        }))
      }
    }
    class GV extends AV.d {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new zV;
        super("saved outfits", (async eV => {
          const xV = VV.isFor(eV.whamm),
            JV = new Map(VV.slots),
            YV = await NV.b.getSavedOutfits(eV);
          return xV ? VV.overlay(YV, JV) : YV
        })), this.unsaved = VV, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(VV, eV) {
        var xV, JV;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(VV)) || this.unsaved.before.set(VV, null !== (xV = null === (JV = this.getState().data) || void 0 === JV ? void 0 : JV[VV]) && void 0 !== xV ? xV : {});
        this.unsaved.slots.set(VV, eV), this.update((xV => xV.map(((xV, JV) => JV === VV ? eV : xV)))), this.sending || this.sendUnsaved()
      }
      clear(VV) {
        this.save(VV, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let VV = !1;
        for (; this.unsaved.slots.size > 0;) {
          const xV = new Map(this.unsaved.slots);
          let JV = this.getState().accountId;
          try {
            const VV = await XV.userContextManager.getCurrentUserContext();
            if (JV = VV.whamm, this.unsaved.moveTo(VV.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: eV,
              data: YV
            } = this.getState();
            let UV = YV;
            eV === VV.whamm && null !== UV || (UV = this.unsaved.overlay(await NV.b.getSavedOutfits(VV)), this.refresh()), await NV.b.setSavedOutfits(VV, UV), this.unsaved.isFor(VV.whamm) && UV.forEach(((VV, eV) => {
              const JV = this.unsaved.slots.get(eV);
              void 0 === JV || JV === xV.get(eV) ? this.unsaved.before.delete(eV) : this.unsaved.before.set(eV, VV)
            }))
          } catch (eV) {
            if (console.error("Failed to save outfits", eV), this.getState().accountId === JV && [...this.unsaved.slots].every((VV => {
                let [eV, JV] = VV;
                return xV.get(eV) === JV
              }))) {
              const eV = [...xV.values()].every(EV);
              MV.e.showMessage({
                translationKey: eV ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const JV = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((VV => VV.map(((VV, eV) => {
                var xV;
                return null !== (xV = JV.get(eV)) && void 0 !== xV ? xV : VV
              })))), VV = !0
            }
          }
          for (const [VV, eV] of xV) this.unsaved.slots.get(VV) === eV && this.unsaved.slots.delete(VV)
        }
        this.sending = !1, VV && this.refresh()
      }
    }
    const WV = new GV;
    var RV = xV(375),
      gV = xV(44209),
      DV = xV(1649),
      iV = xV(2473),
      CV = xV(3364),
      aV = xV(3492),
      oV = xV(2437),
      cV = xV(1414);
    xV(35337), xV(3503);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var hV = xV(2430),
      lV = xV(3515),
      LV = xV(3519),
      fV = xV(1446),
      mV = xV(2524),
      KV = xV(1439),
      HV = xV(1321);

    function uV(VV) {
      let {
        wornOutfit: eV,
        onApply: xV,
        onOverwrite: YV,
        onDelete: yV
      } = VV;
      const {
        t: QV
      } = (0, nV.A)(), {
        accountId: wV,
        data: ZV
      } = (0, AV.h)(WV, !1), {
        userContext: vV
      } = (0, UV.d)();
      async function rV(VV, eV) {
        const xV = await KV.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: JV,
            data: YV
          } = WV.getState();
        var UV, pV;
        !0 === xV && JV === wV && null !== YV && (BV(UV = YV[VV], pV = eV) && BV(pV, UV)) && (WV.clear(VV), yV(VV))
      }
      return (0, JV.useEffect)((() => {
        WV.ensureLoaded()
      }), []), null === ZV || wV !== vV.whamm ? null : (0, HV.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, HV.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, HV.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: QV("homePage:myOutfits")
          })
        }), (0, HV.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: ZV.map(((VV, JV) => {
            const UV = EV(VV);
            return (0, HV.jsxs)("div", {
              className: pV()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !UV
              }),
              children: [(0, HV.jsxs)("div", {
                ...(0, FV.V)(),
                role: UV ? "button" : "link",
                "data-pad-focusable": !0,
                className: pV()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: UV,
                  CharacterPresetCardActive: !UV && BV(VV, eV)
                }),
                onClick: () => {
                  UV ? WV.save(JV, eV) : xV(VV)
                },
                children: [UV && (0, HV.jsxs)(HV.Fragment, {
                  children: [(0, HV.jsx)(cV.b, {
                    name: "plus"
                  }), QV("homePage:saveOutfit")]
                }), !UV && (0, HV.jsxs)(HV.Fragment, {
                  children: [(0, HV.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, HV.jsx)(mV.e, {
                      cosmetics: VV
                    })
                  }), (0, HV.jsx)(FV.M, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      BV(eV, VV) || (WV.save(JV, eV), YV(JV, VV))
                    },
                    children: QV("general:save")
                  })]
                })]
              }), !UV && (0, HV.jsx)("button", {
                type: "button",
                className: "SavedOutfitDeleteButton",
                "data-pad-destructive": !0,
                "aria-label": QV("general:delete"),
                title: QV("general:delete"),
                onClick: () => {
                  rV(JV, VV)
                },
                children: (0, HV.jsx)(cV.b, {
                  name: "trash-can"
                })
              })]
            }, JV)
          }))
        })]
      })
    }
    var sV = xV(37533),
      SV = xV(2813),
      IV = xV(2816);

    function dV(VV, eV, xV) {
      return null !== VV && !(0, SV.g)(IV.c, eV, xV, VV.collected, VV.ownedPacks)
    }

    function OV(VV) {
      let {
        locked: eV,
        children: xV
      } = VV;
      return eV ? (0, HV.jsx)(Ve, {
        children: xV
      }) : xV
    }

    function Ve(VV) {
      var eV;
      let {
        children: xV
      } = VV;
      const {
        t: JV
      } = (0, nV.A)(), {
        userContext: YV
      } = (0, UV.d)(), yV = null !== (eV = YV.dailyDrop) && void 0 !== eV && eV.hidden ? JV("dailyDrop:lockedFromHidden") : JV("dailyDrop:lockedFrom");
      return (0, HV.jsx)(fV.d, {
        tooltipInner: (0, HV.jsx)(HV.Fragment, {
          children: yV
        }),
        children: xV
      })
    }

    function ee(VV, eV, xV) {
      return (0, wV.l)(VV, eV).purchasable && !(0, iV.x)(VV, eV, xV)
    }

    function xe(VV, eV) {
      return Object.entries(VV).some((VV => {
        let [xV, JV] = VV;
        return ee(xV, JV, eV)
      }))
    }

    function Je(VV) {
      var eV;
      let {
        pack: xV,
        ownedPacks: JV,
        showStoreLink: YV = !1,
        children: UV
      } = VV;
      const {
        t: yV
      } = (0, nV.A)(), QV = DV.d[xV], wV = QV.purchasable && !JV.includes(xV) && DV.w.includes(xV), ZV = CV.k[xV];
      return (0, HV.jsxs)("div", {
        className: pV()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: wV
        }),
        children: [ZV && (0, HV.jsx)(ZV, {}), (0, HV.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, HV.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (eV = QV.displayName) && void 0 !== eV ? eV : xV
          }), (wV || YV) && (0, HV.jsxs)(FV.B, {
            onClick: () => {
              wV ? (0, CV.j)(xV) : (0, TV.o)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, HV.jsx)(cV.b, {
              name: "store"
            }), " ", yV("general:viewInShop")]
          })]
        }), wV && "bee" === xV && (0, HV.jsx)(CV.c, {}), UV]
      })
    }

    function Ye(VV) {
      let {
        equippedEmoteIds: eV,
        ownedPacks: xV,
        canBuy: JV,
        onUpdateLoadout: YV,
        onEmoteSelected: UV,
        onEquipPreviewSkin: yV
      } = VV;
      const {
        t: ZV
      } = (0, nV.A)(), vV = new Set(eV), rV = new Map, kV = Object.keys(wV.e.emote).sort(((VV, eV) => {
        var xV, JV, YV, UV;
        return (null !== (xV = null === (JV = (0, wV.h)("emote", VV)) || void 0 === JV ? void 0 : JV.clientIdx) && void 0 !== xV ? xV : 0) - (null !== (YV = null === (UV = (0, wV.h)("emote", eV)) || void 0 === UV ? void 0 : UV.clientIdx) && void 0 !== YV ? YV : 0)
      })).filter((VV => {
        const eV = (0, wV.l)("emote", VV),
          YV = (0, iV.x)("emote", VV, xV);
        return !(eV.purchasable && !YV && !JV) && (eV.clientSelectable || YV)
      }));
      for (const pV of kV) {
        const VV = (0, wV.h)("emote", pV).cosmeticPack;
        rV.has(VV) || rV.set(VV, []), rV.get(VV).push(pV)
      }
      const bV = Array.from(rV.keys());
      return (0, HV.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, HV.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, HV.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: ZV("emotes:equippedCount", {
              count: eV.length,
              max: QV.k
            })
          }), (0, HV.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: ZV("emotes:loadoutHint")
          })]
        }), bV.map((VV => {
          const JV = rV.get(VV);
          return (0, HV.jsx)(Je, {
            pack: VV,
            ownedPacks: xV,
            children: (0, HV.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: JV.map((VV => {
                var JV;
                const yV = eV.indexOf(VV),
                  nV = -1 !== yV,
                  wV = eV.length >= QV.k,
                  rV = ee("emote", VV, xV),
                  kV = rV || !nV && wV,
                  bV = (0, jV.j)(VV);
                return (0, HV.jsxs)("div", {
                  className: pV()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: nV
                  }),
                  onClick: () => {
                    UV(VV)
                  },
                  children: [(0, HV.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, HV.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(${(0,lV.g)("emote",VV)})`
                      },
                      "aria-hidden": !0
                    }), (0, HV.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (JV = null === bV || void 0 === bV ? void 0 : bV.displayName) && void 0 !== JV ? JV : VV
                    })]
                  }), (0, HV.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [nV && (0, HV.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: yV + 1
                    }), rV && (0, HV.jsx)(cV.b, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, HV.jsx)(fV.d, {
                      tooltipInner: (0, HV.jsx)(HV.Fragment, {
                        children: ZV(nV ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, HV.jsx)("div", {
                        className: pV()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: kV,
                          EmoteCustomPartToggleEquipped: nV
                        }),
                        onClick: xV => {
                          xV.stopPropagation(), kV || function(VV) {
                            vV.has(VV) ? YV(eV.filter((eV => eV !== VV))) : eV.length >= QV.k || YV([...eV, VV])
                          }(VV)
                        },
                        children: (0, HV.jsx)(cV.b, {
                          name: nV ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, VV)
              }))
            })
          }, VV)
        }))]
      })
    }
    const Ue = (0, JV.memo)((function(VV) {
      let {
        selectedTab: eV
      } = VV;
      const xV = "characters" === eV ? "skin" : eV,
        {
          t: yV
        } = (0, nV.A)(),
        {
          userContext: rV,
          isUserContextUpdating: kV
        } = (0, UV.d)(),
        EV = (0, YV.c)(),
        {
          gameState: jV
        } = (0, PV.l)(["gameState"]),
        [AV, NV] = (0, JV.useState)({}),
        [XV, MV] = (0, JV.useState)({}),
        [zV, GV] = (0, JV.useState)(null),
        {
          previewEmote: CV,
          triggerEmote: lV
        } = (0, qV.d)(),
        fV = (0, JV.useRef)(QV.w.reduce(((VV, eV) => (VV[eV] = (0, vV.b)(eV), VV)), {})),
        mV = (0, JV.useRef)(!1),
        KV = (0, JV.useRef)(null),
        SV = (0, JV.useRef)(null),
        IV = (0, JV.useRef)(null);

      function Ve() {
        null !== SV.current && (clearTimeout(SV.current), SV.current = null);
        const VV = IV.current;
        null !== VV && (IV.current = null, (0, sV.c)(rV, [
          ["emote", VV]
        ]))
      }

      function Ue(VV, eV, xV) {
        var JV, YV, UV;
        fV.current = {
          ...fV.current,
          [VV]: eV
        }, EV(), xV && ((0, sV.c)(rV, [
          [VV, eV]
        ]), GV(null));
        const yV = (0, wV.h)(VV, eV);
        if (null !== yV && void 0 !== yV && yV.colourGroup && null !== (JV = DV.d[yV.cosmeticPack].colourGroups) && void 0 !== JV && null !== (YV = JV[yV.colourGroup]) && void 0 !== YV && YV.showSwatchSelector) {
          const xV = (0, wV.g)(eV);
          xV && MV((eV => ({
            ...eV,
            [`${yV.cosmeticPack}_${VV}_${yV.colourGroup}`]: parseInt(xV[1])
          })))
        }
        null !== (UV = KV.current) && void 0 !== UV && UV.isReady() && KV.current.updateCosmetic(VV, eV)
      }

      function ye(VV) {
        NV((eV => {
          const xV = {
            ...eV
          };
          return delete xV[VV], xV
        }))
      }

      function pe(VV, eV) {
        let {
          undoable: xV
        } = eV;
        Object.keys(AV).length > 0 && NV({});
        const JV = Object.entries(VV).filter((VV => {
          let [eV, xV] = VV;
          return fV.current[eV] !== xV && !ee(eV, xV, Qe) && !dV(ne, eV, xV)
        }));
        xV ? JV.length > 0 && GV({
          kind: "worn",
          outfit: bV(fV.current)
        }) : GV(null);
        for (const [YV, UV] of JV) Ue(YV, UV, !1);
        JV.length > 0 && (0, sV.c)(rV, JV)
      }(0, tV.c)("cosmeticsUpdated", (VV => {
        let eV = !1;
        for (const {
            local: xV,
            YJ: JV,
            UJ: YV
          }
          of VV) {
          if (!xV) return;
          eV = !0, mV.current || Ue(JV, YV, !1), EV()
        }
        eV && (mV.current = !0)
      })), (0, JV.useEffect)((() => {
        if (!kV) {
          for (const [VV, eV] of Object.entries(rV.getPlayerCosmetics())) Ue(VV, eV, !1);
          EV()
        }
      }), [kV]), (0, JV.useEffect)((() => () => {
        Ve()
      }), []);
      const Qe = rV.getOwnedCosmeticPacks(),
        ne = function(VV, eV) {
          return null === VV ? null : {
            collected: new Set(VV.collected),
            ownedPacks: eV
          }
        }(rV.dailyDrop, Qe),
        we = (0, hV.usePurchasesAllowed)(),
        Ze = Object.keys(wV.e[xV]).filter((VV => {
          const eV = (0, wV.l)(xV, VV),
            JV = (0, iV.x)(xV, VV, Qe);
          return !(eV.purchasable && !JV && !we) && (eV.clientSelectable || JV)
        })).sort(((VV, eV) => {
          var JV, YV, UV, yV;
          return (null !== (JV = null === (YV = (0, wV.h)(xV, VV)) || void 0 === YV ? void 0 : YV.clientIdx) && void 0 !== JV ? JV : 0) - (null !== (UV = null === (yV = (0, wV.h)(xV, eV)) || void 0 === yV ? void 0 : yV.clientIdx) && void 0 !== UV ? UV : 0)
        })),
        ve = new Map;
      for (const JV of Ze) {
        var re;
        const VV = null === (re = (0, wV.h)(xV, JV)) || void 0 === re ? void 0 : re.cosmeticPack;
        ve.has(VV) || ve.set(VV, []), ve.get(VV).push(JV)
      }
      const ke = function(VV, eV) {
          const xV = new Set,
            JV = new Set;
          for (const [YV, UV] of Object.entries(wV.e[VV])) {
            if (void 0 === UV.colourGroup) continue;
            const yV = `${UV.cosmeticPack}_${UV.colourGroup}`;
            (ee(VV, YV, eV) ? JV : xV).add(yV)
          }
          return new Set([...xV].filter((VV => JV.has(VV))))
        }(xV, Qe),
        be = new Map;
      for (const [JV, YV] of ve) {
        const VV = [],
          eV = new Map;
        for (const JV of YV) {
          var Ee, Be;
          const YV = null !== (Ee = null === (Be = (0, wV.h)(xV, JV)) || void 0 === Be ? void 0 : Be.colourGroup) && void 0 !== Ee ? Ee : null;
          eV.has(YV) || (eV.set(YV, []), VV.push(YV)), eV.get(YV).push(JV)
        }
        const UV = VV.map((VV => {
          var YV;
          const UV = eV.get(VV),
            yV = VV ? null === (YV = DV.d[JV].colourGroups) || void 0 === YV ? void 0 : YV[VV] : void 0,
            pV = !0 === (null === yV || void 0 === yV ? void 0 : yV.showSwatchSelector) && !ke.has(`${JV}_${VV}`);
          if (pV && yV) {
            var QV;
            const eV = null !== (QV = XV[`${JV}_${xV}_${VV}`]) && void 0 !== QV ? QV : (0, DV.j)(yV.colours);
            return {
              groupName: VV,
              showSwatch: pV,
              cosmetics: UV.filter((VV => {
                const xV = (0, wV.g)(VV);
                return !xV || eV.toString() === xV[1].toString()
              }))
            }
          }
          return {
            groupName: VV,
            cosmetics: UV,
            showSwatch: pV
          }
        }));
        be.set(JV, UV)
      }
      const je = Array.from(ve.keys()),
        qe = new Map;
      for (const [JV, YV] of Object.entries(ZV.c)) {
        const VV = DV.d[YV.cosmeticPack],
          eV = !xe(YV.cosmetics, Qe),
          xV = DV.o.some((VV => (0, DV.f)(VV) === JV));
        (VV.clientSelectable || xV || eV) && ((!VV.purchasable || eV || we) && (qe.has(YV.cosmeticPack) || qe.set(YV.cosmeticPack, []), qe.get(YV.cosmeticPack).push([JV, YV])))
      }
      const te = Array.from(qe.keys());
      return (0, HV.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === xV || "nameColour" === xV) && !rV.playerHasRank("super") && (0, HV.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, HV.jsx)(cV.b, {
            name: "bolt"
          }), yV("homePage:unlockWithSuperRank"), we && (0, HV.jsx)(FV.m, {
            onClick: () => {
              (0, TV.o)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: yV("general:getItNow")
          })]
        }), (0, HV.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === eV && (0, HV.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, HV.jsx)(uV, {
              wornOutfit: bV(fV.current),
              onApply: VV => {
                pe(VV, {
                  undoable: !0
                })
              },
              onOverwrite: (VV, eV) => {
                GV({
                  kind: "slot",
                  slot: VV,
                  outfit: eV
                })
              },
              onDelete: VV => {
                GV((eV => "slot" === (null === eV || void 0 === eV ? void 0 : eV.kind) && eV.slot === VV ? null : eV))
              }
            }), te.map((VV => {
              const eV = qe.get(VV);
              return (0, HV.jsx)(Je, {
                pack: VV,
                ownedPacks: Qe,
                showStoreLink: !DV.s.includes(VV) && eV.some((VV => {
                  let [, {
                    cosmetics: eV
                  }] = VV;
                  return xe(eV, Qe)
                })),
                children: (0, HV.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: eV.map((VV => {
                    let [eV, {
                      cosmetics: xV
                    }] = VV;
                    const JV = xe(xV, Qe),
                      YV = !JV && function(VV, eV) {
                        return Object.entries(eV).some((eV => {
                          let [xV, JV] = eV;
                          return dV(VV, xV, JV)
                        }))
                      }(ne, xV),
                      UV = JV || YV,
                      yV = BV(xV, AV),
                      QV = !yV && BV(xV, fV.current);
                    return (0, HV.jsx)(OV, {
                      locked: YV,
                      children: (0, HV.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: pV()("CharacterPresetCard", {
                          CharacterPresetCardActive: QV,
                          CharacterPresetCardTryingOn: yV
                        }),
                        onClick: () => {
                          UV ? function(VV) {
                            BV(VV, AV) ? NV({}) : NV({
                              ...VV
                            })
                          }(xV) : pe(xV, {
                            undoable: !0
                          })
                        },
                        children: [(0, HV.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(${(0,oV.i)(eV)})`
                          }
                        }), UV && (0, HV.jsx)(cV.b, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, eV)
                  }))
                })
              }, VV)
            }))]
          }), "emote" === eV && (0, HV.jsx)(Ye, {
            equippedEmoteIds: (0, vV.f)(fV.current.emote),
            ownedPacks: Qe,
            canBuy: we,
            onUpdateLoadout: VV => {
              const eV = (0, vV.g)(VV);
              var xV;
              fV.current = {
                ...fV.current,
                emote: eV
              }, rV.setPlayerCosmetics("emote", eV), EV(), xV = eV, IV.current = xV, null !== SV.current && clearTimeout(SV.current), SV.current = setTimeout(Ve, 350)
            },
            onEmoteSelected: lV,
            onEquipPreviewSkin: () => {
              ! function(VV, eV) {
                for (const xV of QV.w)(0, ZV.e)(xV) && VV(xV, "skin" === xV ? "skin_preview" : `${xV}_none`, !1);
                eV()
              }(Ue, EV)
            }
          }), "characters" !== eV && "emote" !== eV && (0, HV.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, je.map((VV => {
              const eV = be.get(VV);
              return (0, HV.jsx)(Je, {
                pack: VV,
                ownedPacks: Qe,
                children: eV.map((eV => {
                  var JV;
                  let {
                    groupName: YV,
                    cosmetics: UV,
                    showSwatch: yV
                  } = eV;
                  const QV = YV ? null === (JV = DV.d[VV].colourGroups) || void 0 === JV ? void 0 : JV[YV] : void 0,
                    nV = `${VV}_${xV}_${YV}`;
                  return (0, HV.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [yV && QV && (0, HV.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...QV.colours.map(((VV, eV) => ({
                        color: VV,
                        index: eV
                      })))].sort(((VV, eV) => VV.color.order - eV.color.order)).map((eV => {
                        var JV;
                        let {
                          color: UV,
                          index: yV
                        } = eV;
                        return (0, HV.jsx)("div", {
                          className: pV()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (JV = XV[nV]) && void 0 !== JV ? JV : (0, DV.j)(QV.colours)) === yV
                          }),
                          style: {
                            backgroundColor: `rgb(${UV.rbg.join(",")})`
                          },
                          onClick: () => {
                            var eV;
                            MV((VV => ({
                              ...VV,
                              [nV]: yV
                            })));
                            const JV = AV[xV],
                              UV = JV ? (0, wV.h)(xV, JV) : null,
                              pV = (null === UV || void 0 === UV ? void 0 : UV.cosmeticPack) === VV,
                              QV = pV ? JV : fV.current[xV],
                              ZV = pV ? UV : (0, wV.h)(xV, QV);
                            if ((null === ZV || void 0 === ZV ? void 0 : ZV.cosmeticPack) !== VV) return;
                            if ((null !== (eV = null === ZV || void 0 === ZV ? void 0 : ZV.colourGroup) && void 0 !== eV ? eV : null) !== YV) return;
                            const vV = (0, wV.g)(QV);
                            if (vV) {
                              const VV = `${xV}_${vV[0]}_${yV}`;
                              ee(xV, VV, Qe) || dV(ne, xV, VV) ? NV((eV => ({
                                ...eV,
                                [xV]: VV
                              }))) : (pV && ye(xV), Ue(xV, VV, !0))
                            }
                          }
                        }, UV.rbg.join())
                      }))
                    }), UV.map((VV => {
                      const eV = VV === fV.current[xV],
                        JV = AV[xV] === VV,
                        YV = ee(xV, VV, Qe),
                        UV = !YV && dV(ne, xV, VV),
                        yV = YV || UV;
                      let QV = !0;
                      return yV || eV || ("cape" !== xV || (0, RV.Fd)(rV.getPlayerRanks(), VV)) && ("nameColour" !== xV || rV.playerHasRank("super")) || (QV = !1), (0, HV.jsx)(OV, {
                        locked: UV,
                        children: (0, HV.jsxs)("div", {
                          className: pV()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: eV && !JV,
                            TryingOnCharCustomPartWrapper: JV,
                            DisabledCharCustomPartWrapper: !QV,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === xV
                          }),
                          onClick: () => {
                            if (QV)
                              if (yV) NV((eV => {
                                if (eV[xV] === VV) {
                                  const VV = {
                                    ...eV
                                  };
                                  return delete VV[xV], VV
                                }
                                return {
                                  ...eV,
                                  [xV]: VV
                                }
                              }));
                              else {
                                var eV;
                                if (AV[xV] && ye(xV), VV === fV.current[xV]) return;
                                null !== (eV = KV.current) && void 0 !== eV && eV.isReady() && Ue(xV, VV, !0)
                              }
                          },
                          children: ["profileEffect" === xV ? (0, HV.jsx)(aV.b, {
                            profileEffect: VV,
                            name: rV.getPlayerName(),
                            cosmetics: rV.getPlayerCosmetics()
                          }) : (0, HV.jsx)(LV.d, {
                            YJ: xV,
                            UJ: VV
                          }), yV && (0, HV.jsx)(cV.b, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, VV)
                    }))]
                  }, null !== YV && void 0 !== YV ? YV : "ungrouped")
                }))
              }, VV)
            }))]
          }), zV && (0, HV.jsxs)(FV.f, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === zV.kind ? pe(zV.outfit, {
                undoable: !1
              }) : (WV.save(zV.slot, zV.outfit), GV(null))
            },
            children: [(0, HV.jsx)(cV.b, {
              name: "rotate-left"
            }), yV("general:undo")]
          }), (0, HV.jsx)(gV.CharacterPreview, {
            ref: KV,
            forcedCosmetics: AV,
            Py: CV.id,
            emotePlaySeq: CV.seq,
            onReady: () => {
              for (const VV of QV.w) Ue(VV, fV.current[VV], !1)
            }
          })]
        })]
      })
    }))
  },
  44209: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      CharacterPreview: () => ZV
    });
    var JV = xV(62),
      YV = xV(3080),
      UV = xV(1269),
      yV = xV(2822),
      pV = xV(35337),
      QV = xV(4024),
      nV = xV(1321);
    const wV = .6 * Math.PI,
      ZV = (0, JV.memo)((0, JV.forwardRef)((function(VV, eV) {
        let {
          onReady: xV,
          onDrawn: ZV,
          owner: vV = "other",
          framing: rV = "player",
          forcedCosmetics: kV,
          Py: bV,
          emotePlaySeq: EV,
          turntableFromYaw: BV = null
        } = VV;
        const jV = (0, JV.useRef)(null),
          {
            width: qV,
            height: tV
          } = (0, YV.d)(jV),
          FV = (0, JV.useRef)(null),
          TV = (0, JV.useRef)({}),
          PV = (0, JV.useRef)({}),
          [AV, NV] = (0, JV.useState)(!1),
          XV = (0, JV.useRef)(xV);
        XV.current = xV;
        const MV = (0, JV.useRef)(ZV);
        MV.current = ZV;
        const zV = (0, JV.useRef)(null),
          GV = (0, JV.useRef)(!1),
          WV = (0, JV.useRef)(!1),
          RV = (0, JV.useCallback)((() => {
            const VV = FV.current;
            if (!VV || !MV.current || GV.current || !WV.current) return;
            const eV = {};
            zV.current = eV, queueMicrotask((() => {
              if (zV.current !== eV) return;
              const xV = Promise.all(UV.w.map((eV => VV.untilDrawn(eV)))).catch((VV => {
                  console.error("Failed to draw the character preview", VV)
                })),
                JV = new Promise((VV => {
                  setTimeout(VV, 1e4)
                }));
              Promise.race([xV, JV]).then((() => {
                var xV;
                FV.current !== VV || zV.current !== eV || GV.current || (GV.current = !0, null === (xV = MV.current) || void 0 === xV || xV.call(MV))
              }))
            }))
          }), []);
        return (0, JV.useImperativeHandle)(eV, (() => {
          const VV = (VV, eV) => {
            var xV;
            (TV.current[VV] = eV, null !== kV && void 0 !== kV && kV[VV]) || (null === (xV = FV.current) || void 0 === xV || xV.setCosmetic(VV, eV), RV())
          };
          return {
            updateCosmetic: VV,
            setAllCosmetics(eV) {
              for (const JV of UV.w) {
                var xV;
                VV(JV, null !== (xV = eV[JV]) && void 0 !== xV ? xV : (0, yV.b)(JV))
              }
            },
            isReady() {
              var VV, eV;
              return null !== (VV = null === (eV = FV.current) || void 0 === eV ? void 0 : eV.isReady()) && void 0 !== VV && VV
            },
            resetCamera() {
              var VV;
              null === (VV = FV.current) || void 0 === VV || VV.resetCamera()
            },
            setOrbit(VV) {
              var eV;
              null === (eV = FV.current) || void 0 === eV || eV.setOrbit(VV)
            },
            turnCamera(VV) {
              var eV;
              const xV = pV.c[rV];
              null === (eV = FV.current) || void 0 === eV || eV.setOrbit({
                ...xV,
                yaw: xV.yaw + VV
              })
            },
            async ensureReadyForCapture(VV) {
              var eV;
              await (null === (eV = FV.current) || void 0 === eV ? void 0 : eV.untilDrawn(VV))
            },
            getDevTools() {
              var VV;
              return null !== (VV = FV.current) && void 0 !== VV && VV.isReady() ? FV.current.dev : null
            }
          }
        }), [kV, rV, RV]), (0, JV.useEffect)((() => {
          const VV = QV.c.register(vV),
            eV = pV.h.openCharacter(jV.current, rV);
          FV.current = eV;
          let xV = !0;
          return eV.ready.then((() => {
            xV && (NV(!0), XV.current())
          })).catch((VV => {
            console.error("Failed to set up the character preview", VV)
          })), () => {
            xV = !1, VV(), eV.resetCamera(), eV.close(), FV.current = null
          }
        }), []), (0, JV.useEffect)((() => {
          qV <= 0 || tV <= 0 || FV.current.resize(qV, tV)
        }), [qV, tV]), (0, JV.useEffect)((() => {
          if (!AV) return;
          const VV = PV.current;
          for (const eV of UV.w) {
            const xV = null === kV || void 0 === kV ? void 0 : kV[eV],
              JV = VV[eV];
            xV && xV !== JV ? FV.current.setCosmetic(eV, xV) : !xV && JV && TV.current[eV] && FV.current.setCosmetic(eV, TV.current[eV])
          }
          PV.current = {
            ...kV
          }, WV.current = !0, RV()
        }), [kV, AV, RV]), (0, JV.useEffect)((() => {
          AV && FV.current.playEmote(null !== bV && void 0 !== bV ? bV : null)
        }), [bV, EV, AV]), (0, JV.useEffect)((() => {
          if (!AV || null === BV) return;
          const VV = FV.current,
            {
              pitch: eV,
              radius: xV
            } = pV.c[rV];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return VV.setOrbit({
            yaw: BV + wV,
            pitch: eV,
            radius: xV
          }), () => {
            VV.resetCamera()
          };
          const JV = performance.now();
          let YV = 0;
          const UV = yV => {
            VV.setOrbit({
              yaw: BV + (yV - JV) / 6e3 * 2 * Math.PI,
              pitch: eV,
              radius: xV
            }), YV = requestAnimationFrame(UV)
          };
          return YV = requestAnimationFrame(UV), () => {
            cancelAnimationFrame(YV), VV.resetCamera()
          }
        }), [AV, BV]), (0, nV.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: jV
        })
      })))
  },
  37533: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(2051),
      YV = xV(1603);
    const UV = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(VV, eV) {
        VV !== this.userContext && this.sendHeld(), this.userContext = VV;
        for (const [JV, YV] of eV) this.pending.set(JV, YV);
        if (null !== this.timer) return;
        const xV = this.lastSentAt + 1100 - Date.now();
        xV <= 0 ? this.send(VV) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), xV), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(VV) {
        const eV = Array.from(this.pending, (VV => {
          let [eV, xV] = VV;
          return {
            YJ: eV,
            UJ: xV
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), YV.b.updateCosmetics(VV, eV).catch((VV => {
          console.error("Failed to update cosmetics", VV)
        }))
      }
    };

    function yV(VV, eV) {
      for (const [xV, JV] of eV) VV.setPlayerCosmetics(xV, JV);
      if (null === JV.gameBridge.latest("connectedGame").websocketUrl) UV.save(VV, eV);
      else
        for (const [xV, YV] of eV) JV.gameBridge.send("updateMyCosmetic", {
          YJ: xV,
          UJ: YV
        })
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);