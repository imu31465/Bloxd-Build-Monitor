export const id = 281;
export const ids = [281, 282];
export const modules = {
  40707: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      CharacterCustomisationUI: () => Zb
    });
    var kb = sb(64),
      Wb = sb(2749),
      ab = sb(1117),
      Tb = sb(1870),
      Ub = sb(1033),
      Ib = sb.n(Ub),
      Hb = sb(1253),
      fb = sb(613),
      Mb = sb(1197),
      Xb = sb(2141),
      nb = sb(1544),
      mb = sb(8431),
      lb = sb(2144),
      Qb = sb(2849),
      eb = sb(1912),
      Cb = sb(1431),
      Nb = sb(2180),
      Vb = sb(19),
      Lb = sb(1474),
      ub = sb(344),
      Yb = sb(40713),
      hb = sb(1542),
      Jb = sb(2236),
      gb = sb(2742),
      Bb = sb(2084),
      tb = sb(2441),
      yb = sb(1039);
    sb(8956), sb(2856);
    Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
    var Pb = sb(2195),
      Db = sb(1341),
      Eb = sb(1087);

    function ib(bb, cb, sb) {
      return (0, Xb.j)(bb, cb).purchasable && !(0, Jb.o)(bb, cb, sb)
    }

    function Ob(bb, cb) {
      return Object.entries(bb).some((bb => {
        let [sb, kb] = bb;
        return ib(sb, kb, cb)
      }))
    }

    function Gb(bb) {
      var cb;
      let {
        pack: sb,
        ownedPacks: kb,
        showStoreLink: Wb = !1,
        children: ab
      } = bb;
      const {
        t: Tb
      } = (0, Mb.E)(), Ub = hb.e[sb], Hb = Ub.purchasable && !kb.includes(sb) && hb.q.includes(sb), fb = gb.g[sb];
      return (0, Eb.jsxs)("div", {
        className: Ib()("CosmeticPackGroup", {
          CosmeticPackGroupLocked: Hb
        }),
        children: [fb && (0, Eb.jsx)(fb, {}), (0, Eb.jsxs)("div", {
          className: "CosmeticPackGroupLabel",
          children: [(0, Eb.jsx)("span", {
            className: "CosmeticPackGroupLabelName",
            children: null !== (cb = Ub.displayName) && void 0 !== cb ? cb : sb
          }), (Hb || Wb) && (0, Eb.jsxs)(Cb.B, {
            onClick: () => {
              Hb ? (0, gb.f)(sb) : (0, Nb.o)({
                mode: "self",
                source: "characterCustomisation"
              })
            },
            children: [(0, Eb.jsx)(yb.b, {
              name: "store"
            }), " ", Tb("general:viewInShop")]
          })]
        }), Hb && "bee" === sb && (0, Eb.jsx)(gb.c, {}), ab]
      })
    }

    function Kb(bb) {
      let {
        equippedEmoteIds: cb,
        ownedPacks: sb,
        canBuy: kb,
        onUpdateLoadout: Wb,
        onEmoteSelected: ab,
        onEquipPreviewSkin: Tb
      } = bb;
      const {
        t: Ub
      } = (0, Mb.E)(), fb = new Set(cb), nb = new Map, mb = Object.keys(Xb.d.emote).sort(((bb, cb) => {
        var sb, kb, Wb, ab;
        return (null !== (sb = null === (kb = (0, Xb.i)("emote", bb)) || void 0 === kb ? void 0 : kb.clientIdx) && void 0 !== sb ? sb : 0) - (null !== (Wb = null === (ab = (0, Xb.i)("emote", cb)) || void 0 === ab ? void 0 : ab.clientIdx) && void 0 !== Wb ? Wb : 0)
      })).filter((bb => {
        const cb = (0, Xb.j)("emote", bb),
          Wb = (0, Jb.o)("emote", bb, sb);
        return !(cb.purchasable && !Wb && !kb) && (cb.clientSelectable || Wb)
      }));
      for (const Ib of mb) {
        const bb = (0, Xb.i)("emote", Ib).cosmeticPack;
        nb.has(bb) || nb.set(bb, []), nb.get(bb).push(Ib)
      }
      const Qb = Array.from(nb.keys());
      return (0, Eb.jsxs)("div", {
        className: "CharCustomisPartSelectorWrapper",
        children: [!1, (0, Eb.jsxs)("div", {
          className: "EmoteLoadoutSummary",
          children: [(0, Eb.jsx)("span", {
            className: "EmoteLoadoutSummaryText SmallTextBold",
            children: Ub("emotes:equippedCount", {
              count: cb.length,
              max: Hb.j
            })
          }), (0, Eb.jsx)("span", {
            className: "EmoteLoadoutSummaryHint SmallTextLight",
            children: Ub("emotes:loadoutHint")
          })]
        }), Qb.map((bb => {
          const kb = nb.get(bb);
          return (0, Eb.jsx)(Gb, {
            pack: bb,
            ownedPacks: sb,
            children: (0, Eb.jsx)("div", {
              className: "CosmeticPackGroupItems",
              children: kb.map((bb => {
                var kb;
                const Tb = cb.indexOf(bb),
                  Mb = -1 !== Tb,
                  Xb = cb.length >= Hb.j,
                  nb = ib("emote", bb, sb),
                  mb = nb || !Mb && Xb,
                  Qb = (0, lb.h)(bb);
                return (0, Eb.jsxs)("div", {
                  className: Ib()("CharCustomPartWrapper", "EmoteCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: Mb
                  }),
                  onClick: () => {
                    ab(bb)
                  },
                  children: [(0, Eb.jsxs)("div", {
                    className: "CharCustomPart EmoteCustomPart",
                    children: [(0, Eb.jsx)("div", {
                      className: "EmoteCustomPartIcon",
                      style: {
                        backgroundImage: `url(/textures/charSkins/previews/emote_${bb}_preview.png)`
                      },
                      "aria-hidden": !0
                    }), (0, Eb.jsx)("span", {
                      className: "EmoteCustomPartLabel SmallTextBold",
                      children: null !== (kb = null === Qb || void 0 === Qb ? void 0 : Qb.displayName) && void 0 !== kb ? kb : bb
                    })]
                  }), (0, Eb.jsxs)("div", {
                    className: "EmoteCustomPartToggleContainer",
                    children: [Mb && (0, Eb.jsx)("span", {
                      className: "EmoteCustomPartSlotBadge",
                      children: Tb + 1
                    }), nb && (0, Eb.jsx)(yb.b, {
                      name: "lock",
                      className: "LockedCosmeticIcon"
                    }), (0, Eb.jsx)(Db.f, {
                      tooltipInner: (0, Eb.jsx)(Eb.Fragment, {
                        children: Ub(Mb ? "general:remove" : "general:add")
                      }),
                      delayShow: 0,
                      delayHide: 0,
                      children: (0, Eb.jsx)("div", {
                        className: Ib()("EmoteCustomPartToggle", {
                          EmoteCustomPartToggleDisabled: mb,
                          EmoteCustomPartToggleEquipped: Mb
                        }),
                        onClick: sb => {
                          sb.stopPropagation(), mb || function(bb) {
                            fb.has(bb) ? Wb(cb.filter((cb => cb !== bb))) : cb.length >= Hb.j || Wb([...cb, bb])
                          }(bb)
                        },
                        children: (0, Eb.jsx)(yb.b, {
                          name: Mb ? "minus" : "plus",
                          "aria-hidden": !0
                        })
                      })
                    })]
                  })]
                }, bb)
              }))
            })
          }, bb)
        }))]
      })
    }
    const Zb = (0, kb.memo)((function(bb) {
      let {
        selectedTab: cb
      } = bb;
      const sb = "characters" === cb ? "skin" : cb,
        {
          t: Ub
        } = (0, Mb.E)(),
        {
          userContext: lb,
          isUserContextUpdating: gb
        } = (0, ab.c)(),
        Db = (0, Wb.b)(),
        {
          gameState: Zb,
          initSdkSelectorFinished: zb
        } = (0, Vb.p)(["gameState", "initSdkSelectorFinished"]),
        [qb, db] = (0, kb.useState)({}),
        [Ab, wb] = (0, kb.useState)({}),
        {
          previewEmote: rb,
          triggerEmote: ob
        } = (0, Qb.b)(),
        Sb = (0, kb.useRef)(Hb.p.reduce(((bb, cb) => (bb[cb] = (0, mb.d)(cb), bb)), {})),
        Rb = (0, kb.useRef)(!1),
        vb = (0, kb.useRef)(null),
        Fb = (0, kb.useRef)(null),
        xb = (0, kb.useRef)(null);

      function jb() {
        null !== Fb.current && (clearTimeout(Fb.current), Fb.current = null);
        const bb = xb.current;
        if (null === bb) return;
        xb.current = null;
        const cb = {
          mk: "emote",
          lk: bb
        };
        null !== Tb.gameBridge.latest("connectedGame").websocketUrl ? Tb.gameBridge.send("updateMyCosmetic", cb) : Lb.b.updateCosmetics(lb, [cb]).catch((bb => {
          console.error("Failed to update emote loadout", bb)
        }))
      }

      function pb(bb, cb, sb) {
        var kb, Wb, ab;
        if (Sb.current = {
            ...Sb.current,
            [bb]: cb
          }, Db(), sb) {
          const sb = {
            mk: bb,
            lk: cb
          };
          null !== Tb.gameBridge.latest("connectedGame").websocketUrl ? Tb.gameBridge.send("updateMyCosmetic", sb) : Lb.b.updateCosmetics(lb, [sb]).catch((bb => {
            console.error("Failed to update cosmetic", bb)
          })), lb.setPlayerCosmetics(bb, cb)
        }
        const Ub = (0, Xb.i)(bb, cb);
        if (null !== Ub && void 0 !== Ub && Ub.colourGroup && null !== (kb = hb.e[Ub.cosmeticPack].colourGroups) && void 0 !== kb && null !== (Wb = kb[Ub.colourGroup]) && void 0 !== Wb && Wb.showSwatchSelector) {
          const sb = (0, Xb.f)(cb);
          sb && wb((cb => ({
            ...cb,
            [`${Ub.cosmeticPack}_${bb}_${Ub.colourGroup}`]: parseInt(sb[1])
          })))
        }
        null !== (ab = vb.current) && void 0 !== ab && ab.isReady() && vb.current.updateCosmetic(bb, cb)
      }

      function bc(bb) {
        return Object.entries(bb).every((bb => {
          let [cb, sb] = bb;
          return qb[cb] === sb
        }))
      }(0, eb.c)("cosmeticsUpdated", (bb => {
        let cb = !1;
        for (const {
            local: sb,
            mk: kb,
            lk: Wb
          }
          of bb) {
          if (!sb) return;
          cb = !0, Rb.current || pb(kb, Wb, !1), Db()
        }
        cb && (Rb.current = !0)
      })), (0, kb.useEffect)((() => {
        if (!gb) {
          for (const [bb, cb] of Object.entries(lb.getPlayerCosmetics())) pb(bb, cb, !1);
          Db()
        }
      }), [gb]), (0, kb.useEffect)((() => () => {
        jb()
      }), []);
      const cc = lb.getOwnedCosmeticPacks(),
        sc = (0, Pb.purchasesAllowed)(),
        kc = Object.keys(Xb.d[sb]).filter((bb => {
          const cb = (0, Xb.j)(sb, bb),
            kb = (0, Jb.o)(sb, bb, cc);
          return !(cb.purchasable && !kb && !sc) && (cb.clientSelectable || kb)
        })).sort(((bb, cb) => {
          var kb, Wb, ab, Tb;
          return (null !== (kb = null === (Wb = (0, Xb.i)(sb, bb)) || void 0 === Wb ? void 0 : Wb.clientIdx) && void 0 !== kb ? kb : 0) - (null !== (ab = null === (Tb = (0, Xb.i)(sb, cb)) || void 0 === Tb ? void 0 : Tb.clientIdx) && void 0 !== ab ? ab : 0)
        })),
        Wc = new Map;
      for (const kb of kc) {
        var ac;
        const bb = null === (ac = (0, Xb.i)(sb, kb)) || void 0 === ac ? void 0 : ac.cosmeticPack;
        Wc.has(bb) || Wc.set(bb, []), Wc.get(bb).push(kb)
      }
      const Tc = function(bb, cb) {
          const sb = new Set,
            kb = new Set;
          for (const [Wb, ab] of Object.entries(Xb.d[bb])) {
            if (void 0 === ab.colourGroup) continue;
            const Tb = `${ab.cosmeticPack}_${ab.colourGroup}`;
            (ib(bb, Wb, cb) ? kb : sb).add(Tb)
          }
          return new Set([...sb].filter((bb => kb.has(bb))))
        }(sb, cc),
        Uc = new Map;
      for (const [kb, Wb] of Wc) {
        const bb = [],
          cb = new Map;
        for (const kb of Wb) {
          var Ic, Hc;
          const Wb = null !== (Ic = null === (Hc = (0, Xb.i)(sb, kb)) || void 0 === Hc ? void 0 : Hc.colourGroup) && void 0 !== Ic ? Ic : null;
          cb.has(Wb) || (cb.set(Wb, []), bb.push(Wb)), cb.get(Wb).push(kb)
        }
        const ab = bb.map((bb => {
          var Wb;
          const ab = cb.get(bb),
            Tb = bb ? null === (Wb = hb.e[kb].colourGroups) || void 0 === Wb ? void 0 : Wb[bb] : void 0,
            Ub = !0 === (null === Tb || void 0 === Tb ? void 0 : Tb.showSwatchSelector) && !Tc.has(`${kb}_${bb}`);
          if (Ub && Tb) {
            var Ib;
            const cb = null !== (Ib = Ab[`${kb}_${sb}_${bb}`]) && void 0 !== Ib ? Ib : (0, hb.j)(Tb.colours);
            return {
              groupName: bb,
              showSwatch: Ub,
              cosmetics: ab.filter((bb => {
                const sb = (0, Xb.f)(bb);
                return !sb || cb.toString() === sb[1].toString()
              }))
            }
          }
          return {
            groupName: bb,
            cosmetics: ab,
            showSwatch: Ub
          }
        }));
        Uc.set(kb, ab)
      }
      const fc = Array.from(Wc.keys()),
        Mc = new Map;
      for (const [kb, Wb] of Object.entries(nb.b)) {
        const bb = hb.e[Wb.cosmeticPack],
          cb = !Ob(Wb.cosmetics, cc),
          sb = hb.m.some((bb => (0, hb.f)(bb) === kb));
        (bb.clientSelectable || sb || cb) && ((!bb.purchasable || cb || sc) && (Mc.has(Wb.cosmeticPack) || Mc.set(Wb.cosmeticPack, []), Mc.get(Wb.cosmeticPack).push([kb, Wb])))
      }
      const Xc = Array.from(Mc.keys());
      return (0, Eb.jsxs)("div", {
        className: "CharCustomisationBody",
        children: [("cape" === sb || "nameColour" === sb) && !lb.playerHasRank("super") && (0, Eb.jsxs)("div", {
          className: "CharCustomisationBodyHeader",
          children: [(0, Eb.jsx)(yb.b, {
            name: "bolt"
          }), Ub("homePage:unlockWithSuperRank"), sc && (0, Eb.jsx)(Cb.n, {
            onClick: () => {
              (0, Nb.o)({
                mode: "self",
                source: "characterCustomisation",
                openItem: "superRank"
              })
            },
            children: Ub("general:getItNow")
          })]
        }), (0, Eb.jsxs)("div", {
          className: "CharCustomisationBodyInner",
          children: ["characters" === cb && (0, Eb.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, Xc.map((bb => {
              const cb = Mc.get(bb);
              return (0, Eb.jsx)(Gb, {
                pack: bb,
                ownedPacks: cc,
                showStoreLink: !hb.o.includes(bb) && cb.some((bb => {
                  let [, {
                    cosmetics: cb
                  }] = bb;
                  return Ob(cb, cc)
                })),
                children: (0, Eb.jsx)("div", {
                  className: "CharacterPresetsGrid",
                  children: cb.map((bb => {
                    let [cb, {
                      cosmetics: sb
                    }] = bb;
                    const kb = Ob(sb, cc),
                      Wb = bc(sb),
                      ab = !Wb && Object.entries(sb).every((bb => {
                        let [cb, sb] = bb;
                        return Sb.current[cb] === sb
                      }));
                    return (0, Eb.jsxs)("div", {
                      "data-pad-focusable": !0,
                      className: Ib()("CharacterPresetCard", {
                        CharacterPresetCardActive: ab,
                        CharacterPresetCardTryingOn: Wb
                      }),
                      onClick: () => {
                        if (kb) ! function(bb) {
                          bc(bb) ? db({}) : db({
                            ...bb
                          })
                        }(sb);
                        else {
                          Object.keys(qb).length > 0 && db({});
                          const bb = Object.entries(sb);
                          for (const [cb, sb] of bb) pb(cb, sb, !1), lb.setPlayerCosmetics(cb, sb);
                          if (null !== Tb.gameBridge.latest("connectedGame").websocketUrl)
                            for (const [cb, sb] of bb) Tb.gameBridge.send("updateMyCosmetic", {
                              mk: cb,
                              lk: sb
                            });
                          else Lb.b.updateCosmetics(lb, bb.map((bb => {
                            let [cb, sb] = bb;
                            return {
                              mk: cb,
                              lk: sb
                            }
                          }))).catch((bb => {
                            console.error("Failed to update cosmetics", bb)
                          }))
                        }
                      },
                      children: [(0, Eb.jsx)("div", {
                        className: "CharacterPresetCardPreview",
                        style: {
                          backgroundImage: `url(/textures/charSkins/previews/character_${cb}_preview.png)`
                        }
                      }), kb && (0, Eb.jsx)(yb.b, {
                        name: "lock",
                        className: "LockedCosmeticIcon"
                      })]
                    }, cb)
                  }))
                })
              }, bb)
            }))]
          }), "emote" === cb && (0, Eb.jsx)(Kb, {
            equippedEmoteIds: (0, mb.h)(Sb.current.emote),
            ownedPacks: cc,
            canBuy: sc,
            onUpdateLoadout: bb => {
              const cb = (0, mb.l)(bb);
              var sb;
              Sb.current = {
                ...Sb.current,
                emote: cb
              }, lb.setPlayerCosmetics("emote", cb), Db(), sb = cb, xb.current = sb, null !== Fb.current && clearTimeout(Fb.current), Fb.current = setTimeout(jb, 350)
            },
            onEmoteSelected: ob,
            onEquipPreviewSkin: () => {
              ! function(bb, cb) {
                for (const sb of Hb.p) "cape" !== sb && "nameColour" !== sb && "emote" !== sb && bb(sb, "skin" === sb ? "skin_preview" : `${sb}_none`, !1);
                cb()
              }(pb, Db)
            }
          }), "characters" !== cb && "emote" !== cb && (0, Eb.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [!1, fc.map((bb => {
              const cb = Uc.get(bb);
              return (0, Eb.jsx)(Gb, {
                pack: bb,
                ownedPacks: cc,
                children: cb.map((cb => {
                  var kb;
                  let {
                    groupName: Wb,
                    cosmetics: ab,
                    showSwatch: Tb
                  } = cb;
                  const Ub = Wb ? null === (kb = hb.e[bb].colourGroups) || void 0 === kb ? void 0 : kb[Wb] : void 0,
                    Hb = `${bb}_${sb}_${Wb}`;
                  return (0, Eb.jsxs)("div", {
                    className: "CosmeticPackGroupItems",
                    children: [Tb && Ub && (0, Eb.jsx)("div", {
                      className: "CosmeticColorSwatchCell",
                      children: [...Ub.colours.map(((bb, cb) => ({
                        color: bb,
                        index: cb
                      })))].sort(((bb, cb) => bb.color.order - cb.color.order)).map((cb => {
                        var kb;
                        let {
                          color: ab,
                          index: Tb
                        } = cb;
                        return (0, Eb.jsx)("div", {
                          className: Ib()("CosmeticColorOption", {
                            CosmeticColorOptionSelected: (null !== (kb = Ab[Hb]) && void 0 !== kb ? kb : (0, hb.j)(Ub.colours)) === Tb
                          }),
                          style: {
                            backgroundColor: `rgb(${ab.rbg.join(",")})`
                          },
                          onClick: () => {
                            var cb;
                            wb((bb => ({
                              ...bb,
                              [Hb]: Tb
                            })));
                            const kb = qb[sb],
                              ab = kb ? (0, Xb.i)(sb, kb) : null,
                              Ub = (null === ab || void 0 === ab ? void 0 : ab.cosmeticPack) === bb,
                              Ib = Ub ? kb : Sb.current[sb],
                              fb = Ub ? ab : (0, Xb.i)(sb, Ib);
                            if ((null === fb || void 0 === fb ? void 0 : fb.cosmeticPack) !== bb) return;
                            if ((null !== (cb = null === fb || void 0 === fb ? void 0 : fb.colourGroup) && void 0 !== cb ? cb : null) !== Wb) return;
                            const Mb = (0, Xb.f)(Ib);
                            if (Mb) {
                              const bb = `${sb}_${Mb[0]}_${Tb}`;
                              Ub ? db((cb => ({
                                ...cb,
                                [sb]: bb
                              }))) : pb(sb, bb, !0)
                            }
                          }
                        }, ab.rbg.join())
                      }))
                    }), ab.map((bb => {
                      const cb = bb === Sb.current[sb],
                        kb = qb[sb] === bb,
                        Wb = ib(sb, bb, cc);
                      let ab = !0;
                      return Wb || cb || ("cape" !== sb || (0, ub.be)(lb.getPlayerRanks(), bb)) && ("nameColour" !== sb || lb.playerHasRank("super")) || (ab = !1), (0, Eb.jsxs)("div", {
                        className: Ib()("CharCustomPartWrapper", {
                          SelectedCharCustomPartWrapper: cb && !kb,
                          TryingOnCharCustomPartWrapper: kb,
                          DisabledCharCustomPartWrapper: !ab,
                          CharCustomPartWrapperProfileEffect: "profileEffect" === sb
                        }),
                        onClick: () => {
                          if (ab)
                            if (Wb) db((cb => {
                              if (cb[sb] === bb) {
                                const bb = {
                                  ...cb
                                };
                                return delete bb[sb], bb
                              }
                              return {
                                ...cb,
                                [sb]: bb
                              }
                            }));
                            else {
                              var cb;
                              if (qb[sb] && db((bb => {
                                  const cb = {
                                    ...bb
                                  };
                                  return delete cb[sb], cb
                                })), bb === Sb.current[sb]) return;
                              null !== (cb = vb.current) && void 0 !== cb && cb.isReady() && pb(sb, bb, !0)
                            }
                        },
                        children: ["profileEffect" === sb ? (0, Eb.jsx)("div", {
                          className: "CharCustomPart CharCustomProfileEffect",
                          children: (0, Eb.jsx)(tb.h, {
                            playerSocialPreview: (0, Bb.d)(bb, {
                              name: lb.getPlayerName(),
                              cosmetics: lb.getPlayerCosmetics()
                            }),
                            showLocation: !1,
                            opensProfileCard: !1
                          })
                        }) : (0, Eb.jsx)("div", {
                          className: Ib()("CharCustomPart", {
                            PixelatedImage: "cape" === sb
                          }),
                          style: (0, Xb.i)(sb, bb).previewTex ? {
                            backgroundImage: `url(/textures/charSkins/previews/${(0,Xb.i)(sb,bb).previewTex}.png)`
                          } : {
                            backgroundColor: fb.s[bb]
                          }
                        }), Wb && (0, Eb.jsx)(yb.b, {
                          name: "lock",
                          className: "LockedCosmeticIcon"
                        })]
                      }, bb)
                    }))]
                  }, null !== Wb && void 0 !== Wb ? Wb : "ungrouped")
                }))
              }, bb)
            }))]
          }), (0, Eb.jsx)(Yb.CharacterPreview, {
            ref: vb,
            forcedCosmetics: qb,
            yU: rb.id,
            emotePlaySeq: rb.seq,
            onReady: () => {
              for (const bb of Hb.p) pb(bb, Sb.current[bb], !1)
            }
          })]
        })]
      })
    }))
  },
  40713: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      CharacterPreview: () => Mb
    });
    var kb = sb(64),
      Wb = sb(2598),
      ab = sb(1253),
      Tb = sb(8431),
      Ub = sb(8956),
      Ib = sb(3422),
      Hb = sb(1087);
    const fb = .6 * Math.PI,
      Mb = (0, kb.memo)((0, kb.forwardRef)((function(bb, cb) {
        let {
          onReady: sb,
          onDrawn: Mb,
          owner: Xb = "other",
          framing: nb = "player",
          forcedCosmetics: mb,
          yU: lb,
          emotePlaySeq: Qb,
          turntableFromYaw: eb = null
        } = bb;
        const Cb = (0, kb.useRef)(null),
          {
            width: Nb,
            height: Vb
          } = (0, Wb.b)(Cb),
          Lb = (0, kb.useRef)(null),
          ub = (0, kb.useRef)({}),
          Yb = (0, kb.useRef)({}),
          [hb, Jb] = (0, kb.useState)(!1),
          gb = (0, kb.useRef)(sb);
        gb.current = sb;
        const Bb = (0, kb.useRef)(Mb);
        Bb.current = Mb;
        const tb = (0, kb.useRef)(null),
          yb = (0, kb.useRef)(!1),
          Pb = (0, kb.useRef)(!1),
          Db = (0, kb.useCallback)((() => {
            const bb = Lb.current;
            if (!bb || !Bb.current || yb.current || !Pb.current) return;
            const cb = {};
            tb.current = cb, queueMicrotask((() => {
              if (tb.current !== cb) return;
              const sb = Promise.all(ab.p.map((cb => bb.untilDrawn(cb)))).catch((bb => {
                  console.error("Failed to draw the character preview", bb)
                })),
                kb = new Promise((bb => {
                  setTimeout(bb, 1e4)
                }));
              Promise.race([sb, kb]).then((() => {
                var sb;
                Lb.current !== bb || tb.current !== cb || yb.current || (yb.current = !0, null === (sb = Bb.current) || void 0 === sb || sb.call(Bb))
              }))
            }))
          }), []);
        return (0, kb.useImperativeHandle)(cb, (() => {
          const bb = (bb, cb) => {
            var sb;
            (ub.current[bb] = cb, null !== mb && void 0 !== mb && mb[bb]) || (null === (sb = Lb.current) || void 0 === sb || sb.setCosmetic(bb, cb), Db())
          };
          return {
            updateCosmetic: bb,
            setAllCosmetics(cb) {
              for (const kb of ab.p) {
                var sb;
                bb(kb, null !== (sb = cb[kb]) && void 0 !== sb ? sb : (0, Tb.d)(kb))
              }
            },
            isReady() {
              var bb, cb;
              return null !== (bb = null === (cb = Lb.current) || void 0 === cb ? void 0 : cb.isReady()) && void 0 !== bb && bb
            },
            resetCamera() {
              var bb;
              null === (bb = Lb.current) || void 0 === bb || bb.resetCamera()
            },
            setOrbit(bb) {
              var cb;
              null === (cb = Lb.current) || void 0 === cb || cb.setOrbit(bb)
            },
            async ensureReadyForCapture(bb) {
              var cb;
              await (null === (cb = Lb.current) || void 0 === cb ? void 0 : cb.untilDrawn(bb))
            },
            getDevTools() {
              var bb;
              return null !== (bb = Lb.current) && void 0 !== bb && bb.isReady() ? Lb.current.dev : null
            }
          }
        }), [mb, Db]), (0, kb.useEffect)((() => {
          const bb = Ib.b.register(Xb),
            cb = Ub.h.openCharacter(Cb.current, nb);
          Lb.current = cb;
          let sb = !0;
          return cb.ready.then((() => {
            sb && (Jb(!0), gb.current())
          })).catch((bb => {
            console.error("Failed to set up the character preview", bb)
          })), () => {
            sb = !1, bb(), cb.resetCamera(), cb.close(), Lb.current = null
          }
        }), []), (0, kb.useEffect)((() => {
          Nb <= 0 || Vb <= 0 || Lb.current.resize(Nb, Vb)
        }), [Nb, Vb]), (0, kb.useEffect)((() => {
          if (!hb) return;
          const bb = Yb.current;
          for (const cb of ab.p) {
            const sb = null === mb || void 0 === mb ? void 0 : mb[cb],
              kb = bb[cb];
            sb && sb !== kb ? Lb.current.setCosmetic(cb, sb) : !sb && kb && ub.current[cb] && Lb.current.setCosmetic(cb, ub.current[cb])
          }
          Yb.current = {
            ...mb
          }, Pb.current = !0, Db()
        }), [mb, hb, Db]), (0, kb.useEffect)((() => {
          hb && Lb.current.playEmote(null !== lb && void 0 !== lb ? lb : null)
        }), [lb, Qb, hb]), (0, kb.useEffect)((() => {
          if (!hb || null === eb) return;
          const bb = Lb.current,
            {
              pitch: cb,
              radius: sb
            } = Ub.c[nb];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return bb.setOrbit({
            yaw: eb + fb,
            pitch: cb,
            radius: sb
          }), () => {
            bb.resetCamera()
          };
          const kb = performance.now();
          let Wb = 0;
          const ab = Tb => {
            bb.setOrbit({
              yaw: eb + (Tb - kb) / 6e3 * 2 * Math.PI,
              pitch: cb,
              radius: sb
            }), Wb = requestAnimationFrame(ab)
          };
          return Wb = requestAnimationFrame(ab), () => {
            cancelAnimationFrame(Wb), bb.resetCamera()
          }
        }), [hb, eb]), (0, Hb.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Cb
        })
      })))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);