export const id = 282;
export const ids = [282, 283];
export const modules = {
  40573: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      CharacterCustomisationUI: () => Zv
    });
    var hv = Pv(52),
      Sv = Pv(2775),
      ev = Pv(1108),
      gv = Pv(1876),
      pv = Pv(1035),
      dv = Pv.n(pv),
      Nv = Pv(1226),
      lv = Pv(602),
      Tv = Pv(1175),
      Wv = Pv(2160),
      wv = Pv(1548),
      av = Pv(8501),
      sv = Pv(2169),
      Cv = Pv(2879),
      iv = Pv(1923),
      cv = Pv(1442),
      Gv = Pv(2200),
      mv = Pv(22),
      jv = Pv(1482),
      fv = Pv(312),
      Fv = Pv(40581),
      Yv = Pv(1542),
      nv = Pv(2248),
      Ov = Pv(2769),
      Dv = Pv(2097),
      Kv = Pv(2432),
      Vv = Pv(1042);
    Pv(9044), Pv(2885);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var Uv = Pv(2209),
      Rv = Pv(1344),
      xv = Pv(1082);

    function tv(vv, zv, Pv) {
      return (0, Wv.s)(vv, zv).purchasable && !(0, nv.s)(vv, zv, Pv)
    }

    function qv(vv, zv) {
      return Object.entries(vv).some((vv => {
        let [Pv, hv] = vv;
        return tv(Pv, hv, zv)
      }))
    }

    function Iv(vv) {
      var zv;
      let {
        pack: Pv,
        ownedPacks: hv,
        showStoreLink: Sv = !1,
        children: ev
      } = vv;
      const {
        t: gv
      } = (0, Tv.x)(), pv = Yv.b[Pv], Nv = pv.purchasable && !hv.includes(Pv) && Yv.p.includes(Pv), lv = Ov.k[Pv];
      return (0, xv.jsxs)("div", {
        className: dv()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: Nv
        }),
        children: [lv && (0, xv.jsx)(lv, {}), (0, xv.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, xv.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (zv = pv.displayName) && void 0 !== zv ? zv : Pv
          }), (Nv || Sv) && (0, xv.jsxs)(cv.u, {
            onClick: () => {
              Nv ? (0, Ov.j)(Pv) : (0, Gv.s)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, xv.jsx)(Vv.b, {
              name: "store"
            }), " ", gv("general:viewInShop")]
          })]
        }), Nv && "bee" === Pv && (0, xv.jsx)(Ov.e, {}), ev]
      })
    }

    function Qv(vv) {
      let {
        equippedEmoteIds: zv,
        ownedPacks: Pv,
        canBuy: hv,
        onUpdateLoadout: Sv,
        onEmoteSelected: ev,
        onEquipPreviewSkin: gv
      } = vv;
      const {
        t: pv
      } = (0, Tv.x)(), lv = new Set(zv), wv = new Map, av = Object.keys(Wv.i.emote).sort(((vv, zv) => {
        var Pv, hv, Sv, ev;
        return (null !== (Pv = null === (hv = (0, Wv.o)("emote", vv)) || void 0 === hv ? void 0 : hv.clientIdx) && void 0 !== Pv ? Pv : 0) - (null !== (Sv = null === (ev = (0, Wv.o)("emote", zv)) || void 0 === ev ? void 0 : ev.clientIdx) && void 0 !== Sv ? Sv : 0)
      })).filter((vv => {
        const zv = (0, Wv.s)("emote", vv),
          Sv = (0, nv.s)("emote", vv, Pv);
        return !(zv.purchasable && !Sv && !hv) && (zv.clientSelectable || Sv)
      }));
      for (const dv of av) {
        const vv = (0, Wv.o)("emote", dv).cosmeticPack;
        wv.has(vv) || wv.set(vv, []), wv.get(vv).push(dv)
      }
      const Cv = Array.from(wv.keys());
      return (0, xv.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, xv.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, xv.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: pv("emotes:equippedCount", {
              count: zv.length,
              max: Nv.m
            })
          }), (0, xv.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: pv("emotes:loadoutHint")
          })]
        }), Cv.map((vv => {
          const hv = wv.get(vv);
          return (0, xv.jsx)(Iv, {
            pack: vv,
            ownedPacks: Pv,
            children: (0, xv.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: hv.map((vv => {
                var hv;
                const gv = zv.indexOf(vv),
                  Tv = -1 !== gv,
                  Wv = zv.length >= Nv.m,
                  wv = tv("emote", vv, Pv),
                  av = wv || !Tv && Wv,
                  Cv = (0, sv.l)(vv);
                return (0, xv.jsxs)("div", {
                  className: dv()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Tv
                  }),
                  onClick: () => {
                    ev(vv)
                  },
                  children: [(0, xv.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, xv.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${vv}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, xv.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (hv = null === Cv || void 0 === Cv ? void 0 : Cv.displayName) && void 0 !== hv ? hv : vv
                    })]
                  }), (0, xv.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Tv && (0, xv.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: gv + 1
                    }), wv && (0, xv.jsx)(Vv.b, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, xv.jsx)(Rv.h, {
                      tooltipInner: (0, xv.jsx)(xv.Fragment, {
                        children: pv(Tv ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, xv.jsx)("div", {
                        className: dv()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: av,
                          EmoteCustomPartToggleEquipped: Tv
                        }),
                        onClick: Pv => {
                          Pv.stopPropagation(), av || function(vv) {
                            lv.has(vv) ? Sv(zv.filter((zv => zv !== vv))) : zv.length >= Nv.m || Sv([...zv, vv])
                          }(vv)
                        },
                        children: (0, xv.jsx)(Vv.b, {
                          name: Tv ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, vv)
              }))
            })
          }, vv)
        }))]
      })
    }
    const Zv = (0, hv.memo)((function(vv) {
      let {
        selectedTab: zv
      } = vv;
      const Pv = "characters" === zv ? "skin" : zv,
        {
          t: pv
        } = (0, Tv.x)(),
        {
          userContext: sv,
          isUserContextUpdating: Ov
        } = (0, ev.d)(),
        Rv = (0, Sv.d)(),
        {
          gameState: Zv,
          initSdkSelectorFinished: Av
        } = (0, mv.i)(["gameState", "initSdkSelectorFinished"]),
        [Lv, Hv] = (0, hv.useState)({}),
        [Mv, yv] = (0, hv.useState)({}),
        {
          previewEmote: Bv,
          triggerEmote: Jv
        } = (0, Cv.e)(),
        Ev = (0, hv.useRef)(Nv.u.reduce(((vv, zv) => (vv[zv] = (0, av.b)(zv), vv)), {})),
        ov = (0, hv.useRef)(!1),
        bv = (0, hv.useRef)(null),
        rv = (0, hv.useRef)(null),
        kv = (0, hv.useRef)(null);

      function Xv() {
        null !== rv.current && (clearTimeout(rv.current), rv.current = null);
        const vv = kv.current;
        if (null === vv) return;
        kv.current = null;
        const zv = {
          GP: "emote",
          mP: vv
        };
        null !== gv.gameBridge.latest("connectedGame").websocketUrl ? gv.gameBridge.send("updateMyCosmetic", zv) : jv.e.updateCosmetics(sv, [zv]).catch((vv => {
          console.error("Failed to update emote loadout", vv)
        }))
      }

      function uv(vv, zv, Pv) {
        var hv, Sv, ev;
        if (Ev.current = {
            ...Ev.current,
            [vv]: zv
          }, Rv(), Pv) {
          const Pv = {
            GP: vv,
            mP: zv
          };
          null !== gv.gameBridge.latest("connectedGame").websocketUrl ? gv.gameBridge.send("updateMyCosmetic", Pv) : jv.e.updateCosmetics(sv, [Pv]).catch((vv => {
            console.error("Failed to update cosmetic", vv)
          })), sv.setPlayerCosmetics(vv, zv)
        }
        const pv = (0, Wv.o)(vv, zv);
        if (null !== pv && void 0 !== pv && pv.colourGroup && null !== (hv = Yv.b[pv.cosmeticPack].colourGroups) && void 0 !== hv && null !== (Sv = hv[pv.colourGroup]) && void 0 !== Sv && Sv.showSwatchSelector) {
          const Pv = (0, Wv.l)(zv);
          Pv && yv((zv => ({
            ...zv,
            [`${pv.cosmeticPack}_${vv}_${pv.colourGroup}`]: parseInt(Pv[1])
          })))
        }
        null !== (ev = bv.current) && void 0 !== ev && ev.isReady() && bv.current.updateCosmetic(vv, zv)
      }

      function vz(vv) {
        return Object.entries(vv).every((vv => {
          let [zv, Pv] = vv;
          return Lv[zv] === Pv
        }))
      }(0, iv.d)("cosmeticsUpdated", (vv => {
        let zv = !1;
        for (const {
            local: Pv,
            GP: hv,
            mP: Sv
          }
          of vv) {
          if (!Pv) return;
          zv = !0, ov.current || uv(hv, Sv, !1), Rv()
        }
        zv && (ov.current = !0)
      })), (0, hv.useEffect)((() => {
        if (!Ov) {
          for (const [vv, zv] of Object.entries(sv.getPlayerCosmetics())) uv(vv, zv, !1);
          Rv()
        }
      }), [Ov]), (0, hv.useEffect)((() => () => {
        Xv()
      }), []);
      const zz = sv.getOwnedCosmeticPacks(),
        Pz = (0, Uv.purchasesAllowed)(),
        hz = Object.keys(Wv.i[Pv]).filter((vv => {
          const zv = (0, Wv.s)(Pv, vv),
            hv = (0, nv.s)(Pv, vv, zz);
          return !(zv.purchasable && !hv && !Pz) && (zv.clientSelectable || hv)
        })).sort(((vv, zv) => {
          var hv, Sv, ev, gv;
          return (null !== (hv = null === (Sv = (0, Wv.o)(Pv, vv)) || void 0 === Sv ? void 0 : Sv.clientIdx) && void 0 !== hv ? hv : 0) - (null !== (ev = null === (gv = (0, Wv.o)(Pv, zv)) || void 0 === gv ? void 0 : gv.clientIdx) && void 0 !== ev ? ev : 0)
        })),
        Sz = new Map;
      for (const hv of hz) {
        var ez;
        const vv = null === (ez = (0, Wv.o)(Pv, hv)) || void 0 === ez ? void 0 : ez.cosmeticPack;
        Sz.has(vv) || Sz.set(vv, []), Sz.get(vv).push(hv)
      }
      const gz = function(vv, zv) {
          const Pv = new Set,
            hv = new Set;
          for (const [Sv, ev] of Object.entries(Wv.i[vv])) {
            if (void 0 === ev.colourGroup) continue;
            const gv = `${ev.cosmeticPack}_${ev.colourGroup}`;
            (tv(vv, Sv, zv) ? hv : Pv).add(gv)
          }
          return new Set([...Pv].filter((vv => hv.has(vv))))
        }(Pv, zz),
        pz = new Map;
      for (const [hv, Sv] of Sz) {
        const vv = [],
          zv = new Map;
        for (const hv of Sv) {
          var dz, Nz;
          const Sv = null !== (dz = null === (Nz = (0, Wv.o)(Pv, hv)) || void 0 === Nz ? void 0 : Nz.colourGroup) && void 0 !== dz ? dz : null;
          zv.has(Sv) || (zv.set(Sv, []), vv.push(Sv)), zv.get(Sv).push(hv)
        }
        const ev = vv.map((vv => {
          var Sv;
          const ev = zv.get(vv),
            gv = vv ? null === (Sv = Yv.b[hv].colourGroups) || void 0 === Sv ? void 0 : Sv[vv] : void 0,
            pv = !0 === (null === gv || void 0 === gv ? void 0 : gv.showSwatchSelector) && !gz.has(`${hv}_${vv}`);
          if (pv && gv) {
            var dv;
            const zv = null !== (dv = Mv[`${hv}_${Pv}_${vv}`]) && void 0 !== dv ? dv : (0, Yv.e)(gv.colours);
            return {
              groupName: vv,
              showSwatch: pv,
              cosmetics: ev.filter((vv => {
                const Pv = (0, Wv.l)(vv);
                return !Pv || zv.toString() === Pv[1].toString()
              }))
            }
          }
          return {
            groupName: vv,
            cosmetics: ev,
            showSwatch: pv
          }
        }));
        pz.set(hv, ev)
      }
      const lz = Array.from(Sz.keys()),
        Tz = new Map;
      for (const [hv, Sv] of Object.entries(wv.b)) {
        const vv = Yv.b[Sv.cosmeticPack],
          zv = !qv(Sv.cosmetics, zz),
          Pv = Yv.m.some((vv => (0, Yv.d)(vv) === hv));
        (vv.clientSelectable || Pv || zv) && ((!vv.purchasable || zv || Pz) && (Tz.has(Sv.cosmeticPack) || Tz.set(Sv.cosmeticPack, []), Tz.get(Sv.cosmeticPack).push([hv, Sv])))
      }
      const Wz = Array.from(Tz.keys());
      return (0, xv.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === Pv || "nameColour" === Pv) && !sv.playerHasRank("super") && (0, xv.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, xv.jsx)(Vv.b, {
            name: "bolt"
          }), pv("homePage:unlockWithSuperRank"), Pz && (0, xv.jsx)(cv.j, {
            onClick: () => {
              (0, Gv.s)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: pv("general:getItNow")
          })]
        }), (0, xv.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === zv && (0, xv.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Wz.map((vv => {
              const zv = Tz.get(vv);
              return (0, xv.jsx)(Iv, {
                pack: vv,
                ownedPacks: zz,
                showStoreLink: !Yv.n.includes(vv) && zv.some((vv => {
                  let [, {
                    cosmetics: zv
                  }] = vv;
                  return qv(zv, zz)
                })),
                children: (0, xv.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: zv.map((vv => {
                    let [zv, {
                      cosmetics: Pv
                    }] = vv;
                    const hv = qv(Pv, zz),
                      Sv = vz(Pv),
                      ev = !Sv && Object.entries(Pv).every((vv => {
                        let [zv, Pv] = vv;
                        return Ev.current[zv] === Pv
                      }));
                    return (0, xv.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: dv()("CharacterPresetCard", {
                        CharacterPresetCardActive: ev,
                        CharacterPresetCardTryingOn: Sv
                      }),
                      onClick: () => {
                        if (hv) ! function(vv) {
                          vz(vv) ? Hv({}) : Hv({
                            ...vv
                          })
                        }(Pv);
                        else {
                          Object.keys(Lv).length > 0 && Hv({});
                          const vv = Object.entries(Pv);
                          for (const [zv, Pv] of vv) uv(zv, Pv, !1), sv.setPlayerCosmetics(zv, Pv);
                          if (null !== gv.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [zv, Pv] of vv) gv.gameBridge.send("updateMyCosmetic", {
                              GP: zv,
                              mP: Pv
                            });
                          else jv.e.updateCosmetics(sv, vv.map((vv => {
                            let [zv, Pv] = vv;
                            return {
                              GP: zv,
                              mP: Pv
                            }
                          }))).catch((vv => {
                            console.error("Failed to update cosmetics", vv)
                          }))
                        }
                      },
                      children: [(0, xv.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${zv}_preview.png)`
                        }
                      }), hv && (0, xv.jsx)(Vv.b, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, zv)
                  }))
                })
              }, vv)
            }))]
          }), "emote" === zv && (0, xv.jsx)(Qv, {
            equippedEmoteIds: (0, av.c)(Ev.current.emote),
            ownedPacks: zz,
            canBuy: Pz,
            onUpdateLoadout: vv => {
              const zv = (0, av.f)(vv);
              var Pv;
              Ev.current = {
                ...Ev.current,
                emote: zv
              }, sv.setPlayerCosmetics("emote", zv), Rv(), Pv = zv, kv.current = Pv, null !== rv.current && clearTimeout(rv.current), rv.current = setTimeout(Xv, 350)
            },
            onEmoteSelected: Jv,
            onEquipPreviewSkin: () => {
              ! function(vv, zv) {
                for (const Pv of Nv.u) "cape" !== Pv && "nameColour" !== Pv && "emote" !== Pv && vv(Pv, "skin" === Pv ? "skin_preview" : `${Pv}_none`, !1);
                zv()
              }(uv, Rv)
            }
          }), "characters" !== zv && "emote" !== zv && (0, xv.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, lz.map((vv => {
              const zv = pz.get(vv);
              return (0, xv.jsx)(Iv, {
                pack: vv,
                ownedPacks: zz,
                children: zv.map((zv => {
                  var hv;
                  let {
                    groupName: Sv,
                    cosmetics: ev,
                    showSwatch: gv
                  } = zv;
                  const pv = Sv ? null === (hv = Yv.b[vv].colourGroups) || void 0 === hv ? void 0 : hv[Sv] : void 0,
                    Nv = `${vv}_${Pv}_${Sv}`;
                  return (0, xv.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [gv && pv && (0, xv.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...pv.colours.map(((vv, zv) => ({
                        color: vv,
                        index: zv
                      })))].sort(((vv, zv) => vv.color.order - zv.color.order)).map((zv => {
                        var hv;
                        let {
                          color: ev,
                          index: gv
                        } = zv;
                        return (0, xv.jsx)("div", {
                          className: dv()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (hv = Mv[Nv]) && void 0 !== hv ? hv : (0, Yv.e)(pv.colours)) === gv
                          }),
                          style: {
                            backgroundColor: `rgb(${ev.rbg.join(",")})`
                          },
                          onClick: () => {
                            var zv;
                            yv((vv => ({
                              ...vv,
                              [Nv]: gv
                            })));
                            const hv = Lv[Pv],
                              ev = hv ? (0, Wv.o)(Pv, hv) : null,
                              pv = (null === ev || void 0 === ev ? void 0 : ev.cosmeticPack) === vv,
                              dv = pv ? hv : Ev.current[Pv],
                              lv = pv ? ev : (0, Wv.o)(Pv, dv);
                            if ((null === lv || void 0 === lv ? void 0 : lv.cosmeticPack) !== vv) return;
                            if ((null !== (zv = null === lv || void 0 === lv ? void 0 : lv.colourGroup) && void 0 !== zv ? zv : null) !== Sv) return;
                            const Tv = (0, Wv.l)(dv);
                            if (Tv) {
                              const vv = `${Pv}_${Tv[0]}_${gv}`;
                              pv ? Hv((zv => ({
                                ...zv,
                                [Pv]: vv
                              }))) : uv(Pv, vv, !0)
                            }
                          }
                        }, ev.rbg.join())
                      }))
                    }), ev.map((vv => {
                      const zv = vv === Ev.current[Pv],
                        hv = Lv[Pv] === vv,
                        Sv = tv(Pv, vv, zz);
                      let ev = !0;
                      return Sv || zv || ("cape" !== Pv || (0, fv.Ad)(sv.getPlayerRanks(), vv)) && ("nameColour" !== Pv || sv.playerHasRank("super")) || (ev = !1), (0, xv.jsxs)("div", {
                        className: dv()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: zv && !hv,
                          TryingOnCharCustomPartWrapper: hv,
                          DisabledCharCustomPartWrapper: !ev,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === Pv
                        }),
                        onClick: () => {
                          if (ev)
                            if (Sv) Hv((zv => {
                              if (zv[Pv] === vv) {
                                const vv = {
                                  ...zv
                                };
                                return delete vv[Pv], vv
                              }
                              return {
                                ...zv,
                                [Pv]: vv
                              }
                            }));
                            else {
                              var zv;
                              if (Lv[Pv] && Hv((vv => {
                                  const zv = {
                                    ...vv
                                  };
                                  return delete zv[Pv], zv
                                })), vv === Ev.current[Pv]) return;
                              null !== (zv = bv.current) && void 0 !== zv && zv.isReady() && uv(Pv, vv, !0)
                            }
                        },
                        children: ["profileEffect" === Pv ? (0, xv.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, xv.jsx)(Kv.e, {
                            playerSocialPreview: (0, Dv.b)(vv, {
                              name: sv.getPlayerName(),
                              cosmetics: sv.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, xv.jsx)("div", {
                          className: dv()("CharCustomPart", {
                            PixelatedImage: "cape" === Pv
                          }),
                          style: (0, Wv.o)(Pv, vv).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,Wv.o)(Pv,vv).previewTex}.png)`
                          } : {
                            backgroundColor: lv.s[vv]
                          }
                        }), Sv && (0, xv.jsx)(Vv.b, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, vv)
                    }))]
                  }, null !== Sv && void 0 !== Sv ? Sv : "ungrouped")
                }))
              }, vv)
            }))]
          }), (0, xv.jsx)(Fv.CharacterPreview, {
            ref: bv,
            forcedCosmetics: Lv,
            Fp: Bv.id,
            emotePlaySeq: Bv.seq,
            onReady: () => {
              for (const vv of Nv.u) uv(vv, Ev.current[vv], !1)
            }
          })]
        })]
      })
    }))
  },
  40581: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      CharacterPreview: () => Tv
    });
    var hv = Pv(52),
      Sv = Pv(2584),
      ev = Pv(1226),
      gv = Pv(8501),
      pv = Pv(9044),
      dv = Pv(3392),
      Nv = Pv(1082);
    const lv = .6 * Math.PI,
      Tv = (0, hv.memo)((0, hv.forwardRef)((function(vv, zv) {
        let {
          onReady: Pv,
          onDrawn: Tv,
          owner: Wv = "other",
          framing: wv = "player",
          forcedCosmetics: av,
          Fp: sv,
          emotePlaySeq: Cv,
          turntableFromYaw: iv = null
        } = vv;
        const cv = (0, hv.useRef)(null),
          {
            width: Gv,
            height: mv
          } = (0, Sv.d)(cv),
          jv = (0, hv.useRef)(null),
          fv = (0, hv.useRef)({}),
          Fv = (0, hv.useRef)({}),
          [Yv, nv] = (0, hv.useState)(!1),
          Ov = (0, hv.useRef)(Pv);
        Ov.current = Pv;
        const Dv = (0, hv.useRef)(Tv);
        Dv.current = Tv;
        const Kv = (0, hv.useRef)(null),
          Vv = (0, hv.useRef)(!1),
          Uv = (0, hv.useRef)(!1),
          Rv = (0, hv.useCallback)((() => {
            const vv = jv.current;
            if (!vv || !Dv.current || Vv.current || !Uv.current) return;
            const zv = {};
            Kv.current = zv, queueMicrotask((() => {
              if (Kv.current !== zv) return;
              const Pv = Promise.all(ev.u.map((zv => vv.untilDrawn(zv)))).catch((vv => {
                  console.error("Failed to draw the character preview", vv)
                })),
                hv = new Promise((vv => {
                  setTimeout(vv, 1e4)
                }));
              Promise.race([Pv, hv]).then((() => {
                var Pv;
                jv.current !== vv || Kv.current !== zv || Vv.current || (Vv.current = !0, null === (Pv = Dv.current) || void 0 === Pv || Pv.call(Dv))
              }))
            }))
          }), []);
        return (0, hv.useImperativeHandle)(zv, (() => {
          const vv = (vv, zv) => {
            var Pv;
            (fv.current[vv] = zv, null !== av && void 0 !== av && av[vv]) || (null === (Pv = jv.current) || void 0 === Pv || Pv.setCosmetic(vv, zv), Rv())
          };
          return {
            updateCosmetic: vv,
            setAllCosmetics(zv) {
              for (const hv of ev.u) {
                var Pv;
                vv(hv, null !== (Pv = zv[hv]) && void 0 !== Pv ? Pv : (0, gv.b)(hv))
              }
            },
            isReady() {
              var vv, zv;
              return null !== (vv = null === (zv = jv.current) || void 0 === zv ? void 0 : zv.isReady()) && void 0 !== vv && vv
            },
            resetCamera() {
              var vv;
              null === (vv = jv.current) || void 0 === vv || vv.resetCamera()
            },
            setOrbit(vv) {
              var zv;
              null === (zv = jv.current) || void 0 === zv || zv.setOrbit(vv)
            },
            async ensureReadyForCapture(vv) {
              var zv;
              await (null === (zv = jv.current) || void 0 === zv ? void 0 : zv.untilDrawn(vv))
            },
            getDevTools() {
              var vv;
              return null !== (vv = jv.current) && void 0 !== vv && vv.isReady() ? jv.current.dev : null
            }
          }
        }), [av, Rv]), (0, hv.useEffect)((() => {
          const vv = dv.c.register(Wv),
            zv = pv.j.openCharacter(cv.current, wv);
          jv.current = zv;
          let Pv = !0;
          return zv.ready.then((() => {
            Pv && (nv(!0), Ov.current())
          })).catch((vv => {
            console.error("Failed to set up the character preview", vv)
          })), () => {
            Pv = !1, vv(), zv.resetCamera(), zv.close(), jv.current = null
          }
        }), []), (0, hv.useEffect)((() => {
          Gv <= 0 || mv <= 0 || jv.current.resize(Gv, mv)
        }), [Gv, mv]), (0, hv.useEffect)((() => {
          if (!Yv) return;
          const vv = Fv.current;
          for (const zv of ev.u) {
            const Pv = null === av || void 0 === av ? void 0 : av[zv],
              hv = vv[zv];
            Pv && Pv !== hv ? jv.current.setCosmetic(zv, Pv) : !Pv && hv && fv.current[zv] && jv.current.setCosmetic(zv, fv.current[zv])
          }
          Fv.current = {
            ...av
          }, Uv.current = !0, Rv()
        }), [av, Yv, Rv]), (0, hv.useEffect)((() => {
          Yv && jv.current.playEmote(null !== sv && void 0 !== sv ? sv : null)
        }), [sv, Cv, Yv]), (0, hv.useEffect)((() => {
          if (!Yv || null === iv) return;
          const vv = jv.current,
            {
              pitch: zv,
              radius: Pv
            } = pv.e[wv];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return vv.setOrbit({
            yaw: iv + lv,
            pitch: zv,
            radius: Pv
          }), () => {
            vv.resetCamera()
          };
          const hv = performance.now();
          let Sv = 0;
          const ev = gv => {
            vv.setOrbit({
              yaw: iv + (gv - hv) / 6e3 * 2 * Math.PI,
              pitch: zv,
              radius: Pv
            }), Sv = requestAnimationFrame(ev)
          };
          return Sv = requestAnimationFrame(ev), () => {
            cancelAnimationFrame(Sv), vv.resetCamera()
          }
        }), [Yv, iv]), (0, Nv.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: cv
        })
      })))
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);