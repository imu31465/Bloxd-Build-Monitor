export const id = 156;
export const ids = [156];
export const modules = {
  8817: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => wm
    });
    var hm = fm(23),
      Am = fm(1208),
      am = fm(4954),
      xm = fm(1135);

    function wm(mm) {
      let {
        note: Tm
      } = mm;
      const {
        t: fm
      } = (0, Am.A)(), {
        clientEscMenuOptions: wm
      } = (0, hm.m)(["clientEscMenuOptions"]);
      return (0, xm.jsx)(am.e, {
        label: fm("touchSettings:actionButtons"),
        checked: wm.touchActionButtons,
        onClick: mm => {
          hm.c.setClientEscMenuOptions({
            touchActionButtons: mm
          })
        },
        circleInfoText: fm("touchSettings:actionButtonsInfo"),
        note: Tm
      })
    }
  },
  8806: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => rf,
      c: () => Cf
    });
    var hm = fm(1208),
      Am = fm(59),
      am = fm(1957),
      xm = fm(1971),
      wm = fm(1080),
      Dm = fm.n(wm),
      im = fm(1454),
      Rm = fm(23),
      pm = fm(105),
      Em = fm(115),
      om = fm(4954),
      Om = fm(2391),
      Ym = fm(294),
      qm = fm(1980),
      jm = fm(1984),
      Vm = fm(8814),
      Im = fm(8817),
      Km = fm(339),
      Qm = fm(1135);
    const nm = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var Jm = fm(8824);
    var cm = fm(1476),
      zm = fm(1354),
      Zm = fm(8833),
      km = fm(1406),
      bm = fm(1089),
      Sm = fm(2436);
    const em = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(Sm.D.map((mm => [mm, "menu"])))
      },
      Nm = mm => Sm.y.filter((Tm => em[Tm] === mm)),
      Gm = new Set(Nm("cluster")),
      Xm = ["cluster"],
      Pm = [...Xm, ...Sm.y.filter((mm => !Xm.includes(mm) && !em[mm]))],
      Hm = Pm.flatMap((mm => [mm, ...Nm(mm)])).map((mm => ({
        id: mm,
        label: `hudLayout:${mm}`,
        ...Sm.v[mm],
        parent: em[mm]
      }))),
      ym = Object.fromEntries(Hm.map((mm => [mm.id, mm]))),
      Cm = "data-hud-el";

    function rm(mm, Tm, fm, hm) {
      const Am = fm(function(mm, Tm) {
          return "attack" !== mm || Tm ? ym[mm].label : "hudLayout:attackContext"
        }(mm, Tm)),
        am = hm[mm];
      return am ? fm("hudLayout:slotWithKey", {
        slot: Am,
        key: am
      }) : Am
    }

    function sm(mm, Tm, fm, hm) {
      return mm.map((mm => rm(mm, Tm, fm, hm))).join(", ")
    }

    function lm(mm) {
      let {
        className: Tm,
        keepPlace: fm
      } = mm;
      return fm ? (0, Qm.jsx)("div", {
        className: Dm()(Tm, "Placeholder")
      }) : null
    }

    function Mm(mm) {
      let {
        id: Tm,
        elements: fm,
        actionButtons: Am,
        keyNames: am,
        className: xm,
        keepPlace: wm,
        onHidden: Dm
      } = mm;
      const {
        t: Rm
      } = (0, hm.A)();
      if (!ym[Tm].hide) return (0, Qm.jsx)(lm, {
        className: xm,
        keepPlace: wm
      });
      const pm = (0, Sm.u)(fm, Tm);
      return (0, Qm.jsx)(im.V, {
        className: xm,
        ariaLabel: Rm(pm ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: rm(Tm, Am, Rm, am)
        }),
        pressed: !pm,
        onClick: () => {
          Dm(Tm, !pm)
        },
        children: (0, Qm.jsx)(bm.c, {
          name: pm ? "eye-slash" : "eye"
        })
      })
    }

    function um(mm) {
      var Tm;
      let {
        id: fm,
        elements: Am,
        actionButtons: am,
        keyNames: xm,
        className: wm,
        keepPlace: Dm,
        onlyWhenMoved: Rm,
        locked: pm,
        onReset: Em
      } = mm;
      const {
        t: om
      } = (0, hm.A)(), Om = ym[fm], Ym = (0, Sm.P)(null !== (Tm = Am[fm]) && void 0 !== Tm ? Tm : Sm.m);
      return !Om.move && !Om.scale || Rm && Ym ? (0, Qm.jsx)(lm, {
        className: wm,
        keepPlace: Dm
      }) : (0, Qm.jsx)(im.V, {
        className: wm,
        disabled: Ym || pm,
        ariaLabel: om("hudLayout:resetElement", {
          name: rm(fm, am, om, xm)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: fm
        },
        onClick: mm => {
          Rm && Um(mm.currentTarget), Em(fm)
        },
        children: (0, Qm.jsx)(bm.c, {
          name: "rotate-left"
        })
      })
    }

    function Bm(mm) {
      let {
        id: Tm,
        actionButtons: fm,
        keyNames: Am,
        className: am,
        keepPlace: xm,
        locked: wm,
        lockable: Dm,
        onLocked: Rm
      } = mm;
      const {
        t: pm
      } = (0, hm.A)();
      return Dm || wm ? (0, Qm.jsx)(im.V, {
        className: am,
        ariaLabel: pm(wm ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: rm(Tm, fm, pm, Am)
        }),
        pressed: wm,
        active: wm,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${wm?"unlock":"lock"}:${Tm}`
        },
        onClick: () => {
          Rm(Tm, !wm)
        },
        children: (0, Qm.jsx)(bm.c, {
          name: wm ? "lock" : "lock-open"
        })
      }) : (0, Qm.jsx)(lm, {
        className: am,
        keepPlace: xm
      })
    }

    function Lm(mm) {
      let {
        className: Tm,
        open: fm,
        name: Am,
        onToggle: am
      } = mm;
      const {
        t: xm
      } = (0, hm.A)();
      return (0, Qm.jsx)(im.V, {
        className: Tm,
        ariaLabel: xm(fm ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: Am
        }),
        pressed: fm,
        analyticsClick: {
          id: "hud_layout.children",
          value: fm ? "close" : "open"
        },
        onClick: () => {
          am(!fm)
        },
        children: (0, Qm.jsx)(bm.c, {
          name: fm ? "angle-up" : "angle-down"
        })
      })
    }

    function tm(mm, Tm) {
      var fm;
      mm.contains(document.activeElement) && Tm.focus({
        preventScroll: !0
      }), null === (fm = (0, km.g)()) || void 0 === fm || fm.handOverPadFocus(mm, Tm)
    }

    function Um(mm) {
      const Tm = mm.closest("[data-hud-row]"),
        fm = null === Tm || void 0 === Tm ? void 0 : Tm.querySelector(".HudElementRowName");
      return !(!Tm || !fm) && (tm(Tm, fm), !0)
    }
    const dm = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function gm(mm, Tm) {
      return "joystick" === mm && !Tm
    }

    function Wm() {
      const {
        t: mm
      } = (0, hm.A)();
      return (0, Qm.jsx)(im.V, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: mm => {
          const Tm = mm.currentTarget;
          if (!Um(Tm)) {
            const mm = function(mm) {
              var Tm, fm;
              const hm = [mm.previousElementSibling, mm.nextElementSibling].find((mm => mm instanceof HTMLElement && mm.matches(dm)));
              return null !== (Tm = null !== hm && void 0 !== hm ? hm : null === (fm = mm.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === fm ? void 0 : fm.querySelector(`:is(${dm}):not(.HudFixJoystickButton)`)) && void 0 !== Tm ? Tm : null
            }(Tm);
            mm && tm(Tm, mm)
          }
          Rm.c.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: mm("hudLayout:fixJoystick")
      })
    }
    var Fm = fm(77),
      mT = fm(1281),
      TT = fm(3112),
      fT = fm(2743),
      hT = fm(8842),
      AT = fm(2441),
      aT = fm(2466),
      xT = fm(3148);
    const wT = ["J", "C", "A", "P", "U", "X", "G"],
      DT = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: Sm.D,
        pinnedIcon: null
      });

    function iT(mm, Tm) {
      mm.replaceChildren(...[...Tm.childNodes].map((mm => mm.cloneNode(!0))))
    }
    const RT = mm => ({
      [Cm]: mm
    });

    function pT(mm) {
      let {
        id: Tm,
        slot: fm,
        icon: hm,
        label: am,
        hidden: xm,
        className: wm,
        face: im
      } = mm;
      const Rm = (0, Am.useRef)(null);
      return (0, Am.useLayoutEffect)((() => {
        im && Rm.current && iT(Rm.current, im)
      }), [im]), (0, Qm.jsxs)("div", {
        className: Dm()("TouchKeyHit", `TouchSlot${fm}`, wm, {
          HudPreviewGhost: xm.has(Tm)
        }),
        ...RT(Tm),
        children: [im && (0, Qm.jsx)("div", {
          ref: Rm,
          className: Dm()("TouchKey", {
            Labelled: im.classList.contains("Labelled")
          })
        }), !im && (0, Qm.jsxs)("div", {
          className: Dm()("TouchKey", {
            Labelled: void 0 !== am
          }),
          children: [hm && (0, Qm.jsx)(bm.c, {
            name: hm
          }), void 0 !== am && (0, Qm.jsx)("span", {
            className: "TouchKeyLabel",
            children: am
          })]
        })]
      })
    }

    function ET(mm) {
      let {
        item: Tm,
        selected: fm
      } = mm;
      const hm = (0, Am.useRef)(null);
      return (0, Am.useLayoutEffect)((() => {
        hm.current && iT(hm.current, Tm)
      }), [Tm]), (0, Qm.jsx)("div", {
        ref: hm,
        className: Dm()("InvenItem", {
          Selected: fm
        })
      })
    }
    const oT = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      OT = mm => void 0 === mm ? {} : {
        style: {
          "--parked": mm
        }
      };

    function YT(mm) {
      let {
        id: Tm,
        hidden: fm,
        parked: hm,
        unslotted: Am = !1
      } = mm;
      return (0, Qm.jsx)("div", {
        className: Dm()("TopRightIcon", aT.k[Tm], {
          HudPreviewGhost: fm.has(Tm),
          [AT.e]: void 0 !== hm,
          [AT.g]: Am
        }),
        ...OT(hm),
        children: (0, Qm.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...RT(Tm),
          children: (0, Qm.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Qm.jsx)(bm.c, {
              name: oT[Tm]
            })
          })
        })
      })
    }

    function qT(mm) {
      let {
        portraitPhone: Tm,
        icons: fm,
        pinnedIcon: hm,
        hidden: am,
        moved: xm,
        trayState: wm
      } = mm;
      const im = Tm ? (0, AT.D)(fm) : [],
        Rm = fm.filter((mm => "settings" === mm)),
        pm = fm.filter((mm => "settings" !== mm && !im.includes(mm))).reverse(),
        Em = im.length > 0 && "gone" === wm,
        om = [...Rm, ...Em ? ["tray"] : [], ...pm].filter((mm => "tray" === mm || am.has(mm) && !xm.has(mm))),
        Om = mm => {
          const Tm = om.indexOf(mm);
          return Tm < 0 ? void 0 : Tm
        },
        Ym = (mm, Tm) => (0, Qm.jsx)(YT, {
          id: mm,
          hidden: am,
          parked: Tm ? Om(mm) : void 0,
          unslotted: Tm && am.has(mm) && xm.has(mm)
        }, mm);
      return (0, Qm.jsxs)("div", {
        className: Dm()("TopRightIcons TouchInGame", {
          Column: Tm
        }),
        children: [Rm.map((mm => Ym(mm, !0))), im.length > 0 && (0, Qm.jsxs)("div", {
          className: Dm()("TopRightIcon TopRightTrayToggle Open", {
            [AT.e]: Em
          }),
          ...OT(Om("tray")),
          children: [(0, Qm.jsx)("div", {
            className: Dm()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== wm
            }),
            children: (0, Qm.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, Qm.jsx)(bm.c, {
                name: "ellipsis"
              })
            })
          }), (0, Qm.jsx)("div", {
            className: "TopRightTray",
            children: im.map((mm => Ym(mm, !1)))
          })]
        }), pm.map((mm => (0, Qm.jsxs)(Am.Fragment, {
          children: ["perspective" === mm && null !== hm && (0, Qm.jsx)("div", {
            className: "TopRightIcon",
            children: (0, Qm.jsx)("div", {
              className: "UiItemIcon SmallTextBold",
              children: (0, Qm.jsx)("div", {
                className: "ScaleOnHover",
                children: (0, Qm.jsx)(bm.c, {
                  name: hm
                })
              })
            })
          }), Ym(mm, !0)]
        }, mm)))]
      })
    }

    function jT(mm) {
      let {
        next: Tm,
        hidden: fm
      } = mm;
      return (0, Qm.jsx)("div", {
        className: Dm()("HotBarArrow", Tm ? "Next" : "Previous", {
          HudPreviewGhost: fm
        }),
        ...RT("arrows"),
        children: (0, Qm.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, Qm.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Qm.jsx)(bm.c, {
              name: Tm ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function VT() {
      return (0, Qm.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, Qm.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, Qm.jsx)("div", {
            className: "SocialBar",
            children: (0, Qm.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, Qm.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, Qm.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, Qm.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, Qm.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Qm.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Qm.jsx)(bm.c, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, Qm.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, Qm.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, Qm.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, Qm.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Qm.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Qm.jsx)(bm.c, {
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
    const IT = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      KT = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      QT = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      nT = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function JT(mm) {
      let {
        presence: Tm,
        portraitPhone: fm,
        hidden: Am,
        actionButtons: am,
        joystickFixed: xm,
        keysAbove: wm,
        auraBar: im,
        trayState: Rm,
        moved: Em
      } = mm;
      const {
        t: om
      } = (0, hm.A)(), {
        faces: Om,
        items: Ym
      } = Tm, qm = mm => ({
        HudPreviewGhost: Am.has(mm)
      });
      return (0, Qm.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, Qm.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, Qm.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, Qm.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, Qm.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, Qm.jsx)("div", {
              className: "InGameHeaderGameName",
              children: om("hudLayout:previewGameName")
            })]
          })
        }), (0, Qm.jsx)("div", {
          className: "TopLeftElements",
          children: (0, Qm.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, Qm.jsxs)("div", {
              className: "Chat",
              children: [(0, Qm.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [om("hudLayout:previewChatLine"), om("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), om("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((mm => (0, Qm.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, Qm.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, Qm.jsx)("div", {
                      className: "IndividualText",
                      children: mm
                    })
                  })
                }, mm)))
              }), (0, Qm.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: Dm()("ChatIconWrapper SmallTextLight", qm("chat")),
                ...RT("chat"),
                children: (0, Qm.jsx)(bm.c, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, Qm.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, Qm.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, Qm.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, Qm.jsx)("div", {
                className: "TopRightIconsContainer",
                ...RT("menu"),
                children: (0, Qm.jsx)(qT, {
                  portraitPhone: fm,
                  icons: Tm.rowIcons,
                  pinnedIcon: Tm.pinnedIcon,
                  hidden: Am,
                  trayState: Rm,
                  moved: Em
                })
              })
            }), pm.featureFlags.useSocialFeatures && (0, Qm.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, Qm.jsx)(VT, {})
            })]
          })
        }), (0, Qm.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, Qm.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, Qm.jsxs)("div", {
            className: "TouchInteractKey",
            ...RT("interact"),
            children: [(0, Qm.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, Qm.jsx)(bm.c, {
                name: "hand-back-point-up"
              })
            }), (0, Qm.jsx)("div", {
              children: om("hudLayout:previewInteract")
            })]
          })
        }), (0, Qm.jsx)("div", {
          className: "BottomCentre",
          children: (0, Qm.jsxs)("div", {
            className: "BottomElements",
            children: [(0, Qm.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, Qm.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, Qm.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...RT("hotbar"),
                children: (0, Qm.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, Qm.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, Qm.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, Qm.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, Qm.jsx)(bm.c, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), im && (0, Qm.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, Qm.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, Qm.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, xT.c)("glint"),
                    alt: ""
                  }), (0, Qm.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, Qm.jsx)("div", {
                  className: "AuraBar",
                  children: (0, Qm.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, Qm.jsx)("div", {
                className: "HotBarRow",
                children: (0, Qm.jsx)("div", {
                  className: Dm()("HotBarContainer Touch", {
                    KeysAbove: wm
                  }),
                  children: (0, Qm.jsxs)("div", {
                    className: "HotBar",
                    ...RT("hotbar"),
                    children: [(0, Qm.jsxs)("div", {
                      className: Dm()("TouchInventoryKeys", {
                        NoAuraBar: !im
                      }),
                      children: [(0, Qm.jsx)("div", {
                        className: Dm()("TouchInventoryKey ShopKey", qm("inventory"), {
                          Hidden: !Tm.shop
                        }),
                        ...RT("inventory"),
                        children: (0, Qm.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Qm.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Qm.jsx)(bm.c, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, Qm.jsx)("div", {
                        className: Dm()("TouchInventoryKey BagKey", qm("inventory"), {
                          Hidden: !Tm.bag
                        }),
                        ...RT("inventory"),
                        children: (0, Qm.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Qm.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Qm.jsx)(bm.c, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, Qm.jsx)(jT, {
                      next: !1,
                      hidden: Am.has("arrows")
                    }), (0, Qm.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== Ym && Ym.map(((mm, Tm) => (0, Qm.jsx)(ET, {
                        item: mm,
                        selected: mm.classList.contains("Selected")
                      }, Tm))), null === Ym && QT.map((mm => {
                        const Tm = nT[mm];
                        return (0, Qm.jsx)("div", {
                          className: Dm()("InvenItem", {
                            Selected: 0 === mm
                          }),
                          children: Tm && (0, Qm.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, Qm.jsx)(bm.c, {
                              name: Tm
                            })
                          })
                        }, mm)
                      }))]
                    }), (0, Qm.jsx)(jT, {
                      next: !0,
                      hidden: Am.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, Qm.jsx)("div", {
              className: "BottomRightElements",
              children: (0, Qm.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== Om && wT.map((mm => {
                  const Tm = Om[mm];
                  return Tm && (0, Qm.jsx)(pT, {
                    id: IT[mm],
                    slot: mm,
                    face: Tm,
                    className: KT[mm],
                    hidden: Am
                  }, mm)
                })), null === Om && (0, Qm.jsxs)(Qm.Fragment, {
                  children: [(0, Qm.jsx)(pT, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: Am
                  }), (0, Qm.jsx)(pT, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: Am
                  }), am && (0, Qm.jsxs)(Qm.Fragment, {
                    children: [(0, Qm.jsx)(pT, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: Am
                    }), (0, Qm.jsx)(pT, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: Am
                    })]
                  }), !am && (0, Qm.jsx)(pT, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: om("touchKeys:scope"),
                    hidden: Am
                  }), (0, Qm.jsx)(pT, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: om("touchKeys:fly"),
                    hidden: Am
                  }), (0, Qm.jsx)(pT, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: Am
                  })]
                })]
              })
            })]
          })
        }), (0, Qm.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, Qm.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, Qm.jsxs)("div", {
              className: Dm()("Joystick Resting HudPreviewJoystick", {
                Floating: !xm
              }),
              ...RT("joystick"),
              children: [(0, Qm.jsx)("div", {
                className: "JoystickBase"
              }), (0, Qm.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function cT() {
      const [mm, Tm] = (0, Am.useState)({}), fm = (0, Am.useCallback)((mm => {
        Tm((Tm => [...new Set([...Object.keys(Tm), ...Object.keys(mm)])].every((fm => Tm[fm] === mm[fm])) ? Tm : mm))
      }), []);
      return [mm, fm]
    }
    const zT = .05;

    function ZT(mm) {
      var Tm;
      let {
        selected: fm,
        layout: Am,
        actionButtons: am,
        keyNames: xm,
        overlaps: wm,
        scaleCaps: Rm,
        joystickFixed: pm,
        onScale: Em,
        onHidden: om,
        onReset: Om,
        locked: Ym,
        lockable: qm,
        onLocked: jm,
        extra: Vm
      } = mm;
      const {
        t: Im
      } = (0, hm.A)(), Km = fm ? ym[fm] : null, nm = null !== fm && Ym.has(fm), Jm = (fm && Am.hudElements[fm] || Sm.m)[2], cm = null !== (Tm = fm && Rm[fm]) && void 0 !== Tm ? Tm : Sm.i, zm = mm => {
        fm && Em(fm, Math.min(cm, Math.round(100 * (Jm + .1 * mm)) / 100))
      };
      return (0, Qm.jsxs)(Qm.Fragment, {
        children: [(0, Qm.jsxs)("div", {
          className: Dm()("HudQuickName SmallTextBold", {
            Overlap: wm.length > 0
          }),
          children: [wm.length > 0 && (0, Qm.jsx)(bm.c, {
            name: "triangle-exclamation"
          }), Km ? rm(Km.id, am, Im, xm) : Im("hudLayout:fullScreenHint"), wm.length > 0 && (0, Qm.jsx)("span", {
            className: "HudQuickOverlap",
            children: Im("hudLayout:overlapsShort", {
              names: sm(wm, am, Im, xm)
            })
          })]
        }), (null === Km || void 0 === Km ? void 0 : Km.scale) && (0, Qm.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, Qm.jsx)(im.V, {
            disabled: nm || Jm <= Sm.j,
            ariaLabel: Im("hudLayout:smaller"),
            onClick: () => {
              zm(-1)
            },
            children: (0, Qm.jsx)(bm.c, {
              name: "minus"
            })
          }), (0, Qm.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*Jm)}%`
          }), (0, Qm.jsx)(im.V, {
            disabled: nm || Jm >= cm,
            ariaLabel: Im("hudLayout:larger"),
            onClick: () => {
              zm(1)
            },
            children: (0, Qm.jsx)(bm.c, {
              name: "plus"
            })
          })]
        }), (Km || Vm) && (0, Qm.jsxs)("div", {
          className: "HudQuickActions",
          children: [Km && (0, Qm.jsxs)(Qm.Fragment, {
            children: [(0, Qm.jsx)(Bm, {
              id: Km.id,
              actionButtons: am,
              keyNames: xm,
              locked: nm,
              lockable: qm(Km.id),
              onLocked: jm
            }), (0, Qm.jsx)(Mm, {
              id: Km.id,
              elements: Am.hudElements,
              actionButtons: am,
              keyNames: xm,
              onHidden: om
            }), (0, Qm.jsx)(um, {
              id: Km.id,
              elements: Am.hudElements,
              actionButtons: am,
              keyNames: xm,
              locked: nm,
              onReset: Om
            }), gm(Km.id, pm) && (0, Qm.jsx)(Wm, {})]
          }), Vm]
        })]
      })
    }
    var kT = fm(1152),
      bT = fm(4346);
    const ST = "HudPreviewDoc",
      eT = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      NT = new Set([ST, ...Object.values(eT)]),
      GT = new Set(Sm.y.map(aT.u)),
      XT = new Set(aT.f),
      PT = 'style, link[rel="stylesheet"]';

    function HT(mm, Tm, fm, hm) {
      const Am = new Map,
        am = new Set,
        xm = new URL(mm.baseURI).origin,
        wm = Tm => {
          var fm;
          if ("LINK" !== Tm.nodeName) return !0;
          const hm = null === (fm = Tm.getAttribute("href")) || void 0 === fm ? void 0 : fm.trim();
          if (!hm) return !1;
          try {
            return new URL(hm, mm.baseURI).origin === xm
          } catch {
            return !1
          }
        };
      let Dm = null;
      const im = () => {
          Dm !== (0 === am.size) && (Dm = 0 === am.size, null === hm || void 0 === hm || hm(Dm))
        },
        Rm = mm => {
          const Tm = mm.cloneNode(!0);
          if ("LINK" === Tm.tagName) {
            am.add(Tm);
            const mm = () => {
              am.delete(Tm), im()
            };
            Tm.addEventListener("load", mm), Tm.addEventListener("error", mm), fm && Tm.addEventListener("load", fm)
          }
          return Tm
        },
        pm = () => {
          const hm = function(mm) {
              const Tm = [...mm.body.children].filter((mm => mm.matches(PT)));
              return [...mm.head.querySelectorAll(PT), ...Tm]
            }(mm).filter(wm),
            xm = new Set(hm);
          for (const [mm, Tm] of Am) xm.has(mm) || (Tm.remove(), Am.delete(mm), am.delete(Tm));
          let Dm = null;
          for (let mm = hm.length - 1; mm >= 0; mm--) {
            const am = hm[mm];
            let xm = Am.get(am);
            xm ? "STYLE" === am.tagName && xm.textContent !== am.textContent && (xm.textContent = am.textContent, null === fm || void 0 === fm || fm()) : (xm = Rm(am), Am.set(am, xm), Tm.head.insertBefore(xm, Dm)), Dm = xm
          }
          im()
        };
      pm();
      const Em = new MutationObserver(pm);
      return Em.observe(mm.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), Em.observe(mm.body, {
        childList: !0
      }), () => {
        Em.disconnect()
      }
    }

    function yT(mm, Tm, fm) {
      let {
        keysAbove: hm
      } = fm;
      const Am = [...mm.documentElement.classList].filter((mm => !NT.has(mm) && !XT.has(mm))),
        am = [...Tm.documentElement.classList].filter((mm => XT.has(mm))),
        xm = [ST, eT.hotbar, eT.hasShop, eT.hasBag];
      hm && xm.push(eT.keysAbove), Tm.documentElement.className = [...Am, ...xm, ...am].join(" ")
    }
    const CT = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function rT(mm, Tm, fm, hm, Am) {
      const am = (0, Sm.A)(fm, hm, "joystick"),
        xm = (0, aT.y)((0, aT.I)(fm, hm, Am), hm),
        wm = xm.classes.filter((mm => !GT.has(mm))),
        Dm = Tm.documentElement;
      (0, aT.P)({
        ...xm,
        classes: wm
      }, {
        vars: Dm,
        safe: Dm,
        classes: Dm
      });
      const im = (0, aT.B)(fm.hudLayouts[hm].hudSafe, window.innerWidth, window.innerHeight, sT(), (0, aT.L)(Tm));
      Dm.style.setProperty("--preview-joystick-shift-left", `${im[3]}px`), Dm.style.setProperty("--preview-joystick-shift-bottom", `${im[2]}px`), Dm.style.setProperty("--preview-joystick-scale", String(am[2])), (0, bT.f)(Dm, Tm, fm, hm);
      for (const Rm of CT) Dm.style.setProperty(Rm, mm.documentElement.style.getPropertyValue(Rm) || "0px")
    }

    function sT() {
      return (0, aT.G)(Rm.c.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function lT(mm) {
      return (0, aT.p)(sT(), (0, aT.L)(mm))
    }

    function MT(mm, Tm, fm) {
      const hm = mm.documentElement.style,
        Am = (0, aT.F)(Tm),
        am = hm.getPropertyValue(Am);
      try {
        return fm((mm => {
          hm.setProperty(Am, String(mm))
        }))
      } finally {
        "" === am ? hm.removeProperty(Am) : hm.setProperty(Am, am)
      }
    }

    function uT(mm, Tm) {
      const [fm, hm] = MT(mm, "hotbar", (Tm => {
        const fm = fm => {
          var hm, Am;
          return Tm(fm), null !== (hm = null === (Am = mm.querySelector(".HotBarGameItemsContainer")) || void 0 === Am ? void 0 : Am.getBoundingClientRect().width) && void 0 !== hm ? hm : 0
        };
        return [fm(1), fm(Sm.i)]
      }));
      return fm <= 0 ? Sm.i : Math.min(Sm.i, Math.max(1, Math.floor(hm / fm / Tm + 1e-6) * Tm))
    }
    const BT = 3,
      LT = .5,
      vT = mm => mm.right - mm.left;
    const tT = (mm, Tm) => Math.abs((0, hT.b)(mm).x - (0, hT.b)(Tm).x) + Math.abs((0, hT.b)(mm).y - (0, hT.b)(Tm).y) + Math.abs(vT(mm) - vT(Tm));

    function UT(mm, Tm, fm, hm, Am) {
      let {
        canKeep: am = () => !0,
        passes: xm = BT,
        before: wm,
        keysAboveOf: Dm
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const im = void 0 !== Dm && Dm(mm) !== Dm(Tm),
        Rm = Tm.hudLayouts[fm].hudLocked.filter((mm => am(mm) && !(im && "inventory" === mm))),
        pm = new Set(Rm);
      if (0 === pm.size) return Tm;
      const Em = [...Gm].filter((hm => !Rm.includes(hm) && (0, Sm.A)(mm, fm, hm).join() === (0, Sm.A)(Tm, fm, hm).join())),
        om = mm => {
          const Tm = (0, hT.C)(Em.flatMap((Tm => mm[Tm] ? [mm[Tm]] : [])));
          return {
            ...mm,
            cluster: null !== Tm && void 0 !== Tm ? Tm : void 0
          }
        },
        Om = mm => {
          const Tm = Am(mm);
          return Tm && om(Tm)
        },
        Ym = wm ? om(wm) : Om(mm);
      let qm = Ym && Om(Tm);
      if (!Ym || !qm) return Tm;
      let jm = Tm;
      for (let Vm = 0; Vm < xm && pm.size > 0; Vm++) {
        const mm = new Map;
        for (const Tm of pm) {
          const Am = Ym[Tm],
            am = qm[Tm],
            xm = Am && am ? dT(Tm, (0, Sm.A)(jm, fm, Tm), Am, am, hm) : null;
          xm ? mm.set(Tm, xm) : pm.delete(Tm)
        }
        if (0 === mm.size) break;
        let Am = jm;
        for (const [Tm, hm] of mm) Am = (0, Sm.ib)(Am, fm, Tm, hm);
        const am = Om(Am);
        if (!am) return Tm;
        let xm = jm;
        for (const [Tm, hm] of mm) {
          const mm = am[Tm];
          mm && tT(Ym[Tm], mm) < tT(Ym[Tm], qm[Tm]) - LT ? xm = (0, Sm.ib)(xm, fm, Tm, hm) : pm.delete(Tm)
        }
        if (xm === jm) break;
        const wm = [...mm.keys()].every((mm => pm.has(mm)));
        if (jm = xm, qm = wm ? am : Om(jm), !qm) return Tm
      }
      return Am(jm), jm
    }

    function dT(mm, Tm, fm, hm, Am) {
      let [am, xm, wm] = Tm;
      const Dm = Sm.v[mm],
        im = {};
      Dm.scale && vT(hm) > 0 && Math.abs(vT(fm) - vT(hm)) > LT && (im.scale = Math.max(Sm.j, Math.min(Sm.i, wm * vT(fm) / vT(hm))));
      const Rm = (0, hT.b)(fm).x - (0, hT.b)(hm).x,
        pm = (0, hT.b)(fm).y - (0, hT.b)(hm).y;
      return Dm.move && (Math.abs(Rm) > LT || Math.abs(pm) > LT) && (im.dx = am + Rm / Am.width, im.dy = xm + pm / Am.height), void 0 === im.scale && void 0 === im.dx ? null : im
    }
    let gT = 0;

    function WT() {
      return gT > 0
    }
    const FT = mm => 0 === mm.dx && 0 === mm.dy,
      mf = .001,
      Tf = mm => Math.abs(mm.dx) >= 5e-4 || Math.abs(mm.dy) >= 5e-4 ? mm : {
        dx: mm.dx,
        dy: mm.dy < 0 ? -.001 : mf
      };

    function ff(mm) {
      let {
        preview: Tm,
        stageRef: fm,
        ringRef: hm,
        centreLineRef: am,
        snapCentre: xm,
        ready: wm,
        measure: Dm,
        k: im,
        viewport: Rm,
        boxes: pm,
        pieces: Em,
        selected: om,
        insets: Om,
        layout: Ym,
        canMove: qm,
        onSelect: jm,
        onMove: Vm
      } = mm;
      const Im = (0, Am.useRef)(null),
        Km = (0, Am.useCallback)((() => null !== Im.current), []),
        Qm = (mm, Tm) => {
          if (!Tm) return null;
          const fm = (0, hT.b)(mm.origin),
            hm = (0, hT.b)(Tm),
            Am = (mm.to.dx - mm.from.dx) * Rm.width,
            am = (mm.to.dy - mm.from.dy) * Rm.height,
            xm = Tm.right - Tm.left,
            wm = Tm.bottom - Tm.top;
          return {
            skew: {
              x: hm.x - fm.x - Am,
              y: hm.y - fm.y - am
            },
            box: {
              left: fm.x - xm / 2,
              top: fm.y - wm / 2,
              right: fm.x + xm / 2,
              bottom: fm.y + wm / 2
            }
          }
        },
        nm = (mm, fm) => {
          var Am;
          const xm = Im.current;
          if (!xm || xm.pointerId !== mm.pointerId) return;
          Im.current = null, null === (Am = am.current) || void 0 === Am || Am.classList.remove("Shown", "Snapped");
          const wm = hm.current;
          if (wm && null !== xm.ringStyle && wm.setAttribute("style", xm.ringStyle), fm && xm.moved) {
            const mm = FT(xm.to) ? null : Dm(xm.id),
              Tm = mm ? (0, hT.B)(mm, (0, hT.z)(Rm.width, Rm.height, Om)) : {
                x: 0,
                y: 0
              },
              fm = {
                dx: xm.to.dx + Tm.x / Rm.width,
                dy: xm.to.dy + Tm.y / Rm.height
              },
              hm = FT(xm.to) ? fm : Tf(fm);
            Vm(xm.id, hm.dx, hm.dy)
          } else Tm(xm.id, null), fm && xm.tapPick && jm(xm.tapPick)
        };
      return {
        busy: Km,
        handlers: {
          onPointerDown: mm => {
            var Tm;
            if (!wm || Im.current || !mm.target.closest(".HudPreviewHandle")) return;
            const hm = fm.current.getBoundingClientRect(),
              Am = {
                x: (mm.clientX - hm.left) / im,
                y: (mm.clientY - hm.top) / im
              },
              am = (0, hT.v)(Am, Em, 40 / im),
              xm = "cluster" === om && void 0 !== pm.cluster && null !== (0, hT.v)(Am, [{
                id: "cluster",
                box: pm.cluster
              }], 40 / im),
              Dm = "menu" === om && void 0 !== pm.menu && (0, hT.c)(pm.menu, Am) && ("menu" === am || null !== am && (0, AT.w)(am, Ym.hudElements[am])),
              Rm = xm ? "cluster" : Dm ? "menu" : null,
              Om = null !== Rm,
              Vm = null !== Rm && void 0 !== Rm ? Rm : am;
            if (!Vm) return;
            if (function(mm) {
                gT++;
                const Tm = fm => {
                  fm.pointerId === mm && (gT = Math.max(0, gT - 1), window.removeEventListener("pointerup", Tm, !0), window.removeEventListener("pointercancel", Tm, !0))
                };
                window.addEventListener("pointerup", Tm, !0), window.addEventListener("pointercancel", Tm, !0)
              }(mm.pointerId), !qm(Vm)) return void jm(Om && am ? am : Vm);
            jm(Vm);
            const [Km, Qm] = null !== (Tm = Ym.hudElements[Vm]) && void 0 !== Tm ? Tm : [0, 0], nm = {
              dx: Km,
              dy: Qm
            }, Jm = {
              skew: {
                x: 0,
                y: 0
              },
              box: pm[Vm]
            };
            Im.current = {
              id: Vm,
              pointerId: mm.pointerId,
              startX: mm.clientX,
              startY: mm.clientY,
              origin: pm[Vm],
              from: nm,
              to: nm,
              moved: !1,
              home: FT(nm) ? {
                centre: (0, hT.b)(pm[Vm]),
                anchor: Jm
              } : null,
              away: FT(nm) ? null : Jm,
              anchor: Jm,
              ringStyle: null,
              tapPick: Om ? am : null
            }, mm.currentTarget.setPointerCapture(mm.pointerId)
          },
          onPointerMove: mm => {
            const fm = Im.current;
            if (!fm || fm.pointerId !== mm.pointerId) return;
            const Am = mm.clientX - fm.startX,
              wm = mm.clientY - fm.startY;
            if (!fm.moved && Math.hypot(Am, wm) < 5) return;
            const pm = !fm.moved;
            var Em, om;
            (fm.moved = !0, pm) && (fm.ringStyle = null !== (Em = null === (om = hm.current) || void 0 === om ? void 0 : om.getAttribute("style")) && void 0 !== Em ? Em : null);
            const Ym = (0, hT.z)(Rm.width, Rm.height, Om);
            if (!fm.home) {
              var qm;
              fm.to = {
                dx: 0,
                dy: 0
              }, Tm(fm.id, fm.to);
              const mm = Dm(fm.id),
                hm = null !== (qm = Qm(fm, mm)) && void 0 !== qm ? qm : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: fm.origin
                },
                Am = (0, hT.b)(fm.origin);
              fm.home = {
                centre: mm ? (0, hT.b)(mm) : {
                  x: Am.x - fm.from.dx * Rm.width,
                  y: Am.y - fm.from.dy * Rm.height
                },
                anchor: hm
              }
            }
            const jm = fm.home;
            let Vm = !1;
            const Km = mm => {
                Vm = !1;
                let hm = (0, hT.h)(mm.box, Am / im, wm / im, Ym);
                const am = Rm.width / 2;
                if (xm && Math.abs((0, hT.b)(fm.origin).x + hm.x - am) <= 8 / im) {
                  const Tm = am - (0, hT.b)(fm.origin).x,
                    Am = (0, hT.h)(mm.box, Tm, hm.y, Ym);
                  Vm = Math.abs(Am.x - Tm) < .01, Vm && (hm = Am)
                }
                const Dm = (0, hT.r)(fm.from, hm.x - mm.skew.x, hm.y - mm.skew.y, Rm.width, Rm.height);
                fm.to = Tf(Dm), fm.anchor = mm, Tm(fm.id, fm.to)
              },
              nm = (0, hT.h)(jm.anchor.box, Am / im, wm / im, Ym),
              Jm = am.current,
              cm = (0, hT.b)(fm.origin),
              zm = ((0, Sm.S)(fm.id) ? 20 : 6) / im;
            if (Math.abs(cm.x + nm.x - jm.centre.x) <= zm && Math.abs(cm.y + nm.y - jm.centre.y) <= zm) fm.to = {
              dx: 0,
              dy: 0
            }, fm.anchor = jm.anchor, Vm = xm && Math.abs(jm.centre.x - Rm.width / 2) < 1, Tm(fm.id, fm.to);
            else if (fm.away) Km(fm.away);
            else {
              var Zm;
              Km(jm.anchor), fm.away = null !== (Zm = Qm(fm, Dm(fm.id))) && void 0 !== Zm ? Zm : jm.anchor, Km(fm.away)
            }
            null === Jm || void 0 === Jm || Jm.classList.add("Shown"), null === Jm || void 0 === Jm || Jm.classList.toggle("Snapped", Vm), (mm => {
              const Tm = hm.current;
              if (Tm) {
                const {
                  skew: fm,
                  box: hm
                } = mm.anchor;
                Tm.style.left = hm.left * im + "px", Tm.style.top = hm.top * im + "px", Tm.style.width = (hm.right - hm.left) * im + "px", Tm.style.height = (hm.bottom - hm.top) * im + "px", Tm.style.translate = `${((mm.to.dx-mm.from.dx)*Rm.width+fm.x)*im}px ${((mm.to.dy-mm.from.dy)*Rm.height+fm.y)*im}px`
              }
            })(fm)
          },
          onPointerUp: mm => {
            nm(mm, !0)
          },
          onPointerCancel: mm => {
            nm(mm, !1)
          }
        }
      }
    }

    function hf(mm, Tm) {
      return Object.keys(mm).filter((mm => mm !== Tm)).map((Tm => mm[Tm]))
    }

    function Af(mm) {
      const Tm = [],
        fm = Tm => (0, Sm.S)(Tm) && !mm.documentElement.classList.contains((0, aT.z)(Tm));
      for (const xm of mm.querySelectorAll(`[${Cm}]`)) {
        const mm = fm(xm.getAttribute(Cm)) ? xm.querySelector(".ScaleOnHover") : null,
          hm = (null !== mm && void 0 !== mm ? mm : xm).getBoundingClientRect();
        (hm.width > 0 || hm.height > 0) && Tm.push({
          id: xm.getAttribute(Cm),
          box: {
            left: hm.left,
            top: hm.top,
            right: hm.right,
            bottom: hm.bottom
          }
        })
      }
      const hm = mm => (0, hT.C)(Tm.filter((Tm => {
          let {
            id: fm
          } = Tm;
          return mm(fm)
        })).map((mm => {
          let {
            box: Tm
          } = mm;
          return Tm
        }))),
        Am = {};
      for (const xm of new Set(Tm.map((mm => mm.id)))) Am[xm] = hm((mm => mm === xm));
      const am = hm((mm => Gm.has(mm)));
      return am && (Am.cluster = am), {
        boxes: Am,
        pieces: Tm
      }
    }

    function af(mm, Tm, fm) {
      const hm = Tm.right - Tm.left,
        Am = Tm.bottom - Tm.top;
      return MT(mm, "cluster", (Tm => {
        const am = fm => {
            Tm(fm);
            const hm = [...mm.querySelectorAll(`[${Cm}]:not(.HudPreviewGhost)`)].filter((mm => Gm.has(mm.getAttribute(Cm)))).map((mm => {
                const Tm = mm.getBoundingClientRect();
                return {
                  left: Tm.left,
                  top: Tm.top,
                  right: Tm.right,
                  bottom: Tm.bottom
                }
              })),
              Am = (0, hT.C)(hm);
            return Am ? {
              w: Am.right - Am.left,
              h: Am.bottom - Am.top
            } : null
          },
          xm = mm => !mm || mm.w <= hm && mm.h <= Am,
          wm = am(1),
          Dm = am(Sm.i);
        if (!wm || xm(Dm)) return Sm.i;
        const im = (mm, Tm, fm) => Tm > mm ? 1 + (fm - mm) * (Sm.i - 1) / (Tm - mm) : Sm.i;
        let Rm = Math.floor(Math.min(Sm.i, im(wm.w, Dm.w, hm), im(wm.h, Dm.h, Am)) / fm + 1e-6) * fm;
        for (; Rm > 1 && !xm(am(Rm));) Rm = Math.round(100 * (Rm - fm)) / 100;
        return Math.max(1, Rm)
      }))
    }

    function xf(mm) {
      yT(document, mm, {
        keysAbove: !1
      });
      const Tm = parseFloat(getComputedStyle(mm.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        fm = Number.isFinite(Tm) && Tm < 0;
      return yT(document, mm, {
        keysAbove: fm
      }), fm
    }

    function wf(mm, Tm) {
      let {
        layout: fm,
        orientation: hm,
        viewport: am,
        replicaKey: xm,
        joystickFixed: wm,
        busy: Dm
      } = Tm;
      const [im, Rm] = (0, Am.useState)(null), [pm, Em] = (0, Am.useState)({
        boxes: {},
        pieces: []
      }), [om, Om] = (0, Am.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [Ym, qm] = (0, Am.useState)(!1), [jm, Vm] = (0, Am.useState)(!1), [Im, Km] = (0, Am.useState)(!1), Qm = (0, Am.useCallback)((mm => {
        Vm(mm), mm && Km(!0)
      }), []), nm = fm.hudLayouts[hm].hudSafe;
      (0, Am.useLayoutEffect)((() => {
        const Tm = mm.current.contentDocument;
        Tm.open(), Tm.write("<!DOCTYPE html><html><head></head><body></body></html>"), Tm.close(), Rm(Tm)
      }), [mm]);
      const Jm = (0, Am.useCallback)((() => {
          im && ((0, AT.x)(im), Em(Af(im)), Om(function(mm, Tm) {
            const fm = lT(mm),
              [hm, Am, am, xm] = Tm ? (0, aT.q)(Tm, window.innerWidth, window.innerHeight, fm) : fm;
            return {
              top: hm,
              right: Am,
              bottom: am,
              left: xm
            }
          }(im, nm)))
        }), [im, nm]),
        cm = (0, Am.useCallback)((() => {
          im && qm(xf(im))
        }), [im]),
        zm = (0, Am.useRef)((() => {}));
      return zm.current = () => {
        cm(), Dm() || Jm()
      }, (0, Am.useLayoutEffect)((() => {
        if (im) return HT(document, im, (() => {
          zm.current()
        }), Qm)
      }), [im, Qm]), (0, Am.useLayoutEffect)(cm, [cm, am]), (0, Am.useLayoutEffect)((() => {
        im && (yT(document, im, {
          keysAbove: Ym
        }), rT(document, im, fm, hm, wm), cm(), Jm())
      }), [im, fm, hm, Ym, xm, wm, am, Jm, cm]), (0, Am.useEffect)((() => {
        var mm;
        if (!im) return;
        const Tm = new ResizeObserver((() => {
          Dm() || Jm()
        }));
        for (const fm of im.querySelectorAll(`[${Cm}]`)) Tm.observe(fm);
        return null === (mm = im.fonts) || void 0 === mm || mm.ready.then(Jm), () => {
          Tm.disconnect()
        }
      }), [im, Jm, Dm, xm]), {
        doc: im,
        boxes: pm.boxes,
        pieces: pm.pieces,
        insets: om,
        keysAbove: Ym,
        ready: jm,
        settled: Im
      }
    }
    const Df = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      Rf = (mm, Tm, fm) => {
        const hm = mm => (0, AT.w)(mm, fm.hudElements[mm]);
        return "cluster" === mm && Gm.has(Tm) || "cluster" === Tm && Gm.has(mm) || "menu" === mm && hm(Tm) || "menu" === Tm && hm(mm) || Df.some((hm => {
          let [Am, am] = hm;
          const xm = fm.hudElements.hotbar,
            wm = "inventory" === am && fm.hudLocked.includes(am) && void 0 !== xm && !(0, Sm.P)(xm);
          return (mm === Am && Tm === am || mm === am && Tm === Am) && !wm
        }))
      };
    const pf = ["Above", "Below", "Left", "Right"];

    function Ef(mm, Tm, fm, hm, Am) {
      const am = fm[mm],
        xm = (am.left + am.right) / 2,
        wm = (am.top + am.bottom) / 2,
        Dm = (7.5 * Tm.length + 14) / hm,
        im = 18 / hm,
        Rm = {
          Above: {
            left: xm - Dm / 2,
            top: am.top - im,
            right: xm + Dm / 2,
            bottom: am.top
          },
          Below: {
            left: xm - Dm / 2,
            top: am.bottom,
            right: xm + Dm / 2,
            bottom: am.bottom + im
          },
          Left: {
            left: am.left - Dm,
            top: wm - im / 2,
            right: am.left,
            bottom: wm + im / 2
          },
          Right: {
            left: am.right,
            top: wm - im / 2,
            right: am.right + Dm,
            bottom: wm + im / 2
          }
        },
        pm = hf(fm, mm),
        Em = {
          left: 0,
          top: 0,
          right: Am.width,
          bottom: Am.height
        };
      return pf[(0, hT.o)(pf.map((mm => Rm[mm])), pm, {
        bounds: Em
      })]
    }

    function of() {
      const [mm, Tm] = (0, TT.c)();
      return (0, Am.useMemo)((() => ({
        width: mm,
        height: Tm
      })), [mm, Tm])
    }

    function Of(mm) {
      var Tm;
      const {
        layout: fm,
        orientation: am,
        selected: xm,
        onSelect: wm,
        onMove: im,
        canMove: Rm,
        actionButtons: pm,
        joystickFixed: Em,
        presence: om,
        keyNames: Ym,
        maxHeight: qm,
        fill: jm = !1,
        apiRef: Vm
      } = mm, {
        t: Im
      } = (0, hm.A)(), Km = of(), nm = (null !== (Tm = (0, Om.g)("maxAuraLevel")) && void 0 !== Tm ? Tm : 0) > 0, Jm = fm.hudLayouts[am], cm = (0, Am.useRef)(null), zm = (0, Am.useRef)(null), Zm = (0, Am.useRef)(null), km = (0, Am.useRef)(null), em = (0, Am.useRef)(null), Nm = (0, Am.useRef)(null), Xm = (0, fT.d)(cm).width, Pm = jm ? 1 : Xm > 0 ? (0, hT.w)(Xm, Km.width, Km.height, qm) : 0, Hm = (0, Am.useRef)((() => !1)), ym = (0, Am.useCallback)((() => Hm.current()), []), {
        doc: Cm,
        boxes: sm,
        pieces: lm,
        insets: Mm,
        keysAbove: um,
        ready: Bm,
        settled: Lm
      } = wf(Zm, {
        layout: fm,
        orientation: am,
        viewport: Km,
        replicaKey: `${pm}:${Em}:${nm}`,
        joystickFixed: Em,
        busy: ym
      }), tm = (0, Am.useCallback)((mm => {
        Cm && rT(document, Cm, mm, am, Em)
      }), [Cm, am, Em]), Um = (0, Am.useCallback)((mm => Cm && Lm ? (tm(mm), xf(Cm), function(mm) {
        let {
          boxes: Tm,
          pieces: fm
        } = mm;
        const hm = fm.find((mm => "inventory" === mm.id));
        if (!hm || !Tm.inventory) return Tm;
        const Am = (0, hT.b)(Tm.inventory),
          am = vT(hm.box) / 2,
          xm = (hm.box.bottom - hm.box.top) / 2;
        return {
          ...Tm,
          inventory: {
            left: Am.x - am,
            top: Am.y - xm,
            right: Am.x + am,
            bottom: Am.y + xm
          }
        }
      }(Af(Cm))) : null), [Cm, Lm, tm]), dm = (0, Am.useCallback)((mm => !!Cm && (tm(mm), xf(Cm))), [Cm, tm]), gm = (0, Am.useRef)(null), Wm = (0, Am.useRef)(null), mT = (0, Am.useRef)(fm);
      mT.current = fm;
      const TT = (0, Am.useCallback)((() => {
        null !== gm.current && (cancelAnimationFrame(gm.current), gm.current = null)
      }), []);
      (0, Am.useEffect)((() => TT), [fm, TT]);
      const {
        lockable: xT
      } = mm, wT = (0, Am.useCallback)((mm => {
        if (tm(mm), !Lm || 0 === fm.hudLayouts[am].hudLocked.length) return;
        const Tm = fm;
        TT(), gm.current = requestAnimationFrame((() => {
          var fm;
          if (gm.current = null, mT.current !== Tm) return;
          const hm = (null === (fm = Wm.current) || void 0 === fm ? void 0 : fm.from) === Tm ? Wm.current.boxes : Um(Tm);
          hm && (Wm.current = {
            from: Tm,
            boxes: hm
          }), tm(hm ? UT(Tm, mm, am, Km, Um, {
            canKeep: xT,
            passes: 1,
            before: hm,
            keysAboveOf: dm
          }) : mm)
        }))
      }), [tm, Lm, fm, am, Km, Um, dm, xT, TT]), DT = ff({
        preview: (mm, Tm) => {
          Tm ? wT((0, Sm.ib)(fm, am, mm, Tm)) : (TT(), tm(fm))
        },
        stageRef: zm,
        ringRef: km,
        centreLineRef: em,
        snapCentre: fm.hudSnapCentre,
        ready: Lm,
        measure: mm => {
          var Tm;
          return Cm && Bm && null !== (Tm = Af(Cm).boxes[mm]) && void 0 !== Tm ? Tm : null
        },
        k: Pm,
        viewport: Km,
        boxes: sm,
        pieces: lm,
        selected: xm,
        insets: Mm,
        layout: Jm,
        canMove: Rm,
        onSelect: wm,
        onMove: (mm, Tm, fm) => {
          TT(), im(mm, Tm, fm)
        }
      });
      (0, Am.useLayoutEffect)((() => {
        Hm.current = DT.busy
      }), [DT.busy]);
      const iT = (0, Am.useRef)([]),
        RT = (0, Am.useRef)(Jm.hudElements);
      (0, Am.useEffect)((() => {
        for (const Am of Object.keys(Jm.hudElements)) {
          var mm, Tm, fm, hm;
          (null !== (mm = null === (Tm = Jm.hudElements[Am]) || void 0 === Tm ? void 0 : Tm[2]) && void 0 !== mm ? mm : 1) > (null !== (fm = null === (hm = RT.current[Am]) || void 0 === hm ? void 0 : hm[2]) && void 0 !== fm ? fm : 1) && Rm(Am) && !(0, AT.w)(Am, Jm.hudElements[Am]) && iT.current.push(Am)
        }
        RT.current = Jm.hudElements
      }), [Jm.hudElements, Rm]), (0, Am.useEffect)((() => {
        if (!Bm) return;
        const mm = iT.current.shift(),
          Tm = mm && sm[mm];
        if (!mm || !Tm || DT.busy()) return;
        const fm = (0, hT.B)(Tm, (0, hT.z)(Km.width, Km.height, Mm));
        if (0 !== fm.x || 0 !== fm.y) {
          var hm;
          const [Tm, Am] = null !== (hm = Jm.hudElements[mm]) && void 0 !== hm ? hm : [0, 0];
          im(mm, Tm + fm.x / Km.width, Am + fm.y / Km.height)
        }
      }), [sm, Bm]), (0, Am.useImperativeHandle)(Vm, (() => ({
        setScale: (mm, Tm) => {
          wT((0, Sm.ib)(fm, am, mm, {
            scale: Tm
          }))
        },
        setOpacity: mm => {
          tm({
            ...fm,
            hudKeyOpacity: mm
          })
        },
        keepLocks: (mm, Tm) => (TT(), UT(mm, Tm, am, Km, Um, {
          canKeep: xT,
          keysAboveOf: dm
        })),
        setSafe: mm => {
          wT((0, Sm.ob)(fm, am, mm)), Nm.current && (Nm.current.style.inset = (0, aT.q)(mm, Km.width, Km.height, lT(null !== Cm && void 0 !== Cm ? Cm : document)).map((mm => mm * Pm + "px")).join(" "))
        }
      })), [tm, wT, Um, dm, TT, xT, Cm, fm, am, Km, Pm]);
      const pT = new Set(Object.keys(Jm.hudElements).filter((mm => (0, Sm.u)(Jm.hudElements, mm)))),
        ET = xm ? sm[xm] : void 0,
        oT = xm ? rm(xm, pm, Im, Ym) : "",
        OT = (0, kT.g)(Km.width, Km.height),
        YT = xm ? function(mm, Tm, fm, hm) {
          const Am = mm => (0, Sm.u)(fm.hudElements, mm) || (0, AT.u)(mm, fm, hm);
          if (Am(mm)) return [];
          const am = Tm.filter((Tm => {
              let {
                id: fm
              } = Tm;
              return "cluster" === mm ? Gm.has(fm) : fm === mm
            })),
            xm = new Set;
          for (const wm of Tm) wm.id === mm || xm.has(wm.id) || Rf(mm, wm.id, fm) || Am(wm.id) || void 0 === fm.hudElements[mm] && void 0 === fm.hudElements[wm.id] || am.some((mm => {
            let {
              id: Tm,
              box: fm
            } = mm;
            return Tm !== wm.id && (0, hT.f)(fm, wm.box, 2)
          })) && xm.add(wm.id);
          return [...xm]
        }(xm, lm, Jm, OT) : [],
        qT = new Set((0, AT.r)(Jm.hudElements)),
        jT = (0, AT.H)(Jm, (0, AT.D)(om.rowIcons)).state,
        VT = YT.join(),
        IT = (0, Am.useRef)(mm.onReady);
      IT.current = mm.onReady, (0, Am.useEffect)((() => {
        var mm;
        null === (mm = IT.current) || void 0 === mm || mm.call(IT, Lm)
      }), [Lm]);
      const KT = (0, Am.useRef)(mm.onMeasured);
      (0, Am.useLayoutEffect)((() => {
        KT.current = mm.onMeasured
      })), (0, Am.useEffect)((() => {
        var mm;
        const Tm = Cm ? {
          hotbar: uT(Cm, zT),
          cluster: af(Cm, (0, hT.z)(Km.width, Km.height, Mm), zT)
        } : {};
        null === (mm = KT.current) || void 0 === mm || mm.call(KT, sm, VT ? VT.split(",") : [], Tm)
      }), [sm, VT, Cm, Km, Mm]);
      const QT = mm => ({
        left: mm.left * Pm,
        top: mm.top * Pm,
        width: (mm.right - mm.left) * Pm,
        height: (mm.bottom - mm.top) * Pm
      });
      return (0, Qm.jsx)("div", {
        ref: cm,
        className: Dm()("HudPreviewBox", {
          Fill: jm
        }),
        style: {
          height: Km.height * Pm
        },
        children: (0, Qm.jsxs)("div", {
          ref: zm,
          className: "HudPreviewStage",
          style: {
            width: Km.width * Pm,
            height: Km.height * Pm
          },
          children: [(0, Qm.jsx)("iframe", {
            ref: Zm,
            className: "HudPreviewFrame",
            title: Im("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: Km.width,
              height: Km.height,
              transform: `scale(${Pm})`
            }
          }), Cm && (0, Fm.createPortal)((0, Qm.jsx)(JT, {
            presence: om,
            portraitPhone: OT,
            hidden: pT,
            actionButtons: pm,
            joystickFixed: Em,
            keysAbove: um,
            auraBar: nm,
            trayState: jT,
            moved: qT
          }), Cm.body), (0, Qm.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...DT.handlers,
            children: [(0, Qm.jsx)("div", {
              ref: Nm,
              className: "HudPreviewSafeZone",
              style: {
                top: Mm.top * Pm,
                right: Mm.right * Pm,
                bottom: Mm.bottom * Pm,
                left: Mm.left * Pm
              }
            }), lm.map(((mm, Tm) => {
              let {
                id: fm,
                box: hm
              } = mm;
              return (0, Qm.jsx)("div", {
                className: "HudPreviewHandle",
                style: QT((0, hT.l)(hm, 40 / Pm))
              }, `${fm}:${Tm}`)
            })), Jm.hudLocked.map((mm => {
              const Tm = sm[mm];
              return Tm && (0, Qm.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: Tm.right * Pm,
                  top: Tm.top * Pm
                },
                children: (0, Qm.jsx)(bm.c, {
                  name: "lock"
                })
              }, mm)
            })), (0, Qm.jsx)("div", {
              ref: em,
              className: "HudPreviewCentreLine",
              style: {
                left: Km.width / 2 * Pm
              }
            }), xm && ET && (0, Qm.jsx)("div", {
              ref: km,
              className: Dm()("HudPreviewRing", {
                Fixed: !Rm(xm),
                Overlap: YT.length > 0
              }),
              style: QT(ET),
              children: (0, Qm.jsx)("span", {
                className: Dm()("HudPreviewRingLabel", Ef(xm, oT, sm, Pm, Km)),
                children: oT
              })
            })]
          })]
        })
      })
    }

    function Yf(mm, Tm) {
      (0, Am.useEffect)((() => {
        var fm;
        null === (fm = mm.current) || void 0 === fm || fm.toggleAttribute("inert", Tm)
      }), [mm, Tm])
    }
    const qf = "hudFullScreen";

    function jf(mm) {
      let {
        onScale: Tm,
        onHidden: fm,
        onReset: am,
        locked: xm,
        lockable: wm,
        onLocked: Dm,
        onClose: Rm,
        ...pm
      } = mm;
      const {
        t: Em
      } = (0, hm.A)(), om = (0, Am.useRef)(null);
      (0, mT.s)("popup", om, Rm),
      function(mm) {
        const Tm = (0, Am.useRef)(mm);
        Tm.current = mm, (0, Am.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [qf]: !0
          }, "");
          let mm = !1;
          const fm = () => {
            mm = !0, Tm.current()
          };
          return window.addEventListener("popstate", fm), () => {
            var Tm;
            window.removeEventListener("popstate", fm), !mm && null !== (Tm = window.history.state) && void 0 !== Tm && Tm[qf] && window.history.back()
          }
        }), [])
      }(Rm), (0, Am.useEffect)((() => {
        function mm(mm) {
          "Escape" === mm.key && (mm.stopPropagation(), Rm())
        }
        return window.addEventListener("keydown", mm, !0), () => {
          window.removeEventListener("keydown", mm, !0)
        }
      }), [Rm]);
      const {
        selected: Om
      } = pm, Ym = (0, Am.useRef)(null), qm = (0, Am.useRef)(null), [jm, Vm] = (0, Am.useState)(!1);
      Yf(qm, !jm);
      const [Im, Km] = (0, Am.useState)(null), [nm, Jm] = (0, Am.useState)([]), [cm, zm] = cT(), Zm = (0, Am.useRef)(pm.selected);
      Zm.current = pm.selected;
      const km = (0, Am.useRef)({}),
        bm = (0, Am.useCallback)((() => {
          const mm = Ym.current;
          mm && Km(function(mm, Tm, fm) {
            var hm;
            const {
              innerWidth: Am,
              innerHeight: am
            } = window, xm = mm.offsetWidth, wm = mm.offsetHeight, Dm = Math.max(sT()[0], 6), im = [];
            for (const Em of [Dm, .2 * am, .5 * am - wm / 2, .33 * am])
              for (const mm of [.5, .3, .7]) im.push({
                left: Math.max(0, Math.min(Am - xm - 6, Math.max(6, Am * mm - xm / 2))),
                top: Em
              });
            const Rm = im.map((mm => ({
                left: mm.left - 6,
                top: mm.top - 6,
                right: mm.left + xm + 6,
                bottom: mm.top + wm + 6
              }))),
              pm = hf(Tm, fm);
            return im[(0, hT.o)(Rm, pm, {
              avoid: fm && null !== (hm = Tm[fm]) && void 0 !== hm ? hm : null
            })]
          }(mm, km.current, Zm.current))
        }), []),
        Sm = (0, Am.useCallback)(((mm, Tm, fm) => {
          Jm(Tm), zm(fm), km.current = mm, bm()
        }), [bm, zm]);
      return (0, Am.useLayoutEffect)(bm, [pm.selected, bm]), (0, Fm.createPortal)((0, Qm.jsxs)("div", {
        ref: om,
        className: "HudFullScreenEditor",
        children: [(0, Qm.jsx)(Of, {
          ...pm,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: Sm,
          onReady: Vm,
          lockable: wm
        }), (0, Qm.jsxs)("div", {
          ref: Ym,
          className: "HudFullScreenToolbar",
          style: null === Im ? void 0 : {
            left: Im.left,
            top: Im.top,
            transform: "none"
          },
          children: [(0, Qm.jsx)("div", {
            ref: qm,
            className: "HudFullScreenControls",
            children: (0, Qm.jsx)(ZT, {
              selected: Om,
              layout: pm.layout.hudLayouts[pm.orientation],
              actionButtons: pm.actionButtons,
              keyNames: pm.keyNames,
              overlaps: nm,
              scaleCaps: cm,
              onScale: Tm,
              onHidden: fm,
              onReset: am,
              locked: xm,
              lockable: wm,
              onLocked: Dm,
              joystickFixed: pm.joystickFixed
            })
          }), (0, Qm.jsx)(im.e, {
            className: "HudFullScreenDone",
            onClick: Rm,
            padDefaultFocus: !0,
            children: Em("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const Vf = mm => `${Math.round(100*mm)}%`;

    function If(mm) {
      let {
        info: Tm,
        tuple: fm,
        props: Am
      } = mm;
      const {
        t: am
      } = (0, hm.A)();
      return (0, Qm.jsx)(om.m, {
        name: am("hudLayout:size"),
        min: Sm.j,
        max: Sm.i,
        step: zT,
        initValue: fm[2],
        disabled: Am.locked.has(Tm.id),
        selectableMax: Am.scaleCaps[Tm.id],
        cappedNote: am("hudLayout:sizeCapped"),
        format: Vf,
        onChange: mm => {
          Am.onScalePreview(Tm.id, mm)
        },
        onChangeComplete: mm => {
          Am.onScale(Tm.id, mm)
        }
      })
    }

    function Kf(mm) {
      const {
        t: Tm
      } = (0, hm.A)(), {
        present: fm,
        elements: am,
        selected: xm,
        onSelect: wm,
        onHidden: im,
        onReset: Rm,
        note: pm,
        actionButtons: Em,
        keyNames: om,
        sizeBesidePreview: Om,
        locked: Ym,
        lockable: qm,
        onLocked: jm
      } = mm, {
        rowIconsOpen: Vm,
        onRowIconsOpen: Im
      } = mm, Km = (0, Am.useRef)(null), nm = null !== xm && (Vm || !(0, Sm.S)(xm));
      return (0, Am.useEffect)((() => {
        var mm;
        const Tm = xm ? null === (mm = Km.current) || void 0 === mm ? void 0 : mm.querySelector(`[data-hud-row="${xm}"]`) : null;
        if (!Tm) return;
        const fm = Tm.closest(".SettingsMenuRight"),
          hm = performance.now();
        let Am = null;
        const am = () => {
            clearInterval(Dm), null === fm || void 0 === fm || fm.removeEventListener("scroll", wm)
          },
          wm = () => {
            WT() || am()
          },
          Dm = setInterval((() => {
            const mm = performance.now();
            mm - hm > 1500 ? am() : WT() ? Am = null : null === Am ? Am = mm : mm - Am >= 150 && (am(), function(mm) {
              var Tm;
              const fm = mm.closest(".SettingsMenuRight"),
                hm = null === (Tm = mm.closest(".HudLayoutSettings")) || void 0 === Tm ? void 0 : Tm.querySelector(".HudLayoutPreviewBox");
              if (!fm || !hm) return;
              const Am = hm.getBoundingClientRect().bottom + 8,
                am = fm.getBoundingClientRect().bottom - 8,
                xm = mm.getBoundingClientRect();
              xm.top < Am ? fm.scrollBy({
                top: xm.top - Am,
                behavior: "smooth"
              }) : xm.bottom > am && fm.scrollBy({
                top: Math.min(xm.bottom - am, xm.top - Am),
                behavior: "smooth"
              })
            }(Tm))
          }), 50);
        return null === fm || void 0 === fm || fm.addEventListener("scroll", wm, {
          passive: !0
        }), am
      }), [xm, nm]), (0, Qm.jsx)("div", {
        ref: Km,
        className: "SettingBoxGroup HudElementList",
        children: Hm.filter((mm => fm.has(mm.id) && (Vm || !(0, Sm.S)(mm.id)))).map((fm => {
          const hm = ((mm, Tm) => {
              var fm;
              return null !== (fm = mm[Tm]) && void 0 !== fm ? fm : Sm.m
            })(am, fm.id),
            Am = (0, Sm.u)(am, fm.id),
            Km = fm.id === xm,
            nm = fm.scale && !Om,
            Jm = pm(fm.id, Km);
          return (0, Qm.jsxs)("div", {
            "data-hud-row": fm.id,
            className: Dm()("SettingBox HudElementRow", {
              Open: Km,
              Hidden: Am,
              Child: void 0 !== fm.parent
            }),
            children: [(0, Qm.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, Qm.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": nm ? Km : void 0,
                onClick: () => {
                  wm(fm.id)
                },
                children: [rm(fm.id, Em, Tm, om), fm.scale && 1 !== hm[2] && !(Km && nm) && (0, Qm.jsx)("span", {
                  className: "HudElementRowSize",
                  children: Vf(hm[2])
                }), nm && (0, Qm.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, Qm.jsx)(Bm, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: fm.id,
                actionButtons: Em,
                keyNames: om,
                locked: Ym.has(fm.id),
                lockable: qm(fm.id),
                onLocked: jm
              }), "menu" === fm.id && (0, Qm.jsx)(Lm, {
                className: "HudElementRowIcon",
                open: Vm,
                name: rm(fm.id, Em, Tm, om),
                onToggle: Im
              }), "menu" !== fm.id && (0, Qm.jsx)(Mm, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: fm.id,
                elements: am,
                actionButtons: Em,
                keyNames: om,
                onHidden: im
              }), (0, Qm.jsx)(um, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: Ym.has(fm.id),
                id: fm.id,
                elements: am,
                actionButtons: Em,
                keyNames: om,
                onReset: Rm
              })]
            }), Km && nm && (0, Qm.jsx)(If, {
              info: fm,
              tuple: hm,
              props: mm
            }), Jm && (0, Qm.jsx)("div", {
              className: "HudElementNote",
              children: Jm
            })]
          }, fm.id)
        }))
      })
    }

    function Qf(mm) {
      let {
        preview: Tm,
        quick: fm,
        onFullScreen: am,
        resting: xm,
        onSidePanel: wm
      } = mm;
      const {
        t: Dm
      } = (0, hm.A)(), Rm = of(), pm = (0, Am.useRef)(null), {
        width: Em
      } = (0, fT.d)(pm), om = Math.floor(Rm.width * Math.min(1, Tm.maxHeight / Rm.height)), Om = Em - om - 12, Ym = Om >= 130, qm = Em > 0;
      (0, Am.useEffect)((() => {
        qm && wm(Ym)
      }), [qm, Ym, wm]);
      const jm = (0, hT.w)(Ym ? om : Em, Rm.width, Rm.height, Tm.maxHeight),
        Vm = xm ? (0, Qm.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: Rm.height * jm
          }
        }) : (0, Qm.jsx)(Of, {
          ...Tm
        }),
        Im = mm => (0, Qm.jsxs)(im.V, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: Dm("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: am,
          children: [(0, Qm.jsx)(bm.c, {
            name: "expand"
          }), mm && (0, Qm.jsx)("span", {
            children: Dm("hudLayout:fullScreen")
          })]
        });
      return (0, Qm.jsxs)("div", {
        ref: pm,
        className: "SettingBox HudLayoutPreviewBox",
        children: [Em > 0 && Ym && (0, Qm.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, Qm.jsx)("div", {
            style: {
              width: om
            },
            children: Vm
          }), (0, Qm.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, Qm.jsx)(ZT, {
              selected: Tm.selected,
              ...fm,
              joystickFixed: Tm.joystickFixed,
              extra: Im(!Tm.selected || Om >= 278)
            })
          })]
        }), Em > 0 && !Ym && (0, Qm.jsxs)(Qm.Fragment, {
          children: [Vm, (0, Qm.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: Im(!1)
          })]
        })]
      })
    }
    var nf = fm(2455),
      Jf = fm(4341),
      zf = fm(2427),
      Zf = fm(2388);
    const kf = mm => {
      const Tm = aT.m * ("sides" === mm ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(Tm / 2))
    };

    function bf(mm, Tm, fm) {
      const [hm, Am, am, xm] = mm;
      return "sides" === Tm ? [hm, fm, am, fm] : [fm, Am, fm, xm]
    }
    const Sf = [null, null, null, null],
      ef = mm => `${mm}px`;

    function Nf(mm) {
      let {
        safe: Tm,
        onPreview: fm,
        onCommit: am
      } = mm;
      const {
        t: xm
      } = (0, hm.A)(), wm = (0, aT.q)(null !== Tm && void 0 !== Tm ? Tm : Sf, window.innerWidth, window.innerHeight, lT(document).map(Math.round)), Dm = (0, Am.useRef)(null !== Tm && void 0 !== Tm ? Tm : Sf);
      Dm.current = null !== Tm && void 0 !== Tm ? Tm : Sf;
      const Rm = mm => {
        const Tm = Math.min(kf(mm), "sides" === mm ? Math.max(wm[1], wm[3]) : Math.max(wm[0], wm[2]));
        return (0, Qm.jsx)(om.m, {
          name: xm("sides" === mm ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: kf(mm),
          step: 2,
          initValue: Tm,
          format: ef,
          onChange: Tm => {
            fm(bf(Dm.current, mm, Tm))
          },
          onChangeComplete: hm => {
            if (hm === Tm) return void fm(Dm.current);
            const Am = bf(Dm.current, mm, hm);
            Dm.current = Am, am(Am), (0, cm.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: mm
            })
          }
        })
      };
      return (0, Qm.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, Qm.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, Qm.jsx)("div", {
            children: xm("hudLayout:safeZone")
          }), (0, Qm.jsx)(im.V, {
            active: null === Tm,
            pressed: null === Tm,
            onClick: () => {
              am(null)
            },
            children: xm("hudLayout:safeZoneAuto")
          })]
        }), Rm("sides"), Rm("ends")]
      })
    }

    function Gf() {
      var mm, Tm;
      const {
        t: fm
      } = (0, hm.A)(), am = (0, Sm.hb)(), {
        clientEscMenuOptions: xm
      } = (0, Rm.m)(["clientEscMenuOptions"]), wm = (0, nf.g)(), Dm = am.hudLayouts[wm], [pm, Em] = (0, Am.useState)(null), {
        rowIconsOpen: Om,
        onRowIconsOpen: Ym,
        select: qm
      } = function(mm, Tm) {
        const [fm, hm] = (0, Am.useState)((() => Sm.D.some((Tm => void 0 !== mm.hudElements[Tm] || mm.hudLocked.includes(Tm))))), am = (0, Am.useCallback)((mm => {
          Tm(mm), (0, Sm.S)(mm) && hm(!0)
        }), [Tm]);
        return {
          rowIconsOpen: fm,
          onRowIconsOpen: hm,
          select: am
        }
      }(Dm, Em), [jm, Vm] = (0, Am.useState)([]), [Im, Km] = (0, Am.useState)(null), [nm, Jm] = cT(), Zm = (0, Am.useCallback)(((mm, Tm, fm) => {
        Vm(Tm), Jm(fm);
        const hm = Object.keys(mm);
        Km((mm => (null === mm || void 0 === mm ? void 0 : mm.size) === hm.length && hm.every((Tm => mm.has(Tm))) ? mm : new Set(hm)))
      }), [Jm]), {
        gameState: km
      } = (0, Rm.m)(["gameState"]), bm = (0, zf.h)(), em = null !== (mm = null === (Tm = (0, Zf.q)()) || void 0 === Tm ? void 0 : Tm.icon) && void 0 !== mm ? mm : null, [Nm] = (0, Am.useState)((() => "inGame" === km ? function(mm, Tm, fm) {
        const hm = mm.querySelector(".InGameUi .TouchComponentsButtons");
        if (!hm) return DT;
        const Am = {},
          am = {};
        for (const Rm of wT) {
          const mm = hm.querySelector(`.TouchSlot${Rm} > .TouchKey`);
          if (mm) {
            var xm, wm;
            Am[Rm] = mm.cloneNode(!0);
            const Tm = (null !== (xm = null === (wm = mm.querySelector(".TouchKeyLabel")) || void 0 === wm ? void 0 : wm.textContent) && void 0 !== xm ? xm : "").split(/\s+/).filter((mm => !/[\d\xd7]/.test(mm))).join(" ");
            Tm && (am[Rm] = Tm)
          }
        }
        const Dm = Tm => {
            const fm = mm.querySelector(`.InGameUi ${Tm}`);
            return null !== fm && !fm.classList.contains("Hidden")
          },
          im = [...mm.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((mm => mm.cloneNode(!0)));
        return {
          faces: Object.keys(Am).length > 0 ? Am : null,
          names: am,
          shop: Dm(".TouchInventoryKey.ShopKey"),
          bag: Dm(".TouchInventoryKey.BagKey"),
          items: im.length > 0 ? im : null,
          rowIcons: Tm,
          pinnedIcon: fm
        }
      }(document, bm, em) : DT)), Gm = (0, Am.useRef)(null), Xm = (0, Am.useRef)(null), Pm = function(mm) {
        const [Tm, fm] = (0, Am.useState)((() => .4 * window.innerHeight));
        return (0, Am.useLayoutEffect)((() => {
          var Tm;
          const hm = null === (Tm = mm.current) || void 0 === Tm ? void 0 : Tm.closest(".SettingsMenuRight");
          if (!hm) return;
          const Am = () => {
            const mm = hm.clientHeight < Xf ? .4 : .5;
            fm(Math.max(80, hm.clientHeight * mm - 24))
          };
          Am();
          const am = new ResizeObserver(Am);
          return am.observe(hm), () => {
            am.disconnect()
          }
        }), [mm]), Tm
      }(Xm), Cm = (0, Jf.m)(xm.joystickMode), rm = xm.touchActionButtons, lm = (0, Am.useMemo)((() => function(mm, Tm) {
        const fm = {},
          hm = [
            ["extra", "X"],
            ["game", "G"]
          ];
        Tm || hm.push(["attack", "P"]);
        for (const [Am, am] of hm) {
          const Tm = mm.names[am];
          Tm && (fm[Am] = Tm)
        }
        return fm
      }(Nm, rm)), [Nm, rm]);
      (0, Am.useEffect)((() => {
        (0, cm.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [Mm, um] = (0, Am.useState)(!1), [Bm, Lm] = (0, Am.useState)(!1), tm = (0, Am.useRef)(null);
      Yf(tm, !Bm);
      const [Um, dm] = (0, Am.useState)(!1), Fm = (0, Am.useCallback)((() => {
        dm(!1)
      }), []), mT = (0, Am.useMemo)((() => new Set(Dm.hudLocked)), [Dm.hudLocked]), TT = mm => {
        var Tm, fm;
        const hm = (0, Sm.q)(),
          Am = mm(hm);
        (0, Sm.bb)(null !== (Tm = null === (fm = Gm.current) || void 0 === fm ? void 0 : fm.keepLocks(hm, Am)) && void 0 !== Tm ? Tm : Am)
      }, fT = (mm, Tm) => {
        TT((fm => (0, Sm.ib)(fm, wm, mm, Tm)))
      }, hT = (mm, Tm, fm) => {
        fT(mm, {
          dx: Tm,
          dy: fm
        }), (0, cm.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${mm}`
        })
      }, aT = (mm, Tm) => {
        TT((fm => (0, Sm.mb)(fm, wm, mm, Tm)))
      }, xT = mm => {
        const Tm = ym[mm];
        return (Tm.move || Tm.scale) && ("joystick" !== mm || Cm) && !(0, AT.w)(mm, Dm.hudElements[mm])
      }, iT = mm => ym[mm].move && ("joystick" !== mm || Cm) && !mT.has(mm), RT = new Set(Hm.map((mm => mm.id)).filter((mm => {
        const Tm = (0, Sm.S)(mm) && !Nm.rowIcons.includes(mm);
        return null === Im || Im.has(mm) || (0, Sm.u)(Dm.hudElements, mm) && !Tm
      }))), pT = {
        present: RT,
        actionButtons: rm,
        keyNames: lm,
        scaleCaps: nm,
        sizeBesidePreview: Mm,
        elements: Dm.hudElements,
        selected: pm,
        onSelect: qm,
        rowIconsOpen: Om,
        onRowIconsOpen: Ym,
        onScalePreview: (mm, Tm) => {
          var fm;
          null === (fm = Gm.current) || void 0 === fm || fm.setScale(mm, Tm)
        },
        onScale: (mm, Tm) => {
          fT(mm, {
            scale: Tm
          }), (0, cm.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${mm}`
          })
        },
        onHidden: (mm, Tm) => {
          fT(mm, {
            hidden: Tm
          }), (0, cm.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${Tm?"hide":"show"}:${mm}`
          })
        },
        onReset: mm => {
          fT(mm, Sm.c)
        },
        locked: mT,
        lockable: xT,
        onLocked: aT,
        note: (mm, Tm) => {
          const hm = Tm && jm.length > 0 ? fm("hudLayout:overlapsNote", {
            names: sm(jm, rm, fm, lm)
          }) : null;
          return Tm && gm(mm, Cm) ? (0, Qm.jsxs)(Qm.Fragment, {
            children: [hm && (0, Qm.jsx)("span", {
              children: hm
            }), (0, Qm.jsx)("span", {
              children: fm("hudLayout:floatingJoystickNote")
            }), !Mm && (0, Qm.jsx)(Wm, {})]
          }) : hm || (Tm && mT.has(mm) ? fm("hudLayout:lockedNote") : Tm && "cluster" === mm ? fm("hudLayout:clusterNote") : Tm && "menu" === mm ? fm("hudLayout:menuNote") : Tm && (0, AT.w)(mm, Dm.hudElements[mm]) && iT(mm) ? fm("hudLayout:rowIconNote") : Tm && "arrows" === mm ? fm("hudLayout:arrowsNote") : "inventory" === mm && (0, Sm.u)(Dm.hudElements, "inventory") ? fm("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, Qm.jsxs)("div", {
        ref: Xm,
        className: "HudLayoutSettings",
        children: [(0, Qm.jsxs)("div", {
          ref: tm,
          className: "HudLayoutBody",
          children: [(0, Qm.jsx)("div", {
            className: "HudLayoutOrientation",
            children: fm("landscape" === wm ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, Qm.jsx)(Qf, {
            preview: {
              layout: am,
              orientation: wm,
              selected: pm,
              onSelect: qm,
              onMove: hT,
              canMove: iT,
              actionButtons: rm,
              joystickFixed: Cm,
              presence: Nm,
              keyNames: lm,
              maxHeight: Pm,
              apiRef: Gm,
              onMeasured: Zm,
              onReady: Lm,
              lockable: xT
            },
            quick: {
              layout: Dm,
              actionButtons: rm,
              keyNames: lm,
              scaleCaps: nm,
              overlaps: jm,
              onScale: pT.onScale,
              onHidden: pT.onHidden,
              onReset: pT.onReset,
              locked: mT,
              lockable: xT,
              onLocked: aT
            },
            onFullScreen: () => {
              dm(!0)
            },
            resting: Um,
            onSidePanel: um
          }), Um && (0, Qm.jsx)(jf, {
            layout: am,
            orientation: wm,
            selected: pm,
            onSelect: qm,
            onMove: hT,
            canMove: iT,
            actionButtons: rm,
            joystickFixed: Cm,
            presence: Nm,
            keyNames: lm,
            onScale: pT.onScale,
            onHidden: pT.onHidden,
            onReset: pT.onReset,
            locked: mT,
            lockable: xT,
            onLocked: aT,
            apiRef: Gm,
            onClose: Fm
          }), (0, Qm.jsx)(Nf, {
            safe: Dm.hudSafe,
            onCommit: mm => {
              TT((Tm => (0, Sm.ob)(Tm, wm, mm)))
            },
            onPreview: mm => {
              var Tm;
              null === (Tm = Gm.current) || void 0 === Tm || Tm.setSafe(mm)
            }
          }), (0, Qm.jsx)(om.e, {
            label: fm("hudLayout:snapCentre"),
            checked: am.hudSnapCentre,
            onClick: mm => {
              (0, Sm.$)(mm)
            },
            circleInfoText: fm("hudLayout:snapCentreInfo")
          }), (0, Qm.jsx)(Kf, {
            ...pT
          }), (0, Qm.jsx)(om.i, {
            label: fm("hudLayout:shape"),
            options: Sm.H.map((mm => ({
              value: mm,
              label: fm(`hudLayout:shape_${mm}`)
            }))),
            value: am.hudShape,
            onChange: mm => {
              TT((Tm => ({
                ...Tm,
                hudShape: mm
              }))), (0, cm.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: mm
              })
            }
          }), (0, Qm.jsx)(om.m, {
            name: fm("hudLayout:opacity"),
            min: Sm.e,
            max: 1,
            step: .05,
            initValue: am.hudKeyOpacity,
            format: mm => `${Math.round(100*mm)}%`,
            circleInfoText: fm("hudLayout:opacityInfo"),
            onChange: mm => {
              var Tm;
              null === (Tm = Gm.current) || void 0 === Tm || Tm.setOpacity(mm)
            },
            onChangeComplete: mm => {
              (0, Sm.X)(mm), (0, cm.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, Qm.jsx)(im.O, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const mm = zm.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await mm.getResult() && (0, Sm.W)()
            }()
          },
          children: fm("hudLayout:resetAll")
        })]
      })
    }
    const Xf = 350;
    const Pf = [function() {
      const {
        t: mm
      } = (0, hm.A)(), [Tm, fm] = (0, Am.useState)(!1), am = (0, Am.useRef)(null);
      return (0, Am.useEffect)((() => {
        var mm;
        Tm && (null === (mm = am.current) || void 0 === mm || mm.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [Tm]), (0, Qm.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, Qm.jsx)(Zm.b, {
          ref: am,
          icon: "arrows-up-down-left-right",
          title: mm("hudLayout:title"),
          sub: mm("hudLayout:entrySub"),
          expanded: Tm,
          onClick: () => {
            fm(!Tm)
          }
        }), Tm && (0, Qm.jsx)(Gf, {})]
      })
    }, function() {
      const {
        t: mm
      } = (0, hm.A)(), {
        joystickMode: Tm,
        touchSpeedCurve: fm,
        autorun: Am,
        jumpLock: am
      } = (0, Rm.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, Qm.jsxs)(Qm.Fragment, {
        children: [(0, Qm.jsx)(om.i, {
          label: mm("settingsMenu:joystick"),
          options: Km.wb.map((Tm => ({
            value: Tm,
            label: mm(nm[Tm])
          }))),
          value: Tm,
          onChange: mm => {
            Rm.c.setClientEscMenuOptions({
              joystickMode: mm
            })
          },
          circleInfoText: mm("settingsMenu:joystickInfo")
        }), (0, Qm.jsx)(om.e, {
          label: mm("settingsMenu:preciseWalking"),
          checked: fm,
          onClick: mm => {
            Rm.c.setClientEscMenuOptions({
              touchSpeedCurve: mm
            })
          },
          circleInfoText: mm("settingsMenu:preciseWalkingInfo")
        }), (0, Qm.jsx)(om.e, {
          label: mm("settingsMenu:autoRun"),
          checked: Am,
          onClick: mm => {
            Rm.c.setClientEscMenuOptions({
              autorun: mm
            })
          },
          circleInfoText: mm("settingsMenu:autoRunInfo")
        }), (0, Qm.jsx)(om.e, {
          label: mm("settingsMenu:jumpLock"),
          checked: am,
          onClick: mm => {
            Rm.c.setClientEscMenuOptions({
              jumpLock: mm
            })
          },
          circleInfoText: mm("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, Qm.jsx)(Im.c, {})
    }, function() {
      const {
        t: mm
      } = (0, hm.A)(), {
        clientEscMenuOptions: Tm
      } = (0, Rm.m)(["clientEscMenuOptions"]);
      return (0, Jm.c)() ? (0, Qm.jsx)(om.e, {
        label: mm("settingsMenu:vibration"),
        checked: Tm.vibration,
        onClick: mm => {
          Rm.c.setClientEscMenuOptions({
            vibration: mm
          })
        },
        circleInfoText: mm("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Hf() {
      return (0, Qm.jsx)(Qm.Fragment, {
        children: Pf.map(((mm, Tm) => (0, Qm.jsx)(mm, {}, Tm)))
      })
    }
    var yf = fm(4309);

    function Cf() {
      const {
        t: mm
      } = (0, hm.A)(), {
        isTouchScreen: Tm,
        clientEscMenuOptions: fm,
        gameState: xm
      } = (0, Rm.m)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), wm = (0, Om.g)("ezBridging"), Dm = (0, Om.g)("ezTowering"), qm = "inGame" !== xm || !0 === wm, jm = (0, Ym.g)() && ("inGame" !== xm || !0 === Dm), [, Im] = (0, Am.useReducer)((mm => mm + 1), 0), Km = (0, Vm.e)(), [nm, Jm] = (0, Am.useState)(yf.f);
      return (0, Qm.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [Km && (0, Qm.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, Qm.jsx)("div", {
            children: mm("controller:settingsControlsNote")
          }), (0, Qm.jsx)(im.V, {
            onClick: () => {
              Rm.c.set({
                openSettingsCategory: "controller"
              })
            },
            children: mm("controller:settingsOpenController")
          })]
        }), (0, pm.isTouchscreen)() && !(0, pm.isMobile)() ? (0, Qm.jsx)(Qm.Fragment, {
          children: (0, Qm.jsx)(om.e, {
            label: mm("settingsMenu:useTouchControls"),
            checked: nm,
            onClick: mm => {
              (0, yf.d)(mm), Jm(mm)
            }
          })
        }) : null, Tm && (0, Qm.jsx)(Hf, {}), qm && (0, Qm.jsx)(om.e, {
          label: mm("settingsMenu:ezBridging"),
          checked: fm.ezBridging,
          onClick: mm => {
            Rm.c.setClientEscMenuOptions({
              ezBridging: mm
            })
          },
          circleInfoText: mm("settingsMenu:ezBridgingInfo")
        }), jm && (0, Qm.jsx)(om.e, {
          label: mm("settingsMenu:ezTowering"),
          checked: fm.ezTowering,
          onClick: mm => {
            Rm.c.setClientEscMenuOptions({
              ezTowering: mm
            })
          },
          circleInfoText: mm("settingsMenu:ezToweringInfo")
        }), (0, Qm.jsx)(om.e, {
          label: mm("settingsMenu:crouchToggle"),
          checked: fm.crouchIsToggle,
          onClick: mm => {
            Rm.c.setClientEscMenuOptions({
              crouchIsToggle: mm
            })
          },
          circleInfoText: mm("settingsMenu:crouchToggleInfo")
        }), (0, Qm.jsx)(om.e, {
          label: mm("settingsMenu:hideUiToggle"),
          checked: fm.hideUiIsToggle,
          onClick: mm => {
            Rm.c.setClientEscMenuOptions({
              hideUiIsToggle: mm
            })
          },
          circleInfoText: mm("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, Em.d)() && (0, Qm.jsx)(om.m, {
          name: mm("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: fm.touchscreenSensitivity,
          onChange: mm => {
            Rm.c.setClientEscMenuOptions({
              touchscreenSensitivity: mm
            })
          }
        }), !(0, pm.isMobile)() && (0, Qm.jsx)(om.m, {
          name: mm("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: fm.mouseSensitivity,
          onChange: mm => {
            Rm.c.setClientEscMenuOptions({
              mouseSensitivity: mm
            })
          }
        }), !(0, pm.isMobile)() && (0, Qm.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, Qm.jsx)("div", {
            className: "SliderText",
            children: mm("settingsMenu:keyBindings")
          }), am.e.map((Tm => (0, Qm.jsx)(rf, {
            title: mm(Tm.name.translationKey, Tm.name.params),
            defaultOpen: am.i.has(Tm.id),
            children: Tm.actions.map((mm => (0, Qm.jsx)(sf, {
              noaAction: mm,
              forceUpdate: Im,
              clashesWith: Tm.clashesWith,
              showPadGlyph: Km
            }, mm)))
          }, Tm.name.translationKey))), (0, Qm.jsx)(im.O, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, am.B)(), Im()
            },
            children: mm("controls:resetBindings")
          })]
        })]
      })
    }

    function rf(mm) {
      let {
        title: Tm,
        defaultOpen: fm,
        children: hm
      } = mm;
      const [am, xm] = (0, Am.useState)(fm);
      return (0, Qm.jsxs)("div", {
        className: Dm()("ControlsSection", {
          Collapsed: !am
        }),
        children: [(0, Qm.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            xm(!am)
          },
          children: [(0, Qm.jsx)("div", {
            className: "ControlsSectionTitle",
            children: Tm
          }), (0, Qm.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), am && (0, Qm.jsx)("div", {
          className: "ControlsSectionRows",
          children: hm
        })]
      })
    }

    function sf(mm) {
      let {
        noaAction: Tm,
        forceUpdate: fm,
        clashesWith: wm,
        showPadGlyph: Rm
      } = mm;
      const {
        t: pm
      } = (0, hm.A)(), Em = (0, jm.d)(Tm), [om, Om] = (0, Am.useState)(!1), [Ym, Vm] = (0, Am.useState)("controls:clickToEnterNewBinding"), [Im, Km] = (0, Am.useState)(null), [nm, Jm] = (0, Am.useState)(null), cm = (0, Am.useRef)(null);
      (0, Am.useEffect)((() => {
        om && cm.current && cm.current.focus()
      }), [om]);
      const zm = am.r[Tm].filter((mm => xm.g[mm]));
      let Zm = null;
      const km = [],
        bm = wm.flatMap((mm => {
          var Tm, fm;
          return null !== (Tm = null === (fm = am.e.find((Tm => Tm.id === mm))) || void 0 === fm ? void 0 : fm.actions) && void 0 !== Tm ? Tm : []
        }));
      for (const hm of bm) {
        if (hm === Tm) continue;
        const mm = am.r[hm];
        for (const Tm of mm) zm.includes(Tm) && km.push(pm(am.u[hm].translationKey, am.u[hm].params))
      }
      km.length > 0 && (Zm = pm("controls:sharedBindingsWarning") + " ", Zm += km.join(", "));
      const Sm = () => {
          Om(!1), Km(null), Vm("controls:clickToEnterNewBinding"), Jm(null)
        },
        em = () => "BindingInput_" + Tm;
      return (0, Qm.jsxs)("div", {
        className: Dm()("ControlRow", {
          WarningBorder: null !== Zm
        }),
        children: [(0, Qm.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, Qm.jsxs)("div", {
            className: "ControlName",
            children: [pm(am.u[Tm].translationKey, am.u[Tm].params), Rm && Em && (0, Qm.jsx)(qm.c, {
              glyph: Em,
              className: "ControlPadGlyph"
            })]
          }), (0, Qm.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, Qm.jsxs)("div", {
              className: "ControlBindingsList",
              children: [zm.map((mm => (0, Qm.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, Qm.jsx)("div", {
                  children: (0, am.k)(mm)
                }), (0, Qm.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const hm = (0, am.v)(Tm, mm);
                    hm.isError() ? Jm(hm.asError().message) : Jm(null), fm()
                  },
                  children: "\xd7"
                })]
              }, mm))), !om && (0, Qm.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  Om(!0), Jm(null)
                },
                children: (0, Qm.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), om && (0, Qm.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, Qm.jsxs)("div", {
                className: "InputContainer",
                children: [(0, Qm.jsx)("div", {
                  className: "InputOverlay",
                  children: Im ? (0, am.k)(Im) : (0, Qm.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: pm(Ym)
                  })
                }), (0, Qm.jsx)("input", {
                  ref: cm,
                  id: em(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: mm => {
                    if ("Escape" === mm.code) return Sm(), mm.preventDefault(), void mm.stopPropagation();
                    const Tm = mm.code;
                    xm.b.includes(Tm) ? (Jm(null), Km(Tm)) : (Jm("controls:keyIsReserved"), Km(null)), mm.preventDefault(), mm.stopPropagation()
                  },
                  onMouseDown: mm => {
                    const Tm = "Mouse" + (mm.button + 1);
                    document.activeElement && document.activeElement.id === em() ? xm.b.includes(Tm) ? (Jm(null), Km(Tm)) : (Jm("controls:keyIsReserved"), Km(null)) : Vm("controls:enterNewBinding"), mm.stopPropagation()
                  },
                  onBlur: () => {
                    Vm("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, Qm.jsx)(im.e, {
                onPointerDown: mm => {
                  mm.preventDefault()
                },
                onClick: () => {
                  (0, am.b)(Tm, Im), fm(), Sm()
                },
                className: "ControlBindingAddButton",
                disabled: null === Im,
                children: pm("general:add")
              }), (0, Qm.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  Sm()
                },
                children: "\xd7"
              })]
            }), nm && (0, Qm.jsx)("div", {
              className: "ControlBindingError",
              children: pm(nm)
            })]
          })]
        }), Zm && (0, Qm.jsx)("div", {
          className: "ControlRowWarning",
          children: Zm
        })]
      })
    }
  },
  8833: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm
    });
    var hm = fm(59),
      Am = fm(1089),
      am = fm(1135);
    const xm = (0, hm.forwardRef)((function(mm, Tm) {
      let {
        icon: fm,
        title: hm,
        sub: xm,
        expanded: wm,
        onClick: Dm
      } = mm;
      return (0, am.jsxs)("button", {
        ref: Tm,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": wm,
        onClick: Dm,
        children: [(0, am.jsx)(Am.c, {
          name: fm,
          className: "FeaturedSettingsEntryIcon"
        }), (0, am.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, am.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: hm
          }), (0, am.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: xm
          })]
        }), (0, am.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  8842: (mm, Tm, fm) => {
    function hm(mm) {
      return {
        x: (mm.left + mm.right) / 2,
        y: (mm.top + mm.bottom) / 2
      }
    }

    function Am(mm) {
      return 0 === mm.length ? null : mm.reduce(((mm, Tm) => ({
        left: Math.min(mm.left, Tm.left),
        top: Math.min(mm.top, Tm.top),
        right: Math.max(mm.right, Tm.right),
        bottom: Math.max(mm.bottom, Tm.bottom)
      })))
    }

    function am(mm, Tm) {
      const fm = Math.max(0, (Tm - (mm.right - mm.left)) / 2),
        hm = Math.max(0, (Tm - (mm.bottom - mm.top)) / 2);
      return {
        left: mm.left - fm,
        top: mm.top - hm,
        right: mm.right + fm,
        bottom: mm.bottom + hm
      }
    }

    function xm(mm, Tm) {
      return Tm.x >= mm.left && Tm.x <= mm.right && Tm.y >= mm.top && Tm.y <= mm.bottom
    }

    function wm(mm, Tm, fm) {
      let Am = null,
        wm = 1 / 0;
      for (const {
          id: hm,
          box: am
        }
        of Tm) {
        const Tm = (am.right - am.left) * (am.bottom - am.top);
        xm(am, mm) && Tm < wm && (wm = Tm, Am = hm)
      }
      if (null !== Am) return Am;
      let Dm = 1 / 0;
      for (const {
          id: im,
          box: Rm
        }
        of Tm) {
        if (!xm(am(Rm, fm), mm)) continue;
        const Tm = hm(Rm),
          wm = Math.hypot(mm.x - Tm.x, mm.y - Tm.y);
        wm < Dm && (Dm = wm, Am = im)
      }
      return Am
    }

    function Dm(mm, Tm, fm) {
      return {
        left: fm.left,
        top: fm.top,
        right: mm - fm.right,
        bottom: Tm - fm.bottom
      }
    }

    function im(mm, Tm, fm, hm) {
      const Am = (mm, Tm, fm) => Math.max(Math.min(Tm, 0), Math.min(Math.max(fm, 0), mm));
      return {
        x: Am(Tm, hm.left - mm.left, hm.right - mm.right),
        y: Am(fm, hm.top - mm.top, hm.bottom - mm.bottom)
      }
    }

    function Rm(mm, Tm, fm, hm, Am) {
      const am = mm.dx * hm + Tm,
        xm = mm.dy * Am + fm,
        wm = mm => Math.max(-1, Math.min(1, mm));
      return {
        dx: wm(am / hm),
        dy: wm(xm / Am)
      }
    }

    function pm(mm, Tm, fm, hm) {
      return Tm <= 0 || fm <= 0 ? 1 : Math.max(.05, Math.min(1, mm / Tm, hm / fm))
    }

    function Em(mm, Tm, fm) {
      return Math.min(mm.right, Tm.right) - Math.max(mm.left, Tm.left) > fm && Math.min(mm.bottom, Tm.bottom) - Math.max(mm.top, Tm.top) > fm
    }

    function om(mm, Tm) {
      const fm = (mm, Tm, fm, hm) => Tm - mm > hm - fm ? fm - mm > Tm - hm ? hm - Tm : fm - mm : mm < fm ? fm - mm : Tm > hm ? hm - Tm : 0;
      return {
        x: fm(mm.left, mm.right, Tm.left, Tm.right),
        y: fm(mm.top, mm.bottom, Tm.top, Tm.bottom)
      }
    }

    function Om(mm, Tm) {
      let {
        avoid: fm = null,
        bounds: hm = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Am = 0, am = 1 / 0;
      return mm.forEach(((mm, xm) => {
        const wm = Tm.filter((Tm => Em(mm, Tm, 0))).length,
          Dm = null !== hm && (mm.left < hm.left || mm.top < hm.top || mm.right > hm.right || mm.bottom > hm.bottom),
          im = wm + (fm && Em(mm, fm, 0) ? 1e3 : 0) + (Dm ? 1e6 : 0);
        im < am && (Am = xm, am = im)
      })), Am
    }
    fm.d(Tm, {
      B: () => om,
      C: () => Am,
      b: () => hm,
      c: () => xm,
      f: () => Em,
      h: () => im,
      l: () => am,
      o: () => Om,
      r: () => Rm,
      v: () => wm,
      w: () => pm,
      z: () => Dm
    })
  },
  8603: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      h: () => hm
    });
    const hm = "controllerOpenKeyboard",
      Am = "controllerKeyboardVisible"
  },
  8606: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => jm,
      h: () => qm,
      k: () => Rm,
      l: () => Vm,
      o: () => Im,
      p: () => Em
    });
    var hm = fm(1668),
      Am = fm(1722);
    const am = mm => mm >= 56320 && mm <= 57343,
      xm = mm => mm >= 55296 && mm <= 56319,
      wm = (mm, Tm) => Tm >= 2 && am(mm.charCodeAt(Tm - 1)) && xm(mm.charCodeAt(Tm - 2)) ? Tm - 2 : Math.max(0, Tm - 1),
      Dm = (mm, Tm) => {
        let fm;
        var hm, Am;
        return fm = mm.start !== mm.end ? Tm < 0 ? mm.start : mm.end : Tm < 0 ? wm(mm.value, mm.start) : (hm = mm.value, (Am = mm.start) + 1 < hm.length && xm(hm.charCodeAt(Am)) && am(hm.charCodeAt(Am + 1)) ? Am + 2 : Math.min(hm.length, Am + 1)), {
          value: mm.value,
          start: fm,
          end: fm
        }
      },
      im = ["text", "search", "url", "email", "tel", "password", "number"],
      Rm = mm => !(!(0, Am.b)(mm) || mm.isContentEditable || mm.hasAttribute("data-pad-no-osk")) && (mm instanceof HTMLTextAreaElement || mm instanceof HTMLInputElement && im.includes(mm.type)),
      pm = mm => null !== mm.selectionStart,
      Em = mm => {
        var Tm, fm;
        const {
          value: hm
        } = mm;
        return {
          value: hm,
          start: null !== (Tm = mm.selectionStart) && void 0 !== Tm ? Tm : hm.length,
          end: null !== (fm = mm.selectionEnd) && void 0 !== fm ? fm : hm.length
        }
      },
      om = (mm, Tm, fm) => {
        if (mm.readOnly) return;
        const Am = mm instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Am, "value").set.call(mm, Tm.value), pm(mm) && mm.setSelectionRange(Tm.start, Tm.end), (0, hm.f)(mm, new InputEvent("input", {
          bubbles: !0,
          inputType: fm
        }))
      };
    let Om = !1;
    const Ym = (mm, Tm) => !!document.execCommand(mm, !1, Tm) || (Om || (Om = !0, console.warn(`execCommand("${mm}") failed; the on-screen keyboard is setting the value directly`)), !1),
      qm = (mm, Tm) => {
        Ym("insertText", Tm) || om(mm, function(mm, Tm) {
          let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const hm = mm.value.slice(0, mm.start),
            Am = mm.value.slice(mm.end);
          let am = fm < 0 ? Tm.length : Math.max(0, fm - hm.length - Am.length);
          am > 0 && am < Tm.length && xm(Tm.charCodeAt(am - 1)) && am--;
          const wm = Tm.slice(0, am),
            Dm = hm.length + wm.length;
          return {
            value: hm + wm + Am,
            start: Dm,
            end: Dm
          }
        }(Em(mm), Tm, mm.maxLength), "insertText")
      },
      jm = mm => {
        Ym("delete") || om(mm, (mm => {
          const Tm = mm.start === mm.end ? wm(mm.value, mm.start) : mm.start;
          return {
            value: mm.value.slice(0, Tm) + mm.value.slice(mm.end),
            start: Tm,
            end: Tm
          }
        })(Em(mm)), "deleteContentBackward")
      },
      Vm = (mm, Tm) => {
        if (!pm(mm)) return;
        const fm = Dm(Em(mm), Tm);
        mm.setSelectionRange(fm.start, fm.end)
      },
      Im = mm => {
        pm(mm) && 0 === mm.selectionStart && 0 === mm.selectionEnd && mm.setSelectionRange(mm.value.length, mm.value.length)
      }
  },
  8785: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm
    });
    var hm = fm(23),
      Am = fm(2109),
      am = fm(1354),
      xm = fm(1389);
    const wm = async () => {
      if ((0, xm.h)()) {
        if (!0 !== await am.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== hm.c.get("gameState")) return
      }(0, Am.b)()
    }
  },
  8788: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Dm,
      d: () => am,
      e: () => xm,
      g: () => Am,
      k: () => wm
    });
    var hm = fm(1934);
    const Am = "controllerPadShopOpen",
      am = mm => hm.j.includes(mm),
      xm = mm => Object.values(mm).some((mm => !1 !== mm.canBuy && !mm.isRewardedAd)),
      wm = (mm, Tm, fm) => {
        var hm, Am, xm, wm;
        const Dm = mm.filter((mm => !am(mm))),
          im = null !== Tm && mm.includes(Tm) ? Tm : null;
        return null !== im && !am(im) && fm(im) ? im : null !== (hm = null !== (Am = null !== (xm = null !== (wm = Dm.find(fm)) && void 0 !== wm ? wm : Dm[0]) && void 0 !== xm ? xm : im) && void 0 !== Am ? Am : mm[0]) && void 0 !== hm ? hm : null
      },
      Dm = mm => mm.userInput || mm.isRewardedAd || "boolean" === typeof mm.isSelected ? null : JSON.stringify([mm.image, mm.cost, mm.currency, mm.amount, mm.customTitle, mm.buyButtonText, mm.description, mm.canBuy])
  },
  8814: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => im,
      e: () => Rm
    });
    var hm = fm(59),
      Am = fm(1449),
      am = fm(1987),
      xm = fm(1406),
      wm = fm(1432),
      Dm = fm(1135);
    const im = () => {
        const mm = (0, xm.r)();
        if ((0, hm.useEffect)((() => {
            (0, xm.n)()
          }), []), !mm) return null;
        const {
          ControllerCategory: Tm
        } = mm;
        return (0, Dm.jsx)(wm.c, {
          children: (0, Dm.jsx)(Tm, {})
        })
      },
      Rm = () => {
        var mm;
        const Tm = (0, xm.r)(),
          [, fm] = (0, hm.useReducer)((mm => mm + 1), 0);
        return (0, Am.g)(am.c, fm), null !== (mm = null === Tm || void 0 === Tm ? void 0 : Tm.hasActivePad()) && void 0 !== mm && mm
      }
  },
  8613: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      f: () => im,
      j: () => Ym,
      k: () => pm,
      m: () => Om,
      n: () => am,
      r: () => om,
      u: () => xm,
      y: () => Em
    });
    const hm = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      Am = (mm, Tm) => {
        if ("function" === typeof mm.checkVisibility) return !mm.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: Tm,
          checkOpacity: Tm
        });
        const {
          visibility: fm
        } = getComputedStyle(mm);
        if ("hidden" === fm || "collapse" === fm) return !0;
        if (!Tm) return !1;
        for (let hm = mm; hm; hm = hm.parentElement)
          if ("0" === getComputedStyle(hm).opacity) return !0;
        return !1
      },
      am = mm => {
        if (!mm.isConnected || Am(mm, !0)) return !1;
        const Tm = mm.getBoundingClientRect();
        return Tm.width > 0 && Tm.height > 0
      },
      xm = mm => !!mm.matches(":disabled, [aria-disabled='true']") || "button" === mm.getAttribute("role") && "-1" === mm.getAttribute("tabindex"),
      wm = mm => {
        var Tm;
        if (mm.closest("[data-pad-ignore]")) return !0;
        return !!(null === (Tm = mm.parentElement) || void 0 === Tm ? void 0 : Tm.closest("[data-pad-focusable]"))
      },
      Dm = mm => {
        const Tm = mm.querySelectorAll(hm);
        return mm.matches(hm) ? [mm, ...Tm] : Tm
      },
      im = mm => {
        const Tm = [];
        for (const fm of Dm(mm)) !wm(fm) && am(fm) && Tm.push(fm);
        return Tm
      },
      Rm = new WeakMap,
      pm = mm => {
        const Tm = Rm.get(mm);
        if (Tm && Em(Tm, mm)) return !0;
        for (const fm of Dm(mm))
          if (!wm(fm) && am(fm)) return Rm.set(mm, fm), !0;
        return Rm.delete(mm), !1
      },
      Em = (mm, Tm) => Tm.contains(mm) && mm.matches(hm) && !wm(mm) && am(mm),
      om = (mm, Tm) => Em(mm, Tm) && !xm(mm),
      Om = mm => {
        for (const Tm of mm.querySelectorAll("[data-pad-initial-area]"))
          if (!Am(Tm, !1)) return !0;
        return !1
      },
      Ym = mm => {
        const Tm = Tm => {
          let fm = 0;
          for (let hm = Tm.parentElement; hm && hm !== mm; hm = hm.parentElement) fm++;
          return fm
        };
        return [...mm.querySelectorAll("[data-pad-initial-area]")].filter(am).sort(((mm, fm) => Tm(fm) - Tm(mm)))
      }
  },
  8601: (mm, Tm, fm) => {
    fm.d(Tm, {
      B: () => Zm,
      F: () => nm,
      G: () => Jm,
      H: () => qm,
      K: () => Dm,
      O: () => Rm,
      e: () => jm,
      f: () => zm,
      g: () => Qm,
      i: () => Km,
      l: () => Om,
      m: () => Ym,
      p: () => Em,
      s: () => om,
      u: () => cm,
      y: () => im
    });
    var hm = fm(31),
      Am = fm(1668),
      am = fm(8603),
      xm = fm(8606),
      wm = fm(8613);
    const Dm = mm => (0, xm.k)(mm),
      im = mm => {
        const Tm = mm.getBoundingClientRect();
        return {
          x: Tm.left + Tm.width / 2,
          y: Tm.top + Tm.height / 2
        }
      },
      Rm = (mm, Tm, fm) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: mm.x,
        clientY: mm.y,
        screenX: mm.x,
        screenY: mm.y,
        button: Tm,
        buttons: fm,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      pm = (mm, Tm) => {
        (0, Am.f)(mm, Tm)
      },
      Em = function(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const hm = 0 === fm ? 1 : 2;
        pm(mm, new PointerEvent("pointerdown", Rm(Tm, fm, hm))), pm(mm, new MouseEvent("mousedown", Rm(Tm, fm, hm)))
      },
      om = function(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        pm(mm, new PointerEvent("pointerup", Rm(Tm, fm, 0))), pm(mm, new MouseEvent("mouseup", Rm(Tm, fm, 0)))
      },
      Om = function(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Em(mm, Tm, fm), om(mm, Tm, fm), pm(mm, 0 === fm ? new MouseEvent("click", Rm(Tm, 0, 0)) : new MouseEvent("contextmenu", Rm(Tm, 2, 0)))
      },
      Ym = function(mm, Tm, fm) {
        let {
          leaveBelow: hm = null,
          enterBelow: Am = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (mm !== Tm) {
          if (null !== mm && void 0 !== mm && mm.isConnected) {
            const Am = {
              ...Rm(fm, 0, 0),
              relatedTarget: Tm
            };
            pm(mm, new PointerEvent("pointerout", Am)), pm(mm, new MouseEvent("mouseout", Am));
            const am = mm => !!Tm && mm.contains(Tm) || !!hm && mm.contains(hm);
            for (let Tm = mm; Tm && !am(Tm); Tm = Tm.parentElement) pm(Tm, new PointerEvent("pointerleave", {
              ...Am,
              bubbles: !1
            })), pm(Tm, new MouseEvent("mouseleave", {
              ...Am,
              bubbles: !1
            }))
          }
          if (Tm) {
            const hm = {
              ...Rm(fm, 0, 0),
              relatedTarget: mm
            };
            pm(Tm, new PointerEvent("pointerover", hm)), pm(Tm, new MouseEvent("mouseover", hm));
            const am = [],
              xm = Tm => !(null === mm || void 0 === mm || !mm.isConnected) && Tm.contains(mm) || !!Am && Tm.contains(Am);
            for (let mm = Tm; mm && !xm(mm); mm = mm.parentElement) am.push(mm);
            for (const mm of am.reverse()) pm(mm, new PointerEvent("pointerenter", {
              ...hm,
              bubbles: !1
            })), pm(mm, new MouseEvent("mouseenter", {
              ...hm,
              bubbles: !1
            }));
            pm(Tm, new PointerEvent("pointermove", Rm(fm, 0, 0))), pm(Tm, new MouseEvent("mousemove", Rm(fm, 0, 0)))
          }
        } else Tm && (pm(Tm, new PointerEvent("pointermove", Rm(fm, 0, 0))), pm(Tm, new MouseEvent("mousemove", Rm(fm, 0, 0))))
      },
      qm = mm => {
        hm.j.gp(am.h, mm)
      },
      jm = mm => {
        if (Dm(mm)) return void qm(mm);
        const Tm = mm.hasAttribute("data-pad-focusable") ? mm.querySelector("a[href]") : null,
          fm = null !== Tm && void 0 !== Tm ? Tm : mm;
        Om(fm, im(fm))
      },
      Vm = ".Dropdown-root.is-open",
      Im = mm => {
        const Tm = mm.querySelector(".Dropdown-control");
        return jm(Tm), Tm
      },
      Km = mm => {
        var Tm;
        const fm = null !== (Tm = mm.closest(Vm)) && void 0 !== Tm ? Tm : mm.querySelector(Vm);
        return fm ? Im(fm) : null
      },
      Qm = mm => {
        for (const Tm of document.querySelectorAll(Vm)) Tm.contains(mm) || Im(Tm)
      },
      nm = mm => null !== mm.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      Jm = mm => {
        const Tm = mm ? document.elementFromPoint(mm.x, mm.y) : null;
        return !(null === Tm || void 0 === Tm || !Tm.closest("[data-pad-repeat]"))
      },
      cm = mm => {
        var Tm;
        return null !== (Tm = [...mm.querySelectorAll("[data-pad-back]")].find(wm.n)) && void 0 !== Tm ? Tm : null
      },
      zm = mm => {
        const Tm = cm(mm);
        return !!Tm && (jm(Tm), !0)
      },
      Zm = mm => {
        var Tm, fm, hm, Am;
        return null !== (Tm = null !== (fm = null !== (hm = mm.getAttribute("data-pad-key")) && void 0 !== hm ? hm : mm.getAttribute("href")) && void 0 !== fm ? fm : null === (Am = mm.querySelector("a[href]")) || void 0 === Am ? void 0 : Am.getAttribute("href")) && void 0 !== Tm ? Tm : null
      }
  },
  8824: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => wm,
      g: () => Dm
    });
    var hm = fm(23),
      Am = fm(1321),
      am = fm(105);
    const xm = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function wm() {
      return (0, am.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Dm = new class {
      constructor(mm) {
        this.deps = mm, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(mm, Tm) {
        var fm;
        if (!this.deps.enabled()) return;
        const hm = xm[mm],
          Am = null !== Tm && void 0 !== Tm ? Tm : hm.pattern;
        if (null === Am) return void console.warn("No vibration pattern for", mm);
        const am = this.deps.now();
        am - this.lastAnyAt < 40 && hm.priority < this.playingPriority || am - (null !== (fm = this.lastAt.get(mm)) && void 0 !== fm ? fm : -1 / 0) < hm.minGapMs || am < this.playingUntil && hm.priority < this.playingPriority || (this.lastAt.set(mm, am), this.lastAnyAt = am, this.playingUntil = am + Am.reduce(((mm, Tm) => mm + Tm), 0), this.playingPriority = hm.priority, this.deps.vibrate(Am))
      }
    }({
      vibrate: mm => {
        navigator.vibrate([...mm])
      },
      now: () => performance.now(),
      enabled: () => wm() && hm.c.get("isTouchScreen") && hm.c.get("clientEscMenuOptions").vibration && !(0, Am.f)()
    })
  },
  8709: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      return !mm.hidden && (Tm || !mm.isRewardedAd)
    }

    function Am(mm) {
      return "object" === typeof mm ? mm.option : mm
    }

    function am(mm, Tm) {
      var fm;
      if ("dropdown" === (null === (fm = mm.userInput) || void 0 === fm ? void 0 : fm.type) && "object" === typeof mm.userInput.dropdownOptions[0]) {
        for (const fm of mm.userInput.dropdownOptions)
          if (Am(fm) === Tm) return "object" === typeof fm ? fm.cost : mm.cost;
        console.error("Didn't find matching option for dropdown item. Item:", mm, "input:", Tm)
      }
      return mm.cost
    }

    function xm(mm, Tm, fm) {
      var hm;
      const Am = null !== (hm = fm.excludedPlayers) && void 0 !== hm ? hm : [Tm];
      return mm.filter((mm => !Am.includes(mm)))
    }
    fm.d(Tm, {
      e: () => am,
      g: () => Am,
      i: () => xm,
      l: () => hm
    })
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);