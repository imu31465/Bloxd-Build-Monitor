export const id = 151;
export const ids = [151];
export const modules = {
  8605: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Lb
    });
    var Bb = hb(13),
      Ob = hb(1095),
      Gb = hb(4765),
      Ub = hb(1007);

    function Lb(bb) {
      let {
        note: ub
      } = bb;
      const {
        t: hb
      } = (0, Ob.K)(), {
        clientEscMenuOptions: Lb
      } = (0, Bb.j)(["clientEscMenuOptions"]);
      return (0, Ub.jsx)(Gb.c, {
        label: hb("touchSettings:actionButtons"),
        checked: Lb.touchActionButtons,
        onClick: bb => {
          Bb.d.setClientEscMenuOptions({
            touchActionButtons: bb
          })
        },
        circleInfoText: hb("touchSettings:actionButtonsInfo"),
        note: ub
      })
    }
  },
  8599: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => eh,
      h: () => Jh
    });
    var Bb = hb(1095),
      Ob = hb(49),
      Gb = hb(1874),
      Ub = hb(1881),
      Lb = hb(958),
      Yb = hb.n(Lb),
      Sb = hb(1357),
      ab = hb(13),
      Hb = hb(86),
      wb = hb(101),
      Zb = hb(4765),
      Xb = hb(2288),
      pb = hb(275),
      ob = hb(1887),
      Ab = hb(1891),
      lb = hb(8603),
      Kb = hb(8605),
      Wb = hb(298),
      Cb = hb(1007);
    const db = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var rb = hb(8613);
    var jb = hb(1380),
      nb = hb(1249),
      Db = hb(966),
      xb = hb(1302),
      zb = hb(2332);
    const gb = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(zb.G.map((bb => [bb, "menu"])))
      },
      ib = bb => zb.B.filter((ub => gb[ub] === bb)),
      vb = new Set(ib("cluster")),
      tb = ["cluster"],
      Jb = [...tb, ...zb.B.filter((bb => !tb.includes(bb) && !gb[bb]))],
      eb = Jb.flatMap((bb => [bb, ...ib(bb)])).map((bb => ({
        id: bb,
        label: `hudLayout:${bb}`,
        ...zb.A[bb],
        parent: gb[bb]
      }))),
      Nb = Object.fromEntries(eb.map((bb => [bb.id, bb]))),
      sb = "data-hud-el";

    function Mb(bb, ub, hb, Bb) {
      const Ob = hb(function(bb, ub) {
          return "attack" !== bb || ub ? Nb[bb].label : "hudLayout:attackContext"
        }(bb, ub)),
        Gb = Bb[bb];
      return Gb ? hb("hudLayout:slotWithKey", {
        slot: Ob,
        key: Gb
      }) : Ob
    }

    function mb(bb, ub, hb, Bb) {
      return bb.map((bb => Mb(bb, ub, hb, Bb))).join(", ")
    }

    function Ib(bb) {
      let {
        className: ub,
        keepPlace: hb
      } = bb;
      return hb ? (0, Cb.jsx)("div", {
        className: Yb()(ub, "Placeholder")
      }) : null
    }

    function Pb(bb) {
      let {
        id: ub,
        elements: hb,
        actionButtons: Ob,
        keyNames: Gb,
        className: Ub,
        keepPlace: Lb,
        onHidden: Yb
      } = bb;
      const {
        t: ab
      } = (0, Bb.K)();
      if (!Nb[ub].hide) return (0, Cb.jsx)(Ib, {
        className: Ub,
        keepPlace: Lb
      });
      const Hb = (0, zb.w)(hb, ub);
      return (0, Cb.jsx)(Sb.O, {
        className: Ub,
        ariaLabel: ab(Hb ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: Mb(ub, Ob, ab, Gb)
        }),
        pressed: !Hb,
        onClick: () => {
          Yb(ub, !Hb)
        },
        children: (0, Cb.jsx)(Db.e, {
          name: Hb ? "eye-slash" : "eye"
        })
      })
    }

    function qb(bb) {
      var ub;
      let {
        id: hb,
        elements: Ob,
        actionButtons: Gb,
        keyNames: Ub,
        className: Lb,
        keepPlace: Yb,
        onlyWhenMoved: ab,
        locked: Hb,
        onReset: wb
      } = bb;
      const {
        t: Zb
      } = (0, Bb.K)(), Xb = Nb[hb], pb = (0, zb.P)(null !== (ub = Ob[hb]) && void 0 !== ub ? ub : zb.q);
      return !Xb.move && !Xb.scale || ab && pb ? (0, Cb.jsx)(Ib, {
        className: Lb,
        keepPlace: Yb
      }) : (0, Cb.jsx)(Sb.O, {
        className: Lb,
        disabled: pb || Hb,
        ariaLabel: Zb("hudLayout:resetElement", {
          name: Mb(hb, Gb, Zb, Ub)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: hb
        },
        onClick: bb => {
          ab && Fb(bb.currentTarget), wb(hb)
        },
        children: (0, Cb.jsx)(Db.e, {
          name: "rotate-left"
        })
      })
    }

    function Eb(bb) {
      let {
        id: ub,
        actionButtons: hb,
        keyNames: Ob,
        className: Gb,
        keepPlace: Ub,
        locked: Lb,
        lockable: Yb,
        onLocked: ab
      } = bb;
      const {
        t: Hb
      } = (0, Bb.K)();
      return Yb || Lb ? (0, Cb.jsx)(Sb.O, {
        className: Gb,
        ariaLabel: Hb(Lb ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: Mb(ub, hb, Hb, Ob)
        }),
        pressed: Lb,
        active: Lb,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${Lb?"unlock":"lock"}:${ub}`
        },
        onClick: () => {
          ab(ub, !Lb)
        },
        children: (0, Cb.jsx)(Db.e, {
          name: Lb ? "lock" : "lock-open"
        })
      }) : (0, Cb.jsx)(Ib, {
        className: Gb,
        keepPlace: Ub
      })
    }

    function yb(bb) {
      let {
        className: ub,
        open: hb,
        name: Ob,
        onToggle: Gb
      } = bb;
      const {
        t: Ub
      } = (0, Bb.K)();
      return (0, Cb.jsx)(Sb.O, {
        className: ub,
        ariaLabel: Ub(hb ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: Ob
        }),
        pressed: hb,
        analyticsClick: {
          id: "hud_layout.children",
          value: hb ? "close" : "open"
        },
        onClick: () => {
          Gb(!hb)
        },
        children: (0, Cb.jsx)(Db.e, {
          name: hb ? "angle-up" : "angle-down"
        })
      })
    }

    function Vb(bb, ub) {
      var hb;
      bb.contains(document.activeElement) && ub.focus({
        preventScroll: !0
      }), null === (hb = (0, xb.h)()) || void 0 === hb || hb.handOverPadFocus(bb, ub)
    }

    function Fb(bb) {
      const ub = bb.closest("[data-hud-row]"),
        hb = null === ub || void 0 === ub ? void 0 : ub.querySelector(".HudElementRowName");
      return !(!ub || !hb) && (Vb(ub, hb), !0)
    }
    const fb = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function kb(bb, ub) {
      return "joystick" === bb && !ub
    }

    function Tb() {
      const {
        t: bb
      } = (0, Bb.K)();
      return (0, Cb.jsx)(Sb.O, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: bb => {
          const ub = bb.currentTarget;
          if (!Fb(ub)) {
            const bb = function(bb) {
              var ub, hb;
              const Bb = [bb.previousElementSibling, bb.nextElementSibling].find((bb => bb instanceof HTMLElement && bb.matches(fb)));
              return null !== (ub = null !== Bb && void 0 !== Bb ? Bb : null === (hb = bb.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === hb ? void 0 : hb.querySelector(`:is(${fb}):not(.HudFixJoystickButton)`)) && void 0 !== ub ? ub : null
            }(ub);
            bb && Vb(ub, bb)
          }
          ab.d.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: bb("hudLayout:fixJoystick")
      })
    }
    var cb = hb(65),
      Qb = hb(1177),
      Rb = hb(2903),
      bu = hb(2548),
      uu = hb(8615),
      hu = hb(2335),
      Bu = hb(2358),
      Ou = hb(2941);
    const Gu = ["J", "C", "A", "P", "U", "X", "G"],
      Uu = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: zb.G,
        pinnedIcon: null
      });

    function Lu(bb, ub) {
      bb.replaceChildren(...[...ub.childNodes].map((bb => bb.cloneNode(!0))))
    }
    const Yu = bb => ({
      [sb]: bb
    });

    function Su(bb) {
      let {
        id: ub,
        slot: hb,
        icon: Bb,
        label: Gb,
        hidden: Ub,
        className: Lb,
        face: Sb
      } = bb;
      const ab = (0, Ob.useRef)(null);
      return (0, Ob.useLayoutEffect)((() => {
        Sb && ab.current && Lu(ab.current, Sb)
      }), [Sb]), (0, Cb.jsxs)("div", {
        className: Yb()("TouchKeyHit", `TouchSlot${hb}`, Lb, {
          HudPreviewGhost: Ub.has(ub)
        }),
        ...Yu(ub),
        children: [Sb && (0, Cb.jsx)("div", {
          ref: ab,
          className: Yb()("TouchKey", {
            Labelled: Sb.classList.contains("Labelled")
          })
        }), !Sb && (0, Cb.jsxs)("div", {
          className: Yb()("TouchKey", {
            Labelled: void 0 !== Gb
          }),
          children: [Bb && (0, Cb.jsx)(Db.e, {
            name: Bb
          }), void 0 !== Gb && (0, Cb.jsx)("span", {
            className: "TouchKeyLabel",
            children: Gb
          })]
        })]
      })
    }

    function au(bb) {
      let {
        item: ub,
        selected: hb
      } = bb;
      const Bb = (0, Ob.useRef)(null);
      return (0, Ob.useLayoutEffect)((() => {
        Bb.current && Lu(Bb.current, ub)
      }), [ub]), (0, Cb.jsx)("div", {
        ref: Bb,
        className: Yb()("InvenItem", {
          Selected: hb
        })
      })
    }
    const Hu = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      wu = bb => void 0 === bb ? {} : {
        style: {
          "--parked": bb
        }
      };

    function Zu(bb) {
      let {
        id: ub,
        hidden: hb,
        parked: Bb,
        unslotted: Ob = !1
      } = bb;
      return (0, Cb.jsx)("div", {
        className: Yb()("TopRightIcon", Bu.o[ub], {
          HudPreviewGhost: hb.has(ub),
          [hu.b]: void 0 !== Bb,
          [hu.e]: Ob
        }),
        ...wu(Bb),
        children: (0, Cb.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...Yu(ub),
          children: (0, Cb.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Cb.jsx)(Db.e, {
              name: Hu[ub]
            })
          })
        })
      })
    }

    function Xu(bb) {
      let {
        portraitPhone: ub,
        icons: hb,
        pinnedIcon: Bb,
        hidden: Gb,
        moved: Ub,
        trayState: Lb
      } = bb;
      const Sb = ub ? (0, hu.F)(hb) : [],
        ab = hb.filter((bb => "settings" === bb)),
        Hb = hb.filter((bb => "settings" !== bb && !Sb.includes(bb))).reverse(),
        wb = Sb.length > 0 && "gone" === Lb,
        Zb = [...ab, ...wb ? ["tray"] : [], ...Hb].filter((bb => "tray" === bb || Gb.has(bb) && !Ub.has(bb))),
        Xb = bb => {
          const ub = Zb.indexOf(bb);
          return ub < 0 ? void 0 : ub
        },
        pb = (bb, ub) => (0, Cb.jsx)(Zu, {
          id: bb,
          hidden: Gb,
          parked: ub ? Xb(bb) : void 0,
          unslotted: ub && Gb.has(bb) && Ub.has(bb)
        }, bb);
      return (0, Cb.jsxs)("div", {
        className: Yb()("TopRightIcons TouchInGame", {
          Column: ub
        }),
        children: [ab.map((bb => pb(bb, !0))), Sb.length > 0 && (0, Cb.jsxs)("div", {
          className: Yb()("TopRightIcon TopRightTrayToggle Open", {
            [hu.b]: wb
          }),
          ...wu(Xb("tray")),
          children: [(0, Cb.jsx)("div", {
            className: Yb()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== Lb
            }),
            children: (0, Cb.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, Cb.jsx)(Db.e, {
                name: "ellipsis"
              })
            })
          }), (0, Cb.jsx)("div", {
            className: "TopRightTray",
            children: Sb.map((bb => pb(bb, !1)))
          })]
        }), Hb.map((bb => (0, Cb.jsxs)(Ob.Fragment, {
          children: ["perspective" === bb && null !== Bb && (0, Cb.jsx)("div", {
            className: "TopRightIcon",
            children: (0, Cb.jsx)("div", {
              className: "UiItemIcon SmallTextBold",
              children: (0, Cb.jsx)("div", {
                className: "ScaleOnHover",
                children: (0, Cb.jsx)(Db.e, {
                  name: Bb
                })
              })
            })
          }), pb(bb, !0)]
        }, bb)))]
      })
    }

    function pu(bb) {
      let {
        next: ub,
        hidden: hb
      } = bb;
      return (0, Cb.jsx)("div", {
        className: Yb()("HotBarArrow", ub ? "Next" : "Previous", {
          HudPreviewGhost: hb
        }),
        ...Yu("arrows"),
        children: (0, Cb.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, Cb.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Cb.jsx)(Db.e, {
              name: ub ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function ou() {
      return (0, Cb.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, Cb.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, Cb.jsx)("div", {
            className: "SocialBar",
            children: (0, Cb.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, Cb.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, Cb.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, Cb.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, Cb.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Cb.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Cb.jsx)(Db.e, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, Cb.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, Cb.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, Cb.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, Cb.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Cb.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Cb.jsx)(Db.e, {
                        name: "user"
                      })
                    })]
                  })]
                })
              })
            })
          })
        })
      })
    }
    const Au = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      lu = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      Ku = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      Wu = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function Cu(bb) {
      let {
        presence: ub,
        portraitPhone: hb,
        hidden: Ob,
        actionButtons: Gb,
        joystickFixed: Ub,
        keysAbove: Lb,
        auraBar: Sb,
        trayState: ab,
        moved: wb
      } = bb;
      const {
        t: Zb
      } = (0, Bb.K)(), {
        faces: Xb,
        items: pb
      } = ub, ob = bb => ({
        HudPreviewGhost: Ob.has(bb)
      });
      return (0, Cb.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, Cb.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, Cb.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, Cb.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, Cb.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, Cb.jsx)("div", {
              className: "InGameHeaderGameName",
              children: Zb("hudLayout:previewGameName")
            })]
          })
        }), (0, Cb.jsx)("div", {
          className: "TopLeftElements",
          children: (0, Cb.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, Cb.jsxs)("div", {
              className: "Chat",
              children: [(0, Cb.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [Zb("hudLayout:previewChatLine"), Zb("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), Zb("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((bb => (0, Cb.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, Cb.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, Cb.jsx)("div", {
                      className: "IndividualText",
                      children: bb
                    })
                  })
                }, bb)))
              }), (0, Cb.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: Yb()("ChatIconWrapper SmallTextLight", ob("chat")),
                ...Yu("chat"),
                children: (0, Cb.jsx)(Db.e, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, Cb.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, Cb.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, Cb.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, Cb.jsx)("div", {
                className: "TopRightIconsContainer",
                ...Yu("menu"),
                children: (0, Cb.jsx)(Xu, {
                  portraitPhone: hb,
                  icons: ub.rowIcons,
                  pinnedIcon: ub.pinnedIcon,
                  hidden: Ob,
                  trayState: ab,
                  moved: wb
                })
              })
            }), Hb.featureFlags.useSocialFeatures && (0, Cb.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, Cb.jsx)(ou, {})
            })]
          })
        }), (0, Cb.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, Cb.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, Cb.jsxs)("div", {
            className: "TouchInteractKey",
            ...Yu("interact"),
            children: [(0, Cb.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, Cb.jsx)(Db.e, {
                name: "hand-back-point-up"
              })
            }), (0, Cb.jsx)("div", {
              children: Zb("hudLayout:previewInteract")
            })]
          })
        }), (0, Cb.jsx)("div", {
          className: "BottomCentre",
          children: (0, Cb.jsxs)("div", {
            className: "BottomElements",
            children: [(0, Cb.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, Cb.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, Cb.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...Yu("hotbar"),
                children: (0, Cb.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, Cb.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, Cb.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, Cb.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, Cb.jsx)(Db.e, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), Sb && (0, Cb.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, Cb.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, Cb.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, Ou.e)("glint"),
                    alt: ""
                  }), (0, Cb.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, Cb.jsx)("div", {
                  className: "AuraBar",
                  children: (0, Cb.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, Cb.jsx)("div", {
                className: "HotBarRow",
                children: (0, Cb.jsx)("div", {
                  className: Yb()("HotBarContainer Touch", {
                    KeysAbove: Lb
                  }),
                  children: (0, Cb.jsxs)("div", {
                    className: "HotBar",
                    ...Yu("hotbar"),
                    children: [(0, Cb.jsxs)("div", {
                      className: Yb()("TouchInventoryKeys", {
                        NoAuraBar: !Sb
                      }),
                      children: [(0, Cb.jsx)("div", {
                        className: Yb()("TouchInventoryKey ShopKey", ob("inventory"), {
                          Hidden: !ub.shop
                        }),
                        ...Yu("inventory"),
                        children: (0, Cb.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Cb.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Cb.jsx)(Db.e, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, Cb.jsx)("div", {
                        className: Yb()("TouchInventoryKey BagKey", ob("inventory"), {
                          Hidden: !ub.bag
                        }),
                        ...Yu("inventory"),
                        children: (0, Cb.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Cb.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Cb.jsx)(Db.e, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, Cb.jsx)(pu, {
                      next: !1,
                      hidden: Ob.has("arrows")
                    }), (0, Cb.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== pb && pb.map(((bb, ub) => (0, Cb.jsx)(au, {
                        item: bb,
                        selected: bb.classList.contains("Selected")
                      }, ub))), null === pb && Ku.map((bb => {
                        const ub = Wu[bb];
                        return (0, Cb.jsx)("div", {
                          className: Yb()("InvenItem", {
                            Selected: 0 === bb
                          }),
                          children: ub && (0, Cb.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, Cb.jsx)(Db.e, {
                              name: ub
                            })
                          })
                        }, bb)
                      }))]
                    }), (0, Cb.jsx)(pu, {
                      next: !0,
                      hidden: Ob.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, Cb.jsx)("div", {
              className: "BottomRightElements",
              children: (0, Cb.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== Xb && Gu.map((bb => {
                  const ub = Xb[bb];
                  return ub && (0, Cb.jsx)(Su, {
                    id: Au[bb],
                    slot: bb,
                    face: ub,
                    className: lu[bb],
                    hidden: Ob
                  }, bb)
                })), null === Xb && (0, Cb.jsxs)(Cb.Fragment, {
                  children: [(0, Cb.jsx)(Su, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: Ob
                  }), (0, Cb.jsx)(Su, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: Ob
                  }), Gb && (0, Cb.jsxs)(Cb.Fragment, {
                    children: [(0, Cb.jsx)(Su, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: Ob
                    }), (0, Cb.jsx)(Su, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: Ob
                    })]
                  }), !Gb && (0, Cb.jsx)(Su, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: Zb("touchKeys:scope"),
                    hidden: Ob
                  }), (0, Cb.jsx)(Su, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: Zb("touchKeys:fly"),
                    hidden: Ob
                  }), (0, Cb.jsx)(Su, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: Ob
                  })]
                })]
              })
            })]
          })
        }), (0, Cb.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, Cb.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, Cb.jsxs)("div", {
              className: Yb()("Joystick Resting HudPreviewJoystick", {
                Floating: !Ub
              }),
              ...Yu("joystick"),
              children: [(0, Cb.jsx)("div", {
                className: "JoystickBase"
              }), (0, Cb.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function du() {
      const [bb, ub] = (0, Ob.useState)({}), hb = (0, Ob.useCallback)((bb => {
        ub((ub => [...new Set([...Object.keys(ub), ...Object.keys(bb)])].every((hb => ub[hb] === bb[hb])) ? ub : bb))
      }), []);
      return [bb, hb]
    }
    const ru = .05;

    function ju(bb) {
      var ub;
      let {
        selected: hb,
        layout: Ob,
        actionButtons: Gb,
        keyNames: Ub,
        overlaps: Lb,
        scaleCaps: ab,
        joystickFixed: Hb,
        onScale: wb,
        onHidden: Zb,
        onReset: Xb,
        locked: pb,
        lockable: ob,
        onLocked: Ab,
        extra: lb
      } = bb;
      const {
        t: Kb
      } = (0, Bb.K)(), Wb = hb ? Nb[hb] : null, db = null !== hb && pb.has(hb), rb = (hb && Ob.hudElements[hb] || zb.q)[2], jb = null !== (ub = hb && ab[hb]) && void 0 !== ub ? ub : zb.h, nb = bb => {
        hb && wb(hb, Math.min(jb, Math.round(100 * (rb + .1 * bb)) / 100))
      };
      return (0, Cb.jsxs)(Cb.Fragment, {
        children: [(0, Cb.jsxs)("div", {
          className: Yb()("HudQuickName SmallTextBold", {
            Overlap: Lb.length > 0
          }),
          children: [Lb.length > 0 && (0, Cb.jsx)(Db.e, {
            name: "triangle-exclamation"
          }), Wb ? Mb(Wb.id, Gb, Kb, Ub) : Kb("hudLayout:fullScreenHint"), Lb.length > 0 && (0, Cb.jsx)("span", {
            className: "HudQuickOverlap",
            children: Kb("hudLayout:overlapsShort", {
              names: mb(Lb, Gb, Kb, Ub)
            })
          })]
        }), (null === Wb || void 0 === Wb ? void 0 : Wb.scale) && (0, Cb.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, Cb.jsx)(Sb.O, {
            disabled: db || rb <= zb.k,
            ariaLabel: Kb("hudLayout:smaller"),
            onClick: () => {
              nb(-1)
            },
            children: (0, Cb.jsx)(Db.e, {
              name: "minus"
            })
          }), (0, Cb.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*rb)}%`
          }), (0, Cb.jsx)(Sb.O, {
            disabled: db || rb >= jb,
            ariaLabel: Kb("hudLayout:larger"),
            onClick: () => {
              nb(1)
            },
            children: (0, Cb.jsx)(Db.e, {
              name: "plus"
            })
          })]
        }), (Wb || lb) && (0, Cb.jsxs)("div", {
          className: "HudQuickActions",
          children: [Wb && (0, Cb.jsxs)(Cb.Fragment, {
            children: [(0, Cb.jsx)(Eb, {
              id: Wb.id,
              actionButtons: Gb,
              keyNames: Ub,
              locked: db,
              lockable: ob(Wb.id),
              onLocked: Ab
            }), (0, Cb.jsx)(Pb, {
              id: Wb.id,
              elements: Ob.hudElements,
              actionButtons: Gb,
              keyNames: Ub,
              onHidden: Zb
            }), (0, Cb.jsx)(qb, {
              id: Wb.id,
              elements: Ob.hudElements,
              actionButtons: Gb,
              keyNames: Ub,
              locked: db,
              onReset: Xb
            }), kb(Wb.id, Hb) && (0, Cb.jsx)(Tb, {})]
          }), lb]
        })]
      })
    }
    var nu = hb(1023),
      Du = hb(4170);
    const xu = "HudPreviewDoc",
      zu = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      gu = new Set([xu, ...Object.values(zu)]),
      iu = new Set(zb.B.map(Bu.D)),
      vu = new Set(Bu.h),
      tu = 'style, link[rel="stylesheet"]';

    function Ju(bb, ub, hb, Bb) {
      const Ob = new Map,
        Gb = new Set,
        Ub = new URL(bb.baseURI).origin,
        Lb = ub => {
          var hb;
          if ("LINK" !== ub.nodeName) return !0;
          const Bb = null === (hb = ub.getAttribute("href")) || void 0 === hb ? void 0 : hb.trim();
          if (!Bb) return !1;
          try {
            return new URL(Bb, bb.baseURI).origin === Ub
          } catch {
            return !1
          }
        };
      let Yb = null;
      const Sb = () => {
          Yb !== (0 === Gb.size) && (Yb = 0 === Gb.size, null === Bb || void 0 === Bb || Bb(Yb))
        },
        ab = bb => {
          const ub = bb.cloneNode(!0);
          if ("LINK" === ub.tagName) {
            Gb.add(ub);
            const bb = () => {
              Gb.delete(ub), Sb()
            };
            ub.addEventListener("load", bb), ub.addEventListener("error", bb), hb && ub.addEventListener("load", hb)
          }
          return ub
        },
        Hb = () => {
          const Bb = function(bb) {
              const ub = [...bb.body.children].filter((bb => bb.matches(tu)));
              return [...bb.head.querySelectorAll(tu), ...ub]
            }(bb).filter(Lb),
            Ub = new Set(Bb);
          for (const [bb, ub] of Ob) Ub.has(bb) || (ub.remove(), Ob.delete(bb), Gb.delete(ub));
          let Yb = null;
          for (let bb = Bb.length - 1; bb >= 0; bb--) {
            const Gb = Bb[bb];
            let Ub = Ob.get(Gb);
            Ub ? "STYLE" === Gb.tagName && Ub.textContent !== Gb.textContent && (Ub.textContent = Gb.textContent, null === hb || void 0 === hb || hb()) : (Ub = ab(Gb), Ob.set(Gb, Ub), ub.head.insertBefore(Ub, Yb)), Yb = Ub
          }
          Sb()
        };
      Hb();
      const wb = new MutationObserver(Hb);
      return wb.observe(bb.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), wb.observe(bb.body, {
        childList: !0
      }), () => {
        wb.disconnect()
      }
    }

    function eu(bb, ub, hb) {
      let {
        keysAbove: Bb
      } = hb;
      const Ob = [...bb.documentElement.classList].filter((bb => !gu.has(bb) && !vu.has(bb))),
        Gb = [...ub.documentElement.classList].filter((bb => vu.has(bb))),
        Ub = [xu, zu.hotbar, zu.hasShop, zu.hasBag];
      Bb && Ub.push(zu.keysAbove), ub.documentElement.className = [...Ob, ...Ub, ...Gb].join(" ")
    }
    const Nu = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function su(bb, ub, hb, Bb, Ob) {
      const Gb = (0, zb.F)(hb, Bb, "joystick"),
        Ub = (0, Bu.F)((0, Bu.M)(hb, Bb, Ob), Bb),
        Lb = Ub.classes.filter((bb => !iu.has(bb))),
        Yb = ub.documentElement;
      (0, Bu.O)({
        ...Ub,
        classes: Lb
      }, {
        vars: Yb,
        safe: Yb,
        classes: Yb
      });
      const Sb = (0, Bu.H)(hb.hudLayouts[Bb].hudSafe, window.innerWidth, window.innerHeight, Mu(), (0, Bu.N)(ub));
      Yb.style.setProperty("--preview-joystick-shift-left", `${Sb[3]}px`), Yb.style.setProperty("--preview-joystick-shift-bottom", `${Sb[2]}px`), Yb.style.setProperty("--preview-joystick-scale", String(Gb[2])), (0, Du.g)(Yb, ub, hb, Bb);
      for (const ab of Nu) Yb.style.setProperty(ab, bb.documentElement.style.getPropertyValue(ab) || "0px")
    }

    function Mu() {
      return (0, Bu.K)(ab.d.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function mu(bb) {
      return (0, Bu.x)(Mu(), (0, Bu.N)(bb))
    }

    function Iu(bb, ub, hb) {
      const Bb = bb.documentElement.style,
        Ob = (0, Bu.I)(ub),
        Gb = Bb.getPropertyValue(Ob);
      try {
        return hb((bb => {
          Bb.setProperty(Ob, String(bb))
        }))
      } finally {
        "" === Gb ? Bb.removeProperty(Ob) : Bb.setProperty(Ob, Gb)
      }
    }

    function Pu(bb, ub) {
      const [hb, Bb] = Iu(bb, "hotbar", (ub => {
        const hb = hb => {
          var Bb, Ob;
          return ub(hb), null !== (Bb = null === (Ob = bb.querySelector(".HotBarGameItemsContainer")) || void 0 === Ob ? void 0 : Ob.getBoundingClientRect().width) && void 0 !== Bb ? Bb : 0
        };
        return [hb(1), hb(zb.h)]
      }));
      return hb <= 0 ? zb.h : Math.min(zb.h, Math.max(1, Math.floor(Bb / hb / ub + 1e-6) * ub))
    }
    const qu = 3,
      Eu = .5,
      yu = bb => bb.right - bb.left;
    const Vu = (bb, ub) => Math.abs((0, uu.b)(bb).x - (0, uu.b)(ub).x) + Math.abs((0, uu.b)(bb).y - (0, uu.b)(ub).y) + Math.abs(yu(bb) - yu(ub));

    function Fu(bb, ub, hb, Bb, Ob) {
      let {
        canKeep: Gb = () => !0,
        passes: Ub = qu,
        before: Lb,
        keysAboveOf: Yb
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const Sb = void 0 !== Yb && Yb(bb) !== Yb(ub),
        ab = ub.hudLayouts[hb].hudLocked.filter((bb => Gb(bb) && !(Sb && "inventory" === bb))),
        Hb = new Set(ab);
      if (0 === Hb.size) return ub;
      const wb = [...vb].filter((Bb => !ab.includes(Bb) && (0, zb.F)(bb, hb, Bb).join() === (0, zb.F)(ub, hb, Bb).join())),
        Zb = bb => {
          const ub = (0, uu.A)(wb.flatMap((ub => bb[ub] ? [bb[ub]] : [])));
          return {
            ...bb,
            cluster: null !== ub && void 0 !== ub ? ub : void 0
          }
        },
        Xb = bb => {
          const ub = Ob(bb);
          return ub && Zb(ub)
        },
        pb = Lb ? Zb(Lb) : Xb(bb);
      let ob = pb && Xb(ub);
      if (!pb || !ob) return ub;
      let Ab = ub;
      for (let lb = 0; lb < Ub && Hb.size > 0; lb++) {
        const bb = new Map;
        for (const ub of Hb) {
          const Ob = pb[ub],
            Gb = ob[ub],
            Ub = Ob && Gb ? fu(ub, (0, zb.F)(Ab, hb, ub), Ob, Gb, Bb) : null;
          Ub ? bb.set(ub, Ub) : Hb.delete(ub)
        }
        if (0 === bb.size) break;
        let Ob = Ab;
        for (const [ub, Bb] of bb) Ob = (0, zb.gb)(Ob, hb, ub, Bb);
        const Gb = Xb(Ob);
        if (!Gb) return ub;
        let Ub = Ab;
        for (const [ub, Bb] of bb) {
          const bb = Gb[ub];
          bb && Vu(pb[ub], bb) < Vu(pb[ub], ob[ub]) - Eu ? Ub = (0, zb.gb)(Ub, hb, ub, Bb) : Hb.delete(ub)
        }
        if (Ub === Ab) break;
        const Lb = [...bb.keys()].every((bb => Hb.has(bb)));
        if (Ab = Ub, ob = Lb ? Gb : Xb(Ab), !ob) return ub
      }
      return Ob(Ab), Ab
    }

    function fu(bb, ub, hb, Bb, Ob) {
      let [Gb, Ub, Lb] = ub;
      const Yb = zb.A[bb],
        Sb = {};
      Yb.scale && yu(Bb) > 0 && Math.abs(yu(hb) - yu(Bb)) > Eu && (Sb.scale = Math.max(zb.k, Math.min(zb.h, Lb * yu(hb) / yu(Bb))));
      const ab = (0, uu.b)(hb).x - (0, uu.b)(Bb).x,
        Hb = (0, uu.b)(hb).y - (0, uu.b)(Bb).y;
      return Yb.move && (Math.abs(ab) > Eu || Math.abs(Hb) > Eu) && (Sb.dx = Gb + ab / Ob.width, Sb.dy = Ub + Hb / Ob.height), void 0 === Sb.scale && void 0 === Sb.dx ? null : Sb
    }
    let ku = 0;

    function Tu() {
      return ku > 0
    }
    const cu = bb => 0 === bb.dx && 0 === bb.dy,
      Qu = .001,
      Ru = bb => Math.abs(bb.dx) >= 5e-4 || Math.abs(bb.dy) >= 5e-4 ? bb : {
        dx: bb.dx,
        dy: bb.dy < 0 ? -.001 : Qu
      };

    function bh(bb) {
      let {
        preview: ub,
        stageRef: hb,
        ringRef: Bb,
        centreLineRef: Gb,
        snapCentre: Ub,
        ready: Lb,
        measure: Yb,
        k: Sb,
        viewport: ab,
        boxes: Hb,
        pieces: wb,
        selected: Zb,
        insets: Xb,
        layout: pb,
        canMove: ob,
        onSelect: Ab,
        onMove: lb
      } = bb;
      const Kb = (0, Ob.useRef)(null),
        Wb = (0, Ob.useCallback)((() => null !== Kb.current), []),
        Cb = (bb, ub) => {
          if (!ub) return null;
          const hb = (0, uu.b)(bb.origin),
            Bb = (0, uu.b)(ub),
            Ob = (bb.to.dx - bb.from.dx) * ab.width,
            Gb = (bb.to.dy - bb.from.dy) * ab.height,
            Ub = ub.right - ub.left,
            Lb = ub.bottom - ub.top;
          return {
            skew: {
              x: Bb.x - hb.x - Ob,
              y: Bb.y - hb.y - Gb
            },
            box: {
              left: hb.x - Ub / 2,
              top: hb.y - Lb / 2,
              right: hb.x + Ub / 2,
              bottom: hb.y + Lb / 2
            }
          }
        },
        db = (bb, hb) => {
          var Ob;
          const Ub = Kb.current;
          if (!Ub || Ub.pointerId !== bb.pointerId) return;
          Kb.current = null, null === (Ob = Gb.current) || void 0 === Ob || Ob.classList.remove("Shown", "Snapped");
          const Lb = Bb.current;
          if (Lb && null !== Ub.ringStyle && Lb.setAttribute("style", Ub.ringStyle), hb && Ub.moved) {
            const bb = cu(Ub.to) ? null : Yb(Ub.id),
              ub = bb ? (0, uu.w)(bb, (0, uu.u)(ab.width, ab.height, Xb)) : {
                x: 0,
                y: 0
              },
              hb = {
                dx: Ub.to.dx + ub.x / ab.width,
                dy: Ub.to.dy + ub.y / ab.height
              },
              Bb = cu(Ub.to) ? hb : Ru(hb);
            lb(Ub.id, Bb.dx, Bb.dy)
          } else ub(Ub.id, null), hb && Ub.tapPick && Ab(Ub.tapPick)
        };
      return {
        busy: Wb,
        handlers: {
          onPointerDown: bb => {
            var ub;
            if (!Lb || Kb.current || !bb.target.closest(".HudPreviewHandle")) return;
            const Bb = hb.current.getBoundingClientRect(),
              Ob = {
                x: (bb.clientX - Bb.left) / Sb,
                y: (bb.clientY - Bb.top) / Sb
              },
              Gb = (0, uu.o)(Ob, wb, 40 / Sb),
              Ub = "cluster" === Zb && void 0 !== Hb.cluster && null !== (0, uu.o)(Ob, [{
                id: "cluster",
                box: Hb.cluster
              }], 40 / Sb),
              Yb = "menu" === Zb && void 0 !== Hb.menu && (0, uu.c)(Hb.menu, Ob) && ("menu" === Gb || null !== Gb && (0, hu.z)(Gb, pb.hudElements[Gb])),
              ab = Ub ? "cluster" : Yb ? "menu" : null,
              Xb = null !== ab,
              lb = null !== ab && void 0 !== ab ? ab : Gb;
            if (!lb) return;
            if (function(bb) {
                ku++;
                const ub = hb => {
                  hb.pointerId === bb && (ku = Math.max(0, ku - 1), window.removeEventListener("pointerup", ub, !0), window.removeEventListener("pointercancel", ub, !0))
                };
                window.addEventListener("pointerup", ub, !0), window.addEventListener("pointercancel", ub, !0)
              }(bb.pointerId), !ob(lb)) return void Ab(Xb && Gb ? Gb : lb);
            Ab(lb);
            const [Wb, Cb] = null !== (ub = pb.hudElements[lb]) && void 0 !== ub ? ub : [0, 0], db = {
              dx: Wb,
              dy: Cb
            }, rb = {
              skew: {
                x: 0,
                y: 0
              },
              box: Hb[lb]
            };
            Kb.current = {
              id: lb,
              pointerId: bb.pointerId,
              startX: bb.clientX,
              startY: bb.clientY,
              origin: Hb[lb],
              from: db,
              to: db,
              moved: !1,
              home: cu(db) ? {
                centre: (0, uu.b)(Hb[lb]),
                anchor: rb
              } : null,
              away: cu(db) ? null : rb,
              anchor: rb,
              ringStyle: null,
              tapPick: Xb ? Gb : null
            }, bb.currentTarget.setPointerCapture(bb.pointerId)
          },
          onPointerMove: bb => {
            const hb = Kb.current;
            if (!hb || hb.pointerId !== bb.pointerId) return;
            const Ob = bb.clientX - hb.startX,
              Lb = bb.clientY - hb.startY;
            if (!hb.moved && Math.hypot(Ob, Lb) < 5) return;
            const Hb = !hb.moved;
            var wb, Zb;
            (hb.moved = !0, Hb) && (hb.ringStyle = null !== (wb = null === (Zb = Bb.current) || void 0 === Zb ? void 0 : Zb.getAttribute("style")) && void 0 !== wb ? wb : null);
            const pb = (0, uu.u)(ab.width, ab.height, Xb);
            if (!hb.home) {
              var ob;
              hb.to = {
                dx: 0,
                dy: 0
              }, ub(hb.id, hb.to);
              const bb = Yb(hb.id),
                Bb = null !== (ob = Cb(hb, bb)) && void 0 !== ob ? ob : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: hb.origin
                },
                Ob = (0, uu.b)(hb.origin);
              hb.home = {
                centre: bb ? (0, uu.b)(bb) : {
                  x: Ob.x - hb.from.dx * ab.width,
                  y: Ob.y - hb.from.dy * ab.height
                },
                anchor: Bb
              }
            }
            const Ab = hb.home;
            let lb = !1;
            const Wb = bb => {
                lb = !1;
                let Bb = (0, uu.i)(bb.box, Ob / Sb, Lb / Sb, pb);
                const Gb = ab.width / 2;
                if (Ub && Math.abs((0, uu.b)(hb.origin).x + Bb.x - Gb) <= 8 / Sb) {
                  const ub = Gb - (0, uu.b)(hb.origin).x,
                    Ob = (0, uu.i)(bb.box, ub, Bb.y, pb);
                  lb = Math.abs(Ob.x - ub) < .01, lb && (Bb = Ob)
                }
                const Yb = (0, uu.n)(hb.from, Bb.x - bb.skew.x, Bb.y - bb.skew.y, ab.width, ab.height);
                hb.to = Ru(Yb), hb.anchor = bb, ub(hb.id, hb.to)
              },
              db = (0, uu.i)(Ab.anchor.box, Ob / Sb, Lb / Sb, pb),
              rb = Gb.current,
              jb = (0, uu.b)(hb.origin),
              nb = ((0, zb.S)(hb.id) ? 20 : 6) / Sb;
            if (Math.abs(jb.x + db.x - Ab.centre.x) <= nb && Math.abs(jb.y + db.y - Ab.centre.y) <= nb) hb.to = {
              dx: 0,
              dy: 0
            }, hb.anchor = Ab.anchor, lb = Ub && Math.abs(Ab.centre.x - ab.width / 2) < 1, ub(hb.id, hb.to);
            else if (hb.away) Wb(hb.away);
            else {
              var Db;
              Wb(Ab.anchor), hb.away = null !== (Db = Cb(hb, Yb(hb.id))) && void 0 !== Db ? Db : Ab.anchor, Wb(hb.away)
            }
            null === rb || void 0 === rb || rb.classList.add("Shown"), null === rb || void 0 === rb || rb.classList.toggle("Snapped", lb), (bb => {
              const ub = Bb.current;
              if (ub) {
                const {
                  skew: hb,
                  box: Bb
                } = bb.anchor;
                ub.style.left = Bb.left * Sb + "px", ub.style.top = Bb.top * Sb + "px", ub.style.width = (Bb.right - Bb.left) * Sb + "px", ub.style.height = (Bb.bottom - Bb.top) * Sb + "px", ub.style.translate = `${((bb.to.dx-bb.from.dx)*ab.width+hb.x)*Sb}px ${((bb.to.dy-bb.from.dy)*ab.height+hb.y)*Sb}px`
              }
            })(hb)
          },
          onPointerUp: bb => {
            db(bb, !0)
          },
          onPointerCancel: bb => {
            db(bb, !1)
          }
        }
      }
    }

    function uh(bb, ub) {
      return Object.keys(bb).filter((bb => bb !== ub)).map((ub => bb[ub]))
    }

    function hh(bb) {
      const ub = [],
        hb = ub => (0, zb.S)(ub) && !bb.documentElement.classList.contains((0, Bu.G)(ub));
      for (const Ub of bb.querySelectorAll(`[${sb}]`)) {
        const bb = hb(Ub.getAttribute(sb)) ? Ub.querySelector(".ScaleOnHover") : null,
          Bb = (null !== bb && void 0 !== bb ? bb : Ub).getBoundingClientRect();
        (Bb.width > 0 || Bb.height > 0) && ub.push({
          id: Ub.getAttribute(sb),
          box: {
            left: Bb.left,
            top: Bb.top,
            right: Bb.right,
            bottom: Bb.bottom
          }
        })
      }
      const Bb = bb => (0, uu.A)(ub.filter((ub => {
          let {
            id: hb
          } = ub;
          return bb(hb)
        })).map((bb => {
          let {
            box: ub
          } = bb;
          return ub
        }))),
        Ob = {};
      for (const Ub of new Set(ub.map((bb => bb.id)))) Ob[Ub] = Bb((bb => bb === Ub));
      const Gb = Bb((bb => vb.has(bb)));
      return Gb && (Ob.cluster = Gb), {
        boxes: Ob,
        pieces: ub
      }
    }

    function Bh(bb, ub, hb) {
      const Bb = ub.right - ub.left,
        Ob = ub.bottom - ub.top;
      return Iu(bb, "cluster", (ub => {
        const Gb = hb => {
            ub(hb);
            const Bb = [...bb.querySelectorAll(`[${sb}]:not(.HudPreviewGhost)`)].filter((bb => vb.has(bb.getAttribute(sb)))).map((bb => {
                const ub = bb.getBoundingClientRect();
                return {
                  left: ub.left,
                  top: ub.top,
                  right: ub.right,
                  bottom: ub.bottom
                }
              })),
              Ob = (0, uu.A)(Bb);
            return Ob ? {
              w: Ob.right - Ob.left,
              h: Ob.bottom - Ob.top
            } : null
          },
          Ub = bb => !bb || bb.w <= Bb && bb.h <= Ob,
          Lb = Gb(1),
          Yb = Gb(zb.h);
        if (!Lb || Ub(Yb)) return zb.h;
        const Sb = (bb, ub, hb) => ub > bb ? 1 + (hb - bb) * (zb.h - 1) / (ub - bb) : zb.h;
        let ab = Math.floor(Math.min(zb.h, Sb(Lb.w, Yb.w, Bb), Sb(Lb.h, Yb.h, Ob)) / hb + 1e-6) * hb;
        for (; ab > 1 && !Ub(Gb(ab));) ab = Math.round(100 * (ab - hb)) / 100;
        return Math.max(1, ab)
      }))
    }

    function Oh(bb) {
      eu(document, bb, {
        keysAbove: !1
      });
      const ub = parseFloat(getComputedStyle(bb.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        hb = Number.isFinite(ub) && ub < 0;
      return eu(document, bb, {
        keysAbove: hb
      }), hb
    }

    function Gh(bb, ub) {
      let {
        layout: hb,
        orientation: Bb,
        viewport: Gb,
        replicaKey: Ub,
        joystickFixed: Lb,
        busy: Yb
      } = ub;
      const [Sb, ab] = (0, Ob.useState)(null), [Hb, wb] = (0, Ob.useState)({
        boxes: {},
        pieces: []
      }), [Zb, Xb] = (0, Ob.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [pb, ob] = (0, Ob.useState)(!1), [Ab, lb] = (0, Ob.useState)(!1), [Kb, Wb] = (0, Ob.useState)(!1), Cb = (0, Ob.useCallback)((bb => {
        lb(bb), bb && Wb(!0)
      }), []), db = hb.hudLayouts[Bb].hudSafe;
      (0, Ob.useLayoutEffect)((() => {
        const ub = bb.current.contentDocument;
        ub.open(), ub.write("<!DOCTYPE html><html><head></head><body></body></html>"), ub.close(), ab(ub)
      }), [bb]);
      const rb = (0, Ob.useCallback)((() => {
          Sb && ((0, hu.A)(Sb), wb(hh(Sb)), Xb(function(bb, ub) {
            const hb = mu(bb),
              [Bb, Ob, Gb, Ub] = ub ? (0, Bu.B)(ub, window.innerWidth, window.innerHeight, hb) : hb;
            return {
              top: Bb,
              right: Ob,
              bottom: Gb,
              left: Ub
            }
          }(Sb, db)))
        }), [Sb, db]),
        jb = (0, Ob.useCallback)((() => {
          Sb && ob(Oh(Sb))
        }), [Sb]),
        nb = (0, Ob.useRef)((() => {}));
      return nb.current = () => {
        jb(), Yb() || rb()
      }, (0, Ob.useLayoutEffect)((() => {
        if (Sb) return Ju(document, Sb, (() => {
          nb.current()
        }), Cb)
      }), [Sb, Cb]), (0, Ob.useLayoutEffect)(jb, [jb, Gb]), (0, Ob.useLayoutEffect)((() => {
        Sb && (eu(document, Sb, {
          keysAbove: pb
        }), su(document, Sb, hb, Bb, Lb), jb(), rb())
      }), [Sb, hb, Bb, pb, Ub, Lb, Gb, rb, jb]), (0, Ob.useEffect)((() => {
        var bb;
        if (!Sb) return;
        const ub = new ResizeObserver((() => {
          Yb() || rb()
        }));
        for (const hb of Sb.querySelectorAll(`[${sb}]`)) ub.observe(hb);
        return null === (bb = Sb.fonts) || void 0 === bb || bb.ready.then(rb), () => {
          ub.disconnect()
        }
      }), [Sb, rb, Yb, Ub]), {
        doc: Sb,
        boxes: Hb.boxes,
        pieces: Hb.pieces,
        insets: Zb,
        keysAbove: pb,
        ready: Ab,
        settled: Kb
      }
    }
    const Uh = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      Lh = (bb, ub, hb) => {
        const Bb = bb => (0, hu.z)(bb, hb.hudElements[bb]);
        return "cluster" === bb && vb.has(ub) || "cluster" === ub && vb.has(bb) || "menu" === bb && Bb(ub) || "menu" === ub && Bb(bb) || Uh.some((Bb => {
          let [Ob, Gb] = Bb;
          const Ub = hb.hudElements.hotbar,
            Lb = "inventory" === Gb && hb.hudLocked.includes(Gb) && void 0 !== Ub && !(0, zb.P)(Ub);
          return (bb === Ob && ub === Gb || bb === Gb && ub === Ob) && !Lb
        }))
      };
    const Yh = ["Above", "Below", "Left", "Right"];

    function Sh(bb, ub, hb, Bb, Ob) {
      const Gb = hb[bb],
        Ub = (Gb.left + Gb.right) / 2,
        Lb = (Gb.top + Gb.bottom) / 2,
        Yb = (7.5 * ub.length + 14) / Bb,
        Sb = 18 / Bb,
        ab = {
          Above: {
            left: Ub - Yb / 2,
            top: Gb.top - Sb,
            right: Ub + Yb / 2,
            bottom: Gb.top
          },
          Below: {
            left: Ub - Yb / 2,
            top: Gb.bottom,
            right: Ub + Yb / 2,
            bottom: Gb.bottom + Sb
          },
          Left: {
            left: Gb.left - Yb,
            top: Lb - Sb / 2,
            right: Gb.left,
            bottom: Lb + Sb / 2
          },
          Right: {
            left: Gb.right,
            top: Lb - Sb / 2,
            right: Gb.right + Yb,
            bottom: Lb + Sb / 2
          }
        },
        Hb = uh(hb, bb),
        wb = {
          left: 0,
          top: 0,
          right: Ob.width,
          bottom: Ob.height
        };
      return Yh[(0, uu.l)(Yh.map((bb => ab[bb])), Hb, {
        bounds: wb
      })]
    }

    function ah() {
      const [bb, ub] = (0, Rb.e)();
      return (0, Ob.useMemo)((() => ({
        width: bb,
        height: ub
      })), [bb, ub])
    }

    function Hh(bb) {
      var ub;
      const {
        layout: hb,
        orientation: Gb,
        selected: Ub,
        onSelect: Lb,
        onMove: Sb,
        canMove: ab,
        actionButtons: Hb,
        joystickFixed: wb,
        presence: Zb,
        keyNames: pb,
        maxHeight: ob,
        fill: Ab = !1,
        apiRef: lb
      } = bb, {
        t: Kb
      } = (0, Bb.K)(), Wb = ah(), db = (null !== (ub = (0, Xb.f)("maxAuraLevel")) && void 0 !== ub ? ub : 0) > 0, rb = hb.hudLayouts[Gb], jb = (0, Ob.useRef)(null), nb = (0, Ob.useRef)(null), xb = (0, Ob.useRef)(null), gb = (0, Ob.useRef)(null), ib = (0, Ob.useRef)(null), tb = (0, Ob.useRef)(null), Jb = (0, bu.b)(jb).width, eb = Ab ? 1 : Jb > 0 ? (0, uu.r)(Jb, Wb.width, Wb.height, ob) : 0, Nb = (0, Ob.useRef)((() => !1)), sb = (0, Ob.useCallback)((() => Nb.current()), []), {
        doc: mb,
        boxes: Ib,
        pieces: Pb,
        insets: qb,
        keysAbove: Eb,
        ready: yb,
        settled: Vb
      } = Gh(xb, {
        layout: hb,
        orientation: Gb,
        viewport: Wb,
        replicaKey: `${Hb}:${wb}:${db}`,
        joystickFixed: wb,
        busy: sb
      }), Fb = (0, Ob.useCallback)((bb => {
        mb && su(document, mb, bb, Gb, wb)
      }), [mb, Gb, wb]), fb = (0, Ob.useCallback)((bb => mb && Vb ? (Fb(bb), Oh(mb), function(bb) {
        let {
          boxes: ub,
          pieces: hb
        } = bb;
        const Bb = hb.find((bb => "inventory" === bb.id));
        if (!Bb || !ub.inventory) return ub;
        const Ob = (0, uu.b)(ub.inventory),
          Gb = yu(Bb.box) / 2,
          Ub = (Bb.box.bottom - Bb.box.top) / 2;
        return {
          ...ub,
          inventory: {
            left: Ob.x - Gb,
            top: Ob.y - Ub,
            right: Ob.x + Gb,
            bottom: Ob.y + Ub
          }
        }
      }(hh(mb))) : null), [mb, Vb, Fb]), kb = (0, Ob.useCallback)((bb => !!mb && (Fb(bb), Oh(mb))), [mb, Fb]), Tb = (0, Ob.useRef)(null), Qb = (0, Ob.useRef)(null), Rb = (0, Ob.useRef)(hb);
      Rb.current = hb;
      const Ou = (0, Ob.useCallback)((() => {
        null !== Tb.current && (cancelAnimationFrame(Tb.current), Tb.current = null)
      }), []);
      (0, Ob.useEffect)((() => Ou), [hb, Ou]);
      const {
        lockable: Gu
      } = bb, Uu = (0, Ob.useCallback)((bb => {
        if (Fb(bb), !Vb || 0 === hb.hudLayouts[Gb].hudLocked.length) return;
        const ub = hb;
        Ou(), Tb.current = requestAnimationFrame((() => {
          var hb;
          if (Tb.current = null, Rb.current !== ub) return;
          const Bb = (null === (hb = Qb.current) || void 0 === hb ? void 0 : hb.from) === ub ? Qb.current.boxes : fb(ub);
          Bb && (Qb.current = {
            from: ub,
            boxes: Bb
          }), Fb(Bb ? Fu(ub, bb, Gb, Wb, fb, {
            canKeep: Gu,
            passes: 1,
            before: Bb,
            keysAboveOf: kb
          }) : bb)
        }))
      }), [Fb, Vb, hb, Gb, Wb, fb, kb, Gu, Ou]), Lu = bh({
        preview: (bb, ub) => {
          ub ? Uu((0, zb.gb)(hb, Gb, bb, ub)) : (Ou(), Fb(hb))
        },
        stageRef: nb,
        ringRef: gb,
        centreLineRef: ib,
        snapCentre: hb.hudSnapCentre,
        ready: Vb,
        measure: bb => {
          var ub;
          return mb && yb && null !== (ub = hh(mb).boxes[bb]) && void 0 !== ub ? ub : null
        },
        k: eb,
        viewport: Wb,
        boxes: Ib,
        pieces: Pb,
        selected: Ub,
        insets: qb,
        layout: rb,
        canMove: ab,
        onSelect: Lb,
        onMove: (bb, ub, hb) => {
          Ou(), Sb(bb, ub, hb)
        }
      });
      (0, Ob.useLayoutEffect)((() => {
        Nb.current = Lu.busy
      }), [Lu.busy]);
      const Yu = (0, Ob.useRef)([]),
        Su = (0, Ob.useRef)(rb.hudElements);
      (0, Ob.useEffect)((() => {
        for (const Ob of Object.keys(rb.hudElements)) {
          var bb, ub, hb, Bb;
          (null !== (bb = null === (ub = rb.hudElements[Ob]) || void 0 === ub ? void 0 : ub[2]) && void 0 !== bb ? bb : 1) > (null !== (hb = null === (Bb = Su.current[Ob]) || void 0 === Bb ? void 0 : Bb[2]) && void 0 !== hb ? hb : 1) && ab(Ob) && !(0, hu.z)(Ob, rb.hudElements[Ob]) && Yu.current.push(Ob)
        }
        Su.current = rb.hudElements
      }), [rb.hudElements, ab]), (0, Ob.useEffect)((() => {
        if (!yb) return;
        const bb = Yu.current.shift(),
          ub = bb && Ib[bb];
        if (!bb || !ub || Lu.busy()) return;
        const hb = (0, uu.w)(ub, (0, uu.u)(Wb.width, Wb.height, qb));
        if (0 !== hb.x || 0 !== hb.y) {
          var Bb;
          const [ub, Ob] = null !== (Bb = rb.hudElements[bb]) && void 0 !== Bb ? Bb : [0, 0];
          Sb(bb, ub + hb.x / Wb.width, Ob + hb.y / Wb.height)
        }
      }), [Ib, yb]), (0, Ob.useImperativeHandle)(lb, (() => ({
        setScale: (bb, ub) => {
          Uu((0, zb.gb)(hb, Gb, bb, {
            scale: ub
          }))
        },
        setOpacity: bb => {
          Fb({
            ...hb,
            hudKeyOpacity: bb
          })
        },
        keepLocks: (bb, ub) => (Ou(), Fu(bb, ub, Gb, Wb, fb, {
          canKeep: Gu,
          keysAboveOf: kb
        })),
        setSafe: bb => {
          Uu((0, zb.lb)(hb, Gb, bb)), tb.current && (tb.current.style.inset = (0, Bu.B)(bb, Wb.width, Wb.height, mu(null !== mb && void 0 !== mb ? mb : document)).map((bb => bb * eb + "px")).join(" "))
        }
      })), [Fb, Uu, fb, kb, Ou, Gu, mb, hb, Gb, Wb, eb]);
      const au = new Set(Object.keys(rb.hudElements).filter((bb => (0, zb.w)(rb.hudElements, bb)))),
        Hu = Ub ? Ib[Ub] : void 0,
        wu = Ub ? Mb(Ub, Hb, Kb, pb) : "",
        Zu = (0, nu.h)(Wb.width, Wb.height),
        Xu = Ub ? function(bb, ub, hb, Bb) {
          const Ob = bb => (0, zb.w)(hb.hudElements, bb) || (0, hu.w)(bb, hb, Bb);
          if (Ob(bb)) return [];
          const Gb = ub.filter((ub => {
              let {
                id: hb
              } = ub;
              return "cluster" === bb ? vb.has(hb) : hb === bb
            })),
            Ub = new Set;
          for (const Lb of ub) Lb.id === bb || Ub.has(Lb.id) || Lh(bb, Lb.id, hb) || Ob(Lb.id) || void 0 === hb.hudElements[bb] && void 0 === hb.hudElements[Lb.id] || Gb.some((bb => {
            let {
              id: ub,
              box: hb
            } = bb;
            return ub !== Lb.id && (0, uu.f)(hb, Lb.box, 2)
          })) && Ub.add(Lb.id);
          return [...Ub]
        }(Ub, Pb, rb, Zu) : [],
        pu = new Set((0, hu.s)(rb.hudElements)),
        ou = (0, hu.I)(rb, (0, hu.F)(Zb.rowIcons)).state,
        Au = Xu.join(),
        lu = (0, Ob.useRef)(bb.onReady);
      lu.current = bb.onReady, (0, Ob.useEffect)((() => {
        var bb;
        null === (bb = lu.current) || void 0 === bb || bb.call(lu, Vb)
      }), [Vb]);
      const Ku = (0, Ob.useRef)(bb.onMeasured);
      (0, Ob.useLayoutEffect)((() => {
        Ku.current = bb.onMeasured
      })), (0, Ob.useEffect)((() => {
        var bb;
        const ub = mb ? {
          hotbar: Pu(mb, ru),
          cluster: Bh(mb, (0, uu.u)(Wb.width, Wb.height, qb), ru)
        } : {};
        null === (bb = Ku.current) || void 0 === bb || bb.call(Ku, Ib, Au ? Au.split(",") : [], ub)
      }), [Ib, Au, mb, Wb, qb]);
      const Wu = bb => ({
        left: bb.left * eb,
        top: bb.top * eb,
        width: (bb.right - bb.left) * eb,
        height: (bb.bottom - bb.top) * eb
      });
      return (0, Cb.jsx)("div", {
        ref: jb,
        className: Yb()("HudPreviewBox", {
          Fill: Ab
        }),
        style: {
          height: Wb.height * eb
        },
        children: (0, Cb.jsxs)("div", {
          ref: nb,
          className: "HudPreviewStage",
          style: {
            width: Wb.width * eb,
            height: Wb.height * eb
          },
          children: [(0, Cb.jsx)("iframe", {
            ref: xb,
            className: "HudPreviewFrame",
            title: Kb("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: Wb.width,
              height: Wb.height,
              transform: `scale(${eb})`
            }
          }), mb && (0, cb.createPortal)((0, Cb.jsx)(Cu, {
            presence: Zb,
            portraitPhone: Zu,
            hidden: au,
            actionButtons: Hb,
            joystickFixed: wb,
            keysAbove: Eb,
            auraBar: db,
            trayState: ou,
            moved: pu
          }), mb.body), (0, Cb.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...Lu.handlers,
            children: [(0, Cb.jsx)("div", {
              ref: tb,
              className: "HudPreviewSafeZone",
              style: {
                top: qb.top * eb,
                right: qb.right * eb,
                bottom: qb.bottom * eb,
                left: qb.left * eb
              }
            }), Pb.map(((bb, ub) => {
              let {
                id: hb,
                box: Bb
              } = bb;
              return (0, Cb.jsx)("div", {
                className: "HudPreviewHandle",
                style: Wu((0, uu.j)(Bb, 40 / eb))
              }, `${hb}:${ub}`)
            })), rb.hudLocked.map((bb => {
              const ub = Ib[bb];
              return ub && (0, Cb.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: ub.right * eb,
                  top: ub.top * eb
                },
                children: (0, Cb.jsx)(Db.e, {
                  name: "lock"
                })
              }, bb)
            })), (0, Cb.jsx)("div", {
              ref: ib,
              className: "HudPreviewCentreLine",
              style: {
                left: Wb.width / 2 * eb
              }
            }), Ub && Hu && (0, Cb.jsx)("div", {
              ref: gb,
              className: Yb()("HudPreviewRing", {
                Fixed: !ab(Ub),
                Overlap: Xu.length > 0
              }),
              style: Wu(Hu),
              children: (0, Cb.jsx)("span", {
                className: Yb()("HudPreviewRingLabel", Sh(Ub, wu, Ib, eb, Wb)),
                children: wu
              })
            })]
          })]
        })
      })
    }

    function wh(bb, ub) {
      (0, Ob.useEffect)((() => {
        var hb;
        null === (hb = bb.current) || void 0 === hb || hb.toggleAttribute("inert", ub)
      }), [bb, ub])
    }
    const Zh = "hudFullScreen";

    function Xh(bb) {
      let {
        onScale: ub,
        onHidden: hb,
        onReset: Gb,
        locked: Ub,
        lockable: Lb,
        onLocked: Yb,
        onClose: ab,
        ...Hb
      } = bb;
      const {
        t: wb
      } = (0, Bb.K)(), Zb = (0, Ob.useRef)(null);
      (0, Qb.v)("popup", Zb, ab),
      function(bb) {
        const ub = (0, Ob.useRef)(bb);
        ub.current = bb, (0, Ob.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Zh]: !0
          }, "");
          let bb = !1;
          const hb = () => {
            bb = !0, ub.current()
          };
          return window.addEventListener("popstate", hb), () => {
            var ub;
            window.removeEventListener("popstate", hb), !bb && null !== (ub = window.history.state) && void 0 !== ub && ub[Zh] && window.history.back()
          }
        }), [])
      }(ab), (0, Ob.useEffect)((() => {
        function bb(bb) {
          "Escape" === bb.key && (bb.stopPropagation(), ab())
        }
        return window.addEventListener("keydown", bb, !0), () => {
          window.removeEventListener("keydown", bb, !0)
        }
      }), [ab]);
      const {
        selected: Xb
      } = Hb, pb = (0, Ob.useRef)(null), ob = (0, Ob.useRef)(null), [Ab, lb] = (0, Ob.useState)(!1);
      wh(ob, !Ab);
      const [Kb, Wb] = (0, Ob.useState)(null), [db, rb] = (0, Ob.useState)([]), [jb, nb] = du(), Db = (0, Ob.useRef)(Hb.selected);
      Db.current = Hb.selected;
      const xb = (0, Ob.useRef)({}),
        zb = (0, Ob.useCallback)((() => {
          const bb = pb.current;
          bb && Wb(function(bb, ub, hb) {
            var Bb;
            const {
              innerWidth: Ob,
              innerHeight: Gb
            } = window, Ub = bb.offsetWidth, Lb = bb.offsetHeight, Yb = Math.max(Mu()[0], 6), Sb = [];
            for (const wb of [Yb, .2 * Gb, .5 * Gb - Lb / 2, .33 * Gb])
              for (const bb of [.5, .3, .7]) Sb.push({
                left: Math.max(0, Math.min(Ob - Ub - 6, Math.max(6, Ob * bb - Ub / 2))),
                top: wb
              });
            const ab = Sb.map((bb => ({
                left: bb.left - 6,
                top: bb.top - 6,
                right: bb.left + Ub + 6,
                bottom: bb.top + Lb + 6
              }))),
              Hb = uh(ub, hb);
            return Sb[(0, uu.l)(ab, Hb, {
              avoid: hb && null !== (Bb = ub[hb]) && void 0 !== Bb ? Bb : null
            })]
          }(bb, xb.current, Db.current))
        }), []),
        gb = (0, Ob.useCallback)(((bb, ub, hb) => {
          rb(ub), nb(hb), xb.current = bb, zb()
        }), [zb, nb]);
      return (0, Ob.useLayoutEffect)(zb, [Hb.selected, zb]), (0, cb.createPortal)((0, Cb.jsxs)("div", {
        ref: Zb,
        className: "HudFullScreenEditor",
        children: [(0, Cb.jsx)(Hh, {
          ...Hb,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: gb,
          onReady: lb,
          lockable: Lb
        }), (0, Cb.jsxs)("div", {
          ref: pb,
          className: "HudFullScreenToolbar",
          style: null === Kb ? void 0 : {
            left: Kb.left,
            top: Kb.top,
            transform: "none"
          },
          children: [(0, Cb.jsx)("div", {
            ref: ob,
            className: "HudFullScreenControls",
            children: (0, Cb.jsx)(ju, {
              selected: Xb,
              layout: Hb.layout.hudLayouts[Hb.orientation],
              actionButtons: Hb.actionButtons,
              keyNames: Hb.keyNames,
              overlaps: db,
              scaleCaps: jb,
              onScale: ub,
              onHidden: hb,
              onReset: Gb,
              locked: Ub,
              lockable: Lb,
              onLocked: Yb,
              joystickFixed: Hb.joystickFixed
            })
          }), (0, Cb.jsx)(Sb.e, {
            className: "HudFullScreenDone",
            onClick: ab,
            padDefaultFocus: !0,
            children: wb("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const ph = bb => `${Math.round(100*bb)}%`;

    function oh(bb) {
      let {
        info: ub,
        tuple: hb,
        props: Ob
      } = bb;
      const {
        t: Gb
      } = (0, Bb.K)();
      return (0, Cb.jsx)(Zb.h, {
        name: Gb("hudLayout:size"),
        min: zb.k,
        max: zb.h,
        step: ru,
        initValue: hb[2],
        disabled: Ob.locked.has(ub.id),
        selectableMax: Ob.scaleCaps[ub.id],
        cappedNote: Gb("hudLayout:sizeCapped"),
        format: ph,
        onChange: bb => {
          Ob.onScalePreview(ub.id, bb)
        },
        onChangeComplete: bb => {
          Ob.onScale(ub.id, bb)
        }
      })
    }

    function Ah(bb) {
      const {
        t: ub
      } = (0, Bb.K)(), {
        present: hb,
        elements: Gb,
        selected: Ub,
        onSelect: Lb,
        onHidden: Sb,
        onReset: ab,
        note: Hb,
        actionButtons: wb,
        keyNames: Zb,
        sizeBesidePreview: Xb,
        locked: pb,
        lockable: ob,
        onLocked: Ab
      } = bb, {
        rowIconsOpen: lb,
        onRowIconsOpen: Kb
      } = bb, Wb = (0, Ob.useRef)(null), db = null !== Ub && (lb || !(0, zb.S)(Ub));
      return (0, Ob.useEffect)((() => {
        var bb;
        const ub = Ub ? null === (bb = Wb.current) || void 0 === bb ? void 0 : bb.querySelector(`[data-hud-row="${Ub}"]`) : null;
        if (!ub) return;
        const hb = ub.closest(".SettingsMenuRight"),
          Bb = performance.now();
        let Ob = null;
        const Gb = () => {
            clearInterval(Yb), null === hb || void 0 === hb || hb.removeEventListener("scroll", Lb)
          },
          Lb = () => {
            Tu() || Gb()
          },
          Yb = setInterval((() => {
            const bb = performance.now();
            bb - Bb > 1500 ? Gb() : Tu() ? Ob = null : null === Ob ? Ob = bb : bb - Ob >= 150 && (Gb(), function(bb) {
              var ub;
              const hb = bb.closest(".SettingsMenuRight"),
                Bb = null === (ub = bb.closest(".HudLayoutSettings")) || void 0 === ub ? void 0 : ub.querySelector(".HudLayoutPreviewBox");
              if (!hb || !Bb) return;
              const Ob = Bb.getBoundingClientRect().bottom + 8,
                Gb = hb.getBoundingClientRect().bottom - 8,
                Ub = bb.getBoundingClientRect();
              Ub.top < Ob ? hb.scrollBy({
                top: Ub.top - Ob,
                behavior: "smooth"
              }) : Ub.bottom > Gb && hb.scrollBy({
                top: Math.min(Ub.bottom - Gb, Ub.top - Ob),
                behavior: "smooth"
              })
            }(ub))
          }), 50);
        return null === hb || void 0 === hb || hb.addEventListener("scroll", Lb, {
          passive: !0
        }), Gb
      }), [Ub, db]), (0, Cb.jsx)("div", {
        ref: Wb,
        className: "SettingBoxGroup HudElementList",
        children: eb.filter((bb => hb.has(bb.id) && (lb || !(0, zb.S)(bb.id)))).map((hb => {
          const Bb = ((bb, ub) => {
              var hb;
              return null !== (hb = bb[ub]) && void 0 !== hb ? hb : zb.q
            })(Gb, hb.id),
            Ob = (0, zb.w)(Gb, hb.id),
            Wb = hb.id === Ub,
            db = hb.scale && !Xb,
            rb = Hb(hb.id, Wb);
          return (0, Cb.jsxs)("div", {
            "data-hud-row": hb.id,
            className: Yb()("SettingBox HudElementRow", {
              Open: Wb,
              Hidden: Ob,
              Child: void 0 !== hb.parent
            }),
            children: [(0, Cb.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, Cb.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": db ? Wb : void 0,
                onClick: () => {
                  Lb(hb.id)
                },
                children: [Mb(hb.id, wb, ub, Zb), hb.scale && 1 !== Bb[2] && !(Wb && db) && (0, Cb.jsx)("span", {
                  className: "HudElementRowSize",
                  children: ph(Bb[2])
                }), db && (0, Cb.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, Cb.jsx)(Eb, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: hb.id,
                actionButtons: wb,
                keyNames: Zb,
                locked: pb.has(hb.id),
                lockable: ob(hb.id),
                onLocked: Ab
              }), "menu" === hb.id && (0, Cb.jsx)(yb, {
                className: "HudElementRowIcon",
                open: lb,
                name: Mb(hb.id, wb, ub, Zb),
                onToggle: Kb
              }), "menu" !== hb.id && (0, Cb.jsx)(Pb, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: hb.id,
                elements: Gb,
                actionButtons: wb,
                keyNames: Zb,
                onHidden: Sb
              }), (0, Cb.jsx)(qb, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: pb.has(hb.id),
                id: hb.id,
                elements: Gb,
                actionButtons: wb,
                keyNames: Zb,
                onReset: ab
              })]
            }), Wb && db && (0, Cb.jsx)(oh, {
              info: hb,
              tuple: Bb,
              props: bb
            }), rb && (0, Cb.jsx)("div", {
              className: "HudElementNote",
              children: rb
            })]
          }, hb.id)
        }))
      })
    }

    function lh(bb) {
      let {
        preview: ub,
        quick: hb,
        onFullScreen: Gb,
        resting: Ub,
        onSidePanel: Lb
      } = bb;
      const {
        t: Yb
      } = (0, Bb.K)(), ab = ah(), Hb = (0, Ob.useRef)(null), {
        width: wb
      } = (0, bu.b)(Hb), Zb = Math.floor(ab.width * Math.min(1, ub.maxHeight / ab.height)), Xb = wb - Zb - 12, pb = Xb >= 130, ob = wb > 0;
      (0, Ob.useEffect)((() => {
        ob && Lb(pb)
      }), [ob, pb, Lb]);
      const Ab = (0, uu.r)(pb ? Zb : wb, ab.width, ab.height, ub.maxHeight),
        lb = Ub ? (0, Cb.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: ab.height * Ab
          }
        }) : (0, Cb.jsx)(Hh, {
          ...ub
        }),
        Kb = bb => (0, Cb.jsxs)(Sb.O, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: Yb("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: Gb,
          children: [(0, Cb.jsx)(Db.e, {
            name: "expand"
          }), bb && (0, Cb.jsx)("span", {
            children: Yb("hudLayout:fullScreen")
          })]
        });
      return (0, Cb.jsxs)("div", {
        ref: Hb,
        className: "SettingBox HudLayoutPreviewBox",
        children: [wb > 0 && pb && (0, Cb.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, Cb.jsx)("div", {
            style: {
              width: Zb
            },
            children: lb
          }), (0, Cb.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, Cb.jsx)(ju, {
              selected: ub.selected,
              ...hb,
              joystickFixed: ub.joystickFixed,
              extra: Kb(!ub.selected || Xb >= 278)
            })
          })]
        }), wb > 0 && !pb && (0, Cb.jsxs)(Cb.Fragment, {
          children: [lb, (0, Cb.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: Kb(!1)
          })]
        })]
      })
    }
    var Kh = hb(2351),
      Wh = hb(4163),
      Ch = hb(2326),
      dh = hb(2283);
    const rh = bb => {
      const ub = Bu.r * ("sides" === bb ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(ub / 2))
    };

    function jh(bb, ub, hb) {
      const [Bb, Ob, Gb, Ub] = bb;
      return "sides" === ub ? [Bb, hb, Gb, hb] : [hb, Ob, hb, Ub]
    }
    const nh = [null, null, null, null],
      Dh = bb => `${bb}px`;

    function xh(bb) {
      let {
        safe: ub,
        onPreview: hb,
        onCommit: Gb
      } = bb;
      const {
        t: Ub
      } = (0, Bb.K)(), Lb = (0, Bu.B)(null !== ub && void 0 !== ub ? ub : nh, window.innerWidth, window.innerHeight, mu(document).map(Math.round)), Yb = (0, Ob.useRef)(null !== ub && void 0 !== ub ? ub : nh);
      Yb.current = null !== ub && void 0 !== ub ? ub : nh;
      const ab = bb => {
        const ub = Math.min(rh(bb), "sides" === bb ? Math.max(Lb[1], Lb[3]) : Math.max(Lb[0], Lb[2]));
        return (0, Cb.jsx)(Zb.h, {
          name: Ub("sides" === bb ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: rh(bb),
          step: 2,
          initValue: ub,
          format: Dh,
          onChange: ub => {
            hb(jh(Yb.current, bb, ub))
          },
          onChangeComplete: Bb => {
            if (Bb === ub) return void hb(Yb.current);
            const Ob = jh(Yb.current, bb, Bb);
            Yb.current = Ob, Gb(Ob), (0, jb.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: bb
            })
          }
        })
      };
      return (0, Cb.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, Cb.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, Cb.jsx)("div", {
            children: Ub("hudLayout:safeZone")
          }), (0, Cb.jsx)(Sb.O, {
            active: null === ub,
            pressed: null === ub,
            onClick: () => {
              Gb(null)
            },
            children: Ub("hudLayout:safeZoneAuto")
          })]
        }), ab("sides"), ab("ends")]
      })
    }

    function zh() {
      var bb, ub;
      const {
        t: hb
      } = (0, Bb.K)(), Gb = (0, zb.eb)(), {
        clientEscMenuOptions: Ub
      } = (0, ab.j)(["clientEscMenuOptions"]), Lb = (0, Kh.g)(), Yb = Gb.hudLayouts[Lb], [Hb, wb] = (0, Ob.useState)(null), {
        rowIconsOpen: Xb,
        onRowIconsOpen: pb,
        select: ob
      } = function(bb, ub) {
        const [hb, Bb] = (0, Ob.useState)((() => zb.G.some((ub => void 0 !== bb.hudElements[ub] || bb.hudLocked.includes(ub))))), Gb = (0, Ob.useCallback)((bb => {
          ub(bb), (0, zb.S)(bb) && Bb(!0)
        }), [ub]);
        return {
          rowIconsOpen: hb,
          onRowIconsOpen: Bb,
          select: Gb
        }
      }(Yb, wb), [Ab, lb] = (0, Ob.useState)([]), [Kb, Wb] = (0, Ob.useState)(null), [db, rb] = du(), Db = (0, Ob.useCallback)(((bb, ub, hb) => {
        lb(ub), rb(hb);
        const Bb = Object.keys(bb);
        Wb((bb => (null === bb || void 0 === bb ? void 0 : bb.size) === Bb.length && Bb.every((ub => bb.has(ub))) ? bb : new Set(Bb)))
      }), [rb]), {
        gameState: xb
      } = (0, ab.j)(["gameState"]), gb = (0, Ch.g)(), ib = null !== (bb = null === (ub = (0, dh.n)()) || void 0 === ub ? void 0 : ub.icon) && void 0 !== bb ? bb : null, [vb] = (0, Ob.useState)((() => "inGame" === xb ? function(bb, ub, hb) {
        const Bb = bb.querySelector(".InGameUi .TouchComponentsButtons");
        if (!Bb) return Uu;
        const Ob = {},
          Gb = {};
        for (const ab of Gu) {
          const bb = Bb.querySelector(`.TouchSlot${ab} > .TouchKey`);
          if (bb) {
            var Ub, Lb;
            Ob[ab] = bb.cloneNode(!0);
            const ub = (null !== (Ub = null === (Lb = bb.querySelector(".TouchKeyLabel")) || void 0 === Lb ? void 0 : Lb.textContent) && void 0 !== Ub ? Ub : "").split(/\s+/).filter((bb => !/[\d\xd7]/.test(bb))).join(" ");
            ub && (Gb[ab] = ub)
          }
        }
        const Yb = ub => {
            const hb = bb.querySelector(`.InGameUi ${ub}`);
            return null !== hb && !hb.classList.contains("Hidden")
          },
          Sb = [...bb.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((bb => bb.cloneNode(!0)));
        return {
          faces: Object.keys(Ob).length > 0 ? Ob : null,
          names: Gb,
          shop: Yb(".TouchInventoryKey.ShopKey"),
          bag: Yb(".TouchInventoryKey.BagKey"),
          items: Sb.length > 0 ? Sb : null,
          rowIcons: ub,
          pinnedIcon: hb
        }
      }(document, gb, ib) : Uu)), tb = (0, Ob.useRef)(null), Jb = (0, Ob.useRef)(null), sb = function(bb) {
        const [ub, hb] = (0, Ob.useState)((() => .4 * window.innerHeight));
        return (0, Ob.useLayoutEffect)((() => {
          var ub;
          const Bb = null === (ub = bb.current) || void 0 === ub ? void 0 : ub.closest(".SettingsMenuRight");
          if (!Bb) return;
          const Ob = () => {
            const bb = Bb.clientHeight < gh ? .4 : .5;
            hb(Math.max(80, Bb.clientHeight * bb - 24))
          };
          Ob();
          const Gb = new ResizeObserver(Ob);
          return Gb.observe(Bb), () => {
            Gb.disconnect()
          }
        }), [bb]), ub
      }(Jb), Mb = (0, Wh.k)(Ub.joystickMode), Ib = Ub.touchActionButtons, Pb = (0, Ob.useMemo)((() => function(bb, ub) {
        const hb = {},
          Bb = [
            ["extra", "X"],
            ["game", "G"]
          ];
        ub || Bb.push(["attack", "P"]);
        for (const [Ob, Gb] of Bb) {
          const ub = bb.names[Gb];
          ub && (hb[Ob] = ub)
        }
        return hb
      }(vb, Ib)), [vb, Ib]);
      (0, Ob.useEffect)((() => {
        (0, jb.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [qb, Eb] = (0, Ob.useState)(!1), [yb, Vb] = (0, Ob.useState)(!1), Fb = (0, Ob.useRef)(null);
      wh(Fb, !yb);
      const [fb, cb] = (0, Ob.useState)(!1), Qb = (0, Ob.useCallback)((() => {
        cb(!1)
      }), []), Rb = (0, Ob.useMemo)((() => new Set(Yb.hudLocked)), [Yb.hudLocked]), bu = bb => {
        var ub, hb;
        const Bb = (0, zb.t)(),
          Ob = bb(Bb);
        (0, zb.$)(null !== (ub = null === (hb = tb.current) || void 0 === hb ? void 0 : hb.keepLocks(Bb, Ob)) && void 0 !== ub ? ub : Ob)
      }, uu = (bb, ub) => {
        bu((hb => (0, zb.gb)(hb, Lb, bb, ub)))
      }, Bu = (bb, ub, hb) => {
        uu(bb, {
          dx: ub,
          dy: hb
        }), (0, jb.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${bb}`
        })
      }, Ou = (bb, ub) => {
        bu((hb => (0, zb.jb)(hb, Lb, bb, ub)))
      }, Lu = bb => {
        const ub = Nb[bb];
        return (ub.move || ub.scale) && ("joystick" !== bb || Mb) && !(0, hu.z)(bb, Yb.hudElements[bb])
      }, Yu = bb => Nb[bb].move && ("joystick" !== bb || Mb) && !Rb.has(bb), Su = new Set(eb.map((bb => bb.id)).filter((bb => {
        const ub = (0, zb.S)(bb) && !vb.rowIcons.includes(bb);
        return null === Kb || Kb.has(bb) || (0, zb.w)(Yb.hudElements, bb) && !ub
      }))), au = {
        present: Su,
        actionButtons: Ib,
        keyNames: Pb,
        scaleCaps: db,
        sizeBesidePreview: qb,
        elements: Yb.hudElements,
        selected: Hb,
        onSelect: ob,
        rowIconsOpen: Xb,
        onRowIconsOpen: pb,
        onScalePreview: (bb, ub) => {
          var hb;
          null === (hb = tb.current) || void 0 === hb || hb.setScale(bb, ub)
        },
        onScale: (bb, ub) => {
          uu(bb, {
            scale: ub
          }), (0, jb.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${bb}`
          })
        },
        onHidden: (bb, ub) => {
          uu(bb, {
            hidden: ub
          }), (0, jb.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${ub?"hide":"show"}:${bb}`
          })
        },
        onReset: bb => {
          uu(bb, zb.d)
        },
        locked: Rb,
        lockable: Lu,
        onLocked: Ou,
        note: (bb, ub) => {
          const Bb = ub && Ab.length > 0 ? hb("hudLayout:overlapsNote", {
            names: mb(Ab, Ib, hb, Pb)
          }) : null;
          return ub && kb(bb, Mb) ? (0, Cb.jsxs)(Cb.Fragment, {
            children: [Bb && (0, Cb.jsx)("span", {
              children: Bb
            }), (0, Cb.jsx)("span", {
              children: hb("hudLayout:floatingJoystickNote")
            }), !qb && (0, Cb.jsx)(Tb, {})]
          }) : Bb || (ub && Rb.has(bb) ? hb("hudLayout:lockedNote") : ub && "cluster" === bb ? hb("hudLayout:clusterNote") : ub && "menu" === bb ? hb("hudLayout:menuNote") : ub && (0, hu.z)(bb, Yb.hudElements[bb]) && Yu(bb) ? hb("hudLayout:rowIconNote") : ub && "arrows" === bb ? hb("hudLayout:arrowsNote") : "inventory" === bb && (0, zb.w)(Yb.hudElements, "inventory") ? hb("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, Cb.jsxs)("div", {
        ref: Jb,
        className: "HudLayoutSettings",
        children: [(0, Cb.jsxs)("div", {
          ref: Fb,
          className: "HudLayoutBody",
          children: [(0, Cb.jsx)("div", {
            className: "HudLayoutOrientation",
            children: hb("landscape" === Lb ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, Cb.jsx)(lh, {
            preview: {
              layout: Gb,
              orientation: Lb,
              selected: Hb,
              onSelect: ob,
              onMove: Bu,
              canMove: Yu,
              actionButtons: Ib,
              joystickFixed: Mb,
              presence: vb,
              keyNames: Pb,
              maxHeight: sb,
              apiRef: tb,
              onMeasured: Db,
              onReady: Vb,
              lockable: Lu
            },
            quick: {
              layout: Yb,
              actionButtons: Ib,
              keyNames: Pb,
              scaleCaps: db,
              overlaps: Ab,
              onScale: au.onScale,
              onHidden: au.onHidden,
              onReset: au.onReset,
              locked: Rb,
              lockable: Lu,
              onLocked: Ou
            },
            onFullScreen: () => {
              cb(!0)
            },
            resting: fb,
            onSidePanel: Eb
          }), fb && (0, Cb.jsx)(Xh, {
            layout: Gb,
            orientation: Lb,
            selected: Hb,
            onSelect: ob,
            onMove: Bu,
            canMove: Yu,
            actionButtons: Ib,
            joystickFixed: Mb,
            presence: vb,
            keyNames: Pb,
            onScale: au.onScale,
            onHidden: au.onHidden,
            onReset: au.onReset,
            locked: Rb,
            lockable: Lu,
            onLocked: Ou,
            apiRef: tb,
            onClose: Qb
          }), (0, Cb.jsx)(xh, {
            safe: Yb.hudSafe,
            onCommit: bb => {
              bu((ub => (0, zb.lb)(ub, Lb, bb)))
            },
            onPreview: bb => {
              var ub;
              null === (ub = tb.current) || void 0 === ub || ub.setSafe(bb)
            }
          }), (0, Cb.jsx)(Zb.c, {
            label: hb("hudLayout:snapCentre"),
            checked: Gb.hudSnapCentre,
            onClick: bb => {
              (0, zb.Z)(bb)
            },
            circleInfoText: hb("hudLayout:snapCentreInfo")
          }), (0, Cb.jsx)(Ah, {
            ...au
          }), (0, Cb.jsx)(Zb.g, {
            label: hb("hudLayout:shape"),
            options: zb.K.map((bb => ({
              value: bb,
              label: hb(`hudLayout:shape_${bb}`)
            }))),
            value: Gb.hudShape,
            onChange: bb => {
              bu((ub => ({
                ...ub,
                hudShape: bb
              }))), (0, jb.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: bb
              })
            }
          }), (0, Cb.jsx)(Zb.h, {
            name: hb("hudLayout:opacity"),
            min: zb.g,
            max: 1,
            step: .05,
            initValue: Gb.hudKeyOpacity,
            format: bb => `${Math.round(100*bb)}%`,
            circleInfoText: hb("hudLayout:opacityInfo"),
            onChange: bb => {
              var ub;
              null === (ub = tb.current) || void 0 === ub || ub.setOpacity(bb)
            },
            onChangeComplete: bb => {
              (0, zb.X)(bb), (0, jb.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, Cb.jsx)(Sb.H, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const bb = nb.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await bb.getResult() && (0, zb.T)()
            }()
          },
          children: hb("hudLayout:resetAll")
        })]
      })
    }
    const gh = 350;
    const ih = [function() {
      const {
        t: bb
      } = (0, Bb.K)(), [ub, hb] = (0, Ob.useState)(!1), Gb = (0, Ob.useRef)(null);
      return (0, Ob.useEffect)((() => {
        var bb;
        ub && (null === (bb = Gb.current) || void 0 === bb || bb.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [ub]), (0, Cb.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, Cb.jsxs)("button", {
          ref: Gb,
          type: "button",
          className: "SettingBox SettingBoxFeatured HudLayoutEntry",
          "aria-expanded": ub,
          onClick: () => {
            hb(!ub)
          },
          children: [(0, Cb.jsx)(Db.e, {
            name: "arrows-up-down-left-right",
            className: "HudLayoutEntryIcon"
          }), (0, Cb.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, Cb.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: bb("hudLayout:title")
            }), (0, Cb.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: bb("hudLayout:entrySub")
            })]
          }), (0, Cb.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), ub && (0, Cb.jsx)(zh, {})]
      })
    }, function() {
      const {
        t: bb
      } = (0, Bb.K)(), {
        joystickMode: ub,
        touchSpeedCurve: hb,
        autorun: Ob,
        jumpLock: Gb
      } = (0, ab.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, Cb.jsxs)(Cb.Fragment, {
        children: [(0, Cb.jsx)(Zb.g, {
          label: bb("settingsMenu:joystick"),
          options: Wb.Eb.map((ub => ({
            value: ub,
            label: bb(db[ub])
          }))),
          value: ub,
          onChange: bb => {
            ab.d.setClientEscMenuOptions({
              joystickMode: bb
            })
          },
          circleInfoText: bb("settingsMenu:joystickInfo")
        }), (0, Cb.jsx)(Zb.c, {
          label: bb("settingsMenu:preciseWalking"),
          checked: hb,
          onClick: bb => {
            ab.d.setClientEscMenuOptions({
              touchSpeedCurve: bb
            })
          },
          circleInfoText: bb("settingsMenu:preciseWalkingInfo")
        }), (0, Cb.jsx)(Zb.c, {
          label: bb("settingsMenu:autoRun"),
          checked: Ob,
          onClick: bb => {
            ab.d.setClientEscMenuOptions({
              autorun: bb
            })
          },
          circleInfoText: bb("settingsMenu:autoRunInfo")
        }), (0, Cb.jsx)(Zb.c, {
          label: bb("settingsMenu:jumpLock"),
          checked: Gb,
          onClick: bb => {
            ab.d.setClientEscMenuOptions({
              jumpLock: bb
            })
          },
          circleInfoText: bb("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, Cb.jsx)(Kb.e, {})
    }, function() {
      const {
        t: bb
      } = (0, Bb.K)(), {
        clientEscMenuOptions: ub
      } = (0, ab.j)(["clientEscMenuOptions"]);
      return (0, rb.d)() ? (0, Cb.jsx)(Zb.c, {
        label: bb("settingsMenu:vibration"),
        checked: ub.vibration,
        onClick: bb => {
          ab.d.setClientEscMenuOptions({
            vibration: bb
          })
        },
        circleInfoText: bb("settingsMenu:vibrationInfo")
      }) : null
    }];

    function vh() {
      return (0, Cb.jsx)(Cb.Fragment, {
        children: ih.map(((bb, ub) => (0, Cb.jsx)(bb, {}, ub)))
      })
    }
    var th = hb(4131);

    function Jh() {
      const {
        t: bb
      } = (0, Bb.K)(), {
        isTouchScreen: ub,
        clientEscMenuOptions: hb,
        gameState: Ub
      } = (0, ab.j)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), Lb = (0, Xb.f)("ezBridging"), Yb = (0, Xb.f)("ezTowering"), ob = "inGame" !== Ub || !0 === Lb, Ab = (0, pb.c)() && ("inGame" !== Ub || !0 === Yb), [, Kb] = (0, Ob.useReducer)((bb => bb + 1), 0), Wb = (0, lb.e)(), [db, rb] = (0, Ob.useState)(th.h);
      return (0, Cb.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [Wb && (0, Cb.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, Cb.jsx)("div", {
            children: bb("controller:settingsControlsNote")
          }), (0, Cb.jsx)(Sb.O, {
            onClick: () => {
              ab.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: bb("controller:settingsOpenController")
          })]
        }), (0, Hb.isTouchscreen)() && !(0, Hb.isMobile)() ? (0, Cb.jsx)(Cb.Fragment, {
          children: (0, Cb.jsx)(Zb.c, {
            label: bb("settingsMenu:useTouchControls"),
            checked: db,
            onClick: bb => {
              (0, th.e)(bb), rb(bb)
            }
          })
        }) : null, ub && (0, Cb.jsx)(vh, {}), ob && (0, Cb.jsx)(Zb.c, {
          label: bb("settingsMenu:ezBridging"),
          checked: hb.ezBridging,
          onClick: bb => {
            ab.d.setClientEscMenuOptions({
              ezBridging: bb
            })
          },
          circleInfoText: bb("settingsMenu:ezBridgingInfo")
        }), Ab && (0, Cb.jsx)(Zb.c, {
          label: bb("settingsMenu:ezTowering"),
          checked: hb.ezTowering,
          onClick: bb => {
            ab.d.setClientEscMenuOptions({
              ezTowering: bb
            })
          },
          circleInfoText: bb("settingsMenu:ezToweringInfo")
        }), (0, Cb.jsx)(Zb.c, {
          label: bb("settingsMenu:crouchToggle"),
          checked: hb.crouchIsToggle,
          onClick: bb => {
            ab.d.setClientEscMenuOptions({
              crouchIsToggle: bb
            })
          },
          circleInfoText: bb("settingsMenu:crouchToggleInfo")
        }), (0, Cb.jsx)(Zb.c, {
          label: bb("settingsMenu:hideUiToggle"),
          checked: hb.hideUiIsToggle,
          onClick: bb => {
            ab.d.setClientEscMenuOptions({
              hideUiIsToggle: bb
            })
          },
          circleInfoText: bb("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, wb.b)() && (0, Cb.jsx)(Zb.h, {
          name: bb("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: hb.touchscreenSensitivity,
          onChange: bb => {
            ab.d.setClientEscMenuOptions({
              touchscreenSensitivity: bb
            })
          }
        }), !(0, Hb.isMobile)() && (0, Cb.jsx)(Zb.h, {
          name: bb("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: hb.mouseSensitivity,
          onChange: bb => {
            ab.d.setClientEscMenuOptions({
              mouseSensitivity: bb
            })
          }
        }), !(0, Hb.isMobile)() && (0, Cb.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, Cb.jsx)("div", {
            className: "SliderText",
            children: bb("settingsMenu:keyBindings")
          }), Gb.d.map((ub => (0, Cb.jsx)(eh, {
            title: bb(ub.name.translationKey, ub.name.params),
            defaultOpen: Gb.g.has(ub.id),
            children: ub.actions.map((bb => (0, Cb.jsx)(Nh, {
              noaAction: bb,
              forceUpdate: Kb,
              clashesWith: ub.clashesWith,
              showPadGlyph: Wb
            }, bb)))
          }, ub.name.translationKey))), (0, Cb.jsx)(Sb.H, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, Gb.A)(), Kb()
            },
            children: bb("controls:resetBindings")
          })]
        })]
      })
    }

    function eh(bb) {
      let {
        title: ub,
        defaultOpen: hb,
        children: Bb
      } = bb;
      const [Gb, Ub] = (0, Ob.useState)(hb);
      return (0, Cb.jsxs)("div", {
        className: Yb()("ControlsSection", {
          Collapsed: !Gb
        }),
        children: [(0, Cb.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            Ub(!Gb)
          },
          children: [(0, Cb.jsx)("div", {
            className: "ControlsSectionTitle",
            children: ub
          }), (0, Cb.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), Gb && (0, Cb.jsx)("div", {
          className: "ControlsSectionRows",
          children: Bb
        })]
      })
    }

    function Nh(bb) {
      let {
        noaAction: ub,
        forceUpdate: hb,
        clashesWith: Lb,
        showPadGlyph: ab
      } = bb;
      const {
        t: Hb
      } = (0, Bb.K)(), wb = (0, Ab.e)(ub), [Zb, Xb] = (0, Ob.useState)(!1), [pb, lb] = (0, Ob.useState)("controls:clickToEnterNewBinding"), [Kb, Wb] = (0, Ob.useState)(null), [db, rb] = (0, Ob.useState)(null), jb = (0, Ob.useRef)(null);
      (0, Ob.useEffect)((() => {
        Zb && jb.current && jb.current.focus()
      }), [Zb]);
      const nb = Gb.r[ub].filter((bb => Ub.l[bb]));
      let Db = null;
      const xb = [],
        zb = Lb.flatMap((bb => {
          var ub, hb;
          return null !== (ub = null === (hb = Gb.d.find((ub => ub.id === bb))) || void 0 === hb ? void 0 : hb.actions) && void 0 !== ub ? ub : []
        }));
      for (const Bb of zb) {
        if (Bb === ub) continue;
        const bb = Gb.r[Bb];
        for (const ub of bb) nb.includes(ub) && xb.push(Hb(Gb.s[Bb].translationKey, Gb.s[Bb].params))
      }
      xb.length > 0 && (Db = Hb("controls:sharedBindingsWarning") + " ", Db += xb.join(", "));
      const gb = () => {
          Xb(!1), Wb(null), lb("controls:clickToEnterNewBinding"), rb(null)
        },
        ib = () => "BindingInput_" + ub;
      return (0, Cb.jsxs)("div", {
        className: Yb()("ControlRow", {
          WarningBorder: null !== Db
        }),
        children: [(0, Cb.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, Cb.jsxs)("div", {
            className: "ControlName",
            children: [Hb(Gb.s[ub].translationKey, Gb.s[ub].params), ab && wb && (0, Cb.jsx)(ob.d, {
              glyph: wb,
              className: "ControlPadGlyph"
            })]
          }), (0, Cb.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, Cb.jsxs)("div", {
              className: "ControlBindingsList",
              children: [nb.map((bb => (0, Cb.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, Cb.jsx)("div", {
                  children: (0, Gb.l)(bb)
                }), (0, Cb.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Bb = (0, Gb.u)(ub, bb);
                    Bb.isError() ? rb(Bb.asError().message) : rb(null), hb()
                  },
                  children: "\xd7"
                })]
              }, bb))), !Zb && (0, Cb.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  Xb(!0), rb(null)
                },
                children: (0, Cb.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), Zb && (0, Cb.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, Cb.jsxs)("div", {
                className: "InputContainer",
                children: [(0, Cb.jsx)("div", {
                  className: "InputOverlay",
                  children: Kb ? (0, Gb.l)(Kb) : (0, Cb.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: Hb(pb)
                  })
                }), (0, Cb.jsx)("input", {
                  ref: jb,
                  id: ib(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: bb => {
                    if ("Escape" === bb.code) return gb(), bb.preventDefault(), void bb.stopPropagation();
                    const ub = bb.code;
                    Ub.d.includes(ub) ? (rb(null), Wb(ub)) : (rb("controls:keyIsReserved"), Wb(null)), bb.preventDefault(), bb.stopPropagation()
                  },
                  onMouseDown: bb => {
                    const ub = "Mouse" + (bb.button + 1);
                    document.activeElement && document.activeElement.id === ib() ? Ub.d.includes(ub) ? (rb(null), Wb(ub)) : (rb("controls:keyIsReserved"), Wb(null)) : lb("controls:enterNewBinding"), bb.stopPropagation()
                  },
                  onBlur: () => {
                    lb("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, Cb.jsx)(Sb.e, {
                onPointerDown: bb => {
                  bb.preventDefault()
                },
                onClick: () => {
                  (0, Gb.c)(ub, Kb), hb(), gb()
                },
                className: "ControlBindingAddButton",
                disabled: null === Kb,
                children: Hb("general:add")
              }), (0, Cb.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  gb()
                },
                children: "\xd7"
              })]
            }), db && (0, Cb.jsx)("div", {
              className: "ControlBindingError",
              children: Hb(db)
            })]
          })]
        }), Db && (0, Cb.jsx)("div", {
          className: "ControlRowWarning",
          children: Db
        })]
      })
    }
  },
  8397: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ab,
      g: () => ob,
      i: () => ab,
      k: () => lb,
      o: () => Kb,
      s: () => wb
    });
    var Bb = hb(1572),
      Ob = hb(1625);
    const Gb = bb => bb >= 56320 && bb <= 57343,
      Ub = bb => bb >= 55296 && bb <= 56319,
      Lb = (bb, ub) => ub >= 2 && Gb(bb.charCodeAt(ub - 1)) && Ub(bb.charCodeAt(ub - 2)) ? ub - 2 : Math.max(0, ub - 1),
      Yb = (bb, ub) => {
        let hb;
        var Bb, Ob;
        return hb = bb.start !== bb.end ? ub < 0 ? bb.start : bb.end : ub < 0 ? Lb(bb.value, bb.start) : (Bb = bb.value, (Ob = bb.start) + 1 < Bb.length && Ub(Bb.charCodeAt(Ob)) && Gb(Bb.charCodeAt(Ob + 1)) ? Ob + 2 : Math.min(Bb.length, Ob + 1)), {
          value: bb.value,
          start: hb,
          end: hb
        }
      },
      Sb = ["text", "search", "url", "email", "tel", "password", "number"],
      ab = bb => !(!(0, Ob.d)(bb) || bb.isContentEditable || bb.hasAttribute("data-pad-no-osk")) && (bb instanceof HTMLTextAreaElement || bb instanceof HTMLInputElement && Sb.includes(bb.type)),
      Hb = bb => null !== bb.selectionStart,
      wb = bb => {
        var ub, hb;
        const {
          value: Bb
        } = bb;
        return {
          value: Bb,
          start: null !== (ub = bb.selectionStart) && void 0 !== ub ? ub : Bb.length,
          end: null !== (hb = bb.selectionEnd) && void 0 !== hb ? hb : Bb.length
        }
      },
      Zb = (bb, ub, hb) => {
        if (bb.readOnly) return;
        const Ob = bb instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Ob, "value").set.call(bb, ub.value), Hb(bb) && bb.setSelectionRange(ub.start, ub.end), (0, Bb.d)(bb, new InputEvent("input", {
          bubbles: !0,
          inputType: hb
        }))
      };
    let Xb = !1;
    const pb = (bb, ub) => !!document.execCommand(bb, !1, ub) || (Xb || (Xb = !0, console.warn(`execCommand("${bb}") failed; the on-screen keyboard is setting the value directly`)), !1),
      ob = (bb, ub) => {
        pb("insertText", ub) || Zb(bb, function(bb, ub) {
          let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const Bb = bb.value.slice(0, bb.start),
            Ob = bb.value.slice(bb.end);
          let Gb = hb < 0 ? ub.length : Math.max(0, hb - Bb.length - Ob.length);
          Gb > 0 && Gb < ub.length && Ub(ub.charCodeAt(Gb - 1)) && Gb--;
          const Lb = ub.slice(0, Gb),
            Yb = Bb.length + Lb.length;
          return {
            value: Bb + Lb + Ob,
            start: Yb,
            end: Yb
          }
        }(wb(bb), ub, bb.maxLength), "insertText")
      },
      Ab = bb => {
        pb("delete") || Zb(bb, (bb => {
          const ub = bb.start === bb.end ? Lb(bb.value, bb.start) : bb.start;
          return {
            value: bb.value.slice(0, ub) + bb.value.slice(bb.end),
            start: ub,
            end: ub
          }
        })(wb(bb)), "deleteContentBackward")
      },
      lb = (bb, ub) => {
        if (!Hb(bb)) return;
        const hb = Yb(wb(bb), ub);
        bb.setSelectionRange(hb.start, hb.end)
      },
      Kb = bb => {
        Hb(bb) && 0 === bb.selectionStart && 0 === bb.selectionEnd && bb.setSelectionRange(bb.value.length, bb.value.length)
      }
  },
  8575: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb
    });
    var Bb = hb(13),
      Ob = hb(3218),
      Gb = hb(1249),
      Ub = hb(1288);
    const Lb = async () => {
      if ((0, Ub.f)()) {
        if (!0 !== await Gb.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Bb.d.get("gameState")) return
      }(0, Ob.e)()
    }
  },
  8581: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb,
      f: () => Gb,
      h: () => Ub,
      l: () => Ob,
      m: () => Lb
    });
    var Bb = hb(1843);
    const Ob = "controllerPadShopOpen",
      Gb = bb => Bb.i.includes(bb),
      Ub = bb => Object.values(bb).some((bb => !1 !== bb.canBuy && !bb.isRewardedAd)),
      Lb = (bb, ub, hb) => {
        var Bb, Ob, Ub, Lb;
        const Yb = bb.filter((bb => !Gb(bb))),
          Sb = null !== ub && bb.includes(ub) ? ub : null;
        return null !== Sb && !Gb(Sb) && hb(Sb) ? Sb : null !== (Bb = null !== (Ob = null !== (Ub = null !== (Lb = Yb.find(hb)) && void 0 !== Lb ? Lb : Yb[0]) && void 0 !== Ub ? Ub : Sb) && void 0 !== Ob ? Ob : bb[0]) && void 0 !== Bb ? Bb : null
      },
      Yb = bb => bb.userInput || bb.isRewardedAd || "boolean" === typeof bb.isSelected ? null : JSON.stringify([bb.image, bb.cost, bb.currency, bb.amount, bb.customTitle, bb.buyButtonText, bb.description, bb.canBuy])
  },
  8603: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Sb,
      e: () => ab
    });
    var Bb = hb(49),
      Ob = hb(1348),
      Gb = hb(1895),
      Ub = hb(1302),
      Lb = hb(1327),
      Yb = hb(1007);
    const Sb = () => {
        const bb = (0, Ub.v)();
        if ((0, Bb.useEffect)((() => {
            (0, Ub.m)()
          }), []), !bb) return null;
        const {
          ControllerCategory: ub
        } = bb;
        return (0, Yb.jsx)(Lb.b, {
          children: (0, Yb.jsx)(ub, {})
        })
      },
      ab = () => {
        var bb;
        const ub = (0, Ub.v)(),
          [, hb] = (0, Bb.useReducer)((bb => bb + 1), 0);
        return (0, Ob.h)(Gb.d, hb), null !== (bb = null === ub || void 0 === ub ? void 0 : ub.hasActivePad()) && void 0 !== bb && bb
      }
  },
  8401: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb,
      g: () => Sb,
      k: () => pb,
      n: () => Hb,
      o: () => Xb,
      q: () => Gb,
      r: () => Zb,
      t: () => Ub,
      w: () => wb
    });
    const Bb = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      Ob = (bb, ub) => {
        if ("function" === typeof bb.checkVisibility) return !bb.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: ub,
          checkOpacity: ub
        });
        const {
          visibility: hb
        } = getComputedStyle(bb);
        if ("hidden" === hb || "collapse" === hb) return !0;
        if (!ub) return !1;
        for (let Bb = bb; Bb; Bb = Bb.parentElement)
          if ("0" === getComputedStyle(Bb).opacity) return !0;
        return !1
      },
      Gb = bb => {
        if (!bb.isConnected || Ob(bb, !0)) return !1;
        const ub = bb.getBoundingClientRect();
        return ub.width > 0 && ub.height > 0
      },
      Ub = bb => !!bb.matches(":disabled, [aria-disabled='true']") || "button" === bb.getAttribute("role") && "-1" === bb.getAttribute("tabindex"),
      Lb = bb => {
        var ub;
        if (bb.closest("[data-pad-ignore]")) return !0;
        return !!(null === (ub = bb.parentElement) || void 0 === ub ? void 0 : ub.closest("[data-pad-focusable]"))
      },
      Yb = bb => {
        const ub = bb.querySelectorAll(Bb);
        return bb.matches(Bb) ? [bb, ...ub] : ub
      },
      Sb = bb => {
        const ub = [];
        for (const hb of Yb(bb)) !Lb(hb) && Gb(hb) && ub.push(hb);
        return ub
      },
      ab = new WeakMap,
      Hb = bb => {
        const ub = ab.get(bb);
        if (ub && wb(ub, bb)) return !0;
        for (const hb of Yb(bb))
          if (!Lb(hb) && Gb(hb)) return ab.set(bb, hb), !0;
        return ab.delete(bb), !1
      },
      wb = (bb, ub) => ub.contains(bb) && bb.matches(Bb) && !Lb(bb) && Gb(bb),
      Zb = (bb, ub) => wb(bb, ub) && !Ub(bb),
      Xb = bb => {
        for (const ub of bb.querySelectorAll("[data-pad-initial-area]"))
          if (!Ob(ub, !1)) return !0;
        return !1
      },
      pb = bb => {
        const ub = ub => {
          let hb = 0;
          for (let Bb = ub.parentElement; Bb && Bb !== bb; Bb = Bb.parentElement) hb++;
          return hb
        };
        return [...bb.querySelectorAll("[data-pad-initial-area]")].filter(Gb).sort(((bb, hb) => ub(hb) - ub(bb)))
      }
  },
  8386: (bb, ub, hb) => {
    hb.d(ub, {
      B: () => jb,
      C: () => Sb,
      E: () => Db,
      I: () => db,
      L: () => rb,
      N: () => ob,
      R: () => Yb,
      S: () => ab,
      e: () => Ab,
      h: () => nb,
      j: () => Cb,
      l: () => Wb,
      o: () => Xb,
      r: () => pb,
      u: () => wb,
      y: () => Zb
    });
    var Bb = hb(16),
      Ob = hb(1572),
      Gb = hb(8391),
      Ub = hb(8397),
      Lb = hb(8401);
    const Yb = bb => (0, Ub.i)(bb),
      Sb = bb => {
        const ub = bb.getBoundingClientRect();
        return {
          x: ub.left + ub.width / 2,
          y: ub.top + ub.height / 2
        }
      },
      ab = (bb, ub, hb) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: bb.x,
        clientY: bb.y,
        screenX: bb.x,
        screenY: bb.y,
        button: ub,
        buttons: hb,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      Hb = (bb, ub) => {
        (0, Ob.d)(bb, ub)
      },
      wb = function(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Bb = 0 === hb ? 1 : 2;
        Hb(bb, new PointerEvent("pointerdown", ab(ub, hb, Bb))), Hb(bb, new MouseEvent("mousedown", ab(ub, hb, Bb)))
      },
      Zb = function(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Hb(bb, new PointerEvent("pointerup", ab(ub, hb, 0))), Hb(bb, new MouseEvent("mouseup", ab(ub, hb, 0)))
      },
      Xb = function(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        wb(bb, ub, hb), Zb(bb, ub, hb), Hb(bb, 0 === hb ? new MouseEvent("click", ab(ub, 0, 0)) : new MouseEvent("contextmenu", ab(ub, 2, 0)))
      },
      pb = function(bb, ub, hb) {
        let {
          leaveBelow: Bb = null,
          enterBelow: Ob = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (bb !== ub) {
          if (null !== bb && void 0 !== bb && bb.isConnected) {
            const Ob = {
              ...ab(hb, 0, 0),
              relatedTarget: ub
            };
            Hb(bb, new PointerEvent("pointerout", Ob)), Hb(bb, new MouseEvent("mouseout", Ob));
            const Gb = bb => !!ub && bb.contains(ub) || !!Bb && bb.contains(Bb);
            for (let ub = bb; ub && !Gb(ub); ub = ub.parentElement) Hb(ub, new PointerEvent("pointerleave", {
              ...Ob,
              bubbles: !1
            })), Hb(ub, new MouseEvent("mouseleave", {
              ...Ob,
              bubbles: !1
            }))
          }
          if (ub) {
            const Bb = {
              ...ab(hb, 0, 0),
              relatedTarget: bb
            };
            Hb(ub, new PointerEvent("pointerover", Bb)), Hb(ub, new MouseEvent("mouseover", Bb));
            const Gb = [],
              Ub = ub => !(null === bb || void 0 === bb || !bb.isConnected) && ub.contains(bb) || !!Ob && ub.contains(Ob);
            for (let bb = ub; bb && !Ub(bb); bb = bb.parentElement) Gb.push(bb);
            for (const bb of Gb.reverse()) Hb(bb, new PointerEvent("pointerenter", {
              ...Bb,
              bubbles: !1
            })), Hb(bb, new MouseEvent("mouseenter", {
              ...Bb,
              bubbles: !1
            }));
            Hb(ub, new PointerEvent("pointermove", ab(hb, 0, 0))), Hb(ub, new MouseEvent("mousemove", ab(hb, 0, 0)))
          }
        } else ub && (Hb(ub, new PointerEvent("pointermove", ab(hb, 0, 0))), Hb(ub, new MouseEvent("mousemove", ab(hb, 0, 0))))
      },
      ob = bb => {
        Bb.i.vp(Gb.e, bb)
      },
      Ab = bb => {
        if (Yb(bb)) return void ob(bb);
        const ub = bb.hasAttribute("data-pad-focusable") ? bb.querySelector("a[href]") : null,
          hb = null !== ub && void 0 !== ub ? ub : bb;
        Xb(hb, Sb(hb))
      },
      lb = ".Dropdown-root.is-open",
      Kb = bb => {
        const ub = bb.querySelector(".Dropdown-control");
        return Ab(ub), ub
      },
      Wb = bb => {
        var ub;
        const hb = null !== (ub = bb.closest(lb)) && void 0 !== ub ? ub : bb.querySelector(lb);
        return hb ? Kb(hb) : null
      },
      Cb = bb => {
        for (const ub of document.querySelectorAll(lb)) ub.contains(bb) || Kb(ub)
      },
      db = bb => null !== bb.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      rb = bb => {
        const ub = bb ? document.elementFromPoint(bb.x, bb.y) : null;
        return !(null === ub || void 0 === ub || !ub.closest("[data-pad-repeat]"))
      },
      jb = bb => {
        var ub;
        return null !== (ub = [...bb.querySelectorAll("[data-pad-back]")].find(Lb.q)) && void 0 !== ub ? ub : null
      },
      nb = bb => {
        const ub = jb(bb);
        return !!ub && (Ab(ub), !0)
      },
      Db = bb => {
        var ub, hb, Bb, Ob;
        return null !== (ub = null !== (hb = null !== (Bb = bb.getAttribute("data-pad-key")) && void 0 !== Bb ? Bb : bb.getAttribute("href")) && void 0 !== hb ? hb : null === (Ob = bb.querySelector("a[href]")) || void 0 === Ob ? void 0 : Ob.getAttribute("href")) && void 0 !== ub ? ub : null
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);