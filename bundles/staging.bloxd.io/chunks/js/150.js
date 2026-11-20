export const id = 150;
export const ids = [150];
export const modules = {
  8905: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => yT
    });
    var lT = cT(31),
      MT = cT(1195),
      KT = cT(4945),
      OT = cT(1099);

    function yT(TT) {
      let {
        note: kT
      } = TT;
      const {
        t: cT
      } = (0, MT.B)(), {
        clientEscMenuOptions: yT
      } = (0, lT.n)(["clientEscMenuOptions"]);
      return (0, OT.jsx)(KT.e, {
        label: cT("touchSettings:actionButtons"),
        checked: yT.touchActionButtons,
        onClick: TT => {
          lT.e.setClientEscMenuOptions({
            touchActionButtons: TT
          })
        },
        circleInfoText: cT("touchSettings:actionButtonsInfo"),
        note: kT
      })
    }
  },
  8897: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => Ec,
      f: () => Vc
    });
    var lT = cT(1195),
      MT = cT(71),
      KT = cT(2009),
      OT = cT(2022),
      yT = cT(1046),
      fT = cT.n(yT),
      xT = cT(1470),
      IT = cT(31),
      AT = cT(118),
      CT = cT(133),
      jT = cT(4945),
      vT = cT(2462),
      tT = cT(314),
      hT = cT(2031),
      NT = cT(2035),
      QT = cT(8902),
      ST = cT(8905),
      DT = cT(328),
      aT = cT(1099);
    const FT = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var rT = cT(8911);
    var PT = cT(1497),
      wT = cT(1363),
      mT = cT(1061),
      bT = cT(1420),
      zT = cT(2501);
    const JT = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(zT.C.map((TT => [TT, "menu"])))
      },
      oT = TT => zT.w.filter((kT => JT[kT] === TT)),
      HT = new Set(oT("cluster")),
      eT = ["cluster"],
      GT = [...eT, ...zT.w.filter((TT => !eT.includes(TT) && !JT[TT]))],
      VT = GT.flatMap((TT => [TT, ...oT(TT)])).map((TT => ({
        id: TT,
        label: `hudLayout:${TT}`,
        ...zT.s[TT],
        parent: JT[TT]
      }))),
      ET = Object.fromEntries(VT.map((TT => [TT.id, TT]))),
      ZT = "data-hud-el";

    function uT(TT, kT, cT, lT) {
      const MT = cT(function(TT, kT) {
          return "attack" !== TT || kT ? ET[TT].label : "hudLayout:attackContext"
        }(TT, kT)),
        KT = lT[TT];
      return KT ? cT("hudLayout:slotWithKey", {
        slot: MT,
        key: KT
      }) : MT
    }

    function XT(TT, kT, cT, lT) {
      return TT.map((TT => uT(TT, kT, cT, lT))).join(", ")
    }

    function dT(TT) {
      let {
        className: kT,
        keepPlace: cT
      } = TT;
      return cT ? (0, aT.jsx)("div", {
        className: fT()(kT, "Placeholder")
      }) : null
    }

    function LT(TT) {
      let {
        id: kT,
        elements: cT,
        actionButtons: MT,
        keyNames: KT,
        className: OT,
        keepPlace: yT,
        onHidden: fT
      } = TT;
      const {
        t: IT
      } = (0, lT.B)();
      if (!ET[kT].hide) return (0, aT.jsx)(dT, {
        className: OT,
        keepPlace: yT
      });
      const AT = (0, zT.r)(cT, kT);
      return (0, aT.jsx)(xT.P, {
        className: OT,
        ariaLabel: IT(AT ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: uT(kT, MT, IT, KT)
        }),
        pressed: !AT,
        onClick: () => {
          fT(kT, !AT)
        },
        children: (0, aT.jsx)(mT.e, {
          name: AT ? "eye-slash" : "eye"
        })
      })
    }

    function RT(TT) {
      var kT;
      let {
        id: cT,
        elements: MT,
        actionButtons: KT,
        keyNames: OT,
        className: yT,
        keepPlace: fT,
        onlyWhenMoved: IT,
        locked: AT,
        onReset: CT
      } = TT;
      const {
        t: jT
      } = (0, lT.B)(), vT = ET[cT], tT = (0, zT.J)(null !== (kT = MT[cT]) && void 0 !== kT ? kT : zT.o);
      return !vT.move && !vT.scale || IT && tT ? (0, aT.jsx)(dT, {
        className: yT,
        keepPlace: fT
      }) : (0, aT.jsx)(xT.P, {
        className: yT,
        disabled: tT || AT,
        ariaLabel: jT("hudLayout:resetElement", {
          name: uT(cT, KT, jT, OT)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: cT
        },
        onClick: TT => {
          IT && BT(TT.currentTarget), CT(cT)
        },
        children: (0, aT.jsx)(mT.e, {
          name: "rotate-left"
        })
      })
    }

    function gT(TT) {
      let {
        id: kT,
        actionButtons: cT,
        keyNames: MT,
        className: KT,
        keepPlace: OT,
        locked: yT,
        lockable: fT,
        onLocked: IT
      } = TT;
      const {
        t: AT
      } = (0, lT.B)();
      return fT || yT ? (0, aT.jsx)(xT.P, {
        className: KT,
        ariaLabel: AT(yT ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: uT(kT, cT, AT, MT)
        }),
        pressed: yT,
        active: yT,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${yT?"unlock":"lock"}:${kT}`
        },
        onClick: () => {
          IT(kT, !yT)
        },
        children: (0, aT.jsx)(mT.e, {
          name: yT ? "lock" : "lock-open"
        })
      }) : (0, aT.jsx)(dT, {
        className: KT,
        keepPlace: OT
      })
    }

    function UT(TT) {
      let {
        className: kT,
        open: cT,
        name: MT,
        onToggle: KT
      } = TT;
      const {
        t: OT
      } = (0, lT.B)();
      return (0, aT.jsx)(xT.P, {
        className: kT,
        ariaLabel: OT(cT ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: MT
        }),
        pressed: cT,
        analyticsClick: {
          id: "hud_layout.children",
          value: cT ? "close" : "open"
        },
        onClick: () => {
          KT(!cT)
        },
        children: (0, aT.jsx)(mT.e, {
          name: cT ? "angle-up" : "angle-down"
        })
      })
    }

    function YT(TT, kT) {
      var cT;
      TT.contains(document.activeElement) && kT.focus({
        preventScroll: !0
      }), null === (cT = (0, bT.g)()) || void 0 === cT || cT.handOverPadFocus(TT, kT)
    }

    function BT(TT) {
      const kT = TT.closest("[data-hud-row]"),
        cT = null === kT || void 0 === kT ? void 0 : kT.querySelector(".HudElementRowName");
      return !(!kT || !cT) && (YT(kT, cT), !0)
    }
    const WT = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function nT(TT, kT) {
      return "joystick" === TT && !kT
    }

    function pT() {
      const {
        t: TT
      } = (0, lT.B)();
      return (0, aT.jsx)(xT.P, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: TT => {
          const kT = TT.currentTarget;
          if (!BT(kT)) {
            const TT = function(TT) {
              var kT, cT;
              const lT = [TT.previousElementSibling, TT.nextElementSibling].find((TT => TT instanceof HTMLElement && TT.matches(WT)));
              return null !== (kT = null !== lT && void 0 !== lT ? lT : null === (cT = TT.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === cT ? void 0 : cT.querySelector(`:is(${WT}):not(.HudFixJoystickButton)`)) && void 0 !== kT ? kT : null
            }(kT);
            TT && YT(kT, TT)
          }
          IT.e.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: TT("hudLayout:fixJoystick")
      })
    }
    var iT = cT(94),
      qT = cT(1289),
      sT = cT(3041),
      Tk = cT(2770),
      kk = cT(8918),
      ck = cT(2504),
      lk = cT(2526),
      Mk = cT(3081);
    const Kk = ["J", "C", "A", "P", "U", "X", "G"],
      Ok = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: zT.C,
        pinnedIcon: null
      });

    function yk(TT, kT) {
      TT.replaceChildren(...[...kT.childNodes].map((TT => TT.cloneNode(!0))))
    }
    const fk = TT => ({
      [ZT]: TT
    });

    function xk(TT) {
      let {
        id: kT,
        slot: cT,
        icon: lT,
        label: KT,
        hidden: OT,
        className: yT,
        face: xT
      } = TT;
      const IT = (0, MT.useRef)(null);
      return (0, MT.useLayoutEffect)((() => {
        xT && IT.current && yk(IT.current, xT)
      }), [xT]), (0, aT.jsxs)("div", {
        className: fT()("TouchKeyHit", `TouchSlot${cT}`, yT, {
          HudPreviewGhost: OT.has(kT)
        }),
        ...fk(kT),
        children: [xT && (0, aT.jsx)("div", {
          ref: IT,
          className: fT()("TouchKey", {
            Labelled: xT.classList.contains("Labelled")
          })
        }), !xT && (0, aT.jsxs)("div", {
          className: fT()("TouchKey", {
            Labelled: void 0 !== KT
          }),
          children: [lT && (0, aT.jsx)(mT.e, {
            name: lT
          }), void 0 !== KT && (0, aT.jsx)("span", {
            className: "TouchKeyLabel",
            children: KT
          })]
        })]
      })
    }

    function Ik(TT) {
      let {
        item: kT,
        selected: cT
      } = TT;
      const lT = (0, MT.useRef)(null);
      return (0, MT.useLayoutEffect)((() => {
        lT.current && yk(lT.current, kT)
      }), [kT]), (0, aT.jsx)("div", {
        ref: lT,
        className: fT()("InvenItem", {
          Selected: cT
        })
      })
    }
    const Ak = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      Ck = TT => void 0 === TT ? {} : {
        style: {
          "--parked": TT
        }
      };

    function jk(TT) {
      let {
        id: kT,
        hidden: cT,
        parked: lT,
        unslotted: MT = !1
      } = TT;
      return (0, aT.jsx)("div", {
        className: fT()("TopRightIcon", lk.h[kT], {
          HudPreviewGhost: cT.has(kT),
          [ck.e]: void 0 !== lT,
          [ck.i]: MT
        }),
        ...Ck(lT),
        children: (0, aT.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...fk(kT),
          children: (0, aT.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, aT.jsx)(mT.e, {
              name: Ak[kT]
            })
          })
        })
      })
    }

    function vk(TT) {
      let {
        portraitPhone: kT,
        icons: cT,
        pinnedIcon: lT,
        hidden: KT,
        moved: OT,
        trayState: yT
      } = TT;
      const xT = kT ? (0, ck.D)(cT) : [],
        IT = cT.filter((TT => "settings" === TT)),
        AT = cT.filter((TT => "settings" !== TT && !xT.includes(TT))).reverse(),
        CT = xT.length > 0 && "gone" === yT,
        jT = [...IT, ...CT ? ["tray"] : [], ...AT].filter((TT => "tray" === TT || KT.has(TT) && !OT.has(TT))),
        vT = TT => {
          const kT = jT.indexOf(TT);
          return kT < 0 ? void 0 : kT
        },
        tT = (TT, kT) => (0, aT.jsx)(jk, {
          id: TT,
          hidden: KT,
          parked: kT ? vT(TT) : void 0,
          unslotted: kT && KT.has(TT) && OT.has(TT)
        }, TT);
      return (0, aT.jsxs)("div", {
        className: fT()("TopRightIcons TouchInGame", {
          Column: kT
        }),
        children: [IT.map((TT => tT(TT, !0))), xT.length > 0 && (0, aT.jsxs)("div", {
          className: fT()("TopRightIcon TopRightTrayToggle Open", {
            [ck.e]: CT
          }),
          ...Ck(vT("tray")),
          children: [(0, aT.jsx)("div", {
            className: fT()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== yT
            }),
            children: (0, aT.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, aT.jsx)(mT.e, {
                name: "ellipsis"
              })
            })
          }), (0, aT.jsx)("div", {
            className: "TopRightTray",
            children: xT.map((TT => tT(TT, !1)))
          })]
        }), AT.map((TT => (0, aT.jsxs)(MT.Fragment, {
          children: ["perspective" === TT && null !== lT && (0, aT.jsx)("div", {
            className: "TopRightIcon",
            children: (0, aT.jsx)("div", {
              className: "UiItemIcon SmallTextBold",
              children: (0, aT.jsx)("div", {
                className: "ScaleOnHover",
                children: (0, aT.jsx)(mT.e, {
                  name: lT
                })
              })
            })
          }), tT(TT, !0)]
        }, TT)))]
      })
    }

    function tk(TT) {
      let {
        next: kT,
        hidden: cT
      } = TT;
      return (0, aT.jsx)("div", {
        className: fT()("HotBarArrow", kT ? "Next" : "Previous", {
          HudPreviewGhost: cT
        }),
        ...fk("arrows"),
        children: (0, aT.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, aT.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, aT.jsx)(mT.e, {
              name: kT ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function hk() {
      return (0, aT.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, aT.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, aT.jsx)("div", {
            className: "SocialBar",
            children: (0, aT.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, aT.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, aT.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, aT.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, aT.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, aT.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, aT.jsx)(mT.e, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, aT.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, aT.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, aT.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, aT.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, aT.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, aT.jsx)(mT.e, {
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
    const Nk = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      Qk = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      Sk = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      Dk = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function ak(TT) {
      let {
        presence: kT,
        portraitPhone: cT,
        hidden: MT,
        actionButtons: KT,
        joystickFixed: OT,
        keysAbove: yT,
        auraBar: xT,
        trayState: IT,
        moved: CT
      } = TT;
      const {
        t: jT
      } = (0, lT.B)(), {
        faces: vT,
        items: tT
      } = kT, hT = TT => ({
        HudPreviewGhost: MT.has(TT)
      });
      return (0, aT.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, aT.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, aT.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, aT.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, aT.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, aT.jsx)("div", {
              className: "InGameHeaderGameName",
              children: jT("hudLayout:previewGameName")
            })]
          })
        }), (0, aT.jsx)("div", {
          className: "TopLeftElements",
          children: (0, aT.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, aT.jsxs)("div", {
              className: "Chat",
              children: [(0, aT.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [jT("hudLayout:previewChatLine"), jT("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), jT("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((TT => (0, aT.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, aT.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, aT.jsx)("div", {
                      className: "IndividualText",
                      children: TT
                    })
                  })
                }, TT)))
              }), (0, aT.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: fT()("ChatIconWrapper SmallTextLight", hT("chat")),
                ...fk("chat"),
                children: (0, aT.jsx)(mT.e, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, aT.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, aT.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, aT.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, aT.jsx)("div", {
                className: "TopRightIconsContainer",
                ...fk("menu"),
                children: (0, aT.jsx)(vk, {
                  portraitPhone: cT,
                  icons: kT.rowIcons,
                  pinnedIcon: kT.pinnedIcon,
                  hidden: MT,
                  trayState: IT,
                  moved: CT
                })
              })
            }), AT.featureFlags.useSocialFeatures && (0, aT.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, aT.jsx)(hk, {})
            })]
          })
        }), (0, aT.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, aT.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, aT.jsxs)("div", {
            className: "TouchInteractKey",
            ...fk("interact"),
            children: [(0, aT.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, aT.jsx)(mT.e, {
                name: "hand-back-point-up"
              })
            }), (0, aT.jsx)("div", {
              children: jT("hudLayout:previewInteract")
            })]
          })
        }), (0, aT.jsx)("div", {
          className: "BottomCentre",
          children: (0, aT.jsxs)("div", {
            className: "BottomElements",
            children: [(0, aT.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, aT.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, aT.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...fk("hotbar"),
                children: (0, aT.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, aT.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, aT.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, aT.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, aT.jsx)(mT.e, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), xT && (0, aT.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, aT.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, aT.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, Mk.f)("glint"),
                    alt: ""
                  }), (0, aT.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, aT.jsx)("div", {
                  className: "AuraBar",
                  children: (0, aT.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, aT.jsx)("div", {
                className: "HotBarRow",
                children: (0, aT.jsx)("div", {
                  className: fT()("HotBarContainer Touch", {
                    KeysAbove: yT
                  }),
                  children: (0, aT.jsxs)("div", {
                    className: "HotBar",
                    ...fk("hotbar"),
                    children: [(0, aT.jsxs)("div", {
                      className: fT()("TouchInventoryKeys", {
                        NoAuraBar: !xT
                      }),
                      children: [(0, aT.jsx)("div", {
                        className: fT()("TouchInventoryKey ShopKey", hT("inventory"), {
                          Hidden: !kT.shop
                        }),
                        ...fk("inventory"),
                        children: (0, aT.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, aT.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, aT.jsx)(mT.e, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, aT.jsx)("div", {
                        className: fT()("TouchInventoryKey BagKey", hT("inventory"), {
                          Hidden: !kT.bag
                        }),
                        ...fk("inventory"),
                        children: (0, aT.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, aT.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, aT.jsx)(mT.e, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, aT.jsx)(tk, {
                      next: !1,
                      hidden: MT.has("arrows")
                    }), (0, aT.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== tT && tT.map(((TT, kT) => (0, aT.jsx)(Ik, {
                        item: TT,
                        selected: TT.classList.contains("Selected")
                      }, kT))), null === tT && Sk.map((TT => {
                        const kT = Dk[TT];
                        return (0, aT.jsx)("div", {
                          className: fT()("InvenItem", {
                            Selected: 0 === TT
                          }),
                          children: kT && (0, aT.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, aT.jsx)(mT.e, {
                              name: kT
                            })
                          })
                        }, TT)
                      }))]
                    }), (0, aT.jsx)(tk, {
                      next: !0,
                      hidden: MT.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, aT.jsx)("div", {
              className: "BottomRightElements",
              children: (0, aT.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== vT && Kk.map((TT => {
                  const kT = vT[TT];
                  return kT && (0, aT.jsx)(xk, {
                    id: Nk[TT],
                    slot: TT,
                    face: kT,
                    className: Qk[TT],
                    hidden: MT
                  }, TT)
                })), null === vT && (0, aT.jsxs)(aT.Fragment, {
                  children: [(0, aT.jsx)(xk, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: MT
                  }), (0, aT.jsx)(xk, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: MT
                  }), KT && (0, aT.jsxs)(aT.Fragment, {
                    children: [(0, aT.jsx)(xk, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: MT
                    }), (0, aT.jsx)(xk, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: MT
                    })]
                  }), !KT && (0, aT.jsx)(xk, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: jT("touchKeys:scope"),
                    hidden: MT
                  }), (0, aT.jsx)(xk, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: jT("touchKeys:fly"),
                    hidden: MT
                  }), (0, aT.jsx)(xk, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: MT
                  })]
                })]
              })
            })]
          })
        }), (0, aT.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, aT.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, aT.jsxs)("div", {
              className: fT()("Joystick Resting HudPreviewJoystick", {
                Floating: !OT
              }),
              ...fk("joystick"),
              children: [(0, aT.jsx)("div", {
                className: "JoystickBase"
              }), (0, aT.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function Fk() {
      const [TT, kT] = (0, MT.useState)({}), cT = (0, MT.useCallback)((TT => {
        kT((kT => [...new Set([...Object.keys(kT), ...Object.keys(TT)])].every((cT => kT[cT] === TT[cT])) ? kT : TT))
      }), []);
      return [TT, cT]
    }
    const rk = .05;

    function Pk(TT) {
      var kT;
      let {
        selected: cT,
        layout: MT,
        actionButtons: KT,
        keyNames: OT,
        overlaps: yT,
        scaleCaps: IT,
        joystickFixed: AT,
        onScale: CT,
        onHidden: jT,
        onReset: vT,
        locked: tT,
        lockable: hT,
        onLocked: NT,
        extra: QT
      } = TT;
      const {
        t: ST
      } = (0, lT.B)(), DT = cT ? ET[cT] : null, FT = null !== cT && tT.has(cT), rT = (cT && MT.hudElements[cT] || zT.o)[2], PT = null !== (kT = cT && IT[cT]) && void 0 !== kT ? kT : zT.g, wT = TT => {
        cT && CT(cT, Math.min(PT, Math.round(100 * (rT + .1 * TT)) / 100))
      };
      return (0, aT.jsxs)(aT.Fragment, {
        children: [(0, aT.jsxs)("div", {
          className: fT()("HudQuickName SmallTextBold", {
            Overlap: yT.length > 0
          }),
          children: [yT.length > 0 && (0, aT.jsx)(mT.e, {
            name: "triangle-exclamation"
          }), DT ? uT(DT.id, KT, ST, OT) : ST("hudLayout:fullScreenHint"), yT.length > 0 && (0, aT.jsx)("span", {
            className: "HudQuickOverlap",
            children: ST("hudLayout:overlapsShort", {
              names: XT(yT, KT, ST, OT)
            })
          })]
        }), (null === DT || void 0 === DT ? void 0 : DT.scale) && (0, aT.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, aT.jsx)(xT.P, {
            disabled: FT || rT <= zT.k,
            ariaLabel: ST("hudLayout:smaller"),
            onClick: () => {
              wT(-1)
            },
            children: (0, aT.jsx)(mT.e, {
              name: "minus"
            })
          }), (0, aT.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*rT)}%`
          }), (0, aT.jsx)(xT.P, {
            disabled: FT || rT >= PT,
            ariaLabel: ST("hudLayout:larger"),
            onClick: () => {
              wT(1)
            },
            children: (0, aT.jsx)(mT.e, {
              name: "plus"
            })
          })]
        }), (DT || QT) && (0, aT.jsxs)("div", {
          className: "HudQuickActions",
          children: [DT && (0, aT.jsxs)(aT.Fragment, {
            children: [(0, aT.jsx)(gT, {
              id: DT.id,
              actionButtons: KT,
              keyNames: OT,
              locked: FT,
              lockable: hT(DT.id),
              onLocked: NT
            }), (0, aT.jsx)(LT, {
              id: DT.id,
              elements: MT.hudElements,
              actionButtons: KT,
              keyNames: OT,
              onHidden: jT
            }), (0, aT.jsx)(RT, {
              id: DT.id,
              elements: MT.hudElements,
              actionButtons: KT,
              keyNames: OT,
              locked: FT,
              onReset: vT
            }), nT(DT.id, AT) && (0, aT.jsx)(pT, {})]
          }), QT]
        })]
      })
    }
    var wk = cT(1117),
      mk = cT(4403);
    const bk = "HudPreviewDoc",
      zk = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      Jk = new Set([bk, ...Object.values(zk)]),
      Hk = new Set(zT.w.map(lk.v)),
      ek = new Set(lk.d),
      Gk = 'style, link[rel="stylesheet"]';

    function Vk(TT, kT, cT, lT) {
      const MT = new Map,
        KT = new Set,
        OT = new URL(TT.baseURI).origin,
        yT = kT => {
          var cT;
          if ("LINK" !== kT.nodeName) return !0;
          const lT = null === (cT = kT.getAttribute("href")) || void 0 === cT ? void 0 : cT.trim();
          if (!lT) return !1;
          try {
            return new URL(lT, TT.baseURI).origin === OT
          } catch {
            return !1
          }
        };
      let fT = null;
      const xT = () => {
          fT !== (0 === KT.size) && (fT = 0 === KT.size, null === lT || void 0 === lT || lT(fT))
        },
        IT = TT => {
          const kT = TT.cloneNode(!0);
          if ("LINK" === kT.tagName) {
            KT.add(kT);
            const TT = () => {
              KT.delete(kT), xT()
            };
            kT.addEventListener("load", TT), kT.addEventListener("error", TT), cT && kT.addEventListener("load", cT)
          }
          return kT
        },
        AT = () => {
          const lT = function(TT) {
              const kT = [...TT.body.children].filter((TT => TT.matches(Gk)));
              return [...TT.head.querySelectorAll(Gk), ...kT]
            }(TT).filter(yT),
            OT = new Set(lT);
          for (const [TT, kT] of MT) OT.has(TT) || (kT.remove(), MT.delete(TT), KT.delete(kT));
          let fT = null;
          for (let TT = lT.length - 1; TT >= 0; TT--) {
            const KT = lT[TT];
            let OT = MT.get(KT);
            OT ? "STYLE" === KT.tagName && OT.textContent !== KT.textContent && (OT.textContent = KT.textContent, null === cT || void 0 === cT || cT()) : (OT = IT(KT), MT.set(KT, OT), kT.head.insertBefore(OT, fT)), fT = OT
          }
          xT()
        };
      AT();
      const CT = new MutationObserver(AT);
      return CT.observe(TT.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), CT.observe(TT.body, {
        childList: !0
      }), () => {
        CT.disconnect()
      }
    }

    function Ek(TT, kT, cT) {
      let {
        keysAbove: lT
      } = cT;
      const MT = [...TT.documentElement.classList].filter((TT => !Jk.has(TT) && !ek.has(TT))),
        KT = [...kT.documentElement.classList].filter((TT => ek.has(TT))),
        OT = [bk, zk.hotbar, zk.hasShop, zk.hasBag];
      lT && OT.push(zk.keysAbove), kT.documentElement.className = [...MT, ...OT, ...KT].join(" ")
    }
    const Zk = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function uk(TT, kT, cT, lT, MT) {
      const KT = (0, zT.y)(cT, lT, "joystick"),
        OT = (0, lk.x)((0, lk.N)(cT, lT, MT), lT),
        yT = OT.classes.filter((TT => !Hk.has(TT))),
        fT = kT.documentElement;
      (0, lk.U)({
        ...OT,
        classes: yT
      }, {
        vars: fT,
        safe: fT,
        classes: fT
      });
      const xT = (0, lk.B)(cT.hudLayouts[lT].hudSafe, window.innerWidth, window.innerHeight, Xk(), (0, lk.R)(kT));
      fT.style.setProperty("--preview-joystick-shift-left", `${xT[3]}px`), fT.style.setProperty("--preview-joystick-shift-bottom", `${xT[2]}px`), fT.style.setProperty("--preview-joystick-scale", String(KT[2])), (0, mk.d)(fT, kT, cT, lT);
      for (const IT of Zk) fT.style.setProperty(IT, TT.documentElement.style.getPropertyValue(IT) || "0px")
    }

    function Xk() {
      return (0, lk.J)(IT.e.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function dk(TT) {
      return (0, lk.n)(Xk(), (0, lk.R)(TT))
    }

    function Lk(TT, kT, cT) {
      const lT = TT.documentElement.style,
        MT = (0, lk.F)(kT),
        KT = lT.getPropertyValue(MT);
      try {
        return cT((TT => {
          lT.setProperty(MT, String(TT))
        }))
      } finally {
        "" === KT ? lT.removeProperty(MT) : lT.setProperty(MT, KT)
      }
    }

    function Rk(TT, kT) {
      const [cT, lT] = Lk(TT, "hotbar", (kT => {
        const cT = cT => {
          var lT, MT;
          return kT(cT), null !== (lT = null === (MT = TT.querySelector(".HotBarGameItemsContainer")) || void 0 === MT ? void 0 : MT.getBoundingClientRect().width) && void 0 !== lT ? lT : 0
        };
        return [cT(1), cT(zT.g)]
      }));
      return cT <= 0 ? zT.g : Math.min(zT.g, Math.max(1, Math.floor(lT / cT / kT + 1e-6) * kT))
    }
    const gk = 3,
      Uk = .5,
      Yk = TT => TT.right - TT.left;
    const Bk = (TT, kT) => Math.abs((0, kk.b)(TT).x - (0, kk.b)(kT).x) + Math.abs((0, kk.b)(TT).y - (0, kk.b)(kT).y) + Math.abs(Yk(TT) - Yk(kT));

    function Wk(TT, kT, cT, lT, MT) {
      let {
        canKeep: KT = () => !0,
        passes: OT = gk,
        before: yT,
        keysAboveOf: fT
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const xT = void 0 !== fT && fT(TT) !== fT(kT),
        IT = kT.hudLayouts[cT].hudLocked.filter((TT => KT(TT) && !(xT && "inventory" === TT))),
        AT = new Set(IT);
      if (0 === AT.size) return kT;
      const CT = [...HT].filter((lT => !IT.includes(lT) && (0, zT.y)(TT, cT, lT).join() === (0, zT.y)(kT, cT, lT).join())),
        jT = TT => {
          const kT = (0, kk.E)(CT.flatMap((kT => TT[kT] ? [TT[kT]] : [])));
          return {
            ...TT,
            cluster: null !== kT && void 0 !== kT ? kT : void 0
          }
        },
        vT = TT => {
          const kT = MT(TT);
          return kT && jT(kT)
        },
        tT = yT ? jT(yT) : vT(TT);
      let hT = tT && vT(kT);
      if (!tT || !hT) return kT;
      let NT = kT;
      for (let QT = 0; QT < OT && AT.size > 0; QT++) {
        const TT = new Map;
        for (const kT of AT) {
          const MT = tT[kT],
            KT = hT[kT],
            OT = MT && KT ? nk(kT, (0, zT.y)(NT, cT, kT), MT, KT, lT) : null;
          OT ? TT.set(kT, OT) : AT.delete(kT)
        }
        if (0 === TT.size) break;
        let MT = NT;
        for (const [kT, lT] of TT) MT = (0, zT._)(MT, cT, kT, lT);
        const KT = vT(MT);
        if (!KT) return kT;
        let OT = NT;
        for (const [kT, lT] of TT) {
          const TT = KT[kT];
          TT && Bk(tT[kT], TT) < Bk(tT[kT], hT[kT]) - Uk ? OT = (0, zT._)(OT, cT, kT, lT) : AT.delete(kT)
        }
        if (OT === NT) break;
        const yT = [...TT.keys()].every((TT => AT.has(TT)));
        if (NT = OT, hT = yT ? KT : vT(NT), !hT) return kT
      }
      return MT(NT), NT
    }

    function nk(TT, kT, cT, lT, MT) {
      let [KT, OT, yT] = kT;
      const fT = zT.s[TT],
        xT = {};
      fT.scale && Yk(lT) > 0 && Math.abs(Yk(cT) - Yk(lT)) > Uk && (xT.scale = Math.max(zT.k, Math.min(zT.g, yT * Yk(cT) / Yk(lT))));
      const IT = (0, kk.b)(cT).x - (0, kk.b)(lT).x,
        AT = (0, kk.b)(cT).y - (0, kk.b)(lT).y;
      return fT.move && (Math.abs(IT) > Uk || Math.abs(AT) > Uk) && (xT.dx = KT + IT / MT.width, xT.dy = OT + AT / MT.height), void 0 === xT.scale && void 0 === xT.dx ? null : xT
    }
    let pk = 0;

    function ik() {
      return pk > 0
    }
    const qk = TT => 0 === TT.dx && 0 === TT.dy,
      sk = .001,
      Tc = TT => Math.abs(TT.dx) >= 5e-4 || Math.abs(TT.dy) >= 5e-4 ? TT : {
        dx: TT.dx,
        dy: TT.dy < 0 ? -.001 : sk
      };

    function kc(TT) {
      let {
        preview: kT,
        stageRef: cT,
        ringRef: lT,
        centreLineRef: KT,
        snapCentre: OT,
        ready: yT,
        measure: fT,
        k: xT,
        viewport: IT,
        boxes: AT,
        pieces: CT,
        selected: jT,
        insets: vT,
        layout: tT,
        canMove: hT,
        onSelect: NT,
        onMove: QT
      } = TT;
      const ST = (0, MT.useRef)(null),
        DT = (0, MT.useCallback)((() => null !== ST.current), []),
        aT = (TT, kT) => {
          if (!kT) return null;
          const cT = (0, kk.b)(TT.origin),
            lT = (0, kk.b)(kT),
            MT = (TT.to.dx - TT.from.dx) * IT.width,
            KT = (TT.to.dy - TT.from.dy) * IT.height,
            OT = kT.right - kT.left,
            yT = kT.bottom - kT.top;
          return {
            skew: {
              x: lT.x - cT.x - MT,
              y: lT.y - cT.y - KT
            },
            box: {
              left: cT.x - OT / 2,
              top: cT.y - yT / 2,
              right: cT.x + OT / 2,
              bottom: cT.y + yT / 2
            }
          }
        },
        FT = (TT, cT) => {
          var MT;
          const OT = ST.current;
          if (!OT || OT.pointerId !== TT.pointerId) return;
          ST.current = null, null === (MT = KT.current) || void 0 === MT || MT.classList.remove("Shown", "Snapped");
          const yT = lT.current;
          if (yT && null !== OT.ringStyle && yT.setAttribute("style", OT.ringStyle), cT && OT.moved) {
            const TT = qk(OT.to) ? null : fT(OT.id),
              kT = TT ? (0, kk.B)(TT, (0, kk.z)(IT.width, IT.height, vT)) : {
                x: 0,
                y: 0
              },
              cT = {
                dx: OT.to.dx + kT.x / IT.width,
                dy: OT.to.dy + kT.y / IT.height
              },
              lT = qk(OT.to) ? cT : Tc(cT);
            QT(OT.id, lT.dx, lT.dy)
          } else kT(OT.id, null), cT && OT.tapPick && NT(OT.tapPick)
        };
      return {
        busy: DT,
        handlers: {
          onPointerDown: TT => {
            var kT;
            if (!yT || ST.current || !TT.target.closest(".HudPreviewHandle")) return;
            const lT = cT.current.getBoundingClientRect(),
              MT = {
                x: (TT.clientX - lT.left) / xT,
                y: (TT.clientY - lT.top) / xT
              },
              KT = (0, kk.v)(MT, CT, 40 / xT),
              OT = "cluster" === jT && void 0 !== AT.cluster && null !== (0, kk.v)(MT, [{
                id: "cluster",
                box: AT.cluster
              }], 40 / xT),
              fT = "menu" === jT && void 0 !== AT.menu && (0, kk.d)(AT.menu, MT) && ("menu" === KT || null !== KT && (0, ck.z)(KT, tT.hudElements[KT])),
              IT = OT ? "cluster" : fT ? "menu" : null,
              vT = null !== IT,
              QT = null !== IT && void 0 !== IT ? IT : KT;
            if (!QT) return;
            if (function(TT) {
                pk++;
                const kT = cT => {
                  cT.pointerId === TT && (pk = Math.max(0, pk - 1), window.removeEventListener("pointerup", kT, !0), window.removeEventListener("pointercancel", kT, !0))
                };
                window.addEventListener("pointerup", kT, !0), window.addEventListener("pointercancel", kT, !0)
              }(TT.pointerId), !hT(QT)) return void NT(vT && KT ? KT : QT);
            NT(QT);
            const [DT, aT] = null !== (kT = tT.hudElements[QT]) && void 0 !== kT ? kT : [0, 0], FT = {
              dx: DT,
              dy: aT
            }, rT = {
              skew: {
                x: 0,
                y: 0
              },
              box: AT[QT]
            };
            ST.current = {
              id: QT,
              pointerId: TT.pointerId,
              startX: TT.clientX,
              startY: TT.clientY,
              origin: AT[QT],
              from: FT,
              to: FT,
              moved: !1,
              home: qk(FT) ? {
                centre: (0, kk.b)(AT[QT]),
                anchor: rT
              } : null,
              away: qk(FT) ? null : rT,
              anchor: rT,
              ringStyle: null,
              tapPick: vT ? KT : null
            }, TT.currentTarget.setPointerCapture(TT.pointerId)
          },
          onPointerMove: TT => {
            const cT = ST.current;
            if (!cT || cT.pointerId !== TT.pointerId) return;
            const MT = TT.clientX - cT.startX,
              yT = TT.clientY - cT.startY;
            if (!cT.moved && Math.hypot(MT, yT) < 5) return;
            const AT = !cT.moved;
            var CT, jT;
            (cT.moved = !0, AT) && (cT.ringStyle = null !== (CT = null === (jT = lT.current) || void 0 === jT ? void 0 : jT.getAttribute("style")) && void 0 !== CT ? CT : null);
            const tT = (0, kk.z)(IT.width, IT.height, vT);
            if (!cT.home) {
              var hT;
              cT.to = {
                dx: 0,
                dy: 0
              }, kT(cT.id, cT.to);
              const TT = fT(cT.id),
                lT = null !== (hT = aT(cT, TT)) && void 0 !== hT ? hT : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: cT.origin
                },
                MT = (0, kk.b)(cT.origin);
              cT.home = {
                centre: TT ? (0, kk.b)(TT) : {
                  x: MT.x - cT.from.dx * IT.width,
                  y: MT.y - cT.from.dy * IT.height
                },
                anchor: lT
              }
            }
            const NT = cT.home;
            let QT = !1;
            const DT = TT => {
                QT = !1;
                let lT = (0, kk.j)(TT.box, MT / xT, yT / xT, tT);
                const KT = IT.width / 2;
                if (OT && Math.abs((0, kk.b)(cT.origin).x + lT.x - KT) <= 8 / xT) {
                  const kT = KT - (0, kk.b)(cT.origin).x,
                    MT = (0, kk.j)(TT.box, kT, lT.y, tT);
                  QT = Math.abs(MT.x - kT) < .01, QT && (lT = MT)
                }
                const fT = (0, kk.s)(cT.from, lT.x - TT.skew.x, lT.y - TT.skew.y, IT.width, IT.height);
                cT.to = Tc(fT), cT.anchor = TT, kT(cT.id, cT.to)
              },
              FT = (0, kk.j)(NT.anchor.box, MT / xT, yT / xT, tT),
              rT = KT.current,
              PT = (0, kk.b)(cT.origin),
              wT = ((0, zT.K)(cT.id) ? 20 : 6) / xT;
            if (Math.abs(PT.x + FT.x - NT.centre.x) <= wT && Math.abs(PT.y + FT.y - NT.centre.y) <= wT) cT.to = {
              dx: 0,
              dy: 0
            }, cT.anchor = NT.anchor, QT = OT && Math.abs(NT.centre.x - IT.width / 2) < 1, kT(cT.id, cT.to);
            else if (cT.away) DT(cT.away);
            else {
              var mT;
              DT(NT.anchor), cT.away = null !== (mT = aT(cT, fT(cT.id))) && void 0 !== mT ? mT : NT.anchor, DT(cT.away)
            }
            null === rT || void 0 === rT || rT.classList.add("Shown"), null === rT || void 0 === rT || rT.classList.toggle("Snapped", QT), (TT => {
              const kT = lT.current;
              if (kT) {
                const {
                  skew: cT,
                  box: lT
                } = TT.anchor;
                kT.style.left = lT.left * xT + "px", kT.style.top = lT.top * xT + "px", kT.style.width = (lT.right - lT.left) * xT + "px", kT.style.height = (lT.bottom - lT.top) * xT + "px", kT.style.translate = `${((TT.to.dx-TT.from.dx)*IT.width+cT.x)*xT}px ${((TT.to.dy-TT.from.dy)*IT.height+cT.y)*xT}px`
              }
            })(cT)
          },
          onPointerUp: TT => {
            FT(TT, !0)
          },
          onPointerCancel: TT => {
            FT(TT, !1)
          }
        }
      }
    }

    function cc(TT, kT) {
      return Object.keys(TT).filter((TT => TT !== kT)).map((kT => TT[kT]))
    }

    function lc(TT) {
      const kT = [],
        cT = kT => (0, zT.K)(kT) && !TT.documentElement.classList.contains((0, lk.y)(kT));
      for (const OT of TT.querySelectorAll(`[${ZT}]`)) {
        const TT = cT(OT.getAttribute(ZT)) ? OT.querySelector(".ScaleOnHover") : null,
          lT = (null !== TT && void 0 !== TT ? TT : OT).getBoundingClientRect();
        (lT.width > 0 || lT.height > 0) && kT.push({
          id: OT.getAttribute(ZT),
          box: {
            left: lT.left,
            top: lT.top,
            right: lT.right,
            bottom: lT.bottom
          }
        })
      }
      const lT = TT => (0, kk.E)(kT.filter((kT => {
          let {
            id: cT
          } = kT;
          return TT(cT)
        })).map((TT => {
          let {
            box: kT
          } = TT;
          return kT
        }))),
        MT = {};
      for (const OT of new Set(kT.map((TT => TT.id)))) MT[OT] = lT((TT => TT === OT));
      const KT = lT((TT => HT.has(TT)));
      return KT && (MT.cluster = KT), {
        boxes: MT,
        pieces: kT
      }
    }

    function Mc(TT, kT, cT) {
      const lT = kT.right - kT.left,
        MT = kT.bottom - kT.top;
      return Lk(TT, "cluster", (kT => {
        const KT = cT => {
            kT(cT);
            const lT = [...TT.querySelectorAll(`[${ZT}]:not(.HudPreviewGhost)`)].filter((TT => HT.has(TT.getAttribute(ZT)))).map((TT => {
                const kT = TT.getBoundingClientRect();
                return {
                  left: kT.left,
                  top: kT.top,
                  right: kT.right,
                  bottom: kT.bottom
                }
              })),
              MT = (0, kk.E)(lT);
            return MT ? {
              w: MT.right - MT.left,
              h: MT.bottom - MT.top
            } : null
          },
          OT = TT => !TT || TT.w <= lT && TT.h <= MT,
          yT = KT(1),
          fT = KT(zT.g);
        if (!yT || OT(fT)) return zT.g;
        const xT = (TT, kT, cT) => kT > TT ? 1 + (cT - TT) * (zT.g - 1) / (kT - TT) : zT.g;
        let IT = Math.floor(Math.min(zT.g, xT(yT.w, fT.w, lT), xT(yT.h, fT.h, MT)) / cT + 1e-6) * cT;
        for (; IT > 1 && !OT(KT(IT));) IT = Math.round(100 * (IT - cT)) / 100;
        return Math.max(1, IT)
      }))
    }

    function Kc(TT) {
      Ek(document, TT, {
        keysAbove: !1
      });
      const kT = parseFloat(getComputedStyle(TT.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        cT = Number.isFinite(kT) && kT < 0;
      return Ek(document, TT, {
        keysAbove: cT
      }), cT
    }

    function Oc(TT, kT) {
      let {
        layout: cT,
        orientation: lT,
        viewport: KT,
        replicaKey: OT,
        joystickFixed: yT,
        busy: fT
      } = kT;
      const [xT, IT] = (0, MT.useState)(null), [AT, CT] = (0, MT.useState)({
        boxes: {},
        pieces: []
      }), [jT, vT] = (0, MT.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [tT, hT] = (0, MT.useState)(!1), [NT, QT] = (0, MT.useState)(!1), [ST, DT] = (0, MT.useState)(!1), aT = (0, MT.useCallback)((TT => {
        QT(TT), TT && DT(!0)
      }), []), FT = cT.hudLayouts[lT].hudSafe;
      (0, MT.useLayoutEffect)((() => {
        const kT = TT.current.contentDocument;
        kT.open(), kT.write("<!DOCTYPE html><html><head></head><body></body></html>"), kT.close(), IT(kT)
      }), [TT]);
      const rT = (0, MT.useCallback)((() => {
          xT && ((0, ck.A)(xT), CT(lc(xT)), vT(function(TT, kT) {
            const cT = dk(TT),
              [lT, MT, KT, OT] = kT ? (0, lk.r)(kT, window.innerWidth, window.innerHeight, cT) : cT;
            return {
              top: lT,
              right: MT,
              bottom: KT,
              left: OT
            }
          }(xT, FT)))
        }), [xT, FT]),
        PT = (0, MT.useCallback)((() => {
          xT && hT(Kc(xT))
        }), [xT]),
        wT = (0, MT.useRef)((() => {}));
      return wT.current = () => {
        PT(), fT() || rT()
      }, (0, MT.useLayoutEffect)((() => {
        if (xT) return Vk(document, xT, (() => {
          wT.current()
        }), aT)
      }), [xT, aT]), (0, MT.useLayoutEffect)(PT, [PT, KT]), (0, MT.useLayoutEffect)((() => {
        xT && (Ek(document, xT, {
          keysAbove: tT
        }), uk(document, xT, cT, lT, yT), PT(), rT())
      }), [xT, cT, lT, tT, OT, yT, KT, rT, PT]), (0, MT.useEffect)((() => {
        var TT;
        if (!xT) return;
        const kT = new ResizeObserver((() => {
          fT() || rT()
        }));
        for (const cT of xT.querySelectorAll(`[${ZT}]`)) kT.observe(cT);
        return null === (TT = xT.fonts) || void 0 === TT || TT.ready.then(rT), () => {
          kT.disconnect()
        }
      }), [xT, rT, fT, OT]), {
        doc: xT,
        boxes: AT.boxes,
        pieces: AT.pieces,
        insets: jT,
        keysAbove: tT,
        ready: NT,
        settled: ST
      }
    }
    const yc = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      fc = (TT, kT, cT) => {
        const lT = TT => (0, ck.z)(TT, cT.hudElements[TT]);
        return "cluster" === TT && HT.has(kT) || "cluster" === kT && HT.has(TT) || "menu" === TT && lT(kT) || "menu" === kT && lT(TT) || yc.some((lT => {
          let [MT, KT] = lT;
          const OT = cT.hudElements.hotbar,
            yT = "inventory" === KT && cT.hudLocked.includes(KT) && void 0 !== OT && !(0, zT.J)(OT);
          return (TT === MT && kT === KT || TT === KT && kT === MT) && !yT
        }))
      };
    const xc = ["Above", "Below", "Left", "Right"];

    function Ic(TT, kT, cT, lT, MT) {
      const KT = cT[TT],
        OT = (KT.left + KT.right) / 2,
        yT = (KT.top + KT.bottom) / 2,
        fT = (7.5 * kT.length + 14) / lT,
        xT = 18 / lT,
        IT = {
          Above: {
            left: OT - fT / 2,
            top: KT.top - xT,
            right: OT + fT / 2,
            bottom: KT.top
          },
          Below: {
            left: OT - fT / 2,
            top: KT.bottom,
            right: OT + fT / 2,
            bottom: KT.bottom + xT
          },
          Left: {
            left: KT.left - fT,
            top: yT - xT / 2,
            right: KT.left,
            bottom: yT + xT / 2
          },
          Right: {
            left: KT.right,
            top: yT - xT / 2,
            right: KT.right + fT,
            bottom: yT + xT / 2
          }
        },
        AT = cc(cT, TT),
        CT = {
          left: 0,
          top: 0,
          right: MT.width,
          bottom: MT.height
        };
      return xc[(0, kk.o)(xc.map((TT => IT[TT])), AT, {
        bounds: CT
      })]
    }

    function Ac() {
      const [TT, kT] = (0, sT.d)();
      return (0, MT.useMemo)((() => ({
        width: TT,
        height: kT
      })), [TT, kT])
    }

    function Cc(TT) {
      var kT;
      const {
        layout: cT,
        orientation: KT,
        selected: OT,
        onSelect: yT,
        onMove: xT,
        canMove: IT,
        actionButtons: AT,
        joystickFixed: CT,
        presence: jT,
        keyNames: tT,
        maxHeight: hT,
        fill: NT = !1,
        apiRef: QT
      } = TT, {
        t: ST
      } = (0, lT.B)(), DT = Ac(), FT = (null !== (kT = (0, vT.f)("maxAuraLevel")) && void 0 !== kT ? kT : 0) > 0, rT = cT.hudLayouts[KT], PT = (0, MT.useRef)(null), wT = (0, MT.useRef)(null), bT = (0, MT.useRef)(null), JT = (0, MT.useRef)(null), oT = (0, MT.useRef)(null), eT = (0, MT.useRef)(null), GT = (0, Tk.e)(PT).width, VT = NT ? 1 : GT > 0 ? (0, kk.y)(GT, DT.width, DT.height, hT) : 0, ET = (0, MT.useRef)((() => !1)), ZT = (0, MT.useCallback)((() => ET.current()), []), {
        doc: XT,
        boxes: dT,
        pieces: LT,
        insets: RT,
        keysAbove: gT,
        ready: UT,
        settled: YT
      } = Oc(bT, {
        layout: cT,
        orientation: KT,
        viewport: DT,
        replicaKey: `${AT}:${CT}:${FT}`,
        joystickFixed: CT,
        busy: ZT
      }), BT = (0, MT.useCallback)((TT => {
        XT && uk(document, XT, TT, KT, CT)
      }), [XT, KT, CT]), WT = (0, MT.useCallback)((TT => XT && YT ? (BT(TT), Kc(XT), function(TT) {
        let {
          boxes: kT,
          pieces: cT
        } = TT;
        const lT = cT.find((TT => "inventory" === TT.id));
        if (!lT || !kT.inventory) return kT;
        const MT = (0, kk.b)(kT.inventory),
          KT = Yk(lT.box) / 2,
          OT = (lT.box.bottom - lT.box.top) / 2;
        return {
          ...kT,
          inventory: {
            left: MT.x - KT,
            top: MT.y - OT,
            right: MT.x + KT,
            bottom: MT.y + OT
          }
        }
      }(lc(XT))) : null), [XT, YT, BT]), nT = (0, MT.useCallback)((TT => !!XT && (BT(TT), Kc(XT))), [XT, BT]), pT = (0, MT.useRef)(null), qT = (0, MT.useRef)(null), sT = (0, MT.useRef)(cT);
      sT.current = cT;
      const Mk = (0, MT.useCallback)((() => {
        null !== pT.current && (cancelAnimationFrame(pT.current), pT.current = null)
      }), []);
      (0, MT.useEffect)((() => Mk), [cT, Mk]);
      const {
        lockable: Kk
      } = TT, Ok = (0, MT.useCallback)((TT => {
        if (BT(TT), !YT || 0 === cT.hudLayouts[KT].hudLocked.length) return;
        const kT = cT;
        Mk(), pT.current = requestAnimationFrame((() => {
          var cT;
          if (pT.current = null, sT.current !== kT) return;
          const lT = (null === (cT = qT.current) || void 0 === cT ? void 0 : cT.from) === kT ? qT.current.boxes : WT(kT);
          lT && (qT.current = {
            from: kT,
            boxes: lT
          }), BT(lT ? Wk(kT, TT, KT, DT, WT, {
            canKeep: Kk,
            passes: 1,
            before: lT,
            keysAboveOf: nT
          }) : TT)
        }))
      }), [BT, YT, cT, KT, DT, WT, nT, Kk, Mk]), yk = kc({
        preview: (TT, kT) => {
          kT ? Ok((0, zT._)(cT, KT, TT, kT)) : (Mk(), BT(cT))
        },
        stageRef: wT,
        ringRef: JT,
        centreLineRef: oT,
        snapCentre: cT.hudSnapCentre,
        ready: YT,
        measure: TT => {
          var kT;
          return XT && UT && null !== (kT = lc(XT).boxes[TT]) && void 0 !== kT ? kT : null
        },
        k: VT,
        viewport: DT,
        boxes: dT,
        pieces: LT,
        selected: OT,
        insets: RT,
        layout: rT,
        canMove: IT,
        onSelect: yT,
        onMove: (TT, kT, cT) => {
          Mk(), xT(TT, kT, cT)
        }
      });
      (0, MT.useLayoutEffect)((() => {
        ET.current = yk.busy
      }), [yk.busy]);
      const fk = (0, MT.useRef)([]),
        xk = (0, MT.useRef)(rT.hudElements);
      (0, MT.useEffect)((() => {
        for (const MT of Object.keys(rT.hudElements)) {
          var TT, kT, cT, lT;
          (null !== (TT = null === (kT = rT.hudElements[MT]) || void 0 === kT ? void 0 : kT[2]) && void 0 !== TT ? TT : 1) > (null !== (cT = null === (lT = xk.current[MT]) || void 0 === lT ? void 0 : lT[2]) && void 0 !== cT ? cT : 1) && IT(MT) && !(0, ck.z)(MT, rT.hudElements[MT]) && fk.current.push(MT)
        }
        xk.current = rT.hudElements
      }), [rT.hudElements, IT]), (0, MT.useEffect)((() => {
        if (!UT) return;
        const TT = fk.current.shift(),
          kT = TT && dT[TT];
        if (!TT || !kT || yk.busy()) return;
        const cT = (0, kk.B)(kT, (0, kk.z)(DT.width, DT.height, RT));
        if (0 !== cT.x || 0 !== cT.y) {
          var lT;
          const [kT, MT] = null !== (lT = rT.hudElements[TT]) && void 0 !== lT ? lT : [0, 0];
          xT(TT, kT + cT.x / DT.width, MT + cT.y / DT.height)
        }
      }), [dT, UT]), (0, MT.useImperativeHandle)(QT, (() => ({
        setScale: (TT, kT) => {
          Ok((0, zT._)(cT, KT, TT, {
            scale: kT
          }))
        },
        setOpacity: TT => {
          BT({
            ...cT,
            hudKeyOpacity: TT
          })
        },
        keepLocks: (TT, kT) => (Mk(), Wk(TT, kT, KT, DT, WT, {
          canKeep: Kk,
          keysAboveOf: nT
        })),
        setSafe: TT => {
          Ok((0, zT.fb)(cT, KT, TT)), eT.current && (eT.current.style.inset = (0, lk.r)(TT, DT.width, DT.height, dk(null !== XT && void 0 !== XT ? XT : document)).map((TT => TT * VT + "px")).join(" "))
        }
      })), [BT, Ok, WT, nT, Mk, Kk, XT, cT, KT, DT, VT]);
      const Ik = new Set(Object.keys(rT.hudElements).filter((TT => (0, zT.r)(rT.hudElements, TT)))),
        Ak = OT ? dT[OT] : void 0,
        Ck = OT ? uT(OT, AT, ST, tT) : "",
        jk = (0, wk.h)(DT.width, DT.height),
        vk = OT ? function(TT, kT, cT, lT) {
          const MT = TT => (0, zT.r)(cT.hudElements, TT) || (0, ck.w)(TT, cT, lT);
          if (MT(TT)) return [];
          const KT = kT.filter((kT => {
              let {
                id: cT
              } = kT;
              return "cluster" === TT ? HT.has(cT) : cT === TT
            })),
            OT = new Set;
          for (const yT of kT) yT.id === TT || OT.has(yT.id) || fc(TT, yT.id, cT) || MT(yT.id) || void 0 === cT.hudElements[TT] && void 0 === cT.hudElements[yT.id] || KT.some((TT => {
            let {
              id: kT,
              box: cT
            } = TT;
            return kT !== yT.id && (0, kk.f)(cT, yT.box, 2)
          })) && OT.add(yT.id);
          return [...OT]
        }(OT, LT, rT, jk) : [],
        tk = new Set((0, ck.v)(rT.hudElements)),
        hk = (0, ck.H)(rT, (0, ck.D)(jT.rowIcons)).state,
        Nk = vk.join(),
        Qk = (0, MT.useRef)(TT.onReady);
      Qk.current = TT.onReady, (0, MT.useEffect)((() => {
        var TT;
        null === (TT = Qk.current) || void 0 === TT || TT.call(Qk, YT)
      }), [YT]);
      const Sk = (0, MT.useRef)(TT.onMeasured);
      (0, MT.useLayoutEffect)((() => {
        Sk.current = TT.onMeasured
      })), (0, MT.useEffect)((() => {
        var TT;
        const kT = XT ? {
          hotbar: Rk(XT, rk),
          cluster: Mc(XT, (0, kk.z)(DT.width, DT.height, RT), rk)
        } : {};
        null === (TT = Sk.current) || void 0 === TT || TT.call(Sk, dT, Nk ? Nk.split(",") : [], kT)
      }), [dT, Nk, XT, DT, RT]);
      const Dk = TT => ({
        left: TT.left * VT,
        top: TT.top * VT,
        width: (TT.right - TT.left) * VT,
        height: (TT.bottom - TT.top) * VT
      });
      return (0, aT.jsx)("div", {
        ref: PT,
        className: fT()("HudPreviewBox", {
          Fill: NT
        }),
        style: {
          height: DT.height * VT
        },
        children: (0, aT.jsxs)("div", {
          ref: wT,
          className: "HudPreviewStage",
          style: {
            width: DT.width * VT,
            height: DT.height * VT
          },
          children: [(0, aT.jsx)("iframe", {
            ref: bT,
            className: "HudPreviewFrame",
            title: ST("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: DT.width,
              height: DT.height,
              transform: `scale(${VT})`
            }
          }), XT && (0, iT.createPortal)((0, aT.jsx)(ak, {
            presence: jT,
            portraitPhone: jk,
            hidden: Ik,
            actionButtons: AT,
            joystickFixed: CT,
            keysAbove: gT,
            auraBar: FT,
            trayState: hk,
            moved: tk
          }), XT.body), (0, aT.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...yk.handlers,
            children: [(0, aT.jsx)("div", {
              ref: eT,
              className: "HudPreviewSafeZone",
              style: {
                top: RT.top * VT,
                right: RT.right * VT,
                bottom: RT.bottom * VT,
                left: RT.left * VT
              }
            }), LT.map(((TT, kT) => {
              let {
                id: cT,
                box: lT
              } = TT;
              return (0, aT.jsx)("div", {
                className: "HudPreviewHandle",
                style: Dk((0, kk.k)(lT, 40 / VT))
              }, `${cT}:${kT}`)
            })), rT.hudLocked.map((TT => {
              const kT = dT[TT];
              return kT && (0, aT.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: kT.right * VT,
                  top: kT.top * VT
                },
                children: (0, aT.jsx)(mT.e, {
                  name: "lock"
                })
              }, TT)
            })), (0, aT.jsx)("div", {
              ref: oT,
              className: "HudPreviewCentreLine",
              style: {
                left: DT.width / 2 * VT
              }
            }), OT && Ak && (0, aT.jsx)("div", {
              ref: JT,
              className: fT()("HudPreviewRing", {
                Fixed: !IT(OT),
                Overlap: vk.length > 0
              }),
              style: Dk(Ak),
              children: (0, aT.jsx)("span", {
                className: fT()("HudPreviewRingLabel", Ic(OT, Ck, dT, VT, DT)),
                children: Ck
              })
            })]
          })]
        })
      })
    }

    function jc(TT, kT) {
      (0, MT.useEffect)((() => {
        var cT;
        null === (cT = TT.current) || void 0 === cT || cT.toggleAttribute("inert", kT)
      }), [TT, kT])
    }
    const vc = "hudFullScreen";

    function tc(TT) {
      let {
        onScale: kT,
        onHidden: cT,
        onReset: KT,
        locked: OT,
        lockable: yT,
        onLocked: fT,
        onClose: IT,
        ...AT
      } = TT;
      const {
        t: CT
      } = (0, lT.B)(), jT = (0, MT.useRef)(null);
      (0, qT.q)("popup", jT, IT),
      function(TT) {
        const kT = (0, MT.useRef)(TT);
        kT.current = TT, (0, MT.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [vc]: !0
          }, "");
          let TT = !1;
          const cT = () => {
            TT = !0, kT.current()
          };
          return window.addEventListener("popstate", cT), () => {
            var kT;
            window.removeEventListener("popstate", cT), !TT && null !== (kT = window.history.state) && void 0 !== kT && kT[vc] && window.history.back()
          }
        }), [])
      }(IT), (0, MT.useEffect)((() => {
        function TT(TT) {
          "Escape" === TT.key && (TT.stopPropagation(), IT())
        }
        return window.addEventListener("keydown", TT, !0), () => {
          window.removeEventListener("keydown", TT, !0)
        }
      }), [IT]);
      const {
        selected: vT
      } = AT, tT = (0, MT.useRef)(null), hT = (0, MT.useRef)(null), [NT, QT] = (0, MT.useState)(!1);
      jc(hT, !NT);
      const [ST, DT] = (0, MT.useState)(null), [FT, rT] = (0, MT.useState)([]), [PT, wT] = Fk(), mT = (0, MT.useRef)(AT.selected);
      mT.current = AT.selected;
      const bT = (0, MT.useRef)({}),
        zT = (0, MT.useCallback)((() => {
          const TT = tT.current;
          TT && DT(function(TT, kT, cT) {
            var lT;
            const {
              innerWidth: MT,
              innerHeight: KT
            } = window, OT = TT.offsetWidth, yT = TT.offsetHeight, fT = Math.max(Xk()[0], 6), xT = [];
            for (const CT of [fT, .2 * KT, .5 * KT - yT / 2, .33 * KT])
              for (const TT of [.5, .3, .7]) xT.push({
                left: Math.max(0, Math.min(MT - OT - 6, Math.max(6, MT * TT - OT / 2))),
                top: CT
              });
            const IT = xT.map((TT => ({
                left: TT.left - 6,
                top: TT.top - 6,
                right: TT.left + OT + 6,
                bottom: TT.top + yT + 6
              }))),
              AT = cc(kT, cT);
            return xT[(0, kk.o)(IT, AT, {
              avoid: cT && null !== (lT = kT[cT]) && void 0 !== lT ? lT : null
            })]
          }(TT, bT.current, mT.current))
        }), []),
        JT = (0, MT.useCallback)(((TT, kT, cT) => {
          rT(kT), wT(cT), bT.current = TT, zT()
        }), [zT, wT]);
      return (0, MT.useLayoutEffect)(zT, [AT.selected, zT]), (0, iT.createPortal)((0, aT.jsxs)("div", {
        ref: jT,
        className: "HudFullScreenEditor",
        children: [(0, aT.jsx)(Cc, {
          ...AT,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: JT,
          onReady: QT,
          lockable: yT
        }), (0, aT.jsxs)("div", {
          ref: tT,
          className: "HudFullScreenToolbar",
          style: null === ST ? void 0 : {
            left: ST.left,
            top: ST.top,
            transform: "none"
          },
          children: [(0, aT.jsx)("div", {
            ref: hT,
            className: "HudFullScreenControls",
            children: (0, aT.jsx)(Pk, {
              selected: vT,
              layout: AT.layout.hudLayouts[AT.orientation],
              actionButtons: AT.actionButtons,
              keyNames: AT.keyNames,
              overlaps: FT,
              scaleCaps: PT,
              onScale: kT,
              onHidden: cT,
              onReset: KT,
              locked: OT,
              lockable: yT,
              onLocked: fT,
              joystickFixed: AT.joystickFixed
            })
          }), (0, aT.jsx)(xT.e, {
            className: "HudFullScreenDone",
            onClick: IT,
            padDefaultFocus: !0,
            children: CT("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const hc = TT => `${Math.round(100*TT)}%`;

    function Nc(TT) {
      let {
        info: kT,
        tuple: cT,
        props: MT
      } = TT;
      const {
        t: KT
      } = (0, lT.B)();
      return (0, aT.jsx)(jT.l, {
        name: KT("hudLayout:size"),
        min: zT.k,
        max: zT.g,
        step: rk,
        initValue: cT[2],
        disabled: MT.locked.has(kT.id),
        selectableMax: MT.scaleCaps[kT.id],
        cappedNote: KT("hudLayout:sizeCapped"),
        format: hc,
        onChange: TT => {
          MT.onScalePreview(kT.id, TT)
        },
        onChangeComplete: TT => {
          MT.onScale(kT.id, TT)
        }
      })
    }

    function Qc(TT) {
      const {
        t: kT
      } = (0, lT.B)(), {
        present: cT,
        elements: KT,
        selected: OT,
        onSelect: yT,
        onHidden: xT,
        onReset: IT,
        note: AT,
        actionButtons: CT,
        keyNames: jT,
        sizeBesidePreview: vT,
        locked: tT,
        lockable: hT,
        onLocked: NT
      } = TT, {
        rowIconsOpen: QT,
        onRowIconsOpen: ST
      } = TT, DT = (0, MT.useRef)(null), FT = null !== OT && (QT || !(0, zT.K)(OT));
      return (0, MT.useEffect)((() => {
        var TT;
        const kT = OT ? null === (TT = DT.current) || void 0 === TT ? void 0 : TT.querySelector(`[data-hud-row="${OT}"]`) : null;
        if (!kT) return;
        const cT = kT.closest(".SettingsMenuRight"),
          lT = performance.now();
        let MT = null;
        const KT = () => {
            clearInterval(fT), null === cT || void 0 === cT || cT.removeEventListener("scroll", yT)
          },
          yT = () => {
            ik() || KT()
          },
          fT = setInterval((() => {
            const TT = performance.now();
            TT - lT > 1500 ? KT() : ik() ? MT = null : null === MT ? MT = TT : TT - MT >= 150 && (KT(), function(TT) {
              var kT;
              const cT = TT.closest(".SettingsMenuRight"),
                lT = null === (kT = TT.closest(".HudLayoutSettings")) || void 0 === kT ? void 0 : kT.querySelector(".HudLayoutPreviewBox");
              if (!cT || !lT) return;
              const MT = lT.getBoundingClientRect().bottom + 8,
                KT = cT.getBoundingClientRect().bottom - 8,
                OT = TT.getBoundingClientRect();
              OT.top < MT ? cT.scrollBy({
                top: OT.top - MT,
                behavior: "smooth"
              }) : OT.bottom > KT && cT.scrollBy({
                top: Math.min(OT.bottom - KT, OT.top - MT),
                behavior: "smooth"
              })
            }(kT))
          }), 50);
        return null === cT || void 0 === cT || cT.addEventListener("scroll", yT, {
          passive: !0
        }), KT
      }), [OT, FT]), (0, aT.jsx)("div", {
        ref: DT,
        className: "SettingBoxGroup HudElementList",
        children: VT.filter((TT => cT.has(TT.id) && (QT || !(0, zT.K)(TT.id)))).map((cT => {
          const lT = ((TT, kT) => {
              var cT;
              return null !== (cT = TT[kT]) && void 0 !== cT ? cT : zT.o
            })(KT, cT.id),
            MT = (0, zT.r)(KT, cT.id),
            DT = cT.id === OT,
            FT = cT.scale && !vT,
            rT = AT(cT.id, DT);
          return (0, aT.jsxs)("div", {
            "data-hud-row": cT.id,
            className: fT()("SettingBox HudElementRow", {
              Open: DT,
              Hidden: MT,
              Child: void 0 !== cT.parent
            }),
            children: [(0, aT.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, aT.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": FT ? DT : void 0,
                onClick: () => {
                  yT(cT.id)
                },
                children: [uT(cT.id, CT, kT, jT), cT.scale && 1 !== lT[2] && !(DT && FT) && (0, aT.jsx)("span", {
                  className: "HudElementRowSize",
                  children: hc(lT[2])
                }), FT && (0, aT.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, aT.jsx)(gT, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: cT.id,
                actionButtons: CT,
                keyNames: jT,
                locked: tT.has(cT.id),
                lockable: hT(cT.id),
                onLocked: NT
              }), "menu" === cT.id && (0, aT.jsx)(UT, {
                className: "HudElementRowIcon",
                open: QT,
                name: uT(cT.id, CT, kT, jT),
                onToggle: ST
              }), "menu" !== cT.id && (0, aT.jsx)(LT, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: cT.id,
                elements: KT,
                actionButtons: CT,
                keyNames: jT,
                onHidden: xT
              }), (0, aT.jsx)(RT, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: tT.has(cT.id),
                id: cT.id,
                elements: KT,
                actionButtons: CT,
                keyNames: jT,
                onReset: IT
              })]
            }), DT && FT && (0, aT.jsx)(Nc, {
              info: cT,
              tuple: lT,
              props: TT
            }), rT && (0, aT.jsx)("div", {
              className: "HudElementNote",
              children: rT
            })]
          }, cT.id)
        }))
      })
    }

    function Sc(TT) {
      let {
        preview: kT,
        quick: cT,
        onFullScreen: KT,
        resting: OT,
        onSidePanel: yT
      } = TT;
      const {
        t: fT
      } = (0, lT.B)(), IT = Ac(), AT = (0, MT.useRef)(null), {
        width: CT
      } = (0, Tk.e)(AT), jT = Math.floor(IT.width * Math.min(1, kT.maxHeight / IT.height)), vT = CT - jT - 12, tT = vT >= 130, hT = CT > 0;
      (0, MT.useEffect)((() => {
        hT && yT(tT)
      }), [hT, tT, yT]);
      const NT = (0, kk.y)(tT ? jT : CT, IT.width, IT.height, kT.maxHeight),
        QT = OT ? (0, aT.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: IT.height * NT
          }
        }) : (0, aT.jsx)(Cc, {
          ...kT
        }),
        ST = TT => (0, aT.jsxs)(xT.P, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: fT("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: KT,
          children: [(0, aT.jsx)(mT.e, {
            name: "expand"
          }), TT && (0, aT.jsx)("span", {
            children: fT("hudLayout:fullScreen")
          })]
        });
      return (0, aT.jsxs)("div", {
        ref: AT,
        className: "SettingBox HudLayoutPreviewBox",
        children: [CT > 0 && tT && (0, aT.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, aT.jsx)("div", {
            style: {
              width: jT
            },
            children: QT
          }), (0, aT.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, aT.jsx)(Pk, {
              selected: kT.selected,
              ...cT,
              joystickFixed: kT.joystickFixed,
              extra: ST(!kT.selected || vT >= 278)
            })
          })]
        }), CT > 0 && !tT && (0, aT.jsxs)(aT.Fragment, {
          children: [QT, (0, aT.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: ST(!1)
          })]
        })]
      })
    }
    var Dc = cT(2521),
      ac = cT(4396),
      Fc = cT(2492),
      rc = cT(2454);
    const Pc = TT => {
      const kT = lk.j * ("sides" === TT ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(kT / 2))
    };

    function wc(TT, kT, cT) {
      const [lT, MT, KT, OT] = TT;
      return "sides" === kT ? [lT, cT, KT, cT] : [cT, MT, cT, OT]
    }
    const mc = [null, null, null, null],
      bc = TT => `${TT}px`;

    function zc(TT) {
      let {
        safe: kT,
        onPreview: cT,
        onCommit: KT
      } = TT;
      const {
        t: OT
      } = (0, lT.B)(), yT = (0, lk.r)(null !== kT && void 0 !== kT ? kT : mc, window.innerWidth, window.innerHeight, dk(document).map(Math.round)), fT = (0, MT.useRef)(null !== kT && void 0 !== kT ? kT : mc);
      fT.current = null !== kT && void 0 !== kT ? kT : mc;
      const IT = TT => {
        const kT = Math.min(Pc(TT), "sides" === TT ? Math.max(yT[1], yT[3]) : Math.max(yT[0], yT[2]));
        return (0, aT.jsx)(jT.l, {
          name: OT("sides" === TT ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: Pc(TT),
          step: 2,
          initValue: kT,
          format: bc,
          onChange: kT => {
            cT(wc(fT.current, TT, kT))
          },
          onChangeComplete: lT => {
            if (lT === kT) return void cT(fT.current);
            const MT = wc(fT.current, TT, lT);
            fT.current = MT, KT(MT), (0, PT.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: TT
            })
          }
        })
      };
      return (0, aT.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, aT.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, aT.jsx)("div", {
            children: OT("hudLayout:safeZone")
          }), (0, aT.jsx)(xT.P, {
            active: null === kT,
            pressed: null === kT,
            onClick: () => {
              KT(null)
            },
            children: OT("hudLayout:safeZoneAuto")
          })]
        }), IT("sides"), IT("ends")]
      })
    }

    function Jc() {
      var TT, kT;
      const {
        t: cT
      } = (0, lT.B)(), KT = (0, zT.W)(), {
        clientEscMenuOptions: OT
      } = (0, IT.n)(["clientEscMenuOptions"]), yT = (0, Dc.c)(), fT = KT.hudLayouts[yT], [AT, CT] = (0, MT.useState)(null), {
        rowIconsOpen: vT,
        onRowIconsOpen: tT,
        select: hT
      } = function(TT, kT) {
        const [cT, lT] = (0, MT.useState)((() => zT.C.some((kT => void 0 !== TT.hudElements[kT] || TT.hudLocked.includes(kT))))), KT = (0, MT.useCallback)((TT => {
          kT(TT), (0, zT.K)(TT) && lT(!0)
        }), [kT]);
        return {
          rowIconsOpen: cT,
          onRowIconsOpen: lT,
          select: KT
        }
      }(fT, CT), [NT, QT] = (0, MT.useState)([]), [ST, DT] = (0, MT.useState)(null), [FT, rT] = Fk(), mT = (0, MT.useCallback)(((TT, kT, cT) => {
        QT(kT), rT(cT);
        const lT = Object.keys(TT);
        DT((TT => (null === TT || void 0 === TT ? void 0 : TT.size) === lT.length && lT.every((kT => TT.has(kT))) ? TT : new Set(lT)))
      }), [rT]), {
        gameState: bT
      } = (0, IT.n)(["gameState"]), JT = (0, Fc.j)(), oT = null !== (TT = null === (kT = (0, rc.o)()) || void 0 === kT ? void 0 : kT.icon) && void 0 !== TT ? TT : null, [HT] = (0, MT.useState)((() => "inGame" === bT ? function(TT, kT, cT) {
        const lT = TT.querySelector(".InGameUi .TouchComponentsButtons");
        if (!lT) return Ok;
        const MT = {},
          KT = {};
        for (const IT of Kk) {
          const TT = lT.querySelector(`.TouchSlot${IT} > .TouchKey`);
          if (TT) {
            var OT, yT;
            MT[IT] = TT.cloneNode(!0);
            const kT = (null !== (OT = null === (yT = TT.querySelector(".TouchKeyLabel")) || void 0 === yT ? void 0 : yT.textContent) && void 0 !== OT ? OT : "").split(/\s+/).filter((TT => !/[\d\xd7]/.test(TT))).join(" ");
            kT && (KT[IT] = kT)
          }
        }
        const fT = kT => {
            const cT = TT.querySelector(`.InGameUi ${kT}`);
            return null !== cT && !cT.classList.contains("Hidden")
          },
          xT = [...TT.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((TT => TT.cloneNode(!0)));
        return {
          faces: Object.keys(MT).length > 0 ? MT : null,
          names: KT,
          shop: fT(".TouchInventoryKey.ShopKey"),
          bag: fT(".TouchInventoryKey.BagKey"),
          items: xT.length > 0 ? xT : null,
          rowIcons: kT,
          pinnedIcon: cT
        }
      }(document, JT, oT) : Ok)), eT = (0, MT.useRef)(null), GT = (0, MT.useRef)(null), ZT = function(TT) {
        const [kT, cT] = (0, MT.useState)((() => .4 * window.innerHeight));
        return (0, MT.useLayoutEffect)((() => {
          var kT;
          const lT = null === (kT = TT.current) || void 0 === kT ? void 0 : kT.closest(".SettingsMenuRight");
          if (!lT) return;
          const MT = () => {
            const TT = lT.clientHeight < oc ? .4 : .5;
            cT(Math.max(80, lT.clientHeight * TT - 24))
          };
          MT();
          const KT = new ResizeObserver(MT);
          return KT.observe(lT), () => {
            KT.disconnect()
          }
        }), [TT]), kT
      }(GT), uT = (0, ac.q)(OT.joystickMode), dT = OT.touchActionButtons, LT = (0, MT.useMemo)((() => function(TT, kT) {
        const cT = {},
          lT = [
            ["extra", "X"],
            ["game", "G"]
          ];
        kT || lT.push(["attack", "P"]);
        for (const [MT, KT] of lT) {
          const kT = TT.names[KT];
          kT && (cT[MT] = kT)
        }
        return cT
      }(HT, dT)), [HT, dT]);
      (0, MT.useEffect)((() => {
        (0, PT.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [RT, gT] = (0, MT.useState)(!1), [UT, YT] = (0, MT.useState)(!1), BT = (0, MT.useRef)(null);
      jc(BT, !UT);
      const [WT, iT] = (0, MT.useState)(!1), qT = (0, MT.useCallback)((() => {
        iT(!1)
      }), []), sT = (0, MT.useMemo)((() => new Set(fT.hudLocked)), [fT.hudLocked]), Tk = TT => {
        var kT, cT;
        const lT = (0, zT.q)(),
          MT = TT(lT);
        (0, zT.T)(null !== (kT = null === (cT = eT.current) || void 0 === cT ? void 0 : cT.keepLocks(lT, MT)) && void 0 !== kT ? kT : MT)
      }, kk = (TT, kT) => {
        Tk((cT => (0, zT._)(cT, yT, TT, kT)))
      }, lk = (TT, kT, cT) => {
        kk(TT, {
          dx: kT,
          dy: cT
        }), (0, PT.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${TT}`
        })
      }, Mk = (TT, kT) => {
        Tk((cT => (0, zT.cb)(cT, yT, TT, kT)))
      }, yk = TT => {
        const kT = ET[TT];
        return (kT.move || kT.scale) && ("joystick" !== TT || uT) && !(0, ck.z)(TT, fT.hudElements[TT])
      }, fk = TT => ET[TT].move && ("joystick" !== TT || uT) && !sT.has(TT), xk = new Set(VT.map((TT => TT.id)).filter((TT => {
        const kT = (0, zT.K)(TT) && !HT.rowIcons.includes(TT);
        return null === ST || ST.has(TT) || (0, zT.r)(fT.hudElements, TT) && !kT
      }))), Ik = {
        present: xk,
        actionButtons: dT,
        keyNames: LT,
        scaleCaps: FT,
        sizeBesidePreview: RT,
        elements: fT.hudElements,
        selected: AT,
        onSelect: hT,
        rowIconsOpen: vT,
        onRowIconsOpen: tT,
        onScalePreview: (TT, kT) => {
          var cT;
          null === (cT = eT.current) || void 0 === cT || cT.setScale(TT, kT)
        },
        onScale: (TT, kT) => {
          kk(TT, {
            scale: kT
          }), (0, PT.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${TT}`
          })
        },
        onHidden: (TT, kT) => {
          kk(TT, {
            hidden: kT
          }), (0, PT.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${kT?"hide":"show"}:${TT}`
          })
        },
        onReset: TT => {
          kk(TT, zT.c)
        },
        locked: sT,
        lockable: yk,
        onLocked: Mk,
        note: (TT, kT) => {
          const lT = kT && NT.length > 0 ? cT("hudLayout:overlapsNote", {
            names: XT(NT, dT, cT, LT)
          }) : null;
          return kT && nT(TT, uT) ? (0, aT.jsxs)(aT.Fragment, {
            children: [lT && (0, aT.jsx)("span", {
              children: lT
            }), (0, aT.jsx)("span", {
              children: cT("hudLayout:floatingJoystickNote")
            }), !RT && (0, aT.jsx)(pT, {})]
          }) : lT || (kT && sT.has(TT) ? cT("hudLayout:lockedNote") : kT && "cluster" === TT ? cT("hudLayout:clusterNote") : kT && "menu" === TT ? cT("hudLayout:menuNote") : kT && (0, ck.z)(TT, fT.hudElements[TT]) && fk(TT) ? cT("hudLayout:rowIconNote") : kT && "arrows" === TT ? cT("hudLayout:arrowsNote") : "inventory" === TT && (0, zT.r)(fT.hudElements, "inventory") ? cT("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, aT.jsxs)("div", {
        ref: GT,
        className: "HudLayoutSettings",
        children: [(0, aT.jsxs)("div", {
          ref: BT,
          className: "HudLayoutBody",
          children: [(0, aT.jsx)("div", {
            className: "HudLayoutOrientation",
            children: cT("landscape" === yT ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, aT.jsx)(Sc, {
            preview: {
              layout: KT,
              orientation: yT,
              selected: AT,
              onSelect: hT,
              onMove: lk,
              canMove: fk,
              actionButtons: dT,
              joystickFixed: uT,
              presence: HT,
              keyNames: LT,
              maxHeight: ZT,
              apiRef: eT,
              onMeasured: mT,
              onReady: YT,
              lockable: yk
            },
            quick: {
              layout: fT,
              actionButtons: dT,
              keyNames: LT,
              scaleCaps: FT,
              overlaps: NT,
              onScale: Ik.onScale,
              onHidden: Ik.onHidden,
              onReset: Ik.onReset,
              locked: sT,
              lockable: yk,
              onLocked: Mk
            },
            onFullScreen: () => {
              iT(!0)
            },
            resting: WT,
            onSidePanel: gT
          }), WT && (0, aT.jsx)(tc, {
            layout: KT,
            orientation: yT,
            selected: AT,
            onSelect: hT,
            onMove: lk,
            canMove: fk,
            actionButtons: dT,
            joystickFixed: uT,
            presence: HT,
            keyNames: LT,
            onScale: Ik.onScale,
            onHidden: Ik.onHidden,
            onReset: Ik.onReset,
            locked: sT,
            lockable: yk,
            onLocked: Mk,
            apiRef: eT,
            onClose: qT
          }), (0, aT.jsx)(zc, {
            safe: fT.hudSafe,
            onCommit: TT => {
              Tk((kT => (0, zT.fb)(kT, yT, TT)))
            },
            onPreview: TT => {
              var kT;
              null === (kT = eT.current) || void 0 === kT || kT.setSafe(TT)
            }
          }), (0, aT.jsx)(jT.e, {
            label: cT("hudLayout:snapCentre"),
            checked: KT.hudSnapCentre,
            onClick: TT => {
              (0, zT.Q)(TT)
            },
            circleInfoText: cT("hudLayout:snapCentreInfo")
          }), (0, aT.jsx)(Qc, {
            ...Ik
          }), (0, aT.jsx)(jT.h, {
            label: cT("hudLayout:shape"),
            options: zT.D.map((TT => ({
              value: TT,
              label: cT(`hudLayout:shape_${TT}`)
            }))),
            value: KT.hudShape,
            onChange: TT => {
              Tk((kT => ({
                ...kT,
                hudShape: TT
              }))), (0, PT.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: TT
              })
            }
          }), (0, aT.jsx)(jT.l, {
            name: cT("hudLayout:opacity"),
            min: zT.d,
            max: 1,
            step: .05,
            initValue: KT.hudKeyOpacity,
            format: TT => `${Math.round(100*TT)}%`,
            circleInfoText: cT("hudLayout:opacityInfo"),
            onChange: TT => {
              var kT;
              null === (kT = eT.current) || void 0 === kT || kT.setOpacity(TT)
            },
            onChangeComplete: TT => {
              (0, zT.P)(TT), (0, PT.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, aT.jsx)(xT.I, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const TT = wT.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await TT.getResult() && (0, zT.L)()
            }()
          },
          children: cT("hudLayout:resetAll")
        })]
      })
    }
    const oc = 350;
    const Hc = [function() {
      const {
        t: TT
      } = (0, lT.B)(), [kT, cT] = (0, MT.useState)(!1), KT = (0, MT.useRef)(null);
      return (0, MT.useEffect)((() => {
        var TT;
        kT && (null === (TT = KT.current) || void 0 === TT || TT.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [kT]), (0, aT.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, aT.jsxs)("button", {
          ref: KT,
          type: "button",
          className: "SettingBox SettingBoxFeatured HudLayoutEntry",
          "aria-expanded": kT,
          onClick: () => {
            cT(!kT)
          },
          children: [(0, aT.jsx)(mT.e, {
            name: "arrows-up-down-left-right",
            className: "HudLayoutEntryIcon"
          }), (0, aT.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, aT.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: TT("hudLayout:title")
            }), (0, aT.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: TT("hudLayout:entrySub")
            })]
          }), (0, aT.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), kT && (0, aT.jsx)(Jc, {})]
      })
    }, function() {
      const {
        t: TT
      } = (0, lT.B)(), {
        joystickMode: kT,
        touchSpeedCurve: cT,
        autorun: MT,
        jumpLock: KT
      } = (0, IT.n)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, aT.jsxs)(aT.Fragment, {
        children: [(0, aT.jsx)(jT.h, {
          label: TT("settingsMenu:joystick"),
          options: DT.ib.map((kT => ({
            value: kT,
            label: TT(FT[kT])
          }))),
          value: kT,
          onChange: TT => {
            IT.e.setClientEscMenuOptions({
              joystickMode: TT
            })
          },
          circleInfoText: TT("settingsMenu:joystickInfo")
        }), (0, aT.jsx)(jT.e, {
          label: TT("settingsMenu:preciseWalking"),
          checked: cT,
          onClick: TT => {
            IT.e.setClientEscMenuOptions({
              touchSpeedCurve: TT
            })
          },
          circleInfoText: TT("settingsMenu:preciseWalkingInfo")
        }), (0, aT.jsx)(jT.e, {
          label: TT("settingsMenu:autoRun"),
          checked: MT,
          onClick: TT => {
            IT.e.setClientEscMenuOptions({
              autorun: TT
            })
          },
          circleInfoText: TT("settingsMenu:autoRunInfo")
        }), (0, aT.jsx)(jT.e, {
          label: TT("settingsMenu:jumpLock"),
          checked: KT,
          onClick: TT => {
            IT.e.setClientEscMenuOptions({
              jumpLock: TT
            })
          },
          circleInfoText: TT("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, aT.jsx)(ST.e, {})
    }, function() {
      const {
        t: TT
      } = (0, lT.B)(), {
        clientEscMenuOptions: kT
      } = (0, IT.n)(["clientEscMenuOptions"]);
      return (0, rT.b)() ? (0, aT.jsx)(jT.e, {
        label: TT("settingsMenu:vibration"),
        checked: kT.vibration,
        onClick: TT => {
          IT.e.setClientEscMenuOptions({
            vibration: TT
          })
        },
        circleInfoText: TT("settingsMenu:vibrationInfo")
      }) : null
    }];

    function ec() {
      return (0, aT.jsx)(aT.Fragment, {
        children: Hc.map(((TT, kT) => (0, aT.jsx)(TT, {}, kT)))
      })
    }
    var Gc = cT(4359);

    function Vc() {
      const {
        t: TT
      } = (0, lT.B)(), {
        isTouchScreen: kT,
        clientEscMenuOptions: cT,
        gameState: OT
      } = (0, IT.n)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), yT = (0, vT.f)("ezBridging"), fT = (0, vT.f)("ezTowering"), hT = "inGame" !== OT || !0 === yT, NT = (0, tT.g)() && ("inGame" !== OT || !0 === fT), [, ST] = (0, MT.useReducer)((TT => TT + 1), 0), DT = (0, QT.e)(), [FT, rT] = (0, MT.useState)(Gc.g);
      return (0, aT.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [DT && (0, aT.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, aT.jsx)("div", {
            children: TT("controller:settingsControlsNote")
          }), (0, aT.jsx)(xT.P, {
            onClick: () => {
              IT.e.set({
                openSettingsCategory: "controller"
              })
            },
            children: TT("controller:settingsOpenController")
          })]
        }), (0, AT.isTouchscreen)() && !(0, AT.isMobile)() ? (0, aT.jsx)(aT.Fragment, {
          children: (0, aT.jsx)(jT.e, {
            label: TT("settingsMenu:useTouchControls"),
            checked: FT,
            onClick: TT => {
              (0, Gc.e)(TT), rT(TT)
            }
          })
        }) : null, kT && (0, aT.jsx)(ec, {}), hT && (0, aT.jsx)(jT.e, {
          label: TT("settingsMenu:ezBridging"),
          checked: cT.ezBridging,
          onClick: TT => {
            IT.e.setClientEscMenuOptions({
              ezBridging: TT
            })
          },
          circleInfoText: TT("settingsMenu:ezBridgingInfo")
        }), NT && (0, aT.jsx)(jT.e, {
          label: TT("settingsMenu:ezTowering"),
          checked: cT.ezTowering,
          onClick: TT => {
            IT.e.setClientEscMenuOptions({
              ezTowering: TT
            })
          },
          circleInfoText: TT("settingsMenu:ezToweringInfo")
        }), (0, aT.jsx)(jT.e, {
          label: TT("settingsMenu:crouchToggle"),
          checked: cT.crouchIsToggle,
          onClick: TT => {
            IT.e.setClientEscMenuOptions({
              crouchIsToggle: TT
            })
          },
          circleInfoText: TT("settingsMenu:crouchToggleInfo")
        }), (0, aT.jsx)(jT.e, {
          label: TT("settingsMenu:hideUiToggle"),
          checked: cT.hideUiIsToggle,
          onClick: TT => {
            IT.e.setClientEscMenuOptions({
              hideUiIsToggle: TT
            })
          },
          circleInfoText: TT("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, CT.b)() && (0, aT.jsx)(jT.l, {
          name: TT("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: cT.touchscreenSensitivity,
          onChange: TT => {
            IT.e.setClientEscMenuOptions({
              touchscreenSensitivity: TT
            })
          }
        }), !(0, AT.isMobile)() && (0, aT.jsx)(jT.l, {
          name: TT("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: cT.mouseSensitivity,
          onChange: TT => {
            IT.e.setClientEscMenuOptions({
              mouseSensitivity: TT
            })
          }
        }), !(0, AT.isMobile)() && (0, aT.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, aT.jsx)("div", {
            className: "SliderText",
            children: TT("settingsMenu:keyBindings")
          }), KT.g.map((kT => (0, aT.jsx)(Ec, {
            title: TT(kT.name.translationKey, kT.name.params),
            defaultOpen: KT.k.has(kT.id),
            children: kT.actions.map((TT => (0, aT.jsx)(Zc, {
              noaAction: TT,
              forceUpdate: ST,
              clashesWith: kT.clashesWith,
              showPadGlyph: DT
            }, TT)))
          }, kT.name.translationKey))), (0, aT.jsx)(xT.I, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, KT.J)(), ST()
            },
            children: TT("controls:resetBindings")
          })]
        })]
      })
    }

    function Ec(TT) {
      let {
        title: kT,
        defaultOpen: cT,
        children: lT
      } = TT;
      const [KT, OT] = (0, MT.useState)(cT);
      return (0, aT.jsxs)("div", {
        className: fT()("ControlsSection", {
          Collapsed: !KT
        }),
        children: [(0, aT.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            OT(!KT)
          },
          children: [(0, aT.jsx)("div", {
            className: "ControlsSectionTitle",
            children: kT
          }), (0, aT.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), KT && (0, aT.jsx)("div", {
          className: "ControlsSectionRows",
          children: lT
        })]
      })
    }

    function Zc(TT) {
      let {
        noaAction: kT,
        forceUpdate: cT,
        clashesWith: yT,
        showPadGlyph: IT
      } = TT;
      const {
        t: AT
      } = (0, lT.B)(), CT = (0, NT.d)(kT), [jT, vT] = (0, MT.useState)(!1), [tT, QT] = (0, MT.useState)("controls:clickToEnterNewBinding"), [ST, DT] = (0, MT.useState)(null), [FT, rT] = (0, MT.useState)(null), PT = (0, MT.useRef)(null);
      (0, MT.useEffect)((() => {
        jT && PT.current && PT.current.focus()
      }), [jT]);
      const wT = KT.y[kT].filter((TT => OT.i[TT]));
      let mT = null;
      const bT = [],
        zT = yT.flatMap((TT => {
          var kT, cT;
          return null !== (kT = null === (cT = KT.g.find((kT => kT.id === TT))) || void 0 === cT ? void 0 : cT.actions) && void 0 !== kT ? kT : []
        }));
      for (const lT of zT) {
        if (lT === kT) continue;
        const TT = KT.y[lT];
        for (const kT of TT) wT.includes(kT) && bT.push(AT(KT.A[lT].translationKey, KT.A[lT].params))
      }
      bT.length > 0 && (mT = AT("controls:sharedBindingsWarning") + " ", mT += bT.join(", "));
      const JT = () => {
          vT(!1), DT(null), QT("controls:clickToEnterNewBinding"), rT(null)
        },
        oT = () => "BindingInput_" + kT;
      return (0, aT.jsxs)("div", {
        className: fT()("ControlRow", {
          WarningBorder: null !== mT
        }),
        children: [(0, aT.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, aT.jsxs)("div", {
            className: "ControlName",
            children: [AT(KT.A[kT].translationKey, KT.A[kT].params), IT && CT && (0, aT.jsx)(hT.c, {
              glyph: CT,
              className: "ControlPadGlyph"
            })]
          }), (0, aT.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, aT.jsxs)("div", {
              className: "ControlBindingsList",
              children: [wT.map((TT => (0, aT.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, aT.jsx)("div", {
                  children: (0, KT.q)(TT)
                }), (0, aT.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const lT = (0, KT.D)(kT, TT);
                    lT.isError() ? rT(lT.asError().message) : rT(null), cT()
                  },
                  children: "\xd7"
                })]
              }, TT))), !jT && (0, aT.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  vT(!0), rT(null)
                },
                children: (0, aT.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), jT && (0, aT.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, aT.jsxs)("div", {
                className: "InputContainer",
                children: [(0, aT.jsx)("div", {
                  className: "InputOverlay",
                  children: ST ? (0, KT.q)(ST) : (0, aT.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: AT(tT)
                  })
                }), (0, aT.jsx)("input", {
                  ref: PT,
                  id: oT(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: TT => {
                    if ("Escape" === TT.code) return JT(), TT.preventDefault(), void TT.stopPropagation();
                    const kT = TT.code;
                    OT.e.includes(kT) ? (rT(null), DT(kT)) : (rT("controls:keyIsReserved"), DT(null)), TT.preventDefault(), TT.stopPropagation()
                  },
                  onMouseDown: TT => {
                    const kT = "Mouse" + (TT.button + 1);
                    document.activeElement && document.activeElement.id === oT() ? OT.e.includes(kT) ? (rT(null), DT(kT)) : (rT("controls:keyIsReserved"), DT(null)) : QT("controls:enterNewBinding"), TT.stopPropagation()
                  },
                  onBlur: () => {
                    QT("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, aT.jsx)(xT.e, {
                onPointerDown: TT => {
                  TT.preventDefault()
                },
                onClick: () => {
                  (0, KT.d)(kT, ST), cT(), JT()
                },
                className: "ControlBindingAddButton",
                disabled: null === ST,
                children: AT("general:add")
              }), (0, aT.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  JT()
                },
                children: "\xd7"
              })]
            }), FT && (0, aT.jsx)("div", {
              className: "ControlBindingError",
              children: AT(FT)
            })]
          })]
        }), mT && (0, aT.jsx)("div", {
          className: "ControlRowWarning",
          children: mT
        })]
      })
    }
  },
  8700: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => NT,
      c: () => hT,
      d: () => IT,
      h: () => QT,
      j: () => ST,
      k: () => CT
    });
    var lT = cT(1685),
      MT = cT(1745);
    const KT = TT => TT >= 56320 && TT <= 57343,
      OT = TT => TT >= 55296 && TT <= 56319,
      yT = (TT, kT) => kT >= 2 && KT(TT.charCodeAt(kT - 1)) && OT(TT.charCodeAt(kT - 2)) ? kT - 2 : Math.max(0, kT - 1),
      fT = (TT, kT) => {
        let cT;
        var lT, MT;
        return cT = TT.start !== TT.end ? kT < 0 ? TT.start : TT.end : kT < 0 ? yT(TT.value, TT.start) : (lT = TT.value, (MT = TT.start) + 1 < lT.length && OT(lT.charCodeAt(MT)) && KT(lT.charCodeAt(MT + 1)) ? MT + 2 : Math.min(lT.length, MT + 1)), {
          value: TT.value,
          start: cT,
          end: cT
        }
      },
      xT = ["text", "search", "url", "email", "tel", "password", "number"],
      IT = TT => !(!(0, MT.e)(TT) || TT.isContentEditable || TT.hasAttribute("data-pad-no-osk")) && (TT instanceof HTMLTextAreaElement || TT instanceof HTMLInputElement && xT.includes(TT.type)),
      AT = TT => null !== TT.selectionStart,
      CT = TT => {
        var kT, cT;
        const {
          value: lT
        } = TT;
        return {
          value: lT,
          start: null !== (kT = TT.selectionStart) && void 0 !== kT ? kT : lT.length,
          end: null !== (cT = TT.selectionEnd) && void 0 !== cT ? cT : lT.length
        }
      },
      jT = (TT, kT, cT) => {
        if (TT.readOnly) return;
        const MT = TT instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(MT, "value").set.call(TT, kT.value), AT(TT) && TT.setSelectionRange(kT.start, kT.end), (0, lT.i)(TT, new InputEvent("input", {
          bubbles: !0,
          inputType: cT
        }))
      };
    let vT = !1;
    const tT = (TT, kT) => !!document.execCommand(TT, !1, kT) || (vT || (vT = !0, console.warn(`execCommand("${TT}") failed; the on-screen keyboard is setting the value directly`)), !1),
      hT = (TT, kT) => {
        tT("insertText", kT) || jT(TT, function(TT, kT) {
          let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const lT = TT.value.slice(0, TT.start),
            MT = TT.value.slice(TT.end);
          let KT = cT < 0 ? kT.length : Math.max(0, cT - lT.length - MT.length);
          KT > 0 && KT < kT.length && OT(kT.charCodeAt(KT - 1)) && KT--;
          const yT = kT.slice(0, KT),
            fT = lT.length + yT.length;
          return {
            value: lT + yT + MT,
            start: fT,
            end: fT
          }
        }(CT(TT), kT, TT.maxLength), "insertText")
      },
      NT = TT => {
        tT("delete") || jT(TT, (TT => {
          const kT = TT.start === TT.end ? yT(TT.value, TT.start) : TT.start;
          return {
            value: TT.value.slice(0, kT) + TT.value.slice(TT.end),
            start: kT,
            end: kT
          }
        })(CT(TT)), "deleteContentBackward")
      },
      QT = (TT, kT) => {
        if (!AT(TT)) return;
        const cT = fT(CT(TT), kT);
        TT.setSelectionRange(cT.start, cT.end)
      },
      ST = TT => {
        AT(TT) && 0 === TT.selectionStart && 0 === TT.selectionEnd && TT.setSelectionRange(TT.value.length, TT.value.length)
      }
  },
  8874: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => yT
    });
    var lT = cT(31),
      MT = cT(3371),
      KT = cT(1363),
      OT = cT(1409);
    const yT = async () => {
      if ((0, OT.h)()) {
        if (!0 !== await KT.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== lT.e.get("gameState")) return
      }(0, MT.e)()
    }
  },
  8877: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => fT,
      f: () => KT,
      j: () => OT,
      n: () => MT,
      r: () => yT
    });
    var lT = cT(1982);
    const MT = "controllerPadShopOpen",
      KT = TT => lT.k.includes(TT),
      OT = TT => Object.values(TT).some((TT => !1 !== TT.canBuy && !TT.isRewardedAd)),
      yT = (TT, kT, cT) => {
        var lT, MT, OT, yT;
        const fT = TT.filter((TT => !KT(TT))),
          xT = null !== kT && TT.includes(kT) ? kT : null;
        return null !== xT && !KT(xT) && cT(xT) ? xT : null !== (lT = null !== (MT = null !== (OT = null !== (yT = fT.find(cT)) && void 0 !== yT ? yT : fT[0]) && void 0 !== OT ? OT : xT) && void 0 !== MT ? MT : TT[0]) && void 0 !== lT ? lT : null
      },
      fT = TT => TT.userInput || TT.isRewardedAd || "boolean" === typeof TT.isSelected ? null : JSON.stringify([TT.image, TT.cost, TT.currency, TT.amount, TT.customTitle, TT.buyButtonText, TT.description, TT.canBuy])
  },
  8902: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => xT,
      e: () => IT
    });
    var lT = cT(71),
      MT = cT(1461),
      KT = cT(2040),
      OT = cT(1420),
      yT = cT(1445),
      fT = cT(1099);
    const xT = () => {
        const TT = (0, OT.r)();
        if ((0, lT.useEffect)((() => {
            (0, OT.i)()
          }), []), !TT) return null;
        const {
          ControllerCategory: kT
        } = TT;
        return (0, fT.jsx)(yT.e, {
          children: (0, fT.jsx)(kT, {})
        })
      },
      IT = () => {
        var TT;
        const kT = (0, OT.r)(),
          [, cT] = (0, lT.useReducer)((TT => TT + 1), 0);
        return (0, MT.g)(KT.b, cT), null !== (TT = null === kT || void 0 === kT ? void 0 : kT.hasActivePad()) && void 0 !== TT && TT
      }
  },
  8707: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT,
      e: () => xT,
      f: () => tT,
      i: () => AT,
      k: () => vT,
      l: () => KT,
      m: () => jT,
      n: () => OT,
      p: () => CT
    });
    const lT = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      MT = (TT, kT) => {
        if ("function" === typeof TT.checkVisibility) return !TT.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: kT,
          checkOpacity: kT
        });
        const {
          visibility: cT
        } = getComputedStyle(TT);
        if ("hidden" === cT || "collapse" === cT) return !0;
        if (!kT) return !1;
        for (let lT = TT; lT; lT = lT.parentElement)
          if ("0" === getComputedStyle(lT).opacity) return !0;
        return !1
      },
      KT = TT => {
        if (!TT.isConnected || MT(TT, !0)) return !1;
        const kT = TT.getBoundingClientRect();
        return kT.width > 0 && kT.height > 0
      },
      OT = TT => !!TT.matches(":disabled, [aria-disabled='true']") || "button" === TT.getAttribute("role") && "-1" === TT.getAttribute("tabindex"),
      yT = TT => {
        var kT;
        if (TT.closest("[data-pad-ignore]")) return !0;
        return !!(null === (kT = TT.parentElement) || void 0 === kT ? void 0 : kT.closest("[data-pad-focusable]"))
      },
      fT = TT => {
        const kT = TT.querySelectorAll(lT);
        return TT.matches(lT) ? [TT, ...kT] : kT
      },
      xT = TT => {
        const kT = [];
        for (const cT of fT(TT)) !yT(cT) && KT(cT) && kT.push(cT);
        return kT
      },
      IT = new WeakMap,
      AT = TT => {
        const kT = IT.get(TT);
        if (kT && CT(kT, TT)) return !0;
        for (const cT of fT(TT))
          if (!yT(cT) && KT(cT)) return IT.set(TT, cT), !0;
        return IT.delete(TT), !1
      },
      CT = (TT, kT) => kT.contains(TT) && TT.matches(lT) && !yT(TT) && KT(TT),
      jT = (TT, kT) => CT(TT, kT) && !OT(TT),
      vT = TT => {
        for (const kT of TT.querySelectorAll("[data-pad-initial-area]"))
          if (!MT(kT, !1)) return !0;
        return !1
      },
      tT = TT => {
        const kT = kT => {
          let cT = 0;
          for (let lT = kT.parentElement; lT && lT !== TT; lT = lT.parentElement) cT++;
          return cT
        };
        return [...TT.querySelectorAll("[data-pad-initial-area]")].filter(KT).sort(((TT, cT) => kT(cT) - kT(TT)))
      }
  },
  8688: (TT, kT, cT) => {
    cT.d(kT, {
      C: () => FT,
      E: () => rT,
      G: () => hT,
      I: () => fT,
      M: () => IT,
      b: () => NT,
      c: () => wT,
      f: () => aT,
      i: () => DT,
      j: () => vT,
      k: () => tT,
      o: () => CT,
      p: () => jT,
      s: () => PT,
      w: () => xT,
      y: () => mT
    });
    var lT = cT(36),
      MT = cT(1685),
      KT = cT(8691),
      OT = cT(8700),
      yT = cT(8707);
    const fT = TT => (0, OT.d)(TT),
      xT = TT => {
        const kT = TT.getBoundingClientRect();
        return {
          x: kT.left + kT.width / 2,
          y: kT.top + kT.height / 2
        }
      },
      IT = (TT, kT, cT) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: TT.x,
        clientY: TT.y,
        screenX: TT.x,
        screenY: TT.y,
        button: kT,
        buttons: cT,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      AT = (TT, kT) => {
        (0, MT.i)(TT, kT)
      },
      CT = function(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const lT = 0 === cT ? 1 : 2;
        AT(TT, new PointerEvent("pointerdown", IT(kT, cT, lT))), AT(TT, new MouseEvent("mousedown", IT(kT, cT, lT)))
      },
      jT = function(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        AT(TT, new PointerEvent("pointerup", IT(kT, cT, 0))), AT(TT, new MouseEvent("mouseup", IT(kT, cT, 0)))
      },
      vT = function(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        CT(TT, kT, cT), jT(TT, kT, cT), AT(TT, 0 === cT ? new MouseEvent("click", IT(kT, 0, 0)) : new MouseEvent("contextmenu", IT(kT, 2, 0)))
      },
      tT = function(TT, kT, cT) {
        let {
          leaveBelow: lT = null,
          enterBelow: MT = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (TT !== kT) {
          if (null !== TT && void 0 !== TT && TT.isConnected) {
            const MT = {
              ...IT(cT, 0, 0),
              relatedTarget: kT
            };
            AT(TT, new PointerEvent("pointerout", MT)), AT(TT, new MouseEvent("mouseout", MT));
            const KT = TT => !!kT && TT.contains(kT) || !!lT && TT.contains(lT);
            for (let kT = TT; kT && !KT(kT); kT = kT.parentElement) AT(kT, new PointerEvent("pointerleave", {
              ...MT,
              bubbles: !1
            })), AT(kT, new MouseEvent("mouseleave", {
              ...MT,
              bubbles: !1
            }))
          }
          if (kT) {
            const lT = {
              ...IT(cT, 0, 0),
              relatedTarget: TT
            };
            AT(kT, new PointerEvent("pointerover", lT)), AT(kT, new MouseEvent("mouseover", lT));
            const KT = [],
              OT = kT => !(null === TT || void 0 === TT || !TT.isConnected) && kT.contains(TT) || !!MT && kT.contains(MT);
            for (let TT = kT; TT && !OT(TT); TT = TT.parentElement) KT.push(TT);
            for (const TT of KT.reverse()) AT(TT, new PointerEvent("pointerenter", {
              ...lT,
              bubbles: !1
            })), AT(TT, new MouseEvent("mouseenter", {
              ...lT,
              bubbles: !1
            }));
            AT(kT, new PointerEvent("pointermove", IT(cT, 0, 0))), AT(kT, new MouseEvent("mousemove", IT(cT, 0, 0)))
          }
        } else kT && (AT(kT, new PointerEvent("pointermove", IT(cT, 0, 0))), AT(kT, new MouseEvent("mousemove", IT(cT, 0, 0))))
      },
      hT = TT => {
        lT.k.nt(KT.g, TT)
      },
      NT = TT => {
        if (fT(TT)) return void hT(TT);
        const kT = TT.hasAttribute("data-pad-focusable") ? TT.querySelector("a[href]") : null,
          cT = null !== kT && void 0 !== kT ? kT : TT;
        vT(cT, xT(cT))
      },
      QT = ".Dropdown-root.is-open",
      ST = TT => {
        const kT = TT.querySelector(".Dropdown-control");
        return NT(kT), kT
      },
      DT = TT => {
        var kT;
        const cT = null !== (kT = TT.closest(QT)) && void 0 !== kT ? kT : TT.querySelector(QT);
        return cT ? ST(cT) : null
      },
      aT = TT => {
        for (const kT of document.querySelectorAll(QT)) kT.contains(TT) || ST(kT)
      },
      FT = TT => null !== TT.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      rT = TT => {
        const kT = TT ? document.elementFromPoint(TT.x, TT.y) : null;
        return !(null === kT || void 0 === kT || !kT.closest("[data-pad-repeat]"))
      },
      PT = TT => {
        var kT;
        return null !== (kT = [...TT.querySelectorAll("[data-pad-back]")].find(yT.l)) && void 0 !== kT ? kT : null
      },
      wT = TT => {
        const kT = PT(TT);
        return !!kT && (NT(kT), !0)
      },
      mT = TT => {
        var kT, cT, lT, MT;
        return null !== (kT = null !== (cT = null !== (lT = TT.getAttribute("data-pad-key")) && void 0 !== lT ? lT : TT.getAttribute("href")) && void 0 !== cT ? cT : null === (MT = TT.querySelector("a[href]")) || void 0 === MT ? void 0 : MT.getAttribute("href")) && void 0 !== kT ? kT : null
      }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);