export const id = 160;
export const ids = [160];
export const modules = {
  9244: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ
    });
    var wQ = XQ(26),
      qQ = XQ(1226),
      TQ = XQ(5349),
      zQ = XQ(1145);

    function sQ(QQ) {
      let {
        note: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, qQ.C)(), {
        clientEscMenuOptions: sQ
      } = (0, wQ.n)(["clientEscMenuOptions"]);
      return (0, zQ.jsx)(TQ.e, {
        label: XQ("touchSettings:actionButtons"),
        checked: sQ.touchActionButtons,
        onClick: QQ => {
          wQ.b.setClientEscMenuOptions({
            touchActionButtons: QQ
          })
        },
        circleInfoText: XQ("touchSettings:actionButtonsInfo"),
        note: WQ
      })
    }
  },
  9228: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => nX,
      f: () => eX
    });
    var wQ = XQ(1226),
      qQ = XQ(61),
      TQ = XQ(2061),
      zQ = XQ(2067),
      sQ = XQ(1081),
      FQ = XQ.n(sQ),
      PQ = XQ(1507),
      gQ = XQ(26),
      JQ = XQ(105),
      rQ = XQ(129),
      IQ = XQ(5349),
      jQ = XQ(2535),
      BQ = XQ(318),
      yQ = XQ(2071),
      VQ = XQ(2076),
      DQ = XQ(9235),
      pQ = XQ(9244),
      GQ = XQ(382),
      UQ = XQ(1145);
    const bQ = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var vQ = XQ(9246);
    var dQ = XQ(1532),
      HQ = XQ(1404),
      aQ = XQ(9255),
      lQ = XQ(1468),
      hQ = XQ(1094),
      iQ = XQ(9257),
      cQ = XQ(2563);
    const AQ = {
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
        ...Object.fromEntries(cQ.E.map((QQ => [QQ, "menu"])))
      },
      RQ = QQ => cQ.z.filter((WQ => AQ[WQ] === QQ)),
      EQ = new Set(RQ("cluster")),
      CQ = new Set(RQ("inventory")),
      uQ = QQ => "inventory" === QQ || CQ.has(QQ),
      LQ = QQ => {
        const WQ = AQ[QQ];
        return void 0 === WQ ? [] : [WQ, ...LQ(WQ)]
      },
      kQ = QQ => [QQ, ...LQ(QQ)],
      fQ = (QQ, WQ, XQ) => "shop" === QQ && WQ ? XQ("inventory") ? ["inventory"] : XQ("bag") ? [QQ, "bag"] : [QQ] : [QQ],
      SQ = new Map([
        ["cluster", EQ],
        ["inventory", CQ]
      ]),
      tQ = ["cluster"],
      oQ = [...tQ, ...cQ.z.filter((QQ => !tQ.includes(QQ) && !AQ[QQ]))],
      eQ = QQ => [QQ, ...RQ(QQ).flatMap(eQ)],
      nQ = oQ.flatMap(eQ).map((QQ => ({
        id: QQ,
        label: `hudLayout:${QQ}`,
        ...cQ.v[QQ],
        parent: AQ[QQ]
      }))),
      xQ = Object.fromEntries(nQ.map((QQ => [QQ.id, QQ]))),
      YQ = "data-hud-el";

    function NQ(QQ, WQ, XQ, wQ) {
      const qQ = XQ(function(QQ, WQ) {
          return "attack" !== QQ || WQ ? xQ[QQ].label : "hudLayout:attackContext"
        }(QQ, WQ)),
        TQ = wQ[QQ];
      return TQ ? XQ("hudLayout:slotWithKey", {
        slot: qQ,
        key: TQ
      }) : qQ
    }

    function ZQ(QQ, WQ, XQ, wQ) {
      return QQ.map((QQ => NQ(QQ, WQ, XQ, wQ))).join(", ")
    }

    function OQ(QQ) {
      let {
        className: WQ,
        keepPlace: XQ
      } = QQ;
      return XQ ? (0, UQ.jsx)("div", {
        className: FQ()(WQ, "Placeholder")
      }) : null
    }

    function KQ(QQ) {
      let {
        id: WQ,
        elements: XQ,
        actionButtons: qQ,
        keyNames: TQ,
        className: zQ,
        keepPlace: sQ,
        onHidden: FQ
      } = QQ;
      const {
        t: gQ
      } = (0, wQ.C)();
      if (!xQ[WQ].hide) return (0, UQ.jsx)(OQ, {
        className: zQ,
        keepPlace: sQ
      });
      const JQ = (0, cQ.s)(XQ, WQ);
      return (0, UQ.jsx)(PQ.T, {
        className: zQ,
        ariaLabel: gQ(JQ ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: NQ(WQ, qQ, gQ, TQ)
        }),
        pressed: !JQ,
        onClick: () => {
          FQ(WQ, !JQ)
        },
        children: (0, UQ.jsx)(hQ.d, {
          name: JQ ? "eye-slash" : "eye"
        })
      })
    }

    function mQ(QQ) {
      let {
        id: WQ,
        elements: XQ,
        actionButtons: qQ,
        keyNames: TQ,
        className: zQ,
        keepPlace: sQ,
        onlyWhenMoved: FQ,
        locked: gQ,
        onReset: JQ
      } = QQ;
      const {
        t: rQ
      } = (0, wQ.C)(), IQ = xQ[WQ], jQ = (0, cQ.J)(XQ[WQ]);
      return !IQ.move && !IQ.scale || FQ && jQ ? (0, UQ.jsx)(OQ, {
        className: zQ,
        keepPlace: sQ
      }) : (0, UQ.jsx)(PQ.T, {
        className: zQ,
        disabled: jQ || gQ,
        ariaLabel: rQ("hudLayout:resetElement", {
          name: NQ(WQ, qQ, rQ, TQ)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: WQ
        },
        onClick: QQ => {
          FQ && XW(QQ.currentTarget), JQ(WQ)
        },
        children: (0, UQ.jsx)(hQ.d, {
          name: "rotate-left"
        })
      })
    }

    function MQ(QQ) {
      let {
        id: WQ,
        actionButtons: XQ,
        keyNames: qQ,
        className: TQ,
        keepPlace: zQ,
        locked: sQ,
        lockable: FQ,
        onLocked: gQ
      } = QQ;
      const {
        t: JQ
      } = (0, wQ.C)();
      return FQ || sQ ? (0, UQ.jsx)(PQ.T, {
        className: TQ,
        ariaLabel: JQ(sQ ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: NQ(WQ, XQ, JQ, qQ)
        }),
        pressed: sQ,
        active: sQ,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${sQ?"unlock":"lock"}:${WQ}`
        },
        onClick: () => {
          gQ(WQ, !sQ)
        },
        children: (0, UQ.jsx)(hQ.d, {
          name: sQ ? "lock" : "lock-open"
        })
      }) : (0, UQ.jsx)(OQ, {
        className: TQ,
        keepPlace: zQ
      })
    }

    function QW(QQ) {
      let {
        className: WQ,
        open: XQ,
        name: qQ,
        onToggle: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, wQ.C)();
      return (0, UQ.jsx)(PQ.T, {
        className: WQ,
        ariaLabel: zQ(XQ ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: qQ
        }),
        pressed: XQ,
        analyticsClick: {
          id: "hud_layout.children",
          value: XQ ? "close" : "open"
        },
        onClick: () => {
          TQ(!XQ)
        },
        children: (0, UQ.jsx)(hQ.d, {
          name: XQ ? "angle-up" : "angle-down"
        })
      })
    }

    function WW(QQ, WQ) {
      var XQ;
      QQ.contains(document.activeElement) && WQ.focus({
        preventScroll: !0
      }), null === (XQ = (0, lQ.f)()) || void 0 === XQ || XQ.handOverPadFocus(QQ, WQ)
    }

    function XW(QQ) {
      const WQ = QQ.closest("[data-hud-row]"),
        XQ = null === WQ || void 0 === WQ ? void 0 : WQ.querySelector(".HudElementRowName");
      return !(!WQ || !XQ) && (WW(WQ, XQ), !0)
    }
    const wW = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function qW(QQ, WQ) {
      return "joystick" === QQ && !WQ
    }

    function TW() {
      const {
        t: QQ
      } = (0, wQ.C)();
      return (0, UQ.jsx)(PQ.T, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: QQ => {
          const WQ = QQ.currentTarget;
          if (!XW(WQ)) {
            const QQ = function(QQ) {
              var WQ, XQ;
              const wQ = [QQ.previousElementSibling, QQ.nextElementSibling].find((QQ => QQ instanceof HTMLElement && QQ.matches(wW)));
              return null !== (WQ = null !== wQ && void 0 !== wQ ? wQ : null === (XQ = QQ.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === XQ ? void 0 : XQ.querySelector(`:is(${wW}):not(.HudFixJoystickButton)`)) && void 0 !== WQ ? WQ : null
            }(WQ);
            QQ && WW(WQ, QQ)
          }
          gQ.b.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: QQ("hudLayout:fixJoystick")
      })
    }
    var zW = XQ(78),
      sW = XQ(1318),
      FW = XQ(3379),
      PW = XQ(2978),
      gW = XQ(2565);
    const JW = (QQ, WQ, XQ) => {
      const wQ = LQ(WQ).includes(QQ) ? QQ : LQ(QQ).includes(WQ) ? WQ : null;
      if (null === wQ || "joystick" === wQ) return !1;
      const qQ = wQ === QQ ? WQ : QQ;
      if ("menu" === wQ) return (0, gW.v)(qQ, XQ.hudElements[qQ]);
      if ("hotbar" !== wQ || !uQ(qQ)) return !0;
      if ((0, cQ.N)(XQ.hudElements[qQ]) || (0, cQ.N)(XQ.hudElements.inventory)) return !1;
      return !(XQ.hudLocked.includes(qQ) || XQ.hudLocked.includes("inventory")) || (0, cQ.J)(XQ.hudElements.hotbar)
    };
    var rW = XQ(2585),
      IW = XQ(3424),
      jW = XQ(9262);
    const BW = QQ => ({
      [YQ]: QQ
    });

    function yW(QQ) {
      let {
        id: WQ,
        slot: XQ,
        icon: wQ,
        label: TQ,
        hidden: zQ,
        className: sQ,
        face: PQ
      } = QQ;
      const gQ = (0, qQ.useRef)(null);
      return (0, qQ.useLayoutEffect)((() => {
        PQ && gQ.current && (0, jW.o)(gQ.current, PQ)
      }), [PQ]), (0, UQ.jsxs)("div", {
        className: FQ()("TouchKeyHit", `TouchSlot${XQ}`, sQ, {
          HudPreviewGhost: zQ.has(WQ)
        }),
        ...BW(WQ),
        children: [PQ && (0, UQ.jsx)("div", {
          ref: gQ,
          className: FQ()("TouchKey", {
            Labelled: PQ.classList.contains("Labelled")
          })
        }), !PQ && (0, UQ.jsxs)("div", {
          className: FQ()("TouchKey", {
            Labelled: void 0 !== TQ
          }),
          children: [wQ && (0, UQ.jsx)(hQ.d, {
            name: wQ
          }), void 0 !== TQ && (0, UQ.jsx)("span", {
            className: "TouchKeyLabel",
            children: TQ
          })]
        })]
      })
    }

    function VW(QQ) {
      let {
        item: WQ,
        selected: XQ
      } = QQ;
      const wQ = (0, qQ.useRef)(null);
      return (0, qQ.useLayoutEffect)((() => {
        wQ.current && (0, jW.o)(wQ.current, WQ)
      }), [WQ]), (0, UQ.jsx)("div", {
        ref: wQ,
        className: FQ()("InvenItem", {
          Selected: XQ
        })
      })
    }
    const DW = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      pW = QQ => void 0 === QQ ? {} : {
        style: {
          "--parked": QQ
        }
      };

    function GW(QQ) {
      let {
        id: WQ,
        hidden: XQ,
        parked: wQ,
        unslotted: qQ = !1
      } = QQ;
      return (0, UQ.jsx)("div", {
        className: FQ()("TopRightIcon", rW.n[WQ], {
          HudPreviewGhost: XQ.has(WQ),
          [gW.b]: void 0 !== wQ,
          [gW.e]: qQ
        }),
        ...pW(wQ),
        children: (0, UQ.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...BW(WQ),
          children: (0, UQ.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, UQ.jsx)(hQ.d, {
              name: DW[WQ]
            })
          })
        })
      })
    }

    function UW(QQ) {
      let {
        portraitPhone: WQ,
        icons: XQ,
        pinnedIcons: wQ,
        hidden: TQ,
        moved: zQ,
        trayState: sQ
      } = QQ;
      const PQ = WQ ? (0, gW.C)(XQ) : [],
        gQ = XQ.filter((QQ => "settings" === QQ)),
        JQ = XQ.filter((QQ => "settings" !== QQ && !PQ.includes(QQ))).reverse(),
        rQ = PQ.length > 0 && "gone" === sQ,
        IQ = [...gQ, ...rQ ? ["tray"] : [], ...JQ].filter((QQ => "tray" === QQ || TQ.has(QQ) && !zQ.has(QQ))),
        jQ = QQ => {
          const WQ = IQ.indexOf(QQ);
          return WQ < 0 ? void 0 : WQ
        },
        BQ = (QQ, WQ) => (0, UQ.jsx)(GW, {
          id: QQ,
          hidden: TQ,
          parked: WQ ? jQ(QQ) : void 0,
          unslotted: WQ && TQ.has(QQ) && zQ.has(QQ)
        }, QQ);
      return (0, UQ.jsxs)("div", {
        className: FQ()("TopRightIcons TouchInGame", {
          Column: WQ
        }),
        children: [gQ.map((QQ => BQ(QQ, !0))), PQ.length > 0 && (0, UQ.jsxs)("div", {
          className: FQ()("TopRightIcon TopRightTrayToggle Open", {
            [gW.b]: rQ
          }),
          ...pW(jQ("tray")),
          children: [(0, UQ.jsx)("div", {
            className: FQ()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== sQ
            }),
            children: (0, UQ.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, UQ.jsx)(hQ.d, {
                name: "ellipsis"
              })
            })
          }), (0, UQ.jsx)("div", {
            className: "TopRightTray",
            children: PQ.map((QQ => BQ(QQ, !1)))
          })]
        }), JQ.map((QQ => (0, UQ.jsxs)(qQ.Fragment, {
          children: ["perspective" === QQ && null !== wQ.rightOfCamera && (0, UQ.jsx)(bW, {
            icon: wQ.rightOfCamera
          }), BQ(QQ, !0)]
        }, QQ))), null !== wQ.leftEnd && (0, UQ.jsx)(bW, {
          icon: wQ.leftEnd
        })]
      })
    }

    function bW(QQ) {
      let {
        icon: WQ
      } = QQ;
      return (0, UQ.jsx)("div", {
        className: "TopRightIcon",
        children: (0, UQ.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, UQ.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, UQ.jsx)(hQ.d, {
              name: WQ
            })
          })
        })
      })
    }

    function vW(QQ) {
      let {
        next: WQ,
        hidden: XQ
      } = QQ;
      return (0, UQ.jsx)("div", {
        className: FQ()("HotBarArrow", WQ ? "Next" : "Previous", {
          HudPreviewGhost: XQ
        }),
        ...BW("arrows"),
        children: (0, UQ.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, UQ.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, UQ.jsx)(hQ.d, {
              name: WQ ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function dW() {
      return (0, UQ.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, UQ.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, UQ.jsx)("div", {
            className: "SocialBar",
            children: (0, UQ.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, UQ.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, UQ.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, UQ.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, UQ.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, UQ.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, UQ.jsx)(hQ.d, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, UQ.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, UQ.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, UQ.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, UQ.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, UQ.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, UQ.jsx)(hQ.d, {
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
    const HW = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      aW = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      lW = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      hW = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function iW(QQ) {
      let {
        presence: WQ,
        portraitPhone: XQ,
        hidden: qQ,
        actionButtons: TQ,
        joystickFixed: zQ,
        keysAbove: sQ,
        auraBar: PQ,
        trayState: gQ,
        moved: rQ
      } = QQ;
      const {
        t: IQ
      } = (0, wQ.C)(), {
        faces: jQ,
        items: BQ
      } = WQ, yQ = QQ => ({
        HudPreviewGhost: kQ(QQ).some((QQ => qQ.has(QQ)))
      });
      return (0, UQ.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, UQ.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, UQ.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, UQ.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, UQ.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, UQ.jsx)("div", {
              className: "InGameHeaderGameName",
              children: IQ("hudLayout:previewGameName")
            })]
          })
        }), (0, UQ.jsx)("div", {
          className: "TopLeftElements",
          children: (0, UQ.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, UQ.jsxs)("div", {
              className: "Chat",
              children: [(0, UQ.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [IQ("hudLayout:previewChatLine"), IQ("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), IQ("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((QQ => (0, UQ.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, UQ.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, UQ.jsx)("div", {
                      className: "IndividualText",
                      children: QQ
                    })
                  })
                }, QQ)))
              }), (0, UQ.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: FQ()("ChatIconWrapper SmallTextLight", yQ("chat")),
                ...BW("chat"),
                children: (0, UQ.jsx)(hQ.d, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, UQ.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, UQ.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, UQ.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, UQ.jsx)("div", {
                className: "TopRightIconsContainer",
                ...BW("menu"),
                children: (0, UQ.jsx)(UW, {
                  portraitPhone: XQ,
                  icons: WQ.rowIcons,
                  pinnedIcons: WQ.pinnedIcons,
                  hidden: qQ,
                  trayState: gQ,
                  moved: rQ
                })
              })
            }), JQ.featureFlags.useSocialFeatures && (0, UQ.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, UQ.jsx)(dW, {})
            })]
          })
        }), (0, UQ.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, UQ.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, UQ.jsxs)("div", {
            className: "TouchInteractKey",
            ...BW("interact"),
            children: [(0, UQ.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, UQ.jsx)(hQ.d, {
                name: "hand-back-point-up"
              })
            }), (0, UQ.jsx)("div", {
              children: IQ("hudLayout:previewInteract")
            })]
          })
        }), (0, UQ.jsx)("div", {
          className: "BottomCentre",
          children: (0, UQ.jsxs)("div", {
            className: "BottomElements",
            children: [(0, UQ.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, UQ.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, UQ.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...BW("hotbar"),
                children: (0, UQ.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, UQ.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, UQ.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, UQ.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, UQ.jsx)(hQ.d, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), PQ && (0, UQ.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, UQ.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, UQ.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, IW.g)("glint"),
                    alt: ""
                  }), (0, UQ.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, UQ.jsx)("div", {
                  className: "AuraBar",
                  children: (0, UQ.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, UQ.jsx)("div", {
                className: "HotBarRow",
                children: (0, UQ.jsx)("div", {
                  className: FQ()("HotBarContainer Touch", {
                    KeysAbove: sQ
                  }),
                  children: (0, UQ.jsxs)("div", {
                    className: "HotBar",
                    ...BW("hotbar"),
                    children: [(0, UQ.jsxs)("div", {
                      className: FQ()("TouchInventoryKeys", {
                        NoAuraBar: !PQ
                      }),
                      children: [(0, UQ.jsx)("div", {
                        className: FQ()("TouchInventoryKey ShopKey", yQ("shop"), {
                          Hidden: !WQ.shop
                        }),
                        ...BW("shop"),
                        children: (0, UQ.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, UQ.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, UQ.jsx)(hQ.d, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, UQ.jsx)("div", {
                        className: FQ()("TouchInventoryKey BagKey", yQ("bag"), {
                          Hidden: !WQ.bag
                        }),
                        ...BW("bag"),
                        children: (0, UQ.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, UQ.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, UQ.jsx)(hQ.d, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, UQ.jsx)(vW, {
                      next: !1,
                      hidden: qQ.has("arrows")
                    }), (0, UQ.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== BQ && BQ.map(((QQ, WQ) => (0, UQ.jsx)(VW, {
                        item: QQ,
                        selected: QQ.classList.contains("Selected")
                      }, WQ))), null === BQ && lW.map((QQ => {
                        const WQ = hW[QQ];
                        return (0, UQ.jsx)("div", {
                          className: FQ()("InvenItem", {
                            Selected: 0 === QQ
                          }),
                          children: WQ && (0, UQ.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, UQ.jsx)(hQ.d, {
                              name: WQ
                            })
                          })
                        }, QQ)
                      }))]
                    }), (0, UQ.jsx)(vW, {
                      next: !0,
                      hidden: qQ.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, UQ.jsx)("div", {
              className: "BottomRightElements",
              children: (0, UQ.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== jQ && jW.j.map((QQ => {
                  const WQ = jQ[QQ];
                  return WQ && (0, UQ.jsx)(yW, {
                    id: jW.f[QQ],
                    slot: QQ,
                    face: WQ,
                    className: HW[QQ],
                    hidden: qQ
                  }, QQ)
                })), (0, jW.r)(WQ, TQ).map((QQ => (0, UQ.jsx)(yW, {
                  id: jW.f[QQ],
                  slot: QQ,
                  icon: aW[QQ].icon,
                  label: IQ(aW[QQ].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: qQ
                }, QQ))), null === jQ && (0, UQ.jsxs)(UQ.Fragment, {
                  children: [(0, UQ.jsx)(yW, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: qQ
                  }), (0, UQ.jsx)(yW, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: qQ
                  }), TQ && (0, UQ.jsxs)(UQ.Fragment, {
                    children: [(0, UQ.jsx)(yW, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: qQ
                    }), (0, UQ.jsx)(yW, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: qQ
                    })]
                  }), (0, jW.m)(TQ).map((QQ => (0, UQ.jsx)(yW, {
                    id: jW.f[QQ],
                    slot: QQ,
                    icon: aW[QQ].icon,
                    label: IQ(aW[QQ].labelKey),
                    hidden: qQ
                  }, QQ))), (0, UQ.jsx)(yW, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: qQ
                  })]
                })]
              })
            })]
          })
        }), (0, UQ.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, UQ.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, UQ.jsxs)("div", {
              className: FQ()("Joystick Resting HudPreviewJoystick", {
                Floating: !zQ
              }),
              ...BW("joystick"),
              children: [(0, UQ.jsx)("div", {
                className: "JoystickBase"
              }), (0, UQ.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), WQ.sprint && (0, UQ.jsx)("div", {
            className: FQ()("TouchSprintHit", yQ("sprint"), {
              AtHome: !zQ
            }),
            ...BW("sprint"),
            children: (0, UQ.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, UQ.jsx)(hQ.d, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function cW() {
      const [QQ, WQ] = (0, qQ.useState)({}), XQ = (0, qQ.useCallback)((QQ => {
        WQ((WQ => [...new Set([...Object.keys(WQ), ...Object.keys(QQ)])].every((XQ => WQ[XQ] === QQ[XQ])) ? WQ : QQ))
      }), []);
      return [QQ, XQ]
    }
    const AW = .05;

    function RW(QQ) {
      var WQ;
      let {
        selected: XQ,
        layout: qQ,
        actionButtons: TQ,
        keyNames: zQ,
        overlaps: sQ,
        scaleCaps: gQ,
        joystickFixed: JQ,
        onScale: rQ,
        onHidden: IQ,
        onReset: jQ,
        locked: BQ,
        lockable: yQ,
        onLocked: VQ,
        extra: DQ
      } = QQ;
      const {
        t: pQ
      } = (0, wQ.C)(), GQ = XQ ? xQ[XQ] : null, bQ = null !== XQ && BQ.has(XQ), vQ = (XQ && qQ.hudElements[XQ] || cQ.l)[2], dQ = null !== (WQ = XQ && gQ[XQ]) && void 0 !== WQ ? WQ : cQ.h, HQ = QQ => {
        XQ && rQ(XQ, Math.min(dQ, Math.round(100 * (vQ + .1 * QQ)) / 100))
      };
      return (0, UQ.jsxs)(UQ.Fragment, {
        children: [(0, UQ.jsxs)("div", {
          className: FQ()("HudQuickName SmallTextBold", {
            Overlap: sQ.length > 0
          }),
          children: [sQ.length > 0 && (0, UQ.jsx)(hQ.d, {
            name: "triangle-exclamation"
          }), GQ ? NQ(GQ.id, TQ, pQ, zQ) : pQ("hudLayout:fullScreenHint"), sQ.length > 0 && (0, UQ.jsx)("span", {
            className: "HudQuickOverlap",
            children: pQ("hudLayout:overlapsShort", {
              names: ZQ(sQ, TQ, pQ, zQ)
            })
          })]
        }), (null === GQ || void 0 === GQ ? void 0 : GQ.scale) && (0, UQ.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, UQ.jsx)(PQ.T, {
            disabled: bQ || vQ <= cQ.i,
            ariaLabel: pQ("hudLayout:smaller"),
            onClick: () => {
              HQ(-1)
            },
            children: (0, UQ.jsx)(hQ.d, {
              name: "minus"
            })
          }), (0, UQ.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*vQ)}%`
          }), (0, UQ.jsx)(PQ.T, {
            disabled: bQ || vQ >= dQ,
            ariaLabel: pQ("hudLayout:larger"),
            onClick: () => {
              HQ(1)
            },
            children: (0, UQ.jsx)(hQ.d, {
              name: "plus"
            })
          })]
        }), (GQ || DQ) && (0, UQ.jsxs)("div", {
          className: "HudQuickActions",
          children: [GQ && (0, UQ.jsxs)(UQ.Fragment, {
            children: [(0, UQ.jsx)(MQ, {
              id: GQ.id,
              actionButtons: TQ,
              keyNames: zQ,
              locked: bQ,
              lockable: yQ(GQ.id),
              onLocked: VQ
            }), (0, UQ.jsx)(KQ, {
              id: GQ.id,
              elements: qQ.hudElements,
              actionButtons: TQ,
              keyNames: zQ,
              onHidden: IQ
            }), (0, UQ.jsx)(mQ, {
              id: GQ.id,
              elements: qQ.hudElements,
              actionButtons: TQ,
              keyNames: zQ,
              locked: bQ,
              onReset: jQ
            }), qW(GQ.id, JQ) && (0, UQ.jsx)(TW, {})]
          }), DQ]
        })]
      })
    }
    var EW = XQ(1154),
      CW = XQ(4730);
    const uW = "HudPreviewDoc",
      LW = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      kW = new Set([uW, ...Object.values(LW)]),
      fW = new Set(cQ.z.map(rW.y)),
      SW = new Set(rW.k),
      tW = 'style, link[rel="stylesheet"]';

    function oW(QQ, WQ, XQ, wQ) {
      const qQ = new Map,
        TQ = new Set,
        zQ = new URL(QQ.baseURI).origin,
        sQ = WQ => {
          var XQ;
          if ("LINK" !== WQ.nodeName) return !0;
          const wQ = null === (XQ = WQ.getAttribute("href")) || void 0 === XQ ? void 0 : XQ.trim();
          if (!wQ) return !1;
          try {
            return new URL(wQ, QQ.baseURI).origin === zQ
          } catch {
            return !1
          }
        };
      let FQ = null;
      const PQ = () => {
          FQ !== (0 === TQ.size) && (FQ = 0 === TQ.size, null === wQ || void 0 === wQ || wQ(FQ))
        },
        gQ = QQ => {
          const WQ = QQ.cloneNode(!0);
          if ("LINK" === WQ.tagName) {
            TQ.add(WQ);
            const QQ = () => {
              TQ.delete(WQ), PQ()
            };
            WQ.addEventListener("load", QQ), WQ.addEventListener("error", QQ), XQ && WQ.addEventListener("load", XQ)
          }
          return WQ
        },
        JQ = () => {
          const wQ = function(QQ) {
              const WQ = [...QQ.body.children].filter((QQ => QQ.matches(tW)));
              return [...QQ.head.querySelectorAll(tW), ...WQ]
            }(QQ).filter(sQ),
            zQ = new Set(wQ);
          for (const [QQ, WQ] of qQ) zQ.has(QQ) || (WQ.remove(), qQ.delete(QQ), TQ.delete(WQ));
          let FQ = null;
          for (let QQ = wQ.length - 1; QQ >= 0; QQ--) {
            const TQ = wQ[QQ];
            let zQ = qQ.get(TQ);
            zQ ? "STYLE" === TQ.tagName && zQ.textContent !== TQ.textContent && (zQ.textContent = TQ.textContent, null === XQ || void 0 === XQ || XQ()) : (zQ = gQ(TQ), qQ.set(TQ, zQ), WQ.head.insertBefore(zQ, FQ)), FQ = zQ
          }
          PQ()
        };
      JQ();
      const rQ = new MutationObserver(JQ);
      return rQ.observe(QQ.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), rQ.observe(QQ.body, {
        childList: !0
      }), () => {
        rQ.disconnect()
      }
    }

    function eW(QQ, WQ, XQ) {
      let {
        keysAbove: wQ
      } = XQ;
      const qQ = [...QQ.documentElement.classList].filter((QQ => !kW.has(QQ) && !SW.has(QQ))),
        TQ = [...WQ.documentElement.classList].filter((QQ => SW.has(QQ))),
        zQ = [uW, LW.hotbar, LW.hasShop, LW.hasBag];
      wQ && zQ.push(LW.keysAbove), WQ.documentElement.className = [...qQ, ...zQ, ...TQ].join(" ")
    }
    const nW = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function xW(QQ, WQ, XQ, wQ, qQ) {
      const TQ = (0, cQ.A)(XQ, wQ, "joystick"),
        zQ = (0, rW.z)((0, rW.K)(XQ, wQ, qQ), wQ),
        sQ = zQ.classes.filter((QQ => !fW.has(QQ))),
        FQ = WQ.documentElement,
        PQ = XQ.hudLayouts[wQ].hudSafe,
        gQ = (0, rW.E)(PQ, window.innerWidth, window.innerHeight, YW(), PQ ? (0, rW.M)(WQ) : 0);
      (0, rW.N)({
        ...zQ,
        classes: sQ
      }, {
        vars: FQ,
        safe: FQ,
        classes: FQ
      }), FQ.style.setProperty("--preview-joystick-shift-left", `${gQ[3]}px`), FQ.style.setProperty("--preview-joystick-shift-bottom", `${gQ[2]}px`), FQ.style.setProperty("--preview-joystick-scale", String(TQ[2])), (0, CW.d)(FQ, WQ, XQ, wQ);
      for (const JQ of nW) FQ.style.setProperty(JQ, QQ.documentElement.style.getPropertyValue(JQ) || "0px")
    }

    function YW() {
      return (0, rW.H)(gQ.b.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function NW(QQ) {
      return (0, rW.t)(YW(), (0, rW.M)(QQ))
    }

    function ZW(QQ, WQ, XQ) {
      const wQ = QQ.documentElement.style,
        qQ = (0, rW.F)(WQ),
        TQ = wQ.getPropertyValue(qQ);
      try {
        return XQ((QQ => {
          wQ.setProperty(qQ, String(QQ))
        }))
      } finally {
        "" === TQ ? wQ.removeProperty(qQ) : wQ.setProperty(qQ, TQ)
      }
    }

    function OW(QQ, WQ) {
      const [XQ, wQ] = ZW(QQ, "hotbar", (WQ => {
        const XQ = XQ => {
          var wQ, qQ;
          return WQ(XQ), null !== (wQ = null === (qQ = QQ.querySelector(".HotBarGameItemsContainer")) || void 0 === qQ ? void 0 : qQ.getBoundingClientRect().width) && void 0 !== wQ ? wQ : 0
        };
        return [XQ(1), XQ(cQ.h)]
      }));
      return XQ <= 0 ? cQ.h : Math.min(cQ.h, Math.max(1, Math.floor(wQ / XQ / WQ + 1e-6) * WQ))
    }
    const KW = 3,
      mW = .5,
      MW = QQ => QQ.right - QQ.left;
    const QX = (QQ, WQ) => Math.abs((0, iQ.b)(QQ).x - (0, iQ.b)(WQ).x) + Math.abs((0, iQ.b)(QQ).y - (0, iQ.b)(WQ).y) + Math.abs(MW(QQ) - MW(WQ));

    function WX(QQ, WQ, XQ, wQ, qQ) {
      let {
        canKeep: TQ = () => !0,
        passes: zQ = KW,
        before: sQ
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const FQ = WQ.hudLayouts[XQ].hudLocked.filter(TQ);
      if (0 === FQ.length) return WQ;
      const PQ = [...EQ].filter((wQ => !FQ.includes(wQ) && (0, cQ.A)(QQ, XQ, wQ).join() === (0, cQ.A)(WQ, XQ, wQ).join())),
        gQ = QQ => {
          const WQ = (0, iQ.v)(PQ.flatMap((WQ => QQ[WQ] ? [QQ[WQ]] : [])));
          return {
            ...QQ,
            cluster: null !== WQ && void 0 !== WQ ? WQ : void 0
          }
        };
      let JQ = null;
      const rQ = QQ => {
          JQ = QQ;
          const WQ = qQ(QQ);
          return WQ && {
            ...WQ,
            boxes: gQ(WQ.boxes)
          }
        },
        IQ = sQ ? {
          ...sQ,
          boxes: gQ(sQ.boxes)
        } : rQ(QQ),
        jQ = IQ && rQ(WQ);
      if (!IQ || !jQ) return WQ;
      const BQ = IQ.boxes;
      let yQ = jQ.boxes;
      const VQ = IQ.keysAbove !== jQ.keysAbove,
        DQ = VQ || Boolean(IQ.shopAlone) !== Boolean(jQ.shopAlone),
        pQ = new Set(FQ.filter((QQ => !uQ(QQ) || !("bag" === QQ ? VQ : DQ))));
      let GQ = WQ;
      for (let vQ = 0; vQ < zQ && pQ.size > 0; vQ++) {
        var UQ, bQ;
        const QQ = new Map;
        for (const WQ of pQ) {
          const qQ = BQ[WQ],
            TQ = yQ[WQ],
            zQ = qQ && TQ ? XX(WQ, (0, cQ.A)(GQ, XQ, WQ), qQ, TQ, wQ) : null;
          zQ ? QQ.set(WQ, zQ) : pQ.delete(WQ)
        }
        if (0 === QQ.size) break;
        let qQ = GQ;
        for (const [WQ, wQ] of QQ) qQ = (0, cQ.gb)(qQ, XQ, WQ, wQ);
        const TQ = null === (UQ = rQ(qQ)) || void 0 === UQ ? void 0 : UQ.boxes;
        if (!TQ) return WQ;
        let zQ = GQ;
        for (const [WQ, wQ] of QQ) {
          const QQ = TQ[WQ];
          QQ && QX(BQ[WQ], QQ) < QX(BQ[WQ], yQ[WQ]) - mW ? zQ = (0, cQ.gb)(zQ, XQ, WQ, wQ) : pQ.delete(WQ)
        }
        if (zQ === GQ) break;
        const sQ = [...QQ.keys()].every((QQ => pQ.has(QQ)));
        GQ = sQ ? qQ : zQ;
        const FQ = sQ ? TQ : null === (bQ = rQ(GQ)) || void 0 === bQ ? void 0 : bQ.boxes;
        if (!FQ) return WQ;
        yQ = FQ
      }
      return JQ !== GQ && qQ(GQ), GQ
    }

    function XX(QQ, WQ, XQ, wQ, qQ) {
      let [TQ, zQ, sQ] = WQ;
      const FQ = cQ.v[QQ],
        PQ = {};
      FQ.scale && MW(wQ) > 0 && Math.abs(MW(XQ) - MW(wQ)) > mW && (PQ.scale = Math.max(cQ.i, Math.min(cQ.h, sQ * MW(XQ) / MW(wQ))));
      const gQ = (0, iQ.b)(XQ).x - (0, iQ.b)(wQ).x,
        JQ = (0, iQ.b)(XQ).y - (0, iQ.b)(wQ).y;
      return FQ.move && (Math.abs(gQ) > mW || Math.abs(JQ) > mW) && (PQ.dx = TQ + gQ / qQ.width, PQ.dy = zQ + JQ / qQ.height), void 0 === PQ.scale && void 0 === PQ.dx ? null : PQ
    }
    let wX = 0;

    function qX() {
      return wX > 0
    }
    const TX = QQ => 0 === QQ.dx && 0 === QQ.dy,
      zX = .001,
      sX = QQ => Math.abs(QQ.dx) >= 5e-4 || Math.abs(QQ.dy) >= 5e-4 ? QQ : {
        dx: QQ.dx,
        dy: QQ.dy < 0 ? -.001 : zX
      };

    function FX(QQ) {
      let {
        preview: WQ,
        stageRef: XQ,
        ringRef: wQ,
        centreLineRef: TQ,
        snapCentre: zQ,
        ready: sQ,
        measure: FQ,
        k: PQ,
        viewport: gQ,
        boxes: JQ,
        pieces: rQ,
        selected: IQ,
        insets: jQ,
        layout: BQ,
        canMove: yQ,
        onSelect: VQ,
        onMove: DQ
      } = QQ;
      const pQ = (0, qQ.useRef)(null),
        GQ = (0, qQ.useCallback)((() => null !== pQ.current), []),
        UQ = (QQ, WQ) => {
          if (!WQ) return null;
          const XQ = (0, iQ.b)(QQ.origin),
            wQ = (0, iQ.b)(WQ),
            qQ = (QQ.to.dx - QQ.from.dx) * gQ.width,
            TQ = (QQ.to.dy - QQ.from.dy) * gQ.height,
            zQ = WQ.right - WQ.left,
            sQ = WQ.bottom - WQ.top;
          return {
            skew: {
              x: wQ.x - XQ.x - qQ,
              y: wQ.y - XQ.y - TQ
            },
            box: {
              left: XQ.x - zQ / 2,
              top: XQ.y - sQ / 2,
              right: XQ.x + zQ / 2,
              bottom: XQ.y + sQ / 2
            }
          }
        },
        bQ = (QQ, XQ) => {
          var qQ;
          const zQ = pQ.current;
          if (!zQ || zQ.pointerId !== QQ.pointerId) return;
          pQ.current = null, null === (qQ = TQ.current) || void 0 === qQ || qQ.classList.remove("Shown", "Snapped");
          const sQ = wQ.current;
          if (sQ && null !== zQ.ringStyle && sQ.setAttribute("style", zQ.ringStyle), XQ && zQ.moved) {
            const QQ = TX(zQ.to) ? null : FQ(zQ.id),
              WQ = QQ ? (0, iQ.u)(QQ, (0, iQ.t)(gQ.width, gQ.height, jQ)) : {
                x: 0,
                y: 0
              },
              XQ = {
                dx: zQ.to.dx + WQ.x / gQ.width,
                dy: zQ.to.dy + WQ.y / gQ.height
              },
              wQ = TX(zQ.to) ? XQ : sX(XQ);
            DQ(zQ.id, wQ.dx, wQ.dy)
          } else WQ(zQ.id, null), XQ && zQ.tapPick && VQ(zQ.tapPick)
        };
      return {
        busy: GQ,
        handlers: {
          onPointerDown: QQ => {
            var WQ;
            if (!sQ || pQ.current || !QQ.target.closest(".HudPreviewHandle")) return;
            const wQ = XQ.current.getBoundingClientRect(),
              qQ = {
                x: (QQ.clientX - wQ.left) / PQ,
                y: (QQ.clientY - wQ.top) / PQ
              },
              TQ = (0, iQ.r)(qQ, rQ, 40 / PQ),
              zQ = null !== IQ ? SQ.get(IQ) : void 0,
              FQ = void 0 !== zQ && null !== (0, iQ.r)(qQ, rQ.filter((QQ => {
                let {
                  id: WQ
                } = QQ;
                return zQ.has(WQ)
              })), 40 / PQ),
              gQ = "menu" === IQ && void 0 !== JQ.menu && (0, iQ.c)(JQ.menu, qQ) && ("menu" === TQ || null !== TQ && (0, gW.v)(TQ, BQ.hudElements[TQ])),
              jQ = FQ ? IQ : gQ ? "menu" : null,
              DQ = null !== jQ,
              GQ = null !== jQ && void 0 !== jQ ? jQ : TQ;
            if (!GQ) return;
            if (function(QQ) {
                wX++;
                const WQ = XQ => {
                  XQ.pointerId === QQ && (wX = Math.max(0, wX - 1), window.removeEventListener("pointerup", WQ, !0), window.removeEventListener("pointercancel", WQ, !0))
                };
                window.addEventListener("pointerup", WQ, !0), window.addEventListener("pointercancel", WQ, !0)
              }(QQ.pointerId), !yQ(GQ)) return void VQ(DQ && TQ ? TQ : GQ);
            VQ(GQ);
            const [UQ, bQ] = null !== (WQ = BQ.hudElements[GQ]) && void 0 !== WQ ? WQ : [0, 0], vQ = {
              dx: UQ,
              dy: bQ
            }, dQ = {
              skew: {
                x: 0,
                y: 0
              },
              box: JQ[GQ]
            };
            pQ.current = {
              id: GQ,
              pointerId: QQ.pointerId,
              startX: QQ.clientX,
              startY: QQ.clientY,
              origin: JQ[GQ],
              from: vQ,
              to: vQ,
              moved: !1,
              home: TX(vQ) ? {
                centre: (0, iQ.b)(JQ[GQ]),
                anchor: dQ
              } : null,
              away: TX(vQ) ? null : dQ,
              anchor: dQ,
              ringStyle: null,
              tapPick: DQ ? TQ : null
            }, QQ.currentTarget.setPointerCapture(QQ.pointerId)
          },
          onPointerMove: QQ => {
            const XQ = pQ.current;
            if (!XQ || XQ.pointerId !== QQ.pointerId) return;
            const qQ = QQ.clientX - XQ.startX,
              sQ = QQ.clientY - XQ.startY;
            if (!XQ.moved && Math.hypot(qQ, sQ) < 5) return;
            const JQ = !XQ.moved;
            var rQ, IQ;
            (XQ.moved = !0, JQ) && (XQ.ringStyle = null !== (rQ = null === (IQ = wQ.current) || void 0 === IQ ? void 0 : IQ.getAttribute("style")) && void 0 !== rQ ? rQ : null);
            const BQ = (0, iQ.t)(gQ.width, gQ.height, jQ);
            if (!XQ.home) {
              var yQ;
              XQ.to = {
                dx: 0,
                dy: 0
              }, WQ(XQ.id, XQ.to);
              const QQ = FQ(XQ.id),
                wQ = null !== (yQ = UQ(XQ, QQ)) && void 0 !== yQ ? yQ : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: XQ.origin
                },
                qQ = (0, iQ.b)(XQ.origin);
              XQ.home = {
                centre: QQ ? (0, iQ.b)(QQ) : {
                  x: qQ.x - XQ.from.dx * gQ.width,
                  y: qQ.y - XQ.from.dy * gQ.height
                },
                anchor: wQ
              }
            }
            const VQ = XQ.home;
            let DQ = !1;
            const GQ = QQ => {
                DQ = !1;
                let wQ = (0, iQ.k)(QQ.box, qQ / PQ, sQ / PQ, BQ);
                const TQ = gQ.width / 2;
                if (zQ && Math.abs((0, iQ.b)(XQ.origin).x + wQ.x - TQ) <= 8 / PQ) {
                  const WQ = TQ - (0, iQ.b)(XQ.origin).x,
                    qQ = (0, iQ.k)(QQ.box, WQ, wQ.y, BQ);
                  DQ = Math.abs(qQ.x - WQ) < .01, DQ && (wQ = qQ)
                }
                const FQ = (0, iQ.p)(XQ.from, wQ.x - QQ.skew.x, wQ.y - QQ.skew.y, gQ.width, gQ.height);
                XQ.to = sX(FQ), XQ.anchor = QQ, WQ(XQ.id, XQ.to)
              },
              bQ = (0, iQ.k)(VQ.anchor.box, qQ / PQ, sQ / PQ, BQ),
              vQ = TQ.current,
              dQ = (0, iQ.b)(XQ.origin),
              HQ = ((0, cQ.Q)(XQ.id) ? 20 : 6) / PQ;
            if (Math.abs(dQ.x + bQ.x - VQ.centre.x) <= HQ && Math.abs(dQ.y + bQ.y - VQ.centre.y) <= HQ) XQ.to = {
              dx: 0,
              dy: 0
            }, XQ.anchor = VQ.anchor, DQ = zQ && Math.abs(VQ.centre.x - gQ.width / 2) < 1, WQ(XQ.id, XQ.to);
            else if (XQ.away) GQ(XQ.away);
            else {
              var aQ;
              GQ(VQ.anchor), XQ.away = null !== (aQ = UQ(XQ, FQ(XQ.id))) && void 0 !== aQ ? aQ : VQ.anchor, GQ(XQ.away)
            }
            null === vQ || void 0 === vQ || vQ.classList.add("Shown"), null === vQ || void 0 === vQ || vQ.classList.toggle("Snapped", DQ), (QQ => {
              const WQ = wQ.current;
              if (WQ) {
                const {
                  skew: XQ,
                  box: wQ
                } = QQ.anchor;
                WQ.style.left = wQ.left * PQ + "px", WQ.style.top = wQ.top * PQ + "px", WQ.style.width = (wQ.right - wQ.left) * PQ + "px", WQ.style.height = (wQ.bottom - wQ.top) * PQ + "px", WQ.style.translate = `${((QQ.to.dx-QQ.from.dx)*gQ.width+XQ.x)*PQ}px ${((QQ.to.dy-QQ.from.dy)*gQ.height+XQ.y)*PQ}px`
              }
            })(XQ)
          },
          onPointerUp: QQ => {
            bQ(QQ, !0)
          },
          onPointerCancel: QQ => {
            bQ(QQ, !1)
          }
        }
      }
    }
    var PX = XQ(9268);

    function gX(QQ, WQ) {
      return Object.keys(QQ).filter((QQ => QQ !== WQ)).map((WQ => QQ[WQ]))
    }

    function JX(QQ) {
      return QQ.map((QQ => {
        let {
          id: WQ,
          box: XQ
        } = QQ;
        return `${WQ}:${XQ.left},${XQ.top},${XQ.right},${XQ.bottom}`
      })).join(";")
    }

    function rX(QQ) {
      const WQ = [],
        XQ = WQ => (0, cQ.Q)(WQ) && !QQ.documentElement.classList.contains((0, rW.A)(WQ));
      for (const sQ of QQ.querySelectorAll(`[${YQ}]`)) {
        const QQ = XQ(sQ.getAttribute(YQ)) ? sQ.querySelector(".ScaleOnHover") : null,
          wQ = (null !== QQ && void 0 !== QQ ? QQ : sQ).getBoundingClientRect();
        (wQ.width > 0 || wQ.height > 0) && WQ.push({
          id: sQ.getAttribute(YQ),
          box: (0, iQ.f)(wQ)
        })
      }
      const wQ = QQ => (0, iQ.v)(WQ.filter((WQ => {
          let {
            id: XQ
          } = WQ;
          return QQ(XQ)
        })).map((QQ => {
          let {
            box: WQ
          } = QQ;
          return WQ
        }))),
        qQ = {};
      for (const sQ of new Set(WQ.map((QQ => QQ.id)))) qQ[sQ] = wQ((QQ => QQ === sQ));
      for (const [sQ, FQ] of SQ) {
        const QQ = wQ((QQ => FQ.has(QQ)));
        QQ && (qQ[sQ] = QQ)
      }
      const TQ = QQ.querySelector(".TouchInventoryKeys"),
        zQ = TQ ? (0, iQ.f)(TQ.getBoundingClientRect()) : null;
      return {
        boxes: qQ,
        pieces: WQ,
        pairHome: zQ
      }
    }

    function IX(QQ, WQ, XQ) {
      const wQ = WQ.right - WQ.left,
        qQ = WQ.bottom - WQ.top;
      return ZW(QQ, "cluster", (WQ => {
        const TQ = XQ => {
            WQ(XQ);
            const wQ = [...QQ.querySelectorAll(`[${YQ}]:not(.HudPreviewGhost)`)].filter((QQ => EQ.has(QQ.getAttribute(YQ)))).map((QQ => (0, iQ.f)(QQ.getBoundingClientRect()))),
              qQ = (0, iQ.v)(wQ);
            return qQ ? {
              w: qQ.right - qQ.left,
              h: qQ.bottom - qQ.top
            } : null
          },
          zQ = QQ => !QQ || QQ.w <= wQ && QQ.h <= qQ,
          sQ = TQ(1),
          FQ = TQ(cQ.h);
        if (!sQ || zQ(FQ)) return cQ.h;
        const PQ = (QQ, WQ, XQ) => WQ > QQ ? 1 + (XQ - QQ) * (cQ.h - 1) / (WQ - QQ) : cQ.h;
        let gQ = Math.floor(Math.min(cQ.h, PQ(sQ.w, FQ.w, wQ), PQ(sQ.h, FQ.h, qQ)) / XQ + 1e-6) * XQ;
        for (; gQ > 1 && !zQ(TQ(gQ));) gQ = Math.round(100 * (gQ - XQ)) / 100;
        return Math.max(1, gQ)
      }))
    }

    function jX(QQ) {
      eW(document, QQ, {
        keysAbove: !1
      });
      const WQ = parseFloat(getComputedStyle(QQ.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        XQ = Number.isFinite(WQ) && WQ < 0;
      return eW(document, QQ, {
        keysAbove: XQ
      }), (0, PX.b)(QQ), XQ
    }

    function BX(QQ) {
      const WQ = QQ.querySelector(".TouchInventoryKey.ShopKey");
      return null !== WQ && "1" === getComputedStyle(WQ).getPropertyValue("--touch-shop-above").trim()
    }

    function yX(QQ, WQ) {
      let {
        layout: XQ,
        orientation: wQ,
        viewport: TQ,
        replicaKey: zQ,
        joystickFixed: sQ,
        busy: FQ
      } = WQ;
      const [PQ, gQ] = (0, qQ.useState)(null), [JQ, rQ] = (0, qQ.useState)({
        boxes: {},
        pieces: []
      }), [IQ, jQ] = (0, qQ.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [BQ, yQ] = (0, qQ.useState)(!1), [VQ, DQ] = (0, qQ.useState)(!1), [pQ, GQ] = (0, qQ.useState)(!1), UQ = (0, qQ.useCallback)((QQ => {
        DQ(QQ), QQ && GQ(!0)
      }), []), bQ = XQ.hudLayouts[wQ].hudSafe;
      (0, qQ.useLayoutEffect)((() => {
        const WQ = QQ.current.contentDocument;
        WQ.open(), WQ.write("<!DOCTYPE html><html><head></head><body></body></html>"), WQ.close(), gQ(WQ)
      }), [QQ]);
      const vQ = (0, qQ.useCallback)((() => {
          PQ && ((0, gW.x)(PQ), rQ(rX(PQ)), jQ(function(QQ, WQ) {
            const XQ = NW(QQ),
              [wQ, qQ, TQ, zQ] = WQ ? (0, rW.w)(WQ, window.innerWidth, window.innerHeight, XQ) : XQ;
            return {
              top: wQ,
              right: qQ,
              bottom: TQ,
              left: zQ
            }
          }(PQ, bQ)))
        }), [PQ, bQ]),
        dQ = (0, qQ.useCallback)((() => {
          PQ && yQ(jX(PQ))
        }), [PQ]),
        HQ = (0, qQ.useRef)((() => {}));
      return HQ.current = () => {
        dQ(), FQ() || vQ()
      }, (0, qQ.useLayoutEffect)((() => {
        if (PQ) return oW(document, PQ, (() => {
          HQ.current()
        }), UQ)
      }), [PQ, UQ]), (0, qQ.useLayoutEffect)(dQ, [dQ, TQ]), (0, qQ.useLayoutEffect)((() => {
        PQ && (eW(document, PQ, {
          keysAbove: BQ
        }), xW(document, PQ, XQ, wQ, sQ), dQ(), vQ())
      }), [PQ, XQ, wQ, BQ, zQ, sQ, TQ, vQ, dQ]), (0, qQ.useEffect)((() => {
        var QQ;
        if (!PQ) return;
        const WQ = new ResizeObserver((() => {
          FQ() || vQ()
        }));
        for (const XQ of PQ.querySelectorAll(`[${YQ}]`)) WQ.observe(XQ);
        return null === (QQ = PQ.fonts) || void 0 === QQ || QQ.ready.then(vQ), () => {
          WQ.disconnect()
        }
      }), [PQ, vQ, FQ, zQ]), {
        doc: PQ,
        boxes: JQ.boxes,
        pieces: JQ.pieces,
        insets: IQ,
        keysAbove: BQ,
        ready: VQ,
        settled: pQ
      }
    }
    const VX = ["Above", "Below", "Left", "Right"];

    function DX(QQ, WQ, XQ, wQ, qQ) {
      const TQ = XQ[QQ],
        zQ = (TQ.left + TQ.right) / 2,
        sQ = (TQ.top + TQ.bottom) / 2,
        FQ = (7.5 * WQ.length + 14) / wQ,
        PQ = 18 / wQ,
        gQ = {
          Above: {
            left: zQ - FQ / 2,
            top: TQ.top - PQ,
            right: zQ + FQ / 2,
            bottom: TQ.top
          },
          Below: {
            left: zQ - FQ / 2,
            top: TQ.bottom,
            right: zQ + FQ / 2,
            bottom: TQ.bottom + PQ
          },
          Left: {
            left: TQ.left - FQ,
            top: sQ - PQ / 2,
            right: TQ.left,
            bottom: sQ + PQ / 2
          },
          Right: {
            left: TQ.right,
            top: sQ - PQ / 2,
            right: TQ.right + FQ,
            bottom: sQ + PQ / 2
          }
        },
        JQ = gX(XQ, QQ),
        rQ = {
          left: 0,
          top: 0,
          right: qQ.width,
          bottom: qQ.height
        };
      return VX[(0, iQ.m)(VX.map((QQ => gQ[QQ])), JQ, {
        bounds: rQ
      })]
    }

    function pX() {
      const [QQ, WQ] = (0, FW.d)();
      return (0, qQ.useMemo)((() => ({
        width: QQ,
        height: WQ
      })), [QQ, WQ])
    }

    function GX(QQ) {
      var WQ;
      const {
        layout: XQ,
        orientation: TQ,
        selected: zQ,
        onSelect: sQ,
        onMove: PQ,
        canMove: gQ,
        actionButtons: JQ,
        joystickFixed: rQ,
        presence: IQ,
        keyNames: BQ,
        maxHeight: yQ,
        fill: VQ = !1,
        apiRef: DQ
      } = QQ, {
        t: pQ
      } = (0, wQ.C)(), GQ = pX(), bQ = (null !== (WQ = (0, jQ.g)("maxAuraLevel")) && void 0 !== WQ ? WQ : 0) > 0, vQ = XQ.hudLayouts[TQ], dQ = (0, qQ.useRef)(null), HQ = (0, qQ.useRef)(null), aQ = (0, qQ.useRef)(null), lQ = (0, qQ.useRef)(null), AQ = (0, qQ.useRef)(null), RQ = (0, qQ.useRef)(null), EQ = (0, PW.d)(dQ).width, uQ = VQ ? 1 : EQ > 0 ? (0, iQ.s)(EQ, GQ.width, GQ.height, yQ) : 0, LQ = (0, qQ.useRef)((() => !1)), tQ = (0, qQ.useCallback)((() => LQ.current()), []), oQ = `${JQ}:${rQ}:${bQ}`, {
        doc: eQ,
        boxes: nQ,
        pieces: xQ,
        insets: YQ,
        keysAbove: ZQ,
        ready: OQ,
        settled: KQ
      } = yX(aQ, {
        layout: XQ,
        orientation: TQ,
        viewport: GQ,
        replicaKey: oQ,
        joystickFixed: rQ,
        busy: tQ
      }), mQ = (0, qQ.useCallback)((QQ => {
        eQ && xW(document, eQ, QQ, TQ, rQ)
      }), [eQ, TQ, rQ]), MQ = (0, qQ.useCallback)((QQ => {
        if (!eQ || !KQ) return null;
        mQ(QQ);
        const WQ = jX(eQ),
          XQ = function(QQ, WQ) {
            let {
              boxes: XQ,
              pieces: wQ,
              pairHome: qQ
            } = QQ;
            const TQ = wQ.find((QQ => CQ.has(QQ.id)));
            if (!TQ || !qQ) return XQ;
            const zQ = (0, iQ.b)(qQ),
              sQ = WQ(TQ.id),
              FQ = MW(TQ.box) / sQ / 2,
              PQ = (TQ.box.bottom - TQ.box.top) / sQ / 2;
            return {
              ...XQ,
              inventory: {
                left: zQ.x - FQ,
                top: zQ.y - PQ,
                right: zQ.x + FQ,
                bottom: zQ.y + PQ
              }
            }
          }(rX(eQ), (WQ => (0, cQ.A)(QQ, TQ, WQ)[2]));
        return {
          boxes: XQ,
          keysAbove: WQ,
          shopAlone: BX(eQ)
        }
      }), [eQ, KQ, mQ, TQ]), QW = (0, qQ.useRef)(null), WW = (0, qQ.useRef)(null), XW = (0, qQ.useRef)(XQ);
      XW.current = XQ;
      const wW = (0, qQ.useCallback)((() => {
        null !== QW.current && (cancelAnimationFrame(QW.current), QW.current = null)
      }), []);
      (0, qQ.useEffect)((() => wW), [XQ, wW]);
      const qW = (0, qQ.useRef)(-1 / 0),
        {
          lockable: TW
        } = QQ,
        sW = (0, qQ.useCallback)((QQ => {
          if (mQ(QQ), qW.current = performance.now(), !KQ || 0 === XQ.hudLayouts[TQ].hudLocked.length) return;
          const WQ = XQ;
          wW(), QW.current = requestAnimationFrame((() => {
            var XQ;
            if (QW.current = null, XW.current !== WQ) return;
            const wQ = (null === (XQ = WW.current) || void 0 === XQ ? void 0 : XQ.from) === WQ ? WW.current.measured : MQ(WQ);
            wQ && (WW.current = {
              from: WQ,
              measured: wQ
            }), mQ(wQ ? WX(WQ, QQ, TQ, GQ, MQ, {
              canKeep: TW,
              passes: 1,
              before: wQ
            }) : QQ)
          }))
        }), [mQ, KQ, XQ, TQ, GQ, MQ, TW, wW]),
        FW = FX({
          preview: (QQ, WQ) => {
            WQ ? sW((0, cQ.gb)(XQ, TQ, QQ, WQ)) : (wW(), mQ(XQ))
          },
          stageRef: HQ,
          ringRef: lQ,
          centreLineRef: AQ,
          snapCentre: XQ.hudSnapCentre,
          ready: KQ,
          measure: QQ => {
            const WQ = eQ && OQ ? rX(eQ).boxes[QQ] : void 0;
            return WQ && (0, iQ.h)(WQ, GQ.width, GQ.height) ? WQ : null
          },
          k: uQ,
          viewport: GQ,
          boxes: nQ,
          pieces: xQ,
          selected: zQ,
          insets: YQ,
          layout: vQ,
          canMove: gQ,
          onSelect: sQ,
          onMove: (QQ, WQ, XQ) => {
            wW(), PQ(QQ, WQ, XQ)
          }
        });
      (0, qQ.useLayoutEffect)((() => {
        LQ.current = FW.busy
      }), [FW.busy]);
      const IW = (0, qQ.useRef)([]),
        jW = (0, qQ.useRef)(vQ.hudElements);
      (0, qQ.useEffect)((() => {
        for (const qQ of Object.keys(vQ.hudElements)) {
          var QQ, WQ, XQ, wQ;
          (null !== (QQ = null === (WQ = vQ.hudElements[qQ]) || void 0 === WQ ? void 0 : WQ[2]) && void 0 !== QQ ? QQ : 1) > (null !== (XQ = null === (wQ = jW.current[qQ]) || void 0 === wQ ? void 0 : wQ[2]) && void 0 !== XQ ? XQ : 1) && gQ(qQ) && !(0, gW.v)(qQ, vQ.hudElements[qQ]) && IW.current.push(...fQ(qQ, ZQ, gQ))
        }
        jW.current = vQ.hudElements
      }), [vQ.hudElements, gQ, ZQ]), (0, qQ.useEffect)((() => {
        if (!OQ) return;
        const QQ = (0, iQ.t)(GQ.width, GQ.height, YQ);
        for (const XQ of ((QQ, WQ, XQ, wQ) => {
            const qQ = QQ => {
              const qQ = WQ[QQ],
                {
                  x: TQ,
                  y: zQ
                } = qQ && wQ(QQ) ? (0, iQ.u)(qQ, XQ) : {
                  x: 0,
                  y: 0
                };
              return qQ && {
                left: qQ.left + TQ,
                top: qQ.top + zQ,
                right: qQ.right + TQ,
                bottom: qQ.bottom + zQ
              }
            };
            return QQ.flatMap((QQ => {
              const TQ = WQ[QQ];
              if ("inventory" !== QQ || !TQ || TQ.right - TQ.left <= XQ.right - XQ.left && TQ.bottom - TQ.top <= XQ.bottom - XQ.top) return [QQ];
              const [zQ, sQ] = [qQ("shop"), qQ("bag")];
              return zQ && sQ && !(0, iQ.j)(zQ, sQ, 0) ? ["shop", "bag"].filter(wQ) : [QQ]
            }))
          })(IW.current.splice(0), nQ, QQ, gQ)) {
          const wQ = nQ[XQ];
          if (!wQ || FW.busy() || !(0, iQ.h)(wQ, GQ.width, GQ.height)) continue;
          const qQ = (0, iQ.u)(wQ, QQ);
          if (0 !== qQ.x || 0 !== qQ.y) {
            var WQ;
            const [QQ, wQ] = null !== (WQ = vQ.hudElements[XQ]) && void 0 !== WQ ? WQ : [0, 0];
            PQ(XQ, QQ + qQ.x / GQ.width, wQ + qQ.y / GQ.height)
          }
        }
      }), [nQ, OQ]), (0, qQ.useImperativeHandle)(DQ, (() => ({
        setScale: (QQ, WQ) => {
          sW((0, cQ.gb)(XQ, TQ, QQ, {
            scale: WQ
          }))
        },
        setOpacity: QQ => {
          mQ({
            ...XQ,
            hudKeyOpacity: QQ
          })
        },
        keepLocks: (QQ, WQ) => (wW(), WX(QQ, WQ, TQ, GQ, MQ, {
          canKeep: TW
        })),
        setSafe: QQ => {
          const WQ = (0, rW.w)(QQ, GQ.width, GQ.height, NW(null !== eQ && void 0 !== eQ ? eQ : document));
          sW((0, cQ.lb)(XQ, TQ, QQ)), RQ.current && (RQ.current.style.inset = WQ.map((QQ => QQ * uQ + "px")).join(" "))
        }
      })), [mQ, sW, MQ, wW, TW, eQ, XQ, TQ, GQ, uQ]);
      const BW = new Set(Object.keys(vQ.hudElements).filter((QQ => (0, cQ.s)(vQ.hudElements, QQ)))),
        yW = zQ ? nQ[zQ] : void 0,
        VW = zQ ? NQ(zQ, JQ, pQ, BQ) : "",
        DW = (0, EW.g)(GQ.width, GQ.height),
        pW = zQ ? function(QQ, WQ, XQ, wQ) {
          const qQ = QQ => kQ(QQ).some((QQ => (0, cQ.s)(XQ.hudElements, QQ) || (0, gW.s)(QQ, XQ, wQ)));
          if (qQ(QQ)) return [];
          const TQ = QQ => {
              var WQ, wQ;
              return "bag" === QQ && 1 !== (null !== (WQ = null === (wQ = XQ.hudElements.shop) || void 0 === wQ ? void 0 : wQ[2]) && void 0 !== WQ ? WQ : 1) || kQ(QQ).some((QQ => void 0 !== XQ.hudElements[QQ]))
            },
            zQ = SQ.get(QQ),
            sQ = WQ.filter((WQ => {
              let {
                id: XQ
              } = WQ;
              return zQ ? zQ.has(XQ) && !qQ(XQ) : XQ === QQ
            })),
            FQ = new Set;
          for (const PQ of WQ) PQ.id === QQ || null !== zQ && void 0 !== zQ && zQ.has(PQ.id) || FQ.has(PQ.id) || qQ(PQ.id) || sQ.some((QQ => {
            let {
              id: WQ,
              box: wQ
            } = QQ;
            return !JW(WQ, PQ.id, XQ) && (TQ(WQ) || TQ(PQ.id)) && (0, iQ.j)(wQ, PQ.box, 2)
          })) && FQ.add(PQ.id);
          return [...FQ]
        }(zQ, xQ, vQ, DW) : [],
        GW = new Set((0, gW.r)(vQ.hudElements)),
        UW = (0, gW.D)(vQ, (0, gW.C)(IQ.rowIcons)).state,
        bW = pW.join(),
        vW = (0, qQ.useRef)(QQ.onReady);
      vW.current = QQ.onReady, (0, qQ.useEffect)((() => {
        var QQ;
        null === (QQ = vW.current) || void 0 === QQ || QQ.call(vW, KQ)
      }), [KQ]);
      const dW = (0, qQ.useRef)(QQ.onMeasured);
      (0, qQ.useLayoutEffect)((() => {
        dW.current = QQ.onMeasured
      }));
      const HW = (0, qQ.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        aW = [JX(xQ), GQ.width, GQ.height, YQ.top, YQ.right, YQ.bottom, YQ.left, OQ, oQ].join("|");
      (0, qQ.useEffect)((() => {
        const QQ = bW ? bW.split(",") : [],
          WQ = () => {
            var WQ;
            null === (WQ = dW.current) || void 0 === WQ || WQ.call(dW, nQ, QQ, HW.current.caps)
          };
        let XQ;
        const wQ = () => {
          const QQ = XW.current;
          if (!eQ || QQ === HW.current.layout && aW === HW.current.input) return !1;
          const qQ = qW.current + 250 - performance.now();
          return QQ === HW.current.layout && (qQ > 0 || tQ()) ? (XQ = setTimeout((() => {
            wQ() && WQ()
          }), Math.max(qQ, 62.5)), !1) : (HW.current = {
            layout: QQ,
            input: aW,
            caps: {
              hotbar: OW(eQ, AW),
              cluster: IX(eQ, (0, iQ.t)(GQ.width, GQ.height, YQ), AW)
            }
          }, !0)
        };
        return wQ(), WQ(), () => {
          clearTimeout(XQ)
        }
      }), [nQ, bW, eQ, GQ, YQ, aW, tQ]);
      const lW = QQ => ({
        left: QQ.left * uQ,
        top: QQ.top * uQ,
        width: (QQ.right - QQ.left) * uQ,
        height: (QQ.bottom - QQ.top) * uQ
      });
      return (0, UQ.jsx)("div", {
        ref: dQ,
        className: FQ()("HudPreviewBox", {
          Fill: VQ
        }),
        style: {
          height: GQ.height * uQ
        },
        children: (0, UQ.jsxs)("div", {
          ref: HQ,
          className: "HudPreviewStage",
          style: {
            width: GQ.width * uQ,
            height: GQ.height * uQ
          },
          children: [(0, UQ.jsx)("iframe", {
            ref: aQ,
            className: "HudPreviewFrame",
            title: pQ("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: GQ.width,
              height: GQ.height,
              transform: `scale(${uQ})`
            }
          }), eQ && (0, zW.createPortal)((0, UQ.jsx)(iW, {
            presence: IQ,
            portraitPhone: DW,
            hidden: BW,
            actionButtons: JQ,
            joystickFixed: rQ,
            keysAbove: ZQ,
            auraBar: bQ,
            trayState: UW,
            moved: GW
          }), eQ.body), (0, UQ.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...FW.handlers,
            children: [(0, UQ.jsx)("div", {
              ref: RQ,
              className: "HudPreviewSafeZone",
              style: {
                top: YQ.top * uQ,
                right: YQ.right * uQ,
                bottom: YQ.bottom * uQ,
                left: YQ.left * uQ
              }
            }), xQ.map(((QQ, WQ) => {
              let {
                id: XQ,
                box: wQ
              } = QQ;
              return (0, UQ.jsx)("div", {
                className: "HudPreviewHandle",
                style: lW((0, iQ.l)(wQ, 40 / uQ))
              }, `${XQ}:${WQ}`)
            })), vQ.hudLocked.map((QQ => {
              const WQ = nQ[QQ];
              return WQ && (0, UQ.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: WQ.right * uQ,
                  top: WQ.top * uQ
                },
                children: (0, UQ.jsx)(hQ.d, {
                  name: "lock"
                })
              }, QQ)
            })), (0, UQ.jsx)("div", {
              ref: AQ,
              className: "HudPreviewCentreLine",
              style: {
                left: GQ.width / 2 * uQ
              }
            }), zQ && yW && (0, UQ.jsx)("div", {
              ref: lQ,
              className: FQ()("HudPreviewRing", {
                Fixed: !gQ(zQ),
                Overlap: pW.length > 0
              }),
              style: lW(yW),
              children: (0, UQ.jsx)("span", {
                className: FQ()("HudPreviewRingLabel", DX(zQ, VW, nQ, uQ, GQ)),
                children: VW
              })
            })]
          })]
        })
      })
    }

    function UX(QQ, WQ) {
      (0, qQ.useEffect)((() => {
        var XQ;
        null === (XQ = QQ.current) || void 0 === XQ || XQ.toggleAttribute("inert", WQ)
      }), [QQ, WQ])
    }
    const bX = "hudFullScreen";

    function vX(QQ) {
      let {
        onScale: WQ,
        onHidden: XQ,
        onReset: TQ,
        locked: zQ,
        lockable: sQ,
        onLocked: FQ,
        onClose: gQ,
        ...JQ
      } = QQ;
      const {
        t: rQ
      } = (0, wQ.C)(), IQ = (0, qQ.useRef)(null);
      (0, sW.k)("popup", IQ, gQ),
      function(QQ) {
        const WQ = (0, qQ.useRef)(QQ);
        WQ.current = QQ, (0, qQ.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [bX]: !0
          }, "");
          let QQ = !1;
          const XQ = () => {
            QQ = !0, WQ.current()
          };
          return window.addEventListener("popstate", XQ), () => {
            var WQ;
            window.removeEventListener("popstate", XQ), !QQ && null !== (WQ = window.history.state) && void 0 !== WQ && WQ[bX] && window.history.back()
          }
        }), [])
      }(gQ), (0, qQ.useEffect)((() => {
        function QQ(QQ) {
          "Escape" === QQ.key && (QQ.stopPropagation(), gQ())
        }
        return window.addEventListener("keydown", QQ, !0), () => {
          window.removeEventListener("keydown", QQ, !0)
        }
      }), [gQ]);
      const {
        selected: jQ
      } = JQ, BQ = (0, qQ.useRef)(null), yQ = (0, qQ.useRef)(null), [VQ, DQ] = (0, qQ.useState)(!1);
      UX(yQ, !VQ);
      const [pQ, GQ] = (0, qQ.useState)(null), [bQ, vQ] = (0, qQ.useState)([]), [dQ, HQ] = cW(), aQ = (0, qQ.useRef)(JQ.selected);
      aQ.current = JQ.selected;
      const lQ = (0, qQ.useRef)({}),
        hQ = (0, qQ.useCallback)((() => {
          const QQ = BQ.current;
          QQ && GQ(function(QQ, WQ, XQ) {
            var wQ;
            const {
              innerWidth: qQ,
              innerHeight: TQ
            } = window, zQ = QQ.offsetWidth, sQ = QQ.offsetHeight, FQ = Math.max(YW()[0], 6), PQ = [];
            for (const rQ of [FQ, .2 * TQ, .5 * TQ - sQ / 2, .33 * TQ])
              for (const QQ of [.5, .3, .7]) PQ.push({
                left: Math.max(0, Math.min(qQ - zQ - 6, Math.max(6, qQ * QQ - zQ / 2))),
                top: rQ
              });
            const gQ = PQ.map((QQ => ({
                left: QQ.left - 6,
                top: QQ.top - 6,
                right: QQ.left + zQ + 6,
                bottom: QQ.top + sQ + 6
              }))),
              JQ = gX(WQ, XQ);
            return PQ[(0, iQ.m)(gQ, JQ, {
              avoid: XQ && null !== (wQ = WQ[XQ]) && void 0 !== wQ ? wQ : null
            })]
          }(QQ, lQ.current, aQ.current))
        }), []),
        cQ = (0, qQ.useCallback)(((QQ, WQ, XQ) => {
          vQ(WQ), HQ(XQ), lQ.current = QQ, hQ()
        }), [hQ, HQ]);
      return (0, qQ.useLayoutEffect)(hQ, [JQ.selected, hQ]), (0, zW.createPortal)((0, UQ.jsxs)("div", {
        ref: IQ,
        className: "HudFullScreenEditor",
        children: [(0, UQ.jsx)(GX, {
          ...JQ,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: cQ,
          onReady: DQ,
          lockable: sQ
        }), (0, UQ.jsxs)("div", {
          ref: BQ,
          className: "HudFullScreenToolbar",
          style: null === pQ ? void 0 : {
            left: pQ.left,
            top: pQ.top,
            transform: "none"
          },
          children: [(0, UQ.jsx)("div", {
            ref: yQ,
            className: "HudFullScreenControls",
            children: (0, UQ.jsx)(RW, {
              selected: jQ,
              layout: JQ.layout.hudLayouts[JQ.orientation],
              actionButtons: JQ.actionButtons,
              keyNames: JQ.keyNames,
              overlaps: bQ,
              scaleCaps: dQ,
              onScale: WQ,
              onHidden: XQ,
              onReset: TQ,
              locked: zQ,
              lockable: sQ,
              onLocked: FQ,
              joystickFixed: JQ.joystickFixed
            })
          }), (0, UQ.jsx)(PQ.h, {
            className: "HudFullScreenDone",
            onClick: gQ,
            padDefaultFocus: !0,
            children: rQ("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const dX = QQ => `${Math.round(100*QQ)}%`;

    function HX(QQ) {
      let {
        info: WQ,
        tuple: XQ,
        props: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, wQ.C)();
      return (0, UQ.jsx)(IQ.h, {
        name: TQ("hudLayout:size"),
        min: cQ.i,
        max: cQ.h,
        step: AW,
        initValue: XQ[2],
        disabled: qQ.locked.has(WQ.id),
        selectableMax: qQ.scaleCaps[WQ.id],
        cappedNote: TQ("hudLayout:sizeCapped"),
        format: dX,
        onChange: QQ => {
          qQ.onScalePreview(WQ.id, QQ)
        },
        onChangeComplete: QQ => {
          qQ.onScale(WQ.id, QQ)
        }
      })
    }

    function aX(QQ) {
      const {
        t: WQ
      } = (0, wQ.C)(), {
        present: XQ,
        elements: TQ,
        selected: zQ,
        onSelect: sQ,
        onHidden: PQ,
        onReset: gQ,
        note: JQ,
        actionButtons: rQ,
        keyNames: IQ,
        sizeBesidePreview: jQ,
        locked: BQ,
        lockable: yQ,
        onLocked: VQ
      } = QQ, {
        rowIconsOpen: DQ,
        onRowIconsOpen: pQ
      } = QQ, GQ = (0, qQ.useRef)(null), bQ = null !== zQ && (DQ || !(0, cQ.Q)(zQ));
      return (0, qQ.useEffect)((() => {
        var QQ;
        const WQ = zQ ? null === (QQ = GQ.current) || void 0 === QQ ? void 0 : QQ.querySelector(`[data-hud-row="${zQ}"]`) : null;
        if (!WQ) return;
        const XQ = WQ.closest(".SettingsMenuRight"),
          wQ = performance.now();
        let qQ = null;
        const TQ = () => {
            clearInterval(FQ), null === XQ || void 0 === XQ || XQ.removeEventListener("scroll", sQ)
          },
          sQ = () => {
            qX() || TQ()
          },
          FQ = setInterval((() => {
            const QQ = performance.now();
            QQ - wQ > 1500 ? TQ() : qX() ? qQ = null : null === qQ ? qQ = QQ : QQ - qQ >= 150 && (TQ(), function(QQ) {
              var WQ;
              const XQ = QQ.closest(".SettingsMenuRight"),
                wQ = null === (WQ = QQ.closest(".HudLayoutSettings")) || void 0 === WQ ? void 0 : WQ.querySelector(".HudLayoutPreviewBox");
              if (!XQ || !wQ) return;
              const qQ = wQ.getBoundingClientRect().bottom + 8,
                TQ = XQ.getBoundingClientRect().bottom - 8,
                zQ = QQ.getBoundingClientRect();
              zQ.top < qQ ? XQ.scrollBy({
                top: zQ.top - qQ,
                behavior: "smooth"
              }) : zQ.bottom > TQ && XQ.scrollBy({
                top: Math.min(zQ.bottom - TQ, zQ.top - qQ),
                behavior: "smooth"
              })
            }(WQ))
          }), 50);
        return null === XQ || void 0 === XQ || XQ.addEventListener("scroll", sQ, {
          passive: !0
        }), TQ
      }), [zQ, bQ]), (0, UQ.jsx)("div", {
        ref: GQ,
        className: "SettingBoxGroup HudElementList",
        children: nQ.filter((QQ => XQ.has(QQ.id) && (DQ || !(0, cQ.Q)(QQ.id)))).map((XQ => {
          const wQ = ((QQ, WQ) => {
              var XQ;
              return null !== (XQ = QQ[WQ]) && void 0 !== XQ ? XQ : cQ.l
            })(TQ, XQ.id),
            qQ = (0, cQ.s)(TQ, XQ.id),
            GQ = XQ.id === zQ,
            bQ = XQ.scale && !jQ,
            vQ = JQ(XQ.id, GQ);
          return (0, UQ.jsxs)("div", {
            "data-hud-row": XQ.id,
            className: FQ()("SettingBox HudElementRow", {
              Open: GQ,
              Hidden: qQ,
              Child: void 0 !== XQ.parent,
              Grandchild: LQ(XQ.id).length > 1
            }),
            children: [(0, UQ.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, UQ.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": bQ ? GQ : void 0,
                onClick: () => {
                  sQ(XQ.id)
                },
                children: (0, UQ.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [NQ(XQ.id, rQ, WQ, IQ), XQ.scale && 1 !== wQ[2] && !(GQ && bQ) && (0, UQ.jsxs)(UQ.Fragment, {
                    children: [" ", (0, UQ.jsx)("span", {
                      className: "HudElementRowSize",
                      children: dX(wQ[2])
                    })]
                  }), bQ && (0, UQ.jsxs)(UQ.Fragment, {
                    children: [" ", (0, UQ.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, UQ.jsx)(MQ, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: XQ.id,
                actionButtons: rQ,
                keyNames: IQ,
                locked: BQ.has(XQ.id),
                lockable: yQ(XQ.id),
                onLocked: VQ
              }), "menu" === XQ.id && (0, UQ.jsx)(QW, {
                className: "HudElementRowIcon",
                open: DQ,
                name: NQ(XQ.id, rQ, WQ, IQ),
                onToggle: pQ
              }), "menu" !== XQ.id && (0, UQ.jsx)(KQ, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: XQ.id,
                elements: TQ,
                actionButtons: rQ,
                keyNames: IQ,
                onHidden: PQ
              }), (0, UQ.jsx)(mQ, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: BQ.has(XQ.id),
                id: XQ.id,
                elements: TQ,
                actionButtons: rQ,
                keyNames: IQ,
                onReset: gQ
              })]
            }), GQ && bQ && (0, UQ.jsx)(HX, {
              info: XQ,
              tuple: wQ,
              props: QQ
            }), vQ && (0, UQ.jsx)("div", {
              className: "HudElementNote",
              children: vQ
            })]
          }, XQ.id)
        }))
      })
    }

    function lX(QQ) {
      let {
        preview: WQ,
        quick: XQ,
        onFullScreen: TQ,
        resting: zQ,
        onSidePanel: sQ
      } = QQ;
      const {
        t: FQ
      } = (0, wQ.C)(), gQ = pX(), JQ = (0, qQ.useRef)(null), {
        width: rQ
      } = (0, PW.d)(JQ), IQ = Math.floor(gQ.width * Math.min(1, WQ.maxHeight / gQ.height)), jQ = rQ - IQ - 12, BQ = jQ >= 130, yQ = rQ > 0;
      (0, qQ.useEffect)((() => {
        yQ && sQ(BQ)
      }), [yQ, BQ, sQ]);
      const VQ = (0, iQ.s)(BQ ? IQ : rQ, gQ.width, gQ.height, WQ.maxHeight),
        DQ = zQ ? (0, UQ.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: gQ.height * VQ
          }
        }) : (0, UQ.jsx)(GX, {
          ...WQ
        }),
        pQ = QQ => (0, UQ.jsxs)(PQ.T, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: FQ("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: TQ,
          children: [(0, UQ.jsx)(hQ.d, {
            name: "expand"
          }), QQ && (0, UQ.jsx)("span", {
            children: FQ("hudLayout:fullScreen")
          })]
        });
      return (0, UQ.jsxs)("div", {
        ref: JQ,
        className: "SettingBox HudLayoutPreviewBox",
        children: [rQ > 0 && BQ && (0, UQ.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, UQ.jsx)("div", {
            style: {
              width: IQ
            },
            children: DQ
          }), (0, UQ.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, UQ.jsx)(RW, {
              selected: WQ.selected,
              ...XQ,
              joystickFixed: WQ.joystickFixed,
              extra: pQ(!WQ.selected || jQ >= 278)
            })
          })]
        }), rQ > 0 && !BQ && (0, UQ.jsxs)(UQ.Fragment, {
          children: [DQ, (0, UQ.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: pQ(!1)
          })]
        })]
      })
    }
    var hX = XQ(2572),
      iX = XQ(4724),
      cX = XQ(2561),
      AX = XQ(2524);
    const RX = QQ => {
      const WQ = rW.o * ("sides" === QQ ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(WQ / 2))
    };

    function EX(QQ, WQ, XQ) {
      const [wQ, qQ, TQ, zQ] = QQ;
      return "sides" === WQ ? [wQ, XQ, TQ, XQ] : [XQ, qQ, XQ, zQ]
    }
    const CX = [null, null, null, null],
      uX = QQ => `${QQ}px`;

    function LX(QQ) {
      let {
        safe: WQ,
        onPreview: XQ,
        onCommit: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, wQ.C)(), sQ = (0, rW.w)(null !== WQ && void 0 !== WQ ? WQ : CX, window.innerWidth, window.innerHeight, NW(document).map(Math.round)), FQ = (0, qQ.useRef)(null !== WQ && void 0 !== WQ ? WQ : CX);
      FQ.current = null !== WQ && void 0 !== WQ ? WQ : CX;
      const gQ = QQ => {
        const WQ = Math.min(RX(QQ), "sides" === QQ ? Math.max(sQ[1], sQ[3]) : Math.max(sQ[0], sQ[2]));
        return (0, UQ.jsx)(IQ.h, {
          name: zQ("sides" === QQ ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: RX(QQ),
          step: 2,
          initValue: WQ,
          format: uX,
          onChange: WQ => {
            XQ(EX(FQ.current, QQ, WQ))
          },
          onChangeComplete: wQ => {
            if (wQ === WQ) return void XQ(FQ.current);
            const qQ = EX(FQ.current, QQ, wQ);
            FQ.current = qQ, TQ(qQ), (0, dQ.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: QQ
            })
          }
        })
      };
      return (0, UQ.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, UQ.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, UQ.jsx)("div", {
            children: zQ("hudLayout:safeZone")
          }), (0, UQ.jsx)(PQ.T, {
            active: null === WQ,
            pressed: null === WQ,
            onClick: () => {
              TQ(null)
            },
            children: zQ("hudLayout:safeZoneAuto")
          })]
        }), gQ("sides"), gQ("ends")]
      })
    }

    function kX() {
      const {
        t: QQ
      } = (0, wQ.C)(), WQ = (0, cQ.db)(), {
        clientEscMenuOptions: XQ
      } = (0, gQ.n)(["clientEscMenuOptions"]), TQ = (0, hX.f)(), zQ = WQ.hudLayouts[TQ], [sQ, FQ] = (0, qQ.useState)(null), {
        rowIconsOpen: JQ,
        onRowIconsOpen: rQ,
        select: jQ
      } = function(QQ, WQ) {
        const [XQ, wQ] = (0, qQ.useState)((() => cQ.E.some((WQ => void 0 !== QQ.hudElements[WQ] || QQ.hudLocked.includes(WQ))))), TQ = (0, qQ.useCallback)((QQ => {
          WQ(QQ), (0, cQ.Q)(QQ) && wQ(!0)
        }), [WQ]);
        return {
          rowIconsOpen: XQ,
          onRowIconsOpen: wQ,
          select: TQ
        }
      }(zQ, FQ), [BQ, yQ] = (0, qQ.useState)([]), [VQ, DQ] = (0, qQ.useState)(null), [pQ, GQ] = cW(), bQ = (0, qQ.useCallback)(((QQ, WQ, XQ) => {
        yQ(WQ), GQ(XQ);
        const wQ = Object.keys(QQ);
        DQ((QQ => (null === QQ || void 0 === QQ ? void 0 : QQ.size) === wQ.length && wQ.every((WQ => QQ.has(WQ))) ? QQ : new Set(wQ)))
      }), [GQ]), {
        gameState: vQ
      } = (0, gQ.n)(["gameState"]), aQ = (0, cX.f)(), lQ = (0, AX.s)(), [hQ] = (0, qQ.useState)((() => {
        var QQ, WQ, XQ, wQ;
        return "inGame" === vQ ? (0, jW.u)(document, aQ, {
          rightOfCamera: null !== (QQ = null === (WQ = lQ.rightOfCamera) || void 0 === WQ ? void 0 : WQ.icon) && void 0 !== QQ ? QQ : null,
          leftEnd: null !== (XQ = null === (wQ = lQ.leftEnd) || void 0 === wQ ? void 0 : wQ.icon) && void 0 !== XQ ? XQ : null
        }) : jW.d
      })), iQ = (0, qQ.useRef)(null), AQ = (0, qQ.useRef)(null), RQ = function(QQ) {
        const [WQ, XQ] = (0, qQ.useState)((() => .4 * window.innerHeight));
        return (0, qQ.useLayoutEffect)((() => {
          var WQ;
          const wQ = null === (WQ = QQ.current) || void 0 === WQ ? void 0 : WQ.closest(".SettingsMenuRight");
          if (!wQ) return;
          const qQ = () => {
            const QQ = wQ.clientHeight < fX ? .4 : .5;
            XQ(Math.max(80, wQ.clientHeight * QQ - 24))
          };
          qQ();
          const TQ = new ResizeObserver(qQ);
          return TQ.observe(wQ), () => {
            TQ.disconnect()
          }
        }), [QQ]), WQ
      }(AQ), EQ = (0, iX.n)(XQ.joystickMode), CQ = XQ.touchActionButtons, LQ = (0, qQ.useMemo)((() => (0, jW.s)(hQ, CQ)), [hQ, CQ]), kQ = (0, qQ.useMemo)((() => new Set((0, jW.r)(hQ, CQ).map((QQ => jW.f[QQ])))), [hQ, CQ]);
      (0, qQ.useEffect)((() => {
        (0, dQ.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [fQ, SQ] = (0, qQ.useState)(!1), [tQ, oQ] = (0, qQ.useState)(!1), eQ = (0, qQ.useRef)(null);
      UX(eQ, !tQ);
      const [YQ, OQ] = (0, qQ.useState)(!1), KQ = (0, qQ.useCallback)((() => {
        OQ(!1)
      }), []), mQ = (0, qQ.useMemo)((() => new Set(zQ.hudLocked)), [zQ.hudLocked]), MQ = QQ => {
        var WQ, XQ;
        const wQ = (0, cQ.p)(),
          qQ = QQ(wQ);
        (0, cQ.Z)(null !== (WQ = null === (XQ = iQ.current) || void 0 === XQ ? void 0 : XQ.keepLocks(wQ, qQ)) && void 0 !== WQ ? WQ : qQ)
      }, QW = (QQ, WQ) => {
        MQ((XQ => (0, cQ.gb)(XQ, TQ, QQ, WQ)))
      }, WW = (QQ, WQ, XQ) => {
        QW(QQ, {
          dx: WQ,
          dy: XQ
        }), (0, dQ.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${QQ}`
        })
      }, XW = (QQ, WQ) => {
        MQ((XQ => (0, cQ.kb)(XQ, TQ, QQ, WQ)))
      }, wW = QQ => {
        const WQ = xQ[QQ];
        return (WQ.move || WQ.scale) && ("joystick" !== QQ || EQ) && !(0, gW.v)(QQ, zQ.hudElements[QQ])
      }, zW = QQ => xQ[QQ].move && ("joystick" !== QQ || EQ) && !mQ.has(QQ), sW = new Set(nQ.map((QQ => QQ.id)).filter((QQ => {
        const WQ = (0, cQ.Q)(QQ) && !hQ.rowIcons.includes(QQ);
        return null === VQ || VQ.has(QQ) || (0, cQ.s)(zQ.hudElements, QQ) && !WQ
      }))), FW = {
        present: sW,
        actionButtons: CQ,
        keyNames: LQ,
        scaleCaps: pQ,
        sizeBesidePreview: fQ,
        elements: zQ.hudElements,
        selected: sQ,
        onSelect: jQ,
        rowIconsOpen: JQ,
        onRowIconsOpen: rQ,
        onScalePreview: (QQ, WQ) => {
          var XQ;
          null === (XQ = iQ.current) || void 0 === XQ || XQ.setScale(QQ, WQ)
        },
        onScale: (QQ, WQ) => {
          QW(QQ, {
            scale: WQ
          }), (0, dQ.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${QQ}`
          })
        },
        onHidden: (QQ, WQ) => {
          QW(QQ, {
            hidden: WQ
          }), (0, dQ.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${WQ?"hide":"show"}:${QQ}`
          })
        },
        onReset: QQ => {
          QW(QQ, cQ.b)
        },
        locked: mQ,
        lockable: wW,
        onLocked: XW,
        note: (WQ, XQ) => {
          const wQ = XQ && BQ.length > 0 ? QQ("hudLayout:overlapsNote", {
            names: ZQ(BQ, CQ, QQ, LQ)
          }) : null;
          if (XQ && qW(WQ, EQ)) return (0, UQ.jsxs)(UQ.Fragment, {
            children: [wQ && (0, UQ.jsx)("span", {
              children: wQ
            }), (0, UQ.jsx)("span", {
              children: QQ("hudLayout:floatingJoystickNote")
            }), !fQ && (0, UQ.jsx)(TW, {})]
          });
          if (wQ) return wQ;
          const qQ = XQ && mQ.has(WQ) ? QQ("hudLayout:lockedNote") : null,
            TQ = XQ && kQ.has(WQ) ? QQ("hudLayout:contextSlotNote") : null;
          return qQ || TQ ? (0, UQ.jsxs)(UQ.Fragment, {
            children: [qQ && (0, UQ.jsx)("span", {
              children: qQ
            }), TQ && (0, UQ.jsx)("span", {
              children: TQ
            })]
          }) : XQ && "cluster" === WQ ? QQ("hudLayout:clusterNote") : XQ && "inventory" === WQ ? QQ("hudLayout:inventoryNote") : XQ && "menu" === WQ ? QQ("hudLayout:menuNote") : XQ && (0, gW.v)(WQ, zQ.hudElements[WQ]) && zW(WQ) ? QQ("hudLayout:rowIconNote") : XQ && "arrows" === WQ ? QQ("hudLayout:arrowsNote") : XQ && "sprint" === WQ ? QQ("hudLayout:sprintNote") : uQ(WQ) && (0, cQ.s)(zQ.hudElements, WQ) ? QQ("hudLayout:inventoryHiddenNote", {
            name: NQ(WQ, CQ, QQ, LQ)
          }) : null
        }
      };
      return (0, UQ.jsxs)("div", {
        ref: AQ,
        className: "HudLayoutSettings",
        children: [(0, UQ.jsxs)("div", {
          ref: eQ,
          className: "HudLayoutBody",
          children: [(0, UQ.jsx)("div", {
            className: "HudLayoutOrientation",
            children: QQ("landscape" === TQ ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, UQ.jsx)(lX, {
            preview: {
              layout: WQ,
              orientation: TQ,
              selected: sQ,
              onSelect: jQ,
              onMove: WW,
              canMove: zW,
              actionButtons: CQ,
              joystickFixed: EQ,
              presence: hQ,
              keyNames: LQ,
              maxHeight: RQ,
              apiRef: iQ,
              onMeasured: bQ,
              onReady: oQ,
              lockable: wW
            },
            quick: {
              layout: zQ,
              actionButtons: CQ,
              keyNames: LQ,
              scaleCaps: pQ,
              overlaps: BQ,
              onScale: FW.onScale,
              onHidden: FW.onHidden,
              onReset: FW.onReset,
              locked: mQ,
              lockable: wW,
              onLocked: XW
            },
            onFullScreen: () => {
              OQ(!0)
            },
            resting: YQ,
            onSidePanel: SQ
          }), YQ && (0, UQ.jsx)(vX, {
            layout: WQ,
            orientation: TQ,
            selected: sQ,
            onSelect: jQ,
            onMove: WW,
            canMove: zW,
            actionButtons: CQ,
            joystickFixed: EQ,
            presence: hQ,
            keyNames: LQ,
            onScale: FW.onScale,
            onHidden: FW.onHidden,
            onReset: FW.onReset,
            locked: mQ,
            lockable: wW,
            onLocked: XW,
            apiRef: iQ,
            onClose: KQ
          }), (0, UQ.jsx)(LX, {
            safe: zQ.hudSafe,
            onCommit: QQ => {
              MQ((WQ => (0, cQ.lb)(WQ, TQ, QQ)))
            },
            onPreview: QQ => {
              var WQ;
              null === (WQ = iQ.current) || void 0 === WQ || WQ.setSafe(QQ)
            }
          }), (0, UQ.jsx)(IQ.e, {
            label: QQ("hudLayout:snapCentre"),
            checked: WQ.hudSnapCentre,
            onClick: QQ => {
              (0, cQ.X)(QQ)
            },
            circleInfoText: QQ("hudLayout:snapCentreInfo")
          }), (0, UQ.jsx)(aX, {
            ...FW
          }), (0, UQ.jsx)(IQ.g, {
            label: QQ("hudLayout:shape"),
            options: cQ.G.map((WQ => ({
              value: WQ,
              label: QQ(`hudLayout:shape_${WQ}`)
            }))),
            value: WQ.hudShape,
            onChange: QQ => {
              MQ((WQ => ({
                ...WQ,
                hudShape: QQ
              }))), (0, dQ.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: QQ
              })
            }
          }), (0, UQ.jsx)(IQ.h, {
            name: QQ("hudLayout:opacity"),
            min: cQ.d,
            max: 1,
            step: .05,
            initValue: WQ.hudKeyOpacity,
            format: QQ => `${Math.round(100*QQ)}%`,
            circleInfoText: QQ("hudLayout:opacityInfo"),
            onChange: QQ => {
              var WQ;
              null === (WQ = iQ.current) || void 0 === WQ || WQ.setOpacity(QQ)
            },
            onChangeComplete: QQ => {
              (0, cQ.V)(QQ), (0, dQ.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, UQ.jsx)(PQ.P, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const QQ = HQ.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await QQ.getResult() && (0, cQ.U)()
            }()
          },
          children: QQ("hudLayout:resetAll")
        })]
      })
    }
    const fX = 350;
    const SX = [function() {
      const {
        t: QQ
      } = (0, wQ.C)(), [WQ, XQ] = (0, qQ.useState)(!1), TQ = (0, qQ.useRef)(null);
      return (0, qQ.useEffect)((() => {
        var QQ;
        WQ && (null === (QQ = TQ.current) || void 0 === QQ || QQ.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [WQ]), (0, UQ.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, UQ.jsx)(aQ.c, {
          ref: TQ,
          icon: "arrows-up-down-left-right",
          title: QQ("hudLayout:title"),
          sub: QQ("hudLayout:entrySub"),
          expanded: WQ,
          onClick: () => {
            XQ(!WQ)
          }
        }), WQ && (0, UQ.jsx)(kX, {})]
      })
    }, function() {
      const {
        t: QQ
      } = (0, wQ.C)(), {
        joystickMode: WQ,
        touchSpeedCurve: XQ,
        autorun: qQ,
        jumpLock: TQ,
        touchEdgeGuard: zQ
      } = (0, gQ.n)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, UQ.jsxs)(UQ.Fragment, {
        children: [(0, UQ.jsx)(IQ.g, {
          label: QQ("settingsMenu:joystick"),
          options: GQ.Db.map((WQ => ({
            value: WQ,
            label: QQ(bQ[WQ])
          }))),
          value: WQ,
          onChange: QQ => {
            gQ.b.setClientEscMenuOptions({
              joystickMode: QQ
            })
          },
          circleInfoText: QQ("settingsMenu:joystickInfo")
        }), (0, UQ.jsx)(IQ.e, {
          label: QQ("settingsMenu:preciseWalking"),
          checked: XQ,
          onClick: QQ => {
            gQ.b.setClientEscMenuOptions({
              touchSpeedCurve: QQ
            })
          },
          circleInfoText: QQ("settingsMenu:preciseWalkingInfo")
        }), (0, UQ.jsx)(IQ.e, {
          label: QQ("settingsMenu:autoRun"),
          checked: qQ,
          onClick: QQ => {
            gQ.b.setClientEscMenuOptions({
              autorun: QQ
            })
          },
          circleInfoText: QQ("settingsMenu:autoRunInfo")
        }), (0, UQ.jsx)(IQ.e, {
          label: QQ("settingsMenu:jumpLock"),
          checked: TQ,
          onClick: QQ => {
            gQ.b.setClientEscMenuOptions({
              jumpLock: QQ
            })
          },
          circleInfoText: QQ("settingsMenu:jumpLockInfo")
        }), (0, UQ.jsx)(IQ.e, {
          label: QQ("touchSettings:stopAtEdges"),
          checked: zQ,
          onClick: QQ => {
            gQ.b.setClientEscMenuOptions({
              touchEdgeGuard: QQ
            })
          },
          circleInfoText: QQ("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, UQ.jsx)(pQ.d, {})
    }, function() {
      const {
        t: QQ
      } = (0, wQ.C)(), {
        clientEscMenuOptions: WQ
      } = (0, gQ.n)(["clientEscMenuOptions"]);
      return (0, vQ.d)() ? (0, UQ.jsx)(IQ.e, {
        label: QQ("settingsMenu:vibration"),
        checked: WQ.vibration,
        onClick: QQ => {
          gQ.b.setClientEscMenuOptions({
            vibration: QQ
          })
        },
        circleInfoText: QQ("settingsMenu:vibrationInfo")
      }) : null
    }];

    function tX() {
      return (0, UQ.jsx)(UQ.Fragment, {
        children: SX.map(((QQ, WQ) => (0, UQ.jsx)(QQ, {}, WQ)))
      })
    }
    var oX = XQ(4685);

    function eX() {
      const {
        t: QQ
      } = (0, wQ.C)(), {
        isTouchScreen: WQ,
        clientEscMenuOptions: XQ,
        gameState: zQ
      } = (0, gQ.n)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), sQ = (0, jQ.g)("ezBridging"), FQ = (0, jQ.g)("ezTowering"), yQ = "inGame" !== zQ || !0 === sQ, VQ = (0, BQ.f)(), pQ = null !== VQ && ("inGame" !== zQ || !0 === FQ), [, GQ] = (0, qQ.useReducer)((QQ => QQ + 1), 0), bQ = (0, DQ.f)(), [vQ, dQ] = (0, qQ.useState)(oX.g);
      return (0, UQ.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [bQ && (0, UQ.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, UQ.jsx)("div", {
            children: QQ("controller:settingsControlsNote")
          }), (0, UQ.jsx)(PQ.T, {
            onClick: () => {
              gQ.b.set({
                openSettingsCategory: "controller"
              })
            },
            children: QQ("controller:settingsOpenController")
          })]
        }), (0, JQ.isTouchscreen)() && !(0, JQ.isMobile)() ? (0, UQ.jsx)(UQ.Fragment, {
          children: (0, UQ.jsx)(IQ.e, {
            label: QQ("settingsMenu:useTouchControls"),
            checked: vQ,
            onClick: QQ => {
              (0, oX.e)(QQ), dQ(QQ)
            }
          })
        }) : null, WQ && (0, UQ.jsx)(tX, {}), yQ && (0, UQ.jsx)(IQ.e, {
          label: QQ("settingsMenu:ezBridging"),
          checked: XQ.ezBridging,
          onClick: QQ => {
            gQ.b.setClientEscMenuOptions({
              ezBridging: QQ
            })
          },
          circleInfoText: QQ("settingsMenu:ezBridgingInfo")
        }), pQ && (0, UQ.jsx)(IQ.e, {
          label: QQ("settingsMenu:ezTowering"),
          checked: XQ.ezTowering,
          onClick: QQ => {
            gQ.b.setClientEscMenuOptions({
              ezTowering: QQ
            })
          },
          circleInfoText: QQ("jump" === VQ ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, UQ.jsx)(IQ.e, {
          label: QQ("settingsMenu:crouchToggle"),
          checked: XQ.crouchIsToggle,
          onClick: QQ => {
            gQ.b.setClientEscMenuOptions({
              crouchIsToggle: QQ
            })
          },
          circleInfoText: QQ("settingsMenu:crouchToggleInfo")
        }), (0, UQ.jsx)(IQ.e, {
          label: QQ("settingsMenu:hideUiToggle"),
          checked: XQ.hideUiIsToggle,
          onClick: QQ => {
            gQ.b.setClientEscMenuOptions({
              hideUiIsToggle: QQ
            })
          },
          circleInfoText: QQ("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, rQ.c)() && (0, UQ.jsx)(IQ.h, {
          name: QQ("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: XQ.touchscreenSensitivity,
          onChange: QQ => {
            gQ.b.setClientEscMenuOptions({
              touchscreenSensitivity: QQ
            })
          }
        }), !(0, JQ.isMobile)() && (0, UQ.jsx)(IQ.h, {
          name: QQ("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: XQ.mouseSensitivity,
          onChange: QQ => {
            gQ.b.setClientEscMenuOptions({
              mouseSensitivity: QQ
            })
          }
        }), !(0, JQ.isMobile)() && (0, UQ.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, UQ.jsx)("div", {
            className: "SliderText",
            children: QQ("settingsMenu:keyBindings")
          }), TQ.f.map((WQ => (0, UQ.jsx)(nX, {
            title: QQ(WQ.name.translationKey, WQ.name.params),
            defaultOpen: TQ.g.has(WQ.id),
            children: WQ.actions.map((QQ => (0, UQ.jsx)(xX, {
              noaAction: QQ,
              forceUpdate: GQ,
              clashesWith: WQ.clashesWith,
              showPadGlyph: bQ
            }, QQ)))
          }, WQ.name.translationKey))), (0, UQ.jsx)(PQ.P, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, TQ.D)(), GQ()
            },
            children: QQ("controls:resetBindings")
          })]
        })]
      })
    }

    function nX(QQ) {
      let {
        title: WQ,
        defaultOpen: XQ,
        children: wQ
      } = QQ;
      const [TQ, zQ] = (0, qQ.useState)(XQ);
      return (0, UQ.jsxs)("div", {
        className: FQ()("ControlsSection", {
          Collapsed: !TQ
        }),
        children: [(0, UQ.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            zQ(!TQ)
          },
          children: [(0, UQ.jsx)("div", {
            className: "ControlsSectionTitle",
            children: WQ
          }), (0, UQ.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), TQ && (0, UQ.jsx)("div", {
          className: "ControlsSectionRows",
          children: wQ
        })]
      })
    }

    function xX(QQ) {
      let {
        noaAction: WQ,
        forceUpdate: XQ,
        clashesWith: sQ,
        showPadGlyph: gQ
      } = QQ;
      const {
        t: JQ
      } = (0, wQ.C)(), rQ = (0, VQ.e)(WQ), [IQ, jQ] = (0, qQ.useState)(!1), [BQ, DQ] = (0, qQ.useState)("controls:clickToEnterNewBinding"), [pQ, GQ] = (0, qQ.useState)(null), [bQ, vQ] = (0, qQ.useState)(null), dQ = (0, qQ.useRef)(null);
      (0, qQ.useEffect)((() => {
        IQ && dQ.current && dQ.current.focus()
      }), [IQ]);
      const HQ = TQ.s[WQ].filter((QQ => zQ.f[QQ]));
      let aQ = null;
      const lQ = [],
        hQ = sQ.flatMap((QQ => {
          var WQ, XQ;
          return null !== (WQ = null === (XQ = TQ.f.find((WQ => WQ.id === QQ))) || void 0 === XQ ? void 0 : XQ.actions) && void 0 !== WQ ? WQ : []
        }));
      for (const wQ of hQ) {
        if (wQ === WQ) continue;
        const QQ = TQ.s[wQ];
        for (const WQ of QQ) HQ.includes(WQ) && lQ.push(JQ(TQ.t[wQ].translationKey, TQ.t[wQ].params))
      }
      lQ.length > 0 && (aQ = JQ("controls:sharedBindingsWarning") + " ", aQ += lQ.join(", "));
      const iQ = () => {
          jQ(!1), GQ(null), DQ("controls:clickToEnterNewBinding"), vQ(null)
        },
        cQ = () => "BindingInput_" + WQ;
      return (0, UQ.jsxs)("div", {
        className: FQ()("ControlRow", {
          WarningBorder: null !== aQ
        }),
        children: [(0, UQ.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, UQ.jsxs)("div", {
            className: "ControlName",
            children: [JQ(TQ.t[WQ].translationKey, TQ.t[WQ].params), gQ && rQ && (0, UQ.jsx)(yQ.c, {
              glyph: rQ,
              className: "ControlPadGlyph"
            })]
          }), (0, UQ.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, UQ.jsxs)("div", {
              className: "ControlBindingsList",
              children: [HQ.map((QQ => (0, UQ.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, UQ.jsx)("div", {
                  children: (0, TQ.n)(QQ)
                }), (0, UQ.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const wQ = (0, TQ.w)(WQ, QQ);
                    wQ.isError() ? vQ(wQ.asError().message) : vQ(null), XQ()
                  },
                  children: "\xd7"
                })]
              }, QQ))), !IQ && (0, UQ.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  jQ(!0), vQ(null)
                },
                children: (0, UQ.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), IQ && (0, UQ.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, UQ.jsxs)("div", {
                className: "InputContainer",
                children: [(0, UQ.jsx)("div", {
                  className: "InputOverlay",
                  children: pQ ? (0, TQ.n)(pQ) : (0, UQ.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: JQ(BQ)
                  })
                }), (0, UQ.jsx)("input", {
                  ref: dQ,
                  id: cQ(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: QQ => {
                    if ("Escape" === QQ.code) return iQ(), QQ.preventDefault(), void QQ.stopPropagation();
                    const WQ = QQ.code;
                    zQ.c.includes(WQ) ? (vQ(null), GQ(WQ)) : (vQ("controls:keyIsReserved"), GQ(null)), QQ.preventDefault(), QQ.stopPropagation()
                  },
                  onMouseDown: QQ => {
                    const WQ = "Mouse" + (QQ.button + 1);
                    document.activeElement && document.activeElement.id === cQ() ? zQ.c.includes(WQ) ? (vQ(null), GQ(WQ)) : (vQ("controls:keyIsReserved"), GQ(null)) : DQ("controls:enterNewBinding"), QQ.stopPropagation()
                  },
                  onBlur: () => {
                    DQ("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, UQ.jsx)(PQ.h, {
                onPointerDown: QQ => {
                  QQ.preventDefault()
                },
                onClick: () => {
                  (0, TQ.d)(WQ, pQ), XQ(), iQ()
                },
                className: "ControlBindingAddButton",
                disabled: null === pQ,
                children: JQ("general:add")
              }), (0, UQ.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  iQ()
                },
                children: "\xd7"
              })]
            }), bQ && (0, UQ.jsx)("div", {
              className: "ControlBindingError",
              children: JQ(bQ)
            })]
          })]
        }), aQ && (0, UQ.jsx)("div", {
          className: "ControlRowWarning",
          children: aQ
        })]
      })
    }
  },
  9255: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ
    });
    var wQ = XQ(61),
      qQ = XQ(1094),
      TQ = XQ(1145);
    const zQ = (0, wQ.forwardRef)((function(QQ, WQ) {
      let {
        icon: XQ,
        title: wQ,
        sub: zQ,
        expanded: sQ,
        onClick: FQ
      } = QQ;
      return (0, TQ.jsxs)("button", {
        ref: WQ,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": sQ,
        onClick: FQ,
        children: [(0, TQ.jsx)(qQ.d, {
          name: XQ,
          className: "FeaturedSettingsEntryIcon"
        }), (0, TQ.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, TQ.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: wQ
          }), (0, TQ.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: zQ
          })]
        }), (0, TQ.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  9065: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => VQ,
      f: () => yQ,
      h: () => gQ,
      j: () => DQ,
      m: () => pQ,
      p: () => rQ
    });
    var wQ = XQ(1728),
      qQ = XQ(1806);
    const TQ = QQ => QQ >= 56320 && QQ <= 57343,
      zQ = QQ => QQ >= 55296 && QQ <= 56319,
      sQ = (QQ, WQ) => WQ >= 2 && TQ(QQ.charCodeAt(WQ - 1)) && zQ(QQ.charCodeAt(WQ - 2)) ? WQ - 2 : Math.max(0, WQ - 1),
      FQ = (QQ, WQ) => {
        let XQ;
        var wQ, qQ;
        return XQ = QQ.start !== QQ.end ? WQ < 0 ? QQ.start : QQ.end : WQ < 0 ? sQ(QQ.value, QQ.start) : (wQ = QQ.value, (qQ = QQ.start) + 1 < wQ.length && zQ(wQ.charCodeAt(qQ)) && TQ(wQ.charCodeAt(qQ + 1)) ? qQ + 2 : Math.min(wQ.length, qQ + 1)), {
          value: QQ.value,
          start: XQ,
          end: XQ
        }
      },
      PQ = ["text", "search", "url", "email", "tel", "password", "number"],
      gQ = QQ => !(!(0, qQ.b)(QQ) || QQ.isContentEditable || QQ.hasAttribute("data-pad-no-osk")) && (QQ instanceof HTMLTextAreaElement || QQ instanceof HTMLInputElement && PQ.includes(QQ.type)),
      JQ = QQ => null !== QQ.selectionStart,
      rQ = QQ => {
        var WQ, XQ;
        const {
          value: wQ
        } = QQ;
        return {
          value: wQ,
          start: null !== (WQ = QQ.selectionStart) && void 0 !== WQ ? WQ : wQ.length,
          end: null !== (XQ = QQ.selectionEnd) && void 0 !== XQ ? XQ : wQ.length
        }
      },
      IQ = (QQ, WQ, XQ) => {
        if (QQ.readOnly) return;
        const qQ = QQ instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(qQ, "value").set.call(QQ, WQ.value), JQ(QQ) && QQ.setSelectionRange(WQ.start, WQ.end), (0, wQ.g)(QQ, new InputEvent("input", {
          bubbles: !0,
          inputType: XQ
        }))
      };
    let jQ = !1;
    const BQ = (QQ, WQ) => !!document.execCommand(QQ, !1, WQ) || (jQ || (jQ = !0, console.warn(`execCommand("${QQ}") failed; the on-screen keyboard is setting the value directly`)), !1),
      yQ = (QQ, WQ) => {
        BQ("insertText", WQ) || IQ(QQ, function(QQ, WQ) {
          let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const wQ = QQ.value.slice(0, QQ.start),
            qQ = QQ.value.slice(QQ.end);
          let TQ = XQ < 0 ? WQ.length : Math.max(0, XQ - wQ.length - qQ.length);
          TQ > 0 && TQ < WQ.length && zQ(WQ.charCodeAt(TQ - 1)) && TQ--;
          const sQ = WQ.slice(0, TQ),
            FQ = wQ.length + sQ.length;
          return {
            value: wQ + sQ + qQ,
            start: FQ,
            end: FQ
          }
        }(rQ(QQ), WQ, QQ.maxLength), "insertText")
      },
      VQ = QQ => {
        BQ("delete") || IQ(QQ, (QQ => {
          const WQ = QQ.start === QQ.end ? sQ(QQ.value, QQ.start) : QQ.start;
          return {
            value: QQ.value.slice(0, WQ) + QQ.value.slice(QQ.end),
            start: WQ,
            end: WQ
          }
        })(rQ(QQ)), "deleteContentBackward")
      },
      DQ = (QQ, WQ) => {
        if (!JQ(QQ)) return;
        const XQ = FQ(rQ(QQ), WQ);
        QQ.setSelectionRange(XQ.start, XQ.end)
      },
      pQ = QQ => {
        JQ(QQ) && 0 === QQ.selectionStart && 0 === QQ.selectionEnd && QQ.setSelectionRange(QQ.value.length, QQ.value.length)
      }
  },
  9202: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ
    });
    var wQ = XQ(26),
      qQ = XQ(2203),
      TQ = XQ(1404),
      zQ = XQ(1454);
    const sQ = async () => {
      if ((0, zQ.l)()) {
        if (!0 !== await TQ.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== wQ.b.get("gameState")) return
      }(0, qQ.f)()
    }
  },
  9211: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ,
      i: () => TQ,
      j: () => zQ,
      k: () => qQ,
      l: () => sQ
    });
    var wQ = XQ(2043);
    const qQ = "controllerPadShopOpen",
      TQ = QQ => wQ.i.includes(QQ),
      zQ = QQ => Object.values(QQ).some((QQ => !1 !== QQ.canBuy && !QQ.isRewardedAd)),
      sQ = (QQ, WQ, XQ) => {
        var wQ, qQ, zQ, sQ;
        const FQ = QQ.filter((QQ => !TQ(QQ))),
          PQ = null !== WQ && QQ.includes(WQ) ? WQ : null;
        return null !== PQ && !TQ(PQ) && XQ(PQ) ? PQ : null !== (wQ = null !== (qQ = null !== (zQ = null !== (sQ = FQ.find(XQ)) && void 0 !== sQ ? sQ : FQ[0]) && void 0 !== zQ ? zQ : PQ) && void 0 !== qQ ? qQ : QQ[0]) && void 0 !== wQ ? wQ : null
      },
      FQ = QQ => QQ.userInput || QQ.isRewardedAd || "boolean" === typeof QQ.isSelected ? null : JSON.stringify([QQ.image, QQ.cost, QQ.currency, QQ.amount, QQ.customTitle, QQ.buyButtonText, QQ.description, QQ.canBuy])
  },
  9235: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => PQ,
      f: () => gQ
    });
    var wQ = XQ(61),
      qQ = XQ(1498),
      TQ = XQ(2083),
      zQ = XQ(1468),
      sQ = XQ(1482),
      FQ = XQ(1145);
    const PQ = () => {
        const QQ = (0, zQ.s)();
        if ((0, wQ.useEffect)((() => {
            (0, zQ.j)()
          }), []), !QQ) return null;
        const {
          ControllerCategory: WQ
        } = QQ;
        return (0, FQ.jsx)(sQ.b, {
          children: (0, FQ.jsx)(WQ, {})
        })
      },
      gQ = () => {
        var QQ;
        const WQ = (0, zQ.s)(),
          [, XQ] = (0, wQ.useReducer)((QQ => QQ + 1), 0);
        return (0, qQ.f)(TQ.d, XQ), null !== (QQ = null === WQ || void 0 === WQ ? void 0 : WQ.hasActivePad()) && void 0 !== QQ && QQ
      }
  },
  9048: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => aQ,
      F: () => bQ,
      G: () => vQ,
      J: () => yQ,
      M: () => FQ,
      P: () => gQ,
      c: () => VQ,
      e: () => HQ,
      h: () => UQ,
      k: () => GQ,
      n: () => jQ,
      r: () => BQ,
      s: () => rQ,
      t: () => IQ,
      v: () => dQ,
      y: () => PQ
    });
    var wQ = XQ(31),
      qQ = XQ(1728),
      TQ = XQ(9056),
      zQ = XQ(9065),
      sQ = XQ(2474);
    const FQ = QQ => (0, zQ.h)(QQ),
      PQ = QQ => {
        const WQ = QQ.getBoundingClientRect();
        return {
          x: WQ.left + WQ.width / 2,
          y: WQ.top + WQ.height / 2
        }
      },
      gQ = (QQ, WQ, XQ) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: QQ.x,
        clientY: QQ.y,
        screenX: QQ.x,
        screenY: QQ.y,
        button: WQ,
        buttons: XQ,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      JQ = (QQ, WQ) => {
        (0, qQ.g)(QQ, WQ)
      },
      rQ = function(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const wQ = 0 === XQ ? 1 : 2;
        JQ(QQ, new PointerEvent("pointerdown", gQ(WQ, XQ, wQ))), JQ(QQ, new MouseEvent("mousedown", gQ(WQ, XQ, wQ)))
      },
      IQ = function(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        JQ(QQ, new PointerEvent("pointerup", gQ(WQ, XQ, 0))), JQ(QQ, new MouseEvent("mouseup", gQ(WQ, XQ, 0)))
      },
      jQ = function(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        rQ(QQ, WQ, XQ), IQ(QQ, WQ, XQ), JQ(QQ, 0 === XQ ? new MouseEvent("click", gQ(WQ, 0, 0)) : new MouseEvent("contextmenu", gQ(WQ, 2, 0)))
      },
      BQ = function(QQ, WQ, XQ) {
        let {
          leaveBelow: wQ = null,
          enterBelow: qQ = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (QQ !== WQ) {
          if (null !== QQ && void 0 !== QQ && QQ.isConnected) {
            const qQ = {
              ...gQ(XQ, 0, 0),
              relatedTarget: WQ
            };
            JQ(QQ, new PointerEvent("pointerout", qQ)), JQ(QQ, new MouseEvent("mouseout", qQ));
            const TQ = QQ => !!WQ && QQ.contains(WQ) || !!wQ && QQ.contains(wQ);
            for (let WQ = QQ; WQ && !TQ(WQ); WQ = WQ.parentElement) JQ(WQ, new PointerEvent("pointerleave", {
              ...qQ,
              bubbles: !1
            })), JQ(WQ, new MouseEvent("mouseleave", {
              ...qQ,
              bubbles: !1
            }))
          }
          if (WQ) {
            const wQ = {
              ...gQ(XQ, 0, 0),
              relatedTarget: QQ
            };
            JQ(WQ, new PointerEvent("pointerover", wQ)), JQ(WQ, new MouseEvent("mouseover", wQ));
            const TQ = [],
              zQ = WQ => !(null === QQ || void 0 === QQ || !QQ.isConnected) && WQ.contains(QQ) || !!qQ && WQ.contains(qQ);
            for (let QQ = WQ; QQ && !zQ(QQ); QQ = QQ.parentElement) TQ.push(QQ);
            for (const QQ of TQ.reverse()) JQ(QQ, new PointerEvent("pointerenter", {
              ...wQ,
              bubbles: !1
            })), JQ(QQ, new MouseEvent("mouseenter", {
              ...wQ,
              bubbles: !1
            }));
            JQ(WQ, new PointerEvent("pointermove", gQ(XQ, 0, 0))), JQ(WQ, new MouseEvent("mousemove", gQ(XQ, 0, 0)))
          }
        } else WQ && (JQ(WQ, new PointerEvent("pointermove", gQ(XQ, 0, 0))), JQ(WQ, new MouseEvent("mousemove", gQ(XQ, 0, 0))))
      },
      yQ = QQ => {
        wQ.k.mB(TQ.f, QQ)
      },
      VQ = QQ => {
        if (FQ(QQ)) return void yQ(QQ);
        const WQ = QQ.hasAttribute("data-pad-focusable") ? QQ.querySelector("a[href]") : null,
          XQ = null !== WQ && void 0 !== WQ ? WQ : QQ;
        jQ(XQ, PQ(XQ))
      },
      DQ = ".Dropdown-root.is-open",
      pQ = QQ => {
        const WQ = QQ.querySelector(".Dropdown-control");
        return VQ(WQ), WQ
      },
      GQ = QQ => {
        var WQ;
        const XQ = null !== (WQ = QQ.closest(DQ)) && void 0 !== WQ ? WQ : QQ.querySelector(DQ);
        return XQ ? pQ(XQ) : null
      },
      UQ = QQ => {
        for (const WQ of document.querySelectorAll(DQ)) WQ.contains(QQ) || pQ(WQ)
      },
      bQ = QQ => null !== QQ.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      vQ = QQ => {
        const WQ = QQ ? document.elementFromPoint(QQ.x, QQ.y) : null;
        return !(null === WQ || void 0 === WQ || !WQ.closest("[data-pad-repeat]"))
      },
      dQ = QQ => {
        var WQ;
        return null !== (WQ = [...QQ.querySelectorAll("[data-pad-back]")].find(sQ.u)) && void 0 !== WQ ? WQ : null
      },
      HQ = QQ => {
        const WQ = dQ(QQ);
        return !!WQ && (VQ(WQ), !0)
      },
      aQ = QQ => {
        var WQ, XQ, wQ, qQ;
        return null !== (WQ = null !== (XQ = null !== (wQ = QQ.getAttribute("data-pad-key")) && void 0 !== wQ ? wQ : QQ.getAttribute("href")) && void 0 !== XQ ? XQ : null === (qQ = QQ.querySelector("a[href]")) || void 0 === qQ ? void 0 : qQ.getAttribute("href")) && void 0 !== WQ ? WQ : null
      }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);