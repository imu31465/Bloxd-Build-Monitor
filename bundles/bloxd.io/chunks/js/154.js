export const id = 154;
export const ids = [154];
export const modules = {
  8505: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => TU
    });
    var tU = gU(21),
      pU = gU(1181),
      EU = gU(4670),
      PU = gU(1090);

    function TU(UU) {
      let {
        note: RU
      } = UU;
      const {
        t: gU
      } = (0, pU.B)(), {
        clientEscMenuOptions: TU
      } = (0, tU.l)(["clientEscMenuOptions"]);
      return (0, PU.jsx)(EU.b, {
        label: gU("touchSettings:actionButtons"),
        checked: TU.touchActionButtons,
        onClick: UU => {
          tU.b.setClientEscMenuOptions({
            touchActionButtons: UU
          })
        },
        circleInfoText: gU("touchSettings:actionButtonsInfo"),
        note: RU
      })
    }
  },
  8492: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => rg,
      e: () => Vg
    });
    var tU = gU(1181),
      pU = gU(56),
      EU = gU(1844),
      PU = gU(1849),
      TU = gU(1037),
      qU = gU.n(TU),
      KU = gU(1412),
      cU = gU(21),
      GU = gU(96),
      jU = gU(115),
      uU = gU(4670),
      CU = gU(2254),
      hU = gU(279),
      QU = gU(1853),
      eU = gU(1856),
      WU = gU(8501),
      fU = gU(8505),
      xU = gU(299),
      mU = gU(1090);
    const IU = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var JU = gU(8512);
    var wU = gU(1444),
      nU = gU(1333),
      bU = gU(1049),
      oU = gU(1376),
      ZU = gU(2272);
    const aU = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(ZU.F.map((UU => [UU, "menu"])))
      },
      YU = UU => ZU.y.filter((RU => aU[RU] === UU)),
      BU = new Set(YU("cluster")),
      VU = ["cluster"],
      rU = [...VU, ...ZU.y.filter((UU => !VU.includes(UU) && !aU[UU]))],
      XU = rU.flatMap((UU => [UU, ...YU(UU)])).map((UU => ({
        id: UU,
        label: `hudLayout:${UU}`,
        ...ZU.u[UU],
        parent: aU[UU]
      }))),
      vU = Object.fromEntries(XU.map((UU => [UU.id, UU]))),
      dU = "data-hud-el";

    function HU(UU, RU, gU, tU) {
      const pU = gU(function(UU, RU) {
          return "attack" !== UU || RU ? vU[UU].label : "hudLayout:attackContext"
        }(UU, RU)),
        EU = tU[UU];
      return EU ? gU("hudLayout:slotWithKey", {
        slot: pU,
        key: EU
      }) : pU
    }

    function SU(UU, RU, gU, tU) {
      return UU.map((UU => HU(UU, RU, gU, tU))).join(", ")
    }

    function sU(UU) {
      let {
        className: RU,
        keepPlace: gU
      } = UU;
      return gU ? (0, mU.jsx)("div", {
        className: qU()(RU, "Placeholder")
      }) : null
    }

    function yU(UU) {
      let {
        id: RU,
        elements: gU,
        actionButtons: pU,
        keyNames: EU,
        className: PU,
        keepPlace: TU,
        onHidden: qU
      } = UU;
      const {
        t: cU
      } = (0, tU.B)();
      if (!vU[RU].hide) return (0, mU.jsx)(sU, {
        className: PU,
        keepPlace: TU
      });
      const GU = (0, ZU.t)(gU, RU);
      return (0, mU.jsx)(KU.M, {
        className: PU,
        ariaLabel: cU(GU ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: HU(RU, pU, cU, EU)
        }),
        pressed: !GU,
        onClick: () => {
          qU(RU, !GU)
        },
        children: (0, mU.jsx)(bU.c, {
          name: GU ? "eye-slash" : "eye"
        })
      })
    }

    function kU(UU) {
      var RU;
      let {
        id: gU,
        elements: pU,
        actionButtons: EU,
        keyNames: PU,
        className: TU,
        keepPlace: qU,
        onlyWhenMoved: cU,
        locked: GU,
        onReset: jU
      } = UU;
      const {
        t: uU
      } = (0, tU.B)(), CU = vU[gU], hU = (0, ZU.L)(null !== (RU = pU[gU]) && void 0 !== RU ? RU : ZU.n);
      return !CU.move && !CU.scale || cU && hU ? (0, mU.jsx)(sU, {
        className: TU,
        keepPlace: qU
      }) : (0, mU.jsx)(KU.M, {
        className: TU,
        disabled: hU || GU,
        ariaLabel: uU("hudLayout:resetElement", {
          name: HU(gU, EU, uU, PU)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: gU
        },
        onClick: UU => {
          cU && zU(UU.currentTarget), jU(gU)
        },
        children: (0, mU.jsx)(bU.c, {
          name: "rotate-left"
        })
      })
    }

    function FU(UU) {
      let {
        id: RU,
        actionButtons: gU,
        keyNames: pU,
        className: EU,
        keepPlace: PU,
        locked: TU,
        lockable: qU,
        onLocked: cU
      } = UU;
      const {
        t: GU
      } = (0, tU.B)();
      return qU || TU ? (0, mU.jsx)(KU.M, {
        className: EU,
        ariaLabel: GU(TU ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: HU(RU, gU, GU, pU)
        }),
        pressed: TU,
        active: TU,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${TU?"unlock":"lock"}:${RU}`
        },
        onClick: () => {
          cU(RU, !TU)
        },
        children: (0, mU.jsx)(bU.c, {
          name: TU ? "lock" : "lock-open"
        })
      }) : (0, mU.jsx)(sU, {
        className: EU,
        keepPlace: PU
      })
    }

    function iU(UU) {
      let {
        className: RU,
        open: gU,
        name: pU,
        onToggle: EU
      } = UU;
      const {
        t: PU
      } = (0, tU.B)();
      return (0, mU.jsx)(KU.M, {
        className: RU,
        ariaLabel: PU(gU ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: pU
        }),
        pressed: gU,
        analyticsClick: {
          id: "hud_layout.children",
          value: gU ? "close" : "open"
        },
        onClick: () => {
          EU(!gU)
        },
        children: (0, mU.jsx)(bU.c, {
          name: gU ? "angle-up" : "angle-down"
        })
      })
    }

    function AU(UU, RU) {
      var gU;
      UU.contains(document.activeElement) && RU.focus({
        preventScroll: !0
      }), null === (gU = (0, oU.g)()) || void 0 === gU || gU.handOverPadFocus(UU, RU)
    }

    function zU(UU) {
      const RU = UU.closest("[data-hud-row]"),
        gU = null === RU || void 0 === RU ? void 0 : RU.querySelector(".HudElementRowName");
      return !(!RU || !gU) && (AU(RU, gU), !0)
    }
    const MU = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function DU(UU, RU) {
      return "joystick" === UU && !RU
    }

    function LU() {
      const {
        t: UU
      } = (0, tU.B)();
      return (0, mU.jsx)(KU.M, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: UU => {
          const RU = UU.currentTarget;
          if (!zU(RU)) {
            const UU = function(UU) {
              var RU, gU;
              const tU = [UU.previousElementSibling, UU.nextElementSibling].find((UU => UU instanceof HTMLElement && UU.matches(MU)));
              return null !== (RU = null !== tU && void 0 !== tU ? tU : null === (gU = UU.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === gU ? void 0 : gU.querySelector(`:is(${MU}):not(.HudFixJoystickButton)`)) && void 0 !== RU ? RU : null
            }(RU);
            UU && AU(RU, UU)
          }
          cU.b.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: UU("hudLayout:fixJoystick")
      })
    }
    var NU = gU(74),
      lU = gU(1283),
      OU = gU(1106),
      UR = gU(2533),
      RR = gU(8516),
      gR = gU(2279),
      tR = gU(2292),
      pR = gU(2840);
    const ER = ["J", "C", "A", "P", "U", "X", "G"],
      PR = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: ZU.F
      });

    function TR(UU, RU) {
      UU.replaceChildren(...[...RU.childNodes].map((UU => UU.cloneNode(!0))))
    }
    const qR = UU => ({
      [dU]: UU
    });

    function KR(UU) {
      let {
        id: RU,
        slot: gU,
        icon: tU,
        label: EU,
        hidden: PU,
        className: TU,
        face: KU
      } = UU;
      const cU = (0, pU.useRef)(null);
      return (0, pU.useLayoutEffect)((() => {
        KU && cU.current && TR(cU.current, KU)
      }), [KU]), (0, mU.jsxs)("div", {
        className: qU()("TouchKeyHit", `TouchSlot${gU}`, TU, {
          HudPreviewGhost: PU.has(RU)
        }),
        ...qR(RU),
        children: [KU && (0, mU.jsx)("div", {
          ref: cU,
          className: qU()("TouchKey", {
            Labelled: KU.classList.contains("Labelled")
          })
        }), !KU && (0, mU.jsxs)("div", {
          className: qU()("TouchKey", {
            Labelled: void 0 !== EU
          }),
          children: [tU && (0, mU.jsx)(bU.c, {
            name: tU
          }), void 0 !== EU && (0, mU.jsx)("span", {
            className: "TouchKeyLabel",
            children: EU
          })]
        })]
      })
    }

    function cR(UU) {
      let {
        item: RU,
        selected: gU
      } = UU;
      const tU = (0, pU.useRef)(null);
      return (0, pU.useLayoutEffect)((() => {
        tU.current && TR(tU.current, RU)
      }), [RU]), (0, mU.jsx)("div", {
        ref: tU,
        className: qU()("InvenItem", {
          Selected: gU
        })
      })
    }
    const GR = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      jR = UU => void 0 === UU ? {} : {
        style: {
          "--parked": UU
        }
      };

    function uR(UU) {
      let {
        id: RU,
        hidden: gU,
        parked: tU,
        unslotted: pU = !1
      } = UU;
      return (0, mU.jsx)("div", {
        className: qU()("TopRightIcon", tR.k[RU], {
          HudPreviewGhost: gU.has(RU),
          [gR.d]: void 0 !== tU,
          [gR.f]: pU
        }),
        ...jR(tU),
        children: (0, mU.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...qR(RU),
          children: (0, mU.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, mU.jsx)(bU.c, {
              name: GR[RU]
            })
          })
        })
      })
    }

    function CR(UU) {
      let {
        portraitPhone: RU,
        icons: gU,
        hidden: tU,
        moved: pU,
        trayState: EU
      } = UU;
      const PU = RU ? (0, gR.H)(gU) : [],
        TU = gU.filter((UU => "settings" === UU)),
        KU = gU.filter((UU => "settings" !== UU && !PU.includes(UU))).reverse(),
        cU = PU.length > 0 && "gone" === EU,
        GU = [...TU, ...cU ? ["tray"] : [], ...KU].filter((UU => "tray" === UU || tU.has(UU) && !pU.has(UU))),
        jU = UU => {
          const RU = GU.indexOf(UU);
          return RU < 0 ? void 0 : RU
        },
        uU = (UU, RU) => (0, mU.jsx)(uR, {
          id: UU,
          hidden: tU,
          parked: RU ? jU(UU) : void 0,
          unslotted: RU && tU.has(UU) && pU.has(UU)
        }, UU);
      return (0, mU.jsxs)("div", {
        className: qU()("TopRightIcons TouchInGame", {
          Column: RU
        }),
        children: [TU.map((UU => uU(UU, !0))), PU.length > 0 && (0, mU.jsxs)("div", {
          className: qU()("TopRightIcon TopRightTrayToggle Open", {
            [gR.d]: cU
          }),
          ...jR(jU("tray")),
          children: [(0, mU.jsx)("div", {
            className: qU()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== EU
            }),
            children: (0, mU.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, mU.jsx)(bU.c, {
                name: "ellipsis"
              })
            })
          }), (0, mU.jsx)("div", {
            className: "TopRightTray",
            children: PU.map((UU => uU(UU, !1)))
          })]
        }), KU.map((UU => uU(UU, !0)))]
      })
    }

    function hR(UU) {
      let {
        next: RU,
        hidden: gU
      } = UU;
      return (0, mU.jsx)("div", {
        className: qU()("HotBarArrow", RU ? "Next" : "Previous", {
          HudPreviewGhost: gU
        }),
        ...qR("arrows"),
        children: (0, mU.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, mU.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, mU.jsx)(bU.c, {
              name: RU ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function QR() {
      return (0, mU.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, mU.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, mU.jsx)("div", {
            className: "SocialBar",
            children: (0, mU.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, mU.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, mU.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, mU.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, mU.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, mU.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, mU.jsx)(bU.c, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, mU.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, mU.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, mU.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, mU.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, mU.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, mU.jsx)(bU.c, {
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
    const eR = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      WR = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      fR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      xR = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function mR(UU) {
      let {
        presence: RU,
        portraitPhone: gU,
        hidden: pU,
        actionButtons: EU,
        joystickFixed: PU,
        keysAbove: TU,
        auraBar: KU,
        trayState: cU,
        moved: jU
      } = UU;
      const {
        t: uU
      } = (0, tU.B)(), {
        faces: CU,
        items: hU
      } = RU, QU = UU => ({
        HudPreviewGhost: pU.has(UU)
      });
      return (0, mU.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, mU.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, mU.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, mU.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, mU.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, mU.jsx)("div", {
              className: "InGameHeaderGameName",
              children: uU("hudLayout:previewGameName")
            })]
          })
        }), (0, mU.jsx)("div", {
          className: "TopLeftElements",
          children: (0, mU.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, mU.jsxs)("div", {
              className: "Chat",
              children: [(0, mU.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [uU("hudLayout:previewChatLine"), uU("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), uU("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((UU => (0, mU.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, mU.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, mU.jsx)("div", {
                      className: "IndividualText",
                      children: UU
                    })
                  })
                }, UU)))
              }), (0, mU.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: qU()("ChatIconWrapper SmallTextLight", QU("chat")),
                ...qR("chat"),
                children: (0, mU.jsx)(bU.c, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, mU.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, mU.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, mU.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, mU.jsx)("div", {
                className: "TopRightIconsContainer",
                ...qR("menu"),
                children: (0, mU.jsx)(CR, {
                  portraitPhone: gU,
                  icons: RU.rowIcons,
                  hidden: pU,
                  trayState: cU,
                  moved: jU
                })
              })
            }), GU.featureFlags.useSocialFeatures && (0, mU.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, mU.jsx)(QR, {})
            })]
          })
        }), (0, mU.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, mU.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, mU.jsxs)("div", {
            className: "TouchInteractKey",
            ...qR("interact"),
            children: [(0, mU.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, mU.jsx)(bU.c, {
                name: "hand-back-point-up"
              })
            }), (0, mU.jsx)("div", {
              children: uU("hudLayout:previewInteract")
            })]
          })
        }), (0, mU.jsx)("div", {
          className: "BottomCentre",
          children: (0, mU.jsxs)("div", {
            className: "BottomElements",
            children: [(0, mU.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, mU.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, mU.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...qR("hotbar"),
                children: (0, mU.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, mU.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, mU.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, mU.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, mU.jsx)(bU.c, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), KU && (0, mU.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, mU.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, mU.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, pR.i)("glint"),
                    alt: ""
                  }), (0, mU.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, mU.jsx)("div", {
                  className: "AuraBar",
                  children: (0, mU.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, mU.jsx)("div", {
                className: "HotBarRow",
                children: (0, mU.jsx)("div", {
                  className: qU()("HotBarContainer Touch", {
                    KeysAbove: TU
                  }),
                  children: (0, mU.jsxs)("div", {
                    className: "HotBar",
                    ...qR("hotbar"),
                    children: [(0, mU.jsxs)("div", {
                      className: qU()("TouchInventoryKeys", {
                        NoAuraBar: !KU
                      }),
                      children: [(0, mU.jsx)("div", {
                        className: qU()("TouchInventoryKey ShopKey", QU("inventory"), {
                          Hidden: !RU.shop
                        }),
                        ...qR("inventory"),
                        children: (0, mU.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, mU.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, mU.jsx)(bU.c, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, mU.jsx)("div", {
                        className: qU()("TouchInventoryKey BagKey", QU("inventory"), {
                          Hidden: !RU.bag
                        }),
                        ...qR("inventory"),
                        children: (0, mU.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, mU.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, mU.jsx)(bU.c, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, mU.jsx)(hR, {
                      next: !1,
                      hidden: pU.has("arrows")
                    }), (0, mU.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== hU && hU.map(((UU, RU) => (0, mU.jsx)(cR, {
                        item: UU,
                        selected: UU.classList.contains("Selected")
                      }, RU))), null === hU && fR.map((UU => {
                        const RU = xR[UU];
                        return (0, mU.jsx)("div", {
                          className: qU()("InvenItem", {
                            Selected: 0 === UU
                          }),
                          children: RU && (0, mU.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, mU.jsx)(bU.c, {
                              name: RU
                            })
                          })
                        }, UU)
                      }))]
                    }), (0, mU.jsx)(hR, {
                      next: !0,
                      hidden: pU.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, mU.jsx)("div", {
              className: "BottomRightElements",
              children: (0, mU.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== CU && ER.map((UU => {
                  const RU = CU[UU];
                  return RU && (0, mU.jsx)(KR, {
                    id: eR[UU],
                    slot: UU,
                    face: RU,
                    className: WR[UU],
                    hidden: pU
                  }, UU)
                })), null === CU && (0, mU.jsxs)(mU.Fragment, {
                  children: [(0, mU.jsx)(KR, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: pU
                  }), (0, mU.jsx)(KR, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: pU
                  }), EU && (0, mU.jsxs)(mU.Fragment, {
                    children: [(0, mU.jsx)(KR, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: pU
                    }), (0, mU.jsx)(KR, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: pU
                    })]
                  }), !EU && (0, mU.jsx)(KR, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: uU("touchKeys:scope"),
                    hidden: pU
                  }), (0, mU.jsx)(KR, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: uU("touchKeys:fly"),
                    hidden: pU
                  }), (0, mU.jsx)(KR, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: pU
                  })]
                })]
              })
            })]
          })
        }), (0, mU.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, mU.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, mU.jsxs)("div", {
              className: qU()("Joystick Resting HudPreviewJoystick", {
                Floating: !PU
              }),
              ...qR("joystick"),
              children: [(0, mU.jsx)("div", {
                className: "JoystickBase"
              }), (0, mU.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function IR() {
      const [UU, RU] = (0, pU.useState)({}), gU = (0, pU.useCallback)((UU => {
        RU((RU => [...new Set([...Object.keys(RU), ...Object.keys(UU)])].every((gU => RU[gU] === UU[gU])) ? RU : UU))
      }), []);
      return [UU, gU]
    }
    const JR = .05;

    function wR(UU) {
      var RU;
      let {
        selected: gU,
        layout: pU,
        actionButtons: EU,
        keyNames: PU,
        overlaps: TU,
        scaleCaps: cU,
        joystickFixed: GU,
        onScale: jU,
        onHidden: uU,
        onReset: CU,
        locked: hU,
        lockable: QU,
        onLocked: eU,
        extra: WU
      } = UU;
      const {
        t: fU
      } = (0, tU.B)(), xU = gU ? vU[gU] : null, IU = null !== gU && hU.has(gU), JU = (gU && pU.hudElements[gU] || ZU.n)[2], wU = null !== (RU = gU && cU[gU]) && void 0 !== RU ? RU : ZU.h, nU = UU => {
        gU && jU(gU, Math.min(wU, Math.round(100 * (JU + .1 * UU)) / 100))
      };
      return (0, mU.jsxs)(mU.Fragment, {
        children: [(0, mU.jsxs)("div", {
          className: qU()("HudQuickName SmallTextBold", {
            Overlap: TU.length > 0
          }),
          children: [TU.length > 0 && (0, mU.jsx)(bU.c, {
            name: "triangle-exclamation"
          }), xU ? HU(xU.id, EU, fU, PU) : fU("hudLayout:fullScreenHint"), TU.length > 0 && (0, mU.jsx)("span", {
            className: "HudQuickOverlap",
            children: fU("hudLayout:overlapsShort", {
              names: SU(TU, EU, fU, PU)
            })
          })]
        }), (null === xU || void 0 === xU ? void 0 : xU.scale) && (0, mU.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, mU.jsx)(KU.M, {
            disabled: IU || JU <= ZU.i,
            ariaLabel: fU("hudLayout:smaller"),
            onClick: () => {
              nU(-1)
            },
            children: (0, mU.jsx)(bU.c, {
              name: "minus"
            })
          }), (0, mU.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*JU)}%`
          }), (0, mU.jsx)(KU.M, {
            disabled: IU || JU >= wU,
            ariaLabel: fU("hudLayout:larger"),
            onClick: () => {
              nU(1)
            },
            children: (0, mU.jsx)(bU.c, {
              name: "plus"
            })
          })]
        }), (xU || WU) && (0, mU.jsxs)("div", {
          className: "HudQuickActions",
          children: [xU && (0, mU.jsxs)(mU.Fragment, {
            children: [(0, mU.jsx)(FU, {
              id: xU.id,
              actionButtons: EU,
              keyNames: PU,
              locked: IU,
              lockable: QU(xU.id),
              onLocked: eU
            }), (0, mU.jsx)(yU, {
              id: xU.id,
              elements: pU.hudElements,
              actionButtons: EU,
              keyNames: PU,
              onHidden: uU
            }), (0, mU.jsx)(kU, {
              id: xU.id,
              elements: pU.hudElements,
              actionButtons: EU,
              keyNames: PU,
              locked: IU,
              onReset: CU
            }), DU(xU.id, GU) && (0, mU.jsx)(LU, {})]
          }), WU]
        })]
      })
    }
    var nR = gU(1099),
      bR = gU(4069);
    const oR = "HudPreviewDoc",
      ZR = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      aR = new Set([oR, ...Object.values(ZR)]),
      YR = new Set(ZU.y.map(tR.y)),
      BR = new Set(tR.g),
      VR = 'style, link[rel="stylesheet"]';

    function rR(UU, RU, gU, tU) {
      const pU = new Map,
        EU = new Set,
        PU = new URL(UU.baseURI).origin,
        TU = RU => {
          var gU;
          if ("LINK" !== RU.nodeName) return !0;
          const tU = null === (gU = RU.getAttribute("href")) || void 0 === gU ? void 0 : gU.trim();
          if (!tU) return !1;
          try {
            return new URL(tU, UU.baseURI).origin === PU
          } catch {
            return !1
          }
        };
      let qU = null;
      const KU = () => {
          qU !== (0 === EU.size) && (qU = 0 === EU.size, null === tU || void 0 === tU || tU(qU))
        },
        cU = UU => {
          const RU = UU.cloneNode(!0);
          if ("LINK" === RU.tagName) {
            EU.add(RU);
            const UU = () => {
              EU.delete(RU), KU()
            };
            RU.addEventListener("load", UU), RU.addEventListener("error", UU), gU && RU.addEventListener("load", gU)
          }
          return RU
        },
        GU = () => {
          const tU = function(UU) {
              const RU = [...UU.body.children].filter((UU => UU.matches(VR)));
              return [...UU.head.querySelectorAll(VR), ...RU]
            }(UU).filter(TU),
            PU = new Set(tU);
          for (const [UU, RU] of pU) PU.has(UU) || (RU.remove(), pU.delete(UU), EU.delete(RU));
          let qU = null;
          for (let UU = tU.length - 1; UU >= 0; UU--) {
            const EU = tU[UU];
            let PU = pU.get(EU);
            PU ? "STYLE" === EU.tagName && PU.textContent !== EU.textContent && (PU.textContent = EU.textContent, null === gU || void 0 === gU || gU()) : (PU = cU(EU), pU.set(EU, PU), RU.head.insertBefore(PU, qU)), qU = PU
          }
          KU()
        };
      GU();
      const jU = new MutationObserver(GU);
      return jU.observe(UU.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), jU.observe(UU.body, {
        childList: !0
      }), () => {
        jU.disconnect()
      }
    }

    function XR(UU, RU, gU) {
      let {
        keysAbove: tU
      } = gU;
      const pU = [...UU.documentElement.classList].filter((UU => !aR.has(UU) && !BR.has(UU))),
        EU = [...RU.documentElement.classList].filter((UU => BR.has(UU))),
        PU = [oR, ZR.hotbar, ZR.hasShop, ZR.hasBag];
      tU && PU.push(ZR.keysAbove), RU.documentElement.className = [...pU, ...PU, ...EU].join(" ")
    }
    const vR = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function dR(UU, RU, gU, tU, pU) {
      const EU = (0, ZU.C)(gU, tU, "joystick"),
        PU = (0, tR.z)((0, tR.M)(gU, tU, pU), tU),
        TU = PU.classes.filter((UU => !YR.has(UU))),
        qU = RU.documentElement;
      (0, tR.R)({
        ...PU,
        classes: TU
      }, {
        vars: qU,
        safe: qU,
        classes: qU
      });
      const KU = (0, tR.D)(gU.hudLayouts[tU].hudSafe, window.innerWidth, window.innerHeight, HR(), (0, tR.P)(RU));
      qU.style.setProperty("--preview-joystick-shift-left", `${KU[3]}px`), qU.style.setProperty("--preview-joystick-shift-bottom", `${KU[2]}px`), qU.style.setProperty("--preview-joystick-scale", String(EU[2])), (0, bR.g)(qU, RU, gU, tU);
      for (const cU of vR) qU.style.setProperty(cU, UU.documentElement.style.getPropertyValue(cU) || "0px")
    }

    function HR() {
      return (0, tR.L)(cU.b.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function SR(UU) {
      return (0, tR.s)(HR(), (0, tR.P)(UU))
    }

    function sR(UU, RU, gU) {
      const tU = UU.documentElement.style,
        pU = (0, tR.H)(RU),
        EU = tU.getPropertyValue(pU);
      try {
        return gU((UU => {
          tU.setProperty(pU, String(UU))
        }))
      } finally {
        "" === EU ? tU.removeProperty(pU) : tU.setProperty(pU, EU)
      }
    }

    function yR(UU, RU) {
      const [gU, tU] = sR(UU, "hotbar", (RU => {
        const gU = gU => {
          var tU, pU;
          return RU(gU), null !== (tU = null === (pU = UU.querySelector(".HotBarGameItemsContainer")) || void 0 === pU ? void 0 : pU.getBoundingClientRect().width) && void 0 !== tU ? tU : 0
        };
        return [gU(1), gU(ZU.h)]
      }));
      return gU <= 0 ? ZU.h : Math.min(ZU.h, Math.max(1, Math.floor(tU / gU / RU + 1e-6) * RU))
    }
    const kR = 3,
      FR = .5,
      iR = UU => UU.right - UU.left;
    const AR = (UU, RU) => Math.abs((0, RR.e)(UU).x - (0, RR.e)(RU).x) + Math.abs((0, RR.e)(UU).y - (0, RR.e)(RU).y) + Math.abs(iR(UU) - iR(RU));

    function zR(UU, RU, gU, tU, pU) {
      let {
        canKeep: EU = () => !0,
        passes: PU = kR,
        before: TU,
        keysAboveOf: qU
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const KU = void 0 !== qU && qU(UU) !== qU(RU),
        cU = RU.hudLayouts[gU].hudLocked.filter((UU => EU(UU) && !(KU && "inventory" === UU))),
        GU = new Set(cU);
      if (0 === GU.size) return RU;
      const jU = [...BU].filter((tU => !cU.includes(tU) && (0, ZU.C)(UU, gU, tU).join() === (0, ZU.C)(RU, gU, tU).join())),
        uU = UU => {
          const RU = (0, RR.D)(jU.flatMap((RU => UU[RU] ? [UU[RU]] : [])));
          return {
            ...UU,
            cluster: null !== RU && void 0 !== RU ? RU : void 0
          }
        },
        CU = UU => {
          const RU = pU(UU);
          return RU && uU(RU)
        },
        hU = TU ? uU(TU) : CU(UU);
      let QU = hU && CU(RU);
      if (!hU || !QU) return RU;
      let eU = RU;
      for (let WU = 0; WU < PU && GU.size > 0; WU++) {
        const UU = new Map;
        for (const RU of GU) {
          const pU = hU[RU],
            EU = QU[RU],
            PU = pU && EU ? MR(RU, (0, ZU.C)(eU, gU, RU), pU, EU, tU) : null;
          PU ? UU.set(RU, PU) : GU.delete(RU)
        }
        if (0 === UU.size) break;
        let pU = eU;
        for (const [RU, tU] of UU) pU = (0, ZU.gb)(pU, gU, RU, tU);
        const EU = CU(pU);
        if (!EU) return RU;
        let PU = eU;
        for (const [RU, tU] of UU) {
          const UU = EU[RU];
          UU && AR(hU[RU], UU) < AR(hU[RU], QU[RU]) - FR ? PU = (0, ZU.gb)(PU, gU, RU, tU) : GU.delete(RU)
        }
        if (PU === eU) break;
        const TU = [...UU.keys()].every((UU => GU.has(UU)));
        if (eU = PU, QU = TU ? EU : CU(eU), !QU) return RU
      }
      return pU(eU), eU
    }

    function MR(UU, RU, gU, tU, pU) {
      let [EU, PU, TU] = RU;
      const qU = ZU.u[UU],
        KU = {};
      qU.scale && iR(tU) > 0 && Math.abs(iR(gU) - iR(tU)) > FR && (KU.scale = Math.max(ZU.i, Math.min(ZU.h, TU * iR(gU) / iR(tU))));
      const cU = (0, RR.e)(gU).x - (0, RR.e)(tU).x,
        GU = (0, RR.e)(gU).y - (0, RR.e)(tU).y;
      return qU.move && (Math.abs(cU) > FR || Math.abs(GU) > FR) && (KU.dx = EU + cU / pU.width, KU.dy = PU + GU / pU.height), void 0 === KU.scale && void 0 === KU.dx ? null : KU
    }
    let DR = 0;

    function LR() {
      return DR > 0
    }
    const NR = UU => 0 === UU.dx && 0 === UU.dy,
      lR = .001,
      OR = UU => Math.abs(UU.dx) >= 5e-4 || Math.abs(UU.dy) >= 5e-4 ? UU : {
        dx: UU.dx,
        dy: UU.dy < 0 ? -.001 : lR
      };

    function Ug(UU) {
      let {
        preview: RU,
        stageRef: gU,
        ringRef: tU,
        centreLineRef: EU,
        snapCentre: PU,
        ready: TU,
        measure: qU,
        k: KU,
        viewport: cU,
        boxes: GU,
        pieces: jU,
        selected: uU,
        insets: CU,
        layout: hU,
        canMove: QU,
        onSelect: eU,
        onMove: WU
      } = UU;
      const fU = (0, pU.useRef)(null),
        xU = (0, pU.useCallback)((() => null !== fU.current), []),
        mU = (UU, RU) => {
          if (!RU) return null;
          const gU = (0, RR.e)(UU.origin),
            tU = (0, RR.e)(RU),
            pU = (UU.to.dx - UU.from.dx) * cU.width,
            EU = (UU.to.dy - UU.from.dy) * cU.height,
            PU = RU.right - RU.left,
            TU = RU.bottom - RU.top;
          return {
            skew: {
              x: tU.x - gU.x - pU,
              y: tU.y - gU.y - EU
            },
            box: {
              left: gU.x - PU / 2,
              top: gU.y - TU / 2,
              right: gU.x + PU / 2,
              bottom: gU.y + TU / 2
            }
          }
        },
        IU = (UU, gU) => {
          var pU;
          const PU = fU.current;
          if (!PU || PU.pointerId !== UU.pointerId) return;
          fU.current = null, null === (pU = EU.current) || void 0 === pU || pU.classList.remove("Shown", "Snapped");
          const TU = tU.current;
          if (TU && null !== PU.ringStyle && TU.setAttribute("style", PU.ringStyle), gU && PU.moved) {
            const UU = NR(PU.to) ? null : qU(PU.id),
              RU = UU ? (0, RR.A)(UU, (0, RR.w)(cU.width, cU.height, CU)) : {
                x: 0,
                y: 0
              },
              gU = {
                dx: PU.to.dx + RU.x / cU.width,
                dy: PU.to.dy + RU.y / cU.height
              },
              tU = NR(PU.to) ? gU : OR(gU);
            WU(PU.id, tU.dx, tU.dy)
          } else RU(PU.id, null), gU && PU.tapPick && eU(PU.tapPick)
        };
      return {
        busy: xU,
        handlers: {
          onPointerDown: UU => {
            var RU;
            if (!TU || fU.current || !UU.target.closest(".HudPreviewHandle")) return;
            const tU = gU.current.getBoundingClientRect(),
              pU = {
                x: (UU.clientX - tU.left) / KU,
                y: (UU.clientY - tU.top) / KU
              },
              EU = (0, RR.t)(pU, jU, 40 / KU),
              PU = "cluster" === uU && void 0 !== GU.cluster && null !== (0, RR.t)(pU, [{
                id: "cluster",
                box: GU.cluster
              }], 40 / KU),
              qU = "menu" === uU && void 0 !== GU.menu && (0, RR.f)(GU.menu, pU) && ("menu" === EU || null !== EU && (0, gR.y)(EU, hU.hudElements[EU])),
              cU = PU ? "cluster" : qU ? "menu" : null,
              CU = null !== cU,
              WU = null !== cU && void 0 !== cU ? cU : EU;
            if (!WU) return;
            if (function(UU) {
                DR++;
                const RU = gU => {
                  gU.pointerId === UU && (DR = Math.max(0, DR - 1), window.removeEventListener("pointerup", RU, !0), window.removeEventListener("pointercancel", RU, !0))
                };
                window.addEventListener("pointerup", RU, !0), window.addEventListener("pointercancel", RU, !0)
              }(UU.pointerId), !QU(WU)) return void eU(CU && EU ? EU : WU);
            eU(WU);
            const [xU, mU] = null !== (RU = hU.hudElements[WU]) && void 0 !== RU ? RU : [0, 0], IU = {
              dx: xU,
              dy: mU
            }, JU = {
              skew: {
                x: 0,
                y: 0
              },
              box: GU[WU]
            };
            fU.current = {
              id: WU,
              pointerId: UU.pointerId,
              startX: UU.clientX,
              startY: UU.clientY,
              origin: GU[WU],
              from: IU,
              to: IU,
              moved: !1,
              home: NR(IU) ? {
                centre: (0, RR.e)(GU[WU]),
                anchor: JU
              } : null,
              away: NR(IU) ? null : JU,
              anchor: JU,
              ringStyle: null,
              tapPick: CU ? EU : null
            }, UU.currentTarget.setPointerCapture(UU.pointerId)
          },
          onPointerMove: UU => {
            const gU = fU.current;
            if (!gU || gU.pointerId !== UU.pointerId) return;
            const pU = UU.clientX - gU.startX,
              TU = UU.clientY - gU.startY;
            if (!gU.moved && Math.hypot(pU, TU) < 5) return;
            const GU = !gU.moved;
            var jU, uU;
            (gU.moved = !0, GU) && (gU.ringStyle = null !== (jU = null === (uU = tU.current) || void 0 === uU ? void 0 : uU.getAttribute("style")) && void 0 !== jU ? jU : null);
            const hU = (0, RR.w)(cU.width, cU.height, CU);
            if (!gU.home) {
              var QU;
              gU.to = {
                dx: 0,
                dy: 0
              }, RU(gU.id, gU.to);
              const UU = qU(gU.id),
                tU = null !== (QU = mU(gU, UU)) && void 0 !== QU ? QU : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: gU.origin
                },
                pU = (0, RR.e)(gU.origin);
              gU.home = {
                centre: UU ? (0, RR.e)(UU) : {
                  x: pU.x - gU.from.dx * cU.width,
                  y: pU.y - gU.from.dy * cU.height
                },
                anchor: tU
              }
            }
            const eU = gU.home;
            let WU = !1;
            const xU = UU => {
                WU = !1;
                let tU = (0, RR.j)(UU.box, pU / KU, TU / KU, hU);
                const EU = cU.width / 2;
                if (PU && Math.abs((0, RR.e)(gU.origin).x + tU.x - EU) <= 8 / KU) {
                  const RU = EU - (0, RR.e)(gU.origin).x,
                    pU = (0, RR.j)(UU.box, RU, tU.y, hU);
                  WU = Math.abs(pU.x - RU) < .01, WU && (tU = pU)
                }
                const qU = (0, RR.s)(gU.from, tU.x - UU.skew.x, tU.y - UU.skew.y, cU.width, cU.height);
                gU.to = OR(qU), gU.anchor = UU, RU(gU.id, gU.to)
              },
              IU = (0, RR.j)(eU.anchor.box, pU / KU, TU / KU, hU),
              JU = EU.current,
              wU = (0, RR.e)(gU.origin),
              nU = ((0, ZU.O)(gU.id) ? 20 : 6) / KU;
            if (Math.abs(wU.x + IU.x - eU.centre.x) <= nU && Math.abs(wU.y + IU.y - eU.centre.y) <= nU) gU.to = {
              dx: 0,
              dy: 0
            }, gU.anchor = eU.anchor, WU = PU && Math.abs(eU.centre.x - cU.width / 2) < 1, RU(gU.id, gU.to);
            else if (gU.away) xU(gU.away);
            else {
              var bU;
              xU(eU.anchor), gU.away = null !== (bU = mU(gU, qU(gU.id))) && void 0 !== bU ? bU : eU.anchor, xU(gU.away)
            }
            null === JU || void 0 === JU || JU.classList.add("Shown"), null === JU || void 0 === JU || JU.classList.toggle("Snapped", WU), (UU => {
              const RU = tU.current;
              if (RU) {
                const {
                  skew: gU,
                  box: tU
                } = UU.anchor;
                RU.style.left = tU.left * KU + "px", RU.style.top = tU.top * KU + "px", RU.style.width = (tU.right - tU.left) * KU + "px", RU.style.height = (tU.bottom - tU.top) * KU + "px", RU.style.translate = `${((UU.to.dx-UU.from.dx)*cU.width+gU.x)*KU}px ${((UU.to.dy-UU.from.dy)*cU.height+gU.y)*KU}px`
              }
            })(gU)
          },
          onPointerUp: UU => {
            IU(UU, !0)
          },
          onPointerCancel: UU => {
            IU(UU, !1)
          }
        }
      }
    }

    function Rg(UU, RU) {
      return Object.keys(UU).filter((UU => UU !== RU)).map((RU => UU[RU]))
    }

    function gg(UU) {
      const RU = [],
        gU = RU => (0, ZU.O)(RU) && !UU.documentElement.classList.contains((0, tR.B)(RU));
      for (const PU of UU.querySelectorAll(`[${dU}]`)) {
        const UU = gU(PU.getAttribute(dU)) ? PU.querySelector(".ScaleOnHover") : null,
          tU = (null !== UU && void 0 !== UU ? UU : PU).getBoundingClientRect();
        (tU.width > 0 || tU.height > 0) && RU.push({
          id: PU.getAttribute(dU),
          box: {
            left: tU.left,
            top: tU.top,
            right: tU.right,
            bottom: tU.bottom
          }
        })
      }
      const tU = UU => (0, RR.D)(RU.filter((RU => {
          let {
            id: gU
          } = RU;
          return UU(gU)
        })).map((UU => {
          let {
            box: RU
          } = UU;
          return RU
        }))),
        pU = {};
      for (const PU of new Set(RU.map((UU => UU.id)))) pU[PU] = tU((UU => UU === PU));
      const EU = tU((UU => BU.has(UU)));
      return EU && (pU.cluster = EU), {
        boxes: pU,
        pieces: RU
      }
    }

    function tg(UU, RU, gU) {
      const tU = RU.right - RU.left,
        pU = RU.bottom - RU.top;
      return sR(UU, "cluster", (RU => {
        const EU = gU => {
            RU(gU);
            const tU = [...UU.querySelectorAll(`[${dU}]:not(.HudPreviewGhost)`)].filter((UU => BU.has(UU.getAttribute(dU)))).map((UU => {
                const RU = UU.getBoundingClientRect();
                return {
                  left: RU.left,
                  top: RU.top,
                  right: RU.right,
                  bottom: RU.bottom
                }
              })),
              pU = (0, RR.D)(tU);
            return pU ? {
              w: pU.right - pU.left,
              h: pU.bottom - pU.top
            } : null
          },
          PU = UU => !UU || UU.w <= tU && UU.h <= pU,
          TU = EU(1),
          qU = EU(ZU.h);
        if (!TU || PU(qU)) return ZU.h;
        const KU = (UU, RU, gU) => RU > UU ? 1 + (gU - UU) * (ZU.h - 1) / (RU - UU) : ZU.h;
        let cU = Math.floor(Math.min(ZU.h, KU(TU.w, qU.w, tU), KU(TU.h, qU.h, pU)) / gU + 1e-6) * gU;
        for (; cU > 1 && !PU(EU(cU));) cU = Math.round(100 * (cU - gU)) / 100;
        return Math.max(1, cU)
      }))
    }

    function pg(UU) {
      XR(document, UU, {
        keysAbove: !1
      });
      const RU = parseFloat(getComputedStyle(UU.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        gU = Number.isFinite(RU) && RU < 0;
      return XR(document, UU, {
        keysAbove: gU
      }), gU
    }

    function Eg(UU, RU) {
      let {
        layout: gU,
        orientation: tU,
        viewport: EU,
        replicaKey: PU,
        joystickFixed: TU,
        busy: qU
      } = RU;
      const [KU, cU] = (0, pU.useState)(null), [GU, jU] = (0, pU.useState)({
        boxes: {},
        pieces: []
      }), [uU, CU] = (0, pU.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [hU, QU] = (0, pU.useState)(!1), [eU, WU] = (0, pU.useState)(!1), [fU, xU] = (0, pU.useState)(!1), mU = (0, pU.useCallback)((UU => {
        WU(UU), UU && xU(!0)
      }), []), IU = gU.hudLayouts[tU].hudSafe, JU = (0, pU.useCallback)((() => {
        var RU;
        const gU = null === (RU = UU.current) || void 0 === RU ? void 0 : RU.contentDocument;
        null !== gU && void 0 !== gU && gU.body && cU(gU)
      }), [UU]), wU = (0, pU.useCallback)((() => {
        KU && ((0, gR.B)(KU), jU(gg(KU)), CU(function(UU, RU) {
          const gU = SR(UU),
            [tU, pU, EU, PU] = RU ? (0, tR.u)(RU, window.innerWidth, window.innerHeight, gU) : gU;
          return {
            top: tU,
            right: pU,
            bottom: EU,
            left: PU
          }
        }(KU, IU)))
      }), [KU, IU]), nU = (0, pU.useCallback)((() => {
        KU && QU(pg(KU))
      }), [KU]), bU = (0, pU.useRef)((() => {}));
      return bU.current = () => {
        nU(), qU() || wU()
      }, (0, pU.useLayoutEffect)((() => {
        if (KU) return rR(document, KU, (() => {
          bU.current()
        }), mU)
      }), [KU, mU]), (0, pU.useLayoutEffect)(nU, [nU, EU]), (0, pU.useLayoutEffect)((() => {
        KU && (XR(document, KU, {
          keysAbove: hU
        }), dR(document, KU, gU, tU, TU), nU(), wU())
      }), [KU, gU, tU, hU, PU, TU, EU, wU, nU]), (0, pU.useEffect)((() => {
        var UU;
        if (!KU) return;
        const RU = new ResizeObserver((() => {
          qU() || wU()
        }));
        for (const gU of KU.querySelectorAll(`[${dU}]`)) RU.observe(gU);
        return null === (UU = KU.fonts) || void 0 === UU || UU.ready.then(wU), () => {
          RU.disconnect()
        }
      }), [KU, wU, qU, PU]), {
        doc: KU,
        onLoad: JU,
        boxes: GU.boxes,
        pieces: GU.pieces,
        insets: uU,
        keysAbove: hU,
        ready: eU,
        settled: fU
      }
    }
    const Pg = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      Tg = (UU, RU, gU) => {
        const tU = UU => (0, gR.y)(UU, gU.hudElements[UU]);
        return "cluster" === UU && BU.has(RU) || "cluster" === RU && BU.has(UU) || "menu" === UU && tU(RU) || "menu" === RU && tU(UU) || Pg.some((tU => {
          let [pU, EU] = tU;
          const PU = gU.hudElements.hotbar,
            TU = "inventory" === EU && gU.hudLocked.includes(EU) && void 0 !== PU && !(0, ZU.L)(PU);
          return (UU === pU && RU === EU || UU === EU && RU === pU) && !TU
        }))
      };
    const qg = ["Above", "Below", "Left", "Right"];

    function Kg(UU, RU, gU, tU, pU) {
      const EU = gU[UU],
        PU = (EU.left + EU.right) / 2,
        TU = (EU.top + EU.bottom) / 2,
        qU = (7.5 * RU.length + 14) / tU,
        KU = 18 / tU,
        cU = {
          Above: {
            left: PU - qU / 2,
            top: EU.top - KU,
            right: PU + qU / 2,
            bottom: EU.top
          },
          Below: {
            left: PU - qU / 2,
            top: EU.bottom,
            right: PU + qU / 2,
            bottom: EU.bottom + KU
          },
          Left: {
            left: EU.left - qU,
            top: TU - KU / 2,
            right: EU.left,
            bottom: TU + KU / 2
          },
          Right: {
            left: EU.right,
            top: TU - KU / 2,
            right: EU.right + qU,
            bottom: TU + KU / 2
          }
        },
        GU = Rg(gU, UU),
        jU = {
          left: 0,
          top: 0,
          right: pU.width,
          bottom: pU.height
        };
      return qg[(0, RR.r)(qg.map((UU => cU[UU])), GU, {
        bounds: jU
      })]
    }

    function cg() {
      const [UU, RU] = (0, OU.d)();
      return (0, pU.useMemo)((() => ({
        width: UU,
        height: RU
      })), [UU, RU])
    }

    function Gg(UU) {
      var RU;
      const {
        layout: gU,
        orientation: EU,
        selected: PU,
        onSelect: TU,
        onMove: KU,
        canMove: cU,
        actionButtons: GU,
        joystickFixed: jU,
        presence: uU,
        keyNames: hU,
        maxHeight: QU,
        fill: eU = !1,
        apiRef: WU
      } = UU, {
        t: fU
      } = (0, tU.B)(), xU = cg(), IU = (null !== (RU = (0, CU.g)("maxAuraLevel")) && void 0 !== RU ? RU : 0) > 0, JU = gU.hudLayouts[EU], wU = (0, pU.useRef)(null), nU = (0, pU.useRef)(null), oU = (0, pU.useRef)(null), aU = (0, pU.useRef)(null), YU = (0, pU.useRef)(null), VU = (0, pU.useRef)(null), rU = (0, UR.d)(wU).width, XU = eU ? 1 : rU > 0 ? (0, RR.u)(rU, xU.width, xU.height, QU) : 0, vU = (0, pU.useRef)((() => !1)), dU = (0, pU.useCallback)((() => vU.current()), []), {
        doc: SU,
        onLoad: sU,
        boxes: yU,
        pieces: kU,
        insets: FU,
        keysAbove: iU,
        ready: AU,
        settled: zU
      } = Eg(oU, {
        layout: gU,
        orientation: EU,
        viewport: xU,
        replicaKey: `${GU}:${jU}:${IU}`,
        joystickFixed: jU,
        busy: dU
      }), MU = (0, pU.useCallback)((UU => {
        SU && dR(document, SU, UU, EU, jU)
      }), [SU, EU, jU]), DU = (0, pU.useCallback)((UU => SU && zU ? (MU(UU), pg(SU), function(UU) {
        let {
          boxes: RU,
          pieces: gU
        } = UU;
        const tU = gU.find((UU => "inventory" === UU.id));
        if (!tU || !RU.inventory) return RU;
        const pU = (0, RR.e)(RU.inventory),
          EU = iR(tU.box) / 2,
          PU = (tU.box.bottom - tU.box.top) / 2;
        return {
          ...RU,
          inventory: {
            left: pU.x - EU,
            top: pU.y - PU,
            right: pU.x + EU,
            bottom: pU.y + PU
          }
        }
      }(gg(SU))) : null), [SU, zU, MU]), LU = (0, pU.useCallback)((UU => !!SU && (MU(UU), pg(SU))), [SU, MU]), lU = (0, pU.useRef)(null), OU = (0, pU.useRef)(null), pR = (0, pU.useRef)(gU);
      pR.current = gU;
      const ER = (0, pU.useCallback)((() => {
        null !== lU.current && (cancelAnimationFrame(lU.current), lU.current = null)
      }), []);
      (0, pU.useEffect)((() => ER), [gU, ER]);
      const {
        lockable: PR
      } = UU, TR = (0, pU.useCallback)((UU => {
        if (MU(UU), !zU || 0 === gU.hudLayouts[EU].hudLocked.length) return;
        const RU = gU;
        ER(), lU.current = requestAnimationFrame((() => {
          var gU;
          if (lU.current = null, pR.current !== RU) return;
          const tU = (null === (gU = OU.current) || void 0 === gU ? void 0 : gU.from) === RU ? OU.current.boxes : DU(RU);
          tU && (OU.current = {
            from: RU,
            boxes: tU
          }), MU(tU ? zR(RU, UU, EU, xU, DU, {
            canKeep: PR,
            passes: 1,
            before: tU,
            keysAboveOf: LU
          }) : UU)
        }))
      }), [MU, zU, gU, EU, xU, DU, LU, PR, ER]), qR = Ug({
        preview: (UU, RU) => {
          RU ? TR((0, ZU.gb)(gU, EU, UU, RU)) : (ER(), MU(gU))
        },
        stageRef: nU,
        ringRef: aU,
        centreLineRef: YU,
        snapCentre: gU.hudSnapCentre,
        ready: zU,
        measure: UU => {
          var RU;
          return SU && AU && null !== (RU = gg(SU).boxes[UU]) && void 0 !== RU ? RU : null
        },
        k: XU,
        viewport: xU,
        boxes: yU,
        pieces: kU,
        selected: PU,
        insets: FU,
        layout: JU,
        canMove: cU,
        onSelect: TU,
        onMove: (UU, RU, gU) => {
          ER(), KU(UU, RU, gU)
        }
      });
      (0, pU.useLayoutEffect)((() => {
        vU.current = qR.busy
      }), [qR.busy]);
      const KR = (0, pU.useRef)([]),
        cR = (0, pU.useRef)(JU.hudElements);
      (0, pU.useEffect)((() => {
        for (const pU of Object.keys(JU.hudElements)) {
          var UU, RU, gU, tU;
          (null !== (UU = null === (RU = JU.hudElements[pU]) || void 0 === RU ? void 0 : RU[2]) && void 0 !== UU ? UU : 1) > (null !== (gU = null === (tU = cR.current[pU]) || void 0 === tU ? void 0 : tU[2]) && void 0 !== gU ? gU : 1) && cU(pU) && !(0, gR.y)(pU, JU.hudElements[pU]) && KR.current.push(pU)
        }
        cR.current = JU.hudElements
      }), [JU.hudElements, cU]), (0, pU.useEffect)((() => {
        if (!AU) return;
        const UU = KR.current.shift(),
          RU = UU && yU[UU];
        if (!UU || !RU || qR.busy()) return;
        const gU = (0, RR.A)(RU, (0, RR.w)(xU.width, xU.height, FU));
        if (0 !== gU.x || 0 !== gU.y) {
          var tU;
          const [RU, pU] = null !== (tU = JU.hudElements[UU]) && void 0 !== tU ? tU : [0, 0];
          KU(UU, RU + gU.x / xU.width, pU + gU.y / xU.height)
        }
      }), [yU, AU]), (0, pU.useImperativeHandle)(WU, (() => ({
        setScale: (UU, RU) => {
          TR((0, ZU.gb)(gU, EU, UU, {
            scale: RU
          }))
        },
        setOpacity: UU => {
          MU({
            ...gU,
            hudKeyOpacity: UU
          })
        },
        keepLocks: (UU, RU) => (ER(), zR(UU, RU, EU, xU, DU, {
          canKeep: PR,
          keysAboveOf: LU
        })),
        setSafe: UU => {
          TR((0, ZU.kb)(gU, EU, UU)), VU.current && (VU.current.style.inset = (0, tR.u)(UU, xU.width, xU.height, SR(null !== SU && void 0 !== SU ? SU : document)).map((UU => UU * XU + "px")).join(" "))
        }
      })), [MU, TR, DU, LU, ER, PR, SU, gU, EU, xU, XU]);
      const GR = new Set(Object.keys(JU.hudElements).filter((UU => (0, ZU.t)(JU.hudElements, UU)))),
        jR = PU ? yU[PU] : void 0,
        uR = PU ? HU(PU, GU, fU, hU) : "",
        CR = (0, nR.d)(xU.width, xU.height),
        hR = PU ? function(UU, RU, gU, tU) {
          const pU = UU => (0, ZU.t)(gU.hudElements, UU) || (0, gR.v)(UU, gU, tU);
          if (pU(UU)) return [];
          const EU = RU.filter((RU => {
              let {
                id: gU
              } = RU;
              return "cluster" === UU ? BU.has(gU) : gU === UU
            })),
            PU = new Set;
          for (const TU of RU) TU.id === UU || PU.has(TU.id) || Tg(UU, TU.id, gU) || pU(TU.id) || void 0 === gU.hudElements[UU] && void 0 === gU.hudElements[TU.id] || EU.some((UU => {
            let {
              id: RU,
              box: gU
            } = UU;
            return RU !== TU.id && (0, RR.i)(gU, TU.box, 2)
          })) && PU.add(TU.id);
          return [...PU]
        }(PU, kU, JU, CR) : [],
        QR = new Set((0, gR.s)(JU.hudElements)),
        eR = (0, gR.K)(JU, (0, gR.H)(uU.rowIcons)).state,
        WR = hR.join(),
        fR = (0, pU.useRef)(UU.onReady);
      fR.current = UU.onReady, (0, pU.useEffect)((() => {
        var UU;
        null === (UU = fR.current) || void 0 === UU || UU.call(fR, zU)
      }), [zU]);
      const xR = (0, pU.useRef)(UU.onMeasured);
      (0, pU.useLayoutEffect)((() => {
        xR.current = UU.onMeasured
      })), (0, pU.useEffect)((() => {
        var UU;
        const RU = SU ? {
          hotbar: yR(SU, JR),
          cluster: tg(SU, (0, RR.w)(xU.width, xU.height, FU), JR)
        } : {};
        null === (UU = xR.current) || void 0 === UU || UU.call(xR, yU, WR ? WR.split(",") : [], RU)
      }), [yU, WR, SU, xU, FU]);
      const IR = UU => ({
        left: UU.left * XU,
        top: UU.top * XU,
        width: (UU.right - UU.left) * XU,
        height: (UU.bottom - UU.top) * XU
      });
      return (0, mU.jsx)("div", {
        ref: wU,
        className: qU()("HudPreviewBox", {
          Fill: eU
        }),
        style: {
          height: xU.height * XU
        },
        children: (0, mU.jsxs)("div", {
          ref: nU,
          className: "HudPreviewStage",
          style: {
            width: xU.width * XU,
            height: xU.height * XU
          },
          children: [(0, mU.jsx)("iframe", {
            ref: oU,
            className: "HudPreviewFrame",
            srcDoc: "<!DOCTYPE html><html><head></head><body></body></html>",
            onLoad: sU,
            title: fU("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: xU.width,
              height: xU.height,
              transform: `scale(${XU})`
            }
          }), SU && (0, NU.createPortal)((0, mU.jsx)(mR, {
            presence: uU,
            portraitPhone: CR,
            hidden: GR,
            actionButtons: GU,
            joystickFixed: jU,
            keysAbove: iU,
            auraBar: IU,
            trayState: eR,
            moved: QR
          }), SU.body), (0, mU.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...qR.handlers,
            children: [(0, mU.jsx)("div", {
              ref: VU,
              className: "HudPreviewSafeZone",
              style: {
                top: FU.top * XU,
                right: FU.right * XU,
                bottom: FU.bottom * XU,
                left: FU.left * XU
              }
            }), kU.map(((UU, RU) => {
              let {
                id: gU,
                box: tU
              } = UU;
              return (0, mU.jsx)("div", {
                className: "HudPreviewHandle",
                style: IR((0, RR.n)(tU, 40 / XU))
              }, `${gU}:${RU}`)
            })), JU.hudLocked.map((UU => {
              const RU = yU[UU];
              return RU && (0, mU.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: RU.right * XU,
                  top: RU.top * XU
                },
                children: (0, mU.jsx)(bU.c, {
                  name: "lock"
                })
              }, UU)
            })), (0, mU.jsx)("div", {
              ref: YU,
              className: "HudPreviewCentreLine",
              style: {
                left: xU.width / 2 * XU
              }
            }), PU && jR && (0, mU.jsx)("div", {
              ref: aU,
              className: qU()("HudPreviewRing", {
                Fixed: !cU(PU),
                Overlap: hR.length > 0
              }),
              style: IR(jR),
              children: (0, mU.jsx)("span", {
                className: qU()("HudPreviewRingLabel", Kg(PU, uR, yU, XU, xU)),
                children: uR
              })
            })]
          })]
        })
      })
    }

    function jg(UU, RU) {
      (0, pU.useEffect)((() => {
        var gU;
        null === (gU = UU.current) || void 0 === gU || gU.toggleAttribute("inert", RU)
      }), [UU, RU])
    }
    const ug = "hudFullScreen";

    function Cg(UU) {
      let {
        onScale: RU,
        onHidden: gU,
        onReset: EU,
        locked: PU,
        lockable: TU,
        onLocked: qU,
        onClose: cU,
        ...GU
      } = UU;
      const {
        t: jU
      } = (0, tU.B)(), uU = (0, pU.useRef)(null);
      (0, lU.q)("popup", uU, cU),
      function(UU) {
        const RU = (0, pU.useRef)(UU);
        RU.current = UU, (0, pU.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [ug]: !0
          }, "");
          let UU = !1;
          const gU = () => {
            UU = !0, RU.current()
          };
          return window.addEventListener("popstate", gU), () => {
            var RU;
            window.removeEventListener("popstate", gU), !UU && null !== (RU = window.history.state) && void 0 !== RU && RU[ug] && window.history.back()
          }
        }), [])
      }(cU), (0, pU.useEffect)((() => {
        function UU(UU) {
          "Escape" === UU.key && (UU.stopPropagation(), cU())
        }
        return window.addEventListener("keydown", UU, !0), () => {
          window.removeEventListener("keydown", UU, !0)
        }
      }), [cU]);
      const {
        selected: CU
      } = GU, hU = (0, pU.useRef)(null), QU = (0, pU.useRef)(null), [eU, WU] = (0, pU.useState)(!1);
      jg(QU, !eU);
      const [fU, xU] = (0, pU.useState)(null), [IU, JU] = (0, pU.useState)([]), [wU, nU] = IR(), bU = (0, pU.useRef)(GU.selected);
      bU.current = GU.selected;
      const oU = (0, pU.useRef)({}),
        ZU = (0, pU.useCallback)((() => {
          const UU = hU.current;
          UU && xU(function(UU, RU, gU) {
            var tU;
            const {
              innerWidth: pU,
              innerHeight: EU
            } = window, PU = UU.offsetWidth, TU = UU.offsetHeight, qU = Math.max(HR()[0], 6), KU = [];
            for (const jU of [qU, .2 * EU, .5 * EU - TU / 2, .33 * EU])
              for (const UU of [.5, .3, .7]) KU.push({
                left: Math.max(0, Math.min(pU - PU - 6, Math.max(6, pU * UU - PU / 2))),
                top: jU
              });
            const cU = KU.map((UU => ({
                left: UU.left - 6,
                top: UU.top - 6,
                right: UU.left + PU + 6,
                bottom: UU.top + TU + 6
              }))),
              GU = Rg(RU, gU);
            return KU[(0, RR.r)(cU, GU, {
              avoid: gU && null !== (tU = RU[gU]) && void 0 !== tU ? tU : null
            })]
          }(UU, oU.current, bU.current))
        }), []),
        aU = (0, pU.useCallback)(((UU, RU, gU) => {
          JU(RU), nU(gU), oU.current = UU, ZU()
        }), [ZU, nU]);
      return (0, pU.useLayoutEffect)(ZU, [GU.selected, ZU]), (0, NU.createPortal)((0, mU.jsxs)("div", {
        ref: uU,
        className: "HudFullScreenEditor",
        children: [(0, mU.jsx)(Gg, {
          ...GU,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: aU,
          onReady: WU,
          lockable: TU
        }), (0, mU.jsxs)("div", {
          ref: hU,
          className: "HudFullScreenToolbar",
          style: null === fU ? void 0 : {
            left: fU.left,
            top: fU.top,
            transform: "none"
          },
          children: [(0, mU.jsx)("div", {
            ref: QU,
            className: "HudFullScreenControls",
            children: (0, mU.jsx)(wR, {
              selected: CU,
              layout: GU.layout.hudLayouts[GU.orientation],
              actionButtons: GU.actionButtons,
              keyNames: GU.keyNames,
              overlaps: IU,
              scaleCaps: wU,
              onScale: RU,
              onHidden: gU,
              onReset: EU,
              locked: PU,
              lockable: TU,
              onLocked: qU,
              joystickFixed: GU.joystickFixed
            })
          }), (0, mU.jsx)(KU.e, {
            className: "HudFullScreenDone",
            onClick: cU,
            padDefaultFocus: !0,
            children: jU("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const hg = UU => `${Math.round(100*UU)}%`;

    function Qg(UU) {
      let {
        info: RU,
        tuple: gU,
        props: pU
      } = UU;
      const {
        t: EU
      } = (0, tU.B)();
      return (0, mU.jsx)(uU.h, {
        name: EU("hudLayout:size"),
        min: ZU.i,
        max: ZU.h,
        step: JR,
        initValue: gU[2],
        disabled: pU.locked.has(RU.id),
        selectableMax: pU.scaleCaps[RU.id],
        cappedNote: EU("hudLayout:sizeCapped"),
        format: hg,
        onChange: UU => {
          pU.onScalePreview(RU.id, UU)
        },
        onChangeComplete: UU => {
          pU.onScale(RU.id, UU)
        }
      })
    }

    function eg(UU) {
      const {
        t: RU
      } = (0, tU.B)(), {
        present: gU,
        elements: EU,
        selected: PU,
        onSelect: TU,
        onHidden: KU,
        onReset: cU,
        note: GU,
        actionButtons: jU,
        keyNames: uU,
        sizeBesidePreview: CU,
        locked: hU,
        lockable: QU,
        onLocked: eU
      } = UU, {
        rowIconsOpen: WU,
        onRowIconsOpen: fU
      } = UU, xU = (0, pU.useRef)(null), IU = null !== PU && (WU || !(0, ZU.O)(PU));
      return (0, pU.useEffect)((() => {
        var UU;
        const RU = PU ? null === (UU = xU.current) || void 0 === UU ? void 0 : UU.querySelector(`[data-hud-row="${PU}"]`) : null;
        if (!RU) return;
        const gU = RU.closest(".SettingsMenuRight"),
          tU = performance.now();
        let pU = null;
        const EU = () => {
            clearInterval(qU), null === gU || void 0 === gU || gU.removeEventListener("scroll", TU)
          },
          TU = () => {
            LR() || EU()
          },
          qU = setInterval((() => {
            const UU = performance.now();
            UU - tU > 1500 ? EU() : LR() ? pU = null : null === pU ? pU = UU : UU - pU >= 150 && (EU(), function(UU) {
              var RU;
              const gU = UU.closest(".SettingsMenuRight"),
                tU = null === (RU = UU.closest(".HudLayoutSettings")) || void 0 === RU ? void 0 : RU.querySelector(".HudLayoutPreviewBox");
              if (!gU || !tU) return;
              const pU = tU.getBoundingClientRect().bottom + 8,
                EU = gU.getBoundingClientRect().bottom - 8,
                PU = UU.getBoundingClientRect();
              PU.top < pU ? gU.scrollBy({
                top: PU.top - pU,
                behavior: "smooth"
              }) : PU.bottom > EU && gU.scrollBy({
                top: Math.min(PU.bottom - EU, PU.top - pU),
                behavior: "smooth"
              })
            }(RU))
          }), 50);
        return null === gU || void 0 === gU || gU.addEventListener("scroll", TU, {
          passive: !0
        }), EU
      }), [PU, IU]), (0, mU.jsx)("div", {
        ref: xU,
        className: "SettingBoxGroup HudElementList",
        children: XU.filter((UU => gU.has(UU.id) && (WU || !(0, ZU.O)(UU.id)))).map((gU => {
          const tU = ((UU, RU) => {
              var gU;
              return null !== (gU = UU[RU]) && void 0 !== gU ? gU : ZU.n
            })(EU, gU.id),
            pU = (0, ZU.t)(EU, gU.id),
            xU = gU.id === PU,
            IU = gU.scale && !CU,
            JU = GU(gU.id, xU);
          return (0, mU.jsxs)("div", {
            "data-hud-row": gU.id,
            className: qU()("SettingBox HudElementRow", {
              Open: xU,
              Hidden: pU,
              Child: void 0 !== gU.parent
            }),
            children: [(0, mU.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, mU.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": IU ? xU : void 0,
                onClick: () => {
                  TU(gU.id)
                },
                children: [HU(gU.id, jU, RU, uU), gU.scale && 1 !== tU[2] && !(xU && IU) && (0, mU.jsx)("span", {
                  className: "HudElementRowSize",
                  children: hg(tU[2])
                }), IU && (0, mU.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, mU.jsx)(FU, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: gU.id,
                actionButtons: jU,
                keyNames: uU,
                locked: hU.has(gU.id),
                lockable: QU(gU.id),
                onLocked: eU
              }), "menu" === gU.id && (0, mU.jsx)(iU, {
                className: "HudElementRowIcon",
                open: WU,
                name: HU(gU.id, jU, RU, uU),
                onToggle: fU
              }), "menu" !== gU.id && (0, mU.jsx)(yU, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: gU.id,
                elements: EU,
                actionButtons: jU,
                keyNames: uU,
                onHidden: KU
              }), (0, mU.jsx)(kU, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: hU.has(gU.id),
                id: gU.id,
                elements: EU,
                actionButtons: jU,
                keyNames: uU,
                onReset: cU
              })]
            }), xU && IU && (0, mU.jsx)(Qg, {
              info: gU,
              tuple: tU,
              props: UU
            }), JU && (0, mU.jsx)("div", {
              className: "HudElementNote",
              children: JU
            })]
          }, gU.id)
        }))
      })
    }

    function Wg(UU) {
      let {
        preview: RU,
        quick: gU,
        onFullScreen: EU,
        resting: PU,
        onSidePanel: TU
      } = UU;
      const {
        t: qU
      } = (0, tU.B)(), cU = cg(), GU = (0, pU.useRef)(null), {
        width: jU
      } = (0, UR.d)(GU), uU = Math.floor(cU.width * Math.min(1, RU.maxHeight / cU.height)), CU = jU - uU - 12, hU = CU >= 130, QU = jU > 0;
      (0, pU.useEffect)((() => {
        QU && TU(hU)
      }), [QU, hU, TU]);
      const eU = (0, RR.u)(hU ? uU : jU, cU.width, cU.height, RU.maxHeight),
        WU = PU ? (0, mU.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: cU.height * eU
          }
        }) : (0, mU.jsx)(Gg, {
          ...RU
        }),
        fU = UU => (0, mU.jsxs)(KU.M, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: qU("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: EU,
          children: [(0, mU.jsx)(bU.c, {
            name: "expand"
          }), UU && (0, mU.jsx)("span", {
            children: qU("hudLayout:fullScreen")
          })]
        });
      return (0, mU.jsxs)("div", {
        ref: GU,
        className: "SettingBox HudLayoutPreviewBox",
        children: [jU > 0 && hU && (0, mU.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, mU.jsx)("div", {
            style: {
              width: uU
            },
            children: WU
          }), (0, mU.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, mU.jsx)(wR, {
              selected: RU.selected,
              ...gU,
              joystickFixed: RU.joystickFixed,
              extra: fU(!RU.selected || CU >= 278)
            })
          })]
        }), jU > 0 && !hU && (0, mU.jsxs)(mU.Fragment, {
          children: [WU, (0, mU.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: fU(!1)
          })]
        })]
      })
    }
    var fg = gU(2286),
      xg = gU(4065),
      mg = gU(2270);
    const Ig = UU => {
      const RU = tR.n * ("sides" === UU ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(RU / 2))
    };

    function Jg(UU, RU, gU) {
      const [tU, pU, EU, PU] = UU;
      return "sides" === RU ? [tU, gU, EU, gU] : [gU, pU, gU, PU]
    }
    const wg = [null, null, null, null],
      ng = UU => `${UU}px`;

    function bg(UU) {
      let {
        safe: RU,
        onPreview: gU,
        onCommit: EU
      } = UU;
      const {
        t: PU
      } = (0, tU.B)(), TU = (0, tR.u)(null !== RU && void 0 !== RU ? RU : wg, window.innerWidth, window.innerHeight, SR(document).map(Math.round)), qU = (0, pU.useRef)(null !== RU && void 0 !== RU ? RU : wg);
      qU.current = null !== RU && void 0 !== RU ? RU : wg;
      const cU = UU => {
        const RU = Math.min(Ig(UU), "sides" === UU ? Math.max(TU[1], TU[3]) : Math.max(TU[0], TU[2]));
        return (0, mU.jsx)(uU.h, {
          name: PU("sides" === UU ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: Ig(UU),
          step: 2,
          initValue: RU,
          format: ng,
          onChange: RU => {
            gU(Jg(qU.current, UU, RU))
          },
          onChangeComplete: tU => {
            if (tU === RU) return void gU(qU.current);
            const pU = Jg(qU.current, UU, tU);
            qU.current = pU, EU(pU), (0, wU.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: UU
            })
          }
        })
      };
      return (0, mU.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, mU.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, mU.jsx)("div", {
            children: PU("hudLayout:safeZone")
          }), (0, mU.jsx)(KU.M, {
            active: null === RU,
            pressed: null === RU,
            onClick: () => {
              EU(null)
            },
            children: PU("hudLayout:safeZoneAuto")
          })]
        }), cU("sides"), cU("ends")]
      })
    }

    function og() {
      const {
        t: UU
      } = (0, tU.B)(), RU = (0, ZU.eb)(), {
        clientEscMenuOptions: gU
      } = (0, cU.l)(["clientEscMenuOptions"]), EU = (0, fg.c)(), PU = RU.hudLayouts[EU], [TU, qU] = (0, pU.useState)(null), {
        rowIconsOpen: GU,
        onRowIconsOpen: jU,
        select: CU
      } = function(UU, RU) {
        const [gU, tU] = (0, pU.useState)((() => ZU.F.some((RU => void 0 !== UU.hudElements[RU] || UU.hudLocked.includes(RU))))), EU = (0, pU.useCallback)((UU => {
          RU(UU), (0, ZU.O)(UU) && tU(!0)
        }), [RU]);
        return {
          rowIconsOpen: gU,
          onRowIconsOpen: tU,
          select: EU
        }
      }(PU, qU), [hU, QU] = (0, pU.useState)([]), [eU, WU] = (0, pU.useState)(null), [fU, xU] = IR(), IU = (0, pU.useCallback)(((UU, RU, gU) => {
        QU(RU), xU(gU);
        const tU = Object.keys(UU);
        WU((UU => (null === UU || void 0 === UU ? void 0 : UU.size) === tU.length && tU.every((RU => UU.has(RU))) ? UU : new Set(tU)))
      }), [xU]), {
        gameState: JU
      } = (0, cU.l)(["gameState"]), bU = (0, mg.j)(), [oU] = (0, pU.useState)((() => "inGame" === JU ? function(UU, RU) {
        const gU = UU.querySelector(".InGameUi .TouchComponentsButtons");
        if (!gU) return PR;
        const tU = {},
          pU = {};
        for (const KU of ER) {
          const UU = gU.querySelector(`.TouchSlot${KU} > .TouchKey`);
          if (UU) {
            var EU, PU;
            tU[KU] = UU.cloneNode(!0);
            const RU = (null !== (EU = null === (PU = UU.querySelector(".TouchKeyLabel")) || void 0 === PU ? void 0 : PU.textContent) && void 0 !== EU ? EU : "").split(/\s+/).filter((UU => !/[\d\xd7]/.test(UU))).join(" ");
            RU && (pU[KU] = RU)
          }
        }
        const TU = RU => {
            const gU = UU.querySelector(`.InGameUi ${RU}`);
            return null !== gU && !gU.classList.contains("Hidden")
          },
          qU = [...UU.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((UU => UU.cloneNode(!0)));
        return {
          faces: Object.keys(tU).length > 0 ? tU : null,
          names: pU,
          shop: TU(".TouchInventoryKey.ShopKey"),
          bag: TU(".TouchInventoryKey.BagKey"),
          items: qU.length > 0 ? qU : null,
          rowIcons: RU
        }
      }(document, bU) : PR)), aU = (0, pU.useRef)(null), YU = (0, pU.useRef)(null), BU = function(UU) {
        const [RU, gU] = (0, pU.useState)((() => .4 * window.innerHeight));
        return (0, pU.useLayoutEffect)((() => {
          var RU;
          const tU = null === (RU = UU.current) || void 0 === RU ? void 0 : RU.closest(".SettingsMenuRight");
          if (!tU) return;
          const pU = () => {
            const UU = tU.clientHeight < Zg ? .4 : .5;
            gU(Math.max(80, tU.clientHeight * UU - 24))
          };
          pU();
          const EU = new ResizeObserver(pU);
          return EU.observe(tU), () => {
            EU.disconnect()
          }
        }), [UU]), RU
      }(YU), VU = (0, xg.r)(gU.joystickMode), rU = gU.touchActionButtons, dU = (0, pU.useMemo)((() => function(UU, RU) {
        const gU = {},
          tU = [
            ["extra", "X"],
            ["game", "G"]
          ];
        RU || tU.push(["attack", "P"]);
        for (const [pU, EU] of tU) {
          const RU = UU.names[EU];
          RU && (gU[pU] = RU)
        }
        return gU
      }(oU, rU)), [oU, rU]);
      (0, pU.useEffect)((() => {
        (0, wU.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [HU, sU] = (0, pU.useState)(!1), [yU, kU] = (0, pU.useState)(!1), FU = (0, pU.useRef)(null);
      jg(FU, !yU);
      const [iU, AU] = (0, pU.useState)(!1), zU = (0, pU.useCallback)((() => {
        AU(!1)
      }), []), MU = (0, pU.useMemo)((() => new Set(PU.hudLocked)), [PU.hudLocked]), NU = UU => {
        var RU, gU;
        const tU = (0, ZU.p)(),
          pU = UU(tU);
        (0, ZU.Y)(null !== (RU = null === (gU = aU.current) || void 0 === gU ? void 0 : gU.keepLocks(tU, pU)) && void 0 !== RU ? RU : pU)
      }, lU = (UU, RU) => {
        NU((gU => (0, ZU.gb)(gU, EU, UU, RU)))
      }, OU = (UU, RU, gU) => {
        lU(UU, {
          dx: RU,
          dy: gU
        }), (0, wU.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${UU}`
        })
      }, UR = (UU, RU) => {
        NU((gU => (0, ZU.hb)(gU, EU, UU, RU)))
      }, RR = UU => {
        const RU = vU[UU];
        return (RU.move || RU.scale) && ("joystick" !== UU || VU) && !(0, gR.y)(UU, PU.hudElements[UU])
      }, tR = UU => vU[UU].move && ("joystick" !== UU || VU) && !MU.has(UU), pR = new Set(XU.map((UU => UU.id)).filter((UU => {
        const RU = (0, ZU.O)(UU) && !oU.rowIcons.includes(UU);
        return null === eU || eU.has(UU) || (0, ZU.t)(PU.hudElements, UU) && !RU
      }))), TR = {
        present: pR,
        actionButtons: rU,
        keyNames: dU,
        scaleCaps: fU,
        sizeBesidePreview: HU,
        elements: PU.hudElements,
        selected: TU,
        onSelect: CU,
        rowIconsOpen: GU,
        onRowIconsOpen: jU,
        onScalePreview: (UU, RU) => {
          var gU;
          null === (gU = aU.current) || void 0 === gU || gU.setScale(UU, RU)
        },
        onScale: (UU, RU) => {
          lU(UU, {
            scale: RU
          }), (0, wU.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${UU}`
          })
        },
        onHidden: (UU, RU) => {
          lU(UU, {
            hidden: RU
          }), (0, wU.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${RU?"hide":"show"}:${UU}`
          })
        },
        onReset: UU => {
          lU(UU, ZU.e)
        },
        locked: MU,
        lockable: RR,
        onLocked: UR,
        note: (RU, gU) => {
          const tU = gU && hU.length > 0 ? UU("hudLayout:overlapsNote", {
            names: SU(hU, rU, UU, dU)
          }) : null;
          return gU && DU(RU, VU) ? (0, mU.jsxs)(mU.Fragment, {
            children: [tU && (0, mU.jsx)("span", {
              children: tU
            }), (0, mU.jsx)("span", {
              children: UU("hudLayout:floatingJoystickNote")
            }), !HU && (0, mU.jsx)(LU, {})]
          }) : tU || (gU && MU.has(RU) ? UU("hudLayout:lockedNote") : gU && "cluster" === RU ? UU("hudLayout:clusterNote") : gU && "menu" === RU ? UU("hudLayout:menuNote") : gU && (0, gR.y)(RU, PU.hudElements[RU]) && tR(RU) ? UU("hudLayout:rowIconNote") : gU && "arrows" === RU ? UU("hudLayout:arrowsNote") : "inventory" === RU && (0, ZU.t)(PU.hudElements, "inventory") ? UU("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, mU.jsxs)("div", {
        ref: YU,
        className: "HudLayoutSettings",
        children: [(0, mU.jsxs)("div", {
          ref: FU,
          className: "HudLayoutBody",
          children: [(0, mU.jsx)("div", {
            className: "HudLayoutOrientation",
            children: UU("landscape" === EU ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, mU.jsx)(Wg, {
            preview: {
              layout: RU,
              orientation: EU,
              selected: TU,
              onSelect: CU,
              onMove: OU,
              canMove: tR,
              actionButtons: rU,
              joystickFixed: VU,
              presence: oU,
              keyNames: dU,
              maxHeight: BU,
              apiRef: aU,
              onMeasured: IU,
              onReady: kU,
              lockable: RR
            },
            quick: {
              layout: PU,
              actionButtons: rU,
              keyNames: dU,
              scaleCaps: fU,
              overlaps: hU,
              onScale: TR.onScale,
              onHidden: TR.onHidden,
              onReset: TR.onReset,
              locked: MU,
              lockable: RR,
              onLocked: UR
            },
            onFullScreen: () => {
              AU(!0)
            },
            resting: iU,
            onSidePanel: sU
          }), iU && (0, mU.jsx)(Cg, {
            layout: RU,
            orientation: EU,
            selected: TU,
            onSelect: CU,
            onMove: OU,
            canMove: tR,
            actionButtons: rU,
            joystickFixed: VU,
            presence: oU,
            keyNames: dU,
            onScale: TR.onScale,
            onHidden: TR.onHidden,
            onReset: TR.onReset,
            locked: MU,
            lockable: RR,
            onLocked: UR,
            apiRef: aU,
            onClose: zU
          }), (0, mU.jsx)(bg, {
            safe: PU.hudSafe,
            onCommit: UU => {
              NU((RU => (0, ZU.kb)(RU, EU, UU)))
            },
            onPreview: UU => {
              var RU;
              null === (RU = aU.current) || void 0 === RU || RU.setSafe(UU)
            }
          }), (0, mU.jsx)(uU.b, {
            label: UU("hudLayout:snapCentre"),
            checked: RU.hudSnapCentre,
            onClick: UU => {
              (0, ZU.U)(UU)
            },
            circleInfoText: UU("hudLayout:snapCentreInfo")
          }), (0, mU.jsx)(eg, {
            ...TR
          }), (0, mU.jsx)(uU.d, {
            label: UU("hudLayout:shape"),
            options: ZU.H.map((RU => ({
              value: RU,
              label: UU(`hudLayout:shape_${RU}`)
            }))),
            value: RU.hudShape,
            onChange: UU => {
              NU((RU => ({
                ...RU,
                hudShape: UU
              }))), (0, wU.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: UU
              })
            }
          }), (0, mU.jsx)(uU.h, {
            name: UU("hudLayout:opacity"),
            min: ZU.f,
            max: 1,
            step: .05,
            initValue: RU.hudKeyOpacity,
            format: UU => `${Math.round(100*UU)}%`,
            circleInfoText: UU("hudLayout:opacityInfo"),
            onChange: UU => {
              var RU;
              null === (RU = aU.current) || void 0 === RU || RU.setOpacity(UU)
            },
            onChangeComplete: UU => {
              (0, ZU.S)(UU), (0, wU.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, mU.jsx)(KU.E, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const UU = nU.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await UU.getResult() && (0, ZU.R)()
            }()
          },
          children: UU("hudLayout:resetAll")
        })]
      })
    }
    const Zg = 350;
    const ag = [function() {
      const {
        t: UU
      } = (0, tU.B)(), [RU, gU] = (0, pU.useState)(!1), EU = (0, pU.useRef)(null);
      return (0, pU.useEffect)((() => {
        var UU;
        RU && (null === (UU = EU.current) || void 0 === UU || UU.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [RU]), (0, mU.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, mU.jsxs)("button", {
          ref: EU,
          type: "button",
          className: "SettingBox SettingBoxFeatured HudLayoutEntry",
          "aria-expanded": RU,
          onClick: () => {
            gU(!RU)
          },
          children: [(0, mU.jsx)(bU.c, {
            name: "arrows-up-down-left-right",
            className: "HudLayoutEntryIcon"
          }), (0, mU.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, mU.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: UU("hudLayout:title")
            }), (0, mU.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: UU("hudLayout:entrySub")
            })]
          }), (0, mU.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), RU && (0, mU.jsx)(og, {})]
      })
    }, function() {
      const {
        t: UU
      } = (0, tU.B)(), {
        joystickMode: RU,
        touchSpeedCurve: gU,
        autorun: pU,
        jumpLock: EU
      } = (0, cU.l)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, mU.jsxs)(mU.Fragment, {
        children: [(0, mU.jsx)(uU.d, {
          label: UU("settingsMenu:joystick"),
          options: xU.wb.map((RU => ({
            value: RU,
            label: UU(IU[RU])
          }))),
          value: RU,
          onChange: UU => {
            cU.b.setClientEscMenuOptions({
              joystickMode: UU
            })
          },
          circleInfoText: UU("settingsMenu:joystickInfo")
        }), (0, mU.jsx)(uU.b, {
          label: UU("settingsMenu:preciseWalking"),
          checked: gU,
          onClick: UU => {
            cU.b.setClientEscMenuOptions({
              touchSpeedCurve: UU
            })
          },
          circleInfoText: UU("settingsMenu:preciseWalkingInfo")
        }), (0, mU.jsx)(uU.b, {
          label: UU("settingsMenu:autoRun"),
          checked: pU,
          onClick: UU => {
            cU.b.setClientEscMenuOptions({
              autorun: UU
            })
          },
          circleInfoText: UU("settingsMenu:autoRunInfo")
        }), (0, mU.jsx)(uU.b, {
          label: UU("settingsMenu:jumpLock"),
          checked: EU,
          onClick: UU => {
            cU.b.setClientEscMenuOptions({
              jumpLock: UU
            })
          },
          circleInfoText: UU("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, mU.jsx)(fU.b, {})
    }, function() {
      const {
        t: UU
      } = (0, tU.B)(), {
        clientEscMenuOptions: RU
      } = (0, cU.l)(["clientEscMenuOptions"]);
      return (0, JU.b)() ? (0, mU.jsx)(uU.b, {
        label: UU("settingsMenu:vibration"),
        checked: RU.vibration,
        onClick: UU => {
          cU.b.setClientEscMenuOptions({
            vibration: UU
          })
        },
        circleInfoText: UU("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Yg() {
      return (0, mU.jsx)(mU.Fragment, {
        children: ag.map(((UU, RU) => (0, mU.jsx)(UU, {}, RU)))
      })
    }
    var Bg = gU(4049);

    function Vg() {
      const {
        t: UU
      } = (0, tU.B)(), {
        isTouchScreen: RU,
        clientEscMenuOptions: gU,
        gameState: PU
      } = (0, cU.l)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), TU = (0, CU.g)("ezBridging"), qU = (0, CU.g)("ezTowering"), QU = "inGame" !== PU || !0 === TU, eU = (0, hU.g)() && ("inGame" !== PU || !0 === qU), [, fU] = (0, pU.useReducer)((UU => UU + 1), 0), xU = (0, WU.g)(), [IU, JU] = (0, pU.useState)(Bg.f);
      return (0, mU.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [xU && (0, mU.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, mU.jsx)("div", {
            children: UU("controller:settingsControlsNote")
          }), (0, mU.jsx)(KU.M, {
            onClick: () => {
              cU.b.set({
                openSettingsCategory: "controller"
              })
            },
            children: UU("controller:settingsOpenController")
          })]
        }), (0, GU.isTouchscreen)() && !(0, GU.isMobile)() ? (0, mU.jsx)(mU.Fragment, {
          children: (0, mU.jsx)(uU.b, {
            label: UU("settingsMenu:useTouchControls"),
            checked: IU,
            onClick: UU => {
              (0, Bg.e)(UU), JU(UU)
            }
          })
        }) : null, RU && (0, mU.jsx)(Yg, {}), QU && (0, mU.jsx)(uU.b, {
          label: UU("settingsMenu:ezBridging"),
          checked: gU.ezBridging,
          onClick: UU => {
            cU.b.setClientEscMenuOptions({
              ezBridging: UU
            })
          },
          circleInfoText: UU("settingsMenu:ezBridgingInfo")
        }), eU && (0, mU.jsx)(uU.b, {
          label: UU("settingsMenu:ezTowering"),
          checked: gU.ezTowering,
          onClick: UU => {
            cU.b.setClientEscMenuOptions({
              ezTowering: UU
            })
          },
          circleInfoText: UU("settingsMenu:ezToweringInfo")
        }), (0, mU.jsx)(uU.b, {
          label: UU("settingsMenu:crouchToggle"),
          checked: gU.crouchIsToggle,
          onClick: UU => {
            cU.b.setClientEscMenuOptions({
              crouchIsToggle: UU
            })
          },
          circleInfoText: UU("settingsMenu:crouchToggleInfo")
        }), (0, mU.jsx)(uU.b, {
          label: UU("settingsMenu:hideUiToggle"),
          checked: gU.hideUiIsToggle,
          onClick: UU => {
            cU.b.setClientEscMenuOptions({
              hideUiIsToggle: UU
            })
          },
          circleInfoText: UU("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, jU.b)() && (0, mU.jsx)(uU.h, {
          name: UU("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: gU.touchscreenSensitivity,
          onChange: UU => {
            cU.b.setClientEscMenuOptions({
              touchscreenSensitivity: UU
            })
          }
        }), !(0, GU.isMobile)() && (0, mU.jsx)(uU.h, {
          name: UU("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: gU.mouseSensitivity,
          onChange: UU => {
            cU.b.setClientEscMenuOptions({
              mouseSensitivity: UU
            })
          }
        }), !(0, GU.isMobile)() && (0, mU.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, mU.jsx)("div", {
            className: "SliderText",
            children: UU("settingsMenu:keyBindings")
          }), EU.f.map((RU => (0, mU.jsx)(rg, {
            title: UU(RU.name.translationKey, RU.name.params),
            defaultOpen: EU.i.has(RU.id),
            children: RU.actions.map((UU => (0, mU.jsx)(Xg, {
              noaAction: UU,
              forceUpdate: fU,
              clashesWith: RU.clashesWith,
              showPadGlyph: xU
            }, UU)))
          }, RU.name.translationKey))), (0, mU.jsx)(KU.E, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, EU.G)(), fU()
            },
            children: UU("controls:resetBindings")
          })]
        })]
      })
    }

    function rg(UU) {
      let {
        title: RU,
        defaultOpen: gU,
        children: tU
      } = UU;
      const [EU, PU] = (0, pU.useState)(gU);
      return (0, mU.jsxs)("div", {
        className: qU()("ControlsSection", {
          Collapsed: !EU
        }),
        children: [(0, mU.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            PU(!EU)
          },
          children: [(0, mU.jsx)("div", {
            className: "ControlsSectionTitle",
            children: RU
          }), (0, mU.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), EU && (0, mU.jsx)("div", {
          className: "ControlsSectionRows",
          children: tU
        })]
      })
    }

    function Xg(UU) {
      let {
        noaAction: RU,
        forceUpdate: gU,
        clashesWith: TU,
        showPadGlyph: cU
      } = UU;
      const {
        t: GU
      } = (0, tU.B)(), jU = (0, eU.c)(RU), [uU, CU] = (0, pU.useState)(!1), [hU, WU] = (0, pU.useState)("controls:clickToEnterNewBinding"), [fU, xU] = (0, pU.useState)(null), [IU, JU] = (0, pU.useState)(null), wU = (0, pU.useRef)(null);
      (0, pU.useEffect)((() => {
        uU && wU.current && wU.current.focus()
      }), [uU]);
      const nU = EU.r[RU].filter((UU => PU.h[UU]));
      let bU = null;
      const oU = [],
        ZU = TU.flatMap((UU => {
          var RU, gU;
          return null !== (RU = null === (gU = EU.f.find((RU => RU.id === UU))) || void 0 === gU ? void 0 : gU.actions) && void 0 !== RU ? RU : []
        }));
      for (const tU of ZU) {
        if (tU === RU) continue;
        const UU = EU.r[tU];
        for (const RU of UU) nU.includes(RU) && oU.push(GU(EU.v[tU].translationKey, EU.v[tU].params))
      }
      oU.length > 0 && (bU = GU("controls:sharedBindingsWarning") + " ", bU += oU.join(", "));
      const aU = () => {
          CU(!1), xU(null), WU("controls:clickToEnterNewBinding"), JU(null)
        },
        YU = () => "BindingInput_" + RU;
      return (0, mU.jsxs)("div", {
        className: qU()("ControlRow", {
          WarningBorder: null !== bU
        }),
        children: [(0, mU.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, mU.jsxs)("div", {
            className: "ControlName",
            children: [GU(EU.v[RU].translationKey, EU.v[RU].params), cU && jU && (0, mU.jsx)(QU.b, {
              glyph: jU,
              className: "ControlPadGlyph"
            })]
          }), (0, mU.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, mU.jsxs)("div", {
              className: "ControlBindingsList",
              children: [nU.map((UU => (0, mU.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, mU.jsx)("div", {
                  children: (0, EU.m)(UU)
                }), (0, mU.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const tU = (0, EU.z)(RU, UU);
                    tU.isError() ? JU(tU.asError().message) : JU(null), gU()
                  },
                  children: "\xd7"
                })]
              }, UU))), !uU && (0, mU.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  CU(!0), JU(null)
                },
                children: (0, mU.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), uU && (0, mU.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, mU.jsxs)("div", {
                className: "InputContainer",
                children: [(0, mU.jsx)("div", {
                  className: "InputOverlay",
                  children: fU ? (0, EU.m)(fU) : (0, mU.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: GU(hU)
                  })
                }), (0, mU.jsx)("input", {
                  ref: wU,
                  id: YU(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: UU => {
                    if ("Escape" === UU.code) return aU(), UU.preventDefault(), void UU.stopPropagation();
                    const RU = UU.code;
                    PU.d.includes(RU) ? (JU(null), xU(RU)) : (JU("controls:keyIsReserved"), xU(null)), UU.preventDefault(), UU.stopPropagation()
                  },
                  onMouseDown: UU => {
                    const RU = "Mouse" + (UU.button + 1);
                    document.activeElement && document.activeElement.id === YU() ? PU.d.includes(RU) ? (JU(null), xU(RU)) : (JU("controls:keyIsReserved"), xU(null)) : WU("controls:enterNewBinding"), UU.stopPropagation()
                  },
                  onBlur: () => {
                    WU("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, mU.jsx)(KU.e, {
                onPointerDown: UU => {
                  UU.preventDefault()
                },
                onClick: () => {
                  (0, EU.c)(RU, fU), gU(), aU()
                },
                className: "ControlBindingAddButton",
                disabled: null === fU,
                children: GU("general:add")
              }), (0, mU.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  aU()
                },
                children: "\xd7"
              })]
            }), IU && (0, mU.jsx)("div", {
              className: "ControlBindingError",
              children: GU(IU)
            })]
          })]
        }), bU && (0, mU.jsx)("div", {
          className: "ControlRowWarning",
          children: bU
        })]
      })
    }
  },
  8470: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU
    });
    var tU = gU(21),
      pU = gU(3139),
      EU = gU(1333),
      PU = gU(1362);
    const TU = async () => {
      if ((0, PU.g)()) {
        if (!0 !== await EU.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== tU.b.get("gameState")) return
      }(0, pU.d)()
    }
  },
  8475: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => qU,
      e: () => EU,
      f: () => PU,
      j: () => pU,
      l: () => TU
    });
    var tU = gU(1823);
    const pU = "controllerPadShopOpen",
      EU = UU => tU.l.includes(UU),
      PU = UU => Object.values(UU).some((UU => !1 !== UU.canBuy && !UU.isRewardedAd)),
      TU = (UU, RU, gU) => {
        var tU, pU, PU, TU;
        const qU = UU.filter((UU => !EU(UU))),
          KU = null !== RU && UU.includes(RU) ? RU : null;
        return null !== KU && !EU(KU) && gU(KU) ? KU : null !== (tU = null !== (pU = null !== (PU = null !== (TU = qU.find(gU)) && void 0 !== TU ? TU : qU[0]) && void 0 !== PU ? PU : KU) && void 0 !== pU ? pU : UU[0]) && void 0 !== tU ? tU : null
      },
      qU = UU => UU.userInput || UU.isRewardedAd || "boolean" === typeof UU.isSelected ? null : JSON.stringify([UU.image, UU.cost, UU.currency, UU.amount, UU.customTitle, UU.buyButtonText, UU.description, UU.canBuy])
  },
  8501: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU,
      g: () => cU
    });
    var tU = gU(56),
      pU = gU(1410),
      EU = gU(1864),
      PU = gU(1376),
      TU = gU(1397),
      qU = gU(1090);
    const KU = () => {
        const UU = (0, PU.v)();
        if ((0, tU.useEffect)((() => {
            (0, PU.l)()
          }), []), !UU) return null;
        const {
          ControllerCategory: RU
        } = UU;
        return (0, qU.jsx)(TU.d, {
          children: (0, qU.jsx)(RU, {})
        })
      },
      cU = () => {
        var UU;
        const RU = (0, PU.v)(),
          [, gU] = (0, tU.useReducer)((UU => UU + 1), 0);
        return (0, pU.e)(EU.c, gU), null !== (UU = null === RU || void 0 === RU ? void 0 : RU.hasActivePad()) && void 0 !== UU && UU
      }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);