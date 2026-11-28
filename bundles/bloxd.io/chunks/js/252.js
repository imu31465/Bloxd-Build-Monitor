export const id = 252;
export const ids = [252, 611];
export const modules = {
  45327: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      CharacterCustomisationUI: () => bO
    });
    var Wd = md(66),
      Fd = md(3016),
      Rd = md(4705),
      Xd = md(4687),
      Kd = md(1186),
      hd = md(1189),
      vd = md(1155),
      Qd = md.n(vd),
      td = md(1300),
      od = md(689),
      Nd = md(678),
      qd = md(1238),
      Hd = md(3143),
      yd = md(1685),
      bd = md(3597),
      Td = md(38256),
      pd = md(3146),
      Yd = md(4280),
      gd = md(2125),
      wd = md(1572),
      Ed = md(3181),
      Jd = md(3277),
      Ud = md(29),
      xd = md(3762),
      Bd = md(1627),
      Sd = md(2010);
    class sd {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(dd) {
        null !== dd && dd !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = dd)
      }
      isFor(dd) {
        return null === this.accountId || this.accountId === dd
      }
      overlay(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return dd.map(((dd, md) => {
          var Wd, Fd;
          return null !== (Wd = null !== (Fd = this.slots.get(md)) && void 0 !== Fd ? Fd : Od.get(md)) && void 0 !== Wd ? Wd : dd
        }))
      }
    }
    class ud extends xd.e {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new sd;
        super("saved outfits", (async Od => {
          const md = dd.isFor(Od.whamm),
            Wd = new Map(dd.slots),
            Fd = await Bd.e.getSavedOutfits(Od);
          return md ? dd.overlay(Fd, Wd) : Fd
        })), this.unsaved = dd, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(dd, Od) {
        var md, Wd;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(dd)) || this.unsaved.before.set(dd, null !== (md = null === (Wd = this.getState().data) || void 0 === Wd ? void 0 : Wd[dd]) && void 0 !== md ? md : {});
        this.unsaved.slots.set(dd, Od), this.update((md => md.map(((md, Wd) => Wd === dd ? Od : md)))), this.sending || this.sendUnsaved()
      }
      clear(dd) {
        this.save(dd, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let dd = !1;
        for (; this.unsaved.slots.size > 0;) {
          const md = new Map(this.unsaved.slots);
          let Wd = this.getState().accountId;
          try {
            const dd = await hd.userContextManager.getCurrentUserContext();
            if (Wd = dd.whamm, this.unsaved.moveTo(dd.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: Od,
              data: Fd
            } = this.getState();
            let Rd = Fd;
            Od === dd.whamm && null !== Rd || (Rd = this.unsaved.overlay(await Bd.e.getSavedOutfits(dd)), this.refresh()), await Bd.e.setSavedOutfits(dd, Rd), this.unsaved.isFor(dd.whamm) && Rd.forEach(((dd, Od) => {
              const Wd = this.unsaved.slots.get(Od);
              void 0 === Wd || Wd === md.get(Od) ? this.unsaved.before.delete(Od) : this.unsaved.before.set(Od, dd)
            }))
          } catch (Od) {
            if (console.error("Failed to save outfits", Od), this.getState().accountId === Wd && [...this.unsaved.slots].every((dd => {
                let [Od, Wd] = dd;
                return md.get(Od) === Wd
              }))) {
              const Od = [...md.values()].every(Td.c);
              Sd.g.showMessage({
                translationKey: Od ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const Wd = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((dd => dd.map(((dd, Od) => {
                var md;
                return null !== (md = Wd.get(Od)) && void 0 !== md ? md : dd
              })))), dd = !0
            }
          }
          for (const [dd, Od] of md) this.unsaved.slots.get(dd) === Od && this.unsaved.slots.delete(dd)
        }
        this.sending = !1, dd && this.refresh()
      }
    }
    const Vd = new ud;
    var Ad = md(45334),
      rd = md(1679),
      Gd = md(3249),
      nd = md(4096),
      Ld = md(4276),
      Pd = md(3198),
      zd = md(1443);
    md(35582), md(4283);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var cd = md(3184),
      jd = md(4298),
      Dd = md(4303),
      ed = md(1471),
      Id = md(3307),
      ld = md(1462),
      Cd = md(1341);

    function Zd(dd) {
      let {
        wornOutfit: Od,
        onApply: md,
        onOverwrite: Fd,
        onDelete: Rd
      } = dd;
      const {
        t: Xd
      } = (0, qd.G)(), {
        accountId: hd,
        data: vd
      } = (0, xd.g)(Vd, !1), {
        userContext: td
      } = (0, Kd.d)();
      async function od(dd, Od) {
        const md = await ld.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: Wd,
            data: Fd
          } = Vd.getState();
        var Xd, Kd;
        !0 === md && Wd === hd && null !== Fd && (Xd = Fd[dd], Kd = Od, (0, Td.b)(Xd, Kd) && (0, Td.b)(Kd, Xd)) && (Vd.clear(dd), Rd(dd))
      }
      return (0, Wd.useEffect)((() => {
        Vd.ensureLoaded()
      }), []), null === vd || hd !== td.whamm ? null : (0, Cd.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, Cd.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, Cd.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: Xd("homePage:myOutfits")
          })
        }), (0, Cd.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: vd.map(((dd, Wd) => {
            const Rd = (0, Td.c)(dd);
            return (0, Cd.jsxs)("div", {
              className: Qd()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !Rd
              }),
              children: [(0, Cd.jsxs)("div", {
                ...(0, wd.X)(),
                role: Rd ? "button" : "link",
                "data-pad-focusable": !0,
                className: Qd()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: Rd,
                  CharacterPresetCardActive: !Rd && (0, Td.b)(dd, Od)
                }),
                onClick: () => {
                  Rd ? Vd.save(Wd, Od) : md(dd)
                },
                children: [Rd && (0, Cd.jsxs)(Cd.Fragment, {
                  children: [(0, Cd.jsx)(zd.c, {
                    name: "plus"
                  }), Xd("homePage:saveOutfit")]
                }), !Rd && (0, Cd.jsxs)(Cd.Fragment, {
                  children: [(0, Cd.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, Cd.jsx)(Id.e, {
                      cosmetics: dd
                    })
                  }), (0, Cd.jsx)(wd.S, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      (0, Td.b)(Od, dd) || (Vd.save(Wd, Od), Fd(Wd, dd))
                    },
                    children: Xd("general:save")
                  })]
                })]
              }), !Rd && (0, Cd.jsx)("button", {
                type: "button",
                className: "SavedOutfitDeleteButton",
                "data-pad-destructive": !0,
                "aria-label": Xd("general:delete"),
                title: Xd("general:delete"),
                onClick: () => {
                  od(Wd, dd)
                },
                children: (0, Cd.jsx)(zd.c, {
                  name: "trash-can"
                })
              })]
            }, Wd)
          }))
        })]
      })
    }
    var kd = md(405),
      fd = md(1466);

    function Md() {
      (0, Ed.p)({
        mode: "self",
        source: "characterCustomisation",
        openItem: "superRank"
      })
    }

    function dO(dd) {
      let {
        KF: Od,
        hF: md,
        missingRanks: Wd,
        playerRanks: Fd,
        canBuy: Rd,
        closePopup: Xd
      } = dd;
      const {
        t: Kd
      } = (0, qd.G)(), hd = (0, Jd.v)(Date.now()), vd = Nd.n.find((dd => Fd.includes(dd.rank))), Qd = Kd((void 0 === vd ? hd : (0, Jd.p)(vd.id)).nameKey), {
        title: td,
        subtitle: Hd,
        textOpts: yd,
        soldRankUnlocks: bd
      } = function(dd, Od, md, Wd) {
        const Fd = dd.find((dd => !(0, Nd.g)(Nd.n, dd)));
        if (void 0 === Fd) return {
          title: md.unlockWithKey,
          soldRankUnlocks: !0
        };
        if ("youtuber" === Fd) return {
          title: "homePage:youtuberCape",
          subtitle: "homePage:youtuberCapeHow",
          textOpts: {
            subtitle: {
              tierRank: Wd
            }
          },
          soldRankUnlocks: !1
        };
        const Rd = {
          rank: od.l[Fd].chatTag[0].str
        };
        return {
          title: "homePage:creatorCape",
          subtitle: Od.some(od.n) ? "homePage:creatorCapeOtherTier" : "homePage:creatorCapeHow",
          textOpts: {
            title: Rd,
            subtitle: {
              ...Rd,
              tierRank: Wd
            }
          },
          soldRankUnlocks: !1
        }
      }(Wd, Fd, hd, Qd), Td = Rd && bd;
      return (0, Cd.jsx)(fd.j, {
        className: "RankLockedCosmeticPopup",
        title: td,
        subtitle: Hd,
        textOpts: yd,
        confirm: Td ? {
          text: "general:getItNow",
          onClick: () => {
            Xd(), Md()
          }
        } : {
          text: "general:ok",
          onClick: Xd
        },
        cancel: Td ? {
          text: "general:cancel",
          onClick: Xd
        } : void 0,
        children: (0, Cd.jsx)("div", {
          className: "RankLockedCosmeticPicture",
          children: (0, Cd.jsx)(Dd.e, {
            KF: Od,
            hF: md
          })
        })
      })
    }
    var OO = md(37929);

    function mO(dd, Od, md) {
      return !(0, Gd.y)(dd, Od) && !(0, Gd.G)(dd, Od, md)
    }

    function WO(dd, Od) {
      return !(0, Gd.C)(dd, Od)
    }

    function FO(dd) {
      return rd.n.find((Od => (0, rd.d)(Od) === dd))
    }

    function RO(dd, Od, md) {
      var Wd;
      if (!mO(dd, Od, md)) return null;
      const Fd = (0, Hd.i)(dd, Od).cosmeticPack;
      return rd.r.includes(Fd) ? Fd : null !== (Wd = (0, Gd.h)(dd, Od).find((dd => rd.r.includes(dd)))) && void 0 !== Wd ? Wd : null
    }

    function XO(dd, Od, md) {
      const Wd = function(dd, Od) {
          for (const [Wd, Fd] of Object.entries(yd.b)) {
            var md;
            if (!(0, Td.b)(Fd.cosmetics, dd) || !WO(Fd.cosmetics, Od)) continue;
            const Rd = null !== (md = FO(Wd)) && void 0 !== md ? md : Fd.cosmeticPack;
            if (Object.entries(Fd.cosmetics).every((dd => {
                let [md, Wd] = dd;
                return !mO(md, Wd, Od) || (0, Gd.e)(Rd, md, Wd)
              })) && rd.r.includes(Rd)) return Rd
          }
          return null
        }(Od, md),
        Fd = null === Wd ? [] : [{
          kind: "characters",
          pack: Wd
        }],
        Rd = "characters" === dd ? td.s : [dd, ...td.s.filter((Od => Od !== dd))];
      for (const Xd of Rd) {
        const dd = Od[Xd];
        if (void 0 === dd || null !== Wd && (0, Gd.e)(Wd, Xd, dd)) continue;
        const Rd = RO(Xd, dd, md);
        if (null === Rd) continue;
        const Kd = void 0 === (0, rd.d)(Rd) ? -1 : Fd.findIndex((dd => dd.pack === Rd)); - 1 === Kd ? Fd.push({
          kind: Xd,
          pack: Rd
        }) : Fd[Kd] = {
          kind: "characters",
          pack: Rd
        }
      }
      return Fd
    }
    var KO = md(3042);
    const hO = {
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

    function vO(dd) {
      let {
        gets: Od
      } = dd;
      const {
        t: md
      } = (0, qd.G)();
      return (0, Cd.jsx)("div", {
        className: "CharCustomisationGetTriedOn",
        children: Od.map((dd => {
          let {
            kind: Od,
            pack: Wd
          } = dd;
          return (0, Cd.jsxs)(wd.m, {
            className: "CharCustomisationGetPiece",
            onClick: () => {
              (0, nd.j)(Wd, "triedOnGet")
            },
            children: [(0, Cd.jsx)(zd.c, {
              name: "store"
            }), "characters" === Od ? md("homePage:getPack", {
              name: (0, KO.i)(Wd)
            }) : md(hO[Od])]
          }, Od + Wd)
        }))
      })
    }
    var QO = md(3584),
      tO = md(3592);

    function oO(dd, Od, md) {
      return null !== dd && !(0, QO.f)(tO.c, Od, md, dd.collected, dd.ownedPacks)
    }

    function NO(dd) {
      let {
        locked: Od,
        children: md
      } = dd;
      return Od ? (0, Cd.jsx)(qO, {
        children: md
      }) : md
    }

    function qO(dd) {
      var Od;
      let {
        children: md
      } = dd;
      const {
        t: Wd
      } = (0, qd.G)(), {
        userContext: Fd
      } = (0, Kd.d)(), Rd = null !== (Od = Fd.dailyDrop) && void 0 !== Od && Od.hidden ? Wd("dailyDrop:lockedFromHidden") : Wd("dailyDrop:lockedFrom");
      return (0, Cd.jsx)(ed.g, {
        tooltipInner: (0, Cd.jsx)(Cd.Fragment, {
          children: Rd
        }),
        children: md
      })
    }

    function HO(dd) {
      let {
        pack: Od,
        ownedPacks: md,
        showStoreLink: Wd = !1,
        children: Fd
      } = dd;
      const {
        t: Rd
      } = (0, qd.G)(), Xd = rd.c[Od].purchasable && !md.includes(Od) && rd.r.includes(Od), Kd = nd.n[Od];
      return (0, Cd.jsxs)("div", {
        className: Qd()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: Xd
        }),
        children: [Kd && (0, Cd.jsx)(Kd, {}), (0, Cd.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, Cd.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: (0, KO.i)(Od)
          }), (Xd || Wd) && (0, Cd.jsxs)(wd.C, {
            onClick: () => {
              Xd ? (0, nd.j)(Od) : (0, Ed.p)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, Cd.jsx)(zd.c, {
              name: "store"
            }), " ", Rd("general:viewInShop")]
          })]
        }), Xd && "bee" === Od && (0, Cd.jsx)(nd.c, {}), Fd]
      })
    }

    function yO(dd) {
      let {
        equippedEmoteIds: Od,
        ownedPacks: md,
        canBuy: Wd,
        onUpdateLoadout: Fd,
        onEmoteSelected: Rd,
        onEquipPreviewSkin: Xd
      } = dd;
      const {
        t: Kd
      } = (0, qd.G)(), hd = new Set(Od), vd = new Map, od = Object.keys(Hd.f.emote).sort(((dd, Od) => {
        var md, Wd, Fd, Rd;
        return (null !== (md = null === (Wd = (0, Hd.i)("emote", dd)) || void 0 === Wd ? void 0 : Wd.clientIdx) && void 0 !== md ? md : 0) - (null !== (Fd = null === (Rd = (0, Hd.i)("emote", Od)) || void 0 === Rd ? void 0 : Rd.clientIdx) && void 0 !== Fd ? Fd : 0)
      })).filter((dd => {
        const Od = (0, Hd.m)("emote", dd),
          Fd = (0, Gd.G)("emote", dd, md);
        return !(Od.purchasable && !Fd && !Wd) && (Od.clientSelectable || Fd)
      }));
      for (const Qd of od) {
        const dd = (0, Hd.i)("emote", Qd).cosmeticPack;
        vd.has(dd) || vd.set(dd, []), vd.get(dd).push(Qd)
      }
      const Nd = Array.from(vd.keys());
      return (0, Cd.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, Cd.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, Cd.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: Kd("emotes:equippedCount", {
              count: Od.length,
              max: td.k
            })
          }), (0, Cd.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: Kd("emotes:loadoutHint")
          })]
        }), Nd.map((dd => {
          const Wd = vd.get(dd);
          return (0, Cd.jsx)(HO, {
            pack: dd,
            ownedPacks: md,
            children: (0, Cd.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: Wd.map((dd => {
                var Wd;
                const Xd = Od.indexOf(dd),
                  vd = -1 !== Xd,
                  od = Od.length >= td.k,
                  Nd = mO("emote", dd, md),
                  qd = Nd || !vd && od,
                  Hd = (0, pd.j)(dd);
                return (0, Cd.jsxs)("div", {
                  className: Qd()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: vd
                  }),
                  onClick: () => {
                    Rd(dd)
                  },
                  children: [(0, Cd.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, Cd.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(${(0,jd.h)("emote",dd)})`
                      },
                      "aria-hidden": !0
                    }), (0, Cd.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (Wd = null === Hd || void 0 === Hd ? void 0 : Hd.displayName) && void 0 !== Wd ? Wd : dd
                    })]
                  }), (0, Cd.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [vd && (0, Cd.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: Xd + 1
                    }), Nd && (0, Cd.jsx)(zd.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, Cd.jsx)(ed.g, {
                      tooltipInner: (0, Cd.jsx)(Cd.Fragment, {
                        children: Kd(vd ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, Cd.jsx)("div", {
                        className: Qd()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: qd,
                          EmoteCustomPartToggleEquipped: vd
                        }),
                        onClick: md => {
                          md.stopPropagation(), qd || function(dd) {
                            hd.has(dd) ? Fd(Od.filter((Od => Od !== dd))) : Od.length >= td.k || Fd([...Od, dd])
                          }(dd)
                        },
                        children: (0, Cd.jsx)(zd.c, {
                          name: vd ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, dd)
              }))
            })
          }, dd)
        }))]
      })
    }
    const bO = (0, Wd.memo)((function(dd) {
      var Od, md;
      let {
        selectedTab: vd
      } = dd;
      const pd = "characters" === vd ? "skin" : vd,
        {
          t: Ed
        } = (0, qd.G)(),
        {
          userContext: xd,
          isUserContextUpdating: Bd
        } = (0, Kd.d)(),
        Sd = (0, Fd.d)(),
        {
          gameState: sd
        } = (0, Ud.p)(["gameState"]),
        [ud, nd] = (0, Wd.useState)({}),
        jd = (0, Wd.useRef)(ud);
      jd.current = ud;
      const [ed, Id] = (0, Wd.useState)({}), [fd, RO] = (0, Wd.useState)(null), {
        previewEmote: KO,
        triggerEmote: hO
      } = (0, Yd.b)(), QO = (0, Wd.useRef)(td.s.reduce(((dd, Od) => (dd[Od] = (0, bd.b)(Od), dd)), {})), tO = (0, Wd.useRef)(!1), qO = (0, Wd.useRef)(null), bO = (0, Wd.useRef)(KO);
      bO.current = KO;
      const TO = (0, Wd.useRef)(null),
        pO = (0, Wd.useRef)(null);

      function YO() {
        null !== TO.current && (clearTimeout(TO.current), TO.current = null);
        const dd = pO.current;
        null !== dd && (pO.current = null, (0, OO.d)(xd, [
          ["emote", dd]
        ]))
      }

      function gO(dd, Od, md) {
        var Wd, Fd, Rd;
        QO.current = {
          ...QO.current,
          [dd]: Od
        }, Sd(), md && ((0, OO.d)(xd, [
          [dd, Od]
        ]), RO(null));
        const Xd = (0, Hd.i)(dd, Od);
        if (null !== Xd && void 0 !== Xd && Xd.colourGroup && null !== (Wd = rd.c[Xd.cosmeticPack].colourGroups) && void 0 !== Wd && null !== (Fd = Wd[Xd.colourGroup]) && void 0 !== Fd && Fd.showSwatchSelector) {
          const md = (0, Hd.h)(Od);
          md && Id((Od => ({
            ...Od,
            [`${Xd.cosmeticPack}_${dd}_${Xd.colourGroup}`]: parseInt(md[1])
          })))
        }
        null !== (Rd = qO.current) && void 0 !== Rd && Rd.isReady() && qO.current.updateCosmetic(dd, Od)
      }

      function wO(dd) {
        nd((Od => {
          const md = {
            ...Od
          };
          return delete md[dd], md
        }))
      }

      function aO(dd, Od) {
        let {
          undoable: md
        } = Od;
        Object.keys(ud).length > 0 && nd({});
        const Wd = function(dd, Od, md, Wd) {
          return Object.entries(dd).filter((dd => {
            let [Fd, Rd] = dd;
            return Od[Fd] !== Rd && !mO(Fd, Rd, md) && !Wd(Fd, Rd)
          }))
        }(dd, QO.current, EO, ((dd, Od) => oO(JO, dd, Od)));
        md ? Wd.length > 0 && RO({
          kind: "worn",
          outfit: (0, Td.g)(QO.current)
        }) : RO(null);
        for (const [Fd, Rd] of Wd) gO(Fd, Rd, !1);
        Wd.length > 0 && (0, OO.d)(xd, Wd)
      }(0, gd.b)("cosmeticsUpdated", (dd => {
        let Od = !1;
        for (const {
            local: md,
            KF: Wd,
            hF: Fd
          }
          of dd) {
          if (!md) return;
          Od = !0, tO.current || gO(Wd, Fd, !1), Sd()
        }
        Od && (tO.current = !0)
      })), (0, Wd.useEffect)((() => {
        if (!Bd) {
          for (const [dd, Od] of Object.entries(xd.getPlayerCosmetics())) gO(dd, Od, !1);
          Sd()
        }
      }), [Bd]), (0, Wd.useEffect)((() => () => {
        YO()
      }), []);
      const EO = xd.getOwnedCosmeticPacks(),
        JO = function(dd, Od) {
          return null === dd ? null : {
            collected: new Set(dd.collected),
            ownedPacks: Od
          }
        }(xd.dailyDrop, EO),
        UO = (0, cd.usePurchasesAllowed)(),
        xO = xd.getPlayerRanks(),
        BO = xd === hd.NULL_USER_CONTEXT ? "" : xd.getPlayerName(),
        SO = null !== (Od = null !== (md = ud.nameColour) && void 0 !== md ? md : xd.getPlayerCosmetics().nameColour) && void 0 !== Od ? Od : od.b,
        sO = (0, Wd.useMemo)((() => ({
          name: BO,
          ranks: xO,
          nameColour: SO
        })), [BO, xO, SO]),
        uO = Object.keys(Hd.f[pd]).filter((dd => {
          const Od = (0, Hd.m)(pd, dd),
            md = (0, Gd.G)(pd, dd, EO);
          return !(Od.purchasable && !md && !UO) && (Od.clientSelectable || md)
        })).sort(((dd, Od) => {
          var md, Wd, Fd, Rd;
          return (null !== (md = null === (Wd = (0, Hd.i)(pd, dd)) || void 0 === Wd ? void 0 : Wd.clientIdx) && void 0 !== md ? md : 0) - (null !== (Fd = null === (Rd = (0, Hd.i)(pd, Od)) || void 0 === Rd ? void 0 : Rd.clientIdx) && void 0 !== Fd ? Fd : 0)
        })),
        VO = new Map;
      for (const Wd of uO) {
        var iO;
        const dd = null === (iO = (0, Hd.i)(pd, Wd)) || void 0 === iO ? void 0 : iO.cosmeticPack;
        VO.has(dd) || VO.set(dd, []), VO.get(dd).push(Wd)
      }
      const AO = function(dd, Od) {
          const md = new Set,
            Wd = new Set;
          for (const [Fd, Rd] of Object.entries(Hd.f[dd])) {
            if (void 0 === Rd.colourGroup) continue;
            const Xd = `${Rd.cosmeticPack}_${Rd.colourGroup}`;
            (mO(dd, Fd, Od) ? Wd : md).add(Xd)
          }
          return new Set([...md].filter((dd => Wd.has(dd))))
        }(pd, EO),
        rO = new Map;
      for (const [Wd, Fd] of VO) {
        const dd = [],
          Od = new Map;
        for (const Wd of Fd) {
          var GO, nO;
          const md = null !== (GO = null === (nO = (0, Hd.i)(pd, Wd)) || void 0 === nO ? void 0 : nO.colourGroup) && void 0 !== GO ? GO : null;
          Od.has(md) || (Od.set(md, []), dd.push(md)), Od.get(md).push(Wd)
        }
        const md = dd.map((dd => {
          var md;
          const Fd = Od.get(dd),
            Rd = dd ? null === (md = rd.c[Wd].colourGroups) || void 0 === md ? void 0 : md[dd] : void 0,
            Xd = !0 === (null === Rd || void 0 === Rd ? void 0 : Rd.showSwatchSelector) && !AO.has(`${Wd}_${dd}`);
          if (Xd && Rd) {
            var Kd;
            const Od = null !== (Kd = ed[`${Wd}_${pd}_${dd}`]) && void 0 !== Kd ? Kd : (0, rd.f)(Rd.colours);
            return {
              groupName: dd,
              showSwatch: Xd,
              cosmetics: Fd.filter((dd => {
                const md = (0, Hd.h)(dd);
                return !md || Od.toString() === md[1].toString()
              }))
            }
          }
          return {
            groupName: dd,
            cosmetics: Fd,
            showSwatch: Xd
          }
        }));
        rO.set(Wd, md)
      }
      const LO = Array.from(VO.keys()),
        PO = new Map;
      for (const [Wd, Fd] of Object.entries(yd.b)) {
        const dd = rd.c[Fd.cosmeticPack],
          Od = (0, Gd.C)(Fd.cosmetics, EO),
          md = void 0 !== FO(Wd);
        (dd.clientSelectable || md || Od) && ((!dd.purchasable || Od || UO) && (PO.has(Fd.cosmeticPack) || PO.set(Fd.cosmeticPack, []), PO.get(Fd.cosmeticPack).push([Wd, Fd])))
      }
      const zO = Array.from(PO.keys()),
        cO = UO ? XO(vd, ud, EO) : [],
        [jO, DO] = (0, Wd.useState)(!1);
      return !jO && (cO.length > 0 || null !== fd) && DO(!0), (0, Cd.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === pd || "nameColour" === pd) && !(0, Nd.b)(xO) && (0, Cd.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, Cd.jsx)(zd.c, {
            name: "bolt"
          }), Ed((0, Jd.v)(Date.now()).unlockWithKey), UO && (0, Cd.jsx)(wd.m, {
            onClick: () => {
              Md()
            },
            children: Ed("general:getItNow")
          })]
        }), (0, Cd.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === vd && (0, Cd.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, Cd.jsx)(Zd, {
              wornOutfit: (0, Td.g)(QO.current),
              onApply: dd => {
                aO(dd, {
                  undoable: !0
                })
              },
              onOverwrite: (dd, Od) => {
                RO({
                  kind: "slot",
                  slot: dd,
                  outfit: Od
                })
              },
              onDelete: dd => {
                RO((Od => "slot" === (null === Od || void 0 === Od ? void 0 : Od.kind) && Od.slot === dd ? null : Od))
              }
            }), zO.map((dd => {
              const Od = PO.get(dd);
              return (0, Cd.jsx)(HO, {
                pack: dd,
                ownedPacks: EO,
                showStoreLink: !rd.p.includes(dd) && Od.some((dd => {
                  let [, {
                    cosmetics: Od
                  }] = dd;
                  return WO(Od, EO)
                })),
                children: (0, Cd.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: Od.map((dd => {
                    let [Od, {
                      cosmetics: md
                    }] = dd;
                    const Wd = WO(md, EO),
                      Fd = !Wd && function(dd, Od) {
                        return Object.entries(Od).some((Od => {
                          let [md, Wd] = Od;
                          return oO(dd, md, Wd)
                        }))
                      }(JO, md),
                      Rd = Wd || Fd,
                      Xd = (0, Td.b)(md, ud),
                      Kd = !Xd && (0, Td.b)(md, QO.current);
                    return (0, Cd.jsx)(NO, {
                      locked: Fd,
                      children: (0, Cd.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: Qd()("CharacterPresetCard", {
                          CharacterPresetCardActive: Kd,
                          CharacterPresetCardTryingOn: Xd
                        }),
                        onClick: () => {
                          Rd ? function(dd) {
                            (0, Td.b)(dd, ud) ? nd({}): nd({
                              ...dd
                            })
                          }(md) : aO(md, {
                            undoable: !0
                          })
                        },
                        children: [(0, Cd.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(${(0,Pd.g)(Od)})`
                          }
                        }), Rd && (0, Cd.jsx)(zd.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, Od)
                  }))
                })
              }, dd)
            }))]
          }), "emote" === vd && (0, Cd.jsx)(yO, {
            equippedEmoteIds: (0, bd.h)(QO.current.emote),
            ownedPacks: EO,
            canBuy: UO,
            onUpdateLoadout: dd => {
              const Od = (0, bd.k)(dd);
              var md;
              QO.current = {
                ...QO.current,
                emote: Od
              }, xd.setPlayerCosmetics("emote", Od), Sd(), md = Od, pO.current = md, null !== TO.current && clearTimeout(TO.current), TO.current = setTimeout(YO, 350)
            },
            onEmoteSelected: hO,
            onEquipPreviewSkin: () => {
              ! function(dd, Od) {
                for (const md of td.s)(0, yd.e)(md) && dd(md, "skin" === md ? "skin_preview" : `${md}_none`, !1);
                Od()
              }(gO, Sd)
            }
          }), "characters" !== vd && "emote" !== vd && (0, Cd.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, LO.map((dd => {
              const Od = rO.get(dd);
              return (0, Cd.jsx)(HO, {
                pack: dd,
                ownedPacks: EO,
                children: Od.map((Od => {
                  var md;
                  let {
                    groupName: Wd,
                    cosmetics: Fd,
                    showSwatch: Rd
                  } = Od;
                  const Xd = Wd ? null === (md = rd.c[dd].colourGroups) || void 0 === md ? void 0 : md[Wd] : void 0,
                    Kd = `${dd}_${pd}_${Wd}`;
                  return (0, Cd.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [Rd && Xd && (0, Cd.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...Xd.colours.map(((dd, Od) => ({
                        color: dd,
                        index: Od
                      })))].sort(((dd, Od) => dd.color.order - Od.color.order)).map((Od => {
                        var md;
                        let {
                          color: Fd,
                          index: Rd
                        } = Od;
                        return (0, Cd.jsx)("div", {
                          className: Qd()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (md = ed[Kd]) && void 0 !== md ? md : (0, rd.f)(Xd.colours)) === Rd
                          }),
                          style: {
                            backgroundColor: `rgb(${Fd.rbg.join(",")})`
                          },
                          onClick: () => {
                            var Od;
                            Id((dd => ({
                              ...dd,
                              [Kd]: Rd
                            })));
                            const md = ud[pd],
                              Fd = md ? (0, Hd.i)(pd, md) : null,
                              Xd = (null === Fd || void 0 === Fd ? void 0 : Fd.cosmeticPack) === dd,
                              hd = Xd ? md : QO.current[pd],
                              vd = Xd ? Fd : (0, Hd.i)(pd, hd);
                            if ((null === vd || void 0 === vd ? void 0 : vd.cosmeticPack) !== dd) return;
                            if ((null !== (Od = null === vd || void 0 === vd ? void 0 : vd.colourGroup) && void 0 !== Od ? Od : null) !== Wd) return;
                            const Qd = (0, Hd.h)(hd);
                            if (Qd) {
                              const dd = `${pd}_${Qd[0]}_${Rd}`;
                              mO(pd, dd, EO) || oO(JO, pd, dd) ? nd((Od => ({
                                ...Od,
                                [pd]: dd
                              }))) : (Xd && wO(pd), gO(pd, dd, !0))
                            }
                          }
                        }, Fd.rbg.join())
                      }))
                    }), Fd.map((dd => {
                      const Od = dd === QO.current[pd],
                        md = ud[pd] === dd,
                        Wd = mO(pd, dd, EO),
                        Fd = !Wd && oO(JO, pd, dd),
                        Rd = Wd || Fd,
                        Xd = Rd || Od ? [] : function(dd, Od, md) {
                          if ("cape" === dd) {
                            const {
                              needsSuperRankPerks: dd,
                              rank: Wd
                            } = od.i[Od];
                            return [...dd && !(0, Nd.b)(md) ? [Nd.q.rank] : [], ...void 0 === Wd || md.includes(Wd) ? [] : [Wd]]
                          }
                          return "nameColour" !== dd || (0, kd.Rd)(md, Od) ? [] : [Nd.q.rank]
                        }(pd, dd, xO),
                        Kd = 0 === Xd.length;
                      return (0, Cd.jsx)(NO, {
                        locked: Fd,
                        children: (0, Cd.jsxs)("div", {
                          "data-pad-focusable": !0,
                          className: Qd()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: Od && !md,
                            TryingOnCharCustomPartWrapper: md,
                            DisabledCharCustomPartWrapper: !Kd,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === pd
                          }),
                          onClick: () => {
                            if (!Kd) return Od = {
                              KF: pd,
                              hF: dd,
                              missingRanks: Xd,
                              playerRanks: xO,
                              canBuy: UO
                            }, void ld.NotificationProvider.showCustomPopup({
                              body: dd => (0, Cd.jsx)(dO, {
                                ...Od,
                                closePopup: dd
                              }),
                              disableExitButton: !0
                            });
                            var Od;
                            if (Rd) nd((Od => {
                              if (Od[pd] === dd) {
                                const dd = {
                                  ...Od
                                };
                                return delete dd[pd], dd
                              }
                              return {
                                ...Od,
                                [pd]: dd
                              }
                            }));
                            else {
                              var md;
                              if (ud[pd] && wO(pd), dd === QO.current[pd]) return;
                              null !== (md = qO.current) && void 0 !== md && md.isReady() && gO(pd, dd, !0)
                            }
                          },
                          children: ["profileEffect" === pd ? (0, Cd.jsx)(Ld.d, {
                            profileEffect: dd,
                            name: xd.getPlayerName(),
                            cosmetics: xd.getPlayerCosmetics()
                          }) : (0, Cd.jsx)(Dd.e, {
                            KF: pd,
                            hF: dd
                          }), Rd && (0, Cd.jsx)(zd.c, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, dd)
                    }))]
                  }, null !== Wd && void 0 !== Wd ? Wd : "ungrouped")
                }))
              }, dd)
            }))]
          }), (0, Cd.jsxs)("div", {
            className: "CharCustomisationPreviewColumn",
            children: [(0, Cd.jsx)(Ad.CharacterPreview, {
              ref: qO,
              forcedCosmetics: ud,
              hK: KO.id,
              emotePlaySeq: KO.seq,
              nametag: sO,
              onReady: () => {
                for (const dd of td.s) gO(dd, QO.current[dd], !1)
              },
              onDrawn: dd => {
                var Od, md;
                const Wd = null === (Od = qO.current) || void 0 === Od || null === (md = Od.getDevTools()) || void 0 === md ? void 0 : md.canvas(),
                  Fd = (dd, Od) => 0 === Object.keys(jd.current).length && JSON.stringify(xd.getPlayerCosmetics()) === dd && bO.current.seq === Od.seq && null === bO.current.id,
                  Kd = JSON.stringify(xd.getPlayerCosmetics()),
                  hd = bO.current;
                if (!Rd.i || !dd || void 0 === Wd || !Fd(Kd, hd)) return;
                const vd = (0, Xd.g)(xd),
                  Qd = qO.current;
                Qd.setNametagShown(!1), (0, Xd.e)(Wd, vd, (() => Fd(Kd, hd))).catch((dd => {
                  console.warn("[loading-character] couldn't keep your picture from Customise", dd)
                })).finally((() => {
                  Qd.setNametagShown(!0)
                }))
              }
            }), jO && (0, Cd.jsxs)("div", {
              className: "CharCustomisationPreviewActions",
              children: [cO.length > 0 && (0, Cd.jsx)(vO, {
                gets: cO
              }), fd && (0, Cd.jsxs)(wd.g, {
                className: "CharCustomisationUndo",
                onClick: () => {
                  "worn" === fd.kind ? aO(fd.outfit, {
                    undoable: !1
                  }) : (Vd.save(fd.slot, fd.outfit), RO(null))
                },
                children: [(0, Cd.jsx)(zd.c, {
                  name: "rotate-left"
                }), Ed("general:undo")]
              })]
            })]
          })]
        })]
      })
    }))
  },
  45334: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      CharacterPreview: () => Nd
    });
    var Wd = md(66),
      Fd = md(3851),
      Rd = md(1300),
      Xd = md(3597),
      Kd = md(35582),
      hd = md(4849),
      vd = md(1341);
    let Qd = null;
    const td = [],
      od = .6 * Math.PI,
      Nd = (0, Wd.memo)((0, Wd.forwardRef)((function(dd, Od) {
        let {
          onReady: md,
          onDrawn: Nd,
          onSetupFailed: qd,
          owner: Hd = "other",
          framing: yd = "player",
          forcedCosmetics: bd,
          hK: Td,
          emotePlaySeq: pd,
          turntableFromYaw: Yd = null,
          nametag: gd
        } = dd;
        const wd = (0, Wd.useRef)(null),
          {
            width: Ed,
            height: Jd
          } = (0, Fd.b)(wd),
          Ud = (0, Wd.useRef)({
            width: Ed,
            height: Jd
          });
        Ud.current = {
          width: Ed,
          height: Jd
        };
        const xd = (0, Wd.useRef)(null),
          Bd = (0, Wd.useRef)({}),
          Sd = (0, Wd.useRef)({}),
          [sd, ud] = (0, Wd.useState)(!1),
          Vd = (0, Wd.useRef)(md);
        Vd.current = md;
        const Ad = (0, Wd.useRef)(Nd);
        Ad.current = Nd;
        const rd = (0, Wd.useRef)(qd);
        rd.current = qd;
        const Gd = (0, Wd.useRef)(null),
          nd = (0, Wd.useRef)(!1),
          Ld = (0, Wd.useRef)(gd);
        Ld.current = gd;
        const Pd = (0, Wd.useRef)(!0),
          zd = (0, Wd.useRef)(!1),
          cd = (0, Wd.useCallback)((() => {
            const dd = xd.current;
            if (!dd || !Ad.current || nd.current || !zd.current) return;
            const Od = {};
            Gd.current = Od, queueMicrotask((() => {
              if (Gd.current !== Od) return;
              const md = Promise.all(Rd.s.map((Od => dd.untilDrawn(Od)))).then((() => !0), (dd => (console.error("Failed to draw the character preview", dd), !1))),
                Wd = new Promise((dd => {
                  setTimeout((() => {
                    dd(!1)
                  }), 1e4)
                }));
              Promise.race([md, Wd]).then((md => {
                const Wd = Ad.current;
                xd.current === dd && Gd.current === Od && !nd.current && Wd && (nd.current = !0, Wd(md))
              }))
            }))
          }), []);
        return (0, Wd.useImperativeHandle)(Od, (() => {
          const dd = (dd, Od) => {
            var md;
            (Bd.current[dd] = Od, null !== bd && void 0 !== bd && bd[dd]) || (null === (md = xd.current) || void 0 === md || md.setCosmetic(dd, Od), cd())
          };
          return {
            updateCosmetic: dd,
            setAllCosmetics(Od) {
              for (const Wd of Rd.s) {
                var md;
                dd(Wd, null !== (md = Od[Wd]) && void 0 !== md ? md : (0, Xd.b)(Wd))
              }
            },
            isReady() {
              var dd, Od;
              return null !== (dd = null === (Od = xd.current) || void 0 === Od ? void 0 : Od.isReady()) && void 0 !== dd && dd
            },
            resetCamera() {
              var dd;
              null === (dd = xd.current) || void 0 === dd || dd.resetCamera()
            },
            setOrbit(dd) {
              var Od;
              null === (Od = xd.current) || void 0 === Od || Od.setOrbit(dd)
            },
            turnCamera(dd) {
              var Od;
              const md = Kd.c[yd];
              null === (Od = xd.current) || void 0 === Od || Od.setOrbit({
                ...md,
                yaw: md.yaw + dd
              })
            },
            async ensureReadyForCapture(dd) {
              var Od;
              await (null === (Od = xd.current) || void 0 === Od ? void 0 : Od.untilDrawn(dd))
            },
            getDevTools() {
              var dd;
              return null !== (dd = xd.current) && void 0 !== dd && dd.isReady() ? xd.current.dev : null
            },
            setNametagShown(dd) {
              var Od, md;
              Pd.current = dd, null === (Od = xd.current) || void 0 === Od || Od.setNametag(dd && null !== (md = Ld.current) && void 0 !== md ? md : null)
            }
          }
        }), [bd, yd, cd]), (0, Wd.useEffect)((() => {
          const dd = hd.b.register(Hd);
          let Od = !0;
          const md = dd => {
            const md = xd.current,
              Wd = Kd.i.openCharacter(wd.current, yd);
            if (xd.current = Wd, Qd = Wd, md) {
              md.close();
              const {
                width: dd,
                height: Od
              } = Ud.current;
              dd > 0 && Od > 0 && Wd.resize(dd, Od)
            }
            Sd.current = {}, ud(!1), Wd.ready.then((() => {
              if (Od && xd.current === Wd)
                if (ud(!0), dd) {
                  Wd.resetCamera();
                  for (const dd of Rd.s) {
                    var md;
                    Wd.setCosmetic(dd, null !== (md = Bd.current[dd]) && void 0 !== md ? md : (0, Xd.b)(dd))
                  }
                } else Vd.current()
            })).catch((dd => {
              var md;
              (console.error("Failed to set up the character preview", dd), Od && xd.current === Wd) && (null === (md = rd.current) || void 0 === md || md.call(rd))
            }))
          };
          md(!1);
          const Wd = {
            reopen: () => {
              md(!0)
            }
          };
          return td.push(Wd), () => {
            Od = !1, dd();
            const md = xd.current;
            Qd === md && (md.resetCamera(), Qd = null), md.close(), xd.current = null;
            const Fd = td.indexOf(Wd);
            if (td.splice(Fd, 1), Fd === td.length && Fd > 0) {
              const dd = td[Fd - 1];
              queueMicrotask((() => {
                td.at(-1) === dd && null === Qd && Kd.i.sharesCharacter() && dd.reopen()
              }))
            }
          }
        }), []), (0, Wd.useEffect)((() => {
          Ed <= 0 || Jd <= 0 || xd.current.resize(Ed, Jd)
        }), [Ed, Jd]), (0, Wd.useEffect)((() => {
          if (!sd) return;
          const dd = Sd.current;
          for (const Od of Rd.s) {
            const md = null === bd || void 0 === bd ? void 0 : bd[Od],
              Wd = dd[Od];
            md && md !== Wd ? xd.current.setCosmetic(Od, md) : !md && Wd && Bd.current[Od] && xd.current.setCosmetic(Od, Bd.current[Od])
          }
          Sd.current = {
            ...bd
          }, zd.current = !0, cd()
        }), [bd, sd, cd]), (0, Wd.useEffect)((() => {
          sd && xd.current.playEmote(null !== Td && void 0 !== Td ? Td : null)
        }), [Td, pd, sd]), (0, Wd.useEffect)((() => {
          sd && Pd.current && xd.current.setNametag(null !== gd && void 0 !== gd ? gd : null)
        }), [gd, sd]), (0, Wd.useEffect)((() => {
          if (!sd || null === Yd) return;
          const dd = xd.current,
            {
              pitch: Od,
              radius: md
            } = Kd.c[yd];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return dd.setOrbit({
            yaw: Yd + od,
            pitch: Od,
            radius: md
          }), () => {
            Qd === dd && dd.resetCamera()
          };
          const Wd = performance.now();
          let Fd = 0;
          const Rd = Xd => {
            xd.current === dd && (dd.setOrbit({
              yaw: Yd + (Xd - Wd) / 6e3 * 2 * Math.PI,
              pitch: Od,
              radius: md
            }), Fd = requestAnimationFrame(Rd))
          };
          return Fd = requestAnimationFrame(Rd), () => {
            cancelAnimationFrame(Fd), Qd === dd && dd.resetCamera()
          }
        }), [sd, Yd]), (0, vd.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: wd
        })
      })))
  },
  37929: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd
    });
    var Wd = md(2092),
      Fd = md(1627);
    const Rd = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(dd, Od) {
        dd !== this.userContext && this.sendHeld(), this.userContext = dd;
        for (const [Wd, Fd] of Od) this.pending.set(Wd, Fd);
        if (null !== this.timer) return;
        const md = this.lastSentAt + 1100 - Date.now();
        md <= 0 ? this.send(dd) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), md), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(dd) {
        const Od = Array.from(this.pending, (dd => {
          let [Od, md] = dd;
          return {
            KF: Od,
            hF: md
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), Fd.e.updateCosmetics(dd, Od).catch((dd => {
          console.error("Failed to update cosmetics", dd)
        }))
      }
    };

    function Xd(dd, Od) {
      for (const [md, Wd] of Od) dd.setPlayerCosmetics(md, Wd);
      if (null === Wd.gameBridge.latest("connectedGame").websocketUrl) Rd.save(dd, Od);
      else
        for (const [md, Fd] of Od) Wd.gameBridge.send("updateMyCosmetic", {
          KF: md,
          hF: Fd
        })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);