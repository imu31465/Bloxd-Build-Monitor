export const id = 158;
export const ids = [158];
export const modules = {
  9082: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lu
    });
    var su = ju(22),
      Uu = ju(1244),
      Zu = ju(5155),
      Xu = ju(1154);

    function lu(uu) {
      let {
        note: Eu
      } = uu;
      const {
        t: ju
      } = (0, Uu.A)(), {
        clientEscMenuOptions: lu
      } = (0, su.l)(["clientEscMenuOptions"]);
      return (0, Xu.jsx)(Zu.b, {
        label: ju("touchSettings:actionButtons"),
        checked: lu.touchActionButtons,
        onClick: uu => {
          su.d.setClientEscMenuOptions({
            touchActionButtons: uu
          })
        },
        circleInfoText: ju("touchSettings:actionButtonsInfo"),
        note: Eu
      })
    }
  },
  9067: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => tj,
      e: () => Lj
    });
    var su = ju(1244),
      Uu = ju(58),
      Zu = ju(2040),
      Xu = ju(2045),
      lu = ju(1105),
      qu = ju.n(lu),
      fu = ju(1506),
      Cu = ju(22),
      bu = ju(91),
      cu = ju(107),
      Nu = ju(5155),
      Ou = ju(2543),
      Yu = ju(284),
      hu = ju(2050),
      Du = ju(2058),
      gu = ju(9074),
      Mu = ju(9082),
      eu = ju(337),
      Gu = ju(1154);
    const pu = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var wu = ju(9091);
    var Ju = ju(1533),
      du = ju(1405),
      au = ju(9100),
      Pu = ju(1461),
      ou = ju(1116),
      ku = ju(9103),
      mu = ju(2581);
    const vu = {
        sprint: "joystick",
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        shop: "inventory",
        bag: "inventory",
        ...Object.fromEntries(mu.D.map((uu => [uu, "menu"])))
      },
      Ku = uu => mu.A.filter((Eu => vu[Eu] === uu)),
      Vu = new Set(Ku("cluster")),
      ru = new Set(Ku("inventory")),
      Qu = uu => "inventory" === uu || ru.has(uu),
      iu = uu => {
        const Eu = vu[uu];
        return void 0 === Eu ? [] : [Eu, ...iu(Eu)]
      },
      Wu = uu => [uu, ...iu(uu)],
      Su = (uu, Eu, ju) => "shop" === uu && Eu ? ju("inventory") ? ["inventory"] : ju("bag") ? [uu, "bag"] : [uu] : [uu],
      Iu = new Map([
        ["cluster", Vu],
        ["inventory", ru]
      ]),
      Fu = ["cluster"],
      Bu = [...Fu, ...mu.A.filter((uu => !Fu.includes(uu) && !vu[uu]))],
      Lu = uu => [uu, ...Ku(uu).flatMap(Lu)],
      tu = Bu.flatMap(Lu).map((uu => ({
        id: uu,
        label: `hudLayout:${uu}`,
        ...mu.x[uu],
        parent: vu[uu]
      }))),
      xu = Object.fromEntries(tu.map((uu => [uu.id, uu]))),
      Tu = "data-hud-el";

    function Hu(uu, Eu, ju, su) {
      const Uu = ju(function(uu, Eu) {
          return "attack" !== uu || Eu ? xu[uu].label : "hudLayout:attackContext"
        }(uu, Eu)),
        Zu = su[uu];
      return Zu ? ju("hudLayout:slotWithKey", {
        slot: Uu,
        key: Zu
      }) : Uu
    }

    function Au(uu, Eu, ju, su) {
      return uu.map((uu => Hu(uu, Eu, ju, su))).join(", ")
    }

    function nu(uu) {
      let {
        className: Eu,
        keepPlace: ju
      } = uu;
      return ju ? (0, Gu.jsx)("div", {
        className: qu()(Eu, "Placeholder")
      }) : null
    }

    function yu(uu) {
      let {
        id: Eu,
        elements: ju,
        actionButtons: Uu,
        keyNames: Zu,
        className: Xu,
        keepPlace: lu,
        onHidden: qu
      } = uu;
      const {
        t: Cu
      } = (0, su.A)();
      if (!xu[Eu].hide) return (0, Gu.jsx)(nu, {
        className: Xu,
        keepPlace: lu
      });
      const bu = (0, mu.u)(ju, Eu);
      return (0, Gu.jsx)(fu.$, {
        className: Xu,
        ariaLabel: Cu(bu ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: Hu(Eu, Uu, Cu, Zu)
        }),
        pressed: !bu,
        onClick: () => {
          qu(Eu, !bu)
        },
        children: (0, Gu.jsx)(ou.e, {
          name: bu ? "eye-slash" : "eye"
        })
      })
    }

    function zu(uu) {
      let {
        id: Eu,
        elements: ju,
        actionButtons: Uu,
        keyNames: Zu,
        className: Xu,
        keepPlace: lu,
        onlyWhenMoved: qu,
        locked: Cu,
        onReset: bu
      } = uu;
      const {
        t: cu
      } = (0, su.A)(), Nu = xu[Eu], Ou = (0, mu.I)(ju[Eu]);
      return !Nu.move && !Nu.scale || qu && Ou ? (0, Gu.jsx)(nu, {
        className: Xu,
        keepPlace: lu
      }) : (0, Gu.jsx)(fu.$, {
        className: Xu,
        disabled: Ou || Cu,
        ariaLabel: cu("hudLayout:resetElement", {
          name: Hu(Eu, Uu, cu, Zu)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: Eu
        },
        onClick: uu => {
          qu && jE(uu.currentTarget), bu(Eu)
        },
        children: (0, Gu.jsx)(ou.e, {
          name: "rotate-left"
        })
      })
    }

    function Ru(uu) {
      let {
        id: Eu,
        actionButtons: ju,
        keyNames: Uu,
        className: Zu,
        keepPlace: Xu,
        locked: lu,
        lockable: qu,
        onLocked: Cu
      } = uu;
      const {
        t: bu
      } = (0, su.A)();
      return qu || lu ? (0, Gu.jsx)(fu.$, {
        className: Zu,
        ariaLabel: bu(lu ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: Hu(Eu, ju, bu, Uu)
        }),
        pressed: lu,
        active: lu,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${lu?"unlock":"lock"}:${Eu}`
        },
        onClick: () => {
          Cu(Eu, !lu)
        },
        children: (0, Gu.jsx)(ou.e, {
          name: lu ? "lock" : "lock-open"
        })
      }) : (0, Gu.jsx)(nu, {
        className: Zu,
        keepPlace: Xu
      })
    }

    function uE(uu) {
      let {
        className: Eu,
        open: ju,
        name: Uu,
        onToggle: Zu
      } = uu;
      const {
        t: Xu
      } = (0, su.A)();
      return (0, Gu.jsx)(fu.$, {
        className: Eu,
        ariaLabel: Xu(ju ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: Uu
        }),
        pressed: ju,
        analyticsClick: {
          id: "hud_layout.children",
          value: ju ? "close" : "open"
        },
        onClick: () => {
          Zu(!ju)
        },
        children: (0, Gu.jsx)(ou.e, {
          name: ju ? "angle-up" : "angle-down"
        })
      })
    }

    function EE(uu, Eu) {
      var ju;
      uu.contains(document.activeElement) && Eu.focus({
        preventScroll: !0
      }), null === (ju = (0, Pu.e)()) || void 0 === ju || ju.handOverPadFocus(uu, Eu)
    }

    function jE(uu) {
      const Eu = uu.closest("[data-hud-row]"),
        ju = null === Eu || void 0 === Eu ? void 0 : Eu.querySelector(".HudElementRowName");
      return !(!Eu || !ju) && (EE(Eu, ju), !0)
    }
    const sE = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function UE(uu, Eu) {
      return "joystick" === uu && !Eu
    }

    function ZE() {
      const {
        t: uu
      } = (0, su.A)();
      return (0, Gu.jsx)(fu.$, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: uu => {
          const Eu = uu.currentTarget;
          if (!jE(Eu)) {
            const uu = function(uu) {
              var Eu, ju;
              const su = [uu.previousElementSibling, uu.nextElementSibling].find((uu => uu instanceof HTMLElement && uu.matches(sE)));
              return null !== (Eu = null !== su && void 0 !== su ? su : null === (ju = uu.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === ju ? void 0 : ju.querySelector(`:is(${sE}):not(.HudFixJoystickButton)`)) && void 0 !== Eu ? Eu : null
            }(Eu);
            uu && EE(Eu, uu)
          }
          Cu.d.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: uu("hudLayout:fixJoystick")
      })
    }
    var XE = ju(65),
      lE = ju(1330),
      qE = ju(3285),
      fE = ju(2876),
      CE = ju(2589);
    const bE = (uu, Eu, ju) => {
      const su = iu(Eu).includes(uu) ? uu : iu(uu).includes(Eu) ? Eu : null;
      if (null === su || "joystick" === su) return !1;
      const Uu = su === uu ? Eu : uu;
      if ("menu" === su) return (0, CE.t)(Uu, ju.hudElements[Uu]);
      if ("hotbar" !== su || !Qu(Uu)) return !0;
      if ((0, mu.L)(ju.hudElements[Uu]) || (0, mu.L)(ju.hudElements.inventory)) return !1;
      return !(ju.hudLocked.includes(Uu) || ju.hudLocked.includes("inventory")) || (0, mu.I)(ju.hudElements.hotbar)
    };
    var cE = ju(2610),
      NE = ju(3336),
      OE = ju(9110);
    const YE = uu => ({
      [Tu]: uu
    });

    function hE(uu) {
      let {
        id: Eu,
        slot: ju,
        icon: su,
        label: Zu,
        hidden: Xu,
        className: lu,
        face: fu
      } = uu;
      const Cu = (0, Uu.useRef)(null);
      return (0, Uu.useLayoutEffect)((() => {
        fu && Cu.current && (0, OE.o)(Cu.current, fu)
      }), [fu]), (0, Gu.jsxs)("div", {
        className: qu()("TouchKeyHit", `TouchSlot${ju}`, lu, {
          HudPreviewGhost: Xu.has(Eu)
        }),
        ...YE(Eu),
        children: [fu && (0, Gu.jsx)("div", {
          ref: Cu,
          className: qu()("TouchKey", {
            Labelled: fu.classList.contains("Labelled")
          })
        }), !fu && (0, Gu.jsxs)("div", {
          className: qu()("TouchKey", {
            Labelled: void 0 !== Zu
          }),
          children: [su && (0, Gu.jsx)(ou.e, {
            name: su
          }), void 0 !== Zu && (0, Gu.jsx)("span", {
            className: "TouchKeyLabel",
            children: Zu
          })]
        })]
      })
    }

    function DE(uu) {
      let {
        item: Eu,
        selected: ju
      } = uu;
      const su = (0, Uu.useRef)(null);
      return (0, Uu.useLayoutEffect)((() => {
        su.current && (0, OE.o)(su.current, Eu)
      }), [Eu]), (0, Gu.jsx)("div", {
        ref: su,
        className: qu()("InvenItem", {
          Selected: ju
        })
      })
    }
    const gE = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      ME = uu => void 0 === uu ? {} : {
        style: {
          "--parked": uu
        }
      };

    function eE(uu) {
      let {
        id: Eu,
        hidden: ju,
        parked: su,
        unslotted: Uu = !1
      } = uu;
      return (0, Gu.jsx)("div", {
        className: qu()("TopRightIcon", cE.m[Eu], {
          HudPreviewGhost: ju.has(Eu),
          [CE.b]: void 0 !== su,
          [CE.c]: Uu
        }),
        ...ME(su),
        children: (0, Gu.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...YE(Eu),
          children: (0, Gu.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Gu.jsx)(ou.e, {
              name: gE[Eu]
            })
          })
        })
      })
    }

    function GE(uu) {
      let {
        portraitPhone: Eu,
        icons: ju,
        pinnedIcons: su,
        hidden: Zu,
        moved: Xu,
        trayState: lu
      } = uu;
      const fu = Eu ? (0, CE.B)(ju) : [],
        Cu = ju.filter((uu => "settings" === uu)),
        bu = ju.filter((uu => "settings" !== uu && !fu.includes(uu))).reverse(),
        cu = fu.length > 0 && "gone" === lu,
        Nu = [...Cu, ...cu ? ["tray"] : [], ...bu].filter((uu => "tray" === uu || Zu.has(uu) && !Xu.has(uu))),
        Ou = uu => {
          const Eu = Nu.indexOf(uu);
          return Eu < 0 ? void 0 : Eu
        },
        Yu = (uu, Eu) => (0, Gu.jsx)(eE, {
          id: uu,
          hidden: Zu,
          parked: Eu ? Ou(uu) : void 0,
          unslotted: Eu && Zu.has(uu) && Xu.has(uu)
        }, uu);
      return (0, Gu.jsxs)("div", {
        className: qu()("TopRightIcons TouchInGame", {
          Column: Eu
        }),
        children: [Cu.map((uu => Yu(uu, !0))), fu.length > 0 && (0, Gu.jsxs)("div", {
          className: qu()("TopRightIcon TopRightTrayToggle Open", {
            [CE.b]: cu
          }),
          ...ME(Ou("tray")),
          children: [(0, Gu.jsx)("div", {
            className: qu()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== lu
            }),
            children: (0, Gu.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, Gu.jsx)(ou.e, {
                name: "ellipsis"
              })
            })
          }), (0, Gu.jsx)("div", {
            className: "TopRightTray",
            children: fu.map((uu => Yu(uu, !1)))
          })]
        }), bu.map((uu => (0, Gu.jsxs)(Uu.Fragment, {
          children: ["perspective" === uu && null !== su.rightOfCamera && (0, Gu.jsx)(pE, {
            icon: su.rightOfCamera
          }), Yu(uu, !0)]
        }, uu))), null !== su.leftEnd && (0, Gu.jsx)(pE, {
          icon: su.leftEnd
        })]
      })
    }

    function pE(uu) {
      let {
        icon: Eu
      } = uu;
      return (0, Gu.jsx)("div", {
        className: "TopRightIcon",
        children: (0, Gu.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, Gu.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Gu.jsx)(ou.e, {
              name: Eu
            })
          })
        })
      })
    }

    function wE(uu) {
      let {
        next: Eu,
        hidden: ju
      } = uu;
      return (0, Gu.jsx)("div", {
        className: qu()("HotBarArrow", Eu ? "Next" : "Previous", {
          HudPreviewGhost: ju
        }),
        ...YE("arrows"),
        children: (0, Gu.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, Gu.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Gu.jsx)(ou.e, {
              name: Eu ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function JE() {
      return (0, Gu.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, Gu.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, Gu.jsx)("div", {
            className: "SocialBar",
            children: (0, Gu.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, Gu.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, Gu.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, Gu.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, Gu.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Gu.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Gu.jsx)(ou.e, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, Gu.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, Gu.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, Gu.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, Gu.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Gu.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Gu.jsx)(ou.e, {
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
    const dE = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      aE = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      PE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      oE = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function kE(uu) {
      let {
        presence: Eu,
        portraitPhone: ju,
        hidden: Uu,
        actionButtons: Zu,
        joystickFixed: Xu,
        keysAbove: lu,
        auraBar: fu,
        trayState: Cu,
        moved: cu
      } = uu;
      const {
        t: Nu
      } = (0, su.A)(), {
        faces: Ou,
        items: Yu
      } = Eu, hu = uu => ({
        HudPreviewGhost: Wu(uu).some((uu => Uu.has(uu)))
      });
      return (0, Gu.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, Gu.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, Gu.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, Gu.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, Gu.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, Gu.jsx)("div", {
              className: "InGameHeaderGameName",
              children: Nu("hudLayout:previewGameName")
            })]
          })
        }), (0, Gu.jsx)("div", {
          className: "TopLeftElements",
          children: (0, Gu.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, Gu.jsxs)("div", {
              className: "Chat",
              children: [(0, Gu.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [Nu("hudLayout:previewChatLine"), Nu("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), Nu("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((uu => (0, Gu.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, Gu.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, Gu.jsx)("div", {
                      className: "IndividualText",
                      children: uu
                    })
                  })
                }, uu)))
              }), (0, Gu.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: qu()("ChatIconWrapper SmallTextLight", hu("chat")),
                ...YE("chat"),
                children: (0, Gu.jsx)(ou.e, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, Gu.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, Gu.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, Gu.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, Gu.jsx)("div", {
                className: "TopRightIconsContainer",
                ...YE("menu"),
                children: (0, Gu.jsx)(GE, {
                  portraitPhone: ju,
                  icons: Eu.rowIcons,
                  pinnedIcons: Eu.pinnedIcons,
                  hidden: Uu,
                  trayState: Cu,
                  moved: cu
                })
              })
            }), bu.featureFlags.useSocialFeatures && (0, Gu.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, Gu.jsx)(JE, {})
            })]
          })
        }), (0, Gu.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, Gu.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, Gu.jsxs)("div", {
            className: "TouchInteractKey",
            ...YE("interact"),
            children: [(0, Gu.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, Gu.jsx)(ou.e, {
                name: "hand-back-point-up"
              })
            }), (0, Gu.jsx)("div", {
              children: Nu("hudLayout:previewInteract")
            })]
          })
        }), (0, Gu.jsx)("div", {
          className: "BottomCentre",
          children: (0, Gu.jsxs)("div", {
            className: "BottomElements",
            children: [(0, Gu.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, Gu.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, Gu.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...YE("hotbar"),
                children: (0, Gu.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, Gu.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, Gu.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, Gu.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, Gu.jsx)(ou.e, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), fu && (0, Gu.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, Gu.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, Gu.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, NE.h)("glint"),
                    alt: ""
                  }), (0, Gu.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, Gu.jsx)("div", {
                  className: "AuraBar",
                  children: (0, Gu.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, Gu.jsx)("div", {
                className: "HotBarRow",
                children: (0, Gu.jsx)("div", {
                  className: qu()("HotBarContainer Touch", {
                    KeysAbove: lu
                  }),
                  children: (0, Gu.jsxs)("div", {
                    className: "HotBar",
                    ...YE("hotbar"),
                    children: [(0, Gu.jsxs)("div", {
                      className: qu()("TouchInventoryKeys", {
                        NoAuraBar: !fu
                      }),
                      children: [(0, Gu.jsx)("div", {
                        className: qu()("TouchInventoryKey ShopKey", hu("shop"), {
                          Hidden: !Eu.shop
                        }),
                        ...YE("shop"),
                        children: (0, Gu.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Gu.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Gu.jsx)(ou.e, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, Gu.jsx)("div", {
                        className: qu()("TouchInventoryKey BagKey", hu("bag"), {
                          Hidden: !Eu.bag
                        }),
                        ...YE("bag"),
                        children: (0, Gu.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Gu.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Gu.jsx)(ou.e, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, Gu.jsx)(wE, {
                      next: !1,
                      hidden: Uu.has("arrows")
                    }), (0, Gu.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== Yu && Yu.map(((uu, Eu) => (0, Gu.jsx)(DE, {
                        item: uu,
                        selected: uu.classList.contains("Selected")
                      }, Eu))), null === Yu && PE.map((uu => {
                        const Eu = oE[uu];
                        return (0, Gu.jsx)("div", {
                          className: qu()("InvenItem", {
                            Selected: 0 === uu
                          }),
                          children: Eu && (0, Gu.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, Gu.jsx)(ou.e, {
                              name: Eu
                            })
                          })
                        }, uu)
                      }))]
                    }), (0, Gu.jsx)(wE, {
                      next: !0,
                      hidden: Uu.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, Gu.jsx)("div", {
              className: "BottomRightElements",
              children: (0, Gu.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== Ou && OE.j.map((uu => {
                  const Eu = Ou[uu];
                  return Eu && (0, Gu.jsx)(hE, {
                    id: OE.f[uu],
                    slot: uu,
                    face: Eu,
                    className: dE[uu],
                    hidden: Uu
                  }, uu)
                })), (0, OE.q)(Eu, Zu).map((uu => (0, Gu.jsx)(hE, {
                  id: OE.f[uu],
                  slot: uu,
                  icon: aE[uu].icon,
                  label: Nu(aE[uu].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: Uu
                }, uu))), null === Ou && (0, Gu.jsxs)(Gu.Fragment, {
                  children: [(0, Gu.jsx)(hE, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: Uu
                  }), (0, Gu.jsx)(hE, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: Uu
                  }), Zu && (0, Gu.jsxs)(Gu.Fragment, {
                    children: [(0, Gu.jsx)(hE, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: Uu
                    }), (0, Gu.jsx)(hE, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: Uu
                    })]
                  }), (0, OE.l)(Zu).map((uu => (0, Gu.jsx)(hE, {
                    id: OE.f[uu],
                    slot: uu,
                    icon: aE[uu].icon,
                    label: Nu(aE[uu].labelKey),
                    hidden: Uu
                  }, uu))), (0, Gu.jsx)(hE, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: Uu
                  })]
                })]
              })
            })]
          })
        }), (0, Gu.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, Gu.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, Gu.jsxs)("div", {
              className: qu()("Joystick Resting HudPreviewJoystick", {
                Floating: !Xu
              }),
              ...YE("joystick"),
              children: [(0, Gu.jsx)("div", {
                className: "JoystickBase"
              }), (0, Gu.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), Eu.sprint && (0, Gu.jsx)("div", {
            className: qu()("TouchSprintHit", hu("sprint"), {
              AtHome: !Xu
            }),
            ...YE("sprint"),
            children: (0, Gu.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, Gu.jsx)(ou.e, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function mE() {
      const [uu, Eu] = (0, Uu.useState)({}), ju = (0, Uu.useCallback)((uu => {
        Eu((Eu => [...new Set([...Object.keys(Eu), ...Object.keys(uu)])].every((ju => Eu[ju] === uu[ju])) ? Eu : uu))
      }), []);
      return [uu, ju]
    }
    const vE = .05;

    function KE(uu) {
      var Eu;
      let {
        selected: ju,
        layout: Uu,
        actionButtons: Zu,
        keyNames: Xu,
        overlaps: lu,
        scaleCaps: Cu,
        joystickFixed: bu,
        onScale: cu,
        onHidden: Nu,
        onReset: Ou,
        locked: Yu,
        lockable: hu,
        onLocked: Du,
        extra: gu
      } = uu;
      const {
        t: Mu
      } = (0, su.A)(), eu = ju ? xu[ju] : null, pu = null !== ju && Yu.has(ju), wu = (ju && Uu.hudElements[ju] || mu.q)[2], Ju = null !== (Eu = ju && Cu[ju]) && void 0 !== Eu ? Eu : mu.i, du = uu => {
        ju && cu(ju, Math.min(Ju, Math.round(100 * (wu + .1 * uu)) / 100))
      };
      return (0, Gu.jsxs)(Gu.Fragment, {
        children: [(0, Gu.jsxs)("div", {
          className: qu()("HudQuickName SmallTextBold", {
            Overlap: lu.length > 0
          }),
          children: [lu.length > 0 && (0, Gu.jsx)(ou.e, {
            name: "triangle-exclamation"
          }), eu ? Hu(eu.id, Zu, Mu, Xu) : Mu("hudLayout:fullScreenHint"), lu.length > 0 && (0, Gu.jsx)("span", {
            className: "HudQuickOverlap",
            children: Mu("hudLayout:overlapsShort", {
              names: Au(lu, Zu, Mu, Xu)
            })
          })]
        }), (null === eu || void 0 === eu ? void 0 : eu.scale) && (0, Gu.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, Gu.jsx)(fu.$, {
            disabled: pu || wu <= mu.m,
            ariaLabel: Mu("hudLayout:smaller"),
            onClick: () => {
              du(-1)
            },
            children: (0, Gu.jsx)(ou.e, {
              name: "minus"
            })
          }), (0, Gu.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*wu)}%`
          }), (0, Gu.jsx)(fu.$, {
            disabled: pu || wu >= Ju,
            ariaLabel: Mu("hudLayout:larger"),
            onClick: () => {
              du(1)
            },
            children: (0, Gu.jsx)(ou.e, {
              name: "plus"
            })
          })]
        }), (eu || gu) && (0, Gu.jsxs)("div", {
          className: "HudQuickActions",
          children: [eu && (0, Gu.jsxs)(Gu.Fragment, {
            children: [(0, Gu.jsx)(Ru, {
              id: eu.id,
              actionButtons: Zu,
              keyNames: Xu,
              locked: pu,
              lockable: hu(eu.id),
              onLocked: Du
            }), (0, Gu.jsx)(yu, {
              id: eu.id,
              elements: Uu.hudElements,
              actionButtons: Zu,
              keyNames: Xu,
              onHidden: Nu
            }), (0, Gu.jsx)(zu, {
              id: eu.id,
              elements: Uu.hudElements,
              actionButtons: Zu,
              keyNames: Xu,
              locked: pu,
              onReset: Ou
            }), UE(eu.id, bu) && (0, Gu.jsx)(ZE, {})]
          }), gu]
        })]
      })
    }
    var VE = ju(1170),
      rE = ju(4594);
    const QE = "HudPreviewDoc",
      iE = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      WE = new Set([QE, ...Object.values(iE)]),
      SE = new Set(mu.A.map(cE.t)),
      IE = new Set(cE.h),
      FE = 'style, link[rel="stylesheet"]';

    function BE(uu, Eu, ju, su) {
      const Uu = new Map,
        Zu = new Set,
        Xu = new URL(uu.baseURI).origin,
        lu = Eu => {
          var ju;
          if ("LINK" !== Eu.nodeName) return !0;
          const su = null === (ju = Eu.getAttribute("href")) || void 0 === ju ? void 0 : ju.trim();
          if (!su) return !1;
          try {
            return new URL(su, uu.baseURI).origin === Xu
          } catch {
            return !1
          }
        };
      let qu = null;
      const fu = () => {
          qu !== (0 === Zu.size) && (qu = 0 === Zu.size, null === su || void 0 === su || su(qu))
        },
        Cu = uu => {
          const Eu = uu.cloneNode(!0);
          if ("LINK" === Eu.tagName) {
            Zu.add(Eu);
            const uu = () => {
              Zu.delete(Eu), fu()
            };
            Eu.addEventListener("load", uu), Eu.addEventListener("error", uu), ju && Eu.addEventListener("load", ju)
          }
          return Eu
        },
        bu = () => {
          const su = function(uu) {
              const Eu = [...uu.body.children].filter((uu => uu.matches(FE)));
              return [...uu.head.querySelectorAll(FE), ...Eu]
            }(uu).filter(lu),
            Xu = new Set(su);
          for (const [uu, Eu] of Uu) Xu.has(uu) || (Eu.remove(), Uu.delete(uu), Zu.delete(Eu));
          let qu = null;
          for (let uu = su.length - 1; uu >= 0; uu--) {
            const Zu = su[uu];
            let Xu = Uu.get(Zu);
            Xu ? "STYLE" === Zu.tagName && Xu.textContent !== Zu.textContent && (Xu.textContent = Zu.textContent, null === ju || void 0 === ju || ju()) : (Xu = Cu(Zu), Uu.set(Zu, Xu), Eu.head.insertBefore(Xu, qu)), qu = Xu
          }
          fu()
        };
      bu();
      const cu = new MutationObserver(bu);
      return cu.observe(uu.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), cu.observe(uu.body, {
        childList: !0
      }), () => {
        cu.disconnect()
      }
    }

    function LE(uu, Eu, ju) {
      let {
        keysAbove: su
      } = ju;
      const Uu = [...uu.documentElement.classList].filter((uu => !WE.has(uu) && !IE.has(uu))),
        Zu = [...Eu.documentElement.classList].filter((uu => IE.has(uu))),
        Xu = [QE, iE.hotbar, iE.hasShop, iE.hasBag];
      su && Xu.push(iE.keysAbove), Eu.documentElement.className = [...Uu, ...Xu, ...Zu].join(" ")
    }
    const tE = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function xE(uu, Eu, ju, su, Uu) {
      const Zu = (0, mu.C)(ju, su, "joystick"),
        Xu = (0, cE.u)((0, cE.G)(ju, su, Uu), su),
        lu = Xu.classes.filter((uu => !SE.has(uu))),
        qu = Eu.documentElement,
        fu = ju.hudLayouts[su].hudSafe,
        Cu = (0, cE.B)(fu, window.innerWidth, window.innerHeight, TE(), fu ? (0, cE.K)(Eu) : 0);
      (0, cE.N)({
        ...Xu,
        classes: lu
      }, {
        vars: qu,
        safe: qu,
        classes: qu
      }), qu.style.setProperty("--preview-joystick-shift-left", `${Cu[3]}px`), qu.style.setProperty("--preview-joystick-shift-bottom", `${Cu[2]}px`), qu.style.setProperty("--preview-joystick-scale", String(Zu[2])), (0, rE.g)(qu, Eu, ju, su);
      for (const bu of tE) qu.style.setProperty(bu, uu.documentElement.style.getPropertyValue(bu) || "0px")
    }

    function TE() {
      return (0, cE.F)(Cu.d.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function HE(uu) {
      return (0, cE.r)(TE(), (0, cE.K)(uu))
    }

    function AE(uu, Eu, ju) {
      const su = uu.documentElement.style,
        Uu = (0, cE.E)(Eu),
        Zu = su.getPropertyValue(Uu);
      try {
        return ju((uu => {
          su.setProperty(Uu, String(uu))
        }))
      } finally {
        "" === Zu ? su.removeProperty(Uu) : su.setProperty(Uu, Zu)
      }
    }

    function nE(uu, Eu) {
      const [ju, su] = AE(uu, "hotbar", (Eu => {
        const ju = ju => {
          var su, Uu;
          return Eu(ju), null !== (su = null === (Uu = uu.querySelector(".HotBarGameItemsContainer")) || void 0 === Uu ? void 0 : Uu.getBoundingClientRect().width) && void 0 !== su ? su : 0
        };
        return [ju(1), ju(mu.i)]
      }));
      return ju <= 0 ? mu.i : Math.min(mu.i, Math.max(1, Math.floor(su / ju / Eu + 1e-6) * Eu))
    }
    const yE = 3,
      zE = .5,
      RE = uu => uu.right - uu.left;
    const uj = (uu, Eu) => Math.abs((0, ku.e)(uu).x - (0, ku.e)(Eu).x) + Math.abs((0, ku.e)(uu).y - (0, ku.e)(Eu).y) + Math.abs(RE(uu) - RE(Eu));

    function Ej(uu, Eu, ju, su, Uu) {
      let {
        canKeep: Zu = () => !0,
        passes: Xu = yE,
        before: lu
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const qu = Eu.hudLayouts[ju].hudLocked.filter(Zu);
      if (0 === qu.length) return Eu;
      const fu = [...Vu].filter((su => !qu.includes(su) && (0, mu.C)(uu, ju, su).join() === (0, mu.C)(Eu, ju, su).join())),
        Cu = uu => {
          const Eu = (0, ku.M)(fu.flatMap((Eu => uu[Eu] ? [uu[Eu]] : [])));
          return {
            ...uu,
            cluster: null !== Eu && void 0 !== Eu ? Eu : void 0
          }
        };
      let bu = null;
      const cu = uu => {
          bu = uu;
          const Eu = Uu(uu);
          return Eu && {
            ...Eu,
            boxes: Cu(Eu.boxes)
          }
        },
        Nu = lu ? {
          ...lu,
          boxes: Cu(lu.boxes)
        } : cu(uu),
        Ou = Nu && cu(Eu);
      if (!Nu || !Ou) return Eu;
      const Yu = Nu.boxes;
      let hu = Ou.boxes;
      const Du = Nu.keysAbove !== Ou.keysAbove,
        gu = Du || Boolean(Nu.shopAlone) !== Boolean(Ou.shopAlone),
        Mu = new Set(qu.filter((uu => !Qu(uu) || !("bag" === uu ? Du : gu))));
      let eu = Eu;
      for (let wu = 0; wu < Xu && Mu.size > 0; wu++) {
        var Gu, pu;
        const uu = new Map;
        for (const Eu of Mu) {
          const Uu = Yu[Eu],
            Zu = hu[Eu],
            Xu = Uu && Zu ? jj(Eu, (0, mu.C)(eu, ju, Eu), Uu, Zu, su) : null;
          Xu ? uu.set(Eu, Xu) : Mu.delete(Eu)
        }
        if (0 === uu.size) break;
        let Uu = eu;
        for (const [Eu, su] of uu) Uu = (0, mu.fb)(Uu, ju, Eu, su);
        const Zu = null === (Gu = cu(Uu)) || void 0 === Gu ? void 0 : Gu.boxes;
        if (!Zu) return Eu;
        let Xu = eu;
        for (const [Eu, su] of uu) {
          const uu = Zu[Eu];
          uu && uj(Yu[Eu], uu) < uj(Yu[Eu], hu[Eu]) - zE ? Xu = (0, mu.fb)(Xu, ju, Eu, su) : Mu.delete(Eu)
        }
        if (Xu === eu) break;
        const lu = [...uu.keys()].every((uu => Mu.has(uu)));
        eu = lu ? Uu : Xu;
        const qu = lu ? Zu : null === (pu = cu(eu)) || void 0 === pu ? void 0 : pu.boxes;
        if (!qu) return Eu;
        hu = qu
      }
      return bu !== eu && Uu(eu), eu
    }

    function jj(uu, Eu, ju, su, Uu) {
      let [Zu, Xu, lu] = Eu;
      const qu = mu.x[uu],
        fu = {};
      qu.scale && RE(su) > 0 && Math.abs(RE(ju) - RE(su)) > zE && (fu.scale = Math.max(mu.m, Math.min(mu.i, lu * RE(ju) / RE(su))));
      const Cu = (0, ku.e)(ju).x - (0, ku.e)(su).x,
        bu = (0, ku.e)(ju).y - (0, ku.e)(su).y;
      return qu.move && (Math.abs(Cu) > zE || Math.abs(bu) > zE) && (fu.dx = Zu + Cu / Uu.width, fu.dy = Xu + bu / Uu.height), void 0 === fu.scale && void 0 === fu.dx ? null : fu
    }
    let sj = 0;

    function Uj() {
      return sj > 0
    }
    const Zj = uu => 0 === uu.dx && 0 === uu.dy,
      Xj = .001,
      lj = uu => Math.abs(uu.dx) >= 5e-4 || Math.abs(uu.dy) >= 5e-4 ? uu : {
        dx: uu.dx,
        dy: uu.dy < 0 ? -.001 : Xj
      };

    function qj(uu) {
      let {
        preview: Eu,
        stageRef: ju,
        ringRef: su,
        centreLineRef: Zu,
        snapCentre: Xu,
        ready: lu,
        measure: qu,
        k: fu,
        viewport: Cu,
        boxes: bu,
        pieces: cu,
        selected: Nu,
        insets: Ou,
        layout: Yu,
        canMove: hu,
        onSelect: Du,
        onMove: gu
      } = uu;
      const Mu = (0, Uu.useRef)(null),
        eu = (0, Uu.useCallback)((() => null !== Mu.current), []),
        Gu = (uu, Eu) => {
          if (!Eu) return null;
          const ju = (0, ku.e)(uu.origin),
            su = (0, ku.e)(Eu),
            Uu = (uu.to.dx - uu.from.dx) * Cu.width,
            Zu = (uu.to.dy - uu.from.dy) * Cu.height,
            Xu = Eu.right - Eu.left,
            lu = Eu.bottom - Eu.top;
          return {
            skew: {
              x: su.x - ju.x - Uu,
              y: su.y - ju.y - Zu
            },
            box: {
              left: ju.x - Xu / 2,
              top: ju.y - lu / 2,
              right: ju.x + Xu / 2,
              bottom: ju.y + lu / 2
            }
          }
        },
        pu = (uu, ju) => {
          var Uu;
          const Xu = Mu.current;
          if (!Xu || Xu.pointerId !== uu.pointerId) return;
          Mu.current = null, null === (Uu = Zu.current) || void 0 === Uu || Uu.classList.remove("Shown", "Snapped");
          const lu = su.current;
          if (lu && null !== Xu.ringStyle && lu.setAttribute("style", Xu.ringStyle), ju && Xu.moved) {
            const uu = Zj(Xu.to) ? null : qu(Xu.id),
              Eu = uu ? (0, ku.J)(uu, (0, ku.G)(Cu.width, Cu.height, Ou)) : {
                x: 0,
                y: 0
              },
              ju = {
                dx: Xu.to.dx + Eu.x / Cu.width,
                dy: Xu.to.dy + Eu.y / Cu.height
              },
              su = Zj(Xu.to) ? ju : lj(ju);
            gu(Xu.id, su.dx, su.dy)
          } else Eu(Xu.id, null), ju && Xu.tapPick && Du(Xu.tapPick)
        };
      return {
        busy: eu,
        handlers: {
          onPointerDown: uu => {
            var Eu;
            if (!lu || Mu.current || !uu.target.closest(".HudPreviewHandle")) return;
            const su = ju.current.getBoundingClientRect(),
              Uu = {
                x: (uu.clientX - su.left) / fu,
                y: (uu.clientY - su.top) / fu
              },
              Zu = (0, ku.C)(Uu, cu, 40 / fu),
              Xu = null !== Nu ? Iu.get(Nu) : void 0,
              qu = void 0 !== Xu && null !== (0, ku.C)(Uu, cu.filter((uu => {
                let {
                  id: Eu
                } = uu;
                return Xu.has(Eu)
              })), 40 / fu),
              Cu = "menu" === Nu && void 0 !== bu.menu && (0, ku.g)(bu.menu, Uu) && ("menu" === Zu || null !== Zu && (0, CE.t)(Zu, Yu.hudElements[Zu])),
              Ou = qu ? Nu : Cu ? "menu" : null,
              gu = null !== Ou,
              eu = null !== Ou && void 0 !== Ou ? Ou : Zu;
            if (!eu) return;
            if (function(uu) {
                sj++;
                const Eu = ju => {
                  ju.pointerId === uu && (sj = Math.max(0, sj - 1), window.removeEventListener("pointerup", Eu, !0), window.removeEventListener("pointercancel", Eu, !0))
                };
                window.addEventListener("pointerup", Eu, !0), window.addEventListener("pointercancel", Eu, !0)
              }(uu.pointerId), !hu(eu)) return void Du(gu && Zu ? Zu : eu);
            Du(eu);
            const [Gu, pu] = null !== (Eu = Yu.hudElements[eu]) && void 0 !== Eu ? Eu : [0, 0], wu = {
              dx: Gu,
              dy: pu
            }, Ju = {
              skew: {
                x: 0,
                y: 0
              },
              box: bu[eu]
            };
            Mu.current = {
              id: eu,
              pointerId: uu.pointerId,
              startX: uu.clientX,
              startY: uu.clientY,
              origin: bu[eu],
              from: wu,
              to: wu,
              moved: !1,
              home: Zj(wu) ? {
                centre: (0, ku.e)(bu[eu]),
                anchor: Ju
              } : null,
              away: Zj(wu) ? null : Ju,
              anchor: Ju,
              ringStyle: null,
              tapPick: gu ? Zu : null
            }, uu.currentTarget.setPointerCapture(uu.pointerId)
          },
          onPointerMove: uu => {
            const ju = Mu.current;
            if (!ju || ju.pointerId !== uu.pointerId) return;
            const Uu = uu.clientX - ju.startX,
              lu = uu.clientY - ju.startY;
            if (!ju.moved && Math.hypot(Uu, lu) < 5) return;
            const bu = !ju.moved;
            var cu, Nu;
            (ju.moved = !0, bu) && (ju.ringStyle = null !== (cu = null === (Nu = su.current) || void 0 === Nu ? void 0 : Nu.getAttribute("style")) && void 0 !== cu ? cu : null);
            const Yu = (0, ku.G)(Cu.width, Cu.height, Ou);
            if (!ju.home) {
              var hu;
              ju.to = {
                dx: 0,
                dy: 0
              }, Eu(ju.id, ju.to);
              const uu = qu(ju.id),
                su = null !== (hu = Gu(ju, uu)) && void 0 !== hu ? hu : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: ju.origin
                },
                Uu = (0, ku.e)(ju.origin);
              ju.home = {
                centre: uu ? (0, ku.e)(uu) : {
                  x: Uu.x - ju.from.dx * Cu.width,
                  y: Uu.y - ju.from.dy * Cu.height
                },
                anchor: su
              }
            }
            const Du = ju.home;
            let gu = !1;
            const eu = uu => {
                gu = !1;
                let su = (0, ku.r)(uu.box, Uu / fu, lu / fu, Yu);
                const Zu = Cu.width / 2;
                if (Xu && Math.abs((0, ku.e)(ju.origin).x + su.x - Zu) <= 8 / fu) {
                  const Eu = Zu - (0, ku.e)(ju.origin).x,
                    Uu = (0, ku.r)(uu.box, Eu, su.y, Yu);
                  gu = Math.abs(Uu.x - Eu) < .01, gu && (su = Uu)
                }
                const qu = (0, ku.y)(ju.from, su.x - uu.skew.x, su.y - uu.skew.y, Cu.width, Cu.height);
                ju.to = lj(qu), ju.anchor = uu, Eu(ju.id, ju.to)
              },
              pu = (0, ku.r)(Du.anchor.box, Uu / fu, lu / fu, Yu),
              wu = Zu.current,
              Ju = (0, ku.e)(ju.origin),
              du = ((0, mu.O)(ju.id) ? 20 : 6) / fu;
            if (Math.abs(Ju.x + pu.x - Du.centre.x) <= du && Math.abs(Ju.y + pu.y - Du.centre.y) <= du) ju.to = {
              dx: 0,
              dy: 0
            }, ju.anchor = Du.anchor, gu = Xu && Math.abs(Du.centre.x - Cu.width / 2) < 1, Eu(ju.id, ju.to);
            else if (ju.away) eu(ju.away);
            else {
              var au;
              eu(Du.anchor), ju.away = null !== (au = Gu(ju, qu(ju.id))) && void 0 !== au ? au : Du.anchor, eu(ju.away)
            }
            null === wu || void 0 === wu || wu.classList.add("Shown"), null === wu || void 0 === wu || wu.classList.toggle("Snapped", gu), (uu => {
              const Eu = su.current;
              if (Eu) {
                const {
                  skew: ju,
                  box: su
                } = uu.anchor;
                Eu.style.left = su.left * fu + "px", Eu.style.top = su.top * fu + "px", Eu.style.width = (su.right - su.left) * fu + "px", Eu.style.height = (su.bottom - su.top) * fu + "px", Eu.style.translate = `${((uu.to.dx-uu.from.dx)*Cu.width+ju.x)*fu}px ${((uu.to.dy-uu.from.dy)*Cu.height+ju.y)*fu}px`
              }
            })(ju)
          },
          onPointerUp: uu => {
            pu(uu, !0)
          },
          onPointerCancel: uu => {
            pu(uu, !1)
          }
        }
      }
    }
    var fj = ju(9118);

    function Cj(uu, Eu) {
      return Object.keys(uu).filter((uu => uu !== Eu)).map((Eu => uu[Eu]))
    }

    function bj(uu) {
      return uu.map((uu => {
        let {
          id: Eu,
          box: ju
        } = uu;
        return `${Eu}:${ju.left},${ju.top},${ju.right},${ju.bottom}`
      })).join(";")
    }

    function cj(uu) {
      const Eu = [],
        ju = Eu => (0, mu.O)(Eu) && !uu.documentElement.classList.contains((0, cE.y)(Eu));
      for (const lu of uu.querySelectorAll(`[${Tu}]`)) {
        const uu = ju(lu.getAttribute(Tu)) ? lu.querySelector(".ScaleOnHover") : null,
          su = (null !== uu && void 0 !== uu ? uu : lu).getBoundingClientRect();
        (su.width > 0 || su.height > 0) && Eu.push({
          id: lu.getAttribute(Tu),
          box: (0, ku.k)(su)
        })
      }
      const su = uu => (0, ku.M)(Eu.filter((Eu => {
          let {
            id: ju
          } = Eu;
          return uu(ju)
        })).map((uu => {
          let {
            box: Eu
          } = uu;
          return Eu
        }))),
        Uu = {};
      for (const lu of new Set(Eu.map((uu => uu.id)))) Uu[lu] = su((uu => uu === lu));
      for (const [lu, qu] of Iu) {
        const uu = su((uu => qu.has(uu)));
        uu && (Uu[lu] = uu)
      }
      const Zu = uu.querySelector(".TouchInventoryKeys"),
        Xu = Zu ? (0, ku.k)(Zu.getBoundingClientRect()) : null;
      return {
        boxes: Uu,
        pieces: Eu,
        pairHome: Xu
      }
    }

    function Nj(uu, Eu, ju) {
      const su = Eu.right - Eu.left,
        Uu = Eu.bottom - Eu.top;
      return AE(uu, "cluster", (Eu => {
        const Zu = ju => {
            Eu(ju);
            const su = [...uu.querySelectorAll(`[${Tu}]:not(.HudPreviewGhost)`)].filter((uu => Vu.has(uu.getAttribute(Tu)))).map((uu => (0, ku.k)(uu.getBoundingClientRect()))),
              Uu = (0, ku.M)(su);
            return Uu ? {
              w: Uu.right - Uu.left,
              h: Uu.bottom - Uu.top
            } : null
          },
          Xu = uu => !uu || uu.w <= su && uu.h <= Uu,
          lu = Zu(1),
          qu = Zu(mu.i);
        if (!lu || Xu(qu)) return mu.i;
        const fu = (uu, Eu, ju) => Eu > uu ? 1 + (ju - uu) * (mu.i - 1) / (Eu - uu) : mu.i;
        let Cu = Math.floor(Math.min(mu.i, fu(lu.w, qu.w, su), fu(lu.h, qu.h, Uu)) / ju + 1e-6) * ju;
        for (; Cu > 1 && !Xu(Zu(Cu));) Cu = Math.round(100 * (Cu - ju)) / 100;
        return Math.max(1, Cu)
      }))
    }

    function Oj(uu) {
      LE(document, uu, {
        keysAbove: !1
      });
      const Eu = parseFloat(getComputedStyle(uu.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        ju = Number.isFinite(Eu) && Eu < 0;
      return LE(document, uu, {
        keysAbove: ju
      }), (0, fj.e)(uu), ju
    }

    function Yj(uu) {
      const Eu = uu.querySelector(".TouchInventoryKey.ShopKey");
      return null !== Eu && "1" === getComputedStyle(Eu).getPropertyValue("--touch-shop-above").trim()
    }

    function hj(uu, Eu) {
      let {
        layout: ju,
        orientation: su,
        viewport: Zu,
        replicaKey: Xu,
        joystickFixed: lu,
        busy: qu
      } = Eu;
      const [fu, Cu] = (0, Uu.useState)(null), [bu, cu] = (0, Uu.useState)({
        boxes: {},
        pieces: []
      }), [Nu, Ou] = (0, Uu.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [Yu, hu] = (0, Uu.useState)(!1), [Du, gu] = (0, Uu.useState)(!1), [Mu, eu] = (0, Uu.useState)(!1), Gu = (0, Uu.useCallback)((uu => {
        gu(uu), uu && eu(!0)
      }), []), pu = ju.hudLayouts[su].hudSafe;
      (0, Uu.useLayoutEffect)((() => {
        const Eu = uu.current.contentDocument;
        Eu.open(), Eu.write("<!DOCTYPE html><html><head></head><body></body></html>"), Eu.close(), Cu(Eu)
      }), [uu]);
      const wu = (0, Uu.useCallback)((() => {
          fu && ((0, CE.x)(fu), cu(cj(fu)), Ou(function(uu, Eu) {
            const ju = HE(uu),
              [su, Uu, Zu, Xu] = Eu ? (0, cE.s)(Eu, window.innerWidth, window.innerHeight, ju) : ju;
            return {
              top: su,
              right: Uu,
              bottom: Zu,
              left: Xu
            }
          }(fu, pu)))
        }), [fu, pu]),
        Ju = (0, Uu.useCallback)((() => {
          fu && hu(Oj(fu))
        }), [fu]),
        du = (0, Uu.useRef)((() => {}));
      return du.current = () => {
        Ju(), qu() || wu()
      }, (0, Uu.useLayoutEffect)((() => {
        if (fu) return BE(document, fu, (() => {
          du.current()
        }), Gu)
      }), [fu, Gu]), (0, Uu.useLayoutEffect)(Ju, [Ju, Zu]), (0, Uu.useLayoutEffect)((() => {
        fu && (LE(document, fu, {
          keysAbove: Yu
        }), xE(document, fu, ju, su, lu), Ju(), wu())
      }), [fu, ju, su, Yu, Xu, lu, Zu, wu, Ju]), (0, Uu.useEffect)((() => {
        var uu;
        if (!fu) return;
        const Eu = new ResizeObserver((() => {
          qu() || wu()
        }));
        for (const ju of fu.querySelectorAll(`[${Tu}]`)) Eu.observe(ju);
        return null === (uu = fu.fonts) || void 0 === uu || uu.ready.then(wu), () => {
          Eu.disconnect()
        }
      }), [fu, wu, qu, Xu]), {
        doc: fu,
        boxes: bu.boxes,
        pieces: bu.pieces,
        insets: Nu,
        keysAbove: Yu,
        ready: Du,
        settled: Mu
      }
    }
    const Dj = ["Above", "Below", "Left", "Right"];

    function gj(uu, Eu, ju, su, Uu) {
      const Zu = ju[uu],
        Xu = (Zu.left + Zu.right) / 2,
        lu = (Zu.top + Zu.bottom) / 2,
        qu = (7.5 * Eu.length + 14) / su,
        fu = 18 / su,
        Cu = {
          Above: {
            left: Xu - qu / 2,
            top: Zu.top - fu,
            right: Xu + qu / 2,
            bottom: Zu.top
          },
          Below: {
            left: Xu - qu / 2,
            top: Zu.bottom,
            right: Xu + qu / 2,
            bottom: Zu.bottom + fu
          },
          Left: {
            left: Zu.left - qu,
            top: lu - fu / 2,
            right: Zu.left,
            bottom: lu + fu / 2
          },
          Right: {
            left: Zu.right,
            top: lu - fu / 2,
            right: Zu.right + qu,
            bottom: lu + fu / 2
          }
        },
        bu = Cj(ju, uu),
        cu = {
          left: 0,
          top: 0,
          right: Uu.width,
          bottom: Uu.height
        };
      return Dj[(0, ku.v)(Dj.map((uu => Cu[uu])), bu, {
        bounds: cu
      })]
    }

    function Mj() {
      const [uu, Eu] = (0, qE.d)();
      return (0, Uu.useMemo)((() => ({
        width: uu,
        height: Eu
      })), [uu, Eu])
    }

    function ej(uu) {
      var Eu;
      const {
        layout: ju,
        orientation: Zu,
        selected: Xu,
        onSelect: lu,
        onMove: fu,
        canMove: Cu,
        actionButtons: bu,
        joystickFixed: cu,
        presence: Nu,
        keyNames: Yu,
        maxHeight: hu,
        fill: Du = !1,
        apiRef: gu
      } = uu, {
        t: Mu
      } = (0, su.A)(), eu = Mj(), pu = (null !== (Eu = (0, Ou.h)("maxAuraLevel")) && void 0 !== Eu ? Eu : 0) > 0, wu = ju.hudLayouts[Zu], Ju = (0, Uu.useRef)(null), du = (0, Uu.useRef)(null), au = (0, Uu.useRef)(null), Pu = (0, Uu.useRef)(null), vu = (0, Uu.useRef)(null), Ku = (0, Uu.useRef)(null), Vu = (0, fE.d)(Ju).width, Qu = Du ? 1 : Vu > 0 ? (0, ku.D)(Vu, eu.width, eu.height, hu) : 0, iu = (0, Uu.useRef)((() => !1)), Fu = (0, Uu.useCallback)((() => iu.current()), []), Bu = `${bu}:${cu}:${pu}`, {
        doc: Lu,
        boxes: tu,
        pieces: xu,
        insets: Tu,
        keysAbove: Au,
        ready: nu,
        settled: yu
      } = hj(au, {
        layout: ju,
        orientation: Zu,
        viewport: eu,
        replicaKey: Bu,
        joystickFixed: cu,
        busy: Fu
      }), zu = (0, Uu.useCallback)((uu => {
        Lu && xE(document, Lu, uu, Zu, cu)
      }), [Lu, Zu, cu]), Ru = (0, Uu.useCallback)((uu => {
        if (!Lu || !yu) return null;
        zu(uu);
        const Eu = Oj(Lu),
          ju = function(uu, Eu) {
            let {
              boxes: ju,
              pieces: su,
              pairHome: Uu
            } = uu;
            const Zu = su.find((uu => ru.has(uu.id)));
            if (!Zu || !Uu) return ju;
            const Xu = (0, ku.e)(Uu),
              lu = Eu(Zu.id),
              qu = RE(Zu.box) / lu / 2,
              fu = (Zu.box.bottom - Zu.box.top) / lu / 2;
            return {
              ...ju,
              inventory: {
                left: Xu.x - qu,
                top: Xu.y - fu,
                right: Xu.x + qu,
                bottom: Xu.y + fu
              }
            }
          }(cj(Lu), (Eu => (0, mu.C)(uu, Zu, Eu)[2]));
        return {
          boxes: ju,
          keysAbove: Eu,
          shopAlone: Yj(Lu)
        }
      }), [Lu, yu, zu, Zu]), uE = (0, Uu.useRef)(null), EE = (0, Uu.useRef)(null), jE = (0, Uu.useRef)(ju);
      jE.current = ju;
      const sE = (0, Uu.useCallback)((() => {
        null !== uE.current && (cancelAnimationFrame(uE.current), uE.current = null)
      }), []);
      (0, Uu.useEffect)((() => sE), [ju, sE]);
      const UE = (0, Uu.useRef)(-1 / 0),
        {
          lockable: ZE
        } = uu,
        lE = (0, Uu.useCallback)((uu => {
          if (zu(uu), UE.current = performance.now(), !yu || 0 === ju.hudLayouts[Zu].hudLocked.length) return;
          const Eu = ju;
          sE(), uE.current = requestAnimationFrame((() => {
            var ju;
            if (uE.current = null, jE.current !== Eu) return;
            const su = (null === (ju = EE.current) || void 0 === ju ? void 0 : ju.from) === Eu ? EE.current.measured : Ru(Eu);
            su && (EE.current = {
              from: Eu,
              measured: su
            }), zu(su ? Ej(Eu, uu, Zu, eu, Ru, {
              canKeep: ZE,
              passes: 1,
              before: su
            }) : uu)
          }))
        }), [zu, yu, ju, Zu, eu, Ru, ZE, sE]),
        qE = qj({
          preview: (uu, Eu) => {
            Eu ? lE((0, mu.fb)(ju, Zu, uu, Eu)) : (sE(), zu(ju))
          },
          stageRef: du,
          ringRef: Pu,
          centreLineRef: vu,
          snapCentre: ju.hudSnapCentre,
          ready: yu,
          measure: uu => {
            const Eu = Lu && nu ? cj(Lu).boxes[uu] : void 0;
            return Eu && (0, ku.m)(Eu, eu.width, eu.height) ? Eu : null
          },
          k: Qu,
          viewport: eu,
          boxes: tu,
          pieces: xu,
          selected: Xu,
          insets: Tu,
          layout: wu,
          canMove: Cu,
          onSelect: lu,
          onMove: (uu, Eu, ju) => {
            sE(), fu(uu, Eu, ju)
          }
        });
      (0, Uu.useLayoutEffect)((() => {
        iu.current = qE.busy
      }), [qE.busy]);
      const NE = (0, Uu.useRef)([]),
        OE = (0, Uu.useRef)(wu.hudElements);
      (0, Uu.useEffect)((() => {
        for (const Uu of Object.keys(wu.hudElements)) {
          var uu, Eu, ju, su;
          (null !== (uu = null === (Eu = wu.hudElements[Uu]) || void 0 === Eu ? void 0 : Eu[2]) && void 0 !== uu ? uu : 1) > (null !== (ju = null === (su = OE.current[Uu]) || void 0 === su ? void 0 : su[2]) && void 0 !== ju ? ju : 1) && Cu(Uu) && !(0, CE.t)(Uu, wu.hudElements[Uu]) && NE.current.push(...Su(Uu, Au, Cu))
        }
        OE.current = wu.hudElements
      }), [wu.hudElements, Cu, Au]), (0, Uu.useEffect)((() => {
        if (!nu) return;
        const uu = (0, ku.G)(eu.width, eu.height, Tu);
        for (const ju of ((uu, Eu, ju, su) => {
            const Uu = uu => {
              const Uu = Eu[uu],
                {
                  x: Zu,
                  y: Xu
                } = Uu && su(uu) ? (0, ku.J)(Uu, ju) : {
                  x: 0,
                  y: 0
                };
              return Uu && {
                left: Uu.left + Zu,
                top: Uu.top + Xu,
                right: Uu.right + Zu,
                bottom: Uu.bottom + Xu
              }
            };
            return uu.flatMap((uu => {
              const Zu = Eu[uu];
              if ("inventory" !== uu || !Zu || Zu.right - Zu.left <= ju.right - ju.left && Zu.bottom - Zu.top <= ju.bottom - ju.top) return [uu];
              const [Xu, lu] = [Uu("shop"), Uu("bag")];
              return Xu && lu && !(0, ku.q)(Xu, lu, 0) ? ["shop", "bag"].filter(su) : [uu]
            }))
          })(NE.current.splice(0), tu, uu, Cu)) {
          const su = tu[ju];
          if (!su || qE.busy() || !(0, ku.m)(su, eu.width, eu.height)) continue;
          const Uu = (0, ku.J)(su, uu);
          if (0 !== Uu.x || 0 !== Uu.y) {
            var Eu;
            const [uu, su] = null !== (Eu = wu.hudElements[ju]) && void 0 !== Eu ? Eu : [0, 0];
            fu(ju, uu + Uu.x / eu.width, su + Uu.y / eu.height)
          }
        }
      }), [tu, nu]), (0, Uu.useImperativeHandle)(gu, (() => ({
        setScale: (uu, Eu) => {
          lE((0, mu.fb)(ju, Zu, uu, {
            scale: Eu
          }))
        },
        setOpacity: uu => {
          zu({
            ...ju,
            hudKeyOpacity: uu
          })
        },
        keepLocks: (uu, Eu) => (sE(), Ej(uu, Eu, Zu, eu, Ru, {
          canKeep: ZE
        })),
        setSafe: uu => {
          const Eu = (0, cE.s)(uu, eu.width, eu.height, HE(null !== Lu && void 0 !== Lu ? Lu : document));
          lE((0, mu.mb)(ju, Zu, uu)), Ku.current && (Ku.current.style.inset = Eu.map((uu => uu * Qu + "px")).join(" "))
        }
      })), [zu, lE, Ru, sE, ZE, Lu, ju, Zu, eu, Qu]);
      const YE = new Set(Object.keys(wu.hudElements).filter((uu => (0, mu.u)(wu.hudElements, uu)))),
        hE = Xu ? tu[Xu] : void 0,
        DE = Xu ? Hu(Xu, bu, Mu, Yu) : "",
        gE = (0, VE.h)(eu.width, eu.height),
        ME = Xu ? function(uu, Eu, ju, su) {
          const Uu = uu => Wu(uu).some((uu => (0, mu.u)(ju.hudElements, uu) || (0, CE.q)(uu, ju, su)));
          if (Uu(uu)) return [];
          const Zu = uu => {
              var Eu, su;
              return "bag" === uu && 1 !== (null !== (Eu = null === (su = ju.hudElements.shop) || void 0 === su ? void 0 : su[2]) && void 0 !== Eu ? Eu : 1) || Wu(uu).some((uu => void 0 !== ju.hudElements[uu]))
            },
            Xu = Iu.get(uu),
            lu = Eu.filter((Eu => {
              let {
                id: ju
              } = Eu;
              return Xu ? Xu.has(ju) && !Uu(ju) : ju === uu
            })),
            qu = new Set;
          for (const fu of Eu) fu.id === uu || null !== Xu && void 0 !== Xu && Xu.has(fu.id) || qu.has(fu.id) || Uu(fu.id) || lu.some((uu => {
            let {
              id: Eu,
              box: su
            } = uu;
            return !bE(Eu, fu.id, ju) && (Zu(Eu) || Zu(fu.id)) && (0, ku.q)(su, fu.box, 2)
          })) && qu.add(fu.id);
          return [...qu]
        }(Xu, xu, wu, gE) : [],
        eE = new Set((0, CE.p)(wu.hudElements)),
        GE = (0, CE.D)(wu, (0, CE.B)(Nu.rowIcons)).state,
        pE = ME.join(),
        wE = (0, Uu.useRef)(uu.onReady);
      wE.current = uu.onReady, (0, Uu.useEffect)((() => {
        var uu;
        null === (uu = wE.current) || void 0 === uu || uu.call(wE, yu)
      }), [yu]);
      const JE = (0, Uu.useRef)(uu.onMeasured);
      (0, Uu.useLayoutEffect)((() => {
        JE.current = uu.onMeasured
      }));
      const dE = (0, Uu.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        aE = [bj(xu), eu.width, eu.height, Tu.top, Tu.right, Tu.bottom, Tu.left, nu, Bu].join("|");
      (0, Uu.useEffect)((() => {
        const uu = pE ? pE.split(",") : [],
          Eu = () => {
            var Eu;
            null === (Eu = JE.current) || void 0 === Eu || Eu.call(JE, tu, uu, dE.current.caps)
          };
        let ju;
        const su = () => {
          const uu = jE.current;
          if (!Lu || uu === dE.current.layout && aE === dE.current.input) return !1;
          const Uu = UE.current + 250 - performance.now();
          return uu === dE.current.layout && (Uu > 0 || Fu()) ? (ju = setTimeout((() => {
            su() && Eu()
          }), Math.max(Uu, 62.5)), !1) : (dE.current = {
            layout: uu,
            input: aE,
            caps: {
              hotbar: nE(Lu, vE),
              cluster: Nj(Lu, (0, ku.G)(eu.width, eu.height, Tu), vE)
            }
          }, !0)
        };
        return su(), Eu(), () => {
          clearTimeout(ju)
        }
      }), [tu, pE, Lu, eu, Tu, aE, Fu]);
      const PE = uu => ({
        left: uu.left * Qu,
        top: uu.top * Qu,
        width: (uu.right - uu.left) * Qu,
        height: (uu.bottom - uu.top) * Qu
      });
      return (0, Gu.jsx)("div", {
        ref: Ju,
        className: qu()("HudPreviewBox", {
          Fill: Du
        }),
        style: {
          height: eu.height * Qu
        },
        children: (0, Gu.jsxs)("div", {
          ref: du,
          className: "HudPreviewStage",
          style: {
            width: eu.width * Qu,
            height: eu.height * Qu
          },
          children: [(0, Gu.jsx)("iframe", {
            ref: au,
            className: "HudPreviewFrame",
            title: Mu("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: eu.width,
              height: eu.height,
              transform: `scale(${Qu})`
            }
          }), Lu && (0, XE.createPortal)((0, Gu.jsx)(kE, {
            presence: Nu,
            portraitPhone: gE,
            hidden: YE,
            actionButtons: bu,
            joystickFixed: cu,
            keysAbove: Au,
            auraBar: pu,
            trayState: GE,
            moved: eE
          }), Lu.body), (0, Gu.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...qE.handlers,
            children: [(0, Gu.jsx)("div", {
              ref: Ku,
              className: "HudPreviewSafeZone",
              style: {
                top: Tu.top * Qu,
                right: Tu.right * Qu,
                bottom: Tu.bottom * Qu,
                left: Tu.left * Qu
              }
            }), xu.map(((uu, Eu) => {
              let {
                id: ju,
                box: su
              } = uu;
              return (0, Gu.jsx)("div", {
                className: "HudPreviewHandle",
                style: PE((0, ku.u)(su, 40 / Qu))
              }, `${ju}:${Eu}`)
            })), wu.hudLocked.map((uu => {
              const Eu = tu[uu];
              return Eu && (0, Gu.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: Eu.right * Qu,
                  top: Eu.top * Qu
                },
                children: (0, Gu.jsx)(ou.e, {
                  name: "lock"
                })
              }, uu)
            })), (0, Gu.jsx)("div", {
              ref: vu,
              className: "HudPreviewCentreLine",
              style: {
                left: eu.width / 2 * Qu
              }
            }), Xu && hE && (0, Gu.jsx)("div", {
              ref: Pu,
              className: qu()("HudPreviewRing", {
                Fixed: !Cu(Xu),
                Overlap: ME.length > 0
              }),
              style: PE(hE),
              children: (0, Gu.jsx)("span", {
                className: qu()("HudPreviewRingLabel", gj(Xu, DE, tu, Qu, eu)),
                children: DE
              })
            })]
          })]
        })
      })
    }

    function Gj(uu, Eu) {
      (0, Uu.useEffect)((() => {
        var ju;
        null === (ju = uu.current) || void 0 === ju || ju.toggleAttribute("inert", Eu)
      }), [uu, Eu])
    }
    const pj = "hudFullScreen";

    function wj(uu) {
      let {
        onScale: Eu,
        onHidden: ju,
        onReset: Zu,
        locked: Xu,
        lockable: lu,
        onLocked: qu,
        onClose: Cu,
        ...bu
      } = uu;
      const {
        t: cu
      } = (0, su.A)(), Nu = (0, Uu.useRef)(null);
      (0, lE.w)("popup", Nu, Cu),
      function(uu) {
        const Eu = (0, Uu.useRef)(uu);
        Eu.current = uu, (0, Uu.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [pj]: !0
          }, "");
          let uu = !1;
          const ju = () => {
            uu = !0, Eu.current()
          };
          return window.addEventListener("popstate", ju), () => {
            var Eu;
            window.removeEventListener("popstate", ju), !uu && null !== (Eu = window.history.state) && void 0 !== Eu && Eu[pj] && window.history.back()
          }
        }), [])
      }(Cu), (0, Uu.useEffect)((() => {
        function uu(uu) {
          "Escape" === uu.key && (uu.stopPropagation(), Cu())
        }
        return window.addEventListener("keydown", uu, !0), () => {
          window.removeEventListener("keydown", uu, !0)
        }
      }), [Cu]);
      const {
        selected: Ou
      } = bu, Yu = (0, Uu.useRef)(null), hu = (0, Uu.useRef)(null), [Du, gu] = (0, Uu.useState)(!1);
      Gj(hu, !Du);
      const [Mu, eu] = (0, Uu.useState)(null), [pu, wu] = (0, Uu.useState)([]), [Ju, du] = mE(), au = (0, Uu.useRef)(bu.selected);
      au.current = bu.selected;
      const Pu = (0, Uu.useRef)({}),
        ou = (0, Uu.useCallback)((() => {
          const uu = Yu.current;
          uu && eu(function(uu, Eu, ju) {
            var su;
            const {
              innerWidth: Uu,
              innerHeight: Zu
            } = window, Xu = uu.offsetWidth, lu = uu.offsetHeight, qu = Math.max(TE()[0], 6), fu = [];
            for (const cu of [qu, .2 * Zu, .5 * Zu - lu / 2, .33 * Zu])
              for (const uu of [.5, .3, .7]) fu.push({
                left: Math.max(0, Math.min(Uu - Xu - 6, Math.max(6, Uu * uu - Xu / 2))),
                top: cu
              });
            const Cu = fu.map((uu => ({
                left: uu.left - 6,
                top: uu.top - 6,
                right: uu.left + Xu + 6,
                bottom: uu.top + lu + 6
              }))),
              bu = Cj(Eu, ju);
            return fu[(0, ku.v)(Cu, bu, {
              avoid: ju && null !== (su = Eu[ju]) && void 0 !== su ? su : null
            })]
          }(uu, Pu.current, au.current))
        }), []),
        mu = (0, Uu.useCallback)(((uu, Eu, ju) => {
          wu(Eu), du(ju), Pu.current = uu, ou()
        }), [ou, du]);
      return (0, Uu.useLayoutEffect)(ou, [bu.selected, ou]), (0, XE.createPortal)((0, Gu.jsxs)("div", {
        ref: Nu,
        className: "HudFullScreenEditor",
        children: [(0, Gu.jsx)(ej, {
          ...bu,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: mu,
          onReady: gu,
          lockable: lu
        }), (0, Gu.jsxs)("div", {
          ref: Yu,
          className: "HudFullScreenToolbar",
          style: null === Mu ? void 0 : {
            left: Mu.left,
            top: Mu.top,
            transform: "none"
          },
          children: [(0, Gu.jsx)("div", {
            ref: hu,
            className: "HudFullScreenControls",
            children: (0, Gu.jsx)(KE, {
              selected: Ou,
              layout: bu.layout.hudLayouts[bu.orientation],
              actionButtons: bu.actionButtons,
              keyNames: bu.keyNames,
              overlaps: pu,
              scaleCaps: Ju,
              onScale: Eu,
              onHidden: ju,
              onReset: Zu,
              locked: Xu,
              lockable: lu,
              onLocked: qu,
              joystickFixed: bu.joystickFixed
            })
          }), (0, Gu.jsx)(fu.f, {
            className: "HudFullScreenDone",
            onClick: Cu,
            padDefaultFocus: !0,
            children: cu("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const Jj = uu => `${Math.round(100*uu)}%`;

    function dj(uu) {
      let {
        info: Eu,
        tuple: ju,
        props: Uu
      } = uu;
      const {
        t: Zu
      } = (0, su.A)();
      return (0, Gu.jsx)(Nu.h, {
        name: Zu("hudLayout:size"),
        min: mu.m,
        max: mu.i,
        step: vE,
        initValue: ju[2],
        disabled: Uu.locked.has(Eu.id),
        selectableMax: Uu.scaleCaps[Eu.id],
        cappedNote: Zu("hudLayout:sizeCapped"),
        format: Jj,
        onChange: uu => {
          Uu.onScalePreview(Eu.id, uu)
        },
        onChangeComplete: uu => {
          Uu.onScale(Eu.id, uu)
        }
      })
    }

    function aj(uu) {
      const {
        t: Eu
      } = (0, su.A)(), {
        present: ju,
        elements: Zu,
        selected: Xu,
        onSelect: lu,
        onHidden: fu,
        onReset: Cu,
        note: bu,
        actionButtons: cu,
        keyNames: Nu,
        sizeBesidePreview: Ou,
        locked: Yu,
        lockable: hu,
        onLocked: Du
      } = uu, {
        rowIconsOpen: gu,
        onRowIconsOpen: Mu
      } = uu, eu = (0, Uu.useRef)(null), pu = null !== Xu && (gu || !(0, mu.O)(Xu));
      return (0, Uu.useEffect)((() => {
        var uu;
        const Eu = Xu ? null === (uu = eu.current) || void 0 === uu ? void 0 : uu.querySelector(`[data-hud-row="${Xu}"]`) : null;
        if (!Eu) return;
        const ju = Eu.closest(".SettingsMenuRight"),
          su = performance.now();
        let Uu = null;
        const Zu = () => {
            clearInterval(qu), null === ju || void 0 === ju || ju.removeEventListener("scroll", lu)
          },
          lu = () => {
            Uj() || Zu()
          },
          qu = setInterval((() => {
            const uu = performance.now();
            uu - su > 1500 ? Zu() : Uj() ? Uu = null : null === Uu ? Uu = uu : uu - Uu >= 150 && (Zu(), function(uu) {
              var Eu;
              const ju = uu.closest(".SettingsMenuRight"),
                su = null === (Eu = uu.closest(".HudLayoutSettings")) || void 0 === Eu ? void 0 : Eu.querySelector(".HudLayoutPreviewBox");
              if (!ju || !su) return;
              const Uu = su.getBoundingClientRect().bottom + 8,
                Zu = ju.getBoundingClientRect().bottom - 8,
                Xu = uu.getBoundingClientRect();
              Xu.top < Uu ? ju.scrollBy({
                top: Xu.top - Uu,
                behavior: "smooth"
              }) : Xu.bottom > Zu && ju.scrollBy({
                top: Math.min(Xu.bottom - Zu, Xu.top - Uu),
                behavior: "smooth"
              })
            }(Eu))
          }), 50);
        return null === ju || void 0 === ju || ju.addEventListener("scroll", lu, {
          passive: !0
        }), Zu
      }), [Xu, pu]), (0, Gu.jsx)("div", {
        ref: eu,
        className: "SettingBoxGroup HudElementList",
        children: tu.filter((uu => ju.has(uu.id) && (gu || !(0, mu.O)(uu.id)))).map((ju => {
          const su = ((uu, Eu) => {
              var ju;
              return null !== (ju = uu[Eu]) && void 0 !== ju ? ju : mu.q
            })(Zu, ju.id),
            Uu = (0, mu.u)(Zu, ju.id),
            eu = ju.id === Xu,
            pu = ju.scale && !Ou,
            wu = bu(ju.id, eu);
          return (0, Gu.jsxs)("div", {
            "data-hud-row": ju.id,
            className: qu()("SettingBox HudElementRow", {
              Open: eu,
              Hidden: Uu,
              Child: void 0 !== ju.parent,
              Grandchild: iu(ju.id).length > 1
            }),
            children: [(0, Gu.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, Gu.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": pu ? eu : void 0,
                onClick: () => {
                  lu(ju.id)
                },
                children: (0, Gu.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [Hu(ju.id, cu, Eu, Nu), ju.scale && 1 !== su[2] && !(eu && pu) && (0, Gu.jsxs)(Gu.Fragment, {
                    children: [" ", (0, Gu.jsx)("span", {
                      className: "HudElementRowSize",
                      children: Jj(su[2])
                    })]
                  }), pu && (0, Gu.jsxs)(Gu.Fragment, {
                    children: [" ", (0, Gu.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, Gu.jsx)(Ru, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: ju.id,
                actionButtons: cu,
                keyNames: Nu,
                locked: Yu.has(ju.id),
                lockable: hu(ju.id),
                onLocked: Du
              }), "menu" === ju.id && (0, Gu.jsx)(uE, {
                className: "HudElementRowIcon",
                open: gu,
                name: Hu(ju.id, cu, Eu, Nu),
                onToggle: Mu
              }), "menu" !== ju.id && (0, Gu.jsx)(yu, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: ju.id,
                elements: Zu,
                actionButtons: cu,
                keyNames: Nu,
                onHidden: fu
              }), (0, Gu.jsx)(zu, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: Yu.has(ju.id),
                id: ju.id,
                elements: Zu,
                actionButtons: cu,
                keyNames: Nu,
                onReset: Cu
              })]
            }), eu && pu && (0, Gu.jsx)(dj, {
              info: ju,
              tuple: su,
              props: uu
            }), wu && (0, Gu.jsx)("div", {
              className: "HudElementNote",
              children: wu
            })]
          }, ju.id)
        }))
      })
    }

    function Pj(uu) {
      let {
        preview: Eu,
        quick: ju,
        onFullScreen: Zu,
        resting: Xu,
        onSidePanel: lu
      } = uu;
      const {
        t: qu
      } = (0, su.A)(), Cu = Mj(), bu = (0, Uu.useRef)(null), {
        width: cu
      } = (0, fE.d)(bu), Nu = Math.floor(Cu.width * Math.min(1, Eu.maxHeight / Cu.height)), Ou = cu - Nu - 12, Yu = Ou >= 130, hu = cu > 0;
      (0, Uu.useEffect)((() => {
        hu && lu(Yu)
      }), [hu, Yu, lu]);
      const Du = (0, ku.D)(Yu ? Nu : cu, Cu.width, Cu.height, Eu.maxHeight),
        gu = Xu ? (0, Gu.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: Cu.height * Du
          }
        }) : (0, Gu.jsx)(ej, {
          ...Eu
        }),
        Mu = uu => (0, Gu.jsxs)(fu.$, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: qu("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: Zu,
          children: [(0, Gu.jsx)(ou.e, {
            name: "expand"
          }), uu && (0, Gu.jsx)("span", {
            children: qu("hudLayout:fullScreen")
          })]
        });
      return (0, Gu.jsxs)("div", {
        ref: bu,
        className: "SettingBox HudLayoutPreviewBox",
        children: [cu > 0 && Yu && (0, Gu.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, Gu.jsx)("div", {
            style: {
              width: Nu
            },
            children: gu
          }), (0, Gu.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, Gu.jsx)(KE, {
              selected: Eu.selected,
              ...ju,
              joystickFixed: Eu.joystickFixed,
              extra: Mu(!Eu.selected || Ou >= 278)
            })
          })]
        }), cu > 0 && !Yu && (0, Gu.jsxs)(Gu.Fragment, {
          children: [gu, (0, Gu.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: Mu(!1)
          })]
        })]
      })
    }
    var oj = ju(2600),
      kj = ju(4588),
      mj = ju(2573),
      vj = ju(2531);
    const Kj = uu => {
      const Eu = cE.n * ("sides" === uu ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(Eu / 2))
    };

    function Vj(uu, Eu, ju) {
      const [su, Uu, Zu, Xu] = uu;
      return "sides" === Eu ? [su, ju, Zu, ju] : [ju, Uu, ju, Xu]
    }
    const rj = [null, null, null, null],
      Qj = uu => `${uu}px`;

    function ij(uu) {
      let {
        safe: Eu,
        onPreview: ju,
        onCommit: Zu
      } = uu;
      const {
        t: Xu
      } = (0, su.A)(), lu = (0, cE.s)(null !== Eu && void 0 !== Eu ? Eu : rj, window.innerWidth, window.innerHeight, HE(document).map(Math.round)), qu = (0, Uu.useRef)(null !== Eu && void 0 !== Eu ? Eu : rj);
      qu.current = null !== Eu && void 0 !== Eu ? Eu : rj;
      const Cu = uu => {
        const Eu = Math.min(Kj(uu), "sides" === uu ? Math.max(lu[1], lu[3]) : Math.max(lu[0], lu[2]));
        return (0, Gu.jsx)(Nu.h, {
          name: Xu("sides" === uu ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: Kj(uu),
          step: 2,
          initValue: Eu,
          format: Qj,
          onChange: Eu => {
            ju(Vj(qu.current, uu, Eu))
          },
          onChangeComplete: su => {
            if (su === Eu) return void ju(qu.current);
            const Uu = Vj(qu.current, uu, su);
            qu.current = Uu, Zu(Uu), (0, Ju.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: uu
            })
          }
        })
      };
      return (0, Gu.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, Gu.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, Gu.jsx)("div", {
            children: Xu("hudLayout:safeZone")
          }), (0, Gu.jsx)(fu.$, {
            active: null === Eu,
            pressed: null === Eu,
            onClick: () => {
              Zu(null)
            },
            children: Xu("hudLayout:safeZoneAuto")
          })]
        }), Cu("sides"), Cu("ends")]
      })
    }

    function Wj() {
      const {
        t: uu
      } = (0, su.A)(), Eu = (0, mu.bb)(), {
        clientEscMenuOptions: ju
      } = (0, Cu.l)(["clientEscMenuOptions"]), Zu = (0, oj.l)(), Xu = Eu.hudLayouts[Zu], [lu, qu] = (0, Uu.useState)(null), {
        rowIconsOpen: bu,
        onRowIconsOpen: cu,
        select: Ou
      } = function(uu, Eu) {
        const [ju, su] = (0, Uu.useState)((() => mu.D.some((Eu => void 0 !== uu.hudElements[Eu] || uu.hudLocked.includes(Eu))))), Zu = (0, Uu.useCallback)((uu => {
          Eu(uu), (0, mu.O)(uu) && su(!0)
        }), [Eu]);
        return {
          rowIconsOpen: ju,
          onRowIconsOpen: su,
          select: Zu
        }
      }(Xu, qu), [Yu, hu] = (0, Uu.useState)([]), [Du, gu] = (0, Uu.useState)(null), [Mu, eu] = mE(), pu = (0, Uu.useCallback)(((uu, Eu, ju) => {
        hu(Eu), eu(ju);
        const su = Object.keys(uu);
        gu((uu => (null === uu || void 0 === uu ? void 0 : uu.size) === su.length && su.every((Eu => uu.has(Eu))) ? uu : new Set(su)))
      }), [eu]), {
        gameState: wu
      } = (0, Cu.l)(["gameState"]), au = (0, mj.g)(), Pu = (0, vj.l)(), [ou] = (0, Uu.useState)((() => {
        var uu, Eu, ju, su;
        return "inGame" === wu ? (0, OE.t)(document, au, {
          rightOfCamera: null !== (uu = null === (Eu = Pu.rightOfCamera) || void 0 === Eu ? void 0 : Eu.icon) && void 0 !== uu ? uu : null,
          leftEnd: null !== (ju = null === (su = Pu.leftEnd) || void 0 === su ? void 0 : su.icon) && void 0 !== ju ? ju : null
        }) : OE.d
      })), ku = (0, Uu.useRef)(null), vu = (0, Uu.useRef)(null), Ku = function(uu) {
        const [Eu, ju] = (0, Uu.useState)((() => .4 * window.innerHeight));
        return (0, Uu.useLayoutEffect)((() => {
          var Eu;
          const su = null === (Eu = uu.current) || void 0 === Eu ? void 0 : Eu.closest(".SettingsMenuRight");
          if (!su) return;
          const Uu = () => {
            const uu = su.clientHeight < Sj ? .4 : .5;
            ju(Math.max(80, su.clientHeight * uu - 24))
          };
          Uu();
          const Zu = new ResizeObserver(Uu);
          return Zu.observe(su), () => {
            Zu.disconnect()
          }
        }), [uu]), Eu
      }(vu), Vu = (0, kj.k)(ju.joystickMode), ru = ju.touchActionButtons, iu = (0, Uu.useMemo)((() => (0, OE.r)(ou, ru)), [ou, ru]), Wu = (0, Uu.useMemo)((() => new Set((0, OE.q)(ou, ru).map((uu => OE.f[uu])))), [ou, ru]);
      (0, Uu.useEffect)((() => {
        (0, Ju.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [Su, Iu] = (0, Uu.useState)(!1), [Fu, Bu] = (0, Uu.useState)(!1), Lu = (0, Uu.useRef)(null);
      Gj(Lu, !Fu);
      const [Tu, nu] = (0, Uu.useState)(!1), yu = (0, Uu.useCallback)((() => {
        nu(!1)
      }), []), zu = (0, Uu.useMemo)((() => new Set(Xu.hudLocked)), [Xu.hudLocked]), Ru = uu => {
        var Eu, ju;
        const su = (0, mu.r)(),
          Uu = uu(su);
        (0, mu.Z)(null !== (Eu = null === (ju = ku.current) || void 0 === ju ? void 0 : ju.keepLocks(su, Uu)) && void 0 !== Eu ? Eu : Uu)
      }, uE = (uu, Eu) => {
        Ru((ju => (0, mu.fb)(ju, Zu, uu, Eu)))
      }, EE = (uu, Eu, ju) => {
        uE(uu, {
          dx: Eu,
          dy: ju
        }), (0, Ju.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${uu}`
        })
      }, jE = (uu, Eu) => {
        Ru((ju => (0, mu.jb)(ju, Zu, uu, Eu)))
      }, sE = uu => {
        const Eu = xu[uu];
        return (Eu.move || Eu.scale) && ("joystick" !== uu || Vu) && !(0, CE.t)(uu, Xu.hudElements[uu])
      }, XE = uu => xu[uu].move && ("joystick" !== uu || Vu) && !zu.has(uu), lE = new Set(tu.map((uu => uu.id)).filter((uu => {
        const Eu = (0, mu.O)(uu) && !ou.rowIcons.includes(uu);
        return null === Du || Du.has(uu) || (0, mu.u)(Xu.hudElements, uu) && !Eu
      }))), qE = {
        present: lE,
        actionButtons: ru,
        keyNames: iu,
        scaleCaps: Mu,
        sizeBesidePreview: Su,
        elements: Xu.hudElements,
        selected: lu,
        onSelect: Ou,
        rowIconsOpen: bu,
        onRowIconsOpen: cu,
        onScalePreview: (uu, Eu) => {
          var ju;
          null === (ju = ku.current) || void 0 === ju || ju.setScale(uu, Eu)
        },
        onScale: (uu, Eu) => {
          uE(uu, {
            scale: Eu
          }), (0, Ju.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${uu}`
          })
        },
        onHidden: (uu, Eu) => {
          uE(uu, {
            hidden: Eu
          }), (0, Ju.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${Eu?"hide":"show"}:${uu}`
          })
        },
        onReset: uu => {
          uE(uu, mu.c)
        },
        locked: zu,
        lockable: sE,
        onLocked: jE,
        note: (Eu, ju) => {
          const su = ju && Yu.length > 0 ? uu("hudLayout:overlapsNote", {
            names: Au(Yu, ru, uu, iu)
          }) : null;
          if (ju && UE(Eu, Vu)) return (0, Gu.jsxs)(Gu.Fragment, {
            children: [su && (0, Gu.jsx)("span", {
              children: su
            }), (0, Gu.jsx)("span", {
              children: uu("hudLayout:floatingJoystickNote")
            }), !Su && (0, Gu.jsx)(ZE, {})]
          });
          if (su) return su;
          const Uu = ju && zu.has(Eu) ? uu("hudLayout:lockedNote") : null,
            Zu = ju && Wu.has(Eu) ? uu("hudLayout:contextSlotNote") : null;
          return Uu || Zu ? (0, Gu.jsxs)(Gu.Fragment, {
            children: [Uu && (0, Gu.jsx)("span", {
              children: Uu
            }), Zu && (0, Gu.jsx)("span", {
              children: Zu
            })]
          }) : ju && "cluster" === Eu ? uu("hudLayout:clusterNote") : ju && "inventory" === Eu ? uu("hudLayout:inventoryNote") : ju && "menu" === Eu ? uu("hudLayout:menuNote") : ju && (0, CE.t)(Eu, Xu.hudElements[Eu]) && XE(Eu) ? uu("hudLayout:rowIconNote") : ju && "arrows" === Eu ? uu("hudLayout:arrowsNote") : ju && "sprint" === Eu ? uu("hudLayout:sprintNote") : Qu(Eu) && (0, mu.u)(Xu.hudElements, Eu) ? uu("hudLayout:inventoryHiddenNote", {
            name: Hu(Eu, ru, uu, iu)
          }) : null
        }
      };
      return (0, Gu.jsxs)("div", {
        ref: vu,
        className: "HudLayoutSettings",
        children: [(0, Gu.jsxs)("div", {
          ref: Lu,
          className: "HudLayoutBody",
          children: [(0, Gu.jsx)("div", {
            className: "HudLayoutOrientation",
            children: uu("landscape" === Zu ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, Gu.jsx)(Pj, {
            preview: {
              layout: Eu,
              orientation: Zu,
              selected: lu,
              onSelect: Ou,
              onMove: EE,
              canMove: XE,
              actionButtons: ru,
              joystickFixed: Vu,
              presence: ou,
              keyNames: iu,
              maxHeight: Ku,
              apiRef: ku,
              onMeasured: pu,
              onReady: Bu,
              lockable: sE
            },
            quick: {
              layout: Xu,
              actionButtons: ru,
              keyNames: iu,
              scaleCaps: Mu,
              overlaps: Yu,
              onScale: qE.onScale,
              onHidden: qE.onHidden,
              onReset: qE.onReset,
              locked: zu,
              lockable: sE,
              onLocked: jE
            },
            onFullScreen: () => {
              nu(!0)
            },
            resting: Tu,
            onSidePanel: Iu
          }), Tu && (0, Gu.jsx)(wj, {
            layout: Eu,
            orientation: Zu,
            selected: lu,
            onSelect: Ou,
            onMove: EE,
            canMove: XE,
            actionButtons: ru,
            joystickFixed: Vu,
            presence: ou,
            keyNames: iu,
            onScale: qE.onScale,
            onHidden: qE.onHidden,
            onReset: qE.onReset,
            locked: zu,
            lockable: sE,
            onLocked: jE,
            apiRef: ku,
            onClose: yu
          }), (0, Gu.jsx)(ij, {
            safe: Xu.hudSafe,
            onCommit: uu => {
              Ru((Eu => (0, mu.mb)(Eu, Zu, uu)))
            },
            onPreview: uu => {
              var Eu;
              null === (Eu = ku.current) || void 0 === Eu || Eu.setSafe(uu)
            }
          }), (0, Gu.jsx)(Nu.b, {
            label: uu("hudLayout:snapCentre"),
            checked: Eu.hudSnapCentre,
            onClick: uu => {
              (0, mu.V)(uu)
            },
            circleInfoText: uu("hudLayout:snapCentreInfo")
          }), (0, Gu.jsx)(aj, {
            ...qE
          }), (0, Gu.jsx)(Nu.f, {
            label: uu("hudLayout:shape"),
            options: mu.F.map((Eu => ({
              value: Eu,
              label: uu(`hudLayout:shape_${Eu}`)
            }))),
            value: Eu.hudShape,
            onChange: uu => {
              Ru((Eu => ({
                ...Eu,
                hudShape: uu
              }))), (0, Ju.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: uu
              })
            }
          }), (0, Gu.jsx)(Nu.h, {
            name: uu("hudLayout:opacity"),
            min: mu.f,
            max: 1,
            step: .05,
            initValue: Eu.hudKeyOpacity,
            format: uu => `${Math.round(100*uu)}%`,
            circleInfoText: uu("hudLayout:opacityInfo"),
            onChange: uu => {
              var Eu;
              null === (Eu = ku.current) || void 0 === Eu || Eu.setOpacity(uu)
            },
            onChangeComplete: uu => {
              (0, mu.R)(uu), (0, Ju.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, Gu.jsx)(fu.R, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const uu = du.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await uu.getResult() && (0, mu.Q)()
            }()
          },
          children: uu("hudLayout:resetAll")
        })]
      })
    }
    const Sj = 350;
    const Ij = [function() {
      const {
        t: uu
      } = (0, su.A)(), [Eu, ju] = (0, Uu.useState)(!1), Zu = (0, Uu.useRef)(null);
      return (0, Uu.useEffect)((() => {
        var uu;
        Eu && (null === (uu = Zu.current) || void 0 === uu || uu.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [Eu]), (0, Gu.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, Gu.jsx)(au.e, {
          ref: Zu,
          icon: "arrows-up-down-left-right",
          title: uu("hudLayout:title"),
          sub: uu("hudLayout:entrySub"),
          expanded: Eu,
          onClick: () => {
            ju(!Eu)
          }
        }), Eu && (0, Gu.jsx)(Wj, {})]
      })
    }, function() {
      const {
        t: uu
      } = (0, su.A)(), {
        joystickMode: Eu,
        touchSpeedCurve: ju,
        autorun: Uu,
        jumpLock: Zu,
        touchEdgeGuard: Xu
      } = (0, Cu.l)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, Gu.jsxs)(Gu.Fragment, {
        children: [(0, Gu.jsx)(Nu.f, {
          label: uu("settingsMenu:joystick"),
          options: eu.vb.map((Eu => ({
            value: Eu,
            label: uu(pu[Eu])
          }))),
          value: Eu,
          onChange: uu => {
            Cu.d.setClientEscMenuOptions({
              joystickMode: uu
            })
          },
          circleInfoText: uu("settingsMenu:joystickInfo")
        }), (0, Gu.jsx)(Nu.b, {
          label: uu("settingsMenu:preciseWalking"),
          checked: ju,
          onClick: uu => {
            Cu.d.setClientEscMenuOptions({
              touchSpeedCurve: uu
            })
          },
          circleInfoText: uu("settingsMenu:preciseWalkingInfo")
        }), (0, Gu.jsx)(Nu.b, {
          label: uu("settingsMenu:autoRun"),
          checked: Uu,
          onClick: uu => {
            Cu.d.setClientEscMenuOptions({
              autorun: uu
            })
          },
          circleInfoText: uu("settingsMenu:autoRunInfo")
        }), (0, Gu.jsx)(Nu.b, {
          label: uu("settingsMenu:jumpLock"),
          checked: Zu,
          onClick: uu => {
            Cu.d.setClientEscMenuOptions({
              jumpLock: uu
            })
          },
          circleInfoText: uu("settingsMenu:jumpLockInfo")
        }), (0, Gu.jsx)(Nu.b, {
          label: uu("touchSettings:stopAtEdges"),
          checked: Xu,
          onClick: uu => {
            Cu.d.setClientEscMenuOptions({
              touchEdgeGuard: uu
            })
          },
          circleInfoText: uu("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, Gu.jsx)(Mu.d, {})
    }, function() {
      const {
        t: uu
      } = (0, su.A)(), {
        clientEscMenuOptions: Eu
      } = (0, Cu.l)(["clientEscMenuOptions"]);
      return (0, wu.c)() ? (0, Gu.jsx)(Nu.b, {
        label: uu("settingsMenu:vibration"),
        checked: Eu.vibration,
        onClick: uu => {
          Cu.d.setClientEscMenuOptions({
            vibration: uu
          })
        },
        circleInfoText: uu("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Fj() {
      return (0, Gu.jsx)(Gu.Fragment, {
        children: Ij.map(((uu, Eu) => (0, Gu.jsx)(uu, {}, Eu)))
      })
    }
    var Bj = ju(4531);

    function Lj() {
      const {
        t: uu
      } = (0, su.A)(), {
        isTouchScreen: Eu,
        clientEscMenuOptions: ju,
        gameState: Xu
      } = (0, Cu.l)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), lu = (0, Ou.h)("ezBridging"), qu = (0, Ou.h)("ezTowering"), hu = "inGame" !== Xu || !0 === lu, Du = (0, Yu.e)(), Mu = null !== Du && ("inGame" !== Xu || !0 === qu), [, eu] = (0, Uu.useReducer)((uu => uu + 1), 0), pu = (0, gu.d)(), [wu, Ju] = (0, Uu.useState)(Bj.f);
      return (0, Gu.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [pu && (0, Gu.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, Gu.jsx)("div", {
            children: uu("controller:settingsControlsNote")
          }), (0, Gu.jsx)(fu.$, {
            onClick: () => {
              Cu.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: uu("controller:settingsOpenController")
          })]
        }), (0, bu.isTouchscreen)() && !(0, bu.isMobile)() ? (0, Gu.jsx)(Gu.Fragment, {
          children: (0, Gu.jsx)(Nu.b, {
            label: uu("settingsMenu:useTouchControls"),
            checked: wu,
            onClick: uu => {
              (0, Bj.b)(uu), Ju(uu)
            }
          })
        }) : null, Eu && (0, Gu.jsx)(Fj, {}), hu && (0, Gu.jsx)(Nu.b, {
          label: uu("settingsMenu:ezBridging"),
          checked: ju.ezBridging,
          onClick: uu => {
            Cu.d.setClientEscMenuOptions({
              ezBridging: uu
            })
          },
          circleInfoText: uu("settingsMenu:ezBridgingInfo")
        }), Mu && (0, Gu.jsx)(Nu.b, {
          label: uu("settingsMenu:ezTowering"),
          checked: ju.ezTowering,
          onClick: uu => {
            Cu.d.setClientEscMenuOptions({
              ezTowering: uu
            })
          },
          circleInfoText: uu("jump" === Du ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, Gu.jsx)(Nu.b, {
          label: uu("settingsMenu:crouchToggle"),
          checked: ju.crouchIsToggle,
          onClick: uu => {
            Cu.d.setClientEscMenuOptions({
              crouchIsToggle: uu
            })
          },
          circleInfoText: uu("settingsMenu:crouchToggleInfo")
        }), (0, Gu.jsx)(Nu.b, {
          label: uu("settingsMenu:hideUiToggle"),
          checked: ju.hideUiIsToggle,
          onClick: uu => {
            Cu.d.setClientEscMenuOptions({
              hideUiIsToggle: uu
            })
          },
          circleInfoText: uu("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, cu.c)() && (0, Gu.jsx)(Nu.h, {
          name: uu("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: ju.touchscreenSensitivity,
          onChange: uu => {
            Cu.d.setClientEscMenuOptions({
              touchscreenSensitivity: uu
            })
          }
        }), !(0, bu.isMobile)() && (0, Gu.jsx)(Nu.h, {
          name: uu("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: ju.mouseSensitivity,
          onChange: uu => {
            Cu.d.setClientEscMenuOptions({
              mouseSensitivity: uu
            })
          }
        }), !(0, bu.isMobile)() && (0, Gu.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, Gu.jsx)("div", {
            className: "SliderText",
            children: uu("settingsMenu:keyBindings")
          }), Zu.i.map((Eu => (0, Gu.jsx)(tj, {
            title: uu(Eu.name.translationKey, Eu.name.params),
            defaultOpen: Zu.l.has(Eu.id),
            children: Eu.actions.map((uu => (0, Gu.jsx)(xj, {
              noaAction: uu,
              forceUpdate: eu,
              clashesWith: Eu.clashesWith,
              showPadGlyph: pu
            }, uu)))
          }, Eu.name.translationKey))), (0, Gu.jsx)(fu.R, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, Zu.H)(), eu()
            },
            children: uu("controls:resetBindings")
          })]
        })]
      })
    }

    function tj(uu) {
      let {
        title: Eu,
        defaultOpen: ju,
        children: su
      } = uu;
      const [Zu, Xu] = (0, Uu.useState)(ju);
      return (0, Gu.jsxs)("div", {
        className: qu()("ControlsSection", {
          Collapsed: !Zu
        }),
        children: [(0, Gu.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            Xu(!Zu)
          },
          children: [(0, Gu.jsx)("div", {
            className: "ControlsSectionTitle",
            children: Eu
          }), (0, Gu.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), Zu && (0, Gu.jsx)("div", {
          className: "ControlsSectionRows",
          children: su
        })]
      })
    }

    function xj(uu) {
      let {
        noaAction: Eu,
        forceUpdate: ju,
        clashesWith: lu,
        showPadGlyph: Cu
      } = uu;
      const {
        t: bu
      } = (0, su.A)(), cu = (0, Du.b)(Eu), [Nu, Ou] = (0, Uu.useState)(!1), [Yu, gu] = (0, Uu.useState)("controls:clickToEnterNewBinding"), [Mu, eu] = (0, Uu.useState)(null), [pu, wu] = (0, Uu.useState)(null), Ju = (0, Uu.useRef)(null);
      (0, Uu.useEffect)((() => {
        Nu && Ju.current && Ju.current.focus()
      }), [Nu]);
      const du = Zu.z[Eu].filter((uu => Xu.h[uu]));
      let au = null;
      const Pu = [],
        ou = lu.flatMap((uu => {
          var Eu, ju;
          return null !== (Eu = null === (ju = Zu.i.find((Eu => Eu.id === uu))) || void 0 === ju ? void 0 : ju.actions) && void 0 !== Eu ? Eu : []
        }));
      for (const su of ou) {
        if (su === Eu) continue;
        const uu = Zu.z[su];
        for (const Eu of uu) du.includes(Eu) && Pu.push(bu(Zu.A[su].translationKey, Zu.A[su].params))
      }
      Pu.length > 0 && (au = bu("controls:sharedBindingsWarning") + " ", au += Pu.join(", "));
      const ku = () => {
          Ou(!1), eu(null), gu("controls:clickToEnterNewBinding"), wu(null)
        },
        mu = () => "BindingInput_" + Eu;
      return (0, Gu.jsxs)("div", {
        className: qu()("ControlRow", {
          WarningBorder: null !== au
        }),
        children: [(0, Gu.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, Gu.jsxs)("div", {
            className: "ControlName",
            children: [bu(Zu.A[Eu].translationKey, Zu.A[Eu].params), Cu && cu && (0, Gu.jsx)(hu.d, {
              glyph: cu,
              className: "ControlPadGlyph"
            })]
          }), (0, Gu.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, Gu.jsxs)("div", {
              className: "ControlBindingsList",
              children: [du.map((uu => (0, Gu.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, Gu.jsx)("div", {
                  children: (0, Zu.q)(uu)
                }), (0, Gu.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const su = (0, Zu.B)(Eu, uu);
                    su.isError() ? wu(su.asError().message) : wu(null), ju()
                  },
                  children: "\xd7"
                })]
              }, uu))), !Nu && (0, Gu.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  Ou(!0), wu(null)
                },
                children: (0, Gu.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), Nu && (0, Gu.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, Gu.jsxs)("div", {
                className: "InputContainer",
                children: [(0, Gu.jsx)("div", {
                  className: "InputOverlay",
                  children: Mu ? (0, Zu.q)(Mu) : (0, Gu.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: bu(Yu)
                  })
                }), (0, Gu.jsx)("input", {
                  ref: Ju,
                  id: mu(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: uu => {
                    if ("Escape" === uu.code) return ku(), uu.preventDefault(), void uu.stopPropagation();
                    const Eu = uu.code;
                    Xu.c.includes(Eu) ? (wu(null), eu(Eu)) : (wu("controls:keyIsReserved"), eu(null)), uu.preventDefault(), uu.stopPropagation()
                  },
                  onMouseDown: uu => {
                    const Eu = "Mouse" + (uu.button + 1);
                    document.activeElement && document.activeElement.id === mu() ? Xu.c.includes(Eu) ? (wu(null), eu(Eu)) : (wu("controls:keyIsReserved"), eu(null)) : gu("controls:enterNewBinding"), uu.stopPropagation()
                  },
                  onBlur: () => {
                    gu("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, Gu.jsx)(fu.f, {
                onPointerDown: uu => {
                  uu.preventDefault()
                },
                onClick: () => {
                  (0, Zu.e)(Eu, Mu), ju(), ku()
                },
                className: "ControlBindingAddButton",
                disabled: null === Mu,
                children: bu("general:add")
              }), (0, Gu.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  ku()
                },
                children: "\xd7"
              })]
            }), pu && (0, Gu.jsx)("div", {
              className: "ControlBindingError",
              children: bu(pu)
            })]
          })]
        }), au && (0, Gu.jsx)("div", {
          className: "ControlRowWarning",
          children: au
        })]
      })
    }
  },
  9100: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu
    });
    var su = ju(58),
      Uu = ju(1116),
      Zu = ju(1154);
    const Xu = (0, su.forwardRef)((function(uu, Eu) {
      let {
        icon: ju,
        title: su,
        sub: Xu,
        expanded: lu,
        onClick: qu
      } = uu;
      return (0, Zu.jsxs)("button", {
        ref: Eu,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": lu,
        onClick: qu,
        children: [(0, Zu.jsx)(Uu.e, {
          name: ju,
          className: "FeaturedSettingsEntryIcon"
        }), (0, Zu.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, Zu.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: su
          }), (0, Zu.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: Xu
          })]
        }), (0, Zu.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  8896: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Du,
      f: () => hu,
      h: () => Cu,
      k: () => gu,
      m: () => Mu,
      o: () => cu
    });
    var su = ju(1710),
      Uu = ju(1787);
    const Zu = uu => uu >= 56320 && uu <= 57343,
      Xu = uu => uu >= 55296 && uu <= 56319,
      lu = (uu, Eu) => Eu >= 2 && Zu(uu.charCodeAt(Eu - 1)) && Xu(uu.charCodeAt(Eu - 2)) ? Eu - 2 : Math.max(0, Eu - 1),
      qu = (uu, Eu) => {
        let ju;
        var su, Uu;
        return ju = uu.start !== uu.end ? Eu < 0 ? uu.start : uu.end : Eu < 0 ? lu(uu.value, uu.start) : (su = uu.value, (Uu = uu.start) + 1 < su.length && Xu(su.charCodeAt(Uu)) && Zu(su.charCodeAt(Uu + 1)) ? Uu + 2 : Math.min(su.length, Uu + 1)), {
          value: uu.value,
          start: ju,
          end: ju
        }
      },
      fu = ["text", "search", "url", "email", "tel", "password", "number"],
      Cu = uu => !(!(0, Uu.e)(uu) || uu.isContentEditable || uu.hasAttribute("data-pad-no-osk")) && (uu instanceof HTMLTextAreaElement || uu instanceof HTMLInputElement && fu.includes(uu.type)),
      bu = uu => null !== uu.selectionStart,
      cu = uu => {
        var Eu, ju;
        const {
          value: su
        } = uu;
        return {
          value: su,
          start: null !== (Eu = uu.selectionStart) && void 0 !== Eu ? Eu : su.length,
          end: null !== (ju = uu.selectionEnd) && void 0 !== ju ? ju : su.length
        }
      },
      Nu = (uu, Eu, ju) => {
        if (uu.readOnly) return;
        const Uu = uu instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Uu, "value").set.call(uu, Eu.value), bu(uu) && uu.setSelectionRange(Eu.start, Eu.end), (0, su.e)(uu, new InputEvent("input", {
          bubbles: !0,
          inputType: ju
        }))
      };
    let Ou = !1;
    const Yu = (uu, Eu) => !!document.execCommand(uu, !1, Eu) || (Ou || (Ou = !0, console.warn(`execCommand("${uu}") failed; the on-screen keyboard is setting the value directly`)), !1),
      hu = (uu, Eu) => {
        Yu("insertText", Eu) || Nu(uu, function(uu, Eu) {
          let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const su = uu.value.slice(0, uu.start),
            Uu = uu.value.slice(uu.end);
          let Zu = ju < 0 ? Eu.length : Math.max(0, ju - su.length - Uu.length);
          Zu > 0 && Zu < Eu.length && Xu(Eu.charCodeAt(Zu - 1)) && Zu--;
          const lu = Eu.slice(0, Zu),
            qu = su.length + lu.length;
          return {
            value: su + lu + Uu,
            start: qu,
            end: qu
          }
        }(cu(uu), Eu, uu.maxLength), "insertText")
      },
      Du = uu => {
        Yu("delete") || Nu(uu, (uu => {
          const Eu = uu.start === uu.end ? lu(uu.value, uu.start) : uu.start;
          return {
            value: uu.value.slice(0, Eu) + uu.value.slice(uu.end),
            start: Eu,
            end: Eu
          }
        })(cu(uu)), "deleteContentBackward")
      },
      gu = (uu, Eu) => {
        if (!bu(uu)) return;
        const ju = qu(cu(uu), Eu);
        uu.setSelectionRange(ju.start, ju.end)
      },
      Mu = uu => {
        bu(uu) && 0 === uu.selectionStart && 0 === uu.selectionEnd && uu.setSelectionRange(uu.value.length, uu.value.length)
      }
  },
  9043: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => lu
    });
    var su = ju(22),
      Uu = ju(2215),
      Zu = ju(1405),
      Xu = ju(1443);
    const lu = async () => {
      if ((0, Xu.g)()) {
        if (!0 !== await Zu.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== su.d.get("gameState")) return
      }(0, Uu.d)()
    }
  },
  9047: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => qu,
      g: () => Zu,
      i: () => Xu,
      k: () => Uu,
      m: () => lu
    });
    var su = ju(2014);
    const Uu = "controllerPadShopOpen",
      Zu = uu => su.g.includes(uu),
      Xu = uu => Object.values(uu).some((uu => !1 !== uu.canBuy && !uu.isRewardedAd)),
      lu = (uu, Eu, ju) => {
        var su, Uu, Xu, lu;
        const qu = uu.filter((uu => !Zu(uu))),
          fu = null !== Eu && uu.includes(Eu) ? Eu : null;
        return null !== fu && !Zu(fu) && ju(fu) ? fu : null !== (su = null !== (Uu = null !== (Xu = null !== (lu = qu.find(ju)) && void 0 !== lu ? lu : qu[0]) && void 0 !== Xu ? Xu : fu) && void 0 !== Uu ? Uu : uu[0]) && void 0 !== su ? su : null
      },
      qu = uu => uu.userInput || uu.isRewardedAd || "boolean" === typeof uu.isSelected ? null : JSON.stringify([uu.image, uu.cost, uu.currency, uu.amount, uu.customTitle, uu.buyButtonText, uu.description, uu.canBuy])
  },
  9074: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => fu,
      d: () => Cu
    });
    var su = ju(58),
      Uu = ju(1499),
      Zu = ju(2065),
      Xu = ju(1461),
      lu = ju(1482),
      qu = ju(1154);
    const fu = () => {
        const uu = (0, Xu.o)();
        if ((0, su.useEffect)((() => {
            (0, Xu.k)()
          }), []), !uu) return null;
        const {
          ControllerCategory: Eu
        } = uu;
        return (0, qu.jsx)(lu.d, {
          children: (0, qu.jsx)(Eu, {})
        })
      },
      Cu = () => {
        var uu;
        const Eu = (0, Xu.o)(),
          [, ju] = (0, su.useReducer)((uu => uu + 1), 0);
        return (0, Uu.f)(Zu.c, ju), null !== (uu = null === Eu || void 0 === Eu ? void 0 : Eu.hasActivePad()) && void 0 !== uu && uu
      }
  },
  8899: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su,
      c: () => fu,
      g: () => Yu,
      i: () => bu,
      l: () => Ou,
      m: () => Zu,
      q: () => Nu,
      r: () => Xu,
      u: () => cu
    });
    const su = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      Uu = (uu, Eu) => {
        if ("function" === typeof uu.checkVisibility) return !uu.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: Eu,
          checkOpacity: Eu
        });
        const {
          visibility: ju
        } = getComputedStyle(uu);
        if ("hidden" === ju || "collapse" === ju) return !0;
        if (!Eu) return !1;
        for (let su = uu; su; su = su.parentElement)
          if ("0" === getComputedStyle(su).opacity) return !0;
        return !1
      },
      Zu = uu => {
        if (!uu.isConnected || Uu(uu, !0)) return !1;
        const Eu = uu.getBoundingClientRect();
        return Eu.width > 0 && Eu.height > 0
      },
      Xu = uu => !!uu.matches(":disabled, [aria-disabled='true']") || "button" === uu.getAttribute("role") && "-1" === uu.getAttribute("tabindex"),
      lu = uu => {
        var Eu;
        if (uu.closest("[data-pad-ignore]")) return !0;
        return !!(null === (Eu = uu.parentElement) || void 0 === Eu ? void 0 : Eu.closest("[data-pad-focusable]"))
      },
      qu = uu => {
        const Eu = uu.querySelectorAll(su);
        return uu.matches(su) ? [uu, ...Eu] : Eu
      },
      fu = uu => {
        const Eu = [];
        for (const ju of qu(uu)) !lu(ju) && Zu(ju) && Eu.push(ju);
        return Eu
      },
      Cu = new WeakMap,
      bu = uu => {
        const Eu = Cu.get(uu);
        if (Eu && cu(Eu, uu)) return !0;
        for (const ju of qu(uu))
          if (!lu(ju) && Zu(ju)) return Cu.set(uu, ju), !0;
        return Cu.delete(uu), !1
      },
      cu = (uu, Eu) => Eu.contains(uu) && uu.matches(su) && !lu(uu) && Zu(uu),
      Nu = (uu, Eu) => cu(uu, Eu) && !Xu(uu),
      Ou = uu => {
        for (const Eu of uu.querySelectorAll("[data-pad-initial-area]"))
          if (!Uu(Eu, !1)) return !0;
        return !1
      },
      Yu = uu => {
        const Eu = Eu => {
          let ju = 0;
          for (let su = Eu.parentElement; su && su !== uu; su = su.parentElement) ju++;
          return ju
        };
        return [...uu.querySelectorAll("[data-pad-initial-area]")].filter(Zu).sort(((uu, ju) => Eu(ju) - Eu(uu)))
      }
  },
  8889: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => fu,
      C: () => au,
      F: () => pu,
      G: () => wu,
      I: () => hu,
      L: () => qu,
      P: () => Cu,
      b: () => Du,
      c: () => du,
      g: () => Gu,
      j: () => eu,
      m: () => Ou,
      o: () => Yu,
      q: () => cu,
      u: () => Nu,
      x: () => Ju
    });
    var su = ju(24),
      Uu = ju(1710),
      Zu = ju(8891),
      Xu = ju(8896),
      lu = ju(8899);
    const qu = uu => (0, Xu.h)(uu),
      fu = uu => {
        const Eu = uu.getBoundingClientRect();
        return {
          x: Eu.left + Eu.width / 2,
          y: Eu.top + Eu.height / 2
        }
      },
      Cu = (uu, Eu, ju) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: uu.x,
        clientY: uu.y,
        screenX: uu.x,
        screenY: uu.y,
        button: Eu,
        buttons: ju,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      bu = (uu, Eu) => {
        (0, Uu.e)(uu, Eu)
      },
      cu = function(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const su = 0 === ju ? 1 : 2;
        bu(uu, new PointerEvent("pointerdown", Cu(Eu, ju, su))), bu(uu, new MouseEvent("mousedown", Cu(Eu, ju, su)))
      },
      Nu = function(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        bu(uu, new PointerEvent("pointerup", Cu(Eu, ju, 0))), bu(uu, new MouseEvent("mouseup", Cu(Eu, ju, 0)))
      },
      Ou = function(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        cu(uu, Eu, ju), Nu(uu, Eu, ju), bu(uu, 0 === ju ? new MouseEvent("click", Cu(Eu, 0, 0)) : new MouseEvent("contextmenu", Cu(Eu, 2, 0)))
      },
      Yu = function(uu, Eu, ju) {
        let {
          leaveBelow: su = null,
          enterBelow: Uu = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (uu !== Eu) {
          if (null !== uu && void 0 !== uu && uu.isConnected) {
            const Uu = {
              ...Cu(ju, 0, 0),
              relatedTarget: Eu
            };
            bu(uu, new PointerEvent("pointerout", Uu)), bu(uu, new MouseEvent("mouseout", Uu));
            const Zu = uu => !!Eu && uu.contains(Eu) || !!su && uu.contains(su);
            for (let Eu = uu; Eu && !Zu(Eu); Eu = Eu.parentElement) bu(Eu, new PointerEvent("pointerleave", {
              ...Uu,
              bubbles: !1
            })), bu(Eu, new MouseEvent("mouseleave", {
              ...Uu,
              bubbles: !1
            }))
          }
          if (Eu) {
            const su = {
              ...Cu(ju, 0, 0),
              relatedTarget: uu
            };
            bu(Eu, new PointerEvent("pointerover", su)), bu(Eu, new MouseEvent("mouseover", su));
            const Zu = [],
              Xu = Eu => !(null === uu || void 0 === uu || !uu.isConnected) && Eu.contains(uu) || !!Uu && Eu.contains(Uu);
            for (let uu = Eu; uu && !Xu(uu); uu = uu.parentElement) Zu.push(uu);
            for (const uu of Zu.reverse()) bu(uu, new PointerEvent("pointerenter", {
              ...su,
              bubbles: !1
            })), bu(uu, new MouseEvent("mouseenter", {
              ...su,
              bubbles: !1
            }));
            bu(Eu, new PointerEvent("pointermove", Cu(ju, 0, 0))), bu(Eu, new MouseEvent("mousemove", Cu(ju, 0, 0)))
          }
        } else Eu && (bu(Eu, new PointerEvent("pointermove", Cu(ju, 0, 0))), bu(Eu, new MouseEvent("mousemove", Cu(ju, 0, 0))))
      },
      hu = uu => {
        su.h.TY(Zu.h, uu)
      },
      Du = uu => {
        if (qu(uu)) return void hu(uu);
        const Eu = uu.hasAttribute("data-pad-focusable") ? uu.querySelector("a[href]") : null,
          ju = null !== Eu && void 0 !== Eu ? Eu : uu;
        Ou(ju, fu(ju))
      },
      gu = ".Dropdown-root.is-open",
      Mu = uu => {
        const Eu = uu.querySelector(".Dropdown-control");
        return Du(Eu), Eu
      },
      eu = uu => {
        var Eu;
        const ju = null !== (Eu = uu.closest(gu)) && void 0 !== Eu ? Eu : uu.querySelector(gu);
        return ju ? Mu(ju) : null
      },
      Gu = uu => {
        for (const Eu of document.querySelectorAll(gu)) Eu.contains(uu) || Mu(Eu)
      },
      pu = uu => null !== uu.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      wu = uu => {
        const Eu = uu ? document.elementFromPoint(uu.x, uu.y) : null;
        return !(null === Eu || void 0 === Eu || !Eu.closest("[data-pad-repeat]"))
      },
      Ju = uu => {
        var Eu;
        return null !== (Eu = [...uu.querySelectorAll("[data-pad-back]")].find(lu.m)) && void 0 !== Eu ? Eu : null
      },
      du = uu => {
        const Eu = Ju(uu);
        return !!Eu && (Du(Eu), !0)
      },
      au = uu => {
        var Eu, ju, su, Uu;
        return null !== (Eu = null !== (ju = null !== (su = uu.getAttribute("data-pad-key")) && void 0 !== su ? su : uu.getAttribute("href")) && void 0 !== ju ? ju : null === (Uu = uu.querySelector("a[href]")) || void 0 === Uu ? void 0 : Uu.getAttribute("href")) && void 0 !== Eu ? Eu : null
      }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);