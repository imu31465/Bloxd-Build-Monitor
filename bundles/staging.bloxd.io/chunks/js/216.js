export const id = 216;
export const ids = [216, 291];
export const modules = {
  41286: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      CharacterCustomisationUI: () => gH
    });
    var tS = gS(64),
      bS = gS(3161),
      XS = gS(1211),
      xS = gS(1121),
      NS = gS.n(xS),
      qS = gS(1327),
      uS = gS(656),
      IS = gS(1281),
      fS = gS(2340),
      kS = gS(1657),
      aS = gS(2692);
    const KS = qS.r.filter((SS => !kS.e.includes(SS)));

    function jS(SS, HS) {
      return KS.includes(SS) && "string" === typeof HS && (0, aS.e)(SS, HS)
    }

    function GS(SS) {
      const HS = {};
      for (const gS of KS) {
        const tS = SS[gS];
        void 0 !== tS && jS(gS, tS) && (HS[gS] = tS)
      }
      return HS
    }

    function CS(SS, HS) {
      return Object.entries(SS).every((SS => {
        let [gS, tS] = SS;
        return HS[gS] === tS
      }))
    }
    var nS = gS(2347),
      PS = gS(3268),
      QS = gS(2100),
      DS = gS(1528),
      wS = gS(2387),
      hS = gS(24),
      ZS = gS(2833),
      JS = gS(1588),
      OS = gS(1216),
      dS = gS(1975);
    class cS {
      constructor() {
        this.slots = new Map, this.accountId = null
      }
      moveTo(SS) {
        null !== SS && SS !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), this.accountId = SS)
      }
      isFor(SS) {
        return null === this.accountId || this.accountId === SS
      }
      overlay(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return SS.map(((SS, gS) => {
          var tS, bS;
          return null !== (tS = null !== (bS = this.slots.get(gS)) && void 0 !== bS ? bS : HS.get(gS)) && void 0 !== tS ? tS : SS
        }))
      }
    }
    class vS extends ZS.b {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new cS;
        super("saved outfits", (async HS => {
          const gS = SS.isFor(HS.whamm),
            tS = new Map(SS.slots),
            bS = await JS.b.getSavedOutfits(HS);
          return gS ? SS.overlay(bS, tS) : bS
        })), this.unsaved = SS, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(SS, HS) {
        this.unsaved.moveTo(this.getState().accountId), this.unsaved.slots.set(SS, HS), this.update((gS => gS.map(((gS, tS) => tS === SS ? HS : gS)))), this.sending || this.sendUnsaved()
      }
      async sendUnsaved() {
        for (this.sending = !0; this.unsaved.slots.size > 0;) {
          const HS = new Map(this.unsaved.slots);
          try {
            const SS = await OS.userContextManager.getCurrentUserContext();
            if (this.unsaved.moveTo(SS.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: HS,
              data: gS
            } = this.getState();
            let tS = gS;
            HS === SS.whamm && null !== tS || (tS = this.unsaved.overlay(await JS.b.getSavedOutfits(SS)), this.refresh()), await JS.b.setSavedOutfits(SS, tS)
          } catch (SS) {
            console.error("Failed to save outfits", SS), [...this.unsaved.slots].every((SS => {
              let [gS, tS] = SS;
              return HS.get(gS) === tS
            })) && dS.d.showMessage({
              translationKey: "homePage:saveOutfitFailed"
            })
          }
          for (const [SS, gS] of HS) this.unsaved.slots.get(SS) === gS && this.unsaved.slots.delete(SS)
        }
        this.sending = !1
      }
    }
    const ES = new vS;
    var LS = gS(387),
      YS = gS(41290),
      AS = gS(1653),
      yS = gS(2439),
      VS = gS(3154),
      iS = gS(2273),
      WS = gS(2725),
      zS = gS(1127);
    gS(34267), gS(3272);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var US = gS(2398),
      pS = gS(1444),
      sS = gS(2480),
      BS = gS(1181);

    function MS(SS) {
      let {
        wornOutfit: HS,
        onApply: gS,
        onOverwrite: bS
      } = SS;
      const {
        t: xS
      } = (0, IS.F)(), {
        accountId: qS,
        data: uS
      } = (0, ZS.e)(ES, !1), {
        userContext: fS
      } = (0, XS.b)();
      return (0, tS.useEffect)((() => {
        ES.ensureLoaded()
      }), []), null === uS || qS !== fS.whamm ? null : (0, BS.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, BS.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, BS.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: xS("homePage:myOutfits")
          })
        }), (0, BS.jsx)("div", {
          className: "CharacterPresetsGrid",
          children: uS.map(((SS, tS) => {
            const XS = function(SS) {
              return 0 === Object.keys(SS).length
            }(SS);
            return (0, BS.jsxs)("div", {
              ...(0, DS.X)(),
              role: XS ? "button" : "link",
              "data-pad-focusable": !0,
              className: NS()("CharacterPresetCard SavedOutfitCard", {
                SavedOutfitCardEmpty: XS,
                CharacterPresetCardActive: !XS && CS(SS, HS)
              }),
              onClick: () => {
                XS ? ES.save(tS, HS) : gS(SS)
              },
              children: [XS && (0, BS.jsxs)(BS.Fragment, {
                children: [(0, BS.jsx)(zS.d, {
                  name: "plus"
                }), xS("homePage:saveOutfit")]
              }), !XS && (0, BS.jsxs)(BS.Fragment, {
                children: [(0, BS.jsx)("div", {
                  className: "SavedOutfitCardPicture",
                  children: (0, BS.jsx)(sS.e, {
                    cosmetics: SS
                  })
                }), (0, BS.jsx)(DS.P, {
                  padSecondaryLabelKey: "homePage:saveOutfit",
                  stopPropagation: !0,
                  onClick: () => {
                    CS(HS, SS) || (ES.save(tS, HS), bS(tS, SS))
                  },
                  children: xS("general:save")
                })]
              })]
            }, tS)
          }))
        })]
      })
    }
    var FS = gS(36393),
      RS = gS(2684),
      TS = gS(2686);

    function oS(SS, HS, gS) {
      return null !== SS && !(0, RS.g)(TS.d, HS, gS, SS.collected, SS.ownedPacks)
    }

    function lS(SS) {
      let {
        locked: HS,
        children: gS
      } = SS;
      return HS ? (0, BS.jsx)(mS, {
        children: gS
      }) : gS
    }

    function mS(SS) {
      var HS;
      let {
        children: gS
      } = SS;
      const {
        t: tS
      } = (0, IS.F)(), {
        userContext: bS
      } = (0, XS.b)(), xS = null !== (HS = bS.dailyDrop) && void 0 !== HS && HS.hidden ? tS("dailyDrop:lockedFromHidden") : tS("dailyDrop:lockedFrom");
      return (0, BS.jsx)(pS.h, {
        tooltipInner: (0, BS.jsx)(BS.Fragment, {
          children: xS
        }),
        children: gS
      })
    }

    function eS(SS, HS, gS) {
      return (0, fS.l)(SS, HS).purchasable && !(0, yS.q)(SS, HS, gS)
    }

    function rS(SS, HS) {
      return Object.entries(SS).some((SS => {
        let [gS, tS] = SS;
        return eS(gS, tS, HS)
      }))
    }

    function SH(SS) {
      var HS;
      let {
        pack: gS,
        ownedPacks: tS,
        showStoreLink: bS = !1,
        children: XS
      } = SS;
      const {
        t: xS
      } = (0, IS.F)(), qS = AS.c[gS], uS = qS.purchasable && !tS.includes(gS) && AS.o.includes(gS), fS = VS.i[gS];
      return (0, BS.jsxs)("div", {
        className: NS()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: uS
        }),
        children: [fS && (0, BS.jsx)(fS, {}), (0, BS.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, BS.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (HS = qS.displayName) && void 0 !== HS ? HS : gS
          }), (uS || bS) && (0, BS.jsxs)(DS.D, {
            onClick: () => {
              uS ? (0, VS.h)(gS) : (0, wS.r)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, BS.jsx)(zS.d, {
              name: "store"
            }), " ", xS("general:viewInShop")]
          })]
        }), uS && "bee" === gS && (0, BS.jsx)(VS.c, {}), XS]
      })
    }

    function HH(SS) {
      let {
        equippedEmoteIds: HS,
        ownedPacks: gS,
        canBuy: tS,
        onUpdateLoadout: bS,
        onEmoteSelected: XS,
        onEquipPreviewSkin: xS
      } = SS;
      const {
        t: uS
      } = (0, IS.F)(), kS = new Set(HS), aS = new Map, KS = Object.keys(fS.h.emote).sort(((SS, HS) => {
        var gS, tS, bS, XS;
        return (null !== (gS = null === (tS = (0, fS.j)("emote", SS)) || void 0 === tS ? void 0 : tS.clientIdx) && void 0 !== gS ? gS : 0) - (null !== (bS = null === (XS = (0, fS.j)("emote", HS)) || void 0 === XS ? void 0 : XS.clientIdx) && void 0 !== bS ? bS : 0)
      })).filter((SS => {
        const HS = (0, fS.l)("emote", SS),
          bS = (0, yS.q)("emote", SS, gS);
        return !(HS.purchasable && !bS && !tS) && (HS.clientSelectable || bS)
      }));
      for (const NS of KS) {
        const SS = (0, fS.j)("emote", NS).cosmeticPack;
        aS.has(SS) || aS.set(SS, []), aS.get(SS).push(NS)
      }
      const jS = Array.from(aS.keys());
      return (0, BS.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, BS.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, BS.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: uS("emotes:equippedCount", {
              count: HS.length,
              max: qS.l
            })
          }), (0, BS.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: uS("emotes:loadoutHint")
          })]
        }), jS.map((SS => {
          const tS = aS.get(SS);
          return (0, BS.jsx)(SH, {
            pack: SS,
            ownedPacks: gS,
            children: (0, BS.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: tS.map((SS => {
                var tS;
                const xS = HS.indexOf(SS),
                  IS = -1 !== xS,
                  fS = HS.length >= qS.l,
                  aS = eS("emote", SS, gS),
                  KS = aS || !IS && fS,
                  jS = (0, nS.g)(SS);
                return (0, BS.jsxs)("div", {
                  className: NS()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: IS
                  }),
                  onClick: () => {
                    XS(SS)
                  },
                  children: [(0, BS.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, BS.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${SS}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, BS.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (tS = null === jS || void 0 === jS ? void 0 : jS.displayName) && void 0 !== tS ? tS : SS
                    })]
                  }), (0, BS.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [IS && (0, BS.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: xS + 1
                    }), aS && (0, BS.jsx)(zS.d, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, BS.jsx)(pS.h, {
                      tooltipInner: (0, BS.jsx)(BS.Fragment, {
                        children: uS(IS ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, BS.jsx)("div", {
                        className: NS()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: KS,
                          EmoteCustomPartToggleEquipped: IS
                        }),
                        onClick: gS => {
                          gS.stopPropagation(), KS || function(SS) {
                            kS.has(SS) ? bS(HS.filter((HS => HS !== SS))) : HS.length >= qS.l || bS([...HS, SS])
                          }(SS)
                        },
                        children: (0, BS.jsx)(zS.d, {
                          name: IS ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, SS)
              }))
            })
          }, SS)
        }))]
      })
    }
    const gH = (0, tS.memo)((function(SS) {
      let {
        selectedTab: HS
      } = SS;
      const gS = "characters" === HS ? "skin" : HS,
        {
          t: xS
        } = (0, IS.F)(),
        {
          userContext: KS,
          isUserContextUpdating: jS
        } = (0, XS.b)(),
        nS = (0, bS.e)(),
        {
          gameState: ZS,
          initSdkSelectorFinished: JS
        } = (0, hS.m)(["gameState", "initSdkSelectorFinished"]),
        [OS, dS] = (0, tS.useState)({}),
        [cS, vS] = (0, tS.useState)({}),
        [VS, pS] = (0, tS.useState)(null),
        {
          previewEmote: sS,
          triggerEmote: RS
        } = (0, PS.c)(),
        TS = (0, tS.useRef)(qS.r.reduce(((SS, HS) => (SS[HS] = (0, aS.b)(HS), SS)), {})),
        mS = (0, tS.useRef)(!1),
        gH = (0, tS.useRef)(null),
        tH = (0, tS.useRef)(null),
        bH = (0, tS.useRef)(null);

      function XH() {
        null !== tH.current && (clearTimeout(tH.current), tH.current = null);
        const SS = bH.current;
        null !== SS && (bH.current = null, (0, FS.e)(KS, [
          ["emote", SS]
        ]))
      }

      function xH(SS, HS, gS) {
        var tS, bS, XS;
        TS.current = {
          ...TS.current,
          [SS]: HS
        }, nS(), gS && ((0, FS.e)(KS, [
          [SS, HS]
        ]), pS(null));
        const xS = (0, fS.j)(SS, HS);
        if (null !== xS && void 0 !== xS && xS.colourGroup && null !== (tS = AS.c[xS.cosmeticPack].colourGroups) && void 0 !== tS && null !== (bS = tS[xS.colourGroup]) && void 0 !== bS && bS.showSwatchSelector) {
          const gS = (0, fS.i)(HS);
          gS && vS((HS => ({
            ...HS,
            [`${xS.cosmeticPack}_${SS}_${xS.colourGroup}`]: parseInt(gS[1])
          })))
        }
        null !== (XS = gH.current) && void 0 !== XS && XS.isReady() && gH.current.updateCosmetic(SS, HS)
      }

      function NH(SS) {
        dS((HS => {
          const gS = {
            ...HS
          };
          return delete gS[SS], gS
        }))
      }

      function qH(SS, HS) {
        let {
          undoable: gS
        } = HS;
        Object.keys(OS).length > 0 && dS({});
        const tS = Object.entries(SS).filter((SS => {
          let [HS, gS] = SS;
          return TS.current[HS] !== gS && !eS(HS, gS, uH) && !oS(IH, HS, gS)
        }));
        gS ? tS.length > 0 && pS({
          kind: "worn",
          outfit: GS(TS.current)
        }) : pS(null);
        for (const [bS, XS] of tS) xH(bS, XS, !1);
        tS.length > 0 && (0, FS.e)(KS, tS)
      }(0, QS.c)("cosmeticsUpdated", (SS => {
        let HS = !1;
        for (const {
            local: gS,
            wt: tS,
            ht: bS
          }
          of SS) {
          if (!gS) return;
          HS = !0, mS.current || xH(tS, bS, !1), nS()
        }
        HS && (mS.current = !0)
      })), (0, tS.useEffect)((() => {
        if (!jS) {
          for (const [SS, HS] of Object.entries(KS.getPlayerCosmetics())) xH(SS, HS, !1);
          nS()
        }
      }), [jS]), (0, tS.useEffect)((() => () => {
        XH()
      }), []);
      const uH = KS.getOwnedCosmeticPacks(),
        IH = function(SS, HS) {
          return null === SS ? null : {
            collected: new Set(SS.collected),
            ownedPacks: HS
          }
        }(KS.dailyDrop, uH),
        fH = (0, US.purchasesAllowed)(),
        kH = Object.keys(fS.h[gS]).filter((SS => {
          const HS = (0, fS.l)(gS, SS),
            tS = (0, yS.q)(gS, SS, uH);
          return !(HS.purchasable && !tS && !fH) && (HS.clientSelectable || tS)
        })).sort(((SS, HS) => {
          var tS, bS, XS, xS;
          return (null !== (tS = null === (bS = (0, fS.j)(gS, SS)) || void 0 === bS ? void 0 : bS.clientIdx) && void 0 !== tS ? tS : 0) - (null !== (XS = null === (xS = (0, fS.j)(gS, HS)) || void 0 === xS ? void 0 : xS.clientIdx) && void 0 !== XS ? XS : 0)
        })),
        aH = new Map;
      for (const tS of kH) {
        var KH;
        const SS = null === (KH = (0, fS.j)(gS, tS)) || void 0 === KH ? void 0 : KH.cosmeticPack;
        aH.has(SS) || aH.set(SS, []), aH.get(SS).push(tS)
      }
      const jH = function(SS, HS) {
          const gS = new Set,
            tS = new Set;
          for (const [bS, XS] of Object.entries(fS.h[SS])) {
            if (void 0 === XS.colourGroup) continue;
            const xS = `${XS.cosmeticPack}_${XS.colourGroup}`;
            (eS(SS, bS, HS) ? tS : gS).add(xS)
          }
          return new Set([...gS].filter((SS => tS.has(SS))))
        }(gS, uH),
        GH = new Map;
      for (const [tS, bS] of aH) {
        const SS = [],
          HS = new Map;
        for (const tS of bS) {
          var CH, nH;
          const bS = null !== (CH = null === (nH = (0, fS.j)(gS, tS)) || void 0 === nH ? void 0 : nH.colourGroup) && void 0 !== CH ? CH : null;
          HS.has(bS) || (HS.set(bS, []), SS.push(bS)), HS.get(bS).push(tS)
        }
        const XS = SS.map((SS => {
          var bS;
          const XS = HS.get(SS),
            xS = SS ? null === (bS = AS.c[tS].colourGroups) || void 0 === bS ? void 0 : bS[SS] : void 0,
            NS = !0 === (null === xS || void 0 === xS ? void 0 : xS.showSwatchSelector) && !jH.has(`${tS}_${SS}`);
          if (NS && xS) {
            var qS;
            const HS = null !== (qS = cS[`${tS}_${gS}_${SS}`]) && void 0 !== qS ? qS : (0, AS.g)(xS.colours);
            return {
              groupName: SS,
              showSwatch: NS,
              cosmetics: XS.filter((SS => {
                const gS = (0, fS.i)(SS);
                return !gS || HS.toString() === gS[1].toString()
              }))
            }
          }
          return {
            groupName: SS,
            cosmetics: XS,
            showSwatch: NS
          }
        }));
        GH.set(tS, XS)
      }
      const PH = Array.from(aH.keys()),
        QH = new Map;
      for (const [tS, bS] of Object.entries(kS.c)) {
        const SS = AS.c[bS.cosmeticPack],
          HS = !rS(bS.cosmetics, uH),
          gS = AS.j.some((SS => (0, AS.d)(SS) === tS));
        (SS.clientSelectable || gS || HS) && ((!SS.purchasable || HS || fH) && (QH.has(bS.cosmeticPack) || QH.set(bS.cosmeticPack, []), QH.get(bS.cosmeticPack).push([tS, bS])))
      }
      const DH = Array.from(QH.keys());
      return (0, BS.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === gS || "nameColour" === gS) && !KS.playerHasRank("super") && (0, BS.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, BS.jsx)(zS.d, {
            name: "bolt"
          }), xS("homePage:unlockWithSuperRank"), fH && (0, BS.jsx)(DS.p, {
            onClick: () => {
              (0, wS.r)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: xS("general:getItNow")
          })]
        }), (0, BS.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === HS && (0, BS.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, BS.jsx)(MS, {
              wornOutfit: GS(TS.current),
              onApply: SS => {
                qH(SS, {
                  undoable: !0
                })
              },
              onOverwrite: (SS, HS) => {
                pS({
                  kind: "slot",
                  slot: SS,
                  outfit: HS
                })
              }
            }), DH.map((SS => {
              const HS = QH.get(SS);
              return (0, BS.jsx)(SH, {
                pack: SS,
                ownedPacks: uH,
                showStoreLink: !AS.m.includes(SS) && HS.some((SS => {
                  let [, {
                    cosmetics: HS
                  }] = SS;
                  return rS(HS, uH)
                })),
                children: (0, BS.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: HS.map((SS => {
                    let [HS, {
                      cosmetics: gS
                    }] = SS;
                    const tS = rS(gS, uH),
                      bS = !tS && function(SS, HS) {
                        return Object.entries(HS).some((HS => {
                          let [gS, tS] = HS;
                          return oS(SS, gS, tS)
                        }))
                      }(IH, gS),
                      XS = tS || bS,
                      xS = CS(gS, OS),
                      qS = !xS && CS(gS, TS.current);
                    return (0, BS.jsx)(lS, {
                      locked: bS,
                      children: (0, BS.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: NS()("CharacterPresetCard", {
                          CharacterPresetCardActive: qS,
                          CharacterPresetCardTryingOn: xS
                        }),
                        onClick: () => {
                          XS ? function(SS) {
                            CS(SS, OS) ? dS({}) : dS({
                              ...SS
                            })
                          }(gS) : qH(gS, {
                            undoable: !0
                          })
                        },
                        children: [(0, BS.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(/textures/charSkins/previews/character_${HS}_preview.png)`
                          }
                        }), XS && (0, BS.jsx)(zS.d, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, HS)
                  }))
                })
              }, SS)
            }))]
          }), "emote" === HS && (0, BS.jsx)(HH, {
            equippedEmoteIds: (0, aS.g)(TS.current.emote),
            ownedPacks: uH,
            canBuy: fH,
            onUpdateLoadout: SS => {
              const HS = (0, aS.k)(SS);
              var gS;
              TS.current = {
                ...TS.current,
                emote: HS
              }, KS.setPlayerCosmetics("emote", HS), nS(), gS = HS, bH.current = gS, null !== tH.current && clearTimeout(tH.current), tH.current = setTimeout(XH, 350)
            },
            onEmoteSelected: RS,
            onEquipPreviewSkin: () => {
              ! function(SS, HS) {
                for (const gS of qS.r) "cape" !== gS && "nameColour" !== gS && "emote" !== gS && SS(gS, "skin" === gS ? "skin_preview" : `${gS}_none`, !1);
                HS()
              }(xH, nS)
            }
          }), "characters" !== HS && "emote" !== HS && (0, BS.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, PH.map((SS => {
              const HS = GH.get(SS);
              return (0, BS.jsx)(SH, {
                pack: SS,
                ownedPacks: uH,
                children: HS.map((HS => {
                  var tS;
                  let {
                    groupName: bS,
                    cosmetics: XS,
                    showSwatch: xS
                  } = HS;
                  const qS = bS ? null === (tS = AS.c[SS].colourGroups) || void 0 === tS ? void 0 : tS[bS] : void 0,
                    IS = `${SS}_${gS}_${bS}`;
                  return (0, BS.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [xS && qS && (0, BS.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...qS.colours.map(((SS, HS) => ({
                        color: SS,
                        index: HS
                      })))].sort(((SS, HS) => SS.color.order - HS.color.order)).map((HS => {
                        var tS;
                        let {
                          color: XS,
                          index: xS
                        } = HS;
                        return (0, BS.jsx)("div", {
                          className: NS()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (tS = cS[IS]) && void 0 !== tS ? tS : (0, AS.g)(qS.colours)) === xS
                          }),
                          style: {
                            backgroundColor: `rgb(${XS.rbg.join(",")})`
                          },
                          onClick: () => {
                            var HS;
                            vS((SS => ({
                              ...SS,
                              [IS]: xS
                            })));
                            const tS = OS[gS],
                              XS = tS ? (0, fS.j)(gS, tS) : null,
                              NS = (null === XS || void 0 === XS ? void 0 : XS.cosmeticPack) === SS,
                              qS = NS ? tS : TS.current[gS],
                              uS = NS ? XS : (0, fS.j)(gS, qS);
                            if ((null === uS || void 0 === uS ? void 0 : uS.cosmeticPack) !== SS) return;
                            if ((null !== (HS = null === uS || void 0 === uS ? void 0 : uS.colourGroup) && void 0 !== HS ? HS : null) !== bS) return;
                            const kS = (0, fS.i)(qS);
                            if (kS) {
                              const SS = `${gS}_${kS[0]}_${xS}`;
                              eS(gS, SS, uH) || oS(IH, gS, SS) ? dS((HS => ({
                                ...HS,
                                [gS]: SS
                              }))) : (NS && NH(gS), xH(gS, SS, !0))
                            }
                          }
                        }, XS.rbg.join())
                      }))
                    }), XS.map((SS => {
                      const HS = SS === TS.current[gS],
                        tS = OS[gS] === SS,
                        bS = eS(gS, SS, uH),
                        XS = !bS && oS(IH, gS, SS),
                        xS = bS || XS;
                      let qS = !0;
                      return xS || HS || ("cape" !== gS || (0, LS.Dd)(KS.getPlayerRanks(), SS)) && ("nameColour" !== gS || KS.playerHasRank("super")) || (qS = !1), (0, BS.jsx)(lS, {
                        locked: XS,
                        children: (0, BS.jsxs)("div", {
                          className: NS()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: HS && !tS,
                            TryingOnCharCustomPartWrapper: tS,
                            DisabledCharCustomPartWrapper: !qS,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === gS
                          }),
                          onClick: () => {
                            if (qS)
                              if (xS) dS((HS => {
                                if (HS[gS] === SS) {
                                  const SS = {
                                    ...HS
                                  };
                                  return delete SS[gS], SS
                                }
                                return {
                                  ...HS,
                                  [gS]: SS
                                }
                              }));
                              else {
                                var HS;
                                if (OS[gS] && NH(gS), SS === TS.current[gS]) return;
                                null !== (HS = gH.current) && void 0 !== HS && HS.isReady() && xH(gS, SS, !0)
                              }
                          },
                          children: ["profileEffect" === gS ? (0, BS.jsx)("div", {
                            className: "CharCustomPart CharCustomProfileEffect",
                            children: (0, BS.jsx)(WS.g, {
                              playerSocialPreview: (0, iS.e)(SS, {
                                name: KS.getPlayerName(),
                                cosmetics: KS.getPlayerCosmetics()
                              }),
                              showLocation: !1,
                              opensProfileCard: !1
                            })
                          }) : (0, BS.jsx)("div", {
                            className: NS()("CharCustomPart", {
                              PixelatedImage: "cape" === gS
                            }),
                            style: (0, fS.j)(gS, SS).previewTex ? {
                              backgroundImage: `url(/textures/charSkins/previews/${(0,fS.j)(gS,SS).previewTex}.png)`
                            } : {
                              backgroundColor: uS.t[SS]
                            }
                          }), xS && (0, BS.jsx)(zS.d, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, SS)
                    }))]
                  }, null !== bS && void 0 !== bS ? bS : "ungrouped")
                }))
              }, SS)
            }))]
          }), VS && (0, BS.jsxs)(DS.g, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === VS.kind ? qH(VS.outfit, {
                undoable: !1
              }) : (ES.save(VS.slot, VS.outfit), pS(null))
            },
            children: [(0, BS.jsx)(zS.d, {
              name: "rotate-left"
            }), xS("general:undo")]
          }), (0, BS.jsx)(YS.CharacterPreview, {
            ref: gH,
            forcedCosmetics: OS,
            gN: sS.id,
            emotePlaySeq: sS.seq,
            onReady: () => {
              for (const SS of qS.r) xH(SS, TS.current[SS], !1)
            }
          })]
        })]
      })
    }))
  },
  41290: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      CharacterPreview: () => fS
    });
    var tS = gS(64),
      bS = gS(2890),
      XS = gS(1327),
      xS = gS(2692),
      NS = gS(34267),
      qS = gS(3760),
      uS = gS(1181);
    const IS = .6 * Math.PI,
      fS = (0, tS.memo)((0, tS.forwardRef)((function(SS, HS) {
        let {
          onReady: gS,
          onDrawn: fS,
          owner: kS = "other",
          framing: aS = "player",
          forcedCosmetics: KS,
          gN: jS,
          emotePlaySeq: GS,
          turntableFromYaw: CS = null
        } = SS;
        const nS = (0, tS.useRef)(null),
          {
            width: PS,
            height: QS
          } = (0, bS.d)(nS),
          DS = (0, tS.useRef)(null),
          wS = (0, tS.useRef)({}),
          hS = (0, tS.useRef)({}),
          [ZS, JS] = (0, tS.useState)(!1),
          OS = (0, tS.useRef)(gS);
        OS.current = gS;
        const dS = (0, tS.useRef)(fS);
        dS.current = fS;
        const cS = (0, tS.useRef)(null),
          vS = (0, tS.useRef)(!1),
          ES = (0, tS.useRef)(!1),
          LS = (0, tS.useCallback)((() => {
            const SS = DS.current;
            if (!SS || !dS.current || vS.current || !ES.current) return;
            const HS = {};
            cS.current = HS, queueMicrotask((() => {
              if (cS.current !== HS) return;
              const gS = Promise.all(XS.r.map((HS => SS.untilDrawn(HS)))).catch((SS => {
                  console.error("Failed to draw the character preview", SS)
                })),
                tS = new Promise((SS => {
                  setTimeout(SS, 1e4)
                }));
              Promise.race([gS, tS]).then((() => {
                var gS;
                DS.current !== SS || cS.current !== HS || vS.current || (vS.current = !0, null === (gS = dS.current) || void 0 === gS || gS.call(dS))
              }))
            }))
          }), []);
        return (0, tS.useImperativeHandle)(HS, (() => {
          const SS = (SS, HS) => {
            var gS;
            (wS.current[SS] = HS, null !== KS && void 0 !== KS && KS[SS]) || (null === (gS = DS.current) || void 0 === gS || gS.setCosmetic(SS, HS), LS())
          };
          return {
            updateCosmetic: SS,
            setAllCosmetics(HS) {
              for (const tS of XS.r) {
                var gS;
                SS(tS, null !== (gS = HS[tS]) && void 0 !== gS ? gS : (0, xS.b)(tS))
              }
            },
            isReady() {
              var SS, HS;
              return null !== (SS = null === (HS = DS.current) || void 0 === HS ? void 0 : HS.isReady()) && void 0 !== SS && SS
            },
            resetCamera() {
              var SS;
              null === (SS = DS.current) || void 0 === SS || SS.resetCamera()
            },
            setOrbit(SS) {
              var HS;
              null === (HS = DS.current) || void 0 === HS || HS.setOrbit(SS)
            },
            async ensureReadyForCapture(SS) {
              var HS;
              await (null === (HS = DS.current) || void 0 === HS ? void 0 : HS.untilDrawn(SS))
            },
            getDevTools() {
              var SS;
              return null !== (SS = DS.current) && void 0 !== SS && SS.isReady() ? DS.current.dev : null
            }
          }
        }), [KS, LS]), (0, tS.useEffect)((() => {
          const SS = qS.b.register(kS),
            HS = NS.g.openCharacter(nS.current, aS);
          DS.current = HS;
          let gS = !0;
          return HS.ready.then((() => {
            gS && (JS(!0), OS.current())
          })).catch((SS => {
            console.error("Failed to set up the character preview", SS)
          })), () => {
            gS = !1, SS(), HS.resetCamera(), HS.close(), DS.current = null
          }
        }), []), (0, tS.useEffect)((() => {
          PS <= 0 || QS <= 0 || DS.current.resize(PS, QS)
        }), [PS, QS]), (0, tS.useEffect)((() => {
          if (!ZS) return;
          const SS = hS.current;
          for (const HS of XS.r) {
            const gS = null === KS || void 0 === KS ? void 0 : KS[HS],
              tS = SS[HS];
            gS && gS !== tS ? DS.current.setCosmetic(HS, gS) : !gS && tS && wS.current[HS] && DS.current.setCosmetic(HS, wS.current[HS])
          }
          hS.current = {
            ...KS
          }, ES.current = !0, LS()
        }), [KS, ZS, LS]), (0, tS.useEffect)((() => {
          ZS && DS.current.playEmote(null !== jS && void 0 !== jS ? jS : null)
        }), [jS, GS, ZS]), (0, tS.useEffect)((() => {
          if (!ZS || null === CS) return;
          const SS = DS.current,
            {
              pitch: HS,
              radius: gS
            } = NS.b[aS];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return SS.setOrbit({
            yaw: CS + IS,
            pitch: HS,
            radius: gS
          }), () => {
            SS.resetCamera()
          };
          const tS = performance.now();
          let bS = 0;
          const XS = xS => {
            SS.setOrbit({
              yaw: CS + (xS - tS) / 6e3 * 2 * Math.PI,
              pitch: HS,
              radius: gS
            }), bS = requestAnimationFrame(XS)
          };
          return bS = requestAnimationFrame(XS), () => {
            cancelAnimationFrame(bS), SS.resetCamera()
          }
        }), [ZS, CS]), (0, uS.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: nS
        })
      })))
  },
  36393: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(2060),
      bS = gS(1588);
    const XS = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(SS, HS) {
        SS !== this.userContext && this.sendHeld(), this.userContext = SS;
        for (const [tS, bS] of HS) this.pending.set(tS, bS);
        if (null !== this.timer) return;
        const gS = this.lastSentAt + 1100 - Date.now();
        gS <= 0 ? this.send(SS) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), gS), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(SS) {
        const HS = Array.from(this.pending, (SS => {
          let [HS, gS] = SS;
          return {
            wt: HS,
            ht: gS
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), bS.b.updateCosmetics(SS, HS).catch((SS => {
          console.error("Failed to update cosmetics", SS)
        }))
      }
    };

    function xS(SS, HS) {
      for (const [gS, tS] of HS) SS.setPlayerCosmetics(gS, tS);
      if (null === tS.gameBridge.latest("connectedGame").websocketUrl) XS.save(SS, HS);
      else
        for (const [gS, bS] of HS) tS.gameBridge.send("updateMyCosmetic", {
          wt: gS,
          ht: bS
        })
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);