export const id = 289;
export const ids = [289, 290];
export const modules = {
  40850: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      CharacterCustomisationUI: () => ak
    });
    var Dk = ik(60),
      fk = ik(2955),
      Sk = ik(1095),
      bk = ik(1893),
      rk = ik(1021),
      Pk = ik.n(rk),
      mk = ik(1218),
      Mk = ik(581),
      Kk = ik(1172),
      xk = ik(2195),
      nk = ik(1537),
      Uk = ik(8658),
      Hk = ik(2201),
      wk = ik(3060),
      lk = ik(1922),
      pk = ik(1410),
      yk = ik(2239),
      Yk = ik(22),
      Lk = ik(1459),
      Ck = ik(314),
      Ak = ik(40857),
      jk = ik(1530),
      sk = ik(2299),
      dk = ik(2946),
      Vk = ik(2130),
      Fk = ik(2540),
      uk = ik(1033);
    ik(33799), ik(3069);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var qk = ik(2250),
      Ik = ik(1345),
      zk = ik(1066);

    function Qk(kk, ek, ik) {
      return (0, xk.n)(kk, ek).purchasable && !(0, sk.r)(kk, ek, ik)
    }

    function vk(kk, ek) {
      return Object.entries(kk).some((kk => {
        let [ik, Dk] = kk;
        return Qk(ik, Dk, ek)
      }))
    }

    function Ek(kk) {
      var ek;
      let {
        pack: ik,
        ownedPacks: Dk,
        showStoreLink: fk = !1,
        children: Sk
      } = kk;
      const {
        t: bk
      } = (0, Kk.D)(), rk = jk.e[ik], mk = rk.purchasable && !Dk.includes(ik) && jk.t.includes(ik), Mk = dk.j[ik];
      return (0, zk.jsxs)("div", {
        className: Pk()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: mk
        }),
        children: [Mk && (0, zk.jsx)(Mk, {}), (0, zk.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, zk.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (ek = rk.displayName) && void 0 !== ek ? ek : ik
          }), (mk || fk) && (0, zk.jsxs)(pk.J, {
            onClick: () => {
              mk ? (0, dk.f)(ik) : (0, yk.m)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, zk.jsx)(uk.d, {
              name: "store"
            }), " ", bk("general:viewInShop")]
          })]
        }), mk && "bee" === ik && (0, zk.jsx)(dk.b, {}), Sk]
      })
    }

    function hk(kk) {
      let {
        equippedEmoteIds: ek,
        ownedPacks: ik,
        canBuy: Dk,
        onUpdateLoadout: fk,
        onEmoteSelected: Sk,
        onEquipPreviewSkin: bk
      } = kk;
      const {
        t: rk
      } = (0, Kk.D)(), Mk = new Set(ek), nk = new Map, Uk = Object.keys(xk.f.emote).sort(((kk, ek) => {
        var ik, Dk, fk, Sk;
        return (null !== (ik = null === (Dk = (0, xk.j)("emote", kk)) || void 0 === Dk ? void 0 : Dk.clientIdx) && void 0 !== ik ? ik : 0) - (null !== (fk = null === (Sk = (0, xk.j)("emote", ek)) || void 0 === Sk ? void 0 : Sk.clientIdx) && void 0 !== fk ? fk : 0)
      })).filter((kk => {
        const ek = (0, xk.n)("emote", kk),
          fk = (0, sk.r)("emote", kk, ik);
        return !(ek.purchasable && !fk && !Dk) && (ek.clientSelectable || fk)
      }));
      for (const Pk of Uk) {
        const kk = (0, xk.j)("emote", Pk).cosmeticPack;
        nk.has(kk) || nk.set(kk, []), nk.get(kk).push(Pk)
      }
      const wk = Array.from(nk.keys());
      return (0, zk.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, zk.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, zk.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: rk("emotes:equippedCount", {
              count: ek.length,
              max: mk.o
            })
          }), (0, zk.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: rk("emotes:loadoutHint")
          })]
        }), wk.map((kk => {
          const Dk = nk.get(kk);
          return (0, zk.jsx)(Ek, {
            pack: kk,
            ownedPacks: ik,
            children: (0, zk.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: Dk.map((kk => {
                var Dk;
                const bk = ek.indexOf(kk),
                  Kk = -1 !== bk,
                  xk = ek.length >= mk.o,
                  nk = Qk("emote", kk, ik),
                  Uk = nk || !Kk && xk,
                  wk = (0, Hk.g)(kk);
                return (0, zk.jsxs)("div", {
                  className: Pk()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Kk
                  }),
                  onClick: () => {
                    Sk(kk)
                  },
                  children: [(0, zk.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, zk.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${kk}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, zk.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (Dk = null === wk || void 0 === wk ? void 0 : wk.displayName) && void 0 !== Dk ? Dk : kk
                    })]
                  }), (0, zk.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Kk && (0, zk.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: bk + 1
                    }), nk && (0, zk.jsx)(uk.d, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, zk.jsx)(Ik.i, {
                      tooltipInner: (0, zk.jsx)(zk.Fragment, {
                        children: rk(Kk ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, zk.jsx)("div", {
                        className: Pk()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: Uk,
                          EmoteCustomPartToggleEquipped: Kk
                        }),
                        onClick: ik => {
                          ik.stopPropagation(), Uk || function(kk) {
                            Mk.has(kk) ? fk(ek.filter((ek => ek !== kk))) : ek.length >= mk.o || fk([...ek, kk])
                          }(kk)
                        },
                        children: (0, zk.jsx)(uk.d, {
                          name: Kk ? "minus" : "plus",
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
    const ak = (0, Dk.memo)((function(kk) {
      let {
        selectedTab: ek
      } = kk;
      const ik = "characters" === ek ? "skin" : ek,
        {
          t: rk
        } = (0, Kk.D)(),
        {
          userContext: Hk,
          isUserContextUpdating: dk
        } = (0, Sk.d)(),
        Ik = (0, fk.b)(),
        {
          gameState: ak,
          initSdkSelectorFinished: Wk
        } = (0, Yk.n)(["gameState", "initSdkSelectorFinished"]),
        [tk, Xk] = (0, Dk.useState)({}),
        [Bk, ck] = (0, Dk.useState)({}),
        {
          previewEmote: Tk,
          triggerEmote: Zk
        } = (0, wk.d)(),
        Ok = (0, Dk.useRef)(mk.y.reduce(((kk, ek) => (kk[ek] = (0, Uk.b)(ek), kk)), {})),
        gk = (0, Dk.useRef)(!1),
        Gk = (0, Dk.useRef)(null),
        Nk = (0, Dk.useRef)(null),
        Rk = (0, Dk.useRef)(null);

      function Jk() {
        null !== Nk.current && (clearTimeout(Nk.current), Nk.current = null);
        const kk = Rk.current;
        if (null === kk) return;
        Rk.current = null;
        const ek = {
          YD: "emote",
          LD: kk
        };
        null !== bk.gameBridge.latest("connectedGame").websocketUrl ? bk.gameBridge.send("updateMyCosmetic", ek) : Lk.b.updateCosmetics(Hk, [ek]).catch((kk => {
          console.error("Failed to update emote loadout", kk)
        }))
      }

      function ke(kk, ek, ik) {
        var Dk, fk, Sk;
        if (Ok.current = {
            ...Ok.current,
            [kk]: ek
          }, Ik(), ik) {
          const ik = {
            YD: kk,
            LD: ek
          };
          null !== bk.gameBridge.latest("connectedGame").websocketUrl ? bk.gameBridge.send("updateMyCosmetic", ik) : Lk.b.updateCosmetics(Hk, [ik]).catch((kk => {
            console.error("Failed to update cosmetic", kk)
          })), Hk.setPlayerCosmetics(kk, ek)
        }
        const rk = (0, xk.j)(kk, ek);
        if (null !== rk && void 0 !== rk && rk.colourGroup && null !== (Dk = jk.e[rk.cosmeticPack].colourGroups) && void 0 !== Dk && null !== (fk = Dk[rk.colourGroup]) && void 0 !== fk && fk.showSwatchSelector) {
          const ik = (0, xk.g)(ek);
          ik && ck((ek => ({
            ...ek,
            [`${rk.cosmeticPack}_${kk}_${rk.colourGroup}`]: parseInt(ik[1])
          })))
        }
        null !== (Sk = Gk.current) && void 0 !== Sk && Sk.isReady() && Gk.current.updateCosmetic(kk, ek)
      }

      function ee(kk) {
        return Object.entries(kk).every((kk => {
          let [ek, ik] = kk;
          return tk[ek] === ik
        }))
      }(0, lk.c)("cosmeticsUpdated", (kk => {
        let ek = !1;
        for (const {
            local: ik,
            YD: Dk,
            LD: fk
          }
          of kk) {
          if (!ik) return;
          ek = !0, gk.current || ke(Dk, fk, !1), Ik()
        }
        ek && (gk.current = !0)
      })), (0, Dk.useEffect)((() => {
        if (!dk) {
          for (const [kk, ek] of Object.entries(Hk.getPlayerCosmetics())) ke(kk, ek, !1);
          Ik()
        }
      }), [dk]), (0, Dk.useEffect)((() => () => {
        Jk()
      }), []);
      const ie = Hk.getOwnedCosmeticPacks(),
        De = (0, qk.purchasesAllowed)(),
        fe = Object.keys(xk.f[ik]).filter((kk => {
          const ek = (0, xk.n)(ik, kk),
            Dk = (0, sk.r)(ik, kk, ie);
          return !(ek.purchasable && !Dk && !De) && (ek.clientSelectable || Dk)
        })).sort(((kk, ek) => {
          var Dk, fk, Sk, bk;
          return (null !== (Dk = null === (fk = (0, xk.j)(ik, kk)) || void 0 === fk ? void 0 : fk.clientIdx) && void 0 !== Dk ? Dk : 0) - (null !== (Sk = null === (bk = (0, xk.j)(ik, ek)) || void 0 === bk ? void 0 : bk.clientIdx) && void 0 !== Sk ? Sk : 0)
        })),
        Se = new Map;
      for (const Dk of fe) {
        var be;
        const kk = null === (be = (0, xk.j)(ik, Dk)) || void 0 === be ? void 0 : be.cosmeticPack;
        Se.has(kk) || Se.set(kk, []), Se.get(kk).push(Dk)
      }
      const re = function(kk, ek) {
          const ik = new Set,
            Dk = new Set;
          for (const [fk, Sk] of Object.entries(xk.f[kk])) {
            if (void 0 === Sk.colourGroup) continue;
            const bk = `${Sk.cosmeticPack}_${Sk.colourGroup}`;
            (Qk(kk, fk, ek) ? Dk : ik).add(bk)
          }
          return new Set([...ik].filter((kk => Dk.has(kk))))
        }(ik, ie),
        Pe = new Map;
      for (const [Dk, fk] of Se) {
        const kk = [],
          ek = new Map;
        for (const Dk of fk) {
          var me, Me;
          const fk = null !== (me = null === (Me = (0, xk.j)(ik, Dk)) || void 0 === Me ? void 0 : Me.colourGroup) && void 0 !== me ? me : null;
          ek.has(fk) || (ek.set(fk, []), kk.push(fk)), ek.get(fk).push(Dk)
        }
        const Sk = kk.map((kk => {
          var fk;
          const Sk = ek.get(kk),
            bk = kk ? null === (fk = jk.e[Dk].colourGroups) || void 0 === fk ? void 0 : fk[kk] : void 0,
            rk = !0 === (null === bk || void 0 === bk ? void 0 : bk.showSwatchSelector) && !re.has(`${Dk}_${kk}`);
          if (rk && bk) {
            var Pk;
            const ek = null !== (Pk = Bk[`${Dk}_${ik}_${kk}`]) && void 0 !== Pk ? Pk : (0, jk.j)(bk.colours);
            return {
              groupName: kk,
              showSwatch: rk,
              cosmetics: Sk.filter((kk => {
                const ik = (0, xk.g)(kk);
                return !ik || ek.toString() === ik[1].toString()
              }))
            }
          }
          return {
            groupName: kk,
            cosmetics: Sk,
            showSwatch: rk
          }
        }));
        Pe.set(Dk, Sk)
      }
      const Ke = Array.from(Se.keys()),
        xe = new Map;
      for (const [Dk, fk] of Object.entries(nk.c)) {
        const kk = jk.e[fk.cosmeticPack],
          ek = !vk(fk.cosmetics, ie),
          ik = jk.n.some((kk => (0, jk.f)(kk) === Dk));
        (kk.clientSelectable || ik || ek) && ((!kk.purchasable || ek || De) && (xe.has(fk.cosmeticPack) || xe.set(fk.cosmeticPack, []), xe.get(fk.cosmeticPack).push([Dk, fk])))
      }
      const ne = Array.from(xe.keys());
      return (0, zk.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === ik || "nameColour" === ik) && !Hk.playerHasRank("super") && (0, zk.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, zk.jsx)(uk.d, {
            name: "bolt"
          }), rk("homePage:unlockWithSuperRank"), De && (0, zk.jsx)(pk.r, {
            onClick: () => {
              (0, yk.m)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: rk("general:getItNow")
          })]
        }), (0, zk.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === ek && (0, zk.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, ne.map((kk => {
              const ek = xe.get(kk);
              return (0, zk.jsx)(Ek, {
                pack: kk,
                ownedPacks: ie,
                showStoreLink: !jk.r.includes(kk) && ek.some((kk => {
                  let [, {
                    cosmetics: ek
                  }] = kk;
                  return vk(ek, ie)
                })),
                children: (0, zk.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: ek.map((kk => {
                    let [ek, {
                      cosmetics: ik
                    }] = kk;
                    const Dk = vk(ik, ie),
                      fk = ee(ik),
                      Sk = !fk && Object.entries(ik).every((kk => {
                        let [ek, ik] = kk;
                        return Ok.current[ek] === ik
                      }));
                    return (0, zk.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: Pk()("CharacterPresetCard", {
                        CharacterPresetCardActive: Sk,
                        CharacterPresetCardTryingOn: fk
                      }),
                      onClick: () => {
                        if (Dk) ! function(kk) {
                          ee(kk) ? Xk({}) : Xk({
                            ...kk
                          })
                        }(ik);
                        else {
                          Object.keys(tk).length > 0 && Xk({});
                          const kk = Object.entries(ik);
                          for (const [ek, ik] of kk) ke(ek, ik, !1), Hk.setPlayerCosmetics(ek, ik);
                          if (null !== bk.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [ek, ik] of kk) bk.gameBridge.send("updateMyCosmetic", {
                              YD: ek,
                              LD: ik
                            });
                          else Lk.b.updateCosmetics(Hk, kk.map((kk => {
                            let [ek, ik] = kk;
                            return {
                              YD: ek,
                              LD: ik
                            }
                          }))).catch((kk => {
                            console.error("Failed to update cosmetics", kk)
                          }))
                        }
                      },
                      children: [(0, zk.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${ek}_preview.png)`
                        }
                      }), Dk && (0, zk.jsx)(uk.d, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, ek)
                  }))
                })
              }, kk)
            }))]
          }), "emote" === ek && (0, zk.jsx)(hk, {
            equippedEmoteIds: (0, Uk.f)(Ok.current.emote),
            ownedPacks: ie,
            canBuy: De,
            onUpdateLoadout: kk => {
              const ek = (0, Uk.i)(kk);
              var ik;
              Ok.current = {
                ...Ok.current,
                emote: ek
              }, Hk.setPlayerCosmetics("emote", ek), Ik(), ik = ek, Rk.current = ik, null !== Nk.current && clearTimeout(Nk.current), Nk.current = setTimeout(Jk, 350)
            },
            onEmoteSelected: Zk,
            onEquipPreviewSkin: () => {
              ! function(kk, ek) {
                for (const ik of mk.y) "cape" !== ik && "nameColour" !== ik && "emote" !== ik && kk(ik, "skin" === ik ? "skin_preview" : `${ik}_none`, !1);
                ek()
              }(ke, Ik)
            }
          }), "characters" !== ek && "emote" !== ek && (0, zk.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Ke.map((kk => {
              const ek = Pe.get(kk);
              return (0, zk.jsx)(Ek, {
                pack: kk,
                ownedPacks: ie,
                children: ek.map((ek => {
                  var Dk;
                  let {
                    groupName: fk,
                    cosmetics: Sk,
                    showSwatch: bk
                  } = ek;
                  const rk = fk ? null === (Dk = jk.e[kk].colourGroups) || void 0 === Dk ? void 0 : Dk[fk] : void 0,
                    mk = `${kk}_${ik}_${fk}`;
                  return (0, zk.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [bk && rk && (0, zk.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...rk.colours.map(((kk, ek) => ({
                        color: kk,
                        index: ek
                      })))].sort(((kk, ek) => kk.color.order - ek.color.order)).map((ek => {
                        var Dk;
                        let {
                          color: Sk,
                          index: bk
                        } = ek;
                        return (0, zk.jsx)("div", {
                          className: Pk()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (Dk = Bk[mk]) && void 0 !== Dk ? Dk : (0, jk.j)(rk.colours)) === bk
                          }),
                          style: {
                            backgroundColor: `rgb(${Sk.rbg.join(",")})`
                          },
                          onClick: () => {
                            var ek;
                            ck((kk => ({
                              ...kk,
                              [mk]: bk
                            })));
                            const Dk = tk[ik],
                              Sk = Dk ? (0, xk.j)(ik, Dk) : null,
                              rk = (null === Sk || void 0 === Sk ? void 0 : Sk.cosmeticPack) === kk,
                              Pk = rk ? Dk : Ok.current[ik],
                              Mk = rk ? Sk : (0, xk.j)(ik, Pk);
                            if ((null === Mk || void 0 === Mk ? void 0 : Mk.cosmeticPack) !== kk) return;
                            if ((null !== (ek = null === Mk || void 0 === Mk ? void 0 : Mk.colourGroup) && void 0 !== ek ? ek : null) !== fk) return;
                            const Kk = (0, xk.g)(Pk);
                            if (Kk) {
                              const kk = `${ik}_${Kk[0]}_${bk}`;
                              rk ? Xk((ek => ({
                                ...ek,
                                [ik]: kk
                              }))) : ke(ik, kk, !0)
                            }
                          }
                        }, Sk.rbg.join())
                      }))
                    }), Sk.map((kk => {
                      const ek = kk === Ok.current[ik],
                        Dk = tk[ik] === kk,
                        fk = Qk(ik, kk, ie);
                      let Sk = !0;
                      return fk || ek || ("cape" !== ik || (0, Ck.Ad)(Hk.getPlayerRanks(), kk)) && ("nameColour" !== ik || Hk.playerHasRank("super")) || (Sk = !1), (0, zk.jsxs)("div", {
                        className: Pk()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: ek && !Dk,
                          TryingOnCharCustomPartWrapper: Dk,
                          DisabledCharCustomPartWrapper: !Sk,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === ik
                        }),
                        onClick: () => {
                          if (Sk)
                            if (fk) Xk((ek => {
                              if (ek[ik] === kk) {
                                const kk = {
                                  ...ek
                                };
                                return delete kk[ik], kk
                              }
                              return {
                                ...ek,
                                [ik]: kk
                              }
                            }));
                            else {
                              var ek;
                              if (tk[ik] && Xk((kk => {
                                  const ek = {
                                    ...kk
                                  };
                                  return delete ek[ik], ek
                                })), kk === Ok.current[ik]) return;
                              null !== (ek = Gk.current) && void 0 !== ek && ek.isReady() && ke(ik, kk, !0)
                            }
                        },
                        children: ["profileEffect" === ik ? (0, zk.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, zk.jsx)(Fk.d, {
                            playerSocialPreview: (0, Vk.c)(kk, {
                              name: Hk.getPlayerName(),
                              cosmetics: Hk.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, zk.jsx)("div", {
                          className: Pk()("CharCustomPart", {
                            PixelatedImage: "cape" === ik
                          }),
                          style: (0, xk.j)(ik, kk).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,xk.j)(ik,kk).previewTex}.png)`
                          } : {
                            backgroundColor: Mk.o[kk]
                          }
                        }), fk && (0, zk.jsx)(uk.d, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, kk)
                    }))]
                  }, null !== fk && void 0 !== fk ? fk : "ungrouped")
                }))
              }, kk)
            }))]
          }), (0, zk.jsx)(Ak.CharacterPreview, {
            ref: Gk,
            forcedCosmetics: tk,
            gP: Tk.id,
            emotePlaySeq: Tk.seq,
            onReady: () => {
              for (const kk of mk.y) ke(kk, Ok.current[kk], !1)
            }
          })]
        })]
      })
    }))
  },
  40857: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      CharacterPreview: () => Kk
    });
    var Dk = ik(60),
      fk = ik(2683),
      Sk = ik(1218),
      bk = ik(8658),
      rk = ik(33799),
      Pk = ik(3590),
      mk = ik(1066);
    const Mk = .6 * Math.PI,
      Kk = (0, Dk.memo)((0, Dk.forwardRef)((function(kk, ek) {
        let {
          onReady: ik,
          onDrawn: Kk,
          owner: xk = "other",
          framing: nk = "player",
          forcedCosmetics: Uk,
          gP: Hk,
          emotePlaySeq: wk,
          turntableFromYaw: lk = null
        } = kk;
        const pk = (0, Dk.useRef)(null),
          {
            width: yk,
            height: Yk
          } = (0, fk.c)(pk),
          Lk = (0, Dk.useRef)(null),
          Ck = (0, Dk.useRef)({}),
          Ak = (0, Dk.useRef)({}),
          [jk, sk] = (0, Dk.useState)(!1),
          dk = (0, Dk.useRef)(ik);
        dk.current = ik;
        const Vk = (0, Dk.useRef)(Kk);
        Vk.current = Kk;
        const Fk = (0, Dk.useRef)(null),
          uk = (0, Dk.useRef)(!1),
          qk = (0, Dk.useRef)(!1),
          Ik = (0, Dk.useCallback)((() => {
            const kk = Lk.current;
            if (!kk || !Vk.current || uk.current || !qk.current) return;
            const ek = {};
            Fk.current = ek, queueMicrotask((() => {
              if (Fk.current !== ek) return;
              const ik = Promise.all(Sk.y.map((ek => kk.untilDrawn(ek)))).catch((kk => {
                  console.error("Failed to draw the character preview", kk)
                })),
                Dk = new Promise((kk => {
                  setTimeout(kk, 1e4)
                }));
              Promise.race([ik, Dk]).then((() => {
                var ik;
                Lk.current !== kk || Fk.current !== ek || uk.current || (uk.current = !0, null === (ik = Vk.current) || void 0 === ik || ik.call(Vk))
              }))
            }))
          }), []);
        return (0, Dk.useImperativeHandle)(ek, (() => {
          const kk = (kk, ek) => {
            var ik;
            (Ck.current[kk] = ek, null !== Uk && void 0 !== Uk && Uk[kk]) || (null === (ik = Lk.current) || void 0 === ik || ik.setCosmetic(kk, ek), Ik())
          };
          return {
            updateCosmetic: kk,
            setAllCosmetics(ek) {
              for (const Dk of Sk.y) {
                var ik;
                kk(Dk, null !== (ik = ek[Dk]) && void 0 !== ik ? ik : (0, bk.b)(Dk))
              }
            },
            isReady() {
              var kk, ek;
              return null !== (kk = null === (ek = Lk.current) || void 0 === ek ? void 0 : ek.isReady()) && void 0 !== kk && kk
            },
            resetCamera() {
              var kk;
              null === (kk = Lk.current) || void 0 === kk || kk.resetCamera()
            },
            setOrbit(kk) {
              var ek;
              null === (ek = Lk.current) || void 0 === ek || ek.setOrbit(kk)
            },
            async ensureReadyForCapture(kk) {
              var ek;
              await (null === (ek = Lk.current) || void 0 === ek ? void 0 : ek.untilDrawn(kk))
            },
            getDevTools() {
              var kk;
              return null !== (kk = Lk.current) && void 0 !== kk && kk.isReady() ? Lk.current.dev : null
            }
          }
        }), [Uk, Ik]), (0, Dk.useEffect)((() => {
          const kk = Pk.b.register(xk),
            ek = rk.h.openCharacter(pk.current, nk);
          Lk.current = ek;
          let ik = !0;
          return ek.ready.then((() => {
            ik && (sk(!0), dk.current())
          })).catch((kk => {
            console.error("Failed to set up the character preview", kk)
          })), () => {
            ik = !1, kk(), ek.resetCamera(), ek.close(), Lk.current = null
          }
        }), []), (0, Dk.useEffect)((() => {
          yk <= 0 || Yk <= 0 || Lk.current.resize(yk, Yk)
        }), [yk, Yk]), (0, Dk.useEffect)((() => {
          if (!jk) return;
          const kk = Ak.current;
          for (const ek of Sk.y) {
            const ik = null === Uk || void 0 === Uk ? void 0 : Uk[ek],
              Dk = kk[ek];
            ik && ik !== Dk ? Lk.current.setCosmetic(ek, ik) : !ik && Dk && Ck.current[ek] && Lk.current.setCosmetic(ek, Ck.current[ek])
          }
          Ak.current = {
            ...Uk
          }, qk.current = !0, Ik()
        }), [Uk, jk, Ik]), (0, Dk.useEffect)((() => {
          jk && Lk.current.playEmote(null !== Hk && void 0 !== Hk ? Hk : null)
        }), [Hk, wk, jk]), (0, Dk.useEffect)((() => {
          if (!jk || null === lk) return;
          const kk = Lk.current,
            {
              pitch: ek,
              radius: ik
            } = rk.d[nk];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return kk.setOrbit({
            yaw: lk + Mk,
            pitch: ek,
            radius: ik
          }), () => {
            kk.resetCamera()
          };
          const Dk = performance.now();
          let fk = 0;
          const Sk = bk => {
            kk.setOrbit({
              yaw: lk + (bk - Dk) / 6e3 * 2 * Math.PI,
              pitch: ek,
              radius: ik
            }), fk = requestAnimationFrame(Sk)
          };
          return fk = requestAnimationFrame(Sk), () => {
            cancelAnimationFrame(fk), kk.resetCamera()
          }
        }), [jk, lk]), (0, mk.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: pk
        })
      })))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);