export const id = 224;
export const ids = [224, 300];
export const modules = {
  41519: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      CharacterCustomisationUI: () => qW
    });
    var wQ = XQ(61),
      qQ = XQ(2728),
      TQ = XQ(1162),
      zQ = XQ(1081),
      sQ = XQ.n(zQ),
      FQ = XQ(1273),
      PQ = XQ(646),
      gQ = XQ(1226),
      JQ = XQ(2313),
      rQ = XQ(1626),
      IQ = XQ(2678);
    const jQ = FQ.x.filter((QQ => !rQ.g.includes(QQ)));

    function BQ(QQ, WQ) {
      return jQ.includes(QQ) && "string" === typeof WQ && (0, IQ.h)(QQ, WQ)
    }

    function yQ(QQ) {
      const WQ = {};
      for (const XQ of jQ) {
        const wQ = QQ[XQ];
        void 0 !== wQ && BQ(XQ, wQ) && (WQ[XQ] = wQ)
      }
      return WQ
    }

    function VQ(QQ) {
      return 0 === Object.keys(QQ).length
    }

    function DQ(QQ, WQ) {
      return Object.entries(QQ).every((QQ => {
        let [XQ, wQ] = QQ;
        return WQ[XQ] === wQ
      }))
    }
    var pQ = XQ(2318),
      GQ = XQ(3362),
      UQ = XQ(2052),
      bQ = XQ(1507),
      vQ = XQ(2351),
      dQ = XQ(26),
      HQ = XQ(2850),
      aQ = XQ(1548),
      lQ = XQ(1165),
      hQ = XQ(1927);
    class iQ {
      constructor() {
        this.slots = new Map, this.before = new Map, this.accountId = null
      }
      moveTo(QQ) {
        null !== QQ && QQ !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = QQ)
      }
      isFor(QQ) {
        return null === this.accountId || this.accountId === QQ
      }
      overlay(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return QQ.map(((QQ, XQ) => {
          var wQ, qQ;
          return null !== (wQ = null !== (qQ = this.slots.get(XQ)) && void 0 !== qQ ? qQ : WQ.get(XQ)) && void 0 !== wQ ? wQ : QQ
        }))
      }
    }
    class cQ extends HQ.d {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new iQ;
        super("saved outfits", (async WQ => {
          const XQ = QQ.isFor(WQ.whamm),
            wQ = new Map(QQ.slots),
            qQ = await aQ.e.getSavedOutfits(WQ);
          return XQ ? QQ.overlay(qQ, wQ) : qQ
        })), this.unsaved = QQ, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(QQ, WQ) {
        var XQ, wQ;
        (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(QQ)) || this.unsaved.before.set(QQ, null !== (XQ = null === (wQ = this.getState().data) || void 0 === wQ ? void 0 : wQ[QQ]) && void 0 !== XQ ? XQ : {});
        this.unsaved.slots.set(QQ, WQ), this.update((XQ => XQ.map(((XQ, wQ) => wQ === QQ ? WQ : XQ)))), this.sending || this.sendUnsaved()
      }
      clear(QQ) {
        this.save(QQ, {})
      }
      async sendUnsaved() {
        this.sending = !0;
        let QQ = !1;
        for (; this.unsaved.slots.size > 0;) {
          const XQ = new Map(this.unsaved.slots);
          let wQ = this.getState().accountId;
          try {
            const QQ = await lQ.userContextManager.getCurrentUserContext();
            if (wQ = QQ.whamm, this.unsaved.moveTo(QQ.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: WQ,
              data: qQ
            } = this.getState();
            let TQ = qQ;
            WQ === QQ.whamm && null !== TQ || (TQ = this.unsaved.overlay(await aQ.e.getSavedOutfits(QQ)), this.refresh()), await aQ.e.setSavedOutfits(QQ, TQ), this.unsaved.isFor(QQ.whamm) && TQ.forEach(((QQ, WQ) => {
              const wQ = this.unsaved.slots.get(WQ);
              void 0 === wQ || wQ === XQ.get(WQ) ? this.unsaved.before.delete(WQ) : this.unsaved.before.set(WQ, QQ)
            }))
          } catch (WQ) {
            if (console.error("Failed to save outfits", WQ), this.getState().accountId === wQ && [...this.unsaved.slots].every((QQ => {
                let [WQ, wQ] = QQ;
                return XQ.get(WQ) === wQ
              }))) {
              const WQ = [...XQ.values()].every(VQ);
              hQ.g.showMessage({
                translationKey: WQ ? "homePage:deleteOutfitFailed" : "homePage:saveOutfitFailed"
              });
              const wQ = new Map(this.unsaved.before);
              this.unsaved.before.clear(), this.update((QQ => QQ.map(((QQ, WQ) => {
                var XQ;
                return null !== (XQ = wQ.get(WQ)) && void 0 !== XQ ? XQ : QQ
              })))), QQ = !0
            }
          }
          for (const [QQ, WQ] of XQ) this.unsaved.slots.get(QQ) === WQ && this.unsaved.slots.delete(QQ)
        }
        this.sending = !1, QQ && this.refresh()
      }
    }
    const AQ = new cQ;
    var RQ = XQ(402),
      EQ = XQ(41521),
      CQ = XQ(1620),
      uQ = XQ(2410),
      LQ = XQ(3255),
      kQ = XQ(2237),
      fQ = XQ(2756),
      SQ = XQ(1094);
    XQ(34541), XQ(3371);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var tQ = XQ(2359),
      oQ = XQ(1416),
      eQ = XQ(2451),
      nQ = XQ(1404),
      xQ = XQ(1145);

    function YQ(QQ) {
      let {
        wornOutfit: WQ,
        onApply: XQ,
        onOverwrite: qQ,
        onDelete: zQ
      } = QQ;
      const {
        t: FQ
      } = (0, gQ.C)(), {
        accountId: PQ,
        data: JQ
      } = (0, HQ.f)(AQ, !1), {
        userContext: rQ
      } = (0, TQ.c)();
      async function IQ(QQ, WQ) {
        const XQ = await nQ.NotificationProvider.showPromptPopup({
            title: "homePage:deleteOutfitConfirm",
            confirmText: "general:delete",
            cancelText: "general:cancel",
            destructive: !0
          }).getResult(),
          {
            accountId: wQ,
            data: qQ
          } = AQ.getState();
        var TQ, sQ;
        !0 === XQ && wQ === PQ && null !== qQ && (DQ(TQ = qQ[QQ], sQ = WQ) && DQ(sQ, TQ)) && (AQ.clear(QQ), zQ(QQ))
      }
      return (0, wQ.useEffect)((() => {
        AQ.ensureLoaded()
      }), []), null === JQ || PQ !== rQ.whamm ? null : (0, xQ.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, xQ.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, xQ.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: FQ("homePage:myOutfits")
          })
        }), (0, xQ.jsx)("div", {
          className: "CharacterPresetsGrid SavedOutfitsGrid",
          children: JQ.map(((QQ, wQ) => {
            const TQ = VQ(QQ);
            return (0, xQ.jsxs)("div", {
              className: sQ()("SavedOutfitSlot", {
                SavedOutfitSlotFilled: !TQ
              }),
              children: [(0, xQ.jsxs)("div", {
                ...(0, bQ.ab)(),
                role: TQ ? "button" : "link",
                "data-pad-focusable": !0,
                className: sQ()("CharacterPresetCard SavedOutfitCard", {
                  SavedOutfitCardEmpty: TQ,
                  CharacterPresetCardActive: !TQ && DQ(QQ, WQ)
                }),
                onClick: () => {
                  TQ ? AQ.save(wQ, WQ) : XQ(QQ)
                },
                children: [TQ && (0, xQ.jsxs)(xQ.Fragment, {
                  children: [(0, xQ.jsx)(SQ.d, {
                    name: "plus"
                  }), FQ("homePage:saveOutfit")]
                }), !TQ && (0, xQ.jsxs)(xQ.Fragment, {
                  children: [(0, xQ.jsx)("div", {
                    className: "SavedOutfitCardPicture",
                    children: (0, xQ.jsx)(eQ.d, {
                      cosmetics: QQ
                    })
                  }), (0, xQ.jsx)(bQ.T, {
                    padSecondaryLabelKey: "homePage:saveOutfit",
                    stopPropagation: !0,
                    onClick: () => {
                      DQ(WQ, QQ) || (AQ.save(wQ, WQ), qQ(wQ, QQ))
                    },
                    children: FQ("general:save")
                  })]
                })]
              }), !TQ && (0, xQ.jsx)("button", {
                type: "button",
                className: "SavedOutfitDeleteButton",
                "data-pad-destructive": !0,
                "aria-label": FQ("general:delete"),
                title: FQ("general:delete"),
                onClick: () => {
                  IQ(wQ, QQ)
                },
                children: (0, xQ.jsx)(SQ.d, {
                  name: "trash-can"
                })
              })]
            }, wQ)
          }))
        })]
      })
    }
    var NQ = XQ(36684),
      ZQ = XQ(2668),
      OQ = XQ(2674);

    function KQ(QQ, WQ, XQ) {
      return null !== QQ && !(0, ZQ.e)(OQ.e, WQ, XQ, QQ.collected, QQ.ownedPacks)
    }

    function mQ(QQ) {
      let {
        locked: WQ,
        children: XQ
      } = QQ;
      return WQ ? (0, xQ.jsx)(MQ, {
        children: XQ
      }) : XQ
    }

    function MQ(QQ) {
      var WQ;
      let {
        children: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, gQ.C)(), {
        userContext: qQ
      } = (0, TQ.c)(), zQ = null !== (WQ = qQ.dailyDrop) && void 0 !== WQ && WQ.hidden ? wQ("dailyDrop:lockedFromHidden") : wQ("dailyDrop:lockedFrom");
      return (0, xQ.jsx)(oQ.e, {
        tooltipInner: (0, xQ.jsx)(xQ.Fragment, {
          children: zQ
        }),
        children: XQ
      })
    }

    function QW(QQ, WQ, XQ) {
      return (0, JQ.n)(QQ, WQ).purchasable && !(0, uQ.x)(QQ, WQ, XQ)
    }

    function WW(QQ, WQ) {
      return Object.entries(QQ).some((QQ => {
        let [XQ, wQ] = QQ;
        return QW(XQ, wQ, WQ)
      }))
    }

    function XW(QQ) {
      var WQ;
      let {
        pack: XQ,
        ownedPacks: wQ,
        showStoreLink: qQ = !1,
        children: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, gQ.C)(), FQ = CQ.d[XQ], PQ = FQ.purchasable && !wQ.includes(XQ) && CQ.u.includes(XQ), JQ = LQ.l[XQ];
      return (0, xQ.jsxs)("div", {
        className: sQ()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: PQ
        }),
        children: [JQ && (0, xQ.jsx)(JQ, {}), (0, xQ.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, xQ.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (WQ = FQ.displayName) && void 0 !== WQ ? WQ : XQ
          }), (PQ || qQ) && (0, xQ.jsxs)(bQ.I, {
            onClick: () => {
              PQ ? (0, LQ.j)(XQ) : (0, vQ.q)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, xQ.jsx)(SQ.d, {
              name: "store"
            }), " ", zQ("general:viewInShop")]
          })]
        }), PQ && "bee" === XQ && (0, xQ.jsx)(LQ.c, {}), TQ]
      })
    }

    function wW(QQ) {
      let {
        equippedEmoteIds: WQ,
        ownedPacks: XQ,
        canBuy: wQ,
        onUpdateLoadout: qQ,
        onEmoteSelected: TQ,
        onEquipPreviewSkin: zQ
      } = QQ;
      const {
        t: PQ
      } = (0, gQ.C)(), rQ = new Set(WQ), IQ = new Map, jQ = Object.keys(JQ.f.emote).sort(((QQ, WQ) => {
        var XQ, wQ, qQ, TQ;
        return (null !== (XQ = null === (wQ = (0, JQ.j)("emote", QQ)) || void 0 === wQ ? void 0 : wQ.clientIdx) && void 0 !== XQ ? XQ : 0) - (null !== (qQ = null === (TQ = (0, JQ.j)("emote", WQ)) || void 0 === TQ ? void 0 : TQ.clientIdx) && void 0 !== qQ ? qQ : 0)
      })).filter((QQ => {
        const WQ = (0, JQ.n)("emote", QQ),
          qQ = (0, uQ.x)("emote", QQ, XQ);
        return !(WQ.purchasable && !qQ && !wQ) && (WQ.clientSelectable || qQ)
      }));
      for (const sQ of jQ) {
        const QQ = (0, JQ.j)("emote", sQ).cosmeticPack;
        IQ.has(QQ) || IQ.set(QQ, []), IQ.get(QQ).push(sQ)
      }
      const BQ = Array.from(IQ.keys());
      return (0, xQ.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, xQ.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, xQ.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: PQ("emotes:equippedCount", {
              count: WQ.length,
              max: FQ.o
            })
          }), (0, xQ.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: PQ("emotes:loadoutHint")
          })]
        }), BQ.map((QQ => {
          const wQ = IQ.get(QQ);
          return (0, xQ.jsx)(XW, {
            pack: QQ,
            ownedPacks: XQ,
            children: (0, xQ.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: wQ.map((QQ => {
                var wQ;
                const zQ = WQ.indexOf(QQ),
                  gQ = -1 !== zQ,
                  JQ = WQ.length >= FQ.o,
                  IQ = QW("emote", QQ, XQ),
                  jQ = IQ || !gQ && JQ,
                  BQ = (0, pQ.i)(QQ);
                return (0, xQ.jsxs)("div", {
                  className: sQ()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: gQ
                  }),
                  onClick: () => {
                    TQ(QQ)
                  },
                  children: [(0, xQ.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, xQ.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${QQ}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, xQ.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (wQ = null === BQ || void 0 === BQ ? void 0 : BQ.displayName) && void 0 !== wQ ? wQ : QQ
                    })]
                  }), (0, xQ.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [gQ && (0, xQ.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: zQ + 1
                    }), IQ && (0, xQ.jsx)(SQ.d, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, xQ.jsx)(oQ.e, {
                      tooltipInner: (0, xQ.jsx)(xQ.Fragment, {
                        children: PQ(gQ ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, xQ.jsx)("div", {
                        className: sQ()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: jQ,
                          EmoteCustomPartToggleEquipped: gQ
                        }),
                        onClick: XQ => {
                          XQ.stopPropagation(), jQ || function(QQ) {
                            rQ.has(QQ) ? qQ(WQ.filter((WQ => WQ !== QQ))) : WQ.length >= FQ.o || qQ([...WQ, QQ])
                          }(QQ)
                        },
                        children: (0, xQ.jsx)(SQ.d, {
                          name: gQ ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, QQ)
              }))
            })
          }, QQ)
        }))]
      })
    }
    const qW = (0, wQ.memo)((function(QQ) {
      let {
        selectedTab: WQ
      } = QQ;
      const XQ = "characters" === WQ ? "skin" : WQ,
        {
          t: zQ
        } = (0, gQ.C)(),
        {
          userContext: jQ,
          isUserContextUpdating: BQ
        } = (0, TQ.c)(),
        VQ = (0, qQ.d)(),
        {
          gameState: pQ
        } = (0, dQ.n)(["gameState"]),
        [HQ, aQ] = (0, wQ.useState)({}),
        [lQ, hQ] = (0, wQ.useState)({}),
        [iQ, cQ] = (0, wQ.useState)(null),
        {
          previewEmote: LQ,
          triggerEmote: oQ
        } = (0, GQ.c)(),
        eQ = (0, wQ.useRef)(FQ.x.reduce(((QQ, WQ) => (QQ[WQ] = (0, IQ.e)(WQ), QQ)), {})),
        nQ = (0, wQ.useRef)(!1),
        ZQ = (0, wQ.useRef)(null),
        OQ = (0, wQ.useRef)(null),
        MQ = (0, wQ.useRef)(null);

      function qW() {
        null !== OQ.current && (clearTimeout(OQ.current), OQ.current = null);
        const QQ = MQ.current;
        null !== QQ && (MQ.current = null, (0, NQ.e)(jQ, [
          ["emote", QQ]
        ]))
      }

      function TW(QQ, WQ, XQ) {
        var wQ, qQ, TQ;
        eQ.current = {
          ...eQ.current,
          [QQ]: WQ
        }, VQ(), XQ && ((0, NQ.e)(jQ, [
          [QQ, WQ]
        ]), cQ(null));
        const zQ = (0, JQ.j)(QQ, WQ);
        if (null !== zQ && void 0 !== zQ && zQ.colourGroup && null !== (wQ = CQ.d[zQ.cosmeticPack].colourGroups) && void 0 !== wQ && null !== (qQ = wQ[zQ.colourGroup]) && void 0 !== qQ && qQ.showSwatchSelector) {
          const XQ = (0, JQ.g)(WQ);
          XQ && hQ((WQ => ({
            ...WQ,
            [`${zQ.cosmeticPack}_${QQ}_${zQ.colourGroup}`]: parseInt(XQ[1])
          })))
        }
        null !== (TQ = ZQ.current) && void 0 !== TQ && TQ.isReady() && ZQ.current.updateCosmetic(QQ, WQ)
      }

      function zW(QQ) {
        aQ((WQ => {
          const XQ = {
            ...WQ
          };
          return delete XQ[QQ], XQ
        }))
      }

      function sW(QQ, WQ) {
        let {
          undoable: XQ
        } = WQ;
        Object.keys(HQ).length > 0 && aQ({});
        const wQ = Object.entries(QQ).filter((QQ => {
          let [WQ, XQ] = QQ;
          return eQ.current[WQ] !== XQ && !QW(WQ, XQ, FW) && !KQ(PW, WQ, XQ)
        }));
        XQ ? wQ.length > 0 && cQ({
          kind: "worn",
          outfit: yQ(eQ.current)
        }) : cQ(null);
        for (const [qQ, TQ] of wQ) TW(qQ, TQ, !1);
        wQ.length > 0 && (0, NQ.e)(jQ, wQ)
      }(0, UQ.b)("cosmeticsUpdated", (QQ => {
        let WQ = !1;
        for (const {
            local: XQ,
            dT: wQ,
            HT: qQ
          }
          of QQ) {
          if (!XQ) return;
          WQ = !0, nQ.current || TW(wQ, qQ, !1), VQ()
        }
        WQ && (nQ.current = !0)
      })), (0, wQ.useEffect)((() => {
        if (!BQ) {
          for (const [QQ, WQ] of Object.entries(jQ.getPlayerCosmetics())) TW(QQ, WQ, !1);
          VQ()
        }
      }), [BQ]), (0, wQ.useEffect)((() => () => {
        qW()
      }), []);
      const FW = jQ.getOwnedCosmeticPacks(),
        PW = function(QQ, WQ) {
          return null === QQ ? null : {
            collected: new Set(QQ.collected),
            ownedPacks: WQ
          }
        }(jQ.dailyDrop, FW),
        gW = (0, tQ.usePurchasesAllowed)(),
        JW = Object.keys(JQ.f[XQ]).filter((QQ => {
          const WQ = (0, JQ.n)(XQ, QQ),
            wQ = (0, uQ.x)(XQ, QQ, FW);
          return !(WQ.purchasable && !wQ && !gW) && (WQ.clientSelectable || wQ)
        })).sort(((QQ, WQ) => {
          var wQ, qQ, TQ, zQ;
          return (null !== (wQ = null === (qQ = (0, JQ.j)(XQ, QQ)) || void 0 === qQ ? void 0 : qQ.clientIdx) && void 0 !== wQ ? wQ : 0) - (null !== (TQ = null === (zQ = (0, JQ.j)(XQ, WQ)) || void 0 === zQ ? void 0 : zQ.clientIdx) && void 0 !== TQ ? TQ : 0)
        })),
        rW = new Map;
      for (const wQ of JW) {
        var IW;
        const QQ = null === (IW = (0, JQ.j)(XQ, wQ)) || void 0 === IW ? void 0 : IW.cosmeticPack;
        rW.has(QQ) || rW.set(QQ, []), rW.get(QQ).push(wQ)
      }
      const jW = function(QQ, WQ) {
          const XQ = new Set,
            wQ = new Set;
          for (const [qQ, TQ] of Object.entries(JQ.f[QQ])) {
            if (void 0 === TQ.colourGroup) continue;
            const zQ = `${TQ.cosmeticPack}_${TQ.colourGroup}`;
            (QW(QQ, qQ, WQ) ? wQ : XQ).add(zQ)
          }
          return new Set([...XQ].filter((QQ => wQ.has(QQ))))
        }(XQ, FW),
        BW = new Map;
      for (const [wQ, qQ] of rW) {
        const QQ = [],
          WQ = new Map;
        for (const wQ of qQ) {
          var yW, VW;
          const qQ = null !== (yW = null === (VW = (0, JQ.j)(XQ, wQ)) || void 0 === VW ? void 0 : VW.colourGroup) && void 0 !== yW ? yW : null;
          WQ.has(qQ) || (WQ.set(qQ, []), QQ.push(qQ)), WQ.get(qQ).push(wQ)
        }
        const TQ = QQ.map((QQ => {
          var qQ;
          const TQ = WQ.get(QQ),
            zQ = QQ ? null === (qQ = CQ.d[wQ].colourGroups) || void 0 === qQ ? void 0 : qQ[QQ] : void 0,
            sQ = !0 === (null === zQ || void 0 === zQ ? void 0 : zQ.showSwatchSelector) && !jW.has(`${wQ}_${QQ}`);
          if (sQ && zQ) {
            var FQ;
            const WQ = null !== (FQ = lQ[`${wQ}_${XQ}_${QQ}`]) && void 0 !== FQ ? FQ : (0, CQ.i)(zQ.colours);
            return {
              groupName: QQ,
              showSwatch: sQ,
              cosmetics: TQ.filter((QQ => {
                const XQ = (0, JQ.g)(QQ);
                return !XQ || WQ.toString() === XQ[1].toString()
              }))
            }
          }
          return {
            groupName: QQ,
            cosmetics: TQ,
            showSwatch: sQ
          }
        }));
        BW.set(wQ, TQ)
      }
      const DW = Array.from(rW.keys()),
        pW = new Map;
      for (const [wQ, qQ] of Object.entries(rQ.c)) {
        const QQ = CQ.d[qQ.cosmeticPack],
          WQ = !WW(qQ.cosmetics, FW),
          XQ = CQ.q.some((QQ => (0, CQ.f)(QQ) === wQ));
        (QQ.clientSelectable || XQ || WQ) && ((!QQ.purchasable || WQ || gW) && (pW.has(qQ.cosmeticPack) || pW.set(qQ.cosmeticPack, []), pW.get(qQ.cosmeticPack).push([wQ, qQ])))
      }
      const GW = Array.from(pW.keys());
      return (0, xQ.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === XQ || "nameColour" === XQ) && !jQ.playerHasRank("super") && (0, xQ.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, xQ.jsx)(SQ.d, {
            name: "bolt"
          }), zQ("homePage:unlockWithSuperRank"), gW && (0, xQ.jsx)(bQ.s, {
            onClick: () => {
              (0, vQ.q)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: zQ("general:getItNow")
          })]
        }), (0, xQ.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === WQ && (0, xQ.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, xQ.jsx)(YQ, {
              wornOutfit: yQ(eQ.current),
              onApply: QQ => {
                sW(QQ, {
                  undoable: !0
                })
              },
              onOverwrite: (QQ, WQ) => {
                cQ({
                  kind: "slot",
                  slot: QQ,
                  outfit: WQ
                })
              },
              onDelete: QQ => {
                cQ((WQ => "slot" === (null === WQ || void 0 === WQ ? void 0 : WQ.kind) && WQ.slot === QQ ? null : WQ))
              }
            }), GW.map((QQ => {
              const WQ = pW.get(QQ);
              return (0, xQ.jsx)(XW, {
                pack: QQ,
                ownedPacks: FW,
                showStoreLink: !CQ.t.includes(QQ) && WQ.some((QQ => {
                  let [, {
                    cosmetics: WQ
                  }] = QQ;
                  return WW(WQ, FW)
                })),
                children: (0, xQ.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: WQ.map((QQ => {
                    let [WQ, {
                      cosmetics: XQ
                    }] = QQ;
                    const wQ = WW(XQ, FW),
                      qQ = !wQ && function(QQ, WQ) {
                        return Object.entries(WQ).some((WQ => {
                          let [XQ, wQ] = WQ;
                          return KQ(QQ, XQ, wQ)
                        }))
                      }(PW, XQ),
                      TQ = wQ || qQ,
                      zQ = DQ(XQ, HQ),
                      FQ = !zQ && DQ(XQ, eQ.current);
                    return (0, xQ.jsx)(mQ, {
                      locked: qQ,
                      children: (0, xQ.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: sQ()("CharacterPresetCard", {
                          CharacterPresetCardActive: FQ,
                          CharacterPresetCardTryingOn: zQ
                        }),
                        onClick: () => {
                          TQ ? function(QQ) {
                            DQ(QQ, HQ) ? aQ({}) : aQ({
                              ...QQ
                            })
                          }(XQ) : sW(XQ, {
                            undoable: !0
                          })
                        },
                        children: [(0, xQ.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(/textures/charSkins/previews/character_${WQ}_preview.png)`
                          }
                        }), TQ && (0, xQ.jsx)(SQ.d, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, WQ)
                  }))
                })
              }, QQ)
            }))]
          }), "emote" === WQ && (0, xQ.jsx)(wW, {
            equippedEmoteIds: (0, IQ.i)(eQ.current.emote),
            ownedPacks: FW,
            canBuy: gW,
            onUpdateLoadout: QQ => {
              const WQ = (0, IQ.j)(QQ);
              var XQ;
              eQ.current = {
                ...eQ.current,
                emote: WQ
              }, jQ.setPlayerCosmetics("emote", WQ), VQ(), XQ = WQ, MQ.current = XQ, null !== OQ.current && clearTimeout(OQ.current), OQ.current = setTimeout(qW, 350)
            },
            onEmoteSelected: oQ,
            onEquipPreviewSkin: () => {
              ! function(QQ, WQ) {
                for (const XQ of FQ.x) "cape" !== XQ && "nameColour" !== XQ && "emote" !== XQ && QQ(XQ, "skin" === XQ ? "skin_preview" : `${XQ}_none`, !1);
                WQ()
              }(TW, VQ)
            }
          }), "characters" !== WQ && "emote" !== WQ && (0, xQ.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, DW.map((QQ => {
              const WQ = BW.get(QQ);
              return (0, xQ.jsx)(XW, {
                pack: QQ,
                ownedPacks: FW,
                children: WQ.map((WQ => {
                  var wQ;
                  let {
                    groupName: qQ,
                    cosmetics: TQ,
                    showSwatch: zQ
                  } = WQ;
                  const FQ = qQ ? null === (wQ = CQ.d[QQ].colourGroups) || void 0 === wQ ? void 0 : wQ[qQ] : void 0,
                    gQ = `${QQ}_${XQ}_${qQ}`;
                  return (0, xQ.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [zQ && FQ && (0, xQ.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...FQ.colours.map(((QQ, WQ) => ({
                        color: QQ,
                        index: WQ
                      })))].sort(((QQ, WQ) => QQ.color.order - WQ.color.order)).map((WQ => {
                        var wQ;
                        let {
                          color: TQ,
                          index: zQ
                        } = WQ;
                        return (0, xQ.jsx)("div", {
                          className: sQ()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (wQ = lQ[gQ]) && void 0 !== wQ ? wQ : (0, CQ.i)(FQ.colours)) === zQ
                          }),
                          style: {
                            backgroundColor: `rgb(${TQ.rbg.join(",")})`
                          },
                          onClick: () => {
                            var WQ;
                            hQ((QQ => ({
                              ...QQ,
                              [gQ]: zQ
                            })));
                            const wQ = HQ[XQ],
                              TQ = wQ ? (0, JQ.j)(XQ, wQ) : null,
                              sQ = (null === TQ || void 0 === TQ ? void 0 : TQ.cosmeticPack) === QQ,
                              FQ = sQ ? wQ : eQ.current[XQ],
                              PQ = sQ ? TQ : (0, JQ.j)(XQ, FQ);
                            if ((null === PQ || void 0 === PQ ? void 0 : PQ.cosmeticPack) !== QQ) return;
                            if ((null !== (WQ = null === PQ || void 0 === PQ ? void 0 : PQ.colourGroup) && void 0 !== WQ ? WQ : null) !== qQ) return;
                            const rQ = (0, JQ.g)(FQ);
                            if (rQ) {
                              const QQ = `${XQ}_${rQ[0]}_${zQ}`;
                              QW(XQ, QQ, FW) || KQ(PW, XQ, QQ) ? aQ((WQ => ({
                                ...WQ,
                                [XQ]: QQ
                              }))) : (sQ && zW(XQ), TW(XQ, QQ, !0))
                            }
                          }
                        }, TQ.rbg.join())
                      }))
                    }), TQ.map((QQ => {
                      const WQ = QQ === eQ.current[XQ],
                        wQ = HQ[XQ] === QQ,
                        qQ = QW(XQ, QQ, FW),
                        TQ = !qQ && KQ(PW, XQ, QQ),
                        zQ = qQ || TQ;
                      let FQ = !0;
                      return zQ || WQ || ("cape" !== XQ || (0, RQ.Hd)(jQ.getPlayerRanks(), QQ)) && ("nameColour" !== XQ || jQ.playerHasRank("super")) || (FQ = !1), (0, xQ.jsx)(mQ, {
                        locked: TQ,
                        children: (0, xQ.jsxs)("div", {
                          className: sQ()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: WQ && !wQ,
                            TryingOnCharCustomPartWrapper: wQ,
                            DisabledCharCustomPartWrapper: !FQ,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === XQ
                          }),
                          onClick: () => {
                            if (FQ)
                              if (zQ) aQ((WQ => {
                                if (WQ[XQ] === QQ) {
                                  const QQ = {
                                    ...WQ
                                  };
                                  return delete QQ[XQ], QQ
                                }
                                return {
                                  ...WQ,
                                  [XQ]: QQ
                                }
                              }));
                              else {
                                var WQ;
                                if (HQ[XQ] && zW(XQ), QQ === eQ.current[XQ]) return;
                                null !== (WQ = ZQ.current) && void 0 !== WQ && WQ.isReady() && TW(XQ, QQ, !0)
                              }
                          },
                          children: ["profileEffect" === XQ ? (0, xQ.jsx)("div", {
                            className: "CharCustomPart CharCustomProfileEffect",
                            children: (0, xQ.jsx)(fQ.c, {
                              playerSocialPreview: (0, kQ.b)(QQ, {
                                name: jQ.getPlayerName(),
                                cosmetics: jQ.getPlayerCosmetics()
                              }),
                              showLocation: !1,
                              opensProfileCard: !1
                            })
                          }) : (0, xQ.jsx)("div", {
                            className: sQ()("CharCustomPart", {
                              PixelatedImage: "cape" === XQ
                            }),
                            style: (0, JQ.j)(XQ, QQ).previewTex ? {
                              backgroundImage: `url(/textures/charSkins/previews/${(0,JQ.j)(XQ,QQ).previewTex}.png)`
                            } : {
                              backgroundColor: PQ.s[QQ]
                            }
                          }), zQ && (0, xQ.jsx)(SQ.d, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, QQ)
                    }))]
                  }, null !== qQ && void 0 !== qQ ? qQ : "ungrouped")
                }))
              }, QQ)
            }))]
          }), iQ && (0, xQ.jsxs)(bQ.h, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === iQ.kind ? sW(iQ.outfit, {
                undoable: !1
              }) : (AQ.save(iQ.slot, iQ.outfit), cQ(null))
            },
            children: [(0, xQ.jsx)(SQ.d, {
              name: "rotate-left"
            }), zQ("general:undo")]
          }), (0, xQ.jsx)(EQ.CharacterPreview, {
            ref: ZQ,
            forcedCosmetics: HQ,
            Rs: LQ.id,
            emotePlaySeq: LQ.seq,
            onReady: () => {
              for (const QQ of FQ.x) TW(QQ, eQ.current[QQ], !1)
            }
          })]
        })]
      })
    }))
  },
  41521: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      CharacterPreview: () => JQ
    });
    var wQ = XQ(61),
      qQ = XQ(2978),
      TQ = XQ(1273),
      zQ = XQ(2678),
      sQ = XQ(34541),
      FQ = XQ(3862),
      PQ = XQ(1145);
    const gQ = .6 * Math.PI,
      JQ = (0, wQ.memo)((0, wQ.forwardRef)((function(QQ, WQ) {
        let {
          onReady: XQ,
          onDrawn: JQ,
          owner: rQ = "other",
          framing: IQ = "player",
          forcedCosmetics: jQ,
          Rs: BQ,
          emotePlaySeq: yQ,
          turntableFromYaw: VQ = null
        } = QQ;
        const DQ = (0, wQ.useRef)(null),
          {
            width: pQ,
            height: GQ
          } = (0, qQ.d)(DQ),
          UQ = (0, wQ.useRef)(null),
          bQ = (0, wQ.useRef)({}),
          vQ = (0, wQ.useRef)({}),
          [dQ, HQ] = (0, wQ.useState)(!1),
          aQ = (0, wQ.useRef)(XQ);
        aQ.current = XQ;
        const lQ = (0, wQ.useRef)(JQ);
        lQ.current = JQ;
        const hQ = (0, wQ.useRef)(null),
          iQ = (0, wQ.useRef)(!1),
          cQ = (0, wQ.useRef)(!1),
          AQ = (0, wQ.useCallback)((() => {
            const QQ = UQ.current;
            if (!QQ || !lQ.current || iQ.current || !cQ.current) return;
            const WQ = {};
            hQ.current = WQ, queueMicrotask((() => {
              if (hQ.current !== WQ) return;
              const XQ = Promise.all(TQ.x.map((WQ => QQ.untilDrawn(WQ)))).catch((QQ => {
                  console.error("Failed to draw the character preview", QQ)
                })),
                wQ = new Promise((QQ => {
                  setTimeout(QQ, 1e4)
                }));
              Promise.race([XQ, wQ]).then((() => {
                var XQ;
                UQ.current !== QQ || hQ.current !== WQ || iQ.current || (iQ.current = !0, null === (XQ = lQ.current) || void 0 === XQ || XQ.call(lQ))
              }))
            }))
          }), []);
        return (0, wQ.useImperativeHandle)(WQ, (() => {
          const QQ = (QQ, WQ) => {
            var XQ;
            (bQ.current[QQ] = WQ, null !== jQ && void 0 !== jQ && jQ[QQ]) || (null === (XQ = UQ.current) || void 0 === XQ || XQ.setCosmetic(QQ, WQ), AQ())
          };
          return {
            updateCosmetic: QQ,
            setAllCosmetics(WQ) {
              for (const wQ of TQ.x) {
                var XQ;
                QQ(wQ, null !== (XQ = WQ[wQ]) && void 0 !== XQ ? XQ : (0, zQ.e)(wQ))
              }
            },
            isReady() {
              var QQ, WQ;
              return null !== (QQ = null === (WQ = UQ.current) || void 0 === WQ ? void 0 : WQ.isReady()) && void 0 !== QQ && QQ
            },
            resetCamera() {
              var QQ;
              null === (QQ = UQ.current) || void 0 === QQ || QQ.resetCamera()
            },
            setOrbit(QQ) {
              var WQ;
              null === (WQ = UQ.current) || void 0 === WQ || WQ.setOrbit(QQ)
            },
            turnCamera(QQ) {
              var WQ;
              const XQ = sQ.c[IQ];
              null === (WQ = UQ.current) || void 0 === WQ || WQ.setOrbit({
                ...XQ,
                yaw: XQ.yaw + QQ
              })
            },
            async ensureReadyForCapture(QQ) {
              var WQ;
              await (null === (WQ = UQ.current) || void 0 === WQ ? void 0 : WQ.untilDrawn(QQ))
            },
            getDevTools() {
              var QQ;
              return null !== (QQ = UQ.current) && void 0 !== QQ && QQ.isReady() ? UQ.current.dev : null
            }
          }
        }), [jQ, IQ, AQ]), (0, wQ.useEffect)((() => {
          const QQ = FQ.e.register(rQ),
            WQ = sQ.h.openCharacter(DQ.current, IQ);
          UQ.current = WQ;
          let XQ = !0;
          return WQ.ready.then((() => {
            XQ && (HQ(!0), aQ.current())
          })).catch((QQ => {
            console.error("Failed to set up the character preview", QQ)
          })), () => {
            XQ = !1, QQ(), WQ.resetCamera(), WQ.close(), UQ.current = null
          }
        }), []), (0, wQ.useEffect)((() => {
          pQ <= 0 || GQ <= 0 || UQ.current.resize(pQ, GQ)
        }), [pQ, GQ]), (0, wQ.useEffect)((() => {
          if (!dQ) return;
          const QQ = vQ.current;
          for (const WQ of TQ.x) {
            const XQ = null === jQ || void 0 === jQ ? void 0 : jQ[WQ],
              wQ = QQ[WQ];
            XQ && XQ !== wQ ? UQ.current.setCosmetic(WQ, XQ) : !XQ && wQ && bQ.current[WQ] && UQ.current.setCosmetic(WQ, bQ.current[WQ])
          }
          vQ.current = {
            ...jQ
          }, cQ.current = !0, AQ()
        }), [jQ, dQ, AQ]), (0, wQ.useEffect)((() => {
          dQ && UQ.current.playEmote(null !== BQ && void 0 !== BQ ? BQ : null)
        }), [BQ, yQ, dQ]), (0, wQ.useEffect)((() => {
          if (!dQ || null === VQ) return;
          const QQ = UQ.current,
            {
              pitch: WQ,
              radius: XQ
            } = sQ.c[IQ];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return QQ.setOrbit({
            yaw: VQ + gQ,
            pitch: WQ,
            radius: XQ
          }), () => {
            QQ.resetCamera()
          };
          const wQ = performance.now();
          let qQ = 0;
          const TQ = zQ => {
            QQ.setOrbit({
              yaw: VQ + (zQ - wQ) / 6e3 * 2 * Math.PI,
              pitch: WQ,
              radius: XQ
            }), qQ = requestAnimationFrame(TQ)
          };
          return qQ = requestAnimationFrame(TQ), () => {
            cancelAnimationFrame(qQ), QQ.resetCamera()
          }
        }), [dQ, VQ]), (0, PQ.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: DQ
        })
      })))
  },
  36684: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(2003),
      qQ = XQ(1548);
    const TQ = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(QQ, WQ) {
        QQ !== this.userContext && this.sendHeld(), this.userContext = QQ;
        for (const [wQ, qQ] of WQ) this.pending.set(wQ, qQ);
        if (null !== this.timer) return;
        const XQ = this.lastSentAt + 1100 - Date.now();
        XQ <= 0 ? this.send(QQ) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), XQ), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(QQ) {
        const WQ = Array.from(this.pending, (QQ => {
          let [WQ, XQ] = QQ;
          return {
            dT: WQ,
            HT: XQ
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), qQ.e.updateCosmetics(QQ, WQ).catch((QQ => {
          console.error("Failed to update cosmetics", QQ)
        }))
      }
    };

    function zQ(QQ, WQ) {
      for (const [XQ, wQ] of WQ) QQ.setPlayerCosmetics(XQ, wQ);
      if (null === wQ.gameBridge.latest("connectedGame").websocketUrl) TQ.save(QQ, WQ);
      else
        for (const [XQ, qQ] of WQ) wQ.gameBridge.send("updateMyCosmetic", {
          dT: XQ,
          HT: qQ
        })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);