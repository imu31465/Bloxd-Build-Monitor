export const id = 216;
export const ids = [216, 291];
export const modules = {
  41187: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      CharacterCustomisationUI: () => wz
    });
    var pD = wD(58),
      sD = wD(2998),
      KD = wD(1127),
      rD = wD(1044),
      LD = wD.n(rD),
      cD = wD(1245),
      gD = wD(605),
      RD = wD(1200),
      AD = wD(2197),
      UD = wD(1570),
      fD = wD(2560);
    const ID = cD.r.filter((DD => !UD.d.includes(DD)));

    function BD(DD, zD) {
      return ID.includes(DD) && "string" === typeof zD && (0, fD.d)(DD, zD)
    }

    function GD(DD) {
      const zD = {};
      for (const wD of ID) {
        const pD = DD[wD];
        void 0 !== pD && BD(wD, pD) && (zD[wD] = pD)
      }
      return zD
    }

    function hD(DD, zD) {
      return Object.entries(DD).every((DD => {
        let [wD, pD] = DD;
        return zD[wD] === pD
      }))
    }
    var nD = wD(2204),
      MD = wD(3083),
      OD = wD(1973),
      JD = wD(1447),
      ED = wD(2246),
      QD = wD(20),
      XD = wD(2700),
      VD = wD(1495),
      PD = wD(1130),
      CD = wD(1847);
    class xD {
      constructor() {
        this.slots = new Map, this.accountId = null
      }
      moveTo(DD) {
        null !== DD && DD !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), this.accountId = DD)
      }
      isFor(DD) {
        return null === this.accountId || this.accountId === DD
      }
      overlay(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return DD.map(((DD, wD) => {
          var pD, sD;
          return null !== (pD = null !== (sD = this.slots.get(wD)) && void 0 !== sD ? sD : zD.get(wD)) && void 0 !== pD ? pD : DD
        }))
      }
    }
    class TD extends XD.d {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new xD;
        super("saved outfits", (async zD => {
          const wD = DD.isFor(zD.whamm),
            pD = new Map(DD.slots),
            sD = await VD.d.getSavedOutfits(zD);
          return wD ? DD.overlay(sD, pD) : sD
        })), this.unsaved = DD, this.started = !1, this.sending = !1
      }
      ensureLoaded() {
        if (this.started) {
          if (!this.getState().failed) return
        } else this.started = !0, this.watchAccount();
        this.refresh()
      }
      save(DD, zD) {
        this.unsaved.moveTo(this.getState().accountId), this.unsaved.slots.set(DD, zD), this.update((wD => wD.map(((wD, pD) => pD === DD ? zD : wD)))), this.sending || this.sendUnsaved()
      }
      async sendUnsaved() {
        for (this.sending = !0; this.unsaved.slots.size > 0;) {
          const zD = new Map(this.unsaved.slots);
          try {
            const DD = await PD.userContextManager.getCurrentUserContext();
            if (this.unsaved.moveTo(DD.whamm), 0 === this.unsaved.slots.size) {
              this.refresh();
              break
            }
            const {
              accountId: zD,
              data: wD
            } = this.getState();
            let pD = wD;
            zD === DD.whamm && null !== pD || (pD = this.unsaved.overlay(await VD.d.getSavedOutfits(DD)), this.refresh()), await VD.d.setSavedOutfits(DD, pD)
          } catch (DD) {
            console.error("Failed to save outfits", DD), [...this.unsaved.slots].every((DD => {
              let [wD, pD] = DD;
              return zD.get(wD) === pD
            })) && CD.d.showMessage({
              translationKey: "homePage:saveOutfitFailed"
            })
          }
          for (const [DD, wD] of zD) this.unsaved.slots.get(DD) === wD && this.unsaved.slots.delete(DD)
        }
        this.sending = !1
      }
    }
    const bD = new TD;
    var jD = wD(351),
      dD = wD(41190),
      SD = wD(1562),
      iD = wD(2305),
      lD = wD(2990),
      WD = wD(2144),
      ND = wD(2600),
      ZD = wD(1057);
    wD(34233), wD(3085);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var yD = wD(2257),
      kD = wD(1366),
      mD = wD(2356),
      eD = wD(1096);

    function oD(DD) {
      let {
        wornOutfit: zD,
        onApply: wD,
        onOverwrite: sD
      } = DD;
      const {
        t: rD
      } = (0, RD.E)(), {
        accountId: cD,
        data: gD
      } = (0, XD.f)(bD, !1), {
        userContext: AD
      } = (0, KD.c)();
      return (0, pD.useEffect)((() => {
        bD.ensureLoaded()
      }), []), null === gD || cD !== AD.whamm ? null : (0, eD.jsxs)("div", {
        className: "CosmeticPackGroup SavedOutfits",
        children: [(0, eD.jsx)("div", {
          className: "CosmeticPackGroupLabel",
          children: (0, eD.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: rD("homePage:myOutfits")
          })
        }), (0, eD.jsx)("div", {
          className: "CharacterPresetsGrid",
          children: gD.map(((DD, pD) => {
            const KD = function(DD) {
              return 0 === Object.keys(DD).length
            }(DD);
            return (0, eD.jsxs)("div", {
              ...(0, JD.ib)(),
              role: KD ? "button" : "link",
              "data-pad-focusable": !0,
              className: LD()("CharacterPresetCard SavedOutfitCard", {
                SavedOutfitCardEmpty: KD,
                CharacterPresetCardActive: !KD && hD(DD, zD)
              }),
              onClick: () => {
                KD ? bD.save(pD, zD) : wD(DD)
              },
              children: [KD && (0, eD.jsxs)(eD.Fragment, {
                children: [(0, eD.jsx)(ZD.e, {
                  name: "plus"
                }), rD("homePage:saveOutfit")]
              }), !KD && (0, eD.jsxs)(eD.Fragment, {
                children: [(0, eD.jsx)("div", {
                  className: "SavedOutfitCardPicture",
                  children: (0, eD.jsx)(mD.c, {
                    cosmetics: DD
                  })
                }), (0, eD.jsx)(JD.Y, {
                  padSecondaryLabelKey: "homePage:saveOutfit",
                  stopPropagation: !0,
                  onClick: () => {
                    hD(zD, DD) || (bD.save(pD, zD), sD(pD, DD))
                  },
                  children: rD("general:save")
                })]
              })]
            }, pD)
          }))
        })]
      })
    }
    var aD = wD(36374),
      uD = wD(2549),
      vD = wD(2556);

    function tD(DD, zD, wD) {
      return null !== DD && !(0, uD.h)(vD.b, zD, wD, DD.collected, DD.ownedPacks)
    }

    function FD(DD) {
      let {
        locked: zD,
        children: wD
      } = DD;
      return zD ? (0, eD.jsx)(YD, {
        children: wD
      }) : wD
    }

    function YD(DD) {
      var zD;
      let {
        children: wD
      } = DD;
      const {
        t: pD
      } = (0, RD.E)(), {
        userContext: sD
      } = (0, KD.c)(), rD = null !== (zD = sD.dailyDrop) && void 0 !== zD && zD.hidden ? pD("dailyDrop:lockedFromHidden") : pD("dailyDrop:lockedFrom");
      return (0, eD.jsx)(kD.f, {
        tooltipInner: (0, eD.jsx)(eD.Fragment, {
          children: rD
        }),
        children: wD
      })
    }

    function HD(DD, zD, wD) {
      return (0, AD.n)(DD, zD).purchasable && !(0, iD.q)(DD, zD, wD)
    }

    function qD(DD, zD) {
      return Object.entries(DD).some((DD => {
        let [wD, pD] = DD;
        return HD(wD, pD, zD)
      }))
    }

    function Dz(DD) {
      var zD;
      let {
        pack: wD,
        ownedPacks: pD,
        showStoreLink: sD = !1,
        children: KD
      } = DD;
      const {
        t: rD
      } = (0, RD.E)(), cD = SD.e[wD], gD = cD.purchasable && !pD.includes(wD) && SD.B.includes(wD), AD = lD.i[wD];
      return (0, eD.jsxs)("div", {
        className: LD()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: gD
        }),
        children: [AD && (0, eD.jsx)(AD, {}), (0, eD.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, eD.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (zD = cD.displayName) && void 0 !== zD ? zD : wD
          }), (gD || sD) && (0, eD.jsxs)(JD.J, {
            onClick: () => {
              gD ? (0, lD.f)(wD) : (0, ED.n)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, eD.jsx)(ZD.e, {
              name: "store"
            }), " ", rD("general:viewInShop")]
          })]
        }), gD && "bee" === wD && (0, eD.jsx)(lD.b, {}), KD]
      })
    }

    function zz(DD) {
      let {
        equippedEmoteIds: zD,
        ownedPacks: wD,
        canBuy: pD,
        onUpdateLoadout: sD,
        onEmoteSelected: KD,
        onEquipPreviewSkin: rD
      } = DD;
      const {
        t: gD
      } = (0, RD.E)(), UD = new Set(zD), fD = new Map, ID = Object.keys(AD.e.emote).sort(((DD, zD) => {
        var wD, pD, sD, KD;
        return (null !== (wD = null === (pD = (0, AD.l)("emote", DD)) || void 0 === pD ? void 0 : pD.clientIdx) && void 0 !== wD ? wD : 0) - (null !== (sD = null === (KD = (0, AD.l)("emote", zD)) || void 0 === KD ? void 0 : KD.clientIdx) && void 0 !== sD ? sD : 0)
      })).filter((DD => {
        const zD = (0, AD.n)("emote", DD),
          sD = (0, iD.q)("emote", DD, wD);
        return !(zD.purchasable && !sD && !pD) && (zD.clientSelectable || sD)
      }));
      for (const LD of ID) {
        const DD = (0, AD.l)("emote", LD).cosmeticPack;
        fD.has(DD) || fD.set(DD, []), fD.get(DD).push(LD)
      }
      const BD = Array.from(fD.keys());
      return (0, eD.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, eD.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, eD.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: gD("emotes:equippedCount", {
              count: zD.length,
              max: cD.j
            })
          }), (0, eD.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: gD("emotes:loadoutHint")
          })]
        }), BD.map((DD => {
          const pD = fD.get(DD);
          return (0, eD.jsx)(Dz, {
            pack: DD,
            ownedPacks: wD,
            children: (0, eD.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: pD.map((DD => {
                var pD;
                const rD = zD.indexOf(DD),
                  RD = -1 !== rD,
                  AD = zD.length >= cD.j,
                  fD = HD("emote", DD, wD),
                  ID = fD || !RD && AD,
                  BD = (0, nD.m)(DD);
                return (0, eD.jsxs)("div", {
                  className: LD()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: RD
                  }),
                  onClick: () => {
                    KD(DD)
                  },
                  children: [(0, eD.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, eD.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${DD}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, eD.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (pD = null === BD || void 0 === BD ? void 0 : BD.displayName) && void 0 !== pD ? pD : DD
                    })]
                  }), (0, eD.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [RD && (0, eD.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: rD + 1
                    }), fD && (0, eD.jsx)(ZD.e, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, eD.jsx)(kD.f, {
                      tooltipInner: (0, eD.jsx)(eD.Fragment, {
                        children: gD(RD ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, eD.jsx)("div", {
                        className: LD()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: ID,
                          EmoteCustomPartToggleEquipped: RD
                        }),
                        onClick: wD => {
                          wD.stopPropagation(), ID || function(DD) {
                            UD.has(DD) ? sD(zD.filter((zD => zD !== DD))) : zD.length >= cD.j || sD([...zD, DD])
                          }(DD)
                        },
                        children: (0, eD.jsx)(ZD.e, {
                          name: RD ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, DD)
              }))
            })
          }, DD)
        }))]
      })
    }
    const wz = (0, pD.memo)((function(DD) {
      let {
        selectedTab: zD
      } = DD;
      const wD = "characters" === zD ? "skin" : zD,
        {
          t: rD
        } = (0, RD.E)(),
        {
          userContext: ID,
          isUserContextUpdating: BD
        } = (0, KD.c)(),
        nD = (0, sD.e)(),
        {
          gameState: XD,
          initSdkSelectorFinished: VD
        } = (0, QD.n)(["gameState", "initSdkSelectorFinished"]),
        [PD, CD] = (0, pD.useState)({}),
        [xD, TD] = (0, pD.useState)({}),
        [lD, kD] = (0, pD.useState)(null),
        {
          previewEmote: mD,
          triggerEmote: uD
        } = (0, MD.c)(),
        vD = (0, pD.useRef)(cD.r.reduce(((DD, zD) => (DD[zD] = (0, fD.c)(zD), DD)), {})),
        YD = (0, pD.useRef)(!1),
        wz = (0, pD.useRef)(null),
        pz = (0, pD.useRef)(null),
        sz = (0, pD.useRef)(null);

      function Kz() {
        null !== pz.current && (clearTimeout(pz.current), pz.current = null);
        const DD = sz.current;
        null !== DD && (sz.current = null, (0, aD.b)(ID, [
          ["emote", DD]
        ]))
      }

      function rz(DD, zD, wD) {
        var pD, sD, KD;
        vD.current = {
          ...vD.current,
          [DD]: zD
        }, nD(), wD && ((0, aD.b)(ID, [
          [DD, zD]
        ]), kD(null));
        const rD = (0, AD.l)(DD, zD);
        if (null !== rD && void 0 !== rD && rD.colourGroup && null !== (pD = SD.e[rD.cosmeticPack].colourGroups) && void 0 !== pD && null !== (sD = pD[rD.colourGroup]) && void 0 !== sD && sD.showSwatchSelector) {
          const wD = (0, AD.i)(zD);
          wD && TD((zD => ({
            ...zD,
            [`${rD.cosmeticPack}_${DD}_${rD.colourGroup}`]: parseInt(wD[1])
          })))
        }
        null !== (KD = wz.current) && void 0 !== KD && KD.isReady() && wz.current.updateCosmetic(DD, zD)
      }

      function Lz(DD) {
        CD((zD => {
          const wD = {
            ...zD
          };
          return delete wD[DD], wD
        }))
      }

      function cz(DD, zD) {
        let {
          undoable: wD
        } = zD;
        Object.keys(PD).length > 0 && CD({});
        const pD = Object.entries(DD).filter((DD => {
          let [zD, wD] = DD;
          return vD.current[zD] !== wD && !HD(zD, wD, gz) && !tD(Rz, zD, wD)
        }));
        wD ? pD.length > 0 && kD({
          kind: "worn",
          outfit: GD(vD.current)
        }) : kD(null);
        for (const [sD, KD] of pD) rz(sD, KD, !1);
        pD.length > 0 && (0, aD.b)(ID, pD)
      }(0, OD.c)("cosmeticsUpdated", (DD => {
        let zD = !1;
        for (const {
            local: wD,
            Pp: pD,
            Cp: sD
          }
          of DD) {
          if (!wD) return;
          zD = !0, YD.current || rz(pD, sD, !1), nD()
        }
        zD && (YD.current = !0)
      })), (0, pD.useEffect)((() => {
        if (!BD) {
          for (const [DD, zD] of Object.entries(ID.getPlayerCosmetics())) rz(DD, zD, !1);
          nD()
        }
      }), [BD]), (0, pD.useEffect)((() => () => {
        Kz()
      }), []);
      const gz = ID.getOwnedCosmeticPacks(),
        Rz = function(DD, zD) {
          return null === DD ? null : {
            collected: new Set(DD.collected),
            ownedPacks: zD
          }
        }(ID.dailyDrop, gz),
        Az = (0, yD.purchasesAllowed)(),
        Uz = Object.keys(AD.e[wD]).filter((DD => {
          const zD = (0, AD.n)(wD, DD),
            pD = (0, iD.q)(wD, DD, gz);
          return !(zD.purchasable && !pD && !Az) && (zD.clientSelectable || pD)
        })).sort(((DD, zD) => {
          var pD, sD, KD, rD;
          return (null !== (pD = null === (sD = (0, AD.l)(wD, DD)) || void 0 === sD ? void 0 : sD.clientIdx) && void 0 !== pD ? pD : 0) - (null !== (KD = null === (rD = (0, AD.l)(wD, zD)) || void 0 === rD ? void 0 : rD.clientIdx) && void 0 !== KD ? KD : 0)
        })),
        fz = new Map;
      for (const pD of Uz) {
        var Iz;
        const DD = null === (Iz = (0, AD.l)(wD, pD)) || void 0 === Iz ? void 0 : Iz.cosmeticPack;
        fz.has(DD) || fz.set(DD, []), fz.get(DD).push(pD)
      }
      const Bz = function(DD, zD) {
          const wD = new Set,
            pD = new Set;
          for (const [sD, KD] of Object.entries(AD.e[DD])) {
            if (void 0 === KD.colourGroup) continue;
            const rD = `${KD.cosmeticPack}_${KD.colourGroup}`;
            (HD(DD, sD, zD) ? pD : wD).add(rD)
          }
          return new Set([...wD].filter((DD => pD.has(DD))))
        }(wD, gz),
        Gz = new Map;
      for (const [pD, sD] of fz) {
        const DD = [],
          zD = new Map;
        for (const pD of sD) {
          var hz, nz;
          const sD = null !== (hz = null === (nz = (0, AD.l)(wD, pD)) || void 0 === nz ? void 0 : nz.colourGroup) && void 0 !== hz ? hz : null;
          zD.has(sD) || (zD.set(sD, []), DD.push(sD)), zD.get(sD).push(pD)
        }
        const KD = DD.map((DD => {
          var sD;
          const KD = zD.get(DD),
            rD = DD ? null === (sD = SD.e[pD].colourGroups) || void 0 === sD ? void 0 : sD[DD] : void 0,
            LD = !0 === (null === rD || void 0 === rD ? void 0 : rD.showSwatchSelector) && !Bz.has(`${pD}_${DD}`);
          if (LD && rD) {
            var cD;
            const zD = null !== (cD = xD[`${pD}_${wD}_${DD}`]) && void 0 !== cD ? cD : (0, SD.m)(rD.colours);
            return {
              groupName: DD,
              showSwatch: LD,
              cosmetics: KD.filter((DD => {
                const wD = (0, AD.i)(DD);
                return !wD || zD.toString() === wD[1].toString()
              }))
            }
          }
          return {
            groupName: DD,
            cosmetics: KD,
            showSwatch: LD
          }
        }));
        Gz.set(pD, KD)
      }
      const Mz = Array.from(fz.keys()),
        Oz = new Map;
      for (const [pD, sD] of Object.entries(UD.b)) {
        const DD = SD.e[sD.cosmeticPack],
          zD = !qD(sD.cosmetics, gz),
          wD = SD.u.some((DD => (0, SD.i)(DD) === pD));
        (DD.clientSelectable || wD || zD) && ((!DD.purchasable || zD || Az) && (Oz.has(sD.cosmeticPack) || Oz.set(sD.cosmeticPack, []), Oz.get(sD.cosmeticPack).push([pD, sD])))
      }
      const Jz = Array.from(Oz.keys());
      return (0, eD.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === wD || "nameColour" === wD) && !ID.playerHasRank("super") && (0, eD.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, eD.jsx)(ZD.e, {
            name: "bolt"
          }), rD("homePage:unlockWithSuperRank"), Az && (0, eD.jsx)(JD.o, {
            onClick: () => {
              (0, ED.n)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: rD("general:getItNow")
          })]
        }), (0, eD.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === zD && (0, eD.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, (0, eD.jsx)(oD, {
              wornOutfit: GD(vD.current),
              onApply: DD => {
                cz(DD, {
                  undoable: !0
                })
              },
              onOverwrite: (DD, zD) => {
                kD({
                  kind: "slot",
                  slot: DD,
                  outfit: zD
                })
              }
            }), Jz.map((DD => {
              const zD = Oz.get(DD);
              return (0, eD.jsx)(Dz, {
                pack: DD,
                ownedPacks: gz,
                showStoreLink: !SD.y.includes(DD) && zD.some((DD => {
                  let [, {
                    cosmetics: zD
                  }] = DD;
                  return qD(zD, gz)
                })),
                children: (0, eD.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: zD.map((DD => {
                    let [zD, {
                      cosmetics: wD
                    }] = DD;
                    const pD = qD(wD, gz),
                      sD = !pD && function(DD, zD) {
                        return Object.entries(zD).some((zD => {
                          let [wD, pD] = zD;
                          return tD(DD, wD, pD)
                        }))
                      }(Rz, wD),
                      KD = pD || sD,
                      rD = hD(wD, PD),
                      cD = !rD && hD(wD, vD.current);
                    return (0, eD.jsx)(FD, {
                      locked: sD,
                      children: (0, eD.jsxs)("div", {
                        "data-pad-focusable": !0,
                        className: LD()("CharacterPresetCard", {
                          CharacterPresetCardActive: cD,
                          CharacterPresetCardTryingOn: rD
                        }),
                        onClick: () => {
                          KD ? function(DD) {
                            hD(DD, PD) ? CD({}) : CD({
                              ...DD
                            })
                          }(wD) : cz(wD, {
                            undoable: !0
                          })
                        },
                        children: [(0, eD.jsx)("div", {
                          className: "CharacterPresetCardPreview",
                          style: {
                            backgroundImage: `url(/textures/charSkins/previews/character_${zD}_preview.png)`
                          }
                        }), KD && (0, eD.jsx)(ZD.e, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      })
                    }, zD)
                  }))
                })
              }, DD)
            }))]
          }), "emote" === zD && (0, eD.jsx)(zz, {
            equippedEmoteIds: (0, fD.g)(vD.current.emote),
            ownedPacks: gz,
            canBuy: Az,
            onUpdateLoadout: DD => {
              const zD = (0, fD.k)(DD);
              var wD;
              vD.current = {
                ...vD.current,
                emote: zD
              }, ID.setPlayerCosmetics("emote", zD), nD(), wD = zD, sz.current = wD, null !== pz.current && clearTimeout(pz.current), pz.current = setTimeout(Kz, 350)
            },
            onEmoteSelected: uD,
            onEquipPreviewSkin: () => {
              ! function(DD, zD) {
                for (const wD of cD.r) "cape" !== wD && "nameColour" !== wD && "emote" !== wD && DD(wD, "skin" === wD ? "skin_preview" : `${wD}_none`, !1);
                zD()
              }(rz, nD)
            }
          }), "characters" !== zD && "emote" !== zD && (0, eD.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Mz.map((DD => {
              const zD = Gz.get(DD);
              return (0, eD.jsx)(Dz, {
                pack: DD,
                ownedPacks: gz,
                children: zD.map((zD => {
                  var pD;
                  let {
                    groupName: sD,
                    cosmetics: KD,
                    showSwatch: rD
                  } = zD;
                  const cD = sD ? null === (pD = SD.e[DD].colourGroups) || void 0 === pD ? void 0 : pD[sD] : void 0,
                    RD = `${DD}_${wD}_${sD}`;
                  return (0, eD.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [rD && cD && (0, eD.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...cD.colours.map(((DD, zD) => ({
                        color: DD,
                        index: zD
                      })))].sort(((DD, zD) => DD.color.order - zD.color.order)).map((zD => {
                        var pD;
                        let {
                          color: KD,
                          index: rD
                        } = zD;
                        return (0, eD.jsx)("div", {
                          className: LD()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (pD = xD[RD]) && void 0 !== pD ? pD : (0, SD.m)(cD.colours)) === rD
                          }),
                          style: {
                            backgroundColor: `rgb(${KD.rbg.join(",")})`
                          },
                          onClick: () => {
                            var zD;
                            TD((DD => ({
                              ...DD,
                              [RD]: rD
                            })));
                            const pD = PD[wD],
                              KD = pD ? (0, AD.l)(wD, pD) : null,
                              LD = (null === KD || void 0 === KD ? void 0 : KD.cosmeticPack) === DD,
                              cD = LD ? pD : vD.current[wD],
                              gD = LD ? KD : (0, AD.l)(wD, cD);
                            if ((null === gD || void 0 === gD ? void 0 : gD.cosmeticPack) !== DD) return;
                            if ((null !== (zD = null === gD || void 0 === gD ? void 0 : gD.colourGroup) && void 0 !== zD ? zD : null) !== sD) return;
                            const UD = (0, AD.i)(cD);
                            if (UD) {
                              const DD = `${wD}_${UD[0]}_${rD}`;
                              HD(wD, DD, gz) || tD(Rz, wD, DD) ? CD((zD => ({
                                ...zD,
                                [wD]: DD
                              }))) : (LD && Lz(wD), rz(wD, DD, !0))
                            }
                          }
                        }, KD.rbg.join())
                      }))
                    }), KD.map((DD => {
                      const zD = DD === vD.current[wD],
                        pD = PD[wD] === DD,
                        sD = HD(wD, DD, gz),
                        KD = !sD && tD(Rz, wD, DD),
                        rD = sD || KD;
                      let cD = !0;
                      return rD || zD || ("cape" !== wD || (0, jD.Nd)(ID.getPlayerRanks(), DD)) && ("nameColour" !== wD || ID.playerHasRank("super")) || (cD = !1), (0, eD.jsx)(FD, {
                        locked: KD,
                        children: (0, eD.jsxs)("div", {
                          className: LD()("CharCustomPartWrapper", {
                            SelectedCharCustomPartWrapper: zD && !pD,
                            TryingOnCharCustomPartWrapper: pD,
                            DisabledCharCustomPartWrapper: !cD,
                            CharCustomPartWrapperProfileEffect: "profileEffect" === wD
                          }),
                          onClick: () => {
                            if (cD)
                              if (rD) CD((zD => {
                                if (zD[wD] === DD) {
                                  const DD = {
                                    ...zD
                                  };
                                  return delete DD[wD], DD
                                }
                                return {
                                  ...zD,
                                  [wD]: DD
                                }
                              }));
                              else {
                                var zD;
                                if (PD[wD] && Lz(wD), DD === vD.current[wD]) return;
                                null !== (zD = wz.current) && void 0 !== zD && zD.isReady() && rz(wD, DD, !0)
                              }
                          },
                          children: ["profileEffect" === wD ? (0, eD.jsx)("div", {
                            className: "CharCustomPart CharCustomProfileEffect",
                            children: (0, eD.jsx)(ND.e, {
                              playerSocialPreview: (0, WD.d)(DD, {
                                name: ID.getPlayerName(),
                                cosmetics: ID.getPlayerCosmetics()
                              }),
                              showLocation: !1,
                              opensProfileCard: !1
                            })
                          }) : (0, eD.jsx)("div", {
                            className: LD()("CharCustomPart", {
                              PixelatedImage: "cape" === wD
                            }),
                            style: (0, AD.l)(wD, DD).previewTex ? {
                              backgroundImage: `url(/textures/charSkins/previews/${(0,AD.l)(wD,DD).previewTex}.png)`
                            } : {
                              backgroundColor: gD.v[DD]
                            }
                          }), rD && (0, eD.jsx)(ZD.e, {
                            name: "lock",
                            className: "LockedCosmeticIcon"
                          })]
                        })
                      }, DD)
                    }))]
                  }, null !== sD && void 0 !== sD ? sD : "ungrouped")
                }))
              }, DD)
            }))]
          }), lD && (0, eD.jsxs)(JD.f, {
            className: "CharCustomisationUndo",
            onClick: () => {
              "worn" === lD.kind ? cz(lD.outfit, {
                undoable: !1
              }) : (bD.save(lD.slot, lD.outfit), kD(null))
            },
            children: [(0, eD.jsx)(ZD.e, {
              name: "rotate-left"
            }), rD("general:undo")]
          }), (0, eD.jsx)(dD.CharacterPreview, {
            ref: wz,
            forcedCosmetics: PD,
            gL: mD.id,
            emotePlaySeq: mD.seq,
            onReady: () => {
              for (const DD of cD.r) rz(DD, vD.current[DD], !1)
            }
          })]
        })]
      })
    }))
  },
  41190: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      CharacterPreview: () => AD
    });
    var pD = wD(58),
      sD = wD(2750),
      KD = wD(1245),
      rD = wD(2560),
      LD = wD(34233),
      cD = wD(3643),
      gD = wD(1096);
    const RD = .6 * Math.PI,
      AD = (0, pD.memo)((0, pD.forwardRef)((function(DD, zD) {
        let {
          onReady: wD,
          onDrawn: AD,
          owner: UD = "other",
          framing: fD = "player",
          forcedCosmetics: ID,
          gL: BD,
          emotePlaySeq: GD,
          turntableFromYaw: hD = null
        } = DD;
        const nD = (0, pD.useRef)(null),
          {
            width: MD,
            height: OD
          } = (0, sD.d)(nD),
          JD = (0, pD.useRef)(null),
          ED = (0, pD.useRef)({}),
          QD = (0, pD.useRef)({}),
          [XD, VD] = (0, pD.useState)(!1),
          PD = (0, pD.useRef)(wD);
        PD.current = wD;
        const CD = (0, pD.useRef)(AD);
        CD.current = AD;
        const xD = (0, pD.useRef)(null),
          TD = (0, pD.useRef)(!1),
          bD = (0, pD.useRef)(!1),
          jD = (0, pD.useCallback)((() => {
            const DD = JD.current;
            if (!DD || !CD.current || TD.current || !bD.current) return;
            const zD = {};
            xD.current = zD, queueMicrotask((() => {
              if (xD.current !== zD) return;
              const wD = Promise.all(KD.r.map((zD => DD.untilDrawn(zD)))).catch((DD => {
                  console.error("Failed to draw the character preview", DD)
                })),
                pD = new Promise((DD => {
                  setTimeout(DD, 1e4)
                }));
              Promise.race([wD, pD]).then((() => {
                var wD;
                JD.current !== DD || xD.current !== zD || TD.current || (TD.current = !0, null === (wD = CD.current) || void 0 === wD || wD.call(CD))
              }))
            }))
          }), []);
        return (0, pD.useImperativeHandle)(zD, (() => {
          const DD = (DD, zD) => {
            var wD;
            (ED.current[DD] = zD, null !== ID && void 0 !== ID && ID[DD]) || (null === (wD = JD.current) || void 0 === wD || wD.setCosmetic(DD, zD), jD())
          };
          return {
            updateCosmetic: DD,
            setAllCosmetics(zD) {
              for (const pD of KD.r) {
                var wD;
                DD(pD, null !== (wD = zD[pD]) && void 0 !== wD ? wD : (0, rD.c)(pD))
              }
            },
            isReady() {
              var DD, zD;
              return null !== (DD = null === (zD = JD.current) || void 0 === zD ? void 0 : zD.isReady()) && void 0 !== DD && DD
            },
            resetCamera() {
              var DD;
              null === (DD = JD.current) || void 0 === DD || DD.resetCamera()
            },
            setOrbit(DD) {
              var zD;
              null === (zD = JD.current) || void 0 === zD || zD.setOrbit(DD)
            },
            async ensureReadyForCapture(DD) {
              var zD;
              await (null === (zD = JD.current) || void 0 === zD ? void 0 : zD.untilDrawn(DD))
            },
            getDevTools() {
              var DD;
              return null !== (DD = JD.current) && void 0 !== DD && DD.isReady() ? JD.current.dev : null
            }
          }
        }), [ID, jD]), (0, pD.useEffect)((() => {
          const DD = cD.c.register(UD),
            zD = LD.e.openCharacter(nD.current, fD);
          JD.current = zD;
          let wD = !0;
          return zD.ready.then((() => {
            wD && (VD(!0), PD.current())
          })).catch((DD => {
            console.error("Failed to set up the character preview", DD)
          })), () => {
            wD = !1, DD(), zD.resetCamera(), zD.close(), JD.current = null
          }
        }), []), (0, pD.useEffect)((() => {
          MD <= 0 || OD <= 0 || JD.current.resize(MD, OD)
        }), [MD, OD]), (0, pD.useEffect)((() => {
          if (!XD) return;
          const DD = QD.current;
          for (const zD of KD.r) {
            const wD = null === ID || void 0 === ID ? void 0 : ID[zD],
              pD = DD[zD];
            wD && wD !== pD ? JD.current.setCosmetic(zD, wD) : !wD && pD && ED.current[zD] && JD.current.setCosmetic(zD, ED.current[zD])
          }
          QD.current = {
            ...ID
          }, bD.current = !0, jD()
        }), [ID, XD, jD]), (0, pD.useEffect)((() => {
          XD && JD.current.playEmote(null !== BD && void 0 !== BD ? BD : null)
        }), [BD, GD, XD]), (0, pD.useEffect)((() => {
          if (!XD || null === hD) return;
          const DD = JD.current,
            {
              pitch: zD,
              radius: wD
            } = LD.b[fD];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return DD.setOrbit({
            yaw: hD + RD,
            pitch: zD,
            radius: wD
          }), () => {
            DD.resetCamera()
          };
          const pD = performance.now();
          let sD = 0;
          const KD = rD => {
            DD.setOrbit({
              yaw: hD + (rD - pD) / 6e3 * 2 * Math.PI,
              pitch: zD,
              radius: wD
            }), sD = requestAnimationFrame(KD)
          };
          return sD = requestAnimationFrame(KD), () => {
            cancelAnimationFrame(sD), DD.resetCamera()
          }
        }), [XD, hD]), (0, gD.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: nD
        })
      })))
  },
  36374: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    var pD = wD(1925),
      sD = wD(1495);
    const KD = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(DD, zD) {
        DD !== this.userContext && this.sendHeld(), this.userContext = DD;
        for (const [pD, sD] of zD) this.pending.set(pD, sD);
        if (null !== this.timer) return;
        const wD = this.lastSentAt + 1100 - Date.now();
        wD <= 0 ? this.send(DD) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), wD), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(DD) {
        const zD = Array.from(this.pending, (DD => {
          let [zD, wD] = DD;
          return {
            Pp: zD,
            Cp: wD
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), sD.d.updateCosmetics(DD, zD).catch((DD => {
          console.error("Failed to update cosmetics", DD)
        }))
      }
    };

    function rD(DD, zD) {
      for (const [wD, pD] of zD) DD.setPlayerCosmetics(wD, pD);
      if (null === pD.gameBridge.latest("connectedGame").websocketUrl) KD.save(DD, zD);
      else
        for (const [wD, sD] of zD) pD.gameBridge.send("updateMyCosmetic", {
          Pp: wD,
          Cp: sD
        })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);