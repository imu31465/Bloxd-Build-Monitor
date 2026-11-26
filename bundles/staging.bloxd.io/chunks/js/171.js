export const id = 171;
export const ids = [171];
export const modules = {
  9540: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB
    });
    var YB = GB(16),
      DB = GB(1175),
      QB = GB(5480),
      oB = GB(1282);

    function jB(BB) {
      let {
        note: OB
      } = BB;
      const {
        t: GB
      } = (0, DB.H)(), {
        clientEscMenuOptions: jB
      } = (0, YB.o)(["clientEscMenuOptions"]);
      return (0, oB.jsx)(QB.c, {
        label: GB("touchSettings:actionButtons"),
        checked: jB.touchActionButtons,
        onClick: BB => {
          YB.c.setClientEscMenuOptions({
            touchActionButtons: BB
          })
        },
        circleInfoText: GB("touchSettings:actionButtonsInfo"),
        note: OB
      })
    }
  },
  9529: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => dG,
      f: () => kG
    });
    var YB = GB(1175),
      DB = GB(56),
      QB = GB(2085),
      oB = GB(2098),
      jB = GB(1090),
      yB = GB.n(jB),
      JB = GB(1485),
      MB = GB(16),
      PB = GB(92),
      zB = GB(104),
      lB = GB(5480),
      pB = GB(2653),
      qB = GB(271),
      ZB = GB(2107),
      NB = GB(2111),
      RB = GB(9535),
      WB = GB(9540),
      AB = GB(331),
      VB = GB(1282);
    const SB = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var nB = GB(9545);
    var UB = GB(1516),
      fB = GB(1400),
      kB = GB(9547),
      dB = GB(1450),
      KB = GB(1383),
      uB = GB(9549),
      mB = GB(2679);

    function IB(BB) {
      let {
        className: OB,
        keepPlace: GB
      } = BB;
      return GB ? (0, VB.jsx)("div", {
        className: yB()(OB, "Placeholder")
      }) : null
    }

    function FB(BB) {
      let {
        id: OB,
        elements: GB,
        actionButtons: DB,
        keyNames: QB,
        className: oB,
        keepPlace: jB,
        onHidden: yB
      } = BB;
      const {
        t: MB
      } = (0, YB.H)();
      if (!uB.g[OB].hide) return (0, VB.jsx)(IB, {
        className: oB,
        keepPlace: jB
      });
      const PB = (0, mB.t)(GB, OB);
      return (0, VB.jsx)(JB.Z, {
        className: oB,
        ariaLabel: MB(PB ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: (0, uB.v)(OB, DB, MB, QB)
        }),
        pressed: !PB,
        onClick: () => {
          yB(OB, !PB)
        },
        children: (0, VB.jsx)(KB.b, {
          name: PB ? "eye-slash" : "eye"
        })
      })
    }

    function iB(BB) {
      let {
        id: OB,
        elements: GB,
        actionButtons: DB,
        keyNames: QB,
        className: oB,
        keepPlace: jB,
        onlyWhenMoved: yB,
        locked: MB,
        onReset: PB
      } = BB;
      const {
        t: zB
      } = (0, YB.H)(), lB = uB.g[OB], pB = (0, mB.N)(GB[OB]);
      return !lB.move && !lB.scale || yB && pB ? (0, VB.jsx)(IB, {
        className: oB,
        keepPlace: jB
      }) : (0, VB.jsx)(JB.Z, {
        className: oB,
        disabled: pB || MB,
        ariaLabel: zB("hudLayout:resetElement", {
          name: (0, uB.v)(OB, DB, zB, QB)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: OB
        },
        onClick: BB => {
          yB && XB(BB.currentTarget), PB(OB)
        },
        children: (0, VB.jsx)(KB.b, {
          name: "rotate-left"
        })
      })
    }

    function LB(BB) {
      let {
        id: OB,
        actionButtons: GB,
        keyNames: DB,
        className: QB,
        keepPlace: oB,
        locked: jB,
        lockable: yB,
        onLocked: MB
      } = BB;
      const {
        t: PB
      } = (0, YB.H)();
      return yB || jB ? (0, VB.jsx)(JB.Z, {
        className: QB,
        ariaLabel: PB(jB ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: (0, uB.v)(OB, GB, PB, DB)
        }),
        pressed: jB,
        active: jB,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${jB?"unlock":"lock"}:${OB}`
        },
        onClick: () => {
          MB(OB, !jB)
        },
        children: (0, VB.jsx)(KB.b, {
          name: jB ? "lock" : "lock-open"
        })
      }) : (0, VB.jsx)(IB, {
        className: QB,
        keepPlace: oB
      })
    }

    function gB(BB) {
      let {
        className: OB,
        open: GB,
        name: DB,
        onToggle: QB
      } = BB;
      const {
        t: oB
      } = (0, YB.H)();
      return (0, VB.jsx)(JB.Z, {
        className: OB,
        ariaLabel: oB(GB ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: DB
        }),
        pressed: GB,
        analyticsClick: {
          id: "hud_layout.children",
          value: GB ? "close" : "open"
        },
        onClick: () => {
          QB(!GB)
        },
        children: (0, VB.jsx)(KB.b, {
          name: GB ? "angle-up" : "angle-down"
        })
      })
    }

    function rB(BB, OB) {
      var GB;
      BB.contains(document.activeElement) && OB.focus({
        preventScroll: !0
      }), null === (GB = (0, dB.f)()) || void 0 === GB || GB.handOverPadFocus(BB, OB)
    }

    function XB(BB) {
      const OB = BB.closest("[data-hud-row]"),
        GB = null === OB || void 0 === OB ? void 0 : OB.querySelector(".HudElementRowName");
      return !(!OB || !GB) && (rB(OB, GB), !0)
    }
    const wB = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function EB(BB, OB) {
      return "joystick" === BB && !OB
    }

    function cB() {
      const {
        t: BB
      } = (0, YB.H)();
      return (0, VB.jsx)(JB.Z, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: BB => {
          const OB = BB.currentTarget;
          if (!XB(OB)) {
            const BB = function(BB) {
              var OB, GB;
              const YB = [BB.previousElementSibling, BB.nextElementSibling].find((BB => BB instanceof HTMLElement && BB.matches(wB)));
              return null !== (OB = null !== YB && void 0 !== YB ? YB : null === (GB = BB.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === GB ? void 0 : GB.querySelector(`:is(${wB}):not(.HudFixJoystickButton)`)) && void 0 !== OB ? OB : null
            }(OB);
            BB && rB(OB, BB)
          }
          MB.c.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: BB("hudLayout:fixJoystick")
      })
    }
    var hB = GB(70),
      aB = GB(1268),
      eB = GB(3528),
      TB = GB(3072),
      bB = GB(9553),
      CB = GB(9562),
      HB = GB(2682),
      vB = GB(2697),
      sB = GB(3573),
      xB = GB(9566);
    const tB = BB => ({
      [uB.d]: BB
    });

    function BO(BB) {
      let {
        id: OB,
        slot: GB,
        icon: YB,
        label: QB,
        hidden: oB,
        className: jB,
        face: JB
      } = BB;
      const MB = (0, DB.useRef)(null);
      return (0, DB.useLayoutEffect)((() => {
        JB && MB.current && (0, xB.n)(MB.current, JB)
      }), [JB]), (0, VB.jsxs)("div", {
        className: yB()("TouchKeyHit", `TouchSlot${GB}`, jB, {
          HudPreviewGhost: oB.has(OB)
        }),
        ...tB(OB),
        children: [JB && (0, VB.jsx)("div", {
          ref: MB,
          className: yB()("TouchKey", {
            Labelled: JB.classList.contains("Labelled")
          })
        }), !JB && (0, VB.jsxs)("div", {
          className: yB()("TouchKey", {
            Labelled: void 0 !== QB
          }),
          children: [YB && (0, VB.jsx)(KB.b, {
            name: YB
          }), void 0 !== QB && (0, VB.jsx)("span", {
            className: "TouchKeyLabel",
            children: QB
          })]
        })]
      })
    }

    function OO(BB) {
      let {
        item: OB,
        selected: GB
      } = BB;
      const YB = (0, DB.useRef)(null);
      return (0, DB.useLayoutEffect)((() => {
        YB.current && (0, xB.n)(YB.current, OB)
      }), [OB]), (0, VB.jsx)("div", {
        ref: YB,
        className: yB()("InvenItem", {
          Selected: GB
        })
      })
    }
    const GO = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      YO = BB => void 0 === BB ? {} : {
        style: {
          "--parked": BB
        }
      };

    function DO(BB) {
      let {
        id: OB,
        hidden: GB,
        parked: YB,
        unslotted: DB = !1
      } = BB;
      return (0, VB.jsx)("div", {
        className: yB()("TopRightIcon", vB.k[OB], {
          HudPreviewGhost: GB.has(OB),
          [HB.c]: void 0 !== YB,
          [HB.f]: DB
        }),
        ...YO(YB),
        children: (0, VB.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...tB(OB),
          children: (0, VB.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, VB.jsx)(KB.b, {
              name: GO[OB]
            })
          })
        })
      })
    }

    function QO(BB) {
      let {
        portraitPhone: OB,
        icons: GB,
        pinnedIcons: YB,
        hidden: QB,
        moved: oB,
        trayState: jB
      } = BB;
      const JB = OB ? (0, HB.C)(GB) : [],
        MB = GB.filter((BB => "settings" === BB)),
        PB = GB.filter((BB => "settings" !== BB && !JB.includes(BB))).reverse(),
        zB = JB.length > 0 && "gone" === jB,
        lB = [...MB, ...zB ? ["tray"] : [], ...PB].filter((BB => "tray" === BB || QB.has(BB) && !oB.has(BB))),
        pB = BB => {
          const OB = lB.indexOf(BB);
          return OB < 0 ? void 0 : OB
        },
        qB = (BB, OB) => (0, VB.jsx)(DO, {
          id: BB,
          hidden: QB,
          parked: OB ? pB(BB) : void 0,
          unslotted: OB && QB.has(BB) && oB.has(BB)
        }, BB);
      return (0, VB.jsxs)("div", {
        className: yB()("TopRightIcons TouchInGame", {
          Column: OB
        }),
        children: [MB.map((BB => qB(BB, !0))), JB.length > 0 && (0, VB.jsxs)("div", {
          className: yB()("TopRightIcon TopRightTrayToggle Open", {
            [HB.c]: zB
          }),
          ...YO(pB("tray")),
          children: [(0, VB.jsx)("div", {
            className: yB()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== jB
            }),
            children: (0, VB.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, VB.jsx)(KB.b, {
                name: "ellipsis"
              })
            })
          }), (0, VB.jsx)("div", {
            className: "TopRightTray",
            children: JB.map((BB => qB(BB, !1)))
          })]
        }), PB.map((BB => (0, VB.jsxs)(DB.Fragment, {
          children: ["perspective" === BB && null !== YB.rightOfCamera && (0, VB.jsx)(oO, {
            icon: YB.rightOfCamera
          }), qB(BB, !0)]
        }, BB))), null !== YB.leftEnd && (0, VB.jsx)(oO, {
          icon: YB.leftEnd
        })]
      })
    }

    function oO(BB) {
      let {
        icon: OB
      } = BB;
      return (0, VB.jsx)("div", {
        className: "TopRightIcon",
        children: (0, VB.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, VB.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, VB.jsx)(KB.b, {
              name: OB
            })
          })
        })
      })
    }

    function jO(BB) {
      let {
        next: OB,
        hidden: GB
      } = BB;
      return (0, VB.jsx)("div", {
        className: yB()("HotBarArrow", OB ? "Next" : "Previous", {
          HudPreviewGhost: GB
        }),
        ...tB("arrows"),
        children: (0, VB.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, VB.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, VB.jsx)(KB.b, {
              name: OB ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function yO() {
      return (0, VB.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, VB.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, VB.jsx)("div", {
            className: "SocialBar",
            children: (0, VB.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, VB.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, VB.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, VB.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, VB.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, VB.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, VB.jsx)(KB.b, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, VB.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, VB.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, VB.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, VB.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, VB.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, VB.jsx)(KB.b, {
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
    const JO = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      MO = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      PO = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      zO = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function lO(BB) {
      let {
        presence: OB,
        portraitPhone: GB,
        hidden: DB,
        actionButtons: QB,
        joystickFixed: oB,
        keysAbove: jB,
        auraBar: JB,
        trayState: MB,
        moved: zB
      } = BB;
      const {
        t: lB
      } = (0, YB.H)(), {
        faces: pB,
        items: qB
      } = OB, ZB = BB => ({
        HudPreviewGhost: (0, uB.H)(BB).some((BB => DB.has(BB)))
      });
      return (0, VB.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, VB.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, VB.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, VB.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, VB.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, VB.jsx)("div", {
              className: "InGameHeaderGameName",
              children: lB("hudLayout:previewGameName")
            })]
          })
        }), (0, VB.jsx)("div", {
          className: "TopLeftElements",
          children: (0, VB.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, VB.jsxs)("div", {
              className: "Chat",
              children: [(0, VB.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [lB("hudLayout:previewChatLine"), lB("hudLayout:previewChatJoined", {
                  name: "Arthur"
                }), lB("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((BB => (0, VB.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, VB.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, VB.jsx)("div", {
                      className: "IndividualText",
                      children: BB
                    })
                  })
                }, BB)))
              }), (0, VB.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: yB()("ChatIconWrapper SmallTextLight", ZB("chat")),
                ...tB("chat"),
                children: (0, VB.jsx)(KB.b, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, VB.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, VB.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, VB.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, VB.jsx)("div", {
                className: "TopRightIconsContainer",
                ...tB("menu"),
                children: (0, VB.jsx)(QO, {
                  portraitPhone: GB,
                  icons: OB.rowIcons,
                  pinnedIcons: OB.pinnedIcons,
                  hidden: DB,
                  trayState: MB,
                  moved: zB
                })
              })
            }), PB.featureFlags.useSocialFeatures && (0, VB.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, VB.jsx)(yO, {})
            })]
          })
        }), (0, VB.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, VB.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, VB.jsxs)("div", {
            className: "TouchInteractKey",
            ...tB("interact"),
            children: [(0, VB.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, VB.jsx)(KB.b, {
                name: "hand-back-point-up"
              })
            }), (0, VB.jsx)("div", {
              children: lB("hudLayout:previewInteract")
            })]
          })
        }), (0, VB.jsx)("div", {
          className: "BottomCentre",
          children: (0, VB.jsxs)("div", {
            className: "BottomElements",
            children: [(0, VB.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, VB.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, VB.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...tB("hotbar"),
                children: (0, VB.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, VB.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, VB.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, VB.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, VB.jsx)(KB.b, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), JB && (0, VB.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, VB.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, VB.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, sB.g)("glint"),
                    alt: ""
                  }), (0, VB.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, VB.jsx)("div", {
                  className: "AuraBar",
                  children: (0, VB.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, VB.jsx)("div", {
                className: "HotBarRow",
                children: (0, VB.jsx)("div", {
                  className: yB()("HotBarContainer Touch", {
                    KeysAbove: jB
                  }),
                  children: (0, VB.jsxs)("div", {
                    className: "HotBar",
                    ...tB("hotbar"),
                    children: [(0, VB.jsxs)("div", {
                      className: yB()("TouchInventoryKeys", {
                        NoAuraBar: !JB
                      }),
                      children: [(0, VB.jsx)("div", {
                        className: yB()("TouchInventoryKey ShopKey", ZB("shop"), {
                          Hidden: !OB.shop
                        }),
                        ...tB("shop"),
                        children: (0, VB.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, VB.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, VB.jsx)(KB.b, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, VB.jsx)("div", {
                        className: yB()("TouchInventoryKey BagKey", ZB("bag"), {
                          Hidden: !OB.bag
                        }),
                        ...tB("bag"),
                        children: (0, VB.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, VB.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, VB.jsx)(KB.b, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, VB.jsx)(jO, {
                      next: !1,
                      hidden: DB.has("arrows")
                    }), (0, VB.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== qB && qB.map(((BB, OB) => (0, VB.jsx)(OO, {
                        item: BB,
                        selected: BB.classList.contains("Selected")
                      }, OB))), null === qB && PO.map((BB => {
                        const OB = zO[BB];
                        return (0, VB.jsx)("div", {
                          className: yB()("InvenItem", {
                            Selected: 0 === BB
                          }),
                          children: OB && (0, VB.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, VB.jsx)(KB.b, {
                              name: OB
                            })
                          })
                        }, BB)
                      }))]
                    }), (0, VB.jsx)(jO, {
                      next: !0,
                      hidden: DB.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, VB.jsx)("div", {
              className: "BottomRightElements",
              children: (0, VB.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== pB && xB.g.map((BB => {
                  const OB = pB[BB];
                  return OB && (0, VB.jsx)(BO, {
                    id: xB.f[BB],
                    slot: BB,
                    face: OB,
                    className: JO[BB],
                    hidden: DB
                  }, BB)
                })), (0, xB.r)(OB, QB).map((BB => (0, VB.jsx)(BO, {
                  id: xB.f[BB],
                  slot: BB,
                  icon: MO[BB].icon,
                  label: lB(MO[BB].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: DB
                }, BB))), null === pB && (0, VB.jsxs)(VB.Fragment, {
                  children: [(0, VB.jsx)(BO, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: DB
                  }), (0, VB.jsx)(BO, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: DB
                  }), QB && (0, VB.jsxs)(VB.Fragment, {
                    children: [(0, VB.jsx)(BO, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: DB
                    }), (0, VB.jsx)(BO, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: DB
                    })]
                  }), (0, xB.j)(QB).map((BB => (0, VB.jsx)(BO, {
                    id: xB.f[BB],
                    slot: BB,
                    icon: MO[BB].icon,
                    label: lB(MO[BB].labelKey),
                    hidden: DB
                  }, BB))), (0, VB.jsx)(BO, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: DB
                  })]
                })]
              })
            })]
          })
        }), (0, VB.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, VB.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, VB.jsxs)("div", {
              className: yB()("Joystick Resting HudPreviewJoystick", {
                Floating: !oB
              }),
              ...tB("joystick"),
              children: [(0, VB.jsx)("div", {
                className: "JoystickBase"
              }), (0, VB.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), OB.sprint && (0, VB.jsx)("div", {
            className: yB()("TouchSprintHit", ZB("sprint"), {
              AtHome: !oB
            }),
            ...tB("sprint"),
            children: (0, VB.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, VB.jsx)(KB.b, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function pO() {
      const [BB, OB] = (0, DB.useState)({}), GB = (0, DB.useCallback)((BB => {
        OB((OB => [...new Set([...Object.keys(OB), ...Object.keys(BB)])].every((GB => OB[GB] === BB[GB])) ? OB : BB))
      }), []);
      return [BB, GB]
    }
    const qO = .05;

    function ZO(BB) {
      var OB;
      let {
        selected: GB,
        layout: DB,
        actionButtons: QB,
        keyNames: oB,
        overlaps: jB,
        scaleCaps: MB,
        joystickFixed: PB,
        onScale: zB,
        onHidden: lB,
        onReset: pB,
        locked: qB,
        lockable: ZB,
        onLocked: NB,
        extra: RB
      } = BB;
      const {
        t: WB
      } = (0, YB.H)(), AB = GB ? uB.g[GB] : null, SB = null !== GB && qB.has(GB), nB = (GB && DB.hudElements[GB] || mB.p)[2], UB = null !== (OB = GB && MB[GB]) && void 0 !== OB ? OB : mB.j, fB = BB => {
        GB && zB(GB, Math.min(UB, Math.round(100 * (nB + .1 * BB)) / 100))
      };
      return (0, VB.jsxs)(VB.Fragment, {
        children: [(0, VB.jsxs)("div", {
          className: yB()("HudQuickName SmallTextBold", {
            Overlap: jB.length > 0
          }),
          children: [jB.length > 0 && (0, VB.jsx)(KB.b, {
            name: "triangle-exclamation"
          }), AB ? (0, uB.v)(AB.id, QB, WB, oB) : WB("hudLayout:fullScreenHint"), jB.length > 0 && (0, VB.jsx)("span", {
            className: "HudQuickOverlap",
            children: WB("hudLayout:overlapsShort", {
              names: (0, uB.u)(jB, QB, WB, oB)
            })
          })]
        }), (null === AB || void 0 === AB ? void 0 : AB.scale) && (0, VB.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, VB.jsx)(JB.Z, {
            disabled: SB || nB <= mB.l,
            ariaLabel: WB("hudLayout:smaller"),
            onClick: () => {
              fB(-1)
            },
            children: (0, VB.jsx)(KB.b, {
              name: "minus"
            })
          }), (0, VB.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*nB)}%`
          }), (0, VB.jsx)(JB.Z, {
            disabled: SB || nB >= UB,
            ariaLabel: WB("hudLayout:larger"),
            onClick: () => {
              fB(1)
            },
            children: (0, VB.jsx)(KB.b, {
              name: "plus"
            })
          })]
        }), (AB || RB) && (0, VB.jsxs)("div", {
          className: "HudQuickActions",
          children: [AB && (0, VB.jsxs)(VB.Fragment, {
            children: [(0, VB.jsx)(LB, {
              id: AB.id,
              actionButtons: QB,
              keyNames: oB,
              locked: SB,
              lockable: ZB(AB.id),
              onLocked: NB
            }), (0, VB.jsx)(FB, {
              id: AB.id,
              elements: DB.hudElements,
              actionButtons: QB,
              keyNames: oB,
              onHidden: lB
            }), (0, VB.jsx)(iB, {
              id: AB.id,
              elements: DB.hudElements,
              actionButtons: QB,
              keyNames: oB,
              locked: SB,
              onReset: pB
            }), EB(AB.id, PB) && (0, VB.jsx)(cB, {})]
          }), RB]
        })]
      })
    }
    var NO = GB(1106),
      RO = GB(4846);
    const WO = "HudPreviewDoc",
      AO = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      VO = new Set([WO, ...Object.values(AO)]),
      SO = new Set(mB.A.map(vB.t)),
      nO = new Set(vB.f),
      UO = 'style, link[rel="stylesheet"]';

    function fO(BB, OB, GB, YB) {
      const DB = new Map,
        QB = new Set,
        oB = new URL(BB.baseURI).origin,
        jB = OB => {
          var GB;
          if ("LINK" !== OB.nodeName) return !0;
          const YB = null === (GB = OB.getAttribute("href")) || void 0 === GB ? void 0 : GB.trim();
          if (!YB) return !1;
          try {
            return new URL(YB, BB.baseURI).origin === oB
          } catch {
            return !1
          }
        };
      let yB = null;
      const JB = () => {
          yB !== (0 === QB.size) && (yB = 0 === QB.size, null === YB || void 0 === YB || YB(yB))
        },
        MB = BB => {
          const OB = BB.cloneNode(!0);
          if ("LINK" === OB.tagName) {
            QB.add(OB);
            const BB = () => {
              QB.delete(OB), JB()
            };
            OB.addEventListener("load", BB), OB.addEventListener("error", BB), GB && OB.addEventListener("load", GB)
          }
          return OB
        },
        PB = () => {
          const YB = function(BB) {
              const OB = [...BB.body.children].filter((BB => BB.matches(UO)));
              return [...BB.head.querySelectorAll(UO), ...OB]
            }(BB).filter(jB),
            oB = new Set(YB);
          for (const [BB, OB] of DB) oB.has(BB) || (OB.remove(), DB.delete(BB), QB.delete(OB));
          let yB = null;
          for (let BB = YB.length - 1; BB >= 0; BB--) {
            const QB = YB[BB];
            let oB = DB.get(QB);
            oB ? "STYLE" === QB.tagName && oB.textContent !== QB.textContent && (oB.textContent = QB.textContent, null === GB || void 0 === GB || GB()) : (oB = MB(QB), DB.set(QB, oB), OB.head.insertBefore(oB, yB)), yB = oB
          }
          JB()
        };
      PB();
      const zB = new MutationObserver(PB);
      return zB.observe(BB.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), zB.observe(BB.body, {
        childList: !0
      }), () => {
        zB.disconnect()
      }
    }

    function kO(BB, OB, GB) {
      let {
        keysAbove: YB
      } = GB;
      const DB = [...BB.documentElement.classList].filter((BB => !VO.has(BB) && !nO.has(BB))),
        QB = [...OB.documentElement.classList].filter((BB => nO.has(BB))),
        oB = [WO, AO.hotbar, AO.hasShop, AO.hasBag];
      YB && oB.push(AO.keysAbove), OB.documentElement.className = [...DB, ...oB, ...QB].join(" ")
    }
    const dO = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function KO(BB, OB, GB, YB, DB) {
      const QB = (0, mB.C)(GB, YB, "joystick"),
        oB = (0, vB.w)((0, vB.L)(GB, YB, DB), YB),
        jB = oB.classes.filter((BB => !SO.has(BB))),
        yB = OB.documentElement,
        JB = GB.hudLayouts[YB].hudSafe,
        MB = (0, vB.C)(JB, window.innerWidth, window.innerHeight, uO(), JB ? (0, vB.M)(OB) : 0);
      (0, vB.Q)({
        ...oB,
        classes: jB
      }, {
        vars: yB,
        safe: yB,
        classes: yB
      }), yB.style.setProperty("--preview-joystick-shift-left", `${MB[3]}px`), yB.style.setProperty("--preview-joystick-shift-bottom", `${MB[2]}px`), yB.style.setProperty("--preview-joystick-scale", String(QB[2])), (0, RO.f)(yB, OB, GB, YB);
      for (const PB of dO) yB.style.setProperty(PB, BB.documentElement.style.getPropertyValue(PB) || "0px")
    }

    function uO() {
      return (0, vB.J)(MB.c.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function mO(BB) {
      return (0, vB.q)(uO(), (0, vB.M)(BB))
    }

    function IO(BB, OB, GB) {
      const YB = BB.documentElement.style,
        DB = (0, vB.G)(OB),
        QB = YB.getPropertyValue(DB);
      try {
        return GB((BB => {
          YB.setProperty(DB, String(BB))
        }))
      } finally {
        "" === QB ? YB.removeProperty(DB) : YB.setProperty(DB, QB)
      }
    }

    function FO(BB, OB) {
      const [GB, YB] = IO(BB, "hotbar", (OB => {
        const GB = GB => {
          var YB, DB;
          return OB(GB), null !== (YB = null === (DB = BB.querySelector(".HotBarGameItemsContainer")) || void 0 === DB ? void 0 : DB.getBoundingClientRect().width) && void 0 !== YB ? YB : 0
        };
        return [GB(1), GB(mB.j)]
      }));
      return GB <= 0 ? mB.j : Math.min(mB.j, Math.max(1, Math.floor(YB / GB / OB + 1e-6) * OB))
    }
    const iO = 3,
      LO = .5,
      gO = BB => BB.right - BB.left;
    const rO = (BB, OB) => Math.abs((0, bB.d)(BB).x - (0, bB.d)(OB).x) + Math.abs((0, bB.d)(BB).y - (0, bB.d)(OB).y) + Math.abs(gO(BB) - gO(OB));

    function XO(BB, OB, GB, YB, DB) {
      let {
        canKeep: QB = () => !0,
        passes: oB = iO,
        before: jB
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const yB = OB.hudLayouts[GB].hudLocked.filter(QB);
      if (0 === yB.length) return OB;
      const JB = [...uB.b].filter((YB => !yB.includes(YB) && (0, mB.C)(BB, GB, YB).join() === (0, mB.C)(OB, GB, YB).join())),
        MB = BB => {
          const OB = (0, bB.Q)(JB.flatMap((OB => BB[OB] ? [BB[OB]] : [])));
          return {
            ...BB,
            cluster: null !== OB && void 0 !== OB ? OB : void 0
          }
        };
      let PB = null;
      const zB = BB => {
          PB = BB;
          const OB = DB(BB);
          return OB && {
            ...OB,
            boxes: MB(OB.boxes)
          }
        },
        lB = jB ? {
          ...jB,
          boxes: MB(jB.boxes)
        } : zB(BB),
        pB = lB && zB(OB);
      if (!lB || !pB) return OB;
      const qB = lB.boxes;
      let ZB = pB.boxes;
      const NB = lB.keysAbove !== pB.keysAbove,
        RB = NB || Boolean(lB.shopAlone) !== Boolean(pB.shopAlone),
        WB = new Set(yB.filter((BB => !(0, uB.y)(BB) || !("bag" === BB ? NB : RB))));
      let AB = OB;
      for (let nB = 0; nB < oB && WB.size > 0; nB++) {
        var VB, SB;
        const BB = new Map;
        for (const OB of WB) {
          const DB = qB[OB],
            QB = ZB[OB],
            oB = DB && QB ? wO(OB, (0, mB.C)(AB, GB, OB), DB, QB, YB) : null;
          oB ? BB.set(OB, oB) : WB.delete(OB)
        }
        if (0 === BB.size) break;
        let DB = AB;
        for (const [OB, YB] of BB) DB = (0, mB.ib)(DB, GB, OB, YB);
        const QB = null === (VB = zB(DB)) || void 0 === VB ? void 0 : VB.boxes;
        if (!QB) return OB;
        let oB = AB;
        for (const [OB, YB] of BB) {
          const BB = QB[OB];
          BB && rO(qB[OB], BB) < rO(qB[OB], ZB[OB]) - LO ? oB = (0, mB.ib)(oB, GB, OB, YB) : WB.delete(OB)
        }
        if (oB === AB) break;
        const jB = [...BB.keys()].every((BB => WB.has(BB)));
        AB = jB ? DB : oB;
        const yB = jB ? QB : null === (SB = zB(AB)) || void 0 === SB ? void 0 : SB.boxes;
        if (!yB) return OB;
        ZB = yB
      }
      return PB !== AB && DB(AB), AB
    }

    function wO(BB, OB, GB, YB, DB) {
      let [QB, oB, jB] = OB;
      const yB = mB.x[BB],
        JB = {};
      yB.scale && gO(YB) > 0 && Math.abs(gO(GB) - gO(YB)) > LO && (JB.scale = Math.max(mB.l, Math.min(mB.j, jB * gO(GB) / gO(YB))));
      const MB = (0, bB.d)(GB).x - (0, bB.d)(YB).x,
        PB = (0, bB.d)(GB).y - (0, bB.d)(YB).y;
      return yB.move && (Math.abs(MB) > LO || Math.abs(PB) > LO) && (JB.dx = QB + MB / DB.width, JB.dy = oB + PB / DB.height), void 0 === JB.scale && void 0 === JB.dx ? null : JB
    }
    let EO = 0;

    function cO() {
      return EO > 0
    }
    const hO = BB => 0 === BB.dx && 0 === BB.dy,
      aO = .001,
      eO = BB => Math.abs(BB.dx) >= 5e-4 || Math.abs(BB.dy) >= 5e-4 ? BB : {
        dx: BB.dx,
        dy: BB.dy < 0 ? -.001 : aO
      };

    function TO(BB) {
      let {
        preview: OB,
        stageRef: GB,
        ringRef: YB,
        centreLineRef: QB,
        snapCentre: oB,
        ready: jB,
        measure: yB,
        k: JB,
        viewport: MB,
        boxes: PB,
        pieces: zB,
        selected: lB,
        insets: pB,
        layout: qB,
        canMove: ZB,
        onSelect: NB,
        onMove: RB
      } = BB;
      const WB = (0, DB.useRef)(null),
        AB = (0, DB.useCallback)((() => null !== WB.current), []),
        VB = (BB, OB) => {
          if (!OB) return null;
          const GB = (0, bB.d)(BB.origin),
            YB = (0, bB.d)(OB),
            DB = (BB.to.dx - BB.from.dx) * MB.width,
            QB = (BB.to.dy - BB.from.dy) * MB.height,
            oB = OB.right - OB.left,
            jB = OB.bottom - OB.top;
          return {
            skew: {
              x: YB.x - GB.x - DB,
              y: YB.y - GB.y - QB
            },
            box: {
              left: GB.x - oB / 2,
              top: GB.y - jB / 2,
              right: GB.x + oB / 2,
              bottom: GB.y + jB / 2
            }
          }
        },
        SB = (BB, GB) => {
          var DB;
          const oB = WB.current;
          if (!oB || oB.pointerId !== BB.pointerId) return;
          WB.current = null, null === (DB = QB.current) || void 0 === DB || DB.classList.remove("Shown", "Snapped");
          const jB = YB.current;
          if (jB && null !== oB.ringStyle && jB.setAttribute("style", oB.ringStyle), GB && oB.moved) {
            const BB = hO(oB.to) ? null : yB(oB.id),
              OB = BB ? (0, bB.N)(BB, (0, bB.K)(MB.width, MB.height, pB)) : {
                x: 0,
                y: 0
              },
              GB = {
                dx: oB.to.dx + OB.x / MB.width,
                dy: oB.to.dy + OB.y / MB.height
              },
              YB = hO(oB.to) ? GB : eO(GB);
            RB(oB.id, YB.dx, YB.dy)
          } else OB(oB.id, null), GB && oB.tapPick && NB(oB.tapPick)
        };
      return {
        busy: AB,
        handlers: {
          onPointerDown: BB => {
            var OB;
            if (!jB || WB.current || !BB.target.closest(".HudPreviewHandle")) return;
            const YB = GB.current.getBoundingClientRect(),
              DB = {
                x: (BB.clientX - YB.left) / JB,
                y: (BB.clientY - YB.top) / JB
              },
              QB = (0, bB.D)(DB, zB, 40 / JB),
              oB = null !== lB ? uB.m.get(lB) : void 0,
              yB = void 0 !== oB && null !== (0, bB.D)(DB, zB.filter((BB => {
                let {
                  id: OB
                } = BB;
                return oB.has(OB)
              })), 40 / JB),
              MB = "menu" === lB && void 0 !== PB.menu && (0, bB.f)(PB.menu, DB) && ("menu" === QB || null !== QB && (0, HB.y)(QB, qB.hudElements[QB])),
              pB = yB ? lB : MB ? "menu" : null,
              RB = null !== pB,
              AB = null !== pB && void 0 !== pB ? pB : QB;
            if (!AB) return;
            if (function(BB) {
                EO++;
                const OB = GB => {
                  GB.pointerId === BB && (EO = Math.max(0, EO - 1), window.removeEventListener("pointerup", OB, !0), window.removeEventListener("pointercancel", OB, !0))
                };
                window.addEventListener("pointerup", OB, !0), window.addEventListener("pointercancel", OB, !0)
              }(BB.pointerId), !ZB(AB)) return void NB(RB && QB ? QB : AB);
            NB(AB);
            const [VB, SB] = null !== (OB = qB.hudElements[AB]) && void 0 !== OB ? OB : [0, 0], nB = {
              dx: VB,
              dy: SB
            }, UB = {
              skew: {
                x: 0,
                y: 0
              },
              box: PB[AB]
            };
            WB.current = {
              id: AB,
              pointerId: BB.pointerId,
              startX: BB.clientX,
              startY: BB.clientY,
              origin: PB[AB],
              from: nB,
              to: nB,
              moved: !1,
              home: hO(nB) ? {
                centre: (0, bB.d)(PB[AB]),
                anchor: UB
              } : null,
              away: hO(nB) ? null : UB,
              anchor: UB,
              ringStyle: null,
              tapPick: RB ? QB : null
            }, BB.currentTarget.setPointerCapture(BB.pointerId)
          },
          onPointerMove: BB => {
            const GB = WB.current;
            if (!GB || GB.pointerId !== BB.pointerId) return;
            const DB = BB.clientX - GB.startX,
              jB = BB.clientY - GB.startY;
            if (!GB.moved && Math.hypot(DB, jB) < 5) return;
            const PB = !GB.moved;
            var zB, lB;
            (GB.moved = !0, PB) && (GB.ringStyle = null !== (zB = null === (lB = YB.current) || void 0 === lB ? void 0 : lB.getAttribute("style")) && void 0 !== zB ? zB : null);
            const qB = (0, bB.K)(MB.width, MB.height, pB);
            if (!GB.home) {
              var ZB;
              GB.to = {
                dx: 0,
                dy: 0
              }, OB(GB.id, GB.to);
              const BB = yB(GB.id),
                YB = null !== (ZB = VB(GB, BB)) && void 0 !== ZB ? ZB : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: GB.origin
                },
                DB = (0, bB.d)(GB.origin);
              GB.home = {
                centre: BB ? (0, bB.d)(BB) : {
                  x: DB.x - GB.from.dx * MB.width,
                  y: DB.y - GB.from.dy * MB.height
                },
                anchor: YB
              }
            }
            const NB = GB.home;
            let RB = !1;
            const AB = BB => {
                RB = !1;
                let YB = (0, bB.r)(BB.box, DB / JB, jB / JB, qB);
                const QB = MB.width / 2;
                if (oB && Math.abs((0, bB.d)(GB.origin).x + YB.x - QB) <= 8 / JB) {
                  const OB = QB - (0, bB.d)(GB.origin).x,
                    DB = (0, bB.r)(BB.box, OB, YB.y, qB);
                  RB = Math.abs(DB.x - OB) < .01, RB && (YB = DB)
                }
                const yB = (0, bB.A)(GB.from, YB.x - BB.skew.x, YB.y - BB.skew.y, MB.width, MB.height);
                GB.to = eO(yB), GB.anchor = BB, OB(GB.id, GB.to)
              },
              SB = (0, bB.r)(NB.anchor.box, DB / JB, jB / JB, qB),
              nB = QB.current,
              UB = (0, bB.d)(GB.origin),
              fB = ((0, mB.R)(GB.id) ? 20 : 6) / JB;
            if (Math.abs(UB.x + SB.x - NB.centre.x) <= fB && Math.abs(UB.y + SB.y - NB.centre.y) <= fB) GB.to = {
              dx: 0,
              dy: 0
            }, GB.anchor = NB.anchor, RB = oB && Math.abs(NB.centre.x - MB.width / 2) < 1, OB(GB.id, GB.to);
            else if (GB.away) AB(GB.away);
            else {
              var kB;
              AB(NB.anchor), GB.away = null !== (kB = VB(GB, yB(GB.id))) && void 0 !== kB ? kB : NB.anchor, AB(GB.away)
            }
            null === nB || void 0 === nB || nB.classList.add("Shown"), null === nB || void 0 === nB || nB.classList.toggle("Snapped", RB), (BB => {
              const OB = YB.current;
              if (OB) {
                const {
                  skew: GB,
                  box: YB
                } = BB.anchor;
                OB.style.left = YB.left * JB + "px", OB.style.top = YB.top * JB + "px", OB.style.width = (YB.right - YB.left) * JB + "px", OB.style.height = (YB.bottom - YB.top) * JB + "px", OB.style.translate = `${((BB.to.dx-BB.from.dx)*MB.width+GB.x)*JB}px ${((BB.to.dy-BB.from.dy)*MB.height+GB.y)*JB}px`
              }
            })(GB)
          },
          onPointerUp: BB => {
            SB(BB, !0)
          },
          onPointerCancel: BB => {
            SB(BB, !1)
          }
        }
      }
    }
    var bO = GB(9570);

    function CO(BB, OB) {
      return Object.keys(BB).filter((BB => BB !== OB)).map((OB => BB[OB]))
    }

    function HO(BB) {
      return BB.map((BB => {
        let {
          id: OB,
          box: GB
        } = BB;
        return `${OB}:${GB.left},${GB.top},${GB.right},${GB.bottom}`
      })).join(";")
    }

    function vO(BB) {
      const OB = [],
        GB = OB => (0, mB.R)(OB) && !BB.documentElement.classList.contains((0, vB.y)(OB));
      for (const jB of BB.querySelectorAll(`[${uB.d}]`)) {
        const BB = GB(jB.getAttribute(uB.d)) ? jB.querySelector(".ScaleOnHover") : null,
          YB = (null !== BB && void 0 !== BB ? BB : jB).getBoundingClientRect();
        (YB.width > 0 || YB.height > 0) && OB.push({
          id: jB.getAttribute(uB.d),
          box: (0, bB.h)(YB)
        })
      }
      const YB = BB => (0, bB.Q)(OB.filter((OB => {
          let {
            id: GB
          } = OB;
          return BB(GB)
        })).map((BB => {
          let {
            box: OB
          } = BB;
          return OB
        }))),
        DB = {};
      for (const jB of new Set(OB.map((BB => BB.id)))) DB[jB] = YB((BB => BB === jB));
      for (const [jB, yB] of uB.m) {
        const BB = YB((BB => yB.has(BB)));
        BB && (DB[jB] = BB)
      }
      const QB = BB.querySelector(".TouchInventoryKeys"),
        oB = QB ? (0, bB.h)(QB.getBoundingClientRect()) : null;
      return {
        boxes: DB,
        pieces: OB,
        pairHome: oB
      }
    }

    function sO(BB, OB, GB) {
      const YB = OB.right - OB.left,
        DB = OB.bottom - OB.top;
      return IO(BB, "cluster", (OB => {
        const QB = GB => {
            OB(GB);
            const YB = [...BB.querySelectorAll(`[${uB.d}]:not(.HudPreviewGhost)`)].filter((BB => uB.b.has(BB.getAttribute(uB.d)))).map((BB => (0, bB.h)(BB.getBoundingClientRect()))),
              DB = (0, bB.Q)(YB);
            return DB ? {
              w: DB.right - DB.left,
              h: DB.bottom - DB.top
            } : null
          },
          oB = BB => !BB || BB.w <= YB && BB.h <= DB,
          jB = QB(1),
          yB = QB(mB.j);
        if (!jB || oB(yB)) return mB.j;
        const JB = (BB, OB, GB) => OB > BB ? 1 + (GB - BB) * (mB.j - 1) / (OB - BB) : mB.j;
        let MB = Math.floor(Math.min(mB.j, JB(jB.w, yB.w, YB), JB(jB.h, yB.h, DB)) / GB + 1e-6) * GB;
        for (; MB > 1 && !oB(QB(MB));) MB = Math.round(100 * (MB - GB)) / 100;
        return Math.max(1, MB)
      }))
    }

    function xO(BB) {
      kO(document, BB, {
        keysAbove: !1
      });
      const OB = parseFloat(getComputedStyle(BB.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        GB = Number.isFinite(OB) && OB < 0;
      return kO(document, BB, {
        keysAbove: GB
      }), (0, bO.d)(BB), GB
    }

    function tO(BB) {
      const OB = BB.querySelector(".TouchInventoryKey.ShopKey");
      return null !== OB && "1" === getComputedStyle(OB).getPropertyValue("--touch-shop-above").trim()
    }

    function BG(BB, OB) {
      let {
        layout: GB,
        orientation: YB,
        viewport: QB,
        replicaKey: oB,
        joystickFixed: jB,
        busy: yB
      } = OB;
      const [JB, MB] = (0, DB.useState)(null), [PB, zB] = (0, DB.useState)({
        boxes: {},
        pieces: []
      }), [lB, pB] = (0, DB.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [qB, ZB] = (0, DB.useState)(!1), [NB, RB] = (0, DB.useState)(!1), [WB, AB] = (0, DB.useState)(!1), VB = (0, DB.useCallback)((BB => {
        RB(BB), BB && AB(!0)
      }), []), SB = GB.hudLayouts[YB].hudSafe;
      (0, DB.useLayoutEffect)((() => {
        const OB = BB.current.contentDocument;
        OB.open(), OB.write("<!DOCTYPE html><html><head></head><body></body></html>"), OB.close(), MB(OB)
      }), [BB]);
      const nB = (0, DB.useCallback)((() => {
          JB && ((0, HB.z)(JB), zB(vO(JB)), pB(function(BB, OB) {
            const GB = mO(BB),
              [YB, DB, QB, oB] = OB ? (0, vB.r)(OB, window.innerWidth, window.innerHeight, GB) : GB;
            return {
              top: YB,
              right: DB,
              bottom: QB,
              left: oB
            }
          }(JB, SB)))
        }), [JB, SB]),
        UB = (0, DB.useCallback)((() => {
          JB && ZB(xO(JB))
        }), [JB]),
        fB = (0, DB.useRef)((() => {}));
      return fB.current = () => {
        UB(), yB() || nB()
      }, (0, DB.useLayoutEffect)((() => {
        if (JB) return fO(document, JB, (() => {
          fB.current()
        }), VB)
      }), [JB, VB]), (0, DB.useLayoutEffect)(UB, [UB, QB]), (0, DB.useLayoutEffect)((() => {
        JB && (kO(document, JB, {
          keysAbove: qB
        }), KO(document, JB, GB, YB, jB), UB(), nB())
      }), [JB, GB, YB, qB, oB, jB, QB, nB, UB]), (0, DB.useEffect)((() => {
        var BB;
        if (!JB) return;
        const OB = new ResizeObserver((() => {
          yB() || nB()
        }));
        for (const GB of JB.querySelectorAll(`[${uB.d}]`)) OB.observe(GB);
        return null === (BB = JB.fonts) || void 0 === BB || BB.ready.then(nB), () => {
          OB.disconnect()
        }
      }), [JB, nB, yB, oB]), {
        doc: JB,
        boxes: PB.boxes,
        pieces: PB.pieces,
        insets: lB,
        keysAbove: qB,
        ready: NB,
        settled: WB
      }
    }
    const OG = ["Above", "Below", "Left", "Right"];

    function GG(BB, OB, GB, YB, DB) {
      const QB = GB[BB],
        oB = (QB.left + QB.right) / 2,
        jB = (QB.top + QB.bottom) / 2,
        yB = (7.5 * OB.length + 14) / YB,
        JB = 18 / YB,
        MB = {
          Above: {
            left: oB - yB / 2,
            top: QB.top - JB,
            right: oB + yB / 2,
            bottom: QB.top
          },
          Below: {
            left: oB - yB / 2,
            top: QB.bottom,
            right: oB + yB / 2,
            bottom: QB.bottom + JB
          },
          Left: {
            left: QB.left - yB,
            top: jB - JB / 2,
            right: QB.left,
            bottom: jB + JB / 2
          },
          Right: {
            left: QB.right,
            top: jB - JB / 2,
            right: QB.right + yB,
            bottom: jB + JB / 2
          }
        },
        PB = CO(GB, BB),
        zB = {
          left: 0,
          top: 0,
          right: DB.width,
          bottom: DB.height
        };
      return OG[(0, bB.x)(OG.map((BB => MB[BB])), PB, {
        bounds: zB
      })]
    }

    function YG() {
      const [BB, OB] = (0, eB.e)();
      return (0, DB.useMemo)((() => ({
        width: BB,
        height: OB
      })), [BB, OB])
    }

    function DG(BB) {
      var OB;
      const {
        layout: GB,
        orientation: QB,
        selected: oB,
        onSelect: jB,
        onMove: JB,
        canMove: MB,
        actionButtons: PB,
        joystickFixed: zB,
        presence: lB,
        keyNames: qB,
        maxHeight: ZB,
        fill: NB = !1,
        apiRef: RB
      } = BB, {
        t: WB
      } = (0, YB.H)(), AB = YG(), SB = (null !== (OB = (0, pB.g)("maxAuraLevel")) && void 0 !== OB ? OB : 0) > 0, nB = GB.hudLayouts[QB], UB = (0, DB.useRef)(null), fB = (0, DB.useRef)(null), kB = (0, DB.useRef)(null), dB = (0, DB.useRef)(null), IB = (0, DB.useRef)(null), FB = (0, DB.useRef)(null), iB = (0, TB.e)(UB).width, LB = NB ? 1 : iB > 0 ? (0, bB.H)(iB, AB.width, AB.height, ZB) : 0, gB = (0, DB.useRef)((() => !1)), rB = (0, DB.useCallback)((() => gB.current()), []), XB = `${PB}:${zB}:${SB}`, {
        doc: wB,
        boxes: EB,
        pieces: cB,
        insets: aB,
        keysAbove: eB,
        ready: sB,
        settled: xB
      } = BG(kB, {
        layout: GB,
        orientation: QB,
        viewport: AB,
        replicaKey: XB,
        joystickFixed: zB,
        busy: rB
      }), tB = (0, DB.useCallback)((BB => {
        wB && KO(document, wB, BB, QB, zB)
      }), [wB, QB, zB]), BO = (0, DB.useCallback)((BB => {
        if (!wB || !xB) return null;
        tB(BB);
        const OB = xO(wB),
          GB = function(BB, OB) {
            let {
              boxes: GB,
              pieces: YB,
              pairHome: DB
            } = BB;
            const QB = YB.find((BB => uB.j.has(BB.id)));
            if (!QB || !DB) return GB;
            const oB = (0, bB.d)(DB),
              jB = OB(QB.id),
              yB = gO(QB.box) / jB / 2,
              JB = (QB.box.bottom - QB.box.top) / jB / 2;
            return {
              ...GB,
              inventory: {
                left: oB.x - yB,
                top: oB.y - JB,
                right: oB.x + yB,
                bottom: oB.y + JB
              }
            }
          }(vO(wB), (OB => (0, mB.C)(BB, QB, OB)[2]));
        return {
          boxes: GB,
          keysAbove: OB,
          shopAlone: tO(wB)
        }
      }), [wB, xB, tB, QB]), OO = (0, DB.useRef)(null), GO = (0, DB.useRef)(null), YO = (0, DB.useRef)(GB);
      YO.current = GB;
      const DO = (0, DB.useCallback)((() => {
        null !== OO.current && (cancelAnimationFrame(OO.current), OO.current = null)
      }), []);
      (0, DB.useEffect)((() => DO), [GB, DO]);
      const QO = (0, DB.useRef)(-1 / 0),
        {
          lockable: oO
        } = BB,
        jO = (0, DB.useCallback)((BB => {
          if (tB(BB), QO.current = performance.now(), !xB || 0 === GB.hudLayouts[QB].hudLocked.length) return;
          const OB = GB;
          DO(), OO.current = requestAnimationFrame((() => {
            var GB;
            if (OO.current = null, YO.current !== OB) return;
            const YB = (null === (GB = GO.current) || void 0 === GB ? void 0 : GB.from) === OB ? GO.current.measured : BO(OB);
            YB && (GO.current = {
              from: OB,
              measured: YB
            }), tB(YB ? XO(OB, BB, QB, AB, BO, {
              canKeep: oO,
              passes: 1,
              before: YB
            }) : BB)
          }))
        }), [tB, xB, GB, QB, AB, BO, oO, DO]),
        yO = TO({
          preview: (BB, OB) => {
            OB ? jO((0, mB.ib)(GB, QB, BB, OB)) : (DO(), tB(GB))
          },
          stageRef: fB,
          ringRef: dB,
          centreLineRef: IB,
          snapCentre: GB.hudSnapCentre,
          ready: xB,
          measure: BB => {
            const OB = wB && sB ? vO(wB).boxes[BB] : void 0;
            return OB && (0, bB.k)(OB, AB.width, AB.height) ? OB : null
          },
          k: LB,
          viewport: AB,
          boxes: EB,
          pieces: cB,
          selected: oB,
          insets: aB,
          layout: nB,
          canMove: MB,
          onSelect: jB,
          onMove: (BB, OB, GB) => {
            DO(), JB(BB, OB, GB)
          }
        });
      (0, DB.useLayoutEffect)((() => {
        gB.current = yO.busy
      }), [yO.busy]);
      const JO = (0, DB.useRef)([]),
        MO = (0, DB.useRef)(nB.hudElements);
      (0, DB.useEffect)((() => {
        for (const DB of Object.keys(nB.hudElements)) {
          var BB, OB, GB, YB;
          (null !== (BB = null === (OB = nB.hudElements[DB]) || void 0 === OB ? void 0 : OB[2]) && void 0 !== BB ? BB : 1) > (null !== (GB = null === (YB = MO.current[DB]) || void 0 === YB ? void 0 : YB[2]) && void 0 !== GB ? GB : 1) && MB(DB) && !(0, HB.y)(DB, nB.hudElements[DB]) && JO.current.push(...(0, uB.D)(DB, eB, MB))
        }
        MO.current = nB.hudElements
      }), [nB.hudElements, MB, eB]), (0, DB.useEffect)((() => {
        if (!sB) return;
        const BB = (0, bB.K)(AB.width, AB.height, aB);
        for (const GB of (0, uB.C)(JO.current.splice(0), EB, BB, MB)) {
          const YB = EB[GB];
          if (!YB || yO.busy() || !(0, bB.k)(YB, AB.width, AB.height)) continue;
          const DB = (0, bB.N)(YB, BB);
          if (0 !== DB.x || 0 !== DB.y) {
            var OB;
            const [BB, YB] = null !== (OB = nB.hudElements[GB]) && void 0 !== OB ? OB : [0, 0];
            JB(GB, BB + DB.x / AB.width, YB + DB.y / AB.height)
          }
        }
      }), [EB, sB]), (0, DB.useImperativeHandle)(RB, (() => ({
        setScale: (BB, OB) => {
          jO((0, mB.ib)(GB, QB, BB, {
            scale: OB
          }))
        },
        setOpacity: BB => {
          tB({
            ...GB,
            hudKeyOpacity: BB
          })
        },
        keepLocks: (BB, OB) => (DO(), XO(BB, OB, QB, AB, BO, {
          canKeep: oO
        })),
        setSafe: BB => {
          const OB = (0, vB.r)(BB, AB.width, AB.height, mO(null !== wB && void 0 !== wB ? wB : document));
          jO((0, mB.kb)(GB, QB, BB)), FB.current && (FB.current.style.inset = OB.map((BB => BB * LB + "px")).join(" "))
        }
      })), [tB, jO, BO, DO, oO, wB, GB, QB, AB, LB]);
      const PO = new Set(Object.keys(nB.hudElements).filter((BB => (0, mB.t)(nB.hudElements, BB)))),
        zO = oB ? EB[oB] : void 0,
        pO = oB ? (0, uB.v)(oB, PB, WB, qB) : "",
        ZO = (0, NO.e)(AB.width, AB.height),
        RO = oB ? (0, CB.f)(oB, cB, nB, ZO) : [],
        WO = new Set((0, HB.t)(nB.hudElements)),
        AO = (0, HB.F)(nB, (0, HB.C)(lB.rowIcons)).state,
        VO = RO.join(),
        SO = (0, DB.useRef)(BB.onReady);
      SO.current = BB.onReady, (0, DB.useEffect)((() => {
        var BB;
        null === (BB = SO.current) || void 0 === BB || BB.call(SO, xB)
      }), [xB]);
      const nO = (0, DB.useRef)(BB.onMeasured);
      (0, DB.useLayoutEffect)((() => {
        nO.current = BB.onMeasured
      }));
      const UO = (0, DB.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        fO = [HO(cB), AB.width, AB.height, aB.top, aB.right, aB.bottom, aB.left, sB, XB].join("|");
      (0, DB.useEffect)((() => {
        const BB = VO ? VO.split(",") : [],
          OB = () => {
            var OB;
            null === (OB = nO.current) || void 0 === OB || OB.call(nO, EB, BB, UO.current.caps)
          };
        let GB;
        const YB = () => {
          const BB = YO.current;
          if (!wB || BB === UO.current.layout && fO === UO.current.input) return !1;
          const DB = QO.current + 250 - performance.now();
          return BB === UO.current.layout && (DB > 0 || rB()) ? (GB = setTimeout((() => {
            YB() && OB()
          }), Math.max(DB, 62.5)), !1) : (UO.current = {
            layout: BB,
            input: fO,
            caps: {
              hotbar: FO(wB, qO),
              cluster: sO(wB, (0, bB.K)(AB.width, AB.height, aB), qO)
            }
          }, !0)
        };
        return YB(), OB(), () => {
          clearTimeout(GB)
        }
      }), [EB, VO, wB, AB, aB, fO, rB]);
      const kO = BB => ({
        left: BB.left * LB,
        top: BB.top * LB,
        width: (BB.right - BB.left) * LB,
        height: (BB.bottom - BB.top) * LB
      });
      return (0, VB.jsx)("div", {
        ref: UB,
        className: yB()("HudPreviewBox", {
          Fill: NB
        }),
        style: {
          height: AB.height * LB
        },
        children: (0, VB.jsxs)("div", {
          ref: fB,
          className: "HudPreviewStage",
          style: {
            width: AB.width * LB,
            height: AB.height * LB
          },
          children: [(0, VB.jsx)("iframe", {
            ref: kB,
            className: "HudPreviewFrame",
            title: WB("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: AB.width,
              height: AB.height,
              transform: `scale(${LB})`
            }
          }), wB && (0, hB.createPortal)((0, VB.jsx)(lO, {
            presence: lB,
            portraitPhone: ZO,
            hidden: PO,
            actionButtons: PB,
            joystickFixed: zB,
            keysAbove: eB,
            auraBar: SB,
            trayState: AO,
            moved: WO
          }), wB.body), (0, VB.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...yO.handlers,
            children: [(0, VB.jsx)("div", {
              ref: FB,
              className: "HudPreviewSafeZone",
              style: {
                top: aB.top * LB,
                right: aB.right * LB,
                bottom: aB.bottom * LB,
                left: aB.left * LB
              }
            }), cB.map(((BB, OB) => {
              let {
                id: GB,
                box: YB
              } = BB;
              return (0, VB.jsx)("div", {
                className: "HudPreviewHandle",
                style: kO((0, bB.v)(YB, 40 / LB))
              }, `${GB}:${OB}`)
            })), nB.hudLocked.map((BB => {
              const OB = EB[BB];
              return OB && (0, VB.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: OB.right * LB,
                  top: OB.top * LB
                },
                children: (0, VB.jsx)(KB.b, {
                  name: "lock"
                })
              }, BB)
            })), (0, VB.jsx)("div", {
              ref: IB,
              className: "HudPreviewCentreLine",
              style: {
                left: AB.width / 2 * LB
              }
            }), oB && zO && (0, VB.jsx)("div", {
              ref: dB,
              className: yB()("HudPreviewRing", {
                Fixed: !MB(oB),
                Overlap: RO.length > 0
              }),
              style: kO(zO),
              children: (0, VB.jsx)("span", {
                className: yB()("HudPreviewRingLabel", GG(oB, pO, EB, LB, AB)),
                children: pO
              })
            })]
          })]
        })
      })
    }

    function QG(BB, OB) {
      (0, DB.useEffect)((() => {
        var GB;
        null === (GB = BB.current) || void 0 === GB || GB.toggleAttribute("inert", OB)
      }), [BB, OB])
    }
    const oG = "hudFullScreen";

    function jG(BB) {
      let {
        onScale: OB,
        onHidden: GB,
        onReset: QB,
        locked: oB,
        lockable: jB,
        onLocked: yB,
        onClose: MB,
        ...PB
      } = BB;
      const {
        t: zB
      } = (0, YB.H)(), lB = (0, DB.useRef)(null);
      (0, aB.v)("popup", lB, MB),
      function(BB) {
        const OB = (0, DB.useRef)(BB);
        OB.current = BB, (0, DB.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [oG]: !0
          }, "");
          let BB = !1;
          const GB = () => {
            BB = !0, OB.current()
          };
          return window.addEventListener("popstate", GB), () => {
            var OB;
            window.removeEventListener("popstate", GB), !BB && null !== (OB = window.history.state) && void 0 !== OB && OB[oG] && window.history.back()
          }
        }), [])
      }(MB), (0, DB.useEffect)((() => {
        function BB(BB) {
          "Escape" === BB.key && (BB.stopPropagation(), MB())
        }
        return window.addEventListener("keydown", BB, !0), () => {
          window.removeEventListener("keydown", BB, !0)
        }
      }), [MB]);
      const {
        selected: pB
      } = PB, qB = (0, DB.useRef)(null), ZB = (0, DB.useRef)(null), [NB, RB] = (0, DB.useState)(!1);
      QG(ZB, !NB);
      const [WB, AB] = (0, DB.useState)(null), [SB, nB] = (0, DB.useState)([]), [UB, fB] = pO(), kB = (0, DB.useRef)(PB.selected);
      kB.current = PB.selected;
      const dB = (0, DB.useRef)({}),
        KB = (0, DB.useCallback)((() => {
          const BB = qB.current;
          BB && AB(function(BB, OB, GB) {
            var YB;
            const {
              innerWidth: DB,
              innerHeight: QB
            } = window, oB = BB.offsetWidth, jB = BB.offsetHeight, yB = Math.max(uO()[0], 6), JB = [];
            for (const zB of [yB, .2 * QB, .5 * QB - jB / 2, .33 * QB])
              for (const BB of [.5, .3, .7]) JB.push({
                left: Math.max(0, Math.min(DB - oB - 6, Math.max(6, DB * BB - oB / 2))),
                top: zB
              });
            const MB = JB.map((BB => ({
                left: BB.left - 6,
                top: BB.top - 6,
                right: BB.left + oB + 6,
                bottom: BB.top + jB + 6
              }))),
              PB = CO(OB, GB);
            return JB[(0, bB.x)(MB, PB, {
              avoid: GB && null !== (YB = OB[GB]) && void 0 !== YB ? YB : null
            })]
          }(BB, dB.current, kB.current))
        }), []),
        uB = (0, DB.useCallback)(((BB, OB, GB) => {
          nB(OB), fB(GB), dB.current = BB, KB()
        }), [KB, fB]);
      return (0, DB.useLayoutEffect)(KB, [PB.selected, KB]), (0, hB.createPortal)((0, VB.jsxs)("div", {
        ref: lB,
        className: "HudFullScreenEditor",
        children: [(0, VB.jsx)(DG, {
          ...PB,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: uB,
          onReady: RB,
          lockable: jB
        }), (0, VB.jsxs)("div", {
          ref: qB,
          className: "HudFullScreenToolbar",
          style: null === WB ? void 0 : {
            left: WB.left,
            top: WB.top,
            transform: "none"
          },
          children: [(0, VB.jsx)("div", {
            ref: ZB,
            className: "HudFullScreenControls",
            children: (0, VB.jsx)(ZO, {
              selected: pB,
              layout: PB.layout.hudLayouts[PB.orientation],
              actionButtons: PB.actionButtons,
              keyNames: PB.keyNames,
              overlaps: SB,
              scaleCaps: UB,
              onScale: OB,
              onHidden: GB,
              onReset: QB,
              locked: oB,
              lockable: jB,
              onLocked: yB,
              joystickFixed: PB.joystickFixed
            })
          }), (0, VB.jsx)(JB.f, {
            className: "HudFullScreenDone",
            onClick: MB,
            padDefaultFocus: !0,
            children: zB("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const yG = BB => `${Math.round(100*BB)}%`;

    function JG(BB) {
      let {
        info: OB,
        tuple: GB,
        props: DB
      } = BB;
      const {
        t: QB
      } = (0, YB.H)();
      return (0, VB.jsx)(lB.f, {
        name: QB("hudLayout:size"),
        min: mB.l,
        max: mB.j,
        step: qO,
        initValue: GB[2],
        disabled: DB.locked.has(OB.id),
        selectableMax: DB.scaleCaps[OB.id],
        cappedNote: QB("hudLayout:sizeCapped"),
        format: yG,
        onChange: BB => {
          DB.onScalePreview(OB.id, BB)
        },
        onChangeComplete: BB => {
          DB.onScale(OB.id, BB)
        }
      })
    }

    function MG(BB) {
      const {
        t: OB
      } = (0, YB.H)(), {
        present: GB,
        elements: QB,
        selected: oB,
        onSelect: jB,
        onHidden: JB,
        onReset: MB,
        note: PB,
        actionButtons: zB,
        keyNames: lB,
        sizeBesidePreview: pB,
        locked: qB,
        lockable: ZB,
        onLocked: NB
      } = BB, {
        rowIconsOpen: RB,
        onRowIconsOpen: WB
      } = BB, AB = (0, DB.useRef)(null), SB = null !== oB && (RB || !(0, mB.R)(oB));
      return (0, DB.useEffect)((() => {
        var BB;
        const OB = oB ? null === (BB = AB.current) || void 0 === BB ? void 0 : BB.querySelector(`[data-hud-row="${oB}"]`) : null;
        if (!OB) return;
        const GB = OB.closest(".SettingsMenuRight"),
          YB = performance.now();
        let DB = null;
        const QB = () => {
            clearInterval(yB), null === GB || void 0 === GB || GB.removeEventListener("scroll", jB)
          },
          jB = () => {
            cO() || QB()
          },
          yB = setInterval((() => {
            const BB = performance.now();
            BB - YB > 1500 ? QB() : cO() ? DB = null : null === DB ? DB = BB : BB - DB >= 150 && (QB(), function(BB) {
              var OB;
              const GB = BB.closest(".SettingsMenuRight"),
                YB = null === (OB = BB.closest(".HudLayoutSettings")) || void 0 === OB ? void 0 : OB.querySelector(".HudLayoutPreviewBox");
              if (!GB || !YB) return;
              const DB = YB.getBoundingClientRect().bottom + 8,
                QB = GB.getBoundingClientRect().bottom - 8,
                oB = BB.getBoundingClientRect();
              oB.top < DB ? GB.scrollBy({
                top: oB.top - DB,
                behavior: "smooth"
              }) : oB.bottom > QB && GB.scrollBy({
                top: Math.min(oB.bottom - QB, oB.top - DB),
                behavior: "smooth"
              })
            }(OB))
          }), 50);
        return null === GB || void 0 === GB || GB.addEventListener("scroll", jB, {
          passive: !0
        }), QB
      }), [oB, SB]), (0, VB.jsx)("div", {
        ref: AB,
        className: "SettingBoxGroup HudElementList",
        children: uB.h.filter((BB => GB.has(BB.id) && (RB || !(0, mB.R)(BB.id)))).map((GB => {
          const YB = ((BB, OB) => {
              var GB;
              return null !== (GB = BB[OB]) && void 0 !== GB ? GB : mB.p
            })(QB, GB.id),
            DB = (0, mB.t)(QB, GB.id),
            AB = GB.id === oB,
            SB = GB.scale && !pB,
            nB = PB(GB.id, AB);
          return (0, VB.jsxs)("div", {
            "data-hud-row": GB.id,
            className: yB()("SettingBox HudElementRow", {
              Open: AB,
              Hidden: DB,
              Child: void 0 !== GB.parent,
              Grandchild: (0, uB.q)(GB.id).length > 1
            }),
            children: [(0, VB.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, VB.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": SB ? AB : void 0,
                onClick: () => {
                  jB(GB.id)
                },
                children: (0, VB.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [(0, uB.v)(GB.id, zB, OB, lB), GB.scale && 1 !== YB[2] && !(AB && SB) && (0, VB.jsxs)(VB.Fragment, {
                    children: [" ", (0, VB.jsx)("span", {
                      className: "HudElementRowSize",
                      children: yG(YB[2])
                    })]
                  }), SB && (0, VB.jsxs)(VB.Fragment, {
                    children: [" ", (0, VB.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, VB.jsx)(LB, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: GB.id,
                actionButtons: zB,
                keyNames: lB,
                locked: qB.has(GB.id),
                lockable: ZB(GB.id),
                onLocked: NB
              }), "menu" === GB.id && (0, VB.jsx)(gB, {
                className: "HudElementRowIcon",
                open: RB,
                name: (0, uB.v)(GB.id, zB, OB, lB),
                onToggle: WB
              }), "menu" !== GB.id && (0, VB.jsx)(FB, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: GB.id,
                elements: QB,
                actionButtons: zB,
                keyNames: lB,
                onHidden: JB
              }), (0, VB.jsx)(iB, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: qB.has(GB.id),
                id: GB.id,
                elements: QB,
                actionButtons: zB,
                keyNames: lB,
                onReset: MB
              })]
            }), AB && SB && (0, VB.jsx)(JG, {
              info: GB,
              tuple: YB,
              props: BB
            }), nB && (0, VB.jsx)("div", {
              className: "HudElementNote",
              children: nB
            })]
          }, GB.id)
        }))
      })
    }

    function PG(BB) {
      let {
        preview: OB,
        quick: GB,
        onFullScreen: QB,
        resting: oB,
        onSidePanel: jB
      } = BB;
      const {
        t: yB
      } = (0, YB.H)(), MB = YG(), PB = (0, DB.useRef)(null), {
        width: zB
      } = (0, TB.e)(PB), lB = Math.floor(MB.width * Math.min(1, OB.maxHeight / MB.height)), pB = zB - lB - 12, qB = pB >= 130, ZB = zB > 0;
      (0, DB.useEffect)((() => {
        ZB && jB(qB)
      }), [ZB, qB, jB]);
      const NB = (0, bB.H)(qB ? lB : zB, MB.width, MB.height, OB.maxHeight),
        RB = oB ? (0, VB.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: MB.height * NB
          }
        }) : (0, VB.jsx)(DG, {
          ...OB
        }),
        WB = BB => (0, VB.jsxs)(JB.Z, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: yB("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: QB,
          children: [(0, VB.jsx)(KB.b, {
            name: "expand"
          }), BB && (0, VB.jsx)("span", {
            children: yB("hudLayout:fullScreen")
          })]
        });
      return (0, VB.jsxs)("div", {
        ref: PB,
        className: "SettingBox HudLayoutPreviewBox",
        children: [zB > 0 && qB && (0, VB.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, VB.jsx)("div", {
            style: {
              width: lB
            },
            children: RB
          }), (0, VB.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, VB.jsx)(ZO, {
              selected: OB.selected,
              ...GB,
              joystickFixed: OB.joystickFixed,
              extra: WB(!OB.selected || pB >= 278)
            })
          })]
        }), zB > 0 && !qB && (0, VB.jsxs)(VB.Fragment, {
          children: [RB, (0, VB.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: WB(!1)
          })]
        })]
      })
    }
    var zG = GB(2691),
      lG = GB(4839),
      pG = GB(2675),
      qG = GB(2635);
    const ZG = BB => {
      const OB = vB.m * ("sides" === BB ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(OB / 2))
    };

    function NG(BB, OB, GB) {
      const [YB, DB, QB, oB] = BB;
      return "sides" === OB ? [YB, GB, QB, GB] : [GB, DB, GB, oB]
    }
    const RG = [null, null, null, null],
      WG = BB => `${BB}px`;

    function AG(BB) {
      let {
        safe: OB,
        onPreview: GB,
        onCommit: QB
      } = BB;
      const {
        t: oB
      } = (0, YB.H)(), jB = (0, vB.r)(null !== OB && void 0 !== OB ? OB : RG, window.innerWidth, window.innerHeight, mO(document).map(Math.round)), yB = (0, DB.useRef)(null !== OB && void 0 !== OB ? OB : RG);
      yB.current = null !== OB && void 0 !== OB ? OB : RG;
      const MB = BB => {
        const OB = Math.min(ZG(BB), "sides" === BB ? Math.max(jB[1], jB[3]) : Math.max(jB[0], jB[2]));
        return (0, VB.jsx)(lB.f, {
          name: oB("sides" === BB ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: ZG(BB),
          step: 2,
          initValue: OB,
          format: WG,
          onChange: OB => {
            GB(NG(yB.current, BB, OB))
          },
          onChangeComplete: YB => {
            if (YB === OB) return void GB(yB.current);
            const DB = NG(yB.current, BB, YB);
            yB.current = DB, QB(DB), (0, UB.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: BB
            })
          }
        })
      };
      return (0, VB.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, VB.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, VB.jsx)("div", {
            children: oB("hudLayout:safeZone")
          }), (0, VB.jsx)(JB.Z, {
            active: null === OB,
            pressed: null === OB,
            onClick: () => {
              QB(null)
            },
            children: oB("hudLayout:safeZoneAuto")
          })]
        }), MB("sides"), MB("ends")]
      })
    }

    function VG() {
      const {
        t: BB
      } = (0, YB.H)(), OB = (0, mB.eb)(), {
        clientEscMenuOptions: GB
      } = (0, MB.o)(["clientEscMenuOptions"]), QB = (0, zG.i)(), oB = OB.hudLayouts[QB], [jB, yB] = (0, DB.useState)(null), {
        rowIconsOpen: PB,
        onRowIconsOpen: zB,
        select: pB
      } = function(BB, OB) {
        const [GB, YB] = (0, DB.useState)((() => mB.F.some((OB => void 0 !== BB.hudElements[OB] || BB.hudLocked.includes(OB))))), QB = (0, DB.useCallback)((BB => {
          OB(BB), (0, mB.R)(BB) && YB(!0)
        }), [OB]);
        return {
          rowIconsOpen: GB,
          onRowIconsOpen: YB,
          select: QB
        }
      }(oB, yB), [qB, ZB] = (0, DB.useState)([]), [NB, RB] = (0, DB.useState)(null), [WB, AB] = pO(), SB = (0, DB.useCallback)(((BB, OB, GB) => {
        ZB(OB), AB(GB);
        const YB = Object.keys(BB);
        RB((BB => (null === BB || void 0 === BB ? void 0 : BB.size) === YB.length && YB.every((OB => BB.has(OB))) ? BB : new Set(YB)))
      }), [AB]), {
        gameState: nB
      } = (0, MB.o)(["gameState"]), kB = (0, pG.i)(), dB = (0, qG.s)(), [KB] = (0, DB.useState)((() => {
        var BB, OB, GB, YB;
        return "inGame" === nB ? (0, xB.v)(document, kB, {
          rightOfCamera: null !== (BB = null === (OB = dB.rightOfCamera) || void 0 === OB ? void 0 : OB.icon) && void 0 !== BB ? BB : null,
          leftEnd: null !== (GB = null === (YB = dB.leftEnd) || void 0 === YB ? void 0 : YB.icon) && void 0 !== GB ? GB : null
        }) : xB.b
      })), IB = (0, DB.useRef)(null), FB = (0, DB.useRef)(null), iB = function(BB) {
        const [OB, GB] = (0, DB.useState)((() => .4 * window.innerHeight));
        return (0, DB.useLayoutEffect)((() => {
          var OB;
          const YB = null === (OB = BB.current) || void 0 === OB ? void 0 : OB.closest(".SettingsMenuRight");
          if (!YB) return;
          const DB = () => {
            const BB = YB.clientHeight < SG ? .4 : .5;
            GB(Math.max(80, YB.clientHeight * BB - 24))
          };
          DB();
          const QB = new ResizeObserver(DB);
          return QB.observe(YB), () => {
            QB.disconnect()
          }
        }), [BB]), OB
      }(FB), LB = (0, lG.p)(GB.joystickMode), gB = GB.touchActionButtons, rB = (0, DB.useMemo)((() => (0, xB.t)(KB, gB)), [KB, gB]), XB = (0, DB.useMemo)((() => new Set((0, xB.r)(KB, gB).map((BB => xB.f[BB])))), [KB, gB]);
      (0, DB.useEffect)((() => {
        (0, UB.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [wB, hB] = (0, DB.useState)(!1), [aB, eB] = (0, DB.useState)(!1), TB = (0, DB.useRef)(null);
      QG(TB, !aB);
      const [bB, CB] = (0, DB.useState)(!1), vB = (0, DB.useCallback)((() => {
        CB(!1)
      }), []), sB = (0, DB.useMemo)((() => new Set(oB.hudLocked)), [oB.hudLocked]), tB = BB => {
        var OB, GB;
        const YB = (0, mB.q)(),
          DB = BB(YB);
        (0, mB.ab)(null !== (OB = null === (GB = IB.current) || void 0 === GB ? void 0 : GB.keepLocks(YB, DB)) && void 0 !== OB ? OB : DB)
      }, BO = (BB, OB) => {
        tB((GB => (0, mB.ib)(GB, QB, BB, OB)))
      }, OO = (BB, OB, GB) => {
        BO(BB, {
          dx: OB,
          dy: GB
        }), (0, UB.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${BB}`
        })
      }, GO = (BB, OB) => {
        tB((GB => (0, mB.jb)(GB, QB, BB, OB)))
      }, YO = BB => {
        const OB = uB.g[BB];
        return (OB.move || OB.scale) && ("joystick" !== BB || LB) && !(0, HB.y)(BB, oB.hudElements[BB])
      }, DO = BB => uB.g[BB].move && ("joystick" !== BB || LB) && !sB.has(BB), QO = new Set(uB.h.map((BB => BB.id)).filter((BB => {
        const OB = (0, mB.R)(BB) && !KB.rowIcons.includes(BB);
        return null === NB || NB.has(BB) || (0, mB.t)(oB.hudElements, BB) && !OB
      }))), oO = {
        present: QO,
        actionButtons: gB,
        keyNames: rB,
        scaleCaps: WB,
        sizeBesidePreview: wB,
        elements: oB.hudElements,
        selected: jB,
        onSelect: pB,
        rowIconsOpen: PB,
        onRowIconsOpen: zB,
        onScalePreview: (BB, OB) => {
          var GB;
          null === (GB = IB.current) || void 0 === GB || GB.setScale(BB, OB)
        },
        onScale: (BB, OB) => {
          BO(BB, {
            scale: OB
          }), (0, UB.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${BB}`
          })
        },
        onHidden: (BB, OB) => {
          BO(BB, {
            hidden: OB
          }), (0, UB.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${OB?"hide":"show"}:${BB}`
          })
        },
        onReset: BB => {
          BO(BB, mB.c)
        },
        locked: sB,
        lockable: YO,
        onLocked: GO,
        note: (OB, GB) => {
          const YB = GB && qB.length > 0 ? BB("hudLayout:overlapsNote", {
            names: (0, uB.u)(qB, gB, BB, rB)
          }) : null;
          if (GB && EB(OB, LB)) return (0, VB.jsxs)(VB.Fragment, {
            children: [YB && (0, VB.jsx)("span", {
              children: YB
            }), (0, VB.jsx)("span", {
              children: BB("hudLayout:floatingJoystickNote")
            }), !wB && (0, VB.jsx)(cB, {})]
          });
          if (YB) return YB;
          const DB = GB && sB.has(OB) ? BB("hudLayout:lockedNote") : null,
            QB = GB && XB.has(OB) ? BB("hudLayout:contextSlotNote") : null;
          return DB || QB ? (0, VB.jsxs)(VB.Fragment, {
            children: [DB && (0, VB.jsx)("span", {
              children: DB
            }), QB && (0, VB.jsx)("span", {
              children: QB
            })]
          }) : GB && "cluster" === OB ? BB("hudLayout:clusterNote") : GB && "inventory" === OB ? BB("hudLayout:inventoryNote") : GB && "menu" === OB ? BB("hudLayout:menuNote") : GB && (0, HB.y)(OB, oB.hudElements[OB]) && DO(OB) ? BB("hudLayout:rowIconNote") : GB && "arrows" === OB ? BB("hudLayout:arrowsNote") : GB && "sprint" === OB ? BB("hudLayout:sprintNote") : (0, uB.y)(OB) && (0, mB.t)(oB.hudElements, OB) ? BB("hudLayout:inventoryHiddenNote", {
            name: (0, uB.v)(OB, gB, BB, rB)
          }) : null
        }
      };
      return (0, VB.jsxs)("div", {
        ref: FB,
        className: "HudLayoutSettings",
        children: [(0, VB.jsxs)("div", {
          ref: TB,
          className: "HudLayoutBody",
          children: [(0, VB.jsx)("div", {
            className: "HudLayoutOrientation",
            children: BB("landscape" === QB ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, VB.jsx)(PG, {
            preview: {
              layout: OB,
              orientation: QB,
              selected: jB,
              onSelect: pB,
              onMove: OO,
              canMove: DO,
              actionButtons: gB,
              joystickFixed: LB,
              presence: KB,
              keyNames: rB,
              maxHeight: iB,
              apiRef: IB,
              onMeasured: SB,
              onReady: eB,
              lockable: YO
            },
            quick: {
              layout: oB,
              actionButtons: gB,
              keyNames: rB,
              scaleCaps: WB,
              overlaps: qB,
              onScale: oO.onScale,
              onHidden: oO.onHidden,
              onReset: oO.onReset,
              locked: sB,
              lockable: YO,
              onLocked: GO
            },
            onFullScreen: () => {
              CB(!0)
            },
            resting: bB,
            onSidePanel: hB
          }), bB && (0, VB.jsx)(jG, {
            layout: OB,
            orientation: QB,
            selected: jB,
            onSelect: pB,
            onMove: OO,
            canMove: DO,
            actionButtons: gB,
            joystickFixed: LB,
            presence: KB,
            keyNames: rB,
            onScale: oO.onScale,
            onHidden: oO.onHidden,
            onReset: oO.onReset,
            locked: sB,
            lockable: YO,
            onLocked: GO,
            apiRef: IB,
            onClose: vB
          }), (0, VB.jsx)(AG, {
            safe: oB.hudSafe,
            onCommit: BB => {
              tB((OB => (0, mB.kb)(OB, QB, BB)))
            },
            onPreview: BB => {
              var OB;
              null === (OB = IB.current) || void 0 === OB || OB.setSafe(BB)
            }
          }), (0, VB.jsx)(lB.c, {
            label: BB("hudLayout:snapCentre"),
            checked: OB.hudSnapCentre,
            onClick: BB => {
              (0, mB._)(BB)
            },
            circleInfoText: BB("hudLayout:snapCentreInfo")
          }), (0, VB.jsx)(MG, {
            ...oO
          }), (0, VB.jsx)(lB.d, {
            label: BB("hudLayout:shape"),
            options: mB.I.map((OB => ({
              value: OB,
              label: BB(`hudLayout:shape_${OB}`)
            }))),
            value: OB.hudShape,
            onChange: BB => {
              tB((OB => ({
                ...OB,
                hudShape: BB
              }))), (0, UB.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: BB
              })
            }
          }), (0, VB.jsx)(lB.f, {
            name: BB("hudLayout:opacity"),
            min: mB.f,
            max: 1,
            step: .05,
            initValue: OB.hudKeyOpacity,
            format: BB => `${Math.round(100*BB)}%`,
            circleInfoText: BB("hudLayout:opacityInfo"),
            onChange: BB => {
              var OB;
              null === (OB = IB.current) || void 0 === OB || OB.setOpacity(BB)
            },
            onChangeComplete: BB => {
              (0, mB.X)(BB), (0, UB.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, VB.jsx)(JB.Q, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const BB = fB.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await BB.getResult() && (0, mB.T)()
            }()
          },
          children: BB("hudLayout:resetAll")
        })]
      })
    }
    const SG = 350;
    const nG = [function() {
      const {
        t: BB
      } = (0, YB.H)(), [OB, GB] = (0, DB.useState)(!1), QB = (0, DB.useRef)(null);
      return (0, DB.useEffect)((() => {
        var BB;
        OB && (null === (BB = QB.current) || void 0 === BB || BB.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [OB]), (0, VB.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, VB.jsx)(kB.d, {
          ref: QB,
          icon: "arrows-up-down-left-right",
          title: BB("hudLayout:title"),
          sub: BB("hudLayout:entrySub"),
          expanded: OB,
          onClick: () => {
            GB(!OB)
          }
        }), OB && (0, VB.jsx)(VG, {})]
      })
    }, function() {
      const {
        t: BB
      } = (0, YB.H)(), {
        joystickMode: OB,
        touchSpeedCurve: GB,
        autorun: DB,
        jumpLock: QB,
        touchEdgeGuard: oB
      } = (0, MB.o)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, VB.jsxs)(VB.Fragment, {
        children: [(0, VB.jsx)(lB.d, {
          label: BB("settingsMenu:joystick"),
          options: AB.Db.map((OB => ({
            value: OB,
            label: BB(SB[OB])
          }))),
          value: OB,
          onChange: BB => {
            MB.c.setClientEscMenuOptions({
              joystickMode: BB
            })
          },
          circleInfoText: BB("settingsMenu:joystickInfo")
        }), (0, VB.jsx)(lB.c, {
          label: BB("settingsMenu:preciseWalking"),
          checked: GB,
          onClick: BB => {
            MB.c.setClientEscMenuOptions({
              touchSpeedCurve: BB
            })
          },
          circleInfoText: BB("settingsMenu:preciseWalkingInfo")
        }), (0, VB.jsx)(lB.c, {
          label: BB("settingsMenu:autoRun"),
          checked: DB,
          onClick: BB => {
            MB.c.setClientEscMenuOptions({
              autorun: BB
            })
          },
          circleInfoText: BB("settingsMenu:autoRunInfo")
        }), (0, VB.jsx)(lB.c, {
          label: BB("settingsMenu:jumpLock"),
          checked: QB,
          onClick: BB => {
            MB.c.setClientEscMenuOptions({
              jumpLock: BB
            })
          },
          circleInfoText: BB("settingsMenu:jumpLockInfo")
        }), (0, VB.jsx)(lB.c, {
          label: BB("touchSettings:stopAtEdges"),
          checked: oB,
          onClick: BB => {
            MB.c.setClientEscMenuOptions({
              touchEdgeGuard: BB
            })
          },
          circleInfoText: BB("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, VB.jsx)(WB.d, {})
    }, function() {
      const {
        t: BB
      } = (0, YB.H)(), {
        clientEscMenuOptions: OB
      } = (0, MB.o)(["clientEscMenuOptions"]);
      return (0, nB.d)() ? (0, VB.jsx)(lB.c, {
        label: BB("settingsMenu:vibration"),
        checked: OB.vibration,
        onClick: BB => {
          MB.c.setClientEscMenuOptions({
            vibration: BB
          })
        },
        circleInfoText: BB("settingsMenu:vibrationInfo")
      }) : null
    }];

    function UG() {
      return (0, VB.jsx)(VB.Fragment, {
        children: nG.map(((BB, OB) => (0, VB.jsx)(BB, {}, OB)))
      })
    }
    var fG = GB(4785);

    function kG() {
      const {
        t: BB
      } = (0, YB.H)(), {
        isTouchScreen: OB,
        clientEscMenuOptions: GB,
        gameState: oB
      } = (0, MB.o)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), jB = (0, pB.g)("ezBridging"), yB = (0, pB.g)("ezTowering"), ZB = "inGame" !== oB || !0 === jB, NB = (0, qB.c)(), WB = null !== NB && ("inGame" !== oB || !0 === yB), [, AB] = (0, DB.useReducer)((BB => BB + 1), 0), SB = (0, RB.h)(), [nB, UB] = (0, DB.useState)(fG.e);
      return (0, VB.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [SB && (0, VB.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, VB.jsx)("div", {
            children: BB("controller:settingsControlsNote")
          }), (0, VB.jsx)(JB.Z, {
            onClick: () => {
              MB.c.set({
                openSettingsCategory: "controller"
              })
            },
            children: BB("controller:settingsOpenController")
          })]
        }), (0, PB.isTouchscreen)() && !(0, PB.isMobile)() ? (0, VB.jsx)(VB.Fragment, {
          children: (0, VB.jsx)(lB.c, {
            label: BB("settingsMenu:useTouchControls"),
            checked: nB,
            onClick: BB => {
              (0, fG.d)(BB), UB(BB)
            }
          })
        }) : null, OB && (0, VB.jsx)(UG, {}), ZB && (0, VB.jsx)(lB.c, {
          label: BB("settingsMenu:ezBridging"),
          checked: GB.ezBridging,
          onClick: BB => {
            MB.c.setClientEscMenuOptions({
              ezBridging: BB
            })
          },
          circleInfoText: BB("settingsMenu:ezBridgingInfo")
        }), WB && (0, VB.jsx)(lB.c, {
          label: BB("settingsMenu:ezTowering"),
          checked: GB.ezTowering,
          onClick: BB => {
            MB.c.setClientEscMenuOptions({
              ezTowering: BB
            })
          },
          circleInfoText: BB("jump" === NB ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, VB.jsx)(lB.c, {
          label: BB("settingsMenu:crouchToggle"),
          checked: GB.crouchIsToggle,
          onClick: BB => {
            MB.c.setClientEscMenuOptions({
              crouchIsToggle: BB
            })
          },
          circleInfoText: BB("settingsMenu:crouchToggleInfo")
        }), (0, VB.jsx)(lB.c, {
          label: BB("settingsMenu:hideUiToggle"),
          checked: GB.hideUiIsToggle,
          onClick: BB => {
            MB.c.setClientEscMenuOptions({
              hideUiIsToggle: BB
            })
          },
          circleInfoText: BB("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, zB.d)() && (0, VB.jsx)(lB.f, {
          name: BB("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: GB.touchscreenSensitivity,
          onChange: BB => {
            MB.c.setClientEscMenuOptions({
              touchscreenSensitivity: BB
            })
          }
        }), !(0, PB.isMobile)() && (0, VB.jsx)(lB.f, {
          name: BB("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: GB.mouseSensitivity,
          onChange: BB => {
            MB.c.setClientEscMenuOptions({
              mouseSensitivity: BB
            })
          }
        }), !(0, PB.isMobile)() && (0, VB.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, VB.jsx)("div", {
            className: "SliderText",
            children: BB("settingsMenu:keyBindings")
          }), QB.g.map((OB => (0, VB.jsx)(dG, {
            title: BB(OB.name.translationKey, OB.name.params),
            defaultOpen: QB.j.has(OB.id),
            children: OB.actions.map((BB => (0, VB.jsx)(KG, {
              noaAction: BB,
              forceUpdate: AB,
              clashesWith: OB.clashesWith,
              showPadGlyph: SB
            }, BB)))
          }, OB.name.translationKey))), (0, VB.jsx)(JB.Q, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, QB.A)(), AB()
            },
            children: BB("controls:resetBindings")
          })]
        })]
      })
    }

    function dG(BB) {
      let {
        title: OB,
        defaultOpen: GB,
        children: YB
      } = BB;
      const [QB, oB] = (0, DB.useState)(GB);
      return (0, VB.jsxs)("div", {
        className: yB()("ControlsSection", {
          Collapsed: !QB
        }),
        children: [(0, VB.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            oB(!QB)
          },
          children: [(0, VB.jsx)("div", {
            className: "ControlsSectionTitle",
            children: OB
          }), (0, VB.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), QB && (0, VB.jsx)("div", {
          className: "ControlsSectionRows",
          children: YB
        })]
      })
    }

    function KG(BB) {
      let {
        noaAction: OB,
        forceUpdate: GB,
        clashesWith: jB,
        showPadGlyph: MB
      } = BB;
      const {
        t: PB
      } = (0, YB.H)(), zB = (0, NB.b)(OB), [lB, pB] = (0, DB.useState)(!1), [qB, RB] = (0, DB.useState)("controls:clickToEnterNewBinding"), [WB, AB] = (0, DB.useState)(null), [SB, nB] = (0, DB.useState)(null), UB = (0, DB.useRef)(null);
      (0, DB.useEffect)((() => {
        lB && UB.current && UB.current.focus()
      }), [lB]);
      const fB = QB.t[OB].filter((BB => oB.h[BB]));
      let kB = null;
      const dB = [],
        KB = jB.flatMap((BB => {
          var OB, GB;
          return null !== (OB = null === (GB = QB.g.find((OB => OB.id === BB))) || void 0 === GB ? void 0 : GB.actions) && void 0 !== OB ? OB : []
        }));
      for (const YB of KB) {
        if (YB === OB) continue;
        const BB = QB.t[YB];
        for (const OB of BB) fB.includes(OB) && dB.push(PB(QB.w[YB].translationKey, QB.w[YB].params))
      }
      dB.length > 0 && (kB = PB("controls:sharedBindingsWarning") + " ", kB += dB.join(", "));
      const uB = () => {
          pB(!1), AB(null), RB("controls:clickToEnterNewBinding"), nB(null)
        },
        mB = () => "BindingInput_" + OB;
      return (0, VB.jsxs)("div", {
        className: yB()("ControlRow", {
          WarningBorder: null !== kB
        }),
        children: [(0, VB.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, VB.jsxs)("div", {
            className: "ControlName",
            children: [PB(QB.w[OB].translationKey, QB.w[OB].params), MB && zB && (0, VB.jsx)(ZB.c, {
              glyph: zB,
              className: "ControlPadGlyph"
            })]
          }), (0, VB.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, VB.jsxs)("div", {
              className: "ControlBindingsList",
              children: [fB.map((BB => (0, VB.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, VB.jsx)("div", {
                  children: (0, QB.l)(BB)
                }), (0, VB.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const YB = (0, QB.x)(OB, BB);
                    YB.isError() ? nB(YB.asError().message) : nB(null), GB()
                  },
                  children: "\xd7"
                })]
              }, BB))), !lB && (0, VB.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  pB(!0), nB(null)
                },
                children: (0, VB.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), lB && (0, VB.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, VB.jsxs)("div", {
                className: "InputContainer",
                children: [(0, VB.jsx)("div", {
                  className: "InputOverlay",
                  children: WB ? (0, QB.l)(WB) : (0, VB.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: PB(qB)
                  })
                }), (0, VB.jsx)("input", {
                  ref: UB,
                  id: mB(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: BB => {
                    if ("Escape" === BB.code) return uB(), BB.preventDefault(), void BB.stopPropagation();
                    const OB = BB.code;
                    oB.b.includes(OB) ? (nB(null), AB(OB)) : (nB("controls:keyIsReserved"), AB(null)), BB.preventDefault(), BB.stopPropagation()
                  },
                  onMouseDown: BB => {
                    const OB = "Mouse" + (BB.button + 1);
                    document.activeElement && document.activeElement.id === mB() ? oB.b.includes(OB) ? (nB(null), AB(OB)) : (nB("controls:keyIsReserved"), AB(null)) : RB("controls:enterNewBinding"), BB.stopPropagation()
                  },
                  onBlur: () => {
                    RB("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, VB.jsx)(JB.f, {
                onPointerDown: BB => {
                  BB.preventDefault()
                },
                onClick: () => {
                  (0, QB.d)(OB, WB), GB(), uB()
                },
                className: "ControlBindingAddButton",
                disabled: null === WB,
                children: PB("general:add")
              }), (0, VB.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  uB()
                },
                children: "\xd7"
              })]
            }), SB && (0, VB.jsx)("div", {
              className: "ControlBindingError",
              children: PB(SB)
            })]
          })]
        }), kB && (0, VB.jsx)("div", {
          className: "ControlRowWarning",
          children: kB
        })]
      })
    }
  },
  9547: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    var YB = GB(56),
      DB = GB(1383),
      QB = GB(1282);
    const oB = (0, YB.forwardRef)((function(BB, OB) {
      let {
        icon: GB,
        title: YB,
        sub: oB,
        expanded: jB,
        onClick: yB
      } = BB;
      return (0, QB.jsxs)("button", {
        ref: OB,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": jB,
        onClick: yB,
        children: [(0, QB.jsx)(DB.b, {
          name: GB,
          className: "FeaturedSettingsEntryIcon"
        }), (0, QB.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, QB.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: YB
          }), (0, QB.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: oB
          })]
        }), (0, QB.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  9354: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => NB,
      e: () => ZB,
      f: () => MB,
      h: () => RB,
      l: () => WB,
      o: () => zB
    });
    var YB = GB(1730),
      DB = GB(1825);
    const QB = BB => BB >= 56320 && BB <= 57343,
      oB = BB => BB >= 55296 && BB <= 56319,
      jB = (BB, OB) => OB >= 2 && QB(BB.charCodeAt(OB - 1)) && oB(BB.charCodeAt(OB - 2)) ? OB - 2 : Math.max(0, OB - 1),
      yB = (BB, OB) => {
        let GB;
        var YB, DB;
        return GB = BB.start !== BB.end ? OB < 0 ? BB.start : BB.end : OB < 0 ? jB(BB.value, BB.start) : (YB = BB.value, (DB = BB.start) + 1 < YB.length && oB(YB.charCodeAt(DB)) && QB(YB.charCodeAt(DB + 1)) ? DB + 2 : Math.min(YB.length, DB + 1)), {
          value: BB.value,
          start: GB,
          end: GB
        }
      },
      JB = ["text", "search", "url", "email", "tel", "password", "number"],
      MB = BB => !(!(0, DB.c)(BB) || BB.isContentEditable || BB.hasAttribute("data-pad-no-osk")) && (BB instanceof HTMLTextAreaElement || BB instanceof HTMLInputElement && JB.includes(BB.type)),
      PB = BB => null !== BB.selectionStart,
      zB = BB => {
        var OB, GB;
        const {
          value: YB
        } = BB;
        return {
          value: YB,
          start: null !== (OB = BB.selectionStart) && void 0 !== OB ? OB : YB.length,
          end: null !== (GB = BB.selectionEnd) && void 0 !== GB ? GB : YB.length
        }
      },
      lB = (BB, OB, GB) => {
        if (BB.readOnly) return;
        const DB = BB instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(DB, "value").set.call(BB, OB.value), PB(BB) && BB.setSelectionRange(OB.start, OB.end), (0, YB.g)(BB, new InputEvent("input", {
          bubbles: !0,
          inputType: GB
        }))
      };
    let pB = !1;
    const qB = (BB, OB) => !!document.execCommand(BB, !1, OB) || (pB || (pB = !0, console.warn(`execCommand("${BB}") failed; the on-screen keyboard is setting the value directly`)), !1),
      ZB = (BB, OB) => {
        qB("insertText", OB) || lB(BB, function(BB, OB) {
          let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const YB = BB.value.slice(0, BB.start),
            DB = BB.value.slice(BB.end);
          let QB = GB < 0 ? OB.length : Math.max(0, GB - YB.length - DB.length);
          QB > 0 && QB < OB.length && oB(OB.charCodeAt(QB - 1)) && QB--;
          const jB = OB.slice(0, QB),
            yB = YB.length + jB.length;
          return {
            value: YB + jB + DB,
            start: yB,
            end: yB
          }
        }(zB(BB), OB, BB.maxLength), "insertText")
      },
      NB = BB => {
        qB("delete") || lB(BB, (BB => {
          const OB = BB.start === BB.end ? jB(BB.value, BB.start) : BB.start;
          return {
            value: BB.value.slice(0, OB) + BB.value.slice(BB.end),
            start: OB,
            end: OB
          }
        })(zB(BB)), "deleteContentBackward")
      },
      RB = (BB, OB) => {
        if (!PB(BB)) return;
        const GB = yB(zB(BB), OB);
        BB.setSelectionRange(GB.start, GB.end)
      },
      WB = BB => {
        PB(BB) && 0 === BB.selectionStart && 0 === BB.selectionEnd && BB.setSelectionRange(BB.value.length, BB.value.length)
      }
  },
  9506: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB
    });
    var YB = GB(16),
      DB = GB(2247),
      QB = GB(1400),
      oB = GB(1434);
    const jB = async () => {
      if ((0, oB.j)()) {
        if (!0 !== await QB.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== YB.c.get("gameState")) return
      }(0, DB.d)()
    }
  },
  9513: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => yB,
      g: () => QB,
      j: () => oB,
      k: () => DB,
      o: () => jB
    });
    var YB = GB(2057);
    const DB = "controllerPadShopOpen",
      QB = BB => YB.i.includes(BB),
      oB = BB => Object.values(BB).some((BB => !1 !== BB.canBuy && !BB.isRewardedAd)),
      jB = (BB, OB, GB) => {
        var YB, DB, oB, jB;
        const yB = BB.filter((BB => !QB(BB))),
          JB = null !== OB && BB.includes(OB) ? OB : null;
        return null !== JB && !QB(JB) && GB(JB) ? JB : null !== (YB = null !== (DB = null !== (oB = null !== (jB = yB.find(GB)) && void 0 !== jB ? jB : yB[0]) && void 0 !== oB ? oB : JB) && void 0 !== DB ? DB : BB[0]) && void 0 !== YB ? YB : null
      },
      yB = BB => BB.userInput || BB.isRewardedAd || "boolean" === typeof BB.isSelected ? null : JSON.stringify([BB.image, BB.cost, BB.currency, BB.amount, BB.customTitle, BB.buyButtonText, BB.description, BB.canBuy])
  },
  9535: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB,
      h: () => MB
    });
    var YB = GB(56),
      DB = GB(1480),
      QB = GB(2117),
      oB = GB(1450),
      jB = GB(1464),
      yB = GB(1282);
    const JB = () => {
        const BB = (0, oB.s)();
        if ((0, YB.useEffect)((() => {
            (0, oB.i)()
          }), []), !BB) return null;
        const {
          ControllerCategory: OB
        } = BB;
        return (0, yB.jsx)(jB.b, {
          children: (0, yB.jsx)(OB, {})
        })
      },
      MB = () => {
        var BB;
        const OB = (0, oB.s)(),
          [, GB] = (0, YB.useReducer)((BB => BB + 1), 0);
        return (0, DB.f)(QB.e, GB), null !== (BB = null === OB || void 0 === OB ? void 0 : OB.hasActivePad()) && void 0 !== BB && BB
      }
  },
  9344: (BB, OB, GB) => {
    GB.d(OB, {
      A: () => SB,
      B: () => nB,
      E: () => ZB,
      I: () => yB,
      J: () => MB,
      b: () => NB,
      f: () => fB,
      i: () => VB,
      l: () => AB,
      n: () => pB,
      p: () => qB,
      q: () => zB,
      t: () => lB,
      u: () => UB,
      w: () => JB,
      x: () => kB
    });
    var YB = GB(25),
      DB = GB(1730),
      QB = GB(9346),
      oB = GB(9354),
      jB = GB(2575);
    const yB = BB => (0, oB.f)(BB),
      JB = BB => {
        const OB = BB.getBoundingClientRect();
        return {
          x: OB.left + OB.width / 2,
          y: OB.top + OB.height / 2
        }
      },
      MB = (BB, OB, GB) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: BB.x,
        clientY: BB.y,
        screenX: BB.x,
        screenY: BB.y,
        button: OB,
        buttons: GB,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      PB = (BB, OB) => {
        (0, DB.g)(BB, OB)
      },
      zB = function(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const YB = 0 === GB ? 1 : 2;
        PB(BB, new PointerEvent("pointerdown", MB(OB, GB, YB))), PB(BB, new MouseEvent("mousedown", MB(OB, GB, YB)))
      },
      lB = function(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        PB(BB, new PointerEvent("pointerup", MB(OB, GB, 0))), PB(BB, new MouseEvent("mouseup", MB(OB, GB, 0)))
      },
      pB = function(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        zB(BB, OB, GB), lB(BB, OB, GB), PB(BB, 0 === GB ? new MouseEvent("click", MB(OB, 0, 0)) : new MouseEvent("contextmenu", MB(OB, 2, 0)))
      },
      qB = function(BB, OB, GB) {
        let {
          leaveBelow: YB = null,
          enterBelow: DB = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (BB !== OB) {
          if (null !== BB && void 0 !== BB && BB.isConnected) {
            const DB = {
              ...MB(GB, 0, 0),
              relatedTarget: OB
            };
            PB(BB, new PointerEvent("pointerout", DB)), PB(BB, new MouseEvent("mouseout", DB));
            const QB = BB => !!OB && BB.contains(OB) || !!YB && BB.contains(YB);
            for (let OB = BB; OB && !QB(OB); OB = OB.parentElement) PB(OB, new PointerEvent("pointerleave", {
              ...DB,
              bubbles: !1
            })), PB(OB, new MouseEvent("mouseleave", {
              ...DB,
              bubbles: !1
            }))
          }
          if (OB) {
            const YB = {
              ...MB(GB, 0, 0),
              relatedTarget: BB
            };
            PB(OB, new PointerEvent("pointerover", YB)), PB(OB, new MouseEvent("mouseover", YB));
            const QB = [],
              oB = OB => !(null === BB || void 0 === BB || !BB.isConnected) && OB.contains(BB) || !!DB && OB.contains(DB);
            for (let BB = OB; BB && !oB(BB); BB = BB.parentElement) QB.push(BB);
            for (const BB of QB.reverse()) PB(BB, new PointerEvent("pointerenter", {
              ...YB,
              bubbles: !1
            })), PB(BB, new MouseEvent("mouseenter", {
              ...YB,
              bubbles: !1
            }));
            PB(OB, new PointerEvent("pointermove", MB(GB, 0, 0))), PB(OB, new MouseEvent("mousemove", MB(GB, 0, 0)))
          }
        } else OB && (PB(OB, new PointerEvent("pointermove", MB(GB, 0, 0))), PB(OB, new MouseEvent("mousemove", MB(GB, 0, 0))))
      },
      ZB = BB => {
        YB.o.tM(QB.f, BB)
      },
      NB = BB => {
        if (yB(BB)) return void ZB(BB);
        const OB = BB.hasAttribute("data-pad-focusable") ? BB.querySelector("a[href]") : null,
          GB = null !== OB && void 0 !== OB ? OB : BB;
        pB(GB, JB(GB))
      },
      RB = ".Dropdown-root.is-open",
      WB = BB => {
        const OB = BB.querySelector(".Dropdown-control");
        return NB(OB), OB
      },
      AB = BB => {
        var OB;
        const GB = null !== (OB = BB.closest(RB)) && void 0 !== OB ? OB : BB.querySelector(RB);
        return GB ? WB(GB) : null
      },
      VB = BB => {
        for (const OB of document.querySelectorAll(RB)) OB.contains(BB) || WB(OB)
      },
      SB = BB => null !== BB.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      nB = BB => {
        const OB = BB ? document.elementFromPoint(BB.x, BB.y) : null;
        return !(null === OB || void 0 === OB || !OB.closest("[data-pad-repeat]"))
      },
      UB = BB => {
        var OB;
        return null !== (OB = [...BB.querySelectorAll("[data-pad-back]")].find(jB.s)) && void 0 !== OB ? OB : null
      },
      fB = BB => {
        const OB = UB(BB);
        return !!OB && (NB(OB), !0)
      },
      kB = BB => {
        var OB, GB, YB, DB;
        return null !== (OB = null !== (GB = null !== (YB = BB.getAttribute("data-pad-key")) && void 0 !== YB ? YB : BB.getAttribute("href")) && void 0 !== GB ? GB : null === (DB = BB.querySelector("a[href]")) || void 0 === DB ? void 0 : DB.getAttribute("href")) && void 0 !== OB ? OB : null
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);