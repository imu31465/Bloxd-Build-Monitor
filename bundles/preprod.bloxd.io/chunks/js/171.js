export const id = 171;
export const ids = [171];
export const modules = {
  9463: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM
    });
    var OM = iM(19),
      SM = iM(1188),
      jM = iM(5401),
      aM = iM(1303);

    function PM(MM) {
      let {
        note: rM
      } = MM;
      const {
        t: iM
      } = (0, SM.A)(), {
        clientEscMenuOptions: PM
      } = (0, OM.m)(["clientEscMenuOptions"]);
      return (0, aM.jsx)(jM.c, {
        label: iM("touchSettings:actionButtons"),
        checked: PM.touchActionButtons,
        onClick: MM => {
          OM.d.setClientEscMenuOptions({
            touchActionButtons: MM
          })
        },
        circleInfoText: iM("touchSettings:actionButtonsInfo"),
        note: rM
      })
    }
  },
  9459: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => ui,
      f: () => gi
    });
    var OM = iM(1188),
      SM = iM(44),
      jM = iM(2093),
      aM = iM(2099),
      PM = iM(1116),
      nM = iM.n(PM),
      QM = iM(1520),
      zM = iM(19),
      LM = iM(83),
      mM = iM(103),
      HM = iM(5401),
      hM = iM(2640),
      JM = iM(255),
      dM = iM(2104),
      yM = iM(2111),
      lM = iM(9461),
      EM = iM(9463),
      UM = iM(313),
      GM = iM(1303);
    const CM = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var eM = iM(9467);
    var bM = iM(1548),
      wM = iM(1429),
      tM = iM(9472),
      gM = iM(1474),
      uM = iM(1398),
      RM = iM(9479),
      pM = iM(2666);

    function WM(MM) {
      let {
        className: rM,
        keepPlace: iM
      } = MM;
      return iM ? (0, GM.jsx)("div", {
        className: nM()(rM, "Placeholder")
      }) : null
    }

    function sM(MM) {
      let {
        id: rM,
        elements: iM,
        actionButtons: SM,
        keyNames: jM,
        className: aM,
        keepPlace: PM,
        onHidden: nM
      } = MM;
      const {
        t: zM
      } = (0, OM.A)();
      if (!RM.f[rM].hide) return (0, GM.jsx)(WM, {
        className: aM,
        keepPlace: PM
      });
      const LM = (0, pM.p)(iM, rM);
      return (0, GM.jsx)(QM.V, {
        className: aM,
        ariaLabel: zM(LM ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: (0, RM.s)(rM, SM, zM, jM)
        }),
        pressed: !LM,
        onClick: () => {
          nM(rM, !LM)
        },
        children: (0, GM.jsx)(uM.b, {
          name: LM ? "eye-slash" : "eye"
        })
      })
    }

    function DM(MM) {
      let {
        id: rM,
        elements: iM,
        actionButtons: SM,
        keyNames: jM,
        className: aM,
        keepPlace: PM,
        onlyWhenMoved: nM,
        locked: zM,
        onReset: LM
      } = MM;
      const {
        t: mM
      } = (0, OM.A)(), HM = RM.f[rM], hM = (0, pM.G)(iM[rM]);
      return !HM.move && !HM.scale || nM && hM ? (0, GM.jsx)(WM, {
        className: aM,
        keepPlace: PM
      }) : (0, GM.jsx)(QM.V, {
        className: aM,
        disabled: hM || zM,
        ariaLabel: mM("hudLayout:resetElement", {
          name: (0, RM.s)(rM, SM, mM, jM)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: rM
        },
        onClick: MM => {
          nM && fM(MM.currentTarget), LM(rM)
        },
        children: (0, GM.jsx)(uM.b, {
          name: "rotate-left"
        })
      })
    }

    function kM(MM) {
      let {
        id: rM,
        actionButtons: iM,
        keyNames: SM,
        className: jM,
        keepPlace: aM,
        locked: PM,
        lockable: nM,
        onLocked: zM
      } = MM;
      const {
        t: LM
      } = (0, OM.A)();
      return nM || PM ? (0, GM.jsx)(QM.V, {
        className: jM,
        ariaLabel: LM(PM ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: (0, RM.s)(rM, iM, LM, SM)
        }),
        pressed: PM,
        active: PM,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${PM?"unlock":"lock"}:${rM}`
        },
        onClick: () => {
          zM(rM, !PM)
        },
        children: (0, GM.jsx)(uM.b, {
          name: PM ? "lock" : "lock-open"
        })
      }) : (0, GM.jsx)(WM, {
        className: jM,
        keepPlace: aM
      })
    }

    function ZM(MM) {
      let {
        className: rM,
        open: iM,
        name: SM,
        onToggle: jM
      } = MM;
      const {
        t: aM
      } = (0, OM.A)();
      return (0, GM.jsx)(QM.V, {
        className: rM,
        ariaLabel: aM(iM ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: SM
        }),
        pressed: iM,
        analyticsClick: {
          id: "hud_layout.children",
          value: iM ? "close" : "open"
        },
        onClick: () => {
          jM(!iM)
        },
        children: (0, GM.jsx)(uM.b, {
          name: iM ? "angle-up" : "angle-down"
        })
      })
    }

    function oM(MM, rM) {
      var iM;
      MM.contains(document.activeElement) && rM.focus({
        preventScroll: !0
      }), null === (iM = (0, gM.d)()) || void 0 === iM || iM.handOverPadFocus(MM, rM)
    }

    function fM(MM) {
      const rM = MM.closest("[data-hud-row]"),
        iM = null === rM || void 0 === rM ? void 0 : rM.querySelector(".HudElementRowName");
      return !(!rM || !iM) && (oM(rM, iM), !0)
    }
    const YM = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function NM(MM, rM) {
      return "joystick" === MM && !rM
    }

    function AM() {
      const {
        t: MM
      } = (0, OM.A)();
      return (0, GM.jsx)(QM.V, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: MM => {
          const rM = MM.currentTarget;
          if (!fM(rM)) {
            const MM = function(MM) {
              var rM, iM;
              const OM = [MM.previousElementSibling, MM.nextElementSibling].find((MM => MM instanceof HTMLElement && MM.matches(YM)));
              return null !== (rM = null !== OM && void 0 !== OM ? OM : null === (iM = MM.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === iM ? void 0 : iM.querySelector(`:is(${YM}):not(.HudFixJoystickButton)`)) && void 0 !== rM ? rM : null
            }(rM);
            MM && oM(rM, MM)
          }
          zM.d.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: MM("hudLayout:fixJoystick")
      })
    }
    var xM = iM(65),
      vM = iM(1287),
      FM = iM(3508),
      BM = iM(3047),
      XM = iM(9484),
      IM = iM(9487),
      KM = iM(2668),
      qM = iM(2690),
      TM = iM(3563),
      VM = iM(9489);
    const cM = MM => ({
      [RM.e]: MM
    });

    function Mr(MM) {
      let {
        id: rM,
        slot: iM,
        icon: OM,
        label: jM,
        hidden: aM,
        className: PM,
        face: QM
      } = MM;
      const zM = (0, SM.useRef)(null);
      return (0, SM.useLayoutEffect)((() => {
        QM && zM.current && (0, VM.k)(zM.current, QM)
      }), [QM]), (0, GM.jsxs)("div", {
        className: nM()("TouchKeyHit", `TouchSlot${iM}`, PM, {
          HudPreviewGhost: aM.has(rM)
        }),
        ...cM(rM),
        children: [QM && (0, GM.jsx)("div", {
          ref: zM,
          className: nM()("TouchKey", {
            Labelled: QM.classList.contains("Labelled")
          })
        }), !QM && (0, GM.jsxs)("div", {
          className: nM()("TouchKey", {
            Labelled: void 0 !== jM
          }),
          children: [OM && (0, GM.jsx)(uM.b, {
            name: OM
          }), void 0 !== jM && (0, GM.jsx)("span", {
            className: "TouchKeyLabel",
            children: jM
          })]
        })]
      })
    }

    function rr(MM) {
      let {
        item: rM,
        selected: iM
      } = MM;
      const OM = (0, SM.useRef)(null);
      return (0, SM.useLayoutEffect)((() => {
        OM.current && (0, VM.k)(OM.current, rM)
      }), [rM]), (0, GM.jsx)("div", {
        ref: OM,
        className: nM()("InvenItem", {
          Selected: iM
        })
      })
    }
    const ir = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      Or = MM => void 0 === MM ? {} : {
        style: {
          "--parked": MM
        }
      };

    function Sr(MM) {
      let {
        id: rM,
        hidden: iM,
        parked: OM,
        unslotted: SM = !1
      } = MM;
      return (0, GM.jsx)("div", {
        className: nM()("TopRightIcon", qM.l[rM], {
          HudPreviewGhost: iM.has(rM),
          [KM.c]: void 0 !== OM,
          [KM.e]: SM
        }),
        ...Or(OM),
        children: (0, GM.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...cM(rM),
          children: (0, GM.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, GM.jsx)(uM.b, {
              name: ir[rM]
            })
          })
        })
      })
    }

    function jr(MM) {
      let {
        portraitPhone: rM,
        icons: iM,
        pinnedIcons: OM,
        hidden: jM,
        moved: aM,
        trayState: PM
      } = MM;
      const QM = rM ? (0, KM.z)(iM) : [],
        zM = iM.filter((MM => "settings" === MM)),
        LM = iM.filter((MM => "settings" !== MM && !QM.includes(MM))).reverse(),
        mM = QM.length > 0 && "gone" === PM,
        HM = [...zM, ...mM ? ["tray"] : [], ...LM].filter((MM => "tray" === MM || jM.has(MM) && !aM.has(MM))),
        hM = MM => {
          const rM = HM.indexOf(MM);
          return rM < 0 ? void 0 : rM
        },
        JM = (MM, rM) => (0, GM.jsx)(Sr, {
          id: MM,
          hidden: jM,
          parked: rM ? hM(MM) : void 0,
          unslotted: rM && jM.has(MM) && aM.has(MM)
        }, MM);
      return (0, GM.jsxs)("div", {
        className: nM()("TopRightIcons TouchInGame", {
          Column: rM
        }),
        children: [zM.map((MM => JM(MM, !0))), QM.length > 0 && (0, GM.jsxs)("div", {
          className: nM()("TopRightIcon TopRightTrayToggle Open", {
            [KM.c]: mM
          }),
          ...Or(hM("tray")),
          children: [(0, GM.jsx)("div", {
            className: nM()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== PM
            }),
            children: (0, GM.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, GM.jsx)(uM.b, {
                name: "ellipsis"
              })
            })
          }), (0, GM.jsx)("div", {
            className: "TopRightTray",
            children: QM.map((MM => JM(MM, !1)))
          })]
        }), LM.map((MM => (0, GM.jsxs)(SM.Fragment, {
          children: ["perspective" === MM && null !== OM.rightOfCamera && (0, GM.jsx)(ar, {
            icon: OM.rightOfCamera
          }), JM(MM, !0)]
        }, MM))), null !== OM.leftEnd && (0, GM.jsx)(ar, {
          icon: OM.leftEnd
        })]
      })
    }

    function ar(MM) {
      let {
        icon: rM
      } = MM;
      return (0, GM.jsx)("div", {
        className: "TopRightIcon",
        children: (0, GM.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, GM.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, GM.jsx)(uM.b, {
              name: rM
            })
          })
        })
      })
    }

    function Pr(MM) {
      let {
        next: rM,
        hidden: iM
      } = MM;
      return (0, GM.jsx)("div", {
        className: nM()("HotBarArrow", rM ? "Next" : "Previous", {
          HudPreviewGhost: iM
        }),
        ...cM("arrows"),
        children: (0, GM.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, GM.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, GM.jsx)(uM.b, {
              name: rM ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function nr() {
      return (0, GM.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, GM.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, GM.jsx)("div", {
            className: "SocialBar",
            children: (0, GM.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, GM.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, GM.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, GM.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, GM.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, GM.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, GM.jsx)(uM.b, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, GM.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, GM.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, GM.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, GM.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, GM.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, GM.jsx)(uM.b, {
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
    const Qr = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      zr = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      Lr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      mr = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function Hr(MM) {
      let {
        presence: rM,
        portraitPhone: iM,
        hidden: SM,
        actionButtons: jM,
        joystickFixed: aM,
        keysAbove: PM,
        auraBar: QM,
        trayState: zM,
        moved: mM
      } = MM;
      const {
        t: HM
      } = (0, OM.A)(), {
        faces: hM,
        items: JM
      } = rM, dM = MM => ({
        HudPreviewGhost: (0, RM.H)(MM).some((MM => SM.has(MM)))
      });
      return (0, GM.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, GM.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, GM.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, GM.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, GM.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, GM.jsx)("div", {
              className: "InGameHeaderGameName",
              children: HM("hudLayout:previewGameName")
            })]
          })
        }), (0, GM.jsx)("div", {
          className: "TopLeftElements",
          children: (0, GM.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, GM.jsxs)("div", {
              className: "Chat",
              children: [(0, GM.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [HM("hudLayout:previewChatLine"), HM("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), HM("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((MM => (0, GM.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, GM.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, GM.jsx)("div", {
                      className: "IndividualText",
                      children: MM
                    })
                  })
                }, MM)))
              }), (0, GM.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: nM()("ChatIconWrapper SmallTextLight", dM("chat")),
                ...cM("chat"),
                children: (0, GM.jsx)(uM.b, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, GM.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, GM.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, GM.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, GM.jsx)("div", {
                className: "TopRightIconsContainer",
                ...cM("menu"),
                children: (0, GM.jsx)(jr, {
                  portraitPhone: iM,
                  icons: rM.rowIcons,
                  pinnedIcons: rM.pinnedIcons,
                  hidden: SM,
                  trayState: zM,
                  moved: mM
                })
              })
            }), LM.featureFlags.useSocialFeatures && (0, GM.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, GM.jsx)(nr, {})
            })]
          })
        }), (0, GM.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, GM.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, GM.jsxs)("div", {
            className: "TouchInteractKey",
            ...cM("interact"),
            children: [(0, GM.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, GM.jsx)(uM.b, {
                name: "hand-back-point-up"
              })
            }), (0, GM.jsx)("div", {
              children: HM("hudLayout:previewInteract")
            })]
          })
        }), (0, GM.jsx)("div", {
          className: "BottomCentre",
          children: (0, GM.jsxs)("div", {
            className: "BottomElements",
            children: [(0, GM.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, GM.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, GM.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...cM("hotbar"),
                children: (0, GM.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, GM.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, GM.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, GM.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, GM.jsx)(uM.b, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), QM && (0, GM.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, GM.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, GM.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, TM.f)("glint"),
                    alt: ""
                  }), (0, GM.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, GM.jsx)("div", {
                  className: "AuraBar",
                  children: (0, GM.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, GM.jsx)("div", {
                className: "HotBarRow",
                children: (0, GM.jsx)("div", {
                  className: nM()("HotBarContainer Touch", {
                    KeysAbove: PM
                  }),
                  children: (0, GM.jsxs)("div", {
                    className: "HotBar",
                    ...cM("hotbar"),
                    children: [(0, GM.jsxs)("div", {
                      className: nM()("TouchInventoryKeys", {
                        NoAuraBar: !QM
                      }),
                      children: [(0, GM.jsx)("div", {
                        className: nM()("TouchInventoryKey ShopKey", dM("shop"), {
                          Hidden: !rM.shop
                        }),
                        ...cM("shop"),
                        children: (0, GM.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, GM.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, GM.jsx)(uM.b, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, GM.jsx)("div", {
                        className: nM()("TouchInventoryKey BagKey", dM("bag"), {
                          Hidden: !rM.bag
                        }),
                        ...cM("bag"),
                        children: (0, GM.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, GM.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, GM.jsx)(uM.b, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, GM.jsx)(Pr, {
                      next: !1,
                      hidden: SM.has("arrows")
                    }), (0, GM.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== JM && JM.map(((MM, rM) => (0, GM.jsx)(rr, {
                        item: MM,
                        selected: MM.classList.contains("Selected")
                      }, rM))), null === JM && Lr.map((MM => {
                        const rM = mr[MM];
                        return (0, GM.jsx)("div", {
                          className: nM()("InvenItem", {
                            Selected: 0 === MM
                          }),
                          children: rM && (0, GM.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, GM.jsx)(uM.b, {
                              name: rM
                            })
                          })
                        }, MM)
                      }))]
                    }), (0, GM.jsx)(Pr, {
                      next: !0,
                      hidden: SM.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, GM.jsx)("div", {
              className: "BottomRightElements",
              children: (0, GM.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== hM && VM.g.map((MM => {
                  const rM = hM[MM];
                  return rM && (0, GM.jsx)(Mr, {
                    id: VM.e[MM],
                    slot: MM,
                    face: rM,
                    className: Qr[MM],
                    hidden: SM
                  }, MM)
                })), (0, VM.n)(rM, jM).map((MM => (0, GM.jsx)(Mr, {
                  id: VM.e[MM],
                  slot: MM,
                  icon: zr[MM].icon,
                  label: HM(zr[MM].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: SM
                }, MM))), null === hM && (0, GM.jsxs)(GM.Fragment, {
                  children: [(0, GM.jsx)(Mr, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: SM
                  }), (0, GM.jsx)(Mr, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: SM
                  }), jM && (0, GM.jsxs)(GM.Fragment, {
                    children: [(0, GM.jsx)(Mr, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: SM
                    }), (0, GM.jsx)(Mr, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: SM
                    })]
                  }), (0, VM.j)(jM).map((MM => (0, GM.jsx)(Mr, {
                    id: VM.e[MM],
                    slot: MM,
                    icon: zr[MM].icon,
                    label: HM(zr[MM].labelKey),
                    hidden: SM
                  }, MM))), (0, GM.jsx)(Mr, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: SM
                  })]
                })]
              })
            })]
          })
        }), (0, GM.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, GM.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, GM.jsxs)("div", {
              className: nM()("Joystick Resting HudPreviewJoystick", {
                Floating: !aM
              }),
              ...cM("joystick"),
              children: [(0, GM.jsx)("div", {
                className: "JoystickBase"
              }), (0, GM.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), rM.sprint && (0, GM.jsx)("div", {
            className: nM()("TouchSprintHit", dM("sprint"), {
              AtHome: !aM
            }),
            ...cM("sprint"),
            children: (0, GM.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, GM.jsx)(uM.b, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function hr() {
      const [MM, rM] = (0, SM.useState)({}), iM = (0, SM.useCallback)((MM => {
        rM((rM => [...new Set([...Object.keys(rM), ...Object.keys(MM)])].every((iM => rM[iM] === MM[iM])) ? rM : MM))
      }), []);
      return [MM, iM]
    }
    const Jr = .05;

    function dr(MM) {
      var rM;
      let {
        selected: iM,
        layout: SM,
        actionButtons: jM,
        keyNames: aM,
        overlaps: PM,
        scaleCaps: zM,
        joystickFixed: LM,
        onScale: mM,
        onHidden: HM,
        onReset: hM,
        locked: JM,
        lockable: dM,
        onLocked: yM,
        extra: lM
      } = MM;
      const {
        t: EM
      } = (0, OM.A)(), UM = iM ? RM.f[iM] : null, CM = null !== iM && JM.has(iM), eM = (iM && SM.hudElements[iM] || pM.k)[2], bM = null !== (rM = iM && zM[iM]) && void 0 !== rM ? rM : pM.f, wM = MM => {
        iM && mM(iM, Math.min(bM, Math.round(100 * (eM + .1 * MM)) / 100))
      };
      return (0, GM.jsxs)(GM.Fragment, {
        children: [(0, GM.jsxs)("div", {
          className: nM()("HudQuickName SmallTextBold", {
            Overlap: PM.length > 0
          }),
          children: [PM.length > 0 && (0, GM.jsx)(uM.b, {
            name: "triangle-exclamation"
          }), UM ? (0, RM.s)(UM.id, jM, EM, aM) : EM("hudLayout:fullScreenHint"), PM.length > 0 && (0, GM.jsx)("span", {
            className: "HudQuickOverlap",
            children: EM("hudLayout:overlapsShort", {
              names: (0, RM.q)(PM, jM, EM, aM)
            })
          })]
        }), (null === UM || void 0 === UM ? void 0 : UM.scale) && (0, GM.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, GM.jsx)(QM.V, {
            disabled: CM || eM <= pM.j,
            ariaLabel: EM("hudLayout:smaller"),
            onClick: () => {
              wM(-1)
            },
            children: (0, GM.jsx)(uM.b, {
              name: "minus"
            })
          }), (0, GM.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*eM)}%`
          }), (0, GM.jsx)(QM.V, {
            disabled: CM || eM >= bM,
            ariaLabel: EM("hudLayout:larger"),
            onClick: () => {
              wM(1)
            },
            children: (0, GM.jsx)(uM.b, {
              name: "plus"
            })
          })]
        }), (UM || lM) && (0, GM.jsxs)("div", {
          className: "HudQuickActions",
          children: [UM && (0, GM.jsxs)(GM.Fragment, {
            children: [(0, GM.jsx)(kM, {
              id: UM.id,
              actionButtons: jM,
              keyNames: aM,
              locked: CM,
              lockable: dM(UM.id),
              onLocked: yM
            }), (0, GM.jsx)(sM, {
              id: UM.id,
              elements: SM.hudElements,
              actionButtons: jM,
              keyNames: aM,
              onHidden: HM
            }), (0, GM.jsx)(DM, {
              id: UM.id,
              elements: SM.hudElements,
              actionButtons: jM,
              keyNames: aM,
              locked: CM,
              onReset: hM
            }), NM(UM.id, LM) && (0, GM.jsx)(AM, {})]
          }), lM]
        })]
      })
    }
    var yr = iM(1130),
      lr = iM(4796);
    const Er = "HudPreviewDoc",
      Ur = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      Gr = new Set([Er, ...Object.values(Ur)]),
      Cr = new Set(pM.t.map(qM.x)),
      er = new Set(qM.j),
      br = 'style, link[rel="stylesheet"]';

    function wr(MM, rM, iM, OM) {
      const SM = new Map,
        jM = new Set,
        aM = new URL(MM.baseURI).origin,
        PM = rM => {
          var iM;
          if ("LINK" !== rM.nodeName) return !0;
          const OM = null === (iM = rM.getAttribute("href")) || void 0 === iM ? void 0 : iM.trim();
          if (!OM) return !1;
          try {
            return new URL(OM, MM.baseURI).origin === aM
          } catch {
            return !1
          }
        };
      let nM = null;
      const QM = () => {
          nM !== (0 === jM.size) && (nM = 0 === jM.size, null === OM || void 0 === OM || OM(nM))
        },
        zM = MM => {
          const rM = MM.cloneNode(!0);
          if ("LINK" === rM.tagName) {
            jM.add(rM);
            const MM = () => {
              jM.delete(rM), QM()
            };
            rM.addEventListener("load", MM), rM.addEventListener("error", MM), iM && rM.addEventListener("load", iM)
          }
          return rM
        },
        LM = () => {
          const OM = function(MM) {
              const rM = [...MM.body.children].filter((MM => MM.matches(br)));
              return [...MM.head.querySelectorAll(br), ...rM]
            }(MM).filter(PM),
            aM = new Set(OM);
          for (const [MM, rM] of SM) aM.has(MM) || (rM.remove(), SM.delete(MM), jM.delete(rM));
          let nM = null;
          for (let MM = OM.length - 1; MM >= 0; MM--) {
            const jM = OM[MM];
            let aM = SM.get(jM);
            aM ? "STYLE" === jM.tagName && aM.textContent !== jM.textContent && (aM.textContent = jM.textContent, null === iM || void 0 === iM || iM()) : (aM = zM(jM), SM.set(jM, aM), rM.head.insertBefore(aM, nM)), nM = aM
          }
          QM()
        };
      LM();
      const mM = new MutationObserver(LM);
      return mM.observe(MM.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), mM.observe(MM.body, {
        childList: !0
      }), () => {
        mM.disconnect()
      }
    }

    function tr(MM, rM, iM) {
      let {
        keysAbove: OM
      } = iM;
      const SM = [...MM.documentElement.classList].filter((MM => !Gr.has(MM) && !er.has(MM))),
        jM = [...rM.documentElement.classList].filter((MM => er.has(MM))),
        aM = [Er, Ur.hotbar, Ur.hasShop, Ur.hasBag];
      OM && aM.push(Ur.keysAbove), rM.documentElement.className = [...SM, ...aM, ...jM].join(" ")
    }
    const gr = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function ur(MM, rM, iM, OM, SM) {
      const jM = (0, pM.v)(iM, OM, "joystick"),
        aM = (0, qM.z)((0, qM.R)(iM, OM, SM), OM),
        PM = aM.classes.filter((MM => !Cr.has(MM))),
        nM = rM.documentElement,
        QM = iM.hudLayouts[OM].hudSafe,
        zM = (0, qM.G)(QM, window.innerWidth, window.innerHeight, Rr(), QM ? (0, qM.T)(rM) : 0);
      (0, qM.W)({
        ...aM,
        classes: PM
      }, {
        vars: nM,
        safe: nM,
        classes: nM
      }), nM.style.setProperty("--preview-joystick-shift-left", `${zM[3]}px`), nM.style.setProperty("--preview-joystick-shift-bottom", `${zM[2]}px`), nM.style.setProperty("--preview-joystick-scale", String(jM[2])), (0, lr.c)(nM, rM, iM, OM);
      for (const LM of gr) nM.style.setProperty(LM, MM.documentElement.style.getPropertyValue(LM) || "0px")
    }

    function Rr() {
      return (0, qM.O)(zM.d.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function pr(MM) {
      return (0, qM.v)(Rr(), (0, qM.T)(MM))
    }

    function Wr(MM, rM, iM) {
      const OM = MM.documentElement.style,
        SM = (0, qM.K)(rM),
        jM = OM.getPropertyValue(SM);
      try {
        return iM((MM => {
          OM.setProperty(SM, String(MM))
        }))
      } finally {
        "" === jM ? OM.removeProperty(SM) : OM.setProperty(SM, jM)
      }
    }

    function sr(MM, rM) {
      const [iM, OM] = Wr(MM, "hotbar", (rM => {
        const iM = iM => {
          var OM, SM;
          return rM(iM), null !== (OM = null === (SM = MM.querySelector(".HotBarGameItemsContainer")) || void 0 === SM ? void 0 : SM.getBoundingClientRect().width) && void 0 !== OM ? OM : 0
        };
        return [iM(1), iM(pM.f)]
      }));
      return iM <= 0 ? pM.f : Math.min(pM.f, Math.max(1, Math.floor(OM / iM / rM + 1e-6) * rM))
    }
    const Dr = 3,
      kr = .5,
      Zr = MM => MM.right - MM.left;
    const or = (MM, rM) => Math.abs((0, XM.e)(MM).x - (0, XM.e)(rM).x) + Math.abs((0, XM.e)(MM).y - (0, XM.e)(rM).y) + Math.abs(Zr(MM) - Zr(rM));

    function fr(MM, rM, iM, OM, SM) {
      let {
        canKeep: jM = () => !0,
        passes: aM = Dr,
        before: PM
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const nM = rM.hudLayouts[iM].hudLocked.filter(jM);
      if (0 === nM.length) return rM;
      const QM = [...RM.d].filter((OM => !nM.includes(OM) && (0, pM.v)(MM, iM, OM).join() === (0, pM.v)(rM, iM, OM).join())),
        zM = MM => {
          const rM = (0, XM.M)(QM.flatMap((rM => MM[rM] ? [MM[rM]] : [])));
          return {
            ...MM,
            cluster: null !== rM && void 0 !== rM ? rM : void 0
          }
        };
      let LM = null;
      const mM = MM => {
          LM = MM;
          const rM = SM(MM);
          return rM && {
            ...rM,
            boxes: zM(rM.boxes)
          }
        },
        HM = PM ? {
          ...PM,
          boxes: zM(PM.boxes)
        } : mM(MM),
        hM = HM && mM(rM);
      if (!HM || !hM) return rM;
      const JM = HM.boxes;
      let dM = hM.boxes;
      const yM = HM.keysAbove !== hM.keysAbove,
        lM = yM || Boolean(HM.shopAlone) !== Boolean(hM.shopAlone),
        EM = new Set(nM.filter((MM => !(0, RM.w)(MM) || !("bag" === MM ? yM : lM))));
      let UM = rM;
      for (let eM = 0; eM < aM && EM.size > 0; eM++) {
        var GM, CM;
        const MM = new Map;
        for (const rM of EM) {
          const SM = JM[rM],
            jM = dM[rM],
            aM = SM && jM ? Yr(rM, (0, pM.v)(UM, iM, rM), SM, jM, OM) : null;
          aM ? MM.set(rM, aM) : EM.delete(rM)
        }
        if (0 === MM.size) break;
        let SM = UM;
        for (const [rM, OM] of MM) SM = (0, pM.cb)(SM, iM, rM, OM);
        const jM = null === (GM = mM(SM)) || void 0 === GM ? void 0 : GM.boxes;
        if (!jM) return rM;
        let aM = UM;
        for (const [rM, OM] of MM) {
          const MM = jM[rM];
          MM && or(JM[rM], MM) < or(JM[rM], dM[rM]) - kr ? aM = (0, pM.cb)(aM, iM, rM, OM) : EM.delete(rM)
        }
        if (aM === UM) break;
        const PM = [...MM.keys()].every((MM => EM.has(MM)));
        UM = PM ? SM : aM;
        const nM = PM ? jM : null === (CM = mM(UM)) || void 0 === CM ? void 0 : CM.boxes;
        if (!nM) return rM;
        dM = nM
      }
      return LM !== UM && SM(UM), UM
    }

    function Yr(MM, rM, iM, OM, SM) {
      let [jM, aM, PM] = rM;
      const nM = pM.s[MM],
        QM = {};
      nM.scale && Zr(OM) > 0 && Math.abs(Zr(iM) - Zr(OM)) > kr && (QM.scale = Math.max(pM.j, Math.min(pM.f, PM * Zr(iM) / Zr(OM))));
      const zM = (0, XM.e)(iM).x - (0, XM.e)(OM).x,
        LM = (0, XM.e)(iM).y - (0, XM.e)(OM).y;
      return nM.move && (Math.abs(zM) > kr || Math.abs(LM) > kr) && (QM.dx = jM + zM / SM.width, QM.dy = aM + LM / SM.height), void 0 === QM.scale && void 0 === QM.dx ? null : QM
    }
    let Nr = 0;

    function Ar() {
      return Nr > 0
    }
    const xr = MM => 0 === MM.dx && 0 === MM.dy,
      vr = .001,
      Fr = MM => Math.abs(MM.dx) >= 5e-4 || Math.abs(MM.dy) >= 5e-4 ? MM : {
        dx: MM.dx,
        dy: MM.dy < 0 ? -.001 : vr
      };

    function Br(MM) {
      let {
        preview: rM,
        stageRef: iM,
        ringRef: OM,
        centreLineRef: jM,
        snapCentre: aM,
        ready: PM,
        measure: nM,
        k: QM,
        viewport: zM,
        boxes: LM,
        pieces: mM,
        selected: HM,
        insets: hM,
        layout: JM,
        canMove: dM,
        onSelect: yM,
        onMove: lM
      } = MM;
      const EM = (0, SM.useRef)(null),
        UM = (0, SM.useCallback)((() => null !== EM.current), []),
        GM = (MM, rM) => {
          if (!rM) return null;
          const iM = (0, XM.e)(MM.origin),
            OM = (0, XM.e)(rM),
            SM = (MM.to.dx - MM.from.dx) * zM.width,
            jM = (MM.to.dy - MM.from.dy) * zM.height,
            aM = rM.right - rM.left,
            PM = rM.bottom - rM.top;
          return {
            skew: {
              x: OM.x - iM.x - SM,
              y: OM.y - iM.y - jM
            },
            box: {
              left: iM.x - aM / 2,
              top: iM.y - PM / 2,
              right: iM.x + aM / 2,
              bottom: iM.y + PM / 2
            }
          }
        },
        CM = (MM, iM) => {
          var SM;
          const aM = EM.current;
          if (!aM || aM.pointerId !== MM.pointerId) return;
          EM.current = null, null === (SM = jM.current) || void 0 === SM || SM.classList.remove("Shown", "Snapped");
          const PM = OM.current;
          if (PM && null !== aM.ringStyle && PM.setAttribute("style", aM.ringStyle), iM && aM.moved) {
            const MM = xr(aM.to) ? null : nM(aM.id),
              rM = MM ? (0, XM.I)(MM, (0, XM.H)(zM.width, zM.height, hM)) : {
                x: 0,
                y: 0
              },
              iM = {
                dx: aM.to.dx + rM.x / zM.width,
                dy: aM.to.dy + rM.y / zM.height
              },
              OM = xr(aM.to) ? iM : Fr(iM);
            lM(aM.id, OM.dx, OM.dy)
          } else rM(aM.id, null), iM && aM.tapPick && yM(aM.tapPick)
        };
      return {
        busy: UM,
        handlers: {
          onPointerDown: MM => {
            var rM;
            if (!PM || EM.current || !MM.target.closest(".HudPreviewHandle")) return;
            const OM = iM.current.getBoundingClientRect(),
              SM = {
                x: (MM.clientX - OM.left) / QM,
                y: (MM.clientY - OM.top) / QM
              },
              jM = (0, XM.B)(SM, mM, 40 / QM),
              aM = null !== HM ? RM.k.get(HM) : void 0,
              nM = void 0 !== aM && null !== (0, XM.B)(SM, mM.filter((MM => {
                let {
                  id: rM
                } = MM;
                return aM.has(rM)
              })), 40 / QM),
              zM = "menu" === HM && void 0 !== LM.menu && (0, XM.i)(LM.menu, SM) && ("menu" === jM || null !== jM && (0, KM.s)(jM, JM.hudElements[jM])),
              hM = nM ? HM : zM ? "menu" : null,
              lM = null !== hM,
              UM = null !== hM && void 0 !== hM ? hM : jM;
            if (!UM) return;
            if (function(MM) {
                Nr++;
                const rM = iM => {
                  iM.pointerId === MM && (Nr = Math.max(0, Nr - 1), window.removeEventListener("pointerup", rM, !0), window.removeEventListener("pointercancel", rM, !0))
                };
                window.addEventListener("pointerup", rM, !0), window.addEventListener("pointercancel", rM, !0)
              }(MM.pointerId), !dM(UM)) return void yM(lM && jM ? jM : UM);
            yM(UM);
            const [GM, CM] = null !== (rM = JM.hudElements[UM]) && void 0 !== rM ? rM : [0, 0], eM = {
              dx: GM,
              dy: CM
            }, bM = {
              skew: {
                x: 0,
                y: 0
              },
              box: LM[UM]
            };
            EM.current = {
              id: UM,
              pointerId: MM.pointerId,
              startX: MM.clientX,
              startY: MM.clientY,
              origin: LM[UM],
              from: eM,
              to: eM,
              moved: !1,
              home: xr(eM) ? {
                centre: (0, XM.e)(LM[UM]),
                anchor: bM
              } : null,
              away: xr(eM) ? null : bM,
              anchor: bM,
              ringStyle: null,
              tapPick: lM ? jM : null
            }, MM.currentTarget.setPointerCapture(MM.pointerId)
          },
          onPointerMove: MM => {
            const iM = EM.current;
            if (!iM || iM.pointerId !== MM.pointerId) return;
            const SM = MM.clientX - iM.startX,
              PM = MM.clientY - iM.startY;
            if (!iM.moved && Math.hypot(SM, PM) < 5) return;
            const LM = !iM.moved;
            var mM, HM;
            (iM.moved = !0, LM) && (iM.ringStyle = null !== (mM = null === (HM = OM.current) || void 0 === HM ? void 0 : HM.getAttribute("style")) && void 0 !== mM ? mM : null);
            const JM = (0, XM.H)(zM.width, zM.height, hM);
            if (!iM.home) {
              var dM;
              iM.to = {
                dx: 0,
                dy: 0
              }, rM(iM.id, iM.to);
              const MM = nM(iM.id),
                OM = null !== (dM = GM(iM, MM)) && void 0 !== dM ? dM : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: iM.origin
                },
                SM = (0, XM.e)(iM.origin);
              iM.home = {
                centre: MM ? (0, XM.e)(MM) : {
                  x: SM.x - iM.from.dx * zM.width,
                  y: SM.y - iM.from.dy * zM.height
                },
                anchor: OM
              }
            }
            const yM = iM.home;
            let lM = !1;
            const UM = MM => {
                lM = !1;
                let OM = (0, XM.s)(MM.box, SM / QM, PM / QM, JM);
                const jM = zM.width / 2;
                if (aM && Math.abs((0, XM.e)(iM.origin).x + OM.x - jM) <= 8 / QM) {
                  const rM = jM - (0, XM.e)(iM.origin).x,
                    SM = (0, XM.s)(MM.box, rM, OM.y, JM);
                  lM = Math.abs(SM.x - rM) < .01, lM && (OM = SM)
                }
                const nM = (0, XM.z)(iM.from, OM.x - MM.skew.x, OM.y - MM.skew.y, zM.width, zM.height);
                iM.to = Fr(nM), iM.anchor = MM, rM(iM.id, iM.to)
              },
              CM = (0, XM.s)(yM.anchor.box, SM / QM, PM / QM, JM),
              eM = jM.current,
              bM = (0, XM.e)(iM.origin),
              wM = ((0, pM.L)(iM.id) ? 20 : 6) / QM;
            if (Math.abs(bM.x + CM.x - yM.centre.x) <= wM && Math.abs(bM.y + CM.y - yM.centre.y) <= wM) iM.to = {
              dx: 0,
              dy: 0
            }, iM.anchor = yM.anchor, lM = aM && Math.abs(yM.centre.x - zM.width / 2) < 1, rM(iM.id, iM.to);
            else if (iM.away) UM(iM.away);
            else {
              var tM;
              UM(yM.anchor), iM.away = null !== (tM = GM(iM, nM(iM.id))) && void 0 !== tM ? tM : yM.anchor, UM(iM.away)
            }
            null === eM || void 0 === eM || eM.classList.add("Shown"), null === eM || void 0 === eM || eM.classList.toggle("Snapped", lM), (MM => {
              const rM = OM.current;
              if (rM) {
                const {
                  skew: iM,
                  box: OM
                } = MM.anchor;
                rM.style.left = OM.left * QM + "px", rM.style.top = OM.top * QM + "px", rM.style.width = (OM.right - OM.left) * QM + "px", rM.style.height = (OM.bottom - OM.top) * QM + "px", rM.style.translate = `${((MM.to.dx-MM.from.dx)*zM.width+iM.x)*QM}px ${((MM.to.dy-MM.from.dy)*zM.height+iM.y)*QM}px`
              }
            })(iM)
          },
          onPointerUp: MM => {
            CM(MM, !0)
          },
          onPointerCancel: MM => {
            CM(MM, !1)
          }
        }
      }
    }
    var Xr = iM(9498);

    function Ir(MM, rM) {
      return Object.keys(MM).filter((MM => MM !== rM)).map((rM => MM[rM]))
    }

    function Kr(MM) {
      return MM.map((MM => {
        let {
          id: rM,
          box: iM
        } = MM;
        return `${rM}:${iM.left},${iM.top},${iM.right},${iM.bottom}`
      })).join(";")
    }

    function qr(MM) {
      const rM = [],
        iM = rM => (0, pM.L)(rM) && !MM.documentElement.classList.contains((0, qM.C)(rM));
      for (const PM of MM.querySelectorAll(`[${RM.e}]`)) {
        const MM = iM(PM.getAttribute(RM.e)) ? PM.querySelector(".ScaleOnHover") : null,
          OM = (null !== MM && void 0 !== MM ? MM : PM).getBoundingClientRect();
        (OM.width > 0 || OM.height > 0) && rM.push({
          id: PM.getAttribute(RM.e),
          box: (0, XM.j)(OM)
        })
      }
      const OM = MM => (0, XM.M)(rM.filter((rM => {
          let {
            id: iM
          } = rM;
          return MM(iM)
        })).map((MM => {
          let {
            box: rM
          } = MM;
          return rM
        }))),
        SM = {};
      for (const PM of new Set(rM.map((MM => MM.id)))) SM[PM] = OM((MM => MM === PM));
      for (const [PM, nM] of RM.k) {
        const MM = OM((MM => nM.has(MM)));
        MM && (SM[PM] = MM)
      }
      const jM = MM.querySelector(".TouchInventoryKeys"),
        aM = jM ? (0, XM.j)(jM.getBoundingClientRect()) : null;
      return {
        boxes: SM,
        pieces: rM,
        pairHome: aM
      }
    }

    function Tr(MM, rM, iM) {
      const OM = rM.right - rM.left,
        SM = rM.bottom - rM.top;
      return Wr(MM, "cluster", (rM => {
        const jM = iM => {
            rM(iM);
            const OM = [...MM.querySelectorAll(`[${RM.e}]:not(.HudPreviewGhost)`)].filter((MM => RM.d.has(MM.getAttribute(RM.e)))).map((MM => (0, XM.j)(MM.getBoundingClientRect()))),
              SM = (0, XM.M)(OM);
            return SM ? {
              w: SM.right - SM.left,
              h: SM.bottom - SM.top
            } : null
          },
          aM = MM => !MM || MM.w <= OM && MM.h <= SM,
          PM = jM(1),
          nM = jM(pM.f);
        if (!PM || aM(nM)) return pM.f;
        const QM = (MM, rM, iM) => rM > MM ? 1 + (iM - MM) * (pM.f - 1) / (rM - MM) : pM.f;
        let zM = Math.floor(Math.min(pM.f, QM(PM.w, nM.w, OM), QM(PM.h, nM.h, SM)) / iM + 1e-6) * iM;
        for (; zM > 1 && !aM(jM(zM));) zM = Math.round(100 * (zM - iM)) / 100;
        return Math.max(1, zM)
      }))
    }

    function Vr(MM) {
      tr(document, MM, {
        keysAbove: !1
      });
      const rM = parseFloat(getComputedStyle(MM.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        iM = Number.isFinite(rM) && rM < 0;
      return tr(document, MM, {
        keysAbove: iM
      }), (0, Xr.e)(MM), iM
    }

    function cr(MM) {
      const rM = MM.querySelector(".TouchInventoryKey.ShopKey");
      return null !== rM && "1" === getComputedStyle(rM).getPropertyValue("--touch-shop-above").trim()
    }

    function Mi(MM, rM) {
      let {
        layout: iM,
        orientation: OM,
        viewport: jM,
        replicaKey: aM,
        joystickFixed: PM,
        busy: nM
      } = rM;
      const [QM, zM] = (0, SM.useState)(null), [LM, mM] = (0, SM.useState)({
        boxes: {},
        pieces: []
      }), [HM, hM] = (0, SM.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [JM, dM] = (0, SM.useState)(!1), [yM, lM] = (0, SM.useState)(!1), [EM, UM] = (0, SM.useState)(!1), GM = (0, SM.useCallback)((MM => {
        lM(MM), MM && UM(!0)
      }), []), CM = iM.hudLayouts[OM].hudSafe;
      (0, SM.useLayoutEffect)((() => {
        const rM = MM.current.contentDocument;
        rM.open(), rM.write("<!DOCTYPE html><html><head></head><body></body></html>"), rM.close(), zM(rM)
      }), [MM]);
      const eM = (0, SM.useCallback)((() => {
          QM && ((0, KM.v)(QM), mM(qr(QM)), hM(function(MM, rM) {
            const iM = pr(MM),
              [OM, SM, jM, aM] = rM ? (0, qM.w)(rM, window.innerWidth, window.innerHeight, iM) : iM;
            return {
              top: OM,
              right: SM,
              bottom: jM,
              left: aM
            }
          }(QM, CM)))
        }), [QM, CM]),
        bM = (0, SM.useCallback)((() => {
          QM && dM(Vr(QM))
        }), [QM]),
        wM = (0, SM.useRef)((() => {}));
      return wM.current = () => {
        bM(), nM() || eM()
      }, (0, SM.useLayoutEffect)((() => {
        if (QM) return wr(document, QM, (() => {
          wM.current()
        }), GM)
      }), [QM, GM]), (0, SM.useLayoutEffect)(bM, [bM, jM]), (0, SM.useLayoutEffect)((() => {
        QM && (tr(document, QM, {
          keysAbove: JM
        }), ur(document, QM, iM, OM, PM), bM(), eM())
      }), [QM, iM, OM, JM, aM, PM, jM, eM, bM]), (0, SM.useEffect)((() => {
        var MM;
        if (!QM) return;
        const rM = new ResizeObserver((() => {
          nM() || eM()
        }));
        for (const iM of QM.querySelectorAll(`[${RM.e}]`)) rM.observe(iM);
        return null === (MM = QM.fonts) || void 0 === MM || MM.ready.then(eM), () => {
          rM.disconnect()
        }
      }), [QM, eM, nM, aM]), {
        doc: QM,
        boxes: LM.boxes,
        pieces: LM.pieces,
        insets: HM,
        keysAbove: JM,
        ready: yM,
        settled: EM
      }
    }
    const ri = ["Above", "Below", "Left", "Right"];

    function ii(MM, rM, iM, OM, SM) {
      const jM = iM[MM],
        aM = (jM.left + jM.right) / 2,
        PM = (jM.top + jM.bottom) / 2,
        nM = (7.5 * rM.length + 14) / OM,
        QM = 18 / OM,
        zM = {
          Above: {
            left: aM - nM / 2,
            top: jM.top - QM,
            right: aM + nM / 2,
            bottom: jM.top
          },
          Below: {
            left: aM - nM / 2,
            top: jM.bottom,
            right: aM + nM / 2,
            bottom: jM.bottom + QM
          },
          Left: {
            left: jM.left - nM,
            top: PM - QM / 2,
            right: jM.left,
            bottom: PM + QM / 2
          },
          Right: {
            left: jM.right,
            top: PM - QM / 2,
            right: jM.right + nM,
            bottom: PM + QM / 2
          }
        },
        LM = Ir(iM, MM),
        mM = {
          left: 0,
          top: 0,
          right: SM.width,
          bottom: SM.height
        };
      return ri[(0, XM.w)(ri.map((MM => zM[MM])), LM, {
        bounds: mM
      })]
    }

    function Oi() {
      const [MM, rM] = (0, FM.d)();
      return (0, SM.useMemo)((() => ({
        width: MM,
        height: rM
      })), [MM, rM])
    }

    function Si(MM) {
      var rM;
      const {
        layout: iM,
        orientation: jM,
        selected: aM,
        onSelect: PM,
        onMove: QM,
        canMove: zM,
        actionButtons: LM,
        joystickFixed: mM,
        presence: HM,
        keyNames: JM,
        maxHeight: dM,
        fill: yM = !1,
        apiRef: lM
      } = MM, {
        t: EM
      } = (0, OM.A)(), UM = Oi(), CM = (null !== (rM = (0, hM.f)("maxAuraLevel")) && void 0 !== rM ? rM : 0) > 0, eM = iM.hudLayouts[jM], bM = (0, SM.useRef)(null), wM = (0, SM.useRef)(null), tM = (0, SM.useRef)(null), gM = (0, SM.useRef)(null), WM = (0, SM.useRef)(null), sM = (0, SM.useRef)(null), DM = (0, BM.d)(bM).width, kM = yM ? 1 : DM > 0 ? (0, XM.D)(DM, UM.width, UM.height, dM) : 0, ZM = (0, SM.useRef)((() => !1)), oM = (0, SM.useCallback)((() => ZM.current()), []), fM = `${LM}:${mM}:${CM}`, {
        doc: YM,
        boxes: NM,
        pieces: AM,
        insets: vM,
        keysAbove: FM,
        ready: TM,
        settled: VM
      } = Mi(tM, {
        layout: iM,
        orientation: jM,
        viewport: UM,
        replicaKey: fM,
        joystickFixed: mM,
        busy: oM
      }), cM = (0, SM.useCallback)((MM => {
        YM && ur(document, YM, MM, jM, mM)
      }), [YM, jM, mM]), Mr = (0, SM.useCallback)((MM => {
        if (!YM || !VM) return null;
        cM(MM);
        const rM = Vr(YM),
          iM = function(MM, rM) {
            let {
              boxes: iM,
              pieces: OM,
              pairHome: SM
            } = MM;
            const jM = OM.find((MM => RM.h.has(MM.id)));
            if (!jM || !SM) return iM;
            const aM = (0, XM.e)(SM),
              PM = rM(jM.id),
              nM = Zr(jM.box) / PM / 2,
              QM = (jM.box.bottom - jM.box.top) / PM / 2;
            return {
              ...iM,
              inventory: {
                left: aM.x - nM,
                top: aM.y - QM,
                right: aM.x + nM,
                bottom: aM.y + QM
              }
            }
          }(qr(YM), (rM => (0, pM.v)(MM, jM, rM)[2]));
        return {
          boxes: iM,
          keysAbove: rM,
          shopAlone: cr(YM)
        }
      }), [YM, VM, cM, jM]), rr = (0, SM.useRef)(null), ir = (0, SM.useRef)(null), Or = (0, SM.useRef)(iM);
      Or.current = iM;
      const Sr = (0, SM.useCallback)((() => {
        null !== rr.current && (cancelAnimationFrame(rr.current), rr.current = null)
      }), []);
      (0, SM.useEffect)((() => Sr), [iM, Sr]);
      const jr = (0, SM.useRef)(-1 / 0),
        {
          lockable: ar
        } = MM,
        Pr = (0, SM.useCallback)((MM => {
          if (cM(MM), jr.current = performance.now(), !VM || 0 === iM.hudLayouts[jM].hudLocked.length) return;
          const rM = iM;
          Sr(), rr.current = requestAnimationFrame((() => {
            var iM;
            if (rr.current = null, Or.current !== rM) return;
            const OM = (null === (iM = ir.current) || void 0 === iM ? void 0 : iM.from) === rM ? ir.current.measured : Mr(rM);
            OM && (ir.current = {
              from: rM,
              measured: OM
            }), cM(OM ? fr(rM, MM, jM, UM, Mr, {
              canKeep: ar,
              passes: 1,
              before: OM
            }) : MM)
          }))
        }), [cM, VM, iM, jM, UM, Mr, ar, Sr]),
        nr = Br({
          preview: (MM, rM) => {
            rM ? Pr((0, pM.cb)(iM, jM, MM, rM)) : (Sr(), cM(iM))
          },
          stageRef: wM,
          ringRef: gM,
          centreLineRef: WM,
          snapCentre: iM.hudSnapCentre,
          ready: VM,
          measure: MM => {
            const rM = YM && TM ? qr(YM).boxes[MM] : void 0;
            return rM && (0, XM.n)(rM, UM.width, UM.height) ? rM : null
          },
          k: kM,
          viewport: UM,
          boxes: NM,
          pieces: AM,
          selected: aM,
          insets: vM,
          layout: eM,
          canMove: zM,
          onSelect: PM,
          onMove: (MM, rM, iM) => {
            Sr(), QM(MM, rM, iM)
          }
        });
      (0, SM.useLayoutEffect)((() => {
        ZM.current = nr.busy
      }), [nr.busy]);
      const Qr = (0, SM.useRef)([]),
        zr = (0, SM.useRef)(eM.hudElements);
      (0, SM.useEffect)((() => {
        for (const SM of Object.keys(eM.hudElements)) {
          var MM, rM, iM, OM;
          (null !== (MM = null === (rM = eM.hudElements[SM]) || void 0 === rM ? void 0 : rM[2]) && void 0 !== MM ? MM : 1) > (null !== (iM = null === (OM = zr.current[SM]) || void 0 === OM ? void 0 : OM[2]) && void 0 !== iM ? iM : 1) && zM(SM) && !(0, KM.s)(SM, eM.hudElements[SM]) && Qr.current.push(...(0, RM.E)(SM, FM, zM))
        }
        zr.current = eM.hudElements
      }), [eM.hudElements, zM, FM]), (0, SM.useEffect)((() => {
        if (!TM) return;
        const MM = (0, XM.H)(UM.width, UM.height, vM);
        for (const iM of (0, RM.A)(Qr.current.splice(0), NM, MM, zM)) {
          const OM = NM[iM];
          if (!OM || nr.busy() || !(0, XM.n)(OM, UM.width, UM.height)) continue;
          const SM = (0, XM.I)(OM, MM);
          if (0 !== SM.x || 0 !== SM.y) {
            var rM;
            const [MM, OM] = null !== (rM = eM.hudElements[iM]) && void 0 !== rM ? rM : [0, 0];
            QM(iM, MM + SM.x / UM.width, OM + SM.y / UM.height)
          }
        }
      }), [NM, TM]), (0, SM.useImperativeHandle)(lM, (() => ({
        setScale: (MM, rM) => {
          Pr((0, pM.cb)(iM, jM, MM, {
            scale: rM
          }))
        },
        setOpacity: MM => {
          cM({
            ...iM,
            hudKeyOpacity: MM
          })
        },
        keepLocks: (MM, rM) => (Sr(), fr(MM, rM, jM, UM, Mr, {
          canKeep: ar
        })),
        setSafe: MM => {
          const rM = (0, qM.w)(MM, UM.width, UM.height, pr(null !== YM && void 0 !== YM ? YM : document));
          Pr((0, pM.hb)(iM, jM, MM)), sM.current && (sM.current.style.inset = rM.map((MM => MM * kM + "px")).join(" "))
        }
      })), [cM, Pr, Mr, Sr, ar, YM, iM, jM, UM, kM]);
      const Lr = new Set(Object.keys(eM.hudElements).filter((MM => (0, pM.p)(eM.hudElements, MM)))),
        mr = aM ? NM[aM] : void 0,
        hr = aM ? (0, RM.s)(aM, LM, EM, JM) : "",
        dr = (0, yr.h)(UM.width, UM.height),
        lr = aM ? (0, IM.f)(aM, AM, eM, dr) : [],
        Er = new Set((0, KM.o)(eM.hudElements)),
        Ur = (0, KM.D)(eM, (0, KM.z)(HM.rowIcons)).state,
        Gr = lr.join(),
        Cr = (0, SM.useRef)(MM.onReady);
      Cr.current = MM.onReady, (0, SM.useEffect)((() => {
        var MM;
        null === (MM = Cr.current) || void 0 === MM || MM.call(Cr, VM)
      }), [VM]);
      const er = (0, SM.useRef)(MM.onMeasured);
      (0, SM.useLayoutEffect)((() => {
        er.current = MM.onMeasured
      }));
      const br = (0, SM.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        wr = [Kr(AM), UM.width, UM.height, vM.top, vM.right, vM.bottom, vM.left, TM, fM].join("|");
      (0, SM.useEffect)((() => {
        const MM = Gr ? Gr.split(",") : [],
          rM = () => {
            var rM;
            null === (rM = er.current) || void 0 === rM || rM.call(er, NM, MM, br.current.caps)
          };
        let iM;
        const OM = () => {
          const MM = Or.current;
          if (!YM || MM === br.current.layout && wr === br.current.input) return !1;
          const SM = jr.current + 250 - performance.now();
          return MM === br.current.layout && (SM > 0 || oM()) ? (iM = setTimeout((() => {
            OM() && rM()
          }), Math.max(SM, 62.5)), !1) : (br.current = {
            layout: MM,
            input: wr,
            caps: {
              hotbar: sr(YM, Jr),
              cluster: Tr(YM, (0, XM.H)(UM.width, UM.height, vM), Jr)
            }
          }, !0)
        };
        return OM(), rM(), () => {
          clearTimeout(iM)
        }
      }), [NM, Gr, YM, UM, vM, wr, oM]);
      const tr = MM => ({
        left: MM.left * kM,
        top: MM.top * kM,
        width: (MM.right - MM.left) * kM,
        height: (MM.bottom - MM.top) * kM
      });
      return (0, GM.jsx)("div", {
        ref: bM,
        className: nM()("HudPreviewBox", {
          Fill: yM
        }),
        style: {
          height: UM.height * kM
        },
        children: (0, GM.jsxs)("div", {
          ref: wM,
          className: "HudPreviewStage",
          style: {
            width: UM.width * kM,
            height: UM.height * kM
          },
          children: [(0, GM.jsx)("iframe", {
            ref: tM,
            className: "HudPreviewFrame",
            title: EM("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: UM.width,
              height: UM.height,
              transform: `scale(${kM})`
            }
          }), YM && (0, xM.createPortal)((0, GM.jsx)(Hr, {
            presence: HM,
            portraitPhone: dr,
            hidden: Lr,
            actionButtons: LM,
            joystickFixed: mM,
            keysAbove: FM,
            auraBar: CM,
            trayState: Ur,
            moved: Er
          }), YM.body), (0, GM.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...nr.handlers,
            children: [(0, GM.jsx)("div", {
              ref: sM,
              className: "HudPreviewSafeZone",
              style: {
                top: vM.top * kM,
                right: vM.right * kM,
                bottom: vM.bottom * kM,
                left: vM.left * kM
              }
            }), AM.map(((MM, rM) => {
              let {
                id: iM,
                box: OM
              } = MM;
              return (0, GM.jsx)("div", {
                className: "HudPreviewHandle",
                style: tr((0, XM.t)(OM, 40 / kM))
              }, `${iM}:${rM}`)
            })), eM.hudLocked.map((MM => {
              const rM = NM[MM];
              return rM && (0, GM.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: rM.right * kM,
                  top: rM.top * kM
                },
                children: (0, GM.jsx)(uM.b, {
                  name: "lock"
                })
              }, MM)
            })), (0, GM.jsx)("div", {
              ref: WM,
              className: "HudPreviewCentreLine",
              style: {
                left: UM.width / 2 * kM
              }
            }), aM && mr && (0, GM.jsx)("div", {
              ref: gM,
              className: nM()("HudPreviewRing", {
                Fixed: !zM(aM),
                Overlap: lr.length > 0
              }),
              style: tr(mr),
              children: (0, GM.jsx)("span", {
                className: nM()("HudPreviewRingLabel", ii(aM, hr, NM, kM, UM)),
                children: hr
              })
            })]
          })]
        })
      })
    }

    function ji(MM, rM) {
      (0, SM.useEffect)((() => {
        var iM;
        null === (iM = MM.current) || void 0 === iM || iM.toggleAttribute("inert", rM)
      }), [MM, rM])
    }
    const ai = "hudFullScreen";

    function Pi(MM) {
      let {
        onScale: rM,
        onHidden: iM,
        onReset: jM,
        locked: aM,
        lockable: PM,
        onLocked: nM,
        onClose: zM,
        ...LM
      } = MM;
      const {
        t: mM
      } = (0, OM.A)(), HM = (0, SM.useRef)(null);
      (0, vM.v)("popup", HM, zM),
      function(MM) {
        const rM = (0, SM.useRef)(MM);
        rM.current = MM, (0, SM.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [ai]: !0
          }, "");
          let MM = !1;
          const iM = () => {
            MM = !0, rM.current()
          };
          return window.addEventListener("popstate", iM), () => {
            var rM;
            window.removeEventListener("popstate", iM), !MM && null !== (rM = window.history.state) && void 0 !== rM && rM[ai] && window.history.back()
          }
        }), [])
      }(zM), (0, SM.useEffect)((() => {
        function MM(MM) {
          "Escape" === MM.key && (MM.stopPropagation(), zM())
        }
        return window.addEventListener("keydown", MM, !0), () => {
          window.removeEventListener("keydown", MM, !0)
        }
      }), [zM]);
      const {
        selected: hM
      } = LM, JM = (0, SM.useRef)(null), dM = (0, SM.useRef)(null), [yM, lM] = (0, SM.useState)(!1);
      ji(dM, !yM);
      const [EM, UM] = (0, SM.useState)(null), [CM, eM] = (0, SM.useState)([]), [bM, wM] = hr(), tM = (0, SM.useRef)(LM.selected);
      tM.current = LM.selected;
      const gM = (0, SM.useRef)({}),
        uM = (0, SM.useCallback)((() => {
          const MM = JM.current;
          MM && UM(function(MM, rM, iM) {
            var OM;
            const {
              innerWidth: SM,
              innerHeight: jM
            } = window, aM = MM.offsetWidth, PM = MM.offsetHeight, nM = Math.max(Rr()[0], 6), QM = [];
            for (const mM of [nM, .2 * jM, .5 * jM - PM / 2, .33 * jM])
              for (const MM of [.5, .3, .7]) QM.push({
                left: Math.max(0, Math.min(SM - aM - 6, Math.max(6, SM * MM - aM / 2))),
                top: mM
              });
            const zM = QM.map((MM => ({
                left: MM.left - 6,
                top: MM.top - 6,
                right: MM.left + aM + 6,
                bottom: MM.top + PM + 6
              }))),
              LM = Ir(rM, iM);
            return QM[(0, XM.w)(zM, LM, {
              avoid: iM && null !== (OM = rM[iM]) && void 0 !== OM ? OM : null
            })]
          }(MM, gM.current, tM.current))
        }), []),
        RM = (0, SM.useCallback)(((MM, rM, iM) => {
          eM(rM), wM(iM), gM.current = MM, uM()
        }), [uM, wM]);
      return (0, SM.useLayoutEffect)(uM, [LM.selected, uM]), (0, xM.createPortal)((0, GM.jsxs)("div", {
        ref: HM,
        className: "HudFullScreenEditor",
        children: [(0, GM.jsx)(Si, {
          ...LM,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: RM,
          onReady: lM,
          lockable: PM
        }), (0, GM.jsxs)("div", {
          ref: JM,
          className: "HudFullScreenToolbar",
          style: null === EM ? void 0 : {
            left: EM.left,
            top: EM.top,
            transform: "none"
          },
          children: [(0, GM.jsx)("div", {
            ref: dM,
            className: "HudFullScreenControls",
            children: (0, GM.jsx)(dr, {
              selected: hM,
              layout: LM.layout.hudLayouts[LM.orientation],
              actionButtons: LM.actionButtons,
              keyNames: LM.keyNames,
              overlaps: CM,
              scaleCaps: bM,
              onScale: rM,
              onHidden: iM,
              onReset: jM,
              locked: aM,
              lockable: PM,
              onLocked: nM,
              joystickFixed: LM.joystickFixed
            })
          }), (0, GM.jsx)(QM.e, {
            className: "HudFullScreenDone",
            onClick: zM,
            padDefaultFocus: !0,
            children: mM("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const ni = MM => `${Math.round(100*MM)}%`;

    function Qi(MM) {
      let {
        info: rM,
        tuple: iM,
        props: SM
      } = MM;
      const {
        t: jM
      } = (0, OM.A)();
      return (0, GM.jsx)(HM.h, {
        name: jM("hudLayout:size"),
        min: pM.j,
        max: pM.f,
        step: Jr,
        initValue: iM[2],
        disabled: SM.locked.has(rM.id),
        selectableMax: SM.scaleCaps[rM.id],
        cappedNote: jM("hudLayout:sizeCapped"),
        format: ni,
        onChange: MM => {
          SM.onScalePreview(rM.id, MM)
        },
        onChangeComplete: MM => {
          SM.onScale(rM.id, MM)
        }
      })
    }

    function zi(MM) {
      const {
        t: rM
      } = (0, OM.A)(), {
        present: iM,
        elements: jM,
        selected: aM,
        onSelect: PM,
        onHidden: QM,
        onReset: zM,
        note: LM,
        actionButtons: mM,
        keyNames: HM,
        sizeBesidePreview: hM,
        locked: JM,
        lockable: dM,
        onLocked: yM
      } = MM, {
        rowIconsOpen: lM,
        onRowIconsOpen: EM
      } = MM, UM = (0, SM.useRef)(null), CM = null !== aM && (lM || !(0, pM.L)(aM));
      return (0, SM.useEffect)((() => {
        var MM;
        const rM = aM ? null === (MM = UM.current) || void 0 === MM ? void 0 : MM.querySelector(`[data-hud-row="${aM}"]`) : null;
        if (!rM) return;
        const iM = rM.closest(".SettingsMenuRight"),
          OM = performance.now();
        let SM = null;
        const jM = () => {
            clearInterval(nM), null === iM || void 0 === iM || iM.removeEventListener("scroll", PM)
          },
          PM = () => {
            Ar() || jM()
          },
          nM = setInterval((() => {
            const MM = performance.now();
            MM - OM > 1500 ? jM() : Ar() ? SM = null : null === SM ? SM = MM : MM - SM >= 150 && (jM(), function(MM) {
              var rM;
              const iM = MM.closest(".SettingsMenuRight"),
                OM = null === (rM = MM.closest(".HudLayoutSettings")) || void 0 === rM ? void 0 : rM.querySelector(".HudLayoutPreviewBox");
              if (!iM || !OM) return;
              const SM = OM.getBoundingClientRect().bottom + 8,
                jM = iM.getBoundingClientRect().bottom - 8,
                aM = MM.getBoundingClientRect();
              aM.top < SM ? iM.scrollBy({
                top: aM.top - SM,
                behavior: "smooth"
              }) : aM.bottom > jM && iM.scrollBy({
                top: Math.min(aM.bottom - jM, aM.top - SM),
                behavior: "smooth"
              })
            }(rM))
          }), 50);
        return null === iM || void 0 === iM || iM.addEventListener("scroll", PM, {
          passive: !0
        }), jM
      }), [aM, CM]), (0, GM.jsx)("div", {
        ref: UM,
        className: "SettingBoxGroup HudElementList",
        children: RM.g.filter((MM => iM.has(MM.id) && (lM || !(0, pM.L)(MM.id)))).map((iM => {
          const OM = ((MM, rM) => {
              var iM;
              return null !== (iM = MM[rM]) && void 0 !== iM ? iM : pM.k
            })(jM, iM.id),
            SM = (0, pM.p)(jM, iM.id),
            UM = iM.id === aM,
            CM = iM.scale && !hM,
            eM = LM(iM.id, UM);
          return (0, GM.jsxs)("div", {
            "data-hud-row": iM.id,
            className: nM()("SettingBox HudElementRow", {
              Open: UM,
              Hidden: SM,
              Child: void 0 !== iM.parent,
              Grandchild: (0, RM.m)(iM.id).length > 1
            }),
            children: [(0, GM.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, GM.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": CM ? UM : void 0,
                onClick: () => {
                  PM(iM.id)
                },
                children: (0, GM.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [(0, RM.s)(iM.id, mM, rM, HM), iM.scale && 1 !== OM[2] && !(UM && CM) && (0, GM.jsxs)(GM.Fragment, {
                    children: [" ", (0, GM.jsx)("span", {
                      className: "HudElementRowSize",
                      children: ni(OM[2])
                    })]
                  }), CM && (0, GM.jsxs)(GM.Fragment, {
                    children: [" ", (0, GM.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, GM.jsx)(kM, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: iM.id,
                actionButtons: mM,
                keyNames: HM,
                locked: JM.has(iM.id),
                lockable: dM(iM.id),
                onLocked: yM
              }), "menu" === iM.id && (0, GM.jsx)(ZM, {
                className: "HudElementRowIcon",
                open: lM,
                name: (0, RM.s)(iM.id, mM, rM, HM),
                onToggle: EM
              }), "menu" !== iM.id && (0, GM.jsx)(sM, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: iM.id,
                elements: jM,
                actionButtons: mM,
                keyNames: HM,
                onHidden: QM
              }), (0, GM.jsx)(DM, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: JM.has(iM.id),
                id: iM.id,
                elements: jM,
                actionButtons: mM,
                keyNames: HM,
                onReset: zM
              })]
            }), UM && CM && (0, GM.jsx)(Qi, {
              info: iM,
              tuple: OM,
              props: MM
            }), eM && (0, GM.jsx)("div", {
              className: "HudElementNote",
              children: eM
            })]
          }, iM.id)
        }))
      })
    }

    function Li(MM) {
      let {
        preview: rM,
        quick: iM,
        onFullScreen: jM,
        resting: aM,
        onSidePanel: PM
      } = MM;
      const {
        t: nM
      } = (0, OM.A)(), zM = Oi(), LM = (0, SM.useRef)(null), {
        width: mM
      } = (0, BM.d)(LM), HM = Math.floor(zM.width * Math.min(1, rM.maxHeight / zM.height)), hM = mM - HM - 12, JM = hM >= 130, dM = mM > 0;
      (0, SM.useEffect)((() => {
        dM && PM(JM)
      }), [dM, JM, PM]);
      const yM = (0, XM.D)(JM ? HM : mM, zM.width, zM.height, rM.maxHeight),
        lM = aM ? (0, GM.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: zM.height * yM
          }
        }) : (0, GM.jsx)(Si, {
          ...rM
        }),
        EM = MM => (0, GM.jsxs)(QM.V, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: nM("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: jM,
          children: [(0, GM.jsx)(uM.b, {
            name: "expand"
          }), MM && (0, GM.jsx)("span", {
            children: nM("hudLayout:fullScreen")
          })]
        });
      return (0, GM.jsxs)("div", {
        ref: LM,
        className: "SettingBox HudLayoutPreviewBox",
        children: [mM > 0 && JM && (0, GM.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, GM.jsx)("div", {
            style: {
              width: HM
            },
            children: lM
          }), (0, GM.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, GM.jsx)(dr, {
              selected: rM.selected,
              ...iM,
              joystickFixed: rM.joystickFixed,
              extra: EM(!rM.selected || hM >= 278)
            })
          })]
        }), mM > 0 && !JM && (0, GM.jsxs)(GM.Fragment, {
          children: [lM, (0, GM.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: EM(!1)
          })]
        })]
      })
    }
    var mi = iM(2677),
      Hi = iM(4791),
      Ji = iM(2663),
      di = iM(2631);
    const yi = MM => {
      const rM = qM.p * ("sides" === MM ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(rM / 2))
    };

    function li(MM, rM, iM) {
      const [OM, SM, jM, aM] = MM;
      return "sides" === rM ? [OM, iM, jM, iM] : [iM, SM, iM, aM]
    }
    const Ei = [null, null, null, null],
      Ui = MM => `${MM}px`;

    function Gi(MM) {
      let {
        safe: rM,
        onPreview: iM,
        onCommit: jM
      } = MM;
      const {
        t: aM
      } = (0, OM.A)(), PM = (0, qM.w)(null !== rM && void 0 !== rM ? rM : Ei, window.innerWidth, window.innerHeight, pr(document).map(Math.round)), nM = (0, SM.useRef)(null !== rM && void 0 !== rM ? rM : Ei);
      nM.current = null !== rM && void 0 !== rM ? rM : Ei;
      const zM = MM => {
        const rM = Math.min(yi(MM), "sides" === MM ? Math.max(PM[1], PM[3]) : Math.max(PM[0], PM[2]));
        return (0, GM.jsx)(HM.h, {
          name: aM("sides" === MM ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: yi(MM),
          step: 2,
          initValue: rM,
          format: Ui,
          onChange: rM => {
            iM(li(nM.current, MM, rM))
          },
          onChangeComplete: OM => {
            if (OM === rM) return void iM(nM.current);
            const SM = li(nM.current, MM, OM);
            nM.current = SM, jM(SM), (0, bM.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: MM
            })
          }
        })
      };
      return (0, GM.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, GM.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, GM.jsx)("div", {
            children: aM("hudLayout:safeZone")
          }), (0, GM.jsx)(QM.V, {
            active: null === rM,
            pressed: null === rM,
            onClick: () => {
              jM(null)
            },
            children: aM("hudLayout:safeZoneAuto")
          })]
        }), zM("sides"), zM("ends")]
      })
    }

    function Ci() {
      const {
        t: MM
      } = (0, OM.A)(), rM = (0, pM.ab)(), {
        clientEscMenuOptions: iM
      } = (0, zM.m)(["clientEscMenuOptions"]), jM = (0, mi.i)(), aM = rM.hudLayouts[jM], [PM, nM] = (0, SM.useState)(null), {
        rowIconsOpen: LM,
        onRowIconsOpen: mM,
        select: hM
      } = function(MM, rM) {
        const [iM, OM] = (0, SM.useState)((() => pM.x.some((rM => void 0 !== MM.hudElements[rM] || MM.hudLocked.includes(rM))))), jM = (0, SM.useCallback)((MM => {
          rM(MM), (0, pM.L)(MM) && OM(!0)
        }), [rM]);
        return {
          rowIconsOpen: iM,
          onRowIconsOpen: OM,
          select: jM
        }
      }(aM, nM), [JM, dM] = (0, SM.useState)([]), [yM, lM] = (0, SM.useState)(null), [EM, UM] = hr(), CM = (0, SM.useCallback)(((MM, rM, iM) => {
        dM(rM), UM(iM);
        const OM = Object.keys(MM);
        lM((MM => (null === MM || void 0 === MM ? void 0 : MM.size) === OM.length && OM.every((rM => MM.has(rM))) ? MM : new Set(OM)))
      }), [UM]), {
        gameState: eM
      } = (0, zM.m)(["gameState"]), tM = (0, Ji.g)(), gM = (0, di.q)(), [uM] = (0, SM.useState)((() => {
        var MM, rM, iM, OM;
        return "inGame" === eM ? (0, VM.s)(document, tM, {
          rightOfCamera: null !== (MM = null === (rM = gM.rightOfCamera) || void 0 === rM ? void 0 : rM.icon) && void 0 !== MM ? MM : null,
          leftEnd: null !== (iM = null === (OM = gM.leftEnd) || void 0 === OM ? void 0 : OM.icon) && void 0 !== iM ? iM : null
        }) : VM.b
      })), WM = (0, SM.useRef)(null), sM = (0, SM.useRef)(null), DM = function(MM) {
        const [rM, iM] = (0, SM.useState)((() => .4 * window.innerHeight));
        return (0, SM.useLayoutEffect)((() => {
          var rM;
          const OM = null === (rM = MM.current) || void 0 === rM ? void 0 : rM.closest(".SettingsMenuRight");
          if (!OM) return;
          const SM = () => {
            const MM = OM.clientHeight < ei ? .4 : .5;
            iM(Math.max(80, OM.clientHeight * MM - 24))
          };
          SM();
          const jM = new ResizeObserver(SM);
          return jM.observe(OM), () => {
            jM.disconnect()
          }
        }), [MM]), rM
      }(sM), kM = (0, Hi.q)(iM.joystickMode), ZM = iM.touchActionButtons, oM = (0, SM.useMemo)((() => (0, VM.r)(uM, ZM)), [uM, ZM]), fM = (0, SM.useMemo)((() => new Set((0, VM.n)(uM, ZM).map((MM => VM.e[MM])))), [uM, ZM]);
      (0, SM.useEffect)((() => {
        (0, bM.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [YM, xM] = (0, SM.useState)(!1), [vM, FM] = (0, SM.useState)(!1), BM = (0, SM.useRef)(null);
      ji(BM, !vM);
      const [XM, IM] = (0, SM.useState)(!1), qM = (0, SM.useCallback)((() => {
        IM(!1)
      }), []), TM = (0, SM.useMemo)((() => new Set(aM.hudLocked)), [aM.hudLocked]), cM = MM => {
        var rM, iM;
        const OM = (0, pM.l)(),
          SM = MM(OM);
        (0, pM.V)(null !== (rM = null === (iM = WM.current) || void 0 === iM ? void 0 : iM.keepLocks(OM, SM)) && void 0 !== rM ? rM : SM)
      }, Mr = (MM, rM) => {
        cM((iM => (0, pM.cb)(iM, jM, MM, rM)))
      }, rr = (MM, rM, iM) => {
        Mr(MM, {
          dx: rM,
          dy: iM
        }), (0, bM.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${MM}`
        })
      }, ir = (MM, rM) => {
        cM((iM => (0, pM.fb)(iM, jM, MM, rM)))
      }, Or = MM => {
        const rM = RM.f[MM];
        return (rM.move || rM.scale) && ("joystick" !== MM || kM) && !(0, KM.s)(MM, aM.hudElements[MM])
      }, Sr = MM => RM.f[MM].move && ("joystick" !== MM || kM) && !TM.has(MM), jr = new Set(RM.g.map((MM => MM.id)).filter((MM => {
        const rM = (0, pM.L)(MM) && !uM.rowIcons.includes(MM);
        return null === yM || yM.has(MM) || (0, pM.p)(aM.hudElements, MM) && !rM
      }))), ar = {
        present: jr,
        actionButtons: ZM,
        keyNames: oM,
        scaleCaps: EM,
        sizeBesidePreview: YM,
        elements: aM.hudElements,
        selected: PM,
        onSelect: hM,
        rowIconsOpen: LM,
        onRowIconsOpen: mM,
        onScalePreview: (MM, rM) => {
          var iM;
          null === (iM = WM.current) || void 0 === iM || iM.setScale(MM, rM)
        },
        onScale: (MM, rM) => {
          Mr(MM, {
            scale: rM
          }), (0, bM.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${MM}`
          })
        },
        onHidden: (MM, rM) => {
          Mr(MM, {
            hidden: rM
          }), (0, bM.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${rM?"hide":"show"}:${MM}`
          })
        },
        onReset: MM => {
          Mr(MM, pM.b)
        },
        locked: TM,
        lockable: Or,
        onLocked: ir,
        note: (rM, iM) => {
          const OM = iM && JM.length > 0 ? MM("hudLayout:overlapsNote", {
            names: (0, RM.q)(JM, ZM, MM, oM)
          }) : null;
          if (iM && NM(rM, kM)) return (0, GM.jsxs)(GM.Fragment, {
            children: [OM && (0, GM.jsx)("span", {
              children: OM
            }), (0, GM.jsx)("span", {
              children: MM("hudLayout:floatingJoystickNote")
            }), !YM && (0, GM.jsx)(AM, {})]
          });
          if (OM) return OM;
          const SM = iM && TM.has(rM) ? MM("hudLayout:lockedNote") : null,
            jM = iM && fM.has(rM) ? MM("hudLayout:contextSlotNote") : null;
          return SM || jM ? (0, GM.jsxs)(GM.Fragment, {
            children: [SM && (0, GM.jsx)("span", {
              children: SM
            }), jM && (0, GM.jsx)("span", {
              children: jM
            })]
          }) : iM && "cluster" === rM ? MM("hudLayout:clusterNote") : iM && "inventory" === rM ? MM("hudLayout:inventoryNote") : iM && "menu" === rM ? MM("hudLayout:menuNote") : iM && (0, KM.s)(rM, aM.hudElements[rM]) && Sr(rM) ? MM("hudLayout:rowIconNote") : iM && "arrows" === rM ? MM("hudLayout:arrowsNote") : iM && "sprint" === rM ? MM("hudLayout:sprintNote") : (0, RM.w)(rM) && (0, pM.p)(aM.hudElements, rM) ? MM("hudLayout:inventoryHiddenNote", {
            name: (0, RM.s)(rM, ZM, MM, oM)
          }) : null
        }
      };
      return (0, GM.jsxs)("div", {
        ref: sM,
        className: "HudLayoutSettings",
        children: [(0, GM.jsxs)("div", {
          ref: BM,
          className: "HudLayoutBody",
          children: [(0, GM.jsx)("div", {
            className: "HudLayoutOrientation",
            children: MM("landscape" === jM ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, GM.jsx)(Li, {
            preview: {
              layout: rM,
              orientation: jM,
              selected: PM,
              onSelect: hM,
              onMove: rr,
              canMove: Sr,
              actionButtons: ZM,
              joystickFixed: kM,
              presence: uM,
              keyNames: oM,
              maxHeight: DM,
              apiRef: WM,
              onMeasured: CM,
              onReady: FM,
              lockable: Or
            },
            quick: {
              layout: aM,
              actionButtons: ZM,
              keyNames: oM,
              scaleCaps: EM,
              overlaps: JM,
              onScale: ar.onScale,
              onHidden: ar.onHidden,
              onReset: ar.onReset,
              locked: TM,
              lockable: Or,
              onLocked: ir
            },
            onFullScreen: () => {
              IM(!0)
            },
            resting: XM,
            onSidePanel: xM
          }), XM && (0, GM.jsx)(Pi, {
            layout: rM,
            orientation: jM,
            selected: PM,
            onSelect: hM,
            onMove: rr,
            canMove: Sr,
            actionButtons: ZM,
            joystickFixed: kM,
            presence: uM,
            keyNames: oM,
            onScale: ar.onScale,
            onHidden: ar.onHidden,
            onReset: ar.onReset,
            locked: TM,
            lockable: Or,
            onLocked: ir,
            apiRef: WM,
            onClose: qM
          }), (0, GM.jsx)(Gi, {
            safe: aM.hudSafe,
            onCommit: MM => {
              cM((rM => (0, pM.hb)(rM, jM, MM)))
            },
            onPreview: MM => {
              var rM;
              null === (rM = WM.current) || void 0 === rM || rM.setSafe(MM)
            }
          }), (0, GM.jsx)(HM.c, {
            label: MM("hudLayout:snapCentre"),
            checked: rM.hudSnapCentre,
            onClick: MM => {
              (0, pM.T)(MM)
            },
            circleInfoText: MM("hudLayout:snapCentreInfo")
          }), (0, GM.jsx)(zi, {
            ...ar
          }), (0, GM.jsx)(HM.f, {
            label: MM("hudLayout:shape"),
            options: pM.z.map((rM => ({
              value: rM,
              label: MM(`hudLayout:shape_${rM}`)
            }))),
            value: rM.hudShape,
            onChange: MM => {
              cM((rM => ({
                ...rM,
                hudShape: MM
              }))), (0, bM.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: MM
              })
            }
          }), (0, GM.jsx)(HM.h, {
            name: MM("hudLayout:opacity"),
            min: pM.e,
            max: 1,
            step: .05,
            initValue: rM.hudKeyOpacity,
            format: MM => `${Math.round(100*MM)}%`,
            circleInfoText: MM("hudLayout:opacityInfo"),
            onChange: MM => {
              var rM;
              null === (rM = WM.current) || void 0 === rM || rM.setOpacity(MM)
            },
            onChangeComplete: MM => {
              (0, pM.P)(MM), (0, bM.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, GM.jsx)(QM.J, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const MM = wM.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await MM.getResult() && (0, pM.N)()
            }()
          },
          children: MM("hudLayout:resetAll")
        })]
      })
    }
    const ei = 350;
    const bi = [function() {
      const {
        t: MM
      } = (0, OM.A)(), [rM, iM] = (0, SM.useState)(!1), jM = (0, SM.useRef)(null);
      return (0, SM.useEffect)((() => {
        var MM;
        rM && (null === (MM = jM.current) || void 0 === MM || MM.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [rM]), (0, GM.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, GM.jsx)(tM.c, {
          ref: jM,
          icon: "arrows-up-down-left-right",
          title: MM("hudLayout:title"),
          sub: MM("hudLayout:entrySub"),
          expanded: rM,
          onClick: () => {
            iM(!rM)
          }
        }), rM && (0, GM.jsx)(Ci, {})]
      })
    }, function() {
      const {
        t: MM
      } = (0, OM.A)(), {
        joystickMode: rM,
        touchSpeedCurve: iM,
        autorun: SM,
        jumpLock: jM,
        touchEdgeGuard: aM
      } = (0, zM.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, GM.jsxs)(GM.Fragment, {
        children: [(0, GM.jsx)(HM.f, {
          label: MM("settingsMenu:joystick"),
          options: UM.ub.map((rM => ({
            value: rM,
            label: MM(CM[rM])
          }))),
          value: rM,
          onChange: MM => {
            zM.d.setClientEscMenuOptions({
              joystickMode: MM
            })
          },
          circleInfoText: MM("settingsMenu:joystickInfo")
        }), (0, GM.jsx)(HM.c, {
          label: MM("settingsMenu:preciseWalking"),
          checked: iM,
          onClick: MM => {
            zM.d.setClientEscMenuOptions({
              touchSpeedCurve: MM
            })
          },
          circleInfoText: MM("settingsMenu:preciseWalkingInfo")
        }), (0, GM.jsx)(HM.c, {
          label: MM("settingsMenu:autoRun"),
          checked: SM,
          onClick: MM => {
            zM.d.setClientEscMenuOptions({
              autorun: MM
            })
          },
          circleInfoText: MM("settingsMenu:autoRunInfo")
        }), (0, GM.jsx)(HM.c, {
          label: MM("settingsMenu:jumpLock"),
          checked: jM,
          onClick: MM => {
            zM.d.setClientEscMenuOptions({
              jumpLock: MM
            })
          },
          circleInfoText: MM("settingsMenu:jumpLockInfo")
        }), (0, GM.jsx)(HM.c, {
          label: MM("touchSettings:stopAtEdges"),
          checked: aM,
          onClick: MM => {
            zM.d.setClientEscMenuOptions({
              touchEdgeGuard: MM
            })
          },
          circleInfoText: MM("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, GM.jsx)(EM.c, {})
    }, function() {
      const {
        t: MM
      } = (0, OM.A)(), {
        clientEscMenuOptions: rM
      } = (0, zM.m)(["clientEscMenuOptions"]);
      return (0, eM.b)() ? (0, GM.jsx)(HM.c, {
        label: MM("settingsMenu:vibration"),
        checked: rM.vibration,
        onClick: MM => {
          zM.d.setClientEscMenuOptions({
            vibration: MM
          })
        },
        circleInfoText: MM("settingsMenu:vibrationInfo")
      }) : null
    }];

    function wi() {
      return (0, GM.jsx)(GM.Fragment, {
        children: bi.map(((MM, rM) => (0, GM.jsx)(MM, {}, rM)))
      })
    }
    var ti = iM(4727);

    function gi() {
      const {
        t: MM
      } = (0, OM.A)(), {
        isTouchScreen: rM,
        clientEscMenuOptions: iM,
        gameState: aM
      } = (0, zM.m)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), PM = (0, hM.f)("ezBridging"), nM = (0, hM.f)("ezTowering"), dM = "inGame" !== aM || !0 === PM, yM = (0, JM.f)(), EM = null !== yM && ("inGame" !== aM || !0 === nM), [, UM] = (0, SM.useReducer)((MM => MM + 1), 0), CM = (0, lM.e)(), [eM, bM] = (0, SM.useState)(ti.f);
      return (0, GM.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [CM && (0, GM.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, GM.jsx)("div", {
            children: MM("controller:settingsControlsNote")
          }), (0, GM.jsx)(QM.V, {
            onClick: () => {
              zM.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: MM("controller:settingsOpenController")
          })]
        }), (0, LM.isTouchscreen)() && !(0, LM.isMobile)() ? (0, GM.jsx)(GM.Fragment, {
          children: (0, GM.jsx)(HM.c, {
            label: MM("settingsMenu:useTouchControls"),
            checked: eM,
            onClick: MM => {
              (0, ti.d)(MM), bM(MM)
            }
          })
        }) : null, rM && (0, GM.jsx)(wi, {}), dM && (0, GM.jsx)(HM.c, {
          label: MM("settingsMenu:ezBridging"),
          checked: iM.ezBridging,
          onClick: MM => {
            zM.d.setClientEscMenuOptions({
              ezBridging: MM
            })
          },
          circleInfoText: MM("settingsMenu:ezBridgingInfo")
        }), EM && (0, GM.jsx)(HM.c, {
          label: MM("settingsMenu:ezTowering"),
          checked: iM.ezTowering,
          onClick: MM => {
            zM.d.setClientEscMenuOptions({
              ezTowering: MM
            })
          },
          circleInfoText: MM("jump" === yM ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, GM.jsx)(HM.c, {
          label: MM("settingsMenu:crouchToggle"),
          checked: iM.crouchIsToggle,
          onClick: MM => {
            zM.d.setClientEscMenuOptions({
              crouchIsToggle: MM
            })
          },
          circleInfoText: MM("settingsMenu:crouchToggleInfo")
        }), (0, GM.jsx)(HM.c, {
          label: MM("settingsMenu:hideUiToggle"),
          checked: iM.hideUiIsToggle,
          onClick: MM => {
            zM.d.setClientEscMenuOptions({
              hideUiIsToggle: MM
            })
          },
          circleInfoText: MM("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, mM.c)() && (0, GM.jsx)(HM.h, {
          name: MM("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: iM.touchscreenSensitivity,
          onChange: MM => {
            zM.d.setClientEscMenuOptions({
              touchscreenSensitivity: MM
            })
          }
        }), !(0, LM.isMobile)() && (0, GM.jsx)(HM.h, {
          name: MM("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: iM.mouseSensitivity,
          onChange: MM => {
            zM.d.setClientEscMenuOptions({
              mouseSensitivity: MM
            })
          }
        }), !(0, LM.isMobile)() && (0, GM.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, GM.jsx)("div", {
            className: "SliderText",
            children: MM("settingsMenu:keyBindings")
          }), jM.f.map((rM => (0, GM.jsx)(ui, {
            title: MM(rM.name.translationKey, rM.name.params),
            defaultOpen: jM.i.has(rM.id),
            children: rM.actions.map((MM => (0, GM.jsx)(Ri, {
              noaAction: MM,
              forceUpdate: UM,
              clashesWith: rM.clashesWith,
              showPadGlyph: CM
            }, MM)))
          }, rM.name.translationKey))), (0, GM.jsx)(QM.J, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, jM.C)(), UM()
            },
            children: MM("controls:resetBindings")
          })]
        })]
      })
    }

    function ui(MM) {
      let {
        title: rM,
        defaultOpen: iM,
        children: OM
      } = MM;
      const [jM, aM] = (0, SM.useState)(iM);
      return (0, GM.jsxs)("div", {
        className: nM()("ControlsSection", {
          Collapsed: !jM
        }),
        children: [(0, GM.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            aM(!jM)
          },
          children: [(0, GM.jsx)("div", {
            className: "ControlsSectionTitle",
            children: rM
          }), (0, GM.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), jM && (0, GM.jsx)("div", {
          className: "ControlsSectionRows",
          children: OM
        })]
      })
    }

    function Ri(MM) {
      let {
        noaAction: rM,
        forceUpdate: iM,
        clashesWith: PM,
        showPadGlyph: zM
      } = MM;
      const {
        t: LM
      } = (0, OM.A)(), mM = (0, yM.c)(rM), [HM, hM] = (0, SM.useState)(!1), [JM, lM] = (0, SM.useState)("controls:clickToEnterNewBinding"), [EM, UM] = (0, SM.useState)(null), [CM, eM] = (0, SM.useState)(null), bM = (0, SM.useRef)(null);
      (0, SM.useEffect)((() => {
        HM && bM.current && bM.current.focus()
      }), [HM]);
      const wM = jM.v[rM].filter((MM => aM.k[MM]));
      let tM = null;
      const gM = [],
        uM = PM.flatMap((MM => {
          var rM, iM;
          return null !== (rM = null === (iM = jM.f.find((rM => rM.id === MM))) || void 0 === iM ? void 0 : iM.actions) && void 0 !== rM ? rM : []
        }));
      for (const OM of uM) {
        if (OM === rM) continue;
        const MM = jM.v[OM];
        for (const rM of MM) wM.includes(rM) && gM.push(LM(jM.y[OM].translationKey, jM.y[OM].params))
      }
      gM.length > 0 && (tM = LM("controls:sharedBindingsWarning") + " ", tM += gM.join(", "));
      const RM = () => {
          hM(!1), UM(null), lM("controls:clickToEnterNewBinding"), eM(null)
        },
        pM = () => "BindingInput_" + rM;
      return (0, GM.jsxs)("div", {
        className: nM()("ControlRow", {
          WarningBorder: null !== tM
        }),
        children: [(0, GM.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, GM.jsxs)("div", {
            className: "ControlName",
            children: [LM(jM.y[rM].translationKey, jM.y[rM].params), zM && mM && (0, GM.jsx)(dM.b, {
              glyph: mM,
              className: "ControlPadGlyph"
            })]
          }), (0, GM.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, GM.jsxs)("div", {
              className: "ControlBindingsList",
              children: [wM.map((MM => (0, GM.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, GM.jsx)("div", {
                  children: (0, jM.m)(MM)
                }), (0, GM.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const OM = (0, jM.z)(rM, MM);
                    OM.isError() ? eM(OM.asError().message) : eM(null), iM()
                  },
                  children: "\xd7"
                })]
              }, MM))), !HM && (0, GM.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  hM(!0), eM(null)
                },
                children: (0, GM.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), HM && (0, GM.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, GM.jsxs)("div", {
                className: "InputContainer",
                children: [(0, GM.jsx)("div", {
                  className: "InputOverlay",
                  children: EM ? (0, jM.m)(EM) : (0, GM.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: LM(JM)
                  })
                }), (0, GM.jsx)("input", {
                  ref: bM,
                  id: pM(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: MM => {
                    if ("Escape" === MM.code) return RM(), MM.preventDefault(), void MM.stopPropagation();
                    const rM = MM.code;
                    aM.d.includes(rM) ? (eM(null), UM(rM)) : (eM("controls:keyIsReserved"), UM(null)), MM.preventDefault(), MM.stopPropagation()
                  },
                  onMouseDown: MM => {
                    const rM = "Mouse" + (MM.button + 1);
                    document.activeElement && document.activeElement.id === pM() ? aM.d.includes(rM) ? (eM(null), UM(rM)) : (eM("controls:keyIsReserved"), UM(null)) : lM("controls:enterNewBinding"), MM.stopPropagation()
                  },
                  onBlur: () => {
                    lM("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, GM.jsx)(QM.e, {
                onPointerDown: MM => {
                  MM.preventDefault()
                },
                onClick: () => {
                  (0, jM.e)(rM, EM), iM(), RM()
                },
                className: "ControlBindingAddButton",
                disabled: null === EM,
                children: LM("general:add")
              }), (0, GM.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  RM()
                },
                children: "\xd7"
              })]
            }), CM && (0, GM.jsx)("div", {
              className: "ControlBindingError",
              children: LM(CM)
            })]
          })]
        }), tM && (0, GM.jsx)("div", {
          className: "ControlRowWarning",
          children: tM
        })]
      })
    }
  },
  9472: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM
    });
    var OM = iM(44),
      SM = iM(1398),
      jM = iM(1303);
    const aM = (0, OM.forwardRef)((function(MM, rM) {
      let {
        icon: iM,
        title: OM,
        sub: aM,
        expanded: PM,
        onClick: nM
      } = MM;
      return (0, jM.jsxs)("button", {
        ref: rM,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": PM,
        onClick: nM,
        children: [(0, jM.jsx)(SM.b, {
          name: iM,
          className: "FeaturedSettingsEntryIcon"
        }), (0, jM.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, jM.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: OM
          }), (0, jM.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: aM
          })]
        }), (0, jM.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  9287: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => yM,
      g: () => dM,
      i: () => zM,
      m: () => lM,
      o: () => EM,
      p: () => mM
    });
    var OM = iM(1750),
      SM = iM(1835);
    const jM = MM => MM >= 56320 && MM <= 57343,
      aM = MM => MM >= 55296 && MM <= 56319,
      PM = (MM, rM) => rM >= 2 && jM(MM.charCodeAt(rM - 1)) && aM(MM.charCodeAt(rM - 2)) ? rM - 2 : Math.max(0, rM - 1),
      nM = (MM, rM) => {
        let iM;
        var OM, SM;
        return iM = MM.start !== MM.end ? rM < 0 ? MM.start : MM.end : rM < 0 ? PM(MM.value, MM.start) : (OM = MM.value, (SM = MM.start) + 1 < OM.length && aM(OM.charCodeAt(SM)) && jM(OM.charCodeAt(SM + 1)) ? SM + 2 : Math.min(OM.length, SM + 1)), {
          value: MM.value,
          start: iM,
          end: iM
        }
      },
      QM = ["text", "search", "url", "email", "tel", "password", "number"],
      zM = MM => !(!(0, SM.e)(MM) || MM.isContentEditable || MM.hasAttribute("data-pad-no-osk")) && (MM instanceof HTMLTextAreaElement || MM instanceof HTMLInputElement && QM.includes(MM.type)),
      LM = MM => null !== MM.selectionStart,
      mM = MM => {
        var rM, iM;
        const {
          value: OM
        } = MM;
        return {
          value: OM,
          start: null !== (rM = MM.selectionStart) && void 0 !== rM ? rM : OM.length,
          end: null !== (iM = MM.selectionEnd) && void 0 !== iM ? iM : OM.length
        }
      },
      HM = (MM, rM, iM) => {
        if (MM.readOnly) return;
        const SM = MM instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(SM, "value").set.call(MM, rM.value), LM(MM) && MM.setSelectionRange(rM.start, rM.end), (0, OM.f)(MM, new InputEvent("input", {
          bubbles: !0,
          inputType: iM
        }))
      };
    let hM = !1;
    const JM = (MM, rM) => !!document.execCommand(MM, !1, rM) || (hM || (hM = !0, console.warn(`execCommand("${MM}") failed; the on-screen keyboard is setting the value directly`)), !1),
      dM = (MM, rM) => {
        JM("insertText", rM) || HM(MM, function(MM, rM) {
          let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const OM = MM.value.slice(0, MM.start),
            SM = MM.value.slice(MM.end);
          let jM = iM < 0 ? rM.length : Math.max(0, iM - OM.length - SM.length);
          jM > 0 && jM < rM.length && aM(rM.charCodeAt(jM - 1)) && jM--;
          const PM = rM.slice(0, jM),
            nM = OM.length + PM.length;
          return {
            value: OM + PM + SM,
            start: nM,
            end: nM
          }
        }(mM(MM), rM, MM.maxLength), "insertText")
      },
      yM = MM => {
        JM("delete") || HM(MM, (MM => {
          const rM = MM.start === MM.end ? PM(MM.value, MM.start) : MM.start;
          return {
            value: MM.value.slice(0, rM) + MM.value.slice(MM.end),
            start: rM,
            end: rM
          }
        })(mM(MM)), "deleteContentBackward")
      },
      lM = (MM, rM) => {
        if (!LM(MM)) return;
        const iM = nM(mM(MM), rM);
        MM.setSelectionRange(iM.start, iM.end)
      },
      EM = MM => {
        LM(MM) && 0 === MM.selectionStart && 0 === MM.selectionEnd && MM.setSelectionRange(MM.value.length, MM.value.length)
      }
  },
  9438: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM
    });
    var OM = iM(19),
      SM = iM(2252),
      jM = iM(1429),
      aM = iM(1464);
    const PM = async () => {
      if ((0, aM.l)()) {
        if (!0 !== await jM.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== OM.d.get("gameState")) return
      }(0, SM.e)()
    }
  },
  9442: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => nM,
      g: () => jM,
      k: () => aM,
      n: () => SM,
      p: () => PM
    });
    var OM = iM(2074);
    const SM = "controllerPadShopOpen",
      jM = MM => OM.i.includes(MM),
      aM = MM => Object.values(MM).some((MM => !1 !== MM.canBuy && !MM.isRewardedAd)),
      PM = (MM, rM, iM) => {
        var OM, SM, aM, PM;
        const nM = MM.filter((MM => !jM(MM))),
          QM = null !== rM && MM.includes(rM) ? rM : null;
        return null !== QM && !jM(QM) && iM(QM) ? QM : null !== (OM = null !== (SM = null !== (aM = null !== (PM = nM.find(iM)) && void 0 !== PM ? PM : nM[0]) && void 0 !== aM ? aM : QM) && void 0 !== SM ? SM : MM[0]) && void 0 !== OM ? OM : null
      },
      nM = MM => MM.userInput || MM.isRewardedAd || "boolean" === typeof MM.isSelected ? null : JSON.stringify([MM.image, MM.cost, MM.currency, MM.amount, MM.customTitle, MM.buyButtonText, MM.description, MM.canBuy])
  },
  9461: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => QM,
      e: () => zM
    });
    var OM = iM(44),
      SM = iM(1516),
      jM = iM(2120),
      aM = iM(1474),
      PM = iM(1498),
      nM = iM(1303);
    const QM = () => {
        const MM = (0, aM.s)();
        if ((0, OM.useEffect)((() => {
            (0, aM.k)()
          }), []), !MM) return null;
        const {
          ControllerCategory: rM
        } = MM;
        return (0, nM.jsx)(PM.d, {
          children: (0, nM.jsx)(rM, {})
        })
      },
      zM = () => {
        var MM;
        const rM = (0, aM.s)(),
          [, iM] = (0, OM.useReducer)((MM => MM + 1), 0);
        return (0, SM.d)(jM.d, iM), null !== (MM = null === rM || void 0 === rM ? void 0 : rM.hasActivePad()) && void 0 !== MM && MM
      }
  },
  9271: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => tM,
      B: () => CM,
      C: () => eM,
      E: () => dM,
      F: () => nM,
      J: () => zM,
      d: () => yM,
      g: () => wM,
      j: () => GM,
      m: () => UM,
      q: () => hM,
      t: () => JM,
      w: () => mM,
      x: () => HM,
      y: () => bM,
      z: () => QM
    });
    var OM = iM(22),
      SM = iM(1750),
      jM = iM(9279),
      aM = iM(9287),
      PM = iM(2508);
    const nM = MM => (0, aM.i)(MM),
      QM = MM => {
        const rM = MM.getBoundingClientRect();
        return {
          x: rM.left + rM.width / 2,
          y: rM.top + rM.height / 2
        }
      },
      zM = (MM, rM, iM) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: MM.x,
        clientY: MM.y,
        screenX: MM.x,
        screenY: MM.y,
        button: rM,
        buttons: iM,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      LM = (MM, rM) => {
        (0, SM.f)(MM, rM)
      },
      mM = function(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const OM = 0 === iM ? 1 : 2;
        LM(MM, new PointerEvent("pointerdown", zM(rM, iM, OM))), LM(MM, new MouseEvent("mousedown", zM(rM, iM, OM)))
      },
      HM = function(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        LM(MM, new PointerEvent("pointerup", zM(rM, iM, 0))), LM(MM, new MouseEvent("mouseup", zM(rM, iM, 0)))
      },
      hM = function(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        mM(MM, rM, iM), HM(MM, rM, iM), LM(MM, 0 === iM ? new MouseEvent("click", zM(rM, 0, 0)) : new MouseEvent("contextmenu", zM(rM, 2, 0)))
      },
      JM = function(MM, rM, iM) {
        let {
          leaveBelow: OM = null,
          enterBelow: SM = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (MM !== rM) {
          if (null !== MM && void 0 !== MM && MM.isConnected) {
            const SM = {
              ...zM(iM, 0, 0),
              relatedTarget: rM
            };
            LM(MM, new PointerEvent("pointerout", SM)), LM(MM, new MouseEvent("mouseout", SM));
            const jM = MM => !!rM && MM.contains(rM) || !!OM && MM.contains(OM);
            for (let rM = MM; rM && !jM(rM); rM = rM.parentElement) LM(rM, new PointerEvent("pointerleave", {
              ...SM,
              bubbles: !1
            })), LM(rM, new MouseEvent("mouseleave", {
              ...SM,
              bubbles: !1
            }))
          }
          if (rM) {
            const OM = {
              ...zM(iM, 0, 0),
              relatedTarget: MM
            };
            LM(rM, new PointerEvent("pointerover", OM)), LM(rM, new MouseEvent("mouseover", OM));
            const jM = [],
              aM = rM => !(null === MM || void 0 === MM || !MM.isConnected) && rM.contains(MM) || !!SM && rM.contains(SM);
            for (let MM = rM; MM && !aM(MM); MM = MM.parentElement) jM.push(MM);
            for (const MM of jM.reverse()) LM(MM, new PointerEvent("pointerenter", {
              ...OM,
              bubbles: !1
            })), LM(MM, new MouseEvent("mouseenter", {
              ...OM,
              bubbles: !1
            }));
            LM(rM, new PointerEvent("pointermove", zM(iM, 0, 0))), LM(rM, new MouseEvent("mousemove", zM(iM, 0, 0)))
          }
        } else rM && (LM(rM, new PointerEvent("pointermove", zM(iM, 0, 0))), LM(rM, new MouseEvent("mousemove", zM(iM, 0, 0))))
      },
      dM = MM => {
        OM.i.Tz(jM.g, MM)
      },
      yM = MM => {
        if (nM(MM)) return void dM(MM);
        const rM = MM.hasAttribute("data-pad-focusable") ? MM.querySelector("a[href]") : null,
          iM = null !== rM && void 0 !== rM ? rM : MM;
        hM(iM, QM(iM))
      },
      lM = ".Dropdown-root.is-open",
      EM = MM => {
        const rM = MM.querySelector(".Dropdown-control");
        return yM(rM), rM
      },
      UM = MM => {
        var rM;
        const iM = null !== (rM = MM.closest(lM)) && void 0 !== rM ? rM : MM.querySelector(lM);
        return iM ? EM(iM) : null
      },
      GM = MM => {
        for (const rM of document.querySelectorAll(lM)) rM.contains(MM) || EM(rM)
      },
      CM = MM => null !== MM.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      eM = MM => {
        const rM = MM ? document.elementFromPoint(MM.x, MM.y) : null;
        return !(null === rM || void 0 === rM || !rM.closest("[data-pad-repeat]"))
      },
      bM = MM => {
        var rM;
        return null !== (rM = [...MM.querySelectorAll("[data-pad-back]")].find(PM.n)) && void 0 !== rM ? rM : null
      },
      wM = MM => {
        const rM = bM(MM);
        return !!rM && (yM(rM), !0)
      },
      tM = MM => {
        var rM, iM, OM, SM;
        return null !== (rM = null !== (iM = null !== (OM = MM.getAttribute("data-pad-key")) && void 0 !== OM ? OM : MM.getAttribute("href")) && void 0 !== iM ? iM : null === (SM = MM.querySelector("a[href]")) || void 0 === SM ? void 0 : SM.getAttribute("href")) && void 0 !== rM ? rM : null
      }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);