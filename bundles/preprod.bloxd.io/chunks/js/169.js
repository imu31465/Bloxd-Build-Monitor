export const id = 169;
export const ids = [169];
export const modules = {
  9447: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU
    });
    var cU = zU(27),
      yU = zU(1193),
      QU = zU(5540),
      AU = zU(1305);

    function FU(UU) {
      let {
        note: XU
      } = UU;
      const {
        t: zU
      } = (0, yU.I)(), {
        clientEscMenuOptions: FU
      } = (0, cU.q)(["clientEscMenuOptions"]);
      return (0, AU.jsx)(QU.e, {
        label: zU("touchSettings:actionButtons"),
        checked: FU.touchActionButtons,
        onClick: UU => {
          cU.e.setClientEscMenuOptions({
            touchActionButtons: UU
          })
        },
        circleInfoText: zU("touchSettings:actionButtonsInfo"),
        note: XU
      })
    }
  },
  9441: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => ez,
      f: () => Lz
    });
    var cU = zU(1193),
      yU = zU(61),
      QU = zU(2058),
      AU = zU(2067),
      FU = zU(1106),
      oU = zU.n(FU),
      DU = zU(1494),
      EU = zU(27),
      YU = zU(97),
      NU = zU(114),
      IU = zU(5540),
      pU = zU(2616),
      aU = zU(287),
      tU = zU(2071),
      gU = zU(2077),
      kU = zU(9443),
      GU = zU(9447),
      BU = zU(320),
      ZU = zU(1305);
    const RU = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var PU = zU(9449);
    var WU = zU(1521),
      dU = zU(1410),
      LU = zU(9457),
      eU = zU(1457),
      CU = zU(1390),
      wU = zU(9459),
      qU = zU(2645);

    function OU(UU) {
      let {
        className: XU,
        keepPlace: zU
      } = UU;
      return zU ? (0, ZU.jsx)("div", {
        className: oU()(XU, "Placeholder")
      }) : null
    }

    function SU(UU) {
      let {
        id: XU,
        elements: zU,
        actionButtons: yU,
        keyNames: QU,
        className: AU,
        keepPlace: FU,
        onHidden: oU
      } = UU;
      const {
        t: EU
      } = (0, cU.I)();
      if (!wU.i[XU].hide) return (0, ZU.jsx)(OU, {
        className: AU,
        keepPlace: FU
      });
      const YU = (0, qU.q)(zU, XU);
      return (0, ZU.jsx)(DU.O, {
        className: AU,
        ariaLabel: EU(YU ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: (0, wU.y)(XU, yU, EU, QU)
        }),
        pressed: !YU,
        onClick: () => {
          oU(XU, !YU)
        },
        children: (0, ZU.jsx)(CU.d, {
          name: YU ? "eye-slash" : "eye"
        })
      })
    }

    function rU(UU) {
      let {
        id: XU,
        elements: zU,
        actionButtons: yU,
        keyNames: QU,
        className: AU,
        keepPlace: FU,
        onlyWhenMoved: oU,
        locked: EU,
        onReset: YU
      } = UU;
      const {
        t: NU
      } = (0, cU.I)(), IU = wU.i[XU], pU = (0, qU.H)(zU[XU]);
      return !IU.move && !IU.scale || oU && pU ? (0, ZU.jsx)(OU, {
        className: AU,
        keepPlace: FU
      }) : (0, ZU.jsx)(DU.O, {
        className: AU,
        disabled: pU || EU,
        ariaLabel: NU("hudLayout:resetElement", {
          name: (0, wU.y)(XU, yU, NU, QU)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: XU
        },
        onClick: UU => {
          oU && HU(UU.currentTarget), YU(XU)
        },
        children: (0, ZU.jsx)(CU.d, {
          name: "rotate-left"
        })
      })
    }

    function uU(UU) {
      let {
        id: XU,
        actionButtons: zU,
        keyNames: yU,
        className: QU,
        keepPlace: AU,
        locked: FU,
        lockable: oU,
        onLocked: EU
      } = UU;
      const {
        t: YU
      } = (0, cU.I)();
      return oU || FU ? (0, ZU.jsx)(DU.O, {
        className: QU,
        ariaLabel: YU(FU ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: (0, wU.y)(XU, zU, YU, yU)
        }),
        pressed: FU,
        active: FU,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${FU?"unlock":"lock"}:${XU}`
        },
        onClick: () => {
          EU(XU, !FU)
        },
        children: (0, ZU.jsx)(CU.d, {
          name: FU ? "lock" : "lock-open"
        })
      }) : (0, ZU.jsx)(OU, {
        className: QU,
        keepPlace: AU
      })
    }

    function fU(UU) {
      let {
        className: XU,
        open: zU,
        name: yU,
        onToggle: QU
      } = UU;
      const {
        t: AU
      } = (0, cU.I)();
      return (0, ZU.jsx)(DU.O, {
        className: XU,
        ariaLabel: AU(zU ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: yU
        }),
        pressed: zU,
        analyticsClick: {
          id: "hud_layout.children",
          value: zU ? "close" : "open"
        },
        onClick: () => {
          QU(!zU)
        },
        children: (0, ZU.jsx)(CU.d, {
          name: zU ? "angle-up" : "angle-down"
        })
      })
    }

    function iU(UU, XU) {
      var zU;
      UU.contains(document.activeElement) && XU.focus({
        preventScroll: !0
      }), null === (zU = (0, eU.e)()) || void 0 === zU || zU.handOverPadFocus(UU, XU)
    }

    function HU(UU) {
      const XU = UU.closest("[data-hud-row]"),
        zU = null === XU || void 0 === XU ? void 0 : XU.querySelector(".HudElementRowName");
      return !(!XU || !zU) && (iU(XU, zU), !0)
    }
    const MU = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function vU(UU, XU) {
      return "joystick" === UU && !XU
    }

    function VU() {
      const {
        t: UU
      } = (0, cU.I)();
      return (0, ZU.jsx)(DU.O, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: UU => {
          const XU = UU.currentTarget;
          if (!HU(XU)) {
            const UU = function(UU) {
              var XU, zU;
              const cU = [UU.previousElementSibling, UU.nextElementSibling].find((UU => UU instanceof HTMLElement && UU.matches(MU)));
              return null !== (XU = null !== cU && void 0 !== cU ? cU : null === (zU = UU.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === zU ? void 0 : zU.querySelector(`:is(${MU}):not(.HudFixJoystickButton)`)) && void 0 !== XU ? XU : null
            }(XU);
            UU && iU(XU, UU)
          }
          EU.e.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: UU("hudLayout:fixJoystick")
      })
    }
    var sU = zU(73),
      nU = zU(1294),
      mU = zU(3478),
      lU = zU(3021),
      xU = zU(9461),
      JU = zU(9466),
      jU = zU(2651),
      KU = zU(2668),
      bU = zU(3519),
      TU = zU(9471);
    const hU = UU => ({
      [wU.g]: UU
    });

    function UX(UU) {
      let {
        id: XU,
        slot: zU,
        icon: cU,
        label: QU,
        hidden: AU,
        className: FU,
        face: DU
      } = UU;
      const EU = (0, yU.useRef)(null);
      return (0, yU.useLayoutEffect)((() => {
        DU && EU.current && (0, TU.n)(EU.current, DU)
      }), [DU]), (0, ZU.jsxs)("div", {
        className: oU()("TouchKeyHit", `TouchSlot${zU}`, FU, {
          HudPreviewGhost: AU.has(XU)
        }),
        ...hU(XU),
        children: [DU && (0, ZU.jsx)("div", {
          ref: EU,
          className: oU()("TouchKey", {
            Labelled: DU.classList.contains("Labelled")
          })
        }), !DU && (0, ZU.jsxs)("div", {
          className: oU()("TouchKey", {
            Labelled: void 0 !== QU
          }),
          children: [cU && (0, ZU.jsx)(CU.d, {
            name: cU
          }), void 0 !== QU && (0, ZU.jsx)("span", {
            className: "TouchKeyLabel",
            children: QU
          })]
        })]
      })
    }

    function XX(UU) {
      let {
        item: XU,
        selected: zU
      } = UU;
      const cU = (0, yU.useRef)(null);
      return (0, yU.useLayoutEffect)((() => {
        cU.current && (0, TU.n)(cU.current, XU)
      }), [XU]), (0, ZU.jsx)("div", {
        ref: cU,
        className: oU()("InvenItem", {
          Selected: zU
        })
      })
    }
    const zX = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      cX = UU => void 0 === UU ? {} : {
        style: {
          "--parked": UU
        }
      };

    function yX(UU) {
      let {
        id: XU,
        hidden: zU,
        parked: cU,
        unslotted: yU = !1
      } = UU;
      return (0, ZU.jsx)("div", {
        className: oU()("TopRightIcon", KU.r[XU], {
          HudPreviewGhost: zU.has(XU),
          [jU.d]: void 0 !== cU,
          [jU.g]: yU
        }),
        ...cX(cU),
        children: (0, ZU.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...hU(XU),
          children: (0, ZU.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, ZU.jsx)(CU.d, {
              name: zX[XU]
            })
          })
        })
      })
    }

    function QX(UU) {
      let {
        portraitPhone: XU,
        icons: zU,
        pinnedIcons: cU,
        hidden: QU,
        moved: AU,
        trayState: FU
      } = UU;
      const DU = XU ? (0, jU.I)(zU) : [],
        EU = zU.filter((UU => "settings" === UU)),
        YU = zU.filter((UU => "settings" !== UU && !DU.includes(UU))).reverse(),
        NU = DU.length > 0 && "gone" === FU,
        IU = [...EU, ...NU ? ["tray"] : [], ...YU].filter((UU => "tray" === UU || QU.has(UU) && !AU.has(UU))),
        pU = UU => {
          const XU = IU.indexOf(UU);
          return XU < 0 ? void 0 : XU
        },
        aU = (UU, XU) => (0, ZU.jsx)(yX, {
          id: UU,
          hidden: QU,
          parked: XU ? pU(UU) : void 0,
          unslotted: XU && QU.has(UU) && AU.has(UU)
        }, UU);
      return (0, ZU.jsxs)("div", {
        className: oU()("TopRightIcons TouchInGame", {
          Column: XU
        }),
        children: [EU.map((UU => aU(UU, !0))), DU.length > 0 && (0, ZU.jsxs)("div", {
          className: oU()("TopRightIcon TopRightTrayToggle Open", {
            [jU.d]: NU
          }),
          ...cX(pU("tray")),
          children: [(0, ZU.jsx)("div", {
            className: oU()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== FU
            }),
            children: (0, ZU.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, ZU.jsx)(CU.d, {
                name: "ellipsis"
              })
            })
          }), (0, ZU.jsx)("div", {
            className: "TopRightTray",
            children: DU.map((UU => aU(UU, !1)))
          })]
        }), YU.map((UU => (0, ZU.jsxs)(yU.Fragment, {
          children: ["perspective" === UU && null !== cU.rightOfCamera && (0, ZU.jsx)(AX, {
            icon: cU.rightOfCamera
          }), aU(UU, !0)]
        }, UU))), null !== cU.leftEnd && (0, ZU.jsx)(AX, {
          icon: cU.leftEnd
        })]
      })
    }

    function AX(UU) {
      let {
        icon: XU
      } = UU;
      return (0, ZU.jsx)("div", {
        className: "TopRightIcon",
        children: (0, ZU.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, ZU.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, ZU.jsx)(CU.d, {
              name: XU
            })
          })
        })
      })
    }

    function FX(UU) {
      let {
        next: XU,
        hidden: zU
      } = UU;
      return (0, ZU.jsx)("div", {
        className: oU()("HotBarArrow", XU ? "Next" : "Previous", {
          HudPreviewGhost: zU
        }),
        ...hU("arrows"),
        children: (0, ZU.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, ZU.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, ZU.jsx)(CU.d, {
              name: XU ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function oX() {
      return (0, ZU.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, ZU.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, ZU.jsx)("div", {
            className: "SocialBar",
            children: (0, ZU.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, ZU.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, ZU.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, ZU.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, ZU.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, ZU.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, ZU.jsx)(CU.d, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, ZU.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, ZU.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, ZU.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, ZU.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, ZU.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, ZU.jsx)(CU.d, {
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
    const DX = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      EX = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      YX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      NX = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function IX(UU) {
      let {
        presence: XU,
        portraitPhone: zU,
        hidden: yU,
        actionButtons: QU,
        joystickFixed: AU,
        keysAbove: FU,
        auraBar: DU,
        trayState: EU,
        moved: NU
      } = UU;
      const {
        t: IU
      } = (0, cU.I)(), {
        faces: pU,
        items: aU
      } = XU, tU = UU => ({
        HudPreviewGhost: (0, wU.J)(UU).some((UU => yU.has(UU)))
      });
      return (0, ZU.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, ZU.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, ZU.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, ZU.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, ZU.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, ZU.jsx)("div", {
              className: "InGameHeaderGameName",
              children: IU("hudLayout:previewGameName")
            })]
          })
        }), (0, ZU.jsx)("div", {
          className: "TopLeftElements",
          children: (0, ZU.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, ZU.jsxs)("div", {
              className: "Chat",
              children: [(0, ZU.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [IU("hudLayout:previewChatLine"), IU("hudLayout:previewChatJoined", {
                  name: "Arthur"
                }), IU("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((UU => (0, ZU.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, ZU.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, ZU.jsx)("div", {
                      className: "IndividualText",
                      children: UU
                    })
                  })
                }, UU)))
              }), (0, ZU.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: oU()("ChatIconWrapper SmallTextLight", tU("chat")),
                ...hU("chat"),
                children: (0, ZU.jsx)(CU.d, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, ZU.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, ZU.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, ZU.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, ZU.jsx)("div", {
                className: "TopRightIconsContainer",
                ...hU("menu"),
                children: (0, ZU.jsx)(QX, {
                  portraitPhone: zU,
                  icons: XU.rowIcons,
                  pinnedIcons: XU.pinnedIcons,
                  hidden: yU,
                  trayState: EU,
                  moved: NU
                })
              })
            }), YU.featureFlags.useSocialFeatures && (0, ZU.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, ZU.jsx)(oX, {})
            })]
          })
        }), (0, ZU.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, ZU.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, ZU.jsxs)("div", {
            className: "TouchInteractKey",
            ...hU("interact"),
            children: [(0, ZU.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, ZU.jsx)(CU.d, {
                name: "hand-back-point-up"
              })
            }), (0, ZU.jsx)("div", {
              children: IU("hudLayout:previewInteract")
            })]
          })
        }), (0, ZU.jsx)("div", {
          className: "BottomCentre",
          children: (0, ZU.jsxs)("div", {
            className: "BottomElements",
            children: [(0, ZU.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, ZU.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, ZU.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...hU("hotbar"),
                children: (0, ZU.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, ZU.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, ZU.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, ZU.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, ZU.jsx)(CU.d, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), DU && (0, ZU.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, ZU.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, ZU.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, bU.e)("glint"),
                    alt: ""
                  }), (0, ZU.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, ZU.jsx)("div", {
                  className: "AuraBar",
                  children: (0, ZU.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, ZU.jsx)("div", {
                className: "HotBarRow",
                children: (0, ZU.jsx)("div", {
                  className: oU()("HotBarContainer Touch", {
                    KeysAbove: FU
                  }),
                  children: (0, ZU.jsxs)("div", {
                    className: "HotBar",
                    ...hU("hotbar"),
                    children: [(0, ZU.jsxs)("div", {
                      className: oU()("TouchInventoryKeys", {
                        NoAuraBar: !DU
                      }),
                      children: [(0, ZU.jsx)("div", {
                        className: oU()("TouchInventoryKey ShopKey", tU("shop"), {
                          Hidden: !XU.shop
                        }),
                        ...hU("shop"),
                        children: (0, ZU.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, ZU.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, ZU.jsx)(CU.d, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, ZU.jsx)("div", {
                        className: oU()("TouchInventoryKey BagKey", tU("bag"), {
                          Hidden: !XU.bag
                        }),
                        ...hU("bag"),
                        children: (0, ZU.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, ZU.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, ZU.jsx)(CU.d, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, ZU.jsx)(FX, {
                      next: !1,
                      hidden: yU.has("arrows")
                    }), (0, ZU.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== aU && aU.map(((UU, XU) => (0, ZU.jsx)(XX, {
                        item: UU,
                        selected: UU.classList.contains("Selected")
                      }, XU))), null === aU && YX.map((UU => {
                        const XU = NX[UU];
                        return (0, ZU.jsx)("div", {
                          className: oU()("InvenItem", {
                            Selected: 0 === UU
                          }),
                          children: XU && (0, ZU.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, ZU.jsx)(CU.d, {
                              name: XU
                            })
                          })
                        }, UU)
                      }))]
                    }), (0, ZU.jsx)(FX, {
                      next: !0,
                      hidden: yU.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, ZU.jsx)("div", {
              className: "BottomRightElements",
              children: (0, ZU.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== pU && TU.i.map((UU => {
                  const XU = pU[UU];
                  return XU && (0, ZU.jsx)(UX, {
                    id: TU.g[UU],
                    slot: UU,
                    face: XU,
                    className: DX[UU],
                    hidden: yU
                  }, UU)
                })), (0, TU.r)(XU, QU).map((UU => (0, ZU.jsx)(UX, {
                  id: TU.g[UU],
                  slot: UU,
                  icon: EX[UU].icon,
                  label: IU(EX[UU].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: yU
                }, UU))), null === pU && (0, ZU.jsxs)(ZU.Fragment, {
                  children: [(0, ZU.jsx)(UX, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: yU
                  }), (0, ZU.jsx)(UX, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: yU
                  }), QU && (0, ZU.jsxs)(ZU.Fragment, {
                    children: [(0, ZU.jsx)(UX, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: yU
                    }), (0, ZU.jsx)(UX, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: yU
                    })]
                  }), (0, TU.l)(QU).map((UU => (0, ZU.jsx)(UX, {
                    id: TU.g[UU],
                    slot: UU,
                    icon: EX[UU].icon,
                    label: IU(EX[UU].labelKey),
                    hidden: yU
                  }, UU))), (0, ZU.jsx)(UX, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: yU
                  })]
                })]
              })
            })]
          })
        }), (0, ZU.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, ZU.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, ZU.jsxs)("div", {
              className: oU()("Joystick Resting HudPreviewJoystick", {
                Floating: !AU
              }),
              ...hU("joystick"),
              children: [(0, ZU.jsx)("div", {
                className: "JoystickBase"
              }), (0, ZU.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), XU.sprint && (0, ZU.jsx)("div", {
            className: oU()("TouchSprintHit", tU("sprint"), {
              AtHome: !AU
            }),
            ...hU("sprint"),
            children: (0, ZU.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, ZU.jsx)(CU.d, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function pX() {
      const [UU, XU] = (0, yU.useState)({}), zU = (0, yU.useCallback)((UU => {
        XU((XU => [...new Set([...Object.keys(XU), ...Object.keys(UU)])].every((zU => XU[zU] === UU[zU])) ? XU : UU))
      }), []);
      return [UU, zU]
    }
    const aX = .05;

    function tX(UU) {
      var XU;
      let {
        selected: zU,
        layout: yU,
        actionButtons: QU,
        keyNames: AU,
        overlaps: FU,
        scaleCaps: EU,
        joystickFixed: YU,
        onScale: NU,
        onHidden: IU,
        onReset: pU,
        locked: aU,
        lockable: tU,
        onLocked: gU,
        extra: kU
      } = UU;
      const {
        t: GU
      } = (0, cU.I)(), BU = zU ? wU.i[zU] : null, RU = null !== zU && aU.has(zU), PU = (zU && yU.hudElements[zU] || qU.m)[2], WU = null !== (XU = zU && EU[zU]) && void 0 !== XU ? XU : qU.f, dU = UU => {
        zU && NU(zU, Math.min(WU, Math.round(100 * (PU + .1 * UU)) / 100))
      };
      return (0, ZU.jsxs)(ZU.Fragment, {
        children: [(0, ZU.jsxs)("div", {
          className: oU()("HudQuickName SmallTextBold", {
            Overlap: FU.length > 0
          }),
          children: [FU.length > 0 && (0, ZU.jsx)(CU.d, {
            name: "triangle-exclamation"
          }), BU ? (0, wU.y)(BU.id, QU, GU, AU) : GU("hudLayout:fullScreenHint"), FU.length > 0 && (0, ZU.jsx)("span", {
            className: "HudQuickOverlap",
            children: GU("hudLayout:overlapsShort", {
              names: (0, wU.v)(FU, QU, GU, AU)
            })
          })]
        }), (null === BU || void 0 === BU ? void 0 : BU.scale) && (0, ZU.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, ZU.jsx)(DU.O, {
            disabled: RU || PU <= qU.j,
            ariaLabel: GU("hudLayout:smaller"),
            onClick: () => {
              dU(-1)
            },
            children: (0, ZU.jsx)(CU.d, {
              name: "minus"
            })
          }), (0, ZU.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*PU)}%`
          }), (0, ZU.jsx)(DU.O, {
            disabled: RU || PU >= WU,
            ariaLabel: GU("hudLayout:larger"),
            onClick: () => {
              dU(1)
            },
            children: (0, ZU.jsx)(CU.d, {
              name: "plus"
            })
          })]
        }), (BU || kU) && (0, ZU.jsxs)("div", {
          className: "HudQuickActions",
          children: [BU && (0, ZU.jsxs)(ZU.Fragment, {
            children: [(0, ZU.jsx)(uU, {
              id: BU.id,
              actionButtons: QU,
              keyNames: AU,
              locked: RU,
              lockable: tU(BU.id),
              onLocked: gU
            }), (0, ZU.jsx)(SU, {
              id: BU.id,
              elements: yU.hudElements,
              actionButtons: QU,
              keyNames: AU,
              onHidden: IU
            }), (0, ZU.jsx)(rU, {
              id: BU.id,
              elements: yU.hudElements,
              actionButtons: QU,
              keyNames: AU,
              locked: RU,
              onReset: pU
            }), vU(BU.id, YU) && (0, ZU.jsx)(VU, {})]
          }), kU]
        })]
      })
    }
    var gX = zU(1115),
      kX = zU(4839);
    const GX = "HudPreviewDoc",
      BX = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      ZX = new Set([GX, ...Object.values(BX)]),
      RX = new Set(qU.w.map(KU.I)),
      PX = new Set(KU.l),
      WX = 'style, link[rel="stylesheet"]';

    function dX(UU, XU, zU, cU) {
      const yU = new Map,
        QU = new Set,
        AU = new URL(UU.baseURI).origin,
        FU = XU => {
          var zU;
          if ("LINK" !== XU.nodeName) return !0;
          const cU = null === (zU = XU.getAttribute("href")) || void 0 === zU ? void 0 : zU.trim();
          if (!cU) return !1;
          try {
            return new URL(cU, UU.baseURI).origin === AU
          } catch {
            return !1
          }
        };
      let oU = null;
      const DU = () => {
          oU !== (0 === QU.size) && (oU = 0 === QU.size, null === cU || void 0 === cU || cU(oU))
        },
        EU = UU => {
          const XU = UU.cloneNode(!0);
          if ("LINK" === XU.tagName) {
            QU.add(XU);
            const UU = () => {
              QU.delete(XU), DU()
            };
            XU.addEventListener("load", UU), XU.addEventListener("error", UU), zU && XU.addEventListener("load", zU)
          }
          return XU
        },
        YU = () => {
          const cU = function(UU) {
              const XU = [...UU.body.children].filter((UU => UU.matches(WX)));
              return [...UU.head.querySelectorAll(WX), ...XU]
            }(UU).filter(FU),
            AU = new Set(cU);
          for (const [UU, XU] of yU) AU.has(UU) || (XU.remove(), yU.delete(UU), QU.delete(XU));
          let oU = null;
          for (let UU = cU.length - 1; UU >= 0; UU--) {
            const QU = cU[UU];
            let AU = yU.get(QU);
            AU ? "STYLE" === QU.tagName && AU.textContent !== QU.textContent && (AU.textContent = QU.textContent, null === zU || void 0 === zU || zU()) : (AU = EU(QU), yU.set(QU, AU), XU.head.insertBefore(AU, oU)), oU = AU
          }
          DU()
        };
      YU();
      const NU = new MutationObserver(YU);
      return NU.observe(UU.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), NU.observe(UU.body, {
        childList: !0
      }), () => {
        NU.disconnect()
      }
    }

    function LX(UU, XU, zU) {
      let {
        keysAbove: cU
      } = zU;
      const yU = [...UU.documentElement.classList].filter((UU => !ZX.has(UU) && !PX.has(UU))),
        QU = [...XU.documentElement.classList].filter((UU => PX.has(UU))),
        AU = [GX, BX.hotbar, BX.hasShop, BX.hasBag];
      cU && AU.push(BX.keysAbove), XU.documentElement.className = [...yU, ...AU, ...QU].join(" ")
    }
    const eX = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function CX(UU, XU, zU, cU, yU) {
      const QU = (0, qU.x)(zU, cU, "joystick"),
        AU = (0, KU.L)((0, KU.$)(zU, cU, yU), cU),
        FU = AU.classes.filter((UU => !RX.has(UU))),
        oU = XU.documentElement,
        DU = zU.hudLayouts[cU].hudSafe,
        EU = (0, KU.R)(DU, window.innerWidth, window.innerHeight, wX(), DU ? (0, KU.db)(XU) : 0);
      (0, KU.fb)({
        ...AU,
        classes: FU
      }, {
        vars: oU,
        safe: oU,
        classes: oU
      }), oU.style.setProperty("--preview-joystick-shift-left", `${EU[3]}px`), oU.style.setProperty("--preview-joystick-shift-bottom", `${EU[2]}px`), oU.style.setProperty("--preview-joystick-scale", String(QU[2])), (0, kX.f)(oU, XU, zU, cU);
      for (const YU of eX) oU.style.setProperty(YU, UU.documentElement.style.getPropertyValue(YU) || "0px")
    }

    function wX() {
      return (0, KU.Z)(EU.e.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function qX(UU) {
      return (0, KU.A)(wX(), (0, KU.db)(UU))
    }

    function OX(UU, XU, zU) {
      const cU = UU.documentElement.style,
        yU = (0, KU.V)(XU),
        QU = cU.getPropertyValue(yU);
      try {
        return zU((UU => {
          cU.setProperty(yU, String(UU))
        }))
      } finally {
        "" === QU ? cU.removeProperty(yU) : cU.setProperty(yU, QU)
      }
    }

    function SX(UU, XU) {
      const [zU, cU] = OX(UU, "hotbar", (XU => {
        const zU = zU => {
          var cU, yU;
          return XU(zU), null !== (cU = null === (yU = UU.querySelector(".HotBarGameItemsContainer")) || void 0 === yU ? void 0 : yU.getBoundingClientRect().width) && void 0 !== cU ? cU : 0
        };
        return [zU(1), zU(qU.f)]
      }));
      return zU <= 0 ? qU.f : Math.min(qU.f, Math.max(1, Math.floor(cU / zU / XU + 1e-6) * XU))
    }
    const rX = 3,
      uX = .5,
      fX = UU => UU.right - UU.left;
    const iX = (UU, XU) => Math.abs((0, xU.b)(UU).x - (0, xU.b)(XU).x) + Math.abs((0, xU.b)(UU).y - (0, xU.b)(XU).y) + Math.abs(fX(UU) - fX(XU));

    function HX(UU, XU, zU, cU, yU) {
      let {
        canKeep: QU = () => !0,
        passes: AU = rX,
        before: FU
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const oU = XU.hudLayouts[zU].hudLocked.filter(QU);
      if (0 === oU.length) return XU;
      const DU = [...wU.e].filter((cU => !oU.includes(cU) && (0, qU.x)(UU, zU, cU).join() === (0, qU.x)(XU, zU, cU).join())),
        EU = UU => {
          const XU = (0, xU.N)(DU.flatMap((XU => UU[XU] ? [UU[XU]] : [])));
          return {
            ...UU,
            cluster: null !== XU && void 0 !== XU ? XU : void 0
          }
        };
      let YU = null;
      const NU = UU => {
          YU = UU;
          const XU = yU(UU);
          return XU && {
            ...XU,
            boxes: EU(XU.boxes)
          }
        },
        IU = FU ? {
          ...FU,
          boxes: EU(FU.boxes)
        } : NU(UU),
        pU = IU && NU(XU);
      if (!IU || !pU) return XU;
      const aU = IU.boxes;
      let tU = pU.boxes;
      const gU = IU.keysAbove !== pU.keysAbove,
        kU = gU || Boolean(IU.shopAlone) !== Boolean(pU.shopAlone),
        GU = new Set(oU.filter((UU => !(0, wU.B)(UU) || !("bag" === UU ? gU : kU))));
      let BU = XU;
      for (let PU = 0; PU < AU && GU.size > 0; PU++) {
        var ZU, RU;
        const UU = new Map;
        for (const XU of GU) {
          const yU = aU[XU],
            QU = tU[XU],
            AU = yU && QU ? MX(XU, (0, qU.x)(BU, zU, XU), yU, QU, cU) : null;
          AU ? UU.set(XU, AU) : GU.delete(XU)
        }
        if (0 === UU.size) break;
        let yU = BU;
        for (const [XU, cU] of UU) yU = (0, qU.hb)(yU, zU, XU, cU);
        const QU = null === (ZU = NU(yU)) || void 0 === ZU ? void 0 : ZU.boxes;
        if (!QU) return XU;
        let AU = BU;
        for (const [XU, cU] of UU) {
          const UU = QU[XU];
          UU && iX(aU[XU], UU) < iX(aU[XU], tU[XU]) - uX ? AU = (0, qU.hb)(AU, zU, XU, cU) : GU.delete(XU)
        }
        if (AU === BU) break;
        const FU = [...UU.keys()].every((UU => GU.has(UU)));
        BU = FU ? yU : AU;
        const oU = FU ? QU : null === (RU = NU(BU)) || void 0 === RU ? void 0 : RU.boxes;
        if (!oU) return XU;
        tU = oU
      }
      return YU !== BU && yU(BU), BU
    }

    function MX(UU, XU, zU, cU, yU) {
      let [QU, AU, FU] = XU;
      const oU = qU.s[UU],
        DU = {};
      oU.scale && fX(cU) > 0 && Math.abs(fX(zU) - fX(cU)) > uX && (DU.scale = Math.max(qU.j, Math.min(qU.f, FU * fX(zU) / fX(cU))));
      const EU = (0, xU.b)(zU).x - (0, xU.b)(cU).x,
        YU = (0, xU.b)(zU).y - (0, xU.b)(cU).y;
      return oU.move && (Math.abs(EU) > uX || Math.abs(YU) > uX) && (DU.dx = QU + EU / yU.width, DU.dy = AU + YU / yU.height), void 0 === DU.scale && void 0 === DU.dx ? null : DU
    }
    let vX = 0;

    function VX() {
      return vX > 0
    }
    const sX = UU => 0 === UU.dx && 0 === UU.dy,
      nX = .001,
      mX = UU => Math.abs(UU.dx) >= 5e-4 || Math.abs(UU.dy) >= 5e-4 ? UU : {
        dx: UU.dx,
        dy: UU.dy < 0 ? -.001 : nX
      };

    function lX(UU) {
      let {
        preview: XU,
        stageRef: zU,
        ringRef: cU,
        centreLineRef: QU,
        snapCentre: AU,
        ready: FU,
        measure: oU,
        k: DU,
        viewport: EU,
        boxes: YU,
        pieces: NU,
        selected: IU,
        insets: pU,
        layout: aU,
        canMove: tU,
        onSelect: gU,
        onMove: kU
      } = UU;
      const GU = (0, yU.useRef)(null),
        BU = (0, yU.useCallback)((() => null !== GU.current), []),
        ZU = (UU, XU) => {
          if (!XU) return null;
          const zU = (0, xU.b)(UU.origin),
            cU = (0, xU.b)(XU),
            yU = (UU.to.dx - UU.from.dx) * EU.width,
            QU = (UU.to.dy - UU.from.dy) * EU.height,
            AU = XU.right - XU.left,
            FU = XU.bottom - XU.top;
          return {
            skew: {
              x: cU.x - zU.x - yU,
              y: cU.y - zU.y - QU
            },
            box: {
              left: zU.x - AU / 2,
              top: zU.y - FU / 2,
              right: zU.x + AU / 2,
              bottom: zU.y + FU / 2
            }
          }
        },
        RU = (UU, zU) => {
          var yU;
          const AU = GU.current;
          if (!AU || AU.pointerId !== UU.pointerId) return;
          GU.current = null, null === (yU = QU.current) || void 0 === yU || yU.classList.remove("Shown", "Snapped");
          const FU = cU.current;
          if (FU && null !== AU.ringStyle && FU.setAttribute("style", AU.ringStyle), zU && AU.moved) {
            const UU = sX(AU.to) ? null : oU(AU.id),
              XU = UU ? (0, xU.M)(UU, (0, xU.I)(EU.width, EU.height, pU)) : {
                x: 0,
                y: 0
              },
              zU = {
                dx: AU.to.dx + XU.x / EU.width,
                dy: AU.to.dy + XU.y / EU.height
              },
              cU = sX(AU.to) ? zU : mX(zU);
            kU(AU.id, cU.dx, cU.dy)
          } else XU(AU.id, null), zU && AU.tapPick && gU(AU.tapPick)
        };
      return {
        busy: BU,
        handlers: {
          onPointerDown: UU => {
            var XU;
            if (!FU || GU.current || !UU.target.closest(".HudPreviewHandle")) return;
            const cU = zU.current.getBoundingClientRect(),
              yU = {
                x: (UU.clientX - cU.left) / DU,
                y: (UU.clientY - cU.top) / DU
              },
              QU = (0, xU.C)(yU, NU, 40 / DU),
              AU = null !== IU ? wU.q.get(IU) : void 0,
              oU = void 0 !== AU && null !== (0, xU.C)(yU, NU.filter((UU => {
                let {
                  id: XU
                } = UU;
                return AU.has(XU)
              })), 40 / DU),
              EU = "menu" === IU && void 0 !== YU.menu && (0, xU.f)(YU.menu, yU) && ("menu" === QU || null !== QU && (0, jU.A)(QU, aU.hudElements[QU])),
              pU = oU ? IU : EU ? "menu" : null,
              kU = null !== pU,
              BU = null !== pU && void 0 !== pU ? pU : QU;
            if (!BU) return;
            if (function(UU) {
                vX++;
                const XU = zU => {
                  zU.pointerId === UU && (vX = Math.max(0, vX - 1), window.removeEventListener("pointerup", XU, !0), window.removeEventListener("pointercancel", XU, !0))
                };
                window.addEventListener("pointerup", XU, !0), window.addEventListener("pointercancel", XU, !0)
              }(UU.pointerId), !tU(BU)) return void gU(kU && QU ? QU : BU);
            gU(BU);
            const [ZU, RU] = null !== (XU = aU.hudElements[BU]) && void 0 !== XU ? XU : [0, 0], PU = {
              dx: ZU,
              dy: RU
            }, WU = {
              skew: {
                x: 0,
                y: 0
              },
              box: YU[BU]
            };
            GU.current = {
              id: BU,
              pointerId: UU.pointerId,
              startX: UU.clientX,
              startY: UU.clientY,
              origin: YU[BU],
              from: PU,
              to: PU,
              moved: !1,
              home: sX(PU) ? {
                centre: (0, xU.b)(YU[BU]),
                anchor: WU
              } : null,
              away: sX(PU) ? null : WU,
              anchor: WU,
              ringStyle: null,
              tapPick: kU ? QU : null
            }, UU.currentTarget.setPointerCapture(UU.pointerId)
          },
          onPointerMove: UU => {
            const zU = GU.current;
            if (!zU || zU.pointerId !== UU.pointerId) return;
            const yU = UU.clientX - zU.startX,
              FU = UU.clientY - zU.startY;
            if (!zU.moved && Math.hypot(yU, FU) < 5) return;
            const YU = !zU.moved;
            var NU, IU;
            (zU.moved = !0, YU) && (zU.ringStyle = null !== (NU = null === (IU = cU.current) || void 0 === IU ? void 0 : IU.getAttribute("style")) && void 0 !== NU ? NU : null);
            const aU = (0, xU.I)(EU.width, EU.height, pU);
            if (!zU.home) {
              var tU;
              zU.to = {
                dx: 0,
                dy: 0
              }, XU(zU.id, zU.to);
              const UU = oU(zU.id),
                cU = null !== (tU = ZU(zU, UU)) && void 0 !== tU ? tU : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: zU.origin
                },
                yU = (0, xU.b)(zU.origin);
              zU.home = {
                centre: UU ? (0, xU.b)(UU) : {
                  x: yU.x - zU.from.dx * EU.width,
                  y: yU.y - zU.from.dy * EU.height
                },
                anchor: cU
              }
            }
            const gU = zU.home;
            let kU = !1;
            const BU = UU => {
                kU = !1;
                let cU = (0, xU.s)(UU.box, yU / DU, FU / DU, aU);
                const QU = EU.width / 2;
                if (AU && Math.abs((0, xU.b)(zU.origin).x + cU.x - QU) <= 8 / DU) {
                  const XU = QU - (0, xU.b)(zU.origin).x,
                    yU = (0, xU.s)(UU.box, XU, cU.y, aU);
                  kU = Math.abs(yU.x - XU) < .01, kU && (cU = yU)
                }
                const oU = (0, xU.z)(zU.from, cU.x - UU.skew.x, cU.y - UU.skew.y, EU.width, EU.height);
                zU.to = mX(oU), zU.anchor = UU, XU(zU.id, zU.to)
              },
              RU = (0, xU.s)(gU.anchor.box, yU / DU, FU / DU, aU),
              PU = QU.current,
              WU = (0, xU.b)(zU.origin),
              dU = ((0, qU.O)(zU.id) ? 20 : 6) / DU;
            if (Math.abs(WU.x + RU.x - gU.centre.x) <= dU && Math.abs(WU.y + RU.y - gU.centre.y) <= dU) zU.to = {
              dx: 0,
              dy: 0
            }, zU.anchor = gU.anchor, kU = AU && Math.abs(gU.centre.x - EU.width / 2) < 1, XU(zU.id, zU.to);
            else if (zU.away) BU(zU.away);
            else {
              var LU;
              BU(gU.anchor), zU.away = null !== (LU = ZU(zU, oU(zU.id))) && void 0 !== LU ? LU : gU.anchor, BU(zU.away)
            }
            null === PU || void 0 === PU || PU.classList.add("Shown"), null === PU || void 0 === PU || PU.classList.toggle("Snapped", kU), (UU => {
              const XU = cU.current;
              if (XU) {
                const {
                  skew: zU,
                  box: cU
                } = UU.anchor;
                XU.style.left = cU.left * DU + "px", XU.style.top = cU.top * DU + "px", XU.style.width = (cU.right - cU.left) * DU + "px", XU.style.height = (cU.bottom - cU.top) * DU + "px", XU.style.translate = `${((UU.to.dx-UU.from.dx)*EU.width+zU.x)*DU}px ${((UU.to.dy-UU.from.dy)*EU.height+zU.y)*DU}px`
              }
            })(zU)
          },
          onPointerUp: UU => {
            RU(UU, !0)
          },
          onPointerCancel: UU => {
            RU(UU, !1)
          }
        }
      }
    }
    var xX = zU(9475);

    function JX(UU, XU) {
      return Object.keys(UU).filter((UU => UU !== XU)).map((XU => UU[XU]))
    }

    function jX(UU) {
      return UU.map((UU => {
        let {
          id: XU,
          box: zU
        } = UU;
        return `${XU}:${zU.left},${zU.top},${zU.right},${zU.bottom}`
      })).join(";")
    }

    function KX(UU) {
      const XU = [],
        zU = XU => (0, qU.O)(XU) && !UU.documentElement.classList.contains((0, KU.P)(XU));
      for (const FU of UU.querySelectorAll(`[${wU.g}]`)) {
        const UU = zU(FU.getAttribute(wU.g)) ? FU.querySelector(".ScaleOnHover") : null,
          cU = (null !== UU && void 0 !== UU ? UU : FU).getBoundingClientRect();
        (cU.width > 0 || cU.height > 0) && XU.push({
          id: FU.getAttribute(wU.g),
          box: (0, xU.j)(cU)
        })
      }
      const cU = UU => (0, xU.N)(XU.filter((XU => {
          let {
            id: zU
          } = XU;
          return UU(zU)
        })).map((UU => {
          let {
            box: XU
          } = UU;
          return XU
        }))),
        yU = {};
      for (const FU of new Set(XU.map((UU => UU.id)))) yU[FU] = cU((UU => UU === FU));
      for (const [FU, oU] of wU.q) {
        const UU = cU((UU => oU.has(UU)));
        UU && (yU[FU] = UU)
      }
      const QU = UU.querySelector(".TouchInventoryKeys"),
        AU = QU ? (0, xU.j)(QU.getBoundingClientRect()) : null;
      return {
        boxes: yU,
        pieces: XU,
        pairHome: AU
      }
    }

    function bX(UU, XU, zU) {
      const cU = XU.right - XU.left,
        yU = XU.bottom - XU.top;
      return OX(UU, "cluster", (XU => {
        const QU = zU => {
            XU(zU);
            const cU = [...UU.querySelectorAll(`[${wU.g}]:not(.HudPreviewGhost)`)].filter((UU => wU.e.has(UU.getAttribute(wU.g)))).map((UU => (0, xU.j)(UU.getBoundingClientRect()))),
              yU = (0, xU.N)(cU);
            return yU ? {
              w: yU.right - yU.left,
              h: yU.bottom - yU.top
            } : null
          },
          AU = UU => !UU || UU.w <= cU && UU.h <= yU,
          FU = QU(1),
          oU = QU(qU.f);
        if (!FU || AU(oU)) return qU.f;
        const DU = (UU, XU, zU) => XU > UU ? 1 + (zU - UU) * (qU.f - 1) / (XU - UU) : qU.f;
        let EU = Math.floor(Math.min(qU.f, DU(FU.w, oU.w, cU), DU(FU.h, oU.h, yU)) / zU + 1e-6) * zU;
        for (; EU > 1 && !AU(QU(EU));) EU = Math.round(100 * (EU - zU)) / 100;
        return Math.max(1, EU)
      }))
    }

    function TX(UU) {
      LX(document, UU, {
        keysAbove: !1
      });
      const XU = parseFloat(getComputedStyle(UU.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        zU = Number.isFinite(XU) && XU < 0;
      return LX(document, UU, {
        keysAbove: zU
      }), (0, xX.b)(UU), zU
    }

    function hX(UU) {
      const XU = UU.querySelector(".TouchInventoryKey.ShopKey");
      return null !== XU && "1" === getComputedStyle(XU).getPropertyValue("--touch-shop-above").trim()
    }

    function Uz(UU, XU) {
      let {
        layout: zU,
        orientation: cU,
        viewport: QU,
        replicaKey: AU,
        joystickFixed: FU,
        busy: oU
      } = XU;
      const [DU, EU] = (0, yU.useState)(null), [YU, NU] = (0, yU.useState)({
        boxes: {},
        pieces: []
      }), [IU, pU] = (0, yU.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [aU, tU] = (0, yU.useState)(!1), [gU, kU] = (0, yU.useState)(!1), [GU, BU] = (0, yU.useState)(!1), ZU = (0, yU.useCallback)((UU => {
        kU(UU), UU && BU(!0)
      }), []), RU = zU.hudLayouts[cU].hudSafe;
      (0, yU.useLayoutEffect)((() => {
        const XU = UU.current.contentDocument;
        XU.open(), XU.write("<!DOCTYPE html><html><head></head><body></body></html>"), XU.close(), EU(XU)
      }), [UU]);
      const PU = (0, yU.useCallback)((() => {
          DU && ((0, jU.D)(DU), NU(KX(DU)), pU(function(UU, XU) {
            const zU = qX(UU),
              [cU, yU, QU, AU] = XU ? (0, KU.E)(XU, window.innerWidth, window.innerHeight, zU) : zU;
            return {
              top: cU,
              right: yU,
              bottom: QU,
              left: AU
            }
          }(DU, RU)))
        }), [DU, RU]),
        WU = (0, yU.useCallback)((() => {
          DU && tU(TX(DU))
        }), [DU]),
        dU = (0, yU.useRef)((() => {}));
      return dU.current = () => {
        WU(), oU() || PU()
      }, (0, yU.useLayoutEffect)((() => {
        if (DU) return dX(document, DU, (() => {
          dU.current()
        }), ZU)
      }), [DU, ZU]), (0, yU.useLayoutEffect)(WU, [WU, QU]), (0, yU.useLayoutEffect)((() => {
        DU && (LX(document, DU, {
          keysAbove: aU
        }), CX(document, DU, zU, cU, FU), WU(), PU())
      }), [DU, zU, cU, aU, AU, FU, QU, PU, WU]), (0, yU.useEffect)((() => {
        var UU;
        if (!DU) return;
        const XU = new ResizeObserver((() => {
          oU() || PU()
        }));
        for (const zU of DU.querySelectorAll(`[${wU.g}]`)) XU.observe(zU);
        return null === (UU = DU.fonts) || void 0 === UU || UU.ready.then(PU), () => {
          XU.disconnect()
        }
      }), [DU, PU, oU, AU]), {
        doc: DU,
        boxes: YU.boxes,
        pieces: YU.pieces,
        insets: IU,
        keysAbove: aU,
        ready: gU,
        settled: GU
      }
    }
    const Xz = ["Above", "Below", "Left", "Right"];

    function zz(UU, XU, zU, cU, yU) {
      const QU = zU[UU],
        AU = (QU.left + QU.right) / 2,
        FU = (QU.top + QU.bottom) / 2,
        oU = (7.5 * XU.length + 14) / cU,
        DU = 18 / cU,
        EU = {
          Above: {
            left: AU - oU / 2,
            top: QU.top - DU,
            right: AU + oU / 2,
            bottom: QU.top
          },
          Below: {
            left: AU - oU / 2,
            top: QU.bottom,
            right: AU + oU / 2,
            bottom: QU.bottom + DU
          },
          Left: {
            left: QU.left - oU,
            top: FU - DU / 2,
            right: QU.left,
            bottom: FU + DU / 2
          },
          Right: {
            left: QU.right,
            top: FU - DU / 2,
            right: QU.right + oU,
            bottom: FU + DU / 2
          }
        },
        YU = JX(zU, UU),
        NU = {
          left: 0,
          top: 0,
          right: yU.width,
          bottom: yU.height
        };
      return Xz[(0, xU.x)(Xz.map((UU => EU[UU])), YU, {
        bounds: NU
      })]
    }

    function cz() {
      const [UU, XU] = (0, mU.e)();
      return (0, yU.useMemo)((() => ({
        width: UU,
        height: XU
      })), [UU, XU])
    }

    function yz(UU) {
      var XU;
      const {
        layout: zU,
        orientation: QU,
        selected: AU,
        onSelect: FU,
        onMove: DU,
        canMove: EU,
        actionButtons: YU,
        joystickFixed: NU,
        presence: IU,
        keyNames: aU,
        maxHeight: tU,
        fill: gU = !1,
        apiRef: kU
      } = UU, {
        t: GU
      } = (0, cU.I)(), BU = cz(), RU = (null !== (XU = (0, pU.f)("maxAuraLevel")) && void 0 !== XU ? XU : 0) > 0, PU = zU.hudLayouts[QU], WU = (0, yU.useRef)(null), dU = (0, yU.useRef)(null), LU = (0, yU.useRef)(null), eU = (0, yU.useRef)(null), OU = (0, yU.useRef)(null), SU = (0, yU.useRef)(null), rU = (0, lU.d)(WU).width, uU = gU ? 1 : rU > 0 ? (0, xU.G)(rU, BU.width, BU.height, tU) : 0, fU = (0, yU.useRef)((() => !1)), iU = (0, yU.useCallback)((() => fU.current()), []), HU = `${YU}:${NU}:${RU}`, {
        doc: MU,
        boxes: vU,
        pieces: VU,
        insets: nU,
        keysAbove: mU,
        ready: bU,
        settled: TU
      } = Uz(LU, {
        layout: zU,
        orientation: QU,
        viewport: BU,
        replicaKey: HU,
        joystickFixed: NU,
        busy: iU
      }), hU = (0, yU.useCallback)((UU => {
        MU && CX(document, MU, UU, QU, NU)
      }), [MU, QU, NU]), UX = (0, yU.useCallback)((UU => {
        if (!MU || !TU) return null;
        hU(UU);
        const XU = TX(MU),
          zU = function(UU, XU) {
            let {
              boxes: zU,
              pieces: cU,
              pairHome: yU
            } = UU;
            const QU = cU.find((UU => wU.p.has(UU.id)));
            if (!QU || !yU) return zU;
            const AU = (0, xU.b)(yU),
              FU = XU(QU.id),
              oU = fX(QU.box) / FU / 2,
              DU = (QU.box.bottom - QU.box.top) / FU / 2;
            return {
              ...zU,
              inventory: {
                left: AU.x - oU,
                top: AU.y - DU,
                right: AU.x + oU,
                bottom: AU.y + DU
              }
            }
          }(KX(MU), (XU => (0, qU.x)(UU, QU, XU)[2]));
        return {
          boxes: zU,
          keysAbove: XU,
          shopAlone: hX(MU)
        }
      }), [MU, TU, hU, QU]), XX = (0, yU.useRef)(null), zX = (0, yU.useRef)(null), cX = (0, yU.useRef)(zU);
      cX.current = zU;
      const yX = (0, yU.useCallback)((() => {
        null !== XX.current && (cancelAnimationFrame(XX.current), XX.current = null)
      }), []);
      (0, yU.useEffect)((() => yX), [zU, yX]);
      const QX = (0, yU.useRef)(-1 / 0),
        {
          lockable: AX
        } = UU,
        FX = (0, yU.useCallback)((UU => {
          if (hU(UU), QX.current = performance.now(), !TU || 0 === zU.hudLayouts[QU].hudLocked.length) return;
          const XU = zU;
          yX(), XX.current = requestAnimationFrame((() => {
            var zU;
            if (XX.current = null, cX.current !== XU) return;
            const cU = (null === (zU = zX.current) || void 0 === zU ? void 0 : zU.from) === XU ? zX.current.measured : UX(XU);
            cU && (zX.current = {
              from: XU,
              measured: cU
            }), hU(cU ? HX(XU, UU, QU, BU, UX, {
              canKeep: AX,
              passes: 1,
              before: cU
            }) : UU)
          }))
        }), [hU, TU, zU, QU, BU, UX, AX, yX]),
        oX = lX({
          preview: (UU, XU) => {
            XU ? FX((0, qU.hb)(zU, QU, UU, XU)) : (yX(), hU(zU))
          },
          stageRef: dU,
          ringRef: eU,
          centreLineRef: OU,
          snapCentre: zU.hudSnapCentre,
          ready: TU,
          measure: UU => {
            const XU = MU && bU ? KX(MU).boxes[UU] : void 0;
            return XU && (0, xU.n)(XU, BU.width, BU.height) ? XU : null
          },
          k: uU,
          viewport: BU,
          boxes: vU,
          pieces: VU,
          selected: AU,
          insets: nU,
          layout: PU,
          canMove: EU,
          onSelect: FU,
          onMove: (UU, XU, zU) => {
            yX(), DU(UU, XU, zU)
          }
        });
      (0, yU.useLayoutEffect)((() => {
        fU.current = oX.busy
      }), [oX.busy]);
      const DX = (0, yU.useRef)([]),
        EX = (0, yU.useRef)(PU.hudElements);
      (0, yU.useEffect)((() => {
        for (const yU of Object.keys(PU.hudElements)) {
          var UU, XU, zU, cU;
          (null !== (UU = null === (XU = PU.hudElements[yU]) || void 0 === XU ? void 0 : XU[2]) && void 0 !== UU ? UU : 1) > (null !== (zU = null === (cU = EX.current[yU]) || void 0 === cU ? void 0 : cU[2]) && void 0 !== zU ? zU : 1) && EU(yU) && !(0, jU.A)(yU, PU.hudElements[yU]) && DX.current.push(...(0, wU.G)(yU, mU, EU))
        }
        EX.current = PU.hudElements
      }), [PU.hudElements, EU, mU]), (0, yU.useEffect)((() => {
        if (!bU) return;
        const UU = (0, xU.I)(BU.width, BU.height, nU);
        for (const zU of (0, wU.F)(DX.current.splice(0), vU, UU, EU)) {
          const cU = vU[zU];
          if (!cU || oX.busy() || !(0, xU.n)(cU, BU.width, BU.height)) continue;
          const yU = (0, xU.M)(cU, UU);
          if (0 !== yU.x || 0 !== yU.y) {
            var XU;
            const [UU, cU] = null !== (XU = PU.hudElements[zU]) && void 0 !== XU ? XU : [0, 0];
            DU(zU, UU + yU.x / BU.width, cU + yU.y / BU.height)
          }
        }
      }), [vU, bU]), (0, yU.useImperativeHandle)(kU, (() => ({
        setScale: (UU, XU) => {
          FX((0, qU.hb)(zU, QU, UU, {
            scale: XU
          }))
        },
        setOpacity: UU => {
          hU({
            ...zU,
            hudKeyOpacity: UU
          })
        },
        keepLocks: (UU, XU) => (yX(), HX(UU, XU, QU, BU, UX, {
          canKeep: AX
        })),
        setSafe: UU => {
          const XU = (0, KU.E)(UU, BU.width, BU.height, qX(null !== MU && void 0 !== MU ? MU : document));
          FX((0, qU.lb)(zU, QU, UU)), SU.current && (SU.current.style.inset = XU.map((UU => UU * uU + "px")).join(" "))
        }
      })), [hU, FX, UX, yX, AX, MU, zU, QU, BU, uU]);
      const YX = new Set(Object.keys(PU.hudElements).filter((UU => (0, qU.q)(PU.hudElements, UU)))),
        NX = AU ? vU[AU] : void 0,
        pX = AU ? (0, wU.y)(AU, YU, GU, aU) : "",
        tX = (0, gX.f)(BU.width, BU.height),
        kX = AU ? (0, JU.g)(AU, VU, PU, tX) : [],
        GX = new Set((0, jU.u)(PU.hudElements)),
        BX = (0, jU.M)(PU, (0, jU.I)(IU.rowIcons)).state,
        ZX = kX.join(),
        RX = (0, yU.useRef)(UU.onReady);
      RX.current = UU.onReady, (0, yU.useEffect)((() => {
        var UU;
        null === (UU = RX.current) || void 0 === UU || UU.call(RX, TU)
      }), [TU]);
      const PX = (0, yU.useRef)(UU.onMeasured);
      (0, yU.useLayoutEffect)((() => {
        PX.current = UU.onMeasured
      }));
      const WX = (0, yU.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        dX = [jX(VU), BU.width, BU.height, nU.top, nU.right, nU.bottom, nU.left, bU, HU].join("|");
      (0, yU.useEffect)((() => {
        const UU = ZX ? ZX.split(",") : [],
          XU = () => {
            var XU;
            null === (XU = PX.current) || void 0 === XU || XU.call(PX, vU, UU, WX.current.caps)
          };
        let zU;
        const cU = () => {
          const UU = cX.current;
          if (!MU || UU === WX.current.layout && dX === WX.current.input) return !1;
          const yU = QX.current + 250 - performance.now();
          return UU === WX.current.layout && (yU > 0 || iU()) ? (zU = setTimeout((() => {
            cU() && XU()
          }), Math.max(yU, 62.5)), !1) : (WX.current = {
            layout: UU,
            input: dX,
            caps: {
              hotbar: SX(MU, aX),
              cluster: bX(MU, (0, xU.I)(BU.width, BU.height, nU), aX)
            }
          }, !0)
        };
        return cU(), XU(), () => {
          clearTimeout(zU)
        }
      }), [vU, ZX, MU, BU, nU, dX, iU]);
      const LX = UU => ({
        left: UU.left * uU,
        top: UU.top * uU,
        width: (UU.right - UU.left) * uU,
        height: (UU.bottom - UU.top) * uU
      });
      return (0, ZU.jsx)("div", {
        ref: WU,
        className: oU()("HudPreviewBox", {
          Fill: gU
        }),
        style: {
          height: BU.height * uU
        },
        children: (0, ZU.jsxs)("div", {
          ref: dU,
          className: "HudPreviewStage",
          style: {
            width: BU.width * uU,
            height: BU.height * uU
          },
          children: [(0, ZU.jsx)("iframe", {
            ref: LU,
            className: "HudPreviewFrame",
            title: GU("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: BU.width,
              height: BU.height,
              transform: `scale(${uU})`
            }
          }), MU && (0, sU.createPortal)((0, ZU.jsx)(IX, {
            presence: IU,
            portraitPhone: tX,
            hidden: YX,
            actionButtons: YU,
            joystickFixed: NU,
            keysAbove: mU,
            auraBar: RU,
            trayState: BX,
            moved: GX
          }), MU.body), (0, ZU.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...oX.handlers,
            children: [(0, ZU.jsx)("div", {
              ref: SU,
              className: "HudPreviewSafeZone",
              style: {
                top: nU.top * uU,
                right: nU.right * uU,
                bottom: nU.bottom * uU,
                left: nU.left * uU
              }
            }), VU.map(((UU, XU) => {
              let {
                id: zU,
                box: cU
              } = UU;
              return (0, ZU.jsx)("div", {
                className: "HudPreviewHandle",
                style: LX((0, xU.u)(cU, 40 / uU))
              }, `${zU}:${XU}`)
            })), PU.hudLocked.map((UU => {
              const XU = vU[UU];
              return XU && (0, ZU.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: XU.right * uU,
                  top: XU.top * uU
                },
                children: (0, ZU.jsx)(CU.d, {
                  name: "lock"
                })
              }, UU)
            })), (0, ZU.jsx)("div", {
              ref: OU,
              className: "HudPreviewCentreLine",
              style: {
                left: BU.width / 2 * uU
              }
            }), AU && NX && (0, ZU.jsx)("div", {
              ref: eU,
              className: oU()("HudPreviewRing", {
                Fixed: !EU(AU),
                Overlap: kX.length > 0
              }),
              style: LX(NX),
              children: (0, ZU.jsx)("span", {
                className: oU()("HudPreviewRingLabel", zz(AU, pX, vU, uU, BU)),
                children: pX
              })
            })]
          })]
        })
      })
    }

    function Qz(UU, XU) {
      (0, yU.useEffect)((() => {
        var zU;
        null === (zU = UU.current) || void 0 === zU || zU.toggleAttribute("inert", XU)
      }), [UU, XU])
    }
    const Az = "hudFullScreen";

    function Fz(UU) {
      let {
        onScale: XU,
        onHidden: zU,
        onReset: QU,
        locked: AU,
        lockable: FU,
        onLocked: oU,
        onClose: EU,
        ...YU
      } = UU;
      const {
        t: NU
      } = (0, cU.I)(), IU = (0, yU.useRef)(null);
      (0, nU.t)("popup", IU, EU),
      function(UU) {
        const XU = (0, yU.useRef)(UU);
        XU.current = UU, (0, yU.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Az]: !0
          }, "");
          let UU = !1;
          const zU = () => {
            UU = !0, XU.current()
          };
          return window.addEventListener("popstate", zU), () => {
            var XU;
            window.removeEventListener("popstate", zU), !UU && null !== (XU = window.history.state) && void 0 !== XU && XU[Az] && window.history.back()
          }
        }), [])
      }(EU), (0, yU.useEffect)((() => {
        function UU(UU) {
          "Escape" === UU.key && (UU.stopPropagation(), EU())
        }
        return window.addEventListener("keydown", UU, !0), () => {
          window.removeEventListener("keydown", UU, !0)
        }
      }), [EU]);
      const {
        selected: pU
      } = YU, aU = (0, yU.useRef)(null), tU = (0, yU.useRef)(null), [gU, kU] = (0, yU.useState)(!1);
      Qz(tU, !gU);
      const [GU, BU] = (0, yU.useState)(null), [RU, PU] = (0, yU.useState)([]), [WU, dU] = pX(), LU = (0, yU.useRef)(YU.selected);
      LU.current = YU.selected;
      const eU = (0, yU.useRef)({}),
        CU = (0, yU.useCallback)((() => {
          const UU = aU.current;
          UU && BU(function(UU, XU, zU) {
            var cU;
            const {
              innerWidth: yU,
              innerHeight: QU
            } = window, AU = UU.offsetWidth, FU = UU.offsetHeight, oU = Math.max(wX()[0], 6), DU = [];
            for (const NU of [oU, .2 * QU, .5 * QU - FU / 2, .33 * QU])
              for (const UU of [.5, .3, .7]) DU.push({
                left: Math.max(0, Math.min(yU - AU - 6, Math.max(6, yU * UU - AU / 2))),
                top: NU
              });
            const EU = DU.map((UU => ({
                left: UU.left - 6,
                top: UU.top - 6,
                right: UU.left + AU + 6,
                bottom: UU.top + FU + 6
              }))),
              YU = JX(XU, zU);
            return DU[(0, xU.x)(EU, YU, {
              avoid: zU && null !== (cU = XU[zU]) && void 0 !== cU ? cU : null
            })]
          }(UU, eU.current, LU.current))
        }), []),
        wU = (0, yU.useCallback)(((UU, XU, zU) => {
          PU(XU), dU(zU), eU.current = UU, CU()
        }), [CU, dU]);
      return (0, yU.useLayoutEffect)(CU, [YU.selected, CU]), (0, sU.createPortal)((0, ZU.jsxs)("div", {
        ref: IU,
        className: "HudFullScreenEditor",
        children: [(0, ZU.jsx)(yz, {
          ...YU,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: wU,
          onReady: kU,
          lockable: FU
        }), (0, ZU.jsxs)("div", {
          ref: aU,
          className: "HudFullScreenToolbar",
          style: null === GU ? void 0 : {
            left: GU.left,
            top: GU.top,
            transform: "none"
          },
          children: [(0, ZU.jsx)("div", {
            ref: tU,
            className: "HudFullScreenControls",
            children: (0, ZU.jsx)(tX, {
              selected: pU,
              layout: YU.layout.hudLayouts[YU.orientation],
              actionButtons: YU.actionButtons,
              keyNames: YU.keyNames,
              overlaps: RU,
              scaleCaps: WU,
              onScale: XU,
              onHidden: zU,
              onReset: QU,
              locked: AU,
              lockable: FU,
              onLocked: oU,
              joystickFixed: YU.joystickFixed
            })
          }), (0, ZU.jsx)(DU.f, {
            className: "HudFullScreenDone",
            onClick: EU,
            padDefaultFocus: !0,
            children: NU("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const oz = UU => `${Math.round(100*UU)}%`;

    function Dz(UU) {
      let {
        info: XU,
        tuple: zU,
        props: yU
      } = UU;
      const {
        t: QU
      } = (0, cU.I)();
      return (0, ZU.jsx)(IU.j, {
        name: QU("hudLayout:size"),
        min: qU.j,
        max: qU.f,
        step: aX,
        initValue: zU[2],
        disabled: yU.locked.has(XU.id),
        selectableMax: yU.scaleCaps[XU.id],
        cappedNote: QU("hudLayout:sizeCapped"),
        format: oz,
        onChange: UU => {
          yU.onScalePreview(XU.id, UU)
        },
        onChangeComplete: UU => {
          yU.onScale(XU.id, UU)
        }
      })
    }

    function Ez(UU) {
      const {
        t: XU
      } = (0, cU.I)(), {
        present: zU,
        elements: QU,
        selected: AU,
        onSelect: FU,
        onHidden: DU,
        onReset: EU,
        note: YU,
        actionButtons: NU,
        keyNames: IU,
        sizeBesidePreview: pU,
        locked: aU,
        lockable: tU,
        onLocked: gU
      } = UU, {
        rowIconsOpen: kU,
        onRowIconsOpen: GU
      } = UU, BU = (0, yU.useRef)(null), RU = null !== AU && (kU || !(0, qU.O)(AU));
      return (0, yU.useEffect)((() => {
        var UU;
        const XU = AU ? null === (UU = BU.current) || void 0 === UU ? void 0 : UU.querySelector(`[data-hud-row="${AU}"]`) : null;
        if (!XU) return;
        const zU = XU.closest(".SettingsMenuRight"),
          cU = performance.now();
        let yU = null;
        const QU = () => {
            clearInterval(oU), null === zU || void 0 === zU || zU.removeEventListener("scroll", FU)
          },
          FU = () => {
            VX() || QU()
          },
          oU = setInterval((() => {
            const UU = performance.now();
            UU - cU > 1500 ? QU() : VX() ? yU = null : null === yU ? yU = UU : UU - yU >= 150 && (QU(), function(UU) {
              var XU;
              const zU = UU.closest(".SettingsMenuRight"),
                cU = null === (XU = UU.closest(".HudLayoutSettings")) || void 0 === XU ? void 0 : XU.querySelector(".HudLayoutPreviewBox");
              if (!zU || !cU) return;
              const yU = cU.getBoundingClientRect().bottom + 8,
                QU = zU.getBoundingClientRect().bottom - 8,
                AU = UU.getBoundingClientRect();
              AU.top < yU ? zU.scrollBy({
                top: AU.top - yU,
                behavior: "smooth"
              }) : AU.bottom > QU && zU.scrollBy({
                top: Math.min(AU.bottom - QU, AU.top - yU),
                behavior: "smooth"
              })
            }(XU))
          }), 50);
        return null === zU || void 0 === zU || zU.addEventListener("scroll", FU, {
          passive: !0
        }), QU
      }), [AU, RU]), (0, ZU.jsx)("div", {
        ref: BU,
        className: "SettingBoxGroup HudElementList",
        children: wU.l.filter((UU => zU.has(UU.id) && (kU || !(0, qU.O)(UU.id)))).map((zU => {
          const cU = ((UU, XU) => {
              var zU;
              return null !== (zU = UU[XU]) && void 0 !== zU ? zU : qU.m
            })(QU, zU.id),
            yU = (0, qU.q)(QU, zU.id),
            BU = zU.id === AU,
            RU = zU.scale && !pU,
            PU = YU(zU.id, BU);
          return (0, ZU.jsxs)("div", {
            "data-hud-row": zU.id,
            className: oU()("SettingBox HudElementRow", {
              Open: BU,
              Hidden: yU,
              Child: void 0 !== zU.parent,
              Grandchild: (0, wU.t)(zU.id).length > 1
            }),
            children: [(0, ZU.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, ZU.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": RU ? BU : void 0,
                onClick: () => {
                  FU(zU.id)
                },
                children: (0, ZU.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [(0, wU.y)(zU.id, NU, XU, IU), zU.scale && 1 !== cU[2] && !(BU && RU) && (0, ZU.jsxs)(ZU.Fragment, {
                    children: [" ", (0, ZU.jsx)("span", {
                      className: "HudElementRowSize",
                      children: oz(cU[2])
                    })]
                  }), RU && (0, ZU.jsxs)(ZU.Fragment, {
                    children: [" ", (0, ZU.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, ZU.jsx)(uU, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: zU.id,
                actionButtons: NU,
                keyNames: IU,
                locked: aU.has(zU.id),
                lockable: tU(zU.id),
                onLocked: gU
              }), "menu" === zU.id && (0, ZU.jsx)(fU, {
                className: "HudElementRowIcon",
                open: kU,
                name: (0, wU.y)(zU.id, NU, XU, IU),
                onToggle: GU
              }), "menu" !== zU.id && (0, ZU.jsx)(SU, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: zU.id,
                elements: QU,
                actionButtons: NU,
                keyNames: IU,
                onHidden: DU
              }), (0, ZU.jsx)(rU, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: aU.has(zU.id),
                id: zU.id,
                elements: QU,
                actionButtons: NU,
                keyNames: IU,
                onReset: EU
              })]
            }), BU && RU && (0, ZU.jsx)(Dz, {
              info: zU,
              tuple: cU,
              props: UU
            }), PU && (0, ZU.jsx)("div", {
              className: "HudElementNote",
              children: PU
            })]
          }, zU.id)
        }))
      })
    }

    function Yz(UU) {
      let {
        preview: XU,
        quick: zU,
        onFullScreen: QU,
        resting: AU,
        onSidePanel: FU
      } = UU;
      const {
        t: oU
      } = (0, cU.I)(), EU = cz(), YU = (0, yU.useRef)(null), {
        width: NU
      } = (0, lU.d)(YU), IU = Math.floor(EU.width * Math.min(1, XU.maxHeight / EU.height)), pU = NU - IU - 12, aU = pU >= 130, tU = NU > 0;
      (0, yU.useEffect)((() => {
        tU && FU(aU)
      }), [tU, aU, FU]);
      const gU = (0, xU.G)(aU ? IU : NU, EU.width, EU.height, XU.maxHeight),
        kU = AU ? (0, ZU.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: EU.height * gU
          }
        }) : (0, ZU.jsx)(yz, {
          ...XU
        }),
        GU = UU => (0, ZU.jsxs)(DU.O, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: oU("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: QU,
          children: [(0, ZU.jsx)(CU.d, {
            name: "expand"
          }), UU && (0, ZU.jsx)("span", {
            children: oU("hudLayout:fullScreen")
          })]
        });
      return (0, ZU.jsxs)("div", {
        ref: YU,
        className: "SettingBox HudLayoutPreviewBox",
        children: [NU > 0 && aU && (0, ZU.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, ZU.jsx)("div", {
            style: {
              width: IU
            },
            children: kU
          }), (0, ZU.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, ZU.jsx)(tX, {
              selected: XU.selected,
              ...zU,
              joystickFixed: XU.joystickFixed,
              extra: GU(!XU.selected || pU >= 278)
            })
          })]
        }), NU > 0 && !aU && (0, ZU.jsxs)(ZU.Fragment, {
          children: [kU, (0, ZU.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: GU(!1)
          })]
        })]
      })
    }
    var Nz = zU(2661),
      Iz = zU(4835),
      pz = zU(2643),
      az = zU(2596);
    const tz = UU => {
      const XU = KU.s * ("sides" === UU ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(XU / 2))
    };

    function gz(UU, XU, zU) {
      const [cU, yU, QU, AU] = UU;
      return "sides" === XU ? [cU, zU, QU, zU] : [zU, yU, zU, AU]
    }
    const kz = [null, null, null, null],
      Gz = UU => `${UU}px`;

    function Bz(UU) {
      let {
        safe: XU,
        onPreview: zU,
        onCommit: QU
      } = UU;
      const {
        t: AU
      } = (0, cU.I)(), FU = (0, KU.E)(null !== XU && void 0 !== XU ? XU : kz, window.innerWidth, window.innerHeight, qX(document).map(Math.round)), oU = (0, yU.useRef)(null !== XU && void 0 !== XU ? XU : kz);
      oU.current = null !== XU && void 0 !== XU ? XU : kz;
      const EU = UU => {
        const XU = Math.min(tz(UU), "sides" === UU ? Math.max(FU[1], FU[3]) : Math.max(FU[0], FU[2]));
        return (0, ZU.jsx)(IU.j, {
          name: AU("sides" === UU ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: tz(UU),
          step: 2,
          initValue: XU,
          format: Gz,
          onChange: XU => {
            zU(gz(oU.current, UU, XU))
          },
          onChangeComplete: cU => {
            if (cU === XU) return void zU(oU.current);
            const yU = gz(oU.current, UU, cU);
            oU.current = yU, QU(yU), (0, WU.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: UU
            })
          }
        })
      };
      return (0, ZU.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, ZU.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, ZU.jsx)("div", {
            children: AU("hudLayout:safeZone")
          }), (0, ZU.jsx)(DU.O, {
            active: null === XU,
            pressed: null === XU,
            onClick: () => {
              QU(null)
            },
            children: AU("hudLayout:safeZoneAuto")
          })]
        }), EU("sides"), EU("ends")]
      })
    }

    function Zz() {
      const {
        t: UU
      } = (0, cU.I)(), XU = (0, qU.db)(), {
        clientEscMenuOptions: zU
      } = (0, EU.q)(["clientEscMenuOptions"]), QU = (0, Nz.h)(), AU = XU.hudLayouts[QU], [FU, oU] = (0, yU.useState)(null), {
        rowIconsOpen: YU,
        onRowIconsOpen: NU,
        select: pU
      } = function(UU, XU) {
        const [zU, cU] = (0, yU.useState)((() => qU.A.some((XU => void 0 !== UU.hudElements[XU] || UU.hudLocked.includes(XU))))), QU = (0, yU.useCallback)((UU => {
          XU(UU), (0, qU.O)(UU) && cU(!0)
        }), [XU]);
        return {
          rowIconsOpen: zU,
          onRowIconsOpen: cU,
          select: QU
        }
      }(AU, oU), [aU, tU] = (0, yU.useState)([]), [gU, kU] = (0, yU.useState)(null), [GU, BU] = pX(), RU = (0, yU.useCallback)(((UU, XU, zU) => {
        tU(XU), BU(zU);
        const cU = Object.keys(UU);
        kU((UU => (null === UU || void 0 === UU ? void 0 : UU.size) === cU.length && cU.every((XU => UU.has(XU))) ? UU : new Set(cU)))
      }), [BU]), {
        gameState: PU
      } = (0, EU.q)(["gameState"]), LU = (0, pz.k)(), eU = (0, az.s)(), [CU] = (0, yU.useState)((() => {
        var UU, XU, zU, cU;
        return "inGame" === PU ? (0, TU.v)(document, LU, {
          rightOfCamera: null !== (UU = null === (XU = eU.rightOfCamera) || void 0 === XU ? void 0 : XU.icon) && void 0 !== UU ? UU : null,
          leftEnd: null !== (zU = null === (cU = eU.leftEnd) || void 0 === cU ? void 0 : cU.icon) && void 0 !== zU ? zU : null
        }) : TU.e
      })), OU = (0, yU.useRef)(null), SU = (0, yU.useRef)(null), rU = function(UU) {
        const [XU, zU] = (0, yU.useState)((() => .4 * window.innerHeight));
        return (0, yU.useLayoutEffect)((() => {
          var XU;
          const cU = null === (XU = UU.current) || void 0 === XU ? void 0 : XU.closest(".SettingsMenuRight");
          if (!cU) return;
          const yU = () => {
            const UU = cU.clientHeight < Rz ? .4 : .5;
            zU(Math.max(80, cU.clientHeight * UU - 24))
          };
          yU();
          const QU = new ResizeObserver(yU);
          return QU.observe(cU), () => {
            QU.disconnect()
          }
        }), [UU]), XU
      }(SU), uU = (0, Iz.u)(zU.joystickMode), fU = zU.touchActionButtons, iU = (0, yU.useMemo)((() => (0, TU.s)(CU, fU)), [CU, fU]), HU = (0, yU.useMemo)((() => new Set((0, TU.r)(CU, fU).map((UU => TU.g[UU])))), [CU, fU]);
      (0, yU.useEffect)((() => {
        (0, WU.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [MU, sU] = (0, yU.useState)(!1), [nU, mU] = (0, yU.useState)(!1), lU = (0, yU.useRef)(null);
      Qz(lU, !nU);
      const [xU, JU] = (0, yU.useState)(!1), KU = (0, yU.useCallback)((() => {
        JU(!1)
      }), []), bU = (0, yU.useMemo)((() => new Set(AU.hudLocked)), [AU.hudLocked]), hU = UU => {
        var XU, zU;
        const cU = (0, qU.p)(),
          yU = UU(cU);
        (0, qU.Z)(null !== (XU = null === (zU = OU.current) || void 0 === zU ? void 0 : zU.keepLocks(cU, yU)) && void 0 !== XU ? XU : yU)
      }, UX = (UU, XU) => {
        hU((zU => (0, qU.hb)(zU, QU, UU, XU)))
      }, XX = (UU, XU, zU) => {
        UX(UU, {
          dx: XU,
          dy: zU
        }), (0, WU.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${UU}`
        })
      }, zX = (UU, XU) => {
        hU((zU => (0, qU.jb)(zU, QU, UU, XU)))
      }, cX = UU => {
        const XU = wU.i[UU];
        return (XU.move || XU.scale) && ("joystick" !== UU || uU) && !(0, jU.A)(UU, AU.hudElements[UU])
      }, yX = UU => wU.i[UU].move && ("joystick" !== UU || uU) && !bU.has(UU), QX = new Set(wU.l.map((UU => UU.id)).filter((UU => {
        const XU = (0, qU.O)(UU) && !CU.rowIcons.includes(UU);
        return null === gU || gU.has(UU) || (0, qU.q)(AU.hudElements, UU) && !XU
      }))), AX = {
        present: QX,
        actionButtons: fU,
        keyNames: iU,
        scaleCaps: GU,
        sizeBesidePreview: MU,
        elements: AU.hudElements,
        selected: FU,
        onSelect: pU,
        rowIconsOpen: YU,
        onRowIconsOpen: NU,
        onScalePreview: (UU, XU) => {
          var zU;
          null === (zU = OU.current) || void 0 === zU || zU.setScale(UU, XU)
        },
        onScale: (UU, XU) => {
          UX(UU, {
            scale: XU
          }), (0, WU.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${UU}`
          })
        },
        onHidden: (UU, XU) => {
          UX(UU, {
            hidden: XU
          }), (0, WU.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${XU?"hide":"show"}:${UU}`
          })
        },
        onReset: UU => {
          UX(UU, qU.b)
        },
        locked: bU,
        lockable: cX,
        onLocked: zX,
        note: (XU, zU) => {
          const cU = zU && aU.length > 0 ? UU("hudLayout:overlapsNote", {
            names: (0, wU.v)(aU, fU, UU, iU)
          }) : null;
          if (zU && vU(XU, uU)) return (0, ZU.jsxs)(ZU.Fragment, {
            children: [cU && (0, ZU.jsx)("span", {
              children: cU
            }), (0, ZU.jsx)("span", {
              children: UU("hudLayout:floatingJoystickNote")
            }), !MU && (0, ZU.jsx)(VU, {})]
          });
          if (cU) return cU;
          const yU = zU && bU.has(XU) ? UU("hudLayout:lockedNote") : null,
            QU = zU && HU.has(XU) ? UU("hudLayout:contextSlotNote") : null;
          return yU || QU ? (0, ZU.jsxs)(ZU.Fragment, {
            children: [yU && (0, ZU.jsx)("span", {
              children: yU
            }), QU && (0, ZU.jsx)("span", {
              children: QU
            })]
          }) : zU && "cluster" === XU ? UU("hudLayout:clusterNote") : zU && "inventory" === XU ? UU("hudLayout:inventoryNote") : zU && "menu" === XU ? UU("hudLayout:menuNote") : zU && (0, jU.A)(XU, AU.hudElements[XU]) && yX(XU) ? UU("hudLayout:rowIconNote") : zU && "arrows" === XU ? UU("hudLayout:arrowsNote") : zU && "sprint" === XU ? UU("hudLayout:sprintNote") : (0, wU.B)(XU) && (0, qU.q)(AU.hudElements, XU) ? UU("hudLayout:inventoryHiddenNote", {
            name: (0, wU.y)(XU, fU, UU, iU)
          }) : null
        }
      };
      return (0, ZU.jsxs)("div", {
        ref: SU,
        className: "HudLayoutSettings",
        children: [(0, ZU.jsxs)("div", {
          ref: lU,
          className: "HudLayoutBody",
          children: [(0, ZU.jsx)("div", {
            className: "HudLayoutOrientation",
            children: UU("landscape" === QU ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, ZU.jsx)(Yz, {
            preview: {
              layout: XU,
              orientation: QU,
              selected: FU,
              onSelect: pU,
              onMove: XX,
              canMove: yX,
              actionButtons: fU,
              joystickFixed: uU,
              presence: CU,
              keyNames: iU,
              maxHeight: rU,
              apiRef: OU,
              onMeasured: RU,
              onReady: mU,
              lockable: cX
            },
            quick: {
              layout: AU,
              actionButtons: fU,
              keyNames: iU,
              scaleCaps: GU,
              overlaps: aU,
              onScale: AX.onScale,
              onHidden: AX.onHidden,
              onReset: AX.onReset,
              locked: bU,
              lockable: cX,
              onLocked: zX
            },
            onFullScreen: () => {
              JU(!0)
            },
            resting: xU,
            onSidePanel: sU
          }), xU && (0, ZU.jsx)(Fz, {
            layout: XU,
            orientation: QU,
            selected: FU,
            onSelect: pU,
            onMove: XX,
            canMove: yX,
            actionButtons: fU,
            joystickFixed: uU,
            presence: CU,
            keyNames: iU,
            onScale: AX.onScale,
            onHidden: AX.onHidden,
            onReset: AX.onReset,
            locked: bU,
            lockable: cX,
            onLocked: zX,
            apiRef: OU,
            onClose: KU
          }), (0, ZU.jsx)(Bz, {
            safe: AU.hudSafe,
            onCommit: UU => {
              hU((XU => (0, qU.lb)(XU, QU, UU)))
            },
            onPreview: UU => {
              var XU;
              null === (XU = OU.current) || void 0 === XU || XU.setSafe(UU)
            }
          }), (0, ZU.jsx)(IU.e, {
            label: UU("hudLayout:snapCentre"),
            checked: XU.hudSnapCentre,
            onClick: UU => {
              (0, qU.W)(UU)
            },
            circleInfoText: UU("hudLayout:snapCentreInfo")
          }), (0, ZU.jsx)(Ez, {
            ...AX
          }), (0, ZU.jsx)(IU.i, {
            label: UU("hudLayout:shape"),
            options: qU.D.map((XU => ({
              value: XU,
              label: UU(`hudLayout:shape_${XU}`)
            }))),
            value: XU.hudShape,
            onChange: UU => {
              hU((XU => ({
                ...XU,
                hudShape: UU
              }))), (0, WU.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: UU
              })
            }
          }), (0, ZU.jsx)(IU.j, {
            name: UU("hudLayout:opacity"),
            min: qU.c,
            max: 1,
            step: .05,
            initValue: XU.hudKeyOpacity,
            format: UU => `${Math.round(100*UU)}%`,
            circleInfoText: UU("hudLayout:opacityInfo"),
            onChange: UU => {
              var XU;
              null === (XU = OU.current) || void 0 === XU || XU.setOpacity(UU)
            },
            onChangeComplete: UU => {
              (0, qU.S)(UU), (0, WU.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, ZU.jsx)(DU.G, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const UU = dU.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await UU.getResult() && (0, qU.Q)()
            }()
          },
          children: UU("hudLayout:resetAll")
        })]
      })
    }
    const Rz = 350;
    const Pz = [function() {
      const {
        t: UU
      } = (0, cU.I)(), [XU, zU] = (0, yU.useState)(!1), QU = (0, yU.useRef)(null);
      return (0, yU.useEffect)((() => {
        var UU;
        XU && (null === (UU = QU.current) || void 0 === UU || UU.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [XU]), (0, ZU.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, ZU.jsx)(LU.c, {
          ref: QU,
          icon: "arrows-up-down-left-right",
          title: UU("hudLayout:title"),
          sub: UU("hudLayout:entrySub"),
          expanded: XU,
          onClick: () => {
            zU(!XU)
          }
        }), XU && (0, ZU.jsx)(Zz, {})]
      })
    }, function() {
      const {
        t: UU
      } = (0, cU.I)(), {
        joystickMode: XU,
        touchSpeedCurve: zU,
        autorun: yU,
        jumpLock: QU,
        touchEdgeGuard: AU
      } = (0, EU.q)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, ZU.jsxs)(ZU.Fragment, {
        children: [(0, ZU.jsx)(IU.i, {
          label: UU("settingsMenu:joystick"),
          options: BU.Eb.map((XU => ({
            value: XU,
            label: UU(RU[XU])
          }))),
          value: XU,
          onChange: UU => {
            EU.e.setClientEscMenuOptions({
              joystickMode: UU
            })
          },
          circleInfoText: UU("settingsMenu:joystickInfo")
        }), (0, ZU.jsx)(IU.e, {
          label: UU("settingsMenu:preciseWalking"),
          checked: zU,
          onClick: UU => {
            EU.e.setClientEscMenuOptions({
              touchSpeedCurve: UU
            })
          },
          circleInfoText: UU("settingsMenu:preciseWalkingInfo")
        }), (0, ZU.jsx)(IU.e, {
          label: UU("settingsMenu:autoRun"),
          checked: yU,
          onClick: UU => {
            EU.e.setClientEscMenuOptions({
              autorun: UU
            })
          },
          circleInfoText: UU("settingsMenu:autoRunInfo")
        }), (0, ZU.jsx)(IU.e, {
          label: UU("settingsMenu:jumpLock"),
          checked: QU,
          onClick: UU => {
            EU.e.setClientEscMenuOptions({
              jumpLock: UU
            })
          },
          circleInfoText: UU("settingsMenu:jumpLockInfo")
        }), (0, ZU.jsx)(IU.e, {
          label: UU("touchSettings:stopAtEdges"),
          checked: AU,
          onClick: UU => {
            EU.e.setClientEscMenuOptions({
              touchEdgeGuard: UU
            })
          },
          circleInfoText: UU("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, ZU.jsx)(GU.b, {})
    }, function() {
      const {
        t: UU
      } = (0, cU.I)(), {
        clientEscMenuOptions: XU
      } = (0, EU.q)(["clientEscMenuOptions"]);
      return (0, PU.b)() ? (0, ZU.jsx)(IU.e, {
        label: UU("settingsMenu:vibration"),
        checked: XU.vibration,
        onClick: UU => {
          EU.e.setClientEscMenuOptions({
            vibration: UU
          })
        },
        circleInfoText: UU("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Wz() {
      return (0, ZU.jsx)(ZU.Fragment, {
        children: Pz.map(((UU, XU) => (0, ZU.jsx)(UU, {}, XU)))
      })
    }
    var dz = zU(4783);

    function Lz() {
      const {
        t: UU
      } = (0, cU.I)(), {
        isTouchScreen: XU,
        clientEscMenuOptions: zU,
        gameState: AU
      } = (0, EU.q)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), FU = (0, pU.f)("ezBridging"), oU = (0, pU.f)("ezTowering"), tU = "inGame" !== AU || !0 === FU, gU = (0, aU.f)(), GU = null !== gU && ("inGame" !== AU || !0 === oU), [, BU] = (0, yU.useReducer)((UU => UU + 1), 0), RU = (0, kU.i)(), [PU, WU] = (0, yU.useState)(dz.e);
      return (0, ZU.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [RU && (0, ZU.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, ZU.jsx)("div", {
            children: UU("controller:settingsControlsNote")
          }), (0, ZU.jsx)(DU.O, {
            onClick: () => {
              EU.e.set({
                openSettingsCategory: "controller"
              })
            },
            children: UU("controller:settingsOpenController")
          })]
        }), (0, YU.isTouchscreen)() && !(0, YU.isMobile)() ? (0, ZU.jsx)(ZU.Fragment, {
          children: (0, ZU.jsx)(IU.e, {
            label: UU("settingsMenu:useTouchControls"),
            checked: PU,
            onClick: UU => {
              (0, dz.c)(UU), WU(UU)
            }
          })
        }) : null, XU && (0, ZU.jsx)(Wz, {}), tU && (0, ZU.jsx)(IU.e, {
          label: UU("settingsMenu:ezBridging"),
          checked: zU.ezBridging,
          onClick: UU => {
            EU.e.setClientEscMenuOptions({
              ezBridging: UU
            })
          },
          circleInfoText: UU("settingsMenu:ezBridgingInfo")
        }), GU && (0, ZU.jsx)(IU.e, {
          label: UU("settingsMenu:ezTowering"),
          checked: zU.ezTowering,
          onClick: UU => {
            EU.e.setClientEscMenuOptions({
              ezTowering: UU
            })
          },
          circleInfoText: UU("jump" === gU ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, ZU.jsx)(IU.e, {
          label: UU("settingsMenu:crouchToggle"),
          checked: zU.crouchIsToggle,
          onClick: UU => {
            EU.e.setClientEscMenuOptions({
              crouchIsToggle: UU
            })
          },
          circleInfoText: UU("settingsMenu:crouchToggleInfo")
        }), (0, ZU.jsx)(IU.e, {
          label: UU("settingsMenu:hideUiToggle"),
          checked: zU.hideUiIsToggle,
          onClick: UU => {
            EU.e.setClientEscMenuOptions({
              hideUiIsToggle: UU
            })
          },
          circleInfoText: UU("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, NU.c)() && (0, ZU.jsx)(IU.j, {
          name: UU("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: zU.touchscreenSensitivity,
          onChange: UU => {
            EU.e.setClientEscMenuOptions({
              touchscreenSensitivity: UU
            })
          }
        }), !(0, YU.isMobile)() && (0, ZU.jsx)(IU.j, {
          name: UU("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: zU.mouseSensitivity,
          onChange: UU => {
            EU.e.setClientEscMenuOptions({
              mouseSensitivity: UU
            })
          }
        }), !(0, YU.isMobile)() && (0, ZU.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, ZU.jsx)("div", {
            className: "SliderText",
            children: UU("settingsMenu:keyBindings")
          }), QU.g.map((XU => (0, ZU.jsx)(ez, {
            title: UU(XU.name.translationKey, XU.name.params),
            defaultOpen: QU.k.has(XU.id),
            children: XU.actions.map((UU => (0, ZU.jsx)(Cz, {
              noaAction: UU,
              forceUpdate: BU,
              clashesWith: XU.clashesWith,
              showPadGlyph: RU
            }, UU)))
          }, XU.name.translationKey))), (0, ZU.jsx)(DU.G, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, QU.G)(), BU()
            },
            children: UU("controls:resetBindings")
          })]
        })]
      })
    }

    function ez(UU) {
      let {
        title: XU,
        defaultOpen: zU,
        children: cU
      } = UU;
      const [QU, AU] = (0, yU.useState)(zU);
      return (0, ZU.jsxs)("div", {
        className: oU()("ControlsSection", {
          Collapsed: !QU
        }),
        children: [(0, ZU.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            AU(!QU)
          },
          children: [(0, ZU.jsx)("div", {
            className: "ControlsSectionTitle",
            children: XU
          }), (0, ZU.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), QU && (0, ZU.jsx)("div", {
          className: "ControlsSectionRows",
          children: cU
        })]
      })
    }

    function Cz(UU) {
      let {
        noaAction: XU,
        forceUpdate: zU,
        clashesWith: FU,
        showPadGlyph: EU
      } = UU;
      const {
        t: YU
      } = (0, cU.I)(), NU = (0, gU.d)(XU), [IU, pU] = (0, yU.useState)(!1), [aU, kU] = (0, yU.useState)("controls:clickToEnterNewBinding"), [GU, BU] = (0, yU.useState)(null), [RU, PU] = (0, yU.useState)(null), WU = (0, yU.useRef)(null);
      (0, yU.useEffect)((() => {
        IU && WU.current && WU.current.focus()
      }), [IU]);
      const dU = QU.w[XU].filter((UU => AU.i[UU]));
      let LU = null;
      const eU = [],
        CU = FU.flatMap((UU => {
          var XU, zU;
          return null !== (XU = null === (zU = QU.g.find((XU => XU.id === UU))) || void 0 === zU ? void 0 : zU.actions) && void 0 !== XU ? XU : []
        }));
      for (const cU of CU) {
        if (cU === XU) continue;
        const UU = QU.w[cU];
        for (const XU of UU) dU.includes(XU) && eU.push(YU(QU.y[cU].translationKey, QU.y[cU].params))
      }
      eU.length > 0 && (LU = YU("controls:sharedBindingsWarning") + " ", LU += eU.join(", "));
      const wU = () => {
          pU(!1), BU(null), kU("controls:clickToEnterNewBinding"), PU(null)
        },
        qU = () => "BindingInput_" + XU;
      return (0, ZU.jsxs)("div", {
        className: oU()("ControlRow", {
          WarningBorder: null !== LU
        }),
        children: [(0, ZU.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, ZU.jsxs)("div", {
            className: "ControlName",
            children: [YU(QU.y[XU].translationKey, QU.y[XU].params), EU && NU && (0, ZU.jsx)(tU.b, {
              glyph: NU,
              className: "ControlPadGlyph"
            })]
          }), (0, ZU.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, ZU.jsxs)("div", {
              className: "ControlBindingsList",
              children: [dU.map((UU => (0, ZU.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, ZU.jsx)("div", {
                  children: (0, QU.p)(UU)
                }), (0, ZU.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const cU = (0, QU.B)(XU, UU);
                    cU.isError() ? PU(cU.asError().message) : PU(null), zU()
                  },
                  children: "\xd7"
                })]
              }, UU))), !IU && (0, ZU.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  pU(!0), PU(null)
                },
                children: (0, ZU.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), IU && (0, ZU.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, ZU.jsxs)("div", {
                className: "InputContainer",
                children: [(0, ZU.jsx)("div", {
                  className: "InputOverlay",
                  children: GU ? (0, QU.p)(GU) : (0, ZU.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: YU(aU)
                  })
                }), (0, ZU.jsx)("input", {
                  ref: WU,
                  id: qU(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: UU => {
                    if ("Escape" === UU.code) return wU(), UU.preventDefault(), void UU.stopPropagation();
                    const XU = UU.code;
                    AU.c.includes(XU) ? (PU(null), BU(XU)) : (PU("controls:keyIsReserved"), BU(null)), UU.preventDefault(), UU.stopPropagation()
                  },
                  onMouseDown: UU => {
                    const XU = "Mouse" + (UU.button + 1);
                    document.activeElement && document.activeElement.id === qU() ? AU.c.includes(XU) ? (PU(null), BU(XU)) : (PU("controls:keyIsReserved"), BU(null)) : kU("controls:enterNewBinding"), UU.stopPropagation()
                  },
                  onBlur: () => {
                    kU("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, ZU.jsx)(DU.f, {
                onPointerDown: UU => {
                  UU.preventDefault()
                },
                onClick: () => {
                  (0, QU.d)(XU, GU), zU(), wU()
                },
                className: "ControlBindingAddButton",
                disabled: null === GU,
                children: YU("general:add")
              }), (0, ZU.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  wU()
                },
                children: "\xd7"
              })]
            }), RU && (0, ZU.jsx)("div", {
              className: "ControlBindingError",
              children: YU(RU)
            })]
          })]
        }), LU && (0, ZU.jsx)("div", {
          className: "ControlRowWarning",
          children: LU
        })]
      })
    }
  },
  9457: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU
    });
    var cU = zU(61),
      yU = zU(1390),
      QU = zU(1305);
    const AU = (0, cU.forwardRef)((function(UU, XU) {
      let {
        icon: zU,
        title: cU,
        sub: AU,
        expanded: FU,
        onClick: oU
      } = UU;
      return (0, QU.jsxs)("button", {
        ref: XU,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": FU,
        onClick: oU,
        children: [(0, QU.jsx)(yU.d, {
          name: zU,
          className: "FeaturedSettingsEntryIcon"
        }), (0, QU.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, QU.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: cU
          }), (0, QU.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: AU
          })]
        }), (0, QU.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  9252: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => gU,
      g: () => tU,
      h: () => EU,
      i: () => kU,
      j: () => GU,
      n: () => NU
    });
    var cU = zU(1715),
      yU = zU(1808);
    const QU = UU => UU >= 56320 && UU <= 57343,
      AU = UU => UU >= 55296 && UU <= 56319,
      FU = (UU, XU) => XU >= 2 && QU(UU.charCodeAt(XU - 1)) && AU(UU.charCodeAt(XU - 2)) ? XU - 2 : Math.max(0, XU - 1),
      oU = (UU, XU) => {
        let zU;
        var cU, yU;
        return zU = UU.start !== UU.end ? XU < 0 ? UU.start : UU.end : XU < 0 ? FU(UU.value, UU.start) : (cU = UU.value, (yU = UU.start) + 1 < cU.length && AU(cU.charCodeAt(yU)) && QU(cU.charCodeAt(yU + 1)) ? yU + 2 : Math.min(cU.length, yU + 1)), {
          value: UU.value,
          start: zU,
          end: zU
        }
      },
      DU = ["text", "search", "url", "email", "tel", "password", "number"],
      EU = UU => !(!(0, yU.e)(UU) || UU.isContentEditable || UU.hasAttribute("data-pad-no-osk")) && (UU instanceof HTMLTextAreaElement || UU instanceof HTMLInputElement && DU.includes(UU.type)),
      YU = UU => null !== UU.selectionStart,
      NU = UU => {
        var XU, zU;
        const {
          value: cU
        } = UU;
        return {
          value: cU,
          start: null !== (XU = UU.selectionStart) && void 0 !== XU ? XU : cU.length,
          end: null !== (zU = UU.selectionEnd) && void 0 !== zU ? zU : cU.length
        }
      },
      IU = (UU, XU, zU) => {
        if (UU.readOnly) return;
        const yU = UU instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(yU, "value").set.call(UU, XU.value), YU(UU) && UU.setSelectionRange(XU.start, XU.end), (0, cU.g)(UU, new InputEvent("input", {
          bubbles: !0,
          inputType: zU
        }))
      };
    let pU = !1;
    const aU = (UU, XU) => !!document.execCommand(UU, !1, XU) || (pU || (pU = !0, console.warn(`execCommand("${UU}") failed; the on-screen keyboard is setting the value directly`)), !1),
      tU = (UU, XU) => {
        aU("insertText", XU) || IU(UU, function(UU, XU) {
          let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const cU = UU.value.slice(0, UU.start),
            yU = UU.value.slice(UU.end);
          let QU = zU < 0 ? XU.length : Math.max(0, zU - cU.length - yU.length);
          QU > 0 && QU < XU.length && AU(XU.charCodeAt(QU - 1)) && QU--;
          const FU = XU.slice(0, QU),
            oU = cU.length + FU.length;
          return {
            value: cU + FU + yU,
            start: oU,
            end: oU
          }
        }(NU(UU), XU, UU.maxLength), "insertText")
      },
      gU = UU => {
        aU("delete") || IU(UU, (UU => {
          const XU = UU.start === UU.end ? FU(UU.value, UU.start) : UU.start;
          return {
            value: UU.value.slice(0, XU) + UU.value.slice(UU.end),
            start: XU,
            end: XU
          }
        })(NU(UU)), "deleteContentBackward")
      },
      kU = (UU, XU) => {
        if (!YU(UU)) return;
        const zU = oU(NU(UU), XU);
        UU.setSelectionRange(zU.start, zU.end)
      },
      GU = UU => {
        YU(UU) && 0 === UU.selectionStart && 0 === UU.selectionEnd && UU.setSelectionRange(UU.value.length, UU.value.length)
      }
  },
  9417: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU
    });
    var cU = zU(27),
      yU = zU(2205),
      QU = zU(1410),
      AU = zU(1444);
    const FU = async () => {
      if ((0, AU.n)()) {
        if (!0 !== await QU.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== cU.e.get("gameState")) return
      }(0, yU.f)()
    }
  },
  9422: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => oU,
      f: () => QU,
      g: () => AU,
      k: () => yU,
      n: () => FU
    });
    var cU = zU(2041);
    const yU = "controllerPadShopOpen",
      QU = UU => cU.h.includes(UU),
      AU = UU => Object.values(UU).some((UU => !1 !== UU.canBuy && !UU.isRewardedAd)),
      FU = (UU, XU, zU) => {
        var cU, yU, AU, FU;
        const oU = UU.filter((UU => !QU(UU))),
          DU = null !== XU && UU.includes(XU) ? XU : null;
        return null !== DU && !QU(DU) && zU(DU) ? DU : null !== (cU = null !== (yU = null !== (AU = null !== (FU = oU.find(zU)) && void 0 !== FU ? FU : oU[0]) && void 0 !== AU ? AU : DU) && void 0 !== yU ? yU : UU[0]) && void 0 !== cU ? cU : null
      },
      oU = UU => UU.userInput || UU.isRewardedAd || "boolean" === typeof UU.isSelected ? null : JSON.stringify([UU.image, UU.cost, UU.currency, UU.amount, UU.customTitle, UU.buyButtonText, UU.description, UU.canBuy])
  },
  9443: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => DU,
      i: () => EU
    });
    var cU = zU(61),
      yU = zU(1492),
      QU = zU(2082),
      AU = zU(1457),
      FU = zU(1478),
      oU = zU(1305);
    const DU = () => {
        const UU = (0, AU.o)();
        if ((0, cU.useEffect)((() => {
            (0, AU.i)()
          }), []), !UU) return null;
        const {
          ControllerCategory: XU
        } = UU;
        return (0, oU.jsx)(FU.c, {
          children: (0, oU.jsx)(XU, {})
        })
      },
      EU = () => {
        var UU;
        const XU = (0, AU.o)(),
          [, zU] = (0, cU.useReducer)((UU => UU + 1), 0);
        return (0, yU.f)(QU.c, zU), null !== (UU = null === XU || void 0 === XU ? void 0 : XU.hasActivePad()) && void 0 !== UU && UU
      }
  },
  9237: (UU, XU, zU) => {
    zU.d(XU, {
      A: () => RU,
      E: () => PU,
      F: () => tU,
      J: () => oU,
      M: () => EU,
      b: () => gU,
      c: () => dU,
      g: () => ZU,
      h: () => BU,
      l: () => pU,
      p: () => aU,
      q: () => NU,
      s: () => IU,
      t: () => WU,
      u: () => DU,
      w: () => LU
    });
    var cU = zU(31),
      yU = zU(1715),
      QU = zU(9245),
      AU = zU(9252),
      FU = zU(2528);
    const oU = UU => (0, AU.h)(UU),
      DU = UU => {
        const XU = UU.getBoundingClientRect();
        return {
          x: XU.left + XU.width / 2,
          y: XU.top + XU.height / 2
        }
      },
      EU = (UU, XU, zU) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: UU.x,
        clientY: UU.y,
        screenX: UU.x,
        screenY: UU.y,
        button: XU,
        buttons: zU,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      YU = (UU, XU) => {
        (0, yU.g)(UU, XU)
      },
      NU = function(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const cU = 0 === zU ? 1 : 2;
        YU(UU, new PointerEvent("pointerdown", EU(XU, zU, cU))), YU(UU, new MouseEvent("mousedown", EU(XU, zU, cU)))
      },
      IU = function(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        YU(UU, new PointerEvent("pointerup", EU(XU, zU, 0))), YU(UU, new MouseEvent("mouseup", EU(XU, zU, 0)))
      },
      pU = function(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        NU(UU, XU, zU), IU(UU, XU, zU), YU(UU, 0 === zU ? new MouseEvent("click", EU(XU, 0, 0)) : new MouseEvent("contextmenu", EU(XU, 2, 0)))
      },
      aU = function(UU, XU, zU) {
        let {
          leaveBelow: cU = null,
          enterBelow: yU = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (UU !== XU) {
          if (null !== UU && void 0 !== UU && UU.isConnected) {
            const yU = {
              ...EU(zU, 0, 0),
              relatedTarget: XU
            };
            YU(UU, new PointerEvent("pointerout", yU)), YU(UU, new MouseEvent("mouseout", yU));
            const QU = UU => !!XU && UU.contains(XU) || !!cU && UU.contains(cU);
            for (let XU = UU; XU && !QU(XU); XU = XU.parentElement) YU(XU, new PointerEvent("pointerleave", {
              ...yU,
              bubbles: !1
            })), YU(XU, new MouseEvent("mouseleave", {
              ...yU,
              bubbles: !1
            }))
          }
          if (XU) {
            const cU = {
              ...EU(zU, 0, 0),
              relatedTarget: UU
            };
            YU(XU, new PointerEvent("pointerover", cU)), YU(XU, new MouseEvent("mouseover", cU));
            const QU = [],
              AU = XU => !(null === UU || void 0 === UU || !UU.isConnected) && XU.contains(UU) || !!yU && XU.contains(yU);
            for (let UU = XU; UU && !AU(UU); UU = UU.parentElement) QU.push(UU);
            for (const UU of QU.reverse()) YU(UU, new PointerEvent("pointerenter", {
              ...cU,
              bubbles: !1
            })), YU(UU, new MouseEvent("mouseenter", {
              ...cU,
              bubbles: !1
            }));
            YU(XU, new PointerEvent("pointermove", EU(zU, 0, 0))), YU(XU, new MouseEvent("mousemove", EU(zU, 0, 0)))
          }
        } else XU && (YU(XU, new PointerEvent("pointermove", EU(zU, 0, 0))), YU(XU, new MouseEvent("mousemove", EU(zU, 0, 0))))
      },
      tU = UU => {
        cU.k.UY(QU.d, UU)
      },
      gU = UU => {
        if (oU(UU)) return void tU(UU);
        const XU = UU.hasAttribute("data-pad-focusable") ? UU.querySelector("a[href]") : null,
          zU = null !== XU && void 0 !== XU ? XU : UU;
        pU(zU, DU(zU))
      },
      kU = ".Dropdown-root.is-open",
      GU = UU => {
        const XU = UU.querySelector(".Dropdown-control");
        return gU(XU), XU
      },
      BU = UU => {
        var XU;
        const zU = null !== (XU = UU.closest(kU)) && void 0 !== XU ? XU : UU.querySelector(kU);
        return zU ? GU(zU) : null
      },
      ZU = UU => {
        for (const XU of document.querySelectorAll(kU)) XU.contains(UU) || GU(XU)
      },
      RU = UU => null !== UU.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      PU = UU => {
        const XU = UU ? document.elementFromPoint(UU.x, UU.y) : null;
        return !(null === XU || void 0 === XU || !XU.closest("[data-pad-repeat]"))
      },
      WU = UU => {
        var XU;
        return null !== (XU = [...UU.querySelectorAll("[data-pad-back]")].find(FU.m)) && void 0 !== XU ? XU : null
      },
      dU = UU => {
        const XU = WU(UU);
        return !!XU && (gU(XU), !0)
      },
      LU = UU => {
        var XU, zU, cU, yU;
        return null !== (XU = null !== (zU = null !== (cU = UU.getAttribute("data-pad-key")) && void 0 !== cU ? cU : UU.getAttribute("href")) && void 0 !== zU ? zU : null === (yU = UU.querySelector("a[href]")) || void 0 === yU ? void 0 : yU.getAttribute("href")) && void 0 !== XU ? XU : null
      }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);