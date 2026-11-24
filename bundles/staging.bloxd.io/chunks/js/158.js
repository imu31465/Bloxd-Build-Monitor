export const id = 158;
export const ids = [158];
export const modules = {
  8984: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT
    });
    var WT = mT(25),
      zT = mT(1288),
      MT = mT(5090),
      gT = mT(1188);

    function nT(TT) {
      let {
        note: UT
      } = TT;
      const {
        t: mT
      } = (0, zT.z)(), {
        clientEscMenuOptions: nT
      } = (0, WT.h)(["clientEscMenuOptions"]);
      return (0, gT.jsx)(MT.b, {
        label: mT("touchSettings:actionButtons"),
        checked: nT.touchActionButtons,
        onClick: TT => {
          WT.b.setClientEscMenuOptions({
            touchActionButtons: TT
          })
        },
        circleInfoText: mT("touchSettings:actionButtonsInfo"),
        note: UT
      })
    }
  },
  8972: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => Gm,
      f: () => Sm
    });
    var WT = mT(1288),
      zT = mT(63),
      MT = mT(2104),
      gT = mT(2111),
      nT = mT(1126),
      HT = mT.n(nT),
      kT = mT(1569),
      jT = mT(25),
      lT = mT(102),
      LT = mT(115),
      pT = mT(5090),
      BT = mT(2552),
      ZT = mT(291),
      cT = mT(2120),
      vT = mT(2122),
      fT = mT(8977),
      qT = mT(8984),
      iT = mT(351),
      bT = mT(1188);
    const OT = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var eT = mT(8986);
    var YT = mT(1593),
      JT = mT(1457),
      xT = mT(8989),
      dT = mT(1526),
      wT = mT(1135),
      tT = mT(8996),
      aT = mT(2589);
    const yT = {
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
        ...Object.fromEntries(aT.B.map((TT => [TT, "menu"])))
      },
      XT = TT => aT.x.filter((UT => yT[UT] === TT)),
      IT = new Set(XT("cluster")),
      QT = new Set(XT("inventory")),
      sT = TT => "inventory" === TT || QT.has(TT),
      FT = TT => {
        const UT = yT[TT];
        return void 0 === UT ? [] : [UT, ...FT(UT)]
      },
      PT = TT => [TT, ...FT(TT)],
      VT = (TT, UT, mT) => "shop" === TT && UT ? mT("inventory") ? ["inventory"] : mT("bag") ? [TT, "bag"] : [TT] : [TT],
      uT = new Map([
        ["cluster", IT],
        ["inventory", QT]
      ]),
      CT = ["cluster"],
      rT = [...CT, ...aT.x.filter((TT => !CT.includes(TT) && !yT[TT]))],
      KT = TT => [TT, ...XT(TT).flatMap(KT)],
      ST = rT.flatMap(KT).map((TT => ({
        id: TT,
        label: `hudLayout:${TT}`,
        ...aT.t[TT],
        parent: yT[TT]
      }))),
      GT = Object.fromEntries(ST.map((TT => [TT.id, TT]))),
      NT = "data-hud-el";

    function ET(TT, UT, mT, WT) {
      const zT = mT(function(TT, UT) {
          return "attack" !== TT || UT ? GT[TT].label : "hudLayout:attackContext"
        }(TT, UT)),
        MT = WT[TT];
      return MT ? mT("hudLayout:slotWithKey", {
        slot: zT,
        key: MT
      }) : zT
    }

    function hT(TT, UT, mT, WT) {
      return TT.map((TT => ET(TT, UT, mT, WT))).join(", ")
    }

    function DT(TT) {
      let {
        className: UT,
        keepPlace: mT
      } = TT;
      return mT ? (0, bT.jsx)("div", {
        className: HT()(UT, "Placeholder")
      }) : null
    }

    function oT(TT) {
      let {
        id: UT,
        elements: mT,
        actionButtons: zT,
        keyNames: MT,
        className: gT,
        keepPlace: nT,
        onHidden: HT
      } = TT;
      const {
        t: jT
      } = (0, WT.z)();
      if (!GT[UT].hide) return (0, bT.jsx)(DT, {
        className: gT,
        keepPlace: nT
      });
      const lT = (0, aT.s)(mT, UT);
      return (0, bT.jsx)(kT.L, {
        className: gT,
        ariaLabel: jT(lT ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: ET(UT, zT, jT, MT)
        }),
        pressed: !lT,
        onClick: () => {
          HT(UT, !lT)
        },
        children: (0, bT.jsx)(wT.c, {
          name: lT ? "eye-slash" : "eye"
        })
      })
    }

    function AT(TT) {
      let {
        id: UT,
        elements: mT,
        actionButtons: zT,
        keyNames: MT,
        className: gT,
        keepPlace: nT,
        onlyWhenMoved: HT,
        locked: jT,
        onReset: lT
      } = TT;
      const {
        t: LT
      } = (0, WT.z)(), pT = GT[UT], BT = (0, aT.K)(mT[UT]);
      return !pT.move && !pT.scale || HT && BT ? (0, bT.jsx)(DT, {
        className: gT,
        keepPlace: nT
      }) : (0, bT.jsx)(kT.L, {
        className: gT,
        disabled: BT || jT,
        ariaLabel: LT("hudLayout:resetElement", {
          name: ET(UT, zT, LT, MT)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: UT
        },
        onClick: TT => {
          HT && mU(TT.currentTarget), lT(UT)
        },
        children: (0, bT.jsx)(wT.c, {
          name: "rotate-left"
        })
      })
    }

    function RT(TT) {
      let {
        id: UT,
        actionButtons: mT,
        keyNames: zT,
        className: MT,
        keepPlace: gT,
        locked: nT,
        lockable: HT,
        onLocked: jT
      } = TT;
      const {
        t: lT
      } = (0, WT.z)();
      return HT || nT ? (0, bT.jsx)(kT.L, {
        className: MT,
        ariaLabel: lT(nT ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: ET(UT, mT, lT, zT)
        }),
        pressed: nT,
        active: nT,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${nT?"unlock":"lock"}:${UT}`
        },
        onClick: () => {
          jT(UT, !nT)
        },
        children: (0, bT.jsx)(wT.c, {
          name: nT ? "lock" : "lock-open"
        })
      }) : (0, bT.jsx)(DT, {
        className: MT,
        keepPlace: gT
      })
    }

    function TU(TT) {
      let {
        className: UT,
        open: mT,
        name: zT,
        onToggle: MT
      } = TT;
      const {
        t: gT
      } = (0, WT.z)();
      return (0, bT.jsx)(kT.L, {
        className: UT,
        ariaLabel: gT(mT ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: zT
        }),
        pressed: mT,
        analyticsClick: {
          id: "hud_layout.children",
          value: mT ? "close" : "open"
        },
        onClick: () => {
          MT(!mT)
        },
        children: (0, bT.jsx)(wT.c, {
          name: mT ? "angle-up" : "angle-down"
        })
      })
    }

    function UU(TT, UT) {
      var mT;
      TT.contains(document.activeElement) && UT.focus({
        preventScroll: !0
      }), null === (mT = (0, dT.f)()) || void 0 === mT || mT.handOverPadFocus(TT, UT)
    }

    function mU(TT) {
      const UT = TT.closest("[data-hud-row]"),
        mT = null === UT || void 0 === UT ? void 0 : UT.querySelector(".HudElementRowName");
      return !(!UT || !mT) && (UU(UT, mT), !0)
    }
    const WU = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function zU(TT, UT) {
      return "joystick" === TT && !UT
    }

    function MU() {
      const {
        t: TT
      } = (0, WT.z)();
      return (0, bT.jsx)(kT.L, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: TT => {
          const UT = TT.currentTarget;
          if (!mU(UT)) {
            const TT = function(TT) {
              var UT, mT;
              const WT = [TT.previousElementSibling, TT.nextElementSibling].find((TT => TT instanceof HTMLElement && TT.matches(WU)));
              return null !== (UT = null !== WT && void 0 !== WT ? WT : null === (mT = TT.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === mT ? void 0 : mT.querySelector(`:is(${WU}):not(.HudFixJoystickButton)`)) && void 0 !== UT ? UT : null
            }(UT);
            TT && UU(UT, TT)
          }
          jT.b.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: TT("hudLayout:fixJoystick")
      })
    }
    var gU = mT(85),
      nU = mT(1376),
      HU = mT(3239),
      kU = mT(2856),
      jU = mT(2592);
    const lU = (TT, UT, mT) => {
      const WT = FT(UT).includes(TT) ? TT : FT(TT).includes(UT) ? UT : null;
      if (null === WT || "joystick" === WT) return !1;
      const zT = WT === TT ? UT : TT;
      if ("menu" === WT) return (0, jU.u)(zT, mT.hudElements[zT]);
      if ("hotbar" !== WT || !sT(zT)) return !0;
      if ((0, aT.O)(mT.hudElements[zT]) || (0, aT.O)(mT.hudElements.inventory)) return !1;
      return !(mT.hudLocked.includes(zT) || mT.hudLocked.includes("inventory")) || (0, aT.K)(mT.hudElements.hotbar)
    };
    var LU = mT(2608),
      pU = mT(3289),
      BU = mT(9003);
    const ZU = TT => ({
      [NT]: TT
    });

    function cU(TT) {
      let {
        id: UT,
        slot: mT,
        icon: WT,
        label: MT,
        hidden: gT,
        className: nT,
        face: kT
      } = TT;
      const jT = (0, zT.useRef)(null);
      return (0, zT.useLayoutEffect)((() => {
        kT && jT.current && (0, BU.p)(jT.current, kT)
      }), [kT]), (0, bT.jsxs)("div", {
        className: HT()("TouchKeyHit", `TouchSlot${mT}`, nT, {
          HudPreviewGhost: gT.has(UT)
        }),
        ...ZU(UT),
        children: [kT && (0, bT.jsx)("div", {
          ref: jT,
          className: HT()("TouchKey", {
            Labelled: kT.classList.contains("Labelled")
          })
        }), !kT && (0, bT.jsxs)("div", {
          className: HT()("TouchKey", {
            Labelled: void 0 !== MT
          }),
          children: [WT && (0, bT.jsx)(wT.c, {
            name: WT
          }), void 0 !== MT && (0, bT.jsx)("span", {
            className: "TouchKeyLabel",
            children: MT
          })]
        })]
      })
    }

    function vU(TT) {
      let {
        item: UT,
        selected: mT
      } = TT;
      const WT = (0, zT.useRef)(null);
      return (0, zT.useLayoutEffect)((() => {
        WT.current && (0, BU.p)(WT.current, UT)
      }), [UT]), (0, bT.jsx)("div", {
        ref: WT,
        className: HT()("InvenItem", {
          Selected: mT
        })
      })
    }
    const fU = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      qU = TT => void 0 === TT ? {} : {
        style: {
          "--parked": TT
        }
      };

    function iU(TT) {
      let {
        id: UT,
        hidden: mT,
        parked: WT,
        unslotted: zT = !1
      } = TT;
      return (0, bT.jsx)("div", {
        className: HT()("TopRightIcon", LU.i[UT], {
          HudPreviewGhost: mT.has(UT),
          [jU.b]: void 0 !== WT,
          [jU.e]: zT
        }),
        ...qU(WT),
        children: (0, bT.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...ZU(UT),
          children: (0, bT.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, bT.jsx)(wT.c, {
              name: fU[UT]
            })
          })
        })
      })
    }

    function bU(TT) {
      let {
        portraitPhone: UT,
        icons: mT,
        pinnedIcons: WT,
        hidden: MT,
        moved: gT,
        trayState: nT
      } = TT;
      const kT = UT ? (0, jU.E)(mT) : [],
        jT = mT.filter((TT => "settings" === TT)),
        lT = mT.filter((TT => "settings" !== TT && !kT.includes(TT))).reverse(),
        LT = kT.length > 0 && "gone" === nT,
        pT = [...jT, ...LT ? ["tray"] : [], ...lT].filter((TT => "tray" === TT || MT.has(TT) && !gT.has(TT))),
        BT = TT => {
          const UT = pT.indexOf(TT);
          return UT < 0 ? void 0 : UT
        },
        ZT = (TT, UT) => (0, bT.jsx)(iU, {
          id: TT,
          hidden: MT,
          parked: UT ? BT(TT) : void 0,
          unslotted: UT && MT.has(TT) && gT.has(TT)
        }, TT);
      return (0, bT.jsxs)("div", {
        className: HT()("TopRightIcons TouchInGame", {
          Column: UT
        }),
        children: [jT.map((TT => ZT(TT, !0))), kT.length > 0 && (0, bT.jsxs)("div", {
          className: HT()("TopRightIcon TopRightTrayToggle Open", {
            [jU.b]: LT
          }),
          ...qU(BT("tray")),
          children: [(0, bT.jsx)("div", {
            className: HT()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== nT
            }),
            children: (0, bT.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, bT.jsx)(wT.c, {
                name: "ellipsis"
              })
            })
          }), (0, bT.jsx)("div", {
            className: "TopRightTray",
            children: kT.map((TT => ZT(TT, !1)))
          })]
        }), lT.map((TT => (0, bT.jsxs)(zT.Fragment, {
          children: ["perspective" === TT && null !== WT.rightOfCamera && (0, bT.jsx)(OU, {
            icon: WT.rightOfCamera
          }), ZT(TT, !0)]
        }, TT))), null !== WT.leftEnd && (0, bT.jsx)(OU, {
          icon: WT.leftEnd
        })]
      })
    }

    function OU(TT) {
      let {
        icon: UT
      } = TT;
      return (0, bT.jsx)("div", {
        className: "TopRightIcon",
        children: (0, bT.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, bT.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, bT.jsx)(wT.c, {
              name: UT
            })
          })
        })
      })
    }

    function eU(TT) {
      let {
        next: UT,
        hidden: mT
      } = TT;
      return (0, bT.jsx)("div", {
        className: HT()("HotBarArrow", UT ? "Next" : "Previous", {
          HudPreviewGhost: mT
        }),
        ...ZU("arrows"),
        children: (0, bT.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, bT.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, bT.jsx)(wT.c, {
              name: UT ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function YU() {
      return (0, bT.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, bT.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, bT.jsx)("div", {
            className: "SocialBar",
            children: (0, bT.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, bT.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, bT.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, bT.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, bT.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, bT.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, bT.jsx)(wT.c, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, bT.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, bT.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, bT.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, bT.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, bT.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, bT.jsx)(wT.c, {
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
    const JU = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      xU = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      dU = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      wU = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function tU(TT) {
      let {
        presence: UT,
        portraitPhone: mT,
        hidden: zT,
        actionButtons: MT,
        joystickFixed: gT,
        keysAbove: nT,
        auraBar: kT,
        trayState: jT,
        moved: LT
      } = TT;
      const {
        t: pT
      } = (0, WT.z)(), {
        faces: BT,
        items: ZT
      } = UT, cT = TT => ({
        HudPreviewGhost: PT(TT).some((TT => zT.has(TT)))
      });
      return (0, bT.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, bT.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, bT.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, bT.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, bT.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, bT.jsx)("div", {
              className: "InGameHeaderGameName",
              children: pT("hudLayout:previewGameName")
            })]
          })
        }), (0, bT.jsx)("div", {
          className: "TopLeftElements",
          children: (0, bT.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, bT.jsxs)("div", {
              className: "Chat",
              children: [(0, bT.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [pT("hudLayout:previewChatLine"), pT("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), pT("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((TT => (0, bT.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, bT.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, bT.jsx)("div", {
                      className: "IndividualText",
                      children: TT
                    })
                  })
                }, TT)))
              }), (0, bT.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: HT()("ChatIconWrapper SmallTextLight", cT("chat")),
                ...ZU("chat"),
                children: (0, bT.jsx)(wT.c, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, bT.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, bT.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, bT.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, bT.jsx)("div", {
                className: "TopRightIconsContainer",
                ...ZU("menu"),
                children: (0, bT.jsx)(bU, {
                  portraitPhone: mT,
                  icons: UT.rowIcons,
                  pinnedIcons: UT.pinnedIcons,
                  hidden: zT,
                  trayState: jT,
                  moved: LT
                })
              })
            }), lT.featureFlags.useSocialFeatures && (0, bT.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, bT.jsx)(YU, {})
            })]
          })
        }), (0, bT.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, bT.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, bT.jsxs)("div", {
            className: "TouchInteractKey",
            ...ZU("interact"),
            children: [(0, bT.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, bT.jsx)(wT.c, {
                name: "hand-back-point-up"
              })
            }), (0, bT.jsx)("div", {
              children: pT("hudLayout:previewInteract")
            })]
          })
        }), (0, bT.jsx)("div", {
          className: "BottomCentre",
          children: (0, bT.jsxs)("div", {
            className: "BottomElements",
            children: [(0, bT.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, bT.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, bT.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...ZU("hotbar"),
                children: (0, bT.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, bT.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, bT.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, bT.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, bT.jsx)(wT.c, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), kT && (0, bT.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, bT.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, bT.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, pU.f)("glint"),
                    alt: ""
                  }), (0, bT.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, bT.jsx)("div", {
                  className: "AuraBar",
                  children: (0, bT.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, bT.jsx)("div", {
                className: "HotBarRow",
                children: (0, bT.jsx)("div", {
                  className: HT()("HotBarContainer Touch", {
                    KeysAbove: nT
                  }),
                  children: (0, bT.jsxs)("div", {
                    className: "HotBar",
                    ...ZU("hotbar"),
                    children: [(0, bT.jsxs)("div", {
                      className: HT()("TouchInventoryKeys", {
                        NoAuraBar: !kT
                      }),
                      children: [(0, bT.jsx)("div", {
                        className: HT()("TouchInventoryKey ShopKey", cT("shop"), {
                          Hidden: !UT.shop
                        }),
                        ...ZU("shop"),
                        children: (0, bT.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, bT.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, bT.jsx)(wT.c, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, bT.jsx)("div", {
                        className: HT()("TouchInventoryKey BagKey", cT("bag"), {
                          Hidden: !UT.bag
                        }),
                        ...ZU("bag"),
                        children: (0, bT.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, bT.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, bT.jsx)(wT.c, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, bT.jsx)(eU, {
                      next: !1,
                      hidden: zT.has("arrows")
                    }), (0, bT.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== ZT && ZT.map(((TT, UT) => (0, bT.jsx)(vU, {
                        item: TT,
                        selected: TT.classList.contains("Selected")
                      }, UT))), null === ZT && dU.map((TT => {
                        const UT = wU[TT];
                        return (0, bT.jsx)("div", {
                          className: HT()("InvenItem", {
                            Selected: 0 === TT
                          }),
                          children: UT && (0, bT.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, bT.jsx)(wT.c, {
                              name: UT
                            })
                          })
                        }, TT)
                      }))]
                    }), (0, bT.jsx)(eU, {
                      next: !0,
                      hidden: zT.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, bT.jsx)("div", {
              className: "BottomRightElements",
              children: (0, bT.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== BT && BU.k.map((TT => {
                  const UT = BT[TT];
                  return UT && (0, bT.jsx)(cU, {
                    id: BU.g[TT],
                    slot: TT,
                    face: UT,
                    className: JU[TT],
                    hidden: zT
                  }, TT)
                })), (0, BU.s)(UT, MT).map((TT => (0, bT.jsx)(cU, {
                  id: BU.g[TT],
                  slot: TT,
                  icon: xU[TT].icon,
                  label: pT(xU[TT].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: zT
                }, TT))), null === BT && (0, bT.jsxs)(bT.Fragment, {
                  children: [(0, bT.jsx)(cU, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: zT
                  }), (0, bT.jsx)(cU, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: zT
                  }), MT && (0, bT.jsxs)(bT.Fragment, {
                    children: [(0, bT.jsx)(cU, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: zT
                    }), (0, bT.jsx)(cU, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: zT
                    })]
                  }), (0, BU.n)(MT).map((TT => (0, bT.jsx)(cU, {
                    id: BU.g[TT],
                    slot: TT,
                    icon: xU[TT].icon,
                    label: pT(xU[TT].labelKey),
                    hidden: zT
                  }, TT))), (0, bT.jsx)(cU, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: zT
                  })]
                })]
              })
            })]
          })
        }), (0, bT.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, bT.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, bT.jsxs)("div", {
              className: HT()("Joystick Resting HudPreviewJoystick", {
                Floating: !gT
              }),
              ...ZU("joystick"),
              children: [(0, bT.jsx)("div", {
                className: "JoystickBase"
              }), (0, bT.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), UT.sprint && (0, bT.jsx)("div", {
            className: HT()("TouchSprintHit", cT("sprint"), {
              AtHome: !gT
            }),
            ...ZU("sprint"),
            children: (0, bT.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, bT.jsx)(wT.c, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function aU() {
      const [TT, UT] = (0, zT.useState)({}), mT = (0, zT.useCallback)((TT => {
        UT((UT => [...new Set([...Object.keys(UT), ...Object.keys(TT)])].every((mT => UT[mT] === TT[mT])) ? UT : TT))
      }), []);
      return [TT, mT]
    }
    const yU = .05;

    function XU(TT) {
      var UT;
      let {
        selected: mT,
        layout: zT,
        actionButtons: MT,
        keyNames: gT,
        overlaps: nT,
        scaleCaps: jT,
        joystickFixed: lT,
        onScale: LT,
        onHidden: pT,
        onReset: BT,
        locked: ZT,
        lockable: cT,
        onLocked: vT,
        extra: fT
      } = TT;
      const {
        t: qT
      } = (0, WT.z)(), iT = mT ? GT[mT] : null, OT = null !== mT && ZT.has(mT), eT = (mT && zT.hudElements[mT] || aT.n)[2], YT = null !== (UT = mT && jT[mT]) && void 0 !== UT ? UT : aT.i, JT = TT => {
        mT && LT(mT, Math.min(YT, Math.round(100 * (eT + .1 * TT)) / 100))
      };
      return (0, bT.jsxs)(bT.Fragment, {
        children: [(0, bT.jsxs)("div", {
          className: HT()("HudQuickName SmallTextBold", {
            Overlap: nT.length > 0
          }),
          children: [nT.length > 0 && (0, bT.jsx)(wT.c, {
            name: "triangle-exclamation"
          }), iT ? ET(iT.id, MT, qT, gT) : qT("hudLayout:fullScreenHint"), nT.length > 0 && (0, bT.jsx)("span", {
            className: "HudQuickOverlap",
            children: qT("hudLayout:overlapsShort", {
              names: hT(nT, MT, qT, gT)
            })
          })]
        }), (null === iT || void 0 === iT ? void 0 : iT.scale) && (0, bT.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, bT.jsx)(kT.L, {
            disabled: OT || eT <= aT.m,
            ariaLabel: qT("hudLayout:smaller"),
            onClick: () => {
              JT(-1)
            },
            children: (0, bT.jsx)(wT.c, {
              name: "minus"
            })
          }), (0, bT.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*eT)}%`
          }), (0, bT.jsx)(kT.L, {
            disabled: OT || eT >= YT,
            ariaLabel: qT("hudLayout:larger"),
            onClick: () => {
              JT(1)
            },
            children: (0, bT.jsx)(wT.c, {
              name: "plus"
            })
          })]
        }), (iT || fT) && (0, bT.jsxs)("div", {
          className: "HudQuickActions",
          children: [iT && (0, bT.jsxs)(bT.Fragment, {
            children: [(0, bT.jsx)(RT, {
              id: iT.id,
              actionButtons: MT,
              keyNames: gT,
              locked: OT,
              lockable: cT(iT.id),
              onLocked: vT
            }), (0, bT.jsx)(oT, {
              id: iT.id,
              elements: zT.hudElements,
              actionButtons: MT,
              keyNames: gT,
              onHidden: pT
            }), (0, bT.jsx)(AT, {
              id: iT.id,
              elements: zT.hudElements,
              actionButtons: MT,
              keyNames: gT,
              locked: OT,
              onReset: BT
            }), zU(iT.id, lT) && (0, bT.jsx)(MU, {})]
          }), fT]
        })]
      })
    }
    var IU = mT(1213),
      QU = mT(4525);
    const sU = "HudPreviewDoc",
      FU = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      PU = new Set([sU, ...Object.values(FU)]),
      VU = new Set(aT.x.map(LU.t)),
      uU = new Set(LU.f),
      CU = 'style, link[rel="stylesheet"]';

    function rU(TT, UT, mT, WT) {
      const zT = new Map,
        MT = new Set,
        gT = new URL(TT.baseURI).origin,
        nT = UT => {
          var mT;
          if ("LINK" !== UT.nodeName) return !0;
          const WT = null === (mT = UT.getAttribute("href")) || void 0 === mT ? void 0 : mT.trim();
          if (!WT) return !1;
          try {
            return new URL(WT, TT.baseURI).origin === gT
          } catch {
            return !1
          }
        };
      let HT = null;
      const kT = () => {
          HT !== (0 === MT.size) && (HT = 0 === MT.size, null === WT || void 0 === WT || WT(HT))
        },
        jT = TT => {
          const UT = TT.cloneNode(!0);
          if ("LINK" === UT.tagName) {
            MT.add(UT);
            const TT = () => {
              MT.delete(UT), kT()
            };
            UT.addEventListener("load", TT), UT.addEventListener("error", TT), mT && UT.addEventListener("load", mT)
          }
          return UT
        },
        lT = () => {
          const WT = function(TT) {
              const UT = [...TT.body.children].filter((TT => TT.matches(CU)));
              return [...TT.head.querySelectorAll(CU), ...UT]
            }(TT).filter(nT),
            gT = new Set(WT);
          for (const [TT, UT] of zT) gT.has(TT) || (UT.remove(), zT.delete(TT), MT.delete(UT));
          let HT = null;
          for (let TT = WT.length - 1; TT >= 0; TT--) {
            const MT = WT[TT];
            let gT = zT.get(MT);
            gT ? "STYLE" === MT.tagName && gT.textContent !== MT.textContent && (gT.textContent = MT.textContent, null === mT || void 0 === mT || mT()) : (gT = jT(MT), zT.set(MT, gT), UT.head.insertBefore(gT, HT)), HT = gT
          }
          kT()
        };
      lT();
      const LT = new MutationObserver(lT);
      return LT.observe(TT.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), LT.observe(TT.body, {
        childList: !0
      }), () => {
        LT.disconnect()
      }
    }

    function KU(TT, UT, mT) {
      let {
        keysAbove: WT
      } = mT;
      const zT = [...TT.documentElement.classList].filter((TT => !PU.has(TT) && !uU.has(TT))),
        MT = [...UT.documentElement.classList].filter((TT => uU.has(TT))),
        gT = [sU, FU.hotbar, FU.hasShop, FU.hasBag];
      WT && gT.push(FU.keysAbove), UT.documentElement.className = [...zT, ...gT, ...MT].join(" ")
    }
    const SU = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function GU(TT, UT, mT, WT, zT) {
      const MT = (0, aT.y)(mT, WT, "joystick"),
        gT = (0, LU.x)((0, LU.J)(mT, WT, zT), WT),
        nT = gT.classes.filter((TT => !VU.has(TT))),
        HT = UT.documentElement,
        kT = mT.hudLayouts[WT].hudSafe,
        jT = (0, LU.B)(kT, window.innerWidth, window.innerHeight, NU(), kT ? (0, LU.M)(UT) : 0);
      (0, LU.P)({
        ...gT,
        classes: nT
      }, {
        vars: HT,
        safe: HT,
        classes: HT
      }), HT.style.setProperty("--preview-joystick-shift-left", `${jT[3]}px`), HT.style.setProperty("--preview-joystick-shift-bottom", `${jT[2]}px`), HT.style.setProperty("--preview-joystick-scale", String(MT[2])), (0, QU.g)(HT, UT, mT, WT);
      for (const lT of SU) HT.style.setProperty(lT, TT.documentElement.style.getPropertyValue(lT) || "0px")
    }

    function NU() {
      return (0, LU.F)(jT.b.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function EU(TT) {
      return (0, LU.p)(NU(), (0, LU.M)(TT))
    }

    function hU(TT, UT, mT) {
      const WT = TT.documentElement.style,
        zT = (0, LU.D)(UT),
        MT = WT.getPropertyValue(zT);
      try {
        return mT((TT => {
          WT.setProperty(zT, String(TT))
        }))
      } finally {
        "" === MT ? WT.removeProperty(zT) : WT.setProperty(zT, MT)
      }
    }

    function DU(TT, UT) {
      const [mT, WT] = hU(TT, "hotbar", (UT => {
        const mT = mT => {
          var WT, zT;
          return UT(mT), null !== (WT = null === (zT = TT.querySelector(".HotBarGameItemsContainer")) || void 0 === zT ? void 0 : zT.getBoundingClientRect().width) && void 0 !== WT ? WT : 0
        };
        return [mT(1), mT(aT.i)]
      }));
      return mT <= 0 ? aT.i : Math.min(aT.i, Math.max(1, Math.floor(WT / mT / UT + 1e-6) * UT))
    }
    const oU = 3,
      AU = .5,
      RU = TT => TT.right - TT.left;
    const Tm = (TT, UT) => Math.abs((0, tT.e)(TT).x - (0, tT.e)(UT).x) + Math.abs((0, tT.e)(TT).y - (0, tT.e)(UT).y) + Math.abs(RU(TT) - RU(UT));

    function Um(TT, UT, mT, WT, zT) {
      let {
        canKeep: MT = () => !0,
        passes: gT = oU,
        before: nT
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const HT = UT.hudLayouts[mT].hudLocked.filter(MT);
      if (0 === HT.length) return UT;
      const kT = [...IT].filter((WT => !HT.includes(WT) && (0, aT.y)(TT, mT, WT).join() === (0, aT.y)(UT, mT, WT).join())),
        jT = TT => {
          const UT = (0, tT.T)(kT.flatMap((UT => TT[UT] ? [TT[UT]] : [])));
          return {
            ...TT,
            cluster: null !== UT && void 0 !== UT ? UT : void 0
          }
        };
      let lT = null;
      const LT = TT => {
          lT = TT;
          const UT = zT(TT);
          return UT && {
            ...UT,
            boxes: jT(UT.boxes)
          }
        },
        pT = nT ? {
          ...nT,
          boxes: jT(nT.boxes)
        } : LT(TT),
        BT = pT && LT(UT);
      if (!pT || !BT) return UT;
      const ZT = pT.boxes;
      let cT = BT.boxes;
      const vT = pT.keysAbove !== BT.keysAbove,
        fT = vT || Boolean(pT.shopAlone) !== Boolean(BT.shopAlone),
        qT = new Set(HT.filter((TT => !sT(TT) || !("bag" === TT ? vT : fT))));
      let iT = UT;
      for (let eT = 0; eT < gT && qT.size > 0; eT++) {
        var bT, OT;
        const TT = new Map;
        for (const UT of qT) {
          const zT = ZT[UT],
            MT = cT[UT],
            gT = zT && MT ? mm(UT, (0, aT.y)(iT, mT, UT), zT, MT, WT) : null;
          gT ? TT.set(UT, gT) : qT.delete(UT)
        }
        if (0 === TT.size) break;
        let zT = iT;
        for (const [UT, WT] of TT) zT = (0, aT.hb)(zT, mT, UT, WT);
        const MT = null === (bT = LT(zT)) || void 0 === bT ? void 0 : bT.boxes;
        if (!MT) return UT;
        let gT = iT;
        for (const [UT, WT] of TT) {
          const TT = MT[UT];
          TT && Tm(ZT[UT], TT) < Tm(ZT[UT], cT[UT]) - AU ? gT = (0, aT.hb)(gT, mT, UT, WT) : qT.delete(UT)
        }
        if (gT === iT) break;
        const nT = [...TT.keys()].every((TT => qT.has(TT)));
        iT = nT ? zT : gT;
        const HT = nT ? MT : null === (OT = LT(iT)) || void 0 === OT ? void 0 : OT.boxes;
        if (!HT) return UT;
        cT = HT
      }
      return lT !== iT && zT(iT), iT
    }

    function mm(TT, UT, mT, WT, zT) {
      let [MT, gT, nT] = UT;
      const HT = aT.t[TT],
        kT = {};
      HT.scale && RU(WT) > 0 && Math.abs(RU(mT) - RU(WT)) > AU && (kT.scale = Math.max(aT.m, Math.min(aT.i, nT * RU(mT) / RU(WT))));
      const jT = (0, tT.e)(mT).x - (0, tT.e)(WT).x,
        lT = (0, tT.e)(mT).y - (0, tT.e)(WT).y;
      return HT.move && (Math.abs(jT) > AU || Math.abs(lT) > AU) && (kT.dx = MT + jT / zT.width, kT.dy = gT + lT / zT.height), void 0 === kT.scale && void 0 === kT.dx ? null : kT
    }
    let Wm = 0;

    function zm() {
      return Wm > 0
    }
    const Mm = TT => 0 === TT.dx && 0 === TT.dy,
      gm = .001,
      nm = TT => Math.abs(TT.dx) >= 5e-4 || Math.abs(TT.dy) >= 5e-4 ? TT : {
        dx: TT.dx,
        dy: TT.dy < 0 ? -.001 : gm
      };

    function Hm(TT) {
      let {
        preview: UT,
        stageRef: mT,
        ringRef: WT,
        centreLineRef: MT,
        snapCentre: gT,
        ready: nT,
        measure: HT,
        k: kT,
        viewport: jT,
        boxes: lT,
        pieces: LT,
        selected: pT,
        insets: BT,
        layout: ZT,
        canMove: cT,
        onSelect: vT,
        onMove: fT
      } = TT;
      const qT = (0, zT.useRef)(null),
        iT = (0, zT.useCallback)((() => null !== qT.current), []),
        bT = (TT, UT) => {
          if (!UT) return null;
          const mT = (0, tT.e)(TT.origin),
            WT = (0, tT.e)(UT),
            zT = (TT.to.dx - TT.from.dx) * jT.width,
            MT = (TT.to.dy - TT.from.dy) * jT.height,
            gT = UT.right - UT.left,
            nT = UT.bottom - UT.top;
          return {
            skew: {
              x: WT.x - mT.x - zT,
              y: WT.y - mT.y - MT
            },
            box: {
              left: mT.x - gT / 2,
              top: mT.y - nT / 2,
              right: mT.x + gT / 2,
              bottom: mT.y + nT / 2
            }
          }
        },
        OT = (TT, mT) => {
          var zT;
          const gT = qT.current;
          if (!gT || gT.pointerId !== TT.pointerId) return;
          qT.current = null, null === (zT = MT.current) || void 0 === zT || zT.classList.remove("Shown", "Snapped");
          const nT = WT.current;
          if (nT && null !== gT.ringStyle && nT.setAttribute("style", gT.ringStyle), mT && gT.moved) {
            const TT = Mm(gT.to) ? null : HT(gT.id),
              UT = TT ? (0, tT.Q)(TT, (0, tT.N)(jT.width, jT.height, BT)) : {
                x: 0,
                y: 0
              },
              mT = {
                dx: gT.to.dx + UT.x / jT.width,
                dy: gT.to.dy + UT.y / jT.height
              },
              WT = Mm(gT.to) ? mT : nm(mT);
            fT(gT.id, WT.dx, WT.dy)
          } else UT(gT.id, null), mT && gT.tapPick && vT(gT.tapPick)
        };
      return {
        busy: iT,
        handlers: {
          onPointerDown: TT => {
            var UT;
            if (!nT || qT.current || !TT.target.closest(".HudPreviewHandle")) return;
            const WT = mT.current.getBoundingClientRect(),
              zT = {
                x: (TT.clientX - WT.left) / kT,
                y: (TT.clientY - WT.top) / kT
              },
              MT = (0, tT.J)(zT, LT, 40 / kT),
              gT = null !== pT ? uT.get(pT) : void 0,
              HT = void 0 !== gT && null !== (0, tT.J)(zT, LT.filter((TT => {
                let {
                  id: UT
                } = TT;
                return gT.has(UT)
              })), 40 / kT),
              jT = "menu" === pT && void 0 !== lT.menu && (0, tT.i)(lT.menu, zT) && ("menu" === MT || null !== MT && (0, jU.u)(MT, ZT.hudElements[MT])),
              BT = HT ? pT : jT ? "menu" : null,
              fT = null !== BT,
              iT = null !== BT && void 0 !== BT ? BT : MT;
            if (!iT) return;
            if (function(TT) {
                Wm++;
                const UT = mT => {
                  mT.pointerId === TT && (Wm = Math.max(0, Wm - 1), window.removeEventListener("pointerup", UT, !0), window.removeEventListener("pointercancel", UT, !0))
                };
                window.addEventListener("pointerup", UT, !0), window.addEventListener("pointercancel", UT, !0)
              }(TT.pointerId), !cT(iT)) return void vT(fT && MT ? MT : iT);
            vT(iT);
            const [bT, OT] = null !== (UT = ZT.hudElements[iT]) && void 0 !== UT ? UT : [0, 0], eT = {
              dx: bT,
              dy: OT
            }, YT = {
              skew: {
                x: 0,
                y: 0
              },
              box: lT[iT]
            };
            qT.current = {
              id: iT,
              pointerId: TT.pointerId,
              startX: TT.clientX,
              startY: TT.clientY,
              origin: lT[iT],
              from: eT,
              to: eT,
              moved: !1,
              home: Mm(eT) ? {
                centre: (0, tT.e)(lT[iT]),
                anchor: YT
              } : null,
              away: Mm(eT) ? null : YT,
              anchor: YT,
              ringStyle: null,
              tapPick: fT ? MT : null
            }, TT.currentTarget.setPointerCapture(TT.pointerId)
          },
          onPointerMove: TT => {
            const mT = qT.current;
            if (!mT || mT.pointerId !== TT.pointerId) return;
            const zT = TT.clientX - mT.startX,
              nT = TT.clientY - mT.startY;
            if (!mT.moved && Math.hypot(zT, nT) < 5) return;
            const lT = !mT.moved;
            var LT, pT;
            (mT.moved = !0, lT) && (mT.ringStyle = null !== (LT = null === (pT = WT.current) || void 0 === pT ? void 0 : pT.getAttribute("style")) && void 0 !== LT ? LT : null);
            const ZT = (0, tT.N)(jT.width, jT.height, BT);
            if (!mT.home) {
              var cT;
              mT.to = {
                dx: 0,
                dy: 0
              }, UT(mT.id, mT.to);
              const TT = HT(mT.id),
                WT = null !== (cT = bT(mT, TT)) && void 0 !== cT ? cT : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: mT.origin
                },
                zT = (0, tT.e)(mT.origin);
              mT.home = {
                centre: TT ? (0, tT.e)(TT) : {
                  x: zT.x - mT.from.dx * jT.width,
                  y: zT.y - mT.from.dy * jT.height
                },
                anchor: WT
              }
            }
            const vT = mT.home;
            let fT = !1;
            const iT = TT => {
                fT = !1;
                let WT = (0, tT.x)(TT.box, zT / kT, nT / kT, ZT);
                const MT = jT.width / 2;
                if (gT && Math.abs((0, tT.e)(mT.origin).x + WT.x - MT) <= 8 / kT) {
                  const UT = MT - (0, tT.e)(mT.origin).x,
                    zT = (0, tT.x)(TT.box, UT, WT.y, ZT);
                  fT = Math.abs(zT.x - UT) < .01, fT && (WT = zT)
                }
                const HT = (0, tT.I)(mT.from, WT.x - TT.skew.x, WT.y - TT.skew.y, jT.width, jT.height);
                mT.to = nm(HT), mT.anchor = TT, UT(mT.id, mT.to)
              },
              OT = (0, tT.x)(vT.anchor.box, zT / kT, nT / kT, ZT),
              eT = MT.current,
              YT = (0, tT.e)(mT.origin),
              JT = ((0, aT.P)(mT.id) ? 20 : 6) / kT;
            if (Math.abs(YT.x + OT.x - vT.centre.x) <= JT && Math.abs(YT.y + OT.y - vT.centre.y) <= JT) mT.to = {
              dx: 0,
              dy: 0
            }, mT.anchor = vT.anchor, fT = gT && Math.abs(vT.centre.x - jT.width / 2) < 1, UT(mT.id, mT.to);
            else if (mT.away) iT(mT.away);
            else {
              var xT;
              iT(vT.anchor), mT.away = null !== (xT = bT(mT, HT(mT.id))) && void 0 !== xT ? xT : vT.anchor, iT(mT.away)
            }
            null === eT || void 0 === eT || eT.classList.add("Shown"), null === eT || void 0 === eT || eT.classList.toggle("Snapped", fT), (TT => {
              const UT = WT.current;
              if (UT) {
                const {
                  skew: mT,
                  box: WT
                } = TT.anchor;
                UT.style.left = WT.left * kT + "px", UT.style.top = WT.top * kT + "px", UT.style.width = (WT.right - WT.left) * kT + "px", UT.style.height = (WT.bottom - WT.top) * kT + "px", UT.style.translate = `${((TT.to.dx-TT.from.dx)*jT.width+mT.x)*kT}px ${((TT.to.dy-TT.from.dy)*jT.height+mT.y)*kT}px`
              }
            })(mT)
          },
          onPointerUp: TT => {
            OT(TT, !0)
          },
          onPointerCancel: TT => {
            OT(TT, !1)
          }
        }
      }
    }
    var km = mT(9011);

    function jm(TT, UT) {
      return Object.keys(TT).filter((TT => TT !== UT)).map((UT => TT[UT]))
    }

    function lm(TT) {
      return TT.map((TT => {
        let {
          id: UT,
          box: mT
        } = TT;
        return `${UT}:${mT.left},${mT.top},${mT.right},${mT.bottom}`
      })).join(";")
    }

    function Lm(TT) {
      const UT = [],
        mT = UT => (0, aT.P)(UT) && !TT.documentElement.classList.contains((0, LU.y)(UT));
      for (const nT of TT.querySelectorAll(`[${NT}]`)) {
        const TT = mT(nT.getAttribute(NT)) ? nT.querySelector(".ScaleOnHover") : null,
          WT = (null !== TT && void 0 !== TT ? TT : nT).getBoundingClientRect();
        (WT.width > 0 || WT.height > 0) && UT.push({
          id: nT.getAttribute(NT),
          box: (0, tT.m)(WT)
        })
      }
      const WT = TT => (0, tT.T)(UT.filter((UT => {
          let {
            id: mT
          } = UT;
          return TT(mT)
        })).map((TT => {
          let {
            box: UT
          } = TT;
          return UT
        }))),
        zT = {};
      for (const nT of new Set(UT.map((TT => TT.id)))) zT[nT] = WT((TT => TT === nT));
      for (const [nT, HT] of uT) {
        const TT = WT((TT => HT.has(TT)));
        TT && (zT[nT] = TT)
      }
      const MT = TT.querySelector(".TouchInventoryKeys"),
        gT = MT ? (0, tT.m)(MT.getBoundingClientRect()) : null;
      return {
        boxes: zT,
        pieces: UT,
        pairHome: gT
      }
    }

    function pm(TT, UT, mT) {
      const WT = UT.right - UT.left,
        zT = UT.bottom - UT.top;
      return hU(TT, "cluster", (UT => {
        const MT = mT => {
            UT(mT);
            const WT = [...TT.querySelectorAll(`[${NT}]:not(.HudPreviewGhost)`)].filter((TT => IT.has(TT.getAttribute(NT)))).map((TT => (0, tT.m)(TT.getBoundingClientRect()))),
              zT = (0, tT.T)(WT);
            return zT ? {
              w: zT.right - zT.left,
              h: zT.bottom - zT.top
            } : null
          },
          gT = TT => !TT || TT.w <= WT && TT.h <= zT,
          nT = MT(1),
          HT = MT(aT.i);
        if (!nT || gT(HT)) return aT.i;
        const kT = (TT, UT, mT) => UT > TT ? 1 + (mT - TT) * (aT.i - 1) / (UT - TT) : aT.i;
        let jT = Math.floor(Math.min(aT.i, kT(nT.w, HT.w, WT), kT(nT.h, HT.h, zT)) / mT + 1e-6) * mT;
        for (; jT > 1 && !gT(MT(jT));) jT = Math.round(100 * (jT - mT)) / 100;
        return Math.max(1, jT)
      }))
    }

    function Bm(TT) {
      KU(document, TT, {
        keysAbove: !1
      });
      const UT = parseFloat(getComputedStyle(TT.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        mT = Number.isFinite(UT) && UT < 0;
      return KU(document, TT, {
        keysAbove: mT
      }), (0, km.e)(TT), mT
    }

    function Zm(TT) {
      const UT = TT.querySelector(".TouchInventoryKey.ShopKey");
      return null !== UT && "1" === getComputedStyle(UT).getPropertyValue("--touch-shop-above").trim()
    }

    function cm(TT, UT) {
      let {
        layout: mT,
        orientation: WT,
        viewport: MT,
        replicaKey: gT,
        joystickFixed: nT,
        busy: HT
      } = UT;
      const [kT, jT] = (0, zT.useState)(null), [lT, LT] = (0, zT.useState)({
        boxes: {},
        pieces: []
      }), [pT, BT] = (0, zT.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [ZT, cT] = (0, zT.useState)(!1), [vT, fT] = (0, zT.useState)(!1), [qT, iT] = (0, zT.useState)(!1), bT = (0, zT.useCallback)((TT => {
        fT(TT), TT && iT(!0)
      }), []), OT = mT.hudLayouts[WT].hudSafe;
      (0, zT.useLayoutEffect)((() => {
        const UT = TT.current.contentDocument;
        UT.open(), UT.write("<!DOCTYPE html><html><head></head><body></body></html>"), UT.close(), jT(UT)
      }), [TT]);
      const eT = (0, zT.useCallback)((() => {
          kT && ((0, jU.x)(kT), LT(Lm(kT)), BT(function(TT, UT) {
            const mT = EU(TT),
              [WT, zT, MT, gT] = UT ? (0, LU.r)(UT, window.innerWidth, window.innerHeight, mT) : mT;
            return {
              top: WT,
              right: zT,
              bottom: MT,
              left: gT
            }
          }(kT, OT)))
        }), [kT, OT]),
        YT = (0, zT.useCallback)((() => {
          kT && cT(Bm(kT))
        }), [kT]),
        JT = (0, zT.useRef)((() => {}));
      return JT.current = () => {
        YT(), HT() || eT()
      }, (0, zT.useLayoutEffect)((() => {
        if (kT) return rU(document, kT, (() => {
          JT.current()
        }), bT)
      }), [kT, bT]), (0, zT.useLayoutEffect)(YT, [YT, MT]), (0, zT.useLayoutEffect)((() => {
        kT && (KU(document, kT, {
          keysAbove: ZT
        }), GU(document, kT, mT, WT, nT), YT(), eT())
      }), [kT, mT, WT, ZT, gT, nT, MT, eT, YT]), (0, zT.useEffect)((() => {
        var TT;
        if (!kT) return;
        const UT = new ResizeObserver((() => {
          HT() || eT()
        }));
        for (const mT of kT.querySelectorAll(`[${NT}]`)) UT.observe(mT);
        return null === (TT = kT.fonts) || void 0 === TT || TT.ready.then(eT), () => {
          UT.disconnect()
        }
      }), [kT, eT, HT, gT]), {
        doc: kT,
        boxes: lT.boxes,
        pieces: lT.pieces,
        insets: pT,
        keysAbove: ZT,
        ready: vT,
        settled: qT
      }
    }
    const fm = ["Above", "Below", "Left", "Right"];

    function qm(TT, UT, mT, WT, zT) {
      const MT = mT[TT],
        gT = (MT.left + MT.right) / 2,
        nT = (MT.top + MT.bottom) / 2,
        HT = (7.5 * UT.length + 14) / WT,
        kT = 18 / WT,
        jT = {
          Above: {
            left: gT - HT / 2,
            top: MT.top - kT,
            right: gT + HT / 2,
            bottom: MT.top
          },
          Below: {
            left: gT - HT / 2,
            top: MT.bottom,
            right: gT + HT / 2,
            bottom: MT.bottom + kT
          },
          Left: {
            left: MT.left - HT,
            top: nT - kT / 2,
            right: MT.left,
            bottom: nT + kT / 2
          },
          Right: {
            left: MT.right,
            top: nT - kT / 2,
            right: MT.right + HT,
            bottom: nT + kT / 2
          }
        },
        lT = jm(mT, TT),
        LT = {
          left: 0,
          top: 0,
          right: zT.width,
          bottom: zT.height
        };
      return fm[(0, tT.E)(fm.map((TT => jT[TT])), lT, {
        bounds: LT
      })]
    }

    function im() {
      const [TT, UT] = (0, HU.e)();
      return (0, zT.useMemo)((() => ({
        width: TT,
        height: UT
      })), [TT, UT])
    }

    function bm(TT) {
      var UT;
      const {
        layout: mT,
        orientation: MT,
        selected: gT,
        onSelect: nT,
        onMove: kT,
        canMove: jT,
        actionButtons: lT,
        joystickFixed: LT,
        presence: pT,
        keyNames: ZT,
        maxHeight: cT,
        fill: vT = !1,
        apiRef: fT
      } = TT, {
        t: qT
      } = (0, WT.z)(), iT = im(), OT = (null !== (UT = (0, BT.f)("maxAuraLevel")) && void 0 !== UT ? UT : 0) > 0, eT = mT.hudLayouts[MT], YT = (0, zT.useRef)(null), JT = (0, zT.useRef)(null), xT = (0, zT.useRef)(null), dT = (0, zT.useRef)(null), yT = (0, zT.useRef)(null), XT = (0, zT.useRef)(null), IT = (0, kU.b)(YT).width, sT = vT ? 1 : IT > 0 ? (0, tT.L)(IT, iT.width, iT.height, cT) : 0, FT = (0, zT.useRef)((() => !1)), CT = (0, zT.useCallback)((() => FT.current()), []), rT = `${lT}:${LT}:${OT}`, {
        doc: KT,
        boxes: ST,
        pieces: GT,
        insets: NT,
        keysAbove: hT,
        ready: DT,
        settled: oT
      } = cm(xT, {
        layout: mT,
        orientation: MT,
        viewport: iT,
        replicaKey: rT,
        joystickFixed: LT,
        busy: CT
      }), AT = (0, zT.useCallback)((TT => {
        KT && GU(document, KT, TT, MT, LT)
      }), [KT, MT, LT]), RT = (0, zT.useCallback)((TT => {
        if (!KT || !oT) return null;
        AT(TT);
        const UT = Bm(KT),
          mT = function(TT, UT) {
            let {
              boxes: mT,
              pieces: WT,
              pairHome: zT
            } = TT;
            const MT = WT.find((TT => QT.has(TT.id)));
            if (!MT || !zT) return mT;
            const gT = (0, tT.e)(zT),
              nT = UT(MT.id),
              HT = RU(MT.box) / nT / 2,
              kT = (MT.box.bottom - MT.box.top) / nT / 2;
            return {
              ...mT,
              inventory: {
                left: gT.x - HT,
                top: gT.y - kT,
                right: gT.x + HT,
                bottom: gT.y + kT
              }
            }
          }(Lm(KT), (UT => (0, aT.y)(TT, MT, UT)[2]));
        return {
          boxes: mT,
          keysAbove: UT,
          shopAlone: Zm(KT)
        }
      }), [KT, oT, AT, MT]), TU = (0, zT.useRef)(null), UU = (0, zT.useRef)(null), mU = (0, zT.useRef)(mT);
      mU.current = mT;
      const WU = (0, zT.useCallback)((() => {
        null !== TU.current && (cancelAnimationFrame(TU.current), TU.current = null)
      }), []);
      (0, zT.useEffect)((() => WU), [mT, WU]);
      const zU = (0, zT.useRef)(-1 / 0),
        {
          lockable: MU
        } = TT,
        nU = (0, zT.useCallback)((TT => {
          if (AT(TT), zU.current = performance.now(), !oT || 0 === mT.hudLayouts[MT].hudLocked.length) return;
          const UT = mT;
          WU(), TU.current = requestAnimationFrame((() => {
            var mT;
            if (TU.current = null, mU.current !== UT) return;
            const WT = (null === (mT = UU.current) || void 0 === mT ? void 0 : mT.from) === UT ? UU.current.measured : RT(UT);
            WT && (UU.current = {
              from: UT,
              measured: WT
            }), AT(WT ? Um(UT, TT, MT, iT, RT, {
              canKeep: MU,
              passes: 1,
              before: WT
            }) : TT)
          }))
        }), [AT, oT, mT, MT, iT, RT, MU, WU]),
        HU = Hm({
          preview: (TT, UT) => {
            UT ? nU((0, aT.hb)(mT, MT, TT, UT)) : (WU(), AT(mT))
          },
          stageRef: JT,
          ringRef: dT,
          centreLineRef: yT,
          snapCentre: mT.hudSnapCentre,
          ready: oT,
          measure: TT => {
            const UT = KT && DT ? Lm(KT).boxes[TT] : void 0;
            return UT && (0, tT.q)(UT, iT.width, iT.height) ? UT : null
          },
          k: sT,
          viewport: iT,
          boxes: ST,
          pieces: GT,
          selected: gT,
          insets: NT,
          layout: eT,
          canMove: jT,
          onSelect: nT,
          onMove: (TT, UT, mT) => {
            WU(), kT(TT, UT, mT)
          }
        });
      (0, zT.useLayoutEffect)((() => {
        FT.current = HU.busy
      }), [HU.busy]);
      const pU = (0, zT.useRef)([]),
        BU = (0, zT.useRef)(eT.hudElements);
      (0, zT.useEffect)((() => {
        for (const zT of Object.keys(eT.hudElements)) {
          var TT, UT, mT, WT;
          (null !== (TT = null === (UT = eT.hudElements[zT]) || void 0 === UT ? void 0 : UT[2]) && void 0 !== TT ? TT : 1) > (null !== (mT = null === (WT = BU.current[zT]) || void 0 === WT ? void 0 : WT[2]) && void 0 !== mT ? mT : 1) && jT(zT) && !(0, jU.u)(zT, eT.hudElements[zT]) && pU.current.push(...VT(zT, hT, jT))
        }
        BU.current = eT.hudElements
      }), [eT.hudElements, jT, hT]), (0, zT.useEffect)((() => {
        if (!DT) return;
        const TT = (0, tT.N)(iT.width, iT.height, NT);
        for (const mT of ((TT, UT, mT, WT) => {
            const zT = TT => {
              const zT = UT[TT],
                {
                  x: MT,
                  y: gT
                } = zT && WT(TT) ? (0, tT.Q)(zT, mT) : {
                  x: 0,
                  y: 0
                };
              return zT && {
                left: zT.left + MT,
                top: zT.top + gT,
                right: zT.right + MT,
                bottom: zT.bottom + gT
              }
            };
            return TT.flatMap((TT => {
              const MT = UT[TT];
              if ("inventory" !== TT || !MT || MT.right - MT.left <= mT.right - mT.left && MT.bottom - MT.top <= mT.bottom - mT.top) return [TT];
              const [gT, nT] = [zT("shop"), zT("bag")];
              return gT && nT && !(0, tT.t)(gT, nT, 0) ? ["shop", "bag"].filter(WT) : [TT]
            }))
          })(pU.current.splice(0), ST, TT, jT)) {
          const WT = ST[mT];
          if (!WT || HU.busy() || !(0, tT.q)(WT, iT.width, iT.height)) continue;
          const zT = (0, tT.Q)(WT, TT);
          if (0 !== zT.x || 0 !== zT.y) {
            var UT;
            const [TT, WT] = null !== (UT = eT.hudElements[mT]) && void 0 !== UT ? UT : [0, 0];
            kT(mT, TT + zT.x / iT.width, WT + zT.y / iT.height)
          }
        }
      }), [ST, DT]), (0, zT.useImperativeHandle)(fT, (() => ({
        setScale: (TT, UT) => {
          nU((0, aT.hb)(mT, MT, TT, {
            scale: UT
          }))
        },
        setOpacity: TT => {
          AT({
            ...mT,
            hudKeyOpacity: TT
          })
        },
        keepLocks: (TT, UT) => (WU(), Um(TT, UT, MT, iT, RT, {
          canKeep: MU
        })),
        setSafe: TT => {
          const UT = (0, LU.r)(TT, iT.width, iT.height, EU(null !== KT && void 0 !== KT ? KT : document));
          nU((0, aT.ob)(mT, MT, TT)), XT.current && (XT.current.style.inset = UT.map((TT => TT * sT + "px")).join(" "))
        }
      })), [AT, nU, RT, WU, MU, KT, mT, MT, iT, sT]);
      const ZU = new Set(Object.keys(eT.hudElements).filter((TT => (0, aT.s)(eT.hudElements, TT)))),
        cU = gT ? ST[gT] : void 0,
        vU = gT ? ET(gT, lT, qT, ZT) : "",
        fU = (0, IU.f)(iT.width, iT.height),
        qU = gT ? function(TT, UT, mT, WT) {
          const zT = TT => PT(TT).some((TT => (0, aT.s)(mT.hudElements, TT) || (0, jU.q)(TT, mT, WT)));
          if (zT(TT)) return [];
          const MT = TT => {
              var UT, WT;
              return "bag" === TT && 1 !== (null !== (UT = null === (WT = mT.hudElements.shop) || void 0 === WT ? void 0 : WT[2]) && void 0 !== UT ? UT : 1) || PT(TT).some((TT => void 0 !== mT.hudElements[TT]))
            },
            gT = uT.get(TT),
            nT = UT.filter((UT => {
              let {
                id: mT
              } = UT;
              return gT ? gT.has(mT) && !zT(mT) : mT === TT
            })),
            HT = new Set;
          for (const kT of UT) kT.id === TT || null !== gT && void 0 !== gT && gT.has(kT.id) || HT.has(kT.id) || zT(kT.id) || nT.some((TT => {
            let {
              id: UT,
              box: WT
            } = TT;
            return !lU(UT, kT.id, mT) && (MT(UT) || MT(kT.id)) && (0, tT.t)(WT, kT.box, 2)
          })) && HT.add(kT.id);
          return [...HT]
        }(gT, GT, eT, fU) : [],
        iU = new Set((0, jU.o)(eT.hudElements)),
        bU = (0, jU.H)(eT, (0, jU.E)(pT.rowIcons)).state,
        OU = qU.join(),
        eU = (0, zT.useRef)(TT.onReady);
      eU.current = TT.onReady, (0, zT.useEffect)((() => {
        var TT;
        null === (TT = eU.current) || void 0 === TT || TT.call(eU, oT)
      }), [oT]);
      const YU = (0, zT.useRef)(TT.onMeasured);
      (0, zT.useLayoutEffect)((() => {
        YU.current = TT.onMeasured
      }));
      const JU = (0, zT.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        xU = [lm(GT), iT.width, iT.height, NT.top, NT.right, NT.bottom, NT.left, DT, rT].join("|");
      (0, zT.useEffect)((() => {
        const TT = OU ? OU.split(",") : [],
          UT = () => {
            var UT;
            null === (UT = YU.current) || void 0 === UT || UT.call(YU, ST, TT, JU.current.caps)
          };
        let mT;
        const WT = () => {
          const TT = mU.current;
          if (!KT || TT === JU.current.layout && xU === JU.current.input) return !1;
          const zT = zU.current + 250 - performance.now();
          return TT === JU.current.layout && (zT > 0 || CT()) ? (mT = setTimeout((() => {
            WT() && UT()
          }), Math.max(zT, 62.5)), !1) : (JU.current = {
            layout: TT,
            input: xU,
            caps: {
              hotbar: DU(KT, yU),
              cluster: pm(KT, (0, tT.N)(iT.width, iT.height, NT), yU)
            }
          }, !0)
        };
        return WT(), UT(), () => {
          clearTimeout(mT)
        }
      }), [ST, OU, KT, iT, NT, xU, CT]);
      const dU = TT => ({
        left: TT.left * sT,
        top: TT.top * sT,
        width: (TT.right - TT.left) * sT,
        height: (TT.bottom - TT.top) * sT
      });
      return (0, bT.jsx)("div", {
        ref: YT,
        className: HT()("HudPreviewBox", {
          Fill: vT
        }),
        style: {
          height: iT.height * sT
        },
        children: (0, bT.jsxs)("div", {
          ref: JT,
          className: "HudPreviewStage",
          style: {
            width: iT.width * sT,
            height: iT.height * sT
          },
          children: [(0, bT.jsx)("iframe", {
            ref: xT,
            className: "HudPreviewFrame",
            title: qT("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: iT.width,
              height: iT.height,
              transform: `scale(${sT})`
            }
          }), KT && (0, gU.createPortal)((0, bT.jsx)(tU, {
            presence: pT,
            portraitPhone: fU,
            hidden: ZU,
            actionButtons: lT,
            joystickFixed: LT,
            keysAbove: hT,
            auraBar: OT,
            trayState: bU,
            moved: iU
          }), KT.body), (0, bT.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...HU.handlers,
            children: [(0, bT.jsx)("div", {
              ref: XT,
              className: "HudPreviewSafeZone",
              style: {
                top: NT.top * sT,
                right: NT.right * sT,
                bottom: NT.bottom * sT,
                left: NT.left * sT
              }
            }), GT.map(((TT, UT) => {
              let {
                id: mT,
                box: WT
              } = TT;
              return (0, bT.jsx)("div", {
                className: "HudPreviewHandle",
                style: dU((0, tT.A)(WT, 40 / sT))
              }, `${mT}:${UT}`)
            })), eT.hudLocked.map((TT => {
              const UT = ST[TT];
              return UT && (0, bT.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: UT.right * sT,
                  top: UT.top * sT
                },
                children: (0, bT.jsx)(wT.c, {
                  name: "lock"
                })
              }, TT)
            })), (0, bT.jsx)("div", {
              ref: yT,
              className: "HudPreviewCentreLine",
              style: {
                left: iT.width / 2 * sT
              }
            }), gT && cU && (0, bT.jsx)("div", {
              ref: dT,
              className: HT()("HudPreviewRing", {
                Fixed: !jT(gT),
                Overlap: qU.length > 0
              }),
              style: dU(cU),
              children: (0, bT.jsx)("span", {
                className: HT()("HudPreviewRingLabel", qm(gT, vU, ST, sT, iT)),
                children: vU
              })
            })]
          })]
        })
      })
    }

    function Om(TT, UT) {
      (0, zT.useEffect)((() => {
        var mT;
        null === (mT = TT.current) || void 0 === mT || mT.toggleAttribute("inert", UT)
      }), [TT, UT])
    }
    const em = "hudFullScreen";

    function Ym(TT) {
      let {
        onScale: UT,
        onHidden: mT,
        onReset: MT,
        locked: gT,
        lockable: nT,
        onLocked: HT,
        onClose: jT,
        ...lT
      } = TT;
      const {
        t: LT
      } = (0, WT.z)(), pT = (0, zT.useRef)(null);
      (0, nU.p)("popup", pT, jT),
      function(TT) {
        const UT = (0, zT.useRef)(TT);
        UT.current = TT, (0, zT.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [em]: !0
          }, "");
          let TT = !1;
          const mT = () => {
            TT = !0, UT.current()
          };
          return window.addEventListener("popstate", mT), () => {
            var UT;
            window.removeEventListener("popstate", mT), !TT && null !== (UT = window.history.state) && void 0 !== UT && UT[em] && window.history.back()
          }
        }), [])
      }(jT), (0, zT.useEffect)((() => {
        function TT(TT) {
          "Escape" === TT.key && (TT.stopPropagation(), jT())
        }
        return window.addEventListener("keydown", TT, !0), () => {
          window.removeEventListener("keydown", TT, !0)
        }
      }), [jT]);
      const {
        selected: BT
      } = lT, ZT = (0, zT.useRef)(null), cT = (0, zT.useRef)(null), [vT, fT] = (0, zT.useState)(!1);
      Om(cT, !vT);
      const [qT, iT] = (0, zT.useState)(null), [OT, eT] = (0, zT.useState)([]), [YT, JT] = aU(), xT = (0, zT.useRef)(lT.selected);
      xT.current = lT.selected;
      const dT = (0, zT.useRef)({}),
        wT = (0, zT.useCallback)((() => {
          const TT = ZT.current;
          TT && iT(function(TT, UT, mT) {
            var WT;
            const {
              innerWidth: zT,
              innerHeight: MT
            } = window, gT = TT.offsetWidth, nT = TT.offsetHeight, HT = Math.max(NU()[0], 6), kT = [];
            for (const LT of [HT, .2 * MT, .5 * MT - nT / 2, .33 * MT])
              for (const TT of [.5, .3, .7]) kT.push({
                left: Math.max(0, Math.min(zT - gT - 6, Math.max(6, zT * TT - gT / 2))),
                top: LT
              });
            const jT = kT.map((TT => ({
                left: TT.left - 6,
                top: TT.top - 6,
                right: TT.left + gT + 6,
                bottom: TT.top + nT + 6
              }))),
              lT = jm(UT, mT);
            return kT[(0, tT.E)(jT, lT, {
              avoid: mT && null !== (WT = UT[mT]) && void 0 !== WT ? WT : null
            })]
          }(TT, dT.current, xT.current))
        }), []),
        aT = (0, zT.useCallback)(((TT, UT, mT) => {
          eT(UT), JT(mT), dT.current = TT, wT()
        }), [wT, JT]);
      return (0, zT.useLayoutEffect)(wT, [lT.selected, wT]), (0, gU.createPortal)((0, bT.jsxs)("div", {
        ref: pT,
        className: "HudFullScreenEditor",
        children: [(0, bT.jsx)(bm, {
          ...lT,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: aT,
          onReady: fT,
          lockable: nT
        }), (0, bT.jsxs)("div", {
          ref: ZT,
          className: "HudFullScreenToolbar",
          style: null === qT ? void 0 : {
            left: qT.left,
            top: qT.top,
            transform: "none"
          },
          children: [(0, bT.jsx)("div", {
            ref: cT,
            className: "HudFullScreenControls",
            children: (0, bT.jsx)(XU, {
              selected: BT,
              layout: lT.layout.hudLayouts[lT.orientation],
              actionButtons: lT.actionButtons,
              keyNames: lT.keyNames,
              overlaps: OT,
              scaleCaps: YT,
              onScale: UT,
              onHidden: mT,
              onReset: MT,
              locked: gT,
              lockable: nT,
              onLocked: HT,
              joystickFixed: lT.joystickFixed
            })
          }), (0, bT.jsx)(kT.e, {
            className: "HudFullScreenDone",
            onClick: jT,
            padDefaultFocus: !0,
            children: LT("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const Jm = TT => `${Math.round(100*TT)}%`;

    function xm(TT) {
      let {
        info: UT,
        tuple: mT,
        props: zT
      } = TT;
      const {
        t: MT
      } = (0, WT.z)();
      return (0, bT.jsx)(pT.j, {
        name: MT("hudLayout:size"),
        min: aT.m,
        max: aT.i,
        step: yU,
        initValue: mT[2],
        disabled: zT.locked.has(UT.id),
        selectableMax: zT.scaleCaps[UT.id],
        cappedNote: MT("hudLayout:sizeCapped"),
        format: Jm,
        onChange: TT => {
          zT.onScalePreview(UT.id, TT)
        },
        onChangeComplete: TT => {
          zT.onScale(UT.id, TT)
        }
      })
    }

    function dm(TT) {
      const {
        t: UT
      } = (0, WT.z)(), {
        present: mT,
        elements: MT,
        selected: gT,
        onSelect: nT,
        onHidden: kT,
        onReset: jT,
        note: lT,
        actionButtons: LT,
        keyNames: pT,
        sizeBesidePreview: BT,
        locked: ZT,
        lockable: cT,
        onLocked: vT
      } = TT, {
        rowIconsOpen: fT,
        onRowIconsOpen: qT
      } = TT, iT = (0, zT.useRef)(null), OT = null !== gT && (fT || !(0, aT.P)(gT));
      return (0, zT.useEffect)((() => {
        var TT;
        const UT = gT ? null === (TT = iT.current) || void 0 === TT ? void 0 : TT.querySelector(`[data-hud-row="${gT}"]`) : null;
        if (!UT) return;
        const mT = UT.closest(".SettingsMenuRight"),
          WT = performance.now();
        let zT = null;
        const MT = () => {
            clearInterval(HT), null === mT || void 0 === mT || mT.removeEventListener("scroll", nT)
          },
          nT = () => {
            zm() || MT()
          },
          HT = setInterval((() => {
            const TT = performance.now();
            TT - WT > 1500 ? MT() : zm() ? zT = null : null === zT ? zT = TT : TT - zT >= 150 && (MT(), function(TT) {
              var UT;
              const mT = TT.closest(".SettingsMenuRight"),
                WT = null === (UT = TT.closest(".HudLayoutSettings")) || void 0 === UT ? void 0 : UT.querySelector(".HudLayoutPreviewBox");
              if (!mT || !WT) return;
              const zT = WT.getBoundingClientRect().bottom + 8,
                MT = mT.getBoundingClientRect().bottom - 8,
                gT = TT.getBoundingClientRect();
              gT.top < zT ? mT.scrollBy({
                top: gT.top - zT,
                behavior: "smooth"
              }) : gT.bottom > MT && mT.scrollBy({
                top: Math.min(gT.bottom - MT, gT.top - zT),
                behavior: "smooth"
              })
            }(UT))
          }), 50);
        return null === mT || void 0 === mT || mT.addEventListener("scroll", nT, {
          passive: !0
        }), MT
      }), [gT, OT]), (0, bT.jsx)("div", {
        ref: iT,
        className: "SettingBoxGroup HudElementList",
        children: ST.filter((TT => mT.has(TT.id) && (fT || !(0, aT.P)(TT.id)))).map((mT => {
          const WT = ((TT, UT) => {
              var mT;
              return null !== (mT = TT[UT]) && void 0 !== mT ? mT : aT.n
            })(MT, mT.id),
            zT = (0, aT.s)(MT, mT.id),
            iT = mT.id === gT,
            OT = mT.scale && !BT,
            eT = lT(mT.id, iT);
          return (0, bT.jsxs)("div", {
            "data-hud-row": mT.id,
            className: HT()("SettingBox HudElementRow", {
              Open: iT,
              Hidden: zT,
              Child: void 0 !== mT.parent,
              Grandchild: FT(mT.id).length > 1
            }),
            children: [(0, bT.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, bT.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": OT ? iT : void 0,
                onClick: () => {
                  nT(mT.id)
                },
                children: (0, bT.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [ET(mT.id, LT, UT, pT), mT.scale && 1 !== WT[2] && !(iT && OT) && (0, bT.jsxs)(bT.Fragment, {
                    children: [" ", (0, bT.jsx)("span", {
                      className: "HudElementRowSize",
                      children: Jm(WT[2])
                    })]
                  }), OT && (0, bT.jsxs)(bT.Fragment, {
                    children: [" ", (0, bT.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, bT.jsx)(RT, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: mT.id,
                actionButtons: LT,
                keyNames: pT,
                locked: ZT.has(mT.id),
                lockable: cT(mT.id),
                onLocked: vT
              }), "menu" === mT.id && (0, bT.jsx)(TU, {
                className: "HudElementRowIcon",
                open: fT,
                name: ET(mT.id, LT, UT, pT),
                onToggle: qT
              }), "menu" !== mT.id && (0, bT.jsx)(oT, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: mT.id,
                elements: MT,
                actionButtons: LT,
                keyNames: pT,
                onHidden: kT
              }), (0, bT.jsx)(AT, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: ZT.has(mT.id),
                id: mT.id,
                elements: MT,
                actionButtons: LT,
                keyNames: pT,
                onReset: jT
              })]
            }), iT && OT && (0, bT.jsx)(xm, {
              info: mT,
              tuple: WT,
              props: TT
            }), eT && (0, bT.jsx)("div", {
              className: "HudElementNote",
              children: eT
            })]
          }, mT.id)
        }))
      })
    }

    function wm(TT) {
      let {
        preview: UT,
        quick: mT,
        onFullScreen: MT,
        resting: gT,
        onSidePanel: nT
      } = TT;
      const {
        t: HT
      } = (0, WT.z)(), jT = im(), lT = (0, zT.useRef)(null), {
        width: LT
      } = (0, kU.b)(lT), pT = Math.floor(jT.width * Math.min(1, UT.maxHeight / jT.height)), BT = LT - pT - 12, ZT = BT >= 130, cT = LT > 0;
      (0, zT.useEffect)((() => {
        cT && nT(ZT)
      }), [cT, ZT, nT]);
      const vT = (0, tT.L)(ZT ? pT : LT, jT.width, jT.height, UT.maxHeight),
        fT = gT ? (0, bT.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: jT.height * vT
          }
        }) : (0, bT.jsx)(bm, {
          ...UT
        }),
        qT = TT => (0, bT.jsxs)(kT.L, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: HT("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: MT,
          children: [(0, bT.jsx)(wT.c, {
            name: "expand"
          }), TT && (0, bT.jsx)("span", {
            children: HT("hudLayout:fullScreen")
          })]
        });
      return (0, bT.jsxs)("div", {
        ref: lT,
        className: "SettingBox HudLayoutPreviewBox",
        children: [LT > 0 && ZT && (0, bT.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, bT.jsx)("div", {
            style: {
              width: pT
            },
            children: fT
          }), (0, bT.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, bT.jsx)(XU, {
              selected: UT.selected,
              ...mT,
              joystickFixed: UT.joystickFixed,
              extra: qT(!UT.selected || BT >= 278)
            })
          })]
        }), LT > 0 && !ZT && (0, bT.jsxs)(bT.Fragment, {
          children: [fT, (0, bT.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: qT(!1)
          })]
        })]
      })
    }
    var tm = mT(2602),
      am = mT(4519),
      ym = mT(2584),
      Xm = mT(2538);
    const Im = TT => {
      const UT = LU.j * ("sides" === TT ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(UT / 2))
    };

    function Qm(TT, UT, mT) {
      const [WT, zT, MT, gT] = TT;
      return "sides" === UT ? [WT, mT, MT, mT] : [mT, zT, mT, gT]
    }
    const sm = [null, null, null, null],
      Fm = TT => `${TT}px`;

    function Pm(TT) {
      let {
        safe: UT,
        onPreview: mT,
        onCommit: MT
      } = TT;
      const {
        t: gT
      } = (0, WT.z)(), nT = (0, LU.r)(null !== UT && void 0 !== UT ? UT : sm, window.innerWidth, window.innerHeight, EU(document).map(Math.round)), HT = (0, zT.useRef)(null !== UT && void 0 !== UT ? UT : sm);
      HT.current = null !== UT && void 0 !== UT ? UT : sm;
      const jT = TT => {
        const UT = Math.min(Im(TT), "sides" === TT ? Math.max(nT[1], nT[3]) : Math.max(nT[0], nT[2]));
        return (0, bT.jsx)(pT.j, {
          name: gT("sides" === TT ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: Im(TT),
          step: 2,
          initValue: UT,
          format: Fm,
          onChange: UT => {
            mT(Qm(HT.current, TT, UT))
          },
          onChangeComplete: WT => {
            if (WT === UT) return void mT(HT.current);
            const zT = Qm(HT.current, TT, WT);
            HT.current = zT, MT(zT), (0, YT.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: TT
            })
          }
        })
      };
      return (0, bT.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, bT.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, bT.jsx)("div", {
            children: gT("hudLayout:safeZone")
          }), (0, bT.jsx)(kT.L, {
            active: null === UT,
            pressed: null === UT,
            onClick: () => {
              MT(null)
            },
            children: gT("hudLayout:safeZoneAuto")
          })]
        }), jT("sides"), jT("ends")]
      })
    }

    function Vm() {
      const {
        t: TT
      } = (0, WT.z)(), UT = (0, aT.eb)(), {
        clientEscMenuOptions: mT
      } = (0, jT.h)(["clientEscMenuOptions"]), MT = (0, tm.j)(), gT = UT.hudLayouts[MT], [nT, HT] = (0, zT.useState)(null), {
        rowIconsOpen: lT,
        onRowIconsOpen: LT,
        select: BT
      } = function(TT, UT) {
        const [mT, WT] = (0, zT.useState)((() => aT.B.some((UT => void 0 !== TT.hudElements[UT] || TT.hudLocked.includes(UT))))), MT = (0, zT.useCallback)((TT => {
          UT(TT), (0, aT.P)(TT) && WT(!0)
        }), [UT]);
        return {
          rowIconsOpen: mT,
          onRowIconsOpen: WT,
          select: MT
        }
      }(gT, HT), [ZT, cT] = (0, zT.useState)([]), [vT, fT] = (0, zT.useState)(null), [qT, iT] = aU(), OT = (0, zT.useCallback)(((TT, UT, mT) => {
        cT(UT), iT(mT);
        const WT = Object.keys(TT);
        fT((TT => (null === TT || void 0 === TT ? void 0 : TT.size) === WT.length && WT.every((UT => TT.has(UT))) ? TT : new Set(WT)))
      }), [iT]), {
        gameState: eT
      } = (0, jT.h)(["gameState"]), xT = (0, ym.i)(), dT = (0, Xm.n)(), [wT] = (0, zT.useState)((() => {
        var TT, UT, mT, WT;
        return "inGame" === eT ? (0, BU.x)(document, xT, {
          rightOfCamera: null !== (TT = null === (UT = dT.rightOfCamera) || void 0 === UT ? void 0 : UT.icon) && void 0 !== TT ? TT : null,
          leftEnd: null !== (mT = null === (WT = dT.leftEnd) || void 0 === WT ? void 0 : WT.icon) && void 0 !== mT ? mT : null
        }) : BU.e
      })), tT = (0, zT.useRef)(null), yT = (0, zT.useRef)(null), XT = function(TT) {
        const [UT, mT] = (0, zT.useState)((() => .4 * window.innerHeight));
        return (0, zT.useLayoutEffect)((() => {
          var UT;
          const WT = null === (UT = TT.current) || void 0 === UT ? void 0 : UT.closest(".SettingsMenuRight");
          if (!WT) return;
          const zT = () => {
            const TT = WT.clientHeight < um ? .4 : .5;
            mT(Math.max(80, WT.clientHeight * TT - 24))
          };
          zT();
          const MT = new ResizeObserver(zT);
          return MT.observe(WT), () => {
            MT.disconnect()
          }
        }), [TT]), UT
      }(yT), IT = (0, am.l)(mT.joystickMode), QT = mT.touchActionButtons, FT = (0, zT.useMemo)((() => (0, BU.w)(wT, QT)), [wT, QT]), PT = (0, zT.useMemo)((() => new Set((0, BU.s)(wT, QT).map((TT => BU.g[TT])))), [wT, QT]);
      (0, zT.useEffect)((() => {
        (0, YT.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [VT, uT] = (0, zT.useState)(!1), [CT, rT] = (0, zT.useState)(!1), KT = (0, zT.useRef)(null);
      Om(KT, !CT);
      const [NT, DT] = (0, zT.useState)(!1), oT = (0, zT.useCallback)((() => {
        DT(!1)
      }), []), AT = (0, zT.useMemo)((() => new Set(gT.hudLocked)), [gT.hudLocked]), RT = TT => {
        var UT, mT;
        const WT = (0, aT.r)(),
          zT = TT(WT);
        (0, aT.ab)(null !== (UT = null === (mT = tT.current) || void 0 === mT ? void 0 : mT.keepLocks(WT, zT)) && void 0 !== UT ? UT : zT)
      }, TU = (TT, UT) => {
        RT((mT => (0, aT.hb)(mT, MT, TT, UT)))
      }, UU = (TT, UT, mT) => {
        TU(TT, {
          dx: UT,
          dy: mT
        }), (0, YT.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${TT}`
        })
      }, mU = (TT, UT) => {
        RT((mT => (0, aT.lb)(mT, MT, TT, UT)))
      }, WU = TT => {
        const UT = GT[TT];
        return (UT.move || UT.scale) && ("joystick" !== TT || IT) && !(0, jU.u)(TT, gT.hudElements[TT])
      }, gU = TT => GT[TT].move && ("joystick" !== TT || IT) && !AT.has(TT), nU = new Set(ST.map((TT => TT.id)).filter((TT => {
        const UT = (0, aT.P)(TT) && !wT.rowIcons.includes(TT);
        return null === vT || vT.has(TT) || (0, aT.s)(gT.hudElements, TT) && !UT
      }))), HU = {
        present: nU,
        actionButtons: QT,
        keyNames: FT,
        scaleCaps: qT,
        sizeBesidePreview: VT,
        elements: gT.hudElements,
        selected: nT,
        onSelect: BT,
        rowIconsOpen: lT,
        onRowIconsOpen: LT,
        onScalePreview: (TT, UT) => {
          var mT;
          null === (mT = tT.current) || void 0 === mT || mT.setScale(TT, UT)
        },
        onScale: (TT, UT) => {
          TU(TT, {
            scale: UT
          }), (0, YT.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${TT}`
          })
        },
        onHidden: (TT, UT) => {
          TU(TT, {
            hidden: UT
          }), (0, YT.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${UT?"hide":"show"}:${TT}`
          })
        },
        onReset: TT => {
          TU(TT, aT.d)
        },
        locked: AT,
        lockable: WU,
        onLocked: mU,
        note: (UT, mT) => {
          const WT = mT && ZT.length > 0 ? TT("hudLayout:overlapsNote", {
            names: hT(ZT, QT, TT, FT)
          }) : null;
          if (mT && zU(UT, IT)) return (0, bT.jsxs)(bT.Fragment, {
            children: [WT && (0, bT.jsx)("span", {
              children: WT
            }), (0, bT.jsx)("span", {
              children: TT("hudLayout:floatingJoystickNote")
            }), !VT && (0, bT.jsx)(MU, {})]
          });
          if (WT) return WT;
          const zT = mT && AT.has(UT) ? TT("hudLayout:lockedNote") : null,
            MT = mT && PT.has(UT) ? TT("hudLayout:contextSlotNote") : null;
          return zT || MT ? (0, bT.jsxs)(bT.Fragment, {
            children: [zT && (0, bT.jsx)("span", {
              children: zT
            }), MT && (0, bT.jsx)("span", {
              children: MT
            })]
          }) : mT && "cluster" === UT ? TT("hudLayout:clusterNote") : mT && "inventory" === UT ? TT("hudLayout:inventoryNote") : mT && "menu" === UT ? TT("hudLayout:menuNote") : mT && (0, jU.u)(UT, gT.hudElements[UT]) && gU(UT) ? TT("hudLayout:rowIconNote") : mT && "arrows" === UT ? TT("hudLayout:arrowsNote") : mT && "sprint" === UT ? TT("hudLayout:sprintNote") : sT(UT) && (0, aT.s)(gT.hudElements, UT) ? TT("hudLayout:inventoryHiddenNote", {
            name: ET(UT, QT, TT, FT)
          }) : null
        }
      };
      return (0, bT.jsxs)("div", {
        ref: yT,
        className: "HudLayoutSettings",
        children: [(0, bT.jsxs)("div", {
          ref: KT,
          className: "HudLayoutBody",
          children: [(0, bT.jsx)("div", {
            className: "HudLayoutOrientation",
            children: TT("landscape" === MT ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, bT.jsx)(wm, {
            preview: {
              layout: UT,
              orientation: MT,
              selected: nT,
              onSelect: BT,
              onMove: UU,
              canMove: gU,
              actionButtons: QT,
              joystickFixed: IT,
              presence: wT,
              keyNames: FT,
              maxHeight: XT,
              apiRef: tT,
              onMeasured: OT,
              onReady: rT,
              lockable: WU
            },
            quick: {
              layout: gT,
              actionButtons: QT,
              keyNames: FT,
              scaleCaps: qT,
              overlaps: ZT,
              onScale: HU.onScale,
              onHidden: HU.onHidden,
              onReset: HU.onReset,
              locked: AT,
              lockable: WU,
              onLocked: mU
            },
            onFullScreen: () => {
              DT(!0)
            },
            resting: NT,
            onSidePanel: uT
          }), NT && (0, bT.jsx)(Ym, {
            layout: UT,
            orientation: MT,
            selected: nT,
            onSelect: BT,
            onMove: UU,
            canMove: gU,
            actionButtons: QT,
            joystickFixed: IT,
            presence: wT,
            keyNames: FT,
            onScale: HU.onScale,
            onHidden: HU.onHidden,
            onReset: HU.onReset,
            locked: AT,
            lockable: WU,
            onLocked: mU,
            apiRef: tT,
            onClose: oT
          }), (0, bT.jsx)(Pm, {
            safe: gT.hudSafe,
            onCommit: TT => {
              RT((UT => (0, aT.ob)(UT, MT, TT)))
            },
            onPreview: TT => {
              var UT;
              null === (UT = tT.current) || void 0 === UT || UT.setSafe(TT)
            }
          }), (0, bT.jsx)(pT.b, {
            label: TT("hudLayout:snapCentre"),
            checked: UT.hudSnapCentre,
            onClick: TT => {
              (0, aT.Y)(TT)
            },
            circleInfoText: TT("hudLayout:snapCentreInfo")
          }), (0, bT.jsx)(dm, {
            ...HU
          }), (0, bT.jsx)(pT.f, {
            label: TT("hudLayout:shape"),
            options: aT.D.map((UT => ({
              value: UT,
              label: TT(`hudLayout:shape_${UT}`)
            }))),
            value: UT.hudShape,
            onChange: TT => {
              RT((UT => ({
                ...UT,
                hudShape: TT
              }))), (0, YT.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: TT
              })
            }
          }), (0, bT.jsx)(pT.j, {
            name: TT("hudLayout:opacity"),
            min: aT.f,
            max: 1,
            step: .05,
            initValue: UT.hudKeyOpacity,
            format: TT => `${Math.round(100*TT)}%`,
            circleInfoText: TT("hudLayout:opacityInfo"),
            onChange: TT => {
              var UT;
              null === (UT = tT.current) || void 0 === UT || UT.setOpacity(TT)
            },
            onChangeComplete: TT => {
              (0, aT.V)(TT), (0, YT.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, bT.jsx)(kT.I, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const TT = JT.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await TT.getResult() && (0, aT.R)()
            }()
          },
          children: TT("hudLayout:resetAll")
        })]
      })
    }
    const um = 350;
    const Cm = [function() {
      const {
        t: TT
      } = (0, WT.z)(), [UT, mT] = (0, zT.useState)(!1), MT = (0, zT.useRef)(null);
      return (0, zT.useEffect)((() => {
        var TT;
        UT && (null === (TT = MT.current) || void 0 === TT || TT.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [UT]), (0, bT.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, bT.jsx)(xT.e, {
          ref: MT,
          icon: "arrows-up-down-left-right",
          title: TT("hudLayout:title"),
          sub: TT("hudLayout:entrySub"),
          expanded: UT,
          onClick: () => {
            mT(!UT)
          }
        }), UT && (0, bT.jsx)(Vm, {})]
      })
    }, function() {
      const {
        t: TT
      } = (0, WT.z)(), {
        joystickMode: UT,
        touchSpeedCurve: mT,
        autorun: zT,
        jumpLock: MT,
        touchEdgeGuard: gT
      } = (0, jT.h)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, bT.jsxs)(bT.Fragment, {
        children: [(0, bT.jsx)(pT.f, {
          label: TT("settingsMenu:joystick"),
          options: iT.mb.map((UT => ({
            value: UT,
            label: TT(OT[UT])
          }))),
          value: UT,
          onChange: TT => {
            jT.b.setClientEscMenuOptions({
              joystickMode: TT
            })
          },
          circleInfoText: TT("settingsMenu:joystickInfo")
        }), (0, bT.jsx)(pT.b, {
          label: TT("settingsMenu:preciseWalking"),
          checked: mT,
          onClick: TT => {
            jT.b.setClientEscMenuOptions({
              touchSpeedCurve: TT
            })
          },
          circleInfoText: TT("settingsMenu:preciseWalkingInfo")
        }), (0, bT.jsx)(pT.b, {
          label: TT("settingsMenu:autoRun"),
          checked: zT,
          onClick: TT => {
            jT.b.setClientEscMenuOptions({
              autorun: TT
            })
          },
          circleInfoText: TT("settingsMenu:autoRunInfo")
        }), (0, bT.jsx)(pT.b, {
          label: TT("settingsMenu:jumpLock"),
          checked: MT,
          onClick: TT => {
            jT.b.setClientEscMenuOptions({
              jumpLock: TT
            })
          },
          circleInfoText: TT("settingsMenu:jumpLockInfo")
        }), (0, bT.jsx)(pT.b, {
          label: TT("touchSettings:stopAtEdges"),
          checked: gT,
          onClick: TT => {
            jT.b.setClientEscMenuOptions({
              touchEdgeGuard: TT
            })
          },
          circleInfoText: TT("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, bT.jsx)(qT.b, {})
    }, function() {
      const {
        t: TT
      } = (0, WT.z)(), {
        clientEscMenuOptions: UT
      } = (0, jT.h)(["clientEscMenuOptions"]);
      return (0, eT.e)() ? (0, bT.jsx)(pT.b, {
        label: TT("settingsMenu:vibration"),
        checked: UT.vibration,
        onClick: TT => {
          jT.b.setClientEscMenuOptions({
            vibration: TT
          })
        },
        circleInfoText: TT("settingsMenu:vibrationInfo")
      }) : null
    }];

    function rm() {
      return (0, bT.jsx)(bT.Fragment, {
        children: Cm.map(((TT, UT) => (0, bT.jsx)(TT, {}, UT)))
      })
    }
    var Km = mT(4477);

    function Sm() {
      const {
        t: TT
      } = (0, WT.z)(), {
        isTouchScreen: UT,
        clientEscMenuOptions: mT,
        gameState: gT
      } = (0, jT.h)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), nT = (0, BT.f)("ezBridging"), HT = (0, BT.f)("ezTowering"), cT = "inGame" !== gT || !0 === nT, vT = (0, ZT.f)(), qT = null !== vT && ("inGame" !== gT || !0 === HT), [, iT] = (0, zT.useReducer)((TT => TT + 1), 0), OT = (0, fT.f)(), [eT, YT] = (0, zT.useState)(Km.e);
      return (0, bT.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [OT && (0, bT.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, bT.jsx)("div", {
            children: TT("controller:settingsControlsNote")
          }), (0, bT.jsx)(kT.L, {
            onClick: () => {
              jT.b.set({
                openSettingsCategory: "controller"
              })
            },
            children: TT("controller:settingsOpenController")
          })]
        }), (0, lT.isTouchscreen)() && !(0, lT.isMobile)() ? (0, bT.jsx)(bT.Fragment, {
          children: (0, bT.jsx)(pT.b, {
            label: TT("settingsMenu:useTouchControls"),
            checked: eT,
            onClick: TT => {
              (0, Km.d)(TT), YT(TT)
            }
          })
        }) : null, UT && (0, bT.jsx)(rm, {}), cT && (0, bT.jsx)(pT.b, {
          label: TT("settingsMenu:ezBridging"),
          checked: mT.ezBridging,
          onClick: TT => {
            jT.b.setClientEscMenuOptions({
              ezBridging: TT
            })
          },
          circleInfoText: TT("settingsMenu:ezBridgingInfo")
        }), qT && (0, bT.jsx)(pT.b, {
          label: TT("settingsMenu:ezTowering"),
          checked: mT.ezTowering,
          onClick: TT => {
            jT.b.setClientEscMenuOptions({
              ezTowering: TT
            })
          },
          circleInfoText: TT("jump" === vT ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, bT.jsx)(pT.b, {
          label: TT("settingsMenu:crouchToggle"),
          checked: mT.crouchIsToggle,
          onClick: TT => {
            jT.b.setClientEscMenuOptions({
              crouchIsToggle: TT
            })
          },
          circleInfoText: TT("settingsMenu:crouchToggleInfo")
        }), (0, bT.jsx)(pT.b, {
          label: TT("settingsMenu:hideUiToggle"),
          checked: mT.hideUiIsToggle,
          onClick: TT => {
            jT.b.setClientEscMenuOptions({
              hideUiIsToggle: TT
            })
          },
          circleInfoText: TT("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, LT.b)() && (0, bT.jsx)(pT.j, {
          name: TT("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: mT.touchscreenSensitivity,
          onChange: TT => {
            jT.b.setClientEscMenuOptions({
              touchscreenSensitivity: TT
            })
          }
        }), !(0, lT.isMobile)() && (0, bT.jsx)(pT.j, {
          name: TT("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: mT.mouseSensitivity,
          onChange: TT => {
            jT.b.setClientEscMenuOptions({
              mouseSensitivity: TT
            })
          }
        }), !(0, lT.isMobile)() && (0, bT.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, bT.jsx)("div", {
            className: "SliderText",
            children: TT("settingsMenu:keyBindings")
          }), MT.g.map((UT => (0, bT.jsx)(Gm, {
            title: TT(UT.name.translationKey, UT.name.params),
            defaultOpen: MT.k.has(UT.id),
            children: UT.actions.map((TT => (0, bT.jsx)(Nm, {
              noaAction: TT,
              forceUpdate: iT,
              clashesWith: UT.clashesWith,
              showPadGlyph: OT
            }, TT)))
          }, UT.name.translationKey))), (0, bT.jsx)(kT.I, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, MT.B)(), iT()
            },
            children: TT("controls:resetBindings")
          })]
        })]
      })
    }

    function Gm(TT) {
      let {
        title: UT,
        defaultOpen: mT,
        children: WT
      } = TT;
      const [MT, gT] = (0, zT.useState)(mT);
      return (0, bT.jsxs)("div", {
        className: HT()("ControlsSection", {
          Collapsed: !MT
        }),
        children: [(0, bT.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            gT(!MT)
          },
          children: [(0, bT.jsx)("div", {
            className: "ControlsSectionTitle",
            children: UT
          }), (0, bT.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), MT && (0, bT.jsx)("div", {
          className: "ControlsSectionRows",
          children: WT
        })]
      })
    }

    function Nm(TT) {
      let {
        noaAction: UT,
        forceUpdate: mT,
        clashesWith: nT,
        showPadGlyph: jT
      } = TT;
      const {
        t: lT
      } = (0, WT.z)(), LT = (0, vT.e)(UT), [pT, BT] = (0, zT.useState)(!1), [ZT, fT] = (0, zT.useState)("controls:clickToEnterNewBinding"), [qT, iT] = (0, zT.useState)(null), [OT, eT] = (0, zT.useState)(null), YT = (0, zT.useRef)(null);
      (0, zT.useEffect)((() => {
        pT && YT.current && YT.current.focus()
      }), [pT]);
      const JT = MT.v[UT].filter((TT => gT.j[TT]));
      let xT = null;
      const dT = [],
        wT = nT.flatMap((TT => {
          var UT, mT;
          return null !== (UT = null === (mT = MT.g.find((UT => UT.id === TT))) || void 0 === mT ? void 0 : mT.actions) && void 0 !== UT ? UT : []
        }));
      for (const WT of wT) {
        if (WT === UT) continue;
        const TT = MT.v[WT];
        for (const UT of TT) JT.includes(UT) && dT.push(lT(MT.w[WT].translationKey, MT.w[WT].params))
      }
      dT.length > 0 && (xT = lT("controls:sharedBindingsWarning") + " ", xT += dT.join(", "));
      const tT = () => {
          BT(!1), iT(null), fT("controls:clickToEnterNewBinding"), eT(null)
        },
        aT = () => "BindingInput_" + UT;
      return (0, bT.jsxs)("div", {
        className: HT()("ControlRow", {
          WarningBorder: null !== xT
        }),
        children: [(0, bT.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, bT.jsxs)("div", {
            className: "ControlName",
            children: [lT(MT.w[UT].translationKey, MT.w[UT].params), jT && LT && (0, bT.jsx)(cT.c, {
              glyph: LT,
              className: "ControlPadGlyph"
            })]
          }), (0, bT.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, bT.jsxs)("div", {
              className: "ControlBindingsList",
              children: [JT.map((TT => (0, bT.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, bT.jsx)("div", {
                  children: (0, MT.n)(TT)
                }), (0, bT.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const WT = (0, MT.y)(UT, TT);
                    WT.isError() ? eT(WT.asError().message) : eT(null), mT()
                  },
                  children: "\xd7"
                })]
              }, TT))), !pT && (0, bT.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  BT(!0), eT(null)
                },
                children: (0, bT.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), pT && (0, bT.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, bT.jsxs)("div", {
                className: "InputContainer",
                children: [(0, bT.jsx)("div", {
                  className: "InputOverlay",
                  children: qT ? (0, MT.n)(qT) : (0, bT.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: lT(ZT)
                  })
                }), (0, bT.jsx)("input", {
                  ref: YT,
                  id: aT(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: TT => {
                    if ("Escape" === TT.code) return tT(), TT.preventDefault(), void TT.stopPropagation();
                    const UT = TT.code;
                    gT.e.includes(UT) ? (eT(null), iT(UT)) : (eT("controls:keyIsReserved"), iT(null)), TT.preventDefault(), TT.stopPropagation()
                  },
                  onMouseDown: TT => {
                    const UT = "Mouse" + (TT.button + 1);
                    document.activeElement && document.activeElement.id === aT() ? gT.e.includes(UT) ? (eT(null), iT(UT)) : (eT("controls:keyIsReserved"), iT(null)) : fT("controls:enterNewBinding"), TT.stopPropagation()
                  },
                  onBlur: () => {
                    fT("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, bT.jsx)(kT.e, {
                onPointerDown: TT => {
                  TT.preventDefault()
                },
                onClick: () => {
                  (0, MT.e)(UT, qT), mT(), tT()
                },
                className: "ControlBindingAddButton",
                disabled: null === qT,
                children: lT("general:add")
              }), (0, bT.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  tT()
                },
                children: "\xd7"
              })]
            }), OT && (0, bT.jsx)("div", {
              className: "ControlBindingError",
              children: lT(OT)
            })]
          })]
        }), xT && (0, bT.jsx)("div", {
          className: "ControlRowWarning",
          children: xT
        })]
      })
    }
  },
  8989: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => gT
    });
    var WT = mT(63),
      zT = mT(1135),
      MT = mT(1188);
    const gT = (0, WT.forwardRef)((function(TT, UT) {
      let {
        icon: mT,
        title: WT,
        sub: gT,
        expanded: nT,
        onClick: HT
      } = TT;
      return (0, MT.jsxs)("button", {
        ref: UT,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": nT,
        onClick: HT,
        children: [(0, MT.jsx)(zT.c, {
          name: mT,
          className: "FeaturedSettingsEntryIcon"
        }), (0, MT.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, MT.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: WT
          }), (0, MT.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: gT
          })]
        }), (0, MT.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  8812: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => vT,
      e: () => cT,
      f: () => jT,
      h: () => fT,
      i: () => qT,
      m: () => LT
    });
    var WT = mT(1783),
      zT = mT(1870);
    const MT = TT => TT >= 56320 && TT <= 57343,
      gT = TT => TT >= 55296 && TT <= 56319,
      nT = (TT, UT) => UT >= 2 && MT(TT.charCodeAt(UT - 1)) && gT(TT.charCodeAt(UT - 2)) ? UT - 2 : Math.max(0, UT - 1),
      HT = (TT, UT) => {
        let mT;
        var WT, zT;
        return mT = TT.start !== TT.end ? UT < 0 ? TT.start : TT.end : UT < 0 ? nT(TT.value, TT.start) : (WT = TT.value, (zT = TT.start) + 1 < WT.length && gT(WT.charCodeAt(zT)) && MT(WT.charCodeAt(zT + 1)) ? zT + 2 : Math.min(WT.length, zT + 1)), {
          value: TT.value,
          start: mT,
          end: mT
        }
      },
      kT = ["text", "search", "url", "email", "tel", "password", "number"],
      jT = TT => !(!(0, zT.e)(TT) || TT.isContentEditable || TT.hasAttribute("data-pad-no-osk")) && (TT instanceof HTMLTextAreaElement || TT instanceof HTMLInputElement && kT.includes(TT.type)),
      lT = TT => null !== TT.selectionStart,
      LT = TT => {
        var UT, mT;
        const {
          value: WT
        } = TT;
        return {
          value: WT,
          start: null !== (UT = TT.selectionStart) && void 0 !== UT ? UT : WT.length,
          end: null !== (mT = TT.selectionEnd) && void 0 !== mT ? mT : WT.length
        }
      },
      pT = (TT, UT, mT) => {
        if (TT.readOnly) return;
        const zT = TT instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(zT, "value").set.call(TT, UT.value), lT(TT) && TT.setSelectionRange(UT.start, UT.end), (0, WT.g)(TT, new InputEvent("input", {
          bubbles: !0,
          inputType: mT
        }))
      };
    let BT = !1;
    const ZT = (TT, UT) => !!document.execCommand(TT, !1, UT) || (BT || (BT = !0, console.warn(`execCommand("${TT}") failed; the on-screen keyboard is setting the value directly`)), !1),
      cT = (TT, UT) => {
        ZT("insertText", UT) || pT(TT, function(TT, UT) {
          let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const WT = TT.value.slice(0, TT.start),
            zT = TT.value.slice(TT.end);
          let MT = mT < 0 ? UT.length : Math.max(0, mT - WT.length - zT.length);
          MT > 0 && MT < UT.length && gT(UT.charCodeAt(MT - 1)) && MT--;
          const nT = UT.slice(0, MT),
            HT = WT.length + nT.length;
          return {
            value: WT + nT + zT,
            start: HT,
            end: HT
          }
        }(LT(TT), UT, TT.maxLength), "insertText")
      },
      vT = TT => {
        ZT("delete") || pT(TT, (TT => {
          const UT = TT.start === TT.end ? nT(TT.value, TT.start) : TT.start;
          return {
            value: TT.value.slice(0, UT) + TT.value.slice(TT.end),
            start: UT,
            end: UT
          }
        })(LT(TT)), "deleteContentBackward")
      },
      fT = (TT, UT) => {
        if (!lT(TT)) return;
        const mT = HT(LT(TT), UT);
        TT.setSelectionRange(mT.start, mT.end)
      },
      qT = TT => {
        lT(TT) && 0 === TT.selectionStart && 0 === TT.selectionEnd && TT.setSelectionRange(TT.value.length, TT.value.length)
      }
  },
  8955: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => nT
    });
    var WT = mT(25),
      zT = mT(2250),
      MT = mT(1457),
      gT = mT(1513);
    const nT = async () => {
      if ((0, gT.k)()) {
        if (!0 !== await MT.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== WT.b.get("gameState")) return
      }(0, zT.f)()
    }
  },
  8964: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => HT,
      f: () => MT,
      i: () => gT,
      m: () => zT,
      o: () => nT
    });
    var WT = mT(2076);
    const zT = "controllerPadShopOpen",
      MT = TT => WT.h.includes(TT),
      gT = TT => Object.values(TT).some((TT => !1 !== TT.canBuy && !TT.isRewardedAd)),
      nT = (TT, UT, mT) => {
        var WT, zT, gT, nT;
        const HT = TT.filter((TT => !MT(TT))),
          kT = null !== UT && TT.includes(UT) ? UT : null;
        return null !== kT && !MT(kT) && mT(kT) ? kT : null !== (WT = null !== (zT = null !== (gT = null !== (nT = HT.find(mT)) && void 0 !== nT ? nT : HT[0]) && void 0 !== gT ? gT : kT) && void 0 !== zT ? zT : TT[0]) && void 0 !== WT ? WT : null
      },
      HT = TT => TT.userInput || TT.isRewardedAd || "boolean" === typeof TT.isSelected ? null : JSON.stringify([TT.image, TT.cost, TT.currency, TT.amount, TT.customTitle, TT.buyButtonText, TT.description, TT.canBuy])
  },
  8977: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => kT,
      f: () => jT
    });
    var WT = mT(63),
      zT = mT(1567),
      MT = mT(2125),
      gT = mT(1526),
      nT = mT(1547),
      HT = mT(1188);
    const kT = () => {
        const TT = (0, gT.t)();
        if ((0, WT.useEffect)((() => {
            (0, gT.k)()
          }), []), !TT) return null;
        const {
          ControllerCategory: UT
        } = TT;
        return (0, HT.jsx)(nT.e, {
          children: (0, HT.jsx)(UT, {})
        })
      },
      jT = () => {
        var TT;
        const UT = (0, gT.t)(),
          [, mT] = (0, WT.useReducer)((TT => TT + 1), 0);
        return (0, zT.g)(MT.c, mT), null !== (TT = null === UT || void 0 === UT ? void 0 : UT.hasActivePad()) && void 0 !== TT && TT
      }
  },
  8815: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT,
      h: () => kT,
      k: () => ZT,
      n: () => lT,
      o: () => BT,
      r: () => MT,
      s: () => pT,
      t: () => gT,
      w: () => LT
    });
    const WT = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      zT = (TT, UT) => {
        if ("function" === typeof TT.checkVisibility) return !TT.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: UT,
          checkOpacity: UT
        });
        const {
          visibility: mT
        } = getComputedStyle(TT);
        if ("hidden" === mT || "collapse" === mT) return !0;
        if (!UT) return !1;
        for (let WT = TT; WT; WT = WT.parentElement)
          if ("0" === getComputedStyle(WT).opacity) return !0;
        return !1
      },
      MT = TT => {
        if (!TT.isConnected || zT(TT, !0)) return !1;
        const UT = TT.getBoundingClientRect();
        return UT.width > 0 && UT.height > 0
      },
      gT = TT => !!TT.matches(":disabled, [aria-disabled='true']") || "button" === TT.getAttribute("role") && "-1" === TT.getAttribute("tabindex"),
      nT = TT => {
        var UT;
        if (TT.closest("[data-pad-ignore]")) return !0;
        return !!(null === (UT = TT.parentElement) || void 0 === UT ? void 0 : UT.closest("[data-pad-focusable]"))
      },
      HT = TT => {
        const UT = TT.querySelectorAll(WT);
        return TT.matches(WT) ? [TT, ...UT] : UT
      },
      kT = TT => {
        const UT = [];
        for (const mT of HT(TT)) !nT(mT) && MT(mT) && UT.push(mT);
        return UT
      },
      jT = new WeakMap,
      lT = TT => {
        const UT = jT.get(TT);
        if (UT && LT(UT, TT)) return !0;
        for (const mT of HT(TT))
          if (!nT(mT) && MT(mT)) return jT.set(TT, mT), !0;
        return jT.delete(TT), !1
      },
      LT = (TT, UT) => UT.contains(TT) && TT.matches(WT) && !nT(TT) && MT(TT),
      pT = (TT, UT) => LT(TT, UT) && !gT(TT),
      BT = TT => {
        for (const UT of TT.querySelectorAll("[data-pad-initial-area]"))
          if (!zT(UT, !1)) return !0;
        return !1
      },
      ZT = TT => {
        const UT = UT => {
          let mT = 0;
          for (let WT = UT.parentElement; WT && WT !== TT; WT = WT.parentElement) mT++;
          return mT
        };
        return [...TT.querySelectorAll("[data-pad-initial-area]")].filter(MT).sort(((TT, mT) => UT(mT) - UT(TT)))
      }
  },
  8799: (TT, UT, mT) => {
    mT.d(UT, {
      D: () => OT,
      H: () => eT,
      I: () => cT,
      J: () => HT,
      M: () => jT,
      d: () => vT,
      g: () => JT,
      k: () => bT,
      n: () => iT,
      p: () => BT,
      r: () => ZT,
      s: () => LT,
      t: () => pT,
      w: () => YT,
      x: () => kT,
      z: () => xT
    });
    var WT = mT(31),
      zT = mT(1783),
      MT = mT(8804),
      gT = mT(8812),
      nT = mT(8815);
    const HT = TT => (0, gT.f)(TT),
      kT = TT => {
        const UT = TT.getBoundingClientRect();
        return {
          x: UT.left + UT.width / 2,
          y: UT.top + UT.height / 2
        }
      },
      jT = (TT, UT, mT) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: TT.x,
        clientY: TT.y,
        screenX: TT.x,
        screenY: TT.y,
        button: UT,
        buttons: mT,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      lT = (TT, UT) => {
        (0, zT.g)(TT, UT)
      },
      LT = function(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const WT = 0 === mT ? 1 : 2;
        lT(TT, new PointerEvent("pointerdown", jT(UT, mT, WT))), lT(TT, new MouseEvent("mousedown", jT(UT, mT, WT)))
      },
      pT = function(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        lT(TT, new PointerEvent("pointerup", jT(UT, mT, 0))), lT(TT, new MouseEvent("mouseup", jT(UT, mT, 0)))
      },
      BT = function(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        LT(TT, UT, mT), pT(TT, UT, mT), lT(TT, 0 === mT ? new MouseEvent("click", jT(UT, 0, 0)) : new MouseEvent("contextmenu", jT(UT, 2, 0)))
      },
      ZT = function(TT, UT, mT) {
        let {
          leaveBelow: WT = null,
          enterBelow: zT = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (TT !== UT) {
          if (null !== TT && void 0 !== TT && TT.isConnected) {
            const zT = {
              ...jT(mT, 0, 0),
              relatedTarget: UT
            };
            lT(TT, new PointerEvent("pointerout", zT)), lT(TT, new MouseEvent("mouseout", zT));
            const MT = TT => !!UT && TT.contains(UT) || !!WT && TT.contains(WT);
            for (let UT = TT; UT && !MT(UT); UT = UT.parentElement) lT(UT, new PointerEvent("pointerleave", {
              ...zT,
              bubbles: !1
            })), lT(UT, new MouseEvent("mouseleave", {
              ...zT,
              bubbles: !1
            }))
          }
          if (UT) {
            const WT = {
              ...jT(mT, 0, 0),
              relatedTarget: TT
            };
            lT(UT, new PointerEvent("pointerover", WT)), lT(UT, new MouseEvent("mouseover", WT));
            const MT = [],
              gT = UT => !(null === TT || void 0 === TT || !TT.isConnected) && UT.contains(TT) || !!zT && UT.contains(zT);
            for (let TT = UT; TT && !gT(TT); TT = TT.parentElement) MT.push(TT);
            for (const TT of MT.reverse()) lT(TT, new PointerEvent("pointerenter", {
              ...WT,
              bubbles: !1
            })), lT(TT, new MouseEvent("mouseenter", {
              ...WT,
              bubbles: !1
            }));
            lT(UT, new PointerEvent("pointermove", jT(mT, 0, 0))), lT(UT, new MouseEvent("mousemove", jT(mT, 0, 0)))
          }
        } else UT && (lT(UT, new PointerEvent("pointermove", jT(mT, 0, 0))), lT(UT, new MouseEvent("mousemove", jT(mT, 0, 0))))
      },
      cT = TT => {
        WT.j.EZ(MT.g, TT)
      },
      vT = TT => {
        if (HT(TT)) return void cT(TT);
        const UT = TT.hasAttribute("data-pad-focusable") ? TT.querySelector("a[href]") : null,
          mT = null !== UT && void 0 !== UT ? UT : TT;
        BT(mT, kT(mT))
      },
      fT = ".Dropdown-root.is-open",
      qT = TT => {
        const UT = TT.querySelector(".Dropdown-control");
        return vT(UT), UT
      },
      iT = TT => {
        var UT;
        const mT = null !== (UT = TT.closest(fT)) && void 0 !== UT ? UT : TT.querySelector(fT);
        return mT ? qT(mT) : null
      },
      bT = TT => {
        for (const UT of document.querySelectorAll(fT)) UT.contains(TT) || qT(UT)
      },
      OT = TT => null !== TT.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      eT = TT => {
        const UT = TT ? document.elementFromPoint(TT.x, TT.y) : null;
        return !(null === UT || void 0 === UT || !UT.closest("[data-pad-repeat]"))
      },
      YT = TT => {
        var UT;
        return null !== (UT = [...TT.querySelectorAll("[data-pad-back]")].find(nT.r)) && void 0 !== UT ? UT : null
      },
      JT = TT => {
        const UT = YT(TT);
        return !!UT && (vT(UT), !0)
      },
      xT = TT => {
        var UT, mT, WT, zT;
        return null !== (UT = null !== (mT = null !== (WT = TT.getAttribute("data-pad-key")) && void 0 !== WT ? WT : TT.getAttribute("href")) && void 0 !== mT ? mT : null === (zT = TT.querySelector("a[href]")) || void 0 === zT ? void 0 : zT.getAttribute("href")) && void 0 !== UT ? UT : null
      }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);