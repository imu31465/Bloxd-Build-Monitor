export const id = 216;
export const ids = [216, 291];
export const modules = {
  41095: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      CharacterCustomisationUI: () => Zz
    });
    var QC = ZC(48),
      wC = ZC(2997),
      bC = ZC(1076),
      nC = ZC(1002),
      fC = ZC.n(nC),
      oC = ZC(1183),
      qC = ZC(583),
      FC = ZC(1143),
      WC = ZC(2166),
      NC = ZC(1501),
      MC = ZC(2534);
    const gC = oC.y.filter((CC => !NC.d.includes(CC)));

    function SC(CC, zC) {
      return gC.includes(CC) && "string" === typeof zC && (0, MC.g)(CC, zC)
    }

    function pC(CC) {
      const zC = {};
      for (const ZC of gC) {
        const QC = CC[ZC];
        void 0 !== QC && SC(ZC, QC) && (zC[ZC] = QC)
      }
      return zC
    }

    function PC(CC, zC) {
      return Object.entries(CC).every((CC => {
        let [ZC, QC] = CC;
        return zC[ZC] === QC
      }))
    }
    var GC = ZC(2173),
      RC = ZC(3088),
      AC = ZC(1877),
      xC = ZC(1388),
      JC = ZC(2206),
      IC = ZC(20),
      iC = ZC(2685),
      vC = ZC(1439),
      eC = ZC(1078),
      hC = ZC(1774);
    class KC {
      constructor() {
        this.slots = new Map, this.accountId = null
      }
      moveTo(CC) {
        null !== CC && CC !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), this.accountId = CC)
      }
      isFor(CC) {
        return null === this.accountId || this.accountId === CC
      }
      overlay(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return CC.map(((CC, ZC) => {
          var QC, wC;
          return null !== (QC = null !== (wC = this.slots.get(ZC)) && void 0 !== wC ? wC : zC.get(ZC)) && void 0 !== QC ? QC : CC
        }))
      }
    }
    class YC extends iC.c {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new KC;
        super("saved outfits", (async zC => {
          const ZC = CC.isFor(zC.whamm),
            QC = new Map(CC.slots),
            wC = await vC.d.getSavedOutfits(zC);
          return ZC ? CC.overlay(wC, QC) : wC
        })), this.unsaved = CC, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(CC, zC) {
        this.unsaved.moveTo(this.getState().accountId), this.unsaved.slots.set(CC, zC), this.update((ZC => ZC.map(((ZC, QC) => QC === CC ? zC : ZC)))), this.sending || this.sendUnsaved()
      }
      async sendUnsaved() {
        for (this.sending = !0; this.unsaved.slots.size > 0;) {
          const zC = new Map(this.unsaved.slots);
          try {
            const CC = await eC.userContextManager.getCurrentUserContext();
            if (this.unsaved.moveTo(CC.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: zC,
              data: ZC
            } = this.getState();
            let QC = ZC;
            zC === CC.whamm && null !== QC || (QC = this.unsaved.overlay(await vC.d.getSavedOutfits(CC)), this.refresh()), await vC.d.setSavedOutfits(CC, QC)
          } catch (CC) {
            console.error("Failed to save outfits", CC), [...this.unsaved.slots].every((CC => {
              let [ZC, QC] = CC;
              return zC.get(ZC) === QC
            })) && hC.d.showMessage({
              translationKey: "homePage:saveOutfitFailed"
            })
          }
          for (const [CC, ZC] of zC) this.unsaved.slots.get(CC) === ZC && this.unsaved.slots.delete(CC)
        }
        this.sending = !1
      }
    }
    const dC = new YC;
    var mC = ZC(326),
      HC = ZC(41104),
      EC = ZC(1493),
      lC = ZC(2268),
      XC = ZC(2991),
      cC = ZC(2086),
      uC = ZC(2575),
      rC = ZC(1013);
    ZC(34185), ZC(3090);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var sC = ZC(2218),
      TC = ZC(1321),
      aC = ZC(2318),
      tC = ZC(1056);

    function DC(CC) {
      let {
        wornOutfit: zC,
        onApply: ZC,
        onOverwrite: wC
      } = CC;
      const {
        t: nC
      } = (0, FC.y)(), {
        accountId: oC,
        data: qC
      } = (0, iC.j)(dC, !1), {
        userContext: WC
      } = (0, bC.e)();
      return (0, QC.useEffect)((() => {
        dC.ensureLoaded()
      }), []), null === qC || oC !== WC.whamm ? null : (0, tC.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, tC.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, tC.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: nC("homePage:myOutfits")
          })
        }), (0, tC.jsx)("div", {
          className: "CharacterPresetsGrid",
          children: qC.map(((CC, QC) => {
            const bC = function(CC) {
              return 0 === Object.keys(CC).length
            }(CC);
            return (0, tC.jsxs)("div", {
              ...(0, xC.U)(),
              role: bC ? "button" : "link",
              "data-pad-focusable": !0,
              className: fC()("CharacterPresetCard SavedOutfitCard", {
                SavedOutfitCardEmpty: bC,
                CharacterPresetCardActive: !bC && PC(CC, zC)
              }),
              onClick: () => {
                bC ? dC.save(QC, zC) : ZC(CC)
              },
              children: [bC && (0, tC.jsxs)(tC.Fragment, {
                children: [(0, tC.jsx)(rC.c, {
                  name: "plus"
                }), nC("homePage:saveOutfit")]
              }), !bC && (0, tC.jsxs)(tC.Fragment, {
                children: [(0, tC.jsx)("div", {
                  className: "SavedOutfitCardPicture",
                  children: (0, tC.jsx)(aC.c, {
                    cosmetics: CC
                  })
                }), (0, tC.jsx)(xC.O, {
                  padSecondaryLabelKey: "homePage:saveOutfit",
                  stopPropagation: !0,
                  onClick: () => {
                    PC(zC, CC) || (dC.save(QC, zC), wC(QC, CC))
                  },
                  children: nC("general:save")
                })]
              })]
            }, QC)
          }))
        })]
      })
    }
    var jC = ZC(36271),
      yC = ZC(2523),
      LC = ZC(2529);

    function UC(CC, zC, ZC) {
      return null !== CC && !(0, yC.g)(LC.b, zC, ZC, CC.collected, CC.ownedPacks)
    }

    function BC(CC) {
      let {
        locked: zC,
        children: ZC
      } = CC;
      return zC ? (0, tC.jsx)(OC, {
        children: ZC
      }) : ZC
    }

    function OC(CC) {
      var zC;
      let {
        children: ZC
      } = CC;
      const {
        t: QC
      } = (0, FC.y)(), {
        userContext: wC
      } = (0, bC.e)(), nC = null !== (zC = wC.dailyDrop) && void 0 !== zC && zC.hidden ? QC("dailyDrop:lockedFromHidden") : QC("dailyDrop:lockedFrom");
      return (0, tC.jsx)(TC.d, {
        tooltipInner: (0, tC.jsx)(tC.Fragment, {
          children: nC
        }),
        children: ZC
      })
    }

    function kC(CC, zC, ZC) {
      return (0, WC.l)(CC, zC).purchasable && !(0, lC.r)(CC, zC, ZC)
    }

    function VC(CC, zC) {
      return Object.entries(CC).some((CC => {
        let [ZC, QC] = CC;
        return kC(ZC, QC, zC)
      }))
    }

    function Cz(CC) {
      var zC;
      let {
        pack: ZC,
        ownedPacks: QC,
        showStoreLink: wC = !1,
        children: bC
      } = CC;
      const {
        t: nC
      } = (0, FC.y)(), oC = EC.d[ZC], qC = oC.purchasable && !QC.includes(ZC) && EC.q.includes(ZC), WC = XC.g[ZC];
      return (0, tC.jsxs)("div", {
        className: fC()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: qC
        }),
        children: [WC && (0, tC.jsx)(WC, {}), (0, tC.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, tC.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (zC = oC.displayName) && void 0 !== zC ? zC : ZC
          }), (qC || wC) && (0, tC.jsxs)(xC.C, {
            onClick: () => {
              qC ? (0, XC.e)(ZC) : (0, JC.n)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, tC.jsx)(rC.c, {
              name: "store"
            }), " ", nC("general:viewInShop")]
          })]
        }), qC && "bee" === ZC && (0, tC.jsx)(XC.c, {}), bC]
      })
    }

    function zz(CC) {
      let {
        equippedEmoteIds: zC,
        ownedPacks: ZC,
        canBuy: QC,
        onUpdateLoadout: wC,
        onEmoteSelected: bC,
        onEquipPreviewSkin: nC
      } = CC;
      const {
        t: qC
      } = (0, FC.y)(), NC = new Set(zC), MC = new Map, gC = Object.keys(WC.f.emote).sort(((CC, zC) => {
        var ZC, QC, wC, bC;
        return (null !== (ZC = null === (QC = (0, WC.j)("emote", CC)) || void 0 === QC ? void 0 : QC.clientIdx) && void 0 !== ZC ? ZC : 0) - (null !== (wC = null === (bC = (0, WC.j)("emote", zC)) || void 0 === bC ? void 0 : bC.clientIdx) && void 0 !== wC ? wC : 0)
      })).filter((CC => {
        const zC = (0, WC.l)("emote", CC),
          wC = (0, lC.r)("emote", CC, ZC);
        return !(zC.purchasable && !wC && !QC) && (zC.clientSelectable || wC)
      }));
      for (const fC of gC) {
        const CC = (0, WC.j)("emote", fC).cosmeticPack;
        MC.has(CC) || MC.set(CC, []), MC.get(CC).push(fC)
      }
      const SC = Array.from(MC.keys());
      return (0, tC.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, tC.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, tC.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: qC("emotes:equippedCount", {
              count: zC.length,
              max: oC.r
            })
          }), (0, tC.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: qC("emotes:loadoutHint")
          })]
        }), SC.map((CC => {
          const QC = MC.get(CC);
          return (0, tC.jsx)(Cz, {
            pack: CC,
            ownedPacks: ZC,
            children: (0, tC.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: QC.map((CC => {
                var QC;
                const nC = zC.indexOf(CC),
                  FC = -1 !== nC,
                  WC = zC.length >= oC.r,
                  MC = kC("emote", CC, ZC),
                  gC = MC || !FC && WC,
                  SC = (0, GC.h)(CC);
                return (0, tC.jsxs)("div", {
                  className: fC()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: FC
                  }),
                  onClick: () => {
                    bC(CC)
                  },
                  children: [(0, tC.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, tC.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${CC}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, tC.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (QC = null === SC || void 0 === SC ? void 0 : SC.displayName) && void 0 !== QC ? QC : CC
                    })]
                  }), (0, tC.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [FC && (0, tC.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: nC + 1
                    }), MC && (0, tC.jsx)(rC.c, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, tC.jsx)(TC.d, {
                      tooltipInner: (0, tC.jsx)(tC.Fragment, {
                        children: qC(FC ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, tC.jsx)("div", {
                        className: fC()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: gC,
                          EmoteCustomPartToggleEquipped: FC
                        }),
                        onClick: ZC => {
                          ZC.stopPropagation(), gC || function(CC) {
                            NC.has(CC) ? wC(zC.filter((zC => zC !== CC))) : zC.length >= oC.r || wC([...zC, CC])
                          }(CC)
                        },
                        children: (0, tC.jsx)(rC.c, {
                          name: FC ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, CC)
              }))
            })
          }, CC)
        }))]
      })
    }
    const Zz = (0, QC.memo)((function(CC) {
      let {
        selectedTab: zC
      } = CC;
      const ZC = "characters" === zC ? "skin" : zC,
        {
          t: nC
        } = (0, FC.y)(),
        {
          userContext: gC,
          isUserContextUpdating: SC
        } = (0, bC.e)(),
        GC = (0, wC.b)(),
        {
          gameState: iC,
          initSdkSelectorFinished: vC
        } = (0, IC.k)(["gameState", "initSdkSelectorFinished"]),
        [eC, hC] = (0, QC.useState)({}),
        [KC, YC] = (0, QC.useState)({}),
        [XC, TC] = (0, QC.useState)(null),
        {
          previewEmote: aC,
          triggerEmote: yC
        } = (0, RC.c)(),
        LC = (0, QC.useRef)(oC.y.reduce(((CC, zC) => (CC[zC] = (0, MC.e)(zC), CC)), {})),
        OC = (0, QC.useRef)(!1),
        Zz = (0, QC.useRef)(null),
        Qz = (0, QC.useRef)(null),
        wz = (0, QC.useRef)(null);

      function bz() {
        null !== Qz.current && (clearTimeout(Qz.current), Qz.current = null);
        const CC = wz.current;
        null !== CC && (wz.current = null, (0, jC.e)(gC, [
          ["emote", CC]
        ]))
      }

      function nz(CC, zC, ZC) {
        var QC, wC, bC;
        LC.current = {
          ...LC.current,
          [CC]: zC
        }, GC(), ZC && ((0, jC.e)(gC, [
          [CC, zC]
        ]), TC(null));
        const nC = (0, WC.j)(CC, zC);
        if (null !== nC && void 0 !== nC && nC.colourGroup && null !== (QC = EC.d[nC.cosmeticPack].colourGroups) && void 0 !== QC && null !== (wC = QC[nC.colourGroup]) && void 0 !== wC && wC.showSwatchSelector) {
          const ZC = (0, WC.h)(zC);
          ZC && YC((zC => ({
            ...zC,
            [`${nC.cosmeticPack}_${CC}_${nC.colourGroup}`]: parseInt(ZC[1])
          })))
        }
        null !== (bC = Zz.current) && void 0 !== bC && bC.isReady() && Zz.current.updateCosmetic(CC, zC)
      }

      function fz(CC) {
        hC((zC => {
          const ZC = {
            ...zC
          };
          return delete ZC[CC], ZC
        }))
      }

      function oz(CC, zC) {
        let {
          undoable: ZC
        } = zC;
        Object.keys(eC).length > 0 && hC({});
        const QC = Object.entries(CC).filter((CC => {
          let [zC, ZC] = CC;
          return LC.current[zC] !== ZC && !kC(zC, ZC, qz) && !UC(Fz, zC, ZC)
        }));
        ZC ? QC.length > 0 && TC({
          kind: "worn",
          outfit: pC(LC.current)
        }) : TC(null);
        for (const [wC, bC] of QC) nz(wC, bC, !1);
        QC.length > 0 && (0, jC.e)(gC, QC)
      }(0, AC.b)("cosmeticsUpdated", (CC => {
        let zC = !1;
        for (const {
            local: ZC,
            JQ: QC,
            IQ: wC
          }
          of CC) {
          if (!ZC) return;
          zC = !0, OC.current || nz(QC, wC, !1), GC()
        }
        zC && (OC.current = !0)
      })), (0, QC.useEffect)((() => {
        if (!SC) {
          for (const [CC, zC] of Object.entries(gC.getPlayerCosmetics())) nz(CC, zC, !1);
          GC()
        }
      }), [SC]), (0, QC.useEffect)((() => () => {
        bz()
      }), []);
      const qz = gC.getOwnedCosmeticPacks(),
        Fz = function(CC, zC) {
          return null === CC ? null : {
            collected: new Set(CC.collected),
            ownedPacks: zC
          }
        }(gC.dailyDrop, qz),
        Wz = (0, sC.purchasesAllowed)(),
        Nz = Object.keys(WC.f[ZC]).filter((CC => {
          const zC = (0, WC.l)(ZC, CC),
            QC = (0, lC.r)(ZC, CC, qz);
          return !(zC.purchasable && !QC && !Wz) && (zC.clientSelectable || QC)
        })).sort(((CC, zC) => {
          var QC, wC, bC, nC;
          return (null !== (QC = null === (wC = (0, WC.j)(ZC, CC)) || void 0 === wC ? void 0 : wC.clientIdx) && void 0 !== QC ? QC : 0) - (null !== (bC = null === (nC = (0, WC.j)(ZC, zC)) || void 0 === nC ? void 0 : nC.clientIdx) && void 0 !== bC ? bC : 0)
        })),
        Mz = new Map;
      for (const QC of Nz) {
        var gz;
        const CC = null === (gz = (0, WC.j)(ZC, QC)) || void 0 === gz ? void 0 : gz.cosmeticPack;
        Mz.has(CC) || Mz.set(CC, []), Mz.get(CC).push(QC)
      }
      const Sz = function(CC, zC) {
          const ZC = new Set,
            QC = new Set;
          for (const [wC, bC] of Object.entries(WC.f[CC])) {
            if (void 0 === bC.colourGroup) continue;
            const nC = `${bC.cosmeticPack}_${bC.colourGroup}`;
            (kC(CC, wC, zC) ? QC : ZC).add(nC)
          }
          return new Set([...ZC].filter((CC => QC.has(CC))))
        }(ZC, qz),
        pz = new Map;
      for (const [QC, wC] of Mz) {
        const CC = [],
          zC = new Map;
        for (const QC of wC) {
          var Pz, Gz;
          const wC = null !== (Pz = null === (Gz = (0, WC.j)(ZC, QC)) || void 0 === Gz ? void 0 : Gz.colourGroup) && void 0 !== Pz ? Pz : null;
          zC.has(wC) || (zC.set(wC, []), CC.push(wC)), zC.get(wC).push(QC)
        }
        const bC = CC.map((CC => {
          var wC;
          const bC = zC.get(CC),
            nC = CC ? null === (wC = EC.d[QC].colourGroups) || void 0 === wC ? void 0 : wC[CC] : void 0,
            fC = !0 === (null === nC || void 0 === nC ? void 0 : nC.showSwatchSelector) && !Sz.has(`${QC}_${CC}`);
          if (fC && nC) {
            var oC;
            const zC = null !== (oC = KC[`${QC}_${ZC}_${CC}`]) && void 0 !== oC ? oC : (0, EC.f)(nC.colours);
            return {
              groupName: CC,
              showSwatch: fC,
              cosmetics: bC.filter((CC => {
                const ZC = (0, WC.h)(CC);
                return !ZC || zC.toString() === ZC[1].toString()
              }))
            }
          }
          return {
            groupName: CC,
            cosmetics: bC,
            showSwatch: fC
          }
        }));
        pz.set(QC, bC)
      }
      const Rz = Array.from(Mz.keys()),
        Az = new Map;
      for (const [QC, wC] of Object.entries(NC.b)) {
        const CC = EC.d[wC.cosmeticPack],
          zC = !VC(wC.cosmetics, qz),
          ZC = EC.j.some((CC => (0, EC.e)(CC) === QC));
        (CC.clientSelectable || ZC || zC) && ((!CC.purchasable || zC || Wz) && (Az.has(wC.cosmeticPack) || Az.set(wC.cosmeticPack, []), Az.get(wC.cosmeticPack).push([QC, wC])))
      }
      const xz = Array.from(Az.keys());
      return (0, tC.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === ZC || "nameColour" === ZC) && !gC.playerHasRank("super") && (0, tC.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, tC.jsx)(rC.c, {
            name: "bolt"
          }), nC("homePage:unlockWithSuperRank"), Wz && (0, tC.jsx)(xC.o, {
            onClick: () => {
              (0, JC.n)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: nC("general:getItNow")
          })]
        }), (0, tC.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === zC && (0, tC.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, tC.jsx)(DC, {
              wornOutfit: pC(LC.current),
              onApply: CC => {
                oz(CC, {
                  undoable: !0
                })
              },
              onOverwrite: (CC, zC) => {
                TC({
                  kind: "slot",
                  slot: CC,
                  outfit: zC
                })
              }
            }), xz.map((CC => {
              const zC = Az.get(CC);
              return (0, tC.jsx)(Cz, {
                pack: CC,
                ownedPacks: qz,
                showStoreLink: !EC.m.includes(CC) && zC.some((CC => {
                  let [, {
                    cosmetics: zC
                  }] = CC;
                  return VC(zC, qz)
                })),
                children: (0, tC.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: zC.map((CC => {
                    let [zC, {
                      cosmetics: ZC
                    }] = CC;
                    const QC = VC(ZC, qz),
                      wC = !QC && function(CC, zC) {
                        return Object.entries(zC).some((zC => {
                          let [ZC, QC] = zC;
                          return UC(CC, ZC, QC)
                        }))
                      }(Fz, ZC),
                      bC = QC || wC,
                      nC = PC(ZC, eC),
                      oC = !nC && PC(ZC, LC.current);
                    return (0, tC.jsx)(BC, {
                      locked: wC,
                      children: (0, tC.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: fC()("CharacterPresetCard", {
                          CharacterPresetCardActive: oC,
                          CharacterPresetCardTryingOn: nC
                        }),
                        onClick: () => {
                          bC ? function(CC) {
                            PC(CC, eC) ? hC({}) : hC({
                              ...CC
                            })
                          }(ZC) : oz(ZC, {
                            undoable: !0
                          })
                        },
                        children: [(0, tC.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(/textures/charSkins/previews/character_${zC}_preview.png)`
                          }
                        }), bC && (0, tC.jsx)(rC.c, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, zC)
                  }))
                })
              }, CC)
            }))]
          }), "emote" === zC && (0, tC.jsx)(zz, {
            equippedEmoteIds: (0, MC.h)(LC.current.emote),
            ownedPacks: qz,
            canBuy: Wz,
            onUpdateLoadout: CC => {
              const zC = (0, MC.l)(CC);
              var ZC;
              LC.current = {
                ...LC.current,
                emote: zC
              }, gC.setPlayerCosmetics("emote", zC), GC(), ZC = zC, wz.current = ZC, null !== Qz.current && clearTimeout(Qz.current), Qz.current = setTimeout(bz, 350)
            },
            onEmoteSelected: yC,
            onEquipPreviewSkin: () => {
              ! function(CC, zC) {
                for (const ZC of oC.y) "cape" !== ZC && "nameColour" !== ZC && "emote" !== ZC && CC(ZC, "skin" === ZC ? "skin_preview" : `${ZC}_none`, !1);
                zC()
              }(nz, GC)
            }
          }), "characters" !== zC && "emote" !== zC && (0, tC.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Rz.map((CC => {
              const zC = pz.get(CC);
              return (0, tC.jsx)(Cz, {
                pack: CC,
                ownedPacks: qz,
                children: zC.map((zC => {
                  var QC;
                  let {
                    groupName: wC,
                    cosmetics: bC,
                    showSwatch: nC
                  } = zC;
                  const oC = wC ? null === (QC = EC.d[CC].colourGroups) || void 0 === QC ? void 0 : QC[wC] : void 0,
                    FC = `${CC}_${ZC}_${wC}`;
                  return (0, tC.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [nC && oC && (0, tC.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...oC.colours.map(((CC, zC) => ({
                        color: CC,
                        index: zC
                      })))].sort(((CC, zC) => CC.color.order - zC.color.order)).map((zC => {
                        var QC;
                        let {
                          color: bC,
                          index: nC
                        } = zC;
                        return (0, tC.jsx)("div", {
                          className: fC()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (QC = KC[FC]) && void 0 !== QC ? QC : (0, EC.f)(oC.colours)) === nC
                          }),
                          style: {
                            backgroundColor: `rgb(${bC.rbg.join(",")})`
                          },
                          onClick: () => {
                            var zC;
                            YC((CC => ({
                              ...CC,
                              [FC]: nC
                            })));
                            const QC = eC[ZC],
                              bC = QC ? (0, WC.j)(ZC, QC) : null,
                              fC = (null === bC || void 0 === bC ? void 0 : bC.cosmeticPack) === CC,
                              oC = fC ? QC : LC.current[ZC],
                              qC = fC ? bC : (0, WC.j)(ZC, oC);
                            if ((null === qC || void 0 === qC ? void 0 : qC.cosmeticPack) !== CC) return;
                            if ((null !== (zC = null === qC || void 0 === qC ? void 0 : qC.colourGroup) && void 0 !== zC ? zC : null) !== wC) return;
                            const NC = (0, WC.h)(oC);
                            if (NC) {
                              const CC = `${ZC}_${NC[0]}_${nC}`;
                              kC(ZC, CC, qz) || UC(Fz, ZC, CC) ? hC((zC => ({
                                ...zC,
                                [ZC]: CC
                              }))) : (fC && fz(ZC), nz(ZC, CC, !0))
                            }
                          }
                        }, bC.rbg.join())
                      }))
                    }), bC.map((CC => {
                      const zC = CC === LC.current[ZC],
                        QC = eC[ZC] === CC,
                        wC = kC(ZC, CC, qz),
                        bC = !wC && UC(Fz, ZC, CC),
                        nC = wC || bC;
                      let oC = !0;
                      return nC || zC || ("cape" !== ZC || (0, mC.xd)(gC.getPlayerRanks(), CC)) && ("nameColour" !== ZC || gC.playerHasRank("super")) || (oC = !1), (0, tC.jsx)(BC, {
                        locked: bC,
                        children: (0, tC.jsxs)("div", {
                          className: fC()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: zC && !QC,
                            TryingOnCharCustomPartWrapper: QC,
                            DisabledCharCustomPartWrapper: !oC,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === ZC
                          }),
                          onClick: () => {
                            if (oC)
                              if (nC) hC((zC => {
                                if (zC[ZC] === CC) {
                                  const CC = {
                                    ...zC
                                  };
                                  return delete CC[ZC], CC
                                }
                                return {
                                  ...zC,
                                  [ZC]: CC
                                }
                              }));
                              else {
                                var zC;
                                if (eC[ZC] && fz(ZC), CC === LC.current[ZC]) return;
                                null !== (zC = Zz.current) && void 0 !== zC && zC.isReady() && nz(ZC, CC, !0)
                              }
                          },
                          children: ["profileEffect" === ZC ? (0, tC.jsx)("div", {
                            className: "CharCustomPart CharCustomProfileEffect",
                            children: (0, tC.jsx)(uC.f, {
                              playerSocialPreview: (0, cC.c)(CC, {
                                name: gC.getPlayerName(),
                                cosmetics: gC.getPlayerCosmetics()
                              }),
                              showLocation: !1,
                              opensProfileCard: !1
                            })
                          }) : (0, tC.jsx)("div", {
                            className: fC()("CharCustomPart", {
                              PixelatedImage: "cape" === ZC
                            }),
                            style: (0, WC.j)(ZC, CC).previewTex ? {
                              backgroundImage: `url(/textures/charSkins/previews/${(0,WC.j)(ZC,CC).previewTex}.png)`
                            } : {
                              backgroundColor: qC.x[CC]
                            }
                          }), nC && (0, tC.jsx)(rC.c, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, CC)
                    }))]
                  }, null !== wC && void 0 !== wC ? wC : "ungrouped")
                }))
              }, CC)
            }))]
          }), XC && (0, tC.jsxs)(xC.g, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === XC.kind ? oz(XC.outfit, {
                undoable: !1
              }) : (dC.save(XC.slot, XC.outfit), TC(null))
            },
            children: [(0, tC.jsx)(rC.c, {
              name: "rotate-left"
            }), nC("general:undo")]
          }), (0, tC.jsx)(HC.CharacterPreview, {
            ref: Zz,
            forcedCosmetics: eC,
            Bn: aC.id,
            emotePlaySeq: aC.seq,
            onReady: () => {
              for (const CC of oC.y) nz(CC, LC.current[CC], !1)
            }
          })]
        })]
      })
    }))
  },
  41104: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      CharacterPreview: () => WC
    });
    var QC = ZC(48),
      wC = ZC(2734),
      bC = ZC(1183),
      nC = ZC(2534),
      fC = ZC(34185),
      oC = ZC(3569),
      qC = ZC(1056);
    const FC = .6 * Math.PI,
      WC = (0, QC.memo)((0, QC.forwardRef)((function(CC, zC) {
        let {
          onReady: ZC,
          onDrawn: WC,
          owner: NC = "other",
          framing: MC = "player",
          forcedCosmetics: gC,
          Bn: SC,
          emotePlaySeq: pC,
          turntableFromYaw: PC = null
        } = CC;
        const GC = (0, QC.useRef)(null),
          {
            width: RC,
            height: AC
          } = (0, wC.e)(GC),
          xC = (0, QC.useRef)(null),
          JC = (0, QC.useRef)({}),
          IC = (0, QC.useRef)({}),
          [iC, vC] = (0, QC.useState)(!1),
          eC = (0, QC.useRef)(ZC);
        eC.current = ZC;
        const hC = (0, QC.useRef)(WC);
        hC.current = WC;
        const KC = (0, QC.useRef)(null),
          YC = (0, QC.useRef)(!1),
          dC = (0, QC.useRef)(!1),
          mC = (0, QC.useCallback)((() => {
            const CC = xC.current;
            if (!CC || !hC.current || YC.current || !dC.current) return;
            const zC = {};
            KC.current = zC, queueMicrotask((() => {
              if (KC.current !== zC) return;
              const ZC = Promise.all(bC.y.map((zC => CC.untilDrawn(zC)))).catch((CC => {
                  console.error("Failed to draw the character preview", CC)
                })),
                QC = new Promise((CC => {
                  setTimeout(CC, 1e4)
                }));
              Promise.race([ZC, QC]).then((() => {
                var ZC;
                xC.current !== CC || KC.current !== zC || YC.current || (YC.current = !0, null === (ZC = hC.current) || void 0 === ZC || ZC.call(hC))
              }))
            }))
          }), []);
        return (0, QC.useImperativeHandle)(zC, (() => {
          const CC = (CC, zC) => {
            var ZC;
            (JC.current[CC] = zC, null !== gC && void 0 !== gC && gC[CC]) || (null === (ZC = xC.current) || void 0 === ZC || ZC.setCosmetic(CC, zC), mC())
          };
          return {
            updateCosmetic: CC,
            setAllCosmetics(zC) {
              for (const QC of bC.y) {
                var ZC;
                CC(QC, null !== (ZC = zC[QC]) && void 0 !== ZC ? ZC : (0, nC.e)(QC))
              }
            },
            isReady() {
              var CC, zC;
              return null !== (CC = null === (zC = xC.current) || void 0 === zC ? void 0 : zC.isReady()) && void 0 !== CC && CC
            },
            resetCamera() {
              var CC;
              null === (CC = xC.current) || void 0 === CC || CC.resetCamera()
            },
            setOrbit(CC) {
              var zC;
              null === (zC = xC.current) || void 0 === zC || zC.setOrbit(CC)
            },
            async ensureReadyForCapture(CC) {
              var zC;
              await (null === (zC = xC.current) || void 0 === zC ? void 0 : zC.untilDrawn(CC))
            },
            getDevTools() {
              var CC;
              return null !== (CC = xC.current) && void 0 !== CC && CC.isReady() ? xC.current.dev : null
            }
          }
        }), [gC, mC]), (0, QC.useEffect)((() => {
          const CC = oC.c.register(NC),
            zC = fC.k.openCharacter(GC.current, MC);
          xC.current = zC;
          let ZC = !0;
          return zC.ready.then((() => {
            ZC && (vC(!0), eC.current())
          })).catch((CC => {
            console.error("Failed to set up the character preview", CC)
          })), () => {
            ZC = !1, CC(), zC.resetCamera(), zC.close(), xC.current = null
          }
        }), []), (0, QC.useEffect)((() => {
          RC <= 0 || AC <= 0 || xC.current.resize(RC, AC)
        }), [RC, AC]), (0, QC.useEffect)((() => {
          if (!iC) return;
          const CC = IC.current;
          for (const zC of bC.y) {
            const ZC = null === gC || void 0 === gC ? void 0 : gC[zC],
              QC = CC[zC];
            ZC && ZC !== QC ? xC.current.setCosmetic(zC, ZC) : !ZC && QC && JC.current[zC] && xC.current.setCosmetic(zC, JC.current[zC])
          }
          IC.current = {
            ...gC
          }, dC.current = !0, mC()
        }), [gC, iC, mC]), (0, QC.useEffect)((() => {
          iC && xC.current.playEmote(null !== SC && void 0 !== SC ? SC : null)
        }), [SC, pC, iC]), (0, QC.useEffect)((() => {
          if (!iC || null === PC) return;
          const CC = xC.current,
            {
              pitch: zC,
              radius: ZC
            } = fC.c[MC];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return CC.setOrbit({
            yaw: PC + FC,
            pitch: zC,
            radius: ZC
          }), () => {
            CC.resetCamera()
          };
          const QC = performance.now();
          let wC = 0;
          const bC = nC => {
            CC.setOrbit({
              yaw: PC + (nC - QC) / 6e3 * 2 * Math.PI,
              pitch: zC,
              radius: ZC
            }), wC = requestAnimationFrame(bC)
          };
          return wC = requestAnimationFrame(bC), () => {
            cancelAnimationFrame(wC), CC.resetCamera()
          }
        }), [iC, PC]), (0, qC.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: GC
        })
      })))
  },
  36271: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC
    });
    var QC = ZC(1840),
      wC = ZC(1439);
    const bC = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(CC, zC) {
        CC !== this.userContext && this.sendHeld(), this.userContext = CC;
        for (const [QC, wC] of zC) this.pending.set(QC, wC);
        if (null !== this.timer) return;
        const ZC = this.lastSentAt + 1100 - Date.now();
        ZC <= 0 ? this.send(CC) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), ZC), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(CC) {
        const zC = Array.from(this.pending, (CC => {
          let [zC, ZC] = CC;
          return {
            JQ: zC,
            IQ: ZC
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), wC.d.updateCosmetics(CC, zC).catch((CC => {
          console.error("Failed to update cosmetics", CC)
        }))
      }
    };

    function nC(CC, zC) {
      for (const [ZC, QC] of zC) CC.setPlayerCosmetics(ZC, QC);
      if (null === QC.gameBridge.latest("connectedGame").websocketUrl) bC.save(CC, zC);
      else
        for (const [ZC, wC] of zC) QC.gameBridge.send("updateMyCosmetic", {
          JQ: ZC,
          IQ: wC
        })
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);