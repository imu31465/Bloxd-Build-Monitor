export const id = 267;
export const ids = [267, 268];
export const modules = {
  39644: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      CharacterCustomisationUI: () => Fy
    });
    var Uy = Wy(55),
      hy = Wy(2332),
      fy = Wy(980),
      Zy = Wy(1572),
      cb = Wy(898),
      Py = Wy.n(cb),
      oy = Wy(1102),
      By = Wy(530),
      Ky = Wy(1042),
      ey = Wy(1844),
      qb = Wy(1907),
      sy = Wy(7955),
      Sy = Wy(1849),
      Ey = Wy(2416),
      ly = Wy(1612),
      mb = Wy(1273),
      Cy = Wy(1881),
      Ty = Wy(19),
      Vy = Wy(1339),
      Jy = Wy(258),
      gb = Wy(39650),
      Gy = Wy(1397),
      Oy = Wy(1929),
      Ry = Wy(2326),
      vb = Wy(1788),
      ib = Wy(2078),
      My = Wy(910);
    Wy(35578), Wy(2423);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var Yy = Wy(1893),
      Xy = Wy(1217),
      ny = Wy(952);

    function uy(yb, bb, Wy) {
      return (0, ey.n)(yb, bb).purchasable && !(0, Oy.j)(yb, bb, Wy)
    }

    function rb(yb, bb) {
      return Object.entries(yb).some((yb => {
        let [Wy, Uy] = yb;
        return uy(Wy, Uy, bb)
      }))
    }

    function Hy(yb) {
      var bb;
      let {
        pack: Wy,
        ownedPacks: Uy,
        showStoreLink: hy = !1,
        children: fy
      } = yb;
      const {
        t: Zy
      } = (0, Ky.D)(), cb = Gy.e[Wy], oy = cb.purchasable && !Uy.includes(Wy) && Gy.p.includes(Wy), By = Ry.n[Wy];
      return (0, ny.jsxs)("div", {
        className: Py()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: oy
        }),
        children: [By && (0, ny.jsx)(By, {}), (0, ny.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, ny.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (bb = cb.displayName) && void 0 !== bb ? bb : Wy
          }), (oy || hy) && (0, ny.jsxs)(mb.v, {
            onClick: () => {
              oy ? (0, Ry.k)(Wy) : (0, Cy.f)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, ny.jsx)(My.e, {
              name: "store"
            }), " ", Zy("general:viewInShop")]
          })]
        }), oy && "bee" === Wy && (0, ny.jsx)(Ry.d, {}), fy]
      })
    }

    function ab(yb) {
      let {
        equippedEmoteIds: bb,
        ownedPacks: Wy,
        xsollaSupported: Uy,
        onUpdateLoadout: hy,
        onEmoteSelected: fy,
        onEquipPreviewSkin: Zy
      } = yb;
      const {
        t: cb
      } = (0, Ky.D)(), By = new Set(bb), qb = new Map, sy = Object.keys(ey.g.emote).sort(((yb, bb) => {
        var Wy, Uy, hy, fy;
        return (null !== (Wy = null === (Uy = (0, ey.m)("emote", yb)) || void 0 === Uy ? void 0 : Uy.clientIdx) && void 0 !== Wy ? Wy : 0) - (null !== (hy = null === (fy = (0, ey.m)("emote", bb)) || void 0 === fy ? void 0 : fy.clientIdx) && void 0 !== hy ? hy : 0)
      })).filter((yb => {
        const bb = (0, ey.n)("emote", yb),
          hy = (0, Oy.j)("emote", yb, Wy);
        return !(bb.purchasable && !hy && !Uy) && (bb.clientSelectable || hy)
      }));
      for (const Py of sy) {
        const yb = (0, ey.m)("emote", Py).cosmeticPack;
        qb.has(yb) || qb.set(yb, []), qb.get(yb).push(Py)
      }
      const Ey = Array.from(qb.keys());
      return (0, ny.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, ny.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, ny.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: cb("emotes:equippedCount", {
              count: bb.length,
              max: oy.o
            })
          }), (0, ny.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: cb("emotes:loadoutHint")
          })]
        }), Ey.map((yb => {
          const Uy = qb.get(yb);
          return (0, ny.jsx)(Hy, {
            pack: yb,
            ownedPacks: Wy,
            children: (0, ny.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: Uy.map((yb => {
                var Uy;
                const Zy = bb.indexOf(yb),
                  Ky = -1 !== Zy,
                  ey = bb.length >= oy.o,
                  qb = uy("emote", yb, Wy),
                  sy = qb || !Ky && ey,
                  Ey = (0, Sy.f)(yb);
                return (0, ny.jsxs)("div", {
                  className: Py()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Ky
                  }),
                  onClick: () => {
                    fy(yb)
                  },
                  children: [(0, ny.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, ny.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${yb}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, ny.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (Uy = null === Ey || void 0 === Ey ? void 0 : Ey.displayName) && void 0 !== Uy ? Uy : yb
                    })]
                  }), (0, ny.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Ky && (0, ny.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: Zy + 1
                    }), qb && (0, ny.jsx)(My.e, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, ny.jsx)(Xy.f, {
                      tooltipInner: (0, ny.jsx)(ny.Fragment, {
                        children: cb(Ky ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, ny.jsx)("div", {
                        className: Py()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: sy,
                          EmoteCustomPartToggleEquipped: Ky
                        }),
                        onClick: Wy => {
                          Wy.stopPropagation(), sy || function(yb) {
                            By.has(yb) ? hy(bb.filter((bb => bb !== yb))) : bb.length >= oy.o || hy([...bb, yb])
                          }(yb)
                        },
                        children: (0, ny.jsx)(My.e, {
                          name: Ky ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, yb)
              }))
            })
          }, yb)
        }))]
      })
    }
    const Fy = (0, Uy.memo)((function(yb) {
      let {
        selectedTab: bb
      } = yb;
      const Wy = "characters" === bb ? "skin" : bb,
        {
          t: cb
        } = (0, Ky.D)(),
        {
          userContext: Sy,
          isUserContextUpdating: Ry
        } = (0, fy.c)(),
        Xy = (0, hy.e)(),
        {
          gameState: Fy,
          initSdkSelectorFinished: py
        } = (0, Ty.h)(["gameState", "initSdkSelectorFinished"]),
        [Ly, Qy] = (0, Uy.useState)({}),
        [jb, Dy] = (0, Uy.useState)({}),
        {
          previewEmote: tb,
          triggerEmote: wy
        } = (0, Ey.d)(),
        kb = (0, Uy.useRef)(oy.x.reduce(((yb, bb) => (yb[bb] = (0, sy.e)(bb), yb)), {})),
        Ny = (0, Uy.useRef)(!1),
        zb = (0, Uy.useRef)(null),
        Iy = (0, Uy.useRef)(null),
        xb = (0, Uy.useRef)(null);

      function Ay() {
        null !== Iy.current && (clearTimeout(Iy.current), Iy.current = null);
        const yb = xb.current;
        if (null === yb) return;
        xb.current = null;
        const bb = {
          Kl: "emote",
          qm: yb
        };
        null !== Zy.gameBridge.latest("connectedGame").websocketUrl ? Zy.gameBridge.send("updateMyCosmetic", bb) : Vy.c.updateCosmetics(Sy, [bb]).catch((yb => {
          console.error("Failed to update emote loadout", yb)
        }))
      }

      function dy(yb, bb, Wy) {
        var Uy, hy, fy;
        if (kb.current = {
            ...kb.current,
            [yb]: bb
          }, Xy(), Wy) {
          const Wy = {
            Kl: yb,
            qm: bb
          };
          null !== Zy.gameBridge.latest("connectedGame").websocketUrl ? Zy.gameBridge.send("updateMyCosmetic", Wy) : Vy.c.updateCosmetics(Sy, [Wy]).catch((yb => {
            console.error("Failed to update cosmetic", yb)
          })), Sy.setPlayerCosmetics(yb, bb)
        }
        const cb = (0, ey.m)(yb, bb);
        if (null !== cb && void 0 !== cb && cb.colourGroup && null !== (Uy = Gy.e[cb.cosmeticPack].colourGroups) && void 0 !== Uy && null !== (hy = Uy[cb.colourGroup]) && void 0 !== hy && hy.showSwatchSelector) {
          const Wy = (0, ey.i)(bb);
          Wy && Dy((bb => ({
            ...bb,
            [`${cb.cosmeticPack}_${yb}_${cb.colourGroup}`]: parseInt(Wy[1])
          })))
        }
        null !== (fy = zb.current) && void 0 !== fy && fy.isReady() && zb.current.updateCosmetic(yb, bb)
      }

      function yW(yb) {
        return Object.entries(yb).every((yb => {
          let [bb, Wy] = yb;
          return Ly[bb] === Wy
        }))
      }(0, ly.e)("cosmeticsUpdated", (yb => {
        let bb = !1;
        for (const {
            local: Wy,
            Kl: Uy,
            qm: hy
          }
          of yb) {
          if (!Wy) return;
          bb = !0, Ny.current || dy(Uy, hy, !1), Xy()
        }
        bb && (Ny.current = !0)
      })), (0, Uy.useEffect)((() => {
        if (!Ry) {
          for (const [yb, bb] of Object.entries(Sy.getPlayerCosmetics())) dy(yb, bb, !1);
          Xy()
        }
      }), [Ry]), (0, Uy.useEffect)((() => () => {
        Ay()
      }), []);
      const bW = Sy.getOwnedCosmeticPacks(),
        Wb = (0, Yy.siteSupportsPurchases)(),
        Ub = Object.keys(ey.g[Wy]).filter((yb => {
          const bb = (0, ey.n)(Wy, yb),
            Uy = (0, Oy.j)(Wy, yb, bW);
          return !(bb.purchasable && !Uy && !Wb) && (bb.clientSelectable || Uy)
        })).sort(((yb, bb) => {
          var Uy, hy, fy, Zy;
          return (null !== (Uy = null === (hy = (0, ey.m)(Wy, yb)) || void 0 === hy ? void 0 : hy.clientIdx) && void 0 !== Uy ? Uy : 0) - (null !== (fy = null === (Zy = (0, ey.m)(Wy, bb)) || void 0 === Zy ? void 0 : Zy.clientIdx) && void 0 !== fy ? fy : 0)
        })),
        hb = new Map;
      for (const Uy of Ub) {
        var fb;
        const yb = null === (fb = (0, ey.m)(Wy, Uy)) || void 0 === fb ? void 0 : fb.cosmeticPack;
        hb.has(yb) || hb.set(yb, []), hb.get(yb).push(Uy)
      }
      const Zb = function(yb, bb) {
          const Wy = new Set,
            Uy = new Set;
          for (const [hy, fy] of Object.entries(ey.g[yb])) {
            if (void 0 === fy.colourGroup) continue;
            const Zy = `${fy.cosmeticPack}_${fy.colourGroup}`;
            (uy(yb, hy, bb) ? Uy : Wy).add(Zy)
          }
          return new Set([...Wy].filter((yb => Uy.has(yb))))
        }(Wy, bW),
        cW = new Map;
      for (const [Uy, hy] of hb) {
        const yb = [],
          bb = new Map;
        for (const Uy of hy) {
          var Pb, ob;
          const hy = null !== (Pb = null === (ob = (0, ey.m)(Wy, Uy)) || void 0 === ob ? void 0 : ob.colourGroup) && void 0 !== Pb ? Pb : null;
          bb.has(hy) || (bb.set(hy, []), yb.push(hy)), bb.get(hy).push(Uy)
        }
        const fy = yb.map((yb => {
          var hy;
          const fy = bb.get(yb),
            Zy = yb ? null === (hy = Gy.e[Uy].colourGroups) || void 0 === hy ? void 0 : hy[yb] : void 0,
            cb = !0 === (null === Zy || void 0 === Zy ? void 0 : Zy.showSwatchSelector) && !Zb.has(`${Uy}_${yb}`);
          if (cb && Zy) {
            var Py;
            const bb = null !== (Py = jb[`${Uy}_${Wy}_${yb}`]) && void 0 !== Py ? Py : (0, Gy.l)(Zy.colours);
            return {
              groupName: yb,
              showSwatch: cb,
              cosmetics: fy.filter((yb => {
                const Wy = (0, ey.i)(yb);
                return !Wy || bb.toString() === Wy[1].toString()
              }))
            }
          }
          return {
            groupName: yb,
            cosmetics: fy,
            showSwatch: cb
          }
        }));
        cW.set(Uy, fy)
      }
      const Bb = Array.from(hb.keys()),
        Kb = new Map;
      for (const [Uy, hy] of Object.entries(qb.c)) {
        const yb = Gy.e[hy.cosmeticPack],
          bb = !rb(hy.cosmetics, bW),
          Wy = Gy.n.some((yb => (0, Gy.i)(yb) === Uy));
        (yb.clientSelectable || Wy || bb) && ((!yb.purchasable || bb || Wb) && (Kb.has(hy.cosmeticPack) || Kb.set(hy.cosmeticPack, []), Kb.get(hy.cosmeticPack).push([Uy, hy])))
      }
      const eb = Array.from(Kb.keys());
      return (0, ny.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === Wy || "nameColour" === Wy) && !Sy.playerHasRank("super") && (0, ny.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, ny.jsx)(My.e, {
            name: "bolt"
          }), cb("homePage:unlockWithSuperRank"), Wb && (0, ny.jsx)(mb.i, {
            onClick: () => {
              (0, Cy.f)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: cb("general:getItNow")
          })]
        }), (0, ny.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === bb && (0, ny.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, eb.map((yb => {
              const bb = Kb.get(yb);
              return (0, ny.jsx)(Hy, {
                pack: yb,
                ownedPacks: bW,
                showStoreLink: !Gy.p.includes(yb) && bb.some((yb => {
                  let [, {
                    cosmetics: bb
                  }] = yb;
                  return rb(bb, bW)
                })),
                children: (0, ny.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: bb.map((yb => {
                    let [bb, {
                      cosmetics: Wy
                    }] = yb;
                    const Uy = rb(Wy, bW),
                      hy = yW(Wy),
                      fy = !hy && Object.entries(Wy).every((yb => {
                        let [bb, Wy] = yb;
                        return kb.current[bb] === Wy
                      }));
                    return (0, ny.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: Py()("CharacterPresetCard", {
                        CharacterPresetCardActive: fy,
                        CharacterPresetCardTryingOn: hy
                      }),
                      onClick: () => {
                        if (Uy) ! function(yb) {
                          yW(yb) ? Qy({}) : Qy({
                            ...yb
                          })
                        }(Wy);
                        else {
                          Object.keys(Ly).length > 0 && Qy({});
                          const yb = Object.entries(Wy);
                          for (const [bb, Wy] of yb) dy(bb, Wy, !1), Sy.setPlayerCosmetics(bb, Wy);
                          if (null !== Zy.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [bb, Wy] of yb) Zy.gameBridge.send("updateMyCosmetic", {
                              Kl: bb,
                              qm: Wy
                            });
                          else Vy.c.updateCosmetics(Sy, yb.map((yb => {
                            let [bb, Wy] = yb;
                            return {
                              Kl: bb,
                              qm: Wy
                            }
                          }))).catch((yb => {
                            console.error("Failed to update cosmetics", yb)
                          }))
                        }
                      },
                      children: [(0, ny.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${bb}_preview.png)`
                        }
                      }), Uy && (0, ny.jsx)(My.e, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, bb)
                  }))
                })
              }, yb)
            }))]
          }), "emote" === bb && (0, ny.jsx)(ab, {
            equippedEmoteIds: (0, sy.g)(kb.current.emote),
            ownedPacks: bW,
            xsollaSupported: Wb,
            onUpdateLoadout: yb => {
              const bb = (0, sy.j)(yb);
              var Wy;
              kb.current = {
                ...kb.current,
                emote: bb
              }, Sy.setPlayerCosmetics("emote", bb), Xy(), Wy = bb, xb.current = Wy, null !== Iy.current && clearTimeout(Iy.current), Iy.current = setTimeout(Ay, 350)
            },
            onEmoteSelected: wy,
            onEquipPreviewSkin: () => {
              ! function(yb, bb) {
                for (const Wy of oy.x) "cape" !== Wy && "nameColour" !== Wy && "emote" !== Wy && yb(Wy, "skin" === Wy ? "skin_preview" : `${Wy}_none`, !1);
                bb()
              }(dy, Xy)
            }
          }), "characters" !== bb && "emote" !== bb && (0, ny.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Bb.map((yb => {
              const bb = cW.get(yb);
              return (0, ny.jsx)(Hy, {
                pack: yb,
                ownedPacks: bW,
                children: bb.map((bb => {
                  var Uy;
                  let {
                    groupName: hy,
                    cosmetics: fy,
                    showSwatch: Zy
                  } = bb;
                  const cb = hy ? null === (Uy = Gy.e[yb].colourGroups) || void 0 === Uy ? void 0 : Uy[hy] : void 0,
                    oy = `${yb}_${Wy}_${hy}`;
                  return (0, ny.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [Zy && cb && (0, ny.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...cb.colours.map(((yb, bb) => ({
                        color: yb,
                        index: bb
                      })))].sort(((yb, bb) => yb.color.order - bb.color.order)).map((bb => {
                        var Uy;
                        let {
                          color: fy,
                          index: Zy
                        } = bb;
                        return (0, ny.jsx)("div", {
                          className: Py()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (Uy = jb[oy]) && void 0 !== Uy ? Uy : (0, Gy.l)(cb.colours)) === Zy
                          }),
                          style: {
                            backgroundColor: `rgb(${fy.rbg.join(",")})`
                          },
                          onClick: () => {
                            var bb;
                            Dy((yb => ({
                              ...yb,
                              [oy]: Zy
                            })));
                            const Uy = Ly[Wy],
                              fy = Uy ? (0, ey.m)(Wy, Uy) : null,
                              cb = (null === fy || void 0 === fy ? void 0 : fy.cosmeticPack) === yb,
                              Py = cb ? Uy : kb.current[Wy],
                              By = cb ? fy : (0, ey.m)(Wy, Py);
                            if ((null === By || void 0 === By ? void 0 : By.cosmeticPack) !== yb) return;
                            if ((null !== (bb = null === By || void 0 === By ? void 0 : By.colourGroup) && void 0 !== bb ? bb : null) !== hy) return;
                            const Ky = (0, ey.i)(Py);
                            if (Ky) {
                              const yb = `${Wy}_${Ky[0]}_${Zy}`;
                              cb ? Qy((bb => ({
                                ...bb,
                                [Wy]: yb
                              }))) : dy(Wy, yb, !0)
                            }
                          }
                        }, fy.rbg.join())
                      }))
                    }), fy.map((yb => {
                      const bb = yb === kb.current[Wy],
                        Uy = Ly[Wy] === yb,
                        hy = uy(Wy, yb, bW);
                      let fy = !0;
                      return hy || bb || ("cape" !== Wy || (0, Jy.Bd)(Sy.getPlayerRanks(), yb)) && ("nameColour" !== Wy || Sy.playerHasRank("super")) || (fy = !1), (0, ny.jsxs)("div", {
                        className: Py()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: bb && !Uy,
                          TryingOnCharCustomPartWrapper: Uy,
                          DisabledCharCustomPartWrapper: !fy,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === Wy
                        }),
                        onClick: () => {
                          if (fy)
                            if (hy) Qy((bb => {
                              if (bb[Wy] === yb) {
                                const yb = {
                                  ...bb
                                };
                                return delete yb[Wy], yb
                              }
                              return {
                                ...bb,
                                [Wy]: yb
                              }
                            }));
                            else {
                              var bb;
                              if (Ly[Wy] && Qy((yb => {
                                  const bb = {
                                    ...yb
                                  };
                                  return delete bb[Wy], bb
                                })), yb === kb.current[Wy]) return;
                              null !== (bb = zb.current) && void 0 !== bb && bb.isReady() && dy(Wy, yb, !0)
                            }
                        },
                        children: ["profileEffect" === Wy ? (0, ny.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, ny.jsx)(ib.d, {
                            playerSocialPreview: (0, vb.b)(yb, {
                              name: Sy.getPlayerName(),
                              cosmetics: Sy.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, ny.jsx)("div", {
                          className: Py()("CharCustomPart", {
                            PixelatedImage: "cape" === Wy
                          }),
                          style: (0, ey.m)(Wy, yb).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,ey.m)(Wy,yb).previewTex}.png)`
                          } : {
                            backgroundColor: By.s[yb],
                            borderRadius: "50%"
                          }
                        }), hy && (0, ny.jsx)(My.e, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, yb)
                    }))]
                  }, null !== hy && void 0 !== hy ? hy : "ungrouped")
                }))
              }, yb)
            }))]
          }), (0, ny.jsx)(gb.CharacterPreview, {
            ref: zb,
            forcedCosmetics: Ly,
            Zm: tb.id,
            emotePlaySeq: tb.seq,
            onReady: () => {
              for (const yb of oy.x) dy(yb, kb.current[yb], !1)
            }
          })]
        })]
      })
    }))
  },
  39650: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      CharacterPreview: () => By
    });
    var Uy = Wy(55),
      hy = Wy(2214),
      fy = Wy(1102),
      Zy = Wy(7955),
      cb = Wy(35578),
      Py = Wy(2929),
      oy = Wy(952);
    const By = (0, Uy.memo)((0, Uy.forwardRef)((function(yb, bb) {
      let {
        onReady: Wy,
        onDrawn: By,
        owner: Ky = "other",
        forcedCosmetics: ey,
        Zm: qb,
        emotePlaySeq: sy
      } = yb;
      const Sy = (0, Uy.useRef)(null),
        {
          width: Ey,
          height: ly
        } = (0, hy.e)(Sy),
        mb = (0, Uy.useRef)(null),
        Cy = (0, Uy.useRef)({}),
        Ty = (0, Uy.useRef)({}),
        [Vy, Jy] = (0, Uy.useState)(!1),
        gb = (0, Uy.useRef)(Wy);
      gb.current = Wy;
      const Gy = (0, Uy.useRef)(By);
      Gy.current = By;
      const Oy = (0, Uy.useRef)(null),
        Ry = (0, Uy.useRef)(!1),
        vb = (0, Uy.useRef)(!1),
        ib = (0, Uy.useCallback)((() => {
          const yb = mb.current;
          if (!yb || !Gy.current || Ry.current || !vb.current) return;
          const bb = {};
          Oy.current = bb, queueMicrotask((() => {
            if (Oy.current !== bb) return;
            const Wy = Promise.all(fy.x.map((bb => yb.untilDrawn(bb)))).catch((yb => {
                console.error("Failed to draw the character preview", yb)
              })),
              Uy = new Promise((yb => {
                setTimeout(yb, 1e4)
              }));
            Promise.race([Wy, Uy]).then((() => {
              var Wy;
              mb.current !== yb || Oy.current !== bb || Ry.current || (Ry.current = !0, null === (Wy = Gy.current) || void 0 === Wy || Wy.call(Gy))
            }))
          }))
        }), []);
      return (0, Uy.useImperativeHandle)(bb, (() => {
        const yb = (yb, bb) => {
          var Wy;
          (Cy.current[yb] = bb, null !== ey && void 0 !== ey && ey[yb]) || (null === (Wy = mb.current) || void 0 === Wy || Wy.setCosmetic(yb, bb), ib())
        };
        return {
          updateCosmetic: yb,
          setAllCosmetics(bb) {
            for (const Uy of fy.x) {
              var Wy;
              yb(Uy, null !== (Wy = bb[Uy]) && void 0 !== Wy ? Wy : (0, Zy.e)(Uy))
            }
          },
          isReady() {
            var yb, bb;
            return null !== (yb = null === (bb = mb.current) || void 0 === bb ? void 0 : bb.isReady()) && void 0 !== yb && yb
          },
          resetCamera() {
            var yb;
            null === (yb = mb.current) || void 0 === yb || yb.resetCamera()
          },
          async ensureReadyForCapture(yb) {
            var bb;
            await (null === (bb = mb.current) || void 0 === bb ? void 0 : bb.untilDrawn(yb))
          },
          getDevTools() {
            var yb;
            return null !== (yb = mb.current) && void 0 !== yb && yb.isReady() ? mb.current.dev : null
          }
        }
      }), [ey, ib]), (0, Uy.useEffect)((() => {
        const yb = Py.b.register(Ky),
          bb = cb.f.openCharacter(Sy.current);
        mb.current = bb;
        let Wy = !0;
        return bb.ready.then((() => {
          Wy && (Jy(!0), gb.current())
        })).catch((yb => {
          console.error("Failed to set up the character preview", yb)
        })), () => {
          Wy = !1, yb(), bb.close(), mb.current = null
        }
      }), []), (0, Uy.useEffect)((() => {
        Ey <= 0 || ly <= 0 || mb.current.resize(Ey, ly)
      }), [Ey, ly]), (0, Uy.useEffect)((() => {
        if (!Vy) return;
        const yb = Ty.current;
        for (const bb of fy.x) {
          const Wy = null === ey || void 0 === ey ? void 0 : ey[bb],
            Uy = yb[bb];
          Wy && Wy !== Uy ? mb.current.setCosmetic(bb, Wy) : !Wy && Uy && Cy.current[bb] && mb.current.setCosmetic(bb, Cy.current[bb])
        }
        Ty.current = {
          ...ey
        }, vb.current = !0, ib()
      }), [ey, Vy, ib]), (0, Uy.useEffect)((() => {
        Vy && mb.current.playEmote(null !== qb && void 0 !== qb ? qb : null)
      }), [qb, sy, Vy]), (0, oy.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: Sy
      })
    })))
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);