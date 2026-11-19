export const id = 154;
export const ids = [154];
export const modules = {
  8574: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD
    });
    var ID = cD(16),
      pD = cD(1192),
      iD = cD(4770),
      fD = cD(1093);

    function bD(DD) {
      let {
        note: CD
      } = DD;
      const {
        t: cD
      } = (0, pD.F)(), {
        clientEscMenuOptions: bD
      } = (0, ID.o)(["clientEscMenuOptions"]);
      return (0, fD.jsx)(iD.e, {
        label: cD("touchSettings:actionButtons"),
        checked: bD.touchActionButtons,
        onClick: DD => {
          ID.d.setClientEscMenuOptions({
            touchActionButtons: DD
          })
        },
        circleInfoText: cD("touchSettings:actionButtonsInfo"),
        note: CD
      })
    }
  },
  8564: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => zc,
      h: () => Vc
    });
    var ID = cD(1192),
      pD = cD(53),
      iD = cD(1961),
      fD = cD(1969),
      bD = cD(1049),
      QD = cD.n(bD),
      wD = cD(1442),
      SD = cD(16),
      BD = cD(90),
      yD = cD(107),
      MD = cD(4770),
      tD = cD(2358),
      ZD = cD(300),
      oD = cD(1972),
      vD = cD(1979),
      ND = cD(8572),
      gD = cD(8574),
      XD = cD(312),
      mD = cD(1093);
    const nD = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var OD = cD(8583);
    var PD = cD(1471),
      HD = cD(1340),
      UD = cD(1064),
      xD = cD(1403),
      qD = cD(2372);
    const JD = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(qD.A.map((DD => [DD, "menu"])))
      },
      KD = DD => qD.w.filter((CD => JD[CD] === DD)),
      aD = new Set(KD("cluster")),
      VD = ["cluster"],
      zD = [...VD, ...qD.w.filter((DD => !VD.includes(DD) && !JD[DD]))],
      jD = zD.flatMap((DD => [DD, ...KD(DD)])).map((DD => ({
        id: DD,
        label: `hudLayout:${DD}`,
        ...qD.t[DD],
        parent: JD[DD]
      }))),
      lD = Object.fromEntries(jD.map((DD => [DD.id, DD]))),
      LD = "data-hud-el";

    function TD(DD, CD, cD, ID) {
      const pD = cD(function(DD, CD) {
          return "attack" !== DD || CD ? lD[DD].label : "hudLayout:attackContext"
        }(DD, CD)),
        iD = ID[DD];
      return iD ? cD("hudLayout:slotWithKey", {
        slot: pD,
        key: iD
      }) : pD
    }

    function GD(DD, CD, cD, ID) {
      return DD.map((DD => TD(DD, CD, cD, ID))).join(", ")
    }

    function RD(DD) {
      let {
        className: CD,
        keepPlace: cD
      } = DD;
      return cD ? (0, mD.jsx)("div", {
        className: QD()(CD, "Placeholder")
      }) : null
    }

    function kD(DD) {
      let {
        id: CD,
        elements: cD,
        actionButtons: pD,
        keyNames: iD,
        className: fD,
        keepPlace: bD,
        onHidden: QD
      } = DD;
      const {
        t: SD
      } = (0, ID.F)();
      if (!lD[CD].hide) return (0, mD.jsx)(RD, {
        className: fD,
        keepPlace: bD
      });
      const BD = (0, qD.s)(cD, CD);
      return (0, mD.jsx)(wD.P, {
        className: fD,
        ariaLabel: SD(BD ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: TD(CD, pD, SD, iD)
        }),
        pressed: !BD,
        onClick: () => {
          QD(CD, !BD)
        },
        children: (0, mD.jsx)(UD.c, {
          name: BD ? "eye-slash" : "eye"
        })
      })
    }

    function dD(DD) {
      var CD;
      let {
        id: cD,
        elements: pD,
        actionButtons: iD,
        keyNames: fD,
        className: bD,
        keepPlace: QD,
        onlyWhenMoved: SD,
        locked: BD,
        onReset: yD
      } = DD;
      const {
        t: MD
      } = (0, ID.F)(), tD = lD[cD], ZD = (0, qD.H)(null !== (CD = pD[cD]) && void 0 !== CD ? CD : qD.m);
      return !tD.move && !tD.scale || SD && ZD ? (0, mD.jsx)(RD, {
        className: bD,
        keepPlace: QD
      }) : (0, mD.jsx)(wD.P, {
        className: bD,
        disabled: ZD || BD,
        ariaLabel: MD("hudLayout:resetElement", {
          name: TD(cD, iD, MD, fD)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: cD
        },
        onClick: DD => {
          SD && ED(DD.currentTarget), yD(cD)
        },
        children: (0, mD.jsx)(UD.c, {
          name: "rotate-left"
        })
      })
    }

    function YD(DD) {
      let {
        id: CD,
        actionButtons: cD,
        keyNames: pD,
        className: iD,
        keepPlace: fD,
        locked: bD,
        lockable: QD,
        onLocked: SD
      } = DD;
      const {
        t: BD
      } = (0, ID.F)();
      return QD || bD ? (0, mD.jsx)(wD.P, {
        className: iD,
        ariaLabel: BD(bD ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: TD(CD, cD, BD, pD)
        }),
        pressed: bD,
        active: bD,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${bD?"unlock":"lock"}:${CD}`
        },
        onClick: () => {
          SD(CD, !bD)
        },
        children: (0, mD.jsx)(UD.c, {
          name: bD ? "lock" : "lock-open"
        })
      }) : (0, mD.jsx)(RD, {
        className: iD,
        keepPlace: fD
      })
    }

    function WD(DD) {
      let {
        className: CD,
        open: cD,
        name: pD,
        onToggle: iD
      } = DD;
      const {
        t: fD
      } = (0, ID.F)();
      return (0, mD.jsx)(wD.P, {
        className: CD,
        ariaLabel: fD(cD ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: pD
        }),
        pressed: cD,
        analyticsClick: {
          id: "hud_layout.children",
          value: cD ? "close" : "open"
        },
        onClick: () => {
          iD(!cD)
        },
        children: (0, mD.jsx)(UD.c, {
          name: cD ? "angle-up" : "angle-down"
        })
      })
    }

    function sD(DD, CD) {
      var cD;
      DD.contains(document.activeElement) && CD.focus({
        preventScroll: !0
      }), null === (cD = (0, xD.d)()) || void 0 === cD || cD.handOverPadFocus(DD, CD)
    }

    function ED(DD) {
      const CD = DD.closest("[data-hud-row]"),
        cD = null === CD || void 0 === CD ? void 0 : CD.querySelector(".HudElementRowName");
      return !(!CD || !cD) && (sD(CD, cD), !0)
    }
    const eD = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function uD(DD, CD) {
      return "joystick" === DD && !CD
    }

    function hD() {
      const {
        t: DD
      } = (0, ID.F)();
      return (0, mD.jsx)(wD.P, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: DD => {
          const CD = DD.currentTarget;
          if (!ED(CD)) {
            const DD = function(DD) {
              var CD, cD;
              const ID = [DD.previousElementSibling, DD.nextElementSibling].find((DD => DD instanceof HTMLElement && DD.matches(eD)));
              return null !== (CD = null !== ID && void 0 !== ID ? ID : null === (cD = DD.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === cD ? void 0 : cD.querySelector(`:is(${eD}):not(.HudFixJoystickButton)`)) && void 0 !== CD ? CD : null
            }(CD);
            DD && sD(CD, DD)
          }
          SD.d.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: DD("hudLayout:fixJoystick")
      })
    }
    var rD = cD(62),
      AD = cD(1280),
      FD = cD(1113),
      DC = cD(2621),
      CC = cD(8591),
      cC = cD(2381),
      IC = cD(2398),
      pC = cD(2946);
    const iC = ["J", "C", "A", "P", "U", "X", "G"],
      fC = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: qD.A
      });

    function bC(DD, CD) {
      DD.replaceChildren(...[...CD.childNodes].map((DD => DD.cloneNode(!0))))
    }
    const QC = DD => ({
      [LD]: DD
    });

    function wC(DD) {
      let {
        id: CD,
        slot: cD,
        icon: ID,
        label: iD,
        hidden: fD,
        className: bD,
        face: wD
      } = DD;
      const SD = (0, pD.useRef)(null);
      return (0, pD.useLayoutEffect)((() => {
        wD && SD.current && bC(SD.current, wD)
      }), [wD]), (0, mD.jsxs)("div", {
        className: QD()("TouchKeyHit", `TouchSlot${cD}`, bD, {
          HudPreviewGhost: fD.has(CD)
        }),
        ...QC(CD),
        children: [wD && (0, mD.jsx)("div", {
          ref: SD,
          className: QD()("TouchKey", {
            Labelled: wD.classList.contains("Labelled")
          })
        }), !wD && (0, mD.jsxs)("div", {
          className: QD()("TouchKey", {
            Labelled: void 0 !== iD
          }),
          children: [ID && (0, mD.jsx)(UD.c, {
            name: ID
          }), void 0 !== iD && (0, mD.jsx)("span", {
            className: "TouchKeyLabel",
            children: iD
          })]
        })]
      })
    }

    function SC(DD) {
      let {
        item: CD,
        selected: cD
      } = DD;
      const ID = (0, pD.useRef)(null);
      return (0, pD.useLayoutEffect)((() => {
        ID.current && bC(ID.current, CD)
      }), [CD]), (0, mD.jsx)("div", {
        ref: ID,
        className: QD()("InvenItem", {
          Selected: cD
        })
      })
    }
    const BC = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      yC = DD => void 0 === DD ? {} : {
        style: {
          "--parked": DD
        }
      };

    function MC(DD) {
      let {
        id: CD,
        hidden: cD,
        parked: ID,
        unslotted: pD = !1
      } = DD;
      return (0, mD.jsx)("div", {
        className: QD()("TopRightIcon", IC.s[CD], {
          HudPreviewGhost: cD.has(CD),
          [cC.e]: void 0 !== ID,
          [cC.g]: pD
        }),
        ...yC(ID),
        children: (0, mD.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...QC(CD),
          children: (0, mD.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, mD.jsx)(UD.c, {
              name: BC[CD]
            })
          })
        })
      })
    }

    function tC(DD) {
      let {
        portraitPhone: CD,
        icons: cD,
        hidden: ID,
        moved: pD,
        trayState: iD
      } = DD;
      const fD = CD ? (0, cC.B)(cD) : [],
        bD = cD.filter((DD => "settings" === DD)),
        wD = cD.filter((DD => "settings" !== DD && !fD.includes(DD))).reverse(),
        SD = fD.length > 0 && "gone" === iD,
        BD = [...bD, ...SD ? ["tray"] : [], ...wD].filter((DD => "tray" === DD || ID.has(DD) && !pD.has(DD))),
        yD = DD => {
          const CD = BD.indexOf(DD);
          return CD < 0 ? void 0 : CD
        },
        MD = (DD, CD) => (0, mD.jsx)(MC, {
          id: DD,
          hidden: ID,
          parked: CD ? yD(DD) : void 0,
          unslotted: CD && ID.has(DD) && pD.has(DD)
        }, DD);
      return (0, mD.jsxs)("div", {
        className: QD()("TopRightIcons TouchInGame", {
          Column: CD
        }),
        children: [bD.map((DD => MD(DD, !0))), fD.length > 0 && (0, mD.jsxs)("div", {
          className: QD()("TopRightIcon TopRightTrayToggle Open", {
            [cC.e]: SD
          }),
          ...yC(yD("tray")),
          children: [(0, mD.jsx)("div", {
            className: QD()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== iD
            }),
            children: (0, mD.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, mD.jsx)(UD.c, {
                name: "ellipsis"
              })
            })
          }), (0, mD.jsx)("div", {
            className: "TopRightTray",
            children: fD.map((DD => MD(DD, !1)))
          })]
        }), wD.map((DD => MD(DD, !0)))]
      })
    }

    function ZC(DD) {
      let {
        next: CD,
        hidden: cD
      } = DD;
      return (0, mD.jsx)("div", {
        className: QD()("HotBarArrow", CD ? "Next" : "Previous", {
          HudPreviewGhost: cD
        }),
        ...QC("arrows"),
        children: (0, mD.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, mD.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, mD.jsx)(UD.c, {
              name: CD ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function oC() {
      return (0, mD.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, mD.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, mD.jsx)("div", {
            className: "SocialBar",
            children: (0, mD.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, mD.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, mD.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, mD.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, mD.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, mD.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, mD.jsx)(UD.c, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, mD.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, mD.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, mD.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, mD.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, mD.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, mD.jsx)(UD.c, {
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
    const vC = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      NC = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      gC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      XC = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function mC(DD) {
      let {
        presence: CD,
        portraitPhone: cD,
        hidden: pD,
        actionButtons: iD,
        joystickFixed: fD,
        keysAbove: bD,
        auraBar: wD,
        trayState: SD,
        moved: yD
      } = DD;
      const {
        t: MD
      } = (0, ID.F)(), {
        faces: tD,
        items: ZD
      } = CD, oD = DD => ({
        HudPreviewGhost: pD.has(DD)
      });
      return (0, mD.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, mD.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, mD.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, mD.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, mD.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, mD.jsx)("div", {
              className: "InGameHeaderGameName",
              children: MD("hudLayout:previewGameName")
            })]
          })
        }), (0, mD.jsx)("div", {
          className: "TopLeftElements",
          children: (0, mD.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, mD.jsxs)("div", {
              className: "Chat",
              children: [(0, mD.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [MD("hudLayout:previewChatLine"), MD("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), MD("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((DD => (0, mD.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, mD.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, mD.jsx)("div", {
                      className: "IndividualText",
                      children: DD
                    })
                  })
                }, DD)))
              }), (0, mD.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: QD()("ChatIconWrapper SmallTextLight", oD("chat")),
                ...QC("chat"),
                children: (0, mD.jsx)(UD.c, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, mD.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, mD.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, mD.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, mD.jsx)("div", {
                className: "TopRightIconsContainer",
                ...QC("menu"),
                children: (0, mD.jsx)(tC, {
                  portraitPhone: cD,
                  icons: CD.rowIcons,
                  hidden: pD,
                  trayState: SD,
                  moved: yD
                })
              })
            }), BD.featureFlags.useSocialFeatures && (0, mD.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, mD.jsx)(oC, {})
            })]
          })
        }), (0, mD.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, mD.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, mD.jsxs)("div", {
            className: "TouchInteractKey",
            ...QC("interact"),
            children: [(0, mD.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, mD.jsx)(UD.c, {
                name: "hand-back-point-up"
              })
            }), (0, mD.jsx)("div", {
              children: MD("hudLayout:previewInteract")
            })]
          })
        }), (0, mD.jsx)("div", {
          className: "BottomCentre",
          children: (0, mD.jsxs)("div", {
            className: "BottomElements",
            children: [(0, mD.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, mD.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, mD.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...QC("hotbar"),
                children: (0, mD.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, mD.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, mD.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, mD.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, mD.jsx)(UD.c, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), wD && (0, mD.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, mD.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, mD.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, pC.g)("glint"),
                    alt: ""
                  }), (0, mD.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, mD.jsx)("div", {
                  className: "AuraBar",
                  children: (0, mD.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, mD.jsx)("div", {
                className: "HotBarRow",
                children: (0, mD.jsx)("div", {
                  className: QD()("HotBarContainer Touch", {
                    KeysAbove: bD
                  }),
                  children: (0, mD.jsxs)("div", {
                    className: "HotBar",
                    ...QC("hotbar"),
                    children: [(0, mD.jsxs)("div", {
                      className: QD()("TouchInventoryKeys", {
                        NoAuraBar: !wD
                      }),
                      children: [(0, mD.jsx)("div", {
                        className: QD()("TouchInventoryKey ShopKey", oD("inventory"), {
                          Hidden: !CD.shop
                        }),
                        ...QC("inventory"),
                        children: (0, mD.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, mD.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, mD.jsx)(UD.c, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, mD.jsx)("div", {
                        className: QD()("TouchInventoryKey BagKey", oD("inventory"), {
                          Hidden: !CD.bag
                        }),
                        ...QC("inventory"),
                        children: (0, mD.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, mD.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, mD.jsx)(UD.c, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, mD.jsx)(ZC, {
                      next: !1,
                      hidden: pD.has("arrows")
                    }), (0, mD.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== ZD && ZD.map(((DD, CD) => (0, mD.jsx)(SC, {
                        item: DD,
                        selected: DD.classList.contains("Selected")
                      }, CD))), null === ZD && gC.map((DD => {
                        const CD = XC[DD];
                        return (0, mD.jsx)("div", {
                          className: QD()("InvenItem", {
                            Selected: 0 === DD
                          }),
                          children: CD && (0, mD.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, mD.jsx)(UD.c, {
                              name: CD
                            })
                          })
                        }, DD)
                      }))]
                    }), (0, mD.jsx)(ZC, {
                      next: !0,
                      hidden: pD.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, mD.jsx)("div", {
              className: "BottomRightElements",
              children: (0, mD.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== tD && iC.map((DD => {
                  const CD = tD[DD];
                  return CD && (0, mD.jsx)(wC, {
                    id: vC[DD],
                    slot: DD,
                    face: CD,
                    className: NC[DD],
                    hidden: pD
                  }, DD)
                })), null === tD && (0, mD.jsxs)(mD.Fragment, {
                  children: [(0, mD.jsx)(wC, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: pD
                  }), (0, mD.jsx)(wC, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: pD
                  }), iD && (0, mD.jsxs)(mD.Fragment, {
                    children: [(0, mD.jsx)(wC, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: pD
                    }), (0, mD.jsx)(wC, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: pD
                    })]
                  }), !iD && (0, mD.jsx)(wC, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: MD("touchKeys:scope"),
                    hidden: pD
                  }), (0, mD.jsx)(wC, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: MD("touchKeys:fly"),
                    hidden: pD
                  }), (0, mD.jsx)(wC, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: pD
                  })]
                })]
              })
            })]
          })
        }), (0, mD.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, mD.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, mD.jsxs)("div", {
              className: QD()("Joystick Resting HudPreviewJoystick", {
                Floating: !fD
              }),
              ...QC("joystick"),
              children: [(0, mD.jsx)("div", {
                className: "JoystickBase"
              }), (0, mD.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function nC() {
      const [DD, CD] = (0, pD.useState)({}), cD = (0, pD.useCallback)((DD => {
        CD((CD => [...new Set([...Object.keys(CD), ...Object.keys(DD)])].every((cD => CD[cD] === DD[cD])) ? CD : DD))
      }), []);
      return [DD, cD]
    }
    const OC = .05;

    function PC(DD) {
      var CD;
      let {
        selected: cD,
        layout: pD,
        actionButtons: iD,
        keyNames: fD,
        overlaps: bD,
        scaleCaps: SD,
        joystickFixed: BD,
        onScale: yD,
        onHidden: MD,
        onReset: tD,
        locked: ZD,
        lockable: oD,
        onLocked: vD,
        extra: ND
      } = DD;
      const {
        t: gD
      } = (0, ID.F)(), XD = cD ? lD[cD] : null, nD = null !== cD && ZD.has(cD), OD = (cD && pD.hudElements[cD] || qD.m)[2], PD = null !== (CD = cD && SD[cD]) && void 0 !== CD ? CD : qD.e, HD = DD => {
        cD && yD(cD, Math.min(PD, Math.round(100 * (OD + .1 * DD)) / 100))
      };
      return (0, mD.jsxs)(mD.Fragment, {
        children: [(0, mD.jsxs)("div", {
          className: QD()("HudQuickName SmallTextBold", {
            Overlap: bD.length > 0
          }),
          children: [bD.length > 0 && (0, mD.jsx)(UD.c, {
            name: "triangle-exclamation"
          }), XD ? TD(XD.id, iD, gD, fD) : gD("hudLayout:fullScreenHint"), bD.length > 0 && (0, mD.jsx)("span", {
            className: "HudQuickOverlap",
            children: gD("hudLayout:overlapsShort", {
              names: GD(bD, iD, gD, fD)
            })
          })]
        }), (null === XD || void 0 === XD ? void 0 : XD.scale) && (0, mD.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, mD.jsx)(wD.P, {
            disabled: nD || OD <= qD.h,
            ariaLabel: gD("hudLayout:smaller"),
            onClick: () => {
              HD(-1)
            },
            children: (0, mD.jsx)(UD.c, {
              name: "minus"
            })
          }), (0, mD.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*OD)}%`
          }), (0, mD.jsx)(wD.P, {
            disabled: nD || OD >= PD,
            ariaLabel: gD("hudLayout:larger"),
            onClick: () => {
              HD(1)
            },
            children: (0, mD.jsx)(UD.c, {
              name: "plus"
            })
          })]
        }), (XD || ND) && (0, mD.jsxs)("div", {
          className: "HudQuickActions",
          children: [XD && (0, mD.jsxs)(mD.Fragment, {
            children: [(0, mD.jsx)(YD, {
              id: XD.id,
              actionButtons: iD,
              keyNames: fD,
              locked: nD,
              lockable: oD(XD.id),
              onLocked: vD
            }), (0, mD.jsx)(kD, {
              id: XD.id,
              elements: pD.hudElements,
              actionButtons: iD,
              keyNames: fD,
              onHidden: MD
            }), (0, mD.jsx)(dD, {
              id: XD.id,
              elements: pD.hudElements,
              actionButtons: iD,
              keyNames: fD,
              locked: nD,
              onReset: tD
            }), uD(XD.id, BD) && (0, mD.jsx)(hD, {})]
          }), ND]
        })]
      })
    }
    var HC = cD(1108),
      UC = cD(4209);
    const xC = "HudPreviewDoc",
      qC = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      JC = new Set([xC, ...Object.values(qC)]),
      KC = new Set(qD.w.map(IC.J)),
      aC = new Set(IC.k),
      VC = 'style, link[rel="stylesheet"]';

    function zC(DD, CD, cD, ID) {
      const pD = new Map,
        iD = new Set,
        fD = new URL(DD.baseURI).origin,
        bD = CD => {
          var cD;
          if ("LINK" !== CD.nodeName) return !0;
          const ID = null === (cD = CD.getAttribute("href")) || void 0 === cD ? void 0 : cD.trim();
          if (!ID) return !1;
          try {
            return new URL(ID, DD.baseURI).origin === fD
          } catch {
            return !1
          }
        };
      let QD = null;
      const wD = () => {
          QD !== (0 === iD.size) && (QD = 0 === iD.size, null === ID || void 0 === ID || ID(QD))
        },
        SD = DD => {
          const CD = DD.cloneNode(!0);
          if ("LINK" === CD.tagName) {
            iD.add(CD);
            const DD = () => {
              iD.delete(CD), wD()
            };
            CD.addEventListener("load", DD), CD.addEventListener("error", DD), cD && CD.addEventListener("load", cD)
          }
          return CD
        },
        BD = () => {
          const ID = function(DD) {
              const CD = [...DD.body.children].filter((DD => DD.matches(VC)));
              return [...DD.head.querySelectorAll(VC), ...CD]
            }(DD).filter(bD),
            fD = new Set(ID);
          for (const [DD, CD] of pD) fD.has(DD) || (CD.remove(), pD.delete(DD), iD.delete(CD));
          let QD = null;
          for (let DD = ID.length - 1; DD >= 0; DD--) {
            const iD = ID[DD];
            let fD = pD.get(iD);
            fD ? "STYLE" === iD.tagName && fD.textContent !== iD.textContent && (fD.textContent = iD.textContent, null === cD || void 0 === cD || cD()) : (fD = SD(iD), pD.set(iD, fD), CD.head.insertBefore(fD, QD)), QD = fD
          }
          wD()
        };
      BD();
      const yD = new MutationObserver(BD);
      return yD.observe(DD.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), yD.observe(DD.body, {
        childList: !0
      }), () => {
        yD.disconnect()
      }
    }

    function jC(DD, CD, cD) {
      let {
        keysAbove: ID
      } = cD;
      const pD = [...DD.documentElement.classList].filter((DD => !JC.has(DD) && !aC.has(DD))),
        iD = [...CD.documentElement.classList].filter((DD => aC.has(DD))),
        fD = [xC, qC.hotbar, qC.hasShop, qC.hasBag];
      ID && fD.push(qC.keysAbove), CD.documentElement.className = [...pD, ...fD, ...iD].join(" ")
    }
    const lC = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function LC(DD, CD, cD, ID, pD) {
      const iD = (0, qD.x)(cD, ID, "joystick"),
        fD = (0, IC.N)((0, IC.$)(cD, ID, pD), ID),
        bD = fD.classes.filter((DD => !KC.has(DD))),
        QD = CD.documentElement;
      (0, IC.fb)({
        ...fD,
        classes: bD
      }, {
        vars: QD,
        safe: QD,
        classes: QD
      });
      const wD = (0, IC.U)(cD.hudLayouts[ID].hudSafe, window.innerWidth, window.innerHeight, TC(), (0, IC.cb)(CD));
      QD.style.setProperty("--preview-joystick-shift-left", `${wD[3]}px`), QD.style.setProperty("--preview-joystick-shift-bottom", `${wD[2]}px`), QD.style.setProperty("--preview-joystick-scale", String(iD[2])), (0, UC.e)(QD, CD, cD, ID);
      for (const SD of lC) QD.style.setProperty(SD, DD.documentElement.style.getPropertyValue(SD) || "0px")
    }

    function TC() {
      return (0, IC.Y)(SD.d.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function GC(DD) {
      return (0, IC.C)(TC(), (0, IC.cb)(DD))
    }

    function RC(DD, CD, cD) {
      const ID = DD.documentElement.style,
        pD = (0, IC.W)(CD),
        iD = ID.getPropertyValue(pD);
      try {
        return cD((DD => {
          ID.setProperty(pD, String(DD))
        }))
      } finally {
        "" === iD ? ID.removeProperty(pD) : ID.setProperty(pD, iD)
      }
    }

    function kC(DD, CD) {
      const [cD, ID] = RC(DD, "hotbar", (CD => {
        const cD = cD => {
          var ID, pD;
          return CD(cD), null !== (ID = null === (pD = DD.querySelector(".HotBarGameItemsContainer")) || void 0 === pD ? void 0 : pD.getBoundingClientRect().width) && void 0 !== ID ? ID : 0
        };
        return [cD(1), cD(qD.e)]
      }));
      return cD <= 0 ? qD.e : Math.min(qD.e, Math.max(1, Math.floor(ID / cD / CD + 1e-6) * CD))
    }
    const dC = 3,
      YC = .5,
      WC = DD => DD.right - DD.left;
    const sC = (DD, CD) => Math.abs((0, CC.c)(DD).x - (0, CC.c)(CD).x) + Math.abs((0, CC.c)(DD).y - (0, CC.c)(CD).y) + Math.abs(WC(DD) - WC(CD));

    function EC(DD, CD, cD, ID, pD) {
      let {
        canKeep: iD = () => !0,
        passes: fD = dC,
        before: bD,
        keysAboveOf: QD
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const wD = void 0 !== QD && QD(DD) !== QD(CD),
        SD = CD.hudLayouts[cD].hudLocked.filter((DD => iD(DD) && !(wD && "inventory" === DD))),
        BD = new Set(SD);
      if (0 === BD.size) return CD;
      const yD = [...aD].filter((ID => !SD.includes(ID) && (0, qD.x)(DD, cD, ID).join() === (0, qD.x)(CD, cD, ID).join())),
        MD = DD => {
          const CD = (0, CC.J)(yD.flatMap((CD => DD[CD] ? [DD[CD]] : [])));
          return {
            ...DD,
            cluster: null !== CD && void 0 !== CD ? CD : void 0
          }
        },
        tD = DD => {
          const CD = pD(DD);
          return CD && MD(CD)
        },
        ZD = bD ? MD(bD) : tD(DD);
      let oD = ZD && tD(CD);
      if (!ZD || !oD) return CD;
      let vD = CD;
      for (let ND = 0; ND < fD && BD.size > 0; ND++) {
        const DD = new Map;
        for (const CD of BD) {
          const pD = ZD[CD],
            iD = oD[CD],
            fD = pD && iD ? eC(CD, (0, qD.x)(vD, cD, CD), pD, iD, ID) : null;
          fD ? DD.set(CD, fD) : BD.delete(CD)
        }
        if (0 === DD.size) break;
        let pD = vD;
        for (const [CD, ID] of DD) pD = (0, qD.Z)(pD, cD, CD, ID);
        const iD = tD(pD);
        if (!iD) return CD;
        let fD = vD;
        for (const [CD, ID] of DD) {
          const DD = iD[CD];
          DD && sC(ZD[CD], DD) < sC(ZD[CD], oD[CD]) - YC ? fD = (0, qD.Z)(fD, cD, CD, ID) : BD.delete(CD)
        }
        if (fD === vD) break;
        const bD = [...DD.keys()].every((DD => BD.has(DD)));
        if (vD = fD, oD = bD ? iD : tD(vD), !oD) return CD
      }
      return pD(vD), vD
    }

    function eC(DD, CD, cD, ID, pD) {
      let [iD, fD, bD] = CD;
      const QD = qD.t[DD],
        wD = {};
      QD.scale && WC(ID) > 0 && Math.abs(WC(cD) - WC(ID)) > YC && (wD.scale = Math.max(qD.h, Math.min(qD.e, bD * WC(cD) / WC(ID))));
      const SD = (0, CC.c)(cD).x - (0, CC.c)(ID).x,
        BD = (0, CC.c)(cD).y - (0, CC.c)(ID).y;
      return QD.move && (Math.abs(SD) > YC || Math.abs(BD) > YC) && (wD.dx = iD + SD / pD.width, wD.dy = fD + BD / pD.height), void 0 === wD.scale && void 0 === wD.dx ? null : wD
    }
    let uC = 0;

    function hC() {
      return uC > 0
    }
    const rC = DD => 0 === DD.dx && 0 === DD.dy,
      AC = .001,
      FC = DD => Math.abs(DD.dx) >= 5e-4 || Math.abs(DD.dy) >= 5e-4 ? DD : {
        dx: DD.dx,
        dy: DD.dy < 0 ? -.001 : AC
      };

    function Dc(DD) {
      let {
        preview: CD,
        stageRef: cD,
        ringRef: ID,
        centreLineRef: iD,
        snapCentre: fD,
        ready: bD,
        measure: QD,
        k: wD,
        viewport: SD,
        boxes: BD,
        pieces: yD,
        selected: MD,
        insets: tD,
        layout: ZD,
        canMove: oD,
        onSelect: vD,
        onMove: ND
      } = DD;
      const gD = (0, pD.useRef)(null),
        XD = (0, pD.useCallback)((() => null !== gD.current), []),
        mD = (DD, CD) => {
          if (!CD) return null;
          const cD = (0, CC.c)(DD.origin),
            ID = (0, CC.c)(CD),
            pD = (DD.to.dx - DD.from.dx) * SD.width,
            iD = (DD.to.dy - DD.from.dy) * SD.height,
            fD = CD.right - CD.left,
            bD = CD.bottom - CD.top;
          return {
            skew: {
              x: ID.x - cD.x - pD,
              y: ID.y - cD.y - iD
            },
            box: {
              left: cD.x - fD / 2,
              top: cD.y - bD / 2,
              right: cD.x + fD / 2,
              bottom: cD.y + bD / 2
            }
          }
        },
        nD = (DD, cD) => {
          var pD;
          const fD = gD.current;
          if (!fD || fD.pointerId !== DD.pointerId) return;
          gD.current = null, null === (pD = iD.current) || void 0 === pD || pD.classList.remove("Shown", "Snapped");
          const bD = ID.current;
          if (bD && null !== fD.ringStyle && bD.setAttribute("style", fD.ringStyle), cD && fD.moved) {
            const DD = rC(fD.to) ? null : QD(fD.id),
              CD = DD ? (0, CC.I)(DD, (0, CC.F)(SD.width, SD.height, tD)) : {
                x: 0,
                y: 0
              },
              cD = {
                dx: fD.to.dx + CD.x / SD.width,
                dy: fD.to.dy + CD.y / SD.height
              },
              ID = rC(fD.to) ? cD : FC(cD);
            ND(fD.id, ID.dx, ID.dy)
          } else CD(fD.id, null), cD && fD.tapPick && vD(fD.tapPick)
        };
      return {
        busy: XD,
        handlers: {
          onPointerDown: DD => {
            var CD;
            if (!bD || gD.current || !DD.target.closest(".HudPreviewHandle")) return;
            const ID = cD.current.getBoundingClientRect(),
              pD = {
                x: (DD.clientX - ID.left) / wD,
                y: (DD.clientY - ID.top) / wD
              },
              iD = (0, CC.y)(pD, yD, 40 / wD),
              fD = "cluster" === MD && void 0 !== BD.cluster && null !== (0, CC.y)(pD, [{
                id: "cluster",
                box: BD.cluster
              }], 40 / wD),
              QD = "menu" === MD && void 0 !== BD.menu && (0, CC.f)(BD.menu, pD) && ("menu" === iD || null !== iD && (0, cC.y)(iD, ZD.hudElements[iD])),
              SD = fD ? "cluster" : QD ? "menu" : null,
              tD = null !== SD,
              ND = null !== SD && void 0 !== SD ? SD : iD;
            if (!ND) return;
            if (function(DD) {
                uC++;
                const CD = cD => {
                  cD.pointerId === DD && (uC = Math.max(0, uC - 1), window.removeEventListener("pointerup", CD, !0), window.removeEventListener("pointercancel", CD, !0))
                };
                window.addEventListener("pointerup", CD, !0), window.addEventListener("pointercancel", CD, !0)
              }(DD.pointerId), !oD(ND)) return void vD(tD && iD ? iD : ND);
            vD(ND);
            const [XD, mD] = null !== (CD = ZD.hudElements[ND]) && void 0 !== CD ? CD : [0, 0], nD = {
              dx: XD,
              dy: mD
            }, OD = {
              skew: {
                x: 0,
                y: 0
              },
              box: BD[ND]
            };
            gD.current = {
              id: ND,
              pointerId: DD.pointerId,
              startX: DD.clientX,
              startY: DD.clientY,
              origin: BD[ND],
              from: nD,
              to: nD,
              moved: !1,
              home: rC(nD) ? {
                centre: (0, CC.c)(BD[ND]),
                anchor: OD
              } : null,
              away: rC(nD) ? null : OD,
              anchor: OD,
              ringStyle: null,
              tapPick: tD ? iD : null
            }, DD.currentTarget.setPointerCapture(DD.pointerId)
          },
          onPointerMove: DD => {
            const cD = gD.current;
            if (!cD || cD.pointerId !== DD.pointerId) return;
            const pD = DD.clientX - cD.startX,
              bD = DD.clientY - cD.startY;
            if (!cD.moved && Math.hypot(pD, bD) < 5) return;
            const BD = !cD.moved;
            var yD, MD;
            (cD.moved = !0, BD) && (cD.ringStyle = null !== (yD = null === (MD = ID.current) || void 0 === MD ? void 0 : MD.getAttribute("style")) && void 0 !== yD ? yD : null);
            const ZD = (0, CC.F)(SD.width, SD.height, tD);
            if (!cD.home) {
              var oD;
              cD.to = {
                dx: 0,
                dy: 0
              }, CD(cD.id, cD.to);
              const DD = QD(cD.id),
                ID = null !== (oD = mD(cD, DD)) && void 0 !== oD ? oD : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: cD.origin
                },
                pD = (0, CC.c)(cD.origin);
              cD.home = {
                centre: DD ? (0, CC.c)(DD) : {
                  x: pD.x - cD.from.dx * SD.width,
                  y: pD.y - cD.from.dy * SD.height
                },
                anchor: ID
              }
            }
            const vD = cD.home;
            let ND = !1;
            const XD = DD => {
                ND = !1;
                let ID = (0, CC.m)(DD.box, pD / wD, bD / wD, ZD);
                const iD = SD.width / 2;
                if (fD && Math.abs((0, CC.c)(cD.origin).x + ID.x - iD) <= 8 / wD) {
                  const CD = iD - (0, CC.c)(cD.origin).x,
                    pD = (0, CC.m)(DD.box, CD, ID.y, ZD);
                  ND = Math.abs(pD.x - CD) < .01, ND && (ID = pD)
                }
                const QD = (0, CC.v)(cD.from, ID.x - DD.skew.x, ID.y - DD.skew.y, SD.width, SD.height);
                cD.to = FC(QD), cD.anchor = DD, CD(cD.id, cD.to)
              },
              nD = (0, CC.m)(vD.anchor.box, pD / wD, bD / wD, ZD),
              OD = iD.current,
              PD = (0, CC.c)(cD.origin),
              HD = ((0, qD.L)(cD.id) ? 20 : 6) / wD;
            if (Math.abs(PD.x + nD.x - vD.centre.x) <= HD && Math.abs(PD.y + nD.y - vD.centre.y) <= HD) cD.to = {
              dx: 0,
              dy: 0
            }, cD.anchor = vD.anchor, ND = fD && Math.abs(vD.centre.x - SD.width / 2) < 1, CD(cD.id, cD.to);
            else if (cD.away) XD(cD.away);
            else {
              var UD;
              XD(vD.anchor), cD.away = null !== (UD = mD(cD, QD(cD.id))) && void 0 !== UD ? UD : vD.anchor, XD(cD.away)
            }
            null === OD || void 0 === OD || OD.classList.add("Shown"), null === OD || void 0 === OD || OD.classList.toggle("Snapped", ND), (DD => {
              const CD = ID.current;
              if (CD) {
                const {
                  skew: cD,
                  box: ID
                } = DD.anchor;
                CD.style.left = ID.left * wD + "px", CD.style.top = ID.top * wD + "px", CD.style.width = (ID.right - ID.left) * wD + "px", CD.style.height = (ID.bottom - ID.top) * wD + "px", CD.style.translate = `${((DD.to.dx-DD.from.dx)*SD.width+cD.x)*wD}px ${((DD.to.dy-DD.from.dy)*SD.height+cD.y)*wD}px`
              }
            })(cD)
          },
          onPointerUp: DD => {
            nD(DD, !0)
          },
          onPointerCancel: DD => {
            nD(DD, !1)
          }
        }
      }
    }

    function Cc(DD, CD) {
      return Object.keys(DD).filter((DD => DD !== CD)).map((CD => DD[CD]))
    }

    function cc(DD) {
      const CD = [],
        cD = CD => (0, qD.L)(CD) && !DD.documentElement.classList.contains((0, IC.R)(CD));
      for (const fD of DD.querySelectorAll(`[${LD}]`)) {
        const DD = cD(fD.getAttribute(LD)) ? fD.querySelector(".ScaleOnHover") : null,
          ID = (null !== DD && void 0 !== DD ? DD : fD).getBoundingClientRect();
        (ID.width > 0 || ID.height > 0) && CD.push({
          id: fD.getAttribute(LD),
          box: {
            left: ID.left,
            top: ID.top,
            right: ID.right,
            bottom: ID.bottom
          }
        })
      }
      const ID = DD => (0, CC.J)(CD.filter((CD => {
          let {
            id: cD
          } = CD;
          return DD(cD)
        })).map((DD => {
          let {
            box: CD
          } = DD;
          return CD
        }))),
        pD = {};
      for (const fD of new Set(CD.map((DD => DD.id)))) pD[fD] = ID((DD => DD === fD));
      const iD = ID((DD => aD.has(DD)));
      return iD && (pD.cluster = iD), {
        boxes: pD,
        pieces: CD
      }
    }

    function Ic(DD, CD, cD) {
      const ID = CD.right - CD.left,
        pD = CD.bottom - CD.top;
      return RC(DD, "cluster", (CD => {
        const iD = cD => {
            CD(cD);
            const ID = [...DD.querySelectorAll(`[${LD}]:not(.HudPreviewGhost)`)].filter((DD => aD.has(DD.getAttribute(LD)))).map((DD => {
                const CD = DD.getBoundingClientRect();
                return {
                  left: CD.left,
                  top: CD.top,
                  right: CD.right,
                  bottom: CD.bottom
                }
              })),
              pD = (0, CC.J)(ID);
            return pD ? {
              w: pD.right - pD.left,
              h: pD.bottom - pD.top
            } : null
          },
          fD = DD => !DD || DD.w <= ID && DD.h <= pD,
          bD = iD(1),
          QD = iD(qD.e);
        if (!bD || fD(QD)) return qD.e;
        const wD = (DD, CD, cD) => CD > DD ? 1 + (cD - DD) * (qD.e - 1) / (CD - DD) : qD.e;
        let SD = Math.floor(Math.min(qD.e, wD(bD.w, QD.w, ID), wD(bD.h, QD.h, pD)) / cD + 1e-6) * cD;
        for (; SD > 1 && !fD(iD(SD));) SD = Math.round(100 * (SD - cD)) / 100;
        return Math.max(1, SD)
      }))
    }

    function pc(DD) {
      jC(document, DD, {
        keysAbove: !1
      });
      const CD = parseFloat(getComputedStyle(DD.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        cD = Number.isFinite(CD) && CD < 0;
      return jC(document, DD, {
        keysAbove: cD
      }), cD
    }

    function ic(DD, CD) {
      let {
        layout: cD,
        orientation: ID,
        viewport: iD,
        replicaKey: fD,
        joystickFixed: bD,
        busy: QD
      } = CD;
      const [wD, SD] = (0, pD.useState)(null), [BD, yD] = (0, pD.useState)({
        boxes: {},
        pieces: []
      }), [MD, tD] = (0, pD.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [ZD, oD] = (0, pD.useState)(!1), [vD, ND] = (0, pD.useState)(!1), [gD, XD] = (0, pD.useState)(!1), mD = (0, pD.useCallback)((DD => {
        ND(DD), DD && XD(!0)
      }), []), nD = cD.hudLayouts[ID].hudSafe, OD = (0, pD.useCallback)((() => {
        var CD;
        const cD = null === (CD = DD.current) || void 0 === CD ? void 0 : CD.contentDocument;
        null !== cD && void 0 !== cD && cD.body && SD(cD)
      }), [DD]), PD = (0, pD.useCallback)((() => {
        wD && ((0, cC.z)(wD), yD(cc(wD)), tD(function(DD, CD) {
          const cD = GC(DD),
            [ID, pD, iD, fD] = CD ? (0, IC.G)(CD, window.innerWidth, window.innerHeight, cD) : cD;
          return {
            top: ID,
            right: pD,
            bottom: iD,
            left: fD
          }
        }(wD, nD)))
      }), [wD, nD]), HD = (0, pD.useCallback)((() => {
        wD && oD(pc(wD))
      }), [wD]), UD = (0, pD.useRef)((() => {}));
      return UD.current = () => {
        HD(), QD() || PD()
      }, (0, pD.useLayoutEffect)((() => {
        if (wD) return zC(document, wD, (() => {
          UD.current()
        }), mD)
      }), [wD, mD]), (0, pD.useLayoutEffect)(HD, [HD, iD]), (0, pD.useLayoutEffect)((() => {
        wD && (jC(document, wD, {
          keysAbove: ZD
        }), LC(document, wD, cD, ID, bD), HD(), PD())
      }), [wD, cD, ID, ZD, fD, bD, iD, PD, HD]), (0, pD.useEffect)((() => {
        var DD;
        if (!wD) return;
        const CD = new ResizeObserver((() => {
          QD() || PD()
        }));
        for (const cD of wD.querySelectorAll(`[${LD}]`)) CD.observe(cD);
        return null === (DD = wD.fonts) || void 0 === DD || DD.ready.then(PD), () => {
          CD.disconnect()
        }
      }), [wD, PD, QD, fD]), {
        doc: wD,
        onLoad: OD,
        boxes: BD.boxes,
        pieces: BD.pieces,
        insets: MD,
        keysAbove: ZD,
        ready: vD,
        settled: gD
      }
    }
    const fc = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      bc = (DD, CD, cD) => {
        const ID = DD => (0, cC.y)(DD, cD.hudElements[DD]);
        return "cluster" === DD && aD.has(CD) || "cluster" === CD && aD.has(DD) || "menu" === DD && ID(CD) || "menu" === CD && ID(DD) || fc.some((ID => {
          let [pD, iD] = ID;
          const fD = cD.hudElements.hotbar,
            bD = "inventory" === iD && cD.hudLocked.includes(iD) && void 0 !== fD && !(0, qD.H)(fD);
          return (DD === pD && CD === iD || DD === iD && CD === pD) && !bD
        }))
      };
    const Qc = ["Above", "Below", "Left", "Right"];

    function wc(DD, CD, cD, ID, pD) {
      const iD = cD[DD],
        fD = (iD.left + iD.right) / 2,
        bD = (iD.top + iD.bottom) / 2,
        QD = (7.5 * CD.length + 14) / ID,
        wD = 18 / ID,
        SD = {
          Above: {
            left: fD - QD / 2,
            top: iD.top - wD,
            right: fD + QD / 2,
            bottom: iD.top
          },
          Below: {
            left: fD - QD / 2,
            top: iD.bottom,
            right: fD + QD / 2,
            bottom: iD.bottom + wD
          },
          Left: {
            left: iD.left - QD,
            top: bD - wD / 2,
            right: iD.left,
            bottom: bD + wD / 2
          },
          Right: {
            left: iD.right,
            top: bD - wD / 2,
            right: iD.right + QD,
            bottom: bD + wD / 2
          }
        },
        BD = Cc(cD, DD),
        yD = {
          left: 0,
          top: 0,
          right: pD.width,
          bottom: pD.height
        };
      return Qc[(0, CC.s)(Qc.map((DD => SD[DD])), BD, {
        bounds: yD
      })]
    }

    function Sc() {
      const [DD, CD] = (0, FD.b)();
      return (0, pD.useMemo)((() => ({
        width: DD,
        height: CD
      })), [DD, CD])
    }

    function Bc(DD) {
      var CD;
      const {
        layout: cD,
        orientation: iD,
        selected: fD,
        onSelect: bD,
        onMove: wD,
        canMove: SD,
        actionButtons: BD,
        joystickFixed: yD,
        presence: MD,
        keyNames: ZD,
        maxHeight: oD,
        fill: vD = !1,
        apiRef: ND
      } = DD, {
        t: gD
      } = (0, ID.F)(), XD = Sc(), nD = (null !== (CD = (0, tD.h)("maxAuraLevel")) && void 0 !== CD ? CD : 0) > 0, OD = cD.hudLayouts[iD], PD = (0, pD.useRef)(null), HD = (0, pD.useRef)(null), xD = (0, pD.useRef)(null), JD = (0, pD.useRef)(null), KD = (0, pD.useRef)(null), VD = (0, pD.useRef)(null), zD = (0, DC.e)(PD).width, jD = vD ? 1 : zD > 0 ? (0, CC.B)(zD, XD.width, XD.height, oD) : 0, lD = (0, pD.useRef)((() => !1)), LD = (0, pD.useCallback)((() => lD.current()), []), {
        doc: GD,
        onLoad: RD,
        boxes: kD,
        pieces: dD,
        insets: YD,
        keysAbove: WD,
        ready: sD,
        settled: ED
      } = ic(xD, {
        layout: cD,
        orientation: iD,
        viewport: XD,
        replicaKey: `${BD}:${yD}:${nD}`,
        joystickFixed: yD,
        busy: LD
      }), eD = (0, pD.useCallback)((DD => {
        GD && LC(document, GD, DD, iD, yD)
      }), [GD, iD, yD]), uD = (0, pD.useCallback)((DD => GD && ED ? (eD(DD), pc(GD), function(DD) {
        let {
          boxes: CD,
          pieces: cD
        } = DD;
        const ID = cD.find((DD => "inventory" === DD.id));
        if (!ID || !CD.inventory) return CD;
        const pD = (0, CC.c)(CD.inventory),
          iD = WC(ID.box) / 2,
          fD = (ID.box.bottom - ID.box.top) / 2;
        return {
          ...CD,
          inventory: {
            left: pD.x - iD,
            top: pD.y - fD,
            right: pD.x + iD,
            bottom: pD.y + fD
          }
        }
      }(cc(GD))) : null), [GD, ED, eD]), hD = (0, pD.useCallback)((DD => !!GD && (eD(DD), pc(GD))), [GD, eD]), AD = (0, pD.useRef)(null), FD = (0, pD.useRef)(null), pC = (0, pD.useRef)(cD);
      pC.current = cD;
      const iC = (0, pD.useCallback)((() => {
        null !== AD.current && (cancelAnimationFrame(AD.current), AD.current = null)
      }), []);
      (0, pD.useEffect)((() => iC), [cD, iC]);
      const {
        lockable: fC
      } = DD, bC = (0, pD.useCallback)((DD => {
        if (eD(DD), !ED || 0 === cD.hudLayouts[iD].hudLocked.length) return;
        const CD = cD;
        iC(), AD.current = requestAnimationFrame((() => {
          var cD;
          if (AD.current = null, pC.current !== CD) return;
          const ID = (null === (cD = FD.current) || void 0 === cD ? void 0 : cD.from) === CD ? FD.current.boxes : uD(CD);
          ID && (FD.current = {
            from: CD,
            boxes: ID
          }), eD(ID ? EC(CD, DD, iD, XD, uD, {
            canKeep: fC,
            passes: 1,
            before: ID,
            keysAboveOf: hD
          }) : DD)
        }))
      }), [eD, ED, cD, iD, XD, uD, hD, fC, iC]), QC = Dc({
        preview: (DD, CD) => {
          CD ? bC((0, qD.Z)(cD, iD, DD, CD)) : (iC(), eD(cD))
        },
        stageRef: HD,
        ringRef: JD,
        centreLineRef: KD,
        snapCentre: cD.hudSnapCentre,
        ready: ED,
        measure: DD => {
          var CD;
          return GD && sD && null !== (CD = cc(GD).boxes[DD]) && void 0 !== CD ? CD : null
        },
        k: jD,
        viewport: XD,
        boxes: kD,
        pieces: dD,
        selected: fD,
        insets: YD,
        layout: OD,
        canMove: SD,
        onSelect: bD,
        onMove: (DD, CD, cD) => {
          iC(), wD(DD, CD, cD)
        }
      });
      (0, pD.useLayoutEffect)((() => {
        lD.current = QC.busy
      }), [QC.busy]);
      const wC = (0, pD.useRef)([]),
        SC = (0, pD.useRef)(OD.hudElements);
      (0, pD.useEffect)((() => {
        for (const pD of Object.keys(OD.hudElements)) {
          var DD, CD, cD, ID;
          (null !== (DD = null === (CD = OD.hudElements[pD]) || void 0 === CD ? void 0 : CD[2]) && void 0 !== DD ? DD : 1) > (null !== (cD = null === (ID = SC.current[pD]) || void 0 === ID ? void 0 : ID[2]) && void 0 !== cD ? cD : 1) && SD(pD) && !(0, cC.y)(pD, OD.hudElements[pD]) && wC.current.push(pD)
        }
        SC.current = OD.hudElements
      }), [OD.hudElements, SD]), (0, pD.useEffect)((() => {
        if (!sD) return;
        const DD = wC.current.shift(),
          CD = DD && kD[DD];
        if (!DD || !CD || QC.busy()) return;
        const cD = (0, CC.I)(CD, (0, CC.F)(XD.width, XD.height, YD));
        if (0 !== cD.x || 0 !== cD.y) {
          var ID;
          const [CD, pD] = null !== (ID = OD.hudElements[DD]) && void 0 !== ID ? ID : [0, 0];
          wD(DD, CD + cD.x / XD.width, pD + cD.y / XD.height)
        }
      }), [kD, sD]), (0, pD.useImperativeHandle)(ND, (() => ({
        setScale: (DD, CD) => {
          bC((0, qD.Z)(cD, iD, DD, {
            scale: CD
          }))
        },
        setOpacity: DD => {
          eD({
            ...cD,
            hudKeyOpacity: DD
          })
        },
        keepLocks: (DD, CD) => (iC(), EC(DD, CD, iD, XD, uD, {
          canKeep: fC,
          keysAboveOf: hD
        })),
        setSafe: DD => {
          bC((0, qD.ab)(cD, iD, DD)), VD.current && (VD.current.style.inset = (0, IC.G)(DD, XD.width, XD.height, GC(null !== GD && void 0 !== GD ? GD : document)).map((DD => DD * jD + "px")).join(" "))
        }
      })), [eD, bC, uD, hD, iC, fC, GD, cD, iD, XD, jD]);
      const BC = new Set(Object.keys(OD.hudElements).filter((DD => (0, qD.s)(OD.hudElements, DD)))),
        yC = fD ? kD[fD] : void 0,
        MC = fD ? TD(fD, BD, gD, ZD) : "",
        tC = (0, HC.h)(XD.width, XD.height),
        ZC = fD ? function(DD, CD, cD, ID) {
          const pD = DD => (0, qD.s)(cD.hudElements, DD) || (0, cC.v)(DD, cD, ID);
          if (pD(DD)) return [];
          const iD = CD.filter((CD => {
              let {
                id: cD
              } = CD;
              return "cluster" === DD ? aD.has(cD) : cD === DD
            })),
            fD = new Set;
          for (const bD of CD) bD.id === DD || fD.has(bD.id) || bc(DD, bD.id, cD) || pD(bD.id) || void 0 === cD.hudElements[DD] && void 0 === cD.hudElements[bD.id] || iD.some((DD => {
            let {
              id: CD,
              box: cD
            } = DD;
            return CD !== bD.id && (0, CC.j)(cD, bD.box, 2)
          })) && fD.add(bD.id);
          return [...fD]
        }(fD, dD, OD, tC) : [],
        oC = new Set((0, cC.r)(OD.hudElements)),
        vC = (0, cC.E)(OD, (0, cC.B)(MD.rowIcons)).state,
        NC = ZC.join(),
        gC = (0, pD.useRef)(DD.onReady);
      gC.current = DD.onReady, (0, pD.useEffect)((() => {
        var DD;
        null === (DD = gC.current) || void 0 === DD || DD.call(gC, ED)
      }), [ED]);
      const XC = (0, pD.useRef)(DD.onMeasured);
      (0, pD.useLayoutEffect)((() => {
        XC.current = DD.onMeasured
      })), (0, pD.useEffect)((() => {
        var DD;
        const CD = GD ? {
          hotbar: kC(GD, OC),
          cluster: Ic(GD, (0, CC.F)(XD.width, XD.height, YD), OC)
        } : {};
        null === (DD = XC.current) || void 0 === DD || DD.call(XC, kD, NC ? NC.split(",") : [], CD)
      }), [kD, NC, GD, XD, YD]);
      const nC = DD => ({
        left: DD.left * jD,
        top: DD.top * jD,
        width: (DD.right - DD.left) * jD,
        height: (DD.bottom - DD.top) * jD
      });
      return (0, mD.jsx)("div", {
        ref: PD,
        className: QD()("HudPreviewBox", {
          Fill: vD
        }),
        style: {
          height: XD.height * jD
        },
        children: (0, mD.jsxs)("div", {
          ref: HD,
          className: "HudPreviewStage",
          style: {
            width: XD.width * jD,
            height: XD.height * jD
          },
          children: [(0, mD.jsx)("iframe", {
            ref: xD,
            className: "HudPreviewFrame",
            srcDoc: "<!DOCTYPE html><html><head></head><body></body></html>",
            onLoad: RD,
            title: gD("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: XD.width,
              height: XD.height,
              transform: `scale(${jD})`
            }
          }), GD && (0, rD.createPortal)((0, mD.jsx)(mC, {
            presence: MD,
            portraitPhone: tC,
            hidden: BC,
            actionButtons: BD,
            joystickFixed: yD,
            keysAbove: WD,
            auraBar: nD,
            trayState: vC,
            moved: oC
          }), GD.body), (0, mD.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...QC.handlers,
            children: [(0, mD.jsx)("div", {
              ref: VD,
              className: "HudPreviewSafeZone",
              style: {
                top: YD.top * jD,
                right: YD.right * jD,
                bottom: YD.bottom * jD,
                left: YD.left * jD
              }
            }), dD.map(((DD, CD) => {
              let {
                id: cD,
                box: ID
              } = DD;
              return (0, mD.jsx)("div", {
                className: "HudPreviewHandle",
                style: nC((0, CC.q)(ID, 40 / jD))
              }, `${cD}:${CD}`)
            })), OD.hudLocked.map((DD => {
              const CD = kD[DD];
              return CD && (0, mD.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: CD.right * jD,
                  top: CD.top * jD
                },
                children: (0, mD.jsx)(UD.c, {
                  name: "lock"
                })
              }, DD)
            })), (0, mD.jsx)("div", {
              ref: KD,
              className: "HudPreviewCentreLine",
              style: {
                left: XD.width / 2 * jD
              }
            }), fD && yC && (0, mD.jsx)("div", {
              ref: JD,
              className: QD()("HudPreviewRing", {
                Fixed: !SD(fD),
                Overlap: ZC.length > 0
              }),
              style: nC(yC),
              children: (0, mD.jsx)("span", {
                className: QD()("HudPreviewRingLabel", wc(fD, MC, kD, jD, XD)),
                children: MC
              })
            })]
          })]
        })
      })
    }

    function yc(DD, CD) {
      (0, pD.useEffect)((() => {
        var cD;
        null === (cD = DD.current) || void 0 === cD || cD.toggleAttribute("inert", CD)
      }), [DD, CD])
    }
    const Mc = "hudFullScreen";

    function tc(DD) {
      let {
        onScale: CD,
        onHidden: cD,
        onReset: iD,
        locked: fD,
        lockable: bD,
        onLocked: QD,
        onClose: SD,
        ...BD
      } = DD;
      const {
        t: yD
      } = (0, ID.F)(), MD = (0, pD.useRef)(null);
      (0, AD.t)("popup", MD, SD),
      function(DD) {
        const CD = (0, pD.useRef)(DD);
        CD.current = DD, (0, pD.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Mc]: !0
          }, "");
          let DD = !1;
          const cD = () => {
            DD = !0, CD.current()
          };
          return window.addEventListener("popstate", cD), () => {
            var CD;
            window.removeEventListener("popstate", cD), !DD && null !== (CD = window.history.state) && void 0 !== CD && CD[Mc] && window.history.back()
          }
        }), [])
      }(SD), (0, pD.useEffect)((() => {
        function DD(DD) {
          "Escape" === DD.key && (DD.stopPropagation(), SD())
        }
        return window.addEventListener("keydown", DD, !0), () => {
          window.removeEventListener("keydown", DD, !0)
        }
      }), [SD]);
      const {
        selected: tD
      } = BD, ZD = (0, pD.useRef)(null), oD = (0, pD.useRef)(null), [vD, ND] = (0, pD.useState)(!1);
      yc(oD, !vD);
      const [gD, XD] = (0, pD.useState)(null), [nD, OD] = (0, pD.useState)([]), [PD, HD] = nC(), UD = (0, pD.useRef)(BD.selected);
      UD.current = BD.selected;
      const xD = (0, pD.useRef)({}),
        qD = (0, pD.useCallback)((() => {
          const DD = ZD.current;
          DD && XD(function(DD, CD, cD) {
            var ID;
            const {
              innerWidth: pD,
              innerHeight: iD
            } = window, fD = DD.offsetWidth, bD = DD.offsetHeight, QD = Math.max(TC()[0], 6), wD = [];
            for (const yD of [QD, .2 * iD, .5 * iD - bD / 2, .33 * iD])
              for (const DD of [.5, .3, .7]) wD.push({
                left: Math.max(0, Math.min(pD - fD - 6, Math.max(6, pD * DD - fD / 2))),
                top: yD
              });
            const SD = wD.map((DD => ({
                left: DD.left - 6,
                top: DD.top - 6,
                right: DD.left + fD + 6,
                bottom: DD.top + bD + 6
              }))),
              BD = Cc(CD, cD);
            return wD[(0, CC.s)(SD, BD, {
              avoid: cD && null !== (ID = CD[cD]) && void 0 !== ID ? ID : null
            })]
          }(DD, xD.current, UD.current))
        }), []),
        JD = (0, pD.useCallback)(((DD, CD, cD) => {
          OD(CD), HD(cD), xD.current = DD, qD()
        }), [qD, HD]);
      return (0, pD.useLayoutEffect)(qD, [BD.selected, qD]), (0, rD.createPortal)((0, mD.jsxs)("div", {
        ref: MD,
        className: "HudFullScreenEditor",
        children: [(0, mD.jsx)(Bc, {
          ...BD,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: JD,
          onReady: ND,
          lockable: bD
        }), (0, mD.jsxs)("div", {
          ref: ZD,
          className: "HudFullScreenToolbar",
          style: null === gD ? void 0 : {
            left: gD.left,
            top: gD.top,
            transform: "none"
          },
          children: [(0, mD.jsx)("div", {
            ref: oD,
            className: "HudFullScreenControls",
            children: (0, mD.jsx)(PC, {
              selected: tD,
              layout: BD.layout.hudLayouts[BD.orientation],
              actionButtons: BD.actionButtons,
              keyNames: BD.keyNames,
              overlaps: nD,
              scaleCaps: PD,
              onScale: CD,
              onHidden: cD,
              onReset: iD,
              locked: fD,
              lockable: bD,
              onLocked: QD,
              joystickFixed: BD.joystickFixed
            })
          }), (0, mD.jsx)(wD.i, {
            className: "HudFullScreenDone",
            onClick: SD,
            padDefaultFocus: !0,
            children: yD("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const Zc = DD => `${Math.round(100*DD)}%`;

    function oc(DD) {
      let {
        info: CD,
        tuple: cD,
        props: pD
      } = DD;
      const {
        t: iD
      } = (0, ID.F)();
      return (0, mD.jsx)(MD.i, {
        name: iD("hudLayout:size"),
        min: qD.h,
        max: qD.e,
        step: OC,
        initValue: cD[2],
        disabled: pD.locked.has(CD.id),
        selectableMax: pD.scaleCaps[CD.id],
        cappedNote: iD("hudLayout:sizeCapped"),
        format: Zc,
        onChange: DD => {
          pD.onScalePreview(CD.id, DD)
        },
        onChangeComplete: DD => {
          pD.onScale(CD.id, DD)
        }
      })
    }

    function vc(DD) {
      const {
        t: CD
      } = (0, ID.F)(), {
        present: cD,
        elements: iD,
        selected: fD,
        onSelect: bD,
        onHidden: wD,
        onReset: SD,
        note: BD,
        actionButtons: yD,
        keyNames: MD,
        sizeBesidePreview: tD,
        locked: ZD,
        lockable: oD,
        onLocked: vD
      } = DD, {
        rowIconsOpen: ND,
        onRowIconsOpen: gD
      } = DD, XD = (0, pD.useRef)(null), nD = null !== fD && (ND || !(0, qD.L)(fD));
      return (0, pD.useEffect)((() => {
        var DD;
        const CD = fD ? null === (DD = XD.current) || void 0 === DD ? void 0 : DD.querySelector(`[data-hud-row="${fD}"]`) : null;
        if (!CD) return;
        const cD = CD.closest(".SettingsMenuRight"),
          ID = performance.now();
        let pD = null;
        const iD = () => {
            clearInterval(QD), null === cD || void 0 === cD || cD.removeEventListener("scroll", bD)
          },
          bD = () => {
            hC() || iD()
          },
          QD = setInterval((() => {
            const DD = performance.now();
            DD - ID > 1500 ? iD() : hC() ? pD = null : null === pD ? pD = DD : DD - pD >= 150 && (iD(), function(DD) {
              var CD;
              const cD = DD.closest(".SettingsMenuRight"),
                ID = null === (CD = DD.closest(".HudLayoutSettings")) || void 0 === CD ? void 0 : CD.querySelector(".HudLayoutPreviewBox");
              if (!cD || !ID) return;
              const pD = ID.getBoundingClientRect().bottom + 8,
                iD = cD.getBoundingClientRect().bottom - 8,
                fD = DD.getBoundingClientRect();
              fD.top < pD ? cD.scrollBy({
                top: fD.top - pD,
                behavior: "smooth"
              }) : fD.bottom > iD && cD.scrollBy({
                top: Math.min(fD.bottom - iD, fD.top - pD),
                behavior: "smooth"
              })
            }(CD))
          }), 50);
        return null === cD || void 0 === cD || cD.addEventListener("scroll", bD, {
          passive: !0
        }), iD
      }), [fD, nD]), (0, mD.jsx)("div", {
        ref: XD,
        className: "SettingBoxGroup HudElementList",
        children: jD.filter((DD => cD.has(DD.id) && (ND || !(0, qD.L)(DD.id)))).map((cD => {
          const ID = ((DD, CD) => {
              var cD;
              return null !== (cD = DD[CD]) && void 0 !== cD ? cD : qD.m
            })(iD, cD.id),
            pD = (0, qD.s)(iD, cD.id),
            XD = cD.id === fD,
            nD = cD.scale && !tD,
            OD = BD(cD.id, XD);
          return (0, mD.jsxs)("div", {
            "data-hud-row": cD.id,
            className: QD()("SettingBox HudElementRow", {
              Open: XD,
              Hidden: pD,
              Child: void 0 !== cD.parent
            }),
            children: [(0, mD.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, mD.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": nD ? XD : void 0,
                onClick: () => {
                  bD(cD.id)
                },
                children: [TD(cD.id, yD, CD, MD), cD.scale && 1 !== ID[2] && !(XD && nD) && (0, mD.jsx)("span", {
                  className: "HudElementRowSize",
                  children: Zc(ID[2])
                }), nD && (0, mD.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, mD.jsx)(YD, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: cD.id,
                actionButtons: yD,
                keyNames: MD,
                locked: ZD.has(cD.id),
                lockable: oD(cD.id),
                onLocked: vD
              }), "menu" === cD.id && (0, mD.jsx)(WD, {
                className: "HudElementRowIcon",
                open: ND,
                name: TD(cD.id, yD, CD, MD),
                onToggle: gD
              }), "menu" !== cD.id && (0, mD.jsx)(kD, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: cD.id,
                elements: iD,
                actionButtons: yD,
                keyNames: MD,
                onHidden: wD
              }), (0, mD.jsx)(dD, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: ZD.has(cD.id),
                id: cD.id,
                elements: iD,
                actionButtons: yD,
                keyNames: MD,
                onReset: SD
              })]
            }), XD && nD && (0, mD.jsx)(oc, {
              info: cD,
              tuple: ID,
              props: DD
            }), OD && (0, mD.jsx)("div", {
              className: "HudElementNote",
              children: OD
            })]
          }, cD.id)
        }))
      })
    }

    function Nc(DD) {
      let {
        preview: CD,
        quick: cD,
        onFullScreen: iD,
        resting: fD,
        onSidePanel: bD
      } = DD;
      const {
        t: QD
      } = (0, ID.F)(), SD = Sc(), BD = (0, pD.useRef)(null), {
        width: yD
      } = (0, DC.e)(BD), MD = Math.floor(SD.width * Math.min(1, CD.maxHeight / SD.height)), tD = yD - MD - 12, ZD = tD >= 130, oD = yD > 0;
      (0, pD.useEffect)((() => {
        oD && bD(ZD)
      }), [oD, ZD, bD]);
      const vD = (0, CC.B)(ZD ? MD : yD, SD.width, SD.height, CD.maxHeight),
        ND = fD ? (0, mD.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: SD.height * vD
          }
        }) : (0, mD.jsx)(Bc, {
          ...CD
        }),
        gD = DD => (0, mD.jsxs)(wD.P, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: QD("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: iD,
          children: [(0, mD.jsx)(UD.c, {
            name: "expand"
          }), DD && (0, mD.jsx)("span", {
            children: QD("hudLayout:fullScreen")
          })]
        });
      return (0, mD.jsxs)("div", {
        ref: BD,
        className: "SettingBox HudLayoutPreviewBox",
        children: [yD > 0 && ZD && (0, mD.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, mD.jsx)("div", {
            style: {
              width: MD
            },
            children: ND
          }), (0, mD.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, mD.jsx)(PC, {
              selected: CD.selected,
              ...cD,
              joystickFixed: CD.joystickFixed,
              extra: gD(!CD.selected || tD >= 278)
            })
          })]
        }), yD > 0 && !ZD && (0, mD.jsxs)(mD.Fragment, {
          children: [ND, (0, mD.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: gD(!1)
          })]
        })]
      })
    }
    var gc = cD(2391),
      Xc = cD(4201),
      mc = cD(2366);
    const nc = DD => {
      const CD = IC.v * ("sides" === DD ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(CD / 2))
    };

    function Oc(DD, CD, cD) {
      const [ID, pD, iD, fD] = DD;
      return "sides" === CD ? [ID, cD, iD, cD] : [cD, pD, cD, fD]
    }
    const Pc = [null, null, null, null],
      Hc = DD => `${DD}px`;

    function Uc(DD) {
      let {
        safe: CD,
        onPreview: cD,
        onCommit: iD
      } = DD;
      const {
        t: fD
      } = (0, ID.F)(), bD = (0, IC.G)(null !== CD && void 0 !== CD ? CD : Pc, window.innerWidth, window.innerHeight, GC(document).map(Math.round)), QD = (0, pD.useRef)(null !== CD && void 0 !== CD ? CD : Pc);
      QD.current = null !== CD && void 0 !== CD ? CD : Pc;
      const SD = DD => {
        const CD = Math.min(nc(DD), "sides" === DD ? Math.max(bD[1], bD[3]) : Math.max(bD[0], bD[2]));
        return (0, mD.jsx)(MD.i, {
          name: fD("sides" === DD ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: nc(DD),
          step: 2,
          initValue: CD,
          format: Hc,
          onChange: CD => {
            cD(Oc(QD.current, DD, CD))
          },
          onChangeComplete: ID => {
            if (ID === CD) return void cD(QD.current);
            const pD = Oc(QD.current, DD, ID);
            QD.current = pD, iD(pD), (0, PD.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: DD
            })
          }
        })
      };
      return (0, mD.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, mD.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, mD.jsx)("div", {
            children: fD("hudLayout:safeZone")
          }), (0, mD.jsx)(wD.P, {
            active: null === CD,
            pressed: null === CD,
            onClick: () => {
              iD(null)
            },
            children: fD("hudLayout:safeZoneAuto")
          })]
        }), SD("sides"), SD("ends")]
      })
    }

    function xc() {
      const {
        t: DD
      } = (0, ID.F)(), CD = (0, qD.W)(), {
        clientEscMenuOptions: cD
      } = (0, SD.o)(["clientEscMenuOptions"]), iD = (0, gc.h)(), fD = CD.hudLayouts[iD], [bD, QD] = (0, pD.useState)(null), {
        rowIconsOpen: BD,
        onRowIconsOpen: yD,
        select: tD
      } = function(DD, CD) {
        const [cD, ID] = (0, pD.useState)((() => qD.A.some((CD => void 0 !== DD.hudElements[CD] || DD.hudLocked.includes(CD))))), iD = (0, pD.useCallback)((DD => {
          CD(DD), (0, qD.L)(DD) && ID(!0)
        }), [CD]);
        return {
          rowIconsOpen: cD,
          onRowIconsOpen: ID,
          select: iD
        }
      }(fD, QD), [ZD, oD] = (0, pD.useState)([]), [vD, ND] = (0, pD.useState)(null), [gD, XD] = nC(), nD = (0, pD.useCallback)(((DD, CD, cD) => {
        oD(CD), XD(cD);
        const ID = Object.keys(DD);
        ND((DD => (null === DD || void 0 === DD ? void 0 : DD.size) === ID.length && ID.every((CD => DD.has(CD))) ? DD : new Set(ID)))
      }), [XD]), {
        gameState: OD
      } = (0, SD.o)(["gameState"]), UD = (0, mc.j)(), [xD] = (0, pD.useState)((() => "inGame" === OD ? function(DD, CD) {
        const cD = DD.querySelector(".InGameUi .TouchComponentsButtons");
        if (!cD) return fC;
        const ID = {},
          pD = {};
        for (const wD of iC) {
          const DD = cD.querySelector(`.TouchSlot${wD} > .TouchKey`);
          if (DD) {
            var iD, fD;
            ID[wD] = DD.cloneNode(!0);
            const CD = (null !== (iD = null === (fD = DD.querySelector(".TouchKeyLabel")) || void 0 === fD ? void 0 : fD.textContent) && void 0 !== iD ? iD : "").split(/\s+/).filter((DD => !/[\d\xd7]/.test(DD))).join(" ");
            CD && (pD[wD] = CD)
          }
        }
        const bD = CD => {
            const cD = DD.querySelector(`.InGameUi ${CD}`);
            return null !== cD && !cD.classList.contains("Hidden")
          },
          QD = [...DD.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((DD => DD.cloneNode(!0)));
        return {
          faces: Object.keys(ID).length > 0 ? ID : null,
          names: pD,
          shop: bD(".TouchInventoryKey.ShopKey"),
          bag: bD(".TouchInventoryKey.BagKey"),
          items: QD.length > 0 ? QD : null,
          rowIcons: CD
        }
      }(document, UD) : fC)), JD = (0, pD.useRef)(null), KD = (0, pD.useRef)(null), aD = function(DD) {
        const [CD, cD] = (0, pD.useState)((() => .4 * window.innerHeight));
        return (0, pD.useLayoutEffect)((() => {
          var CD;
          const ID = null === (CD = DD.current) || void 0 === CD ? void 0 : CD.closest(".SettingsMenuRight");
          if (!ID) return;
          const pD = () => {
            const DD = ID.clientHeight < qc ? .4 : .5;
            cD(Math.max(80, ID.clientHeight * DD - 24))
          };
          pD();
          const iD = new ResizeObserver(pD);
          return iD.observe(ID), () => {
            iD.disconnect()
          }
        }), [DD]), CD
      }(KD), VD = (0, Xc.n)(cD.joystickMode), zD = cD.touchActionButtons, LD = (0, pD.useMemo)((() => function(DD, CD) {
        const cD = {},
          ID = [
            ["extra", "X"],
            ["game", "G"]
          ];
        CD || ID.push(["attack", "P"]);
        for (const [pD, iD] of ID) {
          const CD = DD.names[iD];
          CD && (cD[pD] = CD)
        }
        return cD
      }(xD, zD)), [xD, zD]);
      (0, pD.useEffect)((() => {
        (0, PD.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [TD, RD] = (0, pD.useState)(!1), [kD, dD] = (0, pD.useState)(!1), YD = (0, pD.useRef)(null);
      yc(YD, !kD);
      const [WD, sD] = (0, pD.useState)(!1), ED = (0, pD.useCallback)((() => {
        sD(!1)
      }), []), eD = (0, pD.useMemo)((() => new Set(fD.hudLocked)), [fD.hudLocked]), rD = DD => {
        var CD, cD;
        const ID = (0, qD.q)(),
          pD = DD(ID);
        (0, qD.U)(null !== (CD = null === (cD = JD.current) || void 0 === cD ? void 0 : cD.keepLocks(ID, pD)) && void 0 !== CD ? CD : pD)
      }, AD = (DD, CD) => {
        rD((cD => (0, qD.Z)(cD, iD, DD, CD)))
      }, FD = (DD, CD, cD) => {
        AD(DD, {
          dx: CD,
          dy: cD
        }), (0, PD.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${DD}`
        })
      }, DC = (DD, CD) => {
        rD((cD => (0, qD._)(cD, iD, DD, CD)))
      }, CC = DD => {
        const CD = lD[DD];
        return (CD.move || CD.scale) && ("joystick" !== DD || VD) && !(0, cC.y)(DD, fD.hudElements[DD])
      }, IC = DD => lD[DD].move && ("joystick" !== DD || VD) && !eD.has(DD), pC = new Set(jD.map((DD => DD.id)).filter((DD => {
        const CD = (0, qD.L)(DD) && !xD.rowIcons.includes(DD);
        return null === vD || vD.has(DD) || (0, qD.s)(fD.hudElements, DD) && !CD
      }))), bC = {
        present: pC,
        actionButtons: zD,
        keyNames: LD,
        scaleCaps: gD,
        sizeBesidePreview: TD,
        elements: fD.hudElements,
        selected: bD,
        onSelect: tD,
        rowIconsOpen: BD,
        onRowIconsOpen: yD,
        onScalePreview: (DD, CD) => {
          var cD;
          null === (cD = JD.current) || void 0 === cD || cD.setScale(DD, CD)
        },
        onScale: (DD, CD) => {
          AD(DD, {
            scale: CD
          }), (0, PD.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${DD}`
          })
        },
        onHidden: (DD, CD) => {
          AD(DD, {
            hidden: CD
          }), (0, PD.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${CD?"hide":"show"}:${DD}`
          })
        },
        onReset: DD => {
          AD(DD, qD.b)
        },
        locked: eD,
        lockable: CC,
        onLocked: DC,
        note: (CD, cD) => {
          const ID = cD && ZD.length > 0 ? DD("hudLayout:overlapsNote", {
            names: GD(ZD, zD, DD, LD)
          }) : null;
          return cD && uD(CD, VD) ? (0, mD.jsxs)(mD.Fragment, {
            children: [ID && (0, mD.jsx)("span", {
              children: ID
            }), (0, mD.jsx)("span", {
              children: DD("hudLayout:floatingJoystickNote")
            }), !TD && (0, mD.jsx)(hD, {})]
          }) : ID || (cD && eD.has(CD) ? DD("hudLayout:lockedNote") : cD && "cluster" === CD ? DD("hudLayout:clusterNote") : cD && "menu" === CD ? DD("hudLayout:menuNote") : cD && (0, cC.y)(CD, fD.hudElements[CD]) && IC(CD) ? DD("hudLayout:rowIconNote") : cD && "arrows" === CD ? DD("hudLayout:arrowsNote") : "inventory" === CD && (0, qD.s)(fD.hudElements, "inventory") ? DD("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, mD.jsxs)("div", {
        ref: KD,
        className: "HudLayoutSettings",
        children: [(0, mD.jsxs)("div", {
          ref: YD,
          className: "HudLayoutBody",
          children: [(0, mD.jsx)("div", {
            className: "HudLayoutOrientation",
            children: DD("landscape" === iD ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, mD.jsx)(Nc, {
            preview: {
              layout: CD,
              orientation: iD,
              selected: bD,
              onSelect: tD,
              onMove: FD,
              canMove: IC,
              actionButtons: zD,
              joystickFixed: VD,
              presence: xD,
              keyNames: LD,
              maxHeight: aD,
              apiRef: JD,
              onMeasured: nD,
              onReady: dD,
              lockable: CC
            },
            quick: {
              layout: fD,
              actionButtons: zD,
              keyNames: LD,
              scaleCaps: gD,
              overlaps: ZD,
              onScale: bC.onScale,
              onHidden: bC.onHidden,
              onReset: bC.onReset,
              locked: eD,
              lockable: CC,
              onLocked: DC
            },
            onFullScreen: () => {
              sD(!0)
            },
            resting: WD,
            onSidePanel: RD
          }), WD && (0, mD.jsx)(tc, {
            layout: CD,
            orientation: iD,
            selected: bD,
            onSelect: tD,
            onMove: FD,
            canMove: IC,
            actionButtons: zD,
            joystickFixed: VD,
            presence: xD,
            keyNames: LD,
            onScale: bC.onScale,
            onHidden: bC.onHidden,
            onReset: bC.onReset,
            locked: eD,
            lockable: CC,
            onLocked: DC,
            apiRef: JD,
            onClose: ED
          }), (0, mD.jsx)(Uc, {
            safe: fD.hudSafe,
            onCommit: DD => {
              rD((CD => (0, qD.ab)(CD, iD, DD)))
            },
            onPreview: DD => {
              var CD;
              null === (CD = JD.current) || void 0 === CD || CD.setSafe(DD)
            }
          }), (0, mD.jsx)(MD.e, {
            label: DD("hudLayout:snapCentre"),
            checked: CD.hudSnapCentre,
            onClick: DD => {
              (0, qD.S)(DD)
            },
            circleInfoText: DD("hudLayout:snapCentreInfo")
          }), (0, mD.jsx)(vc, {
            ...bC
          }), (0, mD.jsx)(MD.g, {
            label: DD("hudLayout:shape"),
            options: qD.D.map((CD => ({
              value: CD,
              label: DD(`hudLayout:shape_${CD}`)
            }))),
            value: CD.hudShape,
            onChange: DD => {
              rD((CD => ({
                ...CD,
                hudShape: DD
              }))), (0, PD.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: DD
              })
            }
          }), (0, mD.jsx)(MD.i, {
            name: DD("hudLayout:opacity"),
            min: qD.d,
            max: 1,
            step: .05,
            initValue: CD.hudKeyOpacity,
            format: DD => `${Math.round(100*DD)}%`,
            circleInfoText: DD("hudLayout:opacityInfo"),
            onChange: DD => {
              var CD;
              null === (CD = JD.current) || void 0 === CD || CD.setOpacity(DD)
            },
            onChangeComplete: DD => {
              (0, qD.O)(DD), (0, PD.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, mD.jsx)(wD.J, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const DD = HD.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await DD.getResult() && (0, qD.M)()
            }()
          },
          children: DD("hudLayout:resetAll")
        })]
      })
    }
    const qc = 350;
    const Jc = [function() {
      const {
        t: DD
      } = (0, ID.F)(), [CD, cD] = (0, pD.useState)(!1), iD = (0, pD.useRef)(null);
      return (0, pD.useEffect)((() => {
        var DD;
        CD && (null === (DD = iD.current) || void 0 === DD || DD.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [CD]), (0, mD.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, mD.jsxs)("button", {
          ref: iD,
          type: "button",
          className: "SettingBox SettingBoxFeatured HudLayoutEntry",
          "aria-expanded": CD,
          onClick: () => {
            cD(!CD)
          },
          children: [(0, mD.jsx)(UD.c, {
            name: "arrows-up-down-left-right",
            className: "HudLayoutEntryIcon"
          }), (0, mD.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, mD.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: DD("hudLayout:title")
            }), (0, mD.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: DD("hudLayout:entrySub")
            })]
          }), (0, mD.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), CD && (0, mD.jsx)(xc, {})]
      })
    }, function() {
      const {
        t: DD
      } = (0, ID.F)(), {
        joystickMode: CD,
        touchSpeedCurve: cD,
        autorun: pD,
        jumpLock: iD
      } = (0, SD.o)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, mD.jsxs)(mD.Fragment, {
        children: [(0, mD.jsx)(MD.g, {
          label: DD("settingsMenu:joystick"),
          options: XD.zb.map((CD => ({
            value: CD,
            label: DD(nD[CD])
          }))),
          value: CD,
          onChange: DD => {
            SD.d.setClientEscMenuOptions({
              joystickMode: DD
            })
          },
          circleInfoText: DD("settingsMenu:joystickInfo")
        }), (0, mD.jsx)(MD.e, {
          label: DD("settingsMenu:preciseWalking"),
          checked: cD,
          onClick: DD => {
            SD.d.setClientEscMenuOptions({
              touchSpeedCurve: DD
            })
          },
          circleInfoText: DD("settingsMenu:preciseWalkingInfo")
        }), (0, mD.jsx)(MD.e, {
          label: DD("settingsMenu:autoRun"),
          checked: pD,
          onClick: DD => {
            SD.d.setClientEscMenuOptions({
              autorun: DD
            })
          },
          circleInfoText: DD("settingsMenu:autoRunInfo")
        }), (0, mD.jsx)(MD.e, {
          label: DD("settingsMenu:jumpLock"),
          checked: iD,
          onClick: DD => {
            SD.d.setClientEscMenuOptions({
              jumpLock: DD
            })
          },
          circleInfoText: DD("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, mD.jsx)(gD.b, {})
    }, function() {
      const {
        t: DD
      } = (0, ID.F)(), {
        clientEscMenuOptions: CD
      } = (0, SD.o)(["clientEscMenuOptions"]);
      return (0, OD.b)() ? (0, mD.jsx)(MD.e, {
        label: DD("settingsMenu:vibration"),
        checked: CD.vibration,
        onClick: DD => {
          SD.d.setClientEscMenuOptions({
            vibration: DD
          })
        },
        circleInfoText: DD("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Kc() {
      return (0, mD.jsx)(mD.Fragment, {
        children: Jc.map(((DD, CD) => (0, mD.jsx)(DD, {}, CD)))
      })
    }
    var ac = cD(4184);

    function Vc() {
      const {
        t: DD
      } = (0, ID.F)(), {
        isTouchScreen: CD,
        clientEscMenuOptions: cD,
        gameState: fD
      } = (0, SD.o)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), bD = (0, tD.h)("ezBridging"), QD = (0, tD.h)("ezTowering"), oD = "inGame" !== fD || !0 === bD, vD = (0, ZD.d)() && ("inGame" !== fD || !0 === QD), [, gD] = (0, pD.useReducer)((DD => DD + 1), 0), XD = (0, ND.f)(), [nD, OD] = (0, pD.useState)(ac.e);
      return (0, mD.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [XD && (0, mD.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, mD.jsx)("div", {
            children: DD("controller:settingsControlsNote")
          }), (0, mD.jsx)(wD.P, {
            onClick: () => {
              SD.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: DD("controller:settingsOpenController")
          })]
        }), (0, BD.isTouchscreen)() && !(0, BD.isMobile)() ? (0, mD.jsx)(mD.Fragment, {
          children: (0, mD.jsx)(MD.e, {
            label: DD("settingsMenu:useTouchControls"),
            checked: nD,
            onClick: DD => {
              (0, ac.b)(DD), OD(DD)
            }
          })
        }) : null, CD && (0, mD.jsx)(Kc, {}), oD && (0, mD.jsx)(MD.e, {
          label: DD("settingsMenu:ezBridging"),
          checked: cD.ezBridging,
          onClick: DD => {
            SD.d.setClientEscMenuOptions({
              ezBridging: DD
            })
          },
          circleInfoText: DD("settingsMenu:ezBridgingInfo")
        }), vD && (0, mD.jsx)(MD.e, {
          label: DD("settingsMenu:ezTowering"),
          checked: cD.ezTowering,
          onClick: DD => {
            SD.d.setClientEscMenuOptions({
              ezTowering: DD
            })
          },
          circleInfoText: DD("settingsMenu:ezToweringInfo")
        }), (0, mD.jsx)(MD.e, {
          label: DD("settingsMenu:crouchToggle"),
          checked: cD.crouchIsToggle,
          onClick: DD => {
            SD.d.setClientEscMenuOptions({
              crouchIsToggle: DD
            })
          },
          circleInfoText: DD("settingsMenu:crouchToggleInfo")
        }), (0, mD.jsx)(MD.e, {
          label: DD("settingsMenu:hideUiToggle"),
          checked: cD.hideUiIsToggle,
          onClick: DD => {
            SD.d.setClientEscMenuOptions({
              hideUiIsToggle: DD
            })
          },
          circleInfoText: DD("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, yD.d)() && (0, mD.jsx)(MD.i, {
          name: DD("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: cD.touchscreenSensitivity,
          onChange: DD => {
            SD.d.setClientEscMenuOptions({
              touchscreenSensitivity: DD
            })
          }
        }), !(0, BD.isMobile)() && (0, mD.jsx)(MD.i, {
          name: DD("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: cD.mouseSensitivity,
          onChange: DD => {
            SD.d.setClientEscMenuOptions({
              mouseSensitivity: DD
            })
          }
        }), !(0, BD.isMobile)() && (0, mD.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, mD.jsx)("div", {
            className: "SliderText",
            children: DD("settingsMenu:keyBindings")
          }), iD.g.map((CD => (0, mD.jsx)(zc, {
            title: DD(CD.name.translationKey, CD.name.params),
            defaultOpen: iD.h.has(CD.id),
            children: CD.actions.map((DD => (0, mD.jsx)(jc, {
              noaAction: DD,
              forceUpdate: gD,
              clashesWith: CD.clashesWith,
              showPadGlyph: XD
            }, DD)))
          }, CD.name.translationKey))), (0, mD.jsx)(wD.J, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, iD.y)(), gD()
            },
            children: DD("controls:resetBindings")
          })]
        })]
      })
    }

    function zc(DD) {
      let {
        title: CD,
        defaultOpen: cD,
        children: ID
      } = DD;
      const [iD, fD] = (0, pD.useState)(cD);
      return (0, mD.jsxs)("div", {
        className: QD()("ControlsSection", {
          Collapsed: !iD
        }),
        children: [(0, mD.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            fD(!iD)
          },
          children: [(0, mD.jsx)("div", {
            className: "ControlsSectionTitle",
            children: CD
          }), (0, mD.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), iD && (0, mD.jsx)("div", {
          className: "ControlsSectionRows",
          children: ID
        })]
      })
    }

    function jc(DD) {
      let {
        noaAction: CD,
        forceUpdate: cD,
        clashesWith: bD,
        showPadGlyph: SD
      } = DD;
      const {
        t: BD
      } = (0, ID.F)(), yD = (0, vD.c)(CD), [MD, tD] = (0, pD.useState)(!1), [ZD, ND] = (0, pD.useState)("controls:clickToEnterNewBinding"), [gD, XD] = (0, pD.useState)(null), [nD, OD] = (0, pD.useState)(null), PD = (0, pD.useRef)(null);
      (0, pD.useEffect)((() => {
        MD && PD.current && PD.current.focus()
      }), [MD]);
      const HD = iD.q[CD].filter((DD => fD.j[DD]));
      let UD = null;
      const xD = [],
        qD = bD.flatMap((DD => {
          var CD, cD;
          return null !== (CD = null === (cD = iD.g.find((CD => CD.id === DD))) || void 0 === cD ? void 0 : cD.actions) && void 0 !== CD ? CD : []
        }));
      for (const ID of qD) {
        if (ID === CD) continue;
        const DD = iD.q[ID];
        for (const CD of DD) HD.includes(CD) && xD.push(BD(iD.t[ID].translationKey, iD.t[ID].params))
      }
      xD.length > 0 && (UD = BD("controls:sharedBindingsWarning") + " ", UD += xD.join(", "));
      const JD = () => {
          tD(!1), XD(null), ND("controls:clickToEnterNewBinding"), OD(null)
        },
        KD = () => "BindingInput_" + CD;
      return (0, mD.jsxs)("div", {
        className: QD()("ControlRow", {
          WarningBorder: null !== UD
        }),
        children: [(0, mD.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, mD.jsxs)("div", {
            className: "ControlName",
            children: [BD(iD.t[CD].translationKey, iD.t[CD].params), SD && yD && (0, mD.jsx)(oD.c, {
              glyph: yD,
              className: "ControlPadGlyph"
            })]
          }), (0, mD.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, mD.jsxs)("div", {
              className: "ControlBindingsList",
              children: [HD.map((DD => (0, mD.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, mD.jsx)("div", {
                  children: (0, iD.m)(DD)
                }), (0, mD.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const ID = (0, iD.v)(CD, DD);
                    ID.isError() ? OD(ID.asError().message) : OD(null), cD()
                  },
                  children: "\xd7"
                })]
              }, DD))), !MD && (0, mD.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  tD(!0), OD(null)
                },
                children: (0, mD.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), MD && (0, mD.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, mD.jsxs)("div", {
                className: "InputContainer",
                children: [(0, mD.jsx)("div", {
                  className: "InputOverlay",
                  children: gD ? (0, iD.m)(gD) : (0, mD.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: BD(ZD)
                  })
                }), (0, mD.jsx)("input", {
                  ref: PD,
                  id: KD(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: DD => {
                    if ("Escape" === DD.code) return JD(), DD.preventDefault(), void DD.stopPropagation();
                    const CD = DD.code;
                    fD.e.includes(CD) ? (OD(null), XD(CD)) : (OD("controls:keyIsReserved"), XD(null)), DD.preventDefault(), DD.stopPropagation()
                  },
                  onMouseDown: DD => {
                    const CD = "Mouse" + (DD.button + 1);
                    document.activeElement && document.activeElement.id === KD() ? fD.e.includes(CD) ? (OD(null), XD(CD)) : (OD("controls:keyIsReserved"), XD(null)) : ND("controls:enterNewBinding"), DD.stopPropagation()
                  },
                  onBlur: () => {
                    ND("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, mD.jsx)(wD.i, {
                onPointerDown: DD => {
                  DD.preventDefault()
                },
                onClick: () => {
                  (0, iD.d)(CD, gD), cD(), JD()
                },
                className: "ControlBindingAddButton",
                disabled: null === gD,
                children: BD("general:add")
              }), (0, mD.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  JD()
                },
                children: "\xd7"
              })]
            }), nD && (0, mD.jsx)("div", {
              className: "ControlBindingError",
              children: BD(nD)
            })]
          })]
        }), UD && (0, mD.jsx)("div", {
          className: "ControlRowWarning",
          children: UD
        })]
      })
    }
  },
  8545: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => bD
    });
    var ID = cD(16),
      pD = cD(3241),
      iD = cD(1340),
      fD = cD(1388);
    const bD = async () => {
      if ((0, fD.e)()) {
        if (!0 !== await iD.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== ID.d.get("gameState")) return
      }(0, pD.b)()
    }
  },
  8548: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => QD,
      e: () => iD,
      g: () => fD,
      j: () => pD,
      m: () => bD
    });
    var ID = cD(1937);
    const pD = "controllerPadShopOpen",
      iD = DD => ID.f.includes(DD),
      fD = DD => Object.values(DD).some((DD => !1 !== DD.canBuy && !DD.isRewardedAd)),
      bD = (DD, CD, cD) => {
        var ID, pD, fD, bD;
        const QD = DD.filter((DD => !iD(DD))),
          wD = null !== CD && DD.includes(CD) ? CD : null;
        return null !== wD && !iD(wD) && cD(wD) ? wD : null !== (ID = null !== (pD = null !== (fD = null !== (bD = QD.find(cD)) && void 0 !== bD ? bD : QD[0]) && void 0 !== fD ? fD : wD) && void 0 !== pD ? pD : DD[0]) && void 0 !== ID ? ID : null
      },
      QD = DD => DD.userInput || DD.isRewardedAd || "boolean" === typeof DD.isSelected ? null : JSON.stringify([DD.image, DD.cost, DD.currency, DD.amount, DD.customTitle, DD.buyButtonText, DD.description, DD.canBuy])
  },
  8572: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => wD,
      f: () => SD
    });
    var ID = cD(53),
      pD = cD(1440),
      iD = cD(1988),
      fD = cD(1403),
      bD = cD(1417),
      QD = cD(1093);
    const wD = () => {
        const DD = (0, fD.q)();
        if ((0, ID.useEffect)((() => {
            (0, fD.g)()
          }), []), !DD) return null;
        const {
          ControllerCategory: CD
        } = DD;
        return (0, QD.jsx)(bD.b, {
          children: (0, QD.jsx)(CD, {})
        })
      },
      SD = () => {
        var DD;
        const CD = (0, fD.q)(),
          [, cD] = (0, ID.useReducer)((DD => DD + 1), 0);
        return (0, pD.f)(iD.b, cD), null !== (DD = null === CD || void 0 === CD ? void 0 : CD.hasActivePad()) && void 0 !== DD && DD
      }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);