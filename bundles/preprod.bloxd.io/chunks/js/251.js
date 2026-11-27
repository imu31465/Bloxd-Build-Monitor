export const id = 251;
export const ids = [251, 610];
export const modules = {
  44895: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      CharacterCustomisationUI: () => bi
    });
    var mW = OW(62),
      EW = OW(2959),
      NW = OW(4703),
      PW = OW(4683),
      LW = OW(1107),
      cW = OW(1089),
      wW = OW.n(cW),
      tW = OW(1230),
      ZW = OW(625),
      xW = OW(614),
      lW = OW(1172),
      AW = OW(3083),
      bW = OW(1659),
      jW = OW(3540),
      UW = OW(37879),
      kW = OW(3090),
      sW = OW(4255),
      MW = OW(2075),
      KW = OW(1532),
      SW = OW(3125),
      YW = OW(3210),
      yW = OW(25),
      TW = OW(3702),
      JW = OW(1584),
      hW = OW(1111),
      HW = OW(1977);
    class nW {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(WW) {
        null !== WW && WW !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = WW)
      }
      isFor(WW) {
        return null === this.accountId || this.accountId === WW
      }
      overlay(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return WW.map(((WW, OW) => {
          var mW, EW;
          return null !== (mW = null !== (EW = this.slots.get(OW)) && void 0 !== EW ? EW : iW.get(OW)) && void 0 !== mW ? mW : WW
        }))
      }
    }
    class uW extends TW.b {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new nW;
        super("saved outfits", (async iW => {
          const OW = WW.isFor(iW.whamm),
            mW = new Map(WW.slots),
            EW = await JW.e.getSavedOutfits(iW);
          return OW ? WW.overlay(EW, mW) : EW
        })), this.unsaved = WW, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(WW, iW) {
        var OW, mW;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(WW)) || this.unsaved.before.set(WW, null !== (OW = null === (mW = this.getState().data) || void 0 === mW ? void 0 : mW[WW]) && void 0 !== OW ? OW : {});
        this.unsaved.slots.set(WW, iW), this.update((OW => OW.map(((OW, mW) => mW === WW ? iW : OW)))), this.sending || this.sendUnsaved()
      }
      clear(WW) {
        this.save(WW, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let WW = !1;
        for (; this.unsaved.slots.size > 0;) {
          const OW = new Map(this.unsaved.slots);
          let mW = this.getState().accountId;
          try {
            const WW = await hW.userContextManager.getCurrentUserContext();
            if (mW = WW.whamm, this.unsaved.moveTo(WW.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: iW,
              data: EW
            } = this.getState();
            let NW = EW;
            iW === WW.whamm && null !== NW || (NW = this.unsaved.overlay(await JW.e.getSavedOutfits(WW)), this.refresh()), await JW.e.setSavedOutfits(WW, NW), this.unsaved.isFor(WW.whamm) && NW.forEach(((WW, iW) => {
              const mW = this.unsaved.slots.get(iW);
              void 0 === mW || mW === OW.get(iW) ? this.unsaved.before.delete(iW) : this.unsaved.before.set(iW, WW)
            }))
          } catch (iW) {
            if (console.error("Failed to save outfits", iW), this.getState().accountId === mW && [...this.unsaved.slots].every((WW => {
                let [iW, mW] = WW;
                return OW.get(iW) === mW
              }))) {
              const iW = [...OW.values()].every(UW.f);
              HW.g.showMessage({
                translationKey: iW ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const mW = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((WW => WW.map(((WW, iW) => {
                var OW;
                return null !== (OW = mW.get(iW)) && void 0 !== OW ? OW : WW
              })))), WW = !0
            }
          }
          for (const [WW, iW] of OW) this.unsaved.slots.get(WW) === iW && this.unsaved.slots.delete(WW)
        }
        this.sending = !1, WW && this.refresh()
      }
    }
    const oW = new uW;
    var dW = OW(44898),
      eW = OW(1653),
      vW = OW(3184),
      gW = OW(4058),
      DW = OW(4251),
      VW = OW(3147),
      pW = OW(1391);
    OW(35264), OW(4261);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var fW = OW(3132),
      CW = OW(4266),
      XW = OW(4273),
      BW = OW(1434),
      qW = OW(3247),
      RW = OW(1422),
      GW = OW(1283);

    function IW(WW) {
      let {
        wornOutfit: iW,
        onApply: OW,
        onOverwrite: EW,
        onDelete: NW
      } = WW;
      const {
        t: PW
      } = (0, lW.B)(), {
        accountId: cW,
        data: tW
      } = (0, TW.g)(oW, !1), {
        userContext: ZW
      } = (0, LW.e)();
      async function xW(WW, iW) {
        const OW = await RW.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: mW,
            data: EW
          } = oW.getState();
        var PW, LW;
        !0 === OW && mW === cW && null !== EW && (PW = EW[WW], LW = iW, (0, UW.b)(PW, LW) && (0, UW.b)(LW, PW)) && (oW.clear(WW), NW(WW))
      }
      return (0, mW.useEffect)((() => {
        oW.ensureLoaded()
      }), []), null === tW || cW !== ZW.whamm ? null : (0, GW.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, GW.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, GW.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: PW("homePage:myOutfits")
          })
        }), (0, GW.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: tW.map(((WW, mW) => {
            const NW = (0, UW.f)(WW);
            return (0, GW.jsxs)("div", {
              className: wW()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !NW
              }),
              children: [(0, GW.jsxs)("div", {
                ...(0, KW.fb)(),
                role: NW ? "button" : "link",
                "data-pad-focusable": !0,
                className: wW()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: NW,
                  CharacterPresetCardActive: !NW && (0, UW.b)(WW, iW)
                }),
                onClick: () => {
                  NW ? oW.save(mW, iW) : OW(WW)
                },
                children: [NW && (0, GW.jsxs)(GW.Fragment, {
                  children: [(0, GW.jsx)(pW.c, {
                    name: "plus"
                  }), PW("homePage:saveOutfit")]
                }), !NW && (0, GW.jsxs)(GW.Fragment, {
                  children: [(0, GW.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, GW.jsx)(qW.e, {
                      cosmetics: WW
                    })
                  }), (0, GW.jsx)(KW.Z, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      (0, UW.b)(iW, WW) || (oW.save(mW, iW), EW(mW, WW))
                    },
                    children: PW("general:save")
                  })]
                })]
              }), !NW && (0, GW.jsx)("button", {
                type: "button",
                className: "SavedOutfitDeleteButton",
                "data-pad-destructive": !0,
                "aria-label": PW("general:delete"),
                title: PW("general:delete"),
                onClick: () => {
                  xW(mW, WW)
                },
                children: (0, GW.jsx)(pW.c, {
                  name: "trash-can"
                })
              })]
            }, mW)
          }))
        })]
      })
    }
    var aW = OW(344),
      rW = OW(1427);

    function zW() {
      (0, SW.o)({
        mode: "self",
        source: "characterCustomisation",
        openItem: "superRank"
      })
    }

    function FW(WW) {
      let {
        NE: iW,
        PE: OW,
        missingRanks: mW,
        playerRanks: EW,
        canBuy: NW,
        closePopup: PW
      } = WW;
      const {
        t: LW
      } = (0, lW.B)(), cW = (0, YW.o)(Date.now()), wW = xW.p.find((WW => EW.includes(WW.rank))), tW = LW((void 0 === wW ? cW : (0, YW.l)(wW.id)).nameKey), {
        title: AW,
        subtitle: bW,
        textOpts: jW,
        soldRankUnlocks: UW
      } = function(WW, iW, OW, mW) {
        const EW = WW.find((WW => !(0, xW.i)(xW.p, WW)));
        if (void 0 === EW) return {
          title: OW.unlockWithKey,
          soldRankUnlocks: !0
        };
        if ("youtuber" === EW) return {
          title: "homePage:youtuberCape",
          subtitle: "homePage:youtuberCapeHow",
          textOpts: {
            subtitle: {
              tierRank: mW
            }
          },
          soldRankUnlocks: !1
        };
        const NW = {
          rank: ZW.p[EW].chatTag[0].str
        };
        return {
          title: "homePage:creatorCape",
          subtitle: iW.some(ZW.v) ? "homePage:creatorCapeOtherTier" : "homePage:creatorCapeHow",
          textOpts: {
            title: NW,
            subtitle: {
              ...NW,
              tierRank: mW
            }
          },
          soldRankUnlocks: !1
        }
      }(mW, EW, cW, tW), kW = NW && UW;
      return (0, GW.jsx)(rW.i, {
        className: "RankLockedCosmeticPopup",
        title: AW,
        subtitle: bW,
        textOpts: jW,
        confirm: kW ? {
          text: "general:getItNow",
          onClick: () => {
            PW(), zW()
          }
        } : {
          text: "general:ok",
          onClick: PW
        },
        cancel: kW ? {
          text: "general:cancel",
          onClick: PW
        } : void 0,
        children: (0, GW.jsx)("div", {
          className: "RankLockedCosmeticPicture",
          children: (0, GW.jsx)(XW.e, {
            NE: iW,
            PE: OW
          })
        })
      })
    }
    var QW = OW(37541);

    function Wi(WW, iW, OW) {
      return !(0, vW.z)(WW, iW) && !(0, vW.I)(WW, iW, OW)
    }

    function ii(WW, iW) {
      return !(0, vW.H)(WW, iW)
    }

    function Oi(WW) {
      return eW.m.find((iW => (0, eW.g)(iW) === WW))
    }

    function mi(WW, iW, OW) {
      var mW;
      if (!Wi(WW, iW, OW)) return null;
      const EW = (0, AW.l)(WW, iW).cosmeticPack;
      return eW.q.includes(EW) ? EW : null !== (mW = (0, vW.g)(WW, iW).find((WW => eW.q.includes(WW)))) && void 0 !== mW ? mW : null
    }

    function Ei(WW, iW, OW) {
      const mW = function(WW, iW) {
          for (const [mW, EW] of Object.entries(bW.e)) {
            var OW;
            if (!(0, UW.b)(EW.cosmetics, WW) || !ii(EW.cosmetics, iW)) continue;
            const NW = null !== (OW = Oi(mW)) && void 0 !== OW ? OW : EW.cosmeticPack;
            if (Object.entries(EW.cosmetics).every((WW => {
                let [OW, mW] = WW;
                return !Wi(OW, mW, iW) || (0, vW.d)(NW, OW, mW)
              })) && eW.q.includes(NW)) return NW
          }
          return null
        }(iW, OW),
        EW = null === mW ? [] : [{
          kind: "characters",
          pack: mW
        }],
        NW = "characters" === WW ? tW.p : [WW, ...tW.p.filter((iW => iW !== WW))];
      for (const PW of NW) {
        const WW = iW[PW];
        if (void 0 === WW || null !== mW && (0, vW.d)(mW, PW, WW)) continue;
        const NW = mi(PW, WW, OW);
        if (null === NW) continue;
        const LW = void 0 === (0, eW.g)(NW) ? -1 : EW.findIndex((WW => WW.pack === NW)); - 1 === LW ? EW.push({
          kind: PW,
          pack: NW
        }) : EW[LW] = {
          kind: "characters",
          pack: NW
        }
      }
      return EW
    }
    var Ni = OW(2985);
    const Pi = {
      skin: "homePage:getTriedOnSkin",
      hat: "homePage:getTriedOnHat",
      head: "homePage:getTriedOnHead",
      eyebrows: "homePage:getTriedOnEyebrows",
      eyes: "homePage:getTriedOnEyes",
      back: "homePage:getTriedOnBack",
      body: "homePage:getTriedOnBody",
      legs: "homePage:getTriedOnLegs",
      shoes: "homePage:getTriedOnShoes",
      cape: "homePage:getTriedOnCape",
      nameColour: "homePage:getTriedOnNameColour",
      profileEffect: "homePage:getTriedOnProfileEffect",
      emote: "homePage:getTriedOnEmote",
      pet: "homePage:getTriedOnPet",
      aura: "homePage:getTriedOnAura"
    };

    function Li(WW) {
      let {
        gets: iW
      } = WW;
      const {
        t: OW
      } = (0, lW.B)();
      return (0, GW.jsx)("div", {
        className: "CharCustomisationGetTriedOn",
        children: iW.map((WW => {
          let {
            kind: iW,
            pack: mW
          } = WW;
          return (0, GW.jsxs)(KW.n, {
            className: "CharCustomisationGetPiece",
            onClick: () => {
              (0, gW.j)(mW, "triedOnGet")
            },
            children: [(0, GW.jsx)(pW.c, {
              name: "store"
            }), "characters" === iW ? OW("homePage:getPack", {
              name: (0, Ni.g)(mW)
            }) : OW(Pi[iW])]
          }, iW + mW)
        }))
      })
    }
    var ci = OW(3531),
      wi = OW(3538);

    function ti(WW, iW, OW) {
      return null !== WW && !(0, ci.g)(wi.b, iW, OW, WW.collected, WW.ownedPacks)
    }

    function Zi(WW) {
      let {
        locked: iW,
        children: OW
      } = WW;
      return iW ? (0, GW.jsx)(xi, {
        children: OW
      }) : OW
    }

    function xi(WW) {
      var iW;
      let {
        children: OW
      } = WW;
      const {
        t: mW
      } = (0, lW.B)(), {
        userContext: EW
      } = (0, LW.e)(), NW = null !== (iW = EW.dailyDrop) && void 0 !== iW && iW.hidden ? mW("dailyDrop:lockedFromHidden") : mW("dailyDrop:lockedFrom");
      return (0, GW.jsx)(BW.f, {
        tooltipInner: (0, GW.jsx)(GW.Fragment, {
          children: NW
        }),
        children: OW
      })
    }

    function li(WW) {
      let {
        pack: iW,
        ownedPacks: OW,
        showStoreLink: mW = !1,
        children: EW
      } = WW;
      const {
        t: NW
      } = (0, lW.B)(), PW = eW.e[iW].purchasable && !OW.includes(iW) && eW.q.includes(iW), LW = gW.m[iW];
      return (0, GW.jsxs)("div", {
        className: wW()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: PW
        }),
        children: [LW && (0, GW.jsx)(LW, {}), (0, GW.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, GW.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: (0, Ni.g)(iW)
          }), (PW || mW) && (0, GW.jsxs)(KW.F, {
            onClick: () => {
              PW ? (0, gW.j)(iW) : (0, SW.o)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, GW.jsx)(pW.c, {
              name: "store"
            }), " ", NW("general:viewInShop")]
          })]
        }), PW && "bee" === iW && (0, GW.jsx)(gW.e, {}), EW]
      })
    }

    function Ai(WW) {
      let {
        equippedEmoteIds: iW,
        ownedPacks: OW,
        canBuy: mW,
        onUpdateLoadout: EW,
        onEmoteSelected: NW,
        onEquipPreviewSkin: PW
      } = WW;
      const {
        t: LW
      } = (0, lW.B)(), cW = new Set(iW), ZW = new Map, xW = Object.keys(AW.e.emote).sort(((WW, iW) => {
        var OW, mW, EW, NW;
        return (null !== (OW = null === (mW = (0, AW.l)("emote", WW)) || void 0 === mW ? void 0 : mW.clientIdx) && void 0 !== OW ? OW : 0) - (null !== (EW = null === (NW = (0, AW.l)("emote", iW)) || void 0 === NW ? void 0 : NW.clientIdx) && void 0 !== EW ? EW : 0)
      })).filter((WW => {
        const iW = (0, AW.m)("emote", WW),
          EW = (0, vW.I)("emote", WW, OW);
        return !(iW.purchasable && !EW && !mW) && (iW.clientSelectable || EW)
      }));
      for (const wW of xW) {
        const WW = (0, AW.l)("emote", wW).cosmeticPack;
        ZW.has(WW) || ZW.set(WW, []), ZW.get(WW).push(wW)
      }
      const bW = Array.from(ZW.keys());
      return (0, GW.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, GW.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, GW.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: LW("emotes:equippedCount", {
              count: iW.length,
              max: tW.h
            })
          }), (0, GW.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: LW("emotes:loadoutHint")
          })]
        }), bW.map((WW => {
          const mW = ZW.get(WW);
          return (0, GW.jsx)(li, {
            pack: WW,
            ownedPacks: OW,
            children: (0, GW.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: mW.map((WW => {
                var mW;
                const PW = iW.indexOf(WW),
                  ZW = -1 !== PW,
                  xW = iW.length >= tW.h,
                  lW = Wi("emote", WW, OW),
                  AW = lW || !ZW && xW,
                  bW = (0, kW.j)(WW);
                return (0, GW.jsxs)("div", {
                  className: wW()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: ZW
                  }),
                  onClick: () => {
                    NW(WW)
                  },
                  children: [(0, GW.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, GW.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(${(0,CW.e)("emote",WW)})`
                      },
                      "aria-hidden": !0
                    }), (0, GW.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (mW = null === bW || void 0 === bW ? void 0 : bW.displayName) && void 0 !== mW ? mW : WW
                    })]
                  }), (0, GW.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [ZW && (0, GW.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: PW + 1
                    }), lW && (0, GW.jsx)(pW.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, GW.jsx)(BW.f, {
                      tooltipInner: (0, GW.jsx)(GW.Fragment, {
                        children: LW(ZW ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, GW.jsx)("div", {
                        className: wW()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: AW,
                          EmoteCustomPartToggleEquipped: ZW
                        }),
                        onClick: OW => {
                          OW.stopPropagation(), AW || function(WW) {
                            cW.has(WW) ? EW(iW.filter((iW => iW !== WW))) : iW.length >= tW.h || EW([...iW, WW])
                          }(WW)
                        },
                        children: (0, GW.jsx)(pW.c, {
                          name: ZW ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, WW)
              }))
            })
          }, WW)
        }))]
      })
    }
    const bi = (0, mW.memo)((function(WW) {
      var iW, OW;
      let {
        selectedTab: cW
      } = WW;
      const kW = "characters" === cW ? "skin" : cW,
        {
          t: SW
        } = (0, lW.B)(),
        {
          userContext: TW,
          isUserContextUpdating: JW
        } = (0, LW.e)(),
        hW = (0, EW.b)(),
        {
          gameState: HW
        } = (0, yW.p)(["gameState"]),
        [nW, uW] = (0, mW.useState)({}),
        gW = (0, mW.useRef)(nW);
      gW.current = nW;
      const [CW, BW] = (0, mW.useState)({}), [qW, rW] = (0, mW.useState)(null), {
        previewEmote: mi,
        triggerEmote: Ni
      } = (0, sW.b)(), Pi = (0, mW.useRef)(tW.p.reduce(((WW, iW) => (WW[iW] = (0, jW.d)(iW), WW)), {})), ci = (0, mW.useRef)(!1), wi = (0, mW.useRef)(null), xi = (0, mW.useRef)(mi);
      xi.current = mi;
      const bi = (0, mW.useRef)(null),
        ji = (0, mW.useRef)(null);

      function Ui() {
        null !== bi.current && (clearTimeout(bi.current), bi.current = null);
        const WW = ji.current;
        null !== WW && (ji.current = null, (0, QW.d)(TW, [
          ["emote", WW]
        ]))
      }

      function ki(WW, iW, OW) {
        var mW, EW, NW;
        Pi.current = {
          ...Pi.current,
          [WW]: iW
        }, hW(), OW && ((0, QW.d)(TW, [
          [WW, iW]
        ]), rW(null));
        const PW = (0, AW.l)(WW, iW);
        if (null !== PW && void 0 !== PW && PW.colourGroup && null !== (mW = eW.e[PW.cosmeticPack].colourGroups) && void 0 !== mW && null !== (EW = mW[PW.colourGroup]) && void 0 !== EW && EW.showSwatchSelector) {
          const OW = (0, AW.h)(iW);
          OW && BW((iW => ({
            ...iW,
            [`${PW.cosmeticPack}_${WW}_${PW.colourGroup}`]: parseInt(OW[1])
          })))
        }
        null !== (NW = wi.current) && void 0 !== NW && NW.isReady() && wi.current.updateCosmetic(WW, iW)
      }

      function si(WW) {
        uW((iW => {
          const OW = {
            ...iW
          };
          return delete OW[WW], OW
        }))
      }

      function Mi(WW, iW) {
        let {
          undoable: OW
        } = iW;
        Object.keys(nW).length > 0 && uW({});
        const mW = function(WW, iW, OW, mW) {
          return Object.entries(WW).filter((WW => {
            let [EW, NW] = WW;
            return iW[EW] !== NW && !Wi(EW, NW, OW) && !mW(EW, NW)
          }))
        }(WW, Pi.current, Ki, ((WW, iW) => ti(Si, WW, iW)));
        OW ? mW.length > 0 && rW({
          kind: "worn",
          outfit: (0, UW.i)(Pi.current)
        }) : rW(null);
        for (const [EW, NW] of mW) ki(EW, NW, !1);
        mW.length > 0 && (0, QW.d)(TW, mW)
      }(0, MW.c)("cosmeticsUpdated", (WW => {
        let iW = !1;
        for (const {
            local: OW,
            NE: mW,
            PE: EW
          }
          of WW) {
          if (!OW) return;
          iW = !0, ci.current || ki(mW, EW, !1), hW()
        }
        iW && (ci.current = !0)
      })), (0, mW.useEffect)((() => {
        if (!JW) {
          for (const [WW, iW] of Object.entries(TW.getPlayerCosmetics())) ki(WW, iW, !1);
          hW()
        }
      }), [JW]), (0, mW.useEffect)((() => () => {
        Ui()
      }), []);
      const Ki = TW.getOwnedCosmeticPacks(),
        Si = function(WW, iW) {
          return null === WW ? null : {
            collected: new Set(WW.collected),
            ownedPacks: iW
          }
        }(TW.dailyDrop, Ki),
        Yi = (0, fW.usePurchasesAllowed)(),
        yi = TW.getPlayerRanks(),
        Ti = TW.getPlayerName(),
        Ji = null !== (iW = null !== (OW = nW.nameColour) && void 0 !== OW ? OW : TW.getPlayerCosmetics().nameColour) && void 0 !== iW ? iW : ZW.d,
        Hi = (0, mW.useMemo)((() => ({
          name: Ti,
          ranks: yi,
          nameColour: Ji
        })), [Ti, yi, Ji]),
        ni = Object.keys(AW.e[kW]).filter((WW => {
          const iW = (0, AW.m)(kW, WW),
            OW = (0, vW.I)(kW, WW, Ki);
          return !(iW.purchasable && !OW && !Yi) && (iW.clientSelectable || OW)
        })).sort(((WW, iW) => {
          var OW, mW, EW, NW;
          return (null !== (OW = null === (mW = (0, AW.l)(kW, WW)) || void 0 === mW ? void 0 : mW.clientIdx) && void 0 !== OW ? OW : 0) - (null !== (EW = null === (NW = (0, AW.l)(kW, iW)) || void 0 === NW ? void 0 : NW.clientIdx) && void 0 !== EW ? EW : 0)
        })),
        ui = new Map;
      for (const mW of ni) {
        var oi;
        const WW = null === (oi = (0, AW.l)(kW, mW)) || void 0 === oi ? void 0 : oi.cosmeticPack;
        ui.has(WW) || ui.set(WW, []), ui.get(WW).push(mW)
      }
      const di = function(WW, iW) {
          const OW = new Set,
            mW = new Set;
          for (const [EW, NW] of Object.entries(AW.e[WW])) {
            if (void 0 === NW.colourGroup) continue;
            const PW = `${NW.cosmeticPack}_${NW.colourGroup}`;
            (Wi(WW, EW, iW) ? mW : OW).add(PW)
          }
          return new Set([...OW].filter((WW => mW.has(WW))))
        }(kW, Ki),
        ei = new Map;
      for (const [mW, EW] of ui) {
        const WW = [],
          iW = new Map;
        for (const mW of EW) {
          var vi, gi;
          const OW = null !== (vi = null === (gi = (0, AW.l)(kW, mW)) || void 0 === gi ? void 0 : gi.colourGroup) && void 0 !== vi ? vi : null;
          iW.has(OW) || (iW.set(OW, []), WW.push(OW)), iW.get(OW).push(mW)
        }
        const OW = WW.map((WW => {
          var OW;
          const EW = iW.get(WW),
            NW = WW ? null === (OW = eW.e[mW].colourGroups) || void 0 === OW ? void 0 : OW[WW] : void 0,
            PW = !0 === (null === NW || void 0 === NW ? void 0 : NW.showSwatchSelector) && !di.has(`${mW}_${WW}`);
          if (PW && NW) {
            var LW;
            const iW = null !== (LW = CW[`${mW}_${kW}_${WW}`]) && void 0 !== LW ? LW : (0, eW.i)(NW.colours);
            return {
              groupName: WW,
              showSwatch: PW,
              cosmetics: EW.filter((WW => {
                const OW = (0, AW.h)(WW);
                return !OW || iW.toString() === OW[1].toString()
              }))
            }
          }
          return {
            groupName: WW,
            cosmetics: EW,
            showSwatch: PW
          }
        }));
        ei.set(mW, OW)
      }
      const Di = Array.from(ui.keys()),
        Vi = new Map;
      for (const [mW, EW] of Object.entries(bW.e)) {
        const WW = eW.e[EW.cosmeticPack],
          iW = (0, vW.H)(EW.cosmetics, Ki),
          OW = void 0 !== Oi(mW);
        (WW.clientSelectable || OW || iW) && ((!WW.purchasable || iW || Yi) && (Vi.has(EW.cosmeticPack) || Vi.set(EW.cosmeticPack, []), Vi.get(EW.cosmeticPack).push([mW, EW])))
      }
      const fi = Array.from(Vi.keys()),
        Ci = Yi ? Ei(cW, nW, Ki) : [],
        [Xi, Bi] = (0, mW.useState)(!1);
      return !Xi && (Ci.length > 0 || null !== qW) && Bi(!0), (0, GW.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === kW || "nameColour" === kW) && !(0, xW.e)(yi) && (0, GW.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, GW.jsx)(pW.c, {
            name: "bolt"
          }), SW((0, YW.o)(Date.now()).unlockWithKey), Yi && (0, GW.jsx)(KW.n, {
            onClick: () => {
              zW()
            },
            children: SW("general:getItNow")
          })]
        }), (0, GW.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === cW && (0, GW.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, GW.jsx)(IW, {
              wornOutfit: (0, UW.i)(Pi.current),
              onApply: WW => {
                Mi(WW, {
                  undoable: !0
                })
              },
              onOverwrite: (WW, iW) => {
                rW({
                  kind: "slot",
                  slot: WW,
                  outfit: iW
                })
              },
              onDelete: WW => {
                rW((iW => "slot" === (null === iW || void 0 === iW ? void 0 : iW.kind) && iW.slot === WW ? null : iW))
              }
            }), fi.map((WW => {
              const iW = Vi.get(WW);
              return (0, GW.jsx)(li, {
                pack: WW,
                ownedPacks: Ki,
                showStoreLink: !eW.n.includes(WW) && iW.some((WW => {
                  let [, {
                    cosmetics: iW
                  }] = WW;
                  return ii(iW, Ki)
                })),
                children: (0, GW.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: iW.map((WW => {
                    let [iW, {
                      cosmetics: OW
                    }] = WW;
                    const mW = ii(OW, Ki),
                      EW = !mW && function(WW, iW) {
                        return Object.entries(iW).some((iW => {
                          let [OW, mW] = iW;
                          return ti(WW, OW, mW)
                        }))
                      }(Si, OW),
                      NW = mW || EW,
                      PW = (0, UW.b)(OW, nW),
                      LW = !PW && (0, UW.b)(OW, Pi.current);
                    return (0, GW.jsx)(Zi, {
                      locked: EW,
                      children: (0, GW.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: wW()("CharacterPresetCard", {
                          CharacterPresetCardActive: LW,
                          CharacterPresetCardTryingOn: PW
                        }),
                        onClick: () => {
                          NW ? function(WW) {
                            (0, UW.b)(WW, nW) ? uW({}): uW({
                              ...WW
                            })
                          }(OW) : Mi(OW, {
                            undoable: !0
                          })
                        },
                        children: [(0, GW.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(${(0,VW.g)(iW)})`
                          }
                        }), NW && (0, GW.jsx)(pW.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, iW)
                  }))
                })
              }, WW)
            }))]
          }), "emote" === cW && (0, GW.jsx)(Ai, {
            equippedEmoteIds: (0, jW.k)(Pi.current.emote),
            ownedPacks: Ki,
            canBuy: Yi,
            onUpdateLoadout: WW => {
              const iW = (0, jW.m)(WW);
              var OW;
              Pi.current = {
                ...Pi.current,
                emote: iW
              }, TW.setPlayerCosmetics("emote", iW), hW(), OW = iW, ji.current = OW, null !== bi.current && clearTimeout(bi.current), bi.current = setTimeout(Ui, 350)
            },
            onEmoteSelected: Ni,
            onEquipPreviewSkin: () => {
              ! function(WW, iW) {
                for (const OW of tW.p)(0, bW.f)(OW) && WW(OW, "skin" === OW ? "skin_preview" : `${OW}_none`, !1);
                iW()
              }(ki, hW)
            }
          }), "characters" !== cW && "emote" !== cW && (0, GW.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Di.map((WW => {
              const iW = ei.get(WW);
              return (0, GW.jsx)(li, {
                pack: WW,
                ownedPacks: Ki,
                children: iW.map((iW => {
                  var OW;
                  let {
                    groupName: mW,
                    cosmetics: EW,
                    showSwatch: NW
                  } = iW;
                  const PW = mW ? null === (OW = eW.e[WW].colourGroups) || void 0 === OW ? void 0 : OW[mW] : void 0,
                    LW = `${WW}_${kW}_${mW}`;
                  return (0, GW.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [NW && PW && (0, GW.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...PW.colours.map(((WW, iW) => ({
                        color: WW,
                        index: iW
                      })))].sort(((WW, iW) => WW.color.order - iW.color.order)).map((iW => {
                        var OW;
                        let {
                          color: EW,
                          index: NW
                        } = iW;
                        return (0, GW.jsx)("div", {
                          className: wW()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (OW = CW[LW]) && void 0 !== OW ? OW : (0, eW.i)(PW.colours)) === NW
                          }),
                          style: {
                            backgroundColor: `rgb(${EW.rbg.join(",")})`
                          },
                          onClick: () => {
                            var iW;
                            BW((WW => ({
                              ...WW,
                              [LW]: NW
                            })));
                            const OW = nW[kW],
                              EW = OW ? (0, AW.l)(kW, OW) : null,
                              PW = (null === EW || void 0 === EW ? void 0 : EW.cosmeticPack) === WW,
                              cW = PW ? OW : Pi.current[kW],
                              wW = PW ? EW : (0, AW.l)(kW, cW);
                            if ((null === wW || void 0 === wW ? void 0 : wW.cosmeticPack) !== WW) return;
                            if ((null !== (iW = null === wW || void 0 === wW ? void 0 : wW.colourGroup) && void 0 !== iW ? iW : null) !== mW) return;
                            const tW = (0, AW.h)(cW);
                            if (tW) {
                              const WW = `${kW}_${tW[0]}_${NW}`;
                              Wi(kW, WW, Ki) || ti(Si, kW, WW) ? uW((iW => ({
                                ...iW,
                                [kW]: WW
                              }))) : (PW && si(kW), ki(kW, WW, !0))
                            }
                          }
                        }, EW.rbg.join())
                      }))
                    }), EW.map((WW => {
                      const iW = WW === Pi.current[kW],
                        OW = nW[kW] === WW,
                        mW = Wi(kW, WW, Ki),
                        EW = !mW && ti(Si, kW, WW),
                        NW = mW || EW,
                        PW = NW || iW ? [] : function(WW, iW, OW) {
                          if ("cape" === WW) {
                            const {
                              needsSuperRankPerks: WW,
                              rank: mW
                            } = ZW.l[iW];
                            return [...WW && !(0, xW.e)(OW) ? [xW.s.rank] : [], ...void 0 === mW || OW.includes(mW) ? [] : [mW]]
                          }
                          return "nameColour" !== WW || (0, aW.Kd)(OW, iW) ? [] : [xW.s.rank]
                        }(kW, WW, yi),
                        LW = 0 === PW.length;
                      return (0, GW.jsx)(Zi, {
                        locked: EW,
                        children: (0, GW.jsxs)("div", {
                          "data-pad-focusable": !0,
                          className: wW()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: iW && !OW,
                            TryingOnCharCustomPartWrapper: OW,
                            DisabledCharCustomPartWrapper: !LW,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === kW
                          }),
                          onClick: () => {
                            if (!LW) return iW = {
                              NE: kW,
                              PE: WW,
                              missingRanks: PW,
                              playerRanks: yi,
                              canBuy: Yi
                            }, void RW.NotificationProvider.showCustomPopup({
                              body: WW => (0, GW.jsx)(FW, {
                                ...iW,
                                closePopup: WW
                              }),
                              disableExitButton: !0
                            });
                            var iW;
                            if (NW) uW((iW => {
                              if (iW[kW] === WW) {
                                const WW = {
                                  ...iW
                                };
                                return delete WW[kW], WW
                              }
                              return {
                                ...iW,
                                [kW]: WW
                              }
                            }));
                            else {
                              var OW;
                              if (nW[kW] && si(kW), WW === Pi.current[kW]) return;
                              null !== (OW = wi.current) && void 0 !== OW && OW.isReady() && ki(kW, WW, !0)
                            }
                          },
                          children: ["profileEffect" === kW ? (0, GW.jsx)(DW.c, {
                            profileEffect: WW,
                            name: TW.getPlayerName(),
                            cosmetics: TW.getPlayerCosmetics()
                          }) : (0, GW.jsx)(XW.e, {
                            NE: kW,
                            PE: WW
                          }), NW && (0, GW.jsx)(pW.c, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, WW)
                    }))]
                  }, null !== mW && void 0 !== mW ? mW : "ungrouped")
                }))
              }, WW)
            }))]
          }), (0, GW.jsxs)("div", {
            className: "CharCustomisationPreviewColumn",
            children: [(0, GW.jsx)(dW.CharacterPreview, {
              ref: wi,
              forcedCosmetics: nW,
              LL: mi.id,
              emotePlaySeq: mi.seq,
              nametag: Hi,
              onReady: () => {
                for (const WW of tW.p) ki(WW, Pi.current[WW], !1)
              },
              onDrawn: WW => {
                var iW, OW;
                const mW = null === (iW = wi.current) || void 0 === iW || null === (OW = iW.getDevTools()) || void 0 === OW ? void 0 : OW.canvas(),
                  EW = (WW, iW) => 0 === Object.keys(gW.current).length && JSON.stringify(TW.getPlayerCosmetics()) === WW && xi.current.seq === iW.seq && null === xi.current.id,
                  LW = JSON.stringify(TW.getPlayerCosmetics()),
                  cW = xi.current;
                if (!NW.l || !WW || void 0 === mW || !EW(LW, cW)) return;
                const wW = (0, PW.d)(TW),
                  tW = wi.current;
                tW.setNametagShown(!1), (0, PW.b)(mW, wW, (() => EW(LW, cW))).catch((WW => {
                  console.warn("[loading-character] couldn't keep your picture from Customise", WW)
                })).finally((() => {
                  tW.setNametagShown(!0)
                }))
              }
            }), Xi && (0, GW.jsxs)("div", {
              className: "CharCustomisationPreviewActions",
              children: [Ci.length > 0 && (0, GW.jsx)(Li, {
                gets: Ci
              }), qW && (0, GW.jsxs)(KW.f, {
                className: "CharCustomisationUndo",
                onClick: () => {
                  "worn" === qW.kind ? Mi(qW.outfit, {
                    undoable: !1
                  }) : (oW.save(qW.slot, qW.outfit), rW(null))
                },
                children: [(0, GW.jsx)(pW.c, {
                  name: "rotate-left"
                }), SW("general:undo")]
              })]
            })]
          })]
        })]
      })
    }))
  },
  44898: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      CharacterPreview: () => lW
    });
    var mW = OW(62),
      EW = OW(3809),
      NW = OW(1230),
      PW = OW(3540),
      LW = OW(35264),
      cW = OW(4846),
      wW = OW(1283);
    let tW = null;
    const ZW = [],
      xW = .6 * Math.PI,
      lW = (0, mW.memo)((0, mW.forwardRef)((function(WW, iW) {
        let {
          onReady: OW,
          onDrawn: lW,
          onSetupFailed: AW,
          owner: bW = "other",
          framing: jW = "player",
          forcedCosmetics: UW,
          LL: kW,
          emotePlaySeq: sW,
          turntableFromYaw: MW = null,
          nametag: KW
        } = WW;
        const SW = (0, mW.useRef)(null),
          {
            width: YW,
            height: yW
          } = (0, EW.d)(SW),
          TW = (0, mW.useRef)({
            width: YW,
            height: yW
          });
        TW.current = {
          width: YW,
          height: yW
        };
        const JW = (0, mW.useRef)(null),
          hW = (0, mW.useRef)({}),
          HW = (0, mW.useRef)({}),
          [nW, uW] = (0, mW.useState)(!1),
          oW = (0, mW.useRef)(OW);
        oW.current = OW;
        const dW = (0, mW.useRef)(lW);
        dW.current = lW;
        const eW = (0, mW.useRef)(AW);
        eW.current = AW;
        const vW = (0, mW.useRef)(null),
          gW = (0, mW.useRef)(!1),
          DW = (0, mW.useRef)(KW);
        DW.current = KW;
        const VW = (0, mW.useRef)(!0),
          pW = (0, mW.useRef)(!1),
          fW = (0, mW.useCallback)((() => {
            const WW = JW.current;
            if (!WW || !dW.current || gW.current || !pW.current) return;
            const iW = {};
            vW.current = iW, queueMicrotask((() => {
              if (vW.current !== iW) return;
              const OW = Promise.all(NW.p.map((iW => WW.untilDrawn(iW)))).then((() => !0), (WW => (console.error("Failed to draw the character preview", WW), !1))),
                mW = new Promise((WW => {
                  setTimeout((() => {
                    WW(!1)
                  }), 1e4)
                }));
              Promise.race([OW, mW]).then((OW => {
                const mW = dW.current;
                JW.current === WW && vW.current === iW && !gW.current && mW && (gW.current = !0, mW(OW))
              }))
            }))
          }), []);
        return (0, mW.useImperativeHandle)(iW, (() => {
          const WW = (WW, iW) => {
            var OW;
            (hW.current[WW] = iW, null !== UW && void 0 !== UW && UW[WW]) || (null === (OW = JW.current) || void 0 === OW || OW.setCosmetic(WW, iW), fW())
          };
          return {
            updateCosmetic: WW,
            setAllCosmetics(iW) {
              for (const mW of NW.p) {
                var OW;
                WW(mW, null !== (OW = iW[mW]) && void 0 !== OW ? OW : (0, PW.d)(mW))
              }
            },
            isReady() {
              var WW, iW;
              return null !== (WW = null === (iW = JW.current) || void 0 === iW ? void 0 : iW.isReady()) && void 0 !== WW && WW
            },
            resetCamera() {
              var WW;
              null === (WW = JW.current) || void 0 === WW || WW.resetCamera()
            },
            setOrbit(WW) {
              var iW;
              null === (iW = JW.current) || void 0 === iW || iW.setOrbit(WW)
            },
            turnCamera(WW) {
              var iW;
              const OW = LW.d[jW];
              null === (iW = JW.current) || void 0 === iW || iW.setOrbit({
                ...OW,
                yaw: OW.yaw + WW
              })
            },
            async ensureReadyForCapture(WW) {
              var iW;
              await (null === (iW = JW.current) || void 0 === iW ? void 0 : iW.untilDrawn(WW))
            },
            getDevTools() {
              var WW;
              return null !== (WW = JW.current) && void 0 !== WW && WW.isReady() ? JW.current.dev : null
            },
            setNametagShown(WW) {
              var iW, OW;
              VW.current = WW, null === (iW = JW.current) || void 0 === iW || iW.setNametag(WW && null !== (OW = DW.current) && void 0 !== OW ? OW : null)
            }
          }
        }), [UW, jW, fW]), (0, mW.useEffect)((() => {
          const WW = cW.b.register(bW);
          let iW = !0;
          const OW = WW => {
            const OW = JW.current,
              mW = LW.f.openCharacter(SW.current, jW);
            if (JW.current = mW, tW = mW, OW) {
              OW.close();
              const {
                width: WW,
                height: iW
              } = TW.current;
              WW > 0 && iW > 0 && mW.resize(WW, iW)
            }
            HW.current = {}, uW(!1), mW.ready.then((() => {
              if (iW && JW.current === mW)
                if (uW(!0), WW) {
                  mW.resetCamera();
                  for (const WW of NW.p) {
                    var OW;
                    mW.setCosmetic(WW, null !== (OW = hW.current[WW]) && void 0 !== OW ? OW : (0, PW.d)(WW))
                  }
                } else oW.current()
            })).catch((WW => {
              var OW;
              (console.error("Failed to set up the character preview", WW), iW && JW.current === mW) && (null === (OW = eW.current) || void 0 === OW || OW.call(eW))
            }))
          };
          OW(!1);
          const mW = {
            reopen: () => {
              OW(!0)
            }
          };
          return ZW.push(mW), () => {
            iW = !1, WW();
            const OW = JW.current;
            tW === OW && (OW.resetCamera(), tW = null), OW.close(), JW.current = null;
            const EW = ZW.indexOf(mW);
            if (ZW.splice(EW, 1), EW === ZW.length && EW > 0) {
              const WW = ZW[EW - 1];
              queueMicrotask((() => {
                ZW.at(-1) === WW && null === tW && LW.f.sharesCharacter() && WW.reopen()
              }))
            }
          }
        }), []), (0, mW.useEffect)((() => {
          YW <= 0 || yW <= 0 || JW.current.resize(YW, yW)
        }), [YW, yW]), (0, mW.useEffect)((() => {
          if (!nW) return;
          const WW = HW.current;
          for (const iW of NW.p) {
            const OW = null === UW || void 0 === UW ? void 0 : UW[iW],
              mW = WW[iW];
            OW && OW !== mW ? JW.current.setCosmetic(iW, OW) : !OW && mW && hW.current[iW] && JW.current.setCosmetic(iW, hW.current[iW])
          }
          HW.current = {
            ...UW
          }, pW.current = !0, fW()
        }), [UW, nW, fW]), (0, mW.useEffect)((() => {
          nW && JW.current.playEmote(null !== kW && void 0 !== kW ? kW : null)
        }), [kW, sW, nW]), (0, mW.useEffect)((() => {
          nW && VW.current && JW.current.setNametag(null !== KW && void 0 !== KW ? KW : null)
        }), [KW, nW]), (0, mW.useEffect)((() => {
          if (!nW || null === MW) return;
          const WW = JW.current,
            {
              pitch: iW,
              radius: OW
            } = LW.d[jW];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return WW.setOrbit({
            yaw: MW + xW,
            pitch: iW,
            radius: OW
          }), () => {
            tW === WW && WW.resetCamera()
          };
          const mW = performance.now();
          let EW = 0;
          const NW = PW => {
            JW.current === WW && (WW.setOrbit({
              yaw: MW + (PW - mW) / 6e3 * 2 * Math.PI,
              pitch: iW,
              radius: OW
            }), EW = requestAnimationFrame(NW))
          };
          return EW = requestAnimationFrame(NW), () => {
            cancelAnimationFrame(EW), tW === WW && WW.resetCamera()
          }
        }), [nW, MW]), (0, wW.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: SW
        })
      })))
  },
  37541: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW
    });
    var mW = OW(2037),
      EW = OW(1584);
    const NW = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(WW, iW) {
        WW !== this.userContext && this.sendHeld(), this.userContext = WW;
        for (const [mW, EW] of iW) this.pending.set(mW, EW);
        if (null !== this.timer) return;
        const OW = this.lastSentAt + 1100 - Date.now();
        OW <= 0 ? this.send(WW) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), OW), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(WW) {
        const iW = Array.from(this.pending, (WW => {
          let [iW, OW] = WW;
          return {
            NE: iW,
            PE: OW
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), EW.e.updateCosmetics(WW, iW).catch((WW => {
          console.error("Failed to update cosmetics", WW)
        }))
      }
    };

    function PW(WW, iW) {
      for (const [OW, mW] of iW) WW.setPlayerCosmetics(OW, mW);
      if (null === mW.gameBridge.latest("connectedGame").websocketUrl) NW.save(WW, iW);
      else
        for (const [OW, EW] of iW) mW.gameBridge.send("updateMyCosmetic", {
          NE: OW,
          PE: EW
        })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);