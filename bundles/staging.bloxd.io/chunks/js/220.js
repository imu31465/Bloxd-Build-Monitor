export const id = 220;
export const ids = [220, 296];
export const modules = {
  41517: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      CharacterCustomisationUI: () => Si
    });
    var Op = cp(62),
      op = cp(3107),
      Ip = cp(1141),
      Sp = cp(1049),
      xp = cp.n(Sp),
      Lp = cp(1251),
      Yp = cp(620),
      Dp = cp(1201),
      Ap = cp(2276),
      Pp = cp(1579),
      Wp = cp(2638);
    const yp = Lp.u.filter((pp => !Pp.f.includes(pp)));

    function Up(pp, ip) {
      return yp.includes(pp) && "string" === typeof ip && (0, Wp.f)(pp, ip)
    }

    function wp(pp) {
      const ip = {};
      for (const cp of yp) {
        const Op = pp[cp];
        void 0 !== Op && Up(cp, Op) && (ip[cp] = Op)
      }
      return ip
    }

    function vp(pp) {
      return 0 === Object.keys(pp).length
    }

    function tp(pp, ip) {
      return Object.entries(pp).every((pp => {
        let [cp, Op] = pp;
        return ip[cp] === Op
      }))
    }
    var Hp = cp(2281),
      dp = cp(3190),
      ep = cp(2004),
      jp = cp(1480),
      kp = cp(2314),
      mp = cp(25),
      Rp = cp(2767),
      qp = cp(1520),
      Mp = cp(1149),
      Cp = cp(1880);
    class Ep {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(pp) {
        null !== pp && pp !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = pp)
      }
      isFor(pp) {
        return null === this.accountId || this.accountId === pp
      }
      overlay(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return pp.map(((pp, cp) => {
          var Op, op;
          return null !== (Op = null !== (op = this.slots.get(cp)) && void 0 !== op ? op : ip.get(cp)) && void 0 !== Op ? Op : pp
        }))
      }
    }
    class Xp extends Rp.e {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Ep;
        super("saved outfits", (async ip => {
          const cp = pp.isFor(ip.whamm),
            Op = new Map(pp.slots),
            op = await qp.b.getSavedOutfits(ip);
          return cp ? pp.overlay(op, Op) : op
        })), this.unsaved = pp, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(pp, ip) {
        var cp, Op;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(pp)) || this.unsaved.before.set(pp, null !== (cp = null === (Op = this.getState().data) || void 0 === Op ? void 0 : Op[pp]) && void 0 !== cp ? cp : {});
        this.unsaved.slots.set(pp, ip), this.update((cp => cp.map(((cp, Op) => Op === pp ? ip : cp)))), this.sending || this.sendUnsaved()
      }
      clear(pp) {
        this.save(pp, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let pp = !1;
        for (; this.unsaved.slots.size > 0;) {
          const cp = new Map(this.unsaved.slots);
          let Op = this.getState().accountId;
          try {
            const pp = await Mp.userContextManager.getCurrentUserContext();
            if (Op = pp.whamm, this.unsaved.moveTo(pp.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: ip,
              data: op
            } = this.getState();
            let Ip = op;
            ip === pp.whamm && null !== Ip || (Ip = this.unsaved.overlay(await qp.b.getSavedOutfits(pp)), this.refresh()), await qp.b.setSavedOutfits(pp, Ip), this.unsaved.isFor(pp.whamm) && Ip.forEach(((pp, ip) => {
              const Op = this.unsaved.slots.get(ip);
              void 0 === Op || Op === cp.get(ip) ? this.unsaved.before.delete(ip) : this.unsaved.before.set(ip, pp)
            }))
          } catch (ip) {
            if (console.error("Failed to save outfits", ip), this.getState().accountId === Op && [...this.unsaved.slots].every((pp => {
                let [ip, Op] = pp;
                return cp.get(ip) === Op
              }))) {
              const ip = [...cp.values()].every(vp);
              Cp.i.showMessage({
                translationKey: ip ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const Op = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((pp => pp.map(((pp, ip) => {
                var cp;
                return null !== (cp = Op.get(ip)) && void 0 !== cp ? cp : pp
              })))), pp = !0
            }
          }
          for (const [pp, ip] of cp) this.unsaved.slots.get(pp) === ip && this.unsaved.slots.delete(pp)
        }
        this.sending = !1, pp && this.refresh()
      }
    }
    const lp = new Xp;
    var Qp = cp(337),
      Jp = cp(41524),
      Bp = cp(1577),
      Np = cp(2382),
      Tp = cp(3098),
      fp = cp(2210),
      bp = cp(2671),
      hp = cp(1060);
    cp(34462), cp(3195);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var ap = cp(2320),
      np = cp(1387),
      Fp = cp(2429),
      gp = cp(1372),
      Gp = cp(1112);

    function rp(pp) {
      let {
        wornOutfit: ip,
        onApply: cp,
        onOverwrite: op,
        onDelete: Sp
      } = pp;
      const {
        t: Lp
      } = (0, Dp.H)(), {
        accountId: Yp,
        data: Ap
      } = (0, Rp.j)(lp, !1), {
        userContext: Pp
      } = (0, Ip.b)();
      async function Wp(pp, ip) {
        const cp = await gp.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: Op,
            data: op
          } = lp.getState();
        var Ip, xp;
        !0 === cp && Op === Yp && null !== op && (tp(Ip = op[pp], xp = ip) && tp(xp, Ip)) && (lp.clear(pp), Sp(pp))
      }
      return (0, Op.useEffect)((() => {
        lp.ensureLoaded()
      }), []), null === Ap || Yp !== Pp.whamm ? null : (0, Gp.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, Gp.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, Gp.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: Lp("homePage:myOutfits")
          })
        }), (0, Gp.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: Ap.map(((pp, Op) => {
            const Ip = vp(pp);
            return (0, Gp.jsxs)("div", {
              className: xp()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !Ip
              }),
              children: [(0, Gp.jsxs)("div", {
                ...(0, jp.bb)(),
                role: Ip ? "button" : "link",
                "data-pad-focusable": !0,
                className: xp()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: Ip,
                  CharacterPresetCardActive: !Ip && tp(pp, ip)
                }),
                onClick: () => {
                  Ip ? lp.save(Op, ip) : cp(pp)
                },
                children: [Ip && (0, Gp.jsxs)(Gp.Fragment, {
                  children: [(0, Gp.jsx)(hp.d, {
                    name: "plus"
                  }), Lp("homePage:saveOutfit")]
                }), !Ip && (0, Gp.jsxs)(Gp.Fragment, {
                  children: [(0, Gp.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, Gp.jsx)(Fp.c, {
                      cosmetics: pp
                    })
                  }), (0, Gp.jsx)(jp.S, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      tp(ip, pp) || (lp.save(Op, ip), op(Op, pp))
                    },
                    children: Lp("general:save")
                  })]
                })]
              }), !Ip && (0, Gp.jsx)(jp.K, {
                className: "SavedOutfitDeleteButton",
                ariaLabel: Lp("general:delete"),
                onClick: () => {
                  Wp(Op, pp)
                },
                children: (0, Gp.jsx)(hp.d, {
                  name: "trash-can"
                })
              })]
            }, Op)
          }))
        })]
      })
    }
    var Zp = cp(36602),
      zp = cp(2623),
      sp = cp(2630);

    function Kp(pp, ip, cp) {
      return null !== pp && !(0, zp.h)(sp.b, ip, cp, pp.collected, pp.ownedPacks)
    }

    function Vp(pp) {
      let {
        locked: ip,
        children: cp
      } = pp;
      return ip ? (0, Gp.jsx)(ii, {
        children: cp
      }) : cp
    }

    function ii(pp) {
      var ip;
      let {
        children: cp
      } = pp;
      const {
        t: Op
      } = (0, Dp.H)(), {
        userContext: op
      } = (0, Ip.b)(), Sp = null !== (ip = op.dailyDrop) && void 0 !== ip && ip.hidden ? Op("dailyDrop:lockedFromHidden") : Op("dailyDrop:lockedFrom");
      return (0, Gp.jsx)(np.f, {
        tooltipInner: (0, Gp.jsx)(Gp.Fragment, {
          children: Sp
        }),
        children: cp
      })
    }

    function ci(pp, ip, cp) {
      return (0, Ap.o)(pp, ip).purchasable && !(0, Np.w)(pp, ip, cp)
    }

    function Oi(pp, ip) {
      return Object.entries(pp).some((pp => {
        let [cp, Op] = pp;
        return ci(cp, Op, ip)
      }))
    }

    function oi(pp) {
      var ip;
      let {
        pack: cp,
        ownedPacks: Op,
        showStoreLink: op = !1,
        children: Ip
      } = pp;
      const {
        t: Sp
      } = (0, Dp.H)(), Lp = Bp.e[cp], Yp = Lp.purchasable && !Op.includes(cp) && Bp.x.includes(cp), Ap = Tp.i[cp];
      return (0, Gp.jsxs)("div", {
        className: xp()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: Yp
        }),
        children: [Ap && (0, Gp.jsx)(Ap, {}), (0, Gp.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, Gp.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (ip = Lp.displayName) && void 0 !== ip ? ip : cp
          }), (Yp || op) && (0, Gp.jsxs)(jp.C, {
            onClick: () => {
              Yp ? (0, Tp.f)(cp) : (0, kp.r)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, Gp.jsx)(hp.d, {
              name: "store"
            }), " ", Sp("general:viewInShop")]
          })]
        }), Yp && "bee" === cp && (0, Gp.jsx)(Tp.b, {}), Ip]
      })
    }

    function Ii(pp) {
      let {
        equippedEmoteIds: ip,
        ownedPacks: cp,
        canBuy: Op,
        onUpdateLoadout: op,
        onEmoteSelected: Ip,
        onEquipPreviewSkin: Sp
      } = pp;
      const {
        t: Yp
      } = (0, Dp.H)(), Pp = new Set(ip), Wp = new Map, yp = Object.keys(Ap.h.emote).sort(((pp, ip) => {
        var cp, Op, op, Ip;
        return (null !== (cp = null === (Op = (0, Ap.m)("emote", pp)) || void 0 === Op ? void 0 : Op.clientIdx) && void 0 !== cp ? cp : 0) - (null !== (op = null === (Ip = (0, Ap.m)("emote", ip)) || void 0 === Ip ? void 0 : Ip.clientIdx) && void 0 !== op ? op : 0)
      })).filter((pp => {
        const ip = (0, Ap.o)("emote", pp),
          op = (0, Np.w)("emote", pp, cp);
        return !(ip.purchasable && !op && !Op) && (ip.clientSelectable || op)
      }));
      for (const xp of yp) {
        const pp = (0, Ap.m)("emote", xp).cosmeticPack;
        Wp.has(pp) || Wp.set(pp, []), Wp.get(pp).push(xp)
      }
      const Up = Array.from(Wp.keys());
      return (0, Gp.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, Gp.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, Gp.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: Yp("emotes:equippedCount", {
              count: ip.length,
              max: Lp.n
            })
          }), (0, Gp.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: Yp("emotes:loadoutHint")
          })]
        }), Up.map((pp => {
          const Op = Wp.get(pp);
          return (0, Gp.jsx)(oi, {
            pack: pp,
            ownedPacks: cp,
            children: (0, Gp.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: Op.map((pp => {
                var Op;
                const Sp = ip.indexOf(pp),
                  Dp = -1 !== Sp,
                  Ap = ip.length >= Lp.n,
                  Wp = ci("emote", pp, cp),
                  yp = Wp || !Dp && Ap,
                  Up = (0, Hp.g)(pp);
                return (0, Gp.jsxs)("div", {
                  className: xp()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Dp
                  }),
                  onClick: () => {
                    Ip(pp)
                  },
                  children: [(0, Gp.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, Gp.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${pp}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, Gp.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (Op = null === Up || void 0 === Up ? void 0 : Up.displayName) && void 0 !== Op ? Op : pp
                    })]
                  }), (0, Gp.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Dp && (0, Gp.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: Sp + 1
                    }), Wp && (0, Gp.jsx)(hp.d, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, Gp.jsx)(np.f, {
                      tooltipInner: (0, Gp.jsx)(Gp.Fragment, {
                        children: Yp(Dp ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, Gp.jsx)("div", {
                        className: xp()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: yp,
                          EmoteCustomPartToggleEquipped: Dp
                        }),
                        onClick: cp => {
                          cp.stopPropagation(), yp || function(pp) {
                            Pp.has(pp) ? op(ip.filter((ip => ip !== pp))) : ip.length >= Lp.n || op([...ip, pp])
                          }(pp)
                        },
                        children: (0, Gp.jsx)(hp.d, {
                          name: Dp ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, pp)
              }))
            })
          }, pp)
        }))]
      })
    }
    const Si = (0, Op.memo)((function(pp) {
      let {
        selectedTab: ip
      } = pp;
      const cp = "characters" === ip ? "skin" : ip,
        {
          t: Sp
        } = (0, Dp.H)(),
        {
          userContext: yp,
          isUserContextUpdating: Up
        } = (0, Ip.b)(),
        vp = (0, op.c)(),
        {
          gameState: Hp
        } = (0, mp.o)(["gameState"]),
        [Rp, qp] = (0, Op.useState)({}),
        [Mp, Cp] = (0, Op.useState)({}),
        [Ep, Xp] = (0, Op.useState)(null),
        {
          previewEmote: Tp,
          triggerEmote: np
        } = (0, dp.c)(),
        Fp = (0, Op.useRef)(Lp.u.reduce(((pp, ip) => (pp[ip] = (0, Wp.b)(ip), pp)), {})),
        gp = (0, Op.useRef)(!1),
        zp = (0, Op.useRef)(null),
        sp = (0, Op.useRef)(null),
        ii = (0, Op.useRef)(null);

      function Si() {
        null !== sp.current && (clearTimeout(sp.current), sp.current = null);
        const pp = ii.current;
        null !== pp && (ii.current = null, (0, Zp.b)(yp, [
          ["emote", pp]
        ]))
      }

      function xi(pp, ip, cp) {
        var Op, op, Ip;
        Fp.current = {
          ...Fp.current,
          [pp]: ip
        }, vp(), cp && ((0, Zp.b)(yp, [
          [pp, ip]
        ]), Xp(null));
        const Sp = (0, Ap.m)(pp, ip);
        if (null !== Sp && void 0 !== Sp && Sp.colourGroup && null !== (Op = Bp.e[Sp.cosmeticPack].colourGroups) && void 0 !== Op && null !== (op = Op[Sp.colourGroup]) && void 0 !== op && op.showSwatchSelector) {
          const cp = (0, Ap.j)(ip);
          cp && Cp((ip => ({
            ...ip,
            [`${Sp.cosmeticPack}_${pp}_${Sp.colourGroup}`]: parseInt(cp[1])
          })))
        }
        null !== (Ip = zp.current) && void 0 !== Ip && Ip.isReady() && zp.current.updateCosmetic(pp, ip)
      }

      function Li(pp) {
        qp((ip => {
          const cp = {
            ...ip
          };
          return delete cp[pp], cp
        }))
      }

      function Yi(pp, ip) {
        let {
          undoable: cp
        } = ip;
        Object.keys(Rp).length > 0 && qp({});
        const Op = Object.entries(pp).filter((pp => {
          let [ip, cp] = pp;
          return Fp.current[ip] !== cp && !ci(ip, cp, Di) && !Kp(Ai, ip, cp)
        }));
        cp ? Op.length > 0 && Xp({
          kind: "worn",
          outfit: wp(Fp.current)
        }) : Xp(null);
        for (const [op, Ip] of Op) xi(op, Ip, !1);
        Op.length > 0 && (0, Zp.b)(yp, Op)
      }(0, ep.b)("cosmeticsUpdated", (pp => {
        let ip = !1;
        for (const {
            local: cp,
            KI: Op,
            VI: op
          }
          of pp) {
          if (!cp) return;
          ip = !0, gp.current || xi(Op, op, !1), vp()
        }
        ip && (gp.current = !0)
      })), (0, Op.useEffect)((() => {
        if (!Up) {
          for (const [pp, ip] of Object.entries(yp.getPlayerCosmetics())) xi(pp, ip, !1);
          vp()
        }
      }), [Up]), (0, Op.useEffect)((() => () => {
        Si()
      }), []);
      const Di = yp.getOwnedCosmeticPacks(),
        Ai = function(pp, ip) {
          return null === pp ? null : {
            collected: new Set(pp.collected),
            ownedPacks: ip
          }
        }(yp.dailyDrop, Di),
        Pi = (0, ap.usePurchasesAllowed)(),
        Wi = Object.keys(Ap.h[cp]).filter((pp => {
          const ip = (0, Ap.o)(cp, pp),
            Op = (0, Np.w)(cp, pp, Di);
          return !(ip.purchasable && !Op && !Pi) && (ip.clientSelectable || Op)
        })).sort(((pp, ip) => {
          var Op, op, Ip, Sp;
          return (null !== (Op = null === (op = (0, Ap.m)(cp, pp)) || void 0 === op ? void 0 : op.clientIdx) && void 0 !== Op ? Op : 0) - (null !== (Ip = null === (Sp = (0, Ap.m)(cp, ip)) || void 0 === Sp ? void 0 : Sp.clientIdx) && void 0 !== Ip ? Ip : 0)
        })),
        yi = new Map;
      for (const Op of Wi) {
        var Ui;
        const pp = null === (Ui = (0, Ap.m)(cp, Op)) || void 0 === Ui ? void 0 : Ui.cosmeticPack;
        yi.has(pp) || yi.set(pp, []), yi.get(pp).push(Op)
      }
      const wi = function(pp, ip) {
          const cp = new Set,
            Op = new Set;
          for (const [op, Ip] of Object.entries(Ap.h[pp])) {
            if (void 0 === Ip.colourGroup) continue;
            const Sp = `${Ip.cosmeticPack}_${Ip.colourGroup}`;
            (ci(pp, op, ip) ? Op : cp).add(Sp)
          }
          return new Set([...cp].filter((pp => Op.has(pp))))
        }(cp, Di),
        vi = new Map;
      for (const [Op, op] of yi) {
        const pp = [],
          ip = new Map;
        for (const Op of op) {
          var ti, Hi;
          const op = null !== (ti = null === (Hi = (0, Ap.m)(cp, Op)) || void 0 === Hi ? void 0 : Hi.colourGroup) && void 0 !== ti ? ti : null;
          ip.has(op) || (ip.set(op, []), pp.push(op)), ip.get(op).push(Op)
        }
        const Ip = pp.map((pp => {
          var op;
          const Ip = ip.get(pp),
            Sp = pp ? null === (op = Bp.e[Op].colourGroups) || void 0 === op ? void 0 : op[pp] : void 0,
            xp = !0 === (null === Sp || void 0 === Sp ? void 0 : Sp.showSwatchSelector) && !wi.has(`${Op}_${pp}`);
          if (xp && Sp) {
            var Lp;
            const ip = null !== (Lp = Mp[`${Op}_${cp}_${pp}`]) && void 0 !== Lp ? Lp : (0, Bp.k)(Sp.colours);
            return {
              groupName: pp,
              showSwatch: xp,
              cosmetics: Ip.filter((pp => {
                const cp = (0, Ap.j)(pp);
                return !cp || ip.toString() === cp[1].toString()
              }))
            }
          }
          return {
            groupName: pp,
            cosmetics: Ip,
            showSwatch: xp
          }
        }));
        vi.set(Op, Ip)
      }
      const di = Array.from(yi.keys()),
        ei = new Map;
      for (const [Op, op] of Object.entries(Pp.b)) {
        const pp = Bp.e[op.cosmeticPack],
          ip = !Oi(op.cosmetics, Di),
          cp = Bp.p.some((pp => (0, Bp.i)(pp) === Op));
        (pp.clientSelectable || cp || ip) && ((!pp.purchasable || ip || Pi) && (ei.has(op.cosmeticPack) || ei.set(op.cosmeticPack, []), ei.get(op.cosmeticPack).push([Op, op])))
      }
      const ui = Array.from(ei.keys());
      return (0, Gp.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === cp || "nameColour" === cp) && !yp.playerHasRank("super") && (0, Gp.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, Gp.jsx)(hp.d, {
            name: "bolt"
          }), Sp("homePage:unlockWithSuperRank"), Pi && (0, Gp.jsx)(jp.o, {
            onClick: () => {
              (0, kp.r)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: Sp("general:getItNow")
          })]
        }), (0, Gp.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === ip && (0, Gp.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, Gp.jsx)(rp, {
              wornOutfit: wp(Fp.current),
              onApply: pp => {
                Yi(pp, {
                  undoable: !0
                })
              },
              onOverwrite: (pp, ip) => {
                Xp({
                  kind: "slot",
                  slot: pp,
                  outfit: ip
                })
              },
              onDelete: pp => {
                Xp((ip => "slot" === (null === ip || void 0 === ip ? void 0 : ip.kind) && ip.slot === pp ? null : ip))
              }
            }), ui.map((pp => {
              const ip = ei.get(pp);
              return (0, Gp.jsx)(oi, {
                pack: pp,
                ownedPacks: Di,
                showStoreLink: !Bp.t.includes(pp) && ip.some((pp => {
                  let [, {
                    cosmetics: ip
                  }] = pp;
                  return Oi(ip, Di)
                })),
                children: (0, Gp.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: ip.map((pp => {
                    let [ip, {
                      cosmetics: cp
                    }] = pp;
                    const Op = Oi(cp, Di),
                      op = !Op && function(pp, ip) {
                        return Object.entries(ip).some((ip => {
                          let [cp, Op] = ip;
                          return Kp(pp, cp, Op)
                        }))
                      }(Ai, cp),
                      Ip = Op || op,
                      Sp = tp(cp, Rp),
                      Lp = !Sp && tp(cp, Fp.current);
                    return (0, Gp.jsx)(Vp, {
                      locked: op,
                      children: (0, Gp.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: xp()("CharacterPresetCard", {
                          CharacterPresetCardActive: Lp,
                          CharacterPresetCardTryingOn: Sp
                        }),
                        onClick: () => {
                          Ip ? function(pp) {
                            tp(pp, Rp) ? qp({}) : qp({
                              ...pp
                            })
                          }(cp) : Yi(cp, {
                            undoable: !0
                          })
                        },
                        children: [(0, Gp.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(/textures/charSkins/previews/character_${ip}_preview.png)`
                          }
                        }), Ip && (0, Gp.jsx)(hp.d, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, ip)
                  }))
                })
              }, pp)
            }))]
          }), "emote" === ip && (0, Gp.jsx)(Ii, {
            equippedEmoteIds: (0, Wp.i)(Fp.current.emote),
            ownedPacks: Di,
            canBuy: Pi,
            onUpdateLoadout: pp => {
              const ip = (0, Wp.m)(pp);
              var cp;
              Fp.current = {
                ...Fp.current,
                emote: ip
              }, yp.setPlayerCosmetics("emote", ip), vp(), cp = ip, ii.current = cp, null !== sp.current && clearTimeout(sp.current), sp.current = setTimeout(Si, 350)
            },
            onEmoteSelected: np,
            onEquipPreviewSkin: () => {
              ! function(pp, ip) {
                for (const cp of Lp.u) "cape" !== cp && "nameColour" !== cp && "emote" !== cp && pp(cp, "skin" === cp ? "skin_preview" : `${cp}_none`, !1);
                ip()
              }(xi, vp)
            }
          }), "characters" !== ip && "emote" !== ip && (0, Gp.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, di.map((pp => {
              const ip = vi.get(pp);
              return (0, Gp.jsx)(oi, {
                pack: pp,
                ownedPacks: Di,
                children: ip.map((ip => {
                  var Op;
                  let {
                    groupName: op,
                    cosmetics: Ip,
                    showSwatch: Sp
                  } = ip;
                  const Lp = op ? null === (Op = Bp.e[pp].colourGroups) || void 0 === Op ? void 0 : Op[op] : void 0,
                    Dp = `${pp}_${cp}_${op}`;
                  return (0, Gp.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [Sp && Lp && (0, Gp.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...Lp.colours.map(((pp, ip) => ({
                        color: pp,
                        index: ip
                      })))].sort(((pp, ip) => pp.color.order - ip.color.order)).map((ip => {
                        var Op;
                        let {
                          color: Ip,
                          index: Sp
                        } = ip;
                        return (0, Gp.jsx)("div", {
                          className: xp()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (Op = Mp[Dp]) && void 0 !== Op ? Op : (0, Bp.k)(Lp.colours)) === Sp
                          }),
                          style: {
                            backgroundColor: `rgb(${Ip.rbg.join(",")})`
                          },
                          onClick: () => {
                            var ip;
                            Cp((pp => ({
                              ...pp,
                              [Dp]: Sp
                            })));
                            const Op = Rp[cp],
                              Ip = Op ? (0, Ap.m)(cp, Op) : null,
                              xp = (null === Ip || void 0 === Ip ? void 0 : Ip.cosmeticPack) === pp,
                              Lp = xp ? Op : Fp.current[cp],
                              Yp = xp ? Ip : (0, Ap.m)(cp, Lp);
                            if ((null === Yp || void 0 === Yp ? void 0 : Yp.cosmeticPack) !== pp) return;
                            if ((null !== (ip = null === Yp || void 0 === Yp ? void 0 : Yp.colourGroup) && void 0 !== ip ? ip : null) !== op) return;
                            const Pp = (0, Ap.j)(Lp);
                            if (Pp) {
                              const pp = `${cp}_${Pp[0]}_${Sp}`;
                              ci(cp, pp, Di) || Kp(Ai, cp, pp) ? qp((ip => ({
                                ...ip,
                                [cp]: pp
                              }))) : (xp && Li(cp), xi(cp, pp, !0))
                            }
                          }
                        }, Ip.rbg.join())
                      }))
                    }), Ip.map((pp => {
                      const ip = pp === Fp.current[cp],
                        Op = Rp[cp] === pp,
                        op = ci(cp, pp, Di),
                        Ip = !op && Kp(Ai, cp, pp),
                        Sp = op || Ip;
                      let Lp = !0;
                      return Sp || ip || ("cape" !== cp || (0, Qp.yd)(yp.getPlayerRanks(), pp)) && ("nameColour" !== cp || yp.playerHasRank("super")) || (Lp = !1), (0, Gp.jsx)(Vp, {
                        locked: Ip,
                        children: (0, Gp.jsxs)("div", {
                          className: xp()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: ip && !Op,
                            TryingOnCharCustomPartWrapper: Op,
                            DisabledCharCustomPartWrapper: !Lp,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === cp
                          }),
                          onClick: () => {
                            if (Lp)
                              if (Sp) qp((ip => {
                                if (ip[cp] === pp) {
                                  const pp = {
                                    ...ip
                                  };
                                  return delete pp[cp], pp
                                }
                                return {
                                  ...ip,
                                  [cp]: pp
                                }
                              }));
                              else {
                                var ip;
                                if (Rp[cp] && Li(cp), pp === Fp.current[cp]) return;
                                null !== (ip = zp.current) && void 0 !== ip && ip.isReady() && xi(cp, pp, !0)
                              }
                          },
                          children: ["profileEffect" === cp ? (0, Gp.jsx)("div", {
                            className: "CharCustomPart CharCustomProfileEffect",
                            children: (0, Gp.jsx)(bp.d, {
                              playerSocialPreview: (0, fp.b)(pp, {
                                name: yp.getPlayerName(),
                                cosmetics: yp.getPlayerCosmetics()
                              }),
                              showLocation: !1,
                              opensProfileCard: !1
                            })
                          }) : (0, Gp.jsx)("div", {
                            className: xp()("CharCustomPart", {
                              PixelatedImage: "cape" === cp
                            }),
                            style: (0, Ap.m)(cp, pp).previewTex ? {
                              backgroundImage: `url(/textures/charSkins/previews/${(0,Ap.m)(cp,pp).previewTex}.png)`
                            } : {
                              backgroundColor: Yp.r[pp]
                            }
                          }), Sp && (0, Gp.jsx)(hp.d, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, pp)
                    }))]
                  }, null !== op && void 0 !== op ? op : "ungrouped")
                }))
              }, pp)
            }))]
          }), Ep && (0, Gp.jsxs)(jp.f, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === Ep.kind ? Yi(Ep.outfit, {
                undoable: !1
              }) : (lp.save(Ep.slot, Ep.outfit), Xp(null))
            },
            children: [(0, Gp.jsx)(hp.d, {
              name: "rotate-left"
            }), Sp("general:undo")]
          }), (0, Gp.jsx)(Jp.CharacterPreview, {
            ref: zp,
            forcedCosmetics: Rp,
            IL: Tp.id,
            emotePlaySeq: Tp.seq,
            onReady: () => {
              for (const pp of Lp.u) xi(pp, Fp.current[pp], !1)
            }
          })]
        })]
      })
    }))
  },
  41524: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      CharacterPreview: () => Ap
    });
    var Op = cp(62),
      op = cp(2835),
      Ip = cp(1251),
      Sp = cp(2638),
      xp = cp(34462),
      Lp = cp(3731),
      Yp = cp(1112);
    const Dp = .6 * Math.PI,
      Ap = (0, Op.memo)((0, Op.forwardRef)((function(pp, ip) {
        let {
          onReady: cp,
          onDrawn: Ap,
          owner: Pp = "other",
          framing: Wp = "player",
          forcedCosmetics: yp,
          IL: Up,
          emotePlaySeq: wp,
          turntableFromYaw: vp = null
        } = pp;
        const tp = (0, Op.useRef)(null),
          {
            width: Hp,
            height: dp
          } = (0, op.d)(tp),
          ep = (0, Op.useRef)(null),
          jp = (0, Op.useRef)({}),
          kp = (0, Op.useRef)({}),
          [mp, Rp] = (0, Op.useState)(!1),
          qp = (0, Op.useRef)(cp);
        qp.current = cp;
        const Mp = (0, Op.useRef)(Ap);
        Mp.current = Ap;
        const Cp = (0, Op.useRef)(null),
          Ep = (0, Op.useRef)(!1),
          Xp = (0, Op.useRef)(!1),
          lp = (0, Op.useCallback)((() => {
            const pp = ep.current;
            if (!pp || !Mp.current || Ep.current || !Xp.current) return;
            const ip = {};
            Cp.current = ip, queueMicrotask((() => {
              if (Cp.current !== ip) return;
              const cp = Promise.all(Ip.u.map((ip => pp.untilDrawn(ip)))).catch((pp => {
                  console.error("Failed to draw the character preview", pp)
                })),
                Op = new Promise((pp => {
                  setTimeout(pp, 1e4)
                }));
              Promise.race([cp, Op]).then((() => {
                var cp;
                ep.current !== pp || Cp.current !== ip || Ep.current || (Ep.current = !0, null === (cp = Mp.current) || void 0 === cp || cp.call(Mp))
              }))
            }))
          }), []);
        return (0, Op.useImperativeHandle)(ip, (() => {
          const pp = (pp, ip) => {
            var cp;
            (jp.current[pp] = ip, null !== yp && void 0 !== yp && yp[pp]) || (null === (cp = ep.current) || void 0 === cp || cp.setCosmetic(pp, ip), lp())
          };
          return {
            updateCosmetic: pp,
            setAllCosmetics(ip) {
              for (const Op of Ip.u) {
                var cp;
                pp(Op, null !== (cp = ip[Op]) && void 0 !== cp ? cp : (0, Sp.b)(Op))
              }
            },
            isReady() {
              var pp, ip;
              return null !== (pp = null === (ip = ep.current) || void 0 === ip ? void 0 : ip.isReady()) && void 0 !== pp && pp
            },
            resetCamera() {
              var pp;
              null === (pp = ep.current) || void 0 === pp || pp.resetCamera()
            },
            setOrbit(pp) {
              var ip;
              null === (ip = ep.current) || void 0 === ip || ip.setOrbit(pp)
            },
            async ensureReadyForCapture(pp) {
              var ip;
              await (null === (ip = ep.current) || void 0 === ip ? void 0 : ip.untilDrawn(pp))
            },
            getDevTools() {
              var pp;
              return null !== (pp = ep.current) && void 0 !== pp && pp.isReady() ? ep.current.dev : null
            }
          }
        }), [yp, lp]), (0, Op.useEffect)((() => {
          const pp = Lp.c.register(Pp),
            ip = xp.j.openCharacter(tp.current, Wp);
          ep.current = ip;
          let cp = !0;
          return ip.ready.then((() => {
            cp && (Rp(!0), qp.current())
          })).catch((pp => {
            console.error("Failed to set up the character preview", pp)
          })), () => {
            cp = !1, pp(), ip.resetCamera(), ip.close(), ep.current = null
          }
        }), []), (0, Op.useEffect)((() => {
          Hp <= 0 || dp <= 0 || ep.current.resize(Hp, dp)
        }), [Hp, dp]), (0, Op.useEffect)((() => {
          if (!mp) return;
          const pp = kp.current;
          for (const ip of Ip.u) {
            const cp = null === yp || void 0 === yp ? void 0 : yp[ip],
              Op = pp[ip];
            cp && cp !== Op ? ep.current.setCosmetic(ip, cp) : !cp && Op && jp.current[ip] && ep.current.setCosmetic(ip, jp.current[ip])
          }
          kp.current = {
            ...yp
          }, Xp.current = !0, lp()
        }), [yp, mp, lp]), (0, Op.useEffect)((() => {
          mp && ep.current.playEmote(null !== Up && void 0 !== Up ? Up : null)
        }), [Up, wp, mp]), (0, Op.useEffect)((() => {
          if (!mp || null === vp) return;
          const pp = ep.current,
            {
              pitch: ip,
              radius: cp
            } = xp.e[Wp];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return pp.setOrbit({
            yaw: vp + Dp,
            pitch: ip,
            radius: cp
          }), () => {
            pp.resetCamera()
          };
          const Op = performance.now();
          let op = 0;
          const Ip = Sp => {
            pp.setOrbit({
              yaw: vp + (Sp - Op) / 6e3 * 2 * Math.PI,
              pitch: ip,
              radius: cp
            }), op = requestAnimationFrame(Ip)
          };
          return op = requestAnimationFrame(Ip), () => {
            cancelAnimationFrame(op), pp.resetCamera()
          }
        }), [mp, vp]), (0, Yp.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: tp
        })
      })))
  },
  36602: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(1956),
      op = cp(1520);
    const Ip = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(pp, ip) {
        pp !== this.userContext && this.sendHeld(), this.userContext = pp;
        for (const [Op, op] of ip) this.pending.set(Op, op);
        if (null !== this.timer) return;
        const cp = this.lastSentAt + 1100 - Date.now();
        cp <= 0 ? this.send(pp) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), cp), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(pp) {
        const ip = Array.from(this.pending, (pp => {
          let [ip, cp] = pp;
          return {
            KI: ip,
            VI: cp
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), op.b.updateCosmetics(pp, ip).catch((pp => {
          console.error("Failed to update cosmetics", pp)
        }))
      }
    };

    function Sp(pp, ip) {
      for (const [cp, Op] of ip) pp.setPlayerCosmetics(cp, Op);
      if (null === Op.gameBridge.latest("connectedGame").websocketUrl) Ip.save(pp, ip);
      else
        for (const [cp, op] of ip) Op.gameBridge.send("updateMyCosmetic", {
          KI: cp,
          VI: op
        })
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);