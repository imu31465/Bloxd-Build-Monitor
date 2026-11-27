export const id = 252;
export const ids = [252, 611];
export const modules = {
  45287: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      CharacterCustomisationUI: () => tS
    });
    var Zr = Qr(72),
      Wr = Qr(3002),
      ar = Qr(4736),
      jr = Qr(4713),
      Ir = Qr(1181),
      fr = Qr(1187),
      Er = Qr(1155),
      pr = Qr.n(Er),
      xr = Qr(1287),
      mr = Qr(672),
      Nr = Qr(661),
      Ur = Qr(1251),
      tr = Qr(3139),
      hr = Qr(1686),
      zr = Qr(3601),
      Yr = Qr(38167),
      nr = Qr(3148),
      er = Qr(4280),
      Kr = Qr(2128),
      yr = Qr(1576),
      Br = Qr(3184),
      Tr = Qr(3267),
      vr = Qr(26),
      Or = Qr(3757),
      Lr = Qr(1629),
      lr = Qr(2015);
    class Xr {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(rr) {
        null !== rr && rr !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = rr)
      }
      isFor(rr) {
        return null === this.accountId || this.accountId === rr
      }
      overlay(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return rr.map(((rr, Qr) => {
          var Zr, Wr;
          return null !== (Zr = null !== (Wr = this.slots.get(Qr)) && void 0 !== Wr ? Wr : Sr.get(Qr)) && void 0 !== Zr ? Zr : rr
        }))
      }
    }
    class Pr extends Or.e {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Xr;
        super("saved outfits", (async Sr => {
          const Qr = rr.isFor(Sr.whamm),
            Zr = new Map(rr.slots),
            Wr = await Lr.c.getSavedOutfits(Sr);
          return Qr ? rr.overlay(Wr, Zr) : Wr
        })), this.unsaved = rr, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(rr, Sr) {
        var Qr, Zr;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(rr)) || this.unsaved.before.set(rr, null !== (Qr = null === (Zr = this.getState().data) || void 0 === Zr ? void 0 : Zr[rr]) && void 0 !== Qr ? Qr : {});
        this.unsaved.slots.set(rr, Sr), this.update((Qr => Qr.map(((Qr, Zr) => Zr === rr ? Sr : Qr)))), this.sending || this.sendUnsaved()
      }
      clear(rr) {
        this.save(rr, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let rr = !1;
        for (; this.unsaved.slots.size > 0;) {
          const Qr = new Map(this.unsaved.slots);
          let Zr = this.getState().accountId;
          try {
            const rr = await fr.userContextManager.getCurrentUserContext();
            if (Zr = rr.whamm, this.unsaved.moveTo(rr.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: Sr,
              data: Wr
            } = this.getState();
            let ar = Wr;
            Sr === rr.whamm && null !== ar || (ar = this.unsaved.overlay(await Lr.c.getSavedOutfits(rr)), this.refresh()), await Lr.c.setSavedOutfits(rr, ar), this.unsaved.isFor(rr.whamm) && ar.forEach(((rr, Sr) => {
              const Zr = this.unsaved.slots.get(Sr);
              void 0 === Zr || Zr === Qr.get(Sr) ? this.unsaved.before.delete(Sr) : this.unsaved.before.set(Sr, rr)
            }))
          } catch (Sr) {
            if (console.error("Failed to save outfits", Sr), this.getState().accountId === Zr && [...this.unsaved.slots].every((rr => {
                let [Sr, Zr] = rr;
                return Qr.get(Sr) === Zr
              }))) {
              const Sr = [...Qr.values()].every(Yr.f);
              lr.h.showMessage({
                translationKey: Sr ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const Zr = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((rr => rr.map(((rr, Sr) => {
                var Qr;
                return null !== (Qr = Zr.get(Sr)) && void 0 !== Qr ? Qr : rr
              })))), rr = !0
            }
          }
          for (const [rr, Sr] of Qr) this.unsaved.slots.get(rr) === Sr && this.unsaved.slots.delete(rr)
        }
        this.sending = !1, rr && this.refresh()
      }
    }
    const Hr = new Pr;
    var qr = Qr(45289),
      Rr = Qr(1684),
      gr = Qr(3242),
      Cr = Qr(4100),
      Mr = Qr(4278),
      Gr = Qr(3208),
      kr = Qr(1448);
    Qr(35505), Qr(4287);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var Ar = Qr(3192),
      Vr = Qr(4293),
      ir = Qr(4297),
      wr = Qr(1489),
      cr = Qr(3320),
      Fr = Qr(1475),
      or = Qr(1338);

    function br(rr) {
      let {
        wornOutfit: Sr,
        onApply: Qr,
        onOverwrite: Wr,
        onDelete: ar
      } = rr;
      const {
        t: jr
      } = (0, Ur.E)(), {
        accountId: fr,
        data: Er
      } = (0, Or.j)(Hr, !1), {
        userContext: xr
      } = (0, Ir.c)();
      async function mr(rr, Sr) {
        const Qr = await Fr.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: Zr,
            data: Wr
          } = Hr.getState();
        var jr, Ir;
        !0 === Qr && Zr === fr && null !== Wr && (jr = Wr[rr], Ir = Sr, (0, Yr.e)(jr, Ir) && (0, Yr.e)(Ir, jr)) && (Hr.clear(rr), ar(rr))
      }
      return (0, Zr.useEffect)((() => {
        Hr.ensureLoaded()
      }), []), null === Er || fr !== xr.whamm ? null : (0, or.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, or.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, or.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: jr("homePage:myOutfits")
          })
        }), (0, or.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: Er.map(((rr, Zr) => {
            const ar = (0, Yr.f)(rr);
            return (0, or.jsxs)("div", {
              className: pr()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !ar
              }),
              children: [(0, or.jsxs)("div", {
                ...(0, yr._)(),
                role: ar ? "button" : "link",
                "data-pad-focusable": !0,
                className: pr()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: ar,
                  CharacterPresetCardActive: !ar && (0, Yr.e)(rr, Sr)
                }),
                onClick: () => {
                  ar ? Hr.save(Zr, Sr) : Qr(rr)
                },
                children: [ar && (0, or.jsxs)(or.Fragment, {
                  children: [(0, or.jsx)(kr.c, {
                    name: "plus"
                  }), jr("homePage:saveOutfit")]
                }), !ar && (0, or.jsxs)(or.Fragment, {
                  children: [(0, or.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, or.jsx)(cr.b, {
                      cosmetics: rr
                    })
                  }), (0, or.jsx)(yr.U, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      (0, Yr.e)(Sr, rr) || (Hr.save(Zr, Sr), Wr(Zr, rr))
                    },
                    children: jr("general:save")
                  })]
                })]
              }), !ar && (0, or.jsx)("button", {
                type: "button",
                className: "SavedOutfitDeleteButton",
                "data-pad-destructive": !0,
                "aria-label": jr("general:delete"),
                title: jr("general:delete"),
                onClick: () => {
                  mr(Zr, rr)
                },
                children: (0, or.jsx)(kr.c, {
                  name: "trash-can"
                })
              })]
            }, Zr)
          }))
        })]
      })
    }
    var Jr = Qr(379),
      Dr = Qr(1481);

    function dr() {
      (0, Br.o)({
        mode: "self",
        source: "characterCustomisation",
        openItem: "superRank"
      })
    }

    function sr(rr) {
      let {
        fW: Sr,
        EW: Qr,
        missingRanks: Zr,
        playerRanks: Wr,
        canBuy: ar,
        closePopup: jr
      } = rr;
      const {
        t: Ir
      } = (0, Ur.E)(), fr = (0, Tr.r)(Date.now()), Er = Nr.r.find((rr => Wr.includes(rr.rank))), pr = Ir((void 0 === Er ? fr : (0, Tr.l)(Er.id)).nameKey), {
        title: xr,
        subtitle: tr,
        textOpts: hr,
        soldRankUnlocks: zr
      } = function(rr, Sr, Qr, Zr) {
        const Wr = rr.find((rr => !(0, Nr.j)(Nr.r, rr)));
        if (void 0 === Wr) return {
          title: Qr.unlockWithKey,
          soldRankUnlocks: !0
        };
        if ("youtuber" === Wr) return {
          title: "homePage:youtuberCape",
          subtitle: "homePage:youtuberCapeHow",
          textOpts: {
            subtitle: {
              tierRank: Zr
            }
          },
          soldRankUnlocks: !1
        };
        const ar = {
          rank: mr.k[Wr].chatTag[0].str
        };
        return {
          title: "homePage:creatorCape",
          subtitle: Sr.some(mr.n) ? "homePage:creatorCapeOtherTier" : "homePage:creatorCapeHow",
          textOpts: {
            title: ar,
            subtitle: {
              ...ar,
              tierRank: Zr
            }
          },
          soldRankUnlocks: !1
        }
      }(Zr, Wr, fr, pr), Yr = ar && zr;
      return (0, or.jsx)(Dr.j, {
        className: "RankLockedCosmeticPopup",
        title: xr,
        subtitle: tr,
        textOpts: hr,
        confirm: Yr ? {
          text: "general:getItNow",
          onClick: () => {
            jr(), dr()
          }
        } : {
          text: "general:ok",
          onClick: jr
        },
        cancel: Yr ? {
          text: "general:cancel",
          onClick: jr
        } : void 0,
        children: (0, or.jsx)("div", {
          className: "RankLockedCosmeticPicture",
          children: (0, or.jsx)(ir.e, {
            fW: Sr,
            EW: Qr
          })
        })
      })
    }
    var ur = Qr(37827);

    function rS(rr, Sr, Qr) {
      return !(0, gr.y)(rr, Sr) && !(0, gr.E)(rr, Sr, Qr)
    }

    function SS(rr, Sr) {
      return !(0, gr.C)(rr, Sr)
    }

    function QS(rr) {
      return Rr.l.find((Sr => (0, Rr.d)(Sr) === rr))
    }

    function ZS(rr, Sr, Qr) {
      var Zr;
      if (!rS(rr, Sr, Qr)) return null;
      const Wr = (0, tr.k)(rr, Sr).cosmeticPack;
      return Rr.s.includes(Wr) ? Wr : null !== (Zr = (0, gr.h)(rr, Sr).find((rr => Rr.s.includes(rr)))) && void 0 !== Zr ? Zr : null
    }

    function WS(rr, Sr, Qr) {
      const Zr = function(rr, Sr) {
          for (const [Zr, Wr] of Object.entries(hr.e)) {
            var Qr;
            if (!(0, Yr.e)(Wr.cosmetics, rr) || !SS(Wr.cosmetics, Sr)) continue;
            const ar = null !== (Qr = QS(Zr)) && void 0 !== Qr ? Qr : Wr.cosmeticPack;
            if (Object.entries(Wr.cosmetics).every((rr => {
                let [Qr, Zr] = rr;
                return !rS(Qr, Zr, Sr) || (0, gr.e)(ar, Qr, Zr)
              })) && Rr.s.includes(ar)) return ar
          }
          return null
        }(Sr, Qr),
        Wr = null === Zr ? [] : [{
          kind: "characters",
          pack: Zr
        }],
        ar = "characters" === rr ? xr.A : [rr, ...xr.A.filter((Sr => Sr !== rr))];
      for (const jr of ar) {
        const rr = Sr[jr];
        if (void 0 === rr || null !== Zr && (0, gr.e)(Zr, jr, rr)) continue;
        const ar = ZS(jr, rr, Qr);
        if (null === ar) continue;
        const Ir = void 0 === (0, Rr.d)(ar) ? -1 : Wr.findIndex((rr => rr.pack === ar)); - 1 === Ir ? Wr.push({
          kind: jr,
          pack: ar
        }) : Wr[Ir] = {
          kind: "characters",
          pack: ar
        }
      }
      return Wr
    }
    var aS = Qr(3043);
    const jS = {
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

    function IS(rr) {
      let {
        gets: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Ur.E)();
      return (0, or.jsx)("div", {
        className: "CharCustomisationGetTriedOn",
        children: Sr.map((rr => {
          let {
            kind: Sr,
            pack: Zr
          } = rr;
          return (0, or.jsxs)(yr.p, {
            className: "CharCustomisationGetPiece",
            onClick: () => {
              (0, Cr.g)(Zr, "triedOnGet")
            },
            children: [(0, or.jsx)(kr.c, {
              name: "store"
            }), "characters" === Sr ? Qr("homePage:getPack", {
              name: (0, aS.j)(Zr)
            }) : Qr(jS[Sr])]
          }, Sr + Zr)
        }))
      })
    }
    var fS = Qr(3587),
      ES = Qr(3593);

    function pS(rr, Sr, Qr) {
      return null !== rr && !(0, fS.e)(ES.b, Sr, Qr, rr.collected, rr.ownedPacks)
    }

    function xS(rr) {
      let {
        locked: Sr,
        children: Qr
      } = rr;
      return Sr ? (0, or.jsx)(mS, {
        children: Qr
      }) : Qr
    }

    function mS(rr) {
      var Sr;
      let {
        children: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Ur.E)(), {
        userContext: Wr
      } = (0, Ir.c)(), ar = null !== (Sr = Wr.dailyDrop) && void 0 !== Sr && Sr.hidden ? Zr("dailyDrop:lockedFromHidden") : Zr("dailyDrop:lockedFrom");
      return (0, or.jsx)(wr.f, {
        tooltipInner: (0, or.jsx)(or.Fragment, {
          children: ar
        }),
        children: Qr
      })
    }

    function NS(rr) {
      let {
        pack: Sr,
        ownedPacks: Qr,
        showStoreLink: Zr = !1,
        children: Wr
      } = rr;
      const {
        t: ar
      } = (0, Ur.E)(), jr = Rr.b[Sr].purchasable && !Qr.includes(Sr) && Rr.s.includes(Sr), Ir = Cr.i[Sr];
      return (0, or.jsxs)("div", {
        className: pr()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: jr
        }),
        children: [Ir && (0, or.jsx)(Ir, {}), (0, or.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, or.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: (0, aS.j)(Sr)
          }), (jr || Zr) && (0, or.jsxs)(yr.F, {
            onClick: () => {
              jr ? (0, Cr.g)(Sr) : (0, Br.o)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, or.jsx)(kr.c, {
              name: "store"
            }), " ", ar("general:viewInShop")]
          })]
        }), jr && "bee" === Sr && (0, or.jsx)(Cr.b, {}), Wr]
      })
    }

    function US(rr) {
      let {
        equippedEmoteIds: Sr,
        ownedPacks: Qr,
        canBuy: Zr,
        onUpdateLoadout: Wr,
        onEmoteSelected: ar,
        onEquipPreviewSkin: jr
      } = rr;
      const {
        t: Ir
      } = (0, Ur.E)(), fr = new Set(Sr), Er = new Map, mr = Object.keys(tr.f.emote).sort(((rr, Sr) => {
        var Qr, Zr, Wr, ar;
        return (null !== (Qr = null === (Zr = (0, tr.k)("emote", rr)) || void 0 === Zr ? void 0 : Zr.clientIdx) && void 0 !== Qr ? Qr : 0) - (null !== (Wr = null === (ar = (0, tr.k)("emote", Sr)) || void 0 === ar ? void 0 : ar.clientIdx) && void 0 !== Wr ? Wr : 0)
      })).filter((rr => {
        const Sr = (0, tr.m)("emote", rr),
          Wr = (0, gr.E)("emote", rr, Qr);
        return !(Sr.purchasable && !Wr && !Zr) && (Sr.clientSelectable || Wr)
      }));
      for (const pr of mr) {
        const rr = (0, tr.k)("emote", pr).cosmeticPack;
        Er.has(rr) || Er.set(rr, []), Er.get(rr).push(pr)
      }
      const Nr = Array.from(Er.keys());
      return (0, or.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, or.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, or.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: Ir("emotes:equippedCount", {
              count: Sr.length,
              max: xr.q
            })
          }), (0, or.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: Ir("emotes:loadoutHint")
          })]
        }), Nr.map((rr => {
          const Zr = Er.get(rr);
          return (0, or.jsx)(NS, {
            pack: rr,
            ownedPacks: Qr,
            children: (0, or.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: Zr.map((rr => {
                var Zr;
                const jr = Sr.indexOf(rr),
                  Er = -1 !== jr,
                  mr = Sr.length >= xr.q,
                  Nr = rS("emote", rr, Qr),
                  Ur = Nr || !Er && mr,
                  tr = (0, nr.h)(rr);
                return (0, or.jsxs)("div", {
                  className: pr()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Er
                  }),
                  onClick: () => {
                    ar(rr)
                  },
                  children: [(0, or.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, or.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(${(0,Vr.d)("emote",rr)})`
                      },
                      "aria-hidden": !0
                    }), (0, or.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (Zr = null === tr || void 0 === tr ? void 0 : tr.displayName) && void 0 !== Zr ? Zr : rr
                    })]
                  }), (0, or.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Er && (0, or.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: jr + 1
                    }), Nr && (0, or.jsx)(kr.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, or.jsx)(wr.f, {
                      tooltipInner: (0, or.jsx)(or.Fragment, {
                        children: Ir(Er ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, or.jsx)("div", {
                        className: pr()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: Ur,
                          EmoteCustomPartToggleEquipped: Er
                        }),
                        onClick: Qr => {
                          Qr.stopPropagation(), Ur || function(rr) {
                            fr.has(rr) ? Wr(Sr.filter((Sr => Sr !== rr))) : Sr.length >= xr.q || Wr([...Sr, rr])
                          }(rr)
                        },
                        children: (0, or.jsx)(kr.c, {
                          name: Er ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, rr)
              }))
            })
          }, rr)
        }))]
      })
    }
    const tS = (0, Zr.memo)((function(rr) {
      var Sr, Qr;
      let {
        selectedTab: Er
      } = rr;
      const nr = "characters" === Er ? "skin" : Er,
        {
          t: Br
        } = (0, Ur.E)(),
        {
          userContext: Or,
          isUserContextUpdating: Lr
        } = (0, Ir.c)(),
        lr = (0, Wr.e)(),
        {
          gameState: Xr
        } = (0, vr.n)(["gameState"]),
        [Pr, Cr] = (0, Zr.useState)({}),
        Vr = (0, Zr.useRef)(Pr);
      Vr.current = Pr;
      const [wr, cr] = (0, Zr.useState)({}), [Dr, ZS] = (0, Zr.useState)(null), {
        previewEmote: aS,
        triggerEmote: jS
      } = (0, er.d)(), fS = (0, Zr.useRef)(xr.A.reduce(((rr, Sr) => (rr[Sr] = (0, zr.b)(Sr), rr)), {})), ES = (0, Zr.useRef)(!1), mS = (0, Zr.useRef)(null), tS = (0, Zr.useRef)(aS);
      tS.current = aS;
      const hS = (0, Zr.useRef)(null),
        zS = (0, Zr.useRef)(null);

      function YS() {
        null !== hS.current && (clearTimeout(hS.current), hS.current = null);
        const rr = zS.current;
        null !== rr && (zS.current = null, (0, ur.b)(Or, [
          ["emote", rr]
        ]))
      }

      function nS(rr, Sr, Qr) {
        var Zr, Wr, ar;
        fS.current = {
          ...fS.current,
          [rr]: Sr
        }, lr(), Qr && ((0, ur.b)(Or, [
          [rr, Sr]
        ]), ZS(null));
        const jr = (0, tr.k)(rr, Sr);
        if (null !== jr && void 0 !== jr && jr.colourGroup && null !== (Zr = Rr.b[jr.cosmeticPack].colourGroups) && void 0 !== Zr && null !== (Wr = Zr[jr.colourGroup]) && void 0 !== Wr && Wr.showSwatchSelector) {
          const Qr = (0, tr.g)(Sr);
          Qr && cr((Sr => ({
            ...Sr,
            [`${jr.cosmeticPack}_${rr}_${jr.colourGroup}`]: parseInt(Qr[1])
          })))
        }
        null !== (ar = mS.current) && void 0 !== ar && ar.isReady() && mS.current.updateCosmetic(rr, Sr)
      }

      function eS(rr) {
        Cr((Sr => {
          const Qr = {
            ...Sr
          };
          return delete Qr[rr], Qr
        }))
      }

      function KS(rr, Sr) {
        let {
          undoable: Qr
        } = Sr;
        Object.keys(Pr).length > 0 && Cr({});
        const Zr = function(rr, Sr, Qr, Zr) {
          return Object.entries(rr).filter((rr => {
            let [Wr, ar] = rr;
            return Sr[Wr] !== ar && !rS(Wr, ar, Qr) && !Zr(Wr, ar)
          }))
        }(rr, fS.current, yS, ((rr, Sr) => pS(BS, rr, Sr)));
        Qr ? Zr.length > 0 && ZS({
          kind: "worn",
          outfit: (0, Yr.g)(fS.current)
        }) : ZS(null);
        for (const [Wr, ar] of Zr) nS(Wr, ar, !1);
        Zr.length > 0 && (0, ur.b)(Or, Zr)
      }(0, Kr.d)("cosmeticsUpdated", (rr => {
        let Sr = !1;
        for (const {
            local: Qr,
            fW: Zr,
            EW: Wr
          }
          of rr) {
          if (!Qr) return;
          Sr = !0, ES.current || nS(Zr, Wr, !1), lr()
        }
        Sr && (ES.current = !0)
      })), (0, Zr.useEffect)((() => {
        if (!Lr) {
          for (const [rr, Sr] of Object.entries(Or.getPlayerCosmetics())) nS(rr, Sr, !1);
          lr()
        }
      }), [Lr]), (0, Zr.useEffect)((() => () => {
        YS()
      }), []);
      const yS = Or.getOwnedCosmeticPacks(),
        BS = function(rr, Sr) {
          return null === rr ? null : {
            collected: new Set(rr.collected),
            ownedPacks: Sr
          }
        }(Or.dailyDrop, yS),
        TS = (0, Ar.usePurchasesAllowed)(),
        vS = Or.getPlayerRanks(),
        OS = Or === fr.NULL_USER_CONTEXT ? "" : Or.getPlayerName(),
        LS = null !== (Sr = null !== (Qr = Pr.nameColour) && void 0 !== Qr ? Qr : Or.getPlayerCosmetics().nameColour) && void 0 !== Sr ? Sr : mr.e,
        lS = (0, Zr.useMemo)((() => ({
          name: OS,
          ranks: vS,
          nameColour: LS
        })), [OS, vS, LS]),
        XS = Object.keys(tr.f[nr]).filter((rr => {
          const Sr = (0, tr.m)(nr, rr),
            Qr = (0, gr.E)(nr, rr, yS);
          return !(Sr.purchasable && !Qr && !TS) && (Sr.clientSelectable || Qr)
        })).sort(((rr, Sr) => {
          var Qr, Zr, Wr, ar;
          return (null !== (Qr = null === (Zr = (0, tr.k)(nr, rr)) || void 0 === Zr ? void 0 : Zr.clientIdx) && void 0 !== Qr ? Qr : 0) - (null !== (Wr = null === (ar = (0, tr.k)(nr, Sr)) || void 0 === ar ? void 0 : ar.clientIdx) && void 0 !== Wr ? Wr : 0)
        })),
        PS = new Map;
      for (const Zr of XS) {
        var HS;
        const rr = null === (HS = (0, tr.k)(nr, Zr)) || void 0 === HS ? void 0 : HS.cosmeticPack;
        PS.has(rr) || PS.set(rr, []), PS.get(rr).push(Zr)
      }
      const qS = function(rr, Sr) {
          const Qr = new Set,
            Zr = new Set;
          for (const [Wr, ar] of Object.entries(tr.f[rr])) {
            if (void 0 === ar.colourGroup) continue;
            const jr = `${ar.cosmeticPack}_${ar.colourGroup}`;
            (rS(rr, Wr, Sr) ? Zr : Qr).add(jr)
          }
          return new Set([...Qr].filter((rr => Zr.has(rr))))
        }(nr, yS),
        RS = new Map;
      for (const [Zr, Wr] of PS) {
        const rr = [],
          Sr = new Map;
        for (const Zr of Wr) {
          var gS, CS;
          const Qr = null !== (gS = null === (CS = (0, tr.k)(nr, Zr)) || void 0 === CS ? void 0 : CS.colourGroup) && void 0 !== gS ? gS : null;
          Sr.has(Qr) || (Sr.set(Qr, []), rr.push(Qr)), Sr.get(Qr).push(Zr)
        }
        const Qr = rr.map((rr => {
          var Qr;
          const Wr = Sr.get(rr),
            ar = rr ? null === (Qr = Rr.b[Zr].colourGroups) || void 0 === Qr ? void 0 : Qr[rr] : void 0,
            jr = !0 === (null === ar || void 0 === ar ? void 0 : ar.showSwatchSelector) && !qS.has(`${Zr}_${rr}`);
          if (jr && ar) {
            var Ir;
            const Sr = null !== (Ir = wr[`${Zr}_${nr}_${rr}`]) && void 0 !== Ir ? Ir : (0, Rr.e)(ar.colours);
            return {
              groupName: rr,
              showSwatch: jr,
              cosmetics: Wr.filter((rr => {
                const Qr = (0, tr.g)(rr);
                return !Qr || Sr.toString() === Qr[1].toString()
              }))
            }
          }
          return {
            groupName: rr,
            cosmetics: Wr,
            showSwatch: jr
          }
        }));
        RS.set(Zr, Qr)
      }
      const MS = Array.from(PS.keys()),
        GS = new Map;
      for (const [Zr, Wr] of Object.entries(hr.e)) {
        const rr = Rr.b[Wr.cosmeticPack],
          Sr = (0, gr.C)(Wr.cosmetics, yS),
          Qr = void 0 !== QS(Zr);
        (rr.clientSelectable || Qr || Sr) && ((!rr.purchasable || Sr || TS) && (GS.has(Wr.cosmeticPack) || GS.set(Wr.cosmeticPack, []), GS.get(Wr.cosmeticPack).push([Zr, Wr])))
      }
      const kS = Array.from(GS.keys()),
        AS = TS ? WS(Er, Pr, yS) : [],
        [VS, iS] = (0, Zr.useState)(!1);
      return !VS && (AS.length > 0 || null !== Dr) && iS(!0), (0, or.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === nr || "nameColour" === nr) && !(0, Nr.c)(vS) && (0, or.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, or.jsx)(kr.c, {
            name: "bolt"
          }), Br((0, Tr.r)(Date.now()).unlockWithKey), TS && (0, or.jsx)(yr.p, {
            onClick: () => {
              dr()
            },
            children: Br("general:getItNow")
          })]
        }), (0, or.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === Er && (0, or.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, or.jsx)(br, {
              wornOutfit: (0, Yr.g)(fS.current),
              onApply: rr => {
                KS(rr, {
                  undoable: !0
                })
              },
              onOverwrite: (rr, Sr) => {
                ZS({
                  kind: "slot",
                  slot: rr,
                  outfit: Sr
                })
              },
              onDelete: rr => {
                ZS((Sr => "slot" === (null === Sr || void 0 === Sr ? void 0 : Sr.kind) && Sr.slot === rr ? null : Sr))
              }
            }), kS.map((rr => {
              const Sr = GS.get(rr);
              return (0, or.jsx)(NS, {
                pack: rr,
                ownedPacks: yS,
                showStoreLink: !Rr.o.includes(rr) && Sr.some((rr => {
                  let [, {
                    cosmetics: Sr
                  }] = rr;
                  return SS(Sr, yS)
                })),
                children: (0, or.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: Sr.map((rr => {
                    let [Sr, {
                      cosmetics: Qr
                    }] = rr;
                    const Zr = SS(Qr, yS),
                      Wr = !Zr && function(rr, Sr) {
                        return Object.entries(Sr).some((Sr => {
                          let [Qr, Zr] = Sr;
                          return pS(rr, Qr, Zr)
                        }))
                      }(BS, Qr),
                      ar = Zr || Wr,
                      jr = (0, Yr.e)(Qr, Pr),
                      Ir = !jr && (0, Yr.e)(Qr, fS.current);
                    return (0, or.jsx)(xS, {
                      locked: Wr,
                      children: (0, or.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: pr()("CharacterPresetCard", {
                          CharacterPresetCardActive: Ir,
                          CharacterPresetCardTryingOn: jr
                        }),
                        onClick: () => {
                          ar ? function(rr) {
                            (0, Yr.e)(rr, Pr) ? Cr({}): Cr({
                              ...rr
                            })
                          }(Qr) : KS(Qr, {
                            undoable: !0
                          })
                        },
                        children: [(0, or.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(${(0,Gr.g)(Sr)})`
                          }
                        }), ar && (0, or.jsx)(kr.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, Sr)
                  }))
                })
              }, rr)
            }))]
          }), "emote" === Er && (0, or.jsx)(US, {
            equippedEmoteIds: (0, zr.i)(fS.current.emote),
            ownedPacks: yS,
            canBuy: TS,
            onUpdateLoadout: rr => {
              const Sr = (0, zr.l)(rr);
              var Qr;
              fS.current = {
                ...fS.current,
                emote: Sr
              }, Or.setPlayerCosmetics("emote", Sr), lr(), Qr = Sr, zS.current = Qr, null !== hS.current && clearTimeout(hS.current), hS.current = setTimeout(YS, 350)
            },
            onEmoteSelected: jS,
            onEquipPreviewSkin: () => {
              ! function(rr, Sr) {
                for (const Qr of xr.A)(0, hr.h)(Qr) && rr(Qr, "skin" === Qr ? "skin_preview" : `${Qr}_none`, !1);
                Sr()
              }(nS, lr)
            }
          }), "characters" !== Er && "emote" !== Er && (0, or.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, MS.map((rr => {
              const Sr = RS.get(rr);
              return (0, or.jsx)(NS, {
                pack: rr,
                ownedPacks: yS,
                children: Sr.map((Sr => {
                  var Qr;
                  let {
                    groupName: Zr,
                    cosmetics: Wr,
                    showSwatch: ar
                  } = Sr;
                  const jr = Zr ? null === (Qr = Rr.b[rr].colourGroups) || void 0 === Qr ? void 0 : Qr[Zr] : void 0,
                    Ir = `${rr}_${nr}_${Zr}`;
                  return (0, or.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [ar && jr && (0, or.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...jr.colours.map(((rr, Sr) => ({
                        color: rr,
                        index: Sr
                      })))].sort(((rr, Sr) => rr.color.order - Sr.color.order)).map((Sr => {
                        var Qr;
                        let {
                          color: Wr,
                          index: ar
                        } = Sr;
                        return (0, or.jsx)("div", {
                          className: pr()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (Qr = wr[Ir]) && void 0 !== Qr ? Qr : (0, Rr.e)(jr.colours)) === ar
                          }),
                          style: {
                            backgroundColor: `rgb(${Wr.rbg.join(",")})`
                          },
                          onClick: () => {
                            var Sr;
                            cr((rr => ({
                              ...rr,
                              [Ir]: ar
                            })));
                            const Qr = Pr[nr],
                              Wr = Qr ? (0, tr.k)(nr, Qr) : null,
                              jr = (null === Wr || void 0 === Wr ? void 0 : Wr.cosmeticPack) === rr,
                              fr = jr ? Qr : fS.current[nr],
                              Er = jr ? Wr : (0, tr.k)(nr, fr);
                            if ((null === Er || void 0 === Er ? void 0 : Er.cosmeticPack) !== rr) return;
                            if ((null !== (Sr = null === Er || void 0 === Er ? void 0 : Er.colourGroup) && void 0 !== Sr ? Sr : null) !== Zr) return;
                            const pr = (0, tr.g)(fr);
                            if (pr) {
                              const rr = `${nr}_${pr[0]}_${ar}`;
                              rS(nr, rr, yS) || pS(BS, nr, rr) ? Cr((Sr => ({
                                ...Sr,
                                [nr]: rr
                              }))) : (jr && eS(nr), nS(nr, rr, !0))
                            }
                          }
                        }, Wr.rbg.join())
                      }))
                    }), Wr.map((rr => {
                      const Sr = rr === fS.current[nr],
                        Qr = Pr[nr] === rr,
                        Zr = rS(nr, rr, yS),
                        Wr = !Zr && pS(BS, nr, rr),
                        ar = Zr || Wr,
                        jr = ar || Sr ? [] : function(rr, Sr, Qr) {
                          if ("cape" === rr) {
                            const {
                              needsSuperRankPerks: rr,
                              rank: Zr
                            } = mr.h[Sr];
                            return [...rr && !(0, Nr.c)(Qr) ? [Nr.t.rank] : [], ...void 0 === Zr || Qr.includes(Zr) ? [] : [Zr]]
                          }
                          return "nameColour" !== rr || (0, Jr.Ld)(Qr, Sr) ? [] : [Nr.t.rank]
                        }(nr, rr, vS),
                        Ir = 0 === jr.length;
                      return (0, or.jsx)(xS, {
                        locked: Wr,
                        children: (0, or.jsxs)("div", {
                          "data-pad-focusable": !0,
                          className: pr()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: Sr && !Qr,
                            TryingOnCharCustomPartWrapper: Qr,
                            DisabledCharCustomPartWrapper: !Ir,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === nr
                          }),
                          onClick: () => {
                            if (!Ir) return Sr = {
                              fW: nr,
                              EW: rr,
                              missingRanks: jr,
                              playerRanks: vS,
                              canBuy: TS
                            }, void Fr.NotificationProvider.showCustomPopup({
                              body: rr => (0, or.jsx)(sr, {
                                ...Sr,
                                closePopup: rr
                              }),
                              disableExitButton: !0
                            });
                            var Sr;
                            if (ar) Cr((Sr => {
                              if (Sr[nr] === rr) {
                                const rr = {
                                  ...Sr
                                };
                                return delete rr[nr], rr
                              }
                              return {
                                ...Sr,
                                [nr]: rr
                              }
                            }));
                            else {
                              var Qr;
                              if (Pr[nr] && eS(nr), rr === fS.current[nr]) return;
                              null !== (Qr = mS.current) && void 0 !== Qr && Qr.isReady() && nS(nr, rr, !0)
                            }
                          },
                          children: ["profileEffect" === nr ? (0, or.jsx)(Mr.c, {
                            profileEffect: rr,
                            name: Or.getPlayerName(),
                            cosmetics: Or.getPlayerCosmetics()
                          }) : (0, or.jsx)(ir.e, {
                            fW: nr,
                            EW: rr
                          }), ar && (0, or.jsx)(kr.c, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, rr)
                    }))]
                  }, null !== Zr && void 0 !== Zr ? Zr : "ungrouped")
                }))
              }, rr)
            }))]
          }), (0, or.jsxs)("div", {
            className: "CharCustomisationPreviewColumn",
            children: [(0, or.jsx)(qr.CharacterPreview, {
              ref: mS,
              forcedCosmetics: Pr,
              II: aS.id,
              emotePlaySeq: aS.seq,
              nametag: lS,
              onReady: () => {
                for (const rr of xr.A) nS(rr, fS.current[rr], !1)
              },
              onDrawn: rr => {
                var Sr, Qr;
                const Zr = null === (Sr = mS.current) || void 0 === Sr || null === (Qr = Sr.getDevTools()) || void 0 === Qr ? void 0 : Qr.canvas(),
                  Wr = (rr, Sr) => 0 === Object.keys(Vr.current).length && JSON.stringify(Or.getPlayerCosmetics()) === rr && tS.current.seq === Sr.seq && null === tS.current.id,
                  Ir = JSON.stringify(Or.getPlayerCosmetics()),
                  fr = tS.current;
                if (!ar.j || !rr || void 0 === Zr || !Wr(Ir, fr)) return;
                const Er = (0, jr.h)(Or),
                  pr = mS.current;
                pr.setNametagShown(!1), (0, jr.d)(Zr, Er, (() => Wr(Ir, fr))).catch((rr => {
                  console.warn("[loading-character] couldn't keep your picture from Customise", rr)
                })).finally((() => {
                  pr.setNametagShown(!0)
                }))
              }
            }), VS && (0, or.jsxs)("div", {
              className: "CharCustomisationPreviewActions",
              children: [AS.length > 0 && (0, or.jsx)(IS, {
                gets: AS
              }), Dr && (0, or.jsxs)(yr.h, {
                className: "CharCustomisationUndo",
                onClick: () => {
                  "worn" === Dr.kind ? KS(Dr.outfit, {
                    undoable: !1
                  }) : (Hr.save(Dr.slot, Dr.outfit), ZS(null))
                },
                children: [(0, or.jsx)(kr.c, {
                  name: "rotate-left"
                }), Br("general:undo")]
              })]
            })]
          })]
        })]
      })
    }))
  },
  45289: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      CharacterPreview: () => Nr
    });
    var Zr = Qr(72),
      Wr = Qr(3855),
      ar = Qr(1287),
      jr = Qr(3601),
      Ir = Qr(35505),
      fr = Qr(4876),
      Er = Qr(1338);
    let pr = null;
    const xr = [],
      mr = .6 * Math.PI,
      Nr = (0, Zr.memo)((0, Zr.forwardRef)((function(rr, Sr) {
        let {
          onReady: Qr,
          onDrawn: Nr,
          onSetupFailed: Ur,
          owner: tr = "other",
          framing: hr = "player",
          forcedCosmetics: zr,
          II: Yr,
          emotePlaySeq: nr,
          turntableFromYaw: er = null,
          nametag: Kr
        } = rr;
        const yr = (0, Zr.useRef)(null),
          {
            width: Br,
            height: Tr
          } = (0, Wr.b)(yr),
          vr = (0, Zr.useRef)({
            width: Br,
            height: Tr
          });
        vr.current = {
          width: Br,
          height: Tr
        };
        const Or = (0, Zr.useRef)(null),
          Lr = (0, Zr.useRef)({}),
          lr = (0, Zr.useRef)({}),
          [Xr, Pr] = (0, Zr.useState)(!1),
          Hr = (0, Zr.useRef)(Qr);
        Hr.current = Qr;
        const qr = (0, Zr.useRef)(Nr);
        qr.current = Nr;
        const Rr = (0, Zr.useRef)(Ur);
        Rr.current = Ur;
        const gr = (0, Zr.useRef)(null),
          Cr = (0, Zr.useRef)(!1),
          Mr = (0, Zr.useRef)(Kr);
        Mr.current = Kr;
        const Gr = (0, Zr.useRef)(!0),
          kr = (0, Zr.useRef)(!1),
          Ar = (0, Zr.useCallback)((() => {
            const rr = Or.current;
            if (!rr || !qr.current || Cr.current || !kr.current) return;
            const Sr = {};
            gr.current = Sr, queueMicrotask((() => {
              if (gr.current !== Sr) return;
              const Qr = Promise.all(ar.A.map((Sr => rr.untilDrawn(Sr)))).then((() => !0), (rr => (console.error("Failed to draw the character preview", rr), !1))),
                Zr = new Promise((rr => {
                  setTimeout((() => {
                    rr(!1)
                  }), 1e4)
                }));
              Promise.race([Qr, Zr]).then((Qr => {
                const Zr = qr.current;
                Or.current === rr && gr.current === Sr && !Cr.current && Zr && (Cr.current = !0, Zr(Qr))
              }))
            }))
          }), []);
        return (0, Zr.useImperativeHandle)(Sr, (() => {
          const rr = (rr, Sr) => {
            var Qr;
            (Lr.current[rr] = Sr, null !== zr && void 0 !== zr && zr[rr]) || (null === (Qr = Or.current) || void 0 === Qr || Qr.setCosmetic(rr, Sr), Ar())
          };
          return {
            updateCosmetic: rr,
            setAllCosmetics(Sr) {
              for (const Zr of ar.A) {
                var Qr;
                rr(Zr, null !== (Qr = Sr[Zr]) && void 0 !== Qr ? Qr : (0, jr.b)(Zr))
              }
            },
            isReady() {
              var rr, Sr;
              return null !== (rr = null === (Sr = Or.current) || void 0 === Sr ? void 0 : Sr.isReady()) && void 0 !== rr && rr
            },
            resetCamera() {
              var rr;
              null === (rr = Or.current) || void 0 === rr || rr.resetCamera()
            },
            setOrbit(rr) {
              var Sr;
              null === (Sr = Or.current) || void 0 === Sr || Sr.setOrbit(rr)
            },
            turnCamera(rr) {
              var Sr;
              const Qr = Ir.c[hr];
              null === (Sr = Or.current) || void 0 === Sr || Sr.setOrbit({
                ...Qr,
                yaw: Qr.yaw + rr
              })
            },
            async ensureReadyForCapture(rr) {
              var Sr;
              await (null === (Sr = Or.current) || void 0 === Sr ? void 0 : Sr.untilDrawn(rr))
            },
            getDevTools() {
              var rr;
              return null !== (rr = Or.current) && void 0 !== rr && rr.isReady() ? Or.current.dev : null
            },
            setNametagShown(rr) {
              var Sr, Qr;
              Gr.current = rr, null === (Sr = Or.current) || void 0 === Sr || Sr.setNametag(rr && null !== (Qr = Mr.current) && void 0 !== Qr ? Qr : null)
            }
          }
        }), [zr, hr, Ar]), (0, Zr.useEffect)((() => {
          const rr = fr.c.register(tr);
          let Sr = !0;
          const Qr = rr => {
            const Qr = Or.current,
              Zr = Ir.j.openCharacter(yr.current, hr);
            if (Or.current = Zr, pr = Zr, Qr) {
              Qr.close();
              const {
                width: rr,
                height: Sr
              } = vr.current;
              rr > 0 && Sr > 0 && Zr.resize(rr, Sr)
            }
            lr.current = {}, Pr(!1), Zr.ready.then((() => {
              if (Sr && Or.current === Zr)
                if (Pr(!0), rr) {
                  Zr.resetCamera();
                  for (const rr of ar.A) {
                    var Qr;
                    Zr.setCosmetic(rr, null !== (Qr = Lr.current[rr]) && void 0 !== Qr ? Qr : (0, jr.b)(rr))
                  }
                } else Hr.current()
            })).catch((rr => {
              var Qr;
              (console.error("Failed to set up the character preview", rr), Sr && Or.current === Zr) && (null === (Qr = Rr.current) || void 0 === Qr || Qr.call(Rr))
            }))
          };
          Qr(!1);
          const Zr = {
            reopen: () => {
              Qr(!0)
            }
          };
          return xr.push(Zr), () => {
            Sr = !1, rr();
            const Qr = Or.current;
            pr === Qr && (Qr.resetCamera(), pr = null), Qr.close(), Or.current = null;
            const Wr = xr.indexOf(Zr);
            if (xr.splice(Wr, 1), Wr === xr.length && Wr > 0) {
              const rr = xr[Wr - 1];
              queueMicrotask((() => {
                xr.at(-1) === rr && null === pr && Ir.j.sharesCharacter() && rr.reopen()
              }))
            }
          }
        }), []), (0, Zr.useEffect)((() => {
          Br <= 0 || Tr <= 0 || Or.current.resize(Br, Tr)
        }), [Br, Tr]), (0, Zr.useEffect)((() => {
          if (!Xr) return;
          const rr = lr.current;
          for (const Sr of ar.A) {
            const Qr = null === zr || void 0 === zr ? void 0 : zr[Sr],
              Zr = rr[Sr];
            Qr && Qr !== Zr ? Or.current.setCosmetic(Sr, Qr) : !Qr && Zr && Lr.current[Sr] && Or.current.setCosmetic(Sr, Lr.current[Sr])
          }
          lr.current = {
            ...zr
          }, kr.current = !0, Ar()
        }), [zr, Xr, Ar]), (0, Zr.useEffect)((() => {
          Xr && Or.current.playEmote(null !== Yr && void 0 !== Yr ? Yr : null)
        }), [Yr, nr, Xr]), (0, Zr.useEffect)((() => {
          Xr && Gr.current && Or.current.setNametag(null !== Kr && void 0 !== Kr ? Kr : null)
        }), [Kr, Xr]), (0, Zr.useEffect)((() => {
          if (!Xr || null === er) return;
          const rr = Or.current,
            {
              pitch: Sr,
              radius: Qr
            } = Ir.c[hr];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return rr.setOrbit({
            yaw: er + mr,
            pitch: Sr,
            radius: Qr
          }), () => {
            pr === rr && rr.resetCamera()
          };
          const Zr = performance.now();
          let Wr = 0;
          const ar = jr => {
            Or.current === rr && (rr.setOrbit({
              yaw: er + (jr - Zr) / 6e3 * 2 * Math.PI,
              pitch: Sr,
              radius: Qr
            }), Wr = requestAnimationFrame(ar))
          };
          return Wr = requestAnimationFrame(ar), () => {
            cancelAnimationFrame(Wr), pr === rr && rr.resetCamera()
          }
        }), [Xr, er]), (0, Er.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: yr
        })
      })))
  },
  37827: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr
    });
    var Zr = Qr(2089),
      Wr = Qr(1629);
    const ar = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(rr, Sr) {
        rr !== this.userContext && this.sendHeld(), this.userContext = rr;
        for (const [Zr, Wr] of Sr) this.pending.set(Zr, Wr);
        if (null !== this.timer) return;
        const Qr = this.lastSentAt + 1100 - Date.now();
        Qr <= 0 ? this.send(rr) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), Qr), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(rr) {
        const Sr = Array.from(this.pending, (rr => {
          let [Sr, Qr] = rr;
          return {
            fW: Sr,
            EW: Qr
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), Wr.c.updateCosmetics(rr, Sr).catch((rr => {
          console.error("Failed to update cosmetics", rr)
        }))
      }
    };

    function jr(rr, Sr) {
      for (const [Qr, Zr] of Sr) rr.setPlayerCosmetics(Qr, Zr);
      if (null === Zr.gameBridge.latest("connectedGame").websocketUrl) ar.save(rr, Sr);
      else
        for (const [Qr, Wr] of Sr) Zr.gameBridge.send("updateMyCosmetic", {
          fW: Qr,
          EW: Wr
        })
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);