export const id = 152;
export const ids = [152];
export const modules = {
  8298: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT
    });
    var iT = IT(12),
      zT = IT(1171),
      kT = IT(4481),
      WT = IT(1083);

    function XT(TT) {
      let {
        note: oT
      } = TT;
      const {
        t: IT
      } = (0, zT.t)(), {
        clientEscMenuOptions: XT
      } = (0, iT.k)(["clientEscMenuOptions"]);
      return (0, WT.jsx)(kT.e, {
        label: IT("touchSettings:actionButtons"),
        checked: XT.touchActionButtons,
        onClick: TT => {
          iT.c.setClientEscMenuOptions({
            touchActionButtons: TT
          })
        },
        circleInfoText: IT("touchSettings:actionButtonsInfo"),
        note: oT
      })
    }
  },
  8290: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => OI,
      e: () => QI
    });
    var iT = IT(1171),
      zT = IT(46),
      kT = IT(1794),
      WT = IT(1803),
      XT = IT(1042),
      BT = IT.n(XT),
      FT = IT(1408),
      ST = IT(12),
      DT = IT(90),
      LT = IT(112),
      xT = IT(4481),
      cT = IT(2227),
      KT = IT(289),
      MT = IT(1810),
      rT = IT(1819),
      AT = IT(8294),
      gT = IT(8298),
      hT = IT(306),
      wT = IT(1083);
    const mT = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var eT = IT(8307);
    var RT = IT(1427),
      uT = IT(1325),
      vT = IT(1365),
      ET = IT(1055),
      fT = IT(3924);
    const CT = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        perspective: "menu"
      },
      jT = TT => fT.z.filter((oT => CT[oT] === TT)),
      JT = new Set(jT("cluster")),
      UT = ["cluster"],
      aT = [...UT, ...fT.z.filter((TT => !UT.includes(TT) && !CT[TT]))],
      YT = aT.flatMap((TT => [TT, ...jT(TT)])).map((TT => ({
        id: TT,
        label: `hudLayout:${TT}`,
        ...fT.y[TT],
        parent: CT[TT]
      }))),
      QT = Object.fromEntries(YT.map((TT => [TT.id, TT])));

    function OT(TT, oT) {
      var IT, iT;
      return "perspective" === TT && 0 === (null !== (IT = null === oT || void 0 === oT ? void 0 : oT[0]) && void 0 !== IT ? IT : 0) && 0 === (null !== (iT = null === oT || void 0 === oT ? void 0 : oT[1]) && void 0 !== iT ? iT : 0)
    }
    const HT = "data-hud-el";

    function nT(TT, oT, IT, iT) {
      const zT = IT(function(TT, oT) {
          return "attack" !== TT || oT ? QT[TT].label : "hudLayout:attackContext"
        }(TT, oT)),
        kT = iT[TT];
      return kT ? IT("hudLayout:slotWithKey", {
        slot: zT,
        key: kT
      }) : zT
    }

    function qT(TT, oT, IT, iT) {
      return TT.map((TT => nT(TT, oT, IT, iT))).join(", ")
    }

    function ZT(TT) {
      let {
        className: oT,
        keepPlace: IT
      } = TT;
      return IT ? (0, wT.jsx)("div", {
        className: BT()(oT, "Placeholder")
      }) : null
    }

    function lT(TT) {
      var oT;
      let {
        id: IT,
        elements: zT,
        actionButtons: kT,
        keyNames: WT,
        className: XT,
        keepPlace: BT,
        onHidden: ST
      } = TT;
      const {
        t: DT
      } = (0, iT.t)();
      if (!QT[IT].hide) return (0, wT.jsx)(ZT, {
        className: XT,
        keepPlace: BT
      });
      const LT = 1 === (null !== (oT = zT[IT]) && void 0 !== oT ? oT : fT.t)[3];
      return (0, wT.jsx)(FT.J, {
        className: XT,
        ariaLabel: DT(LT ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: nT(IT, kT, DT, WT)
        }),
        pressed: !LT,
        onClick: () => {
          ST(IT, !LT)
        },
        children: (0, wT.jsx)(ET.e, {
          name: LT ? "eye-slash" : "eye"
        })
      })
    }

    function sT(TT) {
      var oT;
      let {
        id: IT,
        elements: zT,
        actionButtons: kT,
        keyNames: WT,
        className: XT,
        keepPlace: BT,
        onlyWhenMoved: ST,
        locked: DT,
        onReset: LT
      } = TT;
      const {
        t: xT
      } = (0, iT.t)(), cT = QT[IT], KT = (0, fT.I)(null !== (oT = zT[IT]) && void 0 !== oT ? oT : fT.t);
      return !cT.move && !cT.scale || ST && KT ? (0, wT.jsx)(ZT, {
        className: XT,
        keepPlace: BT
      }) : (0, wT.jsx)(FT.J, {
        className: XT,
        disabled: KT || DT,
        ariaLabel: xT("hudLayout:resetElement", {
          name: nT(IT, kT, xT, WT)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: IT
        },
        onClick: TT => {
          ST && pT(TT.currentTarget), LT(IT)
        },
        children: (0, wT.jsx)(ET.e, {
          name: "rotate-left"
        })
      })
    }

    function tT(TT) {
      let {
        id: oT,
        actionButtons: IT,
        keyNames: zT,
        className: kT,
        keepPlace: WT,
        locked: XT,
        lockable: BT,
        onLocked: ST
      } = TT;
      const {
        t: DT
      } = (0, iT.t)();
      return BT || XT ? (0, wT.jsx)(FT.J, {
        className: kT,
        ariaLabel: DT(XT ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: nT(oT, IT, DT, zT)
        }),
        pressed: XT,
        active: XT,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${XT?"unlock":"lock"}:${oT}`
        },
        onClick: () => {
          ST(oT, !XT)
        },
        children: (0, wT.jsx)(ET.e, {
          name: XT ? "lock" : "lock-open"
        })
      }) : (0, wT.jsx)(ZT, {
        className: kT,
        keepPlace: WT
      })
    }

    function GT(TT, oT) {
      var IT;
      TT.contains(document.activeElement) && oT.focus({
        preventScroll: !0
      }), null === (IT = (0, vT.d)()) || void 0 === IT || IT.handOverPadFocus(TT, oT)
    }

    function pT(TT) {
      const oT = TT.closest("[data-hud-row]"),
        IT = null === oT || void 0 === oT ? void 0 : oT.querySelector(".HudElementRowName");
      return !(!oT || !IT) && (GT(oT, IT), !0)
    }
    const bT = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function yT(TT, oT) {
      return "joystick" === TT && !oT
    }

    function NT() {
      const {
        t: TT
      } = (0, iT.t)();
      return (0, wT.jsx)(FT.J, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: TT => {
          const oT = TT.currentTarget;
          if (!pT(oT)) {
            const TT = function(TT) {
              var oT, IT;
              const iT = [TT.previousElementSibling, TT.nextElementSibling].find((TT => TT instanceof HTMLElement && TT.matches(bT)));
              return null !== (oT = null !== iT && void 0 !== iT ? iT : null === (IT = TT.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === IT ? void 0 : IT.querySelector(`:is(${bT}):not(.HudFixJoystickButton)`)) && void 0 !== oT ? oT : null
            }(oT);
            TT && GT(oT, TT)
          }
          ST.c.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: TT("hudLayout:fixJoystick")
      })
    }
    var PT = IT(68),
      dT = IT(1249),
      VT = IT(1108),
      To = IT(2451);

    function oo(TT) {
      return {
        x: (TT.left + TT.right) / 2,
        y: (TT.top + TT.bottom) / 2
      }
    }

    function Io(TT) {
      return 0 === TT.length ? null : TT.reduce(((TT, oT) => ({
        left: Math.min(TT.left, oT.left),
        top: Math.min(TT.top, oT.top),
        right: Math.max(TT.right, oT.right),
        bottom: Math.max(TT.bottom, oT.bottom)
      })))
    }

    function io(TT, oT) {
      const IT = Math.max(0, (oT - (TT.right - TT.left)) / 2),
        iT = Math.max(0, (oT - (TT.bottom - TT.top)) / 2);
      return {
        left: TT.left - IT,
        top: TT.top - iT,
        right: TT.right + IT,
        bottom: TT.bottom + iT
      }
    }

    function zo(TT, oT, IT) {
      const iT = oT => TT.x >= oT.left && TT.x <= oT.right && TT.y >= oT.top && TT.y <= oT.bottom;
      let zT = null,
        kT = 1 / 0;
      for (const {
          id: XT,
          box: BT
        }
        of oT) {
        const TT = (BT.right - BT.left) * (BT.bottom - BT.top);
        iT(BT) && TT < kT && (kT = TT, zT = XT)
      }
      if (null !== zT) return zT;
      let WT = 1 / 0;
      for (const {
          id: XT,
          box: BT
        }
        of oT) {
        if (!iT(io(BT, IT))) continue;
        const oT = oo(BT),
          kT = Math.hypot(TT.x - oT.x, TT.y - oT.y);
        kT < WT && (WT = kT, zT = XT)
      }
      return zT
    }

    function ko(TT, oT, IT) {
      return {
        left: IT.left,
        top: IT.top,
        right: TT - IT.right,
        bottom: oT - IT.bottom
      }
    }

    function Wo(TT, oT, IT, iT) {
      const zT = (TT, oT, IT) => Math.max(Math.min(oT, 0), Math.min(Math.max(IT, 0), TT));
      return {
        x: zT(oT, iT.left - TT.left, iT.right - TT.right),
        y: zT(IT, iT.top - TT.top, iT.bottom - TT.bottom)
      }
    }

    function Xo(TT, oT, IT, iT) {
      return oT <= 0 || IT <= 0 ? 1 : Math.max(.05, Math.min(1, TT / oT, iT / IT))
    }

    function Bo(TT, oT, IT) {
      return Math.min(TT.right, oT.right) - Math.max(TT.left, oT.left) > IT && Math.min(TT.bottom, oT.bottom) - Math.max(TT.top, oT.top) > IT
    }

    function Fo(TT, oT) {
      const IT = (TT, oT, IT, iT) => oT - TT > iT - IT ? IT - TT > oT - iT ? iT - oT : IT - TT : TT < IT ? IT - TT : oT > iT ? iT - oT : 0;
      return {
        x: IT(TT.left, TT.right, oT.left, oT.right),
        y: IT(TT.top, TT.bottom, oT.top, oT.bottom)
      }
    }

    function So(TT, oT) {
      let {
        avoid: IT = null,
        bounds: iT = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, zT = 0, kT = 1 / 0;
      return TT.forEach(((TT, WT) => {
        const XT = oT.filter((oT => Bo(TT, oT, 0))).length,
          BT = null !== iT && (TT.left < iT.left || TT.top < iT.top || TT.right > iT.right || TT.bottom > iT.bottom),
          FT = XT + (IT && Bo(TT, IT, 0) ? 1e3 : 0) + (BT ? 1e6 : 0);
        FT < kT && (zT = WT, kT = FT)
      })), zT
    }
    var Do = IT(3932),
      Lo = IT(2710);
    const xo = ["J", "C", "A", "P", "U", "X", "G"];

    function co(TT, oT) {
      TT.replaceChildren(...[...oT.childNodes].map((TT => TT.cloneNode(!0))))
    }
    const Ko = TT => ({
      [HT]: TT
    });

    function Mo(TT) {
      let {
        id: oT,
        slot: IT,
        icon: iT,
        label: kT,
        hidden: WT,
        className: XT,
        face: FT
      } = TT;
      const ST = (0, zT.useRef)(null);
      return (0, zT.useLayoutEffect)((() => {
        FT && ST.current && co(ST.current, FT)
      }), [FT]), (0, wT.jsxs)("div", {
        className: BT()("TouchKeyHit", `TouchSlot${IT}`, XT, {
          HudPreviewGhost: WT.has(oT)
        }),
        ...Ko(oT),
        children: [FT && (0, wT.jsx)("div", {
          ref: ST,
          className: BT()("TouchKey", {
            Labelled: FT.classList.contains("Labelled")
          })
        }), !FT && (0, wT.jsxs)("div", {
          className: BT()("TouchKey", {
            Labelled: void 0 !== kT
          }),
          children: [iT && (0, wT.jsx)(ET.e, {
            name: iT
          }), void 0 !== kT && (0, wT.jsx)("span", {
            className: "TouchKeyLabel",
            children: kT
          })]
        })]
      })
    }

    function ro(TT) {
      let {
        item: oT,
        selected: IT
      } = TT;
      const iT = (0, zT.useRef)(null);
      return (0, zT.useLayoutEffect)((() => {
        iT.current && co(iT.current, oT)
      }), [oT]), (0, wT.jsx)("div", {
        ref: iT,
        className: BT()("InvenItem", {
          Selected: IT
        })
      })
    }

    function Ao(TT) {
      let {
        id: oT,
        icon: IT,
        className: iT,
        hidden: zT
      } = TT;
      return (0, wT.jsx)("div", {
        className: BT()("TopRightIcon", iT, {
          HudPreviewGhost: oT && (null === zT || void 0 === zT ? void 0 : zT.has(oT))
        }),
        children: (0, wT.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...oT ? Ko(oT) : {},
          children: (0, wT.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, wT.jsx)(ET.e, {
              name: IT
            })
          })
        })
      })
    }

    function go(TT) {
      let {
        next: oT,
        hidden: IT
      } = TT;
      return (0, wT.jsx)("div", {
        className: BT()("HotBarArrow", oT ? "Next" : "Previous", {
          HudPreviewGhost: IT
        }),
        ...Ko("arrows"),
        children: (0, wT.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, wT.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, wT.jsx)(ET.e, {
              name: oT ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function ho() {
      return (0, wT.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, wT.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, wT.jsx)("div", {
            className: "SocialBar",
            children: (0, wT.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, wT.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, wT.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, wT.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, wT.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, wT.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, wT.jsx)(ET.e, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, wT.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, wT.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, wT.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, wT.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, wT.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, wT.jsx)(ET.e, {
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
    const wo = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      mo = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      eo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      Ro = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function uo(TT) {
      let {
        presence: oT,
        portraitPhone: IT,
        hidden: zT,
        actionButtons: kT,
        joystickFixed: WT,
        keysAbove: XT,
        auraBar: FT
      } = TT;
      const {
        t: ST
      } = (0, iT.t)(), LT = TT => ({
        HudPreviewGhost: zT.has(TT)
      });
      return (0, wT.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, wT.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, wT.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, wT.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, wT.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, wT.jsx)("div", {
              className: "InGameHeaderGameName",
              children: ST("hudLayout:previewGameName")
            })]
          })
        }), (0, wT.jsx)("div", {
          className: "TopLeftElements",
          children: (0, wT.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, wT.jsxs)("div", {
              className: "Chat",
              children: [(0, wT.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [ST("hudLayout:previewChatLine"), ST("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), ST("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((TT => (0, wT.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, wT.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, wT.jsx)("div", {
                      className: "IndividualText",
                      children: TT
                    })
                  })
                }, TT)))
              }), (0, wT.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: BT()("ChatIconWrapper SmallTextLight", LT("chat")),
                ...Ko("chat"),
                children: (0, wT.jsx)(ET.e, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, wT.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, wT.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, wT.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, wT.jsx)("div", {
                className: "TopRightIconsContainer",
                ...Ko("menu"),
                children: (0, wT.jsxs)("div", {
                  className: BT()("TopRightIcons TouchInGame", {
                    Column: IT
                  }),
                  children: [(0, wT.jsx)(Ao, {
                    icon: "gear"
                  }), IT && (0, wT.jsx)(Ao, {
                    icon: "ellipsis",
                    className: "TopRightTrayToggle"
                  }), !IT && (0, wT.jsxs)(wT.Fragment, {
                    children: [(0, wT.jsx)(Ao, {
                      icon: "user-plus"
                    }), (0, wT.jsx)(Ao, {
                      icon: "shirt"
                    }), (0, wT.jsx)(Ao, {
                      icon: "list"
                    })]
                  }), (0, wT.jsx)(Ao, {
                    id: "perspective",
                    icon: "video",
                    className: "TopRightCameraIcon",
                    hidden: zT
                  }), (0, wT.jsx)(Ao, {
                    icon: "face-smile"
                  })]
                })
              })
            }), DT.featureFlags.useSocialFeatures && (0, wT.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, wT.jsx)(ho, {})
            })]
          })
        }), (0, wT.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, wT.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, wT.jsxs)("div", {
            className: "TouchInteractKey",
            ...Ko("interact"),
            children: [(0, wT.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, wT.jsx)(ET.e, {
                name: "hand-back-point-up"
              })
            }), (0, wT.jsx)("div", {
              children: ST("hudLayout:previewInteract")
            })]
          })
        }), (0, wT.jsx)("div", {
          className: "BottomCentre",
          children: (0, wT.jsxs)("div", {
            className: "BottomElements",
            children: [(0, wT.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, wT.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, wT.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...Ko("hotbar"),
                children: (0, wT.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, wT.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, wT.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, wT.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, wT.jsx)(ET.e, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), FT && (0, wT.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, wT.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, wT.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, Lo.i)("glint"),
                    alt: ""
                  }), (0, wT.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, wT.jsx)("div", {
                  className: "AuraBar",
                  children: (0, wT.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, wT.jsx)("div", {
                className: "HotBarRow",
                children: (0, wT.jsx)("div", {
                  className: BT()("HotBarContainer Touch", {
                    KeysAbove: XT
                  }),
                  children: (0, wT.jsxs)("div", {
                    className: "HotBar",
                    ...Ko("hotbar"),
                    children: [(0, wT.jsxs)("div", {
                      className: BT()("TouchInventoryKeys", {
                        NoAuraBar: !FT
                      }),
                      children: [(0, wT.jsx)("div", {
                        className: BT()("TouchInventoryKey ShopKey", LT("inventory"), {
                          Hidden: null !== oT && !oT.shop
                        }),
                        ...Ko("inventory"),
                        children: (0, wT.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, wT.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, wT.jsx)(ET.e, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, wT.jsx)("div", {
                        className: BT()("TouchInventoryKey BagKey", LT("inventory"), {
                          Hidden: null !== oT && !oT.bag
                        }),
                        ...Ko("inventory"),
                        children: (0, wT.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, wT.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, wT.jsx)(ET.e, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, wT.jsx)(go, {
                      next: !1,
                      hidden: zT.has("arrows")
                    }), (0, wT.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== oT && oT.items.map(((TT, oT) => (0, wT.jsx)(ro, {
                        item: TT,
                        selected: TT.classList.contains("Selected")
                      }, oT))), null === oT && eo.map((TT => {
                        const oT = Ro[TT];
                        return (0, wT.jsx)("div", {
                          className: BT()("InvenItem", {
                            Selected: 0 === TT
                          }),
                          children: oT && (0, wT.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, wT.jsx)(ET.e, {
                              name: oT
                            })
                          })
                        }, TT)
                      }))]
                    }), (0, wT.jsx)(go, {
                      next: !0,
                      hidden: zT.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, wT.jsx)("div", {
              className: "BottomRightElements",
              children: (0, wT.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== oT && xo.map((TT => {
                  const IT = oT.faces[TT];
                  return IT && (0, wT.jsx)(Mo, {
                    id: wo[TT],
                    slot: TT,
                    face: IT,
                    className: mo[TT],
                    hidden: zT
                  }, TT)
                })), null === oT && (0, wT.jsxs)(wT.Fragment, {
                  children: [(0, wT.jsx)(Mo, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: zT
                  }), (0, wT.jsx)(Mo, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: zT
                  }), kT && (0, wT.jsxs)(wT.Fragment, {
                    children: [(0, wT.jsx)(Mo, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: zT
                    }), (0, wT.jsx)(Mo, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: zT
                    })]
                  }), !kT && (0, wT.jsx)(Mo, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: ST("touchKeys:scope"),
                    hidden: zT
                  }), (0, wT.jsx)(Mo, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: ST("touchKeys:fly"),
                    hidden: zT
                  }), (0, wT.jsx)(Mo, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: zT
                  })]
                })]
              })
            })]
          })
        }), (0, wT.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, wT.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, wT.jsxs)("div", {
              className: BT()("Joystick Resting HudPreviewJoystick", {
                Floating: !WT
              }),
              ...Ko("joystick"),
              children: [(0, wT.jsx)("div", {
                className: "JoystickBase"
              }), (0, wT.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function vo() {
      const [TT, oT] = (0, zT.useState)({}), IT = (0, zT.useCallback)((TT => {
        oT((oT => [...new Set([...Object.keys(oT), ...Object.keys(TT)])].every((IT => oT[IT] === TT[IT])) ? oT : TT))
      }), []);
      return [TT, IT]
    }
    const Eo = .05;

    function fo(TT) {
      var oT;
      let {
        selected: IT,
        layout: zT,
        actionButtons: kT,
        keyNames: WT,
        overlaps: XT,
        scaleCaps: ST,
        joystickFixed: DT,
        onScale: LT,
        onHidden: xT,
        onReset: cT,
        locked: KT,
        lockable: MT,
        onLocked: rT,
        extra: AT
      } = TT;
      const {
        t: gT
      } = (0, iT.t)(), hT = IT ? QT[IT] : null, mT = null !== IT && KT.has(IT), eT = (IT && zT.hudElements[IT] || fT.t)[2], RT = null !== (oT = IT && ST[IT]) && void 0 !== oT ? oT : fT.i, uT = TT => {
        IT && LT(IT, Math.min(RT, Math.round(100 * (eT + .1 * TT)) / 100))
      };
      return (0, wT.jsxs)(wT.Fragment, {
        children: [(0, wT.jsxs)("div", {
          className: BT()("HudQuickName SmallTextBold", {
            Overlap: XT.length > 0
          }),
          children: [XT.length > 0 && (0, wT.jsx)(ET.e, {
            name: "triangle-exclamation"
          }), hT ? nT(hT.id, kT, gT, WT) : gT("hudLayout:fullScreenHint"), XT.length > 0 && (0, wT.jsx)("span", {
            className: "HudQuickOverlap",
            children: gT("hudLayout:overlapsShort", {
              names: qT(XT, kT, gT, WT)
            })
          })]
        }), (null === hT || void 0 === hT ? void 0 : hT.scale) && (0, wT.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, wT.jsx)(FT.J, {
            disabled: mT || eT <= fT.l,
            ariaLabel: gT("hudLayout:smaller"),
            onClick: () => {
              uT(-1)
            },
            children: (0, wT.jsx)(ET.e, {
              name: "minus"
            })
          }), (0, wT.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*eT)}%`
          }), (0, wT.jsx)(FT.J, {
            disabled: mT || eT >= RT,
            ariaLabel: gT("hudLayout:larger"),
            onClick: () => {
              uT(1)
            },
            children: (0, wT.jsx)(ET.e, {
              name: "plus"
            })
          })]
        }), (hT || AT) && (0, wT.jsxs)("div", {
          className: "HudQuickActions",
          children: [hT && (0, wT.jsxs)(wT.Fragment, {
            children: [(0, wT.jsx)(tT, {
              id: hT.id,
              actionButtons: kT,
              keyNames: WT,
              locked: mT,
              lockable: MT(hT.id),
              onLocked: rT
            }), (0, wT.jsx)(lT, {
              id: hT.id,
              elements: zT.hudElements,
              actionButtons: kT,
              keyNames: WT,
              onHidden: xT
            }), (0, wT.jsx)(sT, {
              id: hT.id,
              elements: zT.hudElements,
              actionButtons: kT,
              keyNames: WT,
              locked: mT,
              onReset: cT
            }), yT(hT.id, DT) && (0, wT.jsx)(NT, {})]
          }), AT]
        })]
      })
    }
    var Co = IT(1102),
      jo = IT(3934);
    const Jo = "HudPreviewDoc",
      Uo = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      ao = new Set([Jo, ...Object.values(Uo)]),
      Yo = new Set(fT.z.map(Do.t)),
      Qo = new Set(Do.j);

    function Oo(TT, oT, IT) {
      let {
        keysAbove: iT
      } = IT;
      const zT = [...TT.documentElement.classList].filter((TT => !ao.has(TT) && !Qo.has(TT))),
        kT = [...oT.documentElement.classList].filter((TT => Qo.has(TT))),
        WT = [Jo, Uo.hotbar, Uo.hasShop, Uo.hasBag];
      iT && WT.push(Uo.keysAbove), oT.documentElement.className = [...zT, ...WT, ...kT].join(" ")
    }
    const Ho = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function no(TT, oT, IT, iT, zT) {
      const kT = (0, fT.B)(IT, iT, "joystick"),
        WT = (0, Do.x)((0, Do.H)(IT, iT, zT), iT),
        XT = WT.classes.filter((TT => !Yo.has(TT))),
        BT = oT.documentElement;
      (0, Do.K)({
        ...WT,
        classes: XT
      }, {
        vars: BT,
        safe: BT,
        classes: BT
      });
      const FT = (0, Do.D)(IT.hudLayouts[iT].hudSafe, window.innerWidth, window.innerHeight, qo(), (0, Do.I)(oT));
      BT.style.setProperty("--preview-joystick-shift-left", `${FT[3]}px`), BT.style.setProperty("--preview-joystick-shift-bottom", `${FT[2]}px`), BT.style.setProperty("--preview-joystick-scale", String(kT[2])), (0, jo.e)(BT, oT, IT, iT);
      for (const ST of Ho) BT.style.setProperty(ST, TT.documentElement.style.getPropertyValue(ST) || "0px")
    }

    function qo() {
      return (0, Do.G)(ST.c.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function Zo(TT) {
      return (0, Do.q)(qo(), (0, Do.I)(TT))
    }

    function so(TT, oT, IT) {
      const iT = TT.documentElement.style,
        zT = (0, Do.E)(oT),
        kT = iT.getPropertyValue(zT);
      try {
        return IT((TT => {
          iT.setProperty(zT, String(TT))
        }))
      } finally {
        "" === kT ? iT.removeProperty(zT) : iT.setProperty(zT, kT)
      }
    }

    function to(TT, oT) {
      const [IT, iT] = so(TT, "hotbar", (oT => {
        const IT = IT => {
          var iT, zT;
          return oT(IT), null !== (iT = null === (zT = TT.querySelector(".HotBarGameItemsContainer")) || void 0 === zT ? void 0 : zT.getBoundingClientRect().width) && void 0 !== iT ? iT : 0
        };
        return [IT(1), IT(fT.i)]
      }));
      return IT <= 0 ? fT.i : Math.min(fT.i, Math.max(1, Math.floor(iT / IT / oT + 1e-6) * oT))
    }
    const Go = 3,
      po = .5,
      bo = TT => TT.right - TT.left;
    const yo = (TT, oT) => Math.abs(oo(TT).x - oo(oT).x) + Math.abs(oo(TT).y - oo(oT).y) + Math.abs(bo(TT) - bo(oT));

    function No(TT, oT, IT, iT, zT) {
      let {
        canKeep: kT = () => !0,
        passes: WT = Go,
        before: XT,
        keysAboveOf: BT
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const FT = void 0 !== BT && BT(TT) !== BT(oT),
        ST = oT.hudLayouts[IT].hudLocked.filter((TT => kT(TT) && !(FT && "inventory" === TT))),
        DT = new Set(ST);
      if (0 === DT.size) return oT;
      const LT = [...JT].filter((iT => !ST.includes(iT) && (0, fT.B)(TT, IT, iT).join() === (0, fT.B)(oT, IT, iT).join())),
        xT = TT => {
          const oT = Io(LT.flatMap((oT => TT[oT] ? [TT[oT]] : [])));
          return {
            ...TT,
            cluster: null !== oT && void 0 !== oT ? oT : void 0
          }
        },
        cT = TT => {
          const oT = zT(TT);
          return oT && xT(oT)
        },
        KT = XT ? xT(XT) : cT(TT);
      let MT = KT && cT(oT);
      if (!KT || !MT) return oT;
      let rT = oT;
      for (let AT = 0; AT < WT && DT.size > 0; AT++) {
        const TT = new Map;
        for (const oT of DT) {
          const zT = KT[oT],
            kT = MT[oT],
            WT = zT && kT ? Po(oT, (0, fT.B)(rT, IT, oT), zT, kT, iT) : null;
          WT ? TT.set(oT, WT) : DT.delete(oT)
        }
        if (0 === TT.size) break;
        let zT = rT;
        for (const [oT, iT] of TT) zT = (0, fT.X)(zT, IT, oT, iT);
        const kT = cT(zT);
        if (!kT) return oT;
        let WT = rT;
        for (const [oT, iT] of TT) {
          const TT = kT[oT];
          TT && yo(KT[oT], TT) < yo(KT[oT], MT[oT]) - po ? WT = (0, fT.X)(WT, IT, oT, iT) : DT.delete(oT)
        }
        if (WT === rT) break;
        const XT = [...TT.keys()].every((TT => DT.has(TT)));
        if (rT = WT, MT = XT ? kT : cT(rT), !MT) return oT
      }
      return zT(rT), rT
    }

    function Po(TT, oT, IT, iT, zT) {
      let [kT, WT, XT] = oT;
      const BT = fT.y[TT],
        FT = {};
      BT.scale && bo(iT) > 0 && Math.abs(bo(IT) - bo(iT)) > po && (FT.scale = Math.max(fT.l, Math.min(fT.i, XT * bo(IT) / bo(iT))));
      const ST = oo(IT).x - oo(iT).x,
        DT = oo(IT).y - oo(iT).y;
      return BT.move && (Math.abs(ST) > po || Math.abs(DT) > po) && (FT.dx = kT + ST / zT.width, FT.dy = WT + DT / zT.height), void 0 === FT.scale && void 0 === FT.dx ? null : FT
    }
    let Vo = 0;

    function TI() {
      return Vo > 0
    }
    const oI = TT => 0 === TT.dx && 0 === TT.dy,
      II = .001,
      iI = TT => Math.abs(TT.dx) >= 5e-4 || Math.abs(TT.dy) >= 5e-4 ? TT : {
        dx: TT.dx,
        dy: TT.dy < 0 ? -.001 : II
      };

    function zI(TT) {
      let {
        preview: oT,
        stageRef: IT,
        ringRef: iT,
        centreLineRef: kT,
        snapCentre: WT,
        ready: XT,
        measure: BT,
        k: FT,
        viewport: ST,
        boxes: DT,
        pieces: LT,
        selected: xT,
        insets: cT,
        layout: KT,
        canMove: MT,
        onSelect: rT,
        onMove: AT
      } = TT;
      const gT = (0, zT.useRef)(null),
        hT = (0, zT.useCallback)((() => null !== gT.current), []),
        wT = (TT, oT) => {
          if (!oT) return null;
          const IT = oo(TT.origin),
            iT = oo(oT),
            zT = (TT.to.dx - TT.from.dx) * ST.width,
            kT = (TT.to.dy - TT.from.dy) * ST.height,
            WT = oT.right - oT.left,
            XT = oT.bottom - oT.top;
          return {
            skew: {
              x: iT.x - IT.x - zT,
              y: iT.y - IT.y - kT
            },
            box: {
              left: IT.x - WT / 2,
              top: IT.y - XT / 2,
              right: IT.x + WT / 2,
              bottom: IT.y + XT / 2
            }
          }
        },
        mT = (TT, IT) => {
          var zT;
          const WT = gT.current;
          if (!WT || WT.pointerId !== TT.pointerId) return;
          gT.current = null, null === (zT = kT.current) || void 0 === zT || zT.classList.remove("Shown", "Snapped");
          const XT = iT.current;
          if (XT && null !== WT.ringStyle && XT.setAttribute("style", WT.ringStyle), IT && WT.moved) {
            const TT = oI(WT.to) ? null : BT(WT.id),
              oT = TT ? Fo(TT, ko(ST.width, ST.height, cT)) : {
                x: 0,
                y: 0
              },
              IT = {
                dx: WT.to.dx + oT.x / ST.width,
                dy: WT.to.dy + oT.y / ST.height
              },
              iT = oI(WT.to) ? IT : iI(IT);
            AT(WT.id, iT.dx, iT.dy)
          } else oT(WT.id, null), IT && WT.tapPick && rT(WT.tapPick)
        };
      return {
        busy: hT,
        handlers: {
          onPointerDown: TT => {
            var oT;
            if (!XT || gT.current || !TT.target.closest(".HudPreviewHandle")) return;
            const iT = IT.current.getBoundingClientRect(),
              zT = {
                x: (TT.clientX - iT.left) / FT,
                y: (TT.clientY - iT.top) / FT
              },
              kT = "cluster" === xT ? DT.cluster : void 0,
              WT = kT && null !== zo(zT, [{
                id: "cluster",
                box: kT
              }], 40 / FT),
              BT = zo(zT, LT, 40 / FT),
              ST = WT ? "cluster" : BT;
            if (!ST) return;
            if (function(TT) {
                Vo++;
                const oT = IT => {
                  IT.pointerId === TT && (Vo = Math.max(0, Vo - 1), window.removeEventListener("pointerup", oT, !0), window.removeEventListener("pointercancel", oT, !0))
                };
                window.addEventListener("pointerup", oT, !0), window.addEventListener("pointercancel", oT, !0)
              }(TT.pointerId), !MT(ST)) return void rT(WT && BT ? BT : ST);
            rT(ST);
            const [cT, AT] = null !== (oT = KT.hudElements[ST]) && void 0 !== oT ? oT : [0, 0], hT = {
              dx: cT,
              dy: AT
            }, wT = {
              skew: {
                x: 0,
                y: 0
              },
              box: DT[ST]
            };
            gT.current = {
              id: ST,
              pointerId: TT.pointerId,
              startX: TT.clientX,
              startY: TT.clientY,
              origin: DT[ST],
              from: hT,
              to: hT,
              moved: !1,
              home: oI(hT) ? {
                centre: oo(DT[ST]),
                anchor: wT
              } : null,
              away: oI(hT) ? null : wT,
              anchor: wT,
              ringStyle: null,
              tapPick: WT ? BT : null
            }, TT.currentTarget.setPointerCapture(TT.pointerId)
          },
          onPointerMove: TT => {
            const IT = gT.current;
            if (!IT || IT.pointerId !== TT.pointerId) return;
            const zT = TT.clientX - IT.startX,
              XT = TT.clientY - IT.startY;
            if (!IT.moved && Math.hypot(zT, XT) < 5) return;
            const DT = !IT.moved;
            var LT, xT;
            (IT.moved = !0, DT) && (IT.ringStyle = null !== (LT = null === (xT = iT.current) || void 0 === xT ? void 0 : xT.getAttribute("style")) && void 0 !== LT ? LT : null);
            const KT = ko(ST.width, ST.height, cT);
            if (!IT.home) {
              var MT;
              IT.to = {
                dx: 0,
                dy: 0
              }, oT(IT.id, IT.to);
              const TT = BT(IT.id),
                iT = null !== (MT = wT(IT, TT)) && void 0 !== MT ? MT : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: IT.origin
                },
                zT = oo(IT.origin);
              IT.home = {
                centre: TT ? oo(TT) : {
                  x: zT.x - IT.from.dx * ST.width,
                  y: zT.y - IT.from.dy * ST.height
                },
                anchor: iT
              }
            }
            const rT = IT.home;
            let AT = !1;
            const hT = TT => {
                AT = !1;
                let iT = Wo(TT.box, zT / FT, XT / FT, KT);
                const kT = ST.width / 2;
                if (WT && Math.abs(oo(IT.origin).x + iT.x - kT) <= 8 / FT) {
                  const oT = kT - oo(IT.origin).x,
                    zT = Wo(TT.box, oT, iT.y, KT);
                  AT = Math.abs(zT.x - oT) < .01, AT && (iT = zT)
                }
                const BT = function(TT, oT, IT, iT, zT) {
                  const kT = TT.dx * iT + oT,
                    WT = TT.dy * zT + IT,
                    XT = TT => Math.max(-1, Math.min(1, TT));
                  return {
                    dx: XT(kT / iT),
                    dy: XT(WT / zT)
                  }
                }(IT.from, iT.x - TT.skew.x, iT.y - TT.skew.y, ST.width, ST.height);
                IT.to = iI(BT), IT.anchor = TT, oT(IT.id, IT.to)
              },
              mT = Wo(rT.anchor.box, zT / FT, XT / FT, KT),
              eT = kT.current,
              RT = oo(IT.origin),
              uT = 6 / FT;
            if (Math.abs(RT.x + mT.x - rT.centre.x) <= uT && Math.abs(RT.y + mT.y - rT.centre.y) <= uT) IT.to = {
              dx: 0,
              dy: 0
            }, IT.anchor = rT.anchor, AT = WT && Math.abs(rT.centre.x - ST.width / 2) < 1, oT(IT.id, IT.to);
            else if (IT.away) hT(IT.away);
            else {
              var vT;
              hT(rT.anchor), IT.away = null !== (vT = wT(IT, BT(IT.id))) && void 0 !== vT ? vT : rT.anchor, hT(IT.away)
            }
            null === eT || void 0 === eT || eT.classList.add("Shown"), null === eT || void 0 === eT || eT.classList.toggle("Snapped", AT), (TT => {
              const oT = iT.current;
              if (oT) {
                const {
                  skew: IT,
                  box: iT
                } = TT.anchor;
                oT.style.left = iT.left * FT + "px", oT.style.top = iT.top * FT + "px", oT.style.width = (iT.right - iT.left) * FT + "px", oT.style.height = (iT.bottom - iT.top) * FT + "px", oT.style.translate = `${((TT.to.dx-TT.from.dx)*ST.width+IT.x)*FT}px ${((TT.to.dy-TT.from.dy)*ST.height+IT.y)*FT}px`
              }
            })(IT)
          },
          onPointerUp: TT => {
            mT(TT, !0)
          },
          onPointerCancel: TT => {
            mT(TT, !1)
          }
        }
      }
    }

    function kI(TT, oT) {
      return Object.keys(TT).filter((TT => TT !== oT)).map((oT => TT[oT]))
    }

    function WI(TT) {
      const oT = [],
        IT = !TT.documentElement.classList.contains((0, Do.B)("perspective"));
      for (const WT of TT.querySelectorAll(`[${HT}]`)) {
        const TT = IT && "perspective" === WT.getAttribute(HT) ? WT.querySelector(".ScaleOnHover") : null,
          iT = (null !== TT && void 0 !== TT ? TT : WT).getBoundingClientRect();
        (iT.width > 0 || iT.height > 0) && oT.push({
          id: WT.getAttribute(HT),
          box: {
            left: iT.left,
            top: iT.top,
            right: iT.right,
            bottom: iT.bottom
          }
        })
      }
      const iT = TT => Io(oT.filter((oT => {
          let {
            id: IT
          } = oT;
          return TT(IT)
        })).map((TT => {
          let {
            box: oT
          } = TT;
          return oT
        }))),
        zT = {};
      for (const WT of new Set(oT.map((TT => TT.id)))) zT[WT] = iT((TT => TT === WT));
      const kT = iT((TT => JT.has(TT)));
      return kT && (zT.cluster = kT), {
        boxes: zT,
        pieces: oT
      }
    }

    function XI(TT, oT, IT) {
      const iT = oT.right - oT.left,
        zT = oT.bottom - oT.top;
      return so(TT, "cluster", (oT => {
        const kT = IT => {
            oT(IT);
            const iT = Io([...TT.querySelectorAll(`[${HT}]:not(.HudPreviewGhost)`)].filter((TT => JT.has(TT.getAttribute(HT)))).map((TT => {
              const oT = TT.getBoundingClientRect();
              return {
                left: oT.left,
                top: oT.top,
                right: oT.right,
                bottom: oT.bottom
              }
            })));
            return iT ? {
              w: iT.right - iT.left,
              h: iT.bottom - iT.top
            } : null
          },
          WT = TT => !TT || TT.w <= iT && TT.h <= zT,
          XT = kT(1),
          BT = kT(fT.i);
        if (!XT || WT(BT)) return fT.i;
        const FT = (TT, oT, IT) => oT > TT ? 1 + (IT - TT) * (fT.i - 1) / (oT - TT) : fT.i;
        let ST = Math.floor(Math.min(fT.i, FT(XT.w, BT.w, iT), FT(XT.h, BT.h, zT)) / IT + 1e-6) * IT;
        for (; ST > 1 && !WT(kT(ST));) ST = Math.round(100 * (ST - IT)) / 100;
        return Math.max(1, ST)
      }))
    }

    function BI(TT) {
      Oo(document, TT, {
        keysAbove: !1
      });
      const oT = parseFloat(getComputedStyle(TT.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        IT = Number.isFinite(oT) && oT < 0;
      return Oo(document, TT, {
        keysAbove: IT
      }), IT
    }

    function FI(TT, oT) {
      let {
        layout: IT,
        orientation: iT,
        viewport: kT,
        replicaKey: WT,
        joystickFixed: XT,
        busy: BT
      } = oT;
      const [FT, ST] = (0, zT.useState)(null), [DT, LT] = (0, zT.useState)({
        boxes: {},
        pieces: []
      }), [xT, cT] = (0, zT.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [KT, MT] = (0, zT.useState)(!1), [rT, AT] = (0, zT.useState)(!1), [gT, hT] = (0, zT.useState)(!1), wT = (0, zT.useCallback)((TT => {
        AT(TT), TT && hT(!0)
      }), []), mT = IT.hudLayouts[iT].hudSafe, eT = (0, zT.useCallback)((() => {
        var oT;
        const IT = null === (oT = TT.current) || void 0 === oT ? void 0 : oT.contentDocument;
        null !== IT && void 0 !== IT && IT.body && ST(IT)
      }), [TT]), RT = (0, zT.useCallback)((() => {
        FT && (LT(WI(FT)), cT(function(TT, oT) {
          const IT = Zo(TT),
            [iT, zT, kT, WT] = oT ? (0, Do.r)(oT, window.innerWidth, window.innerHeight, IT) : IT;
          return {
            top: iT,
            right: zT,
            bottom: kT,
            left: WT
          }
        }(FT, mT)))
      }), [FT, mT]), uT = (0, zT.useCallback)((() => {
        FT && MT(BI(FT))
      }), [FT]), vT = (0, zT.useRef)((() => {}));
      return vT.current = () => {
        uT(), BT() || RT()
      }, (0, zT.useLayoutEffect)((() => {
        if (FT) return function(TT, oT, IT, iT) {
          const zT = new Map,
            kT = new Set;
          let WT = null;
          const XT = () => {
              WT !== (0 === kT.size) && (WT = 0 === kT.size, null === iT || void 0 === iT || iT(WT))
            },
            BT = () => {
              const iT = new Set;
              for (const WT of TT.head.querySelectorAll('style, link[rel="stylesheet"]')) {
                iT.add(WT);
                const TT = zT.get(WT);
                if (TT) "STYLE" === WT.tagName && TT.textContent !== WT.textContent && (TT.textContent = WT.textContent, null === IT || void 0 === IT || IT());
                else {
                  const TT = WT.cloneNode(!0);
                  if ("LINK" === TT.tagName) {
                    kT.add(TT);
                    const oT = () => {
                      kT.delete(TT), XT()
                    };
                    TT.addEventListener("load", oT), TT.addEventListener("error", oT), IT && TT.addEventListener("load", IT)
                  }
                  zT.set(WT, TT), oT.head.appendChild(TT)
                }
              }
              for (const [TT, oT] of zT) iT.has(TT) || (oT.remove(), zT.delete(TT), kT.delete(oT));
              XT()
            };
          BT();
          const FT = new MutationObserver(BT);
          return FT.observe(TT.head, {
            childList: !0,
            subtree: !0,
            characterData: !0
          }), () => {
            FT.disconnect()
          }
        }(document, FT, (() => {
          vT.current()
        }), wT)
      }), [FT, wT]), (0, zT.useLayoutEffect)(uT, [uT, kT]), (0, zT.useLayoutEffect)((() => {
        FT && (Oo(document, FT, {
          keysAbove: KT
        }), no(document, FT, IT, iT, XT), uT(), RT())
      }), [FT, IT, iT, KT, WT, XT, kT, RT, uT]), (0, zT.useEffect)((() => {
        var TT;
        if (!FT) return;
        const oT = new ResizeObserver((() => {
          BT() || RT()
        }));
        for (const IT of FT.querySelectorAll(`[${HT}]`)) oT.observe(IT);
        return null === (TT = FT.fonts) || void 0 === TT || TT.ready.then(RT), () => {
          oT.disconnect()
        }
      }), [FT, RT, BT, WT]), {
        doc: FT,
        onLoad: eT,
        boxes: DT.boxes,
        pieces: DT.pieces,
        insets: xT,
        keysAbove: KT,
        ready: rT,
        settled: gT
      }
    }
    const SI = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"],
        ["menu", "perspective"]
      ],
      DI = (TT, oT, IT) => {
        var iT;
        const [zT, kT] = null !== (iT = IT.hudElements.perspective) && void 0 !== iT ? iT : [0, 0], WT = 0 === zT && 0 === kT;
        return "cluster" === TT && JT.has(oT) || "cluster" === oT && JT.has(TT) || SI.some((iT => {
          let [zT, kT] = iT;
          const XT = IT.hudElements.hotbar,
            BT = "inventory" === kT && IT.hudLocked.includes(kT) && void 0 !== XT && !(0, fT.I)(XT);
          return (TT === zT && oT === kT || TT === kT && oT === zT) && (WT || "perspective" !== kT) && !BT
        }))
      };
    const LI = ["Above", "Below", "Left", "Right"];

    function xI(TT, oT, IT, iT, zT) {
      const kT = IT[TT],
        WT = (kT.left + kT.right) / 2,
        XT = (kT.top + kT.bottom) / 2,
        BT = (7.5 * oT.length + 14) / iT,
        FT = 18 / iT,
        ST = {
          Above: {
            left: WT - BT / 2,
            top: kT.top - FT,
            right: WT + BT / 2,
            bottom: kT.top
          },
          Below: {
            left: WT - BT / 2,
            top: kT.bottom,
            right: WT + BT / 2,
            bottom: kT.bottom + FT
          },
          Left: {
            left: kT.left - BT,
            top: XT - FT / 2,
            right: kT.left,
            bottom: XT + FT / 2
          },
          Right: {
            left: kT.right,
            top: XT - FT / 2,
            right: kT.right + BT,
            bottom: XT + FT / 2
          }
        },
        DT = kI(IT, TT),
        LT = {
          left: 0,
          top: 0,
          right: zT.width,
          bottom: zT.height
        };
      return LI[So(LI.map((TT => ST[TT])), DT, {
        bounds: LT
      })]
    }

    function cI() {
      const [TT, oT] = (0, VT.e)();
      return (0, zT.useMemo)((() => ({
        width: TT,
        height: oT
      })), [TT, oT])
    }

    function KI(TT) {
      var oT;
      const {
        layout: IT,
        orientation: kT,
        selected: WT,
        onSelect: XT,
        onMove: FT,
        canMove: ST,
        actionButtons: DT,
        joystickFixed: LT,
        presence: xT,
        keyNames: KT,
        maxHeight: MT,
        fill: rT = !1,
        apiRef: AT
      } = TT, {
        t: gT
      } = (0, iT.t)(), hT = cI(), mT = (null !== (oT = (0, cT.g)("maxAuraLevel")) && void 0 !== oT ? oT : 0) > 0, eT = IT.hudLayouts[kT], RT = (0, zT.useRef)(null), uT = (0, zT.useRef)(null), vT = (0, zT.useRef)(null), CT = (0, zT.useRef)(null), jT = (0, zT.useRef)(null), UT = (0, zT.useRef)(null), aT = (0, To.d)(RT).width, YT = rT ? 1 : aT > 0 ? Xo(aT, hT.width, hT.height, MT) : 0, QT = (0, zT.useRef)((() => !1)), HT = (0, zT.useCallback)((() => QT.current()), []), {
        doc: qT,
        onLoad: ZT,
        boxes: lT,
        pieces: sT,
        insets: tT,
        keysAbove: GT,
        ready: pT,
        settled: bT
      } = FI(vT, {
        layout: IT,
        orientation: kT,
        viewport: hT,
        replicaKey: `${DT}:${LT}:${mT}`,
        joystickFixed: LT,
        busy: HT
      }), yT = (0, zT.useCallback)((TT => {
        qT && no(document, qT, TT, kT, LT)
      }), [qT, kT, LT]), NT = (0, zT.useCallback)((TT => qT && bT ? (yT(TT), BI(qT), function(TT) {
        let {
          boxes: oT,
          pieces: IT
        } = TT;
        const iT = IT.find((TT => "inventory" === TT.id));
        if (!iT || !oT.inventory) return oT;
        const zT = oo(oT.inventory),
          kT = bo(iT.box) / 2,
          WT = (iT.box.bottom - iT.box.top) / 2;
        return {
          ...oT,
          inventory: {
            left: zT.x - kT,
            top: zT.y - WT,
            right: zT.x + kT,
            bottom: zT.y + WT
          }
        }
      }(WI(qT))) : null), [qT, bT, yT]), dT = (0, zT.useCallback)((TT => !!qT && (yT(TT), BI(qT))), [qT, yT]), VT = (0, zT.useRef)(null), Io = (0, zT.useRef)(null), zo = (0, zT.useRef)(IT);
      zo.current = IT;
      const Wo = (0, zT.useCallback)((() => {
        null !== VT.current && (cancelAnimationFrame(VT.current), VT.current = null)
      }), []);
      (0, zT.useEffect)((() => Wo), [IT, Wo]);
      const {
        lockable: So
      } = TT, Lo = (0, zT.useCallback)((TT => {
        if (yT(TT), !bT || 0 === IT.hudLayouts[kT].hudLocked.length) return;
        const oT = IT;
        Wo(), VT.current = requestAnimationFrame((() => {
          var IT;
          if (VT.current = null, zo.current !== oT) return;
          const iT = (null === (IT = Io.current) || void 0 === IT ? void 0 : IT.from) === oT ? Io.current.boxes : NT(oT);
          iT && (Io.current = {
            from: oT,
            boxes: iT
          }), yT(iT ? No(oT, TT, kT, hT, NT, {
            canKeep: So,
            passes: 1,
            before: iT,
            keysAboveOf: dT
          }) : TT)
        }))
      }), [yT, bT, IT, kT, hT, NT, dT, So, Wo]), xo = zI({
        preview: (TT, oT) => {
          oT ? Lo((0, fT.X)(IT, kT, TT, oT)) : (Wo(), yT(IT))
        },
        stageRef: uT,
        ringRef: CT,
        centreLineRef: jT,
        snapCentre: IT.hudSnapCentre,
        ready: bT,
        measure: TT => {
          var oT;
          return qT && pT && null !== (oT = WI(qT).boxes[TT]) && void 0 !== oT ? oT : null
        },
        k: YT,
        viewport: hT,
        boxes: lT,
        pieces: sT,
        selected: WT,
        insets: tT,
        layout: eT,
        canMove: ST,
        onSelect: XT,
        onMove: (TT, oT, IT) => {
          Wo(), FT(TT, oT, IT)
        }
      });
      (0, zT.useLayoutEffect)((() => {
        QT.current = xo.busy
      }), [xo.busy]);
      const co = (0, zT.useRef)([]),
        Ko = (0, zT.useRef)(eT.hudElements);
      (0, zT.useEffect)((() => {
        for (const zT of Object.keys(eT.hudElements)) {
          var TT, oT, IT, iT;
          (null !== (TT = null === (oT = eT.hudElements[zT]) || void 0 === oT ? void 0 : oT[2]) && void 0 !== TT ? TT : 1) > (null !== (IT = null === (iT = Ko.current[zT]) || void 0 === iT ? void 0 : iT[2]) && void 0 !== IT ? IT : 1) && ST(zT) && !OT(zT, eT.hudElements[zT]) && co.current.push(zT)
        }
        Ko.current = eT.hudElements
      }), [eT.hudElements, ST]), (0, zT.useEffect)((() => {
        if (!pT) return;
        const TT = co.current.shift(),
          oT = TT && lT[TT];
        if (!TT || !oT || xo.busy()) return;
        const IT = Fo(oT, ko(hT.width, hT.height, tT));
        if (0 !== IT.x || 0 !== IT.y) {
          var iT;
          const [oT, zT] = null !== (iT = eT.hudElements[TT]) && void 0 !== iT ? iT : [0, 0];
          FT(TT, oT + IT.x / hT.width, zT + IT.y / hT.height)
        }
      }), [lT, pT]), (0, zT.useImperativeHandle)(AT, (() => ({
        setScale: (TT, oT) => {
          Lo((0, fT.X)(IT, kT, TT, {
            scale: oT
          }))
        },
        setOpacity: TT => {
          yT({
            ...IT,
            hudKeyOpacity: TT
          })
        },
        keepLocks: (TT, oT) => (Wo(), No(TT, oT, kT, hT, NT, {
          canKeep: So,
          keysAboveOf: dT
        })),
        setSafe: TT => {
          Lo((0, fT._)(IT, kT, TT)), UT.current && (UT.current.style.inset = (0, Do.r)(TT, hT.width, hT.height, Zo(null !== qT && void 0 !== qT ? qT : document)).map((TT => TT * YT + "px")).join(" "))
        }
      })), [yT, Lo, NT, dT, Wo, So, qT, IT, kT, hT, YT]);
      const Mo = new Set(Object.keys(eT.hudElements).filter((TT => 1 === eT.hudElements[TT][3]))),
        ro = WT ? lT[WT] : void 0,
        Ao = WT ? nT(WT, DT, gT, KT) : "",
        go = WT ? function(TT, oT, IT) {
          const iT = TT => {
            var oT;
            return 1 === (null === (oT = IT.hudElements[TT]) || void 0 === oT ? void 0 : oT[3])
          };
          if (iT(TT)) return [];
          const zT = oT.filter((oT => {
              let {
                id: IT
              } = oT;
              return "cluster" === TT ? JT.has(IT) : IT === TT
            })),
            kT = new Set;
          for (const WT of oT) WT.id === TT || kT.has(WT.id) || DI(TT, WT.id, IT) || iT(WT.id) || void 0 === IT.hudElements[TT] && void 0 === IT.hudElements[WT.id] || zT.some((TT => {
            let {
              id: oT,
              box: IT
            } = TT;
            return oT !== WT.id && Bo(IT, WT.box, 2)
          })) && kT.add(WT.id);
          return [...kT]
        }(WT, sT, eT) : [],
        ho = go.join(),
        wo = (0, zT.useRef)(TT.onReady);
      wo.current = TT.onReady, (0, zT.useEffect)((() => {
        var TT;
        null === (TT = wo.current) || void 0 === TT || TT.call(wo, bT)
      }), [bT]);
      const mo = (0, zT.useRef)(TT.onMeasured);
      (0, zT.useLayoutEffect)((() => {
        mo.current = TT.onMeasured
      })), (0, zT.useEffect)((() => {
        var TT;
        const oT = qT ? {
          hotbar: to(qT, Eo),
          cluster: XI(qT, ko(hT.width, hT.height, tT), Eo)
        } : {};
        null === (TT = mo.current) || void 0 === TT || TT.call(mo, lT, ho ? ho.split(",") : [], oT)
      }), [lT, ho, qT, hT, tT]);
      const eo = TT => ({
        left: TT.left * YT,
        top: TT.top * YT,
        width: (TT.right - TT.left) * YT,
        height: (TT.bottom - TT.top) * YT
      });
      return (0, wT.jsx)("div", {
        ref: RT,
        className: BT()("HudPreviewBox", {
          Fill: rT
        }),
        style: {
          height: hT.height * YT
        },
        children: (0, wT.jsxs)("div", {
          ref: uT,
          className: "HudPreviewStage",
          style: {
            width: hT.width * YT,
            height: hT.height * YT
          },
          children: [(0, wT.jsx)("iframe", {
            ref: vT,
            className: "HudPreviewFrame",
            srcDoc: "<!DOCTYPE html><html><head></head><body></body></html>",
            onLoad: ZT,
            title: gT("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: hT.width,
              height: hT.height,
              transform: `scale(${YT})`
            }
          }), qT && (0, PT.createPortal)((0, wT.jsx)(uo, {
            presence: xT,
            portraitPhone: (0, Co.f)(hT.width, hT.height),
            hidden: Mo,
            actionButtons: DT,
            joystickFixed: LT,
            keysAbove: GT,
            auraBar: mT
          }), qT.body), (0, wT.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...xo.handlers,
            children: [(0, wT.jsx)("div", {
              ref: UT,
              className: "HudPreviewSafeZone",
              style: {
                top: tT.top * YT,
                right: tT.right * YT,
                bottom: tT.bottom * YT,
                left: tT.left * YT
              }
            }), sT.map(((TT, oT) => {
              let {
                id: IT,
                box: iT
              } = TT;
              return (0, wT.jsx)("div", {
                className: "HudPreviewHandle",
                style: eo(io(iT, 40 / YT))
              }, `${IT}:${oT}`)
            })), eT.hudLocked.map((TT => {
              const oT = lT[TT];
              return oT && (0, wT.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: oT.right * YT,
                  top: oT.top * YT
                },
                children: (0, wT.jsx)(ET.e, {
                  name: "lock"
                })
              }, TT)
            })), (0, wT.jsx)("div", {
              ref: jT,
              className: "HudPreviewCentreLine",
              style: {
                left: hT.width / 2 * YT
              }
            }), WT && ro && (0, wT.jsx)("div", {
              ref: CT,
              className: BT()("HudPreviewRing", {
                Fixed: !ST(WT),
                Overlap: go.length > 0
              }),
              style: eo(ro),
              children: (0, wT.jsx)("span", {
                className: BT()("HudPreviewRingLabel", xI(WT, Ao, lT, YT, hT)),
                children: Ao
              })
            })]
          })]
        })
      })
    }

    function MI(TT, oT) {
      (0, zT.useEffect)((() => {
        var IT;
        null === (IT = TT.current) || void 0 === IT || IT.toggleAttribute("inert", oT)
      }), [TT, oT])
    }
    const rI = "hudFullScreen";

    function AI(TT) {
      let {
        onScale: oT,
        onHidden: IT,
        onReset: kT,
        locked: WT,
        lockable: XT,
        onLocked: BT,
        onClose: ST,
        ...DT
      } = TT;
      const {
        t: LT
      } = (0, iT.t)(), xT = (0, zT.useRef)(null);
      (0, dT.s)("popup", xT, ST),
      function(TT) {
        const oT = (0, zT.useRef)(TT);
        oT.current = TT, (0, zT.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [rI]: !0
          }, "");
          let TT = !1;
          const IT = () => {
            TT = !0, oT.current()
          };
          return window.addEventListener("popstate", IT), () => {
            var oT;
            window.removeEventListener("popstate", IT), !TT && null !== (oT = window.history.state) && void 0 !== oT && oT[rI] && window.history.back()
          }
        }), [])
      }(ST), (0, zT.useEffect)((() => {
        function TT(TT) {
          "Escape" === TT.key && (TT.stopPropagation(), ST())
        }
        return window.addEventListener("keydown", TT, !0), () => {
          window.removeEventListener("keydown", TT, !0)
        }
      }), [ST]);
      const {
        selected: cT
      } = DT, KT = (0, zT.useRef)(null), MT = (0, zT.useRef)(null), [rT, AT] = (0, zT.useState)(!1);
      MI(MT, !rT);
      const [gT, hT] = (0, zT.useState)(null), [mT, eT] = (0, zT.useState)([]), [RT, uT] = vo(), vT = (0, zT.useRef)(DT.selected);
      vT.current = DT.selected;
      const ET = (0, zT.useRef)({}),
        fT = (0, zT.useCallback)((() => {
          const TT = KT.current;
          TT && hT(function(TT, oT, IT) {
            var iT;
            const {
              innerWidth: zT,
              innerHeight: kT
            } = window, WT = TT.offsetWidth, XT = TT.offsetHeight, BT = Math.max(qo()[0], 6), FT = [];
            for (const DT of [BT, .2 * kT, .5 * kT - XT / 2, .33 * kT])
              for (const TT of [.5, .3, .7]) FT.push({
                left: Math.max(0, Math.min(zT - WT - 6, Math.max(6, zT * TT - WT / 2))),
                top: DT
              });
            const ST = FT.map((TT => ({
              left: TT.left - 6,
              top: TT.top - 6,
              right: TT.left + WT + 6,
              bottom: TT.top + XT + 6
            })));
            return FT[So(ST, kI(oT, IT), {
              avoid: IT && null !== (iT = oT[IT]) && void 0 !== iT ? iT : null
            })]
          }(TT, ET.current, vT.current))
        }), []),
        CT = (0, zT.useCallback)(((TT, oT, IT) => {
          eT(oT), uT(IT), ET.current = TT, fT()
        }), [fT, uT]);
      return (0, zT.useLayoutEffect)(fT, [DT.selected, fT]), (0, PT.createPortal)((0, wT.jsxs)("div", {
        ref: xT,
        className: "HudFullScreenEditor",
        children: [(0, wT.jsx)(KI, {
          ...DT,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: CT,
          onReady: AT,
          lockable: XT
        }), (0, wT.jsxs)("div", {
          ref: KT,
          className: "HudFullScreenToolbar",
          style: null === gT ? void 0 : {
            left: gT.left,
            top: gT.top,
            transform: "none"
          },
          children: [(0, wT.jsx)("div", {
            ref: MT,
            className: "HudFullScreenControls",
            children: (0, wT.jsx)(fo, {
              selected: cT,
              layout: DT.layout.hudLayouts[DT.orientation],
              actionButtons: DT.actionButtons,
              keyNames: DT.keyNames,
              overlaps: mT,
              scaleCaps: RT,
              onScale: oT,
              onHidden: IT,
              onReset: kT,
              locked: WT,
              lockable: XT,
              onLocked: BT,
              joystickFixed: DT.joystickFixed
            })
          }), (0, wT.jsx)(FT.e, {
            className: "HudFullScreenDone",
            onClick: ST,
            padDefaultFocus: !0,
            children: LT("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const gI = TT => `${Math.round(100*TT)}%`;

    function hI(TT) {
      let {
        info: oT,
        tuple: IT,
        props: zT
      } = TT;
      const {
        t: kT
      } = (0, iT.t)();
      return (0, wT.jsx)(xT.k, {
        name: kT("hudLayout:size"),
        min: fT.l,
        max: fT.i,
        step: Eo,
        initValue: IT[2],
        disabled: zT.locked.has(oT.id),
        selectableMax: zT.scaleCaps[oT.id],
        cappedNote: kT("hudLayout:sizeCapped"),
        format: gI,
        onChange: TT => {
          zT.onScalePreview(oT.id, TT)
        },
        onChangeComplete: TT => {
          zT.onScale(oT.id, TT)
        }
      })
    }

    function wI(TT) {
      const {
        t: oT
      } = (0, iT.t)(), {
        present: IT,
        elements: kT,
        selected: WT,
        onSelect: XT,
        onHidden: FT,
        onReset: ST,
        note: DT,
        actionButtons: LT,
        keyNames: xT,
        sizeBesidePreview: cT,
        locked: KT,
        lockable: MT,
        onLocked: rT
      } = TT, AT = (0, zT.useRef)(null);
      return (0, zT.useEffect)((() => {
        var TT;
        const oT = WT ? null === (TT = AT.current) || void 0 === TT ? void 0 : TT.querySelector(`[data-hud-row="${WT}"]`) : null;
        if (!oT) return;
        const IT = oT.closest(".SettingsMenuRight"),
          iT = performance.now();
        let zT = null;
        const kT = () => {
            clearInterval(BT), null === IT || void 0 === IT || IT.removeEventListener("scroll", XT)
          },
          XT = () => {
            TI() || kT()
          },
          BT = setInterval((() => {
            const TT = performance.now();
            TT - iT > 1500 ? kT() : TI() ? zT = null : null === zT ? zT = TT : TT - zT >= 150 && (kT(), function(TT) {
              var oT;
              const IT = TT.closest(".SettingsMenuRight"),
                iT = null === (oT = TT.closest(".HudLayoutSettings")) || void 0 === oT ? void 0 : oT.querySelector(".HudLayoutPreviewBox");
              if (!IT || !iT) return;
              const zT = iT.getBoundingClientRect().bottom + 8,
                kT = IT.getBoundingClientRect().bottom - 8,
                WT = TT.getBoundingClientRect();
              WT.top < zT ? IT.scrollBy({
                top: WT.top - zT,
                behavior: "smooth"
              }) : WT.bottom > kT && IT.scrollBy({
                top: Math.min(WT.bottom - kT, WT.top - zT),
                behavior: "smooth"
              })
            }(oT))
          }), 50);
        return null === IT || void 0 === IT || IT.addEventListener("scroll", XT, {
          passive: !0
        }), kT
      }), [WT]), (0, wT.jsx)("div", {
        ref: AT,
        className: "SettingBoxGroup HudElementList",
        children: YT.filter((TT => IT.has(TT.id))).map((IT => {
          const iT = ((TT, oT) => {
              var IT;
              return null !== (IT = TT[oT]) && void 0 !== IT ? IT : fT.t
            })(kT, IT.id),
            zT = 1 === iT[3],
            AT = IT.id === WT,
            gT = IT.scale && !cT,
            hT = DT(IT.id, AT);
          return (0, wT.jsxs)("div", {
            "data-hud-row": IT.id,
            className: BT()("SettingBox HudElementRow", {
              Open: AT,
              Hidden: zT,
              Child: void 0 !== IT.parent
            }),
            children: [(0, wT.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, wT.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": gT ? AT : void 0,
                onClick: () => {
                  XT(IT.id)
                },
                children: [nT(IT.id, LT, oT, xT), IT.scale && 1 !== iT[2] && !(AT && gT) && (0, wT.jsx)("span", {
                  className: "HudElementRowSize",
                  children: gI(iT[2])
                }), gT && (0, wT.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, wT.jsx)(tT, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: IT.id,
                actionButtons: LT,
                keyNames: xT,
                locked: KT.has(IT.id),
                lockable: MT(IT.id),
                onLocked: rT
              }), (0, wT.jsx)(lT, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: IT.id,
                elements: kT,
                actionButtons: LT,
                keyNames: xT,
                onHidden: FT
              }), (0, wT.jsx)(sT, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: KT.has(IT.id),
                id: IT.id,
                elements: kT,
                actionButtons: LT,
                keyNames: xT,
                onReset: ST
              })]
            }), AT && gT && (0, wT.jsx)(hI, {
              info: IT,
              tuple: iT,
              props: TT
            }), hT && (0, wT.jsx)("div", {
              className: "HudElementNote",
              children: hT
            })]
          }, IT.id)
        }))
      })
    }

    function mI(TT) {
      let {
        preview: oT,
        quick: IT,
        onFullScreen: kT,
        resting: WT,
        onSidePanel: XT
      } = TT;
      const {
        t: BT
      } = (0, iT.t)(), ST = cI(), DT = (0, zT.useRef)(null), {
        width: LT
      } = (0, To.d)(DT), xT = Math.floor(ST.width * Math.min(1, oT.maxHeight / ST.height)), cT = LT - xT - 12, KT = cT >= 130, MT = LT > 0;
      (0, zT.useEffect)((() => {
        MT && XT(KT)
      }), [MT, KT, XT]);
      const rT = Xo(KT ? xT : LT, ST.width, ST.height, oT.maxHeight),
        AT = WT ? (0, wT.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: ST.height * rT
          }
        }) : (0, wT.jsx)(KI, {
          ...oT
        }),
        gT = TT => (0, wT.jsxs)(FT.J, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: BT("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: kT,
          children: [(0, wT.jsx)(ET.e, {
            name: "expand"
          }), TT && (0, wT.jsx)("span", {
            children: BT("hudLayout:fullScreen")
          })]
        });
      return (0, wT.jsxs)("div", {
        ref: DT,
        className: "SettingBox HudLayoutPreviewBox",
        children: [LT > 0 && KT && (0, wT.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, wT.jsx)("div", {
            style: {
              width: xT
            },
            children: AT
          }), (0, wT.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, wT.jsx)(fo, {
              selected: oT.selected,
              ...IT,
              joystickFixed: oT.joystickFixed,
              extra: gT(!oT.selected || cT >= 278)
            })
          })]
        }), LT > 0 && !KT && (0, wT.jsxs)(wT.Fragment, {
          children: [AT, (0, wT.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: gT(!1)
          })]
        })]
      })
    }
    var eI = IT(8314),
      RI = IT(3929);
    const uI = TT => {
      const oT = Do.o * ("sides" === TT ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(oT / 2))
    };

    function vI(TT, oT, IT) {
      const [iT, zT, kT, WT] = TT;
      return "sides" === oT ? [iT, IT, kT, IT] : [IT, zT, IT, WT]
    }
    const EI = [null, null, null, null],
      fI = TT => `${TT}px`;

    function CI(TT) {
      let {
        safe: oT,
        onPreview: IT,
        onCommit: kT
      } = TT;
      const {
        t: WT
      } = (0, iT.t)(), XT = (0, Do.r)(null !== oT && void 0 !== oT ? oT : EI, window.innerWidth, window.innerHeight, Zo(document).map(Math.round)), BT = (0, zT.useRef)(null !== oT && void 0 !== oT ? oT : EI);
      BT.current = null !== oT && void 0 !== oT ? oT : EI;
      const ST = TT => {
        const oT = Math.min(uI(TT), "sides" === TT ? Math.max(XT[1], XT[3]) : Math.max(XT[0], XT[2]));
        return (0, wT.jsx)(xT.k, {
          name: WT("sides" === TT ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: uI(TT),
          step: 2,
          initValue: oT,
          format: fI,
          onChange: oT => {
            IT(vI(BT.current, TT, oT))
          },
          onChangeComplete: iT => {
            if (iT === oT) return void IT(BT.current);
            const zT = vI(BT.current, TT, iT);
            BT.current = zT, kT(zT), (0, RT.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: TT
            })
          }
        })
      };
      return (0, wT.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, wT.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, wT.jsx)("div", {
            children: WT("hudLayout:safeZone")
          }), (0, wT.jsx)(FT.J, {
            active: null === oT,
            pressed: null === oT,
            onClick: () => {
              kT(null)
            },
            children: WT("hudLayout:safeZoneAuto")
          })]
        }), ST("sides"), ST("ends")]
      })
    }

    function jI() {
      const {
        t: TT
      } = (0, iT.t)(), oT = (0, fT.V)(), {
        clientEscMenuOptions: IT
      } = (0, ST.k)(["clientEscMenuOptions"]), kT = (0, eI.d)(), WT = oT.hudLayouts[kT], [XT, BT] = (0, zT.useState)(null), [DT, LT] = (0, zT.useState)([]), [cT, KT] = (0, zT.useState)(null), [MT, rT] = vo(), AT = (0, zT.useCallback)(((TT, oT, IT) => {
        LT(oT), rT(IT);
        const iT = Object.keys(TT);
        KT((TT => (null === TT || void 0 === TT ? void 0 : TT.size) === iT.length && iT.every((oT => TT.has(oT))) ? TT : new Set(iT)))
      }), [rT]), {
        gameState: gT
      } = (0, ST.k)(["gameState"]), [hT] = (0, zT.useState)((() => "inGame" === gT ? function(TT) {
        const oT = TT.querySelector(".InGameUi .TouchComponentsButtons");
        if (!oT) return null;
        const IT = {},
          iT = {};
        for (const BT of xo) {
          const TT = oT.querySelector(`.TouchSlot${BT} > .TouchKey`);
          if (TT) {
            var zT, kT;
            IT[BT] = TT.cloneNode(!0);
            const oT = (null !== (zT = null === (kT = TT.querySelector(".TouchKeyLabel")) || void 0 === kT ? void 0 : kT.textContent) && void 0 !== zT ? zT : "").split(/\s+/).filter((TT => !/[\d\xd7]/.test(TT))).join(" ");
            oT && (iT[BT] = oT)
          }
        }
        const WT = oT => {
            const IT = TT.querySelector(`.InGameUi ${oT}`);
            return null !== IT && !IT.classList.contains("Hidden")
          },
          XT = [...TT.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((TT => TT.cloneNode(!0)));
        return {
          faces: IT,
          names: iT,
          shop: WT(".TouchInventoryKey.ShopKey"),
          bag: WT(".TouchInventoryKey.BagKey"),
          items: XT
        }
      }(document) : null)), mT = (0, zT.useRef)(null), eT = (0, zT.useRef)(null), vT = function(TT) {
        const [oT, IT] = (0, zT.useState)((() => .4 * window.innerHeight));
        return (0, zT.useLayoutEffect)((() => {
          var oT;
          const iT = null === (oT = TT.current) || void 0 === oT ? void 0 : oT.closest(".SettingsMenuRight");
          if (!iT) return;
          const zT = () => {
            const TT = iT.clientHeight < JI ? .4 : .5;
            IT(Math.max(80, iT.clientHeight * TT - 24))
          };
          zT();
          const kT = new ResizeObserver(zT);
          return kT.observe(iT), () => {
            kT.disconnect()
          }
        }), [TT]), oT
      }(eT), ET = (0, RI.o)(IT.joystickMode), CT = IT.touchActionButtons, jT = (0, zT.useMemo)((() => function(TT, oT) {
        const IT = {},
          iT = [
            ["extra", "X"],
            ["game", "G"]
          ];
        oT || iT.push(["attack", "P"]);
        for (const [zT, kT] of iT) {
          const oT = null === TT || void 0 === TT ? void 0 : TT.names[kT];
          oT && (IT[zT] = oT)
        }
        return IT
      }(hT, CT)), [hT, CT]);
      (0, zT.useEffect)((() => {
        (0, RT.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [JT, UT] = (0, zT.useState)(!1), [aT, HT] = (0, zT.useState)(!1), nT = (0, zT.useRef)(null);
      MI(nT, !aT);
      const [ZT, lT] = (0, zT.useState)(!1), sT = (0, zT.useCallback)((() => {
        lT(!1)
      }), []), tT = (0, zT.useMemo)((() => new Set(WT.hudLocked)), [WT.hudLocked]), GT = TT => {
        var oT, IT;
        const iT = (0, fT.x)(),
          zT = TT(iT);
        (0, fT.R)(null !== (oT = null === (IT = mT.current) || void 0 === IT ? void 0 : IT.keepLocks(iT, zT)) && void 0 !== oT ? oT : zT)
      }, pT = (TT, oT) => {
        GT((IT => (0, fT.X)(IT, kT, TT, oT)))
      }, bT = (TT, oT, IT) => {
        pT(TT, {
          dx: oT,
          dy: IT
        }), (0, RT.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${TT}`
        })
      }, PT = (TT, oT) => {
        GT((IT => (0, fT.Y)(IT, kT, TT, oT)))
      }, dT = TT => {
        const oT = QT[TT];
        return (oT.move || oT.scale) && ("joystick" !== TT || ET) && !OT(TT, WT.hudElements[TT])
      }, VT = TT => QT[TT].move && ("joystick" !== TT || ET) && !tT.has(TT), To = new Set(YT.map((TT => TT.id)).filter((TT => {
        var oT;
        return null === cT || cT.has(TT) || 1 === (null === (oT = WT.hudElements[TT]) || void 0 === oT ? void 0 : oT[3])
      }))), oo = {
        present: To,
        actionButtons: CT,
        keyNames: jT,
        scaleCaps: MT,
        sizeBesidePreview: JT,
        elements: WT.hudElements,
        selected: XT,
        onSelect: BT,
        onScalePreview: (TT, oT) => {
          var IT;
          null === (IT = mT.current) || void 0 === IT || IT.setScale(TT, oT)
        },
        onScale: (TT, oT) => {
          pT(TT, {
            scale: oT
          }), (0, RT.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${TT}`
          })
        },
        onHidden: (TT, oT) => {
          pT(TT, {
            hidden: oT
          }), (0, RT.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${oT?"hide":"show"}:${TT}`
          })
        },
        onReset: TT => {
          pT(TT, fT.d)
        },
        locked: tT,
        lockable: dT,
        onLocked: PT,
        note: (oT, IT) => {
          var iT;
          const zT = IT && DT.length > 0 ? TT("hudLayout:overlapsNote", {
            names: qT(DT, CT, TT, jT)
          }) : null;
          return IT && yT(oT, ET) ? (0, wT.jsxs)(wT.Fragment, {
            children: [zT && (0, wT.jsx)("span", {
              children: zT
            }), (0, wT.jsx)("span", {
              children: TT("hudLayout:floatingJoystickNote")
            }), !JT && (0, wT.jsx)(NT, {})]
          }) : zT || (IT && tT.has(oT) ? TT("hudLayout:lockedNote") : IT && "cluster" === oT ? TT("hudLayout:clusterNote") : IT && "arrows" === oT ? TT("hudLayout:arrowsNote") : "inventory" === oT && 1 === (null === (iT = WT.hudElements.inventory) || void 0 === iT ? void 0 : iT[3]) ? TT("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, wT.jsxs)("div", {
        ref: eT,
        className: "HudLayoutSettings",
        children: [(0, wT.jsxs)("div", {
          ref: nT,
          className: "HudLayoutBody",
          children: [(0, wT.jsx)("div", {
            className: "HudLayoutOrientation",
            children: TT("landscape" === kT ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, wT.jsx)(mI, {
            preview: {
              layout: oT,
              orientation: kT,
              selected: XT,
              onSelect: BT,
              onMove: bT,
              canMove: VT,
              actionButtons: CT,
              joystickFixed: ET,
              presence: hT,
              keyNames: jT,
              maxHeight: vT,
              apiRef: mT,
              onMeasured: AT,
              onReady: HT,
              lockable: dT
            },
            quick: {
              layout: WT,
              actionButtons: CT,
              keyNames: jT,
              scaleCaps: MT,
              overlaps: DT,
              onScale: oo.onScale,
              onHidden: oo.onHidden,
              onReset: oo.onReset,
              locked: tT,
              lockable: dT,
              onLocked: PT
            },
            onFullScreen: () => {
              lT(!0)
            },
            resting: ZT,
            onSidePanel: UT
          }), ZT && (0, wT.jsx)(AI, {
            layout: oT,
            orientation: kT,
            selected: XT,
            onSelect: BT,
            onMove: bT,
            canMove: VT,
            actionButtons: CT,
            joystickFixed: ET,
            presence: hT,
            keyNames: jT,
            onScale: oo.onScale,
            onHidden: oo.onHidden,
            onReset: oo.onReset,
            locked: tT,
            lockable: dT,
            onLocked: PT,
            apiRef: mT,
            onClose: sT
          }), (0, wT.jsx)(CI, {
            safe: WT.hudSafe,
            onCommit: TT => {
              GT((oT => (0, fT._)(oT, kT, TT)))
            },
            onPreview: TT => {
              var oT;
              null === (oT = mT.current) || void 0 === oT || oT.setSafe(TT)
            }
          }), (0, wT.jsx)(xT.e, {
            label: TT("hudLayout:snapCentre"),
            checked: oT.hudSnapCentre,
            onClick: TT => {
              (0, fT.P)(TT)
            },
            circleInfoText: TT("hudLayout:snapCentreInfo")
          }), (0, wT.jsx)(wI, {
            ...oo
          }), (0, wT.jsx)(xT.h, {
            label: TT("hudLayout:shape"),
            options: fT.D.map((oT => ({
              value: oT,
              label: TT(`hudLayout:shape_${oT}`)
            }))),
            value: oT.hudShape,
            onChange: TT => {
              GT((oT => ({
                ...oT,
                hudShape: TT
              }))), (0, RT.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: TT
              })
            }
          }), (0, wT.jsx)(xT.k, {
            name: TT("hudLayout:opacity"),
            min: fT.g,
            max: 1,
            step: .05,
            initValue: oT.hudKeyOpacity,
            format: TT => `${Math.round(100*TT)}%`,
            circleInfoText: TT("hudLayout:opacityInfo"),
            onChange: TT => {
              var oT;
              null === (oT = mT.current) || void 0 === oT || oT.setOpacity(TT)
            },
            onChangeComplete: TT => {
              (0, fT.L)(TT), (0, RT.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, wT.jsx)(FT.C, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const TT = uT.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0,
                padStartsOnCancel: !0
              });
              !0 === await TT.getResult() && (0, fT.J)()
            }()
          },
          children: TT("hudLayout:resetAll")
        })]
      })
    }
    const JI = 350;
    const UI = [function() {
      const {
        t: TT
      } = (0, iT.t)(), {
        joystickMode: oT,
        touchSpeedCurve: IT,
        autorun: zT,
        jumpLock: kT
      } = (0, ST.k)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, wT.jsxs)(wT.Fragment, {
        children: [(0, wT.jsx)(xT.h, {
          label: TT("settingsMenu:joystick"),
          options: hT.zb.map((oT => ({
            value: oT,
            label: TT(mT[oT])
          }))),
          value: oT,
          onChange: TT => {
            ST.c.setClientEscMenuOptions({
              joystickMode: TT
            })
          },
          circleInfoText: TT("settingsMenu:joystickInfo")
        }), (0, wT.jsx)(xT.e, {
          label: TT("settingsMenu:preciseWalking"),
          checked: IT,
          onClick: TT => {
            ST.c.setClientEscMenuOptions({
              touchSpeedCurve: TT
            })
          },
          circleInfoText: TT("settingsMenu:preciseWalkingInfo")
        }), (0, wT.jsx)(xT.e, {
          label: TT("settingsMenu:autoRun"),
          checked: zT,
          onClick: TT => {
            ST.c.setClientEscMenuOptions({
              autorun: TT
            })
          },
          circleInfoText: TT("settingsMenu:autoRunInfo")
        }), (0, wT.jsx)(xT.e, {
          label: TT("settingsMenu:jumpLock"),
          checked: kT,
          onClick: TT => {
            ST.c.setClientEscMenuOptions({
              jumpLock: TT
            })
          },
          circleInfoText: TT("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, wT.jsx)(gT.c, {})
    }, function() {
      const {
        t: TT
      } = (0, iT.t)(), {
        clientEscMenuOptions: oT
      } = (0, ST.k)(["clientEscMenuOptions"]);
      return (0, eT.e)() ? (0, wT.jsx)(xT.e, {
        label: TT("settingsMenu:vibration"),
        checked: oT.vibration,
        onClick: TT => {
          ST.c.setClientEscMenuOptions({
            vibration: TT
          })
        },
        circleInfoText: TT("settingsMenu:vibrationInfo")
      }) : null
    }, function() {
      const {
        t: TT
      } = (0, iT.t)(), [oT, IT] = (0, zT.useState)(!1), kT = (0, zT.useRef)(null);
      return (0, zT.useEffect)((() => {
        var TT;
        oT && (null === (TT = kT.current) || void 0 === TT || TT.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [oT]), (0, wT.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, wT.jsxs)("button", {
          ref: kT,
          type: "button",
          className: "SettingBox HudLayoutEntry",
          "aria-expanded": oT,
          onClick: () => {
            IT(!oT)
          },
          children: [(0, wT.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, wT.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: TT("hudLayout:title")
            }), (0, wT.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: TT("hudLayout:entrySub")
            })]
          }), (0, wT.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), oT && (0, wT.jsx)(jI, {})]
      })
    }];

    function aI() {
      return (0, wT.jsx)(wT.Fragment, {
        children: UI.map(((TT, oT) => (0, wT.jsx)(TT, {}, oT)))
      })
    }
    var YI = IT(3906);

    function QI() {
      const {
        t: TT
      } = (0, iT.t)(), {
        isTouchScreen: oT,
        clientEscMenuOptions: IT,
        gameState: WT
      } = (0, ST.k)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), XT = (0, cT.g)("ezBridging"), BT = (0, cT.g)("ezTowering"), MT = "inGame" !== WT || !0 === XT, rT = (0, KT.d)() && ("inGame" !== WT || !0 === BT), [, gT] = (0, zT.useReducer)((TT => TT + 1), 0), hT = (0, AT.f)(), [mT, eT] = (0, zT.useState)(YI.e);
      return (0, wT.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [hT && (0, wT.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, wT.jsx)("div", {
            children: TT("controller:settingsControlsNote")
          }), (0, wT.jsx)(FT.J, {
            onClick: () => {
              ST.c.set({
                openSettingsCategory: "controller"
              })
            },
            children: TT("controller:settingsOpenController")
          })]
        }), (0, DT.isTouchscreen)() && !(0, DT.isMobile)() ? (0, wT.jsx)(wT.Fragment, {
          children: (0, wT.jsx)(xT.e, {
            label: TT("settingsMenu:useTouchControls"),
            checked: mT,
            onClick: TT => {
              (0, YI.c)(TT), eT(TT)
            }
          })
        }) : null, oT && (0, wT.jsx)(aI, {}), MT && (0, wT.jsx)(xT.e, {
          label: TT("settingsMenu:ezBridging"),
          checked: IT.ezBridging,
          onClick: TT => {
            ST.c.setClientEscMenuOptions({
              ezBridging: TT
            })
          },
          circleInfoText: TT("settingsMenu:ezBridgingInfo")
        }), rT && (0, wT.jsx)(xT.e, {
          label: TT("settingsMenu:ezTowering"),
          checked: IT.ezTowering,
          onClick: TT => {
            ST.c.setClientEscMenuOptions({
              ezTowering: TT
            })
          },
          circleInfoText: TT("settingsMenu:ezToweringInfo")
        }), (0, wT.jsx)(xT.e, {
          label: TT("settingsMenu:crouchToggle"),
          checked: IT.crouchIsToggle,
          onClick: TT => {
            ST.c.setClientEscMenuOptions({
              crouchIsToggle: TT
            })
          },
          circleInfoText: TT("settingsMenu:crouchToggleInfo")
        }), (0, wT.jsx)(xT.e, {
          label: TT("settingsMenu:hideUiToggle"),
          checked: IT.hideUiIsToggle,
          onClick: TT => {
            ST.c.setClientEscMenuOptions({
              hideUiIsToggle: TT
            })
          },
          circleInfoText: TT("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, LT.b)() && (0, wT.jsx)(xT.k, {
          name: TT("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: IT.touchscreenSensitivity,
          onChange: TT => {
            ST.c.setClientEscMenuOptions({
              touchscreenSensitivity: TT
            })
          }
        }), !(0, DT.isMobile)() && (0, wT.jsx)(xT.k, {
          name: TT("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: IT.mouseSensitivity,
          onChange: TT => {
            ST.c.setClientEscMenuOptions({
              mouseSensitivity: TT
            })
          }
        }), !(0, DT.isMobile)() && (0, wT.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, wT.jsx)("div", {
            className: "SliderText",
            children: TT("settingsMenu:keyBindings")
          }), kT.i.map((oT => (0, wT.jsx)(OI, {
            title: TT(oT.name.translationKey, oT.name.params),
            defaultOpen: kT.m.has(oT.id),
            children: oT.actions.map((TT => (0, wT.jsx)(HI, {
              noaAction: TT,
              forceUpdate: gT,
              clashesWith: oT.clashesWith,
              showPadGlyph: hT
            }, TT)))
          }, oT.name.translationKey))), (0, wT.jsx)(FT.C, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, kT.I)(), gT()
            },
            children: TT("controls:resetBindings")
          })]
        })]
      })
    }

    function OI(TT) {
      let {
        title: oT,
        defaultOpen: IT,
        children: iT
      } = TT;
      const [kT, WT] = (0, zT.useState)(IT);
      return (0, wT.jsxs)("div", {
        className: BT()("ControlsSection", {
          Collapsed: !kT
        }),
        children: [(0, wT.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            WT(!kT)
          },
          children: [(0, wT.jsx)("div", {
            className: "ControlsSectionTitle",
            children: oT
          }), (0, wT.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), kT && (0, wT.jsx)("div", {
          className: "ControlsSectionRows",
          children: iT
        })]
      })
    }

    function HI(TT) {
      let {
        noaAction: oT,
        forceUpdate: IT,
        clashesWith: XT,
        showPadGlyph: ST
      } = TT;
      const {
        t: DT
      } = (0, iT.t)(), LT = (0, rT.c)(oT), [xT, cT] = (0, zT.useState)(!1), [KT, AT] = (0, zT.useState)("controls:clickToEnterNewBinding"), [gT, hT] = (0, zT.useState)(null), [mT, eT] = (0, zT.useState)(null), RT = (0, zT.useRef)(null);
      (0, zT.useEffect)((() => {
        xT && RT.current && RT.current.focus()
      }), [xT]);
      const uT = kT.z[oT].filter((TT => WT.e[TT]));
      let vT = null;
      const ET = [],
        fT = XT.flatMap((TT => {
          var oT, IT;
          return null !== (oT = null === (IT = kT.i.find((oT => oT.id === TT))) || void 0 === IT ? void 0 : IT.actions) && void 0 !== oT ? oT : []
        }));
      for (const iT of fT) {
        if (iT === oT) continue;
        const TT = kT.z[iT];
        for (const oT of TT) uT.includes(oT) && ET.push(DT(kT.D[iT].translationKey, kT.D[iT].params))
      }
      ET.length > 0 && (vT = DT("controls:sharedBindingsWarning") + " ", vT += ET.join(", "));
      const CT = () => {
          cT(!1), hT(null), AT("controls:clickToEnterNewBinding"), eT(null)
        },
        jT = () => "BindingInput_" + oT;
      return (0, wT.jsxs)("div", {
        className: BT()("ControlRow", {
          WarningBorder: null !== vT
        }),
        children: [(0, wT.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, wT.jsxs)("div", {
            className: "ControlName",
            children: [DT(kT.D[oT].translationKey, kT.D[oT].params), ST && LT && (0, wT.jsx)(MT.c, {
              glyph: LT,
              className: "ControlPadGlyph"
            })]
          }), (0, wT.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, wT.jsxs)("div", {
              className: "ControlBindingsList",
              children: [uT.map((TT => (0, wT.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, wT.jsx)("div", {
                  children: (0, kT.s)(TT)
                }), (0, wT.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const iT = (0, kT.F)(oT, TT);
                    iT.isError() ? eT(iT.asError().message) : eT(null), IT()
                  },
                  children: "\xd7"
                })]
              }, TT))), !xT && (0, wT.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  cT(!0), eT(null)
                },
                children: (0, wT.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), xT && (0, wT.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, wT.jsxs)("div", {
                className: "InputContainer",
                children: [(0, wT.jsx)("div", {
                  className: "InputOverlay",
                  children: gT ? (0, kT.s)(gT) : (0, wT.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: DT(KT)
                  })
                }), (0, wT.jsx)("input", {
                  ref: RT,
                  id: jT(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: TT => {
                    if ("Escape" === TT.code) return CT(), TT.preventDefault(), void TT.stopPropagation();
                    const oT = TT.code;
                    WT.c.includes(oT) ? (eT(null), hT(oT)) : (eT("controls:keyIsReserved"), hT(null)), TT.preventDefault(), TT.stopPropagation()
                  },
                  onMouseDown: TT => {
                    const oT = "Mouse" + (TT.button + 1);
                    document.activeElement && document.activeElement.id === jT() ? WT.c.includes(oT) ? (eT(null), hT(oT)) : (eT("controls:keyIsReserved"), hT(null)) : AT("controls:enterNewBinding"), TT.stopPropagation()
                  },
                  onBlur: () => {
                    AT("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, wT.jsx)(FT.e, {
                onPointerDown: TT => {
                  TT.preventDefault()
                },
                onClick: () => {
                  (0, kT.e)(oT, gT), IT(), CT()
                },
                className: "ControlBindingAddButton",
                disabled: null === gT,
                children: DT("general:add")
              }), (0, wT.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  CT()
                },
                children: "\xd7"
              })]
            }), mT && (0, wT.jsx)("div", {
              className: "ControlBindingError",
              children: DT(mT)
            })]
          })]
        }), vT && (0, wT.jsx)("div", {
          className: "ControlRowWarning",
          children: vT
        })]
      })
    }
  },
  8314: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT,
      d: () => kT
    });
    var iT = IT(46),
      zT = IT(3924);

    function kT() {
      const [TT, oT] = (0, iT.useState)(zT.p);
      return (0, iT.useEffect)((() => {
        const TT = () => {
          oT((0, zT.p)())
        };
        return window.addEventListener("resize", TT), () => {
          window.removeEventListener("resize", TT)
        }
      }), []), TT
    }

    function WT() {
      return (0, zT.V)().hudLayouts[kT()]
    }
  },
  8267: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => XT
    });
    var iT = IT(12),
      zT = IT(2992),
      kT = IT(1325),
      WT = IT(1357);
    const XT = async () => {
      if ((0, WT.f)()) {
        if (!0 !== await kT.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== iT.c.get("gameState")) return
      }(0, zT.c)()
    }
  },
  8276: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => BT,
      f: () => kT,
      g: () => WT,
      k: () => zT,
      l: () => XT
    });
    var iT = IT(1777);
    const zT = "controllerPadShopOpen",
      kT = TT => iT.k.includes(TT),
      WT = TT => Object.values(TT).some((TT => !1 !== TT.canBuy && !TT.isRewardedAd)),
      XT = (TT, oT, IT) => {
        var iT, zT, WT, XT;
        const BT = TT.filter((TT => !kT(TT))),
          FT = null !== oT && TT.includes(oT) ? oT : null;
        return null !== FT && !kT(FT) && IT(FT) ? FT : null !== (iT = null !== (zT = null !== (WT = null !== (XT = BT.find(IT)) && void 0 !== XT ? XT : BT[0]) && void 0 !== WT ? WT : FT) && void 0 !== zT ? zT : TT[0]) && void 0 !== iT ? iT : null
      },
      BT = TT => TT.userInput || TT.isRewardedAd || "boolean" === typeof TT.isSelected ? null : JSON.stringify([TT.image, TT.cost, TT.currency, TT.amount, TT.customTitle, TT.buyButtonText, TT.description, TT.canBuy])
  },
  8294: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => FT,
      f: () => ST
    });
    var iT = IT(46),
      zT = IT(1403),
      kT = IT(1825),
      WT = IT(1365),
      XT = IT(1389),
      BT = IT(1083);
    const FT = () => {
        const TT = (0, WT.r)();
        if ((0, iT.useEffect)((() => {
            (0, WT.g)()
          }), []), !TT) return null;
        const {
          ControllerCategory: oT
        } = TT;
        return (0, BT.jsx)(XT.c, {
          children: (0, BT.jsx)(oT, {})
        })
      },
      ST = () => {
        var TT;
        const oT = (0, WT.r)(),
          [, IT] = (0, iT.useReducer)((TT => TT + 1), 0);
        return (0, zT.g)(kT.b, IT), null !== (TT = null === oT || void 0 === oT ? void 0 : oT.hasActivePad()) && void 0 !== TT && TT
      }
  },
  8307: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => XT,
      g: () => BT
    });
    var iT = IT(12),
      zT = IT(1293),
      kT = IT(90);
    const WT = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function XT() {
      return (0, kT.isMobile)() && "function" === typeof navigator.vibrate
    }
    const BT = new class {
      constructor(TT) {
        this.deps = TT, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(TT, oT) {
        var IT;
        if (!this.deps.enabled()) return;
        const iT = WT[TT],
          zT = null !== oT && void 0 !== oT ? oT : iT.pattern;
        if (null === zT) return void console.warn("No vibration pattern for", TT);
        const kT = this.deps.now();
        kT - this.lastAnyAt < 40 && iT.priority < this.playingPriority || kT - (null !== (IT = this.lastAt.get(TT)) && void 0 !== IT ? IT : -1 / 0) < iT.minGapMs || kT < this.playingUntil && iT.priority < this.playingPriority || (this.lastAt.set(TT, kT), this.lastAnyAt = kT, this.playingUntil = kT + zT.reduce(((TT, oT) => TT + oT), 0), this.playingPriority = iT.priority, this.deps.vibrate(zT))
      }
    }({
      vibrate: TT => {
        navigator.vibrate([...TT])
      },
      now: () => performance.now(),
      enabled: () => XT() && iT.c.get("isTouchScreen") && iT.c.get("clientEscMenuOptions").vibration && !(0, zT.h)()
    })
  },
  8201: (TT, oT, IT) => {
    function iT(TT, oT) {
      return !TT.hidden && (oT || !TT.isRewardedAd)
    }

    function zT(TT) {
      return "object" === typeof TT ? TT.option : TT
    }

    function kT(TT, oT) {
      var IT;
      if ("dropdown" === (null === (IT = TT.userInput) || void 0 === IT ? void 0 : IT.type) && "object" === typeof TT.userInput.dropdownOptions[0]) {
        for (const IT of TT.userInput.dropdownOptions)
          if (zT(IT) === oT) return "object" === typeof IT ? IT.cost : TT.cost;
        console.error("Didn't find matching option for dropdown item. Item:", TT, "input:", oT)
      }
      return TT.cost
    }

    function WT(TT, oT, IT) {
      var iT;
      const zT = null !== (iT = IT.excludedPlayers) && void 0 !== iT ? iT : [oT];
      return TT.filter((TT => !zT.includes(TT)))
    }
    IT.d(oT, {
      e: () => kT,
      f: () => zT,
      j: () => WT,
      k: () => iT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);