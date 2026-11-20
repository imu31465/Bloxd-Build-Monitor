export const id = 154;
export const ids = [154];
export const modules = {
  8485: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ub
    });
    var kb = sb(19),
      Wb = sb(1197),
      ab = sb(4703),
      Tb = sb(1087);

    function Ub(bb) {
      let {
        note: cb
      } = bb;
      const {
        t: sb
      } = (0, Wb.E)(), {
        clientEscMenuOptions: Ub
      } = (0, kb.p)(["clientEscMenuOptions"]);
      return (0, Tb.jsx)(ab.d, {
        label: sb("touchSettings:actionButtons"),
        checked: Ub.touchActionButtons,
        onClick: bb => {
          kb.d.setClientEscMenuOptions({
            touchActionButtons: bb
          })
        },
        circleInfoText: sb("touchSettings:actionButtonsInfo"),
        note: cb
      })
    }
  },
  8478: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Os,
      f: () => is
    });
    var kb = sb(1197),
      Wb = sb(64),
      ab = sb(1917),
      Tb = sb(1927),
      Ub = sb(1033),
      Ib = sb.n(Ub),
      Hb = sb(1431),
      fb = sb(19),
      Mb = sb(117),
      Xb = sb(137),
      nb = sb(4703),
      mb = sb(2337),
      lb = sb(316),
      Qb = sb(1934),
      eb = sb(1938),
      Cb = sb(8481),
      Nb = sb(8485),
      Vb = sb(334),
      Lb = sb(1087);
    const ub = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var Yb = sb(8487);
    var hb = sb(1454),
      Jb = sb(1332),
      gb = sb(1039),
      Bb = sb(1381),
      tb = sb(2355);
    const yb = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(tb.E.map((bb => [bb, "menu"])))
      },
      Pb = bb => tb.x.filter((cb => yb[cb] === bb)),
      Db = new Set(Pb("cluster")),
      Eb = ["cluster"],
      ib = [...Eb, ...tb.x.filter((bb => !Eb.includes(bb) && !yb[bb]))],
      Ob = ib.flatMap((bb => [bb, ...Pb(bb)])).map((bb => ({
        id: bb,
        label: `hudLayout:${bb}`,
        ...tb.w[bb],
        parent: yb[bb]
      }))),
      Gb = Object.fromEntries(Ob.map((bb => [bb.id, bb]))),
      Kb = "data-hud-el";

    function Zb(bb, cb, sb, kb) {
      const Wb = sb(function(bb, cb) {
          return "attack" !== bb || cb ? Gb[bb].label : "hudLayout:attackContext"
        }(bb, cb)),
        ab = kb[bb];
      return ab ? sb("hudLayout:slotWithKey", {
        slot: Wb,
        key: ab
      }) : Wb
    }

    function zb(bb, cb, sb, kb) {
      return bb.map((bb => Zb(bb, cb, sb, kb))).join(", ")
    }

    function qb(bb) {
      let {
        className: cb,
        keepPlace: sb
      } = bb;
      return sb ? (0, Lb.jsx)("div", {
        className: Ib()(cb, "Placeholder")
      }) : null
    }

    function db(bb) {
      let {
        id: cb,
        elements: sb,
        actionButtons: Wb,
        keyNames: ab,
        className: Tb,
        keepPlace: Ub,
        onHidden: Ib
      } = bb;
      const {
        t: fb
      } = (0, kb.E)();
      if (!Gb[cb].hide) return (0, Lb.jsx)(qb, {
        className: Tb,
        keepPlace: Ub
      });
      const Mb = (0, tb.t)(sb, cb);
      return (0, Lb.jsx)(Hb.M, {
        className: Tb,
        ariaLabel: fb(Mb ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: Zb(cb, Wb, fb, ab)
        }),
        pressed: !Mb,
        onClick: () => {
          Ib(cb, !Mb)
        },
        children: (0, Lb.jsx)(gb.b, {
          name: Mb ? "eye-slash" : "eye"
        })
      })
    }

    function Ab(bb) {
      var cb;
      let {
        id: sb,
        elements: Wb,
        actionButtons: ab,
        keyNames: Tb,
        className: Ub,
        keepPlace: Ib,
        onlyWhenMoved: fb,
        locked: Mb,
        onReset: Xb
      } = bb;
      const {
        t: nb
      } = (0, kb.E)(), mb = Gb[sb], lb = (0, tb.M)(null !== (cb = Wb[sb]) && void 0 !== cb ? cb : tb.p);
      return !mb.move && !mb.scale || fb && lb ? (0, Lb.jsx)(qb, {
        className: Ub,
        keepPlace: Ib
      }) : (0, Lb.jsx)(Hb.M, {
        className: Ub,
        disabled: lb || Mb,
        ariaLabel: nb("hudLayout:resetElement", {
          name: Zb(sb, ab, nb, Tb)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: sb
        },
        onClick: bb => {
          fb && Sb(bb.currentTarget), Xb(sb)
        },
        children: (0, Lb.jsx)(gb.b, {
          name: "rotate-left"
        })
      })
    }

    function wb(bb) {
      let {
        id: cb,
        actionButtons: sb,
        keyNames: Wb,
        className: ab,
        keepPlace: Tb,
        locked: Ub,
        lockable: Ib,
        onLocked: fb
      } = bb;
      const {
        t: Mb
      } = (0, kb.E)();
      return Ib || Ub ? (0, Lb.jsx)(Hb.M, {
        className: ab,
        ariaLabel: Mb(Ub ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: Zb(cb, sb, Mb, Wb)
        }),
        pressed: Ub,
        active: Ub,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${Ub?"unlock":"lock"}:${cb}`
        },
        onClick: () => {
          fb(cb, !Ub)
        },
        children: (0, Lb.jsx)(gb.b, {
          name: Ub ? "lock" : "lock-open"
        })
      }) : (0, Lb.jsx)(qb, {
        className: ab,
        keepPlace: Tb
      })
    }

    function rb(bb) {
      let {
        className: cb,
        open: sb,
        name: Wb,
        onToggle: ab
      } = bb;
      const {
        t: Tb
      } = (0, kb.E)();
      return (0, Lb.jsx)(Hb.M, {
        className: cb,
        ariaLabel: Tb(sb ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: Wb
        }),
        pressed: sb,
        analyticsClick: {
          id: "hud_layout.children",
          value: sb ? "close" : "open"
        },
        onClick: () => {
          ab(!sb)
        },
        children: (0, Lb.jsx)(gb.b, {
          name: sb ? "angle-up" : "angle-down"
        })
      })
    }

    function ob(bb, cb) {
      var sb;
      bb.contains(document.activeElement) && cb.focus({
        preventScroll: !0
      }), null === (sb = (0, Bb.g)()) || void 0 === sb || sb.handOverPadFocus(bb, cb)
    }

    function Sb(bb) {
      const cb = bb.closest("[data-hud-row]"),
        sb = null === cb || void 0 === cb ? void 0 : cb.querySelector(".HudElementRowName");
      return !(!cb || !sb) && (ob(cb, sb), !0)
    }
    const Rb = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function vb(bb, cb) {
      return "joystick" === bb && !cb
    }

    function Fb() {
      const {
        t: bb
      } = (0, kb.E)();
      return (0, Lb.jsx)(Hb.M, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: bb => {
          const cb = bb.currentTarget;
          if (!Sb(cb)) {
            const bb = function(bb) {
              var cb, sb;
              const kb = [bb.previousElementSibling, bb.nextElementSibling].find((bb => bb instanceof HTMLElement && bb.matches(Rb)));
              return null !== (cb = null !== kb && void 0 !== kb ? kb : null === (sb = bb.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === sb ? void 0 : sb.querySelector(`:is(${Rb}):not(.HudFixJoystickButton)`)) && void 0 !== cb ? cb : null
            }(cb);
            bb && ob(cb, bb)
          }
          fb.d.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: bb("hudLayout:fixJoystick")
      })
    }
    var xb = sb(89),
      jb = sb(1278),
      pb = sb(1113),
      bc = sb(2598),
      cc = sb(8496),
      sc = sb(2358),
      kc = sb(2367),
      Wc = sb(2904);
    const ac = ["J", "C", "A", "P", "U", "X", "G"],
      Tc = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: tb.E
      });

    function Uc(bb, cb) {
      bb.replaceChildren(...[...cb.childNodes].map((bb => bb.cloneNode(!0))))
    }
    const Ic = bb => ({
      [Kb]: bb
    });

    function Hc(bb) {
      let {
        id: cb,
        slot: sb,
        icon: kb,
        label: ab,
        hidden: Tb,
        className: Ub,
        face: Hb
      } = bb;
      const fb = (0, Wb.useRef)(null);
      return (0, Wb.useLayoutEffect)((() => {
        Hb && fb.current && Uc(fb.current, Hb)
      }), [Hb]), (0, Lb.jsxs)("div", {
        className: Ib()("TouchKeyHit", `TouchSlot${sb}`, Ub, {
          HudPreviewGhost: Tb.has(cb)
        }),
        ...Ic(cb),
        children: [Hb && (0, Lb.jsx)("div", {
          ref: fb,
          className: Ib()("TouchKey", {
            Labelled: Hb.classList.contains("Labelled")
          })
        }), !Hb && (0, Lb.jsxs)("div", {
          className: Ib()("TouchKey", {
            Labelled: void 0 !== ab
          }),
          children: [kb && (0, Lb.jsx)(gb.b, {
            name: kb
          }), void 0 !== ab && (0, Lb.jsx)("span", {
            className: "TouchKeyLabel",
            children: ab
          })]
        })]
      })
    }

    function fc(bb) {
      let {
        item: cb,
        selected: sb
      } = bb;
      const kb = (0, Wb.useRef)(null);
      return (0, Wb.useLayoutEffect)((() => {
        kb.current && Uc(kb.current, cb)
      }), [cb]), (0, Lb.jsx)("div", {
        ref: kb,
        className: Ib()("InvenItem", {
          Selected: sb
        })
      })
    }
    const Mc = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      Xc = bb => void 0 === bb ? {} : {
        style: {
          "--parked": bb
        }
      };

    function nc(bb) {
      let {
        id: cb,
        hidden: sb,
        parked: kb,
        unslotted: Wb = !1
      } = bb;
      return (0, Lb.jsx)("div", {
        className: Ib()("TopRightIcon", kc.l[cb], {
          HudPreviewGhost: sb.has(cb),
          [sc.b]: void 0 !== kb,
          [sc.d]: Wb
        }),
        ...Xc(kb),
        children: (0, Lb.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...Ic(cb),
          children: (0, Lb.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Lb.jsx)(gb.b, {
              name: Mc[cb]
            })
          })
        })
      })
    }

    function mc(bb) {
      let {
        portraitPhone: cb,
        icons: sb,
        hidden: kb,
        moved: Wb,
        trayState: ab
      } = bb;
      const Tb = cb ? (0, sc.D)(sb) : [],
        Ub = sb.filter((bb => "settings" === bb)),
        Hb = sb.filter((bb => "settings" !== bb && !Tb.includes(bb))).reverse(),
        fb = Tb.length > 0 && "gone" === ab,
        Mb = [...Ub, ...fb ? ["tray"] : [], ...Hb].filter((bb => "tray" === bb || kb.has(bb) && !Wb.has(bb))),
        Xb = bb => {
          const cb = Mb.indexOf(bb);
          return cb < 0 ? void 0 : cb
        },
        nb = (bb, cb) => (0, Lb.jsx)(nc, {
          id: bb,
          hidden: kb,
          parked: cb ? Xb(bb) : void 0,
          unslotted: cb && kb.has(bb) && Wb.has(bb)
        }, bb);
      return (0, Lb.jsxs)("div", {
        className: Ib()("TopRightIcons TouchInGame", {
          Column: cb
        }),
        children: [Ub.map((bb => nb(bb, !0))), Tb.length > 0 && (0, Lb.jsxs)("div", {
          className: Ib()("TopRightIcon TopRightTrayToggle Open", {
            [sc.b]: fb
          }),
          ...Xc(Xb("tray")),
          children: [(0, Lb.jsx)("div", {
            className: Ib()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== ab
            }),
            children: (0, Lb.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, Lb.jsx)(gb.b, {
                name: "ellipsis"
              })
            })
          }), (0, Lb.jsx)("div", {
            className: "TopRightTray",
            children: Tb.map((bb => nb(bb, !1)))
          })]
        }), Hb.map((bb => nb(bb, !0)))]
      })
    }

    function lc(bb) {
      let {
        next: cb,
        hidden: sb
      } = bb;
      return (0, Lb.jsx)("div", {
        className: Ib()("HotBarArrow", cb ? "Next" : "Previous", {
          HudPreviewGhost: sb
        }),
        ...Ic("arrows"),
        children: (0, Lb.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, Lb.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Lb.jsx)(gb.b, {
              name: cb ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function Qc() {
      return (0, Lb.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, Lb.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, Lb.jsx)("div", {
            className: "SocialBar",
            children: (0, Lb.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, Lb.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, Lb.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, Lb.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, Lb.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Lb.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Lb.jsx)(gb.b, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, Lb.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, Lb.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, Lb.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, Lb.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Lb.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Lb.jsx)(gb.b, {
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
    const ec = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      Cc = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      Nc = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      Vc = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function Lc(bb) {
      let {
        presence: cb,
        portraitPhone: sb,
        hidden: Wb,
        actionButtons: ab,
        joystickFixed: Tb,
        keysAbove: Ub,
        auraBar: Hb,
        trayState: fb,
        moved: Xb
      } = bb;
      const {
        t: nb
      } = (0, kb.E)(), {
        faces: mb,
        items: lb
      } = cb, Qb = bb => ({
        HudPreviewGhost: Wb.has(bb)
      });
      return (0, Lb.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, Lb.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, Lb.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, Lb.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, Lb.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, Lb.jsx)("div", {
              className: "InGameHeaderGameName",
              children: nb("hudLayout:previewGameName")
            })]
          })
        }), (0, Lb.jsx)("div", {
          className: "TopLeftElements",
          children: (0, Lb.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, Lb.jsxs)("div", {
              className: "Chat",
              children: [(0, Lb.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [nb("hudLayout:previewChatLine"), nb("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), nb("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((bb => (0, Lb.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, Lb.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, Lb.jsx)("div", {
                      className: "IndividualText",
                      children: bb
                    })
                  })
                }, bb)))
              }), (0, Lb.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: Ib()("ChatIconWrapper SmallTextLight", Qb("chat")),
                ...Ic("chat"),
                children: (0, Lb.jsx)(gb.b, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, Lb.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, Lb.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, Lb.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, Lb.jsx)("div", {
                className: "TopRightIconsContainer",
                ...Ic("menu"),
                children: (0, Lb.jsx)(mc, {
                  portraitPhone: sb,
                  icons: cb.rowIcons,
                  hidden: Wb,
                  trayState: fb,
                  moved: Xb
                })
              })
            }), Mb.featureFlags.useSocialFeatures && (0, Lb.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, Lb.jsx)(Qc, {})
            })]
          })
        }), (0, Lb.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, Lb.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, Lb.jsxs)("div", {
            className: "TouchInteractKey",
            ...Ic("interact"),
            children: [(0, Lb.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, Lb.jsx)(gb.b, {
                name: "hand-back-point-up"
              })
            }), (0, Lb.jsx)("div", {
              children: nb("hudLayout:previewInteract")
            })]
          })
        }), (0, Lb.jsx)("div", {
          className: "BottomCentre",
          children: (0, Lb.jsxs)("div", {
            className: "BottomElements",
            children: [(0, Lb.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, Lb.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, Lb.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...Ic("hotbar"),
                children: (0, Lb.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, Lb.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, Lb.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, Lb.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, Lb.jsx)(gb.b, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), Hb && (0, Lb.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, Lb.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, Lb.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, Wc.g)("glint"),
                    alt: ""
                  }), (0, Lb.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, Lb.jsx)("div", {
                  className: "AuraBar",
                  children: (0, Lb.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, Lb.jsx)("div", {
                className: "HotBarRow",
                children: (0, Lb.jsx)("div", {
                  className: Ib()("HotBarContainer Touch", {
                    KeysAbove: Ub
                  }),
                  children: (0, Lb.jsxs)("div", {
                    className: "HotBar",
                    ...Ic("hotbar"),
                    children: [(0, Lb.jsxs)("div", {
                      className: Ib()("TouchInventoryKeys", {
                        NoAuraBar: !Hb
                      }),
                      children: [(0, Lb.jsx)("div", {
                        className: Ib()("TouchInventoryKey ShopKey", Qb("inventory"), {
                          Hidden: !cb.shop
                        }),
                        ...Ic("inventory"),
                        children: (0, Lb.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Lb.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Lb.jsx)(gb.b, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, Lb.jsx)("div", {
                        className: Ib()("TouchInventoryKey BagKey", Qb("inventory"), {
                          Hidden: !cb.bag
                        }),
                        ...Ic("inventory"),
                        children: (0, Lb.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Lb.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Lb.jsx)(gb.b, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, Lb.jsx)(lc, {
                      next: !1,
                      hidden: Wb.has("arrows")
                    }), (0, Lb.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== lb && lb.map(((bb, cb) => (0, Lb.jsx)(fc, {
                        item: bb,
                        selected: bb.classList.contains("Selected")
                      }, cb))), null === lb && Nc.map((bb => {
                        const cb = Vc[bb];
                        return (0, Lb.jsx)("div", {
                          className: Ib()("InvenItem", {
                            Selected: 0 === bb
                          }),
                          children: cb && (0, Lb.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, Lb.jsx)(gb.b, {
                              name: cb
                            })
                          })
                        }, bb)
                      }))]
                    }), (0, Lb.jsx)(lc, {
                      next: !0,
                      hidden: Wb.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, Lb.jsx)("div", {
              className: "BottomRightElements",
              children: (0, Lb.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== mb && ac.map((bb => {
                  const cb = mb[bb];
                  return cb && (0, Lb.jsx)(Hc, {
                    id: ec[bb],
                    slot: bb,
                    face: cb,
                    className: Cc[bb],
                    hidden: Wb
                  }, bb)
                })), null === mb && (0, Lb.jsxs)(Lb.Fragment, {
                  children: [(0, Lb.jsx)(Hc, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: Wb
                  }), (0, Lb.jsx)(Hc, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: Wb
                  }), ab && (0, Lb.jsxs)(Lb.Fragment, {
                    children: [(0, Lb.jsx)(Hc, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: Wb
                    }), (0, Lb.jsx)(Hc, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: Wb
                    })]
                  }), !ab && (0, Lb.jsx)(Hc, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: nb("touchKeys:scope"),
                    hidden: Wb
                  }), (0, Lb.jsx)(Hc, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: nb("touchKeys:fly"),
                    hidden: Wb
                  }), (0, Lb.jsx)(Hc, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: Wb
                  })]
                })]
              })
            })]
          })
        }), (0, Lb.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, Lb.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, Lb.jsxs)("div", {
              className: Ib()("Joystick Resting HudPreviewJoystick", {
                Floating: !Tb
              }),
              ...Ic("joystick"),
              children: [(0, Lb.jsx)("div", {
                className: "JoystickBase"
              }), (0, Lb.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function uc() {
      const [bb, cb] = (0, Wb.useState)({}), sb = (0, Wb.useCallback)((bb => {
        cb((cb => [...new Set([...Object.keys(cb), ...Object.keys(bb)])].every((sb => cb[sb] === bb[sb])) ? cb : bb))
      }), []);
      return [bb, sb]
    }
    const Yc = .05;

    function hc(bb) {
      var cb;
      let {
        selected: sb,
        layout: Wb,
        actionButtons: ab,
        keyNames: Tb,
        overlaps: Ub,
        scaleCaps: fb,
        joystickFixed: Mb,
        onScale: Xb,
        onHidden: nb,
        onReset: mb,
        locked: lb,
        lockable: Qb,
        onLocked: eb,
        extra: Cb
      } = bb;
      const {
        t: Nb
      } = (0, kb.E)(), Vb = sb ? Gb[sb] : null, ub = null !== sb && lb.has(sb), Yb = (sb && Wb.hudElements[sb] || tb.p)[2], hb = null !== (cb = sb && fb[sb]) && void 0 !== cb ? cb : tb.h, Jb = bb => {
        sb && Xb(sb, Math.min(hb, Math.round(100 * (Yb + .1 * bb)) / 100))
      };
      return (0, Lb.jsxs)(Lb.Fragment, {
        children: [(0, Lb.jsxs)("div", {
          className: Ib()("HudQuickName SmallTextBold", {
            Overlap: Ub.length > 0
          }),
          children: [Ub.length > 0 && (0, Lb.jsx)(gb.b, {
            name: "triangle-exclamation"
          }), Vb ? Zb(Vb.id, ab, Nb, Tb) : Nb("hudLayout:fullScreenHint"), Ub.length > 0 && (0, Lb.jsx)("span", {
            className: "HudQuickOverlap",
            children: Nb("hudLayout:overlapsShort", {
              names: zb(Ub, ab, Nb, Tb)
            })
          })]
        }), (null === Vb || void 0 === Vb ? void 0 : Vb.scale) && (0, Lb.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, Lb.jsx)(Hb.M, {
            disabled: ub || Yb <= tb.k,
            ariaLabel: Nb("hudLayout:smaller"),
            onClick: () => {
              Jb(-1)
            },
            children: (0, Lb.jsx)(gb.b, {
              name: "minus"
            })
          }), (0, Lb.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*Yb)}%`
          }), (0, Lb.jsx)(Hb.M, {
            disabled: ub || Yb >= hb,
            ariaLabel: Nb("hudLayout:larger"),
            onClick: () => {
              Jb(1)
            },
            children: (0, Lb.jsx)(gb.b, {
              name: "plus"
            })
          })]
        }), (Vb || Cb) && (0, Lb.jsxs)("div", {
          className: "HudQuickActions",
          children: [Vb && (0, Lb.jsxs)(Lb.Fragment, {
            children: [(0, Lb.jsx)(wb, {
              id: Vb.id,
              actionButtons: ab,
              keyNames: Tb,
              locked: ub,
              lockable: Qb(Vb.id),
              onLocked: eb
            }), (0, Lb.jsx)(db, {
              id: Vb.id,
              elements: Wb.hudElements,
              actionButtons: ab,
              keyNames: Tb,
              onHidden: nb
            }), (0, Lb.jsx)(Ab, {
              id: Vb.id,
              elements: Wb.hudElements,
              actionButtons: ab,
              keyNames: Tb,
              locked: ub,
              onReset: mb
            }), vb(Vb.id, Mb) && (0, Lb.jsx)(Fb, {})]
          }), Cb]
        })]
      })
    }
    var Jc = sb(1104),
      gc = sb(4152);
    const Bc = "HudPreviewDoc",
      tc = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      yc = new Set([Bc, ...Object.values(tc)]),
      Pc = new Set(tb.x.map(kc.x)),
      Dc = new Set(kc.h),
      Ec = 'style, link[rel="stylesheet"]';

    function ic(bb, cb, sb, kb) {
      const Wb = new Map,
        ab = new Set,
        Tb = new URL(bb.baseURI).origin,
        Ub = cb => {
          var sb;
          if ("LINK" !== cb.nodeName) return !0;
          const kb = null === (sb = cb.getAttribute("href")) || void 0 === sb ? void 0 : sb.trim();
          if (!kb) return !1;
          try {
            return new URL(kb, bb.baseURI).origin === Tb
          } catch {
            return !1
          }
        };
      let Ib = null;
      const Hb = () => {
          Ib !== (0 === ab.size) && (Ib = 0 === ab.size, null === kb || void 0 === kb || kb(Ib))
        },
        fb = bb => {
          const cb = bb.cloneNode(!0);
          if ("LINK" === cb.tagName) {
            ab.add(cb);
            const bb = () => {
              ab.delete(cb), Hb()
            };
            cb.addEventListener("load", bb), cb.addEventListener("error", bb), sb && cb.addEventListener("load", sb)
          }
          return cb
        },
        Mb = () => {
          const kb = function(bb) {
              const cb = [...bb.body.children].filter((bb => bb.matches(Ec)));
              return [...bb.head.querySelectorAll(Ec), ...cb]
            }(bb).filter(Ub),
            Tb = new Set(kb);
          for (const [bb, cb] of Wb) Tb.has(bb) || (cb.remove(), Wb.delete(bb), ab.delete(cb));
          let Ib = null;
          for (let bb = kb.length - 1; bb >= 0; bb--) {
            const ab = kb[bb];
            let Tb = Wb.get(ab);
            Tb ? "STYLE" === ab.tagName && Tb.textContent !== ab.textContent && (Tb.textContent = ab.textContent, null === sb || void 0 === sb || sb()) : (Tb = fb(ab), Wb.set(ab, Tb), cb.head.insertBefore(Tb, Ib)), Ib = Tb
          }
          Hb()
        };
      Mb();
      const Xb = new MutationObserver(Mb);
      return Xb.observe(bb.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), Xb.observe(bb.body, {
        childList: !0
      }), () => {
        Xb.disconnect()
      }
    }

    function Oc(bb, cb, sb) {
      let {
        keysAbove: kb
      } = sb;
      const Wb = [...bb.documentElement.classList].filter((bb => !yc.has(bb) && !Dc.has(bb))),
        ab = [...cb.documentElement.classList].filter((bb => Dc.has(bb))),
        Tb = [Bc, tc.hotbar, tc.hasShop, tc.hasBag];
      kb && Tb.push(tc.keysAbove), cb.documentElement.className = [...Wb, ...Tb, ...ab].join(" ")
    }
    const Gc = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function Kc(bb, cb, sb, kb, Wb) {
      const ab = (0, tb.A)(sb, kb, "joystick"),
        Tb = (0, kc.A)((0, kc.L)(sb, kb, Wb), kb),
        Ub = Tb.classes.filter((bb => !Pc.has(bb))),
        Ib = cb.documentElement;
      (0, kc.R)({
        ...Tb,
        classes: Ub
      }, {
        vars: Ib,
        safe: Ib,
        classes: Ib
      });
      const Hb = (0, kc.D)(sb.hudLayouts[kb].hudSafe, window.innerWidth, window.innerHeight, Zc(), (0, kc.O)(cb));
      Ib.style.setProperty("--preview-joystick-shift-left", `${Hb[3]}px`), Ib.style.setProperty("--preview-joystick-shift-bottom", `${Hb[2]}px`), Ib.style.setProperty("--preview-joystick-scale", String(ab[2])), (0, gc.i)(Ib, cb, sb, kb);
      for (const fb of Gc) Ib.style.setProperty(fb, bb.documentElement.style.getPropertyValue(fb) || "0px")
    }

    function Zc() {
      return (0, kc.I)(fb.d.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function zc(bb) {
      return (0, kc.u)(Zc(), (0, kc.O)(bb))
    }

    function qc(bb, cb, sb) {
      const kb = bb.documentElement.style,
        Wb = (0, kc.F)(cb),
        ab = kb.getPropertyValue(Wb);
      try {
        return sb((bb => {
          kb.setProperty(Wb, String(bb))
        }))
      } finally {
        "" === ab ? kb.removeProperty(Wb) : kb.setProperty(Wb, ab)
      }
    }

    function dc(bb, cb) {
      const [sb, kb] = qc(bb, "hotbar", (cb => {
        const sb = sb => {
          var kb, Wb;
          return cb(sb), null !== (kb = null === (Wb = bb.querySelector(".HotBarGameItemsContainer")) || void 0 === Wb ? void 0 : Wb.getBoundingClientRect().width) && void 0 !== kb ? kb : 0
        };
        return [sb(1), sb(tb.h)]
      }));
      return sb <= 0 ? tb.h : Math.min(tb.h, Math.max(1, Math.floor(kb / sb / cb + 1e-6) * cb))
    }
    const Ac = 3,
      wc = .5,
      rc = bb => bb.right - bb.left;
    const oc = (bb, cb) => Math.abs((0, cc.d)(bb).x - (0, cc.d)(cb).x) + Math.abs((0, cc.d)(bb).y - (0, cc.d)(cb).y) + Math.abs(rc(bb) - rc(cb));

    function Sc(bb, cb, sb, kb, Wb) {
      let {
        canKeep: ab = () => !0,
        passes: Tb = Ac,
        before: Ub,
        keysAboveOf: Ib
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const Hb = void 0 !== Ib && Ib(bb) !== Ib(cb),
        fb = cb.hudLayouts[sb].hudLocked.filter((bb => ab(bb) && !(Hb && "inventory" === bb))),
        Mb = new Set(fb);
      if (0 === Mb.size) return cb;
      const Xb = [...Db].filter((kb => !fb.includes(kb) && (0, tb.A)(bb, sb, kb).join() === (0, tb.A)(cb, sb, kb).join())),
        nb = bb => {
          const cb = (0, cc.F)(Xb.flatMap((cb => bb[cb] ? [bb[cb]] : [])));
          return {
            ...bb,
            cluster: null !== cb && void 0 !== cb ? cb : void 0
          }
        },
        mb = bb => {
          const cb = Wb(bb);
          return cb && nb(cb)
        },
        lb = Ub ? nb(Ub) : mb(bb);
      let Qb = lb && mb(cb);
      if (!lb || !Qb) return cb;
      let eb = cb;
      for (let Cb = 0; Cb < Tb && Mb.size > 0; Cb++) {
        const bb = new Map;
        for (const cb of Mb) {
          const Wb = lb[cb],
            ab = Qb[cb],
            Tb = Wb && ab ? Rc(cb, (0, tb.A)(eb, sb, cb), Wb, ab, kb) : null;
          Tb ? bb.set(cb, Tb) : Mb.delete(cb)
        }
        if (0 === bb.size) break;
        let Wb = eb;
        for (const [cb, kb] of bb) Wb = (0, tb.hb)(Wb, sb, cb, kb);
        const ab = mb(Wb);
        if (!ab) return cb;
        let Tb = eb;
        for (const [cb, kb] of bb) {
          const bb = ab[cb];
          bb && oc(lb[cb], bb) < oc(lb[cb], Qb[cb]) - wc ? Tb = (0, tb.hb)(Tb, sb, cb, kb) : Mb.delete(cb)
        }
        if (Tb === eb) break;
        const Ub = [...bb.keys()].every((bb => Mb.has(bb)));
        if (eb = Tb, Qb = Ub ? ab : mb(eb), !Qb) return cb
      }
      return Wb(eb), eb
    }

    function Rc(bb, cb, sb, kb, Wb) {
      let [ab, Tb, Ub] = cb;
      const Ib = tb.w[bb],
        Hb = {};
      Ib.scale && rc(kb) > 0 && Math.abs(rc(sb) - rc(kb)) > wc && (Hb.scale = Math.max(tb.k, Math.min(tb.h, Ub * rc(sb) / rc(kb))));
      const fb = (0, cc.d)(sb).x - (0, cc.d)(kb).x,
        Mb = (0, cc.d)(sb).y - (0, cc.d)(kb).y;
      return Ib.move && (Math.abs(fb) > wc || Math.abs(Mb) > wc) && (Hb.dx = ab + fb / Wb.width, Hb.dy = Tb + Mb / Wb.height), void 0 === Hb.scale && void 0 === Hb.dx ? null : Hb
    }
    let vc = 0;

    function Fc() {
      return vc > 0
    }
    const xc = bb => 0 === bb.dx && 0 === bb.dy,
      jc = .001,
      pc = bb => Math.abs(bb.dx) >= 5e-4 || Math.abs(bb.dy) >= 5e-4 ? bb : {
        dx: bb.dx,
        dy: bb.dy < 0 ? -.001 : jc
      };

    function bs(bb) {
      let {
        preview: cb,
        stageRef: sb,
        ringRef: kb,
        centreLineRef: ab,
        snapCentre: Tb,
        ready: Ub,
        measure: Ib,
        k: Hb,
        viewport: fb,
        boxes: Mb,
        pieces: Xb,
        selected: nb,
        insets: mb,
        layout: lb,
        canMove: Qb,
        onSelect: eb,
        onMove: Cb
      } = bb;
      const Nb = (0, Wb.useRef)(null),
        Vb = (0, Wb.useCallback)((() => null !== Nb.current), []),
        Lb = (bb, cb) => {
          if (!cb) return null;
          const sb = (0, cc.d)(bb.origin),
            kb = (0, cc.d)(cb),
            Wb = (bb.to.dx - bb.from.dx) * fb.width,
            ab = (bb.to.dy - bb.from.dy) * fb.height,
            Tb = cb.right - cb.left,
            Ub = cb.bottom - cb.top;
          return {
            skew: {
              x: kb.x - sb.x - Wb,
              y: kb.y - sb.y - ab
            },
            box: {
              left: sb.x - Tb / 2,
              top: sb.y - Ub / 2,
              right: sb.x + Tb / 2,
              bottom: sb.y + Ub / 2
            }
          }
        },
        ub = (bb, sb) => {
          var Wb;
          const Tb = Nb.current;
          if (!Tb || Tb.pointerId !== bb.pointerId) return;
          Nb.current = null, null === (Wb = ab.current) || void 0 === Wb || Wb.classList.remove("Shown", "Snapped");
          const Ub = kb.current;
          if (Ub && null !== Tb.ringStyle && Ub.setAttribute("style", Tb.ringStyle), sb && Tb.moved) {
            const bb = xc(Tb.to) ? null : Ib(Tb.id),
              cb = bb ? (0, cc.E)(bb, (0, cc.B)(fb.width, fb.height, mb)) : {
                x: 0,
                y: 0
              },
              sb = {
                dx: Tb.to.dx + cb.x / fb.width,
                dy: Tb.to.dy + cb.y / fb.height
              },
              kb = xc(Tb.to) ? sb : pc(sb);
            Cb(Tb.id, kb.dx, kb.dy)
          } else cb(Tb.id, null), sb && Tb.tapPick && eb(Tb.tapPick)
        };
      return {
        busy: Vb,
        handlers: {
          onPointerDown: bb => {
            var cb;
            if (!Ub || Nb.current || !bb.target.closest(".HudPreviewHandle")) return;
            const kb = sb.current.getBoundingClientRect(),
              Wb = {
                x: (bb.clientX - kb.left) / Hb,
                y: (bb.clientY - kb.top) / Hb
              },
              ab = (0, cc.x)(Wb, Xb, 40 / Hb),
              Tb = "cluster" === nb && void 0 !== Mb.cluster && null !== (0, cc.x)(Wb, [{
                id: "cluster",
                box: Mb.cluster
              }], 40 / Hb),
              Ib = "menu" === nb && void 0 !== Mb.menu && (0, cc.f)(Mb.menu, Wb) && ("menu" === ab || null !== ab && (0, sc.x)(ab, lb.hudElements[ab])),
              fb = Tb ? "cluster" : Ib ? "menu" : null,
              mb = null !== fb,
              Cb = null !== fb && void 0 !== fb ? fb : ab;
            if (!Cb) return;
            if (function(bb) {
                vc++;
                const cb = sb => {
                  sb.pointerId === bb && (vc = Math.max(0, vc - 1), window.removeEventListener("pointerup", cb, !0), window.removeEventListener("pointercancel", cb, !0))
                };
                window.addEventListener("pointerup", cb, !0), window.addEventListener("pointercancel", cb, !0)
              }(bb.pointerId), !Qb(Cb)) return void eb(mb && ab ? ab : Cb);
            eb(Cb);
            const [Vb, Lb] = null !== (cb = lb.hudElements[Cb]) && void 0 !== cb ? cb : [0, 0], ub = {
              dx: Vb,
              dy: Lb
            }, Yb = {
              skew: {
                x: 0,
                y: 0
              },
              box: Mb[Cb]
            };
            Nb.current = {
              id: Cb,
              pointerId: bb.pointerId,
              startX: bb.clientX,
              startY: bb.clientY,
              origin: Mb[Cb],
              from: ub,
              to: ub,
              moved: !1,
              home: xc(ub) ? {
                centre: (0, cc.d)(Mb[Cb]),
                anchor: Yb
              } : null,
              away: xc(ub) ? null : Yb,
              anchor: Yb,
              ringStyle: null,
              tapPick: mb ? ab : null
            }, bb.currentTarget.setPointerCapture(bb.pointerId)
          },
          onPointerMove: bb => {
            const sb = Nb.current;
            if (!sb || sb.pointerId !== bb.pointerId) return;
            const Wb = bb.clientX - sb.startX,
              Ub = bb.clientY - sb.startY;
            if (!sb.moved && Math.hypot(Wb, Ub) < 5) return;
            const Mb = !sb.moved;
            var Xb, nb;
            (sb.moved = !0, Mb) && (sb.ringStyle = null !== (Xb = null === (nb = kb.current) || void 0 === nb ? void 0 : nb.getAttribute("style")) && void 0 !== Xb ? Xb : null);
            const lb = (0, cc.B)(fb.width, fb.height, mb);
            if (!sb.home) {
              var Qb;
              sb.to = {
                dx: 0,
                dy: 0
              }, cb(sb.id, sb.to);
              const bb = Ib(sb.id),
                kb = null !== (Qb = Lb(sb, bb)) && void 0 !== Qb ? Qb : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: sb.origin
                },
                Wb = (0, cc.d)(sb.origin);
              sb.home = {
                centre: bb ? (0, cc.d)(bb) : {
                  x: Wb.x - sb.from.dx * fb.width,
                  y: Wb.y - sb.from.dy * fb.height
                },
                anchor: kb
              }
            }
            const eb = sb.home;
            let Cb = !1;
            const Vb = bb => {
                Cb = !1;
                let kb = (0, cc.l)(bb.box, Wb / Hb, Ub / Hb, lb);
                const ab = fb.width / 2;
                if (Tb && Math.abs((0, cc.d)(sb.origin).x + kb.x - ab) <= 8 / Hb) {
                  const cb = ab - (0, cc.d)(sb.origin).x,
                    Wb = (0, cc.l)(bb.box, cb, kb.y, lb);
                  Cb = Math.abs(Wb.x - cb) < .01, Cb && (kb = Wb)
                }
                const Ib = (0, cc.t)(sb.from, kb.x - bb.skew.x, kb.y - bb.skew.y, fb.width, fb.height);
                sb.to = pc(Ib), sb.anchor = bb, cb(sb.id, sb.to)
              },
              ub = (0, cc.l)(eb.anchor.box, Wb / Hb, Ub / Hb, lb),
              Yb = ab.current,
              hb = (0, cc.d)(sb.origin),
              Jb = ((0, tb.Q)(sb.id) ? 20 : 6) / Hb;
            if (Math.abs(hb.x + ub.x - eb.centre.x) <= Jb && Math.abs(hb.y + ub.y - eb.centre.y) <= Jb) sb.to = {
              dx: 0,
              dy: 0
            }, sb.anchor = eb.anchor, Cb = Tb && Math.abs(eb.centre.x - fb.width / 2) < 1, cb(sb.id, sb.to);
            else if (sb.away) Vb(sb.away);
            else {
              var gb;
              Vb(eb.anchor), sb.away = null !== (gb = Lb(sb, Ib(sb.id))) && void 0 !== gb ? gb : eb.anchor, Vb(sb.away)
            }
            null === Yb || void 0 === Yb || Yb.classList.add("Shown"), null === Yb || void 0 === Yb || Yb.classList.toggle("Snapped", Cb), (bb => {
              const cb = kb.current;
              if (cb) {
                const {
                  skew: sb,
                  box: kb
                } = bb.anchor;
                cb.style.left = kb.left * Hb + "px", cb.style.top = kb.top * Hb + "px", cb.style.width = (kb.right - kb.left) * Hb + "px", cb.style.height = (kb.bottom - kb.top) * Hb + "px", cb.style.translate = `${((bb.to.dx-bb.from.dx)*fb.width+sb.x)*Hb}px ${((bb.to.dy-bb.from.dy)*fb.height+sb.y)*Hb}px`
              }
            })(sb)
          },
          onPointerUp: bb => {
            ub(bb, !0)
          },
          onPointerCancel: bb => {
            ub(bb, !1)
          }
        }
      }
    }

    function cs(bb, cb) {
      return Object.keys(bb).filter((bb => bb !== cb)).map((cb => bb[cb]))
    }

    function ss(bb) {
      const cb = [],
        sb = cb => (0, tb.Q)(cb) && !bb.documentElement.classList.contains((0, kc.B)(cb));
      for (const Tb of bb.querySelectorAll(`[${Kb}]`)) {
        const bb = sb(Tb.getAttribute(Kb)) ? Tb.querySelector(".ScaleOnHover") : null,
          kb = (null !== bb && void 0 !== bb ? bb : Tb).getBoundingClientRect();
        (kb.width > 0 || kb.height > 0) && cb.push({
          id: Tb.getAttribute(Kb),
          box: {
            left: kb.left,
            top: kb.top,
            right: kb.right,
            bottom: kb.bottom
          }
        })
      }
      const kb = bb => (0, cc.F)(cb.filter((cb => {
          let {
            id: sb
          } = cb;
          return bb(sb)
        })).map((bb => {
          let {
            box: cb
          } = bb;
          return cb
        }))),
        Wb = {};
      for (const Tb of new Set(cb.map((bb => bb.id)))) Wb[Tb] = kb((bb => bb === Tb));
      const ab = kb((bb => Db.has(bb)));
      return ab && (Wb.cluster = ab), {
        boxes: Wb,
        pieces: cb
      }
    }

    function ks(bb, cb, sb) {
      const kb = cb.right - cb.left,
        Wb = cb.bottom - cb.top;
      return qc(bb, "cluster", (cb => {
        const ab = sb => {
            cb(sb);
            const kb = [...bb.querySelectorAll(`[${Kb}]:not(.HudPreviewGhost)`)].filter((bb => Db.has(bb.getAttribute(Kb)))).map((bb => {
                const cb = bb.getBoundingClientRect();
                return {
                  left: cb.left,
                  top: cb.top,
                  right: cb.right,
                  bottom: cb.bottom
                }
              })),
              Wb = (0, cc.F)(kb);
            return Wb ? {
              w: Wb.right - Wb.left,
              h: Wb.bottom - Wb.top
            } : null
          },
          Tb = bb => !bb || bb.w <= kb && bb.h <= Wb,
          Ub = ab(1),
          Ib = ab(tb.h);
        if (!Ub || Tb(Ib)) return tb.h;
        const Hb = (bb, cb, sb) => cb > bb ? 1 + (sb - bb) * (tb.h - 1) / (cb - bb) : tb.h;
        let fb = Math.floor(Math.min(tb.h, Hb(Ub.w, Ib.w, kb), Hb(Ub.h, Ib.h, Wb)) / sb + 1e-6) * sb;
        for (; fb > 1 && !Tb(ab(fb));) fb = Math.round(100 * (fb - sb)) / 100;
        return Math.max(1, fb)
      }))
    }

    function Ws(bb) {
      Oc(document, bb, {
        keysAbove: !1
      });
      const cb = parseFloat(getComputedStyle(bb.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        sb = Number.isFinite(cb) && cb < 0;
      return Oc(document, bb, {
        keysAbove: sb
      }), sb
    }

    function as(bb, cb) {
      let {
        layout: sb,
        orientation: kb,
        viewport: ab,
        replicaKey: Tb,
        joystickFixed: Ub,
        busy: Ib
      } = cb;
      const [Hb, fb] = (0, Wb.useState)(null), [Mb, Xb] = (0, Wb.useState)({
        boxes: {},
        pieces: []
      }), [nb, mb] = (0, Wb.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [lb, Qb] = (0, Wb.useState)(!1), [eb, Cb] = (0, Wb.useState)(!1), [Nb, Vb] = (0, Wb.useState)(!1), Lb = (0, Wb.useCallback)((bb => {
        Cb(bb), bb && Vb(!0)
      }), []), ub = sb.hudLayouts[kb].hudSafe, Yb = (0, Wb.useCallback)((() => {
        var cb;
        const sb = null === (cb = bb.current) || void 0 === cb ? void 0 : cb.contentDocument;
        null !== sb && void 0 !== sb && sb.body && fb(sb)
      }), [bb]), hb = (0, Wb.useCallback)((() => {
        Hb && ((0, sc.z)(Hb), Xb(ss(Hb)), mb(function(bb, cb) {
          const sb = zc(bb),
            [kb, Wb, ab, Tb] = cb ? (0, kc.v)(cb, window.innerWidth, window.innerHeight, sb) : sb;
          return {
            top: kb,
            right: Wb,
            bottom: ab,
            left: Tb
          }
        }(Hb, ub)))
      }), [Hb, ub]), Jb = (0, Wb.useCallback)((() => {
        Hb && Qb(Ws(Hb))
      }), [Hb]), gb = (0, Wb.useRef)((() => {}));
      return gb.current = () => {
        Jb(), Ib() || hb()
      }, (0, Wb.useLayoutEffect)((() => {
        if (Hb) return ic(document, Hb, (() => {
          gb.current()
        }), Lb)
      }), [Hb, Lb]), (0, Wb.useLayoutEffect)(Jb, [Jb, ab]), (0, Wb.useLayoutEffect)((() => {
        Hb && (Oc(document, Hb, {
          keysAbove: lb
        }), Kc(document, Hb, sb, kb, Ub), Jb(), hb())
      }), [Hb, sb, kb, lb, Tb, Ub, ab, hb, Jb]), (0, Wb.useEffect)((() => {
        var bb;
        if (!Hb) return;
        const cb = new ResizeObserver((() => {
          Ib() || hb()
        }));
        for (const sb of Hb.querySelectorAll(`[${Kb}]`)) cb.observe(sb);
        return null === (bb = Hb.fonts) || void 0 === bb || bb.ready.then(hb), () => {
          cb.disconnect()
        }
      }), [Hb, hb, Ib, Tb]), {
        doc: Hb,
        onLoad: Yb,
        boxes: Mb.boxes,
        pieces: Mb.pieces,
        insets: nb,
        keysAbove: lb,
        ready: eb,
        settled: Nb
      }
    }
    const Ts = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      Us = (bb, cb, sb) => {
        const kb = bb => (0, sc.x)(bb, sb.hudElements[bb]);
        return "cluster" === bb && Db.has(cb) || "cluster" === cb && Db.has(bb) || "menu" === bb && kb(cb) || "menu" === cb && kb(bb) || Ts.some((kb => {
          let [Wb, ab] = kb;
          const Tb = sb.hudElements.hotbar,
            Ub = "inventory" === ab && sb.hudLocked.includes(ab) && void 0 !== Tb && !(0, tb.M)(Tb);
          return (bb === Wb && cb === ab || bb === ab && cb === Wb) && !Ub
        }))
      };
    const Is = ["Above", "Below", "Left", "Right"];

    function Hs(bb, cb, sb, kb, Wb) {
      const ab = sb[bb],
        Tb = (ab.left + ab.right) / 2,
        Ub = (ab.top + ab.bottom) / 2,
        Ib = (7.5 * cb.length + 14) / kb,
        Hb = 18 / kb,
        fb = {
          Above: {
            left: Tb - Ib / 2,
            top: ab.top - Hb,
            right: Tb + Ib / 2,
            bottom: ab.top
          },
          Below: {
            left: Tb - Ib / 2,
            top: ab.bottom,
            right: Tb + Ib / 2,
            bottom: ab.bottom + Hb
          },
          Left: {
            left: ab.left - Ib,
            top: Ub - Hb / 2,
            right: ab.left,
            bottom: Ub + Hb / 2
          },
          Right: {
            left: ab.right,
            top: Ub - Hb / 2,
            right: ab.right + Ib,
            bottom: Ub + Hb / 2
          }
        },
        Mb = cs(sb, bb),
        Xb = {
          left: 0,
          top: 0,
          right: Wb.width,
          bottom: Wb.height
        };
      return Is[(0, cc.q)(Is.map((bb => fb[bb])), Mb, {
        bounds: Xb
      })]
    }

    function fs() {
      const [bb, cb] = (0, pb.c)();
      return (0, Wb.useMemo)((() => ({
        width: bb,
        height: cb
      })), [bb, cb])
    }

    function Ms(bb) {
      var cb;
      const {
        layout: sb,
        orientation: ab,
        selected: Tb,
        onSelect: Ub,
        onMove: Hb,
        canMove: fb,
        actionButtons: Mb,
        joystickFixed: Xb,
        presence: nb,
        keyNames: lb,
        maxHeight: Qb,
        fill: eb = !1,
        apiRef: Cb
      } = bb, {
        t: Nb
      } = (0, kb.E)(), Vb = fs(), ub = (null !== (cb = (0, mb.d)("maxAuraLevel")) && void 0 !== cb ? cb : 0) > 0, Yb = sb.hudLayouts[ab], hb = (0, Wb.useRef)(null), Jb = (0, Wb.useRef)(null), Bb = (0, Wb.useRef)(null), yb = (0, Wb.useRef)(null), Pb = (0, Wb.useRef)(null), Eb = (0, Wb.useRef)(null), ib = (0, bc.b)(hb).width, Ob = eb ? 1 : ib > 0 ? (0, cc.y)(ib, Vb.width, Vb.height, Qb) : 0, Gb = (0, Wb.useRef)((() => !1)), Kb = (0, Wb.useCallback)((() => Gb.current()), []), {
        doc: zb,
        onLoad: qb,
        boxes: db,
        pieces: Ab,
        insets: wb,
        keysAbove: rb,
        ready: ob,
        settled: Sb
      } = as(Bb, {
        layout: sb,
        orientation: ab,
        viewport: Vb,
        replicaKey: `${Mb}:${Xb}:${ub}`,
        joystickFixed: Xb,
        busy: Kb
      }), Rb = (0, Wb.useCallback)((bb => {
        zb && Kc(document, zb, bb, ab, Xb)
      }), [zb, ab, Xb]), vb = (0, Wb.useCallback)((bb => zb && Sb ? (Rb(bb), Ws(zb), function(bb) {
        let {
          boxes: cb,
          pieces: sb
        } = bb;
        const kb = sb.find((bb => "inventory" === bb.id));
        if (!kb || !cb.inventory) return cb;
        const Wb = (0, cc.d)(cb.inventory),
          ab = rc(kb.box) / 2,
          Tb = (kb.box.bottom - kb.box.top) / 2;
        return {
          ...cb,
          inventory: {
            left: Wb.x - ab,
            top: Wb.y - Tb,
            right: Wb.x + ab,
            bottom: Wb.y + Tb
          }
        }
      }(ss(zb))) : null), [zb, Sb, Rb]), Fb = (0, Wb.useCallback)((bb => !!zb && (Rb(bb), Ws(zb))), [zb, Rb]), jb = (0, Wb.useRef)(null), pb = (0, Wb.useRef)(null), Wc = (0, Wb.useRef)(sb);
      Wc.current = sb;
      const ac = (0, Wb.useCallback)((() => {
        null !== jb.current && (cancelAnimationFrame(jb.current), jb.current = null)
      }), []);
      (0, Wb.useEffect)((() => ac), [sb, ac]);
      const {
        lockable: Tc
      } = bb, Uc = (0, Wb.useCallback)((bb => {
        if (Rb(bb), !Sb || 0 === sb.hudLayouts[ab].hudLocked.length) return;
        const cb = sb;
        ac(), jb.current = requestAnimationFrame((() => {
          var sb;
          if (jb.current = null, Wc.current !== cb) return;
          const kb = (null === (sb = pb.current) || void 0 === sb ? void 0 : sb.from) === cb ? pb.current.boxes : vb(cb);
          kb && (pb.current = {
            from: cb,
            boxes: kb
          }), Rb(kb ? Sc(cb, bb, ab, Vb, vb, {
            canKeep: Tc,
            passes: 1,
            before: kb,
            keysAboveOf: Fb
          }) : bb)
        }))
      }), [Rb, Sb, sb, ab, Vb, vb, Fb, Tc, ac]), Ic = bs({
        preview: (bb, cb) => {
          cb ? Uc((0, tb.hb)(sb, ab, bb, cb)) : (ac(), Rb(sb))
        },
        stageRef: Jb,
        ringRef: yb,
        centreLineRef: Pb,
        snapCentre: sb.hudSnapCentre,
        ready: Sb,
        measure: bb => {
          var cb;
          return zb && ob && null !== (cb = ss(zb).boxes[bb]) && void 0 !== cb ? cb : null
        },
        k: Ob,
        viewport: Vb,
        boxes: db,
        pieces: Ab,
        selected: Tb,
        insets: wb,
        layout: Yb,
        canMove: fb,
        onSelect: Ub,
        onMove: (bb, cb, sb) => {
          ac(), Hb(bb, cb, sb)
        }
      });
      (0, Wb.useLayoutEffect)((() => {
        Gb.current = Ic.busy
      }), [Ic.busy]);
      const Hc = (0, Wb.useRef)([]),
        fc = (0, Wb.useRef)(Yb.hudElements);
      (0, Wb.useEffect)((() => {
        for (const Wb of Object.keys(Yb.hudElements)) {
          var bb, cb, sb, kb;
          (null !== (bb = null === (cb = Yb.hudElements[Wb]) || void 0 === cb ? void 0 : cb[2]) && void 0 !== bb ? bb : 1) > (null !== (sb = null === (kb = fc.current[Wb]) || void 0 === kb ? void 0 : kb[2]) && void 0 !== sb ? sb : 1) && fb(Wb) && !(0, sc.x)(Wb, Yb.hudElements[Wb]) && Hc.current.push(Wb)
        }
        fc.current = Yb.hudElements
      }), [Yb.hudElements, fb]), (0, Wb.useEffect)((() => {
        if (!ob) return;
        const bb = Hc.current.shift(),
          cb = bb && db[bb];
        if (!bb || !cb || Ic.busy()) return;
        const sb = (0, cc.E)(cb, (0, cc.B)(Vb.width, Vb.height, wb));
        if (0 !== sb.x || 0 !== sb.y) {
          var kb;
          const [cb, Wb] = null !== (kb = Yb.hudElements[bb]) && void 0 !== kb ? kb : [0, 0];
          Hb(bb, cb + sb.x / Vb.width, Wb + sb.y / Vb.height)
        }
      }), [db, ob]), (0, Wb.useImperativeHandle)(Cb, (() => ({
        setScale: (bb, cb) => {
          Uc((0, tb.hb)(sb, ab, bb, {
            scale: cb
          }))
        },
        setOpacity: bb => {
          Rb({
            ...sb,
            hudKeyOpacity: bb
          })
        },
        keepLocks: (bb, cb) => (ac(), Sc(bb, cb, ab, Vb, vb, {
          canKeep: Tc,
          keysAboveOf: Fb
        })),
        setSafe: bb => {
          Uc((0, tb.mb)(sb, ab, bb)), Eb.current && (Eb.current.style.inset = (0, kc.v)(bb, Vb.width, Vb.height, zc(null !== zb && void 0 !== zb ? zb : document)).map((bb => bb * Ob + "px")).join(" "))
        }
      })), [Rb, Uc, vb, Fb, ac, Tc, zb, sb, ab, Vb, Ob]);
      const Mc = new Set(Object.keys(Yb.hudElements).filter((bb => (0, tb.t)(Yb.hudElements, bb)))),
        Xc = Tb ? db[Tb] : void 0,
        nc = Tb ? Zb(Tb, Mb, Nb, lb) : "",
        mc = (0, Jc.e)(Vb.width, Vb.height),
        lc = Tb ? function(bb, cb, sb, kb) {
          const Wb = bb => (0, tb.t)(sb.hudElements, bb) || (0, sc.t)(bb, sb, kb);
          if (Wb(bb)) return [];
          const ab = cb.filter((cb => {
              let {
                id: sb
              } = cb;
              return "cluster" === bb ? Db.has(sb) : sb === bb
            })),
            Tb = new Set;
          for (const Ub of cb) Ub.id === bb || Tb.has(Ub.id) || Us(bb, Ub.id, sb) || Wb(Ub.id) || void 0 === sb.hudElements[bb] && void 0 === sb.hudElements[Ub.id] || ab.some((bb => {
            let {
              id: cb,
              box: sb
            } = bb;
            return cb !== Ub.id && (0, cc.j)(sb, Ub.box, 2)
          })) && Tb.add(Ub.id);
          return [...Tb]
        }(Tb, Ab, Yb, mc) : [],
        Qc = new Set((0, sc.q)(Yb.hudElements)),
        ec = (0, sc.H)(Yb, (0, sc.D)(nb.rowIcons)).state,
        Cc = lc.join(),
        Nc = (0, Wb.useRef)(bb.onReady);
      Nc.current = bb.onReady, (0, Wb.useEffect)((() => {
        var bb;
        null === (bb = Nc.current) || void 0 === bb || bb.call(Nc, Sb)
      }), [Sb]);
      const Vc = (0, Wb.useRef)(bb.onMeasured);
      (0, Wb.useLayoutEffect)((() => {
        Vc.current = bb.onMeasured
      })), (0, Wb.useEffect)((() => {
        var bb;
        const cb = zb ? {
          hotbar: dc(zb, Yc),
          cluster: ks(zb, (0, cc.B)(Vb.width, Vb.height, wb), Yc)
        } : {};
        null === (bb = Vc.current) || void 0 === bb || bb.call(Vc, db, Cc ? Cc.split(",") : [], cb)
      }), [db, Cc, zb, Vb, wb]);
      const uc = bb => ({
        left: bb.left * Ob,
        top: bb.top * Ob,
        width: (bb.right - bb.left) * Ob,
        height: (bb.bottom - bb.top) * Ob
      });
      return (0, Lb.jsx)("div", {
        ref: hb,
        className: Ib()("HudPreviewBox", {
          Fill: eb
        }),
        style: {
          height: Vb.height * Ob
        },
        children: (0, Lb.jsxs)("div", {
          ref: Jb,
          className: "HudPreviewStage",
          style: {
            width: Vb.width * Ob,
            height: Vb.height * Ob
          },
          children: [(0, Lb.jsx)("iframe", {
            ref: Bb,
            className: "HudPreviewFrame",
            srcDoc: "<!DOCTYPE html><html><head></head><body></body></html>",
            onLoad: qb,
            title: Nb("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: Vb.width,
              height: Vb.height,
              transform: `scale(${Ob})`
            }
          }), zb && (0, xb.createPortal)((0, Lb.jsx)(Lc, {
            presence: nb,
            portraitPhone: mc,
            hidden: Mc,
            actionButtons: Mb,
            joystickFixed: Xb,
            keysAbove: rb,
            auraBar: ub,
            trayState: ec,
            moved: Qc
          }), zb.body), (0, Lb.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...Ic.handlers,
            children: [(0, Lb.jsx)("div", {
              ref: Eb,
              className: "HudPreviewSafeZone",
              style: {
                top: wb.top * Ob,
                right: wb.right * Ob,
                bottom: wb.bottom * Ob,
                left: wb.left * Ob
              }
            }), Ab.map(((bb, cb) => {
              let {
                id: sb,
                box: kb
              } = bb;
              return (0, Lb.jsx)("div", {
                className: "HudPreviewHandle",
                style: uc((0, cc.n)(kb, 40 / Ob))
              }, `${sb}:${cb}`)
            })), Yb.hudLocked.map((bb => {
              const cb = db[bb];
              return cb && (0, Lb.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: cb.right * Ob,
                  top: cb.top * Ob
                },
                children: (0, Lb.jsx)(gb.b, {
                  name: "lock"
                })
              }, bb)
            })), (0, Lb.jsx)("div", {
              ref: Pb,
              className: "HudPreviewCentreLine",
              style: {
                left: Vb.width / 2 * Ob
              }
            }), Tb && Xc && (0, Lb.jsx)("div", {
              ref: yb,
              className: Ib()("HudPreviewRing", {
                Fixed: !fb(Tb),
                Overlap: lc.length > 0
              }),
              style: uc(Xc),
              children: (0, Lb.jsx)("span", {
                className: Ib()("HudPreviewRingLabel", Hs(Tb, nc, db, Ob, Vb)),
                children: nc
              })
            })]
          })]
        })
      })
    }

    function Xs(bb, cb) {
      (0, Wb.useEffect)((() => {
        var sb;
        null === (sb = bb.current) || void 0 === sb || sb.toggleAttribute("inert", cb)
      }), [bb, cb])
    }
    const ns = "hudFullScreen";

    function ms(bb) {
      let {
        onScale: cb,
        onHidden: sb,
        onReset: ab,
        locked: Tb,
        lockable: Ub,
        onLocked: Ib,
        onClose: fb,
        ...Mb
      } = bb;
      const {
        t: Xb
      } = (0, kb.E)(), nb = (0, Wb.useRef)(null);
      (0, jb.o)("popup", nb, fb),
      function(bb) {
        const cb = (0, Wb.useRef)(bb);
        cb.current = bb, (0, Wb.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [ns]: !0
          }, "");
          let bb = !1;
          const sb = () => {
            bb = !0, cb.current()
          };
          return window.addEventListener("popstate", sb), () => {
            var cb;
            window.removeEventListener("popstate", sb), !bb && null !== (cb = window.history.state) && void 0 !== cb && cb[ns] && window.history.back()
          }
        }), [])
      }(fb), (0, Wb.useEffect)((() => {
        function bb(bb) {
          "Escape" === bb.key && (bb.stopPropagation(), fb())
        }
        return window.addEventListener("keydown", bb, !0), () => {
          window.removeEventListener("keydown", bb, !0)
        }
      }), [fb]);
      const {
        selected: mb
      } = Mb, lb = (0, Wb.useRef)(null), Qb = (0, Wb.useRef)(null), [eb, Cb] = (0, Wb.useState)(!1);
      Xs(Qb, !eb);
      const [Nb, Vb] = (0, Wb.useState)(null), [ub, Yb] = (0, Wb.useState)([]), [hb, Jb] = uc(), gb = (0, Wb.useRef)(Mb.selected);
      gb.current = Mb.selected;
      const Bb = (0, Wb.useRef)({}),
        tb = (0, Wb.useCallback)((() => {
          const bb = lb.current;
          bb && Vb(function(bb, cb, sb) {
            var kb;
            const {
              innerWidth: Wb,
              innerHeight: ab
            } = window, Tb = bb.offsetWidth, Ub = bb.offsetHeight, Ib = Math.max(Zc()[0], 6), Hb = [];
            for (const Xb of [Ib, .2 * ab, .5 * ab - Ub / 2, .33 * ab])
              for (const bb of [.5, .3, .7]) Hb.push({
                left: Math.max(0, Math.min(Wb - Tb - 6, Math.max(6, Wb * bb - Tb / 2))),
                top: Xb
              });
            const fb = Hb.map((bb => ({
                left: bb.left - 6,
                top: bb.top - 6,
                right: bb.left + Tb + 6,
                bottom: bb.top + Ub + 6
              }))),
              Mb = cs(cb, sb);
            return Hb[(0, cc.q)(fb, Mb, {
              avoid: sb && null !== (kb = cb[sb]) && void 0 !== kb ? kb : null
            })]
          }(bb, Bb.current, gb.current))
        }), []),
        yb = (0, Wb.useCallback)(((bb, cb, sb) => {
          Yb(cb), Jb(sb), Bb.current = bb, tb()
        }), [tb, Jb]);
      return (0, Wb.useLayoutEffect)(tb, [Mb.selected, tb]), (0, xb.createPortal)((0, Lb.jsxs)("div", {
        ref: nb,
        className: "HudFullScreenEditor",
        children: [(0, Lb.jsx)(Ms, {
          ...Mb,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: yb,
          onReady: Cb,
          lockable: Ub
        }), (0, Lb.jsxs)("div", {
          ref: lb,
          className: "HudFullScreenToolbar",
          style: null === Nb ? void 0 : {
            left: Nb.left,
            top: Nb.top,
            transform: "none"
          },
          children: [(0, Lb.jsx)("div", {
            ref: Qb,
            className: "HudFullScreenControls",
            children: (0, Lb.jsx)(hc, {
              selected: mb,
              layout: Mb.layout.hudLayouts[Mb.orientation],
              actionButtons: Mb.actionButtons,
              keyNames: Mb.keyNames,
              overlaps: ub,
              scaleCaps: hb,
              onScale: cb,
              onHidden: sb,
              onReset: ab,
              locked: Tb,
              lockable: Ub,
              onLocked: Ib,
              joystickFixed: Mb.joystickFixed
            })
          }), (0, Lb.jsx)(Hb.d, {
            className: "HudFullScreenDone",
            onClick: fb,
            padDefaultFocus: !0,
            children: Xb("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const ls = bb => `${Math.round(100*bb)}%`;

    function Qs(bb) {
      let {
        info: cb,
        tuple: sb,
        props: Wb
      } = bb;
      const {
        t: ab
      } = (0, kb.E)();
      return (0, Lb.jsx)(nb.i, {
        name: ab("hudLayout:size"),
        min: tb.k,
        max: tb.h,
        step: Yc,
        initValue: sb[2],
        disabled: Wb.locked.has(cb.id),
        selectableMax: Wb.scaleCaps[cb.id],
        cappedNote: ab("hudLayout:sizeCapped"),
        format: ls,
        onChange: bb => {
          Wb.onScalePreview(cb.id, bb)
        },
        onChangeComplete: bb => {
          Wb.onScale(cb.id, bb)
        }
      })
    }

    function es(bb) {
      const {
        t: cb
      } = (0, kb.E)(), {
        present: sb,
        elements: ab,
        selected: Tb,
        onSelect: Ub,
        onHidden: Hb,
        onReset: fb,
        note: Mb,
        actionButtons: Xb,
        keyNames: nb,
        sizeBesidePreview: mb,
        locked: lb,
        lockable: Qb,
        onLocked: eb
      } = bb, {
        rowIconsOpen: Cb,
        onRowIconsOpen: Nb
      } = bb, Vb = (0, Wb.useRef)(null), ub = null !== Tb && (Cb || !(0, tb.Q)(Tb));
      return (0, Wb.useEffect)((() => {
        var bb;
        const cb = Tb ? null === (bb = Vb.current) || void 0 === bb ? void 0 : bb.querySelector(`[data-hud-row="${Tb}"]`) : null;
        if (!cb) return;
        const sb = cb.closest(".SettingsMenuRight"),
          kb = performance.now();
        let Wb = null;
        const ab = () => {
            clearInterval(Ib), null === sb || void 0 === sb || sb.removeEventListener("scroll", Ub)
          },
          Ub = () => {
            Fc() || ab()
          },
          Ib = setInterval((() => {
            const bb = performance.now();
            bb - kb > 1500 ? ab() : Fc() ? Wb = null : null === Wb ? Wb = bb : bb - Wb >= 150 && (ab(), function(bb) {
              var cb;
              const sb = bb.closest(".SettingsMenuRight"),
                kb = null === (cb = bb.closest(".HudLayoutSettings")) || void 0 === cb ? void 0 : cb.querySelector(".HudLayoutPreviewBox");
              if (!sb || !kb) return;
              const Wb = kb.getBoundingClientRect().bottom + 8,
                ab = sb.getBoundingClientRect().bottom - 8,
                Tb = bb.getBoundingClientRect();
              Tb.top < Wb ? sb.scrollBy({
                top: Tb.top - Wb,
                behavior: "smooth"
              }) : Tb.bottom > ab && sb.scrollBy({
                top: Math.min(Tb.bottom - ab, Tb.top - Wb),
                behavior: "smooth"
              })
            }(cb))
          }), 50);
        return null === sb || void 0 === sb || sb.addEventListener("scroll", Ub, {
          passive: !0
        }), ab
      }), [Tb, ub]), (0, Lb.jsx)("div", {
        ref: Vb,
        className: "SettingBoxGroup HudElementList",
        children: Ob.filter((bb => sb.has(bb.id) && (Cb || !(0, tb.Q)(bb.id)))).map((sb => {
          const kb = ((bb, cb) => {
              var sb;
              return null !== (sb = bb[cb]) && void 0 !== sb ? sb : tb.p
            })(ab, sb.id),
            Wb = (0, tb.t)(ab, sb.id),
            Vb = sb.id === Tb,
            ub = sb.scale && !mb,
            Yb = Mb(sb.id, Vb);
          return (0, Lb.jsxs)("div", {
            "data-hud-row": sb.id,
            className: Ib()("SettingBox HudElementRow", {
              Open: Vb,
              Hidden: Wb,
              Child: void 0 !== sb.parent
            }),
            children: [(0, Lb.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, Lb.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": ub ? Vb : void 0,
                onClick: () => {
                  Ub(sb.id)
                },
                children: [Zb(sb.id, Xb, cb, nb), sb.scale && 1 !== kb[2] && !(Vb && ub) && (0, Lb.jsx)("span", {
                  className: "HudElementRowSize",
                  children: ls(kb[2])
                }), ub && (0, Lb.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, Lb.jsx)(wb, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: sb.id,
                actionButtons: Xb,
                keyNames: nb,
                locked: lb.has(sb.id),
                lockable: Qb(sb.id),
                onLocked: eb
              }), "menu" === sb.id && (0, Lb.jsx)(rb, {
                className: "HudElementRowIcon",
                open: Cb,
                name: Zb(sb.id, Xb, cb, nb),
                onToggle: Nb
              }), "menu" !== sb.id && (0, Lb.jsx)(db, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: sb.id,
                elements: ab,
                actionButtons: Xb,
                keyNames: nb,
                onHidden: Hb
              }), (0, Lb.jsx)(Ab, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: lb.has(sb.id),
                id: sb.id,
                elements: ab,
                actionButtons: Xb,
                keyNames: nb,
                onReset: fb
              })]
            }), Vb && ub && (0, Lb.jsx)(Qs, {
              info: sb,
              tuple: kb,
              props: bb
            }), Yb && (0, Lb.jsx)("div", {
              className: "HudElementNote",
              children: Yb
            })]
          }, sb.id)
        }))
      })
    }

    function Cs(bb) {
      let {
        preview: cb,
        quick: sb,
        onFullScreen: ab,
        resting: Tb,
        onSidePanel: Ub
      } = bb;
      const {
        t: Ib
      } = (0, kb.E)(), fb = fs(), Mb = (0, Wb.useRef)(null), {
        width: Xb
      } = (0, bc.b)(Mb), nb = Math.floor(fb.width * Math.min(1, cb.maxHeight / fb.height)), mb = Xb - nb - 12, lb = mb >= 130, Qb = Xb > 0;
      (0, Wb.useEffect)((() => {
        Qb && Ub(lb)
      }), [Qb, lb, Ub]);
      const eb = (0, cc.y)(lb ? nb : Xb, fb.width, fb.height, cb.maxHeight),
        Cb = Tb ? (0, Lb.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: fb.height * eb
          }
        }) : (0, Lb.jsx)(Ms, {
          ...cb
        }),
        Nb = bb => (0, Lb.jsxs)(Hb.M, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: Ib("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: ab,
          children: [(0, Lb.jsx)(gb.b, {
            name: "expand"
          }), bb && (0, Lb.jsx)("span", {
            children: Ib("hudLayout:fullScreen")
          })]
        });
      return (0, Lb.jsxs)("div", {
        ref: Mb,
        className: "SettingBox HudLayoutPreviewBox",
        children: [Xb > 0 && lb && (0, Lb.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, Lb.jsx)("div", {
            style: {
              width: nb
            },
            children: Cb
          }), (0, Lb.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, Lb.jsx)(hc, {
              selected: cb.selected,
              ...sb,
              joystickFixed: cb.joystickFixed,
              extra: Nb(!cb.selected || mb >= 278)
            })
          })]
        }), Xb > 0 && !lb && (0, Lb.jsxs)(Lb.Fragment, {
          children: [Cb, (0, Lb.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: Nb(!1)
          })]
        })]
      })
    }
    var Ns = sb(2362),
      Vs = sb(4148),
      Ls = sb(2348);
    const us = bb => {
      const cb = kc.p * ("sides" === bb ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(cb / 2))
    };

    function Ys(bb, cb, sb) {
      const [kb, Wb, ab, Tb] = bb;
      return "sides" === cb ? [kb, sb, ab, sb] : [sb, Wb, sb, Tb]
    }
    const hs = [null, null, null, null],
      gs = bb => `${bb}px`;

    function Bs(bb) {
      let {
        safe: cb,
        onPreview: sb,
        onCommit: ab
      } = bb;
      const {
        t: Tb
      } = (0, kb.E)(), Ub = (0, kc.v)(null !== cb && void 0 !== cb ? cb : hs, window.innerWidth, window.innerHeight, zc(document).map(Math.round)), Ib = (0, Wb.useRef)(null !== cb && void 0 !== cb ? cb : hs);
      Ib.current = null !== cb && void 0 !== cb ? cb : hs;
      const fb = bb => {
        const cb = Math.min(us(bb), "sides" === bb ? Math.max(Ub[1], Ub[3]) : Math.max(Ub[0], Ub[2]));
        return (0, Lb.jsx)(nb.i, {
          name: Tb("sides" === bb ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: us(bb),
          step: 2,
          initValue: cb,
          format: gs,
          onChange: cb => {
            sb(Ys(Ib.current, bb, cb))
          },
          onChangeComplete: kb => {
            if (kb === cb) return void sb(Ib.current);
            const Wb = Ys(Ib.current, bb, kb);
            Ib.current = Wb, ab(Wb), (0, hb.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: bb
            })
          }
        })
      };
      return (0, Lb.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, Lb.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, Lb.jsx)("div", {
            children: Tb("hudLayout:safeZone")
          }), (0, Lb.jsx)(Hb.M, {
            active: null === cb,
            pressed: null === cb,
            onClick: () => {
              ab(null)
            },
            children: Tb("hudLayout:safeZoneAuto")
          })]
        }), fb("sides"), fb("ends")]
      })
    }

    function ts() {
      const {
        t: bb
      } = (0, kb.E)(), cb = (0, tb.db)(), {
        clientEscMenuOptions: sb
      } = (0, fb.p)(["clientEscMenuOptions"]), ab = (0, Ns.d)(), Tb = cb.hudLayouts[ab], [Ub, Ib] = (0, Wb.useState)(null), {
        rowIconsOpen: Mb,
        onRowIconsOpen: Xb,
        select: mb
      } = function(bb, cb) {
        const [sb, kb] = (0, Wb.useState)((() => tb.E.some((cb => void 0 !== bb.hudElements[cb] || bb.hudLocked.includes(cb))))), ab = (0, Wb.useCallback)((bb => {
          cb(bb), (0, tb.Q)(bb) && kb(!0)
        }), [cb]);
        return {
          rowIconsOpen: sb,
          onRowIconsOpen: kb,
          select: ab
        }
      }(Tb, Ib), [lb, Qb] = (0, Wb.useState)([]), [eb, Cb] = (0, Wb.useState)(null), [Nb, Vb] = uc(), ub = (0, Wb.useCallback)(((bb, cb, sb) => {
        Qb(cb), Vb(sb);
        const kb = Object.keys(bb);
        Cb((bb => (null === bb || void 0 === bb ? void 0 : bb.size) === kb.length && kb.every((cb => bb.has(cb))) ? bb : new Set(kb)))
      }), [Vb]), {
        gameState: Yb
      } = (0, fb.p)(["gameState"]), gb = (0, Ls.j)(), [Bb] = (0, Wb.useState)((() => "inGame" === Yb ? function(bb, cb) {
        const sb = bb.querySelector(".InGameUi .TouchComponentsButtons");
        if (!sb) return Tc;
        const kb = {},
          Wb = {};
        for (const Hb of ac) {
          const bb = sb.querySelector(`.TouchSlot${Hb} > .TouchKey`);
          if (bb) {
            var ab, Tb;
            kb[Hb] = bb.cloneNode(!0);
            const cb = (null !== (ab = null === (Tb = bb.querySelector(".TouchKeyLabel")) || void 0 === Tb ? void 0 : Tb.textContent) && void 0 !== ab ? ab : "").split(/\s+/).filter((bb => !/[\d\xd7]/.test(bb))).join(" ");
            cb && (Wb[Hb] = cb)
          }
        }
        const Ub = cb => {
            const sb = bb.querySelector(`.InGameUi ${cb}`);
            return null !== sb && !sb.classList.contains("Hidden")
          },
          Ib = [...bb.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((bb => bb.cloneNode(!0)));
        return {
          faces: Object.keys(kb).length > 0 ? kb : null,
          names: Wb,
          shop: Ub(".TouchInventoryKey.ShopKey"),
          bag: Ub(".TouchInventoryKey.BagKey"),
          items: Ib.length > 0 ? Ib : null,
          rowIcons: cb
        }
      }(document, gb) : Tc)), yb = (0, Wb.useRef)(null), Pb = (0, Wb.useRef)(null), Db = function(bb) {
        const [cb, sb] = (0, Wb.useState)((() => .4 * window.innerHeight));
        return (0, Wb.useLayoutEffect)((() => {
          var cb;
          const kb = null === (cb = bb.current) || void 0 === cb ? void 0 : cb.closest(".SettingsMenuRight");
          if (!kb) return;
          const Wb = () => {
            const bb = kb.clientHeight < ys ? .4 : .5;
            sb(Math.max(80, kb.clientHeight * bb - 24))
          };
          Wb();
          const ab = new ResizeObserver(Wb);
          return ab.observe(kb), () => {
            ab.disconnect()
          }
        }), [bb]), cb
      }(Pb), Eb = (0, Vs.l)(sb.joystickMode), ib = sb.touchActionButtons, Kb = (0, Wb.useMemo)((() => function(bb, cb) {
        const sb = {},
          kb = [
            ["extra", "X"],
            ["game", "G"]
          ];
        cb || kb.push(["attack", "P"]);
        for (const [Wb, ab] of kb) {
          const cb = bb.names[ab];
          cb && (sb[Wb] = cb)
        }
        return sb
      }(Bb, ib)), [Bb, ib]);
      (0, Wb.useEffect)((() => {
        (0, hb.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [Zb, qb] = (0, Wb.useState)(!1), [db, Ab] = (0, Wb.useState)(!1), wb = (0, Wb.useRef)(null);
      Xs(wb, !db);
      const [rb, ob] = (0, Wb.useState)(!1), Sb = (0, Wb.useCallback)((() => {
        ob(!1)
      }), []), Rb = (0, Wb.useMemo)((() => new Set(Tb.hudLocked)), [Tb.hudLocked]), xb = bb => {
        var cb, sb;
        const kb = (0, tb.r)(),
          Wb = bb(kb);
        (0, tb.Z)(null !== (cb = null === (sb = yb.current) || void 0 === sb ? void 0 : sb.keepLocks(kb, Wb)) && void 0 !== cb ? cb : Wb)
      }, jb = (bb, cb) => {
        xb((sb => (0, tb.hb)(sb, ab, bb, cb)))
      }, pb = (bb, cb, sb) => {
        jb(bb, {
          dx: cb,
          dy: sb
        }), (0, hb.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${bb}`
        })
      }, bc = (bb, cb) => {
        xb((sb => (0, tb.kb)(sb, ab, bb, cb)))
      }, cc = bb => {
        const cb = Gb[bb];
        return (cb.move || cb.scale) && ("joystick" !== bb || Eb) && !(0, sc.x)(bb, Tb.hudElements[bb])
      }, kc = bb => Gb[bb].move && ("joystick" !== bb || Eb) && !Rb.has(bb), Wc = new Set(Ob.map((bb => bb.id)).filter((bb => {
        const cb = (0, tb.Q)(bb) && !Bb.rowIcons.includes(bb);
        return null === eb || eb.has(bb) || (0, tb.t)(Tb.hudElements, bb) && !cb
      }))), Uc = {
        present: Wc,
        actionButtons: ib,
        keyNames: Kb,
        scaleCaps: Nb,
        sizeBesidePreview: Zb,
        elements: Tb.hudElements,
        selected: Ub,
        onSelect: mb,
        rowIconsOpen: Mb,
        onRowIconsOpen: Xb,
        onScalePreview: (bb, cb) => {
          var sb;
          null === (sb = yb.current) || void 0 === sb || sb.setScale(bb, cb)
        },
        onScale: (bb, cb) => {
          jb(bb, {
            scale: cb
          }), (0, hb.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${bb}`
          })
        },
        onHidden: (bb, cb) => {
          jb(bb, {
            hidden: cb
          }), (0, hb.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${cb?"hide":"show"}:${bb}`
          })
        },
        onReset: bb => {
          jb(bb, tb.b)
        },
        locked: Rb,
        lockable: cc,
        onLocked: bc,
        note: (cb, sb) => {
          const kb = sb && lb.length > 0 ? bb("hudLayout:overlapsNote", {
            names: zb(lb, ib, bb, Kb)
          }) : null;
          return sb && vb(cb, Eb) ? (0, Lb.jsxs)(Lb.Fragment, {
            children: [kb && (0, Lb.jsx)("span", {
              children: kb
            }), (0, Lb.jsx)("span", {
              children: bb("hudLayout:floatingJoystickNote")
            }), !Zb && (0, Lb.jsx)(Fb, {})]
          }) : kb || (sb && Rb.has(cb) ? bb("hudLayout:lockedNote") : sb && "cluster" === cb ? bb("hudLayout:clusterNote") : sb && "menu" === cb ? bb("hudLayout:menuNote") : sb && (0, sc.x)(cb, Tb.hudElements[cb]) && kc(cb) ? bb("hudLayout:rowIconNote") : sb && "arrows" === cb ? bb("hudLayout:arrowsNote") : "inventory" === cb && (0, tb.t)(Tb.hudElements, "inventory") ? bb("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, Lb.jsxs)("div", {
        ref: Pb,
        className: "HudLayoutSettings",
        children: [(0, Lb.jsxs)("div", {
          ref: wb,
          className: "HudLayoutBody",
          children: [(0, Lb.jsx)("div", {
            className: "HudLayoutOrientation",
            children: bb("landscape" === ab ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, Lb.jsx)(Cs, {
            preview: {
              layout: cb,
              orientation: ab,
              selected: Ub,
              onSelect: mb,
              onMove: pb,
              canMove: kc,
              actionButtons: ib,
              joystickFixed: Eb,
              presence: Bb,
              keyNames: Kb,
              maxHeight: Db,
              apiRef: yb,
              onMeasured: ub,
              onReady: Ab,
              lockable: cc
            },
            quick: {
              layout: Tb,
              actionButtons: ib,
              keyNames: Kb,
              scaleCaps: Nb,
              overlaps: lb,
              onScale: Uc.onScale,
              onHidden: Uc.onHidden,
              onReset: Uc.onReset,
              locked: Rb,
              lockable: cc,
              onLocked: bc
            },
            onFullScreen: () => {
              ob(!0)
            },
            resting: rb,
            onSidePanel: qb
          }), rb && (0, Lb.jsx)(ms, {
            layout: cb,
            orientation: ab,
            selected: Ub,
            onSelect: mb,
            onMove: pb,
            canMove: kc,
            actionButtons: ib,
            joystickFixed: Eb,
            presence: Bb,
            keyNames: Kb,
            onScale: Uc.onScale,
            onHidden: Uc.onHidden,
            onReset: Uc.onReset,
            locked: Rb,
            lockable: cc,
            onLocked: bc,
            apiRef: yb,
            onClose: Sb
          }), (0, Lb.jsx)(Bs, {
            safe: Tb.hudSafe,
            onCommit: bb => {
              xb((cb => (0, tb.mb)(cb, ab, bb)))
            },
            onPreview: bb => {
              var cb;
              null === (cb = yb.current) || void 0 === cb || cb.setSafe(bb)
            }
          }), (0, Lb.jsx)(nb.d, {
            label: bb("hudLayout:snapCentre"),
            checked: cb.hudSnapCentre,
            onClick: bb => {
              (0, tb.V)(bb)
            },
            circleInfoText: bb("hudLayout:snapCentreInfo")
          }), (0, Lb.jsx)(es, {
            ...Uc
          }), (0, Lb.jsx)(nb.g, {
            label: bb("hudLayout:shape"),
            options: tb.G.map((cb => ({
              value: cb,
              label: bb(`hudLayout:shape_${cb}`)
            }))),
            value: cb.hudShape,
            onChange: bb => {
              xb((cb => ({
                ...cb,
                hudShape: bb
              }))), (0, hb.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: bb
              })
            }
          }), (0, Lb.jsx)(nb.i, {
            name: bb("hudLayout:opacity"),
            min: tb.f,
            max: 1,
            step: .05,
            initValue: cb.hudKeyOpacity,
            format: bb => `${Math.round(100*bb)}%`,
            circleInfoText: bb("hudLayout:opacityInfo"),
            onChange: bb => {
              var cb;
              null === (cb = yb.current) || void 0 === cb || cb.setOpacity(bb)
            },
            onChangeComplete: bb => {
              (0, tb.T)(bb), (0, hb.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, Lb.jsx)(Hb.G, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const bb = Jb.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await bb.getResult() && (0, tb.S)()
            }()
          },
          children: bb("hudLayout:resetAll")
        })]
      })
    }
    const ys = 350;
    const Ps = [function() {
      const {
        t: bb
      } = (0, kb.E)(), [cb, sb] = (0, Wb.useState)(!1), ab = (0, Wb.useRef)(null);
      return (0, Wb.useEffect)((() => {
        var bb;
        cb && (null === (bb = ab.current) || void 0 === bb || bb.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [cb]), (0, Lb.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, Lb.jsxs)("button", {
          ref: ab,
          type: "button",
          className: "SettingBox SettingBoxFeatured HudLayoutEntry",
          "aria-expanded": cb,
          onClick: () => {
            sb(!cb)
          },
          children: [(0, Lb.jsx)(gb.b, {
            name: "arrows-up-down-left-right",
            className: "HudLayoutEntryIcon"
          }), (0, Lb.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, Lb.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: bb("hudLayout:title")
            }), (0, Lb.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: bb("hudLayout:entrySub")
            })]
          }), (0, Lb.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), cb && (0, Lb.jsx)(ts, {})]
      })
    }, function() {
      const {
        t: bb
      } = (0, kb.E)(), {
        joystickMode: cb,
        touchSpeedCurve: sb,
        autorun: Wb,
        jumpLock: ab
      } = (0, fb.p)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, Lb.jsxs)(Lb.Fragment, {
        children: [(0, Lb.jsx)(nb.g, {
          label: bb("settingsMenu:joystick"),
          options: Vb.Fb.map((cb => ({
            value: cb,
            label: bb(ub[cb])
          }))),
          value: cb,
          onChange: bb => {
            fb.d.setClientEscMenuOptions({
              joystickMode: bb
            })
          },
          circleInfoText: bb("settingsMenu:joystickInfo")
        }), (0, Lb.jsx)(nb.d, {
          label: bb("settingsMenu:preciseWalking"),
          checked: sb,
          onClick: bb => {
            fb.d.setClientEscMenuOptions({
              touchSpeedCurve: bb
            })
          },
          circleInfoText: bb("settingsMenu:preciseWalkingInfo")
        }), (0, Lb.jsx)(nb.d, {
          label: bb("settingsMenu:autoRun"),
          checked: Wb,
          onClick: bb => {
            fb.d.setClientEscMenuOptions({
              autorun: bb
            })
          },
          circleInfoText: bb("settingsMenu:autoRunInfo")
        }), (0, Lb.jsx)(nb.d, {
          label: bb("settingsMenu:jumpLock"),
          checked: ab,
          onClick: bb => {
            fb.d.setClientEscMenuOptions({
              jumpLock: bb
            })
          },
          circleInfoText: bb("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, Lb.jsx)(Nb.e, {})
    }, function() {
      const {
        t: bb
      } = (0, kb.E)(), {
        clientEscMenuOptions: cb
      } = (0, fb.p)(["clientEscMenuOptions"]);
      return (0, Yb.b)() ? (0, Lb.jsx)(nb.d, {
        label: bb("settingsMenu:vibration"),
        checked: cb.vibration,
        onClick: bb => {
          fb.d.setClientEscMenuOptions({
            vibration: bb
          })
        },
        circleInfoText: bb("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Ds() {
      return (0, Lb.jsx)(Lb.Fragment, {
        children: Ps.map(((bb, cb) => (0, Lb.jsx)(bb, {}, cb)))
      })
    }
    var Es = sb(4134);

    function is() {
      const {
        t: bb
      } = (0, kb.E)(), {
        isTouchScreen: cb,
        clientEscMenuOptions: sb,
        gameState: Tb
      } = (0, fb.p)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), Ub = (0, mb.d)("ezBridging"), Ib = (0, mb.d)("ezTowering"), Qb = "inGame" !== Tb || !0 === Ub, eb = (0, lb.f)() && ("inGame" !== Tb || !0 === Ib), [, Nb] = (0, Wb.useReducer)((bb => bb + 1), 0), Vb = (0, Cb.g)(), [ub, Yb] = (0, Wb.useState)(Es.h);
      return (0, Lb.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [Vb && (0, Lb.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, Lb.jsx)("div", {
            children: bb("controller:settingsControlsNote")
          }), (0, Lb.jsx)(Hb.M, {
            onClick: () => {
              fb.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: bb("controller:settingsOpenController")
          })]
        }), (0, Mb.isTouchscreen)() && !(0, Mb.isMobile)() ? (0, Lb.jsx)(Lb.Fragment, {
          children: (0, Lb.jsx)(nb.d, {
            label: bb("settingsMenu:useTouchControls"),
            checked: ub,
            onClick: bb => {
              (0, Es.e)(bb), Yb(bb)
            }
          })
        }) : null, cb && (0, Lb.jsx)(Ds, {}), Qb && (0, Lb.jsx)(nb.d, {
          label: bb("settingsMenu:ezBridging"),
          checked: sb.ezBridging,
          onClick: bb => {
            fb.d.setClientEscMenuOptions({
              ezBridging: bb
            })
          },
          circleInfoText: bb("settingsMenu:ezBridgingInfo")
        }), eb && (0, Lb.jsx)(nb.d, {
          label: bb("settingsMenu:ezTowering"),
          checked: sb.ezTowering,
          onClick: bb => {
            fb.d.setClientEscMenuOptions({
              ezTowering: bb
            })
          },
          circleInfoText: bb("settingsMenu:ezToweringInfo")
        }), (0, Lb.jsx)(nb.d, {
          label: bb("settingsMenu:crouchToggle"),
          checked: sb.crouchIsToggle,
          onClick: bb => {
            fb.d.setClientEscMenuOptions({
              crouchIsToggle: bb
            })
          },
          circleInfoText: bb("settingsMenu:crouchToggleInfo")
        }), (0, Lb.jsx)(nb.d, {
          label: bb("settingsMenu:hideUiToggle"),
          checked: sb.hideUiIsToggle,
          onClick: bb => {
            fb.d.setClientEscMenuOptions({
              hideUiIsToggle: bb
            })
          },
          circleInfoText: bb("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, Xb.c)() && (0, Lb.jsx)(nb.i, {
          name: bb("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: sb.touchscreenSensitivity,
          onChange: bb => {
            fb.d.setClientEscMenuOptions({
              touchscreenSensitivity: bb
            })
          }
        }), !(0, Mb.isMobile)() && (0, Lb.jsx)(nb.i, {
          name: bb("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: sb.mouseSensitivity,
          onChange: bb => {
            fb.d.setClientEscMenuOptions({
              mouseSensitivity: bb
            })
          }
        }), !(0, Mb.isMobile)() && (0, Lb.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, Lb.jsx)("div", {
            className: "SliderText",
            children: bb("settingsMenu:keyBindings")
          }), ab.h.map((cb => (0, Lb.jsx)(Os, {
            title: bb(cb.name.translationKey, cb.name.params),
            defaultOpen: ab.j.has(cb.id),
            children: cb.actions.map((bb => (0, Lb.jsx)(Gs, {
              noaAction: bb,
              forceUpdate: Nb,
              clashesWith: cb.clashesWith,
              showPadGlyph: Vb
            }, bb)))
          }, cb.name.translationKey))), (0, Lb.jsx)(Hb.G, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, ab.E)(), Nb()
            },
            children: bb("controls:resetBindings")
          })]
        })]
      })
    }

    function Os(bb) {
      let {
        title: cb,
        defaultOpen: sb,
        children: kb
      } = bb;
      const [ab, Tb] = (0, Wb.useState)(sb);
      return (0, Lb.jsxs)("div", {
        className: Ib()("ControlsSection", {
          Collapsed: !ab
        }),
        children: [(0, Lb.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            Tb(!ab)
          },
          children: [(0, Lb.jsx)("div", {
            className: "ControlsSectionTitle",
            children: cb
          }), (0, Lb.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), ab && (0, Lb.jsx)("div", {
          className: "ControlsSectionRows",
          children: kb
        })]
      })
    }

    function Gs(bb) {
      let {
        noaAction: cb,
        forceUpdate: sb,
        clashesWith: Ub,
        showPadGlyph: fb
      } = bb;
      const {
        t: Mb
      } = (0, kb.E)(), Xb = (0, eb.d)(cb), [nb, mb] = (0, Wb.useState)(!1), [lb, Cb] = (0, Wb.useState)("controls:clickToEnterNewBinding"), [Nb, Vb] = (0, Wb.useState)(null), [ub, Yb] = (0, Wb.useState)(null), hb = (0, Wb.useRef)(null);
      (0, Wb.useEffect)((() => {
        nb && hb.current && hb.current.focus()
      }), [nb]);
      const Jb = ab.v[cb].filter((bb => Tb.l[bb]));
      let gb = null;
      const Bb = [],
        tb = Ub.flatMap((bb => {
          var cb, sb;
          return null !== (cb = null === (sb = ab.h.find((cb => cb.id === bb))) || void 0 === sb ? void 0 : sb.actions) && void 0 !== cb ? cb : []
        }));
      for (const kb of tb) {
        if (kb === cb) continue;
        const bb = ab.v[kb];
        for (const cb of bb) Jb.includes(cb) && Bb.push(Mb(ab.z[kb].translationKey, ab.z[kb].params))
      }
      Bb.length > 0 && (gb = Mb("controls:sharedBindingsWarning") + " ", gb += Bb.join(", "));
      const yb = () => {
          mb(!1), Vb(null), Cb("controls:clickToEnterNewBinding"), Yb(null)
        },
        Pb = () => "BindingInput_" + cb;
      return (0, Lb.jsxs)("div", {
        className: Ib()("ControlRow", {
          WarningBorder: null !== gb
        }),
        children: [(0, Lb.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, Lb.jsxs)("div", {
            className: "ControlName",
            children: [Mb(ab.z[cb].translationKey, ab.z[cb].params), fb && Xb && (0, Lb.jsx)(Qb.b, {
              glyph: Xb,
              className: "ControlPadGlyph"
            })]
          }), (0, Lb.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, Lb.jsxs)("div", {
              className: "ControlBindingsList",
              children: [Jb.map((bb => (0, Lb.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, Lb.jsx)("div", {
                  children: (0, ab.n)(bb)
                }), (0, Lb.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const kb = (0, ab.C)(cb, bb);
                    kb.isError() ? Yb(kb.asError().message) : Yb(null), sb()
                  },
                  children: "\xd7"
                })]
              }, bb))), !nb && (0, Lb.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  mb(!0), Yb(null)
                },
                children: (0, Lb.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), nb && (0, Lb.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, Lb.jsxs)("div", {
                className: "InputContainer",
                children: [(0, Lb.jsx)("div", {
                  className: "InputOverlay",
                  children: Nb ? (0, ab.n)(Nb) : (0, Lb.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: Mb(lb)
                  })
                }), (0, Lb.jsx)("input", {
                  ref: hb,
                  id: Pb(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: bb => {
                    if ("Escape" === bb.code) return yb(), bb.preventDefault(), void bb.stopPropagation();
                    const cb = bb.code;
                    Tb.d.includes(cb) ? (Yb(null), Vb(cb)) : (Yb("controls:keyIsReserved"), Vb(null)), bb.preventDefault(), bb.stopPropagation()
                  },
                  onMouseDown: bb => {
                    const cb = "Mouse" + (bb.button + 1);
                    document.activeElement && document.activeElement.id === Pb() ? Tb.d.includes(cb) ? (Yb(null), Vb(cb)) : (Yb("controls:keyIsReserved"), Vb(null)) : Cb("controls:enterNewBinding"), bb.stopPropagation()
                  },
                  onBlur: () => {
                    Cb("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, Lb.jsx)(Hb.d, {
                onPointerDown: bb => {
                  bb.preventDefault()
                },
                onClick: () => {
                  (0, ab.d)(cb, Nb), sb(), yb()
                },
                className: "ControlBindingAddButton",
                disabled: null === Nb,
                children: Mb("general:add")
              }), (0, Lb.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  yb()
                },
                children: "\xd7"
              })]
            }), ub && (0, Lb.jsx)("div", {
              className: "ControlBindingError",
              children: Mb(ub)
            })]
          })]
        }), gb && (0, Lb.jsx)("div", {
          className: "ControlRowWarning",
          children: gb
        })]
      })
    }
  },
  8457: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub
    });
    var kb = sb(19),
      Wb = sb(3208),
      ab = sb(1332),
      Tb = sb(1371);
    const Ub = async () => {
      if ((0, Tb.g)()) {
        if (!0 !== await ab.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== kb.d.get("gameState")) return
      }(0, Wb.e)()
    }
  },
  8466: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ib,
      c: () => ab,
      e: () => Tb,
      h: () => Wb,
      i: () => Ub
    });
    var kb = sb(1902);
    const Wb = "controllerPadShopOpen",
      ab = bb => kb.g.includes(bb),
      Tb = bb => Object.values(bb).some((bb => !1 !== bb.canBuy && !bb.isRewardedAd)),
      Ub = (bb, cb, sb) => {
        var kb, Wb, Tb, Ub;
        const Ib = bb.filter((bb => !ab(bb))),
          Hb = null !== cb && bb.includes(cb) ? cb : null;
        return null !== Hb && !ab(Hb) && sb(Hb) ? Hb : null !== (kb = null !== (Wb = null !== (Tb = null !== (Ub = Ib.find(sb)) && void 0 !== Ub ? Ub : Ib[0]) && void 0 !== Tb ? Tb : Hb) && void 0 !== Wb ? Wb : bb[0]) && void 0 !== kb ? kb : null
      },
      Ib = bb => bb.userInput || bb.isRewardedAd || "boolean" === typeof bb.isSelected ? null : JSON.stringify([bb.image, bb.cost, bb.currency, bb.amount, bb.customTitle, bb.buyButtonText, bb.description, bb.canBuy])
  },
  8481: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Hb,
      g: () => fb
    });
    var kb = sb(64),
      Wb = sb(1423),
      ab = sb(1943),
      Tb = sb(1381),
      Ub = sb(1403),
      Ib = sb(1087);
    const Hb = () => {
        const bb = (0, Tb.r)();
        if ((0, kb.useEffect)((() => {
            (0, Tb.j)()
          }), []), !bb) return null;
        const {
          ControllerCategory: cb
        } = bb;
        return (0, Ib.jsx)(Ub.b, {
          children: (0, Ib.jsx)(cb, {})
        })
      },
      fb = () => {
        var bb;
        const cb = (0, Tb.r)(),
          [, sb] = (0, kb.useReducer)((bb => bb + 1), 0);
        return (0, Wb.f)(ab.b, sb), null !== (bb = null === cb || void 0 === cb ? void 0 : cb.hasActivePad()) && void 0 !== bb && bb
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);