export const id = 156;
export const ids = [156];
export const modules = {
  9076: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS
    });
    var tS = gS(24),
      bS = gS(1281),
      XS = gS(5148),
      xS = gS(1181);

    function NS(SS) {
      let {
        note: HS
      } = SS;
      const {
        t: gS
      } = (0, bS.F)(), {
        clientEscMenuOptions: NS
      } = (0, tS.m)(["clientEscMenuOptions"]);
      return (0, xS.jsx)(XS.d, {
        label: gS("touchSettings:actionButtons"),
        checked: NS.touchActionButtons,
        onClick: SS => {
          tS.b.setClientEscMenuOptions({
            touchActionButtons: SS
          })
        },
        circleInfoText: gS("touchSettings:actionButtonsInfo"),
        note: HS
      })
    }
  },
  9063: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => Vg,
      f: () => yg
    });
    var tS = gS(1281),
      bS = gS(64),
      XS = gS(2111),
      xS = gS(2115),
      NS = gS(1121),
      qS = gS.n(NS),
      uS = gS(1528),
      IS = gS(24),
      fS = gS(104),
      kS = gS(118),
      aS = gS(5148),
      KS = gS(2537),
      jS = gS(307),
      GS = gS(2118),
      CS = gS(2122),
      nS = gS(9067),
      PS = gS(9076),
      QS = gS(369),
      DS = gS(1181);
    const wS = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var hS = gS(9079);
    var ZS = gS(1562),
      JS = gS(1435),
      OS = gS(9082),
      dS = gS(1477),
      cS = gS(1127),
      vS = gS(2573);
    const ES = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(vS.w.map((SS => [SS, "menu"])))
      },
      LS = SS => vS.r.filter((HS => ES[HS] === SS)),
      YS = new Set(LS("cluster")),
      AS = ["cluster"],
      yS = [...AS, ...vS.r.filter((SS => !AS.includes(SS) && !ES[SS]))],
      VS = yS.flatMap((SS => [SS, ...LS(SS)])).map((SS => ({
        id: SS,
        label: `hudLayout:${SS}`,
        ...vS.p[SS],
        parent: ES[SS]
      }))),
      iS = Object.fromEntries(VS.map((SS => [SS.id, SS]))),
      WS = "data-hud-el";

    function zS(SS, HS, gS, tS) {
      const bS = gS(function(SS, HS) {
          return "attack" !== SS || HS ? iS[SS].label : "hudLayout:attackContext"
        }(SS, HS)),
        XS = tS[SS];
      return XS ? gS("hudLayout:slotWithKey", {
        slot: bS,
        key: XS
      }) : bS
    }

    function US(SS, HS, gS, tS) {
      return SS.map((SS => zS(SS, HS, gS, tS))).join(", ")
    }

    function pS(SS) {
      let {
        className: HS,
        keepPlace: gS
      } = SS;
      return gS ? (0, DS.jsx)("div", {
        className: qS()(HS, "Placeholder")
      }) : null
    }

    function sS(SS) {
      let {
        id: HS,
        elements: gS,
        actionButtons: bS,
        keyNames: XS,
        className: xS,
        keepPlace: NS,
        onHidden: qS
      } = SS;
      const {
        t: IS
      } = (0, tS.F)();
      if (!iS[HS].hide) return (0, DS.jsx)(pS, {
        className: xS,
        keepPlace: NS
      });
      const fS = (0, vS.m)(gS, HS);
      return (0, DS.jsx)(uS.P, {
        className: xS,
        ariaLabel: IS(fS ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: zS(HS, bS, IS, XS)
        }),
        pressed: !fS,
        onClick: () => {
          qS(HS, !fS)
        },
        children: (0, DS.jsx)(cS.d, {
          name: fS ? "eye-slash" : "eye"
        })
      })
    }

    function BS(SS) {
      var HS;
      let {
        id: gS,
        elements: bS,
        actionButtons: XS,
        keyNames: xS,
        className: NS,
        keepPlace: qS,
        onlyWhenMoved: IS,
        locked: fS,
        onReset: kS
      } = SS;
      const {
        t: aS
      } = (0, tS.F)(), KS = iS[gS], jS = (0, vS.D)(null !== (HS = bS[gS]) && void 0 !== HS ? HS : vS.g);
      return !KS.move && !KS.scale || IS && jS ? (0, DS.jsx)(pS, {
        className: NS,
        keepPlace: qS
      }) : (0, DS.jsx)(uS.P, {
        className: NS,
        disabled: jS || fS,
        ariaLabel: aS("hudLayout:resetElement", {
          name: zS(gS, XS, aS, xS)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: gS
        },
        onClick: SS => {
          IS && TS(SS.currentTarget), kS(gS)
        },
        children: (0, DS.jsx)(cS.d, {
          name: "rotate-left"
        })
      })
    }

    function MS(SS) {
      let {
        id: HS,
        actionButtons: gS,
        keyNames: bS,
        className: XS,
        keepPlace: xS,
        locked: NS,
        lockable: qS,
        onLocked: IS
      } = SS;
      const {
        t: fS
      } = (0, tS.F)();
      return qS || NS ? (0, DS.jsx)(uS.P, {
        className: XS,
        ariaLabel: fS(NS ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: zS(HS, gS, fS, bS)
        }),
        pressed: NS,
        active: NS,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${NS?"unlock":"lock"}:${HS}`
        },
        onClick: () => {
          IS(HS, !NS)
        },
        children: (0, DS.jsx)(cS.d, {
          name: NS ? "lock" : "lock-open"
        })
      }) : (0, DS.jsx)(pS, {
        className: XS,
        keepPlace: xS
      })
    }

    function FS(SS) {
      let {
        className: HS,
        open: gS,
        name: bS,
        onToggle: XS
      } = SS;
      const {
        t: xS
      } = (0, tS.F)();
      return (0, DS.jsx)(uS.P, {
        className: HS,
        ariaLabel: xS(gS ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: bS
        }),
        pressed: gS,
        analyticsClick: {
          id: "hud_layout.children",
          value: gS ? "close" : "open"
        },
        onClick: () => {
          XS(!gS)
        },
        children: (0, DS.jsx)(cS.d, {
          name: gS ? "angle-up" : "angle-down"
        })
      })
    }

    function RS(SS, HS) {
      var gS;
      SS.contains(document.activeElement) && HS.focus({
        preventScroll: !0
      }), null === (gS = (0, dS.d)()) || void 0 === gS || gS.handOverPadFocus(SS, HS)
    }

    function TS(SS) {
      const HS = SS.closest("[data-hud-row]"),
        gS = null === HS || void 0 === HS ? void 0 : HS.querySelector(".HudElementRowName");
      return !(!HS || !gS) && (RS(HS, gS), !0)
    }
    const oS = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function lS(SS, HS) {
      return "joystick" === SS && !HS
    }

    function mS() {
      const {
        t: SS
      } = (0, tS.F)();
      return (0, DS.jsx)(uS.P, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: SS => {
          const HS = SS.currentTarget;
          if (!TS(HS)) {
            const SS = function(SS) {
              var HS, gS;
              const tS = [SS.previousElementSibling, SS.nextElementSibling].find((SS => SS instanceof HTMLElement && SS.matches(oS)));
              return null !== (HS = null !== tS && void 0 !== tS ? tS : null === (gS = SS.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === gS ? void 0 : gS.querySelector(`:is(${oS}):not(.HudFixJoystickButton)`)) && void 0 !== HS ? HS : null
            }(HS);
            SS && RS(HS, SS)
          }
          IS.b.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: SS("hudLayout:fixJoystick")
      })
    }
    var eS = gS(77),
      rS = gS(1359),
      SH = gS(3283),
      HH = gS(2890),
      gH = gS(9088),
      tH = gS(2581),
      bH = gS(2603),
      XH = gS(3320);
    const xH = ["J", "C", "A", "P", "U", "X", "G"],
      NH = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: vS.w,
        pinnedIcon: null
      });

    function qH(SS, HS) {
      SS.replaceChildren(...[...HS.childNodes].map((SS => SS.cloneNode(!0))))
    }
    const uH = SS => ({
      [WS]: SS
    });

    function IH(SS) {
      let {
        id: HS,
        slot: gS,
        icon: tS,
        label: XS,
        hidden: xS,
        className: NS,
        face: uS
      } = SS;
      const IS = (0, bS.useRef)(null);
      return (0, bS.useLayoutEffect)((() => {
        uS && IS.current && qH(IS.current, uS)
      }), [uS]), (0, DS.jsxs)("div", {
        className: qS()("TouchKeyHit", `TouchSlot${gS}`, NS, {
          HudPreviewGhost: xS.has(HS)
        }),
        ...uH(HS),
        children: [uS && (0, DS.jsx)("div", {
          ref: IS,
          className: qS()("TouchKey", {
            Labelled: uS.classList.contains("Labelled")
          })
        }), !uS && (0, DS.jsxs)("div", {
          className: qS()("TouchKey", {
            Labelled: void 0 !== XS
          }),
          children: [tS && (0, DS.jsx)(cS.d, {
            name: tS
          }), void 0 !== XS && (0, DS.jsx)("span", {
            className: "TouchKeyLabel",
            children: XS
          })]
        })]
      })
    }

    function fH(SS) {
      let {
        item: HS,
        selected: gS
      } = SS;
      const tS = (0, bS.useRef)(null);
      return (0, bS.useLayoutEffect)((() => {
        tS.current && qH(tS.current, HS)
      }), [HS]), (0, DS.jsx)("div", {
        ref: tS,
        className: qS()("InvenItem", {
          Selected: gS
        })
      })
    }
    const kH = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      aH = SS => void 0 === SS ? {} : {
        style: {
          "--parked": SS
        }
      };

    function KH(SS) {
      let {
        id: HS,
        hidden: gS,
        parked: tS,
        unslotted: bS = !1
      } = SS;
      return (0, DS.jsx)("div", {
        className: qS()("TopRightIcon", bH.n[HS], {
          HudPreviewGhost: gS.has(HS),
          [tH.b]: void 0 !== tS,
          [tH.f]: bS
        }),
        ...aH(tS),
        children: (0, DS.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...uH(HS),
          children: (0, DS.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, DS.jsx)(cS.d, {
              name: kH[HS]
            })
          })
        })
      })
    }

    function jH(SS) {
      let {
        portraitPhone: HS,
        icons: gS,
        pinnedIcon: tS,
        hidden: XS,
        moved: xS,
        trayState: NS
      } = SS;
      const uS = HS ? (0, tH.F)(gS) : [],
        IS = gS.filter((SS => "settings" === SS)),
        fS = gS.filter((SS => "settings" !== SS && !uS.includes(SS))).reverse(),
        kS = uS.length > 0 && "gone" === NS,
        aS = [...IS, ...kS ? ["tray"] : [], ...fS].filter((SS => "tray" === SS || XS.has(SS) && !xS.has(SS))),
        KS = SS => {
          const HS = aS.indexOf(SS);
          return HS < 0 ? void 0 : HS
        },
        jS = (SS, HS) => (0, DS.jsx)(KH, {
          id: SS,
          hidden: XS,
          parked: HS ? KS(SS) : void 0,
          unslotted: HS && XS.has(SS) && xS.has(SS)
        }, SS);
      return (0, DS.jsxs)("div", {
        className: qS()("TopRightIcons TouchInGame", {
          Column: HS
        }),
        children: [IS.map((SS => jS(SS, !0))), uS.length > 0 && (0, DS.jsxs)("div", {
          className: qS()("TopRightIcon TopRightTrayToggle Open", {
            [tH.b]: kS
          }),
          ...aH(KS("tray")),
          children: [(0, DS.jsx)("div", {
            className: qS()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== NS
            }),
            children: (0, DS.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, DS.jsx)(cS.d, {
                name: "ellipsis"
              })
            })
          }), (0, DS.jsx)("div", {
            className: "TopRightTray",
            children: uS.map((SS => jS(SS, !1)))
          })]
        }), fS.map((SS => (0, DS.jsxs)(bS.Fragment, {
          children: ["perspective" === SS && null !== tS && (0, DS.jsx)("div", {
            className: "TopRightIcon",
            children: (0, DS.jsx)("div", {
              className: "UiItemIcon SmallTextBold",
              children: (0, DS.jsx)("div", {
                className: "ScaleOnHover",
                children: (0, DS.jsx)(cS.d, {
                  name: tS
                })
              })
            })
          }), jS(SS, !0)]
        }, SS)))]
      })
    }

    function GH(SS) {
      let {
        next: HS,
        hidden: gS
      } = SS;
      return (0, DS.jsx)("div", {
        className: qS()("HotBarArrow", HS ? "Next" : "Previous", {
          HudPreviewGhost: gS
        }),
        ...uH("arrows"),
        children: (0, DS.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, DS.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, DS.jsx)(cS.d, {
              name: HS ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function CH() {
      return (0, DS.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, DS.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, DS.jsx)("div", {
            className: "SocialBar",
            children: (0, DS.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, DS.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, DS.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, DS.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, DS.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, DS.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, DS.jsx)(cS.d, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, DS.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, DS.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, DS.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, DS.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, DS.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, DS.jsx)(cS.d, {
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
    const nH = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      PH = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      QH = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      DH = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function wH(SS) {
      let {
        presence: HS,
        portraitPhone: gS,
        hidden: bS,
        actionButtons: XS,
        joystickFixed: xS,
        keysAbove: NS,
        auraBar: uS,
        trayState: IS,
        moved: kS
      } = SS;
      const {
        t: aS
      } = (0, tS.F)(), {
        faces: KS,
        items: jS
      } = HS, GS = SS => ({
        HudPreviewGhost: bS.has(SS)
      });
      return (0, DS.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, DS.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, DS.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, DS.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, DS.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, DS.jsx)("div", {
              className: "InGameHeaderGameName",
              children: aS("hudLayout:previewGameName")
            })]
          })
        }), (0, DS.jsx)("div", {
          className: "TopLeftElements",
          children: (0, DS.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, DS.jsxs)("div", {
              className: "Chat",
              children: [(0, DS.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [aS("hudLayout:previewChatLine"), aS("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), aS("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((SS => (0, DS.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, DS.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, DS.jsx)("div", {
                      className: "IndividualText",
                      children: SS
                    })
                  })
                }, SS)))
              }), (0, DS.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: qS()("ChatIconWrapper SmallTextLight", GS("chat")),
                ...uH("chat"),
                children: (0, DS.jsx)(cS.d, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, DS.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, DS.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, DS.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, DS.jsx)("div", {
                className: "TopRightIconsContainer",
                ...uH("menu"),
                children: (0, DS.jsx)(jH, {
                  portraitPhone: gS,
                  icons: HS.rowIcons,
                  pinnedIcon: HS.pinnedIcon,
                  hidden: bS,
                  trayState: IS,
                  moved: kS
                })
              })
            }), fS.featureFlags.useSocialFeatures && (0, DS.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, DS.jsx)(CH, {})
            })]
          })
        }), (0, DS.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, DS.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, DS.jsxs)("div", {
            className: "TouchInteractKey",
            ...uH("interact"),
            children: [(0, DS.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, DS.jsx)(cS.d, {
                name: "hand-back-point-up"
              })
            }), (0, DS.jsx)("div", {
              children: aS("hudLayout:previewInteract")
            })]
          })
        }), (0, DS.jsx)("div", {
          className: "BottomCentre",
          children: (0, DS.jsxs)("div", {
            className: "BottomElements",
            children: [(0, DS.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, DS.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, DS.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...uH("hotbar"),
                children: (0, DS.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, DS.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, DS.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, DS.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, DS.jsx)(cS.d, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), uS && (0, DS.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, DS.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, DS.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, XH.g)("glint"),
                    alt: ""
                  }), (0, DS.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, DS.jsx)("div", {
                  className: "AuraBar",
                  children: (0, DS.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, DS.jsx)("div", {
                className: "HotBarRow",
                children: (0, DS.jsx)("div", {
                  className: qS()("HotBarContainer Touch", {
                    KeysAbove: NS
                  }),
                  children: (0, DS.jsxs)("div", {
                    className: "HotBar",
                    ...uH("hotbar"),
                    children: [(0, DS.jsxs)("div", {
                      className: qS()("TouchInventoryKeys", {
                        NoAuraBar: !uS
                      }),
                      children: [(0, DS.jsx)("div", {
                        className: qS()("TouchInventoryKey ShopKey", GS("inventory"), {
                          Hidden: !HS.shop
                        }),
                        ...uH("inventory"),
                        children: (0, DS.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, DS.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, DS.jsx)(cS.d, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, DS.jsx)("div", {
                        className: qS()("TouchInventoryKey BagKey", GS("inventory"), {
                          Hidden: !HS.bag
                        }),
                        ...uH("inventory"),
                        children: (0, DS.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, DS.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, DS.jsx)(cS.d, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, DS.jsx)(GH, {
                      next: !1,
                      hidden: bS.has("arrows")
                    }), (0, DS.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== jS && jS.map(((SS, HS) => (0, DS.jsx)(fH, {
                        item: SS,
                        selected: SS.classList.contains("Selected")
                      }, HS))), null === jS && QH.map((SS => {
                        const HS = DH[SS];
                        return (0, DS.jsx)("div", {
                          className: qS()("InvenItem", {
                            Selected: 0 === SS
                          }),
                          children: HS && (0, DS.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, DS.jsx)(cS.d, {
                              name: HS
                            })
                          })
                        }, SS)
                      }))]
                    }), (0, DS.jsx)(GH, {
                      next: !0,
                      hidden: bS.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, DS.jsx)("div", {
              className: "BottomRightElements",
              children: (0, DS.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== KS && xH.map((SS => {
                  const HS = KS[SS];
                  return HS && (0, DS.jsx)(IH, {
                    id: nH[SS],
                    slot: SS,
                    face: HS,
                    className: PH[SS],
                    hidden: bS
                  }, SS)
                })), null === KS && (0, DS.jsxs)(DS.Fragment, {
                  children: [(0, DS.jsx)(IH, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: bS
                  }), (0, DS.jsx)(IH, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: bS
                  }), XS && (0, DS.jsxs)(DS.Fragment, {
                    children: [(0, DS.jsx)(IH, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: bS
                    }), (0, DS.jsx)(IH, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: bS
                    })]
                  }), !XS && (0, DS.jsx)(IH, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: aS("touchKeys:scope"),
                    hidden: bS
                  }), (0, DS.jsx)(IH, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: aS("touchKeys:fly"),
                    hidden: bS
                  }), (0, DS.jsx)(IH, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: bS
                  })]
                })]
              })
            })]
          })
        }), (0, DS.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, DS.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, DS.jsxs)("div", {
              className: qS()("Joystick Resting HudPreviewJoystick", {
                Floating: !xS
              }),
              ...uH("joystick"),
              children: [(0, DS.jsx)("div", {
                className: "JoystickBase"
              }), (0, DS.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function hH() {
      const [SS, HS] = (0, bS.useState)({}), gS = (0, bS.useCallback)((SS => {
        HS((HS => [...new Set([...Object.keys(HS), ...Object.keys(SS)])].every((gS => HS[gS] === SS[gS])) ? HS : SS))
      }), []);
      return [SS, gS]
    }
    const ZH = .05;

    function JH(SS) {
      var HS;
      let {
        selected: gS,
        layout: bS,
        actionButtons: XS,
        keyNames: xS,
        overlaps: NS,
        scaleCaps: IS,
        joystickFixed: fS,
        onScale: kS,
        onHidden: aS,
        onReset: KS,
        locked: jS,
        lockable: GS,
        onLocked: CS,
        extra: nS
      } = SS;
      const {
        t: PS
      } = (0, tS.F)(), QS = gS ? iS[gS] : null, wS = null !== gS && jS.has(gS), hS = (gS && bS.hudElements[gS] || vS.g)[2], ZS = null !== (HS = gS && IS[gS]) && void 0 !== HS ? HS : vS.e, JS = SS => {
        gS && kS(gS, Math.min(ZS, Math.round(100 * (hS + .1 * SS)) / 100))
      };
      return (0, DS.jsxs)(DS.Fragment, {
        children: [(0, DS.jsxs)("div", {
          className: qS()("HudQuickName SmallTextBold", {
            Overlap: NS.length > 0
          }),
          children: [NS.length > 0 && (0, DS.jsx)(cS.d, {
            name: "triangle-exclamation"
          }), QS ? zS(QS.id, XS, PS, xS) : PS("hudLayout:fullScreenHint"), NS.length > 0 && (0, DS.jsx)("span", {
            className: "HudQuickOverlap",
            children: PS("hudLayout:overlapsShort", {
              names: US(NS, XS, PS, xS)
            })
          })]
        }), (null === QS || void 0 === QS ? void 0 : QS.scale) && (0, DS.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, DS.jsx)(uS.P, {
            disabled: wS || hS <= vS.f,
            ariaLabel: PS("hudLayout:smaller"),
            onClick: () => {
              JS(-1)
            },
            children: (0, DS.jsx)(cS.d, {
              name: "minus"
            })
          }), (0, DS.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*hS)}%`
          }), (0, DS.jsx)(uS.P, {
            disabled: wS || hS >= ZS,
            ariaLabel: PS("hudLayout:larger"),
            onClick: () => {
              JS(1)
            },
            children: (0, DS.jsx)(cS.d, {
              name: "plus"
            })
          })]
        }), (QS || nS) && (0, DS.jsxs)("div", {
          className: "HudQuickActions",
          children: [QS && (0, DS.jsxs)(DS.Fragment, {
            children: [(0, DS.jsx)(MS, {
              id: QS.id,
              actionButtons: XS,
              keyNames: xS,
              locked: wS,
              lockable: GS(QS.id),
              onLocked: CS
            }), (0, DS.jsx)(sS, {
              id: QS.id,
              elements: bS.hudElements,
              actionButtons: XS,
              keyNames: xS,
              onHidden: aS
            }), (0, DS.jsx)(BS, {
              id: QS.id,
              elements: bS.hudElements,
              actionButtons: XS,
              keyNames: xS,
              locked: wS,
              onReset: KS
            }), lS(QS.id, fS) && (0, DS.jsx)(mS, {})]
          }), nS]
        })]
      })
    }
    var OH = gS(1198),
      dH = gS(4535);
    const cH = "HudPreviewDoc",
      vH = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      EH = new Set([cH, ...Object.values(vH)]),
      LH = new Set(vS.r.map(bH.y)),
      YH = new Set(bH.i),
      AH = 'style, link[rel="stylesheet"]';

    function yH(SS, HS, gS, tS) {
      const bS = new Map,
        XS = new Set,
        xS = new URL(SS.baseURI).origin,
        NS = HS => {
          var gS;
          if ("LINK" !== HS.nodeName) return !0;
          const tS = null === (gS = HS.getAttribute("href")) || void 0 === gS ? void 0 : gS.trim();
          if (!tS) return !1;
          try {
            return new URL(tS, SS.baseURI).origin === xS
          } catch {
            return !1
          }
        };
      let qS = null;
      const uS = () => {
          qS !== (0 === XS.size) && (qS = 0 === XS.size, null === tS || void 0 === tS || tS(qS))
        },
        IS = SS => {
          const HS = SS.cloneNode(!0);
          if ("LINK" === HS.tagName) {
            XS.add(HS);
            const SS = () => {
              XS.delete(HS), uS()
            };
            HS.addEventListener("load", SS), HS.addEventListener("error", SS), gS && HS.addEventListener("load", gS)
          }
          return HS
        },
        fS = () => {
          const tS = function(SS) {
              const HS = [...SS.body.children].filter((SS => SS.matches(AH)));
              return [...SS.head.querySelectorAll(AH), ...HS]
            }(SS).filter(NS),
            xS = new Set(tS);
          for (const [SS, HS] of bS) xS.has(SS) || (HS.remove(), bS.delete(SS), XS.delete(HS));
          let qS = null;
          for (let SS = tS.length - 1; SS >= 0; SS--) {
            const XS = tS[SS];
            let xS = bS.get(XS);
            xS ? "STYLE" === XS.tagName && xS.textContent !== XS.textContent && (xS.textContent = XS.textContent, null === gS || void 0 === gS || gS()) : (xS = IS(XS), bS.set(XS, xS), HS.head.insertBefore(xS, qS)), qS = xS
          }
          uS()
        };
      fS();
      const kS = new MutationObserver(fS);
      return kS.observe(SS.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), kS.observe(SS.body, {
        childList: !0
      }), () => {
        kS.disconnect()
      }
    }

    function VH(SS, HS, gS) {
      let {
        keysAbove: tS
      } = gS;
      const bS = [...SS.documentElement.classList].filter((SS => !EH.has(SS) && !YH.has(SS))),
        XS = [...HS.documentElement.classList].filter((SS => YH.has(SS))),
        xS = [cH, vH.hotbar, vH.hasShop, vH.hasBag];
      tS && xS.push(vH.keysAbove), HS.documentElement.className = [...bS, ...xS, ...XS].join(" ")
    }
    const iH = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function WH(SS, HS, gS, tS, bS) {
      const XS = (0, vS.u)(gS, tS, "joystick"),
        xS = (0, bH.z)((0, bH.O)(gS, tS, bS), tS),
        NS = xS.classes.filter((SS => !LH.has(SS))),
        qS = HS.documentElement;
      (0, bH.T)({
        ...xS,
        classes: NS
      }, {
        vars: qS,
        safe: qS,
        classes: qS
      });
      const uS = (0, bH.F)(gS.hudLayouts[tS].hudSafe, window.innerWidth, window.innerHeight, zH(), (0, bH.P)(HS));
      qS.style.setProperty("--preview-joystick-shift-left", `${uS[3]}px`), qS.style.setProperty("--preview-joystick-shift-bottom", `${uS[2]}px`), qS.style.setProperty("--preview-joystick-scale", String(XS[2])), (0, dH.d)(qS, HS, gS, tS);
      for (const IS of iH) qS.style.setProperty(IS, SS.documentElement.style.getPropertyValue(IS) || "0px")
    }

    function zH() {
      return (0, bH.K)(IS.b.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function UH(SS) {
      return (0, bH.u)(zH(), (0, bH.P)(SS))
    }

    function pH(SS, HS, gS) {
      const tS = SS.documentElement.style,
        bS = (0, bH.I)(HS),
        XS = tS.getPropertyValue(bS);
      try {
        return gS((SS => {
          tS.setProperty(bS, String(SS))
        }))
      } finally {
        "" === XS ? tS.removeProperty(bS) : tS.setProperty(bS, XS)
      }
    }

    function sH(SS, HS) {
      const [gS, tS] = pH(SS, "hotbar", (HS => {
        const gS = gS => {
          var tS, bS;
          return HS(gS), null !== (tS = null === (bS = SS.querySelector(".HotBarGameItemsContainer")) || void 0 === bS ? void 0 : bS.getBoundingClientRect().width) && void 0 !== tS ? tS : 0
        };
        return [gS(1), gS(vS.e)]
      }));
      return gS <= 0 ? vS.e : Math.min(vS.e, Math.max(1, Math.floor(tS / gS / HS + 1e-6) * HS))
    }
    const BH = 3,
      MH = .5,
      FH = SS => SS.right - SS.left;
    const RH = (SS, HS) => Math.abs((0, gH.d)(SS).x - (0, gH.d)(HS).x) + Math.abs((0, gH.d)(SS).y - (0, gH.d)(HS).y) + Math.abs(FH(SS) - FH(HS));

    function TH(SS, HS, gS, tS, bS) {
      let {
        canKeep: XS = () => !0,
        passes: xS = BH,
        before: NS,
        keysAboveOf: qS
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const uS = void 0 !== qS && qS(SS) !== qS(HS),
        IS = HS.hudLayouts[gS].hudLocked.filter((SS => XS(SS) && !(uS && "inventory" === SS))),
        fS = new Set(IS);
      if (0 === fS.size) return HS;
      const kS = [...YS].filter((tS => !IS.includes(tS) && (0, vS.u)(SS, gS, tS).join() === (0, vS.u)(HS, gS, tS).join())),
        aS = SS => {
          const HS = (0, gH.G)(kS.flatMap((HS => SS[HS] ? [SS[HS]] : [])));
          return {
            ...SS,
            cluster: null !== HS && void 0 !== HS ? HS : void 0
          }
        },
        KS = SS => {
          const HS = bS(SS);
          return HS && aS(HS)
        },
        jS = NS ? aS(NS) : KS(SS);
      let GS = jS && KS(HS);
      if (!jS || !GS) return HS;
      let CS = HS;
      for (let nS = 0; nS < xS && fS.size > 0; nS++) {
        const SS = new Map;
        for (const HS of fS) {
          const bS = jS[HS],
            XS = GS[HS],
            xS = bS && XS ? oH(HS, (0, vS.u)(CS, gS, HS), bS, XS, tS) : null;
          xS ? SS.set(HS, xS) : fS.delete(HS)
        }
        if (0 === SS.size) break;
        let bS = CS;
        for (const [HS, tS] of SS) bS = (0, vS.V)(bS, gS, HS, tS);
        const XS = KS(bS);
        if (!XS) return HS;
        let xS = CS;
        for (const [HS, tS] of SS) {
          const SS = XS[HS];
          SS && RH(jS[HS], SS) < RH(jS[HS], GS[HS]) - MH ? xS = (0, vS.V)(xS, gS, HS, tS) : fS.delete(HS)
        }
        if (xS === CS) break;
        const NS = [...SS.keys()].every((SS => fS.has(SS)));
        if (CS = xS, GS = NS ? XS : KS(CS), !GS) return HS
      }
      return bS(CS), CS
    }

    function oH(SS, HS, gS, tS, bS) {
      let [XS, xS, NS] = HS;
      const qS = vS.p[SS],
        uS = {};
      qS.scale && FH(tS) > 0 && Math.abs(FH(gS) - FH(tS)) > MH && (uS.scale = Math.max(vS.f, Math.min(vS.e, NS * FH(gS) / FH(tS))));
      const IS = (0, gH.d)(gS).x - (0, gH.d)(tS).x,
        fS = (0, gH.d)(gS).y - (0, gH.d)(tS).y;
      return qS.move && (Math.abs(IS) > MH || Math.abs(fS) > MH) && (uS.dx = XS + IS / bS.width, uS.dy = xS + fS / bS.height), void 0 === uS.scale && void 0 === uS.dx ? null : uS
    }
    let lH = 0;

    function mH() {
      return lH > 0
    }
    const eH = SS => 0 === SS.dx && 0 === SS.dy,
      rH = .001,
      Sg = SS => Math.abs(SS.dx) >= 5e-4 || Math.abs(SS.dy) >= 5e-4 ? SS : {
        dx: SS.dx,
        dy: SS.dy < 0 ? -.001 : rH
      };

    function Hg(SS) {
      let {
        preview: HS,
        stageRef: gS,
        ringRef: tS,
        centreLineRef: XS,
        snapCentre: xS,
        ready: NS,
        measure: qS,
        k: uS,
        viewport: IS,
        boxes: fS,
        pieces: kS,
        selected: aS,
        insets: KS,
        layout: jS,
        canMove: GS,
        onSelect: CS,
        onMove: nS
      } = SS;
      const PS = (0, bS.useRef)(null),
        QS = (0, bS.useCallback)((() => null !== PS.current), []),
        DS = (SS, HS) => {
          if (!HS) return null;
          const gS = (0, gH.d)(SS.origin),
            tS = (0, gH.d)(HS),
            bS = (SS.to.dx - SS.from.dx) * IS.width,
            XS = (SS.to.dy - SS.from.dy) * IS.height,
            xS = HS.right - HS.left,
            NS = HS.bottom - HS.top;
          return {
            skew: {
              x: tS.x - gS.x - bS,
              y: tS.y - gS.y - XS
            },
            box: {
              left: gS.x - xS / 2,
              top: gS.y - NS / 2,
              right: gS.x + xS / 2,
              bottom: gS.y + NS / 2
            }
          }
        },
        wS = (SS, gS) => {
          var bS;
          const xS = PS.current;
          if (!xS || xS.pointerId !== SS.pointerId) return;
          PS.current = null, null === (bS = XS.current) || void 0 === bS || bS.classList.remove("Shown", "Snapped");
          const NS = tS.current;
          if (NS && null !== xS.ringStyle && NS.setAttribute("style", xS.ringStyle), gS && xS.moved) {
            const SS = eH(xS.to) ? null : qS(xS.id),
              HS = SS ? (0, gH.C)(SS, (0, gH.z)(IS.width, IS.height, KS)) : {
                x: 0,
                y: 0
              },
              gS = {
                dx: xS.to.dx + HS.x / IS.width,
                dy: xS.to.dy + HS.y / IS.height
              },
              tS = eH(xS.to) ? gS : Sg(gS);
            nS(xS.id, tS.dx, tS.dy)
          } else HS(xS.id, null), gS && xS.tapPick && CS(xS.tapPick)
        };
      return {
        busy: QS,
        handlers: {
          onPointerDown: SS => {
            var HS;
            if (!NS || PS.current || !SS.target.closest(".HudPreviewHandle")) return;
            const tS = gS.current.getBoundingClientRect(),
              bS = {
                x: (SS.clientX - tS.left) / uS,
                y: (SS.clientY - tS.top) / uS
              },
              XS = (0, gH.v)(bS, kS, 40 / uS),
              xS = "cluster" === aS && void 0 !== fS.cluster && null !== (0, gH.v)(bS, [{
                id: "cluster",
                box: fS.cluster
              }], 40 / uS),
              qS = "menu" === aS && void 0 !== fS.menu && (0, gH.g)(fS.menu, bS) && ("menu" === XS || null !== XS && (0, tH.w)(XS, jS.hudElements[XS])),
              IS = xS ? "cluster" : qS ? "menu" : null,
              KS = null !== IS,
              nS = null !== IS && void 0 !== IS ? IS : XS;
            if (!nS) return;
            if (function(SS) {
                lH++;
                const HS = gS => {
                  gS.pointerId === SS && (lH = Math.max(0, lH - 1), window.removeEventListener("pointerup", HS, !0), window.removeEventListener("pointercancel", HS, !0))
                };
                window.addEventListener("pointerup", HS, !0), window.addEventListener("pointercancel", HS, !0)
              }(SS.pointerId), !GS(nS)) return void CS(KS && XS ? XS : nS);
            CS(nS);
            const [QS, DS] = null !== (HS = jS.hudElements[nS]) && void 0 !== HS ? HS : [0, 0], wS = {
              dx: QS,
              dy: DS
            }, hS = {
              skew: {
                x: 0,
                y: 0
              },
              box: fS[nS]
            };
            PS.current = {
              id: nS,
              pointerId: SS.pointerId,
              startX: SS.clientX,
              startY: SS.clientY,
              origin: fS[nS],
              from: wS,
              to: wS,
              moved: !1,
              home: eH(wS) ? {
                centre: (0, gH.d)(fS[nS]),
                anchor: hS
              } : null,
              away: eH(wS) ? null : hS,
              anchor: hS,
              ringStyle: null,
              tapPick: KS ? XS : null
            }, SS.currentTarget.setPointerCapture(SS.pointerId)
          },
          onPointerMove: SS => {
            const gS = PS.current;
            if (!gS || gS.pointerId !== SS.pointerId) return;
            const bS = SS.clientX - gS.startX,
              NS = SS.clientY - gS.startY;
            if (!gS.moved && Math.hypot(bS, NS) < 5) return;
            const fS = !gS.moved;
            var kS, aS;
            (gS.moved = !0, fS) && (gS.ringStyle = null !== (kS = null === (aS = tS.current) || void 0 === aS ? void 0 : aS.getAttribute("style")) && void 0 !== kS ? kS : null);
            const jS = (0, gH.z)(IS.width, IS.height, KS);
            if (!gS.home) {
              var GS;
              gS.to = {
                dx: 0,
                dy: 0
              }, HS(gS.id, gS.to);
              const SS = qS(gS.id),
                tS = null !== (GS = DS(gS, SS)) && void 0 !== GS ? GS : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: gS.origin
                },
                bS = (0, gH.d)(gS.origin);
              gS.home = {
                centre: SS ? (0, gH.d)(SS) : {
                  x: bS.x - gS.from.dx * IS.width,
                  y: bS.y - gS.from.dy * IS.height
                },
                anchor: tS
              }
            }
            const CS = gS.home;
            let nS = !1;
            const QS = SS => {
                nS = !1;
                let tS = (0, gH.k)(SS.box, bS / uS, NS / uS, jS);
                const XS = IS.width / 2;
                if (xS && Math.abs((0, gH.d)(gS.origin).x + tS.x - XS) <= 8 / uS) {
                  const HS = XS - (0, gH.d)(gS.origin).x,
                    bS = (0, gH.k)(SS.box, HS, tS.y, jS);
                  nS = Math.abs(bS.x - HS) < .01, nS && (tS = bS)
                }
                const qS = (0, gH.t)(gS.from, tS.x - SS.skew.x, tS.y - SS.skew.y, IS.width, IS.height);
                gS.to = Sg(qS), gS.anchor = SS, HS(gS.id, gS.to)
              },
              wS = (0, gH.k)(CS.anchor.box, bS / uS, NS / uS, jS),
              hS = XS.current,
              ZS = (0, gH.d)(gS.origin),
              JS = ((0, vS.H)(gS.id) ? 20 : 6) / uS;
            if (Math.abs(ZS.x + wS.x - CS.centre.x) <= JS && Math.abs(ZS.y + wS.y - CS.centre.y) <= JS) gS.to = {
              dx: 0,
              dy: 0
            }, gS.anchor = CS.anchor, nS = xS && Math.abs(CS.centre.x - IS.width / 2) < 1, HS(gS.id, gS.to);
            else if (gS.away) QS(gS.away);
            else {
              var OS;
              QS(CS.anchor), gS.away = null !== (OS = DS(gS, qS(gS.id))) && void 0 !== OS ? OS : CS.anchor, QS(gS.away)
            }
            null === hS || void 0 === hS || hS.classList.add("Shown"), null === hS || void 0 === hS || hS.classList.toggle("Snapped", nS), (SS => {
              const HS = tS.current;
              if (HS) {
                const {
                  skew: gS,
                  box: tS
                } = SS.anchor;
                HS.style.left = tS.left * uS + "px", HS.style.top = tS.top * uS + "px", HS.style.width = (tS.right - tS.left) * uS + "px", HS.style.height = (tS.bottom - tS.top) * uS + "px", HS.style.translate = `${((SS.to.dx-SS.from.dx)*IS.width+gS.x)*uS}px ${((SS.to.dy-SS.from.dy)*IS.height+gS.y)*uS}px`
              }
            })(gS)
          },
          onPointerUp: SS => {
            wS(SS, !0)
          },
          onPointerCancel: SS => {
            wS(SS, !1)
          }
        }
      }
    }

    function gg(SS, HS) {
      return Object.keys(SS).filter((SS => SS !== HS)).map((HS => SS[HS]))
    }

    function tg(SS) {
      const HS = [],
        gS = HS => (0, vS.H)(HS) && !SS.documentElement.classList.contains((0, bH.D)(HS));
      for (const xS of SS.querySelectorAll(`[${WS}]`)) {
        const SS = gS(xS.getAttribute(WS)) ? xS.querySelector(".ScaleOnHover") : null,
          tS = (null !== SS && void 0 !== SS ? SS : xS).getBoundingClientRect();
        (tS.width > 0 || tS.height > 0) && HS.push({
          id: xS.getAttribute(WS),
          box: {
            left: tS.left,
            top: tS.top,
            right: tS.right,
            bottom: tS.bottom
          }
        })
      }
      const tS = SS => (0, gH.G)(HS.filter((HS => {
          let {
            id: gS
          } = HS;
          return SS(gS)
        })).map((SS => {
          let {
            box: HS
          } = SS;
          return HS
        }))),
        bS = {};
      for (const xS of new Set(HS.map((SS => SS.id)))) bS[xS] = tS((SS => SS === xS));
      const XS = tS((SS => YS.has(SS)));
      return XS && (bS.cluster = XS), {
        boxes: bS,
        pieces: HS
      }
    }

    function bg(SS, HS, gS) {
      const tS = HS.right - HS.left,
        bS = HS.bottom - HS.top;
      return pH(SS, "cluster", (HS => {
        const XS = gS => {
            HS(gS);
            const tS = [...SS.querySelectorAll(`[${WS}]:not(.HudPreviewGhost)`)].filter((SS => YS.has(SS.getAttribute(WS)))).map((SS => {
                const HS = SS.getBoundingClientRect();
                return {
                  left: HS.left,
                  top: HS.top,
                  right: HS.right,
                  bottom: HS.bottom
                }
              })),
              bS = (0, gH.G)(tS);
            return bS ? {
              w: bS.right - bS.left,
              h: bS.bottom - bS.top
            } : null
          },
          xS = SS => !SS || SS.w <= tS && SS.h <= bS,
          NS = XS(1),
          qS = XS(vS.e);
        if (!NS || xS(qS)) return vS.e;
        const uS = (SS, HS, gS) => HS > SS ? 1 + (gS - SS) * (vS.e - 1) / (HS - SS) : vS.e;
        let IS = Math.floor(Math.min(vS.e, uS(NS.w, qS.w, tS), uS(NS.h, qS.h, bS)) / gS + 1e-6) * gS;
        for (; IS > 1 && !xS(XS(IS));) IS = Math.round(100 * (IS - gS)) / 100;
        return Math.max(1, IS)
      }))
    }

    function Xg(SS) {
      VH(document, SS, {
        keysAbove: !1
      });
      const HS = parseFloat(getComputedStyle(SS.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        gS = Number.isFinite(HS) && HS < 0;
      return VH(document, SS, {
        keysAbove: gS
      }), gS
    }

    function xg(SS, HS) {
      let {
        layout: gS,
        orientation: tS,
        viewport: XS,
        replicaKey: xS,
        joystickFixed: NS,
        busy: qS
      } = HS;
      const [uS, IS] = (0, bS.useState)(null), [fS, kS] = (0, bS.useState)({
        boxes: {},
        pieces: []
      }), [aS, KS] = (0, bS.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [jS, GS] = (0, bS.useState)(!1), [CS, nS] = (0, bS.useState)(!1), [PS, QS] = (0, bS.useState)(!1), DS = (0, bS.useCallback)((SS => {
        nS(SS), SS && QS(!0)
      }), []), wS = gS.hudLayouts[tS].hudSafe;
      (0, bS.useLayoutEffect)((() => {
        const HS = SS.current.contentDocument;
        HS.open(), HS.write("<!DOCTYPE html><html><head></head><body></body></html>"), HS.close(), IS(HS)
      }), [SS]);
      const hS = (0, bS.useCallback)((() => {
          uS && ((0, tH.x)(uS), kS(tg(uS)), KS(function(SS, HS) {
            const gS = UH(SS),
              [tS, bS, XS, xS] = HS ? (0, bH.x)(HS, window.innerWidth, window.innerHeight, gS) : gS;
            return {
              top: tS,
              right: bS,
              bottom: XS,
              left: xS
            }
          }(uS, wS)))
        }), [uS, wS]),
        ZS = (0, bS.useCallback)((() => {
          uS && GS(Xg(uS))
        }), [uS]),
        JS = (0, bS.useRef)((() => {}));
      return JS.current = () => {
        ZS(), qS() || hS()
      }, (0, bS.useLayoutEffect)((() => {
        if (uS) return yH(document, uS, (() => {
          JS.current()
        }), DS)
      }), [uS, DS]), (0, bS.useLayoutEffect)(ZS, [ZS, XS]), (0, bS.useLayoutEffect)((() => {
        uS && (VH(document, uS, {
          keysAbove: jS
        }), WH(document, uS, gS, tS, NS), ZS(), hS())
      }), [uS, gS, tS, jS, xS, NS, XS, hS, ZS]), (0, bS.useEffect)((() => {
        var SS;
        if (!uS) return;
        const HS = new ResizeObserver((() => {
          qS() || hS()
        }));
        for (const gS of uS.querySelectorAll(`[${WS}]`)) HS.observe(gS);
        return null === (SS = uS.fonts) || void 0 === SS || SS.ready.then(hS), () => {
          HS.disconnect()
        }
      }), [uS, hS, qS, xS]), {
        doc: uS,
        boxes: fS.boxes,
        pieces: fS.pieces,
        insets: aS,
        keysAbove: jS,
        ready: CS,
        settled: PS
      }
    }
    const Ng = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      qg = (SS, HS, gS) => {
        const tS = SS => (0, tH.w)(SS, gS.hudElements[SS]);
        return "cluster" === SS && YS.has(HS) || "cluster" === HS && YS.has(SS) || "menu" === SS && tS(HS) || "menu" === HS && tS(SS) || Ng.some((tS => {
          let [bS, XS] = tS;
          const xS = gS.hudElements.hotbar,
            NS = "inventory" === XS && gS.hudLocked.includes(XS) && void 0 !== xS && !(0, vS.D)(xS);
          return (SS === bS && HS === XS || SS === XS && HS === bS) && !NS
        }))
      };
    const ug = ["Above", "Below", "Left", "Right"];

    function Ig(SS, HS, gS, tS, bS) {
      const XS = gS[SS],
        xS = (XS.left + XS.right) / 2,
        NS = (XS.top + XS.bottom) / 2,
        qS = (7.5 * HS.length + 14) / tS,
        uS = 18 / tS,
        IS = {
          Above: {
            left: xS - qS / 2,
            top: XS.top - uS,
            right: xS + qS / 2,
            bottom: XS.top
          },
          Below: {
            left: xS - qS / 2,
            top: XS.bottom,
            right: xS + qS / 2,
            bottom: XS.bottom + uS
          },
          Left: {
            left: XS.left - qS,
            top: NS - uS / 2,
            right: XS.left,
            bottom: NS + uS / 2
          },
          Right: {
            left: XS.right,
            top: NS - uS / 2,
            right: XS.right + qS,
            bottom: NS + uS / 2
          }
        },
        fS = gg(gS, SS),
        kS = {
          left: 0,
          top: 0,
          right: bS.width,
          bottom: bS.height
        };
      return ug[(0, gH.p)(ug.map((SS => IS[SS])), fS, {
        bounds: kS
      })]
    }

    function fg() {
      const [SS, HS] = (0, SH.d)();
      return (0, bS.useMemo)((() => ({
        width: SS,
        height: HS
      })), [SS, HS])
    }

    function kg(SS) {
      var HS;
      const {
        layout: gS,
        orientation: XS,
        selected: xS,
        onSelect: NS,
        onMove: uS,
        canMove: IS,
        actionButtons: fS,
        joystickFixed: kS,
        presence: aS,
        keyNames: jS,
        maxHeight: GS,
        fill: CS = !1,
        apiRef: nS
      } = SS, {
        t: PS
      } = (0, tS.F)(), QS = fg(), wS = (null !== (HS = (0, KS.i)("maxAuraLevel")) && void 0 !== HS ? HS : 0) > 0, hS = gS.hudLayouts[XS], ZS = (0, bS.useRef)(null), JS = (0, bS.useRef)(null), OS = (0, bS.useRef)(null), dS = (0, bS.useRef)(null), ES = (0, bS.useRef)(null), LS = (0, bS.useRef)(null), AS = (0, HH.d)(ZS).width, yS = CS ? 1 : AS > 0 ? (0, gH.x)(AS, QS.width, QS.height, GS) : 0, VS = (0, bS.useRef)((() => !1)), iS = (0, bS.useCallback)((() => VS.current()), []), {
        doc: WS,
        boxes: US,
        pieces: pS,
        insets: sS,
        keysAbove: BS,
        ready: MS,
        settled: FS
      } = xg(OS, {
        layout: gS,
        orientation: XS,
        viewport: QS,
        replicaKey: `${fS}:${kS}:${wS}`,
        joystickFixed: kS,
        busy: iS
      }), RS = (0, bS.useCallback)((SS => {
        WS && WH(document, WS, SS, XS, kS)
      }), [WS, XS, kS]), TS = (0, bS.useCallback)((SS => WS && FS ? (RS(SS), Xg(WS), function(SS) {
        let {
          boxes: HS,
          pieces: gS
        } = SS;
        const tS = gS.find((SS => "inventory" === SS.id));
        if (!tS || !HS.inventory) return HS;
        const bS = (0, gH.d)(HS.inventory),
          XS = FH(tS.box) / 2,
          xS = (tS.box.bottom - tS.box.top) / 2;
        return {
          ...HS,
          inventory: {
            left: bS.x - XS,
            top: bS.y - xS,
            right: bS.x + XS,
            bottom: bS.y + xS
          }
        }
      }(tg(WS))) : null), [WS, FS, RS]), oS = (0, bS.useCallback)((SS => !!WS && (RS(SS), Xg(WS))), [WS, RS]), lS = (0, bS.useRef)(null), mS = (0, bS.useRef)(null), rS = (0, bS.useRef)(gS);
      rS.current = gS;
      const SH = (0, bS.useCallback)((() => {
        null !== lS.current && (cancelAnimationFrame(lS.current), lS.current = null)
      }), []);
      (0, bS.useEffect)((() => SH), [gS, SH]);
      const {
        lockable: XH
      } = SS, xH = (0, bS.useCallback)((SS => {
        if (RS(SS), !FS || 0 === gS.hudLayouts[XS].hudLocked.length) return;
        const HS = gS;
        SH(), lS.current = requestAnimationFrame((() => {
          var gS;
          if (lS.current = null, rS.current !== HS) return;
          const tS = (null === (gS = mS.current) || void 0 === gS ? void 0 : gS.from) === HS ? mS.current.boxes : TS(HS);
          tS && (mS.current = {
            from: HS,
            boxes: tS
          }), RS(tS ? TH(HS, SS, XS, QS, TS, {
            canKeep: XH,
            passes: 1,
            before: tS,
            keysAboveOf: oS
          }) : SS)
        }))
      }), [RS, FS, gS, XS, QS, TS, oS, XH, SH]), NH = Hg({
        preview: (SS, HS) => {
          HS ? xH((0, vS.V)(gS, XS, SS, HS)) : (SH(), RS(gS))
        },
        stageRef: JS,
        ringRef: dS,
        centreLineRef: ES,
        snapCentre: gS.hudSnapCentre,
        ready: FS,
        measure: SS => {
          var HS;
          return WS && MS && null !== (HS = tg(WS).boxes[SS]) && void 0 !== HS ? HS : null
        },
        k: yS,
        viewport: QS,
        boxes: US,
        pieces: pS,
        selected: xS,
        insets: sS,
        layout: hS,
        canMove: IS,
        onSelect: NS,
        onMove: (SS, HS, gS) => {
          SH(), uS(SS, HS, gS)
        }
      });
      (0, bS.useLayoutEffect)((() => {
        VS.current = NH.busy
      }), [NH.busy]);
      const qH = (0, bS.useRef)([]),
        uH = (0, bS.useRef)(hS.hudElements);
      (0, bS.useEffect)((() => {
        for (const bS of Object.keys(hS.hudElements)) {
          var SS, HS, gS, tS;
          (null !== (SS = null === (HS = hS.hudElements[bS]) || void 0 === HS ? void 0 : HS[2]) && void 0 !== SS ? SS : 1) > (null !== (gS = null === (tS = uH.current[bS]) || void 0 === tS ? void 0 : tS[2]) && void 0 !== gS ? gS : 1) && IS(bS) && !(0, tH.w)(bS, hS.hudElements[bS]) && qH.current.push(bS)
        }
        uH.current = hS.hudElements
      }), [hS.hudElements, IS]), (0, bS.useEffect)((() => {
        if (!MS) return;
        const SS = qH.current.shift(),
          HS = SS && US[SS];
        if (!SS || !HS || NH.busy()) return;
        const gS = (0, gH.C)(HS, (0, gH.z)(QS.width, QS.height, sS));
        if (0 !== gS.x || 0 !== gS.y) {
          var tS;
          const [HS, bS] = null !== (tS = hS.hudElements[SS]) && void 0 !== tS ? tS : [0, 0];
          uS(SS, HS + gS.x / QS.width, bS + gS.y / QS.height)
        }
      }), [US, MS]), (0, bS.useImperativeHandle)(nS, (() => ({
        setScale: (SS, HS) => {
          xH((0, vS.V)(gS, XS, SS, {
            scale: HS
          }))
        },
        setOpacity: SS => {
          RS({
            ...gS,
            hudKeyOpacity: SS
          })
        },
        keepLocks: (SS, HS) => (SH(), TH(SS, HS, XS, QS, TS, {
          canKeep: XH,
          keysAboveOf: oS
        })),
        setSafe: SS => {
          xH((0, vS.X)(gS, XS, SS)), LS.current && (LS.current.style.inset = (0, bH.x)(SS, QS.width, QS.height, UH(null !== WS && void 0 !== WS ? WS : document)).map((SS => SS * yS + "px")).join(" "))
        }
      })), [RS, xH, TS, oS, SH, XH, WS, gS, XS, QS, yS]);
      const IH = new Set(Object.keys(hS.hudElements).filter((SS => (0, vS.m)(hS.hudElements, SS)))),
        fH = xS ? US[xS] : void 0,
        kH = xS ? zS(xS, fS, PS, jS) : "",
        aH = (0, OH.h)(QS.width, QS.height),
        KH = xS ? function(SS, HS, gS, tS) {
          const bS = SS => (0, vS.m)(gS.hudElements, SS) || (0, tH.u)(SS, gS, tS);
          if (bS(SS)) return [];
          const XS = HS.filter((HS => {
              let {
                id: gS
              } = HS;
              return "cluster" === SS ? YS.has(gS) : gS === SS
            })),
            xS = new Set;
          for (const NS of HS) NS.id === SS || xS.has(NS.id) || qg(SS, NS.id, gS) || bS(NS.id) || void 0 === gS.hudElements[SS] && void 0 === gS.hudElements[NS.id] || XS.some((SS => {
            let {
              id: HS,
              box: gS
            } = SS;
            return HS !== NS.id && (0, gH.i)(gS, NS.box, 2)
          })) && xS.add(NS.id);
          return [...xS]
        }(xS, pS, hS, aH) : [],
        jH = new Set((0, tH.s)(hS.hudElements)),
        GH = (0, tH.I)(hS, (0, tH.F)(aS.rowIcons)).state,
        CH = KH.join(),
        nH = (0, bS.useRef)(SS.onReady);
      nH.current = SS.onReady, (0, bS.useEffect)((() => {
        var SS;
        null === (SS = nH.current) || void 0 === SS || SS.call(nH, FS)
      }), [FS]);
      const PH = (0, bS.useRef)(SS.onMeasured);
      (0, bS.useLayoutEffect)((() => {
        PH.current = SS.onMeasured
      })), (0, bS.useEffect)((() => {
        var SS;
        const HS = WS ? {
          hotbar: sH(WS, ZH),
          cluster: bg(WS, (0, gH.z)(QS.width, QS.height, sS), ZH)
        } : {};
        null === (SS = PH.current) || void 0 === SS || SS.call(PH, US, CH ? CH.split(",") : [], HS)
      }), [US, CH, WS, QS, sS]);
      const QH = SS => ({
        left: SS.left * yS,
        top: SS.top * yS,
        width: (SS.right - SS.left) * yS,
        height: (SS.bottom - SS.top) * yS
      });
      return (0, DS.jsx)("div", {
        ref: ZS,
        className: qS()("HudPreviewBox", {
          Fill: CS
        }),
        style: {
          height: QS.height * yS
        },
        children: (0, DS.jsxs)("div", {
          ref: JS,
          className: "HudPreviewStage",
          style: {
            width: QS.width * yS,
            height: QS.height * yS
          },
          children: [(0, DS.jsx)("iframe", {
            ref: OS,
            className: "HudPreviewFrame",
            title: PS("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: QS.width,
              height: QS.height,
              transform: `scale(${yS})`
            }
          }), WS && (0, eS.createPortal)((0, DS.jsx)(wH, {
            presence: aS,
            portraitPhone: aH,
            hidden: IH,
            actionButtons: fS,
            joystickFixed: kS,
            keysAbove: BS,
            auraBar: wS,
            trayState: GH,
            moved: jH
          }), WS.body), (0, DS.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...NH.handlers,
            children: [(0, DS.jsx)("div", {
              ref: LS,
              className: "HudPreviewSafeZone",
              style: {
                top: sS.top * yS,
                right: sS.right * yS,
                bottom: sS.bottom * yS,
                left: sS.left * yS
              }
            }), pS.map(((SS, HS) => {
              let {
                id: gS,
                box: tS
              } = SS;
              return (0, DS.jsx)("div", {
                className: "HudPreviewHandle",
                style: QH((0, gH.m)(tS, 40 / yS))
              }, `${gS}:${HS}`)
            })), hS.hudLocked.map((SS => {
              const HS = US[SS];
              return HS && (0, DS.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: HS.right * yS,
                  top: HS.top * yS
                },
                children: (0, DS.jsx)(cS.d, {
                  name: "lock"
                })
              }, SS)
            })), (0, DS.jsx)("div", {
              ref: ES,
              className: "HudPreviewCentreLine",
              style: {
                left: QS.width / 2 * yS
              }
            }), xS && fH && (0, DS.jsx)("div", {
              ref: dS,
              className: qS()("HudPreviewRing", {
                Fixed: !IS(xS),
                Overlap: KH.length > 0
              }),
              style: QH(fH),
              children: (0, DS.jsx)("span", {
                className: qS()("HudPreviewRingLabel", Ig(xS, kH, US, yS, QS)),
                children: kH
              })
            })]
          })]
        })
      })
    }

    function ag(SS, HS) {
      (0, bS.useEffect)((() => {
        var gS;
        null === (gS = SS.current) || void 0 === gS || gS.toggleAttribute("inert", HS)
      }), [SS, HS])
    }
    const Kg = "hudFullScreen";

    function jg(SS) {
      let {
        onScale: HS,
        onHidden: gS,
        onReset: XS,
        locked: xS,
        lockable: NS,
        onLocked: qS,
        onClose: IS,
        ...fS
      } = SS;
      const {
        t: kS
      } = (0, tS.F)(), aS = (0, bS.useRef)(null);
      (0, rS.s)("popup", aS, IS),
      function(SS) {
        const HS = (0, bS.useRef)(SS);
        HS.current = SS, (0, bS.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Kg]: !0
          }, "");
          let SS = !1;
          const gS = () => {
            SS = !0, HS.current()
          };
          return window.addEventListener("popstate", gS), () => {
            var HS;
            window.removeEventListener("popstate", gS), !SS && null !== (HS = window.history.state) && void 0 !== HS && HS[Kg] && window.history.back()
          }
        }), [])
      }(IS), (0, bS.useEffect)((() => {
        function SS(SS) {
          "Escape" === SS.key && (SS.stopPropagation(), IS())
        }
        return window.addEventListener("keydown", SS, !0), () => {
          window.removeEventListener("keydown", SS, !0)
        }
      }), [IS]);
      const {
        selected: KS
      } = fS, jS = (0, bS.useRef)(null), GS = (0, bS.useRef)(null), [CS, nS] = (0, bS.useState)(!1);
      ag(GS, !CS);
      const [PS, QS] = (0, bS.useState)(null), [wS, hS] = (0, bS.useState)([]), [ZS, JS] = hH(), OS = (0, bS.useRef)(fS.selected);
      OS.current = fS.selected;
      const dS = (0, bS.useRef)({}),
        cS = (0, bS.useCallback)((() => {
          const SS = jS.current;
          SS && QS(function(SS, HS, gS) {
            var tS;
            const {
              innerWidth: bS,
              innerHeight: XS
            } = window, xS = SS.offsetWidth, NS = SS.offsetHeight, qS = Math.max(zH()[0], 6), uS = [];
            for (const kS of [qS, .2 * XS, .5 * XS - NS / 2, .33 * XS])
              for (const SS of [.5, .3, .7]) uS.push({
                left: Math.max(0, Math.min(bS - xS - 6, Math.max(6, bS * SS - xS / 2))),
                top: kS
              });
            const IS = uS.map((SS => ({
                left: SS.left - 6,
                top: SS.top - 6,
                right: SS.left + xS + 6,
                bottom: SS.top + NS + 6
              }))),
              fS = gg(HS, gS);
            return uS[(0, gH.p)(IS, fS, {
              avoid: gS && null !== (tS = HS[gS]) && void 0 !== tS ? tS : null
            })]
          }(SS, dS.current, OS.current))
        }), []),
        vS = (0, bS.useCallback)(((SS, HS, gS) => {
          hS(HS), JS(gS), dS.current = SS, cS()
        }), [cS, JS]);
      return (0, bS.useLayoutEffect)(cS, [fS.selected, cS]), (0, eS.createPortal)((0, DS.jsxs)("div", {
        ref: aS,
        className: "HudFullScreenEditor",
        children: [(0, DS.jsx)(kg, {
          ...fS,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: vS,
          onReady: nS,
          lockable: NS
        }), (0, DS.jsxs)("div", {
          ref: jS,
          className: "HudFullScreenToolbar",
          style: null === PS ? void 0 : {
            left: PS.left,
            top: PS.top,
            transform: "none"
          },
          children: [(0, DS.jsx)("div", {
            ref: GS,
            className: "HudFullScreenControls",
            children: (0, DS.jsx)(JH, {
              selected: KS,
              layout: fS.layout.hudLayouts[fS.orientation],
              actionButtons: fS.actionButtons,
              keyNames: fS.keyNames,
              overlaps: wS,
              scaleCaps: ZS,
              onScale: HS,
              onHidden: gS,
              onReset: XS,
              locked: xS,
              lockable: NS,
              onLocked: qS,
              joystickFixed: fS.joystickFixed
            })
          }), (0, DS.jsx)(uS.g, {
            className: "HudFullScreenDone",
            onClick: IS,
            padDefaultFocus: !0,
            children: kS("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const Gg = SS => `${Math.round(100*SS)}%`;

    function Cg(SS) {
      let {
        info: HS,
        tuple: gS,
        props: bS
      } = SS;
      const {
        t: XS
      } = (0, tS.F)();
      return (0, DS.jsx)(aS.k, {
        name: XS("hudLayout:size"),
        min: vS.f,
        max: vS.e,
        step: ZH,
        initValue: gS[2],
        disabled: bS.locked.has(HS.id),
        selectableMax: bS.scaleCaps[HS.id],
        cappedNote: XS("hudLayout:sizeCapped"),
        format: Gg,
        onChange: SS => {
          bS.onScalePreview(HS.id, SS)
        },
        onChangeComplete: SS => {
          bS.onScale(HS.id, SS)
        }
      })
    }

    function ng(SS) {
      const {
        t: HS
      } = (0, tS.F)(), {
        present: gS,
        elements: XS,
        selected: xS,
        onSelect: NS,
        onHidden: uS,
        onReset: IS,
        note: fS,
        actionButtons: kS,
        keyNames: aS,
        sizeBesidePreview: KS,
        locked: jS,
        lockable: GS,
        onLocked: CS
      } = SS, {
        rowIconsOpen: nS,
        onRowIconsOpen: PS
      } = SS, QS = (0, bS.useRef)(null), wS = null !== xS && (nS || !(0, vS.H)(xS));
      return (0, bS.useEffect)((() => {
        var SS;
        const HS = xS ? null === (SS = QS.current) || void 0 === SS ? void 0 : SS.querySelector(`[data-hud-row="${xS}"]`) : null;
        if (!HS) return;
        const gS = HS.closest(".SettingsMenuRight"),
          tS = performance.now();
        let bS = null;
        const XS = () => {
            clearInterval(qS), null === gS || void 0 === gS || gS.removeEventListener("scroll", NS)
          },
          NS = () => {
            mH() || XS()
          },
          qS = setInterval((() => {
            const SS = performance.now();
            SS - tS > 1500 ? XS() : mH() ? bS = null : null === bS ? bS = SS : SS - bS >= 150 && (XS(), function(SS) {
              var HS;
              const gS = SS.closest(".SettingsMenuRight"),
                tS = null === (HS = SS.closest(".HudLayoutSettings")) || void 0 === HS ? void 0 : HS.querySelector(".HudLayoutPreviewBox");
              if (!gS || !tS) return;
              const bS = tS.getBoundingClientRect().bottom + 8,
                XS = gS.getBoundingClientRect().bottom - 8,
                xS = SS.getBoundingClientRect();
              xS.top < bS ? gS.scrollBy({
                top: xS.top - bS,
                behavior: "smooth"
              }) : xS.bottom > XS && gS.scrollBy({
                top: Math.min(xS.bottom - XS, xS.top - bS),
                behavior: "smooth"
              })
            }(HS))
          }), 50);
        return null === gS || void 0 === gS || gS.addEventListener("scroll", NS, {
          passive: !0
        }), XS
      }), [xS, wS]), (0, DS.jsx)("div", {
        ref: QS,
        className: "SettingBoxGroup HudElementList",
        children: VS.filter((SS => gS.has(SS.id) && (nS || !(0, vS.H)(SS.id)))).map((gS => {
          const tS = ((SS, HS) => {
              var gS;
              return null !== (gS = SS[HS]) && void 0 !== gS ? gS : vS.g
            })(XS, gS.id),
            bS = (0, vS.m)(XS, gS.id),
            QS = gS.id === xS,
            wS = gS.scale && !KS,
            hS = fS(gS.id, QS);
          return (0, DS.jsxs)("div", {
            "data-hud-row": gS.id,
            className: qS()("SettingBox HudElementRow", {
              Open: QS,
              Hidden: bS,
              Child: void 0 !== gS.parent
            }),
            children: [(0, DS.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, DS.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": wS ? QS : void 0,
                onClick: () => {
                  NS(gS.id)
                },
                children: [zS(gS.id, kS, HS, aS), gS.scale && 1 !== tS[2] && !(QS && wS) && (0, DS.jsx)("span", {
                  className: "HudElementRowSize",
                  children: Gg(tS[2])
                }), wS && (0, DS.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, DS.jsx)(MS, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: gS.id,
                actionButtons: kS,
                keyNames: aS,
                locked: jS.has(gS.id),
                lockable: GS(gS.id),
                onLocked: CS
              }), "menu" === gS.id && (0, DS.jsx)(FS, {
                className: "HudElementRowIcon",
                open: nS,
                name: zS(gS.id, kS, HS, aS),
                onToggle: PS
              }), "menu" !== gS.id && (0, DS.jsx)(sS, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: gS.id,
                elements: XS,
                actionButtons: kS,
                keyNames: aS,
                onHidden: uS
              }), (0, DS.jsx)(BS, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: jS.has(gS.id),
                id: gS.id,
                elements: XS,
                actionButtons: kS,
                keyNames: aS,
                onReset: IS
              })]
            }), QS && wS && (0, DS.jsx)(Cg, {
              info: gS,
              tuple: tS,
              props: SS
            }), hS && (0, DS.jsx)("div", {
              className: "HudElementNote",
              children: hS
            })]
          }, gS.id)
        }))
      })
    }

    function Pg(SS) {
      let {
        preview: HS,
        quick: gS,
        onFullScreen: XS,
        resting: xS,
        onSidePanel: NS
      } = SS;
      const {
        t: qS
      } = (0, tS.F)(), IS = fg(), fS = (0, bS.useRef)(null), {
        width: kS
      } = (0, HH.d)(fS), aS = Math.floor(IS.width * Math.min(1, HS.maxHeight / IS.height)), KS = kS - aS - 12, jS = KS >= 130, GS = kS > 0;
      (0, bS.useEffect)((() => {
        GS && NS(jS)
      }), [GS, jS, NS]);
      const CS = (0, gH.x)(jS ? aS : kS, IS.width, IS.height, HS.maxHeight),
        nS = xS ? (0, DS.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: IS.height * CS
          }
        }) : (0, DS.jsx)(kg, {
          ...HS
        }),
        PS = SS => (0, DS.jsxs)(uS.P, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: qS("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: XS,
          children: [(0, DS.jsx)(cS.d, {
            name: "expand"
          }), SS && (0, DS.jsx)("span", {
            children: qS("hudLayout:fullScreen")
          })]
        });
      return (0, DS.jsxs)("div", {
        ref: fS,
        className: "SettingBox HudLayoutPreviewBox",
        children: [kS > 0 && jS && (0, DS.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, DS.jsx)("div", {
            style: {
              width: aS
            },
            children: nS
          }), (0, DS.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, DS.jsx)(JH, {
              selected: HS.selected,
              ...gS,
              joystickFixed: HS.joystickFixed,
              extra: PS(!HS.selected || KS >= 278)
            })
          })]
        }), kS > 0 && !jS && (0, DS.jsxs)(DS.Fragment, {
          children: [nS, (0, DS.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: PS(!1)
          })]
        })]
      })
    }
    var Qg = gS(2589),
      Dg = gS(4529),
      wg = gS(2568),
      hg = gS(2530);
    const Zg = SS => {
      const HS = bH.o * ("sides" === SS ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(HS / 2))
    };

    function Jg(SS, HS, gS) {
      const [tS, bS, XS, xS] = SS;
      return "sides" === HS ? [tS, gS, XS, gS] : [gS, bS, gS, xS]
    }
    const Og = [null, null, null, null],
      dg = SS => `${SS}px`;

    function cg(SS) {
      let {
        safe: HS,
        onPreview: gS,
        onCommit: XS
      } = SS;
      const {
        t: xS
      } = (0, tS.F)(), NS = (0, bH.x)(null !== HS && void 0 !== HS ? HS : Og, window.innerWidth, window.innerHeight, UH(document).map(Math.round)), qS = (0, bS.useRef)(null !== HS && void 0 !== HS ? HS : Og);
      qS.current = null !== HS && void 0 !== HS ? HS : Og;
      const IS = SS => {
        const HS = Math.min(Zg(SS), "sides" === SS ? Math.max(NS[1], NS[3]) : Math.max(NS[0], NS[2]));
        return (0, DS.jsx)(aS.k, {
          name: xS("sides" === SS ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: Zg(SS),
          step: 2,
          initValue: HS,
          format: dg,
          onChange: HS => {
            gS(Jg(qS.current, SS, HS))
          },
          onChangeComplete: tS => {
            if (tS === HS) return void gS(qS.current);
            const bS = Jg(qS.current, SS, tS);
            qS.current = bS, XS(bS), (0, ZS.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: SS
            })
          }
        })
      };
      return (0, DS.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, DS.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, DS.jsx)("div", {
            children: xS("hudLayout:safeZone")
          }), (0, DS.jsx)(uS.P, {
            active: null === HS,
            pressed: null === HS,
            onClick: () => {
              XS(null)
            },
            children: xS("hudLayout:safeZoneAuto")
          })]
        }), IS("sides"), IS("ends")]
      })
    }

    function vg() {
      var SS, HS;
      const {
        t: gS
      } = (0, tS.F)(), XS = (0, vS.T)(), {
        clientEscMenuOptions: xS
      } = (0, IS.m)(["clientEscMenuOptions"]), NS = (0, Qg.k)(), qS = XS.hudLayouts[NS], [fS, kS] = (0, bS.useState)(null), {
        rowIconsOpen: KS,
        onRowIconsOpen: jS,
        select: GS
      } = function(SS, HS) {
        const [gS, tS] = (0, bS.useState)((() => vS.w.some((HS => void 0 !== SS.hudElements[HS] || SS.hudLocked.includes(HS))))), XS = (0, bS.useCallback)((SS => {
          HS(SS), (0, vS.H)(SS) && tS(!0)
        }), [HS]);
        return {
          rowIconsOpen: gS,
          onRowIconsOpen: tS,
          select: XS
        }
      }(qS, kS), [CS, nS] = (0, bS.useState)([]), [PS, QS] = (0, bS.useState)(null), [wS, hS] = hH(), OS = (0, bS.useCallback)(((SS, HS, gS) => {
        nS(HS), hS(gS);
        const tS = Object.keys(SS);
        QS((SS => (null === SS || void 0 === SS ? void 0 : SS.size) === tS.length && tS.every((HS => SS.has(HS))) ? SS : new Set(tS)))
      }), [hS]), {
        gameState: dS
      } = (0, IS.m)(["gameState"]), cS = (0, wg.h)(), ES = null !== (SS = null === (HS = (0, hg.o)()) || void 0 === HS ? void 0 : HS.icon) && void 0 !== SS ? SS : null, [LS] = (0, bS.useState)((() => "inGame" === dS ? function(SS, HS, gS) {
        const tS = SS.querySelector(".InGameUi .TouchComponentsButtons");
        if (!tS) return NH;
        const bS = {},
          XS = {};
        for (const IS of xH) {
          const SS = tS.querySelector(`.TouchSlot${IS} > .TouchKey`);
          if (SS) {
            var xS, NS;
            bS[IS] = SS.cloneNode(!0);
            const HS = (null !== (xS = null === (NS = SS.querySelector(".TouchKeyLabel")) || void 0 === NS ? void 0 : NS.textContent) && void 0 !== xS ? xS : "").split(/\s+/).filter((SS => !/[\d\xd7]/.test(SS))).join(" ");
            HS && (XS[IS] = HS)
          }
        }
        const qS = HS => {
            const gS = SS.querySelector(`.InGameUi ${HS}`);
            return null !== gS && !gS.classList.contains("Hidden")
          },
          uS = [...SS.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((SS => SS.cloneNode(!0)));
        return {
          faces: Object.keys(bS).length > 0 ? bS : null,
          names: XS,
          shop: qS(".TouchInventoryKey.ShopKey"),
          bag: qS(".TouchInventoryKey.BagKey"),
          items: uS.length > 0 ? uS : null,
          rowIcons: HS,
          pinnedIcon: gS
        }
      }(document, cS, ES) : NH)), YS = (0, bS.useRef)(null), AS = (0, bS.useRef)(null), yS = function(SS) {
        const [HS, gS] = (0, bS.useState)((() => .4 * window.innerHeight));
        return (0, bS.useLayoutEffect)((() => {
          var HS;
          const tS = null === (HS = SS.current) || void 0 === HS ? void 0 : HS.closest(".SettingsMenuRight");
          if (!tS) return;
          const bS = () => {
            const SS = tS.clientHeight < Eg ? .4 : .5;
            gS(Math.max(80, tS.clientHeight * SS - 24))
          };
          bS();
          const XS = new ResizeObserver(bS);
          return XS.observe(tS), () => {
            XS.disconnect()
          }
        }), [SS]), HS
      }(AS), WS = (0, Dg.n)(xS.joystickMode), zS = xS.touchActionButtons, pS = (0, bS.useMemo)((() => function(SS, HS) {
        const gS = {},
          tS = [
            ["extra", "X"],
            ["game", "G"]
          ];
        HS || tS.push(["attack", "P"]);
        for (const [bS, XS] of tS) {
          const HS = SS.names[XS];
          HS && (gS[bS] = HS)
        }
        return gS
      }(LS, zS)), [LS, zS]);
      (0, bS.useEffect)((() => {
        (0, ZS.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [sS, BS] = (0, bS.useState)(!1), [MS, FS] = (0, bS.useState)(!1), RS = (0, bS.useRef)(null);
      ag(RS, !MS);
      const [TS, oS] = (0, bS.useState)(!1), eS = (0, bS.useCallback)((() => {
        oS(!1)
      }), []), rS = (0, bS.useMemo)((() => new Set(qS.hudLocked)), [qS.hudLocked]), SH = SS => {
        var HS, gS;
        const tS = (0, vS.j)(),
          bS = SS(tS);
        (0, vS.O)(null !== (HS = null === (gS = YS.current) || void 0 === gS ? void 0 : gS.keepLocks(tS, bS)) && void 0 !== HS ? HS : bS)
      }, HH = (SS, HS) => {
        SH((gS => (0, vS.V)(gS, NS, SS, HS)))
      }, gH = (SS, HS, gS) => {
        HH(SS, {
          dx: HS,
          dy: gS
        }), (0, ZS.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${SS}`
        })
      }, bH = (SS, HS) => {
        SH((gS => (0, vS.W)(gS, NS, SS, HS)))
      }, XH = SS => {
        const HS = iS[SS];
        return (HS.move || HS.scale) && ("joystick" !== SS || WS) && !(0, tH.w)(SS, qS.hudElements[SS])
      }, qH = SS => iS[SS].move && ("joystick" !== SS || WS) && !rS.has(SS), uH = new Set(VS.map((SS => SS.id)).filter((SS => {
        const HS = (0, vS.H)(SS) && !LS.rowIcons.includes(SS);
        return null === PS || PS.has(SS) || (0, vS.m)(qS.hudElements, SS) && !HS
      }))), IH = {
        present: uH,
        actionButtons: zS,
        keyNames: pS,
        scaleCaps: wS,
        sizeBesidePreview: sS,
        elements: qS.hudElements,
        selected: fS,
        onSelect: GS,
        rowIconsOpen: KS,
        onRowIconsOpen: jS,
        onScalePreview: (SS, HS) => {
          var gS;
          null === (gS = YS.current) || void 0 === gS || gS.setScale(SS, HS)
        },
        onScale: (SS, HS) => {
          HH(SS, {
            scale: HS
          }), (0, ZS.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${SS}`
          })
        },
        onHidden: (SS, HS) => {
          HH(SS, {
            hidden: HS
          }), (0, ZS.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${HS?"hide":"show"}:${SS}`
          })
        },
        onReset: SS => {
          HH(SS, vS.b)
        },
        locked: rS,
        lockable: XH,
        onLocked: bH,
        note: (SS, HS) => {
          const tS = HS && CS.length > 0 ? gS("hudLayout:overlapsNote", {
            names: US(CS, zS, gS, pS)
          }) : null;
          return HS && lS(SS, WS) ? (0, DS.jsxs)(DS.Fragment, {
            children: [tS && (0, DS.jsx)("span", {
              children: tS
            }), (0, DS.jsx)("span", {
              children: gS("hudLayout:floatingJoystickNote")
            }), !sS && (0, DS.jsx)(mS, {})]
          }) : tS || (HS && rS.has(SS) ? gS("hudLayout:lockedNote") : HS && "cluster" === SS ? gS("hudLayout:clusterNote") : HS && "menu" === SS ? gS("hudLayout:menuNote") : HS && (0, tH.w)(SS, qS.hudElements[SS]) && qH(SS) ? gS("hudLayout:rowIconNote") : HS && "arrows" === SS ? gS("hudLayout:arrowsNote") : "inventory" === SS && (0, vS.m)(qS.hudElements, "inventory") ? gS("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, DS.jsxs)("div", {
        ref: AS,
        className: "HudLayoutSettings",
        children: [(0, DS.jsxs)("div", {
          ref: RS,
          className: "HudLayoutBody",
          children: [(0, DS.jsx)("div", {
            className: "HudLayoutOrientation",
            children: gS("landscape" === NS ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, DS.jsx)(Pg, {
            preview: {
              layout: XS,
              orientation: NS,
              selected: fS,
              onSelect: GS,
              onMove: gH,
              canMove: qH,
              actionButtons: zS,
              joystickFixed: WS,
              presence: LS,
              keyNames: pS,
              maxHeight: yS,
              apiRef: YS,
              onMeasured: OS,
              onReady: FS,
              lockable: XH
            },
            quick: {
              layout: qS,
              actionButtons: zS,
              keyNames: pS,
              scaleCaps: wS,
              overlaps: CS,
              onScale: IH.onScale,
              onHidden: IH.onHidden,
              onReset: IH.onReset,
              locked: rS,
              lockable: XH,
              onLocked: bH
            },
            onFullScreen: () => {
              oS(!0)
            },
            resting: TS,
            onSidePanel: BS
          }), TS && (0, DS.jsx)(jg, {
            layout: XS,
            orientation: NS,
            selected: fS,
            onSelect: GS,
            onMove: gH,
            canMove: qH,
            actionButtons: zS,
            joystickFixed: WS,
            presence: LS,
            keyNames: pS,
            onScale: IH.onScale,
            onHidden: IH.onHidden,
            onReset: IH.onReset,
            locked: rS,
            lockable: XH,
            onLocked: bH,
            apiRef: YS,
            onClose: eS
          }), (0, DS.jsx)(cg, {
            safe: qS.hudSafe,
            onCommit: SS => {
              SH((HS => (0, vS.X)(HS, NS, SS)))
            },
            onPreview: SS => {
              var HS;
              null === (HS = YS.current) || void 0 === HS || HS.setSafe(SS)
            }
          }), (0, DS.jsx)(aS.d, {
            label: gS("hudLayout:snapCentre"),
            checked: XS.hudSnapCentre,
            onClick: SS => {
              (0, vS.N)(SS)
            },
            circleInfoText: gS("hudLayout:snapCentreInfo")
          }), (0, DS.jsx)(ng, {
            ...IH
          }), (0, DS.jsx)(aS.g, {
            label: gS("hudLayout:shape"),
            options: vS.z.map((SS => ({
              value: SS,
              label: gS(`hudLayout:shape_${SS}`)
            }))),
            value: XS.hudShape,
            onChange: SS => {
              SH((HS => ({
                ...HS,
                hudShape: SS
              }))), (0, ZS.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: SS
              })
            }
          }), (0, DS.jsx)(aS.k, {
            name: gS("hudLayout:opacity"),
            min: vS.c,
            max: 1,
            step: .05,
            initValue: XS.hudKeyOpacity,
            format: SS => `${Math.round(100*SS)}%`,
            circleInfoText: gS("hudLayout:opacityInfo"),
            onChange: SS => {
              var HS;
              null === (HS = YS.current) || void 0 === HS || HS.setOpacity(SS)
            },
            onChangeComplete: SS => {
              (0, vS.M)(SS), (0, ZS.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, DS.jsx)(uS.L, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const SS = JS.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await SS.getResult() && (0, vS.K)()
            }()
          },
          children: gS("hudLayout:resetAll")
        })]
      })
    }
    const Eg = 350;
    const Lg = [function() {
      const {
        t: SS
      } = (0, tS.F)(), [HS, gS] = (0, bS.useState)(!1), XS = (0, bS.useRef)(null);
      return (0, bS.useEffect)((() => {
        var SS;
        HS && (null === (SS = XS.current) || void 0 === SS || SS.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [HS]), (0, DS.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, DS.jsx)(OS.e, {
          ref: XS,
          icon: "arrows-up-down-left-right",
          title: SS("hudLayout:title"),
          sub: SS("hudLayout:entrySub"),
          expanded: HS,
          onClick: () => {
            gS(!HS)
          }
        }), HS && (0, DS.jsx)(vg, {})]
      })
    }, function() {
      const {
        t: SS
      } = (0, tS.F)(), {
        joystickMode: HS,
        touchSpeedCurve: gS,
        autorun: bS,
        jumpLock: XS
      } = (0, IS.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, DS.jsxs)(DS.Fragment, {
        children: [(0, DS.jsx)(aS.g, {
          label: SS("settingsMenu:joystick"),
          options: QS.Ab.map((HS => ({
            value: HS,
            label: SS(wS[HS])
          }))),
          value: HS,
          onChange: SS => {
            IS.b.setClientEscMenuOptions({
              joystickMode: SS
            })
          },
          circleInfoText: SS("settingsMenu:joystickInfo")
        }), (0, DS.jsx)(aS.d, {
          label: SS("settingsMenu:preciseWalking"),
          checked: gS,
          onClick: SS => {
            IS.b.setClientEscMenuOptions({
              touchSpeedCurve: SS
            })
          },
          circleInfoText: SS("settingsMenu:preciseWalkingInfo")
        }), (0, DS.jsx)(aS.d, {
          label: SS("settingsMenu:autoRun"),
          checked: bS,
          onClick: SS => {
            IS.b.setClientEscMenuOptions({
              autorun: SS
            })
          },
          circleInfoText: SS("settingsMenu:autoRunInfo")
        }), (0, DS.jsx)(aS.d, {
          label: SS("settingsMenu:jumpLock"),
          checked: XS,
          onClick: SS => {
            IS.b.setClientEscMenuOptions({
              jumpLock: SS
            })
          },
          circleInfoText: SS("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, DS.jsx)(PS.b, {})
    }, function() {
      const {
        t: SS
      } = (0, tS.F)(), {
        clientEscMenuOptions: HS
      } = (0, IS.m)(["clientEscMenuOptions"]);
      return (0, hS.d)() ? (0, DS.jsx)(aS.d, {
        label: SS("settingsMenu:vibration"),
        checked: HS.vibration,
        onClick: SS => {
          IS.b.setClientEscMenuOptions({
            vibration: SS
          })
        },
        circleInfoText: SS("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Yg() {
      return (0, DS.jsx)(DS.Fragment, {
        children: Lg.map(((SS, HS) => (0, DS.jsx)(SS, {}, HS)))
      })
    }
    var Ag = gS(4498);

    function yg() {
      const {
        t: SS
      } = (0, tS.F)(), {
        isTouchScreen: HS,
        clientEscMenuOptions: gS,
        gameState: xS
      } = (0, IS.m)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), NS = (0, KS.i)("ezBridging"), qS = (0, KS.i)("ezTowering"), GS = "inGame" !== xS || !0 === NS, CS = (0, jS.g)() && ("inGame" !== xS || !0 === qS), [, PS] = (0, bS.useReducer)((SS => SS + 1), 0), QS = (0, nS.f)(), [wS, hS] = (0, bS.useState)(Ag.h);
      return (0, DS.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [QS && (0, DS.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, DS.jsx)("div", {
            children: SS("controller:settingsControlsNote")
          }), (0, DS.jsx)(uS.P, {
            onClick: () => {
              IS.b.set({
                openSettingsCategory: "controller"
              })
            },
            children: SS("controller:settingsOpenController")
          })]
        }), (0, fS.isTouchscreen)() && !(0, fS.isMobile)() ? (0, DS.jsx)(DS.Fragment, {
          children: (0, DS.jsx)(aS.d, {
            label: SS("settingsMenu:useTouchControls"),
            checked: wS,
            onClick: SS => {
              (0, Ag.d)(SS), hS(SS)
            }
          })
        }) : null, HS && (0, DS.jsx)(Yg, {}), GS && (0, DS.jsx)(aS.d, {
          label: SS("settingsMenu:ezBridging"),
          checked: gS.ezBridging,
          onClick: SS => {
            IS.b.setClientEscMenuOptions({
              ezBridging: SS
            })
          },
          circleInfoText: SS("settingsMenu:ezBridgingInfo")
        }), CS && (0, DS.jsx)(aS.d, {
          label: SS("settingsMenu:ezTowering"),
          checked: gS.ezTowering,
          onClick: SS => {
            IS.b.setClientEscMenuOptions({
              ezTowering: SS
            })
          },
          circleInfoText: SS("settingsMenu:ezToweringInfo")
        }), (0, DS.jsx)(aS.d, {
          label: SS("settingsMenu:crouchToggle"),
          checked: gS.crouchIsToggle,
          onClick: SS => {
            IS.b.setClientEscMenuOptions({
              crouchIsToggle: SS
            })
          },
          circleInfoText: SS("settingsMenu:crouchToggleInfo")
        }), (0, DS.jsx)(aS.d, {
          label: SS("settingsMenu:hideUiToggle"),
          checked: gS.hideUiIsToggle,
          onClick: SS => {
            IS.b.setClientEscMenuOptions({
              hideUiIsToggle: SS
            })
          },
          circleInfoText: SS("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, kS.c)() && (0, DS.jsx)(aS.k, {
          name: SS("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: gS.touchscreenSensitivity,
          onChange: SS => {
            IS.b.setClientEscMenuOptions({
              touchscreenSensitivity: SS
            })
          }
        }), !(0, fS.isMobile)() && (0, DS.jsx)(aS.k, {
          name: SS("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: gS.mouseSensitivity,
          onChange: SS => {
            IS.b.setClientEscMenuOptions({
              mouseSensitivity: SS
            })
          }
        }), !(0, fS.isMobile)() && (0, DS.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, DS.jsx)("div", {
            className: "SliderText",
            children: SS("settingsMenu:keyBindings")
          }), XS.f.map((HS => (0, DS.jsx)(Vg, {
            title: SS(HS.name.translationKey, HS.name.params),
            defaultOpen: XS.h.has(HS.id),
            children: HS.actions.map((SS => (0, DS.jsx)(ig, {
              noaAction: SS,
              forceUpdate: PS,
              clashesWith: HS.clashesWith,
              showPadGlyph: QS
            }, SS)))
          }, HS.name.translationKey))), (0, DS.jsx)(uS.L, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, XS.A)(), PS()
            },
            children: SS("controls:resetBindings")
          })]
        })]
      })
    }

    function Vg(SS) {
      let {
        title: HS,
        defaultOpen: gS,
        children: tS
      } = SS;
      const [XS, xS] = (0, bS.useState)(gS);
      return (0, DS.jsxs)("div", {
        className: qS()("ControlsSection", {
          Collapsed: !XS
        }),
        children: [(0, DS.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            xS(!XS)
          },
          children: [(0, DS.jsx)("div", {
            className: "ControlsSectionTitle",
            children: HS
          }), (0, DS.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), XS && (0, DS.jsx)("div", {
          className: "ControlsSectionRows",
          children: tS
        })]
      })
    }

    function ig(SS) {
      let {
        noaAction: HS,
        forceUpdate: gS,
        clashesWith: NS,
        showPadGlyph: IS
      } = SS;
      const {
        t: fS
      } = (0, tS.F)(), kS = (0, CS.b)(HS), [aS, KS] = (0, bS.useState)(!1), [jS, nS] = (0, bS.useState)("controls:clickToEnterNewBinding"), [PS, QS] = (0, bS.useState)(null), [wS, hS] = (0, bS.useState)(null), ZS = (0, bS.useRef)(null);
      (0, bS.useEffect)((() => {
        aS && ZS.current && ZS.current.focus()
      }), [aS]);
      const JS = XS.u[HS].filter((SS => xS.h[SS]));
      let OS = null;
      const dS = [],
        cS = NS.flatMap((SS => {
          var HS, gS;
          return null !== (HS = null === (gS = XS.f.find((HS => HS.id === SS))) || void 0 === gS ? void 0 : gS.actions) && void 0 !== HS ? HS : []
        }));
      for (const tS of cS) {
        if (tS === HS) continue;
        const SS = XS.u[tS];
        for (const HS of SS) JS.includes(HS) && dS.push(fS(XS.v[tS].translationKey, XS.v[tS].params))
      }
      dS.length > 0 && (OS = fS("controls:sharedBindingsWarning") + " ", OS += dS.join(", "));
      const vS = () => {
          KS(!1), QS(null), nS("controls:clickToEnterNewBinding"), hS(null)
        },
        ES = () => "BindingInput_" + HS;
      return (0, DS.jsxs)("div", {
        className: qS()("ControlRow", {
          WarningBorder: null !== OS
        }),
        children: [(0, DS.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, DS.jsxs)("div", {
            className: "ControlName",
            children: [fS(XS.v[HS].translationKey, XS.v[HS].params), IS && kS && (0, DS.jsx)(GS.d, {
              glyph: kS,
              className: "ControlPadGlyph"
            })]
          }), (0, DS.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, DS.jsxs)("div", {
              className: "ControlBindingsList",
              children: [JS.map((SS => (0, DS.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, DS.jsx)("div", {
                  children: (0, XS.o)(SS)
                }), (0, DS.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const tS = (0, XS.w)(HS, SS);
                    tS.isError() ? hS(tS.asError().message) : hS(null), gS()
                  },
                  children: "\xd7"
                })]
              }, SS))), !aS && (0, DS.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  KS(!0), hS(null)
                },
                children: (0, DS.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), aS && (0, DS.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, DS.jsxs)("div", {
                className: "InputContainer",
                children: [(0, DS.jsx)("div", {
                  className: "InputOverlay",
                  children: PS ? (0, XS.o)(PS) : (0, DS.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: fS(jS)
                  })
                }), (0, DS.jsx)("input", {
                  ref: ZS,
                  id: ES(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: SS => {
                    if ("Escape" === SS.code) return vS(), SS.preventDefault(), void SS.stopPropagation();
                    const HS = SS.code;
                    xS.b.includes(HS) ? (hS(null), QS(HS)) : (hS("controls:keyIsReserved"), QS(null)), SS.preventDefault(), SS.stopPropagation()
                  },
                  onMouseDown: SS => {
                    const HS = "Mouse" + (SS.button + 1);
                    document.activeElement && document.activeElement.id === ES() ? xS.b.includes(HS) ? (hS(null), QS(HS)) : (hS("controls:keyIsReserved"), QS(null)) : nS("controls:enterNewBinding"), SS.stopPropagation()
                  },
                  onBlur: () => {
                    nS("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, DS.jsx)(uS.g, {
                onPointerDown: SS => {
                  SS.preventDefault()
                },
                onClick: () => {
                  (0, XS.b)(HS, PS), gS(), vS()
                },
                className: "ControlBindingAddButton",
                disabled: null === PS,
                children: fS("general:add")
              }), (0, DS.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  vS()
                },
                children: "\xd7"
              })]
            }), wS && (0, DS.jsx)("div", {
              className: "ControlBindingError",
              children: fS(wS)
            })]
          })]
        }), OS && (0, DS.jsx)("div", {
          className: "ControlRowWarning",
          children: OS
        })]
      })
    }
  },
  9082: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(64),
      bS = gS(1127),
      XS = gS(1181);
    const xS = (0, tS.forwardRef)((function(SS, HS) {
      let {
        icon: gS,
        title: tS,
        sub: xS,
        expanded: NS,
        onClick: qS
      } = SS;
      return (0, XS.jsxs)("button", {
        ref: HS,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": NS,
        onClick: qS,
        children: [(0, XS.jsx)(bS.d, {
          name: gS,
          className: "FeaturedSettingsEntryIcon"
        }), (0, XS.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, XS.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: tS
          }), (0, XS.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: xS
          })]
        }), (0, XS.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  9088: (SS, HS, gS) => {
    function tS(SS) {
      return {
        x: (SS.left + SS.right) / 2,
        y: (SS.top + SS.bottom) / 2
      }
    }

    function bS(SS) {
      return 0 === SS.length ? null : SS.reduce(((SS, HS) => ({
        left: Math.min(SS.left, HS.left),
        top: Math.min(SS.top, HS.top),
        right: Math.max(SS.right, HS.right),
        bottom: Math.max(SS.bottom, HS.bottom)
      })))
    }

    function XS(SS, HS) {
      const gS = Math.max(0, (HS - (SS.right - SS.left)) / 2),
        tS = Math.max(0, (HS - (SS.bottom - SS.top)) / 2);
      return {
        left: SS.left - gS,
        top: SS.top - tS,
        right: SS.right + gS,
        bottom: SS.bottom + tS
      }
    }

    function xS(SS, HS) {
      return HS.x >= SS.left && HS.x <= SS.right && HS.y >= SS.top && HS.y <= SS.bottom
    }

    function NS(SS, HS, gS) {
      let bS = null,
        NS = 1 / 0;
      for (const {
          id: tS,
          box: XS
        }
        of HS) {
        const HS = (XS.right - XS.left) * (XS.bottom - XS.top);
        xS(XS, SS) && HS < NS && (NS = HS, bS = tS)
      }
      if (null !== bS) return bS;
      let qS = 1 / 0;
      for (const {
          id: uS,
          box: IS
        }
        of HS) {
        if (!xS(XS(IS, gS), SS)) continue;
        const HS = tS(IS),
          NS = Math.hypot(SS.x - HS.x, SS.y - HS.y);
        NS < qS && (qS = NS, bS = uS)
      }
      return bS
    }

    function qS(SS, HS, gS) {
      return {
        left: gS.left,
        top: gS.top,
        right: SS - gS.right,
        bottom: HS - gS.bottom
      }
    }

    function uS(SS, HS, gS, tS) {
      const bS = (SS, HS, gS) => Math.max(Math.min(HS, 0), Math.min(Math.max(gS, 0), SS));
      return {
        x: bS(HS, tS.left - SS.left, tS.right - SS.right),
        y: bS(gS, tS.top - SS.top, tS.bottom - SS.bottom)
      }
    }

    function IS(SS, HS, gS, tS, bS) {
      const XS = SS.dx * tS + HS,
        xS = SS.dy * bS + gS,
        NS = SS => Math.max(-1, Math.min(1, SS));
      return {
        dx: NS(XS / tS),
        dy: NS(xS / bS)
      }
    }

    function fS(SS, HS, gS, tS) {
      return HS <= 0 || gS <= 0 ? 1 : Math.max(.05, Math.min(1, SS / HS, tS / gS))
    }

    function kS(SS, HS, gS) {
      return Math.min(SS.right, HS.right) - Math.max(SS.left, HS.left) > gS && Math.min(SS.bottom, HS.bottom) - Math.max(SS.top, HS.top) > gS
    }

    function aS(SS, HS) {
      const gS = (SS, HS, gS, tS) => HS - SS > tS - gS ? gS - SS > HS - tS ? tS - HS : gS - SS : SS < gS ? gS - SS : HS > tS ? tS - HS : 0;
      return {
        x: gS(SS.left, SS.right, HS.left, HS.right),
        y: gS(SS.top, SS.bottom, HS.top, HS.bottom)
      }
    }

    function KS(SS, HS) {
      let {
        avoid: gS = null,
        bounds: tS = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, bS = 0, XS = 1 / 0;
      return SS.forEach(((SS, xS) => {
        const NS = HS.filter((HS => kS(SS, HS, 0))).length,
          qS = null !== tS && (SS.left < tS.left || SS.top < tS.top || SS.right > tS.right || SS.bottom > tS.bottom),
          uS = NS + (gS && kS(SS, gS, 0) ? 1e3 : 0) + (qS ? 1e6 : 0);
        uS < XS && (bS = xS, XS = uS)
      })), bS
    }
    gS.d(HS, {
      C: () => aS,
      G: () => bS,
      d: () => tS,
      g: () => xS,
      i: () => kS,
      k: () => uS,
      m: () => XS,
      p: () => KS,
      t: () => IS,
      v: () => NS,
      x: () => fS,
      z: () => qS
    })
  },
  8868: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS,
      f: () => tS
    });
    const tS = "controllerOpenKeyboard",
      bS = "controllerKeyboardVisible"
  },
  8870: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => CS,
      d: () => GS,
      f: () => IS,
      h: () => nS,
      l: () => PS,
      o: () => kS
    });
    var tS = gS(1758),
      bS = gS(1846);
    const XS = SS => SS >= 56320 && SS <= 57343,
      xS = SS => SS >= 55296 && SS <= 56319,
      NS = (SS, HS) => HS >= 2 && XS(SS.charCodeAt(HS - 1)) && xS(SS.charCodeAt(HS - 2)) ? HS - 2 : Math.max(0, HS - 1),
      qS = (SS, HS) => {
        let gS;
        var tS, bS;
        return gS = SS.start !== SS.end ? HS < 0 ? SS.start : SS.end : HS < 0 ? NS(SS.value, SS.start) : (tS = SS.value, (bS = SS.start) + 1 < tS.length && xS(tS.charCodeAt(bS)) && XS(tS.charCodeAt(bS + 1)) ? bS + 2 : Math.min(tS.length, bS + 1)), {
          value: SS.value,
          start: gS,
          end: gS
        }
      },
      uS = ["text", "search", "url", "email", "tel", "password", "number"],
      IS = SS => !(!(0, bS.d)(SS) || SS.isContentEditable || SS.hasAttribute("data-pad-no-osk")) && (SS instanceof HTMLTextAreaElement || SS instanceof HTMLInputElement && uS.includes(SS.type)),
      fS = SS => null !== SS.selectionStart,
      kS = SS => {
        var HS, gS;
        const {
          value: tS
        } = SS;
        return {
          value: tS,
          start: null !== (HS = SS.selectionStart) && void 0 !== HS ? HS : tS.length,
          end: null !== (gS = SS.selectionEnd) && void 0 !== gS ? gS : tS.length
        }
      },
      aS = (SS, HS, gS) => {
        if (SS.readOnly) return;
        const bS = SS instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(bS, "value").set.call(SS, HS.value), fS(SS) && SS.setSelectionRange(HS.start, HS.end), (0, tS.g)(SS, new InputEvent("input", {
          bubbles: !0,
          inputType: gS
        }))
      };
    let KS = !1;
    const jS = (SS, HS) => !!document.execCommand(SS, !1, HS) || (KS || (KS = !0, console.warn(`execCommand("${SS}") failed; the on-screen keyboard is setting the value directly`)), !1),
      GS = (SS, HS) => {
        jS("insertText", HS) || aS(SS, function(SS, HS) {
          let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const tS = SS.value.slice(0, SS.start),
            bS = SS.value.slice(SS.end);
          let XS = gS < 0 ? HS.length : Math.max(0, gS - tS.length - bS.length);
          XS > 0 && XS < HS.length && xS(HS.charCodeAt(XS - 1)) && XS--;
          const NS = HS.slice(0, XS),
            qS = tS.length + NS.length;
          return {
            value: tS + NS + bS,
            start: qS,
            end: qS
          }
        }(kS(SS), HS, SS.maxLength), "insertText")
      },
      CS = SS => {
        jS("delete") || aS(SS, (SS => {
          const HS = SS.start === SS.end ? NS(SS.value, SS.start) : SS.start;
          return {
            value: SS.value.slice(0, HS) + SS.value.slice(SS.end),
            start: HS,
            end: HS
          }
        })(kS(SS)), "deleteContentBackward")
      },
      nS = (SS, HS) => {
        if (!fS(SS)) return;
        const gS = qS(kS(SS), HS);
        SS.setSelectionRange(gS.start, gS.end)
      },
      PS = SS => {
        fS(SS) && 0 === SS.selectionStart && 0 === SS.selectionEnd && SS.setSelectionRange(SS.value.length, SS.value.length)
      }
  },
  9035: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS
    });
    var tS = gS(24),
      bS = gS(2236),
      XS = gS(1435),
      xS = gS(1471);
    const NS = async () => {
      if ((0, xS.h)()) {
        if (!0 !== await XS.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== tS.b.get("gameState")) return
      }(0, bS.d)()
    }
  },
  9043: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => qS,
      g: () => XS,
      h: () => xS,
      i: () => bS,
      k: () => NS
    });
    var tS = gS(2092);
    const bS = "controllerPadShopOpen",
      XS = SS => tS.i.includes(SS),
      xS = SS => Object.values(SS).some((SS => !1 !== SS.canBuy && !SS.isRewardedAd)),
      NS = (SS, HS, gS) => {
        var tS, bS, xS, NS;
        const qS = SS.filter((SS => !XS(SS))),
          uS = null !== HS && SS.includes(HS) ? HS : null;
        return null !== uS && !XS(uS) && gS(uS) ? uS : null !== (tS = null !== (bS = null !== (xS = null !== (NS = qS.find(gS)) && void 0 !== NS ? NS : qS[0]) && void 0 !== xS ? xS : uS) && void 0 !== bS ? bS : SS[0]) && void 0 !== tS ? tS : null
      },
      qS = SS => SS.userInput || SS.isRewardedAd || "boolean" === typeof SS.isSelected ? null : JSON.stringify([SS.image, SS.cost, SS.currency, SS.amount, SS.customTitle, SS.buyButtonText, SS.description, SS.canBuy])
  },
  9067: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => uS,
      f: () => IS
    });
    var tS = gS(64),
      bS = gS(1522),
      XS = gS(2128),
      xS = gS(1477),
      NS = gS(1502),
      qS = gS(1181);
    const uS = () => {
        const SS = (0, xS.s)();
        if ((0, tS.useEffect)((() => {
            (0, xS.i)()
          }), []), !SS) return null;
        const {
          ControllerCategory: HS
        } = SS;
        return (0, qS.jsx)(NS.c, {
          children: (0, qS.jsx)(HS, {})
        })
      },
      IS = () => {
        var SS;
        const HS = (0, xS.s)(),
          [, gS] = (0, tS.useReducer)((SS => SS + 1), 0);
        return (0, bS.g)(XS.e, gS), null !== (SS = null === HS || void 0 === HS ? void 0 : HS.hasActivePad()) && void 0 !== SS && SS
      }
  },
  8875: (SS, HS, gS) => {
    gS.d(HS, {
      B: () => kS,
      d: () => tS,
      h: () => uS,
      l: () => jS,
      p: () => fS,
      t: () => KS,
      u: () => XS,
      x: () => aS,
      y: () => xS
    });
    const tS = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      bS = (SS, HS) => {
        if ("function" === typeof SS.checkVisibility) return !SS.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: HS,
          checkOpacity: HS
        });
        const {
          visibility: gS
        } = getComputedStyle(SS);
        if ("hidden" === gS || "collapse" === gS) return !0;
        if (!HS) return !1;
        for (let tS = SS; tS; tS = tS.parentElement)
          if ("0" === getComputedStyle(tS).opacity) return !0;
        return !1
      },
      XS = SS => {
        if (!SS.isConnected || bS(SS, !0)) return !1;
        const HS = SS.getBoundingClientRect();
        return HS.width > 0 && HS.height > 0
      },
      xS = SS => !!SS.matches(":disabled, [aria-disabled='true']") || "button" === SS.getAttribute("role") && "-1" === SS.getAttribute("tabindex"),
      NS = SS => {
        var HS;
        if (SS.closest("[data-pad-ignore]")) return !0;
        return !!(null === (HS = SS.parentElement) || void 0 === HS ? void 0 : HS.closest("[data-pad-focusable]"))
      },
      qS = SS => {
        const HS = SS.querySelectorAll(tS);
        return SS.matches(tS) ? [SS, ...HS] : HS
      },
      uS = SS => {
        const HS = [];
        for (const gS of qS(SS)) !NS(gS) && XS(gS) && HS.push(gS);
        return HS
      },
      IS = new WeakMap,
      fS = SS => {
        const HS = IS.get(SS);
        if (HS && kS(HS, SS)) return !0;
        for (const gS of qS(SS))
          if (!NS(gS) && XS(gS)) return IS.set(SS, gS), !0;
        return IS.delete(SS), !1
      },
      kS = (SS, HS) => HS.contains(SS) && SS.matches(tS) && !NS(SS) && XS(SS),
      aS = (SS, HS) => kS(SS, HS) && !xS(SS),
      KS = SS => {
        for (const HS of SS.querySelectorAll("[data-pad-initial-area]"))
          if (!bS(HS, !1)) return !0;
        return !1
      },
      jS = SS => {
        const HS = HS => {
          let gS = 0;
          for (let tS = HS.parentElement; tS && tS !== SS; tS = tS.parentElement) gS++;
          return gS
        };
        return [...SS.querySelectorAll("[data-pad-initial-area]")].filter(XS).sort(((SS, gS) => HS(gS) - HS(SS)))
      }
  },
  8866: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => OS,
      E: () => wS,
      G: () => hS,
      H: () => GS,
      K: () => qS,
      O: () => IS,
      c: () => CS,
      d: () => JS,
      e: () => DS,
      g: () => QS,
      j: () => KS,
      k: () => jS,
      m: () => kS,
      q: () => aS,
      u: () => ZS,
      x: () => uS
    });
    var tS = gS(31),
      bS = gS(1758),
      XS = gS(8868),
      xS = gS(8870),
      NS = gS(8875);
    const qS = SS => (0, xS.f)(SS),
      uS = SS => {
        const HS = SS.getBoundingClientRect();
        return {
          x: HS.left + HS.width / 2,
          y: HS.top + HS.height / 2
        }
      },
      IS = (SS, HS, gS) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: SS.x,
        clientY: SS.y,
        screenX: SS.x,
        screenY: SS.y,
        button: HS,
        buttons: gS,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      fS = (SS, HS) => {
        (0, bS.g)(SS, HS)
      },
      kS = function(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const tS = 0 === gS ? 1 : 2;
        fS(SS, new PointerEvent("pointerdown", IS(HS, gS, tS))), fS(SS, new MouseEvent("mousedown", IS(HS, gS, tS)))
      },
      aS = function(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        fS(SS, new PointerEvent("pointerup", IS(HS, gS, 0))), fS(SS, new MouseEvent("mouseup", IS(HS, gS, 0)))
      },
      KS = function(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        kS(SS, HS, gS), aS(SS, HS, gS), fS(SS, 0 === gS ? new MouseEvent("click", IS(HS, 0, 0)) : new MouseEvent("contextmenu", IS(HS, 2, 0)))
      },
      jS = function(SS, HS, gS) {
        let {
          leaveBelow: tS = null,
          enterBelow: bS = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (SS !== HS) {
          if (null !== SS && void 0 !== SS && SS.isConnected) {
            const bS = {
              ...IS(gS, 0, 0),
              relatedTarget: HS
            };
            fS(SS, new PointerEvent("pointerout", bS)), fS(SS, new MouseEvent("mouseout", bS));
            const XS = SS => !!HS && SS.contains(HS) || !!tS && SS.contains(tS);
            for (let HS = SS; HS && !XS(HS); HS = HS.parentElement) fS(HS, new PointerEvent("pointerleave", {
              ...bS,
              bubbles: !1
            })), fS(HS, new MouseEvent("mouseleave", {
              ...bS,
              bubbles: !1
            }))
          }
          if (HS) {
            const tS = {
              ...IS(gS, 0, 0),
              relatedTarget: SS
            };
            fS(HS, new PointerEvent("pointerover", tS)), fS(HS, new MouseEvent("mouseover", tS));
            const XS = [],
              xS = HS => !(null === SS || void 0 === SS || !SS.isConnected) && HS.contains(SS) || !!bS && HS.contains(bS);
            for (let SS = HS; SS && !xS(SS); SS = SS.parentElement) XS.push(SS);
            for (const SS of XS.reverse()) fS(SS, new PointerEvent("pointerenter", {
              ...tS,
              bubbles: !1
            })), fS(SS, new MouseEvent("mouseenter", {
              ...tS,
              bubbles: !1
            }));
            fS(HS, new PointerEvent("pointermove", IS(gS, 0, 0))), fS(HS, new MouseEvent("mousemove", IS(gS, 0, 0)))
          }
        } else HS && (fS(HS, new PointerEvent("pointermove", IS(gS, 0, 0))), fS(HS, new MouseEvent("mousemove", IS(gS, 0, 0))))
      },
      GS = SS => {
        tS.k.cj(XS.f, SS)
      },
      CS = SS => {
        if (qS(SS)) return void GS(SS);
        const HS = SS.hasAttribute("data-pad-focusable") ? SS.querySelector("a[href]") : null,
          gS = null !== HS && void 0 !== HS ? HS : SS;
        KS(gS, uS(gS))
      },
      nS = ".Dropdown-root.is-open",
      PS = SS => {
        const HS = SS.querySelector(".Dropdown-control");
        return CS(HS), HS
      },
      QS = SS => {
        var HS;
        const gS = null !== (HS = SS.closest(nS)) && void 0 !== HS ? HS : SS.querySelector(nS);
        return gS ? PS(gS) : null
      },
      DS = SS => {
        for (const HS of document.querySelectorAll(nS)) HS.contains(SS) || PS(HS)
      },
      wS = SS => null !== SS.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      hS = SS => {
        const HS = SS ? document.elementFromPoint(SS.x, SS.y) : null;
        return !(null === HS || void 0 === HS || !HS.closest("[data-pad-repeat]"))
      },
      ZS = SS => {
        var HS;
        return null !== (HS = [...SS.querySelectorAll("[data-pad-back]")].find(NS.u)) && void 0 !== HS ? HS : null
      },
      JS = SS => {
        const HS = ZS(SS);
        return !!HS && (CS(HS), !0)
      },
      OS = SS => {
        var HS, gS, tS, bS;
        return null !== (HS = null !== (gS = null !== (tS = SS.getAttribute("data-pad-key")) && void 0 !== tS ? tS : SS.getAttribute("href")) && void 0 !== gS ? gS : null === (bS = SS.querySelector("a[href]")) || void 0 === bS ? void 0 : bS.getAttribute("href")) && void 0 !== HS ? HS : null
      }
  },
  9079: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => NS,
      g: () => qS
    });
    var tS = gS(24),
      bS = gS(1400),
      XS = gS(104);
    const xS = {
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

    function NS() {
      return (0, XS.isMobile)() && "function" === typeof navigator.vibrate
    }
    const qS = new class {
      constructor(SS) {
        this.deps = SS, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(SS, HS) {
        var gS;
        if (!this.deps.enabled()) return;
        const tS = xS[SS],
          bS = null !== HS && void 0 !== HS ? HS : tS.pattern;
        if (null === bS) return void console.warn("No vibration pattern for", SS);
        const XS = this.deps.now();
        XS - this.lastAnyAt < 40 && tS.priority < this.playingPriority || XS - (null !== (gS = this.lastAt.get(SS)) && void 0 !== gS ? gS : -1 / 0) < tS.minGapMs || XS < this.playingUntil && tS.priority < this.playingPriority || (this.lastAt.set(SS, XS), this.lastAnyAt = XS, this.playingUntil = XS + bS.reduce(((SS, HS) => SS + HS), 0), this.playingPriority = tS.priority, this.deps.vibrate(bS))
      }
    }({
      vibrate: SS => {
        navigator.vibrate([...SS])
      },
      now: () => performance.now(),
      enabled: () => NS() && tS.b.get("isTouchScreen") && tS.b.get("clientEscMenuOptions").vibration && !(0, bS.g)()
    })
  },
  8975: (SS, HS, gS) => {
    function tS(SS, HS) {
      return !SS.hidden && (HS || !SS.isRewardedAd)
    }

    function bS(SS) {
      return "object" === typeof SS ? SS.option : SS
    }

    function XS(SS, HS) {
      var gS;
      if ("dropdown" === (null === (gS = SS.userInput) || void 0 === gS ? void 0 : gS.type) && "object" === typeof SS.userInput.dropdownOptions[0]) {
        for (const gS of SS.userInput.dropdownOptions)
          if (bS(gS) === HS) return "object" === typeof gS ? gS.cost : SS.cost;
        console.error("Didn't find matching option for dropdown item. Item:", SS, "input:", HS)
      }
      return SS.cost
    }

    function xS(SS, HS, gS) {
      var tS;
      const bS = null !== (tS = gS.excludedPlayers) && void 0 !== tS ? tS : [HS];
      return SS.filter((SS => !bS.includes(SS)))
    }
    gS.d(HS, {
      b: () => XS,
      c: () => bS,
      e: () => xS,
      i: () => tS
    })
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);