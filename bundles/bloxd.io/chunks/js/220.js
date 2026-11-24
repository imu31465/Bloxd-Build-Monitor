export const id = 220;
export const ids = [220, 296];
export const modules = {
  41433: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      CharacterCustomisationUI: () => zU
    });
    var WT = mT(63),
      zT = mT(3137),
      MT = mT(1225),
      gT = mT(1126),
      nT = mT.n(gT),
      HT = mT(1336),
      kT = mT(641),
      jT = mT(1288),
      lT = mT(2348),
      LT = mT(1688),
      pT = mT(2685);
    const BT = HT.t.filter((TT => !LT.f.includes(TT)));

    function ZT(TT, UT) {
      return BT.includes(TT) && "string" === typeof UT && (0, pT.h)(TT, UT)
    }

    function cT(TT) {
      const UT = {};
      for (const mT of BT) {
        const WT = TT[mT];
        void 0 !== WT && ZT(mT, WT) && (UT[mT] = WT)
      }
      return UT
    }

    function vT(TT) {
      return 0 === Object.keys(TT).length
    }

    function fT(TT, UT) {
      return Object.entries(TT).every((TT => {
        let [mT, WT] = TT;
        return UT[mT] === WT
      }))
    }
    var qT = mT(2355),
      iT = mT(3219),
      bT = mT(2089),
      OT = mT(1569),
      eT = mT(2391),
      YT = mT(25),
      JT = mT(2805),
      xT = mT(1613),
      dT = mT(1231),
      wT = mT(1976);
    class tT {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(TT) {
        null !== TT && TT !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = TT)
      }
      isFor(TT) {
        return null === this.accountId || this.accountId === TT
      }
      overlay(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return TT.map(((TT, mT) => {
          var WT, zT;
          return null !== (WT = null !== (zT = this.slots.get(mT)) && void 0 !== zT ? zT : UT.get(mT)) && void 0 !== WT ? WT : TT
        }))
      }
    }
    class aT extends JT.d {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new tT;
        super("saved outfits", (async UT => {
          const mT = TT.isFor(UT.whamm),
            WT = new Map(TT.slots),
            zT = await xT.b.getSavedOutfits(UT);
          return mT ? TT.overlay(zT, WT) : zT
        })), this.unsaved = TT, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(TT, UT) {
        var mT, WT;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(TT)) || this.unsaved.before.set(TT, null !== (mT = null === (WT = this.getState().data) || void 0 === WT ? void 0 : WT[TT]) && void 0 !== mT ? mT : {});
        this.unsaved.slots.set(TT, UT), this.update((mT => mT.map(((mT, WT) => WT === TT ? UT : mT)))), this.sending || this.sendUnsaved()
      }
      clear(TT) {
        this.save(TT, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let TT = !1;
        for (; this.unsaved.slots.size > 0;) {
          const mT = new Map(this.unsaved.slots);
          let WT = this.getState().accountId;
          try {
            const TT = await dT.userContextManager.getCurrentUserContext();
            if (WT = TT.whamm, this.unsaved.moveTo(TT.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: UT,
              data: zT
            } = this.getState();
            let MT = zT;
            UT === TT.whamm && null !== MT || (MT = this.unsaved.overlay(await xT.b.getSavedOutfits(TT)), this.refresh()), await xT.b.setSavedOutfits(TT, MT), this.unsaved.isFor(TT.whamm) && MT.forEach(((TT, UT) => {
              const WT = this.unsaved.slots.get(UT);
              void 0 === WT || WT === mT.get(UT) ? this.unsaved.before.delete(UT) : this.unsaved.before.set(UT, TT)
            }))
          } catch (UT) {
            if (console.error("Failed to save outfits", UT), this.getState().accountId === WT && [...this.unsaved.slots].every((TT => {
                let [UT, WT] = TT;
                return mT.get(UT) === WT
              }))) {
              const UT = [...mT.values()].every(vT);
              wT.i.showMessage({
                translationKey: UT ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const WT = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((TT => TT.map(((TT, UT) => {
                var mT;
                return null !== (mT = WT.get(UT)) && void 0 !== mT ? mT : TT
              })))), TT = !0
            }
          }
          for (const [TT, UT] of mT) this.unsaved.slots.get(TT) === UT && this.unsaved.slots.delete(TT)
        }
        this.sending = !1, TT && this.refresh()
      }
    }
    const yT = new aT;
    var XT = mT(366),
      IT = mT(41439),
      QT = mT(1685),
      sT = mT(2446),
      FT = mT(3130),
      PT = mT(2286),
      VT = mT(2713),
      uT = mT(1135);
    mT(34311), mT(3226);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var CT = mT(2395),
      rT = mT(1475),
      KT = mT(2493),
      ST = mT(1457),
      GT = mT(1188);

    function NT(TT) {
      let {
        wornOutfit: UT,
        onApply: mT,
        onOverwrite: zT,
        onDelete: gT
      } = TT;
      const {
        t: HT
      } = (0, jT.z)(), {
        accountId: kT,
        data: lT
      } = (0, JT.h)(yT, !1), {
        userContext: LT
      } = (0, MT.d)();
      async function pT(TT, UT) {
        const mT = await ST.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: WT,
            data: zT
          } = yT.getState();
        var MT, nT;
        !0 === mT && WT === kT && null !== zT && (fT(MT = zT[TT], nT = UT) && fT(nT, MT)) && (yT.clear(TT), gT(TT))
      }
      return (0, WT.useEffect)((() => {
        yT.ensureLoaded()
      }), []), null === lT || kT !== LT.whamm ? null : (0, GT.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, GT.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, GT.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: HT("homePage:myOutfits")
          })
        }), (0, GT.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: lT.map(((TT, WT) => {
            const MT = vT(TT);
            return (0, GT.jsxs)("div", {
              className: nT()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !MT
              }),
              children: [(0, GT.jsxs)("div", {
                ...(0, OT.R)(),
                role: MT ? "button" : "link",
                "data-pad-focusable": !0,
                className: nT()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: MT,
                  CharacterPresetCardActive: !MT && fT(TT, UT)
                }),
                onClick: () => {
                  MT ? yT.save(WT, UT) : mT(TT)
                },
                children: [MT && (0, GT.jsxs)(GT.Fragment, {
                  children: [(0, GT.jsx)(uT.c, {
                    name: "plus"
                  }), HT("homePage:saveOutfit")]
                }), !MT && (0, GT.jsxs)(GT.Fragment, {
                  children: [(0, GT.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, GT.jsx)(KT.e, {
                      cosmetics: TT
                    })
                  }), (0, GT.jsx)(OT.L, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      fT(UT, TT) || (yT.save(WT, UT), zT(WT, TT))
                    },
                    children: HT("general:save")
                  })]
                })]
              }), !MT && (0, GT.jsx)(OT.I, {
                className: "SavedOutfitDeleteButton",
                ariaLabel: HT("general:delete"),
                onClick: () => {
                  pT(WT, TT)
                },
                children: (0, GT.jsx)(uT.c, {
                  name: "trash-can"
                })
              })]
            }, WT)
          }))
        })]
      })
    }
    var ET = mT(36465),
      hT = mT(2676),
      DT = mT(2682);

    function oT(TT, UT, mT) {
      return null !== TT && !(0, hT.j)(DT.e, UT, mT, TT.collected, TT.ownedPacks)
    }

    function AT(TT) {
      let {
        locked: UT,
        children: mT
      } = TT;
      return UT ? (0, GT.jsx)(RT, {
        children: mT
      }) : mT
    }

    function RT(TT) {
      var UT;
      let {
        children: mT
      } = TT;
      const {
        t: WT
      } = (0, jT.z)(), {
        userContext: zT
      } = (0, MT.d)(), gT = null !== (UT = zT.dailyDrop) && void 0 !== UT && UT.hidden ? WT("dailyDrop:lockedFromHidden") : WT("dailyDrop:lockedFrom");
      return (0, GT.jsx)(rT.e, {
        tooltipInner: (0, GT.jsx)(GT.Fragment, {
          children: gT
        }),
        children: mT
      })
    }

    function TU(TT, UT, mT) {
      return (0, lT.m)(TT, UT).purchasable && !(0, sT.u)(TT, UT, mT)
    }

    function UU(TT, UT) {
      return Object.entries(TT).some((TT => {
        let [mT, WT] = TT;
        return TU(mT, WT, UT)
      }))
    }

    function mU(TT) {
      var UT;
      let {
        pack: mT,
        ownedPacks: WT,
        showStoreLink: zT = !1,
        children: MT
      } = TT;
      const {
        t: gT
      } = (0, jT.z)(), HT = QT.b[mT], kT = HT.purchasable && !WT.includes(mT) && QT.s.includes(mT), lT = FT.l[mT];
      return (0, GT.jsxs)("div", {
        className: nT()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: kT
        }),
        children: [lT && (0, GT.jsx)(lT, {}), (0, GT.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, GT.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (UT = HT.displayName) && void 0 !== UT ? UT : mT
          }), (kT || zT) && (0, GT.jsxs)(OT.B, {
            onClick: () => {
              kT ? (0, FT.j)(mT) : (0, eT.p)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, GT.jsx)(uT.c, {
              name: "store"
            }), " ", gT("general:viewInShop")]
          })]
        }), kT && "bee" === mT && (0, GT.jsx)(FT.e, {}), MT]
      })
    }

    function WU(TT) {
      let {
        equippedEmoteIds: UT,
        ownedPacks: mT,
        canBuy: WT,
        onUpdateLoadout: zT,
        onEmoteSelected: MT,
        onEquipPreviewSkin: gT
      } = TT;
      const {
        t: kT
      } = (0, jT.z)(), LT = new Set(UT), pT = new Map, BT = Object.keys(lT.f.emote).sort(((TT, UT) => {
        var mT, WT, zT, MT;
        return (null !== (mT = null === (WT = (0, lT.j)("emote", TT)) || void 0 === WT ? void 0 : WT.clientIdx) && void 0 !== mT ? mT : 0) - (null !== (zT = null === (MT = (0, lT.j)("emote", UT)) || void 0 === MT ? void 0 : MT.clientIdx) && void 0 !== zT ? zT : 0)
      })).filter((TT => {
        const UT = (0, lT.m)("emote", TT),
          zT = (0, sT.u)("emote", TT, mT);
        return !(UT.purchasable && !zT && !WT) && (UT.clientSelectable || zT)
      }));
      for (const nT of BT) {
        const TT = (0, lT.j)("emote", nT).cosmeticPack;
        pT.has(TT) || pT.set(TT, []), pT.get(TT).push(nT)
      }
      const ZT = Array.from(pT.keys());
      return (0, GT.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, GT.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, GT.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: kT("emotes:equippedCount", {
              count: UT.length,
              max: HT.j
            })
          }), (0, GT.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: kT("emotes:loadoutHint")
          })]
        }), ZT.map((TT => {
          const WT = pT.get(TT);
          return (0, GT.jsx)(mU, {
            pack: TT,
            ownedPacks: mT,
            children: (0, GT.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: WT.map((TT => {
                var WT;
                const gT = UT.indexOf(TT),
                  jT = -1 !== gT,
                  lT = UT.length >= HT.j,
                  pT = TU("emote", TT, mT),
                  BT = pT || !jT && lT,
                  ZT = (0, qT.h)(TT);
                return (0, GT.jsxs)("div", {
                  className: nT()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: jT
                  }),
                  onClick: () => {
                    MT(TT)
                  },
                  children: [(0, GT.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, GT.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${TT}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, GT.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (WT = null === ZT || void 0 === ZT ? void 0 : ZT.displayName) && void 0 !== WT ? WT : TT
                    })]
                  }), (0, GT.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [jT && (0, GT.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: gT + 1
                    }), pT && (0, GT.jsx)(uT.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, GT.jsx)(rT.e, {
                      tooltipInner: (0, GT.jsx)(GT.Fragment, {
                        children: kT(jT ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, GT.jsx)("div", {
                        className: nT()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: BT,
                          EmoteCustomPartToggleEquipped: jT
                        }),
                        onClick: mT => {
                          mT.stopPropagation(), BT || function(TT) {
                            LT.has(TT) ? zT(UT.filter((UT => UT !== TT))) : UT.length >= HT.j || zT([...UT, TT])
                          }(TT)
                        },
                        children: (0, GT.jsx)(uT.c, {
                          name: jT ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, TT)
              }))
            })
          }, TT)
        }))]
      })
    }
    const zU = (0, WT.memo)((function(TT) {
      let {
        selectedTab: UT
      } = TT;
      const mT = "characters" === UT ? "skin" : UT,
        {
          t: gT
        } = (0, jT.z)(),
        {
          userContext: BT,
          isUserContextUpdating: ZT
        } = (0, MT.d)(),
        vT = (0, zT.d)(),
        {
          gameState: qT
        } = (0, YT.h)(["gameState"]),
        [JT, xT] = (0, WT.useState)({}),
        [dT, wT] = (0, WT.useState)({}),
        [tT, aT] = (0, WT.useState)(null),
        {
          previewEmote: FT,
          triggerEmote: rT
        } = (0, iT.c)(),
        KT = (0, WT.useRef)(HT.t.reduce(((TT, UT) => (TT[UT] = (0, pT.e)(UT), TT)), {})),
        ST = (0, WT.useRef)(!1),
        hT = (0, WT.useRef)(null),
        DT = (0, WT.useRef)(null),
        RT = (0, WT.useRef)(null);

      function zU() {
        null !== DT.current && (clearTimeout(DT.current), DT.current = null);
        const TT = RT.current;
        null !== TT && (RT.current = null, (0, ET.b)(BT, [
          ["emote", TT]
        ]))
      }

      function MU(TT, UT, mT) {
        var WT, zT, MT;
        KT.current = {
          ...KT.current,
          [TT]: UT
        }, vT(), mT && ((0, ET.b)(BT, [
          [TT, UT]
        ]), aT(null));
        const gT = (0, lT.j)(TT, UT);
        if (null !== gT && void 0 !== gT && gT.colourGroup && null !== (WT = QT.b[gT.cosmeticPack].colourGroups) && void 0 !== WT && null !== (zT = WT[gT.colourGroup]) && void 0 !== zT && zT.showSwatchSelector) {
          const mT = (0, lT.i)(UT);
          mT && wT((UT => ({
            ...UT,
            [`${gT.cosmeticPack}_${TT}_${gT.colourGroup}`]: parseInt(mT[1])
          })))
        }
        null !== (MT = hT.current) && void 0 !== MT && MT.isReady() && hT.current.updateCosmetic(TT, UT)
      }

      function gU(TT) {
        xT((UT => {
          const mT = {
            ...UT
          };
          return delete mT[TT], mT
        }))
      }

      function nU(TT, UT) {
        let {
          undoable: mT
        } = UT;
        Object.keys(JT).length > 0 && xT({});
        const WT = Object.entries(TT).filter((TT => {
          let [UT, mT] = TT;
          return KT.current[UT] !== mT && !TU(UT, mT, HU) && !oT(kU, UT, mT)
        }));
        mT ? WT.length > 0 && aT({
          kind: "worn",
          outfit: cT(KT.current)
        }) : aT(null);
        for (const [zT, MT] of WT) MU(zT, MT, !1);
        WT.length > 0 && (0, ET.b)(BT, WT)
      }(0, bT.e)("cosmeticsUpdated", (TT => {
        let UT = !1;
        for (const {
            local: mT,
            wM: WT,
            tM: zT
          }
          of TT) {
          if (!mT) return;
          UT = !0, ST.current || MU(WT, zT, !1), vT()
        }
        UT && (ST.current = !0)
      })), (0, WT.useEffect)((() => {
        if (!ZT) {
          for (const [TT, UT] of Object.entries(BT.getPlayerCosmetics())) MU(TT, UT, !1);
          vT()
        }
      }), [ZT]), (0, WT.useEffect)((() => () => {
        zU()
      }), []);
      const HU = BT.getOwnedCosmeticPacks(),
        kU = function(TT, UT) {
          return null === TT ? null : {
            collected: new Set(TT.collected),
            ownedPacks: UT
          }
        }(BT.dailyDrop, HU),
        jU = (0, CT.usePurchasesAllowed)(),
        lU = Object.keys(lT.f[mT]).filter((TT => {
          const UT = (0, lT.m)(mT, TT),
            WT = (0, sT.u)(mT, TT, HU);
          return !(UT.purchasable && !WT && !jU) && (UT.clientSelectable || WT)
        })).sort(((TT, UT) => {
          var WT, zT, MT, gT;
          return (null !== (WT = null === (zT = (0, lT.j)(mT, TT)) || void 0 === zT ? void 0 : zT.clientIdx) && void 0 !== WT ? WT : 0) - (null !== (MT = null === (gT = (0, lT.j)(mT, UT)) || void 0 === gT ? void 0 : gT.clientIdx) && void 0 !== MT ? MT : 0)
        })),
        LU = new Map;
      for (const WT of lU) {
        var pU;
        const TT = null === (pU = (0, lT.j)(mT, WT)) || void 0 === pU ? void 0 : pU.cosmeticPack;
        LU.has(TT) || LU.set(TT, []), LU.get(TT).push(WT)
      }
      const BU = function(TT, UT) {
          const mT = new Set,
            WT = new Set;
          for (const [zT, MT] of Object.entries(lT.f[TT])) {
            if (void 0 === MT.colourGroup) continue;
            const gT = `${MT.cosmeticPack}_${MT.colourGroup}`;
            (TU(TT, zT, UT) ? WT : mT).add(gT)
          }
          return new Set([...mT].filter((TT => WT.has(TT))))
        }(mT, HU),
        ZU = new Map;
      for (const [WT, zT] of LU) {
        const TT = [],
          UT = new Map;
        for (const WT of zT) {
          var cU, vU;
          const zT = null !== (cU = null === (vU = (0, lT.j)(mT, WT)) || void 0 === vU ? void 0 : vU.colourGroup) && void 0 !== cU ? cU : null;
          UT.has(zT) || (UT.set(zT, []), TT.push(zT)), UT.get(zT).push(WT)
        }
        const MT = TT.map((TT => {
          var zT;
          const MT = UT.get(TT),
            gT = TT ? null === (zT = QT.b[WT].colourGroups) || void 0 === zT ? void 0 : zT[TT] : void 0,
            nT = !0 === (null === gT || void 0 === gT ? void 0 : gT.showSwatchSelector) && !BU.has(`${WT}_${TT}`);
          if (nT && gT) {
            var HT;
            const UT = null !== (HT = dT[`${WT}_${mT}_${TT}`]) && void 0 !== HT ? HT : (0, QT.i)(gT.colours);
            return {
              groupName: TT,
              showSwatch: nT,
              cosmetics: MT.filter((TT => {
                const mT = (0, lT.i)(TT);
                return !mT || UT.toString() === mT[1].toString()
              }))
            }
          }
          return {
            groupName: TT,
            cosmetics: MT,
            showSwatch: nT
          }
        }));
        ZU.set(WT, MT)
      }
      const fU = Array.from(LU.keys()),
        qU = new Map;
      for (const [WT, zT] of Object.entries(LT.e)) {
        const TT = QT.b[zT.cosmeticPack],
          UT = !UU(zT.cosmetics, HU),
          mT = QT.n.some((TT => (0, QT.f)(TT) === WT));
        (TT.clientSelectable || mT || UT) && ((!TT.purchasable || UT || jU) && (qU.has(zT.cosmeticPack) || qU.set(zT.cosmeticPack, []), qU.get(zT.cosmeticPack).push([WT, zT])))
      }
      const iU = Array.from(qU.keys());
      return (0, GT.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === mT || "nameColour" === mT) && !BT.playerHasRank("super") && (0, GT.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, GT.jsx)(uT.c, {
            name: "bolt"
          }), gT("homePage:unlockWithSuperRank"), jU && (0, GT.jsx)(OT.l, {
            onClick: () => {
              (0, eT.p)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: gT("general:getItNow")
          })]
        }), (0, GT.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === UT && (0, GT.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, GT.jsx)(NT, {
              wornOutfit: cT(KT.current),
              onApply: TT => {
                nU(TT, {
                  undoable: !0
                })
              },
              onOverwrite: (TT, UT) => {
                aT({
                  kind: "slot",
                  slot: TT,
                  outfit: UT
                })
              },
              onDelete: TT => {
                aT((UT => "slot" === (null === UT || void 0 === UT ? void 0 : UT.kind) && UT.slot === TT ? null : UT))
              }
            }), iU.map((TT => {
              const UT = qU.get(TT);
              return (0, GT.jsx)(mU, {
                pack: TT,
                ownedPacks: HU,
                showStoreLink: !QT.r.includes(TT) && UT.some((TT => {
                  let [, {
                    cosmetics: UT
                  }] = TT;
                  return UU(UT, HU)
                })),
                children: (0, GT.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: UT.map((TT => {
                    let [UT, {
                      cosmetics: mT
                    }] = TT;
                    const WT = UU(mT, HU),
                      zT = !WT && function(TT, UT) {
                        return Object.entries(UT).some((UT => {
                          let [mT, WT] = UT;
                          return oT(TT, mT, WT)
                        }))
                      }(kU, mT),
                      MT = WT || zT,
                      gT = fT(mT, JT),
                      HT = !gT && fT(mT, KT.current);
                    return (0, GT.jsx)(AT, {
                      locked: zT,
                      children: (0, GT.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: nT()("CharacterPresetCard", {
                          CharacterPresetCardActive: HT,
                          CharacterPresetCardTryingOn: gT
                        }),
                        onClick: () => {
                          MT ? function(TT) {
                            fT(TT, JT) ? xT({}) : xT({
                              ...TT
                            })
                          }(mT) : nU(mT, {
                            undoable: !0
                          })
                        },
                        children: [(0, GT.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(/textures/charSkins/previews/character_${UT}_preview.png)`
                          }
                        }), MT && (0, GT.jsx)(uT.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, UT)
                  }))
                })
              }, TT)
            }))]
          }), "emote" === UT && (0, GT.jsx)(WU, {
            equippedEmoteIds: (0, pT.l)(KT.current.emote),
            ownedPacks: HU,
            canBuy: jU,
            onUpdateLoadout: TT => {
              const UT = (0, pT.n)(TT);
              var mT;
              KT.current = {
                ...KT.current,
                emote: UT
              }, BT.setPlayerCosmetics("emote", UT), vT(), mT = UT, RT.current = mT, null !== DT.current && clearTimeout(DT.current), DT.current = setTimeout(zU, 350)
            },
            onEmoteSelected: rT,
            onEquipPreviewSkin: () => {
              ! function(TT, UT) {
                for (const mT of HT.t) "cape" !== mT && "nameColour" !== mT && "emote" !== mT && TT(mT, "skin" === mT ? "skin_preview" : `${mT}_none`, !1);
                UT()
              }(MU, vT)
            }
          }), "characters" !== UT && "emote" !== UT && (0, GT.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, fU.map((TT => {
              const UT = ZU.get(TT);
              return (0, GT.jsx)(mU, {
                pack: TT,
                ownedPacks: HU,
                children: UT.map((UT => {
                  var WT;
                  let {
                    groupName: zT,
                    cosmetics: MT,
                    showSwatch: gT
                  } = UT;
                  const HT = zT ? null === (WT = QT.b[TT].colourGroups) || void 0 === WT ? void 0 : WT[zT] : void 0,
                    jT = `${TT}_${mT}_${zT}`;
                  return (0, GT.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [gT && HT && (0, GT.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...HT.colours.map(((TT, UT) => ({
                        color: TT,
                        index: UT
                      })))].sort(((TT, UT) => TT.color.order - UT.color.order)).map((UT => {
                        var WT;
                        let {
                          color: MT,
                          index: gT
                        } = UT;
                        return (0, GT.jsx)("div", {
                          className: nT()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (WT = dT[jT]) && void 0 !== WT ? WT : (0, QT.i)(HT.colours)) === gT
                          }),
                          style: {
                            backgroundColor: `rgb(${MT.rbg.join(",")})`
                          },
                          onClick: () => {
                            var UT;
                            wT((TT => ({
                              ...TT,
                              [jT]: gT
                            })));
                            const WT = JT[mT],
                              MT = WT ? (0, lT.j)(mT, WT) : null,
                              nT = (null === MT || void 0 === MT ? void 0 : MT.cosmeticPack) === TT,
                              HT = nT ? WT : KT.current[mT],
                              kT = nT ? MT : (0, lT.j)(mT, HT);
                            if ((null === kT || void 0 === kT ? void 0 : kT.cosmeticPack) !== TT) return;
                            if ((null !== (UT = null === kT || void 0 === kT ? void 0 : kT.colourGroup) && void 0 !== UT ? UT : null) !== zT) return;
                            const LT = (0, lT.i)(HT);
                            if (LT) {
                              const TT = `${mT}_${LT[0]}_${gT}`;
                              TU(mT, TT, HU) || oT(kU, mT, TT) ? xT((UT => ({
                                ...UT,
                                [mT]: TT
                              }))) : (nT && gU(mT), MU(mT, TT, !0))
                            }
                          }
                        }, MT.rbg.join())
                      }))
                    }), MT.map((TT => {
                      const UT = TT === KT.current[mT],
                        WT = JT[mT] === TT,
                        zT = TU(mT, TT, HU),
                        MT = !zT && oT(kU, mT, TT),
                        gT = zT || MT;
                      let HT = !0;
                      return gT || UT || ("cape" !== mT || (0, XT.de)(BT.getPlayerRanks(), TT)) && ("nameColour" !== mT || BT.playerHasRank("super")) || (HT = !1), (0, GT.jsx)(AT, {
                        locked: MT,
                        children: (0, GT.jsxs)("div", {
                          className: nT()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: UT && !WT,
                            TryingOnCharCustomPartWrapper: WT,
                            DisabledCharCustomPartWrapper: !HT,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === mT
                          }),
                          onClick: () => {
                            if (HT)
                              if (gT) xT((UT => {
                                if (UT[mT] === TT) {
                                  const TT = {
                                    ...UT
                                  };
                                  return delete TT[mT], TT
                                }
                                return {
                                  ...UT,
                                  [mT]: TT
                                }
                              }));
                              else {
                                var UT;
                                if (JT[mT] && gU(mT), TT === KT.current[mT]) return;
                                null !== (UT = hT.current) && void 0 !== UT && UT.isReady() && MU(mT, TT, !0)
                              }
                          },
                          children: ["profileEffect" === mT ? (0, GT.jsx)("div", {
                            className: "CharCustomPart CharCustomProfileEffect",
                            children: (0, GT.jsx)(VT.i, {
                              playerSocialPreview: (0, PT.b)(TT, {
                                name: BT.getPlayerName(),
                                cosmetics: BT.getPlayerCosmetics()
                              }),
                              showLocation: !1,
                              opensProfileCard: !1
                            })
                          }) : (0, GT.jsx)("div", {
                            className: nT()("CharCustomPart", {
                              PixelatedImage: "cape" === mT
                            }),
                            style: (0, lT.j)(mT, TT).previewTex ? {
                              backgroundImage: `url(/textures/charSkins/previews/${(0,lT.j)(mT,TT).previewTex}.png)`
                            } : {
                              backgroundColor: kT.u[TT]
                            }
                          }), gT && (0, GT.jsx)(uT.c, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, TT)
                    }))]
                  }, null !== zT && void 0 !== zT ? zT : "ungrouped")
                }))
              }, TT)
            }))]
          }), tT && (0, GT.jsxs)(OT.e, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === tT.kind ? nU(tT.outfit, {
                undoable: !1
              }) : (yT.save(tT.slot, tT.outfit), aT(null))
            },
            children: [(0, GT.jsx)(uT.c, {
              name: "rotate-left"
            }), gT("general:undo")]
          }), (0, GT.jsx)(IT.CharacterPreview, {
            ref: hT,
            forcedCosmetics: JT,
            tn: FT.id,
            emotePlaySeq: FT.seq,
            onReady: () => {
              for (const TT of HT.t) MU(TT, KT.current[TT], !1)
            }
          })]
        })]
      })
    }))
  },
  41439: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      CharacterPreview: () => lT
    });
    var WT = mT(63),
      zT = mT(2856),
      MT = mT(1336),
      gT = mT(2685),
      nT = mT(34311),
      HT = mT(3746),
      kT = mT(1188);
    const jT = .6 * Math.PI,
      lT = (0, WT.memo)((0, WT.forwardRef)((function(TT, UT) {
        let {
          onReady: mT,
          onDrawn: lT,
          owner: LT = "other",
          framing: pT = "player",
          forcedCosmetics: BT,
          tn: ZT,
          emotePlaySeq: cT,
          turntableFromYaw: vT = null
        } = TT;
        const fT = (0, WT.useRef)(null),
          {
            width: qT,
            height: iT
          } = (0, zT.b)(fT),
          bT = (0, WT.useRef)(null),
          OT = (0, WT.useRef)({}),
          eT = (0, WT.useRef)({}),
          [YT, JT] = (0, WT.useState)(!1),
          xT = (0, WT.useRef)(mT);
        xT.current = mT;
        const dT = (0, WT.useRef)(lT);
        dT.current = lT;
        const wT = (0, WT.useRef)(null),
          tT = (0, WT.useRef)(!1),
          aT = (0, WT.useRef)(!1),
          yT = (0, WT.useCallback)((() => {
            const TT = bT.current;
            if (!TT || !dT.current || tT.current || !aT.current) return;
            const UT = {};
            wT.current = UT, queueMicrotask((() => {
              if (wT.current !== UT) return;
              const mT = Promise.all(MT.t.map((UT => TT.untilDrawn(UT)))).catch((TT => {
                  console.error("Failed to draw the character preview", TT)
                })),
                WT = new Promise((TT => {
                  setTimeout(TT, 1e4)
                }));
              Promise.race([mT, WT]).then((() => {
                var mT;
                bT.current !== TT || wT.current !== UT || tT.current || (tT.current = !0, null === (mT = dT.current) || void 0 === mT || mT.call(dT))
              }))
            }))
          }), []);
        return (0, WT.useImperativeHandle)(UT, (() => {
          const TT = (TT, UT) => {
            var mT;
            (OT.current[TT] = UT, null !== BT && void 0 !== BT && BT[TT]) || (null === (mT = bT.current) || void 0 === mT || mT.setCosmetic(TT, UT), yT())
          };
          return {
            updateCosmetic: TT,
            setAllCosmetics(UT) {
              for (const WT of MT.t) {
                var mT;
                TT(WT, null !== (mT = UT[WT]) && void 0 !== mT ? mT : (0, gT.e)(WT))
              }
            },
            isReady() {
              var TT, UT;
              return null !== (TT = null === (UT = bT.current) || void 0 === UT ? void 0 : UT.isReady()) && void 0 !== TT && TT
            },
            resetCamera() {
              var TT;
              null === (TT = bT.current) || void 0 === TT || TT.resetCamera()
            },
            setOrbit(TT) {
              var UT;
              null === (UT = bT.current) || void 0 === UT || UT.setOrbit(TT)
            },
            async ensureReadyForCapture(TT) {
              var UT;
              await (null === (UT = bT.current) || void 0 === UT ? void 0 : UT.untilDrawn(TT))
            },
            getDevTools() {
              var TT;
              return null !== (TT = bT.current) && void 0 !== TT && TT.isReady() ? bT.current.dev : null
            }
          }
        }), [BT, yT]), (0, WT.useEffect)((() => {
          const TT = HT.c.register(LT),
            UT = nT.g.openCharacter(fT.current, pT);
          bT.current = UT;
          let mT = !0;
          return UT.ready.then((() => {
            mT && (JT(!0), xT.current())
          })).catch((TT => {
            console.error("Failed to set up the character preview", TT)
          })), () => {
            mT = !1, TT(), UT.resetCamera(), UT.close(), bT.current = null
          }
        }), []), (0, WT.useEffect)((() => {
          qT <= 0 || iT <= 0 || bT.current.resize(qT, iT)
        }), [qT, iT]), (0, WT.useEffect)((() => {
          if (!YT) return;
          const TT = eT.current;
          for (const UT of MT.t) {
            const mT = null === BT || void 0 === BT ? void 0 : BT[UT],
              WT = TT[UT];
            mT && mT !== WT ? bT.current.setCosmetic(UT, mT) : !mT && WT && OT.current[UT] && bT.current.setCosmetic(UT, OT.current[UT])
          }
          eT.current = {
            ...BT
          }, aT.current = !0, yT()
        }), [BT, YT, yT]), (0, WT.useEffect)((() => {
          YT && bT.current.playEmote(null !== ZT && void 0 !== ZT ? ZT : null)
        }), [ZT, cT, YT]), (0, WT.useEffect)((() => {
          if (!YT || null === vT) return;
          const TT = bT.current,
            {
              pitch: UT,
              radius: mT
            } = nT.c[pT];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return TT.setOrbit({
            yaw: vT + jT,
            pitch: UT,
            radius: mT
          }), () => {
            TT.resetCamera()
          };
          const WT = performance.now();
          let zT = 0;
          const MT = gT => {
            TT.setOrbit({
              yaw: vT + (gT - WT) / 6e3 * 2 * Math.PI,
              pitch: UT,
              radius: mT
            }), zT = requestAnimationFrame(MT)
          };
          return zT = requestAnimationFrame(MT), () => {
            cancelAnimationFrame(zT), TT.resetCamera()
          }
        }), [YT, vT]), (0, kT.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: fT
        })
      })))
  },
  36465: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT
    });
    var WT = mT(2046),
      zT = mT(1613);
    const MT = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(TT, UT) {
        TT !== this.userContext && this.sendHeld(), this.userContext = TT;
        for (const [WT, zT] of UT) this.pending.set(WT, zT);
        if (null !== this.timer) return;
        const mT = this.lastSentAt + 1100 - Date.now();
        mT <= 0 ? this.send(TT) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), mT), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(TT) {
        const UT = Array.from(this.pending, (TT => {
          let [UT, mT] = TT;
          return {
            wM: UT,
            tM: mT
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), zT.b.updateCosmetics(TT, UT).catch((TT => {
          console.error("Failed to update cosmetics", TT)
        }))
      }
    };

    function gT(TT, UT) {
      for (const [mT, WT] of UT) TT.setPlayerCosmetics(mT, WT);
      if (null === WT.gameBridge.latest("connectedGame").websocketUrl) MT.save(TT, UT);
      else
        for (const [mT, zT] of UT) WT.gameBridge.send("updateMyCosmetic", {
          wM: mT,
          tM: zT
        })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);