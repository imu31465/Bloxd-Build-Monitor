export const id = 179;
export const ids = [179];
export const modules = {
  10104: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => LW
    });
    var mW = OW(25),
      EW = OW(1172),
      NW = OW(5910),
      PW = OW(1283);

    function LW(WW) {
      let {
        note: iW
      } = WW;
      const {
        t: OW
      } = (0, EW.B)(), {
        clientEscMenuOptions: LW
      } = (0, mW.p)(["clientEscMenuOptions"]);
      return (0, PW.jsx)(NW.e, {
        label: OW("touchSettings:actionButtons"),
        checked: LW.touchActionButtons,
        onClick: WW => {
          mW.d.setClientEscMenuOptions({
            touchActionButtons: WW
          })
        },
        circleInfoText: OW("touchSettings:actionButtonsInfo"),
        note: iW
      })
    }
  },
  10092: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => BO,
      h: () => XO
    });
    var mW = OW(1172),
      EW = OW(62),
      NW = OW(2085),
      PW = OW(2095),
      LW = OW(1089),
      cW = OW.n(LW),
      wW = OW(1532),
      tW = OW(25),
      ZW = OW(100),
      xW = OW(117),
      lW = OW(5910),
      AW = OW(3332),
      bW = OW(259),
      jW = OW(2099),
      UW = OW(2108),
      kW = OW(10101),
      sW = OW(10104),
      MW = OW(327),
      KW = OW(1283);
    const SW = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var YW = OW(1556),
      yW = OW(10106),
      TW = OW(3383),
      JW = OW(3448);
    var hW = OW(10114);
    var HW = OW(1422),
      nW = OW(10122),
      uW = OW(1479),
      oW = OW(1391),
      dW = OW(10125);

    function eW(WW) {
      let {
        className: iW,
        keepPlace: OW
      } = WW;
      return OW ? (0, KW.jsx)("div", {
        className: cW()(iW, "Placeholder")
      }) : null
    }

    function vW(WW) {
      let {
        id: iW,
        elements: OW,
        actionButtons: EW,
        keyNames: NW,
        className: PW,
        keepPlace: LW,
        onHidden: cW
      } = WW;
      const {
        t: tW
      } = (0, mW.B)();
      if (!dW.i[iW].hide) return (0, KW.jsx)(eW, {
        className: PW,
        keepPlace: LW
      });
      const ZW = (0, TW.w)(OW, iW);
      return (0, KW.jsx)(wW.Z, {
        className: PW,
        ariaLabel: tW(ZW ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: (0, dW.y)(iW, EW, tW, NW)
        }),
        pressed: !ZW,
        onClick: () => {
          cW(iW, !ZW)
        },
        children: (0, KW.jsx)(oW.c, {
          name: ZW ? "eye-slash" : "eye"
        })
      })
    }

    function gW(WW) {
      let {
        id: iW,
        elements: OW,
        actionButtons: EW,
        keyNames: NW,
        className: PW,
        keepPlace: LW,
        onlyWhenMoved: cW,
        locked: tW,
        onReset: ZW
      } = WW;
      const {
        t: xW
      } = (0, mW.B)(), lW = dW.i[iW], AW = (0, TW.S)(OW[iW]);
      return !lW.move && !lW.scale || cW && AW ? (0, KW.jsx)(eW, {
        className: PW,
        keepPlace: LW
      }) : (0, KW.jsx)(wW.Z, {
        className: PW,
        disabled: AW || tW,
        ariaLabel: xW("hudLayout:resetElement", {
          name: (0, dW.y)(iW, EW, xW, NW)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: iW
        },
        onClick: WW => {
          cW && fW(WW.currentTarget), ZW(iW)
        },
        children: (0, KW.jsx)(oW.c, {
          name: "rotate-left"
        })
      })
    }

    function DW(WW) {
      let {
        id: iW,
        actionButtons: OW,
        keyNames: EW,
        className: NW,
        keepPlace: PW,
        locked: LW,
        lockable: cW,
        onLocked: tW
      } = WW;
      const {
        t: ZW
      } = (0, mW.B)();
      return cW || LW ? (0, KW.jsx)(wW.Z, {
        className: NW,
        ariaLabel: ZW(LW ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: (0, dW.y)(iW, OW, ZW, EW)
        }),
        pressed: LW,
        active: LW,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${LW?"unlock":"lock"}:${iW}`
        },
        onClick: () => {
          tW(iW, !LW)
        },
        children: (0, KW.jsx)(oW.c, {
          name: LW ? "lock" : "lock-open"
        })
      }) : (0, KW.jsx)(eW, {
        className: NW,
        keepPlace: PW
      })
    }

    function VW(WW) {
      let {
        className: iW,
        open: OW,
        name: EW,
        onToggle: NW
      } = WW;
      const {
        t: PW
      } = (0, mW.B)();
      return (0, KW.jsx)(wW.Z, {
        className: iW,
        ariaLabel: PW(OW ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: EW
        }),
        pressed: OW,
        analyticsClick: {
          id: "hud_layout.children",
          value: OW ? "close" : "open"
        },
        onClick: () => {
          NW(!OW)
        },
        children: (0, KW.jsx)(oW.c, {
          name: OW ? "angle-up" : "angle-down"
        })
      })
    }

    function pW(WW, iW) {
      var OW;
      WW.contains(document.activeElement) && iW.focus({
        preventScroll: !0
      }), null === (OW = (0, uW.h)()) || void 0 === OW || OW.handOverPadFocus(WW, iW)
    }

    function fW(WW) {
      const iW = WW.closest("[data-hud-row]"),
        OW = null === iW || void 0 === iW ? void 0 : iW.querySelector(".HudElementRowName");
      return !(!iW || !OW) && (pW(iW, OW), !0)
    }
    const CW = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function XW(WW, iW) {
      return "joystick" === WW && !iW
    }

    function BW() {
      const {
        t: WW
      } = (0, mW.B)();
      return (0, KW.jsx)(wW.Z, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: WW => {
          const iW = WW.currentTarget;
          if (!fW(iW)) {
            const WW = function(WW) {
              var iW, OW;
              const mW = [WW.previousElementSibling, WW.nextElementSibling].find((WW => WW instanceof HTMLElement && WW.matches(CW)));
              return null !== (iW = null !== mW && void 0 !== mW ? mW : null === (OW = WW.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === OW ? void 0 : OW.querySelector(`:is(${CW}):not(.HudFixJoystickButton)`)) && void 0 !== iW ? iW : null
            }(iW);
            WW && pW(iW, WW)
          }
          tW.d.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: WW("hudLayout:fixJoystick")
      })
    }
    var qW = OW(80),
      RW = OW(1269),
      GW = OW(4275),
      IW = OW(3809),
      aW = OW(10128),
      rW = OW(10134),
      zW = OW(3439),
      FW = OW(3457),
      QW = OW(4337),
      Wi = OW(344),
      ii = OW(10142);
    const Oi = WW => ({
      [dW.g]: WW
    });

    function mi(WW) {
      let {
        id: iW,
        slot: OW,
        icon: mW,
        label: NW,
        hidden: PW,
        className: LW,
        face: wW
      } = WW;
      const tW = (0, EW.useRef)(null);
      return (0, EW.useLayoutEffect)((() => {
        wW && tW.current && (0, ii.l)(tW.current, wW)
      }), [wW]), (0, KW.jsxs)("div", {
        className: cW()("TouchKeyHit", `TouchSlot${OW}`, LW, {
          HudPreviewGhost: PW.has(iW)
        }),
        ...Oi(iW),
        children: [wW && (0, KW.jsx)("div", {
          ref: tW,
          className: cW()("TouchKey", {
            Labelled: wW.classList.contains("Labelled")
          })
        }), !wW && (0, KW.jsxs)("div", {
          className: cW()("TouchKey", {
            Labelled: void 0 !== NW
          }),
          children: [mW && (0, KW.jsx)(oW.c, {
            name: mW
          }), void 0 !== NW && (0, KW.jsx)("span", {
            className: "TouchKeyLabel",
            children: NW
          })]
        })]
      })
    }

    function Ei(WW) {
      let {
        item: iW,
        selected: OW
      } = WW;
      const mW = (0, EW.useRef)(null);
      return (0, EW.useLayoutEffect)((() => {
        mW.current && (0, ii.l)(mW.current, iW)
      }), [iW]), (0, KW.jsx)("div", {
        ref: mW,
        className: cW()("InvenItem", {
          Selected: OW
        })
      })
    }
    const Ni = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      Pi = WW => void 0 === WW ? {} : {
        style: {
          "--parked": WW
        }
      };

    function Li(WW) {
      let {
        id: iW,
        hidden: OW,
        parked: mW,
        unslotted: EW = !1
      } = WW;
      return (0, KW.jsx)("div", {
        className: cW()("TopRightIcon", FW.k[iW], {
          HudPreviewGhost: OW.has(iW),
          [zW.d]: void 0 !== mW,
          [zW.e]: EW
        }),
        ...Pi(mW),
        children: (0, KW.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...Oi(iW),
          children: (0, KW.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, KW.jsx)(oW.c, {
              name: Ni[iW]
            })
          })
        })
      })
    }

    function ci(WW) {
      let {
        portraitPhone: iW,
        icons: OW,
        pinnedIcons: mW,
        hidden: NW,
        moved: PW,
        trayState: LW
      } = WW;
      const wW = iW ? (0, zW.C)(OW) : [],
        tW = OW.filter((WW => "settings" === WW)),
        ZW = OW.filter((WW => "settings" !== WW && !wW.includes(WW))).reverse(),
        xW = wW.length > 0 && "gone" === LW,
        lW = [...tW, ...xW ? ["tray"] : [], ...ZW].filter((WW => "tray" === WW || NW.has(WW) && !PW.has(WW))),
        AW = WW => {
          const iW = lW.indexOf(WW);
          return iW < 0 ? void 0 : iW
        },
        bW = (WW, iW) => (0, KW.jsx)(Li, {
          id: WW,
          hidden: NW,
          parked: iW ? AW(WW) : void 0,
          unslotted: iW && NW.has(WW) && PW.has(WW)
        }, WW);
      return (0, KW.jsxs)("div", {
        className: cW()("TopRightIcons TouchInGame", {
          Column: iW
        }),
        children: [tW.map((WW => bW(WW, !0))), wW.length > 0 && (0, KW.jsxs)("div", {
          className: cW()("TopRightIcon TopRightTrayToggle Open", {
            [zW.d]: xW
          }),
          ...Pi(AW("tray")),
          children: [(0, KW.jsx)("div", {
            className: cW()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== LW
            }),
            children: (0, KW.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, KW.jsx)(oW.c, {
                name: "ellipsis"
              })
            })
          }), (0, KW.jsx)("div", {
            className: "TopRightTray",
            children: wW.map((WW => bW(WW, !1)))
          })]
        }), ZW.map((WW => (0, KW.jsxs)(EW.Fragment, {
          children: ["perspective" === WW && null !== mW.rightOfCamera && (0, KW.jsx)(wi, {
            icon: mW.rightOfCamera
          }), bW(WW, !0)]
        }, WW))), null !== mW.leftEnd && (0, KW.jsx)(wi, {
          icon: mW.leftEnd
        })]
      })
    }

    function wi(WW) {
      let {
        icon: iW
      } = WW;
      return (0, KW.jsx)("div", {
        className: "TopRightIcon",
        children: (0, KW.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, KW.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, KW.jsx)(oW.c, {
              name: iW
            })
          })
        })
      })
    }

    function ti(WW) {
      let {
        next: iW,
        hidden: OW
      } = WW;
      return (0, KW.jsx)("div", {
        className: cW()("HotBarArrow", iW ? "Next" : "Previous", {
          HudPreviewGhost: OW
        }),
        ...Oi("arrows"),
        children: (0, KW.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, KW.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, KW.jsx)(oW.c, {
              name: iW ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function Zi() {
      return (0, KW.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, KW.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, KW.jsx)("div", {
            className: "SocialBar",
            children: (0, KW.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, KW.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, KW.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, KW.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, KW.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, KW.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, KW.jsx)(oW.c, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, KW.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, KW.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, KW.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, KW.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, KW.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, KW.jsx)(oW.c, {
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
    const xi = [{
      icon: "person-running",
      labelKey: "hudLayout:previewEffectSpeed",
      level: 2,
      leftMs: 45e3
    }, {
      icon: "angles-up",
      labelKey: "hudLayout:previewEffectJump",
      level: 1,
      leftMs: 9e4
    }, {
      icon: "paw",
      labelKey: "hudLayout:previewEffectBunnyHop",
      level: 3,
      leftMs: null
    }];

    function li(WW) {
      let {
        ghost: iW
      } = WW;
      const {
        t: OW
      } = (0, mW.B)();
      return (0, KW.jsx)("div", {
        className: cW()("EffectInfosWrapper", {
          HudPreviewGhost: iW
        }),
        ...Oi("effects"),
        children: xi.map((WW => {
          let {
            icon: iW,
            labelKey: mW,
            level: EW,
            leftMs: NW
          } = WW;
          return (0, KW.jsxs)("div", {
            className: "EffectInfo",
            children: [(0, KW.jsx)("span", {
              className: "EffectInfoIcon HudPreviewEffectIcon",
              children: (0, KW.jsx)(oW.c, {
                name: iW
              })
            }), (0, KW.jsxs)("div", {
              className: cW()("EffectInfoRightSide", {
                Untimed: null === NW
              }),
              children: [(0, KW.jsxs)("div", {
                className: "EffectInfoNameWrapper",
                children: [(0, KW.jsx)("div", {
                  className: "EffectInfoName SmallTextBold",
                  children: OW(mW)
                }), EW > 1 && (0, KW.jsx)("div", {
                  className: "EffectInfoName SmallTextBold",
                  children: (0, Wi.V)(EW)
                })]
              }), null !== NW && (0, KW.jsx)("div", {
                className: "EffectInfoDuration SmallTextLight",
                children: (0, Wi.db)(NW)
              })]
            })]
          }, mW)
        }))
      })
    }
    const Ai = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      bi = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      ji = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      Ui = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function ki(WW) {
      let {
        presence: iW,
        portraitPhone: OW,
        hidden: EW,
        actionButtons: NW,
        joystickFixed: PW,
        keysAbove: LW,
        auraBar: wW,
        trayState: tW,
        moved: xW
      } = WW;
      const {
        t: lW
      } = (0, mW.B)(), {
        faces: AW,
        items: bW
      } = iW, jW = WW => ({
        HudPreviewGhost: (0, dW.K)(WW).some((WW => EW.has(WW)))
      });
      return (0, KW.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, KW.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, KW.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, KW.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, KW.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, KW.jsx)("div", {
              className: "InGameHeaderGameName",
              children: lW("hudLayout:previewGameName")
            })]
          })
        }), (0, KW.jsx)("div", {
          className: "TopLeftElements",
          children: (0, KW.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, KW.jsxs)("div", {
              className: "Chat",
              children: [(0, KW.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [lW("hudLayout:previewChatLine"), lW("hudLayout:previewChatJoined", {
                  name: "Arthur"
                }), lW("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((WW => (0, KW.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, KW.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, KW.jsx)("div", {
                      className: "IndividualText",
                      children: WW
                    })
                  })
                }, WW)))
              }), (0, KW.jsxs)("div", {
                className: "ChatIcons",
                children: [(0, KW.jsx)("button", {
                  type: "button",
                  tabIndex: -1,
                  className: cW()("ChatIconWrapper SmallTextLight", jW("chat")),
                  ...Oi("chat"),
                  children: (0, KW.jsx)(oW.c, {
                    name: "comment-dots",
                    className: "ChatIcon"
                  })
                }), (0, KW.jsx)("div", {
                  className: "QuickChat",
                  children: (0, KW.jsx)("button", {
                    type: "button",
                    tabIndex: -1,
                    className: cW()("QuickChatIconWrapper SmallTextLight", jW("quickChat")),
                    ...Oi("quickChat"),
                    children: (0, KW.jsx)(oW.c, {
                      name: "comment-smile",
                      className: "QuickChatIcon"
                    })
                  })
                })]
              })]
            })
          })
        }), (0, KW.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, KW.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, KW.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, KW.jsx)("div", {
                className: "TopRightIconsContainer",
                ...Oi("menu"),
                children: (0, KW.jsx)(ci, {
                  portraitPhone: OW,
                  icons: iW.rowIcons,
                  pinnedIcons: iW.pinnedIcons,
                  hidden: EW,
                  trayState: tW,
                  moved: xW
                })
              })
            }), ZW.featureFlags.useSocialFeatures && (0, KW.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, KW.jsx)(Zi, {})
            })]
          })
        }), (0, KW.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, KW.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, KW.jsxs)("div", {
            className: "TouchInteractKey",
            ...Oi("interact"),
            children: [(0, KW.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, KW.jsx)(oW.c, {
                name: "hand-back-point-up"
              })
            }), (0, KW.jsx)("div", {
              children: lW("hudLayout:previewInteract")
            })]
          })
        }), (0, KW.jsx)("div", {
          className: "BottomCentre",
          children: (0, KW.jsxs)("div", {
            className: "BottomElements",
            children: [(0, KW.jsx)("div", {
              className: "BottomLeftElements Touch",
              children: (0, KW.jsx)(li, {
                ghost: EW.has("effects")
              })
            }), (0, KW.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, KW.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...Oi("hotbar"),
                children: (0, KW.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, KW.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, KW.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, KW.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, KW.jsx)(oW.c, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), wW && (0, KW.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, KW.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, KW.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, QW.f)("glint"),
                    alt: ""
                  }), (0, KW.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, KW.jsx)("div", {
                  className: "AuraBar",
                  children: (0, KW.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, KW.jsx)("div", {
                className: "HotBarRow",
                children: (0, KW.jsx)("div", {
                  className: cW()("HotBarContainer Touch", {
                    KeysAbove: LW
                  }),
                  children: (0, KW.jsxs)("div", {
                    className: "HotBar",
                    ...Oi("hotbar"),
                    children: [(0, KW.jsxs)("div", {
                      className: cW()("TouchInventoryKeys", {
                        NoAuraBar: !wW
                      }),
                      children: [(0, KW.jsx)("div", {
                        className: cW()("TouchInventoryKey ShopKey", jW("shop"), {
                          Hidden: !iW.shop
                        }),
                        ...Oi("shop"),
                        children: (0, KW.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, KW.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, KW.jsx)(oW.c, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, KW.jsx)("div", {
                        className: cW()("TouchInventoryKey BagKey", jW("bag"), {
                          Hidden: !iW.bag
                        }),
                        ...Oi("bag"),
                        children: (0, KW.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, KW.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, KW.jsx)(oW.c, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, KW.jsx)(ti, {
                      next: !1,
                      hidden: EW.has("arrows")
                    }), (0, KW.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== bW && bW.map(((WW, iW) => (0, KW.jsx)(Ei, {
                        item: WW,
                        selected: WW.classList.contains("Selected")
                      }, iW))), null === bW && ji.map((WW => {
                        const iW = Ui[WW];
                        return (0, KW.jsx)("div", {
                          className: cW()("InvenItem", {
                            Selected: 0 === WW
                          }),
                          children: iW && (0, KW.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, KW.jsx)(oW.c, {
                              name: iW
                            })
                          })
                        }, WW)
                      }))]
                    }), (0, KW.jsx)(ti, {
                      next: !0,
                      hidden: EW.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, KW.jsx)("div", {
              className: "BottomRightElements",
              children: (0, KW.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== AW && ii.j.map((WW => {
                  const iW = AW[WW];
                  return iW && (0, KW.jsx)(mi, {
                    id: ii.h[WW],
                    slot: WW,
                    face: iW,
                    className: Ai[WW],
                    hidden: EW
                  }, WW)
                })), (0, ii.s)(iW, NW).map((WW => (0, KW.jsx)(mi, {
                  id: ii.h[WW],
                  slot: WW,
                  icon: bi[WW].icon,
                  label: lW(bi[WW].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: EW
                }, WW))), null === AW && (0, KW.jsxs)(KW.Fragment, {
                  children: [(0, KW.jsx)(mi, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: EW
                  }), (0, KW.jsx)(mi, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: EW
                  }), NW && (0, KW.jsxs)(KW.Fragment, {
                    children: [(0, KW.jsx)(mi, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: EW
                    }), (0, KW.jsx)(mi, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: EW
                    })]
                  }), (0, ii.k)(NW).map((WW => (0, KW.jsx)(mi, {
                    id: ii.h[WW],
                    slot: WW,
                    icon: bi[WW].icon,
                    label: lW(bi[WW].labelKey),
                    hidden: EW
                  }, WW))), (0, KW.jsx)(mi, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: EW
                  }), (0, KW.jsx)(mi, {
                    id: "zoom",
                    slot: "Z",
                    icon: "magnifying-glass-plus",
                    hidden: EW
                  }), (0, KW.jsx)(mi, {
                    id: "drop",
                    slot: "D",
                    icon: "hand-holding-box",
                    hidden: EW
                  })]
                })]
              })
            })]
          })
        }), (0, KW.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, KW.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, KW.jsxs)("div", {
              className: cW()("Joystick Resting HudPreviewJoystick", {
                Floating: !PW
              }),
              ...Oi("joystick"),
              children: [(0, KW.jsx)("div", {
                className: "JoystickBase"
              }), (0, KW.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), iW.sprint && (0, KW.jsx)("div", {
            className: cW()("TouchSprintHit", jW("sprint"), {
              AtHome: !PW
            }),
            ...Oi("sprint"),
            children: (0, KW.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, KW.jsx)(oW.c, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function si() {
      const [WW, iW] = (0, EW.useState)({}), OW = (0, EW.useCallback)((WW => {
        iW((iW => [...new Set([...Object.keys(iW), ...Object.keys(WW)])].every((OW => iW[OW] === WW[OW])) ? iW : WW))
      }), []);
      return [WW, OW]
    }
    const Mi = .05;

    function Ki(WW) {
      var iW;
      let {
        selected: OW,
        layout: EW,
        actionButtons: NW,
        keyNames: PW,
        overlaps: LW,
        scaleCaps: tW,
        joystickFixed: ZW,
        onScale: xW,
        onHidden: lW,
        onReset: AW,
        locked: bW,
        lockable: jW,
        onLocked: UW,
        extra: kW
      } = WW;
      const {
        t: sW
      } = (0, mW.B)(), MW = OW ? dW.i[OW] : null, SW = null !== OW && bW.has(OW), YW = OW ? (0, TW.H)(EW.hudElements, OW)[2] : 1, yW = null !== (iW = OW && tW[OW]) && void 0 !== iW ? iW : TW.h, JW = WW => {
        OW && xW(OW, Math.min(yW, Math.round(100 * (YW + .1 * WW)) / 100))
      };
      return (0, KW.jsxs)(KW.Fragment, {
        children: [(0, KW.jsxs)("div", {
          className: cW()("HudQuickName SmallTextBold", {
            Overlap: LW.length > 0
          }),
          children: [LW.length > 0 && (0, KW.jsx)(oW.c, {
            name: "triangle-exclamation"
          }), MW ? (0, dW.y)(MW.id, NW, sW, PW) : sW("hudLayout:fullScreenHint"), LW.length > 0 && (0, KW.jsx)("span", {
            className: "HudQuickOverlap",
            children: sW("hudLayout:overlapsShort", {
              names: (0, dW.w)(LW, NW, sW, PW)
            })
          })]
        }), (null === MW || void 0 === MW ? void 0 : MW.scale) && (0, KW.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, KW.jsx)(wW.Z, {
            disabled: SW || YW <= TW.j,
            ariaLabel: sW("hudLayout:smaller"),
            onClick: () => {
              JW(-1)
            },
            children: (0, KW.jsx)(oW.c, {
              name: "minus"
            })
          }), (0, KW.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*YW)}%`
          }), (0, KW.jsx)(wW.Z, {
            disabled: SW || YW >= yW,
            ariaLabel: sW("hudLayout:larger"),
            onClick: () => {
              JW(1)
            },
            children: (0, KW.jsx)(oW.c, {
              name: "plus"
            })
          })]
        }), (MW || kW) && (0, KW.jsxs)("div", {
          className: "HudQuickActions",
          children: [MW && (0, KW.jsxs)(KW.Fragment, {
            children: [(0, KW.jsx)(DW, {
              id: MW.id,
              actionButtons: NW,
              keyNames: PW,
              locked: SW,
              lockable: jW(MW.id),
              onLocked: UW
            }), (0, KW.jsx)(vW, {
              id: MW.id,
              elements: EW.hudElements,
              actionButtons: NW,
              keyNames: PW,
              onHidden: lW
            }), (0, KW.jsx)(gW, {
              id: MW.id,
              elements: EW.hudElements,
              actionButtons: NW,
              keyNames: PW,
              locked: SW,
              onReset: AW
            }), XW(MW.id, ZW) && (0, KW.jsx)(BW, {})]
          }), kW]
        })]
      })
    }
    var Si = OW(1095),
      Yi = OW(5119);
    const yi = "HudPreviewDoc",
      Ti = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      Ji = new Set([yi, ...Object.values(Ti)]),
      Hi = new Set(TW.D.map(FW.w)),
      ni = new Set(FW.f),
      ui = 'style, link[rel="stylesheet"]';

    function oi(WW, iW, OW, mW) {
      const EW = new Map,
        NW = new Set,
        PW = new URL(WW.baseURI).origin,
        LW = iW => {
          var OW;
          if ("LINK" !== iW.nodeName) return !0;
          const mW = null === (OW = iW.getAttribute("href")) || void 0 === OW ? void 0 : OW.trim();
          if (!mW) return !1;
          try {
            return new URL(mW, WW.baseURI).origin === PW
          } catch {
            return !1
          }
        };
      let cW = null;
      const wW = () => {
          cW !== (0 === NW.size) && (cW = 0 === NW.size, null === mW || void 0 === mW || mW(cW))
        },
        tW = WW => {
          const iW = WW.cloneNode(!0);
          if ("LINK" === iW.tagName) {
            NW.add(iW);
            const WW = () => {
              NW.delete(iW), wW()
            };
            iW.addEventListener("load", WW), iW.addEventListener("error", WW), OW && iW.addEventListener("load", OW)
          }
          return iW
        },
        ZW = () => {
          const mW = function(WW) {
              const iW = [...WW.body.children].filter((WW => WW.matches(ui)));
              return [...WW.head.querySelectorAll(ui), ...iW]
            }(WW).filter(LW),
            PW = new Set(mW);
          for (const [WW, iW] of EW) PW.has(WW) || (iW.remove(), EW.delete(WW), NW.delete(iW));
          let cW = null;
          for (let WW = mW.length - 1; WW >= 0; WW--) {
            const NW = mW[WW];
            let PW = EW.get(NW);
            PW ? "STYLE" === NW.tagName && PW.textContent !== NW.textContent && (PW.textContent = NW.textContent, null === OW || void 0 === OW || OW()) : (PW = tW(NW), EW.set(NW, PW), iW.head.insertBefore(PW, cW)), cW = PW
          }
          wW()
        };
      ZW();
      const xW = new MutationObserver(ZW);
      return xW.observe(WW.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), xW.observe(WW.body, {
        childList: !0
      }), () => {
        xW.disconnect()
      }
    }

    function di(WW, iW, OW) {
      let {
        keysAbove: mW
      } = OW;
      const EW = [...WW.documentElement.classList].filter((WW => !Ji.has(WW) && !ni.has(WW))),
        NW = [...iW.documentElement.classList].filter((WW => ni.has(WW))),
        PW = [yi, Ti.hotbar, Ti.hasShop, Ti.hasBag];
      mW && PW.push(Ti.keysAbove), iW.documentElement.className = [...EW, ...PW, ...NW].join(" ")
    }
    const ei = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function vi(WW, iW, OW, mW, EW) {
      const NW = (0, TW.G)(OW, mW, "joystick"),
        PW = (0, FW.y)((0, FW.K)(OW, mW, EW), mW),
        LW = PW.classes.filter((WW => !Hi.has(WW))),
        cW = iW.documentElement,
        wW = OW.hudLayouts[mW].hudSafe,
        tW = (0, FW.D)(wW, window.innerWidth, window.innerHeight, gi(), wW ? (0, FW.N)(iW) : 0);
      (0, FW.Q)({
        ...PW,
        classes: LW
      }, {
        vars: cW,
        safe: cW,
        classes: cW
      }), cW.style.setProperty("--preview-joystick-shift-left", `${tW[3]}px`), cW.style.setProperty("--preview-joystick-shift-bottom", `${tW[2]}px`), cW.style.setProperty("--preview-joystick-scale", String(NW[2])), (0, Yi.e)(cW, iW, OW, mW);
      for (const ZW of ei) cW.style.setProperty(ZW, WW.documentElement.style.getPropertyValue(ZW) || "0px")
    }

    function gi() {
      return (0, FW.G)(tW.d.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function Di(WW) {
      return (0, FW.s)(gi(), (0, FW.N)(WW))
    }

    function Vi(WW, iW, OW) {
      const mW = WW.documentElement.style,
        EW = (0, FW.F)(iW),
        NW = mW.getPropertyValue(EW);
      try {
        return OW((WW => {
          mW.setProperty(EW, String(WW))
        }))
      } finally {
        "" === NW ? mW.removeProperty(EW) : mW.setProperty(EW, NW)
      }
    }

    function fi(WW, iW) {
      const [OW, mW] = Vi(WW, "hotbar", (iW => {
        const OW = OW => {
          var mW, EW;
          return iW(OW), null !== (mW = null === (EW = WW.querySelector(".HotBarGameItemsContainer")) || void 0 === EW ? void 0 : EW.getBoundingClientRect().width) && void 0 !== mW ? mW : 0
        };
        return [OW(1), OW(TW.h)]
      }));
      return OW <= 0 ? TW.h : Math.min(TW.h, Math.max(1, Math.floor(mW / OW / iW + 1e-6) * iW))
    }
    const Ci = 3,
      Xi = .5,
      Bi = WW => WW.right - WW.left;
    const qi = (WW, iW) => Math.abs((0, aW.d)(WW).x - (0, aW.d)(iW).x) + Math.abs((0, aW.d)(WW).y - (0, aW.d)(iW).y) + Math.abs(Bi(WW) - Bi(iW));

    function Ri(WW, iW, OW, mW, EW) {
      let {
        canKeep: NW = () => !0,
        passes: PW = Ci,
        before: LW
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const cW = iW.hudLayouts[OW].hudLocked.filter(NW);
      if (0 === cW.length) return iW;
      const wW = [...dW.c].filter((mW => !cW.includes(mW) && (0, TW.G)(WW, OW, mW).join() === (0, TW.G)(iW, OW, mW).join())),
        tW = WW => {
          const iW = (0, aW.E)(wW.flatMap((iW => WW[iW] ? [WW[iW]] : [])));
          return {
            ...WW,
            cluster: null !== iW && void 0 !== iW ? iW : void 0
          }
        };
      let ZW = null;
      const xW = WW => {
          ZW = WW;
          const iW = EW(WW);
          return iW && {
            ...iW,
            boxes: tW(iW.boxes)
          }
        },
        lW = LW ? {
          ...LW,
          boxes: tW(LW.boxes)
        } : xW(WW),
        AW = lW && xW(iW);
      if (!lW || !AW) return iW;
      const bW = lW.boxes;
      let jW = AW.boxes;
      const UW = lW.keysAbove !== AW.keysAbove,
        kW = UW || Boolean(lW.shopAlone) !== Boolean(AW.shopAlone),
        sW = new Set(cW.filter((WW => !(0, dW.C)(WW) || !("bag" === WW ? UW : kW))));
      let MW = iW;
      for (let YW = 0; YW < PW && sW.size > 0; YW++) {
        var KW, SW;
        const WW = new Map;
        for (const iW of sW) {
          const EW = bW[iW],
            NW = jW[iW],
            PW = EW && NW ? Gi(iW, (0, TW.G)(MW, OW, iW), EW, NW, mW) : null;
          PW ? WW.set(iW, PW) : sW.delete(iW)
        }
        if (0 === WW.size) break;
        let EW = MW;
        for (const [iW, mW] of WW) EW = (0, TW.rb)(EW, OW, iW, mW);
        const NW = null === (KW = xW(EW)) || void 0 === KW ? void 0 : KW.boxes;
        if (!NW) return iW;
        let PW = MW;
        for (const [iW, mW] of WW) {
          const WW = NW[iW];
          WW && qi(bW[iW], WW) < qi(bW[iW], jW[iW]) - Xi ? PW = (0, TW.rb)(PW, OW, iW, mW) : sW.delete(iW)
        }
        if (PW === MW) break;
        const LW = [...WW.keys()].every((WW => sW.has(WW)));
        MW = LW ? EW : PW;
        const cW = LW ? NW : null === (SW = xW(MW)) || void 0 === SW ? void 0 : SW.boxes;
        if (!cW) return iW;
        jW = cW
      }
      return ZW !== MW && EW(MW), MW
    }

    function Gi(WW, iW, OW, mW, EW) {
      let [NW, PW, LW] = iW;
      const cW = TW.A[WW],
        wW = {};
      cW.scale && Bi(mW) > 0 && Math.abs(Bi(OW) - Bi(mW)) > Xi && (wW.scale = Math.max(TW.j, Math.min(TW.h, LW * Bi(OW) / Bi(mW))));
      const tW = (0, aW.d)(OW).x - (0, aW.d)(mW).x,
        ZW = (0, aW.d)(OW).y - (0, aW.d)(mW).y;
      return cW.move && (Math.abs(tW) > Xi || Math.abs(ZW) > Xi) && (wW.dx = NW + tW / EW.width, wW.dy = PW + ZW / EW.height), void 0 === wW.scale && void 0 === wW.dx ? null : wW
    }
    let Ii = 0;

    function ai() {
      return Ii > 0
    }
    const ri = WW => 0 === WW.dx && 0 === WW.dy,
      zi = .001,
      Fi = WW => Math.abs(WW.dx) >= 5e-4 || Math.abs(WW.dy) >= 5e-4 ? WW : {
        dx: WW.dx,
        dy: WW.dy < 0 ? -.001 : zi
      };

    function Qi(WW) {
      let {
        preview: iW,
        stageRef: OW,
        ringRef: mW,
        centreLineRef: NW,
        snapCentre: PW,
        ready: LW,
        measure: cW,
        k: wW,
        viewport: tW,
        boxes: ZW,
        pieces: xW,
        selected: lW,
        insets: AW,
        layout: bW,
        canMove: jW,
        onSelect: UW,
        onMove: kW
      } = WW;
      const sW = (0, EW.useRef)(null),
        MW = (0, EW.useCallback)((() => null !== sW.current), []),
        KW = (WW, iW) => {
          if (!iW) return null;
          const OW = (0, aW.d)(WW.origin),
            mW = (0, aW.d)(iW),
            EW = (WW.to.dx - WW.from.dx) * tW.width,
            NW = (WW.to.dy - WW.from.dy) * tW.height,
            PW = iW.right - iW.left,
            LW = iW.bottom - iW.top;
          return {
            skew: {
              x: mW.x - OW.x - EW,
              y: mW.y - OW.y - NW
            },
            box: {
              left: OW.x - PW / 2,
              top: OW.y - LW / 2,
              right: OW.x + PW / 2,
              bottom: OW.y + LW / 2
            }
          }
        },
        SW = (WW, OW) => {
          var EW;
          const PW = sW.current;
          if (!PW || PW.pointerId !== WW.pointerId) return;
          sW.current = null, null === (EW = NW.current) || void 0 === EW || EW.classList.remove("Shown", "Snapped");
          const LW = mW.current;
          if (LW && null !== PW.ringStyle && LW.setAttribute("style", PW.ringStyle), OW && PW.moved) {
            const WW = ri(PW.to) ? null : cW(PW.id),
              iW = WW ? (0, aW.D)(WW, (0, aW.z)(tW.width, tW.height, AW)) : {
                x: 0,
                y: 0
              },
              OW = {
                dx: PW.to.dx + iW.x / tW.width,
                dy: PW.to.dy + iW.y / tW.height
              },
              mW = ri(PW.to) ? OW : Fi(OW);
            kW(PW.id, mW.dx, mW.dy)
          } else iW(PW.id, null), OW && PW.tapPick && UW(PW.tapPick)
        };
      return {
        busy: MW,
        handlers: {
          onPointerDown: WW => {
            var iW;
            if (!LW || sW.current || !WW.target.closest(".HudPreviewHandle")) return;
            const mW = OW.current.getBoundingClientRect(),
              EW = {
                x: (WW.clientX - mW.left) / wW,
                y: (WW.clientY - mW.top) / wW
              },
              NW = (0, aW.v)(EW, xW, 40 / wW),
              PW = null !== lW ? dW.p.get(lW) : void 0,
              cW = void 0 !== PW && null !== (0, aW.v)(EW, xW.filter((WW => {
                let {
                  id: iW
                } = WW;
                return PW.has(iW)
              })), 40 / wW),
              tW = "menu" === lW && void 0 !== ZW.menu && (0, aW.g)(ZW.menu, EW) && ("menu" === NW || null !== NW && (0, zW.t)(NW, bW.hudElements[NW])),
              AW = cW ? lW : tW ? "menu" : null,
              kW = null !== AW,
              MW = null !== AW && void 0 !== AW ? AW : NW;
            if (!MW) return;
            if (function(WW) {
                Ii++;
                const iW = OW => {
                  OW.pointerId === WW && (Ii = Math.max(0, Ii - 1), window.removeEventListener("pointerup", iW, !0), window.removeEventListener("pointercancel", iW, !0))
                };
                window.addEventListener("pointerup", iW, !0), window.addEventListener("pointercancel", iW, !0)
              }(WW.pointerId), !jW(MW)) return void UW(kW && NW ? NW : MW);
            UW(MW);
            const [KW, SW] = null !== (iW = bW.hudElements[MW]) && void 0 !== iW ? iW : [0, 0], YW = {
              dx: KW,
              dy: SW
            }, yW = {
              skew: {
                x: 0,
                y: 0
              },
              box: ZW[MW]
            };
            sW.current = {
              id: MW,
              pointerId: WW.pointerId,
              startX: WW.clientX,
              startY: WW.clientY,
              origin: ZW[MW],
              from: YW,
              to: YW,
              moved: !1,
              home: ri(YW) ? {
                centre: (0, aW.d)(ZW[MW]),
                anchor: yW
              } : null,
              away: ri(YW) ? null : yW,
              anchor: yW,
              ringStyle: null,
              tapPick: kW ? NW : null
            }, WW.currentTarget.setPointerCapture(WW.pointerId)
          },
          onPointerMove: WW => {
            const OW = sW.current;
            if (!OW || OW.pointerId !== WW.pointerId) return;
            const EW = WW.clientX - OW.startX,
              LW = WW.clientY - OW.startY;
            if (!OW.moved && Math.hypot(EW, LW) < 5) return;
            const ZW = !OW.moved;
            var xW, lW;
            (OW.moved = !0, ZW) && (OW.ringStyle = null !== (xW = null === (lW = mW.current) || void 0 === lW ? void 0 : lW.getAttribute("style")) && void 0 !== xW ? xW : null);
            const bW = (0, aW.z)(tW.width, tW.height, AW);
            if (!OW.home) {
              var jW;
              OW.to = {
                dx: 0,
                dy: 0
              }, iW(OW.id, OW.to);
              const WW = cW(OW.id),
                mW = null !== (jW = KW(OW, WW)) && void 0 !== jW ? jW : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: OW.origin
                },
                EW = (0, aW.d)(OW.origin);
              OW.home = {
                centre: WW ? (0, aW.d)(WW) : {
                  x: EW.x - OW.from.dx * tW.width,
                  y: EW.y - OW.from.dy * tW.height
                },
                anchor: mW
              }
            }
            const UW = OW.home;
            let kW = !1;
            const MW = WW => {
                kW = !1;
                let mW = (0, aW.n)(WW.box, EW / wW, LW / wW, bW);
                const NW = tW.width / 2;
                if (PW && Math.abs((0, aW.d)(OW.origin).x + mW.x - NW) <= 8 / wW) {
                  const iW = NW - (0, aW.d)(OW.origin).x,
                    EW = (0, aW.n)(WW.box, iW, mW.y, bW);
                  kW = Math.abs(EW.x - iW) < .01, kW && (mW = EW)
                }
                const cW = (0, aW.u)(OW.from, mW.x - WW.skew.x, mW.y - WW.skew.y, tW.width, tW.height);
                OW.to = Fi(cW), OW.anchor = WW, iW(OW.id, OW.to)
              },
              SW = (0, aW.n)(UW.anchor.box, EW / wW, LW / wW, bW),
              YW = NW.current,
              yW = (0, aW.d)(OW.origin),
              JW = ((0, TW.X)(OW.id) ? 20 : 6) / wW;
            if (Math.abs(yW.x + SW.x - UW.centre.x) <= JW && Math.abs(yW.y + SW.y - UW.centre.y) <= JW) OW.to = {
              dx: 0,
              dy: 0
            }, OW.anchor = UW.anchor, kW = PW && Math.abs(UW.centre.x - tW.width / 2) < 1, iW(OW.id, OW.to);
            else if (OW.away) MW(OW.away);
            else {
              var hW;
              MW(UW.anchor), OW.away = null !== (hW = KW(OW, cW(OW.id))) && void 0 !== hW ? hW : UW.anchor, MW(OW.away)
            }
            null === YW || void 0 === YW || YW.classList.add("Shown"), null === YW || void 0 === YW || YW.classList.toggle("Snapped", kW), (WW => {
              const iW = mW.current;
              if (iW) {
                const {
                  skew: OW,
                  box: mW
                } = WW.anchor;
                iW.style.left = mW.left * wW + "px", iW.style.top = mW.top * wW + "px", iW.style.width = (mW.right - mW.left) * wW + "px", iW.style.height = (mW.bottom - mW.top) * wW + "px", iW.style.translate = `${((WW.to.dx-WW.from.dx)*tW.width+OW.x)*wW}px ${((WW.to.dy-WW.from.dy)*tW.height+OW.y)*wW}px`
              }
            })(OW)
          },
          onPointerUp: WW => {
            SW(WW, !0)
          },
          onPointerCancel: WW => {
            SW(WW, !1)
          }
        }
      }
    }
    var WO = OW(10146);

    function iO(WW, iW) {
      return Object.keys(WW).filter((WW => WW !== iW)).map((iW => WW[iW]))
    }

    function OO(WW) {
      return WW.map((WW => {
        let {
          id: iW,
          box: OW
        } = WW;
        return `${iW}:${OW.left},${OW.top},${OW.right},${OW.bottom}`
      })).join(";")
    }

    function mO(WW) {
      const iW = [],
        OW = iW => (0, TW.X)(iW) && !WW.documentElement.classList.contains((0, FW.A)(iW));
      for (const LW of WW.querySelectorAll(`[${dW.g}]`)) {
        const WW = OW(LW.getAttribute(dW.g)) ? LW.querySelector(".ScaleOnHover") : null,
          mW = (null !== WW && void 0 !== WW ? WW : LW).getBoundingClientRect();
        (mW.width > 0 || mW.height > 0) && iW.push({
          id: LW.getAttribute(dW.g),
          box: (0, aW.j)(mW)
        })
      }
      const mW = WW => (0, aW.E)(iW.filter((iW => {
          let {
            id: OW
          } = iW;
          return WW(OW)
        })).map((WW => {
          let {
            box: iW
          } = WW;
          return iW
        }))),
        EW = {};
      for (const LW of new Set(iW.map((WW => WW.id)))) EW[LW] = mW((WW => WW === LW));
      for (const [LW, cW] of dW.p) {
        const WW = mW((WW => cW.has(WW)));
        WW && (EW[LW] = WW)
      }
      const NW = WW.querySelector(".TouchInventoryKeys"),
        PW = NW ? (0, aW.j)(NW.getBoundingClientRect()) : null;
      return {
        boxes: EW,
        pieces: iW,
        pairHome: PW
      }
    }

    function EO(WW, iW, OW) {
      const mW = iW.right - iW.left,
        EW = iW.bottom - iW.top;
      return Vi(WW, "cluster", (iW => {
        const NW = OW => {
            iW(OW);
            const mW = [...WW.querySelectorAll(`[${dW.g}]:not(.HudPreviewGhost)`)].filter((WW => dW.c.has(WW.getAttribute(dW.g)))).map((WW => (0, aW.j)(WW.getBoundingClientRect()))),
              EW = (0, aW.E)(mW);
            return EW ? {
              w: EW.right - EW.left,
              h: EW.bottom - EW.top
            } : null
          },
          PW = WW => !WW || WW.w <= mW && WW.h <= EW,
          LW = NW(1),
          cW = NW(TW.h);
        if (!LW || PW(cW)) return TW.h;
        const wW = (WW, iW, OW) => iW > WW ? 1 + (OW - WW) * (TW.h - 1) / (iW - WW) : TW.h;
        let tW = Math.floor(Math.min(TW.h, wW(LW.w, cW.w, mW), wW(LW.h, cW.h, EW)) / OW + 1e-6) * OW;
        for (; tW > 1 && !PW(NW(tW));) tW = Math.round(100 * (tW - OW)) / 100;
        return Math.max(1, tW)
      }))
    }

    function NO(WW) {
      di(document, WW, {
        keysAbove: !1
      });
      const iW = parseFloat(getComputedStyle(WW.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        OW = Number.isFinite(iW) && iW < 0;
      return di(document, WW, {
        keysAbove: OW
      }), (0, WO.c)(WW), OW
    }

    function PO(WW) {
      const iW = WW.querySelector(".TouchInventoryKey.ShopKey");
      return null !== iW && "1" === getComputedStyle(iW).getPropertyValue("--touch-shop-above").trim()
    }

    function LO(WW, iW) {
      let {
        layout: OW,
        orientation: mW,
        viewport: NW,
        replicaKey: PW,
        joystickFixed: LW,
        busy: cW
      } = iW;
      const [wW, tW] = (0, EW.useState)(null), [ZW, xW] = (0, EW.useState)({
        boxes: {},
        pieces: []
      }), [lW, AW] = (0, EW.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [bW, jW] = (0, EW.useState)(!1), [UW, kW] = (0, EW.useState)(!1), [sW, MW] = (0, EW.useState)(!1), KW = (0, EW.useCallback)((WW => {
        kW(WW), WW && MW(!0)
      }), []), SW = OW.hudLayouts[mW].hudSafe;
      (0, EW.useLayoutEffect)((() => {
        const iW = WW.current.contentDocument;
        iW.open(), iW.write("<!DOCTYPE html><html><head></head><body></body></html>"), iW.close(), tW(iW)
      }), [WW]);
      const YW = (0, EW.useCallback)((() => {
          wW && ((0, zW.v)(wW), xW(mO(wW)), AW(function(WW, iW) {
            const OW = Di(WW),
              [mW, EW, NW, PW] = iW ? (0, FW.v)(iW, window.innerWidth, window.innerHeight, OW) : OW;
            return {
              top: mW,
              right: EW,
              bottom: NW,
              left: PW
            }
          }(wW, SW)))
        }), [wW, SW]),
        yW = (0, EW.useCallback)((() => {
          wW && jW(NO(wW))
        }), [wW]),
        TW = (0, EW.useRef)((() => {}));
      return TW.current = () => {
        yW(), cW() || YW()
      }, (0, EW.useLayoutEffect)((() => {
        if (wW) return oi(document, wW, (() => {
          TW.current()
        }), KW)
      }), [wW, KW]), (0, EW.useLayoutEffect)(yW, [yW, NW]), (0, EW.useLayoutEffect)((() => {
        wW && (di(document, wW, {
          keysAbove: bW
        }), vi(document, wW, OW, mW, LW), yW(), YW())
      }), [wW, OW, mW, bW, PW, LW, NW, YW, yW]), (0, EW.useEffect)((() => {
        var WW;
        if (!wW) return;
        const iW = new ResizeObserver((() => {
          cW() || YW()
        }));
        for (const OW of wW.querySelectorAll(`[${dW.g}]`)) iW.observe(OW);
        return null === (WW = wW.fonts) || void 0 === WW || WW.ready.then(YW), () => {
          iW.disconnect()
        }
      }), [wW, YW, cW, PW]), {
        doc: wW,
        boxes: ZW.boxes,
        pieces: ZW.pieces,
        insets: lW,
        keysAbove: bW,
        ready: UW,
        settled: sW
      }
    }
    const cO = ["Above", "Below", "Left", "Right"];

    function wO(WW, iW, OW, mW, EW) {
      const NW = OW[WW],
        PW = (NW.left + NW.right) / 2,
        LW = (NW.top + NW.bottom) / 2,
        cW = (7.5 * iW.length + 14) / mW,
        wW = 18 / mW,
        tW = {
          Above: {
            left: PW - cW / 2,
            top: NW.top - wW,
            right: PW + cW / 2,
            bottom: NW.top
          },
          Below: {
            left: PW - cW / 2,
            top: NW.bottom,
            right: PW + cW / 2,
            bottom: NW.bottom + wW
          },
          Left: {
            left: NW.left - cW,
            top: LW - wW / 2,
            right: NW.left,
            bottom: LW + wW / 2
          },
          Right: {
            left: NW.right,
            top: LW - wW / 2,
            right: NW.right + cW,
            bottom: LW + wW / 2
          }
        },
        ZW = iO(OW, WW),
        xW = {
          left: 0,
          top: 0,
          right: EW.width,
          bottom: EW.height
        };
      return cO[(0, aW.q)(cO.map((WW => tW[WW])), ZW, {
        bounds: xW
      })]
    }

    function tO() {
      const [WW, iW] = (0, GW.d)();
      return (0, EW.useMemo)((() => ({
        width: WW,
        height: iW
      })), [WW, iW])
    }

    function ZO(WW) {
      var iW;
      const {
        layout: OW,
        orientation: NW,
        selected: PW,
        onSelect: LW,
        onMove: wW,
        canMove: tW,
        actionButtons: ZW,
        joystickFixed: xW,
        presence: lW,
        keyNames: bW,
        maxHeight: jW,
        fill: UW = !1,
        apiRef: kW
      } = WW, {
        t: sW
      } = (0, mW.B)(), MW = tO(), SW = (null !== (iW = (0, AW.e)("maxAuraLevel")) && void 0 !== iW ? iW : 0) > 0, YW = OW.hudLayouts[NW], yW = (0, EW.useRef)(null), JW = (0, EW.useRef)(null), hW = (0, EW.useRef)(null), HW = (0, EW.useRef)(null), nW = (0, EW.useRef)(null), uW = (0, EW.useRef)(null), eW = (0, IW.d)(yW).width, vW = UW ? 1 : eW > 0 ? (0, aW.x)(eW, MW.width, MW.height, jW) : 0, gW = (0, EW.useRef)((() => !1)), DW = (0, EW.useCallback)((() => gW.current()), []), VW = `${ZW}:${xW}:${SW}`, {
        doc: pW,
        boxes: fW,
        pieces: CW,
        insets: XW,
        keysAbove: BW,
        ready: RW,
        settled: GW
      } = LO(hW, {
        layout: OW,
        orientation: NW,
        viewport: MW,
        replicaKey: VW,
        joystickFixed: xW,
        busy: DW
      }), QW = (0, EW.useCallback)((WW => {
        pW && vi(document, pW, WW, NW, xW)
      }), [pW, NW, xW]), Wi = (0, EW.useCallback)((WW => {
        if (!pW || !GW) return null;
        QW(WW);
        const iW = NO(pW),
          OW = function(WW, iW) {
            let {
              boxes: OW,
              pieces: mW,
              pairHome: EW
            } = WW;
            const NW = mW.find((WW => dW.l.has(WW.id)));
            if (!NW || !EW) return OW;
            const PW = (0, aW.d)(EW),
              LW = iW(NW.id),
              cW = Bi(NW.box) / LW / 2,
              wW = (NW.box.bottom - NW.box.top) / LW / 2;
            return {
              ...OW,
              inventory: {
                left: PW.x - cW,
                top: PW.y - wW,
                right: PW.x + cW,
                bottom: PW.y + wW
              }
            }
          }(mO(pW), (iW => (0, TW.G)(WW, NW, iW)[2]));
        return {
          boxes: OW,
          keysAbove: iW,
          shopAlone: PO(pW)
        }
      }), [pW, GW, QW, NW]), ii = (0, EW.useRef)(null), Oi = (0, EW.useRef)(null), mi = (0, EW.useRef)(OW);
      mi.current = OW;
      const Ei = (0, EW.useCallback)((() => {
        null !== ii.current && (cancelAnimationFrame(ii.current), ii.current = null)
      }), []);
      (0, EW.useEffect)((() => Ei), [OW, Ei]);
      const Ni = (0, EW.useRef)(-1 / 0),
        {
          lockable: Pi
        } = WW,
        Li = (0, EW.useCallback)((WW => {
          if (QW(WW), Ni.current = performance.now(), !GW || 0 === OW.hudLayouts[NW].hudLocked.length) return;
          const iW = OW;
          Ei(), ii.current = requestAnimationFrame((() => {
            var OW;
            if (ii.current = null, mi.current !== iW) return;
            const mW = (null === (OW = Oi.current) || void 0 === OW ? void 0 : OW.from) === iW ? Oi.current.measured : Wi(iW);
            mW && (Oi.current = {
              from: iW,
              measured: mW
            }), QW(mW ? Ri(iW, WW, NW, MW, Wi, {
              canKeep: Pi,
              passes: 1,
              before: mW
            }) : WW)
          }))
        }), [QW, GW, OW, NW, MW, Wi, Pi, Ei]),
        ci = Qi({
          preview: (WW, iW) => {
            iW ? Li((0, TW.rb)(OW, NW, WW, iW)) : (Ei(), QW(OW))
          },
          stageRef: JW,
          ringRef: HW,
          centreLineRef: nW,
          snapCentre: OW.hudSnapCentre,
          ready: GW,
          measure: WW => {
            const iW = pW && RW ? mO(pW).boxes[WW] : void 0;
            return iW && (0, aW.k)(iW, MW.width, MW.height) ? iW : null
          },
          k: vW,
          viewport: MW,
          boxes: fW,
          pieces: CW,
          selected: PW,
          insets: XW,
          layout: YW,
          canMove: tW,
          onSelect: LW,
          onMove: (WW, iW, OW) => {
            Ei(), wW(WW, iW, OW)
          }
        });
      (0, EW.useLayoutEffect)((() => {
        gW.current = ci.busy
      }), [ci.busy]);
      const wi = (0, EW.useRef)([]),
        ti = (0, EW.useRef)(YW.hudElements);
      (0, EW.useEffect)((() => {
        for (const EW of Object.keys(YW.hudElements)) {
          var WW, iW, OW, mW;
          (null !== (WW = null === (iW = YW.hudElements[EW]) || void 0 === iW ? void 0 : iW[2]) && void 0 !== WW ? WW : 1) > (null !== (OW = null === (mW = ti.current[EW]) || void 0 === mW ? void 0 : mW[2]) && void 0 !== OW ? OW : 1) && tW(EW) && !(0, zW.t)(EW, YW.hudElements[EW]) && wi.current.push(...(0, dW.I)(EW, BW, tW))
        }
        ti.current = YW.hudElements
      }), [YW.hudElements, tW, BW]), (0, EW.useEffect)((() => {
        if (!RW) return;
        const WW = (0, aW.z)(MW.width, MW.height, XW);
        for (const OW of (0, dW.G)(wi.current.splice(0), fW, WW, tW)) {
          const mW = fW[OW];
          if (!mW || ci.busy() || !(0, aW.k)(mW, MW.width, MW.height)) continue;
          const EW = (0, aW.D)(mW, WW);
          if (0 !== EW.x || 0 !== EW.y) {
            var iW;
            const [WW, mW] = null !== (iW = YW.hudElements[OW]) && void 0 !== iW ? iW : [0, 0];
            wW(OW, WW + EW.x / MW.width, mW + EW.y / MW.height)
          }
        }
      }), [fW, RW]), (0, EW.useImperativeHandle)(kW, (() => ({
        setScale: (WW, iW) => {
          Li((0, TW.rb)(OW, NW, WW, {
            scale: iW
          }))
        },
        setKeyStyle: WW => {
          QW({
            ...OW,
            ...WW
          })
        },
        keepLocks: (WW, iW) => (Ei(), Ri(WW, iW, NW, MW, Wi, {
          canKeep: Pi
        })),
        setSafe: WW => {
          const iW = (0, FW.v)(WW, MW.width, MW.height, Di(null !== pW && void 0 !== pW ? pW : document));
          Li((0, TW.xb)(OW, NW, WW)), uW.current && (uW.current.style.inset = iW.map((WW => WW * vW + "px")).join(" "))
        }
      })), [QW, Li, Wi, Ei, Pi, pW, OW, NW, MW, vW]);
      const Zi = (0, TW.s)(YW.hudElements),
        xi = PW ? fW[PW] : void 0,
        li = PW ? (0, dW.y)(PW, ZW, sW, bW) : "",
        Ai = (0, Si.g)(MW.width, MW.height),
        bi = PW ? (0, rW.g)(PW, CW, YW, Ai) : [],
        ji = new Set((0, zW.q)(YW.hudElements)),
        Ui = (0, zW.E)(YW, (0, zW.C)(lW.rowIcons)).state,
        si = bi.join(),
        Ki = (0, EW.useRef)(WW.onReady);
      Ki.current = WW.onReady, (0, EW.useEffect)((() => {
        var WW;
        null === (WW = Ki.current) || void 0 === WW || WW.call(Ki, GW)
      }), [GW]);
      const Yi = (0, EW.useRef)(WW.onMeasured);
      (0, EW.useLayoutEffect)((() => {
        Yi.current = WW.onMeasured
      }));
      const yi = (0, EW.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        Ti = [OO(CW), MW.width, MW.height, XW.top, XW.right, XW.bottom, XW.left, RW, VW].join("|");
      (0, EW.useEffect)((() => {
        const WW = si ? si.split(",") : [],
          iW = () => {
            var iW;
            null === (iW = Yi.current) || void 0 === iW || iW.call(Yi, fW, WW, yi.current.caps)
          };
        let OW;
        const mW = () => {
          const WW = mi.current;
          if (!pW || WW === yi.current.layout && Ti === yi.current.input) return !1;
          const EW = Ni.current + 250 - performance.now();
          return WW === yi.current.layout && (EW > 0 || DW()) ? (OW = setTimeout((() => {
            mW() && iW()
          }), Math.max(EW, 62.5)), !1) : (yi.current = {
            layout: WW,
            input: Ti,
            caps: {
              hotbar: fi(pW, Mi),
              cluster: EO(pW, (0, aW.z)(MW.width, MW.height, XW), Mi)
            }
          }, !0)
        };
        return mW(), iW(), () => {
          clearTimeout(OW)
        }
      }), [fW, si, pW, MW, XW, Ti, DW]);
      const Ji = WW => ({
        left: WW.left * vW,
        top: WW.top * vW,
        width: (WW.right - WW.left) * vW,
        height: (WW.bottom - WW.top) * vW
      });
      return (0, KW.jsx)("div", {
        ref: yW,
        className: cW()("HudPreviewBox", {
          Fill: UW
        }),
        style: {
          height: MW.height * vW
        },
        children: (0, KW.jsxs)("div", {
          ref: JW,
          className: "HudPreviewStage",
          style: {
            width: MW.width * vW,
            height: MW.height * vW
          },
          children: [(0, KW.jsx)("iframe", {
            ref: hW,
            className: "HudPreviewFrame",
            title: sW("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: MW.width,
              height: MW.height,
              transform: `scale(${vW})`
            }
          }), pW && (0, qW.createPortal)((0, KW.jsx)(ki, {
            presence: lW,
            portraitPhone: Ai,
            hidden: Zi,
            actionButtons: ZW,
            joystickFixed: xW,
            keysAbove: BW,
            auraBar: SW,
            trayState: Ui,
            moved: ji
          }), pW.body), (0, KW.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...ci.handlers,
            children: [(0, KW.jsx)("div", {
              ref: uW,
              className: "HudPreviewSafeZone",
              style: {
                top: XW.top * vW,
                right: XW.right * vW,
                bottom: XW.bottom * vW,
                left: XW.left * vW
              }
            }), CW.map(((WW, iW) => {
              let {
                id: OW,
                box: mW
              } = WW;
              return (0, KW.jsx)("div", {
                className: "HudPreviewHandle",
                style: Ji((0, aW.o)(mW, 40 / vW))
              }, `${OW}:${iW}`)
            })), YW.hudLocked.map((WW => {
              const iW = fW[WW];
              return iW && (0, KW.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: iW.right * vW,
                  top: iW.top * vW
                },
                children: (0, KW.jsx)(oW.c, {
                  name: "lock"
                })
              }, WW)
            })), (0, KW.jsx)("div", {
              ref: nW,
              className: "HudPreviewCentreLine",
              style: {
                left: MW.width / 2 * vW
              }
            }), PW && xi && (0, KW.jsx)("div", {
              ref: HW,
              className: cW()("HudPreviewRing", {
                Fixed: !tW(PW),
                Overlap: bi.length > 0
              }),
              style: Ji(xi),
              children: (0, KW.jsx)("span", {
                className: cW()("HudPreviewRingLabel", wO(PW, li, fW, vW, MW)),
                children: li
              })
            })]
          })]
        })
      })
    }

    function xO(WW, iW) {
      (0, EW.useEffect)((() => {
        var OW;
        null === (OW = WW.current) || void 0 === OW || OW.toggleAttribute("inert", iW)
      }), [WW, iW])
    }
    const lO = "hudFullScreen";

    function AO(WW) {
      let {
        onScale: iW,
        onHidden: OW,
        onReset: NW,
        locked: PW,
        lockable: LW,
        onLocked: cW,
        onClose: tW,
        ...ZW
      } = WW;
      const {
        t: xW
      } = (0, mW.B)(), lW = (0, EW.useRef)(null);
      (0, RW.r)("popup", lW, tW),
      function(WW) {
        const iW = (0, EW.useRef)(WW);
        iW.current = WW, (0, EW.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [lO]: !0
          }, "");
          let WW = !1;
          const OW = () => {
            WW = !0, iW.current()
          };
          return window.addEventListener("popstate", OW), () => {
            var iW;
            window.removeEventListener("popstate", OW), !WW && null !== (iW = window.history.state) && void 0 !== iW && iW[lO] && window.history.back()
          }
        }), [])
      }(tW), (0, EW.useEffect)((() => {
        function WW(WW) {
          "Escape" === WW.key && (WW.stopPropagation(), tW())
        }
        return window.addEventListener("keydown", WW, !0), () => {
          window.removeEventListener("keydown", WW, !0)
        }
      }), [tW]);
      const {
        selected: AW
      } = ZW, bW = (0, EW.useRef)(null), jW = (0, EW.useRef)(null), [UW, kW] = (0, EW.useState)(!1);
      xO(jW, !UW);
      const [sW, MW] = (0, EW.useState)(null), [SW, YW] = (0, EW.useState)([]), [yW, TW] = si(), JW = (0, EW.useRef)(ZW.selected);
      JW.current = ZW.selected;
      const hW = (0, EW.useRef)({}),
        HW = (0, EW.useCallback)((() => {
          const WW = bW.current;
          WW && MW(function(WW, iW, OW) {
            var mW;
            const {
              innerWidth: EW,
              innerHeight: NW
            } = window, PW = WW.offsetWidth, LW = WW.offsetHeight, cW = Math.max(gi()[0], 6), wW = [];
            for (const xW of [cW, .2 * NW, .5 * NW - LW / 2, .33 * NW])
              for (const WW of [.5, .3, .7]) wW.push({
                left: Math.max(0, Math.min(EW - PW - 6, Math.max(6, EW * WW - PW / 2))),
                top: xW
              });
            const tW = wW.map((WW => ({
                left: WW.left - 6,
                top: WW.top - 6,
                right: WW.left + PW + 6,
                bottom: WW.top + LW + 6
              }))),
              ZW = iO(iW, OW);
            return wW[(0, aW.q)(tW, ZW, {
              avoid: OW && null !== (mW = iW[OW]) && void 0 !== mW ? mW : null
            })]
          }(WW, hW.current, JW.current))
        }), []),
        nW = (0, EW.useCallback)(((WW, iW, OW) => {
          YW(iW), TW(OW), hW.current = WW, HW()
        }), [HW, TW]);
      return (0, EW.useLayoutEffect)(HW, [ZW.selected, HW]), (0, qW.createPortal)((0, KW.jsxs)("div", {
        ref: lW,
        className: "HudFullScreenEditor",
        children: [(0, KW.jsx)(ZO, {
          ...ZW,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: nW,
          onReady: kW,
          lockable: LW
        }), (0, KW.jsxs)("div", {
          ref: bW,
          className: "HudFullScreenToolbar",
          style: null === sW ? void 0 : {
            left: sW.left,
            top: sW.top,
            transform: "none"
          },
          children: [(0, KW.jsx)("div", {
            ref: jW,
            className: "HudFullScreenControls",
            children: (0, KW.jsx)(Ki, {
              selected: AW,
              layout: ZW.layout.hudLayouts[ZW.orientation],
              actionButtons: ZW.actionButtons,
              keyNames: ZW.keyNames,
              overlaps: SW,
              scaleCaps: yW,
              onScale: iW,
              onHidden: OW,
              onReset: NW,
              locked: PW,
              lockable: LW,
              onLocked: cW,
              joystickFixed: ZW.joystickFixed
            })
          }), (0, KW.jsx)(wW.f, {
            className: "HudFullScreenDone",
            onClick: tW,
            padDefaultFocus: !0,
            children: xW("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    var bO = OW(10158);
    const jO = [{
      colour: OW(3390).c,
      name: "default"
    }, {
      colour: "#e34f4f",
      name: "red"
    }, {
      colour: "#e8590c",
      name: "orange"
    }, {
      colour: "#07940e",
      name: "green"
    }, {
      colour: "#2671d7",
      name: "blue"
    }, {
      colour: "#9b39d5",
      name: "purple"
    }, {
      colour: "#c16088",
      name: "pink"
    }, {
      colour: "#0f0f0f",
      name: "black"
    }];

    function UO(WW) {
      let {
        colour: iW,
        previewApi: OW
      } = WW;
      const {
        t: NW
      } = (0, mW.B)(), [PW, LW] = (0, EW.useState)(null), cW = (0, EW.useRef)(null), wW = (0, EW.useRef)(), tW = (0, EW.useRef)(!1), ZW = (0, EW.useCallback)((() => {
        clearTimeout(wW.current), null !== cW.current && ((0, TW.db)(cW.current), cW.current = null)
      }), []);
      return (0, EW.useEffect)((() => ZW), [ZW]), (0, KW.jsx)(bO.b, {
        label: NW("hudLayout:keyColour"),
        value: null !== PW && void 0 !== PW ? PW : iW,
        swatches: jO.map((WW => ({
          colour: WW.colour,
          label: NW(`hudLayout:keyColour_${WW.name}`)
        }))),
        customLabel: NW("hudLayout:keyColourCustom"),
        onChange: WW => {
          var iW;
          cW.current = WW, LW(WW), null === (iW = OW.current) || void 0 === iW || iW.setKeyStyle({
            hudKeyColour: WW
          }), clearTimeout(wW.current), wW.current = setTimeout((() => {
            ZW(), LW(null)
          }), 250), tW.current || (tW.current = !0, (0, YW.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: "colour"
          }))
        }
      })
    }
    const kO = WW => `${Math.round(100*WW)}%`;

    function sO(WW) {
      let {
        info: iW,
        tuple: OW,
        props: EW
      } = WW;
      const {
        t: NW
      } = (0, mW.B)();
      return (0, KW.jsx)(lW.k, {
        name: NW("hudLayout:size"),
        min: TW.j,
        max: TW.h,
        step: Mi,
        initValue: OW[2],
        disabled: EW.locked.has(iW.id),
        selectableMax: EW.scaleCaps[iW.id],
        cappedNote: NW("hudLayout:sizeCapped"),
        format: kO,
        onChange: WW => {
          EW.onScalePreview(iW.id, WW)
        },
        onChangeComplete: WW => {
          EW.onScale(iW.id, WW)
        }
      })
    }

    function MO(WW) {
      const {
        t: iW
      } = (0, mW.B)(), {
        present: OW,
        elements: NW,
        selected: PW,
        onSelect: LW,
        onHidden: wW,
        onReset: tW,
        note: ZW,
        actionButtons: xW,
        keyNames: lW,
        sizeBesidePreview: AW,
        locked: bW,
        lockable: jW,
        onLocked: UW
      } = WW, {
        rowIconsOpen: kW,
        onRowIconsOpen: sW
      } = WW, MW = (0, EW.useRef)(null), SW = null !== PW && (kW || !(0, TW.X)(PW));
      return (0, EW.useEffect)((() => {
        var WW;
        const iW = PW ? null === (WW = MW.current) || void 0 === WW ? void 0 : WW.querySelector(`[data-hud-row="${PW}"]`) : null;
        if (!iW) return;
        const OW = iW.closest(".SettingsMenuRight"),
          mW = performance.now();
        let EW = null;
        const NW = () => {
            clearInterval(cW), null === OW || void 0 === OW || OW.removeEventListener("scroll", LW)
          },
          LW = () => {
            ai() || NW()
          },
          cW = setInterval((() => {
            const WW = performance.now();
            WW - mW > 1500 ? NW() : ai() ? EW = null : null === EW ? EW = WW : WW - EW >= 150 && (NW(), function(WW) {
              var iW;
              const OW = WW.closest(".SettingsMenuRight"),
                mW = null === (iW = WW.closest(".HudLayoutSettings")) || void 0 === iW ? void 0 : iW.querySelector(".HudLayoutPreviewBox");
              if (!OW || !mW) return;
              const EW = mW.getBoundingClientRect().bottom + 8,
                NW = OW.getBoundingClientRect().bottom - 8,
                PW = WW.getBoundingClientRect();
              PW.top < EW ? OW.scrollBy({
                top: PW.top - EW,
                behavior: "smooth"
              }) : PW.bottom > NW && OW.scrollBy({
                top: Math.min(PW.bottom - NW, PW.top - EW),
                behavior: "smooth"
              })
            }(iW))
          }), 50);
        return null === OW || void 0 === OW || OW.addEventListener("scroll", LW, {
          passive: !0
        }), NW
      }), [PW, SW]), (0, KW.jsx)("div", {
        ref: MW,
        className: "SettingBoxGroup HudElementList",
        children: dW.j.filter((WW => OW.has(WW.id) && (kW || !(0, TW.X)(WW.id)))).map((OW => {
          const mW = (0, TW.H)(NW, OW.id),
            EW = (0, TW.w)(NW, OW.id),
            MW = OW.id === PW,
            SW = OW.scale && !AW,
            YW = ZW(OW.id, MW);
          return (0, KW.jsxs)("div", {
            "data-hud-row": OW.id,
            className: cW()("SettingBox HudElementRow", {
              Open: MW,
              Hidden: EW,
              Child: void 0 !== OW.parent,
              Grandchild: (0, dW.t)(OW.id).length > 1
            }),
            children: [(0, KW.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, KW.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": SW ? MW : void 0,
                onClick: () => {
                  LW(OW.id)
                },
                children: (0, KW.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [(0, dW.y)(OW.id, xW, iW, lW), OW.scale && 1 !== mW[2] && !(MW && SW) && (0, KW.jsxs)(KW.Fragment, {
                    children: [" ", (0, KW.jsx)("span", {
                      className: "HudElementRowSize",
                      children: kO(mW[2])
                    })]
                  }), SW && (0, KW.jsxs)(KW.Fragment, {
                    children: [" ", (0, KW.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, KW.jsx)(DW, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: OW.id,
                actionButtons: xW,
                keyNames: lW,
                locked: bW.has(OW.id),
                lockable: jW(OW.id),
                onLocked: UW
              }), "menu" === OW.id && (0, KW.jsx)(VW, {
                className: "HudElementRowIcon",
                open: kW,
                name: (0, dW.y)(OW.id, xW, iW, lW),
                onToggle: sW
              }), "menu" !== OW.id && (0, KW.jsx)(vW, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: OW.id,
                elements: NW,
                actionButtons: xW,
                keyNames: lW,
                onHidden: wW
              }), (0, KW.jsx)(gW, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: bW.has(OW.id),
                id: OW.id,
                elements: NW,
                actionButtons: xW,
                keyNames: lW,
                onReset: tW
              })]
            }), MW && SW && (0, KW.jsx)(sO, {
              info: OW,
              tuple: mW,
              props: WW
            }), YW && (0, KW.jsx)("div", {
              className: "HudElementNote",
              children: YW
            })]
          }, OW.id)
        }))
      })
    }

    function KO(WW) {
      let {
        preview: iW,
        quick: OW,
        onFullScreen: NW,
        resting: PW,
        onSidePanel: LW
      } = WW;
      const {
        t: cW
      } = (0, mW.B)(), tW = tO(), ZW = (0, EW.useRef)(null), {
        width: xW
      } = (0, IW.d)(ZW), lW = Math.floor(tW.width * Math.min(1, iW.maxHeight / tW.height)), AW = xW - lW - 12, bW = AW >= 130, jW = xW > 0;
      (0, EW.useEffect)((() => {
        jW && LW(bW)
      }), [jW, bW, LW]);
      const UW = (0, aW.x)(bW ? lW : xW, tW.width, tW.height, iW.maxHeight),
        kW = PW ? (0, KW.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: tW.height * UW
          }
        }) : (0, KW.jsx)(ZO, {
          ...iW
        }),
        sW = WW => (0, KW.jsxs)(wW.Z, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: cW("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: NW,
          children: [(0, KW.jsx)(oW.c, {
            name: "expand"
          }), WW && (0, KW.jsx)("span", {
            children: cW("hudLayout:fullScreen")
          })]
        });
      return (0, KW.jsxs)("div", {
        ref: ZW,
        className: "SettingBox HudLayoutPreviewBox",
        children: [xW > 0 && bW && (0, KW.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, KW.jsx)("div", {
            style: {
              width: lW
            },
            children: kW
          }), (0, KW.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, KW.jsx)(Ki, {
              selected: iW.selected,
              ...OW,
              joystickFixed: iW.joystickFixed,
              extra: sW(!iW.selected || AW >= 278)
            })
          })]
        }), xW > 0 && !bW && (0, KW.jsxs)(KW.Fragment, {
          children: [kW, (0, KW.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: sW(!1)
          })]
        })]
      })
    }
    var SO = OW(5115),
      YO = OW(3375),
      yO = OW(3314);
    const TO = WW => {
      const iW = FW.l * ("sides" === WW ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(iW / 2))
    };

    function JO(WW, iW, OW) {
      const [mW, EW, NW, PW] = WW;
      return "sides" === iW ? [mW, OW, NW, OW] : [OW, EW, OW, PW]
    }
    const hO = [null, null, null, null],
      HO = WW => `${WW}px`;

    function nO(WW) {
      let {
        safe: iW,
        onPreview: OW,
        onCommit: NW
      } = WW;
      const {
        t: PW
      } = (0, mW.B)(), LW = (0, FW.v)(null !== iW && void 0 !== iW ? iW : hO, window.innerWidth, window.innerHeight, Di(document).map(Math.round)), cW = (0, EW.useRef)(null !== iW && void 0 !== iW ? iW : hO);
      cW.current = null !== iW && void 0 !== iW ? iW : hO;
      const tW = WW => {
        const iW = Math.min(TO(WW), "sides" === WW ? Math.max(LW[1], LW[3]) : Math.max(LW[0], LW[2]));
        return (0, KW.jsx)(lW.k, {
          name: PW("sides" === WW ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: TO(WW),
          step: 2,
          initValue: iW,
          format: HO,
          onChange: iW => {
            OW(JO(cW.current, WW, iW))
          },
          onChangeComplete: mW => {
            if (mW === iW) return void OW(cW.current);
            const EW = JO(cW.current, WW, mW);
            cW.current = EW, NW(EW), (0, YW.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: WW
            })
          }
        })
      };
      return (0, KW.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, KW.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, KW.jsx)("div", {
            children: PW("hudLayout:safeZone")
          }), (0, KW.jsx)(wW.Z, {
            active: null === iW,
            pressed: null === iW,
            onClick: () => {
              NW(null)
            },
            children: PW("hudLayout:safeZoneAuto")
          })]
        }), tW("sides"), tW("ends")]
      })
    }
    const uO = {
      cluster: "hudLayout:clusterNote",
      inventory: "hudLayout:inventoryNote",
      menu: "hudLayout:menuNote",
      arrows: "hudLayout:arrowsNote",
      sprint: "hudLayout:sprintNote",
      effects: "hudLayout:effectsNote",
      zoom: "hudLayout:zoomNote",
      drop: "hudLayout:dropNote"
    };

    function oO() {
      const {
        t: WW
      } = (0, mW.B)(), iW = (0, TW.qb)(), {
        clientEscMenuOptions: OW
      } = (0, tW.p)(["clientEscMenuOptions"]), NW = (0, JW.f)(), PW = iW.hudLayouts[NW], [LW, cW] = (0, EW.useState)(null), {
        rowIconsOpen: ZW,
        onRowIconsOpen: xW,
        select: AW
      } = function(WW, iW) {
        const [OW, mW] = (0, EW.useState)((() => TW.L.some((iW => void 0 !== WW.hudElements[iW] || WW.hudLocked.includes(iW))))), NW = (0, EW.useCallback)((WW => {
          iW(WW), (0, TW.X)(WW) && mW(!0)
        }), [iW]);
        return {
          rowIconsOpen: OW,
          onRowIconsOpen: mW,
          select: NW
        }
      }(PW, cW), [bW, jW] = (0, EW.useState)([]), [UW, kW] = (0, EW.useState)(null), [sW, MW] = si(), SW = (0, EW.useCallback)(((WW, iW, OW) => {
        jW(iW), MW(OW);
        const mW = Object.keys(WW);
        kW((WW => (null === WW || void 0 === WW ? void 0 : WW.size) === mW.length && mW.every((iW => WW.has(iW))) ? WW : new Set(mW)))
      }), [MW]), {
        gameState: yW
      } = (0, tW.p)(["gameState"]), hW = (0, YO.m)(), nW = (0, yO.q)(), [uW] = (0, EW.useState)((() => {
        var WW, iW, OW, mW;
        return "inGame" === yW ? (0, ii.u)(document, hW, {
          rightOfCamera: null !== (WW = null === (iW = nW.rightOfCamera) || void 0 === iW ? void 0 : iW.icon) && void 0 !== WW ? WW : null,
          leftEnd: null !== (OW = null === (mW = nW.leftEnd) || void 0 === mW ? void 0 : mW.icon) && void 0 !== OW ? OW : null
        }) : ii.e
      })), oW = (0, EW.useRef)(null), eW = (0, EW.useRef)(null), vW = function(WW) {
        const [iW, OW] = (0, EW.useState)((() => .4 * window.innerHeight));
        return (0, EW.useLayoutEffect)((() => {
          var iW;
          const mW = null === (iW = WW.current) || void 0 === iW ? void 0 : iW.closest(".SettingsMenuRight");
          if (!mW) return;
          const EW = () => {
            const WW = mW.clientHeight < dO ? .4 : .5;
            OW(Math.max(80, mW.clientHeight * WW - 24))
          };
          EW();
          const NW = new ResizeObserver(EW);
          return NW.observe(mW), () => {
            NW.disconnect()
          }
        }), [WW]), iW
      }(eW), gW = (0, SO.p)(OW.joystickMode), DW = OW.touchActionButtons, VW = (0, EW.useMemo)((() => (0, ii.t)(uW, DW)), [uW, DW]), pW = (0, EW.useMemo)((() => new Set((0, ii.s)(uW, DW).map((WW => ii.h[WW])))), [uW, DW]);
      (0, EW.useEffect)((() => {
        (0, YW.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [fW, CW] = (0, EW.useState)(!1), [qW, RW] = (0, EW.useState)(!1), GW = (0, EW.useRef)(null);
      xO(GW, !qW);
      const [IW, aW] = (0, EW.useState)(!1), rW = (0, EW.useCallback)((() => {
        aW(!1)
      }), []), FW = (0, EW.useMemo)((() => new Set(PW.hudLocked)), [PW.hudLocked]), QW = WW => {
        var iW, OW;
        const mW = (0, TW.o)(),
          EW = WW(mW);
        (0, TW.nb)(null !== (iW = null === (OW = oW.current) || void 0 === OW ? void 0 : OW.keepLocks(mW, EW)) && void 0 !== iW ? iW : EW)
      }, Wi = (WW, iW) => {
        QW((OW => (0, TW.rb)(OW, NW, WW, iW)))
      }, Oi = (WW, iW, OW) => {
        Wi(WW, {
          dx: iW,
          dy: OW
        }), (0, YW.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${WW}`
        })
      }, mi = (WW, iW) => {
        QW((OW => (0, TW.ub)(OW, NW, WW, iW)))
      }, Ei = WW => {
        const iW = dW.i[WW];
        return (iW.move || iW.scale) && ("joystick" !== WW || gW) && !(0, zW.t)(WW, PW.hudElements[WW])
      }, Ni = WW => dW.i[WW].move && ("joystick" !== WW || gW) && !FW.has(WW), Pi = new Set(dW.j.map((WW => WW.id)).filter((WW => {
        const iW = (0, TW.X)(WW) && !uW.rowIcons.includes(WW) || TW.A[WW].hiddenByDefault && !(0, ii.p)(uW, WW);
        return null === UW || UW.has(WW) || (0, TW.w)(PW.hudElements, WW) && !iW
      }))), Li = {
        present: Pi,
        actionButtons: DW,
        keyNames: VW,
        scaleCaps: sW,
        sizeBesidePreview: fW,
        elements: PW.hudElements,
        selected: LW,
        onSelect: AW,
        rowIconsOpen: ZW,
        onRowIconsOpen: xW,
        onScalePreview: (WW, iW) => {
          var OW;
          null === (OW = oW.current) || void 0 === OW || OW.setScale(WW, iW)
        },
        onScale: (WW, iW) => {
          Wi(WW, {
            scale: iW
          }), (0, YW.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${WW}`
          })
        },
        onHidden: (WW, iW) => {
          Wi(WW, {
            hidden: iW
          }), (0, YW.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${iW?"hide":"show"}:${WW}`
          })
        },
        onReset: WW => {
          Wi(WW, TW.c)
        },
        locked: FW,
        lockable: Ei,
        onLocked: mi,
        note: (iW, OW) => {
          const mW = OW && bW.length > 0 ? WW("hudLayout:overlapsNote", {
            names: (0, dW.w)(bW, DW, WW, VW)
          }) : null;
          if (OW && XW(iW, gW)) return (0, KW.jsxs)(KW.Fragment, {
            children: [mW && (0, KW.jsx)("span", {
              children: mW
            }), (0, KW.jsx)("span", {
              children: WW("hudLayout:floatingJoystickNote")
            }), !fW && (0, KW.jsx)(BW, {})]
          });
          if (mW) return mW;
          const EW = OW && FW.has(iW) ? WW("hudLayout:lockedNote") : null,
            NW = OW && pW.has(iW) ? WW("hudLayout:contextSlotNote") : null;
          if (EW || NW) return (0, KW.jsxs)(KW.Fragment, {
            children: [EW && (0, KW.jsx)("span", {
              children: EW
            }), NW && (0, KW.jsx)("span", {
              children: NW
            })]
          });
          if (OW && (0, zW.t)(iW, PW.hudElements[iW]) && Ni(iW)) return WW("hudLayout:rowIconNote");
          const LW = uO[iW];
          return OW && LW ? WW(LW) : (0, dW.C)(iW) && (0, TW.w)(PW.hudElements, iW) ? WW("hudLayout:inventoryHiddenNote", {
            name: (0, dW.y)(iW, DW, WW, VW)
          }) : null
        }
      };
      return (0, KW.jsxs)("div", {
        ref: eW,
        className: "HudLayoutSettings",
        children: [(0, KW.jsxs)("div", {
          ref: GW,
          className: "HudLayoutBody",
          children: [(0, KW.jsx)("div", {
            className: "HudLayoutOrientation",
            children: WW("landscape" === NW ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, KW.jsx)(KO, {
            preview: {
              layout: iW,
              orientation: NW,
              selected: LW,
              onSelect: AW,
              onMove: Oi,
              canMove: Ni,
              actionButtons: DW,
              joystickFixed: gW,
              presence: uW,
              keyNames: VW,
              maxHeight: vW,
              apiRef: oW,
              onMeasured: SW,
              onReady: RW,
              lockable: Ei
            },
            quick: {
              layout: PW,
              actionButtons: DW,
              keyNames: VW,
              scaleCaps: sW,
              overlaps: bW,
              onScale: Li.onScale,
              onHidden: Li.onHidden,
              onReset: Li.onReset,
              locked: FW,
              lockable: Ei,
              onLocked: mi
            },
            onFullScreen: () => {
              aW(!0)
            },
            resting: IW,
            onSidePanel: CW
          }), IW && (0, KW.jsx)(AO, {
            layout: iW,
            orientation: NW,
            selected: LW,
            onSelect: AW,
            onMove: Oi,
            canMove: Ni,
            actionButtons: DW,
            joystickFixed: gW,
            presence: uW,
            keyNames: VW,
            onScale: Li.onScale,
            onHidden: Li.onHidden,
            onReset: Li.onReset,
            locked: FW,
            lockable: Ei,
            onLocked: mi,
            apiRef: oW,
            onClose: rW
          }), (0, KW.jsx)(nO, {
            safe: PW.hudSafe,
            onCommit: WW => {
              QW((iW => (0, TW.xb)(iW, NW, WW)))
            },
            onPreview: WW => {
              var iW;
              null === (iW = oW.current) || void 0 === iW || iW.setSafe(WW)
            }
          }), (0, KW.jsx)(lW.e, {
            label: WW("hudLayout:snapCentre"),
            checked: iW.hudSnapCentre,
            onClick: WW => {
              (0, TW.lb)(WW)
            },
            circleInfoText: WW("hudLayout:snapCentreInfo")
          }), (0, KW.jsx)(MO, {
            ...Li
          }), (0, KW.jsx)(lW.h, {
            label: WW("hudLayout:shape"),
            options: TW.P.map((iW => ({
              value: iW,
              label: WW(`hudLayout:shape_${iW}`)
            }))),
            value: iW.hudShape,
            onChange: WW => {
              QW((iW => ({
                ...iW,
                hudShape: WW
              }))), (0, YW.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: WW
              })
            }
          }), (0, KW.jsx)(lW.k, {
            name: WW("hudLayout:opacity"),
            min: TW.e,
            max: 1,
            step: .05,
            initValue: iW.hudKeyOpacity,
            format: WW => `${Math.round(100*WW)}%`,
            circleInfoText: WW("hudLayout:opacityInfo"),
            onChange: WW => {
              var iW;
              null === (iW = oW.current) || void 0 === iW || iW.setKeyStyle({
                hudKeyOpacity: WW
              })
            },
            onChangeComplete: WW => {
              (0, TW.hb)(WW), (0, YW.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          }), (0, KW.jsx)(UO, {
            colour: iW.hudKeyColour,
            previewApi: oW
          })]
        }), (0, KW.jsx)(wW.O, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const WW = HW.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await WW.getResult() && (0, TW.Z)()
            }()
          },
          children: WW("hudLayout:resetAll")
        })]
      })
    }
    const dO = 350;
    const eO = [function() {
      const {
        t: WW
      } = (0, mW.B)(), [iW, OW] = (0, EW.useState)(!1), NW = (0, EW.useRef)(null);
      return (0, EW.useEffect)((() => {
        var WW;
        iW && (null === (WW = NW.current) || void 0 === WW || WW.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [iW]), (0, KW.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, KW.jsx)(nW.e, {
          ref: NW,
          icon: "arrows-up-down-left-right",
          title: WW("hudLayout:title"),
          sub: WW("hudLayout:entrySub"),
          expanded: iW,
          onClick: () => {
            OW(!iW)
          }
        }), iW && (0, KW.jsx)(oO, {})]
      })
    }, function() {
      const {
        t: WW
      } = (0, mW.B)(), {
        gameState: iW
      } = (0, tW.p)(["gameState"]), OW = (0, yW.j)((0, AW.e)("runningSpeed"), (0, AW.e)("walkingSpeed")), EW = !(0, TW.w)((0, JW.e)().hudElements, "sprint");
      return "inGame" !== iW || OW ? (0, KW.jsx)(lW.e, {
        label: WW("touchSettings:sprintKey"),
        checked: EW,
        onClick: WW => {
          (0, TW.$)("sprint", !WW), (0, YW.reportAnalyticsClick)({
            id: "touch_settings.sprint_key",
            value: WW ? "show" : "hide"
          })
        },
        circleInfoText: WW("touchSettings:sprintKeyInfo")
      }) : null
    }, function() {
      const {
        t: WW
      } = (0, mW.B)(), {
        joystickMode: iW,
        touchSpeedCurve: OW,
        autorun: EW,
        jumpLock: NW,
        touchEdgeGuard: PW
      } = (0, tW.p)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, KW.jsxs)(KW.Fragment, {
        children: [(0, KW.jsx)(lW.h, {
          label: WW("settingsMenu:joystick"),
          options: MW.Db.map((iW => ({
            value: iW,
            label: WW(SW[iW])
          }))),
          value: iW,
          onChange: WW => {
            tW.d.setClientEscMenuOptions({
              joystickMode: WW
            })
          },
          circleInfoText: WW("settingsMenu:joystickInfo")
        }), (0, KW.jsx)(lW.e, {
          label: WW("settingsMenu:preciseWalking"),
          checked: OW,
          onClick: WW => {
            tW.d.setClientEscMenuOptions({
              touchSpeedCurve: WW
            })
          },
          circleInfoText: WW("settingsMenu:preciseWalkingInfo")
        }), (0, KW.jsx)(lW.e, {
          label: WW("settingsMenu:autoRun"),
          checked: EW,
          onClick: WW => {
            tW.d.setClientEscMenuOptions({
              autorun: WW
            })
          },
          circleInfoText: WW("settingsMenu:autoRunInfo")
        }), (0, KW.jsx)(lW.e, {
          label: WW("settingsMenu:jumpLock"),
          checked: NW,
          onClick: WW => {
            tW.d.setClientEscMenuOptions({
              jumpLock: WW
            })
          },
          circleInfoText: WW("settingsMenu:jumpLockInfo")
        }), (0, KW.jsx)(lW.e, {
          label: WW("touchSettings:stopAtEdges"),
          checked: PW,
          onClick: WW => {
            tW.d.setClientEscMenuOptions({
              touchEdgeGuard: WW
            })
          },
          circleInfoText: WW("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, KW.jsx)(sW.c, {})
    }, function() {
      const {
        t: WW
      } = (0, mW.B)(), {
        clientEscMenuOptions: iW
      } = (0, tW.p)(["clientEscMenuOptions"]);
      return (0, hW.c)() ? (0, KW.jsx)(lW.e, {
        label: WW("settingsMenu:vibration"),
        checked: iW.vibration,
        onClick: WW => {
          tW.d.setClientEscMenuOptions({
            vibration: WW
          })
        },
        circleInfoText: WW("settingsMenu:vibrationInfo")
      }) : null
    }];

    function vO() {
      return (0, KW.jsx)(KW.Fragment, {
        children: eO.map(((WW, iW) => (0, KW.jsx)(WW, {}, iW)))
      })
    }
    var gO = OW(10020),
      DO = OW(10011),
      VO = OW(1782);

    function pO() {
      const {
        t: WW
      } = (0, mW.B)(), iW = (0, gO.m)(), OW = DO.f.filter((WW => void 0 !== iW[WW])).length;
      return (0, KW.jsx)("div", {
        className: "ControlsContainer QuickChatPhrasesSection",
        children: (0, KW.jsxs)(BO, {
          title: WW("quickChat:settingsTitle"),
          defaultOpen: !1,
          children: [DO.f.map(((WW, OW) => (0, KW.jsx)(fO, {
            phraseKey: WW,
            number: OW + 1,
            custom: iW[WW]
          }, WW))), OW > 1 && (0, KW.jsx)(wW.O, {
            className: "QuickChatPhrasesResetAll",
            onClick: gO.g,
            children: WW("quickChat:resetAll")
          })]
        })
      })
    }

    function fO(WW) {
      let {
        phraseKey: iW,
        number: OW,
        custom: NW
      } = WW;
      const {
        t: PW
      } = (0, mW.B)(), LW = PW(iW), cW = null !== NW && void 0 !== NW ? NW : LW, tW = (0, EW.useRef)(null);
      return (0, EW.useEffect)((() => {
        const WW = tW.current;
        return () => {
          var OW;
          WW && (null !== (OW = (0, gO.e)()[iW]) && void 0 !== OW ? OW : LW) === cW && (0, gO.l)(iW, WW.value, LW)
        }
      }), [iW, LW, cW]), (0, KW.jsxs)("div", {
        className: "ControlRow QuickChatPhraseRow",
        children: [(0, KW.jsx)(VO.b, {
          domRef: tW,
          className: "QuickChatPhraseInput",
          defaultValue: cW,
          maxLength: Wi.Uc,
          ariaLabel: PW("quickChat:phraseNumber", {
            number: OW
          }),
          onEnter: () => {
            var WW;
            null === (WW = tW.current) || void 0 === WW || WW.blur()
          },
          onBlur: () => {
            var WW;
            const OW = tW.current;
            OW && ((0, gO.l)(iW, OW.value, LW), OW.value = null !== (WW = (0, gO.e)()[iW]) && void 0 !== WW ? WW : LW)
          }
        }, cW), (0, KW.jsx)(wW.Z, {
          className: "QuickChatPhraseReset",
          disabled: void 0 === NW,
          ariaLabel: PW("quickChat:resetPhrase", {
            number: OW
          }),
          onClick: () => {
            (0, gO.j)(iW)
          },
          children: (0, KW.jsx)(oW.c, {
            name: "rotate-left"
          })
        })]
      })
    }
    var CO = OW(5049);

    function XO() {
      const {
        t: WW
      } = (0, mW.B)(), {
        isTouchScreen: iW,
        clientEscMenuOptions: OW,
        gameState: PW
      } = (0, tW.p)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), LW = (0, AW.e)("ezBridging"), cW = (0, AW.e)("ezTowering"), jW = "inGame" !== PW || !0 === LW, UW = (0, bW.e)(), sW = null !== UW && ("inGame" !== PW || !0 === cW), [, MW] = (0, EW.useReducer)((WW => WW + 1), 0), SW = (0, kW.d)(), [YW, yW] = (0, EW.useState)(CO.h);
      return (0, KW.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [SW && (0, KW.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, KW.jsx)("div", {
            children: WW("controller:settingsControlsNote")
          }), (0, KW.jsx)(wW.Z, {
            onClick: () => {
              tW.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: WW("controller:settingsOpenController")
          })]
        }), (0, ZW.isTouchscreen)() && !(0, ZW.isMobile)() ? (0, KW.jsx)(KW.Fragment, {
          children: (0, KW.jsx)(lW.e, {
            label: WW("settingsMenu:useTouchControls"),
            checked: YW,
            onClick: WW => {
              (0, CO.e)(WW), yW(WW)
            }
          })
        }) : null, iW && (0, KW.jsx)(vO, {}), (iW || SW) && (0, KW.jsx)(pO, {}), jW && (0, KW.jsx)(lW.e, {
          label: WW("settingsMenu:ezBridging"),
          checked: OW.ezBridging,
          onClick: WW => {
            tW.d.setClientEscMenuOptions({
              ezBridging: WW
            })
          },
          circleInfoText: WW("settingsMenu:ezBridgingInfo")
        }), sW && (0, KW.jsx)(lW.e, {
          label: WW("settingsMenu:ezTowering"),
          checked: OW.ezTowering,
          onClick: WW => {
            tW.d.setClientEscMenuOptions({
              ezTowering: WW
            })
          },
          circleInfoText: WW("jump" === UW ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, KW.jsx)(lW.e, {
          label: WW("settingsMenu:crouchToggle"),
          checked: OW.crouchIsToggle,
          onClick: WW => {
            tW.d.setClientEscMenuOptions({
              crouchIsToggle: WW
            })
          },
          circleInfoText: WW("settingsMenu:crouchToggleInfo")
        }), (0, KW.jsx)(lW.e, {
          label: WW("settingsMenu:hideUiToggle"),
          checked: OW.hideUiIsToggle,
          onClick: WW => {
            tW.d.setClientEscMenuOptions({
              hideUiIsToggle: WW
            })
          },
          circleInfoText: WW("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, xW.d)() && (0, KW.jsx)(lW.k, {
          name: WW("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: OW.touchscreenSensitivity,
          onChange: WW => {
            tW.d.setClientEscMenuOptions({
              touchscreenSensitivity: WW
            })
          }
        }), !(0, ZW.isMobile)() && (0, KW.jsx)(lW.k, {
          name: WW("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: OW.mouseSensitivity,
          onChange: WW => {
            tW.d.setClientEscMenuOptions({
              mouseSensitivity: WW
            })
          }
        }), !(0, ZW.isMobile)() && (0, KW.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, KW.jsx)("div", {
            className: "SliderText",
            children: WW("settingsMenu:keyBindings")
          }), NW.c.map((iW => (0, KW.jsx)(BO, {
            title: WW(iW.name.translationKey, iW.name.params),
            defaultOpen: NW.g.has(iW.id),
            children: iW.actions.map((WW => (0, KW.jsx)(qO, {
              noaAction: WW,
              forceUpdate: MW,
              clashesWith: iW.clashesWith,
              showPadGlyph: SW
            }, WW)))
          }, iW.name.translationKey))), (0, KW.jsx)(wW.O, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, NW.I)(), MW()
            },
            children: WW("controls:resetBindings")
          })]
        })]
      })
    }

    function BO(WW) {
      let {
        title: iW,
        defaultOpen: OW,
        children: mW
      } = WW;
      const [NW, PW] = (0, EW.useState)(OW);
      return (0, KW.jsxs)("div", {
        className: cW()("ControlsSection", {
          Collapsed: !NW
        }),
        children: [(0, KW.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            PW(!NW)
          },
          children: [(0, KW.jsx)("div", {
            className: "ControlsSectionTitle",
            children: iW
          }), (0, KW.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), NW && (0, KW.jsx)("div", {
          className: "ControlsSectionRows",
          children: mW
        })]
      })
    }

    function qO(WW) {
      let {
        noaAction: iW,
        forceUpdate: OW,
        clashesWith: LW,
        showPadGlyph: tW
      } = WW;
      const {
        t: ZW
      } = (0, mW.B)(), xW = (0, UW.c)(iW), [lW, AW] = (0, EW.useState)(!1), [bW, kW] = (0, EW.useState)("controls:clickToEnterNewBinding"), [sW, MW] = (0, EW.useState)(null), [SW, YW] = (0, EW.useState)(null), yW = (0, EW.useRef)(null);
      (0, EW.useEffect)((() => {
        lW && yW.current && yW.current.focus()
      }), [lW]);
      const TW = NW.v[iW].filter((WW => PW.h[WW]));
      let JW = null;
      const hW = [],
        HW = LW.flatMap((WW => {
          var iW, OW;
          return null !== (iW = null === (OW = NW.c.find((iW => iW.id === WW))) || void 0 === OW ? void 0 : OW.actions) && void 0 !== iW ? iW : []
        }));
      for (const mW of HW) {
        if (mW === iW) continue;
        const WW = NW.v[mW];
        for (const iW of WW) TW.includes(iW) && hW.push(ZW(NW.x[mW].translationKey, NW.x[mW].params))
      }
      hW.length > 0 && (JW = ZW("controls:sharedBindingsWarning") + " ", JW += hW.join(", "));
      const nW = () => {
          AW(!1), MW(null), kW("controls:clickToEnterNewBinding"), YW(null)
        },
        uW = () => "BindingInput_" + iW;
      return (0, KW.jsxs)("div", {
        className: cW()("ControlRow", {
          WarningBorder: null !== JW
        }),
        children: [(0, KW.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, KW.jsxs)("div", {
            className: "ControlName",
            children: [ZW(NW.x[iW].translationKey, NW.x[iW].params), tW && xW && (0, KW.jsx)(jW.e, {
              glyph: xW,
              className: "ControlPadGlyph"
            })]
          }), (0, KW.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, KW.jsxs)("div", {
              className: "ControlBindingsList",
              children: [TW.map((WW => (0, KW.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, KW.jsx)("div", {
                  children: (0, NW.m)(WW)
                }), (0, KW.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const mW = (0, NW.B)(iW, WW);
                    mW.isError() ? YW(mW.asError().message) : YW(null), OW()
                  },
                  children: "\xd7"
                })]
              }, WW))), !lW && (0, KW.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  AW(!0), YW(null)
                },
                children: (0, KW.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), lW && (0, KW.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, KW.jsxs)("div", {
                className: "InputContainer",
                children: [(0, KW.jsx)("div", {
                  className: "InputOverlay",
                  children: sW ? (0, NW.m)(sW) : (0, KW.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: ZW(bW)
                  })
                }), (0, KW.jsx)("input", {
                  ref: yW,
                  id: uW(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: WW => {
                    if ("Escape" === WW.code) return nW(), WW.preventDefault(), void WW.stopPropagation();
                    const iW = WW.code;
                    PW.e.includes(iW) ? (YW(null), MW(iW)) : (YW("controls:keyIsReserved"), MW(null)), WW.preventDefault(), WW.stopPropagation()
                  },
                  onMouseDown: WW => {
                    const iW = "Mouse" + (WW.button + 1);
                    document.activeElement && document.activeElement.id === uW() ? PW.e.includes(iW) ? (YW(null), MW(iW)) : (YW("controls:keyIsReserved"), MW(null)) : kW("controls:enterNewBinding"), WW.stopPropagation()
                  },
                  onBlur: () => {
                    kW("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, KW.jsx)(wW.f, {
                onPointerDown: WW => {
                  WW.preventDefault()
                },
                onClick: () => {
                  (0, NW.b)(iW, sW), OW(), nW()
                },
                className: "ControlBindingAddButton",
                disabled: null === sW,
                children: ZW("general:add")
              }), (0, KW.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  nW()
                },
                children: "\xd7"
              })]
            }), SW && (0, KW.jsx)("div", {
              className: "ControlBindingError",
              children: ZW(SW)
            })]
          })]
        }), JW && (0, KW.jsx)("div", {
          className: "ControlRowWarning",
          children: JW
        })]
      })
    }
  },
  10122: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW
    });
    var mW = OW(62),
      EW = OW(1391),
      NW = OW(1283);
    const PW = (0, mW.forwardRef)((function(WW, iW) {
      let {
        icon: OW,
        title: mW,
        sub: PW,
        expanded: LW,
        onClick: cW
      } = WW;
      return (0, NW.jsxs)("button", {
        ref: iW,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": LW,
        onClick: cW,
        children: [(0, NW.jsx)(EW.c, {
          name: OW,
          className: "FeaturedSettingsEntryIcon"
        }), (0, NW.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, NW.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: mW
          }), (0, NW.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: PW
          })]
        }), (0, NW.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  10158: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(1283);

    function PW(WW) {
      let {
        label: iW,
        value: OW,
        swatches: mW,
        customLabel: PW,
        onChange: LW
      } = WW;
      const cW = !mW.some((WW => WW.colour === OW));
      return (0, NW.jsxs)("div", {
        className: "SettingBox SettingsColourRow",
        children: [(0, NW.jsx)("div", {
          className: "SliderText",
          children: iW
        }), (0, NW.jsxs)("div", {
          className: "SettingsSwatches",
          role: "radiogroup",
          "aria-label": iW,
          children: [mW.map((WW => (0, NW.jsx)("button", {
            type: "button",
            role: "radio",
            "aria-checked": WW.colour === OW,
            "aria-label": WW.label,
            "data-pad-focusable": !0,
            className: EW()("SettingsSwatch", {
              Selected: WW.colour === OW
            }),
            style: {
              background: WW.colour
            },
            onClick: () => {
              LW(WW.colour)
            }
          }, WW.colour))), (0, NW.jsx)("label", {
            className: EW()("SettingsSwatch SettingsSwatchCustom", {
              Selected: cW
            }),
            style: cW ? {
              background: OW
            } : void 0,
            title: PW,
            "data-pad-focusable": !0,
            children: (0, NW.jsx)("input", {
              type: "color",
              "aria-label": PW,
              value: OW,
              onChange: WW => {
                LW(WW.target.value)
              }
            })
          })]
        })]
      })
    }
  },
  9919: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => UW,
      g: () => jW,
      i: () => tW,
      m: () => kW,
      n: () => sW,
      o: () => xW
    });
    var mW = OW(1774),
      EW = OW(1864);
    const NW = WW => WW >= 56320 && WW <= 57343,
      PW = WW => WW >= 55296 && WW <= 56319,
      LW = (WW, iW) => iW >= 2 && NW(WW.charCodeAt(iW - 1)) && PW(WW.charCodeAt(iW - 2)) ? iW - 2 : Math.max(0, iW - 1),
      cW = (WW, iW) => {
        let OW;
        var mW, EW;
        return OW = WW.start !== WW.end ? iW < 0 ? WW.start : WW.end : iW < 0 ? LW(WW.value, WW.start) : (mW = WW.value, (EW = WW.start) + 1 < mW.length && PW(mW.charCodeAt(EW)) && NW(mW.charCodeAt(EW + 1)) ? EW + 2 : Math.min(mW.length, EW + 1)), {
          value: WW.value,
          start: OW,
          end: OW
        }
      },
      wW = ["text", "search", "url", "email", "tel", "password", "number"],
      tW = WW => !(!(0, EW.b)(WW) || WW.isContentEditable || WW.hasAttribute("data-pad-no-osk")) && (WW instanceof HTMLTextAreaElement || WW instanceof HTMLInputElement && wW.includes(WW.type)),
      ZW = WW => null !== WW.selectionStart,
      xW = WW => {
        var iW, OW;
        const {
          value: mW
        } = WW;
        return {
          value: mW,
          start: null !== (iW = WW.selectionStart) && void 0 !== iW ? iW : mW.length,
          end: null !== (OW = WW.selectionEnd) && void 0 !== OW ? OW : mW.length
        }
      },
      lW = (WW, iW, OW) => {
        if (WW.readOnly) return;
        const EW = WW instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(EW, "value").set.call(WW, iW.value), ZW(WW) && WW.setSelectionRange(iW.start, iW.end), (0, mW.i)(WW, new InputEvent("input", {
          bubbles: !0,
          inputType: OW
        }))
      };
    let AW = !1;
    const bW = (WW, iW) => !!document.execCommand(WW, !1, iW) || (AW || (AW = !0, console.warn(`execCommand("${WW}") failed; the on-screen keyboard is setting the value directly`)), !1),
      jW = (WW, iW) => {
        bW("insertText", iW) || lW(WW, function(WW, iW) {
          let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const mW = WW.value.slice(0, WW.start),
            EW = WW.value.slice(WW.end);
          let NW = OW < 0 ? iW.length : Math.max(0, OW - mW.length - EW.length);
          NW > 0 && NW < iW.length && PW(iW.charCodeAt(NW - 1)) && NW--;
          const LW = iW.slice(0, NW),
            cW = mW.length + LW.length;
          return {
            value: mW + LW + EW,
            start: cW,
            end: cW
          }
        }(xW(WW), iW, WW.maxLength), "insertText")
      },
      UW = WW => {
        bW("delete") || lW(WW, (WW => {
          const iW = WW.start === WW.end ? LW(WW.value, WW.start) : WW.start;
          return {
            value: WW.value.slice(0, iW) + WW.value.slice(WW.end),
            start: iW,
            end: iW
          }
        })(xW(WW)), "deleteContentBackward")
      },
      kW = (WW, iW) => {
        if (!ZW(WW)) return;
        const OW = cW(xW(WW), iW);
        WW.setSelectionRange(OW.start, OW.end)
      },
      sW = WW => {
        ZW(WW) && 0 === WW.selectionStart && 0 === WW.selectionEnd && WW.setSelectionRange(WW.value.length, WW.value.length)
      }
  },
  10066: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => cW
    });
    var mW = OW(25),
      EW = OW(2276),
      NW = OW(1422),
      PW = OW(1459),
      LW = OW(4963);
    const cW = async () => {
      if ((0, PW.k)()) {
        if (!0 !== await NW.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== mW.d.get("gameState")) return
      }
      const WW = await (0, LW.d)();
      "stay" !== WW && "inGame" === mW.d.get("gameState") && ("save" === WW && (0, LW.l)(), (0, EW.d)())
    }
  },
  10071: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => cW,
      e: () => NW,
      g: () => PW,
      i: () => EW,
      k: () => LW
    });
    var mW = OW(2066);
    const EW = "controllerPadShopOpen",
      NW = WW => mW.f.includes(WW),
      PW = WW => Object.values(WW).some((WW => !1 !== WW.canBuy && !WW.isRewardedAd)),
      LW = (WW, iW, OW) => {
        var mW, EW, PW, LW;
        const cW = WW.filter((WW => !NW(WW))),
          wW = null !== iW && WW.includes(iW) ? iW : null;
        return null !== wW && !NW(wW) && OW(wW) ? wW : null !== (mW = null !== (EW = null !== (PW = null !== (LW = cW.find(OW)) && void 0 !== LW ? LW : cW[0]) && void 0 !== PW ? PW : wW) && void 0 !== EW ? EW : WW[0]) && void 0 !== mW ? mW : null
      },
      cW = WW => WW.userInput || WW.isRewardedAd || "boolean" === typeof WW.isSelected ? null : JSON.stringify([WW.image, WW.cost, WW.currency, WW.amount, WW.customTitle, WW.buyButtonText, WW.description, WW.canBuy])
  },
  10101: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW,
      d: () => tW
    });
    var mW = OW(62),
      EW = OW(1526),
      NW = OW(2111),
      PW = OW(1479),
      LW = OW(1506),
      cW = OW(1283);
    const wW = () => {
        const WW = (0, PW.y)();
        if ((0, mW.useEffect)((() => {
            (0, PW.m)()
          }), []), !WW) return null;
        const {
          ControllerCategory: iW
        } = WW;
        return (0, cW.jsx)(LW.c, {
          children: (0, cW.jsx)(iW, {})
        })
      },
      tW = () => {
        var WW;
        const iW = (0, PW.y)(),
          [, OW] = (0, mW.useReducer)((WW => WW + 1), 0);
        return (0, EW.e)(NW.b, OW), null !== (WW = null === iW || void 0 === iW ? void 0 : iW.hasActivePad()) && void 0 !== WW && WW
      }
  },
  9910: (WW, iW, OW) => {
    OW.d(iW, {
      B: () => wW,
      D: () => JW,
      E: () => SW,
      H: () => YW,
      L: () => jW,
      O: () => cW,
      R: () => tW,
      c: () => UW,
      g: () => TW,
      j: () => KW,
      l: () => MW,
      n: () => AW,
      r: () => bW,
      t: () => xW,
      x: () => lW,
      z: () => yW
    });
    var mW = OW(27),
      EW = OW(1774),
      NW = OW(9913),
      PW = OW(9919),
      LW = OW(3267);
    const cW = WW => (0, PW.i)(WW),
      wW = WW => {
        const iW = WW.getBoundingClientRect();
        return {
          x: iW.left + iW.width / 2,
          y: iW.top + iW.height / 2
        }
      },
      tW = (WW, iW, OW) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: WW.x,
        clientY: WW.y,
        screenX: WW.x,
        screenY: WW.y,
        button: iW,
        buttons: OW,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      ZW = (WW, iW) => {
        (0, EW.i)(WW, iW)
      },
      xW = function(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const mW = 0 === OW ? 1 : 2;
        ZW(WW, new PointerEvent("pointerdown", tW(iW, OW, mW))), ZW(WW, new MouseEvent("mousedown", tW(iW, OW, mW)))
      },
      lW = function(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        ZW(WW, new PointerEvent("pointerup", tW(iW, OW, 0))), ZW(WW, new MouseEvent("mouseup", tW(iW, OW, 0)))
      },
      AW = function(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        xW(WW, iW, OW), lW(WW, iW, OW), ZW(WW, 0 === OW ? new MouseEvent("click", tW(iW, 0, 0)) : new MouseEvent("contextmenu", tW(iW, 2, 0)))
      },
      bW = function(WW, iW, OW) {
        let {
          leaveBelow: mW = null,
          enterBelow: EW = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (WW !== iW) {
          if (null !== WW && void 0 !== WW && WW.isConnected) {
            const EW = {
              ...tW(OW, 0, 0),
              relatedTarget: iW
            };
            ZW(WW, new PointerEvent("pointerout", EW)), ZW(WW, new MouseEvent("mouseout", EW));
            const NW = WW => !!iW && WW.contains(iW) || !!mW && WW.contains(mW);
            for (let iW = WW; iW && !NW(iW); iW = iW.parentElement) ZW(iW, new PointerEvent("pointerleave", {
              ...EW,
              bubbles: !1
            })), ZW(iW, new MouseEvent("mouseleave", {
              ...EW,
              bubbles: !1
            }))
          }
          if (iW) {
            const mW = {
              ...tW(OW, 0, 0),
              relatedTarget: WW
            };
            ZW(iW, new PointerEvent("pointerover", mW)), ZW(iW, new MouseEvent("mouseover", mW));
            const NW = [],
              PW = iW => !(null === WW || void 0 === WW || !WW.isConnected) && iW.contains(WW) || !!EW && iW.contains(EW);
            for (let WW = iW; WW && !PW(WW); WW = WW.parentElement) NW.push(WW);
            for (const WW of NW.reverse()) ZW(WW, new PointerEvent("pointerenter", {
              ...mW,
              bubbles: !1
            })), ZW(WW, new MouseEvent("mouseenter", {
              ...mW,
              bubbles: !1
            }));
            ZW(iW, new PointerEvent("pointermove", tW(OW, 0, 0))), ZW(iW, new MouseEvent("mousemove", tW(OW, 0, 0)))
          }
        } else iW && (ZW(iW, new PointerEvent("pointermove", tW(OW, 0, 0))), ZW(iW, new MouseEvent("mousemove", tW(OW, 0, 0))))
      },
      jW = WW => {
        mW.l.iZ(NW.e, WW)
      },
      UW = WW => {
        if (cW(WW)) return void jW(WW);
        const iW = WW.hasAttribute("data-pad-focusable") ? WW.querySelector("a[href]") : null,
          OW = null !== iW && void 0 !== iW ? iW : WW;
        AW(OW, wW(OW))
      },
      kW = ".Dropdown-root.is-open",
      sW = WW => {
        const iW = WW.querySelector(".Dropdown-control");
        return UW(iW), iW
      },
      MW = WW => {
        var iW;
        const OW = null !== (iW = WW.closest(kW)) && void 0 !== iW ? iW : WW.querySelector(kW);
        return OW ? sW(OW) : null
      },
      KW = WW => {
        for (const iW of document.querySelectorAll(kW)) iW.contains(WW) || sW(iW)
      },
      SW = WW => null !== WW.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      YW = WW => {
        const iW = WW ? document.elementFromPoint(WW.x, WW.y) : null;
        return !(null === iW || void 0 === iW || !iW.closest("[data-pad-repeat]"))
      },
      yW = WW => {
        var iW;
        return null !== (iW = [...WW.querySelectorAll("[data-pad-back]")].find(LW.p)) && void 0 !== iW ? iW : null
      },
      TW = WW => {
        const iW = yW(WW);
        return !!iW && (UW(iW), !0)
      },
      JW = WW => {
        var iW, OW, mW, EW;
        return null !== (iW = null !== (OW = null !== (mW = WW.getAttribute("data-pad-key")) && void 0 !== mW ? mW : WW.getAttribute("href")) && void 0 !== OW ? OW : null === (EW = WW.querySelector("a[href]")) || void 0 === EW ? void 0 : EW.getAttribute("href")) && void 0 !== iW ? iW : null
      }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);