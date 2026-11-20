export const id = 281;
export const ids = [281, 282];
export const modules = {
  40717: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      CharacterCustomisationUI: () => zk
    });
    var Rk = Bk(61),
      tk = Bk(2789),
      ak = Bk(1096),
      Xk = Bk(1847),
      bk = Bk(1020),
      wk = Bk.n(bk),
      dk = Bk(1192),
      sk = Bk(586),
      Vk = Bk(1149),
      Jk = Bk(2124),
      Ak = Bk(1512),
      ek = Bk(8500),
      yk = Bk(2133),
      fk = Bk(2888),
      mk = Bk(1876),
      Wk = Bk(1389),
      vk = Bk(2170),
      ik = Bk(22),
      Yk = Bk(1441),
      Lk = Bk(291),
      Ok = Bk(40720),
      Ek = Bk(1506),
      Sk = Bk(2228),
      Nk = Bk(2785),
      Hk = Bk(2049),
      uk = Bk(2436),
      Mk = Bk(1028);
    Bk(9039), Bk(2895);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var gk = Bk(2182),
      Uk = Bk(1312),
      ck = Bk(1069);

    function Gk(kk, Fk, Bk) {
      return (0, Jk.r)(kk, Fk).purchasable && !(0, Sk.q)(kk, Fk, Bk)
    }

    function Tk(kk, Fk) {
      return Object.entries(kk).some((kk => {
        let [Bk, Rk] = kk;
        return Gk(Bk, Rk, Fk)
      }))
    }

    function rk(kk) {
      var Fk;
      let {
        pack: Bk,
        ownedPacks: Rk,
        showStoreLink: tk = !1,
        children: ak
      } = kk;
      const {
        t: Xk
      } = (0, Vk.x)(), bk = Ek.d[Bk], dk = bk.purchasable && !Rk.includes(Bk) && Ek.v.includes(Bk), sk = Nk.n[Bk];
      return (0, ck.jsxs)("div", {
        className: wk()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: dk
        }),
        children: [sk && (0, ck.jsx)(sk, {}), (0, ck.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, ck.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (Fk = bk.displayName) && void 0 !== Fk ? Fk : Bk
          }), (dk || tk) && (0, ck.jsxs)(Wk.F, {
            onClick: () => {
              dk ? (0, Nk.l)(Bk) : (0, vk.m)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, ck.jsx)(Mk.d, {
              name: "store"
            }), " ", Xk("general:viewInShop")]
          })]
        }), dk && "bee" === Bk && (0, ck.jsx)(Nk.e, {}), ak]
      })
    }

    function Dk(kk) {
      let {
        equippedEmoteIds: Fk,
        ownedPacks: Bk,
        canBuy: Rk,
        onUpdateLoadout: tk,
        onEmoteSelected: ak,
        onEquipPreviewSkin: Xk
      } = kk;
      const {
        t: bk
      } = (0, Vk.x)(), sk = new Set(Fk), Ak = new Map, ek = Object.keys(Jk.h.emote).sort(((kk, Fk) => {
        var Bk, Rk, tk, ak;
        return (null !== (Bk = null === (Rk = (0, Jk.o)("emote", kk)) || void 0 === Rk ? void 0 : Rk.clientIdx) && void 0 !== Bk ? Bk : 0) - (null !== (tk = null === (ak = (0, Jk.o)("emote", Fk)) || void 0 === ak ? void 0 : ak.clientIdx) && void 0 !== tk ? tk : 0)
      })).filter((kk => {
        const Fk = (0, Jk.r)("emote", kk),
          tk = (0, Sk.q)("emote", kk, Bk);
        return !(Fk.purchasable && !tk && !Rk) && (Fk.clientSelectable || tk)
      }));
      for (const wk of ek) {
        const kk = (0, Jk.o)("emote", wk).cosmeticPack;
        Ak.has(kk) || Ak.set(kk, []), Ak.get(kk).push(wk)
      }
      const fk = Array.from(Ak.keys());
      return (0, ck.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, ck.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, ck.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: bk("emotes:equippedCount", {
              count: Fk.length,
              max: dk.l
            })
          }), (0, ck.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: bk("emotes:loadoutHint")
          })]
        }), fk.map((kk => {
          const Rk = Ak.get(kk);
          return (0, ck.jsx)(rk, {
            pack: kk,
            ownedPacks: Bk,
            children: (0, ck.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: Rk.map((kk => {
                var Rk;
                const Xk = Fk.indexOf(kk),
                  Vk = -1 !== Xk,
                  Jk = Fk.length >= dk.l,
                  Ak = Gk("emote", kk, Bk),
                  ek = Ak || !Vk && Jk,
                  fk = (0, yk.j)(kk);
                return (0, ck.jsxs)("div", {
                  className: wk()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Vk
                  }),
                  onClick: () => {
                    ak(kk)
                  },
                  children: [(0, ck.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, ck.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${kk}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, ck.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (Rk = null === fk || void 0 === fk ? void 0 : fk.displayName) && void 0 !== Rk ? Rk : kk
                    })]
                  }), (0, ck.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Vk && (0, ck.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: Xk + 1
                    }), Ak && (0, ck.jsx)(Mk.d, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, ck.jsx)(Uk.d, {
                      tooltipInner: (0, ck.jsx)(ck.Fragment, {
                        children: bk(Vk ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, ck.jsx)("div", {
                        className: wk()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: ek,
                          EmoteCustomPartToggleEquipped: Vk
                        }),
                        onClick: Bk => {
                          Bk.stopPropagation(), ek || function(kk) {
                            sk.has(kk) ? tk(Fk.filter((Fk => Fk !== kk))) : Fk.length >= dk.l || tk([...Fk, kk])
                          }(kk)
                        },
                        children: (0, ck.jsx)(Mk.d, {
                          name: Vk ? "minus" : "plus",
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
    const zk = (0, Rk.memo)((function(kk) {
      let {
        selectedTab: Fk
      } = kk;
      const Bk = "characters" === Fk ? "skin" : Fk,
        {
          t: bk
        } = (0, Vk.x)(),
        {
          userContext: yk,
          isUserContextUpdating: Nk
        } = (0, ak.e)(),
        Uk = (0, tk.b)(),
        {
          gameState: zk,
          initSdkSelectorFinished: Pk
        } = (0, ik.h)(["gameState", "initSdkSelectorFinished"]),
        [hk, qk] = (0, Rk.useState)({}),
        [Ck, Zk] = (0, Rk.useState)({}),
        {
          previewEmote: pk,
          triggerEmote: Kk
        } = (0, fk.b)(),
        xk = (0, Rk.useRef)(dk.t.reduce(((kk, Fk) => (kk[Fk] = (0, ek.c)(Fk), kk)), {})),
        jk = (0, Rk.useRef)(!1),
        lk = (0, Rk.useRef)(null),
        nk = (0, Rk.useRef)(null),
        Ik = (0, Rk.useRef)(null);

      function Qk() {
        null !== nk.current && (clearTimeout(nk.current), nk.current = null);
        const kk = Ik.current;
        if (null === kk) return;
        Ik.current = null;
        const Fk = {
          hB: "emote",
          qB: kk
        };
        null !== Xk.gameBridge.latest("connectedGame").websocketUrl ? Xk.gameBridge.send("updateMyCosmetic", Fk) : Yk.b.updateCosmetics(yk, [Fk]).catch((kk => {
          console.error("Failed to update emote loadout", kk)
        }))
      }

      function kF(kk, Fk, Bk) {
        var Rk, tk, ak;
        if (xk.current = {
            ...xk.current,
            [kk]: Fk
          }, Uk(), Bk) {
          const Bk = {
            hB: kk,
            qB: Fk
          };
          null !== Xk.gameBridge.latest("connectedGame").websocketUrl ? Xk.gameBridge.send("updateMyCosmetic", Bk) : Yk.b.updateCosmetics(yk, [Bk]).catch((kk => {
            console.error("Failed to update cosmetic", kk)
          })), yk.setPlayerCosmetics(kk, Fk)
        }
        const bk = (0, Jk.o)(kk, Fk);
        if (null !== bk && void 0 !== bk && bk.colourGroup && null !== (Rk = Ek.d[bk.cosmeticPack].colourGroups) && void 0 !== Rk && null !== (tk = Rk[bk.colourGroup]) && void 0 !== tk && tk.showSwatchSelector) {
          const Bk = (0, Jk.k)(Fk);
          Bk && Zk((Fk => ({
            ...Fk,
            [`${bk.cosmeticPack}_${kk}_${bk.colourGroup}`]: parseInt(Bk[1])
          })))
        }
        null !== (ak = lk.current) && void 0 !== ak && ak.isReady() && lk.current.updateCosmetic(kk, Fk)
      }

      function FF(kk) {
        return Object.entries(kk).every((kk => {
          let [Fk, Bk] = kk;
          return hk[Fk] === Bk
        }))
      }(0, mk.b)("cosmeticsUpdated", (kk => {
        let Fk = !1;
        for (const {
            local: Bk,
            hB: Rk,
            qB: tk
          }
          of kk) {
          if (!Bk) return;
          Fk = !0, jk.current || kF(Rk, tk, !1), Uk()
        }
        Fk && (jk.current = !0)
      })), (0, Rk.useEffect)((() => {
        if (!Nk) {
          for (const [kk, Fk] of Object.entries(yk.getPlayerCosmetics())) kF(kk, Fk, !1);
          Uk()
        }
      }), [Nk]), (0, Rk.useEffect)((() => () => {
        Qk()
      }), []);
      const BF = yk.getOwnedCosmeticPacks(),
        RF = (0, gk.purchasesAllowed)(),
        tF = Object.keys(Jk.h[Bk]).filter((kk => {
          const Fk = (0, Jk.r)(Bk, kk),
            Rk = (0, Sk.q)(Bk, kk, BF);
          return !(Fk.purchasable && !Rk && !RF) && (Fk.clientSelectable || Rk)
        })).sort(((kk, Fk) => {
          var Rk, tk, ak, Xk;
          return (null !== (Rk = null === (tk = (0, Jk.o)(Bk, kk)) || void 0 === tk ? void 0 : tk.clientIdx) && void 0 !== Rk ? Rk : 0) - (null !== (ak = null === (Xk = (0, Jk.o)(Bk, Fk)) || void 0 === Xk ? void 0 : Xk.clientIdx) && void 0 !== ak ? ak : 0)
        })),
        aF = new Map;
      for (const Rk of tF) {
        var XF;
        const kk = null === (XF = (0, Jk.o)(Bk, Rk)) || void 0 === XF ? void 0 : XF.cosmeticPack;
        aF.has(kk) || aF.set(kk, []), aF.get(kk).push(Rk)
      }
      const bF = function(kk, Fk) {
          const Bk = new Set,
            Rk = new Set;
          for (const [tk, ak] of Object.entries(Jk.h[kk])) {
            if (void 0 === ak.colourGroup) continue;
            const Xk = `${ak.cosmeticPack}_${ak.colourGroup}`;
            (Gk(kk, tk, Fk) ? Rk : Bk).add(Xk)
          }
          return new Set([...Bk].filter((kk => Rk.has(kk))))
        }(Bk, BF),
        wF = new Map;
      for (const [Rk, tk] of aF) {
        const kk = [],
          Fk = new Map;
        for (const Rk of tk) {
          var dF, sF;
          const tk = null !== (dF = null === (sF = (0, Jk.o)(Bk, Rk)) || void 0 === sF ? void 0 : sF.colourGroup) && void 0 !== dF ? dF : null;
          Fk.has(tk) || (Fk.set(tk, []), kk.push(tk)), Fk.get(tk).push(Rk)
        }
        const ak = kk.map((kk => {
          var tk;
          const ak = Fk.get(kk),
            Xk = kk ? null === (tk = Ek.d[Rk].colourGroups) || void 0 === tk ? void 0 : tk[kk] : void 0,
            bk = !0 === (null === Xk || void 0 === Xk ? void 0 : Xk.showSwatchSelector) && !bF.has(`${Rk}_${kk}`);
          if (bk && Xk) {
            var wk;
            const Fk = null !== (wk = Ck[`${Rk}_${Bk}_${kk}`]) && void 0 !== wk ? wk : (0, Ek.k)(Xk.colours);
            return {
              groupName: kk,
              showSwatch: bk,
              cosmetics: ak.filter((kk => {
                const Bk = (0, Jk.k)(kk);
                return !Bk || Fk.toString() === Bk[1].toString()
              }))
            }
          }
          return {
            groupName: kk,
            cosmetics: ak,
            showSwatch: bk
          }
        }));
        wF.set(Rk, ak)
      }
      const VF = Array.from(aF.keys()),
        JF = new Map;
      for (const [Rk, tk] of Object.entries(Ak.d)) {
        const kk = Ek.d[tk.cosmeticPack],
          Fk = !Tk(tk.cosmetics, BF),
          Bk = Ek.o.some((kk => (0, Ek.g)(kk) === Rk));
        (kk.clientSelectable || Bk || Fk) && ((!kk.purchasable || Fk || RF) && (JF.has(tk.cosmeticPack) || JF.set(tk.cosmeticPack, []), JF.get(tk.cosmeticPack).push([Rk, tk])))
      }
      const AF = Array.from(JF.keys());
      return (0, ck.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === Bk || "nameColour" === Bk) && !yk.playerHasRank("super") && (0, ck.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, ck.jsx)(Mk.d, {
            name: "bolt"
          }), bk("homePage:unlockWithSuperRank"), RF && (0, ck.jsx)(Wk.o, {
            onClick: () => {
              (0, vk.m)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: bk("general:getItNow")
          })]
        }), (0, ck.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === Fk && (0, ck.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, AF.map((kk => {
              const Fk = JF.get(kk);
              return (0, ck.jsx)(rk, {
                pack: kk,
                ownedPacks: BF,
                showStoreLink: !Ek.r.includes(kk) && Fk.some((kk => {
                  let [, {
                    cosmetics: Fk
                  }] = kk;
                  return Tk(Fk, BF)
                })),
                children: (0, ck.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: Fk.map((kk => {
                    let [Fk, {
                      cosmetics: Bk
                    }] = kk;
                    const Rk = Tk(Bk, BF),
                      tk = FF(Bk),
                      ak = !tk && Object.entries(Bk).every((kk => {
                        let [Fk, Bk] = kk;
                        return xk.current[Fk] === Bk
                      }));
                    return (0, ck.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: wk()("CharacterPresetCard", {
                        CharacterPresetCardActive: ak,
                        CharacterPresetCardTryingOn: tk
                      }),
                      onClick: () => {
                        if (Rk) ! function(kk) {
                          FF(kk) ? qk({}) : qk({
                            ...kk
                          })
                        }(Bk);
                        else {
                          Object.keys(hk).length > 0 && qk({});
                          const kk = Object.entries(Bk);
                          for (const [Fk, Bk] of kk) kF(Fk, Bk, !1), yk.setPlayerCosmetics(Fk, Bk);
                          if (null !== Xk.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [Fk, Bk] of kk) Xk.gameBridge.send("updateMyCosmetic", {
                              hB: Fk,
                              qB: Bk
                            });
                          else Yk.b.updateCosmetics(yk, kk.map((kk => {
                            let [Fk, Bk] = kk;
                            return {
                              hB: Fk,
                              qB: Bk
                            }
                          }))).catch((kk => {
                            console.error("Failed to update cosmetics", kk)
                          }))
                        }
                      },
                      children: [(0, ck.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${Fk}_preview.png)`
                        }
                      }), Rk && (0, ck.jsx)(Mk.d, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, Fk)
                  }))
                })
              }, kk)
            }))]
          }), "emote" === Fk && (0, ck.jsx)(Dk, {
            equippedEmoteIds: (0, ek.f)(xk.current.emote),
            ownedPacks: BF,
            canBuy: RF,
            onUpdateLoadout: kk => {
              const Fk = (0, ek.i)(kk);
              var Bk;
              xk.current = {
                ...xk.current,
                emote: Fk
              }, yk.setPlayerCosmetics("emote", Fk), Uk(), Bk = Fk, Ik.current = Bk, null !== nk.current && clearTimeout(nk.current), nk.current = setTimeout(Qk, 350)
            },
            onEmoteSelected: Kk,
            onEquipPreviewSkin: () => {
              ! function(kk, Fk) {
                for (const Bk of dk.t) "cape" !== Bk && "nameColour" !== Bk && "emote" !== Bk && kk(Bk, "skin" === Bk ? "skin_preview" : `${Bk}_none`, !1);
                Fk()
              }(kF, Uk)
            }
          }), "characters" !== Fk && "emote" !== Fk && (0, ck.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, VF.map((kk => {
              const Fk = wF.get(kk);
              return (0, ck.jsx)(rk, {
                pack: kk,
                ownedPacks: BF,
                children: Fk.map((Fk => {
                  var Rk;
                  let {
                    groupName: tk,
                    cosmetics: ak,
                    showSwatch: Xk
                  } = Fk;
                  const bk = tk ? null === (Rk = Ek.d[kk].colourGroups) || void 0 === Rk ? void 0 : Rk[tk] : void 0,
                    dk = `${kk}_${Bk}_${tk}`;
                  return (0, ck.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [Xk && bk && (0, ck.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...bk.colours.map(((kk, Fk) => ({
                        color: kk,
                        index: Fk
                      })))].sort(((kk, Fk) => kk.color.order - Fk.color.order)).map((Fk => {
                        var Rk;
                        let {
                          color: ak,
                          index: Xk
                        } = Fk;
                        return (0, ck.jsx)("div", {
                          className: wk()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (Rk = Ck[dk]) && void 0 !== Rk ? Rk : (0, Ek.k)(bk.colours)) === Xk
                          }),
                          style: {
                            backgroundColor: `rgb(${ak.rbg.join(",")})`
                          },
                          onClick: () => {
                            var Fk;
                            Zk((kk => ({
                              ...kk,
                              [dk]: Xk
                            })));
                            const Rk = hk[Bk],
                              ak = Rk ? (0, Jk.o)(Bk, Rk) : null,
                              bk = (null === ak || void 0 === ak ? void 0 : ak.cosmeticPack) === kk,
                              wk = bk ? Rk : xk.current[Bk],
                              sk = bk ? ak : (0, Jk.o)(Bk, wk);
                            if ((null === sk || void 0 === sk ? void 0 : sk.cosmeticPack) !== kk) return;
                            if ((null !== (Fk = null === sk || void 0 === sk ? void 0 : sk.colourGroup) && void 0 !== Fk ? Fk : null) !== tk) return;
                            const Vk = (0, Jk.k)(wk);
                            if (Vk) {
                              const kk = `${Bk}_${Vk[0]}_${Xk}`;
                              bk ? qk((Fk => ({
                                ...Fk,
                                [Bk]: kk
                              }))) : kF(Bk, kk, !0)
                            }
                          }
                        }, ak.rbg.join())
                      }))
                    }), ak.map((kk => {
                      const Fk = kk === xk.current[Bk],
                        Rk = hk[Bk] === kk,
                        tk = Gk(Bk, kk, BF);
                      let ak = !0;
                      return tk || Fk || ("cape" !== Bk || (0, Lk.Pd)(yk.getPlayerRanks(), kk)) && ("nameColour" !== Bk || yk.playerHasRank("super")) || (ak = !1), (0, ck.jsxs)("div", {
                        className: wk()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: Fk && !Rk,
                          TryingOnCharCustomPartWrapper: Rk,
                          DisabledCharCustomPartWrapper: !ak,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === Bk
                        }),
                        onClick: () => {
                          if (ak)
                            if (tk) qk((Fk => {
                              if (Fk[Bk] === kk) {
                                const kk = {
                                  ...Fk
                                };
                                return delete kk[Bk], kk
                              }
                              return {
                                ...Fk,
                                [Bk]: kk
                              }
                            }));
                            else {
                              var Fk;
                              if (hk[Bk] && qk((kk => {
                                  const Fk = {
                                    ...kk
                                  };
                                  return delete Fk[Bk], Fk
                                })), kk === xk.current[Bk]) return;
                              null !== (Fk = lk.current) && void 0 !== Fk && Fk.isReady() && kF(Bk, kk, !0)
                            }
                        },
                        children: ["profileEffect" === Bk ? (0, ck.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, ck.jsx)(uk.d, {
                            playerSocialPreview: (0, Hk.b)(kk, {
                              name: yk.getPlayerName(),
                              cosmetics: yk.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, ck.jsx)("div", {
                          className: wk()("CharCustomPart", {
                            PixelatedImage: "cape" === Bk
                          }),
                          style: (0, Jk.o)(Bk, kk).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,Jk.o)(Bk,kk).previewTex}.png)`
                          } : {
                            backgroundColor: sk.k[kk]
                          }
                        }), tk && (0, ck.jsx)(Mk.d, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, kk)
                    }))]
                  }, null !== tk && void 0 !== tk ? tk : "ungrouped")
                }))
              }, kk)
            }))]
          }), (0, ck.jsx)(Ok.CharacterPreview, {
            ref: lk,
            forcedCosmetics: hk,
            fb: pk.id,
            emotePlaySeq: pk.seq,
            onReady: () => {
              for (const kk of dk.t) kF(kk, xk.current[kk], !1)
            }
          })]
        })]
      })
    }))
  },
  40720: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      CharacterPreview: () => Vk
    });
    var Rk = Bk(61),
      tk = Bk(2607),
      ak = Bk(1192),
      Xk = Bk(8500),
      bk = Bk(9039),
      wk = Bk(3434),
      dk = Bk(1069);
    const sk = .6 * Math.PI,
      Vk = (0, Rk.memo)((0, Rk.forwardRef)((function(kk, Fk) {
        let {
          onReady: Bk,
          onDrawn: Vk,
          owner: Jk = "other",
          framing: Ak = "player",
          forcedCosmetics: ek,
          fb: yk,
          emotePlaySeq: fk,
          turntableFromYaw: mk = null
        } = kk;
        const Wk = (0, Rk.useRef)(null),
          {
            width: vk,
            height: ik
          } = (0, tk.e)(Wk),
          Yk = (0, Rk.useRef)(null),
          Lk = (0, Rk.useRef)({}),
          Ok = (0, Rk.useRef)({}),
          [Ek, Sk] = (0, Rk.useState)(!1),
          Nk = (0, Rk.useRef)(Bk);
        Nk.current = Bk;
        const Hk = (0, Rk.useRef)(Vk);
        Hk.current = Vk;
        const uk = (0, Rk.useRef)(null),
          Mk = (0, Rk.useRef)(!1),
          gk = (0, Rk.useRef)(!1),
          Uk = (0, Rk.useCallback)((() => {
            const kk = Yk.current;
            if (!kk || !Hk.current || Mk.current || !gk.current) return;
            const Fk = {};
            uk.current = Fk, queueMicrotask((() => {
              if (uk.current !== Fk) return;
              const Bk = Promise.all(ak.t.map((Fk => kk.untilDrawn(Fk)))).catch((kk => {
                  console.error("Failed to draw the character preview", kk)
                })),
                Rk = new Promise((kk => {
                  setTimeout(kk, 1e4)
                }));
              Promise.race([Bk, Rk]).then((() => {
                var Bk;
                Yk.current !== kk || uk.current !== Fk || Mk.current || (Mk.current = !0, null === (Bk = Hk.current) || void 0 === Bk || Bk.call(Hk))
              }))
            }))
          }), []);
        return (0, Rk.useImperativeHandle)(Fk, (() => {
          const kk = (kk, Fk) => {
            var Bk;
            (Lk.current[kk] = Fk, null !== ek && void 0 !== ek && ek[kk]) || (null === (Bk = Yk.current) || void 0 === Bk || Bk.setCosmetic(kk, Fk), Uk())
          };
          return {
            updateCosmetic: kk,
            setAllCosmetics(Fk) {
              for (const Rk of ak.t) {
                var Bk;
                kk(Rk, null !== (Bk = Fk[Rk]) && void 0 !== Bk ? Bk : (0, Xk.c)(Rk))
              }
            },
            isReady() {
              var kk, Fk;
              return null !== (kk = null === (Fk = Yk.current) || void 0 === Fk ? void 0 : Fk.isReady()) && void 0 !== kk && kk
            },
            resetCamera() {
              var kk;
              null === (kk = Yk.current) || void 0 === kk || kk.resetCamera()
            },
            setOrbit(kk) {
              var Fk;
              null === (Fk = Yk.current) || void 0 === Fk || Fk.setOrbit(kk)
            },
            async ensureReadyForCapture(kk) {
              var Fk;
              await (null === (Fk = Yk.current) || void 0 === Fk ? void 0 : Fk.untilDrawn(kk))
            },
            getDevTools() {
              var kk;
              return null !== (kk = Yk.current) && void 0 !== kk && kk.isReady() ? Yk.current.dev : null
            }
          }
        }), [ek, Uk]), (0, Rk.useEffect)((() => {
          const kk = wk.b.register(Jk),
            Fk = bk.h.openCharacter(Wk.current, Ak);
          Yk.current = Fk;
          let Bk = !0;
          return Fk.ready.then((() => {
            Bk && (Sk(!0), Nk.current())
          })).catch((kk => {
            console.error("Failed to set up the character preview", kk)
          })), () => {
            Bk = !1, kk(), Fk.resetCamera(), Fk.close(), Yk.current = null
          }
        }), []), (0, Rk.useEffect)((() => {
          vk <= 0 || ik <= 0 || Yk.current.resize(vk, ik)
        }), [vk, ik]), (0, Rk.useEffect)((() => {
          if (!Ek) return;
          const kk = Ok.current;
          for (const Fk of ak.t) {
            const Bk = null === ek || void 0 === ek ? void 0 : ek[Fk],
              Rk = kk[Fk];
            Bk && Bk !== Rk ? Yk.current.setCosmetic(Fk, Bk) : !Bk && Rk && Lk.current[Fk] && Yk.current.setCosmetic(Fk, Lk.current[Fk])
          }
          Ok.current = {
            ...ek
          }, gk.current = !0, Uk()
        }), [ek, Ek, Uk]), (0, Rk.useEffect)((() => {
          Ek && Yk.current.playEmote(null !== yk && void 0 !== yk ? yk : null)
        }), [yk, fk, Ek]), (0, Rk.useEffect)((() => {
          if (!Ek || null === mk) return;
          const kk = Yk.current,
            {
              pitch: Fk,
              radius: Bk
            } = bk.e[Ak];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return kk.setOrbit({
            yaw: mk + sk,
            pitch: Fk,
            radius: Bk
          }), () => {
            kk.resetCamera()
          };
          const Rk = performance.now();
          let tk = 0;
          const ak = Xk => {
            kk.setOrbit({
              yaw: mk + (Xk - Rk) / 6e3 * 2 * Math.PI,
              pitch: Fk,
              radius: Bk
            }), tk = requestAnimationFrame(ak)
          };
          return tk = requestAnimationFrame(ak), () => {
            cancelAnimationFrame(tk), kk.resetCamera()
          }
        }), [Ek, mk]), (0, dk.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Wk
        })
      })))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);