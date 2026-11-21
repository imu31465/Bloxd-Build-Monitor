export const id = 151;
export const ids = [151];
export const modules = {
  8638: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ
    });
    var LQ = wQ(17),
      qQ = wQ(1207),
      oQ = wQ(4837),
      DQ = wQ(1107);

    function kQ(QQ) {
      let {
        note: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, qQ.y)(), {
        clientEscMenuOptions: kQ
      } = (0, LQ.l)(["clientEscMenuOptions"]);
      return (0, DQ.jsx)(oQ.e, {
        label: wQ("touchSettings:actionButtons"),
        checked: kQ.touchActionButtons,
        onClick: QQ => {
          LQ.c.setClientEscMenuOptions({
            touchActionButtons: QQ
          })
        },
        circleInfoText: wQ("touchSettings:actionButtonsInfo"),
        note: FQ
      })
    }
  },
  8625: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => zw,
      f: () => Kw
    });
    var LQ = wQ(1207),
      qQ = wQ(53),
      oQ = wQ(1940),
      DQ = wQ(1951),
      kQ = wQ(1070),
      vQ = wQ.n(kQ),
      mQ = wQ(1451),
      uQ = wQ(17),
      HQ = wQ(96),
      bQ = wQ(114),
      YQ = wQ(4837),
      xQ = wQ(2345),
      AQ = wQ(291),
      tQ = wQ(1957),
      eQ = wQ(1964),
      MQ = wQ(8631),
      GQ = wQ(8638),
      pQ = wQ(307),
      cQ = wQ(1107);
    const CQ = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var SQ = wQ(8644);
    var iQ = wQ(1471),
      WQ = wQ(1362),
      RQ = wQ(1079),
      OQ = wQ(1407),
      sQ = wQ(2381);
    const rQ = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(sQ.E.map((QQ => [QQ, "menu"])))
      },
      IQ = QQ => sQ.A.filter((FQ => rQ[FQ] === QQ)),
      UQ = new Set(IQ("cluster")),
      NQ = ["cluster"],
      TQ = [...NQ, ...sQ.A.filter((QQ => !NQ.includes(QQ) && !rQ[QQ]))],
      KQ = TQ.flatMap((QQ => [QQ, ...IQ(QQ)])).map((QQ => ({
        id: QQ,
        label: `hudLayout:${QQ}`,
        ...sQ.x[QQ],
        parent: rQ[QQ]
      }))),
      zQ = Object.fromEntries(KQ.map((QQ => [QQ.id, QQ]))),
      lQ = "data-hud-el";

    function jQ(QQ, FQ, wQ, LQ) {
      const qQ = wQ(function(QQ, FQ) {
          return "attack" !== QQ || FQ ? zQ[QQ].label : "hudLayout:attackContext"
        }(QQ, FQ)),
        oQ = LQ[QQ];
      return oQ ? wQ("hudLayout:slotWithKey", {
        slot: qQ,
        key: oQ
      }) : qQ
    }

    function aQ(QQ, FQ, wQ, LQ) {
      return QQ.map((QQ => jQ(QQ, FQ, wQ, LQ))).join(", ")
    }

    function XQ(QQ) {
      let {
        className: FQ,
        keepPlace: wQ
      } = QQ;
      return wQ ? (0, cQ.jsx)("div", {
        className: vQ()(FQ, "Placeholder")
      }) : null
    }

    function fQ(QQ) {
      let {
        id: FQ,
        elements: wQ,
        actionButtons: qQ,
        keyNames: oQ,
        className: DQ,
        keepPlace: kQ,
        onHidden: vQ
      } = QQ;
      const {
        t: uQ
      } = (0, LQ.y)();
      if (!zQ[FQ].hide) return (0, cQ.jsx)(XQ, {
        className: DQ,
        keepPlace: kQ
      });
      const HQ = (0, sQ.t)(wQ, FQ);
      return (0, cQ.jsx)(mQ.L, {
        className: DQ,
        ariaLabel: uQ(HQ ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: jQ(FQ, qQ, uQ, oQ)
        }),
        pressed: !HQ,
        onClick: () => {
          vQ(FQ, !HQ)
        },
        children: (0, cQ.jsx)(RQ.c, {
          name: HQ ? "eye-slash" : "eye"
        })
      })
    }

    function VQ(QQ) {
      var FQ;
      let {
        id: wQ,
        elements: qQ,
        actionButtons: oQ,
        keyNames: DQ,
        className: kQ,
        keepPlace: vQ,
        onlyWhenMoved: uQ,
        locked: HQ,
        onReset: bQ
      } = QQ;
      const {
        t: YQ
      } = (0, LQ.y)(), xQ = zQ[wQ], AQ = (0, sQ.J)(null !== (FQ = qQ[wQ]) && void 0 !== FQ ? FQ : sQ.p);
      return !xQ.move && !xQ.scale || uQ && AQ ? (0, cQ.jsx)(XQ, {
        className: kQ,
        keepPlace: vQ
      }) : (0, cQ.jsx)(mQ.L, {
        className: kQ,
        disabled: AQ || HQ,
        ariaLabel: YQ("hudLayout:resetElement", {
          name: jQ(wQ, oQ, YQ, DQ)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: wQ
        },
        onClick: QQ => {
          uQ && nQ(QQ.currentTarget), bQ(wQ)
        },
        children: (0, cQ.jsx)(RQ.c, {
          name: "rotate-left"
        })
      })
    }

    function hQ(QQ) {
      let {
        id: FQ,
        actionButtons: wQ,
        keyNames: qQ,
        className: oQ,
        keepPlace: DQ,
        locked: kQ,
        lockable: vQ,
        onLocked: uQ
      } = QQ;
      const {
        t: HQ
      } = (0, LQ.y)();
      return vQ || kQ ? (0, cQ.jsx)(mQ.L, {
        className: oQ,
        ariaLabel: HQ(kQ ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: jQ(FQ, wQ, HQ, qQ)
        }),
        pressed: kQ,
        active: kQ,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${kQ?"unlock":"lock"}:${FQ}`
        },
        onClick: () => {
          uQ(FQ, !kQ)
        },
        children: (0, cQ.jsx)(RQ.c, {
          name: kQ ? "lock" : "lock-open"
        })
      }) : (0, cQ.jsx)(XQ, {
        className: oQ,
        keepPlace: DQ
      })
    }

    function JQ(QQ) {
      let {
        className: FQ,
        open: wQ,
        name: qQ,
        onToggle: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, LQ.y)();
      return (0, cQ.jsx)(mQ.L, {
        className: FQ,
        ariaLabel: DQ(wQ ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: qQ
        }),
        pressed: wQ,
        analyticsClick: {
          id: "hud_layout.children",
          value: wQ ? "close" : "open"
        },
        onClick: () => {
          oQ(!wQ)
        },
        children: (0, cQ.jsx)(RQ.c, {
          name: wQ ? "angle-up" : "angle-down"
        })
      })
    }

    function EQ(QQ, FQ) {
      var wQ;
      QQ.contains(document.activeElement) && FQ.focus({
        preventScroll: !0
      }), null === (wQ = (0, OQ.d)()) || void 0 === wQ || wQ.handOverPadFocus(QQ, FQ)
    }

    function nQ(QQ) {
      const FQ = QQ.closest("[data-hud-row]"),
        wQ = null === FQ || void 0 === FQ ? void 0 : FQ.querySelector(".HudElementRowName");
      return !(!FQ || !wQ) && (EQ(FQ, wQ), !0)
    }
    const gQ = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function PQ(QQ, FQ) {
      return "joystick" === QQ && !FQ
    }

    function ZQ() {
      const {
        t: QQ
      } = (0, LQ.y)();
      return (0, cQ.jsx)(mQ.L, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: QQ => {
          const FQ = QQ.currentTarget;
          if (!nQ(FQ)) {
            const QQ = function(QQ) {
              var FQ, wQ;
              const LQ = [QQ.previousElementSibling, QQ.nextElementSibling].find((QQ => QQ instanceof HTMLElement && QQ.matches(gQ)));
              return null !== (FQ = null !== LQ && void 0 !== LQ ? LQ : null === (wQ = QQ.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === wQ ? void 0 : wQ.querySelector(`:is(${gQ}):not(.HudFixJoystickButton)`)) && void 0 !== FQ ? FQ : null
            }(FQ);
            QQ && EQ(FQ, QQ)
          }
          uQ.c.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: QQ("hudLayout:fixJoystick")
      })
    }
    var yQ = wQ(71),
      BQ = wQ(1295),
      dQ = wQ(3002),
      QF = wQ(2657),
      FF = wQ(8651),
      wF = wQ(2389),
      LF = wQ(2407),
      qF = wQ(3037);
    const oF = ["J", "C", "A", "P", "U", "X", "G"],
      DF = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: sQ.E,
        pinnedIcon: null
      });

    function kF(QQ, FQ) {
      QQ.replaceChildren(...[...FQ.childNodes].map((QQ => QQ.cloneNode(!0))))
    }
    const vF = QQ => ({
      [lQ]: QQ
    });

    function mF(QQ) {
      let {
        id: FQ,
        slot: wQ,
        icon: LQ,
        label: oQ,
        hidden: DQ,
        className: kQ,
        face: mQ
      } = QQ;
      const uQ = (0, qQ.useRef)(null);
      return (0, qQ.useLayoutEffect)((() => {
        mQ && uQ.current && kF(uQ.current, mQ)
      }), [mQ]), (0, cQ.jsxs)("div", {
        className: vQ()("TouchKeyHit", `TouchSlot${wQ}`, kQ, {
          HudPreviewGhost: DQ.has(FQ)
        }),
        ...vF(FQ),
        children: [mQ && (0, cQ.jsx)("div", {
          ref: uQ,
          className: vQ()("TouchKey", {
            Labelled: mQ.classList.contains("Labelled")
          })
        }), !mQ && (0, cQ.jsxs)("div", {
          className: vQ()("TouchKey", {
            Labelled: void 0 !== oQ
          }),
          children: [LQ && (0, cQ.jsx)(RQ.c, {
            name: LQ
          }), void 0 !== oQ && (0, cQ.jsx)("span", {
            className: "TouchKeyLabel",
            children: oQ
          })]
        })]
      })
    }

    function uF(QQ) {
      let {
        item: FQ,
        selected: wQ
      } = QQ;
      const LQ = (0, qQ.useRef)(null);
      return (0, qQ.useLayoutEffect)((() => {
        LQ.current && kF(LQ.current, FQ)
      }), [FQ]), (0, cQ.jsx)("div", {
        ref: LQ,
        className: vQ()("InvenItem", {
          Selected: wQ
        })
      })
    }
    const HF = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      bF = QQ => void 0 === QQ ? {} : {
        style: {
          "--parked": QQ
        }
      };

    function YF(QQ) {
      let {
        id: FQ,
        hidden: wQ,
        parked: LQ,
        unslotted: qQ = !1
      } = QQ;
      return (0, cQ.jsx)("div", {
        className: vQ()("TopRightIcon", LF.p[FQ], {
          HudPreviewGhost: wQ.has(FQ),
          [wF.d]: void 0 !== LQ,
          [wF.e]: qQ
        }),
        ...bF(LQ),
        children: (0, cQ.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...vF(FQ),
          children: (0, cQ.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, cQ.jsx)(RQ.c, {
              name: HF[FQ]
            })
          })
        })
      })
    }

    function xF(QQ) {
      let {
        portraitPhone: FQ,
        icons: wQ,
        pinnedIcon: LQ,
        hidden: oQ,
        moved: DQ,
        trayState: kQ
      } = QQ;
      const mQ = FQ ? (0, wF.B)(wQ) : [],
        uQ = wQ.filter((QQ => "settings" === QQ)),
        HQ = wQ.filter((QQ => "settings" !== QQ && !mQ.includes(QQ))).reverse(),
        bQ = mQ.length > 0 && "gone" === kQ,
        YQ = [...uQ, ...bQ ? ["tray"] : [], ...HQ].filter((QQ => "tray" === QQ || oQ.has(QQ) && !DQ.has(QQ))),
        xQ = QQ => {
          const FQ = YQ.indexOf(QQ);
          return FQ < 0 ? void 0 : FQ
        },
        AQ = (QQ, FQ) => (0, cQ.jsx)(YF, {
          id: QQ,
          hidden: oQ,
          parked: FQ ? xQ(QQ) : void 0,
          unslotted: FQ && oQ.has(QQ) && DQ.has(QQ)
        }, QQ);
      return (0, cQ.jsxs)("div", {
        className: vQ()("TopRightIcons TouchInGame", {
          Column: FQ
        }),
        children: [uQ.map((QQ => AQ(QQ, !0))), mQ.length > 0 && (0, cQ.jsxs)("div", {
          className: vQ()("TopRightIcon TopRightTrayToggle Open", {
            [wF.d]: bQ
          }),
          ...bF(xQ("tray")),
          children: [(0, cQ.jsx)("div", {
            className: vQ()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== kQ
            }),
            children: (0, cQ.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, cQ.jsx)(RQ.c, {
                name: "ellipsis"
              })
            })
          }), (0, cQ.jsx)("div", {
            className: "TopRightTray",
            children: mQ.map((QQ => AQ(QQ, !1)))
          })]
        }), HQ.map((QQ => (0, cQ.jsxs)(qQ.Fragment, {
          children: ["perspective" === QQ && null !== LQ && (0, cQ.jsx)("div", {
            className: "TopRightIcon",
            children: (0, cQ.jsx)("div", {
              className: "UiItemIcon SmallTextBold",
              children: (0, cQ.jsx)("div", {
                className: "ScaleOnHover",
                children: (0, cQ.jsx)(RQ.c, {
                  name: LQ
                })
              })
            })
          }), AQ(QQ, !0)]
        }, QQ)))]
      })
    }

    function AF(QQ) {
      let {
        next: FQ,
        hidden: wQ
      } = QQ;
      return (0, cQ.jsx)("div", {
        className: vQ()("HotBarArrow", FQ ? "Next" : "Previous", {
          HudPreviewGhost: wQ
        }),
        ...vF("arrows"),
        children: (0, cQ.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, cQ.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, cQ.jsx)(RQ.c, {
              name: FQ ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function tF() {
      return (0, cQ.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, cQ.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, cQ.jsx)("div", {
            className: "SocialBar",
            children: (0, cQ.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, cQ.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, cQ.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, cQ.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, cQ.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, cQ.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, cQ.jsx)(RQ.c, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, cQ.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, cQ.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, cQ.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, cQ.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, cQ.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, cQ.jsx)(RQ.c, {
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
    const eF = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      MF = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      GF = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      pF = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function cF(QQ) {
      let {
        presence: FQ,
        portraitPhone: wQ,
        hidden: qQ,
        actionButtons: oQ,
        joystickFixed: DQ,
        keysAbove: kQ,
        auraBar: mQ,
        trayState: uQ,
        moved: bQ
      } = QQ;
      const {
        t: YQ
      } = (0, LQ.y)(), {
        faces: xQ,
        items: AQ
      } = FQ, tQ = QQ => ({
        HudPreviewGhost: qQ.has(QQ)
      });
      return (0, cQ.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, cQ.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, cQ.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, cQ.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, cQ.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, cQ.jsx)("div", {
              className: "InGameHeaderGameName",
              children: YQ("hudLayout:previewGameName")
            })]
          })
        }), (0, cQ.jsx)("div", {
          className: "TopLeftElements",
          children: (0, cQ.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, cQ.jsxs)("div", {
              className: "Chat",
              children: [(0, cQ.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [YQ("hudLayout:previewChatLine"), YQ("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), YQ("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((QQ => (0, cQ.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, cQ.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, cQ.jsx)("div", {
                      className: "IndividualText",
                      children: QQ
                    })
                  })
                }, QQ)))
              }), (0, cQ.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: vQ()("ChatIconWrapper SmallTextLight", tQ("chat")),
                ...vF("chat"),
                children: (0, cQ.jsx)(RQ.c, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, cQ.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, cQ.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, cQ.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, cQ.jsx)("div", {
                className: "TopRightIconsContainer",
                ...vF("menu"),
                children: (0, cQ.jsx)(xF, {
                  portraitPhone: wQ,
                  icons: FQ.rowIcons,
                  pinnedIcon: FQ.pinnedIcon,
                  hidden: qQ,
                  trayState: uQ,
                  moved: bQ
                })
              })
            }), HQ.featureFlags.useSocialFeatures && (0, cQ.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, cQ.jsx)(tF, {})
            })]
          })
        }), (0, cQ.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, cQ.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, cQ.jsxs)("div", {
            className: "TouchInteractKey",
            ...vF("interact"),
            children: [(0, cQ.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, cQ.jsx)(RQ.c, {
                name: "hand-back-point-up"
              })
            }), (0, cQ.jsx)("div", {
              children: YQ("hudLayout:previewInteract")
            })]
          })
        }), (0, cQ.jsx)("div", {
          className: "BottomCentre",
          children: (0, cQ.jsxs)("div", {
            className: "BottomElements",
            children: [(0, cQ.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, cQ.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, cQ.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...vF("hotbar"),
                children: (0, cQ.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, cQ.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, cQ.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, cQ.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, cQ.jsx)(RQ.c, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), mQ && (0, cQ.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, cQ.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, cQ.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, qF.f)("glint"),
                    alt: ""
                  }), (0, cQ.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, cQ.jsx)("div", {
                  className: "AuraBar",
                  children: (0, cQ.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, cQ.jsx)("div", {
                className: "HotBarRow",
                children: (0, cQ.jsx)("div", {
                  className: vQ()("HotBarContainer Touch", {
                    KeysAbove: kQ
                  }),
                  children: (0, cQ.jsxs)("div", {
                    className: "HotBar",
                    ...vF("hotbar"),
                    children: [(0, cQ.jsxs)("div", {
                      className: vQ()("TouchInventoryKeys", {
                        NoAuraBar: !mQ
                      }),
                      children: [(0, cQ.jsx)("div", {
                        className: vQ()("TouchInventoryKey ShopKey", tQ("inventory"), {
                          Hidden: !FQ.shop
                        }),
                        ...vF("inventory"),
                        children: (0, cQ.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, cQ.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, cQ.jsx)(RQ.c, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, cQ.jsx)("div", {
                        className: vQ()("TouchInventoryKey BagKey", tQ("inventory"), {
                          Hidden: !FQ.bag
                        }),
                        ...vF("inventory"),
                        children: (0, cQ.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, cQ.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, cQ.jsx)(RQ.c, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, cQ.jsx)(AF, {
                      next: !1,
                      hidden: qQ.has("arrows")
                    }), (0, cQ.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== AQ && AQ.map(((QQ, FQ) => (0, cQ.jsx)(uF, {
                        item: QQ,
                        selected: QQ.classList.contains("Selected")
                      }, FQ))), null === AQ && GF.map((QQ => {
                        const FQ = pF[QQ];
                        return (0, cQ.jsx)("div", {
                          className: vQ()("InvenItem", {
                            Selected: 0 === QQ
                          }),
                          children: FQ && (0, cQ.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, cQ.jsx)(RQ.c, {
                              name: FQ
                            })
                          })
                        }, QQ)
                      }))]
                    }), (0, cQ.jsx)(AF, {
                      next: !0,
                      hidden: qQ.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, cQ.jsx)("div", {
              className: "BottomRightElements",
              children: (0, cQ.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== xQ && oF.map((QQ => {
                  const FQ = xQ[QQ];
                  return FQ && (0, cQ.jsx)(mF, {
                    id: eF[QQ],
                    slot: QQ,
                    face: FQ,
                    className: MF[QQ],
                    hidden: qQ
                  }, QQ)
                })), null === xQ && (0, cQ.jsxs)(cQ.Fragment, {
                  children: [(0, cQ.jsx)(mF, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: qQ
                  }), (0, cQ.jsx)(mF, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: qQ
                  }), oQ && (0, cQ.jsxs)(cQ.Fragment, {
                    children: [(0, cQ.jsx)(mF, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: qQ
                    }), (0, cQ.jsx)(mF, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: qQ
                    })]
                  }), !oQ && (0, cQ.jsx)(mF, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: YQ("touchKeys:scope"),
                    hidden: qQ
                  }), (0, cQ.jsx)(mF, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: YQ("touchKeys:fly"),
                    hidden: qQ
                  }), (0, cQ.jsx)(mF, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: qQ
                  })]
                })]
              })
            })]
          })
        }), (0, cQ.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, cQ.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, cQ.jsxs)("div", {
              className: vQ()("Joystick Resting HudPreviewJoystick", {
                Floating: !DQ
              }),
              ...vF("joystick"),
              children: [(0, cQ.jsx)("div", {
                className: "JoystickBase"
              }), (0, cQ.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function CF() {
      const [QQ, FQ] = (0, qQ.useState)({}), wQ = (0, qQ.useCallback)((QQ => {
        FQ((FQ => [...new Set([...Object.keys(FQ), ...Object.keys(QQ)])].every((wQ => FQ[wQ] === QQ[wQ])) ? FQ : QQ))
      }), []);
      return [QQ, wQ]
    }
    const SF = .05;

    function iF(QQ) {
      var FQ;
      let {
        selected: wQ,
        layout: qQ,
        actionButtons: oQ,
        keyNames: DQ,
        overlaps: kQ,
        scaleCaps: uQ,
        joystickFixed: HQ,
        onScale: bQ,
        onHidden: YQ,
        onReset: xQ,
        locked: AQ,
        lockable: tQ,
        onLocked: eQ,
        extra: MQ
      } = QQ;
      const {
        t: GQ
      } = (0, LQ.y)(), pQ = wQ ? zQ[wQ] : null, CQ = null !== wQ && AQ.has(wQ), SQ = (wQ && qQ.hudElements[wQ] || sQ.p)[2], iQ = null !== (FQ = wQ && uQ[wQ]) && void 0 !== FQ ? FQ : sQ.g, WQ = QQ => {
        wQ && bQ(wQ, Math.min(iQ, Math.round(100 * (SQ + .1 * QQ)) / 100))
      };
      return (0, cQ.jsxs)(cQ.Fragment, {
        children: [(0, cQ.jsxs)("div", {
          className: vQ()("HudQuickName SmallTextBold", {
            Overlap: kQ.length > 0
          }),
          children: [kQ.length > 0 && (0, cQ.jsx)(RQ.c, {
            name: "triangle-exclamation"
          }), pQ ? jQ(pQ.id, oQ, GQ, DQ) : GQ("hudLayout:fullScreenHint"), kQ.length > 0 && (0, cQ.jsx)("span", {
            className: "HudQuickOverlap",
            children: GQ("hudLayout:overlapsShort", {
              names: aQ(kQ, oQ, GQ, DQ)
            })
          })]
        }), (null === pQ || void 0 === pQ ? void 0 : pQ.scale) && (0, cQ.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, cQ.jsx)(mQ.L, {
            disabled: CQ || SQ <= sQ.j,
            ariaLabel: GQ("hudLayout:smaller"),
            onClick: () => {
              WQ(-1)
            },
            children: (0, cQ.jsx)(RQ.c, {
              name: "minus"
            })
          }), (0, cQ.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*SQ)}%`
          }), (0, cQ.jsx)(mQ.L, {
            disabled: CQ || SQ >= iQ,
            ariaLabel: GQ("hudLayout:larger"),
            onClick: () => {
              WQ(1)
            },
            children: (0, cQ.jsx)(RQ.c, {
              name: "plus"
            })
          })]
        }), (pQ || MQ) && (0, cQ.jsxs)("div", {
          className: "HudQuickActions",
          children: [pQ && (0, cQ.jsxs)(cQ.Fragment, {
            children: [(0, cQ.jsx)(hQ, {
              id: pQ.id,
              actionButtons: oQ,
              keyNames: DQ,
              locked: CQ,
              lockable: tQ(pQ.id),
              onLocked: eQ
            }), (0, cQ.jsx)(fQ, {
              id: pQ.id,
              elements: qQ.hudElements,
              actionButtons: oQ,
              keyNames: DQ,
              onHidden: YQ
            }), (0, cQ.jsx)(VQ, {
              id: pQ.id,
              elements: qQ.hudElements,
              actionButtons: oQ,
              keyNames: DQ,
              locked: CQ,
              onReset: xQ
            }), PQ(pQ.id, HQ) && (0, cQ.jsx)(ZQ, {})]
          }), MQ]
        })]
      })
    }
    var WF = wQ(1130),
      RF = wQ(4261);
    const OF = "HudPreviewDoc",
      sF = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      rF = new Set([OF, ...Object.values(sF)]),
      IF = new Set(sQ.A.map(LF.F)),
      UF = new Set(LF.k),
      NF = 'style, link[rel="stylesheet"]';

    function TF(QQ, FQ, wQ, LQ) {
      const qQ = new Map,
        oQ = new Set,
        DQ = new URL(QQ.baseURI).origin,
        kQ = FQ => {
          var wQ;
          if ("LINK" !== FQ.nodeName) return !0;
          const LQ = null === (wQ = FQ.getAttribute("href")) || void 0 === wQ ? void 0 : wQ.trim();
          if (!LQ) return !1;
          try {
            return new URL(LQ, QQ.baseURI).origin === DQ
          } catch {
            return !1
          }
        };
      let vQ = null;
      const mQ = () => {
          vQ !== (0 === oQ.size) && (vQ = 0 === oQ.size, null === LQ || void 0 === LQ || LQ(vQ))
        },
        uQ = QQ => {
          const FQ = QQ.cloneNode(!0);
          if ("LINK" === FQ.tagName) {
            oQ.add(FQ);
            const QQ = () => {
              oQ.delete(FQ), mQ()
            };
            FQ.addEventListener("load", QQ), FQ.addEventListener("error", QQ), wQ && FQ.addEventListener("load", wQ)
          }
          return FQ
        },
        HQ = () => {
          const LQ = function(QQ) {
              const FQ = [...QQ.body.children].filter((QQ => QQ.matches(NF)));
              return [...QQ.head.querySelectorAll(NF), ...FQ]
            }(QQ).filter(kQ),
            DQ = new Set(LQ);
          for (const [QQ, FQ] of qQ) DQ.has(QQ) || (FQ.remove(), qQ.delete(QQ), oQ.delete(FQ));
          let vQ = null;
          for (let QQ = LQ.length - 1; QQ >= 0; QQ--) {
            const oQ = LQ[QQ];
            let DQ = qQ.get(oQ);
            DQ ? "STYLE" === oQ.tagName && DQ.textContent !== oQ.textContent && (DQ.textContent = oQ.textContent, null === wQ || void 0 === wQ || wQ()) : (DQ = uQ(oQ), qQ.set(oQ, DQ), FQ.head.insertBefore(DQ, vQ)), vQ = DQ
          }
          mQ()
        };
      HQ();
      const bQ = new MutationObserver(HQ);
      return bQ.observe(QQ.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), bQ.observe(QQ.body, {
        childList: !0
      }), () => {
        bQ.disconnect()
      }
    }

    function KF(QQ, FQ, wQ) {
      let {
        keysAbove: LQ
      } = wQ;
      const qQ = [...QQ.documentElement.classList].filter((QQ => !rF.has(QQ) && !UF.has(QQ))),
        oQ = [...FQ.documentElement.classList].filter((QQ => UF.has(QQ))),
        DQ = [OF, sF.hotbar, sF.hasShop, sF.hasBag];
      LQ && DQ.push(sF.keysAbove), FQ.documentElement.className = [...qQ, ...DQ, ...oQ].join(" ")
    }
    const zF = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function lF(QQ, FQ, wQ, LQ, qQ) {
      const oQ = (0, sQ.D)(wQ, LQ, "joystick"),
        DQ = (0, LF.G)((0, LF.S)(wQ, LQ, qQ), LQ),
        kQ = DQ.classes.filter((QQ => !IF.has(QQ))),
        vQ = FQ.documentElement;
      (0, LF.V)({
        ...DQ,
        classes: kQ
      }, {
        vars: vQ,
        safe: vQ,
        classes: vQ
      });
      const mQ = (0, LF.L)(wQ.hudLayouts[LQ].hudSafe, window.innerWidth, window.innerHeight, jF(), (0, LF.U)(FQ));
      vQ.style.setProperty("--preview-joystick-shift-left", `${mQ[3]}px`), vQ.style.setProperty("--preview-joystick-shift-bottom", `${mQ[2]}px`), vQ.style.setProperty("--preview-joystick-scale", String(oQ[2])), (0, RF.e)(vQ, FQ, wQ, LQ);
      for (const uQ of zF) vQ.style.setProperty(uQ, QQ.documentElement.style.getPropertyValue(uQ) || "0px")
    }

    function jF() {
      return (0, LF.R)(uQ.c.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function aF(QQ) {
      return (0, LF.x)(jF(), (0, LF.U)(QQ))
    }

    function XF(QQ, FQ, wQ) {
      const LQ = QQ.documentElement.style,
        qQ = (0, LF.N)(FQ),
        oQ = LQ.getPropertyValue(qQ);
      try {
        return wQ((QQ => {
          LQ.setProperty(qQ, String(QQ))
        }))
      } finally {
        "" === oQ ? LQ.removeProperty(qQ) : LQ.setProperty(qQ, oQ)
      }
    }

    function fF(QQ, FQ) {
      const [wQ, LQ] = XF(QQ, "hotbar", (FQ => {
        const wQ = wQ => {
          var LQ, qQ;
          return FQ(wQ), null !== (LQ = null === (qQ = QQ.querySelector(".HotBarGameItemsContainer")) || void 0 === qQ ? void 0 : qQ.getBoundingClientRect().width) && void 0 !== LQ ? LQ : 0
        };
        return [wQ(1), wQ(sQ.g)]
      }));
      return wQ <= 0 ? sQ.g : Math.min(sQ.g, Math.max(1, Math.floor(LQ / wQ / FQ + 1e-6) * FQ))
    }
    const VF = 3,
      hF = .5,
      JF = QQ => QQ.right - QQ.left;
    const EF = (QQ, FQ) => Math.abs((0, FF.e)(QQ).x - (0, FF.e)(FQ).x) + Math.abs((0, FF.e)(QQ).y - (0, FF.e)(FQ).y) + Math.abs(JF(QQ) - JF(FQ));

    function nF(QQ, FQ, wQ, LQ, qQ) {
      let {
        canKeep: oQ = () => !0,
        passes: DQ = VF,
        before: kQ,
        keysAboveOf: vQ
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const mQ = void 0 !== vQ && vQ(QQ) !== vQ(FQ),
        uQ = FQ.hudLayouts[wQ].hudLocked.filter((QQ => oQ(QQ) && !(mQ && "inventory" === QQ))),
        HQ = new Set(uQ);
      if (0 === HQ.size) return FQ;
      const bQ = [...UQ].filter((LQ => !uQ.includes(LQ) && (0, sQ.D)(QQ, wQ, LQ).join() === (0, sQ.D)(FQ, wQ, LQ).join())),
        YQ = QQ => {
          const FQ = (0, FF.E)(bQ.flatMap((FQ => QQ[FQ] ? [QQ[FQ]] : [])));
          return {
            ...QQ,
            cluster: null !== FQ && void 0 !== FQ ? FQ : void 0
          }
        },
        xQ = QQ => {
          const FQ = qQ(QQ);
          return FQ && YQ(FQ)
        },
        AQ = kQ ? YQ(kQ) : xQ(QQ);
      let tQ = AQ && xQ(FQ);
      if (!AQ || !tQ) return FQ;
      let eQ = FQ;
      for (let MQ = 0; MQ < DQ && HQ.size > 0; MQ++) {
        const QQ = new Map;
        for (const FQ of HQ) {
          const qQ = AQ[FQ],
            oQ = tQ[FQ],
            DQ = qQ && oQ ? gF(FQ, (0, sQ.D)(eQ, wQ, FQ), qQ, oQ, LQ) : null;
          DQ ? QQ.set(FQ, DQ) : HQ.delete(FQ)
        }
        if (0 === QQ.size) break;
        let qQ = eQ;
        for (const [FQ, LQ] of QQ) qQ = (0, sQ.ab)(qQ, wQ, FQ, LQ);
        const oQ = xQ(qQ);
        if (!oQ) return FQ;
        let DQ = eQ;
        for (const [FQ, LQ] of QQ) {
          const QQ = oQ[FQ];
          QQ && EF(AQ[FQ], QQ) < EF(AQ[FQ], tQ[FQ]) - hF ? DQ = (0, sQ.ab)(DQ, wQ, FQ, LQ) : HQ.delete(FQ)
        }
        if (DQ === eQ) break;
        const kQ = [...QQ.keys()].every((QQ => HQ.has(QQ)));
        if (eQ = DQ, tQ = kQ ? oQ : xQ(eQ), !tQ) return FQ
      }
      return qQ(eQ), eQ
    }

    function gF(QQ, FQ, wQ, LQ, qQ) {
      let [oQ, DQ, kQ] = FQ;
      const vQ = sQ.x[QQ],
        mQ = {};
      vQ.scale && JF(LQ) > 0 && Math.abs(JF(wQ) - JF(LQ)) > hF && (mQ.scale = Math.max(sQ.j, Math.min(sQ.g, kQ * JF(wQ) / JF(LQ))));
      const uQ = (0, FF.e)(wQ).x - (0, FF.e)(LQ).x,
        HQ = (0, FF.e)(wQ).y - (0, FF.e)(LQ).y;
      return vQ.move && (Math.abs(uQ) > hF || Math.abs(HQ) > hF) && (mQ.dx = oQ + uQ / qQ.width, mQ.dy = DQ + HQ / qQ.height), void 0 === mQ.scale && void 0 === mQ.dx ? null : mQ
    }
    let PF = 0;

    function ZF() {
      return PF > 0
    }
    const yF = QQ => 0 === QQ.dx && 0 === QQ.dy,
      BF = .001,
      dF = QQ => Math.abs(QQ.dx) >= 5e-4 || Math.abs(QQ.dy) >= 5e-4 ? QQ : {
        dx: QQ.dx,
        dy: QQ.dy < 0 ? -.001 : BF
      };

    function Qw(QQ) {
      let {
        preview: FQ,
        stageRef: wQ,
        ringRef: LQ,
        centreLineRef: oQ,
        snapCentre: DQ,
        ready: kQ,
        measure: vQ,
        k: mQ,
        viewport: uQ,
        boxes: HQ,
        pieces: bQ,
        selected: YQ,
        insets: xQ,
        layout: AQ,
        canMove: tQ,
        onSelect: eQ,
        onMove: MQ
      } = QQ;
      const GQ = (0, qQ.useRef)(null),
        pQ = (0, qQ.useCallback)((() => null !== GQ.current), []),
        cQ = (QQ, FQ) => {
          if (!FQ) return null;
          const wQ = (0, FF.e)(QQ.origin),
            LQ = (0, FF.e)(FQ),
            qQ = (QQ.to.dx - QQ.from.dx) * uQ.width,
            oQ = (QQ.to.dy - QQ.from.dy) * uQ.height,
            DQ = FQ.right - FQ.left,
            kQ = FQ.bottom - FQ.top;
          return {
            skew: {
              x: LQ.x - wQ.x - qQ,
              y: LQ.y - wQ.y - oQ
            },
            box: {
              left: wQ.x - DQ / 2,
              top: wQ.y - kQ / 2,
              right: wQ.x + DQ / 2,
              bottom: wQ.y + kQ / 2
            }
          }
        },
        CQ = (QQ, wQ) => {
          var qQ;
          const DQ = GQ.current;
          if (!DQ || DQ.pointerId !== QQ.pointerId) return;
          GQ.current = null, null === (qQ = oQ.current) || void 0 === qQ || qQ.classList.remove("Shown", "Snapped");
          const kQ = LQ.current;
          if (kQ && null !== DQ.ringStyle && kQ.setAttribute("style", DQ.ringStyle), wQ && DQ.moved) {
            const QQ = yF(DQ.to) ? null : vQ(DQ.id),
              FQ = QQ ? (0, FF.C)(QQ, (0, FF.A)(uQ.width, uQ.height, xQ)) : {
                x: 0,
                y: 0
              },
              wQ = {
                dx: DQ.to.dx + FQ.x / uQ.width,
                dy: DQ.to.dy + FQ.y / uQ.height
              },
              LQ = yF(DQ.to) ? wQ : dF(wQ);
            MQ(DQ.id, LQ.dx, LQ.dy)
          } else FQ(DQ.id, null), wQ && DQ.tapPick && eQ(DQ.tapPick)
        };
      return {
        busy: pQ,
        handlers: {
          onPointerDown: QQ => {
            var FQ;
            if (!kQ || GQ.current || !QQ.target.closest(".HudPreviewHandle")) return;
            const LQ = wQ.current.getBoundingClientRect(),
              qQ = {
                x: (QQ.clientX - LQ.left) / mQ,
                y: (QQ.clientY - LQ.top) / mQ
              },
              oQ = (0, FF.x)(qQ, bQ, 40 / mQ),
              DQ = "cluster" === YQ && void 0 !== HQ.cluster && null !== (0, FF.x)(qQ, [{
                id: "cluster",
                box: HQ.cluster
              }], 40 / mQ),
              vQ = "menu" === YQ && void 0 !== HQ.menu && (0, FF.i)(HQ.menu, qQ) && ("menu" === oQ || null !== oQ && (0, wF.w)(oQ, AQ.hudElements[oQ])),
              uQ = DQ ? "cluster" : vQ ? "menu" : null,
              xQ = null !== uQ,
              MQ = null !== uQ && void 0 !== uQ ? uQ : oQ;
            if (!MQ) return;
            if (function(QQ) {
                PF++;
                const FQ = wQ => {
                  wQ.pointerId === QQ && (PF = Math.max(0, PF - 1), window.removeEventListener("pointerup", FQ, !0), window.removeEventListener("pointercancel", FQ, !0))
                };
                window.addEventListener("pointerup", FQ, !0), window.addEventListener("pointercancel", FQ, !0)
              }(QQ.pointerId), !tQ(MQ)) return void eQ(xQ && oQ ? oQ : MQ);
            eQ(MQ);
            const [pQ, cQ] = null !== (FQ = AQ.hudElements[MQ]) && void 0 !== FQ ? FQ : [0, 0], CQ = {
              dx: pQ,
              dy: cQ
            }, SQ = {
              skew: {
                x: 0,
                y: 0
              },
              box: HQ[MQ]
            };
            GQ.current = {
              id: MQ,
              pointerId: QQ.pointerId,
              startX: QQ.clientX,
              startY: QQ.clientY,
              origin: HQ[MQ],
              from: CQ,
              to: CQ,
              moved: !1,
              home: yF(CQ) ? {
                centre: (0, FF.e)(HQ[MQ]),
                anchor: SQ
              } : null,
              away: yF(CQ) ? null : SQ,
              anchor: SQ,
              ringStyle: null,
              tapPick: xQ ? oQ : null
            }, QQ.currentTarget.setPointerCapture(QQ.pointerId)
          },
          onPointerMove: QQ => {
            const wQ = GQ.current;
            if (!wQ || wQ.pointerId !== QQ.pointerId) return;
            const qQ = QQ.clientX - wQ.startX,
              kQ = QQ.clientY - wQ.startY;
            if (!wQ.moved && Math.hypot(qQ, kQ) < 5) return;
            const HQ = !wQ.moved;
            var bQ, YQ;
            (wQ.moved = !0, HQ) && (wQ.ringStyle = null !== (bQ = null === (YQ = LQ.current) || void 0 === YQ ? void 0 : YQ.getAttribute("style")) && void 0 !== bQ ? bQ : null);
            const AQ = (0, FF.A)(uQ.width, uQ.height, xQ);
            if (!wQ.home) {
              var tQ;
              wQ.to = {
                dx: 0,
                dy: 0
              }, FQ(wQ.id, wQ.to);
              const QQ = vQ(wQ.id),
                LQ = null !== (tQ = cQ(wQ, QQ)) && void 0 !== tQ ? tQ : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: wQ.origin
                },
                qQ = (0, FF.e)(wQ.origin);
              wQ.home = {
                centre: QQ ? (0, FF.e)(QQ) : {
                  x: qQ.x - wQ.from.dx * uQ.width,
                  y: qQ.y - wQ.from.dy * uQ.height
                },
                anchor: LQ
              }
            }
            const eQ = wQ.home;
            let MQ = !1;
            const pQ = QQ => {
                MQ = !1;
                let LQ = (0, FF.o)(QQ.box, qQ / mQ, kQ / mQ, AQ);
                const oQ = uQ.width / 2;
                if (DQ && Math.abs((0, FF.e)(wQ.origin).x + LQ.x - oQ) <= 8 / mQ) {
                  const FQ = oQ - (0, FF.e)(wQ.origin).x,
                    qQ = (0, FF.o)(QQ.box, FQ, LQ.y, AQ);
                  MQ = Math.abs(qQ.x - FQ) < .01, MQ && (LQ = qQ)
                }
                const vQ = (0, FF.u)(wQ.from, LQ.x - QQ.skew.x, LQ.y - QQ.skew.y, uQ.width, uQ.height);
                wQ.to = dF(vQ), wQ.anchor = QQ, FQ(wQ.id, wQ.to)
              },
              CQ = (0, FF.o)(eQ.anchor.box, qQ / mQ, kQ / mQ, AQ),
              SQ = oQ.current,
              iQ = (0, FF.e)(wQ.origin),
              WQ = ((0, sQ.L)(wQ.id) ? 20 : 6) / mQ;
            if (Math.abs(iQ.x + CQ.x - eQ.centre.x) <= WQ && Math.abs(iQ.y + CQ.y - eQ.centre.y) <= WQ) wQ.to = {
              dx: 0,
              dy: 0
            }, wQ.anchor = eQ.anchor, MQ = DQ && Math.abs(eQ.centre.x - uQ.width / 2) < 1, FQ(wQ.id, wQ.to);
            else if (wQ.away) pQ(wQ.away);
            else {
              var RQ;
              pQ(eQ.anchor), wQ.away = null !== (RQ = cQ(wQ, vQ(wQ.id))) && void 0 !== RQ ? RQ : eQ.anchor, pQ(wQ.away)
            }
            null === SQ || void 0 === SQ || SQ.classList.add("Shown"), null === SQ || void 0 === SQ || SQ.classList.toggle("Snapped", MQ), (QQ => {
              const FQ = LQ.current;
              if (FQ) {
                const {
                  skew: wQ,
                  box: LQ
                } = QQ.anchor;
                FQ.style.left = LQ.left * mQ + "px", FQ.style.top = LQ.top * mQ + "px", FQ.style.width = (LQ.right - LQ.left) * mQ + "px", FQ.style.height = (LQ.bottom - LQ.top) * mQ + "px", FQ.style.translate = `${((QQ.to.dx-QQ.from.dx)*uQ.width+wQ.x)*mQ}px ${((QQ.to.dy-QQ.from.dy)*uQ.height+wQ.y)*mQ}px`
              }
            })(wQ)
          },
          onPointerUp: QQ => {
            CQ(QQ, !0)
          },
          onPointerCancel: QQ => {
            CQ(QQ, !1)
          }
        }
      }
    }

    function Fw(QQ, FQ) {
      return Object.keys(QQ).filter((QQ => QQ !== FQ)).map((FQ => QQ[FQ]))
    }

    function ww(QQ) {
      const FQ = [],
        wQ = FQ => (0, sQ.L)(FQ) && !QQ.documentElement.classList.contains((0, LF.I)(FQ));
      for (const DQ of QQ.querySelectorAll(`[${lQ}]`)) {
        const QQ = wQ(DQ.getAttribute(lQ)) ? DQ.querySelector(".ScaleOnHover") : null,
          LQ = (null !== QQ && void 0 !== QQ ? QQ : DQ).getBoundingClientRect();
        (LQ.width > 0 || LQ.height > 0) && FQ.push({
          id: DQ.getAttribute(lQ),
          box: {
            left: LQ.left,
            top: LQ.top,
            right: LQ.right,
            bottom: LQ.bottom
          }
        })
      }
      const LQ = QQ => (0, FF.E)(FQ.filter((FQ => {
          let {
            id: wQ
          } = FQ;
          return QQ(wQ)
        })).map((QQ => {
          let {
            box: FQ
          } = QQ;
          return FQ
        }))),
        qQ = {};
      for (const DQ of new Set(FQ.map((QQ => QQ.id)))) qQ[DQ] = LQ((QQ => QQ === DQ));
      const oQ = LQ((QQ => UQ.has(QQ)));
      return oQ && (qQ.cluster = oQ), {
        boxes: qQ,
        pieces: FQ
      }
    }

    function Lw(QQ, FQ, wQ) {
      const LQ = FQ.right - FQ.left,
        qQ = FQ.bottom - FQ.top;
      return XF(QQ, "cluster", (FQ => {
        const oQ = wQ => {
            FQ(wQ);
            const LQ = [...QQ.querySelectorAll(`[${lQ}]:not(.HudPreviewGhost)`)].filter((QQ => UQ.has(QQ.getAttribute(lQ)))).map((QQ => {
                const FQ = QQ.getBoundingClientRect();
                return {
                  left: FQ.left,
                  top: FQ.top,
                  right: FQ.right,
                  bottom: FQ.bottom
                }
              })),
              qQ = (0, FF.E)(LQ);
            return qQ ? {
              w: qQ.right - qQ.left,
              h: qQ.bottom - qQ.top
            } : null
          },
          DQ = QQ => !QQ || QQ.w <= LQ && QQ.h <= qQ,
          kQ = oQ(1),
          vQ = oQ(sQ.g);
        if (!kQ || DQ(vQ)) return sQ.g;
        const mQ = (QQ, FQ, wQ) => FQ > QQ ? 1 + (wQ - QQ) * (sQ.g - 1) / (FQ - QQ) : sQ.g;
        let uQ = Math.floor(Math.min(sQ.g, mQ(kQ.w, vQ.w, LQ), mQ(kQ.h, vQ.h, qQ)) / wQ + 1e-6) * wQ;
        for (; uQ > 1 && !DQ(oQ(uQ));) uQ = Math.round(100 * (uQ - wQ)) / 100;
        return Math.max(1, uQ)
      }))
    }

    function qw(QQ) {
      KF(document, QQ, {
        keysAbove: !1
      });
      const FQ = parseFloat(getComputedStyle(QQ.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        wQ = Number.isFinite(FQ) && FQ < 0;
      return KF(document, QQ, {
        keysAbove: wQ
      }), wQ
    }

    function ow(QQ, FQ) {
      let {
        layout: wQ,
        orientation: LQ,
        viewport: oQ,
        replicaKey: DQ,
        joystickFixed: kQ,
        busy: vQ
      } = FQ;
      const [mQ, uQ] = (0, qQ.useState)(null), [HQ, bQ] = (0, qQ.useState)({
        boxes: {},
        pieces: []
      }), [YQ, xQ] = (0, qQ.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [AQ, tQ] = (0, qQ.useState)(!1), [eQ, MQ] = (0, qQ.useState)(!1), [GQ, pQ] = (0, qQ.useState)(!1), cQ = (0, qQ.useCallback)((QQ => {
        MQ(QQ), QQ && pQ(!0)
      }), []), CQ = wQ.hudLayouts[LQ].hudSafe;
      (0, qQ.useLayoutEffect)((() => {
        const FQ = QQ.current.contentDocument;
        FQ.open(), FQ.write("<!DOCTYPE html><html><head></head><body></body></html>"), FQ.close(), uQ(FQ)
      }), [QQ]);
      const SQ = (0, qQ.useCallback)((() => {
          mQ && ((0, wF.y)(mQ), bQ(ww(mQ)), xQ(function(QQ, FQ) {
            const wQ = aF(QQ),
              [LQ, qQ, oQ, DQ] = FQ ? (0, LF.B)(FQ, window.innerWidth, window.innerHeight, wQ) : wQ;
            return {
              top: LQ,
              right: qQ,
              bottom: oQ,
              left: DQ
            }
          }(mQ, CQ)))
        }), [mQ, CQ]),
        iQ = (0, qQ.useCallback)((() => {
          mQ && tQ(qw(mQ))
        }), [mQ]),
        WQ = (0, qQ.useRef)((() => {}));
      return WQ.current = () => {
        iQ(), vQ() || SQ()
      }, (0, qQ.useLayoutEffect)((() => {
        if (mQ) return TF(document, mQ, (() => {
          WQ.current()
        }), cQ)
      }), [mQ, cQ]), (0, qQ.useLayoutEffect)(iQ, [iQ, oQ]), (0, qQ.useLayoutEffect)((() => {
        mQ && (KF(document, mQ, {
          keysAbove: AQ
        }), lF(document, mQ, wQ, LQ, kQ), iQ(), SQ())
      }), [mQ, wQ, LQ, AQ, DQ, kQ, oQ, SQ, iQ]), (0, qQ.useEffect)((() => {
        var QQ;
        if (!mQ) return;
        const FQ = new ResizeObserver((() => {
          vQ() || SQ()
        }));
        for (const wQ of mQ.querySelectorAll(`[${lQ}]`)) FQ.observe(wQ);
        return null === (QQ = mQ.fonts) || void 0 === QQ || QQ.ready.then(SQ), () => {
          FQ.disconnect()
        }
      }), [mQ, SQ, vQ, DQ]), {
        doc: mQ,
        boxes: HQ.boxes,
        pieces: HQ.pieces,
        insets: YQ,
        keysAbove: AQ,
        ready: eQ,
        settled: GQ
      }
    }
    const Dw = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      kw = (QQ, FQ, wQ) => {
        const LQ = QQ => (0, wF.w)(QQ, wQ.hudElements[QQ]);
        return "cluster" === QQ && UQ.has(FQ) || "cluster" === FQ && UQ.has(QQ) || "menu" === QQ && LQ(FQ) || "menu" === FQ && LQ(QQ) || Dw.some((LQ => {
          let [qQ, oQ] = LQ;
          const DQ = wQ.hudElements.hotbar,
            kQ = "inventory" === oQ && wQ.hudLocked.includes(oQ) && void 0 !== DQ && !(0, sQ.J)(DQ);
          return (QQ === qQ && FQ === oQ || QQ === oQ && FQ === qQ) && !kQ
        }))
      };
    const vw = ["Above", "Below", "Left", "Right"];

    function mw(QQ, FQ, wQ, LQ, qQ) {
      const oQ = wQ[QQ],
        DQ = (oQ.left + oQ.right) / 2,
        kQ = (oQ.top + oQ.bottom) / 2,
        vQ = (7.5 * FQ.length + 14) / LQ,
        mQ = 18 / LQ,
        uQ = {
          Above: {
            left: DQ - vQ / 2,
            top: oQ.top - mQ,
            right: DQ + vQ / 2,
            bottom: oQ.top
          },
          Below: {
            left: DQ - vQ / 2,
            top: oQ.bottom,
            right: DQ + vQ / 2,
            bottom: oQ.bottom + mQ
          },
          Left: {
            left: oQ.left - vQ,
            top: kQ - mQ / 2,
            right: oQ.left,
            bottom: kQ + mQ / 2
          },
          Right: {
            left: oQ.right,
            top: kQ - mQ / 2,
            right: oQ.right + vQ,
            bottom: kQ + mQ / 2
          }
        },
        HQ = Fw(wQ, QQ),
        bQ = {
          left: 0,
          top: 0,
          right: qQ.width,
          bottom: qQ.height
        };
      return vw[(0, FF.s)(vw.map((QQ => uQ[QQ])), HQ, {
        bounds: bQ
      })]
    }

    function uw() {
      const [QQ, FQ] = (0, dQ.b)();
      return (0, qQ.useMemo)((() => ({
        width: QQ,
        height: FQ
      })), [QQ, FQ])
    }

    function Hw(QQ) {
      var FQ;
      const {
        layout: wQ,
        orientation: oQ,
        selected: DQ,
        onSelect: kQ,
        onMove: mQ,
        canMove: uQ,
        actionButtons: HQ,
        joystickFixed: bQ,
        presence: YQ,
        keyNames: AQ,
        maxHeight: tQ,
        fill: eQ = !1,
        apiRef: MQ
      } = QQ, {
        t: GQ
      } = (0, LQ.y)(), pQ = uw(), CQ = (null !== (FQ = (0, xQ.l)("maxAuraLevel")) && void 0 !== FQ ? FQ : 0) > 0, SQ = wQ.hudLayouts[oQ], iQ = (0, qQ.useRef)(null), WQ = (0, qQ.useRef)(null), OQ = (0, qQ.useRef)(null), rQ = (0, qQ.useRef)(null), IQ = (0, qQ.useRef)(null), NQ = (0, qQ.useRef)(null), TQ = (0, QF.c)(iQ).width, KQ = eQ ? 1 : TQ > 0 ? (0, FF.z)(TQ, pQ.width, pQ.height, tQ) : 0, zQ = (0, qQ.useRef)((() => !1)), lQ = (0, qQ.useCallback)((() => zQ.current()), []), {
        doc: aQ,
        boxes: XQ,
        pieces: fQ,
        insets: VQ,
        keysAbove: hQ,
        ready: JQ,
        settled: EQ
      } = ow(OQ, {
        layout: wQ,
        orientation: oQ,
        viewport: pQ,
        replicaKey: `${HQ}:${bQ}:${CQ}`,
        joystickFixed: bQ,
        busy: lQ
      }), nQ = (0, qQ.useCallback)((QQ => {
        aQ && lF(document, aQ, QQ, oQ, bQ)
      }), [aQ, oQ, bQ]), gQ = (0, qQ.useCallback)((QQ => aQ && EQ ? (nQ(QQ), qw(aQ), function(QQ) {
        let {
          boxes: FQ,
          pieces: wQ
        } = QQ;
        const LQ = wQ.find((QQ => "inventory" === QQ.id));
        if (!LQ || !FQ.inventory) return FQ;
        const qQ = (0, FF.e)(FQ.inventory),
          oQ = JF(LQ.box) / 2,
          DQ = (LQ.box.bottom - LQ.box.top) / 2;
        return {
          ...FQ,
          inventory: {
            left: qQ.x - oQ,
            top: qQ.y - DQ,
            right: qQ.x + oQ,
            bottom: qQ.y + DQ
          }
        }
      }(ww(aQ))) : null), [aQ, EQ, nQ]), PQ = (0, qQ.useCallback)((QQ => !!aQ && (nQ(QQ), qw(aQ))), [aQ, nQ]), ZQ = (0, qQ.useRef)(null), BQ = (0, qQ.useRef)(null), dQ = (0, qQ.useRef)(wQ);
      dQ.current = wQ;
      const qF = (0, qQ.useCallback)((() => {
        null !== ZQ.current && (cancelAnimationFrame(ZQ.current), ZQ.current = null)
      }), []);
      (0, qQ.useEffect)((() => qF), [wQ, qF]);
      const {
        lockable: oF
      } = QQ, DF = (0, qQ.useCallback)((QQ => {
        if (nQ(QQ), !EQ || 0 === wQ.hudLayouts[oQ].hudLocked.length) return;
        const FQ = wQ;
        qF(), ZQ.current = requestAnimationFrame((() => {
          var wQ;
          if (ZQ.current = null, dQ.current !== FQ) return;
          const LQ = (null === (wQ = BQ.current) || void 0 === wQ ? void 0 : wQ.from) === FQ ? BQ.current.boxes : gQ(FQ);
          LQ && (BQ.current = {
            from: FQ,
            boxes: LQ
          }), nQ(LQ ? nF(FQ, QQ, oQ, pQ, gQ, {
            canKeep: oF,
            passes: 1,
            before: LQ,
            keysAboveOf: PQ
          }) : QQ)
        }))
      }), [nQ, EQ, wQ, oQ, pQ, gQ, PQ, oF, qF]), kF = Qw({
        preview: (QQ, FQ) => {
          FQ ? DF((0, sQ.ab)(wQ, oQ, QQ, FQ)) : (qF(), nQ(wQ))
        },
        stageRef: WQ,
        ringRef: rQ,
        centreLineRef: IQ,
        snapCentre: wQ.hudSnapCentre,
        ready: EQ,
        measure: QQ => {
          var FQ;
          return aQ && JQ && null !== (FQ = ww(aQ).boxes[QQ]) && void 0 !== FQ ? FQ : null
        },
        k: KQ,
        viewport: pQ,
        boxes: XQ,
        pieces: fQ,
        selected: DQ,
        insets: VQ,
        layout: SQ,
        canMove: uQ,
        onSelect: kQ,
        onMove: (QQ, FQ, wQ) => {
          qF(), mQ(QQ, FQ, wQ)
        }
      });
      (0, qQ.useLayoutEffect)((() => {
        zQ.current = kF.busy
      }), [kF.busy]);
      const vF = (0, qQ.useRef)([]),
        mF = (0, qQ.useRef)(SQ.hudElements);
      (0, qQ.useEffect)((() => {
        for (const qQ of Object.keys(SQ.hudElements)) {
          var QQ, FQ, wQ, LQ;
          (null !== (QQ = null === (FQ = SQ.hudElements[qQ]) || void 0 === FQ ? void 0 : FQ[2]) && void 0 !== QQ ? QQ : 1) > (null !== (wQ = null === (LQ = mF.current[qQ]) || void 0 === LQ ? void 0 : LQ[2]) && void 0 !== wQ ? wQ : 1) && uQ(qQ) && !(0, wF.w)(qQ, SQ.hudElements[qQ]) && vF.current.push(qQ)
        }
        mF.current = SQ.hudElements
      }), [SQ.hudElements, uQ]), (0, qQ.useEffect)((() => {
        if (!JQ) return;
        const QQ = vF.current.shift(),
          FQ = QQ && XQ[QQ];
        if (!QQ || !FQ || kF.busy()) return;
        const wQ = (0, FF.C)(FQ, (0, FF.A)(pQ.width, pQ.height, VQ));
        if (0 !== wQ.x || 0 !== wQ.y) {
          var LQ;
          const [FQ, qQ] = null !== (LQ = SQ.hudElements[QQ]) && void 0 !== LQ ? LQ : [0, 0];
          mQ(QQ, FQ + wQ.x / pQ.width, qQ + wQ.y / pQ.height)
        }
      }), [XQ, JQ]), (0, qQ.useImperativeHandle)(MQ, (() => ({
        setScale: (QQ, FQ) => {
          DF((0, sQ.ab)(wQ, oQ, QQ, {
            scale: FQ
          }))
        },
        setOpacity: QQ => {
          nQ({
            ...wQ,
            hudKeyOpacity: QQ
          })
        },
        keepLocks: (QQ, FQ) => (qF(), nF(QQ, FQ, oQ, pQ, gQ, {
          canKeep: oF,
          keysAboveOf: PQ
        })),
        setSafe: QQ => {
          DF((0, sQ.fb)(wQ, oQ, QQ)), NQ.current && (NQ.current.style.inset = (0, LF.B)(QQ, pQ.width, pQ.height, aF(null !== aQ && void 0 !== aQ ? aQ : document)).map((QQ => QQ * KQ + "px")).join(" "))
        }
      })), [nQ, DF, gQ, PQ, qF, oF, aQ, wQ, oQ, pQ, KQ]);
      const uF = new Set(Object.keys(SQ.hudElements).filter((QQ => (0, sQ.t)(SQ.hudElements, QQ)))),
        HF = DQ ? XQ[DQ] : void 0,
        bF = DQ ? jQ(DQ, HQ, GQ, AQ) : "",
        YF = (0, WF.h)(pQ.width, pQ.height),
        xF = DQ ? function(QQ, FQ, wQ, LQ) {
          const qQ = QQ => (0, sQ.t)(wQ.hudElements, QQ) || (0, wF.u)(QQ, wQ, LQ);
          if (qQ(QQ)) return [];
          const oQ = FQ.filter((FQ => {
              let {
                id: wQ
              } = FQ;
              return "cluster" === QQ ? UQ.has(wQ) : wQ === QQ
            })),
            DQ = new Set;
          for (const kQ of FQ) kQ.id === QQ || DQ.has(kQ.id) || kw(QQ, kQ.id, wQ) || qQ(kQ.id) || void 0 === wQ.hudElements[QQ] && void 0 === wQ.hudElements[kQ.id] || oQ.some((QQ => {
            let {
              id: FQ,
              box: wQ
            } = QQ;
            return FQ !== kQ.id && (0, FF.l)(wQ, kQ.box, 2)
          })) && DQ.add(kQ.id);
          return [...DQ]
        }(DQ, fQ, SQ, YF) : [],
        AF = new Set((0, wF.q)(SQ.hudElements)),
        tF = (0, wF.E)(SQ, (0, wF.B)(YQ.rowIcons)).state,
        eF = xF.join(),
        MF = (0, qQ.useRef)(QQ.onReady);
      MF.current = QQ.onReady, (0, qQ.useEffect)((() => {
        var QQ;
        null === (QQ = MF.current) || void 0 === QQ || QQ.call(MF, EQ)
      }), [EQ]);
      const GF = (0, qQ.useRef)(QQ.onMeasured);
      (0, qQ.useLayoutEffect)((() => {
        GF.current = QQ.onMeasured
      })), (0, qQ.useEffect)((() => {
        var QQ;
        const FQ = aQ ? {
          hotbar: fF(aQ, SF),
          cluster: Lw(aQ, (0, FF.A)(pQ.width, pQ.height, VQ), SF)
        } : {};
        null === (QQ = GF.current) || void 0 === QQ || QQ.call(GF, XQ, eF ? eF.split(",") : [], FQ)
      }), [XQ, eF, aQ, pQ, VQ]);
      const pF = QQ => ({
        left: QQ.left * KQ,
        top: QQ.top * KQ,
        width: (QQ.right - QQ.left) * KQ,
        height: (QQ.bottom - QQ.top) * KQ
      });
      return (0, cQ.jsx)("div", {
        ref: iQ,
        className: vQ()("HudPreviewBox", {
          Fill: eQ
        }),
        style: {
          height: pQ.height * KQ
        },
        children: (0, cQ.jsxs)("div", {
          ref: WQ,
          className: "HudPreviewStage",
          style: {
            width: pQ.width * KQ,
            height: pQ.height * KQ
          },
          children: [(0, cQ.jsx)("iframe", {
            ref: OQ,
            className: "HudPreviewFrame",
            title: GQ("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: pQ.width,
              height: pQ.height,
              transform: `scale(${KQ})`
            }
          }), aQ && (0, yQ.createPortal)((0, cQ.jsx)(cF, {
            presence: YQ,
            portraitPhone: YF,
            hidden: uF,
            actionButtons: HQ,
            joystickFixed: bQ,
            keysAbove: hQ,
            auraBar: CQ,
            trayState: tF,
            moved: AF
          }), aQ.body), (0, cQ.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...kF.handlers,
            children: [(0, cQ.jsx)("div", {
              ref: NQ,
              className: "HudPreviewSafeZone",
              style: {
                top: VQ.top * KQ,
                right: VQ.right * KQ,
                bottom: VQ.bottom * KQ,
                left: VQ.left * KQ
              }
            }), fQ.map(((QQ, FQ) => {
              let {
                id: wQ,
                box: LQ
              } = QQ;
              return (0, cQ.jsx)("div", {
                className: "HudPreviewHandle",
                style: pF((0, FF.r)(LQ, 40 / KQ))
              }, `${wQ}:${FQ}`)
            })), SQ.hudLocked.map((QQ => {
              const FQ = XQ[QQ];
              return FQ && (0, cQ.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: FQ.right * KQ,
                  top: FQ.top * KQ
                },
                children: (0, cQ.jsx)(RQ.c, {
                  name: "lock"
                })
              }, QQ)
            })), (0, cQ.jsx)("div", {
              ref: IQ,
              className: "HudPreviewCentreLine",
              style: {
                left: pQ.width / 2 * KQ
              }
            }), DQ && HF && (0, cQ.jsx)("div", {
              ref: rQ,
              className: vQ()("HudPreviewRing", {
                Fixed: !uQ(DQ),
                Overlap: xF.length > 0
              }),
              style: pF(HF),
              children: (0, cQ.jsx)("span", {
                className: vQ()("HudPreviewRingLabel", mw(DQ, bF, XQ, KQ, pQ)),
                children: bF
              })
            })]
          })]
        })
      })
    }

    function bw(QQ, FQ) {
      (0, qQ.useEffect)((() => {
        var wQ;
        null === (wQ = QQ.current) || void 0 === wQ || wQ.toggleAttribute("inert", FQ)
      }), [QQ, FQ])
    }
    const Yw = "hudFullScreen";

    function xw(QQ) {
      let {
        onScale: FQ,
        onHidden: wQ,
        onReset: oQ,
        locked: DQ,
        lockable: kQ,
        onLocked: vQ,
        onClose: uQ,
        ...HQ
      } = QQ;
      const {
        t: bQ
      } = (0, LQ.y)(), YQ = (0, qQ.useRef)(null);
      (0, BQ.m)("popup", YQ, uQ),
      function(QQ) {
        const FQ = (0, qQ.useRef)(QQ);
        FQ.current = QQ, (0, qQ.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Yw]: !0
          }, "");
          let QQ = !1;
          const wQ = () => {
            QQ = !0, FQ.current()
          };
          return window.addEventListener("popstate", wQ), () => {
            var FQ;
            window.removeEventListener("popstate", wQ), !QQ && null !== (FQ = window.history.state) && void 0 !== FQ && FQ[Yw] && window.history.back()
          }
        }), [])
      }(uQ), (0, qQ.useEffect)((() => {
        function QQ(QQ) {
          "Escape" === QQ.key && (QQ.stopPropagation(), uQ())
        }
        return window.addEventListener("keydown", QQ, !0), () => {
          window.removeEventListener("keydown", QQ, !0)
        }
      }), [uQ]);
      const {
        selected: xQ
      } = HQ, AQ = (0, qQ.useRef)(null), tQ = (0, qQ.useRef)(null), [eQ, MQ] = (0, qQ.useState)(!1);
      bw(tQ, !eQ);
      const [GQ, pQ] = (0, qQ.useState)(null), [CQ, SQ] = (0, qQ.useState)([]), [iQ, WQ] = CF(), RQ = (0, qQ.useRef)(HQ.selected);
      RQ.current = HQ.selected;
      const OQ = (0, qQ.useRef)({}),
        sQ = (0, qQ.useCallback)((() => {
          const QQ = AQ.current;
          QQ && pQ(function(QQ, FQ, wQ) {
            var LQ;
            const {
              innerWidth: qQ,
              innerHeight: oQ
            } = window, DQ = QQ.offsetWidth, kQ = QQ.offsetHeight, vQ = Math.max(jF()[0], 6), mQ = [];
            for (const bQ of [vQ, .2 * oQ, .5 * oQ - kQ / 2, .33 * oQ])
              for (const QQ of [.5, .3, .7]) mQ.push({
                left: Math.max(0, Math.min(qQ - DQ - 6, Math.max(6, qQ * QQ - DQ / 2))),
                top: bQ
              });
            const uQ = mQ.map((QQ => ({
                left: QQ.left - 6,
                top: QQ.top - 6,
                right: QQ.left + DQ + 6,
                bottom: QQ.top + kQ + 6
              }))),
              HQ = Fw(FQ, wQ);
            return mQ[(0, FF.s)(uQ, HQ, {
              avoid: wQ && null !== (LQ = FQ[wQ]) && void 0 !== LQ ? LQ : null
            })]
          }(QQ, OQ.current, RQ.current))
        }), []),
        rQ = (0, qQ.useCallback)(((QQ, FQ, wQ) => {
          SQ(FQ), WQ(wQ), OQ.current = QQ, sQ()
        }), [sQ, WQ]);
      return (0, qQ.useLayoutEffect)(sQ, [HQ.selected, sQ]), (0, yQ.createPortal)((0, cQ.jsxs)("div", {
        ref: YQ,
        className: "HudFullScreenEditor",
        children: [(0, cQ.jsx)(Hw, {
          ...HQ,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: rQ,
          onReady: MQ,
          lockable: kQ
        }), (0, cQ.jsxs)("div", {
          ref: AQ,
          className: "HudFullScreenToolbar",
          style: null === GQ ? void 0 : {
            left: GQ.left,
            top: GQ.top,
            transform: "none"
          },
          children: [(0, cQ.jsx)("div", {
            ref: tQ,
            className: "HudFullScreenControls",
            children: (0, cQ.jsx)(iF, {
              selected: xQ,
              layout: HQ.layout.hudLayouts[HQ.orientation],
              actionButtons: HQ.actionButtons,
              keyNames: HQ.keyNames,
              overlaps: CQ,
              scaleCaps: iQ,
              onScale: FQ,
              onHidden: wQ,
              onReset: oQ,
              locked: DQ,
              lockable: kQ,
              onLocked: vQ,
              joystickFixed: HQ.joystickFixed
            })
          }), (0, cQ.jsx)(mQ.f, {
            className: "HudFullScreenDone",
            onClick: uQ,
            padDefaultFocus: !0,
            children: bQ("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const Aw = QQ => `${Math.round(100*QQ)}%`;

    function tw(QQ) {
      let {
        info: FQ,
        tuple: wQ,
        props: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, LQ.y)();
      return (0, cQ.jsx)(YQ.g, {
        name: oQ("hudLayout:size"),
        min: sQ.j,
        max: sQ.g,
        step: SF,
        initValue: wQ[2],
        disabled: qQ.locked.has(FQ.id),
        selectableMax: qQ.scaleCaps[FQ.id],
        cappedNote: oQ("hudLayout:sizeCapped"),
        format: Aw,
        onChange: QQ => {
          qQ.onScalePreview(FQ.id, QQ)
        },
        onChangeComplete: QQ => {
          qQ.onScale(FQ.id, QQ)
        }
      })
    }

    function ew(QQ) {
      const {
        t: FQ
      } = (0, LQ.y)(), {
        present: wQ,
        elements: oQ,
        selected: DQ,
        onSelect: kQ,
        onHidden: mQ,
        onReset: uQ,
        note: HQ,
        actionButtons: bQ,
        keyNames: YQ,
        sizeBesidePreview: xQ,
        locked: AQ,
        lockable: tQ,
        onLocked: eQ
      } = QQ, {
        rowIconsOpen: MQ,
        onRowIconsOpen: GQ
      } = QQ, pQ = (0, qQ.useRef)(null), CQ = null !== DQ && (MQ || !(0, sQ.L)(DQ));
      return (0, qQ.useEffect)((() => {
        var QQ;
        const FQ = DQ ? null === (QQ = pQ.current) || void 0 === QQ ? void 0 : QQ.querySelector(`[data-hud-row="${DQ}"]`) : null;
        if (!FQ) return;
        const wQ = FQ.closest(".SettingsMenuRight"),
          LQ = performance.now();
        let qQ = null;
        const oQ = () => {
            clearInterval(vQ), null === wQ || void 0 === wQ || wQ.removeEventListener("scroll", kQ)
          },
          kQ = () => {
            ZF() || oQ()
          },
          vQ = setInterval((() => {
            const QQ = performance.now();
            QQ - LQ > 1500 ? oQ() : ZF() ? qQ = null : null === qQ ? qQ = QQ : QQ - qQ >= 150 && (oQ(), function(QQ) {
              var FQ;
              const wQ = QQ.closest(".SettingsMenuRight"),
                LQ = null === (FQ = QQ.closest(".HudLayoutSettings")) || void 0 === FQ ? void 0 : FQ.querySelector(".HudLayoutPreviewBox");
              if (!wQ || !LQ) return;
              const qQ = LQ.getBoundingClientRect().bottom + 8,
                oQ = wQ.getBoundingClientRect().bottom - 8,
                DQ = QQ.getBoundingClientRect();
              DQ.top < qQ ? wQ.scrollBy({
                top: DQ.top - qQ,
                behavior: "smooth"
              }) : DQ.bottom > oQ && wQ.scrollBy({
                top: Math.min(DQ.bottom - oQ, DQ.top - qQ),
                behavior: "smooth"
              })
            }(FQ))
          }), 50);
        return null === wQ || void 0 === wQ || wQ.addEventListener("scroll", kQ, {
          passive: !0
        }), oQ
      }), [DQ, CQ]), (0, cQ.jsx)("div", {
        ref: pQ,
        className: "SettingBoxGroup HudElementList",
        children: KQ.filter((QQ => wQ.has(QQ.id) && (MQ || !(0, sQ.L)(QQ.id)))).map((wQ => {
          const LQ = ((QQ, FQ) => {
              var wQ;
              return null !== (wQ = QQ[FQ]) && void 0 !== wQ ? wQ : sQ.p
            })(oQ, wQ.id),
            qQ = (0, sQ.t)(oQ, wQ.id),
            pQ = wQ.id === DQ,
            CQ = wQ.scale && !xQ,
            SQ = HQ(wQ.id, pQ);
          return (0, cQ.jsxs)("div", {
            "data-hud-row": wQ.id,
            className: vQ()("SettingBox HudElementRow", {
              Open: pQ,
              Hidden: qQ,
              Child: void 0 !== wQ.parent
            }),
            children: [(0, cQ.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, cQ.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": CQ ? pQ : void 0,
                onClick: () => {
                  kQ(wQ.id)
                },
                children: [jQ(wQ.id, bQ, FQ, YQ), wQ.scale && 1 !== LQ[2] && !(pQ && CQ) && (0, cQ.jsx)("span", {
                  className: "HudElementRowSize",
                  children: Aw(LQ[2])
                }), CQ && (0, cQ.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, cQ.jsx)(hQ, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: wQ.id,
                actionButtons: bQ,
                keyNames: YQ,
                locked: AQ.has(wQ.id),
                lockable: tQ(wQ.id),
                onLocked: eQ
              }), "menu" === wQ.id && (0, cQ.jsx)(JQ, {
                className: "HudElementRowIcon",
                open: MQ,
                name: jQ(wQ.id, bQ, FQ, YQ),
                onToggle: GQ
              }), "menu" !== wQ.id && (0, cQ.jsx)(fQ, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: wQ.id,
                elements: oQ,
                actionButtons: bQ,
                keyNames: YQ,
                onHidden: mQ
              }), (0, cQ.jsx)(VQ, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: AQ.has(wQ.id),
                id: wQ.id,
                elements: oQ,
                actionButtons: bQ,
                keyNames: YQ,
                onReset: uQ
              })]
            }), pQ && CQ && (0, cQ.jsx)(tw, {
              info: wQ,
              tuple: LQ,
              props: QQ
            }), SQ && (0, cQ.jsx)("div", {
              className: "HudElementNote",
              children: SQ
            })]
          }, wQ.id)
        }))
      })
    }

    function Mw(QQ) {
      let {
        preview: FQ,
        quick: wQ,
        onFullScreen: oQ,
        resting: DQ,
        onSidePanel: kQ
      } = QQ;
      const {
        t: vQ
      } = (0, LQ.y)(), uQ = uw(), HQ = (0, qQ.useRef)(null), {
        width: bQ
      } = (0, QF.c)(HQ), YQ = Math.floor(uQ.width * Math.min(1, FQ.maxHeight / uQ.height)), xQ = bQ - YQ - 12, AQ = xQ >= 130, tQ = bQ > 0;
      (0, qQ.useEffect)((() => {
        tQ && kQ(AQ)
      }), [tQ, AQ, kQ]);
      const eQ = (0, FF.z)(AQ ? YQ : bQ, uQ.width, uQ.height, FQ.maxHeight),
        MQ = DQ ? (0, cQ.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: uQ.height * eQ
          }
        }) : (0, cQ.jsx)(Hw, {
          ...FQ
        }),
        GQ = QQ => (0, cQ.jsxs)(mQ.L, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: vQ("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: oQ,
          children: [(0, cQ.jsx)(RQ.c, {
            name: "expand"
          }), QQ && (0, cQ.jsx)("span", {
            children: vQ("hudLayout:fullScreen")
          })]
        });
      return (0, cQ.jsxs)("div", {
        ref: HQ,
        className: "SettingBox HudLayoutPreviewBox",
        children: [bQ > 0 && AQ && (0, cQ.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, cQ.jsx)("div", {
            style: {
              width: YQ
            },
            children: MQ
          }), (0, cQ.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, cQ.jsx)(iF, {
              selected: FQ.selected,
              ...wQ,
              joystickFixed: FQ.joystickFixed,
              extra: GQ(!FQ.selected || xQ >= 278)
            })
          })]
        }), bQ > 0 && !AQ && (0, cQ.jsxs)(cQ.Fragment, {
          children: [MQ, (0, cQ.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: GQ(!1)
          })]
        })]
      })
    }
    var Gw = wQ(2403),
      pw = wQ(4257),
      Cw = wQ(2376),
      Sw = wQ(2336);
    const iw = QQ => {
      const FQ = LF.s * ("sides" === QQ ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(FQ / 2))
    };

    function Ww(QQ, FQ, wQ) {
      const [LQ, qQ, oQ, DQ] = QQ;
      return "sides" === FQ ? [LQ, wQ, oQ, wQ] : [wQ, qQ, wQ, DQ]
    }
    const Rw = [null, null, null, null],
      Ow = QQ => `${QQ}px`;

    function sw(QQ) {
      let {
        safe: FQ,
        onPreview: wQ,
        onCommit: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, LQ.y)(), kQ = (0, LF.B)(null !== FQ && void 0 !== FQ ? FQ : Rw, window.innerWidth, window.innerHeight, aF(document).map(Math.round)), vQ = (0, qQ.useRef)(null !== FQ && void 0 !== FQ ? FQ : Rw);
      vQ.current = null !== FQ && void 0 !== FQ ? FQ : Rw;
      const uQ = QQ => {
        const FQ = Math.min(iw(QQ), "sides" === QQ ? Math.max(kQ[1], kQ[3]) : Math.max(kQ[0], kQ[2]));
        return (0, cQ.jsx)(YQ.g, {
          name: DQ("sides" === QQ ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: iw(QQ),
          step: 2,
          initValue: FQ,
          format: Ow,
          onChange: FQ => {
            wQ(Ww(vQ.current, QQ, FQ))
          },
          onChangeComplete: LQ => {
            if (LQ === FQ) return void wQ(vQ.current);
            const qQ = Ww(vQ.current, QQ, LQ);
            vQ.current = qQ, oQ(qQ), (0, iQ.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: QQ
            })
          }
        })
      };
      return (0, cQ.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, cQ.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, cQ.jsx)("div", {
            children: DQ("hudLayout:safeZone")
          }), (0, cQ.jsx)(mQ.L, {
            active: null === FQ,
            pressed: null === FQ,
            onClick: () => {
              oQ(null)
            },
            children: DQ("hudLayout:safeZoneAuto")
          })]
        }), uQ("sides"), uQ("ends")]
      })
    }

    function rw() {
      var QQ, FQ;
      const {
        t: wQ
      } = (0, LQ.y)(), oQ = (0, sQ.$)(), {
        clientEscMenuOptions: DQ
      } = (0, uQ.l)(["clientEscMenuOptions"]), kQ = (0, Gw.f)(), vQ = oQ.hudLayouts[kQ], [HQ, bQ] = (0, qQ.useState)(null), {
        rowIconsOpen: xQ,
        onRowIconsOpen: AQ,
        select: tQ
      } = function(QQ, FQ) {
        const [wQ, LQ] = (0, qQ.useState)((() => sQ.E.some((FQ => void 0 !== QQ.hudElements[FQ] || QQ.hudLocked.includes(FQ))))), oQ = (0, qQ.useCallback)((QQ => {
          FQ(QQ), (0, sQ.L)(QQ) && LQ(!0)
        }), [FQ]);
        return {
          rowIconsOpen: wQ,
          onRowIconsOpen: LQ,
          select: oQ
        }
      }(vQ, bQ), [eQ, MQ] = (0, qQ.useState)([]), [GQ, pQ] = (0, qQ.useState)(null), [CQ, SQ] = CF(), RQ = (0, qQ.useCallback)(((QQ, FQ, wQ) => {
        MQ(FQ), SQ(wQ);
        const LQ = Object.keys(QQ);
        pQ((QQ => (null === QQ || void 0 === QQ ? void 0 : QQ.size) === LQ.length && LQ.every((FQ => QQ.has(FQ))) ? QQ : new Set(LQ)))
      }), [SQ]), {
        gameState: OQ
      } = (0, uQ.l)(["gameState"]), rQ = (0, Cw.j)(), IQ = null !== (QQ = null === (FQ = (0, Sw.n)()) || void 0 === FQ ? void 0 : FQ.icon) && void 0 !== QQ ? QQ : null, [UQ] = (0, qQ.useState)((() => "inGame" === OQ ? function(QQ, FQ, wQ) {
        const LQ = QQ.querySelector(".InGameUi .TouchComponentsButtons");
        if (!LQ) return DF;
        const qQ = {},
          oQ = {};
        for (const uQ of oF) {
          const QQ = LQ.querySelector(`.TouchSlot${uQ} > .TouchKey`);
          if (QQ) {
            var DQ, kQ;
            qQ[uQ] = QQ.cloneNode(!0);
            const FQ = (null !== (DQ = null === (kQ = QQ.querySelector(".TouchKeyLabel")) || void 0 === kQ ? void 0 : kQ.textContent) && void 0 !== DQ ? DQ : "").split(/\s+/).filter((QQ => !/[\d\xd7]/.test(QQ))).join(" ");
            FQ && (oQ[uQ] = FQ)
          }
        }
        const vQ = FQ => {
            const wQ = QQ.querySelector(`.InGameUi ${FQ}`);
            return null !== wQ && !wQ.classList.contains("Hidden")
          },
          mQ = [...QQ.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((QQ => QQ.cloneNode(!0)));
        return {
          faces: Object.keys(qQ).length > 0 ? qQ : null,
          names: oQ,
          shop: vQ(".TouchInventoryKey.ShopKey"),
          bag: vQ(".TouchInventoryKey.BagKey"),
          items: mQ.length > 0 ? mQ : null,
          rowIcons: FQ,
          pinnedIcon: wQ
        }
      }(document, rQ, IQ) : DF)), NQ = (0, qQ.useRef)(null), TQ = (0, qQ.useRef)(null), lQ = function(QQ) {
        const [FQ, wQ] = (0, qQ.useState)((() => .4 * window.innerHeight));
        return (0, qQ.useLayoutEffect)((() => {
          var FQ;
          const LQ = null === (FQ = QQ.current) || void 0 === FQ ? void 0 : FQ.closest(".SettingsMenuRight");
          if (!LQ) return;
          const qQ = () => {
            const QQ = LQ.clientHeight < Iw ? .4 : .5;
            wQ(Math.max(80, LQ.clientHeight * QQ - 24))
          };
          qQ();
          const oQ = new ResizeObserver(qQ);
          return oQ.observe(LQ), () => {
            oQ.disconnect()
          }
        }), [QQ]), FQ
      }(TQ), jQ = (0, pw.u)(DQ.joystickMode), XQ = DQ.touchActionButtons, fQ = (0, qQ.useMemo)((() => function(QQ, FQ) {
        const wQ = {},
          LQ = [
            ["extra", "X"],
            ["game", "G"]
          ];
        FQ || LQ.push(["attack", "P"]);
        for (const [qQ, oQ] of LQ) {
          const FQ = QQ.names[oQ];
          FQ && (wQ[qQ] = FQ)
        }
        return wQ
      }(UQ, XQ)), [UQ, XQ]);
      (0, qQ.useEffect)((() => {
        (0, iQ.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [VQ, hQ] = (0, qQ.useState)(!1), [JQ, EQ] = (0, qQ.useState)(!1), nQ = (0, qQ.useRef)(null);
      bw(nQ, !JQ);
      const [gQ, yQ] = (0, qQ.useState)(!1), BQ = (0, qQ.useCallback)((() => {
        yQ(!1)
      }), []), dQ = (0, qQ.useMemo)((() => new Set(vQ.hudLocked)), [vQ.hudLocked]), QF = QQ => {
        var FQ, wQ;
        const LQ = (0, sQ.q)(),
          qQ = QQ(LQ);
        (0, sQ.V)(null !== (FQ = null === (wQ = NQ.current) || void 0 === wQ ? void 0 : wQ.keepLocks(LQ, qQ)) && void 0 !== FQ ? FQ : qQ)
      }, FF = (QQ, FQ) => {
        QF((wQ => (0, sQ.ab)(wQ, kQ, QQ, FQ)))
      }, LF = (QQ, FQ, wQ) => {
        FF(QQ, {
          dx: FQ,
          dy: wQ
        }), (0, iQ.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${QQ}`
        })
      }, qF = (QQ, FQ) => {
        QF((wQ => (0, sQ.cb)(wQ, kQ, QQ, FQ)))
      }, kF = QQ => {
        const FQ = zQ[QQ];
        return (FQ.move || FQ.scale) && ("joystick" !== QQ || jQ) && !(0, wF.w)(QQ, vQ.hudElements[QQ])
      }, vF = QQ => zQ[QQ].move && ("joystick" !== QQ || jQ) && !dQ.has(QQ), mF = new Set(KQ.map((QQ => QQ.id)).filter((QQ => {
        const FQ = (0, sQ.L)(QQ) && !UQ.rowIcons.includes(QQ);
        return null === GQ || GQ.has(QQ) || (0, sQ.t)(vQ.hudElements, QQ) && !FQ
      }))), uF = {
        present: mF,
        actionButtons: XQ,
        keyNames: fQ,
        scaleCaps: CQ,
        sizeBesidePreview: VQ,
        elements: vQ.hudElements,
        selected: HQ,
        onSelect: tQ,
        rowIconsOpen: xQ,
        onRowIconsOpen: AQ,
        onScalePreview: (QQ, FQ) => {
          var wQ;
          null === (wQ = NQ.current) || void 0 === wQ || wQ.setScale(QQ, FQ)
        },
        onScale: (QQ, FQ) => {
          FF(QQ, {
            scale: FQ
          }), (0, iQ.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${QQ}`
          })
        },
        onHidden: (QQ, FQ) => {
          FF(QQ, {
            hidden: FQ
          }), (0, iQ.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${FQ?"hide":"show"}:${QQ}`
          })
        },
        onReset: QQ => {
          FF(QQ, sQ.c)
        },
        locked: dQ,
        lockable: kF,
        onLocked: qF,
        note: (QQ, FQ) => {
          const LQ = FQ && eQ.length > 0 ? wQ("hudLayout:overlapsNote", {
            names: aQ(eQ, XQ, wQ, fQ)
          }) : null;
          return FQ && PQ(QQ, jQ) ? (0, cQ.jsxs)(cQ.Fragment, {
            children: [LQ && (0, cQ.jsx)("span", {
              children: LQ
            }), (0, cQ.jsx)("span", {
              children: wQ("hudLayout:floatingJoystickNote")
            }), !VQ && (0, cQ.jsx)(ZQ, {})]
          }) : LQ || (FQ && dQ.has(QQ) ? wQ("hudLayout:lockedNote") : FQ && "cluster" === QQ ? wQ("hudLayout:clusterNote") : FQ && "menu" === QQ ? wQ("hudLayout:menuNote") : FQ && (0, wF.w)(QQ, vQ.hudElements[QQ]) && vF(QQ) ? wQ("hudLayout:rowIconNote") : FQ && "arrows" === QQ ? wQ("hudLayout:arrowsNote") : "inventory" === QQ && (0, sQ.t)(vQ.hudElements, "inventory") ? wQ("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, cQ.jsxs)("div", {
        ref: TQ,
        className: "HudLayoutSettings",
        children: [(0, cQ.jsxs)("div", {
          ref: nQ,
          className: "HudLayoutBody",
          children: [(0, cQ.jsx)("div", {
            className: "HudLayoutOrientation",
            children: wQ("landscape" === kQ ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, cQ.jsx)(Mw, {
            preview: {
              layout: oQ,
              orientation: kQ,
              selected: HQ,
              onSelect: tQ,
              onMove: LF,
              canMove: vF,
              actionButtons: XQ,
              joystickFixed: jQ,
              presence: UQ,
              keyNames: fQ,
              maxHeight: lQ,
              apiRef: NQ,
              onMeasured: RQ,
              onReady: EQ,
              lockable: kF
            },
            quick: {
              layout: vQ,
              actionButtons: XQ,
              keyNames: fQ,
              scaleCaps: CQ,
              overlaps: eQ,
              onScale: uF.onScale,
              onHidden: uF.onHidden,
              onReset: uF.onReset,
              locked: dQ,
              lockable: kF,
              onLocked: qF
            },
            onFullScreen: () => {
              yQ(!0)
            },
            resting: gQ,
            onSidePanel: hQ
          }), gQ && (0, cQ.jsx)(xw, {
            layout: oQ,
            orientation: kQ,
            selected: HQ,
            onSelect: tQ,
            onMove: LF,
            canMove: vF,
            actionButtons: XQ,
            joystickFixed: jQ,
            presence: UQ,
            keyNames: fQ,
            onScale: uF.onScale,
            onHidden: uF.onHidden,
            onReset: uF.onReset,
            locked: dQ,
            lockable: kF,
            onLocked: qF,
            apiRef: NQ,
            onClose: BQ
          }), (0, cQ.jsx)(sw, {
            safe: vQ.hudSafe,
            onCommit: QQ => {
              QF((FQ => (0, sQ.fb)(FQ, kQ, QQ)))
            },
            onPreview: QQ => {
              var FQ;
              null === (FQ = NQ.current) || void 0 === FQ || FQ.setSafe(QQ)
            }
          }), (0, cQ.jsx)(YQ.e, {
            label: wQ("hudLayout:snapCentre"),
            checked: oQ.hudSnapCentre,
            onClick: QQ => {
              (0, sQ.U)(QQ)
            },
            circleInfoText: wQ("hudLayout:snapCentreInfo")
          }), (0, cQ.jsx)(ew, {
            ...uF
          }), (0, cQ.jsx)(YQ.f, {
            label: wQ("hudLayout:shape"),
            options: sQ.F.map((QQ => ({
              value: QQ,
              label: wQ(`hudLayout:shape_${QQ}`)
            }))),
            value: oQ.hudShape,
            onChange: QQ => {
              QF((FQ => ({
                ...FQ,
                hudShape: QQ
              }))), (0, iQ.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: QQ
              })
            }
          }), (0, cQ.jsx)(YQ.g, {
            name: wQ("hudLayout:opacity"),
            min: sQ.f,
            max: 1,
            step: .05,
            initValue: oQ.hudKeyOpacity,
            format: QQ => `${Math.round(100*QQ)}%`,
            circleInfoText: wQ("hudLayout:opacityInfo"),
            onChange: QQ => {
              var FQ;
              null === (FQ = NQ.current) || void 0 === FQ || FQ.setOpacity(QQ)
            },
            onChangeComplete: QQ => {
              (0, sQ.R)(QQ), (0, iQ.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, cQ.jsx)(mQ.F, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const QQ = WQ.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await QQ.getResult() && (0, sQ.N)()
            }()
          },
          children: wQ("hudLayout:resetAll")
        })]
      })
    }
    const Iw = 350;
    const Uw = [function() {
      const {
        t: QQ
      } = (0, LQ.y)(), [FQ, wQ] = (0, qQ.useState)(!1), oQ = (0, qQ.useRef)(null);
      return (0, qQ.useEffect)((() => {
        var QQ;
        FQ && (null === (QQ = oQ.current) || void 0 === QQ || QQ.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [FQ]), (0, cQ.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, cQ.jsxs)("button", {
          ref: oQ,
          type: "button",
          className: "SettingBox SettingBoxFeatured HudLayoutEntry",
          "aria-expanded": FQ,
          onClick: () => {
            wQ(!FQ)
          },
          children: [(0, cQ.jsx)(RQ.c, {
            name: "arrows-up-down-left-right",
            className: "HudLayoutEntryIcon"
          }), (0, cQ.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, cQ.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: QQ("hudLayout:title")
            }), (0, cQ.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: QQ("hudLayout:entrySub")
            })]
          }), (0, cQ.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), FQ && (0, cQ.jsx)(rw, {})]
      })
    }, function() {
      const {
        t: QQ
      } = (0, LQ.y)(), {
        joystickMode: FQ,
        touchSpeedCurve: wQ,
        autorun: qQ,
        jumpLock: oQ
      } = (0, uQ.l)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, cQ.jsxs)(cQ.Fragment, {
        children: [(0, cQ.jsx)(YQ.f, {
          label: QQ("settingsMenu:joystick"),
          options: pQ.ub.map((FQ => ({
            value: FQ,
            label: QQ(CQ[FQ])
          }))),
          value: FQ,
          onChange: QQ => {
            uQ.c.setClientEscMenuOptions({
              joystickMode: QQ
            })
          },
          circleInfoText: QQ("settingsMenu:joystickInfo")
        }), (0, cQ.jsx)(YQ.e, {
          label: QQ("settingsMenu:preciseWalking"),
          checked: wQ,
          onClick: QQ => {
            uQ.c.setClientEscMenuOptions({
              touchSpeedCurve: QQ
            })
          },
          circleInfoText: QQ("settingsMenu:preciseWalkingInfo")
        }), (0, cQ.jsx)(YQ.e, {
          label: QQ("settingsMenu:autoRun"),
          checked: qQ,
          onClick: QQ => {
            uQ.c.setClientEscMenuOptions({
              autorun: QQ
            })
          },
          circleInfoText: QQ("settingsMenu:autoRunInfo")
        }), (0, cQ.jsx)(YQ.e, {
          label: QQ("settingsMenu:jumpLock"),
          checked: oQ,
          onClick: QQ => {
            uQ.c.setClientEscMenuOptions({
              jumpLock: QQ
            })
          },
          circleInfoText: QQ("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, cQ.jsx)(GQ.d, {})
    }, function() {
      const {
        t: QQ
      } = (0, LQ.y)(), {
        clientEscMenuOptions: FQ
      } = (0, uQ.l)(["clientEscMenuOptions"]);
      return (0, SQ.d)() ? (0, cQ.jsx)(YQ.e, {
        label: QQ("settingsMenu:vibration"),
        checked: FQ.vibration,
        onClick: QQ => {
          uQ.c.setClientEscMenuOptions({
            vibration: QQ
          })
        },
        circleInfoText: QQ("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Nw() {
      return (0, cQ.jsx)(cQ.Fragment, {
        children: Uw.map(((QQ, FQ) => (0, cQ.jsx)(QQ, {}, FQ)))
      })
    }
    var Tw = wQ(4238);

    function Kw() {
      const {
        t: QQ
      } = (0, LQ.y)(), {
        isTouchScreen: FQ,
        clientEscMenuOptions: wQ,
        gameState: DQ
      } = (0, uQ.l)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), kQ = (0, xQ.l)("ezBridging"), vQ = (0, xQ.l)("ezTowering"), tQ = "inGame" !== DQ || !0 === kQ, eQ = (0, AQ.g)() && ("inGame" !== DQ || !0 === vQ), [, GQ] = (0, qQ.useReducer)((QQ => QQ + 1), 0), pQ = (0, MQ.d)(), [CQ, SQ] = (0, qQ.useState)(Tw.g);
      return (0, cQ.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [pQ && (0, cQ.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, cQ.jsx)("div", {
            children: QQ("controller:settingsControlsNote")
          }), (0, cQ.jsx)(mQ.L, {
            onClick: () => {
              uQ.c.set({
                openSettingsCategory: "controller"
              })
            },
            children: QQ("controller:settingsOpenController")
          })]
        }), (0, HQ.isTouchscreen)() && !(0, HQ.isMobile)() ? (0, cQ.jsx)(cQ.Fragment, {
          children: (0, cQ.jsx)(YQ.e, {
            label: QQ("settingsMenu:useTouchControls"),
            checked: CQ,
            onClick: QQ => {
              (0, Tw.c)(QQ), SQ(QQ)
            }
          })
        }) : null, FQ && (0, cQ.jsx)(Nw, {}), tQ && (0, cQ.jsx)(YQ.e, {
          label: QQ("settingsMenu:ezBridging"),
          checked: wQ.ezBridging,
          onClick: QQ => {
            uQ.c.setClientEscMenuOptions({
              ezBridging: QQ
            })
          },
          circleInfoText: QQ("settingsMenu:ezBridgingInfo")
        }), eQ && (0, cQ.jsx)(YQ.e, {
          label: QQ("settingsMenu:ezTowering"),
          checked: wQ.ezTowering,
          onClick: QQ => {
            uQ.c.setClientEscMenuOptions({
              ezTowering: QQ
            })
          },
          circleInfoText: QQ("settingsMenu:ezToweringInfo")
        }), (0, cQ.jsx)(YQ.e, {
          label: QQ("settingsMenu:crouchToggle"),
          checked: wQ.crouchIsToggle,
          onClick: QQ => {
            uQ.c.setClientEscMenuOptions({
              crouchIsToggle: QQ
            })
          },
          circleInfoText: QQ("settingsMenu:crouchToggleInfo")
        }), (0, cQ.jsx)(YQ.e, {
          label: QQ("settingsMenu:hideUiToggle"),
          checked: wQ.hideUiIsToggle,
          onClick: QQ => {
            uQ.c.setClientEscMenuOptions({
              hideUiIsToggle: QQ
            })
          },
          circleInfoText: QQ("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, bQ.e)() && (0, cQ.jsx)(YQ.g, {
          name: QQ("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: wQ.touchscreenSensitivity,
          onChange: QQ => {
            uQ.c.setClientEscMenuOptions({
              touchscreenSensitivity: QQ
            })
          }
        }), !(0, HQ.isMobile)() && (0, cQ.jsx)(YQ.g, {
          name: QQ("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: wQ.mouseSensitivity,
          onChange: QQ => {
            uQ.c.setClientEscMenuOptions({
              mouseSensitivity: QQ
            })
          }
        }), !(0, HQ.isMobile)() && (0, cQ.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, cQ.jsx)("div", {
            className: "SliderText",
            children: QQ("settingsMenu:keyBindings")
          }), oQ.e.map((FQ => (0, cQ.jsx)(zw, {
            title: QQ(FQ.name.translationKey, FQ.name.params),
            defaultOpen: oQ.i.has(FQ.id),
            children: FQ.actions.map((QQ => (0, cQ.jsx)(lw, {
              noaAction: QQ,
              forceUpdate: GQ,
              clashesWith: FQ.clashesWith,
              showPadGlyph: pQ
            }, QQ)))
          }, FQ.name.translationKey))), (0, cQ.jsx)(mQ.F, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, oQ.C)(), GQ()
            },
            children: QQ("controls:resetBindings")
          })]
        })]
      })
    }

    function zw(QQ) {
      let {
        title: FQ,
        defaultOpen: wQ,
        children: LQ
      } = QQ;
      const [oQ, DQ] = (0, qQ.useState)(wQ);
      return (0, cQ.jsxs)("div", {
        className: vQ()("ControlsSection", {
          Collapsed: !oQ
        }),
        children: [(0, cQ.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            DQ(!oQ)
          },
          children: [(0, cQ.jsx)("div", {
            className: "ControlsSectionTitle",
            children: FQ
          }), (0, cQ.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), oQ && (0, cQ.jsx)("div", {
          className: "ControlsSectionRows",
          children: LQ
        })]
      })
    }

    function lw(QQ) {
      let {
        noaAction: FQ,
        forceUpdate: wQ,
        clashesWith: kQ,
        showPadGlyph: uQ
      } = QQ;
      const {
        t: HQ
      } = (0, LQ.y)(), bQ = (0, eQ.b)(FQ), [YQ, xQ] = (0, qQ.useState)(!1), [AQ, MQ] = (0, qQ.useState)("controls:clickToEnterNewBinding"), [GQ, pQ] = (0, qQ.useState)(null), [CQ, SQ] = (0, qQ.useState)(null), iQ = (0, qQ.useRef)(null);
      (0, qQ.useEffect)((() => {
        YQ && iQ.current && iQ.current.focus()
      }), [YQ]);
      const WQ = oQ.u[FQ].filter((QQ => DQ.j[QQ]));
      let RQ = null;
      const OQ = [],
        sQ = kQ.flatMap((QQ => {
          var FQ, wQ;
          return null !== (FQ = null === (wQ = oQ.e.find((FQ => FQ.id === QQ))) || void 0 === wQ ? void 0 : wQ.actions) && void 0 !== FQ ? FQ : []
        }));
      for (const LQ of sQ) {
        if (LQ === FQ) continue;
        const QQ = oQ.u[LQ];
        for (const FQ of QQ) WQ.includes(FQ) && OQ.push(HQ(oQ.x[LQ].translationKey, oQ.x[LQ].params))
      }
      OQ.length > 0 && (RQ = HQ("controls:sharedBindingsWarning") + " ", RQ += OQ.join(", "));
      const rQ = () => {
          xQ(!1), pQ(null), MQ("controls:clickToEnterNewBinding"), SQ(null)
        },
        IQ = () => "BindingInput_" + FQ;
      return (0, cQ.jsxs)("div", {
        className: vQ()("ControlRow", {
          WarningBorder: null !== RQ
        }),
        children: [(0, cQ.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, cQ.jsxs)("div", {
            className: "ControlName",
            children: [HQ(oQ.x[FQ].translationKey, oQ.x[FQ].params), uQ && bQ && (0, cQ.jsx)(tQ.b, {
              glyph: bQ,
              className: "ControlPadGlyph"
            })]
          }), (0, cQ.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, cQ.jsxs)("div", {
              className: "ControlBindingsList",
              children: [WQ.map((QQ => (0, cQ.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, cQ.jsx)("div", {
                  children: (0, oQ.l)(QQ)
                }), (0, cQ.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const LQ = (0, oQ.z)(FQ, QQ);
                    LQ.isError() ? SQ(LQ.asError().message) : SQ(null), wQ()
                  },
                  children: "\xd7"
                })]
              }, QQ))), !YQ && (0, cQ.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  xQ(!0), SQ(null)
                },
                children: (0, cQ.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), YQ && (0, cQ.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, cQ.jsxs)("div", {
                className: "InputContainer",
                children: [(0, cQ.jsx)("div", {
                  className: "InputOverlay",
                  children: GQ ? (0, oQ.l)(GQ) : (0, cQ.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: HQ(AQ)
                  })
                }), (0, cQ.jsx)("input", {
                  ref: iQ,
                  id: IQ(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: QQ => {
                    if ("Escape" === QQ.code) return rQ(), QQ.preventDefault(), void QQ.stopPropagation();
                    const FQ = QQ.code;
                    DQ.b.includes(FQ) ? (SQ(null), pQ(FQ)) : (SQ("controls:keyIsReserved"), pQ(null)), QQ.preventDefault(), QQ.stopPropagation()
                  },
                  onMouseDown: QQ => {
                    const FQ = "Mouse" + (QQ.button + 1);
                    document.activeElement && document.activeElement.id === IQ() ? DQ.b.includes(FQ) ? (SQ(null), pQ(FQ)) : (SQ("controls:keyIsReserved"), pQ(null)) : MQ("controls:enterNewBinding"), QQ.stopPropagation()
                  },
                  onBlur: () => {
                    MQ("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, cQ.jsx)(mQ.f, {
                onPointerDown: QQ => {
                  QQ.preventDefault()
                },
                onClick: () => {
                  (0, oQ.b)(FQ, GQ), wQ(), rQ()
                },
                className: "ControlBindingAddButton",
                disabled: null === GQ,
                children: HQ("general:add")
              }), (0, cQ.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  rQ()
                },
                children: "\xd7"
              })]
            }), CQ && (0, cQ.jsx)("div", {
              className: "ControlBindingError",
              children: HQ(CQ)
            })]
          })]
        }), RQ && (0, cQ.jsx)("div", {
          className: "ControlRowWarning",
          children: RQ
        })]
      })
    }
  },
  8419: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => eQ,
      g: () => tQ,
      i: () => uQ,
      k: () => MQ,
      o: () => GQ,
      r: () => bQ
    });
    var LQ = wQ(1668),
      qQ = wQ(1729);
    const oQ = QQ => QQ >= 56320 && QQ <= 57343,
      DQ = QQ => QQ >= 55296 && QQ <= 56319,
      kQ = (QQ, FQ) => FQ >= 2 && oQ(QQ.charCodeAt(FQ - 1)) && DQ(QQ.charCodeAt(FQ - 2)) ? FQ - 2 : Math.max(0, FQ - 1),
      vQ = (QQ, FQ) => {
        let wQ;
        var LQ, qQ;
        return wQ = QQ.start !== QQ.end ? FQ < 0 ? QQ.start : QQ.end : FQ < 0 ? kQ(QQ.value, QQ.start) : (LQ = QQ.value, (qQ = QQ.start) + 1 < LQ.length && DQ(LQ.charCodeAt(qQ)) && oQ(LQ.charCodeAt(qQ + 1)) ? qQ + 2 : Math.min(LQ.length, qQ + 1)), {
          value: QQ.value,
          start: wQ,
          end: wQ
        }
      },
      mQ = ["text", "search", "url", "email", "tel", "password", "number"],
      uQ = QQ => !(!(0, qQ.d)(QQ) || QQ.isContentEditable || QQ.hasAttribute("data-pad-no-osk")) && (QQ instanceof HTMLTextAreaElement || QQ instanceof HTMLInputElement && mQ.includes(QQ.type)),
      HQ = QQ => null !== QQ.selectionStart,
      bQ = QQ => {
        var FQ, wQ;
        const {
          value: LQ
        } = QQ;
        return {
          value: LQ,
          start: null !== (FQ = QQ.selectionStart) && void 0 !== FQ ? FQ : LQ.length,
          end: null !== (wQ = QQ.selectionEnd) && void 0 !== wQ ? wQ : LQ.length
        }
      },
      YQ = (QQ, FQ, wQ) => {
        if (QQ.readOnly) return;
        const qQ = QQ instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(qQ, "value").set.call(QQ, FQ.value), HQ(QQ) && QQ.setSelectionRange(FQ.start, FQ.end), (0, LQ.f)(QQ, new InputEvent("input", {
          bubbles: !0,
          inputType: wQ
        }))
      };
    let xQ = !1;
    const AQ = (QQ, FQ) => !!document.execCommand(QQ, !1, FQ) || (xQ || (xQ = !0, console.warn(`execCommand("${QQ}") failed; the on-screen keyboard is setting the value directly`)), !1),
      tQ = (QQ, FQ) => {
        AQ("insertText", FQ) || YQ(QQ, function(QQ, FQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const LQ = QQ.value.slice(0, QQ.start),
            qQ = QQ.value.slice(QQ.end);
          let oQ = wQ < 0 ? FQ.length : Math.max(0, wQ - LQ.length - qQ.length);
          oQ > 0 && oQ < FQ.length && DQ(FQ.charCodeAt(oQ - 1)) && oQ--;
          const kQ = FQ.slice(0, oQ),
            vQ = LQ.length + kQ.length;
          return {
            value: LQ + kQ + qQ,
            start: vQ,
            end: vQ
          }
        }(bQ(QQ), FQ, QQ.maxLength), "insertText")
      },
      eQ = QQ => {
        AQ("delete") || YQ(QQ, (QQ => {
          const FQ = QQ.start === QQ.end ? kQ(QQ.value, QQ.start) : QQ.start;
          return {
            value: QQ.value.slice(0, FQ) + QQ.value.slice(QQ.end),
            start: FQ,
            end: FQ
          }
        })(bQ(QQ)), "deleteContentBackward")
      },
      MQ = (QQ, FQ) => {
        if (!HQ(QQ)) return;
        const wQ = vQ(bQ(QQ), FQ);
        QQ.setSelectionRange(wQ.start, wQ.end)
      },
      GQ = QQ => {
        HQ(QQ) && 0 === QQ.selectionStart && 0 === QQ.selectionEnd && QQ.setSelectionRange(QQ.value.length, QQ.value.length)
      }
  },
  8604: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ
    });
    var LQ = wQ(17),
      qQ = wQ(3305),
      oQ = wQ(1362),
      DQ = wQ(1395);
    const kQ = async () => {
      if ((0, DQ.d)()) {
        if (!0 !== await oQ.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== LQ.c.get("gameState")) return
      }(0, qQ.e)()
    }
  },
  8611: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => vQ,
      f: () => oQ,
      h: () => DQ,
      k: () => qQ,
      o: () => kQ
    });
    var LQ = wQ(1916);
    const qQ = "controllerPadShopOpen",
      oQ = QQ => LQ.h.includes(QQ),
      DQ = QQ => Object.values(QQ).some((QQ => !1 !== QQ.canBuy && !QQ.isRewardedAd)),
      kQ = (QQ, FQ, wQ) => {
        var LQ, qQ, DQ, kQ;
        const vQ = QQ.filter((QQ => !oQ(QQ))),
          mQ = null !== FQ && QQ.includes(FQ) ? FQ : null;
        return null !== mQ && !oQ(mQ) && wQ(mQ) ? mQ : null !== (LQ = null !== (qQ = null !== (DQ = null !== (kQ = vQ.find(wQ)) && void 0 !== kQ ? kQ : vQ[0]) && void 0 !== DQ ? DQ : mQ) && void 0 !== qQ ? qQ : QQ[0]) && void 0 !== LQ ? LQ : null
      },
      vQ = QQ => QQ.userInput || QQ.isRewardedAd || "boolean" === typeof QQ.isSelected ? null : JSON.stringify([QQ.image, QQ.cost, QQ.currency, QQ.amount, QQ.customTitle, QQ.buyButtonText, QQ.description, QQ.canBuy])
  },
  8631: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => mQ,
      d: () => uQ
    });
    var LQ = wQ(53),
      qQ = wQ(1447),
      oQ = wQ(1972),
      DQ = wQ(1407),
      kQ = wQ(1431),
      vQ = wQ(1107);
    const mQ = () => {
        const QQ = (0, DQ.p)();
        if ((0, LQ.useEffect)((() => {
            (0, DQ.i)()
          }), []), !QQ) return null;
        const {
          ControllerCategory: FQ
        } = QQ;
        return (0, vQ.jsx)(kQ.d, {
          children: (0, vQ.jsx)(FQ, {})
        })
      },
      uQ = () => {
        var QQ;
        const FQ = (0, DQ.p)(),
          [, wQ] = (0, LQ.useReducer)((QQ => QQ + 1), 0);
        return (0, qQ.g)(oQ.c, wQ), null !== (QQ = null === FQ || void 0 === FQ ? void 0 : FQ.hasActivePad()) && void 0 !== QQ && QQ
      }
  },
  8421: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ,
      f: () => mQ,
      j: () => AQ,
      m: () => HQ,
      o: () => xQ,
      p: () => oQ,
      s: () => YQ,
      t: () => DQ,
      w: () => bQ
    });
    const LQ = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      qQ = (QQ, FQ) => {
        if ("function" === typeof QQ.checkVisibility) return !QQ.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: FQ,
          checkOpacity: FQ
        });
        const {
          visibility: wQ
        } = getComputedStyle(QQ);
        if ("hidden" === wQ || "collapse" === wQ) return !0;
        if (!FQ) return !1;
        for (let LQ = QQ; LQ; LQ = LQ.parentElement)
          if ("0" === getComputedStyle(LQ).opacity) return !0;
        return !1
      },
      oQ = QQ => {
        if (!QQ.isConnected || qQ(QQ, !0)) return !1;
        const FQ = QQ.getBoundingClientRect();
        return FQ.width > 0 && FQ.height > 0
      },
      DQ = QQ => !!QQ.matches(":disabled, [aria-disabled='true']") || "button" === QQ.getAttribute("role") && "-1" === QQ.getAttribute("tabindex"),
      kQ = QQ => {
        var FQ;
        if (QQ.closest("[data-pad-ignore]")) return !0;
        return !!(null === (FQ = QQ.parentElement) || void 0 === FQ ? void 0 : FQ.closest("[data-pad-focusable]"))
      },
      vQ = QQ => {
        const FQ = QQ.querySelectorAll(LQ);
        return QQ.matches(LQ) ? [QQ, ...FQ] : FQ
      },
      mQ = QQ => {
        const FQ = [];
        for (const wQ of vQ(QQ)) !kQ(wQ) && oQ(wQ) && FQ.push(wQ);
        return FQ
      },
      uQ = new WeakMap,
      HQ = QQ => {
        const FQ = uQ.get(QQ);
        if (FQ && bQ(FQ, QQ)) return !0;
        for (const wQ of vQ(QQ))
          if (!kQ(wQ) && oQ(wQ)) return uQ.set(QQ, wQ), !0;
        return uQ.delete(QQ), !1
      },
      bQ = (QQ, FQ) => FQ.contains(QQ) && QQ.matches(LQ) && !kQ(QQ) && oQ(QQ),
      YQ = (QQ, FQ) => bQ(QQ, FQ) && !DQ(QQ),
      xQ = QQ => {
        for (const FQ of QQ.querySelectorAll("[data-pad-initial-area]"))
          if (!qQ(FQ, !1)) return !0;
        return !1
      },
      AQ = QQ => {
        const FQ = FQ => {
          let wQ = 0;
          for (let LQ = FQ.parentElement; LQ && LQ !== QQ; LQ = LQ.parentElement) wQ++;
          return wQ
        };
        return [...QQ.querySelectorAll("[data-pad-initial-area]")].filter(oQ).sort(((QQ, wQ) => FQ(wQ) - FQ(QQ)))
      }
  },
  8408: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      B: () => mQ,
      D: () => RQ,
      F: () => CQ,
      I: () => SQ,
      L: () => tQ,
      P: () => vQ,
      R: () => uQ,
      d: () => eQ,
      f: () => WQ,
      g: () => cQ,
      k: () => pQ,
      m: () => xQ,
      p: () => AQ,
      r: () => bQ,
      v: () => YQ,
      y: () => iQ
    });
    var LQ = wQ(22),
      qQ = wQ(1668),
      oQ = wQ(8414),
      DQ = wQ(8419),
      kQ = wQ(8421);
    const vQ = QQ => (0, DQ.i)(QQ),
      mQ = QQ => {
        const FQ = QQ.getBoundingClientRect();
        return {
          x: FQ.left + FQ.width / 2,
          y: FQ.top + FQ.height / 2
        }
      },
      uQ = (QQ, FQ, wQ) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: QQ.x,
        clientY: QQ.y,
        screenX: QQ.x,
        screenY: QQ.y,
        button: FQ,
        buttons: wQ,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      HQ = (QQ, FQ) => {
        (0, qQ.f)(QQ, FQ)
      },
      bQ = function(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const LQ = 0 === wQ ? 1 : 2;
        HQ(QQ, new PointerEvent("pointerdown", uQ(FQ, wQ, LQ))), HQ(QQ, new MouseEvent("mousedown", uQ(FQ, wQ, LQ)))
      },
      YQ = function(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        HQ(QQ, new PointerEvent("pointerup", uQ(FQ, wQ, 0))), HQ(QQ, new MouseEvent("mouseup", uQ(FQ, wQ, 0)))
      },
      xQ = function(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        bQ(QQ, FQ, wQ), YQ(QQ, FQ, wQ), HQ(QQ, 0 === wQ ? new MouseEvent("click", uQ(FQ, 0, 0)) : new MouseEvent("contextmenu", uQ(FQ, 2, 0)))
      },
      AQ = function(QQ, FQ, wQ) {
        let {
          leaveBelow: LQ = null,
          enterBelow: qQ = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (QQ !== FQ) {
          if (null !== QQ && void 0 !== QQ && QQ.isConnected) {
            const qQ = {
              ...uQ(wQ, 0, 0),
              relatedTarget: FQ
            };
            HQ(QQ, new PointerEvent("pointerout", qQ)), HQ(QQ, new MouseEvent("mouseout", qQ));
            const oQ = QQ => !!FQ && QQ.contains(FQ) || !!LQ && QQ.contains(LQ);
            for (let FQ = QQ; FQ && !oQ(FQ); FQ = FQ.parentElement) HQ(FQ, new PointerEvent("pointerleave", {
              ...qQ,
              bubbles: !1
            })), HQ(FQ, new MouseEvent("mouseleave", {
              ...qQ,
              bubbles: !1
            }))
          }
          if (FQ) {
            const LQ = {
              ...uQ(wQ, 0, 0),
              relatedTarget: QQ
            };
            HQ(FQ, new PointerEvent("pointerover", LQ)), HQ(FQ, new MouseEvent("mouseover", LQ));
            const oQ = [],
              DQ = FQ => !(null === QQ || void 0 === QQ || !QQ.isConnected) && FQ.contains(QQ) || !!qQ && FQ.contains(qQ);
            for (let QQ = FQ; QQ && !DQ(QQ); QQ = QQ.parentElement) oQ.push(QQ);
            for (const QQ of oQ.reverse()) HQ(QQ, new PointerEvent("pointerenter", {
              ...LQ,
              bubbles: !1
            })), HQ(QQ, new MouseEvent("mouseenter", {
              ...LQ,
              bubbles: !1
            }));
            HQ(FQ, new PointerEvent("pointermove", uQ(wQ, 0, 0))), HQ(FQ, new MouseEvent("mousemove", uQ(wQ, 0, 0)))
          }
        } else FQ && (HQ(FQ, new PointerEvent("pointermove", uQ(wQ, 0, 0))), HQ(FQ, new MouseEvent("mousemove", uQ(wQ, 0, 0))))
      },
      tQ = QQ => {
        LQ.l.GA(oQ.f, QQ)
      },
      eQ = QQ => {
        if (vQ(QQ)) return void tQ(QQ);
        const FQ = QQ.hasAttribute("data-pad-focusable") ? QQ.querySelector("a[href]") : null,
          wQ = null !== FQ && void 0 !== FQ ? FQ : QQ;
        xQ(wQ, mQ(wQ))
      },
      MQ = ".Dropdown-root.is-open",
      GQ = QQ => {
        const FQ = QQ.querySelector(".Dropdown-control");
        return eQ(FQ), FQ
      },
      pQ = QQ => {
        var FQ;
        const wQ = null !== (FQ = QQ.closest(MQ)) && void 0 !== FQ ? FQ : QQ.querySelector(MQ);
        return wQ ? GQ(wQ) : null
      },
      cQ = QQ => {
        for (const FQ of document.querySelectorAll(MQ)) FQ.contains(QQ) || GQ(FQ)
      },
      CQ = QQ => null !== QQ.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      SQ = QQ => {
        const FQ = QQ ? document.elementFromPoint(QQ.x, QQ.y) : null;
        return !(null === FQ || void 0 === FQ || !FQ.closest("[data-pad-repeat]"))
      },
      iQ = QQ => {
        var FQ;
        return null !== (FQ = [...QQ.querySelectorAll("[data-pad-back]")].find(kQ.p)) && void 0 !== FQ ? FQ : null
      },
      WQ = QQ => {
        const FQ = iQ(QQ);
        return !!FQ && (eQ(FQ), !0)
      },
      RQ = QQ => {
        var FQ, wQ, LQ, qQ;
        return null !== (FQ = null !== (wQ = null !== (LQ = QQ.getAttribute("data-pad-key")) && void 0 !== LQ ? LQ : QQ.getAttribute("href")) && void 0 !== wQ ? wQ : null === (qQ = QQ.querySelector("a[href]")) || void 0 === qQ ? void 0 : qQ.getAttribute("href")) && void 0 !== FQ ? FQ : null
      }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);