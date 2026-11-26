export const id = 171;
export const ids = [171];
export const modules = {
  9475: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => pV
    });
    var JV = xV(27),
      YV = xV(1220),
      UV = xV(5500),
      yV = xV(1321);

    function pV(VV) {
      let {
        note: eV
      } = VV;
      const {
        t: xV
      } = (0, YV.A)(), {
        clientEscMenuOptions: pV
      } = (0, JV.l)(["clientEscMenuOptions"]);
      return (0, yV.jsx)(UV.e, {
        label: xV("touchSettings:actionButtons"),
        checked: pV.touchActionButtons,
        onClick: VV => {
          JV.b.setClientEscMenuOptions({
            touchActionButtons: VV
          })
        },
        circleInfoText: xV("touchSettings:actionButtonsInfo"),
        note: eV
      })
    }
  },
  9469: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => Mx,
      e: () => Xx
    });
    var JV = xV(1220),
      YV = xV(62),
      UV = xV(2116),
      yV = xV(2130),
      pV = xV(1146),
      QV = xV.n(pV),
      nV = xV(1551),
      wV = xV(27),
      ZV = xV(99),
      vV = xV(115),
      rV = xV(5500),
      kV = xV(2693),
      bV = xV(313),
      EV = xV(2138),
      BV = xV(2141),
      jV = xV(9471),
      qV = xV(9475),
      tV = xV(364),
      FV = xV(1321);
    const TV = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var PV = xV(9477);
    var AV = xV(1586),
      NV = xV(1439),
      XV = xV(9482),
      MV = xV(1493),
      zV = xV(1414),
      GV = xV(9491),
      WV = xV(2729);

    function RV(VV) {
      let {
        className: eV,
        keepPlace: xV
      } = VV;
      return xV ? (0, FV.jsx)("div", {
        className: QV()(eV, "Placeholder")
      }) : null
    }

    function gV(VV) {
      let {
        id: eV,
        elements: xV,
        actionButtons: YV,
        keyNames: UV,
        className: yV,
        keepPlace: pV,
        onHidden: QV
      } = VV;
      const {
        t: wV
      } = (0, JV.A)();
      if (!GV.i[eV].hide) return (0, FV.jsx)(RV, {
        className: yV,
        keepPlace: pV
      });
      const ZV = (0, WV.v)(xV, eV);
      return (0, FV.jsx)(nV.M, {
        className: yV,
        ariaLabel: wV(ZV ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: (0, GV.u)(eV, YV, wV, UV)
        }),
        pressed: !ZV,
        onClick: () => {
          QV(eV, !ZV)
        },
        children: (0, FV.jsx)(zV.b, {
          name: ZV ? "eye-slash" : "eye"
        })
      })
    }

    function DV(VV) {
      let {
        id: eV,
        elements: xV,
        actionButtons: YV,
        keyNames: UV,
        className: yV,
        keepPlace: pV,
        onlyWhenMoved: QV,
        locked: wV,
        onReset: ZV
      } = VV;
      const {
        t: vV
      } = (0, JV.A)(), rV = GV.i[eV], kV = (0, WV.P)(xV[eV]);
      return !rV.move && !rV.scale || QV && kV ? (0, FV.jsx)(RV, {
        className: yV,
        keepPlace: pV
      }) : (0, FV.jsx)(nV.M, {
        className: yV,
        disabled: kV || wV,
        ariaLabel: vV("hudLayout:resetElement", {
          name: (0, GV.u)(eV, YV, vV, UV)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: eV
        },
        onClick: VV => {
          QV && oV(VV.currentTarget), ZV(eV)
        },
        children: (0, FV.jsx)(zV.b, {
          name: "rotate-left"
        })
      })
    }

    function iV(VV) {
      let {
        id: eV,
        actionButtons: xV,
        keyNames: YV,
        className: UV,
        keepPlace: yV,
        locked: pV,
        lockable: QV,
        onLocked: wV
      } = VV;
      const {
        t: ZV
      } = (0, JV.A)();
      return QV || pV ? (0, FV.jsx)(nV.M, {
        className: UV,
        ariaLabel: ZV(pV ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: (0, GV.u)(eV, xV, ZV, YV)
        }),
        pressed: pV,
        active: pV,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${pV?"unlock":"lock"}:${eV}`
        },
        onClick: () => {
          wV(eV, !pV)
        },
        children: (0, FV.jsx)(zV.b, {
          name: pV ? "lock" : "lock-open"
        })
      }) : (0, FV.jsx)(RV, {
        className: UV,
        keepPlace: yV
      })
    }

    function CV(VV) {
      let {
        className: eV,
        open: xV,
        name: YV,
        onToggle: UV
      } = VV;
      const {
        t: yV
      } = (0, JV.A)();
      return (0, FV.jsx)(nV.M, {
        className: eV,
        ariaLabel: yV(xV ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: YV
        }),
        pressed: xV,
        analyticsClick: {
          id: "hud_layout.children",
          value: xV ? "close" : "open"
        },
        onClick: () => {
          UV(!xV)
        },
        children: (0, FV.jsx)(zV.b, {
          name: xV ? "angle-up" : "angle-down"
        })
      })
    }

    function aV(VV, eV) {
      var xV;
      VV.contains(document.activeElement) && eV.focus({
        preventScroll: !0
      }), null === (xV = (0, MV.e)()) || void 0 === xV || xV.handOverPadFocus(VV, eV)
    }

    function oV(VV) {
      const eV = VV.closest("[data-hud-row]"),
        xV = null === eV || void 0 === eV ? void 0 : eV.querySelector(".HudElementRowName");
      return !(!eV || !xV) && (aV(eV, xV), !0)
    }
    const cV = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function hV(VV, eV) {
      return "joystick" === VV && !eV
    }

    function lV() {
      const {
        t: VV
      } = (0, JV.A)();
      return (0, FV.jsx)(nV.M, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: VV => {
          const eV = VV.currentTarget;
          if (!oV(eV)) {
            const VV = function(VV) {
              var eV, xV;
              const JV = [VV.previousElementSibling, VV.nextElementSibling].find((VV => VV instanceof HTMLElement && VV.matches(cV)));
              return null !== (eV = null !== JV && void 0 !== JV ? JV : null === (xV = VV.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === xV ? void 0 : xV.querySelector(`:is(${cV}):not(.HudFixJoystickButton)`)) && void 0 !== eV ? eV : null
            }(eV);
            VV && aV(eV, VV)
          }
          wV.b.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: VV("hudLayout:fixJoystick")
      })
    }
    var LV = xV(78),
      fV = xV(1309),
      mV = xV(3528),
      KV = xV(3080),
      HV = xV(9500),
      uV = xV(9503),
      sV = xV(2736),
      SV = xV(2752),
      IV = xV(3584),
      dV = xV(9506);
    const OV = VV => ({
      [GV.f]: VV
    });

    function Ve(VV) {
      let {
        id: eV,
        slot: xV,
        icon: JV,
        label: UV,
        hidden: yV,
        className: pV,
        face: nV
      } = VV;
      const wV = (0, YV.useRef)(null);
      return (0, YV.useLayoutEffect)((() => {
        nV && wV.current && (0, dV.m)(wV.current, nV)
      }), [nV]), (0, FV.jsxs)("div", {
        className: QV()("TouchKeyHit", `TouchSlot${xV}`, pV, {
          HudPreviewGhost: yV.has(eV)
        }),
        ...OV(eV),
        children: [nV && (0, FV.jsx)("div", {
          ref: wV,
          className: QV()("TouchKey", {
            Labelled: nV.classList.contains("Labelled")
          })
        }), !nV && (0, FV.jsxs)("div", {
          className: QV()("TouchKey", {
            Labelled: void 0 !== UV
          }),
          children: [JV && (0, FV.jsx)(zV.b, {
            name: JV
          }), void 0 !== UV && (0, FV.jsx)("span", {
            className: "TouchKeyLabel",
            children: UV
          })]
        })]
      })
    }

    function ee(VV) {
      let {
        item: eV,
        selected: xV
      } = VV;
      const JV = (0, YV.useRef)(null);
      return (0, YV.useLayoutEffect)((() => {
        JV.current && (0, dV.m)(JV.current, eV)
      }), [eV]), (0, FV.jsx)("div", {
        ref: JV,
        className: QV()("InvenItem", {
          Selected: xV
        })
      })
    }
    const xe = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      Je = VV => void 0 === VV ? {} : {
        style: {
          "--parked": VV
        }
      };

    function Ye(VV) {
      let {
        id: eV,
        hidden: xV,
        parked: JV,
        unslotted: YV = !1
      } = VV;
      return (0, FV.jsx)("div", {
        className: QV()("TopRightIcon", SV.i[eV], {
          HudPreviewGhost: xV.has(eV),
          [sV.d]: void 0 !== JV,
          [sV.e]: YV
        }),
        ...Je(JV),
        children: (0, FV.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...OV(eV),
          children: (0, FV.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, FV.jsx)(zV.b, {
              name: xe[eV]
            })
          })
        })
      })
    }

    function Ue(VV) {
      let {
        portraitPhone: eV,
        icons: xV,
        pinnedIcons: JV,
        hidden: UV,
        moved: yV,
        trayState: pV
      } = VV;
      const nV = eV ? (0, sV.E)(xV) : [],
        wV = xV.filter((VV => "settings" === VV)),
        ZV = xV.filter((VV => "settings" !== VV && !nV.includes(VV))).reverse(),
        vV = nV.length > 0 && "gone" === pV,
        rV = [...wV, ...vV ? ["tray"] : [], ...ZV].filter((VV => "tray" === VV || UV.has(VV) && !yV.has(VV))),
        kV = VV => {
          const eV = rV.indexOf(VV);
          return eV < 0 ? void 0 : eV
        },
        bV = (VV, eV) => (0, FV.jsx)(Ye, {
          id: VV,
          hidden: UV,
          parked: eV ? kV(VV) : void 0,
          unslotted: eV && UV.has(VV) && yV.has(VV)
        }, VV);
      return (0, FV.jsxs)("div", {
        className: QV()("TopRightIcons TouchInGame", {
          Column: eV
        }),
        children: [wV.map((VV => bV(VV, !0))), nV.length > 0 && (0, FV.jsxs)("div", {
          className: QV()("TopRightIcon TopRightTrayToggle Open", {
            [sV.d]: vV
          }),
          ...Je(kV("tray")),
          children: [(0, FV.jsx)("div", {
            className: QV()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== pV
            }),
            children: (0, FV.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, FV.jsx)(zV.b, {
                name: "ellipsis"
              })
            })
          }), (0, FV.jsx)("div", {
            className: "TopRightTray",
            children: nV.map((VV => bV(VV, !1)))
          })]
        }), ZV.map((VV => (0, FV.jsxs)(YV.Fragment, {
          children: ["perspective" === VV && null !== JV.rightOfCamera && (0, FV.jsx)(ye, {
            icon: JV.rightOfCamera
          }), bV(VV, !0)]
        }, VV))), null !== JV.leftEnd && (0, FV.jsx)(ye, {
          icon: JV.leftEnd
        })]
      })
    }

    function ye(VV) {
      let {
        icon: eV
      } = VV;
      return (0, FV.jsx)("div", {
        className: "TopRightIcon",
        children: (0, FV.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, FV.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, FV.jsx)(zV.b, {
              name: eV
            })
          })
        })
      })
    }

    function pe(VV) {
      let {
        next: eV,
        hidden: xV
      } = VV;
      return (0, FV.jsx)("div", {
        className: QV()("HotBarArrow", eV ? "Next" : "Previous", {
          HudPreviewGhost: xV
        }),
        ...OV("arrows"),
        children: (0, FV.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, FV.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, FV.jsx)(zV.b, {
              name: eV ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function Qe() {
      return (0, FV.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, FV.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, FV.jsx)("div", {
            className: "SocialBar",
            children: (0, FV.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, FV.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, FV.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, FV.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, FV.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, FV.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, FV.jsx)(zV.b, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, FV.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, FV.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, FV.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, FV.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, FV.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, FV.jsx)(zV.b, {
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
    const ne = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      we = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      Ze = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ve = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function re(VV) {
      let {
        presence: eV,
        portraitPhone: xV,
        hidden: YV,
        actionButtons: UV,
        joystickFixed: yV,
        keysAbove: pV,
        auraBar: nV,
        trayState: wV,
        moved: vV
      } = VV;
      const {
        t: rV
      } = (0, JV.A)(), {
        faces: kV,
        items: bV
      } = eV, EV = VV => ({
        HudPreviewGhost: (0, GV.A)(VV).some((VV => YV.has(VV)))
      });
      return (0, FV.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, FV.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, FV.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, FV.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, FV.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, FV.jsx)("div", {
              className: "InGameHeaderGameName",
              children: rV("hudLayout:previewGameName")
            })]
          })
        }), (0, FV.jsx)("div", {
          className: "TopLeftElements",
          children: (0, FV.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, FV.jsxs)("div", {
              className: "Chat",
              children: [(0, FV.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [rV("hudLayout:previewChatLine"), rV("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), rV("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((VV => (0, FV.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, FV.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, FV.jsx)("div", {
                      className: "IndividualText",
                      children: VV
                    })
                  })
                }, VV)))
              }), (0, FV.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: QV()("ChatIconWrapper SmallTextLight", EV("chat")),
                ...OV("chat"),
                children: (0, FV.jsx)(zV.b, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, FV.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, FV.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, FV.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, FV.jsx)("div", {
                className: "TopRightIconsContainer",
                ...OV("menu"),
                children: (0, FV.jsx)(Ue, {
                  portraitPhone: xV,
                  icons: eV.rowIcons,
                  pinnedIcons: eV.pinnedIcons,
                  hidden: YV,
                  trayState: wV,
                  moved: vV
                })
              })
            }), ZV.featureFlags.useSocialFeatures && (0, FV.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, FV.jsx)(Qe, {})
            })]
          })
        }), (0, FV.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, FV.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, FV.jsxs)("div", {
            className: "TouchInteractKey",
            ...OV("interact"),
            children: [(0, FV.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, FV.jsx)(zV.b, {
                name: "hand-back-point-up"
              })
            }), (0, FV.jsx)("div", {
              children: rV("hudLayout:previewInteract")
            })]
          })
        }), (0, FV.jsx)("div", {
          className: "BottomCentre",
          children: (0, FV.jsxs)("div", {
            className: "BottomElements",
            children: [(0, FV.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, FV.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, FV.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...OV("hotbar"),
                children: (0, FV.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, FV.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, FV.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, FV.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, FV.jsx)(zV.b, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), nV && (0, FV.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, FV.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, FV.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, IV.e)("glint"),
                    alt: ""
                  }), (0, FV.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, FV.jsx)("div", {
                  className: "AuraBar",
                  children: (0, FV.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, FV.jsx)("div", {
                className: "HotBarRow",
                children: (0, FV.jsx)("div", {
                  className: QV()("HotBarContainer Touch", {
                    KeysAbove: pV
                  }),
                  children: (0, FV.jsxs)("div", {
                    className: "HotBar",
                    ...OV("hotbar"),
                    children: [(0, FV.jsxs)("div", {
                      className: QV()("TouchInventoryKeys", {
                        NoAuraBar: !nV
                      }),
                      children: [(0, FV.jsx)("div", {
                        className: QV()("TouchInventoryKey ShopKey", EV("shop"), {
                          Hidden: !eV.shop
                        }),
                        ...OV("shop"),
                        children: (0, FV.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, FV.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, FV.jsx)(zV.b, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, FV.jsx)("div", {
                        className: QV()("TouchInventoryKey BagKey", EV("bag"), {
                          Hidden: !eV.bag
                        }),
                        ...OV("bag"),
                        children: (0, FV.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, FV.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, FV.jsx)(zV.b, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, FV.jsx)(pe, {
                      next: !1,
                      hidden: YV.has("arrows")
                    }), (0, FV.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== bV && bV.map(((VV, eV) => (0, FV.jsx)(ee, {
                        item: VV,
                        selected: VV.classList.contains("Selected")
                      }, eV))), null === bV && Ze.map((VV => {
                        const eV = ve[VV];
                        return (0, FV.jsx)("div", {
                          className: QV()("InvenItem", {
                            Selected: 0 === VV
                          }),
                          children: eV && (0, FV.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, FV.jsx)(zV.b, {
                              name: eV
                            })
                          })
                        }, VV)
                      }))]
                    }), (0, FV.jsx)(pe, {
                      next: !0,
                      hidden: YV.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, FV.jsx)("div", {
              className: "BottomRightElements",
              children: (0, FV.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== kV && dV.i.map((VV => {
                  const eV = kV[VV];
                  return eV && (0, FV.jsx)(Ve, {
                    id: dV.g[VV],
                    slot: VV,
                    face: eV,
                    className: ne[VV],
                    hidden: YV
                  }, VV)
                })), (0, dV.n)(eV, UV).map((VV => (0, FV.jsx)(Ve, {
                  id: dV.g[VV],
                  slot: VV,
                  icon: we[VV].icon,
                  label: rV(we[VV].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: YV
                }, VV))), null === kV && (0, FV.jsxs)(FV.Fragment, {
                  children: [(0, FV.jsx)(Ve, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: YV
                  }), (0, FV.jsx)(Ve, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: YV
                  }), UV && (0, FV.jsxs)(FV.Fragment, {
                    children: [(0, FV.jsx)(Ve, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: YV
                    }), (0, FV.jsx)(Ve, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: YV
                    })]
                  }), (0, dV.l)(UV).map((VV => (0, FV.jsx)(Ve, {
                    id: dV.g[VV],
                    slot: VV,
                    icon: we[VV].icon,
                    label: rV(we[VV].labelKey),
                    hidden: YV
                  }, VV))), (0, FV.jsx)(Ve, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: YV
                  })]
                })]
              })
            })]
          })
        }), (0, FV.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, FV.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, FV.jsxs)("div", {
              className: QV()("Joystick Resting HudPreviewJoystick", {
                Floating: !yV
              }),
              ...OV("joystick"),
              children: [(0, FV.jsx)("div", {
                className: "JoystickBase"
              }), (0, FV.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), eV.sprint && (0, FV.jsx)("div", {
            className: QV()("TouchSprintHit", EV("sprint"), {
              AtHome: !yV
            }),
            ...OV("sprint"),
            children: (0, FV.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, FV.jsx)(zV.b, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function ke() {
      const [VV, eV] = (0, YV.useState)({}), xV = (0, YV.useCallback)((VV => {
        eV((eV => [...new Set([...Object.keys(eV), ...Object.keys(VV)])].every((xV => eV[xV] === VV[xV])) ? eV : VV))
      }), []);
      return [VV, xV]
    }
    const be = .05;

    function Ee(VV) {
      var eV;
      let {
        selected: xV,
        layout: YV,
        actionButtons: UV,
        keyNames: yV,
        overlaps: pV,
        scaleCaps: wV,
        joystickFixed: ZV,
        onScale: vV,
        onHidden: rV,
        onReset: kV,
        locked: bV,
        lockable: EV,
        onLocked: BV,
        extra: jV
      } = VV;
      const {
        t: qV
      } = (0, JV.A)(), tV = xV ? GV.i[xV] : null, TV = null !== xV && bV.has(xV), PV = (xV && YV.hudElements[xV] || WV.q)[2], AV = null !== (eV = xV && wV[xV]) && void 0 !== eV ? eV : WV.k, NV = VV => {
        xV && vV(xV, Math.min(AV, Math.round(100 * (PV + .1 * VV)) / 100))
      };
      return (0, FV.jsxs)(FV.Fragment, {
        children: [(0, FV.jsxs)("div", {
          className: QV()("HudQuickName SmallTextBold", {
            Overlap: pV.length > 0
          }),
          children: [pV.length > 0 && (0, FV.jsx)(zV.b, {
            name: "triangle-exclamation"
          }), tV ? (0, GV.u)(tV.id, UV, qV, yV) : qV("hudLayout:fullScreenHint"), pV.length > 0 && (0, FV.jsx)("span", {
            className: "HudQuickOverlap",
            children: qV("hudLayout:overlapsShort", {
              names: (0, GV.r)(pV, UV, qV, yV)
            })
          })]
        }), (null === tV || void 0 === tV ? void 0 : tV.scale) && (0, FV.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, FV.jsx)(nV.M, {
            disabled: TV || PV <= WV.o,
            ariaLabel: qV("hudLayout:smaller"),
            onClick: () => {
              NV(-1)
            },
            children: (0, FV.jsx)(zV.b, {
              name: "minus"
            })
          }), (0, FV.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*PV)}%`
          }), (0, FV.jsx)(nV.M, {
            disabled: TV || PV >= AV,
            ariaLabel: qV("hudLayout:larger"),
            onClick: () => {
              NV(1)
            },
            children: (0, FV.jsx)(zV.b, {
              name: "plus"
            })
          })]
        }), (tV || jV) && (0, FV.jsxs)("div", {
          className: "HudQuickActions",
          children: [tV && (0, FV.jsxs)(FV.Fragment, {
            children: [(0, FV.jsx)(iV, {
              id: tV.id,
              actionButtons: UV,
              keyNames: yV,
              locked: TV,
              lockable: EV(tV.id),
              onLocked: BV
            }), (0, FV.jsx)(gV, {
              id: tV.id,
              elements: YV.hudElements,
              actionButtons: UV,
              keyNames: yV,
              onHidden: rV
            }), (0, FV.jsx)(DV, {
              id: tV.id,
              elements: YV.hudElements,
              actionButtons: UV,
              keyNames: yV,
              locked: TV,
              onReset: kV
            }), hV(tV.id, ZV) && (0, FV.jsx)(lV, {})]
          }), jV]
        })]
      })
    }
    var Be = xV(1157),
      je = xV(4882);
    const qe = "HudPreviewDoc",
      te = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      Fe = new Set([qe, ...Object.values(te)]),
      Te = new Set(WV.z.map(SV.w)),
      Pe = new Set(SV.g),
      Ae = 'style, link[rel="stylesheet"]';

    function Ne(VV, eV, xV, JV) {
      const YV = new Map,
        UV = new Set,
        yV = new URL(VV.baseURI).origin,
        pV = eV => {
          var xV;
          if ("LINK" !== eV.nodeName) return !0;
          const JV = null === (xV = eV.getAttribute("href")) || void 0 === xV ? void 0 : xV.trim();
          if (!JV) return !1;
          try {
            return new URL(JV, VV.baseURI).origin === yV
          } catch {
            return !1
          }
        };
      let QV = null;
      const nV = () => {
          QV !== (0 === UV.size) && (QV = 0 === UV.size, null === JV || void 0 === JV || JV(QV))
        },
        wV = VV => {
          const eV = VV.cloneNode(!0);
          if ("LINK" === eV.tagName) {
            UV.add(eV);
            const VV = () => {
              UV.delete(eV), nV()
            };
            eV.addEventListener("load", VV), eV.addEventListener("error", VV), xV && eV.addEventListener("load", xV)
          }
          return eV
        },
        ZV = () => {
          const JV = function(VV) {
              const eV = [...VV.body.children].filter((VV => VV.matches(Ae)));
              return [...VV.head.querySelectorAll(Ae), ...eV]
            }(VV).filter(pV),
            yV = new Set(JV);
          for (const [VV, eV] of YV) yV.has(VV) || (eV.remove(), YV.delete(VV), UV.delete(eV));
          let QV = null;
          for (let VV = JV.length - 1; VV >= 0; VV--) {
            const UV = JV[VV];
            let yV = YV.get(UV);
            yV ? "STYLE" === UV.tagName && yV.textContent !== UV.textContent && (yV.textContent = UV.textContent, null === xV || void 0 === xV || xV()) : (yV = wV(UV), YV.set(UV, yV), eV.head.insertBefore(yV, QV)), QV = yV
          }
          nV()
        };
      ZV();
      const vV = new MutationObserver(ZV);
      return vV.observe(VV.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), vV.observe(VV.body, {
        childList: !0
      }), () => {
        vV.disconnect()
      }
    }

    function Xe(VV, eV, xV) {
      let {
        keysAbove: JV
      } = xV;
      const YV = [...VV.documentElement.classList].filter((VV => !Fe.has(VV) && !Pe.has(VV))),
        UV = [...eV.documentElement.classList].filter((VV => Pe.has(VV))),
        yV = [qe, te.hotbar, te.hasShop, te.hasBag];
      JV && yV.push(te.keysAbove), eV.documentElement.className = [...YV, ...yV, ...UV].join(" ")
    }
    const Me = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function ze(VV, eV, xV, JV, YV) {
      const UV = (0, WV.C)(xV, JV, "joystick"),
        yV = (0, SV.A)((0, SV.Q)(xV, JV, YV), JV),
        pV = yV.classes.filter((VV => !Te.has(VV))),
        QV = eV.documentElement,
        nV = xV.hudLayouts[JV].hudSafe,
        wV = (0, SV.F)(nV, window.innerWidth, window.innerHeight, Ge(), nV ? (0, SV.U)(eV) : 0);
      (0, SV.V)({
        ...yV,
        classes: pV
      }, {
        vars: QV,
        safe: QV,
        classes: QV
      }), QV.style.setProperty("--preview-joystick-shift-left", `${wV[3]}px`), QV.style.setProperty("--preview-joystick-shift-bottom", `${wV[2]}px`), QV.style.setProperty("--preview-joystick-scale", String(UV[2])), (0, je.e)(QV, eV, xV, JV);
      for (const ZV of Me) QV.style.setProperty(ZV, VV.documentElement.style.getPropertyValue(ZV) || "0px")
    }

    function Ge() {
      return (0, SV.M)(wV.b.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function We(VV) {
      return (0, SV.q)(Ge(), (0, SV.U)(VV))
    }

    function Re(VV, eV, xV) {
      const JV = VV.documentElement.style,
        YV = (0, SV.I)(eV),
        UV = JV.getPropertyValue(YV);
      try {
        return xV((VV => {
          JV.setProperty(YV, String(VV))
        }))
      } finally {
        "" === UV ? JV.removeProperty(YV) : JV.setProperty(YV, UV)
      }
    }

    function ge(VV, eV) {
      const [xV, JV] = Re(VV, "hotbar", (eV => {
        const xV = xV => {
          var JV, YV;
          return eV(xV), null !== (JV = null === (YV = VV.querySelector(".HotBarGameItemsContainer")) || void 0 === YV ? void 0 : YV.getBoundingClientRect().width) && void 0 !== JV ? JV : 0
        };
        return [xV(1), xV(WV.k)]
      }));
      return xV <= 0 ? WV.k : Math.min(WV.k, Math.max(1, Math.floor(JV / xV / eV + 1e-6) * eV))
    }
    const De = 3,
      ie = .5,
      Ce = VV => VV.right - VV.left;
    const ae = (VV, eV) => Math.abs((0, HV.d)(VV).x - (0, HV.d)(eV).x) + Math.abs((0, HV.d)(VV).y - (0, HV.d)(eV).y) + Math.abs(Ce(VV) - Ce(eV));

    function oe(VV, eV, xV, JV, YV) {
      let {
        canKeep: UV = () => !0,
        passes: yV = De,
        before: pV
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const QV = eV.hudLayouts[xV].hudLocked.filter(UV);
      if (0 === QV.length) return eV;
      const nV = [...GV.b].filter((JV => !QV.includes(JV) && (0, WV.C)(VV, xV, JV).join() === (0, WV.C)(eV, xV, JV).join())),
        wV = VV => {
          const eV = (0, HV.I)(nV.flatMap((eV => VV[eV] ? [VV[eV]] : [])));
          return {
            ...VV,
            cluster: null !== eV && void 0 !== eV ? eV : void 0
          }
        };
      let ZV = null;
      const vV = VV => {
          ZV = VV;
          const eV = YV(VV);
          return eV && {
            ...eV,
            boxes: wV(eV.boxes)
          }
        },
        rV = pV ? {
          ...pV,
          boxes: wV(pV.boxes)
        } : vV(VV),
        kV = rV && vV(eV);
      if (!rV || !kV) return eV;
      const bV = rV.boxes;
      let EV = kV.boxes;
      const BV = rV.keysAbove !== kV.keysAbove,
        jV = BV || Boolean(rV.shopAlone) !== Boolean(kV.shopAlone),
        qV = new Set(QV.filter((VV => !(0, GV.x)(VV) || !("bag" === VV ? BV : jV))));
      let tV = eV;
      for (let PV = 0; PV < yV && qV.size > 0; PV++) {
        var FV, TV;
        const VV = new Map;
        for (const eV of qV) {
          const YV = bV[eV],
            UV = EV[eV],
            yV = YV && UV ? ce(eV, (0, WV.C)(tV, xV, eV), YV, UV, JV) : null;
          yV ? VV.set(eV, yV) : qV.delete(eV)
        }
        if (0 === VV.size) break;
        let YV = tV;
        for (const [eV, JV] of VV) YV = (0, WV.mb)(YV, xV, eV, JV);
        const UV = null === (FV = vV(YV)) || void 0 === FV ? void 0 : FV.boxes;
        if (!UV) return eV;
        let yV = tV;
        for (const [eV, JV] of VV) {
          const VV = UV[eV];
          VV && ae(bV[eV], VV) < ae(bV[eV], EV[eV]) - ie ? yV = (0, WV.mb)(yV, xV, eV, JV) : qV.delete(eV)
        }
        if (yV === tV) break;
        const pV = [...VV.keys()].every((VV => qV.has(VV)));
        tV = pV ? YV : yV;
        const QV = pV ? UV : null === (TV = vV(tV)) || void 0 === TV ? void 0 : TV.boxes;
        if (!QV) return eV;
        EV = QV
      }
      return ZV !== tV && YV(tV), tV
    }

    function ce(VV, eV, xV, JV, YV) {
      let [UV, yV, pV] = eV;
      const QV = WV.y[VV],
        nV = {};
      QV.scale && Ce(JV) > 0 && Math.abs(Ce(xV) - Ce(JV)) > ie && (nV.scale = Math.max(WV.o, Math.min(WV.k, pV * Ce(xV) / Ce(JV))));
      const wV = (0, HV.d)(xV).x - (0, HV.d)(JV).x,
        ZV = (0, HV.d)(xV).y - (0, HV.d)(JV).y;
      return QV.move && (Math.abs(wV) > ie || Math.abs(ZV) > ie) && (nV.dx = UV + wV / YV.width, nV.dy = yV + ZV / YV.height), void 0 === nV.scale && void 0 === nV.dx ? null : nV
    }
    let he = 0;

    function le() {
      return he > 0
    }
    const Le = VV => 0 === VV.dx && 0 === VV.dy,
      fe = .001,
      me = VV => Math.abs(VV.dx) >= 5e-4 || Math.abs(VV.dy) >= 5e-4 ? VV : {
        dx: VV.dx,
        dy: VV.dy < 0 ? -.001 : fe
      };

    function Ke(VV) {
      let {
        preview: eV,
        stageRef: xV,
        ringRef: JV,
        centreLineRef: UV,
        snapCentre: yV,
        ready: pV,
        measure: QV,
        k: nV,
        viewport: wV,
        boxes: ZV,
        pieces: vV,
        selected: rV,
        insets: kV,
        layout: bV,
        canMove: EV,
        onSelect: BV,
        onMove: jV
      } = VV;
      const qV = (0, YV.useRef)(null),
        tV = (0, YV.useCallback)((() => null !== qV.current), []),
        FV = (VV, eV) => {
          if (!eV) return null;
          const xV = (0, HV.d)(VV.origin),
            JV = (0, HV.d)(eV),
            YV = (VV.to.dx - VV.from.dx) * wV.width,
            UV = (VV.to.dy - VV.from.dy) * wV.height,
            yV = eV.right - eV.left,
            pV = eV.bottom - eV.top;
          return {
            skew: {
              x: JV.x - xV.x - YV,
              y: JV.y - xV.y - UV
            },
            box: {
              left: xV.x - yV / 2,
              top: xV.y - pV / 2,
              right: xV.x + yV / 2,
              bottom: xV.y + pV / 2
            }
          }
        },
        TV = (VV, xV) => {
          var YV;
          const yV = qV.current;
          if (!yV || yV.pointerId !== VV.pointerId) return;
          qV.current = null, null === (YV = UV.current) || void 0 === YV || YV.classList.remove("Shown", "Snapped");
          const pV = JV.current;
          if (pV && null !== yV.ringStyle && pV.setAttribute("style", yV.ringStyle), xV && yV.moved) {
            const VV = Le(yV.to) ? null : QV(yV.id),
              eV = VV ? (0, HV.F)(VV, (0, HV.E)(wV.width, wV.height, kV)) : {
                x: 0,
                y: 0
              },
              xV = {
                dx: yV.to.dx + eV.x / wV.width,
                dy: yV.to.dy + eV.y / wV.height
              },
              JV = Le(yV.to) ? xV : me(xV);
            jV(yV.id, JV.dx, JV.dy)
          } else eV(yV.id, null), xV && yV.tapPick && BV(yV.tapPick)
        };
      return {
        busy: tV,
        handlers: {
          onPointerDown: VV => {
            var eV;
            if (!pV || qV.current || !VV.target.closest(".HudPreviewHandle")) return;
            const JV = xV.current.getBoundingClientRect(),
              YV = {
                x: (VV.clientX - JV.left) / nV,
                y: (VV.clientY - JV.top) / nV
              },
              UV = (0, HV.x)(YV, vV, 40 / nV),
              yV = null !== rV ? GV.o.get(rV) : void 0,
              QV = void 0 !== yV && null !== (0, HV.x)(YV, vV.filter((VV => {
                let {
                  id: eV
                } = VV;
                return yV.has(eV)
              })), 40 / nV),
              wV = "menu" === rV && void 0 !== ZV.menu && (0, HV.g)(ZV.menu, YV) && ("menu" === UV || null !== UV && (0, sV.v)(UV, bV.hudElements[UV])),
              kV = QV ? rV : wV ? "menu" : null,
              jV = null !== kV,
              tV = null !== kV && void 0 !== kV ? kV : UV;
            if (!tV) return;
            if (function(VV) {
                he++;
                const eV = xV => {
                  xV.pointerId === VV && (he = Math.max(0, he - 1), window.removeEventListener("pointerup", eV, !0), window.removeEventListener("pointercancel", eV, !0))
                };
                window.addEventListener("pointerup", eV, !0), window.addEventListener("pointercancel", eV, !0)
              }(VV.pointerId), !EV(tV)) return void BV(jV && UV ? UV : tV);
            BV(tV);
            const [FV, TV] = null !== (eV = bV.hudElements[tV]) && void 0 !== eV ? eV : [0, 0], PV = {
              dx: FV,
              dy: TV
            }, AV = {
              skew: {
                x: 0,
                y: 0
              },
              box: ZV[tV]
            };
            qV.current = {
              id: tV,
              pointerId: VV.pointerId,
              startX: VV.clientX,
              startY: VV.clientY,
              origin: ZV[tV],
              from: PV,
              to: PV,
              moved: !1,
              home: Le(PV) ? {
                centre: (0, HV.d)(ZV[tV]),
                anchor: AV
              } : null,
              away: Le(PV) ? null : AV,
              anchor: AV,
              ringStyle: null,
              tapPick: jV ? UV : null
            }, VV.currentTarget.setPointerCapture(VV.pointerId)
          },
          onPointerMove: VV => {
            const xV = qV.current;
            if (!xV || xV.pointerId !== VV.pointerId) return;
            const YV = VV.clientX - xV.startX,
              pV = VV.clientY - xV.startY;
            if (!xV.moved && Math.hypot(YV, pV) < 5) return;
            const ZV = !xV.moved;
            var vV, rV;
            (xV.moved = !0, ZV) && (xV.ringStyle = null !== (vV = null === (rV = JV.current) || void 0 === rV ? void 0 : rV.getAttribute("style")) && void 0 !== vV ? vV : null);
            const bV = (0, HV.E)(wV.width, wV.height, kV);
            if (!xV.home) {
              var EV;
              xV.to = {
                dx: 0,
                dy: 0
              }, eV(xV.id, xV.to);
              const VV = QV(xV.id),
                JV = null !== (EV = FV(xV, VV)) && void 0 !== EV ? EV : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: xV.origin
                },
                YV = (0, HV.d)(xV.origin);
              xV.home = {
                centre: VV ? (0, HV.d)(VV) : {
                  x: YV.x - xV.from.dx * wV.width,
                  y: YV.y - xV.from.dy * wV.height
                },
                anchor: JV
              }
            }
            const BV = xV.home;
            let jV = !1;
            const tV = VV => {
                jV = !1;
                let JV = (0, HV.q)(VV.box, YV / nV, pV / nV, bV);
                const UV = wV.width / 2;
                if (yV && Math.abs((0, HV.d)(xV.origin).x + JV.x - UV) <= 8 / nV) {
                  const eV = UV - (0, HV.d)(xV.origin).x,
                    YV = (0, HV.q)(VV.box, eV, JV.y, bV);
                  jV = Math.abs(YV.x - eV) < .01, jV && (JV = YV)
                }
                const QV = (0, HV.w)(xV.from, JV.x - VV.skew.x, JV.y - VV.skew.y, wV.width, wV.height);
                xV.to = me(QV), xV.anchor = VV, eV(xV.id, xV.to)
              },
              TV = (0, HV.q)(BV.anchor.box, YV / nV, pV / nV, bV),
              PV = UV.current,
              AV = (0, HV.d)(xV.origin),
              NV = ((0, WV.T)(xV.id) ? 20 : 6) / nV;
            if (Math.abs(AV.x + TV.x - BV.centre.x) <= NV && Math.abs(AV.y + TV.y - BV.centre.y) <= NV) xV.to = {
              dx: 0,
              dy: 0
            }, xV.anchor = BV.anchor, jV = yV && Math.abs(BV.centre.x - wV.width / 2) < 1, eV(xV.id, xV.to);
            else if (xV.away) tV(xV.away);
            else {
              var XV;
              tV(BV.anchor), xV.away = null !== (XV = FV(xV, QV(xV.id))) && void 0 !== XV ? XV : BV.anchor, tV(xV.away)
            }
            null === PV || void 0 === PV || PV.classList.add("Shown"), null === PV || void 0 === PV || PV.classList.toggle("Snapped", jV), (VV => {
              const eV = JV.current;
              if (eV) {
                const {
                  skew: xV,
                  box: JV
                } = VV.anchor;
                eV.style.left = JV.left * nV + "px", eV.style.top = JV.top * nV + "px", eV.style.width = (JV.right - JV.left) * nV + "px", eV.style.height = (JV.bottom - JV.top) * nV + "px", eV.style.translate = `${((VV.to.dx-VV.from.dx)*wV.width+xV.x)*nV}px ${((VV.to.dy-VV.from.dy)*wV.height+xV.y)*nV}px`
              }
            })(xV)
          },
          onPointerUp: VV => {
            TV(VV, !0)
          },
          onPointerCancel: VV => {
            TV(VV, !1)
          }
        }
      }
    }
    var He = xV(9513);

    function ue(VV, eV) {
      return Object.keys(VV).filter((VV => VV !== eV)).map((eV => VV[eV]))
    }

    function se(VV) {
      return VV.map((VV => {
        let {
          id: eV,
          box: xV
        } = VV;
        return `${eV}:${xV.left},${xV.top},${xV.right},${xV.bottom}`
      })).join(";")
    }

    function Se(VV) {
      const eV = [],
        xV = eV => (0, WV.T)(eV) && !VV.documentElement.classList.contains((0, SV.B)(eV));
      for (const pV of VV.querySelectorAll(`[${GV.f}]`)) {
        const VV = xV(pV.getAttribute(GV.f)) ? pV.querySelector(".ScaleOnHover") : null,
          JV = (null !== VV && void 0 !== VV ? VV : pV).getBoundingClientRect();
        (JV.width > 0 || JV.height > 0) && eV.push({
          id: pV.getAttribute(GV.f),
          box: (0, HV.h)(JV)
        })
      }
      const JV = VV => (0, HV.I)(eV.filter((eV => {
          let {
            id: xV
          } = eV;
          return VV(xV)
        })).map((VV => {
          let {
            box: eV
          } = VV;
          return eV
        }))),
        YV = {};
      for (const pV of new Set(eV.map((VV => VV.id)))) YV[pV] = JV((VV => VV === pV));
      for (const [pV, QV] of GV.o) {
        const VV = JV((VV => QV.has(VV)));
        VV && (YV[pV] = VV)
      }
      const UV = VV.querySelector(".TouchInventoryKeys"),
        yV = UV ? (0, HV.h)(UV.getBoundingClientRect()) : null;
      return {
        boxes: YV,
        pieces: eV,
        pairHome: yV
      }
    }

    function Ie(VV, eV, xV) {
      const JV = eV.right - eV.left,
        YV = eV.bottom - eV.top;
      return Re(VV, "cluster", (eV => {
        const UV = xV => {
            eV(xV);
            const JV = [...VV.querySelectorAll(`[${GV.f}]:not(.HudPreviewGhost)`)].filter((VV => GV.b.has(VV.getAttribute(GV.f)))).map((VV => (0, HV.h)(VV.getBoundingClientRect()))),
              YV = (0, HV.I)(JV);
            return YV ? {
              w: YV.right - YV.left,
              h: YV.bottom - YV.top
            } : null
          },
          yV = VV => !VV || VV.w <= JV && VV.h <= YV,
          pV = UV(1),
          QV = UV(WV.k);
        if (!pV || yV(QV)) return WV.k;
        const nV = (VV, eV, xV) => eV > VV ? 1 + (xV - VV) * (WV.k - 1) / (eV - VV) : WV.k;
        let wV = Math.floor(Math.min(WV.k, nV(pV.w, QV.w, JV), nV(pV.h, QV.h, YV)) / xV + 1e-6) * xV;
        for (; wV > 1 && !yV(UV(wV));) wV = Math.round(100 * (wV - xV)) / 100;
        return Math.max(1, wV)
      }))
    }

    function de(VV) {
      Xe(document, VV, {
        keysAbove: !1
      });
      const eV = parseFloat(getComputedStyle(VV.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        xV = Number.isFinite(eV) && eV < 0;
      return Xe(document, VV, {
        keysAbove: xV
      }), (0, He.b)(VV), xV
    }

    function Oe(VV) {
      const eV = VV.querySelector(".TouchInventoryKey.ShopKey");
      return null !== eV && "1" === getComputedStyle(eV).getPropertyValue("--touch-shop-above").trim()
    }

    function Vx(VV, eV) {
      let {
        layout: xV,
        orientation: JV,
        viewport: UV,
        replicaKey: yV,
        joystickFixed: pV,
        busy: QV
      } = eV;
      const [nV, wV] = (0, YV.useState)(null), [ZV, vV] = (0, YV.useState)({
        boxes: {},
        pieces: []
      }), [rV, kV] = (0, YV.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [bV, EV] = (0, YV.useState)(!1), [BV, jV] = (0, YV.useState)(!1), [qV, tV] = (0, YV.useState)(!1), FV = (0, YV.useCallback)((VV => {
        jV(VV), VV && tV(!0)
      }), []), TV = xV.hudLayouts[JV].hudSafe;
      (0, YV.useLayoutEffect)((() => {
        const eV = VV.current.contentDocument;
        eV.open(), eV.write("<!DOCTYPE html><html><head></head><body></body></html>"), eV.close(), wV(eV)
      }), [VV]);
      const PV = (0, YV.useCallback)((() => {
          nV && ((0, sV.z)(nV), vV(Se(nV)), kV(function(VV, eV) {
            const xV = We(VV),
              [JV, YV, UV, yV] = eV ? (0, SV.t)(eV, window.innerWidth, window.innerHeight, xV) : xV;
            return {
              top: JV,
              right: YV,
              bottom: UV,
              left: yV
            }
          }(nV, TV)))
        }), [nV, TV]),
        AV = (0, YV.useCallback)((() => {
          nV && EV(de(nV))
        }), [nV]),
        NV = (0, YV.useRef)((() => {}));
      return NV.current = () => {
        AV(), QV() || PV()
      }, (0, YV.useLayoutEffect)((() => {
        if (nV) return Ne(document, nV, (() => {
          NV.current()
        }), FV)
      }), [nV, FV]), (0, YV.useLayoutEffect)(AV, [AV, UV]), (0, YV.useLayoutEffect)((() => {
        nV && (Xe(document, nV, {
          keysAbove: bV
        }), ze(document, nV, xV, JV, pV), AV(), PV())
      }), [nV, xV, JV, bV, yV, pV, UV, PV, AV]), (0, YV.useEffect)((() => {
        var VV;
        if (!nV) return;
        const eV = new ResizeObserver((() => {
          QV() || PV()
        }));
        for (const xV of nV.querySelectorAll(`[${GV.f}]`)) eV.observe(xV);
        return null === (VV = nV.fonts) || void 0 === VV || VV.ready.then(PV), () => {
          eV.disconnect()
        }
      }), [nV, PV, QV, yV]), {
        doc: nV,
        boxes: ZV.boxes,
        pieces: ZV.pieces,
        insets: rV,
        keysAbove: bV,
        ready: BV,
        settled: qV
      }
    }
    const ex = ["Above", "Below", "Left", "Right"];

    function xx(VV, eV, xV, JV, YV) {
      const UV = xV[VV],
        yV = (UV.left + UV.right) / 2,
        pV = (UV.top + UV.bottom) / 2,
        QV = (7.5 * eV.length + 14) / JV,
        nV = 18 / JV,
        wV = {
          Above: {
            left: yV - QV / 2,
            top: UV.top - nV,
            right: yV + QV / 2,
            bottom: UV.top
          },
          Below: {
            left: yV - QV / 2,
            top: UV.bottom,
            right: yV + QV / 2,
            bottom: UV.bottom + nV
          },
          Left: {
            left: UV.left - QV,
            top: pV - nV / 2,
            right: UV.left,
            bottom: pV + nV / 2
          },
          Right: {
            left: UV.right,
            top: pV - nV / 2,
            right: UV.right + QV,
            bottom: pV + nV / 2
          }
        },
        ZV = ue(xV, VV),
        vV = {
          left: 0,
          top: 0,
          right: YV.width,
          bottom: YV.height
        };
      return ex[(0, HV.u)(ex.map((VV => wV[VV])), ZV, {
        bounds: vV
      })]
    }

    function Jx() {
      const [VV, eV] = (0, mV.e)();
      return (0, YV.useMemo)((() => ({
        width: VV,
        height: eV
      })), [VV, eV])
    }

    function Yx(VV) {
      var eV;
      const {
        layout: xV,
        orientation: UV,
        selected: yV,
        onSelect: pV,
        onMove: nV,
        canMove: wV,
        actionButtons: ZV,
        joystickFixed: vV,
        presence: rV,
        keyNames: bV,
        maxHeight: EV,
        fill: BV = !1,
        apiRef: jV
      } = VV, {
        t: qV
      } = (0, JV.A)(), tV = Jx(), TV = (null !== (eV = (0, kV.j)("maxAuraLevel")) && void 0 !== eV ? eV : 0) > 0, PV = xV.hudLayouts[UV], AV = (0, YV.useRef)(null), NV = (0, YV.useRef)(null), XV = (0, YV.useRef)(null), MV = (0, YV.useRef)(null), RV = (0, YV.useRef)(null), gV = (0, YV.useRef)(null), DV = (0, KV.d)(AV).width, iV = BV ? 1 : DV > 0 ? (0, HV.B)(DV, tV.width, tV.height, EV) : 0, CV = (0, YV.useRef)((() => !1)), aV = (0, YV.useCallback)((() => CV.current()), []), oV = `${ZV}:${vV}:${TV}`, {
        doc: cV,
        boxes: hV,
        pieces: lV,
        insets: fV,
        keysAbove: mV,
        ready: IV,
        settled: dV
      } = Vx(XV, {
        layout: xV,
        orientation: UV,
        viewport: tV,
        replicaKey: oV,
        joystickFixed: vV,
        busy: aV
      }), OV = (0, YV.useCallback)((VV => {
        cV && ze(document, cV, VV, UV, vV)
      }), [cV, UV, vV]), Ve = (0, YV.useCallback)((VV => {
        if (!cV || !dV) return null;
        OV(VV);
        const eV = de(cV),
          xV = function(VV, eV) {
            let {
              boxes: xV,
              pieces: JV,
              pairHome: YV
            } = VV;
            const UV = JV.find((VV => GV.n.has(VV.id)));
            if (!UV || !YV) return xV;
            const yV = (0, HV.d)(YV),
              pV = eV(UV.id),
              QV = Ce(UV.box) / pV / 2,
              nV = (UV.box.bottom - UV.box.top) / pV / 2;
            return {
              ...xV,
              inventory: {
                left: yV.x - QV,
                top: yV.y - nV,
                right: yV.x + QV,
                bottom: yV.y + nV
              }
            }
          }(Se(cV), (eV => (0, WV.C)(VV, UV, eV)[2]));
        return {
          boxes: xV,
          keysAbove: eV,
          shopAlone: Oe(cV)
        }
      }), [cV, dV, OV, UV]), ee = (0, YV.useRef)(null), xe = (0, YV.useRef)(null), Je = (0, YV.useRef)(xV);
      Je.current = xV;
      const Ye = (0, YV.useCallback)((() => {
        null !== ee.current && (cancelAnimationFrame(ee.current), ee.current = null)
      }), []);
      (0, YV.useEffect)((() => Ye), [xV, Ye]);
      const Ue = (0, YV.useRef)(-1 / 0),
        {
          lockable: ye
        } = VV,
        pe = (0, YV.useCallback)((VV => {
          if (OV(VV), Ue.current = performance.now(), !dV || 0 === xV.hudLayouts[UV].hudLocked.length) return;
          const eV = xV;
          Ye(), ee.current = requestAnimationFrame((() => {
            var xV;
            if (ee.current = null, Je.current !== eV) return;
            const JV = (null === (xV = xe.current) || void 0 === xV ? void 0 : xV.from) === eV ? xe.current.measured : Ve(eV);
            JV && (xe.current = {
              from: eV,
              measured: JV
            }), OV(JV ? oe(eV, VV, UV, tV, Ve, {
              canKeep: ye,
              passes: 1,
              before: JV
            }) : VV)
          }))
        }), [OV, dV, xV, UV, tV, Ve, ye, Ye]),
        Qe = Ke({
          preview: (VV, eV) => {
            eV ? pe((0, WV.mb)(xV, UV, VV, eV)) : (Ye(), OV(xV))
          },
          stageRef: NV,
          ringRef: MV,
          centreLineRef: RV,
          snapCentre: xV.hudSnapCentre,
          ready: dV,
          measure: VV => {
            const eV = cV && IV ? Se(cV).boxes[VV] : void 0;
            return eV && (0, HV.l)(eV, tV.width, tV.height) ? eV : null
          },
          k: iV,
          viewport: tV,
          boxes: hV,
          pieces: lV,
          selected: yV,
          insets: fV,
          layout: PV,
          canMove: wV,
          onSelect: pV,
          onMove: (VV, eV, xV) => {
            Ye(), nV(VV, eV, xV)
          }
        });
      (0, YV.useLayoutEffect)((() => {
        CV.current = Qe.busy
      }), [Qe.busy]);
      const ne = (0, YV.useRef)([]),
        we = (0, YV.useRef)(PV.hudElements);
      (0, YV.useEffect)((() => {
        for (const YV of Object.keys(PV.hudElements)) {
          var VV, eV, xV, JV;
          (null !== (VV = null === (eV = PV.hudElements[YV]) || void 0 === eV ? void 0 : eV[2]) && void 0 !== VV ? VV : 1) > (null !== (xV = null === (JV = we.current[YV]) || void 0 === JV ? void 0 : JV[2]) && void 0 !== xV ? xV : 1) && wV(YV) && !(0, sV.v)(YV, PV.hudElements[YV]) && ne.current.push(...(0, GV.z)(YV, mV, wV))
        }
        we.current = PV.hudElements
      }), [PV.hudElements, wV, mV]), (0, YV.useEffect)((() => {
        if (!IV) return;
        const VV = (0, HV.E)(tV.width, tV.height, fV);
        for (const xV of (0, GV.y)(ne.current.splice(0), hV, VV, wV)) {
          const JV = hV[xV];
          if (!JV || Qe.busy() || !(0, HV.l)(JV, tV.width, tV.height)) continue;
          const YV = (0, HV.F)(JV, VV);
          if (0 !== YV.x || 0 !== YV.y) {
            var eV;
            const [VV, JV] = null !== (eV = PV.hudElements[xV]) && void 0 !== eV ? eV : [0, 0];
            nV(xV, VV + YV.x / tV.width, JV + YV.y / tV.height)
          }
        }
      }), [hV, IV]), (0, YV.useImperativeHandle)(jV, (() => ({
        setScale: (VV, eV) => {
          pe((0, WV.mb)(xV, UV, VV, {
            scale: eV
          }))
        },
        setOpacity: VV => {
          OV({
            ...xV,
            hudKeyOpacity: VV
          })
        },
        keepLocks: (VV, eV) => (Ye(), oe(VV, eV, UV, tV, Ve, {
          canKeep: ye
        })),
        setSafe: VV => {
          const eV = (0, SV.t)(VV, tV.width, tV.height, We(null !== cV && void 0 !== cV ? cV : document));
          pe((0, WV.ub)(xV, UV, VV)), gV.current && (gV.current.style.inset = eV.map((VV => VV * iV + "px")).join(" "))
        }
      })), [OV, pe, Ve, Ye, ye, cV, xV, UV, tV, iV]);
      const Ze = new Set(Object.keys(PV.hudElements).filter((VV => (0, WV.v)(PV.hudElements, VV)))),
        ve = yV ? hV[yV] : void 0,
        ke = yV ? (0, GV.u)(yV, ZV, qV, bV) : "",
        Ee = (0, Be.f)(tV.width, tV.height),
        je = yV ? (0, uV.c)(yV, lV, PV, Ee) : [],
        qe = new Set((0, sV.q)(PV.hudElements)),
        te = (0, sV.I)(PV, (0, sV.E)(rV.rowIcons)).state,
        Fe = je.join(),
        Te = (0, YV.useRef)(VV.onReady);
      Te.current = VV.onReady, (0, YV.useEffect)((() => {
        var VV;
        null === (VV = Te.current) || void 0 === VV || VV.call(Te, dV)
      }), [dV]);
      const Pe = (0, YV.useRef)(VV.onMeasured);
      (0, YV.useLayoutEffect)((() => {
        Pe.current = VV.onMeasured
      }));
      const Ae = (0, YV.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        Ne = [se(lV), tV.width, tV.height, fV.top, fV.right, fV.bottom, fV.left, IV, oV].join("|");
      (0, YV.useEffect)((() => {
        const VV = Fe ? Fe.split(",") : [],
          eV = () => {
            var eV;
            null === (eV = Pe.current) || void 0 === eV || eV.call(Pe, hV, VV, Ae.current.caps)
          };
        let xV;
        const JV = () => {
          const VV = Je.current;
          if (!cV || VV === Ae.current.layout && Ne === Ae.current.input) return !1;
          const YV = Ue.current + 250 - performance.now();
          return VV === Ae.current.layout && (YV > 0 || aV()) ? (xV = setTimeout((() => {
            JV() && eV()
          }), Math.max(YV, 62.5)), !1) : (Ae.current = {
            layout: VV,
            input: Ne,
            caps: {
              hotbar: ge(cV, be),
              cluster: Ie(cV, (0, HV.E)(tV.width, tV.height, fV), be)
            }
          }, !0)
        };
        return JV(), eV(), () => {
          clearTimeout(xV)
        }
      }), [hV, Fe, cV, tV, fV, Ne, aV]);
      const Xe = VV => ({
        left: VV.left * iV,
        top: VV.top * iV,
        width: (VV.right - VV.left) * iV,
        height: (VV.bottom - VV.top) * iV
      });
      return (0, FV.jsx)("div", {
        ref: AV,
        className: QV()("HudPreviewBox", {
          Fill: BV
        }),
        style: {
          height: tV.height * iV
        },
        children: (0, FV.jsxs)("div", {
          ref: NV,
          className: "HudPreviewStage",
          style: {
            width: tV.width * iV,
            height: tV.height * iV
          },
          children: [(0, FV.jsx)("iframe", {
            ref: XV,
            className: "HudPreviewFrame",
            title: qV("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: tV.width,
              height: tV.height,
              transform: `scale(${iV})`
            }
          }), cV && (0, LV.createPortal)((0, FV.jsx)(re, {
            presence: rV,
            portraitPhone: Ee,
            hidden: Ze,
            actionButtons: ZV,
            joystickFixed: vV,
            keysAbove: mV,
            auraBar: TV,
            trayState: te,
            moved: qe
          }), cV.body), (0, FV.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...Qe.handlers,
            children: [(0, FV.jsx)("div", {
              ref: gV,
              className: "HudPreviewSafeZone",
              style: {
                top: fV.top * iV,
                right: fV.right * iV,
                bottom: fV.bottom * iV,
                left: fV.left * iV
              }
            }), lV.map(((VV, eV) => {
              let {
                id: xV,
                box: JV
              } = VV;
              return (0, FV.jsx)("div", {
                className: "HudPreviewHandle",
                style: Xe((0, HV.t)(JV, 40 / iV))
              }, `${xV}:${eV}`)
            })), PV.hudLocked.map((VV => {
              const eV = hV[VV];
              return eV && (0, FV.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: eV.right * iV,
                  top: eV.top * iV
                },
                children: (0, FV.jsx)(zV.b, {
                  name: "lock"
                })
              }, VV)
            })), (0, FV.jsx)("div", {
              ref: RV,
              className: "HudPreviewCentreLine",
              style: {
                left: tV.width / 2 * iV
              }
            }), yV && ve && (0, FV.jsx)("div", {
              ref: MV,
              className: QV()("HudPreviewRing", {
                Fixed: !wV(yV),
                Overlap: je.length > 0
              }),
              style: Xe(ve),
              children: (0, FV.jsx)("span", {
                className: QV()("HudPreviewRingLabel", xx(yV, ke, hV, iV, tV)),
                children: ke
              })
            })]
          })]
        })
      })
    }

    function Ux(VV, eV) {
      (0, YV.useEffect)((() => {
        var xV;
        null === (xV = VV.current) || void 0 === xV || xV.toggleAttribute("inert", eV)
      }), [VV, eV])
    }
    const yx = "hudFullScreen";

    function px(VV) {
      let {
        onScale: eV,
        onHidden: xV,
        onReset: UV,
        locked: yV,
        lockable: pV,
        onLocked: QV,
        onClose: wV,
        ...ZV
      } = VV;
      const {
        t: vV
      } = (0, JV.A)(), rV = (0, YV.useRef)(null);
      (0, fV.s)("popup", rV, wV),
      function(VV) {
        const eV = (0, YV.useRef)(VV);
        eV.current = VV, (0, YV.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [yx]: !0
          }, "");
          let VV = !1;
          const xV = () => {
            VV = !0, eV.current()
          };
          return window.addEventListener("popstate", xV), () => {
            var eV;
            window.removeEventListener("popstate", xV), !VV && null !== (eV = window.history.state) && void 0 !== eV && eV[yx] && window.history.back()
          }
        }), [])
      }(wV), (0, YV.useEffect)((() => {
        function VV(VV) {
          "Escape" === VV.key && (VV.stopPropagation(), wV())
        }
        return window.addEventListener("keydown", VV, !0), () => {
          window.removeEventListener("keydown", VV, !0)
        }
      }), [wV]);
      const {
        selected: kV
      } = ZV, bV = (0, YV.useRef)(null), EV = (0, YV.useRef)(null), [BV, jV] = (0, YV.useState)(!1);
      Ux(EV, !BV);
      const [qV, tV] = (0, YV.useState)(null), [TV, PV] = (0, YV.useState)([]), [AV, NV] = ke(), XV = (0, YV.useRef)(ZV.selected);
      XV.current = ZV.selected;
      const MV = (0, YV.useRef)({}),
        zV = (0, YV.useCallback)((() => {
          const VV = bV.current;
          VV && tV(function(VV, eV, xV) {
            var JV;
            const {
              innerWidth: YV,
              innerHeight: UV
            } = window, yV = VV.offsetWidth, pV = VV.offsetHeight, QV = Math.max(Ge()[0], 6), nV = [];
            for (const vV of [QV, .2 * UV, .5 * UV - pV / 2, .33 * UV])
              for (const VV of [.5, .3, .7]) nV.push({
                left: Math.max(0, Math.min(YV - yV - 6, Math.max(6, YV * VV - yV / 2))),
                top: vV
              });
            const wV = nV.map((VV => ({
                left: VV.left - 6,
                top: VV.top - 6,
                right: VV.left + yV + 6,
                bottom: VV.top + pV + 6
              }))),
              ZV = ue(eV, xV);
            return nV[(0, HV.u)(wV, ZV, {
              avoid: xV && null !== (JV = eV[xV]) && void 0 !== JV ? JV : null
            })]
          }(VV, MV.current, XV.current))
        }), []),
        GV = (0, YV.useCallback)(((VV, eV, xV) => {
          PV(eV), NV(xV), MV.current = VV, zV()
        }), [zV, NV]);
      return (0, YV.useLayoutEffect)(zV, [ZV.selected, zV]), (0, LV.createPortal)((0, FV.jsxs)("div", {
        ref: rV,
        className: "HudFullScreenEditor",
        children: [(0, FV.jsx)(Yx, {
          ...ZV,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: GV,
          onReady: jV,
          lockable: pV
        }), (0, FV.jsxs)("div", {
          ref: bV,
          className: "HudFullScreenToolbar",
          style: null === qV ? void 0 : {
            left: qV.left,
            top: qV.top,
            transform: "none"
          },
          children: [(0, FV.jsx)("div", {
            ref: EV,
            className: "HudFullScreenControls",
            children: (0, FV.jsx)(Ee, {
              selected: kV,
              layout: ZV.layout.hudLayouts[ZV.orientation],
              actionButtons: ZV.actionButtons,
              keyNames: ZV.keyNames,
              overlaps: TV,
              scaleCaps: AV,
              onScale: eV,
              onHidden: xV,
              onReset: UV,
              locked: yV,
              lockable: pV,
              onLocked: QV,
              joystickFixed: ZV.joystickFixed
            })
          }), (0, FV.jsx)(nV.f, {
            className: "HudFullScreenDone",
            onClick: wV,
            padDefaultFocus: !0,
            children: vV("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const Qx = VV => `${Math.round(100*VV)}%`;

    function nx(VV) {
      let {
        info: eV,
        tuple: xV,
        props: YV
      } = VV;
      const {
        t: UV
      } = (0, JV.A)();
      return (0, FV.jsx)(rV.m, {
        name: UV("hudLayout:size"),
        min: WV.o,
        max: WV.k,
        step: be,
        initValue: xV[2],
        disabled: YV.locked.has(eV.id),
        selectableMax: YV.scaleCaps[eV.id],
        cappedNote: UV("hudLayout:sizeCapped"),
        format: Qx,
        onChange: VV => {
          YV.onScalePreview(eV.id, VV)
        },
        onChangeComplete: VV => {
          YV.onScale(eV.id, VV)
        }
      })
    }

    function wx(VV) {
      const {
        t: eV
      } = (0, JV.A)(), {
        present: xV,
        elements: UV,
        selected: yV,
        onSelect: pV,
        onHidden: nV,
        onReset: wV,
        note: ZV,
        actionButtons: vV,
        keyNames: rV,
        sizeBesidePreview: kV,
        locked: bV,
        lockable: EV,
        onLocked: BV
      } = VV, {
        rowIconsOpen: jV,
        onRowIconsOpen: qV
      } = VV, tV = (0, YV.useRef)(null), TV = null !== yV && (jV || !(0, WV.T)(yV));
      return (0, YV.useEffect)((() => {
        var VV;
        const eV = yV ? null === (VV = tV.current) || void 0 === VV ? void 0 : VV.querySelector(`[data-hud-row="${yV}"]`) : null;
        if (!eV) return;
        const xV = eV.closest(".SettingsMenuRight"),
          JV = performance.now();
        let YV = null;
        const UV = () => {
            clearInterval(QV), null === xV || void 0 === xV || xV.removeEventListener("scroll", pV)
          },
          pV = () => {
            le() || UV()
          },
          QV = setInterval((() => {
            const VV = performance.now();
            VV - JV > 1500 ? UV() : le() ? YV = null : null === YV ? YV = VV : VV - YV >= 150 && (UV(), function(VV) {
              var eV;
              const xV = VV.closest(".SettingsMenuRight"),
                JV = null === (eV = VV.closest(".HudLayoutSettings")) || void 0 === eV ? void 0 : eV.querySelector(".HudLayoutPreviewBox");
              if (!xV || !JV) return;
              const YV = JV.getBoundingClientRect().bottom + 8,
                UV = xV.getBoundingClientRect().bottom - 8,
                yV = VV.getBoundingClientRect();
              yV.top < YV ? xV.scrollBy({
                top: yV.top - YV,
                behavior: "smooth"
              }) : yV.bottom > UV && xV.scrollBy({
                top: Math.min(yV.bottom - UV, yV.top - YV),
                behavior: "smooth"
              })
            }(eV))
          }), 50);
        return null === xV || void 0 === xV || xV.addEventListener("scroll", pV, {
          passive: !0
        }), UV
      }), [yV, TV]), (0, FV.jsx)("div", {
        ref: tV,
        className: "SettingBoxGroup HudElementList",
        children: GV.j.filter((VV => xV.has(VV.id) && (jV || !(0, WV.T)(VV.id)))).map((xV => {
          const JV = ((VV, eV) => {
              var xV;
              return null !== (xV = VV[eV]) && void 0 !== xV ? xV : WV.q
            })(UV, xV.id),
            YV = (0, WV.v)(UV, xV.id),
            tV = xV.id === yV,
            TV = xV.scale && !kV,
            PV = ZV(xV.id, tV);
          return (0, FV.jsxs)("div", {
            "data-hud-row": xV.id,
            className: QV()("SettingBox HudElementRow", {
              Open: tV,
              Hidden: YV,
              Child: void 0 !== xV.parent,
              Grandchild: (0, GV.q)(xV.id).length > 1
            }),
            children: [(0, FV.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, FV.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": TV ? tV : void 0,
                onClick: () => {
                  pV(xV.id)
                },
                children: (0, FV.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [(0, GV.u)(xV.id, vV, eV, rV), xV.scale && 1 !== JV[2] && !(tV && TV) && (0, FV.jsxs)(FV.Fragment, {
                    children: [" ", (0, FV.jsx)("span", {
                      className: "HudElementRowSize",
                      children: Qx(JV[2])
                    })]
                  }), TV && (0, FV.jsxs)(FV.Fragment, {
                    children: [" ", (0, FV.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, FV.jsx)(iV, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: xV.id,
                actionButtons: vV,
                keyNames: rV,
                locked: bV.has(xV.id),
                lockable: EV(xV.id),
                onLocked: BV
              }), "menu" === xV.id && (0, FV.jsx)(CV, {
                className: "HudElementRowIcon",
                open: jV,
                name: (0, GV.u)(xV.id, vV, eV, rV),
                onToggle: qV
              }), "menu" !== xV.id && (0, FV.jsx)(gV, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: xV.id,
                elements: UV,
                actionButtons: vV,
                keyNames: rV,
                onHidden: nV
              }), (0, FV.jsx)(DV, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: bV.has(xV.id),
                id: xV.id,
                elements: UV,
                actionButtons: vV,
                keyNames: rV,
                onReset: wV
              })]
            }), tV && TV && (0, FV.jsx)(nx, {
              info: xV,
              tuple: JV,
              props: VV
            }), PV && (0, FV.jsx)("div", {
              className: "HudElementNote",
              children: PV
            })]
          }, xV.id)
        }))
      })
    }

    function Zx(VV) {
      let {
        preview: eV,
        quick: xV,
        onFullScreen: UV,
        resting: yV,
        onSidePanel: pV
      } = VV;
      const {
        t: QV
      } = (0, JV.A)(), wV = Jx(), ZV = (0, YV.useRef)(null), {
        width: vV
      } = (0, KV.d)(ZV), rV = Math.floor(wV.width * Math.min(1, eV.maxHeight / wV.height)), kV = vV - rV - 12, bV = kV >= 130, EV = vV > 0;
      (0, YV.useEffect)((() => {
        EV && pV(bV)
      }), [EV, bV, pV]);
      const BV = (0, HV.B)(bV ? rV : vV, wV.width, wV.height, eV.maxHeight),
        jV = yV ? (0, FV.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: wV.height * BV
          }
        }) : (0, FV.jsx)(Yx, {
          ...eV
        }),
        qV = VV => (0, FV.jsxs)(nV.M, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: QV("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: UV,
          children: [(0, FV.jsx)(zV.b, {
            name: "expand"
          }), VV && (0, FV.jsx)("span", {
            children: QV("hudLayout:fullScreen")
          })]
        });
      return (0, FV.jsxs)("div", {
        ref: ZV,
        className: "SettingBox HudLayoutPreviewBox",
        children: [vV > 0 && bV && (0, FV.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, FV.jsx)("div", {
            style: {
              width: rV
            },
            children: jV
          }), (0, FV.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, FV.jsx)(Ee, {
              selected: eV.selected,
              ...xV,
              joystickFixed: eV.joystickFixed,
              extra: qV(!eV.selected || kV >= 278)
            })
          })]
        }), vV > 0 && !bV && (0, FV.jsxs)(FV.Fragment, {
          children: [jV, (0, FV.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: qV(!1)
          })]
        })]
      })
    }
    var vx = xV(2744),
      rx = xV(4874),
      kx = xV(2722),
      bx = xV(2672);
    const Ex = VV => {
      const eV = SV.l * ("sides" === VV ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(eV / 2))
    };

    function Bx(VV, eV, xV) {
      const [JV, YV, UV, yV] = VV;
      return "sides" === eV ? [JV, xV, UV, xV] : [xV, YV, xV, yV]
    }
    const jx = [null, null, null, null],
      qx = VV => `${VV}px`;

    function tx(VV) {
      let {
        safe: eV,
        onPreview: xV,
        onCommit: UV
      } = VV;
      const {
        t: yV
      } = (0, JV.A)(), pV = (0, SV.t)(null !== eV && void 0 !== eV ? eV : jx, window.innerWidth, window.innerHeight, We(document).map(Math.round)), QV = (0, YV.useRef)(null !== eV && void 0 !== eV ? eV : jx);
      QV.current = null !== eV && void 0 !== eV ? eV : jx;
      const wV = VV => {
        const eV = Math.min(Ex(VV), "sides" === VV ? Math.max(pV[1], pV[3]) : Math.max(pV[0], pV[2]));
        return (0, FV.jsx)(rV.m, {
          name: yV("sides" === VV ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: Ex(VV),
          step: 2,
          initValue: eV,
          format: qx,
          onChange: eV => {
            xV(Bx(QV.current, VV, eV))
          },
          onChangeComplete: JV => {
            if (JV === eV) return void xV(QV.current);
            const YV = Bx(QV.current, VV, JV);
            QV.current = YV, UV(YV), (0, AV.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: VV
            })
          }
        })
      };
      return (0, FV.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, FV.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, FV.jsx)("div", {
            children: yV("hudLayout:safeZone")
          }), (0, FV.jsx)(nV.M, {
            active: null === eV,
            pressed: null === eV,
            onClick: () => {
              UV(null)
            },
            children: yV("hudLayout:safeZoneAuto")
          })]
        }), wV("sides"), wV("ends")]
      })
    }

    function Fx() {
      const {
        t: VV
      } = (0, JV.A)(), eV = (0, WV.ib)(), {
        clientEscMenuOptions: xV
      } = (0, wV.l)(["clientEscMenuOptions"]), UV = (0, vx.g)(), yV = eV.hudLayouts[UV], [pV, QV] = (0, YV.useState)(null), {
        rowIconsOpen: ZV,
        onRowIconsOpen: vV,
        select: kV
      } = function(VV, eV) {
        const [xV, JV] = (0, YV.useState)((() => WV.G.some((eV => void 0 !== VV.hudElements[eV] || VV.hudLocked.includes(eV))))), UV = (0, YV.useCallback)((VV => {
          eV(VV), (0, WV.T)(VV) && JV(!0)
        }), [eV]);
        return {
          rowIconsOpen: xV,
          onRowIconsOpen: JV,
          select: UV
        }
      }(yV, QV), [bV, EV] = (0, YV.useState)([]), [BV, jV] = (0, YV.useState)(null), [qV, tV] = ke(), TV = (0, YV.useCallback)(((VV, eV, xV) => {
        EV(eV), tV(xV);
        const JV = Object.keys(VV);
        jV((VV => (null === VV || void 0 === VV ? void 0 : VV.size) === JV.length && JV.every((eV => VV.has(eV))) ? VV : new Set(JV)))
      }), [tV]), {
        gameState: PV
      } = (0, wV.l)(["gameState"]), XV = (0, kx.h)(), MV = (0, bx.u)(), [zV] = (0, YV.useState)((() => {
        var VV, eV, xV, JV;
        return "inGame" === PV ? (0, dV.u)(document, XV, {
          rightOfCamera: null !== (VV = null === (eV = MV.rightOfCamera) || void 0 === eV ? void 0 : eV.icon) && void 0 !== VV ? VV : null,
          leftEnd: null !== (xV = null === (JV = MV.leftEnd) || void 0 === JV ? void 0 : JV.icon) && void 0 !== xV ? xV : null
        }) : dV.d
      })), RV = (0, YV.useRef)(null), gV = (0, YV.useRef)(null), DV = function(VV) {
        const [eV, xV] = (0, YV.useState)((() => .4 * window.innerHeight));
        return (0, YV.useLayoutEffect)((() => {
          var eV;
          const JV = null === (eV = VV.current) || void 0 === eV ? void 0 : eV.closest(".SettingsMenuRight");
          if (!JV) return;
          const YV = () => {
            const VV = JV.clientHeight < Tx ? .4 : .5;
            xV(Math.max(80, JV.clientHeight * VV - 24))
          };
          YV();
          const UV = new ResizeObserver(YV);
          return UV.observe(JV), () => {
            UV.disconnect()
          }
        }), [VV]), eV
      }(gV), iV = (0, rx.n)(xV.joystickMode), CV = xV.touchActionButtons, aV = (0, YV.useMemo)((() => (0, dV.q)(zV, CV)), [zV, CV]), oV = (0, YV.useMemo)((() => new Set((0, dV.n)(zV, CV).map((VV => dV.g[VV])))), [zV, CV]);
      (0, YV.useEffect)((() => {
        (0, AV.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [cV, LV] = (0, YV.useState)(!1), [fV, mV] = (0, YV.useState)(!1), KV = (0, YV.useRef)(null);
      Ux(KV, !fV);
      const [HV, uV] = (0, YV.useState)(!1), SV = (0, YV.useCallback)((() => {
        uV(!1)
      }), []), IV = (0, YV.useMemo)((() => new Set(yV.hudLocked)), [yV.hudLocked]), OV = VV => {
        var eV, xV;
        const JV = (0, WV.r)(),
          YV = VV(JV);
        (0, WV.db)(null !== (eV = null === (xV = RV.current) || void 0 === xV ? void 0 : xV.keepLocks(JV, YV)) && void 0 !== eV ? eV : YV)
      }, Ve = (VV, eV) => {
        OV((xV => (0, WV.mb)(xV, UV, VV, eV)))
      }, ee = (VV, eV, xV) => {
        Ve(VV, {
          dx: eV,
          dy: xV
        }), (0, AV.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${VV}`
        })
      }, xe = (VV, eV) => {
        OV((xV => (0, WV.qb)(xV, UV, VV, eV)))
      }, Je = VV => {
        const eV = GV.i[VV];
        return (eV.move || eV.scale) && ("joystick" !== VV || iV) && !(0, sV.v)(VV, yV.hudElements[VV])
      }, Ye = VV => GV.i[VV].move && ("joystick" !== VV || iV) && !IV.has(VV), Ue = new Set(GV.j.map((VV => VV.id)).filter((VV => {
        const eV = (0, WV.T)(VV) && !zV.rowIcons.includes(VV);
        return null === BV || BV.has(VV) || (0, WV.v)(yV.hudElements, VV) && !eV
      }))), ye = {
        present: Ue,
        actionButtons: CV,
        keyNames: aV,
        scaleCaps: qV,
        sizeBesidePreview: cV,
        elements: yV.hudElements,
        selected: pV,
        onSelect: kV,
        rowIconsOpen: ZV,
        onRowIconsOpen: vV,
        onScalePreview: (VV, eV) => {
          var xV;
          null === (xV = RV.current) || void 0 === xV || xV.setScale(VV, eV)
        },
        onScale: (VV, eV) => {
          Ve(VV, {
            scale: eV
          }), (0, AV.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${VV}`
          })
        },
        onHidden: (VV, eV) => {
          Ve(VV, {
            hidden: eV
          }), (0, AV.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${eV?"hide":"show"}:${VV}`
          })
        },
        onReset: VV => {
          Ve(VV, WV.e)
        },
        locked: IV,
        lockable: Je,
        onLocked: xe,
        note: (eV, xV) => {
          const JV = xV && bV.length > 0 ? VV("hudLayout:overlapsNote", {
            names: (0, GV.r)(bV, CV, VV, aV)
          }) : null;
          if (xV && hV(eV, iV)) return (0, FV.jsxs)(FV.Fragment, {
            children: [JV && (0, FV.jsx)("span", {
              children: JV
            }), (0, FV.jsx)("span", {
              children: VV("hudLayout:floatingJoystickNote")
            }), !cV && (0, FV.jsx)(lV, {})]
          });
          if (JV) return JV;
          const YV = xV && IV.has(eV) ? VV("hudLayout:lockedNote") : null,
            UV = xV && oV.has(eV) ? VV("hudLayout:contextSlotNote") : null;
          return YV || UV ? (0, FV.jsxs)(FV.Fragment, {
            children: [YV && (0, FV.jsx)("span", {
              children: YV
            }), UV && (0, FV.jsx)("span", {
              children: UV
            })]
          }) : xV && "cluster" === eV ? VV("hudLayout:clusterNote") : xV && "inventory" === eV ? VV("hudLayout:inventoryNote") : xV && "menu" === eV ? VV("hudLayout:menuNote") : xV && (0, sV.v)(eV, yV.hudElements[eV]) && Ye(eV) ? VV("hudLayout:rowIconNote") : xV && "arrows" === eV ? VV("hudLayout:arrowsNote") : xV && "sprint" === eV ? VV("hudLayout:sprintNote") : (0, GV.x)(eV) && (0, WV.v)(yV.hudElements, eV) ? VV("hudLayout:inventoryHiddenNote", {
            name: (0, GV.u)(eV, CV, VV, aV)
          }) : null
        }
      };
      return (0, FV.jsxs)("div", {
        ref: gV,
        className: "HudLayoutSettings",
        children: [(0, FV.jsxs)("div", {
          ref: KV,
          className: "HudLayoutBody",
          children: [(0, FV.jsx)("div", {
            className: "HudLayoutOrientation",
            children: VV("landscape" === UV ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, FV.jsx)(Zx, {
            preview: {
              layout: eV,
              orientation: UV,
              selected: pV,
              onSelect: kV,
              onMove: ee,
              canMove: Ye,
              actionButtons: CV,
              joystickFixed: iV,
              presence: zV,
              keyNames: aV,
              maxHeight: DV,
              apiRef: RV,
              onMeasured: TV,
              onReady: mV,
              lockable: Je
            },
            quick: {
              layout: yV,
              actionButtons: CV,
              keyNames: aV,
              scaleCaps: qV,
              overlaps: bV,
              onScale: ye.onScale,
              onHidden: ye.onHidden,
              onReset: ye.onReset,
              locked: IV,
              lockable: Je,
              onLocked: xe
            },
            onFullScreen: () => {
              uV(!0)
            },
            resting: HV,
            onSidePanel: LV
          }), HV && (0, FV.jsx)(px, {
            layout: eV,
            orientation: UV,
            selected: pV,
            onSelect: kV,
            onMove: ee,
            canMove: Ye,
            actionButtons: CV,
            joystickFixed: iV,
            presence: zV,
            keyNames: aV,
            onScale: ye.onScale,
            onHidden: ye.onHidden,
            onReset: ye.onReset,
            locked: IV,
            lockable: Je,
            onLocked: xe,
            apiRef: RV,
            onClose: SV
          }), (0, FV.jsx)(tx, {
            safe: yV.hudSafe,
            onCommit: VV => {
              OV((eV => (0, WV.ub)(eV, UV, VV)))
            },
            onPreview: VV => {
              var eV;
              null === (eV = RV.current) || void 0 === eV || eV.setSafe(VV)
            }
          }), (0, FV.jsx)(rV.e, {
            label: VV("hudLayout:snapCentre"),
            checked: eV.hudSnapCentre,
            onClick: VV => {
              (0, WV.bb)(VV)
            },
            circleInfoText: VV("hudLayout:snapCentreInfo")
          }), (0, FV.jsx)(wx, {
            ...ye
          }), (0, FV.jsx)(rV.i, {
            label: VV("hudLayout:shape"),
            options: WV.J.map((eV => ({
              value: eV,
              label: VV(`hudLayout:shape_${eV}`)
            }))),
            value: eV.hudShape,
            onChange: VV => {
              OV((eV => ({
                ...eV,
                hudShape: VV
              }))), (0, AV.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: VV
              })
            }
          }), (0, FV.jsx)(rV.m, {
            name: VV("hudLayout:opacity"),
            min: WV.i,
            max: 1,
            step: .05,
            initValue: eV.hudKeyOpacity,
            format: VV => `${Math.round(100*VV)}%`,
            circleInfoText: VV("hudLayout:opacityInfo"),
            onChange: VV => {
              var eV;
              null === (eV = RV.current) || void 0 === eV || eV.setOpacity(VV)
            },
            onChangeComplete: VV => {
              (0, WV.Z)(VV), (0, AV.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, FV.jsx)(nV.E, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const VV = NV.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await VV.getResult() && (0, WV.X)()
            }()
          },
          children: VV("hudLayout:resetAll")
        })]
      })
    }
    const Tx = 350;
    const Px = [function() {
      const {
        t: VV
      } = (0, JV.A)(), [eV, xV] = (0, YV.useState)(!1), UV = (0, YV.useRef)(null);
      return (0, YV.useEffect)((() => {
        var VV;
        eV && (null === (VV = UV.current) || void 0 === VV || VV.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [eV]), (0, FV.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, FV.jsx)(XV.c, {
          ref: UV,
          icon: "arrows-up-down-left-right",
          title: VV("hudLayout:title"),
          sub: VV("hudLayout:entrySub"),
          expanded: eV,
          onClick: () => {
            xV(!eV)
          }
        }), eV && (0, FV.jsx)(Fx, {})]
      })
    }, function() {
      const {
        t: VV
      } = (0, JV.A)(), {
        joystickMode: eV,
        touchSpeedCurve: xV,
        autorun: YV,
        jumpLock: UV,
        touchEdgeGuard: yV
      } = (0, wV.l)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, FV.jsxs)(FV.Fragment, {
        children: [(0, FV.jsx)(rV.i, {
          label: VV("settingsMenu:joystick"),
          options: tV.yb.map((eV => ({
            value: eV,
            label: VV(TV[eV])
          }))),
          value: eV,
          onChange: VV => {
            wV.b.setClientEscMenuOptions({
              joystickMode: VV
            })
          },
          circleInfoText: VV("settingsMenu:joystickInfo")
        }), (0, FV.jsx)(rV.e, {
          label: VV("settingsMenu:preciseWalking"),
          checked: xV,
          onClick: VV => {
            wV.b.setClientEscMenuOptions({
              touchSpeedCurve: VV
            })
          },
          circleInfoText: VV("settingsMenu:preciseWalkingInfo")
        }), (0, FV.jsx)(rV.e, {
          label: VV("settingsMenu:autoRun"),
          checked: YV,
          onClick: VV => {
            wV.b.setClientEscMenuOptions({
              autorun: VV
            })
          },
          circleInfoText: VV("settingsMenu:autoRunInfo")
        }), (0, FV.jsx)(rV.e, {
          label: VV("settingsMenu:jumpLock"),
          checked: UV,
          onClick: VV => {
            wV.b.setClientEscMenuOptions({
              jumpLock: VV
            })
          },
          circleInfoText: VV("settingsMenu:jumpLockInfo")
        }), (0, FV.jsx)(rV.e, {
          label: VV("touchSettings:stopAtEdges"),
          checked: yV,
          onClick: VV => {
            wV.b.setClientEscMenuOptions({
              touchEdgeGuard: VV
            })
          },
          circleInfoText: VV("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, FV.jsx)(qV.b, {})
    }, function() {
      const {
        t: VV
      } = (0, JV.A)(), {
        clientEscMenuOptions: eV
      } = (0, wV.l)(["clientEscMenuOptions"]);
      return (0, PV.c)() ? (0, FV.jsx)(rV.e, {
        label: VV("settingsMenu:vibration"),
        checked: eV.vibration,
        onClick: VV => {
          wV.b.setClientEscMenuOptions({
            vibration: VV
          })
        },
        circleInfoText: VV("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Ax() {
      return (0, FV.jsx)(FV.Fragment, {
        children: Px.map(((VV, eV) => (0, FV.jsx)(VV, {}, eV)))
      })
    }
    var Nx = xV(4798);

    function Xx() {
      const {
        t: VV
      } = (0, JV.A)(), {
        isTouchScreen: eV,
        clientEscMenuOptions: xV,
        gameState: yV
      } = (0, wV.l)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), pV = (0, kV.j)("ezBridging"), QV = (0, kV.j)("ezTowering"), EV = "inGame" !== yV || !0 === pV, BV = (0, bV.d)(), qV = null !== BV && ("inGame" !== yV || !0 === QV), [, tV] = (0, YV.useReducer)((VV => VV + 1), 0), TV = (0, jV.h)(), [PV, AV] = (0, YV.useState)(Nx.f);
      return (0, FV.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [TV && (0, FV.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, FV.jsx)("div", {
            children: VV("controller:settingsControlsNote")
          }), (0, FV.jsx)(nV.M, {
            onClick: () => {
              wV.b.set({
                openSettingsCategory: "controller"
              })
            },
            children: VV("controller:settingsOpenController")
          })]
        }), (0, ZV.isTouchscreen)() && !(0, ZV.isMobile)() ? (0, FV.jsx)(FV.Fragment, {
          children: (0, FV.jsx)(rV.e, {
            label: VV("settingsMenu:useTouchControls"),
            checked: PV,
            onClick: VV => {
              (0, Nx.c)(VV), AV(VV)
            }
          })
        }) : null, eV && (0, FV.jsx)(Ax, {}), EV && (0, FV.jsx)(rV.e, {
          label: VV("settingsMenu:ezBridging"),
          checked: xV.ezBridging,
          onClick: VV => {
            wV.b.setClientEscMenuOptions({
              ezBridging: VV
            })
          },
          circleInfoText: VV("settingsMenu:ezBridgingInfo")
        }), qV && (0, FV.jsx)(rV.e, {
          label: VV("settingsMenu:ezTowering"),
          checked: xV.ezTowering,
          onClick: VV => {
            wV.b.setClientEscMenuOptions({
              ezTowering: VV
            })
          },
          circleInfoText: VV("jump" === BV ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, FV.jsx)(rV.e, {
          label: VV("settingsMenu:crouchToggle"),
          checked: xV.crouchIsToggle,
          onClick: VV => {
            wV.b.setClientEscMenuOptions({
              crouchIsToggle: VV
            })
          },
          circleInfoText: VV("settingsMenu:crouchToggleInfo")
        }), (0, FV.jsx)(rV.e, {
          label: VV("settingsMenu:hideUiToggle"),
          checked: xV.hideUiIsToggle,
          onClick: VV => {
            wV.b.setClientEscMenuOptions({
              hideUiIsToggle: VV
            })
          },
          circleInfoText: VV("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, vV.c)() && (0, FV.jsx)(rV.m, {
          name: VV("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: xV.touchscreenSensitivity,
          onChange: VV => {
            wV.b.setClientEscMenuOptions({
              touchscreenSensitivity: VV
            })
          }
        }), !(0, ZV.isMobile)() && (0, FV.jsx)(rV.m, {
          name: VV("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: xV.mouseSensitivity,
          onChange: VV => {
            wV.b.setClientEscMenuOptions({
              mouseSensitivity: VV
            })
          }
        }), !(0, ZV.isMobile)() && (0, FV.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, FV.jsx)("div", {
            className: "SliderText",
            children: VV("settingsMenu:keyBindings")
          }), UV.f.map((eV => (0, FV.jsx)(Mx, {
            title: VV(eV.name.translationKey, eV.name.params),
            defaultOpen: UV.g.has(eV.id),
            children: eV.actions.map((VV => (0, FV.jsx)(zx, {
              noaAction: VV,
              forceUpdate: tV,
              clashesWith: eV.clashesWith,
              showPadGlyph: TV
            }, VV)))
          }, eV.name.translationKey))), (0, FV.jsx)(nV.E, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, UV.A)(), tV()
            },
            children: VV("controls:resetBindings")
          })]
        })]
      })
    }

    function Mx(VV) {
      let {
        title: eV,
        defaultOpen: xV,
        children: JV
      } = VV;
      const [UV, yV] = (0, YV.useState)(xV);
      return (0, FV.jsxs)("div", {
        className: QV()("ControlsSection", {
          Collapsed: !UV
        }),
        children: [(0, FV.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            yV(!UV)
          },
          children: [(0, FV.jsx)("div", {
            className: "ControlsSectionTitle",
            children: eV
          }), (0, FV.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), UV && (0, FV.jsx)("div", {
          className: "ControlsSectionRows",
          children: JV
        })]
      })
    }

    function zx(VV) {
      let {
        noaAction: eV,
        forceUpdate: xV,
        clashesWith: pV,
        showPadGlyph: wV
      } = VV;
      const {
        t: ZV
      } = (0, JV.A)(), vV = (0, BV.e)(eV), [rV, kV] = (0, YV.useState)(!1), [bV, jV] = (0, YV.useState)("controls:clickToEnterNewBinding"), [qV, tV] = (0, YV.useState)(null), [TV, PV] = (0, YV.useState)(null), AV = (0, YV.useRef)(null);
      (0, YV.useEffect)((() => {
        rV && AV.current && AV.current.focus()
      }), [rV]);
      const NV = UV.t[eV].filter((VV => yV.g[VV]));
      let XV = null;
      const MV = [],
        zV = pV.flatMap((VV => {
          var eV, xV;
          return null !== (eV = null === (xV = UV.f.find((eV => eV.id === VV))) || void 0 === xV ? void 0 : xV.actions) && void 0 !== eV ? eV : []
        }));
      for (const JV of zV) {
        if (JV === eV) continue;
        const VV = UV.t[JV];
        for (const eV of VV) NV.includes(eV) && MV.push(ZV(UV.v[JV].translationKey, UV.v[JV].params))
      }
      MV.length > 0 && (XV = ZV("controls:sharedBindingsWarning") + " ", XV += MV.join(", "));
      const GV = () => {
          kV(!1), tV(null), jV("controls:clickToEnterNewBinding"), PV(null)
        },
        WV = () => "BindingInput_" + eV;
      return (0, FV.jsxs)("div", {
        className: QV()("ControlRow", {
          WarningBorder: null !== XV
        }),
        children: [(0, FV.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, FV.jsxs)("div", {
            className: "ControlName",
            children: [ZV(UV.v[eV].translationKey, UV.v[eV].params), wV && vV && (0, FV.jsx)(EV.c, {
              glyph: vV,
              className: "ControlPadGlyph"
            })]
          }), (0, FV.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, FV.jsxs)("div", {
              className: "ControlBindingsList",
              children: [NV.map((VV => (0, FV.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, FV.jsx)("div", {
                  children: (0, UV.l)(VV)
                }), (0, FV.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const JV = (0, UV.w)(eV, VV);
                    JV.isError() ? PV(JV.asError().message) : PV(null), xV()
                  },
                  children: "\xd7"
                })]
              }, VV))), !rV && (0, FV.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  kV(!0), PV(null)
                },
                children: (0, FV.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), rV && (0, FV.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, FV.jsxs)("div", {
                className: "InputContainer",
                children: [(0, FV.jsx)("div", {
                  className: "InputOverlay",
                  children: qV ? (0, UV.l)(qV) : (0, FV.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: ZV(bV)
                  })
                }), (0, FV.jsx)("input", {
                  ref: AV,
                  id: WV(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: VV => {
                    if ("Escape" === VV.code) return GV(), VV.preventDefault(), void VV.stopPropagation();
                    const eV = VV.code;
                    yV.c.includes(eV) ? (PV(null), tV(eV)) : (PV("controls:keyIsReserved"), tV(null)), VV.preventDefault(), VV.stopPropagation()
                  },
                  onMouseDown: VV => {
                    const eV = "Mouse" + (VV.button + 1);
                    document.activeElement && document.activeElement.id === WV() ? yV.c.includes(eV) ? (PV(null), tV(eV)) : (PV("controls:keyIsReserved"), tV(null)) : jV("controls:enterNewBinding"), VV.stopPropagation()
                  },
                  onBlur: () => {
                    jV("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, FV.jsx)(nV.f, {
                onPointerDown: VV => {
                  VV.preventDefault()
                },
                onClick: () => {
                  (0, UV.d)(eV, qV), xV(), GV()
                },
                className: "ControlBindingAddButton",
                disabled: null === qV,
                children: ZV("general:add")
              }), (0, FV.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  GV()
                },
                children: "\xd7"
              })]
            }), TV && (0, FV.jsx)("div", {
              className: "ControlBindingError",
              children: ZV(TV)
            })]
          })]
        }), XV && (0, FV.jsx)("div", {
          className: "ControlRowWarning",
          children: XV
        })]
      })
    }
  },
  9482: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(62),
      YV = xV(1414),
      UV = xV(1321);
    const yV = (0, JV.forwardRef)((function(VV, eV) {
      let {
        icon: xV,
        title: JV,
        sub: yV,
        expanded: pV,
        onClick: QV
      } = VV;
      return (0, UV.jsxs)("button", {
        ref: eV,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": pV,
        onClick: QV,
        children: [(0, UV.jsx)(YV.b, {
          name: xV,
          className: "FeaturedSettingsEntryIcon"
        }), (0, UV.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, UV.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: JV
          }), (0, UV.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: yV
          })]
        }), (0, UV.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  9301: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => BV,
      f: () => EV,
      h: () => wV,
      l: () => jV,
      m: () => qV,
      o: () => vV
    });
    var JV = xV(1764),
      YV = xV(1840);
    const UV = VV => VV >= 56320 && VV <= 57343,
      yV = VV => VV >= 55296 && VV <= 56319,
      pV = (VV, eV) => eV >= 2 && UV(VV.charCodeAt(eV - 1)) && yV(VV.charCodeAt(eV - 2)) ? eV - 2 : Math.max(0, eV - 1),
      QV = (VV, eV) => {
        let xV;
        var JV, YV;
        return xV = VV.start !== VV.end ? eV < 0 ? VV.start : VV.end : eV < 0 ? pV(VV.value, VV.start) : (JV = VV.value, (YV = VV.start) + 1 < JV.length && yV(JV.charCodeAt(YV)) && UV(JV.charCodeAt(YV + 1)) ? YV + 2 : Math.min(JV.length, YV + 1)), {
          value: VV.value,
          start: xV,
          end: xV
        }
      },
      nV = ["text", "search", "url", "email", "tel", "password", "number"],
      wV = VV => !(!(0, YV.b)(VV) || VV.isContentEditable || VV.hasAttribute("data-pad-no-osk")) && (VV instanceof HTMLTextAreaElement || VV instanceof HTMLInputElement && nV.includes(VV.type)),
      ZV = VV => null !== VV.selectionStart,
      vV = VV => {
        var eV, xV;
        const {
          value: JV
        } = VV;
        return {
          value: JV,
          start: null !== (eV = VV.selectionStart) && void 0 !== eV ? eV : JV.length,
          end: null !== (xV = VV.selectionEnd) && void 0 !== xV ? xV : JV.length
        }
      },
      rV = (VV, eV, xV) => {
        if (VV.readOnly) return;
        const YV = VV instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(YV, "value").set.call(VV, eV.value), ZV(VV) && VV.setSelectionRange(eV.start, eV.end), (0, JV.f)(VV, new InputEvent("input", {
          bubbles: !0,
          inputType: xV
        }))
      };
    let kV = !1;
    const bV = (VV, eV) => !!document.execCommand(VV, !1, eV) || (kV || (kV = !0, console.warn(`execCommand("${VV}") failed; the on-screen keyboard is setting the value directly`)), !1),
      EV = (VV, eV) => {
        bV("insertText", eV) || rV(VV, function(VV, eV) {
          let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const JV = VV.value.slice(0, VV.start),
            YV = VV.value.slice(VV.end);
          let UV = xV < 0 ? eV.length : Math.max(0, xV - JV.length - YV.length);
          UV > 0 && UV < eV.length && yV(eV.charCodeAt(UV - 1)) && UV--;
          const pV = eV.slice(0, UV),
            QV = JV.length + pV.length;
          return {
            value: JV + pV + YV,
            start: QV,
            end: QV
          }
        }(vV(VV), eV, VV.maxLength), "insertText")
      },
      BV = VV => {
        bV("delete") || rV(VV, (VV => {
          const eV = VV.start === VV.end ? pV(VV.value, VV.start) : VV.start;
          return {
            value: VV.value.slice(0, eV) + VV.value.slice(VV.end),
            start: eV,
            end: eV
          }
        })(vV(VV)), "deleteContentBackward")
      },
      jV = (VV, eV) => {
        if (!ZV(VV)) return;
        const xV = QV(vV(VV), eV);
        VV.setSelectionRange(xV.start, xV.end)
      },
      qV = VV => {
        ZV(VV) && 0 === VV.selectionStart && 0 === VV.selectionEnd && VV.setSelectionRange(VV.value.length, VV.value.length)
      }
  },
  9445: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV
    });
    var JV = xV(27),
      YV = xV(2259),
      UV = xV(1439),
      yV = xV(1473);
    const pV = async () => {
      if ((0, yV.m)()) {
        if (!0 !== await UV.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== JV.b.get("gameState")) return
      }(0, YV.f)()
    }
  },
  9453: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => QV,
      e: () => UV,
      f: () => yV,
      h: () => YV,
      i: () => pV
    });
    var JV = xV(2086);
    const YV = "controllerPadShopOpen",
      UV = VV => JV.i.includes(VV),
      yV = VV => Object.values(VV).some((VV => !1 !== VV.canBuy && !VV.isRewardedAd)),
      pV = (VV, eV, xV) => {
        var JV, YV, yV, pV;
        const QV = VV.filter((VV => !UV(VV))),
          nV = null !== eV && VV.includes(eV) ? eV : null;
        return null !== nV && !UV(nV) && xV(nV) ? nV : null !== (JV = null !== (YV = null !== (yV = null !== (pV = QV.find(xV)) && void 0 !== pV ? pV : QV[0]) && void 0 !== yV ? yV : nV) && void 0 !== YV ? YV : VV[0]) && void 0 !== JV ? JV : null
      },
      QV = VV => VV.userInput || VV.isRewardedAd || "boolean" === typeof VV.isSelected ? null : JSON.stringify([VV.image, VV.cost, VV.currency, VV.amount, VV.customTitle, VV.buyButtonText, VV.description, VV.canBuy])
  },
  9471: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => nV,
      h: () => wV
    });
    var JV = xV(62),
      YV = xV(1542),
      UV = xV(2147),
      yV = xV(1493),
      pV = xV(1528),
      QV = xV(1321);
    const nV = () => {
        const VV = (0, yV.r)();
        if ((0, JV.useEffect)((() => {
            (0, yV.j)()
          }), []), !VV) return null;
        const {
          ControllerCategory: eV
        } = VV;
        return (0, QV.jsx)(pV.c, {
          children: (0, QV.jsx)(eV, {})
        })
      },
      wV = () => {
        var VV;
        const eV = (0, yV.r)(),
          [, xV] = (0, JV.useReducer)((VV => VV + 1), 0);
        return (0, YV.g)(UV.d, xV), null !== (VV = null === eV || void 0 === eV ? void 0 : eV.hasActivePad()) && void 0 !== VV && VV
      }
  },
  9284: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => AV,
      D: () => nV,
      F: () => XV,
      G: () => TV,
      K: () => PV,
      L: () => EV,
      M: () => QV,
      O: () => wV,
      c: () => BV,
      g: () => NV,
      k: () => FV,
      m: () => tV,
      q: () => kV,
      r: () => bV,
      u: () => vV,
      y: () => rV
    });
    var JV = xV(32),
      YV = xV(1764),
      UV = xV(9293),
      yV = xV(9301),
      pV = xV(2550);
    const QV = VV => (0, yV.h)(VV),
      nV = VV => {
        const eV = VV.getBoundingClientRect();
        return {
          x: eV.left + eV.width / 2,
          y: eV.top + eV.height / 2
        }
      },
      wV = (VV, eV, xV) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: VV.x,
        clientY: VV.y,
        screenX: VV.x,
        screenY: VV.y,
        button: eV,
        buttons: xV,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      ZV = (VV, eV) => {
        (0, YV.f)(VV, eV)
      },
      vV = function(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const JV = 0 === xV ? 1 : 2;
        ZV(VV, new PointerEvent("pointerdown", wV(eV, xV, JV))), ZV(VV, new MouseEvent("mousedown", wV(eV, xV, JV)))
      },
      rV = function(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        ZV(VV, new PointerEvent("pointerup", wV(eV, xV, 0))), ZV(VV, new MouseEvent("mouseup", wV(eV, xV, 0)))
      },
      kV = function(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        vV(VV, eV, xV), rV(VV, eV, xV), ZV(VV, 0 === xV ? new MouseEvent("click", wV(eV, 0, 0)) : new MouseEvent("contextmenu", wV(eV, 2, 0)))
      },
      bV = function(VV, eV, xV) {
        let {
          leaveBelow: JV = null,
          enterBelow: YV = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (VV !== eV) {
          if (null !== VV && void 0 !== VV && VV.isConnected) {
            const YV = {
              ...wV(xV, 0, 0),
              relatedTarget: eV
            };
            ZV(VV, new PointerEvent("pointerout", YV)), ZV(VV, new MouseEvent("mouseout", YV));
            const UV = VV => !!eV && VV.contains(eV) || !!JV && VV.contains(JV);
            for (let eV = VV; eV && !UV(eV); eV = eV.parentElement) ZV(eV, new PointerEvent("pointerleave", {
              ...YV,
              bubbles: !1
            })), ZV(eV, new MouseEvent("mouseleave", {
              ...YV,
              bubbles: !1
            }))
          }
          if (eV) {
            const JV = {
              ...wV(xV, 0, 0),
              relatedTarget: VV
            };
            ZV(eV, new PointerEvent("pointerover", JV)), ZV(eV, new MouseEvent("mouseover", JV));
            const UV = [],
              yV = eV => !(null === VV || void 0 === VV || !VV.isConnected) && eV.contains(VV) || !!YV && eV.contains(YV);
            for (let VV = eV; VV && !yV(VV); VV = VV.parentElement) UV.push(VV);
            for (const VV of UV.reverse()) ZV(VV, new PointerEvent("pointerenter", {
              ...JV,
              bubbles: !1
            })), ZV(VV, new MouseEvent("mouseenter", {
              ...JV,
              bubbles: !1
            }));
            ZV(eV, new PointerEvent("pointermove", wV(xV, 0, 0))), ZV(eV, new MouseEvent("mousemove", wV(xV, 0, 0)))
          }
        } else eV && (ZV(eV, new PointerEvent("pointermove", wV(xV, 0, 0))), ZV(eV, new MouseEvent("mousemove", wV(xV, 0, 0))))
      },
      EV = VV => {
        JV.h.QZ(UV.f, VV)
      },
      BV = VV => {
        if (QV(VV)) return void EV(VV);
        const eV = VV.hasAttribute("data-pad-focusable") ? VV.querySelector("a[href]") : null,
          xV = null !== eV && void 0 !== eV ? eV : VV;
        kV(xV, nV(xV))
      },
      jV = ".Dropdown-root.is-open",
      qV = VV => {
        const eV = VV.querySelector(".Dropdown-control");
        return BV(eV), eV
      },
      tV = VV => {
        var eV;
        const xV = null !== (eV = VV.closest(jV)) && void 0 !== eV ? eV : VV.querySelector(jV);
        return xV ? qV(xV) : null
      },
      FV = VV => {
        for (const eV of document.querySelectorAll(jV)) eV.contains(VV) || qV(eV)
      },
      TV = VV => null !== VV.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      PV = VV => {
        const eV = VV ? document.elementFromPoint(VV.x, VV.y) : null;
        return !(null === eV || void 0 === eV || !eV.closest("[data-pad-repeat]"))
      },
      AV = VV => {
        var eV;
        return null !== (eV = [...VV.querySelectorAll("[data-pad-back]")].find(pV.n)) && void 0 !== eV ? eV : null
      },
      NV = VV => {
        const eV = AV(VV);
        return !!eV && (BV(eV), !0)
      },
      XV = VV => {
        var eV, xV, JV, YV;
        return null !== (eV = null !== (xV = null !== (JV = VV.getAttribute("data-pad-key")) && void 0 !== JV ? JV : VV.getAttribute("href")) && void 0 !== xV ? xV : null === (YV = VV.querySelector("a[href]")) || void 0 === YV ? void 0 : YV.getAttribute("href")) && void 0 !== eV ? eV : null
      }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);