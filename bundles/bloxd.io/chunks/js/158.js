export const id = 158;
export const ids = [158];
export const modules = {
  8979: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB
    });
    var TB = ZB(20),
      JB = ZB(1248),
      oB = ZB(5143),
      GB = ZB(1153);

    function vB(BB) {
      let {
        note: IB
      } = BB;
      const {
        t: ZB
      } = (0, JB.G)(), {
        clientEscMenuOptions: vB
      } = (0, TB.o)(["clientEscMenuOptions"]);
      return (0, GB.jsx)(oB.e, {
        label: ZB("touchSettings:actionButtons"),
        checked: vB.touchActionButtons,
        onClick: BB => {
          TB.d.setClientEscMenuOptions({
            touchActionButtons: BB
          })
        },
        circleInfoText: ZB("touchSettings:actionButtonsInfo"),
        note: IB
      })
    }
  },
  8969: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => AZ,
      h: () => lZ
    });
    var TB = ZB(1248),
      JB = ZB(63),
      oB = ZB(2066),
      GB = ZB(2074),
      vB = ZB(1091),
      kB = ZB.n(vB),
      cB = ZB(1516),
      nB = ZB(20),
      hB = ZB(105),
      zB = ZB(121),
      FB = ZB(5143),
      NB = ZB(2526),
      gB = ZB(282),
      qB = ZB(2079),
      yB = ZB(2083),
      UB = ZB(8976),
      WB = ZB(8979),
      dB = ZB(342),
      CB = ZB(1153);
    const QB = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var sB = ZB(8985);
    var wB = ZB(1542),
      OB = ZB(1403),
      YB = ZB(8991),
      iB = ZB(1469),
      pB = ZB(1102),
      aB = ZB(8997),
      HB = ZB(2555);
    const MB = {
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
        ...Object.fromEntries(HB.A.map((BB => [BB, "menu"])))
      },
      jB = BB => HB.t.filter((IB => MB[IB] === BB)),
      PB = new Set(jB("cluster")),
      RB = new Set(jB("inventory")),
      rB = BB => "inventory" === BB || RB.has(BB),
      mB = BB => {
        const IB = MB[BB];
        return void 0 === IB ? [] : [IB, ...mB(IB)]
      },
      XB = BB => [BB, ...mB(BB)],
      LB = (BB, IB, ZB) => "shop" === BB && IB ? ZB("inventory") ? ["inventory"] : ZB("bag") ? [BB, "bag"] : [BB] : [BB],
      eB = new Map([
        ["cluster", PB],
        ["inventory", RB]
      ]),
      uB = ["cluster"],
      fB = [...uB, ...HB.t.filter((BB => !uB.includes(BB) && !MB[BB]))],
      lB = BB => [BB, ...jB(BB).flatMap(lB)],
      AB = fB.flatMap(lB).map((BB => ({
        id: BB,
        label: `hudLayout:${BB}`,
        ...HB.r[BB],
        parent: MB[BB]
      }))),
      tB = Object.fromEntries(AB.map((BB => [BB.id, BB]))),
      bB = "data-hud-el";

    function xB(BB, IB, ZB, TB) {
      const JB = ZB(function(BB, IB) {
          return "attack" !== BB || IB ? tB[BB].label : "hudLayout:attackContext"
        }(BB, IB)),
        oB = TB[BB];
      return oB ? ZB("hudLayout:slotWithKey", {
        slot: JB,
        key: oB
      }) : JB
    }

    function EB(BB, IB, ZB, TB) {
      return BB.map((BB => xB(BB, IB, ZB, TB))).join(", ")
    }

    function DB(BB) {
      let {
        className: IB,
        keepPlace: ZB
      } = BB;
      return ZB ? (0, CB.jsx)("div", {
        className: kB()(IB, "Placeholder")
      }) : null
    }

    function KB(BB) {
      let {
        id: IB,
        elements: ZB,
        actionButtons: JB,
        keyNames: oB,
        className: GB,
        keepPlace: vB,
        onHidden: kB
      } = BB;
      const {
        t: nB
      } = (0, TB.G)();
      if (!tB[IB].hide) return (0, CB.jsx)(DB, {
        className: GB,
        keepPlace: vB
      });
      const hB = (0, HB.p)(ZB, IB);
      return (0, CB.jsx)(cB.V, {
        className: GB,
        ariaLabel: nB(hB ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: xB(IB, JB, nB, oB)
        }),
        pressed: !hB,
        onClick: () => {
          kB(IB, !hB)
        },
        children: (0, CB.jsx)(pB.d, {
          name: hB ? "eye-slash" : "eye"
        })
      })
    }

    function VB(BB) {
      let {
        id: IB,
        elements: ZB,
        actionButtons: JB,
        keyNames: oB,
        className: GB,
        keepPlace: vB,
        onlyWhenMoved: kB,
        locked: nB,
        onReset: hB
      } = BB;
      const {
        t: zB
      } = (0, TB.G)(), FB = tB[IB], NB = (0, HB.I)(ZB[IB]);
      return !FB.move && !FB.scale || kB && NB ? (0, CB.jsx)(DB, {
        className: GB,
        keepPlace: vB
      }) : (0, CB.jsx)(cB.V, {
        className: GB,
        disabled: NB || nB,
        ariaLabel: zB("hudLayout:resetElement", {
          name: xB(IB, JB, zB, oB)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: IB
        },
        onClick: BB => {
          kB && ZI(BB.currentTarget), hB(IB)
        },
        children: (0, CB.jsx)(pB.d, {
          name: "rotate-left"
        })
      })
    }

    function SB(BB) {
      let {
        id: IB,
        actionButtons: ZB,
        keyNames: JB,
        className: oB,
        keepPlace: GB,
        locked: vB,
        lockable: kB,
        onLocked: nB
      } = BB;
      const {
        t: hB
      } = (0, TB.G)();
      return kB || vB ? (0, CB.jsx)(cB.V, {
        className: oB,
        ariaLabel: hB(vB ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: xB(IB, ZB, hB, JB)
        }),
        pressed: vB,
        active: vB,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${vB?"unlock":"lock"}:${IB}`
        },
        onClick: () => {
          nB(IB, !vB)
        },
        children: (0, CB.jsx)(pB.d, {
          name: vB ? "lock" : "lock-open"
        })
      }) : (0, CB.jsx)(DB, {
        className: oB,
        keepPlace: GB
      })
    }

    function BI(BB) {
      let {
        className: IB,
        open: ZB,
        name: JB,
        onToggle: oB
      } = BB;
      const {
        t: GB
      } = (0, TB.G)();
      return (0, CB.jsx)(cB.V, {
        className: IB,
        ariaLabel: GB(ZB ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: JB
        }),
        pressed: ZB,
        analyticsClick: {
          id: "hud_layout.children",
          value: ZB ? "close" : "open"
        },
        onClick: () => {
          oB(!ZB)
        },
        children: (0, CB.jsx)(pB.d, {
          name: ZB ? "angle-up" : "angle-down"
        })
      })
    }

    function II(BB, IB) {
      var ZB;
      BB.contains(document.activeElement) && IB.focus({
        preventScroll: !0
      }), null === (ZB = (0, iB.d)()) || void 0 === ZB || ZB.handOverPadFocus(BB, IB)
    }

    function ZI(BB) {
      const IB = BB.closest("[data-hud-row]"),
        ZB = null === IB || void 0 === IB ? void 0 : IB.querySelector(".HudElementRowName");
      return !(!IB || !ZB) && (II(IB, ZB), !0)
    }
    const TI = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function JI(BB, IB) {
      return "joystick" === BB && !IB
    }

    function oI() {
      const {
        t: BB
      } = (0, TB.G)();
      return (0, CB.jsx)(cB.V, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: BB => {
          const IB = BB.currentTarget;
          if (!ZI(IB)) {
            const BB = function(BB) {
              var IB, ZB;
              const TB = [BB.previousElementSibling, BB.nextElementSibling].find((BB => BB instanceof HTMLElement && BB.matches(TI)));
              return null !== (IB = null !== TB && void 0 !== TB ? TB : null === (ZB = BB.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === ZB ? void 0 : ZB.querySelector(`:is(${TI}):not(.HudFixJoystickButton)`)) && void 0 !== IB ? IB : null
            }(IB);
            BB && II(IB, BB)
          }
          nB.d.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: BB("hudLayout:fixJoystick")
      })
    }
    var GI = ZB(82),
      vI = ZB(1343),
      kI = ZB(3272),
      cI = ZB(2896),
      nI = ZB(2562);
    const hI = (BB, IB, ZB) => {
      const TB = mB(IB).includes(BB) ? BB : mB(BB).includes(IB) ? IB : null;
      if (null === TB || "joystick" === TB) return !1;
      const JB = TB === BB ? IB : BB;
      if ("menu" === TB) return (0, nI.y)(JB, ZB.hudElements[JB]);
      if ("hotbar" !== TB || !rB(JB)) return !0;
      if ((0, HB.M)(ZB.hudElements[JB]) || (0, HB.M)(ZB.hudElements.inventory)) return !1;
      return !(ZB.hudLocked.includes(JB) || ZB.hudLocked.includes("inventory")) || (0, HB.I)(ZB.hudElements.hotbar)
    };
    var zI = ZB(2590),
      FI = ZB(3316),
      NI = ZB(8999);
    const gI = BB => ({
      [bB]: BB
    });

    function qI(BB) {
      let {
        id: IB,
        slot: ZB,
        icon: TB,
        label: oB,
        hidden: GB,
        className: vB,
        face: cB
      } = BB;
      const nB = (0, JB.useRef)(null);
      return (0, JB.useLayoutEffect)((() => {
        cB && nB.current && (0, NI.q)(nB.current, cB)
      }), [cB]), (0, CB.jsxs)("div", {
        className: kB()("TouchKeyHit", `TouchSlot${ZB}`, vB, {
          HudPreviewGhost: GB.has(IB)
        }),
        ...gI(IB),
        children: [cB && (0, CB.jsx)("div", {
          ref: nB,
          className: kB()("TouchKey", {
            Labelled: cB.classList.contains("Labelled")
          })
        }), !cB && (0, CB.jsxs)("div", {
          className: kB()("TouchKey", {
            Labelled: void 0 !== oB
          }),
          children: [TB && (0, CB.jsx)(pB.d, {
            name: TB
          }), void 0 !== oB && (0, CB.jsx)("span", {
            className: "TouchKeyLabel",
            children: oB
          })]
        })]
      })
    }

    function yI(BB) {
      let {
        item: IB,
        selected: ZB
      } = BB;
      const TB = (0, JB.useRef)(null);
      return (0, JB.useLayoutEffect)((() => {
        TB.current && (0, NI.q)(TB.current, IB)
      }), [IB]), (0, CB.jsx)("div", {
        ref: TB,
        className: kB()("InvenItem", {
          Selected: ZB
        })
      })
    }
    const UI = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      WI = BB => void 0 === BB ? {} : {
        style: {
          "--parked": BB
        }
      };

    function dI(BB) {
      let {
        id: IB,
        hidden: ZB,
        parked: TB,
        unslotted: JB = !1
      } = BB;
      return (0, CB.jsx)("div", {
        className: kB()("TopRightIcon", zI.l[IB], {
          HudPreviewGhost: ZB.has(IB),
          [nI.c]: void 0 !== TB,
          [nI.g]: JB
        }),
        ...WI(TB),
        children: (0, CB.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...gI(IB),
          children: (0, CB.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, CB.jsx)(pB.d, {
              name: UI[IB]
            })
          })
        })
      })
    }

    function CI(BB) {
      let {
        portraitPhone: IB,
        icons: ZB,
        pinnedIcons: TB,
        hidden: oB,
        moved: GB,
        trayState: vB
      } = BB;
      const cB = IB ? (0, nI.H)(ZB) : [],
        nB = ZB.filter((BB => "settings" === BB)),
        hB = ZB.filter((BB => "settings" !== BB && !cB.includes(BB))).reverse(),
        zB = cB.length > 0 && "gone" === vB,
        FB = [...nB, ...zB ? ["tray"] : [], ...hB].filter((BB => "tray" === BB || oB.has(BB) && !GB.has(BB))),
        NB = BB => {
          const IB = FB.indexOf(BB);
          return IB < 0 ? void 0 : IB
        },
        gB = (BB, IB) => (0, CB.jsx)(dI, {
          id: BB,
          hidden: oB,
          parked: IB ? NB(BB) : void 0,
          unslotted: IB && oB.has(BB) && GB.has(BB)
        }, BB);
      return (0, CB.jsxs)("div", {
        className: kB()("TopRightIcons TouchInGame", {
          Column: IB
        }),
        children: [nB.map((BB => gB(BB, !0))), cB.length > 0 && (0, CB.jsxs)("div", {
          className: kB()("TopRightIcon TopRightTrayToggle Open", {
            [nI.c]: zB
          }),
          ...WI(NB("tray")),
          children: [(0, CB.jsx)("div", {
            className: kB()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== vB
            }),
            children: (0, CB.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, CB.jsx)(pB.d, {
                name: "ellipsis"
              })
            })
          }), (0, CB.jsx)("div", {
            className: "TopRightTray",
            children: cB.map((BB => gB(BB, !1)))
          })]
        }), hB.map((BB => (0, CB.jsxs)(JB.Fragment, {
          children: ["perspective" === BB && null !== TB.rightOfCamera && (0, CB.jsx)(QI, {
            icon: TB.rightOfCamera
          }), gB(BB, !0)]
        }, BB))), null !== TB.leftEnd && (0, CB.jsx)(QI, {
          icon: TB.leftEnd
        })]
      })
    }

    function QI(BB) {
      let {
        icon: IB
      } = BB;
      return (0, CB.jsx)("div", {
        className: "TopRightIcon",
        children: (0, CB.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, CB.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, CB.jsx)(pB.d, {
              name: IB
            })
          })
        })
      })
    }

    function sI(BB) {
      let {
        next: IB,
        hidden: ZB
      } = BB;
      return (0, CB.jsx)("div", {
        className: kB()("HotBarArrow", IB ? "Next" : "Previous", {
          HudPreviewGhost: ZB
        }),
        ...gI("arrows"),
        children: (0, CB.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, CB.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, CB.jsx)(pB.d, {
              name: IB ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function wI() {
      return (0, CB.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, CB.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, CB.jsx)("div", {
            className: "SocialBar",
            children: (0, CB.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, CB.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, CB.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, CB.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, CB.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, CB.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, CB.jsx)(pB.d, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, CB.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, CB.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, CB.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, CB.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, CB.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, CB.jsx)(pB.d, {
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
    const OI = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      YI = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      iI = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      pI = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function aI(BB) {
      let {
        presence: IB,
        portraitPhone: ZB,
        hidden: JB,
        actionButtons: oB,
        joystickFixed: GB,
        keysAbove: vB,
        auraBar: cB,
        trayState: nB,
        moved: zB
      } = BB;
      const {
        t: FB
      } = (0, TB.G)(), {
        faces: NB,
        items: gB
      } = IB, qB = BB => ({
        HudPreviewGhost: XB(BB).some((BB => JB.has(BB)))
      });
      return (0, CB.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, CB.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, CB.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, CB.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, CB.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, CB.jsx)("div", {
              className: "InGameHeaderGameName",
              children: FB("hudLayout:previewGameName")
            })]
          })
        }), (0, CB.jsx)("div", {
          className: "TopLeftElements",
          children: (0, CB.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, CB.jsxs)("div", {
              className: "Chat",
              children: [(0, CB.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [FB("hudLayout:previewChatLine"), FB("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), FB("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((BB => (0, CB.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, CB.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, CB.jsx)("div", {
                      className: "IndividualText",
                      children: BB
                    })
                  })
                }, BB)))
              }), (0, CB.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: kB()("ChatIconWrapper SmallTextLight", qB("chat")),
                ...gI("chat"),
                children: (0, CB.jsx)(pB.d, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, CB.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, CB.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, CB.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, CB.jsx)("div", {
                className: "TopRightIconsContainer",
                ...gI("menu"),
                children: (0, CB.jsx)(CI, {
                  portraitPhone: ZB,
                  icons: IB.rowIcons,
                  pinnedIcons: IB.pinnedIcons,
                  hidden: JB,
                  trayState: nB,
                  moved: zB
                })
              })
            }), hB.featureFlags.useSocialFeatures && (0, CB.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, CB.jsx)(wI, {})
            })]
          })
        }), (0, CB.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, CB.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, CB.jsxs)("div", {
            className: "TouchInteractKey",
            ...gI("interact"),
            children: [(0, CB.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, CB.jsx)(pB.d, {
                name: "hand-back-point-up"
              })
            }), (0, CB.jsx)("div", {
              children: FB("hudLayout:previewInteract")
            })]
          })
        }), (0, CB.jsx)("div", {
          className: "BottomCentre",
          children: (0, CB.jsxs)("div", {
            className: "BottomElements",
            children: [(0, CB.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, CB.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, CB.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...gI("hotbar"),
                children: (0, CB.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, CB.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, CB.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, CB.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, CB.jsx)(pB.d, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), cB && (0, CB.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, CB.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, CB.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, FI.f)("glint"),
                    alt: ""
                  }), (0, CB.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, CB.jsx)("div", {
                  className: "AuraBar",
                  children: (0, CB.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, CB.jsx)("div", {
                className: "HotBarRow",
                children: (0, CB.jsx)("div", {
                  className: kB()("HotBarContainer Touch", {
                    KeysAbove: vB
                  }),
                  children: (0, CB.jsxs)("div", {
                    className: "HotBar",
                    ...gI("hotbar"),
                    children: [(0, CB.jsxs)("div", {
                      className: kB()("TouchInventoryKeys", {
                        NoAuraBar: !cB
                      }),
                      children: [(0, CB.jsx)("div", {
                        className: kB()("TouchInventoryKey ShopKey", qB("shop"), {
                          Hidden: !IB.shop
                        }),
                        ...gI("shop"),
                        children: (0, CB.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, CB.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, CB.jsx)(pB.d, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, CB.jsx)("div", {
                        className: kB()("TouchInventoryKey BagKey", qB("bag"), {
                          Hidden: !IB.bag
                        }),
                        ...gI("bag"),
                        children: (0, CB.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, CB.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, CB.jsx)(pB.d, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, CB.jsx)(sI, {
                      next: !1,
                      hidden: JB.has("arrows")
                    }), (0, CB.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== gB && gB.map(((BB, IB) => (0, CB.jsx)(yI, {
                        item: BB,
                        selected: BB.classList.contains("Selected")
                      }, IB))), null === gB && iI.map((BB => {
                        const IB = pI[BB];
                        return (0, CB.jsx)("div", {
                          className: kB()("InvenItem", {
                            Selected: 0 === BB
                          }),
                          children: IB && (0, CB.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, CB.jsx)(pB.d, {
                              name: IB
                            })
                          })
                        }, BB)
                      }))]
                    }), (0, CB.jsx)(sI, {
                      next: !0,
                      hidden: JB.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, CB.jsx)("div", {
              className: "BottomRightElements",
              children: (0, CB.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== NB && NI.m.map((BB => {
                  const IB = NB[BB];
                  return IB && (0, CB.jsx)(qI, {
                    id: NI.i[BB],
                    slot: BB,
                    face: IB,
                    className: OI[BB],
                    hidden: JB
                  }, BB)
                })), (0, NI.u)(IB, oB).map((BB => (0, CB.jsx)(qI, {
                  id: NI.i[BB],
                  slot: BB,
                  icon: YI[BB].icon,
                  label: FB(YI[BB].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: JB
                }, BB))), null === NB && (0, CB.jsxs)(CB.Fragment, {
                  children: [(0, CB.jsx)(qI, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: JB
                  }), (0, CB.jsx)(qI, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: JB
                  }), oB && (0, CB.jsxs)(CB.Fragment, {
                    children: [(0, CB.jsx)(qI, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: JB
                    }), (0, CB.jsx)(qI, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: JB
                    })]
                  }), (0, NI.o)(oB).map((BB => (0, CB.jsx)(qI, {
                    id: NI.i[BB],
                    slot: BB,
                    icon: YI[BB].icon,
                    label: FB(YI[BB].labelKey),
                    hidden: JB
                  }, BB))), (0, CB.jsx)(qI, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: JB
                  })]
                })]
              })
            })]
          })
        }), (0, CB.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, CB.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, CB.jsxs)("div", {
              className: kB()("Joystick Resting HudPreviewJoystick", {
                Floating: !GB
              }),
              ...gI("joystick"),
              children: [(0, CB.jsx)("div", {
                className: "JoystickBase"
              }), (0, CB.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), IB.sprint && (0, CB.jsx)("div", {
            className: kB()("TouchSprintHit", qB("sprint"), {
              AtHome: !GB
            }),
            ...gI("sprint"),
            children: (0, CB.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, CB.jsx)(pB.d, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function HI() {
      const [BB, IB] = (0, JB.useState)({}), ZB = (0, JB.useCallback)((BB => {
        IB((IB => [...new Set([...Object.keys(IB), ...Object.keys(BB)])].every((ZB => IB[ZB] === BB[ZB])) ? IB : BB))
      }), []);
      return [BB, ZB]
    }
    const MI = .05;

    function jI(BB) {
      var IB;
      let {
        selected: ZB,
        layout: JB,
        actionButtons: oB,
        keyNames: GB,
        overlaps: vB,
        scaleCaps: nB,
        joystickFixed: hB,
        onScale: zB,
        onHidden: FB,
        onReset: NB,
        locked: gB,
        lockable: qB,
        onLocked: yB,
        extra: UB
      } = BB;
      const {
        t: WB
      } = (0, TB.G)(), dB = ZB ? tB[ZB] : null, QB = null !== ZB && gB.has(ZB), sB = (ZB && JB.hudElements[ZB] || HB.k)[2], wB = null !== (IB = ZB && nB[ZB]) && void 0 !== IB ? IB : HB.g, OB = BB => {
        ZB && zB(ZB, Math.min(wB, Math.round(100 * (sB + .1 * BB)) / 100))
      };
      return (0, CB.jsxs)(CB.Fragment, {
        children: [(0, CB.jsxs)("div", {
          className: kB()("HudQuickName SmallTextBold", {
            Overlap: vB.length > 0
          }),
          children: [vB.length > 0 && (0, CB.jsx)(pB.d, {
            name: "triangle-exclamation"
          }), dB ? xB(dB.id, oB, WB, GB) : WB("hudLayout:fullScreenHint"), vB.length > 0 && (0, CB.jsx)("span", {
            className: "HudQuickOverlap",
            children: WB("hudLayout:overlapsShort", {
              names: EB(vB, oB, WB, GB)
            })
          })]
        }), (null === dB || void 0 === dB ? void 0 : dB.scale) && (0, CB.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, CB.jsx)(cB.V, {
            disabled: QB || sB <= HB.i,
            ariaLabel: WB("hudLayout:smaller"),
            onClick: () => {
              OB(-1)
            },
            children: (0, CB.jsx)(pB.d, {
              name: "minus"
            })
          }), (0, CB.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*sB)}%`
          }), (0, CB.jsx)(cB.V, {
            disabled: QB || sB >= wB,
            ariaLabel: WB("hudLayout:larger"),
            onClick: () => {
              OB(1)
            },
            children: (0, CB.jsx)(pB.d, {
              name: "plus"
            })
          })]
        }), (dB || UB) && (0, CB.jsxs)("div", {
          className: "HudQuickActions",
          children: [dB && (0, CB.jsxs)(CB.Fragment, {
            children: [(0, CB.jsx)(SB, {
              id: dB.id,
              actionButtons: oB,
              keyNames: GB,
              locked: QB,
              lockable: qB(dB.id),
              onLocked: yB
            }), (0, CB.jsx)(KB, {
              id: dB.id,
              elements: JB.hudElements,
              actionButtons: oB,
              keyNames: GB,
              onHidden: FB
            }), (0, CB.jsx)(VB, {
              id: dB.id,
              elements: JB.hudElements,
              actionButtons: oB,
              keyNames: GB,
              locked: QB,
              onReset: NB
            }), JI(dB.id, hB) && (0, CB.jsx)(oI, {})]
          }), UB]
        })]
      })
    }
    var PI = ZB(1165),
      RI = ZB(4602);
    const rI = "HudPreviewDoc",
      mI = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      XI = new Set([rI, ...Object.values(mI)]),
      LI = new Set(HB.t.map(zI.B)),
      eI = new Set(zI.g),
      uI = 'style, link[rel="stylesheet"]';

    function fI(BB, IB, ZB, TB) {
      const JB = new Map,
        oB = new Set,
        GB = new URL(BB.baseURI).origin,
        vB = IB => {
          var ZB;
          if ("LINK" !== IB.nodeName) return !0;
          const TB = null === (ZB = IB.getAttribute("href")) || void 0 === ZB ? void 0 : ZB.trim();
          if (!TB) return !1;
          try {
            return new URL(TB, BB.baseURI).origin === GB
          } catch {
            return !1
          }
        };
      let kB = null;
      const cB = () => {
          kB !== (0 === oB.size) && (kB = 0 === oB.size, null === TB || void 0 === TB || TB(kB))
        },
        nB = BB => {
          const IB = BB.cloneNode(!0);
          if ("LINK" === IB.tagName) {
            oB.add(IB);
            const BB = () => {
              oB.delete(IB), cB()
            };
            IB.addEventListener("load", BB), IB.addEventListener("error", BB), ZB && IB.addEventListener("load", ZB)
          }
          return IB
        },
        hB = () => {
          const TB = function(BB) {
              const IB = [...BB.body.children].filter((BB => BB.matches(uI)));
              return [...BB.head.querySelectorAll(uI), ...IB]
            }(BB).filter(vB),
            GB = new Set(TB);
          for (const [BB, IB] of JB) GB.has(BB) || (IB.remove(), JB.delete(BB), oB.delete(IB));
          let kB = null;
          for (let BB = TB.length - 1; BB >= 0; BB--) {
            const oB = TB[BB];
            let GB = JB.get(oB);
            GB ? "STYLE" === oB.tagName && GB.textContent !== oB.textContent && (GB.textContent = oB.textContent, null === ZB || void 0 === ZB || ZB()) : (GB = nB(oB), JB.set(oB, GB), IB.head.insertBefore(GB, kB)), kB = GB
          }
          cB()
        };
      hB();
      const zB = new MutationObserver(hB);
      return zB.observe(BB.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), zB.observe(BB.body, {
        childList: !0
      }), () => {
        zB.disconnect()
      }
    }

    function lI(BB, IB, ZB) {
      let {
        keysAbove: TB
      } = ZB;
      const JB = [...BB.documentElement.classList].filter((BB => !XI.has(BB) && !eI.has(BB))),
        oB = [...IB.documentElement.classList].filter((BB => eI.has(BB))),
        GB = [rI, mI.hotbar, mI.hasShop, mI.hasBag];
      TB && GB.push(mI.keysAbove), IB.documentElement.className = [...JB, ...GB, ...oB].join(" ")
    }
    const AI = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function tI(BB, IB, ZB, TB, JB) {
      const oB = (0, HB.x)(ZB, TB, "joystick"),
        GB = (0, zI.C)((0, zI.L)(ZB, TB, JB), TB),
        vB = GB.classes.filter((BB => !LI.has(BB))),
        kB = IB.documentElement,
        cB = ZB.hudLayouts[TB].hudSafe,
        nB = (0, zI.F)(cB, window.innerWidth, window.innerHeight, bI(), cB ? (0, zI.O)(IB) : 0);
      (0, zI.R)({
        ...GB,
        classes: vB
      }, {
        vars: kB,
        safe: kB,
        classes: kB
      }), kB.style.setProperty("--preview-joystick-shift-left", `${nB[3]}px`), kB.style.setProperty("--preview-joystick-shift-bottom", `${nB[2]}px`), kB.style.setProperty("--preview-joystick-scale", String(oB[2])), (0, RI.e)(kB, IB, ZB, TB);
      for (const hB of AI) kB.style.setProperty(hB, BB.documentElement.style.getPropertyValue(hB) || "0px")
    }

    function bI() {
      return (0, zI.J)(nB.d.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function xI(BB) {
      return (0, zI.v)(bI(), (0, zI.O)(BB))
    }

    function EI(BB, IB, ZB) {
      const TB = BB.documentElement.style,
        JB = (0, zI.I)(IB),
        oB = TB.getPropertyValue(JB);
      try {
        return ZB((BB => {
          TB.setProperty(JB, String(BB))
        }))
      } finally {
        "" === oB ? TB.removeProperty(JB) : TB.setProperty(JB, oB)
      }
    }

    function DI(BB, IB) {
      const [ZB, TB] = EI(BB, "hotbar", (IB => {
        const ZB = ZB => {
          var TB, JB;
          return IB(ZB), null !== (TB = null === (JB = BB.querySelector(".HotBarGameItemsContainer")) || void 0 === JB ? void 0 : JB.getBoundingClientRect().width) && void 0 !== TB ? TB : 0
        };
        return [ZB(1), ZB(HB.g)]
      }));
      return ZB <= 0 ? HB.g : Math.min(HB.g, Math.max(1, Math.floor(TB / ZB / IB + 1e-6) * IB))
    }
    const KI = 3,
      VI = .5,
      SI = BB => BB.right - BB.left;
    const BZ = (BB, IB) => Math.abs((0, aB.c)(BB).x - (0, aB.c)(IB).x) + Math.abs((0, aB.c)(BB).y - (0, aB.c)(IB).y) + Math.abs(SI(BB) - SI(IB));

    function IZ(BB, IB, ZB, TB, JB) {
      let {
        canKeep: oB = () => !0,
        passes: GB = KI,
        before: vB
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const kB = IB.hudLayouts[ZB].hudLocked.filter(oB);
      if (0 === kB.length) return IB;
      const cB = [...PB].filter((TB => !kB.includes(TB) && (0, HB.x)(BB, ZB, TB).join() === (0, HB.x)(IB, ZB, TB).join())),
        nB = BB => {
          const IB = (0, aB.F)(cB.flatMap((IB => BB[IB] ? [BB[IB]] : [])));
          return {
            ...BB,
            cluster: null !== IB && void 0 !== IB ? IB : void 0
          }
        };
      let hB = null;
      const zB = BB => {
          hB = BB;
          const IB = JB(BB);
          return IB && {
            ...IB,
            boxes: nB(IB.boxes)
          }
        },
        FB = vB ? {
          ...vB,
          boxes: nB(vB.boxes)
        } : zB(BB),
        NB = FB && zB(IB);
      if (!FB || !NB) return IB;
      const gB = FB.boxes;
      let qB = NB.boxes;
      const yB = FB.keysAbove !== NB.keysAbove,
        UB = yB || Boolean(FB.shopAlone) !== Boolean(NB.shopAlone),
        WB = new Set(kB.filter((BB => !rB(BB) || !("bag" === BB ? yB : UB))));
      let dB = IB;
      for (let sB = 0; sB < GB && WB.size > 0; sB++) {
        var CB, QB;
        const BB = new Map;
        for (const IB of WB) {
          const JB = gB[IB],
            oB = qB[IB],
            GB = JB && oB ? ZZ(IB, (0, HB.x)(dB, ZB, IB), JB, oB, TB) : null;
          GB ? BB.set(IB, GB) : WB.delete(IB)
        }
        if (0 === BB.size) break;
        let JB = dB;
        for (const [IB, TB] of BB) JB = (0, HB.gb)(JB, ZB, IB, TB);
        const oB = null === (CB = zB(JB)) || void 0 === CB ? void 0 : CB.boxes;
        if (!oB) return IB;
        let GB = dB;
        for (const [IB, TB] of BB) {
          const BB = oB[IB];
          BB && BZ(gB[IB], BB) < BZ(gB[IB], qB[IB]) - VI ? GB = (0, HB.gb)(GB, ZB, IB, TB) : WB.delete(IB)
        }
        if (GB === dB) break;
        const vB = [...BB.keys()].every((BB => WB.has(BB)));
        dB = vB ? JB : GB;
        const kB = vB ? oB : null === (QB = zB(dB)) || void 0 === QB ? void 0 : QB.boxes;
        if (!kB) return IB;
        qB = kB
      }
      return hB !== dB && JB(dB), dB
    }

    function ZZ(BB, IB, ZB, TB, JB) {
      let [oB, GB, vB] = IB;
      const kB = HB.r[BB],
        cB = {};
      kB.scale && SI(TB) > 0 && Math.abs(SI(ZB) - SI(TB)) > VI && (cB.scale = Math.max(HB.i, Math.min(HB.g, vB * SI(ZB) / SI(TB))));
      const nB = (0, aB.c)(ZB).x - (0, aB.c)(TB).x,
        hB = (0, aB.c)(ZB).y - (0, aB.c)(TB).y;
      return kB.move && (Math.abs(nB) > VI || Math.abs(hB) > VI) && (cB.dx = oB + nB / JB.width, cB.dy = GB + hB / JB.height), void 0 === cB.scale && void 0 === cB.dx ? null : cB
    }
    let TZ = 0;

    function JZ() {
      return TZ > 0
    }
    const oZ = BB => 0 === BB.dx && 0 === BB.dy,
      GZ = .001,
      vZ = BB => Math.abs(BB.dx) >= 5e-4 || Math.abs(BB.dy) >= 5e-4 ? BB : {
        dx: BB.dx,
        dy: BB.dy < 0 ? -.001 : GZ
      };

    function kZ(BB) {
      let {
        preview: IB,
        stageRef: ZB,
        ringRef: TB,
        centreLineRef: oB,
        snapCentre: GB,
        ready: vB,
        measure: kB,
        k: cB,
        viewport: nB,
        boxes: hB,
        pieces: zB,
        selected: FB,
        insets: NB,
        layout: gB,
        canMove: qB,
        onSelect: yB,
        onMove: UB
      } = BB;
      const WB = (0, JB.useRef)(null),
        dB = (0, JB.useCallback)((() => null !== WB.current), []),
        CB = (BB, IB) => {
          if (!IB) return null;
          const ZB = (0, aB.c)(BB.origin),
            TB = (0, aB.c)(IB),
            JB = (BB.to.dx - BB.from.dx) * nB.width,
            oB = (BB.to.dy - BB.from.dy) * nB.height,
            GB = IB.right - IB.left,
            vB = IB.bottom - IB.top;
          return {
            skew: {
              x: TB.x - ZB.x - JB,
              y: TB.y - ZB.y - oB
            },
            box: {
              left: ZB.x - GB / 2,
              top: ZB.y - vB / 2,
              right: ZB.x + GB / 2,
              bottom: ZB.y + vB / 2
            }
          }
        },
        QB = (BB, ZB) => {
          var JB;
          const GB = WB.current;
          if (!GB || GB.pointerId !== BB.pointerId) return;
          WB.current = null, null === (JB = oB.current) || void 0 === JB || JB.classList.remove("Shown", "Snapped");
          const vB = TB.current;
          if (vB && null !== GB.ringStyle && vB.setAttribute("style", GB.ringStyle), ZB && GB.moved) {
            const BB = oZ(GB.to) ? null : kB(GB.id),
              IB = BB ? (0, aB.D)(BB, (0, aB.B)(nB.width, nB.height, NB)) : {
                x: 0,
                y: 0
              },
              ZB = {
                dx: GB.to.dx + IB.x / nB.width,
                dy: GB.to.dy + IB.y / nB.height
              },
              TB = oZ(GB.to) ? ZB : vZ(ZB);
            UB(GB.id, TB.dx, TB.dy)
          } else IB(GB.id, null), ZB && GB.tapPick && yB(GB.tapPick)
        };
      return {
        busy: dB,
        handlers: {
          onPointerDown: BB => {
            var IB;
            if (!vB || WB.current || !BB.target.closest(".HudPreviewHandle")) return;
            const TB = ZB.current.getBoundingClientRect(),
              JB = {
                x: (BB.clientX - TB.left) / cB,
                y: (BB.clientY - TB.top) / cB
              },
              oB = (0, aB.z)(JB, zB, 40 / cB),
              GB = null !== FB ? eB.get(FB) : void 0,
              kB = void 0 !== GB && null !== (0, aB.z)(JB, zB.filter((BB => {
                let {
                  id: IB
                } = BB;
                return GB.has(IB)
              })), 40 / cB),
              nB = "menu" === FB && void 0 !== hB.menu && (0, aB.d)(hB.menu, JB) && ("menu" === oB || null !== oB && (0, nI.y)(oB, gB.hudElements[oB])),
              NB = kB ? FB : nB ? "menu" : null,
              UB = null !== NB,
              dB = null !== NB && void 0 !== NB ? NB : oB;
            if (!dB) return;
            if (function(BB) {
                TZ++;
                const IB = ZB => {
                  ZB.pointerId === BB && (TZ = Math.max(0, TZ - 1), window.removeEventListener("pointerup", IB, !0), window.removeEventListener("pointercancel", IB, !0))
                };
                window.addEventListener("pointerup", IB, !0), window.addEventListener("pointercancel", IB, !0)
              }(BB.pointerId), !qB(dB)) return void yB(UB && oB ? oB : dB);
            yB(dB);
            const [CB, QB] = null !== (IB = gB.hudElements[dB]) && void 0 !== IB ? IB : [0, 0], sB = {
              dx: CB,
              dy: QB
            }, wB = {
              skew: {
                x: 0,
                y: 0
              },
              box: hB[dB]
            };
            WB.current = {
              id: dB,
              pointerId: BB.pointerId,
              startX: BB.clientX,
              startY: BB.clientY,
              origin: hB[dB],
              from: sB,
              to: sB,
              moved: !1,
              home: oZ(sB) ? {
                centre: (0, aB.c)(hB[dB]),
                anchor: wB
              } : null,
              away: oZ(sB) ? null : wB,
              anchor: wB,
              ringStyle: null,
              tapPick: UB ? oB : null
            }, BB.currentTarget.setPointerCapture(BB.pointerId)
          },
          onPointerMove: BB => {
            const ZB = WB.current;
            if (!ZB || ZB.pointerId !== BB.pointerId) return;
            const JB = BB.clientX - ZB.startX,
              vB = BB.clientY - ZB.startY;
            if (!ZB.moved && Math.hypot(JB, vB) < 5) return;
            const hB = !ZB.moved;
            var zB, FB;
            (ZB.moved = !0, hB) && (ZB.ringStyle = null !== (zB = null === (FB = TB.current) || void 0 === FB ? void 0 : FB.getAttribute("style")) && void 0 !== zB ? zB : null);
            const gB = (0, aB.B)(nB.width, nB.height, NB);
            if (!ZB.home) {
              var qB;
              ZB.to = {
                dx: 0,
                dy: 0
              }, IB(ZB.id, ZB.to);
              const BB = kB(ZB.id),
                TB = null !== (qB = CB(ZB, BB)) && void 0 !== qB ? qB : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: ZB.origin
                },
                JB = (0, aB.c)(ZB.origin);
              ZB.home = {
                centre: BB ? (0, aB.c)(BB) : {
                  x: JB.x - ZB.from.dx * nB.width,
                  y: JB.y - ZB.from.dy * nB.height
                },
                anchor: TB
              }
            }
            const yB = ZB.home;
            let UB = !1;
            const dB = BB => {
                UB = !1;
                let TB = (0, aB.n)(BB.box, JB / cB, vB / cB, gB);
                const oB = nB.width / 2;
                if (GB && Math.abs((0, aB.c)(ZB.origin).x + TB.x - oB) <= 8 / cB) {
                  const IB = oB - (0, aB.c)(ZB.origin).x,
                    JB = (0, aB.n)(BB.box, IB, TB.y, gB);
                  UB = Math.abs(JB.x - IB) < .01, UB && (TB = JB)
                }
                const kB = (0, aB.v)(ZB.from, TB.x - BB.skew.x, TB.y - BB.skew.y, nB.width, nB.height);
                ZB.to = vZ(kB), ZB.anchor = BB, IB(ZB.id, ZB.to)
              },
              QB = (0, aB.n)(yB.anchor.box, JB / cB, vB / cB, gB),
              sB = oB.current,
              wB = (0, aB.c)(ZB.origin),
              OB = ((0, HB.P)(ZB.id) ? 20 : 6) / cB;
            if (Math.abs(wB.x + QB.x - yB.centre.x) <= OB && Math.abs(wB.y + QB.y - yB.centre.y) <= OB) ZB.to = {
              dx: 0,
              dy: 0
            }, ZB.anchor = yB.anchor, UB = GB && Math.abs(yB.centre.x - nB.width / 2) < 1, IB(ZB.id, ZB.to);
            else if (ZB.away) dB(ZB.away);
            else {
              var YB;
              dB(yB.anchor), ZB.away = null !== (YB = CB(ZB, kB(ZB.id))) && void 0 !== YB ? YB : yB.anchor, dB(ZB.away)
            }
            null === sB || void 0 === sB || sB.classList.add("Shown"), null === sB || void 0 === sB || sB.classList.toggle("Snapped", UB), (BB => {
              const IB = TB.current;
              if (IB) {
                const {
                  skew: ZB,
                  box: TB
                } = BB.anchor;
                IB.style.left = TB.left * cB + "px", IB.style.top = TB.top * cB + "px", IB.style.width = (TB.right - TB.left) * cB + "px", IB.style.height = (TB.bottom - TB.top) * cB + "px", IB.style.translate = `${((BB.to.dx-BB.from.dx)*nB.width+ZB.x)*cB}px ${((BB.to.dy-BB.from.dy)*nB.height+ZB.y)*cB}px`
              }
            })(ZB)
          },
          onPointerUp: BB => {
            QB(BB, !0)
          },
          onPointerCancel: BB => {
            QB(BB, !1)
          }
        }
      }
    }
    var cZ = ZB(9001);

    function nZ(BB, IB) {
      return Object.keys(BB).filter((BB => BB !== IB)).map((IB => BB[IB]))
    }

    function hZ(BB) {
      return BB.map((BB => {
        let {
          id: IB,
          box: ZB
        } = BB;
        return `${IB}:${ZB.left},${ZB.top},${ZB.right},${ZB.bottom}`
      })).join(";")
    }

    function zZ(BB) {
      const IB = [],
        ZB = IB => (0, HB.P)(IB) && !BB.documentElement.classList.contains((0, zI.D)(IB));
      for (const vB of BB.querySelectorAll(`[${bB}]`)) {
        const BB = ZB(vB.getAttribute(bB)) ? vB.querySelector(".ScaleOnHover") : null,
          TB = (null !== BB && void 0 !== BB ? BB : vB).getBoundingClientRect();
        (TB.width > 0 || TB.height > 0) && IB.push({
          id: vB.getAttribute(bB),
          box: (0, aB.g)(TB)
        })
      }
      const TB = BB => (0, aB.F)(IB.filter((IB => {
          let {
            id: ZB
          } = IB;
          return BB(ZB)
        })).map((BB => {
          let {
            box: IB
          } = BB;
          return IB
        }))),
        JB = {};
      for (const vB of new Set(IB.map((BB => BB.id)))) JB[vB] = TB((BB => BB === vB));
      for (const [vB, kB] of eB) {
        const BB = TB((BB => kB.has(BB)));
        BB && (JB[vB] = BB)
      }
      const oB = BB.querySelector(".TouchInventoryKeys"),
        GB = oB ? (0, aB.g)(oB.getBoundingClientRect()) : null;
      return {
        boxes: JB,
        pieces: IB,
        pairHome: GB
      }
    }

    function FZ(BB, IB, ZB) {
      const TB = IB.right - IB.left,
        JB = IB.bottom - IB.top;
      return EI(BB, "cluster", (IB => {
        const oB = ZB => {
            IB(ZB);
            const TB = [...BB.querySelectorAll(`[${bB}]:not(.HudPreviewGhost)`)].filter((BB => PB.has(BB.getAttribute(bB)))).map((BB => (0, aB.g)(BB.getBoundingClientRect()))),
              JB = (0, aB.F)(TB);
            return JB ? {
              w: JB.right - JB.left,
              h: JB.bottom - JB.top
            } : null
          },
          GB = BB => !BB || BB.w <= TB && BB.h <= JB,
          vB = oB(1),
          kB = oB(HB.g);
        if (!vB || GB(kB)) return HB.g;
        const cB = (BB, IB, ZB) => IB > BB ? 1 + (ZB - BB) * (HB.g - 1) / (IB - BB) : HB.g;
        let nB = Math.floor(Math.min(HB.g, cB(vB.w, kB.w, TB), cB(vB.h, kB.h, JB)) / ZB + 1e-6) * ZB;
        for (; nB > 1 && !GB(oB(nB));) nB = Math.round(100 * (nB - ZB)) / 100;
        return Math.max(1, nB)
      }))
    }

    function NZ(BB) {
      lI(document, BB, {
        keysAbove: !1
      });
      const IB = parseFloat(getComputedStyle(BB.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        ZB = Number.isFinite(IB) && IB < 0;
      return lI(document, BB, {
        keysAbove: ZB
      }), (0, cZ.d)(BB), ZB
    }

    function gZ(BB) {
      const IB = BB.querySelector(".TouchInventoryKey.ShopKey");
      return null !== IB && "1" === getComputedStyle(IB).getPropertyValue("--touch-shop-above").trim()
    }

    function qZ(BB, IB) {
      let {
        layout: ZB,
        orientation: TB,
        viewport: oB,
        replicaKey: GB,
        joystickFixed: vB,
        busy: kB
      } = IB;
      const [cB, nB] = (0, JB.useState)(null), [hB, zB] = (0, JB.useState)({
        boxes: {},
        pieces: []
      }), [FB, NB] = (0, JB.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [gB, qB] = (0, JB.useState)(!1), [yB, UB] = (0, JB.useState)(!1), [WB, dB] = (0, JB.useState)(!1), CB = (0, JB.useCallback)((BB => {
        UB(BB), BB && dB(!0)
      }), []), QB = ZB.hudLayouts[TB].hudSafe;
      (0, JB.useLayoutEffect)((() => {
        const IB = BB.current.contentDocument;
        IB.open(), IB.write("<!DOCTYPE html><html><head></head><body></body></html>"), IB.close(), nB(IB)
      }), [BB]);
      const sB = (0, JB.useCallback)((() => {
          cB && ((0, nI.B)(cB), zB(zZ(cB)), NB(function(BB, IB) {
            const ZB = xI(BB),
              [TB, JB, oB, GB] = IB ? (0, zI.x)(IB, window.innerWidth, window.innerHeight, ZB) : ZB;
            return {
              top: TB,
              right: JB,
              bottom: oB,
              left: GB
            }
          }(cB, QB)))
        }), [cB, QB]),
        wB = (0, JB.useCallback)((() => {
          cB && qB(NZ(cB))
        }), [cB]),
        OB = (0, JB.useRef)((() => {}));
      return OB.current = () => {
        wB(), kB() || sB()
      }, (0, JB.useLayoutEffect)((() => {
        if (cB) return fI(document, cB, (() => {
          OB.current()
        }), CB)
      }), [cB, CB]), (0, JB.useLayoutEffect)(wB, [wB, oB]), (0, JB.useLayoutEffect)((() => {
        cB && (lI(document, cB, {
          keysAbove: gB
        }), tI(document, cB, ZB, TB, vB), wB(), sB())
      }), [cB, ZB, TB, gB, GB, vB, oB, sB, wB]), (0, JB.useEffect)((() => {
        var BB;
        if (!cB) return;
        const IB = new ResizeObserver((() => {
          kB() || sB()
        }));
        for (const ZB of cB.querySelectorAll(`[${bB}]`)) IB.observe(ZB);
        return null === (BB = cB.fonts) || void 0 === BB || BB.ready.then(sB), () => {
          IB.disconnect()
        }
      }), [cB, sB, kB, GB]), {
        doc: cB,
        boxes: hB.boxes,
        pieces: hB.pieces,
        insets: FB,
        keysAbove: gB,
        ready: yB,
        settled: WB
      }
    }
    const yZ = ["Above", "Below", "Left", "Right"];

    function UZ(BB, IB, ZB, TB, JB) {
      const oB = ZB[BB],
        GB = (oB.left + oB.right) / 2,
        vB = (oB.top + oB.bottom) / 2,
        kB = (7.5 * IB.length + 14) / TB,
        cB = 18 / TB,
        nB = {
          Above: {
            left: GB - kB / 2,
            top: oB.top - cB,
            right: GB + kB / 2,
            bottom: oB.top
          },
          Below: {
            left: GB - kB / 2,
            top: oB.bottom,
            right: GB + kB / 2,
            bottom: oB.bottom + cB
          },
          Left: {
            left: oB.left - kB,
            top: vB - cB / 2,
            right: oB.left,
            bottom: vB + cB / 2
          },
          Right: {
            left: oB.right,
            top: vB - cB / 2,
            right: oB.right + kB,
            bottom: vB + cB / 2
          }
        },
        hB = nZ(ZB, BB),
        zB = {
          left: 0,
          top: 0,
          right: JB.width,
          bottom: JB.height
        };
      return yZ[(0, aB.s)(yZ.map((BB => nB[BB])), hB, {
        bounds: zB
      })]
    }

    function WZ() {
      const [BB, IB] = (0, kI.b)();
      return (0, JB.useMemo)((() => ({
        width: BB,
        height: IB
      })), [BB, IB])
    }

    function dZ(BB) {
      var IB;
      const {
        layout: ZB,
        orientation: oB,
        selected: GB,
        onSelect: vB,
        onMove: cB,
        canMove: nB,
        actionButtons: hB,
        joystickFixed: zB,
        presence: FB,
        keyNames: gB,
        maxHeight: qB,
        fill: yB = !1,
        apiRef: UB
      } = BB, {
        t: WB
      } = (0, TB.G)(), dB = WZ(), QB = (null !== (IB = (0, NB.d)("maxAuraLevel")) && void 0 !== IB ? IB : 0) > 0, sB = ZB.hudLayouts[oB], wB = (0, JB.useRef)(null), OB = (0, JB.useRef)(null), YB = (0, JB.useRef)(null), iB = (0, JB.useRef)(null), MB = (0, JB.useRef)(null), jB = (0, JB.useRef)(null), PB = (0, cI.e)(wB).width, rB = yB ? 1 : PB > 0 ? (0, aB.A)(PB, dB.width, dB.height, qB) : 0, mB = (0, JB.useRef)((() => !1)), uB = (0, JB.useCallback)((() => mB.current()), []), fB = `${hB}:${zB}:${QB}`, {
        doc: lB,
        boxes: AB,
        pieces: tB,
        insets: bB,
        keysAbove: EB,
        ready: DB,
        settled: KB
      } = qZ(YB, {
        layout: ZB,
        orientation: oB,
        viewport: dB,
        replicaKey: fB,
        joystickFixed: zB,
        busy: uB
      }), VB = (0, JB.useCallback)((BB => {
        lB && tI(document, lB, BB, oB, zB)
      }), [lB, oB, zB]), SB = (0, JB.useCallback)((BB => {
        if (!lB || !KB) return null;
        VB(BB);
        const IB = NZ(lB),
          ZB = function(BB, IB) {
            let {
              boxes: ZB,
              pieces: TB,
              pairHome: JB
            } = BB;
            const oB = TB.find((BB => RB.has(BB.id)));
            if (!oB || !JB) return ZB;
            const GB = (0, aB.c)(JB),
              vB = IB(oB.id),
              kB = SI(oB.box) / vB / 2,
              cB = (oB.box.bottom - oB.box.top) / vB / 2;
            return {
              ...ZB,
              inventory: {
                left: GB.x - kB,
                top: GB.y - cB,
                right: GB.x + kB,
                bottom: GB.y + cB
              }
            }
          }(zZ(lB), (IB => (0, HB.x)(BB, oB, IB)[2]));
        return {
          boxes: ZB,
          keysAbove: IB,
          shopAlone: gZ(lB)
        }
      }), [lB, KB, VB, oB]), BI = (0, JB.useRef)(null), II = (0, JB.useRef)(null), ZI = (0, JB.useRef)(ZB);
      ZI.current = ZB;
      const TI = (0, JB.useCallback)((() => {
        null !== BI.current && (cancelAnimationFrame(BI.current), BI.current = null)
      }), []);
      (0, JB.useEffect)((() => TI), [ZB, TI]);
      const JI = (0, JB.useRef)(-1 / 0),
        {
          lockable: oI
        } = BB,
        vI = (0, JB.useCallback)((BB => {
          if (VB(BB), JI.current = performance.now(), !KB || 0 === ZB.hudLayouts[oB].hudLocked.length) return;
          const IB = ZB;
          TI(), BI.current = requestAnimationFrame((() => {
            var ZB;
            if (BI.current = null, ZI.current !== IB) return;
            const TB = (null === (ZB = II.current) || void 0 === ZB ? void 0 : ZB.from) === IB ? II.current.measured : SB(IB);
            TB && (II.current = {
              from: IB,
              measured: TB
            }), VB(TB ? IZ(IB, BB, oB, dB, SB, {
              canKeep: oI,
              passes: 1,
              before: TB
            }) : BB)
          }))
        }), [VB, KB, ZB, oB, dB, SB, oI, TI]),
        kI = kZ({
          preview: (BB, IB) => {
            IB ? vI((0, HB.gb)(ZB, oB, BB, IB)) : (TI(), VB(ZB))
          },
          stageRef: OB,
          ringRef: iB,
          centreLineRef: MB,
          snapCentre: ZB.hudSnapCentre,
          ready: KB,
          measure: BB => {
            const IB = lB && DB ? zZ(lB).boxes[BB] : void 0;
            return IB && (0, aB.k)(IB, dB.width, dB.height) ? IB : null
          },
          k: rB,
          viewport: dB,
          boxes: AB,
          pieces: tB,
          selected: GB,
          insets: bB,
          layout: sB,
          canMove: nB,
          onSelect: vB,
          onMove: (BB, IB, ZB) => {
            TI(), cB(BB, IB, ZB)
          }
        });
      (0, JB.useLayoutEffect)((() => {
        mB.current = kI.busy
      }), [kI.busy]);
      const FI = (0, JB.useRef)([]),
        NI = (0, JB.useRef)(sB.hudElements);
      (0, JB.useEffect)((() => {
        for (const JB of Object.keys(sB.hudElements)) {
          var BB, IB, ZB, TB;
          (null !== (BB = null === (IB = sB.hudElements[JB]) || void 0 === IB ? void 0 : IB[2]) && void 0 !== BB ? BB : 1) > (null !== (ZB = null === (TB = NI.current[JB]) || void 0 === TB ? void 0 : TB[2]) && void 0 !== ZB ? ZB : 1) && nB(JB) && !(0, nI.y)(JB, sB.hudElements[JB]) && FI.current.push(...LB(JB, EB, nB))
        }
        NI.current = sB.hudElements
      }), [sB.hudElements, nB, EB]), (0, JB.useEffect)((() => {
        if (!DB) return;
        const BB = (0, aB.B)(dB.width, dB.height, bB);
        for (const ZB of ((BB, IB, ZB, TB) => {
            const JB = BB => {
              const JB = IB[BB],
                {
                  x: oB,
                  y: GB
                } = JB && TB(BB) ? (0, aB.D)(JB, ZB) : {
                  x: 0,
                  y: 0
                };
              return JB && {
                left: JB.left + oB,
                top: JB.top + GB,
                right: JB.right + oB,
                bottom: JB.bottom + GB
              }
            };
            return BB.flatMap((BB => {
              const oB = IB[BB];
              if ("inventory" !== BB || !oB || oB.right - oB.left <= ZB.right - ZB.left && oB.bottom - oB.top <= ZB.bottom - ZB.top) return [BB];
              const [GB, vB] = [JB("shop"), JB("bag")];
              return GB && vB && !(0, aB.l)(GB, vB, 0) ? ["shop", "bag"].filter(TB) : [BB]
            }))
          })(FI.current.splice(0), AB, BB, nB)) {
          const TB = AB[ZB];
          if (!TB || kI.busy() || !(0, aB.k)(TB, dB.width, dB.height)) continue;
          const JB = (0, aB.D)(TB, BB);
          if (0 !== JB.x || 0 !== JB.y) {
            var IB;
            const [BB, TB] = null !== (IB = sB.hudElements[ZB]) && void 0 !== IB ? IB : [0, 0];
            cB(ZB, BB + JB.x / dB.width, TB + JB.y / dB.height)
          }
        }
      }), [AB, DB]), (0, JB.useImperativeHandle)(UB, (() => ({
        setScale: (BB, IB) => {
          vI((0, HB.gb)(ZB, oB, BB, {
            scale: IB
          }))
        },
        setOpacity: BB => {
          VB({
            ...ZB,
            hudKeyOpacity: BB
          })
        },
        keepLocks: (BB, IB) => (TI(), IZ(BB, IB, oB, dB, SB, {
          canKeep: oI
        })),
        setSafe: BB => {
          const IB = (0, zI.x)(BB, dB.width, dB.height, xI(null !== lB && void 0 !== lB ? lB : document));
          vI((0, HB.lb)(ZB, oB, BB)), jB.current && (jB.current.style.inset = IB.map((BB => BB * rB + "px")).join(" "))
        }
      })), [VB, vI, SB, TI, oI, lB, ZB, oB, dB, rB]);
      const gI = new Set(Object.keys(sB.hudElements).filter((BB => (0, HB.p)(sB.hudElements, BB)))),
        qI = GB ? AB[GB] : void 0,
        yI = GB ? xB(GB, hB, WB, gB) : "",
        UI = (0, PI.f)(dB.width, dB.height),
        WI = GB ? function(BB, IB, ZB, TB) {
          const JB = BB => XB(BB).some((BB => (0, HB.p)(ZB.hudElements, BB) || (0, nI.w)(BB, ZB, TB)));
          if (JB(BB)) return [];
          const oB = BB => {
              var IB, TB;
              return "bag" === BB && 1 !== (null !== (IB = null === (TB = ZB.hudElements.shop) || void 0 === TB ? void 0 : TB[2]) && void 0 !== IB ? IB : 1) || XB(BB).some((BB => void 0 !== ZB.hudElements[BB]))
            },
            GB = eB.get(BB),
            vB = IB.filter((IB => {
              let {
                id: ZB
              } = IB;
              return GB ? GB.has(ZB) && !JB(ZB) : ZB === BB
            })),
            kB = new Set;
          for (const cB of IB) cB.id === BB || null !== GB && void 0 !== GB && GB.has(cB.id) || kB.has(cB.id) || JB(cB.id) || vB.some((BB => {
            let {
              id: IB,
              box: TB
            } = BB;
            return !hI(IB, cB.id, ZB) && (oB(IB) || oB(cB.id)) && (0, aB.l)(TB, cB.box, 2)
          })) && kB.add(cB.id);
          return [...kB]
        }(GB, tB, sB, UI) : [],
        dI = new Set((0, nI.u)(sB.hudElements)),
        CI = (0, nI.J)(sB, (0, nI.H)(FB.rowIcons)).state,
        QI = WI.join(),
        sI = (0, JB.useRef)(BB.onReady);
      sI.current = BB.onReady, (0, JB.useEffect)((() => {
        var BB;
        null === (BB = sI.current) || void 0 === BB || BB.call(sI, KB)
      }), [KB]);
      const wI = (0, JB.useRef)(BB.onMeasured);
      (0, JB.useLayoutEffect)((() => {
        wI.current = BB.onMeasured
      }));
      const OI = (0, JB.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        YI = [hZ(tB), dB.width, dB.height, bB.top, bB.right, bB.bottom, bB.left, DB, fB].join("|");
      (0, JB.useEffect)((() => {
        const BB = QI ? QI.split(",") : [],
          IB = () => {
            var IB;
            null === (IB = wI.current) || void 0 === IB || IB.call(wI, AB, BB, OI.current.caps)
          };
        let ZB;
        const TB = () => {
          const BB = ZI.current;
          if (!lB || BB === OI.current.layout && YI === OI.current.input) return !1;
          const JB = JI.current + 250 - performance.now();
          return BB === OI.current.layout && (JB > 0 || uB()) ? (ZB = setTimeout((() => {
            TB() && IB()
          }), Math.max(JB, 62.5)), !1) : (OI.current = {
            layout: BB,
            input: YI,
            caps: {
              hotbar: DI(lB, MI),
              cluster: FZ(lB, (0, aB.B)(dB.width, dB.height, bB), MI)
            }
          }, !0)
        };
        return TB(), IB(), () => {
          clearTimeout(ZB)
        }
      }), [AB, QI, lB, dB, bB, YI, uB]);
      const iI = BB => ({
        left: BB.left * rB,
        top: BB.top * rB,
        width: (BB.right - BB.left) * rB,
        height: (BB.bottom - BB.top) * rB
      });
      return (0, CB.jsx)("div", {
        ref: wB,
        className: kB()("HudPreviewBox", {
          Fill: yB
        }),
        style: {
          height: dB.height * rB
        },
        children: (0, CB.jsxs)("div", {
          ref: OB,
          className: "HudPreviewStage",
          style: {
            width: dB.width * rB,
            height: dB.height * rB
          },
          children: [(0, CB.jsx)("iframe", {
            ref: YB,
            className: "HudPreviewFrame",
            title: WB("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: dB.width,
              height: dB.height,
              transform: `scale(${rB})`
            }
          }), lB && (0, GI.createPortal)((0, CB.jsx)(aI, {
            presence: FB,
            portraitPhone: UI,
            hidden: gI,
            actionButtons: hB,
            joystickFixed: zB,
            keysAbove: EB,
            auraBar: QB,
            trayState: CI,
            moved: dI
          }), lB.body), (0, CB.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...kI.handlers,
            children: [(0, CB.jsx)("div", {
              ref: jB,
              className: "HudPreviewSafeZone",
              style: {
                top: bB.top * rB,
                right: bB.right * rB,
                bottom: bB.bottom * rB,
                left: bB.left * rB
              }
            }), tB.map(((BB, IB) => {
              let {
                id: ZB,
                box: TB
              } = BB;
              return (0, CB.jsx)("div", {
                className: "HudPreviewHandle",
                style: iI((0, aB.r)(TB, 40 / rB))
              }, `${ZB}:${IB}`)
            })), sB.hudLocked.map((BB => {
              const IB = AB[BB];
              return IB && (0, CB.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: IB.right * rB,
                  top: IB.top * rB
                },
                children: (0, CB.jsx)(pB.d, {
                  name: "lock"
                })
              }, BB)
            })), (0, CB.jsx)("div", {
              ref: MB,
              className: "HudPreviewCentreLine",
              style: {
                left: dB.width / 2 * rB
              }
            }), GB && qI && (0, CB.jsx)("div", {
              ref: iB,
              className: kB()("HudPreviewRing", {
                Fixed: !nB(GB),
                Overlap: WI.length > 0
              }),
              style: iI(qI),
              children: (0, CB.jsx)("span", {
                className: kB()("HudPreviewRingLabel", UZ(GB, yI, AB, rB, dB)),
                children: yI
              })
            })]
          })]
        })
      })
    }

    function CZ(BB, IB) {
      (0, JB.useEffect)((() => {
        var ZB;
        null === (ZB = BB.current) || void 0 === ZB || ZB.toggleAttribute("inert", IB)
      }), [BB, IB])
    }
    const QZ = "hudFullScreen";

    function sZ(BB) {
      let {
        onScale: IB,
        onHidden: ZB,
        onReset: oB,
        locked: GB,
        lockable: vB,
        onLocked: kB,
        onClose: nB,
        ...hB
      } = BB;
      const {
        t: zB
      } = (0, TB.G)(), FB = (0, JB.useRef)(null);
      (0, vI.t)("popup", FB, nB),
      function(BB) {
        const IB = (0, JB.useRef)(BB);
        IB.current = BB, (0, JB.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [QZ]: !0
          }, "");
          let BB = !1;
          const ZB = () => {
            BB = !0, IB.current()
          };
          return window.addEventListener("popstate", ZB), () => {
            var IB;
            window.removeEventListener("popstate", ZB), !BB && null !== (IB = window.history.state) && void 0 !== IB && IB[QZ] && window.history.back()
          }
        }), [])
      }(nB), (0, JB.useEffect)((() => {
        function BB(BB) {
          "Escape" === BB.key && (BB.stopPropagation(), nB())
        }
        return window.addEventListener("keydown", BB, !0), () => {
          window.removeEventListener("keydown", BB, !0)
        }
      }), [nB]);
      const {
        selected: NB
      } = hB, gB = (0, JB.useRef)(null), qB = (0, JB.useRef)(null), [yB, UB] = (0, JB.useState)(!1);
      CZ(qB, !yB);
      const [WB, dB] = (0, JB.useState)(null), [QB, sB] = (0, JB.useState)([]), [wB, OB] = HI(), YB = (0, JB.useRef)(hB.selected);
      YB.current = hB.selected;
      const iB = (0, JB.useRef)({}),
        pB = (0, JB.useCallback)((() => {
          const BB = gB.current;
          BB && dB(function(BB, IB, ZB) {
            var TB;
            const {
              innerWidth: JB,
              innerHeight: oB
            } = window, GB = BB.offsetWidth, vB = BB.offsetHeight, kB = Math.max(bI()[0], 6), cB = [];
            for (const zB of [kB, .2 * oB, .5 * oB - vB / 2, .33 * oB])
              for (const BB of [.5, .3, .7]) cB.push({
                left: Math.max(0, Math.min(JB - GB - 6, Math.max(6, JB * BB - GB / 2))),
                top: zB
              });
            const nB = cB.map((BB => ({
                left: BB.left - 6,
                top: BB.top - 6,
                right: BB.left + GB + 6,
                bottom: BB.top + vB + 6
              }))),
              hB = nZ(IB, ZB);
            return cB[(0, aB.s)(nB, hB, {
              avoid: ZB && null !== (TB = IB[ZB]) && void 0 !== TB ? TB : null
            })]
          }(BB, iB.current, YB.current))
        }), []),
        HB = (0, JB.useCallback)(((BB, IB, ZB) => {
          sB(IB), OB(ZB), iB.current = BB, pB()
        }), [pB, OB]);
      return (0, JB.useLayoutEffect)(pB, [hB.selected, pB]), (0, GI.createPortal)((0, CB.jsxs)("div", {
        ref: FB,
        className: "HudFullScreenEditor",
        children: [(0, CB.jsx)(dZ, {
          ...hB,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: HB,
          onReady: UB,
          lockable: vB
        }), (0, CB.jsxs)("div", {
          ref: gB,
          className: "HudFullScreenToolbar",
          style: null === WB ? void 0 : {
            left: WB.left,
            top: WB.top,
            transform: "none"
          },
          children: [(0, CB.jsx)("div", {
            ref: qB,
            className: "HudFullScreenControls",
            children: (0, CB.jsx)(jI, {
              selected: NB,
              layout: hB.layout.hudLayouts[hB.orientation],
              actionButtons: hB.actionButtons,
              keyNames: hB.keyNames,
              overlaps: QB,
              scaleCaps: wB,
              onScale: IB,
              onHidden: ZB,
              onReset: oB,
              locked: GB,
              lockable: vB,
              onLocked: kB,
              joystickFixed: hB.joystickFixed
            })
          }), (0, CB.jsx)(cB.g, {
            className: "HudFullScreenDone",
            onClick: nB,
            padDefaultFocus: !0,
            children: zB("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const wZ = BB => `${Math.round(100*BB)}%`;

    function OZ(BB) {
      let {
        info: IB,
        tuple: ZB,
        props: JB
      } = BB;
      const {
        t: oB
      } = (0, TB.G)();
      return (0, CB.jsx)(FB.j, {
        name: oB("hudLayout:size"),
        min: HB.i,
        max: HB.g,
        step: MI,
        initValue: ZB[2],
        disabled: JB.locked.has(IB.id),
        selectableMax: JB.scaleCaps[IB.id],
        cappedNote: oB("hudLayout:sizeCapped"),
        format: wZ,
        onChange: BB => {
          JB.onScalePreview(IB.id, BB)
        },
        onChangeComplete: BB => {
          JB.onScale(IB.id, BB)
        }
      })
    }

    function YZ(BB) {
      const {
        t: IB
      } = (0, TB.G)(), {
        present: ZB,
        elements: oB,
        selected: GB,
        onSelect: vB,
        onHidden: cB,
        onReset: nB,
        note: hB,
        actionButtons: zB,
        keyNames: FB,
        sizeBesidePreview: NB,
        locked: gB,
        lockable: qB,
        onLocked: yB
      } = BB, {
        rowIconsOpen: UB,
        onRowIconsOpen: WB
      } = BB, dB = (0, JB.useRef)(null), QB = null !== GB && (UB || !(0, HB.P)(GB));
      return (0, JB.useEffect)((() => {
        var BB;
        const IB = GB ? null === (BB = dB.current) || void 0 === BB ? void 0 : BB.querySelector(`[data-hud-row="${GB}"]`) : null;
        if (!IB) return;
        const ZB = IB.closest(".SettingsMenuRight"),
          TB = performance.now();
        let JB = null;
        const oB = () => {
            clearInterval(kB), null === ZB || void 0 === ZB || ZB.removeEventListener("scroll", vB)
          },
          vB = () => {
            JZ() || oB()
          },
          kB = setInterval((() => {
            const BB = performance.now();
            BB - TB > 1500 ? oB() : JZ() ? JB = null : null === JB ? JB = BB : BB - JB >= 150 && (oB(), function(BB) {
              var IB;
              const ZB = BB.closest(".SettingsMenuRight"),
                TB = null === (IB = BB.closest(".HudLayoutSettings")) || void 0 === IB ? void 0 : IB.querySelector(".HudLayoutPreviewBox");
              if (!ZB || !TB) return;
              const JB = TB.getBoundingClientRect().bottom + 8,
                oB = ZB.getBoundingClientRect().bottom - 8,
                GB = BB.getBoundingClientRect();
              GB.top < JB ? ZB.scrollBy({
                top: GB.top - JB,
                behavior: "smooth"
              }) : GB.bottom > oB && ZB.scrollBy({
                top: Math.min(GB.bottom - oB, GB.top - JB),
                behavior: "smooth"
              })
            }(IB))
          }), 50);
        return null === ZB || void 0 === ZB || ZB.addEventListener("scroll", vB, {
          passive: !0
        }), oB
      }), [GB, QB]), (0, CB.jsx)("div", {
        ref: dB,
        className: "SettingBoxGroup HudElementList",
        children: AB.filter((BB => ZB.has(BB.id) && (UB || !(0, HB.P)(BB.id)))).map((ZB => {
          const TB = ((BB, IB) => {
              var ZB;
              return null !== (ZB = BB[IB]) && void 0 !== ZB ? ZB : HB.k
            })(oB, ZB.id),
            JB = (0, HB.p)(oB, ZB.id),
            dB = ZB.id === GB,
            QB = ZB.scale && !NB,
            sB = hB(ZB.id, dB);
          return (0, CB.jsxs)("div", {
            "data-hud-row": ZB.id,
            className: kB()("SettingBox HudElementRow", {
              Open: dB,
              Hidden: JB,
              Child: void 0 !== ZB.parent,
              Grandchild: mB(ZB.id).length > 1
            }),
            children: [(0, CB.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, CB.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": QB ? dB : void 0,
                onClick: () => {
                  vB(ZB.id)
                },
                children: (0, CB.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [xB(ZB.id, zB, IB, FB), ZB.scale && 1 !== TB[2] && !(dB && QB) && (0, CB.jsxs)(CB.Fragment, {
                    children: [" ", (0, CB.jsx)("span", {
                      className: "HudElementRowSize",
                      children: wZ(TB[2])
                    })]
                  }), QB && (0, CB.jsxs)(CB.Fragment, {
                    children: [" ", (0, CB.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, CB.jsx)(SB, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: ZB.id,
                actionButtons: zB,
                keyNames: FB,
                locked: gB.has(ZB.id),
                lockable: qB(ZB.id),
                onLocked: yB
              }), "menu" === ZB.id && (0, CB.jsx)(BI, {
                className: "HudElementRowIcon",
                open: UB,
                name: xB(ZB.id, zB, IB, FB),
                onToggle: WB
              }), "menu" !== ZB.id && (0, CB.jsx)(KB, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: ZB.id,
                elements: oB,
                actionButtons: zB,
                keyNames: FB,
                onHidden: cB
              }), (0, CB.jsx)(VB, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: gB.has(ZB.id),
                id: ZB.id,
                elements: oB,
                actionButtons: zB,
                keyNames: FB,
                onReset: nB
              })]
            }), dB && QB && (0, CB.jsx)(OZ, {
              info: ZB,
              tuple: TB,
              props: BB
            }), sB && (0, CB.jsx)("div", {
              className: "HudElementNote",
              children: sB
            })]
          }, ZB.id)
        }))
      })
    }

    function iZ(BB) {
      let {
        preview: IB,
        quick: ZB,
        onFullScreen: oB,
        resting: GB,
        onSidePanel: vB
      } = BB;
      const {
        t: kB
      } = (0, TB.G)(), nB = WZ(), hB = (0, JB.useRef)(null), {
        width: zB
      } = (0, cI.e)(hB), FB = Math.floor(nB.width * Math.min(1, IB.maxHeight / nB.height)), NB = zB - FB - 12, gB = NB >= 130, qB = zB > 0;
      (0, JB.useEffect)((() => {
        qB && vB(gB)
      }), [qB, gB, vB]);
      const yB = (0, aB.A)(gB ? FB : zB, nB.width, nB.height, IB.maxHeight),
        UB = GB ? (0, CB.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: nB.height * yB
          }
        }) : (0, CB.jsx)(dZ, {
          ...IB
        }),
        WB = BB => (0, CB.jsxs)(cB.V, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: kB("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: oB,
          children: [(0, CB.jsx)(pB.d, {
            name: "expand"
          }), BB && (0, CB.jsx)("span", {
            children: kB("hudLayout:fullScreen")
          })]
        });
      return (0, CB.jsxs)("div", {
        ref: hB,
        className: "SettingBox HudLayoutPreviewBox",
        children: [zB > 0 && gB && (0, CB.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, CB.jsx)("div", {
            style: {
              width: FB
            },
            children: UB
          }), (0, CB.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, CB.jsx)(jI, {
              selected: IB.selected,
              ...ZB,
              joystickFixed: IB.joystickFixed,
              extra: WB(!IB.selected || NB >= 278)
            })
          })]
        }), zB > 0 && !gB && (0, CB.jsxs)(CB.Fragment, {
          children: [UB, (0, CB.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: WB(!1)
          })]
        })]
      })
    }
    var pZ = ZB(2576),
      aZ = ZB(4597),
      HZ = ZB(2551),
      MZ = ZB(2504);
    const jZ = BB => {
      const IB = zI.p * ("sides" === BB ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(IB / 2))
    };

    function PZ(BB, IB, ZB) {
      const [TB, JB, oB, GB] = BB;
      return "sides" === IB ? [TB, ZB, oB, ZB] : [ZB, JB, ZB, GB]
    }
    const RZ = [null, null, null, null],
      rZ = BB => `${BB}px`;

    function mZ(BB) {
      let {
        safe: IB,
        onPreview: ZB,
        onCommit: oB
      } = BB;
      const {
        t: GB
      } = (0, TB.G)(), vB = (0, zI.x)(null !== IB && void 0 !== IB ? IB : RZ, window.innerWidth, window.innerHeight, xI(document).map(Math.round)), kB = (0, JB.useRef)(null !== IB && void 0 !== IB ? IB : RZ);
      kB.current = null !== IB && void 0 !== IB ? IB : RZ;
      const nB = BB => {
        const IB = Math.min(jZ(BB), "sides" === BB ? Math.max(vB[1], vB[3]) : Math.max(vB[0], vB[2]));
        return (0, CB.jsx)(FB.j, {
          name: GB("sides" === BB ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: jZ(BB),
          step: 2,
          initValue: IB,
          format: rZ,
          onChange: IB => {
            ZB(PZ(kB.current, BB, IB))
          },
          onChangeComplete: TB => {
            if (TB === IB) return void ZB(kB.current);
            const JB = PZ(kB.current, BB, TB);
            kB.current = JB, oB(JB), (0, wB.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: BB
            })
          }
        })
      };
      return (0, CB.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, CB.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, CB.jsx)("div", {
            children: GB("hudLayout:safeZone")
          }), (0, CB.jsx)(cB.V, {
            active: null === IB,
            pressed: null === IB,
            onClick: () => {
              oB(null)
            },
            children: GB("hudLayout:safeZoneAuto")
          })]
        }), nB("sides"), nB("ends")]
      })
    }

    function XZ() {
      const {
        t: BB
      } = (0, TB.G)(), IB = (0, HB.db)(), {
        clientEscMenuOptions: ZB
      } = (0, nB.o)(["clientEscMenuOptions"]), oB = (0, pZ.h)(), GB = IB.hudLayouts[oB], [vB, kB] = (0, JB.useState)(null), {
        rowIconsOpen: hB,
        onRowIconsOpen: zB,
        select: NB
      } = function(BB, IB) {
        const [ZB, TB] = (0, JB.useState)((() => HB.A.some((IB => void 0 !== BB.hudElements[IB] || BB.hudLocked.includes(IB))))), oB = (0, JB.useCallback)((BB => {
          IB(BB), (0, HB.P)(BB) && TB(!0)
        }), [IB]);
        return {
          rowIconsOpen: ZB,
          onRowIconsOpen: TB,
          select: oB
        }
      }(GB, kB), [gB, qB] = (0, JB.useState)([]), [yB, UB] = (0, JB.useState)(null), [WB, dB] = HI(), QB = (0, JB.useCallback)(((BB, IB, ZB) => {
        qB(IB), dB(ZB);
        const TB = Object.keys(BB);
        UB((BB => (null === BB || void 0 === BB ? void 0 : BB.size) === TB.length && TB.every((IB => BB.has(IB))) ? BB : new Set(TB)))
      }), [dB]), {
        gameState: sB
      } = (0, nB.o)(["gameState"]), YB = (0, HZ.i)(), iB = (0, MZ.o)(), [pB] = (0, JB.useState)((() => {
        var BB, IB, ZB, TB;
        return "inGame" === sB ? (0, NI.A)(document, YB, {
          rightOfCamera: null !== (BB = null === (IB = iB.rightOfCamera) || void 0 === IB ? void 0 : IB.icon) && void 0 !== BB ? BB : null,
          leftEnd: null !== (ZB = null === (TB = iB.leftEnd) || void 0 === TB ? void 0 : TB.icon) && void 0 !== ZB ? ZB : null
        }) : NI.e
      })), aB = (0, JB.useRef)(null), MB = (0, JB.useRef)(null), jB = function(BB) {
        const [IB, ZB] = (0, JB.useState)((() => .4 * window.innerHeight));
        return (0, JB.useLayoutEffect)((() => {
          var IB;
          const TB = null === (IB = BB.current) || void 0 === IB ? void 0 : IB.closest(".SettingsMenuRight");
          if (!TB) return;
          const JB = () => {
            const BB = TB.clientHeight < LZ ? .4 : .5;
            ZB(Math.max(80, TB.clientHeight * BB - 24))
          };
          JB();
          const oB = new ResizeObserver(JB);
          return oB.observe(TB), () => {
            oB.disconnect()
          }
        }), [BB]), IB
      }(MB), PB = (0, aZ.t)(ZB.joystickMode), RB = ZB.touchActionButtons, mB = (0, JB.useMemo)((() => (0, NI.w)(pB, RB)), [pB, RB]), XB = (0, JB.useMemo)((() => new Set((0, NI.u)(pB, RB).map((BB => NI.i[BB])))), [pB, RB]);
      (0, JB.useEffect)((() => {
        (0, wB.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [LB, eB] = (0, JB.useState)(!1), [uB, fB] = (0, JB.useState)(!1), lB = (0, JB.useRef)(null);
      CZ(lB, !uB);
      const [bB, DB] = (0, JB.useState)(!1), KB = (0, JB.useCallback)((() => {
        DB(!1)
      }), []), VB = (0, JB.useMemo)((() => new Set(GB.hudLocked)), [GB.hudLocked]), SB = BB => {
        var IB, ZB;
        const TB = (0, HB.n)(),
          JB = BB(TB);
        (0, HB.ab)(null !== (IB = null === (ZB = aB.current) || void 0 === ZB ? void 0 : ZB.keepLocks(TB, JB)) && void 0 !== IB ? IB : JB)
      }, BI = (BB, IB) => {
        SB((ZB => (0, HB.gb)(ZB, oB, BB, IB)))
      }, II = (BB, IB, ZB) => {
        BI(BB, {
          dx: IB,
          dy: ZB
        }), (0, wB.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${BB}`
        })
      }, ZI = (BB, IB) => {
        SB((ZB => (0, HB.jb)(ZB, oB, BB, IB)))
      }, TI = BB => {
        const IB = tB[BB];
        return (IB.move || IB.scale) && ("joystick" !== BB || PB) && !(0, nI.y)(BB, GB.hudElements[BB])
      }, GI = BB => tB[BB].move && ("joystick" !== BB || PB) && !VB.has(BB), vI = new Set(AB.map((BB => BB.id)).filter((BB => {
        const IB = (0, HB.P)(BB) && !pB.rowIcons.includes(BB);
        return null === yB || yB.has(BB) || (0, HB.p)(GB.hudElements, BB) && !IB
      }))), kI = {
        present: vI,
        actionButtons: RB,
        keyNames: mB,
        scaleCaps: WB,
        sizeBesidePreview: LB,
        elements: GB.hudElements,
        selected: vB,
        onSelect: NB,
        rowIconsOpen: hB,
        onRowIconsOpen: zB,
        onScalePreview: (BB, IB) => {
          var ZB;
          null === (ZB = aB.current) || void 0 === ZB || ZB.setScale(BB, IB)
        },
        onScale: (BB, IB) => {
          BI(BB, {
            scale: IB
          }), (0, wB.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${BB}`
          })
        },
        onHidden: (BB, IB) => {
          BI(BB, {
            hidden: IB
          }), (0, wB.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${IB?"hide":"show"}:${BB}`
          })
        },
        onReset: BB => {
          BI(BB, HB.b)
        },
        locked: VB,
        lockable: TI,
        onLocked: ZI,
        note: (IB, ZB) => {
          const TB = ZB && gB.length > 0 ? BB("hudLayout:overlapsNote", {
            names: EB(gB, RB, BB, mB)
          }) : null;
          if (ZB && JI(IB, PB)) return (0, CB.jsxs)(CB.Fragment, {
            children: [TB && (0, CB.jsx)("span", {
              children: TB
            }), (0, CB.jsx)("span", {
              children: BB("hudLayout:floatingJoystickNote")
            }), !LB && (0, CB.jsx)(oI, {})]
          });
          if (TB) return TB;
          const JB = ZB && VB.has(IB) ? BB("hudLayout:lockedNote") : null,
            oB = ZB && XB.has(IB) ? BB("hudLayout:contextSlotNote") : null;
          return JB || oB ? (0, CB.jsxs)(CB.Fragment, {
            children: [JB && (0, CB.jsx)("span", {
              children: JB
            }), oB && (0, CB.jsx)("span", {
              children: oB
            })]
          }) : ZB && "cluster" === IB ? BB("hudLayout:clusterNote") : ZB && "inventory" === IB ? BB("hudLayout:inventoryNote") : ZB && "menu" === IB ? BB("hudLayout:menuNote") : ZB && (0, nI.y)(IB, GB.hudElements[IB]) && GI(IB) ? BB("hudLayout:rowIconNote") : ZB && "arrows" === IB ? BB("hudLayout:arrowsNote") : ZB && "sprint" === IB ? BB("hudLayout:sprintNote") : rB(IB) && (0, HB.p)(GB.hudElements, IB) ? BB("hudLayout:inventoryHiddenNote", {
            name: xB(IB, RB, BB, mB)
          }) : null
        }
      };
      return (0, CB.jsxs)("div", {
        ref: MB,
        className: "HudLayoutSettings",
        children: [(0, CB.jsxs)("div", {
          ref: lB,
          className: "HudLayoutBody",
          children: [(0, CB.jsx)("div", {
            className: "HudLayoutOrientation",
            children: BB("landscape" === oB ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, CB.jsx)(iZ, {
            preview: {
              layout: IB,
              orientation: oB,
              selected: vB,
              onSelect: NB,
              onMove: II,
              canMove: GI,
              actionButtons: RB,
              joystickFixed: PB,
              presence: pB,
              keyNames: mB,
              maxHeight: jB,
              apiRef: aB,
              onMeasured: QB,
              onReady: fB,
              lockable: TI
            },
            quick: {
              layout: GB,
              actionButtons: RB,
              keyNames: mB,
              scaleCaps: WB,
              overlaps: gB,
              onScale: kI.onScale,
              onHidden: kI.onHidden,
              onReset: kI.onReset,
              locked: VB,
              lockable: TI,
              onLocked: ZI
            },
            onFullScreen: () => {
              DB(!0)
            },
            resting: bB,
            onSidePanel: eB
          }), bB && (0, CB.jsx)(sZ, {
            layout: IB,
            orientation: oB,
            selected: vB,
            onSelect: NB,
            onMove: II,
            canMove: GI,
            actionButtons: RB,
            joystickFixed: PB,
            presence: pB,
            keyNames: mB,
            onScale: kI.onScale,
            onHidden: kI.onHidden,
            onReset: kI.onReset,
            locked: VB,
            lockable: TI,
            onLocked: ZI,
            apiRef: aB,
            onClose: KB
          }), (0, CB.jsx)(mZ, {
            safe: GB.hudSafe,
            onCommit: BB => {
              SB((IB => (0, HB.lb)(IB, oB, BB)))
            },
            onPreview: BB => {
              var IB;
              null === (IB = aB.current) || void 0 === IB || IB.setSafe(BB)
            }
          }), (0, CB.jsx)(FB.e, {
            label: BB("hudLayout:snapCentre"),
            checked: IB.hudSnapCentre,
            onClick: BB => {
              (0, HB.Z)(BB)
            },
            circleInfoText: BB("hudLayout:snapCentreInfo")
          }), (0, CB.jsx)(YZ, {
            ...kI
          }), (0, CB.jsx)(FB.h, {
            label: BB("hudLayout:shape"),
            options: HB.D.map((IB => ({
              value: IB,
              label: BB(`hudLayout:shape_${IB}`)
            }))),
            value: IB.hudShape,
            onChange: BB => {
              SB((IB => ({
                ...IB,
                hudShape: BB
              }))), (0, wB.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: BB
              })
            }
          }), (0, CB.jsx)(FB.j, {
            name: BB("hudLayout:opacity"),
            min: HB.d,
            max: 1,
            step: .05,
            initValue: IB.hudKeyOpacity,
            format: BB => `${Math.round(100*BB)}%`,
            circleInfoText: BB("hudLayout:opacityInfo"),
            onChange: BB => {
              var IB;
              null === (IB = aB.current) || void 0 === IB || IB.setOpacity(BB)
            },
            onChangeComplete: BB => {
              (0, HB.W)(BB), (0, wB.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, CB.jsx)(cB.M, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const BB = OB.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await BB.getResult() && (0, HB.S)()
            }()
          },
          children: BB("hudLayout:resetAll")
        })]
      })
    }
    const LZ = 350;
    const eZ = [function() {
      const {
        t: BB
      } = (0, TB.G)(), [IB, ZB] = (0, JB.useState)(!1), oB = (0, JB.useRef)(null);
      return (0, JB.useEffect)((() => {
        var BB;
        IB && (null === (BB = oB.current) || void 0 === BB || BB.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [IB]), (0, CB.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, CB.jsx)(YB.e, {
          ref: oB,
          icon: "arrows-up-down-left-right",
          title: BB("hudLayout:title"),
          sub: BB("hudLayout:entrySub"),
          expanded: IB,
          onClick: () => {
            ZB(!IB)
          }
        }), IB && (0, CB.jsx)(XZ, {})]
      })
    }, function() {
      const {
        t: BB
      } = (0, TB.G)(), {
        joystickMode: IB,
        touchSpeedCurve: ZB,
        autorun: JB,
        jumpLock: oB,
        touchEdgeGuard: GB
      } = (0, nB.o)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, CB.jsxs)(CB.Fragment, {
        children: [(0, CB.jsx)(FB.h, {
          label: BB("settingsMenu:joystick"),
          options: dB.Eb.map((IB => ({
            value: IB,
            label: BB(QB[IB])
          }))),
          value: IB,
          onChange: BB => {
            nB.d.setClientEscMenuOptions({
              joystickMode: BB
            })
          },
          circleInfoText: BB("settingsMenu:joystickInfo")
        }), (0, CB.jsx)(FB.e, {
          label: BB("settingsMenu:preciseWalking"),
          checked: ZB,
          onClick: BB => {
            nB.d.setClientEscMenuOptions({
              touchSpeedCurve: BB
            })
          },
          circleInfoText: BB("settingsMenu:preciseWalkingInfo")
        }), (0, CB.jsx)(FB.e, {
          label: BB("settingsMenu:autoRun"),
          checked: JB,
          onClick: BB => {
            nB.d.setClientEscMenuOptions({
              autorun: BB
            })
          },
          circleInfoText: BB("settingsMenu:autoRunInfo")
        }), (0, CB.jsx)(FB.e, {
          label: BB("settingsMenu:jumpLock"),
          checked: oB,
          onClick: BB => {
            nB.d.setClientEscMenuOptions({
              jumpLock: BB
            })
          },
          circleInfoText: BB("settingsMenu:jumpLockInfo")
        }), (0, CB.jsx)(FB.e, {
          label: BB("touchSettings:stopAtEdges"),
          checked: GB,
          onClick: BB => {
            nB.d.setClientEscMenuOptions({
              touchEdgeGuard: BB
            })
          },
          circleInfoText: BB("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, CB.jsx)(WB.c, {})
    }, function() {
      const {
        t: BB
      } = (0, TB.G)(), {
        clientEscMenuOptions: IB
      } = (0, nB.o)(["clientEscMenuOptions"]);
      return (0, sB.c)() ? (0, CB.jsx)(FB.e, {
        label: BB("settingsMenu:vibration"),
        checked: IB.vibration,
        onClick: BB => {
          nB.d.setClientEscMenuOptions({
            vibration: BB
          })
        },
        circleInfoText: BB("settingsMenu:vibrationInfo")
      }) : null
    }];

    function uZ() {
      return (0, CB.jsx)(CB.Fragment, {
        children: eZ.map(((BB, IB) => (0, CB.jsx)(BB, {}, IB)))
      })
    }
    var fZ = ZB(4553);

    function lZ() {
      const {
        t: BB
      } = (0, TB.G)(), {
        isTouchScreen: IB,
        clientEscMenuOptions: ZB,
        gameState: GB
      } = (0, nB.o)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), vB = (0, NB.d)("ezBridging"), kB = (0, NB.d)("ezTowering"), qB = "inGame" !== GB || !0 === vB, yB = (0, gB.g)(), WB = null !== yB && ("inGame" !== GB || !0 === kB), [, dB] = (0, JB.useReducer)((BB => BB + 1), 0), QB = (0, UB.f)(), [sB, wB] = (0, JB.useState)(fZ.i);
      return (0, CB.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [QB && (0, CB.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, CB.jsx)("div", {
            children: BB("controller:settingsControlsNote")
          }), (0, CB.jsx)(cB.V, {
            onClick: () => {
              nB.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: BB("controller:settingsOpenController")
          })]
        }), (0, hB.isTouchscreen)() && !(0, hB.isMobile)() ? (0, CB.jsx)(CB.Fragment, {
          children: (0, CB.jsx)(FB.e, {
            label: BB("settingsMenu:useTouchControls"),
            checked: sB,
            onClick: BB => {
              (0, fZ.e)(BB), wB(BB)
            }
          })
        }) : null, IB && (0, CB.jsx)(uZ, {}), qB && (0, CB.jsx)(FB.e, {
          label: BB("settingsMenu:ezBridging"),
          checked: ZB.ezBridging,
          onClick: BB => {
            nB.d.setClientEscMenuOptions({
              ezBridging: BB
            })
          },
          circleInfoText: BB("settingsMenu:ezBridgingInfo")
        }), WB && (0, CB.jsx)(FB.e, {
          label: BB("settingsMenu:ezTowering"),
          checked: ZB.ezTowering,
          onClick: BB => {
            nB.d.setClientEscMenuOptions({
              ezTowering: BB
            })
          },
          circleInfoText: BB("jump" === yB ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, CB.jsx)(FB.e, {
          label: BB("settingsMenu:crouchToggle"),
          checked: ZB.crouchIsToggle,
          onClick: BB => {
            nB.d.setClientEscMenuOptions({
              crouchIsToggle: BB
            })
          },
          circleInfoText: BB("settingsMenu:crouchToggleInfo")
        }), (0, CB.jsx)(FB.e, {
          label: BB("settingsMenu:hideUiToggle"),
          checked: ZB.hideUiIsToggle,
          onClick: BB => {
            nB.d.setClientEscMenuOptions({
              hideUiIsToggle: BB
            })
          },
          circleInfoText: BB("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, zB.e)() && (0, CB.jsx)(FB.j, {
          name: BB("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: ZB.touchscreenSensitivity,
          onChange: BB => {
            nB.d.setClientEscMenuOptions({
              touchscreenSensitivity: BB
            })
          }
        }), !(0, hB.isMobile)() && (0, CB.jsx)(FB.j, {
          name: BB("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: ZB.mouseSensitivity,
          onChange: BB => {
            nB.d.setClientEscMenuOptions({
              mouseSensitivity: BB
            })
          }
        }), !(0, hB.isMobile)() && (0, CB.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, CB.jsx)("div", {
            className: "SliderText",
            children: BB("settingsMenu:keyBindings")
          }), oB.h.map((IB => (0, CB.jsx)(AZ, {
            title: BB(IB.name.translationKey, IB.name.params),
            defaultOpen: oB.l.has(IB.id),
            children: IB.actions.map((BB => (0, CB.jsx)(tZ, {
              noaAction: BB,
              forceUpdate: dB,
              clashesWith: IB.clashesWith,
              showPadGlyph: QB
            }, BB)))
          }, IB.name.translationKey))), (0, CB.jsx)(cB.M, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, oB.D)(), dB()
            },
            children: BB("controls:resetBindings")
          })]
        })]
      })
    }

    function AZ(BB) {
      let {
        title: IB,
        defaultOpen: ZB,
        children: TB
      } = BB;
      const [oB, GB] = (0, JB.useState)(ZB);
      return (0, CB.jsxs)("div", {
        className: kB()("ControlsSection", {
          Collapsed: !oB
        }),
        children: [(0, CB.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            GB(!oB)
          },
          children: [(0, CB.jsx)("div", {
            className: "ControlsSectionTitle",
            children: IB
          }), (0, CB.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), oB && (0, CB.jsx)("div", {
          className: "ControlsSectionRows",
          children: TB
        })]
      })
    }

    function tZ(BB) {
      let {
        noaAction: IB,
        forceUpdate: ZB,
        clashesWith: vB,
        showPadGlyph: nB
      } = BB;
      const {
        t: hB
      } = (0, TB.G)(), zB = (0, yB.e)(IB), [FB, NB] = (0, JB.useState)(!1), [gB, UB] = (0, JB.useState)("controls:clickToEnterNewBinding"), [WB, dB] = (0, JB.useState)(null), [QB, sB] = (0, JB.useState)(null), wB = (0, JB.useRef)(null);
      (0, JB.useEffect)((() => {
        FB && wB.current && wB.current.focus()
      }), [FB]);
      const OB = oB.u[IB].filter((BB => GB.h[BB]));
      let YB = null;
      const iB = [],
        pB = vB.flatMap((BB => {
          var IB, ZB;
          return null !== (IB = null === (ZB = oB.h.find((IB => IB.id === BB))) || void 0 === ZB ? void 0 : ZB.actions) && void 0 !== IB ? IB : []
        }));
      for (const TB of pB) {
        if (TB === IB) continue;
        const BB = oB.u[TB];
        for (const IB of BB) OB.includes(IB) && iB.push(hB(oB.y[TB].translationKey, oB.y[TB].params))
      }
      iB.length > 0 && (YB = hB("controls:sharedBindingsWarning") + " ", YB += iB.join(", "));
      const aB = () => {
          NB(!1), dB(null), UB("controls:clickToEnterNewBinding"), sB(null)
        },
        HB = () => "BindingInput_" + IB;
      return (0, CB.jsxs)("div", {
        className: kB()("ControlRow", {
          WarningBorder: null !== YB
        }),
        children: [(0, CB.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, CB.jsxs)("div", {
            className: "ControlName",
            children: [hB(oB.y[IB].translationKey, oB.y[IB].params), nB && zB && (0, CB.jsx)(qB.b, {
              glyph: zB,
              className: "ControlPadGlyph"
            })]
          }), (0, CB.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, CB.jsxs)("div", {
              className: "ControlBindingsList",
              children: [OB.map((BB => (0, CB.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, CB.jsx)("div", {
                  children: (0, oB.n)(BB)
                }), (0, CB.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const TB = (0, oB.A)(IB, BB);
                    TB.isError() ? sB(TB.asError().message) : sB(null), ZB()
                  },
                  children: "\xd7"
                })]
              }, BB))), !FB && (0, CB.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  NB(!0), sB(null)
                },
                children: (0, CB.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), FB && (0, CB.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, CB.jsxs)("div", {
                className: "InputContainer",
                children: [(0, CB.jsx)("div", {
                  className: "InputOverlay",
                  children: WB ? (0, oB.n)(WB) : (0, CB.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: hB(gB)
                  })
                }), (0, CB.jsx)("input", {
                  ref: wB,
                  id: HB(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: BB => {
                    if ("Escape" === BB.code) return aB(), BB.preventDefault(), void BB.stopPropagation();
                    const IB = BB.code;
                    GB.b.includes(IB) ? (sB(null), dB(IB)) : (sB("controls:keyIsReserved"), dB(null)), BB.preventDefault(), BB.stopPropagation()
                  },
                  onMouseDown: BB => {
                    const IB = "Mouse" + (BB.button + 1);
                    document.activeElement && document.activeElement.id === HB() ? GB.b.includes(IB) ? (sB(null), dB(IB)) : (sB("controls:keyIsReserved"), dB(null)) : UB("controls:enterNewBinding"), BB.stopPropagation()
                  },
                  onBlur: () => {
                    UB("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, CB.jsx)(cB.g, {
                onPointerDown: BB => {
                  BB.preventDefault()
                },
                onClick: () => {
                  (0, oB.d)(IB, WB), ZB(), aB()
                },
                className: "ControlBindingAddButton",
                disabled: null === WB,
                children: hB("general:add")
              }), (0, CB.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  aB()
                },
                children: "\xd7"
              })]
            }), QB && (0, CB.jsx)("div", {
              className: "ControlBindingError",
              children: hB(QB)
            })]
          })]
        }), YB && (0, CB.jsx)("div", {
          className: "ControlRowWarning",
          children: YB
        })]
      })
    }
  },
  8991: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(63),
      JB = ZB(1102),
      oB = ZB(1153);
    const GB = (0, TB.forwardRef)((function(BB, IB) {
      let {
        icon: ZB,
        title: TB,
        sub: GB,
        expanded: vB,
        onClick: kB
      } = BB;
      return (0, oB.jsxs)("button", {
        ref: IB,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": vB,
        onClick: kB,
        children: [(0, oB.jsx)(JB.d, {
          name: ZB,
          className: "FeaturedSettingsEntryIcon"
        }), (0, oB.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, oB.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: TB
          }), (0, oB.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: GB
          })]
        }), (0, oB.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  8792: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => yB,
      f: () => qB,
      g: () => nB,
      j: () => UB,
      m: () => WB,
      q: () => zB
    });
    var TB = ZB(1738),
      JB = ZB(1814);
    const oB = BB => BB >= 56320 && BB <= 57343,
      GB = BB => BB >= 55296 && BB <= 56319,
      vB = (BB, IB) => IB >= 2 && oB(BB.charCodeAt(IB - 1)) && GB(BB.charCodeAt(IB - 2)) ? IB - 2 : Math.max(0, IB - 1),
      kB = (BB, IB) => {
        let ZB;
        var TB, JB;
        return ZB = BB.start !== BB.end ? IB < 0 ? BB.start : BB.end : IB < 0 ? vB(BB.value, BB.start) : (TB = BB.value, (JB = BB.start) + 1 < TB.length && GB(TB.charCodeAt(JB)) && oB(TB.charCodeAt(JB + 1)) ? JB + 2 : Math.min(TB.length, JB + 1)), {
          value: BB.value,
          start: ZB,
          end: ZB
        }
      },
      cB = ["text", "search", "url", "email", "tel", "password", "number"],
      nB = BB => !(!(0, JB.d)(BB) || BB.isContentEditable || BB.hasAttribute("data-pad-no-osk")) && (BB instanceof HTMLTextAreaElement || BB instanceof HTMLInputElement && cB.includes(BB.type)),
      hB = BB => null !== BB.selectionStart,
      zB = BB => {
        var IB, ZB;
        const {
          value: TB
        } = BB;
        return {
          value: TB,
          start: null !== (IB = BB.selectionStart) && void 0 !== IB ? IB : TB.length,
          end: null !== (ZB = BB.selectionEnd) && void 0 !== ZB ? ZB : TB.length
        }
      },
      FB = (BB, IB, ZB) => {
        if (BB.readOnly) return;
        const JB = BB instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(JB, "value").set.call(BB, IB.value), hB(BB) && BB.setSelectionRange(IB.start, IB.end), (0, TB.h)(BB, new InputEvent("input", {
          bubbles: !0,
          inputType: ZB
        }))
      };
    let NB = !1;
    const gB = (BB, IB) => !!document.execCommand(BB, !1, IB) || (NB || (NB = !0, console.warn(`execCommand("${BB}") failed; the on-screen keyboard is setting the value directly`)), !1),
      qB = (BB, IB) => {
        gB("insertText", IB) || FB(BB, function(BB, IB) {
          let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const TB = BB.value.slice(0, BB.start),
            JB = BB.value.slice(BB.end);
          let oB = ZB < 0 ? IB.length : Math.max(0, ZB - TB.length - JB.length);
          oB > 0 && oB < IB.length && GB(IB.charCodeAt(oB - 1)) && oB--;
          const vB = IB.slice(0, oB),
            kB = TB.length + vB.length;
          return {
            value: TB + vB + JB,
            start: kB,
            end: kB
          }
        }(zB(BB), IB, BB.maxLength), "insertText")
      },
      yB = BB => {
        gB("delete") || FB(BB, (BB => {
          const IB = BB.start === BB.end ? vB(BB.value, BB.start) : BB.start;
          return {
            value: BB.value.slice(0, IB) + BB.value.slice(BB.end),
            start: IB,
            end: IB
          }
        })(zB(BB)), "deleteContentBackward")
      },
      UB = (BB, IB) => {
        if (!hB(BB)) return;
        const ZB = kB(zB(BB), IB);
        BB.setSelectionRange(ZB.start, ZB.end)
      },
      WB = BB => {
        hB(BB) && 0 === BB.selectionStart && 0 === BB.selectionEnd && BB.setSelectionRange(BB.value.length, BB.value.length)
      }
  },
  8946: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vB
    });
    var TB = ZB(20),
      JB = ZB(2220),
      oB = ZB(1403),
      GB = ZB(1454);
    const vB = async () => {
      if ((0, GB.j)()) {
        if (!0 !== await oB.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== TB.d.get("gameState")) return
      }(0, JB.g)()
    }
  },
  8951: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => kB,
      e: () => oB,
      h: () => GB,
      k: () => JB,
      o: () => vB
    });
    var TB = ZB(2038);
    const JB = "controllerPadShopOpen",
      oB = BB => TB.i.includes(BB),
      GB = BB => Object.values(BB).some((BB => !1 !== BB.canBuy && !BB.isRewardedAd)),
      vB = (BB, IB, ZB) => {
        var TB, JB, GB, vB;
        const kB = BB.filter((BB => !oB(BB))),
          cB = null !== IB && BB.includes(IB) ? IB : null;
        return null !== cB && !oB(cB) && ZB(cB) ? cB : null !== (TB = null !== (JB = null !== (GB = null !== (vB = kB.find(ZB)) && void 0 !== vB ? vB : kB[0]) && void 0 !== GB ? GB : cB) && void 0 !== JB ? JB : BB[0]) && void 0 !== TB ? TB : null
      },
      kB = BB => BB.userInput || BB.isRewardedAd || "boolean" === typeof BB.isSelected ? null : JSON.stringify([BB.image, BB.cost, BB.currency, BB.amount, BB.customTitle, BB.buyButtonText, BB.description, BB.canBuy])
  },
  8976: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB,
      f: () => nB
    });
    var TB = ZB(63),
      JB = ZB(1507),
      oB = ZB(2089),
      GB = ZB(1469),
      vB = ZB(1492),
      kB = ZB(1153);
    const cB = () => {
        const BB = (0, GB.o)();
        if ((0, TB.useEffect)((() => {
            (0, GB.i)()
          }), []), !BB) return null;
        const {
          ControllerCategory: IB
        } = BB;
        return (0, kB.jsx)(vB.e, {
          children: (0, kB.jsx)(IB, {})
        })
      },
      nB = () => {
        var BB;
        const IB = (0, GB.o)(),
          [, ZB] = (0, TB.useReducer)((BB => BB + 1), 0);
        return (0, JB.d)(oB.e, ZB), null !== (BB = null === IB || void 0 === IB ? void 0 : IB.hasActivePad()) && void 0 !== BB && BB
      }
  },
  8797: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB,
      e: () => cB,
      i: () => gB,
      m: () => hB,
      o: () => NB,
      r: () => oB,
      u: () => FB,
      x: () => GB,
      y: () => zB
    });
    const TB = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      JB = (BB, IB) => {
        if ("function" === typeof BB.checkVisibility) return !BB.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: IB,
          checkOpacity: IB
        });
        const {
          visibility: ZB
        } = getComputedStyle(BB);
        if ("hidden" === ZB || "collapse" === ZB) return !0;
        if (!IB) return !1;
        for (let TB = BB; TB; TB = TB.parentElement)
          if ("0" === getComputedStyle(TB).opacity) return !0;
        return !1
      },
      oB = BB => {
        if (!BB.isConnected || JB(BB, !0)) return !1;
        const IB = BB.getBoundingClientRect();
        return IB.width > 0 && IB.height > 0
      },
      GB = BB => !!BB.matches(":disabled, [aria-disabled='true']") || "button" === BB.getAttribute("role") && "-1" === BB.getAttribute("tabindex"),
      vB = BB => {
        var IB;
        if (BB.closest("[data-pad-ignore]")) return !0;
        return !!(null === (IB = BB.parentElement) || void 0 === IB ? void 0 : IB.closest("[data-pad-focusable]"))
      },
      kB = BB => {
        const IB = BB.querySelectorAll(TB);
        return BB.matches(TB) ? [BB, ...IB] : IB
      },
      cB = BB => {
        const IB = [];
        for (const ZB of kB(BB)) !vB(ZB) && oB(ZB) && IB.push(ZB);
        return IB
      },
      nB = new WeakMap,
      hB = BB => {
        const IB = nB.get(BB);
        if (IB && zB(IB, BB)) return !0;
        for (const ZB of kB(BB))
          if (!vB(ZB) && oB(ZB)) return nB.set(BB, ZB), !0;
        return nB.delete(BB), !1
      },
      zB = (BB, IB) => IB.contains(BB) && BB.matches(TB) && !vB(BB) && oB(BB),
      FB = (BB, IB) => zB(BB, IB) && !GB(BB),
      NB = BB => {
        for (const IB of BB.querySelectorAll("[data-pad-initial-area]"))
          if (!JB(IB, !1)) return !0;
        return !1
      },
      gB = BB => {
        const IB = IB => {
          let ZB = 0;
          for (let TB = IB.parentElement; TB && TB !== BB; TB = TB.parentElement) ZB++;
          return ZB
        };
        return [...BB.querySelectorAll("[data-pad-initial-area]")].filter(oB).sort(((BB, ZB) => IB(ZB) - IB(BB)))
      }
  },
  8779: (BB, IB, ZB) => {
    ZB.d(IB, {
      B: () => FB,
      E: () => wB,
      H: () => cB,
      K: () => YB,
      L: () => QB,
      N: () => sB,
      R: () => qB,
      T: () => kB,
      V: () => nB,
      e: () => yB,
      h: () => OB,
      j: () => CB,
      n: () => dB,
      q: () => NB,
      u: () => gB,
      x: () => zB
    });
    var TB = ZB(24),
      JB = ZB(1738),
      oB = ZB(8785),
      GB = ZB(8792),
      vB = ZB(8797);
    const kB = BB => (0, GB.g)(BB),
      cB = BB => {
        const IB = BB.getBoundingClientRect();
        return {
          x: IB.left + IB.width / 2,
          y: IB.top + IB.height / 2
        }
      },
      nB = (BB, IB, ZB) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: BB.x,
        clientY: BB.y,
        screenX: BB.x,
        screenY: BB.y,
        button: IB,
        buttons: ZB,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      hB = (BB, IB) => {
        (0, JB.h)(BB, IB)
      },
      zB = function(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const TB = 0 === ZB ? 1 : 2;
        hB(BB, new PointerEvent("pointerdown", nB(IB, ZB, TB))), hB(BB, new MouseEvent("mousedown", nB(IB, ZB, TB)))
      },
      FB = function(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        hB(BB, new PointerEvent("pointerup", nB(IB, ZB, 0))), hB(BB, new MouseEvent("mouseup", nB(IB, ZB, 0)))
      },
      NB = function(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        zB(BB, IB, ZB), FB(BB, IB, ZB), hB(BB, 0 === ZB ? new MouseEvent("click", nB(IB, 0, 0)) : new MouseEvent("contextmenu", nB(IB, 2, 0)))
      },
      gB = function(BB, IB, ZB) {
        let {
          leaveBelow: TB = null,
          enterBelow: JB = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (BB !== IB) {
          if (null !== BB && void 0 !== BB && BB.isConnected) {
            const JB = {
              ...nB(ZB, 0, 0),
              relatedTarget: IB
            };
            hB(BB, new PointerEvent("pointerout", JB)), hB(BB, new MouseEvent("mouseout", JB));
            const oB = BB => !!IB && BB.contains(IB) || !!TB && BB.contains(TB);
            for (let IB = BB; IB && !oB(IB); IB = IB.parentElement) hB(IB, new PointerEvent("pointerleave", {
              ...JB,
              bubbles: !1
            })), hB(IB, new MouseEvent("mouseleave", {
              ...JB,
              bubbles: !1
            }))
          }
          if (IB) {
            const TB = {
              ...nB(ZB, 0, 0),
              relatedTarget: BB
            };
            hB(IB, new PointerEvent("pointerover", TB)), hB(IB, new MouseEvent("mouseover", TB));
            const oB = [],
              GB = IB => !(null === BB || void 0 === BB || !BB.isConnected) && IB.contains(BB) || !!JB && IB.contains(JB);
            for (let BB = IB; BB && !GB(BB); BB = BB.parentElement) oB.push(BB);
            for (const BB of oB.reverse()) hB(BB, new PointerEvent("pointerenter", {
              ...TB,
              bubbles: !1
            })), hB(BB, new MouseEvent("mouseenter", {
              ...TB,
              bubbles: !1
            }));
            hB(IB, new PointerEvent("pointermove", nB(ZB, 0, 0))), hB(IB, new MouseEvent("mousemove", nB(ZB, 0, 0)))
          }
        } else IB && (hB(IB, new PointerEvent("pointermove", nB(ZB, 0, 0))), hB(IB, new MouseEvent("mousemove", nB(ZB, 0, 0))))
      },
      qB = BB => {
        TB.l.Gq(oB.d, BB)
      },
      yB = BB => {
        if (kB(BB)) return void qB(BB);
        const IB = BB.hasAttribute("data-pad-focusable") ? BB.querySelector("a[href]") : null,
          ZB = null !== IB && void 0 !== IB ? IB : BB;
        NB(ZB, cB(ZB))
      },
      UB = ".Dropdown-root.is-open",
      WB = BB => {
        const IB = BB.querySelector(".Dropdown-control");
        return yB(IB), IB
      },
      dB = BB => {
        var IB;
        const ZB = null !== (IB = BB.closest(UB)) && void 0 !== IB ? IB : BB.querySelector(UB);
        return ZB ? WB(ZB) : null
      },
      CB = BB => {
        for (const IB of document.querySelectorAll(UB)) IB.contains(BB) || WB(IB)
      },
      QB = BB => null !== BB.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      sB = BB => {
        const IB = BB ? document.elementFromPoint(BB.x, BB.y) : null;
        return !(null === IB || void 0 === IB || !IB.closest("[data-pad-repeat]"))
      },
      wB = BB => {
        var IB;
        return null !== (IB = [...BB.querySelectorAll("[data-pad-back]")].find(vB.r)) && void 0 !== IB ? IB : null
      },
      OB = BB => {
        const IB = wB(BB);
        return !!IB && (yB(IB), !0)
      },
      YB = BB => {
        var IB, ZB, TB, JB;
        return null !== (IB = null !== (ZB = null !== (TB = BB.getAttribute("data-pad-key")) && void 0 !== TB ? TB : BB.getAttribute("href")) && void 0 !== ZB ? ZB : null === (JB = BB.querySelector("a[href]")) || void 0 === JB ? void 0 : JB.getAttribute("href")) && void 0 !== IB ? IB : null
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);