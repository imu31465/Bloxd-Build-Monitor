export const id = 251;
export const ids = [251, 610];
export const modules = {
  44991: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      CharacterCustomisationUI: () => aJ
    });
    var yR = GR(66),
      tR = GR(3037),
      uR = GR(4816),
      ZR = GR(4799),
      qR = GR(1196),
      iR = GR(1201),
      fR = GR(1163),
      VR = GR.n(fR),
      KR = GR(1336),
      wR = GR(656),
      rR = GR(645),
      eR = GR(1270),
      aR = GR(3178),
      LR = GR(1718),
      nR = GR(3644),
      UR = GR(37807),
      WR = GR(3180),
      AR = GR(4324),
      CR = GR(2173),
      XR = GR(1590),
      MR = GR(3213),
      BR = GR(3314),
      lR = GR(25),
      pR = GR(3810),
      gR = GR(1647),
      bR = GR(2068);
    class vR {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(RR) {
        null !== RR && RR !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = RR)
      }
      isFor(RR) {
        return null === this.accountId || this.accountId === RR
      }
      overlay(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return RR.map(((RR, GR) => {
          var yR, tR;
          return null !== (yR = null !== (tR = this.slots.get(GR)) && void 0 !== tR ? tR : JR.get(GR)) && void 0 !== yR ? yR : RR
        }))
      }
    }
    class OR extends pR.c {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new vR;
        super("saved outfits", (async JR => {
          const GR = RR.isFor(JR.whamm),
            yR = new Map(RR.slots),
            tR = await gR.c.getSavedOutfits(JR);
          return GR ? RR.overlay(tR, yR) : tR
        })), this.unsaved = RR, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(RR, JR) {
        var GR, yR;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(RR)) || this.unsaved.before.set(RR, null !== (GR = null === (yR = this.getState().data) || void 0 === yR ? void 0 : yR[RR]) && void 0 !== GR ? GR : {});
        this.unsaved.slots.set(RR, JR), this.update((GR => GR.map(((GR, yR) => yR === RR ? JR : GR)))), this.sending || this.sendUnsaved()
      }
      clear(RR) {
        this.save(RR, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let RR = !1;
        for (; this.unsaved.slots.size > 0;) {
          const GR = new Map(this.unsaved.slots);
          let yR = this.getState().accountId;
          try {
            const RR = await iR.userContextManager.getCurrentUserContext();
            if (yR = RR.whamm, this.unsaved.moveTo(RR.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: JR,
              data: tR
            } = this.getState();
            let uR = tR;
            JR === RR.whamm && null !== uR || (uR = this.unsaved.overlay(await gR.c.getSavedOutfits(RR)), this.refresh()), await gR.c.setSavedOutfits(RR, uR), this.unsaved.isFor(RR.whamm) && uR.forEach(((RR, JR) => {
              const yR = this.unsaved.slots.get(JR);
              void 0 === yR || yR === GR.get(JR) ? this.unsaved.before.delete(JR) : this.unsaved.before.set(JR, RR)
            }))
          } catch (JR) {
            if (console.error("Failed to save outfits", JR), this.getState().accountId === yR && [...this.unsaved.slots].every((RR => {
                let [JR, yR] = RR;
                return GR.get(JR) === yR
              }))) {
              const JR = [...GR.values()].every(UR.f);
              bR.j.showMessage({
                translationKey: JR ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const yR = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((RR => RR.map(((RR, JR) => {
                var GR;
                return null !== (GR = yR.get(JR)) && void 0 !== GR ? GR : RR
              })))), RR = !0
            }
          }
          for (const [RR, JR] of GR) this.unsaved.slots.get(RR) === JR && this.unsaved.slots.delete(RR)
        }
        this.sending = !1, RR && this.refresh()
      }
    }
    const xR = new OR;
    var NR = GR(44996),
      DR = GR(1716),
      HR = GR(3283),
      oR = GR(4150),
      cR = GR(4315),
      PR = GR(3240),
      IR = GR(1468);
    GR(35193), GR(4326);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var mR = GR(3217),
      zR = GR(4334),
      SR = GR(4343),
      jR = GR(1501),
      dR = GR(3361),
      ER = GR(1493),
      YR = GR(1378);

    function kR(RR) {
      let {
        wornOutfit: JR,
        onApply: GR,
        onOverwrite: tR,
        onDelete: uR
      } = RR;
      const {
        t: ZR
      } = (0, eR.A)(), {
        accountId: iR,
        data: fR
      } = (0, pR.h)(xR, !1), {
        userContext: KR
      } = (0, qR.d)();
      async function wR(RR, JR) {
        const GR = await ER.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: yR,
            data: tR
          } = xR.getState();
        var ZR, qR;
        !0 === GR && yR === iR && null !== tR && (ZR = tR[RR], qR = JR, (0, UR.b)(ZR, qR) && (0, UR.b)(qR, ZR)) && (xR.clear(RR), uR(RR))
      }
      return (0, yR.useEffect)((() => {
        xR.ensureLoaded()
      }), []), null === fR || iR !== KR.whamm ? null : (0, YR.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, YR.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, YR.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: ZR("homePage:myOutfits")
          })
        }), (0, YR.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: fR.map(((RR, yR) => {
            const uR = (0, UR.f)(RR);
            return (0, YR.jsxs)("div", {
              className: VR()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !uR
              }),
              children: [(0, YR.jsxs)("div", {
                ...(0, XR.bb)(),
                role: uR ? "button" : "link",
                "data-pad-focusable": !0,
                className: VR()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: uR,
                  CharacterPresetCardActive: !uR && (0, UR.b)(RR, JR)
                }),
                onClick: () => {
                  uR ? xR.save(yR, JR) : GR(RR)
                },
                children: [uR && (0, YR.jsxs)(YR.Fragment, {
                  children: [(0, YR.jsx)(IR.d, {
                    name: "plus"
                  }), ZR("homePage:saveOutfit")]
                }), !uR && (0, YR.jsxs)(YR.Fragment, {
                  children: [(0, YR.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, YR.jsx)(dR.c, {
                      cosmetics: RR
                    })
                  }), (0, YR.jsx)(XR.U, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      (0, UR.b)(JR, RR) || (xR.save(yR, JR), tR(yR, RR))
                    },
                    children: ZR("general:save")
                  })]
                })]
              }), !uR && (0, YR.jsx)("button", {
                type: "button",
                className: "SavedOutfitDeleteButton",
                "data-pad-destructive": !0,
                "aria-label": ZR("general:delete"),
                title: ZR("general:delete"),
                onClick: () => {
                  wR(yR, RR)
                },
                children: (0, YR.jsx)(IR.d, {
                  name: "trash-can"
                })
              })]
            }, yR)
          }))
        })]
      })
    }
    var QR = GR(377),
      FR = GR(1496);

    function TR() {
      (0, MR.m)({
        mode: "self",
        source: "characterCustomisation",
        openItem: "superRank"
      })
    }

    function sR(RR) {
      let {
        ft: JR,
        Vt: GR,
        missingRanks: yR,
        playerRanks: tR,
        canBuy: uR,
        closePopup: ZR
      } = RR;
      const {
        t: qR
      } = (0, eR.A)(), iR = (0, BR.s)(Date.now()), fR = rR.r.find((RR => tR.includes(RR.rank))), VR = qR((void 0 === fR ? iR : (0, BR.l)(fR.id)).nameKey), {
        title: KR,
        subtitle: aR,
        textOpts: LR,
        soldRankUnlocks: nR
      } = function(RR, JR, GR, yR) {
        const tR = RR.find((RR => !(0, rR.k)(rR.r, RR)));
        if (void 0 === tR) return {
          title: GR.unlockWithKey,
          soldRankUnlocks: !0
        };
        if ("youtuber" === tR) return {
          title: "homePage:youtuberCape",
          subtitle: "homePage:youtuberCapeHow",
          textOpts: {
            subtitle: {
              tierRank: yR
            }
          },
          soldRankUnlocks: !1
        };
        const uR = {
          rank: wR.n[tR].chatTag[0].str
        };
        return {
          title: "homePage:creatorCape",
          subtitle: JR.some(wR.r) ? "homePage:creatorCapeOtherTier" : "homePage:creatorCapeHow",
          textOpts: {
            title: uR,
            subtitle: {
              ...uR,
              tierRank: yR
            }
          },
          soldRankUnlocks: !1
        }
      }(yR, tR, iR, VR), UR = uR && nR;
      return (0, YR.jsx)(FR.g, {
        className: "RankLockedCosmeticPopup",
        title: KR,
        subtitle: aR,
        textOpts: LR,
        confirm: UR ? {
          text: "general:getItNow",
          onClick: () => {
            ZR(), TR()
          }
        } : {
          text: "general:ok",
          onClick: ZR
        },
        cancel: UR ? {
          text: "general:cancel",
          onClick: ZR
        } : void 0,
        children: (0, YR.jsx)("div", {
          className: "RankLockedCosmeticPicture",
          children: (0, YR.jsx)(SR.e, {
            ft: JR,
            Vt: GR
          })
        })
      })
    }
    var hR = GR(37444);

    function RJ(RR, JR, GR) {
      return !(0, HR.w)(RR, JR) && !(0, HR.G)(RR, JR, GR)
    }

    function JJ(RR, JR) {
      return !(0, HR.C)(RR, JR)
    }

    function GJ(RR) {
      return DR.l.find((JR => (0, DR.c)(JR) === RR))
    }

    function yJ(RR, JR, GR) {
      var yR;
      if (!RJ(RR, JR, GR)) return null;
      const tR = (0, aR.m)(RR, JR).cosmeticPack;
      return DR.p.includes(tR) ? tR : null !== (yR = (0, HR.f)(RR, JR).find((RR => DR.p.includes(RR)))) && void 0 !== yR ? yR : null
    }

    function tJ(RR, JR, GR) {
      const yR = function(RR, JR) {
          for (const [yR, tR] of Object.entries(LR.b)) {
            var GR;
            if (!(0, UR.b)(tR.cosmetics, RR) || !JJ(tR.cosmetics, JR)) continue;
            const uR = null !== (GR = GJ(yR)) && void 0 !== GR ? GR : tR.cosmeticPack;
            if (Object.entries(tR.cosmetics).every((RR => {
                let [GR, yR] = RR;
                return !RJ(GR, yR, JR) || (0, HR.b)(uR, GR, yR)
              })) && DR.p.includes(uR)) return uR
          }
          return null
        }(JR, GR),
        tR = null === yR ? [] : [{
          kind: "characters",
          pack: yR
        }],
        uR = "characters" === RR ? KR.w : [RR, ...KR.w.filter((JR => JR !== RR))];
      for (const ZR of uR) {
        const RR = JR[ZR];
        if (void 0 === RR || null !== yR && (0, HR.b)(yR, ZR, RR)) continue;
        const uR = yJ(ZR, RR, GR);
        if (null === uR) continue;
        const qR = void 0 === (0, DR.c)(uR) ? -1 : tR.findIndex((RR => RR.pack === uR)); - 1 === qR ? tR.push({
          kind: ZR,
          pack: uR
        }) : tR[qR] = {
          kind: "characters",
          pack: uR
        }
      }
      return tR
    }
    var uJ = GR(3062);
    const ZJ = {
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

    function qJ(RR) {
      let {
        gets: JR
      } = RR;
      const {
        t: GR
      } = (0, eR.A)();
      return (0, YR.jsx)("div", {
        className: "CharCustomisationGetTriedOn",
        children: JR.map((RR => {
          let {
            kind: JR,
            pack: yR
          } = RR;
          return (0, YR.jsxs)(XR.n, {
            className: "CharCustomisationGetPiece",
            onClick: () => {
              (0, oR.h)(yR, "triedOnGet")
            },
            children: [(0, YR.jsx)(IR.d, {
              name: "store"
            }), "characters" === JR ? GR("homePage:getPack", {
              name: (0, uJ.j)(yR)
            }) : GR(ZJ[JR])]
          }, JR + yR)
        }))
      })
    }
    var iJ = GR(3640),
      fJ = GR(3642);

    function VJ(RR, JR, GR) {
      return null !== RR && !(0, iJ.e)(fJ.c, JR, GR, RR.collected, RR.ownedPacks)
    }

    function KJ(RR) {
      let {
        locked: JR,
        children: GR
      } = RR;
      return JR ? (0, YR.jsx)(wJ, {
        children: GR
      }) : GR
    }

    function wJ(RR) {
      var JR;
      let {
        children: GR
      } = RR;
      const {
        t: yR
      } = (0, eR.A)(), {
        userContext: tR
      } = (0, qR.d)(), uR = null !== (JR = tR.dailyDrop) && void 0 !== JR && JR.hidden ? yR("dailyDrop:lockedFromHidden") : yR("dailyDrop:lockedFrom");
      return (0, YR.jsx)(jR.h, {
        tooltipInner: (0, YR.jsx)(YR.Fragment, {
          children: uR
        }),
        children: GR
      })
    }

    function rJ(RR) {
      let {
        pack: JR,
        ownedPacks: GR,
        showStoreLink: yR = !1,
        children: tR
      } = RR;
      const {
        t: uR
      } = (0, eR.A)(), ZR = DR.b[JR].purchasable && !GR.includes(JR) && DR.p.includes(JR), qR = oR.j[JR];
      return (0, YR.jsxs)("div", {
        className: VR()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: ZR
        }),
        children: [qR && (0, YR.jsx)(qR, {}), (0, YR.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, YR.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: (0, uJ.j)(JR)
          }), (ZR || yR) && (0, YR.jsxs)(XR.E, {
            onClick: () => {
              ZR ? (0, oR.h)(JR) : (0, MR.m)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, YR.jsx)(IR.d, {
              name: "store"
            }), " ", uR("general:viewInShop")]
          })]
        }), ZR && "bee" === JR && (0, YR.jsx)(oR.b, {}), tR]
      })
    }

    function eJ(RR) {
      let {
        equippedEmoteIds: JR,
        ownedPacks: GR,
        canBuy: yR,
        onUpdateLoadout: tR,
        onEmoteSelected: uR,
        onEquipPreviewSkin: ZR
      } = RR;
      const {
        t: qR
      } = (0, eR.A)(), iR = new Set(JR), fR = new Map, wR = Object.keys(aR.f.emote).sort(((RR, JR) => {
        var GR, yR, tR, uR;
        return (null !== (GR = null === (yR = (0, aR.m)("emote", RR)) || void 0 === yR ? void 0 : yR.clientIdx) && void 0 !== GR ? GR : 0) - (null !== (tR = null === (uR = (0, aR.m)("emote", JR)) || void 0 === uR ? void 0 : uR.clientIdx) && void 0 !== tR ? tR : 0)
      })).filter((RR => {
        const JR = (0, aR.q)("emote", RR),
          tR = (0, HR.G)("emote", RR, GR);
        return !(JR.purchasable && !tR && !yR) && (JR.clientSelectable || tR)
      }));
      for (const VR of wR) {
        const RR = (0, aR.m)("emote", VR).cosmeticPack;
        fR.has(RR) || fR.set(RR, []), fR.get(RR).push(VR)
      }
      const rR = Array.from(fR.keys());
      return (0, YR.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, YR.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, YR.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: qR("emotes:equippedCount", {
              count: JR.length,
              max: KR.p
            })
          }), (0, YR.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: qR("emotes:loadoutHint")
          })]
        }), rR.map((RR => {
          const yR = fR.get(RR);
          return (0, YR.jsx)(rJ, {
            pack: RR,
            ownedPacks: GR,
            children: (0, YR.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: yR.map((RR => {
                var yR;
                const ZR = JR.indexOf(RR),
                  fR = -1 !== ZR,
                  wR = JR.length >= KR.p,
                  rR = RJ("emote", RR, GR),
                  eR = rR || !fR && wR,
                  aR = (0, WR.i)(RR);
                return (0, YR.jsxs)("div", {
                  className: VR()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: fR
                  }),
                  onClick: () => {
                    uR(RR)
                  },
                  children: [(0, YR.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, YR.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(${(0,zR.h)("emote",RR)})`
                      },
                      "aria-hidden": !0
                    }), (0, YR.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (yR = null === aR || void 0 === aR ? void 0 : aR.displayName) && void 0 !== yR ? yR : RR
                    })]
                  }), (0, YR.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [fR && (0, YR.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: ZR + 1
                    }), rR && (0, YR.jsx)(IR.d, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, YR.jsx)(jR.h, {
                      tooltipInner: (0, YR.jsx)(YR.Fragment, {
                        children: qR(fR ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, YR.jsx)("div", {
                        className: VR()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: eR,
                          EmoteCustomPartToggleEquipped: fR
                        }),
                        onClick: GR => {
                          GR.stopPropagation(), eR || function(RR) {
                            iR.has(RR) ? tR(JR.filter((JR => JR !== RR))) : JR.length >= KR.p || tR([...JR, RR])
                          }(RR)
                        },
                        children: (0, YR.jsx)(IR.d, {
                          name: fR ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, RR)
              }))
            })
          }, RR)
        }))]
      })
    }
    const aJ = (0, yR.memo)((function(RR) {
      var JR, GR;
      let {
        selectedTab: fR
      } = RR;
      const WR = "characters" === fR ? "skin" : fR,
        {
          t: MR
        } = (0, eR.A)(),
        {
          userContext: pR,
          isUserContextUpdating: gR
        } = (0, qR.d)(),
        bR = (0, tR.b)(),
        {
          gameState: vR
        } = (0, lR.o)(["gameState"]),
        [OR, oR] = (0, yR.useState)({}),
        zR = (0, yR.useRef)(OR);
      zR.current = OR;
      const [jR, dR] = (0, yR.useState)({}), [FR, yJ] = (0, yR.useState)(null), {
        previewEmote: uJ,
        triggerEmote: ZJ
      } = (0, AR.e)(), iJ = (0, yR.useRef)(KR.w.reduce(((RR, JR) => (RR[JR] = (0, nR.c)(JR), RR)), {})), fJ = (0, yR.useRef)(!1), wJ = (0, yR.useRef)(null), aJ = (0, yR.useRef)(uJ);
      aJ.current = uJ;
      const LJ = (0, yR.useRef)(null),
        nJ = (0, yR.useRef)(null);

      function UJ() {
        null !== LJ.current && (clearTimeout(LJ.current), LJ.current = null);
        const RR = nJ.current;
        null !== RR && (nJ.current = null, (0, hR.e)(pR, [
          ["emote", RR]
        ]))
      }

      function WJ(RR, JR, GR) {
        var yR, tR, uR;
        iJ.current = {
          ...iJ.current,
          [RR]: JR
        }, bR(), GR && ((0, hR.e)(pR, [
          [RR, JR]
        ]), yJ(null));
        const ZR = (0, aR.m)(RR, JR);
        if (null !== ZR && void 0 !== ZR && ZR.colourGroup && null !== (yR = DR.b[ZR.cosmeticPack].colourGroups) && void 0 !== yR && null !== (tR = yR[ZR.colourGroup]) && void 0 !== tR && tR.showSwatchSelector) {
          const GR = (0, aR.i)(JR);
          GR && dR((JR => ({
            ...JR,
            [`${ZR.cosmeticPack}_${RR}_${ZR.colourGroup}`]: parseInt(GR[1])
          })))
        }
        null !== (uR = wJ.current) && void 0 !== uR && uR.isReady() && wJ.current.updateCosmetic(RR, JR)
      }

      function AJ(RR) {
        oR((JR => {
          const GR = {
            ...JR
          };
          return delete GR[RR], GR
        }))
      }

      function CJ(RR, JR) {
        let {
          undoable: GR
        } = JR;
        Object.keys(OR).length > 0 && oR({});
        const yR = function(RR, JR, GR, yR) {
          return Object.entries(RR).filter((RR => {
            let [tR, uR] = RR;
            return JR[tR] !== uR && !RJ(tR, uR, GR) && !yR(tR, uR)
          }))
        }(RR, iJ.current, XJ, ((RR, JR) => VJ(MJ, RR, JR)));
        GR ? yR.length > 0 && yJ({
          kind: "worn",
          outfit: (0, UR.i)(iJ.current)
        }) : yJ(null);
        for (const [tR, uR] of yR) WJ(tR, uR, !1);
        yR.length > 0 && (0, hR.e)(pR, yR)
      }(0, CR.c)("cosmeticsUpdated", (RR => {
        let JR = !1;
        for (const {
            local: GR,
            ft: yR,
            Vt: tR
          }
          of RR) {
          if (!GR) return;
          JR = !0, fJ.current || WJ(yR, tR, !1), bR()
        }
        JR && (fJ.current = !0)
      })), (0, yR.useEffect)((() => {
        if (!gR) {
          for (const [RR, JR] of Object.entries(pR.getPlayerCosmetics())) WJ(RR, JR, !1);
          bR()
        }
      }), [gR]), (0, yR.useEffect)((() => () => {
        UJ()
      }), []);
      const XJ = pR.getOwnedCosmeticPacks(),
        MJ = function(RR, JR) {
          return null === RR ? null : {
            collected: new Set(RR.collected),
            ownedPacks: JR
          }
        }(pR.dailyDrop, XJ),
        BJ = (0, mR.usePurchasesAllowed)(),
        lJ = pR.getPlayerRanks(),
        pJ = pR === iR.NULL_USER_CONTEXT ? "" : pR.getPlayerName(),
        gJ = null !== (JR = null !== (GR = OR.nameColour) && void 0 !== GR ? GR : pR.getPlayerCosmetics().nameColour) && void 0 !== JR ? JR : wR.c,
        bJ = (0, yR.useMemo)((() => ({
          name: pJ,
          ranks: lJ,
          nameColour: gJ
        })), [pJ, lJ, gJ]),
        vJ = Object.keys(aR.f[WR]).filter((RR => {
          const JR = (0, aR.q)(WR, RR),
            GR = (0, HR.G)(WR, RR, XJ);
          return !(JR.purchasable && !GR && !BJ) && (JR.clientSelectable || GR)
        })).sort(((RR, JR) => {
          var GR, yR, tR, uR;
          return (null !== (GR = null === (yR = (0, aR.m)(WR, RR)) || void 0 === yR ? void 0 : yR.clientIdx) && void 0 !== GR ? GR : 0) - (null !== (tR = null === (uR = (0, aR.m)(WR, JR)) || void 0 === uR ? void 0 : uR.clientIdx) && void 0 !== tR ? tR : 0)
        })),
        OJ = new Map;
      for (const yR of vJ) {
        var xJ;
        const RR = null === (xJ = (0, aR.m)(WR, yR)) || void 0 === xJ ? void 0 : xJ.cosmeticPack;
        OJ.has(RR) || OJ.set(RR, []), OJ.get(RR).push(yR)
      }
      const NJ = function(RR, JR) {
          const GR = new Set,
            yR = new Set;
          for (const [tR, uR] of Object.entries(aR.f[RR])) {
            if (void 0 === uR.colourGroup) continue;
            const ZR = `${uR.cosmeticPack}_${uR.colourGroup}`;
            (RJ(RR, tR, JR) ? yR : GR).add(ZR)
          }
          return new Set([...GR].filter((RR => yR.has(RR))))
        }(WR, XJ),
        DJ = new Map;
      for (const [yR, tR] of OJ) {
        const RR = [],
          JR = new Map;
        for (const yR of tR) {
          var HJ, oJ;
          const GR = null !== (HJ = null === (oJ = (0, aR.m)(WR, yR)) || void 0 === oJ ? void 0 : oJ.colourGroup) && void 0 !== HJ ? HJ : null;
          JR.has(GR) || (JR.set(GR, []), RR.push(GR)), JR.get(GR).push(yR)
        }
        const GR = RR.map((RR => {
          var GR;
          const tR = JR.get(RR),
            uR = RR ? null === (GR = DR.b[yR].colourGroups) || void 0 === GR ? void 0 : GR[RR] : void 0,
            ZR = !0 === (null === uR || void 0 === uR ? void 0 : uR.showSwatchSelector) && !NJ.has(`${yR}_${RR}`);
          if (ZR && uR) {
            var qR;
            const JR = null !== (qR = jR[`${yR}_${WR}_${RR}`]) && void 0 !== qR ? qR : (0, DR.g)(uR.colours);
            return {
              groupName: RR,
              showSwatch: ZR,
              cosmetics: tR.filter((RR => {
                const GR = (0, aR.i)(RR);
                return !GR || JR.toString() === GR[1].toString()
              }))
            }
          }
          return {
            groupName: RR,
            cosmetics: tR,
            showSwatch: ZR
          }
        }));
        DJ.set(yR, GR)
      }
      const cJ = Array.from(OJ.keys()),
        PJ = new Map;
      for (const [yR, tR] of Object.entries(LR.b)) {
        const RR = DR.b[tR.cosmeticPack],
          JR = (0, HR.C)(tR.cosmetics, XJ),
          GR = void 0 !== GJ(yR);
        (RR.clientSelectable || GR || JR) && ((!RR.purchasable || JR || BJ) && (PJ.has(tR.cosmeticPack) || PJ.set(tR.cosmeticPack, []), PJ.get(tR.cosmeticPack).push([yR, tR])))
      }
      const IJ = Array.from(PJ.keys()),
        mJ = BJ ? tJ(fR, OR, XJ) : [],
        [zJ, SJ] = (0, yR.useState)(!1);
      return !zJ && (mJ.length > 0 || null !== FR) && SJ(!0), (0, YR.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === WR || "nameColour" === WR) && !(0, rR.e)(lJ) && (0, YR.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, YR.jsx)(IR.d, {
            name: "bolt"
          }), MR((0, BR.s)(Date.now()).unlockWithKey), BJ && (0, YR.jsx)(XR.n, {
            onClick: () => {
              TR()
            },
            children: MR("general:getItNow")
          })]
        }), (0, YR.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === fR && (0, YR.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, YR.jsx)(kR, {
              wornOutfit: (0, UR.i)(iJ.current),
              onApply: RR => {
                CJ(RR, {
                  undoable: !0
                })
              },
              onOverwrite: (RR, JR) => {
                yJ({
                  kind: "slot",
                  slot: RR,
                  outfit: JR
                })
              },
              onDelete: RR => {
                yJ((JR => "slot" === (null === JR || void 0 === JR ? void 0 : JR.kind) && JR.slot === RR ? null : JR))
              }
            }), IJ.map((RR => {
              const JR = PJ.get(RR);
              return (0, YR.jsx)(rJ, {
                pack: RR,
                ownedPacks: XJ,
                showStoreLink: !DR.o.includes(RR) && JR.some((RR => {
                  let [, {
                    cosmetics: JR
                  }] = RR;
                  return JJ(JR, XJ)
                })),
                children: (0, YR.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: JR.map((RR => {
                    let [JR, {
                      cosmetics: GR
                    }] = RR;
                    const yR = JJ(GR, XJ),
                      tR = !yR && function(RR, JR) {
                        return Object.entries(JR).some((JR => {
                          let [GR, yR] = JR;
                          return VJ(RR, GR, yR)
                        }))
                      }(MJ, GR),
                      uR = yR || tR,
                      ZR = (0, UR.b)(GR, OR),
                      qR = !ZR && (0, UR.b)(GR, iJ.current);
                    return (0, YR.jsx)(KJ, {
                      locked: tR,
                      children: (0, YR.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: VR()("CharacterPresetCard", {
                          CharacterPresetCardActive: qR,
                          CharacterPresetCardTryingOn: ZR
                        }),
                        onClick: () => {
                          uR ? function(RR) {
                            (0, UR.b)(RR, OR) ? oR({}): oR({
                              ...RR
                            })
                          }(GR) : CJ(GR, {
                            undoable: !0
                          })
                        },
                        children: [(0, YR.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(${(0,PR.g)(JR)})`
                          }
                        }), uR && (0, YR.jsx)(IR.d, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, JR)
                  }))
                })
              }, RR)
            }))]
          }), "emote" === fR && (0, YR.jsx)(eJ, {
            equippedEmoteIds: (0, nR.h)(iJ.current.emote),
            ownedPacks: XJ,
            canBuy: BJ,
            onUpdateLoadout: RR => {
              const JR = (0, nR.k)(RR);
              var GR;
              iJ.current = {
                ...iJ.current,
                emote: JR
              }, pR.setPlayerCosmetics("emote", JR), bR(), GR = JR, nJ.current = GR, null !== LJ.current && clearTimeout(LJ.current), LJ.current = setTimeout(UJ, 350)
            },
            onEmoteSelected: ZJ,
            onEquipPreviewSkin: () => {
              ! function(RR, JR) {
                for (const GR of KR.w)(0, LR.d)(GR) && RR(GR, "skin" === GR ? "skin_preview" : `${GR}_none`, !1);
                JR()
              }(WJ, bR)
            }
          }), "characters" !== fR && "emote" !== fR && (0, YR.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, cJ.map((RR => {
              const JR = DJ.get(RR);
              return (0, YR.jsx)(rJ, {
                pack: RR,
                ownedPacks: XJ,
                children: JR.map((JR => {
                  var GR;
                  let {
                    groupName: yR,
                    cosmetics: tR,
                    showSwatch: uR
                  } = JR;
                  const ZR = yR ? null === (GR = DR.b[RR].colourGroups) || void 0 === GR ? void 0 : GR[yR] : void 0,
                    qR = `${RR}_${WR}_${yR}`;
                  return (0, YR.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [uR && ZR && (0, YR.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...ZR.colours.map(((RR, JR) => ({
                        color: RR,
                        index: JR
                      })))].sort(((RR, JR) => RR.color.order - JR.color.order)).map((JR => {
                        var GR;
                        let {
                          color: tR,
                          index: uR
                        } = JR;
                        return (0, YR.jsx)("div", {
                          className: VR()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (GR = jR[qR]) && void 0 !== GR ? GR : (0, DR.g)(ZR.colours)) === uR
                          }),
                          style: {
                            backgroundColor: `rgb(${tR.rbg.join(",")})`
                          },
                          onClick: () => {
                            var JR;
                            dR((RR => ({
                              ...RR,
                              [qR]: uR
                            })));
                            const GR = OR[WR],
                              tR = GR ? (0, aR.m)(WR, GR) : null,
                              ZR = (null === tR || void 0 === tR ? void 0 : tR.cosmeticPack) === RR,
                              iR = ZR ? GR : iJ.current[WR],
                              fR = ZR ? tR : (0, aR.m)(WR, iR);
                            if ((null === fR || void 0 === fR ? void 0 : fR.cosmeticPack) !== RR) return;
                            if ((null !== (JR = null === fR || void 0 === fR ? void 0 : fR.colourGroup) && void 0 !== JR ? JR : null) !== yR) return;
                            const VR = (0, aR.i)(iR);
                            if (VR) {
                              const RR = `${WR}_${VR[0]}_${uR}`;
                              RJ(WR, RR, XJ) || VJ(MJ, WR, RR) ? oR((JR => ({
                                ...JR,
                                [WR]: RR
                              }))) : (ZR && AJ(WR), WJ(WR, RR, !0))
                            }
                          }
                        }, tR.rbg.join())
                      }))
                    }), tR.map((RR => {
                      const JR = RR === iJ.current[WR],
                        GR = OR[WR] === RR,
                        yR = RJ(WR, RR, XJ),
                        tR = !yR && VJ(MJ, WR, RR),
                        uR = yR || tR,
                        ZR = uR || JR ? [] : function(RR, JR, GR) {
                          if ("cape" === RR) {
                            const {
                              needsSuperRankPerks: RR,
                              rank: yR
                            } = wR.j[JR];
                            return [...RR && !(0, rR.e)(GR) ? [rR.t.rank] : [], ...void 0 === yR || GR.includes(yR) ? [] : [yR]]
                          }
                          return "nameColour" !== RR || (0, QR.Qd)(GR, JR) ? [] : [rR.t.rank]
                        }(WR, RR, lJ),
                        qR = 0 === ZR.length;
                      return (0, YR.jsx)(KJ, {
                        locked: tR,
                        children: (0, YR.jsxs)("div", {
                          "data-pad-focusable": !0,
                          className: VR()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: JR && !GR,
                            TryingOnCharCustomPartWrapper: GR,
                            DisabledCharCustomPartWrapper: !qR,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === WR
                          }),
                          onClick: () => {
                            if (!qR) return JR = {
                              ft: WR,
                              Vt: RR,
                              missingRanks: ZR,
                              playerRanks: lJ,
                              canBuy: BJ
                            }, void ER.NotificationProvider.showCustomPopup({
                              body: RR => (0, YR.jsx)(sR, {
                                ...JR,
                                closePopup: RR
                              }),
                              disableExitButton: !0
                            });
                            var JR;
                            if (uR) oR((JR => {
                              if (JR[WR] === RR) {
                                const RR = {
                                  ...JR
                                };
                                return delete RR[WR], RR
                              }
                              return {
                                ...JR,
                                [WR]: RR
                              }
                            }));
                            else {
                              var GR;
                              if (OR[WR] && AJ(WR), RR === iJ.current[WR]) return;
                              null !== (GR = wJ.current) && void 0 !== GR && GR.isReady() && WJ(WR, RR, !0)
                            }
                          },
                          children: ["profileEffect" === WR ? (0, YR.jsx)(cR.b, {
                            profileEffect: RR,
                            name: pR.getPlayerName(),
                            cosmetics: pR.getPlayerCosmetics()
                          }) : (0, YR.jsx)(SR.e, {
                            ft: WR,
                            Vt: RR
                          }), uR && (0, YR.jsx)(IR.d, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, RR)
                    }))]
                  }, null !== yR && void 0 !== yR ? yR : "ungrouped")
                }))
              }, RR)
            }))]
          }), (0, YR.jsxs)("div", {
            className: "CharCustomisationPreviewColumn",
            children: [(0, YR.jsx)(NR.CharacterPreview, {
              ref: wJ,
              forcedCosmetics: OR,
              wq: uJ.id,
              emotePlaySeq: uJ.seq,
              nametag: bJ,
              onReady: () => {
                for (const RR of KR.w) WJ(RR, iJ.current[RR], !1)
              },
              onDrawn: RR => {
                var JR, GR;
                const yR = null === (JR = wJ.current) || void 0 === JR || null === (GR = JR.getDevTools()) || void 0 === GR ? void 0 : GR.canvas(),
                  tR = (RR, JR) => 0 === Object.keys(zR.current).length && JSON.stringify(pR.getPlayerCosmetics()) === RR && aJ.current.seq === JR.seq && null === aJ.current.id,
                  qR = JSON.stringify(pR.getPlayerCosmetics()),
                  iR = aJ.current;
                if (!uR.p || !RR || void 0 === yR || !tR(qR, iR)) return;
                const fR = (0, ZR.h)(pR),
                  VR = wJ.current;
                VR.setNametagShown(!1), (0, ZR.d)(yR, fR, (() => tR(qR, iR))).catch((RR => {
                  console.warn("[loading-character] couldn't keep your picture from Customise", RR)
                })).finally((() => {
                  VR.setNametagShown(!0)
                }))
              }
            }), zJ && (0, YR.jsxs)("div", {
              className: "CharCustomisationPreviewActions",
              children: [mJ.length > 0 && (0, YR.jsx)(qJ, {
                gets: mJ
              }), FR && (0, YR.jsxs)(XR.g, {
                className: "CharCustomisationUndo",
                onClick: () => {
                  "worn" === FR.kind ? CJ(FR.outfit, {
                    undoable: !1
                  }) : (xR.save(FR.slot, FR.outfit), yJ(null))
                },
                children: [(0, YR.jsx)(IR.d, {
                  name: "rotate-left"
                }), MR("general:undo")]
              })]
            })]
          })]
        })]
      })
    }))
  },
  44996: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      CharacterPreview: () => rR
    });
    var yR = GR(66),
      tR = GR(3909),
      uR = GR(1336),
      ZR = GR(3644),
      qR = GR(35193),
      iR = GR(4955),
      fR = GR(1378);
    let VR = null;
    const KR = [],
      wR = .6 * Math.PI,
      rR = (0, yR.memo)((0, yR.forwardRef)((function(RR, JR) {
        let {
          onReady: GR,
          onDrawn: rR,
          onSetupFailed: eR,
          owner: aR = "other",
          framing: LR = "player",
          forcedCosmetics: nR,
          wq: UR,
          emotePlaySeq: WR,
          turntableFromYaw: AR = null,
          nametag: CR
        } = RR;
        const XR = (0, yR.useRef)(null),
          {
            width: MR,
            height: BR
          } = (0, tR.b)(XR),
          lR = (0, yR.useRef)({
            width: MR,
            height: BR
          });
        lR.current = {
          width: MR,
          height: BR
        };
        const pR = (0, yR.useRef)(null),
          gR = (0, yR.useRef)({}),
          bR = (0, yR.useRef)({}),
          [vR, OR] = (0, yR.useState)(!1),
          xR = (0, yR.useRef)(GR);
        xR.current = GR;
        const NR = (0, yR.useRef)(rR);
        NR.current = rR;
        const DR = (0, yR.useRef)(eR);
        DR.current = eR;
        const HR = (0, yR.useRef)(null),
          oR = (0, yR.useRef)(!1),
          cR = (0, yR.useRef)(CR);
        cR.current = CR;
        const PR = (0, yR.useRef)(!0),
          IR = (0, yR.useRef)(!1),
          mR = (0, yR.useCallback)((() => {
            const RR = pR.current;
            if (!RR || !NR.current || oR.current || !IR.current) return;
            const JR = {};
            HR.current = JR, queueMicrotask((() => {
              if (HR.current !== JR) return;
              const GR = Promise.all(uR.w.map((JR => RR.untilDrawn(JR)))).then((() => !0), (RR => (console.error("Failed to draw the character preview", RR), !1))),
                yR = new Promise((RR => {
                  setTimeout((() => {
                    RR(!1)
                  }), 1e4)
                }));
              Promise.race([GR, yR]).then((GR => {
                const yR = NR.current;
                pR.current === RR && HR.current === JR && !oR.current && yR && (oR.current = !0, yR(GR))
              }))
            }))
          }), []);
        return (0, yR.useImperativeHandle)(JR, (() => {
          const RR = (RR, JR) => {
            var GR;
            (gR.current[RR] = JR, null !== nR && void 0 !== nR && nR[RR]) || (null === (GR = pR.current) || void 0 === GR || GR.setCosmetic(RR, JR), mR())
          };
          return {
            updateCosmetic: RR,
            setAllCosmetics(JR) {
              for (const yR of uR.w) {
                var GR;
                RR(yR, null !== (GR = JR[yR]) && void 0 !== GR ? GR : (0, ZR.c)(yR))
              }
            },
            isReady() {
              var RR, JR;
              return null !== (RR = null === (JR = pR.current) || void 0 === JR ? void 0 : JR.isReady()) && void 0 !== RR && RR
            },
            resetCamera() {
              var RR;
              null === (RR = pR.current) || void 0 === RR || RR.resetCamera()
            },
            setOrbit(RR) {
              var JR;
              null === (JR = pR.current) || void 0 === JR || JR.setOrbit(RR)
            },
            turnCamera(RR) {
              var JR;
              const GR = qR.d[LR];
              null === (JR = pR.current) || void 0 === JR || JR.setOrbit({
                ...GR,
                yaw: GR.yaw + RR
              })
            },
            async ensureReadyForCapture(RR) {
              var JR;
              await (null === (JR = pR.current) || void 0 === JR ? void 0 : JR.untilDrawn(RR))
            },
            getDevTools() {
              var RR;
              return null !== (RR = pR.current) && void 0 !== RR && RR.isReady() ? pR.current.dev : null
            },
            setNametagShown(RR) {
              var JR, GR;
              PR.current = RR, null === (JR = pR.current) || void 0 === JR || JR.setNametag(RR && null !== (GR = cR.current) && void 0 !== GR ? GR : null)
            }
          }
        }), [nR, LR, mR]), (0, yR.useEffect)((() => {
          const RR = iR.b.register(aR);
          let JR = !0;
          const GR = RR => {
            const GR = pR.current,
              yR = qR.g.openCharacter(XR.current, LR);
            if (pR.current = yR, VR = yR, GR) {
              GR.close();
              const {
                width: RR,
                height: JR
              } = lR.current;
              RR > 0 && JR > 0 && yR.resize(RR, JR)
            }
            bR.current = {}, OR(!1), yR.ready.then((() => {
              if (JR && pR.current === yR)
                if (OR(!0), RR) {
                  yR.resetCamera();
                  for (const RR of uR.w) {
                    var GR;
                    yR.setCosmetic(RR, null !== (GR = gR.current[RR]) && void 0 !== GR ? GR : (0, ZR.c)(RR))
                  }
                } else xR.current()
            })).catch((RR => {
              var GR;
              (console.error("Failed to set up the character preview", RR), JR && pR.current === yR) && (null === (GR = DR.current) || void 0 === GR || GR.call(DR))
            }))
          };
          GR(!1);
          const yR = {
            reopen: () => {
              GR(!0)
            }
          };
          return KR.push(yR), () => {
            JR = !1, RR();
            const GR = pR.current;
            VR === GR && (GR.resetCamera(), VR = null), GR.close(), pR.current = null;
            const tR = KR.indexOf(yR);
            if (KR.splice(tR, 1), tR === KR.length && tR > 0) {
              const RR = KR[tR - 1];
              queueMicrotask((() => {
                KR.at(-1) === RR && null === VR && qR.g.sharesCharacter() && RR.reopen()
              }))
            }
          }
        }), []), (0, yR.useEffect)((() => {
          MR <= 0 || BR <= 0 || pR.current.resize(MR, BR)
        }), [MR, BR]), (0, yR.useEffect)((() => {
          if (!vR) return;
          const RR = bR.current;
          for (const JR of uR.w) {
            const GR = null === nR || void 0 === nR ? void 0 : nR[JR],
              yR = RR[JR];
            GR && GR !== yR ? pR.current.setCosmetic(JR, GR) : !GR && yR && gR.current[JR] && pR.current.setCosmetic(JR, gR.current[JR])
          }
          bR.current = {
            ...nR
          }, IR.current = !0, mR()
        }), [nR, vR, mR]), (0, yR.useEffect)((() => {
          vR && pR.current.playEmote(null !== UR && void 0 !== UR ? UR : null)
        }), [UR, WR, vR]), (0, yR.useEffect)((() => {
          vR && PR.current && pR.current.setNametag(null !== CR && void 0 !== CR ? CR : null)
        }), [CR, vR]), (0, yR.useEffect)((() => {
          if (!vR || null === AR) return;
          const RR = pR.current,
            {
              pitch: JR,
              radius: GR
            } = qR.d[LR];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return RR.setOrbit({
            yaw: AR + wR,
            pitch: JR,
            radius: GR
          }), () => {
            VR === RR && RR.resetCamera()
          };
          const yR = performance.now();
          let tR = 0;
          const uR = ZR => {
            pR.current === RR && (RR.setOrbit({
              yaw: AR + (ZR - yR) / 6e3 * 2 * Math.PI,
              pitch: JR,
              radius: GR
            }), tR = requestAnimationFrame(uR))
          };
          return tR = requestAnimationFrame(uR), () => {
            cancelAnimationFrame(tR), VR === RR && RR.resetCamera()
          }
        }), [vR, AR]), (0, fR.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: XR
        })
      })))
  },
  37444: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR
    });
    var yR = GR(2134),
      tR = GR(1647);
    const uR = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(RR, JR) {
        RR !== this.userContext && this.sendHeld(), this.userContext = RR;
        for (const [yR, tR] of JR) this.pending.set(yR, tR);
        if (null !== this.timer) return;
        const GR = this.lastSentAt + 1100 - Date.now();
        GR <= 0 ? this.send(RR) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), GR), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(RR) {
        const JR = Array.from(this.pending, (RR => {
          let [JR, GR] = RR;
          return {
            ft: JR,
            Vt: GR
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), tR.c.updateCosmetics(RR, JR).catch((RR => {
          console.error("Failed to update cosmetics", RR)
        }))
      }
    };

    function ZR(RR, JR) {
      for (const [GR, yR] of JR) RR.setPlayerCosmetics(GR, yR);
      if (null === yR.gameBridge.latest("connectedGame").websocketUrl) uR.save(RR, JR);
      else
        for (const [GR, tR] of JR) yR.gameBridge.send("updateMyCosmetic", {
          ft: GR,
          Vt: tR
        })
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);