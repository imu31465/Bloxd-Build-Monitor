export const id = 151;
export const ids = [151];
export const modules = {
  8804: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Zd
    });
    var pd = kd(22),
      Nd = kd(1211),
      Wd = kd(4877),
      Pd = kd(1103);

    function Zd(dd) {
      let {
        note: Jd
      } = dd;
      const {
        t: kd
      } = (0, Nd.B)(), {
        clientEscMenuOptions: Zd
      } = (0, pd.j)(["clientEscMenuOptions"]);
      return (0, Pd.jsx)(Wd.d, {
        label: kd("touchSettings:actionButtons"),
        checked: Zd.touchActionButtons,
        onClick: dd => {
          pd.d.setClientEscMenuOptions({
            touchActionButtons: dd
          })
        },
        circleInfoText: kd("touchSettings:actionButtonsInfo"),
        note: Jd
      })
    }
  },
  8787: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => nk,
      g: () => fk
    });
    var pd = kd(1211),
      Nd = kd(56),
      Wd = kd(1975),
      Pd = kd(1982),
      Zd = kd(1044),
      gd = kd.n(Zd),
      Cd = kd(1461),
      Kd = kd(22),
      od = kd(95),
      ld = kd(108),
      Qd = kd(4877),
      Ld = kd(2357),
      Od = kd(284),
      ed = kd(1986),
      Rd = kd(1988),
      Id = kd(8796),
      Gd = kd(8804),
      vd = kd(300),
      xd = kd(1103);
    const qd = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var Bd = kd(8809);
    var sd = kd(1492),
      ad = kd(1371),
      Md = kd(1059),
      Fd = kd(1417),
      Yd = kd(2382);
    const md = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(Yd.F.map((dd => [dd, "menu"])))
      },
      bd = dd => Yd.A.filter((Jd => md[Jd] === dd)),
      Sd = new Set(bd("cluster")),
      jd = ["cluster"],
      Xd = [...jd, ...Yd.A.filter((dd => !jd.includes(dd) && !md[dd]))],
      fd = Xd.flatMap((dd => [dd, ...bd(dd)])).map((dd => ({
        id: dd,
        label: `hudLayout:${dd}`,
        ...Yd.x[dd],
        parent: md[dd]
      }))),
      nd = Object.fromEntries(fd.map((dd => [dd.id, dd]))),
      Ud = "data-hud-el";

    function yd(dd, Jd, kd, pd) {
      const Nd = kd(function(dd, Jd) {
          return "attack" !== dd || Jd ? nd[dd].label : "hudLayout:attackContext"
        }(dd, Jd)),
        Wd = pd[dd];
      return Wd ? kd("hudLayout:slotWithKey", {
        slot: Nd,
        key: Wd
      }) : Nd
    }

    function Dd(dd, Jd, kd, pd) {
      return dd.map((dd => yd(dd, Jd, kd, pd))).join(", ")
    }

    function Td(dd) {
      let {
        className: Jd,
        keepPlace: kd
      } = dd;
      return kd ? (0, xd.jsx)("div", {
        className: gd()(Jd, "Placeholder")
      }) : null
    }

    function Ed(dd) {
      let {
        id: Jd,
        elements: kd,
        actionButtons: Nd,
        keyNames: Wd,
        className: Pd,
        keepPlace: Zd,
        onHidden: gd
      } = dd;
      const {
        t: Kd
      } = (0, pd.B)();
      if (!nd[Jd].hide) return (0, xd.jsx)(Td, {
        className: Pd,
        keepPlace: Zd
      });
      const od = (0, Yd.v)(kd, Jd);
      return (0, xd.jsx)(Cd.G, {
        className: Pd,
        ariaLabel: Kd(od ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: yd(Jd, Nd, Kd, Wd)
        }),
        pressed: !od,
        onClick: () => {
          gd(Jd, !od)
        },
        children: (0, xd.jsx)(Md.e, {
          name: od ? "eye-slash" : "eye"
        })
      })
    }

    function cd(dd) {
      var Jd;
      let {
        id: kd,
        elements: Nd,
        actionButtons: Wd,
        keyNames: Pd,
        className: Zd,
        keepPlace: gd,
        onlyWhenMoved: Kd,
        locked: od,
        onReset: ld
      } = dd;
      const {
        t: Qd
      } = (0, pd.B)(), Ld = nd[kd], Od = (0, Yd.P)(null !== (Jd = Nd[kd]) && void 0 !== Jd ? Jd : Yd.p);
      return !Ld.move && !Ld.scale || Kd && Od ? (0, xd.jsx)(Td, {
        className: Zd,
        keepPlace: gd
      }) : (0, xd.jsx)(Cd.G, {
        className: Zd,
        disabled: Od || od,
        ariaLabel: Qd("hudLayout:resetElement", {
          name: yd(kd, Wd, Qd, Pd)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: kd
        },
        onClick: dd => {
          Kd && td(dd.currentTarget), ld(kd)
        },
        children: (0, xd.jsx)(Md.e, {
          name: "rotate-left"
        })
      })
    }

    function hd(dd) {
      let {
        id: Jd,
        actionButtons: kd,
        keyNames: Nd,
        className: Wd,
        keepPlace: Pd,
        locked: Zd,
        lockable: gd,
        onLocked: Kd
      } = dd;
      const {
        t: od
      } = (0, pd.B)();
      return gd || Zd ? (0, xd.jsx)(Cd.G, {
        className: Wd,
        ariaLabel: od(Zd ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: yd(Jd, kd, od, Nd)
        }),
        pressed: Zd,
        active: Zd,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${Zd?"unlock":"lock"}:${Jd}`
        },
        onClick: () => {
          Kd(Jd, !Zd)
        },
        children: (0, xd.jsx)(Md.e, {
          name: Zd ? "lock" : "lock-open"
        })
      }) : (0, xd.jsx)(Td, {
        className: Wd,
        keepPlace: Pd
      })
    }

    function rd(dd) {
      let {
        className: Jd,
        open: kd,
        name: Nd,
        onToggle: Wd
      } = dd;
      const {
        t: Pd
      } = (0, pd.B)();
      return (0, xd.jsx)(Cd.G, {
        className: Jd,
        ariaLabel: Pd(kd ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: Nd
        }),
        pressed: kd,
        analyticsClick: {
          id: "hud_layout.children",
          value: kd ? "close" : "open"
        },
        onClick: () => {
          Wd(!kd)
        },
        children: (0, xd.jsx)(Md.e, {
          name: kd ? "angle-up" : "angle-down"
        })
      })
    }

    function ud(dd, Jd) {
      var kd;
      dd.contains(document.activeElement) && Jd.focus({
        preventScroll: !0
      }), null === (kd = (0, Fd.g)()) || void 0 === kd || kd.handOverPadFocus(dd, Jd)
    }

    function td(dd) {
      const Jd = dd.closest("[data-hud-row]"),
        kd = null === Jd || void 0 === Jd ? void 0 : Jd.querySelector(".HudElementRowName");
      return !(!Jd || !kd) && (ud(Jd, kd), !0)
    }
    const Vd = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function zd(dd, Jd) {
      return "joystick" === dd && !Jd
    }

    function Hd() {
      const {
        t: dd
      } = (0, pd.B)();
      return (0, xd.jsx)(Cd.G, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: dd => {
          const Jd = dd.currentTarget;
          if (!td(Jd)) {
            const dd = function(dd) {
              var Jd, kd;
              const pd = [dd.previousElementSibling, dd.nextElementSibling].find((dd => dd instanceof HTMLElement && dd.matches(Vd)));
              return null !== (Jd = null !== pd && void 0 !== pd ? pd : null === (kd = dd.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === kd ? void 0 : kd.querySelector(`:is(${Vd}):not(.HudFixJoystickButton)`)) && void 0 !== Jd ? Jd : null
            }(Jd);
            dd && ud(Jd, dd)
          }
          Kd.d.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: dd("hudLayout:fixJoystick")
      })
    }
    var wd = kd(72),
      Ad = kd(1302),
      dJ = kd(2974),
      JJ = kd(2615),
      kJ = kd(8815),
      pJ = kd(2385),
      NJ = kd(2405),
      WJ = kd(3011);
    const PJ = ["J", "C", "A", "P", "U", "X", "G"],
      ZJ = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: Yd.F,
        pinnedIcon: null
      });

    function gJ(dd, Jd) {
      dd.replaceChildren(...[...Jd.childNodes].map((dd => dd.cloneNode(!0))))
    }
    const CJ = dd => ({
      [Ud]: dd
    });

    function KJ(dd) {
      let {
        id: Jd,
        slot: kd,
        icon: pd,
        label: Wd,
        hidden: Pd,
        className: Zd,
        face: Cd
      } = dd;
      const Kd = (0, Nd.useRef)(null);
      return (0, Nd.useLayoutEffect)((() => {
        Cd && Kd.current && gJ(Kd.current, Cd)
      }), [Cd]), (0, xd.jsxs)("div", {
        className: gd()("TouchKeyHit", `TouchSlot${kd}`, Zd, {
          HudPreviewGhost: Pd.has(Jd)
        }),
        ...CJ(Jd),
        children: [Cd && (0, xd.jsx)("div", {
          ref: Kd,
          className: gd()("TouchKey", {
            Labelled: Cd.classList.contains("Labelled")
          })
        }), !Cd && (0, xd.jsxs)("div", {
          className: gd()("TouchKey", {
            Labelled: void 0 !== Wd
          }),
          children: [pd && (0, xd.jsx)(Md.e, {
            name: pd
          }), void 0 !== Wd && (0, xd.jsx)("span", {
            className: "TouchKeyLabel",
            children: Wd
          })]
        })]
      })
    }

    function oJ(dd) {
      let {
        item: Jd,
        selected: kd
      } = dd;
      const pd = (0, Nd.useRef)(null);
      return (0, Nd.useLayoutEffect)((() => {
        pd.current && gJ(pd.current, Jd)
      }), [Jd]), (0, xd.jsx)("div", {
        ref: pd,
        className: gd()("InvenItem", {
          Selected: kd
        })
      })
    }
    const lJ = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      QJ = dd => void 0 === dd ? {} : {
        style: {
          "--parked": dd
        }
      };

    function LJ(dd) {
      let {
        id: Jd,
        hidden: kd,
        parked: pd,
        unslotted: Nd = !1
      } = dd;
      return (0, xd.jsx)("div", {
        className: gd()("TopRightIcon", NJ.k[Jd], {
          HudPreviewGhost: kd.has(Jd),
          [pJ.d]: void 0 !== pd,
          [pJ.f]: Nd
        }),
        ...QJ(pd),
        children: (0, xd.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...CJ(Jd),
          children: (0, xd.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, xd.jsx)(Md.e, {
              name: lJ[Jd]
            })
          })
        })
      })
    }

    function OJ(dd) {
      let {
        portraitPhone: Jd,
        icons: kd,
        pinnedIcon: pd,
        hidden: Wd,
        moved: Pd,
        trayState: Zd
      } = dd;
      const Cd = Jd ? (0, pJ.D)(kd) : [],
        Kd = kd.filter((dd => "settings" === dd)),
        od = kd.filter((dd => "settings" !== dd && !Cd.includes(dd))).reverse(),
        ld = Cd.length > 0 && "gone" === Zd,
        Qd = [...Kd, ...ld ? ["tray"] : [], ...od].filter((dd => "tray" === dd || Wd.has(dd) && !Pd.has(dd))),
        Ld = dd => {
          const Jd = Qd.indexOf(dd);
          return Jd < 0 ? void 0 : Jd
        },
        Od = (dd, Jd) => (0, xd.jsx)(LJ, {
          id: dd,
          hidden: Wd,
          parked: Jd ? Ld(dd) : void 0,
          unslotted: Jd && Wd.has(dd) && Pd.has(dd)
        }, dd);
      return (0, xd.jsxs)("div", {
        className: gd()("TopRightIcons TouchInGame", {
          Column: Jd
        }),
        children: [Kd.map((dd => Od(dd, !0))), Cd.length > 0 && (0, xd.jsxs)("div", {
          className: gd()("TopRightIcon TopRightTrayToggle Open", {
            [pJ.d]: ld
          }),
          ...QJ(Ld("tray")),
          children: [(0, xd.jsx)("div", {
            className: gd()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== Zd
            }),
            children: (0, xd.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, xd.jsx)(Md.e, {
                name: "ellipsis"
              })
            })
          }), (0, xd.jsx)("div", {
            className: "TopRightTray",
            children: Cd.map((dd => Od(dd, !1)))
          })]
        }), od.map((dd => (0, xd.jsxs)(Nd.Fragment, {
          children: ["perspective" === dd && null !== pd && (0, xd.jsx)("div", {
            className: "TopRightIcon",
            children: (0, xd.jsx)("div", {
              className: "UiItemIcon SmallTextBold",
              children: (0, xd.jsx)("div", {
                className: "ScaleOnHover",
                children: (0, xd.jsx)(Md.e, {
                  name: pd
                })
              })
            })
          }), Od(dd, !0)]
        }, dd)))]
      })
    }

    function eJ(dd) {
      let {
        next: Jd,
        hidden: kd
      } = dd;
      return (0, xd.jsx)("div", {
        className: gd()("HotBarArrow", Jd ? "Next" : "Previous", {
          HudPreviewGhost: kd
        }),
        ...CJ("arrows"),
        children: (0, xd.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, xd.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, xd.jsx)(Md.e, {
              name: Jd ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function RJ() {
      return (0, xd.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, xd.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, xd.jsx)("div", {
            className: "SocialBar",
            children: (0, xd.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, xd.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, xd.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, xd.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, xd.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, xd.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, xd.jsx)(Md.e, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, xd.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, xd.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, xd.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, xd.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, xd.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, xd.jsx)(Md.e, {
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
    const IJ = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      GJ = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      vJ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      xJ = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function qJ(dd) {
      let {
        presence: Jd,
        portraitPhone: kd,
        hidden: Nd,
        actionButtons: Wd,
        joystickFixed: Pd,
        keysAbove: Zd,
        auraBar: Cd,
        trayState: Kd,
        moved: ld
      } = dd;
      const {
        t: Qd
      } = (0, pd.B)(), {
        faces: Ld,
        items: Od
      } = Jd, ed = dd => ({
        HudPreviewGhost: Nd.has(dd)
      });
      return (0, xd.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, xd.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, xd.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, xd.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, xd.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, xd.jsx)("div", {
              className: "InGameHeaderGameName",
              children: Qd("hudLayout:previewGameName")
            })]
          })
        }), (0, xd.jsx)("div", {
          className: "TopLeftElements",
          children: (0, xd.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, xd.jsxs)("div", {
              className: "Chat",
              children: [(0, xd.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [Qd("hudLayout:previewChatLine"), Qd("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), Qd("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((dd => (0, xd.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, xd.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, xd.jsx)("div", {
                      className: "IndividualText",
                      children: dd
                    })
                  })
                }, dd)))
              }), (0, xd.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: gd()("ChatIconWrapper SmallTextLight", ed("chat")),
                ...CJ("chat"),
                children: (0, xd.jsx)(Md.e, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, xd.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, xd.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, xd.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, xd.jsx)("div", {
                className: "TopRightIconsContainer",
                ...CJ("menu"),
                children: (0, xd.jsx)(OJ, {
                  portraitPhone: kd,
                  icons: Jd.rowIcons,
                  pinnedIcon: Jd.pinnedIcon,
                  hidden: Nd,
                  trayState: Kd,
                  moved: ld
                })
              })
            }), od.featureFlags.useSocialFeatures && (0, xd.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, xd.jsx)(RJ, {})
            })]
          })
        }), (0, xd.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, xd.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, xd.jsxs)("div", {
            className: "TouchInteractKey",
            ...CJ("interact"),
            children: [(0, xd.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, xd.jsx)(Md.e, {
                name: "hand-back-point-up"
              })
            }), (0, xd.jsx)("div", {
              children: Qd("hudLayout:previewInteract")
            })]
          })
        }), (0, xd.jsx)("div", {
          className: "BottomCentre",
          children: (0, xd.jsxs)("div", {
            className: "BottomElements",
            children: [(0, xd.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, xd.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, xd.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...CJ("hotbar"),
                children: (0, xd.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, xd.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, xd.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, xd.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, xd.jsx)(Md.e, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), Cd && (0, xd.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, xd.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, xd.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, WJ.h)("glint"),
                    alt: ""
                  }), (0, xd.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, xd.jsx)("div", {
                  className: "AuraBar",
                  children: (0, xd.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, xd.jsx)("div", {
                className: "HotBarRow",
                children: (0, xd.jsx)("div", {
                  className: gd()("HotBarContainer Touch", {
                    KeysAbove: Zd
                  }),
                  children: (0, xd.jsxs)("div", {
                    className: "HotBar",
                    ...CJ("hotbar"),
                    children: [(0, xd.jsxs)("div", {
                      className: gd()("TouchInventoryKeys", {
                        NoAuraBar: !Cd
                      }),
                      children: [(0, xd.jsx)("div", {
                        className: gd()("TouchInventoryKey ShopKey", ed("inventory"), {
                          Hidden: !Jd.shop
                        }),
                        ...CJ("inventory"),
                        children: (0, xd.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, xd.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, xd.jsx)(Md.e, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, xd.jsx)("div", {
                        className: gd()("TouchInventoryKey BagKey", ed("inventory"), {
                          Hidden: !Jd.bag
                        }),
                        ...CJ("inventory"),
                        children: (0, xd.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, xd.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, xd.jsx)(Md.e, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, xd.jsx)(eJ, {
                      next: !1,
                      hidden: Nd.has("arrows")
                    }), (0, xd.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== Od && Od.map(((dd, Jd) => (0, xd.jsx)(oJ, {
                        item: dd,
                        selected: dd.classList.contains("Selected")
                      }, Jd))), null === Od && vJ.map((dd => {
                        const Jd = xJ[dd];
                        return (0, xd.jsx)("div", {
                          className: gd()("InvenItem", {
                            Selected: 0 === dd
                          }),
                          children: Jd && (0, xd.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, xd.jsx)(Md.e, {
                              name: Jd
                            })
                          })
                        }, dd)
                      }))]
                    }), (0, xd.jsx)(eJ, {
                      next: !0,
                      hidden: Nd.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, xd.jsx)("div", {
              className: "BottomRightElements",
              children: (0, xd.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== Ld && PJ.map((dd => {
                  const Jd = Ld[dd];
                  return Jd && (0, xd.jsx)(KJ, {
                    id: IJ[dd],
                    slot: dd,
                    face: Jd,
                    className: GJ[dd],
                    hidden: Nd
                  }, dd)
                })), null === Ld && (0, xd.jsxs)(xd.Fragment, {
                  children: [(0, xd.jsx)(KJ, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: Nd
                  }), (0, xd.jsx)(KJ, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: Nd
                  }), Wd && (0, xd.jsxs)(xd.Fragment, {
                    children: [(0, xd.jsx)(KJ, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: Nd
                    }), (0, xd.jsx)(KJ, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: Nd
                    })]
                  }), !Wd && (0, xd.jsx)(KJ, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: Qd("touchKeys:scope"),
                    hidden: Nd
                  }), (0, xd.jsx)(KJ, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: Qd("touchKeys:fly"),
                    hidden: Nd
                  }), (0, xd.jsx)(KJ, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: Nd
                  })]
                })]
              })
            })]
          })
        }), (0, xd.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, xd.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, xd.jsxs)("div", {
              className: gd()("Joystick Resting HudPreviewJoystick", {
                Floating: !Pd
              }),
              ...CJ("joystick"),
              children: [(0, xd.jsx)("div", {
                className: "JoystickBase"
              }), (0, xd.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function BJ() {
      const [dd, Jd] = (0, Nd.useState)({}), kd = (0, Nd.useCallback)((dd => {
        Jd((Jd => [...new Set([...Object.keys(Jd), ...Object.keys(dd)])].every((kd => Jd[kd] === dd[kd])) ? Jd : dd))
      }), []);
      return [dd, kd]
    }
    const sJ = .05;

    function iJ(dd) {
      var Jd;
      let {
        selected: kd,
        layout: Nd,
        actionButtons: Wd,
        keyNames: Pd,
        overlaps: Zd,
        scaleCaps: Kd,
        joystickFixed: od,
        onScale: ld,
        onHidden: Qd,
        onReset: Ld,
        locked: Od,
        lockable: ed,
        onLocked: Rd,
        extra: Id
      } = dd;
      const {
        t: Gd
      } = (0, pd.B)(), vd = kd ? nd[kd] : null, qd = null !== kd && Od.has(kd), Bd = (kd && Nd.hudElements[kd] || Yd.p)[2], sd = null !== (Jd = kd && Kd[kd]) && void 0 !== Jd ? Jd : Yd.j, ad = dd => {
        kd && ld(kd, Math.min(sd, Math.round(100 * (Bd + .1 * dd)) / 100))
      };
      return (0, xd.jsxs)(xd.Fragment, {
        children: [(0, xd.jsxs)("div", {
          className: gd()("HudQuickName SmallTextBold", {
            Overlap: Zd.length > 0
          }),
          children: [Zd.length > 0 && (0, xd.jsx)(Md.e, {
            name: "triangle-exclamation"
          }), vd ? yd(vd.id, Wd, Gd, Pd) : Gd("hudLayout:fullScreenHint"), Zd.length > 0 && (0, xd.jsx)("span", {
            className: "HudQuickOverlap",
            children: Gd("hudLayout:overlapsShort", {
              names: Dd(Zd, Wd, Gd, Pd)
            })
          })]
        }), (null === vd || void 0 === vd ? void 0 : vd.scale) && (0, xd.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, xd.jsx)(Cd.G, {
            disabled: qd || Bd <= Yd.l,
            ariaLabel: Gd("hudLayout:smaller"),
            onClick: () => {
              ad(-1)
            },
            children: (0, xd.jsx)(Md.e, {
              name: "minus"
            })
          }), (0, xd.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*Bd)}%`
          }), (0, xd.jsx)(Cd.G, {
            disabled: qd || Bd >= sd,
            ariaLabel: Gd("hudLayout:larger"),
            onClick: () => {
              ad(1)
            },
            children: (0, xd.jsx)(Md.e, {
              name: "plus"
            })
          })]
        }), (vd || Id) && (0, xd.jsxs)("div", {
          className: "HudQuickActions",
          children: [vd && (0, xd.jsxs)(xd.Fragment, {
            children: [(0, xd.jsx)(hd, {
              id: vd.id,
              actionButtons: Wd,
              keyNames: Pd,
              locked: qd,
              lockable: ed(vd.id),
              onLocked: Rd
            }), (0, xd.jsx)(Ed, {
              id: vd.id,
              elements: Nd.hudElements,
              actionButtons: Wd,
              keyNames: Pd,
              onHidden: Qd
            }), (0, xd.jsx)(cd, {
              id: vd.id,
              elements: Nd.hudElements,
              actionButtons: Wd,
              keyNames: Pd,
              locked: qd,
              onReset: Ld
            }), zd(vd.id, od) && (0, xd.jsx)(Hd, {})]
          }), Id]
        })]
      })
    }
    var aJ = kd(1124),
      MJ = kd(4258);
    const FJ = "HudPreviewDoc",
      YJ = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      mJ = new Set([FJ, ...Object.values(YJ)]),
      bJ = new Set(Yd.A.map(NJ.u)),
      SJ = new Set(NJ.f),
      jJ = 'style, link[rel="stylesheet"]';

    function XJ(dd, Jd, kd, pd) {
      const Nd = new Map,
        Wd = new Set,
        Pd = new URL(dd.baseURI).origin,
        Zd = Jd => {
          var kd;
          if ("LINK" !== Jd.nodeName) return !0;
          const pd = null === (kd = Jd.getAttribute("href")) || void 0 === kd ? void 0 : kd.trim();
          if (!pd) return !1;
          try {
            return new URL(pd, dd.baseURI).origin === Pd
          } catch {
            return !1
          }
        };
      let gd = null;
      const Cd = () => {
          gd !== (0 === Wd.size) && (gd = 0 === Wd.size, null === pd || void 0 === pd || pd(gd))
        },
        Kd = dd => {
          const Jd = dd.cloneNode(!0);
          if ("LINK" === Jd.tagName) {
            Wd.add(Jd);
            const dd = () => {
              Wd.delete(Jd), Cd()
            };
            Jd.addEventListener("load", dd), Jd.addEventListener("error", dd), kd && Jd.addEventListener("load", kd)
          }
          return Jd
        },
        od = () => {
          const pd = function(dd) {
              const Jd = [...dd.body.children].filter((dd => dd.matches(jJ)));
              return [...dd.head.querySelectorAll(jJ), ...Jd]
            }(dd).filter(Zd),
            Pd = new Set(pd);
          for (const [dd, Jd] of Nd) Pd.has(dd) || (Jd.remove(), Nd.delete(dd), Wd.delete(Jd));
          let gd = null;
          for (let dd = pd.length - 1; dd >= 0; dd--) {
            const Wd = pd[dd];
            let Pd = Nd.get(Wd);
            Pd ? "STYLE" === Wd.tagName && Pd.textContent !== Wd.textContent && (Pd.textContent = Wd.textContent, null === kd || void 0 === kd || kd()) : (Pd = Kd(Wd), Nd.set(Wd, Pd), Jd.head.insertBefore(Pd, gd)), gd = Pd
          }
          Cd()
        };
      od();
      const ld = new MutationObserver(od);
      return ld.observe(dd.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), ld.observe(dd.body, {
        childList: !0
      }), () => {
        ld.disconnect()
      }
    }

    function fJ(dd, Jd, kd) {
      let {
        keysAbove: pd
      } = kd;
      const Nd = [...dd.documentElement.classList].filter((dd => !mJ.has(dd) && !SJ.has(dd))),
        Wd = [...Jd.documentElement.classList].filter((dd => SJ.has(dd))),
        Pd = [FJ, YJ.hotbar, YJ.hasShop, YJ.hasBag];
      pd && Pd.push(YJ.keysAbove), Jd.documentElement.className = [...Nd, ...Pd, ...Wd].join(" ")
    }
    const nJ = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function UJ(dd, Jd, kd, pd, Nd) {
      const Wd = (0, Yd.B)(kd, pd, "joystick"),
        Pd = (0, NJ.v)((0, NJ.L)(kd, pd, Nd), pd),
        Zd = Pd.classes.filter((dd => !bJ.has(dd))),
        gd = Jd.documentElement;
      (0, NJ.S)({
        ...Pd,
        classes: Zd
      }, {
        vars: gd,
        safe: gd,
        classes: gd
      });
      const Cd = (0, NJ.B)(kd.hudLayouts[pd].hudSafe, window.innerWidth, window.innerHeight, yJ(), (0, NJ.O)(Jd));
      gd.style.setProperty("--preview-joystick-shift-left", `${Cd[3]}px`), gd.style.setProperty("--preview-joystick-shift-bottom", `${Cd[2]}px`), gd.style.setProperty("--preview-joystick-scale", String(Wd[2])), (0, MJ.e)(gd, Jd, kd, pd);
      for (const Kd of nJ) gd.style.setProperty(Kd, dd.documentElement.style.getPropertyValue(Kd) || "0px")
    }

    function yJ() {
      return (0, NJ.J)(Kd.d.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function DJ(dd) {
      return (0, NJ.p)(yJ(), (0, NJ.O)(dd))
    }

    function TJ(dd, Jd, kd) {
      const pd = dd.documentElement.style,
        Nd = (0, NJ.F)(Jd),
        Wd = pd.getPropertyValue(Nd);
      try {
        return kd((dd => {
          pd.setProperty(Nd, String(dd))
        }))
      } finally {
        "" === Wd ? pd.removeProperty(Nd) : pd.setProperty(Nd, Wd)
      }
    }

    function EJ(dd, Jd) {
      const [kd, pd] = TJ(dd, "hotbar", (Jd => {
        const kd = kd => {
          var pd, Nd;
          return Jd(kd), null !== (pd = null === (Nd = dd.querySelector(".HotBarGameItemsContainer")) || void 0 === Nd ? void 0 : Nd.getBoundingClientRect().width) && void 0 !== pd ? pd : 0
        };
        return [kd(1), kd(Yd.j)]
      }));
      return kd <= 0 ? Yd.j : Math.min(Yd.j, Math.max(1, Math.floor(pd / kd / Jd + 1e-6) * Jd))
    }
    const cJ = 3,
      hJ = .5,
      rJ = dd => dd.right - dd.left;
    const uJ = (dd, Jd) => Math.abs((0, kJ.c)(dd).x - (0, kJ.c)(Jd).x) + Math.abs((0, kJ.c)(dd).y - (0, kJ.c)(Jd).y) + Math.abs(rJ(dd) - rJ(Jd));

    function tJ(dd, Jd, kd, pd, Nd) {
      let {
        canKeep: Wd = () => !0,
        passes: Pd = cJ,
        before: Zd,
        keysAboveOf: gd
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const Cd = void 0 !== gd && gd(dd) !== gd(Jd),
        Kd = Jd.hudLayouts[kd].hudLocked.filter((dd => Wd(dd) && !(Cd && "inventory" === dd))),
        od = new Set(Kd);
      if (0 === od.size) return Jd;
      const ld = [...Sd].filter((pd => !Kd.includes(pd) && (0, Yd.B)(dd, kd, pd).join() === (0, Yd.B)(Jd, kd, pd).join())),
        Qd = dd => {
          const Jd = (0, kJ.B)(ld.flatMap((Jd => dd[Jd] ? [dd[Jd]] : [])));
          return {
            ...dd,
            cluster: null !== Jd && void 0 !== Jd ? Jd : void 0
          }
        },
        Ld = dd => {
          const Jd = Nd(dd);
          return Jd && Qd(Jd)
        },
        Od = Zd ? Qd(Zd) : Ld(dd);
      let ed = Od && Ld(Jd);
      if (!Od || !ed) return Jd;
      let Rd = Jd;
      for (let Id = 0; Id < Pd && od.size > 0; Id++) {
        const dd = new Map;
        for (const Jd of od) {
          const Nd = Od[Jd],
            Wd = ed[Jd],
            Pd = Nd && Wd ? VJ(Jd, (0, Yd.B)(Rd, kd, Jd), Nd, Wd, pd) : null;
          Pd ? dd.set(Jd, Pd) : od.delete(Jd)
        }
        if (0 === dd.size) break;
        let Nd = Rd;
        for (const [Jd, pd] of dd) Nd = (0, Yd.gb)(Nd, kd, Jd, pd);
        const Wd = Ld(Nd);
        if (!Wd) return Jd;
        let Pd = Rd;
        for (const [Jd, pd] of dd) {
          const dd = Wd[Jd];
          dd && uJ(Od[Jd], dd) < uJ(Od[Jd], ed[Jd]) - hJ ? Pd = (0, Yd.gb)(Pd, kd, Jd, pd) : od.delete(Jd)
        }
        if (Pd === Rd) break;
        const Zd = [...dd.keys()].every((dd => od.has(dd)));
        if (Rd = Pd, ed = Zd ? Wd : Ld(Rd), !ed) return Jd
      }
      return Nd(Rd), Rd
    }

    function VJ(dd, Jd, kd, pd, Nd) {
      let [Wd, Pd, Zd] = Jd;
      const gd = Yd.x[dd],
        Cd = {};
      gd.scale && rJ(pd) > 0 && Math.abs(rJ(kd) - rJ(pd)) > hJ && (Cd.scale = Math.max(Yd.l, Math.min(Yd.j, Zd * rJ(kd) / rJ(pd))));
      const Kd = (0, kJ.c)(kd).x - (0, kJ.c)(pd).x,
        od = (0, kJ.c)(kd).y - (0, kJ.c)(pd).y;
      return gd.move && (Math.abs(Kd) > hJ || Math.abs(od) > hJ) && (Cd.dx = Wd + Kd / Nd.width, Cd.dy = Pd + od / Nd.height), void 0 === Cd.scale && void 0 === Cd.dx ? null : Cd
    }
    let zJ = 0;

    function HJ() {
      return zJ > 0
    }
    const wJ = dd => 0 === dd.dx && 0 === dd.dy,
      AJ = .001,
      dk = dd => Math.abs(dd.dx) >= 5e-4 || Math.abs(dd.dy) >= 5e-4 ? dd : {
        dx: dd.dx,
        dy: dd.dy < 0 ? -.001 : AJ
      };

    function Jk(dd) {
      let {
        preview: Jd,
        stageRef: kd,
        ringRef: pd,
        centreLineRef: Wd,
        snapCentre: Pd,
        ready: Zd,
        measure: gd,
        k: Cd,
        viewport: Kd,
        boxes: od,
        pieces: ld,
        selected: Qd,
        insets: Ld,
        layout: Od,
        canMove: ed,
        onSelect: Rd,
        onMove: Id
      } = dd;
      const Gd = (0, Nd.useRef)(null),
        vd = (0, Nd.useCallback)((() => null !== Gd.current), []),
        xd = (dd, Jd) => {
          if (!Jd) return null;
          const kd = (0, kJ.c)(dd.origin),
            pd = (0, kJ.c)(Jd),
            Nd = (dd.to.dx - dd.from.dx) * Kd.width,
            Wd = (dd.to.dy - dd.from.dy) * Kd.height,
            Pd = Jd.right - Jd.left,
            Zd = Jd.bottom - Jd.top;
          return {
            skew: {
              x: pd.x - kd.x - Nd,
              y: pd.y - kd.y - Wd
            },
            box: {
              left: kd.x - Pd / 2,
              top: kd.y - Zd / 2,
              right: kd.x + Pd / 2,
              bottom: kd.y + Zd / 2
            }
          }
        },
        qd = (dd, kd) => {
          var Nd;
          const Pd = Gd.current;
          if (!Pd || Pd.pointerId !== dd.pointerId) return;
          Gd.current = null, null === (Nd = Wd.current) || void 0 === Nd || Nd.classList.remove("Shown", "Snapped");
          const Zd = pd.current;
          if (Zd && null !== Pd.ringStyle && Zd.setAttribute("style", Pd.ringStyle), kd && Pd.moved) {
            const dd = wJ(Pd.to) ? null : gd(Pd.id),
              Jd = dd ? (0, kJ.A)(dd, (0, kJ.w)(Kd.width, Kd.height, Ld)) : {
                x: 0,
                y: 0
              },
              kd = {
                dx: Pd.to.dx + Jd.x / Kd.width,
                dy: Pd.to.dy + Jd.y / Kd.height
              },
              pd = wJ(Pd.to) ? kd : dk(kd);
            Id(Pd.id, pd.dx, pd.dy)
          } else Jd(Pd.id, null), kd && Pd.tapPick && Rd(Pd.tapPick)
        };
      return {
        busy: vd,
        handlers: {
          onPointerDown: dd => {
            var Jd;
            if (!Zd || Gd.current || !dd.target.closest(".HudPreviewHandle")) return;
            const pd = kd.current.getBoundingClientRect(),
              Nd = {
                x: (dd.clientX - pd.left) / Cd,
                y: (dd.clientY - pd.top) / Cd
              },
              Wd = (0, kJ.u)(Nd, ld, 40 / Cd),
              Pd = "cluster" === Qd && void 0 !== od.cluster && null !== (0, kJ.u)(Nd, [{
                id: "cluster",
                box: od.cluster
              }], 40 / Cd),
              gd = "menu" === Qd && void 0 !== od.menu && (0, kJ.g)(od.menu, Nd) && ("menu" === Wd || null !== Wd && (0, pJ.v)(Wd, Od.hudElements[Wd])),
              Kd = Pd ? "cluster" : gd ? "menu" : null,
              Ld = null !== Kd,
              Id = null !== Kd && void 0 !== Kd ? Kd : Wd;
            if (!Id) return;
            if (function(dd) {
                zJ++;
                const Jd = kd => {
                  kd.pointerId === dd && (zJ = Math.max(0, zJ - 1), window.removeEventListener("pointerup", Jd, !0), window.removeEventListener("pointercancel", Jd, !0))
                };
                window.addEventListener("pointerup", Jd, !0), window.addEventListener("pointercancel", Jd, !0)
              }(dd.pointerId), !ed(Id)) return void Rd(Ld && Wd ? Wd : Id);
            Rd(Id);
            const [vd, xd] = null !== (Jd = Od.hudElements[Id]) && void 0 !== Jd ? Jd : [0, 0], qd = {
              dx: vd,
              dy: xd
            }, Bd = {
              skew: {
                x: 0,
                y: 0
              },
              box: od[Id]
            };
            Gd.current = {
              id: Id,
              pointerId: dd.pointerId,
              startX: dd.clientX,
              startY: dd.clientY,
              origin: od[Id],
              from: qd,
              to: qd,
              moved: !1,
              home: wJ(qd) ? {
                centre: (0, kJ.c)(od[Id]),
                anchor: Bd
              } : null,
              away: wJ(qd) ? null : Bd,
              anchor: Bd,
              ringStyle: null,
              tapPick: Ld ? Wd : null
            }, dd.currentTarget.setPointerCapture(dd.pointerId)
          },
          onPointerMove: dd => {
            const kd = Gd.current;
            if (!kd || kd.pointerId !== dd.pointerId) return;
            const Nd = dd.clientX - kd.startX,
              Zd = dd.clientY - kd.startY;
            if (!kd.moved && Math.hypot(Nd, Zd) < 5) return;
            const od = !kd.moved;
            var ld, Qd;
            (kd.moved = !0, od) && (kd.ringStyle = null !== (ld = null === (Qd = pd.current) || void 0 === Qd ? void 0 : Qd.getAttribute("style")) && void 0 !== ld ? ld : null);
            const Od = (0, kJ.w)(Kd.width, Kd.height, Ld);
            if (!kd.home) {
              var ed;
              kd.to = {
                dx: 0,
                dy: 0
              }, Jd(kd.id, kd.to);
              const dd = gd(kd.id),
                pd = null !== (ed = xd(kd, dd)) && void 0 !== ed ? ed : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: kd.origin
                },
                Nd = (0, kJ.c)(kd.origin);
              kd.home = {
                centre: dd ? (0, kJ.c)(dd) : {
                  x: Nd.x - kd.from.dx * Kd.width,
                  y: Nd.y - kd.from.dy * Kd.height
                },
                anchor: pd
              }
            }
            const Rd = kd.home;
            let Id = !1;
            const vd = dd => {
                Id = !1;
                let pd = (0, kJ.k)(dd.box, Nd / Cd, Zd / Cd, Od);
                const Wd = Kd.width / 2;
                if (Pd && Math.abs((0, kJ.c)(kd.origin).x + pd.x - Wd) <= 8 / Cd) {
                  const Jd = Wd - (0, kJ.c)(kd.origin).x,
                    Nd = (0, kJ.k)(dd.box, Jd, pd.y, Od);
                  Id = Math.abs(Nd.x - Jd) < .01, Id && (pd = Nd)
                }
                const gd = (0, kJ.s)(kd.from, pd.x - dd.skew.x, pd.y - dd.skew.y, Kd.width, Kd.height);
                kd.to = dk(gd), kd.anchor = dd, Jd(kd.id, kd.to)
              },
              qd = (0, kJ.k)(Rd.anchor.box, Nd / Cd, Zd / Cd, Od),
              Bd = Wd.current,
              sd = (0, kJ.c)(kd.origin),
              ad = ((0, Yd.R)(kd.id) ? 20 : 6) / Cd;
            if (Math.abs(sd.x + qd.x - Rd.centre.x) <= ad && Math.abs(sd.y + qd.y - Rd.centre.y) <= ad) kd.to = {
              dx: 0,
              dy: 0
            }, kd.anchor = Rd.anchor, Id = Pd && Math.abs(Rd.centre.x - Kd.width / 2) < 1, Jd(kd.id, kd.to);
            else if (kd.away) vd(kd.away);
            else {
              var Md;
              vd(Rd.anchor), kd.away = null !== (Md = xd(kd, gd(kd.id))) && void 0 !== Md ? Md : Rd.anchor, vd(kd.away)
            }
            null === Bd || void 0 === Bd || Bd.classList.add("Shown"), null === Bd || void 0 === Bd || Bd.classList.toggle("Snapped", Id), (dd => {
              const Jd = pd.current;
              if (Jd) {
                const {
                  skew: kd,
                  box: pd
                } = dd.anchor;
                Jd.style.left = pd.left * Cd + "px", Jd.style.top = pd.top * Cd + "px", Jd.style.width = (pd.right - pd.left) * Cd + "px", Jd.style.height = (pd.bottom - pd.top) * Cd + "px", Jd.style.translate = `${((dd.to.dx-dd.from.dx)*Kd.width+kd.x)*Cd}px ${((dd.to.dy-dd.from.dy)*Kd.height+kd.y)*Cd}px`
              }
            })(kd)
          },
          onPointerUp: dd => {
            qd(dd, !0)
          },
          onPointerCancel: dd => {
            qd(dd, !1)
          }
        }
      }
    }

    function kk(dd, Jd) {
      return Object.keys(dd).filter((dd => dd !== Jd)).map((Jd => dd[Jd]))
    }

    function pk(dd) {
      const Jd = [],
        kd = Jd => (0, Yd.R)(Jd) && !dd.documentElement.classList.contains((0, NJ.y)(Jd));
      for (const Pd of dd.querySelectorAll(`[${Ud}]`)) {
        const dd = kd(Pd.getAttribute(Ud)) ? Pd.querySelector(".ScaleOnHover") : null,
          pd = (null !== dd && void 0 !== dd ? dd : Pd).getBoundingClientRect();
        (pd.width > 0 || pd.height > 0) && Jd.push({
          id: Pd.getAttribute(Ud),
          box: {
            left: pd.left,
            top: pd.top,
            right: pd.right,
            bottom: pd.bottom
          }
        })
      }
      const pd = dd => (0, kJ.B)(Jd.filter((Jd => {
          let {
            id: kd
          } = Jd;
          return dd(kd)
        })).map((dd => {
          let {
            box: Jd
          } = dd;
          return Jd
        }))),
        Nd = {};
      for (const Pd of new Set(Jd.map((dd => dd.id)))) Nd[Pd] = pd((dd => dd === Pd));
      const Wd = pd((dd => Sd.has(dd)));
      return Wd && (Nd.cluster = Wd), {
        boxes: Nd,
        pieces: Jd
      }
    }

    function Nk(dd, Jd, kd) {
      const pd = Jd.right - Jd.left,
        Nd = Jd.bottom - Jd.top;
      return TJ(dd, "cluster", (Jd => {
        const Wd = kd => {
            Jd(kd);
            const pd = [...dd.querySelectorAll(`[${Ud}]:not(.HudPreviewGhost)`)].filter((dd => Sd.has(dd.getAttribute(Ud)))).map((dd => {
                const Jd = dd.getBoundingClientRect();
                return {
                  left: Jd.left,
                  top: Jd.top,
                  right: Jd.right,
                  bottom: Jd.bottom
                }
              })),
              Nd = (0, kJ.B)(pd);
            return Nd ? {
              w: Nd.right - Nd.left,
              h: Nd.bottom - Nd.top
            } : null
          },
          Pd = dd => !dd || dd.w <= pd && dd.h <= Nd,
          Zd = Wd(1),
          gd = Wd(Yd.j);
        if (!Zd || Pd(gd)) return Yd.j;
        const Cd = (dd, Jd, kd) => Jd > dd ? 1 + (kd - dd) * (Yd.j - 1) / (Jd - dd) : Yd.j;
        let Kd = Math.floor(Math.min(Yd.j, Cd(Zd.w, gd.w, pd), Cd(Zd.h, gd.h, Nd)) / kd + 1e-6) * kd;
        for (; Kd > 1 && !Pd(Wd(Kd));) Kd = Math.round(100 * (Kd - kd)) / 100;
        return Math.max(1, Kd)
      }))
    }

    function Wk(dd) {
      fJ(document, dd, {
        keysAbove: !1
      });
      const Jd = parseFloat(getComputedStyle(dd.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        kd = Number.isFinite(Jd) && Jd < 0;
      return fJ(document, dd, {
        keysAbove: kd
      }), kd
    }

    function Pk(dd, Jd) {
      let {
        layout: kd,
        orientation: pd,
        viewport: Wd,
        replicaKey: Pd,
        joystickFixed: Zd,
        busy: gd
      } = Jd;
      const [Cd, Kd] = (0, Nd.useState)(null), [od, ld] = (0, Nd.useState)({
        boxes: {},
        pieces: []
      }), [Qd, Ld] = (0, Nd.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [Od, ed] = (0, Nd.useState)(!1), [Rd, Id] = (0, Nd.useState)(!1), [Gd, vd] = (0, Nd.useState)(!1), xd = (0, Nd.useCallback)((dd => {
        Id(dd), dd && vd(!0)
      }), []), qd = kd.hudLayouts[pd].hudSafe;
      (0, Nd.useLayoutEffect)((() => {
        const Jd = dd.current.contentDocument;
        Jd.open(), Jd.write("<!DOCTYPE html><html><head></head><body></body></html>"), Jd.close(), Kd(Jd)
      }), [dd]);
      const Bd = (0, Nd.useCallback)((() => {
          Cd && ((0, pJ.y)(Cd), ld(pk(Cd)), Ld(function(dd, Jd) {
            const kd = DJ(dd),
              [pd, Nd, Wd, Pd] = Jd ? (0, NJ.r)(Jd, window.innerWidth, window.innerHeight, kd) : kd;
            return {
              top: pd,
              right: Nd,
              bottom: Wd,
              left: Pd
            }
          }(Cd, qd)))
        }), [Cd, qd]),
        sd = (0, Nd.useCallback)((() => {
          Cd && ed(Wk(Cd))
        }), [Cd]),
        ad = (0, Nd.useRef)((() => {}));
      return ad.current = () => {
        sd(), gd() || Bd()
      }, (0, Nd.useLayoutEffect)((() => {
        if (Cd) return XJ(document, Cd, (() => {
          ad.current()
        }), xd)
      }), [Cd, xd]), (0, Nd.useLayoutEffect)(sd, [sd, Wd]), (0, Nd.useLayoutEffect)((() => {
        Cd && (fJ(document, Cd, {
          keysAbove: Od
        }), UJ(document, Cd, kd, pd, Zd), sd(), Bd())
      }), [Cd, kd, pd, Od, Pd, Zd, Wd, Bd, sd]), (0, Nd.useEffect)((() => {
        var dd;
        if (!Cd) return;
        const Jd = new ResizeObserver((() => {
          gd() || Bd()
        }));
        for (const kd of Cd.querySelectorAll(`[${Ud}]`)) Jd.observe(kd);
        return null === (dd = Cd.fonts) || void 0 === dd || dd.ready.then(Bd), () => {
          Jd.disconnect()
        }
      }), [Cd, Bd, gd, Pd]), {
        doc: Cd,
        boxes: od.boxes,
        pieces: od.pieces,
        insets: Qd,
        keysAbove: Od,
        ready: Rd,
        settled: Gd
      }
    }
    const Zk = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      gk = (dd, Jd, kd) => {
        const pd = dd => (0, pJ.v)(dd, kd.hudElements[dd]);
        return "cluster" === dd && Sd.has(Jd) || "cluster" === Jd && Sd.has(dd) || "menu" === dd && pd(Jd) || "menu" === Jd && pd(dd) || Zk.some((pd => {
          let [Nd, Wd] = pd;
          const Pd = kd.hudElements.hotbar,
            Zd = "inventory" === Wd && kd.hudLocked.includes(Wd) && void 0 !== Pd && !(0, Yd.P)(Pd);
          return (dd === Nd && Jd === Wd || dd === Wd && Jd === Nd) && !Zd
        }))
      };
    const Ck = ["Above", "Below", "Left", "Right"];

    function Kk(dd, Jd, kd, pd, Nd) {
      const Wd = kd[dd],
        Pd = (Wd.left + Wd.right) / 2,
        Zd = (Wd.top + Wd.bottom) / 2,
        gd = (7.5 * Jd.length + 14) / pd,
        Cd = 18 / pd,
        Kd = {
          Above: {
            left: Pd - gd / 2,
            top: Wd.top - Cd,
            right: Pd + gd / 2,
            bottom: Wd.top
          },
          Below: {
            left: Pd - gd / 2,
            top: Wd.bottom,
            right: Pd + gd / 2,
            bottom: Wd.bottom + Cd
          },
          Left: {
            left: Wd.left - gd,
            top: Zd - Cd / 2,
            right: Wd.left,
            bottom: Zd + Cd / 2
          },
          Right: {
            left: Wd.right,
            top: Zd - Cd / 2,
            right: Wd.right + gd,
            bottom: Zd + Cd / 2
          }
        },
        od = kk(kd, dd),
        ld = {
          left: 0,
          top: 0,
          right: Nd.width,
          bottom: Nd.height
        };
      return Ck[(0, kJ.p)(Ck.map((dd => Kd[dd])), od, {
        bounds: ld
      })]
    }

    function lk() {
      const [dd, Jd] = (0, dJ.b)();
      return (0, Nd.useMemo)((() => ({
        width: dd,
        height: Jd
      })), [dd, Jd])
    }

    function Qk(dd) {
      var Jd;
      const {
        layout: kd,
        orientation: Wd,
        selected: Pd,
        onSelect: Zd,
        onMove: Cd,
        canMove: Kd,
        actionButtons: od,
        joystickFixed: ld,
        presence: Qd,
        keyNames: Od,
        maxHeight: ed,
        fill: Rd = !1,
        apiRef: Id
      } = dd, {
        t: Gd
      } = (0, pd.B)(), vd = lk(), qd = (null !== (Jd = (0, Ld.j)("maxAuraLevel")) && void 0 !== Jd ? Jd : 0) > 0, Bd = kd.hudLayouts[Wd], sd = (0, Nd.useRef)(null), ad = (0, Nd.useRef)(null), Fd = (0, Nd.useRef)(null), md = (0, Nd.useRef)(null), bd = (0, Nd.useRef)(null), jd = (0, Nd.useRef)(null), Xd = (0, JJ.c)(sd).width, fd = Rd ? 1 : Xd > 0 ? (0, kJ.v)(Xd, vd.width, vd.height, ed) : 0, nd = (0, Nd.useRef)((() => !1)), Ud = (0, Nd.useCallback)((() => nd.current()), []), {
        doc: Dd,
        boxes: Td,
        pieces: Ed,
        insets: cd,
        keysAbove: hd,
        ready: rd,
        settled: ud
      } = Pk(Fd, {
        layout: kd,
        orientation: Wd,
        viewport: vd,
        replicaKey: `${od}:${ld}:${qd}`,
        joystickFixed: ld,
        busy: Ud
      }), td = (0, Nd.useCallback)((dd => {
        Dd && UJ(document, Dd, dd, Wd, ld)
      }), [Dd, Wd, ld]), Vd = (0, Nd.useCallback)((dd => Dd && ud ? (td(dd), Wk(Dd), function(dd) {
        let {
          boxes: Jd,
          pieces: kd
        } = dd;
        const pd = kd.find((dd => "inventory" === dd.id));
        if (!pd || !Jd.inventory) return Jd;
        const Nd = (0, kJ.c)(Jd.inventory),
          Wd = rJ(pd.box) / 2,
          Pd = (pd.box.bottom - pd.box.top) / 2;
        return {
          ...Jd,
          inventory: {
            left: Nd.x - Wd,
            top: Nd.y - Pd,
            right: Nd.x + Wd,
            bottom: Nd.y + Pd
          }
        }
      }(pk(Dd))) : null), [Dd, ud, td]), zd = (0, Nd.useCallback)((dd => !!Dd && (td(dd), Wk(Dd))), [Dd, td]), Hd = (0, Nd.useRef)(null), Ad = (0, Nd.useRef)(null), dJ = (0, Nd.useRef)(kd);
      dJ.current = kd;
      const WJ = (0, Nd.useCallback)((() => {
        null !== Hd.current && (cancelAnimationFrame(Hd.current), Hd.current = null)
      }), []);
      (0, Nd.useEffect)((() => WJ), [kd, WJ]);
      const {
        lockable: PJ
      } = dd, ZJ = (0, Nd.useCallback)((dd => {
        if (td(dd), !ud || 0 === kd.hudLayouts[Wd].hudLocked.length) return;
        const Jd = kd;
        WJ(), Hd.current = requestAnimationFrame((() => {
          var kd;
          if (Hd.current = null, dJ.current !== Jd) return;
          const pd = (null === (kd = Ad.current) || void 0 === kd ? void 0 : kd.from) === Jd ? Ad.current.boxes : Vd(Jd);
          pd && (Ad.current = {
            from: Jd,
            boxes: pd
          }), td(pd ? tJ(Jd, dd, Wd, vd, Vd, {
            canKeep: PJ,
            passes: 1,
            before: pd,
            keysAboveOf: zd
          }) : dd)
        }))
      }), [td, ud, kd, Wd, vd, Vd, zd, PJ, WJ]), gJ = Jk({
        preview: (dd, Jd) => {
          Jd ? ZJ((0, Yd.gb)(kd, Wd, dd, Jd)) : (WJ(), td(kd))
        },
        stageRef: ad,
        ringRef: md,
        centreLineRef: bd,
        snapCentre: kd.hudSnapCentre,
        ready: ud,
        measure: dd => {
          var Jd;
          return Dd && rd && null !== (Jd = pk(Dd).boxes[dd]) && void 0 !== Jd ? Jd : null
        },
        k: fd,
        viewport: vd,
        boxes: Td,
        pieces: Ed,
        selected: Pd,
        insets: cd,
        layout: Bd,
        canMove: Kd,
        onSelect: Zd,
        onMove: (dd, Jd, kd) => {
          WJ(), Cd(dd, Jd, kd)
        }
      });
      (0, Nd.useLayoutEffect)((() => {
        nd.current = gJ.busy
      }), [gJ.busy]);
      const CJ = (0, Nd.useRef)([]),
        KJ = (0, Nd.useRef)(Bd.hudElements);
      (0, Nd.useEffect)((() => {
        for (const Nd of Object.keys(Bd.hudElements)) {
          var dd, Jd, kd, pd;
          (null !== (dd = null === (Jd = Bd.hudElements[Nd]) || void 0 === Jd ? void 0 : Jd[2]) && void 0 !== dd ? dd : 1) > (null !== (kd = null === (pd = KJ.current[Nd]) || void 0 === pd ? void 0 : pd[2]) && void 0 !== kd ? kd : 1) && Kd(Nd) && !(0, pJ.v)(Nd, Bd.hudElements[Nd]) && CJ.current.push(Nd)
        }
        KJ.current = Bd.hudElements
      }), [Bd.hudElements, Kd]), (0, Nd.useEffect)((() => {
        if (!rd) return;
        const dd = CJ.current.shift(),
          Jd = dd && Td[dd];
        if (!dd || !Jd || gJ.busy()) return;
        const kd = (0, kJ.A)(Jd, (0, kJ.w)(vd.width, vd.height, cd));
        if (0 !== kd.x || 0 !== kd.y) {
          var pd;
          const [Jd, Nd] = null !== (pd = Bd.hudElements[dd]) && void 0 !== pd ? pd : [0, 0];
          Cd(dd, Jd + kd.x / vd.width, Nd + kd.y / vd.height)
        }
      }), [Td, rd]), (0, Nd.useImperativeHandle)(Id, (() => ({
        setScale: (dd, Jd) => {
          ZJ((0, Yd.gb)(kd, Wd, dd, {
            scale: Jd
          }))
        },
        setOpacity: dd => {
          td({
            ...kd,
            hudKeyOpacity: dd
          })
        },
        keepLocks: (dd, Jd) => (WJ(), tJ(dd, Jd, Wd, vd, Vd, {
          canKeep: PJ,
          keysAboveOf: zd
        })),
        setSafe: dd => {
          ZJ((0, Yd.jb)(kd, Wd, dd)), jd.current && (jd.current.style.inset = (0, NJ.r)(dd, vd.width, vd.height, DJ(null !== Dd && void 0 !== Dd ? Dd : document)).map((dd => dd * fd + "px")).join(" "))
        }
      })), [td, ZJ, Vd, zd, WJ, PJ, Dd, kd, Wd, vd, fd]);
      const oJ = new Set(Object.keys(Bd.hudElements).filter((dd => (0, Yd.v)(Bd.hudElements, dd)))),
        lJ = Pd ? Td[Pd] : void 0,
        QJ = Pd ? yd(Pd, od, Gd, Od) : "",
        LJ = (0, aJ.d)(vd.width, vd.height),
        OJ = Pd ? function(dd, Jd, kd, pd) {
          const Nd = dd => (0, Yd.v)(kd.hudElements, dd) || (0, pJ.s)(dd, kd, pd);
          if (Nd(dd)) return [];
          const Wd = Jd.filter((Jd => {
              let {
                id: kd
              } = Jd;
              return "cluster" === dd ? Sd.has(kd) : kd === dd
            })),
            Pd = new Set;
          for (const Zd of Jd) Zd.id === dd || Pd.has(Zd.id) || gk(dd, Zd.id, kd) || Nd(Zd.id) || void 0 === kd.hudElements[dd] && void 0 === kd.hudElements[Zd.id] || Wd.some((dd => {
            let {
              id: Jd,
              box: kd
            } = dd;
            return Jd !== Zd.id && (0, kJ.i)(kd, Zd.box, 2)
          })) && Pd.add(Zd.id);
          return [...Pd]
        }(Pd, Ed, Bd, LJ) : [],
        eJ = new Set((0, pJ.o)(Bd.hudElements)),
        RJ = (0, pJ.F)(Bd, (0, pJ.D)(Qd.rowIcons)).state,
        IJ = OJ.join(),
        GJ = (0, Nd.useRef)(dd.onReady);
      GJ.current = dd.onReady, (0, Nd.useEffect)((() => {
        var dd;
        null === (dd = GJ.current) || void 0 === dd || dd.call(GJ, ud)
      }), [ud]);
      const vJ = (0, Nd.useRef)(dd.onMeasured);
      (0, Nd.useLayoutEffect)((() => {
        vJ.current = dd.onMeasured
      })), (0, Nd.useEffect)((() => {
        var dd;
        const Jd = Dd ? {
          hotbar: EJ(Dd, sJ),
          cluster: Nk(Dd, (0, kJ.w)(vd.width, vd.height, cd), sJ)
        } : {};
        null === (dd = vJ.current) || void 0 === dd || dd.call(vJ, Td, IJ ? IJ.split(",") : [], Jd)
      }), [Td, IJ, Dd, vd, cd]);
      const xJ = dd => ({
        left: dd.left * fd,
        top: dd.top * fd,
        width: (dd.right - dd.left) * fd,
        height: (dd.bottom - dd.top) * fd
      });
      return (0, xd.jsx)("div", {
        ref: sd,
        className: gd()("HudPreviewBox", {
          Fill: Rd
        }),
        style: {
          height: vd.height * fd
        },
        children: (0, xd.jsxs)("div", {
          ref: ad,
          className: "HudPreviewStage",
          style: {
            width: vd.width * fd,
            height: vd.height * fd
          },
          children: [(0, xd.jsx)("iframe", {
            ref: Fd,
            className: "HudPreviewFrame",
            title: Gd("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: vd.width,
              height: vd.height,
              transform: `scale(${fd})`
            }
          }), Dd && (0, wd.createPortal)((0, xd.jsx)(qJ, {
            presence: Qd,
            portraitPhone: LJ,
            hidden: oJ,
            actionButtons: od,
            joystickFixed: ld,
            keysAbove: hd,
            auraBar: qd,
            trayState: RJ,
            moved: eJ
          }), Dd.body), (0, xd.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...gJ.handlers,
            children: [(0, xd.jsx)("div", {
              ref: jd,
              className: "HudPreviewSafeZone",
              style: {
                top: cd.top * fd,
                right: cd.right * fd,
                bottom: cd.bottom * fd,
                left: cd.left * fd
              }
            }), Ed.map(((dd, Jd) => {
              let {
                id: kd,
                box: pd
              } = dd;
              return (0, xd.jsx)("div", {
                className: "HudPreviewHandle",
                style: xJ((0, kJ.o)(pd, 40 / fd))
              }, `${kd}:${Jd}`)
            })), Bd.hudLocked.map((dd => {
              const Jd = Td[dd];
              return Jd && (0, xd.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: Jd.right * fd,
                  top: Jd.top * fd
                },
                children: (0, xd.jsx)(Md.e, {
                  name: "lock"
                })
              }, dd)
            })), (0, xd.jsx)("div", {
              ref: bd,
              className: "HudPreviewCentreLine",
              style: {
                left: vd.width / 2 * fd
              }
            }), Pd && lJ && (0, xd.jsx)("div", {
              ref: md,
              className: gd()("HudPreviewRing", {
                Fixed: !Kd(Pd),
                Overlap: OJ.length > 0
              }),
              style: xJ(lJ),
              children: (0, xd.jsx)("span", {
                className: gd()("HudPreviewRingLabel", Kk(Pd, QJ, Td, fd, vd)),
                children: QJ
              })
            })]
          })]
        })
      })
    }

    function Lk(dd, Jd) {
      (0, Nd.useEffect)((() => {
        var kd;
        null === (kd = dd.current) || void 0 === kd || kd.toggleAttribute("inert", Jd)
      }), [dd, Jd])
    }
    const Ok = "hudFullScreen";

    function ek(dd) {
      let {
        onScale: Jd,
        onHidden: kd,
        onReset: Wd,
        locked: Pd,
        lockable: Zd,
        onLocked: gd,
        onClose: Kd,
        ...od
      } = dd;
      const {
        t: ld
      } = (0, pd.B)(), Qd = (0, Nd.useRef)(null);
      (0, Ad.s)("popup", Qd, Kd),
      function(dd) {
        const Jd = (0, Nd.useRef)(dd);
        Jd.current = dd, (0, Nd.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Ok]: !0
          }, "");
          let dd = !1;
          const kd = () => {
            dd = !0, Jd.current()
          };
          return window.addEventListener("popstate", kd), () => {
            var Jd;
            window.removeEventListener("popstate", kd), !dd && null !== (Jd = window.history.state) && void 0 !== Jd && Jd[Ok] && window.history.back()
          }
        }), [])
      }(Kd), (0, Nd.useEffect)((() => {
        function dd(dd) {
          "Escape" === dd.key && (dd.stopPropagation(), Kd())
        }
        return window.addEventListener("keydown", dd, !0), () => {
          window.removeEventListener("keydown", dd, !0)
        }
      }), [Kd]);
      const {
        selected: Ld
      } = od, Od = (0, Nd.useRef)(null), ed = (0, Nd.useRef)(null), [Rd, Id] = (0, Nd.useState)(!1);
      Lk(ed, !Rd);
      const [Gd, vd] = (0, Nd.useState)(null), [qd, Bd] = (0, Nd.useState)([]), [sd, ad] = BJ(), Md = (0, Nd.useRef)(od.selected);
      Md.current = od.selected;
      const Fd = (0, Nd.useRef)({}),
        Yd = (0, Nd.useCallback)((() => {
          const dd = Od.current;
          dd && vd(function(dd, Jd, kd) {
            var pd;
            const {
              innerWidth: Nd,
              innerHeight: Wd
            } = window, Pd = dd.offsetWidth, Zd = dd.offsetHeight, gd = Math.max(yJ()[0], 6), Cd = [];
            for (const ld of [gd, .2 * Wd, .5 * Wd - Zd / 2, .33 * Wd])
              for (const dd of [.5, .3, .7]) Cd.push({
                left: Math.max(0, Math.min(Nd - Pd - 6, Math.max(6, Nd * dd - Pd / 2))),
                top: ld
              });
            const Kd = Cd.map((dd => ({
                left: dd.left - 6,
                top: dd.top - 6,
                right: dd.left + Pd + 6,
                bottom: dd.top + Zd + 6
              }))),
              od = kk(Jd, kd);
            return Cd[(0, kJ.p)(Kd, od, {
              avoid: kd && null !== (pd = Jd[kd]) && void 0 !== pd ? pd : null
            })]
          }(dd, Fd.current, Md.current))
        }), []),
        md = (0, Nd.useCallback)(((dd, Jd, kd) => {
          Bd(Jd), ad(kd), Fd.current = dd, Yd()
        }), [Yd, ad]);
      return (0, Nd.useLayoutEffect)(Yd, [od.selected, Yd]), (0, wd.createPortal)((0, xd.jsxs)("div", {
        ref: Qd,
        className: "HudFullScreenEditor",
        children: [(0, xd.jsx)(Qk, {
          ...od,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: md,
          onReady: Id,
          lockable: Zd
        }), (0, xd.jsxs)("div", {
          ref: Od,
          className: "HudFullScreenToolbar",
          style: null === Gd ? void 0 : {
            left: Gd.left,
            top: Gd.top,
            transform: "none"
          },
          children: [(0, xd.jsx)("div", {
            ref: ed,
            className: "HudFullScreenControls",
            children: (0, xd.jsx)(iJ, {
              selected: Ld,
              layout: od.layout.hudLayouts[od.orientation],
              actionButtons: od.actionButtons,
              keyNames: od.keyNames,
              overlaps: qd,
              scaleCaps: sd,
              onScale: Jd,
              onHidden: kd,
              onReset: Wd,
              locked: Pd,
              lockable: Zd,
              onLocked: gd,
              joystickFixed: od.joystickFixed
            })
          }), (0, xd.jsx)(Cd.d, {
            className: "HudFullScreenDone",
            onClick: Kd,
            padDefaultFocus: !0,
            children: ld("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const Rk = dd => `${Math.round(100*dd)}%`;

    function Ik(dd) {
      let {
        info: Jd,
        tuple: kd,
        props: Nd
      } = dd;
      const {
        t: Wd
      } = (0, pd.B)();
      return (0, xd.jsx)(Qd.h, {
        name: Wd("hudLayout:size"),
        min: Yd.l,
        max: Yd.j,
        step: sJ,
        initValue: kd[2],
        disabled: Nd.locked.has(Jd.id),
        selectableMax: Nd.scaleCaps[Jd.id],
        cappedNote: Wd("hudLayout:sizeCapped"),
        format: Rk,
        onChange: dd => {
          Nd.onScalePreview(Jd.id, dd)
        },
        onChangeComplete: dd => {
          Nd.onScale(Jd.id, dd)
        }
      })
    }

    function Gk(dd) {
      const {
        t: Jd
      } = (0, pd.B)(), {
        present: kd,
        elements: Wd,
        selected: Pd,
        onSelect: Zd,
        onHidden: Cd,
        onReset: Kd,
        note: od,
        actionButtons: ld,
        keyNames: Qd,
        sizeBesidePreview: Ld,
        locked: Od,
        lockable: ed,
        onLocked: Rd
      } = dd, {
        rowIconsOpen: Id,
        onRowIconsOpen: Gd
      } = dd, vd = (0, Nd.useRef)(null), qd = null !== Pd && (Id || !(0, Yd.R)(Pd));
      return (0, Nd.useEffect)((() => {
        var dd;
        const Jd = Pd ? null === (dd = vd.current) || void 0 === dd ? void 0 : dd.querySelector(`[data-hud-row="${Pd}"]`) : null;
        if (!Jd) return;
        const kd = Jd.closest(".SettingsMenuRight"),
          pd = performance.now();
        let Nd = null;
        const Wd = () => {
            clearInterval(gd), null === kd || void 0 === kd || kd.removeEventListener("scroll", Zd)
          },
          Zd = () => {
            HJ() || Wd()
          },
          gd = setInterval((() => {
            const dd = performance.now();
            dd - pd > 1500 ? Wd() : HJ() ? Nd = null : null === Nd ? Nd = dd : dd - Nd >= 150 && (Wd(), function(dd) {
              var Jd;
              const kd = dd.closest(".SettingsMenuRight"),
                pd = null === (Jd = dd.closest(".HudLayoutSettings")) || void 0 === Jd ? void 0 : Jd.querySelector(".HudLayoutPreviewBox");
              if (!kd || !pd) return;
              const Nd = pd.getBoundingClientRect().bottom + 8,
                Wd = kd.getBoundingClientRect().bottom - 8,
                Pd = dd.getBoundingClientRect();
              Pd.top < Nd ? kd.scrollBy({
                top: Pd.top - Nd,
                behavior: "smooth"
              }) : Pd.bottom > Wd && kd.scrollBy({
                top: Math.min(Pd.bottom - Wd, Pd.top - Nd),
                behavior: "smooth"
              })
            }(Jd))
          }), 50);
        return null === kd || void 0 === kd || kd.addEventListener("scroll", Zd, {
          passive: !0
        }), Wd
      }), [Pd, qd]), (0, xd.jsx)("div", {
        ref: vd,
        className: "SettingBoxGroup HudElementList",
        children: fd.filter((dd => kd.has(dd.id) && (Id || !(0, Yd.R)(dd.id)))).map((kd => {
          const pd = ((dd, Jd) => {
              var kd;
              return null !== (kd = dd[Jd]) && void 0 !== kd ? kd : Yd.p
            })(Wd, kd.id),
            Nd = (0, Yd.v)(Wd, kd.id),
            vd = kd.id === Pd,
            qd = kd.scale && !Ld,
            Bd = od(kd.id, vd);
          return (0, xd.jsxs)("div", {
            "data-hud-row": kd.id,
            className: gd()("SettingBox HudElementRow", {
              Open: vd,
              Hidden: Nd,
              Child: void 0 !== kd.parent
            }),
            children: [(0, xd.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, xd.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": qd ? vd : void 0,
                onClick: () => {
                  Zd(kd.id)
                },
                children: [yd(kd.id, ld, Jd, Qd), kd.scale && 1 !== pd[2] && !(vd && qd) && (0, xd.jsx)("span", {
                  className: "HudElementRowSize",
                  children: Rk(pd[2])
                }), qd && (0, xd.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, xd.jsx)(hd, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: kd.id,
                actionButtons: ld,
                keyNames: Qd,
                locked: Od.has(kd.id),
                lockable: ed(kd.id),
                onLocked: Rd
              }), "menu" === kd.id && (0, xd.jsx)(rd, {
                className: "HudElementRowIcon",
                open: Id,
                name: yd(kd.id, ld, Jd, Qd),
                onToggle: Gd
              }), "menu" !== kd.id && (0, xd.jsx)(Ed, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: kd.id,
                elements: Wd,
                actionButtons: ld,
                keyNames: Qd,
                onHidden: Cd
              }), (0, xd.jsx)(cd, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: Od.has(kd.id),
                id: kd.id,
                elements: Wd,
                actionButtons: ld,
                keyNames: Qd,
                onReset: Kd
              })]
            }), vd && qd && (0, xd.jsx)(Ik, {
              info: kd,
              tuple: pd,
              props: dd
            }), Bd && (0, xd.jsx)("div", {
              className: "HudElementNote",
              children: Bd
            })]
          }, kd.id)
        }))
      })
    }

    function vk(dd) {
      let {
        preview: Jd,
        quick: kd,
        onFullScreen: Wd,
        resting: Pd,
        onSidePanel: Zd
      } = dd;
      const {
        t: gd
      } = (0, pd.B)(), Kd = lk(), od = (0, Nd.useRef)(null), {
        width: ld
      } = (0, JJ.c)(od), Qd = Math.floor(Kd.width * Math.min(1, Jd.maxHeight / Kd.height)), Ld = ld - Qd - 12, Od = Ld >= 130, ed = ld > 0;
      (0, Nd.useEffect)((() => {
        ed && Zd(Od)
      }), [ed, Od, Zd]);
      const Rd = (0, kJ.v)(Od ? Qd : ld, Kd.width, Kd.height, Jd.maxHeight),
        Id = Pd ? (0, xd.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: Kd.height * Rd
          }
        }) : (0, xd.jsx)(Qk, {
          ...Jd
        }),
        Gd = dd => (0, xd.jsxs)(Cd.G, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: gd("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: Wd,
          children: [(0, xd.jsx)(Md.e, {
            name: "expand"
          }), dd && (0, xd.jsx)("span", {
            children: gd("hudLayout:fullScreen")
          })]
        });
      return (0, xd.jsxs)("div", {
        ref: od,
        className: "SettingBox HudLayoutPreviewBox",
        children: [ld > 0 && Od && (0, xd.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, xd.jsx)("div", {
            style: {
              width: Qd
            },
            children: Id
          }), (0, xd.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, xd.jsx)(iJ, {
              selected: Jd.selected,
              ...kd,
              joystickFixed: Jd.joystickFixed,
              extra: Gd(!Jd.selected || Ld >= 278)
            })
          })]
        }), ld > 0 && !Od && (0, xd.jsxs)(xd.Fragment, {
          children: [Id, (0, xd.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: Gd(!1)
          })]
        })]
      })
    }
    var xk = kd(2398),
      qk = kd(4249),
      Bk = kd(2378),
      sk = kd(2354);
    const ik = dd => {
      const Jd = NJ.l * ("sides" === dd ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(Jd / 2))
    };

    function ak(dd, Jd, kd) {
      const [pd, Nd, Wd, Pd] = dd;
      return "sides" === Jd ? [pd, kd, Wd, kd] : [kd, Nd, kd, Pd]
    }
    const Mk = [null, null, null, null],
      Fk = dd => `${dd}px`;

    function Yk(dd) {
      let {
        safe: Jd,
        onPreview: kd,
        onCommit: Wd
      } = dd;
      const {
        t: Pd
      } = (0, pd.B)(), Zd = (0, NJ.r)(null !== Jd && void 0 !== Jd ? Jd : Mk, window.innerWidth, window.innerHeight, DJ(document).map(Math.round)), gd = (0, Nd.useRef)(null !== Jd && void 0 !== Jd ? Jd : Mk);
      gd.current = null !== Jd && void 0 !== Jd ? Jd : Mk;
      const Kd = dd => {
        const Jd = Math.min(ik(dd), "sides" === dd ? Math.max(Zd[1], Zd[3]) : Math.max(Zd[0], Zd[2]));
        return (0, xd.jsx)(Qd.h, {
          name: Pd("sides" === dd ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: ik(dd),
          step: 2,
          initValue: Jd,
          format: Fk,
          onChange: Jd => {
            kd(ak(gd.current, dd, Jd))
          },
          onChangeComplete: pd => {
            if (pd === Jd) return void kd(gd.current);
            const Nd = ak(gd.current, dd, pd);
            gd.current = Nd, Wd(Nd), (0, sd.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: dd
            })
          }
        })
      };
      return (0, xd.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, xd.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, xd.jsx)("div", {
            children: Pd("hudLayout:safeZone")
          }), (0, xd.jsx)(Cd.G, {
            active: null === Jd,
            pressed: null === Jd,
            onClick: () => {
              Wd(null)
            },
            children: Pd("hudLayout:safeZoneAuto")
          })]
        }), Kd("sides"), Kd("ends")]
      })
    }

    function mk() {
      var dd, Jd;
      const {
        t: kd
      } = (0, pd.B)(), Wd = (0, Yd.fb)(), {
        clientEscMenuOptions: Pd
      } = (0, Kd.j)(["clientEscMenuOptions"]), Zd = (0, xk.f)(), gd = Wd.hudLayouts[Zd], [od, ld] = (0, Nd.useState)(null), {
        rowIconsOpen: Ld,
        onRowIconsOpen: Od,
        select: ed
      } = function(dd, Jd) {
        const [kd, pd] = (0, Nd.useState)((() => Yd.F.some((Jd => void 0 !== dd.hudElements[Jd] || dd.hudLocked.includes(Jd))))), Wd = (0, Nd.useCallback)((dd => {
          Jd(dd), (0, Yd.R)(dd) && pd(!0)
        }), [Jd]);
        return {
          rowIconsOpen: kd,
          onRowIconsOpen: pd,
          select: Wd
        }
      }(gd, ld), [Rd, Id] = (0, Nd.useState)([]), [Gd, vd] = (0, Nd.useState)(null), [qd, Bd] = BJ(), Md = (0, Nd.useCallback)(((dd, Jd, kd) => {
        Id(Jd), Bd(kd);
        const pd = Object.keys(dd);
        vd((dd => (null === dd || void 0 === dd ? void 0 : dd.size) === pd.length && pd.every((Jd => dd.has(Jd))) ? dd : new Set(pd)))
      }), [Bd]), {
        gameState: Fd
      } = (0, Kd.j)(["gameState"]), md = (0, Bk.k)(), bd = null !== (dd = null === (Jd = (0, sk.s)()) || void 0 === Jd ? void 0 : Jd.icon) && void 0 !== dd ? dd : null, [Sd] = (0, Nd.useState)((() => "inGame" === Fd ? function(dd, Jd, kd) {
        const pd = dd.querySelector(".InGameUi .TouchComponentsButtons");
        if (!pd) return ZJ;
        const Nd = {},
          Wd = {};
        for (const Kd of PJ) {
          const dd = pd.querySelector(`.TouchSlot${Kd} > .TouchKey`);
          if (dd) {
            var Pd, Zd;
            Nd[Kd] = dd.cloneNode(!0);
            const Jd = (null !== (Pd = null === (Zd = dd.querySelector(".TouchKeyLabel")) || void 0 === Zd ? void 0 : Zd.textContent) && void 0 !== Pd ? Pd : "").split(/\s+/).filter((dd => !/[\d\xd7]/.test(dd))).join(" ");
            Jd && (Wd[Kd] = Jd)
          }
        }
        const gd = Jd => {
            const kd = dd.querySelector(`.InGameUi ${Jd}`);
            return null !== kd && !kd.classList.contains("Hidden")
          },
          Cd = [...dd.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((dd => dd.cloneNode(!0)));
        return {
          faces: Object.keys(Nd).length > 0 ? Nd : null,
          names: Wd,
          shop: gd(".TouchInventoryKey.ShopKey"),
          bag: gd(".TouchInventoryKey.BagKey"),
          items: Cd.length > 0 ? Cd : null,
          rowIcons: Jd,
          pinnedIcon: kd
        }
      }(document, md, bd) : ZJ)), jd = (0, Nd.useRef)(null), Xd = (0, Nd.useRef)(null), Ud = function(dd) {
        const [Jd, kd] = (0, Nd.useState)((() => .4 * window.innerHeight));
        return (0, Nd.useLayoutEffect)((() => {
          var Jd;
          const pd = null === (Jd = dd.current) || void 0 === Jd ? void 0 : Jd.closest(".SettingsMenuRight");
          if (!pd) return;
          const Nd = () => {
            const dd = pd.clientHeight < bk ? .4 : .5;
            kd(Math.max(80, pd.clientHeight * dd - 24))
          };
          Nd();
          const Wd = new ResizeObserver(Nd);
          return Wd.observe(pd), () => {
            Wd.disconnect()
          }
        }), [dd]), Jd
      }(Xd), yd = (0, qk.p)(Pd.joystickMode), Td = Pd.touchActionButtons, Ed = (0, Nd.useMemo)((() => function(dd, Jd) {
        const kd = {},
          pd = [
            ["extra", "X"],
            ["game", "G"]
          ];
        Jd || pd.push(["attack", "P"]);
        for (const [Nd, Wd] of pd) {
          const Jd = dd.names[Wd];
          Jd && (kd[Nd] = Jd)
        }
        return kd
      }(Sd, Td)), [Sd, Td]);
      (0, Nd.useEffect)((() => {
        (0, sd.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [cd, hd] = (0, Nd.useState)(!1), [rd, ud] = (0, Nd.useState)(!1), td = (0, Nd.useRef)(null);
      Lk(td, !rd);
      const [Vd, wd] = (0, Nd.useState)(!1), Ad = (0, Nd.useCallback)((() => {
        wd(!1)
      }), []), dJ = (0, Nd.useMemo)((() => new Set(gd.hudLocked)), [gd.hudLocked]), JJ = dd => {
        var Jd, kd;
        const pd = (0, Yd.r)(),
          Nd = dd(pd);
        (0, Yd.ab)(null !== (Jd = null === (kd = jd.current) || void 0 === kd ? void 0 : kd.keepLocks(pd, Nd)) && void 0 !== Jd ? Jd : Nd)
      }, kJ = (dd, Jd) => {
        JJ((kd => (0, Yd.gb)(kd, Zd, dd, Jd)))
      }, NJ = (dd, Jd, kd) => {
        kJ(dd, {
          dx: Jd,
          dy: kd
        }), (0, sd.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${dd}`
        })
      }, WJ = (dd, Jd) => {
        JJ((kd => (0, Yd.hb)(kd, Zd, dd, Jd)))
      }, gJ = dd => {
        const Jd = nd[dd];
        return (Jd.move || Jd.scale) && ("joystick" !== dd || yd) && !(0, pJ.v)(dd, gd.hudElements[dd])
      }, CJ = dd => nd[dd].move && ("joystick" !== dd || yd) && !dJ.has(dd), KJ = new Set(fd.map((dd => dd.id)).filter((dd => {
        const Jd = (0, Yd.R)(dd) && !Sd.rowIcons.includes(dd);
        return null === Gd || Gd.has(dd) || (0, Yd.v)(gd.hudElements, dd) && !Jd
      }))), oJ = {
        present: KJ,
        actionButtons: Td,
        keyNames: Ed,
        scaleCaps: qd,
        sizeBesidePreview: cd,
        elements: gd.hudElements,
        selected: od,
        onSelect: ed,
        rowIconsOpen: Ld,
        onRowIconsOpen: Od,
        onScalePreview: (dd, Jd) => {
          var kd;
          null === (kd = jd.current) || void 0 === kd || kd.setScale(dd, Jd)
        },
        onScale: (dd, Jd) => {
          kJ(dd, {
            scale: Jd
          }), (0, sd.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${dd}`
          })
        },
        onHidden: (dd, Jd) => {
          kJ(dd, {
            hidden: Jd
          }), (0, sd.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${Jd?"hide":"show"}:${dd}`
          })
        },
        onReset: dd => {
          kJ(dd, Yd.c)
        },
        locked: dJ,
        lockable: gJ,
        onLocked: WJ,
        note: (dd, Jd) => {
          const pd = Jd && Rd.length > 0 ? kd("hudLayout:overlapsNote", {
            names: Dd(Rd, Td, kd, Ed)
          }) : null;
          return Jd && zd(dd, yd) ? (0, xd.jsxs)(xd.Fragment, {
            children: [pd && (0, xd.jsx)("span", {
              children: pd
            }), (0, xd.jsx)("span", {
              children: kd("hudLayout:floatingJoystickNote")
            }), !cd && (0, xd.jsx)(Hd, {})]
          }) : pd || (Jd && dJ.has(dd) ? kd("hudLayout:lockedNote") : Jd && "cluster" === dd ? kd("hudLayout:clusterNote") : Jd && "menu" === dd ? kd("hudLayout:menuNote") : Jd && (0, pJ.v)(dd, gd.hudElements[dd]) && CJ(dd) ? kd("hudLayout:rowIconNote") : Jd && "arrows" === dd ? kd("hudLayout:arrowsNote") : "inventory" === dd && (0, Yd.v)(gd.hudElements, "inventory") ? kd("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, xd.jsxs)("div", {
        ref: Xd,
        className: "HudLayoutSettings",
        children: [(0, xd.jsxs)("div", {
          ref: td,
          className: "HudLayoutBody",
          children: [(0, xd.jsx)("div", {
            className: "HudLayoutOrientation",
            children: kd("landscape" === Zd ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, xd.jsx)(vk, {
            preview: {
              layout: Wd,
              orientation: Zd,
              selected: od,
              onSelect: ed,
              onMove: NJ,
              canMove: CJ,
              actionButtons: Td,
              joystickFixed: yd,
              presence: Sd,
              keyNames: Ed,
              maxHeight: Ud,
              apiRef: jd,
              onMeasured: Md,
              onReady: ud,
              lockable: gJ
            },
            quick: {
              layout: gd,
              actionButtons: Td,
              keyNames: Ed,
              scaleCaps: qd,
              overlaps: Rd,
              onScale: oJ.onScale,
              onHidden: oJ.onHidden,
              onReset: oJ.onReset,
              locked: dJ,
              lockable: gJ,
              onLocked: WJ
            },
            onFullScreen: () => {
              wd(!0)
            },
            resting: Vd,
            onSidePanel: hd
          }), Vd && (0, xd.jsx)(ek, {
            layout: Wd,
            orientation: Zd,
            selected: od,
            onSelect: ed,
            onMove: NJ,
            canMove: CJ,
            actionButtons: Td,
            joystickFixed: yd,
            presence: Sd,
            keyNames: Ed,
            onScale: oJ.onScale,
            onHidden: oJ.onHidden,
            onReset: oJ.onReset,
            locked: dJ,
            lockable: gJ,
            onLocked: WJ,
            apiRef: jd,
            onClose: Ad
          }), (0, xd.jsx)(Yk, {
            safe: gd.hudSafe,
            onCommit: dd => {
              JJ((Jd => (0, Yd.jb)(Jd, Zd, dd)))
            },
            onPreview: dd => {
              var Jd;
              null === (Jd = jd.current) || void 0 === Jd || Jd.setSafe(dd)
            }
          }), (0, xd.jsx)(Qd.d, {
            label: kd("hudLayout:snapCentre"),
            checked: Wd.hudSnapCentre,
            onClick: dd => {
              (0, Yd.$)(dd)
            },
            circleInfoText: kd("hudLayout:snapCentreInfo")
          }), (0, xd.jsx)(Gk, {
            ...oJ
          }), (0, xd.jsx)(Qd.g, {
            label: kd("hudLayout:shape"),
            options: Yd.J.map((dd => ({
              value: dd,
              label: kd(`hudLayout:shape_${dd}`)
            }))),
            value: Wd.hudShape,
            onChange: dd => {
              JJ((Jd => ({
                ...Jd,
                hudShape: dd
              }))), (0, sd.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: dd
              })
            }
          }), (0, xd.jsx)(Qd.h, {
            name: kd("hudLayout:opacity"),
            min: Yd.g,
            max: 1,
            step: .05,
            initValue: Wd.hudKeyOpacity,
            format: dd => `${Math.round(100*dd)}%`,
            circleInfoText: kd("hudLayout:opacityInfo"),
            onChange: dd => {
              var Jd;
              null === (Jd = jd.current) || void 0 === Jd || Jd.setOpacity(dd)
            },
            onChangeComplete: dd => {
              (0, Yd.Z)(dd), (0, sd.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, xd.jsx)(Cd.B, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const dd = ad.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await dd.getResult() && (0, Yd.V)()
            }()
          },
          children: kd("hudLayout:resetAll")
        })]
      })
    }
    const bk = 350;
    const Sk = [function() {
      const {
        t: dd
      } = (0, pd.B)(), [Jd, kd] = (0, Nd.useState)(!1), Wd = (0, Nd.useRef)(null);
      return (0, Nd.useEffect)((() => {
        var dd;
        Jd && (null === (dd = Wd.current) || void 0 === dd || dd.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [Jd]), (0, xd.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, xd.jsxs)("button", {
          ref: Wd,
          type: "button",
          className: "SettingBox SettingBoxFeatured HudLayoutEntry",
          "aria-expanded": Jd,
          onClick: () => {
            kd(!Jd)
          },
          children: [(0, xd.jsx)(Md.e, {
            name: "arrows-up-down-left-right",
            className: "HudLayoutEntryIcon"
          }), (0, xd.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, xd.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: dd("hudLayout:title")
            }), (0, xd.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: dd("hudLayout:entrySub")
            })]
          }), (0, xd.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), Jd && (0, xd.jsx)(mk, {})]
      })
    }, function() {
      const {
        t: dd
      } = (0, pd.B)(), {
        joystickMode: Jd,
        touchSpeedCurve: kd,
        autorun: Nd,
        jumpLock: Wd
      } = (0, Kd.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, xd.jsxs)(xd.Fragment, {
        children: [(0, xd.jsx)(Qd.g, {
          label: dd("settingsMenu:joystick"),
          options: vd.ub.map((Jd => ({
            value: Jd,
            label: dd(qd[Jd])
          }))),
          value: Jd,
          onChange: dd => {
            Kd.d.setClientEscMenuOptions({
              joystickMode: dd
            })
          },
          circleInfoText: dd("settingsMenu:joystickInfo")
        }), (0, xd.jsx)(Qd.d, {
          label: dd("settingsMenu:preciseWalking"),
          checked: kd,
          onClick: dd => {
            Kd.d.setClientEscMenuOptions({
              touchSpeedCurve: dd
            })
          },
          circleInfoText: dd("settingsMenu:preciseWalkingInfo")
        }), (0, xd.jsx)(Qd.d, {
          label: dd("settingsMenu:autoRun"),
          checked: Nd,
          onClick: dd => {
            Kd.d.setClientEscMenuOptions({
              autorun: dd
            })
          },
          circleInfoText: dd("settingsMenu:autoRunInfo")
        }), (0, xd.jsx)(Qd.d, {
          label: dd("settingsMenu:jumpLock"),
          checked: Wd,
          onClick: dd => {
            Kd.d.setClientEscMenuOptions({
              jumpLock: dd
            })
          },
          circleInfoText: dd("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, xd.jsx)(Gd.c, {})
    }, function() {
      const {
        t: dd
      } = (0, pd.B)(), {
        clientEscMenuOptions: Jd
      } = (0, Kd.j)(["clientEscMenuOptions"]);
      return (0, Bd.c)() ? (0, xd.jsx)(Qd.d, {
        label: dd("settingsMenu:vibration"),
        checked: Jd.vibration,
        onClick: dd => {
          Kd.d.setClientEscMenuOptions({
            vibration: dd
          })
        },
        circleInfoText: dd("settingsMenu:vibrationInfo")
      }) : null
    }];

    function jk() {
      return (0, xd.jsx)(xd.Fragment, {
        children: Sk.map(((dd, Jd) => (0, xd.jsx)(dd, {}, Jd)))
      })
    }
    var Xk = kd(4212);

    function fk() {
      const {
        t: dd
      } = (0, pd.B)(), {
        isTouchScreen: Jd,
        clientEscMenuOptions: kd,
        gameState: Pd
      } = (0, Kd.j)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), Zd = (0, Ld.j)("ezBridging"), gd = (0, Ld.j)("ezTowering"), ed = "inGame" !== Pd || !0 === Zd, Rd = (0, Od.d)() && ("inGame" !== Pd || !0 === gd), [, Gd] = (0, Nd.useReducer)((dd => dd + 1), 0), vd = (0, Id.h)(), [qd, Bd] = (0, Nd.useState)(Xk.g);
      return (0, xd.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [vd && (0, xd.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, xd.jsx)("div", {
            children: dd("controller:settingsControlsNote")
          }), (0, xd.jsx)(Cd.G, {
            onClick: () => {
              Kd.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: dd("controller:settingsOpenController")
          })]
        }), (0, od.isTouchscreen)() && !(0, od.isMobile)() ? (0, xd.jsx)(xd.Fragment, {
          children: (0, xd.jsx)(Qd.d, {
            label: dd("settingsMenu:useTouchControls"),
            checked: qd,
            onClick: dd => {
              (0, Xk.d)(dd), Bd(dd)
            }
          })
        }) : null, Jd && (0, xd.jsx)(jk, {}), ed && (0, xd.jsx)(Qd.d, {
          label: dd("settingsMenu:ezBridging"),
          checked: kd.ezBridging,
          onClick: dd => {
            Kd.d.setClientEscMenuOptions({
              ezBridging: dd
            })
          },
          circleInfoText: dd("settingsMenu:ezBridgingInfo")
        }), Rd && (0, xd.jsx)(Qd.d, {
          label: dd("settingsMenu:ezTowering"),
          checked: kd.ezTowering,
          onClick: dd => {
            Kd.d.setClientEscMenuOptions({
              ezTowering: dd
            })
          },
          circleInfoText: dd("settingsMenu:ezToweringInfo")
        }), (0, xd.jsx)(Qd.d, {
          label: dd("settingsMenu:crouchToggle"),
          checked: kd.crouchIsToggle,
          onClick: dd => {
            Kd.d.setClientEscMenuOptions({
              crouchIsToggle: dd
            })
          },
          circleInfoText: dd("settingsMenu:crouchToggleInfo")
        }), (0, xd.jsx)(Qd.d, {
          label: dd("settingsMenu:hideUiToggle"),
          checked: kd.hideUiIsToggle,
          onClick: dd => {
            Kd.d.setClientEscMenuOptions({
              hideUiIsToggle: dd
            })
          },
          circleInfoText: dd("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, ld.e)() && (0, xd.jsx)(Qd.h, {
          name: dd("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: kd.touchscreenSensitivity,
          onChange: dd => {
            Kd.d.setClientEscMenuOptions({
              touchscreenSensitivity: dd
            })
          }
        }), !(0, od.isMobile)() && (0, xd.jsx)(Qd.h, {
          name: dd("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: kd.mouseSensitivity,
          onChange: dd => {
            Kd.d.setClientEscMenuOptions({
              mouseSensitivity: dd
            })
          }
        }), !(0, od.isMobile)() && (0, xd.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, xd.jsx)("div", {
            className: "SliderText",
            children: dd("settingsMenu:keyBindings")
          }), Wd.i.map((Jd => (0, xd.jsx)(nk, {
            title: dd(Jd.name.translationKey, Jd.name.params),
            defaultOpen: Wd.m.has(Jd.id),
            children: Jd.actions.map((dd => (0, xd.jsx)(Uk, {
              noaAction: dd,
              forceUpdate: Gd,
              clashesWith: Jd.clashesWith,
              showPadGlyph: vd
            }, dd)))
          }, Jd.name.translationKey))), (0, xd.jsx)(Cd.B, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, Wd.H)(), Gd()
            },
            children: dd("controls:resetBindings")
          })]
        })]
      })
    }

    function nk(dd) {
      let {
        title: Jd,
        defaultOpen: kd,
        children: pd
      } = dd;
      const [Wd, Pd] = (0, Nd.useState)(kd);
      return (0, xd.jsxs)("div", {
        className: gd()("ControlsSection", {
          Collapsed: !Wd
        }),
        children: [(0, xd.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            Pd(!Wd)
          },
          children: [(0, xd.jsx)("div", {
            className: "ControlsSectionTitle",
            children: Jd
          }), (0, xd.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), Wd && (0, xd.jsx)("div", {
          className: "ControlsSectionRows",
          children: pd
        })]
      })
    }

    function Uk(dd) {
      let {
        noaAction: Jd,
        forceUpdate: kd,
        clashesWith: Zd,
        showPadGlyph: Kd
      } = dd;
      const {
        t: od
      } = (0, pd.B)(), ld = (0, Rd.c)(Jd), [Qd, Ld] = (0, Nd.useState)(!1), [Od, Id] = (0, Nd.useState)("controls:clickToEnterNewBinding"), [Gd, vd] = (0, Nd.useState)(null), [qd, Bd] = (0, Nd.useState)(null), sd = (0, Nd.useRef)(null);
      (0, Nd.useEffect)((() => {
        Qd && sd.current && sd.current.focus()
      }), [Qd]);
      const ad = Wd.x[Jd].filter((dd => Pd.g[dd]));
      let Md = null;
      const Fd = [],
        Yd = Zd.flatMap((dd => {
          var Jd, kd;
          return null !== (Jd = null === (kd = Wd.i.find((Jd => Jd.id === dd))) || void 0 === kd ? void 0 : kd.actions) && void 0 !== Jd ? Jd : []
        }));
      for (const pd of Yd) {
        if (pd === Jd) continue;
        const dd = Wd.x[pd];
        for (const Jd of dd) ad.includes(Jd) && Fd.push(od(Wd.y[pd].translationKey, Wd.y[pd].params))
      }
      Fd.length > 0 && (Md = od("controls:sharedBindingsWarning") + " ", Md += Fd.join(", "));
      const md = () => {
          Ld(!1), vd(null), Id("controls:clickToEnterNewBinding"), Bd(null)
        },
        bd = () => "BindingInput_" + Jd;
      return (0, xd.jsxs)("div", {
        className: gd()("ControlRow", {
          WarningBorder: null !== Md
        }),
        children: [(0, xd.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, xd.jsxs)("div", {
            className: "ControlName",
            children: [od(Wd.y[Jd].translationKey, Wd.y[Jd].params), Kd && ld && (0, xd.jsx)(ed.c, {
              glyph: ld,
              className: "ControlPadGlyph"
            })]
          }), (0, xd.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, xd.jsxs)("div", {
              className: "ControlBindingsList",
              children: [ad.map((dd => (0, xd.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, xd.jsx)("div", {
                  children: (0, Wd.s)(dd)
                }), (0, xd.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const pd = (0, Wd.z)(Jd, dd);
                    pd.isError() ? Bd(pd.asError().message) : Bd(null), kd()
                  },
                  children: "\xd7"
                })]
              }, dd))), !Qd && (0, xd.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  Ld(!0), Bd(null)
                },
                children: (0, xd.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), Qd && (0, xd.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, xd.jsxs)("div", {
                className: "InputContainer",
                children: [(0, xd.jsx)("div", {
                  className: "InputOverlay",
                  children: Gd ? (0, Wd.s)(Gd) : (0, xd.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: od(Od)
                  })
                }), (0, xd.jsx)("input", {
                  ref: sd,
                  id: bd(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: dd => {
                    if ("Escape" === dd.code) return md(), dd.preventDefault(), void dd.stopPropagation();
                    const Jd = dd.code;
                    Pd.b.includes(Jd) ? (Bd(null), vd(Jd)) : (Bd("controls:keyIsReserved"), vd(null)), dd.preventDefault(), dd.stopPropagation()
                  },
                  onMouseDown: dd => {
                    const Jd = "Mouse" + (dd.button + 1);
                    document.activeElement && document.activeElement.id === bd() ? Pd.b.includes(Jd) ? (Bd(null), vd(Jd)) : (Bd("controls:keyIsReserved"), vd(null)) : Id("controls:enterNewBinding"), dd.stopPropagation()
                  },
                  onBlur: () => {
                    Id("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, xd.jsx)(Cd.d, {
                onPointerDown: dd => {
                  dd.preventDefault()
                },
                onClick: () => {
                  (0, Wd.e)(Jd, Gd), kd(), md()
                },
                className: "ControlBindingAddButton",
                disabled: null === Gd,
                children: od("general:add")
              }), (0, xd.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  md()
                },
                children: "\xd7"
              })]
            }), qd && (0, xd.jsx)("div", {
              className: "ControlBindingError",
              children: od(qd)
            })]
          })]
        }), Md && (0, xd.jsx)("div", {
          className: "ControlRowWarning",
          children: Md
        })]
      })
    }
  },
  8572: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Rd,
      g: () => ed,
      j: () => Kd,
      m: () => Id,
      n: () => Gd,
      p: () => ld
    });
    var pd = kd(1699),
      Nd = kd(1756);
    const Wd = dd => dd >= 56320 && dd <= 57343,
      Pd = dd => dd >= 55296 && dd <= 56319,
      Zd = (dd, Jd) => Jd >= 2 && Wd(dd.charCodeAt(Jd - 1)) && Pd(dd.charCodeAt(Jd - 2)) ? Jd - 2 : Math.max(0, Jd - 1),
      gd = (dd, Jd) => {
        let kd;
        var pd, Nd;
        return kd = dd.start !== dd.end ? Jd < 0 ? dd.start : dd.end : Jd < 0 ? Zd(dd.value, dd.start) : (pd = dd.value, (Nd = dd.start) + 1 < pd.length && Pd(pd.charCodeAt(Nd)) && Wd(pd.charCodeAt(Nd + 1)) ? Nd + 2 : Math.min(pd.length, Nd + 1)), {
          value: dd.value,
          start: kd,
          end: kd
        }
      },
      Cd = ["text", "search", "url", "email", "tel", "password", "number"],
      Kd = dd => !(!(0, Nd.e)(dd) || dd.isContentEditable || dd.hasAttribute("data-pad-no-osk")) && (dd instanceof HTMLTextAreaElement || dd instanceof HTMLInputElement && Cd.includes(dd.type)),
      od = dd => null !== dd.selectionStart,
      ld = dd => {
        var Jd, kd;
        const {
          value: pd
        } = dd;
        return {
          value: pd,
          start: null !== (Jd = dd.selectionStart) && void 0 !== Jd ? Jd : pd.length,
          end: null !== (kd = dd.selectionEnd) && void 0 !== kd ? kd : pd.length
        }
      },
      Qd = (dd, Jd, kd) => {
        if (dd.readOnly) return;
        const Nd = dd instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Nd, "value").set.call(dd, Jd.value), od(dd) && dd.setSelectionRange(Jd.start, Jd.end), (0, pd.f)(dd, new InputEvent("input", {
          bubbles: !0,
          inputType: kd
        }))
      };
    let Ld = !1;
    const Od = (dd, Jd) => !!document.execCommand(dd, !1, Jd) || (Ld || (Ld = !0, console.warn(`execCommand("${dd}") failed; the on-screen keyboard is setting the value directly`)), !1),
      ed = (dd, Jd) => {
        Od("insertText", Jd) || Qd(dd, function(dd, Jd) {
          let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const pd = dd.value.slice(0, dd.start),
            Nd = dd.value.slice(dd.end);
          let Wd = kd < 0 ? Jd.length : Math.max(0, kd - pd.length - Nd.length);
          Wd > 0 && Wd < Jd.length && Pd(Jd.charCodeAt(Wd - 1)) && Wd--;
          const Zd = Jd.slice(0, Wd),
            gd = pd.length + Zd.length;
          return {
            value: pd + Zd + Nd,
            start: gd,
            end: gd
          }
        }(ld(dd), Jd, dd.maxLength), "insertText")
      },
      Rd = dd => {
        Od("delete") || Qd(dd, (dd => {
          const Jd = dd.start === dd.end ? Zd(dd.value, dd.start) : dd.start;
          return {
            value: dd.value.slice(0, Jd) + dd.value.slice(dd.end),
            start: Jd,
            end: Jd
          }
        })(ld(dd)), "deleteContentBackward")
      },
      Id = (dd, Jd) => {
        if (!od(dd)) return;
        const kd = gd(ld(dd), Jd);
        dd.setSelectionRange(kd.start, kd.end)
      },
      Gd = dd => {
        od(dd) && 0 === dd.selectionStart && 0 === dd.selectionEnd && dd.setSelectionRange(dd.value.length, dd.value.length)
      }
  },
  8754: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd
    });
    var pd = kd(22),
      Nd = kd(3269),
      Wd = kd(1371),
      Pd = kd(1404);
    const Zd = async () => {
      if ((0, Pd.d)()) {
        if (!0 !== await Wd.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== pd.d.get("gameState")) return
      }(0, Nd.b)()
    }
  },
  8762: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => gd,
      f: () => Wd,
      h: () => Pd,
      i: () => Nd,
      l: () => Zd
    });
    var pd = kd(1958);
    const Nd = "controllerPadShopOpen",
      Wd = dd => pd.h.includes(dd),
      Pd = dd => Object.values(dd).some((dd => !1 !== dd.canBuy && !dd.isRewardedAd)),
      Zd = (dd, Jd, kd) => {
        var pd, Nd, Pd, Zd;
        const gd = dd.filter((dd => !Wd(dd))),
          Cd = null !== Jd && dd.includes(Jd) ? Jd : null;
        return null !== Cd && !Wd(Cd) && kd(Cd) ? Cd : null !== (pd = null !== (Nd = null !== (Pd = null !== (Zd = gd.find(kd)) && void 0 !== Zd ? Zd : gd[0]) && void 0 !== Pd ? Pd : Cd) && void 0 !== Nd ? Nd : dd[0]) && void 0 !== pd ? pd : null
      },
      gd = dd => dd.userInput || dd.isRewardedAd || "boolean" === typeof dd.isSelected ? null : JSON.stringify([dd.image, dd.cost, dd.currency, dd.amount, dd.customTitle, dd.buyButtonText, dd.description, dd.canBuy])
  },
  8796: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd,
      h: () => Kd
    });
    var pd = kd(56),
      Nd = kd(1459),
      Wd = kd(1994),
      Pd = kd(1417),
      Zd = kd(1444),
      gd = kd(1103);
    const Cd = () => {
        const dd = (0, Pd.u)();
        if ((0, pd.useEffect)((() => {
            (0, Pd.n)()
          }), []), !dd) return null;
        const {
          ControllerCategory: Jd
        } = dd;
        return (0, gd.jsx)(Zd.b, {
          children: (0, gd.jsx)(Jd, {})
        })
      },
      Kd = () => {
        var dd;
        const Jd = (0, Pd.u)(),
          [, kd] = (0, pd.useReducer)((dd => dd + 1), 0);
        return (0, Nd.h)(Wd.d, kd), null !== (dd = null === Jd || void 0 === Jd ? void 0 : Jd.hasActivePad()) && void 0 !== dd && dd
      }
  },
  8581: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd,
      g: () => Cd,
      h: () => Od,
      l: () => od,
      m: () => Ld,
      n: () => Wd,
      q: () => Qd,
      t: () => Pd,
      w: () => ld
    });
    const pd = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      Nd = (dd, Jd) => {
        if ("function" === typeof dd.checkVisibility) return !dd.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: Jd,
          checkOpacity: Jd
        });
        const {
          visibility: kd
        } = getComputedStyle(dd);
        if ("hidden" === kd || "collapse" === kd) return !0;
        if (!Jd) return !1;
        for (let pd = dd; pd; pd = pd.parentElement)
          if ("0" === getComputedStyle(pd).opacity) return !0;
        return !1
      },
      Wd = dd => {
        if (!dd.isConnected || Nd(dd, !0)) return !1;
        const Jd = dd.getBoundingClientRect();
        return Jd.width > 0 && Jd.height > 0
      },
      Pd = dd => !!dd.matches(":disabled, [aria-disabled='true']") || "button" === dd.getAttribute("role") && "-1" === dd.getAttribute("tabindex"),
      Zd = dd => {
        var Jd;
        if (dd.closest("[data-pad-ignore]")) return !0;
        return !!(null === (Jd = dd.parentElement) || void 0 === Jd ? void 0 : Jd.closest("[data-pad-focusable]"))
      },
      gd = dd => {
        const Jd = dd.querySelectorAll(pd);
        return dd.matches(pd) ? [dd, ...Jd] : Jd
      },
      Cd = dd => {
        const Jd = [];
        for (const kd of gd(dd)) !Zd(kd) && Wd(kd) && Jd.push(kd);
        return Jd
      },
      Kd = new WeakMap,
      od = dd => {
        const Jd = Kd.get(dd);
        if (Jd && ld(Jd, dd)) return !0;
        for (const kd of gd(dd))
          if (!Zd(kd) && Wd(kd)) return Kd.set(dd, kd), !0;
        return Kd.delete(dd), !1
      },
      ld = (dd, Jd) => Jd.contains(dd) && dd.matches(pd) && !Zd(dd) && Wd(dd),
      Qd = (dd, Jd) => ld(dd, Jd) && !Pd(dd),
      Ld = dd => {
        for (const Jd of dd.querySelectorAll("[data-pad-initial-area]"))
          if (!Nd(Jd, !1)) return !0;
        return !1
      },
      Od = dd => {
        const Jd = Jd => {
          let kd = 0;
          for (let pd = Jd.parentElement; pd && pd !== dd; pd = pd.parentElement) kd++;
          return kd
        };
        return [...dd.querySelectorAll("[data-pad-initial-area]")].filter(Wd).sort(((dd, kd) => Jd(kd) - Jd(dd)))
      }
  },
  8563: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => Bd,
      B: () => ed,
      D: () => gd,
      F: () => Kd,
      c: () => Rd,
      g: () => ad,
      h: () => xd,
      j: () => vd,
      k: () => Ld,
      o: () => Od,
      p: () => ld,
      q: () => Qd,
      r: () => sd,
      v: () => Cd,
      w: () => Md,
      y: () => qd
    });
    var pd = kd(29),
      Nd = kd(1699),
      Wd = kd(8565),
      Pd = kd(8572),
      Zd = kd(8581);
    const gd = dd => (0, Pd.j)(dd),
      Cd = dd => {
        const Jd = dd.getBoundingClientRect();
        return {
          x: Jd.left + Jd.width / 2,
          y: Jd.top + Jd.height / 2
        }
      },
      Kd = (dd, Jd, kd) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: dd.x,
        clientY: dd.y,
        screenX: dd.x,
        screenY: dd.y,
        button: Jd,
        buttons: kd,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      od = (dd, Jd) => {
        (0, Nd.f)(dd, Jd)
      },
      ld = function(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const pd = 0 === kd ? 1 : 2;
        od(dd, new PointerEvent("pointerdown", Kd(Jd, kd, pd))), od(dd, new MouseEvent("mousedown", Kd(Jd, kd, pd)))
      },
      Qd = function(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        od(dd, new PointerEvent("pointerup", Kd(Jd, kd, 0))), od(dd, new MouseEvent("mouseup", Kd(Jd, kd, 0)))
      },
      Ld = function(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        ld(dd, Jd, kd), Qd(dd, Jd, kd), od(dd, 0 === kd ? new MouseEvent("click", Kd(Jd, 0, 0)) : new MouseEvent("contextmenu", Kd(Jd, 2, 0)))
      },
      Od = function(dd, Jd, kd) {
        let {
          leaveBelow: pd = null,
          enterBelow: Nd = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (dd !== Jd) {
          if (null !== dd && void 0 !== dd && dd.isConnected) {
            const Nd = {
              ...Kd(kd, 0, 0),
              relatedTarget: Jd
            };
            od(dd, new PointerEvent("pointerout", Nd)), od(dd, new MouseEvent("mouseout", Nd));
            const Wd = dd => !!Jd && dd.contains(Jd) || !!pd && dd.contains(pd);
            for (let Jd = dd; Jd && !Wd(Jd); Jd = Jd.parentElement) od(Jd, new PointerEvent("pointerleave", {
              ...Nd,
              bubbles: !1
            })), od(Jd, new MouseEvent("mouseleave", {
              ...Nd,
              bubbles: !1
            }))
          }
          if (Jd) {
            const pd = {
              ...Kd(kd, 0, 0),
              relatedTarget: dd
            };
            od(Jd, new PointerEvent("pointerover", pd)), od(Jd, new MouseEvent("mouseover", pd));
            const Wd = [],
              Pd = Jd => !(null === dd || void 0 === dd || !dd.isConnected) && Jd.contains(dd) || !!Nd && Jd.contains(Nd);
            for (let dd = Jd; dd && !Pd(dd); dd = dd.parentElement) Wd.push(dd);
            for (const dd of Wd.reverse()) od(dd, new PointerEvent("pointerenter", {
              ...pd,
              bubbles: !1
            })), od(dd, new MouseEvent("mouseenter", {
              ...pd,
              bubbles: !1
            }));
            od(Jd, new PointerEvent("pointermove", Kd(kd, 0, 0))), od(Jd, new MouseEvent("mousemove", Kd(kd, 0, 0)))
          }
        } else Jd && (od(Jd, new PointerEvent("pointermove", Kd(kd, 0, 0))), od(Jd, new MouseEvent("mousemove", Kd(kd, 0, 0))))
      },
      ed = dd => {
        pd.j.nO(Wd.d, dd)
      },
      Rd = dd => {
        if (gd(dd)) return void ed(dd);
        const Jd = dd.hasAttribute("data-pad-focusable") ? dd.querySelector("a[href]") : null,
          kd = null !== Jd && void 0 !== Jd ? Jd : dd;
        Ld(kd, Cd(kd))
      },
      Id = ".Dropdown-root.is-open",
      Gd = dd => {
        const Jd = dd.querySelector(".Dropdown-control");
        return Rd(Jd), Jd
      },
      vd = dd => {
        var Jd;
        const kd = null !== (Jd = dd.closest(Id)) && void 0 !== Jd ? Jd : dd.querySelector(Id);
        return kd ? Gd(kd) : null
      },
      xd = dd => {
        for (const Jd of document.querySelectorAll(Id)) Jd.contains(dd) || Gd(Jd)
      },
      qd = dd => null !== dd.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      Bd = dd => {
        const Jd = dd ? document.elementFromPoint(dd.x, dd.y) : null;
        return !(null === Jd || void 0 === Jd || !Jd.closest("[data-pad-repeat]"))
      },
      sd = dd => {
        var Jd;
        return null !== (Jd = [...dd.querySelectorAll("[data-pad-back]")].find(Zd.n)) && void 0 !== Jd ? Jd : null
      },
      ad = dd => {
        const Jd = sd(dd);
        return !!Jd && (Rd(Jd), !0)
      },
      Md = dd => {
        var Jd, kd, pd, Nd;
        return null !== (Jd = null !== (kd = null !== (pd = dd.getAttribute("data-pad-key")) && void 0 !== pd ? pd : dd.getAttribute("href")) && void 0 !== kd ? kd : null === (Nd = dd.querySelector("a[href]")) || void 0 === Nd ? void 0 : Nd.getAttribute("href")) && void 0 !== Jd ? Jd : null
      }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);