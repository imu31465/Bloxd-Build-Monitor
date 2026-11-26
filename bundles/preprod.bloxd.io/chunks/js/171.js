export const id = 171;
export const ids = [171];
export const modules = {
  9568: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH
    });
    var AH = LH(15),
      rH = LH(1123),
      SH = LH(5478),
      hH = LH(1225);

    function tH(HH) {
      let {
        note: BH
      } = HH;
      const {
        t: LH
      } = (0, rH.B)(), {
        clientEscMenuOptions: tH
      } = (0, AH.m)(["clientEscMenuOptions"]);
      return (0, hH.jsx)(SH.c, {
        label: LH("touchSettings:actionButtons"),
        checked: tH.touchActionButtons,
        onClick: HH => {
          AH.c.setClientEscMenuOptions({
            touchActionButtons: HH
          })
        },
        circleInfoText: LH("touchSettings:actionButtonsInfo"),
        note: BH
      })
    }
  },
  9552: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => mL,
      h: () => kL
    });
    var AH = LH(1123),
      rH = LH(45),
      SH = LH(2064),
      hH = LH(2073),
      tH = LH(1038),
      zH = LH.n(tH),
      CH = LH(1455),
      EH = LH(15),
      XH = LH(81),
      GH = LH(101),
      YH = LH(5478),
      uH = LH(2628),
      QH = LH(257),
      WH = LH(2075),
      MH = LH(2081),
      xH = LH(9561),
      vH = LH(9568),
      PH = LH(304),
      TH = LH(1225);
    const UH = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var VH = LH(9577);
    var OH = LH(1475),
      bH = LH(1352),
      kH = LH(9584),
      mH = LH(1405),
      oH = LH(1315),
      IH = LH(9588),
      fH = LH(2659);

    function lH(HH) {
      let {
        className: BH,
        keepPlace: LH
      } = HH;
      return LH ? (0, TH.jsx)("div", {
        className: zH()(BH, "Placeholder")
      }) : null
    }

    function KH(HH) {
      let {
        id: BH,
        elements: LH,
        actionButtons: rH,
        keyNames: SH,
        className: hH,
        keepPlace: tH,
        onHidden: zH
      } = HH;
      const {
        t: EH
      } = (0, AH.B)();
      if (!IH.k[BH].hide) return (0, TH.jsx)(lH, {
        className: hH,
        keepPlace: tH
      });
      const XH = (0, fH.s)(LH, BH);
      return (0, TH.jsx)(CH.W, {
        className: hH,
        ariaLabel: EH(XH ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: (0, IH.B)(BH, rH, EH, SH)
        }),
        pressed: !XH,
        onClick: () => {
          zH(BH, !XH)
        },
        children: (0, TH.jsx)(oH.c, {
          name: XH ? "eye-slash" : "eye"
        })
      })
    }

    function cH(HH) {
      let {
        id: BH,
        elements: LH,
        actionButtons: rH,
        keyNames: SH,
        className: hH,
        keepPlace: tH,
        onlyWhenMoved: zH,
        locked: EH,
        onReset: XH
      } = HH;
      const {
        t: GH
      } = (0, AH.B)(), YH = IH.k[BH], uH = (0, fH.F)(LH[BH]);
      return !YH.move && !YH.scale || zH && uH ? (0, TH.jsx)(lH, {
        className: hH,
        keepPlace: tH
      }) : (0, TH.jsx)(CH.W, {
        className: hH,
        disabled: uH || EH,
        ariaLabel: GH("hudLayout:resetElement", {
          name: (0, IH.B)(BH, rH, GH, SH)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: BH
        },
        onClick: HH => {
          zH && NH(HH.currentTarget), XH(BH)
        },
        children: (0, TH.jsx)(oH.c, {
          name: "rotate-left"
        })
      })
    }

    function eH(HH) {
      let {
        id: BH,
        actionButtons: LH,
        keyNames: rH,
        className: SH,
        keepPlace: hH,
        locked: tH,
        lockable: zH,
        onLocked: EH
      } = HH;
      const {
        t: XH
      } = (0, AH.B)();
      return zH || tH ? (0, TH.jsx)(CH.W, {
        className: SH,
        ariaLabel: XH(tH ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: (0, IH.B)(BH, LH, XH, rH)
        }),
        pressed: tH,
        active: tH,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${tH?"unlock":"lock"}:${BH}`
        },
        onClick: () => {
          EH(BH, !tH)
        },
        children: (0, TH.jsx)(oH.c, {
          name: tH ? "lock" : "lock-open"
        })
      }) : (0, TH.jsx)(lH, {
        className: SH,
        keepPlace: hH
      })
    }

    function qH(HH) {
      let {
        className: BH,
        open: LH,
        name: rH,
        onToggle: SH
      } = HH;
      const {
        t: hH
      } = (0, AH.B)();
      return (0, TH.jsx)(CH.W, {
        className: BH,
        ariaLabel: hH(LH ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: rH
        }),
        pressed: LH,
        analyticsClick: {
          id: "hud_layout.children",
          value: LH ? "close" : "open"
        },
        onClick: () => {
          SH(!LH)
        },
        children: (0, TH.jsx)(oH.c, {
          name: LH ? "angle-up" : "angle-down"
        })
      })
    }

    function gH(HH, BH) {
      var LH;
      HH.contains(document.activeElement) && BH.focus({
        preventScroll: !0
      }), null === (LH = (0, mH.c)()) || void 0 === LH || LH.handOverPadFocus(HH, BH)
    }

    function NH(HH) {
      const BH = HH.closest("[data-hud-row]"),
        LH = null === BH || void 0 === BH ? void 0 : BH.querySelector(".HudElementRowName");
      return !(!BH || !LH) && (gH(BH, LH), !0)
    }
    const RH = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function jH(HH, BH) {
      return "joystick" === HH && !BH
    }

    function nH() {
      const {
        t: HH
      } = (0, AH.B)();
      return (0, TH.jsx)(CH.W, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: HH => {
          const BH = HH.currentTarget;
          if (!NH(BH)) {
            const HH = function(HH) {
              var BH, LH;
              const AH = [HH.previousElementSibling, HH.nextElementSibling].find((HH => HH instanceof HTMLElement && HH.matches(RH)));
              return null !== (BH = null !== AH && void 0 !== AH ? AH : null === (LH = HH.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === LH ? void 0 : LH.querySelector(`:is(${RH}):not(.HudFixJoystickButton)`)) && void 0 !== BH ? BH : null
            }(BH);
            HH && gH(BH, HH)
          }
          EH.c.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: HH("hudLayout:fixJoystick")
      })
    }
    var FH = LH(69),
      DH = LH(1214),
      wH = LH(3465),
      ZH = LH(3018),
      dH = LH(9590),
      aH = LH(9592),
      sH = LH(2661),
      JH = LH(2680),
      iH = LH(3503),
      pH = LH(9598);
    const yH = HH => ({
      [IH.h]: HH
    });

    function HB(HH) {
      let {
        id: BH,
        slot: LH,
        icon: AH,
        label: SH,
        hidden: hH,
        className: tH,
        face: CH
      } = HH;
      const EH = (0, rH.useRef)(null);
      return (0, rH.useLayoutEffect)((() => {
        CH && EH.current && (0, pH.m)(EH.current, CH)
      }), [CH]), (0, TH.jsxs)("div", {
        className: zH()("TouchKeyHit", `TouchSlot${LH}`, tH, {
          HudPreviewGhost: hH.has(BH)
        }),
        ...yH(BH),
        children: [CH && (0, TH.jsx)("div", {
          ref: EH,
          className: zH()("TouchKey", {
            Labelled: CH.classList.contains("Labelled")
          })
        }), !CH && (0, TH.jsxs)("div", {
          className: zH()("TouchKey", {
            Labelled: void 0 !== SH
          }),
          children: [AH && (0, TH.jsx)(oH.c, {
            name: AH
          }), void 0 !== SH && (0, TH.jsx)("span", {
            className: "TouchKeyLabel",
            children: SH
          })]
        })]
      })
    }

    function BB(HH) {
      let {
        item: BH,
        selected: LH
      } = HH;
      const AH = (0, rH.useRef)(null);
      return (0, rH.useLayoutEffect)((() => {
        AH.current && (0, pH.m)(AH.current, BH)
      }), [BH]), (0, TH.jsx)("div", {
        ref: AH,
        className: zH()("InvenItem", {
          Selected: LH
        })
      })
    }
    const LB = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      AB = HH => void 0 === HH ? {} : {
        style: {
          "--parked": HH
        }
      };

    function rB(HH) {
      let {
        id: BH,
        hidden: LH,
        parked: AH,
        unslotted: rH = !1
      } = HH;
      return (0, TH.jsx)("div", {
        className: zH()("TopRightIcon", JH.n[BH], {
          HudPreviewGhost: LH.has(BH),
          [sH.b]: void 0 !== AH,
          [sH.f]: rH
        }),
        ...AB(AH),
        children: (0, TH.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...yH(BH),
          children: (0, TH.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, TH.jsx)(oH.c, {
              name: LB[BH]
            })
          })
        })
      })
    }

    function SB(HH) {
      let {
        portraitPhone: BH,
        icons: LH,
        pinnedIcons: AH,
        hidden: SH,
        moved: hH,
        trayState: tH
      } = HH;
      const CH = BH ? (0, sH.C)(LH) : [],
        EH = LH.filter((HH => "settings" === HH)),
        XH = LH.filter((HH => "settings" !== HH && !CH.includes(HH))).reverse(),
        GH = CH.length > 0 && "gone" === tH,
        YH = [...EH, ...GH ? ["tray"] : [], ...XH].filter((HH => "tray" === HH || SH.has(HH) && !hH.has(HH))),
        uH = HH => {
          const BH = YH.indexOf(HH);
          return BH < 0 ? void 0 : BH
        },
        QH = (HH, BH) => (0, TH.jsx)(rB, {
          id: HH,
          hidden: SH,
          parked: BH ? uH(HH) : void 0,
          unslotted: BH && SH.has(HH) && hH.has(HH)
        }, HH);
      return (0, TH.jsxs)("div", {
        className: zH()("TopRightIcons TouchInGame", {
          Column: BH
        }),
        children: [EH.map((HH => QH(HH, !0))), CH.length > 0 && (0, TH.jsxs)("div", {
          className: zH()("TopRightIcon TopRightTrayToggle Open", {
            [sH.b]: GH
          }),
          ...AB(uH("tray")),
          children: [(0, TH.jsx)("div", {
            className: zH()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== tH
            }),
            children: (0, TH.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, TH.jsx)(oH.c, {
                name: "ellipsis"
              })
            })
          }), (0, TH.jsx)("div", {
            className: "TopRightTray",
            children: CH.map((HH => QH(HH, !1)))
          })]
        }), XH.map((HH => (0, TH.jsxs)(rH.Fragment, {
          children: ["perspective" === HH && null !== AH.rightOfCamera && (0, TH.jsx)(hB, {
            icon: AH.rightOfCamera
          }), QH(HH, !0)]
        }, HH))), null !== AH.leftEnd && (0, TH.jsx)(hB, {
          icon: AH.leftEnd
        })]
      })
    }

    function hB(HH) {
      let {
        icon: BH
      } = HH;
      return (0, TH.jsx)("div", {
        className: "TopRightIcon",
        children: (0, TH.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, TH.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, TH.jsx)(oH.c, {
              name: BH
            })
          })
        })
      })
    }

    function tB(HH) {
      let {
        next: BH,
        hidden: LH
      } = HH;
      return (0, TH.jsx)("div", {
        className: zH()("HotBarArrow", BH ? "Next" : "Previous", {
          HudPreviewGhost: LH
        }),
        ...yH("arrows"),
        children: (0, TH.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, TH.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, TH.jsx)(oH.c, {
              name: BH ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function zB() {
      return (0, TH.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, TH.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, TH.jsx)("div", {
            className: "SocialBar",
            children: (0, TH.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, TH.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, TH.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, TH.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, TH.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, TH.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, TH.jsx)(oH.c, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, TH.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, TH.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, TH.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, TH.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, TH.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, TH.jsx)(oH.c, {
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
    const CB = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      EB = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      XB = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      GB = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function YB(HH) {
      let {
        presence: BH,
        portraitPhone: LH,
        hidden: rH,
        actionButtons: SH,
        joystickFixed: hH,
        keysAbove: tH,
        auraBar: CH,
        trayState: EH,
        moved: GH
      } = HH;
      const {
        t: YH
      } = (0, AH.B)(), {
        faces: uH,
        items: QH
      } = BH, WH = HH => ({
        HudPreviewGhost: (0, IH.L)(HH).some((HH => rH.has(HH)))
      });
      return (0, TH.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, TH.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, TH.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, TH.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, TH.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, TH.jsx)("div", {
              className: "InGameHeaderGameName",
              children: YH("hudLayout:previewGameName")
            })]
          })
        }), (0, TH.jsx)("div", {
          className: "TopLeftElements",
          children: (0, TH.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, TH.jsxs)("div", {
              className: "Chat",
              children: [(0, TH.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [YH("hudLayout:previewChatLine"), YH("hudLayout:previewChatJoined", {
                  name: "Arthur"
                }), YH("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((HH => (0, TH.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, TH.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, TH.jsx)("div", {
                      className: "IndividualText",
                      children: HH
                    })
                  })
                }, HH)))
              }), (0, TH.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: zH()("ChatIconWrapper SmallTextLight", WH("chat")),
                ...yH("chat"),
                children: (0, TH.jsx)(oH.c, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, TH.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, TH.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, TH.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, TH.jsx)("div", {
                className: "TopRightIconsContainer",
                ...yH("menu"),
                children: (0, TH.jsx)(SB, {
                  portraitPhone: LH,
                  icons: BH.rowIcons,
                  pinnedIcons: BH.pinnedIcons,
                  hidden: rH,
                  trayState: EH,
                  moved: GH
                })
              })
            }), XH.featureFlags.useSocialFeatures && (0, TH.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, TH.jsx)(zB, {})
            })]
          })
        }), (0, TH.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, TH.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, TH.jsxs)("div", {
            className: "TouchInteractKey",
            ...yH("interact"),
            children: [(0, TH.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, TH.jsx)(oH.c, {
                name: "hand-back-point-up"
              })
            }), (0, TH.jsx)("div", {
              children: YH("hudLayout:previewInteract")
            })]
          })
        }), (0, TH.jsx)("div", {
          className: "BottomCentre",
          children: (0, TH.jsxs)("div", {
            className: "BottomElements",
            children: [(0, TH.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, TH.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, TH.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...yH("hotbar"),
                children: (0, TH.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, TH.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, TH.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, TH.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, TH.jsx)(oH.c, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), CH && (0, TH.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, TH.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, TH.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, iH.f)("glint"),
                    alt: ""
                  }), (0, TH.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, TH.jsx)("div", {
                  className: "AuraBar",
                  children: (0, TH.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, TH.jsx)("div", {
                className: "HotBarRow",
                children: (0, TH.jsx)("div", {
                  className: zH()("HotBarContainer Touch", {
                    KeysAbove: tH
                  }),
                  children: (0, TH.jsxs)("div", {
                    className: "HotBar",
                    ...yH("hotbar"),
                    children: [(0, TH.jsxs)("div", {
                      className: zH()("TouchInventoryKeys", {
                        NoAuraBar: !CH
                      }),
                      children: [(0, TH.jsx)("div", {
                        className: zH()("TouchInventoryKey ShopKey", WH("shop"), {
                          Hidden: !BH.shop
                        }),
                        ...yH("shop"),
                        children: (0, TH.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, TH.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, TH.jsx)(oH.c, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, TH.jsx)("div", {
                        className: zH()("TouchInventoryKey BagKey", WH("bag"), {
                          Hidden: !BH.bag
                        }),
                        ...yH("bag"),
                        children: (0, TH.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, TH.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, TH.jsx)(oH.c, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, TH.jsx)(tB, {
                      next: !1,
                      hidden: rH.has("arrows")
                    }), (0, TH.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== QH && QH.map(((HH, BH) => (0, TH.jsx)(BB, {
                        item: HH,
                        selected: HH.classList.contains("Selected")
                      }, BH))), null === QH && XB.map((HH => {
                        const BH = GB[HH];
                        return (0, TH.jsx)("div", {
                          className: zH()("InvenItem", {
                            Selected: 0 === HH
                          }),
                          children: BH && (0, TH.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, TH.jsx)(oH.c, {
                              name: BH
                            })
                          })
                        }, HH)
                      }))]
                    }), (0, TH.jsx)(tB, {
                      next: !0,
                      hidden: rH.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, TH.jsx)("div", {
              className: "BottomRightElements",
              children: (0, TH.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== uH && pH.f.map((HH => {
                  const BH = uH[HH];
                  return BH && (0, TH.jsx)(HB, {
                    id: pH.c[HH],
                    slot: HH,
                    face: BH,
                    className: CB[HH],
                    hidden: rH
                  }, HH)
                })), (0, pH.q)(BH, SH).map((HH => (0, TH.jsx)(HB, {
                  id: pH.c[HH],
                  slot: HH,
                  icon: EB[HH].icon,
                  label: YH(EB[HH].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: rH
                }, HH))), null === uH && (0, TH.jsxs)(TH.Fragment, {
                  children: [(0, TH.jsx)(HB, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: rH
                  }), (0, TH.jsx)(HB, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: rH
                  }), SH && (0, TH.jsxs)(TH.Fragment, {
                    children: [(0, TH.jsx)(HB, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: rH
                    }), (0, TH.jsx)(HB, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: rH
                    })]
                  }), (0, pH.i)(SH).map((HH => (0, TH.jsx)(HB, {
                    id: pH.c[HH],
                    slot: HH,
                    icon: EB[HH].icon,
                    label: YH(EB[HH].labelKey),
                    hidden: rH
                  }, HH))), (0, TH.jsx)(HB, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: rH
                  })]
                })]
              })
            })]
          })
        }), (0, TH.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, TH.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, TH.jsxs)("div", {
              className: zH()("Joystick Resting HudPreviewJoystick", {
                Floating: !hH
              }),
              ...yH("joystick"),
              children: [(0, TH.jsx)("div", {
                className: "JoystickBase"
              }), (0, TH.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), BH.sprint && (0, TH.jsx)("div", {
            className: zH()("TouchSprintHit", WH("sprint"), {
              AtHome: !hH
            }),
            ...yH("sprint"),
            children: (0, TH.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, TH.jsx)(oH.c, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function uB() {
      const [HH, BH] = (0, rH.useState)({}), LH = (0, rH.useCallback)((HH => {
        BH((BH => [...new Set([...Object.keys(BH), ...Object.keys(HH)])].every((LH => BH[LH] === HH[LH])) ? BH : HH))
      }), []);
      return [HH, LH]
    }
    const QB = .05;

    function WB(HH) {
      var BH;
      let {
        selected: LH,
        layout: rH,
        actionButtons: SH,
        keyNames: hH,
        overlaps: tH,
        scaleCaps: EH,
        joystickFixed: XH,
        onScale: GH,
        onHidden: YH,
        onReset: uH,
        locked: QH,
        lockable: WH,
        onLocked: MH,
        extra: xH
      } = HH;
      const {
        t: vH
      } = (0, AH.B)(), PH = LH ? IH.k[LH] : null, UH = null !== LH && QH.has(LH), VH = (LH && rH.hudElements[LH] || fH.o)[2], OH = null !== (BH = LH && EH[LH]) && void 0 !== BH ? BH : fH.j, bH = HH => {
        LH && GH(LH, Math.min(OH, Math.round(100 * (VH + .1 * HH)) / 100))
      };
      return (0, TH.jsxs)(TH.Fragment, {
        children: [(0, TH.jsxs)("div", {
          className: zH()("HudQuickName SmallTextBold", {
            Overlap: tH.length > 0
          }),
          children: [tH.length > 0 && (0, TH.jsx)(oH.c, {
            name: "triangle-exclamation"
          }), PH ? (0, IH.B)(PH.id, SH, vH, hH) : vH("hudLayout:fullScreenHint"), tH.length > 0 && (0, TH.jsx)("span", {
            className: "HudQuickOverlap",
            children: vH("hudLayout:overlapsShort", {
              names: (0, IH.y)(tH, SH, vH, hH)
            })
          })]
        }), (null === PH || void 0 === PH ? void 0 : PH.scale) && (0, TH.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, TH.jsx)(CH.W, {
            disabled: UH || VH <= fH.n,
            ariaLabel: vH("hudLayout:smaller"),
            onClick: () => {
              bH(-1)
            },
            children: (0, TH.jsx)(oH.c, {
              name: "minus"
            })
          }), (0, TH.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*VH)}%`
          }), (0, TH.jsx)(CH.W, {
            disabled: UH || VH >= OH,
            ariaLabel: vH("hudLayout:larger"),
            onClick: () => {
              bH(1)
            },
            children: (0, TH.jsx)(oH.c, {
              name: "plus"
            })
          })]
        }), (PH || xH) && (0, TH.jsxs)("div", {
          className: "HudQuickActions",
          children: [PH && (0, TH.jsxs)(TH.Fragment, {
            children: [(0, TH.jsx)(eH, {
              id: PH.id,
              actionButtons: SH,
              keyNames: hH,
              locked: UH,
              lockable: WH(PH.id),
              onLocked: MH
            }), (0, TH.jsx)(KH, {
              id: PH.id,
              elements: rH.hudElements,
              actionButtons: SH,
              keyNames: hH,
              onHidden: YH
            }), (0, TH.jsx)(cH, {
              id: PH.id,
              elements: rH.hudElements,
              actionButtons: SH,
              keyNames: hH,
              locked: UH,
              onReset: uH
            }), jH(PH.id, XH) && (0, TH.jsx)(nH, {})]
          }), xH]
        })]
      })
    }
    var MB = LH(1049),
      xB = LH(4826);
    const vB = "HudPreviewDoc",
      PB = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      TB = new Set([vB, ...Object.values(PB)]),
      UB = new Set(fH.y.map(JH.y)),
      VB = new Set(JH.i),
      OB = 'style, link[rel="stylesheet"]';

    function bB(HH, BH, LH, AH) {
      const rH = new Map,
        SH = new Set,
        hH = new URL(HH.baseURI).origin,
        tH = BH => {
          var LH;
          if ("LINK" !== BH.nodeName) return !0;
          const AH = null === (LH = BH.getAttribute("href")) || void 0 === LH ? void 0 : LH.trim();
          if (!AH) return !1;
          try {
            return new URL(AH, HH.baseURI).origin === hH
          } catch {
            return !1
          }
        };
      let zH = null;
      const CH = () => {
          zH !== (0 === SH.size) && (zH = 0 === SH.size, null === AH || void 0 === AH || AH(zH))
        },
        EH = HH => {
          const BH = HH.cloneNode(!0);
          if ("LINK" === BH.tagName) {
            SH.add(BH);
            const HH = () => {
              SH.delete(BH), CH()
            };
            BH.addEventListener("load", HH), BH.addEventListener("error", HH), LH && BH.addEventListener("load", LH)
          }
          return BH
        },
        XH = () => {
          const AH = function(HH) {
              const BH = [...HH.body.children].filter((HH => HH.matches(OB)));
              return [...HH.head.querySelectorAll(OB), ...BH]
            }(HH).filter(tH),
            hH = new Set(AH);
          for (const [HH, BH] of rH) hH.has(HH) || (BH.remove(), rH.delete(HH), SH.delete(BH));
          let zH = null;
          for (let HH = AH.length - 1; HH >= 0; HH--) {
            const SH = AH[HH];
            let hH = rH.get(SH);
            hH ? "STYLE" === SH.tagName && hH.textContent !== SH.textContent && (hH.textContent = SH.textContent, null === LH || void 0 === LH || LH()) : (hH = EH(SH), rH.set(SH, hH), BH.head.insertBefore(hH, zH)), zH = hH
          }
          CH()
        };
      XH();
      const GH = new MutationObserver(XH);
      return GH.observe(HH.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), GH.observe(HH.body, {
        childList: !0
      }), () => {
        GH.disconnect()
      }
    }

    function kB(HH, BH, LH) {
      let {
        keysAbove: AH
      } = LH;
      const rH = [...HH.documentElement.classList].filter((HH => !TB.has(HH) && !VB.has(HH))),
        SH = [...BH.documentElement.classList].filter((HH => VB.has(HH))),
        hH = [vB, PB.hotbar, PB.hasShop, PB.hasBag];
      AH && hH.push(PB.keysAbove), BH.documentElement.className = [...rH, ...hH, ...SH].join(" ")
    }
    const mB = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function oB(HH, BH, LH, AH, rH) {
      const SH = (0, fH.z)(LH, AH, "joystick"),
        hH = (0, JH.z)((0, JH.G)(LH, AH, rH), AH),
        tH = hH.classes.filter((HH => !UB.has(HH))),
        zH = BH.documentElement,
        CH = LH.hudLayouts[AH].hudSafe,
        EH = (0, JH.B)(CH, window.innerWidth, window.innerHeight, IB(), CH ? (0, JH.K)(BH) : 0);
      (0, JH.N)({
        ...hH,
        classes: tH
      }, {
        vars: zH,
        safe: zH,
        classes: zH
      }), zH.style.setProperty("--preview-joystick-shift-left", `${EH[3]}px`), zH.style.setProperty("--preview-joystick-shift-bottom", `${EH[2]}px`), zH.style.setProperty("--preview-joystick-scale", String(SH[2])), (0, xB.h)(zH, BH, LH, AH);
      for (const XH of mB) zH.style.setProperty(XH, HH.documentElement.style.getPropertyValue(XH) || "0px")
    }

    function IB() {
      return (0, JH.F)(EH.c.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function fB(HH) {
      return (0, JH.s)(IB(), (0, JH.K)(HH))
    }

    function lB(HH, BH, LH) {
      const AH = HH.documentElement.style,
        rH = (0, JH.D)(BH),
        SH = AH.getPropertyValue(rH);
      try {
        return LH((HH => {
          AH.setProperty(rH, String(HH))
        }))
      } finally {
        "" === SH ? AH.removeProperty(rH) : AH.setProperty(rH, SH)
      }
    }

    function KB(HH, BH) {
      const [LH, AH] = lB(HH, "hotbar", (BH => {
        const LH = LH => {
          var AH, rH;
          return BH(LH), null !== (AH = null === (rH = HH.querySelector(".HotBarGameItemsContainer")) || void 0 === rH ? void 0 : rH.getBoundingClientRect().width) && void 0 !== AH ? AH : 0
        };
        return [LH(1), LH(fH.j)]
      }));
      return LH <= 0 ? fH.j : Math.min(fH.j, Math.max(1, Math.floor(AH / LH / BH + 1e-6) * BH))
    }
    const cB = 3,
      eB = .5,
      qB = HH => HH.right - HH.left;
    const gB = (HH, BH) => Math.abs((0, dH.d)(HH).x - (0, dH.d)(BH).x) + Math.abs((0, dH.d)(HH).y - (0, dH.d)(BH).y) + Math.abs(qB(HH) - qB(BH));

    function NB(HH, BH, LH, AH, rH) {
      let {
        canKeep: SH = () => !0,
        passes: hH = cB,
        before: tH
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const zH = BH.hudLayouts[LH].hudLocked.filter(SH);
      if (0 === zH.length) return BH;
      const CH = [...IH.e].filter((AH => !zH.includes(AH) && (0, fH.z)(HH, LH, AH).join() === (0, fH.z)(BH, LH, AH).join())),
        EH = HH => {
          const BH = (0, dH.K)(CH.flatMap((BH => HH[BH] ? [HH[BH]] : [])));
          return {
            ...HH,
            cluster: null !== BH && void 0 !== BH ? BH : void 0
          }
        };
      let XH = null;
      const GH = HH => {
          XH = HH;
          const BH = rH(HH);
          return BH && {
            ...BH,
            boxes: EH(BH.boxes)
          }
        },
        YH = tH ? {
          ...tH,
          boxes: EH(tH.boxes)
        } : GH(HH),
        uH = YH && GH(BH);
      if (!YH || !uH) return BH;
      const QH = YH.boxes;
      let WH = uH.boxes;
      const MH = YH.keysAbove !== uH.keysAbove,
        xH = MH || Boolean(YH.shopAlone) !== Boolean(uH.shopAlone),
        vH = new Set(zH.filter((HH => !(0, IH.D)(HH) || !("bag" === HH ? MH : xH))));
      let PH = BH;
      for (let VH = 0; VH < hH && vH.size > 0; VH++) {
        var TH, UH;
        const HH = new Map;
        for (const BH of vH) {
          const rH = QH[BH],
            SH = WH[BH],
            hH = rH && SH ? RB(BH, (0, fH.z)(PH, LH, BH), rH, SH, AH) : null;
          hH ? HH.set(BH, hH) : vH.delete(BH)
        }
        if (0 === HH.size) break;
        let rH = PH;
        for (const [BH, AH] of HH) rH = (0, fH._)(rH, LH, BH, AH);
        const SH = null === (TH = GH(rH)) || void 0 === TH ? void 0 : TH.boxes;
        if (!SH) return BH;
        let hH = PH;
        for (const [BH, AH] of HH) {
          const HH = SH[BH];
          HH && gB(QH[BH], HH) < gB(QH[BH], WH[BH]) - eB ? hH = (0, fH._)(hH, LH, BH, AH) : vH.delete(BH)
        }
        if (hH === PH) break;
        const tH = [...HH.keys()].every((HH => vH.has(HH)));
        PH = tH ? rH : hH;
        const zH = tH ? SH : null === (UH = GH(PH)) || void 0 === UH ? void 0 : UH.boxes;
        if (!zH) return BH;
        WH = zH
      }
      return XH !== PH && rH(PH), PH
    }

    function RB(HH, BH, LH, AH, rH) {
      let [SH, hH, tH] = BH;
      const zH = fH.v[HH],
        CH = {};
      zH.scale && qB(AH) > 0 && Math.abs(qB(LH) - qB(AH)) > eB && (CH.scale = Math.max(fH.n, Math.min(fH.j, tH * qB(LH) / qB(AH))));
      const EH = (0, dH.d)(LH).x - (0, dH.d)(AH).x,
        XH = (0, dH.d)(LH).y - (0, dH.d)(AH).y;
      return zH.move && (Math.abs(EH) > eB || Math.abs(XH) > eB) && (CH.dx = SH + EH / rH.width, CH.dy = hH + XH / rH.height), void 0 === CH.scale && void 0 === CH.dx ? null : CH
    }
    let jB = 0;

    function nB() {
      return jB > 0
    }
    const FB = HH => 0 === HH.dx && 0 === HH.dy,
      DB = .001,
      wB = HH => Math.abs(HH.dx) >= 5e-4 || Math.abs(HH.dy) >= 5e-4 ? HH : {
        dx: HH.dx,
        dy: HH.dy < 0 ? -.001 : DB
      };

    function ZB(HH) {
      let {
        preview: BH,
        stageRef: LH,
        ringRef: AH,
        centreLineRef: SH,
        snapCentre: hH,
        ready: tH,
        measure: zH,
        k: CH,
        viewport: EH,
        boxes: XH,
        pieces: GH,
        selected: YH,
        insets: uH,
        layout: QH,
        canMove: WH,
        onSelect: MH,
        onMove: xH
      } = HH;
      const vH = (0, rH.useRef)(null),
        PH = (0, rH.useCallback)((() => null !== vH.current), []),
        TH = (HH, BH) => {
          if (!BH) return null;
          const LH = (0, dH.d)(HH.origin),
            AH = (0, dH.d)(BH),
            rH = (HH.to.dx - HH.from.dx) * EH.width,
            SH = (HH.to.dy - HH.from.dy) * EH.height,
            hH = BH.right - BH.left,
            tH = BH.bottom - BH.top;
          return {
            skew: {
              x: AH.x - LH.x - rH,
              y: AH.y - LH.y - SH
            },
            box: {
              left: LH.x - hH / 2,
              top: LH.y - tH / 2,
              right: LH.x + hH / 2,
              bottom: LH.y + tH / 2
            }
          }
        },
        UH = (HH, LH) => {
          var rH;
          const hH = vH.current;
          if (!hH || hH.pointerId !== HH.pointerId) return;
          vH.current = null, null === (rH = SH.current) || void 0 === rH || rH.classList.remove("Shown", "Snapped");
          const tH = AH.current;
          if (tH && null !== hH.ringStyle && tH.setAttribute("style", hH.ringStyle), LH && hH.moved) {
            const HH = FB(hH.to) ? null : zH(hH.id),
              BH = HH ? (0, dH.G)(HH, (0, dH.E)(EH.width, EH.height, uH)) : {
                x: 0,
                y: 0
              },
              LH = {
                dx: hH.to.dx + BH.x / EH.width,
                dy: hH.to.dy + BH.y / EH.height
              },
              AH = FB(hH.to) ? LH : wB(LH);
            xH(hH.id, AH.dx, AH.dy)
          } else BH(hH.id, null), LH && hH.tapPick && MH(hH.tapPick)
        };
      return {
        busy: PH,
        handlers: {
          onPointerDown: HH => {
            var BH;
            if (!tH || vH.current || !HH.target.closest(".HudPreviewHandle")) return;
            const AH = LH.current.getBoundingClientRect(),
              rH = {
                x: (HH.clientX - AH.left) / CH,
                y: (HH.clientY - AH.top) / CH
              },
              SH = (0, dH.z)(rH, GH, 40 / CH),
              hH = null !== YH ? IH.t.get(YH) : void 0,
              zH = void 0 !== hH && null !== (0, dH.z)(rH, GH.filter((HH => {
                let {
                  id: BH
                } = HH;
                return hH.has(BH)
              })), 40 / CH),
              EH = "menu" === YH && void 0 !== XH.menu && (0, dH.g)(XH.menu, rH) && ("menu" === SH || null !== SH && (0, sH.t)(SH, QH.hudElements[SH])),
              uH = zH ? YH : EH ? "menu" : null,
              xH = null !== uH,
              PH = null !== uH && void 0 !== uH ? uH : SH;
            if (!PH) return;
            if (function(HH) {
                jB++;
                const BH = LH => {
                  LH.pointerId === HH && (jB = Math.max(0, jB - 1), window.removeEventListener("pointerup", BH, !0), window.removeEventListener("pointercancel", BH, !0))
                };
                window.addEventListener("pointerup", BH, !0), window.addEventListener("pointercancel", BH, !0)
              }(HH.pointerId), !WH(PH)) return void MH(xH && SH ? SH : PH);
            MH(PH);
            const [TH, UH] = null !== (BH = QH.hudElements[PH]) && void 0 !== BH ? BH : [0, 0], VH = {
              dx: TH,
              dy: UH
            }, OH = {
              skew: {
                x: 0,
                y: 0
              },
              box: XH[PH]
            };
            vH.current = {
              id: PH,
              pointerId: HH.pointerId,
              startX: HH.clientX,
              startY: HH.clientY,
              origin: XH[PH],
              from: VH,
              to: VH,
              moved: !1,
              home: FB(VH) ? {
                centre: (0, dH.d)(XH[PH]),
                anchor: OH
              } : null,
              away: FB(VH) ? null : OH,
              anchor: OH,
              ringStyle: null,
              tapPick: xH ? SH : null
            }, HH.currentTarget.setPointerCapture(HH.pointerId)
          },
          onPointerMove: HH => {
            const LH = vH.current;
            if (!LH || LH.pointerId !== HH.pointerId) return;
            const rH = HH.clientX - LH.startX,
              tH = HH.clientY - LH.startY;
            if (!LH.moved && Math.hypot(rH, tH) < 5) return;
            const XH = !LH.moved;
            var GH, YH;
            (LH.moved = !0, XH) && (LH.ringStyle = null !== (GH = null === (YH = AH.current) || void 0 === YH ? void 0 : YH.getAttribute("style")) && void 0 !== GH ? GH : null);
            const QH = (0, dH.E)(EH.width, EH.height, uH);
            if (!LH.home) {
              var WH;
              LH.to = {
                dx: 0,
                dy: 0
              }, BH(LH.id, LH.to);
              const HH = zH(LH.id),
                AH = null !== (WH = TH(LH, HH)) && void 0 !== WH ? WH : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: LH.origin
                },
                rH = (0, dH.d)(LH.origin);
              LH.home = {
                centre: HH ? (0, dH.d)(HH) : {
                  x: rH.x - LH.from.dx * EH.width,
                  y: rH.y - LH.from.dy * EH.height
                },
                anchor: AH
              }
            }
            const MH = LH.home;
            let xH = !1;
            const PH = HH => {
                xH = !1;
                let AH = (0, dH.p)(HH.box, rH / CH, tH / CH, QH);
                const SH = EH.width / 2;
                if (hH && Math.abs((0, dH.d)(LH.origin).x + AH.x - SH) <= 8 / CH) {
                  const BH = SH - (0, dH.d)(LH.origin).x,
                    rH = (0, dH.p)(HH.box, BH, AH.y, QH);
                  xH = Math.abs(rH.x - BH) < .01, xH && (AH = rH)
                }
                const zH = (0, dH.w)(LH.from, AH.x - HH.skew.x, AH.y - HH.skew.y, EH.width, EH.height);
                LH.to = wB(zH), LH.anchor = HH, BH(LH.id, LH.to)
              },
              UH = (0, dH.p)(MH.anchor.box, rH / CH, tH / CH, QH),
              VH = SH.current,
              OH = (0, dH.d)(LH.origin),
              bH = ((0, fH.H)(LH.id) ? 20 : 6) / CH;
            if (Math.abs(OH.x + UH.x - MH.centre.x) <= bH && Math.abs(OH.y + UH.y - MH.centre.y) <= bH) LH.to = {
              dx: 0,
              dy: 0
            }, LH.anchor = MH.anchor, xH = hH && Math.abs(MH.centre.x - EH.width / 2) < 1, BH(LH.id, LH.to);
            else if (LH.away) PH(LH.away);
            else {
              var kH;
              PH(MH.anchor), LH.away = null !== (kH = TH(LH, zH(LH.id))) && void 0 !== kH ? kH : MH.anchor, PH(LH.away)
            }
            null === VH || void 0 === VH || VH.classList.add("Shown"), null === VH || void 0 === VH || VH.classList.toggle("Snapped", xH), (HH => {
              const BH = AH.current;
              if (BH) {
                const {
                  skew: LH,
                  box: AH
                } = HH.anchor;
                BH.style.left = AH.left * CH + "px", BH.style.top = AH.top * CH + "px", BH.style.width = (AH.right - AH.left) * CH + "px", BH.style.height = (AH.bottom - AH.top) * CH + "px", BH.style.translate = `${((HH.to.dx-HH.from.dx)*EH.width+LH.x)*CH}px ${((HH.to.dy-HH.from.dy)*EH.height+LH.y)*CH}px`
              }
            })(LH)
          },
          onPointerUp: HH => {
            UH(HH, !0)
          },
          onPointerCancel: HH => {
            UH(HH, !1)
          }
        }
      }
    }
    var dB = LH(9603);

    function aB(HH, BH) {
      return Object.keys(HH).filter((HH => HH !== BH)).map((BH => HH[BH]))
    }

    function sB(HH) {
      return HH.map((HH => {
        let {
          id: BH,
          box: LH
        } = HH;
        return `${BH}:${LH.left},${LH.top},${LH.right},${LH.bottom}`
      })).join(";")
    }

    function JB(HH) {
      const BH = [],
        LH = BH => (0, fH.H)(BH) && !HH.documentElement.classList.contains((0, JH.A)(BH));
      for (const tH of HH.querySelectorAll(`[${IH.h}]`)) {
        const HH = LH(tH.getAttribute(IH.h)) ? tH.querySelector(".ScaleOnHover") : null,
          AH = (null !== HH && void 0 !== HH ? HH : tH).getBoundingClientRect();
        (AH.width > 0 || AH.height > 0) && BH.push({
          id: tH.getAttribute(IH.h),
          box: (0, dH.h)(AH)
        })
      }
      const AH = HH => (0, dH.K)(BH.filter((BH => {
          let {
            id: LH
          } = BH;
          return HH(LH)
        })).map((HH => {
          let {
            box: BH
          } = HH;
          return BH
        }))),
        rH = {};
      for (const tH of new Set(BH.map((HH => HH.id)))) rH[tH] = AH((HH => HH === tH));
      for (const [tH, zH] of IH.t) {
        const HH = AH((HH => zH.has(HH)));
        HH && (rH[tH] = HH)
      }
      const SH = HH.querySelector(".TouchInventoryKeys"),
        hH = SH ? (0, dH.h)(SH.getBoundingClientRect()) : null;
      return {
        boxes: rH,
        pieces: BH,
        pairHome: hH
      }
    }

    function iB(HH, BH, LH) {
      const AH = BH.right - BH.left,
        rH = BH.bottom - BH.top;
      return lB(HH, "cluster", (BH => {
        const SH = LH => {
            BH(LH);
            const AH = [...HH.querySelectorAll(`[${IH.h}]:not(.HudPreviewGhost)`)].filter((HH => IH.e.has(HH.getAttribute(IH.h)))).map((HH => (0, dH.h)(HH.getBoundingClientRect()))),
              rH = (0, dH.K)(AH);
            return rH ? {
              w: rH.right - rH.left,
              h: rH.bottom - rH.top
            } : null
          },
          hH = HH => !HH || HH.w <= AH && HH.h <= rH,
          tH = SH(1),
          zH = SH(fH.j);
        if (!tH || hH(zH)) return fH.j;
        const CH = (HH, BH, LH) => BH > HH ? 1 + (LH - HH) * (fH.j - 1) / (BH - HH) : fH.j;
        let EH = Math.floor(Math.min(fH.j, CH(tH.w, zH.w, AH), CH(tH.h, zH.h, rH)) / LH + 1e-6) * LH;
        for (; EH > 1 && !hH(SH(EH));) EH = Math.round(100 * (EH - LH)) / 100;
        return Math.max(1, EH)
      }))
    }

    function pB(HH) {
      kB(document, HH, {
        keysAbove: !1
      });
      const BH = parseFloat(getComputedStyle(HH.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        LH = Number.isFinite(BH) && BH < 0;
      return kB(document, HH, {
        keysAbove: LH
      }), (0, dB.e)(HH), LH
    }

    function yB(HH) {
      const BH = HH.querySelector(".TouchInventoryKey.ShopKey");
      return null !== BH && "1" === getComputedStyle(BH).getPropertyValue("--touch-shop-above").trim()
    }

    function HL(HH, BH) {
      let {
        layout: LH,
        orientation: AH,
        viewport: SH,
        replicaKey: hH,
        joystickFixed: tH,
        busy: zH
      } = BH;
      const [CH, EH] = (0, rH.useState)(null), [XH, GH] = (0, rH.useState)({
        boxes: {},
        pieces: []
      }), [YH, uH] = (0, rH.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [QH, WH] = (0, rH.useState)(!1), [MH, xH] = (0, rH.useState)(!1), [vH, PH] = (0, rH.useState)(!1), TH = (0, rH.useCallback)((HH => {
        xH(HH), HH && PH(!0)
      }), []), UH = LH.hudLayouts[AH].hudSafe;
      (0, rH.useLayoutEffect)((() => {
        const BH = HH.current.contentDocument;
        BH.open(), BH.write("<!DOCTYPE html><html><head></head><body></body></html>"), BH.close(), EH(BH)
      }), [HH]);
      const VH = (0, rH.useCallback)((() => {
          CH && ((0, sH.u)(CH), GH(JB(CH)), uH(function(HH, BH) {
            const LH = fB(HH),
              [AH, rH, SH, hH] = BH ? (0, JH.w)(BH, window.innerWidth, window.innerHeight, LH) : LH;
            return {
              top: AH,
              right: rH,
              bottom: SH,
              left: hH
            }
          }(CH, UH)))
        }), [CH, UH]),
        OH = (0, rH.useCallback)((() => {
          CH && WH(pB(CH))
        }), [CH]),
        bH = (0, rH.useRef)((() => {}));
      return bH.current = () => {
        OH(), zH() || VH()
      }, (0, rH.useLayoutEffect)((() => {
        if (CH) return bB(document, CH, (() => {
          bH.current()
        }), TH)
      }), [CH, TH]), (0, rH.useLayoutEffect)(OH, [OH, SH]), (0, rH.useLayoutEffect)((() => {
        CH && (kB(document, CH, {
          keysAbove: QH
        }), oB(document, CH, LH, AH, tH), OH(), VH())
      }), [CH, LH, AH, QH, hH, tH, SH, VH, OH]), (0, rH.useEffect)((() => {
        var HH;
        if (!CH) return;
        const BH = new ResizeObserver((() => {
          zH() || VH()
        }));
        for (const LH of CH.querySelectorAll(`[${IH.h}]`)) BH.observe(LH);
        return null === (HH = CH.fonts) || void 0 === HH || HH.ready.then(VH), () => {
          BH.disconnect()
        }
      }), [CH, VH, zH, hH]), {
        doc: CH,
        boxes: XH.boxes,
        pieces: XH.pieces,
        insets: YH,
        keysAbove: QH,
        ready: MH,
        settled: vH
      }
    }
    const BL = ["Above", "Below", "Left", "Right"];

    function LL(HH, BH, LH, AH, rH) {
      const SH = LH[HH],
        hH = (SH.left + SH.right) / 2,
        tH = (SH.top + SH.bottom) / 2,
        zH = (7.5 * BH.length + 14) / AH,
        CH = 18 / AH,
        EH = {
          Above: {
            left: hH - zH / 2,
            top: SH.top - CH,
            right: hH + zH / 2,
            bottom: SH.top
          },
          Below: {
            left: hH - zH / 2,
            top: SH.bottom,
            right: hH + zH / 2,
            bottom: SH.bottom + CH
          },
          Left: {
            left: SH.left - zH,
            top: tH - CH / 2,
            right: SH.left,
            bottom: tH + CH / 2
          },
          Right: {
            left: SH.right,
            top: tH - CH / 2,
            right: SH.right + zH,
            bottom: tH + CH / 2
          }
        },
        XH = aB(LH, HH),
        GH = {
          left: 0,
          top: 0,
          right: rH.width,
          bottom: rH.height
        };
      return BL[(0, dH.u)(BL.map((HH => EH[HH])), XH, {
        bounds: GH
      })]
    }

    function AL() {
      const [HH, BH] = (0, wH.b)();
      return (0, rH.useMemo)((() => ({
        width: HH,
        height: BH
      })), [HH, BH])
    }

    function rL(HH) {
      var BH;
      const {
        layout: LH,
        orientation: SH,
        selected: hH,
        onSelect: tH,
        onMove: CH,
        canMove: EH,
        actionButtons: XH,
        joystickFixed: GH,
        presence: YH,
        keyNames: QH,
        maxHeight: WH,
        fill: MH = !1,
        apiRef: xH
      } = HH, {
        t: vH
      } = (0, AH.B)(), PH = AL(), UH = (null !== (BH = (0, uH.j)("maxAuraLevel")) && void 0 !== BH ? BH : 0) > 0, VH = LH.hudLayouts[SH], OH = (0, rH.useRef)(null), bH = (0, rH.useRef)(null), kH = (0, rH.useRef)(null), mH = (0, rH.useRef)(null), lH = (0, rH.useRef)(null), KH = (0, rH.useRef)(null), cH = (0, ZH.c)(OH).width, eH = MH ? 1 : cH > 0 ? (0, dH.C)(cH, PH.width, PH.height, WH) : 0, qH = (0, rH.useRef)((() => !1)), gH = (0, rH.useCallback)((() => qH.current()), []), NH = `${XH}:${GH}:${UH}`, {
        doc: RH,
        boxes: jH,
        pieces: nH,
        insets: DH,
        keysAbove: wH,
        ready: iH,
        settled: pH
      } = HL(kH, {
        layout: LH,
        orientation: SH,
        viewport: PH,
        replicaKey: NH,
        joystickFixed: GH,
        busy: gH
      }), yH = (0, rH.useCallback)((HH => {
        RH && oB(document, RH, HH, SH, GH)
      }), [RH, SH, GH]), HB = (0, rH.useCallback)((HH => {
        if (!RH || !pH) return null;
        yH(HH);
        const BH = pB(RH),
          LH = function(HH, BH) {
            let {
              boxes: LH,
              pieces: AH,
              pairHome: rH
            } = HH;
            const SH = AH.find((HH => IH.q.has(HH.id)));
            if (!SH || !rH) return LH;
            const hH = (0, dH.d)(rH),
              tH = BH(SH.id),
              zH = qB(SH.box) / tH / 2,
              CH = (SH.box.bottom - SH.box.top) / tH / 2;
            return {
              ...LH,
              inventory: {
                left: hH.x - zH,
                top: hH.y - CH,
                right: hH.x + zH,
                bottom: hH.y + CH
              }
            }
          }(JB(RH), (BH => (0, fH.z)(HH, SH, BH)[2]));
        return {
          boxes: LH,
          keysAbove: BH,
          shopAlone: yB(RH)
        }
      }), [RH, pH, yH, SH]), BB = (0, rH.useRef)(null), LB = (0, rH.useRef)(null), AB = (0, rH.useRef)(LH);
      AB.current = LH;
      const rB = (0, rH.useCallback)((() => {
        null !== BB.current && (cancelAnimationFrame(BB.current), BB.current = null)
      }), []);
      (0, rH.useEffect)((() => rB), [LH, rB]);
      const SB = (0, rH.useRef)(-1 / 0),
        {
          lockable: hB
        } = HH,
        tB = (0, rH.useCallback)((HH => {
          if (yH(HH), SB.current = performance.now(), !pH || 0 === LH.hudLayouts[SH].hudLocked.length) return;
          const BH = LH;
          rB(), BB.current = requestAnimationFrame((() => {
            var LH;
            if (BB.current = null, AB.current !== BH) return;
            const AH = (null === (LH = LB.current) || void 0 === LH ? void 0 : LH.from) === BH ? LB.current.measured : HB(BH);
            AH && (LB.current = {
              from: BH,
              measured: AH
            }), yH(AH ? NB(BH, HH, SH, PH, HB, {
              canKeep: hB,
              passes: 1,
              before: AH
            }) : HH)
          }))
        }), [yH, pH, LH, SH, PH, HB, hB, rB]),
        zB = ZB({
          preview: (HH, BH) => {
            BH ? tB((0, fH._)(LH, SH, HH, BH)) : (rB(), yH(LH))
          },
          stageRef: bH,
          ringRef: mH,
          centreLineRef: lH,
          snapCentre: LH.hudSnapCentre,
          ready: pH,
          measure: HH => {
            const BH = RH && iH ? JB(RH).boxes[HH] : void 0;
            return BH && (0, dH.j)(BH, PH.width, PH.height) ? BH : null
          },
          k: eH,
          viewport: PH,
          boxes: jH,
          pieces: nH,
          selected: hH,
          insets: DH,
          layout: VH,
          canMove: EH,
          onSelect: tH,
          onMove: (HH, BH, LH) => {
            rB(), CH(HH, BH, LH)
          }
        });
      (0, rH.useLayoutEffect)((() => {
        qH.current = zB.busy
      }), [zB.busy]);
      const CB = (0, rH.useRef)([]),
        EB = (0, rH.useRef)(VH.hudElements);
      (0, rH.useEffect)((() => {
        for (const rH of Object.keys(VH.hudElements)) {
          var HH, BH, LH, AH;
          (null !== (HH = null === (BH = VH.hudElements[rH]) || void 0 === BH ? void 0 : BH[2]) && void 0 !== HH ? HH : 1) > (null !== (LH = null === (AH = EB.current[rH]) || void 0 === AH ? void 0 : AH[2]) && void 0 !== LH ? LH : 1) && EH(rH) && !(0, sH.t)(rH, VH.hudElements[rH]) && CB.current.push(...(0, IH.K)(rH, wH, EH))
        }
        EB.current = VH.hudElements
      }), [VH.hudElements, EH, wH]), (0, rH.useEffect)((() => {
        if (!iH) return;
        const HH = (0, dH.E)(PH.width, PH.height, DH);
        for (const LH of (0, IH.G)(CB.current.splice(0), jH, HH, EH)) {
          const AH = jH[LH];
          if (!AH || zB.busy() || !(0, dH.j)(AH, PH.width, PH.height)) continue;
          const rH = (0, dH.G)(AH, HH);
          if (0 !== rH.x || 0 !== rH.y) {
            var BH;
            const [HH, AH] = null !== (BH = VH.hudElements[LH]) && void 0 !== BH ? BH : [0, 0];
            CH(LH, HH + rH.x / PH.width, AH + rH.y / PH.height)
          }
        }
      }), [jH, iH]), (0, rH.useImperativeHandle)(xH, (() => ({
        setScale: (HH, BH) => {
          tB((0, fH._)(LH, SH, HH, {
            scale: BH
          }))
        },
        setOpacity: HH => {
          yH({
            ...LH,
            hudKeyOpacity: HH
          })
        },
        keepLocks: (HH, BH) => (rB(), NB(HH, BH, SH, PH, HB, {
          canKeep: hB
        })),
        setSafe: HH => {
          const BH = (0, JH.w)(HH, PH.width, PH.height, fB(null !== RH && void 0 !== RH ? RH : document));
          tB((0, fH.eb)(LH, SH, HH)), KH.current && (KH.current.style.inset = BH.map((HH => HH * eH + "px")).join(" "))
        }
      })), [yH, tB, HB, rB, hB, RH, LH, SH, PH, eH]);
      const XB = new Set(Object.keys(VH.hudElements).filter((HH => (0, fH.s)(VH.hudElements, HH)))),
        GB = hH ? jH[hH] : void 0,
        uB = hH ? (0, IH.B)(hH, XH, vH, QH) : "",
        WB = (0, MB.h)(PH.width, PH.height),
        xB = hH ? (0, aH.g)(hH, nH, VH, WB) : [],
        vB = new Set((0, sH.r)(VH.hudElements)),
        PB = (0, sH.G)(VH, (0, sH.C)(YH.rowIcons)).state,
        TB = xB.join(),
        UB = (0, rH.useRef)(HH.onReady);
      UB.current = HH.onReady, (0, rH.useEffect)((() => {
        var HH;
        null === (HH = UB.current) || void 0 === HH || HH.call(UB, pH)
      }), [pH]);
      const VB = (0, rH.useRef)(HH.onMeasured);
      (0, rH.useLayoutEffect)((() => {
        VB.current = HH.onMeasured
      }));
      const OB = (0, rH.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        bB = [sB(nH), PH.width, PH.height, DH.top, DH.right, DH.bottom, DH.left, iH, NH].join("|");
      (0, rH.useEffect)((() => {
        const HH = TB ? TB.split(",") : [],
          BH = () => {
            var BH;
            null === (BH = VB.current) || void 0 === BH || BH.call(VB, jH, HH, OB.current.caps)
          };
        let LH;
        const AH = () => {
          const HH = AB.current;
          if (!RH || HH === OB.current.layout && bB === OB.current.input) return !1;
          const rH = SB.current + 250 - performance.now();
          return HH === OB.current.layout && (rH > 0 || gH()) ? (LH = setTimeout((() => {
            AH() && BH()
          }), Math.max(rH, 62.5)), !1) : (OB.current = {
            layout: HH,
            input: bB,
            caps: {
              hotbar: KB(RH, QB),
              cluster: iB(RH, (0, dH.E)(PH.width, PH.height, DH), QB)
            }
          }, !0)
        };
        return AH(), BH(), () => {
          clearTimeout(LH)
        }
      }), [jH, TB, RH, PH, DH, bB, gH]);
      const kB = HH => ({
        left: HH.left * eH,
        top: HH.top * eH,
        width: (HH.right - HH.left) * eH,
        height: (HH.bottom - HH.top) * eH
      });
      return (0, TH.jsx)("div", {
        ref: OH,
        className: zH()("HudPreviewBox", {
          Fill: MH
        }),
        style: {
          height: PH.height * eH
        },
        children: (0, TH.jsxs)("div", {
          ref: bH,
          className: "HudPreviewStage",
          style: {
            width: PH.width * eH,
            height: PH.height * eH
          },
          children: [(0, TH.jsx)("iframe", {
            ref: kH,
            className: "HudPreviewFrame",
            title: vH("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: PH.width,
              height: PH.height,
              transform: `scale(${eH})`
            }
          }), RH && (0, FH.createPortal)((0, TH.jsx)(YB, {
            presence: YH,
            portraitPhone: WB,
            hidden: XB,
            actionButtons: XH,
            joystickFixed: GH,
            keysAbove: wH,
            auraBar: UH,
            trayState: PB,
            moved: vB
          }), RH.body), (0, TH.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...zB.handlers,
            children: [(0, TH.jsx)("div", {
              ref: KH,
              className: "HudPreviewSafeZone",
              style: {
                top: DH.top * eH,
                right: DH.right * eH,
                bottom: DH.bottom * eH,
                left: DH.left * eH
              }
            }), nH.map(((HH, BH) => {
              let {
                id: LH,
                box: AH
              } = HH;
              return (0, TH.jsx)("div", {
                className: "HudPreviewHandle",
                style: kB((0, dH.r)(AH, 40 / eH))
              }, `${LH}:${BH}`)
            })), VH.hudLocked.map((HH => {
              const BH = jH[HH];
              return BH && (0, TH.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: BH.right * eH,
                  top: BH.top * eH
                },
                children: (0, TH.jsx)(oH.c, {
                  name: "lock"
                })
              }, HH)
            })), (0, TH.jsx)("div", {
              ref: lH,
              className: "HudPreviewCentreLine",
              style: {
                left: PH.width / 2 * eH
              }
            }), hH && GB && (0, TH.jsx)("div", {
              ref: mH,
              className: zH()("HudPreviewRing", {
                Fixed: !EH(hH),
                Overlap: xB.length > 0
              }),
              style: kB(GB),
              children: (0, TH.jsx)("span", {
                className: zH()("HudPreviewRingLabel", LL(hH, uB, jH, eH, PH)),
                children: uB
              })
            })]
          })]
        })
      })
    }

    function SL(HH, BH) {
      (0, rH.useEffect)((() => {
        var LH;
        null === (LH = HH.current) || void 0 === LH || LH.toggleAttribute("inert", BH)
      }), [HH, BH])
    }
    const hL = "hudFullScreen";

    function tL(HH) {
      let {
        onScale: BH,
        onHidden: LH,
        onReset: SH,
        locked: hH,
        lockable: tH,
        onLocked: zH,
        onClose: EH,
        ...XH
      } = HH;
      const {
        t: GH
      } = (0, AH.B)(), YH = (0, rH.useRef)(null);
      (0, DH.r)("popup", YH, EH),
      function(HH) {
        const BH = (0, rH.useRef)(HH);
        BH.current = HH, (0, rH.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [hL]: !0
          }, "");
          let HH = !1;
          const LH = () => {
            HH = !0, BH.current()
          };
          return window.addEventListener("popstate", LH), () => {
            var BH;
            window.removeEventListener("popstate", LH), !HH && null !== (BH = window.history.state) && void 0 !== BH && BH[hL] && window.history.back()
          }
        }), [])
      }(EH), (0, rH.useEffect)((() => {
        function HH(HH) {
          "Escape" === HH.key && (HH.stopPropagation(), EH())
        }
        return window.addEventListener("keydown", HH, !0), () => {
          window.removeEventListener("keydown", HH, !0)
        }
      }), [EH]);
      const {
        selected: uH
      } = XH, QH = (0, rH.useRef)(null), WH = (0, rH.useRef)(null), [MH, xH] = (0, rH.useState)(!1);
      SL(WH, !MH);
      const [vH, PH] = (0, rH.useState)(null), [UH, VH] = (0, rH.useState)([]), [OH, bH] = uB(), kH = (0, rH.useRef)(XH.selected);
      kH.current = XH.selected;
      const mH = (0, rH.useRef)({}),
        oH = (0, rH.useCallback)((() => {
          const HH = QH.current;
          HH && PH(function(HH, BH, LH) {
            var AH;
            const {
              innerWidth: rH,
              innerHeight: SH
            } = window, hH = HH.offsetWidth, tH = HH.offsetHeight, zH = Math.max(IB()[0], 6), CH = [];
            for (const GH of [zH, .2 * SH, .5 * SH - tH / 2, .33 * SH])
              for (const HH of [.5, .3, .7]) CH.push({
                left: Math.max(0, Math.min(rH - hH - 6, Math.max(6, rH * HH - hH / 2))),
                top: GH
              });
            const EH = CH.map((HH => ({
                left: HH.left - 6,
                top: HH.top - 6,
                right: HH.left + hH + 6,
                bottom: HH.top + tH + 6
              }))),
              XH = aB(BH, LH);
            return CH[(0, dH.u)(EH, XH, {
              avoid: LH && null !== (AH = BH[LH]) && void 0 !== AH ? AH : null
            })]
          }(HH, mH.current, kH.current))
        }), []),
        IH = (0, rH.useCallback)(((HH, BH, LH) => {
          VH(BH), bH(LH), mH.current = HH, oH()
        }), [oH, bH]);
      return (0, rH.useLayoutEffect)(oH, [XH.selected, oH]), (0, FH.createPortal)((0, TH.jsxs)("div", {
        ref: YH,
        className: "HudFullScreenEditor",
        children: [(0, TH.jsx)(rL, {
          ...XH,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: IH,
          onReady: xH,
          lockable: tH
        }), (0, TH.jsxs)("div", {
          ref: QH,
          className: "HudFullScreenToolbar",
          style: null === vH ? void 0 : {
            left: vH.left,
            top: vH.top,
            transform: "none"
          },
          children: [(0, TH.jsx)("div", {
            ref: WH,
            className: "HudFullScreenControls",
            children: (0, TH.jsx)(WB, {
              selected: uH,
              layout: XH.layout.hudLayouts[XH.orientation],
              actionButtons: XH.actionButtons,
              keyNames: XH.keyNames,
              overlaps: UH,
              scaleCaps: OH,
              onScale: BH,
              onHidden: LH,
              onReset: SH,
              locked: hH,
              lockable: tH,
              onLocked: zH,
              joystickFixed: XH.joystickFixed
            })
          }), (0, TH.jsx)(CH.i, {
            className: "HudFullScreenDone",
            onClick: EH,
            padDefaultFocus: !0,
            children: GH("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const zL = HH => `${Math.round(100*HH)}%`;

    function CL(HH) {
      let {
        info: BH,
        tuple: LH,
        props: rH
      } = HH;
      const {
        t: SH
      } = (0, AH.B)();
      return (0, TH.jsx)(YH.f, {
        name: SH("hudLayout:size"),
        min: fH.n,
        max: fH.j,
        step: QB,
        initValue: LH[2],
        disabled: rH.locked.has(BH.id),
        selectableMax: rH.scaleCaps[BH.id],
        cappedNote: SH("hudLayout:sizeCapped"),
        format: zL,
        onChange: HH => {
          rH.onScalePreview(BH.id, HH)
        },
        onChangeComplete: HH => {
          rH.onScale(BH.id, HH)
        }
      })
    }

    function EL(HH) {
      const {
        t: BH
      } = (0, AH.B)(), {
        present: LH,
        elements: SH,
        selected: hH,
        onSelect: tH,
        onHidden: CH,
        onReset: EH,
        note: XH,
        actionButtons: GH,
        keyNames: YH,
        sizeBesidePreview: uH,
        locked: QH,
        lockable: WH,
        onLocked: MH
      } = HH, {
        rowIconsOpen: xH,
        onRowIconsOpen: vH
      } = HH, PH = (0, rH.useRef)(null), UH = null !== hH && (xH || !(0, fH.H)(hH));
      return (0, rH.useEffect)((() => {
        var HH;
        const BH = hH ? null === (HH = PH.current) || void 0 === HH ? void 0 : HH.querySelector(`[data-hud-row="${hH}"]`) : null;
        if (!BH) return;
        const LH = BH.closest(".SettingsMenuRight"),
          AH = performance.now();
        let rH = null;
        const SH = () => {
            clearInterval(zH), null === LH || void 0 === LH || LH.removeEventListener("scroll", tH)
          },
          tH = () => {
            nB() || SH()
          },
          zH = setInterval((() => {
            const HH = performance.now();
            HH - AH > 1500 ? SH() : nB() ? rH = null : null === rH ? rH = HH : HH - rH >= 150 && (SH(), function(HH) {
              var BH;
              const LH = HH.closest(".SettingsMenuRight"),
                AH = null === (BH = HH.closest(".HudLayoutSettings")) || void 0 === BH ? void 0 : BH.querySelector(".HudLayoutPreviewBox");
              if (!LH || !AH) return;
              const rH = AH.getBoundingClientRect().bottom + 8,
                SH = LH.getBoundingClientRect().bottom - 8,
                hH = HH.getBoundingClientRect();
              hH.top < rH ? LH.scrollBy({
                top: hH.top - rH,
                behavior: "smooth"
              }) : hH.bottom > SH && LH.scrollBy({
                top: Math.min(hH.bottom - SH, hH.top - rH),
                behavior: "smooth"
              })
            }(BH))
          }), 50);
        return null === LH || void 0 === LH || LH.addEventListener("scroll", tH, {
          passive: !0
        }), SH
      }), [hH, UH]), (0, TH.jsx)("div", {
        ref: PH,
        className: "SettingBoxGroup HudElementList",
        children: IH.o.filter((HH => LH.has(HH.id) && (xH || !(0, fH.H)(HH.id)))).map((LH => {
          const AH = ((HH, BH) => {
              var LH;
              return null !== (LH = HH[BH]) && void 0 !== LH ? LH : fH.o
            })(SH, LH.id),
            rH = (0, fH.s)(SH, LH.id),
            PH = LH.id === hH,
            UH = LH.scale && !uH,
            VH = XH(LH.id, PH);
          return (0, TH.jsxs)("div", {
            "data-hud-row": LH.id,
            className: zH()("SettingBox HudElementRow", {
              Open: PH,
              Hidden: rH,
              Child: void 0 !== LH.parent,
              Grandchild: (0, IH.x)(LH.id).length > 1
            }),
            children: [(0, TH.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, TH.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": UH ? PH : void 0,
                onClick: () => {
                  tH(LH.id)
                },
                children: (0, TH.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [(0, IH.B)(LH.id, GH, BH, YH), LH.scale && 1 !== AH[2] && !(PH && UH) && (0, TH.jsxs)(TH.Fragment, {
                    children: [" ", (0, TH.jsx)("span", {
                      className: "HudElementRowSize",
                      children: zL(AH[2])
                    })]
                  }), UH && (0, TH.jsxs)(TH.Fragment, {
                    children: [" ", (0, TH.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, TH.jsx)(eH, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: LH.id,
                actionButtons: GH,
                keyNames: YH,
                locked: QH.has(LH.id),
                lockable: WH(LH.id),
                onLocked: MH
              }), "menu" === LH.id && (0, TH.jsx)(qH, {
                className: "HudElementRowIcon",
                open: xH,
                name: (0, IH.B)(LH.id, GH, BH, YH),
                onToggle: vH
              }), "menu" !== LH.id && (0, TH.jsx)(KH, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: LH.id,
                elements: SH,
                actionButtons: GH,
                keyNames: YH,
                onHidden: CH
              }), (0, TH.jsx)(cH, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: QH.has(LH.id),
                id: LH.id,
                elements: SH,
                actionButtons: GH,
                keyNames: YH,
                onReset: EH
              })]
            }), PH && UH && (0, TH.jsx)(CL, {
              info: LH,
              tuple: AH,
              props: HH
            }), VH && (0, TH.jsx)("div", {
              className: "HudElementNote",
              children: VH
            })]
          }, LH.id)
        }))
      })
    }

    function XL(HH) {
      let {
        preview: BH,
        quick: LH,
        onFullScreen: SH,
        resting: hH,
        onSidePanel: tH
      } = HH;
      const {
        t: zH
      } = (0, AH.B)(), EH = AL(), XH = (0, rH.useRef)(null), {
        width: GH
      } = (0, ZH.c)(XH), YH = Math.floor(EH.width * Math.min(1, BH.maxHeight / EH.height)), uH = GH - YH - 12, QH = uH >= 130, WH = GH > 0;
      (0, rH.useEffect)((() => {
        WH && tH(QH)
      }), [WH, QH, tH]);
      const MH = (0, dH.C)(QH ? YH : GH, EH.width, EH.height, BH.maxHeight),
        xH = hH ? (0, TH.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: EH.height * MH
          }
        }) : (0, TH.jsx)(rL, {
          ...BH
        }),
        vH = HH => (0, TH.jsxs)(CH.W, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: zH("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: SH,
          children: [(0, TH.jsx)(oH.c, {
            name: "expand"
          }), HH && (0, TH.jsx)("span", {
            children: zH("hudLayout:fullScreen")
          })]
        });
      return (0, TH.jsxs)("div", {
        ref: XH,
        className: "SettingBox HudLayoutPreviewBox",
        children: [GH > 0 && QH && (0, TH.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, TH.jsx)("div", {
            style: {
              width: YH
            },
            children: xH
          }), (0, TH.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, TH.jsx)(WB, {
              selected: BH.selected,
              ...LH,
              joystickFixed: BH.joystickFixed,
              extra: vH(!BH.selected || uH >= 278)
            })
          })]
        }), GH > 0 && !QH && (0, TH.jsxs)(TH.Fragment, {
          children: [xH, (0, TH.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: vH(!1)
          })]
        })]
      })
    }
    var GL = LH(2673),
      YL = LH(4818),
      uL = LH(2656),
      QL = LH(2613);
    const WL = HH => {
      const BH = JH.p * ("sides" === HH ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(BH / 2))
    };

    function ML(HH, BH, LH) {
      const [AH, rH, SH, hH] = HH;
      return "sides" === BH ? [AH, LH, SH, LH] : [LH, rH, LH, hH]
    }
    const xL = [null, null, null, null],
      vL = HH => `${HH}px`;

    function PL(HH) {
      let {
        safe: BH,
        onPreview: LH,
        onCommit: SH
      } = HH;
      const {
        t: hH
      } = (0, AH.B)(), tH = (0, JH.w)(null !== BH && void 0 !== BH ? BH : xL, window.innerWidth, window.innerHeight, fB(document).map(Math.round)), zH = (0, rH.useRef)(null !== BH && void 0 !== BH ? BH : xL);
      zH.current = null !== BH && void 0 !== BH ? BH : xL;
      const EH = HH => {
        const BH = Math.min(WL(HH), "sides" === HH ? Math.max(tH[1], tH[3]) : Math.max(tH[0], tH[2]));
        return (0, TH.jsx)(YH.f, {
          name: hH("sides" === HH ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: WL(HH),
          step: 2,
          initValue: BH,
          format: vL,
          onChange: BH => {
            LH(ML(zH.current, HH, BH))
          },
          onChangeComplete: AH => {
            if (AH === BH) return void LH(zH.current);
            const rH = ML(zH.current, HH, AH);
            zH.current = rH, SH(rH), (0, OH.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: HH
            })
          }
        })
      };
      return (0, TH.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, TH.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, TH.jsx)("div", {
            children: hH("hudLayout:safeZone")
          }), (0, TH.jsx)(CH.W, {
            active: null === BH,
            pressed: null === BH,
            onClick: () => {
              SH(null)
            },
            children: hH("hudLayout:safeZoneAuto")
          })]
        }), EH("sides"), EH("ends")]
      })
    }

    function TL() {
      const {
        t: HH
      } = (0, AH.B)(), BH = (0, fH.X)(), {
        clientEscMenuOptions: LH
      } = (0, EH.m)(["clientEscMenuOptions"]), SH = (0, GL.g)(), hH = BH.hudLayouts[SH], [tH, zH] = (0, rH.useState)(null), {
        rowIconsOpen: XH,
        onRowIconsOpen: GH,
        select: uH
      } = function(HH, BH) {
        const [LH, AH] = (0, rH.useState)((() => fH.A.some((BH => void 0 !== HH.hudElements[BH] || HH.hudLocked.includes(BH))))), SH = (0, rH.useCallback)((HH => {
          BH(HH), (0, fH.H)(HH) && AH(!0)
        }), [BH]);
        return {
          rowIconsOpen: LH,
          onRowIconsOpen: AH,
          select: SH
        }
      }(hH, zH), [QH, WH] = (0, rH.useState)([]), [MH, xH] = (0, rH.useState)(null), [vH, PH] = uB(), UH = (0, rH.useCallback)(((HH, BH, LH) => {
        WH(BH), PH(LH);
        const AH = Object.keys(HH);
        xH((HH => (null === HH || void 0 === HH ? void 0 : HH.size) === AH.length && AH.every((BH => HH.has(BH))) ? HH : new Set(AH)))
      }), [PH]), {
        gameState: VH
      } = (0, EH.m)(["gameState"]), kH = (0, uL.j)(), mH = (0, QL.s)(), [oH] = (0, rH.useState)((() => {
        var HH, BH, LH, AH;
        return "inGame" === VH ? (0, pH.u)(document, kH, {
          rightOfCamera: null !== (HH = null === (BH = mH.rightOfCamera) || void 0 === BH ? void 0 : BH.icon) && void 0 !== HH ? HH : null,
          leftEnd: null !== (LH = null === (AH = mH.leftEnd) || void 0 === AH ? void 0 : AH.icon) && void 0 !== LH ? LH : null
        }) : pH.b
      })), lH = (0, rH.useRef)(null), KH = (0, rH.useRef)(null), cH = function(HH) {
        const [BH, LH] = (0, rH.useState)((() => .4 * window.innerHeight));
        return (0, rH.useLayoutEffect)((() => {
          var BH;
          const AH = null === (BH = HH.current) || void 0 === BH ? void 0 : BH.closest(".SettingsMenuRight");
          if (!AH) return;
          const rH = () => {
            const HH = AH.clientHeight < UL ? .4 : .5;
            LH(Math.max(80, AH.clientHeight * HH - 24))
          };
          rH();
          const SH = new ResizeObserver(rH);
          return SH.observe(AH), () => {
            SH.disconnect()
          }
        }), [HH]), BH
      }(KH), eH = (0, YL.s)(LH.joystickMode), qH = LH.touchActionButtons, gH = (0, rH.useMemo)((() => (0, pH.r)(oH, qH)), [oH, qH]), NH = (0, rH.useMemo)((() => new Set((0, pH.q)(oH, qH).map((HH => pH.c[HH])))), [oH, qH]);
      (0, rH.useEffect)((() => {
        (0, OH.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [RH, FH] = (0, rH.useState)(!1), [DH, wH] = (0, rH.useState)(!1), ZH = (0, rH.useRef)(null);
      SL(ZH, !DH);
      const [dH, aH] = (0, rH.useState)(!1), JH = (0, rH.useCallback)((() => {
        aH(!1)
      }), []), iH = (0, rH.useMemo)((() => new Set(hH.hudLocked)), [hH.hudLocked]), yH = HH => {
        var BH, LH;
        const AH = (0, fH.p)(),
          rH = HH(AH);
        (0, fH.R)(null !== (BH = null === (LH = lH.current) || void 0 === LH ? void 0 : LH.keepLocks(AH, rH)) && void 0 !== BH ? BH : rH)
      }, HB = (HH, BH) => {
        yH((LH => (0, fH._)(LH, SH, HH, BH)))
      }, BB = (HH, BH, LH) => {
        HB(HH, {
          dx: BH,
          dy: LH
        }), (0, OH.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${HH}`
        })
      }, LB = (HH, BH) => {
        yH((LH => (0, fH.ab)(LH, SH, HH, BH)))
      }, AB = HH => {
        const BH = IH.k[HH];
        return (BH.move || BH.scale) && ("joystick" !== HH || eH) && !(0, sH.t)(HH, hH.hudElements[HH])
      }, rB = HH => IH.k[HH].move && ("joystick" !== HH || eH) && !iH.has(HH), SB = new Set(IH.o.map((HH => HH.id)).filter((HH => {
        const BH = (0, fH.H)(HH) && !oH.rowIcons.includes(HH);
        return null === MH || MH.has(HH) || (0, fH.s)(hH.hudElements, HH) && !BH
      }))), hB = {
        present: SB,
        actionButtons: qH,
        keyNames: gH,
        scaleCaps: vH,
        sizeBesidePreview: RH,
        elements: hH.hudElements,
        selected: tH,
        onSelect: uH,
        rowIconsOpen: XH,
        onRowIconsOpen: GH,
        onScalePreview: (HH, BH) => {
          var LH;
          null === (LH = lH.current) || void 0 === LH || LH.setScale(HH, BH)
        },
        onScale: (HH, BH) => {
          HB(HH, {
            scale: BH
          }), (0, OH.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${HH}`
          })
        },
        onHidden: (HH, BH) => {
          HB(HH, {
            hidden: BH
          }), (0, OH.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${BH?"hide":"show"}:${HH}`
          })
        },
        onReset: HH => {
          HB(HH, fH.e)
        },
        locked: iH,
        lockable: AB,
        onLocked: LB,
        note: (BH, LH) => {
          const AH = LH && QH.length > 0 ? HH("hudLayout:overlapsNote", {
            names: (0, IH.y)(QH, qH, HH, gH)
          }) : null;
          if (LH && jH(BH, eH)) return (0, TH.jsxs)(TH.Fragment, {
            children: [AH && (0, TH.jsx)("span", {
              children: AH
            }), (0, TH.jsx)("span", {
              children: HH("hudLayout:floatingJoystickNote")
            }), !RH && (0, TH.jsx)(nH, {})]
          });
          if (AH) return AH;
          const rH = LH && iH.has(BH) ? HH("hudLayout:lockedNote") : null,
            SH = LH && NH.has(BH) ? HH("hudLayout:contextSlotNote") : null;
          return rH || SH ? (0, TH.jsxs)(TH.Fragment, {
            children: [rH && (0, TH.jsx)("span", {
              children: rH
            }), SH && (0, TH.jsx)("span", {
              children: SH
            })]
          }) : LH && "cluster" === BH ? HH("hudLayout:clusterNote") : LH && "inventory" === BH ? HH("hudLayout:inventoryNote") : LH && "menu" === BH ? HH("hudLayout:menuNote") : LH && (0, sH.t)(BH, hH.hudElements[BH]) && rB(BH) ? HH("hudLayout:rowIconNote") : LH && "arrows" === BH ? HH("hudLayout:arrowsNote") : LH && "sprint" === BH ? HH("hudLayout:sprintNote") : (0, IH.D)(BH) && (0, fH.s)(hH.hudElements, BH) ? HH("hudLayout:inventoryHiddenNote", {
            name: (0, IH.B)(BH, qH, HH, gH)
          }) : null
        }
      };
      return (0, TH.jsxs)("div", {
        ref: KH,
        className: "HudLayoutSettings",
        children: [(0, TH.jsxs)("div", {
          ref: ZH,
          className: "HudLayoutBody",
          children: [(0, TH.jsx)("div", {
            className: "HudLayoutOrientation",
            children: HH("landscape" === SH ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, TH.jsx)(XL, {
            preview: {
              layout: BH,
              orientation: SH,
              selected: tH,
              onSelect: uH,
              onMove: BB,
              canMove: rB,
              actionButtons: qH,
              joystickFixed: eH,
              presence: oH,
              keyNames: gH,
              maxHeight: cH,
              apiRef: lH,
              onMeasured: UH,
              onReady: wH,
              lockable: AB
            },
            quick: {
              layout: hH,
              actionButtons: qH,
              keyNames: gH,
              scaleCaps: vH,
              overlaps: QH,
              onScale: hB.onScale,
              onHidden: hB.onHidden,
              onReset: hB.onReset,
              locked: iH,
              lockable: AB,
              onLocked: LB
            },
            onFullScreen: () => {
              aH(!0)
            },
            resting: dH,
            onSidePanel: FH
          }), dH && (0, TH.jsx)(tL, {
            layout: BH,
            orientation: SH,
            selected: tH,
            onSelect: uH,
            onMove: BB,
            canMove: rB,
            actionButtons: qH,
            joystickFixed: eH,
            presence: oH,
            keyNames: gH,
            onScale: hB.onScale,
            onHidden: hB.onHidden,
            onReset: hB.onReset,
            locked: iH,
            lockable: AB,
            onLocked: LB,
            apiRef: lH,
            onClose: JH
          }), (0, TH.jsx)(PL, {
            safe: hH.hudSafe,
            onCommit: HH => {
              yH((BH => (0, fH.eb)(BH, SH, HH)))
            },
            onPreview: HH => {
              var BH;
              null === (BH = lH.current) || void 0 === BH || BH.setSafe(HH)
            }
          }), (0, TH.jsx)(YH.c, {
            label: HH("hudLayout:snapCentre"),
            checked: BH.hudSnapCentre,
            onClick: HH => {
              (0, fH.O)(HH)
            },
            circleInfoText: HH("hudLayout:snapCentreInfo")
          }), (0, TH.jsx)(EL, {
            ...hB
          }), (0, TH.jsx)(YH.e, {
            label: HH("hudLayout:shape"),
            options: fH.B.map((BH => ({
              value: BH,
              label: HH(`hudLayout:shape_${BH}`)
            }))),
            value: BH.hudShape,
            onChange: HH => {
              yH((BH => ({
                ...BH,
                hudShape: HH
              }))), (0, OH.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: HH
              })
            }
          }), (0, TH.jsx)(YH.f, {
            name: HH("hudLayout:opacity"),
            min: fH.h,
            max: 1,
            step: .05,
            initValue: BH.hudKeyOpacity,
            format: HH => `${Math.round(100*HH)}%`,
            circleInfoText: HH("hudLayout:opacityInfo"),
            onChange: HH => {
              var BH;
              null === (BH = lH.current) || void 0 === BH || BH.setOpacity(HH)
            },
            onChangeComplete: HH => {
              (0, fH.N)(HH), (0, OH.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, TH.jsx)(CH.O, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const HH = bH.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await HH.getResult() && (0, fH.L)()
            }()
          },
          children: HH("hudLayout:resetAll")
        })]
      })
    }
    const UL = 350;
    const VL = [function() {
      const {
        t: HH
      } = (0, AH.B)(), [BH, LH] = (0, rH.useState)(!1), SH = (0, rH.useRef)(null);
      return (0, rH.useEffect)((() => {
        var HH;
        BH && (null === (HH = SH.current) || void 0 === HH || HH.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [BH]), (0, TH.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, TH.jsx)(kH.c, {
          ref: SH,
          icon: "arrows-up-down-left-right",
          title: HH("hudLayout:title"),
          sub: HH("hudLayout:entrySub"),
          expanded: BH,
          onClick: () => {
            LH(!BH)
          }
        }), BH && (0, TH.jsx)(TL, {})]
      })
    }, function() {
      const {
        t: HH
      } = (0, AH.B)(), {
        joystickMode: BH,
        touchSpeedCurve: LH,
        autorun: rH,
        jumpLock: SH,
        touchEdgeGuard: hH
      } = (0, EH.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, TH.jsxs)(TH.Fragment, {
        children: [(0, TH.jsx)(YH.e, {
          label: HH("settingsMenu:joystick"),
          options: PH.Hb.map((BH => ({
            value: BH,
            label: HH(UH[BH])
          }))),
          value: BH,
          onChange: HH => {
            EH.c.setClientEscMenuOptions({
              joystickMode: HH
            })
          },
          circleInfoText: HH("settingsMenu:joystickInfo")
        }), (0, TH.jsx)(YH.c, {
          label: HH("settingsMenu:preciseWalking"),
          checked: LH,
          onClick: HH => {
            EH.c.setClientEscMenuOptions({
              touchSpeedCurve: HH
            })
          },
          circleInfoText: HH("settingsMenu:preciseWalkingInfo")
        }), (0, TH.jsx)(YH.c, {
          label: HH("settingsMenu:autoRun"),
          checked: rH,
          onClick: HH => {
            EH.c.setClientEscMenuOptions({
              autorun: HH
            })
          },
          circleInfoText: HH("settingsMenu:autoRunInfo")
        }), (0, TH.jsx)(YH.c, {
          label: HH("settingsMenu:jumpLock"),
          checked: SH,
          onClick: HH => {
            EH.c.setClientEscMenuOptions({
              jumpLock: HH
            })
          },
          circleInfoText: HH("settingsMenu:jumpLockInfo")
        }), (0, TH.jsx)(YH.c, {
          label: HH("touchSettings:stopAtEdges"),
          checked: hH,
          onClick: HH => {
            EH.c.setClientEscMenuOptions({
              touchEdgeGuard: HH
            })
          },
          circleInfoText: HH("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, TH.jsx)(vH.e, {})
    }, function() {
      const {
        t: HH
      } = (0, AH.B)(), {
        clientEscMenuOptions: BH
      } = (0, EH.m)(["clientEscMenuOptions"]);
      return (0, VH.c)() ? (0, TH.jsx)(YH.c, {
        label: HH("settingsMenu:vibration"),
        checked: BH.vibration,
        onClick: HH => {
          EH.c.setClientEscMenuOptions({
            vibration: HH
          })
        },
        circleInfoText: HH("settingsMenu:vibrationInfo")
      }) : null
    }];

    function OL() {
      return (0, TH.jsx)(TH.Fragment, {
        children: VL.map(((HH, BH) => (0, TH.jsx)(HH, {}, BH)))
      })
    }
    var bL = LH(4753);

    function kL() {
      const {
        t: HH
      } = (0, AH.B)(), {
        isTouchScreen: BH,
        clientEscMenuOptions: LH,
        gameState: hH
      } = (0, EH.m)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), tH = (0, uH.j)("ezBridging"), zH = (0, uH.j)("ezTowering"), WH = "inGame" !== hH || !0 === tH, MH = (0, QH.i)(), vH = null !== MH && ("inGame" !== hH || !0 === zH), [, PH] = (0, rH.useReducer)((HH => HH + 1), 0), UH = (0, xH.g)(), [VH, OH] = (0, rH.useState)(bL.e);
      return (0, TH.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [UH && (0, TH.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, TH.jsx)("div", {
            children: HH("controller:settingsControlsNote")
          }), (0, TH.jsx)(CH.W, {
            onClick: () => {
              EH.c.set({
                openSettingsCategory: "controller"
              })
            },
            children: HH("controller:settingsOpenController")
          })]
        }), (0, XH.isTouchscreen)() && !(0, XH.isMobile)() ? (0, TH.jsx)(TH.Fragment, {
          children: (0, TH.jsx)(YH.c, {
            label: HH("settingsMenu:useTouchControls"),
            checked: VH,
            onClick: HH => {
              (0, bL.d)(HH), OH(HH)
            }
          })
        }) : null, BH && (0, TH.jsx)(OL, {}), WH && (0, TH.jsx)(YH.c, {
          label: HH("settingsMenu:ezBridging"),
          checked: LH.ezBridging,
          onClick: HH => {
            EH.c.setClientEscMenuOptions({
              ezBridging: HH
            })
          },
          circleInfoText: HH("settingsMenu:ezBridgingInfo")
        }), vH && (0, TH.jsx)(YH.c, {
          label: HH("settingsMenu:ezTowering"),
          checked: LH.ezTowering,
          onClick: HH => {
            EH.c.setClientEscMenuOptions({
              ezTowering: HH
            })
          },
          circleInfoText: HH("jump" === MH ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, TH.jsx)(YH.c, {
          label: HH("settingsMenu:crouchToggle"),
          checked: LH.crouchIsToggle,
          onClick: HH => {
            EH.c.setClientEscMenuOptions({
              crouchIsToggle: HH
            })
          },
          circleInfoText: HH("settingsMenu:crouchToggleInfo")
        }), (0, TH.jsx)(YH.c, {
          label: HH("settingsMenu:hideUiToggle"),
          checked: LH.hideUiIsToggle,
          onClick: HH => {
            EH.c.setClientEscMenuOptions({
              hideUiIsToggle: HH
            })
          },
          circleInfoText: HH("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, GH.d)() && (0, TH.jsx)(YH.f, {
          name: HH("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: LH.touchscreenSensitivity,
          onChange: HH => {
            EH.c.setClientEscMenuOptions({
              touchscreenSensitivity: HH
            })
          }
        }), !(0, XH.isMobile)() && (0, TH.jsx)(YH.f, {
          name: HH("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: LH.mouseSensitivity,
          onChange: HH => {
            EH.c.setClientEscMenuOptions({
              mouseSensitivity: HH
            })
          }
        }), !(0, XH.isMobile)() && (0, TH.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, TH.jsx)("div", {
            className: "SliderText",
            children: HH("settingsMenu:keyBindings")
          }), SH.e.map((BH => (0, TH.jsx)(mL, {
            title: HH(BH.name.translationKey, BH.name.params),
            defaultOpen: SH.i.has(BH.id),
            children: BH.actions.map((HH => (0, TH.jsx)(oL, {
              noaAction: HH,
              forceUpdate: PH,
              clashesWith: BH.clashesWith,
              showPadGlyph: UH
            }, HH)))
          }, BH.name.translationKey))), (0, TH.jsx)(CH.O, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, SH.K)(), PH()
            },
            children: HH("controls:resetBindings")
          })]
        })]
      })
    }

    function mL(HH) {
      let {
        title: BH,
        defaultOpen: LH,
        children: AH
      } = HH;
      const [SH, hH] = (0, rH.useState)(LH);
      return (0, TH.jsxs)("div", {
        className: zH()("ControlsSection", {
          Collapsed: !SH
        }),
        children: [(0, TH.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            hH(!SH)
          },
          children: [(0, TH.jsx)("div", {
            className: "ControlsSectionTitle",
            children: BH
          }), (0, TH.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), SH && (0, TH.jsx)("div", {
          className: "ControlsSectionRows",
          children: AH
        })]
      })
    }

    function oL(HH) {
      let {
        noaAction: BH,
        forceUpdate: LH,
        clashesWith: tH,
        showPadGlyph: EH
      } = HH;
      const {
        t: XH
      } = (0, AH.B)(), GH = (0, MH.d)(BH), [YH, uH] = (0, rH.useState)(!1), [QH, xH] = (0, rH.useState)("controls:clickToEnterNewBinding"), [vH, PH] = (0, rH.useState)(null), [UH, VH] = (0, rH.useState)(null), OH = (0, rH.useRef)(null);
      (0, rH.useEffect)((() => {
        YH && OH.current && OH.current.focus()
      }), [YH]);
      const bH = SH.w[BH].filter((HH => hH.i[HH]));
      let kH = null;
      const mH = [],
        oH = tH.flatMap((HH => {
          var BH, LH;
          return null !== (BH = null === (LH = SH.e.find((BH => BH.id === HH))) || void 0 === LH ? void 0 : LH.actions) && void 0 !== BH ? BH : []
        }));
      for (const AH of oH) {
        if (AH === BH) continue;
        const HH = SH.w[AH];
        for (const BH of HH) bH.includes(BH) && mH.push(XH(SH.A[AH].translationKey, SH.A[AH].params))
      }
      mH.length > 0 && (kH = XH("controls:sharedBindingsWarning") + " ", kH += mH.join(", "));
      const IH = () => {
          uH(!1), PH(null), xH("controls:clickToEnterNewBinding"), VH(null)
        },
        fH = () => "BindingInput_" + BH;
      return (0, TH.jsxs)("div", {
        className: zH()("ControlRow", {
          WarningBorder: null !== kH
        }),
        children: [(0, TH.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, TH.jsxs)("div", {
            className: "ControlName",
            children: [XH(SH.A[BH].translationKey, SH.A[BH].params), EH && GH && (0, TH.jsx)(WH.d, {
              glyph: GH,
              className: "ControlPadGlyph"
            })]
          }), (0, TH.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, TH.jsxs)("div", {
              className: "ControlBindingsList",
              children: [bH.map((HH => (0, TH.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, TH.jsx)("div", {
                  children: (0, SH.p)(HH)
                }), (0, TH.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const AH = (0, SH.E)(BH, HH);
                    AH.isError() ? VH(AH.asError().message) : VH(null), LH()
                  },
                  children: "\xd7"
                })]
              }, HH))), !YH && (0, TH.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  uH(!0), VH(null)
                },
                children: (0, TH.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), YH && (0, TH.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, TH.jsxs)("div", {
                className: "InputContainer",
                children: [(0, TH.jsx)("div", {
                  className: "InputOverlay",
                  children: vH ? (0, SH.p)(vH) : (0, TH.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: XH(QH)
                  })
                }), (0, TH.jsx)("input", {
                  ref: OH,
                  id: fH(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: HH => {
                    if ("Escape" === HH.code) return IH(), HH.preventDefault(), void HH.stopPropagation();
                    const BH = HH.code;
                    hH.c.includes(BH) ? (VH(null), PH(BH)) : (VH("controls:keyIsReserved"), PH(null)), HH.preventDefault(), HH.stopPropagation()
                  },
                  onMouseDown: HH => {
                    const BH = "Mouse" + (HH.button + 1);
                    document.activeElement && document.activeElement.id === fH() ? hH.c.includes(BH) ? (VH(null), PH(BH)) : (VH("controls:keyIsReserved"), PH(null)) : xH("controls:enterNewBinding"), HH.stopPropagation()
                  },
                  onBlur: () => {
                    xH("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, TH.jsx)(CH.i, {
                onPointerDown: HH => {
                  HH.preventDefault()
                },
                onClick: () => {
                  (0, SH.b)(BH, vH), LH(), IH()
                },
                className: "ControlBindingAddButton",
                disabled: null === vH,
                children: XH("general:add")
              }), (0, TH.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  IH()
                },
                children: "\xd7"
              })]
            }), UH && (0, TH.jsx)("div", {
              className: "ControlBindingError",
              children: XH(UH)
            })]
          })]
        }), kH && (0, TH.jsx)("div", {
          className: "ControlRowWarning",
          children: kH
        })]
      })
    }
  },
  9584: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH
    });
    var AH = LH(45),
      rH = LH(1315),
      SH = LH(1225);
    const hH = (0, AH.forwardRef)((function(HH, BH) {
      let {
        icon: LH,
        title: AH,
        sub: hH,
        expanded: tH,
        onClick: zH
      } = HH;
      return (0, SH.jsxs)("button", {
        ref: BH,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": tH,
        onClick: zH,
        children: [(0, SH.jsx)(rH.c, {
          name: LH,
          className: "FeaturedSettingsEntryIcon"
        }), (0, SH.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, SH.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: AH
          }), (0, SH.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: hH
          })]
        }), (0, SH.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  9364: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => MH,
      h: () => WH,
      k: () => EH,
      o: () => xH,
      p: () => vH,
      s: () => GH
    });
    var AH = LH(1696),
      rH = LH(1797);
    const SH = HH => HH >= 56320 && HH <= 57343,
      hH = HH => HH >= 55296 && HH <= 56319,
      tH = (HH, BH) => BH >= 2 && SH(HH.charCodeAt(BH - 1)) && hH(HH.charCodeAt(BH - 2)) ? BH - 2 : Math.max(0, BH - 1),
      zH = (HH, BH) => {
        let LH;
        var AH, rH;
        return LH = HH.start !== HH.end ? BH < 0 ? HH.start : HH.end : BH < 0 ? tH(HH.value, HH.start) : (AH = HH.value, (rH = HH.start) + 1 < AH.length && hH(AH.charCodeAt(rH)) && SH(AH.charCodeAt(rH + 1)) ? rH + 2 : Math.min(AH.length, rH + 1)), {
          value: HH.value,
          start: LH,
          end: LH
        }
      },
      CH = ["text", "search", "url", "email", "tel", "password", "number"],
      EH = HH => !(!(0, rH.e)(HH) || HH.isContentEditable || HH.hasAttribute("data-pad-no-osk")) && (HH instanceof HTMLTextAreaElement || HH instanceof HTMLInputElement && CH.includes(HH.type)),
      XH = HH => null !== HH.selectionStart,
      GH = HH => {
        var BH, LH;
        const {
          value: AH
        } = HH;
        return {
          value: AH,
          start: null !== (BH = HH.selectionStart) && void 0 !== BH ? BH : AH.length,
          end: null !== (LH = HH.selectionEnd) && void 0 !== LH ? LH : AH.length
        }
      },
      YH = (HH, BH, LH) => {
        if (HH.readOnly) return;
        const rH = HH instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(rH, "value").set.call(HH, BH.value), XH(HH) && HH.setSelectionRange(BH.start, BH.end), (0, AH.h)(HH, new InputEvent("input", {
          bubbles: !0,
          inputType: LH
        }))
      };
    let uH = !1;
    const QH = (HH, BH) => !!document.execCommand(HH, !1, BH) || (uH || (uH = !0, console.warn(`execCommand("${HH}") failed; the on-screen keyboard is setting the value directly`)), !1),
      WH = (HH, BH) => {
        QH("insertText", BH) || YH(HH, function(HH, BH) {
          let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const AH = HH.value.slice(0, HH.start),
            rH = HH.value.slice(HH.end);
          let SH = LH < 0 ? BH.length : Math.max(0, LH - AH.length - rH.length);
          SH > 0 && SH < BH.length && hH(BH.charCodeAt(SH - 1)) && SH--;
          const tH = BH.slice(0, SH),
            zH = AH.length + tH.length;
          return {
            value: AH + tH + rH,
            start: zH,
            end: zH
          }
        }(GH(HH), BH, HH.maxLength), "insertText")
      },
      MH = HH => {
        QH("delete") || YH(HH, (HH => {
          const BH = HH.start === HH.end ? tH(HH.value, HH.start) : HH.start;
          return {
            value: HH.value.slice(0, BH) + HH.value.slice(HH.end),
            start: BH,
            end: BH
          }
        })(GH(HH)), "deleteContentBackward")
      },
      xH = (HH, BH) => {
        if (!XH(HH)) return;
        const LH = zH(GH(HH), BH);
        HH.setSelectionRange(LH.start, LH.end)
      },
      vH = HH => {
        XH(HH) && 0 === HH.selectionStart && 0 === HH.selectionEnd && HH.setSelectionRange(HH.value.length, HH.value.length)
      }
  },
  9537: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH
    });
    var AH = LH(15),
      rH = LH(2213),
      SH = LH(1352),
      hH = LH(1390);
    const tH = async () => {
      if ((0, hH.m)()) {
        if (!0 !== await SH.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== AH.c.get("gameState")) return
      }(0, rH.d)()
    }
  },
  9540: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => zH,
      i: () => SH,
      l: () => hH,
      n: () => rH,
      p: () => tH
    });
    var AH = LH(2043);
    const rH = "controllerPadShopOpen",
      SH = HH => AH.i.includes(HH),
      hH = HH => Object.values(HH).some((HH => !1 !== HH.canBuy && !HH.isRewardedAd)),
      tH = (HH, BH, LH) => {
        var AH, rH, hH, tH;
        const zH = HH.filter((HH => !SH(HH))),
          CH = null !== BH && HH.includes(BH) ? BH : null;
        return null !== CH && !SH(CH) && LH(CH) ? CH : null !== (AH = null !== (rH = null !== (hH = null !== (tH = zH.find(LH)) && void 0 !== tH ? tH : zH[0]) && void 0 !== hH ? hH : CH) && void 0 !== rH ? rH : HH[0]) && void 0 !== AH ? AH : null
      },
      zH = HH => HH.userInput || HH.isRewardedAd || "boolean" === typeof HH.isSelected ? null : JSON.stringify([HH.image, HH.cost, HH.currency, HH.amount, HH.customTitle, HH.buyButtonText, HH.description, HH.canBuy])
  },
  9561: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => CH,
      g: () => EH
    });
    var AH = LH(45),
      rH = LH(1450),
      SH = LH(2085),
      hH = LH(1405),
      tH = LH(1433),
      zH = LH(1225);
    const CH = () => {
        const HH = (0, hH.o)();
        if ((0, AH.useEffect)((() => {
            (0, hH.i)()
          }), []), !HH) return null;
        const {
          ControllerCategory: BH
        } = HH;
        return (0, zH.jsx)(tH.e, {
          children: (0, zH.jsx)(BH, {})
        })
      },
      EH = () => {
        var HH;
        const BH = (0, hH.o)(),
          [, LH] = (0, AH.useReducer)((HH => HH + 1), 0);
        return (0, rH.d)(SH.c, LH), null !== (HH = null === BH || void 0 === BH ? void 0 : BH.hasActivePad()) && void 0 !== HH && HH
      }
  },
  9356: (HH, BH, LH) => {
    LH.d(BH, {
      C: () => CH,
      G: () => kH,
      I: () => UH,
      K: () => VH,
      O: () => WH,
      S: () => zH,
      U: () => EH,
      c: () => MH,
      f: () => bH,
      h: () => TH,
      l: () => PH,
      n: () => uH,
      r: () => QH,
      t: () => GH,
      v: () => YH,
      z: () => OH
    });
    var AH = LH(18),
      rH = LH(1696),
      SH = LH(9361),
      hH = LH(9364),
      tH = LH(2548);
    const zH = HH => (0, hH.k)(HH),
      CH = HH => {
        const BH = HH.getBoundingClientRect();
        return {
          x: BH.left + BH.width / 2,
          y: BH.top + BH.height / 2
        }
      },
      EH = (HH, BH, LH) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: HH.x,
        clientY: HH.y,
        screenX: HH.x,
        screenY: HH.y,
        button: BH,
        buttons: LH,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      XH = (HH, BH) => {
        (0, rH.h)(HH, BH)
      },
      GH = function(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const AH = 0 === LH ? 1 : 2;
        XH(HH, new PointerEvent("pointerdown", EH(BH, LH, AH))), XH(HH, new MouseEvent("mousedown", EH(BH, LH, AH)))
      },
      YH = function(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        XH(HH, new PointerEvent("pointerup", EH(BH, LH, 0))), XH(HH, new MouseEvent("mouseup", EH(BH, LH, 0)))
      },
      uH = function(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        GH(HH, BH, LH), YH(HH, BH, LH), XH(HH, 0 === LH ? new MouseEvent("click", EH(BH, 0, 0)) : new MouseEvent("contextmenu", EH(BH, 2, 0)))
      },
      QH = function(HH, BH, LH) {
        let {
          leaveBelow: AH = null,
          enterBelow: rH = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (HH !== BH) {
          if (null !== HH && void 0 !== HH && HH.isConnected) {
            const rH = {
              ...EH(LH, 0, 0),
              relatedTarget: BH
            };
            XH(HH, new PointerEvent("pointerout", rH)), XH(HH, new MouseEvent("mouseout", rH));
            const SH = HH => !!BH && HH.contains(BH) || !!AH && HH.contains(AH);
            for (let BH = HH; BH && !SH(BH); BH = BH.parentElement) XH(BH, new PointerEvent("pointerleave", {
              ...rH,
              bubbles: !1
            })), XH(BH, new MouseEvent("mouseleave", {
              ...rH,
              bubbles: !1
            }))
          }
          if (BH) {
            const AH = {
              ...EH(LH, 0, 0),
              relatedTarget: HH
            };
            XH(BH, new PointerEvent("pointerover", AH)), XH(BH, new MouseEvent("mouseover", AH));
            const SH = [],
              hH = BH => !(null === HH || void 0 === HH || !HH.isConnected) && BH.contains(HH) || !!rH && BH.contains(rH);
            for (let HH = BH; HH && !hH(HH); HH = HH.parentElement) SH.push(HH);
            for (const HH of SH.reverse()) XH(HH, new PointerEvent("pointerenter", {
              ...AH,
              bubbles: !1
            })), XH(HH, new MouseEvent("mouseenter", {
              ...AH,
              bubbles: !1
            }));
            XH(BH, new PointerEvent("pointermove", EH(LH, 0, 0))), XH(BH, new MouseEvent("mousemove", EH(LH, 0, 0)))
          }
        } else BH && (XH(BH, new PointerEvent("pointermove", EH(LH, 0, 0))), XH(BH, new MouseEvent("mousemove", EH(LH, 0, 0))))
      },
      WH = HH => {
        AH.k.AX(SH.e, HH)
      },
      MH = HH => {
        if (zH(HH)) return void WH(HH);
        const BH = HH.hasAttribute("data-pad-focusable") ? HH.querySelector("a[href]") : null,
          LH = null !== BH && void 0 !== BH ? BH : HH;
        uH(LH, CH(LH))
      },
      xH = ".Dropdown-root.is-open",
      vH = HH => {
        const BH = HH.querySelector(".Dropdown-control");
        return MH(BH), BH
      },
      PH = HH => {
        var BH;
        const LH = null !== (BH = HH.closest(xH)) && void 0 !== BH ? BH : HH.querySelector(xH);
        return LH ? vH(LH) : null
      },
      TH = HH => {
        for (const BH of document.querySelectorAll(xH)) BH.contains(HH) || vH(BH)
      },
      UH = HH => null !== HH.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      VH = HH => {
        const BH = HH ? document.elementFromPoint(HH.x, HH.y) : null;
        return !(null === BH || void 0 === BH || !BH.closest("[data-pad-repeat]"))
      },
      OH = HH => {
        var BH;
        return null !== (BH = [...HH.querySelectorAll("[data-pad-back]")].find(tH.u)) && void 0 !== BH ? BH : null
      },
      bH = HH => {
        const BH = OH(HH);
        return !!BH && (MH(BH), !0)
      },
      kH = HH => {
        var BH, LH, AH, rH;
        return null !== (BH = null !== (LH = null !== (AH = HH.getAttribute("data-pad-key")) && void 0 !== AH ? AH : HH.getAttribute("href")) && void 0 !== LH ? LH : null === (rH = HH.querySelector("a[href]")) || void 0 === rH ? void 0 : rH.getAttribute("href")) && void 0 !== BH ? BH : null
      }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);