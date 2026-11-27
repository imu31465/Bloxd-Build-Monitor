export const id = 179;
export const ids = [179];
export const modules = {
  10227: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR
    });
    var yR = GR(25),
      tR = GR(1270),
      uR = GR(6037),
      ZR = GR(1378);

    function qR(RR) {
      let {
        note: JR
      } = RR;
      const {
        t: GR
      } = (0, tR.A)(), {
        clientEscMenuOptions: qR
      } = (0, yR.o)(["clientEscMenuOptions"]);
      return (0, ZR.jsx)(uR.e, {
        label: GR("touchSettings:actionButtons"),
        checked: qR.touchActionButtons,
        onClick: RR => {
          yR.d.setClientEscMenuOptions({
            touchActionButtons: RR
          })
        },
        circleInfoText: GR("touchSettings:actionButtonsInfo"),
        note: JR
      })
    }
  },
  10215: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => zG,
      f: () => mG
    });
    var yR = GR(1270),
      tR = GR(66),
      uR = GR(2194),
      ZR = GR(2202),
      qR = GR(1163),
      iR = GR.n(qR),
      fR = GR(1590),
      VR = GR(25),
      KR = GR(103),
      wR = GR(116),
      rR = GR(6037),
      eR = GR(3465),
      aR = GR(289),
      LR = GR(2206),
      nR = GR(2211),
      UR = GR(10223),
      WR = GR(10227),
      AR = GR(359),
      CR = GR(1378);
    const XR = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var MR = GR(1618),
      BR = GR(10234),
      lR = GR(3505),
      pR = GR(3584);
    var gR = GR(10238);
    var bR = GR(1493),
      vR = GR(10241),
      OR = GR(1547),
      xR = GR(1468),
      NR = GR(10244);

    function DR(RR) {
      let {
        className: JR,
        keepPlace: GR
      } = RR;
      return GR ? (0, CR.jsx)("div", {
        className: iR()(JR, "Placeholder")
      }) : null
    }

    function HR(RR) {
      let {
        id: JR,
        elements: GR,
        actionButtons: tR,
        keyNames: uR,
        className: ZR,
        keepPlace: qR,
        onHidden: iR
      } = RR;
      const {
        t: VR
      } = (0, yR.A)();
      if (!NR.i[JR].hide) return (0, CR.jsx)(DR, {
        className: ZR,
        keepPlace: qR
      });
      const KR = (0, lR.u)(GR, JR);
      return (0, CR.jsx)(fR.U, {
        className: ZR,
        ariaLabel: VR(KR ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: (0, NR.z)(JR, tR, VR, uR)
        }),
        pressed: !KR,
        onClick: () => {
          iR(JR, !KR)
        },
        children: (0, CR.jsx)(xR.d, {
          name: KR ? "eye-slash" : "eye"
        })
      })
    }

    function oR(RR) {
      let {
        id: JR,
        elements: GR,
        actionButtons: tR,
        keyNames: uR,
        className: ZR,
        keepPlace: qR,
        onlyWhenMoved: iR,
        locked: VR,
        onReset: KR
      } = RR;
      const {
        t: wR
      } = (0, yR.A)(), rR = NR.i[JR], eR = (0, lR.K)(GR[JR]);
      return !rR.move && !rR.scale || iR && eR ? (0, CR.jsx)(DR, {
        className: ZR,
        keepPlace: qR
      }) : (0, CR.jsx)(fR.U, {
        className: ZR,
        disabled: eR || VR,
        ariaLabel: wR("hudLayout:resetElement", {
          name: (0, NR.z)(JR, tR, wR, uR)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: JR
        },
        onClick: RR => {
          iR && mR(RR.currentTarget), KR(JR)
        },
        children: (0, CR.jsx)(xR.d, {
          name: "rotate-left"
        })
      })
    }

    function cR(RR) {
      let {
        id: JR,
        actionButtons: GR,
        keyNames: tR,
        className: uR,
        keepPlace: ZR,
        locked: qR,
        lockable: iR,
        onLocked: VR
      } = RR;
      const {
        t: KR
      } = (0, yR.A)();
      return iR || qR ? (0, CR.jsx)(fR.U, {
        className: uR,
        ariaLabel: KR(qR ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: (0, NR.z)(JR, GR, KR, tR)
        }),
        pressed: qR,
        active: qR,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${qR?"unlock":"lock"}:${JR}`
        },
        onClick: () => {
          VR(JR, !qR)
        },
        children: (0, CR.jsx)(xR.d, {
          name: qR ? "lock" : "lock-open"
        })
      }) : (0, CR.jsx)(DR, {
        className: uR,
        keepPlace: ZR
      })
    }

    function PR(RR) {
      let {
        className: JR,
        open: GR,
        name: tR,
        onToggle: uR
      } = RR;
      const {
        t: ZR
      } = (0, yR.A)();
      return (0, CR.jsx)(fR.U, {
        className: JR,
        ariaLabel: ZR(GR ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: tR
        }),
        pressed: GR,
        analyticsClick: {
          id: "hud_layout.children",
          value: GR ? "close" : "open"
        },
        onClick: () => {
          uR(!GR)
        },
        children: (0, CR.jsx)(xR.d, {
          name: GR ? "angle-up" : "angle-down"
        })
      })
    }

    function IR(RR, JR) {
      var GR;
      RR.contains(document.activeElement) && JR.focus({
        preventScroll: !0
      }), null === (GR = (0, OR.g)()) || void 0 === GR || GR.handOverPadFocus(RR, JR)
    }

    function mR(RR) {
      const JR = RR.closest("[data-hud-row]"),
        GR = null === JR || void 0 === JR ? void 0 : JR.querySelector(".HudElementRowName");
      return !(!JR || !GR) && (IR(JR, GR), !0)
    }
    const zR = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function SR(RR, JR) {
      return "joystick" === RR && !JR
    }

    function jR() {
      const {
        t: RR
      } = (0, yR.A)();
      return (0, CR.jsx)(fR.U, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: RR => {
          const JR = RR.currentTarget;
          if (!mR(JR)) {
            const RR = function(RR) {
              var JR, GR;
              const yR = [RR.previousElementSibling, RR.nextElementSibling].find((RR => RR instanceof HTMLElement && RR.matches(zR)));
              return null !== (JR = null !== yR && void 0 !== yR ? yR : null === (GR = RR.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === GR ? void 0 : GR.querySelector(`:is(${zR}):not(.HudFixJoystickButton)`)) && void 0 !== JR ? JR : null
            }(JR);
            RR && IR(JR, RR)
          }
          VR.d.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: RR("hudLayout:fixJoystick")
      })
    }
    var dR = GR(83),
      ER = GR(1366),
      YR = GR(4352),
      kR = GR(3909),
      QR = GR(10247),
      FR = GR(10253),
      TR = GR(3573),
      sR = GR(3593),
      hR = GR(4422),
      RJ = GR(377),
      JJ = GR(10260);
    const GJ = RR => ({
      [NR.e]: RR
    });

    function yJ(RR) {
      let {
        id: JR,
        slot: GR,
        icon: yR,
        label: uR,
        hidden: ZR,
        className: qR,
        face: fR
      } = RR;
      const VR = (0, tR.useRef)(null);
      return (0, tR.useLayoutEffect)((() => {
        fR && VR.current && (0, JJ.p)(VR.current, fR)
      }), [fR]), (0, CR.jsxs)("div", {
        className: iR()("TouchKeyHit", `TouchSlot${GR}`, qR, {
          HudPreviewGhost: ZR.has(JR)
        }),
        ...GJ(JR),
        children: [fR && (0, CR.jsx)("div", {
          ref: VR,
          className: iR()("TouchKey", {
            Labelled: fR.classList.contains("Labelled")
          })
        }), !fR && (0, CR.jsxs)("div", {
          className: iR()("TouchKey", {
            Labelled: void 0 !== uR
          }),
          children: [yR && (0, CR.jsx)(xR.d, {
            name: yR
          }), void 0 !== uR && (0, CR.jsx)("span", {
            className: "TouchKeyLabel",
            children: uR
          })]
        })]
      })
    }

    function tJ(RR) {
      let {
        item: JR,
        selected: GR
      } = RR;
      const yR = (0, tR.useRef)(null);
      return (0, tR.useLayoutEffect)((() => {
        yR.current && (0, JJ.p)(yR.current, JR)
      }), [JR]), (0, CR.jsx)("div", {
        ref: yR,
        className: iR()("InvenItem", {
          Selected: GR
        })
      })
    }
    const uJ = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      ZJ = RR => void 0 === RR ? {} : {
        style: {
          "--parked": RR
        }
      };

    function qJ(RR) {
      let {
        id: JR,
        hidden: GR,
        parked: yR,
        unslotted: tR = !1
      } = RR;
      return (0, CR.jsx)("div", {
        className: iR()("TopRightIcon", sR.p[JR], {
          HudPreviewGhost: GR.has(JR),
          [TR.e]: void 0 !== yR,
          [TR.h]: tR
        }),
        ...ZJ(yR),
        children: (0, CR.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...GJ(JR),
          children: (0, CR.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, CR.jsx)(xR.d, {
              name: uJ[JR]
            })
          })
        })
      })
    }

    function iJ(RR) {
      let {
        portraitPhone: JR,
        icons: GR,
        pinnedIcons: yR,
        hidden: uR,
        moved: ZR,
        trayState: qR
      } = RR;
      const fR = JR ? (0, TR.L)(GR) : [],
        VR = GR.filter((RR => "settings" === RR)),
        KR = GR.filter((RR => "settings" !== RR && !fR.includes(RR))).reverse(),
        wR = fR.length > 0 && "gone" === qR,
        rR = [...VR, ...wR ? ["tray"] : [], ...KR].filter((RR => "tray" === RR || uR.has(RR) && !ZR.has(RR))),
        eR = RR => {
          const JR = rR.indexOf(RR);
          return JR < 0 ? void 0 : JR
        },
        aR = (RR, JR) => (0, CR.jsx)(qJ, {
          id: RR,
          hidden: uR,
          parked: JR ? eR(RR) : void 0,
          unslotted: JR && uR.has(RR) && ZR.has(RR)
        }, RR);
      return (0, CR.jsxs)("div", {
        className: iR()("TopRightIcons TouchInGame", {
          Column: JR
        }),
        children: [VR.map((RR => aR(RR, !0))), fR.length > 0 && (0, CR.jsxs)("div", {
          className: iR()("TopRightIcon TopRightTrayToggle Open", {
            [TR.e]: wR
          }),
          ...ZJ(eR("tray")),
          children: [(0, CR.jsx)("div", {
            className: iR()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== qR
            }),
            children: (0, CR.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, CR.jsx)(xR.d, {
                name: "ellipsis"
              })
            })
          }), (0, CR.jsx)("div", {
            className: "TopRightTray",
            children: fR.map((RR => aR(RR, !1)))
          })]
        }), KR.map((RR => (0, CR.jsxs)(tR.Fragment, {
          children: ["perspective" === RR && null !== yR.rightOfCamera && (0, CR.jsx)(fJ, {
            icon: yR.rightOfCamera
          }), aR(RR, !0)]
        }, RR))), null !== yR.leftEnd && (0, CR.jsx)(fJ, {
          icon: yR.leftEnd
        })]
      })
    }

    function fJ(RR) {
      let {
        icon: JR
      } = RR;
      return (0, CR.jsx)("div", {
        className: "TopRightIcon",
        children: (0, CR.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, CR.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, CR.jsx)(xR.d, {
              name: JR
            })
          })
        })
      })
    }

    function VJ(RR) {
      let {
        next: JR,
        hidden: GR
      } = RR;
      return (0, CR.jsx)("div", {
        className: iR()("HotBarArrow", JR ? "Next" : "Previous", {
          HudPreviewGhost: GR
        }),
        ...GJ("arrows"),
        children: (0, CR.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, CR.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, CR.jsx)(xR.d, {
              name: JR ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function KJ() {
      return (0, CR.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, CR.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, CR.jsx)("div", {
            className: "SocialBar",
            children: (0, CR.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, CR.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, CR.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, CR.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, CR.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, CR.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, CR.jsx)(xR.d, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, CR.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, CR.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, CR.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, CR.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, CR.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, CR.jsx)(xR.d, {
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
    const wJ = [{
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

    function rJ(RR) {
      let {
        ghost: JR
      } = RR;
      const {
        t: GR
      } = (0, yR.A)();
      return (0, CR.jsx)("div", {
        className: iR()("EffectInfosWrapper", {
          HudPreviewGhost: JR
        }),
        ...GJ("effects"),
        children: wJ.map((RR => {
          let {
            icon: JR,
            labelKey: yR,
            level: tR,
            leftMs: uR
          } = RR;
          return (0, CR.jsxs)("div", {
            className: "EffectInfo",
            children: [(0, CR.jsx)("span", {
              className: "EffectInfoIcon HudPreviewEffectIcon",
              children: (0, CR.jsx)(xR.d, {
                name: JR
              })
            }), (0, CR.jsxs)("div", {
              className: iR()("EffectInfoRightSide", {
                Untimed: null === uR
              }),
              children: [(0, CR.jsxs)("div", {
                className: "EffectInfoNameWrapper",
                children: [(0, CR.jsx)("div", {
                  className: "EffectInfoName SmallTextBold",
                  children: GR(yR)
                }), tR > 1 && (0, CR.jsx)("div", {
                  className: "EffectInfoName SmallTextBold",
                  children: (0, RJ.J)(tR)
                })]
              }), null !== uR && (0, CR.jsx)("div", {
                className: "EffectInfoDuration SmallTextLight",
                children: (0, RJ._)(uR)
              })]
            })]
          }, yR)
        }))
      })
    }
    const eJ = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      aJ = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      LJ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      nJ = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function UJ(RR) {
      let {
        presence: JR,
        portraitPhone: GR,
        hidden: tR,
        actionButtons: uR,
        joystickFixed: ZR,
        keysAbove: qR,
        auraBar: fR,
        trayState: VR,
        moved: wR
      } = RR;
      const {
        t: rR
      } = (0, yR.A)(), {
        faces: eR,
        items: aR
      } = JR, LR = RR => ({
        HudPreviewGhost: (0, NR.J)(RR).some((RR => tR.has(RR)))
      });
      return (0, CR.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, CR.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, CR.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, CR.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, CR.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, CR.jsx)("div", {
              className: "InGameHeaderGameName",
              children: rR("hudLayout:previewGameName")
            })]
          })
        }), (0, CR.jsx)("div", {
          className: "TopLeftElements",
          children: (0, CR.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, CR.jsxs)("div", {
              className: "Chat",
              children: [(0, CR.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [rR("hudLayout:previewChatLine"), rR("hudLayout:previewChatJoined", {
                  name: "Arthur"
                }), rR("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((RR => (0, CR.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, CR.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, CR.jsx)("div", {
                      className: "IndividualText",
                      children: RR
                    })
                  })
                }, RR)))
              }), (0, CR.jsxs)("div", {
                className: "ChatIcons",
                children: [(0, CR.jsx)("button", {
                  type: "button",
                  tabIndex: -1,
                  className: iR()("ChatIconWrapper SmallTextLight", LR("chat")),
                  ...GJ("chat"),
                  children: (0, CR.jsx)(xR.d, {
                    name: "comment-dots",
                    className: "ChatIcon"
                  })
                }), (0, CR.jsx)("div", {
                  className: "QuickChat",
                  children: (0, CR.jsx)("button", {
                    type: "button",
                    tabIndex: -1,
                    className: iR()("QuickChatIconWrapper SmallTextLight", LR("quickChat")),
                    ...GJ("quickChat"),
                    children: (0, CR.jsx)(xR.d, {
                      name: "comment-smile",
                      className: "QuickChatIcon"
                    })
                  })
                })]
              })]
            })
          })
        }), (0, CR.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, CR.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, CR.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, CR.jsx)("div", {
                className: "TopRightIconsContainer",
                ...GJ("menu"),
                children: (0, CR.jsx)(iJ, {
                  portraitPhone: GR,
                  icons: JR.rowIcons,
                  pinnedIcons: JR.pinnedIcons,
                  hidden: tR,
                  trayState: VR,
                  moved: wR
                })
              })
            }), KR.featureFlags.useSocialFeatures && (0, CR.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, CR.jsx)(KJ, {})
            })]
          })
        }), (0, CR.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, CR.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, CR.jsxs)("div", {
            className: "TouchInteractKey",
            ...GJ("interact"),
            children: [(0, CR.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, CR.jsx)(xR.d, {
                name: "hand-back-point-up"
              })
            }), (0, CR.jsx)("div", {
              children: rR("hudLayout:previewInteract")
            })]
          })
        }), (0, CR.jsx)("div", {
          className: "BottomCentre",
          children: (0, CR.jsxs)("div", {
            className: "BottomElements",
            children: [(0, CR.jsx)("div", {
              className: "BottomLeftElements Touch",
              children: (0, CR.jsx)(rJ, {
                ghost: tR.has("effects")
              })
            }), (0, CR.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, CR.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...GJ("hotbar"),
                children: (0, CR.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, CR.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, CR.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, CR.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, CR.jsx)(xR.d, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), fR && (0, CR.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, CR.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, CR.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, hR.e)("glint"),
                    alt: ""
                  }), (0, CR.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, CR.jsx)("div", {
                  className: "AuraBar",
                  children: (0, CR.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, CR.jsx)("div", {
                className: "HotBarRow",
                children: (0, CR.jsx)("div", {
                  className: iR()("HotBarContainer Touch", {
                    KeysAbove: qR
                  }),
                  children: (0, CR.jsxs)("div", {
                    className: "HotBar",
                    ...GJ("hotbar"),
                    children: [(0, CR.jsxs)("div", {
                      className: iR()("TouchInventoryKeys", {
                        NoAuraBar: !fR
                      }),
                      children: [(0, CR.jsx)("div", {
                        className: iR()("TouchInventoryKey ShopKey", LR("shop"), {
                          Hidden: !JR.shop
                        }),
                        ...GJ("shop"),
                        children: (0, CR.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, CR.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, CR.jsx)(xR.d, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, CR.jsx)("div", {
                        className: iR()("TouchInventoryKey BagKey", LR("bag"), {
                          Hidden: !JR.bag
                        }),
                        ...GJ("bag"),
                        children: (0, CR.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, CR.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, CR.jsx)(xR.d, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, CR.jsx)(VJ, {
                      next: !1,
                      hidden: tR.has("arrows")
                    }), (0, CR.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== aR && aR.map(((RR, JR) => (0, CR.jsx)(tJ, {
                        item: RR,
                        selected: RR.classList.contains("Selected")
                      }, JR))), null === aR && LJ.map((RR => {
                        const JR = nJ[RR];
                        return (0, CR.jsx)("div", {
                          className: iR()("InvenItem", {
                            Selected: 0 === RR
                          }),
                          children: JR && (0, CR.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, CR.jsx)(xR.d, {
                              name: JR
                            })
                          })
                        }, RR)
                      }))]
                    }), (0, CR.jsx)(VJ, {
                      next: !0,
                      hidden: tR.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, CR.jsx)("div", {
              className: "BottomRightElements",
              children: (0, CR.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== eR && JJ.j.map((RR => {
                  const JR = eR[RR];
                  return JR && (0, CR.jsx)(yJ, {
                    id: JJ.g[RR],
                    slot: RR,
                    face: JR,
                    className: eJ[RR],
                    hidden: tR
                  }, RR)
                })), (0, JJ.s)(JR, uR).map((RR => (0, CR.jsx)(yJ, {
                  id: JJ.g[RR],
                  slot: RR,
                  icon: aJ[RR].icon,
                  label: rR(aJ[RR].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: tR
                }, RR))), null === eR && (0, CR.jsxs)(CR.Fragment, {
                  children: [(0, CR.jsx)(yJ, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: tR
                  }), (0, CR.jsx)(yJ, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: tR
                  }), uR && (0, CR.jsxs)(CR.Fragment, {
                    children: [(0, CR.jsx)(yJ, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: tR
                    }), (0, CR.jsx)(yJ, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: tR
                    })]
                  }), (0, JJ.l)(uR).map((RR => (0, CR.jsx)(yJ, {
                    id: JJ.g[RR],
                    slot: RR,
                    icon: aJ[RR].icon,
                    label: rR(aJ[RR].labelKey),
                    hidden: tR
                  }, RR))), (0, CR.jsx)(yJ, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: tR
                  }), (0, CR.jsx)(yJ, {
                    id: "zoom",
                    slot: "Z",
                    icon: "magnifying-glass-plus",
                    hidden: tR
                  }), (0, CR.jsx)(yJ, {
                    id: "drop",
                    slot: "D",
                    icon: "hand-holding-box",
                    hidden: tR
                  })]
                })]
              })
            })]
          })
        }), (0, CR.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, CR.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, CR.jsxs)("div", {
              className: iR()("Joystick Resting HudPreviewJoystick", {
                Floating: !ZR
              }),
              ...GJ("joystick"),
              children: [(0, CR.jsx)("div", {
                className: "JoystickBase"
              }), (0, CR.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), JR.sprint && (0, CR.jsx)("div", {
            className: iR()("TouchSprintHit", LR("sprint"), {
              AtHome: !ZR
            }),
            ...GJ("sprint"),
            children: (0, CR.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, CR.jsx)(xR.d, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function WJ() {
      const [RR, JR] = (0, tR.useState)({}), GR = (0, tR.useCallback)((RR => {
        JR((JR => [...new Set([...Object.keys(JR), ...Object.keys(RR)])].every((GR => JR[GR] === RR[GR])) ? JR : RR))
      }), []);
      return [RR, GR]
    }
    const AJ = .05;

    function CJ(RR) {
      var JR;
      let {
        selected: GR,
        layout: tR,
        actionButtons: uR,
        keyNames: ZR,
        overlaps: qR,
        scaleCaps: VR,
        joystickFixed: KR,
        onScale: wR,
        onHidden: rR,
        onReset: eR,
        locked: aR,
        lockable: LR,
        onLocked: nR,
        extra: UR
      } = RR;
      const {
        t: WR
      } = (0, yR.A)(), AR = GR ? NR.i[GR] : null, XR = null !== GR && aR.has(GR), MR = GR ? (0, lR.G)(tR.hudElements, GR)[2] : 1, BR = null !== (JR = GR && VR[GR]) && void 0 !== JR ? JR : lR.i, pR = RR => {
        GR && wR(GR, Math.min(BR, Math.round(100 * (MR + .1 * RR)) / 100))
      };
      return (0, CR.jsxs)(CR.Fragment, {
        children: [(0, CR.jsxs)("div", {
          className: iR()("HudQuickName SmallTextBold", {
            Overlap: qR.length > 0
          }),
          children: [qR.length > 0 && (0, CR.jsx)(xR.d, {
            name: "triangle-exclamation"
          }), AR ? (0, NR.z)(AR.id, uR, WR, ZR) : WR("hudLayout:fullScreenHint"), qR.length > 0 && (0, CR.jsx)("span", {
            className: "HudQuickOverlap",
            children: WR("hudLayout:overlapsShort", {
              names: (0, NR.x)(qR, uR, WR, ZR)
            })
          })]
        }), (null === AR || void 0 === AR ? void 0 : AR.scale) && (0, CR.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, CR.jsx)(fR.U, {
            disabled: XR || MR <= lR.m,
            ariaLabel: WR("hudLayout:smaller"),
            onClick: () => {
              pR(-1)
            },
            children: (0, CR.jsx)(xR.d, {
              name: "minus"
            })
          }), (0, CR.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*MR)}%`
          }), (0, CR.jsx)(fR.U, {
            disabled: XR || MR >= BR,
            ariaLabel: WR("hudLayout:larger"),
            onClick: () => {
              pR(1)
            },
            children: (0, CR.jsx)(xR.d, {
              name: "plus"
            })
          })]
        }), (AR || UR) && (0, CR.jsxs)("div", {
          className: "HudQuickActions",
          children: [AR && (0, CR.jsxs)(CR.Fragment, {
            children: [(0, CR.jsx)(cR, {
              id: AR.id,
              actionButtons: uR,
              keyNames: ZR,
              locked: XR,
              lockable: LR(AR.id),
              onLocked: nR
            }), (0, CR.jsx)(HR, {
              id: AR.id,
              elements: tR.hudElements,
              actionButtons: uR,
              keyNames: ZR,
              onHidden: rR
            }), (0, CR.jsx)(oR, {
              id: AR.id,
              elements: tR.hudElements,
              actionButtons: uR,
              keyNames: ZR,
              locked: XR,
              onReset: eR
            }), SR(AR.id, KR) && (0, CR.jsx)(jR, {})]
          }), UR]
        })]
      })
    }
    var XJ = GR(1179),
      MJ = GR(5215);
    const BJ = "HudPreviewDoc",
      lJ = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      pJ = new Set([BJ, ...Object.values(lJ)]),
      gJ = new Set(lR.A.map(sR.C)),
      bJ = new Set(sR.k),
      vJ = 'style, link[rel="stylesheet"]';

    function OJ(RR, JR, GR, yR) {
      const tR = new Map,
        uR = new Set,
        ZR = new URL(RR.baseURI).origin,
        qR = JR => {
          var GR;
          if ("LINK" !== JR.nodeName) return !0;
          const yR = null === (GR = JR.getAttribute("href")) || void 0 === GR ? void 0 : GR.trim();
          if (!yR) return !1;
          try {
            return new URL(yR, RR.baseURI).origin === ZR
          } catch {
            return !1
          }
        };
      let iR = null;
      const fR = () => {
          iR !== (0 === uR.size) && (iR = 0 === uR.size, null === yR || void 0 === yR || yR(iR))
        },
        VR = RR => {
          const JR = RR.cloneNode(!0);
          if ("LINK" === JR.tagName) {
            uR.add(JR);
            const RR = () => {
              uR.delete(JR), fR()
            };
            JR.addEventListener("load", RR), JR.addEventListener("error", RR), GR && JR.addEventListener("load", GR)
          }
          return JR
        },
        KR = () => {
          const yR = function(RR) {
              const JR = [...RR.body.children].filter((RR => RR.matches(vJ)));
              return [...RR.head.querySelectorAll(vJ), ...JR]
            }(RR).filter(qR),
            ZR = new Set(yR);
          for (const [RR, JR] of tR) ZR.has(RR) || (JR.remove(), tR.delete(RR), uR.delete(JR));
          let iR = null;
          for (let RR = yR.length - 1; RR >= 0; RR--) {
            const uR = yR[RR];
            let ZR = tR.get(uR);
            ZR ? "STYLE" === uR.tagName && ZR.textContent !== uR.textContent && (ZR.textContent = uR.textContent, null === GR || void 0 === GR || GR()) : (ZR = VR(uR), tR.set(uR, ZR), JR.head.insertBefore(ZR, iR)), iR = ZR
          }
          fR()
        };
      KR();
      const wR = new MutationObserver(KR);
      return wR.observe(RR.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), wR.observe(RR.body, {
        childList: !0
      }), () => {
        wR.disconnect()
      }
    }

    function xJ(RR, JR, GR) {
      let {
        keysAbove: yR
      } = GR;
      const tR = [...RR.documentElement.classList].filter((RR => !pJ.has(RR) && !bJ.has(RR))),
        uR = [...JR.documentElement.classList].filter((RR => bJ.has(RR))),
        ZR = [BJ, lJ.hotbar, lJ.hasShop, lJ.hasBag];
      yR && ZR.push(lJ.keysAbove), JR.documentElement.className = [...tR, ...ZR, ...uR].join(" ")
    }
    const NJ = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function DJ(RR, JR, GR, yR, tR) {
      const uR = (0, lR.C)(GR, yR, "joystick"),
        ZR = (0, sR.G)((0, sR.V)(GR, yR, tR), yR),
        qR = ZR.classes.filter((RR => !gJ.has(RR))),
        iR = JR.documentElement,
        fR = GR.hudLayouts[yR].hudSafe,
        VR = (0, sR.M)(fR, window.innerWidth, window.innerHeight, HJ(), fR ? (0, sR.Y)(JR) : 0);
      (0, sR.ab)({
        ...ZR,
        classes: qR
      }, {
        vars: iR,
        safe: iR,
        classes: iR
      }), iR.style.setProperty("--preview-joystick-shift-left", `${VR[3]}px`), iR.style.setProperty("--preview-joystick-shift-bottom", `${VR[2]}px`), iR.style.setProperty("--preview-joystick-scale", String(uR[2])), (0, MJ.f)(iR, JR, GR, yR);
      for (const KR of NJ) iR.style.setProperty(KR, RR.documentElement.style.getPropertyValue(KR) || "0px")
    }

    function HJ() {
      return (0, sR.T)(VR.d.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function oJ(RR) {
      return (0, sR.A)(HJ(), (0, sR.Y)(RR))
    }

    function cJ(RR, JR, GR) {
      const yR = RR.documentElement.style,
        tR = (0, sR.Q)(JR),
        uR = yR.getPropertyValue(tR);
      try {
        return GR((RR => {
          yR.setProperty(tR, String(RR))
        }))
      } finally {
        "" === uR ? yR.removeProperty(tR) : yR.setProperty(tR, uR)
      }
    }

    function PJ(RR, JR) {
      const [GR, yR] = cJ(RR, "hotbar", (JR => {
        const GR = GR => {
          var yR, tR;
          return JR(GR), null !== (yR = null === (tR = RR.querySelector(".HotBarGameItemsContainer")) || void 0 === tR ? void 0 : tR.getBoundingClientRect().width) && void 0 !== yR ? yR : 0
        };
        return [GR(1), GR(lR.i)]
      }));
      return GR <= 0 ? lR.i : Math.min(lR.i, Math.max(1, Math.floor(yR / GR / JR + 1e-6) * JR))
    }
    const IJ = 3,
      mJ = .5,
      zJ = RR => RR.right - RR.left;
    const SJ = (RR, JR) => Math.abs((0, QR.b)(RR).x - (0, QR.b)(JR).x) + Math.abs((0, QR.b)(RR).y - (0, QR.b)(JR).y) + Math.abs(zJ(RR) - zJ(JR));

    function jJ(RR, JR, GR, yR, tR) {
      let {
        canKeep: uR = () => !0,
        passes: ZR = IJ,
        before: qR
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const iR = JR.hudLayouts[GR].hudLocked.filter(uR);
      if (0 === iR.length) return JR;
      const fR = [...NR.b].filter((yR => !iR.includes(yR) && (0, lR.C)(RR, GR, yR).join() === (0, lR.C)(JR, GR, yR).join())),
        VR = RR => {
          const JR = (0, QR.A)(fR.flatMap((JR => RR[JR] ? [RR[JR]] : [])));
          return {
            ...RR,
            cluster: null !== JR && void 0 !== JR ? JR : void 0
          }
        };
      let KR = null;
      const wR = RR => {
          KR = RR;
          const JR = tR(RR);
          return JR && {
            ...JR,
            boxes: VR(JR.boxes)
          }
        },
        rR = qR ? {
          ...qR,
          boxes: VR(qR.boxes)
        } : wR(RR),
        eR = rR && wR(JR);
      if (!rR || !eR) return JR;
      const aR = rR.boxes;
      let LR = eR.boxes;
      const nR = rR.keysAbove !== eR.keysAbove,
        UR = nR || Boolean(rR.shopAlone) !== Boolean(eR.shopAlone),
        WR = new Set(iR.filter((RR => !(0, NR.C)(RR) || !("bag" === RR ? nR : UR))));
      let AR = JR;
      for (let MR = 0; MR < ZR && WR.size > 0; MR++) {
        var CR, XR;
        const RR = new Map;
        for (const JR of WR) {
          const tR = aR[JR],
            uR = LR[JR],
            ZR = tR && uR ? dJ(JR, (0, lR.C)(AR, GR, JR), tR, uR, yR) : null;
          ZR ? RR.set(JR, ZR) : WR.delete(JR)
        }
        if (0 === RR.size) break;
        let tR = AR;
        for (const [JR, yR] of RR) tR = (0, lR.nb)(tR, GR, JR, yR);
        const uR = null === (CR = wR(tR)) || void 0 === CR ? void 0 : CR.boxes;
        if (!uR) return JR;
        let ZR = AR;
        for (const [JR, yR] of RR) {
          const RR = uR[JR];
          RR && SJ(aR[JR], RR) < SJ(aR[JR], LR[JR]) - mJ ? ZR = (0, lR.nb)(ZR, GR, JR, yR) : WR.delete(JR)
        }
        if (ZR === AR) break;
        const qR = [...RR.keys()].every((RR => WR.has(RR)));
        AR = qR ? tR : ZR;
        const iR = qR ? uR : null === (XR = wR(AR)) || void 0 === XR ? void 0 : XR.boxes;
        if (!iR) return JR;
        LR = iR
      }
      return KR !== AR && tR(AR), AR
    }

    function dJ(RR, JR, GR, yR, tR) {
      let [uR, ZR, qR] = JR;
      const iR = lR.y[RR],
        fR = {};
      iR.scale && zJ(yR) > 0 && Math.abs(zJ(GR) - zJ(yR)) > mJ && (fR.scale = Math.max(lR.m, Math.min(lR.i, qR * zJ(GR) / zJ(yR))));
      const VR = (0, QR.b)(GR).x - (0, QR.b)(yR).x,
        KR = (0, QR.b)(GR).y - (0, QR.b)(yR).y;
      return iR.move && (Math.abs(VR) > mJ || Math.abs(KR) > mJ) && (fR.dx = uR + VR / tR.width, fR.dy = ZR + KR / tR.height), void 0 === fR.scale && void 0 === fR.dx ? null : fR
    }
    let EJ = 0;

    function YJ() {
      return EJ > 0
    }
    const kJ = RR => 0 === RR.dx && 0 === RR.dy,
      QJ = .001,
      FJ = RR => Math.abs(RR.dx) >= 5e-4 || Math.abs(RR.dy) >= 5e-4 ? RR : {
        dx: RR.dx,
        dy: RR.dy < 0 ? -.001 : QJ
      };

    function TJ(RR) {
      let {
        preview: JR,
        stageRef: GR,
        ringRef: yR,
        centreLineRef: uR,
        snapCentre: ZR,
        ready: qR,
        measure: iR,
        k: fR,
        viewport: VR,
        boxes: KR,
        pieces: wR,
        selected: rR,
        insets: eR,
        layout: aR,
        canMove: LR,
        onSelect: nR,
        onMove: UR
      } = RR;
      const WR = (0, tR.useRef)(null),
        AR = (0, tR.useCallback)((() => null !== WR.current), []),
        CR = (RR, JR) => {
          if (!JR) return null;
          const GR = (0, QR.b)(RR.origin),
            yR = (0, QR.b)(JR),
            tR = (RR.to.dx - RR.from.dx) * VR.width,
            uR = (RR.to.dy - RR.from.dy) * VR.height,
            ZR = JR.right - JR.left,
            qR = JR.bottom - JR.top;
          return {
            skew: {
              x: yR.x - GR.x - tR,
              y: yR.y - GR.y - uR
            },
            box: {
              left: GR.x - ZR / 2,
              top: GR.y - qR / 2,
              right: GR.x + ZR / 2,
              bottom: GR.y + qR / 2
            }
          }
        },
        XR = (RR, GR) => {
          var tR;
          const ZR = WR.current;
          if (!ZR || ZR.pointerId !== RR.pointerId) return;
          WR.current = null, null === (tR = uR.current) || void 0 === tR || tR.classList.remove("Shown", "Snapped");
          const qR = yR.current;
          if (qR && null !== ZR.ringStyle && qR.setAttribute("style", ZR.ringStyle), GR && ZR.moved) {
            const RR = kJ(ZR.to) ? null : iR(ZR.id),
              JR = RR ? (0, QR.z)(RR, (0, QR.y)(VR.width, VR.height, eR)) : {
                x: 0,
                y: 0
              },
              GR = {
                dx: ZR.to.dx + JR.x / VR.width,
                dy: ZR.to.dy + JR.y / VR.height
              },
              yR = kJ(ZR.to) ? GR : FJ(GR);
            UR(ZR.id, yR.dx, yR.dy)
          } else JR(ZR.id, null), GR && ZR.tapPick && nR(ZR.tapPick)
        };
      return {
        busy: AR,
        handlers: {
          onPointerDown: RR => {
            var JR;
            if (!qR || WR.current || !RR.target.closest(".HudPreviewHandle")) return;
            const yR = GR.current.getBoundingClientRect(),
              tR = {
                x: (RR.clientX - yR.left) / fR,
                y: (RR.clientY - yR.top) / fR
              },
              uR = (0, QR.s)(tR, wR, 40 / fR),
              ZR = null !== rR ? NR.q.get(rR) : void 0,
              iR = void 0 !== ZR && null !== (0, QR.s)(tR, wR.filter((RR => {
                let {
                  id: JR
                } = RR;
                return ZR.has(JR)
              })), 40 / fR),
              VR = "menu" === rR && void 0 !== KR.menu && (0, QR.c)(KR.menu, tR) && ("menu" === uR || null !== uR && (0, TR.E)(uR, aR.hudElements[uR])),
              eR = iR ? rR : VR ? "menu" : null,
              UR = null !== eR,
              AR = null !== eR && void 0 !== eR ? eR : uR;
            if (!AR) return;
            if (function(RR) {
                EJ++;
                const JR = GR => {
                  GR.pointerId === RR && (EJ = Math.max(0, EJ - 1), window.removeEventListener("pointerup", JR, !0), window.removeEventListener("pointercancel", JR, !0))
                };
                window.addEventListener("pointerup", JR, !0), window.addEventListener("pointercancel", JR, !0)
              }(RR.pointerId), !LR(AR)) return void nR(UR && uR ? uR : AR);
            nR(AR);
            const [CR, XR] = null !== (JR = aR.hudElements[AR]) && void 0 !== JR ? JR : [0, 0], MR = {
              dx: CR,
              dy: XR
            }, BR = {
              skew: {
                x: 0,
                y: 0
              },
              box: KR[AR]
            };
            WR.current = {
              id: AR,
              pointerId: RR.pointerId,
              startX: RR.clientX,
              startY: RR.clientY,
              origin: KR[AR],
              from: MR,
              to: MR,
              moved: !1,
              home: kJ(MR) ? {
                centre: (0, QR.b)(KR[AR]),
                anchor: BR
              } : null,
              away: kJ(MR) ? null : BR,
              anchor: BR,
              ringStyle: null,
              tapPick: UR ? uR : null
            }, RR.currentTarget.setPointerCapture(RR.pointerId)
          },
          onPointerMove: RR => {
            const GR = WR.current;
            if (!GR || GR.pointerId !== RR.pointerId) return;
            const tR = RR.clientX - GR.startX,
              qR = RR.clientY - GR.startY;
            if (!GR.moved && Math.hypot(tR, qR) < 5) return;
            const KR = !GR.moved;
            var wR, rR;
            (GR.moved = !0, KR) && (GR.ringStyle = null !== (wR = null === (rR = yR.current) || void 0 === rR ? void 0 : rR.getAttribute("style")) && void 0 !== wR ? wR : null);
            const aR = (0, QR.y)(VR.width, VR.height, eR);
            if (!GR.home) {
              var LR;
              GR.to = {
                dx: 0,
                dy: 0
              }, JR(GR.id, GR.to);
              const RR = iR(GR.id),
                yR = null !== (LR = CR(GR, RR)) && void 0 !== LR ? LR : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: GR.origin
                },
                tR = (0, QR.b)(GR.origin);
              GR.home = {
                centre: RR ? (0, QR.b)(RR) : {
                  x: tR.x - GR.from.dx * VR.width,
                  y: tR.y - GR.from.dy * VR.height
                },
                anchor: yR
              }
            }
            const nR = GR.home;
            let UR = !1;
            const AR = RR => {
                UR = !1;
                let yR = (0, QR.l)(RR.box, tR / fR, qR / fR, aR);
                const uR = VR.width / 2;
                if (ZR && Math.abs((0, QR.b)(GR.origin).x + yR.x - uR) <= 8 / fR) {
                  const JR = uR - (0, QR.b)(GR.origin).x,
                    tR = (0, QR.l)(RR.box, JR, yR.y, aR);
                  UR = Math.abs(tR.x - JR) < .01, UR && (yR = tR)
                }
                const iR = (0, QR.p)(GR.from, yR.x - RR.skew.x, yR.y - RR.skew.y, VR.width, VR.height);
                GR.to = FJ(iR), GR.anchor = RR, JR(GR.id, GR.to)
              },
              XR = (0, QR.l)(nR.anchor.box, tR / fR, qR / fR, aR),
              MR = uR.current,
              BR = (0, QR.b)(GR.origin),
              pR = ((0, lR.S)(GR.id) ? 20 : 6) / fR;
            if (Math.abs(BR.x + XR.x - nR.centre.x) <= pR && Math.abs(BR.y + XR.y - nR.centre.y) <= pR) GR.to = {
              dx: 0,
              dy: 0
            }, GR.anchor = nR.anchor, UR = ZR && Math.abs(nR.centre.x - VR.width / 2) < 1, JR(GR.id, GR.to);
            else if (GR.away) AR(GR.away);
            else {
              var gR;
              AR(nR.anchor), GR.away = null !== (gR = CR(GR, iR(GR.id))) && void 0 !== gR ? gR : nR.anchor, AR(GR.away)
            }
            null === MR || void 0 === MR || MR.classList.add("Shown"), null === MR || void 0 === MR || MR.classList.toggle("Snapped", UR), (RR => {
              const JR = yR.current;
              if (JR) {
                const {
                  skew: GR,
                  box: yR
                } = RR.anchor;
                JR.style.left = yR.left * fR + "px", JR.style.top = yR.top * fR + "px", JR.style.width = (yR.right - yR.left) * fR + "px", JR.style.height = (yR.bottom - yR.top) * fR + "px", JR.style.translate = `${((RR.to.dx-RR.from.dx)*VR.width+GR.x)*fR}px ${((RR.to.dy-RR.from.dy)*VR.height+GR.y)*fR}px`
              }
            })(GR)
          },
          onPointerUp: RR => {
            XR(RR, !0)
          },
          onPointerCancel: RR => {
            XR(RR, !1)
          }
        }
      }
    }
    var sJ = GR(10262);

    function hJ(RR, JR) {
      return Object.keys(RR).filter((RR => RR !== JR)).map((JR => RR[JR]))
    }

    function RG(RR) {
      return RR.map((RR => {
        let {
          id: JR,
          box: GR
        } = RR;
        return `${JR}:${GR.left},${GR.top},${GR.right},${GR.bottom}`
      })).join(";")
    }

    function JG(RR) {
      const JR = [],
        GR = JR => (0, lR.S)(JR) && !RR.documentElement.classList.contains((0, sR.K)(JR));
      for (const qR of RR.querySelectorAll(`[${NR.e}]`)) {
        const RR = GR(qR.getAttribute(NR.e)) ? qR.querySelector(".ScaleOnHover") : null,
          yR = (null !== RR && void 0 !== RR ? RR : qR).getBoundingClientRect();
        (yR.width > 0 || yR.height > 0) && JR.push({
          id: qR.getAttribute(NR.e),
          box: (0, QR.d)(yR)
        })
      }
      const yR = RR => (0, QR.A)(JR.filter((JR => {
          let {
            id: GR
          } = JR;
          return RR(GR)
        })).map((RR => {
          let {
            box: JR
          } = RR;
          return JR
        }))),
        tR = {};
      for (const qR of new Set(JR.map((RR => RR.id)))) tR[qR] = yR((RR => RR === qR));
      for (const [qR, iR] of NR.q) {
        const RR = yR((RR => iR.has(RR)));
        RR && (tR[qR] = RR)
      }
      const uR = RR.querySelector(".TouchInventoryKeys"),
        ZR = uR ? (0, QR.d)(uR.getBoundingClientRect()) : null;
      return {
        boxes: tR,
        pieces: JR,
        pairHome: ZR
      }
    }

    function GG(RR, JR, GR) {
      const yR = JR.right - JR.left,
        tR = JR.bottom - JR.top;
      return cJ(RR, "cluster", (JR => {
        const uR = GR => {
            JR(GR);
            const yR = [...RR.querySelectorAll(`[${NR.e}]:not(.HudPreviewGhost)`)].filter((RR => NR.b.has(RR.getAttribute(NR.e)))).map((RR => (0, QR.d)(RR.getBoundingClientRect()))),
              tR = (0, QR.A)(yR);
            return tR ? {
              w: tR.right - tR.left,
              h: tR.bottom - tR.top
            } : null
          },
          ZR = RR => !RR || RR.w <= yR && RR.h <= tR,
          qR = uR(1),
          iR = uR(lR.i);
        if (!qR || ZR(iR)) return lR.i;
        const fR = (RR, JR, GR) => JR > RR ? 1 + (GR - RR) * (lR.i - 1) / (JR - RR) : lR.i;
        let VR = Math.floor(Math.min(lR.i, fR(qR.w, iR.w, yR), fR(qR.h, iR.h, tR)) / GR + 1e-6) * GR;
        for (; VR > 1 && !ZR(uR(VR));) VR = Math.round(100 * (VR - GR)) / 100;
        return Math.max(1, VR)
      }))
    }

    function yG(RR) {
      xJ(document, RR, {
        keysAbove: !1
      });
      const JR = parseFloat(getComputedStyle(RR.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        GR = Number.isFinite(JR) && JR < 0;
      return xJ(document, RR, {
        keysAbove: GR
      }), (0, sJ.e)(RR), GR
    }

    function tG(RR) {
      const JR = RR.querySelector(".TouchInventoryKey.ShopKey");
      return null !== JR && "1" === getComputedStyle(JR).getPropertyValue("--touch-shop-above").trim()
    }

    function uG(RR, JR) {
      let {
        layout: GR,
        orientation: yR,
        viewport: uR,
        replicaKey: ZR,
        joystickFixed: qR,
        busy: iR
      } = JR;
      const [fR, VR] = (0, tR.useState)(null), [KR, wR] = (0, tR.useState)({
        boxes: {},
        pieces: []
      }), [rR, eR] = (0, tR.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [aR, LR] = (0, tR.useState)(!1), [nR, UR] = (0, tR.useState)(!1), [WR, AR] = (0, tR.useState)(!1), CR = (0, tR.useCallback)((RR => {
        UR(RR), RR && AR(!0)
      }), []), XR = GR.hudLayouts[yR].hudSafe;
      (0, tR.useLayoutEffect)((() => {
        const JR = RR.current.contentDocument;
        JR.open(), JR.write("<!DOCTYPE html><html><head></head><body></body></html>"), JR.close(), VR(JR)
      }), [RR]);
      const MR = (0, tR.useCallback)((() => {
          fR && ((0, TR.H)(fR), wR(JG(fR)), eR(function(RR, JR) {
            const GR = oJ(RR),
              [yR, tR, uR, ZR] = JR ? (0, sR.B)(JR, window.innerWidth, window.innerHeight, GR) : GR;
            return {
              top: yR,
              right: tR,
              bottom: uR,
              left: ZR
            }
          }(fR, XR)))
        }), [fR, XR]),
        BR = (0, tR.useCallback)((() => {
          fR && LR(yG(fR))
        }), [fR]),
        lR = (0, tR.useRef)((() => {}));
      return lR.current = () => {
        BR(), iR() || MR()
      }, (0, tR.useLayoutEffect)((() => {
        if (fR) return OJ(document, fR, (() => {
          lR.current()
        }), CR)
      }), [fR, CR]), (0, tR.useLayoutEffect)(BR, [BR, uR]), (0, tR.useLayoutEffect)((() => {
        fR && (xJ(document, fR, {
          keysAbove: aR
        }), DJ(document, fR, GR, yR, qR), BR(), MR())
      }), [fR, GR, yR, aR, ZR, qR, uR, MR, BR]), (0, tR.useEffect)((() => {
        var RR;
        if (!fR) return;
        const JR = new ResizeObserver((() => {
          iR() || MR()
        }));
        for (const GR of fR.querySelectorAll(`[${NR.e}]`)) JR.observe(GR);
        return null === (RR = fR.fonts) || void 0 === RR || RR.ready.then(MR), () => {
          JR.disconnect()
        }
      }), [fR, MR, iR, ZR]), {
        doc: fR,
        boxes: KR.boxes,
        pieces: KR.pieces,
        insets: rR,
        keysAbove: aR,
        ready: nR,
        settled: WR
      }
    }
    const ZG = ["Above", "Below", "Left", "Right"];

    function qG(RR, JR, GR, yR, tR) {
      const uR = GR[RR],
        ZR = (uR.left + uR.right) / 2,
        qR = (uR.top + uR.bottom) / 2,
        iR = (7.5 * JR.length + 14) / yR,
        fR = 18 / yR,
        VR = {
          Above: {
            left: ZR - iR / 2,
            top: uR.top - fR,
            right: ZR + iR / 2,
            bottom: uR.top
          },
          Below: {
            left: ZR - iR / 2,
            top: uR.bottom,
            right: ZR + iR / 2,
            bottom: uR.bottom + fR
          },
          Left: {
            left: uR.left - iR,
            top: qR - fR / 2,
            right: uR.left,
            bottom: qR + fR / 2
          },
          Right: {
            left: uR.right,
            top: qR - fR / 2,
            right: uR.right + iR,
            bottom: qR + fR / 2
          }
        },
        KR = hJ(GR, RR),
        wR = {
          left: 0,
          top: 0,
          right: tR.width,
          bottom: tR.height
        };
      return ZG[(0, QR.o)(ZG.map((RR => VR[RR])), KR, {
        bounds: wR
      })]
    }

    function iG() {
      const [RR, JR] = (0, YR.e)();
      return (0, tR.useMemo)((() => ({
        width: RR,
        height: JR
      })), [RR, JR])
    }

    function fG(RR) {
      var JR;
      const {
        layout: GR,
        orientation: uR,
        selected: ZR,
        onSelect: qR,
        onMove: fR,
        canMove: VR,
        actionButtons: KR,
        joystickFixed: wR,
        presence: rR,
        keyNames: aR,
        maxHeight: LR,
        fill: nR = !1,
        apiRef: UR
      } = RR, {
        t: WR
      } = (0, yR.A)(), AR = iG(), XR = (null !== (JR = (0, eR.f)("maxAuraLevel")) && void 0 !== JR ? JR : 0) > 0, MR = GR.hudLayouts[uR], BR = (0, tR.useRef)(null), pR = (0, tR.useRef)(null), gR = (0, tR.useRef)(null), bR = (0, tR.useRef)(null), vR = (0, tR.useRef)(null), OR = (0, tR.useRef)(null), DR = (0, kR.b)(BR).width, HR = nR ? 1 : DR > 0 ? (0, QR.u)(DR, AR.width, AR.height, LR) : 0, oR = (0, tR.useRef)((() => !1)), cR = (0, tR.useCallback)((() => oR.current()), []), PR = `${KR}:${wR}:${XR}`, {
        doc: IR,
        boxes: mR,
        pieces: zR,
        insets: SR,
        keysAbove: jR,
        ready: ER,
        settled: YR
      } = uG(gR, {
        layout: GR,
        orientation: uR,
        viewport: AR,
        replicaKey: PR,
        joystickFixed: wR,
        busy: cR
      }), hR = (0, tR.useCallback)((RR => {
        IR && DJ(document, IR, RR, uR, wR)
      }), [IR, uR, wR]), RJ = (0, tR.useCallback)((RR => {
        if (!IR || !YR) return null;
        hR(RR);
        const JR = yG(IR),
          GR = function(RR, JR) {
            let {
              boxes: GR,
              pieces: yR,
              pairHome: tR
            } = RR;
            const uR = yR.find((RR => NR.p.has(RR.id)));
            if (!uR || !tR) return GR;
            const ZR = (0, QR.b)(tR),
              qR = JR(uR.id),
              iR = zJ(uR.box) / qR / 2,
              fR = (uR.box.bottom - uR.box.top) / qR / 2;
            return {
              ...GR,
              inventory: {
                left: ZR.x - iR,
                top: ZR.y - fR,
                right: ZR.x + iR,
                bottom: ZR.y + fR
              }
            }
          }(JG(IR), (JR => (0, lR.C)(RR, uR, JR)[2]));
        return {
          boxes: GR,
          keysAbove: JR,
          shopAlone: tG(IR)
        }
      }), [IR, YR, hR, uR]), JJ = (0, tR.useRef)(null), GJ = (0, tR.useRef)(null), yJ = (0, tR.useRef)(GR);
      yJ.current = GR;
      const tJ = (0, tR.useCallback)((() => {
        null !== JJ.current && (cancelAnimationFrame(JJ.current), JJ.current = null)
      }), []);
      (0, tR.useEffect)((() => tJ), [GR, tJ]);
      const uJ = (0, tR.useRef)(-1 / 0),
        {
          lockable: ZJ
        } = RR,
        qJ = (0, tR.useCallback)((RR => {
          if (hR(RR), uJ.current = performance.now(), !YR || 0 === GR.hudLayouts[uR].hudLocked.length) return;
          const JR = GR;
          tJ(), JJ.current = requestAnimationFrame((() => {
            var GR;
            if (JJ.current = null, yJ.current !== JR) return;
            const yR = (null === (GR = GJ.current) || void 0 === GR ? void 0 : GR.from) === JR ? GJ.current.measured : RJ(JR);
            yR && (GJ.current = {
              from: JR,
              measured: yR
            }), hR(yR ? jJ(JR, RR, uR, AR, RJ, {
              canKeep: ZJ,
              passes: 1,
              before: yR
            }) : RR)
          }))
        }), [hR, YR, GR, uR, AR, RJ, ZJ, tJ]),
        iJ = TJ({
          preview: (RR, JR) => {
            JR ? qJ((0, lR.nb)(GR, uR, RR, JR)) : (tJ(), hR(GR))
          },
          stageRef: pR,
          ringRef: bR,
          centreLineRef: vR,
          snapCentre: GR.hudSnapCentre,
          ready: YR,
          measure: RR => {
            const JR = IR && ER ? JG(IR).boxes[RR] : void 0;
            return JR && (0, QR.f)(JR, AR.width, AR.height) ? JR : null
          },
          k: HR,
          viewport: AR,
          boxes: mR,
          pieces: zR,
          selected: ZR,
          insets: SR,
          layout: MR,
          canMove: VR,
          onSelect: qR,
          onMove: (RR, JR, GR) => {
            tJ(), fR(RR, JR, GR)
          }
        });
      (0, tR.useLayoutEffect)((() => {
        oR.current = iJ.busy
      }), [iJ.busy]);
      const fJ = (0, tR.useRef)([]),
        VJ = (0, tR.useRef)(MR.hudElements);
      (0, tR.useEffect)((() => {
        for (const tR of Object.keys(MR.hudElements)) {
          var RR, JR, GR, yR;
          (null !== (RR = null === (JR = MR.hudElements[tR]) || void 0 === JR ? void 0 : JR[2]) && void 0 !== RR ? RR : 1) > (null !== (GR = null === (yR = VJ.current[tR]) || void 0 === yR ? void 0 : yR[2]) && void 0 !== GR ? GR : 1) && VR(tR) && !(0, TR.E)(tR, MR.hudElements[tR]) && fJ.current.push(...(0, NR.I)(tR, jR, VR))
        }
        VJ.current = MR.hudElements
      }), [MR.hudElements, VR, jR]), (0, tR.useEffect)((() => {
        if (!ER) return;
        const RR = (0, QR.y)(AR.width, AR.height, SR);
        for (const GR of (0, NR.F)(fJ.current.splice(0), mR, RR, VR)) {
          const yR = mR[GR];
          if (!yR || iJ.busy() || !(0, QR.f)(yR, AR.width, AR.height)) continue;
          const tR = (0, QR.z)(yR, RR);
          if (0 !== tR.x || 0 !== tR.y) {
            var JR;
            const [RR, yR] = null !== (JR = MR.hudElements[GR]) && void 0 !== JR ? JR : [0, 0];
            fR(GR, RR + tR.x / AR.width, yR + tR.y / AR.height)
          }
        }
      }), [mR, ER]), (0, tR.useImperativeHandle)(UR, (() => ({
        setScale: (RR, JR) => {
          qJ((0, lR.nb)(GR, uR, RR, {
            scale: JR
          }))
        },
        setKeyStyle: RR => {
          hR({
            ...GR,
            ...RR
          })
        },
        keepLocks: (RR, JR) => (tJ(), jJ(RR, JR, uR, AR, RJ, {
          canKeep: ZJ
        })),
        setSafe: RR => {
          const JR = (0, sR.B)(RR, AR.width, AR.height, oJ(null !== IR && void 0 !== IR ? IR : document));
          qJ((0, lR.ub)(GR, uR, RR)), OR.current && (OR.current.style.inset = JR.map((RR => RR * HR + "px")).join(" "))
        }
      })), [hR, qJ, RJ, tJ, ZJ, IR, GR, uR, AR, HR]);
      const KJ = (0, lR.t)(MR.hudElements),
        wJ = ZR ? mR[ZR] : void 0,
        rJ = ZR ? (0, NR.z)(ZR, KR, WR, aR) : "",
        eJ = (0, XJ.d)(AR.width, AR.height),
        aJ = ZR ? (0, FR.d)(ZR, zR, MR, eJ) : [],
        LJ = new Set((0, TR.x)(MR.hudElements)),
        nJ = (0, TR.M)(MR, (0, TR.L)(rR.rowIcons)).state,
        WJ = aJ.join(),
        CJ = (0, tR.useRef)(RR.onReady);
      CJ.current = RR.onReady, (0, tR.useEffect)((() => {
        var RR;
        null === (RR = CJ.current) || void 0 === RR || RR.call(CJ, YR)
      }), [YR]);
      const MJ = (0, tR.useRef)(RR.onMeasured);
      (0, tR.useLayoutEffect)((() => {
        MJ.current = RR.onMeasured
      }));
      const BJ = (0, tR.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        lJ = [RG(zR), AR.width, AR.height, SR.top, SR.right, SR.bottom, SR.left, ER, PR].join("|");
      (0, tR.useEffect)((() => {
        const RR = WJ ? WJ.split(",") : [],
          JR = () => {
            var JR;
            null === (JR = MJ.current) || void 0 === JR || JR.call(MJ, mR, RR, BJ.current.caps)
          };
        let GR;
        const yR = () => {
          const RR = yJ.current;
          if (!IR || RR === BJ.current.layout && lJ === BJ.current.input) return !1;
          const tR = uJ.current + 250 - performance.now();
          return RR === BJ.current.layout && (tR > 0 || cR()) ? (GR = setTimeout((() => {
            yR() && JR()
          }), Math.max(tR, 62.5)), !1) : (BJ.current = {
            layout: RR,
            input: lJ,
            caps: {
              hotbar: PJ(IR, AJ),
              cluster: GG(IR, (0, QR.y)(AR.width, AR.height, SR), AJ)
            }
          }, !0)
        };
        return yR(), JR(), () => {
          clearTimeout(GR)
        }
      }), [mR, WJ, IR, AR, SR, lJ, cR]);
      const pJ = RR => ({
        left: RR.left * HR,
        top: RR.top * HR,
        width: (RR.right - RR.left) * HR,
        height: (RR.bottom - RR.top) * HR
      });
      return (0, CR.jsx)("div", {
        ref: BR,
        className: iR()("HudPreviewBox", {
          Fill: nR
        }),
        style: {
          height: AR.height * HR
        },
        children: (0, CR.jsxs)("div", {
          ref: pR,
          className: "HudPreviewStage",
          style: {
            width: AR.width * HR,
            height: AR.height * HR
          },
          children: [(0, CR.jsx)("iframe", {
            ref: gR,
            className: "HudPreviewFrame",
            title: WR("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: AR.width,
              height: AR.height,
              transform: `scale(${HR})`
            }
          }), IR && (0, dR.createPortal)((0, CR.jsx)(UJ, {
            presence: rR,
            portraitPhone: eJ,
            hidden: KJ,
            actionButtons: KR,
            joystickFixed: wR,
            keysAbove: jR,
            auraBar: XR,
            trayState: nJ,
            moved: LJ
          }), IR.body), (0, CR.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...iJ.handlers,
            children: [(0, CR.jsx)("div", {
              ref: OR,
              className: "HudPreviewSafeZone",
              style: {
                top: SR.top * HR,
                right: SR.right * HR,
                bottom: SR.bottom * HR,
                left: SR.left * HR
              }
            }), zR.map(((RR, JR) => {
              let {
                id: GR,
                box: yR
              } = RR;
              return (0, CR.jsx)("div", {
                className: "HudPreviewHandle",
                style: pJ((0, QR.n)(yR, 40 / HR))
              }, `${GR}:${JR}`)
            })), MR.hudLocked.map((RR => {
              const JR = mR[RR];
              return JR && (0, CR.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: JR.right * HR,
                  top: JR.top * HR
                },
                children: (0, CR.jsx)(xR.d, {
                  name: "lock"
                })
              }, RR)
            })), (0, CR.jsx)("div", {
              ref: vR,
              className: "HudPreviewCentreLine",
              style: {
                left: AR.width / 2 * HR
              }
            }), ZR && wJ && (0, CR.jsx)("div", {
              ref: bR,
              className: iR()("HudPreviewRing", {
                Fixed: !VR(ZR),
                Overlap: aJ.length > 0
              }),
              style: pJ(wJ),
              children: (0, CR.jsx)("span", {
                className: iR()("HudPreviewRingLabel", qG(ZR, rJ, mR, HR, AR)),
                children: rJ
              })
            })]
          })]
        })
      })
    }

    function VG(RR, JR) {
      (0, tR.useEffect)((() => {
        var GR;
        null === (GR = RR.current) || void 0 === GR || GR.toggleAttribute("inert", JR)
      }), [RR, JR])
    }
    const KG = "hudFullScreen";

    function wG(RR) {
      let {
        onScale: JR,
        onHidden: GR,
        onReset: uR,
        locked: ZR,
        lockable: qR,
        onLocked: iR,
        onClose: VR,
        ...KR
      } = RR;
      const {
        t: wR
      } = (0, yR.A)(), rR = (0, tR.useRef)(null);
      (0, ER.u)("popup", rR, VR),
      function(RR) {
        const JR = (0, tR.useRef)(RR);
        JR.current = RR, (0, tR.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [KG]: !0
          }, "");
          let RR = !1;
          const GR = () => {
            RR = !0, JR.current()
          };
          return window.addEventListener("popstate", GR), () => {
            var JR;
            window.removeEventListener("popstate", GR), !RR && null !== (JR = window.history.state) && void 0 !== JR && JR[KG] && window.history.back()
          }
        }), [])
      }(VR), (0, tR.useEffect)((() => {
        function RR(RR) {
          "Escape" === RR.key && (RR.stopPropagation(), VR())
        }
        return window.addEventListener("keydown", RR, !0), () => {
          window.removeEventListener("keydown", RR, !0)
        }
      }), [VR]);
      const {
        selected: eR
      } = KR, aR = (0, tR.useRef)(null), LR = (0, tR.useRef)(null), [nR, UR] = (0, tR.useState)(!1);
      VG(LR, !nR);
      const [WR, AR] = (0, tR.useState)(null), [XR, MR] = (0, tR.useState)([]), [BR, lR] = WJ(), pR = (0, tR.useRef)(KR.selected);
      pR.current = KR.selected;
      const gR = (0, tR.useRef)({}),
        bR = (0, tR.useCallback)((() => {
          const RR = aR.current;
          RR && AR(function(RR, JR, GR) {
            var yR;
            const {
              innerWidth: tR,
              innerHeight: uR
            } = window, ZR = RR.offsetWidth, qR = RR.offsetHeight, iR = Math.max(HJ()[0], 6), fR = [];
            for (const wR of [iR, .2 * uR, .5 * uR - qR / 2, .33 * uR])
              for (const RR of [.5, .3, .7]) fR.push({
                left: Math.max(0, Math.min(tR - ZR - 6, Math.max(6, tR * RR - ZR / 2))),
                top: wR
              });
            const VR = fR.map((RR => ({
                left: RR.left - 6,
                top: RR.top - 6,
                right: RR.left + ZR + 6,
                bottom: RR.top + qR + 6
              }))),
              KR = hJ(JR, GR);
            return fR[(0, QR.o)(VR, KR, {
              avoid: GR && null !== (yR = JR[GR]) && void 0 !== yR ? yR : null
            })]
          }(RR, gR.current, pR.current))
        }), []),
        vR = (0, tR.useCallback)(((RR, JR, GR) => {
          MR(JR), lR(GR), gR.current = RR, bR()
        }), [bR, lR]);
      return (0, tR.useLayoutEffect)(bR, [KR.selected, bR]), (0, dR.createPortal)((0, CR.jsxs)("div", {
        ref: rR,
        className: "HudFullScreenEditor",
        children: [(0, CR.jsx)(fG, {
          ...KR,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: vR,
          onReady: UR,
          lockable: qR
        }), (0, CR.jsxs)("div", {
          ref: aR,
          className: "HudFullScreenToolbar",
          style: null === WR ? void 0 : {
            left: WR.left,
            top: WR.top,
            transform: "none"
          },
          children: [(0, CR.jsx)("div", {
            ref: LR,
            className: "HudFullScreenControls",
            children: (0, CR.jsx)(CJ, {
              selected: eR,
              layout: KR.layout.hudLayouts[KR.orientation],
              actionButtons: KR.actionButtons,
              keyNames: KR.keyNames,
              overlaps: XR,
              scaleCaps: BR,
              onScale: JR,
              onHidden: GR,
              onReset: uR,
              locked: ZR,
              lockable: qR,
              onLocked: iR,
              joystickFixed: KR.joystickFixed
            })
          }), (0, CR.jsx)(fR.g, {
            className: "HudFullScreenDone",
            onClick: VR,
            padDefaultFocus: !0,
            children: wR("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    var rG = GR(10273);
    const eG = [{
      colour: GR(3508).d,
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

    function aG(RR) {
      let {
        colour: JR,
        previewApi: GR
      } = RR;
      const {
        t: uR
      } = (0, yR.A)(), [ZR, qR] = (0, tR.useState)(null), iR = (0, tR.useRef)(null), fR = (0, tR.useRef)(), VR = (0, tR.useRef)(!1), KR = (0, tR.useCallback)((() => {
        clearTimeout(fR.current), null !== iR.current && ((0, lR.$)(iR.current), iR.current = null)
      }), []);
      return (0, tR.useEffect)((() => KR), [KR]), (0, CR.jsx)(rG.b, {
        label: uR("hudLayout:keyColour"),
        value: null !== ZR && void 0 !== ZR ? ZR : JR,
        swatches: eG.map((RR => ({
          colour: RR.colour,
          label: uR(`hudLayout:keyColour_${RR.name}`)
        }))),
        customLabel: uR("hudLayout:keyColourCustom"),
        onChange: RR => {
          var JR;
          iR.current = RR, qR(RR), null === (JR = GR.current) || void 0 === JR || JR.setKeyStyle({
            hudKeyColour: RR
          }), clearTimeout(fR.current), fR.current = setTimeout((() => {
            KR(), qR(null)
          }), 250), VR.current || (VR.current = !0, (0, MR.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: "colour"
          }))
        }
      })
    }
    const LG = RR => `${Math.round(100*RR)}%`;

    function nG(RR) {
      let {
        info: JR,
        tuple: GR,
        props: tR
      } = RR;
      const {
        t: uR
      } = (0, yR.A)();
      return (0, CR.jsx)(rR.i, {
        name: uR("hudLayout:size"),
        min: lR.m,
        max: lR.i,
        step: AJ,
        initValue: GR[2],
        disabled: tR.locked.has(JR.id),
        selectableMax: tR.scaleCaps[JR.id],
        cappedNote: uR("hudLayout:sizeCapped"),
        format: LG,
        onChange: RR => {
          tR.onScalePreview(JR.id, RR)
        },
        onChangeComplete: RR => {
          tR.onScale(JR.id, RR)
        }
      })
    }

    function UG(RR) {
      const {
        t: JR
      } = (0, yR.A)(), {
        present: GR,
        elements: uR,
        selected: ZR,
        onSelect: qR,
        onHidden: fR,
        onReset: VR,
        note: KR,
        actionButtons: wR,
        keyNames: rR,
        sizeBesidePreview: eR,
        locked: aR,
        lockable: LR,
        onLocked: nR
      } = RR, {
        rowIconsOpen: UR,
        onRowIconsOpen: WR
      } = RR, AR = (0, tR.useRef)(null), XR = null !== ZR && (UR || !(0, lR.S)(ZR));
      return (0, tR.useEffect)((() => {
        var RR;
        const JR = ZR ? null === (RR = AR.current) || void 0 === RR ? void 0 : RR.querySelector(`[data-hud-row="${ZR}"]`) : null;
        if (!JR) return;
        const GR = JR.closest(".SettingsMenuRight"),
          yR = performance.now();
        let tR = null;
        const uR = () => {
            clearInterval(iR), null === GR || void 0 === GR || GR.removeEventListener("scroll", qR)
          },
          qR = () => {
            YJ() || uR()
          },
          iR = setInterval((() => {
            const RR = performance.now();
            RR - yR > 1500 ? uR() : YJ() ? tR = null : null === tR ? tR = RR : RR - tR >= 150 && (uR(), function(RR) {
              var JR;
              const GR = RR.closest(".SettingsMenuRight"),
                yR = null === (JR = RR.closest(".HudLayoutSettings")) || void 0 === JR ? void 0 : JR.querySelector(".HudLayoutPreviewBox");
              if (!GR || !yR) return;
              const tR = yR.getBoundingClientRect().bottom + 8,
                uR = GR.getBoundingClientRect().bottom - 8,
                ZR = RR.getBoundingClientRect();
              ZR.top < tR ? GR.scrollBy({
                top: ZR.top - tR,
                behavior: "smooth"
              }) : ZR.bottom > uR && GR.scrollBy({
                top: Math.min(ZR.bottom - uR, ZR.top - tR),
                behavior: "smooth"
              })
            }(JR))
          }), 50);
        return null === GR || void 0 === GR || GR.addEventListener("scroll", qR, {
          passive: !0
        }), uR
      }), [ZR, XR]), (0, CR.jsx)("div", {
        ref: AR,
        className: "SettingBoxGroup HudElementList",
        children: NR.m.filter((RR => GR.has(RR.id) && (UR || !(0, lR.S)(RR.id)))).map((GR => {
          const yR = (0, lR.G)(uR, GR.id),
            tR = (0, lR.u)(uR, GR.id),
            AR = GR.id === ZR,
            XR = GR.scale && !eR,
            MR = KR(GR.id, AR);
          return (0, CR.jsxs)("div", {
            "data-hud-row": GR.id,
            className: iR()("SettingBox HudElementRow", {
              Open: AR,
              Hidden: tR,
              Child: void 0 !== GR.parent,
              Grandchild: (0, NR.u)(GR.id).length > 1
            }),
            children: [(0, CR.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, CR.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": XR ? AR : void 0,
                onClick: () => {
                  qR(GR.id)
                },
                children: (0, CR.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [(0, NR.z)(GR.id, wR, JR, rR), GR.scale && 1 !== yR[2] && !(AR && XR) && (0, CR.jsxs)(CR.Fragment, {
                    children: [" ", (0, CR.jsx)("span", {
                      className: "HudElementRowSize",
                      children: LG(yR[2])
                    })]
                  }), XR && (0, CR.jsxs)(CR.Fragment, {
                    children: [" ", (0, CR.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, CR.jsx)(cR, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: GR.id,
                actionButtons: wR,
                keyNames: rR,
                locked: aR.has(GR.id),
                lockable: LR(GR.id),
                onLocked: nR
              }), "menu" === GR.id && (0, CR.jsx)(PR, {
                className: "HudElementRowIcon",
                open: UR,
                name: (0, NR.z)(GR.id, wR, JR, rR),
                onToggle: WR
              }), "menu" !== GR.id && (0, CR.jsx)(HR, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: GR.id,
                elements: uR,
                actionButtons: wR,
                keyNames: rR,
                onHidden: fR
              }), (0, CR.jsx)(oR, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: aR.has(GR.id),
                id: GR.id,
                elements: uR,
                actionButtons: wR,
                keyNames: rR,
                onReset: VR
              })]
            }), AR && XR && (0, CR.jsx)(nG, {
              info: GR,
              tuple: yR,
              props: RR
            }), MR && (0, CR.jsx)("div", {
              className: "HudElementNote",
              children: MR
            })]
          }, GR.id)
        }))
      })
    }

    function WG(RR) {
      let {
        preview: JR,
        quick: GR,
        onFullScreen: uR,
        resting: ZR,
        onSidePanel: qR
      } = RR;
      const {
        t: iR
      } = (0, yR.A)(), VR = iG(), KR = (0, tR.useRef)(null), {
        width: wR
      } = (0, kR.b)(KR), rR = Math.floor(VR.width * Math.min(1, JR.maxHeight / VR.height)), eR = wR - rR - 12, aR = eR >= 130, LR = wR > 0;
      (0, tR.useEffect)((() => {
        LR && qR(aR)
      }), [LR, aR, qR]);
      const nR = (0, QR.u)(aR ? rR : wR, VR.width, VR.height, JR.maxHeight),
        UR = ZR ? (0, CR.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: VR.height * nR
          }
        }) : (0, CR.jsx)(fG, {
          ...JR
        }),
        WR = RR => (0, CR.jsxs)(fR.U, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: iR("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: uR,
          children: [(0, CR.jsx)(xR.d, {
            name: "expand"
          }), RR && (0, CR.jsx)("span", {
            children: iR("hudLayout:fullScreen")
          })]
        });
      return (0, CR.jsxs)("div", {
        ref: KR,
        className: "SettingBox HudLayoutPreviewBox",
        children: [wR > 0 && aR && (0, CR.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, CR.jsx)("div", {
            style: {
              width: rR
            },
            children: UR
          }), (0, CR.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, CR.jsx)(CJ, {
              selected: JR.selected,
              ...GR,
              joystickFixed: JR.joystickFixed,
              extra: WR(!JR.selected || eR >= 278)
            })
          })]
        }), wR > 0 && !aR && (0, CR.jsxs)(CR.Fragment, {
          children: [UR, (0, CR.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: WR(!1)
          })]
        })]
      })
    }
    var AG = GR(5210),
      CG = GR(3502),
      XG = GR(3447);
    const MG = RR => {
      const JR = sR.t * ("sides" === RR ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(JR / 2))
    };

    function BG(RR, JR, GR) {
      const [yR, tR, uR, ZR] = RR;
      return "sides" === JR ? [yR, GR, uR, GR] : [GR, tR, GR, ZR]
    }
    const lG = [null, null, null, null],
      pG = RR => `${RR}px`;

    function gG(RR) {
      let {
        safe: JR,
        onPreview: GR,
        onCommit: uR
      } = RR;
      const {
        t: ZR
      } = (0, yR.A)(), qR = (0, sR.B)(null !== JR && void 0 !== JR ? JR : lG, window.innerWidth, window.innerHeight, oJ(document).map(Math.round)), iR = (0, tR.useRef)(null !== JR && void 0 !== JR ? JR : lG);
      iR.current = null !== JR && void 0 !== JR ? JR : lG;
      const VR = RR => {
        const JR = Math.min(MG(RR), "sides" === RR ? Math.max(qR[1], qR[3]) : Math.max(qR[0], qR[2]));
        return (0, CR.jsx)(rR.i, {
          name: ZR("sides" === RR ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: MG(RR),
          step: 2,
          initValue: JR,
          format: pG,
          onChange: JR => {
            GR(BG(iR.current, RR, JR))
          },
          onChangeComplete: yR => {
            if (yR === JR) return void GR(iR.current);
            const tR = BG(iR.current, RR, yR);
            iR.current = tR, uR(tR), (0, MR.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: RR
            })
          }
        })
      };
      return (0, CR.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, CR.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, CR.jsx)("div", {
            children: ZR("hudLayout:safeZone")
          }), (0, CR.jsx)(fR.U, {
            active: null === JR,
            pressed: null === JR,
            onClick: () => {
              uR(null)
            },
            children: ZR("hudLayout:safeZoneAuto")
          })]
        }), VR("sides"), VR("ends")]
      })
    }
    const bG = {
      cluster: "hudLayout:clusterNote",
      inventory: "hudLayout:inventoryNote",
      menu: "hudLayout:menuNote",
      arrows: "hudLayout:arrowsNote",
      sprint: "hudLayout:sprintNote",
      effects: "hudLayout:effectsNote",
      zoom: "hudLayout:zoomNote",
      drop: "hudLayout:dropNote"
    };

    function vG() {
      const {
        t: RR
      } = (0, yR.A)(), JR = (0, lR.kb)(), {
        clientEscMenuOptions: GR
      } = (0, VR.o)(["clientEscMenuOptions"]), uR = (0, pR.h)(), ZR = JR.hudLayouts[uR], [qR, iR] = (0, tR.useState)(null), {
        rowIconsOpen: KR,
        onRowIconsOpen: wR,
        select: eR
      } = function(RR, JR) {
        const [GR, yR] = (0, tR.useState)((() => lR.H.some((JR => void 0 !== RR.hudElements[JR] || RR.hudLocked.includes(JR))))), uR = (0, tR.useCallback)((RR => {
          JR(RR), (0, lR.S)(RR) && yR(!0)
        }), [JR]);
        return {
          rowIconsOpen: GR,
          onRowIconsOpen: yR,
          select: uR
        }
      }(ZR, iR), [aR, LR] = (0, tR.useState)([]), [nR, UR] = (0, tR.useState)(null), [WR, AR] = WJ(), XR = (0, tR.useCallback)(((RR, JR, GR) => {
        LR(JR), AR(GR);
        const yR = Object.keys(RR);
        UR((RR => (null === RR || void 0 === RR ? void 0 : RR.size) === yR.length && yR.every((JR => RR.has(JR))) ? RR : new Set(yR)))
      }), [AR]), {
        gameState: BR
      } = (0, VR.o)(["gameState"]), gR = (0, CG.i)(), vR = (0, XG.m)(), [OR] = (0, tR.useState)((() => {
        var RR, JR, GR, yR;
        return "inGame" === BR ? (0, JJ.v)(document, gR, {
          rightOfCamera: null !== (RR = null === (JR = vR.rightOfCamera) || void 0 === JR ? void 0 : JR.icon) && void 0 !== RR ? RR : null,
          leftEnd: null !== (GR = null === (yR = vR.leftEnd) || void 0 === yR ? void 0 : yR.icon) && void 0 !== GR ? GR : null
        }) : JJ.c
      })), xR = (0, tR.useRef)(null), DR = (0, tR.useRef)(null), HR = function(RR) {
        const [JR, GR] = (0, tR.useState)((() => .4 * window.innerHeight));
        return (0, tR.useLayoutEffect)((() => {
          var JR;
          const yR = null === (JR = RR.current) || void 0 === JR ? void 0 : JR.closest(".SettingsMenuRight");
          if (!yR) return;
          const tR = () => {
            const RR = yR.clientHeight < OG ? .4 : .5;
            GR(Math.max(80, yR.clientHeight * RR - 24))
          };
          tR();
          const uR = new ResizeObserver(tR);
          return uR.observe(yR), () => {
            uR.disconnect()
          }
        }), [RR]), JR
      }(DR), oR = (0, AG.q)(GR.joystickMode), cR = GR.touchActionButtons, PR = (0, tR.useMemo)((() => (0, JJ.u)(OR, cR)), [OR, cR]), IR = (0, tR.useMemo)((() => new Set((0, JJ.s)(OR, cR).map((RR => JJ.g[RR])))), [OR, cR]);
      (0, tR.useEffect)((() => {
        (0, MR.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [mR, zR] = (0, tR.useState)(!1), [dR, ER] = (0, tR.useState)(!1), YR = (0, tR.useRef)(null);
      VG(YR, !dR);
      const [kR, QR] = (0, tR.useState)(!1), FR = (0, tR.useCallback)((() => {
        QR(!1)
      }), []), sR = (0, tR.useMemo)((() => new Set(ZR.hudLocked)), [ZR.hudLocked]), hR = RR => {
        var JR, GR;
        const yR = (0, lR.q)(),
          tR = RR(yR);
        (0, lR.gb)(null !== (JR = null === (GR = xR.current) || void 0 === GR ? void 0 : GR.keepLocks(yR, tR)) && void 0 !== JR ? JR : tR)
      }, RJ = (RR, JR) => {
        hR((GR => (0, lR.nb)(GR, uR, RR, JR)))
      }, GJ = (RR, JR, GR) => {
        RJ(RR, {
          dx: JR,
          dy: GR
        }), (0, MR.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${RR}`
        })
      }, yJ = (RR, JR) => {
        hR((GR => (0, lR.rb)(GR, uR, RR, JR)))
      }, tJ = RR => {
        const JR = NR.i[RR];
        return (JR.move || JR.scale) && ("joystick" !== RR || oR) && !(0, TR.E)(RR, ZR.hudElements[RR])
      }, uJ = RR => NR.i[RR].move && ("joystick" !== RR || oR) && !sR.has(RR), ZJ = new Set(NR.m.map((RR => RR.id)).filter((RR => {
        const JR = (0, lR.S)(RR) && !OR.rowIcons.includes(RR) || lR.y[RR].hiddenByDefault && !(0, JJ.r)(OR, RR);
        return null === nR || nR.has(RR) || (0, lR.u)(ZR.hudElements, RR) && !JR
      }))), qJ = {
        present: ZJ,
        actionButtons: cR,
        keyNames: PR,
        scaleCaps: WR,
        sizeBesidePreview: mR,
        elements: ZR.hudElements,
        selected: qR,
        onSelect: eR,
        rowIconsOpen: KR,
        onRowIconsOpen: wR,
        onScalePreview: (RR, JR) => {
          var GR;
          null === (GR = xR.current) || void 0 === GR || GR.setScale(RR, JR)
        },
        onScale: (RR, JR) => {
          RJ(RR, {
            scale: JR
          }), (0, MR.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${RR}`
          })
        },
        onHidden: (RR, JR) => {
          RJ(RR, {
            hidden: JR
          }), (0, MR.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${JR?"hide":"show"}:${RR}`
          })
        },
        onReset: RR => {
          RJ(RR, lR.d)
        },
        locked: sR,
        lockable: tJ,
        onLocked: yJ,
        note: (JR, GR) => {
          const yR = GR && aR.length > 0 ? RR("hudLayout:overlapsNote", {
            names: (0, NR.x)(aR, cR, RR, PR)
          }) : null;
          if (GR && SR(JR, oR)) return (0, CR.jsxs)(CR.Fragment, {
            children: [yR && (0, CR.jsx)("span", {
              children: yR
            }), (0, CR.jsx)("span", {
              children: RR("hudLayout:floatingJoystickNote")
            }), !mR && (0, CR.jsx)(jR, {})]
          });
          if (yR) return yR;
          const tR = GR && sR.has(JR) ? RR("hudLayout:lockedNote") : null,
            uR = GR && IR.has(JR) ? RR("hudLayout:contextSlotNote") : null;
          if (tR || uR) return (0, CR.jsxs)(CR.Fragment, {
            children: [tR && (0, CR.jsx)("span", {
              children: tR
            }), uR && (0, CR.jsx)("span", {
              children: uR
            })]
          });
          if (GR && (0, TR.E)(JR, ZR.hudElements[JR]) && uJ(JR)) return RR("hudLayout:rowIconNote");
          const qR = bG[JR];
          return GR && qR ? RR(qR) : (0, NR.C)(JR) && (0, lR.u)(ZR.hudElements, JR) ? RR("hudLayout:inventoryHiddenNote", {
            name: (0, NR.z)(JR, cR, RR, PR)
          }) : null
        }
      };
      return (0, CR.jsxs)("div", {
        ref: DR,
        className: "HudLayoutSettings",
        children: [(0, CR.jsxs)("div", {
          ref: YR,
          className: "HudLayoutBody",
          children: [(0, CR.jsx)("div", {
            className: "HudLayoutOrientation",
            children: RR("landscape" === uR ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, CR.jsx)(WG, {
            preview: {
              layout: JR,
              orientation: uR,
              selected: qR,
              onSelect: eR,
              onMove: GJ,
              canMove: uJ,
              actionButtons: cR,
              joystickFixed: oR,
              presence: OR,
              keyNames: PR,
              maxHeight: HR,
              apiRef: xR,
              onMeasured: XR,
              onReady: ER,
              lockable: tJ
            },
            quick: {
              layout: ZR,
              actionButtons: cR,
              keyNames: PR,
              scaleCaps: WR,
              overlaps: aR,
              onScale: qJ.onScale,
              onHidden: qJ.onHidden,
              onReset: qJ.onReset,
              locked: sR,
              lockable: tJ,
              onLocked: yJ
            },
            onFullScreen: () => {
              QR(!0)
            },
            resting: kR,
            onSidePanel: zR
          }), kR && (0, CR.jsx)(wG, {
            layout: JR,
            orientation: uR,
            selected: qR,
            onSelect: eR,
            onMove: GJ,
            canMove: uJ,
            actionButtons: cR,
            joystickFixed: oR,
            presence: OR,
            keyNames: PR,
            onScale: qJ.onScale,
            onHidden: qJ.onHidden,
            onReset: qJ.onReset,
            locked: sR,
            lockable: tJ,
            onLocked: yJ,
            apiRef: xR,
            onClose: FR
          }), (0, CR.jsx)(gG, {
            safe: ZR.hudSafe,
            onCommit: RR => {
              hR((JR => (0, lR.ub)(JR, uR, RR)))
            },
            onPreview: RR => {
              var JR;
              null === (JR = xR.current) || void 0 === JR || JR.setSafe(RR)
            }
          }), (0, CR.jsx)(rR.e, {
            label: RR("hudLayout:snapCentre"),
            checked: JR.hudSnapCentre,
            onClick: RR => {
              (0, lR.cb)(RR)
            },
            circleInfoText: RR("hudLayout:snapCentreInfo")
          }), (0, CR.jsx)(UG, {
            ...qJ
          }), (0, CR.jsx)(rR.g, {
            label: RR("hudLayout:shape"),
            options: lR.I.map((JR => ({
              value: JR,
              label: RR(`hudLayout:shape_${JR}`)
            }))),
            value: JR.hudShape,
            onChange: RR => {
              hR((JR => ({
                ...JR,
                hudShape: RR
              }))), (0, MR.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: RR
              })
            }
          }), (0, CR.jsx)(rR.i, {
            name: RR("hudLayout:opacity"),
            min: lR.f,
            max: 1,
            step: .05,
            initValue: JR.hudKeyOpacity,
            format: RR => `${Math.round(100*RR)}%`,
            circleInfoText: RR("hudLayout:opacityInfo"),
            onChange: RR => {
              var JR;
              null === (JR = xR.current) || void 0 === JR || JR.setKeyStyle({
                hudKeyOpacity: RR
              })
            },
            onChangeComplete: RR => {
              (0, lR.ab)(RR), (0, MR.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          }), (0, CR.jsx)(aG, {
            colour: JR.hudKeyColour,
            previewApi: xR
          })]
        }), (0, CR.jsx)(fR.M, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const RR = bR.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await RR.getResult() && (0, lR.V)()
            }()
          },
          children: RR("hudLayout:resetAll")
        })]
      })
    }
    const OG = 350;
    const xG = [function() {
      const {
        t: RR
      } = (0, yR.A)(), [JR, GR] = (0, tR.useState)(!1), uR = (0, tR.useRef)(null);
      return (0, tR.useEffect)((() => {
        var RR;
        JR && (null === (RR = uR.current) || void 0 === RR || RR.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [JR]), (0, CR.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, CR.jsx)(vR.b, {
          ref: uR,
          icon: "arrows-up-down-left-right",
          title: RR("hudLayout:title"),
          sub: RR("hudLayout:entrySub"),
          expanded: JR,
          onClick: () => {
            GR(!JR)
          }
        }), JR && (0, CR.jsx)(vG, {})]
      })
    }, function() {
      const {
        t: RR
      } = (0, yR.A)(), {
        gameState: JR
      } = (0, VR.o)(["gameState"]), GR = (0, BR.l)((0, eR.f)("runningSpeed"), (0, eR.f)("walkingSpeed")), tR = !(0, lR.u)((0, pR.e)().hudElements, "sprint");
      return "inGame" !== JR || GR ? (0, CR.jsx)(rR.e, {
        label: RR("touchSettings:sprintKey"),
        checked: tR,
        onClick: RR => {
          (0, lR.Z)("sprint", !RR), (0, MR.reportAnalyticsClick)({
            id: "touch_settings.sprint_key",
            value: RR ? "show" : "hide"
          })
        },
        circleInfoText: RR("touchSettings:sprintKeyInfo")
      }) : null
    }, function() {
      const {
        t: RR
      } = (0, yR.A)(), {
        joystickMode: JR,
        touchSpeedCurve: GR,
        autorun: tR,
        jumpLock: uR,
        touchEdgeGuard: ZR
      } = (0, VR.o)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, CR.jsxs)(CR.Fragment, {
        children: [(0, CR.jsx)(rR.g, {
          label: RR("settingsMenu:joystick"),
          options: AR.ub.map((JR => ({
            value: JR,
            label: RR(XR[JR])
          }))),
          value: JR,
          onChange: RR => {
            VR.d.setClientEscMenuOptions({
              joystickMode: RR
            })
          },
          circleInfoText: RR("settingsMenu:joystickInfo")
        }), (0, CR.jsx)(rR.e, {
          label: RR("settingsMenu:preciseWalking"),
          checked: GR,
          onClick: RR => {
            VR.d.setClientEscMenuOptions({
              touchSpeedCurve: RR
            })
          },
          circleInfoText: RR("settingsMenu:preciseWalkingInfo")
        }), (0, CR.jsx)(rR.e, {
          label: RR("settingsMenu:autoRun"),
          checked: tR,
          onClick: RR => {
            VR.d.setClientEscMenuOptions({
              autorun: RR
            })
          },
          circleInfoText: RR("settingsMenu:autoRunInfo")
        }), (0, CR.jsx)(rR.e, {
          label: RR("settingsMenu:jumpLock"),
          checked: uR,
          onClick: RR => {
            VR.d.setClientEscMenuOptions({
              jumpLock: RR
            })
          },
          circleInfoText: RR("settingsMenu:jumpLockInfo")
        }), (0, CR.jsx)(rR.e, {
          label: RR("touchSettings:stopAtEdges"),
          checked: ZR,
          onClick: RR => {
            VR.d.setClientEscMenuOptions({
              touchEdgeGuard: RR
            })
          },
          circleInfoText: RR("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, CR.jsx)(WR.c, {})
    }, function() {
      const {
        t: RR
      } = (0, yR.A)(), {
        clientEscMenuOptions: JR
      } = (0, VR.o)(["clientEscMenuOptions"]);
      return (0, gR.b)() ? (0, CR.jsx)(rR.e, {
        label: RR("settingsMenu:vibration"),
        checked: JR.vibration,
        onClick: RR => {
          VR.d.setClientEscMenuOptions({
            vibration: RR
          })
        },
        circleInfoText: RR("settingsMenu:vibrationInfo")
      }) : null
    }];

    function NG() {
      return (0, CR.jsx)(CR.Fragment, {
        children: xG.map(((RR, JR) => (0, CR.jsx)(RR, {}, JR)))
      })
    }
    var DG = GR(10136),
      HG = GR(10127),
      oG = GR(1867);

    function cG() {
      const {
        t: RR
      } = (0, yR.A)(), JR = (0, DG.r)(), GR = HG.e.filter((RR => void 0 !== JR[RR])).length;
      return (0, CR.jsx)("div", {
        className: "ControlsContainer QuickChatPhrasesSection",
        children: (0, CR.jsxs)(zG, {
          title: RR("quickChat:settingsTitle"),
          defaultOpen: !1,
          children: [HG.e.map(((RR, GR) => (0, CR.jsx)(PG, {
            phraseKey: RR,
            number: GR + 1,
            custom: JR[RR]
          }, RR))), GR > 1 && (0, CR.jsx)(fR.M, {
            className: "QuickChatPhrasesResetAll",
            onClick: DG.f,
            children: RR("quickChat:resetAll")
          })]
        })
      })
    }

    function PG(RR) {
      let {
        phraseKey: JR,
        number: GR,
        custom: uR
      } = RR;
      const {
        t: ZR
      } = (0, yR.A)(), qR = ZR(JR), iR = null !== uR && void 0 !== uR ? uR : qR, VR = (0, tR.useRef)(null);
      return (0, tR.useEffect)((() => {
        const RR = VR.current;
        return () => {
          var GR;
          RR && (null !== (GR = (0, DG.d)()[JR]) && void 0 !== GR ? GR : qR) === iR && (0, DG.n)(JR, RR.value, qR)
        }
      }), [JR, qR, iR]), (0, CR.jsxs)("div", {
        className: "ControlRow QuickChatPhraseRow",
        children: [(0, CR.jsx)(oG.b, {
          domRef: VR,
          className: "QuickChatPhraseInput",
          defaultValue: iR,
          maxLength: RJ.Yc,
          ariaLabel: ZR("quickChat:phraseNumber", {
            number: GR
          }),
          onEnter: () => {
            var RR;
            null === (RR = VR.current) || void 0 === RR || RR.blur()
          },
          onBlur: () => {
            var RR;
            const GR = VR.current;
            GR && ((0, DG.n)(JR, GR.value, qR), GR.value = null !== (RR = (0, DG.d)()[JR]) && void 0 !== RR ? RR : qR)
          }
        }, iR), (0, CR.jsx)(fR.U, {
          className: "QuickChatPhraseReset",
          disabled: void 0 === uR,
          ariaLabel: ZR("quickChat:resetPhrase", {
            number: GR
          }),
          onClick: () => {
            (0, DG.j)(JR)
          },
          children: (0, CR.jsx)(xR.d, {
            name: "rotate-left"
          })
        })]
      })
    }
    var IG = GR(5145);

    function mG() {
      const {
        t: RR
      } = (0, yR.A)(), {
        isTouchScreen: JR,
        clientEscMenuOptions: GR,
        gameState: ZR
      } = (0, VR.o)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), qR = (0, eR.f)("ezBridging"), iR = (0, eR.f)("ezTowering"), LR = "inGame" !== ZR || !0 === qR, nR = (0, aR.e)(), WR = null !== nR && ("inGame" !== ZR || !0 === iR), [, AR] = (0, tR.useReducer)((RR => RR + 1), 0), XR = (0, UR.f)(), [MR, BR] = (0, tR.useState)(IG.d);
      return (0, CR.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [XR && (0, CR.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, CR.jsx)("div", {
            children: RR("controller:settingsControlsNote")
          }), (0, CR.jsx)(fR.U, {
            onClick: () => {
              VR.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: RR("controller:settingsOpenController")
          })]
        }), (0, KR.isTouchscreen)() && !(0, KR.isMobile)() ? (0, CR.jsx)(CR.Fragment, {
          children: (0, CR.jsx)(rR.e, {
            label: RR("settingsMenu:useTouchControls"),
            checked: MR,
            onClick: RR => {
              (0, IG.b)(RR), BR(RR)
            }
          })
        }) : null, JR && (0, CR.jsx)(NG, {}), (JR || XR) && (0, CR.jsx)(cG, {}), LR && (0, CR.jsx)(rR.e, {
          label: RR("settingsMenu:ezBridging"),
          checked: GR.ezBridging,
          onClick: RR => {
            VR.d.setClientEscMenuOptions({
              ezBridging: RR
            })
          },
          circleInfoText: RR("settingsMenu:ezBridgingInfo")
        }), WR && (0, CR.jsx)(rR.e, {
          label: RR("settingsMenu:ezTowering"),
          checked: GR.ezTowering,
          onClick: RR => {
            VR.d.setClientEscMenuOptions({
              ezTowering: RR
            })
          },
          circleInfoText: RR("jump" === nR ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, CR.jsx)(rR.e, {
          label: RR("settingsMenu:crouchToggle"),
          checked: GR.crouchIsToggle,
          onClick: RR => {
            VR.d.setClientEscMenuOptions({
              crouchIsToggle: RR
            })
          },
          circleInfoText: RR("settingsMenu:crouchToggleInfo")
        }), (0, CR.jsx)(rR.e, {
          label: RR("settingsMenu:hideUiToggle"),
          checked: GR.hideUiIsToggle,
          onClick: RR => {
            VR.d.setClientEscMenuOptions({
              hideUiIsToggle: RR
            })
          },
          circleInfoText: RR("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, wR.c)() && (0, CR.jsx)(rR.i, {
          name: RR("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: GR.touchscreenSensitivity,
          onChange: RR => {
            VR.d.setClientEscMenuOptions({
              touchscreenSensitivity: RR
            })
          }
        }), !(0, KR.isMobile)() && (0, CR.jsx)(rR.i, {
          name: RR("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: GR.mouseSensitivity,
          onChange: RR => {
            VR.d.setClientEscMenuOptions({
              mouseSensitivity: RR
            })
          }
        }), !(0, KR.isMobile)() && (0, CR.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, CR.jsx)("div", {
            className: "SliderText",
            children: RR("settingsMenu:keyBindings")
          }), uR.e.map((JR => (0, CR.jsx)(zG, {
            title: RR(JR.name.translationKey, JR.name.params),
            defaultOpen: uR.g.has(JR.id),
            children: JR.actions.map((RR => (0, CR.jsx)(SG, {
              noaAction: RR,
              forceUpdate: AR,
              clashesWith: JR.clashesWith,
              showPadGlyph: XR
            }, RR)))
          }, JR.name.translationKey))), (0, CR.jsx)(fR.M, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, uR.C)(), AR()
            },
            children: RR("controls:resetBindings")
          })]
        })]
      })
    }

    function zG(RR) {
      let {
        title: JR,
        defaultOpen: GR,
        children: yR
      } = RR;
      const [uR, ZR] = (0, tR.useState)(GR);
      return (0, CR.jsxs)("div", {
        className: iR()("ControlsSection", {
          Collapsed: !uR
        }),
        children: [(0, CR.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            ZR(!uR)
          },
          children: [(0, CR.jsx)("div", {
            className: "ControlsSectionTitle",
            children: JR
          }), (0, CR.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), uR && (0, CR.jsx)("div", {
          className: "ControlsSectionRows",
          children: yR
        })]
      })
    }

    function SG(RR) {
      let {
        noaAction: JR,
        forceUpdate: GR,
        clashesWith: qR,
        showPadGlyph: VR
      } = RR;
      const {
        t: KR
      } = (0, yR.A)(), wR = (0, nR.c)(JR), [rR, eR] = (0, tR.useState)(!1), [aR, UR] = (0, tR.useState)("controls:clickToEnterNewBinding"), [WR, AR] = (0, tR.useState)(null), [XR, MR] = (0, tR.useState)(null), BR = (0, tR.useRef)(null);
      (0, tR.useEffect)((() => {
        rR && BR.current && BR.current.focus()
      }), [rR]);
      const lR = uR.t[JR].filter((RR => ZR.f[RR]));
      let pR = null;
      const gR = [],
        bR = qR.flatMap((RR => {
          var JR, GR;
          return null !== (JR = null === (GR = uR.e.find((JR => JR.id === RR))) || void 0 === GR ? void 0 : GR.actions) && void 0 !== JR ? JR : []
        }));
      for (const yR of bR) {
        if (yR === JR) continue;
        const RR = uR.t[yR];
        for (const JR of RR) lR.includes(JR) && gR.push(KR(uR.w[yR].translationKey, uR.w[yR].params))
      }
      gR.length > 0 && (pR = KR("controls:sharedBindingsWarning") + " ", pR += gR.join(", "));
      const vR = () => {
          eR(!1), AR(null), UR("controls:clickToEnterNewBinding"), MR(null)
        },
        OR = () => "BindingInput_" + JR;
      return (0, CR.jsxs)("div", {
        className: iR()("ControlRow", {
          WarningBorder: null !== pR
        }),
        children: [(0, CR.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, CR.jsxs)("div", {
            className: "ControlName",
            children: [KR(uR.w[JR].translationKey, uR.w[JR].params), VR && wR && (0, CR.jsx)(LR.e, {
              glyph: wR,
              className: "ControlPadGlyph"
            })]
          }), (0, CR.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, CR.jsxs)("div", {
              className: "ControlBindingsList",
              children: [lR.map((RR => (0, CR.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, CR.jsx)("div", {
                  children: (0, uR.m)(RR)
                }), (0, CR.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const yR = (0, uR.x)(JR, RR);
                    yR.isError() ? MR(yR.asError().message) : MR(null), GR()
                  },
                  children: "\xd7"
                })]
              }, RR))), !rR && (0, CR.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  eR(!0), MR(null)
                },
                children: (0, CR.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), rR && (0, CR.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, CR.jsxs)("div", {
                className: "InputContainer",
                children: [(0, CR.jsx)("div", {
                  className: "InputOverlay",
                  children: WR ? (0, uR.m)(WR) : (0, CR.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: KR(aR)
                  })
                }), (0, CR.jsx)("input", {
                  ref: BR,
                  id: OR(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: RR => {
                    if ("Escape" === RR.code) return vR(), RR.preventDefault(), void RR.stopPropagation();
                    const JR = RR.code;
                    ZR.c.includes(JR) ? (MR(null), AR(JR)) : (MR("controls:keyIsReserved"), AR(null)), RR.preventDefault(), RR.stopPropagation()
                  },
                  onMouseDown: RR => {
                    const JR = "Mouse" + (RR.button + 1);
                    document.activeElement && document.activeElement.id === OR() ? ZR.c.includes(JR) ? (MR(null), AR(JR)) : (MR("controls:keyIsReserved"), AR(null)) : UR("controls:enterNewBinding"), RR.stopPropagation()
                  },
                  onBlur: () => {
                    UR("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, CR.jsx)(fR.g, {
                onPointerDown: RR => {
                  RR.preventDefault()
                },
                onClick: () => {
                  (0, uR.d)(JR, WR), GR(), vR()
                },
                className: "ControlBindingAddButton",
                disabled: null === WR,
                children: KR("general:add")
              }), (0, CR.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  vR()
                },
                children: "\xd7"
              })]
            }), XR && (0, CR.jsx)("div", {
              className: "ControlBindingError",
              children: KR(XR)
            })]
          })]
        }), pR && (0, CR.jsx)("div", {
          className: "ControlRowWarning",
          children: pR
        })]
      })
    }
  },
  10241: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(66),
      tR = GR(1468),
      uR = GR(1378);
    const ZR = (0, yR.forwardRef)((function(RR, JR) {
      let {
        icon: GR,
        title: yR,
        sub: ZR,
        expanded: qR,
        onClick: iR
      } = RR;
      return (0, uR.jsxs)("button", {
        ref: JR,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": qR,
        onClick: iR,
        children: [(0, uR.jsx)(tR.d, {
          name: GR,
          className: "FeaturedSettingsEntryIcon"
        }), (0, uR.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, uR.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: yR
          }), (0, uR.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: ZR
          })]
        }), (0, uR.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  10273: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(1378);

    function ZR(RR) {
      let {
        label: JR,
        value: GR,
        swatches: yR,
        customLabel: ZR,
        onChange: qR
      } = RR;
      const iR = !yR.some((RR => RR.colour === GR));
      return (0, uR.jsxs)("div", {
        className: "SettingBox SettingsColourRow",
        children: [(0, uR.jsx)("div", {
          className: "SliderText",
          children: JR
        }), (0, uR.jsxs)("div", {
          className: "SettingsSwatches",
          role: "radiogroup",
          "aria-label": JR,
          children: [yR.map((RR => (0, uR.jsx)("button", {
            type: "button",
            role: "radio",
            "aria-checked": RR.colour === GR,
            "aria-label": RR.label,
            "data-pad-focusable": !0,
            className: tR()("SettingsSwatch", {
              Selected: RR.colour === GR
            }),
            style: {
              background: RR.colour
            },
            onClick: () => {
              qR(RR.colour)
            }
          }, RR.colour))), (0, uR.jsx)("label", {
            className: tR()("SettingsSwatch SettingsSwatchCustom", {
              Selected: iR
            }),
            style: iR ? {
              background: GR
            } : void 0,
            title: ZR,
            "data-pad-focusable": !0,
            children: (0, uR.jsx)("input", {
              type: "color",
              "aria-label": ZR,
              value: GR,
              onChange: RR => {
                qR(RR.target.value)
              }
            })
          })]
        })]
      })
    }
  },
  10010: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => nR,
      h: () => LR,
      k: () => VR,
      n: () => UR,
      p: () => WR,
      s: () => wR
    });
    var yR = GR(1850),
      tR = GR(1950);
    const uR = RR => RR >= 56320 && RR <= 57343,
      ZR = RR => RR >= 55296 && RR <= 56319,
      qR = (RR, JR) => JR >= 2 && uR(RR.charCodeAt(JR - 1)) && ZR(RR.charCodeAt(JR - 2)) ? JR - 2 : Math.max(0, JR - 1),
      iR = (RR, JR) => {
        let GR;
        var yR, tR;
        return GR = RR.start !== RR.end ? JR < 0 ? RR.start : RR.end : JR < 0 ? qR(RR.value, RR.start) : (yR = RR.value, (tR = RR.start) + 1 < yR.length && ZR(yR.charCodeAt(tR)) && uR(yR.charCodeAt(tR + 1)) ? tR + 2 : Math.min(yR.length, tR + 1)), {
          value: RR.value,
          start: GR,
          end: GR
        }
      },
      fR = ["text", "search", "url", "email", "tel", "password", "number"],
      VR = RR => !(!(0, tR.b)(RR) || RR.isContentEditable || RR.hasAttribute("data-pad-no-osk")) && (RR instanceof HTMLTextAreaElement || RR instanceof HTMLInputElement && fR.includes(RR.type)),
      KR = RR => null !== RR.selectionStart,
      wR = RR => {
        var JR, GR;
        const {
          value: yR
        } = RR;
        return {
          value: yR,
          start: null !== (JR = RR.selectionStart) && void 0 !== JR ? JR : yR.length,
          end: null !== (GR = RR.selectionEnd) && void 0 !== GR ? GR : yR.length
        }
      },
      rR = (RR, JR, GR) => {
        if (RR.readOnly) return;
        const tR = RR instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(tR, "value").set.call(RR, JR.value), KR(RR) && RR.setSelectionRange(JR.start, JR.end), (0, yR.g)(RR, new InputEvent("input", {
          bubbles: !0,
          inputType: GR
        }))
      };
    let eR = !1;
    const aR = (RR, JR) => !!document.execCommand(RR, !1, JR) || (eR || (eR = !0, console.warn(`execCommand("${RR}") failed; the on-screen keyboard is setting the value directly`)), !1),
      LR = (RR, JR) => {
        aR("insertText", JR) || rR(RR, function(RR, JR) {
          let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const yR = RR.value.slice(0, RR.start),
            tR = RR.value.slice(RR.end);
          let uR = GR < 0 ? JR.length : Math.max(0, GR - yR.length - tR.length);
          uR > 0 && uR < JR.length && ZR(JR.charCodeAt(uR - 1)) && uR--;
          const qR = JR.slice(0, uR),
            iR = yR.length + qR.length;
          return {
            value: yR + qR + tR,
            start: iR,
            end: iR
          }
        }(wR(RR), JR, RR.maxLength), "insertText")
      },
      nR = RR => {
        aR("delete") || rR(RR, (RR => {
          const JR = RR.start === RR.end ? qR(RR.value, RR.start) : RR.start;
          return {
            value: RR.value.slice(0, JR) + RR.value.slice(RR.end),
            start: JR,
            end: JR
          }
        })(wR(RR)), "deleteContentBackward")
      },
      UR = (RR, JR) => {
        if (!KR(RR)) return;
        const GR = iR(wR(RR), JR);
        RR.setSelectionRange(GR.start, GR.end)
      },
      WR = RR => {
        KR(RR) && 0 === RR.selectionStart && 0 === RR.selectionEnd && RR.setSelectionRange(RR.value.length, RR.value.length)
      }
  },
  10194: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR
    });
    var yR = GR(25),
      tR = GR(2358),
      uR = GR(1493),
      ZR = GR(1532),
      qR = GR(5060);
    const iR = async () => {
      if ((0, ZR.j)()) {
        if (!0 !== await uR.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== yR.d.get("gameState")) return
      }
      const RR = await (0, qR.d)();
      "stay" !== RR && "inGame" === yR.d.get("gameState") && ("save" === RR && (0, qR.k)(), (0, tR.e)())
    }
  },
  10199: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => iR,
      f: () => uR,
      g: () => ZR,
      i: () => tR,
      m: () => qR
    });
    var yR = GR(2167);
    const tR = "controllerPadShopOpen",
      uR = RR => yR.k.includes(RR),
      ZR = RR => Object.values(RR).some((RR => !1 !== RR.canBuy && !RR.isRewardedAd)),
      qR = (RR, JR, GR) => {
        var yR, tR, ZR, qR;
        const iR = RR.filter((RR => !uR(RR))),
          fR = null !== JR && RR.includes(JR) ? JR : null;
        return null !== fR && !uR(fR) && GR(fR) ? fR : null !== (yR = null !== (tR = null !== (ZR = null !== (qR = iR.find(GR)) && void 0 !== qR ? qR : iR[0]) && void 0 !== ZR ? ZR : fR) && void 0 !== tR ? tR : RR[0]) && void 0 !== yR ? yR : null
      },
      iR = RR => RR.userInput || RR.isRewardedAd || "boolean" === typeof RR.isSelected ? null : JSON.stringify([RR.image, RR.cost, RR.currency, RR.amount, RR.customTitle, RR.buyButtonText, RR.description, RR.canBuy])
  },
  10223: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => fR,
      f: () => VR
    });
    var yR = GR(66),
      tR = GR(1581),
      uR = GR(2218),
      ZR = GR(1547),
      qR = GR(1562),
      iR = GR(1378);
    const fR = () => {
        const RR = (0, ZR.t)();
        if ((0, yR.useEffect)((() => {
            (0, ZR.m)()
          }), []), !RR) return null;
        const {
          ControllerCategory: JR
        } = RR;
        return (0, iR.jsx)(qR.c, {
          children: (0, iR.jsx)(JR, {})
        })
      },
      VR = () => {
        var RR;
        const JR = (0, ZR.t)(),
          [, GR] = (0, yR.useReducer)((RR => RR + 1), 0);
        return (0, tR.f)(uR.c, GR), null !== (RR = null === JR || void 0 === JR ? void 0 : JR.hasActivePad()) && void 0 !== RR && RR
      }
  },
  9992: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => BR,
      E: () => fR,
      G: () => pR,
      H: () => XR,
      J: () => MR,
      L: () => LR,
      M: () => iR,
      P: () => VR,
      e: () => nR,
      f: () => lR,
      j: () => CR,
      n: () => AR,
      p: () => eR,
      s: () => aR,
      u: () => wR,
      x: () => rR
    });
    var yR = GR(32),
      tR = GR(1850),
      uR = GR(10001),
      ZR = GR(10010),
      qR = GR(3386);
    const iR = RR => (0, ZR.k)(RR),
      fR = RR => {
        const JR = RR.getBoundingClientRect();
        return {
          x: JR.left + JR.width / 2,
          y: JR.top + JR.height / 2
        }
      },
      VR = (RR, JR, GR) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: RR.x,
        clientY: RR.y,
        screenX: RR.x,
        screenY: RR.y,
        button: JR,
        buttons: GR,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      KR = (RR, JR) => {
        (0, tR.g)(RR, JR)
      },
      wR = function(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const yR = 0 === GR ? 1 : 2;
        KR(RR, new PointerEvent("pointerdown", VR(JR, GR, yR))), KR(RR, new MouseEvent("mousedown", VR(JR, GR, yR)))
      },
      rR = function(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        KR(RR, new PointerEvent("pointerup", VR(JR, GR, 0))), KR(RR, new MouseEvent("mouseup", VR(JR, GR, 0)))
      },
      eR = function(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        wR(RR, JR, GR), rR(RR, JR, GR), KR(RR, 0 === GR ? new MouseEvent("click", VR(JR, 0, 0)) : new MouseEvent("contextmenu", VR(JR, 2, 0)))
      },
      aR = function(RR, JR, GR) {
        let {
          leaveBelow: yR = null,
          enterBelow: tR = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (RR !== JR) {
          if (null !== RR && void 0 !== RR && RR.isConnected) {
            const tR = {
              ...VR(GR, 0, 0),
              relatedTarget: JR
            };
            KR(RR, new PointerEvent("pointerout", tR)), KR(RR, new MouseEvent("mouseout", tR));
            const uR = RR => !!JR && RR.contains(JR) || !!yR && RR.contains(yR);
            for (let JR = RR; JR && !uR(JR); JR = JR.parentElement) KR(JR, new PointerEvent("pointerleave", {
              ...tR,
              bubbles: !1
            })), KR(JR, new MouseEvent("mouseleave", {
              ...tR,
              bubbles: !1
            }))
          }
          if (JR) {
            const yR = {
              ...VR(GR, 0, 0),
              relatedTarget: RR
            };
            KR(JR, new PointerEvent("pointerover", yR)), KR(JR, new MouseEvent("mouseover", yR));
            const uR = [],
              ZR = JR => !(null === RR || void 0 === RR || !RR.isConnected) && JR.contains(RR) || !!tR && JR.contains(tR);
            for (let RR = JR; RR && !ZR(RR); RR = RR.parentElement) uR.push(RR);
            for (const RR of uR.reverse()) KR(RR, new PointerEvent("pointerenter", {
              ...yR,
              bubbles: !1
            })), KR(RR, new MouseEvent("mouseenter", {
              ...yR,
              bubbles: !1
            }));
            KR(JR, new PointerEvent("pointermove", VR(GR, 0, 0))), KR(JR, new MouseEvent("mousemove", VR(GR, 0, 0)))
          }
        } else JR && (KR(JR, new PointerEvent("pointermove", VR(GR, 0, 0))), KR(JR, new MouseEvent("mousemove", VR(GR, 0, 0))))
      },
      LR = RR => {
        yR.n.JK(uR.e, RR)
      },
      nR = RR => {
        if (iR(RR)) return void LR(RR);
        const JR = RR.hasAttribute("data-pad-focusable") ? RR.querySelector("a[href]") : null,
          GR = null !== JR && void 0 !== JR ? JR : RR;
        eR(GR, fR(GR))
      },
      UR = ".Dropdown-root.is-open",
      WR = RR => {
        const JR = RR.querySelector(".Dropdown-control");
        return nR(JR), JR
      },
      AR = RR => {
        var JR;
        const GR = null !== (JR = RR.closest(UR)) && void 0 !== JR ? JR : RR.querySelector(UR);
        return GR ? WR(GR) : null
      },
      CR = RR => {
        for (const JR of document.querySelectorAll(UR)) JR.contains(RR) || WR(JR)
      },
      XR = RR => null !== RR.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      MR = RR => {
        const JR = RR ? document.elementFromPoint(RR.x, RR.y) : null;
        return !(null === JR || void 0 === JR || !JR.closest("[data-pad-repeat]"))
      },
      BR = RR => {
        var JR;
        return null !== (JR = [...RR.querySelectorAll("[data-pad-back]")].find(qR.q)) && void 0 !== JR ? JR : null
      },
      lR = RR => {
        const JR = BR(RR);
        return !!JR && (nR(JR), !0)
      },
      pR = RR => {
        var JR, GR, yR, tR;
        return null !== (JR = null !== (GR = null !== (yR = RR.getAttribute("data-pad-key")) && void 0 !== yR ? yR : RR.getAttribute("href")) && void 0 !== GR ? GR : null === (tR = RR.querySelector("a[href]")) || void 0 === tR ? void 0 : tR.getAttribute("href")) && void 0 !== JR ? JR : null
      }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);