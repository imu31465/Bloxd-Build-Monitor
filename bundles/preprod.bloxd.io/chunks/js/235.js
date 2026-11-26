export const id = 235;
export const ids = [235, 598];
export const modules = {
  43979: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      CharacterCustomisationUI: () => QX
    });
    var cU = zU(61),
      yU = zU(2818),
      QU = zU(1129),
      AU = zU(1106),
      FU = zU.n(AU),
      oU = zU(1258),
      DU = zU(1193),
      EU = zU(2334),
      YU = zU(1613),
      NU = zU(2772);
    const IU = oU.v.filter((UU => !YU.i.includes(UU)));

    function pU(UU, XU) {
      return IU.includes(UU) && "string" === typeof XU && (0, NU.h)(UU, XU)
    }

    function aU(UU) {
      const XU = {};
      for (const zU of IU) {
        const cU = UU[zU];
        void 0 !== cU && pU(zU, cU) && (XU[zU] = cU)
      }
      return XU
    }

    function tU(UU) {
      return 0 === Object.keys(UU).length
    }

    function gU(UU, XU) {
      return Object.entries(UU).every((UU => {
        let [zU, cU] = UU;
        return XU[zU] === cU
      }))
    }
    var kU = zU(2338),
      GU = zU(3443),
      BU = zU(2047),
      ZU = zU(1494),
      RU = zU(2381),
      PU = zU(27),
      WU = zU(2923),
      dU = zU(1545),
      LU = zU(1131),
      eU = zU(1936);
    class CU {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(UU) {
        null !== UU && UU !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = UU)
      }
      isFor(UU) {
        return null === this.accountId || this.accountId === UU
      }
      overlay(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return UU.map(((UU, zU) => {
          var cU, yU;
          return null !== (cU = null !== (yU = this.slots.get(zU)) && void 0 !== yU ? yU : XU.get(zU)) && void 0 !== cU ? cU : UU
        }))
      }
    }
    class wU extends WU.e {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new CU;
        super("saved outfits", (async XU => {
          const zU = UU.isFor(XU.whamm),
            cU = new Map(UU.slots),
            yU = await dU.c.getSavedOutfits(XU);
          return zU ? UU.overlay(yU, cU) : yU
        })), this.unsaved = UU, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(UU, XU) {
        var zU, cU;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(UU)) || this.unsaved.before.set(UU, null !== (zU = null === (cU = this.getState().data) || void 0 === cU ? void 0 : cU[UU]) && void 0 !== zU ? zU : {});
        this.unsaved.slots.set(UU, XU), this.update((zU => zU.map(((zU, cU) => cU === UU ? XU : zU)))), this.sending || this.sendUnsaved()
      }
      clear(UU) {
        this.save(UU, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let UU = !1;
        for (; this.unsaved.slots.size > 0;) {
          const zU = new Map(this.unsaved.slots);
          let cU = this.getState().accountId;
          try {
            const UU = await LU.userContextManager.getCurrentUserContext();
            if (cU = UU.whamm, this.unsaved.moveTo(UU.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: XU,
              data: yU
            } = this.getState();
            let QU = yU;
            XU === UU.whamm && null !== QU || (QU = this.unsaved.overlay(await dU.c.getSavedOutfits(UU)), this.refresh()), await dU.c.setSavedOutfits(UU, QU), this.unsaved.isFor(UU.whamm) && QU.forEach(((UU, XU) => {
              const cU = this.unsaved.slots.get(XU);
              void 0 === cU || cU === zU.get(XU) ? this.unsaved.before.delete(XU) : this.unsaved.before.set(XU, UU)
            }))
          } catch (XU) {
            if (console.error("Failed to save outfits", XU), this.getState().accountId === cU && [...this.unsaved.slots].every((UU => {
                let [XU, cU] = UU;
                return zU.get(XU) === cU
              }))) {
              const XU = [...zU.values()].every(tU);
              eU.f.showMessage({
                translationKey: XU ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const cU = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((UU => UU.map(((UU, XU) => {
                var zU;
                return null !== (zU = cU.get(XU)) && void 0 !== zU ? zU : UU
              })))), UU = !0
            }
          }
          for (const [UU, XU] of zU) this.unsaved.slots.get(UU) === XU && this.unsaved.slots.delete(UU)
        }
        this.sending = !1, UU && this.refresh()
      }
    }
    const qU = new wU;
    var OU = zU(344),
      SU = zU(43986),
      rU = zU(1605),
      uU = zU(2443),
      fU = zU(3329),
      iU = zU(3438),
      HU = zU(2401),
      MU = zU(1390);
    zU(34900), zU(3452);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var vU = zU(2387),
      VU = zU(3464),
      sU = zU(3473),
      nU = zU(1420),
      mU = zU(2500),
      lU = zU(1410),
      xU = zU(1305);

    function JU(UU) {
      let {
        wornOutfit: XU,
        onApply: zU,
        onOverwrite: yU,
        onDelete: AU
      } = UU;
      const {
        t: oU
      } = (0, DU.I)(), {
        accountId: EU,
        data: YU
      } = (0, WU.k)(qU, !1), {
        userContext: NU
      } = (0, QU.d)();
      async function IU(UU, XU) {
        const zU = await lU.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: cU,
            data: yU
          } = qU.getState();
        var QU, FU;
        !0 === zU && cU === EU && null !== yU && (gU(QU = yU[UU], FU = XU) && gU(FU, QU)) && (qU.clear(UU), AU(UU))
      }
      return (0, cU.useEffect)((() => {
        qU.ensureLoaded()
      }), []), null === YU || EU !== NU.whamm ? null : (0, xU.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, xU.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, xU.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: oU("homePage:myOutfits")
          })
        }), (0, xU.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: YU.map(((UU, cU) => {
            const QU = tU(UU);
            return (0, xU.jsxs)("div", {
              className: FU()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !QU
              }),
              children: [(0, xU.jsxs)("div", {
                ...(0, ZU.W)(),
                role: QU ? "button" : "link",
                "data-pad-focusable": !0,
                className: FU()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: QU,
                  CharacterPresetCardActive: !QU && gU(UU, XU)
                }),
                onClick: () => {
                  QU ? qU.save(cU, XU) : zU(UU)
                },
                children: [QU && (0, xU.jsxs)(xU.Fragment, {
                  children: [(0, xU.jsx)(MU.d, {
                    name: "plus"
                  }), oU("homePage:saveOutfit")]
                }), !QU && (0, xU.jsxs)(xU.Fragment, {
                  children: [(0, xU.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, xU.jsx)(mU.b, {
                      cosmetics: UU
                    })
                  }), (0, xU.jsx)(ZU.O, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      gU(XU, UU) || (qU.save(cU, XU), yU(cU, UU))
                    },
                    children: oU("general:save")
                  })]
                })]
              }), !QU && (0, xU.jsx)("button", {
                type: "button",
                className: "SavedOutfitDeleteButton",
                "data-pad-destructive": !0,
                "aria-label": oU("general:delete"),
                title: oU("general:delete"),
                onClick: () => {
                  IU(cU, UU)
                },
                children: (0, xU.jsx)(MU.d, {
                  name: "trash-can"
                })
              })]
            }, cU)
          }))
        })]
      })
    }
    var jU = zU(37090),
      KU = zU(2756),
      bU = zU(2763);

    function TU(UU, XU, zU) {
      return null !== UU && !(0, KU.i)(bU.d, XU, zU, UU.collected, UU.ownedPacks)
    }

    function hU(UU) {
      let {
        locked: XU,
        children: zU
      } = UU;
      return XU ? (0, xU.jsx)(UX, {
        children: zU
      }) : zU
    }

    function UX(UU) {
      var XU;
      let {
        children: zU
      } = UU;
      const {
        t: cU
      } = (0, DU.I)(), {
        userContext: yU
      } = (0, QU.d)(), AU = null !== (XU = yU.dailyDrop) && void 0 !== XU && XU.hidden ? cU("dailyDrop:lockedFromHidden") : cU("dailyDrop:lockedFrom");
      return (0, xU.jsx)(nU.d, {
        tooltipInner: (0, xU.jsx)(xU.Fragment, {
          children: AU
        }),
        children: zU
      })
    }

    function XX(UU, XU, zU) {
      return (0, EU.i)(UU, XU).purchasable && !(0, uU.B)(UU, XU, zU)
    }

    function zX(UU, XU) {
      return Object.entries(UU).some((UU => {
        let [zU, cU] = UU;
        return XX(zU, cU, XU)
      }))
    }

    function cX(UU) {
      var XU;
      let {
        pack: zU,
        ownedPacks: cU,
        showStoreLink: yU = !1,
        children: QU
      } = UU;
      const {
        t: AU
      } = (0, DU.I)(), oU = rU.c[zU], EU = oU.purchasable && !cU.includes(zU) && rU.q.includes(zU), YU = fU.p[zU];
      return (0, xU.jsxs)("div", {
        className: FU()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: EU
        }),
        children: [YU && (0, xU.jsx)(YU, {}), (0, xU.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, xU.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (XU = oU.displayName) && void 0 !== XU ? XU : zU
          }), (EU || yU) && (0, xU.jsxs)(ZU.y, {
            onClick: () => {
              EU ? (0, fU.l)(zU) : (0, RU.l)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, xU.jsx)(MU.d, {
              name: "store"
            }), " ", AU("general:viewInShop")]
          })]
        }), EU && "bee" === zU && (0, xU.jsx)(fU.e, {}), QU]
      })
    }

    function yX(UU) {
      let {
        equippedEmoteIds: XU,
        ownedPacks: zU,
        canBuy: cU,
        onUpdateLoadout: yU,
        onEmoteSelected: QU,
        onEquipPreviewSkin: AU
      } = UU;
      const {
        t: YU
      } = (0, DU.I)(), NU = new Set(XU), IU = new Map, pU = Object.keys(EU.d.emote).sort(((UU, XU) => {
        var zU, cU, yU, QU;
        return (null !== (zU = null === (cU = (0, EU.g)("emote", UU)) || void 0 === cU ? void 0 : cU.clientIdx) && void 0 !== zU ? zU : 0) - (null !== (yU = null === (QU = (0, EU.g)("emote", XU)) || void 0 === QU ? void 0 : QU.clientIdx) && void 0 !== yU ? yU : 0)
      })).filter((UU => {
        const XU = (0, EU.i)("emote", UU),
          yU = (0, uU.B)("emote", UU, zU);
        return !(XU.purchasable && !yU && !cU) && (XU.clientSelectable || yU)
      }));
      for (const FU of pU) {
        const UU = (0, EU.g)("emote", FU).cosmeticPack;
        IU.has(UU) || IU.set(UU, []), IU.get(UU).push(FU)
      }
      const aU = Array.from(IU.keys());
      return (0, xU.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, xU.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, xU.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: YU("emotes:equippedCount", {
              count: XU.length,
              max: oU.k
            })
          }), (0, xU.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: YU("emotes:loadoutHint")
          })]
        }), aU.map((UU => {
          const cU = IU.get(UU);
          return (0, xU.jsx)(cX, {
            pack: UU,
            ownedPacks: zU,
            children: (0, xU.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: cU.map((UU => {
                var cU;
                const AU = XU.indexOf(UU),
                  DU = -1 !== AU,
                  EU = XU.length >= oU.k,
                  IU = XX("emote", UU, zU),
                  pU = IU || !DU && EU,
                  aU = (0, kU.g)(UU);
                return (0, xU.jsxs)("div", {
                  className: FU()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: DU
                  }),
                  onClick: () => {
                    QU(UU)
                  },
                  children: [(0, xU.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, xU.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(${(0,VU.h)("emote",UU)})`
                      },
                      "aria-hidden": !0
                    }), (0, xU.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (cU = null === aU || void 0 === aU ? void 0 : aU.displayName) && void 0 !== cU ? cU : UU
                    })]
                  }), (0, xU.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [DU && (0, xU.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: AU + 1
                    }), IU && (0, xU.jsx)(MU.d, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, xU.jsx)(nU.d, {
                      tooltipInner: (0, xU.jsx)(xU.Fragment, {
                        children: YU(DU ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, xU.jsx)("div", {
                        className: FU()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: pU,
                          EmoteCustomPartToggleEquipped: DU
                        }),
                        onClick: zU => {
                          zU.stopPropagation(), pU || function(UU) {
                            NU.has(UU) ? yU(XU.filter((XU => XU !== UU))) : XU.length >= oU.k || yU([...XU, UU])
                          }(UU)
                        },
                        children: (0, xU.jsx)(MU.d, {
                          name: DU ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, UU)
              }))
            })
          }, UU)
        }))]
      })
    }
    const QX = (0, cU.memo)((function(UU) {
      let {
        selectedTab: XU
      } = UU;
      const zU = "characters" === XU ? "skin" : XU,
        {
          t: AU
        } = (0, DU.I)(),
        {
          userContext: IU,
          isUserContextUpdating: pU
        } = (0, QU.d)(),
        tU = (0, yU.c)(),
        {
          gameState: kU
        } = (0, PU.q)(["gameState"]),
        [WU, dU] = (0, cU.useState)({}),
        [LU, eU] = (0, cU.useState)({}),
        [CU, wU] = (0, cU.useState)(null),
        {
          previewEmote: fU,
          triggerEmote: VU
        } = (0, GU.d)(),
        nU = (0, cU.useRef)(oU.v.reduce(((UU, XU) => (UU[XU] = (0, NU.d)(XU), UU)), {})),
        mU = (0, cU.useRef)(!1),
        lU = (0, cU.useRef)(null),
        KU = (0, cU.useRef)(null),
        bU = (0, cU.useRef)(null);

      function UX() {
        null !== KU.current && (clearTimeout(KU.current), KU.current = null);
        const UU = bU.current;
        null !== UU && (bU.current = null, (0, jU.e)(IU, [
          ["emote", UU]
        ]))
      }

      function QX(UU, XU, zU) {
        var cU, yU, QU;
        nU.current = {
          ...nU.current,
          [UU]: XU
        }, tU(), zU && ((0, jU.e)(IU, [
          [UU, XU]
        ]), wU(null));
        const AU = (0, EU.g)(UU, XU);
        if (null !== AU && void 0 !== AU && AU.colourGroup && null !== (cU = rU.c[AU.cosmeticPack].colourGroups) && void 0 !== cU && null !== (yU = cU[AU.colourGroup]) && void 0 !== yU && yU.showSwatchSelector) {
          const zU = (0, EU.f)(XU);
          zU && eU((XU => ({
            ...XU,
            [`${AU.cosmeticPack}_${UU}_${AU.colourGroup}`]: parseInt(zU[1])
          })))
        }
        null !== (QU = lU.current) && void 0 !== QU && QU.isReady() && lU.current.updateCosmetic(UU, XU)
      }

      function AX(UU) {
        dU((XU => {
          const zU = {
            ...XU
          };
          return delete zU[UU], zU
        }))
      }

      function FX(UU, XU) {
        let {
          undoable: zU
        } = XU;
        Object.keys(WU).length > 0 && dU({});
        const cU = Object.entries(UU).filter((UU => {
          let [XU, zU] = UU;
          return nU.current[XU] !== zU && !XX(XU, zU, oX) && !TU(DX, XU, zU)
        }));
        zU ? cU.length > 0 && wU({
          kind: "worn",
          outfit: aU(nU.current)
        }) : wU(null);
        for (const [yU, QU] of cU) QX(yU, QU, !1);
        cU.length > 0 && (0, jU.e)(IU, cU)
      }(0, BU.b)("cosmeticsUpdated", (UU => {
        let XU = !1;
        for (const {
            local: zU,
            FU: cU,
            oU: yU
          }
          of UU) {
          if (!zU) return;
          XU = !0, mU.current || QX(cU, yU, !1), tU()
        }
        XU && (mU.current = !0)
      })), (0, cU.useEffect)((() => {
        if (!pU) {
          for (const [UU, XU] of Object.entries(IU.getPlayerCosmetics())) QX(UU, XU, !1);
          tU()
        }
      }), [pU]), (0, cU.useEffect)((() => () => {
        UX()
      }), []);
      const oX = IU.getOwnedCosmeticPacks(),
        DX = function(UU, XU) {
          return null === UU ? null : {
            collected: new Set(UU.collected),
            ownedPacks: XU
          }
        }(IU.dailyDrop, oX),
        EX = (0, vU.usePurchasesAllowed)(),
        YX = Object.keys(EU.d[zU]).filter((UU => {
          const XU = (0, EU.i)(zU, UU),
            cU = (0, uU.B)(zU, UU, oX);
          return !(XU.purchasable && !cU && !EX) && (XU.clientSelectable || cU)
        })).sort(((UU, XU) => {
          var cU, yU, QU, AU;
          return (null !== (cU = null === (yU = (0, EU.g)(zU, UU)) || void 0 === yU ? void 0 : yU.clientIdx) && void 0 !== cU ? cU : 0) - (null !== (QU = null === (AU = (0, EU.g)(zU, XU)) || void 0 === AU ? void 0 : AU.clientIdx) && void 0 !== QU ? QU : 0)
        })),
        NX = new Map;
      for (const cU of YX) {
        var IX;
        const UU = null === (IX = (0, EU.g)(zU, cU)) || void 0 === IX ? void 0 : IX.cosmeticPack;
        NX.has(UU) || NX.set(UU, []), NX.get(UU).push(cU)
      }
      const pX = function(UU, XU) {
          const zU = new Set,
            cU = new Set;
          for (const [yU, QU] of Object.entries(EU.d[UU])) {
            if (void 0 === QU.colourGroup) continue;
            const AU = `${QU.cosmeticPack}_${QU.colourGroup}`;
            (XX(UU, yU, XU) ? cU : zU).add(AU)
          }
          return new Set([...zU].filter((UU => cU.has(UU))))
        }(zU, oX),
        aX = new Map;
      for (const [cU, yU] of NX) {
        const UU = [],
          XU = new Map;
        for (const cU of yU) {
          var tX, gX;
          const yU = null !== (tX = null === (gX = (0, EU.g)(zU, cU)) || void 0 === gX ? void 0 : gX.colourGroup) && void 0 !== tX ? tX : null;
          XU.has(yU) || (XU.set(yU, []), UU.push(yU)), XU.get(yU).push(cU)
        }
        const QU = UU.map((UU => {
          var yU;
          const QU = XU.get(UU),
            AU = UU ? null === (yU = rU.c[cU].colourGroups) || void 0 === yU ? void 0 : yU[UU] : void 0,
            FU = !0 === (null === AU || void 0 === AU ? void 0 : AU.showSwatchSelector) && !pX.has(`${cU}_${UU}`);
          if (FU && AU) {
            var oU;
            const XU = null !== (oU = LU[`${cU}_${zU}_${UU}`]) && void 0 !== oU ? oU : (0, rU.g)(AU.colours);
            return {
              groupName: UU,
              showSwatch: FU,
              cosmetics: QU.filter((UU => {
                const zU = (0, EU.f)(UU);
                return !zU || XU.toString() === zU[1].toString()
              }))
            }
          }
          return {
            groupName: UU,
            cosmetics: QU,
            showSwatch: FU
          }
        }));
        aX.set(cU, QU)
      }
      const kX = Array.from(NX.keys()),
        GX = new Map;
      for (const [cU, yU] of Object.entries(YU.d)) {
        const UU = rU.c[yU.cosmeticPack],
          XU = (0, uU.y)(yU.cosmetics, oX),
          zU = rU.l.some((UU => (0, rU.d)(UU) === cU));
        (UU.clientSelectable || zU || XU) && ((!UU.purchasable || XU || EX) && (GX.has(yU.cosmeticPack) || GX.set(yU.cosmeticPack, []), GX.get(yU.cosmeticPack).push([cU, yU])))
      }
      const BX = Array.from(GX.keys());
      return (0, xU.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === zU || "nameColour" === zU) && !IU.playerHasRank("super") && (0, xU.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, xU.jsx)(MU.d, {
            name: "bolt"
          }), AU("homePage:unlockWithSuperRank"), EX && (0, xU.jsx)(ZU.l, {
            onClick: () => {
              (0, RU.l)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: AU("general:getItNow")
          })]
        }), (0, xU.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === XU && (0, xU.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, xU.jsx)(JU, {
              wornOutfit: aU(nU.current),
              onApply: UU => {
                FX(UU, {
                  undoable: !0
                })
              },
              onOverwrite: (UU, XU) => {
                wU({
                  kind: "slot",
                  slot: UU,
                  outfit: XU
                })
              },
              onDelete: UU => {
                wU((XU => "slot" === (null === XU || void 0 === XU ? void 0 : XU.kind) && XU.slot === UU ? null : XU))
              }
            }), BX.map((UU => {
              const XU = GX.get(UU);
              return (0, xU.jsx)(cX, {
                pack: UU,
                ownedPacks: oX,
                showStoreLink: !rU.p.includes(UU) && XU.some((UU => {
                  let [, {
                    cosmetics: XU
                  }] = UU;
                  return zX(XU, oX)
                })),
                children: (0, xU.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: XU.map((UU => {
                    let [XU, {
                      cosmetics: zU
                    }] = UU;
                    const cU = zX(zU, oX),
                      yU = !cU && function(UU, XU) {
                        return Object.entries(XU).some((XU => {
                          let [zU, cU] = XU;
                          return TU(UU, zU, cU)
                        }))
                      }(DX, zU),
                      QU = cU || yU,
                      AU = gU(zU, WU),
                      oU = !AU && gU(zU, nU.current);
                    return (0, xU.jsx)(hU, {
                      locked: yU,
                      children: (0, xU.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: FU()("CharacterPresetCard", {
                          CharacterPresetCardActive: oU,
                          CharacterPresetCardTryingOn: AU
                        }),
                        onClick: () => {
                          QU ? function(UU) {
                            gU(UU, WU) ? dU({}) : dU({
                              ...UU
                            })
                          }(zU) : FX(zU, {
                            undoable: !0
                          })
                        },
                        children: [(0, xU.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(${(0,HU.i)(XU)})`
                          }
                        }), QU && (0, xU.jsx)(MU.d, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, XU)
                  }))
                })
              }, UU)
            }))]
          }), "emote" === XU && (0, xU.jsx)(yX, {
            equippedEmoteIds: (0, NU.j)(nU.current.emote),
            ownedPacks: oX,
            canBuy: EX,
            onUpdateLoadout: UU => {
              const XU = (0, NU.m)(UU);
              var zU;
              nU.current = {
                ...nU.current,
                emote: XU
              }, IU.setPlayerCosmetics("emote", XU), tU(), zU = XU, bU.current = zU, null !== KU.current && clearTimeout(KU.current), KU.current = setTimeout(UX, 350)
            },
            onEmoteSelected: VU,
            onEquipPreviewSkin: () => {
              ! function(UU, XU) {
                for (const zU of oU.v)(0, YU.f)(zU) && UU(zU, "skin" === zU ? "skin_preview" : `${zU}_none`, !1);
                XU()
              }(QX, tU)
            }
          }), "characters" !== XU && "emote" !== XU && (0, xU.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, kX.map((UU => {
              const XU = aX.get(UU);
              return (0, xU.jsx)(cX, {
                pack: UU,
                ownedPacks: oX,
                children: XU.map((XU => {
                  var cU;
                  let {
                    groupName: yU,
                    cosmetics: QU,
                    showSwatch: AU
                  } = XU;
                  const oU = yU ? null === (cU = rU.c[UU].colourGroups) || void 0 === cU ? void 0 : cU[yU] : void 0,
                    DU = `${UU}_${zU}_${yU}`;
                  return (0, xU.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [AU && oU && (0, xU.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...oU.colours.map(((UU, XU) => ({
                        color: UU,
                        index: XU
                      })))].sort(((UU, XU) => UU.color.order - XU.color.order)).map((XU => {
                        var cU;
                        let {
                          color: QU,
                          index: AU
                        } = XU;
                        return (0, xU.jsx)("div", {
                          className: FU()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (cU = LU[DU]) && void 0 !== cU ? cU : (0, rU.g)(oU.colours)) === AU
                          }),
                          style: {
                            backgroundColor: `rgb(${QU.rbg.join(",")})`
                          },
                          onClick: () => {
                            var XU;
                            eU((UU => ({
                              ...UU,
                              [DU]: AU
                            })));
                            const cU = WU[zU],
                              QU = cU ? (0, EU.g)(zU, cU) : null,
                              FU = (null === QU || void 0 === QU ? void 0 : QU.cosmeticPack) === UU,
                              oU = FU ? cU : nU.current[zU],
                              YU = FU ? QU : (0, EU.g)(zU, oU);
                            if ((null === YU || void 0 === YU ? void 0 : YU.cosmeticPack) !== UU) return;
                            if ((null !== (XU = null === YU || void 0 === YU ? void 0 : YU.colourGroup) && void 0 !== XU ? XU : null) !== yU) return;
                            const NU = (0, EU.f)(oU);
                            if (NU) {
                              const UU = `${zU}_${NU[0]}_${AU}`;
                              XX(zU, UU, oX) || TU(DX, zU, UU) ? dU((XU => ({
                                ...XU,
                                [zU]: UU
                              }))) : (FU && AX(zU), QX(zU, UU, !0))
                            }
                          }
                        }, QU.rbg.join())
                      }))
                    }), QU.map((UU => {
                      const XU = UU === nU.current[zU],
                        cU = WU[zU] === UU,
                        yU = XX(zU, UU, oX),
                        QU = !yU && TU(DX, zU, UU),
                        AU = yU || QU;
                      let oU = !0;
                      return AU || XU || ("cape" !== zU || (0, OU.Zd)(IU.getPlayerRanks(), UU)) && ("nameColour" !== zU || IU.playerHasRank("super")) || (oU = !1), (0, xU.jsx)(hU, {
                        locked: QU,
                        children: (0, xU.jsxs)("div", {
                          className: FU()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: XU && !cU,
                            TryingOnCharCustomPartWrapper: cU,
                            DisabledCharCustomPartWrapper: !oU,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === zU
                          }),
                          onClick: () => {
                            if (oU)
                              if (AU) dU((XU => {
                                if (XU[zU] === UU) {
                                  const UU = {
                                    ...XU
                                  };
                                  return delete UU[zU], UU
                                }
                                return {
                                  ...XU,
                                  [zU]: UU
                                }
                              }));
                              else {
                                var XU;
                                if (WU[zU] && AX(zU), UU === nU.current[zU]) return;
                                null !== (XU = lU.current) && void 0 !== XU && XU.isReady() && QX(zU, UU, !0)
                              }
                          },
                          children: ["profileEffect" === zU ? (0, xU.jsx)(iU.d, {
                            profileEffect: UU,
                            name: IU.getPlayerName(),
                            cosmetics: IU.getPlayerCosmetics()
                          }) : (0, xU.jsx)(sU.b, {
                            FU: zU,
                            oU: UU
                          }), AU && (0, xU.jsx)(MU.d, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, UU)
                    }))]
                  }, null !== yU && void 0 !== yU ? yU : "ungrouped")
                }))
              }, UU)
            }))]
          }), CU && (0, xU.jsxs)(ZU.f, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === CU.kind ? FX(CU.outfit, {
                undoable: !1
              }) : (qU.save(CU.slot, CU.outfit), wU(null))
            },
            children: [(0, xU.jsx)(MU.d, {
              name: "rotate-left"
            }), AU("general:undo")]
          }), (0, xU.jsx)(SU.CharacterPreview, {
            ref: lU,
            forcedCosmetics: WU,
            GA: fU.id,
            emotePlaySeq: fU.seq,
            onReady: () => {
              for (const UU of oU.v) QX(UU, nU.current[UU], !1)
            }
          })]
        })]
      })
    }))
  },
  43986: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      CharacterPreview: () => YU
    });
    var cU = zU(61),
      yU = zU(3021),
      QU = zU(1258),
      AU = zU(2772),
      FU = zU(34900),
      oU = zU(3990),
      DU = zU(1305);
    const EU = .6 * Math.PI,
      YU = (0, cU.memo)((0, cU.forwardRef)((function(UU, XU) {
        let {
          onReady: zU,
          onDrawn: YU,
          owner: NU = "other",
          framing: IU = "player",
          forcedCosmetics: pU,
          GA: aU,
          emotePlaySeq: tU,
          turntableFromYaw: gU = null
        } = UU;
        const kU = (0, cU.useRef)(null),
          {
            width: GU,
            height: BU
          } = (0, yU.d)(kU),
          ZU = (0, cU.useRef)(null),
          RU = (0, cU.useRef)({}),
          PU = (0, cU.useRef)({}),
          [WU, dU] = (0, cU.useState)(!1),
          LU = (0, cU.useRef)(zU);
        LU.current = zU;
        const eU = (0, cU.useRef)(YU);
        eU.current = YU;
        const CU = (0, cU.useRef)(null),
          wU = (0, cU.useRef)(!1),
          qU = (0, cU.useRef)(!1),
          OU = (0, cU.useCallback)((() => {
            const UU = ZU.current;
            if (!UU || !eU.current || wU.current || !qU.current) return;
            const XU = {};
            CU.current = XU, queueMicrotask((() => {
              if (CU.current !== XU) return;
              const zU = Promise.all(QU.v.map((XU => UU.untilDrawn(XU)))).catch((UU => {
                  console.error("Failed to draw the character preview", UU)
                })),
                cU = new Promise((UU => {
                  setTimeout(UU, 1e4)
                }));
              Promise.race([zU, cU]).then((() => {
                var zU;
                ZU.current !== UU || CU.current !== XU || wU.current || (wU.current = !0, null === (zU = eU.current) || void 0 === zU || zU.call(eU))
              }))
            }))
          }), []);
        return (0, cU.useImperativeHandle)(XU, (() => {
          const UU = (UU, XU) => {
            var zU;
            (RU.current[UU] = XU, null !== pU && void 0 !== pU && pU[UU]) || (null === (zU = ZU.current) || void 0 === zU || zU.setCosmetic(UU, XU), OU())
          };
          return {
            updateCosmetic: UU,
            setAllCosmetics(XU) {
              for (const cU of QU.v) {
                var zU;
                UU(cU, null !== (zU = XU[cU]) && void 0 !== zU ? zU : (0, AU.d)(cU))
              }
            },
            isReady() {
              var UU, XU;
              return null !== (UU = null === (XU = ZU.current) || void 0 === XU ? void 0 : XU.isReady()) && void 0 !== UU && UU
            },
            resetCamera() {
              var UU;
              null === (UU = ZU.current) || void 0 === UU || UU.resetCamera()
            },
            setOrbit(UU) {
              var XU;
              null === (XU = ZU.current) || void 0 === XU || XU.setOrbit(UU)
            },
            turnCamera(UU) {
              var XU;
              const zU = FU.c[IU];
              null === (XU = ZU.current) || void 0 === XU || XU.setOrbit({
                ...zU,
                yaw: zU.yaw + UU
              })
            },
            async ensureReadyForCapture(UU) {
              var XU;
              await (null === (XU = ZU.current) || void 0 === XU ? void 0 : XU.untilDrawn(UU))
            },
            getDevTools() {
              var UU;
              return null !== (UU = ZU.current) && void 0 !== UU && UU.isReady() ? ZU.current.dev : null
            }
          }
        }), [pU, IU, OU]), (0, cU.useEffect)((() => {
          const UU = oU.c.register(NU),
            XU = FU.h.openCharacter(kU.current, IU);
          ZU.current = XU;
          let zU = !0;
          return XU.ready.then((() => {
            zU && (dU(!0), LU.current())
          })).catch((UU => {
            console.error("Failed to set up the character preview", UU)
          })), () => {
            zU = !1, UU(), XU.resetCamera(), XU.close(), ZU.current = null
          }
        }), []), (0, cU.useEffect)((() => {
          GU <= 0 || BU <= 0 || ZU.current.resize(GU, BU)
        }), [GU, BU]), (0, cU.useEffect)((() => {
          if (!WU) return;
          const UU = PU.current;
          for (const XU of QU.v) {
            const zU = null === pU || void 0 === pU ? void 0 : pU[XU],
              cU = UU[XU];
            zU && zU !== cU ? ZU.current.setCosmetic(XU, zU) : !zU && cU && RU.current[XU] && ZU.current.setCosmetic(XU, RU.current[XU])
          }
          PU.current = {
            ...pU
          }, qU.current = !0, OU()
        }), [pU, WU, OU]), (0, cU.useEffect)((() => {
          WU && ZU.current.playEmote(null !== aU && void 0 !== aU ? aU : null)
        }), [aU, tU, WU]), (0, cU.useEffect)((() => {
          if (!WU || null === gU) return;
          const UU = ZU.current,
            {
              pitch: XU,
              radius: zU
            } = FU.c[IU];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return UU.setOrbit({
            yaw: gU + EU,
            pitch: XU,
            radius: zU
          }), () => {
            UU.resetCamera()
          };
          const cU = performance.now();
          let yU = 0;
          const QU = AU => {
            UU.setOrbit({
              yaw: gU + (AU - cU) / 6e3 * 2 * Math.PI,
              pitch: XU,
              radius: zU
            }), yU = requestAnimationFrame(QU)
          };
          return yU = requestAnimationFrame(QU), () => {
            cancelAnimationFrame(yU), UU.resetCamera()
          }
        }), [WU, gU]), (0, DU.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: kU
        })
      })))
  },
  37090: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(2005),
      yU = zU(1545);
    const QU = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(UU, XU) {
        UU !== this.userContext && this.sendHeld(), this.userContext = UU;
        for (const [cU, yU] of XU) this.pending.set(cU, yU);
        if (null !== this.timer) return;
        const zU = this.lastSentAt + 1100 - Date.now();
        zU <= 0 ? this.send(UU) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), zU), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(UU) {
        const XU = Array.from(this.pending, (UU => {
          let [XU, zU] = UU;
          return {
            FU: XU,
            oU: zU
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), yU.c.updateCosmetics(UU, XU).catch((UU => {
          console.error("Failed to update cosmetics", UU)
        }))
      }
    };

    function AU(UU, XU) {
      for (const [zU, cU] of XU) UU.setPlayerCosmetics(zU, cU);
      if (null === cU.gameBridge.latest("connectedGame").websocketUrl) QU.save(UU, XU);
      else
        for (const [zU, yU] of XU) cU.gameBridge.send("updateMyCosmetic", {
          FU: zU,
          oU: yU
        })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);