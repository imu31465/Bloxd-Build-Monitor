export const id = 179;
export const ids = [179];
export const modules = {
  9988: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir
    });
    var Zr = Qr(26),
      Wr = Qr(1251),
      ar = Qr(5951),
      jr = Qr(1338);

    function Ir(rr) {
      let {
        note: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Wr.E)(), {
        clientEscMenuOptions: Ir
      } = (0, Zr.n)(["clientEscMenuOptions"]);
      return (0, jr.jsx)(ar.c, {
        label: Qr("touchSettings:actionButtons"),
        checked: Ir.touchActionButtons,
        onClick: rr => {
          Zr.c.setClientEscMenuOptions({
            touchActionButtons: rr
          })
        },
        circleInfoText: Qr("touchSettings:actionButtonsInfo"),
        note: Sr
      })
    }
  },
  9980: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => VQ,
      i: () => AQ
    });
    var Zr = Qr(1251),
      Wr = Qr(72),
      ar = Qr(2135),
      jr = Qr(2140),
      Ir = Qr(1155),
      fr = Qr.n(Ir),
      Er = Qr(1576),
      pr = Qr(26),
      xr = Qr(109),
      mr = Qr(124),
      Nr = Qr(5951),
      Ur = Qr(3404),
      tr = Qr(300),
      hr = Qr(2149),
      zr = Qr(2154),
      Yr = Qr(9986),
      nr = Qr(9988),
      er = Qr(360),
      Kr = Qr(1338);
    const yr = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var Br = Qr(1605),
      Tr = Qr(9996),
      vr = Qr(3443),
      Or = Qr(3504);
    var Lr = Qr(1e4);
    var lr = Qr(1475),
      Xr = Qr(10005),
      Pr = Qr(1541),
      Hr = Qr(1448),
      qr = Qr(10007);

    function Rr(rr) {
      let {
        className: Sr,
        keepPlace: Qr
      } = rr;
      return Qr ? (0, Kr.jsx)("div", {
        className: fr()(Sr, "Placeholder")
      }) : null
    }

    function gr(rr) {
      let {
        id: Sr,
        elements: Qr,
        actionButtons: Wr,
        keyNames: ar,
        className: jr,
        keepPlace: Ir,
        onHidden: fr
      } = rr;
      const {
        t: pr
      } = (0, Zr.E)();
      if (!qr.d[Sr].hide) return (0, Kr.jsx)(Rr, {
        className: jr,
        keepPlace: Ir
      });
      const xr = (0, vr.u)(Qr, Sr);
      return (0, Kr.jsx)(Er.U, {
        className: jr,
        ariaLabel: pr(xr ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: (0, qr.t)(Sr, Wr, pr, ar)
        }),
        pressed: !xr,
        onClick: () => {
          fr(Sr, !xr)
        },
        children: (0, Kr.jsx)(Hr.c, {
          name: xr ? "eye-slash" : "eye"
        })
      })
    }

    function Cr(rr) {
      let {
        id: Sr,
        elements: Qr,
        actionButtons: Wr,
        keyNames: ar,
        className: jr,
        keepPlace: Ir,
        onlyWhenMoved: fr,
        locked: pr,
        onReset: xr
      } = rr;
      const {
        t: mr
      } = (0, Zr.E)(), Nr = qr.d[Sr], Ur = (0, vr.L)(Qr[Sr]);
      return !Nr.move && !Nr.scale || fr && Ur ? (0, Kr.jsx)(Rr, {
        className: jr,
        keepPlace: Ir
      }) : (0, Kr.jsx)(Er.U, {
        className: jr,
        disabled: Ur || pr,
        ariaLabel: mr("hudLayout:resetElement", {
          name: (0, qr.t)(Sr, Wr, mr, ar)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: Sr
        },
        onClick: rr => {
          fr && Ar(rr.currentTarget), xr(Sr)
        },
        children: (0, Kr.jsx)(Hr.c, {
          name: "rotate-left"
        })
      })
    }

    function Mr(rr) {
      let {
        id: Sr,
        actionButtons: Qr,
        keyNames: Wr,
        className: ar,
        keepPlace: jr,
        locked: Ir,
        lockable: fr,
        onLocked: pr
      } = rr;
      const {
        t: xr
      } = (0, Zr.E)();
      return fr || Ir ? (0, Kr.jsx)(Er.U, {
        className: ar,
        ariaLabel: xr(Ir ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: (0, qr.t)(Sr, Qr, xr, Wr)
        }),
        pressed: Ir,
        active: Ir,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${Ir?"unlock":"lock"}:${Sr}`
        },
        onClick: () => {
          pr(Sr, !Ir)
        },
        children: (0, Kr.jsx)(Hr.c, {
          name: Ir ? "lock" : "lock-open"
        })
      }) : (0, Kr.jsx)(Rr, {
        className: ar,
        keepPlace: jr
      })
    }

    function Gr(rr) {
      let {
        className: Sr,
        open: Qr,
        name: Wr,
        onToggle: ar
      } = rr;
      const {
        t: jr
      } = (0, Zr.E)();
      return (0, Kr.jsx)(Er.U, {
        className: Sr,
        ariaLabel: jr(Qr ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: Wr
        }),
        pressed: Qr,
        analyticsClick: {
          id: "hud_layout.children",
          value: Qr ? "close" : "open"
        },
        onClick: () => {
          ar(!Qr)
        },
        children: (0, Kr.jsx)(Hr.c, {
          name: Qr ? "angle-up" : "angle-down"
        })
      })
    }

    function kr(rr, Sr) {
      var Qr;
      rr.contains(document.activeElement) && Sr.focus({
        preventScroll: !0
      }), null === (Qr = (0, Pr.g)()) || void 0 === Qr || Qr.handOverPadFocus(rr, Sr)
    }

    function Ar(rr) {
      const Sr = rr.closest("[data-hud-row]"),
        Qr = null === Sr || void 0 === Sr ? void 0 : Sr.querySelector(".HudElementRowName");
      return !(!Sr || !Qr) && (kr(Sr, Qr), !0)
    }
    const Vr = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function ir(rr, Sr) {
      return "joystick" === rr && !Sr
    }

    function wr() {
      const {
        t: rr
      } = (0, Zr.E)();
      return (0, Kr.jsx)(Er.U, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: rr => {
          const Sr = rr.currentTarget;
          if (!Ar(Sr)) {
            const rr = function(rr) {
              var Sr, Qr;
              const Zr = [rr.previousElementSibling, rr.nextElementSibling].find((rr => rr instanceof HTMLElement && rr.matches(Vr)));
              return null !== (Sr = null !== Zr && void 0 !== Zr ? Zr : null === (Qr = rr.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === Qr ? void 0 : Qr.querySelector(`:is(${Vr}):not(.HudFixJoystickButton)`)) && void 0 !== Sr ? Sr : null
            }(Sr);
            rr && kr(Sr, rr)
          }
          pr.c.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: rr("hudLayout:fixJoystick")
      })
    }
    var cr = Qr(92),
      Fr = Qr(1330),
      or = Qr(4302),
      br = Qr(3855),
      Jr = Qr(10011),
      Dr = Qr(10016),
      dr = Qr(3499),
      sr = Qr(3515),
      ur = Qr(4354),
      rS = Qr(379),
      SS = Qr(10024);
    const QS = rr => ({
      [qr.c]: rr
    });

    function ZS(rr) {
      let {
        id: Sr,
        slot: Qr,
        icon: Zr,
        label: ar,
        hidden: jr,
        className: Ir,
        face: Er
      } = rr;
      const pr = (0, Wr.useRef)(null);
      return (0, Wr.useLayoutEffect)((() => {
        Er && pr.current && (0, SS.p)(pr.current, Er)
      }), [Er]), (0, Kr.jsxs)("div", {
        className: fr()("TouchKeyHit", `TouchSlot${Qr}`, Ir, {
          HudPreviewGhost: jr.has(Sr)
        }),
        ...QS(Sr),
        children: [Er && (0, Kr.jsx)("div", {
          ref: pr,
          className: fr()("TouchKey", {
            Labelled: Er.classList.contains("Labelled")
          })
        }), !Er && (0, Kr.jsxs)("div", {
          className: fr()("TouchKey", {
            Labelled: void 0 !== ar
          }),
          children: [Zr && (0, Kr.jsx)(Hr.c, {
            name: Zr
          }), void 0 !== ar && (0, Kr.jsx)("span", {
            className: "TouchKeyLabel",
            children: ar
          })]
        })]
      })
    }

    function WS(rr) {
      let {
        item: Sr,
        selected: Qr
      } = rr;
      const Zr = (0, Wr.useRef)(null);
      return (0, Wr.useLayoutEffect)((() => {
        Zr.current && (0, SS.p)(Zr.current, Sr)
      }), [Sr]), (0, Kr.jsx)("div", {
        ref: Zr,
        className: fr()("InvenItem", {
          Selected: Qr
        })
      })
    }
    const aS = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      jS = rr => void 0 === rr ? {} : {
        style: {
          "--parked": rr
        }
      };

    function IS(rr) {
      let {
        id: Sr,
        hidden: Qr,
        parked: Zr,
        unslotted: Wr = !1
      } = rr;
      return (0, Kr.jsx)("div", {
        className: fr()("TopRightIcon", sr.p[Sr], {
          HudPreviewGhost: Qr.has(Sr),
          [dr.c]: void 0 !== Zr,
          [dr.d]: Wr
        }),
        ...jS(Zr),
        children: (0, Kr.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...QS(Sr),
          children: (0, Kr.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Kr.jsx)(Hr.c, {
              name: aS[Sr]
            })
          })
        })
      })
    }

    function fS(rr) {
      let {
        portraitPhone: Sr,
        icons: Qr,
        pinnedIcons: Zr,
        hidden: ar,
        moved: jr,
        trayState: Ir
      } = rr;
      const Er = Sr ? (0, dr.J)(Qr) : [],
        pr = Qr.filter((rr => "settings" === rr)),
        xr = Qr.filter((rr => "settings" !== rr && !Er.includes(rr))).reverse(),
        mr = Er.length > 0 && "gone" === Ir,
        Nr = [...pr, ...mr ? ["tray"] : [], ...xr].filter((rr => "tray" === rr || ar.has(rr) && !jr.has(rr))),
        Ur = rr => {
          const Sr = Nr.indexOf(rr);
          return Sr < 0 ? void 0 : Sr
        },
        tr = (rr, Sr) => (0, Kr.jsx)(IS, {
          id: rr,
          hidden: ar,
          parked: Sr ? Ur(rr) : void 0,
          unslotted: Sr && ar.has(rr) && jr.has(rr)
        }, rr);
      return (0, Kr.jsxs)("div", {
        className: fr()("TopRightIcons TouchInGame", {
          Column: Sr
        }),
        children: [pr.map((rr => tr(rr, !0))), Er.length > 0 && (0, Kr.jsxs)("div", {
          className: fr()("TopRightIcon TopRightTrayToggle Open", {
            [dr.c]: mr
          }),
          ...jS(Ur("tray")),
          children: [(0, Kr.jsx)("div", {
            className: fr()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== Ir
            }),
            children: (0, Kr.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, Kr.jsx)(Hr.c, {
                name: "ellipsis"
              })
            })
          }), (0, Kr.jsx)("div", {
            className: "TopRightTray",
            children: Er.map((rr => tr(rr, !1)))
          })]
        }), xr.map((rr => (0, Kr.jsxs)(Wr.Fragment, {
          children: ["perspective" === rr && null !== Zr.rightOfCamera && (0, Kr.jsx)(ES, {
            icon: Zr.rightOfCamera
          }), tr(rr, !0)]
        }, rr))), null !== Zr.leftEnd && (0, Kr.jsx)(ES, {
          icon: Zr.leftEnd
        })]
      })
    }

    function ES(rr) {
      let {
        icon: Sr
      } = rr;
      return (0, Kr.jsx)("div", {
        className: "TopRightIcon",
        children: (0, Kr.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, Kr.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Kr.jsx)(Hr.c, {
              name: Sr
            })
          })
        })
      })
    }

    function pS(rr) {
      let {
        next: Sr,
        hidden: Qr
      } = rr;
      return (0, Kr.jsx)("div", {
        className: fr()("HotBarArrow", Sr ? "Next" : "Previous", {
          HudPreviewGhost: Qr
        }),
        ...QS("arrows"),
        children: (0, Kr.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, Kr.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Kr.jsx)(Hr.c, {
              name: Sr ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function xS() {
      return (0, Kr.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, Kr.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, Kr.jsx)("div", {
            className: "SocialBar",
            children: (0, Kr.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, Kr.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, Kr.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, Kr.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, Kr.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Kr.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Kr.jsx)(Hr.c, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, Kr.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, Kr.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, Kr.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, Kr.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Kr.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Kr.jsx)(Hr.c, {
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
    const mS = [{
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

    function NS(rr) {
      let {
        ghost: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Zr.E)();
      return (0, Kr.jsx)("div", {
        className: fr()("EffectInfosWrapper", {
          HudPreviewGhost: Sr
        }),
        ...QS("effects"),
        children: mS.map((rr => {
          let {
            icon: Sr,
            labelKey: Zr,
            level: Wr,
            leftMs: ar
          } = rr;
          return (0, Kr.jsxs)("div", {
            className: "EffectInfo",
            children: [(0, Kr.jsx)("span", {
              className: "EffectInfoIcon HudPreviewEffectIcon",
              children: (0, Kr.jsx)(Hr.c, {
                name: Sr
              })
            }), (0, Kr.jsxs)("div", {
              className: fr()("EffectInfoRightSide", {
                Untimed: null === ar
              }),
              children: [(0, Kr.jsxs)("div", {
                className: "EffectInfoNameWrapper",
                children: [(0, Kr.jsx)("div", {
                  className: "EffectInfoName SmallTextBold",
                  children: Qr(Zr)
                }), Wr > 1 && (0, Kr.jsx)("div", {
                  className: "EffectInfoName SmallTextBold",
                  children: (0, rS.P)(Wr)
                })]
              }), null !== ar && (0, Kr.jsx)("div", {
                className: "EffectInfoDuration SmallTextLight",
                children: (0, rS.X)(ar)
              })]
            })]
          }, Zr)
        }))
      })
    }
    const US = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      tS = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      hS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      zS = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function YS(rr) {
      let {
        presence: Sr,
        portraitPhone: Qr,
        hidden: Wr,
        actionButtons: ar,
        joystickFixed: jr,
        keysAbove: Ir,
        auraBar: Er,
        trayState: pr,
        moved: mr
      } = rr;
      const {
        t: Nr
      } = (0, Zr.E)(), {
        faces: Ur,
        items: tr
      } = Sr, hr = rr => ({
        HudPreviewGhost: (0, qr.D)(rr).some((rr => Wr.has(rr)))
      });
      return (0, Kr.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, Kr.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, Kr.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, Kr.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, Kr.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, Kr.jsx)("div", {
              className: "InGameHeaderGameName",
              children: Nr("hudLayout:previewGameName")
            })]
          })
        }), (0, Kr.jsx)("div", {
          className: "TopLeftElements",
          children: (0, Kr.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, Kr.jsxs)("div", {
              className: "Chat",
              children: [(0, Kr.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [Nr("hudLayout:previewChatLine"), Nr("hudLayout:previewChatJoined", {
                  name: "Arthur"
                }), Nr("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((rr => (0, Kr.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, Kr.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, Kr.jsx)("div", {
                      className: "IndividualText",
                      children: rr
                    })
                  })
                }, rr)))
              }), (0, Kr.jsxs)("div", {
                className: "ChatIcons",
                children: [(0, Kr.jsx)("button", {
                  type: "button",
                  tabIndex: -1,
                  className: fr()("ChatIconWrapper SmallTextLight", hr("chat")),
                  ...QS("chat"),
                  children: (0, Kr.jsx)(Hr.c, {
                    name: "comment-dots",
                    className: "ChatIcon"
                  })
                }), (0, Kr.jsx)("div", {
                  className: "QuickChat",
                  children: (0, Kr.jsx)("button", {
                    type: "button",
                    tabIndex: -1,
                    className: fr()("QuickChatIconWrapper SmallTextLight", hr("quickChat")),
                    ...QS("quickChat"),
                    children: (0, Kr.jsx)(Hr.c, {
                      name: "comment-smile",
                      className: "QuickChatIcon"
                    })
                  })
                })]
              })]
            })
          })
        }), (0, Kr.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, Kr.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, Kr.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, Kr.jsx)("div", {
                className: "TopRightIconsContainer",
                ...QS("menu"),
                children: (0, Kr.jsx)(fS, {
                  portraitPhone: Qr,
                  icons: Sr.rowIcons,
                  pinnedIcons: Sr.pinnedIcons,
                  hidden: Wr,
                  trayState: pr,
                  moved: mr
                })
              })
            }), xr.featureFlags.useSocialFeatures && (0, Kr.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, Kr.jsx)(xS, {})
            })]
          })
        }), (0, Kr.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, Kr.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, Kr.jsxs)("div", {
            className: "TouchInteractKey",
            ...QS("interact"),
            children: [(0, Kr.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, Kr.jsx)(Hr.c, {
                name: "hand-back-point-up"
              })
            }), (0, Kr.jsx)("div", {
              children: Nr("hudLayout:previewInteract")
            })]
          })
        }), (0, Kr.jsx)("div", {
          className: "BottomCentre",
          children: (0, Kr.jsxs)("div", {
            className: "BottomElements",
            children: [(0, Kr.jsx)("div", {
              className: "BottomLeftElements Touch",
              children: (0, Kr.jsx)(NS, {
                ghost: Wr.has("effects")
              })
            }), (0, Kr.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, Kr.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...QS("hotbar"),
                children: (0, Kr.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, Kr.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, Kr.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, Kr.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, Kr.jsx)(Hr.c, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), Er && (0, Kr.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, Kr.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, Kr.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, ur.e)("glint"),
                    alt: ""
                  }), (0, Kr.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, Kr.jsx)("div", {
                  className: "AuraBar",
                  children: (0, Kr.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, Kr.jsx)("div", {
                className: "HotBarRow",
                children: (0, Kr.jsx)("div", {
                  className: fr()("HotBarContainer Touch", {
                    KeysAbove: Ir
                  }),
                  children: (0, Kr.jsxs)("div", {
                    className: "HotBar",
                    ...QS("hotbar"),
                    children: [(0, Kr.jsxs)("div", {
                      className: fr()("TouchInventoryKeys", {
                        NoAuraBar: !Er
                      }),
                      children: [(0, Kr.jsx)("div", {
                        className: fr()("TouchInventoryKey ShopKey", hr("shop"), {
                          Hidden: !Sr.shop
                        }),
                        ...QS("shop"),
                        children: (0, Kr.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Kr.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Kr.jsx)(Hr.c, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, Kr.jsx)("div", {
                        className: fr()("TouchInventoryKey BagKey", hr("bag"), {
                          Hidden: !Sr.bag
                        }),
                        ...QS("bag"),
                        children: (0, Kr.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Kr.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Kr.jsx)(Hr.c, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, Kr.jsx)(pS, {
                      next: !1,
                      hidden: Wr.has("arrows")
                    }), (0, Kr.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== tr && tr.map(((rr, Sr) => (0, Kr.jsx)(WS, {
                        item: rr,
                        selected: rr.classList.contains("Selected")
                      }, Sr))), null === tr && hS.map((rr => {
                        const Sr = zS[rr];
                        return (0, Kr.jsx)("div", {
                          className: fr()("InvenItem", {
                            Selected: 0 === rr
                          }),
                          children: Sr && (0, Kr.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, Kr.jsx)(Hr.c, {
                              name: Sr
                            })
                          })
                        }, rr)
                      }))]
                    }), (0, Kr.jsx)(pS, {
                      next: !0,
                      hidden: Wr.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, Kr.jsx)("div", {
              className: "BottomRightElements",
              children: (0, Kr.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== Ur && SS.l.map((rr => {
                  const Sr = Ur[rr];
                  return Sr && (0, Kr.jsx)(ZS, {
                    id: SS.i[rr],
                    slot: rr,
                    face: Sr,
                    className: US[rr],
                    hidden: Wr
                  }, rr)
                })), (0, SS.t)(Sr, ar).map((rr => (0, Kr.jsx)(ZS, {
                  id: SS.i[rr],
                  slot: rr,
                  icon: tS[rr].icon,
                  label: Nr(tS[rr].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: Wr
                }, rr))), null === Ur && (0, Kr.jsxs)(Kr.Fragment, {
                  children: [(0, Kr.jsx)(ZS, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: Wr
                  }), (0, Kr.jsx)(ZS, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: Wr
                  }), ar && (0, Kr.jsxs)(Kr.Fragment, {
                    children: [(0, Kr.jsx)(ZS, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: Wr
                    }), (0, Kr.jsx)(ZS, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: Wr
                    })]
                  }), (0, SS.n)(ar).map((rr => (0, Kr.jsx)(ZS, {
                    id: SS.i[rr],
                    slot: rr,
                    icon: tS[rr].icon,
                    label: Nr(tS[rr].labelKey),
                    hidden: Wr
                  }, rr))), (0, Kr.jsx)(ZS, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: Wr
                  }), (0, Kr.jsx)(ZS, {
                    id: "zoom",
                    slot: "Z",
                    icon: "magnifying-glass-plus",
                    hidden: Wr
                  }), (0, Kr.jsx)(ZS, {
                    id: "drop",
                    slot: "D",
                    icon: "hand-holding-box",
                    hidden: Wr
                  })]
                })]
              })
            })]
          })
        }), (0, Kr.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, Kr.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, Kr.jsxs)("div", {
              className: fr()("Joystick Resting HudPreviewJoystick", {
                Floating: !jr
              }),
              ...QS("joystick"),
              children: [(0, Kr.jsx)("div", {
                className: "JoystickBase"
              }), (0, Kr.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), Sr.sprint && (0, Kr.jsx)("div", {
            className: fr()("TouchSprintHit", hr("sprint"), {
              AtHome: !jr
            }),
            ...QS("sprint"),
            children: (0, Kr.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, Kr.jsx)(Hr.c, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function nS() {
      const [rr, Sr] = (0, Wr.useState)({}), Qr = (0, Wr.useCallback)((rr => {
        Sr((Sr => [...new Set([...Object.keys(Sr), ...Object.keys(rr)])].every((Qr => Sr[Qr] === rr[Qr])) ? Sr : rr))
      }), []);
      return [rr, Qr]
    }
    const eS = .05;

    function KS(rr) {
      var Sr;
      let {
        selected: Qr,
        layout: Wr,
        actionButtons: ar,
        keyNames: jr,
        overlaps: Ir,
        scaleCaps: pr,
        joystickFixed: xr,
        onScale: mr,
        onHidden: Nr,
        onReset: Ur,
        locked: tr,
        lockable: hr,
        onLocked: zr,
        extra: Yr
      } = rr;
      const {
        t: nr
      } = (0, Zr.E)(), er = Qr ? qr.d[Qr] : null, yr = null !== Qr && tr.has(Qr), Br = Qr ? (0, vr.F)(Wr.hudElements, Qr)[2] : 1, Tr = null !== (Sr = Qr && pr[Qr]) && void 0 !== Sr ? Sr : vr.i, Or = rr => {
        Qr && mr(Qr, Math.min(Tr, Math.round(100 * (Br + .1 * rr)) / 100))
      };
      return (0, Kr.jsxs)(Kr.Fragment, {
        children: [(0, Kr.jsxs)("div", {
          className: fr()("HudQuickName SmallTextBold", {
            Overlap: Ir.length > 0
          }),
          children: [Ir.length > 0 && (0, Kr.jsx)(Hr.c, {
            name: "triangle-exclamation"
          }), er ? (0, qr.t)(er.id, ar, nr, jr) : nr("hudLayout:fullScreenHint"), Ir.length > 0 && (0, Kr.jsx)("span", {
            className: "HudQuickOverlap",
            children: nr("hudLayout:overlapsShort", {
              names: (0, qr.s)(Ir, ar, nr, jr)
            })
          })]
        }), (null === er || void 0 === er ? void 0 : er.scale) && (0, Kr.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, Kr.jsx)(Er.U, {
            disabled: yr || Br <= vr.m,
            ariaLabel: nr("hudLayout:smaller"),
            onClick: () => {
              Or(-1)
            },
            children: (0, Kr.jsx)(Hr.c, {
              name: "minus"
            })
          }), (0, Kr.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*Br)}%`
          }), (0, Kr.jsx)(Er.U, {
            disabled: yr || Br >= Tr,
            ariaLabel: nr("hudLayout:larger"),
            onClick: () => {
              Or(1)
            },
            children: (0, Kr.jsx)(Hr.c, {
              name: "plus"
            })
          })]
        }), (er || Yr) && (0, Kr.jsxs)("div", {
          className: "HudQuickActions",
          children: [er && (0, Kr.jsxs)(Kr.Fragment, {
            children: [(0, Kr.jsx)(Mr, {
              id: er.id,
              actionButtons: ar,
              keyNames: jr,
              locked: yr,
              lockable: hr(er.id),
              onLocked: zr
            }), (0, Kr.jsx)(gr, {
              id: er.id,
              elements: Wr.hudElements,
              actionButtons: ar,
              keyNames: jr,
              onHidden: Nr
            }), (0, Kr.jsx)(Cr, {
              id: er.id,
              elements: Wr.hudElements,
              actionButtons: ar,
              keyNames: jr,
              locked: yr,
              onReset: Ur
            }), ir(er.id, xr) && (0, Kr.jsx)(wr, {})]
          }), Yr]
        })]
      })
    }
    var yS = Qr(1171),
      BS = Qr(5146);
    const TS = "HudPreviewDoc",
      vS = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      OS = new Set([TS, ...Object.values(vS)]),
      LS = new Set(vr.z.map(sr.F)),
      lS = new Set(sr.i),
      XS = 'style, link[rel="stylesheet"]';

    function PS(rr, Sr, Qr, Zr) {
      const Wr = new Map,
        ar = new Set,
        jr = new URL(rr.baseURI).origin,
        Ir = Sr => {
          var Qr;
          if ("LINK" !== Sr.nodeName) return !0;
          const Zr = null === (Qr = Sr.getAttribute("href")) || void 0 === Qr ? void 0 : Qr.trim();
          if (!Zr) return !1;
          try {
            return new URL(Zr, rr.baseURI).origin === jr
          } catch {
            return !1
          }
        };
      let fr = null;
      const Er = () => {
          fr !== (0 === ar.size) && (fr = 0 === ar.size, null === Zr || void 0 === Zr || Zr(fr))
        },
        pr = rr => {
          const Sr = rr.cloneNode(!0);
          if ("LINK" === Sr.tagName) {
            ar.add(Sr);
            const rr = () => {
              ar.delete(Sr), Er()
            };
            Sr.addEventListener("load", rr), Sr.addEventListener("error", rr), Qr && Sr.addEventListener("load", Qr)
          }
          return Sr
        },
        xr = () => {
          const Zr = function(rr) {
              const Sr = [...rr.body.children].filter((rr => rr.matches(XS)));
              return [...rr.head.querySelectorAll(XS), ...Sr]
            }(rr).filter(Ir),
            jr = new Set(Zr);
          for (const [rr, Sr] of Wr) jr.has(rr) || (Sr.remove(), Wr.delete(rr), ar.delete(Sr));
          let fr = null;
          for (let rr = Zr.length - 1; rr >= 0; rr--) {
            const ar = Zr[rr];
            let jr = Wr.get(ar);
            jr ? "STYLE" === ar.tagName && jr.textContent !== ar.textContent && (jr.textContent = ar.textContent, null === Qr || void 0 === Qr || Qr()) : (jr = pr(ar), Wr.set(ar, jr), Sr.head.insertBefore(jr, fr)), fr = jr
          }
          Er()
        };
      xr();
      const mr = new MutationObserver(xr);
      return mr.observe(rr.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), mr.observe(rr.body, {
        childList: !0
      }), () => {
        mr.disconnect()
      }
    }

    function HS(rr, Sr, Qr) {
      let {
        keysAbove: Zr
      } = Qr;
      const Wr = [...rr.documentElement.classList].filter((rr => !OS.has(rr) && !lS.has(rr))),
        ar = [...Sr.documentElement.classList].filter((rr => lS.has(rr))),
        jr = [TS, vS.hotbar, vS.hasShop, vS.hasBag];
      Zr && jr.push(vS.keysAbove), Sr.documentElement.className = [...Wr, ...jr, ...ar].join(" ")
    }
    const qS = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function RS(rr, Sr, Qr, Zr, Wr) {
      const ar = (0, vr.D)(Qr, Zr, "joystick"),
        jr = (0, sr.G)((0, sr.P)(Qr, Zr, Wr), Zr),
        Ir = jr.classes.filter((rr => !LS.has(rr))),
        fr = Sr.documentElement,
        Er = Qr.hudLayouts[Zr].hudSafe,
        pr = (0, sr.I)(Er, window.innerWidth, window.innerHeight, gS(), Er ? (0, sr.R)(Sr) : 0);
      (0, sr.U)({
        ...jr,
        classes: Ir
      }, {
        vars: fr,
        safe: fr,
        classes: fr
      }), fr.style.setProperty("--preview-joystick-shift-left", `${pr[3]}px`), fr.style.setProperty("--preview-joystick-shift-bottom", `${pr[2]}px`), fr.style.setProperty("--preview-joystick-scale", String(ar[2])), (0, BS.h)(fr, Sr, Qr, Zr);
      for (const xr of qS) fr.style.setProperty(xr, rr.documentElement.style.getPropertyValue(xr) || "0px")
    }

    function gS() {
      return (0, sr.M)(pr.c.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function CS(rr) {
      return (0, sr.y)(gS(), (0, sr.R)(rr))
    }

    function MS(rr, Sr, Qr) {
      const Zr = rr.documentElement.style,
        Wr = (0, sr.K)(Sr),
        ar = Zr.getPropertyValue(Wr);
      try {
        return Qr((rr => {
          Zr.setProperty(Wr, String(rr))
        }))
      } finally {
        "" === ar ? Zr.removeProperty(Wr) : Zr.setProperty(Wr, ar)
      }
    }

    function GS(rr, Sr) {
      const [Qr, Zr] = MS(rr, "hotbar", (Sr => {
        const Qr = Qr => {
          var Zr, Wr;
          return Sr(Qr), null !== (Zr = null === (Wr = rr.querySelector(".HotBarGameItemsContainer")) || void 0 === Wr ? void 0 : Wr.getBoundingClientRect().width) && void 0 !== Zr ? Zr : 0
        };
        return [Qr(1), Qr(vr.i)]
      }));
      return Qr <= 0 ? vr.i : Math.min(vr.i, Math.max(1, Math.floor(Zr / Qr / Sr + 1e-6) * Sr))
    }
    const kS = 3,
      AS = .5,
      VS = rr => rr.right - rr.left;
    const iS = (rr, Sr) => Math.abs((0, Jr.e)(rr).x - (0, Jr.e)(Sr).x) + Math.abs((0, Jr.e)(rr).y - (0, Jr.e)(Sr).y) + Math.abs(VS(rr) - VS(Sr));

    function wS(rr, Sr, Qr, Zr, Wr) {
      let {
        canKeep: ar = () => !0,
        passes: jr = kS,
        before: Ir
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const fr = Sr.hudLayouts[Qr].hudLocked.filter(ar);
      if (0 === fr.length) return Sr;
      const Er = [...qr.b].filter((Zr => !fr.includes(Zr) && (0, vr.D)(rr, Qr, Zr).join() === (0, vr.D)(Sr, Qr, Zr).join())),
        pr = rr => {
          const Sr = (0, Jr.M)(Er.flatMap((Sr => rr[Sr] ? [rr[Sr]] : [])));
          return {
            ...rr,
            cluster: null !== Sr && void 0 !== Sr ? Sr : void 0
          }
        };
      let xr = null;
      const mr = rr => {
          xr = rr;
          const Sr = Wr(rr);
          return Sr && {
            ...Sr,
            boxes: pr(Sr.boxes)
          }
        },
        Nr = Ir ? {
          ...Ir,
          boxes: pr(Ir.boxes)
        } : mr(rr),
        Ur = Nr && mr(Sr);
      if (!Nr || !Ur) return Sr;
      const tr = Nr.boxes;
      let hr = Ur.boxes;
      const zr = Nr.keysAbove !== Ur.keysAbove,
        Yr = zr || Boolean(Nr.shopAlone) !== Boolean(Ur.shopAlone),
        nr = new Set(fr.filter((rr => !(0, qr.u)(rr) || !("bag" === rr ? zr : Yr))));
      let er = Sr;
      for (let Br = 0; Br < jr && nr.size > 0; Br++) {
        var Kr, yr;
        const rr = new Map;
        for (const Sr of nr) {
          const Wr = tr[Sr],
            ar = hr[Sr],
            jr = Wr && ar ? cS(Sr, (0, vr.D)(er, Qr, Sr), Wr, ar, Zr) : null;
          jr ? rr.set(Sr, jr) : nr.delete(Sr)
        }
        if (0 === rr.size) break;
        let Wr = er;
        for (const [Sr, Zr] of rr) Wr = (0, vr.kb)(Wr, Qr, Sr, Zr);
        const ar = null === (Kr = mr(Wr)) || void 0 === Kr ? void 0 : Kr.boxes;
        if (!ar) return Sr;
        let jr = er;
        for (const [Sr, Zr] of rr) {
          const rr = ar[Sr];
          rr && iS(tr[Sr], rr) < iS(tr[Sr], hr[Sr]) - AS ? jr = (0, vr.kb)(jr, Qr, Sr, Zr) : nr.delete(Sr)
        }
        if (jr === er) break;
        const Ir = [...rr.keys()].every((rr => nr.has(rr)));
        er = Ir ? Wr : jr;
        const fr = Ir ? ar : null === (yr = mr(er)) || void 0 === yr ? void 0 : yr.boxes;
        if (!fr) return Sr;
        hr = fr
      }
      return xr !== er && Wr(er), er
    }

    function cS(rr, Sr, Qr, Zr, Wr) {
      let [ar, jr, Ir] = Sr;
      const fr = vr.x[rr],
        Er = {};
      fr.scale && VS(Zr) > 0 && Math.abs(VS(Qr) - VS(Zr)) > AS && (Er.scale = Math.max(vr.m, Math.min(vr.i, Ir * VS(Qr) / VS(Zr))));
      const pr = (0, Jr.e)(Qr).x - (0, Jr.e)(Zr).x,
        xr = (0, Jr.e)(Qr).y - (0, Jr.e)(Zr).y;
      return fr.move && (Math.abs(pr) > AS || Math.abs(xr) > AS) && (Er.dx = ar + pr / Wr.width, Er.dy = jr + xr / Wr.height), void 0 === Er.scale && void 0 === Er.dx ? null : Er
    }
    let FS = 0;

    function oS() {
      return FS > 0
    }
    const bS = rr => 0 === rr.dx && 0 === rr.dy,
      JS = .001,
      DS = rr => Math.abs(rr.dx) >= 5e-4 || Math.abs(rr.dy) >= 5e-4 ? rr : {
        dx: rr.dx,
        dy: rr.dy < 0 ? -.001 : JS
      };

    function dS(rr) {
      let {
        preview: Sr,
        stageRef: Qr,
        ringRef: Zr,
        centreLineRef: ar,
        snapCentre: jr,
        ready: Ir,
        measure: fr,
        k: Er,
        viewport: pr,
        boxes: xr,
        pieces: mr,
        selected: Nr,
        insets: Ur,
        layout: tr,
        canMove: hr,
        onSelect: zr,
        onMove: Yr
      } = rr;
      const nr = (0, Wr.useRef)(null),
        er = (0, Wr.useCallback)((() => null !== nr.current), []),
        Kr = (rr, Sr) => {
          if (!Sr) return null;
          const Qr = (0, Jr.e)(rr.origin),
            Zr = (0, Jr.e)(Sr),
            Wr = (rr.to.dx - rr.from.dx) * pr.width,
            ar = (rr.to.dy - rr.from.dy) * pr.height,
            jr = Sr.right - Sr.left,
            Ir = Sr.bottom - Sr.top;
          return {
            skew: {
              x: Zr.x - Qr.x - Wr,
              y: Zr.y - Qr.y - ar
            },
            box: {
              left: Qr.x - jr / 2,
              top: Qr.y - Ir / 2,
              right: Qr.x + jr / 2,
              bottom: Qr.y + Ir / 2
            }
          }
        },
        yr = (rr, Qr) => {
          var Wr;
          const jr = nr.current;
          if (!jr || jr.pointerId !== rr.pointerId) return;
          nr.current = null, null === (Wr = ar.current) || void 0 === Wr || Wr.classList.remove("Shown", "Snapped");
          const Ir = Zr.current;
          if (Ir && null !== jr.ringStyle && Ir.setAttribute("style", jr.ringStyle), Qr && jr.moved) {
            const rr = bS(jr.to) ? null : fr(jr.id),
              Sr = rr ? (0, Jr.K)(rr, (0, Jr.G)(pr.width, pr.height, Ur)) : {
                x: 0,
                y: 0
              },
              Qr = {
                dx: jr.to.dx + Sr.x / pr.width,
                dy: jr.to.dy + Sr.y / pr.height
              },
              Zr = bS(jr.to) ? Qr : DS(Qr);
            Yr(jr.id, Zr.dx, Zr.dy)
          } else Sr(jr.id, null), Qr && jr.tapPick && zr(jr.tapPick)
        };
      return {
        busy: er,
        handlers: {
          onPointerDown: rr => {
            var Sr;
            if (!Ir || nr.current || !rr.target.closest(".HudPreviewHandle")) return;
            const Zr = Qr.current.getBoundingClientRect(),
              Wr = {
                x: (rr.clientX - Zr.left) / Er,
                y: (rr.clientY - Zr.top) / Er
              },
              ar = (0, Jr.A)(Wr, mr, 40 / Er),
              jr = null !== Nr ? qr.k.get(Nr) : void 0,
              fr = void 0 !== jr && null !== (0, Jr.A)(Wr, mr.filter((rr => {
                let {
                  id: Sr
                } = rr;
                return jr.has(Sr)
              })), 40 / Er),
              pr = "menu" === Nr && void 0 !== xr.menu && (0, Jr.i)(xr.menu, Wr) && ("menu" === ar || null !== ar && (0, dr.B)(ar, tr.hudElements[ar])),
              Ur = fr ? Nr : pr ? "menu" : null,
              Yr = null !== Ur,
              er = null !== Ur && void 0 !== Ur ? Ur : ar;
            if (!er) return;
            if (function(rr) {
                FS++;
                const Sr = Qr => {
                  Qr.pointerId === rr && (FS = Math.max(0, FS - 1), window.removeEventListener("pointerup", Sr, !0), window.removeEventListener("pointercancel", Sr, !0))
                };
                window.addEventListener("pointerup", Sr, !0), window.addEventListener("pointercancel", Sr, !0)
              }(rr.pointerId), !hr(er)) return void zr(Yr && ar ? ar : er);
            zr(er);
            const [Kr, yr] = null !== (Sr = tr.hudElements[er]) && void 0 !== Sr ? Sr : [0, 0], Br = {
              dx: Kr,
              dy: yr
            }, Tr = {
              skew: {
                x: 0,
                y: 0
              },
              box: xr[er]
            };
            nr.current = {
              id: er,
              pointerId: rr.pointerId,
              startX: rr.clientX,
              startY: rr.clientY,
              origin: xr[er],
              from: Br,
              to: Br,
              moved: !1,
              home: bS(Br) ? {
                centre: (0, Jr.e)(xr[er]),
                anchor: Tr
              } : null,
              away: bS(Br) ? null : Tr,
              anchor: Tr,
              ringStyle: null,
              tapPick: Yr ? ar : null
            }, rr.currentTarget.setPointerCapture(rr.pointerId)
          },
          onPointerMove: rr => {
            const Qr = nr.current;
            if (!Qr || Qr.pointerId !== rr.pointerId) return;
            const Wr = rr.clientX - Qr.startX,
              Ir = rr.clientY - Qr.startY;
            if (!Qr.moved && Math.hypot(Wr, Ir) < 5) return;
            const xr = !Qr.moved;
            var mr, Nr;
            (Qr.moved = !0, xr) && (Qr.ringStyle = null !== (mr = null === (Nr = Zr.current) || void 0 === Nr ? void 0 : Nr.getAttribute("style")) && void 0 !== mr ? mr : null);
            const tr = (0, Jr.G)(pr.width, pr.height, Ur);
            if (!Qr.home) {
              var hr;
              Qr.to = {
                dx: 0,
                dy: 0
              }, Sr(Qr.id, Qr.to);
              const rr = fr(Qr.id),
                Zr = null !== (hr = Kr(Qr, rr)) && void 0 !== hr ? hr : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: Qr.origin
                },
                Wr = (0, Jr.e)(Qr.origin);
              Qr.home = {
                centre: rr ? (0, Jr.e)(rr) : {
                  x: Wr.x - Qr.from.dx * pr.width,
                  y: Wr.y - Qr.from.dy * pr.height
                },
                anchor: Zr
              }
            }
            const zr = Qr.home;
            let Yr = !1;
            const er = rr => {
                Yr = !1;
                let Zr = (0, Jr.t)(rr.box, Wr / Er, Ir / Er, tr);
                const ar = pr.width / 2;
                if (jr && Math.abs((0, Jr.e)(Qr.origin).x + Zr.x - ar) <= 8 / Er) {
                  const Sr = ar - (0, Jr.e)(Qr.origin).x,
                    Wr = (0, Jr.t)(rr.box, Sr, Zr.y, tr);
                  Yr = Math.abs(Wr.x - Sr) < .01, Yr && (Zr = Wr)
                }
                const fr = (0, Jr.z)(Qr.from, Zr.x - rr.skew.x, Zr.y - rr.skew.y, pr.width, pr.height);
                Qr.to = DS(fr), Qr.anchor = rr, Sr(Qr.id, Qr.to)
              },
              yr = (0, Jr.t)(zr.anchor.box, Wr / Er, Ir / Er, tr),
              Br = ar.current,
              Tr = (0, Jr.e)(Qr.origin),
              Or = ((0, vr.P)(Qr.id) ? 20 : 6) / Er;
            if (Math.abs(Tr.x + yr.x - zr.centre.x) <= Or && Math.abs(Tr.y + yr.y - zr.centre.y) <= Or) Qr.to = {
              dx: 0,
              dy: 0
            }, Qr.anchor = zr.anchor, Yr = jr && Math.abs(zr.centre.x - pr.width / 2) < 1, Sr(Qr.id, Qr.to);
            else if (Qr.away) er(Qr.away);
            else {
              var Lr;
              er(zr.anchor), Qr.away = null !== (Lr = Kr(Qr, fr(Qr.id))) && void 0 !== Lr ? Lr : zr.anchor, er(Qr.away)
            }
            null === Br || void 0 === Br || Br.classList.add("Shown"), null === Br || void 0 === Br || Br.classList.toggle("Snapped", Yr), (rr => {
              const Sr = Zr.current;
              if (Sr) {
                const {
                  skew: Qr,
                  box: Zr
                } = rr.anchor;
                Sr.style.left = Zr.left * Er + "px", Sr.style.top = Zr.top * Er + "px", Sr.style.width = (Zr.right - Zr.left) * Er + "px", Sr.style.height = (Zr.bottom - Zr.top) * Er + "px", Sr.style.translate = `${((rr.to.dx-rr.from.dx)*pr.width+Qr.x)*Er}px ${((rr.to.dy-rr.from.dy)*pr.height+Qr.y)*Er}px`
              }
            })(Qr)
          },
          onPointerUp: rr => {
            yr(rr, !0)
          },
          onPointerCancel: rr => {
            yr(rr, !1)
          }
        }
      }
    }
    var sS = Qr(10027);

    function uS(rr, Sr) {
      return Object.keys(rr).filter((rr => rr !== Sr)).map((Sr => rr[Sr]))
    }

    function rQ(rr) {
      return rr.map((rr => {
        let {
          id: Sr,
          box: Qr
        } = rr;
        return `${Sr}:${Qr.left},${Qr.top},${Qr.right},${Qr.bottom}`
      })).join(";")
    }

    function SQ(rr) {
      const Sr = [],
        Qr = Sr => (0, vr.P)(Sr) && !rr.documentElement.classList.contains((0, sr.H)(Sr));
      for (const Ir of rr.querySelectorAll(`[${qr.c}]`)) {
        const rr = Qr(Ir.getAttribute(qr.c)) ? Ir.querySelector(".ScaleOnHover") : null,
          Zr = (null !== rr && void 0 !== rr ? rr : Ir).getBoundingClientRect();
        (Zr.width > 0 || Zr.height > 0) && Sr.push({
          id: Ir.getAttribute(qr.c),
          box: (0, Jr.m)(Zr)
        })
      }
      const Zr = rr => (0, Jr.M)(Sr.filter((Sr => {
          let {
            id: Qr
          } = Sr;
          return rr(Qr)
        })).map((rr => {
          let {
            box: Sr
          } = rr;
          return Sr
        }))),
        Wr = {};
      for (const Ir of new Set(Sr.map((rr => rr.id)))) Wr[Ir] = Zr((rr => rr === Ir));
      for (const [Ir, fr] of qr.k) {
        const rr = Zr((rr => fr.has(rr)));
        rr && (Wr[Ir] = rr)
      }
      const ar = rr.querySelector(".TouchInventoryKeys"),
        jr = ar ? (0, Jr.m)(ar.getBoundingClientRect()) : null;
      return {
        boxes: Wr,
        pieces: Sr,
        pairHome: jr
      }
    }

    function QQ(rr, Sr, Qr) {
      const Zr = Sr.right - Sr.left,
        Wr = Sr.bottom - Sr.top;
      return MS(rr, "cluster", (Sr => {
        const ar = Qr => {
            Sr(Qr);
            const Zr = [...rr.querySelectorAll(`[${qr.c}]:not(.HudPreviewGhost)`)].filter((rr => qr.b.has(rr.getAttribute(qr.c)))).map((rr => (0, Jr.m)(rr.getBoundingClientRect()))),
              Wr = (0, Jr.M)(Zr);
            return Wr ? {
              w: Wr.right - Wr.left,
              h: Wr.bottom - Wr.top
            } : null
          },
          jr = rr => !rr || rr.w <= Zr && rr.h <= Wr,
          Ir = ar(1),
          fr = ar(vr.i);
        if (!Ir || jr(fr)) return vr.i;
        const Er = (rr, Sr, Qr) => Sr > rr ? 1 + (Qr - rr) * (vr.i - 1) / (Sr - rr) : vr.i;
        let pr = Math.floor(Math.min(vr.i, Er(Ir.w, fr.w, Zr), Er(Ir.h, fr.h, Wr)) / Qr + 1e-6) * Qr;
        for (; pr > 1 && !jr(ar(pr));) pr = Math.round(100 * (pr - Qr)) / 100;
        return Math.max(1, pr)
      }))
    }

    function ZQ(rr) {
      HS(document, rr, {
        keysAbove: !1
      });
      const Sr = parseFloat(getComputedStyle(rr.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        Qr = Number.isFinite(Sr) && Sr < 0;
      return HS(document, rr, {
        keysAbove: Qr
      }), (0, sS.e)(rr), Qr
    }

    function WQ(rr) {
      const Sr = rr.querySelector(".TouchInventoryKey.ShopKey");
      return null !== Sr && "1" === getComputedStyle(Sr).getPropertyValue("--touch-shop-above").trim()
    }

    function aQ(rr, Sr) {
      let {
        layout: Qr,
        orientation: Zr,
        viewport: ar,
        replicaKey: jr,
        joystickFixed: Ir,
        busy: fr
      } = Sr;
      const [Er, pr] = (0, Wr.useState)(null), [xr, mr] = (0, Wr.useState)({
        boxes: {},
        pieces: []
      }), [Nr, Ur] = (0, Wr.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [tr, hr] = (0, Wr.useState)(!1), [zr, Yr] = (0, Wr.useState)(!1), [nr, er] = (0, Wr.useState)(!1), Kr = (0, Wr.useCallback)((rr => {
        Yr(rr), rr && er(!0)
      }), []), yr = Qr.hudLayouts[Zr].hudSafe;
      (0, Wr.useLayoutEffect)((() => {
        const Sr = rr.current.contentDocument;
        Sr.open(), Sr.write("<!DOCTYPE html><html><head></head><body></body></html>"), Sr.close(), pr(Sr)
      }), [rr]);
      const Br = (0, Wr.useCallback)((() => {
          Er && ((0, dr.E)(Er), mr(SQ(Er)), Ur(function(rr, Sr) {
            const Qr = CS(rr),
              [Zr, Wr, ar, jr] = Sr ? (0, sr.C)(Sr, window.innerWidth, window.innerHeight, Qr) : Qr;
            return {
              top: Zr,
              right: Wr,
              bottom: ar,
              left: jr
            }
          }(Er, yr)))
        }), [Er, yr]),
        Tr = (0, Wr.useCallback)((() => {
          Er && hr(ZQ(Er))
        }), [Er]),
        vr = (0, Wr.useRef)((() => {}));
      return vr.current = () => {
        Tr(), fr() || Br()
      }, (0, Wr.useLayoutEffect)((() => {
        if (Er) return PS(document, Er, (() => {
          vr.current()
        }), Kr)
      }), [Er, Kr]), (0, Wr.useLayoutEffect)(Tr, [Tr, ar]), (0, Wr.useLayoutEffect)((() => {
        Er && (HS(document, Er, {
          keysAbove: tr
        }), RS(document, Er, Qr, Zr, Ir), Tr(), Br())
      }), [Er, Qr, Zr, tr, jr, Ir, ar, Br, Tr]), (0, Wr.useEffect)((() => {
        var rr;
        if (!Er) return;
        const Sr = new ResizeObserver((() => {
          fr() || Br()
        }));
        for (const Qr of Er.querySelectorAll(`[${qr.c}]`)) Sr.observe(Qr);
        return null === (rr = Er.fonts) || void 0 === rr || rr.ready.then(Br), () => {
          Sr.disconnect()
        }
      }), [Er, Br, fr, jr]), {
        doc: Er,
        boxes: xr.boxes,
        pieces: xr.pieces,
        insets: Nr,
        keysAbove: tr,
        ready: zr,
        settled: nr
      }
    }
    const jQ = ["Above", "Below", "Left", "Right"];

    function IQ(rr, Sr, Qr, Zr, Wr) {
      const ar = Qr[rr],
        jr = (ar.left + ar.right) / 2,
        Ir = (ar.top + ar.bottom) / 2,
        fr = (7.5 * Sr.length + 14) / Zr,
        Er = 18 / Zr,
        pr = {
          Above: {
            left: jr - fr / 2,
            top: ar.top - Er,
            right: jr + fr / 2,
            bottom: ar.top
          },
          Below: {
            left: jr - fr / 2,
            top: ar.bottom,
            right: jr + fr / 2,
            bottom: ar.bottom + Er
          },
          Left: {
            left: ar.left - fr,
            top: Ir - Er / 2,
            right: ar.left,
            bottom: Ir + Er / 2
          },
          Right: {
            left: ar.right,
            top: Ir - Er / 2,
            right: ar.right + fr,
            bottom: Ir + Er / 2
          }
        },
        xr = uS(Qr, rr),
        mr = {
          left: 0,
          top: 0,
          right: Wr.width,
          bottom: Wr.height
        };
      return jQ[(0, Jr.w)(jQ.map((rr => pr[rr])), xr, {
        bounds: mr
      })]
    }

    function fQ() {
      const [rr, Sr] = (0, or.e)();
      return (0, Wr.useMemo)((() => ({
        width: rr,
        height: Sr
      })), [rr, Sr])
    }

    function EQ(rr) {
      var Sr;
      const {
        layout: Qr,
        orientation: ar,
        selected: jr,
        onSelect: Ir,
        onMove: Er,
        canMove: pr,
        actionButtons: xr,
        joystickFixed: mr,
        presence: Nr,
        keyNames: tr,
        maxHeight: hr,
        fill: zr = !1,
        apiRef: Yr
      } = rr, {
        t: nr
      } = (0, Zr.E)(), er = fQ(), yr = (null !== (Sr = (0, Ur.l)("maxAuraLevel")) && void 0 !== Sr ? Sr : 0) > 0, Br = Qr.hudLayouts[ar], Tr = (0, Wr.useRef)(null), Or = (0, Wr.useRef)(null), Lr = (0, Wr.useRef)(null), lr = (0, Wr.useRef)(null), Xr = (0, Wr.useRef)(null), Pr = (0, Wr.useRef)(null), Rr = (0, br.b)(Tr).width, gr = zr ? 1 : Rr > 0 ? (0, Jr.D)(Rr, er.width, er.height, hr) : 0, Cr = (0, Wr.useRef)((() => !1)), Mr = (0, Wr.useCallback)((() => Cr.current()), []), Gr = `${xr}:${mr}:${yr}`, {
        doc: kr,
        boxes: Ar,
        pieces: Vr,
        insets: ir,
        keysAbove: wr,
        ready: Fr,
        settled: or
      } = aQ(Lr, {
        layout: Qr,
        orientation: ar,
        viewport: er,
        replicaKey: Gr,
        joystickFixed: mr,
        busy: Mr
      }), ur = (0, Wr.useCallback)((rr => {
        kr && RS(document, kr, rr, ar, mr)
      }), [kr, ar, mr]), rS = (0, Wr.useCallback)((rr => {
        if (!kr || !or) return null;
        ur(rr);
        const Sr = ZQ(kr),
          Qr = function(rr, Sr) {
            let {
              boxes: Qr,
              pieces: Zr,
              pairHome: Wr
            } = rr;
            const ar = Zr.find((rr => qr.h.has(rr.id)));
            if (!ar || !Wr) return Qr;
            const jr = (0, Jr.e)(Wr),
              Ir = Sr(ar.id),
              fr = VS(ar.box) / Ir / 2,
              Er = (ar.box.bottom - ar.box.top) / Ir / 2;
            return {
              ...Qr,
              inventory: {
                left: jr.x - fr,
                top: jr.y - Er,
                right: jr.x + fr,
                bottom: jr.y + Er
              }
            }
          }(SQ(kr), (Sr => (0, vr.D)(rr, ar, Sr)[2]));
        return {
          boxes: Qr,
          keysAbove: Sr,
          shopAlone: WQ(kr)
        }
      }), [kr, or, ur, ar]), SS = (0, Wr.useRef)(null), QS = (0, Wr.useRef)(null), ZS = (0, Wr.useRef)(Qr);
      ZS.current = Qr;
      const WS = (0, Wr.useCallback)((() => {
        null !== SS.current && (cancelAnimationFrame(SS.current), SS.current = null)
      }), []);
      (0, Wr.useEffect)((() => WS), [Qr, WS]);
      const aS = (0, Wr.useRef)(-1 / 0),
        {
          lockable: jS
        } = rr,
        IS = (0, Wr.useCallback)((rr => {
          if (ur(rr), aS.current = performance.now(), !or || 0 === Qr.hudLayouts[ar].hudLocked.length) return;
          const Sr = Qr;
          WS(), SS.current = requestAnimationFrame((() => {
            var Qr;
            if (SS.current = null, ZS.current !== Sr) return;
            const Zr = (null === (Qr = QS.current) || void 0 === Qr ? void 0 : Qr.from) === Sr ? QS.current.measured : rS(Sr);
            Zr && (QS.current = {
              from: Sr,
              measured: Zr
            }), ur(Zr ? wS(Sr, rr, ar, er, rS, {
              canKeep: jS,
              passes: 1,
              before: Zr
            }) : rr)
          }))
        }), [ur, or, Qr, ar, er, rS, jS, WS]),
        fS = dS({
          preview: (rr, Sr) => {
            Sr ? IS((0, vr.kb)(Qr, ar, rr, Sr)) : (WS(), ur(Qr))
          },
          stageRef: Or,
          ringRef: lr,
          centreLineRef: Xr,
          snapCentre: Qr.hudSnapCentre,
          ready: or,
          measure: rr => {
            const Sr = kr && Fr ? SQ(kr).boxes[rr] : void 0;
            return Sr && (0, Jr.q)(Sr, er.width, er.height) ? Sr : null
          },
          k: gr,
          viewport: er,
          boxes: Ar,
          pieces: Vr,
          selected: jr,
          insets: ir,
          layout: Br,
          canMove: pr,
          onSelect: Ir,
          onMove: (rr, Sr, Qr) => {
            WS(), Er(rr, Sr, Qr)
          }
        });
      (0, Wr.useLayoutEffect)((() => {
        Cr.current = fS.busy
      }), [fS.busy]);
      const ES = (0, Wr.useRef)([]),
        pS = (0, Wr.useRef)(Br.hudElements);
      (0, Wr.useEffect)((() => {
        for (const Wr of Object.keys(Br.hudElements)) {
          var rr, Sr, Qr, Zr;
          (null !== (rr = null === (Sr = Br.hudElements[Wr]) || void 0 === Sr ? void 0 : Sr[2]) && void 0 !== rr ? rr : 1) > (null !== (Qr = null === (Zr = pS.current[Wr]) || void 0 === Zr ? void 0 : Zr[2]) && void 0 !== Qr ? Qr : 1) && pr(Wr) && !(0, dr.B)(Wr, Br.hudElements[Wr]) && ES.current.push(...(0, qr.B)(Wr, wr, pr))
        }
        pS.current = Br.hudElements
      }), [Br.hudElements, pr, wr]), (0, Wr.useEffect)((() => {
        if (!Fr) return;
        const rr = (0, Jr.G)(er.width, er.height, ir);
        for (const Qr of (0, qr.x)(ES.current.splice(0), Ar, rr, pr)) {
          const Zr = Ar[Qr];
          if (!Zr || fS.busy() || !(0, Jr.q)(Zr, er.width, er.height)) continue;
          const Wr = (0, Jr.K)(Zr, rr);
          if (0 !== Wr.x || 0 !== Wr.y) {
            var Sr;
            const [rr, Zr] = null !== (Sr = Br.hudElements[Qr]) && void 0 !== Sr ? Sr : [0, 0];
            Er(Qr, rr + Wr.x / er.width, Zr + Wr.y / er.height)
          }
        }
      }), [Ar, Fr]), (0, Wr.useImperativeHandle)(Yr, (() => ({
        setScale: (rr, Sr) => {
          IS((0, vr.kb)(Qr, ar, rr, {
            scale: Sr
          }))
        },
        setKeyStyle: rr => {
          ur({
            ...Qr,
            ...rr
          })
        },
        keepLocks: (rr, Sr) => (WS(), wS(rr, Sr, ar, er, rS, {
          canKeep: jS
        })),
        setSafe: rr => {
          const Sr = (0, sr.C)(rr, er.width, er.height, CS(null !== kr && void 0 !== kr ? kr : document));
          IS((0, vr.pb)(Qr, ar, rr)), Pr.current && (Pr.current.style.inset = Sr.map((rr => rr * gr + "px")).join(" "))
        }
      })), [ur, IS, rS, WS, jS, kr, Qr, ar, er, gr]);
      const xS = (0, vr.s)(Br.hudElements),
        mS = jr ? Ar[jr] : void 0,
        NS = jr ? (0, qr.t)(jr, xr, nr, tr) : "",
        US = (0, yS.f)(er.width, er.height),
        tS = jr ? (0, Dr.g)(jr, Vr, Br, US) : [],
        hS = new Set((0, dr.w)(Br.hudElements)),
        zS = (0, dr.K)(Br, (0, dr.J)(Nr.rowIcons)).state,
        nS = tS.join(),
        KS = (0, Wr.useRef)(rr.onReady);
      KS.current = rr.onReady, (0, Wr.useEffect)((() => {
        var rr;
        null === (rr = KS.current) || void 0 === rr || rr.call(KS, or)
      }), [or]);
      const BS = (0, Wr.useRef)(rr.onMeasured);
      (0, Wr.useLayoutEffect)((() => {
        BS.current = rr.onMeasured
      }));
      const TS = (0, Wr.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        vS = [rQ(Vr), er.width, er.height, ir.top, ir.right, ir.bottom, ir.left, Fr, Gr].join("|");
      (0, Wr.useEffect)((() => {
        const rr = nS ? nS.split(",") : [],
          Sr = () => {
            var Sr;
            null === (Sr = BS.current) || void 0 === Sr || Sr.call(BS, Ar, rr, TS.current.caps)
          };
        let Qr;
        const Zr = () => {
          const rr = ZS.current;
          if (!kr || rr === TS.current.layout && vS === TS.current.input) return !1;
          const Wr = aS.current + 250 - performance.now();
          return rr === TS.current.layout && (Wr > 0 || Mr()) ? (Qr = setTimeout((() => {
            Zr() && Sr()
          }), Math.max(Wr, 62.5)), !1) : (TS.current = {
            layout: rr,
            input: vS,
            caps: {
              hotbar: GS(kr, eS),
              cluster: QQ(kr, (0, Jr.G)(er.width, er.height, ir), eS)
            }
          }, !0)
        };
        return Zr(), Sr(), () => {
          clearTimeout(Qr)
        }
      }), [Ar, nS, kr, er, ir, vS, Mr]);
      const OS = rr => ({
        left: rr.left * gr,
        top: rr.top * gr,
        width: (rr.right - rr.left) * gr,
        height: (rr.bottom - rr.top) * gr
      });
      return (0, Kr.jsx)("div", {
        ref: Tr,
        className: fr()("HudPreviewBox", {
          Fill: zr
        }),
        style: {
          height: er.height * gr
        },
        children: (0, Kr.jsxs)("div", {
          ref: Or,
          className: "HudPreviewStage",
          style: {
            width: er.width * gr,
            height: er.height * gr
          },
          children: [(0, Kr.jsx)("iframe", {
            ref: Lr,
            className: "HudPreviewFrame",
            title: nr("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: er.width,
              height: er.height,
              transform: `scale(${gr})`
            }
          }), kr && (0, cr.createPortal)((0, Kr.jsx)(YS, {
            presence: Nr,
            portraitPhone: US,
            hidden: xS,
            actionButtons: xr,
            joystickFixed: mr,
            keysAbove: wr,
            auraBar: yr,
            trayState: zS,
            moved: hS
          }), kr.body), (0, Kr.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...fS.handlers,
            children: [(0, Kr.jsx)("div", {
              ref: Pr,
              className: "HudPreviewSafeZone",
              style: {
                top: ir.top * gr,
                right: ir.right * gr,
                bottom: ir.bottom * gr,
                left: ir.left * gr
              }
            }), Vr.map(((rr, Sr) => {
              let {
                id: Qr,
                box: Zr
              } = rr;
              return (0, Kr.jsx)("div", {
                className: "HudPreviewHandle",
                style: OS((0, Jr.u)(Zr, 40 / gr))
              }, `${Qr}:${Sr}`)
            })), Br.hudLocked.map((rr => {
              const Sr = Ar[rr];
              return Sr && (0, Kr.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: Sr.right * gr,
                  top: Sr.top * gr
                },
                children: (0, Kr.jsx)(Hr.c, {
                  name: "lock"
                })
              }, rr)
            })), (0, Kr.jsx)("div", {
              ref: Xr,
              className: "HudPreviewCentreLine",
              style: {
                left: er.width / 2 * gr
              }
            }), jr && mS && (0, Kr.jsx)("div", {
              ref: lr,
              className: fr()("HudPreviewRing", {
                Fixed: !pr(jr),
                Overlap: tS.length > 0
              }),
              style: OS(mS),
              children: (0, Kr.jsx)("span", {
                className: fr()("HudPreviewRingLabel", IQ(jr, NS, Ar, gr, er)),
                children: NS
              })
            })]
          })]
        })
      })
    }

    function pQ(rr, Sr) {
      (0, Wr.useEffect)((() => {
        var Qr;
        null === (Qr = rr.current) || void 0 === Qr || Qr.toggleAttribute("inert", Sr)
      }), [rr, Sr])
    }
    const xQ = "hudFullScreen";

    function mQ(rr) {
      let {
        onScale: Sr,
        onHidden: Qr,
        onReset: ar,
        locked: jr,
        lockable: Ir,
        onLocked: fr,
        onClose: pr,
        ...xr
      } = rr;
      const {
        t: mr
      } = (0, Zr.E)(), Nr = (0, Wr.useRef)(null);
      (0, Fr.u)("popup", Nr, pr),
      function(rr) {
        const Sr = (0, Wr.useRef)(rr);
        Sr.current = rr, (0, Wr.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [xQ]: !0
          }, "");
          let rr = !1;
          const Qr = () => {
            rr = !0, Sr.current()
          };
          return window.addEventListener("popstate", Qr), () => {
            var Sr;
            window.removeEventListener("popstate", Qr), !rr && null !== (Sr = window.history.state) && void 0 !== Sr && Sr[xQ] && window.history.back()
          }
        }), [])
      }(pr), (0, Wr.useEffect)((() => {
        function rr(rr) {
          "Escape" === rr.key && (rr.stopPropagation(), pr())
        }
        return window.addEventListener("keydown", rr, !0), () => {
          window.removeEventListener("keydown", rr, !0)
        }
      }), [pr]);
      const {
        selected: Ur
      } = xr, tr = (0, Wr.useRef)(null), hr = (0, Wr.useRef)(null), [zr, Yr] = (0, Wr.useState)(!1);
      pQ(hr, !zr);
      const [nr, er] = (0, Wr.useState)(null), [yr, Br] = (0, Wr.useState)([]), [Tr, vr] = nS(), Or = (0, Wr.useRef)(xr.selected);
      Or.current = xr.selected;
      const Lr = (0, Wr.useRef)({}),
        lr = (0, Wr.useCallback)((() => {
          const rr = tr.current;
          rr && er(function(rr, Sr, Qr) {
            var Zr;
            const {
              innerWidth: Wr,
              innerHeight: ar
            } = window, jr = rr.offsetWidth, Ir = rr.offsetHeight, fr = Math.max(gS()[0], 6), Er = [];
            for (const mr of [fr, .2 * ar, .5 * ar - Ir / 2, .33 * ar])
              for (const rr of [.5, .3, .7]) Er.push({
                left: Math.max(0, Math.min(Wr - jr - 6, Math.max(6, Wr * rr - jr / 2))),
                top: mr
              });
            const pr = Er.map((rr => ({
                left: rr.left - 6,
                top: rr.top - 6,
                right: rr.left + jr + 6,
                bottom: rr.top + Ir + 6
              }))),
              xr = uS(Sr, Qr);
            return Er[(0, Jr.w)(pr, xr, {
              avoid: Qr && null !== (Zr = Sr[Qr]) && void 0 !== Zr ? Zr : null
            })]
          }(rr, Lr.current, Or.current))
        }), []),
        Xr = (0, Wr.useCallback)(((rr, Sr, Qr) => {
          Br(Sr), vr(Qr), Lr.current = rr, lr()
        }), [lr, vr]);
      return (0, Wr.useLayoutEffect)(lr, [xr.selected, lr]), (0, cr.createPortal)((0, Kr.jsxs)("div", {
        ref: Nr,
        className: "HudFullScreenEditor",
        children: [(0, Kr.jsx)(EQ, {
          ...xr,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: Xr,
          onReady: Yr,
          lockable: Ir
        }), (0, Kr.jsxs)("div", {
          ref: tr,
          className: "HudFullScreenToolbar",
          style: null === nr ? void 0 : {
            left: nr.left,
            top: nr.top,
            transform: "none"
          },
          children: [(0, Kr.jsx)("div", {
            ref: hr,
            className: "HudFullScreenControls",
            children: (0, Kr.jsx)(KS, {
              selected: Ur,
              layout: xr.layout.hudLayouts[xr.orientation],
              actionButtons: xr.actionButtons,
              keyNames: xr.keyNames,
              overlaps: yr,
              scaleCaps: Tr,
              onScale: Sr,
              onHidden: Qr,
              onReset: ar,
              locked: jr,
              lockable: Ir,
              onLocked: fr,
              joystickFixed: xr.joystickFixed
            })
          }), (0, Kr.jsx)(Er.h, {
            className: "HudFullScreenDone",
            onClick: pr,
            padDefaultFocus: !0,
            children: mr("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    var NQ = Qr(10037);
    const UQ = [{
      colour: Qr(3445).b,
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

    function tQ(rr) {
      let {
        colour: Sr,
        previewApi: Qr
      } = rr;
      const {
        t: ar
      } = (0, Zr.E)(), [jr, Ir] = (0, Wr.useState)(null), fr = (0, Wr.useRef)(null), Er = (0, Wr.useRef)(), pr = (0, Wr.useRef)(!1), xr = (0, Wr.useCallback)((() => {
        clearTimeout(Er.current), null !== fr.current && ((0, vr.U)(fr.current), fr.current = null)
      }), []);
      return (0, Wr.useEffect)((() => xr), [xr]), (0, Kr.jsx)(NQ.c, {
        label: ar("hudLayout:keyColour"),
        value: null !== jr && void 0 !== jr ? jr : Sr,
        swatches: UQ.map((rr => ({
          colour: rr.colour,
          label: ar(`hudLayout:keyColour_${rr.name}`)
        }))),
        customLabel: ar("hudLayout:keyColourCustom"),
        onChange: rr => {
          var Sr;
          fr.current = rr, Ir(rr), null === (Sr = Qr.current) || void 0 === Sr || Sr.setKeyStyle({
            hudKeyColour: rr
          }), clearTimeout(Er.current), Er.current = setTimeout((() => {
            xr(), Ir(null)
          }), 250), pr.current || (pr.current = !0, (0, Br.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: "colour"
          }))
        }
      })
    }
    const hQ = rr => `${Math.round(100*rr)}%`;

    function zQ(rr) {
      let {
        info: Sr,
        tuple: Qr,
        props: Wr
      } = rr;
      const {
        t: ar
      } = (0, Zr.E)();
      return (0, Kr.jsx)(Nr.f, {
        name: ar("hudLayout:size"),
        min: vr.m,
        max: vr.i,
        step: eS,
        initValue: Qr[2],
        disabled: Wr.locked.has(Sr.id),
        selectableMax: Wr.scaleCaps[Sr.id],
        cappedNote: ar("hudLayout:sizeCapped"),
        format: hQ,
        onChange: rr => {
          Wr.onScalePreview(Sr.id, rr)
        },
        onChangeComplete: rr => {
          Wr.onScale(Sr.id, rr)
        }
      })
    }

    function YQ(rr) {
      const {
        t: Sr
      } = (0, Zr.E)(), {
        present: Qr,
        elements: ar,
        selected: jr,
        onSelect: Ir,
        onHidden: Er,
        onReset: pr,
        note: xr,
        actionButtons: mr,
        keyNames: Nr,
        sizeBesidePreview: Ur,
        locked: tr,
        lockable: hr,
        onLocked: zr
      } = rr, {
        rowIconsOpen: Yr,
        onRowIconsOpen: nr
      } = rr, er = (0, Wr.useRef)(null), yr = null !== jr && (Yr || !(0, vr.P)(jr));
      return (0, Wr.useEffect)((() => {
        var rr;
        const Sr = jr ? null === (rr = er.current) || void 0 === rr ? void 0 : rr.querySelector(`[data-hud-row="${jr}"]`) : null;
        if (!Sr) return;
        const Qr = Sr.closest(".SettingsMenuRight"),
          Zr = performance.now();
        let Wr = null;
        const ar = () => {
            clearInterval(fr), null === Qr || void 0 === Qr || Qr.removeEventListener("scroll", Ir)
          },
          Ir = () => {
            oS() || ar()
          },
          fr = setInterval((() => {
            const rr = performance.now();
            rr - Zr > 1500 ? ar() : oS() ? Wr = null : null === Wr ? Wr = rr : rr - Wr >= 150 && (ar(), function(rr) {
              var Sr;
              const Qr = rr.closest(".SettingsMenuRight"),
                Zr = null === (Sr = rr.closest(".HudLayoutSettings")) || void 0 === Sr ? void 0 : Sr.querySelector(".HudLayoutPreviewBox");
              if (!Qr || !Zr) return;
              const Wr = Zr.getBoundingClientRect().bottom + 8,
                ar = Qr.getBoundingClientRect().bottom - 8,
                jr = rr.getBoundingClientRect();
              jr.top < Wr ? Qr.scrollBy({
                top: jr.top - Wr,
                behavior: "smooth"
              }) : jr.bottom > ar && Qr.scrollBy({
                top: Math.min(jr.bottom - ar, jr.top - Wr),
                behavior: "smooth"
              })
            }(Sr))
          }), 50);
        return null === Qr || void 0 === Qr || Qr.addEventListener("scroll", Ir, {
          passive: !0
        }), ar
      }), [jr, yr]), (0, Kr.jsx)("div", {
        ref: er,
        className: "SettingBoxGroup HudElementList",
        children: qr.f.filter((rr => Qr.has(rr.id) && (Yr || !(0, vr.P)(rr.id)))).map((Qr => {
          const Zr = (0, vr.F)(ar, Qr.id),
            Wr = (0, vr.u)(ar, Qr.id),
            er = Qr.id === jr,
            yr = Qr.scale && !Ur,
            Br = xr(Qr.id, er);
          return (0, Kr.jsxs)("div", {
            "data-hud-row": Qr.id,
            className: fr()("SettingBox HudElementRow", {
              Open: er,
              Hidden: Wr,
              Child: void 0 !== Qr.parent,
              Grandchild: (0, qr.o)(Qr.id).length > 1
            }),
            children: [(0, Kr.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, Kr.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": yr ? er : void 0,
                onClick: () => {
                  Ir(Qr.id)
                },
                children: (0, Kr.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [(0, qr.t)(Qr.id, mr, Sr, Nr), Qr.scale && 1 !== Zr[2] && !(er && yr) && (0, Kr.jsxs)(Kr.Fragment, {
                    children: [" ", (0, Kr.jsx)("span", {
                      className: "HudElementRowSize",
                      children: hQ(Zr[2])
                    })]
                  }), yr && (0, Kr.jsxs)(Kr.Fragment, {
                    children: [" ", (0, Kr.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, Kr.jsx)(Mr, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: Qr.id,
                actionButtons: mr,
                keyNames: Nr,
                locked: tr.has(Qr.id),
                lockable: hr(Qr.id),
                onLocked: zr
              }), "menu" === Qr.id && (0, Kr.jsx)(Gr, {
                className: "HudElementRowIcon",
                open: Yr,
                name: (0, qr.t)(Qr.id, mr, Sr, Nr),
                onToggle: nr
              }), "menu" !== Qr.id && (0, Kr.jsx)(gr, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: Qr.id,
                elements: ar,
                actionButtons: mr,
                keyNames: Nr,
                onHidden: Er
              }), (0, Kr.jsx)(Cr, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: tr.has(Qr.id),
                id: Qr.id,
                elements: ar,
                actionButtons: mr,
                keyNames: Nr,
                onReset: pr
              })]
            }), er && yr && (0, Kr.jsx)(zQ, {
              info: Qr,
              tuple: Zr,
              props: rr
            }), Br && (0, Kr.jsx)("div", {
              className: "HudElementNote",
              children: Br
            })]
          }, Qr.id)
        }))
      })
    }

    function nQ(rr) {
      let {
        preview: Sr,
        quick: Qr,
        onFullScreen: ar,
        resting: jr,
        onSidePanel: Ir
      } = rr;
      const {
        t: fr
      } = (0, Zr.E)(), pr = fQ(), xr = (0, Wr.useRef)(null), {
        width: mr
      } = (0, br.b)(xr), Nr = Math.floor(pr.width * Math.min(1, Sr.maxHeight / pr.height)), Ur = mr - Nr - 12, tr = Ur >= 130, hr = mr > 0;
      (0, Wr.useEffect)((() => {
        hr && Ir(tr)
      }), [hr, tr, Ir]);
      const zr = (0, Jr.D)(tr ? Nr : mr, pr.width, pr.height, Sr.maxHeight),
        Yr = jr ? (0, Kr.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: pr.height * zr
          }
        }) : (0, Kr.jsx)(EQ, {
          ...Sr
        }),
        nr = rr => (0, Kr.jsxs)(Er.U, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: fr("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: ar,
          children: [(0, Kr.jsx)(Hr.c, {
            name: "expand"
          }), rr && (0, Kr.jsx)("span", {
            children: fr("hudLayout:fullScreen")
          })]
        });
      return (0, Kr.jsxs)("div", {
        ref: xr,
        className: "SettingBox HudLayoutPreviewBox",
        children: [mr > 0 && tr && (0, Kr.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, Kr.jsx)("div", {
            style: {
              width: Nr
            },
            children: Yr
          }), (0, Kr.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, Kr.jsx)(KS, {
              selected: Sr.selected,
              ...Qr,
              joystickFixed: Sr.joystickFixed,
              extra: nr(!Sr.selected || Ur >= 278)
            })
          })]
        }), mr > 0 && !tr && (0, Kr.jsxs)(Kr.Fragment, {
          children: [Yr, (0, Kr.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: nr(!1)
          })]
        })]
      })
    }
    var eQ = Qr(5143),
      KQ = Qr(3434),
      yQ = Qr(3386);
    const BQ = rr => {
      const Sr = sr.r * ("sides" === rr ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(Sr / 2))
    };

    function TQ(rr, Sr, Qr) {
      const [Zr, Wr, ar, jr] = rr;
      return "sides" === Sr ? [Zr, Qr, ar, Qr] : [Qr, Wr, Qr, jr]
    }
    const vQ = [null, null, null, null],
      OQ = rr => `${rr}px`;

    function LQ(rr) {
      let {
        safe: Sr,
        onPreview: Qr,
        onCommit: ar
      } = rr;
      const {
        t: jr
      } = (0, Zr.E)(), Ir = (0, sr.C)(null !== Sr && void 0 !== Sr ? Sr : vQ, window.innerWidth, window.innerHeight, CS(document).map(Math.round)), fr = (0, Wr.useRef)(null !== Sr && void 0 !== Sr ? Sr : vQ);
      fr.current = null !== Sr && void 0 !== Sr ? Sr : vQ;
      const pr = rr => {
        const Sr = Math.min(BQ(rr), "sides" === rr ? Math.max(Ir[1], Ir[3]) : Math.max(Ir[0], Ir[2]));
        return (0, Kr.jsx)(Nr.f, {
          name: jr("sides" === rr ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: BQ(rr),
          step: 2,
          initValue: Sr,
          format: OQ,
          onChange: Sr => {
            Qr(TQ(fr.current, rr, Sr))
          },
          onChangeComplete: Zr => {
            if (Zr === Sr) return void Qr(fr.current);
            const Wr = TQ(fr.current, rr, Zr);
            fr.current = Wr, ar(Wr), (0, Br.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: rr
            })
          }
        })
      };
      return (0, Kr.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, Kr.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, Kr.jsx)("div", {
            children: jr("hudLayout:safeZone")
          }), (0, Kr.jsx)(Er.U, {
            active: null === Sr,
            pressed: null === Sr,
            onClick: () => {
              ar(null)
            },
            children: jr("hudLayout:safeZoneAuto")
          })]
        }), pr("sides"), pr("ends")]
      })
    }
    const lQ = {
      cluster: "hudLayout:clusterNote",
      inventory: "hudLayout:inventoryNote",
      menu: "hudLayout:menuNote",
      arrows: "hudLayout:arrowsNote",
      sprint: "hudLayout:sprintNote",
      effects: "hudLayout:effectsNote",
      zoom: "hudLayout:zoomNote",
      drop: "hudLayout:dropNote"
    };

    function XQ() {
      const {
        t: rr
      } = (0, Zr.E)(), Sr = (0, vr.hb)(), {
        clientEscMenuOptions: Qr
      } = (0, pr.n)(["clientEscMenuOptions"]), ar = (0, Or.l)(), jr = Sr.hudLayouts[ar], [Ir, fr] = (0, Wr.useState)(null), {
        rowIconsOpen: xr,
        onRowIconsOpen: mr,
        select: Ur
      } = function(rr, Sr) {
        const [Qr, Zr] = (0, Wr.useState)((() => vr.H.some((Sr => void 0 !== rr.hudElements[Sr] || rr.hudLocked.includes(Sr))))), ar = (0, Wr.useCallback)((rr => {
          Sr(rr), (0, vr.P)(rr) && Zr(!0)
        }), [Sr]);
        return {
          rowIconsOpen: Qr,
          onRowIconsOpen: Zr,
          select: ar
        }
      }(jr, fr), [tr, hr] = (0, Wr.useState)([]), [zr, Yr] = (0, Wr.useState)(null), [nr, er] = nS(), yr = (0, Wr.useCallback)(((rr, Sr, Qr) => {
        hr(Sr), er(Qr);
        const Zr = Object.keys(rr);
        Yr((rr => (null === rr || void 0 === rr ? void 0 : rr.size) === Zr.length && Zr.every((Sr => rr.has(Sr))) ? rr : new Set(Zr)))
      }), [er]), {
        gameState: Tr
      } = (0, pr.n)(["gameState"]), Lr = (0, KQ.g)(), Xr = (0, yQ.p)(), [Pr] = (0, Wr.useState)((() => {
        var rr, Sr, Qr, Zr;
        return "inGame" === Tr ? (0, SS.v)(document, Lr, {
          rightOfCamera: null !== (rr = null === (Sr = Xr.rightOfCamera) || void 0 === Sr ? void 0 : Sr.icon) && void 0 !== rr ? rr : null,
          leftEnd: null !== (Qr = null === (Zr = Xr.leftEnd) || void 0 === Zr ? void 0 : Zr.icon) && void 0 !== Qr ? Qr : null
        }) : SS.e
      })), Hr = (0, Wr.useRef)(null), Rr = (0, Wr.useRef)(null), gr = function(rr) {
        const [Sr, Qr] = (0, Wr.useState)((() => .4 * window.innerHeight));
        return (0, Wr.useLayoutEffect)((() => {
          var Sr;
          const Zr = null === (Sr = rr.current) || void 0 === Sr ? void 0 : Sr.closest(".SettingsMenuRight");
          if (!Zr) return;
          const Wr = () => {
            const rr = Zr.clientHeight < PQ ? .4 : .5;
            Qr(Math.max(80, Zr.clientHeight * rr - 24))
          };
          Wr();
          const ar = new ResizeObserver(Wr);
          return ar.observe(Zr), () => {
            ar.disconnect()
          }
        }), [rr]), Sr
      }(Rr), Cr = (0, eQ.p)(Qr.joystickMode), Mr = Qr.touchActionButtons, Gr = (0, Wr.useMemo)((() => (0, SS.u)(Pr, Mr)), [Pr, Mr]), kr = (0, Wr.useMemo)((() => new Set((0, SS.t)(Pr, Mr).map((rr => SS.i[rr])))), [Pr, Mr]);
      (0, Wr.useEffect)((() => {
        (0, Br.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [Ar, Vr] = (0, Wr.useState)(!1), [cr, Fr] = (0, Wr.useState)(!1), or = (0, Wr.useRef)(null);
      pQ(or, !cr);
      const [br, Jr] = (0, Wr.useState)(!1), Dr = (0, Wr.useCallback)((() => {
        Jr(!1)
      }), []), sr = (0, Wr.useMemo)((() => new Set(jr.hudLocked)), [jr.hudLocked]), ur = rr => {
        var Sr, Qr;
        const Zr = (0, vr.r)(),
          Wr = rr(Zr);
        (0, vr.ab)(null !== (Sr = null === (Qr = Hr.current) || void 0 === Qr ? void 0 : Qr.keepLocks(Zr, Wr)) && void 0 !== Sr ? Sr : Wr)
      }, rS = (rr, Sr) => {
        ur((Qr => (0, vr.kb)(Qr, ar, rr, Sr)))
      }, QS = (rr, Sr, Qr) => {
        rS(rr, {
          dx: Sr,
          dy: Qr
        }), (0, Br.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${rr}`
        })
      }, ZS = (rr, Sr) => {
        ur((Qr => (0, vr.nb)(Qr, ar, rr, Sr)))
      }, WS = rr => {
        const Sr = qr.d[rr];
        return (Sr.move || Sr.scale) && ("joystick" !== rr || Cr) && !(0, dr.B)(rr, jr.hudElements[rr])
      }, aS = rr => qr.d[rr].move && ("joystick" !== rr || Cr) && !sr.has(rr), jS = new Set(qr.f.map((rr => rr.id)).filter((rr => {
        const Sr = (0, vr.P)(rr) && !Pr.rowIcons.includes(rr) || vr.x[rr].hiddenByDefault && !(0, SS.q)(Pr, rr);
        return null === zr || zr.has(rr) || (0, vr.u)(jr.hudElements, rr) && !Sr
      }))), IS = {
        present: jS,
        actionButtons: Mr,
        keyNames: Gr,
        scaleCaps: nr,
        sizeBesidePreview: Ar,
        elements: jr.hudElements,
        selected: Ir,
        onSelect: Ur,
        rowIconsOpen: xr,
        onRowIconsOpen: mr,
        onScalePreview: (rr, Sr) => {
          var Qr;
          null === (Qr = Hr.current) || void 0 === Qr || Qr.setScale(rr, Sr)
        },
        onScale: (rr, Sr) => {
          rS(rr, {
            scale: Sr
          }), (0, Br.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${rr}`
          })
        },
        onHidden: (rr, Sr) => {
          rS(rr, {
            hidden: Sr
          }), (0, Br.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${Sr?"hide":"show"}:${rr}`
          })
        },
        onReset: rr => {
          rS(rr, vr.e)
        },
        locked: sr,
        lockable: WS,
        onLocked: ZS,
        note: (Sr, Qr) => {
          const Zr = Qr && tr.length > 0 ? rr("hudLayout:overlapsNote", {
            names: (0, qr.s)(tr, Mr, rr, Gr)
          }) : null;
          if (Qr && ir(Sr, Cr)) return (0, Kr.jsxs)(Kr.Fragment, {
            children: [Zr && (0, Kr.jsx)("span", {
              children: Zr
            }), (0, Kr.jsx)("span", {
              children: rr("hudLayout:floatingJoystickNote")
            }), !Ar && (0, Kr.jsx)(wr, {})]
          });
          if (Zr) return Zr;
          const Wr = Qr && sr.has(Sr) ? rr("hudLayout:lockedNote") : null,
            ar = Qr && kr.has(Sr) ? rr("hudLayout:contextSlotNote") : null;
          if (Wr || ar) return (0, Kr.jsxs)(Kr.Fragment, {
            children: [Wr && (0, Kr.jsx)("span", {
              children: Wr
            }), ar && (0, Kr.jsx)("span", {
              children: ar
            })]
          });
          if (Qr && (0, dr.B)(Sr, jr.hudElements[Sr]) && aS(Sr)) return rr("hudLayout:rowIconNote");
          const Ir = lQ[Sr];
          return Qr && Ir ? rr(Ir) : (0, qr.u)(Sr) && (0, vr.u)(jr.hudElements, Sr) ? rr("hudLayout:inventoryHiddenNote", {
            name: (0, qr.t)(Sr, Mr, rr, Gr)
          }) : null
        }
      };
      return (0, Kr.jsxs)("div", {
        ref: Rr,
        className: "HudLayoutSettings",
        children: [(0, Kr.jsxs)("div", {
          ref: or,
          className: "HudLayoutBody",
          children: [(0, Kr.jsx)("div", {
            className: "HudLayoutOrientation",
            children: rr("landscape" === ar ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, Kr.jsx)(nQ, {
            preview: {
              layout: Sr,
              orientation: ar,
              selected: Ir,
              onSelect: Ur,
              onMove: QS,
              canMove: aS,
              actionButtons: Mr,
              joystickFixed: Cr,
              presence: Pr,
              keyNames: Gr,
              maxHeight: gr,
              apiRef: Hr,
              onMeasured: yr,
              onReady: Fr,
              lockable: WS
            },
            quick: {
              layout: jr,
              actionButtons: Mr,
              keyNames: Gr,
              scaleCaps: nr,
              overlaps: tr,
              onScale: IS.onScale,
              onHidden: IS.onHidden,
              onReset: IS.onReset,
              locked: sr,
              lockable: WS,
              onLocked: ZS
            },
            onFullScreen: () => {
              Jr(!0)
            },
            resting: br,
            onSidePanel: Vr
          }), br && (0, Kr.jsx)(mQ, {
            layout: Sr,
            orientation: ar,
            selected: Ir,
            onSelect: Ur,
            onMove: QS,
            canMove: aS,
            actionButtons: Mr,
            joystickFixed: Cr,
            presence: Pr,
            keyNames: Gr,
            onScale: IS.onScale,
            onHidden: IS.onHidden,
            onReset: IS.onReset,
            locked: sr,
            lockable: WS,
            onLocked: ZS,
            apiRef: Hr,
            onClose: Dr
          }), (0, Kr.jsx)(LQ, {
            safe: jr.hudSafe,
            onCommit: rr => {
              ur((Sr => (0, vr.pb)(Sr, ar, rr)))
            },
            onPreview: rr => {
              var Sr;
              null === (Sr = Hr.current) || void 0 === Sr || Sr.setSafe(rr)
            }
          }), (0, Kr.jsx)(Nr.c, {
            label: rr("hudLayout:snapCentre"),
            checked: Sr.hudSnapCentre,
            onClick: rr => {
              (0, vr.Y)(rr)
            },
            circleInfoText: rr("hudLayout:snapCentreInfo")
          }), (0, Kr.jsx)(YQ, {
            ...IS
          }), (0, Kr.jsx)(Nr.e, {
            label: rr("hudLayout:shape"),
            options: vr.J.map((Sr => ({
              value: Sr,
              label: rr(`hudLayout:shape_${Sr}`)
            }))),
            value: Sr.hudShape,
            onChange: rr => {
              ur((Sr => ({
                ...Sr,
                hudShape: rr
              }))), (0, Br.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: rr
              })
            }
          }), (0, Kr.jsx)(Nr.f, {
            name: rr("hudLayout:opacity"),
            min: vr.h,
            max: 1,
            step: .05,
            initValue: Sr.hudKeyOpacity,
            format: rr => `${Math.round(100*rr)}%`,
            circleInfoText: rr("hudLayout:opacityInfo"),
            onChange: rr => {
              var Sr;
              null === (Sr = Hr.current) || void 0 === Sr || Sr.setKeyStyle({
                hudKeyOpacity: rr
              })
            },
            onChangeComplete: rr => {
              (0, vr.W)(rr), (0, Br.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          }), (0, Kr.jsx)(tQ, {
            colour: Sr.hudKeyColour,
            previewApi: Hr
          })]
        }), (0, Kr.jsx)(Er.L, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const rr = lr.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await rr.getResult() && (0, vr.R)()
            }()
          },
          children: rr("hudLayout:resetAll")
        })]
      })
    }
    const PQ = 350;
    const HQ = [function() {
      const {
        t: rr
      } = (0, Zr.E)(), [Sr, Qr] = (0, Wr.useState)(!1), ar = (0, Wr.useRef)(null);
      return (0, Wr.useEffect)((() => {
        var rr;
        Sr && (null === (rr = ar.current) || void 0 === rr || rr.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [Sr]), (0, Kr.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, Kr.jsx)(Xr.d, {
          ref: ar,
          icon: "arrows-up-down-left-right",
          title: rr("hudLayout:title"),
          sub: rr("hudLayout:entrySub"),
          expanded: Sr,
          onClick: () => {
            Qr(!Sr)
          }
        }), Sr && (0, Kr.jsx)(XQ, {})]
      })
    }, function() {
      const {
        t: rr
      } = (0, Zr.E)(), {
        gameState: Sr
      } = (0, pr.n)(["gameState"]), Qr = (0, Tr.j)((0, Ur.l)("runningSpeed"), (0, Ur.l)("walkingSpeed")), Wr = !(0, vr.u)((0, Or.h)().hudElements, "sprint");
      return "inGame" !== Sr || Qr ? (0, Kr.jsx)(Nr.c, {
        label: rr("touchSettings:sprintKey"),
        checked: Wr,
        onClick: rr => {
          (0, vr.T)("sprint", !rr), (0, Br.reportAnalyticsClick)({
            id: "touch_settings.sprint_key",
            value: rr ? "show" : "hide"
          })
        },
        circleInfoText: rr("touchSettings:sprintKeyInfo")
      }) : null
    }, function() {
      const {
        t: rr
      } = (0, Zr.E)(), {
        joystickMode: Sr,
        touchSpeedCurve: Qr,
        autorun: Wr,
        jumpLock: ar,
        touchEdgeGuard: jr
      } = (0, pr.n)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, Kr.jsxs)(Kr.Fragment, {
        children: [(0, Kr.jsx)(Nr.e, {
          label: rr("settingsMenu:joystick"),
          options: er.Ab.map((Sr => ({
            value: Sr,
            label: rr(yr[Sr])
          }))),
          value: Sr,
          onChange: rr => {
            pr.c.setClientEscMenuOptions({
              joystickMode: rr
            })
          },
          circleInfoText: rr("settingsMenu:joystickInfo")
        }), (0, Kr.jsx)(Nr.c, {
          label: rr("settingsMenu:preciseWalking"),
          checked: Qr,
          onClick: rr => {
            pr.c.setClientEscMenuOptions({
              touchSpeedCurve: rr
            })
          },
          circleInfoText: rr("settingsMenu:preciseWalkingInfo")
        }), (0, Kr.jsx)(Nr.c, {
          label: rr("settingsMenu:autoRun"),
          checked: Wr,
          onClick: rr => {
            pr.c.setClientEscMenuOptions({
              autorun: rr
            })
          },
          circleInfoText: rr("settingsMenu:autoRunInfo")
        }), (0, Kr.jsx)(Nr.c, {
          label: rr("settingsMenu:jumpLock"),
          checked: ar,
          onClick: rr => {
            pr.c.setClientEscMenuOptions({
              jumpLock: rr
            })
          },
          circleInfoText: rr("settingsMenu:jumpLockInfo")
        }), (0, Kr.jsx)(Nr.c, {
          label: rr("touchSettings:stopAtEdges"),
          checked: jr,
          onClick: rr => {
            pr.c.setClientEscMenuOptions({
              touchEdgeGuard: rr
            })
          },
          circleInfoText: rr("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, Kr.jsx)(nr.b, {})
    }, function() {
      const {
        t: rr
      } = (0, Zr.E)(), {
        clientEscMenuOptions: Sr
      } = (0, pr.n)(["clientEscMenuOptions"]);
      return (0, Lr.d)() ? (0, Kr.jsx)(Nr.c, {
        label: rr("settingsMenu:vibration"),
        checked: Sr.vibration,
        onClick: rr => {
          pr.c.setClientEscMenuOptions({
            vibration: rr
          })
        },
        circleInfoText: rr("settingsMenu:vibrationInfo")
      }) : null
    }];

    function qQ() {
      return (0, Kr.jsx)(Kr.Fragment, {
        children: HQ.map(((rr, Sr) => (0, Kr.jsx)(rr, {}, Sr)))
      })
    }
    var RQ = Qr(9899),
      gQ = Qr(9895),
      CQ = Qr(1804);

    function MQ() {
      const {
        t: rr
      } = (0, Zr.E)(), Sr = (0, RQ.m)(), Qr = gQ.c.filter((rr => void 0 !== Sr[rr])).length;
      return (0, Kr.jsx)("div", {
        className: "ControlsContainer QuickChatPhrasesSection",
        children: (0, Kr.jsxs)(VQ, {
          title: rr("quickChat:settingsTitle"),
          defaultOpen: !1,
          children: [gQ.c.map(((rr, Qr) => (0, Kr.jsx)(GQ, {
            phraseKey: rr,
            number: Qr + 1,
            custom: Sr[rr]
          }, rr))), Qr > 1 && (0, Kr.jsx)(Er.L, {
            className: "QuickChatPhrasesResetAll",
            onClick: RQ.f,
            children: rr("quickChat:resetAll")
          })]
        })
      })
    }

    function GQ(rr) {
      let {
        phraseKey: Sr,
        number: Qr,
        custom: ar
      } = rr;
      const {
        t: jr
      } = (0, Zr.E)(), Ir = jr(Sr), fr = null !== ar && void 0 !== ar ? ar : Ir, pr = (0, Wr.useRef)(null);
      return (0, Wr.useEffect)((() => {
        const rr = pr.current;
        return () => {
          var Qr;
          rr && (null !== (Qr = (0, RQ.b)()[Sr]) && void 0 !== Qr ? Qr : Ir) === fr && (0, RQ.l)(Sr, rr.value, Ir)
        }
      }), [Sr, Ir, fr]), (0, Kr.jsxs)("div", {
        className: "ControlRow QuickChatPhraseRow",
        children: [(0, Kr.jsx)(CQ.b, {
          domRef: pr,
          className: "QuickChatPhraseInput",
          defaultValue: fr,
          maxLength: rS.Vc,
          ariaLabel: jr("quickChat:phraseNumber", {
            number: Qr
          }),
          onEnter: () => {
            var rr;
            null === (rr = pr.current) || void 0 === rr || rr.blur()
          },
          onBlur: () => {
            var rr;
            const Qr = pr.current;
            Qr && ((0, RQ.l)(Sr, Qr.value, Ir), Qr.value = null !== (rr = (0, RQ.b)()[Sr]) && void 0 !== rr ? rr : Ir)
          }
        }, fr), (0, Kr.jsx)(Er.U, {
          className: "QuickChatPhraseReset",
          disabled: void 0 === ar,
          ariaLabel: jr("quickChat:resetPhrase", {
            number: Qr
          }),
          onClick: () => {
            (0, RQ.i)(Sr)
          },
          children: (0, Kr.jsx)(Hr.c, {
            name: "rotate-left"
          })
        })]
      })
    }
    var kQ = Qr(5070);

    function AQ() {
      const {
        t: rr
      } = (0, Zr.E)(), {
        isTouchScreen: Sr,
        clientEscMenuOptions: Qr,
        gameState: jr
      } = (0, pr.n)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), Ir = (0, Ur.l)("ezBridging"), fr = (0, Ur.l)("ezTowering"), hr = "inGame" !== jr || !0 === Ir, zr = (0, tr.g)(), nr = null !== zr && ("inGame" !== jr || !0 === fr), [, er] = (0, Wr.useReducer)((rr => rr + 1), 0), yr = (0, Yr.e)(), [Br, Tr] = (0, Wr.useState)(kQ.c);
      return (0, Kr.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [yr && (0, Kr.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, Kr.jsx)("div", {
            children: rr("controller:settingsControlsNote")
          }), (0, Kr.jsx)(Er.U, {
            onClick: () => {
              pr.c.set({
                openSettingsCategory: "controller"
              })
            },
            children: rr("controller:settingsOpenController")
          })]
        }), (0, xr.isTouchscreen)() && !(0, xr.isMobile)() ? (0, Kr.jsx)(Kr.Fragment, {
          children: (0, Kr.jsx)(Nr.c, {
            label: rr("settingsMenu:useTouchControls"),
            checked: Br,
            onClick: rr => {
              (0, kQ.b)(rr), Tr(rr)
            }
          })
        }) : null, Sr && (0, Kr.jsx)(qQ, {}), (Sr || yr) && (0, Kr.jsx)(MQ, {}), hr && (0, Kr.jsx)(Nr.c, {
          label: rr("settingsMenu:ezBridging"),
          checked: Qr.ezBridging,
          onClick: rr => {
            pr.c.setClientEscMenuOptions({
              ezBridging: rr
            })
          },
          circleInfoText: rr("settingsMenu:ezBridgingInfo")
        }), nr && (0, Kr.jsx)(Nr.c, {
          label: rr("settingsMenu:ezTowering"),
          checked: Qr.ezTowering,
          onClick: rr => {
            pr.c.setClientEscMenuOptions({
              ezTowering: rr
            })
          },
          circleInfoText: rr("jump" === zr ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, Kr.jsx)(Nr.c, {
          label: rr("settingsMenu:crouchToggle"),
          checked: Qr.crouchIsToggle,
          onClick: rr => {
            pr.c.setClientEscMenuOptions({
              crouchIsToggle: rr
            })
          },
          circleInfoText: rr("settingsMenu:crouchToggleInfo")
        }), (0, Kr.jsx)(Nr.c, {
          label: rr("settingsMenu:hideUiToggle"),
          checked: Qr.hideUiIsToggle,
          onClick: rr => {
            pr.c.setClientEscMenuOptions({
              hideUiIsToggle: rr
            })
          },
          circleInfoText: rr("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, mr.b)() && (0, Kr.jsx)(Nr.f, {
          name: rr("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: Qr.touchscreenSensitivity,
          onChange: rr => {
            pr.c.setClientEscMenuOptions({
              touchscreenSensitivity: rr
            })
          }
        }), !(0, xr.isMobile)() && (0, Kr.jsx)(Nr.f, {
          name: rr("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: Qr.mouseSensitivity,
          onChange: rr => {
            pr.c.setClientEscMenuOptions({
              mouseSensitivity: rr
            })
          }
        }), !(0, xr.isMobile)() && (0, Kr.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, Kr.jsx)("div", {
            className: "SliderText",
            children: rr("settingsMenu:keyBindings")
          }), ar.d.map((Sr => (0, Kr.jsx)(VQ, {
            title: rr(Sr.name.translationKey, Sr.name.params),
            defaultOpen: ar.f.has(Sr.id),
            children: Sr.actions.map((rr => (0, Kr.jsx)(iQ, {
              noaAction: rr,
              forceUpdate: er,
              clashesWith: Sr.clashesWith,
              showPadGlyph: yr
            }, rr)))
          }, Sr.name.translationKey))), (0, Kr.jsx)(Er.L, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, ar.C)(), er()
            },
            children: rr("controls:resetBindings")
          })]
        })]
      })
    }

    function VQ(rr) {
      let {
        title: Sr,
        defaultOpen: Qr,
        children: Zr
      } = rr;
      const [ar, jr] = (0, Wr.useState)(Qr);
      return (0, Kr.jsxs)("div", {
        className: fr()("ControlsSection", {
          Collapsed: !ar
        }),
        children: [(0, Kr.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            jr(!ar)
          },
          children: [(0, Kr.jsx)("div", {
            className: "ControlsSectionTitle",
            children: Sr
          }), (0, Kr.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), ar && (0, Kr.jsx)("div", {
          className: "ControlsSectionRows",
          children: Zr
        })]
      })
    }

    function iQ(rr) {
      let {
        noaAction: Sr,
        forceUpdate: Qr,
        clashesWith: Ir,
        showPadGlyph: pr
      } = rr;
      const {
        t: xr
      } = (0, Zr.E)(), mr = (0, zr.c)(Sr), [Nr, Ur] = (0, Wr.useState)(!1), [tr, Yr] = (0, Wr.useState)("controls:clickToEnterNewBinding"), [nr, er] = (0, Wr.useState)(null), [yr, Br] = (0, Wr.useState)(null), Tr = (0, Wr.useRef)(null);
      (0, Wr.useEffect)((() => {
        Nr && Tr.current && Tr.current.focus()
      }), [Nr]);
      const vr = ar.q[Sr].filter((rr => jr.h[rr]));
      let Or = null;
      const Lr = [],
        lr = Ir.flatMap((rr => {
          var Sr, Qr;
          return null !== (Sr = null === (Qr = ar.d.find((Sr => Sr.id === rr))) || void 0 === Qr ? void 0 : Qr.actions) && void 0 !== Sr ? Sr : []
        }));
      for (const Zr of lr) {
        if (Zr === Sr) continue;
        const rr = ar.q[Zr];
        for (const Sr of rr) vr.includes(Sr) && Lr.push(xr(ar.s[Zr].translationKey, ar.s[Zr].params))
      }
      Lr.length > 0 && (Or = xr("controls:sharedBindingsWarning") + " ", Or += Lr.join(", "));
      const Xr = () => {
          Ur(!1), er(null), Yr("controls:clickToEnterNewBinding"), Br(null)
        },
        Pr = () => "BindingInput_" + Sr;
      return (0, Kr.jsxs)("div", {
        className: fr()("ControlRow", {
          WarningBorder: null !== Or
        }),
        children: [(0, Kr.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, Kr.jsxs)("div", {
            className: "ControlName",
            children: [xr(ar.s[Sr].translationKey, ar.s[Sr].params), pr && mr && (0, Kr.jsx)(hr.b, {
              glyph: mr,
              className: "ControlPadGlyph"
            })]
          }), (0, Kr.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, Kr.jsxs)("div", {
              className: "ControlBindingsList",
              children: [vr.map((rr => (0, Kr.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, Kr.jsx)("div", {
                  children: (0, ar.j)(rr)
                }), (0, Kr.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Zr = (0, ar.v)(Sr, rr);
                    Zr.isError() ? Br(Zr.asError().message) : Br(null), Qr()
                  },
                  children: "\xd7"
                })]
              }, rr))), !Nr && (0, Kr.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  Ur(!0), Br(null)
                },
                children: (0, Kr.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), Nr && (0, Kr.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, Kr.jsxs)("div", {
                className: "InputContainer",
                children: [(0, Kr.jsx)("div", {
                  className: "InputOverlay",
                  children: nr ? (0, ar.j)(nr) : (0, Kr.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: xr(tr)
                  })
                }), (0, Kr.jsx)("input", {
                  ref: Tr,
                  id: Pr(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: rr => {
                    if ("Escape" === rr.code) return Xr(), rr.preventDefault(), void rr.stopPropagation();
                    const Sr = rr.code;
                    jr.b.includes(Sr) ? (Br(null), er(Sr)) : (Br("controls:keyIsReserved"), er(null)), rr.preventDefault(), rr.stopPropagation()
                  },
                  onMouseDown: rr => {
                    const Sr = "Mouse" + (rr.button + 1);
                    document.activeElement && document.activeElement.id === Pr() ? jr.b.includes(Sr) ? (Br(null), er(Sr)) : (Br("controls:keyIsReserved"), er(null)) : Yr("controls:enterNewBinding"), rr.stopPropagation()
                  },
                  onBlur: () => {
                    Yr("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, Kr.jsx)(Er.h, {
                onPointerDown: rr => {
                  rr.preventDefault()
                },
                onClick: () => {
                  (0, ar.b)(Sr, nr), Qr(), Xr()
                },
                className: "ControlBindingAddButton",
                disabled: null === nr,
                children: xr("general:add")
              }), (0, Kr.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  Xr()
                },
                children: "\xd7"
              })]
            }), yr && (0, Kr.jsx)("div", {
              className: "ControlBindingError",
              children: xr(yr)
            })]
          })]
        }), Or && (0, Kr.jsx)("div", {
          className: "ControlRowWarning",
          children: Or
        })]
      })
    }
  },
  10005: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr
    });
    var Zr = Qr(72),
      Wr = Qr(1448),
      ar = Qr(1338);
    const jr = (0, Zr.forwardRef)((function(rr, Sr) {
      let {
        icon: Qr,
        title: Zr,
        sub: jr,
        expanded: Ir,
        onClick: fr
      } = rr;
      return (0, ar.jsxs)("button", {
        ref: Sr,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": Ir,
        onClick: fr,
        children: [(0, ar.jsx)(Wr.c, {
          name: Qr,
          className: "FeaturedSettingsEntryIcon"
        }), (0, ar.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, ar.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: Zr
          }), (0, ar.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: jr
          })]
        }), (0, ar.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  10037: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(1338);

    function jr(rr) {
      let {
        label: Sr,
        value: Qr,
        swatches: Zr,
        customLabel: jr,
        onChange: Ir
      } = rr;
      const fr = !Zr.some((rr => rr.colour === Qr));
      return (0, ar.jsxs)("div", {
        className: "SettingBox SettingsColourRow",
        children: [(0, ar.jsx)("div", {
          className: "SliderText",
          children: Sr
        }), (0, ar.jsxs)("div", {
          className: "SettingsSwatches",
          role: "radiogroup",
          "aria-label": Sr,
          children: [Zr.map((rr => (0, ar.jsx)("button", {
            type: "button",
            role: "radio",
            "aria-checked": rr.colour === Qr,
            "aria-label": rr.label,
            "data-pad-focusable": !0,
            className: Wr()("SettingsSwatch", {
              Selected: rr.colour === Qr
            }),
            style: {
              background: rr.colour
            },
            onClick: () => {
              Ir(rr.colour)
            }
          }, rr.colour))), (0, ar.jsx)("label", {
            className: Wr()("SettingsSwatch SettingsSwatchCustom", {
              Selected: fr
            }),
            style: fr ? {
              background: Qr
            } : void 0,
            title: jr,
            "data-pad-focusable": !0,
            children: (0, ar.jsx)("input", {
              type: "color",
              "aria-label": jr,
              value: Qr,
              onChange: rr => {
                Ir(rr.target.value)
              }
            })
          })]
        })]
      })
    }
  },
  9774: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => zr,
      e: () => hr,
      f: () => pr,
      h: () => Yr,
      l: () => nr,
      p: () => mr
    });
    var Zr = Qr(1793),
      Wr = Qr(1890);
    const ar = rr => rr >= 56320 && rr <= 57343,
      jr = rr => rr >= 55296 && rr <= 56319,
      Ir = (rr, Sr) => Sr >= 2 && ar(rr.charCodeAt(Sr - 1)) && jr(rr.charCodeAt(Sr - 2)) ? Sr - 2 : Math.max(0, Sr - 1),
      fr = (rr, Sr) => {
        let Qr;
        var Zr, Wr;
        return Qr = rr.start !== rr.end ? Sr < 0 ? rr.start : rr.end : Sr < 0 ? Ir(rr.value, rr.start) : (Zr = rr.value, (Wr = rr.start) + 1 < Zr.length && jr(Zr.charCodeAt(Wr)) && ar(Zr.charCodeAt(Wr + 1)) ? Wr + 2 : Math.min(Zr.length, Wr + 1)), {
          value: rr.value,
          start: Qr,
          end: Qr
        }
      },
      Er = ["text", "search", "url", "email", "tel", "password", "number"],
      pr = rr => !(!(0, Wr.e)(rr) || rr.isContentEditable || rr.hasAttribute("data-pad-no-osk")) && (rr instanceof HTMLTextAreaElement || rr instanceof HTMLInputElement && Er.includes(rr.type)),
      xr = rr => null !== rr.selectionStart,
      mr = rr => {
        var Sr, Qr;
        const {
          value: Zr
        } = rr;
        return {
          value: Zr,
          start: null !== (Sr = rr.selectionStart) && void 0 !== Sr ? Sr : Zr.length,
          end: null !== (Qr = rr.selectionEnd) && void 0 !== Qr ? Qr : Zr.length
        }
      },
      Nr = (rr, Sr, Qr) => {
        if (rr.readOnly) return;
        const Wr = rr instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Wr, "value").set.call(rr, Sr.value), xr(rr) && rr.setSelectionRange(Sr.start, Sr.end), (0, Zr.c)(rr, new InputEvent("input", {
          bubbles: !0,
          inputType: Qr
        }))
      };
    let Ur = !1;
    const tr = (rr, Sr) => !!document.execCommand(rr, !1, Sr) || (Ur || (Ur = !0, console.warn(`execCommand("${rr}") failed; the on-screen keyboard is setting the value directly`)), !1),
      hr = (rr, Sr) => {
        tr("insertText", Sr) || Nr(rr, function(rr, Sr) {
          let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const Zr = rr.value.slice(0, rr.start),
            Wr = rr.value.slice(rr.end);
          let ar = Qr < 0 ? Sr.length : Math.max(0, Qr - Zr.length - Wr.length);
          ar > 0 && ar < Sr.length && jr(Sr.charCodeAt(ar - 1)) && ar--;
          const Ir = Sr.slice(0, ar),
            fr = Zr.length + Ir.length;
          return {
            value: Zr + Ir + Wr,
            start: fr,
            end: fr
          }
        }(mr(rr), Sr, rr.maxLength), "insertText")
      },
      zr = rr => {
        tr("delete") || Nr(rr, (rr => {
          const Sr = rr.start === rr.end ? Ir(rr.value, rr.start) : rr.start;
          return {
            value: rr.value.slice(0, Sr) + rr.value.slice(rr.end),
            start: Sr,
            end: Sr
          }
        })(mr(rr)), "deleteContentBackward")
      },
      Yr = (rr, Sr) => {
        if (!xr(rr)) return;
        const Qr = fr(mr(rr), Sr);
        rr.setSelectionRange(Qr.start, Qr.end)
      },
      nr = rr => {
        xr(rr) && 0 === rr.selectionStart && 0 === rr.selectionEnd && rr.setSelectionRange(rr.value.length, rr.value.length)
      }
  },
  9959: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => fr
    });
    var Zr = Qr(26),
      Wr = Qr(2295),
      ar = Qr(1475),
      jr = Qr(1518),
      Ir = Qr(4977);
    const fr = async () => {
      if ((0, jr.j)()) {
        if (!0 !== await ar.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Zr.c.get("gameState")) return
      }
      const rr = await (0, Ir.c)();
      "stay" !== rr && "inGame" === Zr.c.get("gameState") && ("save" === rr && (0, Ir.i)(), (0, Wr.g)())
    }
  },
  9965: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr,
      f: () => ar,
      j: () => jr,
      n: () => Wr,
      r: () => Ir
    });
    var Zr = Qr(2117);
    const Wr = "controllerPadShopOpen",
      ar = rr => Zr.i.includes(rr),
      jr = rr => Object.values(rr).some((rr => !1 !== rr.canBuy && !rr.isRewardedAd)),
      Ir = (rr, Sr, Qr) => {
        var Zr, Wr, jr, Ir;
        const fr = rr.filter((rr => !ar(rr))),
          Er = null !== Sr && rr.includes(Sr) ? Sr : null;
        return null !== Er && !ar(Er) && Qr(Er) ? Er : null !== (Zr = null !== (Wr = null !== (jr = null !== (Ir = fr.find(Qr)) && void 0 !== Ir ? Ir : fr[0]) && void 0 !== jr ? jr : Er) && void 0 !== Wr ? Wr : rr[0]) && void 0 !== Zr ? Zr : null
      },
      fr = rr => rr.userInput || rr.isRewardedAd || "boolean" === typeof rr.isSelected ? null : JSON.stringify([rr.image, rr.cost, rr.currency, rr.amount, rr.customTitle, rr.buyButtonText, rr.description, rr.canBuy])
  },
  9986: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Er,
      e: () => pr
    });
    var Zr = Qr(72),
      Wr = Qr(1573),
      ar = Qr(2156),
      jr = Qr(1541),
      Ir = Qr(1564),
      fr = Qr(1338);
    const Er = () => {
        const rr = (0, jr.t)();
        if ((0, Zr.useEffect)((() => {
            (0, jr.n)()
          }), []), !rr) return null;
        const {
          ControllerCategory: Sr
        } = rr;
        return (0, fr.jsx)(Ir.b, {
          children: (0, fr.jsx)(Sr, {})
        })
      },
      pr = () => {
        var rr;
        const Sr = (0, jr.t)(),
          [, Qr] = (0, Zr.useReducer)((rr => rr + 1), 0);
        return (0, Wr.c)(ar.d, Qr), null !== (rr = null === Sr || void 0 === Sr ? void 0 : Sr.hasActivePad()) && void 0 !== rr && rr
      }
  },
  9765: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      A: () => Er,
      D: () => Or,
      E: () => yr,
      I: () => Br,
      M: () => hr,
      P: () => fr,
      R: () => pr,
      c: () => zr,
      f: () => vr,
      j: () => Kr,
      n: () => er,
      o: () => Ur,
      p: () => tr,
      r: () => mr,
      t: () => Nr,
      x: () => Tr
    });
    var Zr = Qr(34),
      Wr = Qr(1793),
      ar = Qr(9769),
      jr = Qr(9774),
      Ir = Qr(3338);
    const fr = rr => (0, jr.f)(rr),
      Er = rr => {
        const Sr = rr.getBoundingClientRect();
        return {
          x: Sr.left + Sr.width / 2,
          y: Sr.top + Sr.height / 2
        }
      },
      pr = (rr, Sr, Qr) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: rr.x,
        clientY: rr.y,
        screenX: rr.x,
        screenY: rr.y,
        button: Sr,
        buttons: Qr,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      xr = (rr, Sr) => {
        (0, Wr.c)(rr, Sr)
      },
      mr = function(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Zr = 0 === Qr ? 1 : 2;
        xr(rr, new PointerEvent("pointerdown", pr(Sr, Qr, Zr))), xr(rr, new MouseEvent("mousedown", pr(Sr, Qr, Zr)))
      },
      Nr = function(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        xr(rr, new PointerEvent("pointerup", pr(Sr, Qr, 0))), xr(rr, new MouseEvent("mouseup", pr(Sr, Qr, 0)))
      },
      Ur = function(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        mr(rr, Sr, Qr), Nr(rr, Sr, Qr), xr(rr, 0 === Qr ? new MouseEvent("click", pr(Sr, 0, 0)) : new MouseEvent("contextmenu", pr(Sr, 2, 0)))
      },
      tr = function(rr, Sr, Qr) {
        let {
          leaveBelow: Zr = null,
          enterBelow: Wr = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (rr !== Sr) {
          if (null !== rr && void 0 !== rr && rr.isConnected) {
            const Wr = {
              ...pr(Qr, 0, 0),
              relatedTarget: Sr
            };
            xr(rr, new PointerEvent("pointerout", Wr)), xr(rr, new MouseEvent("mouseout", Wr));
            const ar = rr => !!Sr && rr.contains(Sr) || !!Zr && rr.contains(Zr);
            for (let Sr = rr; Sr && !ar(Sr); Sr = Sr.parentElement) xr(Sr, new PointerEvent("pointerleave", {
              ...Wr,
              bubbles: !1
            })), xr(Sr, new MouseEvent("mouseleave", {
              ...Wr,
              bubbles: !1
            }))
          }
          if (Sr) {
            const Zr = {
              ...pr(Qr, 0, 0),
              relatedTarget: rr
            };
            xr(Sr, new PointerEvent("pointerover", Zr)), xr(Sr, new MouseEvent("mouseover", Zr));
            const ar = [],
              jr = Sr => !(null === rr || void 0 === rr || !rr.isConnected) && Sr.contains(rr) || !!Wr && Sr.contains(Wr);
            for (let rr = Sr; rr && !jr(rr); rr = rr.parentElement) ar.push(rr);
            for (const rr of ar.reverse()) xr(rr, new PointerEvent("pointerenter", {
              ...Zr,
              bubbles: !1
            })), xr(rr, new MouseEvent("mouseenter", {
              ...Zr,
              bubbles: !1
            }));
            xr(Sr, new PointerEvent("pointermove", pr(Qr, 0, 0))), xr(Sr, new MouseEvent("mousemove", pr(Qr, 0, 0)))
          }
        } else Sr && (xr(Sr, new PointerEvent("pointermove", pr(Qr, 0, 0))), xr(Sr, new MouseEvent("mousemove", pr(Qr, 0, 0))))
      },
      hr = rr => {
        Zr.i.Jp(ar.f, rr)
      },
      zr = rr => {
        if (fr(rr)) return void hr(rr);
        const Sr = rr.hasAttribute("data-pad-focusable") ? rr.querySelector("a[href]") : null,
          Qr = null !== Sr && void 0 !== Sr ? Sr : rr;
        Ur(Qr, Er(Qr))
      },
      Yr = ".Dropdown-root.is-open",
      nr = rr => {
        const Sr = rr.querySelector(".Dropdown-control");
        return zr(Sr), Sr
      },
      er = rr => {
        var Sr;
        const Qr = null !== (Sr = rr.closest(Yr)) && void 0 !== Sr ? Sr : rr.querySelector(Yr);
        return Qr ? nr(Qr) : null
      },
      Kr = rr => {
        for (const Sr of document.querySelectorAll(Yr)) Sr.contains(rr) || nr(Sr)
      },
      yr = rr => null !== rr.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      Br = rr => {
        const Sr = rr ? document.elementFromPoint(rr.x, rr.y) : null;
        return !(null === Sr || void 0 === Sr || !Sr.closest("[data-pad-repeat]"))
      },
      Tr = rr => {
        var Sr;
        return null !== (Sr = [...rr.querySelectorAll("[data-pad-back]")].find(Ir.t)) && void 0 !== Sr ? Sr : null
      },
      vr = rr => {
        const Sr = Tr(rr);
        return !!Sr && (zr(Sr), !0)
      },
      Or = rr => {
        var Sr, Qr, Zr, Wr;
        return null !== (Sr = null !== (Qr = null !== (Zr = rr.getAttribute("data-pad-key")) && void 0 !== Zr ? Zr : rr.getAttribute("href")) && void 0 !== Qr ? Qr : null === (Wr = rr.querySelector("a[href]")) || void 0 === Wr ? void 0 : Wr.getAttribute("href")) && void 0 !== Sr ? Sr : null
      }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);