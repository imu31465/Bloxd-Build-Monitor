export const id = 220;
export const ids = [220, 296];
export const modules = {
  41373: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      CharacterCustomisationUI: () => nj
    });
    var QB = zB(62),
      nB = zB(3116),
      dB = zB(1169),
      IB = zB(1091),
      NB = zB.n(IB),
      uB = zB(1270),
      UB = zB(635),
      aB = zB(1240),
      pB = zB(2302),
      rB = zB(1585),
      sB = zB(2667);
    const JB = uB.v.filter((BB => !rB.g.includes(BB)));

    function mB(BB, jB) {
      return JB.includes(BB) && "string" === typeof jB && (0, sB.g)(BB, jB)
    }

    function yB(BB) {
      const jB = {};
      for (const zB of JB) {
        const QB = BB[zB];
        void 0 !== QB && mB(zB, QB) && (jB[zB] = QB)
      }
      return jB
    }

    function kB(BB) {
      return 0 === Object.keys(BB).length
    }

    function GB(BB, jB) {
      return Object.entries(BB).every((BB => {
        let [zB, QB] = BB;
        return jB[zB] === QB
      }))
    }
    var LB = zB(2304),
      gB = zB(3201),
      tB = zB(2025),
      SB = zB(1478),
      MB = zB(2338),
      EB = zB(28),
      iB = zB(2807),
      qB = zB(1532),
      fB = zB(1173),
      oB = zB(1901);
    class HB {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(BB) {
        null !== BB && BB !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = BB)
      }
      isFor(BB) {
        return null === this.accountId || this.accountId === BB
      }
      overlay(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return BB.map(((BB, zB) => {
          var QB, nB;
          return null !== (QB = null !== (nB = this.slots.get(zB)) && void 0 !== nB ? nB : jB.get(zB)) && void 0 !== QB ? QB : BB
        }))
      }
    }
    class DB extends iB.d {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new HB;
        super("saved outfits", (async jB => {
          const zB = BB.isFor(jB.whamm),
            QB = new Map(BB.slots),
            nB = await qB.b.getSavedOutfits(jB);
          return zB ? BB.overlay(nB, QB) : nB
        })), this.unsaved = BB, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(BB, jB) {
        var zB, QB;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(BB)) || this.unsaved.before.set(BB, null !== (zB = null === (QB = this.getState().data) || void 0 === QB ? void 0 : QB[BB]) && void 0 !== zB ? zB : {});
        this.unsaved.slots.set(BB, jB), this.update((zB => zB.map(((zB, QB) => QB === BB ? jB : zB)))), this.sending || this.sendUnsaved()
      }
      clear(BB) {
        this.save(BB, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let BB = !1;
        for (; this.unsaved.slots.size > 0;) {
          const zB = new Map(this.unsaved.slots);
          let QB = this.getState().accountId;
          try {
            const BB = await fB.userContextManager.getCurrentUserContext();
            if (QB = BB.whamm, this.unsaved.moveTo(BB.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: jB,
              data: nB
            } = this.getState();
            let dB = nB;
            jB === BB.whamm && null !== dB || (dB = this.unsaved.overlay(await qB.b.getSavedOutfits(BB)), this.refresh()), await qB.b.setSavedOutfits(BB, dB), this.unsaved.isFor(BB.whamm) && dB.forEach(((BB, jB) => {
              const QB = this.unsaved.slots.get(jB);
              void 0 === QB || QB === zB.get(jB) ? this.unsaved.before.delete(jB) : this.unsaved.before.set(jB, BB)
            }))
          } catch (jB) {
            if (console.error("Failed to save outfits", jB), this.getState().accountId === QB && [...this.unsaved.slots].every((BB => {
                let [jB, QB] = BB;
                return zB.get(jB) === QB
              }))) {
              const jB = [...zB.values()].every(kB);
              oB.f.showMessage({
                translationKey: jB ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const QB = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((BB => BB.map(((BB, jB) => {
                var zB;
                return null !== (zB = QB.get(jB)) && void 0 !== zB ? zB : BB
              })))), BB = !0
            }
          }
          for (const [BB, jB] of zB) this.unsaved.slots.get(BB) === jB && this.unsaved.slots.delete(BB)
        }
        this.sending = !1, BB && this.refresh()
      }
    }
    const FB = new DB;
    var YB = zB(376),
      VB = zB(41379),
      hB = zB(1583),
      XB = zB(2397),
      ZB = zB(3109),
      AB = zB(2224),
      TB = zB(2711),
      PB = zB(1108);
    zB(34283), zB(3210);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var WB = zB(2346),
      eB = zB(1388),
      lB = zB(2458),
      wB = zB(1381),
      xB = zB(1148);

    function KB(BB) {
      let {
        wornOutfit: jB,
        onApply: zB,
        onOverwrite: nB,
        onDelete: IB
      } = BB;
      const {
        t: uB
      } = (0, aB.D)(), {
        accountId: UB,
        data: pB
      } = (0, iB.k)(FB, !1), {
        userContext: rB
      } = (0, dB.d)();
      async function sB(BB, jB) {
        const zB = await wB.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: QB,
            data: nB
          } = FB.getState();
        var dB, NB;
        !0 === zB && QB === UB && null !== nB && (GB(dB = nB[BB], NB = jB) && GB(NB, dB)) && (FB.clear(BB), IB(BB))
      }
      return (0, QB.useEffect)((() => {
        FB.ensureLoaded()
      }), []), null === pB || UB !== rB.whamm ? null : (0, xB.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, xB.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, xB.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: uB("homePage:myOutfits")
          })
        }), (0, xB.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: pB.map(((BB, QB) => {
            const dB = kB(BB);
            return (0, xB.jsxs)("div", {
              className: NB()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !dB
              }),
              children: [(0, xB.jsxs)("div", {
                ...(0, SB.S)(),
                role: dB ? "button" : "link",
                "data-pad-focusable": !0,
                className: NB()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: dB,
                  CharacterPresetCardActive: !dB && GB(BB, jB)
                }),
                onClick: () => {
                  dB ? FB.save(QB, jB) : zB(BB)
                },
                children: [dB && (0, xB.jsxs)(xB.Fragment, {
                  children: [(0, xB.jsx)(PB.c, {
                    name: "plus"
                  }), uB("homePage:saveOutfit")]
                }), !dB && (0, xB.jsxs)(xB.Fragment, {
                  children: [(0, xB.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, xB.jsx)(lB.c, {
                      cosmetics: BB
                    })
                  }), (0, xB.jsx)(SB.M, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      GB(jB, BB) || (FB.save(QB, jB), nB(QB, BB))
                    },
                    children: uB("general:save")
                  })]
                })]
              }), !dB && (0, xB.jsx)(SB.G, {
                className: "SavedOutfitDeleteButton",
                ariaLabel: uB("general:delete"),
                onClick: () => {
                  sB(QB, BB)
                },
                children: (0, xB.jsx)(PB.c, {
                  name: "trash-can"
                })
              })]
            }, QB)
          }))
        })]
      })
    }
    var CB = zB(36467),
      cB = zB(2656),
      bB = zB(2660);

    function vB(BB, jB, zB) {
      return null !== BB && !(0, cB.m)(bB.c, jB, zB, BB.collected, BB.ownedPacks)
    }

    function RB(BB) {
      let {
        locked: jB,
        children: zB
      } = BB;
      return jB ? (0, xB.jsx)(OB, {
        children: zB
      }) : zB
    }

    function OB(BB) {
      var jB;
      let {
        children: zB
      } = BB;
      const {
        t: QB
      } = (0, aB.D)(), {
        userContext: nB
      } = (0, dB.d)(), IB = null !== (jB = nB.dailyDrop) && void 0 !== jB && jB.hidden ? QB("dailyDrop:lockedFromHidden") : QB("dailyDrop:lockedFrom");
      return (0, xB.jsx)(eB.g, {
        tooltipInner: (0, xB.jsx)(xB.Fragment, {
          children: IB
        }),
        children: zB
      })
    }

    function Bj(BB, jB, zB) {
      return (0, pB.l)(BB, jB).purchasable && !(0, XB.m)(BB, jB, zB)
    }

    function jj(BB, jB) {
      return Object.entries(BB).some((BB => {
        let [zB, QB] = BB;
        return Bj(zB, QB, jB)
      }))
    }

    function zj(BB) {
      var jB;
      let {
        pack: zB,
        ownedPacks: QB,
        showStoreLink: nB = !1,
        children: dB
      } = BB;
      const {
        t: IB
      } = (0, aB.D)(), uB = hB.e[zB], UB = uB.purchasable && !QB.includes(zB) && hB.r.includes(zB), pB = ZB.g[zB];
      return (0, xB.jsxs)("div", {
        className: NB()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: UB
        }),
        children: [pB && (0, xB.jsx)(pB, {}), (0, xB.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, xB.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (jB = uB.displayName) && void 0 !== jB ? jB : zB
          }), (UB || nB) && (0, xB.jsxs)(SB.B, {
            onClick: () => {
              UB ? (0, ZB.f)(zB) : (0, MB.p)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, xB.jsx)(PB.c, {
              name: "store"
            }), " ", IB("general:viewInShop")]
          })]
        }), UB && "bee" === zB && (0, xB.jsx)(ZB.b, {}), dB]
      })
    }

    function Qj(BB) {
      let {
        equippedEmoteIds: jB,
        ownedPacks: zB,
        canBuy: QB,
        onUpdateLoadout: nB,
        onEmoteSelected: dB,
        onEquipPreviewSkin: IB
      } = BB;
      const {
        t: UB
      } = (0, aB.D)(), rB = new Set(jB), sB = new Map, JB = Object.keys(pB.d.emote).sort(((BB, jB) => {
        var zB, QB, nB, dB;
        return (null !== (zB = null === (QB = (0, pB.j)("emote", BB)) || void 0 === QB ? void 0 : QB.clientIdx) && void 0 !== zB ? zB : 0) - (null !== (nB = null === (dB = (0, pB.j)("emote", jB)) || void 0 === dB ? void 0 : dB.clientIdx) && void 0 !== nB ? nB : 0)
      })).filter((BB => {
        const jB = (0, pB.l)("emote", BB),
          nB = (0, XB.m)("emote", BB, zB);
        return !(jB.purchasable && !nB && !QB) && (jB.clientSelectable || nB)
      }));
      for (const NB of JB) {
        const BB = (0, pB.j)("emote", NB).cosmeticPack;
        sB.has(BB) || sB.set(BB, []), sB.get(BB).push(NB)
      }
      const mB = Array.from(sB.keys());
      return (0, xB.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, xB.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, xB.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: UB("emotes:equippedCount", {
              count: jB.length,
              max: uB.n
            })
          }), (0, xB.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: UB("emotes:loadoutHint")
          })]
        }), mB.map((BB => {
          const QB = sB.get(BB);
          return (0, xB.jsx)(zj, {
            pack: BB,
            ownedPacks: zB,
            children: (0, xB.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: QB.map((BB => {
                var QB;
                const IB = jB.indexOf(BB),
                  aB = -1 !== IB,
                  pB = jB.length >= uB.n,
                  sB = Bj("emote", BB, zB),
                  JB = sB || !aB && pB,
                  mB = (0, LB.f)(BB);
                return (0, xB.jsxs)("div", {
                  className: NB()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: aB
                  }),
                  onClick: () => {
                    dB(BB)
                  },
                  children: [(0, xB.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, xB.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${BB}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, xB.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (QB = null === mB || void 0 === mB ? void 0 : mB.displayName) && void 0 !== QB ? QB : BB
                    })]
                  }), (0, xB.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [aB && (0, xB.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: IB + 1
                    }), sB && (0, xB.jsx)(PB.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, xB.jsx)(eB.g, {
                      tooltipInner: (0, xB.jsx)(xB.Fragment, {
                        children: UB(aB ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, xB.jsx)("div", {
                        className: NB()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: JB,
                          EmoteCustomPartToggleEquipped: aB
                        }),
                        onClick: zB => {
                          zB.stopPropagation(), JB || function(BB) {
                            rB.has(BB) ? nB(jB.filter((jB => jB !== BB))) : jB.length >= uB.n || nB([...jB, BB])
                          }(BB)
                        },
                        children: (0, xB.jsx)(PB.c, {
                          name: aB ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, BB)
              }))
            })
          }, BB)
        }))]
      })
    }
    const nj = (0, QB.memo)((function(BB) {
      let {
        selectedTab: jB
      } = BB;
      const zB = "characters" === jB ? "skin" : jB,
        {
          t: IB
        } = (0, aB.D)(),
        {
          userContext: JB,
          isUserContextUpdating: mB
        } = (0, dB.d)(),
        kB = (0, nB.d)(),
        {
          gameState: LB
        } = (0, EB.m)(["gameState"]),
        [iB, qB] = (0, QB.useState)({}),
        [fB, oB] = (0, QB.useState)({}),
        [HB, DB] = (0, QB.useState)(null),
        {
          previewEmote: ZB,
          triggerEmote: eB
        } = (0, gB.e)(),
        lB = (0, QB.useRef)(uB.v.reduce(((BB, jB) => (BB[jB] = (0, sB.d)(jB), BB)), {})),
        wB = (0, QB.useRef)(!1),
        cB = (0, QB.useRef)(null),
        bB = (0, QB.useRef)(null),
        OB = (0, QB.useRef)(null);

      function nj() {
        null !== bB.current && (clearTimeout(bB.current), bB.current = null);
        const BB = OB.current;
        null !== BB && (OB.current = null, (0, CB.b)(JB, [
          ["emote", BB]
        ]))
      }

      function dj(BB, jB, zB) {
        var QB, nB, dB;
        lB.current = {
          ...lB.current,
          [BB]: jB
        }, kB(), zB && ((0, CB.b)(JB, [
          [BB, jB]
        ]), DB(null));
        const IB = (0, pB.j)(BB, jB);
        if (null !== IB && void 0 !== IB && IB.colourGroup && null !== (QB = hB.e[IB.cosmeticPack].colourGroups) && void 0 !== QB && null !== (nB = QB[IB.colourGroup]) && void 0 !== nB && nB.showSwatchSelector) {
          const zB = (0, pB.f)(jB);
          zB && oB((jB => ({
            ...jB,
            [`${IB.cosmeticPack}_${BB}_${IB.colourGroup}`]: parseInt(zB[1])
          })))
        }
        null !== (dB = cB.current) && void 0 !== dB && dB.isReady() && cB.current.updateCosmetic(BB, jB)
      }

      function Ij(BB) {
        qB((jB => {
          const zB = {
            ...jB
          };
          return delete zB[BB], zB
        }))
      }

      function Nj(BB, jB) {
        let {
          undoable: zB
        } = jB;
        Object.keys(iB).length > 0 && qB({});
        const QB = Object.entries(BB).filter((BB => {
          let [jB, zB] = BB;
          return lB.current[jB] !== zB && !Bj(jB, zB, uj) && !vB(Uj, jB, zB)
        }));
        zB ? QB.length > 0 && DB({
          kind: "worn",
          outfit: yB(lB.current)
        }) : DB(null);
        for (const [nB, dB] of QB) dj(nB, dB, !1);
        QB.length > 0 && (0, CB.b)(JB, QB)
      }(0, tB.d)("cosmeticsUpdated", (BB => {
        let jB = !1;
        for (const {
            local: zB,
            Wd: QB,
            ld: nB
          }
          of BB) {
          if (!zB) return;
          jB = !0, wB.current || dj(QB, nB, !1), kB()
        }
        jB && (wB.current = !0)
      })), (0, QB.useEffect)((() => {
        if (!mB) {
          for (const [BB, jB] of Object.entries(JB.getPlayerCosmetics())) dj(BB, jB, !1);
          kB()
        }
      }), [mB]), (0, QB.useEffect)((() => () => {
        nj()
      }), []);
      const uj = JB.getOwnedCosmeticPacks(),
        Uj = function(BB, jB) {
          return null === BB ? null : {
            collected: new Set(BB.collected),
            ownedPacks: jB
          }
        }(JB.dailyDrop, uj),
        aj = (0, WB.usePurchasesAllowed)(),
        pj = Object.keys(pB.d[zB]).filter((BB => {
          const jB = (0, pB.l)(zB, BB),
            QB = (0, XB.m)(zB, BB, uj);
          return !(jB.purchasable && !QB && !aj) && (jB.clientSelectable || QB)
        })).sort(((BB, jB) => {
          var QB, nB, dB, IB;
          return (null !== (QB = null === (nB = (0, pB.j)(zB, BB)) || void 0 === nB ? void 0 : nB.clientIdx) && void 0 !== QB ? QB : 0) - (null !== (dB = null === (IB = (0, pB.j)(zB, jB)) || void 0 === IB ? void 0 : IB.clientIdx) && void 0 !== dB ? dB : 0)
        })),
        rj = new Map;
      for (const QB of pj) {
        var sj;
        const BB = null === (sj = (0, pB.j)(zB, QB)) || void 0 === sj ? void 0 : sj.cosmeticPack;
        rj.has(BB) || rj.set(BB, []), rj.get(BB).push(QB)
      }
      const Jj = function(BB, jB) {
          const zB = new Set,
            QB = new Set;
          for (const [nB, dB] of Object.entries(pB.d[BB])) {
            if (void 0 === dB.colourGroup) continue;
            const IB = `${dB.cosmeticPack}_${dB.colourGroup}`;
            (Bj(BB, nB, jB) ? QB : zB).add(IB)
          }
          return new Set([...zB].filter((BB => QB.has(BB))))
        }(zB, uj),
        mj = new Map;
      for (const [QB, nB] of rj) {
        const BB = [],
          jB = new Map;
        for (const QB of nB) {
          var yj, kj;
          const nB = null !== (yj = null === (kj = (0, pB.j)(zB, QB)) || void 0 === kj ? void 0 : kj.colourGroup) && void 0 !== yj ? yj : null;
          jB.has(nB) || (jB.set(nB, []), BB.push(nB)), jB.get(nB).push(QB)
        }
        const dB = BB.map((BB => {
          var nB;
          const dB = jB.get(BB),
            IB = BB ? null === (nB = hB.e[QB].colourGroups) || void 0 === nB ? void 0 : nB[BB] : void 0,
            NB = !0 === (null === IB || void 0 === IB ? void 0 : IB.showSwatchSelector) && !Jj.has(`${QB}_${BB}`);
          if (NB && IB) {
            var uB;
            const jB = null !== (uB = fB[`${QB}_${zB}_${BB}`]) && void 0 !== uB ? uB : (0, hB.i)(IB.colours);
            return {
              groupName: BB,
              showSwatch: NB,
              cosmetics: dB.filter((BB => {
                const zB = (0, pB.f)(BB);
                return !zB || jB.toString() === zB[1].toString()
              }))
            }
          }
          return {
            groupName: BB,
            cosmetics: dB,
            showSwatch: NB
          }
        }));
        mj.set(QB, dB)
      }
      const Gj = Array.from(rj.keys()),
        Lj = new Map;
      for (const [QB, nB] of Object.entries(rB.d)) {
        const BB = hB.e[nB.cosmeticPack],
          jB = !jj(nB.cosmetics, uj),
          zB = hB.o.some((BB => (0, hB.g)(BB) === QB));
        (BB.clientSelectable || zB || jB) && ((!BB.purchasable || jB || aj) && (Lj.has(nB.cosmeticPack) || Lj.set(nB.cosmeticPack, []), Lj.get(nB.cosmeticPack).push([QB, nB])))
      }
      const gj = Array.from(Lj.keys());
      return (0, xB.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === zB || "nameColour" === zB) && !JB.playerHasRank("super") && (0, xB.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, xB.jsx)(PB.c, {
            name: "bolt"
          }), IB("homePage:unlockWithSuperRank"), aj && (0, xB.jsx)(SB.m, {
            onClick: () => {
              (0, MB.p)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: IB("general:getItNow")
          })]
        }), (0, xB.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === jB && (0, xB.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, xB.jsx)(KB, {
              wornOutfit: yB(lB.current),
              onApply: BB => {
                Nj(BB, {
                  undoable: !0
                })
              },
              onOverwrite: (BB, jB) => {
                DB({
                  kind: "slot",
                  slot: BB,
                  outfit: jB
                })
              },
              onDelete: BB => {
                DB((jB => "slot" === (null === jB || void 0 === jB ? void 0 : jB.kind) && jB.slot === BB ? null : jB))
              }
            }), gj.map((BB => {
              const jB = Lj.get(BB);
              return (0, xB.jsx)(zj, {
                pack: BB,
                ownedPacks: uj,
                showStoreLink: !hB.p.includes(BB) && jB.some((BB => {
                  let [, {
                    cosmetics: jB
                  }] = BB;
                  return jj(jB, uj)
                })),
                children: (0, xB.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: jB.map((BB => {
                    let [jB, {
                      cosmetics: zB
                    }] = BB;
                    const QB = jj(zB, uj),
                      nB = !QB && function(BB, jB) {
                        return Object.entries(jB).some((jB => {
                          let [zB, QB] = jB;
                          return vB(BB, zB, QB)
                        }))
                      }(Uj, zB),
                      dB = QB || nB,
                      IB = GB(zB, iB),
                      uB = !IB && GB(zB, lB.current);
                    return (0, xB.jsx)(RB, {
                      locked: nB,
                      children: (0, xB.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: NB()("CharacterPresetCard", {
                          CharacterPresetCardActive: uB,
                          CharacterPresetCardTryingOn: IB
                        }),
                        onClick: () => {
                          dB ? function(BB) {
                            GB(BB, iB) ? qB({}) : qB({
                              ...BB
                            })
                          }(zB) : Nj(zB, {
                            undoable: !0
                          })
                        },
                        children: [(0, xB.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(/textures/charSkins/previews/character_${jB}_preview.png)`
                          }
                        }), dB && (0, xB.jsx)(PB.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, jB)
                  }))
                })
              }, BB)
            }))]
          }), "emote" === jB && (0, xB.jsx)(Qj, {
            equippedEmoteIds: (0, sB.j)(lB.current.emote),
            ownedPacks: uj,
            canBuy: aj,
            onUpdateLoadout: BB => {
              const jB = (0, sB.k)(BB);
              var zB;
              lB.current = {
                ...lB.current,
                emote: jB
              }, JB.setPlayerCosmetics("emote", jB), kB(), zB = jB, OB.current = zB, null !== bB.current && clearTimeout(bB.current), bB.current = setTimeout(nj, 350)
            },
            onEmoteSelected: eB,
            onEquipPreviewSkin: () => {
              ! function(BB, jB) {
                for (const zB of uB.v) "cape" !== zB && "nameColour" !== zB && "emote" !== zB && BB(zB, "skin" === zB ? "skin_preview" : `${zB}_none`, !1);
                jB()
              }(dj, kB)
            }
          }), "characters" !== jB && "emote" !== jB && (0, xB.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Gj.map((BB => {
              const jB = mj.get(BB);
              return (0, xB.jsx)(zj, {
                pack: BB,
                ownedPacks: uj,
                children: jB.map((jB => {
                  var QB;
                  let {
                    groupName: nB,
                    cosmetics: dB,
                    showSwatch: IB
                  } = jB;
                  const uB = nB ? null === (QB = hB.e[BB].colourGroups) || void 0 === QB ? void 0 : QB[nB] : void 0,
                    aB = `${BB}_${zB}_${nB}`;
                  return (0, xB.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [IB && uB && (0, xB.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...uB.colours.map(((BB, jB) => ({
                        color: BB,
                        index: jB
                      })))].sort(((BB, jB) => BB.color.order - jB.color.order)).map((jB => {
                        var QB;
                        let {
                          color: dB,
                          index: IB
                        } = jB;
                        return (0, xB.jsx)("div", {
                          className: NB()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (QB = fB[aB]) && void 0 !== QB ? QB : (0, hB.i)(uB.colours)) === IB
                          }),
                          style: {
                            backgroundColor: `rgb(${dB.rbg.join(",")})`
                          },
                          onClick: () => {
                            var jB;
                            oB((BB => ({
                              ...BB,
                              [aB]: IB
                            })));
                            const QB = iB[zB],
                              dB = QB ? (0, pB.j)(zB, QB) : null,
                              NB = (null === dB || void 0 === dB ? void 0 : dB.cosmeticPack) === BB,
                              uB = NB ? QB : lB.current[zB],
                              UB = NB ? dB : (0, pB.j)(zB, uB);
                            if ((null === UB || void 0 === UB ? void 0 : UB.cosmeticPack) !== BB) return;
                            if ((null !== (jB = null === UB || void 0 === UB ? void 0 : UB.colourGroup) && void 0 !== jB ? jB : null) !== nB) return;
                            const rB = (0, pB.f)(uB);
                            if (rB) {
                              const BB = `${zB}_${rB[0]}_${IB}`;
                              Bj(zB, BB, uj) || vB(Uj, zB, BB) ? qB((jB => ({
                                ...jB,
                                [zB]: BB
                              }))) : (NB && Ij(zB), dj(zB, BB, !0))
                            }
                          }
                        }, dB.rbg.join())
                      }))
                    }), dB.map((BB => {
                      const jB = BB === lB.current[zB],
                        QB = iB[zB] === BB,
                        nB = Bj(zB, BB, uj),
                        dB = !nB && vB(Uj, zB, BB),
                        IB = nB || dB;
                      let uB = !0;
                      return IB || jB || ("cape" !== zB || (0, YB.Xd)(JB.getPlayerRanks(), BB)) && ("nameColour" !== zB || JB.playerHasRank("super")) || (uB = !1), (0, xB.jsx)(RB, {
                        locked: dB,
                        children: (0, xB.jsxs)("div", {
                          className: NB()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: jB && !QB,
                            TryingOnCharCustomPartWrapper: QB,
                            DisabledCharCustomPartWrapper: !uB,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === zB
                          }),
                          onClick: () => {
                            if (uB)
                              if (IB) qB((jB => {
                                if (jB[zB] === BB) {
                                  const BB = {
                                    ...jB
                                  };
                                  return delete BB[zB], BB
                                }
                                return {
                                  ...jB,
                                  [zB]: BB
                                }
                              }));
                              else {
                                var jB;
                                if (iB[zB] && Ij(zB), BB === lB.current[zB]) return;
                                null !== (jB = cB.current) && void 0 !== jB && jB.isReady() && dj(zB, BB, !0)
                              }
                          },
                          children: ["profileEffect" === zB ? (0, xB.jsx)("div", {
                            className: "CharCustomPart CharCustomProfileEffect",
                            children: (0, xB.jsx)(TB.g, {
                              playerSocialPreview: (0, AB.c)(BB, {
                                name: JB.getPlayerName(),
                                cosmetics: JB.getPlayerCosmetics()
                              }),
                              showLocation: !1,
                              opensProfileCard: !1
                            })
                          }) : (0, xB.jsx)("div", {
                            className: NB()("CharCustomPart", {
                              PixelatedImage: "cape" === zB
                            }),
                            style: (0, pB.j)(zB, BB).previewTex ? {
                              backgroundImage: `url(/textures/charSkins/previews/${(0,pB.j)(zB,BB).previewTex}.png)`
                            } : {
                              backgroundColor: UB.n[BB]
                            }
                          }), IB && (0, xB.jsx)(PB.c, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, BB)
                    }))]
                  }, null !== nB && void 0 !== nB ? nB : "ungrouped")
                }))
              }, BB)
            }))]
          }), HB && (0, xB.jsxs)(SB.f, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === HB.kind ? Nj(HB.outfit, {
                undoable: !1
              }) : (FB.save(HB.slot, HB.outfit), DB(null))
            },
            children: [(0, xB.jsx)(PB.c, {
              name: "rotate-left"
            }), IB("general:undo")]
          }), (0, xB.jsx)(VB.CharacterPreview, {
            ref: cB,
            forcedCosmetics: iB,
            TN: ZB.id,
            emotePlaySeq: ZB.seq,
            onReady: () => {
              for (const BB of uB.v) dj(BB, lB.current[BB], !1)
            }
          })]
        })]
      })
    }))
  },
  41379: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      CharacterPreview: () => pB
    });
    var QB = zB(62),
      nB = zB(2853),
      dB = zB(1270),
      IB = zB(2667),
      NB = zB(34283),
      uB = zB(3742),
      UB = zB(1148);
    const aB = .6 * Math.PI,
      pB = (0, QB.memo)((0, QB.forwardRef)((function(BB, jB) {
        let {
          onReady: zB,
          onDrawn: pB,
          owner: rB = "other",
          framing: sB = "player",
          forcedCosmetics: JB,
          TN: mB,
          emotePlaySeq: yB,
          turntableFromYaw: kB = null
        } = BB;
        const GB = (0, QB.useRef)(null),
          {
            width: LB,
            height: gB
          } = (0, nB.b)(GB),
          tB = (0, QB.useRef)(null),
          SB = (0, QB.useRef)({}),
          MB = (0, QB.useRef)({}),
          [EB, iB] = (0, QB.useState)(!1),
          qB = (0, QB.useRef)(zB);
        qB.current = zB;
        const fB = (0, QB.useRef)(pB);
        fB.current = pB;
        const oB = (0, QB.useRef)(null),
          HB = (0, QB.useRef)(!1),
          DB = (0, QB.useRef)(!1),
          FB = (0, QB.useCallback)((() => {
            const BB = tB.current;
            if (!BB || !fB.current || HB.current || !DB.current) return;
            const jB = {};
            oB.current = jB, queueMicrotask((() => {
              if (oB.current !== jB) return;
              const zB = Promise.all(dB.v.map((jB => BB.untilDrawn(jB)))).catch((BB => {
                  console.error("Failed to draw the character preview", BB)
                })),
                QB = new Promise((BB => {
                  setTimeout(BB, 1e4)
                }));
              Promise.race([zB, QB]).then((() => {
                var zB;
                tB.current !== BB || oB.current !== jB || HB.current || (HB.current = !0, null === (zB = fB.current) || void 0 === zB || zB.call(fB))
              }))
            }))
          }), []);
        return (0, QB.useImperativeHandle)(jB, (() => {
          const BB = (BB, jB) => {
            var zB;
            (SB.current[BB] = jB, null !== JB && void 0 !== JB && JB[BB]) || (null === (zB = tB.current) || void 0 === zB || zB.setCosmetic(BB, jB), FB())
          };
          return {
            updateCosmetic: BB,
            setAllCosmetics(jB) {
              for (const QB of dB.v) {
                var zB;
                BB(QB, null !== (zB = jB[QB]) && void 0 !== zB ? zB : (0, IB.d)(QB))
              }
            },
            isReady() {
              var BB, jB;
              return null !== (BB = null === (jB = tB.current) || void 0 === jB ? void 0 : jB.isReady()) && void 0 !== BB && BB
            },
            resetCamera() {
              var BB;
              null === (BB = tB.current) || void 0 === BB || BB.resetCamera()
            },
            setOrbit(BB) {
              var jB;
              null === (jB = tB.current) || void 0 === jB || jB.setOrbit(BB)
            },
            async ensureReadyForCapture(BB) {
              var jB;
              await (null === (jB = tB.current) || void 0 === jB ? void 0 : jB.untilDrawn(BB))
            },
            getDevTools() {
              var BB;
              return null !== (BB = tB.current) && void 0 !== BB && BB.isReady() ? tB.current.dev : null
            }
          }
        }), [JB, FB]), (0, QB.useEffect)((() => {
          const BB = uB.e.register(rB),
            jB = NB.i.openCharacter(GB.current, sB);
          tB.current = jB;
          let zB = !0;
          return jB.ready.then((() => {
            zB && (iB(!0), qB.current())
          })).catch((BB => {
            console.error("Failed to set up the character preview", BB)
          })), () => {
            zB = !1, BB(), jB.resetCamera(), jB.close(), tB.current = null
          }
        }), []), (0, QB.useEffect)((() => {
          LB <= 0 || gB <= 0 || tB.current.resize(LB, gB)
        }), [LB, gB]), (0, QB.useEffect)((() => {
          if (!EB) return;
          const BB = MB.current;
          for (const jB of dB.v) {
            const zB = null === JB || void 0 === JB ? void 0 : JB[jB],
              QB = BB[jB];
            zB && zB !== QB ? tB.current.setCosmetic(jB, zB) : !zB && QB && SB.current[jB] && tB.current.setCosmetic(jB, SB.current[jB])
          }
          MB.current = {
            ...JB
          }, DB.current = !0, FB()
        }), [JB, EB, FB]), (0, QB.useEffect)((() => {
          EB && tB.current.playEmote(null !== mB && void 0 !== mB ? mB : null)
        }), [mB, yB, EB]), (0, QB.useEffect)((() => {
          if (!EB || null === kB) return;
          const BB = tB.current,
            {
              pitch: jB,
              radius: zB
            } = NB.d[sB];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return BB.setOrbit({
            yaw: kB + aB,
            pitch: jB,
            radius: zB
          }), () => {
            BB.resetCamera()
          };
          const QB = performance.now();
          let nB = 0;
          const dB = IB => {
            BB.setOrbit({
              yaw: kB + (IB - QB) / 6e3 * 2 * Math.PI,
              pitch: jB,
              radius: zB
            }), nB = requestAnimationFrame(dB)
          };
          return nB = requestAnimationFrame(dB), () => {
            cancelAnimationFrame(nB), BB.resetCamera()
          }
        }), [EB, kB]), (0, UB.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: GB
        })
      })))
  },
  36467: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(1982),
      nB = zB(1532);
    const dB = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(BB, jB) {
        BB !== this.userContext && this.sendHeld(), this.userContext = BB;
        for (const [QB, nB] of jB) this.pending.set(QB, nB);
        if (null !== this.timer) return;
        const zB = this.lastSentAt + 1100 - Date.now();
        zB <= 0 ? this.send(BB) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), zB), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(BB) {
        const jB = Array.from(this.pending, (BB => {
          let [jB, zB] = BB;
          return {
            Wd: jB,
            ld: zB
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), nB.b.updateCosmetics(BB, jB).catch((BB => {
          console.error("Failed to update cosmetics", BB)
        }))
      }
    };

    function IB(BB, jB) {
      for (const [zB, QB] of jB) BB.setPlayerCosmetics(zB, QB);
      if (null === QB.gameBridge.latest("connectedGame").websocketUrl) dB.save(BB, jB);
      else
        for (const [zB, nB] of jB) QB.gameBridge.send("updateMyCosmetic", {
          Wd: zB,
          ld: nB
        })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);