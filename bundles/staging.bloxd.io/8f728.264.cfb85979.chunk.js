export const id = 264;
export const ids = [264, 265];
export const modules = {
  39146: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      CharacterCustomisationUI: () => Nc
    });
    var Vc = nc(73),
      Ic = nc(2258),
      rB = nc(985),
      uc = nc(1566),
      sc = nc(912),
      Mc = nc.n(sc),
      Pc = nc(1108),
      qB = nc(550),
      Oc = nc(1051),
      Tc = nc(1819),
      fc = nc(2283),
      mB = nc(7729),
      ec = nc(1826),
      tB = nc(2296),
      Sc = nc(1609),
      yB = nc(1255),
      zB = nc(1862),
      pc = nc(27),
      hc = nc(1314),
      aB = nc(302),
      lc = nc(39152),
      Yc = nc(1386),
      Lc = nc(2254),
      gB = nc(1762),
      Uc = nc(2020),
      bB = nc(926);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var Zc = nc(1495),
      Qc = nc(1205),
      Cc = nc(957);

    function vB(cB) {
      var Bc;
      let {
        pack: nc,
        ownedPacks: Vc,
        children: Ic
      } = cB;
      const {
        t: rB
      } = (0, Oc.x)(), uc = Yc.d[nc], sc = uc.purchasable, Pc = Vc.includes(nc), qB = sc && !Pc, Tc = Lc.k[nc];
      return (0, Cc.jsxs)("div", {
        className: Mc()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: qB
        }),
        children: [Tc && (0, Cc.jsx)(Tc, {}), (0, Cc.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, Cc.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (Bc = uc.displayName) && void 0 !== Bc ? Bc : nc
          }), qB && (0, Cc.jsxs)(yB.F, {
            onClick: () => {
              (0, Lc.g)(nc)
            },
            children: [(0, Cc.jsx)(bB.e, {
              name: "store"
            }), " ", rB("general:viewInShop")]
          })]
        }), qB && "bee" === nc && (0, Cc.jsx)(Lc.c, {}), Ic]
      })
    }

    function Dc(cB) {
      let {
        equippedEmoteIds: Bc,
        ownedPacks: nc,
        xsollaSupported: Vc,
        onUpdateLoadout: Ic,
        onEmoteSelected: rB,
        onEquipPreviewSkin: uc
      } = cB;
      const {
        t: sc
      } = (0, Oc.x)(), qB = new Set(Bc), fc = new Map, mB = Object.keys(Tc.e.emote).sort(((cB, Bc) => {
        var nc, Vc, Ic, rB;
        return (null !== (nc = null === (Vc = (0, Tc.k)("emote", cB)) || void 0 === Vc ? void 0 : Vc.clientIdx) && void 0 !== nc ? nc : 0) - (null !== (Ic = null === (rB = (0, Tc.k)("emote", Bc)) || void 0 === rB ? void 0 : rB.clientIdx) && void 0 !== Ic ? Ic : 0)
      })).filter((cB => {
        const Bc = (0, Tc.o)("emote", cB),
          Ic = (0, Tc.k)("emote", cB).cosmeticPack,
          rB = nc.includes(Ic);
        return !(Bc.purchasable && !rB && !Vc) && (Bc.clientSelectable || rB)
      }));
      for (const Mc of mB) {
        const cB = (0, Tc.k)("emote", Mc).cosmeticPack;
        fc.has(cB) || fc.set(cB, []), fc.get(cB).push(Mc)
      }
      const tB = Array.from(fc.keys());
      return (0, Cc.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, Cc.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, Cc.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: sc("emotes:equippedCount", {
              count: Bc.length,
              max: Pc.m
            })
          }), (0, Cc.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: sc("emotes:loadoutHint")
          })]
        }), tB.map((cB => {
          const Vc = fc.get(cB);
          return (0, Cc.jsx)(vB, {
            pack: cB,
            ownedPacks: nc,
            children: (0, Cc.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: Vc.map((Vc => {
                var uc;
                const Oc = Bc.indexOf(Vc),
                  fc = -1 !== Oc,
                  mB = Bc.length >= Pc.m,
                  tB = (0, Tc.o)("emote", Vc).purchasable && !nc.includes(cB),
                  Sc = tB || !fc && mB,
                  yB = (0, ec.j)(Vc);
                return (0, Cc.jsxs)("div", {
                  className: Mc()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: fc
                  }),
                  onClick: () => {
                    rB(Vc)
                  },
                  children: [(0, Cc.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, Cc.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${Vc}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, Cc.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (uc = null === yB || void 0 === yB ? void 0 : yB.displayName) && void 0 !== uc ? uc : Vc
                    })]
                  }), (0, Cc.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [fc && (0, Cc.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: Oc + 1
                    }), tB && (0, Cc.jsx)(bB.e, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, Cc.jsx)(Qc.d, {
                      tooltipInner: (0, Cc.jsx)(Cc.Fragment, {
                        children: sc(fc ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, Cc.jsx)("div", {
                        className: Mc()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: Sc,
                          EmoteCustomPartToggleEquipped: fc
                        }),
                        onClick: cB => {
                          cB.stopPropagation(), Sc || function(cB) {
                            qB.has(cB) ? Ic(Bc.filter((Bc => Bc !== cB))) : Bc.length >= Pc.m || Ic([...Bc, cB])
                          }(Vc)
                        },
                        children: (0, Cc.jsx)(bB.e, {
                          name: fc ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, Vc)
              }))
            })
          }, cB)
        }))]
      })
    }
    const Nc = (0, Vc.memo)((function(cB) {
      let {
        selectedTab: Bc
      } = cB;
      const nc = "characters" === Bc ? "skin" : Bc,
        {
          t: sc
        } = (0, Oc.x)(),
        {
          userContext: ec,
          isUserContextUpdating: Lc
        } = (0, rB.c)(),
        Qc = (0, Ic.e)(),
        {
          gameState: Nc,
          initSdkSelectorFinished: Ec
        } = (0, pc.j)(["gameState", "initSdkSelectorFinished"]),
        [oc, Wc] = (0, Vc.useState)({}),
        [wc, kB] = (0, Vc.useState)({}),
        {
          previewEmote: Xc,
          triggerEmote: Hc
        } = (0, tB.e)(),
        Fc = (0, Vc.useRef)(Pc.v.reduce(((cB, Bc) => (cB[Bc] = (0, mB.c)(Bc), cB)), {})),
        Jc = (0, Vc.useRef)(!1),
        jB = (0, Vc.useRef)(null),
        Rc = (0, Vc.useRef)(null),
        iB = (0, Vc.useRef)(null);

      function Kc() {
        null !== Rc.current && (clearTimeout(Rc.current), Rc.current = null);
        const cB = iB.current;
        if (null === cB) return;
        iB.current = null;
        const Bc = {
          RZ: "emote",
          cC: cB
        };
        null !== uc.gameBridge.latest("connectedGame").websocketUrl ? uc.gameBridge.send("updateMyCosmetic", Bc) : hc.e.updateCosmetics(ec, [Bc]).catch((cB => {
          console.error("Failed to update emote loadout", cB)
        }))
      }

      function xB(cB, Bc, nc) {
        var Vc, Ic, rB;
        if (Fc.current = {
            ...Fc.current,
            [cB]: Bc
          }, Qc(), nc) {
          const nc = {
            RZ: cB,
            cC: Bc
          };
          null !== uc.gameBridge.latest("connectedGame").websocketUrl ? uc.gameBridge.send("updateMyCosmetic", nc) : hc.e.updateCosmetics(ec, [nc]).catch((cB => {
            console.error("Failed to update cosmetic", cB)
          })), ec.setPlayerCosmetics(cB, Bc)
        }
        const sc = (0, Tc.k)(cB, Bc);
        if (null !== sc && void 0 !== sc && sc.colourGroup && null !== (Vc = Yc.d[sc.cosmeticPack].colourGroups) && void 0 !== Vc && null !== (Ic = Vc[sc.colourGroup]) && void 0 !== Ic && Ic.showSwatchSelector) {
          const nc = (0, Tc.i)(Bc);
          nc && kB((Bc => ({
            ...Bc,
            [`${sc.cosmeticPack}_${cB}_${sc.colourGroup}`]: parseInt(nc[1])
          })))
        }
        null !== (rB = jB.current) && void 0 !== rB && rB.isReady() && jB.current.updateCosmetic(cB, Bc)
      }

      function dc(cB) {
        return Object.entries(cB).every((cB => {
          let [Bc, nc] = cB;
          return oc[Bc] === nc
        }))
      }(0, Sc.d)("cosmeticsUpdated", (cB => {
        let Bc = !1;
        for (const {
            local: nc,
            RZ: Vc,
            cC: Ic
          }
          of cB) {
          if (!nc) return;
          Bc = !0, Jc.current || xB(Vc, Ic, !1), Qc()
        }
        Bc && (Jc.current = !0)
      })), (0, Vc.useEffect)((() => {
        if (!Lc) {
          for (const [cB, Bc] of Object.entries(ec.getPlayerCosmetics())) xB(cB, Bc, !1);
          Qc()
        }
      }), [Lc]), (0, Vc.useEffect)((() => () => {
        Kc()
      }), []);
      const Ac = ec.getOwnedCosmeticPacks(),
        Gc = (0, Zc.siteSupportsPurchases)(),
        cn = Object.keys(Tc.e[nc]).filter((cB => {
          const Bc = (0, Tc.o)(nc, cB),
            Vc = (0, Tc.k)(nc, cB).cosmeticPack,
            Ic = Ac.includes(Vc);
          return !(Bc.purchasable && !Ic && !Gc) && (Bc.clientSelectable || Ic)
        })).sort(((cB, Bc) => {
          var Vc, Ic, rB, uc;
          return (null !== (Vc = null === (Ic = (0, Tc.k)(nc, cB)) || void 0 === Ic ? void 0 : Ic.clientIdx) && void 0 !== Vc ? Vc : 0) - (null !== (rB = null === (uc = (0, Tc.k)(nc, Bc)) || void 0 === uc ? void 0 : uc.clientIdx) && void 0 !== rB ? rB : 0)
        })),
        BB = new Map;
      for (const Vc of cn) {
        var nB;
        const cB = null === (nB = (0, Tc.k)(nc, Vc)) || void 0 === nB ? void 0 : nB.cosmeticPack;
        BB.has(cB) || BB.set(cB, []), BB.get(cB).push(Vc)
      }
      const VB = new Map;
      for (const [Vc, Ic] of BB) {
        const cB = [],
          Bc = new Map;
        for (const Vc of Ic) {
          var IB, rn;
          const Ic = null !== (IB = null === (rn = (0, Tc.k)(nc, Vc)) || void 0 === rn ? void 0 : rn.colourGroup) && void 0 !== IB ? IB : null;
          Bc.has(Ic) || (Bc.set(Ic, []), cB.push(Ic)), Bc.get(Ic).push(Vc)
        }
        const rB = cB.map((cB => {
          var Ic;
          const rB = Bc.get(cB),
            uc = cB ? null === (Ic = Yc.d[Vc].colourGroups) || void 0 === Ic ? void 0 : Ic[cB] : void 0;
          if ((null === uc || void 0 === uc ? void 0 : uc.showSwatchSelector) && uc) {
            var sc;
            const Bc = null !== (sc = wc[`${Vc}_${nc}_${cB}`]) && void 0 !== sc ? sc : (0, Yc.h)(uc.colours);
            return {
              groupName: cB,
              cosmetics: rB.filter((cB => {
                const nc = (0, Tc.i)(cB);
                return !nc || Bc.toString() === nc[1].toString()
              }))
            }
          }
          return {
            groupName: cB,
            cosmetics: rB
          }
        }));
        VB.set(Vc, rB)
      }
      const uB = Array.from(BB.keys()),
        sB = new Map;
      for (const [Vc, Ic] of Object.entries(fc.b)) {
        const cB = Yc.d[Ic.cosmeticPack],
          Bc = Ac.includes(Ic.cosmeticPack);
        (cB.clientSelectable || Bc) && ((!cB.purchasable || Bc || Gc) && (sB.has(Ic.cosmeticPack) || sB.set(Ic.cosmeticPack, []), sB.get(Ic.cosmeticPack).push([Vc, Ic])))
      }
      const MB = Array.from(sB.keys());
      return (0, Cc.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === nc || "nameColour" === nc) && !ec.playerHasRank("super") && (0, Cc.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, Cc.jsx)(bB.e, {
            name: "bolt"
          }), sc("homePage:unlockWithSuperRank"), Gc && (0, Cc.jsx)(yB.n, {
            onClick: () => {
              (0, zB.i)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: sc("general:getItNow")
          })]
        }), (0, Cc.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === Bc && (0, Cc.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, MB.map((cB => {
              const Bc = sB.get(cB),
                nc = Yc.d[cB].purchasable && !Ac.includes(cB);
              return (0, Cc.jsx)(vB, {
                pack: cB,
                ownedPacks: Ac,
                children: (0, Cc.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: Bc.map((cB => {
                    let [Bc, {
                      cosmetics: Vc
                    }] = cB;
                    const Ic = dc(Vc),
                      rB = !Ic && Object.entries(Vc).every((cB => {
                        let [Bc, nc] = cB;
                        return Fc.current[Bc] === nc
                      }));
                    return (0, Cc.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: Mc()("CharacterPresetCard", {
                        CharacterPresetCardActive: rB,
                        CharacterPresetCardTryingOn: Ic
                      }),
                      onClick: () => {
                        if (nc) ! function(cB) {
                          dc(cB) ? Wc({}) : Wc({
                            ...cB
                          })
                        }(Vc);
                        else {
                          Object.keys(oc).length > 0 && Wc({});
                          const cB = Object.entries(Vc);
                          for (const [Bc, nc] of cB) xB(Bc, nc, !1), ec.setPlayerCosmetics(Bc, nc);
                          if (null !== uc.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [Bc, nc] of cB) uc.gameBridge.send("updateMyCosmetic", {
                              RZ: Bc,
                              cC: nc
                            });
                          else hc.e.updateCosmetics(ec, cB.map((cB => {
                            let [Bc, nc] = cB;
                            return {
                              RZ: Bc,
                              cC: nc
                            }
                          }))).catch((cB => {
                            console.error("Failed to update cosmetics", cB)
                          }))
                        }
                      },
                      children: [(0, Cc.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${Bc}_preview.png)`
                        }
                      }), nc && (0, Cc.jsx)(bB.e, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, Bc)
                  }))
                })
              }, cB)
            }))]
          }), "emote" === Bc && (0, Cc.jsx)(Dc, {
            equippedEmoteIds: (0, mB.f)(Fc.current.emote),
            ownedPacks: Ac,
            xsollaSupported: Gc,
            onUpdateLoadout: cB => {
              const Bc = (0, mB.g)(cB);
              var nc;
              Fc.current = {
                ...Fc.current,
                emote: Bc
              }, ec.setPlayerCosmetics("emote", Bc), Qc(), nc = Bc, iB.current = nc, null !== Rc.current && clearTimeout(Rc.current), Rc.current = setTimeout(Kc, 350)
            },
            onEmoteSelected: Hc,
            onEquipPreviewSkin: () => {
              ! function(cB, Bc) {
                for (const nc of Pc.v) "cape" !== nc && "nameColour" !== nc && "emote" !== nc && cB(nc, "skin" === nc ? "skin_preview" : `${nc}_none`, !1);
                Bc()
              }(xB, Qc)
            }
          }), "characters" !== Bc && "emote" !== Bc && (0, Cc.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, uB.map((cB => {
              const Bc = VB.get(cB),
                Vc = Yc.d[cB].purchasable && !Ac.includes(cB);
              return (0, Cc.jsx)(vB, {
                pack: cB,
                ownedPacks: Ac,
                children: Bc.map((Bc => {
                  var Ic;
                  let {
                    groupName: rB,
                    cosmetics: uc
                  } = Bc;
                  const sc = rB ? null === (Ic = Yc.d[cB].colourGroups) || void 0 === Ic ? void 0 : Ic[rB] : void 0,
                    Pc = `${cB}_${nc}_${rB}`,
                    Oc = null === sc || void 0 === sc ? void 0 : sc.showSwatchSelector;
                  return (0, Cc.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [Oc && sc && (0, Cc.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...sc.colours.map(((cB, Bc) => ({
                        color: cB,
                        index: Bc
                      })))].sort(((cB, Bc) => cB.color.order - Bc.color.order)).map((Bc => {
                        var Vc;
                        let {
                          color: Ic,
                          index: uc
                        } = Bc;
                        return (0, Cc.jsx)("div", {
                          className: Mc()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (Vc = wc[Pc]) && void 0 !== Vc ? Vc : (0, Yc.h)(sc.colours)) === uc
                          }),
                          style: {
                            backgroundColor: `rgb(${Ic.rbg.join(",")})`
                          },
                          onClick: () => {
                            var Bc;
                            kB((cB => ({
                              ...cB,
                              [Pc]: uc
                            })));
                            const Vc = oc[nc],
                              Ic = Vc ? (0, Tc.k)(nc, Vc) : null,
                              sc = (null === Ic || void 0 === Ic ? void 0 : Ic.cosmeticPack) === cB,
                              Mc = sc ? Vc : Fc.current[nc],
                              qB = sc ? Ic : (0, Tc.k)(nc, Mc);
                            if ((null === qB || void 0 === qB ? void 0 : qB.cosmeticPack) !== cB) return;
                            if ((null !== (Bc = null === qB || void 0 === qB ? void 0 : qB.colourGroup) && void 0 !== Bc ? Bc : null) !== rB) return;
                            const Oc = (0, Tc.i)(Mc);
                            if (Oc) {
                              const cB = `${nc}_${Oc[0]}_${uc}`;
                              sc ? Wc((Bc => ({
                                ...Bc,
                                [nc]: cB
                              }))) : xB(nc, cB, !0)
                            }
                          }
                        }, Ic.rbg.join())
                      }))
                    }), uc.map((cB => {
                      const Bc = cB === Fc.current[nc],
                        Ic = oc[nc] === cB;
                      let rB = !0;
                      return Vc || Bc || ("cape" !== nc || (0, aB.dd)(ec.getPlayerRanks(), cB)) && ("nameColour" !== nc || ec.playerHasRank("super")) || (rB = !1), (0, Cc.jsxs)("div", {
                        className: Mc()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: Bc && !Ic,
                          TryingOnCharCustomPartWrapper: Ic,
                          DisabledCharCustomPartWrapper: !rB,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === nc
                        }),
                        onClick: () => {
                          if (rB)
                            if (Vc) Wc((Bc => {
                              if (Bc[nc] === cB) {
                                const cB = {
                                  ...Bc
                                };
                                return delete cB[nc], cB
                              }
                              return {
                                ...Bc,
                                [nc]: cB
                              }
                            }));
                            else {
                              var Bc;
                              if (oc[nc] && Wc((cB => {
                                  const Bc = {
                                    ...cB
                                  };
                                  return delete Bc[nc], Bc
                                })), cB === Fc.current[nc]) return;
                              null !== (Bc = jB.current) && void 0 !== Bc && Bc.isReady() && xB(nc, cB, !0)
                            }
                        },
                        children: ["profileEffect" === nc ? (0, Cc.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, Cc.jsx)(Uc.h, {
                            playerSocialPreview: (0, gB.d)(cB, {
                              name: ec.getPlayerName(),
                              cosmetics: ec.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, Cc.jsx)("div", {
                          className: Mc()("CharCustomPart", {
                            PixelatedImage: "cape" === nc
                          }),
                          style: (0, Tc.k)(nc, cB).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,Tc.k)(nc,cB).previewTex}.png)`
                          } : {
                            backgroundColor: qB.o[cB],
                            borderRadius: "50%"
                          }
                        }), Vc && (0, Cc.jsx)(bB.e, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, cB)
                    }))]
                  }, null !== rB && void 0 !== rB ? rB : "ungrouped")
                }))
              }, cB)
            }))]
          }), (0, Cc.jsx)(lc.CharacterPreview, {
            ref: jB,
            forcedCosmetics: oc,
            EQ: Xc.id,
            emotePlaySeq: Xc.seq,
            onReady: () => {
              for (const cB of Pc.v) xB(cB, Fc.current[cB], !1)
            }
          })]
        })]
      })
    }))
  },
  39152: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      CharacterPreview: () => qB
    });
    var Vc = nc(73),
      Ic = nc(2175),
      rB = nc(1108),
      uc = nc(7729),
      sc = nc(35460),
      Mc = nc(2799),
      Pc = nc(957);
    const qB = (0, Vc.memo)((0, Vc.forwardRef)((function(cB, Bc) {
      let {
        onReady: nc,
        owner: qB = "other",
        forcedCosmetics: Oc,
        EQ: Tc,
        emotePlaySeq: fc
      } = cB;
      const mB = (0, Vc.useRef)(null),
        {
          width: ec,
          height: tB
        } = (0, Ic.c)(mB),
        Sc = (0, Vc.useRef)(null),
        yB = (0, Vc.useRef)({}),
        zB = (0, Vc.useRef)({}),
        [pc, hc] = (0, Vc.useState)(!1),
        aB = (0, Vc.useRef)(nc);
      return aB.current = nc, (0, Vc.useImperativeHandle)(Bc, (() => {
        const cB = (cB, Bc) => {
          var nc;
          (yB.current[cB] = Bc, null !== Oc && void 0 !== Oc && Oc[cB]) || (null === (nc = Sc.current) || void 0 === nc || nc.setCosmetic(cB, Bc))
        };
        return {
          updateCosmetic: cB,
          setAllCosmetics(Bc) {
            for (const Vc of rB.v) {
              var nc;
              cB(Vc, null !== (nc = Bc[Vc]) && void 0 !== nc ? nc : (0, uc.c)(Vc))
            }
          },
          isReady() {
            var cB, Bc;
            return null !== (cB = null === (Bc = Sc.current) || void 0 === Bc ? void 0 : Bc.isReady()) && void 0 !== cB && cB
          },
          async ensureReadyForCapture(cB) {
            var Bc;
            await (null === (Bc = Sc.current) || void 0 === Bc ? void 0 : Bc.untilDrawn(cB))
          },
          getDevTools() {
            var cB;
            return null !== (cB = Sc.current) && void 0 !== cB && cB.isReady() ? Sc.current.dev : null
          }
        }
      }), [Oc]), (0, Vc.useEffect)((() => {
        const cB = Mc.d.register(qB),
          Bc = sc.d.openCharacter(mB.current);
        Sc.current = Bc;
        let nc = !0;
        return Bc.ready.then((() => {
          nc && (hc(!0), aB.current())
        })).catch((cB => {
          console.error("Failed to set up the character preview", cB)
        })), () => {
          nc = !1, cB(), Bc.close(), Sc.current = null
        }
      }), []), (0, Vc.useEffect)((() => {
        ec <= 0 || tB <= 0 || Sc.current.resize(ec, tB)
      }), [ec, tB]), (0, Vc.useEffect)((() => {
        if (!pc) return;
        const cB = zB.current;
        for (const Bc of rB.v) {
          const nc = null === Oc || void 0 === Oc ? void 0 : Oc[Bc],
            Vc = cB[Bc];
          nc && nc !== Vc ? Sc.current.setCosmetic(Bc, nc) : !nc && Vc && yB.current[Bc] && Sc.current.setCosmetic(Bc, yB.current[Bc])
        }
        zB.current = {
          ...Oc
        }
      }), [Oc, pc]), (0, Vc.useEffect)((() => {
        pc && Sc.current.playEmote(null !== Tc && void 0 !== Tc ? Tc : null)
      }), [Tc, fc, pc]), (0, Pc.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: mB
      })
    })))
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);