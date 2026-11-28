export const id = 252;
export const ids = [252, 611];
export const modules = {
  45145: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      CharacterCustomisationUI: () => Ew
    });
    var eb = Mb(64),
      Hb = Mb(3082),
      pb = Mb(4873),
      Vb = Mb(4850),
      gb = Mb(1179),
      lb = Mb(1186),
      Lb = Mb(1159),
      Ib = Mb.n(Lb),
      Ob = Mb(1313),
      Ub = Mb(644),
      tb = Mb(639),
      Cb = Mb(1259),
      Eb = Mb(3217),
      Fb = Mb(1735),
      Bb = Mb(3724),
      sb = Mb(37914),
      mb = Mb(3222),
      hb = Mb(4446),
      zb = Mb(2183),
      Xb = Mb(1616),
      xb = Mb(3257),
      jb = Mb(3357),
      Kb = Mb(26),
      rb = Mb(3898),
      Rb = Mb(1677),
      Db = Mb(2062);
    class cb {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(bb) {
        null !== bb && bb !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = bb)
      }
      isFor(bb) {
        return null === this.accountId || this.accountId === bb
      }
      overlay(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return bb.map(((bb, Mb) => {
          var eb, Hb;
          return null !== (eb = null !== (Hb = this.slots.get(Mb)) && void 0 !== Hb ? Hb : wb.get(Mb)) && void 0 !== eb ? eb : bb
        }))
      }
    }
    class Yb extends rb.e {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new cb;
        super("saved outfits", (async wb => {
          const Mb = bb.isFor(wb.whamm),
            eb = new Map(bb.slots),
            Hb = await Rb.e.getSavedOutfits(wb);
          return Mb ? bb.overlay(Hb, eb) : Hb
        })), this.unsaved = bb, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(bb, wb) {
        var Mb, eb;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(bb)) || this.unsaved.before.set(bb, null !== (Mb = null === (eb = this.getState().data) || void 0 === eb ? void 0 : eb[bb]) && void 0 !== Mb ? Mb : {});
        this.unsaved.slots.set(bb, wb), this.update((Mb => Mb.map(((Mb, eb) => eb === bb ? wb : Mb)))), this.sending || this.sendUnsaved()
      }
      clear(bb) {
        this.save(bb, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let bb = !1;
        for (; this.unsaved.slots.size > 0;) {
          const Mb = new Map(this.unsaved.slots);
          let eb = this.getState().accountId;
          try {
            const bb = await lb.userContextManager.getCurrentUserContext();
            if (eb = bb.whamm, this.unsaved.moveTo(bb.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: wb,
              data: Hb
            } = this.getState();
            let pb = Hb;
            wb === bb.whamm && null !== pb || (pb = this.unsaved.overlay(await Rb.e.getSavedOutfits(bb)), this.refresh()), await Rb.e.setSavedOutfits(bb, pb), this.unsaved.isFor(bb.whamm) && pb.forEach(((bb, wb) => {
              const eb = this.unsaved.slots.get(wb);
              void 0 === eb || eb === Mb.get(wb) ? this.unsaved.before.delete(wb) : this.unsaved.before.set(wb, bb)
            }))
          } catch (wb) {
            if (console.error("Failed to save outfits", wb), this.getState().accountId === eb && [...this.unsaved.slots].every((bb => {
                let [wb, eb] = bb;
                return Mb.get(wb) === eb
              }))) {
              const wb = [...Mb.values()].every(sb.d);
              Db.j.showMessage({
                translationKey: wb ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const eb = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((bb => bb.map(((bb, wb) => {
                var Mb;
                return null !== (Mb = eb.get(wb)) && void 0 !== Mb ? Mb : bb
              })))), bb = !0
            }
          }
          for (const [bb, wb] of Mb) this.unsaved.slots.get(bb) === wb && this.unsaved.slots.delete(bb)
        }
        this.sending = !1, bb && this.refresh()
      }
    }
    const Zb = new Yb;
    var fb = Mb(45153),
      Ab = Mb(1726),
      Wb = Mb(3329),
      Jb = Mb(4270),
      Sb = Mb(4443),
      Nb = Mb(3285),
      vb = Mb(1475);
    Mb(35366), Mb(4448);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var Qb = Mb(3263),
      Gb = Mb(4460),
      qb = Mb(4466),
      ab = Mb(1516),
      ib = Mb(3402),
      ub = Mb(1504),
      db = Mb(1364);

    function Pb(bb) {
      let {
        wornOutfit: wb,
        onApply: Mb,
        onOverwrite: Hb,
        onDelete: pb
      } = bb;
      const {
        t: Vb
      } = (0, Cb.C)(), {
        accountId: lb,
        data: Lb
      } = (0, rb.j)(Zb, !1), {
        userContext: Ob
      } = (0, gb.e)();
      async function Ub(bb, wb) {
        const Mb = await ub.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: eb,
            data: Hb
          } = Zb.getState();
        var Vb, gb;
        !0 === Mb && eb === lb && null !== Hb && (Vb = Hb[bb], gb = wb, (0, sb.b)(Vb, gb) && (0, sb.b)(gb, Vb)) && (Zb.clear(bb), pb(bb))
      }
      return (0, eb.useEffect)((() => {
        Zb.ensureLoaded()
      }), []), null === Lb || lb !== Ob.whamm ? null : (0, db.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, db.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, db.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: Vb("homePage:myOutfits")
          })
        }), (0, db.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: Lb.map(((bb, eb) => {
            const pb = (0, sb.d)(bb);
            return (0, db.jsxs)("div", {
              className: Ib()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !pb
              }),
              children: [(0, db.jsxs)("div", {
                ...(0, Xb.bb)(),
                role: pb ? "button" : "link",
                "data-pad-focusable": !0,
                className: Ib()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: pb,
                  CharacterPresetCardActive: !pb && (0, sb.b)(bb, wb)
                }),
                onClick: () => {
                  pb ? Zb.save(eb, wb) : Mb(bb)
                },
                children: [pb && (0, db.jsxs)(db.Fragment, {
                  children: [(0, db.jsx)(vb.b, {
                    name: "plus"
                  }), Vb("homePage:saveOutfit")]
                }), !pb && (0, db.jsxs)(db.Fragment, {
                  children: [(0, db.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, db.jsx)(ib.e, {
                      cosmetics: bb
                    })
                  }), (0, db.jsx)(Xb.Y, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      (0, sb.b)(wb, bb) || (Zb.save(eb, wb), Hb(eb, bb))
                    },
                    children: Vb("general:save")
                  })]
                })]
              }), !pb && (0, db.jsx)("button", {
                type: "button",
                className: "SavedOutfitDeleteButton",
                "data-pad-destructive": !0,
                "aria-label": Vb("general:delete"),
                title: Vb("general:delete"),
                onClick: () => {
                  Ub(eb, bb)
                },
                children: (0, db.jsx)(vb.b, {
                  name: "trash-can"
                })
              })]
            }, eb)
          }))
        })]
      })
    }
    var nb = Mb(382),
      yb = Mb(1507);

    function ob() {
      (0, xb.r)({
        mode: "self",
        source: "characterCustomisation",
        openItem: "superRank"
      })
    }

    function Tb(bb) {
      let {
        gH: wb,
        lH: Mb,
        missingRanks: eb,
        playerRanks: Hb,
        canBuy: pb,
        closePopup: Vb
      } = bb;
      const {
        t: gb
      } = (0, Cb.C)(), lb = (0, jb.s)(Date.now()), Lb = tb.j.find((bb => Hb.includes(bb.rank))), Ib = gb((void 0 === Lb ? lb : (0, jb.q)(Lb.id)).nameKey), {
        title: Ob,
        subtitle: Eb,
        textOpts: Fb,
        soldRankUnlocks: Bb
      } = function(bb, wb, Mb, eb) {
        const Hb = bb.find((bb => !(0, tb.f)(tb.j, bb)));
        if (void 0 === Hb) return {
          title: Mb.unlockWithKey,
          soldRankUnlocks: !0
        };
        if ("youtuber" === Hb) return {
          title: "homePage:youtuberCape",
          subtitle: "homePage:youtuberCapeHow",
          textOpts: {
            subtitle: {
              tierRank: eb
            }
          },
          soldRankUnlocks: !1
        };
        const pb = {
          rank: Ub.l[Hb].chatTag[0].str
        };
        return {
          title: "homePage:creatorCape",
          subtitle: wb.some(Ub.n) ? "homePage:creatorCapeOtherTier" : "homePage:creatorCapeHow",
          textOpts: {
            title: pb,
            subtitle: {
              ...pb,
              tierRank: eb
            }
          },
          soldRankUnlocks: !1
        }
      }(eb, Hb, lb, Ib), sb = pb && Bb;
      return (0, db.jsx)(yb.g, {
        className: "RankLockedCosmeticPopup",
        title: Ob,
        subtitle: Eb,
        textOpts: Fb,
        confirm: sb ? {
          text: "general:getItNow",
          onClick: () => {
            Vb(), ob()
          }
        } : {
          text: "general:ok",
          onClick: Vb
        },
        cancel: sb ? {
          text: "general:cancel",
          onClick: Vb
        } : void 0,
        children: (0, db.jsx)("div", {
          className: "RankLockedCosmeticPicture",
          children: (0, db.jsx)(qb.c, {
            gH: wb,
            lH: Mb
          })
        })
      })
    }
    var kb = Mb(37611);

    function bw(bb, wb, Mb) {
      return !(0, Wb.v)(bb, wb) && !(0, Wb.J)(bb, wb, Mb)
    }

    function ww(bb, wb) {
      return !(0, Wb.G)(bb, wb)
    }

    function Mw(bb) {
      return Ab.n.find((wb => (0, Ab.e)(wb) === bb))
    }

    function ew(bb, wb, Mb) {
      var eb;
      if (!bw(bb, wb, Mb)) return null;
      const Hb = (0, Eb.l)(bb, wb).cosmeticPack;
      return Ab.v.includes(Hb) ? Hb : null !== (eb = (0, Wb.f)(bb, wb).find((bb => Ab.v.includes(bb)))) && void 0 !== eb ? eb : null
    }

    function Hw(bb, wb, Mb) {
      const eb = function(bb, wb) {
          for (const [eb, Hb] of Object.entries(Fb.d)) {
            var Mb;
            if (!(0, sb.b)(Hb.cosmetics, bb) || !ww(Hb.cosmetics, wb)) continue;
            const pb = null !== (Mb = Mw(eb)) && void 0 !== Mb ? Mb : Hb.cosmeticPack;
            if (Object.entries(Hb.cosmetics).every((bb => {
                let [Mb, eb] = bb;
                return !bw(Mb, eb, wb) || (0, Wb.e)(pb, Mb, eb)
              })) && Ab.v.includes(pb)) return pb
          }
          return null
        }(wb, Mb),
        Hb = null === eb ? [] : [{
          kind: "characters",
          pack: eb
        }],
        pb = "characters" === bb ? Ob.u : [bb, ...Ob.u.filter((wb => wb !== bb))];
      for (const Vb of pb) {
        const bb = wb[Vb];
        if (void 0 === bb || null !== eb && (0, Wb.e)(eb, Vb, bb)) continue;
        const pb = ew(Vb, bb, Mb);
        if (null === pb) continue;
        const gb = void 0 === (0, Ab.e)(pb) ? -1 : Hb.findIndex((bb => bb.pack === pb)); - 1 === gb ? Hb.push({
          kind: Vb,
          pack: pb
        }) : Hb[gb] = {
          kind: "characters",
          pack: pb
        }
      }
      return Hb
    }
    var pw = Mb(3113);
    const Vw = {
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

    function gw(bb) {
      let {
        gets: wb
      } = bb;
      const {
        t: Mb
      } = (0, Cb.C)();
      return (0, db.jsx)("div", {
        className: "CharCustomisationGetTriedOn",
        children: wb.map((bb => {
          let {
            kind: wb,
            pack: eb
          } = bb;
          return (0, db.jsxs)(Xb.p, {
            className: "CharCustomisationGetPiece",
            onClick: () => {
              (0, Jb.i)(eb, "triedOnGet")
            },
            children: [(0, db.jsx)(vb.b, {
              name: "store"
            }), "characters" === wb ? Mb("homePage:getPack", {
              name: (0, pw.g)(eb)
            }) : Mb(Vw[wb])]
          }, wb + eb)
        }))
      })
    }
    var lw = Mb(3715),
      Lw = Mb(3721);

    function Iw(bb, wb, Mb) {
      return null !== bb && !(0, lw.c)(Lw.b, wb, Mb, bb.collected, bb.ownedPacks)
    }

    function Ow(bb) {
      let {
        locked: wb,
        children: Mb
      } = bb;
      return wb ? (0, db.jsx)(Uw, {
        children: Mb
      }) : Mb
    }

    function Uw(bb) {
      var wb;
      let {
        children: Mb
      } = bb;
      const {
        t: eb
      } = (0, Cb.C)(), {
        userContext: Hb
      } = (0, gb.e)(), pb = null !== (wb = Hb.dailyDrop) && void 0 !== wb && wb.hidden ? eb("dailyDrop:lockedFromHidden") : eb("dailyDrop:lockedFrom");
      return (0, db.jsx)(ab.d, {
        tooltipInner: (0, db.jsx)(db.Fragment, {
          children: pb
        }),
        children: Mb
      })
    }

    function tw(bb) {
      let {
        pack: wb,
        ownedPacks: Mb,
        showStoreLink: eb = !1,
        children: Hb
      } = bb;
      const {
        t: pb
      } = (0, Cb.C)(), Vb = Ab.c[wb].purchasable && !Mb.includes(wb) && Ab.v.includes(wb), gb = Jb.m[wb];
      return (0, db.jsxs)("div", {
        className: Ib()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: Vb
        }),
        children: [gb && (0, db.jsx)(gb, {}), (0, db.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, db.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: (0, pw.g)(wb)
          }), (Vb || eb) && (0, db.jsxs)(Xb.I, {
            onClick: () => {
              Vb ? (0, Jb.i)(wb) : (0, xb.r)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, db.jsx)(vb.b, {
              name: "store"
            }), " ", pb("general:viewInShop")]
          })]
        }), Vb && "bee" === wb && (0, db.jsx)(Jb.b, {}), Hb]
      })
    }

    function Cw(bb) {
      let {
        equippedEmoteIds: wb,
        ownedPacks: Mb,
        canBuy: eb,
        onUpdateLoadout: Hb,
        onEmoteSelected: pb,
        onEquipPreviewSkin: Vb
      } = bb;
      const {
        t: gb
      } = (0, Cb.C)(), lb = new Set(wb), Lb = new Map, Ub = Object.keys(Eb.g.emote).sort(((bb, wb) => {
        var Mb, eb, Hb, pb;
        return (null !== (Mb = null === (eb = (0, Eb.l)("emote", bb)) || void 0 === eb ? void 0 : eb.clientIdx) && void 0 !== Mb ? Mb : 0) - (null !== (Hb = null === (pb = (0, Eb.l)("emote", wb)) || void 0 === pb ? void 0 : pb.clientIdx) && void 0 !== Hb ? Hb : 0)
      })).filter((bb => {
        const wb = (0, Eb.m)("emote", bb),
          Hb = (0, Wb.J)("emote", bb, Mb);
        return !(wb.purchasable && !Hb && !eb) && (wb.clientSelectable || Hb)
      }));
      for (const Ib of Ub) {
        const bb = (0, Eb.l)("emote", Ib).cosmeticPack;
        Lb.has(bb) || Lb.set(bb, []), Lb.get(bb).push(Ib)
      }
      const tb = Array.from(Lb.keys());
      return (0, db.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, db.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, db.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: gb("emotes:equippedCount", {
              count: wb.length,
              max: Ob.n
            })
          }), (0, db.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: gb("emotes:loadoutHint")
          })]
        }), tb.map((bb => {
          const eb = Lb.get(bb);
          return (0, db.jsx)(tw, {
            pack: bb,
            ownedPacks: Mb,
            children: (0, db.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: eb.map((bb => {
                var eb;
                const Vb = wb.indexOf(bb),
                  Lb = -1 !== Vb,
                  Ub = wb.length >= Ob.n,
                  tb = bw("emote", bb, Mb),
                  Cb = tb || !Lb && Ub,
                  Eb = (0, mb.h)(bb);
                return (0, db.jsxs)("div", {
                  className: Ib()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Lb
                  }),
                  onClick: () => {
                    pb(bb)
                  },
                  children: [(0, db.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, db.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(${(0,Gb.d)("emote",bb)})`
                      },
                      "aria-hidden": !0
                    }), (0, db.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (eb = null === Eb || void 0 === Eb ? void 0 : Eb.displayName) && void 0 !== eb ? eb : bb
                    })]
                  }), (0, db.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Lb && (0, db.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: Vb + 1
                    }), tb && (0, db.jsx)(vb.b, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, db.jsx)(ab.d, {
                      tooltipInner: (0, db.jsx)(db.Fragment, {
                        children: gb(Lb ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, db.jsx)("div", {
                        className: Ib()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: Cb,
                          EmoteCustomPartToggleEquipped: Lb
                        }),
                        onClick: Mb => {
                          Mb.stopPropagation(), Cb || function(bb) {
                            lb.has(bb) ? Hb(wb.filter((wb => wb !== bb))) : wb.length >= Ob.n || Hb([...wb, bb])
                          }(bb)
                        },
                        children: (0, db.jsx)(vb.b, {
                          name: Lb ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, bb)
              }))
            })
          }, bb)
        }))]
      })
    }
    const Ew = (0, eb.memo)((function(bb) {
      var wb, Mb;
      let {
        selectedTab: Lb
      } = bb;
      const mb = "characters" === Lb ? "skin" : Lb,
        {
          t: xb
        } = (0, Cb.C)(),
        {
          userContext: rb,
          isUserContextUpdating: Rb
        } = (0, gb.e)(),
        Db = (0, Hb.e)(),
        {
          gameState: cb
        } = (0, Kb.o)(["gameState"]),
        [Yb, Jb] = (0, eb.useState)({}),
        Gb = (0, eb.useRef)(Yb);
      Gb.current = Yb;
      const [ab, ib] = (0, eb.useState)({}), [yb, ew] = (0, eb.useState)(null), {
        previewEmote: pw,
        triggerEmote: Vw
      } = (0, hb.e)(), lw = (0, eb.useRef)(Ob.u.reduce(((bb, wb) => (bb[wb] = (0, Bb.b)(wb), bb)), {})), Lw = (0, eb.useRef)(!1), Uw = (0, eb.useRef)(null), Ew = (0, eb.useRef)(pw);
      Ew.current = pw;
      const Fw = (0, eb.useRef)(null),
        Bw = (0, eb.useRef)(null);

      function sw() {
        null !== Fw.current && (clearTimeout(Fw.current), Fw.current = null);
        const bb = Bw.current;
        null !== bb && (Bw.current = null, (0, kb.c)(rb, [
          ["emote", bb]
        ]))
      }

      function mw(bb, wb, Mb) {
        var eb, Hb, pb;
        lw.current = {
          ...lw.current,
          [bb]: wb
        }, Db(), Mb && ((0, kb.c)(rb, [
          [bb, wb]
        ]), ew(null));
        const Vb = (0, Eb.l)(bb, wb);
        if (null !== Vb && void 0 !== Vb && Vb.colourGroup && null !== (eb = Ab.c[Vb.cosmeticPack].colourGroups) && void 0 !== eb && null !== (Hb = eb[Vb.colourGroup]) && void 0 !== Hb && Hb.showSwatchSelector) {
          const Mb = (0, Eb.i)(wb);
          Mb && ib((wb => ({
            ...wb,
            [`${Vb.cosmeticPack}_${bb}_${Vb.colourGroup}`]: parseInt(Mb[1])
          })))
        }
        null !== (pb = Uw.current) && void 0 !== pb && pb.isReady() && Uw.current.updateCosmetic(bb, wb)
      }

      function hw(bb) {
        Jb((wb => {
          const Mb = {
            ...wb
          };
          return delete Mb[bb], Mb
        }))
      }

      function zw(bb, wb) {
        let {
          undoable: Mb
        } = wb;
        Object.keys(Yb).length > 0 && Jb({});
        const eb = function(bb, wb, Mb, eb) {
          return Object.entries(bb).filter((bb => {
            let [Hb, pb] = bb;
            return wb[Hb] !== pb && !bw(Hb, pb, Mb) && !eb(Hb, pb)
          }))
        }(bb, lw.current, Xw, ((bb, wb) => Iw(xw, bb, wb)));
        Mb ? eb.length > 0 && ew({
          kind: "worn",
          outfit: (0, sb.g)(lw.current)
        }) : ew(null);
        for (const [Hb, pb] of eb) mw(Hb, pb, !1);
        eb.length > 0 && (0, kb.c)(rb, eb)
      }(0, zb.b)("cosmeticsUpdated", (bb => {
        let wb = !1;
        for (const {
            local: Mb,
            gH: eb,
            lH: Hb
          }
          of bb) {
          if (!Mb) return;
          wb = !0, Lw.current || mw(eb, Hb, !1), Db()
        }
        wb && (Lw.current = !0)
      })), (0, eb.useEffect)((() => {
        if (!Rb) {
          for (const [bb, wb] of Object.entries(rb.getPlayerCosmetics())) mw(bb, wb, !1);
          Db()
        }
      }), [Rb]), (0, eb.useEffect)((() => () => {
        sw()
      }), []);
      const Xw = rb.getOwnedCosmeticPacks(),
        xw = function(bb, wb) {
          return null === bb ? null : {
            collected: new Set(bb.collected),
            ownedPacks: wb
          }
        }(rb.dailyDrop, Xw),
        jw = (0, Qb.usePurchasesAllowed)(),
        Kw = rb.getPlayerRanks(),
        rw = rb === lb.NULL_USER_CONTEXT ? "" : rb.getPlayerName(),
        Rw = null !== (wb = null !== (Mb = Yb.nameColour) && void 0 !== Mb ? Mb : rb.getPlayerCosmetics().nameColour) && void 0 !== wb ? wb : Ub.d,
        Dw = (0, eb.useMemo)((() => ({
          name: rw,
          ranks: Kw,
          nameColour: Rw
        })), [rw, Kw, Rw]),
        Yw = Object.keys(Eb.g[mb]).filter((bb => {
          const wb = (0, Eb.m)(mb, bb),
            Mb = (0, Wb.J)(mb, bb, Xw);
          return !(wb.purchasable && !Mb && !jw) && (wb.clientSelectable || Mb)
        })).sort(((bb, wb) => {
          var Mb, eb, Hb, pb;
          return (null !== (Mb = null === (eb = (0, Eb.l)(mb, bb)) || void 0 === eb ? void 0 : eb.clientIdx) && void 0 !== Mb ? Mb : 0) - (null !== (Hb = null === (pb = (0, Eb.l)(mb, wb)) || void 0 === pb ? void 0 : pb.clientIdx) && void 0 !== Hb ? Hb : 0)
        })),
        Zw = new Map;
      for (const eb of Yw) {
        var fw;
        const bb = null === (fw = (0, Eb.l)(mb, eb)) || void 0 === fw ? void 0 : fw.cosmeticPack;
        Zw.has(bb) || Zw.set(bb, []), Zw.get(bb).push(eb)
      }
      const Aw = function(bb, wb) {
          const Mb = new Set,
            eb = new Set;
          for (const [Hb, pb] of Object.entries(Eb.g[bb])) {
            if (void 0 === pb.colourGroup) continue;
            const Vb = `${pb.cosmeticPack}_${pb.colourGroup}`;
            (bw(bb, Hb, wb) ? eb : Mb).add(Vb)
          }
          return new Set([...Mb].filter((bb => eb.has(bb))))
        }(mb, Xw),
        Ww = new Map;
      for (const [eb, Hb] of Zw) {
        const bb = [],
          wb = new Map;
        for (const eb of Hb) {
          var Jw, Sw;
          const Mb = null !== (Jw = null === (Sw = (0, Eb.l)(mb, eb)) || void 0 === Sw ? void 0 : Sw.colourGroup) && void 0 !== Jw ? Jw : null;
          wb.has(Mb) || (wb.set(Mb, []), bb.push(Mb)), wb.get(Mb).push(eb)
        }
        const Mb = bb.map((bb => {
          var Mb;
          const Hb = wb.get(bb),
            pb = bb ? null === (Mb = Ab.c[eb].colourGroups) || void 0 === Mb ? void 0 : Mb[bb] : void 0,
            Vb = !0 === (null === pb || void 0 === pb ? void 0 : pb.showSwatchSelector) && !Aw.has(`${eb}_${bb}`);
          if (Vb && pb) {
            var gb;
            const wb = null !== (gb = ab[`${eb}_${mb}_${bb}`]) && void 0 !== gb ? gb : (0, Ab.f)(pb.colours);
            return {
              groupName: bb,
              showSwatch: Vb,
              cosmetics: Hb.filter((bb => {
                const Mb = (0, Eb.i)(bb);
                return !Mb || wb.toString() === Mb[1].toString()
              }))
            }
          }
          return {
            groupName: bb,
            cosmetics: Hb,
            showSwatch: Vb
          }
        }));
        Ww.set(eb, Mb)
      }
      const Nw = Array.from(Zw.keys()),
        vw = new Map;
      for (const [eb, Hb] of Object.entries(Fb.d)) {
        const bb = Ab.c[Hb.cosmeticPack],
          wb = (0, Wb.G)(Hb.cosmetics, Xw),
          Mb = void 0 !== Mw(eb);
        (bb.clientSelectable || Mb || wb) && ((!bb.purchasable || wb || jw) && (vw.has(Hb.cosmeticPack) || vw.set(Hb.cosmeticPack, []), vw.get(Hb.cosmeticPack).push([eb, Hb])))
      }
      const Qw = Array.from(vw.keys()),
        Gw = jw ? Hw(Lb, Yb, Xw) : [],
        [qw, aw] = (0, eb.useState)(!1);
      return !qw && (Gw.length > 0 || null !== yb) && aw(!0), (0, db.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === mb || "nameColour" === mb) && !(0, tb.c)(Kw) && (0, db.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, db.jsx)(vb.b, {
            name: "bolt"
          }), xb((0, jb.s)(Date.now()).unlockWithKey), jw && (0, db.jsx)(Xb.p, {
            onClick: () => {
              ob()
            },
            children: xb("general:getItNow")
          })]
        }), (0, db.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === Lb && (0, db.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, db.jsx)(Pb, {
              wornOutfit: (0, sb.g)(lw.current),
              onApply: bb => {
                zw(bb, {
                  undoable: !0
                })
              },
              onOverwrite: (bb, wb) => {
                ew({
                  kind: "slot",
                  slot: bb,
                  outfit: wb
                })
              },
              onDelete: bb => {
                ew((wb => "slot" === (null === wb || void 0 === wb ? void 0 : wb.kind) && wb.slot === bb ? null : wb))
              }
            }), Qw.map((bb => {
              const wb = vw.get(bb);
              return (0, db.jsx)(tw, {
                pack: bb,
                ownedPacks: Xw,
                showStoreLink: !Ab.r.includes(bb) && wb.some((bb => {
                  let [, {
                    cosmetics: wb
                  }] = bb;
                  return ww(wb, Xw)
                })),
                children: (0, db.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: wb.map((bb => {
                    let [wb, {
                      cosmetics: Mb
                    }] = bb;
                    const eb = ww(Mb, Xw),
                      Hb = !eb && function(bb, wb) {
                        return Object.entries(wb).some((wb => {
                          let [Mb, eb] = wb;
                          return Iw(bb, Mb, eb)
                        }))
                      }(xw, Mb),
                      pb = eb || Hb,
                      Vb = (0, sb.b)(Mb, Yb),
                      gb = !Vb && (0, sb.b)(Mb, lw.current);
                    return (0, db.jsx)(Ow, {
                      locked: Hb,
                      children: (0, db.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: Ib()("CharacterPresetCard", {
                          CharacterPresetCardActive: gb,
                          CharacterPresetCardTryingOn: Vb
                        }),
                        onClick: () => {
                          pb ? function(bb) {
                            (0, sb.b)(bb, Yb) ? Jb({}): Jb({
                              ...bb
                            })
                          }(Mb) : zw(Mb, {
                            undoable: !0
                          })
                        },
                        children: [(0, db.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(${(0,Nb.j)(wb)})`
                          }
                        }), pb && (0, db.jsx)(vb.b, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, wb)
                  }))
                })
              }, bb)
            }))]
          }), "emote" === Lb && (0, db.jsx)(Cw, {
            equippedEmoteIds: (0, Bb.f)(lw.current.emote),
            ownedPacks: Xw,
            canBuy: jw,
            onUpdateLoadout: bb => {
              const wb = (0, Bb.h)(bb);
              var Mb;
              lw.current = {
                ...lw.current,
                emote: wb
              }, rb.setPlayerCosmetics("emote", wb), Db(), Mb = wb, Bw.current = Mb, null !== Fw.current && clearTimeout(Fw.current), Fw.current = setTimeout(sw, 350)
            },
            onEmoteSelected: Vw,
            onEquipPreviewSkin: () => {
              ! function(bb, wb) {
                for (const Mb of Ob.u)(0, Fb.g)(Mb) && bb(Mb, "skin" === Mb ? "skin_preview" : `${Mb}_none`, !1);
                wb()
              }(mw, Db)
            }
          }), "characters" !== Lb && "emote" !== Lb && (0, db.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Nw.map((bb => {
              const wb = Ww.get(bb);
              return (0, db.jsx)(tw, {
                pack: bb,
                ownedPacks: Xw,
                children: wb.map((wb => {
                  var Mb;
                  let {
                    groupName: eb,
                    cosmetics: Hb,
                    showSwatch: pb
                  } = wb;
                  const Vb = eb ? null === (Mb = Ab.c[bb].colourGroups) || void 0 === Mb ? void 0 : Mb[eb] : void 0,
                    gb = `${bb}_${mb}_${eb}`;
                  return (0, db.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [pb && Vb && (0, db.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...Vb.colours.map(((bb, wb) => ({
                        color: bb,
                        index: wb
                      })))].sort(((bb, wb) => bb.color.order - wb.color.order)).map((wb => {
                        var Mb;
                        let {
                          color: Hb,
                          index: pb
                        } = wb;
                        return (0, db.jsx)("div", {
                          className: Ib()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (Mb = ab[gb]) && void 0 !== Mb ? Mb : (0, Ab.f)(Vb.colours)) === pb
                          }),
                          style: {
                            backgroundColor: `rgb(${Hb.rbg.join(",")})`
                          },
                          onClick: () => {
                            var wb;
                            ib((bb => ({
                              ...bb,
                              [gb]: pb
                            })));
                            const Mb = Yb[mb],
                              Hb = Mb ? (0, Eb.l)(mb, Mb) : null,
                              Vb = (null === Hb || void 0 === Hb ? void 0 : Hb.cosmeticPack) === bb,
                              lb = Vb ? Mb : lw.current[mb],
                              Lb = Vb ? Hb : (0, Eb.l)(mb, lb);
                            if ((null === Lb || void 0 === Lb ? void 0 : Lb.cosmeticPack) !== bb) return;
                            if ((null !== (wb = null === Lb || void 0 === Lb ? void 0 : Lb.colourGroup) && void 0 !== wb ? wb : null) !== eb) return;
                            const Ib = (0, Eb.i)(lb);
                            if (Ib) {
                              const bb = `${mb}_${Ib[0]}_${pb}`;
                              bw(mb, bb, Xw) || Iw(xw, mb, bb) ? Jb((wb => ({
                                ...wb,
                                [mb]: bb
                              }))) : (Vb && hw(mb), mw(mb, bb, !0))
                            }
                          }
                        }, Hb.rbg.join())
                      }))
                    }), Hb.map((bb => {
                      const wb = bb === lw.current[mb],
                        Mb = Yb[mb] === bb,
                        eb = bw(mb, bb, Xw),
                        Hb = !eb && Iw(xw, mb, bb),
                        pb = eb || Hb,
                        Vb = pb || wb ? [] : function(bb, wb, Mb) {
                          if ("cape" === bb) {
                            const {
                              needsSuperRankPerks: bb,
                              rank: eb
                            } = Ub.h[wb];
                            return [...bb && !(0, tb.c)(Mb) ? [tb.n.rank] : [], ...void 0 === eb || Mb.includes(eb) ? [] : [eb]]
                          }
                          return "nameColour" !== bb || (0, nb.Zd)(Mb, wb) ? [] : [tb.n.rank]
                        }(mb, bb, Kw),
                        gb = 0 === Vb.length;
                      return (0, db.jsx)(Ow, {
                        locked: Hb,
                        children: (0, db.jsxs)("div", {
                          "data-pad-focusable": !0,
                          className: Ib()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: wb && !Mb,
                            TryingOnCharCustomPartWrapper: Mb,
                            DisabledCharCustomPartWrapper: !gb,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === mb
                          }),
                          onClick: () => {
                            if (!gb) return wb = {
                              gH: mb,
                              lH: bb,
                              missingRanks: Vb,
                              playerRanks: Kw,
                              canBuy: jw
                            }, void ub.NotificationProvider.showCustomPopup({
                              body: bb => (0, db.jsx)(Tb, {
                                ...wb,
                                closePopup: bb
                              }),
                              disableExitButton: !0
                            });
                            var wb;
                            if (pb) Jb((wb => {
                              if (wb[mb] === bb) {
                                const bb = {
                                  ...wb
                                };
                                return delete bb[mb], bb
                              }
                              return {
                                ...wb,
                                [mb]: bb
                              }
                            }));
                            else {
                              var Mb;
                              if (Yb[mb] && hw(mb), bb === lw.current[mb]) return;
                              null !== (Mb = Uw.current) && void 0 !== Mb && Mb.isReady() && mw(mb, bb, !0)
                            }
                          },
                          children: ["profileEffect" === mb ? (0, db.jsx)(Sb.d, {
                            profileEffect: bb,
                            name: rb.getPlayerName(),
                            cosmetics: rb.getPlayerCosmetics()
                          }) : (0, db.jsx)(qb.c, {
                            gH: mb,
                            lH: bb
                          }), pb && (0, db.jsx)(vb.b, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, bb)
                    }))]
                  }, null !== eb && void 0 !== eb ? eb : "ungrouped")
                }))
              }, bb)
            }))]
          }), (0, db.jsxs)("div", {
            className: "CharCustomisationPreviewColumn",
            children: [(0, db.jsx)(fb.CharacterPreview, {
              ref: Uw,
              forcedCosmetics: Yb,
              Og: pw.id,
              emotePlaySeq: pw.seq,
              nametag: Dw,
              onReady: () => {
                for (const bb of Ob.u) mw(bb, lw.current[bb], !1)
              },
              onDrawn: bb => {
                var wb, Mb;
                const eb = null === (wb = Uw.current) || void 0 === wb || null === (Mb = wb.getDevTools()) || void 0 === Mb ? void 0 : Mb.canvas(),
                  Hb = (bb, wb) => 0 === Object.keys(Gb.current).length && JSON.stringify(rb.getPlayerCosmetics()) === bb && Ew.current.seq === wb.seq && null === Ew.current.id,
                  gb = JSON.stringify(rb.getPlayerCosmetics()),
                  lb = Ew.current;
                if (!pb.m || !bb || void 0 === eb || !Hb(gb, lb)) return;
                const Lb = (0, Vb.c)(rb),
                  Ib = Uw.current;
                Ib.setNametagShown(!1), (0, Vb.b)(eb, Lb, (() => Hb(gb, lb))).catch((bb => {
                  console.warn("[loading-character] couldn't keep your picture from Customise", bb)
                })).finally((() => {
                  Ib.setNametagShown(!0)
                }))
              }
            }), qw && (0, db.jsxs)("div", {
              className: "CharCustomisationPreviewActions",
              children: [Gw.length > 0 && (0, db.jsx)(gw, {
                gets: Gw
              }), yb && (0, db.jsxs)(Xb.f, {
                className: "CharCustomisationUndo",
                onClick: () => {
                  "worn" === yb.kind ? zw(yb.outfit, {
                    undoable: !1
                  }) : (Zb.save(yb.slot, yb.outfit), ew(null))
                },
                children: [(0, db.jsx)(vb.b, {
                  name: "rotate-left"
                }), xb("general:undo")]
              })]
            })]
          })]
        })]
      })
    }))
  },
  45153: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      CharacterPreview: () => tb
    });
    var eb = Mb(64),
      Hb = Mb(4005),
      pb = Mb(1313),
      Vb = Mb(3724),
      gb = Mb(35366),
      lb = Mb(5003),
      Lb = Mb(1364);
    let Ib = null;
    const Ob = [],
      Ub = .6 * Math.PI,
      tb = (0, eb.memo)((0, eb.forwardRef)((function(bb, wb) {
        let {
          onReady: Mb,
          onDrawn: tb,
          onSetupFailed: Cb,
          owner: Eb = "other",
          framing: Fb = "player",
          forcedCosmetics: Bb,
          Og: sb,
          emotePlaySeq: mb,
          turntableFromYaw: hb = null,
          nametag: zb
        } = bb;
        const Xb = (0, eb.useRef)(null),
          {
            width: xb,
            height: jb
          } = (0, Hb.b)(Xb),
          Kb = (0, eb.useRef)({
            width: xb,
            height: jb
          });
        Kb.current = {
          width: xb,
          height: jb
        };
        const rb = (0, eb.useRef)(null),
          Rb = (0, eb.useRef)({}),
          Db = (0, eb.useRef)({}),
          [cb, Yb] = (0, eb.useState)(!1),
          Zb = (0, eb.useRef)(Mb);
        Zb.current = Mb;
        const fb = (0, eb.useRef)(tb);
        fb.current = tb;
        const Ab = (0, eb.useRef)(Cb);
        Ab.current = Cb;
        const Wb = (0, eb.useRef)(null),
          Jb = (0, eb.useRef)(!1),
          Sb = (0, eb.useRef)(zb);
        Sb.current = zb;
        const Nb = (0, eb.useRef)(!0),
          vb = (0, eb.useRef)(!1),
          Qb = (0, eb.useCallback)((() => {
            const bb = rb.current;
            if (!bb || !fb.current || Jb.current || !vb.current) return;
            const wb = {};
            Wb.current = wb, queueMicrotask((() => {
              if (Wb.current !== wb) return;
              const Mb = Promise.all(pb.u.map((wb => bb.untilDrawn(wb)))).then((() => !0), (bb => (console.error("Failed to draw the character preview", bb), !1))),
                eb = new Promise((bb => {
                  setTimeout((() => {
                    bb(!1)
                  }), 1e4)
                }));
              Promise.race([Mb, eb]).then((Mb => {
                const eb = fb.current;
                rb.current === bb && Wb.current === wb && !Jb.current && eb && (Jb.current = !0, eb(Mb))
              }))
            }))
          }), []);
        return (0, eb.useImperativeHandle)(wb, (() => {
          const bb = (bb, wb) => {
            var Mb;
            (Rb.current[bb] = wb, null !== Bb && void 0 !== Bb && Bb[bb]) || (null === (Mb = rb.current) || void 0 === Mb || Mb.setCosmetic(bb, wb), Qb())
          };
          return {
            updateCosmetic: bb,
            setAllCosmetics(wb) {
              for (const eb of pb.u) {
                var Mb;
                bb(eb, null !== (Mb = wb[eb]) && void 0 !== Mb ? Mb : (0, Vb.b)(eb))
              }
            },
            isReady() {
              var bb, wb;
              return null !== (bb = null === (wb = rb.current) || void 0 === wb ? void 0 : wb.isReady()) && void 0 !== bb && bb
            },
            resetCamera() {
              var bb;
              null === (bb = rb.current) || void 0 === bb || bb.resetCamera()
            },
            setOrbit(bb) {
              var wb;
              null === (wb = rb.current) || void 0 === wb || wb.setOrbit(bb)
            },
            turnCamera(bb) {
              var wb;
              const Mb = gb.e[Fb];
              null === (wb = rb.current) || void 0 === wb || wb.setOrbit({
                ...Mb,
                yaw: Mb.yaw + bb
              })
            },
            async ensureReadyForCapture(bb) {
              var wb;
              await (null === (wb = rb.current) || void 0 === wb ? void 0 : wb.untilDrawn(bb))
            },
            getDevTools() {
              var bb;
              return null !== (bb = rb.current) && void 0 !== bb && bb.isReady() ? rb.current.dev : null
            },
            setNametagShown(bb) {
              var wb, Mb;
              Nb.current = bb, null === (wb = rb.current) || void 0 === wb || wb.setNametag(bb && null !== (Mb = Sb.current) && void 0 !== Mb ? Mb : null)
            }
          }
        }), [Bb, Fb, Qb]), (0, eb.useEffect)((() => {
          const bb = lb.e.register(Eb);
          let wb = !0;
          const Mb = bb => {
            const Mb = rb.current,
              eb = gb.i.openCharacter(Xb.current, Fb);
            if (rb.current = eb, Ib = eb, Mb) {
              Mb.close();
              const {
                width: bb,
                height: wb
              } = Kb.current;
              bb > 0 && wb > 0 && eb.resize(bb, wb)
            }
            Db.current = {}, Yb(!1), eb.ready.then((() => {
              if (wb && rb.current === eb)
                if (Yb(!0), bb) {
                  eb.resetCamera();
                  for (const bb of pb.u) {
                    var Mb;
                    eb.setCosmetic(bb, null !== (Mb = Rb.current[bb]) && void 0 !== Mb ? Mb : (0, Vb.b)(bb))
                  }
                } else Zb.current()
            })).catch((bb => {
              var Mb;
              (console.error("Failed to set up the character preview", bb), wb && rb.current === eb) && (null === (Mb = Ab.current) || void 0 === Mb || Mb.call(Ab))
            }))
          };
          Mb(!1);
          const eb = {
            reopen: () => {
              Mb(!0)
            }
          };
          return Ob.push(eb), () => {
            wb = !1, bb();
            const Mb = rb.current;
            Ib === Mb && (Mb.resetCamera(), Ib = null), Mb.close(), rb.current = null;
            const Hb = Ob.indexOf(eb);
            if (Ob.splice(Hb, 1), Hb === Ob.length && Hb > 0) {
              const bb = Ob[Hb - 1];
              queueMicrotask((() => {
                Ob.at(-1) === bb && null === Ib && gb.i.sharesCharacter() && bb.reopen()
              }))
            }
          }
        }), []), (0, eb.useEffect)((() => {
          xb <= 0 || jb <= 0 || rb.current.resize(xb, jb)
        }), [xb, jb]), (0, eb.useEffect)((() => {
          if (!cb) return;
          const bb = Db.current;
          for (const wb of pb.u) {
            const Mb = null === Bb || void 0 === Bb ? void 0 : Bb[wb],
              eb = bb[wb];
            Mb && Mb !== eb ? rb.current.setCosmetic(wb, Mb) : !Mb && eb && Rb.current[wb] && rb.current.setCosmetic(wb, Rb.current[wb])
          }
          Db.current = {
            ...Bb
          }, vb.current = !0, Qb()
        }), [Bb, cb, Qb]), (0, eb.useEffect)((() => {
          cb && rb.current.playEmote(null !== sb && void 0 !== sb ? sb : null)
        }), [sb, mb, cb]), (0, eb.useEffect)((() => {
          cb && Nb.current && rb.current.setNametag(null !== zb && void 0 !== zb ? zb : null)
        }), [zb, cb]), (0, eb.useEffect)((() => {
          if (!cb || null === hb) return;
          const bb = rb.current,
            {
              pitch: wb,
              radius: Mb
            } = gb.e[Fb];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return bb.setOrbit({
            yaw: hb + Ub,
            pitch: wb,
            radius: Mb
          }), () => {
            Ib === bb && bb.resetCamera()
          };
          const eb = performance.now();
          let Hb = 0;
          const pb = Vb => {
            rb.current === bb && (bb.setOrbit({
              yaw: hb + (Vb - eb) / 6e3 * 2 * Math.PI,
              pitch: wb,
              radius: Mb
            }), Hb = requestAnimationFrame(pb))
          };
          return Hb = requestAnimationFrame(pb), () => {
            cancelAnimationFrame(Hb), Ib === bb && bb.resetCamera()
          }
        }), [cb, hb]), (0, Lb.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Xb
        })
      })))
  },
  37611: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb
    });
    var eb = Mb(2142),
      Hb = Mb(1677);
    const pb = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(bb, wb) {
        bb !== this.userContext && this.sendHeld(), this.userContext = bb;
        for (const [eb, Hb] of wb) this.pending.set(eb, Hb);
        if (null !== this.timer) return;
        const Mb = this.lastSentAt + 1100 - Date.now();
        Mb <= 0 ? this.send(bb) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), Mb), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(bb) {
        const wb = Array.from(this.pending, (bb => {
          let [wb, Mb] = bb;
          return {
            gH: wb,
            lH: Mb
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), Hb.e.updateCosmetics(bb, wb).catch((bb => {
          console.error("Failed to update cosmetics", bb)
        }))
      }
    };

    function Vb(bb, wb) {
      for (const [Mb, eb] of wb) bb.setPlayerCosmetics(Mb, eb);
      if (null === eb.gameBridge.latest("connectedGame").websocketUrl) pb.save(bb, wb);
      else
        for (const [Mb, Hb] of wb) eb.gameBridge.send("updateMyCosmetic", {
          gH: Mb,
          lH: Hb
        })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);