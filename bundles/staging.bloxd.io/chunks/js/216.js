export const id = 216;
export const ids = [216, 291];
export const modules = {
  41281: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      CharacterCustomisationUI: () => XF
    });
    var Xk = Ik(58),
      Tk = Ik(2936),
      ik = Ik(1118),
      yk = Ik(1055),
      lk = Ik.n(yk),
      ak = Ik(1231),
      qk = Ik(612),
      Lk = Ik(1179),
      tk = Ik(2148),
      Zk = Ik(1518),
      jk = Ik(2492);
    const ek = ak.w.filter((kk => !Zk.f.includes(kk)));

    function wk(kk, Fk) {
      return ek.includes(kk) && "string" === typeof Fk && (0, jk.d)(kk, Fk)
    }

    function Hk(kk) {
      const Fk = {};
      for (const Ik of ek) {
        const Xk = kk[Ik];
        void 0 !== Xk && wk(Ik, Xk) && (Fk[Ik] = Xk)
      }
      return Fk
    }

    function Jk(kk, Fk) {
      return Object.entries(kk).every((kk => {
        let [Ik, Xk] = kk;
        return Fk[Ik] === Xk
      }))
    }
    var xk = Ik(2157),
      Pk = Ik(3028),
      Kk = Ik(1907),
      Qk = Ik(1406),
      sk = Ik(2190),
      Vk = Ik(25),
      zk = Ik(2624),
      Sk = Ik(1453),
      vk = Ik(1120),
      Ek = Ik(1800);
    class Ok {
      constructor() {
        this.slots = new Map, this.accountId = null
      }
      moveTo(kk) {
        null !== kk && kk !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), this.accountId = kk)
      }
      isFor(kk) {
        return null === this.accountId || this.accountId === kk
      }
      overlay(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return kk.map(((kk, Ik) => {
          var Xk, Tk;
          return null !== (Xk = null !== (Tk = this.slots.get(Ik)) && void 0 !== Tk ? Tk : Fk.get(Ik)) && void 0 !== Xk ? Xk : kk
        }))
      }
    }
    class nk extends zk.b {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Ok;
        super("saved outfits", (async Fk => {
          const Ik = kk.isFor(Fk.whamm),
            Xk = new Map(kk.slots),
            Tk = await Sk.e.getSavedOutfits(Fk);
          return Ik ? kk.overlay(Tk, Xk) : Tk
        })), this.unsaved = kk, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(kk, Fk) {
        this.unsaved.moveTo(this.getState().accountId), this.unsaved.slots.set(kk, Fk), this.update((Ik => Ik.map(((Ik, Xk) => Xk === kk ? Fk : Ik)))), this.sending || this.sendUnsaved()
      }
      async sendUnsaved() {
        for (this.sending = !0; this.unsaved.slots.size > 0;) {
          const Fk = new Map(this.unsaved.slots);
          try {
            const kk = await vk.userContextManager.getCurrentUserContext();
            if (this.unsaved.moveTo(kk.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: Fk,
              data: Ik
            } = this.getState();
            let Xk = Ik;
            Fk === kk.whamm && null !== Xk || (Xk = this.unsaved.overlay(await Sk.e.getSavedOutfits(kk)), this.refresh()), await Sk.e.setSavedOutfits(kk, Xk)
          } catch (kk) {
            console.error("Failed to save outfits", kk), [...this.unsaved.slots].every((kk => {
              let [Ik, Xk] = kk;
              return Fk.get(Ik) === Xk
            })) && Ek.e.showMessage({
              translationKey: "homePage:saveOutfitFailed"
            })
          }
          for (const [kk, Ik] of Fk) this.unsaved.slots.get(kk) === Ik && this.unsaved.slots.delete(kk)
        }
        this.sending = !1
      }
    }
    const Gk = new nk;
    var pk = Ik(337),
      uk = Ik(41287),
      bk = Ik(1515),
      Rk = Ik(2253),
      Uk = Ik(2929),
      Ck = Ik(2089),
      Nk = Ik(2525),
      ck = Ik(1066);
    Ik(34218), Ik(3030);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var Wk = Ik(2207),
      fk = Ik(1333),
      Bk = Ik(2300),
      dk = Ik(1096);

    function Yk(kk) {
      let {
        wornOutfit: Fk,
        onApply: Ik,
        onOverwrite: Tk
      } = kk;
      const {
        t: yk
      } = (0, Lk.y)(), {
        accountId: ak,
        data: qk
      } = (0, zk.j)(Gk, !1), {
        userContext: tk
      } = (0, ik.d)();
      return (0, Xk.useEffect)((() => {
        Gk.ensureLoaded()
      }), []), null === qk || ak !== tk.whamm ? null : (0, dk.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, dk.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, dk.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: yk("homePage:myOutfits")
          })
        }), (0, dk.jsx)("div", {
          className: "CharacterPresetsGrid",
          children: qk.map(((kk, Xk) => {
            const ik = function(kk) {
              return 0 === Object.keys(kk).length
            }(kk);
            return (0, dk.jsxs)("div", {
              ...(0, Qk.Y)(),
              role: ik ? "button" : "link",
              "data-pad-focusable": !0,
              className: lk()("CharacterPresetCard SavedOutfitCard", {
                SavedOutfitCardEmpty: ik,
                CharacterPresetCardActive: !ik && Jk(kk, Fk)
              }),
              onClick: () => {
                ik ? Gk.save(Xk, Fk) : Ik(kk)
              },
              children: [ik && (0, dk.jsxs)(dk.Fragment, {
                children: [(0, dk.jsx)(ck.e, {
                  name: "plus"
                }), yk("homePage:saveOutfit")]
              }), !ik && (0, dk.jsxs)(dk.Fragment, {
                children: [(0, dk.jsx)("div", {
                  className: "SavedOutfitCardPicture",
                  children: (0, dk.jsx)(Bk.e, {
                    cosmetics: kk
                  })
                }), (0, dk.jsx)(Qk.Q, {
                  padSecondaryLabelKey: "homePage:saveOutfit",
                  stopPropagation: !0,
                  onClick: () => {
                    Jk(Fk, kk) || (Gk.save(Xk, Fk), Tk(Xk, kk))
                  },
                  children: yk("general:save")
                })]
              })]
            }, Xk)
          }))
        })]
      })
    }
    var Ak = Ik(36375),
      gk = Ik(2487),
      mk = Ik(2489);

    function hk(kk, Fk, Ik) {
      return null !== kk && !(0, gk.h)(mk.e, Fk, Ik, kk.collected, kk.ownedPacks)
    }

    function rk(kk) {
      let {
        locked: Fk,
        children: Ik
      } = kk;
      return Fk ? (0, dk.jsx)(Dk, {
        children: Ik
      }) : Ik
    }

    function Dk(kk) {
      var Fk;
      let {
        children: Ik
      } = kk;
      const {
        t: Xk
      } = (0, Lk.y)(), {
        userContext: Tk
      } = (0, ik.d)(), yk = null !== (Fk = Tk.dailyDrop) && void 0 !== Fk && Fk.hidden ? Xk("dailyDrop:lockedFromHidden") : Xk("dailyDrop:lockedFrom");
      return (0, dk.jsx)(fk.g, {
        tooltipInner: (0, dk.jsx)(dk.Fragment, {
          children: yk
        }),
        children: Ik
      })
    }

    function Mk(kk, Fk, Ik) {
      return (0, tk.l)(kk, Fk).purchasable && !(0, Rk.t)(kk, Fk, Ik)
    }

    function kF(kk, Fk) {
      return Object.entries(kk).some((kk => {
        let [Ik, Xk] = kk;
        return Mk(Ik, Xk, Fk)
      }))
    }

    function FF(kk) {
      var Fk;
      let {
        pack: Ik,
        ownedPacks: Xk,
        showStoreLink: Tk = !1,
        children: ik
      } = kk;
      const {
        t: yk
      } = (0, Lk.y)(), ak = bk.d[Ik], qk = ak.purchasable && !Xk.includes(Ik) && bk.s.includes(Ik), tk = Uk.l[Ik];
      return (0, dk.jsxs)("div", {
        className: lk()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: qk
        }),
        children: [tk && (0, dk.jsx)(tk, {}), (0, dk.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, dk.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (Fk = ak.displayName) && void 0 !== Fk ? Fk : Ik
          }), (qk || Tk) && (0, dk.jsxs)(Qk.z, {
            onClick: () => {
              qk ? (0, Uk.i)(Ik) : (0, sk.m)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, dk.jsx)(ck.e, {
              name: "store"
            }), " ", yk("general:viewInShop")]
          })]
        }), qk && "bee" === Ik && (0, dk.jsx)(Uk.d, {}), ik]
      })
    }

    function IF(kk) {
      let {
        equippedEmoteIds: Fk,
        ownedPacks: Ik,
        canBuy: Xk,
        onUpdateLoadout: Tk,
        onEmoteSelected: ik,
        onEquipPreviewSkin: yk
      } = kk;
      const {
        t: qk
      } = (0, Lk.y)(), Zk = new Set(Fk), jk = new Map, ek = Object.keys(tk.i.emote).sort(((kk, Fk) => {
        var Ik, Xk, Tk, ik;
        return (null !== (Ik = null === (Xk = (0, tk.k)("emote", kk)) || void 0 === Xk ? void 0 : Xk.clientIdx) && void 0 !== Ik ? Ik : 0) - (null !== (Tk = null === (ik = (0, tk.k)("emote", Fk)) || void 0 === ik ? void 0 : ik.clientIdx) && void 0 !== Tk ? Tk : 0)
      })).filter((kk => {
        const Fk = (0, tk.l)("emote", kk),
          Tk = (0, Rk.t)("emote", kk, Ik);
        return !(Fk.purchasable && !Tk && !Xk) && (Fk.clientSelectable || Tk)
      }));
      for (const lk of ek) {
        const kk = (0, tk.k)("emote", lk).cosmeticPack;
        jk.has(kk) || jk.set(kk, []), jk.get(kk).push(lk)
      }
      const wk = Array.from(jk.keys());
      return (0, dk.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, dk.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, dk.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: qk("emotes:equippedCount", {
              count: Fk.length,
              max: ak.l
            })
          }), (0, dk.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: qk("emotes:loadoutHint")
          })]
        }), wk.map((kk => {
          const Xk = jk.get(kk);
          return (0, dk.jsx)(FF, {
            pack: kk,
            ownedPacks: Ik,
            children: (0, dk.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: Xk.map((kk => {
                var Xk;
                const yk = Fk.indexOf(kk),
                  Lk = -1 !== yk,
                  tk = Fk.length >= ak.l,
                  jk = Mk("emote", kk, Ik),
                  ek = jk || !Lk && tk,
                  wk = (0, xk.i)(kk);
                return (0, dk.jsxs)("div", {
                  className: lk()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Lk
                  }),
                  onClick: () => {
                    ik(kk)
                  },
                  children: [(0, dk.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, dk.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${kk}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, dk.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (Xk = null === wk || void 0 === wk ? void 0 : wk.displayName) && void 0 !== Xk ? Xk : kk
                    })]
                  }), (0, dk.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Lk && (0, dk.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: yk + 1
                    }), jk && (0, dk.jsx)(ck.e, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, dk.jsx)(fk.g, {
                      tooltipInner: (0, dk.jsx)(dk.Fragment, {
                        children: qk(Lk ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, dk.jsx)("div", {
                        className: lk()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: ek,
                          EmoteCustomPartToggleEquipped: Lk
                        }),
                        onClick: Ik => {
                          Ik.stopPropagation(), ek || function(kk) {
                            Zk.has(kk) ? Tk(Fk.filter((Fk => Fk !== kk))) : Fk.length >= ak.l || Tk([...Fk, kk])
                          }(kk)
                        },
                        children: (0, dk.jsx)(ck.e, {
                          name: Lk ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, kk)
              }))
            })
          }, kk)
        }))]
      })
    }
    const XF = (0, Xk.memo)((function(kk) {
      let {
        selectedTab: Fk
      } = kk;
      const Ik = "characters" === Fk ? "skin" : Fk,
        {
          t: yk
        } = (0, Lk.y)(),
        {
          userContext: ek,
          isUserContextUpdating: wk
        } = (0, ik.d)(),
        xk = (0, Tk.c)(),
        {
          gameState: zk,
          initSdkSelectorFinished: Sk
        } = (0, Vk.j)(["gameState", "initSdkSelectorFinished"]),
        [vk, Ek] = (0, Xk.useState)({}),
        [Ok, nk] = (0, Xk.useState)({}),
        [Uk, fk] = (0, Xk.useState)(null),
        {
          previewEmote: Bk,
          triggerEmote: gk
        } = (0, Pk.c)(),
        mk = (0, Xk.useRef)(ak.w.reduce(((kk, Fk) => (kk[Fk] = (0, jk.c)(Fk), kk)), {})),
        Dk = (0, Xk.useRef)(!1),
        XF = (0, Xk.useRef)(null),
        TF = (0, Xk.useRef)(null),
        iF = (0, Xk.useRef)(null);

      function yF() {
        null !== TF.current && (clearTimeout(TF.current), TF.current = null);
        const kk = iF.current;
        null !== kk && (iF.current = null, (0, Ak.e)(ek, [
          ["emote", kk]
        ]))
      }

      function lF(kk, Fk, Ik) {
        var Xk, Tk, ik;
        mk.current = {
          ...mk.current,
          [kk]: Fk
        }, xk(), Ik && ((0, Ak.e)(ek, [
          [kk, Fk]
        ]), fk(null));
        const yk = (0, tk.k)(kk, Fk);
        if (null !== yk && void 0 !== yk && yk.colourGroup && null !== (Xk = bk.d[yk.cosmeticPack].colourGroups) && void 0 !== Xk && null !== (Tk = Xk[yk.colourGroup]) && void 0 !== Tk && Tk.showSwatchSelector) {
          const Ik = (0, tk.j)(Fk);
          Ik && nk((Fk => ({
            ...Fk,
            [`${yk.cosmeticPack}_${kk}_${yk.colourGroup}`]: parseInt(Ik[1])
          })))
        }
        null !== (ik = XF.current) && void 0 !== ik && ik.isReady() && XF.current.updateCosmetic(kk, Fk)
      }

      function aF(kk) {
        Ek((Fk => {
          const Ik = {
            ...Fk
          };
          return delete Ik[kk], Ik
        }))
      }

      function qF(kk, Fk) {
        let {
          undoable: Ik
        } = Fk;
        Object.keys(vk).length > 0 && Ek({});
        const Xk = Object.entries(kk).filter((kk => {
          let [Fk, Ik] = kk;
          return mk.current[Fk] !== Ik && !Mk(Fk, Ik, LF) && !hk(tF, Fk, Ik)
        }));
        Ik ? Xk.length > 0 && fk({
          kind: "worn",
          outfit: Hk(mk.current)
        }) : fk(null);
        for (const [Tk, ik] of Xk) lF(Tk, ik, !1);
        Xk.length > 0 && (0, Ak.e)(ek, Xk)
      }(0, Kk.e)("cosmeticsUpdated", (kk => {
        let Fk = !1;
        for (const {
            local: Ik,
            VX: Xk,
            zX: Tk
          }
          of kk) {
          if (!Ik) return;
          Fk = !0, Dk.current || lF(Xk, Tk, !1), xk()
        }
        Fk && (Dk.current = !0)
      })), (0, Xk.useEffect)((() => {
        if (!wk) {
          for (const [kk, Fk] of Object.entries(ek.getPlayerCosmetics())) lF(kk, Fk, !1);
          xk()
        }
      }), [wk]), (0, Xk.useEffect)((() => () => {
        yF()
      }), []);
      const LF = ek.getOwnedCosmeticPacks(),
        tF = function(kk, Fk) {
          return null === kk ? null : {
            collected: new Set(kk.collected),
            ownedPacks: Fk
          }
        }(ek.dailyDrop, LF),
        ZF = (0, Wk.purchasesAllowed)(),
        jF = Object.keys(tk.i[Ik]).filter((kk => {
          const Fk = (0, tk.l)(Ik, kk),
            Xk = (0, Rk.t)(Ik, kk, LF);
          return !(Fk.purchasable && !Xk && !ZF) && (Fk.clientSelectable || Xk)
        })).sort(((kk, Fk) => {
          var Xk, Tk, ik, yk;
          return (null !== (Xk = null === (Tk = (0, tk.k)(Ik, kk)) || void 0 === Tk ? void 0 : Tk.clientIdx) && void 0 !== Xk ? Xk : 0) - (null !== (ik = null === (yk = (0, tk.k)(Ik, Fk)) || void 0 === yk ? void 0 : yk.clientIdx) && void 0 !== ik ? ik : 0)
        })),
        eF = new Map;
      for (const Xk of jF) {
        var wF;
        const kk = null === (wF = (0, tk.k)(Ik, Xk)) || void 0 === wF ? void 0 : wF.cosmeticPack;
        eF.has(kk) || eF.set(kk, []), eF.get(kk).push(Xk)
      }
      const HF = function(kk, Fk) {
          const Ik = new Set,
            Xk = new Set;
          for (const [Tk, ik] of Object.entries(tk.i[kk])) {
            if (void 0 === ik.colourGroup) continue;
            const yk = `${ik.cosmeticPack}_${ik.colourGroup}`;
            (Mk(kk, Tk, Fk) ? Xk : Ik).add(yk)
          }
          return new Set([...Ik].filter((kk => Xk.has(kk))))
        }(Ik, LF),
        JF = new Map;
      for (const [Xk, Tk] of eF) {
        const kk = [],
          Fk = new Map;
        for (const Xk of Tk) {
          var xF, PF;
          const Tk = null !== (xF = null === (PF = (0, tk.k)(Ik, Xk)) || void 0 === PF ? void 0 : PF.colourGroup) && void 0 !== xF ? xF : null;
          Fk.has(Tk) || (Fk.set(Tk, []), kk.push(Tk)), Fk.get(Tk).push(Xk)
        }
        const ik = kk.map((kk => {
          var Tk;
          const ik = Fk.get(kk),
            yk = kk ? null === (Tk = bk.d[Xk].colourGroups) || void 0 === Tk ? void 0 : Tk[kk] : void 0,
            lk = !0 === (null === yk || void 0 === yk ? void 0 : yk.showSwatchSelector) && !HF.has(`${Xk}_${kk}`);
          if (lk && yk) {
            var ak;
            const Fk = null !== (ak = Ok[`${Xk}_${Ik}_${kk}`]) && void 0 !== ak ? ak : (0, bk.f)(yk.colours);
            return {
              groupName: kk,
              showSwatch: lk,
              cosmetics: ik.filter((kk => {
                const Ik = (0, tk.j)(kk);
                return !Ik || Fk.toString() === Ik[1].toString()
              }))
            }
          }
          return {
            groupName: kk,
            cosmetics: ik,
            showSwatch: lk
          }
        }));
        JF.set(Xk, ik)
      }
      const KF = Array.from(eF.keys()),
        QF = new Map;
      for (const [Xk, Tk] of Object.entries(Zk.c)) {
        const kk = bk.d[Tk.cosmeticPack],
          Fk = !kF(Tk.cosmetics, LF),
          Ik = bk.l.some((kk => (0, bk.e)(kk) === Xk));
        (kk.clientSelectable || Ik || Fk) && ((!kk.purchasable || Fk || ZF) && (QF.has(Tk.cosmeticPack) || QF.set(Tk.cosmeticPack, []), QF.get(Tk.cosmeticPack).push([Xk, Tk])))
      }
      const sF = Array.from(QF.keys());
      return (0, dk.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === Ik || "nameColour" === Ik) && !ek.playerHasRank("super") && (0, dk.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, dk.jsx)(ck.e, {
            name: "bolt"
          }), yk("homePage:unlockWithSuperRank"), ZF && (0, dk.jsx)(Qk.m, {
            onClick: () => {
              (0, sk.m)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: yk("general:getItNow")
          })]
        }), (0, dk.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === Fk && (0, dk.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, dk.jsx)(Yk, {
              wornOutfit: Hk(mk.current),
              onApply: kk => {
                qF(kk, {
                  undoable: !0
                })
              },
              onOverwrite: (kk, Fk) => {
                fk({
                  kind: "slot",
                  slot: kk,
                  outfit: Fk
                })
              }
            }), sF.map((kk => {
              const Fk = QF.get(kk);
              return (0, dk.jsx)(FF, {
                pack: kk,
                ownedPacks: LF,
                showStoreLink: !bk.p.includes(kk) && Fk.some((kk => {
                  let [, {
                    cosmetics: Fk
                  }] = kk;
                  return kF(Fk, LF)
                })),
                children: (0, dk.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: Fk.map((kk => {
                    let [Fk, {
                      cosmetics: Ik
                    }] = kk;
                    const Xk = kF(Ik, LF),
                      Tk = !Xk && function(kk, Fk) {
                        return Object.entries(Fk).some((Fk => {
                          let [Ik, Xk] = Fk;
                          return hk(kk, Ik, Xk)
                        }))
                      }(tF, Ik),
                      ik = Xk || Tk,
                      yk = Jk(Ik, vk),
                      ak = !yk && Jk(Ik, mk.current);
                    return (0, dk.jsx)(rk, {
                      locked: Tk,
                      children: (0, dk.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: lk()("CharacterPresetCard", {
                          CharacterPresetCardActive: ak,
                          CharacterPresetCardTryingOn: yk
                        }),
                        onClick: () => {
                          ik ? function(kk) {
                            Jk(kk, vk) ? Ek({}) : Ek({
                              ...kk
                            })
                          }(Ik) : qF(Ik, {
                            undoable: !0
                          })
                        },
                        children: [(0, dk.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(/textures/charSkins/previews/character_${Fk}_preview.png)`
                          }
                        }), ik && (0, dk.jsx)(ck.e, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, Fk)
                  }))
                })
              }, kk)
            }))]
          }), "emote" === Fk && (0, dk.jsx)(IF, {
            equippedEmoteIds: (0, jk.g)(mk.current.emote),
            ownedPacks: LF,
            canBuy: ZF,
            onUpdateLoadout: kk => {
              const Fk = (0, jk.k)(kk);
              var Ik;
              mk.current = {
                ...mk.current,
                emote: Fk
              }, ek.setPlayerCosmetics("emote", Fk), xk(), Ik = Fk, iF.current = Ik, null !== TF.current && clearTimeout(TF.current), TF.current = setTimeout(yF, 350)
            },
            onEmoteSelected: gk,
            onEquipPreviewSkin: () => {
              ! function(kk, Fk) {
                for (const Ik of ak.w) "cape" !== Ik && "nameColour" !== Ik && "emote" !== Ik && kk(Ik, "skin" === Ik ? "skin_preview" : `${Ik}_none`, !1);
                Fk()
              }(lF, xk)
            }
          }), "characters" !== Fk && "emote" !== Fk && (0, dk.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, KF.map((kk => {
              const Fk = JF.get(kk);
              return (0, dk.jsx)(FF, {
                pack: kk,
                ownedPacks: LF,
                children: Fk.map((Fk => {
                  var Xk;
                  let {
                    groupName: Tk,
                    cosmetics: ik,
                    showSwatch: yk
                  } = Fk;
                  const ak = Tk ? null === (Xk = bk.d[kk].colourGroups) || void 0 === Xk ? void 0 : Xk[Tk] : void 0,
                    Lk = `${kk}_${Ik}_${Tk}`;
                  return (0, dk.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [yk && ak && (0, dk.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...ak.colours.map(((kk, Fk) => ({
                        color: kk,
                        index: Fk
                      })))].sort(((kk, Fk) => kk.color.order - Fk.color.order)).map((Fk => {
                        var Xk;
                        let {
                          color: ik,
                          index: yk
                        } = Fk;
                        return (0, dk.jsx)("div", {
                          className: lk()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (Xk = Ok[Lk]) && void 0 !== Xk ? Xk : (0, bk.f)(ak.colours)) === yk
                          }),
                          style: {
                            backgroundColor: `rgb(${ik.rbg.join(",")})`
                          },
                          onClick: () => {
                            var Fk;
                            nk((kk => ({
                              ...kk,
                              [Lk]: yk
                            })));
                            const Xk = vk[Ik],
                              ik = Xk ? (0, tk.k)(Ik, Xk) : null,
                              lk = (null === ik || void 0 === ik ? void 0 : ik.cosmeticPack) === kk,
                              ak = lk ? Xk : mk.current[Ik],
                              qk = lk ? ik : (0, tk.k)(Ik, ak);
                            if ((null === qk || void 0 === qk ? void 0 : qk.cosmeticPack) !== kk) return;
                            if ((null !== (Fk = null === qk || void 0 === qk ? void 0 : qk.colourGroup) && void 0 !== Fk ? Fk : null) !== Tk) return;
                            const Zk = (0, tk.j)(ak);
                            if (Zk) {
                              const kk = `${Ik}_${Zk[0]}_${yk}`;
                              Mk(Ik, kk, LF) || hk(tF, Ik, kk) ? Ek((Fk => ({
                                ...Fk,
                                [Ik]: kk
                              }))) : (lk && aF(Ik), lF(Ik, kk, !0))
                            }
                          }
                        }, ik.rbg.join())
                      }))
                    }), ik.map((kk => {
                      const Fk = kk === mk.current[Ik],
                        Xk = vk[Ik] === kk,
                        Tk = Mk(Ik, kk, LF),
                        ik = !Tk && hk(tF, Ik, kk),
                        yk = Tk || ik;
                      let ak = !0;
                      return yk || Fk || ("cape" !== Ik || (0, pk.Qd)(ek.getPlayerRanks(), kk)) && ("nameColour" !== Ik || ek.playerHasRank("super")) || (ak = !1), (0, dk.jsx)(rk, {
                        locked: ik,
                        children: (0, dk.jsxs)("div", {
                          className: lk()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: Fk && !Xk,
                            TryingOnCharCustomPartWrapper: Xk,
                            DisabledCharCustomPartWrapper: !ak,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === Ik
                          }),
                          onClick: () => {
                            if (ak)
                              if (yk) Ek((Fk => {
                                if (Fk[Ik] === kk) {
                                  const kk = {
                                    ...Fk
                                  };
                                  return delete kk[Ik], kk
                                }
                                return {
                                  ...Fk,
                                  [Ik]: kk
                                }
                              }));
                              else {
                                var Fk;
                                if (vk[Ik] && aF(Ik), kk === mk.current[Ik]) return;
                                null !== (Fk = XF.current) && void 0 !== Fk && Fk.isReady() && lF(Ik, kk, !0)
                              }
                          },
                          children: ["profileEffect" === Ik ? (0, dk.jsx)("div", {
                            className: "CharCustomPart CharCustomProfileEffect",
                            children: (0, dk.jsx)(Nk.g, {
                              playerSocialPreview: (0, Ck.b)(kk, {
                                name: ek.getPlayerName(),
                                cosmetics: ek.getPlayerCosmetics()
                              }),
                              showLocation: !1,
                              opensProfileCard: !1
                            })
                          }) : (0, dk.jsx)("div", {
                            className: lk()("CharCustomPart", {
                              PixelatedImage: "cape" === Ik
                            }),
                            style: (0, tk.k)(Ik, kk).previewTex ? {
                              backgroundImage: `url(/textures/charSkins/previews/${(0,tk.k)(Ik,kk).previewTex}.png)`
                            } : {
                              backgroundColor: qk.t[kk]
                            }
                          }), yk && (0, dk.jsx)(ck.e, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, kk)
                    }))]
                  }, null !== Tk && void 0 !== Tk ? Tk : "ungrouped")
                }))
              }, kk)
            }))]
          }), Uk && (0, dk.jsxs)(Qk.d, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === Uk.kind ? qF(Uk.outfit, {
                undoable: !1
              }) : (Gk.save(Uk.slot, Uk.outfit), fk(null))
            },
            children: [(0, dk.jsx)(ck.e, {
              name: "rotate-left"
            }), yk("general:undo")]
          }), (0, dk.jsx)(uk.CharacterPreview, {
            ref: XF,
            forcedCosmetics: vk,
            Il: Bk.id,
            emotePlaySeq: Bk.seq,
            onReady: () => {
              for (const kk of ak.w) lF(kk, mk.current[kk], !1)
            }
          })]
        })]
      })
    }))
  },
  41287: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      CharacterPreview: () => tk
    });
    var Xk = Ik(58),
      Tk = Ik(2679),
      ik = Ik(1231),
      yk = Ik(2492),
      lk = Ik(34218),
      ak = Ik(3586),
      qk = Ik(1096);
    const Lk = .6 * Math.PI,
      tk = (0, Xk.memo)((0, Xk.forwardRef)((function(kk, Fk) {
        let {
          onReady: Ik,
          onDrawn: tk,
          owner: Zk = "other",
          framing: jk = "player",
          forcedCosmetics: ek,
          Il: wk,
          emotePlaySeq: Hk,
          turntableFromYaw: Jk = null
        } = kk;
        const xk = (0, Xk.useRef)(null),
          {
            width: Pk,
            height: Kk
          } = (0, Tk.b)(xk),
          Qk = (0, Xk.useRef)(null),
          sk = (0, Xk.useRef)({}),
          Vk = (0, Xk.useRef)({}),
          [zk, Sk] = (0, Xk.useState)(!1),
          vk = (0, Xk.useRef)(Ik);
        vk.current = Ik;
        const Ek = (0, Xk.useRef)(tk);
        Ek.current = tk;
        const Ok = (0, Xk.useRef)(null),
          nk = (0, Xk.useRef)(!1),
          Gk = (0, Xk.useRef)(!1),
          pk = (0, Xk.useCallback)((() => {
            const kk = Qk.current;
            if (!kk || !Ek.current || nk.current || !Gk.current) return;
            const Fk = {};
            Ok.current = Fk, queueMicrotask((() => {
              if (Ok.current !== Fk) return;
              const Ik = Promise.all(ik.w.map((Fk => kk.untilDrawn(Fk)))).catch((kk => {
                  console.error("Failed to draw the character preview", kk)
                })),
                Xk = new Promise((kk => {
                  setTimeout(kk, 1e4)
                }));
              Promise.race([Ik, Xk]).then((() => {
                var Ik;
                Qk.current !== kk || Ok.current !== Fk || nk.current || (nk.current = !0, null === (Ik = Ek.current) || void 0 === Ik || Ik.call(Ek))
              }))
            }))
          }), []);
        return (0, Xk.useImperativeHandle)(Fk, (() => {
          const kk = (kk, Fk) => {
            var Ik;
            (sk.current[kk] = Fk, null !== ek && void 0 !== ek && ek[kk]) || (null === (Ik = Qk.current) || void 0 === Ik || Ik.setCosmetic(kk, Fk), pk())
          };
          return {
            updateCosmetic: kk,
            setAllCosmetics(Fk) {
              for (const Xk of ik.w) {
                var Ik;
                kk(Xk, null !== (Ik = Fk[Xk]) && void 0 !== Ik ? Ik : (0, yk.c)(Xk))
              }
            },
            isReady() {
              var kk, Fk;
              return null !== (kk = null === (Fk = Qk.current) || void 0 === Fk ? void 0 : Fk.isReady()) && void 0 !== kk && kk
            },
            resetCamera() {
              var kk;
              null === (kk = Qk.current) || void 0 === kk || kk.resetCamera()
            },
            setOrbit(kk) {
              var Fk;
              null === (Fk = Qk.current) || void 0 === Fk || Fk.setOrbit(kk)
            },
            async ensureReadyForCapture(kk) {
              var Fk;
              await (null === (Fk = Qk.current) || void 0 === Fk ? void 0 : Fk.untilDrawn(kk))
            },
            getDevTools() {
              var kk;
              return null !== (kk = Qk.current) && void 0 !== kk && kk.isReady() ? Qk.current.dev : null
            }
          }
        }), [ek, pk]), (0, Xk.useEffect)((() => {
          const kk = ak.d.register(Zk),
            Fk = lk.h.openCharacter(xk.current, jk);
          Qk.current = Fk;
          let Ik = !0;
          return Fk.ready.then((() => {
            Ik && (Sk(!0), vk.current())
          })).catch((kk => {
            console.error("Failed to set up the character preview", kk)
          })), () => {
            Ik = !1, kk(), Fk.resetCamera(), Fk.close(), Qk.current = null
          }
        }), []), (0, Xk.useEffect)((() => {
          Pk <= 0 || Kk <= 0 || Qk.current.resize(Pk, Kk)
        }), [Pk, Kk]), (0, Xk.useEffect)((() => {
          if (!zk) return;
          const kk = Vk.current;
          for (const Fk of ik.w) {
            const Ik = null === ek || void 0 === ek ? void 0 : ek[Fk],
              Xk = kk[Fk];
            Ik && Ik !== Xk ? Qk.current.setCosmetic(Fk, Ik) : !Ik && Xk && sk.current[Fk] && Qk.current.setCosmetic(Fk, sk.current[Fk])
          }
          Vk.current = {
            ...ek
          }, Gk.current = !0, pk()
        }), [ek, zk, pk]), (0, Xk.useEffect)((() => {
          zk && Qk.current.playEmote(null !== wk && void 0 !== wk ? wk : null)
        }), [wk, Hk, zk]), (0, Xk.useEffect)((() => {
          if (!zk || null === Jk) return;
          const kk = Qk.current,
            {
              pitch: Fk,
              radius: Ik
            } = lk.c[jk];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return kk.setOrbit({
            yaw: Jk + Lk,
            pitch: Fk,
            radius: Ik
          }), () => {
            kk.resetCamera()
          };
          const Xk = performance.now();
          let Tk = 0;
          const ik = yk => {
            kk.setOrbit({
              yaw: Jk + (yk - Xk) / 6e3 * 2 * Math.PI,
              pitch: Fk,
              radius: Ik
            }), Tk = requestAnimationFrame(ik)
          };
          return Tk = requestAnimationFrame(ik), () => {
            cancelAnimationFrame(Tk), kk.resetCamera()
          }
        }), [zk, Jk]), (0, qk.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: xk
        })
      })))
  },
  36375: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk
    });
    var Xk = Ik(1875),
      Tk = Ik(1453);
    const ik = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(kk, Fk) {
        kk !== this.userContext && this.sendHeld(), this.userContext = kk;
        for (const [Xk, Tk] of Fk) this.pending.set(Xk, Tk);
        if (null !== this.timer) return;
        const Ik = this.lastSentAt + 1100 - Date.now();
        Ik <= 0 ? this.send(kk) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), Ik), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(kk) {
        const Fk = Array.from(this.pending, (kk => {
          let [Fk, Ik] = kk;
          return {
            VX: Fk,
            zX: Ik
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), Tk.e.updateCosmetics(kk, Fk).catch((kk => {
          console.error("Failed to update cosmetics", kk)
        }))
      }
    };

    function yk(kk, Fk) {
      for (const [Ik, Xk] of Fk) kk.setPlayerCosmetics(Ik, Xk);
      if (null === Xk.gameBridge.latest("connectedGame").websocketUrl) ik.save(kk, Fk);
      else
        for (const [Ik, Tk] of Fk) Xk.gameBridge.send("updateMyCosmetic", {
          VX: Ik,
          zX: Tk
        })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);